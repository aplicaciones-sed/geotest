const CACHE = 'portal-sed-narino-v10';

const ASSETS = [
  './',
  './index.html',
  './css/portal.css',
  './js/portal.js',
  './js/config.js',
  './js/questions.js',
  './manifest.json',
  './assets/img/icon-192.png',
  './assets/img/icon-512.png',
  './assets/img/icon-escudo.svg',
  './assets/img/splash.png',
  './assets/img/banner_web.png',
  './assets/img/banner_movil.png',
  './shared/css/exam.css',
  './shared/js/app.js',
  './shared/js/data.js',
  './simulacro/index.html',
  './simulacro/manifest.json',
  './simulacro/sw.js',
  './js/simulacros.js',
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
