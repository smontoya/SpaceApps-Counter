! function() {
    function n(n, t) {
        return t > n ? -1 : n > t ? 1 : n >= t ? 0 : 0 / 0
    }

    function t(n) {
        return null != n && !isNaN(n)
    }

    function e(n) {
        return {
            left: function(t, e, r, u) {
                for (arguments.length < 3 && (r = 0), arguments.length < 4 && (u = t.length); u > r;) {
                    var i = r + u >>> 1;
                    n(t[i], e) < 0 ? r = i + 1 : u = i
                }
                return r
            },
            right: function(t, e, r, u) {
                for (arguments.length < 3 && (r = 0), arguments.length < 4 && (u = t.length); u > r;) {
                    var i = r + u >>> 1;
                    n(t[i], e) > 0 ? u = i : r = i + 1
                }
                return r
            }
        }
    }

    function r(n) {
        return n.length
    }

    function u(n) {
        for (var t = 1; n * t % 1;) t *= 10;
        return t
    }

    function i(n, t) {
        try {
            for (var e in t) Object.defineProperty(n.prototype, e, {
                value: t[e],
                enumerable: !1
            })
        } catch (r) {
            n.prototype = t
        }
    }

    function o() {}

    function a(n) {
        return ha + n in this
    }

    function c(n) {
        return n = ha + n, n in this && delete this[n]
    }

    function s() {
        var n = [];
        return this.forEach(function(t) {
            n.push(t)
        }), n
    }

    function l() {
        var n = 0;
        for (var t in this) t.charCodeAt(0) === ga && ++n;
        return n
    }

    function f() {
        for (var n in this)
            if (n.charCodeAt(0) === ga) return !1;
        return !0
    }

    function h() {}

    function g(n, t, e) {
        return function() {
            var r = e.apply(t, arguments);
            return r === t ? n : r
        }
    }

    function p(n, t) {
        if (t in n) return t;
        t = t.charAt(0).toUpperCase() + t.substring(1);
        for (var e = 0, r = pa.length; r > e; ++e) {
            var u = pa[e] + t;
            if (u in n) return u
        }
    }

    function v() {}

    function d() {}

    function m(n) {
        function t() {
            for (var t, r = e, u = -1, i = r.length; ++u < i;)(t = r[u].on) && t.apply(this, arguments);
            return n
        }
        var e = [],
            r = new o;
        return t.on = function(t, u) {
            var i, o = r.get(t);
            return arguments.length < 2 ? o && o.on : (o && (o.on = null, e = e.slice(0, i = e.indexOf(o)).concat(e.slice(i + 1)), r.remove(t)), u && e.push(r.set(t, {
                on: u
            })), n)
        }, t
    }

    function y() {
        Go.event.preventDefault()
    }

    function x() {
        for (var n, t = Go.event; n = t.sourceEvent;) t = n;
        return t
    }

    function M(n) {
        for (var t = new d, e = 0, r = arguments.length; ++e < r;) t[arguments[e]] = m(t);
        return t.of = function(e, r) {
            return function(u) {
                try {
                    var i = u.sourceEvent = Go.event;
                    u.target = n, Go.event = u, t[u.type].apply(e, r)
                } finally {
                    Go.event = i
                }
            }
        }, t
    }

    function _(n) {
        return da(n, _a), n
    }

    function b(n) {
        return "function" == typeof n ? n : function() {
            return ma(n, this)
        }
    }

    function w(n) {
        return "function" == typeof n ? n : function() {
            return ya(n, this)
        }
    }

    function S(n, t) {
        function e() {
            this.removeAttribute(n)
        }

        function r() {
            this.removeAttributeNS(n.space, n.local)
        }

        function u() {
            this.setAttribute(n, t)
        }

        function i() {
            this.setAttributeNS(n.space, n.local, t)
        }

        function o() {
            var e = t.apply(this, arguments);
            null == e ? this.removeAttribute(n) : this.setAttribute(n, e)
        }

        function a() {
            var e = t.apply(this, arguments);
            null == e ? this.removeAttributeNS(n.space, n.local) : this.setAttributeNS(n.space, n.local, e)
        }
        return n = Go.ns.qualify(n), null == t ? n.local ? r : e : "function" == typeof t ? n.local ? a : o : n.local ? i : u
    }

    function k(n) {
        return n.trim().replace(/\s+/g, " ")
    }

    function E(n) {
        return new RegExp("(?:^|\\s+)" + Go.requote(n) + "(?:\\s+|$)", "g")
    }

    function N(n) {
        return n.trim().split(/^|\s+/)
    }

    function A(n, t) {
        function e() {
            for (var e = -1; ++e < u;) n[e](this, t)
        }

        function r() {
            for (var e = -1, r = t.apply(this, arguments); ++e < u;) n[e](this, r)
        }
        n = N(n).map(C);
        var u = n.length;
        return "function" == typeof t ? r : e
    }

    function C(n) {
        var t = E(n);
        return function(e, r) {
            if (u = e.classList) return r ? u.add(n) : u.remove(n);
            var u = e.getAttribute("class") || "";
            r ? (t.lastIndex = 0, t.test(u) || e.setAttribute("class", k(u + " " + n))) : e.setAttribute("class", k(u.replace(t, " ")))
        }
    }

    function L(n, t, e) {
        function r() {
            this.style.removeProperty(n)
        }

        function u() {
            this.style.setProperty(n, t, e)
        }

        function i() {
            var r = t.apply(this, arguments);
            null == r ? this.style.removeProperty(n) : this.style.setProperty(n, r, e)
        }
        return null == t ? r : "function" == typeof t ? i : u
    }

    function T(n, t) {
        function e() {
            delete this[n]
        }

        function r() {
            this[n] = t
        }

        function u() {
            var e = t.apply(this, arguments);
            null == e ? delete this[n] : this[n] = e
        }
        return null == t ? e : "function" == typeof t ? u : r
    }

    function q(n) {
        return "function" == typeof n ? n : (n = Go.ns.qualify(n)).local ? function() {
            return this.ownerDocument.createElementNS(n.space, n.local)
        } : function() {
            return this.ownerDocument.createElementNS(this.namespaceURI, n)
        }
    }

    function z(n) {
        return {
            __data__: n
        }
    }

    function R(n) {
        return function() {
            return Ma(this, n)
        }
    }

    function D(t) {
        return arguments.length || (t = n),
        function(n, e) {
            return n && e ? t(n.__data__, e.__data__) : !n - !e
        }
    }

    function P(n, t) {
        for (var e = 0, r = n.length; r > e; e++)
            for (var u, i = n[e], o = 0, a = i.length; a > o; o++)(u = i[o]) && t(u, o, e);
        return n
    }

    function U(n) {
        return da(n, wa), n
    }

    function j(n) {
        var t, e;
        return function(r, u, i) {
            var o, a = n[i].update,
                c = a.length;
            for (i != e && (e = i, t = 0), u >= t && (t = u + 1); !(o = a[t]) && ++t < c;);
            return o
        }
    }

    function H() {
        var n = this.__transition__;
        n && ++n.active
    }

    function F(n, t, e) {
        function r() {
            var t = this[o];
            t && (this.removeEventListener(n, t, t.$), delete this[o])
        }

        function u() {
            var u = c(t, Qo(arguments));
            r.call(this), this.addEventListener(n, this[o] = u, u.$ = e), u._ = t
        }

        function i() {
            var t, e = new RegExp("^__on([^.]+)" + Go.requote(n) + "$");
            for (var r in this)
                if (t = r.match(e)) {
                    var u = this[r];
                    this.removeEventListener(t[1], u, u.$), delete this[r]
                }
        }
        var o = "__on" + n,
            a = n.indexOf("."),
            c = O;
        a > 0 && (n = n.substring(0, a));
        var s = ka.get(n);
        return s && (n = s, c = I), a ? t ? u : r : t ? v : i
    }

    function O(n, t) {
        return function(e) {
            var r = Go.event;
            Go.event = e, t[0] = this.__data__;
            try {
                n.apply(this, t)
            } finally {
                Go.event = r
            }
        }
    }

    function I(n, t) {
        var e = O(n, t);
        return function(n) {
            var t = this,
                r = n.relatedTarget;
            r && (r === t || 8 & r.compareDocumentPosition(t)) || e.call(t, n)
        }
    }

    function Y() {
        var n = ".dragsuppress-" + ++Na,
            t = "click" + n,
            e = Go.select(ea).on("touchmove" + n, y).on("dragstart" + n, y).on("selectstart" + n, y);
        if (Ea) {
            var r = ta.style,
                u = r[Ea];
            r[Ea] = "none"
        }
        return function(i) {
            function o() {
                e.on(t, null)
            }
            e.on(n, null), Ea && (r[Ea] = u), i && (e.on(t, function() {
                y(), o()
            }, !0), setTimeout(o, 0))
        }
    }

    function Z(n, t) {
        t.changedTouches && (t = t.changedTouches[0]);
        var e = n.ownerSVGElement || n;
        if (e.createSVGPoint) {
            var r = e.createSVGPoint();
            return r.x = t.clientX, r.y = t.clientY, r = r.matrixTransform(n.getScreenCTM().inverse()), [r.x, r.y]
        }
        var u = n.getBoundingClientRect();
        return [t.clientX - u.left - n.clientLeft, t.clientY - u.top - n.clientTop]
    }

    function V() {
        return Go.event.changedTouches[0].identifier
    }

    function $() {
        return Go.event.target
    }

    function X() {
        return ea
    }

    function B(n) {
        return n > 0 ? 1 : 0 > n ? -1 : 0
    }

    function J(n, t, e) {
        return (t[0] - n[0]) * (e[1] - n[1]) - (t[1] - n[1]) * (e[0] - n[0])
    }

    function W(n) {
        return n > 1 ? 0 : -1 > n ? Aa : Math.acos(n)
    }

    function G(n) {
        return n > 1 ? La : -1 > n ? -La : Math.asin(n)
    }

    function K(n) {
        return ((n = Math.exp(n)) - 1 / n) / 2
    }

    function Q(n) {
        return ((n = Math.exp(n)) + 1 / n) / 2
    }

    function nt(n) {
        return ((n = Math.exp(2 * n)) - 1) / (n + 1)
    }

    function tt(n) {
        return (n = Math.sin(n / 2)) * n
    }

    function et() {}

    function rt(n, t, e) {
        return new ut(n, t, e)
    }

    function ut(n, t, e) {
        this.h = n, this.s = t, this.l = e
    }

    function it(n, t, e) {
        function r(n) {
            return n > 360 ? n -= 360 : 0 > n && (n += 360), 60 > n ? i + (o - i) * n / 60 : 180 > n ? o : 240 > n ? i + (o - i) * (240 - n) / 60 : i
        }

        function u(n) {
            return Math.round(255 * r(n))
        }
        var i, o;
        return n = isNaN(n) ? 0 : (n %= 360) < 0 ? n + 360 : n, t = isNaN(t) ? 0 : 0 > t ? 0 : t > 1 ? 1 : t, e = 0 > e ? 0 : e > 1 ? 1 : e, o = .5 >= e ? e * (1 + t) : e + t - e * t, i = 2 * e - o, yt(u(n + 120), u(n), u(n - 120))
    }

    function ot(n, t, e) {
        return new at(n, t, e)
    }

    function at(n, t, e) {
        this.h = n, this.c = t, this.l = e
    }

    function ct(n, t, e) {
        return isNaN(n) && (n = 0), isNaN(t) && (t = 0), st(e, Math.cos(n *= za) * t, Math.sin(n) * t)
    }

    function st(n, t, e) {
        return new lt(n, t, e)
    }

    function lt(n, t, e) {
        this.l = n, this.a = t, this.b = e
    }

    function ft(n, t, e) {
        var r = (n + 16) / 116,
            u = r + t / 500,
            i = r - e / 200;
        return u = gt(u) * Za, r = gt(r) * Va, i = gt(i) * $a, yt(vt(3.2404542 * u - 1.5371385 * r - .4985314 * i), vt(-.969266 * u + 1.8760108 * r + .041556 * i), vt(.0556434 * u - .2040259 * r + 1.0572252 * i))
    }

    function ht(n, t, e) {
        return n > 0 ? ot(Math.atan2(e, t) * Ra, Math.sqrt(t * t + e * e), n) : ot(0 / 0, 0 / 0, n)
    }

    function gt(n) {
        return n > .206893034 ? n * n * n : (n - 4 / 29) / 7.787037
    }

    function pt(n) {
        return n > .008856 ? Math.pow(n, 1 / 3) : 7.787037 * n + 4 / 29
    }

    function vt(n) {
        return Math.round(255 * (.00304 >= n ? 12.92 * n : 1.055 * Math.pow(n, 1 / 2.4) - .055))
    }

    function dt(n) {
        return yt(n >> 16, 255 & n >> 8, 255 & n)
    }

    function mt(n) {
        return dt(n) + ""
    }

    function yt(n, t, e) {
        return new xt(n, t, e)
    }

    function xt(n, t, e) {
        this.r = n, this.g = t, this.b = e
    }

    function Mt(n) {
        return 16 > n ? "0" + Math.max(0, n).toString(16) : Math.min(255, n).toString(16)
    }

    function _t(n, t, e) {
        var r, u, i, o = 0,
            a = 0,
            c = 0;
        if (r = /([a-z]+)\((.*)\)/i.exec(n)) switch (u = r[2].split(","), r[1]) {
            case "hsl":
                return e(parseFloat(u[0]), parseFloat(u[1]) / 100, parseFloat(u[2]) / 100);
            case "rgb":
                return t(kt(u[0]), kt(u[1]), kt(u[2]))
        }
        return (i = Ja.get(n)) ? t(i.r, i.g, i.b) : (null == n || "#" !== n.charAt(0) || isNaN(i = parseInt(n.substring(1), 16)) || (4 === n.length ? (o = (3840 & i) >> 4, o = o >> 4 | o, a = 240 & i, a = a >> 4 | a, c = 15 & i, c = c << 4 | c) : 7 === n.length && (o = (16711680 & i) >> 16, a = (65280 & i) >> 8, c = 255 & i)), t(o, a, c))
    }

    function bt(n, t, e) {
        var r, u, i = Math.min(n /= 255, t /= 255, e /= 255),
            o = Math.max(n, t, e),
            a = o - i,
            c = (o + i) / 2;
        return a ? (u = .5 > c ? a / (o + i) : a / (2 - o - i), r = n == o ? (t - e) / a + (e > t ? 6 : 0) : t == o ? (e - n) / a + 2 : (n - t) / a + 4, r *= 60) : (r = 0 / 0, u = c > 0 && 1 > c ? 0 : r), rt(r, u, c)
    }

    function wt(n, t, e) {
        n = St(n), t = St(t), e = St(e);
        var r = pt((.4124564 * n + .3575761 * t + .1804375 * e) / Za),
            u = pt((.2126729 * n + .7151522 * t + .072175 * e) / Va),
            i = pt((.0193339 * n + .119192 * t + .9503041 * e) / $a);
        return st(116 * u - 16, 500 * (r - u), 200 * (u - i))
    }

    function St(n) {
        return (n /= 255) <= .04045 ? n / 12.92 : Math.pow((n + .055) / 1.055, 2.4)
    }

    function kt(n) {
        var t = parseFloat(n);
        return "%" === n.charAt(n.length - 1) ? Math.round(2.55 * t) : t
    }

    function Et(n) {
        return "function" == typeof n ? n : function() {
            return n
        }
    }

    function Nt(n) {
        return n
    }

    function At(n) {
        return function(t, e, r) {
            return 2 === arguments.length && "function" == typeof e && (r = e, e = null), Ct(t, e, n, r)
        }
    }

    function Ct(n, t, e, r) {
        function u() {
            var n, t = c.status;
            if (!t && c.responseText || t >= 200 && 300 > t || 304 === t) {
                try {
                    n = e.call(i, c)
                } catch (r) {
                    return o.error.call(i, r), void 0
                }
                o.load.call(i, n)
            } else o.error.call(i, c)
        }
        var i = {}, o = Go.dispatch("beforesend", "progress", "load", "error"),
            a = {}, c = new XMLHttpRequest,
            s = null;
        return !ea.XDomainRequest || "withCredentials" in c || !/^(http(s)?:)?\/\//.test(n) || (c = new XDomainRequest), "onload" in c ? c.onload = c.onerror = u : c.onreadystatechange = function() {
            c.readyState > 3 && u()
        }, c.onprogress = function(n) {
            var t = Go.event;
            Go.event = n;
            try {
                o.progress.call(i, c)
            } finally {
                Go.event = t
            }
        }, i.header = function(n, t) {
            return n = (n + "").toLowerCase(), arguments.length < 2 ? a[n] : (null == t ? delete a[n] : a[n] = t + "", i)
        }, i.mimeType = function(n) {
            return arguments.length ? (t = null == n ? null : n + "", i) : t
        }, i.responseType = function(n) {
            return arguments.length ? (s = n, i) : s
        }, i.response = function(n) {
            return e = n, i
        }, ["get", "post"].forEach(function(n) {
            i[n] = function() {
                return i.send.apply(i, [n].concat(Qo(arguments)))
            }
        }), i.send = function(e, r, u) {
            if (2 === arguments.length && "function" == typeof r && (u = r, r = null), c.open(e, n, !0), null == t || "accept" in a || (a.accept = t + ",*/*"), c.setRequestHeader)
                for (var l in a) c.setRequestHeader(l, a[l]);
            return null != t && c.overrideMimeType && c.overrideMimeType(t), null != s && (c.responseType = s), null != u && i.on("error", u).on("load", function(n) {
                u(null, n)
            }), o.beforesend.call(i, c), c.send(null == r ? null : r), i
        }, i.abort = function() {
            return c.abort(), i
        }, Go.rebind(i, o, "on"), null == r ? i : i.get(Lt(r))
    }

    function Lt(n) {
        return 1 === n.length ? function(t, e) {
            n(null == t ? e : null)
        } : n
    }

    function Tt() {
        var n = qt(),
            t = zt() - n;
        t > 24 ? (isFinite(t) && (clearTimeout(Qa), Qa = setTimeout(Tt, t)), Ka = 0) : (Ka = 1, tc(Tt))
    }

    function qt() {
        var n = Date.now();
        for (nc = Wa; nc;) n >= nc.t && (nc.f = nc.c(n - nc.t)), nc = nc.n;
        return n
    }

    function zt() {
        for (var n, t = Wa, e = 1 / 0; t;) t.f ? t = n ? n.n = t.n : Wa = t.n : (t.t < e && (e = t.t), t = (n = t).n);
        return Ga = n, e
    }

    function Rt(n, t) {
        return t - (n ? Math.ceil(Math.log(n) / Math.LN10) : 1)
    }

    function Dt(n, t) {
        var e = Math.pow(10, 3 * fa(8 - t));
        return {
            scale: t > 8 ? function(n) {
                return n / e
            } : function(n) {
                return n * e
            },
            symbol: n
        }
    }

    function Pt(n) {
        var t = n.decimal,
            e = n.thousands,
            r = n.grouping,
            u = n.currency,
            i = r ? function(n) {
                for (var t = n.length, u = [], i = 0, o = r[0]; t > 0 && o > 0;) u.push(n.substring(t -= o, t + o)), o = r[i = (i + 1) % r.length];
                return u.reverse().join(e)
            } : Nt;
        return function(n) {
            var e = rc.exec(n),
                r = e[1] || " ",
                o = e[2] || ">",
                a = e[3] || "",
                c = e[4] || "",
                s = e[5],
                l = +e[6],
                f = e[7],
                h = e[8],
                g = e[9],
                p = 1,
                v = "",
                d = "",
                m = !1;
            switch (h && (h = +h.substring(1)), (s || "0" === r && "=" === o) && (s = r = "0", o = "=", f && (l -= Math.floor((l - 1) / 4))), g) {
                case "n":
                    f = !0, g = "g";
                    break;
                case "%":
                    p = 100, d = "%", g = "f";
                    break;
                case "p":
                    p = 100, d = "%", g = "r";
                    break;
                case "b":
                case "o":
                case "x":
                case "X":
                    "#" === c && (v = "0" + g.toLowerCase());
                case "c":
                case "d":
                    m = !0, h = 0;
                    break;
                case "s":
                    p = -1, g = "r"
            }
            "$" === c && (v = u[0], d = u[1]), "r" != g || h || (g = "g"), null != h && ("g" == g ? h = Math.max(1, Math.min(21, h)) : ("e" == g || "f" == g) && (h = Math.max(0, Math.min(20, h)))), g = uc.get(g) || Ut;
            var y = s && f;
            return function(n) {
                var e = d;
                if (m && n % 1) return "";
                var u = 0 > n || 0 === n && 0 > 1 / n ? (n = -n, "-") : a;
                if (0 > p) {
                    var c = Go.formatPrefix(n, h);
                    n = c.scale(n), e = c.symbol + d
                } else n *= p;
                n = g(n, h);
                var x = n.lastIndexOf("."),
                    M = 0 > x ? n : n.substring(0, x),
                    _ = 0 > x ? "" : t + n.substring(x + 1);
                !s && f && (M = i(M));
                var b = v.length + M.length + _.length + (y ? 0 : u.length),
                    w = l > b ? new Array(b = l - b + 1).join(r) : "";
                return y && (M = i(w + M)), u += v, n = M + _, ("<" === o ? u + n + w : ">" === o ? w + u + n : "^" === o ? w.substring(0, b >>= 1) + u + n + w.substring(b) : u + (y ? n : w + n)) + e
            }
        }
    }

    function Ut(n) {
        return n + ""
    }

    function jt() {
        this._ = new Date(arguments.length > 1 ? Date.UTC.apply(this, arguments) : arguments[0])
    }

    function Ht(n, t, e) {
        function r(t) {
            var e = n(t),
                r = i(e, 1);
            return r - t > t - e ? e : r
        }

        function u(e) {
            return t(e = n(new oc(e - 1)), 1), e
        }

        function i(n, e) {
            return t(n = new oc(+n), e), n
        }

        function o(n, r, i) {
            var o = u(n),
                a = [];
            if (i > 1)
                for (; r > o;) e(o) % i || a.push(new Date(+o)), t(o, 1);
            else
                for (; r > o;) a.push(new Date(+o)), t(o, 1);
            return a
        }

        function a(n, t, e) {
            try {
                oc = jt;
                var r = new jt;
                return r._ = n, o(r, t, e)
            } finally {
                oc = Date
            }
        }
        n.floor = n, n.round = r, n.ceil = u, n.offset = i, n.range = o;
        var c = n.utc = Ft(n);
        return c.floor = c, c.round = Ft(r), c.ceil = Ft(u), c.offset = Ft(i), c.range = a, n
    }

    function Ft(n) {
        return function(t, e) {
            try {
                oc = jt;
                var r = new jt;
                return r._ = t, n(r, e)._
            } finally {
                oc = Date
            }
        }
    }

    function Ot(n) {
        function t(n) {
            function t(t) {
                for (var e, u, i, o = [], a = -1, c = 0; ++a < r;) 37 === n.charCodeAt(a) && (o.push(n.substring(c, a)), null != (u = cc[e = n.charAt(++a)]) && (e = n.charAt(++a)), (i = A[e]) && (e = i(t, null == u ? "e" === e ? " " : "0" : u)), o.push(e), c = a + 1);
                return o.push(n.substring(c, a)), o.join("")
            }
            var r = n.length;
            return t.parse = function(t) {
                var r = {
                    y: 1900,
                    m: 0,
                    d: 1,
                    H: 0,
                    M: 0,
                    S: 0,
                    L: 0,
                    Z: null
                }, u = e(r, n, t, 0);
                if (u != t.length) return null;
                "p" in r && (r.H = r.H % 12 + 12 * r.p);
                var i = null != r.Z && oc !== jt,
                    o = new(i ? jt : oc);
                return "j" in r ? o.setFullYear(r.y, 0, r.j) : "w" in r && ("W" in r || "U" in r) ? (o.setFullYear(r.y, 0, 1), o.setFullYear(r.y, 0, "W" in r ? (r.w + 6) % 7 + 7 * r.W - (o.getDay() + 5) % 7 : r.w + 7 * r.U - (o.getDay() + 6) % 7)) : o.setFullYear(r.y, r.m, r.d), o.setHours(r.H + Math.floor(r.Z / 100), r.M + r.Z % 100, r.S, r.L), i ? o._ : o
            }, t.toString = function() {
                return n
            }, t
        }

        function e(n, t, e, r) {
            for (var u, i, o, a = 0, c = t.length, s = e.length; c > a;) {
                if (r >= s) return -1;
                if (u = t.charCodeAt(a++), 37 === u) {
                    if (o = t.charAt(a++), i = C[o in cc ? t.charAt(a++) : o], !i || (r = i(n, e, r)) < 0) return -1
                } else if (u != e.charCodeAt(r++)) return -1
            }
            return r
        }

        function r(n, t, e) {
            b.lastIndex = 0;
            var r = b.exec(t.substring(e));
            return r ? (n.w = w.get(r[0].toLowerCase()), e + r[0].length) : -1
        }

        function u(n, t, e) {
            M.lastIndex = 0;
            var r = M.exec(t.substring(e));
            return r ? (n.w = _.get(r[0].toLowerCase()), e + r[0].length) : -1
        }

        function i(n, t, e) {
            E.lastIndex = 0;
            var r = E.exec(t.substring(e));
            return r ? (n.m = N.get(r[0].toLowerCase()), e + r[0].length) : -1
        }

        function o(n, t, e) {
            S.lastIndex = 0;
            var r = S.exec(t.substring(e));
            return r ? (n.m = k.get(r[0].toLowerCase()), e + r[0].length) : -1
        }

        function a(n, t, r) {
            return e(n, A.c.toString(), t, r)
        }

        function c(n, t, r) {
            return e(n, A.x.toString(), t, r)
        }

        function s(n, t, r) {
            return e(n, A.X.toString(), t, r)
        }

        function l(n, t, e) {
            var r = x.get(t.substring(e, e += 2).toLowerCase());
            return null == r ? -1 : (n.p = r, e)
        }
        var f = n.dateTime,
            h = n.date,
            g = n.time,
            p = n.periods,
            v = n.days,
            d = n.shortDays,
            m = n.months,
            y = n.shortMonths;
        t.utc = function(n) {
            function e(n) {
                try {
                    oc = jt;
                    var t = new oc;
                    return t._ = n, r(t)
                } finally {
                    oc = Date
                }
            }
            var r = t(n);
            return e.parse = function(n) {
                try {
                    oc = jt;
                    var t = r.parse(n);
                    return t && t._
                } finally {
                    oc = Date
                }
            }, e.toString = r.toString, e
        }, t.multi = t.utc.multi = ae;
        var x = Go.map(),
            M = Yt(v),
            _ = Zt(v),
            b = Yt(d),
            w = Zt(d),
            S = Yt(m),
            k = Zt(m),
            E = Yt(y),
            N = Zt(y);
        p.forEach(function(n, t) {
            x.set(n.toLowerCase(), t)
        });
        var A = {
            a: function(n) {
                return d[n.getDay()]
            },
            A: function(n) {
                return v[n.getDay()]
            },
            b: function(n) {
                return y[n.getMonth()]
            },
            B: function(n) {
                return m[n.getMonth()]
            },
            c: t(f),
            d: function(n, t) {
                return It(n.getDate(), t, 2)
            },
            e: function(n, t) {
                return It(n.getDate(), t, 2)
            },
            H: function(n, t) {
                return It(n.getHours(), t, 2)
            },
            I: function(n, t) {
                return It(n.getHours() % 12 || 12, t, 2)
            },
            j: function(n, t) {
                return It(1 + ic.dayOfYear(n), t, 3)
            },
            L: function(n, t) {
                return It(n.getMilliseconds(), t, 3)
            },
            m: function(n, t) {
                return It(n.getMonth() + 1, t, 2)
            },
            M: function(n, t) {
                return It(n.getMinutes(), t, 2)
            },
            p: function(n) {
                return p[+(n.getHours() >= 12)]
            },
            S: function(n, t) {
                return It(n.getSeconds(), t, 2)
            },
            U: function(n, t) {
                return It(ic.sundayOfYear(n), t, 2)
            },
            w: function(n) {
                return n.getDay()
            },
            W: function(n, t) {
                return It(ic.mondayOfYear(n), t, 2)
            },
            x: t(h),
            X: t(g),
            y: function(n, t) {
                return It(n.getFullYear() % 100, t, 2)
            },
            Y: function(n, t) {
                return It(n.getFullYear() % 1e4, t, 4)
            },
            Z: ie,
            "%": function() {
                return "%"
            }
        }, C = {
                a: r,
                A: u,
                b: i,
                B: o,
                c: a,
                d: Qt,
                e: Qt,
                H: te,
                I: te,
                j: ne,
                L: ue,
                m: Kt,
                M: ee,
                p: l,
                S: re,
                U: $t,
                w: Vt,
                W: Xt,
                x: c,
                X: s,
                y: Jt,
                Y: Bt,
                Z: Wt,
                "%": oe
            };
        return t
    }

    function It(n, t, e) {
        var r = 0 > n ? "-" : "",
            u = (r ? -n : n) + "",
            i = u.length;
        return r + (e > i ? new Array(e - i + 1).join(t) + u : u)
    }

    function Yt(n) {
        return new RegExp("^(?:" + n.map(Go.requote).join("|") + ")", "i")
    }

    function Zt(n) {
        for (var t = new o, e = -1, r = n.length; ++e < r;) t.set(n[e].toLowerCase(), e);
        return t
    }

    function Vt(n, t, e) {
        sc.lastIndex = 0;
        var r = sc.exec(t.substring(e, e + 1));
        return r ? (n.w = +r[0], e + r[0].length) : -1
    }

    function $t(n, t, e) {
        sc.lastIndex = 0;
        var r = sc.exec(t.substring(e));
        return r ? (n.U = +r[0], e + r[0].length) : -1
    }

    function Xt(n, t, e) {
        sc.lastIndex = 0;
        var r = sc.exec(t.substring(e));
        return r ? (n.W = +r[0], e + r[0].length) : -1
    }

    function Bt(n, t, e) {
        sc.lastIndex = 0;
        var r = sc.exec(t.substring(e, e + 4));
        return r ? (n.y = +r[0], e + r[0].length) : -1
    }

    function Jt(n, t, e) {
        sc.lastIndex = 0;
        var r = sc.exec(t.substring(e, e + 2));
        return r ? (n.y = Gt(+r[0]), e + r[0].length) : -1
    }

    function Wt(n, t, e) {
        return /^[+-]\d{4}$/.test(t = t.substring(e, e + 5)) ? (n.Z = +t, e + 5) : -1
    }

    function Gt(n) {
        return n + (n > 68 ? 1900 : 2e3)
    }

    function Kt(n, t, e) {
        sc.lastIndex = 0;
        var r = sc.exec(t.substring(e, e + 2));
        return r ? (n.m = r[0] - 1, e + r[0].length) : -1
    }

    function Qt(n, t, e) {
        sc.lastIndex = 0;
        var r = sc.exec(t.substring(e, e + 2));
        return r ? (n.d = +r[0], e + r[0].length) : -1
    }

    function ne(n, t, e) {
        sc.lastIndex = 0;
        var r = sc.exec(t.substring(e, e + 3));
        return r ? (n.j = +r[0], e + r[0].length) : -1
    }

    function te(n, t, e) {
        sc.lastIndex = 0;
        var r = sc.exec(t.substring(e, e + 2));
        return r ? (n.H = +r[0], e + r[0].length) : -1
    }

    function ee(n, t, e) {
        sc.lastIndex = 0;
        var r = sc.exec(t.substring(e, e + 2));
        return r ? (n.M = +r[0], e + r[0].length) : -1
    }

    function re(n, t, e) {
        sc.lastIndex = 0;
        var r = sc.exec(t.substring(e, e + 2));
        return r ? (n.S = +r[0], e + r[0].length) : -1
    }

    function ue(n, t, e) {
        sc.lastIndex = 0;
        var r = sc.exec(t.substring(e, e + 3));
        return r ? (n.L = +r[0], e + r[0].length) : -1
    }

    function ie(n) {
        var t = n.getTimezoneOffset(),
            e = t > 0 ? "-" : "+",
            r = ~~ (fa(t) / 60),
            u = fa(t) % 60;
        return e + It(r, "0", 2) + It(u, "0", 2)
    }

    function oe(n, t, e) {
        lc.lastIndex = 0;
        var r = lc.exec(t.substring(e, e + 1));
        return r ? e + r[0].length : -1
    }

    function ae(n) {
        for (var t = n.length, e = -1; ++e < t;) n[e][0] = this(n[e][0]);
        return function(t) {
            for (var e = 0, r = n[e]; !r[1](t);) r = n[++e];
            return r[0](t)
        }
    }

    function ce() {}

    function se(n, t, e) {
        var r = e.s = n + t,
            u = r - n,
            i = r - u;
        e.t = n - i + (t - u)
    }

    function le(n, t) {
        n && pc.hasOwnProperty(n.type) && pc[n.type](n, t)
    }

    function fe(n, t, e) {
        var r, u = -1,
            i = n.length - e;
        for (t.lineStart(); ++u < i;) r = n[u], t.point(r[0], r[1], r[2]);
        t.lineEnd()
    }

    function he(n, t) {
        var e = -1,
            r = n.length;
        for (t.polygonStart(); ++e < r;) fe(n[e], t, 1);
        t.polygonEnd()
    }

    function ge() {
        function n(n, t) {
            n *= za, t = t * za / 2 + Aa / 4;
            var e = n - r,
                o = e >= 0 ? 1 : -1,
                a = o * e,
                c = Math.cos(t),
                s = Math.sin(t),
                l = i * s,
                f = u * c + l * Math.cos(a),
                h = l * o * Math.sin(a);
            dc.add(Math.atan2(h, f)), r = n, u = c, i = s
        }
        var t, e, r, u, i;
        mc.point = function(o, a) {
            mc.point = n, r = (t = o) * za, u = Math.cos(a = (e = a) * za / 2 + Aa / 4), i = Math.sin(a)
        }, mc.lineEnd = function() {
            n(t, e)
        }
    }

    function pe(n) {
        var t = n[0],
            e = n[1],
            r = Math.cos(e);
        return [r * Math.cos(t), r * Math.sin(t), Math.sin(e)]
    }

    function ve(n, t) {
        return n[0] * t[0] + n[1] * t[1] + n[2] * t[2]
    }

    function de(n, t) {
        return [n[1] * t[2] - n[2] * t[1], n[2] * t[0] - n[0] * t[2], n[0] * t[1] - n[1] * t[0]]
    }

    function me(n, t) {
        n[0] += t[0], n[1] += t[1], n[2] += t[2]
    }

    function ye(n, t) {
        return [n[0] * t, n[1] * t, n[2] * t]
    }

    function xe(n) {
        var t = Math.sqrt(n[0] * n[0] + n[1] * n[1] + n[2] * n[2]);
        n[0] /= t, n[1] /= t, n[2] /= t
    }

    function Me(n) {
        return [Math.atan2(n[1], n[0]), G(n[2])]
    }

    function _e(n, t) {
        return fa(n[0] - t[0]) < Ta && fa(n[1] - t[1]) < Ta
    }

    function be(n, t) {
        n *= za;
        var e = Math.cos(t *= za);
        we(e * Math.cos(n), e * Math.sin(n), Math.sin(t))
    }

    function we(n, t, e) {
        ++yc, Mc += (n - Mc) / yc, _c += (t - _c) / yc, bc += (e - bc) / yc
    }

    function Se() {
        function n(n, u) {
            n *= za;
            var i = Math.cos(u *= za),
                o = i * Math.cos(n),
                a = i * Math.sin(n),
                c = Math.sin(u),
                s = Math.atan2(Math.sqrt((s = e * c - r * a) * s + (s = r * o - t * c) * s + (s = t * a - e * o) * s), t * o + e * a + r * c);
            xc += s, wc += s * (t + (t = o)), Sc += s * (e + (e = a)), kc += s * (r + (r = c)), we(t, e, r)
        }
        var t, e, r;
        Cc.point = function(u, i) {
            u *= za;
            var o = Math.cos(i *= za);
            t = o * Math.cos(u), e = o * Math.sin(u), r = Math.sin(i), Cc.point = n, we(t, e, r)
        }
    }

    function ke() {
        Cc.point = be
    }

    function Ee() {
        function n(n, t) {
            n *= za;
            var e = Math.cos(t *= za),
                o = e * Math.cos(n),
                a = e * Math.sin(n),
                c = Math.sin(t),
                s = u * c - i * a,
                l = i * o - r * c,
                f = r * a - u * o,
                h = Math.sqrt(s * s + l * l + f * f),
                g = r * o + u * a + i * c,
                p = h && -W(g) / h,
                v = Math.atan2(h, g);
            Ec += p * s, Nc += p * l, Ac += p * f, xc += v, wc += v * (r + (r = o)), Sc += v * (u + (u = a)), kc += v * (i + (i = c)), we(r, u, i)
        }
        var t, e, r, u, i;
        Cc.point = function(o, a) {
            t = o, e = a, Cc.point = n, o *= za;
            var c = Math.cos(a *= za);
            r = c * Math.cos(o), u = c * Math.sin(o), i = Math.sin(a), we(r, u, i)
        }, Cc.lineEnd = function() {
            n(t, e), Cc.lineEnd = ke, Cc.point = be
        }
    }

    function Ne() {
        return !0
    }

    function Ae(n, t, e, r, u) {
        var i = [],
            o = [];
        if (n.forEach(function(n) {
            if (!((t = n.length - 1) <= 0)) {
                var t, e = n[0],
                    r = n[t];
                if (_e(e, r)) {
                    u.lineStart();
                    for (var a = 0; t > a; ++a) u.point((e = n[a])[0], e[1]);
                    return u.lineEnd(), void 0
                }
                var c = new Le(e, n, null, !0),
                    s = new Le(e, null, c, !1);
                c.o = s, i.push(c), o.push(s), c = new Le(r, n, null, !1), s = new Le(r, null, c, !0), c.o = s, i.push(c), o.push(s)
            }
        }), o.sort(t), Ce(i), Ce(o), i.length) {
            for (var a = 0, c = e, s = o.length; s > a; ++a) o[a].e = c = !c;
            for (var l, f, h = i[0];;) {
                for (var g = h, p = !0; g.v;)
                    if ((g = g.n) === h) return;
                l = g.z, u.lineStart();
                do {
                    if (g.v = g.o.v = !0, g.e) {
                        if (p)
                            for (var a = 0, s = l.length; s > a; ++a) u.point((f = l[a])[0], f[1]);
                        else r(g.x, g.n.x, 1, u);
                        g = g.n
                    } else {
                        if (p) {
                            l = g.p.z;
                            for (var a = l.length - 1; a >= 0; --a) u.point((f = l[a])[0], f[1])
                        } else r(g.x, g.p.x, -1, u);
                        g = g.p
                    }
                    g = g.o, l = g.z, p = !p
                } while (!g.v);
                u.lineEnd()
            }
        }
    }

    function Ce(n) {
        if (t = n.length) {
            for (var t, e, r = 0, u = n[0]; ++r < t;) u.n = e = n[r], e.p = u, u = e;
            u.n = e = n[0], e.p = u
        }
    }

    function Le(n, t, e, r) {
        this.x = n, this.z = t, this.o = e, this.e = r, this.v = !1, this.n = this.p = null
    }

    function Te(n, t, e, r) {
        return function(u, i) {
            function o(t, e) {
                var r = u(t, e);
                n(t = r[0], e = r[1]) && i.point(t, e)
            }

            function a(n, t) {
                var e = u(n, t);
                d.point(e[0], e[1])
            }

            function c() {
                y.point = a, d.lineStart()
            }

            function s() {
                y.point = o, d.lineEnd()
            }

            function l(n, t) {
                v.push([n, t]);
                var e = u(n, t);
                M.point(e[0], e[1])
            }

            function f() {
                M.lineStart(), v = []
            }

            function h() {
                l(v[0][0], v[0][1]), M.lineEnd();
                var n, t = M.clean(),
                    e = x.buffer(),
                    r = e.length;
                if (v.pop(), p.push(v), v = null, r)
                    if (1 & t) {
                        n = e[0];
                        var u, r = n.length - 1,
                            o = -1;
                        if (r > 0) {
                            for (_ || (i.polygonStart(), _ = !0), i.lineStart(); ++o < r;) i.point((u = n[o])[0], u[1]);
                            i.lineEnd()
                        }
                    } else r > 1 && 2 & t && e.push(e.pop().concat(e.shift())), g.push(e.filter(qe))
            }
            var g, p, v, d = t(i),
                m = u.invert(r[0], r[1]),
                y = {
                    point: o,
                    lineStart: c,
                    lineEnd: s,
                    polygonStart: function() {
                        y.point = l, y.lineStart = f, y.lineEnd = h, g = [], p = []
                    },
                    polygonEnd: function() {
                        y.point = o, y.lineStart = c, y.lineEnd = s, g = Go.merge(g);
                        var n = De(m, p);
                        g.length ? (_ || (i.polygonStart(), _ = !0), Ae(g, Re, n, e, i)) : n && (_ || (i.polygonStart(), _ = !0), i.lineStart(), e(null, null, 1, i), i.lineEnd()), _ && (i.polygonEnd(), _ = !1), g = p = null
                    },
                    sphere: function() {
                        i.polygonStart(), i.lineStart(), e(null, null, 1, i), i.lineEnd(), i.polygonEnd()
                    }
                }, x = ze(),
                M = t(x),
                _ = !1;
            return y
        }
    }

    function qe(n) {
        return n.length > 1
    }

    function ze() {
        var n, t = [];
        return {
            lineStart: function() {
                t.push(n = [])
            },
            point: function(t, e) {
                n.push([t, e])
            },
            lineEnd: v,
            buffer: function() {
                var e = t;
                return t = [], n = null, e
            },
            rejoin: function() {
                t.length > 1 && t.push(t.pop().concat(t.shift()))
            }
        }
    }

    function Re(n, t) {
        return ((n = n.x)[0] < 0 ? n[1] - La - Ta : La - n[1]) - ((t = t.x)[0] < 0 ? t[1] - La - Ta : La - t[1])
    }

    function De(n, t) {
        var e = n[0],
            r = n[1],
            u = [Math.sin(e), -Math.cos(e), 0],
            i = 0,
            o = 0;
        dc.reset();
        for (var a = 0, c = t.length; c > a; ++a) {
            var s = t[a],
                l = s.length;
            if (l)
                for (var f = s[0], h = f[0], g = f[1] / 2 + Aa / 4, p = Math.sin(g), v = Math.cos(g), d = 1;;) {
                    d === l && (d = 0), n = s[d];
                    var m = n[0],
                        y = n[1] / 2 + Aa / 4,
                        x = Math.sin(y),
                        M = Math.cos(y),
                        _ = m - h,
                        b = _ >= 0 ? 1 : -1,
                        w = b * _,
                        S = w > Aa,
                        k = p * x;
                    if (dc.add(Math.atan2(k * b * Math.sin(w), v * M + k * Math.cos(w))), i += S ? _ + b * Ca : _, S ^ h >= e ^ m >= e) {
                        var E = de(pe(f), pe(n));
                        xe(E);
                        var N = de(u, E);
                        xe(N);
                        var A = (S ^ _ >= 0 ? -1 : 1) * G(N[2]);
                        (r > A || r === A && (E[0] || E[1])) && (o += S ^ _ >= 0 ? 1 : -1)
                    }
                    if (!d++) break;
                    h = m, p = x, v = M, f = n
                }
        }
        return (-Ta > i || Ta > i && 0 > dc) ^ 1 & o
    }

    function Pe(n) {
        var t, e = 0 / 0,
            r = 0 / 0,
            u = 0 / 0;
        return {
            lineStart: function() {
                n.lineStart(), t = 1
            },
            point: function(i, o) {
                var a = i > 0 ? Aa : -Aa,
                    c = fa(i - e);
                fa(c - Aa) < Ta ? (n.point(e, r = (r + o) / 2 > 0 ? La : -La), n.point(u, r), n.lineEnd(), n.lineStart(), n.point(a, r), n.point(i, r), t = 0) : u !== a && c >= Aa && (fa(e - u) < Ta && (e -= u * Ta), fa(i - a) < Ta && (i -= a * Ta), r = Ue(e, r, i, o), n.point(u, r), n.lineEnd(), n.lineStart(), n.point(a, r), t = 0), n.point(e = i, r = o), u = a
            },
            lineEnd: function() {
                n.lineEnd(), e = r = 0 / 0
            },
            clean: function() {
                return 2 - t
            }
        }
    }

    function Ue(n, t, e, r) {
        var u, i, o = Math.sin(n - e);
        return fa(o) > Ta ? Math.atan((Math.sin(t) * (i = Math.cos(r)) * Math.sin(e) - Math.sin(r) * (u = Math.cos(t)) * Math.sin(n)) / (u * i * o)) : (t + r) / 2
    }

    function je(n, t, e, r) {
        var u;
        if (null == n) u = e * La, r.point(-Aa, u), r.point(0, u), r.point(Aa, u), r.point(Aa, 0), r.point(Aa, -u), r.point(0, -u), r.point(-Aa, -u), r.point(-Aa, 0), r.point(-Aa, u);
        else if (fa(n[0] - t[0]) > Ta) {
            var i = n[0] < t[0] ? Aa : -Aa;
            u = e * i / 2, r.point(-i, u), r.point(0, u), r.point(i, u)
        } else r.point(t[0], t[1])
    }

    function He(n) {
        function t(n, t) {
            return Math.cos(n) * Math.cos(t) > i
        }

        function e(n) {
            var e, i, c, s, l;
            return {
                lineStart: function() {
                    s = c = !1, l = 1
                },
                point: function(f, h) {
                    var g, p = [f, h],
                        v = t(f, h),
                        d = o ? v ? 0 : u(f, h) : v ? u(f + (0 > f ? Aa : -Aa), h) : 0;
                    if (!e && (s = c = v) && n.lineStart(), v !== c && (g = r(e, p), (_e(e, g) || _e(p, g)) && (p[0] += Ta, p[1] += Ta, v = t(p[0], p[1]))), v !== c) l = 0, v ? (n.lineStart(), g = r(p, e), n.point(g[0], g[1])) : (g = r(e, p), n.point(g[0], g[1]), n.lineEnd()), e = g;
                    else if (a && e && o ^ v) {
                        var m;
                        d & i || !(m = r(p, e, !0)) || (l = 0, o ? (n.lineStart(), n.point(m[0][0], m[0][1]), n.point(m[1][0], m[1][1]), n.lineEnd()) : (n.point(m[1][0], m[1][1]), n.lineEnd(), n.lineStart(), n.point(m[0][0], m[0][1])))
                    }!v || e && _e(e, p) || n.point(p[0], p[1]), e = p, c = v, i = d
                },
                lineEnd: function() {
                    c && n.lineEnd(), e = null
                },
                clean: function() {
                    return l | (s && c) << 1
                }
            }
        }

        function r(n, t, e) {
            var r = pe(n),
                u = pe(t),
                o = [1, 0, 0],
                a = de(r, u),
                c = ve(a, a),
                s = a[0],
                l = c - s * s;
            if (!l) return !e && n;
            var f = i * c / l,
                h = -i * s / l,
                g = de(o, a),
                p = ye(o, f),
                v = ye(a, h);
            me(p, v);
            var d = g,
                m = ve(p, d),
                y = ve(d, d),
                x = m * m - y * (ve(p, p) - 1);
            if (!(0 > x)) {
                var M = Math.sqrt(x),
                    _ = ye(d, (-m - M) / y);
                if (me(_, p), _ = Me(_), !e) return _;
                var b, w = n[0],
                    S = t[0],
                    k = n[1],
                    E = t[1];
                w > S && (b = w, w = S, S = b);
                var N = S - w,
                    A = fa(N - Aa) < Ta,
                    C = A || Ta > N;
                if (!A && k > E && (b = k, k = E, E = b), C ? A ? k + E > 0 ^ _[1] < (fa(_[0] - w) < Ta ? k : E) : k <= _[1] && _[1] <= E : N > Aa ^ (w <= _[0] && _[0] <= S)) {
                    var L = ye(d, (-m + M) / y);
                    return me(L, p), [_, Me(L)]
                }
            }
        }

        function u(t, e) {
            var r = o ? n : Aa - n,
                u = 0;
            return -r > t ? u |= 1 : t > r && (u |= 2), -r > e ? u |= 4 : e > r && (u |= 8), u
        }
        var i = Math.cos(n),
            o = i > 0,
            a = fa(i) > Ta,
            c = gr(n, 6 * za);
        return Te(t, e, c, o ? [0, -n] : [-Aa, n - Aa])
    }

    function Fe(n, t, e, r) {
        return function(u) {
            var i, o = u.a,
                a = u.b,
                c = o.x,
                s = o.y,
                l = a.x,
                f = a.y,
                h = 0,
                g = 1,
                p = l - c,
                v = f - s;
            if (i = n - c, p || !(i > 0)) {
                if (i /= p, 0 > p) {
                    if (h > i) return;
                    g > i && (g = i)
                } else if (p > 0) {
                    if (i > g) return;
                    i > h && (h = i)
                }
                if (i = e - c, p || !(0 > i)) {
                    if (i /= p, 0 > p) {
                        if (i > g) return;
                        i > h && (h = i)
                    } else if (p > 0) {
                        if (h > i) return;
                        g > i && (g = i)
                    }
                    if (i = t - s, v || !(i > 0)) {
                        if (i /= v, 0 > v) {
                            if (h > i) return;
                            g > i && (g = i)
                        } else if (v > 0) {
                            if (i > g) return;
                            i > h && (h = i)
                        }
                        if (i = r - s, v || !(0 > i)) {
                            if (i /= v, 0 > v) {
                                if (i > g) return;
                                i > h && (h = i)
                            } else if (v > 0) {
                                if (h > i) return;
                                g > i && (g = i)
                            }
                            return h > 0 && (u.a = {
                                x: c + h * p,
                                y: s + h * v
                            }), 1 > g && (u.b = {
                                x: c + g * p,
                                y: s + g * v
                            }), u
                        }
                    }
                }
            }
        }
    }

    function Oe(n, t, e, r) {
        function u(r, u) {
            return fa(r[0] - n) < Ta ? u > 0 ? 0 : 3 : fa(r[0] - e) < Ta ? u > 0 ? 2 : 1 : fa(r[1] - t) < Ta ? u > 0 ? 1 : 0 : u > 0 ? 3 : 2
        }

        function i(n, t) {
            return o(n.x, t.x)
        }

        function o(n, t) {
            var e = u(n, 1),
                r = u(t, 1);
            return e !== r ? e - r : 0 === e ? t[1] - n[1] : 1 === e ? n[0] - t[0] : 2 === e ? n[1] - t[1] : t[0] - n[0]
        }
        return function(a) {
            function c(n) {
                for (var t = 0, e = d.length, r = n[1], u = 0; e > u; ++u)
                    for (var i, o = 1, a = d[u], c = a.length, s = a[0]; c > o; ++o) i = a[o], s[1] <= r ? i[1] > r && J(s, i, n) > 0 && ++t : i[1] <= r && J(s, i, n) < 0 && --t, s = i;
                return 0 !== t
            }

            function s(i, a, c, s) {
                var l = 0,
                    f = 0;
                if (null == i || (l = u(i, c)) !== (f = u(a, c)) || o(i, a) < 0 ^ c > 0) {
                    do s.point(0 === l || 3 === l ? n : e, l > 1 ? r : t); while ((l = (l + c + 4) % 4) !== f)
                } else s.point(a[0], a[1])
            }

            function l(u, i) {
                return u >= n && e >= u && i >= t && r >= i
            }

            function f(n, t) {
                l(n, t) && a.point(n, t)
            }

            function h() {
                C.point = p, d && d.push(m = []), S = !0, w = !1, _ = b = 0 / 0
            }

            function g() {
                v && (p(y, x), M && w && N.rejoin(), v.push(N.buffer())), C.point = f, w && a.lineEnd()
            }

            function p(n, t) {
                n = Math.max(-Tc, Math.min(Tc, n)), t = Math.max(-Tc, Math.min(Tc, t));
                var e = l(n, t);
                if (d && m.push([n, t]), S) y = n, x = t, M = e, S = !1, e && (a.lineStart(), a.point(n, t));
                else if (e && w) a.point(n, t);
                else {
                    var r = {
                        a: {
                            x: _,
                            y: b
                        },
                        b: {
                            x: n,
                            y: t
                        }
                    };
                    A(r) ? (w || (a.lineStart(), a.point(r.a.x, r.a.y)), a.point(r.b.x, r.b.y), e || a.lineEnd(), k = !1) : e && (a.lineStart(), a.point(n, t), k = !1)
                }
                _ = n, b = t, w = e
            }
            var v, d, m, y, x, M, _, b, w, S, k, E = a,
                N = ze(),
                A = Fe(n, t, e, r),
                C = {
                    point: f,
                    lineStart: h,
                    lineEnd: g,
                    polygonStart: function() {
                        a = N, v = [], d = [], k = !0
                    },
                    polygonEnd: function() {
                        a = E, v = Go.merge(v);
                        var t = c([n, r]),
                            e = k && t,
                            u = v.length;
                        (e || u) && (a.polygonStart(), e && (a.lineStart(), s(null, null, 1, a), a.lineEnd()), u && Ae(v, i, t, s, a), a.polygonEnd()), v = d = m = null
                    }
                };
            return C
        }
    }

    function Ie(n, t) {
        function e(e, r) {
            return e = n(e, r), t(e[0], e[1])
        }
        return n.invert && t.invert && (e.invert = function(e, r) {
            return e = t.invert(e, r), e && n.invert(e[0], e[1])
        }), e
    }

    function Ye(n) {
        var t = 0,
            e = Aa / 3,
            r = ir(n),
            u = r(t, e);
        return u.parallels = function(n) {
            return arguments.length ? r(t = n[0] * Aa / 180, e = n[1] * Aa / 180) : [180 * (t / Aa), 180 * (e / Aa)]
        }, u
    }

    function Ze(n, t) {
        function e(n, t) {
            var e = Math.sqrt(i - 2 * u * Math.sin(t)) / u;
            return [e * Math.sin(n *= u), o - e * Math.cos(n)]
        }
        var r = Math.sin(n),
            u = (r + Math.sin(t)) / 2,
            i = 1 + r * (2 * u - r),
            o = Math.sqrt(i) / u;
        return e.invert = function(n, t) {
            var e = o - t;
            return [Math.atan2(n, e) / u, G((i - (n * n + e * e) * u * u) / (2 * u))]
        }, e
    }

    function Ve() {
        function n(n, t) {
            zc += u * n - r * t, r = n, u = t
        }
        var t, e, r, u;
        jc.point = function(i, o) {
            jc.point = n, t = r = i, e = u = o
        }, jc.lineEnd = function() {
            n(t, e)
        }
    }

    function $e(n, t) {
        Rc > n && (Rc = n), n > Pc && (Pc = n), Dc > t && (Dc = t), t > Uc && (Uc = t)
    }

    function Xe() {
        function n(n, t) {
            o.push("M", n, ",", t, i)
        }

        function t(n, t) {
            o.push("M", n, ",", t), a.point = e
        }

        function e(n, t) {
            o.push("L", n, ",", t)
        }

        function r() {
            a.point = n
        }

        function u() {
            o.push("Z")
        }
        var i = Be(4.5),
            o = [],
            a = {
                point: n,
                lineStart: function() {
                    a.point = t
                },
                lineEnd: r,
                polygonStart: function() {
                    a.lineEnd = u
                },
                polygonEnd: function() {
                    a.lineEnd = r, a.point = n
                },
                pointRadius: function(n) {
                    return i = Be(n), a
                },
                result: function() {
                    if (o.length) {
                        var n = o.join("");
                        return o = [], n
                    }
                }
            };
        return a
    }

    function Be(n) {
        return "m0," + n + "a" + n + "," + n + " 0 1,1 0," + -2 * n + "a" + n + "," + n + " 0 1,1 0," + 2 * n + "z"
    }

    function Je(n, t) {
        Mc += n, _c += t, ++bc
    }

    function We() {
        function n(n, r) {
            var u = n - t,
                i = r - e,
                o = Math.sqrt(u * u + i * i);
            wc += o * (t + n) / 2, Sc += o * (e + r) / 2, kc += o, Je(t = n, e = r)
        }
        var t, e;
        Fc.point = function(r, u) {
            Fc.point = n, Je(t = r, e = u)
        }
    }

    function Ge() {
        Fc.point = Je
    }

    function Ke() {
        function n(n, t) {
            var e = n - r,
                i = t - u,
                o = Math.sqrt(e * e + i * i);
            wc += o * (r + n) / 2, Sc += o * (u + t) / 2, kc += o, o = u * n - r * t, Ec += o * (r + n), Nc += o * (u + t), Ac += 3 * o, Je(r = n, u = t)
        }
        var t, e, r, u;
        Fc.point = function(i, o) {
            Fc.point = n, Je(t = r = i, e = u = o)
        }, Fc.lineEnd = function() {
            n(t, e)
        }
    }

    function Qe(n) {
        function t(t, e) {
            n.moveTo(t, e), n.arc(t, e, o, 0, Ca)
        }

        function e(t, e) {
            n.moveTo(t, e), a.point = r
        }

        function r(t, e) {
            n.lineTo(t, e)
        }

        function u() {
            a.point = t
        }

        function i() {
            n.closePath()
        }
        var o = 4.5,
            a = {
                point: t,
                lineStart: function() {
                    a.point = e
                },
                lineEnd: u,
                polygonStart: function() {
                    a.lineEnd = i
                },
                polygonEnd: function() {
                    a.lineEnd = u, a.point = t
                },
                pointRadius: function(n) {
                    return o = n, a
                },
                result: v
            };
        return a
    }

    function nr(n) {
        function t(n) {
            return (a ? r : e)(n)
        }

        function e(t) {
            return rr(t, function(e, r) {
                e = n(e, r), t.point(e[0], e[1])
            })
        }

        function r(t) {
            function e(e, r) {
                e = n(e, r), t.point(e[0], e[1])
            }

            function r() {
                x = 0 / 0, S.point = i, t.lineStart()
            }

            function i(e, r) {
                var i = pe([e, r]),
                    o = n(e, r);
                u(x, M, y, _, b, w, x = o[0], M = o[1], y = e, _ = i[0], b = i[1], w = i[2], a, t), t.point(x, M)
            }

            function o() {
                S.point = e, t.lineEnd()
            }

            function c() {
                r(), S.point = s, S.lineEnd = l
            }

            function s(n, t) {
                i(f = n, h = t), g = x, p = M, v = _, d = b, m = w, S.point = i
            }

            function l() {
                u(x, M, y, _, b, w, g, p, f, v, d, m, a, t), S.lineEnd = o, o()
            }
            var f, h, g, p, v, d, m, y, x, M, _, b, w, S = {
                    point: e,
                    lineStart: r,
                    lineEnd: o,
                    polygonStart: function() {
                        t.polygonStart(), S.lineStart = c
                    },
                    polygonEnd: function() {
                        t.polygonEnd(), S.lineStart = r
                    }
                };
            return S
        }

        function u(t, e, r, a, c, s, l, f, h, g, p, v, d, m) {
            var y = l - t,
                x = f - e,
                M = y * y + x * x;
            if (M > 4 * i && d--) {
                var _ = a + g,
                    b = c + p,
                    w = s + v,
                    S = Math.sqrt(_ * _ + b * b + w * w),
                    k = Math.asin(w /= S),
                    E = fa(fa(w) - 1) < Ta || fa(r - h) < Ta ? (r + h) / 2 : Math.atan2(b, _),
                    N = n(E, k),
                    A = N[0],
                    C = N[1],
                    L = A - t,
                    T = C - e,
                    q = x * L - y * T;
                (q * q / M > i || fa((y * L + x * T) / M - .5) > .3 || o > a * g + c * p + s * v) && (u(t, e, r, a, c, s, A, C, E, _ /= S, b /= S, w, d, m), m.point(A, C), u(A, C, E, _, b, w, l, f, h, g, p, v, d, m))
            }
        }
        var i = .5,
            o = Math.cos(30 * za),
            a = 16;
        return t.precision = function(n) {
            return arguments.length ? (a = (i = n * n) > 0 && 16, t) : Math.sqrt(i)
        }, t
    }

    function tr(n) {
        var t = nr(function(t, e) {
            return n([t * Ra, e * Ra])
        });
        return function(n) {
            return or(t(n))
        }
    }

    function er(n) {
        this.stream = n
    }

    function rr(n, t) {
        return {
            point: t,
            sphere: function() {
                n.sphere()
            },
            lineStart: function() {
                n.lineStart()
            },
            lineEnd: function() {
                n.lineEnd()
            },
            polygonStart: function() {
                n.polygonStart()
            },
            polygonEnd: function() {
                n.polygonEnd()
            }
        }
    }

    function ur(n) {
        return ir(function() {
            return n
        })()
    }

    function ir(n) {
        function t(n) {
            return n = a(n[0] * za, n[1] * za), [n[0] * h + c, s - n[1] * h]
        }

        function e(n) {
            return n = a.invert((n[0] - c) / h, (s - n[1]) / h), n && [n[0] * Ra, n[1] * Ra]
        }

        function r() {
            a = Ie(o = sr(m, y, x), i);
            var n = i(v, d);
            return c = g - n[0] * h, s = p + n[1] * h, u()
        }

        function u() {
            return l && (l.valid = !1, l = null), t
        }
        var i, o, a, c, s, l, f = nr(function(n, t) {
                return n = i(n, t), [n[0] * h + c, s - n[1] * h]
            }),
            h = 150,
            g = 480,
            p = 250,
            v = 0,
            d = 0,
            m = 0,
            y = 0,
            x = 0,
            M = Lc,
            _ = Nt,
            b = null,
            w = null;
        return t.stream = function(n) {
            return l && (l.valid = !1), l = or(M(o, f(_(n)))), l.valid = !0, l
        }, t.clipAngle = function(n) {
            return arguments.length ? (M = null == n ? (b = n, Lc) : He((b = +n) * za), u()) : b
        }, t.clipExtent = function(n) {
            return arguments.length ? (w = n, _ = n ? Oe(n[0][0], n[0][1], n[1][0], n[1][1]) : Nt, u()) : w
        }, t.scale = function(n) {
            return arguments.length ? (h = +n, r()) : h
        }, t.translate = function(n) {
            return arguments.length ? (g = +n[0], p = +n[1], r()) : [g, p]
        }, t.center = function(n) {
            return arguments.length ? (v = n[0] % 360 * za, d = n[1] % 360 * za, r()) : [v * Ra, d * Ra]
        }, t.rotate = function(n) {
            return arguments.length ? (m = n[0] % 360 * za, y = n[1] % 360 * za, x = n.length > 2 ? n[2] % 360 * za : 0, r()) : [m * Ra, y * Ra, x * Ra]
        }, Go.rebind(t, f, "precision"),
        function() {
            return i = n.apply(this, arguments), t.invert = i.invert && e, r()
        }
    }

    function or(n) {
        return rr(n, function(t, e) {
            n.point(t * za, e * za)
        })
    }

    function ar(n, t) {
        return [n, t]
    }

    function cr(n, t) {
        return [n > Aa ? n - Ca : -Aa > n ? n + Ca : n, t]
    }

    function sr(n, t, e) {
        return n ? t || e ? Ie(fr(n), hr(t, e)) : fr(n) : t || e ? hr(t, e) : cr
    }

    function lr(n) {
        return function(t, e) {
            return t += n, [t > Aa ? t - Ca : -Aa > t ? t + Ca : t, e]
        }
    }

    function fr(n) {
        var t = lr(n);
        return t.invert = lr(-n), t
    }

    function hr(n, t) {
        function e(n, t) {
            var e = Math.cos(t),
                a = Math.cos(n) * e,
                c = Math.sin(n) * e,
                s = Math.sin(t),
                l = s * r + a * u;
            return [Math.atan2(c * i - l * o, a * r - s * u), G(l * i + c * o)]
        }
        var r = Math.cos(n),
            u = Math.sin(n),
            i = Math.cos(t),
            o = Math.sin(t);
        return e.invert = function(n, t) {
            var e = Math.cos(t),
                a = Math.cos(n) * e,
                c = Math.sin(n) * e,
                s = Math.sin(t),
                l = s * i - c * o;
            return [Math.atan2(c * i + s * o, a * r + l * u), G(l * r - a * u)]
        }, e
    }

    function gr(n, t) {
        var e = Math.cos(n),
            r = Math.sin(n);
        return function(u, i, o, a) {
            var c = o * t;
            null != u ? (u = pr(e, u), i = pr(e, i), (o > 0 ? i > u : u > i) && (u += o * Ca)) : (u = n + o * Ca, i = n - .5 * c);
            for (var s, l = u; o > 0 ? l > i : i > l; l -= c) a.point((s = Me([e, -r * Math.cos(l), -r * Math.sin(l)]))[0], s[1])
        }
    }

    function pr(n, t) {
        var e = pe(t);
        e[0] -= n, xe(e);
        var r = W(-e[1]);
        return ((-e[2] < 0 ? -r : r) + 2 * Math.PI - Ta) % (2 * Math.PI)
    }

    function vr(n, t, e) {
        var r = Go.range(n, t - Ta, e).concat(t);
        return function(n) {
            return r.map(function(t) {
                return [n, t]
            })
        }
    }

    function dr(n, t, e) {
        var r = Go.range(n, t - Ta, e).concat(t);
        return function(n) {
            return r.map(function(t) {
                return [t, n]
            })
        }
    }

    function mr(n) {
        return n.source
    }

    function yr(n) {
        return n.target
    }

    function xr(n, t, e, r) {
        var u = Math.cos(t),
            i = Math.sin(t),
            o = Math.cos(r),
            a = Math.sin(r),
            c = u * Math.cos(n),
            s = u * Math.sin(n),
            l = o * Math.cos(e),
            f = o * Math.sin(e),
            h = 2 * Math.asin(Math.sqrt(tt(r - t) + u * o * tt(e - n))),
            g = 1 / Math.sin(h),
            p = h ? function(n) {
                var t = Math.sin(n *= h) * g,
                    e = Math.sin(h - n) * g,
                    r = e * c + t * l,
                    u = e * s + t * f,
                    o = e * i + t * a;
                return [Math.atan2(u, r) * Ra, Math.atan2(o, Math.sqrt(r * r + u * u)) * Ra]
            } : function() {
                return [n * Ra, t * Ra]
            };
        return p.distance = h, p
    }

    function Mr() {
        function n(n, u) {
            var i = Math.sin(u *= za),
                o = Math.cos(u),
                a = fa((n *= za) - t),
                c = Math.cos(a);
            Oc += Math.atan2(Math.sqrt((a = o * Math.sin(a)) * a + (a = r * i - e * o * c) * a), e * i + r * o * c), t = n, e = i, r = o
        }
        var t, e, r;
        Ic.point = function(u, i) {
            t = u * za, e = Math.sin(i *= za), r = Math.cos(i), Ic.point = n
        }, Ic.lineEnd = function() {
            Ic.point = Ic.lineEnd = v
        }
    }

    function _r(n, t) {
        function e(t, e) {
            var r = Math.cos(t),
                u = Math.cos(e),
                i = n(r * u);
            return [i * u * Math.sin(t), i * Math.sin(e)]
        }
        return e.invert = function(n, e) {
            var r = Math.sqrt(n * n + e * e),
                u = t(r),
                i = Math.sin(u),
                o = Math.cos(u);
            return [Math.atan2(n * i, r * o), Math.asin(r && e * i / r)]
        }, e
    }

    function br(n, t) {
        function e(n, t) {
            o > 0 ? -La + Ta > t && (t = -La + Ta) : t > La - Ta && (t = La - Ta);
            var e = o / Math.pow(u(t), i);
            return [e * Math.sin(i * n), o - e * Math.cos(i * n)]
        }
        var r = Math.cos(n),
            u = function(n) {
                return Math.tan(Aa / 4 + n / 2)
            }, i = n === t ? Math.sin(n) : Math.log(r / Math.cos(t)) / Math.log(u(t) / u(n)),
            o = r * Math.pow(u(n), i) / i;
        return i ? (e.invert = function(n, t) {
            var e = o - t,
                r = B(i) * Math.sqrt(n * n + e * e);
            return [Math.atan2(n, e) / i, 2 * Math.atan(Math.pow(o / r, 1 / i)) - La]
        }, e) : Sr
    }

    function wr(n, t) {
        function e(n, t) {
            var e = i - t;
            return [e * Math.sin(u * n), i - e * Math.cos(u * n)]
        }
        var r = Math.cos(n),
            u = n === t ? Math.sin(n) : (r - Math.cos(t)) / (t - n),
            i = r / u + n;
        return fa(u) < Ta ? ar : (e.invert = function(n, t) {
            var e = i - t;
            return [Math.atan2(n, e) / u, i - B(u) * Math.sqrt(n * n + e * e)]
        }, e)
    }

    function Sr(n, t) {
        return [n, Math.log(Math.tan(Aa / 4 + t / 2))]
    }

    function kr(n) {
        var t, e = ur(n),
            r = e.scale,
            u = e.translate,
            i = e.clipExtent;
        return e.scale = function() {
            var n = r.apply(e, arguments);
            return n === e ? t ? e.clipExtent(null) : e : n
        }, e.translate = function() {
            var n = u.apply(e, arguments);
            return n === e ? t ? e.clipExtent(null) : e : n
        }, e.clipExtent = function(n) {
            var o = i.apply(e, arguments);
            if (o === e) {
                if (t = null == n) {
                    var a = Aa * r(),
                        c = u();
                    i([
                        [c[0] - a, c[1] - a],
                        [c[0] + a, c[1] + a]
                    ])
                }
            } else t && (o = null);
            return o
        }, e.clipExtent(null)
    }

    function Er(n, t) {
        return [Math.log(Math.tan(Aa / 4 + t / 2)), -n]
    }

    function Nr(n) {
        return n[0]
    }

    function Ar(n) {
        return n[1]
    }

    function Cr(n) {
        for (var t = n.length, e = [0, 1], r = 2, u = 2; t > u; u++) {
            for (; r > 1 && J(n[e[r - 2]], n[e[r - 1]], n[u]) <= 0;)--r;
            e[r++] = u
        }
        return e.slice(0, r)
    }

    function Lr(n, t) {
        return n[0] - t[0] || n[1] - t[1]
    }

    function Tr(n, t, e) {
        return (e[0] - t[0]) * (n[1] - t[1]) < (e[1] - t[1]) * (n[0] - t[0])
    }

    function qr(n, t, e, r) {
        var u = n[0],
            i = e[0],
            o = t[0] - u,
            a = r[0] - i,
            c = n[1],
            s = e[1],
            l = t[1] - c,
            f = r[1] - s,
            h = (a * (c - s) - f * (u - i)) / (f * o - a * l);
        return [u + h * o, c + h * l]
    }

    function zr(n) {
        var t = n[0],
            e = n[n.length - 1];
        return !(t[0] - e[0] || t[1] - e[1])
    }

    function Rr() {
        tu(this), this.edge = this.site = this.circle = null
    }

    function Dr(n) {
        var t = ns.pop() || new Rr;
        return t.site = n, t
    }

    function Pr(n) {
        $r(n), Gc.remove(n), ns.push(n), tu(n)
    }

    function Ur(n) {
        var t = n.circle,
            e = t.x,
            r = t.cy,
            u = {
                x: e,
                y: r
            }, i = n.P,
            o = n.N,
            a = [n];
        Pr(n);
        for (var c = i; c.circle && fa(e - c.circle.x) < Ta && fa(r - c.circle.cy) < Ta;) i = c.P, a.unshift(c), Pr(c), c = i;
        a.unshift(c), $r(c);
        for (var s = o; s.circle && fa(e - s.circle.x) < Ta && fa(r - s.circle.cy) < Ta;) o = s.N, a.push(s), Pr(s), s = o;
        a.push(s), $r(s);
        var l, f = a.length;
        for (l = 1; f > l; ++l) s = a[l], c = a[l - 1], Kr(s.edge, c.site, s.site, u);
        c = a[0], s = a[f - 1], s.edge = Wr(c.site, s.site, null, u), Vr(c), Vr(s)
    }

    function jr(n) {
        for (var t, e, r, u, i = n.x, o = n.y, a = Gc._; a;)
            if (r = Hr(a, o) - i, r > Ta) a = a.L;
            else {
                if (u = i - Fr(a, o), !(u > Ta)) {
                    r > -Ta ? (t = a.P, e = a) : u > -Ta ? (t = a, e = a.N) : t = e = a;
                    break
                }
                if (!a.R) {
                    t = a;
                    break
                }
                a = a.R
            }
        var c = Dr(n);
        if (Gc.insert(t, c), t || e) {
            if (t === e) return $r(t), e = Dr(t.site), Gc.insert(c, e), c.edge = e.edge = Wr(t.site, c.site), Vr(t), Vr(e), void 0;
            if (!e) return c.edge = Wr(t.site, c.site), void 0;
            $r(t), $r(e);
            var s = t.site,
                l = s.x,
                f = s.y,
                h = n.x - l,
                g = n.y - f,
                p = e.site,
                v = p.x - l,
                d = p.y - f,
                m = 2 * (h * d - g * v),
                y = h * h + g * g,
                x = v * v + d * d,
                M = {
                    x: (d * y - g * x) / m + l,
                    y: (h * x - v * y) / m + f
                };
            Kr(e.edge, s, p, M), c.edge = Wr(s, n, null, M), e.edge = Wr(n, p, null, M), Vr(t), Vr(e)
        }
    }

    function Hr(n, t) {
        var e = n.site,
            r = e.x,
            u = e.y,
            i = u - t;
        if (!i) return r;
        var o = n.P;
        if (!o) return -1 / 0;
        e = o.site;
        var a = e.x,
            c = e.y,
            s = c - t;
        if (!s) return a;
        var l = a - r,
            f = 1 / i - 1 / s,
            h = l / s;
        return f ? (-h + Math.sqrt(h * h - 2 * f * (l * l / (-2 * s) - c + s / 2 + u - i / 2))) / f + r : (r + a) / 2
    }

    function Fr(n, t) {
        var e = n.N;
        if (e) return Hr(e, t);
        var r = n.site;
        return r.y === t ? r.x : 1 / 0
    }

    function Or(n) {
        this.site = n, this.edges = []
    }

    function Ir(n) {
        for (var t, e, r, u, i, o, a, c, s, l, f = n[0][0], h = n[1][0], g = n[0][1], p = n[1][1], v = Wc, d = v.length; d--;)
            if (i = v[d], i && i.prepare())
                for (a = i.edges, c = a.length, o = 0; c > o;) l = a[o].end(), r = l.x, u = l.y, s = a[++o % c].start(), t = s.x, e = s.y, (fa(r - t) > Ta || fa(u - e) > Ta) && (a.splice(o, 0, new Qr(Gr(i.site, l, fa(r - f) < Ta && p - u > Ta ? {
                    x: f,
                    y: fa(t - f) < Ta ? e : p
                } : fa(u - p) < Ta && h - r > Ta ? {
                    x: fa(e - p) < Ta ? t : h,
                    y: p
                } : fa(r - h) < Ta && u - g > Ta ? {
                    x: h,
                    y: fa(t - h) < Ta ? e : g
                } : fa(u - g) < Ta && r - f > Ta ? {
                    x: fa(e - g) < Ta ? t : f,
                    y: g
                } : null), i.site, null)), ++c)
    }

    function Yr(n, t) {
        return t.angle - n.angle
    }

    function Zr() {
        tu(this), this.x = this.y = this.arc = this.site = this.cy = null
    }

    function Vr(n) {
        var t = n.P,
            e = n.N;
        if (t && e) {
            var r = t.site,
                u = n.site,
                i = e.site;
            if (r !== i) {
                var o = u.x,
                    a = u.y,
                    c = r.x - o,
                    s = r.y - a,
                    l = i.x - o,
                    f = i.y - a,
                    h = 2 * (c * f - s * l);
                if (!(h >= -qa)) {
                    var g = c * c + s * s,
                        p = l * l + f * f,
                        v = (f * g - s * p) / h,
                        d = (c * p - l * g) / h,
                        f = d + a,
                        m = ts.pop() || new Zr;
                    m.arc = n, m.site = u, m.x = v + o, m.y = f + Math.sqrt(v * v + d * d), m.cy = f, n.circle = m;
                    for (var y = null, x = Qc._; x;)
                        if (m.y < x.y || m.y === x.y && m.x <= x.x) {
                            if (!x.L) {
                                y = x.P;
                                break
                            }
                            x = x.L
                        } else {
                            if (!x.R) {
                                y = x;
                                break
                            }
                            x = x.R
                        }
                    Qc.insert(y, m), y || (Kc = m)
                }
            }
        }
    }

    function $r(n) {
        var t = n.circle;
        t && (t.P || (Kc = t.N), Qc.remove(t), ts.push(t), tu(t), n.circle = null)
    }

    function Xr(n) {
        for (var t, e = Jc, r = Fe(n[0][0], n[0][1], n[1][0], n[1][1]), u = e.length; u--;) t = e[u], (!Br(t, n) || !r(t) || fa(t.a.x - t.b.x) < Ta && fa(t.a.y - t.b.y) < Ta) && (t.a = t.b = null, e.splice(u, 1))
    }

    function Br(n, t) {
        var e = n.b;
        if (e) return !0;
        var r, u, i = n.a,
            o = t[0][0],
            a = t[1][0],
            c = t[0][1],
            s = t[1][1],
            l = n.l,
            f = n.r,
            h = l.x,
            g = l.y,
            p = f.x,
            v = f.y,
            d = (h + p) / 2,
            m = (g + v) / 2;
        if (v === g) {
            if (o > d || d >= a) return;
            if (h > p) {
                if (i) {
                    if (i.y >= s) return
                } else i = {
                    x: d,
                    y: c
                };
                e = {
                    x: d,
                    y: s
                }
            } else {
                if (i) {
                    if (i.y < c) return
                } else i = {
                    x: d,
                    y: s
                };
                e = {
                    x: d,
                    y: c
                }
            }
        } else if (r = (h - p) / (v - g), u = m - r * d, -1 > r || r > 1)
            if (h > p) {
                if (i) {
                    if (i.y >= s) return
                } else i = {
                    x: (c - u) / r,
                    y: c
                };
                e = {
                    x: (s - u) / r,
                    y: s
                }
            } else {
                if (i) {
                    if (i.y < c) return
                } else i = {
                    x: (s - u) / r,
                    y: s
                };
                e = {
                    x: (c - u) / r,
                    y: c
                }
            } else
        if (v > g) {
            if (i) {
                if (i.x >= a) return
            } else i = {
                x: o,
                y: r * o + u
            };
            e = {
                x: a,
                y: r * a + u
            }
        } else {
            if (i) {
                if (i.x < o) return
            } else i = {
                x: a,
                y: r * a + u
            };
            e = {
                x: o,
                y: r * o + u
            }
        }
        return n.a = i, n.b = e, !0
    }

    function Jr(n, t) {
        this.l = n, this.r = t, this.a = this.b = null
    }

    function Wr(n, t, e, r) {
        var u = new Jr(n, t);
        return Jc.push(u), e && Kr(u, n, t, e), r && Kr(u, t, n, r), Wc[n.i].edges.push(new Qr(u, n, t)), Wc[t.i].edges.push(new Qr(u, t, n)), u
    }

    function Gr(n, t, e) {
        var r = new Jr(n, null);
        return r.a = t, r.b = e, Jc.push(r), r
    }

    function Kr(n, t, e, r) {
        n.a || n.b ? n.l === e ? n.b = r : n.a = r : (n.a = r, n.l = t, n.r = e)
    }

    function Qr(n, t, e) {
        var r = n.a,
            u = n.b;
        this.edge = n, this.site = t, this.angle = e ? Math.atan2(e.y - t.y, e.x - t.x) : n.l === t ? Math.atan2(u.x - r.x, r.y - u.y) : Math.atan2(r.x - u.x, u.y - r.y)
    }

    function nu() {
        this._ = null
    }

    function tu(n) {
        n.U = n.C = n.L = n.R = n.P = n.N = null
    }

    function eu(n, t) {
        var e = t,
            r = t.R,
            u = e.U;
        u ? u.L === e ? u.L = r : u.R = r : n._ = r, r.U = u, e.U = r, e.R = r.L, e.R && (e.R.U = e), r.L = e
    }

    function ru(n, t) {
        var e = t,
            r = t.L,
            u = e.U;
        u ? u.L === e ? u.L = r : u.R = r : n._ = r, r.U = u, e.U = r, e.L = r.R, e.L && (e.L.U = e), r.R = e
    }

    function uu(n) {
        for (; n.L;) n = n.L;
        return n
    }

    function iu(n, t) {
        var e, r, u, i = n.sort(ou).pop();
        for (Jc = [], Wc = new Array(n.length), Gc = new nu, Qc = new nu;;)
            if (u = Kc, i && (!u || i.y < u.y || i.y === u.y && i.x < u.x))(i.x !== e || i.y !== r) && (Wc[i.i] = new Or(i), jr(i), e = i.x, r = i.y), i = n.pop();
            else {
                if (!u) break;
                Ur(u.arc)
            }
        t && (Xr(t), Ir(t));
        var o = {
            cells: Wc,
            edges: Jc
        };
        return Gc = Qc = Jc = Wc = null, o
    }

    function ou(n, t) {
        return t.y - n.y || t.x - n.x
    }

    function au(n, t, e) {
        return (n.x - e.x) * (t.y - n.y) - (n.x - t.x) * (e.y - n.y)
    }

    function cu(n) {
        return n.x
    }

    function su(n) {
        return n.y
    }

    function lu() {
        return {
            leaf: !0,
            nodes: [],
            point: null,
            x: null,
            y: null
        }
    }

    function fu(n, t, e, r, u, i) {
        if (!n(t, e, r, u, i)) {
            var o = .5 * (e + u),
                a = .5 * (r + i),
                c = t.nodes;
            c[0] && fu(n, c[0], e, r, o, a), c[1] && fu(n, c[1], o, r, u, a), c[2] && fu(n, c[2], e, a, o, i), c[3] && fu(n, c[3], o, a, u, i)
        }
    }

    function hu(n, t) {
        n = Go.rgb(n), t = Go.rgb(t);
        var e = n.r,
            r = n.g,
            u = n.b,
            i = t.r - e,
            o = t.g - r,
            a = t.b - u;
        return function(n) {
            return "#" + Mt(Math.round(e + i * n)) + Mt(Math.round(r + o * n)) + Mt(Math.round(u + a * n))
        }
    }

    function gu(n, t) {
        var e, r = {}, u = {};
        for (e in n) e in t ? r[e] = du(n[e], t[e]) : u[e] = n[e];
        for (e in t) e in n || (u[e] = t[e]);
        return function(n) {
            for (e in r) u[e] = r[e](n);
            return u
        }
    }

    function pu(n, t) {
        return t -= n = +n,
        function(e) {
            return n + t * e
        }
    }

    function vu(n, t) {
        var e, r, u, i = rs.lastIndex = us.lastIndex = 0,
            o = -1,
            a = [],
            c = [];
        for (n += "", t += "";
            (e = rs.exec(n)) && (r = us.exec(t));)(u = r.index) > i && (u = t.substring(i, u), a[o] ? a[o] += u : a[++o] = u), (e = e[0]) === (r = r[0]) ? a[o] ? a[o] += r : a[++o] = r : (a[++o] = null, c.push({
            i: o,
            x: pu(e, r)
        })), i = us.lastIndex;
        return i < t.length && (u = t.substring(i), a[o] ? a[o] += u : a[++o] = u), a.length < 2 ? c[0] ? (t = c[0].x, function(n) {
            return t(n) + ""
        }) : function() {
            return t
        } : (t = c.length, function(n) {
            for (var e, r = 0; t > r; ++r) a[(e = c[r]).i] = e.x(n);
            return a.join("")
        })
    }

    function du(n, t) {
        for (var e, r = Go.interpolators.length; --r >= 0 && !(e = Go.interpolators[r](n, t)););
        return e
    }

    function mu(n, t) {
        var e, r = [],
            u = [],
            i = n.length,
            o = t.length,
            a = Math.min(n.length, t.length);
        for (e = 0; a > e; ++e) r.push(du(n[e], t[e]));
        for (; i > e; ++e) u[e] = n[e];
        for (; o > e; ++e) u[e] = t[e];
        return function(n) {
            for (e = 0; a > e; ++e) u[e] = r[e](n);
            return u
        }
    }

    function yu(n) {
        return function(t) {
            return 0 >= t ? 0 : t >= 1 ? 1 : n(t)
        }
    }

    function xu(n) {
        return function(t) {
            return 1 - n(1 - t)
        }
    }

    function Mu(n) {
        return function(t) {
            return .5 * (.5 > t ? n(2 * t) : 2 - n(2 - 2 * t))
        }
    }

    function _u(n) {
        return n * n
    }

    function bu(n) {
        return n * n * n
    }

    function wu(n) {
        if (0 >= n) return 0;
        if (n >= 1) return 1;
        var t = n * n,
            e = t * n;
        return 4 * (.5 > n ? e : 3 * (n - t) + e - .75)
    }

    function Su(n) {
        return function(t) {
            return Math.pow(t, n)
        }
    }

    function ku(n) {
        return 1 - Math.cos(n * La)
    }

    function Eu(n) {
        return Math.pow(2, 10 * (n - 1))
    }

    function Nu(n) {
        return 1 - Math.sqrt(1 - n * n)
    }

    function Au(n, t) {
        var e;
        return arguments.length < 2 && (t = .45), arguments.length ? e = t / Ca * Math.asin(1 / n) : (n = 1, e = t / 4),
        function(r) {
            return 1 + n * Math.pow(2, -10 * r) * Math.sin((r - e) * Ca / t)
        }
    }

    function Cu(n) {
        return n || (n = 1.70158),
        function(t) {
            return t * t * ((n + 1) * t - n)
        }
    }

    function Lu(n) {
        return 1 / 2.75 > n ? 7.5625 * n * n : 2 / 2.75 > n ? 7.5625 * (n -= 1.5 / 2.75) * n + .75 : 2.5 / 2.75 > n ? 7.5625 * (n -= 2.25 / 2.75) * n + .9375 : 7.5625 * (n -= 2.625 / 2.75) * n + .984375
    }

    function Tu(n, t) {
        n = Go.hcl(n), t = Go.hcl(t);
        var e = n.h,
            r = n.c,
            u = n.l,
            i = t.h - e,
            o = t.c - r,
            a = t.l - u;
        return isNaN(o) && (o = 0, r = isNaN(r) ? t.c : r), isNaN(i) ? (i = 0, e = isNaN(e) ? t.h : e) : i > 180 ? i -= 360 : -180 > i && (i += 360),
        function(n) {
            return ct(e + i * n, r + o * n, u + a * n) + ""
        }
    }

    function qu(n, t) {
        n = Go.hsl(n), t = Go.hsl(t);
        var e = n.h,
            r = n.s,
            u = n.l,
            i = t.h - e,
            o = t.s - r,
            a = t.l - u;
        return isNaN(o) && (o = 0, r = isNaN(r) ? t.s : r), isNaN(i) ? (i = 0, e = isNaN(e) ? t.h : e) : i > 180 ? i -= 360 : -180 > i && (i += 360),
        function(n) {
            return it(e + i * n, r + o * n, u + a * n) + ""
        }
    }

    function zu(n, t) {
        n = Go.lab(n), t = Go.lab(t);
        var e = n.l,
            r = n.a,
            u = n.b,
            i = t.l - e,
            o = t.a - r,
            a = t.b - u;
        return function(n) {
            return ft(e + i * n, r + o * n, u + a * n) + ""
        }
    }

    function Ru(n, t) {
        return t -= n,
        function(e) {
            return Math.round(n + t * e)
        }
    }

    function Du(n) {
        var t = [n.a, n.b],
            e = [n.c, n.d],
            r = Uu(t),
            u = Pu(t, e),
            i = Uu(ju(e, t, -u)) || 0;
        t[0] * e[1] < e[0] * t[1] && (t[0] *= -1, t[1] *= -1, r *= -1, u *= -1), this.rotate = (r ? Math.atan2(t[1], t[0]) : Math.atan2(-e[0], e[1])) * Ra, this.translate = [n.e, n.f], this.scale = [r, i], this.skew = i ? Math.atan2(u, i) * Ra : 0
    }

    function Pu(n, t) {
        return n[0] * t[0] + n[1] * t[1]
    }

    function Uu(n) {
        var t = Math.sqrt(Pu(n, n));
        return t && (n[0] /= t, n[1] /= t), t
    }

    function ju(n, t, e) {
        return n[0] += e * t[0], n[1] += e * t[1], n
    }

    function Hu(n, t) {
        var e, r = [],
            u = [],
            i = Go.transform(n),
            o = Go.transform(t),
            a = i.translate,
            c = o.translate,
            s = i.rotate,
            l = o.rotate,
            f = i.skew,
            h = o.skew,
            g = i.scale,
            p = o.scale;
        return a[0] != c[0] || a[1] != c[1] ? (r.push("translate(", null, ",", null, ")"), u.push({
            i: 1,
            x: pu(a[0], c[0])
        }, {
            i: 3,
            x: pu(a[1], c[1])
        })) : c[0] || c[1] ? r.push("translate(" + c + ")") : r.push(""), s != l ? (s - l > 180 ? l += 360 : l - s > 180 && (s += 360), u.push({
            i: r.push(r.pop() + "rotate(", null, ")") - 2,
            x: pu(s, l)
        })) : l && r.push(r.pop() + "rotate(" + l + ")"), f != h ? u.push({
            i: r.push(r.pop() + "skewX(", null, ")") - 2,
            x: pu(f, h)
        }) : h && r.push(r.pop() + "skewX(" + h + ")"), g[0] != p[0] || g[1] != p[1] ? (e = r.push(r.pop() + "scale(", null, ",", null, ")"), u.push({
            i: e - 4,
            x: pu(g[0], p[0])
        }, {
            i: e - 2,
            x: pu(g[1], p[1])
        })) : (1 != p[0] || 1 != p[1]) && r.push(r.pop() + "scale(" + p + ")"), e = u.length,
        function(n) {
            for (var t, i = -1; ++i < e;) r[(t = u[i]).i] = t.x(n);
            return r.join("")
        }
    }

    function Fu(n, t) {
        return t = t - (n = +n) ? 1 / (t - n) : 0,
        function(e) {
            return (e - n) * t
        }
    }

    function Ou(n, t) {
        return t = t - (n = +n) ? 1 / (t - n) : 0,
        function(e) {
            return Math.max(0, Math.min(1, (e - n) * t))
        }
    }

    function Iu(n) {
        for (var t = n.source, e = n.target, r = Zu(t, e), u = [t]; t !== r;) t = t.parent, u.push(t);
        for (var i = u.length; e !== r;) u.splice(i, 0, e), e = e.parent;
        return u
    }

    function Yu(n) {
        for (var t = [], e = n.parent; null != e;) t.push(n), n = e, e = e.parent;
        return t.push(n), t
    }

    function Zu(n, t) {
        if (n === t) return n;
        for (var e = Yu(n), r = Yu(t), u = e.pop(), i = r.pop(), o = null; u === i;) o = u, u = e.pop(), i = r.pop();
        return o
    }

    function Vu(n) {
        n.fixed |= 2
    }

    function $u(n) {
        n.fixed &= -7
    }

    function Xu(n) {
        n.fixed |= 4, n.px = n.x, n.py = n.y
    }

    function Bu(n) {
        n.fixed &= -5
    }

    function Ju(n, t, e) {
        var r = 0,
            u = 0;
        if (n.charge = 0, !n.leaf)
            for (var i, o = n.nodes, a = o.length, c = -1; ++c < a;) i = o[c], null != i && (Ju(i, t, e), n.charge += i.charge, r += i.charge * i.cx, u += i.charge * i.cy);
        if (n.point) {
            n.leaf || (n.point.x += Math.random() - .5, n.point.y += Math.random() - .5);
            var s = t * e[n.point.index];
            n.charge += n.pointCharge = s, r += s * n.point.x, u += s * n.point.y
        }
        n.cx = r / n.charge, n.cy = u / n.charge
    }

    function Wu(n, t) {
        return Go.rebind(n, t, "sort", "children", "value"), n.nodes = n, n.links = ni, n
    }

    function Gu(n) {
        return n.children
    }

    function Ku(n) {
        return n.value
    }

    function Qu(n, t) {
        return t.value - n.value
    }

    function ni(n) {
        return Go.merge(n.map(function(n) {
            return (n.children || []).map(function(t) {
                return {
                    source: n,
                    target: t
                }
            })
        }))
    }

    function ti(n) {
        return n.x
    }

    function ei(n) {
        return n.y
    }

    function ri(n, t, e) {
        n.y0 = t, n.y = e
    }

    function ui(n) {
        return Go.range(n.length)
    }

    function ii(n) {
        for (var t = -1, e = n[0].length, r = []; ++t < e;) r[t] = 0;
        return r
    }

    function oi(n) {
        for (var t, e = 1, r = 0, u = n[0][1], i = n.length; i > e; ++e)(t = n[e][1]) > u && (r = e, u = t);
        return r
    }

    function ai(n) {
        return n.reduce(ci, 0)
    }

    function ci(n, t) {
        return n + t[1]
    }

    function si(n, t) {
        return li(n, Math.ceil(Math.log(t.length) / Math.LN2 + 1))
    }

    function li(n, t) {
        for (var e = -1, r = +n[0], u = (n[1] - r) / t, i = []; ++e <= t;) i[e] = u * e + r;
        return i
    }

    function fi(n) {
        return [Go.min(n), Go.max(n)]
    }

    function hi(n, t) {
        return n.parent == t.parent ? 1 : 2
    }

    function gi(n) {
        var t = n.children;
        return t && t.length ? t[0] : n._tree.thread
    }

    function pi(n) {
        var t, e = n.children;
        return e && (t = e.length) ? e[t - 1] : n._tree.thread
    }

    function vi(n, t) {
        var e = n.children;
        if (e && (u = e.length))
            for (var r, u, i = -1; ++i < u;) t(r = vi(e[i], t), n) > 0 && (n = r);
        return n
    }

    function di(n, t) {
        return n.x - t.x
    }

    function mi(n, t) {
        return t.x - n.x
    }

    function yi(n, t) {
        return n.depth - t.depth
    }

    function xi(n, t) {
        function e(n, r) {
            var u = n.children;
            if (u && (o = u.length))
                for (var i, o, a = null, c = -1; ++c < o;) i = u[c], e(i, a), a = i;
            t(n, r)
        }
        e(n, null)
    }

    function Mi(n) {
        for (var t, e = 0, r = 0, u = n.children, i = u.length; --i >= 0;) t = u[i]._tree, t.prelim += e, t.mod += e, e += t.shift + (r += t.change)
    }

    function _i(n, t, e) {
        n = n._tree, t = t._tree;
        var r = e / (t.number - n.number);
        n.change += r, t.change -= r, t.shift += e, t.prelim += e, t.mod += e
    }

    function bi(n, t, e) {
        return n._tree.ancestor.parent == t.parent ? n._tree.ancestor : e
    }

    function wi(n, t) {
        return n.value - t.value
    }

    function Si(n, t) {
        var e = n._pack_next;
        n._pack_next = t, t._pack_prev = n, t._pack_next = e, e._pack_prev = t
    }

    function ki(n, t) {
        n._pack_next = t, t._pack_prev = n
    }

    function Ei(n, t) {
        var e = t.x - n.x,
            r = t.y - n.y,
            u = n.r + t.r;
        return .999 * u * u > e * e + r * r
    }

    function Ni(n) {
        function t(n) {
            l = Math.min(n.x - n.r, l), f = Math.max(n.x + n.r, f), h = Math.min(n.y - n.r, h), g = Math.max(n.y + n.r, g)
        }
        if ((e = n.children) && (s = e.length)) {
            var e, r, u, i, o, a, c, s, l = 1 / 0,
                f = -1 / 0,
                h = 1 / 0,
                g = -1 / 0;
            if (e.forEach(Ai), r = e[0], r.x = -r.r, r.y = 0, t(r), s > 1 && (u = e[1], u.x = u.r, u.y = 0, t(u), s > 2))
                for (i = e[2], Ti(r, u, i), t(i), Si(r, i), r._pack_prev = i, Si(i, u), u = r._pack_next, o = 3; s > o; o++) {
                    Ti(r, u, i = e[o]);
                    var p = 0,
                        v = 1,
                        d = 1;
                    for (a = u._pack_next; a !== u; a = a._pack_next, v++)
                        if (Ei(a, i)) {
                            p = 1;
                            break
                        }
                    if (1 == p)
                        for (c = r._pack_prev; c !== a._pack_prev && !Ei(c, i); c = c._pack_prev, d++);
                    p ? (d > v || v == d && u.r < r.r ? ki(r, u = a) : ki(r = c, u), o--) : (Si(r, i), u = i, t(i))
                }
            var m = (l + f) / 2,
                y = (h + g) / 2,
                x = 0;
            for (o = 0; s > o; o++) i = e[o], i.x -= m, i.y -= y, x = Math.max(x, i.r + Math.sqrt(i.x * i.x + i.y * i.y));
            n.r = x, e.forEach(Ci)
        }
    }

    function Ai(n) {
        n._pack_next = n._pack_prev = n
    }

    function Ci(n) {
        delete n._pack_next, delete n._pack_prev
    }

    function Li(n, t, e, r) {
        var u = n.children;
        if (n.x = t += r * n.x, n.y = e += r * n.y, n.r *= r, u)
            for (var i = -1, o = u.length; ++i < o;) Li(u[i], t, e, r)
    }

    function Ti(n, t, e) {
        var r = n.r + e.r,
            u = t.x - n.x,
            i = t.y - n.y;
        if (r && (u || i)) {
            var o = t.r + e.r,
                a = u * u + i * i;
            o *= o, r *= r;
            var c = .5 + (r - o) / (2 * a),
                s = Math.sqrt(Math.max(0, 2 * o * (r + a) - (r -= a) * r - o * o)) / (2 * a);
            e.x = n.x + c * u + s * i, e.y = n.y + c * i - s * u
        } else e.x = n.x + r, e.y = n.y
    }

    function qi(n) {
        return 1 + Go.max(n, function(n) {
            return n.y
        })
    }

    function zi(n) {
        return n.reduce(function(n, t) {
            return n + t.x
        }, 0) / n.length
    }

    function Ri(n) {
        var t = n.children;
        return t && t.length ? Ri(t[0]) : n
    }

    function Di(n) {
        var t, e = n.children;
        return e && (t = e.length) ? Di(e[t - 1]) : n
    }

    function Pi(n) {
        return {
            x: n.x,
            y: n.y,
            dx: n.dx,
            dy: n.dy
        }
    }

    function Ui(n, t) {
        var e = n.x + t[3],
            r = n.y + t[0],
            u = n.dx - t[1] - t[3],
            i = n.dy - t[0] - t[2];
        return 0 > u && (e += u / 2, u = 0), 0 > i && (r += i / 2, i = 0), {
            x: e,
            y: r,
            dx: u,
            dy: i
        }
    }

    function ji(n) {
        var t = n[0],
            e = n[n.length - 1];
        return e > t ? [t, e] : [e, t]
    }

    function Hi(n) {
        return n.rangeExtent ? n.rangeExtent() : ji(n.range())
    }

    function Fi(n, t, e, r) {
        var u = e(n[0], n[1]),
            i = r(t[0], t[1]);
        return function(n) {
            return i(u(n))
        }
    }

    function Oi(n, t) {
        var e, r = 0,
            u = n.length - 1,
            i = n[r],
            o = n[u];
        return i > o && (e = r, r = u, u = e, e = i, i = o, o = e), n[r] = t.floor(i), n[u] = t.ceil(o), n
    }

    function Ii(n) {
        return n ? {
            floor: function(t) {
                return Math.floor(t / n) * n
            },
            ceil: function(t) {
                return Math.ceil(t / n) * n
            }
        } : vs
    }

    function Yi(n, t, e, r) {
        var u = [],
            i = [],
            o = 0,
            a = Math.min(n.length, t.length) - 1;
        for (n[a] < n[0] && (n = n.slice().reverse(), t = t.slice().reverse()); ++o <= a;) u.push(e(n[o - 1], n[o])), i.push(r(t[o - 1], t[o]));
        return function(t) {
            var e = Go.bisect(n, t, 1, a) - 1;
            return i[e](u[e](t))
        }
    }

    function Zi(n, t, e, r) {
        function u() {
            var u = Math.min(n.length, t.length) > 2 ? Yi : Fi,
                c = r ? Ou : Fu;
            return o = u(n, t, c, e), a = u(t, n, c, du), i
        }

        function i(n) {
            return o(n)
        }
        var o, a;
        return i.invert = function(n) {
            return a(n)
        }, i.domain = function(t) {
            return arguments.length ? (n = t.map(Number), u()) : n
        }, i.range = function(n) {
            return arguments.length ? (t = n, u()) : t
        }, i.rangeRound = function(n) {
            return i.range(n).interpolate(Ru)
        }, i.clamp = function(n) {
            return arguments.length ? (r = n, u()) : r
        }, i.interpolate = function(n) {
            return arguments.length ? (e = n, u()) : e
        }, i.ticks = function(t) {
            return Bi(n, t)
        }, i.tickFormat = function(t, e) {
            return Ji(n, t, e)
        }, i.nice = function(t) {
            return $i(n, t), u()
        }, i.copy = function() {
            return Zi(n, t, e, r)
        }, u()
    }

    function Vi(n, t) {
        return Go.rebind(n, t, "range", "rangeRound", "interpolate", "clamp")
    }

    function $i(n, t) {
        return Oi(n, Ii(Xi(n, t)[2]))
    }

    function Xi(n, t) {
        null == t && (t = 10);
        var e = ji(n),
            r = e[1] - e[0],
            u = Math.pow(10, Math.floor(Math.log(r / t) / Math.LN10)),
            i = t / r * u;
        return .15 >= i ? u *= 10 : .35 >= i ? u *= 5 : .75 >= i && (u *= 2), e[0] = Math.ceil(e[0] / u) * u, e[1] = Math.floor(e[1] / u) * u + .5 * u, e[2] = u, e
    }

    function Bi(n, t) {
        return Go.range.apply(Go, Xi(n, t))
    }

    function Ji(n, t, e) {
        var r = Xi(n, t);
        if (e) {
            var u = rc.exec(e);
            if (u.shift(), "s" === u[8]) {
                var i = Go.formatPrefix(Math.max(fa(r[0]), fa(r[1])));
                return u[7] || (u[7] = "." + Wi(i.scale(r[2]))), u[8] = "f", e = Go.format(u.join("")),
                function(n) {
                    return e(i.scale(n)) + i.symbol
                }
            }
            u[7] || (u[7] = "." + Gi(u[8], r)), e = u.join("")
        } else e = ",." + Wi(r[2]) + "f";
        return Go.format(e)
    }

    function Wi(n) {
        return -Math.floor(Math.log(n) / Math.LN10 + .01)
    }

    function Gi(n, t) {
        var e = Wi(t[2]);
        return n in ds ? Math.abs(e - Wi(Math.max(fa(t[0]), fa(t[1])))) + +("e" !== n) : e - 2 * ("%" === n)
    }

    function Ki(n, t, e, r) {
        function u(n) {
            return (e ? Math.log(0 > n ? 0 : n) : -Math.log(n > 0 ? 0 : -n)) / Math.log(t)
        }

        function i(n) {
            return e ? Math.pow(t, n) : -Math.pow(t, -n)
        }

        function o(t) {
            return n(u(t))
        }
        return o.invert = function(t) {
            return i(n.invert(t))
        }, o.domain = function(t) {
            return arguments.length ? (e = t[0] >= 0, n.domain((r = t.map(Number)).map(u)), o) : r
        }, o.base = function(e) {
            return arguments.length ? (t = +e, n.domain(r.map(u)), o) : t
        }, o.nice = function() {
            var t = Oi(r.map(u), e ? Math : ys);
            return n.domain(t), r = t.map(i), o
        }, o.ticks = function() {
            var n = ji(r),
                o = [],
                a = n[0],
                c = n[1],
                s = Math.floor(u(a)),
                l = Math.ceil(u(c)),
                f = t % 1 ? 2 : t;
            if (isFinite(l - s)) {
                if (e) {
                    for (; l > s; s++)
                        for (var h = 1; f > h; h++) o.push(i(s) * h);
                    o.push(i(s))
                } else
                    for (o.push(i(s)); s++ < l;)
                        for (var h = f - 1; h > 0; h--) o.push(i(s) * h);
                for (s = 0; o[s] < a; s++);
                for (l = o.length; o[l - 1] > c; l--);
                o = o.slice(s, l)
            }
            return o
        }, o.tickFormat = function(n, t) {
            if (!arguments.length) return ms;
            arguments.length < 2 ? t = ms : "function" != typeof t && (t = Go.format(t));
            var r, a = Math.max(.1, n / o.ticks().length),
                c = e ? (r = 1e-12, Math.ceil) : (r = -1e-12, Math.floor);
            return function(n) {
                return n / i(c(u(n) + r)) <= a ? t(n) : ""
            }
        }, o.copy = function() {
            return Ki(n.copy(), t, e, r)
        }, Vi(o, n)
    }

    function Qi(n, t, e) {
        function r(t) {
            return n(u(t))
        }
        var u = no(t),
            i = no(1 / t);
        return r.invert = function(t) {
            return i(n.invert(t))
        }, r.domain = function(t) {
            return arguments.length ? (n.domain((e = t.map(Number)).map(u)), r) : e
        }, r.ticks = function(n) {
            return Bi(e, n)
        }, r.tickFormat = function(n, t) {
            return Ji(e, n, t)
        }, r.nice = function(n) {
            return r.domain($i(e, n))
        }, r.exponent = function(o) {
            return arguments.length ? (u = no(t = o), i = no(1 / t), n.domain(e.map(u)), r) : t
        }, r.copy = function() {
            return Qi(n.copy(), t, e)
        }, Vi(r, n)
    }

    function no(n) {
        return function(t) {
            return 0 > t ? -Math.pow(-t, n) : Math.pow(t, n)
        }
    }

    function to(n, t) {
        function e(e) {
            return i[((u.get(e) || ("range" === t.t ? u.set(e, n.push(e)) : 0 / 0)) - 1) % i.length]
        }

        function r(t, e) {
            return Go.range(n.length).map(function(n) {
                return t + e * n
            })
        }
        var u, i, a;
        return e.domain = function(r) {
            if (!arguments.length) return n;
            n = [], u = new o;
            for (var i, a = -1, c = r.length; ++a < c;) u.has(i = r[a]) || u.set(i, n.push(i));
            return e[t.t].apply(e, t.a)
        }, e.range = function(n) {
            return arguments.length ? (i = n, a = 0, t = {
                t: "range",
                a: arguments
            }, e) : i
        }, e.rangePoints = function(u, o) {
            arguments.length < 2 && (o = 0);
            var c = u[0],
                s = u[1],
                l = (s - c) / (Math.max(1, n.length - 1) + o);
            return i = r(n.length < 2 ? (c + s) / 2 : c + l * o / 2, l), a = 0, t = {
                t: "rangePoints",
                a: arguments
            }, e
        }, e.rangeBands = function(u, o, c) {
            arguments.length < 2 && (o = 0), arguments.length < 3 && (c = o);
            var s = u[1] < u[0],
                l = u[s - 0],
                f = u[1 - s],
                h = (f - l) / (n.length - o + 2 * c);
            return i = r(l + h * c, h), s && i.reverse(), a = h * (1 - o), t = {
                t: "rangeBands",
                a: arguments
            }, e
        }, e.rangeRoundBands = function(u, o, c) {
            arguments.length < 2 && (o = 0), arguments.length < 3 && (c = o);
            var s = u[1] < u[0],
                l = u[s - 0],
                f = u[1 - s],
                h = Math.floor((f - l) / (n.length - o + 2 * c)),
                g = f - l - (n.length - o) * h;
            return i = r(l + Math.round(g / 2), h), s && i.reverse(), a = Math.round(h * (1 - o)), t = {
                t: "rangeRoundBands",
                a: arguments
            }, e
        }, e.rangeBand = function() {
            return a
        }, e.rangeExtent = function() {
            return ji(t.a[0])
        }, e.copy = function() {
            return to(n, t)
        }, e.domain(n)
    }

    function eo(t, e) {
        function r() {
            var n = 0,
                r = e.length;
            for (i = []; ++n < r;) i[n - 1] = Go.quantile(t, n / r);
            return u
        }

        function u(n) {
            return isNaN(n = +n) ? void 0 : e[Go.bisect(i, n)]
        }
        var i;
        return u.domain = function(e) {
            return arguments.length ? (t = e.filter(function(n) {
                return !isNaN(n)
            }).sort(n), r()) : t
        }, u.range = function(n) {
            return arguments.length ? (e = n, r()) : e
        }, u.quantiles = function() {
            return i
        }, u.invertExtent = function(n) {
            return n = e.indexOf(n), 0 > n ? [0 / 0, 0 / 0] : [n > 0 ? i[n - 1] : t[0], n < i.length ? i[n] : t[t.length - 1]]
        }, u.copy = function() {
            return eo(t, e)
        }, r()
    }

    function ro(n, t, e) {
        function r(t) {
            return e[Math.max(0, Math.min(o, Math.floor(i * (t - n))))]
        }

        function u() {
            return i = e.length / (t - n), o = e.length - 1, r
        }
        var i, o;
        return r.domain = function(e) {
            return arguments.length ? (n = +e[0], t = +e[e.length - 1], u()) : [n, t]
        }, r.range = function(n) {
            return arguments.length ? (e = n, u()) : e
        }, r.invertExtent = function(t) {
            return t = e.indexOf(t), t = 0 > t ? 0 / 0 : t / i + n, [t, t + 1 / i]
        }, r.copy = function() {
            return ro(n, t, e)
        }, u()
    }

    function uo(n, t) {
        function e(e) {
            return e >= e ? t[Go.bisect(n, e)] : void 0
        }
        return e.domain = function(t) {
            return arguments.length ? (n = t, e) : n
        }, e.range = function(n) {
            return arguments.length ? (t = n, e) : t
        }, e.invertExtent = function(e) {
            return e = t.indexOf(e), [n[e - 1], n[e]]
        }, e.copy = function() {
            return uo(n, t)
        }, e
    }

    function io(n) {
        function t(n) {
            return +n
        }
        return t.invert = t, t.domain = t.range = function(e) {
            return arguments.length ? (n = e.map(t), t) : n
        }, t.ticks = function(t) {
            return Bi(n, t)
        }, t.tickFormat = function(t, e) {
            return Ji(n, t, e)
        }, t.copy = function() {
            return io(n)
        }, t
    }

    function oo(n) {
        return n.innerRadius
    }

    function ao(n) {
        return n.outerRadius
    }

    function co(n) {
        return n.startAngle
    }

    function so(n) {
        return n.endAngle
    }

    function lo(n) {
        function t(t) {
            function o() {
                s.push("M", i(n(l), a))
            }
            for (var c, s = [], l = [], f = -1, h = t.length, g = Et(e), p = Et(r); ++f < h;) u.call(this, c = t[f], f) ? l.push([+g.call(this, c, f), +p.call(this, c, f)]) : l.length && (o(), l = []);
            return l.length && o(), s.length ? s.join("") : null
        }
        var e = Nr,
            r = Ar,
            u = Ne,
            i = fo,
            o = i.key,
            a = .7;
        return t.x = function(n) {
            return arguments.length ? (e = n, t) : e
        }, t.y = function(n) {
            return arguments.length ? (r = n, t) : r
        }, t.defined = function(n) {
            return arguments.length ? (u = n, t) : u
        }, t.interpolate = function(n) {
            return arguments.length ? (o = "function" == typeof n ? i = n : (i = ks.get(n) || fo).key, t) : o
        }, t.tension = function(n) {
            return arguments.length ? (a = n, t) : a
        }, t
    }

    function fo(n) {
        return n.join("L")
    }

    function ho(n) {
        return fo(n) + "Z"
    }

    function go(n) {
        for (var t = 0, e = n.length, r = n[0], u = [r[0], ",", r[1]]; ++t < e;) u.push("H", (r[0] + (r = n[t])[0]) / 2, "V", r[1]);
        return e > 1 && u.push("H", r[0]), u.join("")
    }

    function po(n) {
        for (var t = 0, e = n.length, r = n[0], u = [r[0], ",", r[1]]; ++t < e;) u.push("V", (r = n[t])[1], "H", r[0]);
        return u.join("")
    }

    function vo(n) {
        for (var t = 0, e = n.length, r = n[0], u = [r[0], ",", r[1]]; ++t < e;) u.push("H", (r = n[t])[0], "V", r[1]);
        return u.join("")
    }

    function mo(n, t) {
        return n.length < 4 ? fo(n) : n[1] + Mo(n.slice(1, n.length - 1), _o(n, t))
    }

    function yo(n, t) {
        return n.length < 3 ? fo(n) : n[0] + Mo((n.push(n[0]), n), _o([n[n.length - 2]].concat(n, [n[1]]), t))
    }

    function xo(n, t) {
        return n.length < 3 ? fo(n) : n[0] + Mo(n, _o(n, t))
    }

    function Mo(n, t) {
        if (t.length < 1 || n.length != t.length && n.length != t.length + 2) return fo(n);
        var e = n.length != t.length,
            r = "",
            u = n[0],
            i = n[1],
            o = t[0],
            a = o,
            c = 1;
        if (e && (r += "Q" + (i[0] - 2 * o[0] / 3) + "," + (i[1] - 2 * o[1] / 3) + "," + i[0] + "," + i[1], u = n[1], c = 2), t.length > 1) {
            a = t[1], i = n[c], c++, r += "C" + (u[0] + o[0]) + "," + (u[1] + o[1]) + "," + (i[0] - a[0]) + "," + (i[1] - a[1]) + "," + i[0] + "," + i[1];
            for (var s = 2; s < t.length; s++, c++) i = n[c], a = t[s], r += "S" + (i[0] - a[0]) + "," + (i[1] - a[1]) + "," + i[0] + "," + i[1]
        }
        if (e) {
            var l = n[c];
            r += "Q" + (i[0] + 2 * a[0] / 3) + "," + (i[1] + 2 * a[1] / 3) + "," + l[0] + "," + l[1]
        }
        return r
    }

    function _o(n, t) {
        for (var e, r = [], u = (1 - t) / 2, i = n[0], o = n[1], a = 1, c = n.length; ++a < c;) e = i, i = o, o = n[a], r.push([u * (o[0] - e[0]), u * (o[1] - e[1])]);
        return r
    }

    function bo(n) {
        if (n.length < 3) return fo(n);
        var t = 1,
            e = n.length,
            r = n[0],
            u = r[0],
            i = r[1],
            o = [u, u, u, (r = n[1])[0]],
            a = [i, i, i, r[1]],
            c = [u, ",", i, "L", Eo(As, o), ",", Eo(As, a)];
        for (n.push(n[e - 1]); ++t <= e;) r = n[t], o.shift(), o.push(r[0]), a.shift(), a.push(r[1]), No(c, o, a);
        return n.pop(), c.push("L", r), c.join("")
    }

    function wo(n) {
        if (n.length < 4) return fo(n);
        for (var t, e = [], r = -1, u = n.length, i = [0], o = [0]; ++r < 3;) t = n[r], i.push(t[0]), o.push(t[1]);
        for (e.push(Eo(As, i) + "," + Eo(As, o)), --r; ++r < u;) t = n[r], i.shift(), i.push(t[0]), o.shift(), o.push(t[1]), No(e, i, o);
        return e.join("")
    }

    function So(n) {
        for (var t, e, r = -1, u = n.length, i = u + 4, o = [], a = []; ++r < 4;) e = n[r % u], o.push(e[0]), a.push(e[1]);
        for (t = [Eo(As, o), ",", Eo(As, a)], --r; ++r < i;) e = n[r % u], o.shift(), o.push(e[0]), a.shift(), a.push(e[1]), No(t, o, a);
        return t.join("")
    }

    function ko(n, t) {
        var e = n.length - 1;
        if (e)
            for (var r, u, i = n[0][0], o = n[0][1], a = n[e][0] - i, c = n[e][1] - o, s = -1; ++s <= e;) r = n[s], u = s / e, r[0] = t * r[0] + (1 - t) * (i + u * a), r[1] = t * r[1] + (1 - t) * (o + u * c);
        return bo(n)
    }

    function Eo(n, t) {
        return n[0] * t[0] + n[1] * t[1] + n[2] * t[2] + n[3] * t[3]
    }

    function No(n, t, e) {
        n.push("C", Eo(Es, t), ",", Eo(Es, e), ",", Eo(Ns, t), ",", Eo(Ns, e), ",", Eo(As, t), ",", Eo(As, e))
    }

    function Ao(n, t) {
        return (t[1] - n[1]) / (t[0] - n[0])
    }

    function Co(n) {
        for (var t = 0, e = n.length - 1, r = [], u = n[0], i = n[1], o = r[0] = Ao(u, i); ++t < e;) r[t] = (o + (o = Ao(u = i, i = n[t + 1]))) / 2;
        return r[t] = o, r
    }

    function Lo(n) {
        for (var t, e, r, u, i = [], o = Co(n), a = -1, c = n.length - 1; ++a < c;) t = Ao(n[a], n[a + 1]), fa(t) < Ta ? o[a] = o[a + 1] = 0 : (e = o[a] / t, r = o[a + 1] / t, u = e * e + r * r, u > 9 && (u = 3 * t / Math.sqrt(u), o[a] = u * e, o[a + 1] = u * r));
        for (a = -1; ++a <= c;) u = (n[Math.min(c, a + 1)][0] - n[Math.max(0, a - 1)][0]) / (6 * (1 + o[a] * o[a])), i.push([u || 0, o[a] * u || 0]);
        return i
    }

    function To(n) {
        return n.length < 3 ? fo(n) : n[0] + Mo(n, Lo(n))
    }

    function qo(n) {
        for (var t, e, r, u = -1, i = n.length; ++u < i;) t = n[u], e = t[0], r = t[1] + ws, t[0] = e * Math.cos(r), t[1] = e * Math.sin(r);
        return n
    }

    function zo(n) {
        function t(t) {
            function c() {
                v.push("M", a(n(m), f), l, s(n(d.reverse()), f), "Z")
            }
            for (var h, g, p, v = [], d = [], m = [], y = -1, x = t.length, M = Et(e), _ = Et(u), b = e === r ? function() {
                    return g
                } : Et(r), w = u === i ? function() {
                    return p
                } : Et(i); ++y < x;) o.call(this, h = t[y], y) ? (d.push([g = +M.call(this, h, y), p = +_.call(this, h, y)]), m.push([+b.call(this, h, y), +w.call(this, h, y)])) : d.length && (c(), d = [], m = []);
            return d.length && c(), v.length ? v.join("") : null
        }
        var e = Nr,
            r = Nr,
            u = 0,
            i = Ar,
            o = Ne,
            a = fo,
            c = a.key,
            s = a,
            l = "L",
            f = .7;
        return t.x = function(n) {
            return arguments.length ? (e = r = n, t) : r
        }, t.x0 = function(n) {
            return arguments.length ? (e = n, t) : e
        }, t.x1 = function(n) {
            return arguments.length ? (r = n, t) : r
        }, t.y = function(n) {
            return arguments.length ? (u = i = n, t) : i
        }, t.y0 = function(n) {
            return arguments.length ? (u = n, t) : u
        }, t.y1 = function(n) {
            return arguments.length ? (i = n, t) : i
        }, t.defined = function(n) {
            return arguments.length ? (o = n, t) : o
        }, t.interpolate = function(n) {
            return arguments.length ? (c = "function" == typeof n ? a = n : (a = ks.get(n) || fo).key, s = a.reverse || a, l = a.closed ? "M" : "L", t) : c
        }, t.tension = function(n) {
            return arguments.length ? (f = n, t) : f
        }, t
    }

    function Ro(n) {
        return n.radius
    }

    function Do(n) {
        return [n.x, n.y]
    }

    function Po(n) {
        return function() {
            var t = n.apply(this, arguments),
                e = t[0],
                r = t[1] + ws;
            return [e * Math.cos(r), e * Math.sin(r)]
        }
    }

    function Uo() {
        return 64
    }

    function jo() {
        return "circle"
    }

    function Ho(n) {
        var t = Math.sqrt(n / Aa);
        return "M0," + t + "A" + t + "," + t + " 0 1,1 0," + -t + "A" + t + "," + t + " 0 1,1 0," + t + "Z"
    }

    function Fo(n, t) {
        return da(n, Rs), n.id = t, n
    }

    function Oo(n, t, e, r) {
        var u = n.id;
        return P(n, "function" == typeof e ? function(n, i, o) {
            n.__transition__[u].tween.set(t, r(e.call(n, n.__data__, i, o)))
        } : (e = r(e), function(n) {
            n.__transition__[u].tween.set(t, e)
        }))
    }

    function Io(n) {
        return null == n && (n = ""),
        function() {
            this.textContent = n
        }
    }

    function Yo(n, t, e, r) {
        var u = n.__transition__ || (n.__transition__ = {
            active: 0,
            count: 0
        }),
            i = u[e];
        if (!i) {
            var a = r.time;
            i = u[e] = {
                tween: new o,
                time: a,
                ease: r.ease,
                delay: r.delay,
                duration: r.duration
            }, ++u.count, Go.timer(function(r) {
                function o(r) {
                    return u.active > e ? s() : (u.active = e, i.event && i.event.start.call(n, l, t), i.tween.forEach(function(e, r) {
                        (r = r.call(n, l, t)) && v.push(r)
                    }), Go.timer(function() {
                        return p.c = c(r || 1) ? Ne : c, 1
                    }, 0, a), void 0)
                }

                function c(r) {
                    if (u.active !== e) return s();
                    for (var o = r / g, a = f(o), c = v.length; c > 0;) v[--c].call(n, a);
                    return o >= 1 ? (i.event && i.event.end.call(n, l, t), s()) : void 0
                }

                function s() {
                    return --u.count ? delete u[e] : delete n.__transition__, 1
                }
                var l = n.__data__,
                    f = i.ease,
                    h = i.delay,
                    g = i.duration,
                    p = nc,
                    v = [];
                return p.t = h + a, r >= h ? o(r - h) : (p.c = o, void 0)
            }, 0, a)
        }
    }

    function Zo(n, t) {
        n.attr("transform", function(n) {
            return "translate(" + t(n) + ",0)"
        })
    }

    function Vo(n, t) {
        n.attr("transform", function(n) {
            return "translate(0," + t(n) + ")"
        })
    }

    function $o(n) {
        return n.toISOString()
    }

    function Xo(n, t, e) {
        function r(t) {
            return n(t)
        }

        function u(n, e) {
            var r = n[1] - n[0],
                u = r / e,
                i = Go.bisect(Ys, u);
            return i == Ys.length ? [t.year, Xi(n.map(function(n) {
                return n / 31536e6
            }), e)[2]] : i ? t[u / Ys[i - 1] < Ys[i] / u ? i - 1 : i] : [$s, Xi(n, e)[2]]
        }
        return r.invert = function(t) {
            return Bo(n.invert(t))
        }, r.domain = function(t) {
            return arguments.length ? (n.domain(t), r) : n.domain().map(Bo)
        }, r.nice = function(n, t) {
            function e(e) {
                return !isNaN(e) && !n.range(e, Bo(+e + 1), t).length
            }
            var i = r.domain(),
                o = ji(i),
                a = null == n ? u(o, 10) : "number" == typeof n && u(o, n);
            return a && (n = a[0], t = a[1]), r.domain(Oi(i, t > 1 ? {
                floor: function(t) {
                    for (; e(t = n.floor(t));) t = Bo(t - 1);
                    return t
                },
                ceil: function(t) {
                    for (; e(t = n.ceil(t));) t = Bo(+t + 1);
                    return t
                }
            } : n))
        }, r.ticks = function(n, t) {
            var e = ji(r.domain()),
                i = null == n ? u(e, 10) : "number" == typeof n ? u(e, n) : !n.range && [{
                        range: n
                    },
                    t
                ];
            return i && (n = i[0], t = i[1]), n.range(e[0], Bo(+e[1] + 1), 1 > t ? 1 : t)
        }, r.tickFormat = function() {
            return e
        }, r.copy = function() {
            return Xo(n.copy(), t, e)
        }, Vi(r, n)
    }

    function Bo(n) {
        return new Date(n)
    }

    function Jo(n) {
        return JSON.parse(n.responseText)
    }

    function Wo(n) {
        var t = na.createRange();
        return t.selectNode(na.body), t.createContextualFragment(n.responseText)
    }
    var Go = {
        version: "3.4.5"
    };
    Date.now || (Date.now = function() {
        return +new Date
    });
    var Ko = [].slice,
        Qo = function(n) {
            return Ko.call(n)
        }, na = document,
        ta = na.documentElement,
        ea = window;
    try {
        Qo(ta.childNodes)[0].nodeType
    } catch (ra) {
        Qo = function(n) {
            for (var t = n.length, e = new Array(t); t--;) e[t] = n[t];
            return e
        }
    }
    try {
        na.createElement("div").style.setProperty("opacity", 0, "")
    } catch (ua) {
        var ia = ea.Element.prototype,
            oa = ia.setAttribute,
            aa = ia.setAttributeNS,
            ca = ea.CSSStyleDeclaration.prototype,
            sa = ca.setProperty;
        ia.setAttribute = function(n, t) {
            oa.call(this, n, t + "")
        }, ia.setAttributeNS = function(n, t, e) {
            aa.call(this, n, t, e + "")
        }, ca.setProperty = function(n, t, e) {
            sa.call(this, n, t + "", e)
        }
    }
    Go.ascending = n, Go.descending = function(n, t) {
        return n > t ? -1 : t > n ? 1 : t >= n ? 0 : 0 / 0
    }, Go.min = function(n, t) {
        var e, r, u = -1,
            i = n.length;
        if (1 === arguments.length) {
            for (; ++u < i && !(null != (e = n[u]) && e >= e);) e = void 0;
            for (; ++u < i;) null != (r = n[u]) && e > r && (e = r)
        } else {
            for (; ++u < i && !(null != (e = t.call(n, n[u], u)) && e >= e);) e = void 0;
            for (; ++u < i;) null != (r = t.call(n, n[u], u)) && e > r && (e = r)
        }
        return e
    }, Go.max = function(n, t) {
        var e, r, u = -1,
            i = n.length;
        if (1 === arguments.length) {
            for (; ++u < i && !(null != (e = n[u]) && e >= e);) e = void 0;
            for (; ++u < i;) null != (r = n[u]) && r > e && (e = r)
        } else {
            for (; ++u < i && !(null != (e = t.call(n, n[u], u)) && e >= e);) e = void 0;
            for (; ++u < i;) null != (r = t.call(n, n[u], u)) && r > e && (e = r)
        }
        return e
    }, Go.extent = function(n, t) {
        var e, r, u, i = -1,
            o = n.length;
        if (1 === arguments.length) {
            for (; ++i < o && !(null != (e = u = n[i]) && e >= e);) e = u = void 0;
            for (; ++i < o;) null != (r = n[i]) && (e > r && (e = r), r > u && (u = r))
        } else {
            for (; ++i < o && !(null != (e = u = t.call(n, n[i], i)) && e >= e);) e = void 0;
            for (; ++i < o;) null != (r = t.call(n, n[i], i)) && (e > r && (e = r), r > u && (u = r))
        }
        return [e, u]
    }, Go.sum = function(n, t) {
        var e, r = 0,
            u = n.length,
            i = -1;
        if (1 === arguments.length)
            for (; ++i < u;) isNaN(e = +n[i]) || (r += e);
        else
            for (; ++i < u;) isNaN(e = +t.call(n, n[i], i)) || (r += e);
        return r
    }, Go.mean = function(n, e) {
        var r, u = n.length,
            i = 0,
            o = -1,
            a = 0;
        if (1 === arguments.length)
            for (; ++o < u;) t(r = n[o]) && (i += (r - i) / ++a);
        else
            for (; ++o < u;) t(r = e.call(n, n[o], o)) && (i += (r - i) / ++a);
        return a ? i : void 0
    }, Go.quantile = function(n, t) {
        var e = (n.length - 1) * t + 1,
            r = Math.floor(e),
            u = +n[r - 1],
            i = e - r;
        return i ? u + i * (n[r] - u) : u
    }, Go.median = function(e, r) {
        return arguments.length > 1 && (e = e.map(r)), e = e.filter(t), e.length ? Go.quantile(e.sort(n), .5) : void 0
    };
    var la = e(n);
    Go.bisectLeft = la.left, Go.bisect = Go.bisectRight = la.right, Go.bisector = function(t) {
        return e(1 === t.length ? function(e, r) {
            return n(t(e), r)
        } : t)
    }, Go.shuffle = function(n) {
        for (var t, e, r = n.length; r;) e = 0 | Math.random() * r--, t = n[r], n[r] = n[e], n[e] = t;
        return n
    }, Go.permute = function(n, t) {
        for (var e = t.length, r = new Array(e); e--;) r[e] = n[t[e]];
        return r
    }, Go.pairs = function(n) {
        for (var t, e = 0, r = n.length - 1, u = n[0], i = new Array(0 > r ? 0 : r); r > e;) i[e] = [t = u, u = n[++e]];
        return i
    }, Go.zip = function() {
        if (!(u = arguments.length)) return [];
        for (var n = -1, t = Go.min(arguments, r), e = new Array(t); ++n < t;)
            for (var u, i = -1, o = e[n] = new Array(u); ++i < u;) o[i] = arguments[i][n];
        return e
    }, Go.transpose = function(n) {
        return Go.zip.apply(Go, n)
    }, Go.keys = function(n) {
        var t = [];
        for (var e in n) t.push(e);
        return t
    }, Go.values = function(n) {
        var t = [];
        for (var e in n) t.push(n[e]);
        return t
    }, Go.entries = function(n) {
        var t = [];
        for (var e in n) t.push({
            key: e,
            value: n[e]
        });
        return t
    }, Go.merge = function(n) {
        for (var t, e, r, u = n.length, i = -1, o = 0; ++i < u;) o += n[i].length;
        for (e = new Array(o); --u >= 0;)
            for (r = n[u], t = r.length; --t >= 0;) e[--o] = r[t];
        return e
    };
    var fa = Math.abs;
    Go.range = function(n, t, e) {
        if (arguments.length < 3 && (e = 1, arguments.length < 2 && (t = n, n = 0)), 1 / 0 === (t - n) / e) throw new Error("infinite range");
        var r, i = [],
            o = u(fa(e)),
            a = -1;
        if (n *= o, t *= o, e *= o, 0 > e)
            for (;
                (r = n + e * ++a) > t;) i.push(r / o);
        else
            for (;
                (r = n + e * ++a) < t;) i.push(r / o);
        return i
    }, Go.map = function(n) {
        var t = new o;
        if (n instanceof o) n.forEach(function(n, e) {
            t.set(n, e)
        });
        else
            for (var e in n) t.set(e, n[e]);
        return t
    }, i(o, {
        has: a,
        get: function(n) {
            return this[ha + n]
        },
        set: function(n, t) {
            return this[ha + n] = t
        },
        remove: c,
        keys: s,
        values: function() {
            var n = [];
            return this.forEach(function(t, e) {
                n.push(e)
            }), n
        },
        entries: function() {
            var n = [];
            return this.forEach(function(t, e) {
                n.push({
                    key: t,
                    value: e
                })
            }), n
        },
        size: l,
        empty: f,
        forEach: function(n) {
            for (var t in this) t.charCodeAt(0) === ga && n.call(this, t.substring(1), this[t])
        }
    });
    var ha = "\x00",
        ga = ha.charCodeAt(0);
    Go.nest = function() {
        function n(t, a, c) {
            if (c >= i.length) return r ? r.call(u, a) : e ? a.sort(e) : a;
            for (var s, l, f, h, g = -1, p = a.length, v = i[c++], d = new o; ++g < p;)(h = d.get(s = v(l = a[g]))) ? h.push(l) : d.set(s, [l]);
            return t ? (l = t(), f = function(e, r) {
                l.set(e, n(t, r, c))
            }) : (l = {}, f = function(e, r) {
                l[e] = n(t, r, c)
            }), d.forEach(f), l
        }

        function t(n, e) {
            if (e >= i.length) return n;
            var r = [],
                u = a[e++];
            return n.forEach(function(n, u) {
                r.push({
                    key: n,
                    values: t(u, e)
                })
            }), u ? r.sort(function(n, t) {
                return u(n.key, t.key)
            }) : r
        }
        var e, r, u = {}, i = [],
            a = [];
        return u.map = function(t, e) {
            return n(e, t, 0)
        }, u.entries = function(e) {
            return t(n(Go.map, e, 0), 0)
        }, u.key = function(n) {
            return i.push(n), u
        }, u.sortKeys = function(n) {
            return a[i.length - 1] = n, u
        }, u.sortValues = function(n) {
            return e = n, u
        }, u.rollup = function(n) {
            return r = n, u
        }, u
    }, Go.set = function(n) {
        var t = new h;
        if (n)
            for (var e = 0, r = n.length; r > e; ++e) t.add(n[e]);
        return t
    }, i(h, {
        has: a,
        add: function(n) {
            return this[ha + n] = !0, n
        },
        remove: function(n) {
            return n = ha + n, n in this && delete this[n]
        },
        values: s,
        size: l,
        empty: f,
        forEach: function(n) {
            for (var t in this) t.charCodeAt(0) === ga && n.call(this, t.substring(1))
        }
    }), Go.behavior = {}, Go.rebind = function(n, t) {
        for (var e, r = 1, u = arguments.length; ++r < u;) n[e = arguments[r]] = g(n, t, t[e]);
        return n
    };
    var pa = ["webkit", "ms", "moz", "Moz", "o", "O"];
    Go.dispatch = function() {
        for (var n = new d, t = -1, e = arguments.length; ++t < e;) n[arguments[t]] = m(n);
        return n
    }, d.prototype.on = function(n, t) {
        var e = n.indexOf("."),
            r = "";
        if (e >= 0 && (r = n.substring(e + 1), n = n.substring(0, e)), n) return arguments.length < 2 ? this[n].on(r) : this[n].on(r, t);
        if (2 === arguments.length) {
            if (null == t)
                for (n in this) this.hasOwnProperty(n) && this[n].on(r, null);
            return this
        }
    }, Go.event = null, Go.requote = function(n) {
        return n.replace(va, "\\$&")
    };
    var va = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g,
        da = {}.__proto__ ? function(n, t) {
            n.__proto__ = t
        } : function(n, t) {
            for (var e in t) n[e] = t[e]
        }, ma = function(n, t) {
            return t.querySelector(n)
        }, ya = function(n, t) {
            return t.querySelectorAll(n)
        }, xa = ta[p(ta, "matchesSelector")],
        Ma = function(n, t) {
            return xa.call(n, t)
        };
    "function" == typeof Sizzle && (ma = function(n, t) {
        return Sizzle(n, t)[0] || null
    }, ya = Sizzle, Ma = Sizzle.matchesSelector), Go.selection = function() {
        return Sa
    };
    var _a = Go.selection.prototype = [];
    _a.select = function(n) {
        var t, e, r, u, i = [];
        n = b(n);
        for (var o = -1, a = this.length; ++o < a;) {
            i.push(t = []), t.parentNode = (r = this[o]).parentNode;
            for (var c = -1, s = r.length; ++c < s;)(u = r[c]) ? (t.push(e = n.call(u, u.__data__, c, o)), e && "__data__" in u && (e.__data__ = u.__data__)) : t.push(null)
        }
        return _(i)
    }, _a.selectAll = function(n) {
        var t, e, r = [];
        n = w(n);
        for (var u = -1, i = this.length; ++u < i;)
            for (var o = this[u], a = -1, c = o.length; ++a < c;)(e = o[a]) && (r.push(t = Qo(n.call(e, e.__data__, a, u))), t.parentNode = e);
        return _(r)
    };
    var ba = {
        svg: "http://www.w3.org/2000/svg",
        xhtml: "http://www.w3.org/1999/xhtml",
        xlink: "http://www.w3.org/1999/xlink",
        xml: "http://www.w3.org/XML/1998/namespace",
        xmlns: "http://www.w3.org/2000/xmlns/"
    };
    Go.ns = {
        prefix: ba,
        qualify: function(n) {
            var t = n.indexOf(":"),
                e = n;
            return t >= 0 && (e = n.substring(0, t), n = n.substring(t + 1)), ba.hasOwnProperty(e) ? {
                space: ba[e],
                local: n
            } : n
        }
    }, _a.attr = function(n, t) {
        if (arguments.length < 2) {
            if ("string" == typeof n) {
                var e = this.node();
                return n = Go.ns.qualify(n), n.local ? e.getAttributeNS(n.space, n.local) : e.getAttribute(n)
            }
            for (t in n) this.each(S(t, n[t]));
            return this
        }
        return this.each(S(n, t))
    }, _a.classed = function(n, t) {
        if (arguments.length < 2) {
            if ("string" == typeof n) {
                var e = this.node(),
                    r = (n = N(n)).length,
                    u = -1;
                if (t = e.classList) {
                    for (; ++u < r;)
                        if (!t.contains(n[u])) return !1
                } else
                    for (t = e.getAttribute("class"); ++u < r;)
                        if (!E(n[u]).test(t)) return !1; return !0
            }
            for (t in n) this.each(A(t, n[t]));
            return this
        }
        return this.each(A(n, t))
    }, _a.style = function(n, t, e) {
        var r = arguments.length;
        if (3 > r) {
            if ("string" != typeof n) {
                2 > r && (t = "");
                for (e in n) this.each(L(e, n[e], t));
                return this
            }
            if (2 > r) return ea.getComputedStyle(this.node(), null).getPropertyValue(n);
            e = ""
        }
        return this.each(L(n, t, e))
    }, _a.property = function(n, t) {
        if (arguments.length < 2) {
            if ("string" == typeof n) return this.node()[n];
            for (t in n) this.each(T(t, n[t]));
            return this
        }
        return this.each(T(n, t))
    }, _a.text = function(n) {
        return arguments.length ? this.each("function" == typeof n ? function() {
            var t = n.apply(this, arguments);
            this.textContent = null == t ? "" : t
        } : null == n ? function() {
            this.textContent = ""
        } : function() {
            this.textContent = n
        }) : this.node().textContent
    }, _a.html = function(n) {
        return arguments.length ? this.each("function" == typeof n ? function() {
            var t = n.apply(this, arguments);
            this.innerHTML = null == t ? "" : t
        } : null == n ? function() {
            this.innerHTML = ""
        } : function() {
            this.innerHTML = n
        }) : this.node().innerHTML
    }, _a.append = function(n) {
        return n = q(n), this.select(function() {
            return this.appendChild(n.apply(this, arguments))
        })
    }, _a.insert = function(n, t) {
        return n = q(n), t = b(t), this.select(function() {
            return this.insertBefore(n.apply(this, arguments), t.apply(this, arguments) || null)
        })
    }, _a.remove = function() {
        return this.each(function() {
            var n = this.parentNode;
            n && n.removeChild(this)
        })
    }, _a.data = function(n, t) {
        function e(n, e) {
            var r, u, i, a = n.length,
                f = e.length,
                h = Math.min(a, f),
                g = new Array(f),
                p = new Array(f),
                v = new Array(a);
            if (t) {
                var d, m = new o,
                    y = new o,
                    x = [];
                for (r = -1; ++r < a;) d = t.call(u = n[r], u.__data__, r), m.has(d) ? v[r] = u : m.set(d, u), x.push(d);
                for (r = -1; ++r < f;) d = t.call(e, i = e[r], r), (u = m.get(d)) ? (g[r] = u, u.__data__ = i) : y.has(d) || (p[r] = z(i)), y.set(d, i), m.remove(d);
                for (r = -1; ++r < a;) m.has(x[r]) && (v[r] = n[r])
            } else {
                for (r = -1; ++r < h;) u = n[r], i = e[r], u ? (u.__data__ = i, g[r] = u) : p[r] = z(i);
                for (; f > r; ++r) p[r] = z(e[r]);
                for (; a > r; ++r) v[r] = n[r]
            }
            p.update = g, p.parentNode = g.parentNode = v.parentNode = n.parentNode, c.push(p), s.push(g), l.push(v)
        }
        var r, u, i = -1,
            a = this.length;
        if (!arguments.length) {
            for (n = new Array(a = (r = this[0]).length); ++i < a;)(u = r[i]) && (n[i] = u.__data__);
            return n
        }
        var c = U([]),
            s = _([]),
            l = _([]);
        if ("function" == typeof n)
            for (; ++i < a;) e(r = this[i], n.call(r, r.parentNode.__data__, i));
        else
            for (; ++i < a;) e(r = this[i], n);
        return s.enter = function() {
            return c
        }, s.exit = function() {
            return l
        }, s
    }, _a.datum = function(n) {
        return arguments.length ? this.property("__data__", n) : this.property("__data__")
    }, _a.filter = function(n) {
        var t, e, r, u = [];
        "function" != typeof n && (n = R(n));
        for (var i = 0, o = this.length; o > i; i++) {
            u.push(t = []), t.parentNode = (e = this[i]).parentNode;
            for (var a = 0, c = e.length; c > a; a++)(r = e[a]) && n.call(r, r.__data__, a, i) && t.push(r)
        }
        return _(u)
    }, _a.order = function() {
        for (var n = -1, t = this.length; ++n < t;)
            for (var e, r = this[n], u = r.length - 1, i = r[u]; --u >= 0;)(e = r[u]) && (i && i !== e.nextSibling && i.parentNode.insertBefore(e, i), i = e);
        return this
    }, _a.sort = function(n) {
        n = D.apply(this, arguments);
        for (var t = -1, e = this.length; ++t < e;) this[t].sort(n);
        return this.order()
    }, _a.each = function(n) {
        return P(this, function(t, e, r) {
            n.call(t, t.__data__, e, r)
        })
    }, _a.call = function(n) {
        var t = Qo(arguments);
        return n.apply(t[0] = this, t), this
    }, _a.empty = function() {
        return !this.node()
    }, _a.node = function() {
        for (var n = 0, t = this.length; t > n; n++)
            for (var e = this[n], r = 0, u = e.length; u > r; r++) {
                var i = e[r];
                if (i) return i
            }
        return null
    }, _a.size = function() {
        var n = 0;
        return this.each(function() {
            ++n
        }), n
    };
    var wa = [];
    Go.selection.enter = U, Go.selection.enter.prototype = wa, wa.append = _a.append, wa.empty = _a.empty, wa.node = _a.node, wa.call = _a.call, wa.size = _a.size, wa.select = function(n) {
        for (var t, e, r, u, i, o = [], a = -1, c = this.length; ++a < c;) {
            r = (u = this[a]).update, o.push(t = []), t.parentNode = u.parentNode;
            for (var s = -1, l = u.length; ++s < l;)(i = u[s]) ? (t.push(r[s] = e = n.call(u.parentNode, i.__data__, s, a)), e.__data__ = i.__data__) : t.push(null)
        }
        return _(o)
    }, wa.insert = function(n, t) {
        return arguments.length < 2 && (t = j(this)), _a.insert.call(this, n, t)
    }, _a.transition = function() {
        for (var n, t, e = Ls || ++Ds, r = [], u = Ts || {
                time: Date.now(),
                ease: wu,
                delay: 0,
                duration: 250
            }, i = -1, o = this.length; ++i < o;) {
            r.push(n = []);
            for (var a = this[i], c = -1, s = a.length; ++c < s;)(t = a[c]) && Yo(t, c, e, u), n.push(t)
        }
        return Fo(r, e)
    }, _a.interrupt = function() {
        return this.each(H)
    }, Go.select = function(n) {
        var t = ["string" == typeof n ? ma(n, na) : n];
        return t.parentNode = ta, _([t])
    }, Go.selectAll = function(n) {
        var t = Qo("string" == typeof n ? ya(n, na) : n);
        return t.parentNode = ta, _([t])
    };
    var Sa = Go.select(ta);
    _a.on = function(n, t, e) {
        var r = arguments.length;
        if (3 > r) {
            if ("string" != typeof n) {
                2 > r && (t = !1);
                for (e in n) this.each(F(e, n[e], t));
                return this
            }
            if (2 > r) return (r = this.node()["__on" + n]) && r._;
            e = !1
        }
        return this.each(F(n, t, e))
    };
    var ka = Go.map({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    });
    ka.forEach(function(n) {
        "on" + n in na && ka.remove(n)
    });
    var Ea = "onselectstart" in na ? null : p(ta.style, "userSelect"),
        Na = 0;
    Go.mouse = function(n) {
        return Z(n, x())
    }, Go.touches = function(n, t) {
        return arguments.length < 2 && (t = x().touches), t ? Qo(t).map(function(t) {
            var e = Z(n, t);
            return e.identifier = t.identifier, e
        }) : []
    }, Go.behavior.drag = function() {
        function n() {
            this.on("mousedown.drag", u).on("touchstart.drag", i)
        }

        function t(n, t, u, i, o) {
            return function() {
                function a() {
                    var n, e, r = t(h, v);
                    r && (n = r[0] - x[0], e = r[1] - x[1], p |= n | e, x = r, g({
                        type: "drag",
                        x: r[0] + s[0],
                        y: r[1] + s[1],
                        dx: n,
                        dy: e
                    }))
                }

                function c() {
                    t(h, v) && (m.on(i + d, null).on(o + d, null), y(p && Go.event.target === f), g({
                        type: "dragend"
                    }))
                }
                var s, l = this,
                    f = Go.event.target,
                    h = l.parentNode,
                    g = e.of(l, arguments),
                    p = 0,
                    v = n(),
                    d = ".drag" + (null == v ? "" : "-" + v),
                    m = Go.select(u()).on(i + d, a).on(o + d, c),
                    y = Y(),
                    x = t(h, v);
                r ? (s = r.apply(l, arguments), s = [s.x - x[0], s.y - x[1]]) : s = [0, 0], g({
                    type: "dragstart"
                })
            }
        }
        var e = M(n, "drag", "dragstart", "dragend"),
            r = null,
            u = t(v, Go.mouse, X, "mousemove", "mouseup"),
            i = t(V, Go.touch, $, "touchmove", "touchend");
        return n.origin = function(t) {
            return arguments.length ? (r = t, n) : r
        }, Go.rebind(n, e, "on")
    };
    var Aa = Math.PI,
        Ca = 2 * Aa,
        La = Aa / 2,
        Ta = 1e-6,
        qa = Ta * Ta,
        za = Aa / 180,
        Ra = 180 / Aa,
        Da = Math.SQRT2,
        Pa = 2,
        Ua = 4;
    Go.interpolateZoom = function(n, t) {
        function e(n) {
            var t = n * y;
            if (m) {
                var e = Q(v),
                    o = i / (Pa * h) * (e * nt(Da * t + v) - K(v));
                return [r + o * s, u + o * l, i * e / Q(Da * t + v)]
            }
            return [r + n * s, u + n * l, i * Math.exp(Da * t)]
        }
        var r = n[0],
            u = n[1],
            i = n[2],
            o = t[0],
            a = t[1],
            c = t[2],
            s = o - r,
            l = a - u,
            f = s * s + l * l,
            h = Math.sqrt(f),
            g = (c * c - i * i + Ua * f) / (2 * i * Pa * h),
            p = (c * c - i * i - Ua * f) / (2 * c * Pa * h),
            v = Math.log(Math.sqrt(g * g + 1) - g),
            d = Math.log(Math.sqrt(p * p + 1) - p),
            m = d - v,
            y = (m || Math.log(c / i)) / Da;
        return e.duration = 1e3 * y, e
    }, Go.behavior.zoom = function() {
        function n(n) {
            n.on(N, s).on(Fa + ".zoom", f).on(A, h).on("dblclick.zoom", g).on(L, l)
        }

        function t(n) {
            return [(n[0] - S.x) / S.k, (n[1] - S.y) / S.k]
        }

        function e(n) {
            return [n[0] * S.k + S.x, n[1] * S.k + S.y]
        }

        function r(n) {
            S.k = Math.max(E[0], Math.min(E[1], n))
        }

        function u(n, t) {
            t = e(t), S.x += n[0] - t[0], S.y += n[1] - t[1]
        }

        function i() {
            _ && _.domain(x.range().map(function(n) {
                return (n - S.x) / S.k
            }).map(x.invert)), w && w.domain(b.range().map(function(n) {
                return (n - S.y) / S.k
            }).map(b.invert))
        }

        function o(n) {
            n({
                type: "zoomstart"
            })
        }

        function a(n) {
            i(), n({
                type: "zoom",
                scale: S.k,
                translate: [S.x, S.y]
            })
        }

        function c(n) {
            n({
                type: "zoomend"
            })
        }

        function s() {
            function n() {
                l = 1, u(Go.mouse(r), g), a(s)
            }

            function e() {
                f.on(A, ea === r ? h : null).on(C, null), p(l && Go.event.target === i), c(s)
            }
            var r = this,
                i = Go.event.target,
                s = T.of(r, arguments),
                l = 0,
                f = Go.select(ea).on(A, n).on(C, e),
                g = t(Go.mouse(r)),
                p = Y();
            H.call(r), o(s)
        }

        function l() {
            function n() {
                var n = Go.touches(g);
                return h = S.k, n.forEach(function(n) {
                    n.identifier in v && (v[n.identifier] = t(n))
                }), n
            }

            function e() {
                for (var t = Go.event.changedTouches, e = 0, i = t.length; i > e; ++e) v[t[e].identifier] = null;
                var o = n(),
                    c = Date.now();
                if (1 === o.length) {
                    if (500 > c - m) {
                        var s = o[0],
                            l = v[s.identifier];
                        r(2 * S.k), u(s, l), y(), a(p)
                    }
                    m = c
                } else if (o.length > 1) {
                    var s = o[0],
                        f = o[1],
                        h = s[0] - f[0],
                        g = s[1] - f[1];
                    d = h * h + g * g
                }
            }

            function i() {
                for (var n, t, e, i, o = Go.touches(g), c = 0, s = o.length; s > c; ++c, i = null)
                    if (e = o[c], i = v[e.identifier]) {
                        if (t) break;
                        n = e, t = i
                    }
                if (i) {
                    var l = (l = e[0] - n[0]) * l + (l = e[1] - n[1]) * l,
                        f = d && Math.sqrt(l / d);
                    n = [(n[0] + e[0]) / 2, (n[1] + e[1]) / 2], t = [(t[0] + i[0]) / 2, (t[1] + i[1]) / 2], r(f * h)
                }
                m = null, u(n, t), a(p)
            }

            function f() {
                if (Go.event.touches.length) {
                    for (var t = Go.event.changedTouches, e = 0, r = t.length; r > e; ++e) delete v[t[e].identifier];
                    for (var u in v) return void n()
                }
                b.on(x, null), w.on(N, s).on(L, l), k(), c(p)
            }
            var h, g = this,
                p = T.of(g, arguments),
                v = {}, d = 0,
                x = ".zoom-" + Go.event.changedTouches[0].identifier,
                M = "touchmove" + x,
                _ = "touchend" + x,
                b = Go.select(Go.event.target).on(M, i).on(_, f),
                w = Go.select(g).on(N, null).on(L, e),
                k = Y();
            H.call(g), e(), o(p)
        }

        function f() {
            var n = T.of(this, arguments);
            d ? clearTimeout(d) : (H.call(this), o(n)), d = setTimeout(function() {
                d = null, c(n)
            }, 50), y();
            var e = v || Go.mouse(this);
            p || (p = t(e)), r(Math.pow(2, .002 * ja()) * S.k), u(e, p), a(n)
        }

        function h() {
            p = null
        }

        function g() {
            var n = T.of(this, arguments),
                e = Go.mouse(this),
                i = t(e),
                s = Math.log(S.k) / Math.LN2;
            o(n), r(Math.pow(2, Go.event.shiftKey ? Math.ceil(s) - 1 : Math.floor(s) + 1)), u(e, i), a(n), c(n)
        }
        var p, v, d, m, x, _, b, w, S = {
                x: 0,
                y: 0,
                k: 1
            }, k = [960, 500],
            E = Ha,
            N = "mousedown.zoom",
            A = "mousemove.zoom",
            C = "mouseup.zoom",
            L = "touchstart.zoom",
            T = M(n, "zoomstart", "zoom", "zoomend");
        return n.event = function(n) {
            n.each(function() {
                var n = T.of(this, arguments),
                    t = S;
                Ls ? Go.select(this).transition().each("start.zoom", function() {
                    S = this.__chart__ || {
                        x: 0,
                        y: 0,
                        k: 1
                    }, o(n)
                }).tween("zoom:zoom", function() {
                    var e = k[0],
                        r = k[1],
                        u = e / 2,
                        i = r / 2,
                        o = Go.interpolateZoom([(u - S.x) / S.k, (i - S.y) / S.k, e / S.k], [(u - t.x) / t.k, (i - t.y) / t.k, e / t.k]);
                    return function(t) {
                        var r = o(t),
                            c = e / r[2];
                        this.__chart__ = S = {
                            x: u - r[0] * c,
                            y: i - r[1] * c,
                            k: c
                        }, a(n)
                    }
                }).each("end.zoom", function() {
                    c(n)
                }) : (this.__chart__ = S, o(n), a(n), c(n))
            })
        }, n.translate = function(t) {
            return arguments.length ? (S = {
                x: +t[0],
                y: +t[1],
                k: S.k
            }, i(), n) : [S.x, S.y]
        }, n.scale = function(t) {
            return arguments.length ? (S = {
                x: S.x,
                y: S.y,
                k: +t
            }, i(), n) : S.k
        }, n.scaleExtent = function(t) {
            return arguments.length ? (E = null == t ? Ha : [+t[0], +t[1]], n) : E
        }, n.center = function(t) {
            return arguments.length ? (v = t && [+t[0], +t[1]], n) : v
        }, n.size = function(t) {
            return arguments.length ? (k = t && [+t[0], +t[1]], n) : k
        }, n.x = function(t) {
            return arguments.length ? (_ = t, x = t.copy(), S = {
                x: 0,
                y: 0,
                k: 1
            }, n) : _
        }, n.y = function(t) {
            return arguments.length ? (w = t, b = t.copy(), S = {
                x: 0,
                y: 0,
                k: 1
            }, n) : w
        }, Go.rebind(n, T, "on")
    };
    var ja, Ha = [0, 1 / 0],
        Fa = "onwheel" in na ? (ja = function() {
            return -Go.event.deltaY * (Go.event.deltaMode ? 120 : 1)
        }, "wheel") : "onmousewheel" in na ? (ja = function() {
            return Go.event.wheelDelta
        }, "mousewheel") : (ja = function() {
            return -Go.event.detail
        }, "MozMousePixelScroll");
    et.prototype.toString = function() {
        return this.rgb() + ""
    }, Go.hsl = function(n, t, e) {
        return 1 === arguments.length ? n instanceof ut ? rt(n.h, n.s, n.l) : _t("" + n, bt, rt) : rt(+n, +t, +e)
    };
    var Oa = ut.prototype = new et;
    Oa.brighter = function(n) {
        return n = Math.pow(.7, arguments.length ? n : 1), rt(this.h, this.s, this.l / n)
    }, Oa.darker = function(n) {
        return n = Math.pow(.7, arguments.length ? n : 1), rt(this.h, this.s, n * this.l)
    }, Oa.rgb = function() {
        return it(this.h, this.s, this.l)
    }, Go.hcl = function(n, t, e) {
        return 1 === arguments.length ? n instanceof at ? ot(n.h, n.c, n.l) : n instanceof lt ? ht(n.l, n.a, n.b) : ht((n = wt((n = Go.rgb(n)).r, n.g, n.b)).l, n.a, n.b) : ot(+n, +t, +e)
    };
    var Ia = at.prototype = new et;
    Ia.brighter = function(n) {
        return ot(this.h, this.c, Math.min(100, this.l + Ya * (arguments.length ? n : 1)))
    }, Ia.darker = function(n) {
        return ot(this.h, this.c, Math.max(0, this.l - Ya * (arguments.length ? n : 1)))
    }, Ia.rgb = function() {
        return ct(this.h, this.c, this.l).rgb()
    }, Go.lab = function(n, t, e) {
        return 1 === arguments.length ? n instanceof lt ? st(n.l, n.a, n.b) : n instanceof at ? ct(n.l, n.c, n.h) : wt((n = Go.rgb(n)).r, n.g, n.b) : st(+n, +t, +e)
    };
    var Ya = 18,
        Za = .95047,
        Va = 1,
        $a = 1.08883,
        Xa = lt.prototype = new et;
    Xa.brighter = function(n) {
        return st(Math.min(100, this.l + Ya * (arguments.length ? n : 1)), this.a, this.b)
    }, Xa.darker = function(n) {
        return st(Math.max(0, this.l - Ya * (arguments.length ? n : 1)), this.a, this.b)
    }, Xa.rgb = function() {
        return ft(this.l, this.a, this.b)
    }, Go.rgb = function(n, t, e) {
        return 1 === arguments.length ? n instanceof xt ? yt(n.r, n.g, n.b) : _t("" + n, yt, it) : yt(~~n, ~~t, ~~e)
    };
    var Ba = xt.prototype = new et;
    Ba.brighter = function(n) {
        n = Math.pow(.7, arguments.length ? n : 1);
        var t = this.r,
            e = this.g,
            r = this.b,
            u = 30;
        return t || e || r ? (t && u > t && (t = u), e && u > e && (e = u), r && u > r && (r = u), yt(Math.min(255, ~~ (t / n)), Math.min(255, ~~ (e / n)), Math.min(255, ~~ (r / n)))) : yt(u, u, u)
    }, Ba.darker = function(n) {
        return n = Math.pow(.7, arguments.length ? n : 1), yt(~~(n * this.r), ~~ (n * this.g), ~~ (n * this.b))
    }, Ba.hsl = function() {
        return bt(this.r, this.g, this.b)
    }, Ba.toString = function() {
        return "#" + Mt(this.r) + Mt(this.g) + Mt(this.b)
    };
    var Ja = Go.map({
        aliceblue: 15792383,
        antiquewhite: 16444375,
        aqua: 65535,
        aquamarine: 8388564,
        azure: 15794175,
        beige: 16119260,
        bisque: 16770244,
        black: 0,
        blanchedalmond: 16772045,
        blue: 255,
        blueviolet: 9055202,
        brown: 10824234,
        burlywood: 14596231,
        cadetblue: 6266528,
        chartreuse: 8388352,
        chocolate: 13789470,
        coral: 16744272,
        cornflowerblue: 6591981,
        cornsilk: 16775388,
        crimson: 14423100,
        cyan: 65535,
        darkblue: 139,
        darkcyan: 35723,
        darkgoldenrod: 12092939,
        darkgray: 11119017,
        darkgreen: 25600,
        darkgrey: 11119017,
        darkkhaki: 12433259,
        darkmagenta: 9109643,
        darkolivegreen: 5597999,
        darkorange: 16747520,
        darkorchid: 10040012,
        darkred: 9109504,
        darksalmon: 15308410,
        darkseagreen: 9419919,
        darkslateblue: 4734347,
        darkslategray: 3100495,
        darkslategrey: 3100495,
        darkturquoise: 52945,
        darkviolet: 9699539,
        deeppink: 16716947,
        deepskyblue: 49151,
        dimgray: 6908265,
        dimgrey: 6908265,
        dodgerblue: 2003199,
        firebrick: 11674146,
        floralwhite: 16775920,
        forestgreen: 2263842,
        fuchsia: 16711935,
        gainsboro: 14474460,
        ghostwhite: 16316671,
        gold: 16766720,
        goldenrod: 14329120,
        gray: 8421504,
        green: 32768,
        greenyellow: 11403055,
        grey: 8421504,
        honeydew: 15794160,
        hotpink: 16738740,
        indianred: 13458524,
        indigo: 4915330,
        ivory: 16777200,
        khaki: 15787660,
        lavender: 15132410,
        lavenderblush: 16773365,
        lawngreen: 8190976,
        lemonchiffon: 16775885,
        lightblue: 11393254,
        lightcoral: 15761536,
        lightcyan: 14745599,
        lightgoldenrodyellow: 16448210,
        lightgray: 13882323,
        lightgreen: 9498256,
        lightgrey: 13882323,
        lightpink: 16758465,
        lightsalmon: 16752762,
        lightseagreen: 2142890,
        lightskyblue: 8900346,
        lightslategray: 7833753,
        lightslategrey: 7833753,
        lightsteelblue: 11584734,
        lightyellow: 16777184,
        lime: 65280,
        limegreen: 3329330,
        linen: 16445670,
        magenta: 16711935,
        maroon: 8388608,
        mediumaquamarine: 6737322,
        mediumblue: 205,
        mediumorchid: 12211667,
        mediumpurple: 9662683,
        mediumseagreen: 3978097,
        mediumslateblue: 8087790,
        mediumspringgreen: 64154,
        mediumturquoise: 4772300,
        mediumvioletred: 13047173,
        midnightblue: 1644912,
        mintcream: 16121850,
        mistyrose: 16770273,
        moccasin: 16770229,
        navajowhite: 16768685,
        navy: 128,
        oldlace: 16643558,
        olive: 8421376,
        olivedrab: 7048739,
        orange: 16753920,
        orangered: 16729344,
        orchid: 14315734,
        palegoldenrod: 15657130,
        palegreen: 10025880,
        paleturquoise: 11529966,
        palevioletred: 14381203,
        papayawhip: 16773077,
        peachpuff: 16767673,
        peru: 13468991,
        pink: 16761035,
        plum: 14524637,
        powderblue: 11591910,
        purple: 8388736,
        red: 16711680,
        rosybrown: 12357519,
        royalblue: 4286945,
        saddlebrown: 9127187,
        salmon: 16416882,
        sandybrown: 16032864,
        seagreen: 3050327,
        seashell: 16774638,
        sienna: 10506797,
        silver: 12632256,
        skyblue: 8900331,
        slateblue: 6970061,
        slategray: 7372944,
        slategrey: 7372944,
        snow: 16775930,
        springgreen: 65407,
        steelblue: 4620980,
        tan: 13808780,
        teal: 32896,
        thistle: 14204888,
        tomato: 16737095,
        turquoise: 4251856,
        violet: 15631086,
        wheat: 16113331,
        white: 16777215,
        whitesmoke: 16119285,
        yellow: 16776960,
        yellowgreen: 10145074
    });
    Ja.forEach(function(n, t) {
        Ja.set(n, dt(t))
    }), Go.functor = Et, Go.xhr = At(Nt), Go.dsv = function(n, t) {
        function e(n, e, i) {
            arguments.length < 3 && (i = e, e = null);
            var o = Ct(n, t, null == e ? r : u(e), i);
            return o.row = function(n) {
                return arguments.length ? o.response(null == (e = n) ? r : u(n)) : e
            }, o
        }

        function r(n) {
            return e.parse(n.responseText)
        }

        function u(n) {
            return function(t) {
                return e.parse(t.responseText, n)
            }
        }

        function i(t) {
            return t.map(o).join(n)
        }

        function o(n) {
            return a.test(n) ? '"' + n.replace(/\"/g, '""') + '"' : n
        }
        var a = new RegExp('["' + n + "\n]"),
            c = n.charCodeAt(0);
        return e.parse = function(n, t) {
            var r;
            return e.parseRows(n, function(n, e) {
                if (r) return r(n, e - 1);
                var u = new Function("d", "return {" + n.map(function(n, t) {
                    return JSON.stringify(n) + ": d[" + t + "]"
                }).join(",") + "}");
                r = t ? function(n, e) {
                    return t(u(n), e)
                } : u
            })
        }, e.parseRows = function(n, t) {
            function e() {
                if (l >= s) return o;
                if (u) return u = !1, i;
                var t = l;
                if (34 === n.charCodeAt(t)) {
                    for (var e = t; e++ < s;)
                        if (34 === n.charCodeAt(e)) {
                            if (34 !== n.charCodeAt(e + 1)) break;
                            ++e
                        }
                    l = e + 2;
                    var r = n.charCodeAt(e + 1);
                    return 13 === r ? (u = !0, 10 === n.charCodeAt(e + 2) && ++l) : 10 === r && (u = !0), n.substring(t + 1, e).replace(/""/g, '"')
                }
                for (; s > l;) {
                    var r = n.charCodeAt(l++),
                        a = 1;
                    if (10 === r) u = !0;
                    else if (13 === r) u = !0, 10 === n.charCodeAt(l) && (++l, ++a);
                    else if (r !== c) continue;
                    return n.substring(t, l - a)
                }
                return n.substring(t)
            }
            for (var r, u, i = {}, o = {}, a = [], s = n.length, l = 0, f = 0;
                (r = e()) !== o;) {
                for (var h = []; r !== i && r !== o;) h.push(r), r = e();
                (!t || (h = t(h, f++))) && a.push(h)
            }
            return a
        }, e.format = function(t) {
            if (Array.isArray(t[0])) return e.formatRows(t);
            var r = new h,
                u = [];
            return t.forEach(function(n) {
                for (var t in n) r.has(t) || u.push(r.add(t))
            }), [u.map(o).join(n)].concat(t.map(function(t) {
                return u.map(function(n) {
                    return o(t[n])
                }).join(n)
            })).join("\n")
        }, e.formatRows = function(n) {
            return n.map(i).join("\n")
        }, e
    }, Go.csv = Go.dsv(",", "text/csv"), Go.tsv = Go.dsv("	", "text/tab-separated-values"), Go.touch = function(n, t, e) {
        if (arguments.length < 3 && (e = t, t = x().changedTouches), t)
            for (var r, u = 0, i = t.length; i > u; ++u)
                if ((r = t[u]).identifier === e) return Z(n, r)
    };
    var Wa, Ga, Ka, Qa, nc, tc = ea[p(ea, "requestAnimationFrame")] || function(n) {
            setTimeout(n, 17)
        };
    Go.timer = function(n, t, e) {
        var r = arguments.length;
        2 > r && (t = 0), 3 > r && (e = Date.now());
        var u = e + t,
            i = {
                c: n,
                t: u,
                f: !1,
                n: null
            };
        Ga ? Ga.n = i : Wa = i, Ga = i, Ka || (Qa = clearTimeout(Qa), Ka = 1, tc(Tt))
    }, Go.timer.flush = function() {
        qt(), zt()
    }, Go.round = function(n, t) {
        return t ? Math.round(n * (t = Math.pow(10, t))) / t : Math.round(n)
    };
    var ec = ["y", "z", "a", "f", "p", "n", "\xb5", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"].map(Dt);
    Go.formatPrefix = function(n, t) {
        var e = 0;
        return n && (0 > n && (n *= -1), t && (n = Go.round(n, Rt(n, t))), e = 1 + Math.floor(1e-12 + Math.log(n) / Math.LN10), e = Math.max(-24, Math.min(24, 3 * Math.floor((e - 1) / 3)))), ec[8 + e / 3]
    };
    var rc = /(?:([^{])?([<>=^]))?([+\- ])?([$#])?(0)?(\d+)?(,)?(\.-?\d+)?([a-z%])?/i,
        uc = Go.map({
            b: function(n) {
                return n.toString(2)
            },
            c: function(n) {
                return String.fromCharCode(n)
            },
            o: function(n) {
                return n.toString(8)
            },
            x: function(n) {
                return n.toString(16)
            },
            X: function(n) {
                return n.toString(16).toUpperCase()
            },
            g: function(n, t) {
                return n.toPrecision(t)
            },
            e: function(n, t) {
                return n.toExponential(t)
            },
            f: function(n, t) {
                return n.toFixed(t)
            },
            r: function(n, t) {
                return (n = Go.round(n, Rt(n, t))).toFixed(Math.max(0, Math.min(20, Rt(n * (1 + 1e-15), t))))
            }
        }),
        ic = Go.time = {}, oc = Date;
    jt.prototype = {
        getDate: function() {
            return this._.getUTCDate()
        },
        getDay: function() {
            return this._.getUTCDay()
        },
        getFullYear: function() {
            return this._.getUTCFullYear()
        },
        getHours: function() {
            return this._.getUTCHours()
        },
        getMilliseconds: function() {
            return this._.getUTCMilliseconds()
        },
        getMinutes: function() {
            return this._.getUTCMinutes()
        },
        getMonth: function() {
            return this._.getUTCMonth()
        },
        getSeconds: function() {
            return this._.getUTCSeconds()
        },
        getTime: function() {
            return this._.getTime()
        },
        getTimezoneOffset: function() {
            return 0
        },
        valueOf: function() {
            return this._.valueOf()
        },
        setDate: function() {
            ac.setUTCDate.apply(this._, arguments)
        },
        setDay: function() {
            ac.setUTCDay.apply(this._, arguments)
        },
        setFullYear: function() {
            ac.setUTCFullYear.apply(this._, arguments)
        },
        setHours: function() {
            ac.setUTCHours.apply(this._, arguments)
        },
        setMilliseconds: function() {
            ac.setUTCMilliseconds.apply(this._, arguments)
        },
        setMinutes: function() {
            ac.setUTCMinutes.apply(this._, arguments)
        },
        setMonth: function() {
            ac.setUTCMonth.apply(this._, arguments)
        },
        setSeconds: function() {
            ac.setUTCSeconds.apply(this._, arguments)
        },
        setTime: function() {
            ac.setTime.apply(this._, arguments)
        }
    };
    var ac = Date.prototype;
    ic.year = Ht(function(n) {
        return n = ic.day(n), n.setMonth(0, 1), n
    }, function(n, t) {
        n.setFullYear(n.getFullYear() + t)
    }, function(n) {
        return n.getFullYear()
    }), ic.years = ic.year.range, ic.years.utc = ic.year.utc.range, ic.day = Ht(function(n) {
        var t = new oc(2e3, 0);
        return t.setFullYear(n.getFullYear(), n.getMonth(), n.getDate()), t
    }, function(n, t) {
        n.setDate(n.getDate() + t)
    }, function(n) {
        return n.getDate() - 1
    }), ic.days = ic.day.range, ic.days.utc = ic.day.utc.range, ic.dayOfYear = function(n) {
        var t = ic.year(n);
        return Math.floor((n - t - 6e4 * (n.getTimezoneOffset() - t.getTimezoneOffset())) / 864e5)
    }, ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"].forEach(function(n, t) {
        t = 7 - t;
        var e = ic[n] = Ht(function(n) {
            return (n = ic.day(n)).setDate(n.getDate() - (n.getDay() + t) % 7), n
        }, function(n, t) {
            n.setDate(n.getDate() + 7 * Math.floor(t))
        }, function(n) {
            var e = ic.year(n).getDay();
            return Math.floor((ic.dayOfYear(n) + (e + t) % 7) / 7) - (e !== t)
        });
        ic[n + "s"] = e.range, ic[n + "s"].utc = e.utc.range, ic[n + "OfYear"] = function(n) {
            var e = ic.year(n).getDay();
            return Math.floor((ic.dayOfYear(n) + (e + t) % 7) / 7)
        }
    }), ic.week = ic.sunday, ic.weeks = ic.sunday.range, ic.weeks.utc = ic.sunday.utc.range, ic.weekOfYear = ic.sundayOfYear;
    var cc = {
        "-": "",
        _: " ",
        0: "0"
    }, sc = /^\s*\d+/,
        lc = /^%/;
    Go.locale = function(n) {
        return {
            numberFormat: Pt(n),
            timeFormat: Ot(n)
        }
    };
    var fc = Go.locale({
        decimal: ".",
        thousands: ",",
        grouping: [3],
        currency: ["$", ""],
        dateTime: "%a %b %e %X %Y",
        date: "%m/%d/%Y",
        time: "%H:%M:%S",
        periods: ["AM", "PM"],
        days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    });
    Go.format = fc.numberFormat, Go.geo = {}, ce.prototype = {
        s: 0,
        t: 0,
        add: function(n) {
            se(n, this.t, hc), se(hc.s, this.s, this), this.s ? this.t += hc.t : this.s = hc.t
        },
        reset: function() {
            this.s = this.t = 0
        },
        valueOf: function() {
            return this.s
        }
    };
    var hc = new ce;
    Go.geo.stream = function(n, t) {
        n && gc.hasOwnProperty(n.type) ? gc[n.type](n, t) : le(n, t)
    };
    var gc = {
        Feature: function(n, t) {
            le(n.geometry, t)
        },
        FeatureCollection: function(n, t) {
            for (var e = n.features, r = -1, u = e.length; ++r < u;) le(e[r].geometry, t)
        }
    }, pc = {
            Sphere: function(n, t) {
                t.sphere()
            },
            Point: function(n, t) {
                n = n.coordinates, t.point(n[0], n[1], n[2])
            },
            MultiPoint: function(n, t) {
                for (var e = n.coordinates, r = -1, u = e.length; ++r < u;) n = e[r], t.point(n[0], n[1], n[2])
            },
            LineString: function(n, t) {
                fe(n.coordinates, t, 0)
            },
            MultiLineString: function(n, t) {
                for (var e = n.coordinates, r = -1, u = e.length; ++r < u;) fe(e[r], t, 0)
            },
            Polygon: function(n, t) {
                he(n.coordinates, t)
            },
            MultiPolygon: function(n, t) {
                for (var e = n.coordinates, r = -1, u = e.length; ++r < u;) he(e[r], t)
            },
            GeometryCollection: function(n, t) {
                for (var e = n.geometries, r = -1, u = e.length; ++r < u;) le(e[r], t)
            }
        };
    Go.geo.area = function(n) {
        return vc = 0, Go.geo.stream(n, mc), vc
    };
    var vc, dc = new ce,
        mc = {
            sphere: function() {
                vc += 4 * Aa
            },
            point: v,
            lineStart: v,
            lineEnd: v,
            polygonStart: function() {
                dc.reset(), mc.lineStart = ge
            },
            polygonEnd: function() {
                var n = 2 * dc;
                vc += 0 > n ? 4 * Aa + n : n, mc.lineStart = mc.lineEnd = mc.point = v
            }
        };
    Go.geo.bounds = function() {
        function n(n, t) {
            x.push(M = [l = n, h = n]), f > t && (f = t), t > g && (g = t)
        }

        function t(t, e) {
            var r = pe([t * za, e * za]);
            if (m) {
                var u = de(m, r),
                    i = [u[1], -u[0], 0],
                    o = de(i, u);
                xe(o), o = Me(o);
                var c = t - p,
                    s = c > 0 ? 1 : -1,
                    v = o[0] * Ra * s,
                    d = fa(c) > 180;
                if (d ^ (v > s * p && s * t > v)) {
                    var y = o[1] * Ra;
                    y > g && (g = y)
                } else if (v = (v + 360) % 360 - 180, d ^ (v > s * p && s * t > v)) {
                    var y = -o[1] * Ra;
                    f > y && (f = y)
                } else f > e && (f = e), e > g && (g = e);
                d ? p > t ? a(l, t) > a(l, h) && (h = t) : a(t, h) > a(l, h) && (l = t) : h >= l ? (l > t && (l = t), t > h && (h = t)) : t > p ? a(l, t) > a(l, h) && (h = t) : a(t, h) > a(l, h) && (l = t)
            } else n(t, e);
            m = r, p = t
        }

        function e() {
            _.point = t
        }

        function r() {
            M[0] = l, M[1] = h, _.point = n, m = null
        }

        function u(n, e) {
            if (m) {
                var r = n - p;
                y += fa(r) > 180 ? r + (r > 0 ? 360 : -360) : r
            } else v = n, d = e;
            mc.point(n, e), t(n, e)
        }

        function i() {
            mc.lineStart()
        }

        function o() {
            u(v, d), mc.lineEnd(), fa(y) > Ta && (l = -(h = 180)), M[0] = l, M[1] = h, m = null
        }

        function a(n, t) {
            return (t -= n) < 0 ? t + 360 : t
        }

        function c(n, t) {
            return n[0] - t[0]
        }

        function s(n, t) {
            return t[0] <= t[1] ? t[0] <= n && n <= t[1] : n < t[0] || t[1] < n
        }
        var l, f, h, g, p, v, d, m, y, x, M, _ = {
                point: n,
                lineStart: e,
                lineEnd: r,
                polygonStart: function() {
                    _.point = u, _.lineStart = i, _.lineEnd = o, y = 0, mc.polygonStart()
                },
                polygonEnd: function() {
                    mc.polygonEnd(), _.point = n, _.lineStart = e, _.lineEnd = r, 0 > dc ? (l = -(h = 180), f = -(g = 90)) : y > Ta ? g = 90 : -Ta > y && (f = -90), M[0] = l, M[1] = h
                }
            };
        return function(n) {
            g = h = -(l = f = 1 / 0), x = [], Go.geo.stream(n, _);
            var t = x.length;
            if (t) {
                x.sort(c);
                for (var e, r = 1, u = x[0], i = [u]; t > r; ++r) e = x[r], s(e[0], u) || s(e[1], u) ? (a(u[0], e[1]) > a(u[0], u[1]) && (u[1] = e[1]), a(e[0], u[1]) > a(u[0], u[1]) && (u[0] = e[0])) : i.push(u = e);
                for (var o, e, p = -1 / 0, t = i.length - 1, r = 0, u = i[t]; t >= r; u = e, ++r) e = i[r], (o = a(u[1], e[0])) > p && (p = o, l = e[0], h = u[1])
            }
            return x = M = null, 1 / 0 === l || 1 / 0 === f ? [
                [0 / 0, 0 / 0],
                [0 / 0, 0 / 0]
            ] : [
                [l, f],
                [h, g]
            ]
        }
    }(), Go.geo.centroid = function(n) {
        yc = xc = Mc = _c = bc = wc = Sc = kc = Ec = Nc = Ac = 0, Go.geo.stream(n, Cc);
        var t = Ec,
            e = Nc,
            r = Ac,
            u = t * t + e * e + r * r;
        return qa > u && (t = wc, e = Sc, r = kc, Ta > xc && (t = Mc, e = _c, r = bc), u = t * t + e * e + r * r, qa > u) ? [0 / 0, 0 / 0] : [Math.atan2(e, t) * Ra, G(r / Math.sqrt(u)) * Ra]
    };
    var yc, xc, Mc, _c, bc, wc, Sc, kc, Ec, Nc, Ac, Cc = {
            sphere: v,
            point: be,
            lineStart: Se,
            lineEnd: ke,
            polygonStart: function() {
                Cc.lineStart = Ee
            },
            polygonEnd: function() {
                Cc.lineStart = Se
            }
        }, Lc = Te(Ne, Pe, je, [-Aa, -Aa / 2]),
        Tc = 1e9;
    Go.geo.clipExtent = function() {
        var n, t, e, r, u, i, o = {
                stream: function(n) {
                    return u && (u.valid = !1), u = i(n), u.valid = !0, u
                },
                extent: function(a) {
                    return arguments.length ? (i = Oe(n = +a[0][0], t = +a[0][1], e = +a[1][0], r = +a[1][1]), u && (u.valid = !1, u = null), o) : [
                        [n, t],
                        [e, r]
                    ]
                }
            };
        return o.extent([
            [0, 0],
            [960, 500]
        ])
    }, (Go.geo.conicEqualArea = function() {
        return Ye(Ze)
    }).raw = Ze, Go.geo.albers = function() {
        return Go.geo.conicEqualArea().rotate([96, 0]).center([-.6, 38.7]).parallels([29.5, 45.5]).scale(1070)
    }, Go.geo.albersUsa = function() {
        function n(n) {
            var i = n[0],
                o = n[1];
            return t = null, e(i, o), t || (r(i, o), t) || u(i, o), t
        }
        var t, e, r, u, i = Go.geo.albers(),
            o = Go.geo.conicEqualArea().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]),
            a = Go.geo.conicEqualArea().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]),
            c = {
                point: function(n, e) {
                    t = [n, e]
                }
            };
        return n.invert = function(n) {
            var t = i.scale(),
                e = i.translate(),
                r = (n[0] - e[0]) / t,
                u = (n[1] - e[1]) / t;
            return (u >= .12 && .234 > u && r >= -.425 && -.214 > r ? o : u >= .166 && .234 > u && r >= -.214 && -.115 > r ? a : i).invert(n)
        }, n.stream = function(n) {
            var t = i.stream(n),
                e = o.stream(n),
                r = a.stream(n);
            return {
                point: function(n, u) {
                    t.point(n, u), e.point(n, u), r.point(n, u)
                },
                sphere: function() {
                    t.sphere(), e.sphere(), r.sphere()
                },
                lineStart: function() {
                    t.lineStart(), e.lineStart(), r.lineStart()
                },
                lineEnd: function() {
                    t.lineEnd(), e.lineEnd(), r.lineEnd()
                },
                polygonStart: function() {
                    t.polygonStart(), e.polygonStart(), r.polygonStart()
                },
                polygonEnd: function() {
                    t.polygonEnd(), e.polygonEnd(), r.polygonEnd()
                }
            }
        }, n.precision = function(t) {
            return arguments.length ? (i.precision(t), o.precision(t), a.precision(t), n) : i.precision()
        }, n.scale = function(t) {
            return arguments.length ? (i.scale(t), o.scale(.35 * t), a.scale(t), n.translate(i.translate())) : i.scale()
        }, n.translate = function(t) {
            if (!arguments.length) return i.translate();
            var s = i.scale(),
                l = +t[0],
                f = +t[1];
            return e = i.translate(t).clipExtent([
                [l - .455 * s, f - .238 * s],
                [l + .455 * s, f + .238 * s]
            ]).stream(c).point, r = o.translate([l - .307 * s, f + .201 * s]).clipExtent([
                [l - .425 * s + Ta, f + .12 * s + Ta],
                [l - .214 * s - Ta, f + .234 * s - Ta]
            ]).stream(c).point, u = a.translate([l - .205 * s, f + .212 * s]).clipExtent([
                [l - .214 * s + Ta, f + .166 * s + Ta],
                [l - .115 * s - Ta, f + .234 * s - Ta]
            ]).stream(c).point, n
        }, n.scale(1070)
    };
    var qc, zc, Rc, Dc, Pc, Uc, jc = {
            point: v,
            lineStart: v,
            lineEnd: v,
            polygonStart: function() {
                zc = 0, jc.lineStart = Ve
            },
            polygonEnd: function() {
                jc.lineStart = jc.lineEnd = jc.point = v, qc += fa(zc / 2)
            }
        }, Hc = {
            point: $e,
            lineStart: v,
            lineEnd: v,
            polygonStart: v,
            polygonEnd: v
        }, Fc = {
            point: Je,
            lineStart: We,
            lineEnd: Ge,
            polygonStart: function() {
                Fc.lineStart = Ke
            },
            polygonEnd: function() {
                Fc.point = Je, Fc.lineStart = We, Fc.lineEnd = Ge
            }
        };
    Go.geo.path = function() {
        function n(n) {
            return n && ("function" == typeof a && i.pointRadius(+a.apply(this, arguments)), o && o.valid || (o = u(i)), Go.geo.stream(n, o)), i.result()
        }

        function t() {
            return o = null, n
        }
        var e, r, u, i, o, a = 4.5;
        return n.area = function(n) {
            return qc = 0, Go.geo.stream(n, u(jc)), qc
        }, n.centroid = function(n) {
            return Mc = _c = bc = wc = Sc = kc = Ec = Nc = Ac = 0, Go.geo.stream(n, u(Fc)), Ac ? [Ec / Ac, Nc / Ac] : kc ? [wc / kc, Sc / kc] : bc ? [Mc / bc, _c / bc] : [0 / 0, 0 / 0]
        }, n.bounds = function(n) {
            return Pc = Uc = -(Rc = Dc = 1 / 0), Go.geo.stream(n, u(Hc)), [
                [Rc, Dc],
                [Pc, Uc]
            ]
        }, n.projection = function(n) {
            return arguments.length ? (u = (e = n) ? n.stream || tr(n) : Nt, t()) : e
        }, n.context = function(n) {
            return arguments.length ? (i = null == (r = n) ? new Xe : new Qe(n), "function" != typeof a && i.pointRadius(a), t()) : r
        }, n.pointRadius = function(t) {
            return arguments.length ? (a = "function" == typeof t ? t : (i.pointRadius(+t), +t), n) : a
        }, n.projection(Go.geo.albersUsa()).context(null)
    }, Go.geo.transform = function(n) {
        return {
            stream: function(t) {
                var e = new er(t);
                for (var r in n) e[r] = n[r];
                return e
            }
        }
    }, er.prototype = {
        point: function(n, t) {
            this.stream.point(n, t)
        },
        sphere: function() {
            this.stream.sphere()
        },
        lineStart: function() {
            this.stream.lineStart()
        },
        lineEnd: function() {
            this.stream.lineEnd()
        },
        polygonStart: function() {
            this.stream.polygonStart()
        },
        polygonEnd: function() {
            this.stream.polygonEnd()
        }
    }, Go.geo.projection = ur, Go.geo.projectionMutator = ir, (Go.geo.equirectangular = function() {
        return ur(ar)
    }).raw = ar.invert = ar, Go.geo.rotation = function(n) {
        function t(t) {
            return t = n(t[0] * za, t[1] * za), t[0] *= Ra, t[1] *= Ra, t
        }
        return n = sr(n[0] % 360 * za, n[1] * za, n.length > 2 ? n[2] * za : 0), t.invert = function(t) {
            return t = n.invert(t[0] * za, t[1] * za), t[0] *= Ra, t[1] *= Ra, t
        }, t
    }, cr.invert = ar, Go.geo.circle = function() {
        function n() {
            var n = "function" == typeof r ? r.apply(this, arguments) : r,
                t = sr(-n[0] * za, -n[1] * za, 0).invert,
                u = [];
            return e(null, null, 1, {
                point: function(n, e) {
                    u.push(n = t(n, e)), n[0] *= Ra, n[1] *= Ra
                }
            }), {
                type: "Polygon",
                coordinates: [u]
            }
        }
        var t, e, r = [0, 0],
            u = 6;
        return n.origin = function(t) {
            return arguments.length ? (r = t, n) : r
        }, n.angle = function(r) {
            return arguments.length ? (e = gr((t = +r) * za, u * za), n) : t
        }, n.precision = function(r) {
            return arguments.length ? (e = gr(t * za, (u = +r) * za), n) : u
        }, n.angle(90)
    }, Go.geo.distance = function(n, t) {
        var e, r = (t[0] - n[0]) * za,
            u = n[1] * za,
            i = t[1] * za,
            o = Math.sin(r),
            a = Math.cos(r),
            c = Math.sin(u),
            s = Math.cos(u),
            l = Math.sin(i),
            f = Math.cos(i);
        return Math.atan2(Math.sqrt((e = f * o) * e + (e = s * l - c * f * a) * e), c * l + s * f * a)
    }, Go.geo.graticule = function() {
        function n() {
            return {
                type: "MultiLineString",
                coordinates: t()
            }
        }

        function t() {
            return Go.range(Math.ceil(i / d) * d, u, d).map(h).concat(Go.range(Math.ceil(s / m) * m, c, m).map(g)).concat(Go.range(Math.ceil(r / p) * p, e, p).filter(function(n) {
                return fa(n % d) > Ta
            }).map(l)).concat(Go.range(Math.ceil(a / v) * v, o, v).filter(function(n) {
                return fa(n % m) > Ta
            }).map(f))
        }
        var e, r, u, i, o, a, c, s, l, f, h, g, p = 10,
            v = p,
            d = 90,
            m = 360,
            y = 2.5;
        return n.lines = function() {
            return t().map(function(n) {
                return {
                    type: "LineString",
                    coordinates: n
                }
            })
        }, n.outline = function() {
            return {
                type: "Polygon",
                coordinates: [h(i).concat(g(c).slice(1), h(u).reverse().slice(1), g(s).reverse().slice(1))]
            }
        }, n.extent = function(t) {
            return arguments.length ? n.majorExtent(t).minorExtent(t) : n.minorExtent()
        }, n.majorExtent = function(t) {
            return arguments.length ? (i = +t[0][0], u = +t[1][0], s = +t[0][1], c = +t[1][1], i > u && (t = i, i = u, u = t), s > c && (t = s, s = c, c = t), n.precision(y)) : [
                [i, s],
                [u, c]
            ]
        }, n.minorExtent = function(t) {
            return arguments.length ? (r = +t[0][0], e = +t[1][0], a = +t[0][1], o = +t[1][1], r > e && (t = r, r = e, e = t), a > o && (t = a, a = o, o = t), n.precision(y)) : [
                [r, a],
                [e, o]
            ]
        }, n.step = function(t) {
            return arguments.length ? n.majorStep(t).minorStep(t) : n.minorStep()
        }, n.majorStep = function(t) {
            return arguments.length ? (d = +t[0], m = +t[1], n) : [d, m]
        }, n.minorStep = function(t) {
            return arguments.length ? (p = +t[0], v = +t[1], n) : [p, v]
        }, n.precision = function(t) {
            return arguments.length ? (y = +t, l = vr(a, o, 90), f = dr(r, e, y), h = vr(s, c, 90), g = dr(i, u, y), n) : y
        }, n.majorExtent([
            [-180, -90 + Ta],
            [180, 90 - Ta]
        ]).minorExtent([
            [-180, -80 - Ta],
            [180, 80 + Ta]
        ])
    }, Go.geo.greatArc = function() {
        function n() {
            return {
                type: "LineString",
                coordinates: [t || r.apply(this, arguments), e || u.apply(this, arguments)]
            }
        }
        var t, e, r = mr,
            u = yr;
        return n.distance = function() {
            return Go.geo.distance(t || r.apply(this, arguments), e || u.apply(this, arguments))
        }, n.source = function(e) {
            return arguments.length ? (r = e, t = "function" == typeof e ? null : e, n) : r
        }, n.target = function(t) {
            return arguments.length ? (u = t, e = "function" == typeof t ? null : t, n) : u
        }, n.precision = function() {
            return arguments.length ? n : 0
        }, n
    }, Go.geo.interpolate = function(n, t) {
        return xr(n[0] * za, n[1] * za, t[0] * za, t[1] * za)
    }, Go.geo.length = function(n) {
        return Oc = 0, Go.geo.stream(n, Ic), Oc
    };
    var Oc, Ic = {
            sphere: v,
            point: v,
            lineStart: Mr,
            lineEnd: v,
            polygonStart: v,
            polygonEnd: v
        }, Yc = _r(function(n) {
            return Math.sqrt(2 / (1 + n))
        }, function(n) {
            return 2 * Math.asin(n / 2)
        });
    (Go.geo.azimuthalEqualArea = function() {
        return ur(Yc)
    }).raw = Yc;
    var Zc = _r(function(n) {
        var t = Math.acos(n);
        return t && t / Math.sin(t)
    }, Nt);
    (Go.geo.azimuthalEquidistant = function() {
        return ur(Zc)
    }).raw = Zc, (Go.geo.conicConformal = function() {
        return Ye(br)
    }).raw = br, (Go.geo.conicEquidistant = function() {
        return Ye(wr)
    }).raw = wr;
    var Vc = _r(function(n) {
        return 1 / n
    }, Math.atan);
    (Go.geo.gnomonic = function() {
        return ur(Vc)
    }).raw = Vc, Sr.invert = function(n, t) {
        return [n, 2 * Math.atan(Math.exp(t)) - La]
    }, (Go.geo.mercator = function() {
        return kr(Sr)
    }).raw = Sr;
    var $c = _r(function() {
        return 1
    }, Math.asin);
    (Go.geo.orthographic = function() {
        return ur($c)
    }).raw = $c;
    var Xc = _r(function(n) {
        return 1 / (1 + n)
    }, function(n) {
        return 2 * Math.atan(n)
    });
    (Go.geo.stereographic = function() {
        return ur(Xc)
    }).raw = Xc, Er.invert = function(n, t) {
        return [-t, 2 * Math.atan(Math.exp(n)) - La]
    }, (Go.geo.transverseMercator = function() {
        var n = kr(Er),
            t = n.center,
            e = n.rotate;
        return n.center = function(n) {
            return n ? t([-n[1], n[0]]) : (n = t(), [-n[1], n[0]])
        }, n.rotate = function(n) {
            return n ? e([n[0], n[1], n.length > 2 ? n[2] + 90 : 90]) : (n = e(), [n[0], n[1], n[2] - 90])
        }, n.rotate([0, 0])
    }).raw = Er, Go.geom = {}, Go.geom.hull = function(n) {
        function t(n) {
            if (n.length < 3) return [];
            var t, u = Et(e),
                i = Et(r),
                o = n.length,
                a = [],
                c = [];
            for (t = 0; o > t; t++) a.push([+u.call(this, n[t], t), +i.call(this, n[t], t), t]);
            for (a.sort(Lr), t = 0; o > t; t++) c.push([a[t][0], -a[t][1]]);
            var s = Cr(a),
                l = Cr(c),
                f = l[0] === s[0],
                h = l[l.length - 1] === s[s.length - 1],
                g = [];
            for (t = s.length - 1; t >= 0; --t) g.push(n[a[s[t]][2]]);
            for (t = +f; t < l.length - h; ++t) g.push(n[a[l[t]][2]]);
            return g
        }
        var e = Nr,
            r = Ar;
        return arguments.length ? t(n) : (t.x = function(n) {
            return arguments.length ? (e = n, t) : e
        }, t.y = function(n) {
            return arguments.length ? (r = n, t) : r
        }, t)
    }, Go.geom.polygon = function(n) {
        return da(n, Bc), n
    };
    var Bc = Go.geom.polygon.prototype = [];
    Bc.area = function() {
        for (var n, t = -1, e = this.length, r = this[e - 1], u = 0; ++t < e;) n = r, r = this[t], u += n[1] * r[0] - n[0] * r[1];
        return .5 * u
    }, Bc.centroid = function(n) {
        var t, e, r = -1,
            u = this.length,
            i = 0,
            o = 0,
            a = this[u - 1];
        for (arguments.length || (n = -1 / (6 * this.area())); ++r < u;) t = a, a = this[r], e = t[0] * a[1] - a[0] * t[1], i += (t[0] + a[0]) * e, o += (t[1] + a[1]) * e;
        return [i * n, o * n]
    }, Bc.clip = function(n) {
        for (var t, e, r, u, i, o, a = zr(n), c = -1, s = this.length - zr(this), l = this[s - 1]; ++c < s;) {
            for (t = n.slice(), n.length = 0, u = this[c], i = t[(r = t.length - a) - 1], e = -1; ++e < r;) o = t[e], Tr(o, l, u) ? (Tr(i, l, u) || n.push(qr(i, o, l, u)), n.push(o)) : Tr(i, l, u) && n.push(qr(i, o, l, u)), i = o;
            a && n.push(n[0]), l = u
        }
        return n
    };
    var Jc, Wc, Gc, Kc, Qc, ns = [],
        ts = [];
    Or.prototype.prepare = function() {
        for (var n, t = this.edges, e = t.length; e--;) n = t[e].edge, n.b && n.a || t.splice(e, 1);
        return t.sort(Yr), t.length
    }, Qr.prototype = {
        start: function() {
            return this.edge.l === this.site ? this.edge.a : this.edge.b
        },
        end: function() {
            return this.edge.l === this.site ? this.edge.b : this.edge.a
        }
    }, nu.prototype = {
        insert: function(n, t) {
            var e, r, u;
            if (n) {
                if (t.P = n, t.N = n.N, n.N && (n.N.P = t), n.N = t, n.R) {
                    for (n = n.R; n.L;) n = n.L;
                    n.L = t
                } else n.R = t;
                e = n
            } else this._ ? (n = uu(this._), t.P = null, t.N = n, n.P = n.L = t, e = n) : (t.P = t.N = null, this._ = t, e = null);
            for (t.L = t.R = null, t.U = e, t.C = !0, n = t; e && e.C;) r = e.U, e === r.L ? (u = r.R, u && u.C ? (e.C = u.C = !1, r.C = !0, n = r) : (n === e.R && (eu(this, e), n = e, e = n.U), e.C = !1, r.C = !0, ru(this, r))) : (u = r.L, u && u.C ? (e.C = u.C = !1, r.C = !0, n = r) : (n === e.L && (ru(this, e), n = e, e = n.U), e.C = !1, r.C = !0, eu(this, r))), e = n.U;
            this._.C = !1
        },
        remove: function(n) {
            n.N && (n.N.P = n.P), n.P && (n.P.N = n.N), n.N = n.P = null;
            var t, e, r, u = n.U,
                i = n.L,
                o = n.R;
            if (e = i ? o ? uu(o) : i : o, u ? u.L === n ? u.L = e : u.R = e : this._ = e, i && o ? (r = e.C, e.C = n.C, e.L = i, i.U = e, e !== o ? (u = e.U, e.U = n.U, n = e.R, u.L = n, e.R = o, o.U = e) : (e.U = u, u = e, n = e.R)) : (r = n.C, n = e), n && (n.U = u), !r) {
                if (n && n.C) return n.C = !1, void 0;
                do {
                    if (n === this._) break;
                    if (n === u.L) {
                        if (t = u.R, t.C && (t.C = !1, u.C = !0, eu(this, u), t = u.R), t.L && t.L.C || t.R && t.R.C) {
                            t.R && t.R.C || (t.L.C = !1, t.C = !0, ru(this, t), t = u.R), t.C = u.C, u.C = t.R.C = !1, eu(this, u), n = this._;
                            break
                        }
                    } else if (t = u.L, t.C && (t.C = !1, u.C = !0, ru(this, u), t = u.L), t.L && t.L.C || t.R && t.R.C) {
                        t.L && t.L.C || (t.R.C = !1, t.C = !0, eu(this, t), t = u.L), t.C = u.C, u.C = t.L.C = !1, ru(this, u), n = this._;
                        break
                    }
                    t.C = !0, n = u, u = u.U
                } while (!n.C);
                n && (n.C = !1)
            }
        }
    }, Go.geom.voronoi = function(n) {
        function t(n) {
            var t = new Array(n.length),
                r = a[0][0],
                u = a[0][1],
                i = a[1][0],
                o = a[1][1];
            return iu(e(n), a).cells.forEach(function(e, a) {
                var c = e.edges,
                    s = e.site,
                    l = t[a] = c.length ? c.map(function(n) {
                        var t = n.start();
                        return [t.x, t.y]
                    }) : s.x >= r && s.x <= i && s.y >= u && s.y <= o ? [
                        [r, o],
                        [i, o],
                        [i, u],
                        [r, u]
                    ] : [];
                l.point = n[a]
            }), t
        }

        function e(n) {
            return n.map(function(n, t) {
                return {
                    x: Math.round(i(n, t) / Ta) * Ta,
                    y: Math.round(o(n, t) / Ta) * Ta,
                    i: t
                }
            })
        }
        var r = Nr,
            u = Ar,
            i = r,
            o = u,
            a = es;
        return n ? t(n) : (t.links = function(n) {
            return iu(e(n)).edges.filter(function(n) {
                return n.l && n.r
            }).map(function(t) {
                return {
                    source: n[t.l.i],
                    target: n[t.r.i]
                }
            })
        }, t.triangles = function(n) {
            var t = [];
            return iu(e(n)).cells.forEach(function(e, r) {
                for (var u, i, o = e.site, a = e.edges.sort(Yr), c = -1, s = a.length, l = a[s - 1].edge, f = l.l === o ? l.r : l.l; ++c < s;) u = l, i = f, l = a[c].edge, f = l.l === o ? l.r : l.l, r < i.i && r < f.i && au(o, i, f) < 0 && t.push([n[r], n[i.i], n[f.i]])
            }), t
        }, t.x = function(n) {
            return arguments.length ? (i = Et(r = n), t) : r
        }, t.y = function(n) {
            return arguments.length ? (o = Et(u = n), t) : u
        }, t.clipExtent = function(n) {
            return arguments.length ? (a = null == n ? es : n, t) : a === es ? null : a
        }, t.size = function(n) {
            return arguments.length ? t.clipExtent(n && [
                [0, 0], n
            ]) : a === es ? null : a && a[1]
        }, t)
    };
    var es = [
        [-1e6, -1e6],
        [1e6, 1e6]
    ];
    Go.geom.delaunay = function(n) {
        return Go.geom.voronoi().triangles(n)
    }, Go.geom.quadtree = function(n, t, e, r, u) {
        function i(n) {
            function i(n, t, e, r, u, i, o, a) {
                if (!isNaN(e) && !isNaN(r))
                    if (n.leaf) {
                        var c = n.x,
                            l = n.y;
                        if (null != c)
                            if (fa(c - e) + fa(l - r) < .01) s(n, t, e, r, u, i, o, a);
                            else {
                                var f = n.point;
                                n.x = n.y = n.point = null, s(n, f, c, l, u, i, o, a), s(n, t, e, r, u, i, o, a)
                            } else n.x = e, n.y = r, n.point = t
                    } else s(n, t, e, r, u, i, o, a)
            }

            function s(n, t, e, r, u, o, a, c) {
                var s = .5 * (u + a),
                    l = .5 * (o + c),
                    f = e >= s,
                    h = r >= l,
                    g = (h << 1) + f;
                n.leaf = !1, n = n.nodes[g] || (n.nodes[g] = lu()), f ? u = s : a = s, h ? o = l : c = l, i(n, t, e, r, u, o, a, c)
            }
            var l, f, h, g, p, v, d, m, y, x = Et(a),
                M = Et(c);
            if (null != t) v = t, d = e, m = r, y = u;
            else if (m = y = -(v = d = 1 / 0), f = [], h = [], p = n.length, o)
                for (g = 0; p > g; ++g) l = n[g], l.x < v && (v = l.x), l.y < d && (d = l.y), l.x > m && (m = l.x), l.y > y && (y = l.y), f.push(l.x), h.push(l.y);
            else
                for (g = 0; p > g; ++g) {
                    var _ = +x(l = n[g], g),
                        b = +M(l, g);
                    v > _ && (v = _), d > b && (d = b), _ > m && (m = _), b > y && (y = b), f.push(_), h.push(b)
                }
            var w = m - v,
                S = y - d;
            w > S ? y = d + w : m = v + S;
            var k = lu();
            if (k.add = function(n) {
                i(k, n, +x(n, ++g), +M(n, g), v, d, m, y)
            }, k.visit = function(n) {
                fu(n, k, v, d, m, y)
            }, g = -1, null == t) {
                for (; ++g < p;) i(k, n[g], f[g], h[g], v, d, m, y);
                --g
            } else n.forEach(k.add);
            return f = h = n = l = null, k
        }
        var o, a = Nr,
            c = Ar;
        return (o = arguments.length) ? (a = cu, c = su, 3 === o && (u = e, r = t, e = t = 0), i(n)) : (i.x = function(n) {
            return arguments.length ? (a = n, i) : a
        }, i.y = function(n) {
            return arguments.length ? (c = n, i) : c
        }, i.extent = function(n) {
            return arguments.length ? (null == n ? t = e = r = u = null : (t = +n[0][0], e = +n[0][1], r = +n[1][0], u = +n[1][1]), i) : null == t ? null : [
                [t, e],
                [r, u]
            ]
        }, i.size = function(n) {
            return arguments.length ? (null == n ? t = e = r = u = null : (t = e = 0, r = +n[0], u = +n[1]), i) : null == t ? null : [r - t, u - e]
        }, i)
    }, Go.interpolateRgb = hu, Go.interpolateObject = gu, Go.interpolateNumber = pu, Go.interpolateString = vu;
    var rs = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
        us = new RegExp(rs.source, "g");
    Go.interpolate = du, Go.interpolators = [
        function(n, t) {
            var e = typeof t;
            return ("string" === e ? Ja.has(t) || /^(#|rgb\(|hsl\()/.test(t) ? hu : vu : t instanceof et ? hu : Array.isArray(t) ? mu : "object" === e && isNaN(t) ? gu : pu)(n, t)
        }
    ], Go.interpolateArray = mu;
    var is = function() {
        return Nt
    }, os = Go.map({
            linear: is,
            poly: Su,
            quad: function() {
                return _u
            },
            cubic: function() {
                return bu
            },
            sin: function() {
                return ku
            },
            exp: function() {
                return Eu
            },
            circle: function() {
                return Nu
            },
            elastic: Au,
            back: Cu,
            bounce: function() {
                return Lu
            }
        }),
        as = Go.map({
            "in": Nt,
            out: xu,
            "in-out": Mu,
            "out-in": function(n) {
                return Mu(xu(n))
            }
        });
    Go.ease = function(n) {
        var t = n.indexOf("-"),
            e = t >= 0 ? n.substring(0, t) : n,
            r = t >= 0 ? n.substring(t + 1) : "in";
        return e = os.get(e) || is, r = as.get(r) || Nt, yu(r(e.apply(null, Ko.call(arguments, 1))))
    }, Go.interpolateHcl = Tu, Go.interpolateHsl = qu, Go.interpolateLab = zu, Go.interpolateRound = Ru, Go.transform = function(n) {
        var t = na.createElementNS(Go.ns.prefix.svg, "g");
        return (Go.transform = function(n) {
            if (null != n) {
                t.setAttribute("transform", n);
                var e = t.transform.baseVal.consolidate()
            }
            return new Du(e ? e.matrix : cs)
        })(n)
    }, Du.prototype.toString = function() {
        return "translate(" + this.translate + ")rotate(" + this.rotate + ")skewX(" + this.skew + ")scale(" + this.scale + ")"
    };
    var cs = {
        a: 1,
        b: 0,
        c: 0,
        d: 1,
        e: 0,
        f: 0
    };
    Go.interpolateTransform = Hu, Go.layout = {}, Go.layout.bundle = function() {
        return function(n) {
            for (var t = [], e = -1, r = n.length; ++e < r;) t.push(Iu(n[e]));
            return t
        }
    }, Go.layout.chord = function() {
        function n() {
            var n, s, f, h, g, p = {}, v = [],
                d = Go.range(i),
                m = [];
            for (e = [], r = [], n = 0, h = -1; ++h < i;) {
                for (s = 0, g = -1; ++g < i;) s += u[h][g];
                v.push(s), m.push(Go.range(i)), n += s
            }
            for (o && d.sort(function(n, t) {
                return o(v[n], v[t])
            }), a && m.forEach(function(n, t) {
                n.sort(function(n, e) {
                    return a(u[t][n], u[t][e])
                })
            }), n = (Ca - l * i) / n, s = 0, h = -1; ++h < i;) {
                for (f = s, g = -1; ++g < i;) {
                    var y = d[h],
                        x = m[y][g],
                        M = u[y][x],
                        _ = s,
                        b = s += M * n;
                    p[y + "-" + x] = {
                        index: y,
                        subindex: x,
                        startAngle: _,
                        endAngle: b,
                        value: M
                    }
                }
                r[y] = {
                    index: y,
                    startAngle: f,
                    endAngle: s,
                    value: (s - f) / n
                }, s += l
            }
            for (h = -1; ++h < i;)
                for (g = h - 1; ++g < i;) {
                    var w = p[h + "-" + g],
                        S = p[g + "-" + h];
                    (w.value || S.value) && e.push(w.value < S.value ? {
                            source: S,
                            target: w
                        } : {
                            source: w,
                            target: S
                        })
                }
            c && t()
        }

        function t() {
            e.sort(function(n, t) {
                return c((n.source.value + n.target.value) / 2, (t.source.value + t.target.value) / 2)
            })
        }
        var e, r, u, i, o, a, c, s = {}, l = 0;
        return s.matrix = function(n) {
            return arguments.length ? (i = (u = n) && u.length, e = r = null, s) : u
        }, s.padding = function(n) {
            return arguments.length ? (l = n, e = r = null, s) : l
        }, s.sortGroups = function(n) {
            return arguments.length ? (o = n, e = r = null, s) : o
        }, s.sortSubgroups = function(n) {
            return arguments.length ? (a = n, e = null, s) : a
        }, s.sortChords = function(n) {
            return arguments.length ? (c = n, e && t(), s) : c
        }, s.chords = function() {
            return e || n(), e
        }, s.groups = function() {
            return r || n(), r
        }, s
    }, Go.layout.force = function() {
        function n(n) {
            return function(t, e, r, u) {
                if (t.point !== n) {
                    var i = t.cx - n.x,
                        o = t.cy - n.y,
                        a = u - e,
                        c = i * i + o * o;
                    if (c > a * a / d) {
                        if (p > c) {
                            var s = t.charge / c;
                            n.px -= i * s, n.py -= o * s
                        }
                        return !0
                    }
                    if (t.point && c && p > c) {
                        var s = t.pointCharge / c;
                        n.px -= i * s, n.py -= o * s
                    }
                }
                return !t.charge
            }
        }

        function t(n) {
            n.px = Go.event.x, n.py = Go.event.y, a.resume()
        }
        var e, r, u, i, o, a = {}, c = Go.dispatch("start", "tick", "end"),
            s = [1, 1],
            l = .9,
            f = ss,
            h = ls,
            g = -30,
            p = fs,
            v = .1,
            d = .64,
            m = [],
            y = [];
        return a.tick = function() {
            if ((r *= .99) < .005) return c.end({
                type: "end",
                alpha: r = 0
            }), !0;
            var t, e, a, f, h, p, d, x, M, _ = m.length,
                b = y.length;
            for (e = 0; b > e; ++e) a = y[e], f = a.source, h = a.target, x = h.x - f.x, M = h.y - f.y, (p = x * x + M * M) && (p = r * i[e] * ((p = Math.sqrt(p)) - u[e]) / p, x *= p, M *= p, h.x -= x * (d = f.weight / (h.weight + f.weight)), h.y -= M * d, f.x += x * (d = 1 - d), f.y += M * d);
            if ((d = r * v) && (x = s[0] / 2, M = s[1] / 2, e = -1, d))
                for (; ++e < _;) a = m[e], a.x += (x - a.x) * d, a.y += (M - a.y) * d;
            if (g)
                for (Ju(t = Go.geom.quadtree(m), r, o), e = -1; ++e < _;)(a = m[e]).fixed || t.visit(n(a));
            for (e = -1; ++e < _;) a = m[e], a.fixed ? (a.x = a.px, a.y = a.py) : (a.x -= (a.px - (a.px = a.x)) * l, a.y -= (a.py - (a.py = a.y)) * l);
            c.tick({
                type: "tick",
                alpha: r
            })
        }, a.nodes = function(n) {
            return arguments.length ? (m = n, a) : m
        }, a.links = function(n) {
            return arguments.length ? (y = n, a) : y
        }, a.size = function(n) {
            return arguments.length ? (s = n, a) : s
        }, a.linkDistance = function(n) {
            return arguments.length ? (f = "function" == typeof n ? n : +n, a) : f
        }, a.distance = a.linkDistance, a.linkStrength = function(n) {
            return arguments.length ? (h = "function" == typeof n ? n : +n, a) : h
        }, a.friction = function(n) {
            return arguments.length ? (l = +n, a) : l
        }, a.charge = function(n) {
            return arguments.length ? (g = "function" == typeof n ? n : +n, a) : g
        }, a.chargeDistance = function(n) {
            return arguments.length ? (p = n * n, a) : Math.sqrt(p)
        }, a.gravity = function(n) {
            return arguments.length ? (v = +n, a) : v
        }, a.theta = function(n) {
            return arguments.length ? (d = n * n, a) : Math.sqrt(d)
        }, a.alpha = function(n) {
            return arguments.length ? (n = +n, r ? r = n > 0 ? n : 0 : n > 0 && (c.start({
                type: "start",
                alpha: r = n
            }), Go.timer(a.tick)), a) : r
        }, a.start = function() {
            function n(n, r) {
                if (!e) {
                    for (e = new Array(c), a = 0; c > a; ++a) e[a] = [];
                    for (a = 0; s > a; ++a) {
                        var u = y[a];
                        e[u.source.index].push(u.target), e[u.target.index].push(u.source)
                    }
                }
                for (var i, o = e[t], a = -1, s = o.length; ++a < s;)
                    if (!isNaN(i = o[a][n])) return i;
                return Math.random() * r
            }
            var t, e, r, c = m.length,
                l = y.length,
                p = s[0],
                v = s[1];
            for (t = 0; c > t; ++t)(r = m[t]).index = t, r.weight = 0;
            for (t = 0; l > t; ++t) r = y[t], "number" == typeof r.source && (r.source = m[r.source]), "number" == typeof r.target && (r.target = m[r.target]), ++r.source.weight, ++r.target.weight;
            for (t = 0; c > t; ++t) r = m[t], isNaN(r.x) && (r.x = n("x", p)), isNaN(r.y) && (r.y = n("y", v)), isNaN(r.px) && (r.px = r.x), isNaN(r.py) && (r.py = r.y);
            if (u = [], "function" == typeof f)
                for (t = 0; l > t; ++t) u[t] = +f.call(this, y[t], t);
            else
                for (t = 0; l > t; ++t) u[t] = f; if (i = [], "function" == typeof h)
                for (t = 0; l > t; ++t) i[t] = +h.call(this, y[t], t);
            else
                for (t = 0; l > t; ++t) i[t] = h; if (o = [], "function" == typeof g)
                for (t = 0; c > t; ++t) o[t] = +g.call(this, m[t], t);
            else
                for (t = 0; c > t; ++t) o[t] = g;
            return a.resume()
        }, a.resume = function() {
            return a.alpha(.1)
        }, a.stop = function() {
            return a.alpha(0)
        }, a.drag = function() {
            return e || (e = Go.behavior.drag().origin(Nt).on("dragstart.force", Vu).on("drag.force", t).on("dragend.force", $u)), arguments.length ? (this.on("mouseover.force", Xu).on("mouseout.force", Bu).call(e), void 0) : e
        }, Go.rebind(a, c, "on")
    };
    var ss = 20,
        ls = 1,
        fs = 1 / 0;
    Go.layout.hierarchy = function() {
        function n(t, o, a) {
            var c = u.call(e, t, o);
            if (t.depth = o, a.push(t), c && (s = c.length)) {
                for (var s, l, f = -1, h = t.children = new Array(s), g = 0, p = o + 1; ++f < s;) l = h[f] = n(c[f], p, a), l.parent = t, g += l.value;
                r && h.sort(r), i && (t.value = g)
            } else delete t.children, i && (t.value = +i.call(e, t, o) || 0);
            return t
        }

        function t(n, r) {
            var u = n.children,
                o = 0;
            if (u && (a = u.length))
                for (var a, c = -1, s = r + 1; ++c < a;) o += t(u[c], s);
            else i && (o = +i.call(e, n, r) || 0);
            return i && (n.value = o), o
        }

        function e(t) {
            var e = [];
            return n(t, 0, e), e
        }
        var r = Qu,
            u = Gu,
            i = Ku;
        return e.sort = function(n) {
            return arguments.length ? (r = n, e) : r
        }, e.children = function(n) {
            return arguments.length ? (u = n, e) : u
        }, e.value = function(n) {
            return arguments.length ? (i = n, e) : i
        }, e.revalue = function(n) {
            return t(n, 0), n
        }, e
    }, Go.layout.partition = function() {
        function n(t, e, r, u) {
            var i = t.children;
            if (t.x = e, t.y = t.depth * u, t.dx = r, t.dy = u, i && (o = i.length)) {
                var o, a, c, s = -1;
                for (r = t.value ? r / t.value : 0; ++s < o;) n(a = i[s], e, c = a.value * r, u), e += c
            }
        }

        function t(n) {
            var e = n.children,
                r = 0;
            if (e && (u = e.length))
                for (var u, i = -1; ++i < u;) r = Math.max(r, t(e[i]));
            return 1 + r
        }

        function e(e, i) {
            var o = r.call(this, e, i);
            return n(o[0], 0, u[0], u[1] / t(o[0])), o
        }
        var r = Go.layout.hierarchy(),
            u = [1, 1];
        return e.size = function(n) {
            return arguments.length ? (u = n, e) : u
        }, Wu(e, r)
    }, Go.layout.pie = function() {
        function n(i) {
            var o = i.map(function(e, r) {
                return +t.call(n, e, r)
            }),
                a = +("function" == typeof r ? r.apply(this, arguments) : r),
                c = (("function" == typeof u ? u.apply(this, arguments) : u) - a) / Go.sum(o),
                s = Go.range(i.length);
            null != e && s.sort(e === hs ? function(n, t) {
                return o[t] - o[n]
            } : function(n, t) {
                return e(i[n], i[t])
            });
            var l = [];
            return s.forEach(function(n) {
                var t;
                l[n] = {
                    data: i[n],
                    value: t = o[n],
                    startAngle: a,
                    endAngle: a += t * c
                }
            }), l
        }
        var t = Number,
            e = hs,
            r = 0,
            u = Ca;
        return n.value = function(e) {
            return arguments.length ? (t = e, n) : t
        }, n.sort = function(t) {
            return arguments.length ? (e = t, n) : e
        }, n.startAngle = function(t) {
            return arguments.length ? (r = t, n) : r
        }, n.endAngle = function(t) {
            return arguments.length ? (u = t, n) : u
        }, n
    };
    var hs = {};
    Go.layout.stack = function() {
        function n(a, c) {
            var s = a.map(function(e, r) {
                return t.call(n, e, r)
            }),
                l = s.map(function(t) {
                    return t.map(function(t, e) {
                        return [i.call(n, t, e), o.call(n, t, e)]
                    })
                }),
                f = e.call(n, l, c);
            s = Go.permute(s, f), l = Go.permute(l, f);
            var h, g, p, v = r.call(n, l, c),
                d = s.length,
                m = s[0].length;
            for (g = 0; m > g; ++g)
                for (u.call(n, s[0][g], p = v[g], l[0][g][1]), h = 1; d > h; ++h) u.call(n, s[h][g], p += l[h - 1][g][1], l[h][g][1]);
            return a
        }
        var t = Nt,
            e = ui,
            r = ii,
            u = ri,
            i = ti,
            o = ei;
        return n.values = function(e) {
            return arguments.length ? (t = e, n) : t
        }, n.order = function(t) {
            return arguments.length ? (e = "function" == typeof t ? t : gs.get(t) || ui, n) : e
        }, n.offset = function(t) {
            return arguments.length ? (r = "function" == typeof t ? t : ps.get(t) || ii, n) : r
        }, n.x = function(t) {
            return arguments.length ? (i = t, n) : i
        }, n.y = function(t) {
            return arguments.length ? (o = t, n) : o
        }, n.out = function(t) {
            return arguments.length ? (u = t, n) : u
        }, n
    };
    var gs = Go.map({
        "inside-out": function(n) {
            var t, e, r = n.length,
                u = n.map(oi),
                i = n.map(ai),
                o = Go.range(r).sort(function(n, t) {
                    return u[n] - u[t]
                }),
                a = 0,
                c = 0,
                s = [],
                l = [];
            for (t = 0; r > t; ++t) e = o[t], c > a ? (a += i[e], s.push(e)) : (c += i[e], l.push(e));
            return l.reverse().concat(s)
        },
        reverse: function(n) {
            return Go.range(n.length).reverse()
        },
        "default": ui
    }),
        ps = Go.map({
            silhouette: function(n) {
                var t, e, r, u = n.length,
                    i = n[0].length,
                    o = [],
                    a = 0,
                    c = [];
                for (e = 0; i > e; ++e) {
                    for (t = 0, r = 0; u > t; t++) r += n[t][e][1];
                    r > a && (a = r), o.push(r)
                }
                for (e = 0; i > e; ++e) c[e] = (a - o[e]) / 2;
                return c
            },
            wiggle: function(n) {
                var t, e, r, u, i, o, a, c, s, l = n.length,
                    f = n[0],
                    h = f.length,
                    g = [];
                for (g[0] = c = s = 0, e = 1; h > e; ++e) {
                    for (t = 0, u = 0; l > t; ++t) u += n[t][e][1];
                    for (t = 0, i = 0, a = f[e][0] - f[e - 1][0]; l > t; ++t) {
                        for (r = 0, o = (n[t][e][1] - n[t][e - 1][1]) / (2 * a); t > r; ++r) o += (n[r][e][1] - n[r][e - 1][1]) / a;
                        i += o * n[t][e][1]
                    }
                    g[e] = c -= u ? i / u * a : 0, s > c && (s = c)
                }
                for (e = 0; h > e; ++e) g[e] -= s;
                return g
            },
            expand: function(n) {
                var t, e, r, u = n.length,
                    i = n[0].length,
                    o = 1 / u,
                    a = [];
                for (e = 0; i > e; ++e) {
                    for (t = 0, r = 0; u > t; t++) r += n[t][e][1];
                    if (r)
                        for (t = 0; u > t; t++) n[t][e][1] /= r;
                    else
                        for (t = 0; u > t; t++) n[t][e][1] = o
                }
                for (e = 0; i > e; ++e) a[e] = 0;
                return a
            },
            zero: ii
        });
    Go.layout.histogram = function() {
        function n(n, i) {
            for (var o, a, c = [], s = n.map(e, this), l = r.call(this, s, i), f = u.call(this, l, s, i), i = -1, h = s.length, g = f.length - 1, p = t ? 1 : 1 / h; ++i < g;) o = c[i] = [], o.dx = f[i + 1] - (o.x = f[i]), o.y = 0;
            if (g > 0)
                for (i = -1; ++i < h;) a = s[i], a >= l[0] && a <= l[1] && (o = c[Go.bisect(f, a, 1, g) - 1], o.y += p, o.push(n[i]));
            return c
        }
        var t = !0,
            e = Number,
            r = fi,
            u = si;
        return n.value = function(t) {
            return arguments.length ? (e = t, n) : e
        }, n.range = function(t) {
            return arguments.length ? (r = Et(t), n) : r
        }, n.bins = function(t) {
            return arguments.length ? (u = "number" == typeof t ? function(n) {
                return li(n, t)
            } : Et(t), n) : u
        }, n.frequency = function(e) {
            return arguments.length ? (t = !! e, n) : t
        }, n
    }, Go.layout.tree = function() {
        function n(n, i) {
            function o(n, t) {
                var r = n.children,
                    u = n._tree;
                if (r && (i = r.length)) {
                    for (var i, a, s, l = r[0], f = l, h = -1; ++h < i;) s = r[h], o(s, a), f = c(s, a, f), a = s;
                    Mi(n);
                    var g = .5 * (l._tree.prelim + s._tree.prelim);
                    t ? (u.prelim = t._tree.prelim + e(n, t), u.mod = u.prelim - g) : u.prelim = g
                } else t && (u.prelim = t._tree.prelim + e(n, t))
            }

            function a(n, t) {
                n.x = n._tree.prelim + t;
                var e = n.children;
                if (e && (r = e.length)) {
                    var r, u = -1;
                    for (t += n._tree.mod; ++u < r;) a(e[u], t)
                }
            }

            function c(n, t, r) {
                if (t) {
                    for (var u, i = n, o = n, a = t, c = n.parent.children[0], s = i._tree.mod, l = o._tree.mod, f = a._tree.mod, h = c._tree.mod; a = pi(a), i = gi(i), a && i;) c = gi(c), o = pi(o), o._tree.ancestor = n, u = a._tree.prelim + f - i._tree.prelim - s + e(a, i), u > 0 && (_i(bi(a, n, r), n, u), s += u, l += u), f += a._tree.mod, s += i._tree.mod, h += c._tree.mod, l += o._tree.mod;
                    a && !pi(o) && (o._tree.thread = a, o._tree.mod += f - l), i && !gi(c) && (c._tree.thread = i, c._tree.mod += s - h, r = n)
                }
                return r
            }
            var s = t.call(this, n, i),
                l = s[0];
            xi(l, function(n, t) {
                n._tree = {
                    ancestor: n,
                    prelim: 0,
                    mod: 0,
                    change: 0,
                    shift: 0,
                    number: t ? t._tree.number + 1 : 0
                }
            }), o(l), a(l, -l._tree.prelim);
            var f = vi(l, mi),
                h = vi(l, di),
                g = vi(l, yi),
                p = f.x - e(f, h) / 2,
                v = h.x + e(h, f) / 2,
                d = g.depth || 1;
            return xi(l, u ? function(n) {
                n.x *= r[0], n.y = n.depth * r[1], delete n._tree
            } : function(n) {
                n.x = (n.x - p) / (v - p) * r[0], n.y = n.depth / d * r[1], delete n._tree
            }), s
        }
        var t = Go.layout.hierarchy().sort(null).value(null),
            e = hi,
            r = [1, 1],
            u = !1;
        return n.separation = function(t) {
            return arguments.length ? (e = t, n) : e
        }, n.size = function(t) {
            return arguments.length ? (u = null == (r = t), n) : u ? null : r
        }, n.nodeSize = function(t) {
            return arguments.length ? (u = null != (r = t), n) : u ? r : null
        }, Wu(n, t)
    }, Go.layout.pack = function() {
        function n(n, i) {
            var o = e.call(this, n, i),
                a = o[0],
                c = u[0],
                s = u[1],
                l = null == t ? Math.sqrt : "function" == typeof t ? t : function() {
                    return t
                };
            if (a.x = a.y = 0, xi(a, function(n) {
                n.r = +l(n.value)
            }), xi(a, Ni), r) {
                var f = r * (t ? 1 : Math.max(2 * a.r / c, 2 * a.r / s)) / 2;
                xi(a, function(n) {
                    n.r += f
                }), xi(a, Ni), xi(a, function(n) {
                    n.r -= f
                })
            }
            return Li(a, c / 2, s / 2, t ? 1 : 1 / Math.max(2 * a.r / c, 2 * a.r / s)), o
        }
        var t, e = Go.layout.hierarchy().sort(wi),
            r = 0,
            u = [1, 1];
        return n.size = function(t) {
            return arguments.length ? (u = t, n) : u
        }, n.radius = function(e) {
            return arguments.length ? (t = null == e || "function" == typeof e ? e : +e, n) : t
        }, n.padding = function(t) {
            return arguments.length ? (r = +t, n) : r
        }, Wu(n, e)
    }, Go.layout.cluster = function() {
        function n(n, i) {
            var o, a = t.call(this, n, i),
                c = a[0],
                s = 0;
            xi(c, function(n) {
                var t = n.children;
                t && t.length ? (n.x = zi(t), n.y = qi(t)) : (n.x = o ? s += e(n, o) : 0, n.y = 0, o = n)
            });
            var l = Ri(c),
                f = Di(c),
                h = l.x - e(l, f) / 2,
                g = f.x + e(f, l) / 2;
            return xi(c, u ? function(n) {
                n.x = (n.x - c.x) * r[0], n.y = (c.y - n.y) * r[1]
            } : function(n) {
                n.x = (n.x - h) / (g - h) * r[0], n.y = (1 - (c.y ? n.y / c.y : 1)) * r[1]
            }), a
        }
        var t = Go.layout.hierarchy().sort(null).value(null),
            e = hi,
            r = [1, 1],
            u = !1;
        return n.separation = function(t) {
            return arguments.length ? (e = t, n) : e
        }, n.size = function(t) {
            return arguments.length ? (u = null == (r = t), n) : u ? null : r
        }, n.nodeSize = function(t) {
            return arguments.length ? (u = null != (r = t), n) : u ? r : null
        }, Wu(n, t)
    }, Go.layout.treemap = function() {
        function n(n, t) {
            for (var e, r, u = -1, i = n.length; ++u < i;) r = (e = n[u]).value * (0 > t ? 0 : t), e.area = isNaN(r) || 0 >= r ? 0 : r
        }

        function t(e) {
            var i = e.children;
            if (i && i.length) {
                var o, a, c, s = f(e),
                    l = [],
                    h = i.slice(),
                    p = 1 / 0,
                    v = "slice" === g ? s.dx : "dice" === g ? s.dy : "slice-dice" === g ? 1 & e.depth ? s.dy : s.dx : Math.min(s.dx, s.dy);
                for (n(h, s.dx * s.dy / e.value), l.area = 0;
                    (c = h.length) > 0;) l.push(o = h[c - 1]), l.area += o.area, "squarify" !== g || (a = r(l, v)) <= p ? (h.pop(), p = a) : (l.area -= l.pop().area, u(l, v, s, !1), v = Math.min(s.dx, s.dy), l.length = l.area = 0, p = 1 / 0);
                l.length && (u(l, v, s, !0), l.length = l.area = 0), i.forEach(t)
            }
        }

        function e(t) {
            var r = t.children;
            if (r && r.length) {
                var i, o = f(t),
                    a = r.slice(),
                    c = [];
                for (n(a, o.dx * o.dy / t.value), c.area = 0; i = a.pop();) c.push(i), c.area += i.area, null != i.z && (u(c, i.z ? o.dx : o.dy, o, !a.length), c.length = c.area = 0);
                r.forEach(e)
            }
        }

        function r(n, t) {
            for (var e, r = n.area, u = 0, i = 1 / 0, o = -1, a = n.length; ++o < a;)(e = n[o].area) && (i > e && (i = e), e > u && (u = e));
            return r *= r, t *= t, r ? Math.max(t * u * p / r, r / (t * i * p)) : 1 / 0
        }

        function u(n, t, e, r) {
            var u, i = -1,
                o = n.length,
                a = e.x,
                s = e.y,
                l = t ? c(n.area / t) : 0;
            if (t == e.dx) {
                for ((r || l > e.dy) && (l = e.dy); ++i < o;) u = n[i], u.x = a, u.y = s, u.dy = l, a += u.dx = Math.min(e.x + e.dx - a, l ? c(u.area / l) : 0);
                u.z = !0, u.dx += e.x + e.dx - a, e.y += l, e.dy -= l
            } else {
                for ((r || l > e.dx) && (l = e.dx); ++i < o;) u = n[i], u.x = a, u.y = s, u.dx = l, s += u.dy = Math.min(e.y + e.dy - s, l ? c(u.area / l) : 0);
                u.z = !1, u.dy += e.y + e.dy - s, e.x += l, e.dx -= l
            }
        }

        function i(r) {
            var u = o || a(r),
                i = u[0];
            return i.x = 0, i.y = 0, i.dx = s[0], i.dy = s[1], o && a.revalue(i), n([i], i.dx * i.dy / i.value), (o ? e : t)(i), h && (o = u), u
        }
        var o, a = Go.layout.hierarchy(),
            c = Math.round,
            s = [1, 1],
            l = null,
            f = Pi,
            h = !1,
            g = "squarify",
            p = .5 * (1 + Math.sqrt(5));
        return i.size = function(n) {
            return arguments.length ? (s = n, i) : s
        }, i.padding = function(n) {
            function t(t) {
                var e = n.call(i, t, t.depth);
                return null == e ? Pi(t) : Ui(t, "number" == typeof e ? [e, e, e, e] : e)
            }

            function e(t) {
                return Ui(t, n)
            }
            if (!arguments.length) return l;
            var r;
            return f = null == (l = n) ? Pi : "function" == (r = typeof n) ? t : "number" === r ? (n = [n, n, n, n], e) : e, i
        }, i.round = function(n) {
            return arguments.length ? (c = n ? Math.round : Number, i) : c != Number
        }, i.sticky = function(n) {
            return arguments.length ? (h = n, o = null, i) : h
        }, i.ratio = function(n) {
            return arguments.length ? (p = n, i) : p
        }, i.mode = function(n) {
            return arguments.length ? (g = n + "", i) : g
        }, Wu(i, a)
    }, Go.random = {
        normal: function(n, t) {
            var e = arguments.length;
            return 2 > e && (t = 1), 1 > e && (n = 0),
            function() {
                var e, r, u;
                do e = 2 * Math.random() - 1, r = 2 * Math.random() - 1, u = e * e + r * r; while (!u || u > 1);
                return n + t * e * Math.sqrt(-2 * Math.log(u) / u)
            }
        },
        logNormal: function() {
            var n = Go.random.normal.apply(Go, arguments);
            return function() {
                return Math.exp(n())
            }
        },
        bates: function(n) {
            var t = Go.random.irwinHall(n);
            return function() {
                return t() / n
            }
        },
        irwinHall: function(n) {
            return function() {
                for (var t = 0, e = 0; n > e; e++) t += Math.random();
                return t
            }
        }
    }, Go.scale = {};
    var vs = {
        floor: Nt,
        ceil: Nt
    };
    Go.scale.linear = function() {
        return Zi([0, 1], [0, 1], du, !1)
    };
    var ds = {
        s: 1,
        g: 1,
        p: 1,
        r: 1,
        e: 1
    };
    Go.scale.log = function() {
        return Ki(Go.scale.linear().domain([0, 1]), 10, !0, [1, 10])
    };
    var ms = Go.format(".0e"),
        ys = {
            floor: function(n) {
                return -Math.ceil(-n)
            },
            ceil: function(n) {
                return -Math.floor(-n)
            }
        };
    Go.scale.pow = function() {
        return Qi(Go.scale.linear(), 1, [0, 1])
    }, Go.scale.sqrt = function() {
        return Go.scale.pow().exponent(.5)
    }, Go.scale.ordinal = function() {
        return to([], {
            t: "range",
            a: [
                []
            ]
        })
    }, Go.scale.category10 = function() {
        return Go.scale.ordinal().range(xs)
    }, Go.scale.category20 = function() {
        return Go.scale.ordinal().range(Ms)
    }, Go.scale.category20b = function() {
        return Go.scale.ordinal().range(_s)
    }, Go.scale.category20c = function() {
        return Go.scale.ordinal().range(bs)
    };
    var xs = [2062260, 16744206, 2924588, 14034728, 9725885, 9197131, 14907330, 8355711, 12369186, 1556175].map(mt),
        Ms = [2062260, 11454440, 16744206, 16759672, 2924588, 10018698, 14034728, 16750742, 9725885, 12955861, 9197131, 12885140, 14907330, 16234194, 8355711, 13092807, 12369186, 14408589, 1556175, 10410725].map(mt),
        _s = [3750777, 5395619, 7040719, 10264286, 6519097, 9216594, 11915115, 13556636, 9202993, 12426809, 15186514, 15190932, 8666169, 11356490, 14049643, 15177372, 8077683, 10834324, 13528509, 14589654].map(mt),
        bs = [3244733, 7057110, 10406625, 13032431, 15095053, 16616764, 16625259, 16634018, 3253076, 7652470, 10607003, 13101504, 7695281, 10394312, 12369372, 14342891, 6513507, 9868950, 12434877, 14277081].map(mt);
    Go.scale.quantile = function() {
        return eo([], [])
    }, Go.scale.quantize = function() {
        return ro(0, 1, [0, 1])
    }, Go.scale.threshold = function() {
        return uo([.5], [0, 1])
    }, Go.scale.identity = function() {
        return io([0, 1])
    }, Go.svg = {}, Go.svg.arc = function() {
        function n() {
            var n = t.apply(this, arguments),
                i = e.apply(this, arguments),
                o = r.apply(this, arguments) + ws,
                a = u.apply(this, arguments) + ws,
                c = (o > a && (c = o, o = a, a = c), a - o),
                s = Aa > c ? "0" : "1",
                l = Math.cos(o),
                f = Math.sin(o),
                h = Math.cos(a),
                g = Math.sin(a);
            return c >= Ss ? n ? "M0," + i + "A" + i + "," + i + " 0 1,1 0," + -i + "A" + i + "," + i + " 0 1,1 0," + i + "M0," + n + "A" + n + "," + n + " 0 1,0 0," + -n + "A" + n + "," + n + " 0 1,0 0," + n + "Z" : "M0," + i + "A" + i + "," + i + " 0 1,1 0," + -i + "A" + i + "," + i + " 0 1,1 0," + i + "Z" : n ? "M" + i * l + "," + i * f + "A" + i + "," + i + " 0 " + s + ",1 " + i * h + "," + i * g + "L" + n * h + "," + n * g + "A" + n + "," + n + " 0 " + s + ",0 " + n * l + "," + n * f + "Z" : "M" + i * l + "," + i * f + "A" + i + "," + i + " 0 " + s + ",1 " + i * h + "," + i * g + "L0,0" + "Z"
        }
        var t = oo,
            e = ao,
            r = co,
            u = so;
        return n.innerRadius = function(e) {
            return arguments.length ? (t = Et(e), n) : t
        }, n.outerRadius = function(t) {
            return arguments.length ? (e = Et(t), n) : e
        }, n.startAngle = function(t) {
            return arguments.length ? (r = Et(t), n) : r
        }, n.endAngle = function(t) {
            return arguments.length ? (u = Et(t), n) : u
        }, n.centroid = function() {
            var n = (t.apply(this, arguments) + e.apply(this, arguments)) / 2,
                i = (r.apply(this, arguments) + u.apply(this, arguments)) / 2 + ws;
            return [Math.cos(i) * n, Math.sin(i) * n]
        }, n
    };
    var ws = -La,
        Ss = Ca - Ta;
    Go.svg.line = function() {
        return lo(Nt)
    };
    var ks = Go.map({
        linear: fo,
        "linear-closed": ho,
        step: go,
        "step-before": po,
        "step-after": vo,
        basis: bo,
        "basis-open": wo,
        "basis-closed": So,
        bundle: ko,
        cardinal: xo,
        "cardinal-open": mo,
        "cardinal-closed": yo,
        monotone: To
    });
    ks.forEach(function(n, t) {
        t.key = n, t.closed = /-closed$/.test(n)
    });
    var Es = [0, 2 / 3, 1 / 3, 0],
        Ns = [0, 1 / 3, 2 / 3, 0],
        As = [0, 1 / 6, 2 / 3, 1 / 6];
    Go.svg.line.radial = function() {
        var n = lo(qo);
        return n.radius = n.x, delete n.x, n.angle = n.y, delete n.y, n
    }, po.reverse = vo, vo.reverse = po, Go.svg.area = function() {
        return zo(Nt)
    }, Go.svg.area.radial = function() {
        var n = zo(qo);
        return n.radius = n.x, delete n.x, n.innerRadius = n.x0, delete n.x0, n.outerRadius = n.x1, delete n.x1, n.angle = n.y, delete n.y, n.startAngle = n.y0, delete n.y0, n.endAngle = n.y1, delete n.y1, n
    }, Go.svg.chord = function() {
        function n(n, a) {
            var c = t(this, i, n, a),
                s = t(this, o, n, a);
            return "M" + c.p0 + r(c.r, c.p1, c.a1 - c.a0) + (e(c, s) ? u(c.r, c.p1, c.r, c.p0) : u(c.r, c.p1, s.r, s.p0) + r(s.r, s.p1, s.a1 - s.a0) + u(s.r, s.p1, c.r, c.p0)) + "Z"
        }

        function t(n, t, e, r) {
            var u = t.call(n, e, r),
                i = a.call(n, u, r),
                o = c.call(n, u, r) + ws,
                l = s.call(n, u, r) + ws;
            return {
                r: i,
                a0: o,
                a1: l,
                p0: [i * Math.cos(o), i * Math.sin(o)],
                p1: [i * Math.cos(l), i * Math.sin(l)]
            }
        }

        function e(n, t) {
            return n.a0 == t.a0 && n.a1 == t.a1
        }

        function r(n, t, e) {
            return "A" + n + "," + n + " 0 " + +(e > Aa) + ",1 " + t
        }

        function u(n, t, e, r) {
            return "Q 0,0 " + r
        }
        var i = mr,
            o = yr,
            a = Ro,
            c = co,
            s = so;
        return n.radius = function(t) {
            return arguments.length ? (a = Et(t), n) : a
        }, n.source = function(t) {
            return arguments.length ? (i = Et(t), n) : i
        }, n.target = function(t) {
            return arguments.length ? (o = Et(t), n) : o
        }, n.startAngle = function(t) {
            return arguments.length ? (c = Et(t), n) : c
        }, n.endAngle = function(t) {
            return arguments.length ? (s = Et(t), n) : s
        }, n
    }, Go.svg.diagonal = function() {
        function n(n, u) {
            var i = t.call(this, n, u),
                o = e.call(this, n, u),
                a = (i.y + o.y) / 2,
                c = [i, {
                        x: i.x,
                        y: a
                    }, {
                        x: o.x,
                        y: a
                    },
                    o
                ];
            return c = c.map(r), "M" + c[0] + "C" + c[1] + " " + c[2] + " " + c[3]
        }
        var t = mr,
            e = yr,
            r = Do;
        return n.source = function(e) {
            return arguments.length ? (t = Et(e), n) : t
        }, n.target = function(t) {
            return arguments.length ? (e = Et(t), n) : e
        }, n.projection = function(t) {
            return arguments.length ? (r = t, n) : r
        }, n
    }, Go.svg.diagonal.radial = function() {
        var n = Go.svg.diagonal(),
            t = Do,
            e = n.projection;
        return n.projection = function(n) {
            return arguments.length ? e(Po(t = n)) : t
        }, n
    }, Go.svg.symbol = function() {
        function n(n, r) {
            return (Cs.get(t.call(this, n, r)) || Ho)(e.call(this, n, r))
        }
        var t = jo,
            e = Uo;
        return n.type = function(e) {
            return arguments.length ? (t = Et(e), n) : t
        }, n.size = function(t) {
            return arguments.length ? (e = Et(t), n) : e
        }, n
    };
    var Cs = Go.map({
        circle: Ho,
        cross: function(n) {
            var t = Math.sqrt(n / 5) / 2;
            return "M" + -3 * t + "," + -t + "H" + -t + "V" + -3 * t + "H" + t + "V" + -t + "H" + 3 * t + "V" + t + "H" + t + "V" + 3 * t + "H" + -t + "V" + t + "H" + -3 * t + "Z"
        },
        diamond: function(n) {
            var t = Math.sqrt(n / (2 * zs)),
                e = t * zs;
            return "M0," + -t + "L" + e + ",0" + " 0," + t + " " + -e + ",0" + "Z"
        },
        square: function(n) {
            var t = Math.sqrt(n) / 2;
            return "M" + -t + "," + -t + "L" + t + "," + -t + " " + t + "," + t + " " + -t + "," + t + "Z"
        },
        "triangle-down": function(n) {
            var t = Math.sqrt(n / qs),
                e = t * qs / 2;
            return "M0," + e + "L" + t + "," + -e + " " + -t + "," + -e + "Z"
        },
        "triangle-up": function(n) {
            var t = Math.sqrt(n / qs),
                e = t * qs / 2;
            return "M0," + -e + "L" + t + "," + e + " " + -t + "," + e + "Z"
        }
    });
    Go.svg.symbolTypes = Cs.keys();
    var Ls, Ts, qs = Math.sqrt(3),
        zs = Math.tan(30 * za),
        Rs = [],
        Ds = 0;
    Rs.call = _a.call, Rs.empty = _a.empty, Rs.node = _a.node, Rs.size = _a.size, Go.transition = function(n) {
        return arguments.length ? Ls ? n.transition() : n : Sa.transition()
    }, Go.transition.prototype = Rs, Rs.select = function(n) {
        var t, e, r, u = this.id,
            i = [];
        n = b(n);
        for (var o = -1, a = this.length; ++o < a;) {
            i.push(t = []);
            for (var c = this[o], s = -1, l = c.length; ++s < l;)(r = c[s]) && (e = n.call(r, r.__data__, s, o)) ? ("__data__" in r && (e.__data__ = r.__data__), Yo(e, s, u, r.__transition__[u]), t.push(e)) : t.push(null)
        }
        return Fo(i, u)
    }, Rs.selectAll = function(n) {
        var t, e, r, u, i, o = this.id,
            a = [];
        n = w(n);
        for (var c = -1, s = this.length; ++c < s;)
            for (var l = this[c], f = -1, h = l.length; ++f < h;)
                if (r = l[f]) {
                    i = r.__transition__[o], e = n.call(r, r.__data__, f, c), a.push(t = []);
                    for (var g = -1, p = e.length; ++g < p;)(u = e[g]) && Yo(u, g, o, i), t.push(u)
                }
        return Fo(a, o)
    }, Rs.filter = function(n) {
        var t, e, r, u = [];
        "function" != typeof n && (n = R(n));
        for (var i = 0, o = this.length; o > i; i++) {
            u.push(t = []);
            for (var e = this[i], a = 0, c = e.length; c > a; a++)(r = e[a]) && n.call(r, r.__data__, a, i) && t.push(r)
        }
        return Fo(u, this.id)
    }, Rs.tween = function(n, t) {
        var e = this.id;
        return arguments.length < 2 ? this.node().__transition__[e].tween.get(n) : P(this, null == t ? function(t) {
            t.__transition__[e].tween.remove(n)
        } : function(r) {
            r.__transition__[e].tween.set(n, t)
        })
    }, Rs.attr = function(n, t) {
        function e() {
            this.removeAttribute(a)
        }

        function r() {
            this.removeAttributeNS(a.space, a.local)
        }

        function u(n) {
            return null == n ? e : (n += "", function() {
                var t, e = this.getAttribute(a);
                return e !== n && (t = o(e, n), function(n) {
                    this.setAttribute(a, t(n))
                })
            })
        }

        function i(n) {
            return null == n ? r : (n += "", function() {
                var t, e = this.getAttributeNS(a.space, a.local);
                return e !== n && (t = o(e, n), function(n) {
                    this.setAttributeNS(a.space, a.local, t(n))
                })
            })
        }
        if (arguments.length < 2) {
            for (t in n) this.attr(t, n[t]);
            return this
        }
        var o = "transform" == n ? Hu : du,
            a = Go.ns.qualify(n);
        return Oo(this, "attr." + n, t, a.local ? i : u)
    }, Rs.attrTween = function(n, t) {
        function e(n, e) {
            var r = t.call(this, n, e, this.getAttribute(u));
            return r && function(n) {
                this.setAttribute(u, r(n))
            }
        }

        function r(n, e) {
            var r = t.call(this, n, e, this.getAttributeNS(u.space, u.local));
            return r && function(n) {
                this.setAttributeNS(u.space, u.local, r(n))
            }
        }
        var u = Go.ns.qualify(n);
        return this.tween("attr." + n, u.local ? r : e)
    }, Rs.style = function(n, t, e) {
        function r() {
            this.style.removeProperty(n)
        }

        function u(t) {
            return null == t ? r : (t += "", function() {
                var r, u = ea.getComputedStyle(this, null).getPropertyValue(n);
                return u !== t && (r = du(u, t), function(t) {
                    this.style.setProperty(n, r(t), e)
                })
            })
        }
        var i = arguments.length;
        if (3 > i) {
            if ("string" != typeof n) {
                2 > i && (t = "");
                for (e in n) this.style(e, n[e], t);
                return this
            }
            e = ""
        }
        return Oo(this, "style." + n, t, u)
    }, Rs.styleTween = function(n, t, e) {
        function r(r, u) {
            var i = t.call(this, r, u, ea.getComputedStyle(this, null).getPropertyValue(n));
            return i && function(t) {
                this.style.setProperty(n, i(t), e)
            }
        }
        return arguments.length < 3 && (e = ""), this.tween("style." + n, r)
    }, Rs.text = function(n) {
        return Oo(this, "text", n, Io)
    }, Rs.remove = function() {
        return this.each("end.transition", function() {
            var n;
            this.__transition__.count < 2 && (n = this.parentNode) && n.removeChild(this)
        })
    }, Rs.ease = function(n) {
        var t = this.id;
        return arguments.length < 1 ? this.node().__transition__[t].ease : ("function" != typeof n && (n = Go.ease.apply(Go, arguments)), P(this, function(e) {
            e.__transition__[t].ease = n
        }))
    }, Rs.delay = function(n) {
        var t = this.id;
        return arguments.length < 1 ? this.node().__transition__[t].delay : P(this, "function" == typeof n ? function(e, r, u) {
            e.__transition__[t].delay = +n.call(e, e.__data__, r, u)
        } : (n = +n, function(e) {
            e.__transition__[t].delay = n
        }))
    }, Rs.duration = function(n) {
        var t = this.id;
        return arguments.length < 1 ? this.node().__transition__[t].duration : P(this, "function" == typeof n ? function(e, r, u) {
            e.__transition__[t].duration = Math.max(1, n.call(e, e.__data__, r, u))
        } : (n = Math.max(1, n), function(e) {
            e.__transition__[t].duration = n
        }))
    }, Rs.each = function(n, t) {
        var e = this.id;
        if (arguments.length < 2) {
            var r = Ts,
                u = Ls;
            Ls = e, P(this, function(t, r, u) {
                Ts = t.__transition__[e], n.call(t, t.__data__, r, u)
            }), Ts = r, Ls = u
        } else P(this, function(r) {
            var u = r.__transition__[e];
            (u.event || (u.event = Go.dispatch("start", "end"))).on(n, t)
        });
        return this
    }, Rs.transition = function() {
        for (var n, t, e, r, u = this.id, i = ++Ds, o = [], a = 0, c = this.length; c > a; a++) {
            o.push(n = []);
            for (var t = this[a], s = 0, l = t.length; l > s; s++)(e = t[s]) && (r = Object.create(e.__transition__[u]), r.delay += r.duration, Yo(e, s, i, r)), n.push(e)
        }
        return Fo(o, i)
    }, Go.svg.axis = function() {
        function n(n) {
            n.each(function() {
                var n, s = Go.select(this),
                    l = this.__chart__ || e,
                    f = this.__chart__ = e.copy(),
                    h = null == c ? f.ticks ? f.ticks.apply(f, a) : f.domain() : c,
                    g = null == t ? f.tickFormat ? f.tickFormat.apply(f, a) : Nt : t,
                    p = s.selectAll(".tick").data(h, f),
                    v = p.enter().insert("g", ".domain").attr("class", "tick").style("opacity", Ta),
                    d = Go.transition(p.exit()).style("opacity", Ta).remove(),
                    m = Go.transition(p.order()).style("opacity", 1),
                    y = Hi(f),
                    x = s.selectAll(".domain").data([0]),
                    M = (x.enter().append("path").attr("class", "domain"), Go.transition(x));
                v.append("line"), v.append("text");
                var _ = v.select("line"),
                    b = m.select("line"),
                    w = p.select("text").text(g),
                    S = v.select("text"),
                    k = m.select("text");
                switch (r) {
                    case "bottom":
                        n = Zo, _.attr("y2", u), S.attr("y", Math.max(u, 0) + o), b.attr("x2", 0).attr("y2", u), k.attr("x", 0).attr("y", Math.max(u, 0) + o), w.attr("dy", ".71em").style("text-anchor", "middle"), M.attr("d", "M" + y[0] + "," + i + "V0H" + y[1] + "V" + i);
                        break;
                    case "top":
                        n = Zo, _.attr("y2", -u), S.attr("y", -(Math.max(u, 0) + o)), b.attr("x2", 0).attr("y2", -u), k.attr("x", 0).attr("y", -(Math.max(u, 0) + o)), w.attr("dy", "0em").style("text-anchor", "middle"), M.attr("d", "M" + y[0] + "," + -i + "V0H" + y[1] + "V" + -i);
                        break;
                    case "left":
                        n = Vo, _.attr("x2", -u), S.attr("x", -(Math.max(u, 0) + o)), b.attr("x2", -u).attr("y2", 0), k.attr("x", -(Math.max(u, 0) + o)).attr("y", 0), w.attr("dy", ".32em").style("text-anchor", "end"), M.attr("d", "M" + -i + "," + y[0] + "H0V" + y[1] + "H" + -i);
                        break;
                    case "right":
                        n = Vo, _.attr("x2", u), S.attr("x", Math.max(u, 0) + o), b.attr("x2", u).attr("y2", 0), k.attr("x", Math.max(u, 0) + o).attr("y", 0), w.attr("dy", ".32em").style("text-anchor", "start"), M.attr("d", "M" + i + "," + y[0] + "H0V" + y[1] + "H" + i)
                }
                if (f.rangeBand) {
                    var E = f,
                        N = E.rangeBand() / 2;
                    l = f = function(n) {
                        return E(n) + N
                    }
                } else l.rangeBand ? l = f : d.call(n, f);
                v.call(n, l), m.call(n, f)
            })
        }
        var t, e = Go.scale.linear(),
            r = Ps,
            u = 6,
            i = 6,
            o = 3,
            a = [10],
            c = null;
        return n.scale = function(t) {
            return arguments.length ? (e = t, n) : e
        }, n.orient = function(t) {
            return arguments.length ? (r = t in Us ? t + "" : Ps, n) : r
        }, n.ticks = function() {
            return arguments.length ? (a = arguments, n) : a
        }, n.tickValues = function(t) {
            return arguments.length ? (c = t, n) : c
        }, n.tickFormat = function(e) {
            return arguments.length ? (t = e, n) : t
        }, n.tickSize = function(t) {
            var e = arguments.length;
            return e ? (u = +t, i = +arguments[e - 1], n) : u
        }, n.innerTickSize = function(t) {
            return arguments.length ? (u = +t, n) : u
        }, n.outerTickSize = function(t) {
            return arguments.length ? (i = +t, n) : i
        }, n.tickPadding = function(t) {
            return arguments.length ? (o = +t, n) : o
        }, n.tickSubdivide = function() {
            return arguments.length && n
        }, n
    };
    var Ps = "bottom",
        Us = {
            top: 1,
            right: 1,
            bottom: 1,
            left: 1
        };
    Go.svg.brush = function() {
        function n(i) {
            i.each(function() {
                var i = Go.select(this).style("pointer-events", "all").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)").on("mousedown.brush", u).on("touchstart.brush", u),
                    o = i.selectAll(".background").data([0]);
                o.enter().append("rect").attr("class", "background").style("visibility", "hidden").style("cursor", "crosshair"), i.selectAll(".extent").data([0]).enter().append("rect").attr("class", "extent").style("cursor", "move");
                var a = i.selectAll(".resize").data(p, Nt);
                a.exit().remove(), a.enter().append("g").attr("class", function(n) {
                    return "resize " + n
                }).style("cursor", function(n) {
                    return js[n]
                }).append("rect").attr("x", function(n) {
                    return /[ew]$/.test(n) ? -3 : null
                }).attr("y", function(n) {
                    return /^[ns]/.test(n) ? -3 : null
                }).attr("width", 6).attr("height", 6).style("visibility", "hidden"), a.style("display", n.empty() ? "none" : null);
                var l, f = Go.transition(i),
                    h = Go.transition(o);
                c && (l = Hi(c), h.attr("x", l[0]).attr("width", l[1] - l[0]), e(f)), s && (l = Hi(s), h.attr("y", l[0]).attr("height", l[1] - l[0]), r(f)), t(f)
            })
        }

        function t(n) {
            n.selectAll(".resize").attr("transform", function(n) {
                return "translate(" + l[+/e$/.test(n)] + "," + f[+/^s/.test(n)] + ")"
            })
        }

        function e(n) {
            n.select(".extent").attr("x", l[0]), n.selectAll(".extent,.n>rect,.s>rect").attr("width", l[1] - l[0])
        }

        function r(n) {
            n.select(".extent").attr("y", f[0]), n.selectAll(".extent,.e>rect,.w>rect").attr("height", f[1] - f[0])
        }

        function u() {
            function u() {
                32 == Go.event.keyCode && (A || (x = null, L[0] -= l[1], L[1] -= f[1], A = 2), y())
            }

            function p() {
                32 == Go.event.keyCode && 2 == A && (L[0] += l[1], L[1] += f[1], A = 0, y())
            }

            function v() {
                var n = Go.mouse(_),
                    u = !1;
                M && (n[0] += M[0], n[1] += M[1]), A || (Go.event.altKey ? (x || (x = [(l[0] + l[1]) / 2, (f[0] + f[1]) / 2]), L[0] = l[+(n[0] < x[0])], L[1] = f[+(n[1] < x[1])]) : x = null), E && d(n, c, 0) && (e(S), u = !0), N && d(n, s, 1) && (r(S), u = !0), u && (t(S), w({
                    type: "brush",
                    mode: A ? "move" : "resize"
                }))
            }

            function d(n, t, e) {
                var r, u, a = Hi(t),
                    c = a[0],
                    s = a[1],
                    p = L[e],
                    v = e ? f : l,
                    d = v[1] - v[0];
                return A && (c -= p, s -= d + p), r = (e ? g : h) ? Math.max(c, Math.min(s, n[e])) : n[e], A ? u = (r += p) + d : (x && (p = Math.max(c, Math.min(s, 2 * x[e] - r))), r > p ? (u = r, r = p) : u = p), v[0] != r || v[1] != u ? (e ? o = null : i = null, v[0] = r, v[1] = u, !0) : void 0
            }

            function m() {
                v(), S.style("pointer-events", "all").selectAll(".resize").style("display", n.empty() ? "none" : null), Go.select("body").style("cursor", null), T.on("mousemove.brush", null).on("mouseup.brush", null).on("touchmove.brush", null).on("touchend.brush", null).on("keydown.brush", null).on("keyup.brush", null), C(), w({
                    type: "brushend"
                })
            }
            var x, M, _ = this,
                b = Go.select(Go.event.target),
                w = a.of(_, arguments),
                S = Go.select(_),
                k = b.datum(),
                E = !/^(n|s)$/.test(k) && c,
                N = !/^(e|w)$/.test(k) && s,
                A = b.classed("extent"),
                C = Y(),
                L = Go.mouse(_),
                T = Go.select(ea).on("keydown.brush", u).on("keyup.brush", p);
            if (Go.event.changedTouches ? T.on("touchmove.brush", v).on("touchend.brush", m) : T.on("mousemove.brush", v).on("mouseup.brush", m), S.interrupt().selectAll("*").interrupt(), A) L[0] = l[0] - L[0], L[1] = f[0] - L[1];
            else if (k) {
                var q = +/w$/.test(k),
                    z = +/^n/.test(k);
                M = [l[1 - q] - L[0], f[1 - z] - L[1]], L[0] = l[q], L[1] = f[z]
            } else Go.event.altKey && (x = L.slice());
            S.style("pointer-events", "none").selectAll(".resize").style("display", null), Go.select("body").style("cursor", b.style("cursor")), w({
                type: "brushstart"
            }), v()
        }
        var i, o, a = M(n, "brushstart", "brush", "brushend"),
            c = null,
            s = null,
            l = [0, 0],
            f = [0, 0],
            h = !0,
            g = !0,
            p = Hs[0];
        return n.event = function(n) {
            n.each(function() {
                var n = a.of(this, arguments),
                    t = {
                        x: l,
                        y: f,
                        i: i,
                        j: o
                    }, e = this.__chart__ || t;
                this.__chart__ = t, Ls ? Go.select(this).transition().each("start.brush", function() {
                    i = e.i, o = e.j, l = e.x, f = e.y, n({
                        type: "brushstart"
                    })
                }).tween("brush:brush", function() {
                    var e = mu(l, t.x),
                        r = mu(f, t.y);
                    return i = o = null,
                    function(u) {
                        l = t.x = e(u), f = t.y = r(u), n({
                            type: "brush",
                            mode: "resize"
                        })
                    }
                }).each("end.brush", function() {
                    i = t.i, o = t.j, n({
                        type: "brush",
                        mode: "resize"
                    }), n({
                        type: "brushend"
                    })
                }) : (n({
                    type: "brushstart"
                }), n({
                    type: "brush",
                    mode: "resize"
                }), n({
                    type: "brushend"
                }))
            })
        }, n.x = function(t) {
            return arguments.length ? (c = t, p = Hs[!c << 1 | !s], n) : c
        }, n.y = function(t) {
            return arguments.length ? (s = t, p = Hs[!c << 1 | !s], n) : s
        }, n.clamp = function(t) {
            return arguments.length ? (c && s ? (h = !! t[0], g = !! t[1]) : c ? h = !! t : s && (g = !! t), n) : c && s ? [h, g] : c ? h : s ? g : null
        }, n.extent = function(t) {
            var e, r, u, a, h;
            return arguments.length ? (c && (e = t[0], r = t[1], s && (e = e[0], r = r[0]), i = [e, r], c.invert && (e = c(e), r = c(r)), e > r && (h = e, e = r, r = h), (e != l[0] || r != l[1]) && (l = [e, r])), s && (u = t[0], a = t[1], c && (u = u[1], a = a[1]), o = [u, a], s.invert && (u = s(u), a = s(a)), u > a && (h = u, u = a, a = h), (u != f[0] || a != f[1]) && (f = [u, a])), n) : (c && (i ? (e = i[0], r = i[1]) : (e = l[0], r = l[1], c.invert && (e = c.invert(e), r = c.invert(r)), e > r && (h = e, e = r, r = h))), s && (o ? (u = o[0], a = o[1]) : (u = f[0], a = f[1], s.invert && (u = s.invert(u), a = s.invert(a)), u > a && (h = u, u = a, a = h))), c && s ? [
                [e, u],
                [r, a]
            ] : c ? [e, r] : s && [u, a])
        }, n.clear = function() {
            return n.empty() || (l = [0, 0], f = [0, 0], i = o = null), n
        }, n.empty = function() {
            return !!c && l[0] == l[1] || !! s && f[0] == f[1]
        }, Go.rebind(n, a, "on")
    };
    var js = {
        n: "ns-resize",
        e: "ew-resize",
        s: "ns-resize",
        w: "ew-resize",
        nw: "nwse-resize",
        ne: "nesw-resize",
        se: "nwse-resize",
        sw: "nesw-resize"
    }, Hs = [
            ["n", "e", "s", "w", "nw", "ne", "se", "sw"],
            ["e", "w"],
            ["n", "s"],
            []
        ],
        Fs = ic.format = fc.timeFormat,
        Os = Fs.utc,
        Is = Os("%Y-%m-%dT%H:%M:%S.%LZ");
    Fs.iso = Date.prototype.toISOString && +new Date("2000-01-01T00:00:00.000Z") ? $o : Is, $o.parse = function(n) {
        var t = new Date(n);
        return isNaN(t) ? null : t
    }, $o.toString = Is.toString, ic.second = Ht(function(n) {
        return new oc(1e3 * Math.floor(n / 1e3))
    }, function(n, t) {
        n.setTime(n.getTime() + 1e3 * Math.floor(t))
    }, function(n) {
        return n.getSeconds()
    }), ic.seconds = ic.second.range, ic.seconds.utc = ic.second.utc.range, ic.minute = Ht(function(n) {
        return new oc(6e4 * Math.floor(n / 6e4))
    }, function(n, t) {
        n.setTime(n.getTime() + 6e4 * Math.floor(t))
    }, function(n) {
        return n.getMinutes()
    }), ic.minutes = ic.minute.range, ic.minutes.utc = ic.minute.utc.range, ic.hour = Ht(function(n) {
        var t = n.getTimezoneOffset() / 60;
        return new oc(36e5 * (Math.floor(n / 36e5 - t) + t))
    }, function(n, t) {
        n.setTime(n.getTime() + 36e5 * Math.floor(t))
    }, function(n) {
        return n.getHours()
    }), ic.hours = ic.hour.range, ic.hours.utc = ic.hour.utc.range, ic.month = Ht(function(n) {
        return n = ic.day(n), n.setDate(1), n
    }, function(n, t) {
        n.setMonth(n.getMonth() + t)
    }, function(n) {
        return n.getMonth()
    }), ic.months = ic.month.range, ic.months.utc = ic.month.utc.range;
    var Ys = [1e3, 5e3, 15e3, 3e4, 6e4, 3e5, 9e5, 18e5, 36e5, 108e5, 216e5, 432e5, 864e5, 1728e5, 6048e5, 2592e6, 7776e6, 31536e6],
        Zs = [
            [ic.second, 1],
            [ic.second, 5],
            [ic.second, 15],
            [ic.second, 30],
            [ic.minute, 1],
            [ic.minute, 5],
            [ic.minute, 15],
            [ic.minute, 30],
            [ic.hour, 1],
            [ic.hour, 3],
            [ic.hour, 6],
            [ic.hour, 12],
            [ic.day, 1],
            [ic.day, 2],
            [ic.week, 1],
            [ic.month, 1],
            [ic.month, 3],
            [ic.year, 1]
        ],
        Vs = Fs.multi([
            [".%L",
                function(n) {
                    return n.getMilliseconds()
                }
            ],
            [":%S",
                function(n) {
                    return n.getSeconds()
                }
            ],
            ["%I:%M",
                function(n) {
                    return n.getMinutes()
                }
            ],
            ["%I %p",
                function(n) {
                    return n.getHours()
                }
            ],
            ["%a %d",
                function(n) {
                    return n.getDay() && 1 != n.getDate()
                }
            ],
            ["%b %d",
                function(n) {
                    return 1 != n.getDate()
                }
            ],
            ["%B",
                function(n) {
                    return n.getMonth()
                }
            ],
            ["%Y", Ne]
        ]),
        $s = {
            range: function(n, t, e) {
                return Go.range(Math.ceil(n / e) * e, +t, e).map(Bo)
            },
            floor: Nt,
            ceil: Nt
        };
    Zs.year = ic.year, ic.scale = function() {
        return Xo(Go.scale.linear(), Zs, Vs)
    };
    var Xs = Zs.map(function(n) {
        return [n[0].utc, n[1]]
    }),
        Bs = Os.multi([
            [".%L",
                function(n) {
                    return n.getUTCMilliseconds()
                }
            ],
            [":%S",
                function(n) {
                    return n.getUTCSeconds()
                }
            ],
            ["%I:%M",
                function(n) {
                    return n.getUTCMinutes()
                }
            ],
            ["%I %p",
                function(n) {
                    return n.getUTCHours()
                }
            ],
            ["%a %d",
                function(n) {
                    return n.getUTCDay() && 1 != n.getUTCDate()
                }
            ],
            ["%b %d",
                function(n) {
                    return 1 != n.getUTCDate()
                }
            ],
            ["%B",
                function(n) {
                    return n.getUTCMonth()
                }
            ],
            ["%Y", Ne]
        ]);
    Xs.year = ic.year.utc, ic.scale.utc = function() {
        return Xo(Go.scale.linear(), Xs, Bs)
    }, Go.text = At(function(n) {
        return n.responseText
    }), Go.json = function(n, t) {
        return Ct(n, "application/json", Jo, t)
    }, Go.html = function(n, t) {
        return Ct(n, "text/html", Wo, t)
    }, Go.xml = At(function(n) {
        return n.responseXML
    }), "function" == typeof define && define.amd ? define(Go) : "object" == typeof module && module.exports ? module.exports = Go : this.d3 = Go
}();