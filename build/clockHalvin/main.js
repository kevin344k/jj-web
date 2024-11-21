"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var span_price_btc = document.getElementById("span-price-btc");
var input_inversion_inicial = document.getElementById("inversion-inicial");
var input_result_equiv_btc = document.getElementById("input-result-equiv-btc");
var data_halvin_now = {
  costoProducciónBTC: 80000,
  recompensaBloqueNow: 3.125,
  halvin_now_numero: 5,
  anio_halvin_actual: 2024
};
var halvins = [{
  numero: 1,
  Year: 2008,
  Rewards: 50
}, {
  numero: 2,
  Year: 2012,
  Rewards: 25
}, {
  numero: 3,
  Year: 2016,
  Rewards: 12.5
}, {
  numero: 4,
  Year: 2020,
  Rewards: 6.25
}, {
  numero: 5,
  Year: 2024,
  Rewards: 3.125
}, {
  numero: 6,
  Year: 2028,
  Rewards: 1.5625
}, {
  numero: 7,
  Year: 2032,
  Rewards: 0.78125
}, {
  numero: 8,
  Year: 2036,
  Rewards: 0.390625
}, {
  numero: 9,
  Year: 2040,
  Rewards: 0.1953125
}, {
  numero: 10,
  Year: 2044,
  Rewards: 0.09765625
}, {
  numero: 11,
  Year: 2048,
  Rewards: 0.048828125
}, {
  numero: 12,
  Year: 2052,
  Rewards: 0.0244140625
}, {
  numero: 13,
  Year: 2056,
  Rewards: 0.01220703125
}, {
  numero: 14,
  Year: 2060,
  Rewards: 0.006103515625
}, {
  numero: 15,
  Year: 2064,
  Rewards: 0.0030517578125
}, {
  numero: 16,
  Year: 2068,
  Rewards: 0.00152587890625
}, {
  numero: 17,
  Year: 2072,
  Rewards: 0.000762939453125
}, {
  numero: 18,
  Year: 2076,
  Rewards: 0.0003814697265625
}, {
  numero: 19,
  Year: 2080,
  Rewards: 0.00019073486328125
}, {
  numero: 20,
  Year: 2084,
  Rewards: 9.5367431640625e-5
}, {
  numero: 21,
  Year: 2088,
  Rewards: 4.76837158203125e-5
}, {
  numero: 22,
  Year: 2092,
  Rewards: 2.384185791015625e-5
}, {
  numero: 23,
  Year: 2096,
  Rewards: 1.1920928955078125e-5
}, {
  numero: 24,
  Year: 2100,
  Rewards: 5.9604644775390625e-6
}, {
  numero: 25,
  Year: 2104,
  Rewards: 2.9802322387695312e-6
}, {
  numero: 26,
  Year: 2108,
  Rewards: 1.4901161193847656e-6
}, {
  numero: 27,
  Year: 2112,
  Rewards: 7.450580596923828e-7
}, {
  numero: 28,
  Year: 2116,
  Rewards: 3.725290298461914e-7
}, {
  numero: 29,
  Year: 2120,
  Rewards: 1.862645149230957e-7
}, {
  numero: 30,
  Year: 2124,
  Rewards: 9.313225746154785e-8
}, {
  numero: 31,
  Year: 2128,
  Rewards: 4.6566128730773926e-8
}, {
  numero: 32,
  Year: 2132,
  Rewards: 2.3283064365386963e-8
}, {
  numero: 33,
  Year: 2136,
  Rewards: 1.1641532182693481e-8
}, {
  numero: 34,
  Year: 2140,
  Rewards: 5.820766091346741e-9
}];
var resultCallback = "";
var span_hal_now_nro = document.getElementById("span-halvin-now-nro");
var span_hal_now_anio = document.getElementById("span-halvin-now-anio");
var span_hal_now_reward = document.getElementById("span-halvin-now-reward");
var span_hal_jub_nro = document.getElementById("span-halvin-jub-nro");
var span_hal_jub_anio = document.getElementById("span-halvin-jub-anio");
var span_hal_jub_reward = document.getElementById("span-halvin-jub-reward");
var result_calc_formula = document.getElementById("result_calc-formula");
var result_calc_anio = document.getElementById("result-calc-anio");
var aside_calc_jub = document.getElementById("aside-calc-jub");
span_hal_now_nro.textContent = "# ".concat(data_halvin_now.halvin_now_numero);
span_hal_now_anio.textContent = data_halvin_now.anio_halvin_actual;
span_hal_now_reward.textContent = "".concat(data_halvin_now.recompensaBloqueNow, " btc");
var init = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var _mempoolJS, blocks, blocksTipHeight, resultHeightBlock, CurrentDate, timeToHalvin, dateH, response, data, priceBTC, equivalenciaBTC;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          equivalenciaBTC = function _equivalenciaBTC() {
            aside_calc_jub.innerHTML = "";
            if (input_inversion_inicial.value != "" || input_inversion_inicial.value != 0) {
              if (priceBTC != "") {
                var resultEquivBTC = input_inversion_inicial.value / priceBTC;
                console.log(resultEquivBTC);
                input_result_equiv_btc.value = resultEquivBTC.toFixed(6);
              }
            } else {
              result_calc_formula.textContent = "";
            }
            var findHalvin = function findHalvin() {
              if (priceBTC != "" && input_inversion_inicial.value != "" && input_result_equiv_btc.value != 0) {
                var _findRewards = function _findRewards(halvins) {
                  return halvins.Rewards <= input_result_equiv_btc.value;
                };
              }
              return resultCallback = halvins.find(findRewards);
            };
            findHalvin();
            span_hal_jub_nro.textContent = "# ".concat(resultCallback.numero);
            span_hal_jub_anio.textContent = resultCallback.Year;
            span_hal_jub_reward.textContent = "".concat(resultCallback.Rewards.toFixed(9), " btc");
            console.log(resultCallback.numero);

            ///VARIABLES FUNDAMENTALES PARA EL CÁLCUILO USANDO LA FÓRMULA

            var RI = data_halvin_now.recompensaBloqueNow;
            var CP = data_halvin_now.costoProducciónBTC;
            var NH = resultCallback.numero - data_halvin_now.halvin_now_numero;
            var RF = resultCallback.Rewards;
            if (NH != "" && RF != 0 && RF != "") {
              var PBTC = new Intl.NumberFormat("es-Mx").format((RI * CP * Math.pow(2, NH) / RF).toFixed(3));
              console.log(PBTC);
              result_calc_formula.textContent = "$ ".concat(PBTC);
              result_calc_anio.textContent = resultCallback.Year;

              /* TABLA ADICIONAL QUE MUESTRA EL EQUIVALENTE DE LA INVERSION INICIAL EN CADA HALVIN */

              for (var i = 5; i < halvins.length; i++) {
                var child_aside = document.createElement("div");
                var calc_jub_aside = RI * CP * Math.pow(2, halvins[i].numero - data_halvin_now.halvin_now_numero) / halvins[i].Rewards;
                console.log(halvins[i].numero - data_halvin_now.halvin_now_numero);
                var rule_tree_calc_jub = calc_jub_aside * 1;
                child_aside.innerHTML = "<p>".concat(halvins[i].Year, " </p><p> $ ").concat(new Intl.NumberFormat("es-Mx").format(rule_tree_calc_jub.toFixed(3)), "</p>");
                aside_calc_jub.appendChild(child_aside);
              }
            }
          };
          _mempoolJS = mempoolJS({
            hostname: "mempool.space"
          }), blocks = _mempoolJS.bitcoin.blocks;
          _context.next = 4;
          return blocks.getBlocksTipHeight();
        case 4:
          blocksTipHeight = _context.sent;
          resultHeightBlock = JSON.stringify(blocksTipHeight, undefined, 2);
          console.log(resultHeightBlock);

          //blockText.textContent= ` Bloque ${resultHeightBlock} de 840.000  `
          CurrentDate = Date.now(); //fecha actual
          timeToHalvin = (1050000 - resultHeightBlock) * 10 * 60;
          dateH = CurrentDate + timeToHalvin * 1000;
          console.log(dateH);
          $(document).ready(function () {
            var clock = $(".clock").FlipClock(timeToHalvin, {
              clockFace: "DailyCounter",
              autoStart: true,
              countdown: true
            });
          });

          //traer el precio de un btc desde binance
          _context.next = 14;
          return fetch("https://api.binance.com/api/v3/avgPrice?symbol=BTCUSDT");
        case 14:
          response = _context.sent;
          _context.next = 17;
          return response.json();
        case 17:
          data = _context.sent;
          priceBTC = Number(data.price);
          span_price_btc.textContent = "$ ".concat(new Intl.NumberFormat("es-Mx").format(priceBTC.toFixed(1)));
          input_inversion_inicial.oninput = equivalenciaBTC;
        case 21:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function init() {
    return _ref.apply(this, arguments);
  };
}();
init();

///calculadora de jubilacion