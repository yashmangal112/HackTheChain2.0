import {
    s as Ee,
    n as de,
    e as ke,
    o as we,
    f as ue,
    r as Te
} from "../chunks/scheduler.63274e7e.js";
import {
    S as Ie,
    i as Le,
    s as L,
    g as c,
    C as Ce,
    f as h,
    c as C,
    h as u,
    j as E,
    A as R,
    k as a,
    a as N,
    z as s,
    E as fe,
    l as ae,
    F as K,
    D as se,
    G as De,
    m as Me,
    n as He,
    o as Ve
} from "../chunks/index.53ba859c.js";
import {
    e as le
} from "../chunks/each.e59479a4.js";
import {
    s as Se
} from "../chunks/socials.4c0e6a7b.js";
import {
    a as je
} from "../chunks/app_fetch.78d3704f.js";
import {
    a as Ue
} from "../chunks/animations.60605499.js";

function ie(i) {
    document.startViewTransition && document.startViewTransition(i)
}

function _e(i, e, t) {
    const l = i.slice();
    return l[10] = e[t], l
}

function ge(i, e, t) {
    const l = i.slice();
    return l[13] = e[t], l
}

function ve(i, e, t) {
    const l = i.slice();
    return l[10] = e[t], l
}

function be(i) {
    let e, t, l, n, m, _, y, b;
    return {
        c() {
            e = c("li"), t = c("a"), l = c("img"), b = L(), this.h()
        },
        l(r) {
            e = u(r, "LI", {
                style: !0
            });
            var p = E(e);
            t = u(p, "A", {
                href: !0,
                title: !0,
                target: !0
            });
            var M = E(t);
            l = u(M, "IMG", {
                src: !0,
                alt: !0
            }), M.forEach(h), b = C(p), p.forEach(h), this.h()
        },
        h() {
            ue(l.src, n = "/images/socials/" + i[10].title + ".webp") || a(l, "src", n), a(l, "alt", m = i[10].title + " icon"), a(t, "href", _ = i[10].link), a(t, "title", y = "share on " + i[10].title), a(t, "target", "_blank"), ae(e, "width", "30px", 1), ae(e, "height", "30px", 1), ae(e, "display", "flex"), ae(e, "justify-content", "center"), ae(e, "align-items", "center"), ae(e, "margin", "3px")
        },
        m(r, p) {
            N(r, e, p), s(e, t), s(t, l), s(e, b)
        },
        p(r, p) {
            p & 16 && !ue(l.src, n = "/images/socials/" + r[10].title + ".webp") && a(l, "src", n), p & 16 && m !== (m = r[10].title + " icon") && a(l, "alt", m), p & 16 && _ !== (_ = r[10].link) && a(t, "href", _), p & 16 && y !== (y = "share on " + r[10].title) && a(t, "title", y)
        },
        d(r) {
            r && h(e)
        }
    }
}

function qe(i) {
    let e, t = `<h2 class="max-lg:heading-1 heading-2 text-pink">Questions or need assistance?
            <br/>Let us know about it!</h2> <p class="text-sm">Email us below for any question related to our event</p>`,
        l, n, m, _, y, b, r, p, M, x, P, B, k, Y, z, j, I, W, Z, D = le(i[1]),
        w = [];
    for (let f = 0; f < D.length; f += 1) w[f] = ye(ge(i, D, f));

    function V(f, g) {
        return f[2] ? Fe : ze
    }
    let U = V(i),
        q = U(i);
    return {
        c() {
            e = c("div"), e.innerHTML = t, l = L(), n = c("form"), m = c("fieldset"), _ = c("input"), y = L(), b = c("fieldset"), r = c("input"), p = L(), M = c("fieldset"), x = c("input"), P = L(), B = c("fieldset"), k = c("textarea"), Y = L(), z = c("ul");
            for (let f = 0; f < w.length; f += 1) w[f].c();
            j = L(), I = c("div"), q.c(), this.h()
        },
        l(f) {
            e = u(f, "DIV", {
                class: !0,
                "data-svelte-h": !0
            }), R(e) !== "svelte-1xx6za0" && (e.innerHTML = t), l = C(f), n = u(f, "FORM", {
                class: !0
            });
            var g = E(n);
            m = u(g, "FIELDSET", {});
            var v = E(m);
            _ = u(v, "INPUT", {
                type: !0,
                name: !0,
                placeholder: !0
            }), v.forEach(h), y = C(g), b = u(g, "FIELDSET", {});
            var S = E(b);
            r = u(S, "INPUT", {
                type: !0,
                name: !0,
                placeholder: !0
            }), S.forEach(h), p = C(g), M = u(g, "FIELDSET", {});
            var ne = E(M);
            x = u(ne, "INPUT", {
                type: !0,
                name: !0,
                placeholder: !0
            }), ne.forEach(h), P = C(g), B = u(g, "FIELDSET", {});
            var $ = E(B);
            k = u($, "TEXTAREA", {
                name: !0,
                placeholder: !0,
                class: !0
            }), E(k).forEach(h), $.forEach(h), Y = C(g), z = u(g, "UL", {
                class: !0
            });
            var A = E(z);
            for (let T = 0; T < w.length; T += 1) w[T].l(A);
            A.forEach(h), j = C(g), I = u(g, "DIV", {
                class: !0
            });
            var X = E(I);
            q.l(X), X.forEach(h), g.forEach(h), this.h()
        },
        h() {
            a(e, "class", "space-y-2"), a(_, "type", "text"), a(_, "name", "first name"), a(_, "placeholder", "Enter your first name"), _.required = !0, a(r, "type", "tel"), a(r, "name", "phone number"), a(r, "placeholder", "Enter your phone number"), r.required = !0, a(x, "type", "email"), a(x, "name", "email"), a(x, "placeholder", "Enter your email"), x.required = !0, a(k, "name", "message"), a(k, "placeholder", "Enter your message"), a(k, "class", "max-lg:min-h-[100px]"), k.required = !0, a(z, "class", "text-center text-red-500 text-sm"), a(I, "class", "flex justify-center submit-btns-wrapper"), a(n, "class", "space-y-4")
        },
        m(f, g) {
            N(f, e, g), N(f, l, g), N(f, n, g), s(n, m), s(m, _), K(_, i[0].first_name), s(n, y), s(n, b), s(b, r), K(r, i[0].phone_number), s(n, p), s(n, M), s(M, x), K(x, i[0].email), s(n, P), s(n, B), s(B, k), K(k, i[0].message), s(n, Y), s(n, z);
            for (let v = 0; v < w.length; v += 1) w[v] && w[v].m(z, null);
            s(n, j), s(n, I), q.m(I, null), W || (Z = [se(_, "input", i[6]), se(r, "input", i[7]), se(x, "input", i[8]), se(k, "input", i[9]), se(n, "submit", De(i[5]))], W = !0)
        },
        p(f, g) {
            if (g & 1 && _.value !== f[0].first_name && K(_, f[0].first_name), g & 1 && K(r, f[0].phone_number), g & 1 && x.value !== f[0].email && K(x, f[0].email), g & 1 && K(k, f[0].message), g & 2) {
                D = le(f[1]);
                let v;
                for (v = 0; v < D.length; v += 1) {
                    const S = ge(f, D, v);
                    w[v] ? w[v].p(S, g) : (w[v] = ye(S), w[v].c(), w[v].m(z, null))
                }
                for (; v < w.length; v += 1) w[v].d(1);
                w.length = D.length
            }
            U !== (U = V(f)) && (q.d(1), q = U(f), q && (q.c(), q.m(I, null)))
        },
        d(f) {
            f && (h(e), h(l), h(n)), fe(w, f), q.d(), W = !1, Te(Z)
        }
    }
}

function Pe(i) {
    let e, t = '<h2 class="max-lg:heading-1 heading-2 text-pink">Success</h2> <p class="text-sm">Your message was successfully sent</p>';
    return {
        c() {
            e = c("div"), e.innerHTML = t, this.h()
        },
        l(l) {
            e = u(l, "DIV", {
                class: !0,
                "data-svelte-h": !0
            }), R(e) !== "svelte-w6u8w9" && (e.innerHTML = t), this.h()
        },
        h() {
            a(e, "class", "flex-1 h-full space-y-2 text-center flex items-center flex-col justify-center")
        },
        m(l, n) {
            N(l, e, n)
        },
        p: de,
        d(l) {
            l && h(e)
        }
    }
}

function ye(i) {
    let e, t = i[13] + "",
        l;
    return {
        c() {
            e = c("li"), l = Me(t)
        },
        l(n) {
            e = u(n, "LI", {});
            var m = E(e);
            l = He(m, t), m.forEach(h)
        },
        m(n, m) {
            N(n, e, m), s(e, l)
        },
        p(n, m) {
            m & 2 && t !== (t = n[13] + "") && Ve(l, t)
        },
        d(n) {
            n && h(e)
        }
    }
}

function ze(i) {
    let e, t = "Submit";
    return {
        c() {
            e = c("button"), e.textContent = t, this.h()
        },
        l(l) {
            e = u(l, "BUTTON", {
                class: !0,
                type: !0,
                "data-svelte-h": !0
            }), R(e) !== "svelte-1d02o54" && (e.textContent = t), this.h()
        },
        h() {
            a(e, "class", "btn"), a(e, "type", "submit")
        },
        m(l, n) {
            N(l, e, n)
        },
        d(l) {
            l && h(e)
        }
    }
}

function Fe(i) {
    let e, t = `<span class="flex items-center justify-center w-4 h-4 border-2 border-t-transparent rounded-full animate-spin"><span class="w-2 h-2 border-2 border-t-transparent rounded-full animate-spin"></span></span>
                submitting`;
    return {
        c() {
            e = c("button"), e.innerHTML = t, this.h()
        },
        l(l) {
            e = u(l, "BUTTON", {
                class: !0,
                "data-svelte-h": !0
            }), R(e) !== "svelte-ey725d" && (e.innerHTML = t), this.h()
        },
        h() {
            e.disabled = !0, a(e, "class", "flex items-center justify-center gap-2 btn-disabled")
        },
        m(l, n) {
            N(l, e, n)
        },
        d(l) {
            l && h(e)
        }
    }
}

function xe(i) {
    let e, t, l, n, m, _, y, b;
    return {
        c() {
            e = c("li"), t = c("a"), l = c("img"), b = L(), this.h()
        },
        l(r) {
            e = u(r, "LI", {});
            var p = E(e);
            t = u(p, "A", {
                href: !0,
                title: !0
            });
            var M = E(t);
            l = u(M, "IMG", {
                src: !0,
                alt: !0
            }), M.forEach(h), b = C(p), p.forEach(h), this.h()
        },
        h() {
            ue(l.src, n = "/images/socials/" + i[10].title + ".webp") || a(l, "src", n), a(l, "alt", m = i[10].title + " icon"), a(t, "href", _ = i[10].link), a(t, "title", y = "share on " + i[10].title)
        },
        m(r, p) {
            N(r, e, p), s(e, t), s(t, l), s(e, b)
        },
        p(r, p) {
            p & 16 && !ue(l.src, n = "/images/socials/" + r[10].title + ".webp") && a(l, "src", n), p & 16 && m !== (m = r[10].title + " icon") && a(l, "alt", m), p & 16 && _ !== (_ = r[10].link) && a(t, "href", _), p & 16 && y !== (y = "share on " + r[10].title) && a(t, "title", y)
        },
        d(r) {
            r && h(e)
        }
    }
}

function Ne(i) {
    let e, t, l, n, m, _, y, b, r, p = '<img src="/images/stars/star2.png" alt="star" loading="lazy" class="not-sr-only -top-24 absolute animate-pulse scale-50"/> <img src="/images/stars/star2.png" alt="star" loading="lazy" class="not-sr-only bottom-0 -right-3 z-10 absolute animate-pulse scale-50"/>',
        M, x, P = "Get in touch",
        B, k, Y = '<li><p>Contact <span class="block">Information</span></p></li> <li><p>Pandit Deendayal Energy University <span class="block">Knowledge Corridor, Raisan Village, PDPU Rd, Gandhinagar,</span> <span class="block">Gujarat 382007.</span></p></li>',
        z, j, I, W = "Share on",
        Z, D, w, V, U, q = '<img src="/images/stars/star.png" loading="lazy" alt="star" class="not-sr-only -top-12 right-0 absolute animate-pulse scale-75"/> <img src="/images/stars/star.png" loading="lazy" alt="star" class="not-sr-only bottom-0 -right-12 z-10 absolute animate-pulse scale-50"/>',
        f, g, v, S, ne = "Share on",
        $, A, X = le(i[4]),
        T = [];
    for (let d = 0; d < X.length; d += 1) T[d] = be(ve(i, X, d));

    function he(d, G) {
        return d[3] ? Pe : qe
    }
    let re = he(i),
        F = re(i),
        ee = le(i[4]),
        H = [];
    for (let d = 0; d < ee.length; d += 1) H[d] = xe(_e(i, ee, d));
    return {
        c() {
            e = L(), t = c("main"), l = c("div"), n = L(), m = c("div"), _ = L(), y = c("div"), b = c("div"), r = c("div"), r.innerHTML = p, M = L(), x = c("h1"), x.textContent = P, B = L(), k = c("ul"), k.innerHTML = Y, z = L(), j = c("div"), I = c("h2"), I.textContent = W, Z = L(), D = c("ul");
            for (let d = 0; d < T.length; d += 1) T[d].c();
            w = L(), V = c("div"), U = c("div"), U.innerHTML = q, f = L(), F.c(), g = L(), v = c("div"), S = c("h2"), S.textContent = ne, $ = L(), A = c("ul");
            for (let d = 0; d < H.length; d += 1) H[d].c();
            this.h()
        },
        l(d) {
            Ce("svelte-ph105e", document.head).forEach(h), e = C(d), t = u(d, "MAIN", {
                class: !0
            });
            var o = E(t);
            l = u(o, "DIV", {
                class: !0
            }), E(l).forEach(h), n = C(o), m = u(o, "DIV", {
                class: !0
            }), E(m).forEach(h), _ = C(o), y = u(o, "DIV", {
                class: !0
            });
            var O = E(y);
            b = u(O, "DIV", {
                class: !0
            });
            var J = E(b);
            r = u(J, "DIV", {
                class: !0,
                "data-svelte-h": !0
            }), R(r) !== "svelte-17dpfnm" && (r.innerHTML = p), M = C(J), x = u(J, "H1", {
                class: !0,
                "data-animate-text": !0,
                "data-animation-direction": !0,
                "data-animation-delay": !0,
                "data-svelte-h": !0
            }), R(x) !== "svelte-3uxr2r" && (x.textContent = P), B = C(J), k = u(J, "UL", {
                class: !0,
                "data-animate": !0,
                "data-animation-direction": !0,
                "data-animation-delay": !0,
                "data-svelte-h": !0
            }), R(k) !== "svelte-9hpti3" && (k.innerHTML = Y), z = C(J), j = u(J, "DIV", {
                class: !0
            });
            var oe = E(j);
            I = u(oe, "H2", {
                class: !0,
                "data-animate-text": !0,
                "data-animation-is-not-scroll-triggered": !0,
                "data-animation-delay": !0,
                "data-animation-selection": !0,
                "data-svelte-h": !0
            }), R(I) !== "svelte-oxbr3w" && (I.textContent = W), Z = C(oe), D = u(oe, "UL", {
                class: !0,
                "data-animate": !0,
                "data-animation-direction": !0,
                "data-animation-is-not-scroll-triggered": !0,
                "data-animation-delay": !0
            });
            var me = E(D);
            for (let Q = 0; Q < T.length; Q += 1) T[Q].l(me);
            me.forEach(h), oe.forEach(h), J.forEach(h), w = C(O), V = u(O, "DIV", {
                "data-animate": !0,
                "data-animation-direction": !0,
                class: !0
            });
            var te = E(V);
            U = u(te, "DIV", {
                class: !0,
                "data-svelte-h": !0
            }), R(U) !== "svelte-ftt355" && (U.innerHTML = q), f = C(te), F.l(te), g = C(te), v = u(te, "DIV", {
                class: !0
            });
            var ce = E(v);
            S = u(ce, "H2", {
                class: !0,
                "data-svelte-h": !0
            }), R(S) !== "svelte-1ilqbti" && (S.textContent = ne), $ = C(ce), A = u(ce, "UL", {
                class: !0
            });
            var pe = E(A);
            for (let Q = 0; Q < H.length; Q += 1) H[Q].l(pe);
            pe.forEach(h), ce.forEach(h), te.forEach(h), O.forEach(h), o.forEach(h), this.h()
        },
        h() {
            document.title = "TuringHacX - contact us - get more information about us", a(l, "class", "bg-purple opacity-20 top-0 -left-[200px] absolute w-[500px] rounded-full blur-3xl aspect-square"), a(m, "class", "bg-purple opacity-20 -bottom-[10%] -right-[100px] absolute w-[300px] rounded-full blur-3xl aspect-square"), a(r, "class", "pointer-events-none absolute inset-0"), a(x, "class", "heading-1 text-pink"), a(x, "data-animate-text", ""), a(x, "data-animation-direction", "left"), a(x, "data-animation-delay", "1"), a(k, "class", "max-w-sm space-y-6"), a(k, "data-animate", ""), a(k, "data-animation-direction", "left"), a(k, "data-animation-delay", "1"), a(I, "class", "heading-2 text-pink"), a(I, "data-animate-text", ""), a(I, "data-animation-is-not-scroll-triggered", ""), a(I, "data-animation-delay", "1.5"), a(I, "data-animation-selection", "letters"), a(D, "class", "flex items-center gap-4"), a(D, "data-animate", ""), a(D, "data-animation-direction", "up"), a(D, "data-animation-is-not-scroll-triggered", ""), a(D, "data-animation-delay", "1.8"), a(j, "class", "space-y-2"), a(b, "class", "relative space-y-6 max-lg:hidden"), a(U, "class", "pointer-events-none absolute inset-0"), a(S, "class", "heading-2 text-pink"), a(A, "class", "flex items-center justify-center gap-4"), a(v, "class", "lg:hidden space-y-2 text-center"), a(V, "data-animate", ""), a(V, "data-animation-direction", "down"), a(V, "class", "relative space-y-8 max-w-lg container lg:bg-white/[3%] px-2 lg:px-10 py-6 lg:py-20 rounded-md lg:shadow-md backdrop-filter backdrop-blur-sm border border-white/[1%]"), a(y, "class", "max-w-5xl container lg:grid grid-cols-2 items-center space-y-4 py-10 lg:py-20"), a(t, "class", "min-h-[80vh] flex items-center justify-center relative")
        },
        m(d, G) {
            N(d, e, G), N(d, t, G), s(t, l), s(t, n), s(t, m), s(t, _), s(t, y), s(y, b), s(b, r), s(b, M), s(b, x), s(b, B), s(b, k), s(b, z), s(b, j), s(j, I), s(j, Z), s(j, D);
            for (let o = 0; o < T.length; o += 1) T[o] && T[o].m(D, null);
            s(y, w), s(y, V), s(V, U), s(V, f), F.m(V, null), s(V, g), s(V, v), s(v, S), s(v, $), s(v, A);
            for (let o = 0; o < H.length; o += 1) H[o] && H[o].m(A, null)
        },
        p(d, [G]) {
            if (G & 16) {
                X = le(d[4]);
                let o;
                for (o = 0; o < X.length; o += 1) {
                    const O = ve(d, X, o);
                    T[o] ? T[o].p(O, G) : (T[o] = be(O), T[o].c(), T[o].m(D, null))
                }
                for (; o < T.length; o += 1) T[o].d(1);
                T.length = X.length
            }
            if (re === (re = he(d)) && F ? F.p(d, G) : (F.d(1), F = re(d), F && (F.c(), F.m(V, g))), G & 16) {
                ee = le(d[4]);
                let o;
                for (o = 0; o < ee.length; o += 1) {
                    const O = _e(d, ee, o);
                    H[o] ? H[o].p(O, G) : (H[o] = xe(O), H[o].c(), H[o].m(A, null))
                }
                for (; o < H.length; o += 1) H[o].d(1);
                H.length = ee.length
            }
        },
        i: de,
        o: de,
        d(d) {
            d && (h(e), h(t)), fe(T, d), F.d(), fe(H, d)
        }
    }
}

function Ae(i, e, t) {
    let l;
    ke(i, Se, P => t(4, l = P)), we(() => {
        Ue()
    });
    const n = {
        email: "",
        phone_number: "",
        first_name: "",
        message: ""
    };
    let m = [],
        _ = !1,
        y = !1;
    async function b() {
        if (ie(() => {
                t(1, m = []), t(3, y = !1), t(2, _ = !0)
            }), n.email == "" || n.phone_number == "" || n.first_name == "" || n.message == "") {
            ie(() => {
                t(1, m = ["Please fill in information properly"])
            });
            return
        }
        await je("contact-form", {
            method: "POST",
            body: JSON.stringify(n),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(async P => {
            await P.json(), ie(() => {
                t(3, y = !0)
            })
        }).catch(async P => {
            ie(() => {
                t(1, m = [...m, "Something went wrong, please try again later"])
            })
        }).finally(() => {
            ie(() => {
                t(2, _ = !1)
            })
        })
    }

    function r() {
        n.first_name = this.value, t(0, n)
    }

    function p() {
        n.phone_number = this.value, t(0, n)
    }

    function M() {
        n.email = this.value, t(0, n)
    }

    function x() {
        n.message = this.value, t(0, n)
    }
    return [n, m, _, y, l, b, r, p, M, x]
}
class Ke extends Ie {
    constructor(e) {
        super(), Le(this, e, Ae, Ne, Ee, {})
    }
}
export {
    Ke as component
};