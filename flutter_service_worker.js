'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "1227fbd7bc364fb88b2f9a59cca49fa1",
"version.json": "a276b746da34e86c0637e2906415766c",
"favicon.ico": "b36d7c7e9597ff94357716e005d84ccf",
"index.html": "0bc141c9572b94fc40b49aaf3685dc06",
"/": "0bc141c9572b94fc40b49aaf3685dc06",
"CNAME": "21d72105bf7dd66767d9ec3801fb3020",
"main.dart.js": "8af7e1df44aa3149c5c1eb517ef83b7f",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"icons/Icon-192.png": "3203f2dbe2eaf9a49c3ba4a7e91c0593",
"icons/Icon-maskable-192.png": "3203f2dbe2eaf9a49c3ba4a7e91c0593",
"icons/Icon-maskable-512.png": "6d10105786271041f8fa94e957759a58",
"icons/Icon-512.png": "6d10105786271041f8fa94e957759a58",
"manifest.json": "3ade4dc4b838f626ebceecfdb3bcdab0",
"assets/AssetManifest.json": "8272f8dc823a87c61b63defb8516816f",
"assets/NOTICES": "5439954a1affc86943712812b017ce1f",
"assets/FontManifest.json": "e3f5a1abfd8e727b78f876f2d8977433",
"assets/AssetManifest.bin.json": "3188743be3f9d1ce0788b404e59cdfcc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b93248a553f9e8bc17f1065929d5934b",
"assets/packages/flutter_material_symbols/lib/fonts/material_symbols_regular.ttf": "0ca3d9dc35a283a5ae7c43e79da8388f",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "9485fb18373a28717dedd57c1a0d6bf9",
"assets/fonts/PlusJakartaSans-Medium.ttf": "0a825b3e08f62af5a9bc9130843b12ff",
"assets/fonts/PlusJakartaSans-Regular.ttf": "dd3a1370a03dc0f2d7d093bd0ffe7c0b",
"assets/fonts/Futura-Bold.ttf": "24d1901ca5e0a9c099b58f86dc05e30c",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/fonts/Futura-Medium.ttf": "e231b858f58fa014077ec5b6f338d0fb",
"assets/fonts/PlusJakartaSans-Bold.ttf": "bac8ecad2d6da4aa6b4200699a80a9dd",
"assets/assets/ic_delivery_accept.svg": "f0cee42de519d1d861ba3e53631551bd",
"assets/assets/image_app_terms_not_accepted.svg": "61642c147e5eea672d55c671a183cd95",
"assets/assets/ic_restore.svg": "c4dfe5451523b856f6e1e25f202e88e7",
"assets/assets/image_empty_overview.svg": "a1c08a5bbf14a2ae26d9d67950d32714",
"assets/assets/ic_history.svg": "38f6781ed99b376e99702949841e2f7b",
"assets/assets/image_food_background.png": "b6233d0a2192f796c8f0c6e931f7d0ce",
"assets/assets/ic_food_box_alert.svg": "bf94ed4d04e00eeca9c17325aaef5579",
"assets/assets/ic_calendar.svg": "e9732b355bacd2f125696d30b6e4f9cd",
"assets/assets/ic_hot_circled.svg": "8aa9ed4e88df141a3b282b234346ce5f",
"assets/assets/image_error_generic.svg": "981cd5e41cc3d4e6b83265daab28daee",
"assets/assets/image_empty_meals.svg": "0550ba444c36c573687fd1579414dc44",
"assets/assets/image_force_update.svg": "9d50621fef5c76ffbde23611db7c26e6",
"assets/assets/image_empty_box.svg": "0722e8fb49843ad6c70e50a3a4754270",
"assets/assets/image_food_background_square.png": "09ad44c54dab6d570546c49295cb2780",
"assets/assets/image_app_terms_new_version.svg": "ad547b42e98cfa959846400e2ff740d9",
"assets/assets/ic_pack.svg": "cdef8106eda6f17f32b39142b16bd881",
"assets/assets/ic_food_box.svg": "d511fe56d7e51cd3a36feac1bcec45c6",
"assets/assets/ic_delivery_run.svg": "5651d3773de1332e422cc337b6a68277",
"assets/assets/ic_cold.svg": "3d096f622c0b33f16f4138dc3b8e24da",
"assets/assets/zj_app_icon.svg": "ed33b4c9ba690d5b32d20e3699c1bc45",
"assets/assets/image_zo_logo.svg": "8fef86e736f89db4c2003d7ce057d350",
"assets/assets/ic_meal.svg": "0ba1e3029bfe2d6105037341e9cba253",
"assets/assets/image_error_offline.svg": "a0140d3738e5a887d2c14aafb05fa17b",
"assets/assets/zj_app_icon.png": "5db5ba87a40563da71fb3f981ec9a405",
"assets/assets/image_empty_notifications.svg": "8441f97d99d3dffb5a8e7a81e9e78e16",
"assets/assets/ic_allergens.svg": "a9b255345594b995c85de778cd40f2c0",
"assets/assets/image_empty_chef.svg": "d74c96ce6ad1e48a64f56b8a95f47043",
"assets/assets/image_food_background_dimmed.png": "f4cb6b2e5aa5af2ee13f96e03a25126c",
"assets/assets/ic_hot.svg": "bc736d42a52a72afd853b3cc20201b24",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
