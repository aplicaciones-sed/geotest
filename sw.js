const CACHE = 'portal-sed-narino-v11';

const ASSETS = [
  './',
  './index.html',
  './shared/css/portal.css',
  './shared/css/exam.css',
  './shared/js/questions.js',
  './manifest.json',
  './shared/img/portal/icon-192.png',
  './shared/img/portal/icon-512.png',
  './shared/img/portal/icon-escudo.svg',
  './shared/img/portal/splash.png',
  './shared/img/portal/banner_web.png',
  './shared/img/portal/banner_movil.png',
  './shared/img/portal/logo.svg',
  './simulacro/index.html',
  './simulacro/manifest.json',
  './simulacro/sw.js',
  './shared/js/exam.js',
  './shared/js/data.js',
  './shared/img/questions/test_triangulo_eq.png',
  './shared/img/questions/test_triangulo_recto.png',
  './shared/img/questions/test_triangulo_acut.png',
  './shared/img/questions/test_cuadrilatero.png',
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(ASSETS))
  );
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
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request).catch(() =>
      caches.match('./index.html')
    ))
  );
});
