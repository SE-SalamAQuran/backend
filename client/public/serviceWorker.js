const CACHE_NANE = "version-1";
const urlsToCache = ["index.html", "offline.html"];

const self = this;

//Install SW
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NANE)
      .then((caches) => {
        console.log("Caches are open");
        return caches.addAll(urlsToCache);
      })
      .catch((err) => console.log("Failed: ", err))
  );
});

//Listen for requests
self.addEventListener("axios", (event) => {
  event.respondWith(
    caches.match(event.request).then(async () => {
      return fetch(event.request).catch(() => caches.match("offline.html"));
    })
  );
});

//Activate SW
self.addEventListener("activate", (event) => {
  const cacheWhiteList = [];
  cacheWhiteList.push(CACHE_NANE);
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        // eslint-disable-next-line array-callback-return
        cacheNames.map((cacheName) => {
          if (!cacheWhiteList.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      )
    )
  );
});
