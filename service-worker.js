/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren */
'use strict';





/* eslint-disable quotes, comma-spacing */
var PrecacheConfig = [["bower_components/app-layout/app-drawer/app-drawer.html","92dd771bce4aef71c6b06e78a14c7326"],["bower_components/app-layout/app-header/app-header.html","d2b4c67465087e15646619afb39f735e"],["bower_components/app-layout/app-scroll-effects/app-scroll-effects-behavior.html","350fc37d1d1c7044c213567b6039da09"],["bower_components/app-layout/app-scroll-effects/app-scroll-effects.html","1eaa9e05144414be49e4ee23e16ceca2"],["bower_components/app-layout/app-scroll-effects/effects/blend-background.html","4723ce7f6429640a812ad866ddddb719"],["bower_components/app-layout/app-scroll-effects/effects/fade-background.html","3929482c600a21680def557965850501"],["bower_components/app-layout/app-scroll-effects/effects/material.html","271fe6e745f1a9581a6e01cb3aadce21"],["bower_components/app-layout/app-scroll-effects/effects/parallax-background.html","391d025dcffee3f042c9d2bdd83be377"],["bower_components/app-layout/app-scroll-effects/effects/resize-snapped-title.html","21886b073d93530ccaf667163fccf8ba"],["bower_components/app-layout/app-scroll-effects/effects/resize-title.html","e78249dd83abc97d40411e4032250c77"],["bower_components/app-layout/app-scroll-effects/effects/waterfall.html","a21d6a2fc019eb59d10586aada74313e"],["bower_components/app-layout/app-toolbar/app-toolbar.html","e07c0b1da289f388fd4e3b80f229dec6"],["bower_components/app-layout/helpers/helpers.html","95b52c0c05f77b65bc1b5dc0715d2495"],["bower_components/app-route/app-location.html","52b3d8b5ecbb838b41bd9bd0ae556cca"],["bower_components/app-route/app-route-converter-behavior.html","0e5b36ae9988a88bb30729fdb99a5d94"],["bower_components/app-route/app-route.html","624ca199d36389f3db04597a593548ec"],["bower_components/font-roboto/roboto.html","09500fd5adfad056ff5aa05e2aae0ec5"],["bower_components/google-apis/google-maps-api.html","e4eb1641cec251f631cec2f569e8a551"],["bower_components/iron-a11y-announcer/iron-a11y-announcer.html","7fa51a3de8ea9987c430344fee81b55c"],["bower_components/iron-a11y-keys-behavior/iron-a11y-keys-behavior.html","b9a8e766d0ab03a5d13e275754ec3d54"],["bower_components/iron-a11y-keys/iron-a11y-keys.html","fd2760ee5676b7615aaa24d695c5295d"],["bower_components/iron-ajax/iron-ajax.html","d606b330d7bd040660a53a5cda7f8acf"],["bower_components/iron-ajax/iron-request.html","c2d289c4b20653353cff315cf247a45e"],["bower_components/iron-autogrow-textarea/iron-autogrow-textarea.html","a9d2e2dc5344bc67b148fc307bf6ac98"],["bower_components/iron-behaviors/iron-button-state.html","6565a80d1af09299c1201f8286849c3b"],["bower_components/iron-behaviors/iron-control-state.html","1c12ee539b1dbbd0957ae26b3549cc13"],["bower_components/iron-checked-element-behavior/iron-checked-element-behavior.html","6fd1055c2c04382401dc910a0db569c6"],["bower_components/iron-flex-layout/iron-flex-layout-classes.html","6270e8b91b4ce430289f257e37cd019b"],["bower_components/iron-flex-layout/iron-flex-layout.html","f6d0b5075d5f70cac9b4bd66bd88c459"],["bower_components/iron-form-element-behavior/iron-form-element-behavior.html","a64177311979fc6a6aae454cb85ea2be"],["bower_components/iron-form/iron-form.html","5d82f614e18ce1f185ba220f39402131"],["bower_components/iron-icon/iron-icon.html","923e727686cfe7c6e58cc32c2a49717d"],["bower_components/iron-icons/communication-icons.html","d6bbe1fe8badd9faaee6344e0b0da330"],["bower_components/iron-icons/device-icons.html","207f23207025327d038aba8ea236f82f"],["bower_components/iron-icons/iron-icons.html","c8f9154ae89b94e658e4a52eee690a16"],["bower_components/iron-icons/maps-icons.html","071389c5d61ac4ab2f39dc1d784ece94"],["bower_components/iron-iconset-svg/iron-iconset-svg.html","8fb45b1b4668dae069f5efb5004c2af4"],["bower_components/iron-image/iron-image.html","227dc1ce11afc9a5e4b5f89d8b2bd635"],["bower_components/iron-input/iron-input.html","3e393eda6c241be2817ce0acc512bcf6"],["bower_components/iron-jsonp-library/iron-jsonp-library.html","2278dab473da8287511ea8f8eb30144d"],["bower_components/iron-location/iron-location.html","a3d62625e52efc55488804fb47c58474"],["bower_components/iron-location/iron-query-params.html","4939f7b89ff899694a27bd1563543184"],["bower_components/iron-media-query/iron-media-query.html","7436f9608ebd2d31e4b346921651f84b"],["bower_components/iron-meta/iron-meta.html","dd4ef14e09c5771e70292d70963f6718"],["bower_components/iron-pages/iron-pages.html","08c5b7aacd9ef5fdb5ae583b47bd2df5"],["bower_components/iron-range-behavior/iron-range-behavior.html","34f5b83882b6b6c5cfad7543caab080e"],["bower_components/iron-resizable-behavior/iron-resizable-behavior.html","e93449ccd4312e4e30060c87bd52ed25"],["bower_components/iron-scroll-target-behavior/iron-scroll-target-behavior.html","0185cbe8d7139c9e92af3a9af67feb17"],["bower_components/iron-selector/iron-multi-selectable.html","46d6620acd7bad986d81097d9ca91692"],["bower_components/iron-selector/iron-selectable.html","65b04f3f5f1b551d91a82b36f916f6b6"],["bower_components/iron-selector/iron-selection.html","83545b7d1eae4020594969e6b9790b65"],["bower_components/iron-selector/iron-selector.html","4d2657550768bec0788eba5190cddc66"],["bower_components/iron-validatable-behavior/iron-validatable-behavior.html","02bf0434cc1a0d09e18413dea91dcea1"],["bower_components/localforage/dist/localforage.js","c5eae4573f9de2198a102feea1b89937"],["bower_components/paper-behaviors/paper-button-behavior.html","edddd3f97cf3ea944f3a48b4154939e8"],["bower_components/paper-behaviors/paper-checked-element-behavior.html","59702db25efd385b161ad862b8027819"],["bower_components/paper-behaviors/paper-inky-focus-behavior.html","51a1c5ccd2aae4c1a0258680dcb3e1ea"],["bower_components/paper-behaviors/paper-ripple-behavior.html","b6ee8dd59ffb46ca57e81311abd2eca0"],["bower_components/paper-button/paper-button.html","8eaf13f49324367c73031031e7476846"],["bower_components/paper-card/paper-card.html","aefa0ff3d4504f281362040946247877"],["bower_components/paper-icon-button/paper-icon-button.html","4a5cbc3fe046e2c070d4bf34ec7463d6"],["bower_components/paper-input/paper-input-addon-behavior.html","de7b482dc1fb01847efba9016db16206"],["bower_components/paper-input/paper-input-behavior.html","3960579058d3ba0a74ae7b67b78f53c2"],["bower_components/paper-input/paper-input-char-counter.html","c9e52a2d75b93ea3abd87022d87c0c6a"],["bower_components/paper-input/paper-input-container.html","30c9bf04802e25615635266a453554c5"],["bower_components/paper-input/paper-input-error.html","3cec14d4d86f4e4b5ad349ba8a2dac9f"],["bower_components/paper-input/paper-input.html","3d662d840b767b5b46632e32322c69e7"],["bower_components/paper-material/paper-material-shared-styles.html","3a5f381dbdbdabbfd7c122e1c02a60e3"],["bower_components/paper-material/paper-material.html","82c0fde850e52dc3bfdfc5efa34d5a15"],["bower_components/paper-progress/paper-progress.html","7cff862535dc4630b9d882f86ab86e68"],["bower_components/paper-ripple/paper-ripple.html","30fa6456055a5725c6492f8e5a364f39"],["bower_components/paper-slider/paper-slider.html","472e31d4d0a3ca752444f6ecae974248"],["bower_components/paper-spinner/paper-spinner-behavior.html","82e814c4460e8803f6f57cc457658adf"],["bower_components/paper-spinner/paper-spinner-styles.html","41385e612365d851bb3c3611fc9bddb6"],["bower_components/paper-spinner/paper-spinner.html","940e64bbde54dad918d0f5c0e247a8bd"],["bower_components/paper-styles/color.html","c53abb41659bf242d420a7f93b977e91"],["bower_components/paper-styles/default-theme.html","25d95202be2ff5b60f651924e66abed2"],["bower_components/paper-styles/shadow.html","0db3ad33dddb4766c259232951ec158b"],["bower_components/paper-styles/typography.html","3f95c68bcd0bd4710f3469c4900533d6"],["bower_components/paper-toggle-button/paper-toggle-button.html","be38925f50ace28ef933499595385471"],["bower_components/polymer/polymer-micro.html","ecf1ad808ec62a7adcec68e28cf3ffad"],["bower_components/polymer/polymer-mini.html","e48d322a1d599c9db40523f050fbef23"],["bower_components/polymer/polymer.html","837764153a0347c0e906b48d554941a0"],["bower_components/promise-polyfill/Promise.js","5afb14fd81497aca81bf25929d65b02d"],["bower_components/promise-polyfill/promise-polyfill-lite.html","06470312beff013fc54695e0bdda2cb3"],["bower_components/webcomponentsjs/webcomponents-lite.min.js","f04ed23700daeb36f637bfe095960659"],["index.html","5daae29975da8557be3beb4ec3d804d1"],["manifest.json","8d4770f4b7ca97c79b23e03b56914cee"],["src/advanced-search.html","b1447f88784ec0867aaeb4c0ab1d624e"],["src/business-listing.html","ae78261b7c6871d72d108aa443bdeeae"],["src/dollar-rating.html","01b01775c8040e5d3f7a87187aaa806a"],["src/home-page.html","2938ef06d08b5cf0835d4b0ecbbe8a19"],["src/my-icons.html","1d6f828b354b8ffd160ba42336bfa4c5"],["src/places-input.html","9a419dcc83adee27b5f91b6f8a7879a5"],["src/restaurant-card.html","b8717f68e14fa61eab98f5726eb9dfdc"],["src/restaurant-reviewer.html","39fed7ea8cdb5fcb04f1b20d103c37cb"],["src/search-results.html","3f4e7b1d8c056491a4190bd27d053229"],["src/star-picker.html","ed26b96bbdd8ee55eb4f2ef1c1a0904e"],["src/star-rating.html","97af9c70987e5674ff825e124b316484"],["src/valid-form.html","405c442dbe386c4b49d1fbd583bc3ed2"]];
/* eslint-enable quotes, comma-spacing */
var CacheNamePrefix = 'sw-precache-v1--' + (self.registration ? self.registration.scope : '') + '-';


var IgnoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var getCacheBustedUrl = function (url, param) {
    param = param || Date.now();

    var urlWithCacheBusting = new URL(url);
    urlWithCacheBusting.search += (urlWithCacheBusting.search ? '&' : '') +
      'sw-precache=' + param;

    return urlWithCacheBusting.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var populateCurrentCacheNames = function (precacheConfig,
    cacheNamePrefix, baseUrl) {
    var absoluteUrlToCacheName = {};
    var currentCacheNamesToAbsoluteUrl = {};

    precacheConfig.forEach(function(cacheOption) {
      var absoluteUrl = new URL(cacheOption[0], baseUrl).toString();
      var cacheName = cacheNamePrefix + absoluteUrl + '-' + cacheOption[1];
      currentCacheNamesToAbsoluteUrl[cacheName] = absoluteUrl;
      absoluteUrlToCacheName[absoluteUrl] = cacheName;
    });

    return {
      absoluteUrlToCacheName: absoluteUrlToCacheName,
      currentCacheNamesToAbsoluteUrl: currentCacheNamesToAbsoluteUrl
    };
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var mappings = populateCurrentCacheNames(PrecacheConfig, CacheNamePrefix, self.location);
var AbsoluteUrlToCacheName = mappings.absoluteUrlToCacheName;
var CurrentCacheNamesToAbsoluteUrl = mappings.currentCacheNamesToAbsoluteUrl;

function deleteAllCaches() {
  return caches.keys().then(function(cacheNames) {
    return Promise.all(
      cacheNames.map(function(cacheName) {
        return caches.delete(cacheName);
      })
    );
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    // Take a look at each of the cache names we expect for this version.
    Promise.all(Object.keys(CurrentCacheNamesToAbsoluteUrl).map(function(cacheName) {
      return caches.open(cacheName).then(function(cache) {
        // Get a list of all the entries in the specific named cache.
        // For caches that are already populated for a given version of a
        // resource, there should be 1 entry.
        return cache.keys().then(function(keys) {
          // If there are 0 entries, either because this is a brand new version
          // of a resource or because the install step was interrupted the
          // last time it ran, then we need to populate the cache.
          if (keys.length === 0) {
            // Use the last bit of the cache name, which contains the hash,
            // as the cache-busting parameter.
            // See https://github.com/GoogleChrome/sw-precache/issues/100
            var cacheBustParam = cacheName.split('-').pop();
            var urlWithCacheBusting = getCacheBustedUrl(
              CurrentCacheNamesToAbsoluteUrl[cacheName], cacheBustParam);

            var request = new Request(urlWithCacheBusting,
              {credentials: 'same-origin'});
            return fetch(request).then(function(response) {
              if (response.ok) {
                return cache.put(CurrentCacheNamesToAbsoluteUrl[cacheName],
                  response);
              }

              console.error('Request for %s returned a response status %d, ' +
                'so not attempting to cache it.',
                urlWithCacheBusting, response.status);
              // Get rid of the empty cache if we can't add a successful response to it.
              return caches.delete(cacheName);
            });
          }
        });
      });
    })).then(function() {
      return caches.keys().then(function(allCacheNames) {
        return Promise.all(allCacheNames.filter(function(cacheName) {
          return cacheName.indexOf(CacheNamePrefix) === 0 &&
            !(cacheName in CurrentCacheNamesToAbsoluteUrl);
          }).map(function(cacheName) {
            return caches.delete(cacheName);
          })
        );
      });
    }).then(function() {
      if (typeof self.skipWaiting === 'function') {
        // Force the SW to transition from installing -> active state
        self.skipWaiting();
      }
    })
  );
});

if (self.clients && (typeof self.clients.claim === 'function')) {
  self.addEventListener('activate', function(event) {
    event.waitUntil(self.clients.claim());
  });
}

self.addEventListener('message', function(event) {
  if (event.data.command === 'delete_all') {
    console.log('About to delete all caches...');
    deleteAllCaches().then(function() {
      console.log('Caches deleted.');
      event.ports[0].postMessage({
        error: null
      });
    }).catch(function(error) {
      console.log('Caches not deleted:', error);
      event.ports[0].postMessage({
        error: error
      });
    });
  }
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    var urlWithoutIgnoredParameters = stripIgnoredUrlParameters(event.request.url,
      IgnoreUrlParametersMatching);

    var cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    var directoryIndex = 'index.html';
    if (!cacheName && directoryIndex) {
      urlWithoutIgnoredParameters = addDirectoryIndex(urlWithoutIgnoredParameters, directoryIndex);
      cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    }

    var navigateFallback = '/index.html';
    // Ideally, this would check for event.request.mode === 'navigate', but that is not widely
    // supported yet:
    // https://code.google.com/p/chromium/issues/detail?id=540967
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1209081
    if (!cacheName && navigateFallback && event.request.headers.has('accept') &&
        event.request.headers.get('accept').includes('text/html') &&
        /* eslint-disable quotes, comma-spacing */
        isPathWhitelisted([], event.request.url)) {
        /* eslint-enable quotes, comma-spacing */
      var navigateFallbackUrl = new URL(navigateFallback, self.location);
      cacheName = AbsoluteUrlToCacheName[navigateFallbackUrl.toString()];
    }

    if (cacheName) {
      event.respondWith(
        // Rely on the fact that each cache we manage should only have one entry, and return that.
        caches.open(cacheName).then(function(cache) {
          return cache.keys().then(function(keys) {
            return cache.match(keys[0]).then(function(response) {
              if (response) {
                return response;
              }
              // If for some reason the response was deleted from the cache,
              // raise and exception and fall back to the fetch() triggered in the catch().
              throw Error('The cache ' + cacheName + ' is empty.');
            });
          });
        }).catch(function(e) {
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});
