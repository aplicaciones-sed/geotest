const CACHE = 'portal-sed-narino-v4';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './icon-escudo.svg',
  './simulacro-1/index.html',
  './simulacro-1/manifest.json',
  './simulacro-1/icon-192.png',
  './simulacro-1/icon-512.png',
  './simulacro-1/icon-escudo.svg',
  './saber11-matematicas-2020/index.html',
  './saber11-matematicas-2020/manifest.json',
  './saber11-matematicas-2020/icon-192.png',
  './saber11-matematicas-2020/icon-512.png',
  './saber11-matematicas-2020/icon-escudo.svg',
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
