import {
    s as be,
    n as U,
    c as ft,
    u as dt,
    g as mt,
    d as pt,
    r as vt,
    e as gt,
    o as bt
} from "../chunks/scheduler.63274e7e.js";
import {
    S as ye,
    i as we,
    x as Ke,
    y as $e,
    j as R,
    f as _,
    k as h,
    a as I,
    z as C,
    g as Y,
    h as M,
    A as te,
    e as et,
    B as Xe,
    s as j,
    r as Se,
    C as yt,
    c as H,
    u as Ee,
    l as wt,
    v as xe,
    D as ge,
    d as re,
    t as ce,
    b as _t,
    w as De,
    E as tt,
    m as ht,
    n as ct,
    p as Tt
} from "../chunks/index.53ba859c.js";
import {
    e as Ye
} from "../chunks/each.e59479a4.js";
import {
    c as it,
    S as kt,
    g as ze
} from "../chunks/ScrollTrigger.98dab6ad.js";
import {
    j as Ne
} from "../chunks/singletons.d413f5e2.js";
import {
    p as Ct
} from "../chunks/stores.c1e377f6.js";
const Xt = typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : global;

function Yt(c) {
    let e, t;
    return {
        c() {
            e = Ke("svg"), t = Ke("path"), this.h()
        },
        l(n) {
            e = $e(n, "svg", {
                width: !0,
                height: !0,
                viewBox: !0,
                fill: !0,
                xmlns: !0
            });
            var u = R(e);
            t = $e(u, "path", {
                d: !0,
                fill: !0
            }), R(t).forEach(_), u.forEach(_), this.h()
        },
        h() {
            h(t, "d", "M1.35714 0H8.14286C8.50279 0 8.84799 0.1475 9.1025 0.410051C9.35701 0.672601 9.5 1.0287 9.5 1.4C9.5 1.7713 9.35701 2.1274 9.1025 2.38995C8.84799 2.6525 8.50279 2.8 8.14286 2.8H1.35714C0.997206 2.8 0.652012 2.6525 0.397498 2.38995C0.142984 2.1274 0 1.7713 0 1.4C0 1.0287 0.142984 0.672601 0.397498 0.410051C0.652012 0.1475 0.997206 0 1.35714 0ZM10.8571 11.2H17.6429C18.0028 11.2 18.348 11.3475 18.6025 11.6101C18.857 11.8726 19 12.2287 19 12.6C19 12.9713 18.857 13.3274 18.6025 13.5899C18.348 13.8525 18.0028 14 17.6429 14H10.8571C10.4972 14 10.152 13.8525 9.8975 13.5899C9.64298 13.3274 9.5 12.9713 9.5 12.6C9.5 12.2287 9.64298 11.8726 9.8975 11.6101C10.152 11.3475 10.4972 11.2 10.8571 11.2ZM1.35714 5.6H17.6429C18.0028 5.6 18.348 5.7475 18.6025 6.01005C18.857 6.2726 19 6.6287 19 7C19 7.3713 18.857 7.7274 18.6025 7.98995C18.348 8.2525 18.0028 8.4 17.6429 8.4H1.35714C0.997206 8.4 0.652012 8.2525 0.397498 7.98995C0.142984 7.7274 0 7.3713 0 7C0 6.6287 0.142984 6.2726 0.397498 6.01005C0.652012 5.7475 0.997206 5.6 1.35714 5.6Z"), h(t, "fill", "white"), h(e, "width", "19"), h(e, "height", "14"), h(e, "viewBox", "0 0 19 14"), h(e, "fill", "none"), h(e, "xmlns", "http://www.w3.org/2000/svg")
        },
        m(n, u) {
            I(n, e, u), C(e, t)
        },
        p: U,
        i: U,
        o: U,
        d(n) {
            n && _(e)
        }
    }
}
class Mt extends ye {
    constructor(e) {
        super(), we(this, e, null, Yt, be, {})
    }
}
class St extends ye {
    constructor(e) {
        super(), we(this, e, null, null, be, {})
    }
}

function Me(c) {
    throw new Error('Could not dynamically require "' + c + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')
}
var Et = {
    exports: {}
};
(function(c, e) {
    (function(t) {
        c.exports = t()
    })(function() {
        return function t(n, u, a) {
            function m(o, y) {
                if (!u[o]) {
                    if (!n[o]) {
                        var S = typeof Me == "function" && Me;
                        if (!y && S) return S(o, !0);
                        if (f) return f(o, !0);
                        var p = new Error("Cannot find module '" + o + "'");
                        throw p.code = "MODULE_NOT_FOUND", p
                    }
                    var g = u[o] = {
                        exports: {}
                    };
                    n[o][0].call(g.exports, function(s) {
                        var i = n[o][1][s];
                        return m(i || s)
                    }, g, g.exports, t, n, u, a)
                }
                return u[o].exports
            }
            for (var f = typeof Me == "function" && Me, v = 0; v < a.length; v++) m(a[v]);
            return m
        }({
            1: [function(t, n, u) {
                var a = Object.getOwnPropertySymbols,
                    m = Object.prototype.hasOwnProperty,
                    f = Object.prototype.propertyIsEnumerable;

                function v(y) {
                    if (y == null) throw new TypeError("Object.assign cannot be called with null or undefined");
                    return Object(y)
                }

                function o() {
                    try {
                        if (!Object.assign) return !1;
                        var y = new String("abc");
                        if (y[5] = "de", Object.getOwnPropertyNames(y)[0] === "5") return !1;
                        for (var S = {}, p = 0; p < 10; p++) S["_" + String.fromCharCode(p)] = p;
                        var g = Object.getOwnPropertyNames(S).map(function(i) {
                            return S[i]
                        });
                        if (g.join("") !== "0123456789") return !1;
                        var s = {};
                        return "abcdefghijklmnopqrst".split("").forEach(function(i) {
                            s[i] = i
                        }), Object.keys(Object.assign({}, s)).join("") === "abcdefghijklmnopqrst"
                    } catch {
                        return !1
                    }
                }
                n.exports = o() ? Object.assign : function(y, S) {
                    for (var p, g = v(y), s, i = 1; i < arguments.length; i++) {
                        p = Object(arguments[i]);
                        for (var r in p) m.call(p, r) && (g[r] = p[r]);
                        if (a) {
                            s = a(p);
                            for (var l = 0; l < s.length; l++) f.call(p, s[l]) && (g[s[l]] = p[s[l]])
                        }
                    }
                    return g
                }
            }, {}],
            2: [function(t, n, u) {
                (function(a) {
                    (function() {
                        var m, f, v, o, y, S;
                        typeof performance < "u" && performance !== null && performance.now ? n.exports = function() {
                            return performance.now()
                        } : typeof a < "u" && a !== null && a.hrtime ? (n.exports = function() {
                            return (m() - y) / 1e6
                        }, f = a.hrtime, m = function() {
                            var p;
                            return p = f(), p[0] * 1e9 + p[1]
                        }, o = m(), S = a.uptime() * 1e9, y = o - S) : Date.now ? (n.exports = function() {
                            return Date.now() - v
                        }, v = Date.now()) : (n.exports = function() {
                            return new Date().getTime() - v
                        }, v = new Date().getTime())
                    }).call(this)
                }).call(this, t("_process"))
            }, {
                _process: 3
            }],
            3: [function(t, n, u) {
                var a = n.exports = {},
                    m, f;

                function v() {
                    throw new Error("setTimeout has not been defined")
                }

                function o() {
                    throw new Error("clearTimeout has not been defined")
                }(function() {
                    try {
                        typeof setTimeout == "function" ? m = setTimeout : m = v
                    } catch {
                        m = v
                    }
                    try {
                        typeof clearTimeout == "function" ? f = clearTimeout : f = o
                    } catch {
                        f = o
                    }
                })();

                function y(T) {
                    if (m === setTimeout) return setTimeout(T, 0);
                    if ((m === v || !m) && setTimeout) return m = setTimeout, setTimeout(T, 0);
                    try {
                        return m(T, 0)
                    } catch {
                        try {
                            return m.call(null, T, 0)
                        } catch {
                            return m.call(this, T, 0)
                        }
                    }
                }

                function S(T) {
                    if (f === clearTimeout) return clearTimeout(T);
                    if ((f === o || !f) && clearTimeout) return f = clearTimeout, clearTimeout(T);
                    try {
                        return f(T)
                    } catch {
                        try {
                            return f.call(null, T)
                        } catch {
                            return f.call(this, T)
                        }
                    }
                }
                var p = [],
                    g = !1,
                    s, i = -1;

                function r() {
                    !g || !s || (g = !1, s.length ? p = s.concat(p) : i = -1, p.length && l())
                }

                function l() {
                    if (!g) {
                        var T = y(r);
                        g = !0;
                        for (var w = p.length; w;) {
                            for (s = p, p = []; ++i < w;) s && s[i].run();
                            i = -1, w = p.length
                        }
                        s = null, g = !1, S(T)
                    }
                }
                a.nextTick = function(T) {
                    var w = new Array(arguments.length - 1);
                    if (arguments.length > 1)
                        for (var D = 1; D < arguments.length; D++) w[D - 1] = arguments[D];
                    p.push(new X(T, w)), p.length === 1 && !g && y(l)
                };

                function X(T, w) {
                    this.fun = T, this.array = w
                }
                X.prototype.run = function() {
                    this.fun.apply(null, this.array)
                }, a.title = "browser", a.browser = !0, a.env = {}, a.argv = [], a.version = "", a.versions = {};

                function E() {}
                a.on = E, a.addListener = E, a.once = E, a.off = E, a.removeListener = E, a.removeAllListeners = E, a.emit = E, a.prependListener = E, a.prependOnceListener = E, a.listeners = function(T) {
                    return []
                }, a.binding = function(T) {
                    throw new Error("process.binding is not supported")
                }, a.cwd = function() {
                    return "/"
                }, a.chdir = function(T) {
                    throw new Error("process.chdir is not supported")
                }, a.umask = function() {
                    return 0
                }
            }, {}],
            4: [function(t, n, u) {
                (function(a) {
                    for (var m = t("performance-now"), f = typeof window > "u" ? a : window, v = ["moz", "webkit"], o = "AnimationFrame", y = f["request" + o], S = f["cancel" + o] || f["cancelRequest" + o], p = 0; !y && p < v.length; p++) y = f[v[p] + "Request" + o], S = f[v[p] + "Cancel" + o] || f[v[p] + "CancelRequest" + o];
                    if (!y || !S) {
                        var g = 0,
                            s = 0,
                            i = [],
                            r = 1e3 / 60;
                        y = function(l) {
                            if (i.length === 0) {
                                var X = m(),
                                    E = Math.max(0, r - (X - g));
                                g = E + X, setTimeout(function() {
                                    var T = i.slice(0);
                                    i.length = 0;
                                    for (var w = 0; w < T.length; w++)
                                        if (!T[w].cancelled) try {
                                            T[w].callback(g)
                                        } catch (D) {
                                            setTimeout(function() {
                                                throw D
                                            }, 0)
                                        }
                                }, Math.round(E))
                            }
                            return i.push({
                                handle: ++s,
                                callback: l,
                                cancelled: !1
                            }), s
                        }, S = function(l) {
                            for (var X = 0; X < i.length; X++) i[X].handle === l && (i[X].cancelled = !0)
                        }
                    }
                    n.exports = function(l) {
                        return y.call(f, l)
                    }, n.exports.cancel = function() {
                        S.apply(f, arguments)
                    }, n.exports.polyfill = function() {
                        f.requestAnimationFrame = y, f.cancelAnimationFrame = S
                    }
                }).call(this, typeof it < "u" ? it : typeof self < "u" ? self : typeof window < "u" ? window : {})
            }, {
                "performance-now": 2
            }],
            5: [function(t, n, u) {
                var a = function() {
                    function g(s, i) {
                        for (var r = 0; r < i.length; r++) {
                            var l = i[r];
                            l.enumerable = l.enumerable || !1, l.configurable = !0, "value" in l && (l.writable = !0), Object.defineProperty(s, l.key, l)
                        }
                    }
                    return function(s, i, r) {
                        return i && g(s.prototype, i), r && g(s, r), s
                    }
                }();

                function m(g, s) {
                    if (!(g instanceof s)) throw new TypeError("Cannot call a class as a function")
                }
                var f = t("raf"),
                    v = t("object-assign"),
                    o = {
                        propertyCache: {},
                        vendors: [null, ["-webkit-", "webkit"],
                            ["-moz-", "Moz"],
                            ["-o-", "O"],
                            ["-ms-", "ms"]
                        ],
                        clamp: function(s, i, r) {
                            return i < r ? s < i ? i : s > r ? r : s : s < r ? r : s > i ? i : s
                        },
                        data: function(s, i) {
                            return o.deserialize(s.getAttribute("data-" + i))
                        },
                        deserialize: function(s) {
                            return s === "true" ? !0 : s === "false" ? !1 : s === "null" ? null : !isNaN(parseFloat(s)) && isFinite(s) ? parseFloat(s) : s
                        },
                        camelCase: function(s) {
                            return s.replace(/-+(.)?/g, function(i, r) {
                                return r ? r.toUpperCase() : ""
                            })
                        },
                        accelerate: function(s) {
                            o.css(s, "transform", "translate3d(0,0,0) rotate(0.0001deg)"), o.css(s, "transform-style", "preserve-3d"), o.css(s, "backface-visibility", "hidden")
                        },
                        transformSupport: function(s) {
                            for (var i = document.createElement("div"), r = !1, l = null, X = !1, E = null, T = null, w = 0, D = o.vendors.length; w < D; w++)
                                if (o.vendors[w] !== null ? (E = o.vendors[w][0] + "transform", T = o.vendors[w][1] + "Transform") : (E = "transform", T = "transform"), i.style[T] !== void 0) {
                                    r = !0;
                                    break
                                }
                            switch (s) {
                                case "2D":
                                    X = r;
                                    break;
                                case "3D":
                                    if (r) {
                                        var z = document.body || document.createElement("body"),
                                            Q = document.documentElement,
                                            F = Q.style.overflow,
                                            N = !1;
                                        document.body || (N = !0, Q.style.overflow = "hidden", Q.appendChild(z), z.style.overflow = "hidden", z.style.background = ""), z.appendChild(i), i.style[T] = "translate3d(1px,1px,1px)", l = window.getComputedStyle(i).getPropertyValue(E), X = l !== void 0 && l.length > 0 && l !== "none", Q.style.overflow = F, z.removeChild(i), N && (z.removeAttribute("style"), z.parentNode.removeChild(z))
                                    }
                                    break
                            }
                            return X
                        },
                        css: function(s, i, r) {
                            var l = o.propertyCache[i];
                            if (!l) {
                                for (var X = 0, E = o.vendors.length; X < E; X++)
                                    if (o.vendors[X] !== null ? l = o.camelCase(o.vendors[X][1] + "-" + i) : l = i, s.style[l] !== void 0) {
                                        o.propertyCache[i] = l;
                                        break
                                    }
                            }
                            s.style[l] = r
                        }
                    },
                    y = 30,
                    S = {
                        relativeInput: !1,
                        clipRelativeInput: !1,
                        inputElement: null,
                        hoverOnly: !1,
                        calibrationThreshold: 100,
                        calibrationDelay: 500,
                        supportDelay: 500,
                        calibrateX: !1,
                        calibrateY: !0,
                        invertX: !0,
                        invertY: !0,
                        limitX: !1,
                        limitY: !1,
                        scalarX: 10,
                        scalarY: 10,
                        frictionX: .1,
                        frictionY: .1,
                        originX: .5,
                        originY: .5,
                        pointerEvents: !1,
                        precision: 1,
                        onReady: null,
                        selector: null
                    },
                    p = function() {
                        function g(s, i) {
                            m(this, g), this.element = s;
                            var r = {
                                calibrateX: o.data(this.element, "calibrate-x"),
                                calibrateY: o.data(this.element, "calibrate-y"),
                                invertX: o.data(this.element, "invert-x"),
                                invertY: o.data(this.element, "invert-y"),
                                limitX: o.data(this.element, "limit-x"),
                                limitY: o.data(this.element, "limit-y"),
                                scalarX: o.data(this.element, "scalar-x"),
                                scalarY: o.data(this.element, "scalar-y"),
                                frictionX: o.data(this.element, "friction-x"),
                                frictionY: o.data(this.element, "friction-y"),
                                originX: o.data(this.element, "origin-x"),
                                originY: o.data(this.element, "origin-y"),
                                pointerEvents: o.data(this.element, "pointer-events"),
                                precision: o.data(this.element, "precision"),
                                relativeInput: o.data(this.element, "relative-input"),
                                clipRelativeInput: o.data(this.element, "clip-relative-input"),
                                hoverOnly: o.data(this.element, "hover-only"),
                                inputElement: document.querySelector(o.data(this.element, "input-element")),
                                selector: o.data(this.element, "selector")
                            };
                            for (var l in r) r[l] === null && delete r[l];
                            v(this, S, r, i), this.inputElement || (this.inputElement = this.element), this.calibrationTimer = null, this.calibrationFlag = !0, this.enabled = !1, this.depthsX = [], this.depthsY = [], this.raf = null, this.bounds = null, this.elementPositionX = 0, this.elementPositionY = 0, this.elementWidth = 0, this.elementHeight = 0, this.elementCenterX = 0, this.elementCenterY = 0, this.elementRangeX = 0, this.elementRangeY = 0, this.calibrationX = 0, this.calibrationY = 0, this.inputX = 0, this.inputY = 0, this.motionX = 0, this.motionY = 0, this.velocityX = 0, this.velocityY = 0, this.onMouseMove = this.onMouseMove.bind(this), this.onDeviceOrientation = this.onDeviceOrientation.bind(this), this.onDeviceMotion = this.onDeviceMotion.bind(this), this.onOrientationTimer = this.onOrientationTimer.bind(this), this.onMotionTimer = this.onMotionTimer.bind(this), this.onCalibrationTimer = this.onCalibrationTimer.bind(this), this.onAnimationFrame = this.onAnimationFrame.bind(this), this.onWindowResize = this.onWindowResize.bind(this), this.windowWidth = null, this.windowHeight = null, this.windowCenterX = null, this.windowCenterY = null, this.windowRadiusX = null, this.windowRadiusY = null, this.portrait = !1, this.desktop = !navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i), this.motionSupport = !!window.DeviceMotionEvent && !this.desktop, this.orientationSupport = !!window.DeviceOrientationEvent && !this.desktop, this.orientationStatus = 0, this.motionStatus = 0, this.initialise()
                        }
                        return a(g, [{
                            key: "initialise",
                            value: function() {
                                this.transform2DSupport === void 0 && (this.transform2DSupport = o.transformSupport("2D"), this.transform3DSupport = o.transformSupport("3D")), this.transform3DSupport && o.accelerate(this.element);
                                var i = window.getComputedStyle(this.element);
                                i.getPropertyValue("position") === "static" && (this.element.style.position = "relative"), this.pointerEvents || (this.element.style.pointerEvents = "none"), this.updateLayers(), this.updateDimensions(), this.enable(), this.queueCalibration(this.calibrationDelay)
                            }
                        }, {
                            key: "doReadyCallback",
                            value: function() {
                                this.onReady && this.onReady()
                            }
                        }, {
                            key: "updateLayers",
                            value: function() {
                                this.selector ? this.layers = this.element.querySelectorAll(this.selector) : this.layers = this.element.children, this.layers.length || console.warn("ParallaxJS: Your scene does not have any layers."), this.depthsX = [], this.depthsY = [];
                                for (var i = 0; i < this.layers.length; i++) {
                                    var r = this.layers[i];
                                    this.transform3DSupport && o.accelerate(r), r.style.position = i ? "absolute" : "relative", r.style.display = "block", r.style.left = 0, r.style.top = 0;
                                    var l = o.data(r, "depth") || 0;
                                    this.depthsX.push(o.data(r, "depth-x") || l), this.depthsY.push(o.data(r, "depth-y") || l)
                                }
                            }
                        }, {
                            key: "updateDimensions",
                            value: function() {
                                this.windowWidth = window.innerWidth, this.windowHeight = window.innerHeight, this.windowCenterX = this.windowWidth * this.originX, this.windowCenterY = this.windowHeight * this.originY, this.windowRadiusX = Math.max(this.windowCenterX, this.windowWidth - this.windowCenterX), this.windowRadiusY = Math.max(this.windowCenterY, this.windowHeight - this.windowCenterY)
                            }
                        }, {
                            key: "updateBounds",
                            value: function() {
                                this.bounds = this.inputElement.getBoundingClientRect(), this.elementPositionX = this.bounds.left, this.elementPositionY = this.bounds.top, this.elementWidth = this.bounds.width, this.elementHeight = this.bounds.height, this.elementCenterX = this.elementWidth * this.originX, this.elementCenterY = this.elementHeight * this.originY, this.elementRangeX = Math.max(this.elementCenterX, this.elementWidth - this.elementCenterX), this.elementRangeY = Math.max(this.elementCenterY, this.elementHeight - this.elementCenterY)
                            }
                        }, {
                            key: "queueCalibration",
                            value: function(i) {
                                clearTimeout(this.calibrationTimer), this.calibrationTimer = setTimeout(this.onCalibrationTimer, i)
                            }
                        }, {
                            key: "enable",
                            value: function() {
                                this.enabled || (this.enabled = !0, this.orientationSupport ? (this.portrait = !1, window.addEventListener("deviceorientation", this.onDeviceOrientation), this.detectionTimer = setTimeout(this.onOrientationTimer, this.supportDelay)) : this.motionSupport ? (this.portrait = !1, window.addEventListener("devicemotion", this.onDeviceMotion), this.detectionTimer = setTimeout(this.onMotionTimer, this.supportDelay)) : (this.calibrationX = 0, this.calibrationY = 0, this.portrait = !1, window.addEventListener("mousemove", this.onMouseMove), this.doReadyCallback()), window.addEventListener("resize", this.onWindowResize), this.raf = f(this.onAnimationFrame))
                            }
                        }, {
                            key: "disable",
                            value: function() {
                                this.enabled && (this.enabled = !1, this.orientationSupport ? window.removeEventListener("deviceorientation", this.onDeviceOrientation) : this.motionSupport ? window.removeEventListener("devicemotion", this.onDeviceMotion) : window.removeEventListener("mousemove", this.onMouseMove), window.removeEventListener("resize", this.onWindowResize), f.cancel(this.raf))
                            }
                        }, {
                            key: "calibrate",
                            value: function(i, r) {
                                this.calibrateX = i === void 0 ? this.calibrateX : i, this.calibrateY = r === void 0 ? this.calibrateY : r
                            }
                        }, {
                            key: "invert",
                            value: function(i, r) {
                                this.invertX = i === void 0 ? this.invertX : i, this.invertY = r === void 0 ? this.invertY : r
                            }
                        }, {
                            key: "friction",
                            value: function(i, r) {
                                this.frictionX = i === void 0 ? this.frictionX : i, this.frictionY = r === void 0 ? this.frictionY : r
                            }
                        }, {
                            key: "scalar",
                            value: function(i, r) {
                                this.scalarX = i === void 0 ? this.scalarX : i, this.scalarY = r === void 0 ? this.scalarY : r
                            }
                        }, {
                            key: "limit",
                            value: function(i, r) {
                                this.limitX = i === void 0 ? this.limitX : i, this.limitY = r === void 0 ? this.limitY : r
                            }
                        }, {
                            key: "origin",
                            value: function(i, r) {
                                this.originX = i === void 0 ? this.originX : i, this.originY = r === void 0 ? this.originY : r
                            }
                        }, {
                            key: "setInputElement",
                            value: function(i) {
                                this.inputElement = i, this.updateDimensions()
                            }
                        }, {
                            key: "setPosition",
                            value: function(i, r, l) {
                                r = r.toFixed(this.precision) + "px", l = l.toFixed(this.precision) + "px", this.transform3DSupport ? o.css(i, "transform", "translate3d(" + r + "," + l + ",0)") : this.transform2DSupport ? o.css(i, "transform", "translate(" + r + "," + l + ")") : (i.style.left = r, i.style.top = l)
                            }
                        }, {
                            key: "onOrientationTimer",
                            value: function() {
                                this.orientationSupport && this.orientationStatus === 0 ? (this.disable(), this.orientationSupport = !1, this.enable()) : this.doReadyCallback()
                            }
                        }, {
                            key: "onMotionTimer",
                            value: function() {
                                this.motionSupport && this.motionStatus === 0 ? (this.disable(), this.motionSupport = !1, this.enable()) : this.doReadyCallback()
                            }
                        }, {
                            key: "onCalibrationTimer",
                            value: function() {
                                this.calibrationFlag = !0
                            }
                        }, {
                            key: "onWindowResize",
                            value: function() {
                                this.updateDimensions()
                            }
                        }, {
                            key: "onAnimationFrame",
                            value: function() {
                                this.updateBounds();
                                var i = this.inputX - this.calibrationX,
                                    r = this.inputY - this.calibrationY;
                                (Math.abs(i) > this.calibrationThreshold || Math.abs(r) > this.calibrationThreshold) && this.queueCalibration(0), this.portrait ? (this.motionX = this.calibrateX ? r : this.inputY, this.motionY = this.calibrateY ? i : this.inputX) : (this.motionX = this.calibrateX ? i : this.inputX, this.motionY = this.calibrateY ? r : this.inputY), this.motionX *= this.elementWidth * (this.scalarX / 100), this.motionY *= this.elementHeight * (this.scalarY / 100), isNaN(parseFloat(this.limitX)) || (this.motionX = o.clamp(this.motionX, -this.limitX, this.limitX)), isNaN(parseFloat(this.limitY)) || (this.motionY = o.clamp(this.motionY, -this.limitY, this.limitY)), this.velocityX += (this.motionX - this.velocityX) * this.frictionX, this.velocityY += (this.motionY - this.velocityY) * this.frictionY;
                                for (var l = 0; l < this.layers.length; l++) {
                                    var X = this.layers[l],
                                        E = this.depthsX[l],
                                        T = this.depthsY[l],
                                        w = this.velocityX * (E * (this.invertX ? -1 : 1)),
                                        D = this.velocityY * (T * (this.invertY ? -1 : 1));
                                    this.setPosition(X, w, D)
                                }
                                this.raf = f(this.onAnimationFrame)
                            }
                        }, {
                            key: "rotate",
                            value: function(i, r) {
                                var l = (i || 0) / y,
                                    X = (r || 0) / y,
                                    E = this.windowHeight > this.windowWidth;
                                this.portrait !== E && (this.portrait = E, this.calibrationFlag = !0), this.calibrationFlag && (this.calibrationFlag = !1, this.calibrationX = l, this.calibrationY = X), this.inputX = l, this.inputY = X
                            }
                        }, {
                            key: "onDeviceOrientation",
                            value: function(i) {
                                var r = i.beta,
                                    l = i.gamma;
                                r !== null && l !== null && (this.orientationStatus = 1, this.rotate(r, l))
                            }
                        }, {
                            key: "onDeviceMotion",
                            value: function(i) {
                                var r = i.rotationRate.beta,
                                    l = i.rotationRate.gamma;
                                r !== null && l !== null && (this.motionStatus = 1, this.rotate(r, l))
                            }
                        }, {
                            key: "onMouseMove",
                            value: function(i) {
                                var r = i.clientX,
                                    l = i.clientY;
                                if (this.hoverOnly && (r < this.elementPositionX || r > this.elementPositionX + this.elementWidth || l < this.elementPositionY || l > this.elementPositionY + this.elementHeight)) {
                                    this.inputX = 0, this.inputY = 0;
                                    return
                                }
                                this.relativeInput ? (this.clipRelativeInput && (r = Math.max(r, this.elementPositionX), r = Math.min(r, this.elementPositionX + this.elementWidth), l = Math.max(l, this.elementPositionY), l = Math.min(l, this.elementPositionY + this.elementHeight)), this.elementRangeX && this.elementRangeY && (this.inputX = (r - this.elementPositionX - this.elementCenterX) / this.elementRangeX, this.inputY = (l - this.elementPositionY - this.elementCenterY) / this.elementRangeY)) : this.windowRadiusX && this.windowRadiusY && (this.inputX = (r - this.windowCenterX) / this.windowRadiusX, this.inputY = (l - this.windowCenterY) / this.windowRadiusY)
                            }
                        }, {
                            key: "destroy",
                            value: function() {
                                this.disable(), clearTimeout(this.calibrationTimer), clearTimeout(this.detectionTimer), this.element.removeAttribute("style");
                                for (var i = 0; i < this.layers.length; i++) this.layers[i].removeAttribute("style");
                                delete this.element, delete this.layers
                            }
                        }, {
                            key: "version",
                            value: function() {
                                return "3.1.0"
                            }
                        }]), g
                    }();
                n.exports = p
            }, {
                "object-assign": 1,
                raf: 4
            }]
        }, {}, [5])(5)
    })
})(Et);

function xt(c) {
    let e, t = '<div id="stars" class="max-md:invisible svelte-1tq0o1b"></div> <div id="stars2" class="svelte-1tq0o1b"></div> <div id="stars3" class="svelte-1tq0o1b"></div>';
    return {
        c() {
            e = Y("div"), e.innerHTML = t, this.h()
        },
        l(n) {
            e = M(n, "DIV", {
                class: !0,
                "data-svelte-h": !0
            }), te(e) !== "svelte-kref1s" && (e.innerHTML = t), this.h()
        },
        h() {
            h(e, "class", "star-layers 2xl:translate-x-[10%]")
        },
        m(n, u) {
            I(n, e, u)
        },
        p: U,
        i: U,
        o: U,
        d(n) {
            n && _(e)
        }
    }
}
class Dt extends ye {
    constructor(e) {
        super(), we(this, e, null, xt, be, {})
    }
}
const Rt = Ne("before_navigate"),
    Ot = Ne("on_navigate"),
    At = Ne("after_navigate");

function nt(c) {
    let e, t, n = c[3] && rt(c);
    return {
        c() {
            e = Y("output"), n && n.c(), this.h()
        },
        l(u) {
            e = M(u, "OUTPUT", {
                id: !0,
                role: !0,
                "aria-valuenow": !0,
                "aria-valuemin": !0,
                "aria-valuemax": !0,
                class: !0,
                style: !0
            });
            var a = R(e);
            n && n.l(a), a.forEach(_), this.h()
        },
        h() {
            h(e, "id", c[0]), h(e, "role", "progressbar"), h(e, "aria-valuenow", c[2]), h(e, "aria-valuemin", 0), h(e, "aria-valuemax", 1), h(e, "class", t = "svelte-progress-bar " + c[1] + " svelte-1rjlpd"), h(e, "style", c[5]), Xe(e, "running", c[3]), Xe(e, "svelte-progress-bar-hiding", c[4])
        },
        m(u, a) {
            I(u, e, a), n && n.m(e, null)
        },
        p(u, a) {
            u[3] ? n ? n.p(u, a) : (n = rt(u), n.c(), n.m(e, null)) : n && (n.d(1), n = null), a & 1 && h(e, "id", u[0]), a & 4 && h(e, "aria-valuenow", u[2]), a & 2 && t !== (t = "svelte-progress-bar " + u[1] + " svelte-1rjlpd") && h(e, "class", t), a & 32 && h(e, "style", u[5]), a & 10 && Xe(e, "running", u[3]), a & 18 && Xe(e, "svelte-progress-bar-hiding", u[4])
        },
        d(u) {
            u && _(e), n && n.d()
        }
    }
}

function rt(c) {
    let e;
    return {
        c() {
            e = Y("div"), this.h()
        },
        l(t) {
            e = M(t, "DIV", {
                class: !0,
                style: !0
            }), R(e).forEach(_), this.h()
        },
        h() {
            h(e, "class", "svelte-progress-bar-leader svelte-1rjlpd"), h(e, "style", c[6])
        },
        m(t, n) {
            I(t, e, n)
        },
        p(t, n) {
            n & 64 && h(e, "style", t[6])
        },
        d(t) {
            t && _(e)
        }
    }
}

function Lt(c) {
    let e, t = (c[3] || c[2] > 0) && nt(c);
    return {
        c() {
            t && t.c(), e = et()
        },
        l(n) {
            t && t.l(n), e = et()
        },
        m(n, u) {
            t && t.m(n, u), I(n, e, u)
        },
        p(n, [u]) {
            n[3] || n[2] > 0 ? t ? t.p(n, u) : (t = nt(n), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null)
        },
        i: U,
        o: U,
        d(n) {
            n && _(e), t && t.d(n)
        }
    }
}

function Pt(c, e, t) {
    const n = b => b >= 0 && b < .2 ? .1 : b >= .2 && b < .5 ? .04 : b >= .5 && b < .8 ? .02 : b >= .8 && b < .99 ? .005 : 0;
    let u = !1,
        a = null,
        m = !1,
        f = 0,
        {
            id: v = void 0
        } = e,
        {
            busy: o = !1
        } = e,
        {
            color: y = "currentColor"
        } = e,
        {
            class: S = ""
        } = e,
        {
            zIndex: p = 1
        } = e,
        {
            minimum: g = .08
        } = e,
        {
            maximum: s = .994
        } = e,
        {
            settleTime: i = 700
        } = e,
        {
            intervalTime: r = 700
        } = e,
        {
            stepSizes: l = [0, .005, .01, .02]
        } = e;
    const X = (b = g) => {
            t(2, f = b), t(3, u = !0)
        },
        E = () => {
            a && clearInterval(a), t(3, u = !0), a = setInterval(() => {
                const b = l[Math.floor(Math.random() * l.length)] ? ? 0,
                    A = n(f) + b;
                f < s && t(2, f = f + A), f > s && (t(2, f = s), w())
            }, r)
        },
        T = b => {
            X(b), E()
        },
        w = () => {
            a && clearInterval(a)
        },
        D = (b = i) => {
            a && clearInterval(a), u && (t(2, f = 1), t(3, u = !1), setTimeout(() => {
                t(4, m = !0), setTimeout(() => {
                    t(4, m = !1), t(2, f = 0)
                }, b)
            }, b))
        },
        z = b => {
            w(), t(2, f = b), t(4, m = !1), t(3, u = !0)
        },
        Q = () => ({
            width: f,
            running: u,
            completed: m,
            color: y,
            defaultMinimum: g,
            maximum: s,
            defaultSettleTime: i,
            intervalTime: r,
            stepSizes: l
        });
    let F, N, {
            displayThresholdMs: ie = 150
        } = e,
        {
            noNavigationProgress: W = !1
        } = e,
        Z = null;
    return Rt(b => {
        var A;
        Z && (clearTimeout(Z), Z = null), !W && (A = b.to) != null && A.route.id && (ie > 0 ? Z = setTimeout(() => !W && T(), ie) : T())
    }), At(() => {
        Z && (clearTimeout(Z), Z = null), D()
    }), c.$$set = b => {
        "id" in b && t(0, v = b.id), "busy" in b && t(7, o = b.busy), "color" in b && t(8, y = b.color), "class" in b && t(1, S = b.class), "zIndex" in b && t(9, p = b.zIndex), "minimum" in b && t(10, g = b.minimum), "maximum" in b && t(11, s = b.maximum), "settleTime" in b && t(12, i = b.settleTime), "intervalTime" in b && t(13, r = b.intervalTime), "stepSizes" in b && t(14, l = b.stepSizes), "displayThresholdMs" in b && t(22, ie = b.displayThresholdMs), "noNavigationProgress" in b && t(23, W = b.noNavigationProgress)
    }, c.$$.update = () => {
        c.$$.dirty & 128 && t(3, u = o), c.$$.dirty & 772 && t(5, F = (y ? `background-color: ${y};` : "") + (f && f * 100 ? `width: ${f*100}%;` : "") + `z-index: ${p};`), c.$$.dirty & 768 && t(6, N = (y ? `background-color: ${y}; color: ${y};` : "") + `z-index: ${p+1};`)
    }, [v, S, f, u, m, F, N, o, y, p, g, s, i, r, l, X, E, T, w, D, z, Q, ie, W]
}
class jt extends ye {
    constructor(e) {
        super(), we(this, e, Pt, Lt, be, {
            id: 0,
            busy: 7,
            color: 8,
            class: 1,
            zIndex: 9,
            minimum: 10,
            maximum: 11,
            settleTime: 12,
            intervalTime: 13,
            stepSizes: 14,
            reset: 15,
            animate: 16,
            start: 17,
            stop: 18,
            complete: 19,
            setWidthRatio: 20,
            getState: 21,
            displayThresholdMs: 22,
            noNavigationProgress: 23
        })
    }
    get reset() {
        return this.$$.ctx[15]
    }
    get animate() {
        return this.$$.ctx[16]
    }
    get start() {
        return this.$$.ctx[17]
    }
    get stop() {
        return this.$$.ctx[18]
    }
    get complete() {
        return this.$$.ctx[19]
    }
    get setWidthRatio() {
        return this.$$.ctx[20]
    }
    get getState() {
        return this.$$.ctx[21]
    }
}
const {
    document: V
} = Xt;

function st(c, e, t) {
    const n = c.slice();
    return n[12] = e[t], n
}

function ot(c, e, t) {
    const n = c.slice();
    return n[12] = e[t], n
}

function at(c) {
    let e, t;
    return e = new St({}), {
        c() {
            Se(e.$$.fragment)
        },
        l(n) {
            Ee(e.$$.fragment, n)
        },
        m(n, u) {
            xe(e, n, u), t = !0
        },
        i(n) {
            t || (re(e.$$.fragment, n), t = !0)
        },
        o(n) {
            ce(e.$$.fragment, n), t = !1
        },
        d(n) {
            De(e, n)
        }
    }
}

function lt(c) {
    let e, t, n = c[12].title + "",
        u, a, m, f;
    return {
        c() {
            e = Y("li"), t = Y("a"), u = ht(n), a = j(), this.h()
        },
        l(v) {
            e = M(v, "LI", {
                class: !0
            });
            var o = R(e);
            t = M(o, "A", {
                class: !0,
                href: !0
            });
            var y = R(t);
            u = ct(y, n), y.forEach(_), a = H(o), o.forEach(_), this.h()
        },
        h() {
            h(t, "class", "block"), h(t, "href", c[12].href), h(e, "class", "group")
        },
        m(v, o) {
            I(v, e, o), C(e, t), C(t, u), C(e, a), m || (f = ge(t, "click", c[6]), m = !0)
        },
        p: U,
        d(v) {
            v && _(e), m = !1, f()
        }
    }
}

function Ht(c) {
    let e, t = "Register",
        n, u;
    return {
        c() {
            e = Y("a"), e.textContent = t, this.h()
        },
        l(a) {
            e = M(a, "A", {
                href: !0,
                class: !0,
                "data-svelte-h": !0
            }), te(e) !== "svelte-1h8eej" && (e.textContent = t), this.h()
        },
        h() {
            h(e, "href", "/register"), h(e, "class", "btn")
        },
        m(a, m) {
            I(a, e, m), n || (u = ge(e, "click", c[6]), n = !0)
        },
        p: U,
        d(a) {
            a && _(e), n = !1, u()
        }
    }
}

function It(c) {
    let e, t = '<span class="absolute inset-0 rounded-[inherit] bg-gradient-to-t from-pink-100 to-purple -m-1"></span> <p class="bg-dark bg-clip-border absolute inset-0 flex justify-center items-center rounded-[inherit]">Register</p> <p class="invisible rounded-[inherit]">Register</p>',
        n, u;
    return {
        c() {
            e = Y("a"), e.innerHTML = t, this.h()
        },
        l(a) {
            e = M(a, "A", {
                href: !0,
                class: !0,
                "data-svelte-h": !0
            }), te(e) !== "svelte-1sxvgev" && (e.innerHTML = t), this.h()
        },
        h() {
            h(e, "href", "/register"), h(e, "class", "relative btn-base block")
        },
        m(a, m) {
            I(a, e, m), n || (u = ge(e, "click", c[6]), n = !0)
        },
        p: U,
        d(a) {
            a && _(e), n = !1, u()
        }
    }
}

function ut(c) {
    let e, t, n = c[12].title + "",
        u, a, m;
    return {
        c() {
            e = Y("li"), t = Y("a"), u = ht(n), m = j(), this.h()
        },
        l(f) {
            e = M(f, "LI", {});
            var v = R(e);
            t = M(v, "A", {
                href: !0,
                class: !0
            });
            var o = R(t);
            u = ct(o, n), o.forEach(_), m = H(v), v.forEach(_), this.h()
        },
        h() {
            h(t, "href", c[12].href), h(t, "class", a = "transition-default " + (c[1] === `#${c[12].title.toLowerCase()}` || c[3].route.id == c[12].href ? "bg-gradient-to-r font-bold from-purple via-pink-100 to-pink-100 text-transparent bg-clip-text " : ""))
        },
        m(f, v) {
            I(f, e, v), C(e, t), C(t, u), C(e, m)
        },
        p(f, v) {
            v & 10 && a !== (a = "transition-default " + (f[1] === `#${f[12].title.toLowerCase()}` || f[3].route.id == f[12].href ? "bg-gradient-to-r font-bold from-purple via-pink-100 to-pink-100 text-transparent bg-clip-text " : "")) && h(t, "class", a)
        },
        d(f) {
            f && _(e)
        }
    }
}

function zt(c) {
    let e, t = "Register";
    return {
        c() {
            e = Y("a"), e.textContent = t, this.h()
        },
        l(n) {
            e = M(n, "A", {
                href: !0,
                class: !0,
                "data-svelte-h": !0
            }), te(e) !== "svelte-q64ulc" && (e.textContent = t), this.h()
        },
        h() {
            h(e, "href", "/register"), h(e, "class", "btn")
        },
        m(n, u) {
            I(n, e, u)
        },
        d(n) {
            n && _(e)
        }
    }
}

function Nt(c) {
    let e, t = '<span class="absolute inset-0 rounded-[inherit] bg-gradient-to-t from-pink-100 to-purple -m-1"></span> <p class="bg-dark bg-clip-border absolute inset-0 flex justify-center items-center rounded-[inherit]">Register</p> <p class="invisible rounded-[inherit]">Register</p>';
    return {
        c() {
            e = Y("a"), e.innerHTML = t, this.h()
        },
        l(n) {
            e = M(n, "A", {
                href: !0,
                class: !0,
                "data-svelte-h": !0
            }), te(e) !== "svelte-1kgvynn" && (e.innerHTML = t), this.h()
        },
        h() {
            h(e, "href", "/register"), h(e, "class", "relative btn-base")
        },
        m(n, u) {
            I(n, e, u)
        },
        d(n) {
            n && _(e)
        }
    }
}

function qt(c) {
    let e, t, n, u, a, m, f, v, o, y, S, p, g, s, i, r, l, X, E = "×",
        T, w, D, z, Q, F, N, ie, W, Z = "",
        b, A, se, qe = "",
        Re, ve, Oe, fe, G, oe, Fe = '<h2 class="text-[26px] heading-1">Turing<span class="text-pink">HacX</span></h2>',
        Ae, ae, le, Le, K, ue, Pe, je, $, He, We, O = c[2] && at();
    s = new jt({
        props: {
            class: "text-pink-200 z-40"
        }
    });
    let de = Ye(c[4]),
        L = [];
    for (let d = 0; d < de.length; d += 1) L[d] = lt(ot(c, de, d));

    function Ve(d, x) {
        return d[3].route.id == "/register" ? It : Ht
    }
    let _e = Ve(c),
        B = _e(c);
    N = new Dt({}), le = new Mt({});
    let me = Ye(c[4]),
        P = [];
    for (let d = 0; d < me.length; d += 1) P[d] = ut(st(c, me, d));

    function Be(d, x) {
        return d[3].route.id == "/register" ? Nt : zt
    }
    let Te = Be(c),
        ee = Te(c);
    const Ie = c[8].default,
        q = ft(Ie, c, c[7], null);
    return {
        c() {
            e = Y("meta"), t = Y("meta"), n = Y("meta"), u = Y("meta"), a = Y("meta"), m = Y("meta"), v = Y("meta"), o = Y("meta"), y = Y("meta"), S = Y("meta"), p = j(), O && O.c(), g = j(), Se(s.$$.fragment), i = j(), r = Y("div"), l = Y("div"), X = Y("button"), X.textContent = E, T = j(), w = Y("nav"), D = Y("ul");
            for (let d = 0; d < L.length; d += 1) L[d].c();
            z = j(), B.c(), Q = j(), F = Y("div"), Se(N.$$.fragment), ie = j(), W = Y("div"), W.innerHTML = Z, b = j(), A = Y("div"), se = Y("div"), se.innerHTML = qe, Re = j(), ve = Y("div"), Oe = j(), fe = Y("header"), G = Y("div"), oe = Y("a"), oe.innerHTML = Fe, Ae = j(), ae = Y("button"), Se(le.$$.fragment), Le = j(), K = Y("nav"), ue = Y("ul");
            for (let d = 0; d < P.length; d += 1) P[d].c();
            Pe = j(), ee.c(), je = j(), q && q.c(), this.h()
        },
        l(d) {
            const x = yt("svelte-cobwjx", V.head);
            e = M(x, "META", {
                name: !0,
                content: !0
            }), t = M(x, "META", {
                property: !0,
                content: !0
            }), n = M(x, "META", {
                property: !0,
                content: !0
            }), u = M(x, "META", {
                property: !0,
                content: !0
            }), a = M(x, "META", {
                property: !0,
                content: !0
            }), m = M(x, "META", {
                property: !0,
                content: !0
            }), v = M(x, "META", {
                property: !0,
                content: !0
            }), o = M(x, "META", {
                property: !0,
                content: !0
            }), y = M(x, "META", {
                property: !0,
                content: !0
            }), S = M(x, "META", {
                property: !0,
                content: !0
            }), x.forEach(_), p = H(d), O && O.l(d), g = H(d), Ee(s.$$.fragment, d), i = H(d), r = M(d, "DIV", {
                class: !0
            });
            var k = R(r);
            l = M(k, "DIV", {
                class: !0
            });
            var J = R(l);
            X = M(J, "BUTTON", {
                class: !0,
                "data-svelte-h": !0
            }), te(X) !== "svelte-1mag0bp" && (X.textContent = E), T = H(J), w = M(J, "NAV", {
                class: !0
            });
            var ke = R(w);
            D = M(ke, "UL", {
                class: !0
            });
            var Ue = R(D);
            for (let he = 0; he < L.length; he += 1) L[he].l(Ue);
            Ue.forEach(_), z = H(ke), B.l(ke), ke.forEach(_), J.forEach(_), Q = H(k), F = M(k, "DIV", {
                class: !0,
                style: !0
            });
            var Qe = R(F);
            Ee(N.$$.fragment, Qe), Qe.forEach(_), ie = H(k), W = M(k, "DIV", {
                class: !0,
                "data-svelte-h": !0
            }), te(W) !== "svelte-vqxfqk" && (W.innerHTML = Z), b = H(k), A = M(k, "DIV", {
                class: !0
            });
            var ne = R(A);
            se = M(ne, "DIV", {
                class: !0,
                "data-svelte-h": !0
            }), te(se) !== "svelte-1041exj" && (se.innerHTML = qe), Re = H(ne), ve = M(ne, "DIV", {
                class: !0
            }), R(ve).forEach(_), Oe = H(ne), fe = M(ne, "HEADER", {
                class: !0
            });
            var Ze = R(fe);
            G = M(Ze, "DIV", {
                class: !0
            });
            var pe = R(G);
            oe = M(pe, "A", {
                href: !0,
                "data-svelte-h": !0
            }), te(oe) !== "svelte-1rlyw48" && (oe.innerHTML = Fe), Ae = H(pe), ae = M(pe, "BUTTON", {
                class: !0
            });
            var Ge = R(ae);
            Ee(le.$$.fragment, Ge), Ge.forEach(_), Le = H(pe), K = M(pe, "NAV", {
                class: !0
            });
            var Ce = R(K);
            ue = M(Ce, "UL", {
                class: !0
            });
            var Je = R(ue);
            for (let he = 0; he < P.length; he += 1) P[he].l(Je);
            Je.forEach(_), Pe = H(Ce), ee.l(Ce), Ce.forEach(_), pe.forEach(_), Ze.forEach(_), je = H(ne), q && q.l(ne), ne.forEach(_), k.forEach(_), this.h()
        },
        h() {
            V.title = "TuringHacX", h(e, "name", "description"), h(e, "content", "Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Whether you're a coding genius, a design maverick, or a concept wizard, you'll have the chance to transform your ideas into reality. Solving real-world problems, pushing the boundaries of technology, and creating solutions that can change the world, that's what we're all about!"), h(t, "property", "og:type"), h(t, "content", "website"), h(n, "property", "og:url"), h(n, "content", c[0]), h(u, "property", "og:title"), h(u, "content", "TuringHacX"), h(a, "property", "og:description"), h(a, "content", "Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Whether you're a coding genius, a design maverick, or a concept wizard, you'll have the chance to transform your ideas into reality. Solving real-world problems, pushing the boundaries of technology, and creating solutions that can change the world, that's what we're all about!"), h(m, "property", "og:image"), h(m, "content", f = c[0] + "/getlinked-banner.png"), h(v, "property", "twitter:card"), h(v, "content", "summary_large_image"), h(o, "property", "twitter:url"), h(o, "content", c[0]), h(y, "property", "twitter:title"), h(y, "content", "TuringHacX"), h(S, "property", "twitter:description"), h(S, "content", "Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Whether you're a coding genius, a design maverick, or a concept wizard, you'll have the chance to transform your ideas into reality. Solving real-world problems, pushing the boundaries of technology, and creating solutions that can change the world, that's what we're all about!"), h(X, "class", "menu_close_btn border rounded-full w-6 h-6 p-8 hover:p-10 hover:rotate-90 transition-default flex items-center justify-center absolute top-0 right-0 m-12"), h(D, "class", "capitalize space-y-4 w-full"), h(w, "class", "space-y-6"), h(l, "class", "menu z-[90] bg-dark min-h-screen fixed inset-0 flex items-center px-10 svelte-11ymms8"), h(F, "class", "min-h-screen fixed inset-0 overflow-hidden opacity-30"), wt(F, "background", "radial-gradient(ellipse at bottom, #150E28 0%, #090a0f 100%)"), h(W, "class", "overflow-hidden fixed inset-0 pointer-events-none"), h(se, "class", "z-10 -space-y-20"), h(ve, "class", "header-top"), h(oe, "href", "/"), h(ae, "class", "md:hidden"), h(ue, "class", "capitalize flex items-center gap-8 transition-default"), h(K, "class", "header-nav max-md:hidden flex gap-10 items-center transition-default"), h(G, "class", "max-w-6xl container flex items-center justify-between"), h(fe, "class", "transition-default hover:opacity-100 hover:backdrop-blur-[1px] z-10 py-6 border-b border-white/[5%]"), h(A, "class", "relative min-h-screen"), h(r, "class", "layout_wrapper overflow-clip bg-dark text-white selection:bg-pink selection:text-dark")
        },
        m(d, x) {
            C(V.head, e), C(V.head, t), C(V.head, n), C(V.head, u), C(V.head, a), C(V.head, m), C(V.head, v), C(V.head, o), C(V.head, y), C(V.head, S), I(d, p, x), O && O.m(d, x), I(d, g, x), xe(s, d, x), I(d, i, x), I(d, r, x), C(r, l), C(l, X), C(l, T), C(l, w), C(w, D);
            for (let k = 0; k < L.length; k += 1) L[k] && L[k].m(D, null);
            C(w, z), B.m(w, null), C(r, Q), C(r, F), xe(N, F, null), C(r, ie), C(r, W), C(r, b), C(r, A), C(A, se), C(A, Re), C(A, ve), C(A, Oe), C(A, fe), C(fe, G), C(G, oe), C(G, Ae), C(G, ae), xe(le, ae, null), C(G, Le), C(G, K), C(K, ue);
            for (let k = 0; k < P.length; k += 1) P[k] && P[k].m(ue, null);
            C(K, Pe), ee.m(K, null), C(A, je), q && q.m(A, null), $ = !0, He || (We = [ge(X, "click", c[6]), ge(ae, "click", c[5])], He = !0)
        },
        p(d, [x]) {
            if ((!$ || x & 1) && h(n, "content", d[0]), (!$ || x & 1 && f !== (f = d[0] + "/getlinked-banner.png")) && h(m, "content", f), (!$ || x & 1) && h(o, "content", d[0]), d[2] ? O ? x & 4 && re(O, 1) : (O = at(), O.c(), re(O, 1), O.m(g.parentNode, g)) : O && (Tt(), ce(O, 1, 1, () => {
                    O = null
                }), _t()), x & 80) {
                de = Ye(d[4]);
                let k;
                for (k = 0; k < de.length; k += 1) {
                    const J = ot(d, de, k);
                    L[k] ? L[k].p(J, x) : (L[k] = lt(J), L[k].c(), L[k].m(D, null))
                }
                for (; k < L.length; k += 1) L[k].d(1);
                L.length = de.length
            }
            if (_e === (_e = Ve(d)) && B ? B.p(d, x) : (B.d(1), B = _e(d), B && (B.c(), B.m(w, null))), x & 26) {
                me = Ye(d[4]);
                let k;
                for (k = 0; k < me.length; k += 1) {
                    const J = st(d, me, k);
                    P[k] ? P[k].p(J, x) : (P[k] = ut(J), P[k].c(), P[k].m(ue, null))
                }
                for (; k < P.length; k += 1) P[k].d(1);
                P.length = me.length
            }
            Te !== (Te = Be(d)) && (ee.d(1), ee = Te(d), ee && (ee.c(), ee.m(K, null))), q && q.p && (!$ || x & 128) && dt(q, Ie, d, d[7], $ ? pt(Ie, d[7], x, null) : mt(d[7]), null)
        },
        i(d) {
            $ || (re(O), re(s.$$.fragment, d), re(N.$$.fragment, d), re(le.$$.fragment, d), re(q, d), $ = !0)
        },
        o(d) {
            ce(O), ce(s.$$.fragment, d), ce(N.$$.fragment, d), ce(le.$$.fragment, d), ce(q, d), $ = !1
        },
        d(d) {
            d && (_(p), _(g), _(i), _(r)), _(e), _(t), _(n), _(u), _(a), _(m), _(v), _(o), _(y), _(S), O && O.d(d), De(s, d), tt(L, d), B.d(), De(N), De(le), tt(P, d), ee.d(), q && q.d(d), He = !1, vt(We)
        }
    }
}

function Ft(c, e, t) {
    let n;
    gt(c, Ct, i => t(3, n = i));
    let {
        $$slots: u = {},
        $$scope: a
    } = e, m = "";
    const f = [{
            title: "timeline",
            href: "/#timeline"
        }, {
            title: "overview",
            href: "/#overview"
        }, {
            title: "FAQs",
            href: "/#faqs"
        }, {
            title: "contact",
            href: "/contact-us"
        }],
        v = f.filter(i => i.href.indexOf("#") !== -1).map(i => `#${i.title.toLowerCase()}`);
    let o, y = !0;
    Ot(i => {
        if (kt.killAll(), t(2, y = !1), setTimeout(() => {
                t(2, y = !0)
            }, 100), !!document.startViewTransition) return new Promise(r => {
            document.startViewTransition(async () => {
                r(), await i.complete, n.route.id !== "/" && t(1, o = void 0)
            })
        })
    });
    const S = ze.timeline({
            paused: !0
        }),
        p = ze.timeline({
            paused: !0
        });

    function g() {
        S.progress() < 1 ? S.play() : S.restart()
    }

    function s() {
        p.progress() < 1 ? p.play() : p.restart()
    }
    return bt(() => {
        t(0, m = window.location.origin), ze.set(".menu_close_btn", {
            y: "-120px",
            rotate: "-360"
        }), S.set(".menu_close_btn", {
            y: "-120px",
            rotate: "-360"
        }).set(".menu", {
            y: 0
        }).to(".menu", {
            clipPath: "circle(150% at 100% 0)"
        }).fromTo(".menu nav a", {
            y: "50px",
            x: 0,
            opacity: 0
        }, {
            y: "0px",
            opacity: 1,
            stagger: {
                amount: .5
            }
        }).to(".menu_close_btn", {
            y: 0,
            rotate: 0,
            ease: "back"
        }), p.to(".menu a", {
            x: "-150px",
            opacity: 0,
            stagger: {
                amount: .5
            }
        }).to(".menu", {
            clipPath: "circle(0% at 100% 0)"
        }).set(".menu", {
            y: "100%"
        }).to(".menu a", {
            x: 0
        });
        let i = document.querySelector(".header-top"),
            r = document.querySelector("header"),
            l = "sticky top-0 !py-2 backdrop-blur-[2px] bg-dark/60 header-sticky".split(" ");
        var X = new IntersectionObserver(w => {
            w[0].intersectionRatio === 0 ? r.classList.add(...l) : w[0].intersectionRatio == 1 && r.classList.remove(...l)
        }, {
            threshold: [0, 1]
        });
        X.observe(i);
        let E = 0;
        const T = () => {
            if (window.scrollY < E ? r.classList.remove("!py-2") : r && r.classList.add("!py-2"), n.route.id == "/") {
                E = window.scrollY;
                for (let w = v.length - 1; w >= 0; w--) {
                    const D = document.querySelector(v[w]);
                    if (E < D.offsetTop || E > D.offsetTop + D.scrollHeight) {
                        o == v[w] && t(1, o = void 0);
                        continue
                    }
                    t(1, o = v[w])
                }
            }
        };
        window.addEventListener("scroll", T), T()
    }), c.$$set = i => {
        "$$scope" in i && t(7, a = i.$$scope)
    }, [m, o, y, n, f, g, s, a, u]
}
class Gt extends ye {
    constructor(e) {
        super(), we(this, e, Ft, qt, be, {})
    }
}
export {
    Gt as component
};