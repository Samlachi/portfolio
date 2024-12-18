'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "02ffea3fa27a8fcd64c01c201b62028c",
".git/config": "15daf5227e5a94db5745fd65e8bb8193",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
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
".git/index": "cd395799c5559209213889d97332c92e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "dbf3e1aeb7326ee6b5dcfe262fbe0d23",
".git/logs/refs/heads/main": "869da33361b9398c9af4bb6e49dd72ed",
".git/logs/refs/remotes/origin/main": "e2cee52057ca4155c646b059a4408e6d",
".git/objects/08/b5dd4ccd40f14ea4106619556639552842d86c": "d7d31cceda267e2b5589d51a30605938",
".git/objects/0f/12ecbd775f88279e23b36c3d8979b37fea7b6b": "023bcdc24cdc03b8cd16f61e7c5fcf8d",
".git/objects/17/e43c2a6aa55de51e1dee1a29ab2e61d0b19692": "7e3d17ff3a165be84c07a699656f22f9",
".git/objects/19/189747e65eaaea91cb7612bf56cbf56bc637d7": "bc7d6e79ca97187111875695f51db024",
".git/objects/1a/b368730206d9cb74a578680e044544aadde3a4": "02bc16b13a59ca7816382ee4fc51a570",
".git/objects/1d/fdfa63c6ba7a9b637c2e9e567524be53c52a21": "73ce829dd4bbdf29ae6f6b51d1f9233f",
".git/objects/23/1c48a273c65bc9bda92f1572b5279ea416fa6d": "4ec9307bca51d417d76eaa9e2b0d7700",
".git/objects/30/08fb4fd580b3e439ca06ebad3f7ba30e4a76ac": "e605747c59bfdb6214d2d1c32b344feb",
".git/objects/30/2066a42ef6d3ab66d3196e6f22ce685074da9a": "9772c8ede531433fc48cdce07453d153",
".git/objects/30/2f81d29f1551c538432d295cf92ce22a16e683": "b35cdbeaeb29abd2e213825305378091",
".git/objects/31/074e5a920fa4914fbdef3971e5cebe2ecc5b06": "8ca6acce32ca9b7d9dcd077c3e8b4c51",
".git/objects/36/762ab05e96a25288cd0a0c84222504a5f889a6": "3e742b090cd559b65e11203c6b936967",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/57/ecede9cbd79c797482f84a9ee70aaa2d6454f7": "c29d51d3d9aa9d67e7b8348d9a57cbde",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6c/a321386d3ea7d2f599784e7411d2dc1a2317ac": "9a72695978513e23817b432c9f0ba681",
".git/objects/6e/952fe96208226907c74dfe2b92504dda73bcea": "e8b127e910c25fe271ad896aa9cb5256",
".git/objects/6e/9eead16a726678090e731944c5f7da314df8cd": "0d50ee6d6ac872d3d8c18cd6ee2f7985",
".git/objects/80/0a6d1ff4ef7b8677ecdf602612c099c8bd82ef": "82c8a9606e22234de303b8560b396f2f",
".git/objects/82/a5ae755e25465cb3b615e76f599417c1874cfd": "7a3901f766d8676d9e69c18458c77000",
".git/objects/84/09e675a47b520e6904854c913b4c36b29e1485": "762631f120f01a0224ffe9ebf935b68a",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/8571d32013ed5720e37a2b1c96484d5e501fa1": "15d1dec8b9c4375ebe07c1c5e3375d74",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/fee571a3fc027249af82c6a1ed0301341cae59": "166864174dc75017fc9ec9b0602d46ec",
".git/objects/8c/72d476a023589f49b386904316a9755aa7e0aa": "7ce395e85a497cf2e1f80198c056f580",
".git/objects/8e/0c65ff92aaa2b7ac353e6cad151e5834456e0a": "025e8fc033aa18545c1ec8687722c70b",
".git/objects/99/ae098f0398b1630288e183fe5c6e07e53d3354": "1d0f44add7baddc8cd2a33ff846e3843",
".git/objects/9a/7b0bef4397f2da8da132d9f1df7f6b9cbdcc29": "a1257e3a1aa99fedfebb2b4f5503c4fa",
".git/objects/a1/247efd7bd776cc556a1a69eddea52558e4b120": "fd9af193884986ff26105bbce6777a68",
".git/objects/a1/c3861f5357360c19f2b0101f39d50d2f1ffb40": "2394f49dfc27417ada80569ee1501e27",
".git/objects/a4/dd40ca569a8f3cc245d1aa855b2efe5021291f": "b4e1e8a5baf801657a00b2541d2cfb92",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/aa/0d5befa6a05b9ecf7fbf05513578208c23ad68": "5305c6aa1def18479b32f216ec78d63a",
".git/objects/b4/a1fb3f6871391d2f4c8c06a165923b185b2919": "f5c918d19ff56004838fe56ca48d7bea",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/fe01e0c1aaf6ccd551df97a48ff71bf70f3aab": "8f32be9134f7e11f4a512c47492605da",
".git/objects/bd/234273391d30a573706c840a8a8e13f3b42fbe": "517ab3bc1e1a984f773c87fe0192be3a",
".git/objects/c4/29bc61a160781aca8b7383180520dea63ae73b": "26cbef30c3a8d1734d02ee05f1600641",
".git/objects/c6/a6879a8ba409b7564f201ae6f86eb398d43d17": "7d907c95204b1c91c077907b9f64223d",
".git/objects/cc/64e362c8424372245754173b629fce61ec7da6": "33d6db1af29778b457da9baf229e9800",
".git/objects/cf/b0751a3709e40f99c2a3b5eb66bfc630c5a749": "d7a9c39f5ff6aac45a7317cbd132aac4",
".git/objects/d4/2ccece5a705a1d4e9eb27a4901d9001f1cb121": "6b840c4d559a95ee56ba1cd0e973479b",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d9/15f994c4a78a71cd1274cf693e09bd1f028e0e": "bec39d17830569884b4f60fe1acd383d",
".git/objects/de/9983d7263d5f115c0e13abdff8c19a0807c503": "3a02ab6416dc94941f7297151ca5925c",
".git/objects/e5/8a4ec5ae3c5144afafb42d11423a2f39f43330": "a378767819e6e00684f9d61f15732208",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/ff/1a124d50acba4b66a7ccd3b0c8a01b8b6f1568": "d571b0c4c0dceddd5448e1356c2c07d5",
".git/refs/heads/main": "367c61999caa85d9525508eb54129446",
".git/refs/remotes/origin/main": "367c61999caa85d9525508eb54129446",
"assets/AssetManifest.bin": "c89150b32c42dbe87d9b21dfa666121d",
"assets/AssetManifest.bin.json": "d0f3f8bdaa7e1a7bbaa97b0697676fe8",
"assets/AssetManifest.json": "118a83e918f0bb41fcc248c6c471801a",
"assets/assets/android.png": "76c849dfc88d215dc196e648605e4946",
"assets/assets/androidIos.png": "0f0d8aaf237806cf45f8e417da6ecaab",
"assets/assets/animation.json": "16b97c0db5ab9132ef0617ed673adeb0",
"assets/assets/dart.svg": "c96c235729dd8a64badc4e087ea73af4",
"assets/assets/dash.png": "adf03c5e3c90d4e867f7116a3a331ba1",
"assets/assets/file.svg": "d03087371235940086b79f248ea5cb60",
"assets/assets/flutter.svg": "749737f954a8acaae1b3d389b3fc857f",
"assets/assets/JetpackCompose.svg": "08e6cf8f50d19ecb1a4eba51128cee65",
"assets/assets/kotlin.svg": "de7c472e6f5cfd4e95557fcde4b0c3aa",
"assets/assets/logo3.png": "8be8eb537c8545f90376835b54af53fc",
"assets/assets/phone.png": "ada27811356ddaf31e2f753e66c0a94e",
"assets/assets/sdk.png": "1ca538fff47a2909f365a985f3397a01",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "f525d394c45ff490ddd7c60472d521d5",
"assets/NOTICES": "eaaad5eb2df6211510d752de1d08330c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "278386acabc86a634c5ef1251ceb60b8",
"canvaskit/canvaskit.js.symbols": "ff204c6b77c9e5969d85d9bfbaa0c843",
"canvaskit/canvaskit.wasm": "af3fa7199fe8c2e2d627c2a0f66a84f6",
"canvaskit/chromium/canvaskit.js": "ee87bfbc2187114e440f19b031953f83",
"canvaskit/chromium/canvaskit.js.symbols": "85275e659470daa080e014ffe17a1a59",
"canvaskit/chromium/canvaskit.wasm": "06438416e37e4c585c29b82a397b5407",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "c7cf698f802bc5e9e8e791f762ebdfe9",
"canvaskit/skwasm.wasm": "c528f7ba97a317e25e547ea47c8a66d8",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "a564f5dfbd90292f0f45611470170fe1",
"canvaskit/skwasm_st.wasm": "3179a61ea4768a679dbbe30750d75214",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "898b71a86a712c4caa78aae1cc937f89",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "def8879adf3a324ac357d523013ae60a",
"/": "def8879adf3a324ac357d523013ae60a",
"main.dart.js": "06d959555850044ac935074c3724555b",
"manifest.json": "184d78365eb4903eb210f644114c8840",
"version.json": "c71d95ab6b627332888068afc4bd0def"};
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
