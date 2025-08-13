
const CACHE_NAME='safe-ground-v13r4';
const ASSETS=['./','./index.html','./manifest.webmanifest','./style.css','./README.txt','./map.html',
'./icon-192.png','./icon-512.png','./assets/markers.json','./assets/sugadaira_map.jpg'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(ASSETS))));
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));
