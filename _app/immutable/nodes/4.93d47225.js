import {
    s as V,
    f as A,
    n as S,
    r as N,
    o as U
} from "../chunks/scheduler.63274e7e.js";
import {
    S as $,
    i as F,
    s as b,
    g as r,
    C as G,
    f as o,
    c as v,
    h as c,
    A as T,
    j as C,
    k as a,
    a as M,
    z as s,
    D as R
} from "../chunks/index.53ba859c.js";
import {
    a as W
} from "../chunks/app_fetch.78d3704f.js";
import {
    g as X
} from "../chunks/ScrollTrigger.98dab6ad.js";
import {
    a as Y
} from "../chunks/animations.60605499.js";

function J(y) {
    let i, l, _ = '<div class="bg-purple opacity-20 top-0 -left-[200px] absolute w-[500px] rounded-full blur-3xl aspect-square"></div> <div class="bg-purple opacity-20 -bottom-[10%] -right-[100px] absolute w-[300px] rounded-full blur-3xl aspect-square"></div> <div class="max-w-6xl container lg:grid grid-cols-2 space-y-4 py-10 lg:py-20 items-center"><div class="hidden max-lg:block"><h2 class="heading-1 text-pink">Register</h2></div> <div data-animate="" data-animation="pop" data-animation-is-not-scroll-triggered="" class="relative"><div class="pointer-events-none absolute inset-0"><img src="/images/stars/star2.png" loading="lazy" alt="star" class="not-sr-only -top-12 left-0 absolute animate-pulse scale-50"/> <img src="/images/stars/star2.png" loading="lazy" alt="star" class="not-sr-only bottom-0 -right-12 z-10 absolute animate-pulse scale-50"/> <img src="/images/stars/star.png" loading="lazy" alt="star" class="not-sr-only bottom-0 -left-12 z-10 absolute animate-pulse scale-50"/></div> <img class="max-lg:mx-auto max-lg:w-[80%]" src="/images/3d-graphic-designer-showing-thumbs-up.webp" alt="3d graphic designer showing thumbs up"/></div> <div data-animate="" data-animation-direction="down" data-animation-delay=".5" data-animation-is-not-scroll-triggered="" class="relative space-y-8 max-w-lg container lg:bg-white/[3%] px-2 lg:px-10 py-6 lg:py-20 rounded-md lg:shadow-md backdrop-filter backdrop-blur-sm border border-white/[1%]"><div class="pointer-events-none absolute inset-0"><img src="/images/stars/star.png" alt="star" loading="lazy" class="not-sr-only top-0 right-16 absolute animate-pulse scale-75"/> <img src="/images/stars/star.png" alt="star" loading="lazy" class="not-sr-only -bottom-4 right-12 absolute animate-pulse scale-50"/></div> <div class="space-y-6"><h2 class="heading-1 text-pink max-lg:hidden">Register</h2> <p class="lg:text-lg text-2xl ">Be part of this movement by registering here 🚶🏾</p></div> <h2 class="text-3xl max-lg:text-center lg:text-[20px]"><div class="apply-button" data-hackathon-slug="turinghacx" data-button-theme="light" style="height: 100px; width: 200px; padding-top: 30px;"><a href="https://turinghacx.devfolio.co/" target="_blank"><button style="box-shadow : rgba(255, 255, 255, 0.35) 0px 5px 15px;" onmouseout="this.style.boxShadow = &#39;rgba(255, 255, 255, 0.35) 0px 5px 15px&#39;;" onmouseover="this.style.boxShadow = &#39;none&#39;;"><img src="/images/partners/DEVFOLIO.webp"/></button></a></div></h2></div></div>',
        w, n, h, z, x, e, u, E, H, m, I = `Congratulations
        <span class="block">you have successfully Registered!</span>`,
        j, g, P = "Yes, it was easy and you did it!<br/>check your mail box for next step",
        L, d, q = "Back",
        O, D;
    return {
        c() {
            i = b(), l = r("main"), l.innerHTML = _, w = b(), n = r("div"), h = r("button"), z = b(), x = r("div"), e = r("div"), u = r("img"), H = b(), m = r("h2"), m.innerHTML = I, j = b(), g = r("p"), g.innerHTML = P, L = b(), d = r("button"), d.textContent = q, this.h()
        },
        l(t) {
            G("svelte-1eydncq", document.head).forEach(o), i = v(t), l = c(t, "MAIN", {
                class: !0,
                "data-svelte-h": !0
            }), T(l) !== "svelte-jshn5e" && (l.innerHTML = _), w = v(t), n = c(t, "DIV", {
                class: !0
            });
            var k = C(n);
            h = c(k, "BUTTON", {
                class: !0
            }), C(h).forEach(o), z = v(k), x = c(k, "DIV", {
                class: !0
            });
            var B = C(x);
            e = c(B, "DIV", {
                class: !0
            });
            var p = C(e);
            u = c(p, "IMG", {
                class: !0,
                src: !0,
                alt: !0
            }), H = v(p), m = c(p, "H2", {
                class: !0,
                "data-svelte-h": !0
            }), T(m) !== "svelte-1m4w1ld" && (m.innerHTML = I), j = v(p), g = c(p, "P", {
                class: !0,
                "data-svelte-h": !0
            }), T(g) !== "svelte-ni0u2j" && (g.innerHTML = P), L = v(p), d = c(p, "BUTTON", {
                class: !0,
                "data-svelte-h": !0
            }), T(d) !== "svelte-fg71rv" && (d.textContent = q), p.forEach(o), B.forEach(o), k.forEach(o), this.h()
        },
        h() {
            document.title = "TuringHacX - Register for our hackathon", a(l, "class", "page_wrapper min-h-[80vh] flex items-center justify-center relative"), a(h, "class", "absolute inset-0 bg-dark/90 cursor-default"), a(u, "class", "modal_element"), A(u.src, E = "/images/congratulation.webp") || a(u, "src", E), a(u, "alt", "boy jumping up in happiness"), a(m, "class", "modal_element font-bold"), a(g, "class", "modal_element text-sm"), a(d, "class", "modal_element btn w-full"), a(e, "class", "modal_body max-w-xl container border-pink border rounded-sm flex flex-col items-center gap-6 p-10"), a(x, "class", "relative w-max container text-center p-10"), a(n, "class", "modal_wrapper invisible fixed inset-0 z-10 min-h-screen items-center justify-center")
        },
        m(t, f) {
            M(t, i, f), M(t, l, f), M(t, w, f), M(t, n, f), s(n, h), s(n, z), s(n, x), s(x, e), s(e, u), s(e, H), s(e, m), s(e, j), s(e, g), s(e, L), s(e, d), O || (D = [R(h, "click", y[0]), R(d, "click", y[0])], O = !0)
        },
        p: S,
        i: S,
        o: S,
        d(t) {
            t && (o(i), o(l), o(w), o(n)), O = !1, N(D)
        }
    }
}

function K(y) {
    const i = new X.timeline({
        paused: !0,
        reversed: !0
    });

    function l() {
        i.reverse()
    }
    return U(async () => {
        Y(), W("categories-list").then(async _ => {
            await _.json()
        }), i.to(".page_wrapper", {
            duration: .4,
            scale: .9,
            opacity: .5,
            filter: "blur(8px)"
        }).from(".modal_wrapper", {
            duration: .5,
            autoAlpha: 0,
            ease: "Power4.easeOut"
        }, "-=0.5").from(".modal_body", {
            duration: .5,
            y: 140,
            scale: 2,
            filter: "blur(4px)",
            ease: "Power4.easeOut"
        }, "-=0.5").from(".modal_element", {
            duration: .2,
            y: 40,
            stagger: .1,
            opacity: 0,
            scale: 2,
            ease: "Power4.easeOut"
        }, "-=0.6")
    }), [l]
}
class se extends $ {
    constructor(i) {
        super(), F(this, i, K, J, V, {})
    }
}
export {
    se as component
};