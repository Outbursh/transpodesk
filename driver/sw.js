// TranspoDesk driver page: keeps this page and its logo on the phone so it opens with no signal.
// Pages are fetched fresh when there is signal (so updates arrive) and taken from the phone only when offline.
var CACHE = 'td-driver-v1';
var FILES = ['/driver/', '/logo.png', '/favicon.ico', '/icon-192.png', '/manifest.webmanifest'];
self.addEventListener('install', function (e) { e.waitUntil(caches.open(CACHE).then(function (c) { return c.addAll(FILES); })); self.skipWaiting(); });
self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (ks) { return Promise.all(ks.filter(function (k) { return k !== CACHE; }).map(function (k) { return caches.delete(k); })); }));
  self.clients.claim();
});
self.addEventListener('fetch', function (e) {
  var r = e.request, u = new URL(r.url);
  if (r.method !== 'GET' || u.origin !== location.origin) return;            // the app itself (Google) is never cached
  if (r.mode === 'navigate') {
    e.respondWith(fetch(r).then(function (res) {
      var copy = res.clone(); caches.open(CACHE).then(function (c) { c.put('/driver/', copy); }); return res;
    }).catch(function () { return caches.match('/driver/'); }));
    return;
  }
  e.respondWith(caches.match(r, { ignoreSearch: true }).then(function (hit) { return hit || fetch(r); }));
});
