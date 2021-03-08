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
})({"K4Xi":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var string = "\n.face {\n\tposition: absolute;\n\ttop: 0;\n\tright: 0;\n\tbottom: 0;\n\tleft: 0;\n\tmargin: 100px auto;\n\twidth: 600px;\n\theight: 600px;\n\ttext-align: center;\n}\n@media (min-width:500px) {\n\t.face {\n\t\tposition: absolute;\n\t\ttop: 0;\n\t\tright: 0;\n\t\tbottom: 0;\n\t\tleft: 0;\n\t\tmargin: 100px auto;\n\t\twidth: 600px;\n\t\theight: 600px;\n\t\ttext-align: center;\n\t}\n\n}\n\n.eyes {\n\tposition: relative;\n\ttop: 10%;\n\tdisplay: inline-block;\n\tborder-radius: 50%;\n\twidth: 200px;\n\theight: 200px;\n\tborder: 5px solid black;\n\tbackground: white;\n\t-webkit-animation: blink forwards \n\tinfinite 6s ease-in-out;\n\t        animation: blink forwards \n\t\t\tinfinite 6s ease-in-out;\n}\n\n.eyes::after {\n\tposition: absolute;\n\ttop: 30%;\n\tleft: 32%;\n\tcontent: '';\n\twidth: 50px;\n\theight: 50px;\n\tborder-radius: 50%;\n\tborder: 5px solid black;\n\tbackground: #0099ff;\n\tdisplay: block;\n}\n\n.eyes::before {\n\tz-index: 9999;\n\tposition: absolute;\n\ttop: 37%;\n\tleft: 39%;\n\tcontent: '';\n\twidth: 25px;\n\theight: 25px;\n\tbackground: #000;\n\tborder-radius: 50%;\n}\n\n.eyebrow {\n\tposition: absolute;\n\ttop: -50px;\n\tleft: 85px;\n\theight: 50px;\n\twidth: 15px;\n\tbackground-color: #000;\n}\n\n.eyebrow::after {\n\tcontent: '';\n\tdisplay: block;\n\tposition: absolute;\n\ttop: 21px;\n\tleft: -70px;\n\theight: 50px;\n\twidth: 15px;\n\tbackground: #000;\n\t-webkit-transform: rotate(-45deg);\n\t        transform: rotate(-45deg);\n}\n\n.eyebrow::before {\n\tcontent: '';\n\tdisplay: block;\n\tposition: absolute;\n\ttop: 20px;\n\tleft: 70px;\n\theight: 50px;\n\twidth: 15px;\n\tbackground: #000;\n\t-webkit-transform: rotate(45deg);\n\t        transform: rotate(45deg);\n}\n\n.blush-group {\n\tposition: absolute;\n\ttop: 20%;\n\twidth: 600px;\n\t/* z-index: 9999; */\n}\n\n.nose {\n\tposition: absolute;\n\tleft: 43%;\n\twidth: 80px;\n\theight: 120px;\n\tborder-radius: 70%;\n\tborder: 5px solid #000;\n\tbackground-color: rgba(253,219,33,1);\n\tz-index: 9999;\n}\n\n.nose::after {\n\tcontent: '';\n\tposition: absolute;\n\ttop: 55%;\n\tleft: 5%;\n\tbackground-color: rgba(253,219,33,1);\n\twidth: 60px;\n\theight: 60px;\n\tborder-radius: 50%;\n\tz-index: 9999;\n}\n\n.blush {\n\tposition: absolute;\n\tmargin-top: 20px;\n\tborder: 5px solid rgb(215,60,18);\n\tborder-radius: 50px;\n\twidth: 90px;\n\theight: 90px;\n\tbackground-color: rgba(253,219,33,1);\n\tz-index: 9999;\n}\n\n.blush::after {\n\tcontent: '';\n\tposition: absolute;\n\ttop: 40%;\n\tleft: -5%;\n\twidth: 80px;\n\theight: 60px;\n\tbackground-color: rgba(253,219,33,1);\n\tborder-radius: 50%;\n\t-webkit-transform: rotate(-60deg);\n\t        transform: rotate(-60deg);\n\tz-index: 9999;\n}\n\n.blush::before {\n\tcontent: '';\n\tposition: absolute;\n\ttop: 50%;\n\tleft: 60%;\n\twidth: 20px;\n\theight: 40px;\n\tbackground-color: rgba(253,219,33,1);\n\tz-index: 9999;\n}\n\n.blush-group .blush.left {\n\tleft: 15%;\n}\n\n.blush-group .blush.right {\n\tright: 15%;\n}\n\n.freckless {\n\tdisplay: block;\n\tposition: absolute;\n\tleft: 15%;\n\ttop: 30%;\n\twidth: 10px;\n\theight: 10px;\n\tbackground-color: rgb(215,60,18);\n\tborder-radius: 50%;\n\tz-index: 9999;\n}\n\n.freckless::after {\n\tcontent: '';\n\tdisplay: block;\n\tposition: absolute;\n\tleft: 45px;\n\twidth: 10px;\n\theight: 10px;\n\tbackground-color: rgb(215,60,18);\n\tborder-radius: 50%;\n\tz-index: 9999;\n}\n\n.freckless::before {\n\tcontent: '';\n\tdisplay: block;\n\tposition: absolute;\n\tleft: 20px;\n\ttop: -15px;\n\twidth: 10px;\n\theight: 10px;\n\tbackground-color: rgb(215,60,18);\n\tborder-radius: 50%;\n\tz-index: 9999;\n}\n\n.mouth-group {\n\tposition: absolute;\n\twidth: 600px;\n\theight: 120px;\n\tz-index: 9999;\n}\n\n.mouth-group .lips {\n\tposition: absolute;\n\ttop: -50px;\n\tleft: 15%;\n\twidth: 420px;\n\theight: 120px;\n\tborder: solid 5px #000;\n\tborder-color: #000 transparent \n\ttransparent transparent;\n\tborder-radius: 50%/100px 100px 0 0;\n\t-webkit-transform: rotate(180deg);\n\t        transform: rotate(180deg);\n\tz-index: 9999;\n}\n\n.mouth-group .lips::after {\n\tcontent: '';\n\tposition: absolute;\n\ttop: 30px;\n\tright: 18px;\n\twidth: 20px;\n\theight: 20px;\n  \tborder: 5px solid transparent;\n  \tborder-left: 5px solid #000;\n  \t-webkit-transform: rotate(30deg);\n  \t        transform: rotate(30deg);\n}\n\n.mouth-group .lips::before {\n\tcontent: '';\n\tposition: absolute;\n\ttop: 25px;\n\tleft: 32px;\n\twidth: 20px;\n\theight: 20px;\n  border: 5px solid transparent;\n  border-left: 5px solid #000;\n  -webkit-transform: rotate(-30deg);\n          transform: rotate(-30deg);\n}\n\n.tooth {\n\tposition: absolute;\n\ttop: 65px;\n\tleft: 40%;\n\twidth: 50px;\n\theight: 50px;\n\tbackground-color: white;\n\tborder-radius: 5px;\n\t-webkit-transform: rotate(5deg);\n\t        transform: rotate(5deg);\n\tborder: 5px solid #000;\n}\n\n.tooth.left {\n\ttop: 65px;\n\tleft: 40%;\n}\n\n.tooth.right {\n\ttop: 65px;\n\tleft: 52%;\n\t-webkit-transform: rotate(-5deg);\n\t        transform: rotate(-5deg);\n}\n\n.chin {\n\tposition: absolute;\n\tleft: 36%;\n\ttop: 100%;\n\twidth: 80px;\n\theight: 50px;\n\tborder-radius: 45%;\n\tborder: 5px solid rgb(215,60,18);\n}\n\n.chin::after {\n\tcontent: '';\n\tposition: absolute;\n\tleft: 90%;\n\ttop: -10%;\n\twidth: 80px;\n\theight: 50px;\n\tborder-radius: 50%;\n\tborder: 5px solid rgb(215,60,18);\n}\n\n.chin::before {\n\tcontent: '';\n\tposition: absolute;\n\tleft: -10%;\n\ttop: -12%;\n\tbackground-color: rgba(253,219,33,1);\n\twidth: 165px;\n\theight: 38px;\n\tz-index: 9999;\n}\n\n.pore {\n\tposition: absolute;\n\twidth: 40px;\n\theight: 40px;\n\tborder-radius: 50%;\n\tbackground-color: rgb(174,172,12);\n}\n\n.pore-01 {\n\twidth: 80px;\n\theight: 80px;\n\tbottom: 140px;\n\tleft: 20px;\n}\n\n.pore-02 {\n\twidth: 80px;\n\theight: 80px;\n\tbottom: 30%;\n\tright: 50px;\t\n}\n\n.pore-03 {\n\twidth: 30px;\n\theight: 30px;\n\tbottom: 40%;\n\tleft: 20px;\n}\n\n.pore-04 {\n\twidth: 80px;\n\theight: 80px;\n\tleft: 5px;\n}\n\n.pore-05 {\n\twidth: 30px;\n\theight: 30px;\n\ttop: 5%;\n\tright: 10px;\n}\n\n.pore-06 {\n\twidth: 40px;\n\theight: 40px;\n\ttop: 20%;\n\tleft: 20px;\n}\n\n.pore-07 {\n\twidth: 40px;\n\theight: 40px;\n\tbottom: 22%;\n\tright: 40px;\n}\n\n@-webkit-keyframes blink { \n  0%, 2%, 60%, 62%, 100% { \n  \t-webkit-transform: scaleX(1) scaleY(1); \n  \t        transform: scaleX(1) scaleY(1); \n  } \n  1%, 61% { \n  \t-webkit-transform: scaleX(1.5) scaleY(0.1); \n  \t        transform: scaleX(1.5) scaleY(0.1); \n  } \n}\n\n@keyframes blink { \n  0%, 2%, 60%, 62%, 100% { \n  \t-webkit-transform: scaleX(1) scaleY(1); \n  \t        transform: scaleX(1) scaleY(1); \n  } \n  1%, 61% { \n  \t-webkit-transform: scaleX(1.5) scaleY(0.1); \n  \t        transform: scaleX(1.5) scaleY(0.1); \n  } \n}\n";
var _default = string;
exports.default = _default;
},{}],"epB2":[function(require,module,exports) {
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
    // '#btnSlow': 'slow',
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
  // slow: () => {
  //   player.pause()
  //   player.time = 300
  //   player.play()
  // },
  normal: function normal() {
    player.pause();
    player.time = 20;
    player.play();
  },
  fast: function fast() {
    player.pause();
    player.time = 5;
    player.play();
  }
};

window.onload = function () {
  player.init();
};
},{"./css.js":"K4Xi"}]},{},["epB2"], null)
//# sourceMappingURL=https://heeeyueee.github.io/SpongeBob/dist/main.49bc61ce.js.map