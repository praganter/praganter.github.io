'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/config": "2ea1698da785a9ec3b4c1347aa6e7a8e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "d0974fac30eaadaf5ac5613da63ee380",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "4efa690c17bab683eab00d80399de29a",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "338566a26bfb3736b4429e1162c2d425",
".git/logs/refs/heads/master": "338566a26bfb3736b4429e1162c2d425",
".git/logs/refs/remotes/origin/HEAD": "338566a26bfb3736b4429e1162c2d425",
".git/objects/pack/pack-dc2afe6dde2a9a6ffe9c864be367c338ad8892ea.idx": "1cd2dc95a9b3f0581ba22661e1722922",
".git/objects/pack/pack-dc2afe6dde2a9a6ffe9c864be367c338ad8892ea.pack": "00697c493991ac00fe77850eabe05471",
".git/packed-refs": "4b45de4f2db132dfc6455ba855455996",
".git/refs/heads/master": "ae8e22807fe3ec72ff7613330433f6fe",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
"assets/AssetManifest.json": "3864428cdb7b5c0ee5dec65c193927d0",
"assets/assets/CV.pdf": "2000e17fdb3a9bee1bbd499652d51894",
"assets/assets/cv.png": "cc7848718aeeecf965b5aaccb7ab7b87",
"assets/assets/email.png": "55bb160fd578c9df2ae66d36b796d197",
"assets/assets/github.png": "c67686f615f334806a07d41d594c34c1",
"assets/assets/instagram.png": "e1b45c5b8943f0dc6888904b74b3aa5d",
"assets/assets/linkedin.png": "e96790ecc2a4abffd3ed36dcdfe0b0cd",
"assets/assets/profile.jpeg": "b2e8de3a960c070dc537b1f911d320cd",
"assets/assets/steam.png": "584022b6be72c1761d5d3b06567e5892",
"assets/assets/twitter.png": "459534e7c22d598d18608abfe5e8b8c1",
"assets/CV.pdf": "2000e17fdb3a9bee1bbd499652d51894",
"assets/cv.png": "cc7848718aeeecf965b5aaccb7ab7b87",
"assets/email.png": "55bb160fd578c9df2ae66d36b796d197",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/github.png": "c67686f615f334806a07d41d594c34c1",
"assets/instagram.png": "e1b45c5b8943f0dc6888904b74b3aa5d",
"assets/linkedin.png": "e96790ecc2a4abffd3ed36dcdfe0b0cd",
"assets/NOTICES": "3159a27e9d229c2e06ff8a130fe72c62",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/profile.jpeg": "2224cf1de756459ad4509f3662fa849f",
"assets/steam.png": "584022b6be72c1761d5d3b06567e5892",
"assets/twitter.png": "459534e7c22d598d18608abfe5e8b8c1",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"CNAME": "5e5ab71e88726a2e298fe6a7b282033c",
"favicon.ico": "074151f6b6664ff16df2406326963bc1",
"favicon.png": "a86964adb6ca70c441e0037f14c43201",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"icons/favicon.png": "a86964adb6ca70c441e0037f14c43201",
"icons/Icon-192.png": "7f4237e4971df1cba73a4b7c614ebec5",
"icons/Icon-512.png": "6a59236df8783d3a93582824b7046edf",
"icons/Icon-maskable-192.png": "7f4237e4971df1cba73a4b7c614ebec5",
"icons/Icon-maskable-512.png": "6a59236df8783d3a93582824b7046edf",
"index.html": "0e4576bd5c6b607d176ef4e688ed5abd",
"/": "0e4576bd5c6b607d176ef4e688ed5abd",
"mailer.js": "2350814112c552fd8e17865e8d3116c4",
"main.dart.js": "217670778c5a14fad311074117d775f5",
"manifest.json": "5f01a060dda9bc41b624f49bfb12cd58",
"version.json": "6b1b03e15b6cbf81e5dc139bd254a98d"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
