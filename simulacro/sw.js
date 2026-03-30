const CACHE = 'simulacro-v5';
const ASSETS = [
  './index.html',
  './manifest.json',
  './sw.js',
  '../shared/css/exam.css',
  '../shared/js/exam.js',
  '../shared/js/data.js',
  '../shared/js/questions.js',
  '../shared/img/portal/icon-192.png',
  '../shared/img/portal/icon-512.png',
  '../shared/img/portal/icon-escudo.svg',
  '../shared/img/portal/logo.svg',
  '../shared/img/portal/cuy_correcto_ok.png',
  '../shared/img/portal/cuy_incorrecto_ok.png',
  '../shared/img/questions/test_triangulo_eq.png',
  '../shared/img/questions/test_triangulo_recto.png',
  '../shared/img/questions/test_triangulo_acut.png',
  '../shared/img/questions/test_cuadrilatero.png',
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
