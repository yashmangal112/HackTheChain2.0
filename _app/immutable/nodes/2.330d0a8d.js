import {
    s as Pe,
    n as qt,
    e as Se,
    o as Ne,
    f as de
} from "../chunks/scheduler.63274e7e.js";
import {
    S as Ue,
    i as Xe,
    s as h,
    g as l,
    C as Re,
    f as r,
    c as m,
    h as o,
    A as y,
    j as u,
    k as a,
    l as j,
    a as U,
    z as e,
    E as Ft,
    m as jt,
    n as Dt
} from "../chunks/index.53ba859c.js";
import {
    e as at
} from "../chunks/each.e59479a4.js";
import {
    s as We
} from "../chunks/socials.4c0e6a7b.js";
import {
    a as Fe
} from "../chunks/animations.60605499.js";

function Me(p, n, i) {
    const c = p.slice();
    return c[5] = n[i], c
}

function je(p, n, i) {
    const c = p.slice();
    return c[8] = n[i].question, c[9] = n[i].answer, c
}

function De(p, n, i) {
    const c = p.slice();
    return c[12] = n[i].title, c[13] = n[i].description, c
}

function qe(p, n, i) {
    const c = p.slice();
    return c[16] = n[i], c
}

function ze(p) {
    let n, i, c;
    return {
        c() {
            n = l("li"), i = l("img"), this.h()
        },
        l(g) {
            n = o(g, "LI", {
                class: !0
            });
            var d = u(n);
            i = o(d, "IMG", {
                src: !0,
                alt: !0
            }), d.forEach(r), this.h()
        },
        h() {
            de(i.src, c = "/images/partners/" + p[16].title + "." + p[16].format) || a(i, "src", c), a(i, "alt", p[16].title + " LOGO"), a(n, "class", "flex items-center justify-center md:px-10")
        },
        m(g, d) {
            U(g, n, d), e(n, i)
        },
        p: qt,
        d(g) {
            g && r(n)
        }
    }
}

function Ve(p) {
    let n, i, c = p[12] + "",
        g, d, f, b, _ = p[13] + "",
        v, x;
    return {
        c() {
            n = l("li"), i = l("h3"), g = jt(c), d = jt(":"), f = h(), b = l("p"), v = jt(_), x = h(), this.h()
        },
        l(w) {
            n = o(w, "LI", {});
            var k = u(n);
            i = o(k, "H3", {
                class: !0
            });
            var z = u(i);
            g = Dt(z, c), d = Dt(z, ":"), z.forEach(r), f = m(k), b = o(k, "P", {
                class: !0
            });
            var V = u(b);
            v = Dt(V, _), V.forEach(r), x = m(k), k.forEach(r), this.h()
        },
        h() {
            a(i, "class", "text-pink-200 font-bold inline"), a(b, "class", "inline")
        },
        m(w, k) {
            U(w, n, k), e(n, i), e(i, g), e(i, d), e(n, f), e(n, b), e(b, v), e(n, x)
        },
        p: qt,
        d(w) {
            w && r(n)
        }
    }
}

function Oe(p) {
    let n, i, c, g, d = p[8] + "",
        f, b, _, v = "+",
        x, w, k = p[9] + "",
        z, V;
    return {
        c() {
            n = l("li"), i = l("button"), c = l("div"), g = l("h3"), f = jt(d), b = h(), _ = l("button"), _.textContent = v, x = h(), w = l("div"), z = jt(k), V = h(), this.h()
        },
        l(D) {
            n = o(D, "LI", {});
            var W = u(n);
            i = o(W, "BUTTON", {
                class: !0
            });
            var F = u(i);
            c = o(F, "DIV", {
                class: !0
            });
            var q = u(c);
            g = o(q, "H3", {
                class: !0
            });
            var It = u(g);
            f = Dt(It, d), It.forEach(r), b = m(q), _ = o(q, "BUTTON", {
                class: !0,
                "data-svelte-h": !0
            }), y(_) !== "svelte-1yd8270" && (_.textContent = v), q.forEach(r), x = m(F), w = o(F, "DIV", {
                class: !0
            });
            var vt = u(w);
            z = Dt(vt, k), vt.forEach(r), F.forEach(r), V = m(W), W.forEach(r), this.h()
        },
        h() {
            a(g, "class", "group-focus/faq:text-sm transition-default"), a(_, "class", "text-pink text-[20px] group-focus/faq:rotate-45 group-focus/faq:pointer-events-auto pointer-events-none inline-block transition-default"), a(c, "class", "flex items-center justify-between py-4"), a(w, "class", "max-h-0 group-focus/faq:max-h-[500px] group-focus/faq:p-4 transition-default text-left bg-pink text-dark"), a(i, "class", "w-full group/faq")
        },
        m(D, W) {
            U(D, n, W), e(n, i), e(i, c), e(c, g), e(g, f), e(c, b), e(c, _), e(i, x), e(i, w), e(w, z), e(n, V)
        },
        p: qt,
        d(D) {
            D && r(n)
        }
    }
}

function Ae(p) {
    let n, i, c, g, d, f, b, _;
    return {
        c() {
            n = l("li"), i = l("a"), c = l("img"), _ = h(), this.h()
        },
        l(v) {
            n = o(v, "LI", {
                style: !0
            });
            var x = u(n);
            i = o(x, "A", {
                href: !0,
                title: !0,
                target: !0
            });
            var w = u(i);
            c = o(w, "IMG", {
                src: !0,
                alt: !0
            }), w.forEach(r), _ = m(x), x.forEach(r), this.h()
        },
        h() {
            de(c.src, g = "/images/socials/" + p[5].title + ".webp") || a(c, "src", g), a(c, "alt", d = p[5].title + " icon"), a(i, "href", f = p[5].link), a(i, "title", b = "share on " + p[5].title), a(i, "target", "_blank"), j(n, "width", "30px", 1), j(n, "height", "30px", 1), j(n, "display", "flex"), j(n, "justify-content", "center"), j(n, "align-items", "center"), j(n, "margin", "3px")
        },
        m(v, x) {
            U(v, n, x), e(n, i), e(i, c), e(n, _)
        },
        p(v, x) {
            x & 1 && !de(c.src, g = "/images/socials/" + v[5].title + ".webp") && a(c, "src", g), x & 1 && d !== (d = v[5].title + " icon") && a(c, "alt", d), x & 1 && f !== (f = v[5].link) && a(i, "href", f), x & 1 && b !== (b = "share on " + v[5].title) && a(i, "title", b)
        },
        d(v) {
            v && r(n)
        }
    }
}

function Ge(p) {
    let n, i, c = '<img src="https://s3.amazonaws.com/logged-assets/trust-badge/2024/mlh-trust-badge-2024-white.svg" alt="Major League Hacking 2024 Hackathon Season" style="width:100%"/>',
        g, d, f, b = `<div class="bg-purple opacity-60 -top-10 left-[500px] absolute w-[200px] rounded-full blur-3xl aspect-square"></div> <section id="hero" class="max-lg:text-center pb-0 relative"><div class="relative max-w-6xl container lg:grid grid-cols-2 items-center space-y-4"><div class="lg:absolute -top-10 right-0"><h2 class="font-bold text-[20px] lg:text-[24px] italic lg:px-4 relative"></h2></div> <div class="space-y-4 relative" data-animate="" data-animation-direction="up" data-animation-delay=".2"><div class="pointer-events-none absolute inset-0"><img src="/images/stars/star.png" alt="star" class="not-sr-only -top-8 left-0 absolute animate-pulse scale-75" loading="lazy"/> <img src="/images/stars/star.png" alt="star" loading="lazy" class="not-sr-only -top-12 right-0 absolute animate-pulse scale-50"/> <img src="/images/stars/star.png" alt="star" loading="lazy" class="not-sr-only bottom-0 right-32 z-10 absolute animate-pulse scale-50"/></div> <div class="space-y-0"><h1 class="title-1 relative"><img src="/images/bulb.png" alt="bulb" class="not-sr-only -top-12 md:-top-14 right-12 md:right-28 absolute scale-50 md:scale-75" loading="lazy"/>
              TuringHacX
              <br/>
              Hackathon <span class="text-pink"></span><span class="text-[30px]">🔗🔥</span></h1> <p class="max-w-md max-lg:container max-lg:max-w-lg pt-2">Join us for an exhilarating journey of innovation and creativity at
              the first-ever Hackathon hosted by Pandit Deendayal Energy University
              PDEU!</p> <p class="max-w-md max-lg:container max-lg:max-w-lg pt-5">Due to scheduling conflict with SIH Hackathon, TuringHacX has been
              rescheduled until further notice. The revised timeline will be communicated
              shortly, and registration will open soon after.</p></div> <p class="pt-1"></p></div> <div class="max-xl:lg:min-h-[80vh] relative flex items-center" data-animate="" data-animation-delay=".6"><img class="absolute bottom-0 inset-x-0" src="/images/man-wearing-smart-glasses-touching-virtual-screen.webp" alt="man wearing smart glasses touching virtual screen"/> <img src="/images/hero-stary-field.webp" alt="hero stary field" class="animate-pulse"/></div></div></section>`,
        _, v, x = `<div class="max-w-6xl container grid lg:grid-cols-2 max-lg:gap-16 max-lg:text-center items-center"><div class="relative flex justify-center"><img src="/images/arrow.png" alt="arrow" class="not-sr-only -bottom-16 right-42 md:right-24 absolute scale-75" loading="lazy"/> <div class="pointer-events-none absolute inset-0"><img src="/images/stars/star2.png" alt="star" loading="lazy" class="not-sr-only top-12 absolute animate-pulse scale-50"/></div> <img data-animate="" data-animation="pop" src="/images/the-big-idea.webp" alt="infographic showing different elements and how they link together to form an idea"/></div> <div class="relative space-y-4"><div class="pointer-events-none absolute inset-0"><img src="/images/stars/star2.png" alt="star" loading="lazy" class="not-sr-only top-8 right-0 absolute animate-pulse scale-50"/></div> <h2 class="heading-1"><span data-animate-text="" data-animation-direction="left">Introduction to Turing</span> <span data-animate-text="" data-animation-delay=".2" data-animation-direction="left" data-animation-selection="letters" class="text-purple">HacX</span></h2> <p data-animate-text="" data-animation-direction="up">Welcome to TuringHacX, where innovation knows no limits. At
          TuringHacX, we believe in the transformative power of technology and
          its capacity to reshape the world as we know it. Our hackathon is more
          than an event; it&#39;s a celebration of human ingenuity, a convergence of
          brilliant minds, and a platform where innovation thrives.</p></div></div>`,
        w, k, z = `<div class="bg-purple opacity-20 top-[10%] left-[300px] absolute w-[500px] rounded-full blur-3xl aspect-square"></div> <div class="bg-purple opacity-20 bottom-[10%] -right-[100px] absolute w-[300px] rounded-full blur-3xl aspect-square"></div> <div class="max-w-6xl container grid lg:grid-cols-2 max-lg:text-center items-center"><div class="relative space-y-4"><div class="pointer-events-none absolute inset-0"><div class="opacity-50"><img src="/images/stars/star.png" alt="star" loading="lazy" class="not-sr-only top-0 left-64 absolute animate-pulse scale-75"/></div> <img src="/images/stars/star.png" alt="star" loading="lazy" class="not-sr-only -bottom-4 -right-14 absolute animate-pulse scale-75"/></div> <h2 class="heading-1"><span data-animate-text="">Rules and</span> <span class="block text-purple" data-animation-selection="letters" data-animate-text="" data-animation-delay=".2">Guidelines</span></h2> <p data-animate-text="" data-animation-direction="up">Our tech hackathon is a melting pot of visionaries, and its purpose is
          as clear as day: to shape the future. Whether you&#39;re a coding genius,
          a design maverick, or a concept wizard, you&#39;ll have the chance to
          transform your ideas into reality. Solving real-world problems,
          pushing the boundaries of technology, and creating solutions that can
          change the world, that&#39;s what we&#39;re all about!</p></div> <div class="max-lg:order-first"><img data-animate="" data-animation="pop" data-animation-direction="left" src="/images/woman-with-tab.webp" alt="woman with tablet"/></div></div>`,
        V, D, W = `<div class="max-w-6xl container space-y-8"><div class="text-center max-w-sm container"><h2 class="heading-1" data-animate-text="" data-animation-selection="letters" data-animation-direction="down">Timeline</h2> <p data-animate-text="" data-animation-direction="up" data-animation-delay=".4">Due to scheduling conflict with SIH Hackathon, TuringHacX has been
          rescheduled until further notice. The revised timeline will be
          communicated shortly, and registration will open soon after.</p></div></div>`,
        F, q, It = '<div class="bg-purple opacity-20 top-[10%] left-[100px] absolute w-[500px] rounded-full blur-3xl aspect-square"></div> <div class="bg-purple opacity-20 bottom-[10%] -right-[100px] absolute w-[300px] rounded-full blur-3xl aspect-square"></div> <div class="max-w-6xl container lg:grid grid-cols-2 max-lg:space-y-12"><div class="text-center lg:hidden"><h2 class="heading-1"><span class="heading-1" data-animate-text="">Prizes and</span> <span data-animate-text="" data-animation-selection="letters" class="text-purple block">Rewards</span></h2> <p data-animate-text="">Highlight of the prizes or rewards for winners and for participants.</p></div> <div class="flex justify-center"><img data-animate="" data-animation="pop" src="/images/trophy.webp" alt="trophy for winner"/></div> <div class="space-y-32"><div class="max-lg:hidden"><h2 class="heading-1"><span data-animate-text="" data-animation-direction="left">Prizes and</span> <span data-animate-text="" data-animation-selection="letters" data-animation-direction="left" data-animation-delay=".2" class="text-purple block">Rewards</span></h2> <p data-animate-text="" data-animation-direction="up" data-animation-delay=".4">Highlight of the prizes or rewards for winners and for participants.</p></div> <ul data-animate="" data-animation-direction="up" class="flex items-center justify-center gap-4 text-2xl font-bold text-center"><li class="relative pt-20 pb-10 bg-pink/[12%] px-2 sm:px-6 border border-pink rounded-md"><div class="absolute inset-x-0 top-0 translate-y-[-50%] flex justify-center"><img src="/images/silver_medal.webp" alt="silver medal" class="w-[70%]"/></div> <h3>2nd</h3> <p class="text-sm md:text-lg font-semibold">Place</p> <p class="text-pink text-[16px] md:text-lg">₹50,000</p></li> <li class="relative pt-32 pb-10 bg-purple/[12%] px-2 sm:px-6 border border-purple rounded-md"><div class="absolute inset-x-0 top-0 translate-y-[-50%] flex justify-center"><img src="/images/gold_medal.webp" alt="gold medal"/></div> <h3>1st</h3> <p class="text-sm md:text-lg font-semibold">Place</p> <p class="text-purple text-[16px] md:text-lg">₹1,00,000</p></li> <li class="relative pt-20 pb-10 bg-pink/[12%] px-2 sm:px-6 border border-pink rounded-md"><div class="absolute inset-x-0 top-0 translate-y-[-50%] flex justify-center"><img src="/images/bronze_medal.webp" alt="bronze medal" class="w-[70%]"/></div> <h3>3rd</h3> <p class="text-sm md:text-lg font-semibold">Place</p> <p class="text-pink text-[16px] md:text-lg">₹25,000</p></li></ul></div></div>',
        vt, O, Et, Gt, Lt, Jt, G, it, ue = `<h2 class="heading-1" data-animate-text="" data-animation-selection="letters" data-animation-direction="up">Partners and Sponsors</h2> <p data-animate-text="" data-animation-delay=".5" data-animation-direction="up">TuringHacX hackathon is honored to have the following major companies
          as its partners and sponsors</p>`,
        Bt, J, X, zt, st, pe = '<div class="absolute inset-0 flex items-center"></div> <div class="px-10 absolute inset-0 flex items-center justify-around"></div> <div class="px-10 absolute inset-0 flex items-center justify-around"><span class="rounded-full my-auto h-6 w-6 bg-dark"></span> <span class="rounded-full my-auto h-6 w-6 bg-dark"></span></div>',
        Yt, A, Ct, Qt, Mt, Kt, B, nt, he = '<div class="pointer-events-none absolute inset-0"><img src="/images/stars/star2.png" alt="star" loading="lazy" class="not-sr-only -top-20 left-20 absolute animate-pulse scale-50"/> <div class="opacity-30 absolute inset-0 flex items-center justify-center"><img src="/images/stars/star.png" alt="star" loading="lazy" class="not-sr-only animate-pulse scale-50"/></div> <img src="/images/stars/star2.png" alt="star" loading="lazy" class="not-sr-only -bottom-4 right-6 absolute animate-pulse scale-50"/></div> <img data-animate="" data-animation="pop" src="/images/two-people-doing-some-analysis.webp" alt="two people doing some analysis"/>',
        $t, P, lt, me = '<span data-animate-text="" data-animation-direction="left">Judging Criteria</span> <span data-animate-text="" data-animation-direction="left" data-animation-selection="letters" data-animation-delay=".2" class="block text-purple">Key attributes</span>',
        Zt, S, te, R, ge = '<p><a href="#" class="btn">Read More</a></p>',
        ee, ft, Y, N, ot, ve = '<img src="/images/stars/star2.png" alt="star" loading="lazy" class="not-sr-only top-0 -left-8 absolute animate-pulse scale-75"/>',
        ae, rt, fe = '<h2 class="heading-1"><span data-animate-text="">Frequently Asked</span> <span data-animate-text="" data-animation-selection="letters" data-animation-direction="left" data-animation-delay=".2" class="block text-purple">Questions</span></h2> <p><span data-animate-text="" data-animation-direction="up" data-animation-delay=".4">We got answers to the questions that you might want to ask about</span> <span data-animate-text="" data-animation-direction="up" data-animation-delay=".6" class="font-bold">TuringHacX hackathon</span></p>',
        ie, Q, se, xt, xe = '<img data-animate="" data-animation="pop" data-animation-direction="left" src="/images/man-thinking.webp" alt="man sitting on cloud and thinking"/>',
        Vt, ct, K, $, dt, be = `<div class="space-y-2"><a href="/"><h2 class="text-[26px] heading-1">Turing<span class="text-pink">HacX</span></h2></a> <p class="max-w-sm">TuringHacX Hackathon is a technology innovation program established
            by a group of organizations with the aim of showcasing young and
            talented individuals in the field of technology</p></div> <ul class="flex items-center divide-x-2 divide-purple"></ul>`,
        ne, Z, tt, ut, ye = '<h2 class="font-bold text-pink">Useful Links</h2> <ul class="space-y-2"><li><a href="/#overview">Overview</a></li> <li><a href="/#timeline">Timeline</a></li> <li><a href="/#faqs">FAQs</a></li> <li><a href="/register">Apply with devfolio</a> <div class="apply-button" data-hackathon-slug="turinghacx" data-button-theme="light" style="height: 44px; width: 312px"></div></li></ul>',
        le, et, pt, we = "Follow us",
        oe, ht, re, mt, _e = `<h2 class="font-bold text-pink"><a href="/contact-us">Contact Us</a></h2> <ul class="space-y-2"><li><a href="#"><b>Pandit Deendayal Energy University</b> <br/> Knowledge Corridor,
                Raisan Village, PDPU Rd, Gandhinagar, Gujarat 382007</a></li></ul>`,
        ce, gt, ke = "<p>All rights reserved. © TuringHacX Ltd.</p>",
        bt = at(p[3]),
        H = [];
    for (let s = 0; s < bt.length; s += 1) H[s] = ze(qe(p, bt, s));
    let yt = at(p[1]),
        I = [];
    for (let s = 0; s < yt.length; s += 1) I[s] = Ve(De(p, yt, s));
    let wt = at(p[2]),
        E = [];
    for (let s = 0; s < wt.length; s += 1) E[s] = Oe(je(p, wt, s));
    let _t = at(p[0]),
        L = [];
    for (let s = 0; s < _t.length; s += 1) L[s] = Ae(Me(p, _t, s));
    return {
        c() {
            n = h(), i = l("a"), i.innerHTML = c, g = h(), d = l("main"), f = l("div"), f.innerHTML = b, _ = h(), v = l("section"), v.innerHTML = x, w = h(), k = l("section"), k.innerHTML = z, V = h(), D = l("section"), D.innerHTML = W, F = h(), q = l("section"), q.innerHTML = It, vt = h(), O = l("section"), Et = l("div"), Gt = h(), Lt = l("div"), Jt = h(), G = l("div"), it = l("div"), it.innerHTML = ue, Bt = h(), J = l("div"), X = l("ul");
            for (let s = 0; s < H.length; s += 1) H[s].c();
            zt = h(), st = l("div"), st.innerHTML = pe, Yt = h(), A = l("section"), Ct = l("div"), Qt = h(), Mt = l("div"), Kt = h(), B = l("div"), nt = l("div"), nt.innerHTML = he, $t = h(), P = l("div"), lt = l("h2"), lt.innerHTML = me, Zt = h(), S = l("ul");
            for (let s = 0; s < I.length; s += 1) I[s].c();
            te = h(), R = l("div"), R.innerHTML = ge, ee = h(), ft = l("section"), Y = l("div"), N = l("div"), ot = l("div"), ot.innerHTML = ve, ae = h(), rt = l("div"), rt.innerHTML = fe, ie = h(), Q = l("ul");
            for (let s = 0; s < E.length; s += 1) E[s].c();
            se = h(), xt = l("div"), xt.innerHTML = xe, Vt = h(), ct = l("footer"), K = l("div"), $ = l("div"), dt = l("div"), dt.innerHTML = be, ne = h(), Z = l("div"), tt = l("div"), ut = l("nav"), ut.innerHTML = ye, le = h(), et = l("div"), pt = l("h2"), pt.textContent = we, oe = h(), ht = l("ul");
            for (let s = 0; s < L.length; s += 1) L[s].c();
            re = h(), mt = l("nav"), mt.innerHTML = _e, ce = h(), gt = l("div"), gt.innerHTML = ke, this.h()
        },
        l(s) {
            Re("svelte-19cdwm1", document.head).forEach(r), n = m(s), i = o(s, "A", {
                id: !0,
                style: !0,
                href: !0,
                target: !0,
                "data-svelte-h": !0
            }), y(i) !== "svelte-1itk28u" && (i.innerHTML = c), g = m(s), d = o(s, "MAIN", {
                class: !0
            });
            var t = u(d);
            f = o(t, "DIV", {
                class: !0,
                "data-svelte-h": !0
            }), y(f) !== "svelte-1wsr6m0" && (f.innerHTML = b), _ = m(t), v = o(t, "SECTION", {
                id: !0,
                "data-svelte-h": !0
            }), y(v) !== "svelte-76namw" && (v.innerHTML = x), w = m(t), k = o(t, "SECTION", {
                class: !0,
                "data-svelte-h": !0
            }), y(k) !== "svelte-1yzj429" && (k.innerHTML = z), V = m(t), D = o(t, "SECTION", {
                id: !0,
                "data-svelte-h": !0
            }), y(D) !== "svelte-jyxsa4" && (D.innerHTML = W), F = m(t), q = o(t, "SECTION", {
                class: !0,
                "data-svelte-h": !0
            }), y(q) !== "svelte-9jqryo" && (q.innerHTML = It), vt = m(t), O = o(t, "SECTION", {
                class: !0
            });
            var T = u(O);
            Et = o(T, "DIV", {
                class: !0
            }), u(Et).forEach(r), Gt = m(T), Lt = o(T, "DIV", {
                class: !0
            }), u(Lt).forEach(r), Jt = m(T), G = o(T, "DIV", {
                class: !0
            });
            var Ot = u(G);
            it = o(Ot, "DIV", {
                class: !0,
                "data-svelte-h": !0
            }), y(it) !== "svelte-17yqm8j" && (it.innerHTML = ue), Bt = m(Ot), J = o(Ot, "DIV", {
                class: !0,
                "data-animate": !0,
                "data-animation-direction": !0
            });
            var Te = u(J);
            X = o(Te, "UL", {
                class: !0
            });
            var At = u(X);
            for (let M = 0; M < H.length; M += 1) H[M].l(At);
            zt = m(At), st = o(At, "DIV", {
                class: !0,
                "data-svelte-h": !0
            }), y(st) !== "svelte-13gy5yb" && (st.innerHTML = pe), At.forEach(r), Te.forEach(r), Ot.forEach(r), T.forEach(r), Yt = m(t), A = o(t, "SECTION", {
                class: !0
            });
            var kt = u(A);
            Ct = o(kt, "DIV", {
                class: !0
            }), u(Ct).forEach(r), Qt = m(kt), Mt = o(kt, "DIV", {
                class: !0
            }), u(Mt).forEach(r), Kt = m(kt), B = o(kt, "DIV", {
                class: !0
            });
            var Pt = u(B);
            nt = o(Pt, "DIV", {
                class: !0,
                "data-svelte-h": !0
            }), y(nt) !== "svelte-iibzj" && (nt.innerHTML = he), $t = m(Pt), P = o(Pt, "DIV", {
                class: !0
            });
            var Tt = u(P);
            lt = o(Tt, "H2", {
                class: !0,
                "data-svelte-h": !0
            }), y(lt) !== "svelte-1j99wjo" && (lt.innerHTML = me), Zt = m(Tt), S = o(Tt, "UL", {
                class: !0,
                "data-animate": !0,
                "data-animation-delay": !0,
                "data-animation-direction": !0
            });
            var He = u(S);
            for (let M = 0; M < I.length; M += 1) I[M].l(He);
            He.forEach(r), te = m(Tt), R = o(Tt, "DIV", {
                "data-animate": !0,
                "data-animation-delay": !0,
                "data-animation-direction": !0,
                "data-svelte-h": !0
            }), y(R) !== "svelte-j17nja" && (R.innerHTML = ge), Tt.forEach(r), Pt.forEach(r), kt.forEach(r), ee = m(t), ft = o(t, "SECTION", {
                id: !0
            });
            var Ie = u(ft);
            Y = o(Ie, "DIV", {
                class: !0
            });
            var St = u(Y);
            N = o(St, "DIV", {
                class: !0
            });
            var Ht = u(N);
            ot = o(Ht, "DIV", {
                class: !0,
                "data-svelte-h": !0
            }), y(ot) !== "svelte-u81e6" && (ot.innerHTML = ve), ae = m(Ht), rt = o(Ht, "DIV", {
                class: !0,
                "data-svelte-h": !0
            }), y(rt) !== "svelte-nllxfl" && (rt.innerHTML = fe), ie = m(Ht), Q = o(Ht, "UL", {
                class: !0,
                "data-animate": !0
            });
            var Ee = u(Q);
            for (let M = 0; M < E.length; M += 1) E[M].l(Ee);
            Ee.forEach(r), Ht.forEach(r), se = m(St), xt = o(St, "DIV", {
                "data-svelte-h": !0
            }), y(xt) !== "svelte-y759yp" && (xt.innerHTML = xe), St.forEach(r), Ie.forEach(r), t.forEach(r), Vt = m(s), ct = o(s, "FOOTER", {
                class: !0
            });
            var Le = u(ct);
            K = o(Le, "DIV", {
                class: !0
            });
            var Nt = u(K);
            $ = o(Nt, "DIV", {
                class: !0
            });
            var Ut = u($);
            dt = o(Ut, "DIV", {
                class: !0,
                "data-svelte-h": !0
            }), y(dt) !== "svelte-c2831w" && (dt.innerHTML = be), ne = m(Ut), Z = o(Ut, "DIV", {
                class: !0
            });
            var Xt = u(Z);
            tt = o(Xt, "DIV", {
                class: !0
            });
            var Rt = u(tt);
            ut = o(Rt, "NAV", {
                class: !0,
                "data-svelte-h": !0
            }), y(ut) !== "svelte-1e01zkd" && (ut.innerHTML = ye), le = m(Rt), et = o(Rt, "DIV", {
                class: !0
            });
            var Wt = u(et);
            pt = o(Wt, "H2", {
                class: !0,
                "data-svelte-h": !0
            }), y(pt) !== "svelte-1y3lo5" && (pt.textContent = we), oe = m(Wt), ht = o(Wt, "UL", {
                class: !0
            });
            var Ce = u(ht);
            for (let M = 0; M < L.length; M += 1) L[M].l(Ce);
            Ce.forEach(r), Wt.forEach(r), Rt.forEach(r), re = m(Xt), mt = o(Xt, "NAV", {
                class: !0,
                "data-svelte-h": !0
            }), y(mt) !== "svelte-2r9x4r" && (mt.innerHTML = _e), Xt.forEach(r), Ut.forEach(r), ce = m(Nt), gt = o(Nt, "DIV", {
                class: !0,
                "data-svelte-h": !0
            }), y(gt) !== "svelte-4ttcq9" && (gt.innerHTML = ke), Nt.forEach(r), Le.forEach(r), this.h()
        },
        h() {
            document.title = "TuringHacX hackathon", a(i, "id", "mlh-trust-badge"), j(i, "display", "block"), j(i, "max-width", "100px"), j(i, "min-width", "60px"), j(i, "position", "fixed"), j(i, "right", "50px"), j(i, "top", "0"), j(i, "width", "10%"), j(i, "z-index", "10000"), a(i, "href", "https://mlh.io/apac?utm_source=apac-hackathon&utm_medium=TrustBadge&utm_campaign=2024-season&utm_content=white"), a(i, "target", "_blank"), a(f, "class", "relative"), a(v, "id", "overview"), a(k, "class", "relative"), a(D, "id", "timeline"), a(q, "class", "relative"), a(Et, "class", "bg-purple opacity-20 top-[10%] left-[50px] absolute w-[300px] rounded-full blur-3xl aspect-square"), a(Lt, "class", "bg-purple opacity-20 bottom-[10%] -right-[80px] absolute w-[300px] rounded-full blur-3xl aspect-square"), a(it, "class", "max-w-lg container space-y-4"), a(st, "class", "max-sm:invisible absolute inset-0 pointer-events-none"), a(X, "class", "grid sm:grid-cols-3 gap-16 md:gap-20 items-center relative"), a(J, "class", "w-full border border-pink rounded-sm min-h-[100px] flex items-center justify-center p-10"), a(J, "data-animate", ""), a(J, "data-animation-direction", "down"), a(G, "class", "max-w-6xl container text-center space-y-8"), a(O, "class", "relative"), a(Ct, "class", "bg-purple opacity-20 top-[10%] left-[100px] absolute w-[500px] rounded-full blur-3xl aspect-square"), a(Mt, "class", "bg-purple opacity-20 bottom-[10%] -right-[100px] absolute w-[300px] rounded-full blur-3xl aspect-square"), a(nt, "class", "relative"), a(lt, "class", "heading-1"), a(S, "class", "space-y-4"), a(S, "data-animate", ""), a(S, "data-animation-delay", ".5"), a(S, "data-animation-direction", "left"), a(R, "data-animate", ""), a(R, "data-animation-delay", ".2"), a(R, "data-animation-direction", "left"), a(P, "class", "space-y-8"), a(B, "class", "max-w-6xl container lg:grid grid-cols-2 max-lg:text-center items-center"), a(A, "class", "relative"), a(ot, "class", "pointer-events-none absolute inset-0"), a(rt, "class", "space-y-4 max-lg:text-center"), a(Q, "class", "divide-y divide-pink"), a(Q, "data-animate", ""), a(N, "class", "relative space-y-12"), a(Y, "class", "max-w-6xl container lg:grid grid-cols-2"), a(ft, "id", "faqs"), a(d, "class", "divide-y divide-white/[18%]"), a(dt, "class", "max-lg:space-y-8 space-y-16"), a(ut, "class", "space-y-2"), a(pt, "class", "font-bold text-pink"), a(ht, "class", "flex items-center gap-2 justify-center"), a(et, "class", "flex gap-4 items-center"), a(tt, "class", "space-y-4"), a(mt, "class", "space-y-2"), a(Z, "class", "max-lg:space-y-8 lg:grid grid-cols-2"), a($, "class", "max-lg:space-y-8 lg:grid grid-cols-2"), a(gt, "class", "text-center py-4"), a(K, "class", "max-w-6xl container space-y-6"), a(ct, "class", "bg-[#100B20] text-sm py-12")
        },
        m(s, C) {
            U(s, n, C), U(s, i, C), U(s, g, C), U(s, d, C), e(d, f), e(d, _), e(d, v), e(d, w), e(d, k), e(d, V), e(d, D), e(d, F), e(d, q), e(d, vt), e(d, O), e(O, Et), e(O, Gt), e(O, Lt), e(O, Jt), e(O, G), e(G, it), e(G, Bt), e(G, J), e(J, X);
            for (let t = 0; t < H.length; t += 1) H[t] && H[t].m(X, null);
            e(X, zt), e(X, st), e(d, Yt), e(d, A), e(A, Ct), e(A, Qt), e(A, Mt), e(A, Kt), e(A, B), e(B, nt), e(B, $t), e(B, P), e(P, lt), e(P, Zt), e(P, S);
            for (let t = 0; t < I.length; t += 1) I[t] && I[t].m(S, null);
            e(P, te), e(P, R), e(d, ee), e(d, ft), e(ft, Y), e(Y, N), e(N, ot), e(N, ae), e(N, rt), e(N, ie), e(N, Q);
            for (let t = 0; t < E.length; t += 1) E[t] && E[t].m(Q, null);
            e(Y, se), e(Y, xt), U(s, Vt, C), U(s, ct, C), e(ct, K), e(K, $), e($, dt), e($, ne), e($, Z), e(Z, tt), e(tt, ut), e(tt, le), e(tt, et), e(et, pt), e(et, oe), e(et, ht);
            for (let t = 0; t < L.length; t += 1) L[t] && L[t].m(ht, null);
            e(Z, re), e(Z, mt), e(K, ce), e(K, gt)
        },
        p(s, [C]) {
            if (C & 8) {
                bt = at(s[3]);
                let t;
                for (t = 0; t < bt.length; t += 1) {
                    const T = qe(s, bt, t);
                    H[t] ? H[t].p(T, C) : (H[t] = ze(T), H[t].c(), H[t].m(X, zt))
                }
                for (; t < H.length; t += 1) H[t].d(1);
                H.length = bt.length
            }
            if (C & 2) {
                yt = at(s[1]);
                let t;
                for (t = 0; t < yt.length; t += 1) {
                    const T = De(s, yt, t);
                    I[t] ? I[t].p(T, C) : (I[t] = Ve(T), I[t].c(), I[t].m(S, null))
                }
                for (; t < I.length; t += 1) I[t].d(1);
                I.length = yt.length
            }
            if (C & 4) {
                wt = at(s[2]);
                let t;
                for (t = 0; t < wt.length; t += 1) {
                    const T = je(s, wt, t);
                    E[t] ? E[t].p(T, C) : (E[t] = Oe(T), E[t].c(), E[t].m(Q, null))
                }
                for (; t < E.length; t += 1) E[t].d(1);
                E.length = wt.length
            }
            if (C & 1) {
                _t = at(s[0]);
                let t;
                for (t = 0; t < _t.length; t += 1) {
                    const T = Me(s, _t, t);
                    L[t] ? L[t].p(T, C) : (L[t] = Ae(T), L[t].c(), L[t].m(ht, null))
                }
                for (; t < L.length; t += 1) L[t].d(1);
                L.length = _t.length
            }
        },
        i: qt,
        o: qt,
        d(s) {
            s && (r(n), r(i), r(g), r(d), r(Vt), r(ct)), Ft(H, s), Ft(I, s), Ft(E, s), Ft(L, s)
        }
    }
}

function Je(p, n, i) {
    let c;
    return Se(p, We, b => i(0, c = b)), Ne(() => {
        Fe()
    }), [c, [{
            title: "Innovation and Creativity",
            description: "Evaluate the uniqueness and creativity of the solution. Consider whether it addresses a real-world problem in a novel  way or introduces innovative features."
        }, {
            title: "Functionality",
            description: "Assess how well the solution works. Does it perform its intended functions effectively and without major issues? Judges would consider the completeness and robustness of the solution."
        }, {
            title: "Impact and Relevance",
            description: "Determine the potential impact of the solution in the real world. Does it address a significant problem, and is it relevant to the target audience? Judges would assess the potential social,  economic, or environmental benefits."
        }, {
            title: "Technical Complexity",
            description: "Evaluate the technical sophistication of the solution. Judges would consider the complexity of the code, the use of advanced technologies or algorithms, and the scalability of the solution."
        }, {
            title: "Adherence to Hackathon Rules",
            description: "Judges will Ensure that the team adhered to the rules and guidelines of the hackathon, including deadlines, use of specific technologies or APIs, and any other competition-specific requirements."
        }],
        [{
            question: "Can I work on a project I started before the hackathon?",
            answer: "Yes, you can work on a project you started before the hackathon. However, you must disclose this information to the judges during the judging process."
        }, {
            question: "What happens if I need help during the hackathon?",
            answer: "We will have mentors available to help you with any technical or non-technical issues you may face during the hackathon. You can also reach out to the organizers via the Discord server."
        }, {
            question: "What happens if I don't have an idea for a project?",
            answer: "We will have mentors available to help you with any technical or non-technical issues you may face during the hackathon. You can also reach out to the organizers via the Discord server."
        }, {
            question: "Can I join a team or do I have to come with one?",
            answer: "You can join a team or come with one. If you don't have a team, we will have a team formation session at the beginning of the hackathon where you can meet other participants and form a team."
        }, {
            question: "What happens after the hackathon ends",
            answer: "Each team's project would be evaluated by the judges, and the winners would be announced. The top three teams would be awarded prizes. The other teams would be mentored to help them improve and  complete their projects."
        }],
        [{
            title: "MLH",
            format: "png"
        }, {
            title: "GITHUB",
            format: "png"
        }, {
            title: "ECHO3D",
            format: "png"
        }, {
            title: "STANDOUTSTICKER",
            format: "png"
        }, {
            title: "WA",
            format: "png"
        }, {
            title: "DEVFOLIO",
            format: "webp"
        }, {
            title: "POLYGON",
            format: "webp"
        }, {
            title: "REPLIT",
            format: "webp"
        }]
    ]
}
class Ze extends Ue {
    constructor(n) {
        super(), Xe(this, n, Je, Ge, Pe, {})
    }
}
export {
    Ze as component
};