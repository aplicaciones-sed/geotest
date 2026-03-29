const CACHE = 'simulacro-2-v3';
const ASSETS = [
  './index.html',
  './manifest.json',
  './sw.js',
  '../shared/css/exam.css',
  '../shared/js/app.js',
  '../shared/js/data.js',
  '../js/config.js',
  '../js/questions.js',
  '../assets/img/icon-192.png',
  '../assets/img/icon-512.png',
  '../assets/img/icon-escudo.svg',
];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
  self.skipWaiting();
});
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});
self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});
