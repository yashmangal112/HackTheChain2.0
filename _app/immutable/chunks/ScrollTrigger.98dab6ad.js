var Ou = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};

function Mu(c) {
    return c && c.__esModule && Object.prototype.hasOwnProperty.call(c, "default") ? c.default : c
}

function Rr(c) {
    if (c === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return c
}

function da(c, e) {
    c.prototype = Object.create(e.prototype), c.prototype.constructor = c, c.__proto__ = e
}
/*!
 * GSAP 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
var Wt = {
        autoSleep: 120,
        force3D: "auto",
        nullTargetWarn: 1,
        units: {
            lineHeight: ""
        }
    },
    Xi = {
        duration: .5,
        overwrite: !1,
        delay: 0
    },
    Zs, _t, Ae, er = 1e8,
    ye = 1 / er,
    zs = Math.PI * 2,
    Du = zs / 4,
    Eu = 0,
    pa = Math.sqrt,
    Ru = Math.cos,
    Au = Math.sin,
    et = function(e) {
        return typeof e == "string"
    },
    Fe = function(e) {
        return typeof e == "function"
    },
    Fr = function(e) {
        return typeof e == "number"
    },
    js = function(e) {
        return typeof e > "u"
    },
    Tr = function(e) {
        return typeof e == "object"
    },
    Et = function(e) {
        return e !== !1
    },
    Js = function() {
        return typeof window < "u"
    },
    Wn = function(e) {
        return Fe(e) || et(e)
    },
    ga = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {},
    dt = Array.isArray,
    Ls = /(?:-?\.?\d|\.)+/gi,
    ma = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
    Li = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
    ks = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
    ya = /[+-]=-?[.\d]+/,
    va = /[^,'"\[\]\s]+/gi,
    Fu = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
    Me, Jt, Is, eo, Gt = {},
    $n = {},
    xa, ba = function(e) {
        return ($n = wi(e, Gt)) && Ft
    },
    to = function(e, t) {
        return console.warn("Invalid property", e, "set to", t, "Missing plugin? gsap.registerPlugin()")
    },
    Kn = function(e, t) {
        return !t && console.warn(e)
    },
    wa = function(e, t) {
        return e && (Gt[e] = t) && $n && ($n[e] = t) || Gt
    },
    _n = function() {
        return 0
    },
    zu = {
        suppressEvents: !0,
        isStart: !0,
        kill: !1
    },
    Gn = {
        suppressEvents: !0,
        kill: !1
    },
    Lu = {
        suppressEvents: !0
    },
    ro = {},
    Gr = [],
    Bs = {},
    Ta, Vt = {},
    Ps = {},
    jo = 30,
    Hn = [],
    io = "",
    no = function(e) {
        var t = e[0],
            r, i;
        if (Tr(t) || Fe(t) || (e = [e]), !(r = (t._gsap || {}).harness)) {
            for (i = Hn.length; i-- && !Hn[i].targetTest(t););
            r = Hn[i]
        }
        for (i = e.length; i--;) e[i] && (e[i]._gsap || (e[i]._gsap = new qa(e[i], r))) || e.splice(i, 1);
        return e
    },
    yi = function(e) {
        return e._gsap || no(tr(e))[0]._gsap
    },
    Sa = function(e, t, r) {
        return (r = e[t]) && Fe(r) ? e[t]() : js(r) && e.getAttribute && e.getAttribute(t) || r
    },
    Rt = function(e, t) {
        return (e = e.split(",")).forEach(t) || e
    },
    Be = function(e) {
        return Math.round(e * 1e5) / 1e5 || 0
    },
    at = function(e) {
        return Math.round(e * 1e7) / 1e7 || 0
    },
    Bi = function(e, t) {
        var r = t.charAt(0),
            i = parseFloat(t.substr(2));
        return e = parseFloat(e), r === "+" ? e + i : r === "-" ? e - i : r === "*" ? e * i : e / i
    },
    Iu = function(e, t) {
        for (var r = t.length, i = 0; e.indexOf(t[i]) < 0 && ++i < r;);
        return i < r
    },
    Qn = function() {
        var e = Gr.length,
            t = Gr.slice(0),
            r, i;
        for (Bs = {}, Gr.length = 0, r = 0; r < e; r++) i = t[r], i && i._lazy && (i.render(i._lazy[0], i._lazy[1], !0)._lazy = 0)
    },
    Ca = function(e, t, r, i) {
        Gr.length && !_t && Qn(), e.render(t, r, i || _t && t < 0 && (e._initted || e._startAt)), Gr.length && !_t && Qn()
    },
    ka = function(e) {
        var t = parseFloat(e);
        return (t || t === 0) && (e + "").match(va).length < 2 ? t : et(e) ? e.trim() : e
    },
    Pa = function(e) {
        return e
    },
    ir = function(e, t) {
        for (var r in t) r in e || (e[r] = t[r]);
        return e
    },
    Bu = function(e) {
        return function(t, r) {
            for (var i in r) i in t || i === "duration" && e || i === "ease" || (t[i] = r[i])
        }
    },
    wi = function(e, t) {
        for (var r in t) e[r] = t[r];
        return e
    },
    Jo = function c(e, t) {
        for (var r in t) r !== "__proto__" && r !== "constructor" && r !== "prototype" && (e[r] = Tr(t[r]) ? c(e[r] || (e[r] = {}), t[r]) : t[r]);
        return e
    },
    Zn = function(e, t) {
        var r = {},
            i;
        for (i in e) i in t || (r[i] = e[i]);
        return r
    },
    fn = function(e) {
        var t = e.parent || Me,
            r = e.keyframes ? Bu(dt(e.keyframes)) : ir;
        if (Et(e.inherit))
            for (; t;) r(e, t.vars.defaults), t = t.parent || t._dp;
        return e
    },
    Nu = function(e, t) {
        for (var r = e.length, i = r === t.length; i && r-- && e[r] === t[r];);
        return r < 0
    },
    Oa = function(e, t, r, i, n) {
        r === void 0 && (r = "_first"), i === void 0 && (i = "_last");
        var s = e[i],
            o;
        if (n)
            for (o = t[n]; s && s[n] > o;) s = s._prev;
        return s ? (t._next = s._next, s._next = t) : (t._next = e[r], e[r] = t), t._next ? t._next._prev = t : e[i] = t, t._prev = s, t.parent = t._dp = e, t
    },
    rs = function(e, t, r, i) {
        r === void 0 && (r = "_first"), i === void 0 && (i = "_last");
        var n = t._prev,
            s = t._next;
        n ? n._next = s : e[r] === t && (e[r] = s), s ? s._prev = n : e[i] === t && (e[i] = n), t._next = t._prev = t.parent = null
    },
    qr = function(e, t) {
        e.parent && (!t || e.parent.autoRemoveChildren) && e.parent.remove && e.parent.remove(e), e._act = 0
    },
    vi = function(e, t) {
        if (e && (!t || t._end > e._dur || t._start < 0))
            for (var r = e; r;) r._dirty = 1, r = r.parent;
        return e
    },
    Yu = function(e) {
        for (var t = e.parent; t && t.parent;) t._dirty = 1, t.totalDuration(), t = t.parent;
        return e
    },
    Ns = function(e, t, r, i) {
        return e._startAt && (_t ? e._startAt.revert(Gn) : e.vars.immediateRender && !e.vars.autoRevert || e._startAt.render(t, !0, i))
    },
    Xu = function c(e) {
        return !e || e._ts && c(e.parent)
    },
    ea = function(e) {
        return e._repeat ? Vi(e._tTime, e = e.duration() + e._rDelay) * e : 0
    },
    Vi = function(e, t) {
        var r = Math.floor(e /= t);
        return e && r === e ? r - 1 : r
    },
    jn = function(e, t) {
        return (e - t._start) * t._ts + (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur)
    },
    is = function(e) {
        return e._end = at(e._start + (e._tDur / Math.abs(e._ts || e._rts || ye) || 0))
    },
    ns = function(e, t) {
        var r = e._dp;
        return r && r.smoothChildTiming && e._ts && (e._start = at(r._time - (e._ts > 0 ? t / e._ts : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts)), is(e), r._dirty || vi(r, e)), e
    },
    Ma = function(e, t) {
        var r;
        if ((t._time || !t._dur && t._initted || t._start < e._time && (t._dur || !t.add)) && (r = jn(e.rawTime(), t), (!t._dur || xn(0, t.totalDuration(), r) - t._tTime > ye) && t.render(r, !0)), vi(e, t)._dp && e._initted && e._time >= e._dur && e._ts) {
            if (e._dur < e.duration())
                for (r = e; r._dp;) r.rawTime() >= 0 && r.totalTime(r._tTime), r = r._dp;
            e._zTime = -ye
        }
    },
    xr = function(e, t, r, i) {
        return t.parent && qr(t), t._start = at((Fr(r) ? r : r || e !== Me ? jt(e, r, t) : e._time) + t._delay), t._end = at(t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)), Oa(e, t, "_first", "_last", e._sort ? "_start" : 0), Ys(t) || (e._recent = t), i || Ma(e, t), e._ts < 0 && ns(e, e._tTime), e
    },
    Da = function(e, t) {
        return (Gt.ScrollTrigger || to("scrollTrigger", t)) && Gt.ScrollTrigger.create(t, e)
    },
    Ea = function(e, t, r, i, n) {
        if (oo(e, t, n), !e._initted) return 1;
        if (!r && e._pt && !_t && (e._dur && e.vars.lazy !== !1 || !e._dur && e.vars.lazy) && Ta !== Ut.frame) return Gr.push(e), e._lazy = [n, i], 1
    },
    Vu = function c(e) {
        var t = e.parent;
        return t && t._ts && t._initted && !t._lock && (t.rawTime() < 0 || c(t))
    },
    Ys = function(e) {
        var t = e.data;
        return t === "isFromStart" || t === "isStart"
    },
    Uu = function(e, t, r, i) {
        var n = e.ratio,
            s = t < 0 || !t && (!e._start && Vu(e) && !(!e._initted && Ys(e)) || (e._ts < 0 || e._dp._ts < 0) && !Ys(e)) ? 0 : 1,
            o = e._rDelay,
            u = 0,
            l, _, y;
        if (o && e._repeat && (u = xn(0, e._tDur, t), _ = Vi(u, o), e._yoyo && _ & 1 && (s = 1 - s), _ !== Vi(e._tTime, o) && (n = 1 - s, e.vars.repeatRefresh && e._initted && e.invalidate())), s !== n || _t || i || e._zTime === ye || !t && e._zTime) {
            if (!e._initted && Ea(e, t, i, r, u)) return;
            for (y = e._zTime, e._zTime = t || (r ? ye : 0), r || (r = t && !y), e.ratio = s, e._from && (s = 1 - s), e._time = 0, e._tTime = u, l = e._pt; l;) l.r(s, l.d), l = l._next;
            t < 0 && Ns(e, t, r, !0), e._onUpdate && !r && rr(e, "onUpdate"), u && e._repeat && !r && e.parent && rr(e, "onRepeat"), (t >= e._tDur || t < 0) && e.ratio === s && (s && qr(e, 1), !r && !_t && (rr(e, s ? "onComplete" : "onReverseComplete", !0), e._prom && e._prom()))
        } else e._zTime || (e._zTime = t)
    },
    Wu = function(e, t, r) {
        var i;
        if (r > t)
            for (i = e._first; i && i._start <= r;) {
                if (i.data === "isPause" && i._start > t) return i;
                i = i._next
            } else
                for (i = e._last; i && i._start >= r;) {
                    if (i.data === "isPause" && i._start < t) return i;
                    i = i._prev
                }
    },
    Ui = function(e, t, r, i) {
        var n = e._repeat,
            s = at(t) || 0,
            o = e._tTime / e._tDur;
        return o && !i && (e._time *= s / e._dur), e._dur = s, e._tDur = n ? n < 0 ? 1e10 : at(s * (n + 1) + e._rDelay * n) : s, o > 0 && !i && ns(e, e._tTime = e._tDur * o), e.parent && is(e), r || vi(e.parent, e), e
    },
    ta = function(e) {
        return e instanceof Dt ? vi(e) : Ui(e, e._dur)
    },
    Gu = {
        _start: 0,
        endTime: _n,
        totalDuration: _n
    },
    jt = function c(e, t, r) {
        var i = e.labels,
            n = e._recent || Gu,
            s = e.duration() >= er ? n.endTime(!1) : e._dur,
            o, u, l;
        return et(t) && (isNaN(t) || t in i) ? (u = t.charAt(0), l = t.substr(-1) === "%", o = t.indexOf("="), u === "<" || u === ">" ? (o >= 0 && (t = t.replace(/=/, "")), (u === "<" ? n._start : n.endTime(n._repeat >= 0)) + (parseFloat(t.substr(1)) || 0) * (l ? (o < 0 ? n : r).totalDuration() / 100 : 1)) : o < 0 ? (t in i || (i[t] = s), i[t]) : (u = parseFloat(t.charAt(o - 1) + t.substr(o + 1)), l && r && (u = u / 100 * (dt(r) ? r[0] : r).totalDuration()), o > 1 ? c(e, t.substr(0, o - 1), r) + u : s + u)) : t == null ? s : +t
    },
    cn = function(e, t, r) {
        var i = Fr(t[1]),
            n = (i ? 2 : 1) + (e < 2 ? 0 : 1),
            s = t[n],
            o, u;
        if (i && (s.duration = t[1]), s.parent = r, e) {
            for (o = s, u = r; u && !("immediateRender" in o);) o = u.vars.defaults || {}, u = Et(u.vars.inherit) && u.parent;
            s.immediateRender = Et(o.immediateRender), e < 2 ? s.runBackwards = 1 : s.startAt = t[n - 1]
        }
        return new He(t[0], s, t[n + 1])
    },
    Kr = function(e, t) {
        return e || e === 0 ? t(e) : t
    },
    xn = function(e, t, r) {
        return r < e ? e : r > t ? t : r
    },
    ht = function(e, t) {
        return !et(e) || !(t = Fu.exec(e)) ? "" : t[1]
    },
    Hu = function(e, t, r) {
        return Kr(r, function(i) {
            return xn(e, t, i)
        })
    },
    Xs = [].slice,
    Ra = function(e, t) {
        return e && Tr(e) && "length" in e && (!t && !e.length || e.length - 1 in e && Tr(e[0])) && !e.nodeType && e !== Jt
    },
    qu = function(e, t, r) {
        return r === void 0 && (r = []), e.forEach(function(i) {
            var n;
            return et(i) && !t || Ra(i, 1) ? (n = r).push.apply(n, tr(i)) : r.push(i)
        }) || r
    },
    tr = function(e, t, r) {
        return Ae && !t && Ae.selector ? Ae.selector(e) : et(e) && !r && (Is || !Wi()) ? Xs.call((t || eo).querySelectorAll(e), 0) : dt(e) ? qu(e, r) : Ra(e) ? Xs.call(e, 0) : e ? [e] : []
    },
    Vs = function(e) {
        return e = tr(e)[0] || Kn("Invalid scope") || {},
            function(t) {
                var r = e.current || e.nativeElement || e;
                return tr(t, r.querySelectorAll ? r : r === e ? Kn("Invalid scope") || eo.createElement("div") : e)
            }
    },
    Aa = function(e) {
        return e.sort(function() {
            return .5 - Math.random()
        })
    },
    Fa = function(e) {
        if (Fe(e)) return e;
        var t = Tr(e) ? e : {
                each: e
            },
            r = xi(t.ease),
            i = t.from || 0,
            n = parseFloat(t.base) || 0,
            s = {},
            o = i > 0 && i < 1,
            u = isNaN(i) || o,
            l = t.axis,
            _ = i,
            y = i;
        return et(i) ? _ = y = {
                center: .5,
                edges: .5,
                end: 1
            }[i] || 0 : !o && u && (_ = i[0], y = i[1]),
            function(m, b, P) {
                var p = (P || t).length,
                    C = s[p],
                    M, D, R, E, k, z, L, F, A;
                if (!C) {
                    if (A = t.grid === "auto" ? 0 : (t.grid || [1, er])[1], !A) {
                        for (L = -er; L < (L = P[A++].getBoundingClientRect().left) && A < p;);
                        A--
                    }
                    for (C = s[p] = [], M = u ? Math.min(A, p) * _ - .5 : i % A, D = A === er ? 0 : u ? p * y / A - .5 : i / A | 0, L = 0, F = er, z = 0; z < p; z++) R = z % A - M, E = D - (z / A | 0), C[z] = k = l ? Math.abs(l === "y" ? E : R) : pa(R * R + E * E), k > L && (L = k), k < F && (F = k);
                    i === "random" && Aa(C), C.max = L - F, C.min = F, C.v = p = (parseFloat(t.amount) || parseFloat(t.each) * (A > p ? p - 1 : l ? l === "y" ? p / A : A : Math.max(A, p / A)) || 0) * (i === "edges" ? -1 : 1), C.b = p < 0 ? n - p : n, C.u = ht(t.amount || t.each) || 0, r = r && p < 0 ? Wa(r) : r
                }
                return p = (C[m] - C.min) / C.max || 0, at(C.b + (r ? r(p) : p) * C.v) + C.u
            }
    },
    Us = function(e) {
        var t = Math.pow(10, ((e + "").split(".")[1] || "").length);
        return function(r) {
            var i = at(Math.round(parseFloat(r) / e) * e * t);
            return (i - i % 1) / t + (Fr(r) ? 0 : ht(r))
        }
    },
    za = function(e, t) {
        var r = dt(e),
            i, n;
        return !r && Tr(e) && (i = r = e.radius || er, e.values ? (e = tr(e.values), (n = !Fr(e[0])) && (i *= i)) : e = Us(e.increment)), Kr(t, r ? Fe(e) ? function(s) {
            return n = e(s), Math.abs(n - s) <= i ? n : s
        } : function(s) {
            for (var o = parseFloat(n ? s.x : s), u = parseFloat(n ? s.y : 0), l = er, _ = 0, y = e.length, m, b; y--;) n ? (m = e[y].x - o, b = e[y].y - u, m = m * m + b * b) : m = Math.abs(e[y] - o), m < l && (l = m, _ = y);
            return _ = !i || l <= i ? e[_] : s, n || _ === s || Fr(s) ? _ : _ + ht(s)
        } : Us(e))
    },
    La = function(e, t, r, i) {
        return Kr(dt(e) ? !t : r === !0 ? !!(r = 0) : !i, function() {
            return dt(e) ? e[~~(Math.random() * e.length)] : (r = r || 1e-5) && (i = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) && Math.floor(Math.round((e - r / 2 + Math.random() * (t - e + r * .99)) / r) * r * i) / i
        })
    },
    $u = function() {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
        return function(i) {
            return t.reduce(function(n, s) {
                return s(n)
            }, i)
        }
    },
    Ku = function(e, t) {
        return function(r) {
            return e(parseFloat(r)) + (t || ht(r))
        }
    },
    Qu = function(e, t, r) {
        return Ba(e, t, 0, 1, r)
    },
    Ia = function(e, t, r) {
        return Kr(r, function(i) {
            return e[~~t(i)]
        })
    },
    Zu = function c(e, t, r) {
        var i = t - e;
        return dt(e) ? Ia(e, c(0, e.length), t) : Kr(r, function(n) {
            return (i + (n - e) % i) % i + e
        })
    },
    ju = function c(e, t, r) {
        var i = t - e,
            n = i * 2;
        return dt(e) ? Ia(e, c(0, e.length - 1), t) : Kr(r, function(s) {
            return s = (n + (s - e) % n) % n || 0, e + (s > i ? n - s : s)
        })
    },
    dn = function(e) {
        for (var t = 0, r = "", i, n, s, o; ~(i = e.indexOf("random(", t));) s = e.indexOf(")", i), o = e.charAt(i + 7) === "[", n = e.substr(i + 7, s - i - 7).match(o ? va : Ls), r += e.substr(t, i - t) + La(o ? n : +n[0], o ? 0 : +n[1], +n[2] || 1e-5), t = s + 1;
        return r + e.substr(t, e.length - t)
    },
    Ba = function(e, t, r, i, n) {
        var s = t - e,
            o = i - r;
        return Kr(n, function(u) {
            return r + ((u - e) / s * o || 0)
        })
    },
    Ju = function c(e, t, r, i) {
        var n = isNaN(e + t) ? 0 : function(b) {
            return (1 - b) * e + b * t
        };
        if (!n) {
            var s = et(e),
                o = {},
                u, l, _, y, m;
            if (r === !0 && (i = 1) && (r = null), s) e = {
                p: e
            }, t = {
                p: t
            };
            else if (dt(e) && !dt(t)) {
                for (_ = [], y = e.length, m = y - 2, l = 1; l < y; l++) _.push(c(e[l - 1], e[l]));
                y--, n = function(P) {
                    P *= y;
                    var p = Math.min(m, ~~P);
                    return _[p](P - p)
                }, r = t
            } else i || (e = wi(dt(e) ? [] : {}, e));
            if (!_) {
                for (u in t) so.call(o, e, u, "get", t[u]);
                n = function(P) {
                    return lo(P, o) || (s ? e.p : e)
                }
            }
        }
        return Kr(r, n)
    },
    ra = function(e, t, r) {
        var i = e.labels,
            n = er,
            s, o, u;
        for (s in i) o = i[s] - t, o < 0 == !!r && o && n > (o = Math.abs(o)) && (u = s, n = o);
        return u
    },
    rr = function(e, t, r) {
        var i = e.vars,
            n = i[t],
            s = Ae,
            o = e._ctx,
            u, l, _;
        if (n) return u = i[t + "Params"], l = i.callbackScope || e, r && Gr.length && Qn(), o && (Ae = o), _ = u ? n.apply(l, u) : n.call(l), Ae = s, _
    },
    un = function(e) {
        return qr(e), e.scrollTrigger && e.scrollTrigger.kill(!!_t), e.progress() < 1 && rr(e, "onInterrupt"), e
    },
    Ii, Na = [],
    Ya = function(e) {
        if (Js() && e) {
            e = !e.name && e.default || e;
            var t = e.name,
                r = Fe(e),
                i = t && !r && e.init ? function() {
                    this._props = []
                } : e,
                n = {
                    init: _n,
                    render: lo,
                    add: so,
                    kill: pl,
                    modifier: dl,
                    rawVars: 0
                },
                s = {
                    targetTest: 0,
                    get: 0,
                    getSetter: uo,
                    aliases: {},
                    register: 0
                };
            if (Wi(), e !== i) {
                if (Vt[t]) return;
                ir(i, ir(Zn(e, n), s)), wi(i.prototype, wi(n, Zn(e, s))), Vt[i.prop = t] = i, e.targetTest && (Hn.push(i), ro[t] = 1), t = (t === "css" ? "CSS" : t.charAt(0).toUpperCase() + t.substr(1)) + "Plugin"
            }
            wa(t, i), e.register && e.register(Ft, i, At)
        } else e && Na.push(e)
    },
    me = 255,
    ln = {
        aqua: [0, me, me],
        lime: [0, me, 0],
        silver: [192, 192, 192],
        black: [0, 0, 0],
        maroon: [128, 0, 0],
        teal: [0, 128, 128],
        blue: [0, 0, me],
        navy: [0, 0, 128],
        white: [me, me, me],
        olive: [128, 128, 0],
        yellow: [me, me, 0],
        orange: [me, 165, 0],
        gray: [128, 128, 128],
        purple: [128, 0, 128],
        green: [0, 128, 0],
        red: [me, 0, 0],
        pink: [me, 192, 203],
        cyan: [0, me, me],
        transparent: [me, me, me, 0]
    },
    Os = function(e, t, r) {
        return e += e < 0 ? 1 : e > 1 ? -1 : 0, (e * 6 < 1 ? t + (r - t) * e * 6 : e < .5 ? r : e * 3 < 2 ? t + (r - t) * (2 / 3 - e) * 6 : t) * me + .5 | 0
    },
    Xa = function(e, t, r) {
        var i = e ? Fr(e) ? [e >> 16, e >> 8 & me, e & me] : 0 : ln.black,
            n, s, o, u, l, _, y, m, b, P;
        if (!i) {
            if (e.substr(-1) === "," && (e = e.substr(0, e.length - 1)), ln[e]) i = ln[e];
            else if (e.charAt(0) === "#") {
                if (e.length < 6 && (n = e.charAt(1), s = e.charAt(2), o = e.charAt(3), e = "#" + n + n + s + s + o + o + (e.length === 5 ? e.charAt(4) + e.charAt(4) : "")), e.length === 9) return i = parseInt(e.substr(1, 6), 16), [i >> 16, i >> 8 & me, i & me, parseInt(e.substr(7), 16) / 255];
                e = parseInt(e.substr(1), 16), i = [e >> 16, e >> 8 & me, e & me]
            } else if (e.substr(0, 3) === "hsl") {
                if (i = P = e.match(Ls), !t) u = +i[0] % 360 / 360, l = +i[1] / 100, _ = +i[2] / 100, s = _ <= .5 ? _ * (l + 1) : _ + l - _ * l, n = _ * 2 - s, i.length > 3 && (i[3] *= 1), i[0] = Os(u + 1 / 3, n, s), i[1] = Os(u, n, s), i[2] = Os(u - 1 / 3, n, s);
                else if (~e.indexOf("=")) return i = e.match(ma), r && i.length < 4 && (i[3] = 1), i
            } else i = e.match(Ls) || ln.transparent;
            i = i.map(Number)
        }
        return t && !P && (n = i[0] / me, s = i[1] / me, o = i[2] / me, y = Math.max(n, s, o), m = Math.min(n, s, o), _ = (y + m) / 2, y === m ? u = l = 0 : (b = y - m, l = _ > .5 ? b / (2 - y - m) : b / (y + m), u = y === n ? (s - o) / b + (s < o ? 6 : 0) : y === s ? (o - n) / b + 2 : (n - s) / b + 4, u *= 60), i[0] = ~~(u + .5), i[1] = ~~(l * 100 + .5), i[2] = ~~(_ * 100 + .5)), r && i.length < 4 && (i[3] = 1), i
    },
    Va = function(e) {
        var t = [],
            r = [],
            i = -1;
        return e.split(Hr).forEach(function(n) {
            var s = n.match(Li) || [];
            t.push.apply(t, s), r.push(i += s.length + 1)
        }), t.c = r, t
    },
    ia = function(e, t, r) {
        var i = "",
            n = (e + i).match(Hr),
            s = t ? "hsla(" : "rgba(",
            o = 0,
            u, l, _, y;
        if (!n) return e;
        if (n = n.map(function(m) {
                return (m = Xa(m, t, 1)) && s + (t ? m[0] + "," + m[1] + "%," + m[2] + "%," + m[3] : m.join(",")) + ")"
            }), r && (_ = Va(e), u = r.c, u.join(i) !== _.c.join(i)))
            for (l = e.replace(Hr, "1").split(Li), y = l.length - 1; o < y; o++) i += l[o] + (~u.indexOf(o) ? n.shift() || s + "0,0,0,0)" : (_.length ? _ : n.length ? n : r).shift());
        if (!l)
            for (l = e.split(Hr), y = l.length - 1; o < y; o++) i += l[o] + n[o];
        return i + l[y]
    },
    Hr = function() {
        var c = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
            e;
        for (e in ln) c += "|" + e + "\\b";
        return new RegExp(c + ")", "gi")
    }(),
    el = /hsl[a]?\(/,
    Ua = function(e) {
        var t = e.join(" "),
            r;
        if (Hr.lastIndex = 0, Hr.test(t)) return r = el.test(t), e[1] = ia(e[1], r), e[0] = ia(e[0], r, Va(e[1])), !0
    },
    pn, Ut = function() {
        var c = Date.now,
            e = 500,
            t = 33,
            r = c(),
            i = r,
            n = 1e3 / 240,
            s = n,
            o = [],
            u, l, _, y, m, b, P = function p(C) {
                var M = c() - i,
                    D = C === !0,
                    R, E, k, z;
                if (M > e && (r += M - t), i += M, k = i - r, R = k - s, (R > 0 || D) && (z = ++y.frame, m = k - y.time * 1e3, y.time = k = k / 1e3, s += R + (R >= n ? 4 : n - R), E = 1), D || (u = l(p)), E)
                    for (b = 0; b < o.length; b++) o[b](k, m, z, C)
            };
        return y = {
            time: 0,
            frame: 0,
            tick: function() {
                P(!0)
            },
            deltaRatio: function(C) {
                return m / (1e3 / (C || 60))
            },
            wake: function() {
                xa && (!Is && Js() && (Jt = Is = window, eo = Jt.document || {}, Gt.gsap = Ft, (Jt.gsapVersions || (Jt.gsapVersions = [])).push(Ft.version), ba($n || Jt.GreenSockGlobals || !Jt.gsap && Jt || {}), _ = Jt.requestAnimationFrame, Na.forEach(Ya)), u && y.sleep(), l = _ || function(C) {
                    return setTimeout(C, s - y.time * 1e3 + 1 | 0)
                }, pn = 1, P(2))
            },
            sleep: function() {
                (_ ? Jt.cancelAnimationFrame : clearTimeout)(u), pn = 0, l = _n
            },
            lagSmoothing: function(C, M) {
                e = C || 1 / 0, t = Math.min(M || 33, e)
            },
            fps: function(C) {
                n = 1e3 / (C || 240), s = y.time * 1e3 + n
            },
            add: function(C, M, D) {
                var R = M ? function(E, k, z, L) {
                    C(E, k, z, L), y.remove(R)
                } : C;
                return y.remove(C), o[D ? "unshift" : "push"](R), Wi(), R
            },
            remove: function(C, M) {
                ~(M = o.indexOf(C)) && o.splice(M, 1) && b >= M && b--
            },
            _listeners: o
        }, y
    }(),
    Wi = function() {
        return !pn && Ut.wake()
    },
    ne = {},
    tl = /^[\d.\-M][\d.\-,\s]/,
    rl = /["']/g,
    il = function(e) {
        for (var t = {}, r = e.substr(1, e.length - 3).split(":"), i = r[0], n = 1, s = r.length, o, u, l; n < s; n++) u = r[n], o = n !== s - 1 ? u.lastIndexOf(",") : u.length, l = u.substr(0, o), t[i] = isNaN(l) ? l.replace(rl, "").trim() : +l, i = u.substr(o + 1).trim();
        return t
    },
    nl = function(e) {
        var t = e.indexOf("(") + 1,
            r = e.indexOf(")"),
            i = e.indexOf("(", t);
        return e.substring(t, ~i && i < r ? e.indexOf(")", r + 1) : r)
    },
    sl = function(e) {
        var t = (e + "").split("("),
            r = ne[t[0]];
        return r && t.length > 1 && r.config ? r.config.apply(null, ~e.indexOf("{") ? [il(t[1])] : nl(e).split(",").map(ka)) : ne._CE && tl.test(e) ? ne._CE("", e) : r
    },
    Wa = function(e) {
        return function(t) {
            return 1 - e(1 - t)
        }
    },
    Ga = function c(e, t) {
        for (var r = e._first, i; r;) r instanceof Dt ? c(r, t) : r.vars.yoyoEase && (!r._yoyo || !r._repeat) && r._yoyo !== t && (r.timeline ? c(r.timeline, t) : (i = r._ease, r._ease = r._yEase, r._yEase = i, r._yoyo = t)), r = r._next
    },
    xi = function(e, t) {
        return e && (Fe(e) ? e : ne[e] || sl(e)) || t
    },
    Ti = function(e, t, r, i) {
        r === void 0 && (r = function(u) {
            return 1 - t(1 - u)
        }), i === void 0 && (i = function(u) {
            return u < .5 ? t(u * 2) / 2 : 1 - t((1 - u) * 2) / 2
        });
        var n = {
                easeIn: t,
                easeOut: r,
                easeInOut: i
            },
            s;
        return Rt(e, function(o) {
            ne[o] = Gt[o] = n, ne[s = o.toLowerCase()] = r;
            for (var u in n) ne[s + (u === "easeIn" ? ".in" : u === "easeOut" ? ".out" : ".inOut")] = ne[o + "." + u] = n[u]
        }), n
    },
    Ha = function(e) {
        return function(t) {
            return t < .5 ? (1 - e(1 - t * 2)) / 2 : .5 + e((t - .5) * 2) / 2
        }
    },
    Ms = function c(e, t, r) {
        var i = t >= 1 ? t : 1,
            n = (r || (e ? .3 : .45)) / (t < 1 ? t : 1),
            s = n / zs * (Math.asin(1 / i) || 0),
            o = function(_) {
                return _ === 1 ? 1 : i * Math.pow(2, -10 * _) * Au((_ - s) * n) + 1
            },
            u = e === "out" ? o : e === "in" ? function(l) {
                return 1 - o(1 - l)
            } : Ha(o);
        return n = zs / n, u.config = function(l, _) {
            return c(e, l, _)
        }, u
    },
    Ds = function c(e, t) {
        t === void 0 && (t = 1.70158);
        var r = function(s) {
                return s ? --s * s * ((t + 1) * s + t) + 1 : 0
            },
            i = e === "out" ? r : e === "in" ? function(n) {
                return 1 - r(1 - n)
            } : Ha(r);
        return i.config = function(n) {
            return c(e, n)
        }, i
    };
Rt("Linear,Quad,Cubic,Quart,Quint,Strong", function(c, e) {
    var t = e < 5 ? e + 1 : e;
    Ti(c + ",Power" + (t - 1), e ? function(r) {
        return Math.pow(r, t)
    } : function(r) {
        return r
    }, function(r) {
        return 1 - Math.pow(1 - r, t)
    }, function(r) {
        return r < .5 ? Math.pow(r * 2, t) / 2 : 1 - Math.pow((1 - r) * 2, t) / 2
    })
});
ne.Linear.easeNone = ne.none = ne.Linear.easeIn;
Ti("Elastic", Ms("in"), Ms("out"), Ms());
(function(c, e) {
    var t = 1 / e,
        r = 2 * t,
        i = 2.5 * t,
        n = function(o) {
            return o < t ? c * o * o : o < r ? c * Math.pow(o - 1.5 / e, 2) + .75 : o < i ? c * (o -= 2.25 / e) * o + .9375 : c * Math.pow(o - 2.625 / e, 2) + .984375
        };
    Ti("Bounce", function(s) {
        return 1 - n(1 - s)
    }, n)
})(7.5625, 2.75);
Ti("Expo", function(c) {
    return c ? Math.pow(2, 10 * (c - 1)) : 0
});
Ti("Circ", function(c) {
    return -(pa(1 - c * c) - 1)
});
Ti("Sine", function(c) {
    return c === 1 ? 1 : -Ru(c * Du) + 1
});
Ti("Back", Ds("in"), Ds("out"), Ds());
ne.SteppedEase = ne.steps = Gt.SteppedEase = {
    config: function(e, t) {
        e === void 0 && (e = 1);
        var r = 1 / e,
            i = e + (t ? 0 : 1),
            n = t ? 1 : 0,
            s = 1 - ye;
        return function(o) {
            return ((i * xn(0, s, o) | 0) + n) * r
        }
    }
};
Xi.ease = ne["quad.out"];
Rt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(c) {
    return io += c + "," + c + "Params,"
});
var qa = function(e, t) {
        this.id = Eu++, e._gsap = this, this.target = e, this.harness = t, this.get = t ? t.get : Sa, this.set = t ? t.getSetter : uo
    },
    gn = function() {
        function c(t) {
            this.vars = t, this._delay = +t.delay || 0, (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0, this._yoyo = !!t.yoyo || !!t.yoyoEase), this._ts = 1, Ui(this, +t.duration, 1, 1), this.data = t.data, Ae && (this._ctx = Ae, Ae.data.push(this)), pn || Ut.wake()
        }
        var e = c.prototype;
        return e.delay = function(r) {
            return r || r === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + r - this._delay), this._delay = r, this) : this._delay
        }, e.duration = function(r) {
            return arguments.length ? this.totalDuration(this._repeat > 0 ? r + (r + this._rDelay) * this._repeat : r) : this.totalDuration() && this._dur
        }, e.totalDuration = function(r) {
            return arguments.length ? (this._dirty = 0, Ui(this, this._repeat < 0 ? r : (r - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
        }, e.totalTime = function(r, i) {
            if (Wi(), !arguments.length) return this._tTime;
            var n = this._dp;
            if (n && n.smoothChildTiming && this._ts) {
                for (ns(this, r), !n._dp || n.parent || Ma(n, this); n && n.parent;) n.parent._time !== n._start + (n._ts >= 0 ? n._tTime / n._ts : (n.totalDuration() - n._tTime) / -n._ts) && n.totalTime(n._tTime, !0), n = n.parent;
                !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && r < this._tDur || this._ts < 0 && r > 0 || !this._tDur && !r) && xr(this._dp, this, this._start - this._delay)
            }
            return (this._tTime !== r || !this._dur && !i || this._initted && Math.abs(this._zTime) === ye || !r && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = r), Ca(this, r, i)), this
        }, e.time = function(r, i) {
            return arguments.length ? this.totalTime(Math.min(this.totalDuration(), r + ea(this)) % (this._dur + this._rDelay) || (r ? this._dur : 0), i) : this._time
        }, e.totalProgress = function(r, i) {
            return arguments.length ? this.totalTime(this.totalDuration() * r, i) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio
        }, e.progress = function(r, i) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - r : r) + ea(this), i) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio
        }, e.iteration = function(r, i) {
            var n = this.duration() + this._rDelay;
            return arguments.length ? this.totalTime(this._time + (r - 1) * n, i) : this._repeat ? Vi(this._tTime, n) + 1 : 1
        }, e.timeScale = function(r) {
            if (!arguments.length) return this._rts === -ye ? 0 : this._rts;
            if (this._rts === r) return this;
            var i = this.parent && this._ts ? jn(this.parent._time, this) : this._tTime;
            return this._rts = +r || 0, this._ts = this._ps || r === -ye ? 0 : this._rts, this.totalTime(xn(-Math.abs(this._delay), this._tDur, i), !0), is(this), Yu(this)
        }, e.paused = function(r) {
            return arguments.length ? (this._ps !== r && (this._ps = r, r ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (Wi(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== ye && (this._tTime -= ye)))), this) : this._ps
        }, e.startTime = function(r) {
            if (arguments.length) {
                this._start = r;
                var i = this.parent || this._dp;
                return i && (i._sort || !this.parent) && xr(i, this, r - this._delay), this
            }
            return this._start
        }, e.endTime = function(r) {
            return this._start + (Et(r) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
        }, e.rawTime = function(r) {
            var i = this.parent || this._dp;
            return i ? r && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? jn(i.rawTime(r), this) : this._tTime : this._tTime
        }, e.revert = function(r) {
            r === void 0 && (r = Lu);
            var i = _t;
            return _t = r, (this._initted || this._startAt) && (this.timeline && this.timeline.revert(r), this.totalTime(-.01, r.suppressEvents)), this.data !== "nested" && r.kill !== !1 && this.kill(), _t = i, this
        }, e.globalTime = function(r) {
            for (var i = this, n = arguments.length ? r : i.rawTime(); i;) n = i._start + n / (i._ts || 1), i = i._dp;
            return !this.parent && this._sat ? this._sat.vars.immediateRender ? -1 / 0 : this._sat.globalTime(r) : n
        }, e.repeat = function(r) {
            return arguments.length ? (this._repeat = r === 1 / 0 ? -2 : r, ta(this)) : this._repeat === -2 ? 1 / 0 : this._repeat
        }, e.repeatDelay = function(r) {
            if (arguments.length) {
                var i = this._time;
                return this._rDelay = r, ta(this), i ? this.time(i) : this
            }
            return this._rDelay
        }, e.yoyo = function(r) {
            return arguments.length ? (this._yoyo = r, this) : this._yoyo
        }, e.seek = function(r, i) {
            return this.totalTime(jt(this, r), Et(i))
        }, e.restart = function(r, i) {
            return this.play().totalTime(r ? -this._delay : 0, Et(i))
        }, e.play = function(r, i) {
            return r != null && this.seek(r, i), this.reversed(!1).paused(!1)
        }, e.reverse = function(r, i) {
            return r != null && this.seek(r || this.totalDuration(), i), this.reversed(!0).paused(!1)
        }, e.pause = function(r, i) {
            return r != null && this.seek(r, i), this.paused(!0)
        }, e.resume = function() {
            return this.paused(!1)
        }, e.reversed = function(r) {
            return arguments.length ? (!!r !== this.reversed() && this.timeScale(-this._rts || (r ? -ye : 0)), this) : this._rts < 0
        }, e.invalidate = function() {
            return this._initted = this._act = 0, this._zTime = -ye, this
        }, e.isActive = function() {
            var r = this.parent || this._dp,
                i = this._start,
                n;
            return !!(!r || this._ts && this._initted && r.isActive() && (n = r.rawTime(!0)) >= i && n < this.endTime(!0) - ye)
        }, e.eventCallback = function(r, i, n) {
            var s = this.vars;
            return arguments.length > 1 ? (i ? (s[r] = i, n && (s[r + "Params"] = n), r === "onUpdate" && (this._onUpdate = i)) : delete s[r], this) : s[r]
        }, e.then = function(r) {
            var i = this;
            return new Promise(function(n) {
                var s = Fe(r) ? r : Pa,
                    o = function() {
                        var l = i.then;
                        i.then = null, Fe(s) && (s = s(i)) && (s.then || s === i) && (i.then = l), n(s), i.then = l
                    };
                i._initted && i.totalProgress() === 1 && i._ts >= 0 || !i._tTime && i._ts < 0 ? o() : i._prom = o
            })
        }, e.kill = function() {
            un(this)
        }, c
    }();
ir(gn.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: !1,
    parent: null,
    _initted: !1,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -ye,
    _prom: 0,
    _ps: !1,
    _rts: 1
});
var Dt = function(c) {
    da(e, c);

    function e(r, i) {
        var n;
        return r === void 0 && (r = {}), n = c.call(this, r) || this, n.labels = {}, n.smoothChildTiming = !!r.smoothChildTiming, n.autoRemoveChildren = !!r.autoRemoveChildren, n._sort = Et(r.sortChildren), Me && xr(r.parent || Me, Rr(n), i), r.reversed && n.reverse(), r.paused && n.paused(!0), r.scrollTrigger && Da(Rr(n), r.scrollTrigger), n
    }
    var t = e.prototype;
    return t.to = function(i, n, s) {
        return cn(0, arguments, this), this
    }, t.from = function(i, n, s) {
        return cn(1, arguments, this), this
    }, t.fromTo = function(i, n, s, o) {
        return cn(2, arguments, this), this
    }, t.set = function(i, n, s) {
        return n.duration = 0, n.parent = this, fn(n).repeatDelay || (n.repeat = 0), n.immediateRender = !!n.immediateRender, new He(i, n, jt(this, s), 1), this
    }, t.call = function(i, n, s) {
        return xr(this, He.delayedCall(0, i, n), s)
    }, t.staggerTo = function(i, n, s, o, u, l, _) {
        return s.duration = n, s.stagger = s.stagger || o, s.onComplete = l, s.onCompleteParams = _, s.parent = this, new He(i, s, jt(this, u)), this
    }, t.staggerFrom = function(i, n, s, o, u, l, _) {
        return s.runBackwards = 1, fn(s).immediateRender = Et(s.immediateRender), this.staggerTo(i, n, s, o, u, l, _)
    }, t.staggerFromTo = function(i, n, s, o, u, l, _, y) {
        return o.startAt = s, fn(o).immediateRender = Et(o.immediateRender), this.staggerTo(i, n, o, u, l, _, y)
    }, t.render = function(i, n, s) {
        var o = this._time,
            u = this._dirty ? this.totalDuration() : this._tDur,
            l = this._dur,
            _ = i <= 0 ? 0 : at(i),
            y = this._zTime < 0 != i < 0 && (this._initted || !l),
            m, b, P, p, C, M, D, R, E, k, z, L;
        if (this !== Me && _ > u && i >= 0 && (_ = u), _ !== this._tTime || s || y) {
            if (o !== this._time && l && (_ += this._time - o, i += this._time - o), m = _, E = this._start, R = this._ts, M = !R, y && (l || (o = this._zTime), (i || !n) && (this._zTime = i)), this._repeat) {
                if (z = this._yoyo, C = l + this._rDelay, this._repeat < -1 && i < 0) return this.totalTime(C * 100 + i, n, s);
                if (m = at(_ % C), _ === u ? (p = this._repeat, m = l) : (p = ~~(_ / C), p && p === _ / C && (m = l, p--), m > l && (m = l)), k = Vi(this._tTime, C), !o && this._tTime && k !== p && this._tTime - k * C - this._dur <= 0 && (k = p), z && p & 1 && (m = l - m, L = 1), p !== k && !this._lock) {
                    var F = z && k & 1,
                        A = F === (z && p & 1);
                    if (p < k && (F = !F), o = F ? 0 : _ % l ? l : _, this._lock = 1, this.render(o || (L ? 0 : at(p * C)), n, !l)._lock = 0, this._tTime = _, !n && this.parent && rr(this, "onRepeat"), this.vars.repeatRefresh && !L && (this.invalidate()._lock = 1), o && o !== this._time || M !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this;
                    if (l = this._dur, u = this._tDur, A && (this._lock = 2, o = F ? l : -1e-4, this.render(o, !0), this.vars.repeatRefresh && !L && this.invalidate()), this._lock = 0, !this._ts && !M) return this;
                    Ga(this, L)
                }
            }
            if (this._hasPause && !this._forcing && this._lock < 2 && (D = Wu(this, at(o), at(m)), D && (_ -= m - (m = D._start))), this._tTime = _, this._time = m, this._act = !R, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = i, o = 0), !o && m && !n && !p && (rr(this, "onStart"), this._tTime !== _)) return this;
            if (m >= o && i >= 0)
                for (b = this._first; b;) {
                    if (P = b._next, (b._act || m >= b._start) && b._ts && D !== b) {
                        if (b.parent !== this) return this.render(i, n, s);
                        if (b.render(b._ts > 0 ? (m - b._start) * b._ts : (b._dirty ? b.totalDuration() : b._tDur) + (m - b._start) * b._ts, n, s), m !== this._time || !this._ts && !M) {
                            D = 0, P && (_ += this._zTime = -ye);
                            break
                        }
                    }
                    b = P
                } else {
                    b = this._last;
                    for (var Q = i < 0 ? i : m; b;) {
                        if (P = b._prev, (b._act || Q <= b._end) && b._ts && D !== b) {
                            if (b.parent !== this) return this.render(i, n, s);
                            if (b.render(b._ts > 0 ? (Q - b._start) * b._ts : (b._dirty ? b.totalDuration() : b._tDur) + (Q - b._start) * b._ts, n, s || _t && (b._initted || b._startAt)), m !== this._time || !this._ts && !M) {
                                D = 0, P && (_ += this._zTime = Q ? -ye : ye);
                                break
                            }
                        }
                        b = P
                    }
                }
            if (D && !n && (this.pause(), D.render(m >= o ? 0 : -ye)._zTime = m >= o ? 1 : -1, this._ts)) return this._start = E, is(this), this.render(i, n, s);
            this._onUpdate && !n && rr(this, "onUpdate", !0), (_ === u && this._tTime >= this.totalDuration() || !_ && o) && (E === this._start || Math.abs(R) !== Math.abs(this._ts)) && (this._lock || ((i || !l) && (_ === u && this._ts > 0 || !_ && this._ts < 0) && qr(this, 1), !n && !(i < 0 && !o) && (_ || o || !u) && (rr(this, _ === u && i >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(_ < u && this.timeScale() > 0) && this._prom())))
        }
        return this
    }, t.add = function(i, n) {
        var s = this;
        if (Fr(n) || (n = jt(this, n, i)), !(i instanceof gn)) {
            if (dt(i)) return i.forEach(function(o) {
                return s.add(o, n)
            }), this;
            if (et(i)) return this.addLabel(i, n);
            if (Fe(i)) i = He.delayedCall(0, i);
            else return this
        }
        return this !== i ? xr(this, i, n) : this
    }, t.getChildren = function(i, n, s, o) {
        i === void 0 && (i = !0), n === void 0 && (n = !0), s === void 0 && (s = !0), o === void 0 && (o = -er);
        for (var u = [], l = this._first; l;) l._start >= o && (l instanceof He ? n && u.push(l) : (s && u.push(l), i && u.push.apply(u, l.getChildren(!0, n, s)))), l = l._next;
        return u
    }, t.getById = function(i) {
        for (var n = this.getChildren(1, 1, 1), s = n.length; s--;)
            if (n[s].vars.id === i) return n[s]
    }, t.remove = function(i) {
        return et(i) ? this.removeLabel(i) : Fe(i) ? this.killTweensOf(i) : (rs(this, i), i === this._recent && (this._recent = this._last), vi(this))
    }, t.totalTime = function(i, n) {
        return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = at(Ut.time - (this._ts > 0 ? i / this._ts : (this.totalDuration() - i) / -this._ts))), c.prototype.totalTime.call(this, i, n), this._forcing = 0, this) : this._tTime
    }, t.addLabel = function(i, n) {
        return this.labels[i] = jt(this, n), this
    }, t.removeLabel = function(i) {
        return delete this.labels[i], this
    }, t.addPause = function(i, n, s) {
        var o = He.delayedCall(0, n || _n, s);
        return o.data = "isPause", this._hasPause = 1, xr(this, o, jt(this, i))
    }, t.removePause = function(i) {
        var n = this._first;
        for (i = jt(this, i); n;) n._start === i && n.data === "isPause" && qr(n), n = n._next
    }, t.killTweensOf = function(i, n, s) {
        for (var o = this.getTweensOf(i, s), u = o.length; u--;) Vr !== o[u] && o[u].kill(i, n);
        return this
    }, t.getTweensOf = function(i, n) {
        for (var s = [], o = tr(i), u = this._first, l = Fr(n), _; u;) u instanceof He ? Iu(u._targets, o) && (l ? (!Vr || u._initted && u._ts) && u.globalTime(0) <= n && u.globalTime(u.totalDuration()) > n : !n || u.isActive()) && s.push(u) : (_ = u.getTweensOf(o, n)).length && s.push.apply(s, _), u = u._next;
        return s
    }, t.tweenTo = function(i, n) {
        n = n || {};
        var s = this,
            o = jt(s, i),
            u = n,
            l = u.startAt,
            _ = u.onStart,
            y = u.onStartParams,
            m = u.immediateRender,
            b, P = He.to(s, ir({
                ease: n.ease || "none",
                lazy: !1,
                immediateRender: !1,
                time: o,
                overwrite: "auto",
                duration: n.duration || Math.abs((o - (l && "time" in l ? l.time : s._time)) / s.timeScale()) || ye,
                onStart: function() {
                    if (s.pause(), !b) {
                        var C = n.duration || Math.abs((o - (l && "time" in l ? l.time : s._time)) / s.timeScale());
                        P._dur !== C && Ui(P, C, 0, 1).render(P._time, !0, !0), b = 1
                    }
                    _ && _.apply(P, y || [])
                }
            }, n));
        return m ? P.render(0) : P
    }, t.tweenFromTo = function(i, n, s) {
        return this.tweenTo(n, ir({
            startAt: {
                time: jt(this, i)
            }
        }, s))
    }, t.recent = function() {
        return this._recent
    }, t.nextLabel = function(i) {
        return i === void 0 && (i = this._time), ra(this, jt(this, i))
    }, t.previousLabel = function(i) {
        return i === void 0 && (i = this._time), ra(this, jt(this, i), 1)
    }, t.currentLabel = function(i) {
        return arguments.length ? this.seek(i, !0) : this.previousLabel(this._time + ye)
    }, t.shiftChildren = function(i, n, s) {
        s === void 0 && (s = 0);
        for (var o = this._first, u = this.labels, l; o;) o._start >= s && (o._start += i, o._end += i), o = o._next;
        if (n)
            for (l in u) u[l] >= s && (u[l] += i);
        return vi(this)
    }, t.invalidate = function(i) {
        var n = this._first;
        for (this._lock = 0; n;) n.invalidate(i), n = n._next;
        return c.prototype.invalidate.call(this, i)
    }, t.clear = function(i) {
        i === void 0 && (i = !0);
        for (var n = this._first, s; n;) s = n._next, this.remove(n), n = s;
        return this._dp && (this._time = this._tTime = this._pTime = 0), i && (this.labels = {}), vi(this)
    }, t.totalDuration = function(i) {
        var n = 0,
            s = this,
            o = s._last,
            u = er,
            l, _, y;
        if (arguments.length) return s.timeScale((s._repeat < 0 ? s.duration() : s.totalDuration()) / (s.reversed() ? -i : i));
        if (s._dirty) {
            for (y = s.parent; o;) l = o._prev, o._dirty && o.totalDuration(), _ = o._start, _ > u && s._sort && o._ts && !s._lock ? (s._lock = 1, xr(s, o, _ - o._delay, 1)._lock = 0) : u = _, _ < 0 && o._ts && (n -= _, (!y && !s._dp || y && y.smoothChildTiming) && (s._start += _ / s._ts, s._time -= _, s._tTime -= _), s.shiftChildren(-_, !1, -1 / 0), u = 0), o._end > n && o._ts && (n = o._end), o = l;
            Ui(s, s === Me && s._time > n ? s._time : n, 1, 1), s._dirty = 0
        }
        return s._tDur
    }, e.updateRoot = function(i) {
        if (Me._ts && (Ca(Me, jn(i, Me)), Ta = Ut.frame), Ut.frame >= jo) {
            jo += Wt.autoSleep || 120;
            var n = Me._first;
            if ((!n || !n._ts) && Wt.autoSleep && Ut._listeners.length < 2) {
                for (; n && !n._ts;) n = n._next;
                n || Ut.sleep()
            }
        }
    }, e
}(gn);
ir(Dt.prototype, {
    _lock: 0,
    _hasPause: 0,
    _forcing: 0
});
var ol = function(e, t, r, i, n, s, o) {
        var u = new At(this._pt, e, t, 0, 1, Ja, null, n),
            l = 0,
            _ = 0,
            y, m, b, P, p, C, M, D;
        for (u.b = r, u.e = i, r += "", i += "", (M = ~i.indexOf("random(")) && (i = dn(i)), s && (D = [r, i], s(D, e, t), r = D[0], i = D[1]), m = r.match(ks) || []; y = ks.exec(i);) P = y[0], p = i.substring(l, y.index), b ? b = (b + 1) % 5 : p.substr(-5) === "rgba(" && (b = 1), P !== m[_++] && (C = parseFloat(m[_ - 1]) || 0, u._pt = {
            _next: u._pt,
            p: p || _ === 1 ? p : ",",
            s: C,
            c: P.charAt(1) === "=" ? Bi(C, P) - C : parseFloat(P) - C,
            m: b && b < 4 ? Math.round : 0
        }, l = ks.lastIndex);
        return u.c = l < i.length ? i.substring(l, i.length) : "", u.fp = o, (ya.test(i) || M) && (u.e = 0), this._pt = u, u
    },
    so = function(e, t, r, i, n, s, o, u, l, _) {
        Fe(i) && (i = i(n || 0, e, s));
        var y = e[t],
            m = r !== "get" ? r : Fe(y) ? l ? e[t.indexOf("set") || !Fe(e["get" + t.substr(3)]) ? t : "get" + t.substr(3)](l) : e[t]() : y,
            b = Fe(y) ? l ? cl : Za : ao,
            P;
        if (et(i) && (~i.indexOf("random(") && (i = dn(i)), i.charAt(1) === "=" && (P = Bi(m, i) + (ht(m) || 0), (P || P === 0) && (i = P))), !_ || m !== i || Ws) return !isNaN(m * i) && i !== "" ? (P = new At(this._pt, e, t, +m || 0, i - (m || 0), typeof y == "boolean" ? _l : ja, 0, b), l && (P.fp = l), o && P.modifier(o, this, e), this._pt = P) : (!y && !(t in e) && to(t, i), ol.call(this, e, t, m, i, b, u || Wt.stringFilter, l))
    },
    al = function(e, t, r, i, n) {
        if (Fe(e) && (e = hn(e, n, t, r, i)), !Tr(e) || e.style && e.nodeType || dt(e) || ga(e)) return et(e) ? hn(e, n, t, r, i) : e;
        var s = {},
            o;
        for (o in e) s[o] = hn(e[o], n, t, r, i);
        return s
    },
    $a = function(e, t, r, i, n, s) {
        var o, u, l, _;
        if (Vt[e] && (o = new Vt[e]).init(n, o.rawVars ? t[e] : al(t[e], i, n, s, r), r, i, s) !== !1 && (r._pt = u = new At(r._pt, n, e, 0, 1, o.render, o, 0, o.priority), r !== Ii))
            for (l = r._ptLookup[r._targets.indexOf(n)], _ = o._props.length; _--;) l[o._props[_]] = u;
        return o
    },
    Vr, Ws, oo = function c(e, t, r) {
        var i = e.vars,
            n = i.ease,
            s = i.startAt,
            o = i.immediateRender,
            u = i.lazy,
            l = i.onUpdate,
            _ = i.onUpdateParams,
            y = i.callbackScope,
            m = i.runBackwards,
            b = i.yoyoEase,
            P = i.keyframes,
            p = i.autoRevert,
            C = e._dur,
            M = e._startAt,
            D = e._targets,
            R = e.parent,
            E = R && R.data === "nested" ? R.vars.targets : D,
            k = e._overwrite === "auto" && !Zs,
            z = e.timeline,
            L, F, A, Q, te, Z, re, ve, _e, Se, xe, ce, de;
        if (z && (!P || !n) && (n = "none"), e._ease = xi(n, Xi.ease), e._yEase = b ? Wa(xi(b === !0 ? n : b, Xi.ease)) : 0, b && e._yoyo && !e._repeat && (b = e._yEase, e._yEase = e._ease, e._ease = b), e._from = !z && !!i.runBackwards, !z || P && !i.stagger) {
            if (ve = D[0] ? yi(D[0]).harness : 0, ce = ve && i[ve.prop], L = Zn(i, ro), M && (M._zTime < 0 && M.progress(1), t < 0 && m && o && !p ? M.render(-1, !0) : M.revert(m && C ? Gn : zu), M._lazy = 0), s) {
                if (qr(e._startAt = He.set(D, ir({
                        data: "isStart",
                        overwrite: !1,
                        parent: R,
                        immediateRender: !0,
                        lazy: !M && Et(u),
                        startAt: null,
                        delay: 0,
                        onUpdate: l,
                        onUpdateParams: _,
                        callbackScope: y,
                        stagger: 0
                    }, s))), e._startAt._dp = 0, e._startAt._sat = e, t < 0 && (_t || !o && !p) && e._startAt.revert(Gn), o && C && t <= 0 && r <= 0) {
                    t && (e._zTime = t);
                    return
                }
            } else if (m && C && !M) {
                if (t && (o = !1), A = ir({
                        overwrite: !1,
                        data: "isFromStart",
                        lazy: o && !M && Et(u),
                        immediateRender: o,
                        stagger: 0,
                        parent: R
                    }, L), ce && (A[ve.prop] = ce), qr(e._startAt = He.set(D, A)), e._startAt._dp = 0, e._startAt._sat = e, t < 0 && (_t ? e._startAt.revert(Gn) : e._startAt.render(-1, !0)), e._zTime = t, !o) c(e._startAt, ye, ye);
                else if (!t) return
            }
            for (e._pt = e._ptCache = 0, u = C && Et(u) || u && !C, F = 0; F < D.length; F++) {
                if (te = D[F], re = te._gsap || no(D)[F]._gsap, e._ptLookup[F] = Se = {}, Bs[re.id] && Gr.length && Qn(), xe = E === D ? F : E.indexOf(te), ve && (_e = new ve).init(te, ce || L, e, xe, E) !== !1 && (e._pt = Q = new At(e._pt, te, _e.name, 0, 1, _e.render, _e, 0, _e.priority), _e._props.forEach(function(Ee) {
                        Se[Ee] = Q
                    }), _e.priority && (Z = 1)), !ve || ce)
                    for (A in L) Vt[A] && (_e = $a(A, L, e, xe, te, E)) ? _e.priority && (Z = 1) : Se[A] = Q = so.call(e, te, A, "get", L[A], xe, E, 0, i.stringFilter);
                e._op && e._op[F] && e.kill(te, e._op[F]), k && e._pt && (Vr = e, Me.killTweensOf(te, Se, e.globalTime(t)), de = !e.parent, Vr = 0), e._pt && u && (Bs[re.id] = 1)
            }
            Z && eu(e), e._onInit && e._onInit(e)
        }
        e._onUpdate = l, e._initted = (!e._op || e._pt) && !de, P && t <= 0 && z.render(er, !0, !0)
    },
    ul = function(e, t, r, i, n, s, o) {
        var u = (e._pt && e._ptCache || (e._ptCache = {}))[t],
            l, _, y, m;
        if (!u)
            for (u = e._ptCache[t] = [], y = e._ptLookup, m = e._targets.length; m--;) {
                if (l = y[m][t], l && l.d && l.d._pt)
                    for (l = l.d._pt; l && l.p !== t && l.fp !== t;) l = l._next;
                if (!l) return Ws = 1, e.vars[t] = "+=0", oo(e, o), Ws = 0, 1;
                u.push(l)
            }
        for (m = u.length; m--;) _ = u[m], l = _._pt || _, l.s = (i || i === 0) && !n ? i : l.s + (i || 0) + s * l.c, l.c = r - l.s, _.e && (_.e = Be(r) + ht(_.e)), _.b && (_.b = l.s + ht(_.b))
    },
    ll = function(e, t) {
        var r = e[0] ? yi(e[0]).harness : 0,
            i = r && r.aliases,
            n, s, o, u;
        if (!i) return t;
        n = wi({}, t);
        for (s in i)
            if (s in n)
                for (u = i[s].split(","), o = u.length; o--;) n[u[o]] = n[s];
        return n
    },
    fl = function(e, t, r, i) {
        var n = t.ease || i || "power1.inOut",
            s, o;
        if (dt(t)) o = r[e] || (r[e] = []), t.forEach(function(u, l) {
            return o.push({
                t: l / (t.length - 1) * 100,
                v: u,
                e: n
            })
        });
        else
            for (s in t) o = r[s] || (r[s] = []), s === "ease" || o.push({
                t: parseFloat(e),
                v: t[s],
                e: n
            })
    },
    hn = function(e, t, r, i, n) {
        return Fe(e) ? e.call(t, r, i, n) : et(e) && ~e.indexOf("random(") ? dn(e) : e
    },
    Ka = io + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
    Qa = {};
Rt(Ka + ",id,stagger,delay,duration,paused,scrollTrigger", function(c) {
    return Qa[c] = 1
});
var He = function(c) {
    da(e, c);

    function e(r, i, n, s) {
        var o;
        typeof i == "number" && (n.duration = i, i = n, n = null), o = c.call(this, s ? i : fn(i)) || this;
        var u = o.vars,
            l = u.duration,
            _ = u.delay,
            y = u.immediateRender,
            m = u.stagger,
            b = u.overwrite,
            P = u.keyframes,
            p = u.defaults,
            C = u.scrollTrigger,
            M = u.yoyoEase,
            D = i.parent || Me,
            R = (dt(r) || ga(r) ? Fr(r[0]) : "length" in i) ? [r] : tr(r),
            E, k, z, L, F, A, Q, te;
        if (o._targets = R.length ? no(R) : Kn("GSAP target " + r + " not found. https://greensock.com", !Wt.nullTargetWarn) || [], o._ptLookup = [], o._overwrite = b, P || m || Wn(l) || Wn(_)) {
            if (i = o.vars, E = o.timeline = new Dt({
                    data: "nested",
                    defaults: p || {},
                    targets: D && D.data === "nested" ? D.vars.targets : R
                }), E.kill(), E.parent = E._dp = Rr(o), E._start = 0, m || Wn(l) || Wn(_)) {
                if (L = R.length, Q = m && Fa(m), Tr(m))
                    for (F in m) ~Ka.indexOf(F) && (te || (te = {}), te[F] = m[F]);
                for (k = 0; k < L; k++) z = Zn(i, Qa), z.stagger = 0, M && (z.yoyoEase = M), te && wi(z, te), A = R[k], z.duration = +hn(l, Rr(o), k, A, R), z.delay = (+hn(_, Rr(o), k, A, R) || 0) - o._delay, !m && L === 1 && z.delay && (o._delay = _ = z.delay, o._start += _, z.delay = 0), E.to(A, z, Q ? Q(k, A, R) : 0), E._ease = ne.none;
                E.duration() ? l = _ = 0 : o.timeline = 0
            } else if (P) {
                fn(ir(E.vars.defaults, {
                    ease: "none"
                })), E._ease = xi(P.ease || i.ease || "none");
                var Z = 0,
                    re, ve, _e;
                if (dt(P)) P.forEach(function(Se) {
                    return E.to(R, Se, ">")
                }), E.duration();
                else {
                    z = {};
                    for (F in P) F === "ease" || F === "easeEach" || fl(F, P[F], z, P.easeEach);
                    for (F in z)
                        for (re = z[F].sort(function(Se, xe) {
                                return Se.t - xe.t
                            }), Z = 0, k = 0; k < re.length; k++) ve = re[k], _e = {
                            ease: ve.e,
                            duration: (ve.t - (k ? re[k - 1].t : 0)) / 100 * l
                        }, _e[F] = ve.v, E.to(R, _e, Z), Z += _e.duration;
                    E.duration() < l && E.to({}, {
                        duration: l - E.duration()
                    })
                }
            }
            l || o.duration(l = E.duration())
        } else o.timeline = 0;
        return b === !0 && !Zs && (Vr = Rr(o), Me.killTweensOf(R), Vr = 0), xr(D, Rr(o), n), i.reversed && o.reverse(), i.paused && o.paused(!0), (y || !l && !P && o._start === at(D._time) && Et(y) && Xu(Rr(o)) && D.data !== "nested") && (o._tTime = -ye, o.render(Math.max(0, -_) || 0)), C && Da(Rr(o), C), o
    }
    var t = e.prototype;
    return t.render = function(i, n, s) {
        var o = this._time,
            u = this._tDur,
            l = this._dur,
            _ = i < 0,
            y = i > u - ye && !_ ? u : i < ye ? 0 : i,
            m, b, P, p, C, M, D, R, E;
        if (!l) Uu(this, i, n, s);
        else if (y !== this._tTime || !i || s || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== _) {
            if (m = y, R = this.timeline, this._repeat) {
                if (p = l + this._rDelay, this._repeat < -1 && _) return this.totalTime(p * 100 + i, n, s);
                if (m = at(y % p), y === u ? (P = this._repeat, m = l) : (P = ~~(y / p), P && P === y / p && (m = l, P--), m > l && (m = l)), M = this._yoyo && P & 1, M && (E = this._yEase, m = l - m), C = Vi(this._tTime, p), m === o && !s && this._initted) return this._tTime = y, this;
                P !== C && (R && this._yEase && Ga(R, M), this.vars.repeatRefresh && !M && !this._lock && (this._lock = s = 1, this.render(at(p * P), !0).invalidate()._lock = 0))
            }
            if (!this._initted) {
                if (Ea(this, _ ? i : m, s, n, y)) return this._tTime = 0, this;
                if (o !== this._time) return this;
                if (l !== this._dur) return this.render(i, n, s)
            }
            if (this._tTime = y, this._time = m, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = D = (E || this._ease)(m / l), this._from && (this.ratio = D = 1 - D), m && !o && !n && !P && (rr(this, "onStart"), this._tTime !== y)) return this;
            for (b = this._pt; b;) b.r(D, b.d), b = b._next;
            R && R.render(i < 0 ? i : !m && M ? -ye : R._dur * R._ease(m / this._dur), n, s) || this._startAt && (this._zTime = i), this._onUpdate && !n && (_ && Ns(this, i, n, s), rr(this, "onUpdate")), this._repeat && P !== C && this.vars.onRepeat && !n && this.parent && rr(this, "onRepeat"), (y === this._tDur || !y) && this._tTime === y && (_ && !this._onUpdate && Ns(this, i, !0, !0), (i || !l) && (y === this._tDur && this._ts > 0 || !y && this._ts < 0) && qr(this, 1), !n && !(_ && !o) && (y || o || M) && (rr(this, y === u ? "onComplete" : "onReverseComplete", !0), this._prom && !(y < u && this.timeScale() > 0) && this._prom()))
        }
        return this
    }, t.targets = function() {
        return this._targets
    }, t.invalidate = function(i) {
        return (!i || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(i), c.prototype.invalidate.call(this, i)
    }, t.resetTo = function(i, n, s, o) {
        pn || Ut.wake(), this._ts || this.play();
        var u = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
            l;
        return this._initted || oo(this, u), l = this._ease(u / this._dur), ul(this, i, n, s, o, l, u) ? this.resetTo(i, n, s, o) : (ns(this, 0), this.parent || Oa(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0))
    }, t.kill = function(i, n) {
        if (n === void 0 && (n = "all"), !i && (!n || n === "all")) return this._lazy = this._pt = 0, this.parent ? un(this) : this;
        if (this.timeline) {
            var s = this.timeline.totalDuration();
            return this.timeline.killTweensOf(i, n, Vr && Vr.vars.overwrite !== !0)._first || un(this), this.parent && s !== this.timeline.totalDuration() && Ui(this, this._dur * this.timeline._tDur / s, 0, 1), this
        }
        var o = this._targets,
            u = i ? tr(i) : o,
            l = this._ptLookup,
            _ = this._pt,
            y, m, b, P, p, C, M;
        if ((!n || n === "all") && Nu(o, u)) return n === "all" && (this._pt = 0), un(this);
        for (y = this._op = this._op || [], n !== "all" && (et(n) && (p = {}, Rt(n, function(D) {
                return p[D] = 1
            }), n = p), n = ll(o, n)), M = o.length; M--;)
            if (~u.indexOf(o[M])) {
                m = l[M], n === "all" ? (y[M] = n, P = m, b = {}) : (b = y[M] = y[M] || {}, P = n);
                for (p in P) C = m && m[p], C && ((!("kill" in C.d) || C.d.kill(p) === !0) && rs(this, C, "_pt"), delete m[p]), b !== "all" && (b[p] = 1)
            }
        return this._initted && !this._pt && _ && un(this), this
    }, e.to = function(i, n) {
        return new e(i, n, arguments[2])
    }, e.from = function(i, n) {
        return cn(1, arguments)
    }, e.delayedCall = function(i, n, s, o) {
        return new e(n, 0, {
            immediateRender: !1,
            lazy: !1,
            overwrite: !1,
            delay: i,
            onComplete: n,
            onReverseComplete: n,
            onCompleteParams: s,
            onReverseCompleteParams: s,
            callbackScope: o
        })
    }, e.fromTo = function(i, n, s) {
        return cn(2, arguments)
    }, e.set = function(i, n) {
        return n.duration = 0, n.repeatDelay || (n.repeat = 0), new e(i, n)
    }, e.killTweensOf = function(i, n, s) {
        return Me.killTweensOf(i, n, s)
    }, e
}(gn);
ir(He.prototype, {
    _targets: [],
    _lazy: 0,
    _startAt: 0,
    _op: 0,
    _onInit: 0
});
Rt("staggerTo,staggerFrom,staggerFromTo", function(c) {
    He[c] = function() {
        var e = new Dt,
            t = Xs.call(arguments, 0);
        return t.splice(c === "staggerFromTo" ? 5 : 4, 0, 0), e[c].apply(e, t)
    }
});
var ao = function(e, t, r) {
        return e[t] = r
    },
    Za = function(e, t, r) {
        return e[t](r)
    },
    cl = function(e, t, r, i) {
        return e[t](i.fp, r)
    },
    hl = function(e, t, r) {
        return e.setAttribute(t, r)
    },
    uo = function(e, t) {
        return Fe(e[t]) ? Za : js(e[t]) && e.setAttribute ? hl : ao
    },
    ja = function(e, t) {
        return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e6) / 1e6, t)
    },
    _l = function(e, t) {
        return t.set(t.t, t.p, !!(t.s + t.c * e), t)
    },
    Ja = function(e, t) {
        var r = t._pt,
            i = "";
        if (!e && t.b) i = t.b;
        else if (e === 1 && t.e) i = t.e;
        else {
            for (; r;) i = r.p + (r.m ? r.m(r.s + r.c * e) : Math.round((r.s + r.c * e) * 1e4) / 1e4) + i, r = r._next;
            i += t.c
        }
        t.set(t.t, t.p, i, t)
    },
    lo = function(e, t) {
        for (var r = t._pt; r;) r.r(e, r.d), r = r._next
    },
    dl = function(e, t, r, i) {
        for (var n = this._pt, s; n;) s = n._next, n.p === i && n.modifier(e, t, r), n = s
    },
    pl = function(e) {
        for (var t = this._pt, r, i; t;) i = t._next, t.p === e && !t.op || t.op === e ? rs(this, t, "_pt") : t.dep || (r = 1), t = i;
        return !r
    },
    gl = function(e, t, r, i) {
        i.mSet(e, t, i.m.call(i.tween, r, i.mt), i)
    },
    eu = function(e) {
        for (var t = e._pt, r, i, n, s; t;) {
            for (r = t._next, i = n; i && i.pr > t.pr;) i = i._next;
            (t._prev = i ? i._prev : s) ? t._prev._next = t: n = t, (t._next = i) ? i._prev = t : s = t, t = r
        }
        e._pt = n
    },
    At = function() {
        function c(t, r, i, n, s, o, u, l, _) {
            this.t = r, this.s = n, this.c = s, this.p = i, this.r = o || ja, this.d = u || this, this.set = l || ao, this.pr = _ || 0, this._next = t, t && (t._prev = this)
        }
        var e = c.prototype;
        return e.modifier = function(r, i, n) {
            this.mSet = this.mSet || this.set, this.set = gl, this.m = r, this.mt = n, this.tween = i
        }, c
    }();
Rt(io + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(c) {
    return ro[c] = 1
});
Gt.TweenMax = Gt.TweenLite = He;
Gt.TimelineLite = Gt.TimelineMax = Dt;
Me = new Dt({
    sortChildren: !1,
    defaults: Xi,
    autoRemoveChildren: !0,
    id: "root",
    smoothChildTiming: !0
});
Wt.stringFilter = Ua;
var bi = [],
    qn = {},
    ml = [],
    na = 0,
    yl = 0,
    Es = function(e) {
        return (qn[e] || ml).map(function(t) {
            return t()
        })
    },
    Gs = function() {
        var e = Date.now(),
            t = [];
        e - na > 2 && (Es("matchMediaInit"), bi.forEach(function(r) {
            var i = r.queries,
                n = r.conditions,
                s, o, u, l;
            for (o in i) s = Jt.matchMedia(i[o]).matches, s && (u = 1), s !== n[o] && (n[o] = s, l = 1);
            l && (r.revert(), u && t.push(r))
        }), Es("matchMediaRevert"), t.forEach(function(r) {
            return r.onMatch(r)
        }), na = e, Es("matchMedia"))
    },
    tu = function() {
        function c(t, r) {
            this.selector = r && Vs(r), this.data = [], this._r = [], this.isReverted = !1, this.id = yl++, t && this.add(t)
        }
        var e = c.prototype;
        return e.add = function(r, i, n) {
            Fe(r) && (n = i, i = r, r = Fe);
            var s = this,
                o = function() {
                    var l = Ae,
                        _ = s.selector,
                        y;
                    return l && l !== s && l.data.push(s), n && (s.selector = Vs(n)), Ae = s, y = i.apply(s, arguments), Fe(y) && s._r.push(y), Ae = l, s.selector = _, s.isReverted = !1, y
                };
            return s.last = o, r === Fe ? o(s) : r ? s[r] = o : o
        }, e.ignore = function(r) {
            var i = Ae;
            Ae = null, r(this), Ae = i
        }, e.getTweens = function() {
            var r = [];
            return this.data.forEach(function(i) {
                return i instanceof c ? r.push.apply(r, i.getTweens()) : i instanceof He && !(i.parent && i.parent.data === "nested") && r.push(i)
            }), r
        }, e.clear = function() {
            this._r.length = this.data.length = 0
        }, e.kill = function(r, i) {
            var n = this;
            if (r) {
                var s = this.getTweens();
                this.data.forEach(function(u) {
                    u.data === "isFlip" && (u.revert(), u.getChildren(!0, !0, !1).forEach(function(l) {
                        return s.splice(s.indexOf(l), 1)
                    }))
                }), s.map(function(u) {
                    return {
                        g: u.globalTime(0),
                        t: u
                    }
                }).sort(function(u, l) {
                    return l.g - u.g || -1 / 0
                }).forEach(function(u) {
                    return u.t.revert(r)
                }), this.data.forEach(function(u) {
                    return !(u instanceof He) && u.revert && u.revert(r)
                }), this._r.forEach(function(u) {
                    return u(r, n)
                }), this.isReverted = !0
            } else this.data.forEach(function(u) {
                return u.kill && u.kill()
            });
            if (this.clear(), i)
                for (var o = bi.length; o--;) bi[o].id === this.id && bi.splice(o, 1)
        }, e.revert = function(r) {
            this.kill(r || {})
        }, c
    }(),
    vl = function() {
        function c(t) {
            this.contexts = [], this.scope = t
        }
        var e = c.prototype;
        return e.add = function(r, i, n) {
            Tr(r) || (r = {
                matches: r
            });
            var s = new tu(0, n || this.scope),
                o = s.conditions = {},
                u, l, _;
            Ae && !s.selector && (s.selector = Ae.selector), this.contexts.push(s), i = s.add("onMatch", i), s.queries = r;
            for (l in r) l === "all" ? _ = 1 : (u = Jt.matchMedia(r[l]), u && (bi.indexOf(s) < 0 && bi.push(s), (o[l] = u.matches) && (_ = 1), u.addListener ? u.addListener(Gs) : u.addEventListener("change", Gs)));
            return _ && i(s), this
        }, e.revert = function(r) {
            this.kill(r || {})
        }, e.kill = function(r) {
            this.contexts.forEach(function(i) {
                return i.kill(r, !0)
            })
        }, c
    }(),
    Jn = {
        registerPlugin: function() {
            for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
            t.forEach(function(i) {
                return Ya(i)
            })
        },
        timeline: function(e) {
            return new Dt(e)
        },
        getTweensOf: function(e, t) {
            return Me.getTweensOf(e, t)
        },
        getProperty: function(e, t, r, i) {
            et(e) && (e = tr(e)[0]);
            var n = yi(e || {}).get,
                s = r ? Pa : ka;
            return r === "native" && (r = ""), e && (t ? s((Vt[t] && Vt[t].get || n)(e, t, r, i)) : function(o, u, l) {
                return s((Vt[o] && Vt[o].get || n)(e, o, u, l))
            })
        },
        quickSetter: function(e, t, r) {
            if (e = tr(e), e.length > 1) {
                var i = e.map(function(_) {
                        return Ft.quickSetter(_, t, r)
                    }),
                    n = i.length;
                return function(_) {
                    for (var y = n; y--;) i[y](_)
                }
            }
            e = e[0] || {};
            var s = Vt[t],
                o = yi(e),
                u = o.harness && (o.harness.aliases || {})[t] || t,
                l = s ? function(_) {
                    var y = new s;
                    Ii._pt = 0, y.init(e, r ? _ + r : _, Ii, 0, [e]), y.render(1, y), Ii._pt && lo(1, Ii)
                } : o.set(e, u);
            return s ? l : function(_) {
                return l(e, u, r ? _ + r : _, o, 1)
            }
        },
        quickTo: function(e, t, r) {
            var i, n = Ft.to(e, wi((i = {}, i[t] = "+=0.1", i.paused = !0, i), r || {})),
                s = function(u, l, _) {
                    return n.resetTo(t, u, l, _)
                };
            return s.tween = n, s
        },
        isTweening: function(e) {
            return Me.getTweensOf(e, !0).length > 0
        },
        defaults: function(e) {
            return e && e.ease && (e.ease = xi(e.ease, Xi.ease)), Jo(Xi, e || {})
        },
        config: function(e) {
            return Jo(Wt, e || {})
        },
        registerEffect: function(e) {
            var t = e.name,
                r = e.effect,
                i = e.plugins,
                n = e.defaults,
                s = e.extendTimeline;
            (i || "").split(",").forEach(function(o) {
                return o && !Vt[o] && !Gt[o] && Kn(t + " effect requires " + o + " plugin.")
            }), Ps[t] = function(o, u, l) {
                return r(tr(o), ir(u || {}, n), l)
            }, s && (Dt.prototype[t] = function(o, u, l) {
                return this.add(Ps[t](o, Tr(u) ? u : (l = u) && {}, this), l)
            })
        },
        registerEase: function(e, t) {
            ne[e] = xi(t)
        },
        parseEase: function(e, t) {
            return arguments.length ? xi(e, t) : ne
        },
        getById: function(e) {
            return Me.getById(e)
        },
        exportRoot: function(e, t) {
            e === void 0 && (e = {});
            var r = new Dt(e),
                i, n;
            for (r.smoothChildTiming = Et(e.smoothChildTiming), Me.remove(r), r._dp = 0, r._time = r._tTime = Me._time, i = Me._first; i;) n = i._next, (t || !(!i._dur && i instanceof He && i.vars.onComplete === i._targets[0])) && xr(r, i, i._start - i._delay), i = n;
            return xr(Me, r, 0), r
        },
        context: function(e, t) {
            return e ? new tu(e, t) : Ae
        },
        matchMedia: function(e) {
            return new vl(e)
        },
        matchMediaRefresh: function() {
            return bi.forEach(function(e) {
                var t = e.conditions,
                    r, i;
                for (i in t) t[i] && (t[i] = !1, r = 1);
                r && e.revert()
            }) || Gs()
        },
        addEventListener: function(e, t) {
            var r = qn[e] || (qn[e] = []);
            ~r.indexOf(t) || r.push(t)
        },
        removeEventListener: function(e, t) {
            var r = qn[e],
                i = r && r.indexOf(t);
            i >= 0 && r.splice(i, 1)
        },
        utils: {
            wrap: Zu,
            wrapYoyo: ju,
            distribute: Fa,
            random: La,
            snap: za,
            normalize: Qu,
            getUnit: ht,
            clamp: Hu,
            splitColor: Xa,
            toArray: tr,
            selector: Vs,
            mapRange: Ba,
            pipe: $u,
            unitize: Ku,
            interpolate: Ju,
            shuffle: Aa
        },
        install: ba,
        effects: Ps,
        ticker: Ut,
        updateRoot: Dt.updateRoot,
        plugins: Vt,
        globalTimeline: Me,
        core: {
            PropTween: At,
            globals: wa,
            Tween: He,
            Timeline: Dt,
            Animation: gn,
            getCache: yi,
            _removeLinkedListItem: rs,
            reverting: function() {
                return _t
            },
            context: function(e) {
                return e && Ae && (Ae.data.push(e), e._ctx = Ae), Ae
            },
            suppressOverwrites: function(e) {
                return Zs = e
            }
        }
    };
Rt("to,from,fromTo,delayedCall,set,killTweensOf", function(c) {
    return Jn[c] = He[c]
});
Ut.add(Dt.updateRoot);
Ii = Jn.to({}, {
    duration: 0
});
var xl = function(e, t) {
        for (var r = e._pt; r && r.p !== t && r.op !== t && r.fp !== t;) r = r._next;
        return r
    },
    bl = function(e, t) {
        var r = e._targets,
            i, n, s;
        for (i in t)
            for (n = r.length; n--;) s = e._ptLookup[n][i], s && (s = s.d) && (s._pt && (s = xl(s, i)), s && s.modifier && s.modifier(t[i], e, r[n], i))
    },
    Rs = function(e, t) {
        return {
            name: e,
            rawVars: 1,
            init: function(i, n, s) {
                s._onInit = function(o) {
                    var u, l;
                    if (et(n) && (u = {}, Rt(n, function(_) {
                            return u[_] = 1
                        }), n = u), t) {
                        u = {};
                        for (l in n) u[l] = t(n[l]);
                        n = u
                    }
                    bl(o, n)
                }
            }
        }
    },
    Ft = Jn.registerPlugin({
        name: "attr",
        init: function(e, t, r, i, n) {
            var s, o, u;
            this.tween = r;
            for (s in t) u = e.getAttribute(s) || "", o = this.add(e, "setAttribute", (u || 0) + "", t[s], i, n, 0, 0, s), o.op = s, o.b = u, this._props.push(s)
        },
        render: function(e, t) {
            for (var r = t._pt; r;) _t ? r.set(r.t, r.p, r.b, r) : r.r(e, r.d), r = r._next
        }
    }, {
        name: "endArray",
        init: function(e, t) {
            for (var r = t.length; r--;) this.add(e, r, e[r] || 0, t[r], 0, 0, 0, 0, 0, 1)
        }
    }, Rs("roundProps", Us), Rs("modifiers"), Rs("snap", za)) || Jn;
He.version = Dt.version = Ft.version = "3.12.2";
xa = 1;
Js() && Wi();
ne.Power0;
ne.Power1;
ne.Power2;
ne.Power3;
ne.Power4;
ne.Linear;
ne.Quad;
ne.Cubic;
ne.Quart;
ne.Quint;
ne.Strong;
ne.Elastic;
ne.Back;
ne.SteppedEase;
ne.Bounce;
ne.Sine;
ne.Expo;
ne.Circ;
/*!
 * CSSPlugin 3.12.2
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
var sa, Ur, Ni, fo, mi, oa, co, wl = function() {
        return typeof window < "u"
    },
    zr = {},
    gi = 180 / Math.PI,
    Yi = Math.PI / 180,
    zi = Math.atan2,
    aa = 1e8,
    ho = /([A-Z])/g,
    Tl = /(left|right|width|margin|padding|x)/i,
    Sl = /[\s,\(]\S/,
    br = {
        autoAlpha: "opacity,visibility",
        scale: "scaleX,scaleY",
        alpha: "opacity"
    },
    Hs = function(e, t) {
        return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t)
    },
    Cl = function(e, t) {
        return t.set(t.t, t.p, e === 1 ? t.e : Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t)
    },
    kl = function(e, t) {
        return t.set(t.t, t.p, e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b, t)
    },
    Pl = function(e, t) {
        var r = t.s + t.c * e;
        t.set(t.t, t.p, ~~(r + (r < 0 ? -.5 : .5)) + t.u, t)
    },
    ru = function(e, t) {
        return t.set(t.t, t.p, e ? t.e : t.b, t)
    },
    iu = function(e, t) {
        return t.set(t.t, t.p, e !== 1 ? t.b : t.e, t)
    },
    Ol = function(e, t, r) {
        return e.style[t] = r
    },
    Ml = function(e, t, r) {
        return e.style.setProperty(t, r)
    },
    Dl = function(e, t, r) {
        return e._gsap[t] = r
    },
    El = function(e, t, r) {
        return e._gsap.scaleX = e._gsap.scaleY = r
    },
    Rl = function(e, t, r, i, n) {
        var s = e._gsap;
        s.scaleX = s.scaleY = r, s.renderTransform(n, s)
    },
    Al = function(e, t, r, i, n) {
        var s = e._gsap;
        s[t] = r, s.renderTransform(n, s)
    },
    De = "transform",
    hr = De + "Origin",
    Fl = function c(e, t) {
        var r = this,
            i = this.target,
            n = i.style;
        if (e in zr && n) {
            if (this.tfm = this.tfm || {}, e !== "transform") e = br[e] || e, ~e.indexOf(",") ? e.split(",").forEach(function(s) {
                return r.tfm[s] = Ar(i, s)
            }) : this.tfm[e] = i._gsap.x ? i._gsap[e] : Ar(i, e);
            else return br.transform.split(",").forEach(function(s) {
                return c.call(r, s, t)
            });
            if (this.props.indexOf(De) >= 0) return;
            i._gsap.svg && (this.svgo = i.getAttribute("data-svg-origin"), this.props.push(hr, t, "")), e = De
        }(n || t) && this.props.push(e, t, n[e])
    },
    nu = function(e) {
        e.translate && (e.removeProperty("translate"), e.removeProperty("scale"), e.removeProperty("rotate"))
    },
    zl = function() {
        var e = this.props,
            t = this.target,
            r = t.style,
            i = t._gsap,
            n, s;
        for (n = 0; n < e.length; n += 3) e[n + 1] ? t[e[n]] = e[n + 2] : e[n + 2] ? r[e[n]] = e[n + 2] : r.removeProperty(e[n].substr(0, 2) === "--" ? e[n] : e[n].replace(ho, "-$1").toLowerCase());
        if (this.tfm) {
            for (s in this.tfm) i[s] = this.tfm[s];
            i.svg && (i.renderTransform(), t.setAttribute("data-svg-origin", this.svgo || "")), n = co(), (!n || !n.isStart) && !r[De] && (nu(r), i.uncache = 1)
        }
    },
    su = function(e, t) {
        var r = {
            target: e,
            props: [],
            revert: zl,
            save: Fl
        };
        return e._gsap || Ft.core.getCache(e), t && t.split(",").forEach(function(i) {
            return r.save(i)
        }), r
    },
    ou, qs = function(e, t) {
        var r = Ur.createElementNS ? Ur.createElementNS((t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e) : Ur.createElement(e);
        return r.style ? r : Ur.createElement(e)
    },
    wr = function c(e, t, r) {
        var i = getComputedStyle(e);
        return i[t] || i.getPropertyValue(t.replace(ho, "-$1").toLowerCase()) || i.getPropertyValue(t) || !r && c(e, Gi(t) || t, 1) || ""
    },
    ua = "O,Moz,ms,Ms,Webkit".split(","),
    Gi = function(e, t, r) {
        var i = t || mi,
            n = i.style,
            s = 5;
        if (e in n && !r) return e;
        for (e = e.charAt(0).toUpperCase() + e.substr(1); s-- && !(ua[s] + e in n););
        return s < 0 ? null : (s === 3 ? "ms" : s >= 0 ? ua[s] : "") + e
    },
    $s = function() {
        wl() && window.document && (sa = window, Ur = sa.document, Ni = Ur.documentElement, mi = qs("div") || {
            style: {}
        }, qs("div"), De = Gi(De), hr = De + "Origin", mi.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", ou = !!Gi("perspective"), co = Ft.core.reverting, fo = 1)
    },
    As = function c(e) {
        var t = qs("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
            r = this.parentNode,
            i = this.nextSibling,
            n = this.style.cssText,
            s;
        if (Ni.appendChild(t), t.appendChild(this), this.style.display = "block", e) try {
            s = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = c
        } catch {} else this._gsapBBox && (s = this._gsapBBox());
        return r && (i ? r.insertBefore(this, i) : r.appendChild(this)), Ni.removeChild(t), this.style.cssText = n, s
    },
    la = function(e, t) {
        for (var r = t.length; r--;)
            if (e.hasAttribute(t[r])) return e.getAttribute(t[r])
    },
    au = function(e) {
        var t;
        try {
            t = e.getBBox()
        } catch {
            t = As.call(e, !0)
        }
        return t && (t.width || t.height) || e.getBBox === As || (t = As.call(e, !0)), t && !t.width && !t.x && !t.y ? {
            x: +la(e, ["x", "cx", "x1"]) || 0,
            y: +la(e, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0
        } : t
    },
    uu = function(e) {
        return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && au(e))
    },
    mn = function(e, t) {
        if (t) {
            var r = e.style;
            t in zr && t !== hr && (t = De), r.removeProperty ? ((t.substr(0, 2) === "ms" || t.substr(0, 6) === "webkit") && (t = "-" + t), r.removeProperty(t.replace(ho, "-$1").toLowerCase())) : r.removeAttribute(t)
        }
    },
    Wr = function(e, t, r, i, n, s) {
        var o = new At(e._pt, t, r, 0, 1, s ? iu : ru);
        return e._pt = o, o.b = i, o.e = n, e._props.push(r), o
    },
    fa = {
        deg: 1,
        rad: 1,
        turn: 1
    },
    Ll = {
        grid: 1,
        flex: 1
    },
    $r = function c(e, t, r, i) {
        var n = parseFloat(r) || 0,
            s = (r + "").trim().substr((n + "").length) || "px",
            o = mi.style,
            u = Tl.test(t),
            l = e.tagName.toLowerCase() === "svg",
            _ = (l ? "client" : "offset") + (u ? "Width" : "Height"),
            y = 100,
            m = i === "px",
            b = i === "%",
            P, p, C, M;
        return i === s || !n || fa[i] || fa[s] ? n : (s !== "px" && !m && (n = c(e, t, r, "px")), M = e.getCTM && uu(e), (b || s === "%") && (zr[t] || ~t.indexOf("adius")) ? (P = M ? e.getBBox()[u ? "width" : "height"] : e[_], Be(b ? n / P * y : n / 100 * P)) : (o[u ? "width" : "height"] = y + (m ? s : i), p = ~t.indexOf("adius") || i === "em" && e.appendChild && !l ? e : e.parentNode, M && (p = (e.ownerSVGElement || {}).parentNode), (!p || p === Ur || !p.appendChild) && (p = Ur.body), C = p._gsap, C && b && C.width && u && C.time === Ut.time && !C.uncache ? Be(n / C.width * y) : ((b || s === "%") && !Ll[wr(p, "display")] && (o.position = wr(e, "position")), p === e && (o.position = "static"), p.appendChild(mi), P = mi[_], p.removeChild(mi), o.position = "absolute", u && b && (C = yi(p), C.time = Ut.time, C.width = p[_]), Be(m ? P * n / y : P && n ? y / P * n : 0))))
    },
    Ar = function(e, t, r, i) {
        var n;
        return fo || $s(), t in br && t !== "transform" && (t = br[t], ~t.indexOf(",") && (t = t.split(",")[0])), zr[t] && t !== "transform" ? (n = vn(e, i), n = t !== "transformOrigin" ? n[t] : n.svg ? n.origin : ts(wr(e, hr)) + " " + n.zOrigin + "px") : (n = e.style[t], (!n || n === "auto" || i || ~(n + "").indexOf("calc(")) && (n = es[t] && es[t](e, t, r) || wr(e, t) || Sa(e, t) || (t === "opacity" ? 1 : 0))), r && !~(n + "").trim().indexOf(" ") ? $r(e, t, n, r) + r : n
    },
    Il = function(e, t, r, i) {
        if (!r || r === "none") {
            var n = Gi(t, e, 1),
                s = n && wr(e, n, 1);
            s && s !== r ? (t = n, r = s) : t === "borderColor" && (r = wr(e, "borderTopColor"))
        }
        var o = new At(this._pt, e.style, t, 0, 1, Ja),
            u = 0,
            l = 0,
            _, y, m, b, P, p, C, M, D, R, E, k;
        if (o.b = r, o.e = i, r += "", i += "", i === "auto" && (e.style[t] = i, i = wr(e, t) || i, e.style[t] = r), _ = [r, i], Ua(_), r = _[0], i = _[1], m = r.match(Li) || [], k = i.match(Li) || [], k.length) {
            for (; y = Li.exec(i);) C = y[0], D = i.substring(u, y.index), P ? P = (P + 1) % 5 : (D.substr(-5) === "rgba(" || D.substr(-5) === "hsla(") && (P = 1), C !== (p = m[l++] || "") && (b = parseFloat(p) || 0, E = p.substr((b + "").length), C.charAt(1) === "=" && (C = Bi(b, C) + E), M = parseFloat(C), R = C.substr((M + "").length), u = Li.lastIndex - R.length, R || (R = R || Wt.units[t] || E, u === i.length && (i += R, o.e += R)), E !== R && (b = $r(e, t, p, R) || 0), o._pt = {
                _next: o._pt,
                p: D || l === 1 ? D : ",",
                s: b,
                c: M - b,
                m: P && P < 4 || t === "zIndex" ? Math.round : 0
            });
            o.c = u < i.length ? i.substring(u, i.length) : ""
        } else o.r = t === "display" && i === "none" ? iu : ru;
        return ya.test(i) && (o.e = 0), this._pt = o, o
    },
    ca = {
        top: "0%",
        bottom: "100%",
        left: "0%",
        right: "100%",
        center: "50%"
    },
    Bl = function(e) {
        var t = e.split(" "),
            r = t[0],
            i = t[1] || "50%";
        return (r === "top" || r === "bottom" || i === "left" || i === "right") && (e = r, r = i, i = e), t[0] = ca[r] || r, t[1] = ca[i] || i, t.join(" ")
    },
    Nl = function(e, t) {
        if (t.tween && t.tween._time === t.tween._dur) {
            var r = t.t,
                i = r.style,
                n = t.u,
                s = r._gsap,
                o, u, l;
            if (n === "all" || n === !0) i.cssText = "", u = 1;
            else
                for (n = n.split(","), l = n.length; --l > -1;) o = n[l], zr[o] && (u = 1, o = o === "transformOrigin" ? hr : De), mn(r, o);
            u && (mn(r, De), s && (s.svg && r.removeAttribute("transform"), vn(r, 1), s.uncache = 1, nu(i)))
        }
    },
    es = {
        clearProps: function(e, t, r, i, n) {
            if (n.data !== "isFromStart") {
                var s = e._pt = new At(e._pt, t, r, 0, 0, Nl);
                return s.u = i, s.pr = -10, s.tween = n, e._props.push(r), 1
            }
        }
    },
    yn = [1, 0, 0, 1, 0, 0],
    lu = {},
    fu = function(e) {
        return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e
    },
    ha = function(e) {
        var t = wr(e, De);
        return fu(t) ? yn : t.substr(7).match(ma).map(Be)
    },
    _o = function(e, t) {
        var r = e._gsap || yi(e),
            i = e.style,
            n = ha(e),
            s, o, u, l;
        return r.svg && e.getAttribute("transform") ? (u = e.transform.baseVal.consolidate().matrix, n = [u.a, u.b, u.c, u.d, u.e, u.f], n.join(",") === "1,0,0,1,0,0" ? yn : n) : (n === yn && !e.offsetParent && e !== Ni && !r.svg && (u = i.display, i.display = "block", s = e.parentNode, (!s || !e.offsetParent) && (l = 1, o = e.nextElementSibling, Ni.appendChild(e)), n = ha(e), u ? i.display = u : mn(e, "display"), l && (o ? s.insertBefore(e, o) : s ? s.appendChild(e) : Ni.removeChild(e))), t && n.length > 6 ? [n[0], n[1], n[4], n[5], n[12], n[13]] : n)
    },
    Ks = function(e, t, r, i, n, s) {
        var o = e._gsap,
            u = n || _o(e, !0),
            l = o.xOrigin || 0,
            _ = o.yOrigin || 0,
            y = o.xOffset || 0,
            m = o.yOffset || 0,
            b = u[0],
            P = u[1],
            p = u[2],
            C = u[3],
            M = u[4],
            D = u[5],
            R = t.split(" "),
            E = parseFloat(R[0]) || 0,
            k = parseFloat(R[1]) || 0,
            z, L, F, A;
        r ? u !== yn && (L = b * C - P * p) && (F = E * (C / L) + k * (-p / L) + (p * D - C * M) / L, A = E * (-P / L) + k * (b / L) - (b * D - P * M) / L, E = F, k = A) : (z = au(e), E = z.x + (~R[0].indexOf("%") ? E / 100 * z.width : E), k = z.y + (~(R[1] || R[0]).indexOf("%") ? k / 100 * z.height : k)), i || i !== !1 && o.smooth ? (M = E - l, D = k - _, o.xOffset = y + (M * b + D * p) - M, o.yOffset = m + (M * P + D * C) - D) : o.xOffset = o.yOffset = 0, o.xOrigin = E, o.yOrigin = k, o.smooth = !!i, o.origin = t, o.originIsAbsolute = !!r, e.style[hr] = "0px 0px", s && (Wr(s, o, "xOrigin", l, E), Wr(s, o, "yOrigin", _, k), Wr(s, o, "xOffset", y, o.xOffset), Wr(s, o, "yOffset", m, o.yOffset)), e.setAttribute("data-svg-origin", E + " " + k)
    },
    vn = function(e, t) {
        var r = e._gsap || new qa(e);
        if ("x" in r && !t && !r.uncache) return r;
        var i = e.style,
            n = r.scaleX < 0,
            s = "px",
            o = "deg",
            u = getComputedStyle(e),
            l = wr(e, hr) || "0",
            _, y, m, b, P, p, C, M, D, R, E, k, z, L, F, A, Q, te, Z, re, ve, _e, Se, xe, ce, de, Ee, Ct, nr, Lr, Ht, _r;
        return _ = y = m = p = C = M = D = R = E = 0, b = P = 1, r.svg = !!(e.getCTM && uu(e)), u.translate && ((u.translate !== "none" || u.scale !== "none" || u.rotate !== "none") && (i[De] = (u.translate !== "none" ? "translate3d(" + (u.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (u.rotate !== "none" ? "rotate(" + u.rotate + ") " : "") + (u.scale !== "none" ? "scale(" + u.scale.split(" ").join(",") + ") " : "") + (u[De] !== "none" ? u[De] : "")), i.scale = i.rotate = i.translate = "none"), L = _o(e, r.svg), r.svg && (r.uncache ? (ce = e.getBBox(), l = r.xOrigin - ce.x + "px " + (r.yOrigin - ce.y) + "px", xe = "") : xe = !t && e.getAttribute("data-svg-origin"), Ks(e, xe || l, !!xe || r.originIsAbsolute, r.smooth !== !1, L)), k = r.xOrigin || 0, z = r.yOrigin || 0, L !== yn && (te = L[0], Z = L[1], re = L[2], ve = L[3], _ = _e = L[4], y = Se = L[5], L.length === 6 ? (b = Math.sqrt(te * te + Z * Z), P = Math.sqrt(ve * ve + re * re), p = te || Z ? zi(Z, te) * gi : 0, D = re || ve ? zi(re, ve) * gi + p : 0, D && (P *= Math.abs(Math.cos(D * Yi))), r.svg && (_ -= k - (k * te + z * re), y -= z - (k * Z + z * ve))) : (_r = L[6], Lr = L[7], Ee = L[8], Ct = L[9], nr = L[10], Ht = L[11], _ = L[12], y = L[13], m = L[14], F = zi(_r, nr), C = F * gi, F && (A = Math.cos(-F), Q = Math.sin(-F), xe = _e * A + Ee * Q, ce = Se * A + Ct * Q, de = _r * A + nr * Q, Ee = _e * -Q + Ee * A, Ct = Se * -Q + Ct * A, nr = _r * -Q + nr * A, Ht = Lr * -Q + Ht * A, _e = xe, Se = ce, _r = de), F = zi(-re, nr), M = F * gi, F && (A = Math.cos(-F), Q = Math.sin(-F), xe = te * A - Ee * Q, ce = Z * A - Ct * Q, de = re * A - nr * Q, Ht = ve * Q + Ht * A, te = xe, Z = ce, re = de), F = zi(Z, te), p = F * gi, F && (A = Math.cos(F), Q = Math.sin(F), xe = te * A + Z * Q, ce = _e * A + Se * Q, Z = Z * A - te * Q, Se = Se * A - _e * Q, te = xe, _e = ce), C && Math.abs(C) + Math.abs(p) > 359.9 && (C = p = 0, M = 180 - M), b = Be(Math.sqrt(te * te + Z * Z + re * re)), P = Be(Math.sqrt(Se * Se + _r * _r)), F = zi(_e, Se), D = Math.abs(F) > 2e-4 ? F * gi : 0, E = Ht ? 1 / (Ht < 0 ? -Ht : Ht) : 0), r.svg && (xe = e.getAttribute("transform"), r.forceCSS = e.setAttribute("transform", "") || !fu(wr(e, De)), xe && e.setAttribute("transform", xe))), Math.abs(D) > 90 && Math.abs(D) < 270 && (n ? (b *= -1, D += p <= 0 ? 180 : -180, p += p <= 0 ? 180 : -180) : (P *= -1, D += D <= 0 ? 180 : -180)), t = t || r.uncache, r.x = _ - ((r.xPercent = _ && (!t && r.xPercent || (Math.round(e.offsetWidth / 2) === Math.round(-_) ? -50 : 0))) ? e.offsetWidth * r.xPercent / 100 : 0) + s, r.y = y - ((r.yPercent = y && (!t && r.yPercent || (Math.round(e.offsetHeight / 2) === Math.round(-y) ? -50 : 0))) ? e.offsetHeight * r.yPercent / 100 : 0) + s, r.z = m + s, r.scaleX = Be(b), r.scaleY = Be(P), r.rotation = Be(p) + o, r.rotationX = Be(C) + o, r.rotationY = Be(M) + o, r.skewX = D + o, r.skewY = R + o, r.transformPerspective = E + s, (r.zOrigin = parseFloat(l.split(" ")[2]) || 0) && (i[hr] = ts(l)), r.xOffset = r.yOffset = 0, r.force3D = Wt.force3D, r.renderTransform = r.svg ? Xl : ou ? cu : Yl, r.uncache = 0, r
    },
    ts = function(e) {
        return (e = e.split(" "))[0] + " " + e[1]
    },
    Fs = function(e, t, r) {
        var i = ht(t);
        return Be(parseFloat(t) + parseFloat($r(e, "x", r + "px", i))) + i
    },
    Yl = function(e, t) {
        t.z = "0px", t.rotationY = t.rotationX = "0deg", t.force3D = 0, cu(e, t)
    },
    di = "0deg",
    an = "0px",
    pi = ") ",
    cu = function(e, t) {
        var r = t || this,
            i = r.xPercent,
            n = r.yPercent,
            s = r.x,
            o = r.y,
            u = r.z,
            l = r.rotation,
            _ = r.rotationY,
            y = r.rotationX,
            m = r.skewX,
            b = r.skewY,
            P = r.scaleX,
            p = r.scaleY,
            C = r.transformPerspective,
            M = r.force3D,
            D = r.target,
            R = r.zOrigin,
            E = "",
            k = M === "auto" && e && e !== 1 || M === !0;
        if (R && (y !== di || _ !== di)) {
            var z = parseFloat(_) * Yi,
                L = Math.sin(z),
                F = Math.cos(z),
                A;
            z = parseFloat(y) * Yi, A = Math.cos(z), s = Fs(D, s, L * A * -R), o = Fs(D, o, -Math.sin(z) * -R), u = Fs(D, u, F * A * -R + R)
        }
        C !== an && (E += "perspective(" + C + pi), (i || n) && (E += "translate(" + i + "%, " + n + "%) "), (k || s !== an || o !== an || u !== an) && (E += u !== an || k ? "translate3d(" + s + ", " + o + ", " + u + ") " : "translate(" + s + ", " + o + pi), l !== di && (E += "rotate(" + l + pi), _ !== di && (E += "rotateY(" + _ + pi), y !== di && (E += "rotateX(" + y + pi), (m !== di || b !== di) && (E += "skew(" + m + ", " + b + pi), (P !== 1 || p !== 1) && (E += "scale(" + P + ", " + p + pi), D.style[De] = E || "translate(0, 0)"
    },
    Xl = function(e, t) {
        var r = t || this,
            i = r.xPercent,
            n = r.yPercent,
            s = r.x,
            o = r.y,
            u = r.rotation,
            l = r.skewX,
            _ = r.skewY,
            y = r.scaleX,
            m = r.scaleY,
            b = r.target,
            P = r.xOrigin,
            p = r.yOrigin,
            C = r.xOffset,
            M = r.yOffset,
            D = r.forceCSS,
            R = parseFloat(s),
            E = parseFloat(o),
            k, z, L, F, A;
        u = parseFloat(u), l = parseFloat(l), _ = parseFloat(_), _ && (_ = parseFloat(_), l += _, u += _), u || l ? (u *= Yi, l *= Yi, k = Math.cos(u) * y, z = Math.sin(u) * y, L = Math.sin(u - l) * -m, F = Math.cos(u - l) * m, l && (_ *= Yi, A = Math.tan(l - _), A = Math.sqrt(1 + A * A), L *= A, F *= A, _ && (A = Math.tan(_), A = Math.sqrt(1 + A * A), k *= A, z *= A)), k = Be(k), z = Be(z), L = Be(L), F = Be(F)) : (k = y, F = m, z = L = 0), (R && !~(s + "").indexOf("px") || E && !~(o + "").indexOf("px")) && (R = $r(b, "x", s, "px"), E = $r(b, "y", o, "px")), (P || p || C || M) && (R = Be(R + P - (P * k + p * L) + C), E = Be(E + p - (P * z + p * F) + M)), (i || n) && (A = b.getBBox(), R = Be(R + i / 100 * A.width), E = Be(E + n / 100 * A.height)), A = "matrix(" + k + "," + z + "," + L + "," + F + "," + R + "," + E + ")", b.setAttribute("transform", A), D && (b.style[De] = A)
    },
    Vl = function(e, t, r, i, n) {
        var s = 360,
            o = et(n),
            u = parseFloat(n) * (o && ~n.indexOf("rad") ? gi : 1),
            l = u - i,
            _ = i + l + "deg",
            y, m;
        return o && (y = n.split("_")[1], y === "short" && (l %= s, l !== l % (s / 2) && (l += l < 0 ? s : -s)), y === "cw" && l < 0 ? l = (l + s * aa) % s - ~~(l / s) * s : y === "ccw" && l > 0 && (l = (l - s * aa) % s - ~~(l / s) * s)), e._pt = m = new At(e._pt, t, r, i, l, Cl), m.e = _, m.u = "deg", e._props.push(r), m
    },
    _a = function(e, t) {
        for (var r in t) e[r] = t[r];
        return e
    },
    Ul = function(e, t, r) {
        var i = _a({}, r._gsap),
            n = "perspective,force3D,transformOrigin,svgOrigin",
            s = r.style,
            o, u, l, _, y, m, b, P;
        i.svg ? (l = r.getAttribute("transform"), r.setAttribute("transform", ""), s[De] = t, o = vn(r, 1), mn(r, De), r.setAttribute("transform", l)) : (l = getComputedStyle(r)[De], s[De] = t, o = vn(r, 1), s[De] = l);
        for (u in zr) l = i[u], _ = o[u], l !== _ && n.indexOf(u) < 0 && (b = ht(l), P = ht(_), y = b !== P ? $r(r, u, l, P) : parseFloat(l), m = parseFloat(_), e._pt = new At(e._pt, o, u, y, m - y, Hs), e._pt.u = P || 0, e._props.push(u));
        _a(o, i)
    };
Rt("padding,margin,Width,Radius", function(c, e) {
    var t = "Top",
        r = "Right",
        i = "Bottom",
        n = "Left",
        s = (e < 3 ? [t, r, i, n] : [t + n, t + r, i + r, i + n]).map(function(o) {
            return e < 2 ? c + o : "border" + o + c
        });
    es[e > 1 ? "border" + c : c] = function(o, u, l, _, y) {
        var m, b;
        if (arguments.length < 4) return m = s.map(function(P) {
            return Ar(o, P, l)
        }), b = m.join(" "), b.split(m[0]).length === 5 ? m[0] : b;
        m = (_ + "").split(" "), b = {}, s.forEach(function(P, p) {
            return b[P] = m[p] = m[p] || m[(p - 1) / 2 | 0]
        }), o.init(u, b, y)
    }
});
var hu = {
    name: "css",
    register: $s,
    targetTest: function(e) {
        return e.style && e.nodeType
    },
    init: function(e, t, r, i, n) {
        var s = this._props,
            o = e.style,
            u = r.vars.startAt,
            l, _, y, m, b, P, p, C, M, D, R, E, k, z, L, F;
        fo || $s(), this.styles = this.styles || su(e), F = this.styles.props, this.tween = r;
        for (p in t)
            if (p !== "autoRound" && (_ = t[p], !(Vt[p] && $a(p, t, r, i, e, n)))) {
                if (b = typeof _, P = es[p], b === "function" && (_ = _.call(r, i, e, n), b = typeof _), b === "string" && ~_.indexOf("random(") && (_ = dn(_)), P) P(this, e, p, _, r) && (L = 1);
                else if (p.substr(0, 2) === "--") l = (getComputedStyle(e).getPropertyValue(p) + "").trim(), _ += "", Hr.lastIndex = 0, Hr.test(l) || (C = ht(l), M = ht(_)), M ? C !== M && (l = $r(e, p, l, M) + M) : C && (_ += C), this.add(o, "setProperty", l, _, i, n, 0, 0, p), s.push(p), F.push(p, 0, o[p]);
                else if (b !== "undefined") {
                    if (u && p in u ? (l = typeof u[p] == "function" ? u[p].call(r, i, e, n) : u[p], et(l) && ~l.indexOf("random(") && (l = dn(l)), ht(l + "") || (l += Wt.units[p] || ht(Ar(e, p)) || ""), (l + "").charAt(1) === "=" && (l = Ar(e, p))) : l = Ar(e, p), m = parseFloat(l), D = b === "string" && _.charAt(1) === "=" && _.substr(0, 2), D && (_ = _.substr(2)), y = parseFloat(_), p in br && (p === "autoAlpha" && (m === 1 && Ar(e, "visibility") === "hidden" && y && (m = 0), F.push("visibility", 0, o.visibility), Wr(this, o, "visibility", m ? "inherit" : "hidden", y ? "inherit" : "hidden", !y)), p !== "scale" && p !== "transform" && (p = br[p], ~p.indexOf(",") && (p = p.split(",")[0]))), R = p in zr, R) {
                        if (this.styles.save(p), E || (k = e._gsap, k.renderTransform && !t.parseTransform || vn(e, t.parseTransform), z = t.smoothOrigin !== !1 && k.smooth, E = this._pt = new At(this._pt, o, De, 0, 1, k.renderTransform, k, 0, -1), E.dep = 1), p === "scale") this._pt = new At(this._pt, k, "scaleY", k.scaleY, (D ? Bi(k.scaleY, D + y) : y) - k.scaleY || 0, Hs), this._pt.u = 0, s.push("scaleY", p), p += "X";
                        else if (p === "transformOrigin") {
                            F.push(hr, 0, o[hr]), _ = Bl(_), k.svg ? Ks(e, _, 0, z, 0, this) : (M = parseFloat(_.split(" ")[2]) || 0, M !== k.zOrigin && Wr(this, k, "zOrigin", k.zOrigin, M), Wr(this, o, p, ts(l), ts(_)));
                            continue
                        } else if (p === "svgOrigin") {
                            Ks(e, _, 1, z, 0, this);
                            continue
                        } else if (p in lu) {
                            Vl(this, k, p, m, D ? Bi(m, D + _) : _);
                            continue
                        } else if (p === "smoothOrigin") {
                            Wr(this, k, "smooth", k.smooth, _);
                            continue
                        } else if (p === "force3D") {
                            k[p] = _;
                            continue
                        } else if (p === "transform") {
                            Ul(this, _, e);
                            continue
                        }
                    } else p in o || (p = Gi(p) || p);
                    if (R || (y || y === 0) && (m || m === 0) && !Sl.test(_) && p in o) C = (l + "").substr((m + "").length), y || (y = 0), M = ht(_) || (p in Wt.units ? Wt.units[p] : C), C !== M && (m = $r(e, p, l, M)), this._pt = new At(this._pt, R ? k : o, p, m, (D ? Bi(m, D + y) : y) - m, !R && (M === "px" || p === "zIndex") && t.autoRound !== !1 ? Pl : Hs), this._pt.u = M || 0, C !== M && M !== "%" && (this._pt.b = l, this._pt.r = kl);
                    else if (p in o) Il.call(this, e, p, l, D ? D + _ : _);
                    else if (p in e) this.add(e, p, l || e[p], D ? D + _ : _, i, n);
                    else if (p !== "parseTransform") {
                        to(p, _);
                        continue
                    }
                    R || (p in o ? F.push(p, 0, o[p]) : F.push(p, 1, l || e[p])), s.push(p)
                }
            }
        L && eu(this)
    },
    render: function(e, t) {
        if (t.tween._time || !co())
            for (var r = t._pt; r;) r.r(e, r.d), r = r._next;
        else t.styles.revert()
    },
    get: Ar,
    aliases: br,
    getSetter: function(e, t, r) {
        var i = br[t];
        return i && i.indexOf(",") < 0 && (t = i), t in zr && t !== hr && (e._gsap.x || Ar(e, "x")) ? r && oa === r ? t === "scale" ? El : Dl : (oa = r || {}) && (t === "scale" ? Rl : Al) : e.style && !js(e.style[t]) ? Ol : ~t.indexOf("-") ? Ml : uo(e, t)
    },
    core: {
        _removeProperty: mn,
        _getMatrix: _o
    }
};
Ft.utils.checkPrefix = Gi;
Ft.core.getStyleSaver = su;
(function(c, e, t, r) {
    var i = Rt(c + "," + e + "," + t, function(n) {
        zr[n] = 1
    });
    Rt(e, function(n) {
        Wt.units[n] = "deg", lu[n] = 1
    }), br[i[13]] = c + "," + e, Rt(r, function(n) {
        var s = n.split(":");
        br[s[1]] = i[s[0]]
    })
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
Rt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(c) {
    Wt.units[c] = "px"
});
Ft.registerPlugin(hu);
var Wl = Ft.registerPlugin(hu) || Ft;
Wl.core.Tween;
var Qs = {
    exports: {}
};
(function(c, e) {
    (function(t, r) {
        r(e)
    })(Ou, function(t) {
        function r(v, a) {
            for (var d = 0; d < a.length; d++) {
                var f = a[d];
                f.enumerable = f.enumerable || !1, f.configurable = !0, "value" in f && (f.writable = !0), Object.defineProperty(v, f.key, f)
            }
        }

        function i(v, a, d) {
            return a && r(v.prototype, a), d && r(v, d), v
        }
        /*!
         * Observer 3.12.2
         * https://greensock.com
         *
         * @license Copyright 2008-2023, GreenSock. All rights reserved.
         * Subject to the terms at https://greensock.com/standard-license or for
         * Club GreenSock members, the agreement issued with that membership.
         * @author: Jack Doyle, jack@greensock.com
         */
        var n, s, o, u, l, _, y, m, b, P, p, C, M, D = function() {
                return n || typeof window < "u" && (n = window.gsap) && n.registerPlugin && n
            },
            R = 1,
            E = [],
            k = [],
            z = [],
            L = Date.now,
            F = function(a, d) {
                return d
            },
            A = function() {
                var a = b.core,
                    d = a.bridge || {},
                    f = a._scrollers,
                    h = a._proxies;
                f.push.apply(f, k), h.push.apply(h, z), k = f, z = h, F = function(T, w) {
                    return d[T](w)
                }
            },
            Q = function(a, d) {
                return ~z.indexOf(a) && z[z.indexOf(a) + 1][d]
            },
            te = function(a) {
                return !!~P.indexOf(a)
            },
            Z = function(a, d, f, h, g) {
                return a.addEventListener(d, f, {
                    passive: !h,
                    capture: !!g
                })
            },
            re = function(a, d, f, h) {
                return a.removeEventListener(d, f, !!h)
            },
            ve = "scrollLeft",
            _e = "scrollTop",
            Se = function() {
                return p && p.isPressed || k.cache++
            },
            xe = function(a, d) {
                var f = function h(g) {
                    if (g || g === 0) {
                        R && (o.history.scrollRestoration = "manual");
                        var T = p && p.isPressed;
                        g = h.v = Math.round(g) || (p && p.iOS ? 1 : 0), a(g), h.cacheID = k.cache, T && F("ss", g)
                    } else(d || k.cache !== h.cacheID || F("ref")) && (h.cacheID = k.cache, h.v = a());
                    return h.v + h.offset
                };
                return f.offset = 0, a && f
            },
            ce = {
                s: ve,
                p: "left",
                p2: "Left",
                os: "right",
                os2: "Right",
                d: "width",
                d2: "Width",
                a: "x",
                sc: xe(function(v) {
                    return arguments.length ? o.scrollTo(v, de.sc()) : o.pageXOffset || u[ve] || l[ve] || _[ve] || 0
                })
            },
            de = {
                s: _e,
                p: "top",
                p2: "Top",
                os: "bottom",
                os2: "Bottom",
                d: "height",
                d2: "Height",
                a: "y",
                op: ce,
                sc: xe(function(v) {
                    return arguments.length ? o.scrollTo(ce.sc(), v) : o.pageYOffset || u[_e] || l[_e] || _[_e] || 0
                })
            },
            Ee = function(a, d) {
                return (d && d._ctx && d._ctx.selector || n.utils.toArray)(a)[0] || (typeof a == "string" && n.config().nullTargetWarn !== !1 ? console.warn("Element not found:", a) : null)
            },
            Ct = function(a, d) {
                var f = d.s,
                    h = d.sc;
                te(a) && (a = u.scrollingElement || l);
                var g = k.indexOf(a),
                    T = h === de.sc ? 1 : 2;
                !~g && (g = k.push(a) - 1), k[g + T] || Z(a, "scroll", Se);
                var w = k[g + T],
                    I = w || (k[g + T] = xe(Q(a, f), !0) || (te(a) ? h : xe(function(G) {
                        return arguments.length ? a[f] = G : a[f]
                    })));
                return I.target = a, w || (I.smooth = n.getProperty(a, "scrollBehavior") === "smooth"), I
            },
            nr = function(a, d, f) {
                var h = a,
                    g = a,
                    T = L(),
                    w = T,
                    I = d || 50,
                    G = Math.max(500, I * 3),
                    ue = function(V, ze) {
                        var we = L();
                        ze || we - T > I ? (g = h, h = V, w = T, T = we) : f ? h += V : h = g + (V - g) / (we - w) * (T - w)
                    },
                    le = function() {
                        g = h = f ? 0 : h, w = T = 0
                    },
                    Y = function(V) {
                        var ze = w,
                            we = g,
                            qe = L();
                        return (V || V === 0) && V !== h && ue(V), T === w || qe - w > G ? 0 : (h + (f ? we : -we)) / ((f ? qe : T) - ze) * 1e3
                    };
                return {
                    update: ue,
                    reset: le,
                    getVelocity: Y
                }
            },
            Lr = function(a, d) {
                return d && !a._gsapAllow && a.preventDefault(), a.changedTouches ? a.changedTouches[0] : a
            },
            Ht = function(a) {
                var d = Math.max.apply(Math, a),
                    f = Math.min.apply(Math, a);
                return Math.abs(d) >= Math.abs(f) ? d : f
            },
            _r = function() {
                b = n.core.globals().ScrollTrigger, b && b.core && A()
            },
            po = function(a) {
                return n = a || D(), n && typeof document < "u" && document.body && (o = window, u = document, l = u.documentElement, _ = u.body, P = [o, u, l, _], n.utils.clamp, M = n.core.context || function() {}, m = "onpointerenter" in _ ? "pointer" : "mouse", y = Ne.isTouch = o.matchMedia && o.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in o || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0, C = Ne.eventTypes = ("ontouchstart" in l ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown" in l ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","), setTimeout(function() {
                    return R = 0
                }, 500), _r(), s = 1), s
            };
        ce.op = de, k.cache = 0;
        var Ne = function() {
            function v(d) {
                this.init(d)
            }
            var a = v.prototype;
            return a.init = function(f) {
                s || po(n) || console.warn("Please gsap.registerPlugin(Observer)"), b || _r();
                var h = f.tolerance,
                    g = f.dragMinimum,
                    T = f.type,
                    w = f.target,
                    I = f.lineHeight,
                    G = f.debounce,
                    ue = f.preventDefault,
                    le = f.onStop,
                    Y = f.onStopDelay,
                    O = f.ignore,
                    V = f.wheelSpeed,
                    ze = f.event,
                    we = f.onDragStart,
                    qe = f.onDragEnd,
                    ke = f.onDrag,
                    rt = f.onPress,
                    K = f.onRelease,
                    Qt = f.onRight,
                    Te = f.onLeft,
                    H = f.onUp,
                    vt = f.onDown,
                    kt = f.onChangeX,
                    X = f.onChangeY,
                    it = f.onChange,
                    q = f.onToggleX,
                    Pr = f.onToggleY,
                    $e = f.onHover,
                    xt = f.onHoverEnd,
                    bt = f.onMove,
                    pe = f.ignoreCheck,
                    Xe = f.isNormalizer,
                    Ve = f.onGestureStart,
                    x = f.onGestureEnd,
                    Ke = f.onWheel,
                    ni = f.onEnable,
                    Br = f.onDisable,
                    Zt = f.onClick,
                    Or = f.scrollSpeed,
                    wt = f.capture,
                    Ue = f.allowClicks,
                    Tt = f.lockAxis,
                    lt = f.onLockAxis;
                this.target = w = Ee(w) || l, this.vars = f, O && (O = n.utils.toArray(O)), h = h || 1e-9, g = g || 0, V = V || 1, Or = Or || 1, T = T || "wheel,touch,pointer", G = G !== !1, I || (I = parseFloat(o.getComputedStyle(_).lineHeight) || 22);
                var Nr, Pt, pr, fe, We, Ot, Bt, S = this,
                    Nt = 0,
                    Mr = 0,
                    si = Ct(w, ce),
                    Ge = Ct(w, de),
                    oi = si(),
                    ai = Ge(),
                    rn = ~T.indexOf("touch") && !~T.indexOf("pointer") && C[0] === "pointerdown",
                    nt = te(w),
                    Le = w.ownerDocument || u,
                    or = [0, 0, 0],
                    ar = [0, 0, 0],
                    ui = 0,
                    Dr = function() {
                        return ui = L()
                    },
                    gr = function(U, he) {
                        return (S.event = U) && O && ~O.indexOf(U.target) || he && rn && U.pointerType !== "touch" || pe && pe(U, he)
                    },
                    Mt = function() {
                        S._vx.reset(), S._vy.reset(), Pt.pause(), le && le(S)
                    },
                    li = function() {
                        var U = S.deltaX = Ht(or),
                            he = S.deltaY = Ht(ar),
                            Re = Math.abs(U) >= h,
                            N = Math.abs(he) >= h;
                        it && (Re || N) && it(S, U, he, or, ar), Re && (Qt && S.deltaX > 0 && Qt(S), Te && S.deltaX < 0 && Te(S), kt && kt(S), q && S.deltaX < 0 != Nt < 0 && q(S), Nt = S.deltaX, or[0] = or[1] = or[2] = 0), N && (vt && S.deltaY > 0 && vt(S), H && S.deltaY < 0 && H(S), X && X(S), Pr && S.deltaY < 0 != Mr < 0 && Pr(S), Mr = S.deltaY, ar[0] = ar[1] = ar[2] = 0), (fe || pr) && (bt && bt(S), pr && (ke(S), pr = !1), fe = !1), Ot && !(Ot = !1) && lt && lt(S), We && (Ke(S), We = !1), Nr = 0
                    },
                    Ri = function(U, he, Re) {
                        or[Re] += U, ar[Re] += he, S._vx.update(U), S._vy.update(he), G ? Nr || (Nr = requestAnimationFrame(li)) : li()
                    },
                    Ai = function(U, he) {
                        Tt && !Bt && (S.axis = Bt = Math.abs(U) > Math.abs(he) ? "x" : "y", Ot = !0), Bt !== "y" && (or[2] += U, S._vx.update(U, !0)), Bt !== "x" && (ar[2] += he, S._vy.update(he, !0)), G ? Nr || (Nr = requestAnimationFrame(li)) : li()
                    },
                    fi = function(U) {
                        if (!gr(U, 1)) {
                            U = Lr(U, ue);
                            var he = U.clientX,
                                Re = U.clientY,
                                N = he - S.x,
                                se = Re - S.y,
                                W = S.isDragging;
                            S.x = he, S.y = Re, (W || Math.abs(S.startX - he) >= g || Math.abs(S.startY - Re) >= g) && (ke && (pr = !0), W || (S.isDragging = !0), Ai(N, se), W || we && we(S))
                        }
                    },
                    Yr = S.onPress = function($) {
                        gr($, 1) || $ && $.button || (S.axis = Bt = null, Pt.pause(), S.isPressed = !0, $ = Lr($), Nt = Mr = 0, S.startX = S.x = $.clientX, S.startY = S.y = $.clientY, S._vx.reset(), S._vy.reset(), Z(Xe ? w : Le, C[1], fi, ue, !0), S.deltaX = S.deltaY = 0, rt && rt(S))
                    },
                    Xr = S.onRelease = function($) {
                        if (!gr($, 1)) {
                            re(Xe ? w : Le, C[1], fi, !0);
                            var U = !isNaN(S.y - S.startY),
                                he = S.isDragging && (Math.abs(S.x - S.startX) > 3 || Math.abs(S.y - S.startY) > 3),
                                Re = Lr($);
                            !he && U && (S._vx.reset(), S._vy.reset(), ue && Ue && n.delayedCall(.08, function() {
                                if (L() - ui > 300 && !$.defaultPrevented) {
                                    if ($.target.click) $.target.click();
                                    else if (Le.createEvent) {
                                        var N = Le.createEvent("MouseEvents");
                                        N.initMouseEvent("click", !0, !0, o, 1, Re.screenX, Re.screenY, Re.clientX, Re.clientY, !1, !1, !1, !1, 0, null), $.target.dispatchEvent(N)
                                    }
                                }
                            })), S.isDragging = S.isGesturing = S.isPressed = !1, le && !Xe && Pt.restart(!0), qe && he && qe(S), K && K(S, he)
                        }
                    },
                    oe = function(U) {
                        return U.touches && U.touches.length > 1 && (S.isGesturing = !0) && Ve(U, S.isDragging)
                    },
                    ci = function() {
                        return (S.isGesturing = !1) || x(S)
                    },
                    ur = function(U) {
                        if (!gr(U)) {
                            var he = si(),
                                Re = Ge();
                            Ri((he - oi) * Or, (Re - ai) * Or, 1), oi = he, ai = Re, le && Pt.restart(!0)
                        }
                    },
                    lr = function(U) {
                        if (!gr(U)) {
                            U = Lr(U, ue), Ke && (We = !0);
                            var he = (U.deltaMode === 1 ? I : U.deltaMode === 2 ? o.innerHeight : 1) * V;
                            Ri(U.deltaX * he, U.deltaY * he, 0), le && !Xe && Pt.restart(!0)
                        }
                    },
                    fr = function(U) {
                        if (!gr(U)) {
                            var he = U.clientX,
                                Re = U.clientY,
                                N = he - S.x,
                                se = Re - S.y;
                            S.x = he, S.y = Re, fe = !0, (N || se) && Ai(N, se)
                        }
                    },
                    hi = function(U) {
                        S.event = U, $e(S)
                    },
                    Fi = function(U) {
                        S.event = U, xt(S)
                    },
                    Er = function(U) {
                        return gr(U) || Lr(U, ue) && Zt(S)
                    };
                Pt = S._dc = n.delayedCall(Y || .25, Mt).pause(), S.deltaX = S.deltaY = 0, S._vx = nr(0, 50, !0), S._vy = nr(0, 50, !0), S.scrollX = si, S.scrollY = Ge, S.isDragging = S.isGesturing = S.isPressed = !1, M(this), S.enable = function($) {
                    return S.isEnabled || (Z(nt ? Le : w, "scroll", Se), T.indexOf("scroll") >= 0 && Z(nt ? Le : w, "scroll", ur, ue, wt), T.indexOf("wheel") >= 0 && Z(w, "wheel", lr, ue, wt), (T.indexOf("touch") >= 0 && y || T.indexOf("pointer") >= 0) && (Z(w, C[0], Yr, ue, wt), Z(Le, C[2], Xr), Z(Le, C[3], Xr), Ue && Z(w, "click", Dr, !1, !0), Zt && Z(w, "click", Er), Ve && Z(Le, "gesturestart", oe), x && Z(Le, "gestureend", ci), $e && Z(w, m + "enter", hi), xt && Z(w, m + "leave", Fi), bt && Z(w, m + "move", fr)), S.isEnabled = !0, $ && $.type && Yr($), ni && ni(S)), S
                }, S.disable = function() {
                    S.isEnabled && (E.filter(function($) {
                        return $ !== S && te($.target)
                    }).length || re(nt ? Le : w, "scroll", Se), S.isPressed && (S._vx.reset(), S._vy.reset(), re(Xe ? w : Le, C[1], fi, !0)), re(nt ? Le : w, "scroll", ur, wt), re(w, "wheel", lr, wt), re(w, C[0], Yr, wt), re(Le, C[2], Xr), re(Le, C[3], Xr), re(w, "click", Dr, !0), re(w, "click", Er), re(Le, "gesturestart", oe), re(Le, "gestureend", ci), re(w, m + "enter", hi), re(w, m + "leave", Fi), re(w, m + "move", fr), S.isEnabled = S.isPressed = S.isDragging = !1, Br && Br(S))
                }, S.kill = S.revert = function() {
                    S.disable();
                    var $ = E.indexOf(S);
                    $ >= 0 && E.splice($, 1), p === S && (p = 0)
                }, E.push(S), Xe && te(w) && (p = S), S.enable(ze)
            }, i(v, [{
                key: "velocityX",
                get: function() {
                    return this._vx.getVelocity()
                }
            }, {
                key: "velocityY",
                get: function() {
                    return this._vy.getVelocity()
                }
            }]), v
        }();
        Ne.version = "3.12.2", Ne.create = function(v) {
            return new Ne(v)
        }, Ne.register = po, Ne.getAll = function() {
            return E.slice()
        }, Ne.getById = function(v) {
            return E.filter(function(a) {
                return a.vars.id === v
            })[0]
        }, D() && n.registerPlugin(Ne);
        /*!
         * ScrollTrigger 3.12.2
         * https://greensock.com
         *
         * @license Copyright 2008-2023, GreenSock. All rights reserved.
         * Subject to the terms at https://greensock.com/standard-license or for
         * Club GreenSock members, the agreement issued with that membership.
         * @author: Jack Doyle, jack@greensock.com
         */
        var B, Si, ie, Ce, sr, be, go, bn, wn, Ci, Tn, Sn, ut, Cn, ss, pt, mo, yo, ki, vo, os, xo, zt, bo, wo, To, Ir, as, us, Pi, ls, fs, kn = 1,
            gt = Date.now,
            cs = gt(),
            qt = 0,
            Hi = 0,
            So = function(a, d, f) {
                var h = Lt(a) && (a.substr(0, 6) === "clamp(" || a.indexOf("max") > -1);
                return f["_" + d + "Clamp"] = h, h ? a.substr(6, a.length - 7) : a
            },
            Co = function(a, d) {
                return d && (!Lt(a) || a.substr(0, 6) !== "clamp(") ? "clamp(" + a + ")" : a
            },
            _u = function v() {
                return Hi && requestAnimationFrame(v)
            },
            ko = function() {
                return Cn = 1
            },
            Po = function() {
                return Cn = 0
            },
            dr = function(a) {
                return a
            },
            qi = function(a) {
                return Math.round(a * 1e5) / 1e5 || 0
            },
            Oo = function() {
                return typeof window < "u"
            },
            Mo = function() {
                return B || Oo() && (B = window.gsap) && B.registerPlugin && B
            },
            Qr = function(a) {
                return !!~go.indexOf(a)
            },
            Do = function(a) {
                return (a === "Height" ? ls : ie["inner" + a]) || sr["client" + a] || be["client" + a]
            },
            Eo = function(a) {
                return Q(a, "getBoundingClientRect") || (Qr(a) ? function() {
                    return Nn.width = ie.innerWidth, Nn.height = ls, Nn
                } : function() {
                    return Cr(a)
                })
            },
            du = function(a, d, f) {
                var h = f.d,
                    g = f.d2,
                    T = f.a;
                return (T = Q(a, "getBoundingClientRect")) ? function() {
                    return T()[h]
                } : function() {
                    return (d ? Do(g) : a["client" + g]) || 0
                }
            },
            pu = function(a, d) {
                return !d || ~z.indexOf(a) ? Eo(a) : function() {
                    return Nn
                }
            },
            Sr = function(a, d) {
                var f = d.s,
                    h = d.d2,
                    g = d.d,
                    T = d.a;
                return Math.max(0, (f = "scroll" + h) && (T = Q(a, f)) ? T() - Eo(a)()[g] : Qr(a) ? (sr[f] || be[f]) - Do(h) : a[f] - a["offset" + h])
            },
            Pn = function(a, d) {
                for (var f = 0; f < ki.length; f += 3)(!d || ~d.indexOf(ki[f + 1])) && a(ki[f], ki[f + 1], ki[f + 2])
            },
            Lt = function(a) {
                return typeof a == "string"
            },
            mt = function(a) {
                return typeof a == "function"
            },
            On = function(a) {
                return typeof a == "number"
            },
            Zr = function(a) {
                return typeof a == "object"
            },
            $i = function(a, d, f) {
                return a && a.progress(d ? 0 : 1) && f && a.pause()
            },
            hs = function(a, d) {
                if (a.enabled) {
                    var f = d(a);
                    f && f.totalTime && (a.callbackAnimation = f)
                }
            },
            Oi = Math.abs,
            Ro = "left",
            Ao = "top",
            _s = "right",
            ds = "bottom",
            jr = "width",
            Jr = "height",
            Ki = "Right",
            Qi = "Left",
            Zi = "Top",
            ji = "Bottom",
            Ye = "padding",
            $t = "margin",
            Mi = "Width",
            ps = "Height",
            tt = "px",
            Kt = function(a) {
                return ie.getComputedStyle(a)
            },
            gu = function(a) {
                var d = Kt(a).position;
                a.style.position = d === "absolute" || d === "fixed" ? d : "relative"
            },
            Fo = function(a, d) {
                for (var f in d) f in a || (a[f] = d[f]);
                return a
            },
            Cr = function(a, d) {
                var f = d && Kt(a)[ss] !== "matrix(1, 0, 0, 1, 0, 0)" && B.to(a, {
                        x: 0,
                        y: 0,
                        xPercent: 0,
                        yPercent: 0,
                        rotation: 0,
                        rotationX: 0,
                        rotationY: 0,
                        scale: 1,
                        skewX: 0,
                        skewY: 0
                    }).progress(1),
                    h = a.getBoundingClientRect();
                return f && f.progress(0).kill(), h
            },
            gs = function(a, d) {
                var f = d.d2;
                return a["offset" + f] || a["client" + f] || 0
            },
            zo = function(a) {
                var d = [],
                    f = a.labels,
                    h = a.duration(),
                    g;
                for (g in f) d.push(f[g] / h);
                return d
            },
            mu = function(a) {
                return function(d) {
                    return B.utils.snap(zo(a), d)
                }
            },
            ms = function(a) {
                var d = B.utils.snap(a),
                    f = Array.isArray(a) && a.slice(0).sort(function(h, g) {
                        return h - g
                    });
                return f ? function(h, g, T) {
                    T === void 0 && (T = .001);
                    var w;
                    if (!g) return d(h);
                    if (g > 0) {
                        for (h -= T, w = 0; w < f.length; w++)
                            if (f[w] >= h) return f[w];
                        return f[w - 1]
                    } else
                        for (w = f.length, h += T; w--;)
                            if (f[w] <= h) return f[w];
                    return f[0]
                } : function(h, g, T) {
                    T === void 0 && (T = .001);
                    var w = d(h);
                    return !g || Math.abs(w - h) < T || w - h < 0 == g < 0 ? w : d(g < 0 ? h - a : h + a)
                }
            },
            yu = function(a) {
                return function(d, f) {
                    return ms(zo(a))(d, f.direction)
                }
            },
            Mn = function(a, d, f, h) {
                return f.split(",").forEach(function(g) {
                    return a(d, g, h)
                })
            },
            Ze = function(a, d, f, h, g) {
                return a.addEventListener(d, f, {
                    passive: !h,
                    capture: !!g
                })
            },
            je = function(a, d, f, h) {
                return a.removeEventListener(d, f, !!h)
            },
            Dn = function(a, d, f) {
                f = f && f.wheelHandler, f && (a(d, "wheel", f), a(d, "touchmove", f))
            },
            Lo = {
                startColor: "green",
                endColor: "red",
                indent: 0,
                fontSize: "16px",
                fontWeight: "normal"
            },
            En = {
                toggleActions: "play",
                anticipatePin: 0
            },
            Rn = {
                top: 0,
                left: 0,
                center: .5,
                bottom: 1,
                right: 1
            },
            An = function(a, d) {
                if (Lt(a)) {
                    var f = a.indexOf("="),
                        h = ~f ? +(a.charAt(f - 1) + 1) * parseFloat(a.substr(f + 1)) : 0;
                    ~f && (a.indexOf("%") > f && (h *= d / 100), a = a.substr(0, f - 1)), a = h + (a in Rn ? Rn[a] * d : ~a.indexOf("%") ? parseFloat(a) * d / 100 : parseFloat(a) || 0)
                }
                return a
            },
            Fn = function(a, d, f, h, g, T, w, I) {
                var G = g.startColor,
                    ue = g.endColor,
                    le = g.fontSize,
                    Y = g.indent,
                    O = g.fontWeight,
                    V = Ce.createElement("div"),
                    ze = Qr(f) || Q(f, "pinType") === "fixed",
                    we = a.indexOf("scroller") !== -1,
                    qe = ze ? be : f,
                    ke = a.indexOf("start") !== -1,
                    rt = ke ? G : ue,
                    K = "border-color:" + rt + ";font-size:" + le + ";color:" + rt + ";font-weight:" + O + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
                return K += "position:" + ((we || I) && ze ? "fixed;" : "absolute;"), (we || I || !ze) && (K += (h === de ? _s : ds) + ":" + (T + parseFloat(Y)) + "px;"), w && (K += "box-sizing:border-box;text-align:left;width:" + w.offsetWidth + "px;"), V._isStart = ke, V.setAttribute("class", "gsap-marker-" + a + (d ? " marker-" + d : "")), V.style.cssText = K, V.innerText = d || d === 0 ? a + "-" + d : a, qe.children[0] ? qe.insertBefore(V, qe.children[0]) : qe.appendChild(V), V._offset = V["offset" + h.op.d2], zn(V, 0, h, ke), V
            },
            zn = function(a, d, f, h) {
                var g = {
                        display: "block"
                    },
                    T = f[h ? "os2" : "p2"],
                    w = f[h ? "p2" : "os2"];
                a._isFlipped = h, g[f.a + "Percent"] = h ? -100 : 0, g[f.a] = h ? "1px" : 0, g["border" + T + Mi] = 1, g["border" + w + Mi] = 0, g[f.p] = d + "px", B.set(a, g)
            },
            j = [],
            ys = {},
            Ji, Io = function() {
                return gt() - qt > 34 && (Ji || (Ji = requestAnimationFrame(kr)))
            },
            Di = function() {
                (!zt || !zt.isPressed || zt.startX > be.clientWidth) && (k.cache++, zt ? Ji || (Ji = requestAnimationFrame(kr)) : kr(), qt || ti("scrollStart"), qt = gt())
            },
            vs = function() {
                To = ie.innerWidth, wo = ie.innerHeight
            },
            en = function() {
                k.cache++, !ut && !xo && !Ce.fullscreenElement && !Ce.webkitFullscreenElement && (!bo || To !== ie.innerWidth || Math.abs(ie.innerHeight - wo) > ie.innerHeight * .25) && bn.restart(!0)
            },
            ei = {},
            vu = [],
            Bo = function v() {
                return je(J, "scrollEnd", v) || ii(!0)
            },
            ti = function(a) {
                return ei[a] && ei[a].map(function(d) {
                    return d()
                }) || vu
            },
            It = [],
            No = function(a) {
                for (var d = 0; d < It.length; d += 5)(!a || It[d + 4] && It[d + 4].query === a) && (It[d].style.cssText = It[d + 1], It[d].getBBox && It[d].setAttribute("transform", It[d + 2] || ""), It[d + 3].uncache = 1)
            },
            xs = function(a, d) {
                var f;
                for (pt = 0; pt < j.length; pt++) f = j[pt], f && (!d || f._ctx === d) && (a ? f.kill(1) : f.revert(!0, !0));
                d && No(d), d || ti("revert")
            },
            Yo = function(a, d) {
                k.cache++, (d || !yt) && k.forEach(function(f) {
                    return mt(f) && f.cacheID++ && (f.rec = 0)
                }), Lt(a) && (ie.history.scrollRestoration = us = a)
            },
            yt, ri = 0,
            Xo, xu = function() {
                if (Xo !== ri) {
                    var a = Xo = ri;
                    requestAnimationFrame(function() {
                        return a === ri && ii(!0)
                    })
                }
            },
            Vo = function() {
                be.appendChild(Pi), ls = Pi.offsetHeight || ie.innerHeight, be.removeChild(Pi)
            },
            ii = function(a, d) {
                if (qt && !a) {
                    Ze(J, "scrollEnd", Bo);
                    return
                }
                Vo(), yt = J.isRefreshing = !0, k.forEach(function(h) {
                    return mt(h) && ++h.cacheID && (h.rec = h())
                });
                var f = ti("refreshInit");
                vo && J.sort(), d || xs(), k.forEach(function(h) {
                    mt(h) && (h.smooth && (h.target.style.scrollBehavior = "auto"), h(0))
                }), j.slice(0).forEach(function(h) {
                    return h.refresh()
                }), j.forEach(function(h, g) {
                    if (h._subPinOffset && h.pin) {
                        var T = h.vars.horizontal ? "offsetWidth" : "offsetHeight",
                            w = h.pin[T];
                        h.revert(!0, 1), h.adjustPinSpacing(h.pin[T] - w), h.refresh()
                    }
                }), j.forEach(function(h) {
                    var g = Sr(h.scroller, h._dir);
                    (h.vars.end === "max" || h._endClamp && h.end > g) && h.setPositions(h.start, Math.max(h.start + 1, g), !0)
                }), f.forEach(function(h) {
                    return h && h.render && h.render(-1)
                }), k.forEach(function(h) {
                    mt(h) && (h.smooth && requestAnimationFrame(function() {
                        return h.target.style.scrollBehavior = "smooth"
                    }), h.rec && h(h.rec))
                }), Yo(us, 1), bn.pause(), ri++, yt = 2, kr(2), j.forEach(function(h) {
                    return mt(h.vars.onRefresh) && h.vars.onRefresh(h)
                }), yt = J.isRefreshing = !1, ti("refresh")
            },
            bs = 0,
            Ln = 1,
            tn, kr = function(a) {
                if (!yt || a === 2) {
                    J.isUpdating = !0, tn && tn.update(0);
                    var d = j.length,
                        f = gt(),
                        h = f - cs >= 50,
                        g = d && j[0].scroll();
                    if (Ln = bs > g ? -1 : 1, yt || (bs = g), h && (qt && !Cn && f - qt > 200 && (qt = 0, ti("scrollEnd")), Tn = cs, cs = f), Ln < 0) {
                        for (pt = d; pt-- > 0;) j[pt] && j[pt].update(0, h);
                        Ln = 1
                    } else
                        for (pt = 0; pt < d; pt++) j[pt] && j[pt].update(0, h);
                    J.isUpdating = !1
                }
                Ji = 0
            },
            ws = [Ro, Ao, ds, _s, $t + ji, $t + Ki, $t + Zi, $t + Qi, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"],
            In = ws.concat([jr, Jr, "boxSizing", "max" + Mi, "max" + ps, "position", $t, Ye, Ye + Zi, Ye + Ki, Ye + ji, Ye + Qi]),
            bu = function(a, d, f) {
                Ei(f);
                var h = a._gsap;
                if (h.spacerIsNative) Ei(h.spacerState);
                else if (a._gsap.swappedIn) {
                    var g = d.parentNode;
                    g && (g.insertBefore(a, d), g.removeChild(d))
                }
                a._gsap.swappedIn = !1
            },
            Ts = function(a, d, f, h) {
                if (!a._gsap.swappedIn) {
                    for (var g = ws.length, T = d.style, w = a.style, I; g--;) I = ws[g], T[I] = f[I];
                    T.position = f.position === "absolute" ? "absolute" : "relative", f.display === "inline" && (T.display = "inline-block"), w[ds] = w[_s] = "auto", T.flexBasis = f.flexBasis || "auto", T.overflow = "visible", T.boxSizing = "border-box", T[jr] = gs(a, ce) + tt, T[Jr] = gs(a, de) + tt, T[Ye] = w[$t] = w[Ao] = w[Ro] = "0", Ei(h), w[jr] = w["max" + Mi] = f[jr], w[Jr] = w["max" + ps] = f[Jr], w[Ye] = f[Ye], a.parentNode !== d && (a.parentNode.insertBefore(d, a), d.appendChild(a)), a._gsap.swappedIn = !0
                }
            },
            wu = /([A-Z])/g,
            Ei = function(a) {
                if (a) {
                    var d = a.t.style,
                        f = a.length,
                        h = 0,
                        g, T;
                    for ((a.t._gsap || B.core.getCache(a.t)).uncache = 1; h < f; h += 2) T = a[h + 1], g = a[h], T ? d[g] = T : d[g] && d.removeProperty(g.replace(wu, "-$1").toLowerCase())
                }
            },
            Bn = function(a) {
                for (var d = In.length, f = a.style, h = [], g = 0; g < d; g++) h.push(In[g], f[In[g]]);
                return h.t = a, h
            },
            Tu = function(a, d, f) {
                for (var h = [], g = a.length, T = f ? 8 : 0, w; T < g; T += 2) w = a[T], h.push(w, w in d ? d[w] : a[T + 1]);
                return h.t = a.t, h
            },
            Nn = {
                left: 0,
                top: 0
            },
            Uo = function(a, d, f, h, g, T, w, I, G, ue, le, Y, O, V) {
                mt(a) && (a = a(I)), Lt(a) && a.substr(0, 3) === "max" && (a = Y + (a.charAt(4) === "=" ? An("0" + a.substr(3), f) : 0));
                var ze = O ? O.time() : 0,
                    we, qe, ke;
                if (O && O.seek(0), isNaN(a) || (a = +a), On(a)) O && (a = B.utils.mapRange(O.scrollTrigger.start, O.scrollTrigger.end, 0, Y, a)), w && zn(w, f, h, !0);
                else {
                    mt(d) && (d = d(I));
                    var rt = (a || "0").split(" "),
                        K, Qt, Te, H;
                    ke = Ee(d, I) || be, K = Cr(ke) || {}, (!K || !K.left && !K.top) && Kt(ke).display === "none" && (H = ke.style.display, ke.style.display = "block", K = Cr(ke), H ? ke.style.display = H : ke.style.removeProperty("display")), Qt = An(rt[0], K[h.d]), Te = An(rt[1] || "0", f), a = K[h.p] - G[h.p] - ue + Qt + g - Te, w && zn(w, Te, h, f - Te < 20 || w._isStart && Te > 20), f -= f - Te
                }
                if (V && (I[V] = a || -.001, a < 0 && (a = 0)), T) {
                    var vt = a + f,
                        kt = T._isStart;
                    we = "scroll" + h.d2, zn(T, vt, h, kt && vt > 20 || !kt && (le ? Math.max(be[we], sr[we]) : T.parentNode[we]) <= vt + 1), le && (G = Cr(w), le && (T.style[h.op.p] = G[h.op.p] - h.op.m - T._offset + tt))
                }
                return O && ke && (we = Cr(ke), O.seek(Y), qe = Cr(ke), O._caScrollDist = we[h.p] - qe[h.p], a = a / O._caScrollDist * Y), O && O.seek(ze), O ? a : Math.round(a)
            },
            Su = /(webkit|moz|length|cssText|inset)/i,
            Wo = function(a, d, f, h) {
                if (a.parentNode !== d) {
                    var g = a.style,
                        T, w;
                    if (d === be) {
                        a._stOrig = g.cssText, w = Kt(a);
                        for (T in w) !+T && !Su.test(T) && w[T] && typeof g[T] == "string" && T !== "0" && (g[T] = w[T]);
                        g.top = f, g.left = h
                    } else g.cssText = a._stOrig;
                    B.core.getCache(a).uncache = 1, d.appendChild(a)
                }
            },
            Go = function(a, d, f) {
                var h = d,
                    g = h;
                return function(T) {
                    var w = Math.round(a());
                    return w !== h && w !== g && Math.abs(w - h) > 3 && Math.abs(w - g) > 3 && (T = w, f && f()), g = h, h = T, T
                }
            },
            Yn = function(a, d, f) {
                var h = {};
                h[d.p] = "+=" + f, B.set(a, h)
            },
            Ho = function(a, d) {
                var f = Ct(a, d),
                    h = "_scroll" + d.p2,
                    g = function T(w, I, G, ue, le) {
                        var Y = T.tween,
                            O = I.onComplete,
                            V = {};
                        G = G || f();
                        var ze = Go(f, G, function() {
                            Y.kill(), T.tween = 0
                        });
                        return le = ue && le || 0, ue = ue || w - G, Y && Y.kill(), I[h] = w, I.modifiers = V, V[h] = function() {
                            return ze(G + ue * Y.ratio + le * Y.ratio * Y.ratio)
                        }, I.onUpdate = function() {
                            k.cache++, kr()
                        }, I.onComplete = function() {
                            T.tween = 0, O && O.call(Y)
                        }, Y = T.tween = B.to(a, I), Y
                    };
                return a[h] = f, f.wheelHandler = function() {
                    return g.tween && g.tween.kill() && (g.tween = 0)
                }, Ze(a, "wheel", f.wheelHandler), J.isTouch && Ze(a, "touchmove", f.wheelHandler), g
            },
            J = function() {
                function v(d, f) {
                    Si || v.register(B) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), as(this), this.init(d, f)
                }
                var a = v.prototype;
                return a.init = function(f, h) {
                    if (this.progress = this.start = 0, this.vars && this.kill(!0, !0), !Hi) {
                        this.update = this.refresh = this.kill = dr;
                        return
                    }
                    f = Fo(Lt(f) || On(f) || f.nodeType ? {
                        trigger: f
                    } : f, En);
                    var g = f,
                        T = g.onUpdate,
                        w = g.toggleClass,
                        I = g.id,
                        G = g.onToggle,
                        ue = g.onRefresh,
                        le = g.scrub,
                        Y = g.trigger,
                        O = g.pin,
                        V = g.pinSpacing,
                        ze = g.invalidateOnRefresh,
                        we = g.anticipatePin,
                        qe = g.onScrubComplete,
                        ke = g.onSnapComplete,
                        rt = g.once,
                        K = g.snap,
                        Qt = g.pinReparent,
                        Te = g.pinSpacer,
                        H = g.containerAnimation,
                        vt = g.fastScrollEnd,
                        kt = g.preventOverlaps,
                        X = f.horizontal || f.containerAnimation && f.horizontal !== !1 ? ce : de,
                        it = !le && le !== 0,
                        q = Ee(f.scroller || ie),
                        Pr = B.core.getCache(q),
                        $e = Qr(q),
                        xt = ("pinType" in f ? f.pinType : Q(q, "pinType") || $e && "fixed") === "fixed",
                        bt = [f.onEnter, f.onLeave, f.onEnterBack, f.onLeaveBack],
                        pe = it && f.toggleActions.split(" "),
                        Xe = "markers" in f ? f.markers : En.markers,
                        Ve = $e ? 0 : parseFloat(Kt(q)["border" + X.p2 + Mi]) || 0,
                        x = this,
                        Ke = f.onRefreshInit && function() {
                            return f.onRefreshInit(x)
                        },
                        ni = du(q, $e, X),
                        Br = pu(q, $e),
                        Zt = 0,
                        Or = 0,
                        wt = 0,
                        Ue = Ct(q, X),
                        Tt, lt, Nr, Pt, pr, fe, We, Ot, Bt, S, Nt, Mr, si, Ge, oi, ai, rn, nt, Le, or, ar, ui, Dr, gr, Mt, li, Ri, Ai, fi, Yr, Xr, oe, ci, ur, lr, fr, hi, Fi, Er;
                    if (x._startClamp = x._endClamp = !1, x._dir = X, we *= 45, x.scroller = q, x.scroll = H ? H.time.bind(H) : Ue, Pt = Ue(), x.vars = f, h = h || f.animation, "refreshPriority" in f && (vo = 1, f.refreshPriority === -9999 && (tn = x)), Pr.tweenScroll = Pr.tweenScroll || {
                            top: Ho(q, de),
                            left: Ho(q, ce)
                        }, x.tweenTo = Tt = Pr.tweenScroll[X.p], x.scrubDuration = function(N) {
                            ci = On(N) && N, ci ? oe ? oe.duration(N) : oe = B.to(h, {
                                ease: "expo",
                                totalProgress: "+=0",
                                duration: ci,
                                paused: !0,
                                onComplete: function() {
                                    return qe && qe(x)
                                }
                            }) : (oe && oe.progress(1).kill(), oe = 0)
                        }, h && (h.vars.lazy = !1, h._initted && !x.isReverted || h.vars.immediateRender !== !1 && f.immediateRender !== !1 && h.duration() && h.render(0, !0, !0), x.animation = h.pause(), h.scrollTrigger = x, x.scrubDuration(le), Yr = 0, I || (I = h.vars.id)), K && ((!Zr(K) || K.push) && (K = {
                            snapTo: K
                        }), "scrollBehavior" in be.style && B.set($e ? [be, sr] : q, {
                            scrollBehavior: "auto"
                        }), k.forEach(function(N) {
                            return mt(N) && N.target === ($e ? Ce.scrollingElement || sr : q) && (N.smooth = !1)
                        }), Nr = mt(K.snapTo) ? K.snapTo : K.snapTo === "labels" ? mu(h) : K.snapTo === "labelsDirectional" ? yu(h) : K.directional !== !1 ? function(N, se) {
                            return ms(K.snapTo)(N, gt() - Or < 500 ? 0 : se.direction)
                        } : B.utils.snap(K.snapTo), ur = K.duration || {
                            min: .1,
                            max: 2
                        }, ur = Zr(ur) ? Ci(ur.min, ur.max) : Ci(ur, ur), lr = B.delayedCall(K.delay || ci / 2 || .1, function() {
                            var N = Ue(),
                                se = gt() - Or < 500,
                                W = Tt.tween;
                            if ((se || Math.abs(x.getVelocity()) < 10) && !W && !Cn && Zt !== N) {
                                var ee = (N - fe) / Ge,
                                    Je = h && !it ? h.totalProgress() : ee,
                                    ae = se ? 0 : (Je - Xr) / (gt() - Tn) * 1e3 || 0,
                                    Ie = B.utils.clamp(-ee, 1 - ee, Oi(ae / 2) * ae / .185),
                                    St = ee + (K.inertia === !1 ? 0 : Ie),
                                    st = Ci(0, 1, Nr(St, x)),
                                    Pe = Math.round(fe + st * Ge),
                                    ge = K,
                                    cr = ge.onStart,
                                    Oe = ge.onInterrupt,
                                    Yt = ge.onComplete;
                                if (N <= We && N >= fe && Pe !== N) {
                                    if (W && !W._initted && W.data <= Oi(Pe - N)) return;
                                    K.inertia === !1 && (Ie = st - ee), Tt(Pe, {
                                        duration: ur(Oi(Math.max(Oi(St - Je), Oi(st - Je)) * .185 / ae / .05 || 0)),
                                        ease: K.ease || "power3",
                                        data: Oi(Pe - N),
                                        onInterrupt: function() {
                                            return lr.restart(!0) && Oe && Oe(x)
                                        },
                                        onComplete: function() {
                                            x.update(), Zt = Ue(), Yr = Xr = h && !it ? h.totalProgress() : x.progress, ke && ke(x), Yt && Yt(x)
                                        }
                                    }, N, Ie * Ge, Pe - N - Ie * Ge), cr && cr(x, Tt.tween)
                                }
                            } else x.isActive && Zt !== N && lr.restart(!0)
                        }).pause()), I && (ys[I] = x), Y = x.trigger = Ee(Y || O !== !0 && O), Er = Y && Y._gsap && Y._gsap.stRevert, Er && (Er = Er(x)), O = O === !0 ? Y : Ee(O), Lt(w) && (w = {
                            targets: Y,
                            className: w
                        }), O && (V === !1 || V === $t || (V = !V && O.parentNode && O.parentNode.style && Kt(O.parentNode).display === "flex" ? !1 : Ye), x.pin = O, lt = B.core.getCache(O), lt.spacer ? oi = lt.pinState : (Te && (Te = Ee(Te), Te && !Te.nodeType && (Te = Te.current || Te.nativeElement), lt.spacerIsNative = !!Te, Te && (lt.spacerState = Bn(Te))), lt.spacer = nt = Te || Ce.createElement("div"), nt.classList.add("pin-spacer"), I && nt.classList.add("pin-spacer-" + I), lt.pinState = oi = Bn(O)), f.force3D !== !1 && B.set(O, {
                            force3D: !0
                        }), x.spacer = nt = lt.spacer, fi = Kt(O), gr = fi[V + X.os2], or = B.getProperty(O), ar = B.quickSetter(O, X.a, tt), Ts(O, nt, fi), rn = Bn(O)), Xe) {
                        Mr = Zr(Xe) ? Fo(Xe, Lo) : Lo, S = Fn("scroller-start", I, q, X, Mr, 0), Nt = Fn("scroller-end", I, q, X, Mr, 0, S), Le = S["offset" + X.op.d2];
                        var $ = Ee(Q(q, "content") || q);
                        Ot = this.markerStart = Fn("start", I, $, X, Mr, Le, 0, H), Bt = this.markerEnd = Fn("end", I, $, X, Mr, Le, 0, H), H && (Fi = B.quickSetter([Ot, Bt], X.a, tt)), !xt && !(z.length && Q(q, "fixedMarkers") === !0) && (gu($e ? be : q), B.set([S, Nt], {
                            force3D: !0
                        }), li = B.quickSetter(S, X.a, tt), Ai = B.quickSetter(Nt, X.a, tt))
                    }
                    if (H) {
                        var U = H.vars.onUpdate,
                            he = H.vars.onUpdateParams;
                        H.eventCallback("onUpdate", function() {
                            x.update(0, 0, 1), U && U.apply(H, he || [])
                        })
                    }
                    if (x.previous = function() {
                            return j[j.indexOf(x) - 1]
                        }, x.next = function() {
                            return j[j.indexOf(x) + 1]
                        }, x.revert = function(N, se) {
                            if (!se) return x.kill(!0);
                            var W = N !== !1 || !x.enabled,
                                ee = ut;
                            W !== x.isReverted && (W && (fr = Math.max(Ue(), x.scroll.rec || 0), wt = x.progress, hi = h && h.progress()), Ot && [Ot, Bt, S, Nt].forEach(function(Je) {
                                return Je.style.display = W ? "none" : "block"
                            }), W && (ut = x, x.update(W)), O && (!Qt || !x.isActive) && (W ? bu(O, nt, oi) : Ts(O, nt, Kt(O), Mt)), W || x.update(W), ut = ee, x.isReverted = W)
                        }, x.refresh = function(N, se, W, ee) {
                            if (!((ut || !x.enabled) && !se)) {
                                if (O && N && qt) {
                                    Ze(v, "scrollEnd", Bo);
                                    return
                                }!yt && Ke && Ke(x), ut = x, Tt.tween && !W && (Tt.tween.kill(), Tt.tween = 0), oe && oe.pause(), ze && h && h.revert({
                                    kill: !1
                                }).invalidate(), x.isReverted || x.revert(!0, !0), x._subPinOffset = !1;
                                var Je = ni(),
                                    ae = Br(),
                                    Ie = H ? H.duration() : Sr(q, X),
                                    St = Ge <= .01,
                                    st = 0,
                                    Pe = ee || 0,
                                    ge = Zr(W) ? W.end : f.end,
                                    cr = f.endTrigger || Y,
                                    Oe = Zr(W) ? W.start : f.start || (f.start === 0 || !Y ? 0 : O ? "0 0" : "0 100%"),
                                    Yt = x.pinnedContainer = f.pinnedContainer && Ee(f.pinnedContainer, x),
                                    mr = Y && Math.max(0, j.indexOf(x)) || 0,
                                    Xt = mr,
                                    ot, ft, _i, Vn, ct, Qe, yr, Cs, Zo, nn, vr, sn, Un;
                                for (Xe && Zr(W) && (sn = B.getProperty(S, X.p), Un = B.getProperty(Nt, X.p)); Xt--;) Qe = j[Xt], Qe.end || Qe.refresh(0, 1) || (ut = x), yr = Qe.pin, yr && (yr === Y || yr === O || yr === Yt) && !Qe.isReverted && (nn || (nn = []), nn.unshift(Qe), Qe.revert(!0, !0)), Qe !== j[Xt] && (mr--, Xt--);
                                for (mt(Oe) && (Oe = Oe(x)), Oe = So(Oe, "start", x), fe = Uo(Oe, Y, Je, X, Ue(), Ot, S, x, ae, Ve, xt, Ie, H, x._startClamp && "_startClamp") || (O ? -.001 : 0), mt(ge) && (ge = ge(x)), Lt(ge) && !ge.indexOf("+=") && (~ge.indexOf(" ") ? ge = (Lt(Oe) ? Oe.split(" ")[0] : "") + ge : (st = An(ge.substr(2), Je), ge = Lt(Oe) ? Oe : (H ? B.utils.mapRange(0, H.duration(), H.scrollTrigger.start, H.scrollTrigger.end, fe) : fe) + st, cr = Y)), ge = So(ge, "end", x), We = Math.max(fe, Uo(ge || (cr ? "100% 0" : Ie), cr, Je, X, Ue() + st, Bt, Nt, x, ae, Ve, xt, Ie, H, x._endClamp && "_endClamp")) || -.001, st = 0, Xt = mr; Xt--;) Qe = j[Xt], yr = Qe.pin, yr && Qe.start - Qe._pinPush <= fe && !H && Qe.end > 0 && (ot = Qe.end - (x._startClamp ? Math.max(0, Qe.start) : Qe.start), (yr === Y && Qe.start - Qe._pinPush < fe || yr === Yt) && isNaN(Oe) && (st += ot * (1 - Qe.progress)), yr === O && (Pe += ot));
                                if (fe += st, We += st, x._startClamp && (x._startClamp += st), x._endClamp && !yt && (x._endClamp = We || -.001, We = Math.min(We, Sr(q, X))), Ge = We - fe || (fe -= .01) && .001, St && (wt = B.utils.clamp(0, 1, B.utils.normalize(fe, We, fr))), x._pinPush = Pe, Ot && st && (ot = {}, ot[X.a] = "+=" + st, Yt && (ot[X.p] = "-=" + Ue()), B.set([Ot, Bt], ot)), O) ot = Kt(O), Vn = X === de, _i = Ue(), ui = parseFloat(or(X.a)) + Pe, !Ie && We > 1 && (vr = ($e ? Ce.scrollingElement || sr : q).style, vr = {
                                    style: vr,
                                    value: vr["overflow" + X.a.toUpperCase()]
                                }, $e && Kt(be)["overflow" + X.a.toUpperCase()] !== "scroll" && (vr.style["overflow" + X.a.toUpperCase()] = "scroll")), Ts(O, nt, ot), rn = Bn(O), ft = Cr(O, !0), Cs = xt && Ct(q, Vn ? ce : de)(), V && (Mt = [V + X.os2, Ge + Pe + tt], Mt.t = nt, Xt = V === Ye ? gs(O, X) + Ge + Pe : 0, Xt && Mt.push(X.d, Xt + tt), Ei(Mt), Yt && j.forEach(function(on) {
                                    on.pin === Yt && on.vars.pinSpacing !== !1 && (on._subPinOffset = !0)
                                }), xt && Ue(fr)), xt && (ct = {
                                    top: ft.top + (Vn ? _i - fe : Cs) + tt,
                                    left: ft.left + (Vn ? Cs : _i - fe) + tt,
                                    boxSizing: "border-box",
                                    position: "fixed"
                                }, ct[jr] = ct["max" + Mi] = Math.ceil(ft.width) + tt, ct[Jr] = ct["max" + ps] = Math.ceil(ft.height) + tt, ct[$t] = ct[$t + Zi] = ct[$t + Ki] = ct[$t + ji] = ct[$t + Qi] = "0", ct[Ye] = ot[Ye], ct[Ye + Zi] = ot[Ye + Zi], ct[Ye + Ki] = ot[Ye + Ki], ct[Ye + ji] = ot[Ye + ji], ct[Ye + Qi] = ot[Ye + Qi], ai = Tu(oi, ct, Qt), yt && Ue(0)), h ? (Zo = h._initted, os(1), h.render(h.duration(), !0, !0), Dr = or(X.a) - ui + Ge + Pe, Ri = Math.abs(Ge - Dr) > 1, xt && Ri && ai.splice(ai.length - 2, 2), h.render(0, !0, !0), Zo || h.invalidate(!0), h.parent || h.totalTime(h.totalTime()), os(0)) : Dr = Ge, vr && (vr.value ? vr.style["overflow" + X.a.toUpperCase()] = vr.value : vr.style.removeProperty("overflow-" + X.a));
                                else if (Y && Ue() && !H)
                                    for (ft = Y.parentNode; ft && ft !== be;) ft._pinOffset && (fe -= ft._pinOffset, We -= ft._pinOffset), ft = ft.parentNode;
                                nn && nn.forEach(function(on) {
                                    return on.revert(!1, !0)
                                }), x.start = fe, x.end = We, Pt = pr = yt ? fr : Ue(), !H && !yt && (Pt < fr && Ue(fr), x.scroll.rec = 0), x.revert(!1, !0), Or = gt(), lr && (Zt = -1, lr.restart(!0)), ut = 0, h && it && (h._initted || hi) && h.progress() !== hi && h.progress(hi || 0, !0).render(h.time(), !0, !0), (St || wt !== x.progress || H) && (h && !it && h.totalProgress(H && fe < -.001 && !wt ? B.utils.normalize(fe, We, 0) : wt, !0), x.progress = St || (Pt - fe) / Ge === wt ? 0 : wt), O && V && (nt._pinOffset = Math.round(x.progress * Dr)), oe && oe.invalidate(), isNaN(sn) || (sn -= B.getProperty(S, X.p), Un -= B.getProperty(Nt, X.p), Yn(S, X, sn), Yn(Ot, X, sn - (ee || 0)), Yn(Nt, X, Un), Yn(Bt, X, Un - (ee || 0))), St && !yt && x.update(), ue && !yt && !si && (si = !0, ue(x), si = !1)
                            }
                        }, x.getVelocity = function() {
                            return (Ue() - pr) / (gt() - Tn) * 1e3 || 0
                        }, x.endAnimation = function() {
                            $i(x.callbackAnimation), h && (oe ? oe.progress(1) : h.paused() ? it || $i(h, x.direction < 0, 1) : $i(h, h.reversed()))
                        }, x.labelToScroll = function(N) {
                            return h && h.labels && (fe || x.refresh() || fe) + h.labels[N] / h.duration() * Ge || 0
                        }, x.getTrailing = function(N) {
                            var se = j.indexOf(x),
                                W = x.direction > 0 ? j.slice(0, se).reverse() : j.slice(se + 1);
                            return (Lt(N) ? W.filter(function(ee) {
                                return ee.vars.preventOverlaps === N
                            }) : W).filter(function(ee) {
                                return x.direction > 0 ? ee.end <= fe : ee.start >= We
                            })
                        }, x.update = function(N, se, W) {
                            if (!(H && !W && !N)) {
                                var ee = yt === !0 ? fr : x.scroll(),
                                    Je = N ? 0 : (ee - fe) / Ge,
                                    ae = Je < 0 ? 0 : Je > 1 ? 1 : Je || 0,
                                    Ie = x.progress,
                                    St, st, Pe, ge, cr, Oe, Yt, mr;
                                if (se && (pr = Pt, Pt = H ? Ue() : ee, K && (Xr = Yr, Yr = h && !it ? h.totalProgress() : ae)), we && !ae && O && !ut && !kn && qt && fe < ee + (ee - pr) / (gt() - Tn) * we && (ae = 1e-4), ae !== Ie && x.enabled) {
                                    if (St = x.isActive = !!ae && ae < 1, st = !!Ie && Ie < 1, Oe = St !== st, cr = Oe || !!ae != !!Ie, x.direction = ae > Ie ? 1 : -1, x.progress = ae, cr && !ut && (Pe = ae && !Ie ? 0 : ae === 1 ? 1 : Ie === 1 ? 2 : 3, it && (ge = !Oe && pe[Pe + 1] !== "none" && pe[Pe + 1] || pe[Pe], mr = h && (ge === "complete" || ge === "reset" || ge in h))), kt && (Oe || mr) && (mr || le || !h) && (mt(kt) ? kt(x) : x.getTrailing(kt).forEach(function(_i) {
                                            return _i.endAnimation()
                                        })), it || (oe && !ut && !kn ? (oe._dp._time - oe._start !== oe._time && oe.render(oe._dp._time - oe._start), oe.resetTo ? oe.resetTo("totalProgress", ae, h._tTime / h._tDur) : (oe.vars.totalProgress = ae, oe.invalidate().restart())) : h && h.totalProgress(ae, !!(ut && (Or || N)))), O) {
                                        if (N && V && (nt.style[V + X.os2] = gr), !xt) ar(qi(ui + Dr * ae));
                                        else if (cr) {
                                            if (Yt = !N && ae > Ie && We + 1 > ee && ee + 1 >= Sr(q, X), Qt)
                                                if (!N && (St || Yt)) {
                                                    var Xt = Cr(O, !0),
                                                        ot = ee - fe;
                                                    Wo(O, be, Xt.top + (X === de ? ot : 0) + tt, Xt.left + (X === de ? 0 : ot) + tt)
                                                } else Wo(O, nt);
                                            Ei(St || Yt ? ai : rn), Ri && ae < 1 && St || ar(ui + (ae === 1 && !Yt ? Dr : 0))
                                        }
                                    }
                                    K && !Tt.tween && !ut && !kn && lr.restart(!0), w && (Oe || rt && ae && (ae < 1 || !fs)) && wn(w.targets).forEach(function(_i) {
                                        return _i.classList[St || rt ? "add" : "remove"](w.className)
                                    }), T && !it && !N && T(x), cr && !ut ? (it && (mr && (ge === "complete" ? h.pause().totalProgress(1) : ge === "reset" ? h.restart(!0).pause() : ge === "restart" ? h.restart(!0) : h[ge]()), T && T(x)), (Oe || !fs) && (G && Oe && hs(x, G), bt[Pe] && hs(x, bt[Pe]), rt && (ae === 1 ? x.kill(!1, 1) : bt[Pe] = 0), Oe || (Pe = ae === 1 ? 1 : 3, bt[Pe] && hs(x, bt[Pe]))), vt && !St && Math.abs(x.getVelocity()) > (On(vt) ? vt : 2500) && ($i(x.callbackAnimation), oe ? oe.progress(1) : $i(h, ge === "reverse" ? 1 : !ae, 1))) : it && T && !ut && T(x)
                                }
                                if (Ai) {
                                    var ft = H ? ee / H.duration() * (H._caScrollDist || 0) : ee;
                                    li(ft + (S._isFlipped ? 1 : 0)), Ai(ft)
                                }
                                Fi && Fi(-ee / H.duration() * (H._caScrollDist || 0))
                            }
                        }, x.enable = function(N, se) {
                            x.enabled || (x.enabled = !0, Ze(q, "resize", en), $e || Ze(q, "scroll", Di), Ke && Ze(v, "refreshInit", Ke), N !== !1 && (x.progress = wt = 0, Pt = pr = Zt = Ue()), se !== !1 && x.refresh())
                        }, x.getTween = function(N) {
                            return N && Tt ? Tt.tween : oe
                        }, x.setPositions = function(N, se, W, ee) {
                            if (H) {
                                var Je = H.scrollTrigger,
                                    ae = H.duration(),
                                    Ie = Je.end - Je.start;
                                N = Je.start + Ie * N / ae, se = Je.start + Ie * se / ae
                            }
                            x.refresh(!1, !1, {
                                start: Co(N, W && !!x._startClamp),
                                end: Co(se, W && !!x._endClamp)
                            }, ee), x.update()
                        }, x.adjustPinSpacing = function(N) {
                            if (Mt && N) {
                                var se = Mt.indexOf(X.d) + 1;
                                Mt[se] = parseFloat(Mt[se]) + N + tt, Mt[1] = parseFloat(Mt[1]) + N + tt, Ei(Mt)
                            }
                        }, x.disable = function(N, se) {
                            if (x.enabled && (N !== !1 && x.revert(!0, !0), x.enabled = x.isActive = !1, se || oe && oe.pause(), fr = 0, lt && (lt.uncache = 1), Ke && je(v, "refreshInit", Ke), lr && (lr.pause(), Tt.tween && Tt.tween.kill() && (Tt.tween = 0)), !$e)) {
                                for (var W = j.length; W--;)
                                    if (j[W].scroller === q && j[W] !== x) return;
                                je(q, "resize", en), $e || je(q, "scroll", Di)
                            }
                        }, x.kill = function(N, se) {
                            x.disable(N, se), oe && !se && oe.kill(), I && delete ys[I];
                            var W = j.indexOf(x);
                            W >= 0 && j.splice(W, 1), W === pt && Ln > 0 && pt--, W = 0, j.forEach(function(ee) {
                                return ee.scroller === x.scroller && (W = 1)
                            }), W || yt || (x.scroll.rec = 0), h && (h.scrollTrigger = null, N && h.revert({
                                kill: !1
                            }), se || h.kill()), Ot && [Ot, Bt, S, Nt].forEach(function(ee) {
                                return ee.parentNode && ee.parentNode.removeChild(ee)
                            }), tn === x && (tn = 0), O && (lt && (lt.uncache = 1), W = 0, j.forEach(function(ee) {
                                return ee.pin === O && W++
                            }), W || (lt.spacer = 0)), f.onKill && f.onKill(x)
                        }, j.push(x), x.enable(!1, !1), Er && Er(x), h && h.add && !Ge) {
                        var Re = x.update;
                        x.update = function() {
                            x.update = Re, fe || We || x.refresh()
                        }, B.delayedCall(.01, x.update), Ge = .01, fe = We = 0
                    } else x.refresh();
                    O && xu()
                }, v.register = function(f) {
                    return Si || (B = f || Mo(), Oo() && window.document && v.enable(), Si = Hi), Si
                }, v.defaults = function(f) {
                    if (f)
                        for (var h in f) En[h] = f[h];
                    return En
                }, v.disable = function(f, h) {
                    Hi = 0, j.forEach(function(T) {
                        return T[h ? "kill" : "disable"](f)
                    }), je(ie, "wheel", Di), je(Ce, "scroll", Di), clearInterval(Sn), je(Ce, "touchcancel", dr), je(be, "touchstart", dr), Mn(je, Ce, "pointerdown,touchstart,mousedown", ko), Mn(je, Ce, "pointerup,touchend,mouseup", Po), bn.kill(), Pn(je);
                    for (var g = 0; g < k.length; g += 3) Dn(je, k[g], k[g + 1]), Dn(je, k[g], k[g + 2])
                }, v.enable = function() {
                    if (ie = window, Ce = document, sr = Ce.documentElement, be = Ce.body, B && (wn = B.utils.toArray, Ci = B.utils.clamp, as = B.core.context || dr, os = B.core.suppressOverwrites || dr, us = ie.history.scrollRestoration || "auto", bs = ie.pageYOffset, B.core.globals("ScrollTrigger", v), be)) {
                        Hi = 1, Pi = document.createElement("div"), Pi.style.height = "100vh", Pi.style.position = "absolute", Vo(), _u(), Ne.register(B), v.isTouch = Ne.isTouch, Ir = Ne.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent), Ze(ie, "wheel", Di), go = [ie, Ce, sr, be], B.matchMedia ? (v.matchMedia = function(I) {
                            var G = B.matchMedia(),
                                ue;
                            for (ue in I) G.add(ue, I[ue]);
                            return G
                        }, B.addEventListener("matchMediaInit", function() {
                            return xs()
                        }), B.addEventListener("matchMediaRevert", function() {
                            return No()
                        }), B.addEventListener("matchMedia", function() {
                            ii(0, 1), ti("matchMedia")
                        }), B.matchMedia("(orientation: portrait)", function() {
                            return vs(), vs
                        })) : console.warn("Requires GSAP 3.11.0 or later"), vs(), Ze(Ce, "scroll", Di);
                        var f = be.style,
                            h = f.borderTopStyle,
                            g = B.core.Animation.prototype,
                            T, w;
                        for (g.revert || Object.defineProperty(g, "revert", {
                                value: function() {
                                    return this.time(-.01, !0)
                                }
                            }), f.borderTopStyle = "solid", T = Cr(be), de.m = Math.round(T.top + de.sc()) || 0, ce.m = Math.round(T.left + ce.sc()) || 0, h ? f.borderTopStyle = h : f.removeProperty("border-top-style"), Sn = setInterval(Io, 250), B.delayedCall(.5, function() {
                                return kn = 0
                            }), Ze(Ce, "touchcancel", dr), Ze(be, "touchstart", dr), Mn(Ze, Ce, "pointerdown,touchstart,mousedown", ko), Mn(Ze, Ce, "pointerup,touchend,mouseup", Po), ss = B.utils.checkPrefix("transform"), In.push(ss), Si = gt(), bn = B.delayedCall(.2, ii).pause(), ki = [Ce, "visibilitychange", function() {
                                var I = ie.innerWidth,
                                    G = ie.innerHeight;
                                Ce.hidden ? (mo = I, yo = G) : (mo !== I || yo !== G) && en()
                            }, Ce, "DOMContentLoaded", ii, ie, "load", ii, ie, "resize", en], Pn(Ze), j.forEach(function(I) {
                                return I.enable(0, 1)
                            }), w = 0; w < k.length; w += 3) Dn(je, k[w], k[w + 1]), Dn(je, k[w], k[w + 2])
                    }
                }, v.config = function(f) {
                    "limitCallbacks" in f && (fs = !!f.limitCallbacks);
                    var h = f.syncInterval;
                    h && clearInterval(Sn) || (Sn = h) && setInterval(Io, h), "ignoreMobileResize" in f && (bo = v.isTouch === 1 && f.ignoreMobileResize), "autoRefreshEvents" in f && (Pn(je) || Pn(Ze, f.autoRefreshEvents || "none"), xo = (f.autoRefreshEvents + "").indexOf("resize") === -1)
                }, v.scrollerProxy = function(f, h) {
                    var g = Ee(f),
                        T = k.indexOf(g),
                        w = Qr(g);
                    ~T && k.splice(T, w ? 6 : 2), h && (w ? z.unshift(ie, h, be, h, sr, h) : z.unshift(g, h))
                }, v.clearMatchMedia = function(f) {
                    j.forEach(function(h) {
                        return h._ctx && h._ctx.query === f && h._ctx.kill(!0, !0)
                    })
                }, v.isInViewport = function(f, h, g) {
                    var T = (Lt(f) ? Ee(f) : f).getBoundingClientRect(),
                        w = T[g ? jr : Jr] * h || 0;
                    return g ? T.right - w > 0 && T.left + w < ie.innerWidth : T.bottom - w > 0 && T.top + w < ie.innerHeight
                }, v.positionInViewport = function(f, h, g) {
                    Lt(f) && (f = Ee(f));
                    var T = f.getBoundingClientRect(),
                        w = T[g ? jr : Jr],
                        I = h == null ? w / 2 : h in Rn ? Rn[h] * w : ~h.indexOf("%") ? parseFloat(h) * w / 100 : parseFloat(h) || 0;
                    return g ? (T.left + I) / ie.innerWidth : (T.top + I) / ie.innerHeight
                }, v.killAll = function(f) {
                    if (j.slice(0).forEach(function(g) {
                            return g.vars.id !== "ScrollSmoother" && g.kill()
                        }), f !== !0) {
                        var h = ei.killAll || [];
                        ei = {}, h.forEach(function(g) {
                            return g()
                        })
                    }
                }, v
            }();
        J.version = "3.12.2", J.saveStyles = function(v) {
            return v ? wn(v).forEach(function(a) {
                if (a && a.style) {
                    var d = It.indexOf(a);
                    d >= 0 && It.splice(d, 5), It.push(a, a.style.cssText, a.getBBox && a.getAttribute("transform"), B.core.getCache(a), as())
                }
            }) : It
        }, J.revert = function(v, a) {
            return xs(!v, a)
        }, J.create = function(v, a) {
            return new J(v, a)
        }, J.refresh = function(v) {
            return v ? en() : (Si || J.register()) && ii(!0)
        }, J.update = function(v) {
            return ++k.cache && kr(v === !0 ? 2 : 0)
        }, J.clearScrollMemory = Yo, J.maxScroll = function(v, a) {
            return Sr(v, a ? ce : de)
        }, J.getScrollFunc = function(v, a) {
            return Ct(Ee(v), a ? ce : de)
        }, J.getById = function(v) {
            return ys[v]
        }, J.getAll = function() {
            return j.filter(function(v) {
                return v.vars.id !== "ScrollSmoother"
            })
        }, J.isScrolling = function() {
            return !!qt
        }, J.snapDirectional = ms, J.addEventListener = function(v, a) {
            var d = ei[v] || (ei[v] = []);
            ~d.indexOf(a) || d.push(a)
        }, J.removeEventListener = function(v, a) {
            var d = ei[v],
                f = d && d.indexOf(a);
            f >= 0 && d.splice(f, 1)
        }, J.batch = function(v, a) {
            var d = [],
                f = {},
                h = a.interval || .016,
                g = a.batchMax || 1e9,
                T = function(G, ue) {
                    var le = [],
                        Y = [],
                        O = B.delayedCall(h, function() {
                            ue(le, Y), le = [], Y = []
                        }).pause();
                    return function(V) {
                        le.length || O.restart(!0), le.push(V.trigger), Y.push(V), g <= le.length && O.progress(1)
                    }
                },
                w;
            for (w in a) f[w] = w.substr(0, 2) === "on" && mt(a[w]) && w !== "onRefreshInit" ? T(w, a[w]) : a[w];
            return mt(g) && (g = g(), Ze(J, "refresh", function() {
                return g = a.batchMax()
            })), wn(v).forEach(function(I) {
                var G = {};
                for (w in f) G[w] = f[w];
                G.trigger = I, d.push(J.create(G))
            }), d
        };
        var qo = function(a, d, f, h) {
                return d > h ? a(h) : d < 0 && a(0), f > h ? (h - d) / (f - d) : f < 0 ? d / (d - f) : 1
            },
            Ss = function v(a, d) {
                d === !0 ? a.style.removeProperty("touch-action") : a.style.touchAction = d === !0 ? "auto" : d ? "pan-" + d + (Ne.isTouch ? " pinch-zoom" : "") : "none", a === sr && v(be, d)
            },
            Xn = {
                auto: 1,
                scroll: 1
            },
            Cu = function(a) {
                var d = a.event,
                    f = a.target,
                    h = a.axis,
                    g = (d.changedTouches ? d.changedTouches[0] : d).target,
                    T = g._gsap || B.core.getCache(g),
                    w = gt(),
                    I;
                if (!T._isScrollT || w - T._isScrollT > 2e3) {
                    for (; g && g !== be && (g.scrollHeight <= g.clientHeight && g.scrollWidth <= g.clientWidth || !(Xn[(I = Kt(g)).overflowY] || Xn[I.overflowX]));) g = g.parentNode;
                    T._isScroll = g && g !== f && !Qr(g) && (Xn[(I = Kt(g)).overflowY] || Xn[I.overflowX]), T._isScrollT = w
                }(T._isScroll || h === "x") && (d.stopPropagation(), d._gsapAllow = !0)
            },
            $o = function(a, d, f, h) {
                return Ne.create({
                    target: a,
                    capture: !0,
                    debounce: !1,
                    lockAxis: !0,
                    type: d,
                    onWheel: h = h && Cu,
                    onPress: h,
                    onDrag: h,
                    onScroll: h,
                    onEnable: function() {
                        return f && Ze(Ce, Ne.eventTypes[0], Qo, !1, !0)
                    },
                    onDisable: function() {
                        return je(Ce, Ne.eventTypes[0], Qo, !0)
                    }
                })
            },
            ku = /(input|label|select|textarea)/i,
            Ko, Qo = function(a) {
                var d = ku.test(a.target.tagName);
                (d || Ko) && (a._gsapAllow = !0, Ko = d)
            },
            Pu = function(a) {
                Zr(a) || (a = {}), a.preventDefault = a.isNormalizer = a.allowClicks = !0, a.type || (a.type = "wheel,touch"), a.debounce = !!a.debounce, a.id = a.id || "normalizer";
                var d = a,
                    f = d.normalizeScrollX,
                    h = d.momentum,
                    g = d.allowNestedScroll,
                    T = d.onRelease,
                    w, I, G = Ee(a.target) || sr,
                    ue = B.core.globals().ScrollSmoother,
                    le = ue && ue.get(),
                    Y = Ir && (a.content && Ee(a.content) || le && a.content !== !1 && !le.smooth() && le.content()),
                    O = Ct(G, de),
                    V = Ct(G, ce),
                    ze = 1,
                    we = (Ne.isTouch && ie.visualViewport ? ie.visualViewport.scale * ie.visualViewport.width : ie.outerWidth) / ie.innerWidth,
                    qe = 0,
                    ke = mt(h) ? function() {
                        return h(w)
                    } : function() {
                        return h || 2.8
                    },
                    rt, K, Qt = $o(G, a.type, !0, g),
                    Te = function() {
                        return K = !1
                    },
                    H = dr,
                    vt = dr,
                    kt = function() {
                        I = Sr(G, de), vt = Ci(Ir ? 1 : 0, I), f && (H = Ci(0, Sr(G, ce))), rt = ri
                    },
                    X = function() {
                        Y._gsap.y = qi(parseFloat(Y._gsap.y) + O.offset) + "px", Y.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(Y._gsap.y) + ", 0, 1)", O.offset = O.cacheID = 0
                    },
                    it = function() {
                        if (K) {
                            requestAnimationFrame(Te);
                            var Xe = qi(w.deltaY / 2),
                                Ve = vt(O.v - Xe);
                            if (Y && Ve !== O.v + O.offset) {
                                O.offset = Ve - O.v;
                                var x = qi((parseFloat(Y && Y._gsap.y) || 0) - O.offset);
                                Y.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + x + ", 0, 1)", Y._gsap.y = x + "px", O.cacheID = k.cache, kr()
                            }
                            return !0
                        }
                        O.offset && X(), K = !0
                    },
                    q, Pr, $e, xt, bt = function() {
                        kt(), q.isActive() && q.vars.scrollY > I && (O() > I ? q.progress(1) && O(I) : q.resetTo("scrollY", I))
                    };
                return Y && B.set(Y, {
                    y: "+=0"
                }), a.ignoreCheck = function(pe) {
                    return Ir && pe.type === "touchmove" && it() || ze > 1.05 && pe.type !== "touchstart" || w.isGesturing || pe.touches && pe.touches.length > 1
                }, a.onPress = function() {
                    K = !1;
                    var pe = ze;
                    ze = qi((ie.visualViewport && ie.visualViewport.scale || 1) / we), q.pause(), pe !== ze && Ss(G, ze > 1.01 ? !0 : f ? !1 : "x"), Pr = V(), $e = O(), kt(), rt = ri
                }, a.onRelease = a.onGestureStart = function(pe, Xe) {
                    if (O.offset && X(), !Xe) xt.restart(!0);
                    else {
                        k.cache++;
                        var Ve = ke(),
                            x, Ke;
                        f && (x = V(), Ke = x + Ve * .05 * -pe.velocityX / .227, Ve *= qo(V, x, Ke, Sr(G, ce)), q.vars.scrollX = H(Ke)), x = O(), Ke = x + Ve * .05 * -pe.velocityY / .227, Ve *= qo(O, x, Ke, Sr(G, de)), q.vars.scrollY = vt(Ke), q.invalidate().duration(Ve).play(.01), (Ir && q.vars.scrollY >= I || x >= I - 1) && B.to({}, {
                            onUpdate: bt,
                            duration: Ve
                        })
                    }
                    T && T(pe)
                }, a.onWheel = function() {
                    q._ts && q.pause(), gt() - qe > 1e3 && (rt = 0, qe = gt())
                }, a.onChange = function(pe, Xe, Ve, x, Ke) {
                    if (ri !== rt && kt(), Xe && f && V(H(x[2] === Xe ? Pr + (pe.startX - pe.x) : V() + Xe - x[1])), Ve) {
                        O.offset && X();
                        var ni = Ke[2] === Ve,
                            Br = ni ? $e + pe.startY - pe.y : O() + Ve - Ke[1],
                            Zt = vt(Br);
                        ni && Br !== Zt && ($e += Zt - Br), O(Zt)
                    }(Ve || Xe) && kr()
                }, a.onEnable = function() {
                    Ss(G, f ? !1 : "x"), J.addEventListener("refresh", bt), Ze(ie, "resize", bt), O.smooth && (O.target.style.scrollBehavior = "auto", O.smooth = V.smooth = !1), Qt.enable()
                }, a.onDisable = function() {
                    Ss(G, !0), je(ie, "resize", bt), J.removeEventListener("refresh", bt), Qt.kill()
                }, a.lockAxis = a.lockAxis !== !1, w = new Ne(a), w.iOS = Ir, Ir && !O() && O(1), Ir && B.ticker.add(dr), xt = w._dc, q = B.to(w, {
                    ease: "power4",
                    paused: !0,
                    scrollX: f ? "+=0.1" : "+=0",
                    scrollY: "+=0.1",
                    modifiers: {
                        scrollY: Go(O, O(), function() {
                            return q.pause()
                        })
                    },
                    onUpdate: kr,
                    onComplete: xt.vars.onComplete
                }), w
            };
        J.sort = function(v) {
            return j.sort(v || function(a, d) {
                return (a.vars.refreshPriority || 0) * -1e6 + a.start - (d.start + (d.vars.refreshPriority || 0) * -1e6)
            })
        }, J.observe = function(v) {
            return new Ne(v)
        }, J.normalizeScroll = function(v) {
            if (typeof v > "u") return zt;
            if (v === !0 && zt) return zt.enable();
            if (v === !1) return zt && zt.kill();
            var a = v instanceof Ne ? v : Pu(v);
            return zt && zt.target === a.target && zt.kill(), Qr(a.target) && (zt = a), a
        }, J.core = {
            _getVelocityProp: nr,
            _inputObserver: $o,
            _scrollers: k,
            _proxies: z,
            bridge: {
                ss: function() {
                    qt || ti("scrollStart"), qt = gt()
                },
                ref: function() {
                    return ut
                }
            }
        }, Mo() && B.registerPlugin(J), t.ScrollTrigger = J, t.default = J, typeof window > "u" || window !== t ? Object.defineProperty(t, "__esModule", {
            value: !0
        }) : delete window.default
    })
})(Qs, Qs.exports);
var Gl = Qs.exports;
const Hl = Mu(Gl);
export {
    Hl as S, Mu as a, Ou as c, Wl as g
};