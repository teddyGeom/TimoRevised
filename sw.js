var CACHE_NAME = 'V1';
var FILES = [
  '/',
  'index.html',
  'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css',
  'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css',
  'https://cdn.jsdelivr.net/gh/openlayers/openlayers.github.io@master/en/v6.5.0/css/ol.css',
  'style.css',
  'https://cdn.jsdelivr.net/gh/openlayers/openlayers.github.io@master/en/v6.5.0/build/ol.js',
  'https://code.jquery.com/jquery-3.2.1.slim.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js',
  'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js',
  'https://cdn.polyfill.io/v2/polyfill.min.js?features=requestAnimationFrame,Element.prototype.classList',
  'main.js',
  'app.js'
];

self.addEventListener('install', function (event) {
  console.log('Installing Service Worker', event);
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function (cache) {
        console.log('Precaching static');
        cache.addAll(FILES);
      })
  )
});

self.addEventListener('activate', function (event) {
  console.log('Activating Service Worker', event);
  event.waitUntil(
    caches.keys()
      .then(function (keyList) {
        return Promise.all(keyList.map(function (key) {
          if (key !== CACHE_NAME) {
            console.log('Deleting old cache.', key);
            return caches.delete(key);
          }
        }));
      })
  );
  return self.clients.claim();
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          return response;
        } else {
          return fetch(event.request)
          .then(function(res) {
            return caches.open('dynamic')
              .then(function(cache) {
                cache.put(event.request.url, res.clone());
                return res;
              })
          });        
        }
      })
  );   
});





