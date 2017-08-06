"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","2dc5dea385082dd0240840640fefee05"],["/static/css/main.79a5413d.css","d9604e8f3e2023fc99ab4da8de351157"],["/static/js/main.fa0adae5.js","795945d7b1cbab41de6425686f93d296"],["/static/media/1.00a5c82a.png","00a5c82a1754cc7922db337e7e049295"],["/static/media/1.182a8cda.png","182a8cda6b7f6a39fc60fff4b982ee5e"],["/static/media/1.1a99cf70.png","1a99cf702123d12819bce2d16c753064"],["/static/media/1.3878248d.png","3878248d856e06a0e04ddc3e1078d40a"],["/static/media/1.48ce2eb0.png","48ce2eb09d4f62bd1c4115c27ee9559e"],["/static/media/1.50b4cf7b.png","50b4cf7bd98efa8ac3cf3ae66860561a"],["/static/media/1.63a10dbc.png","63a10dbcf8e1cc26df90b637884e00a5"],["/static/media/1.76d67c31.png","76d67c31ec6ff10c5ad50920ce84f2a2"],["/static/media/1.973939c8.png","973939c8c15bb2251828bcd5b496adea"],["/static/media/1.9f83bc42.png","9f83bc42d715dddcd5efd9bf32265f55"],["/static/media/1.a2895fef.png","a2895fefc5d4e1465d4818405eb4165d"],["/static/media/1.a8bd7f4c.png","a8bd7f4cf8396ba5ecb18b61f47e2f58"],["/static/media/1.d83b93dd.png","d83b93dd9055e8c9ea4821db7a738f4b"],["/static/media/2.0013c594.png","0013c594deac2fe9e6ba252c341240c8"],["/static/media/2.14bf2e27.png","14bf2e27140a33e7590565bec7e553e2"],["/static/media/2.5073b1a2.png","5073b1a2580d330ec8140473ae6e41e2"],["/static/media/2.5a0ab2c2.png","5a0ab2c299d3ceb77c5b2228fa9c7a4b"],["/static/media/2.5e5f9f46.png","5e5f9f463114c13980ec4af5b5c73a35"],["/static/media/2.a9dc7c49.png","a9dc7c498e82b29aa4579e44f08b7114"],["/static/media/2.c36bae4f.png","c36bae4fb9540bc1e0eccf9900e5f0dc"],["/static/media/2.c7aabb21.png","c7aabb213a94664b9088480b777cb96e"],["/static/media/3.1c6c90d2.png","1c6c90d288aeb46998578bc89174c4fe"],["/static/media/3.51f3de16.png","51f3de1684f6ac0ddd2d3c7ecb798b1b"],["/static/media/3.593d9a18.png","593d9a18f4710f0273a791bebf7de9ba"],["/static/media/3.9b6bfdef.png","9b6bfdef8741c12885ee5ef1089faebc"],["/static/media/3.fc5ee961.png","fc5ee9617c17d2c410cb275dad1520c6"],["/static/media/Canvas.4e0975fe.png","4e0975fed690484f408765081b852066"],["/static/media/Homework Planner.fe82e1f7.png","fe82e1f73027b9a06f4e7849d1e774ab"],["/static/media/Hugh Bellamy EPQ.3d62098d.docx","3d62098d76defc1445259e5591e70ed0"],["/static/media/Hugh Bellamy EPQ.4893a614.pdf","4893a6146effa6423b816d46d18da2a1"],["/static/media/Speak Easy.2cca921a.png","2cca921aa0b03a2ae4ea41d42af88f2f"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var c=new Request(t,{credentials:"same-origin"});return fetch(c).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,"index.html"),a=urlsToCacheKeys.has(t));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL("/index.html",self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});