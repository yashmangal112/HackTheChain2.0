var C = Object.defineProperty;
var D = (e, t, n) => t in e ? C(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : e[t] = n;
var p = (e, t, n) => (D(e, typeof t != "symbol" ? t + "" : t, n), n);
import {
    r as h,
    n as y,
    h as w,
    i as T,
    j as E,
    k as j,
    l as N,
    m as B,
    p as L,
    q as b,
    v as H,
    w as M,
    x as P
} from "./scheduler.63274e7e.js";
let $ = !1;

function q() {
    $ = !0
}

function I() {
    $ = !1
}

function O(e, t, n, i) {
    for (; e < t;) {
        const r = e + (t - e >> 1);
        n(r) <= i ? e = r + 1 : t = r
    }
    return e
}

function R(e) {
    if (e.hydrate_init) return;
    e.hydrate_init = !0;
    let t = e.childNodes;
    if (e.nodeName === "HEAD") {
        const s = [];
        for (let a = 0; a < t.length; a++) {
            const o = t[a];
            o.claim_order !== void 0 && s.push(o)
        }
        t = s
    }
    const n = new Int32Array(t.length + 1),
        i = new Int32Array(t.length);
    n[0] = -1;
    let r = 0;
    for (let s = 0; s < t.length; s++) {
        const a = t[s].claim_order,
            o = (r > 0 && t[n[r]].claim_order <= a ? r + 1 : O(1, r, d => t[n[d]].claim_order, a)) - 1;
        i[s] = n[o] + 1;
        const f = o + 1;
        n[f] = s, r = Math.max(f, r)
    }
    const u = [],
        l = [];
    let c = t.length - 1;
    for (let s = n[r] + 1; s != 0; s = i[s - 1]) {
        for (u.push(t[s - 1]); c >= s; c--) l.push(t[c]);
        c--
    }
    for (; c >= 0; c--) l.push(t[c]);
    u.reverse(), l.sort((s, a) => s.claim_order - a.claim_order);
    for (let s = 0, a = 0; s < l.length; s++) {
        for (; a < u.length && l[s].claim_order >= u[a].claim_order;) a++;
        const o = a < u.length ? u[a] : null;
        e.insertBefore(l[s], o)
    }
}

function z(e, t) {
    if ($) {
        for (R(e), (e.actual_end_child === void 0 || e.actual_end_child !== null && e.actual_end_child.parentNode !== e) && (e.actual_end_child = e.firstChild); e.actual_end_child !== null && e.actual_end_child.claim_order === void 0;) e.actual_end_child = e.actual_end_child.nextSibling;
        t !== e.actual_end_child ? (t.claim_order !== void 0 || t.parentNode !== e) && e.insertBefore(t, e.actual_end_child) : e.actual_end_child = t.nextSibling
    } else(t.parentNode !== e || t.nextSibling !== null) && e.appendChild(t)
}

function te(e, t, n) {
    $ && !n ? z(e, t) : (t.parentNode !== e || t.nextSibling != n) && e.insertBefore(t, n || null)
}

function F(e) {
    e.parentNode && e.parentNode.removeChild(e)
}

function ne(e, t) {
    for (let n = 0; n < e.length; n += 1) e[n] && e[n].d(t)
}

function G(e) {
    return document.createElement(e)
}

function V(e) {
    return document.createElementNS("http://www.w3.org/2000/svg", e)
}

function x(e) {
    return document.createTextNode(e)
}

function ie() {
    return x(" ")
}

function re() {
    return x("")
}

function se(e, t, n, i) {
    return e.addEventListener(t, n, i), () => e.removeEventListener(t, n, i)
}

function ae(e) {
    return function(t) {
        return t.preventDefault(), e.call(this, t)
    }
}

function le(e, t, n) {
    n == null ? e.removeAttribute(t) : e.getAttribute(t) !== n && e.setAttribute(t, n)
}

function ue(e) {
    return e.dataset.svelteH
}

function W(e) {
    return Array.from(e.childNodes)
}

function J(e) {
    e.claim_info === void 0 && (e.claim_info = {
        last_index: 0,
        total_claimed: 0
    })
}

function A(e, t, n, i, r = !1) {
    J(e);
    const u = (() => {
        for (let l = e.claim_info.last_index; l < e.length; l++) {
            const c = e[l];
            if (t(c)) {
                const s = n(c);
                return s === void 0 ? e.splice(l, 1) : e[l] = s, r || (e.claim_info.last_index = l), c
            }
        }
        for (let l = e.claim_info.last_index - 1; l >= 0; l--) {
            const c = e[l];
            if (t(c)) {
                const s = n(c);
                return s === void 0 ? e.splice(l, 1) : e[l] = s, r ? s === void 0 && e.claim_info.last_index-- : e.claim_info.last_index = l, c
            }
        }
        return i()
    })();
    return u.claim_order = e.claim_info.total_claimed, e.claim_info.total_claimed += 1, u
}

function S(e, t, n, i) {
    return A(e, r => r.nodeName === t, r => {
        const u = [];
        for (let l = 0; l < r.attributes.length; l++) {
            const c = r.attributes[l];
            n[c.name] || u.push(c.name)
        }
        u.forEach(l => r.removeAttribute(l))
    }, () => i(t))
}

function ce(e, t, n) {
    return S(e, t, n, G)
}

function fe(e, t, n) {
    return S(e, t, n, V)
}

function K(e, t) {
    return A(e, n => n.nodeType === 3, n => {
        const i = "" + t;
        if (n.data.startsWith(i)) {
            if (n.data.length !== i.length) return n.splitText(i.length)
        } else n.data = i
    }, () => x(t), !0)
}

function oe(e) {
    return K(e, " ")
}

function _e(e, t) {
    t = "" + t, e.data !== t && (e.data = t)
}

function de(e, t) {
    e.value = t ? ? ""
}

function me(e, t, n, i) {
    n == null ? e.style.removeProperty(t) : e.style.setProperty(t, n, i ? "important" : "")
}

function he(e, t, n) {
    e.classList.toggle(t, !!n)
}

function $e(e, t) {
    const n = [];
    let i = 0;
    for (const r of t.childNodes)
        if (r.nodeType === 8) {
            const u = r.textContent.trim();
            u === `HEAD_${e}_END` ? (i -= 1, n.push(r)) : u === `HEAD_${e}_START` && (i += 1, n.push(r))
        } else i > 0 && n.push(r);
    return n
}

function pe(e, t) {
    return new e(t)
}
const m = new Set;
let _;

function ye() {
    _ = {
        r: 0,
        c: [],
        p: _
    }
}

function xe() {
    _.r || h(_.c), _ = _.p
}

function Q(e, t) {
    e && e.i && (m.delete(e), e.i(t))
}

function ge(e, t, n, i) {
    if (e && e.o) {
        if (m.has(e)) return;
        m.add(e), _.c.push(() => {
            m.delete(e), i && (n && e.d(1), i())
        }), e.o(t)
    } else i && i()
}

function ve(e) {
    e && e.c()
}

function we(e, t) {
    e && e.l(t)
}

function U(e, t, n) {
    const {
        fragment: i,
        after_update: r
    } = e.$$;
    i && i.m(t, n), N(() => {
        const u = e.$$.on_mount.map(H).filter(E);
        e.$$.on_destroy ? e.$$.on_destroy.push(...u) : h(u), e.$$.on_mount = []
    }), r.forEach(N)
}

function X(e, t) {
    const n = e.$$;
    n.fragment !== null && (B(n.after_update), h(n.on_destroy), n.fragment && n.fragment.d(t), n.on_destroy = n.fragment = null, n.ctx = [])
}

function Y(e, t) {
    e.$$.dirty[0] === -1 && (M.push(e), P(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31
}

function Ne(e, t, n, i, r, u, l, c = [-1]) {
    const s = L;
    b(e);
    const a = e.$$ = {
        fragment: null,
        ctx: [],
        props: u,
        update: y,
        not_equal: r,
        bound: w(),
        on_mount: [],
        on_destroy: [],
        on_disconnect: [],
        before_update: [],
        after_update: [],
        context: new Map(t.context || (s ? s.$$.context : [])),
        callbacks: w(),
        dirty: c,
        skip_bound: !1,
        root: t.target || s.$$.root
    };
    l && l(a.root);
    let o = !1;
    if (a.ctx = n ? n(e, t.props || {}, (f, d, ...g) => {
            const v = g.length ? g[0] : d;
            return a.ctx && r(a.ctx[f], a.ctx[f] = v) && (!a.skip_bound && a.bound[f] && a.bound[f](v), o && Y(e, f)), d
        }) : [], a.update(), o = !0, h(a.before_update), a.fragment = i ? i(a.ctx) : !1, t.target) {
        if (t.hydrate) {
            q();
            const f = W(t.target);
            a.fragment && a.fragment.l(f), f.forEach(F)
        } else a.fragment && a.fragment.c();
        t.intro && Q(e.$$.fragment), U(e, t.target, t.anchor), I(), T()
    }
    b(s)
}
class be {
    constructor() {
        p(this, "$$");
        p(this, "$$set")
    }
    $destroy() {
        X(this, 1), this.$destroy = y
    }
    $on(t, n) {
        if (!E(n)) return y;
        const i = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
        return i.push(n), () => {
            const r = i.indexOf(n);
            r !== -1 && i.splice(r, 1)
        }
    }
    $set(t) {
        this.$$set && !j(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1)
    }
}
const Z = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = {
    v: new Set
})).v.add(Z);
export {
    ue as A, he as B, $e as C, se as D, ne as E, de as F, ae as G, be as S, te as a, xe as b, oe as c, Q as d, re as e, F as f, G as g, ce as h, Ne as i, W as j, le as k, me as l, x as m, K as n, _e as o, ye as p, pe as q, ve as r, ie as s, ge as t, we as u, U as v, X as w, V as x, fe as y, z
};