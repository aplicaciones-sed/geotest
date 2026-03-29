const CACHE = 'simulacro-v4';
const ASSETS = [
  './index.html',
  './manifest.json',
  './sw.js',
  '../shared/css/exam.css',
  '../shared/js/app.js',
  '../shared/js/exam.js',
  '../shared/js/meta.js',
  '../shared/js/nivel.js',
  '../js/simulacros.js',
  '../js/questions.js',
  '../assets/img/icon-192.png',
  '../assets/img/icon-512.png',
  '../assets/img/icon-escudo.svg',
  '../assets/img/logo.svg',
  '../assets/img/cuy_correcto_ok.png',
  '../assets/img/cuy_incorrecto_ok.png',
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
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request).catch(() => caches.match('./index.html'))));
});
