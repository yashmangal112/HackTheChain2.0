import {
    a as g,
    g as m,
    S as T
} from "./ScrollTrigger.98dab6ad.js";
class x {
    constructor(a) {
        return this.result = new Object, this.result.originalText = a.innerText, this.result.splitted = this.split(a), this.result.words = this.result.splitted.querySelectorAll(".SplitTextJS-wrapper"), this.result.chars = this.result.splitted.querySelectorAll(".SplitTextJS-char"), this.result.spaces = this.result.splitted.querySelectorAll(".SplitTextJS-spacer"), this.result
    }
    createSpan(a) {
        let i = document.createElement("span");
        return i.style.display = "inline-block", i.className = a, i
    }
    split(a) {
        let i = new Array;
        const n = a.innerText.split(" ");
        let u = n.length;
        return n.map(p => {
            const e = this.createSpan("SplitTextJS-wrapper");
            if (p.split(/(?!^)/).map(t => {
                    let s = this.createSpan("SplitTextJS-char");
                    s.innerText = t, e.appendChild(s)
                }), u--, i.push(e), u > 0) {
                let t = this.createSpan("SplitTextJS-char SplitTextJS-spacer");
                t.innerHTML = "&nbsp;", i.push(t)
            }
        }), a.innerHTML = "", i.forEach(p => {
            a.appendChild(p)
        }), a
    }
}
var b = x;
const y = g(b);

function A() {
    const h = "span, p, h1, h2, h3, h4, h5, a".split(", "),
        a = ["[data-animate-text]"];
    h.forEach(e => a.push(`${e}[data-animate-text]`)), document.querySelectorAll(a.join(", ")).forEach(e => {
        e.querySelectorAll([h]).forEach(s => {
            new y(s)
        }), new y(e)
    }), m.registerPlugin(T);

    function n(e, t) {
        T.create({
            trigger: e,
            start: "top bottom",
            onLeaveBack: () => {
                t.restart(), t.pause()
            }
        }), T.create({
            trigger: e,
            start: "top 60%",
            onEnter: () => t.play()
        })
    }

    function u(e) {
        document.querySelectorAll(e).forEach(t => {
            let s = t.dataset.animationDirection || "right",
                l = "",
                d = t.dataset.animationSelection || "words",
                o = 30,
                r = "xPercent",
                c = t.dataset.animationDelay || 0;
            switch (s) {
                case "right":
                    o *= -1;
                    break;
                case "up":
                    r = "yPercent";
                    break;
                case "down":
                    r = "yPercent", o *= -1;
                    break
            }
            switch (d) {
                case "words":
                    l = ".SplitTextJS-wrapper";
                    break;
                case "letters":
                    l = ".SplitTextJS-char";
                    break
            }
            let S = m.timeline({
                paused: !0,
                delay: c
            });
            S.from(t, {
                opacity: 0,
                [r]: o * -1
            }).from(t.querySelectorAll(l), {
                [r]: o,
                opacity: 0,
                duration: .5,
                ease: "back.out(2)",
                stagger: {
                    amount: .5
                }
            }), t.hasAttribute("data-animation-is-not-scroll-triggered") ? S.play() : n(t, S)
        })
    }

    function p(e) {
        document.querySelectorAll(e).forEach(t => {
            let s = t.dataset.animationDelay || 0,
                l = m.timeline({
                    paused: !0,
                    delay: s
                }),
                d = t.dataset.animation || "slide",
                o = t.dataset.animationDirection || "right";
            switch (d) {
                case "pop":
                    l.from(t, {
                        opacity: 0,
                        scale: 0,
                        rotate: o == "right" ? -45 : 45,
                        ease: "back.out(2)"
                    }).to(t, {
                        autoAlpha: 1
                    }, "<");
                    break;
                default:
                    let r = 30,
                        c = "xPercent";
                    switch (o) {
                        case "right":
                            r *= -1;
                            break;
                        case "up":
                            c = "yPercent";
                            break;
                        case "down":
                            c = "yPercent", r *= -1;
                            break
                    }
                    l.from(t, {
                        opacity: 0,
                        [c]: r * -1
                    }).to(t, {
                        autoAlpha: 1
                    }, "<").from(t.children, {
                        [c]: r,
                        opacity: 0,
                        duration: .5,
                        ease: "back.out(2)",
                        stagger: {
                            amount: .5
                        }
                    });
                    break
            }
            t.hasAttribute("data-animation-is-not-scroll-triggered") ? l.play() : n(t, l)
        })
    }
    p("[data-animate]"), u("[data-animate-text]")
}
export {
    A as a
};