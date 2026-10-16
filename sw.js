/* Service Worker — دروس العربية / Sheikh Touri Arabic lessons
 *
 * Hand-written (this project has no bundler, so vite-plugin-pwa is not applicable).
 * Implements the requested strategies explicitly:
 *   - Network-first for pages / navigations (and any non-versioned same-origin request).
 *   - Cache-first for versioned / content-hashed files ("ملفات ذات الأسماء المتغيرة", e.g. ?v=5).
 *   - Auth / login / OAuth paths are never intercepted or cached.
 */

const VERSION = 'v1';
const PAGES_CACHE = 'arabic-pages-' + VERSION;
const ASSETS_CACHE = 'arabic-assets-' + VERSION;
const OFFLINE_URL = './index.html';

/* App shell pre-cached on install. */
const PRECACHE = [
  './',
  './index.html',
  './manifest.webmanifest',
  './assets/css/styles.css?v=5',
  './assets/js/lessons.js?v=5',
  './assets/js/app.js?v=5',
  './assets/icons/icon-192.png',
  './assets/icons/icon-512.png',
  './assets/icons/icon-maskable-512.png',
  './assets/icons/apple-touch-icon-180.png'
];

/* Never intercept / cache these (login, auth, OAuth). */
const EXCLUDE_PATH = /(?:^|\/)(?:login|signin|sign-in|signout|logout|auth|oauth|callback|account)(?:\/|$|\?|#)/i;
const EXCLUDE_HOST = /(?:^|\.)(?:accounts\.google\.com|github\.com|facebook\.com|apple\.com)$/i;

/* Versioned / content-hashed asset detection. */
const VERSIONED = [
  /[?&]v=\d+/i,
  /[?&](?:version|ver|hash|rev)=/i,
  /\.[0-9a-f]{8,}\.(?:js|css|png|jpe?g|svg|webp|woff2?)$/i
];

self.addEventListener('install', (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(ASSETS_CACHE);
    await Promise.allSettled(
      PRECACHE.map((url) => cache.add(new Request(url, { cache: 'reload' })))
    );
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const keep = [PAGES_CACHE, ASSETS_CACHE];
    const keys = await caches.keys();
    await Promise.all(keys.filter((k) => keep.indexOf(k) === -1).map((k) => caches.delete(k)));
    await self.clients.claim();
  })());
});

function shouldExclude(url) {
  return EXCLUDE_PATH.test(url.pathname) || EXCLUDE_HOST.test(url.hostname);
}

function isVersioned(url) {
  const target = url.pathname + url.search;
  return VERSIONED.some((re) => re.test(target));
}

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;

  let url;
  try { url = new URL(req.url); } catch (e) { return; }

  // Only same-origin http(s); cross-origin (OAuth redirects etc.) goes straight to the network.
  if (url.origin !== self.location.origin) return;
  if (url.protocol !== 'http:' && url.protocol !== 'https:') return;
  if (shouldExclude(url)) return;

  const isPage = req.mode === 'navigate' || req.destination === 'document';

  if (isPage) {
    event.respondWith(networkFirst(req, PAGES_CACHE));
    return;
  }
  if (isVersioned(url)) {
    event.respondWith(cacheFirst(req, ASSETS_CACHE));
    return;
  }
  event.respondWith(networkFirst(req, PAGES_CACHE));
});

async function networkFirst(req, cacheName) {
  const cache = await caches.open(cacheName);
  try {
    const fresh = await fetch(req);
    if (fresh && fresh.ok && fresh.type === 'basic') {
      cache.put(req, fresh.clone()).catch(() => {});
    }
    return fresh;
  } catch (err) {
    const cached = await cache.match(req, { ignoreSearch: true });
    if (cached) return cached;
    const shell = await caches.match(OFFLINE_URL, { ignoreSearch: true });
    if (shell) return shell;
    return new Response('لا يوجد اتصال بالإنترنت / Offline', {
      status: 503,
      headers: { 'Content-Type': 'text/plain; charset=utf-8' }
    });
  }
}

async function cacheFirst(req, cacheName) {
  const cache = await caches.open(cacheName);
  const hit = await cache.match(req, { ignoreSearch: false });
  if (hit) return hit;
  try {
    const fresh = await fetch(req);
    if (fresh && fresh.ok && fresh.type === 'basic') {
      cache.put(req, fresh.clone()).catch(() => {});
    }
    return fresh;
  } catch (err) {
    return new Response('', { status: 504, statusText: 'Offline' });
  }
}
