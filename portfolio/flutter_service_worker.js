'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"manifest.json": "2c6a9aa129014b65db07e1e0700dff77",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"version.json": "7804eb643eb875d188221832d4ff86c5",
"icons/apple-icon-152x152.png": "874f603ccb547e7868e3a470515e5144",
"icons/android-icon-96x96.png": "f2c142481529ea0f58099b824a2aa32b",
"icons/apple-icon-144x144.png": "d9d90f5ff216bfbdbd6e1d558a1d9880",
"icons/manifest.json": "b58fcfa7628c9205cb11a1b2c3e8f99a",
"icons/apple-icon-180x180.png": "228d921e96178071db06e33f3fce37c2",
"icons/ms-icon-310x310.png": "61539b3e5d7cd839a7afa34de6b59a9f",
"icons/android-icon-72x72.png": "d59b2c0acc09276f29a8098fcd822000",
"icons/favicon.ico": "cace23ea60fc8cf71451ecb1005fdeca",
"icons/ms-icon-150x150.png": "9ef85ea7244fc1701bf6d172575a7b3a",
"icons/browserconfig.xml": "653d077300a12f09a69caeea7a8947f8",
"icons/apple-icon-120x120.png": "fa6fe275e078d162642db358571cb009",
"icons/android-icon-144x144.png": "d9d90f5ff216bfbdbd6e1d558a1d9880",
"icons/favicon-96x96.png": "f2c142481529ea0f58099b824a2aa32b",
"icons/favicon-16x16.png": "1c231db62fdcc75619ce7bc86508108b",
"icons/ms-icon-144x144.png": "d9d90f5ff216bfbdbd6e1d558a1d9880",
"icons/apple-icon-114x114.png": "3cae9266a351111ee1247e900d94e44a",
"icons/android-icon-192x192.png": "50bd8dad1caa3f5119cbd0fe5c3f315f",
"icons/apple-icon-precomposed.png": "ec4cb8bd4aa2dbb6c425e740cb8e066d",
"icons/apple-icon-76x76.png": "f7a058cad7fb8ed85234b8bba75afd62",
"icons/apple-icon-72x72.png": "d59b2c0acc09276f29a8098fcd822000",
"icons/apple-icon.png": "ec4cb8bd4aa2dbb6c425e740cb8e066d",
"icons/android-icon-48x48.png": "758c8778265245b849a5cc1c1da80c76",
"icons/android-icon-36x36.png": "0cb2d062041c4611efcb722e5b28bf85",
"icons/apple-icon-57x57.png": "30da2ae8eaf6c1129cbdbeac0dc79d9c",
"icons/ms-icon-70x70.png": "7ea4dc211879b6836eb89258c6cd8fdb",
"icons/favicon-32x32.png": "a859becc6d2eba715da9151af9eb7d74",
"icons/apple-icon-60x60.png": "ce27c1cb9bf635d32a831519cd57b1d7",
"assets/NOTICES": "bee01cd70931acb8677edfb0b79a3742",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/FontManifest.json": "64de96f3435907ac6b622e16b613f3ea",
"assets/assets/icons/social-icons.ttf": "cf002f4d9b7a4bd02bf8b1dc0507fe21",
"assets/assets/images/react.png": "3ff60e4494914062e02252c43baf1e30",
"assets/assets/images/java.png": "f12e658da62f393005c4745d2570fae8",
"assets/assets/images/github.png": "54012d735d1b6848c1401162eb37278e",
"assets/assets/images/android-studio.png": "95f3575e5bd592e8fde138f2cca049b7",
"assets/assets/images/neon-lines.jpg": "d2fc320f53d7c2f3efd0f5dd6e830ff5",
"assets/assets/images/css.png": "8cc02d5cfcc0fdf07828f4e68f7cd706",
"assets/assets/images/oracle.png": "74b7fca66cad3e0b6afea7af1171d09f",
"assets/assets/images/python.png": "e6a5edd9cd7894a247d9f257d32e0727",
"assets/assets/images/cpp.png": "1bf6043fecde0dd08608728eeaed37c1",
"assets/assets/images/js.png": "8155d983e2c1460e10661d6945336f58",
"assets/assets/images/firebase.png": "35436ebe6206a05522423551913de65b",
"assets/assets/images/flutter.png": "4d5b3ea2234a2e959450efb3b933f515",
"assets/assets/images/mysql.png": "0eb738d4ce73356e64f96c3d0fdbc6cd",
"assets/assets/images/mongodb.png": "d00dedf5d1f08e6799deca634ad8074c",
"assets/assets/images/dart.png": "315f803bc60fc21c86efc35ad309d629",
"assets/assets/images/git.png": "b8065e48b4c3d1850239b9ee15aaa802",
"assets/assets/images/html.png": "7d75c406d32101170314f6717b7bfbce",
"assets/assets/images/code.png": "ab9b0cbbabf2678a2f63f96efb91d2a1",
"assets/assets/images/nodejs.png": "93eaeb61b5eb9ee25f830ec07a9b9e0a",
"assets/assets/images/intellij.png": "79c522718e43cbbcf5a9aa54a488090e",
"assets/assets/images/c.png": "fd3178c2d0a57b9b471a30b9422bafdc",
"assets/assets/fonts/Belanosima/Belanosima-SemiBold.ttf": "f56774b13535a9a8bb6b04b16cc02ded",
"assets/assets/fonts/Belanosima/Belanosima-Bold.ttf": "a185b607130f07a6c3390741207a06da",
"assets/assets/fonts/Belanosima/Belanosima-Regular.ttf": "dfc8bf24a88e20b5d33aba0d0f0cab93",
"assets/fonts/MaterialIcons-Regular.otf": "1a0376baf895dab92800f16211d63eb6",
"assets/AssetManifest.json": "4d9a006f2e3979e471cc6f838437015c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/AssetManifest.bin": "a46bf276e18a94dc41b0df9d6185807c",
"main.dart.js": "557d9376370524985a50283b53f7cce1",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"index.html": "eada7535147341d0199e51cb66168779",
"/": "eada7535147341d0199e51cb66168779"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
