// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"css.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var string = "\n.face {\n\tposition: absolute;\n\ttop: 0;\n\tright: 0;\n\tbottom: 0;\n\tleft: 0;\n\tmargin: 100px auto;\n\twidth: 600px;\n\theight: 600px;\n\ttext-align: center;\n}\n\n.eyes {\n\tposition: relative;\n\ttop: 10%;\n\tdisplay: inline-block;\n\tborder-radius: 50%;\n\twidth: 200px;\n\theight: 200px;\n\tborder: 5px solid black;\n\tbackground: white;\n\t-webkit-animation: blink forwards infinite 6s ease-in-out;\n\t        animation: blink forwards infinite 6s ease-in-out;\n}\n\n.eyes::after {\n\tposition: absolute;\n\ttop: 30%;\n\tleft: 32%;\n\tcontent: '';\n\twidth: 50px;\n\theight: 50px;\n\tborder-radius: 50%;\n\tborder: 5px solid black;\n\tbackground: #0099ff;\n\tdisplay: block;\n}\n\n.eyes::before {\n\tz-index: 9999;\n\tposition: absolute;\n\ttop: 37%;\n\tleft: 39%;\n\tcontent: '';\n\twidth: 25px;\n\theight: 25px;\n\tbackground: #000;\n\tborder-radius: 50%;\n}\n\n.eyebrow {\n\tposition: absolute;\n\ttop: -50px;\n\tleft: 85px;\n\theight: 50px;\n\twidth: 15px;\n\tbackground-color: #000;\n}\n\n.eyebrow::after {\n\tcontent: '';\n\tdisplay: block;\n\tposition: absolute;\n\ttop: 21px;\n\tleft: -70px;\n\theight: 50px;\n\twidth: 15px;\n\tbackground: #000;\n\t-webkit-transform: rotate(-45deg);\n\t        transform: rotate(-45deg);\n}\n\n.eyebrow::before {\n\tcontent: '';\n\tdisplay: block;\n\tposition: absolute;\n\ttop: 20px;\n\tleft: 70px;\n\theight: 50px;\n\twidth: 15px;\n\tbackground: #000;\n\t-webkit-transform: rotate(45deg);\n\t        transform: rotate(45deg);\n}\n\n.blush-group {\n\tposition: absolute;\n\ttop: 20%;\n\twidth: 600px;\n\t/* z-index: 9999; */\n}\n\n.nose {\n\tposition: absolute;\n\tleft: 43%;\n\twidth: 80px;\n\theight: 120px;\n\tborder-radius: 70%;\n\tborder: 5px solid #000;\n\tbackground-color: rgba(253,219,33,1);\n\tz-index: 9999;\n}\n\n.nose::after {\n\tcontent: '';\n\tposition: absolute;\n\ttop: 55%;\n\tleft: 5%;\n\tbackground-color: rgba(253,219,33,1);\n\twidth: 60px;\n\theight: 60px;\n\tborder-radius: 50%;\n\tz-index: 9999;\n}\n\n.blush {\n\tposition: absolute;\n\tmargin-top: 20px;\n\tborder: 5px solid rgb(215,60,18);\n\tborder-radius: 50px;\n\twidth: 90px;\n\theight: 90px;\n\tbackground-color: rgba(253,219,33,1);\n\tz-index: 9999;\n}\n\n.blush::after {\n\tcontent: '';\n\tposition: absolute;\n\ttop: 40%;\n\tleft: -5%;\n\twidth: 80px;\n\theight: 60px;\n\tbackground-color: rgba(253,219,33,1);\n\tborder-radius: 50%;\n\t-webkit-transform: rotate(-60deg);\n\t        transform: rotate(-60deg);\n\tz-index: 9999;\n}\n\n.blush::before {\n\tcontent: '';\n\tposition: absolute;\n\ttop: 50%;\n\tleft: 60%;\n\twidth: 20px;\n\theight: 40px;\n\tbackground-color: rgba(253,219,33,1);\n\tz-index: 9999;\n}\n\n.blush-group .blush.left {\n\tleft: 15%;\n}\n\n.blush-group .blush.right {\n\tright: 15%;\n}\n\n.freckless {\n\tdisplay: block;\n\tposition: absolute;\n\tleft: 15%;\n\ttop: 30%;\n\twidth: 10px;\n\theight: 10px;\n\tbackground-color: rgb(215,60,18);\n\tborder-radius: 50%;\n\tz-index: 9999;\n}\n\n.freckless::after {\n\tcontent: '';\n\tdisplay: block;\n\tposition: absolute;\n\tleft: 45px;\n\twidth: 10px;\n\theight: 10px;\n\tbackground-color: rgb(215,60,18);\n\tborder-radius: 50%;\n\tz-index: 9999;\n}\n\n.freckless::before {\n\tcontent: '';\n\tdisplay: block;\n\tposition: absolute;\n\tleft: 20px;\n\ttop: -15px;\n\twidth: 10px;\n\theight: 10px;\n\tbackground-color: rgb(215,60,18);\n\tborder-radius: 50%;\n\tz-index: 9999;\n}\n\n.mouth-group {\n\tposition: absolute;\n\twidth: 600px;\n\theight: 120px;\n\tz-index: 9999;\n}\n\n.mouth-group .lips {\n\tposition: absolute;\n\ttop: -50px;\n\tleft: 15%;\n\twidth: 420px;\n\theight: 120px;\n\tborder: solid 5px #000;\n\tborder-color: #000 transparent transparent transparent;\n\tborder-radius: 50%/100px 100px 0 0;\n\t-webkit-transform: rotate(180deg);\n\t        transform: rotate(180deg);\n\tz-index: 9999;\n}\n\n.mouth-group .lips::after {\n\tcontent: '';\n\tposition: absolute;\n\ttop: 30px;\n\tright: 18px;\n\twidth: 20px;\n\theight: 20px;\n  \tborder: 5px solid transparent;\n  \tborder-left: 5px solid #000;\n  \t-webkit-transform: rotate(30deg);\n  \t        transform: rotate(30deg);\n}\n\n.mouth-group .lips::before {\n\tcontent: '';\n\tposition: absolute;\n\ttop: 25px;\n\tleft: 32px;\n\twidth: 20px;\n\theight: 20px;\n  border: 5px solid transparent;\n  border-left: 5px solid #000;\n  -webkit-transform: rotate(-30deg);\n          transform: rotate(-30deg);\n}\n\n.tooth {\n\tposition: absolute;\n\ttop: 65px;\n\tleft: 40%;\n\twidth: 50px;\n\theight: 50px;\n\tbackground-color: white;\n\tborder-radius: 5px;\n\t-webkit-transform: rotate(5deg);\n\t        transform: rotate(5deg);\n\tborder: 5px solid #000;\n}\n\n.tooth.left {\n\ttop: 65px;\n\tleft: 40%;\n}\n\n.tooth.right {\n\ttop: 65px;\n\tleft: 52%;\n\t-webkit-transform: rotate(-5deg);\n\t        transform: rotate(-5deg);\n}\n\n.chin {\n\tposition: absolute;\n\tleft: 36%;\n\ttop: 100%;\n\twidth: 80px;\n\theight: 50px;\n\tborder-radius: 45%;\n\tborder: 5px solid rgb(215,60,18);\n}\n\n.chin::after {\n\tcontent: '';\n\tposition: absolute;\n\tleft: 90%;\n\ttop: -10%;\n\twidth: 80px;\n\theight: 50px;\n\tborder-radius: 50%;\n\tborder: 5px solid rgb(215,60,18);\n}\n\n.chin::before {\n\tcontent: '';\n\tposition: absolute;\n\tleft: -10%;\n\ttop: -12%;\n\tbackground-color: rgba(253,219,33,1);\n\twidth: 165px;\n\theight: 38px;\n\tz-index: 9999;\n}\n\n// .suit-group\t{\n// \tposition: absolute;\n// \ttop: 80%;\n// \twidth: 600px;\n// \theight: 240px;\n// \tbackground-color: #fff;\n// \tborder: 5px solid #000;\n// }\n\n// .suit-group .triangle {\n// \tdisplay: inline-block;\n// \tborder-bottom: 70px solid #000;\n// \tborder-right: 50px solid transparent;\n// \tborder-left: 50px solid transparent;\n// \t-webkit-transform: rotate(180deg);\n// \t        transform: rotate(180deg);\n// \tmargin-left: 50px;\n// \tmargin-right: 50px;\n// }\n\n\n// .suit-group .triangle::after {\n// \tcontent: '';\n// \tposition: absolute;\n// \ttop: 10px;\n// \tright: -40px;\n// \tborder-bottom: 60px solid #fff;\n// \tborder-right: 40px solid transparent;\n// \tborder-left: 40px solid transparent;\n// \tz-index: 9999;\n// }\n\n// .suit-group .tie {\n// \tposition: absolute;\n// \tleft: 41.5%;\n// \ttop: 0;\n// \twidth: 100px;\n// \theight: 180px;\n// }\n\n// .suit-group .tie-top {\n// \tbox-sizing: content-box;\n// \tposition: relative;\n// \tleft: 3px;\n// \twidth: 35px;\n//  \theight: 0;\n// \tborder: 30px solid rgba(0,0,0,0);\n// \tborder-bottom: 0 solid;\n// \tborder-top: 40px solid #000;\n// \tz-index: 9999;\n// }\n\n// .suit-group .tie-top::after {\n// \tcontent: '';\n// \tbox-sizing: content-box;\n// \tposition: absolute;\n// \ttop: -40px;\n// \tright: -20px;\n// \twidth: 25px;\n//  \theight: 0;\n// \tborder: 25px solid rgba(0,0,0,0);\n// \tborder-bottom: 0 solid;\n// \tborder-top: 35px solid red;\n// }\n\n// .suit-group .tie-bottom-inner {\n// \twidth: 0;\n// \theight: 0;\n// \tborder: 50px solid transparent;\n// \tborder-bottom: 80px solid black;\n// \tposition: relative;\n// \ttop: -80px;\n// \tz-index: 2;\n// }\n\n// .suit-group .tie-bottom-inner::after {\n// \tcontent: '';\n// \tposition: absolute;\n// \tleft: -50px; \n// \ttop: 80px;\n// \twidth: 0;\n// \theight: 0;\n// \tborder: 50px solid transparent;\n// \tborder-top: 80px solid black;\n// }\n\n// .suit-group .tie-bottom-out {\n// \twidth: 0;\n// \theight: 0;\n// \tborder: 40px solid transparent;\n// \tborder-bottom: 70px solid red;\n// \tposition: absolute;\n// \ttop: -21px;\n// \tleft: 10.75px;\n// \tz-index: 5;\n// }\n\n// .suit-group .tie-bottom-out::after {\n// \tcontent: '';\n// \tposition: absolute;\n// \tleft: -40px; \n// \ttop: 70px;\n// \twidth: 0;\n// \theight: 0;\n// \tborder: 40px solid transparent;\n// \tborder-top: 70px solid red;\n// }\n\n// .pants {\n// \tposition: absolute;\n// \ttop: 115px;\n// \tbackground-color: rgb(187,120,49);\n// \twidth: 100%;\n// \theight: 50%;\n// \tborder-top: 5px solid #000;\n// \tz-index: 0;\n// }\n\n// .pants .belt {\n// \tmargin: 40px auto;\n// \tmax-width: 600px;\n// \tborder-top: 20px dashed #000;\n// \tborder-bottom: none;\n// \tpadding: 0;\n// }\n\n.pore {\n\tposition: absolute;\n\twidth: 40px;\n\theight: 40px;\n\tborder-radius: 50%;\n\tbackground-color: rgb(174,172,12);\n}\n\n.pore-01 {\n\twidth: 80px;\n\theight: 80px;\n\tbottom: 140px;\n\tleft: 20px;\n}\n\n.pore-02 {\n\twidth: 80px;\n\theight: 80px;\n\tbottom: 30%;\n\tright: 50px;\t\n}\n\n.pore-03 {\n\twidth: 30px;\n\theight: 30px;\n\tbottom: 40%;\n\tleft: 20px;\n}\n\n.pore-04 {\n\twidth: 80px;\n\theight: 80px;\n\tleft: 5px;\n}\n\n.pore-05 {\n\twidth: 30px;\n\theight: 30px;\n\ttop: 5%;\n\tright: 10px;\n}\n\n.pore-06 {\n\twidth: 40px;\n\theight: 40px;\n\ttop: 20%;\n\tleft: 20px;\n}\n\n.pore-07 {\n\twidth: 40px;\n\theight: 40px;\n\tbottom: 22%;\n\tright: 40px;\n}\n\n@-webkit-keyframes blink { \n  0%, 2%, 60%, 62%, 100% { \n  \t-webkit-transform: scaleX(1) scaleY(1); \n  \t        transform: scaleX(1) scaleY(1); \n  } \n  1%, 61% { \n  \t-webkit-transform: scaleX(1.5) scaleY(0.1); \n  \t        transform: scaleX(1.5) scaleY(0.1); \n  } \n}\n\n@keyframes blink { \n  0%, 2%, 60%, 62%, 100% { \n  \t-webkit-transform: scaleX(1) scaleY(1); \n  \t        transform: scaleX(1) scaleY(1); \n  } \n  1%, 61% { \n  \t-webkit-transform: scaleX(1.5) scaleY(0.1); \n  \t        transform: scaleX(1.5) scaleY(0.1); \n  } \n}\n";
var _default = string;
exports.default = _default;
},{}],"main.js":[function(require,module,exports) {
"use strict";

var _css = _interopRequireDefault(require("./css.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var player = {
  id: undefined,
  time: 100,
  ui: {
    demo: document.querySelector('#demo'),
    demo2: document.querySelector('#demo2')
  },
  events: {
    '#btnPause': 'pause',
    '#btnPlay': 'play',
    '#btnSlow': 'slow',
    '#btnNormal': 'normal',
    '#btnFast': 'fast'
  },
  n: 1,
  init: function init() {
    player.ui.demo.innerText = _css.default.substr(0, player.n);
    player.ui.demo2.innerHTML = _css.default.substr(0, player.n);
    player.bindEvents();
    player.play();
  },
  bindEvents: function bindEvents() {
    for (var key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        var value = player.events[key]; // pause / play / slow

        document.querySelector(key).onclick = player[value];
      }
    }
  },
  run: function run() {
    player.n += 1;

    if (player.n > _css.default.length) {
      window.clearInterval(player.id);
      return;
    }

    player.ui.demo.innerText = _css.default.substr(0, player.n);
    player.ui.demo2.innerHTML = _css.default.substr(0, player.n);
    player.ui.demo.scrollTop = player.ui.demo.scrollHeight;
  },
  play: function play() {
    window.clearInterval(player.id);
    player.id = setInterval(player.run, player.time);
  },
  pause: function pause() {
    window.clearInterval(player.id);
  },
  slow: function slow() {
    player.pause();
    player.time = 300;
    player.play();
  },
  normal: function normal() {
    player.pause();
    player.time = 100;
    player.play();
  },
  fast: function fast() {
    player.pause();
    player.time = 0;
    player.play();
  }
};
player.init();
},{"./css.js":"css.js"}],"C:/Users/heeeyueee/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "58297" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["C:/Users/heeeyueee/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map