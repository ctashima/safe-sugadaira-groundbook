/* =========================================================
   Service Worker: オフライン/キャッシュ管理
   - CACHE_NAME を1文字変えると強制更新が走る
   ========================================================= */
const CACHE_NAME = 'safe-ground-v16'; /* ← 末尾の数字を増やすだけ */

/* 初回キャッシュ対象（画像は後で個別DLでもOK） */
const ASSETS = [
  './','./index.html','./map.html',
  './ground_G41.html','./ground_G83.html','./ground_G94.html',
  './style.css','./manifest.webmanifest',
  './assets/markers.json'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(ASSETS)));
});
self.addEventListener('activate', e => {
  e.waitUntil(self.clients.claim());
});
self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});