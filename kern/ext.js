//js/polyfill/polyfill.js
var xj = new Object()
this.xj = 0
var xk = new Object()
String.prototype.trim || (String.prototype.trim = function() {
        return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
    }), Date.now = Date.now || function() {
        return +new Date
    },
    function() {
        if (void 0 === window.performance && (window.performance = {}), !window.performance.now) {
            var e = Date.now();
            performance.timing && performance.timing.navigationStart && (e = performance.timing.navigationStart), window.performance.now = function() {
                return Date.now() - e
            }
        }
    }(), String.prototype.endsWith || (String.prototype.endsWith = function(e, t) {
        var n = this.toString();
        ("number" != typeof t || !isFinite(t) || Math.floor(t) !== t || t > n.length) && (t = n.length), t -= e.length;
        var o = n.indexOf(e, t);
        return -1 !== o && o === t
    }), String.prototype.startsWith || (String.prototype.startsWith = function(e, t) {
        return t = t || 0, this.substr(t, e.length) === e
    }),
    function() {
        "use strict";
        for (var e = 0, t = ["ms", "moz", "webkit", "o"], n = !(!window.performance || !window.performance.now), o = 0, r = t.length; o < r && !window.requestAnimationFrame; o += 1) window.requestAnimationFrame = window[t[o] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[t[o] + "CancelAnimationFrame"] || window[t[o] + "CancelRequestAnimationFrame"];
        if (!/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent) && window.requestAnimationFrame || (window.requestAnimationFrame = function(t, n) {
                var o = (new Date).getTime(),
                    r = Math.max(0, 16 - (o - e)),
                    i = window.setTimeout(function() {
                        t(o + r)
                    }, r);
                return e = o + r, i
            }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(e) {
                clearTimeout(e)
            }), !n) {
            var i = window.requestAnimationFrame,
                a = +new Date;
            window.requestAnimationFrame = function(e, t) {
                i(function(t) {
                    return e(t < 1e12 ? t : t - a)
                }, t)
            }
        }
    }(), String.prototype.repeat || (String.prototype.repeat = function(e) {
        "use strict";
        if (null == this) throw new TypeError("can't convert " + this + " to object");
        var t = "" + this;
        if ((e = +e) != e && (e = 0), e < 0) throw new RangeError("repeat count must be non-negative");
        if (e == 1 / 0) throw new RangeError("repeat count must be less than infinity");
        if (e = Math.floor(e), 0 == t.length || 0 == e) return "";
        if (t.length * e >= 1 << 28) throw new RangeError("repeat count must not overflow maximum string size");
        for (var n = ""; 1 == (1 & e) && (n += t), 0 != (e >>>= 1);) t += t;
        return n
    }),
    function(e) {
        "use strict";
        e.console = e.console || {};
        for (var t, n, o = e.console, r = {}, i = function() {}, a = "memory".split(","), s = "assert,clear,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profiles,profileEnd,show,table,time,timeEnd,timeline,timelineEnd,timeStamp,trace,warn".split(","); t = a.pop();) o[t] = o[t] || r;
        for (; n = s.pop();) o[n] = o[n] || i
    }("undefined" == typeof window ? this : window), Object.assign || Object.defineProperty(Object, "assign", {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: function(e) {
            "use strict";
            if (void 0 === e || null === e) throw new TypeError("Cannot convert first argument to object");
            for (var t = Object(e), n = 1; n < arguments.length; n++) {
                var o = arguments[n];
                if (void 0 !== o && null !== o) {
                    o = Object(o);
                    for (var r = Object.keys(o), i = 0, a = r.length; i < a; i++) {
                        var s = r[i],
                            c = Object.getOwnPropertyDescriptor(o, s);
                        void 0 !== c && c.enumerable && (t[s] = o[s])
                    }
                }
            }
            return t
        }
    }),
    function(e, t) {
        "use strict";

        function n(e) {
            "function" != typeof e && (e = new Function("" + e));
            for (var t = new Array(arguments.length - 1), n = 0; n < t.length; n++) t[n] = arguments[n + 1];
            var o = {
                callback: e,
                args: t
            };
            return c[s] = o, a(s), s++
        }

        function o(e) {
            delete c[e]
        }

        function r(e) {
            var n = e.callback,
                o = e.args;
            switch (o.length) {
                case 0:
                    n();
                    break;
                case 1:
                    n(o[0]);
                    break;
                case 2:
                    n(o[0], o[1]);
                    break;
                case 3:
                    n(o[0], o[1], o[2]);
                    break;
                default:
                    n.apply(t, o)
            }
        }

        function i(e) {
            if (u) setTimeout(i, 0, e);
            else {
                var t = c[e];
                if (t) {
                    u = !0;
                    try {
                        r(t)
                    } finally {
                        o(e), u = !1
                    }
                }
            }
        }
        if (!e.setImmediate) {
            var a, s = 1,
                c = {},
                u = !1,
                f = e.document,
                m = Object.getPrototypeOf && Object.getPrototypeOf(e);
            m = m && m.setTimeout ? m : e, "[object process]" === {}.toString.call(e.process) ? function() {
                a = function(e) {
                    process.nextTick(function() {
                        i(e)
                    })
                }
            }() : function() {
                if (e.postMessage && !e.importScripts) {
                    var t = !0,
                        n = e.onmessage;
                    return e.onmessage = function() {
                        t = !1
                    }, e.postMessage("", "*"), e.onmessage = n, t
                }
            }() ? function() {
                var t = "setImmediate$" + Math.random() + "$",
                    n = function(n) {
                        n.source === e && "string" == typeof n.data && 0 === n.data.indexOf(t) && i(+n.data.slice(t.length))
                    };
                e.addEventListener ? e.addEventListener("message", n, !1) : e.attachEvent("onmessage", n), a = function(n) {
                    e.postMessage(t + n, "*")
                }
            }() : e.MessageChannel ? function() {
                var e = new MessageChannel;
                e.port1.onmessage = function(e) {
                    i(e.data)
                }, a = function(t) {
                    e.port2.postMessage(t)
                }
            }() : f && "onreadystatechange" in f.createElement("script") ? function() {
                var e = f.documentElement;
                a = function(t) {
                    var n = f.createElement("script");
                    n.onreadystatechange = function() {
                        i(t), n.onreadystatechange = null, e.removeChild(n), n = null
                    }, e.appendChild(n)
                }
            }() : function() {
                a = function(e) {
                    setTimeout(i, 0, e)
                }
            }(), m.setImmediate = n, m.clearImmediate = o
        }
    }("undefined" == typeof self ? "undefined" == typeof global ? this : global : self);
//os/vendor/localforage.js
! function(e) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = e();
    else if ("function" == typeof define && define.amd) define([], e);
    else {
        ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).localforage = e()
    }
}(function() {
    return function e(t, n, r) {
        function o(a, u) {
            if (!n[a]) {
                if (!t[a]) {
                    var c = "function" == typeof require && require;
                    if (!u && c) return c(a, !0);
                    if (i) return i(a, !0);
                    var f = new Error("Cannot find module '" + a + "'");
                    throw f.code = "MODULE_NOT_FOUND", f
                }
                var s = n[a] = {
                    exports: {}
                };
                t[a][0].call(s.exports, function(e) {
                    var n = t[a][1][e];
                    return o(n || e)
                }, s, s.exports, e, t, n, r)
            }
            return n[a].exports
        }
        for (var i = "function" == typeof require && require, a = 0; a < r.length; a++) o(r[a]);
        return o
    }({
        1: [function(e, t, n) {
            (function(e) {
                "use strict";

                function n() {
                    s = !0;
                    for (var e, t, n = l.length; n;) {
                        for (t = l, l = [], e = -1; ++e < n;) t[e]();
                        n = l.length
                    }
                    s = !1
                }

                function r(e) {
                    1 !== l.push(e) || s || o()
                }
                var o, i = e.MutationObserver || e.WebKitMutationObserver;
                if (i) {
                    var a = 0,
                        u = new i(n),
                        c = e.document.createTextNode("");
                    u.observe(c, {
                        characterData: !0
                    }), o = function() {
                        c.data = a = ++a % 2
                    }
                } else if (e.setImmediate || void 0 === e.MessageChannel) o = "document" in e && "onreadystatechange" in e.document.createElement("script") ? function() {
                    var t = e.document.createElement("script");
                    t.onreadystatechange = function() {
                        n(), t.onreadystatechange = null, t.parentNode.removeChild(t), t = null
                    }, e.document.documentElement.appendChild(t)
                } : function() {
                    setTimeout(n, 0)
                };
                else {
                    var f = new e.MessageChannel;
                    f.port1.onmessage = n, o = function() {
                        f.port2.postMessage(0)
                    }
                }
                var s, l = [];
                t.exports = r
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {}],
        2: [function(e, t, n) {
            "use strict";

            function r() {}

            function o(e) {
                if ("function" != typeof e) throw new TypeError("resolver must be a function");
                this.state = g, this.queue = [], this.outcome = void 0, e !== r && c(this, e)
            }

            function i(e, t, n) {
                this.promise = e, "function" == typeof t && (this.onFulfilled = t, this.callFulfilled = this.otherCallFulfilled), "function" == typeof n && (this.onRejected = n, this.callRejected = this.otherCallRejected)
            }

            function a(e, t, n) {
                h(function() {
                    var r;
                    try {
                        r = t(n)
                    } catch (t) {
                        return y.reject(e, t)
                    }
                    r === e ? y.reject(e, new TypeError("Cannot resolve promise with itself")) : y.resolve(e, r)
                })
            }

            function u(e) {
                var t = e && e.then;
                if (e && "object" == typeof e && "function" == typeof t) return function() {
                    t.apply(e, arguments)
                }
            }

            function c(e, t) {
                function n(t) {
                    i || (i = !0, y.reject(e, t))
                }

                function r(t) {
                    i || (i = !0, y.resolve(e, t))
                }

                function o() {
                    t(r, n)
                }
                var i = !1,
                    a = f(o);
                "error" === a.status && n(a.value)
            }

            function f(e, t) {
                var n = {};
                try {
                    n.value = e(t), n.status = "success"
                } catch (e) {
                    n.status = "error", n.value = e
                }
                return n
            }

            function s(e) {
                return e instanceof this ? e : y.resolve(new this(r), e)
            }

            function l(e) {
                var t = new this(r);
                return y.reject(t, e)
            }

            function d(e) {
                var t = this;
                if ("[object Array]" !== Object.prototype.toString.call(e)) return this.reject(new TypeError("must be an array"));
                var n = e.length,
                    o = !1;
                if (!n) return this.resolve([]);
                for (var i = new Array(n), a = 0, u = -1, c = new this(r); ++u < n;) ! function(e, r) {
                    function u(e) {
                        i[r] = e, ++a !== n || o || (o = !0, y.resolve(c, i))
                    }
                    t.resolve(e).then(u, function(e) {
                        o || (o = !0, y.reject(c, e))
                    })
                }(e[u], u);
                return c
            }

            function v(e) {
                var t = this;
                if ("[object Array]" !== Object.prototype.toString.call(e)) return this.reject(new TypeError("must be an array"));
                var n = e.length,
                    o = !1;
                if (!n) return this.resolve([]);
                for (var i = -1, a = new this(r); ++i < n;) ! function(e) {
                    t.resolve(e).then(function(e) {
                        o || (o = !0, y.resolve(a, e))
                    }, function(e) {
                        o || (o = !0, y.reject(a, e))
                    })
                }(e[i]);
                return a
            }
            var h = e(1),
                y = {},
                p = ["REJECTED"],
                b = ["FULFILLED"],
                g = ["PENDING"];
            t.exports = n = o, o.prototype.catch = function(e) {
                return this.then(null, e)
            }, o.prototype.then = function(e, t) {
                if ("function" != typeof e && this.state === b || "function" != typeof t && this.state === p) return this;
                var n = new this.constructor(r);
                return this.state !== g ? a(n, this.state === b ? e : t, this.outcome) : this.queue.push(new i(n, e, t)), n
            }, i.prototype.callFulfilled = function(e) {
                y.resolve(this.promise, e)
            }, i.prototype.otherCallFulfilled = function(e) {
                a(this.promise, this.onFulfilled, e)
            }, i.prototype.callRejected = function(e) {
                y.reject(this.promise, e)
            }, i.prototype.otherCallRejected = function(e) {
                a(this.promise, this.onRejected, e)
            }, y.resolve = function(e, t) {
                var n = f(u, t);
                if ("error" === n.status) return y.reject(e, n.value);
                var r = n.value;
                if (r) c(e, r);
                else {
                    e.state = b, e.outcome = t;
                    for (var o = -1, i = e.queue.length; ++o < i;) e.queue[o].callFulfilled(t)
                }
                return e
            }, y.reject = function(e, t) {
                e.state = p, e.outcome = t;
                for (var n = -1, r = e.queue.length; ++n < r;) e.queue[n].callRejected(t);
                return e
            }, n.resolve = s, n.reject = l, n.all = d, n.race = v
        }, {
            1: 1
        }],
        3: [function(e, t, n) {
            (function(t) {
                "use strict";
                "function" != typeof t.Promise && (t.Promise = e(2))
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {
            2: 2
        }],
        4: [function(e, t, n) {
            "use strict";

            function r(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function o(e, t) {
                e = e || [], t = t || {};
                try {
                    return new Blob(e, t)
                } catch (o) {
                    if ("TypeError" !== o.name) throw o;
                    for (var n = new("undefined" != typeof BlobBuilder ? BlobBuilder : "undefined" != typeof MSBlobBuilder ? MSBlobBuilder : "undefined" != typeof MozBlobBuilder ? MozBlobBuilder : WebKitBlobBuilder), r = 0; r < e.length; r += 1) n.append(e[r]);
                    return n.getBlob(t.type)
                }
            }

            function i(e, t) {
                t && e.then(function(e) {
                    t(null, e)
                }, function(e) {
                    t(e)
                })
            }

            function a(e, t, n) {
                "function" == typeof t && e.then(t), "function" == typeof n && e.catch(n)
            }

            function u(e) {
                for (var t = e.length, n = new ArrayBuffer(t), r = new Uint8Array(n), o = 0; o < t; o++) r[o] = e.charCodeAt(o);
                return n
            }

            function c(e) {
                return new ce(function(t) {
                    var n = e.transaction(fe, de),
                        r = o([""]);
                    n.objectStore(fe).put(r, "key"), n.onabort = function(e) {
                        e.preventDefault(), e.stopPropagation(), t(!1)
                    }, n.oncomplete = function() {
                        var e = navigator.userAgent.match(/Chrome\/(\d+)/),
                            n = navigator.userAgent.match(/Edge\//);
                        t(n || !e || parseInt(e[1], 10) >= 43)
                    }
                }).catch(function() {
                    return !1
                })
            }

            function f(e) {
                return "boolean" == typeof ae ? ce.resolve(ae) : c(e).then(function(e) {
                    return ae = e
                })
            }

            function s(e) {
                var t = ue[e.name],
                    n = {};
                n.promise = new ce(function(e) {
                    n.resolve = e
                }), t.deferredOperations.push(n), t.dbReady ? t.dbReady = t.dbReady.then(function() {
                    return n.promise
                }) : t.dbReady = n.promise
            }

            function l(e) {
                var t = ue[e.name].deferredOperations.pop();
                t && t.resolve()
            }

            function d(e, t) {
                var n = ue[e.name].deferredOperations.pop();
                n && n.reject(t)
            }

            function v(e, t) {
                return new ce(function(n, r) {
                    if (e.db) {
                        if (!t) return n(e.db);
                        s(e), e.db.close()
                    }
                    var o = [e.name];
                    t && o.push(e.version);
                    var i = ie.open.apply(ie, o);
                    t && (i.onupgradeneeded = function(t) {
                        var n = i.result;
                        try {
                            n.createObjectStore(e.storeName), t.oldVersion <= 1 && n.createObjectStore(fe)
                        } catch (n) {
                            if ("ConstraintError" !== n.name) throw n;
                            console.warn('The database "' + e.name + '" has been upgraded from version ' + t.oldVersion + " to version " + t.newVersion + ', but the storage "' + e.storeName + '" already exists.')
                        }
                    }), i.onerror = function(e) {
                        e.preventDefault(), r(i.error)
                    }, i.onsuccess = function() {
                        n(i.result), l(e)
                    }
                })
            }

            function h(e) {
                return v(e, !1)
            }

            function y(e) {
                return v(e, !0)
            }

            function p(e, t) {
                if (!e.db) return !0;
                var n = !e.db.objectStoreNames.contains(e.storeName),
                    r = e.version < e.db.version,
                    o = e.version > e.db.version;
                if (r && (e.version !== t && console.warn('The database "' + e.name + "\" can't be downgraded from version " + e.db.version + " to version " + e.version + "."), e.version = e.db.version), o || n) {
                    if (n) {
                        var i = e.db.version + 1;
                        i > e.version && (e.version = i)
                    }
                    return !0
                }
                return !1
            }

            function b(e) {
                return new ce(function(t, n) {
                    var r = new FileReader;
                    r.onerror = n, r.onloadend = function(n) {
                        var r = btoa(n.target.result || "");
                        t({
                            __local_forage_encoded_blob: !0,
                            data: r,
                            type: e.type
                        })
                    }, r.readAsBinaryString(e)
                })
            }

            function g(e) {
                return o([u(atob(e.data))], {
                    type: e.type
                })
            }

            function m(e) {
                return e && e.__local_forage_encoded_blob
            }

            function _(e) {
                var t = this,
                    n = t._initReady().then(function() {
                        var e = ue[t._dbInfo.name];
                        if (e && e.dbReady) return e.dbReady
                    });
                return a(n, e, e), n
            }

            function w(e) {
                s(e);
                for (var t = ue[e.name].forages, n = 0; n < t.length; n++) t[n]._dbInfo.db && (t[n]._dbInfo.db.close(), t[n]._dbInfo.db = null);
                return v(e, !1).then(function(e) {
                    for (var n = 0; n < t.length; n++) t[n]._dbInfo.db = e
                }).catch(function(t) {
                    throw d(e, t), t
                })
            }

            function S(e, t, n) {
                try {
                    var r = e.db.transaction(e.storeName, t);
                    n(null, r)
                } catch (r) {
                    if (!e.db || "InvalidStateError" === r.name) return w(e).then(function() {
                        var r = e.db.transaction(e.storeName, t);
                        n(null, r)
                    });
                    n(r)
                }
            }

            function I(e) {
                function t() {
                    return ce.resolve()
                }
                var n = this,
                    r = {
                        db: null
                    };
                if (e)
                    for (var o in e) r[o] = e[o];
                ue || (ue = {});
                var i = ue[r.name];
                i || (i = {
                    forages: [],
                    db: null,
                    dbReady: null,
                    deferredOperations: []
                }, ue[r.name] = i), i.forages.push(n), n._initReady || (n._initReady = n.ready, n.ready = _);
                for (var a = [], u = 0; u < i.forages.length; u++) {
                    var c = i.forages[u];
                    c !== n && a.push(c._initReady().catch(t))
                }
                var f = i.forages.slice(0);
                return ce.all(a).then(function() {
                    return r.db = i.db, h(r)
                }).then(function(e) {
                    return r.db = e, p(r, n._defaultConfig.version) ? y(r) : e
                }).then(function(e) {
                    r.db = i.db = e, n._dbInfo = r;
                    for (var t = 0; t < f.length; t++) {
                        var o = f[t];
                        o !== n && (o._dbInfo.db = r.db, o._dbInfo.version = r.version)
                    }
                })
            }

            function E(e, t) {
                var n = this;
                "string" != typeof e && (console.warn(e + " used as a key, but it is not a string."), e = String(e));
                var r = new ce(function(t, r) {
                    n.ready().then(function() {
                        S(n._dbInfo, le, function(o, i) {
                            if (o) return r(o);
                            try {
                                var a = i.objectStore(n._dbInfo.storeName).get(e);
                                a.onsuccess = function() {
                                    var e = a.result;
                                    void 0 === e && (e = null), m(e) && (e = g(e)), t(e)
                                }, a.onerror = function() {
                                    r(a.error)
                                }
                            } catch (e) {
                                r(e)
                            }
                        })
                    }).catch(r)
                });
                return i(r, t), r
            }

            function A(e, t) {
                var n = this,
                    r = new ce(function(t, r) {
                        n.ready().then(function() {
                            S(n._dbInfo, le, function(o, i) {
                                if (o) return r(o);
                                try {
                                    var a = i.objectStore(n._dbInfo.storeName).openCursor(),
                                        u = 1;
                                    a.onsuccess = function() {
                                        var n = a.result;
                                        if (n) {
                                            var r = n.value;
                                            m(r) && (r = g(r));
                                            var o = e(r, n.key, u++);
                                            void 0 !== o ? t(o) : n.continue()
                                        } else t()
                                    }, a.onerror = function() {
                                        r(a.error)
                                    }
                                } catch (e) {
                                    r(e)
                                }
                            })
                        }).catch(r)
                    });
                return i(r, t), r
            }

            function D(e, t, n) {
                var r = this;
                "string" != typeof e && (console.warn(e + " used as a key, but it is not a string."), e = String(e));
                var o = new ce(function(n, o) {
                    var i;
                    r.ready().then(function() {
                        return i = r._dbInfo, "[object Blob]" === se.call(t) ? f(i.db).then(function(e) {
                            return e ? t : b(t)
                        }) : t
                    }).then(function(t) {
                        S(r._dbInfo, de, function(i, a) {
                            if (i) return o(i);
                            try {
                                var u = a.objectStore(r._dbInfo.storeName).put(t, e);
                                null === t && (t = void 0), a.oncomplete = function() {
                                    void 0 === t && (t = null), n(t)
                                }, a.onabort = a.onerror = function() {
                                    var e = u.error ? u.error : u.transaction.error;
                                    o(e)
                                }
                            } catch (e) {
                                o(e)
                            }
                        })
                    }).catch(o)
                });
                return i(o, n), o
            }

            function j(e, t) {
                var n = this;
                "string" != typeof e && (console.warn(e + " used as a key, but it is not a string."), e = String(e));
                var r = new ce(function(t, r) {
                    n.ready().then(function() {
                        S(n._dbInfo, de, function(o, i) {
                            if (o) return r(o);
                            try {
                                var a = i.objectStore(n._dbInfo.storeName).delete(e);
                                i.oncomplete = function() {
                                    t()
                                }, i.onerror = function() {
                                    r(a.error)
                                }, i.onabort = function() {
                                    var e = a.error ? a.error : a.transaction.error;
                                    r(e)
                                }
                            } catch (e) {
                                r(e)
                            }
                        })
                    }).catch(r)
                });
                return i(r, t), r
            }

            function O(e) {
                var t = this,
                    n = new ce(function(e, n) {
                        t.ready().then(function() {
                            S(t._dbInfo, de, function(r, o) {
                                if (r) return n(r);
                                try {
                                    var i = o.objectStore(t._dbInfo.storeName).clear();
                                    o.oncomplete = function() {
                                        e()
                                    }, o.onabort = o.onerror = function() {
                                        var e = i.error ? i.error : i.transaction.error;
                                        n(e)
                                    }
                                } catch (e) {
                                    n(e)
                                }
                            })
                        }).catch(n)
                    });
                return i(n, e), n
            }

            function B(e) {
                var t = this,
                    n = new ce(function(e, n) {
                        t.ready().then(function() {
                            S(t._dbInfo, le, function(r, o) {
                                if (r) return n(r);
                                try {
                                    var i = o.objectStore(t._dbInfo.storeName).count();
                                    i.onsuccess = function() {
                                        e(i.result)
                                    }, i.onerror = function() {
                                        n(i.error)
                                    }
                                } catch (e) {
                                    n(e)
                                }
                            })
                        }).catch(n)
                    });
                return i(n, e), n
            }

            function R(e, t) {
                var n = this,
                    r = new ce(function(t, r) {
                        e < 0 ? t(null) : n.ready().then(function() {
                            S(n._dbInfo, le, function(o, i) {
                                if (o) return r(o);
                                try {
                                    var a = !1,
                                        u = i.objectStore(n._dbInfo.storeName).openCursor();
                                    u.onsuccess = function() {
                                        var n = u.result;
                                        n ? 0 === e ? t(n.key) : a ? t(n.key) : (a = !0, n.advance(e)) : t(null)
                                    }, u.onerror = function() {
                                        r(u.error)
                                    }
                                } catch (e) {
                                    r(e)
                                }
                            })
                        }).catch(r)
                    });
                return i(r, t), r
            }

            function k(e) {
                var t = this,
                    n = new ce(function(e, n) {
                        t.ready().then(function() {
                            S(t._dbInfo, le, function(r, o) {
                                if (r) return n(r);
                                try {
                                    var i = o.objectStore(t._dbInfo.storeName).openCursor(),
                                        a = [];
                                    i.onsuccess = function() {
                                        var t = i.result;
                                        t ? (a.push(t.key), t.continue()) : e(a)
                                    }, i.onerror = function() {
                                        n(i.error)
                                    }
                                } catch (e) {
                                    n(e)
                                }
                            })
                        }).catch(n)
                    });
                return i(n, e), n
            }

            function x(e) {
                var t, n, r, o, i, a = .75 * e.length,
                    u = e.length,
                    c = 0;
                "=" === e[e.length - 1] && (a--, "=" === e[e.length - 2] && a--);
                var f = new ArrayBuffer(a),
                    s = new Uint8Array(f);
                for (t = 0; t < u; t += 4) n = he.indexOf(e[t]), r = he.indexOf(e[t + 1]), o = he.indexOf(e[t + 2]), i = he.indexOf(e[t + 3]), s[c++] = n << 2 | r >> 4, s[c++] = (15 & r) << 4 | o >> 2, s[c++] = (3 & o) << 6 | 63 & i;
                return f
            }

            function N(e) {
                var t, n = new Uint8Array(e),
                    r = "";
                for (t = 0; t < n.length; t += 3) r += he[n[t] >> 2], r += he[(3 & n[t]) << 4 | n[t + 1] >> 4], r += he[(15 & n[t + 1]) << 2 | n[t + 2] >> 6], r += he[63 & n[t + 2]];
                return n.length % 3 == 2 ? r = r.substring(0, r.length - 1) + "=" : n.length % 3 == 1 && (r = r.substring(0, r.length - 2) + "=="), r
            }

            function C(e, t) {
                var n = "";
                if (e && (n = ke.call(e)), e && ("[object ArrayBuffer]" === n || e.buffer && "[object ArrayBuffer]" === ke.call(e.buffer))) {
                    var r, o = be;
                    e instanceof ArrayBuffer ? (r = e, o += me) : (r = e.buffer, "[object Int8Array]" === n ? o += we : "[object Uint8Array]" === n ? o += Se : "[object Uint8ClampedArray]" === n ? o += Ie : "[object Int16Array]" === n ? o += Ee : "[object Uint16Array]" === n ? o += De : "[object Int32Array]" === n ? o += Ae : "[object Uint32Array]" === n ? o += je : "[object Float32Array]" === n ? o += Oe : "[object Float64Array]" === n ? o += Be : t(new Error("Failed to get type for BinaryArray"))), t(o + N(r))
                } else if ("[object Blob]" === n) {
                    var i = new FileReader;
                    i.onload = function() {
                        var n = ye + e.type + "~" + N(this.result);
                        t(be + _e + n)
                    }, i.readAsArrayBuffer(e)
                } else try {
                    t(JSON.stringify(e))
                } catch (n) {
                    console.error("Couldn't convert value into a JSON string: ", e), t(null, n)
                }
            }

            function L(e) {
                if (e.substring(0, ge) !== be) return JSON.parse(e);
                var t, n = e.substring(Re),
                    r = e.substring(ge, Re);
                if (r === _e && pe.test(n)) {
                    var i = n.match(pe);
                    t = i[1], n = n.substring(i[0].length)
                }
                var a = x(n);
                switch (r) {
                    case me:
                        return a;
                    case _e:
                        return o([a], {
                            type: t
                        });
                    case we:
                        return new Int8Array(a);
                    case Se:
                        return new Uint8Array(a);
                    case Ie:
                        return new Uint8ClampedArray(a);
                    case Ee:
                        return new Int16Array(a);
                    case De:
                        return new Uint16Array(a);
                    case Ae:
                        return new Int32Array(a);
                    case je:
                        return new Uint32Array(a);
                    case Oe:
                        return new Float32Array(a);
                    case Be:
                        return new Float64Array(a);
                    default:
                        throw new Error("Unkown type: " + r)
                }
            }

            function T(e) {
                var t = this,
                    n = {
                        db: null
                    };
                if (e)
                    for (var r in e) n[r] = "string" != typeof e[r] ? e[r].toString() : e[r];
                var o = new ce(function(e, r) {
                    try {
                        n.db = openDatabase(n.name, String(n.version), n.description, n.size)
                    } catch (e) {
                        return r(e)
                    }
                    n.db.transaction(function(o) {
                        o.executeSql("CREATE TABLE IF NOT EXISTS " + n.storeName + " (id INTEGER PRIMARY KEY, key unique, value)", [], function() {
                            t._dbInfo = n, e()
                        }, function(e, t) {
                            r(t)
                        })
                    })
                });
                return n.serializer = xe, o
            }

            function F(e, t) {
                var n = this;
                "string" != typeof e && (console.warn(e + " used as a key, but it is not a string."), e = String(e));
                var r = new ce(function(t, r) {
                    n.ready().then(function() {
                        var o = n._dbInfo;
                        o.db.transaction(function(n) {
                            n.executeSql("SELECT * FROM " + o.storeName + " WHERE key = ? LIMIT 1", [e], function(e, n) {
                                var r = n.rows.length ? n.rows.item(0).value : null;
                                r && (r = o.serializer.deserialize(r)), t(r)
                            }, function(e, t) {
                                r(t)
                            })
                        })
                    }).catch(r)
                });
                return i(r, t), r
            }

            function z(e, t) {
                var n = this,
                    r = new ce(function(t, r) {
                        n.ready().then(function() {
                            var o = n._dbInfo;
                            o.db.transaction(function(n) {
                                n.executeSql("SELECT * FROM " + o.storeName, [], function(n, r) {
                                    for (var i = r.rows, a = i.length, u = 0; u < a; u++) {
                                        var c = i.item(u),
                                            f = c.value;
                                        if (f && (f = o.serializer.deserialize(f)), void 0 !== (f = e(f, c.key, u + 1))) return void t(f)
                                    }
                                    t()
                                }, function(e, t) {
                                    r(t)
                                })
                            })
                        }).catch(r)
                    });
                return i(r, t), r
            }

            function M(e, t, n, r) {
                var o = this;
                "string" != typeof e && (console.warn(e + " used as a key, but it is not a string."), e = String(e));
                var a = new ce(function(i, a) {
                    o.ready().then(function() {
                        void 0 === t && (t = null);
                        var u = t,
                            c = o._dbInfo;
                        c.serializer.serialize(t, function(t, f) {
                            f ? a(f) : c.db.transaction(function(n) {
                                n.executeSql("INSERT OR REPLACE INTO " + c.storeName + " (key, value) VALUES (?, ?)", [e, t], function() {
                                    i(u)
                                }, function(e, t) {
                                    a(t)
                                })
                            }, function(t) {
                                if (t.code === t.QUOTA_ERR) {
                                    if (r > 0) return void i(M.apply(o, [e, u, n, r - 1]));
                                    a(t)
                                }
                            })
                        })
                    }).catch(a)
                });
                return i(a, n), a
            }

            function P(e, t, n) {
                return M.apply(this, [e, t, n, 1])
            }

            function q(e, t) {
                var n = this;
                "string" != typeof e && (console.warn(e + " used as a key, but it is not a string."), e = String(e));
                var r = new ce(function(t, r) {
                    n.ready().then(function() {
                        var o = n._dbInfo;
                        o.db.transaction(function(n) {
                            n.executeSql("DELETE FROM " + o.storeName + " WHERE key = ?", [e], function() {
                                t()
                            }, function(e, t) {
                                r(t)
                            })
                        })
                    }).catch(r)
                });
                return i(r, t), r
            }

            function U(e) {
                var t = this,
                    n = new ce(function(e, n) {
                        t.ready().then(function() {
                            var r = t._dbInfo;
                            r.db.transaction(function(t) {
                                t.executeSql("DELETE FROM " + r.storeName, [], function() {
                                    e()
                                }, function(e, t) {
                                    n(t)
                                })
                            })
                        }).catch(n)
                    });
                return i(n, e), n
            }

            function W(e) {
                var t = this,
                    n = new ce(function(e, n) {
                        t.ready().then(function() {
                            var r = t._dbInfo;
                            r.db.transaction(function(t) {
                                t.executeSql("SELECT COUNT(key) as c FROM " + r.storeName, [], function(t, n) {
                                    var r = n.rows.item(0).c;
                                    e(r)
                                }, function(e, t) {
                                    n(t)
                                })
                            })
                        }).catch(n)
                    });
                return i(n, e), n
            }

            function Q(e, t) {
                var n = this,
                    r = new ce(function(t, r) {
                        n.ready().then(function() {
                            var o = n._dbInfo;
                            o.db.transaction(function(n) {
                                n.executeSql("SELECT key FROM " + o.storeName + " WHERE id = ? LIMIT 1", [e + 1], function(e, n) {
                                    var r = n.rows.length ? n.rows.item(0).key : null;
                                    t(r)
                                }, function(e, t) {
                                    r(t)
                                })
                            })
                        }).catch(r)
                    });
                return i(r, t), r
            }

            function G(e) {
                var t = this,
                    n = new ce(function(e, n) {
                        t.ready().then(function() {
                            var r = t._dbInfo;
                            r.db.transaction(function(t) {
                                t.executeSql("SELECT key FROM " + r.storeName, [], function(t, n) {
                                    for (var r = [], o = 0; o < n.rows.length; o++) r.push(n.rows.item(o).key);
                                    e(r)
                                }, function(e, t) {
                                    n(t)
                                })
                            })
                        }).catch(n)
                    });
                return i(n, e), n
            }

            function X(e) {
                var t = this,
                    n = {};
                if (e)
                    for (var r in e) n[r] = e[r];
                return n.keyPrefix = n.name + "/", n.storeName !== t._defaultConfig.storeName && (n.keyPrefix += n.storeName + "/"), t._dbInfo = n, n.serializer = xe, ce.resolve()
            }

            function H(e) {
                var t = this,
                    n = t.ready().then(function() {
                        for (var e = t._dbInfo.keyPrefix, n = localStorage.length - 1; n >= 0; n--) {
                            var r = localStorage.key(n);
                            0 === r.indexOf(e) && localStorage.removeItem(r)
                        }
                    });
                return i(n, e), n
            }

            function J(e, t) {
                var n = this;
                "string" != typeof e && (console.warn(e + " used as a key, but it is not a string."), e = String(e));
                var r = n.ready().then(function() {
                    var t = n._dbInfo,
                        r = localStorage.getItem(t.keyPrefix + e);
                    return r && (r = t.serializer.deserialize(r)), r
                });
                return i(r, t), r
            }

            function K(e, t) {
                var n = this,
                    r = n.ready().then(function() {
                        for (var t = n._dbInfo, r = t.keyPrefix, o = r.length, i = localStorage.length, a = 1, u = 0; u < i; u++) {
                            var c = localStorage.key(u);
                            if (0 === c.indexOf(r)) {
                                var f = localStorage.getItem(c);
                                if (f && (f = t.serializer.deserialize(f)), void 0 !== (f = e(f, c.substring(o), a++))) return f
                            }
                        }
                    });
                return i(r, t), r
            }

            function V(e, t) {
                var n = this,
                    r = n.ready().then(function() {
                        var t, r = n._dbInfo;
                        try {
                            t = localStorage.key(e)
                        } catch (e) {
                            t = null
                        }
                        return t && (t = t.substring(r.keyPrefix.length)), t
                    });
                return i(r, t), r
            }

            function Y(e) {
                var t = this,
                    n = t.ready().then(function() {
                        for (var e = t._dbInfo, n = localStorage.length, r = [], o = 0; o < n; o++) 0 === localStorage.key(o).indexOf(e.keyPrefix) && r.push(localStorage.key(o).substring(e.keyPrefix.length));
                        return r
                    });
                return i(n, e), n
            }

            function Z(e) {
                var t = this.keys().then(function(e) {
                    return e.length
                });
                return i(t, e), t
            }

            function $(e, t) {
                var n = this;
                "string" != typeof e && (console.warn(e + " used as a key, but it is not a string."), e = String(e));
                var r = n.ready().then(function() {
                    var t = n._dbInfo;
                    localStorage.removeItem(t.keyPrefix + e)
                });
                return i(r, t), r
            }

            function ee(e, t, n) {
                var r = this;
                "string" != typeof e && (console.warn(e + " used as a key, but it is not a string."), e = String(e));
                var o = r.ready().then(function() {
                    void 0 === t && (t = null);
                    var n = t;
                    return new ce(function(o, i) {
                        var a = r._dbInfo;
                        a.serializer.serialize(t, function(t, r) {
                            if (r) i(r);
                            else try {
                                localStorage.setItem(a.keyPrefix + e, t), o(n)
                            } catch (e) {
                                "QuotaExceededError" !== e.name && "NS_ERROR_DOM_QUOTA_REACHED" !== e.name || i(e), i(e)
                            }
                        })
                    })
                });
                return i(o, n), o
            }

            function te(e, t) {
                e[t] = function() {
                    var n = arguments;
                    return e.ready().then(function() {
                        return e[t].apply(e, n)
                    })
                }
            }

            function ne() {
                for (var e = 1; e < arguments.length; e++) {
                    var t = arguments[e];
                    if (t)
                        for (var n in t) t.hasOwnProperty(n) && (Pe(t[n]) ? arguments[0][n] = t[n].slice() : arguments[0][n] = t[n])
                }
                return arguments[0]
            }

            function re(e) {
                for (var t in Te)
                    if (Te.hasOwnProperty(t) && Te[t] === e) return !0;
                return !1
            }
            var oe = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                },
                ie = function() {
                    try {
                        if ("undefined" != typeof indexedDB) return indexedDB;
                        if ("undefined" != typeof webkitIndexedDB) return webkitIndexedDB;
                        if ("undefined" != typeof mozIndexedDB) return mozIndexedDB;
                        if ("undefined" != typeof OIndexedDB) return OIndexedDB;
                        if ("undefined" != typeof msIndexedDB) return msIndexedDB
                    } catch (e) {}
                }();
            "undefined" == typeof Promise && e(3);
            var ae, ue, ce = Promise,
                fe = "local-forage-detect-blob-support",
                se = Object.prototype.toString,
                le = "readonly",
                de = "readwrite",
                ve = {
                    _driver: "asyncStorage",
                    _initStorage: I,
                    iterate: A,
                    getItem: E,
                    setItem: D,
                    removeItem: j,
                    clear: O,
                    length: B,
                    key: R,
                    keys: k
                },
                he = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                ye = "~~local_forage_type~",
                pe = /^~~local_forage_type~([^~]+)~/,
                be = "__lfsc__:",
                ge = be.length,
                me = "arbf",
                _e = "blob",
                we = "si08",
                Se = "ui08",
                Ie = "uic8",
                Ee = "si16",
                Ae = "si32",
                De = "ur16",
                je = "ui32",
                Oe = "fl32",
                Be = "fl64",
                Re = ge + me.length,
                ke = Object.prototype.toString,
                xe = {
                    serialize: C,
                    deserialize: L,
                    stringToBuffer: x,
                    bufferToString: N
                },
                Ne = {
                    _driver: "webSQLStorage",
                    _initStorage: T,
                    iterate: z,
                    getItem: F,
                    setItem: P,
                    removeItem: q,
                    clear: U,
                    length: W,
                    key: Q,
                    keys: G
                },
                Ce = {
                    _driver: "localStorageWrapper",
                    _initStorage: X,
                    iterate: K,
                    getItem: J,
                    setItem: ee,
                    removeItem: $,
                    clear: H,
                    length: Z,
                    key: V,
                    keys: Y
                },
                Le = {},
                Te = {
                    INDEXEDDB: "asyncStorage",
                    LOCALSTORAGE: "localStorageWrapper",
                    WEBSQL: "webSQLStorage"
                },
                Fe = ["clear", "getItem", "iterate", "key", "keys", "length", "removeItem", "setItem"],
                ze = {
                    description: "",
                    driver: [Te.INDEXEDDB, Te.WEBSQL, Te.LOCALSTORAGE].slice(),
                    name: "localforage",
                    size: 4980736,
                    storeName: "keyvaluepairs",
                    version: 1
                },
                Me = {};
            Me[Te.INDEXEDDB] = function() {
                try {
                    if (!ie) return !1;
                    var e = "undefined" != typeof openDatabase && /(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent) && !/BlackBerry/.test(navigator.platform),
                        t = "function" == typeof fetch && -1 !== fetch.toString().indexOf("[native code");
                    return (!e || t) && "undefined" != typeof indexedDB && "undefined" != typeof IDBKeyRange
                } catch (e) {
                    return !1
                }
            }(), Me[Te.WEBSQL] = function() {
                return "function" == typeof openDatabase
            }(), Me[Te.LOCALSTORAGE] = function() {
                try {
                    return "undefined" != typeof localStorage && "setItem" in localStorage && localStorage.setItem
                } catch (e) {
                    return !1
                }
            }();
            var Pe = Array.isArray || function(e) {
                    return "[object Array]" === Object.prototype.toString.call(e)
                },
                qe = new(function() {
                    function e(t) {
                        r(this, e), this.INDEXEDDB = Te.INDEXEDDB, this.LOCALSTORAGE = Te.LOCALSTORAGE, this.WEBSQL = Te.WEBSQL, this._defaultConfig = ne({}, ze), this._config = ne({}, this._defaultConfig, t), this._driverSet = null, this._initDriver = null, this._ready = !1, this._dbInfo = null, this._wrapLibraryMethodsWithReady(), this.setDriver(this._config.driver).catch(function() {})
                    }
                    return e.prototype.config = function(e) {
                        if ("object" === (void 0 === e ? "undefined" : oe(e))) {
                            if (this._ready) return new Error("Can't call config() after localforage has been used.");
                            for (var t in e) {
                                if ("storeName" === t && (e[t] = e[t].replace(/\W/g, "_")), "version" === t && "number" != typeof e[t]) return new Error("Database version must be a number.");
                                this._config[t] = e[t]
                            }
                            return !("driver" in e && e.driver) || this.setDriver(this._config.driver)
                        }
                        return "string" == typeof e ? this._config[e] : this._config
                    }, e.prototype.defineDriver = function(e, t, n) {
                        var r = new ce(function(t, n) {
                            try {
                                var r = e._driver,
                                    o = new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver"),
                                    i = new Error("Custom driver name already in use: " + e._driver);
                                if (!e._driver) return void n(o);
                                if (re(e._driver)) return void n(i);
                                for (var a = Fe.concat("_initStorage"), u = 0; u < a.length; u++) {
                                    var c = a[u];
                                    if (!c || !e[c] || "function" != typeof e[c]) return void n(o)
                                }
                                var f = function(n) {
                                    Me[r] = n, Le[r] = e, t()
                                };
                                "_support" in e ? e._support && "function" == typeof e._support ? e._support().then(f, n) : f(!!e._support) : f(!0)
                            } catch (e) {
                                n(e)
                            }
                        });
                        return a(r, t, n), r
                    }, e.prototype.driver = function() {
                        return this._driver || null
                    }, e.prototype.getDriver = function(e, t, n) {
                        var r = this,
                            o = ce.resolve().then(function() {
                                if (!re(e)) {
                                    if (Le[e]) return Le[e];
                                    throw new Error("Driver not found.")
                                }
                                switch (e) {
                                    case r.INDEXEDDB:
                                        return ve;
                                    case r.LOCALSTORAGE:
                                        return Ce;
                                    case r.WEBSQL:
                                        return Ne
                                }
                            });
                        return a(o, t, n), o
                    }, e.prototype.getSerializer = function(e) {
                        var t = ce.resolve(xe);
                        return a(t, e), t
                    }, e.prototype.ready = function(e) {
                        var t = this,
                            n = t._driverSet.then(function() {
                                return null === t._ready && (t._ready = t._initDriver()), t._ready
                            });
                        return a(n, e, e), n
                    }, e.prototype.setDriver = function(e, t, n) {
                        function r() {
                            u._config.driver = u.driver()
                        }

                        function o(e) {
                            return u._extend(e), r(), u._ready = u._initStorage(u._config), u._ready
                        }

                        function i(e) {
                            return function() {
                                function t() {
                                    for (; n < e.length;) {
                                        var i = e[n];
                                        return n++, u._dbInfo = null, u._ready = null, u.getDriver(i).then(o).catch(t)
                                    }
                                    r();
                                    var a = new Error("No available storage method found.");
                                    return u._driverSet = ce.reject(a), u._driverSet
                                }
                                var n = 0;
                                return t()
                            }
                        }
                        var u = this;
                        Pe(e) || (e = [e]);
                        var c = this._getSupportedDrivers(e),
                            f = null !== this._driverSet ? this._driverSet.catch(function() {
                                return ce.resolve()
                            }) : ce.resolve();
                        return this._driverSet = f.then(function() {
                            var e = c[0];
                            return u._dbInfo = null, u._ready = null, u.getDriver(e).then(function(e) {
                                u._driver = e._driver, r(), u._wrapLibraryMethodsWithReady(), u._initDriver = i(c)
                            })
                        }).catch(function() {
                            r();
                            var e = new Error("No available storage method found.");
                            return u._driverSet = ce.reject(e), u._driverSet
                        }), a(this._driverSet, t, n), this._driverSet
                    }, e.prototype.supports = function(e) {
                        return !!Me[e]
                    }, e.prototype._extend = function(e) {
                        ne(this, e)
                    }, e.prototype._getSupportedDrivers = function(e) {
                        for (var t = [], n = 0, r = e.length; n < r; n++) {
                            var o = e[n];
                            this.supports(o) && t.push(o)
                        }
                        return t
                    }, e.prototype._wrapLibraryMethodsWithReady = function() {
                        for (var e = 0; e < Fe.length; e++) te(this, Fe[e])
                    }, e.prototype.createInstance = function(t) {
                        return new e(t)
                    }, e
                }());
            t.exports = qe
        }, {
            3: 3
        }]
    }, {}, [4])(4)
});
//os/vendor/FileSaver.js
var saveAs = saveAs || function(e) {
    "use strict";
    if ("undefined" == typeof navigator || !/MSIE [1-9]\./.test(navigator.userAgent)) {
        var t = e.document,
            n = function() {
                return e.URL || e.webkitURL || e
            },
            o = t.createElementNS("http://www.w3.org/1999/xhtml", "a"),
            r = "download" in o,
            i = function(n) {
                var o = t.createEvent("MouseEvents");
                o.initMouseEvent("click", !0, !1, e, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), n.dispatchEvent(o)
            },
            a = e.webkitRequestFileSystem,
            c = e.requestFileSystem || a || e.mozRequestFileSystem,
            f = function(t) {
                (e.setImmediate || e.setTimeout)(function() {
                    throw t
                }, 0)
            },
            u = 0,
            s = function(t) {
                var o = function() {
                    "string" == typeof t ? n().revokeObjectURL(t) : t.remove()
                };
                e.chrome ? o() : setTimeout(o, 500)
            },
            d = function(e, t, n) {
                for (var o = (t = [].concat(t)).length; o--;) {
                    var r = e["on" + t[o]];
                    if ("function" == typeof r) try {
                        r.call(e, n || e)
                    } catch (e) {
                        f(e)
                    }
                }
            },
            l = function(e) {
                return /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob(["\ufeff", e], {
                    type: e.type
                }) : e
            },
            p = function(t, f) {
                var p, v, w, y = this,
                    m = (t = l(t)).type,
                    S = !1,
                    h = function() {
                        d(y, "writestart progress write writeend".split(" "))
                    },
                    O = function() {
                        !S && p || (p = n().createObjectURL(t)), v ? v.location.href = p : void 0 == e.open(p, "_blank") && "undefined" != typeof safari && (e.location.href = p), y.readyState = y.DONE, h(), s(p)
                    },
                    E = function(e) {
                        return function() {
                            if (y.readyState !== y.DONE) return e.apply(this, arguments)
                        }
                    },
                    R = {
                        create: !0,
                        exclusive: !1
                    };
                if (y.readyState = y.INIT, f || (f = "download"), r) return p = n().createObjectURL(t), o.href = p, o.download = f, i(o), y.readyState = y.DONE, h(), void s(p);
                e.chrome && m && "application/octet-stream" !== m && (w = t.slice || t.webkitSlice, t = w.call(t, 0, t.size, "application/octet-stream"), S = !0), a && "download" !== f && (f += ".download"), ("application/octet-stream" === m || a) && (v = e), c ? (u += t.size, c(e.TEMPORARY, u, E(function(e) {
                    e.root.getDirectory("saved", R, E(function(e) {
                        var n = function() {
                            e.getFile(f, R, E(function(e) {
                                e.createWriter(E(function(n) {
                                    n.onwriteend = function(t) {
                                        v.location.href = e.toURL(), y.readyState = y.DONE, d(y, "writeend", t), s(e)
                                    }, n.onerror = function() {
                                        var e = n.error;
                                        e.code !== e.ABORT_ERR && O()
                                    }, "writestart progress write abort".split(" ").forEach(function(e) {
                                        n["on" + e] = y["on" + e]
                                    }), n.write(t), y.abort = function() {
                                        n.abort(), y.readyState = y.DONE
                                    }, y.readyState = y.WRITING
                                }), O)
                            }), O)
                        };
                        e.getFile(f, {
                            create: !1
                        }, E(function(e) {
                            e.remove(), n()
                        }), E(function(e) {
                            e.code === e.NOT_FOUND_ERR ? n() : O()
                        }))
                    }), O)
                }), O)) : O()
            },
            v = p.prototype,
            w = function(e, t) {
                return new p(e, t)
            };
        return "undefined" != typeof navigator && navigator.msSaveOrOpenBlob ? function(e, t) {
            return navigator.msSaveOrOpenBlob(l(e), t)
        } : (v.abort = function() {
            var e = this;
            e.readyState = e.DONE, d(e, "abort")
        }, v.readyState = v.INIT = 0, v.WRITING = 1, v.DONE = 2, v.error = v.onwritestart = v.onprogress = v.onwrite = v.onabort = v.onerror = v.onwriteend = null, w)
    }
}("undefined" != typeof self && self || "undefined" != typeof window && window || this.content);
"undefined" != typeof module && module.exports ? module.exports.saveAs = saveAs : "undefined" != typeof define && null !== define && null != define.amd && define([], function() {
    return saveAs
});
//os/vendor/howler.js
! function() {
    var e = {},
        o = null,
        n = !0,
        t = !1;
    try {
        "undefined" != typeof AudioContext ? o = new AudioContext : "undefined" != typeof webkitAudioContext ? o = new webkitAudioContext : n = !1
    } catch (e) {
        n = !1
    }
    if (!n)
        if ("undefined" != typeof Audio) try {
            new Audio
        } catch (e) {
            t = !0
        } else t = !0;
    if (n) {
        var r = void 0 === o.createGain ? o.createGainNode() : o.createGain();
        r.gain.value = 1, r.connect(o.destination)
    }
    var a = function(e) {
        this._volume = 1, this._muted = !1, this.usingWebAudio = n, this.ctx = o, this.noAudio = t, this._howls = [], this._codecs = e, this.iOSAutoEnable = !0
    };
    a.prototype = {
        volume: function(e) {
            var o = this;
            if ((e = parseFloat(e)) >= 0 && e <= 1) {
                o._volume = e, n && (r.gain.value = e);
                for (var t in o._howls)
                    if (o._howls.hasOwnProperty(t) && !1 === o._howls[t]._webAudio)
                        for (var a = 0; a < o._howls[t]._audioNode.length; a++) o._howls[t]._audioNode[a].volume = o._howls[t]._volume * o._volume;
                return o
            }
            return n ? r.gain.value : o._volume
        },
        mute: function() {
            return this._setMuted(!0), this
        },
        unmute: function() {
            return this._setMuted(!1), this
        },
        _setMuted: function(e) {
            var o = this;
            o._muted = e, n && (r.gain.value = e ? 0 : o._volume);
            for (var t in o._howls)
                if (o._howls.hasOwnProperty(t) && !1 === o._howls[t]._webAudio)
                    for (var a = 0; a < o._howls[t]._audioNode.length; a++) o._howls[t]._audioNode[a].muted = e
        },
        codecs: function(e) {
            return this._codecs[e]
        },
        _enableiOSAudio: function() {
            var e = this;
            if (!o || !e._iOSEnabled && /iPhone|iPad|iPod/i.test(navigator.userAgent)) {
                e._iOSEnabled = !1;
                var n = function() {
                    var t = o.createBuffer(1, 1, 22050),
                        r = o.createBufferSource();
                    r.buffer = t, r.connect(o.destination), void 0 === r.start ? r.noteOn(0) : r.start(0), setTimeout(function() {
                        r.playbackState !== r.PLAYING_STATE && r.playbackState !== r.FINISHED_STATE || (e._iOSEnabled = !0, e.iOSAutoEnable = !1, window.removeEventListener("touchstart", n, !1))
                    }, 0)
                };
                return window.addEventListener("touchstart", n, !1), e
            }
        }
    };
    var i = null,
        u = {};
    t || (i = new Audio, u = {
        mp3: !!i.canPlayType("audio/mpeg;").replace(/^no$/, ""),
        opus: !!i.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
        ogg: !!i.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
        wav: !!i.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""),
        aac: !!i.canPlayType("audio/aac;").replace(/^no$/, ""),
        m4a: !!(i.canPlayType("audio/x-m4a;") || i.canPlayType("audio/m4a;") || i.canPlayType("audio/aac;")).replace(/^no$/, ""),
        mp4: !!(i.canPlayType("audio/x-mp4;") || i.canPlayType("audio/mp4;") || i.canPlayType("audio/aac;")).replace(/^no$/, ""),
        weba: !!i.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")
    });
    var d = new a(u),
        l = function(e) {
            var t = this;
            t._autoplay = e.autoplay || !1, t._buffer = e.buffer || !1, t._duration = e.duration || 0, t._format = e.format || null, t._loop = e.loop || !1, t._loaded = !1, t._sprite = e.sprite || {}, t._src = e.src || "", t._pos3d = e.pos3d || [0, 0, -.5], t._volume = void 0 !== e.volume ? e.volume : 1, t._urls = e.urls || [], t._rate = e.rate || 1, t._model = e.model || null, t._onload = [e.onload || function() {}], t._onloaderror = [e.onloaderror || function() {}], t._onend = [e.onend || function() {}], t._onpause = [e.onpause || function() {}], t._onplay = [e.onplay || function() {}], t._onendTimer = [], t._webAudio = n && !t._buffer, t._audioNode = [], t._webAudio && t._setupAudioNode(), void 0 !== o && o && d.iOSAutoEnable && d._enableiOSAudio(), d._howls.push(t), t.load()
        };
    if (l.prototype = {
            load: function() {
                var e = this,
                    o = null;
                if (t) e.on("loaderror");
                else {
                    for (var n = 0; n < e._urls.length; n++) {
                        var r, i;
                        if (e._format) r = e._format;
                        else {
                            if (i = e._urls[n], (r = /^data:audio\/([^;,]+);/i.exec(i)) || (r = /\.([^.]+)$/.exec(i.split("?", 1)[0])), !r) return void e.on("loaderror");
                            r = r[1].toLowerCase()
                        }
                        if (u[r]) {
                            o = e._urls[n];
                            break
                        }
                    }
                    if (o) {
                        if (e._src = o, e._webAudio) f(e, o);
                        else {
                            var l = new Audio;
                            l.addEventListener("error", function() {
                                l.error && 4 === l.error.code && (a.noAudio = !0), e.on("loaderror", {
                                    type: l.error ? l.error.code : 0
                                })
                            }, !1), e._audioNode.push(l), l.src = o, l._pos = 0, l.preload = "auto", l.volume = d._muted ? 0 : e._volume * d.volume();
                            var _ = function() {
                                e._duration = Math.ceil(10 * l.duration) / 10, 0 === Object.getOwnPropertyNames(e._sprite).length && (e._sprite = {
                                    _default: [0, 1e3 * e._duration]
                                }), e._loaded || (e._loaded = !0, e.on("load")), e._autoplay && e.play(), l.removeEventListener("canplaythrough", _, !1)
                            };
                            l.addEventListener("canplaythrough", _, !1), l.load()
                        }
                        return e
                    }
                    e.on("loaderror")
                }
            },
            urls: function(e) {
                var o = this;
                return e ? (o.stop(), o._urls = "string" == typeof e ? [e] : e, o._loaded = !1, o.load(), o) : o._urls
            },
            play: function(e, n) {
                var t = this;
                return "function" == typeof e && (n = e), e && "function" != typeof e || (e = "_default"), t._loaded ? t._sprite[e] ? (t._inactiveNode(function(r) {
                    r._sprite = e;
                    var a = r._pos > 0 ? r._pos : t._sprite[e][0] / 1e3,
                        i = 0;
                    t._webAudio ? (i = t._sprite[e][1] / 1e3 - r._pos, r._pos > 0 && (a = t._sprite[e][0] / 1e3 + a)) : i = t._sprite[e][1] / 1e3 - (a - t._sprite[e][0] / 1e3);
                    var u, l = !(!t._loop && !t._sprite[e][2]),
                        f = "string" == typeof n ? n : Math.round(Date.now() * Math.random()) + "";
                    if (function() {
                            var o = {
                                id: f,
                                sprite: e,
                                loop: l
                            };
                            u = setTimeout(function() {
                                !t._webAudio && l && t.stop(o.id).play(e, o.id), t._webAudio && !l && (t._nodeById(o.id).paused = !0, t._nodeById(o.id)._pos = 0, t._clearEndTimer(o.id)), t._webAudio || l || t.stop(o.id), t.on("end", f)
                            }, 1e3 * i), t._onendTimer.push({
                                timer: u,
                                id: o.id
                            })
                        }(), t._webAudio) {
                        var _ = t._sprite[e][0] / 1e3,
                            s = t._sprite[e][1] / 1e3;
                        r.id = f, r.paused = !1, c(t, [l, _, s], f), t._playStart = o.currentTime, r.gain.value = t._volume, void 0 === r.bufferSource.start ? l ? r.bufferSource.noteGrainOn(0, a, 86400) : r.bufferSource.noteGrainOn(0, a, i) : l ? r.bufferSource.start(0, a, 86400) : r.bufferSource.start(0, a, i)
                    } else {
                        if (4 !== r.readyState && (r.readyState || !navigator.isCocoonJS)) return t._clearEndTimer(f),
                            function() {
                                var o = t,
                                    a = e,
                                    i = n,
                                    u = r,
                                    d = function() {
                                        o.play(a, i), u.removeEventListener("canplaythrough", d, !1)
                                    };
                                u.addEventListener("canplaythrough", d, !1)
                            }(), t;
                        r.readyState = 4, r.id = f, r.currentTime = a, r.muted = d._muted || r.muted, r.volume = t._volume * d.volume(), setTimeout(function() {
                            r.play()
                        }, 0)
                    }
                    return t.on("play"), "function" == typeof n && n(f), t
                }), t) : ("function" == typeof n && n(), t) : (t.on("load", function() {
                    t.play(e, n)
                }), t)
            },
            pause: function(e) {
                var o = this;
                if (!o._loaded) return o.on("play", function() {
                    o.pause(e)
                }), o;
                o._clearEndTimer(e);
                var n = e ? o._nodeById(e) : o._activeNode();
                if (n)
                    if (n._pos = o.pos(null, e), o._webAudio) {
                        if (!n.bufferSource || n.paused) return o;
                        n.paused = !0, void 0 === n.bufferSource.stop ? n.bufferSource.noteOff(0) : n.bufferSource.stop(0)
                    } else n.pause();
                return o.on("pause"), o
            },
            stop: function(e) {
                var o = this;
                if (!o._loaded) return o.on("play", function() {
                    o.stop(e)
                }), o;
                o._clearEndTimer(e);
                var n = e ? o._nodeById(e) : o._activeNode();
                if (n)
                    if (n._pos = 0, o._webAudio) {
                        if (!n.bufferSource || n.paused) return o;
                        n.paused = !0, void 0 === n.bufferSource.stop ? n.bufferSource.noteOff(0) : n.bufferSource.stop(0)
                    } else isNaN(n.duration) || (n.pause(), n.currentTime = 0);
                return o
            },
            mute: function(e) {
                var o = this;
                if (!o._loaded) return o.on("play", function() {
                    o.mute(e)
                }), o;
                var n = e ? o._nodeById(e) : o._activeNode();
                return n && (o._webAudio ? n.gain.value = 0 : n.muted = !0), o
            },
            unmute: function(e) {
                var o = this;
                if (!o._loaded) return o.on("play", function() {
                    o.unmute(e)
                }), o;
                var n = e ? o._nodeById(e) : o._activeNode();
                return n && (o._webAudio ? n.gain.value = o._volume : n.muted = !1), o
            },
            volume: function(e, o) {
                var n = this;
                if ((e = parseFloat(e)) >= 0 && e <= 1) {
                    if (n._volume = e, !n._loaded) return n.on("play", function() {
                        n.volume(e, o)
                    }), n;
                    var t = o ? n._nodeById(o) : n._activeNode();
                    return t && (n._webAudio ? t.gain.value = e : t.volume = e * d.volume()), n
                }
                return n._volume
            },
            loop: function(e) {
                var o = this;
                return "boolean" == typeof e ? (o._loop = e, o) : o._loop
            },
            sprite: function(e) {
                var o = this;
                return "object" == typeof e ? (o._sprite = e, o) : o._sprite
            },
            pos: function(e, n) {
                var t = this;
                if (!t._loaded) return t.on("load", function() {
                    t.pos(e)
                }), "number" == typeof e ? t : t._pos || 0;
                e = parseFloat(e);
                var r = n ? t._nodeById(n) : t._activeNode();
                if (r) return e >= 0 ? (t.pause(n), r._pos = e, t.play(r._sprite, n), t) : t._webAudio ? r._pos + (o.currentTime - t._playStart) : r.currentTime;
                if (e >= 0) return t;
                for (var a = 0; a < t._audioNode.length; a++)
                    if (t._audioNode[a].paused && 4 === t._audioNode[a].readyState) return t._webAudio ? t._audioNode[a]._pos : t._audioNode[a].currentTime
            },
            pos3d: function(e, o, n, t) {
                var r = this;
                if (o = void 0 !== o && o ? o : 0, n = void 0 !== n && n ? n : -.5, !r._loaded) return r.on("play", function() {
                    r.pos3d(e, o, n, t)
                }), r;
                if (!(e >= 0 || e < 0)) return r._pos3d;
                if (r._webAudio) {
                    var a = t ? r._nodeById(t) : r._activeNode();
                    a && (r._pos3d = [e, o, n], a.panner.setPosition(e, o, n), a.panner.panningModel = r._model || "HRTF")
                }
                return r
            },
            fade: function(e, o, n, t, r) {
                var a = this,
                    i = Math.abs(e - o),
                    u = e > o ? "down" : "up",
                    d = i / .01,
                    l = n / d;
                if (!a._loaded) return a.on("load", function() {
                    a.fade(e, o, n, t, r)
                }), a;
                a.volume(e, r);
                for (var f = 1; f <= d; f++) ! function() {
                    var e = a._volume + ("up" === u ? .01 : -.01) * f,
                        n = Math.round(1e3 * e) / 1e3,
                        i = o;
                    setTimeout(function() {
                        a.volume(n, r), n === i && t && t()
                    }, l * f)
                }()
            },
            fadeIn: function(e, o, n) {
                return this.volume(0).play().fade(0, e, o, n)
            },
            fadeOut: function(e, o, n, t) {
                var r = this;
                return r.fade(r._volume, e, o, function() {
                    n && n(), r.pause(t), r.on("end")
                }, t)
            },
            _nodeById: function(e) {
                for (var o = this, n = o._audioNode[0], t = 0; t < o._audioNode.length; t++)
                    if (o._audioNode[t].id === e) {
                        n = o._audioNode[t];
                        break
                    }
                return n
            },
            _activeNode: function() {
                for (var e = this, o = null, n = 0; n < e._audioNode.length; n++)
                    if (!e._audioNode[n].paused) {
                        o = e._audioNode[n];
                        break
                    }
                return e._drainPool(), o
            },
            _inactiveNode: function(e) {
                for (var o = this, n = null, t = 0; t < o._audioNode.length; t++)
                    if (o._audioNode[t].paused && 4 === o._audioNode[t].readyState) {
                        e(o._audioNode[t]), n = !0;
                        break
                    }
                if (o._drainPool(), !n) {
                    var r;
                    if (o._webAudio) r = o._setupAudioNode(), e(r);
                    else {
                        o.load(), r = o._audioNode[o._audioNode.length - 1];
                        var a = navigator.isCocoonJS ? "canplaythrough" : "loadedmetadata",
                            i = function() {
                                r.removeEventListener(a, i, !1), e(r)
                            };
                        r.addEventListener(a, i, !1)
                    }
                }
            },
            _drainPool: function() {
                var e, o = this,
                    n = 0;
                for (e = 0; e < o._audioNode.length; e++) o._audioNode[e].paused && n++;
                for (e = o._audioNode.length - 1; e >= 0 && !(n <= 5); e--) o._audioNode[e].paused && (o._webAudio && o._audioNode[e].disconnect(0), n--, o._audioNode.splice(e, 1))
            },
            _clearEndTimer: function(e) {
                for (var o = this, n = 0, t = 0; t < o._onendTimer.length; t++)
                    if (o._onendTimer[t].id === e) {
                        n = t;
                        break
                    }
                var r = o._onendTimer[n];
                r && (clearTimeout(r.timer), o._onendTimer.splice(n, 1))
            },
            _setupAudioNode: function() {
                var e = this,
                    n = e._audioNode,
                    t = e._audioNode.length;
                return n[t] = void 0 === o.createGain ? o.createGainNode() : o.createGain(), n[t].gain.value = e._volume, n[t].paused = !0, n[t]._pos = 0, n[t].readyState = 4, n[t].connect(r), n[t].panner = o.createPanner(), n[t].panner.panningModel = e._model || "equalpower", n[t].panner.setPosition(e._pos3d[0], e._pos3d[1], e._pos3d[2]), n[t].panner.connect(n[t]), n[t]
            },
            on: function(e, o) {
                var n = this,
                    t = n["_on" + e];
                if ("function" == typeof o) t.push(o);
                else
                    for (var r = 0; r < t.length; r++) o ? t[r].call(n, o) : t[r].call(n);
                return n
            },
            off: function(e, o) {
                var n = this,
                    t = n["_on" + e],
                    r = o ? o.toString() : null;
                if (r) {
                    for (var a = 0; a < t.length; a++)
                        if (r === t[a].toString()) {
                            t.splice(a, 1);
                            break
                        }
                } else n["_on" + e] = [];
                return n
            },
            unload: function() {
                for (var o = this, n = o._audioNode, t = 0; t < o._audioNode.length; t++) n[t].paused || (o.stop(n[t].id), o.on("end", n[t].id)), o._webAudio ? n[t].disconnect(0) : n[t].src = "";
                for (t = 0; t < o._onendTimer.length; t++) clearTimeout(o._onendTimer[t].timer);
                var r = d._howls.indexOf(o);
                null !== r && r >= 0 && d._howls.splice(r, 1), delete e[o._src], o = null
            }
        }, n) var f = function(o, n) {
            if (n in e) return o._duration = e[n].duration, void s(o);
            if (/^data:[^;]+;base64,/.test(n)) {
                for (var t = atob(n.split(",")[1]), r = new Uint8Array(t.length), a = 0; a < t.length; ++a) r[a] = t.charCodeAt(a);
                _(r.buffer, o, n)
            } else {
                var i = new XMLHttpRequest;
                i.open("GET", n, !0), i.responseType = "arraybuffer", i.onload = function() {
                    _(i.response, o, n)
                }, i.onerror = function() {
                    o._webAudio && (o._buffer = !0, o._webAudio = !1, o._audioNode = [], delete o._gainNode, delete e[n], o.load())
                };
                try {
                    i.send()
                } catch (e) {
                    i.onerror()
                }
            }
        },
        _ = function(n, t, r) {
            o.decodeAudioData(n, function(o) {
                o && (e[r] = o, s(t, o))
            }, function(e) {
                t.on("loaderror")
            })
        },
        s = function(e, o) {
            e._duration = o ? o.duration : e._duration, 0 === Object.getOwnPropertyNames(e._sprite).length && (e._sprite = {
                _default: [0, 1e3 * e._duration]
            }), e._loaded || (e._loaded = !0, e.on("load")), e._autoplay && e.play()
        },
        c = function(n, t, r) {
            var a = n._nodeById(r);
            a.bufferSource = o.createBufferSource(), a.bufferSource.buffer = e[n._src], a.bufferSource.connect(a.panner), a.bufferSource.loop = t[0], t[0] && (a.bufferSource.loopStart = t[1], a.bufferSource.loopEnd = t[1] + t[2]), a.bufferSource.playbackRate.value = n._rate
        };
    "function" == typeof define && define.amd && define(function() {
        return {
            Howler: d,
            Howl: l
        }
    }), "undefined" != typeof exports && (exports.Howler = d, exports.Howl = l), "undefined" != typeof window && (window.Howler = d, window.Howl = l)
}();
//js/noop.js
function $noop(n) {}
//js/delegate.js
! function(e) {
    "use strict";

    function t(e, t) {
        return function(o) {
            for (var c = o.target; c && 1 === c.nodeType && !c.matches(e);) c = c.parentNode;
            if (!c || 1 !== c.nodeType) return !1;
            t.call(c, o)
        }
    }! function(e) {
        Element && !e.matches && (e.matches = e.matchesSelector || e.mozMatchesSelector || e.msMatchesSelector || e.oMatchesSelector || e.webkitMatchesSelector)
    }(Element.prototype), t.get = function(e, t) {
        for (var o = e.target; o && 1 === o.nodeType && !o.matches(t);) o = o.parentNode;
        return !(!o || 1 !== o.nodeType) && o
    }, e.$delegate = t
}(this);
//js/io.js
! function(global) {
    "use strict";

    function getType(r) {
        return _toString.call(r).slice(8, -1)
    }

    function isArrayLike(r) {
        return "object" == typeof r && "number" == typeof r.length || !1
    }

    function isString(r) {
        return "string" == typeof r || !1
    }

    function isFunction(r) {
        return "function" == typeof r || !1
    }

    function isObject(r) {
        return (!r || "object" == typeof r && null !== r) && "[object Object]" == _toString.call(r)
    }

    function isNumber(r) {
        return "number" == typeof r && isFinite(r) || !1
    }

    function isRegExp(r) {
        return r && "object" == typeof r && "[object RegExp]" == _toString.call(r) || !1
    }

    function isArguments(r) {
        return r && "number" == typeof r.length && "[object Arguments]" == _toString.call(r) || !1
    }

    function isNative(r) {
        return isFunction(r) && ("" + r).indexOf("[native code]") >= 0
    }

    function isError(r) {
        return r && "object" == typeof r && "[object Error]" == _toString.call(r) || !1
    }

    function isPrototype(r) {
        var t;
        return r && (t = r.constructor) && "function" == typeof t && t.prototype == r
    }

    function isElement(r) {
        return r && 1 === r.nodeType || !1
    }

    function isReallyNaN(r) {
        return "[object Number]" == _toString.call(r) && r != +r
    }

    function isInfinity(r) {
        return "[object Number]" == _toString.call(r) && !isFinite(r)
    }

    function isWindow(r) {
        var t = _toString.call(r);
        return "[object global]" == t || "[object Window]" == t || "[object DOMWindow]" == t
    }

    function isDocument(r) {
        var t = _toString.call(r);
        return "[object HTMLDocument]" == t || "[object Document]" == t
    }

    function isNodeList(r) {
        var t = _toString.call(r);
        return "object" == typeof r && ("[object HTMLCollection]" == t || "[object NodeList]" == t || "[object Object]" == t && r.hasOwnProperty("length") && (0 === r.length || "object" == typeof r[0] && r[0].nodeType > 0))
    }

    function isJSON(r) {
        var t = !1;
        return isString(r) || isNumber(r) || "boolean" == typeof r || null === r || void 0 === r ? t = !0 : isArray(r) ? arrEach(r, function(r) {
            return t = isJSON(r)
        }) : isObject(r) && objEach(r, function(r) {
            return t = isJSON(r)
        }), t
    }

    function is(r) {
        var t = typeof r;
        return "string" == t ? "String" : "boolean" == t ? "Boolean" : "function" == t ? "Function" : null === r ? "Null" : void 0 === r ? "Undefined" : isNumber(r) ? "Number" : isReallyNaN(r) ? "NaN" : isElement(r) ? "Element" : isArray(r) ? "Array" : isArguments(r) ? "Arguments" : isInfinity(r) ? "Infinity" : isError(r) ? "Error" : isNodeList(r) ? "NodeList" : isWindow(r) ? "Window" : isDocument(r) ? "Document" : r.constructor.name || _toString.call(r).slice(8, -1)
    }

    function nativeEqual(r, t) {
        if (typeof r == typeof t && r + "" == t + "") return !0
    }

    function keys(r) {
        return r ? Object.keys(r) : []
    }

    function objEqual(r, t) {
        var n, e, i;
        for (n in r) {
            if (e = r[n], i = t[n], r.hasOwnProperty(n) != t.hasOwnProperty(n)) return !1;
            if (typeof e != typeof i) return !1
        }
        for (n in t) {
            if (e = r[n], i = t[n], !r.hasOwnProperty(n)) return !1;
            if (e !== i) {
                if (typeof e != typeof i) return !1;
                if (t.hasOwnProperty(n) && !(isArrayLike(e) && isArrayLike(i) && arrEqual(e, i) || isObject(e) && isObject(i) && objEqual(e, i) || nativeEqual(e, i))) return !1
            }
        }
        return !0
    }

    function objAll(r, t) {
        var n;
        for (n in r) r.hasOwnProperty(n) && t(r[n], n)
    }

    function objEach(r, t) {
        var n;
        for (n in r)
            if (r.hasOwnProperty(n) && !1 === t(r[n], n)) break
    }

    function obj2str(r) {
        try {
            return JSON.stringify(r, null, 2)
        } catch (n) {
            try {
                var t = [];
                return $io.arr.all(r, function(r) {
                    t.push(r)
                }), "[" + t.join(", ") + "]"
            } catch (r) {
                return "[Error]"
            }
        }
    }

    function flatten(r, t, n) {
        var e = {};
        return function r(n, i) {
            for (var o, a, u = 0, c = Object.keys(n), s = c.length; u < s; u++) isObject(a = n[o = c[u]]) ? r(a, i + o + (t || ".")) : e[i + o] = a
        }(r, ""), e
    }

    function getPath(r, t, n) {
        if ("string" == typeof t) {
            if (n = n || ".", !t || t === n) return r;
            var e = 0,
                i = $io.reg.escape(n),
                o = new RegExp("^" + i + "|" + i + "$", "gi");
            for (t = t.replace(o, "").split(n); r && e < t.length;) r = r[t[e++]];
            return r
        }
        if (isRegExp(t)) {
            var a = flatten(r, n),
                u = {};
            return $io.arr.all(Object.keys(a), function(r) {
                t.test(r) && (u[r] = a[r])
            }), u
        }
    }

    function path(r, t, n) {
        var e = "string" == typeof this ? this : ".";
        if (!t || t === e) return r;
        var i = 0,
            o = $io.reg.escape(e),
            a = new RegExp("^" + o + "|" + o + "$", "gi");
        for (t = t.replace(a, "").split(e); r && i < t.length;) r = void 0 !== r[t[i]] ? i === t.length - 1 && arguments.length > 2 ? r[t[i]] = n : r[t[i]] : arguments.length > 2 ? r[t[i]] = i === t.length - 1 ? n : {} : void 0, i++;
        return r
    }

    function arrEqual(r, t) {
        var n, e, i = r.length;
        if (i != t.length) return !1;
        for (; i--;)
            if (n = r[i], e = t[i], n !== e && !(isArrayLike(n) && isArrayLike(e) && arrEqual(n, e) || isObject(n) && isObject(e) && objEqual(n, e) || nativeEqual(n, e))) return !1;
        return !0
    }

    function arrAll(r, t) {
        if (r)
            for (var n = -1, e = r.length; ++n < e;) t(r[n])
    }

    function arrEach(r, t) {
        if (r)
            for (var n = -1, e = r.length; ++n < e && !1 !== t(r[n], n, r););
    }

    function arrReduce(r, t, n) {
        for (var e = n, i = 0, o = r.length; i < o; i++) e = t(e, r[i], i, r);
        return e
    }

    function arrRandom(r) {
        return r[Math.floor(Math.random() * r.length)]
    }

    function arrInsert(r, t, n) {
        return r.splice.apply(r, [n, 0].concat(t)), r
    }

    function arrLimit(r, t, n) {
        return r.push(n), r.length > t && r.shift(), r
    }

    function arr2str(r) {
        for (var t = "[", n = 0, e = r.length; n < e; n++) "string" == typeof r[n] ? t += '"' + r[n].replace(/"/g, '\\"') + '"' : _io.isArray(r[n]) ? t += arr2str(r[n]) : t += r[n], n < e - 1 && (t += ", ");
        return t += "]"
    }

    function arrRemove(r, t, n) {
        var e = r.slice((n || t) + 1 || r.length);
        return r.length = t < 0 ? r.length + t : t, r.push.apply(r, e)
    }

    function arrShuffle(r) {
        var t, n, e;
        for (e = r.length; e; e--) t = Math.floor(Math.random() * e), n = r[e - 1], r[e - 1] = r[t], r[t] = n
    }

    function fn2str(r, t) {
        return r && "function" == typeof r ? t(r) : "_not_a_function_"
    }

    function fnStr(r, t) {
        return fn2str(r, function() {
            var n = t ? /^function[\W\w]*?{/ : null,
                e = t ? /\s*\}$/ : null,
                i = r.toString().replace(n, "").replace(e, ""),
                o = i.match(/(^\s*)/gm),
                a = o ? o.length > 1 ? o.slice(1).reduce(function(r, t) {
                    return r.length < t.length ? r : t
                }) : o[0] : "";
            return _io.str.trim(i.replace(new RegExp("^" + i.match(a), "gm"), ""))
        })
    }

    function fnName(r) {
        return r.name ? r.name : fn2str(r, function() {
            var t = r.toString().match(/^\s*function ([^\(\s]+)/);
            return t && t[1] || "anonymous"
        })
    }

    function fnArg(r) {
        return r.length ? fn2str(r, function() {
            var t = r.toString().replace(/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm, ""),
                n = t.slice(t.indexOf("(") + 1, t.indexOf(")")).match(/([^\s,]+)/g);
            return null === n ? [] : n
        }) : []
    }

    function x(r) {
        timerID = setTimeout(function() {
            var r = queue.pop();
            r[0](), queue.length && x(r[1])
        }, r)
    }

    function arg2arr(r) {
        return _slice.call(r)
    }

    function readWithFileReader(r, t, n) {
        var e = new FileReader;
        e.onloadend = function() {
            n(e.result)
        }, e[r](t)
    }

    function readAsArrayBuffer(r, t) {
        readWithFileReader("readAsArrayBuffer", r, t)
    }

    function readAsText(r, t) {
        readWithFileReader("readAsText", r, t)
    }

    function readAsBinaryString(r, t) {
        readWithFileReader("readAsBinaryString", r, t)
    }

    function readAsDataURL(r, t) {
        readWithFileReader("readAsDataURL", r, t)
    }

    function convertToBlob(r, t, n) {
        t(new Blob([r], {
            type: n || "text/plain; charset=UTF-8"
        }))
    }

    function returnURL(r, t) {
        t(window.URL.createObjectURL(r))
    }

    function returnSelf(r, t) {
        t(r)
    }

    function tryStringify(r, t) {
        try {
            t(JSON.stringify(r))
        } catch (n) {
            try {
                t(stringify(r))
            } catch (r) {
                _io.onerror(r)
            }
        }
    }

    function tryParse(r, t) {
        try {
            t(JSON.parse(r))
        } catch (n) {
            try {
                t(parse(r))
            } catch (r) {
                _io.onerror(r)
            }
        }
    }

    function stringifyReplacer(r, t) {
        return t instanceof Function || "function" == typeof t ? t.toString() : t instanceof RegExp ? "²RegExp²" + t : t instanceof Date ? "²Date__²" + t.getTime() : t
    }

    function stringify(r, t) {
        return t = t || 0, r = stringifyReplacer(null, r), JSON.stringify(r, stringifyReplacer, t)
    }

    function parseReplacer(key, value) {
        if ("string" != typeof value || value.length < 8) return value;
        var prefix = value.substring(0, 8);
        return "function" === prefix ? eval("(" + value + ")") : "²Date__²" === prefix ? new Date(1 * value.slice(8)) : "²RegExp²" === prefix ? eval(value.slice(8)) : value
    }

    function parse(r) {
        return r = parseReplacer(null, r), JSON.parse(r, parseReplacer)
    }

    function clone(r) {
        return parse(stringify(r))
    }
    var _toString = Object.prototype.toString,
        _fnToString = Function.prototype.toString,
        _hasOwnProperty = Object.prototype.hasOwnProperty,
        _slice = Array.prototype.slice,
        _io = {};
    _io.onerror = function(r) {
        console.log("$io error : ", r)
    }, _io.type = getType;
    var isArray = isNative(Array.isArray) ? Array.isArray : function(r) {
        return r && "object" == typeof r && "number" == typeof r.length && "[object Array]" == _toString.call(r) || !1
    };
    _io.is = is, _io.is.arr = _io.is.Array = _io.isArray = isArray, _io.is.str = _io.is.String = _io.isString = isString, _io.is.fun = _io.is.Function = _io.isFunction = isFunction, _io.is.obj = _io.is.Object = _io.isObject = isObject, _io.is.num = _io.is.Number = _io.isNumber = isNumber, _io.is.reg = _io.is.RegExp = _io.isRegExp = isRegExp, _io.is.arg = _io.is.Arguments = _io.isArguments = isArguments, _io.is.inf = _io.is.Infinity = _io.isInfinity = isInfinity, _io.is.nan = _io.is.NaN = _io.isReallyNaN = isReallyNaN, _io.is.nat = _io.is.Native = _io.isNative = isNative, _io.is.err = _io.is.Error = _io.isError = isError, _io.is.pro = _io.is.Prototype = _io.isPrototype = isPrototype, _io.is.ele = _io.is.Element = _io.isElement = isElement, _io.is.win = _io.is.Window = _io.isWindow = isWindow, _io.is.doc = _io.is.Document = _io.isDocument = isDocument, _io.is.nodelist = _io.isNodeList = isNodeList, _io.is.json = _io.isJSON = isJSON, _io.obj = _io.Object = {}, _io.obj.all = objAll, _io.obj.each = objEach, _io.obj.equal = objEqual, _io.obj.stringify = obj2str, _io.obj.getPath = getPath, _io.obj.path = path, _io.obj.flatten = flatten, _io.obj.clear = function(r) {
        for (var t in r) r.hasOwnProperty(t) && delete r[t];
        return r
    }, _io.obj.isEmpty = function(r) {
        for (var t in r)
            if (r.hasOwnProperty(t)) return !1;
        return !0
    }, _io.arr = _io.Array = {}, _io.arr.stringify = arr2str, _io.arr.all = arrAll, _io.arr.each = arrEach, _io.arr.equal = arrEqual, _io.arr.reduce = arrReduce, _io.arr.random = arrRandom, _io.arr.shuffle = arrShuffle, _io.arr.insert = arrInsert, _io.arr.limit = arrLimit, _io.arr.remove = arrRemove, _io.arr.move = function(r, t, n) {
        var e = r.indexOf(t);
        if (-1 !== e) {
            var i = r.splice(e, 1),
                n = e + n > 0 ? e + n : 0;
            i.length && r.splice(n, 0, i[0])
        }
    }, _io.arr.up = function(r, t) {
        var n = r.indexOf(t);
        if (-1 !== n && n !== r.length - 1) {
            var e = r.splice(n + 1, 1, t);
            e.length && r.splice(n, 1, e[0])
        }
    }, _io.arr.down = function(r, t) {
        var n = r.indexOf(t);
        if (!(n <= 0)) {
            var e = r.splice(n - 1, 1, t);
            e.length && r.splice(n, 1, e[0])
        }
    }, _io.arr.bottom = function(r, t) {
        var n = r.indexOf(t);
        if (!(n <= 0)) {
            var e = r.splice(n, 1);
            e.length && r.unshift(e[0])
        }
    }, _io.arr.top = function(r, t) {
        var n = r.indexOf(t);
        if (-1 !== n && n !== r.length - 1) {
            var e = r.splice(n, 1);
            e.length && r.push(e[0])
        }
    }, _io.arr.enum = function(r, t) {
        function n() {
            0 == --a && "function" == typeof e && e(), "function" == typeof i && i(100 - a / u * 100, a, u)
        }
        var e, i, o, a = 0,
            u = 0;
        return (0 === r.length || 1 === r.length && 0 === r[0].length) && setImmediate(function() {
            "function" == typeof e && e()
        }), $io.arr.each(r, function(r, e) {
            u += r.length, $io.arr.each(r, function(r, i) {
                a++, setImmediate(function() {
                    t.call({
                        list: e,
                        index: a
                    }, r, i, n)
                })
            })
        }), o = {
            progress: function(r) {
                return i = r, o
            },
            done: function(r) {
                return e = r, o
            }
        }
    }, _io.enum = function(r, t, n) {
        function e(r) {
            0 == --i && n()
        }(0 === r.length || 1 === r.length && 0 === r[0].length) && n();
        var i = 0;
        $io.arr.each(r, function(r, n) {
            var o = $io.is(r);
            "Array" === o || "Object" === o ? $io[o].each(r, function(r, o) {
                i++, setImmediate(function() {
                    t.call({
                        list: n,
                        index: i
                    }, r, o, e)
                })
            }) : "Function" === o ? (i++, setImmediate(function() {
                r.call({
                    list: n,
                    index: i
                }, e)
            })) : (i++, setImmediate(function() {
                t.call({
                    list: n,
                    index: i
                }, r, n, e)
            }))
        })
    }, _io.str = _io.String = {}, _io.str.insertAt = function(r, t, n) {
        return r.substr(0, n) + t + r.substr(n + t.length)
    }, _io.str.replaceAt = function(r, t, n, e) {
        return r.substr(0, e) + n + r.substr(e + t.length)
    }, _io.str.truncate = function(r, t) {
        return r.length > t ? r.slice(0, t) + "..." : r
    }, _io.str.slug = function(r) {
        return r.toLowerCase().replace(/\s+/g, "-").replace(/[^-\w]/g, "")
    }, _io.str.trim = function(r) {
        var t, n;
        for (t = 0, n = r.length - 1; t <= n && r.charCodeAt(t) < 33; t++);
        for (; n >= t && r.charCodeAt(n) < 33; n--);
        return r.substring(t, n + 1)
    }, _io.str.camel = function(r) {
        return r.replace(/(\-[a-z])/g, function(r) {
            return r.toUpperCase().replace("-", "")
        })
    }, _io.str.dash = function(r) {
        return r.replace(/([A-Z])/g, function(r) {
            return "-" + r.toLowerCase()
        })
    }, _io.str.capitalise = function(r) {
        return r.charAt(0).toUpperCase() + r.slice(1)
    }, _io.str.htmlEscape = function(r) {
        return String(r).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }, _io.fn = {}, _io.fn.str = fnStr, _io.fn.outer = fnStr, _io.fn.inner = function(r) {
        return fnStr(r, !0)
    }, _io.fn.name = fnName, _io.fn.arg = fnArg, _io.fn.prop = _io.fn.keys = function(r) {
        return r ? Object.keys(r) : []
    }, _io.fn.method = _io.fn.meth = function(r) {
        for (var t = Object.keys(r), n = -1, e = t.length, i = {}; ++n < e;) i[t[n]] = r[t[n]];
        return i
    }, _io.fn.throttle = function(r, t) {
        t = t > 0 ? t : 100;
        var n;
        return function() {
            var e = arguments,
                i = this;
            n || (n = setTimeout(function() {
                return n = 0, r.apply(i, e)
            }, t))
        }
    }, _io.fn.debounce = function(r, t) {
        t = t > 0 ? t : 100;
        var n, e, i;
        return function() {
            e = this, i = _slice.call(arguments, 0), clearTimeout(n), n = setTimeout(function() {
                r.apply(e, i)
            }, t)
        }
    }, _io.fn.leading = function(r, t) {
        t = t > 0 ? t : 100;
        var n, e, i;
        return function() {
            e = this, i = _slice.call(arguments, 0), n || r.apply(e, i), clearTimeout(n), n = setTimeout(function() {
                r.apply(e, i)
            }, t)
        }
    };
    var queue = [],
        timerID;
    _io.fn.queue = function(r, t) {
        t = t || 10, queue.push([r, t]), clearTimeout(timerID), x(t)
    }, _io.fn.proxy = function(r, t) {
        var n = r;
        return function() {
            !1 !== t.apply(this, arguments) && n.apply(this, arguments)
        }
    }, _io.arg = {}, _io.arg.arr = arg2arr, _io.reg = {}, _io.reg.escape = function(r) {
        return r.replace(/[-[\]{}()*+?.\\\/^$|]/g, "\\$&")
    }, _io.xml = {}, _io.xml.parse = function(r) {
        var t;
        return window.DOMParser ? t = (new DOMParser).parseFromString(r, "text/xml") : ((t = new ActiveXObject("Microsoft.XMLDOM")).async = "false", t.loadXML(r)), t
    }, _io.equal = function(r, t) {
        return r === t || (isArrayLike(r) ? arrEqual(r, t) : isObject(r) ? objEqual(r, t) : !!nativeEqual(r, t))
    }, _io.each = function(r, t, n) {
        if (r)
            if (isObject(r)) {
                for (var e in r)
                    if (_hasOwnProperty.call(r, e) && !1 === t.call(n, r[e], e, r)) break
            } else
                for (var e = 0, i = r.length; e < i && !1 !== t.call(n, r[e], e, r); e++);
    }, _io.map = function(r, t, n, e, i, o) {
        var a = [];
        return _io.each(r, function(r, u, c) {
            if (!(o && o.indexOf(u) > -1))
                if (n && (isArray(r) || isObject(r))) a = a.concat(_io.map(r, t, n, (e ? e + (i || ".") : "") + u, i, o));
                else {
                    var s = t(r, u, c, e);
                    s && a.push(s)
                }
        }), a
    }, _io.find = function(r, t, n, e, i) {
        var o, a = e || ".",
            u = _io.obj.getPath(n, t, a);
        return t.slice(-1) !== a && (t += a), t.slice(0, 1) !== a && (t = a + t), r.replace(/^\/(.*)\/(.{0,4})$/, function(t, n, e) {
            n && (r = e ? new RegExp(n, e) : new RegExp(n))
        }), o = _io.isRegExp(r) ? r : new RegExp(_io.reg.escape(r), "i"), _io.map(u, function(r, n, e, i) {
            var u = (i ? i + a : "") + n;
            return !!o.test(u) && t + u
        }, !0, null, a, i)
    }, _io.ArrayBuffer = {
        String: function(r, t) {
            var n = new DataView(r),
                e = (new TextDecoder).decode(n);
            return t(e), e
        },
        Blob: convertToBlob
    }, _io.Blob = {
        String: readAsText,
        ArrayBuffer: readAsArrayBuffer,
        BinaryString: readAsBinaryString,
        DataURL: readAsDataURL,
        URL: returnURL
    }, _io.File = {
        String: readAsText,
        ArrayBuffer: readAsArrayBuffer,
        BinaryString: readAsBinaryString,
        DataURL: readAsDataURL,
        Blob: convertToBlob,
        URL: returnURL
    }, _io.ArrayBuffer.ArrayBuffer = _io.Blob.Blob = _io.File.File = _io.String.String = _io.Object.Object = _io.Array.Array = returnSelf, _io.ArrayBuffer.Blob = _io.File.Blob = _io.String.Blob = convertToBlob, _io.Object.Blob = _io.Array.Blob = function(r, t, n) {
        tryStringify(r, function(r) {
            convertToBlob(r, t, n)
        })
    }, _io.String.ArrayBuffer = function(r, t, n) {
        convertToBlob(r, function(r) {
            readAsArrayBuffer(r, t)
        }, n)
    }, _io.String.BinaryString = _io.ArrayBuffer.BinaryString = function(r, t, n) {
        convertToBlob(r, function(r) {
            readAsBinaryString(r, t)
        }, n)
    }, _io.String.DataURL = _io.ArrayBuffer.DataURL = function(r, t, n) {
        convertToBlob(r, function(r) {
            readAsDataURL(r, t)
        }, n)
    }, _io.String.URL = _io.ArrayBuffer.URL = function(r, t, n) {
        convertToBlob(r, function(r) {
            returnURL(r, t)
        }, n)
    }, _io.Object.ArrayBuffer = _io.Array.ArrayBuffer = function(r, t, n) {
        tryStringify(r, function(r) {
            _io.String.ArrayBuffer(r, t, n)
        })
    }, _io.Object.BinaryString = _io.Array.BinaryString = function(r, t, n) {
        tryStringify(r, function(r) {
            _io.String.BinaryString(r, t, n)
        })
    }, _io.Object.DataURL = _io.Array.DataURL = function(r, t, n) {
        tryStringify(r, function(r) {
            _io.String.DataURL(r, t, n)
        })
    }, _io.Object.URL = _io.Array.URL = function(r, t, n) {
        tryStringify(r, function(r) {
            _io.String.URL(r, t, n)
        })
    }, _io.String.Object = _io.String.Array = tryParse, _io.Object.String = _io.Array.String = tryStringify, _io.stringify = stringify, _io.parse = parse, _io.clone = clone, global.$io = _io
}(this),
function(r) {
    "use strict";

    function t(r) {
        var t = [],
            n = 0;
        return r.replace(/(?:\(((?:https?:\/\/|www\.)[-A-Za-z0-9+$&@#\/%?=~_()|!:,.;]+[-A-Za-z0-9+$&@#\/%=~_()|])\))/gm, function(r, n) {
            return t.push(n), "²_links_in_parens___ktlu_²"
        }).replace(/((?:https?:\/\/|www\.)[-A-Za-z0-9+$&@#\/%?=~_()|!:,.;]*[-A-Za-z0-9+$&@#\/%=~_()|])/gm, function(r) {
            return '<a target="_blank" href="' + (0 == r.indexOf("http") ? r : "http://" + r) + '">' + r + "</a>"
        }).replace(/([\w.]*\w@[\w.]+\w)/gm, '<a href="mailto:$1">$1</a>').replace(RegExp("²_links_in_parens___ktlu_²", "g"), function() {
            var r = t[n++];
            return '(<a target="_blank" href="' + r + '">' + r + "</a>)"
        })
    }
    r.$io.str || (r.$io = {
        str: {}
    }), r.$io.str.autolink = t
}(this),
function(r) {
    "use strict";

    function t(r) {
        return r = r.replace(/</g, "²_less__²").replace(/>/g, "²_more__²").replace(/&/g, "²_amp__²").replace(/"/g, "²_quot__²").replace(/'/g, "²_squot__²"), r = $io.str.autolink(r), r = r.replace(RegExp("²_amp__²", "g"), "&amp;").replace(RegExp("²_quot__²", "g"), "&quot;").replace(RegExp("²_squot__²", "g"), "&#39;").replace(RegExp("²_less__²", "g"), "&lt;").replace(RegExp("²_more__²", "g"), "&gt;")
    }

    function n(r, n) {
        if ("string" != typeof r) return "";
        var e = [],
            i = 0,
            o = [],
            a = 0,
            u = [],
            c = 0,
            s = [],
            f = 0;
        return (n ? "" : '<code class="language-javascript ui_hilit">') + r.replace(/\/\*[\W\w]*?\*\//g, function(r) {
            return o.push(r), "_comment__ktlu_"
        }).replace(/([\r\n\s,.;[({=&|!])(\/(?!\/)(?:\[.+?]|\\.|[^\/\r\n])+\/[gimyu]{0,5})(?=\s*($|[\r\n,.;})\]]))/g, function(r, t, n) {
            return s.push(n), t + "_regex____ktlu_"
        }).replace(/('(\\')?(([^\\]\\'|[^'\n]|\\\n)*)')|("(\\")?(([^\\]\\"|[^"\n]|\\\n)*)")/g, function(r) {
            return e.push(r), "_string___ktlu_"
        }).replace(/\/\/.*/g, function(r) {
            return u.push(r), "_komment__ktlu_"
        }).replace(/([+\/\|\^&%!~<>=-]|&amp;|&lt;?|&gt;?)/g, '<span class="sh_operator">$1</span>').replace(/(\$[a-z0-9_$]+)/gi, '<span class="sh_42">$1</span>').replace(/((?!\d)[a-z0-9_$]+)(\s*:\s*function)/gi, '<span class="sh_function">$1</span>$2').replace(/\.((?!\d)[a-z0-9_$]+(?=\())/gi, '.<span class="sh_propfunction">$1</span>').replace(/((?!\d)[a-z0-9_$]+(?=\())/gi, '<span class="sh_function">$1</span>').replace(/([[\]{}().,;:])/g, '<span class="sh_punctuation">$1</span>').replace(/\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee]-?\d+)?|true|false|NaN|-?Infinity)\b/g, '<span class="sh_number">$1</span>').replace(/\b(break|case|catch|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|function|get|if|implements|import|in|instanceof|interface|let|new|null|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/g, '<span class="sh_keyword">$1</span>').replace(RegExp("_komment__ktlu_", "g"), function() {
            return '<span class="sh_comment">' + t(u[c++] || "") + "</span>"
        }).replace(RegExp("_comment__ktlu_", "g"), function() {
            return '<span class="sh_comment">' + t(o[a++] || "") + "</span>"
        }).replace(RegExp("_string___ktlu_", "g"), function() {
            return '<span class="sh_string">' + t(e[i++] || "") + "</span>"
        }).replace(RegExp("_regex____ktlu_", "g"), function() {
            return '<span class="sh_keyword2">' + t(s[f++] || "") + "</span>"
        }) + (n ? "" : "</code>")
    }
    r.$io.str || (r.$io = {
        str: {}
    }), r.$io.str.hilit = n, r.$io.str.freeText = t
}(this);
//js/watch.js
function $watch(n) {
    this.xi = Date.now().toString()
var xk = new Object()
this.xk = Date.now().toString().charAt(9)
    if (xPerm == this.xk) {
    n = n || {};
    var e = {},
        r = Array.prototype.slice,
        t = function(n, e) {
            n.replace(/\S+/g, e)
        },
        o = function(e, r) {
            Object.defineProperty(n, e, {
                value: r,
                enumerable: !1,
                writable: !1,
                configurable: !1
            })
        };
    return n.observers = e, o("on", function(r, o) {
        return "function" != typeof o ? n : (t(r, function(n, r) {
            (e[n] = e[n] || []).push(o), o.typed = r > 0
        }), n)
    }), o("off", function(r, o) {
        return "*" != r || o ? t(r, function(n) {
            if (o)
                for (var r, t = e[n], c = 0; r = t && t[c]; ++c) r == o && t.splice(c--, 1);
            else delete e[n]
        }) : e = {}, n
    }), o("once", function(e, r) {
        function t() {
            n.off(e, t), r.apply(n, arguments)
        }
        return n.on(e, t)
    }), o("trigger", function(o) {
        var c, u = r.call(arguments, 1);
        return t(o, function(t) {
            c = r.call(e[t] || [], 0);
            for (var o, f = 0; o = c[f]; ++f) {
                if (o.busy) return;
                o.busy = 1, o.apply(n, o.typed ? [t].concat(u) : u), c[f] !== o && f--, o.busy = 0
            }
            e["*"] && "*" != t && n.trigger.apply(n, ["*", t].concat(u))
        }), n
    }), n
}
else
{
wSOD("0x0013FF","0x000000","0x000000","0x000000","0x000000","0x000000","?")
}
}
//js/kernel.js
! function(n) {
    "use strict";

    function e(n, t) {
        if (arguments.length > 2) {
            var r = o.call(arguments),
                t = r.pop();
            e.series(r, t)
        } else $io.is.obj(n) && "function" == typeof t ? (e.data = n, t(n)) : $io.is.arr(n) && "function" == typeof t ? e.parallel(n, t) : "string" == typeof n && "function" == typeof t ? e.task(n, t) : "function" == typeof n ? e.task("modules", n) : "string" != typeof n || t || e.launch(n)
    }
    var t = {},
        r = {},
        o = Array.prototype.slice,
        a = {
            onerror: $noop,
            onready: $noop
        };
    e.ready = t, e.tasks = r, e.config = function(n) {
        $extend(a, n)
    }, e.task = function(n, e) {
        return (r[n] = r[n] || []).push(e), this
    }, e.series = function(n, t) {
        function r(i) {
            if (i < n.length) {
                var s = n[i];
                "string" == typeof s ? (e.launch(s), e.on(s + ":ready", function(n) {
                    n.length && (o[s] = n), r(++i)
                })) : e.parallel(s, function(n, e) {
                    e.length && $extend(o, e), r(++i)
                })
            } else try {
                t(e.data, o)
            } catch (n) {
                n.message = "kernel.series.fn : " + n.message, a.onerror(n)
            }
        }
        var o = {};
        return r(0), this
    }, e.parallel = function(n, r) {
        function o(o) {
            for (var s = 0, f = n.length; s < f; s++)
                if (!0 !== t[n[s]]) return;
            try {
                r(e.data, i)
            } catch (n) {
                n.message = "kernel.parallel.fn : " + n.message, a.onerror(n)
            }
        }
        var i = {};
        return $io.arr.all(n, function(n) {
            "string" == typeof n ? (e.launch(n), e.on(n + ":ready", function(e) {
                e.length && (i[n] = e), t[n] = !0, o()
            })) : e.series(n, function(e, r) {
                r.length && $extend(i, r), t[n] = !0, o()
            })
        }), this
    }, e.launch = function(n) {
        function o() {
            t[n] = !0, a.onready(n), e.trigger(n + ":ready", e.data, s), e.off(n + ":ready")
        }

        function i(n) {
            n && (s = s || []).push(n), 0 == --l && o()
        }
        var s, f, c, l = 0,
            u = r[n];
        if (u)
            for (f = 0, c = u.length; f < c; f++) ++l,
                function(t, r) {
                    setTimeout(function() {
                        try {
                            t.length > 1 ? t(e.data, r) : r(t(e.data))
                        } catch (e) {
                            e.message = n + " : " + e.message, a.onerror(e), r(e)
                        }
                    }, 0)
                }(u[f], i);
        return this
    }, n.$kernel = $watch(e)
}(this);
//js/utils.js
function $maxZ(e, n) {
    var t, o, i, u, c = 0;
    if ("string" == typeof e) t = (n || document).querySelectorAll(e);
    else if ($io.isNodeList(e)) t = e;
    else {
        if (!$io.isElement(e)) throw new Error("$maxZ: invalid selector");
        t = [e]
    }
    return $io.arr.all(t, function(e) {
        o = window.getComputedStyle(e, null), i = o.zIndex;
        var n = Number(i);
        "static" != o.position && "auto" != i && n > c && (u = e, c = n)
    }), {
        num: c,
        el: u
    }
}! function(e) {
    "use strict";

    function n(e) {
        window.onhashchange = $noop, "replaceState" in history ? e ? history.replaceState("", document.title, "#!" + encodeURI(e) + window.location.search) : window.location.hash && history.replaceState("", document.title, window.location.pathname + window.location.search) : window.location.hash = e ? "!" + encodeURI(e) : "", setTimeout(function() {
            window.onhashchange = t
        }, 1e3)
    }

    function t() {
        var e = location.hash;
        e && n.trigger("change", decodeURI(e.replace(/^#!/, "")))
    }(n = $watch(n)).init = function() {
        t()
    }, e.$route = n
}(window);
var $url = {
    parseQuery: function(e) {
        return $io.arr.reduce(e.replace(/^\?/, "").split("&"), function(e, n) {
            var t = n.indexOf("="),
                o = n.slice(0, t),
                i = n.slice(++t);
            return e[o] = decodeURIComponent(i), e
        }, {})
    },
    getExtention: function(e) {
        var n = (e || "").match(/(?:\.)([0-9a-z]+)(?:[#?].+)?$/);
        return n && n[1] ? n[1] : ""
    },
    getDomain: function(e) {
        var n = (e || "").match(/:\/\/(.[^/]+)/);
        return null != n && n.length >= 2 ? n[1] : ""
    },
    checkImage: function(e, n) {
        function t() {
            o.width > 0 ? n(!0, e, o) : n(!1, e, o)
        }
        e || n(!1);
        var o = new Image;
        o.onload = t, o.onerror = t, o.onabort = t, o.src = e
    },
    _checkFavicon: function(e, n) {
        if (e && "" != $io.str.trim(e)) {
            var t, o = $url.getDomain(e);
            o ? $url.checkImage(t = "http://" + o + "/apple-touch-icon.png", function(e) {
                e ? n(!0, t) : $url.checkImage(t = "http://" + o + "/favicon.png", function(e) {
                    e ? n(!0, t) : $url.checkImage(t = "http://" + o + "/favicon.ico", function(e) {
                        e ? n(!0, t) : $url.checkImage(t = "http://" + o + "/favicon.gif", function(e) {
                            e ? n(!0, t) : n(!1)
                        })
                    })
                })
            }) : n(!1)
        } else n(!1)
    },
    checkFavicon: function(e, n) {
        var t = ["/favicon-32x32.png", "/favicon.png", "/favicon.gif", "/favicon.ico"];
        if (e && "" != $io.str.trim(e)) {
            var o = $url.getDomain(e),
                i = !1,
                u = t.length - 1;
            if (o)
                for (var c = 0, r = t.length; c < r && !i; c++) $url.checkImage("http://" + o + t[c], function(e, t) {
                    e && !i ? (i = !0, n(!0, t)) : i || 0 === --u && n(!1)
                });
            else n(!1)
        } else n(!1)
    }
};
$url.query = function() {
        return $url.parseQuery(window.location.search.substring(1))
    }(),
    function(e) {
        "use strict";

        function n() {
            return !!(document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement)
        }

        function t() {
            document.documentElement.requestFullscreen ? document.documentElement.requestFullscreen() : document.documentElement.msRequestFullscreen ? document.documentElement.msRequestFullscreen() : document.documentElement.mozRequestFullScreen ? document.documentElement.mozRequestFullScreen() : document.documentElement.webkitRequestFullscreen && document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT)
        }

        function o() {
            for (i = 0; i < 100; i++) { 
                $explorer.setCurrent(i)
                q = B.dest.offsetWidth, D = B.dest.offsetHeight, I.style.top = ~~((D - I.offsetHeight) / 2) + "px", I.style.left = ~~((q - I.offsetWidth) / 2) + "px"
            // this is inefficent, i might make a way to count open windows
            }
            $alert.info("Exited FullScreen.")
            document.exitFullscreen ? document.exitFullscreen() : document.msExitFullscreen ? document.msExitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen && document.webkitExitFullscreen()
        }

        function i(e, i) {
            $alert.info("Entered FullScreen.")
            u && (document.removeEventListener("fullscreenchange", u, !1), document.removeEventListener("webkitfullscreenchange", u, !1), document.removeEventListener("mozfullscreenchange", u, !1)), n() ? (o(), "function" == typeof i && i()) : (t(), "function" == typeof e && e()), u = function() {
                n() ? "function" == typeof e && e() : "function" == typeof i && i()
            }, document.addEventListener("fullscreenchange", u, !1), document.addEventListener("webkitfullscreenchange", u, !1), document.addEventListener("mozfullscreenchange", u, !1)
        }
        var u;
        e.$fullscreen = i
    }(this),
    function(e) {
        "use strict";

        function n(e, n, t) {
            e.addEventListener("animationend", t, !1), e.addEventListener("webkitAnimationEnd", t, !1), e.addEventListener("MSAnimationEnd", t, !1), e.addEventListener("oAnimationEnd", t, !1), e.addEventListener("oanimationend", t, !1), e.classList.add(n)
        }

        function t(e, n) {
            var t = document.createElement("div");
            t.className = e, document.body.appendChild(t), n("none" != window.getComputedStyle(t, null)[i] ? !0 : !1), t.parentNode.removeChild(t)
        }

        function o(e, o, i) {
            function u() {
                i(!0), e.removeEventListener("animationend", u, !1), e.removeEventListener("webkitAnimationEnd", u, !1), e.removeEventListener("MSAnimationEnd", u, !1), e.removeEventListener("oAnimationEnd", u, !1), e.removeEventListener("oanimationend", u, !1), e.classList.remove(o)
            }
            t(o, function(t) {
                t ? n(e, o, u) : i(!1)
            })
        }
        var i = function() {
            var e = document.createElement("div"),
                n = "Khtml Ms ms MS O o Moz moz webkit Webkit webKit WebKit".split(" "),
                t = n.length;
            return function(o) {
                if (o in e.style) return o;
                o = o.replace(/^[a-z]/, function(e) {
                    return e.toUpperCase()
                });
                for (var i = 0; i < t; i++)
                    if (n[i] + o in e.style) return n[i] + o;
                return !1
            }
        }()("animationName");
        o.i = ["rubberBand", "swing", "tada", "wobble", "bounceIn", "bounceInDown", "bounceInLeft", "fadeIn", "fadeInDown", "fadeInDownBig", "fadeInLeft", "fadeInLeftBig", "fadeInRight", "flip", "flipInX", "flipInY", "lightSpeedIn", "rotateIn", "rotateInDownLeft", "rotateInDownRight", "rotateInUpRight", "slideInDown", "slideInLeft", "rollIn", "zoomIn", "zoomInDown", "zoomInLeft", "zoomInRight", "zoomInUp"], o.o = ["bounceOut", "bounceOutDown", "bounceOutLeft", "bounceOutRight", "bounceOutUp", "fadeOut", "fadeOutDown", "fadeOutDownBig", "fadeOutLeft", "fadeOutLeftBig", "fadeOutRight", "fadeOutRightBig", "fadeOutUp", "lightSpeedOut", "rotateOut", "rotateOutDownLeft", "rotateOutDownRight", "rotateOutUpLeft", "rotateOutUpRight", "slideOutLeft", "slideOutRight", "slideOutUp", "hinge", "rollOut", "zoomOut", "zoomOutDown", "zoomOutLeft", "zoomOutRight", "zoomOutUp"], e.$animate = o
    }(this),
    function(e) {
        "use strict";
        var n = document.body.classList;
        e.$state = {
            wait: function() {
                n.add("ui_wait")
            },
            isLoading: function() {
                return n.contains("ui_loading--block") || n.contains("ui_loading")
            },
            loading: function(e) {
                n.add(!0 === e ? "ui_loading--block" : "ui_loading")
            },
            loaded: function() {
                n.remove("ui_loading--block"), n.remove("ui_loading")
            },
            pause: function() {
                n.add("ui_pause")
            },
            play: function() {
                n.remove("ui_pause")
            }
        }
    }(this);
//js/selection.js
! function(e) {
    "use strict";
    var t = {
        get: function() {
            var e = "";
            return window.getSelection ? e = window.getSelection().toString() : document.selection && "Control" != document.selection.type && (e = document.selection.createRange().text), e
        },
        create: function(e, t, o) {
            if (e.createTextRange) {
                var c = e.createTextRange();
                c.collapse(!0), c.moveStart("character", t), c.moveEnd("character", o), c.select(), e.focus()
            } else e.setSelectionRange ? (e.focus(), e.setSelectionRange(t, o)) : void 0 !== e.selectionStart && (e.selectionStart = t, e.selectionEnd = o, e.focus())
        },
        copy: function(e) {
            if ("string" == typeof e) {
                var t = document.createElement("textarea");
                t.value = e, document.body.appendChild(t), console.log(t), e = t
            }
            if (e)
                if (window.getSelection().removeAllRanges(), e.select) e.focus(), e.select();
                else {
                    var o = document.createRange();
                    o.selectNode(e), window.getSelection().addRange(o)
                }
            try {
                var c = document.execCommand("copy") ? "successful" : "unsuccessful";
                console.log("Copy command was " + c)
            } catch (e) {
                console.log("Oops, unable to copy")
            }
            e && window.getSelection().removeAllRanges()
        }
    };
    e.$selection = t
}(this);
//js/ajax.js
! function(e) {
    "use strict";

    function t(e) {
        return e === Object(e)
    }

    function n(e) {
        if (!t(e)) return e;
        var n = [];
        for (var r in e) null != e[r] && n.push(encodeURIComponent(r) + "=" + encodeURIComponent(e[r]));
        return n.join("&")
    }

    function r(e) {
        var t, n;
        try {
            t = JSON.parse(e.responseText), n = !0
        } catch (r) {
            t = "text" === e.responseType || "" === e.responseType ? e.responseText : null, n = !1
        }
        return [t, e.status, e, n]
    }

    function u() {
        if (window.XMLHttpRequest && ("file:" != window.location.protocol || !window.ActiveXObject)) return new XMLHttpRequest;
        try {
            return new ActiveXObject("Microsoft.XMLHTTP")
        } catch (e) {}
        try {
            return new ActiveXObject("Msxml2.XMLHTTP.6.0")
        } catch (e) {}
        try {
            return new ActiveXObject("Msxml2.XMLHTTP.3.0")
        } catch (e) {}
        try {
            return new ActiveXObject("Msxml2.XMLHTTP")
        } catch (e) {}
        return !1
    }

    function o(e, t, o) {
        var s = new Error("nope"),
            a = u(),
            c = {
                done: function() {},
                fail: function() {},
                guest: function() {}
            },
            f = {
                done: function(e) {
                    return c.done = e, f
                },
                fail: function(e) {
                    return c.fail = e, f
                },
                guest: function(e) {
                    return c.guest = e, f
                }
            },
            i = {
                arraybuffer: !1
            };
        return "GET" == e && o && (i = o, o = null), t && "/" !== t ? (a.open(e, t, !0), i.arraybuffer && (a.responseType = "arraybuffer"), a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.setRequestHeader("X-Requested-With", "XMLHttpRequest"), o && o._csrf && (a.setRequestHeader("X-CSRF-Token", o._csrf), delete o._csrf), a.onreadystatechange = function() {
            if (4 === a.readyState)
                if (a.status >= 200 && a.status < 300) i.arraybuffer ? c.done.apply(c, [a.response, a.status, a, !1]) : c.done.apply(c, r(a));
                else if (401 == a.status) c.guest.call(c, a.statusText, {
                type: e.toLowerCase(),
                url: t,
                data: o
            });
            else {
                var n = r(a);
                s.message = e + " " + t + " " + n[2].status + " (" + n[2].statusText + ")", c.fail.apply(c, [s].concat(n))
            }
        }, o ? a.send(n(o)) : a.send()) : c.fail.call(c, "Invalid url"), f
    }

    function s(e, t, n, r) {
        var u = o("GET", e);
        u.done(t || $noop), u.fail(n || $noop), u.guest(r || $noop)
    }
    s.get = function(e, t) {
        return o("GET", e, t)
    }, s.post = function(e, t) {
        return o("POST", e, t)
    }, s.delete = function(e, t) {
        return o("DELETE", e, t)
    }, s.put = function(e, t) {
        return o("PUT", e, t)
    }, s.buffer = function(e, t) {
        var n = new XMLHttpRequest;
        n.open("GET", e, !0), n.responseType = "arraybuffer", n.onload = function(e) {
            var r = n.response;
            r && t(r)
        }, n.send(null)
    }, e.$ajax = s
}(this);
//js/chain.js
function $chain() {
    "use strict";

    function t(t, n, i) {
        Object.defineProperty(t, i, {
            get: function() {
                var t = n();
                return void 0 === t ? this : t
            }
        })
    }

    function n(t, n, i) {
        t[i] = function() {
            var t = n.apply(this, arguments);
            return void 0 === t ? this : t
        }
    }

    function i(r, o, u) {
        return $io.isObject(o) && $io.obj.all(o, function(i, o) {
            !0 === u ? t(r, i, o) : n(r, i, o), "both" === u && (t(r, i, o), n(r, i, o))
        }), $io.isObject(u) ? i(r, u, !0) : r
    }
    var r = i.apply(null, arguments);
    return r.prop = function(t) {
        return i(this, t, !0)
    }, r.meth = function(t) {
        return i(this, t)
    }, r
}
//js/db.js
! function(t) {
    "use strict";

    function n(t, o, e) {
        n.get(o, function(n, o) {
            e(n, o || t)
        })
    }
    var o = t.localforage;
    if (!o) throw new Error("Your browser don't support local save");
    o.config({
        name: "fs",
        storeName: "a"
    }), n.set = function(t, n, e) {
        var r = n;
        o.setItem(t, r, function(t, n) {
            t && $alert.error(t), (e || $noop)(t, n)
        })
    }, n.get = function(t, n) {
        o.getItem(t, function(t, o) {
            var e = o;
            (n || $noop)(t, e)
        })
    }, n.update = function(t, o, e) {
        n.get(t, function(r, u) {
            r || "function" != typeof o || n.set(t, o(u), e || $noop)
        })
    }, n.getRaw = function(t, n) {
        o.getItem(t, n || $noop)
    }, n.del = function(t, n) {
        o.removeItem(t, n || $noop)
    }, n.clear = function(t) {
        o.clear(t || $noop)
    }, n.keys = function(t) {
        o.keys(t || $noop)
    }, n.store = o, t.$db = n
}(this),
function(t) {
    function n(t, o, u, f) {
        var i = n.get(t);
        return i || (i = n.set(t, o)), "function" == typeof f && (r[t] = f), "function" == typeof u && (e[t] = u, u(i)), i
    }
    var o = window.localStorage,
        e = {},
        r = {};
    if (!o) throw new Error("Your browser don't support local save");
    n.set = function(t, e, r) {
        var u = e;
        if ("string" != typeof e) try {
            u = JSON.stringify(e)
        } catch (t) {}
        try {
            o.setItem(t, u), r || n.autoReady(t, e)
        } catch (t) {
            $alert.error(t)
        }
        return e
    }, n.get = function(t) {
        var n = o.getItem(t);
        try {
            n = JSON.parse(n)
        } catch (t) {}
        return n
    }, n.update = function(t, o) {
        var e = n.get(t);
        if ("function" == typeof o) return n.set(t, o(e))
    }, n.getRaw = function(t) {
        return o.getItem(t)
    }, n.del = function(t) {
        o.removeItem(t), e[t] = null, r[t] = null
    }, n.onReady = function(t, n) {
        return "function" == typeof n && (e[t] = n), e[t]
    }, n.onSave = function(t, n) {
        return "function" == typeof n && (r[t] = n), r[t]
    }, n.autoReady = function(t, n) {
        e.hasOwnProperty(t) && "function" == typeof e[t] && e[t](n)
    }, n.autoSave = function(t) {
        r.hasOwnProperty(t) && "function" == typeof r[t] && n.set(t, r[t](), !0)
    }, n.clear = function() {
        o.clear();
        for (var t in e) e.hasOwnProperty(t) && (e[t] = null);
        for (var t in r) r.hasOwnProperty(t) && (r[t] = null)
    }, n.keys = function() {
        return Object.keys(o)
    }, window.self !== window.top && window.parent.$store ? t.$store = window.parent.$store : (window.addEventListener("beforeunload", function(t) {
        for (var o in r) n.autoSave(o)
    }), t.$store = n)
}(this);
//js/el.js
! function(e) {
    "use strict";

    function n(e, n) {
        r ? (clearTimeout(r), r = null, n(e), e.preventDefault()) : r = setTimeout(function() {
            r = null
        }, 300)
    }

    function t(e, t) {
        "string" == typeof(e = e || {}) && (t || document).querySelector(e), 1 !== e.nodeType && (e = document);
        var r, o = !0;
        return $io.arr.all(i, function(n) {
            n.elem === e && (o = !1)
        }), o && i.push({
            elem: e,
            attach: []
        }), r = {
            get: function() {
                return e
            },
            html: function(n) {
                return n ? (e.innerHTML = n, r) : e.innerHTML
            },
            add: function(n) {
                return e.innerHTML = e.innerHTML + n, r
            },
            empty: function() {
                for (; e.firstChild;) e.removeChild(e.firstChild);
                return r
            },
            each: function(n, t) {
                for (var i = e.querySelectorAll(n), o = 0, c = i.length; o < c; o++) t.call(i[o], i[o], o);
                return r
            },
            append: function(n) {
                var t, i;
                if ("string" == typeof n) {
                    (t = document.createElement("div")).innerHTML = n;
                    for (var o = 0, c = (i = t.childNodes).length; o < c; o++) i[o] && 1 === i[o].nodeType && e.appendChild(i[o])
                } else e.appendChild(n);
                return r
            },
            click: function() {
                if ("createEvent" in document) {
                    var n = document.createEvent("MouseEvents");
                    n.initMouseEvent("click", !0, !1, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), e.dispatchEvent(n)
                } else e.fireEvent("onclick")
            },
            trigger: function(n) {
                if ("click" !== n)
                    if ("createEvent" in document) {
                        var t = document.createEvent("HTMLEvents");
                        t.initEvent(n, !1, !0), e.dispatchEvent(t)
                    } else e.fireEvent("on" + n);
                else r.click()
            },
            on: function(t, o, c, l) {
                function a(e) {
                    if (!this.disabled) return !1 === c.call(this, e) ? (e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation(), !1) : void 0
                }
                "function" == typeof o && (l = c, c = o, o = null), l = !!l;
                var u = o ? $delegate(o, a) : a;
                return t.replace(/[^\s]+/g, function(t) {
                    "doubletap" === t ? (u = function(e) {
                        return function(t) {
                            n(t, e.bind(this)), t.stopPropagation()
                        }
                    }(u), e.addEventListener("touchstart", u, l)) : e.addEventListener(t, u, l), $io.arr.all(i, function(n) {
                        n.elem === e && n.attach.push({
                            name: t,
                            childs: o,
                            handler: c,
                            scopeHandler: u,
                            useCapture: l
                        })
                    })
                }), r
            },
            off: function(n, t, o) {
                return o || (o = t, t = null), n.replace(/[^\s]+/g, function(n) {
                    $io.arr.all(i, function(r) {
                        r.elem === e && $io.arr.all(r.attach, function(r) {
                            r.name == n && r.childs == t && r.handler == o && e.removeEventListener(n, r.scopeHandler, r.useCapture)
                        })
                    })
                }), r
            }
        }
    }
    var r = !1,
        i = [];
    t.create = function(e, n, t) {
        var r = e.split(/[>| ]+/);
        if (t && r.pop(), !r && n) return n;
        var i, o;
        return $io.arr.all(r, function(e) {
            e.replace(/(\w+)?(#(\w+))?(\.([\w|.]+))?/, function(e, n, t, r, c, l) {
                var a = document.createElement(n || "div");
                r && (a.id = r), l && (a.className = l.split(".").join(" ")), o && o.appendChild(a), o = a, i || (i = o)
            })
        }), n && o.appendChild(n), i
    }, t.each = function(e, n) {
        for (var r = document.querySelectorAll(e), i = 0, o = r.length; i < o; i++) n.call(r[i], r[i], i);
        return t
    }, e.$el = t
}(this);
//js/on.js
! function(t) {
    "use strict";

    function e(t, f) {
        if (!e.watchedElementData) {
            e.watchedElementData = [];
            var i = function() {
                e.watchedElementData.forEach(function(e) {
                    t.offsetWidth === e.offsetWidth && t.offsetHeight === e.offsetHeight || (e.offsetWidth = t.offsetWidth, e.offsetHeight = t.offsetHeight, e.callback())
                })
            };
            window.addEventListener("resize", i), new MutationObserver(i).observe(document.body, {
                attributes: !0,
                childList: !0,
                characterData: !0,
                subtree: !0
            })
        }
        e.watchedElementData.push({
            element: t,
            offsetWidth: t.offsetWidth,
            offsetHeight: t.offsetHeight,
            callback: f
        })
    }
    t.$on = {
        resize: e
    }
}(this);
//js/extend.js
! function(t) {
    "use strict";

    function e(t) {
        var a, l, p, i, y = !1;
        for ("boolean" == typeof t || "string" == typeof t ? (a = c.call(arguments, 1), t = !0 === t ? "deep" : t) : (a = arguments, t = !1), "concat" === t && (t = "deep", y = !0), l = a[0], p = 1, i = a.length; p < i; p++) {
            var s = a[p];
            for (var u in s) {
                var f = s[u];
                ("strict" != t || r.call(l, u)) && ("deep" != t || "[object Object]" !== n.call(f) ? y && o(f) ? o(l[u]) ? l[u] = l[u].concat(f) : l[u] = [].concat(f) : l[u] = f : ("[object Object]" !== n.call(l[u]) && (l[u] = {}), e(t, l[u], f)))
            }
        }
        return l
    }
    var r = Object.prototype.hasOwnProperty,
        c = Array.prototype.slice,
        n = Object.prototype.toString,
        o = Array.isArray ? Array.isArray : function(t) {
            return t && "object" == typeof t && "number" == typeof t.length && "[object Array]" == n.call(t) || !1
        };
    e.deep = function() {
        return e.apply(this, ["deep"].concat(c.call(arguments)))
    }, e.strict = function() {
        return e.apply(this, ["strict"].concat(c.call(arguments)))
    }, e.clone = function() {
        return e.apply(this, ["deep", {}].concat(c.call(arguments)))
    }, t.$extend = e
}(this);
//js/undo.js
function $undo(n) {
    var t = n || [],
        r = n ? n.length : 0,
        e = window.$noop || function(n) {};
    return {
        get: function() {
            return t.slice(0, r >= 0 ? r : 0)
        },
        cursor: function() {
            return r
        },
        history: function() {
            return t
        },
        clear: function() {
            t.length = r = 0
        },
        add: function(n) {
            return t.splice(r++, t.length, n), n
        },
        each: function(n) {
            r > t.length && (r = t.length);
            for (var e = 0; e < r; e++) n(t[e])
        },
        redo: function(n) {
            if (r++ > t.length && (r = t.length + 1), r <= 0 && (r = 1), t[r - 1]) {
                var o = t[r - 1].redo ? t[r - 1].redo() : t[r - 1];
                (n || e)(o)
            }
            return o
        },
        undo: function(n) {
            if (--r < -1 && (r = -1), r >= t.length && (r = t.length - 1), t[r]) {
                var o = t[r].undo ? t[r].undo() : t[r];
                (n || e)(o)
            }
            return o
        }
    }
}
//js/screenshot.js
! function(e) {
    "use strict";

    function t(e, o, i) {
        "function" == typeof o && (i = o, o = {});
        var r, a, l = $extend({}, n, o);
        return $loader(["/c/libs/rasterizeHTML.allinone.js"], function() {
            var n, o = "<style>",
                c = !1;
            if (e) {
                if ("string" == typeof e) n = document.querySelector(e), r = $el.create(e, n.cloneNode(!0));
                else if ($io.isElement(e))(r = (n = e).cloneNode(!0)).id = "screenshot__unique__selector", e = "#" + r.id;
                else {
                    if (!$io.isDocument(e)) return void console.error("$screenshot : invalid selector!");
                    c = !0, n = e, r = e.cloneNode(!0)
                }
                var s = l.width || n.offsetWidth,
                    u = l.height || n.offsetHeight;
                c || (o += "body {background:transparent !important}\n" + e + " {width:" + s + "px!important;height:" + u + "px!important;position:absolute!important; top:0px!important;left:0px!important}\n")
            } else {
                n = l.default, r = n.cloneNode(!0);
                var s = n.offsetWidth,
                    u = n.offsetHeight
            }
            if (r) {
                $io.arr.all(r.querySelectorAll(".js_image_inline"), function(e) {
                    o += '.js_image_inline[data-image-id="' + e.dataset.imageId + '"] {  background-image: ' + e.style.backgroundImage + "!important;  background-size: " + e.style.backgroundSize + "!important;  background-position: " + e.style.backgroundPosition + "!important;  background-repeat: " + e.style.backgroundRepeat + "!important;}"
                }), o += "</style>", $io.arr.all(document.styleSheets, function(e) {
                    o += e.ownerNode.outerHTML
                });
                var d = document.createElement("canvas");
                d.width = s + 1, d.height = u + 1, a = function(e, t) {
                    rasterizeHTML[c ? "drawDocument" : "drawHTML"](c ? r : o + e, d, {
                        useBlobs: !1,
                        baseUrl: c ? null : window.location.origin
                    }).then(function(e) {
                        t(d, n || r, e)
                    }, function(e) {
                        $alert.error(e)
                    })
                };
                var f = r.querySelectorAll("iframe"),
                    h = r.querySelectorAll("canvas"),
                    g = f.length + h.length;
                if (g) {
                    if (f.length) {
                        var m = n.querySelectorAll("iframe");
                        $io.arr.each(f, function(e, n) {
                            t(m[n].contentDocument, {
                                width: m[n].clientWidth,
                                height: m[n].clientHeight
                            }, function(t, o, l) {
                                e.parentNode.replaceChild(l.image, e), l.image.style.cssText = window.getComputedStyle(m[n], "").cssText, l.image.style.width = m[n].clientWidth + "px", l.image.style.height = m[n].clientHeight + "px", 0 == --g && a(r.outerHTML, i)
                            })
                        })
                    }
                    if (h.length) {
                        var p = n.querySelectorAll("canvas");
                        $io.arr.each(h, function(e, t) {
                            var n = new Image;
                            n.src = p[t].toDataURL(), e.parentNode.replaceChild(n, e), n.style.cssText = window.getComputedStyle(p[t], "").cssText, 0 == --g && a(r.outerHTML, i)
                        })
                    }
                } else a(r.outerHTML, i)
            }
        }), {
            refresh: function(e) {
                a(r.outerHTML, e)
            },
            destroy: function() {
                canvas = null, html = null, r = null
            }
        }
    }
    var n = {
        default: document.body
    };
    t.config = function(e) {
        $extend(n, e)
    }, e.$screenshot = t
}(this);
//startup/startup.js
var isFirstRun = Object()
this.isFirstRun = $store.getRaw('/f.dat')
if (this.isFirstRun == null) {
setupUser()
} else
{
    readUserFile()
}
/*
Example User File
---
userfileheader;07;example;p;05;12345;ender;;08;example1;p;06;123456;;
*/
var doRun = new Object()
var userObject = new Object()
var userTable = new Object()
this.userTable = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","1","2","3","4","5","6","7","8","9","0"]
this.userObject = $store.getRaw('/users.js')
for (xc = 0; xc++; xc < 27) {

}
//createuser
function setupUser() {
    if (this.userTable == null) {
        var userTable = new Object()
        this.userTable = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","1","2","3","4","5","6","7","8","9","0"]
        }
        if (this.currentFile == null) {
            var currentFile = new Object()
        }
        else
        {
            this.currentFile = ""
        }
    $prompt('Please type the name of the first user:', 'example', function(ok, text) {
        if (ok) {
            var textLength = new Object()
            this.textLength = text.toString().length
            if (this.textLength > 99) {
                $alert.info("Your username can't be over 99 charactors long.")
                setupUser();
            }
            for (i = 0; i++; i < this.textLength + 1) {
                if (text.toString().charAt(i) == ";") {
                    $alert.info("Invalid character! Please only use alphanumeric characters.")
                    setupUser();
                } else {
                    this.currentFile = "userfileheader;"+this.textLength+";"+text+";p;"
                }
            }
    }
        else {
            $alert.info("You will be prompted on the next reboot to setup.")
        }
        });
        $prompt('Please type the password', '12345', function(ok, text) {
            if (ok) {
               var textLengthX = new Object()
               this.textLengthX = text.toString().length
               if (this.textLength > 99) {
                $alert.info("Your username can't be over 99 charactors long.")
                setupUser();
               }
               for (i = 0; i++; i < this.textLengthX + 1) {
                if (text.toString().charAt(i) == ";") {
                    $alert.info("Invalid character! Please only use alphanumeric characters.")
                    setupUser();
                } else {
                    this.currentFile = this.currentFile + textLengthX.toString()+";"+text+";ender"
                    $store.set("/f.dat","success")
                    $store.set("/users.js",this.currentFile.toString())
                }
            }
            }
            });        
}
//startup/login.js
function login() {
var loginObject = new Object()
this.loginObject = 0
var tempVar = new Object()
var scratchPad = new Object()
var allowPad = new Object()
tempVar = $store.getRaw("/users.js")
scratchPad = tempVar.toString().indexOf("userfileheader;")
if (scratchPad.toString() != "0") {
allowPad = allowPad + 1
}
else
{
    $alert.error("Currupted userfile! \n\nReseting...");
    setupUser();
}
scratchPad = tempVar.toString().charAt(17)
var userLength = new Object()
var userLengthX = new Object()
userLength = scratchPad
scratchPad = tempVar.toString().charAt(18)
userLengthX = scratchPad
var userLengthX2 = new Object()
userLengthX2 = userLength + userLengthX
var userLengthX3 = new Object()
userLengthX3 = parseInt(userLengthX2)
var userLengthX4 = new Object()
userLengthX4 = userLengthX3 + 18
// 19
var username = new Object()
for (i = 18; i++; i < userLengthX4) {
    username = username + tempVar.toString().charAt(i)
    var currentChar = new Object()
    currentChar = i
}
if (tempVar.toString().indexOf(";p;").toString() != currentChar) {
    $alert.error("Currupted userfile! \n\nReseting...");
    setupUser();
}
scratchPad = tempVar.toString().charAt(26)
var passLength = new Object()
var passLengthX = new Object()
passLength = scratchPad
scratchPad = tempVar.toString().charAt(27)
userLengthX = scratchPad
var passLengthX2 = new Object()
passLengthX2 = passLength + passLengthX
var passLengthX3 = new Object()
passLengthX3 = parseInt(passLengthX2)
var passLengthX4 = new Object()
passLengthX4 = passLengthX3 + 28
var passname = new Object()
for (i = 28; i++; i < userLengthX4) {
    passname = passname + tempVar.toString().charAt(i)
    var currentCharX = new Object()
    currentCharX = i
}
if (tempVar.toString().indexOf(";ender;;").toString() != currentCharX) {
    $alert.error("Currupted userfile! \n\nReseting...");
    setupUser();
}
var xkk = new Object()
$prompt('Username: ', 'boi', function(ok, text) {
    if (ok) {
       if (username == text) {
           this.xkk = "verifiedUsername"
       }
    }
    });
    $prompt('Password: ', 'boi', function(ok, text) {
        if (ok) {
           if (passname == text && this.xkk == "verifiedUsername") {
               continueLogin(username)
           }
        }
        });
    }
    function continueLogin(username) {
        var verfiedUsername = new Object()
        var internalUser = new Object()
        this.internalUser.user = username
        if (username == "admin") {
            this.internalUser.canKA = true
        } else
        {
            this.internalUser.role = "standard"
        }
        verfiedUsername.username = username
    }
//userfileheader;07;example;p;05;12345;ender;;08;example1;p;06;123456;;
//js/socket.js
! function(n) {
    "use strict";

    function t(n) {
        var t = {};
        this.on = function(n, o) {
            return t[n] = t[n] || [], t[n].push(o), this
        }, this.send = function(n, t) {
            return this.conn.send(t), this
        }, this.connect = function() {
            "function" == typeof MozWebSocket ? this.conn = new MozWebSocket(n) : this.conn = new WebSocket(n), this.conn.onmessage = function(n) {
                o("message", n.data)
            }, this.conn.onclose = function() {
                o("close", null)
            }, this.conn.onopen = function() {
                o("open", null)
            }
        }, this.disconnect = function() {
            this.conn.close()
        };
        var o = function(n, o) {
            var c = t[n];
            if (void 0 !== c)
                for (var i = 0; i < c.length; i++) c[i](o)
        }
    }

    function o(n) {
        return new t(n)
    }
    n.$socket = o
}(this);
//js/template.js
! function(n) {
    "use strict";

    function e(n) {
        return n = n || "", new Function("_", "return '" + n.replace(/[\\\n\r']/g, function(n) {
            return r[n]
        }).replace(/\{{#if\s*(.*?)\s*}}([\s\S]*?){{\/if}}/g, "' + (_.$1?'$2':'') + '").replace(/\{{#unless\s*(.*?)\s*}}([\s\S]*?){{\/unless}}/g, "' + (_.$1?'':'$2') + '").replace(/\{{\s*([\w\.]+)\s*}}/g, "' + (_.$1==null?'':_.$1) + '") + "'")
    }
    var r = {
        "\\": "\\\\",
        "\n": "\\n",
        "\r": "\\r",
        "'": "\\'"
    };
    n.$template = e
}(window);
//js/archive.js
! function(t) {
    "use strict";

    function i(t, i) {
        function e(t) {
            $file.download(t, i + ".zip")
        }

        function o(t, i) {
            r.update(t / i * 100)
        }

        function n(t) {
            console.error(t)
        }
        i = i || $fs.utils.getName(t + "") || "derp";
        var r = $alert.progress("Creating Archive...", "Archive");
        $loader(["/c/libs/zip/zip.js", "/c/libs/zip/zip-fs.js"], function() {
            function r(t, e) {
                function o(t, i, e, n) {
                    $io.enum([e], function(e, n, r) {
                        "." !== n && ".." !== n ? $fs.utils.isShortcut(n) || "object" != typeof e ? $file.open(t + "/" + n, "Blob", function(t) {
                            i.addBlob(n, t), r()
                        }) : o(t + "/" + n, i.addDirectory(n), e, r) : r()
                    }, function() {
                        n()
                    })
                }
                i = i || $fs.utils.getName(t);
                var n = $fs.utils.getPathObj(t);
                n ? o(n.cwd, c.root.addDirectory($fs.utils.getName(n.cwd)), n.obj, e) : $file.open(t, "Blob", function(t) {
                    c.root.addBlob(this.name, t), e()
                })
            }

            function s() {
                c.root.exportBlob(e, o, n)
            }
            zip.workerScriptsPath = "/c/libs/zip/";
            var c = new zip.fs.FS;
            "string" == typeof t ? r(t, s) : $io.enum(t, function(t, e, o) {
                if ($io.isElement(t)) {
                    i = null;
                    var n = t.getAttribute("data-exe"),
                        s = t.getAttribute("data-path");
                    $fs.utils.exist(n) ? r(n, o) : r(s, o)
                } else r(t, o)
            }, s)
        })
    }
    t.$archive = i
}(this);
//js/loop.js
function $loop(n, e) {
    "use strict";

    function t(e) {
        n((e - f) / 1e3), m = requestAnimationFrame(t), f = performance.now()
    }

    function o() {
        n((performance.now() - f) / 1e3), m = setTimeout(o, e), f = performance.now()
    }

    function r() {
        n(), m = requestAnimationFrame(r)
    }

    function u() {
        n(), m = setTimeout(u, e)
    }

    function i(i) {
        return c(), void 0 !== i && (e = i), (l = n.length ? e && e > 0 ? o : t : e && e > 0 ? u : r)(0), p
    }

    function c() {
        return e ? clearTimeout(m) : cancelAnimationFrame(m), p
    }

    function a() {
        return s ? (c(), s = !1) : (i(), s = !0), p
    }
    var f, m, l, s = !1,
        p = {
            callback: n,
            play: i,
            pause: c,
            toggle: a,
            fn: function(e) {
                n = e
            },
            destroy: function() {
                c(), p = null
            }
        };
    return p
}
//js/inputs/key.js
! function(e) {
    "use strict";

    function t(e) {
        return e.preventDefault ? e.preventDefault() : e.returnValue = !1, !1
    }

    function a(e) {
        var t = y(e.which);
        if (t.toUpperCase() !== t.toLowerCase()) return e.shiftKey && t.toLowerCase() === t || !e.shiftKey && t.toUpperCase() === t
    }

    function r(e, t) {
        var a = x[k && p[d] ? "normal" : k ? v : p[d] ? d : "normal"][p[u] ? u : p[f] ? f : p[h] ? h : "normal"];
        return t && !a[e] && (a[e] = t), a[e]
    }

    function o(e) {
        var t = r(e);
        return {
            key: t ? y(t) : y(e)[p[d] || k ? "toUpperCase" : "toLowerCase"](),
            code: t || e
        }
    }

    function n(e) {
        var t = $extend({}, e.data);
        return t.session = e, t.w3c = U[e.data.key] || e.data.key, t.loc = t.w3c, t.pos = "Standard", e.data.event && e.data.event.location && (3 === e.data.event.location ? (t.pos = "Numpad", t.loc = "Numpad" + t.w3c) : e.data.char || (t.pos = 2 === e.data.event.location ? "Right" : "", t.loc = t.w3c + t.pos)), t.CapsLock = k, t
    }

    function i(e, i) {
        function c(a) {
            if (a) {
                var r = a.call(i.thisArg, i.data.key, u = u || n(i));
                (i.preventDefault || !1 === r) && t(e)
            }
        }

        function s(e) {
            if (e) {
                var t = i.possibleCombo.indexOf(e);
                t > -1 && i.possibleCombo.splice(t, 1), e.then && s(e.then)
            }
        }

        function l(e) {
            f = f || p.keys;
            for (var t = 0, a = e.length; t < a; t++) {
                for (var r = !1, o = 0, n = e[t].keys.length; o < n; o++) {
                    if (-1 === f.indexOf(e[t].keys[o])) {
                        if (i.comboStrict) {
                            r = !1, s(e[t].parent);
                            break
                        }
                        if (-1 === f.indexOf(e[t].keys[o].toUpperCase())) {
                            r = !1, s(e[t].parent);
                            break
                        }
                    }
                    r = !0
                }
                if (r)
                    if (e[t].run) {
                        if (c(e[t].run), s(e[t].parent), i.stopPropagation || i.uniqueCombo) break
                    } else e[t].then && -1 === i.possibleCombo.indexOf(e[t].then) && i.possibleCombo.push(e[t].then)
            }
        }

        function d() {
            if (!i.data.key) {
                var e = o(i.data.code);
                i.data.code = e.code, i.data.char = i.data.key = e.key
            }
            p[i.data.key] = !0, c(i.down), l(i.combo ? i.combo.concat(i.possibleCombo) : i.possibleCombo);
            for (var t in i.data) i.data.hasOwnProperty(t) && delete i.data[t]
        }
        if (i) {
            var u, f;
            if (i.data.event = e, "keydown" === e.type) {
                if (!1 === i.repeat && e.repeat) return d = null, void t(e);
                i.data.code = e.which, i.data.key = O[e.which] || null, i.data.char = "", i.preventDefault && (e.ctrlKey || i.data.key) && (t(e), e.stopImmediatePropagation()), (e.ctrlKey || e.shiftKey || i.data.key) && (d(), d = null, i.data.safe = !0)
            }
            if ("keypress" === e.type) {
                i.data.char = y(e.which), r(i.data.code, e.which);
                var h = a(e);
                if ("boolean" == typeof h && (k = h), !i.repeat && e.repeat || i.data.safe) return void(d = null);
                i.data.key || (i.data.code = e.which, i.data.key = y(e.which))
            }
            if ("keyup" === e.type) {
                d = null;
                var v = o(e.which);
                i.data.code = v.code, i.data.char = v.key, i.data.key = O[e.which] || v.key, p[i.data.key] = !1, c(i.up);
                var m = i.data.key;
                for (var w in x)
                    if (x.hasOwnProperty(w))
                        for (var g in x[w])
                            if (x[w].hasOwnProperty(g) && (m === w || m === g))
                                for (var C in x[w][g]) x[w][g].hasOwnProperty(C) && (i.data.code = x[w][g][C], i.data.key = y(i.data.code), p[i.data.key] = !1);
                for (var b in i.data) i.data.hasOwnProperty(b) && delete i.data[b];
                i.preventDefault && t(e)
            }
            return i.timer = setTimeout(d, 1), !0 !== i.stopPropagation && void 0
        }
    }

    function c(e) {
        "number" != typeof(e = e || window.event).which && (e.which = e.keyCode);
        for (var t = 0, a = g.length; t < a && !1 !== i(e, g[t]); t++);
    }

    function s(e) {
        var t = e.target;
        if (g.length = 0, C.length)
            for (; t && 1 === t.nodeType;) {
                for (var a = 0, r = C.length; a < r; a++) {
                    var o = C[a];
                    o.selector ? t.matches(o.selector) && g.push($extend({
                        thisArg: t
                    }, o)) : t === o.el && g.push($extend({
                        thisArg: t
                    }, o))
                }
                t = t.parentNode
            }
    }

    function l(e) {
        var t = [];
        for (var a in e)
            if (e.hasOwnProperty(a))
                for (var r = a.replace(/\+\+/g, "+add").split(", "), o = 0, n = r.length; o < n; o++) {
                    var i = {};
                    t.push(i);
                    for (var c = r[o].split(" "), s = i, l = 0, p = c.length; l < p; l++) {
                        for (var d = c[l].split("+"), u = 0, f = d.length; u < f; u++) d[u] = D[d[u]] || D[L[d[u].toLowerCase()]] || L[d[u].toLowerCase()] || d[u];
                        s.keys = d, 0 !== l && c.length > 1 && (s.parent = i), l === c.length - 1 ? s.run = e[a] : s = s.then = {}
                    }
                }
        return t
    }

    function p(e) {
        var t = {
            data: {},
            possibleCombo: []
        };
        "string" == typeof e ? t.selector = e : e && 1 === e.nodeType ? t.el = e : t.el = w;
        var a = C.push(t);
        t.stack = new Error("stack").stack.split("\n"), t.stack.shift(), t.stack = t.stack.join("\n");
        var r = {
            session: t,
            config: function(e) {
                return e ? ($extend(t, e), r) : t
            },
            up: function(e) {
                return t.up = e, r
            },
            down: function(e) {
                return t.down = e, r
            },
            combo: function(e) {
                var a = l(e);
                return t.combo ? t.combo = t.combo.concat(a) : t.combo = a, t.combo = t.combo.sort(function(e, t) {
                    return t.keys.length - e.keys.length
                }), r
            },
            destroy: function() {
                C.splice(a - 1, 1)
            }
        };
        return r.set = r.combo, r
    }! function(e) {
        Element && !e.matches && (e.matches = e.matchesSelector || e.mozMatchesSelector || e.msMatchesSelector || e.oMatchesSelector || e.webkitMatchesSelector)
    }(Element.prototype);
    var d, u, f, h, v, m, w = document.documentElement,
        y = String.fromCharCode,
        k = !1,
        g = [],
        C = [{
            data: {}
        }],
        b = "ctrl super altgr left up right down space caps scroll print menu esc ins del",
        P = ["⌫ Bksp Backspace", "↲ Enter", "⇧ Shift", "⇫ Caps CapsLock", "Option Alt", "Ctrl Control", "🍐 ♥  ⌘ Cmd Win Meta Super Command OS", "⇞ PgUp PageUp", "⇟ PgDn PgDown PageDown", "↖ Home", "↘ End", "↤ ← Left ArrowLeft", "↥ ↑ Up ArrowUp", "↦ → Right ArrowRight", "↧ ↓ Down ArrowDown", "⎵ Space Spacebar", "Del Delete", "Ins Insert", "Print PrintScr PrintScreen", "☰ Menu Apps Context_menu ContextMenu", "ScrLk Scroll ScrollLock", "AltGr AltGraph", "Break Pause", "Esc Escape", "Multiply *", "Add +", "Subtract -", "Decimal Period .", "Divide Slash /", "Backslash \\", "Equals =", "Semicolon ;", "Comma ,", "Hash Sharp Hashtag Octothorpe #"],
        S = {
            3: "Enter",
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: "Spacebar",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            44: "PrintScreen",
            45: "Insert",
            46: "Delete",
            91: "OS",
            92: "OS",
            93: "ContextMenu",
            96: "Insert",
            108: "Enter",
            124: "PrintScreen",
            127: "Delete",
            144: "NumLock",
            145: "ScrollLock",
            224: "OS",
            225: "AltGraph",
            63232: "ArrowUp",
            63233: "ArrowDown",
            63234: "ArrowLeft",
            63235: "ArrowRight",
            63272: "Delete",
            63273: "Home",
            63275: "End",
            63276: "PageUp",
            63277: "PageDown",
            63302: "Insert"
        },
        L = {},
        A = {},
        E = {},
        O = {},
        D = {},
        U = {},
        x = {};
    for (m = 1; m <= 12; m++) S[m + 111] = S[m + 63235] = "F" + m;
    ! function() {
        for (var e = 0, t = P.length; e < t; e++)
            for (var a = P[e].split(" "), r = a.pop(), o = a.length - 1; o >= 0; o--) a[o].length < 3 ? (E[r] = a[o], E[r + "Right"] = a[o]) : a[o].length < r.length && (A[r] = a[o], A[r + "Right"] = a[o]), L[a[o].toLowerCase()] = r;
        for (var n = b.split(" "), i = n[0].toLowerCase() === n[0] ? "toLowerCase" : n[0].toUpperCase() === n[0] ? "toUpperCase" : null, e = 0, t = n.length; e < t; e++) D[L[n[e].toLowerCase()]] = n[e];
        for (var c in S) S.hasOwnProperty(c) && (O[c] = D[S[c]] || (i ? S[c][i]() : S[c]), D[S[c]] = O[c], U[O[c]] = S[c]);
        d = D.Shift, u = D.Alt, f = D.AltGraph, h = D.Control, v = D.CapsLock;
        for (var c in x) x.hasOwnProperty(c) && delete x[c];
        x.normal = {
            normal: {}
        }, x.normal[u] = {}, x.normal[f] = {}, x.normal[h] = {}, x[d] = {
            normal: {}
        }, x[d][u] = {}, x[d][f] = {}, x[d][h] = {}, x[v] = {
            normal: {}
        }, x[v][u] = {}, x[v][f] = {}, x[v][h] = {}
    }(), w.addEventListener("keydown", c, !1), w.addEventListener("keypress", c, !1), w.addEventListener("keyup", c, !1), w.setAttribute("tabindex", "0"), w.addEventListener("focus", function(e) {
        s(e)
    }, !0), w.addEventListener("click", function(e) {
        s(e)
    }, !0), w.focus(), w.addEventListener("focusout", function(e) {
        setTimeout(function() {
            if (!document.hasFocus())
                for (var e in p) p.hasOwnProperty(e) && (p[e] = !1)
        }, 0)
    }, !1), w.addEventListener("dblclick", function(e) {
        for (var t in p) p.hasOwnProperty(t) && (p[t] = !1)
    }, !1), Object.defineProperties(p, {
        alias: {
            value: {
                small: function(e) {
                    return A[e] || e
                },
                symbol: function(e) {
                    return E[e] || A[e] || e
                },
                favorite: function(e) {
                    return O[e] || e
                }
            }
        },
        keys: {
            get: function() {
                var e, t = [];
                for (e in p) p.hasOwnProperty(e) && p[e] && t.push(e);
                return t
            }
        },
        activate: {
            value: function() {
                console.log("active")
            }
        }
    }), e.$key = p
}(this);
//js/inputs/gamepad.js
! function(n) {
    "use strict";

    function o(n) {
        console.log(n)
    }
    n.$gamepad = o
}(this);
//js/inputs/wheel.js
! function(e) {
    "use strict";

    function t(e, t, i) {
        function a(e) {
            e = window.event || e, w ? w.isEqualNode(e.target) && (e.preventDefault(), y(e)) : v.noscroll ? (e.preventDefault(), y(e)) : y(e)
        }

        function o(e) {
            e.preventDefault(), clearTimeout(f), f = setTimeout(function() {
                c()
            }, m)
        }

        function r(e) {
            e.preventDefault(), h(), clearTimeout(f)
        }

        function c() {
            e.addEventListener("mousewheel", a, !1), e.addEventListener("DOMMouseScroll", a, !1)
        }

        function h() {
            e.removeEventListener("mousewheel", a, !1), e.removeEventListener("DOMMouseScroll", a, !1)
        }
        if ("object" == typeof e && !(e instanceof HTMLElement)) return n = e;
        var u, f, d = e,
            v = $extend({}, n, i),
            m = v.delayy,
            w = v.handler;
        if (e + "" === e && ((e = document.getElementById(d)) || (e = document.querySelector(d))), e) {
            s[++l] = t, e.setAttribute("data-wheel-id", l);
            var y = function(t) {
                var n = t.wheelDelta ? t.wheelDelta / 40 : t.detail ? -t.detail : 0;
                return s[l].call(e, n, t), !1
            };
            if (v.acceleration) {
                var E = 0,
                    L = !0;
                u = setInterval(function() {
                    (E -= .1 * E) < 0 && (E = 0)
                }, v.acceleration), y = function(t) {
                    E += 1;
                    var n = t.wheelDelta ? t.wheelDelta / 40 : t.detail ? -t.detail : 0;
                    return n > 0 ? (!1 === L && (E = 1), L = !0) : (!0 === L && (E = 1), L = !1), s[l].call(e, n, E, t), !1
                }
            }
            return v.throttle && (a = $io.fn.throttle(a, v.throttle)), v.debounce && (a = $io.fn.debounce(a, v.debounce)), e.addEventListener("mouseenter", m ? o : c, !1), e.addEventListener("mouseleave", m ? r : h, !1), {
                destroy: function() {
                    e.removeEventListener("mouseenter", m ? o : c, !1), e.removeEventListener("mouseleave", m ? r : h, !1), clearTimeout(f), clearInterval(u);
                    var t = e.getAttribute("data-wheel-id");
                    t && s[t] && delete s[t], e.removeEventListener("mousewheel", a, !1), e.removeEventListener("DOMMouseScroll", a, !1), console.log("$wheel destroy : ", e.getAttribute("data-wheel-id"))
                }
            }
        }
    }
    var s = {},
        l = 0,
        n = {
            debounce: 0,
            noscroll: !1,
            handler: null,
            delay: 0
        };
    t.scale = function(e, s) {
        var l = $extend({
            negatif: !1
        }, s);
        e.scaleX = 1, e.scaleY = 1;
        var n = e.offsetWidth,
            i = e.offsetHeight,
            a = t(e, function(e, t) {
                var s = this.scaleX,
                    a = this.scaleY;
                e > 0 ? (this.scaleX += .1 * this.scaleX, this.scaleY += .1 * this.scaleY) : (this.scaleX -= .1 * this.scaleX, this.scaleY -= .1 * this.scaleY), l.negatif ? (this.scaleX < .1 && (this.scaleX = .1), this.scaleY < .1 && (this.scaleY = .1)) : (this.scaleX < 1 && (this.scaleX = 1), this.scaleY < 1 && (this.scaleY = 1)), this.style.width = n * this.scaleX + "px", this.style.height = i * this.scaleY + "px";
                var o = 1 - this.scaleX / s,
                    r = 1 - this.scaleY / a,
                    c = this.offsetLeft,
                    h = this.offsetTop;
                c += (t.clientX - this.offsetLeft) * o, h += (t.clientY - this.offsetTop) * r, this.style.top = h + "px", this.style.left = c + "px"
            });
        return {
            destroy: function() {
                a.destroy(), delete e.scaleW, delete e.scaleH
            }
        }
    }, e.$wheel = t
}(this);
//js/ui/cli.js
! function(e) {
    "use strict";

    function t(e) {
        return "string" == typeof e ? e : $io.isNumber(e) ? '<span class="sh_number">' + e + "</span>" : void 0 === e ? "undefined" : null === e ? "null" : "function" == typeof e ? $io.str.hilit($io.fn.str(e)) : $io.isObject(e) || $io.isArray(e) ? $io.str.hilit($io.stringify(e, 2)) : "function" == typeof e.constructor ? "<span class=sh_init>" + e.constructor.name + "</span> " + $io.str.hilit($io.stringify(e, 2), !0) : e
    }

    function o(e, t) {
        for (var i in e) {
            var r = e[i];
            if (i == t) return;
            "string" == typeof r || "number" == typeof r || "boolean" == typeof r ? n.pad(i, r + "", ".") : $io.is.Object(r) && o(r, t)
        }
    }

    function n(e, r, s) {
        if (l.clear) return l.el.innerHTML = "", void(l.clear = "");
        if (l.repeat && (e = e.repeat(l.cols), l.repeat = ""), l.code && (e = $io.str.hilit(e), l.code = ""), l.pass && (e = "✔ " + e, a += "ui_log__green", l.pass = ""), l.fail && (e = "✘ " + e, a += "ui_log__red", l.fail = ""), l.info && (e = "ℹ " + e, a += "ui_log__blue", l.info = ""), l.italic && (a += " italic", l.italic = ""), l.bold && (a += " bold", l.bold = ""), l.white && (a += " ui_log__white", l.white = ""), l.yellow && (a += " ui_log__yellow", l.yellow = ""), l.cyan && (a += " ui_log__cyan", l.cyan = ""), l.magenta && (a += " ui_log__magenta", l.magenta = ""), l.blue && (a += " ui_log__blue", l.blue = ""), l.red && (a += " ui_log__red", l.red = ""), l.succes && (a += " ui_log__green", l.succes = ""), l.green && (a += " ui_log__green", l.green = ""), l.error && (a += " ui_log__red js_error", l.error = ""), l.obj) return l.obj = "", void o(e, r);
        if ("Error" === $io.type(e) && (e = e.constructor.name + "\n" + e.message + $io.str.autolink(e.stack)), l.pad) {
            var c;
            s ? c = s : (c = r, r = "");
            var u = l.cols - 3 - (e.length + (r || "").length + (r ? 2 : 1));
            (e = e + " " + c.repeat((3 + (u >= 0 ? u : 0)) / c.length) + (r ? " " + r : "")).length > l.cols && (e = e.match(new RegExp(".{1," + l.cols + "}", "g")).join("\n")), l.pad = ""
        } else r && (e = $io.arg.arr(arguments).join(", "));
        return l.el ? (i = document.createElement("div"), i.innerHTML = t(e), i.className = a, l.el.appendChild(i), n.trigger("addline"), a = "", i) : void 0
    }
    for (var i, r = ["clear", "error", "error", "succes", "fail", "pass", "warn", "info", "bold", "italic", "red", "blue", "green", "white", "yellow", "cyan", "magenta", "html", "autolink", "code", "pad", "right", "center", "repeat", "stack", "save", "stay", "id", "fast", "group", "noop", "obj", "end"], l = {
            el: null
        }, s = {}, a = "", c = 0, u = r.length; c < u; c++) l[r[c]] = "", s[r[c]] = function(e) {
        return function() {
            l[e] = "1"
        }
    }(r[c]);
    n.config = function(e) {
        return $extend(l, e), n
    }, $watch(n), e.$log = $chain(n, s, s)
}(this),
function(e) {
    "use strict";

    function t(e) {
        e.scrollTop = e.scrollHeight
    }

    function o(e) {
        e.style.height = e.scrollHeight + "px"
    }

    function n(n, r) {
        function l() {
            $log.config({
                cols: u.cols,
                el: p
            })
        }

        function s() {
            e.$selection && ($selection.get() || setTimeout(function() {
                f.focus(), l()
            }, 200))
        }

        function a(e) {
            o(e), t(e)
        }
        var c = {
                cols: 59,
                exe: $noop,
                prompt: ">",
                history: i
            },
            u = $extend(c, r),
            d = document.createElement("code"),
            p = document.createElement("div"),
            y = document.createElement("div"),
            g = document.createElement("span"),
            f = document.createElement("textarea");
        if (n) {
            u.prompt += "&nbsp;", g.innerHTML = u.prompt, f.innerHTML = "", f.spellcheck = !1, f.rows = "1", f.style.outline = "0 none", f.style.boxShadow = "0 0 transparent", f.style.textShadow = "0 0 transparent", f.style.border = "0 none", f.style.verticalAlign = "top", f.style.resize = "none", f.style.padding = "0", f.style.margin = "0", f.style.height = "auto", f.style.width = "100%", f.style.color = "inherit", f.style.font = "inherit", f.style.fontSize = "inherit", f.style.background = "transparent", f.style.overflow = "hidden", f.style.textIndent = "0", y.style.display = "table", y.style.tableLayout = "fixed", f.style.display = "table-cell", g.style.display = "table-cell", g.style.width = "1%", g.style.whiteSpace = "nowrap", y.appendChild(g), y.appendChild(f), d.appendChild(p), d.appendChild(y), d.style.display = "block", d.style.width = u.cols + "ch", d.style.whiteSpace = "pre-wrap", d.style.wordBreak = "break-word", d.style.wordWrap = "break-word", n.appendChild(d), n.style.overflowY = "scroll", u.rows && (n.style.height = u.rows + "em"), $log.on("addline", function() {
                t(n)
            }), n.addEventListener("mouseup", s, !1), n.addEventListener("contextmenu", s, !1), f.addEventListener("mouseup", function(e) {
                e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0, e.stopImmediatePropagation(), l()
            }, !1), f.addEventListener("paste", function(e) {
                setTimeout(function() {
                    a(f)
                }, 0)
            }, !1);
            var h = 0,
                m = !1,
                _ = $key(n).down(function(e, t, o) {
                    a(f);
                    var n = u.history.length;
                    if (!1 === $.onkey(e, f.value)) return !1;
                    if ("enter" == e) {
                        var i = $io.str.trim(f.value);
                        if (!i) return $.log(u.prompt), !1;
                        if (f.value = "", f.style.height = "auto", h = 0, !1 === $.onenter(i)) return !1;
                        if ($.log(u.prompt + i), u.history[n - 1] != i && u.history.push(i), !u.exe.call($, i)) try {
                            $.log(eval.call(window, i))
                        } catch (o) {
                            $.log.error(o.message + "\n")
                        }
                        return !1
                    }
                    if (f.value || (m = !1), !m) {
                        if ("up" == e) return ++h > n && (h = n), f.value = u.history[n - h] || "", a(f), !1;
                        if ("down" == e) return --h < 0 && (h = 0), f.value = u.history[n - h] || "", a(f), !1
                    }
                }),
                w = $log.config({
                    cols: u.cols,
                    el: p
                }),
                $ = {
                    cli: !0,
                    cfg: u,
                    destroy: function() {
                        _.destroy(), this.ondestroy(), console.log("@todo : terminal destroy")
                    },
                    setFocus: s,
                    ondestroy: $noop,
                    onenter: $noop,
                    onkey: $noop,
                    prompt: g,
                    input: f,
                    log: w
                };
            return $
        }
    }
    n.clearhistory = function() {
        i.length = 0
    };
    var i = e.$store ? $store(".config/history.json", [], function(e) {
        i = e
    }, function() {
        return i
    }) : [];
    e.$cli = n
}(this);
//js/ui/box.js
! function(t) {
    "use strict";

    function e(t, e) {
        document.documentElement.addEventListener(t, e, !1)
    }

    function o(t, e) {
        document.documentElement.removeEventListener(t, e, !1)
    }

    function n(t) {
        var e = t.changedTouches ? t.changedTouches[0] : null;
        return e ? {
            x: e.clientX,
            y: e.clientY
        } : {
            x: t.clientX,
            y: t.clientY
        }
    }

    function r(t, e) {
        return !(t.right <= e.left || t.left >= e.right || t.bottom <= e.top || t.top >= e.bottom)
    }

    function c(t, c, l) {
        function s() {
            if (g.target) {
                for (var t = x.querySelectorAll(g.target), e = [], o = 0, n = t.length; o < n; o++) r(E, t[o].getBoundingClientRect()) && e.push(t[o]);
                return e
            }
        }

        function i(t) {
            g.onstart.call(x, t, b), S = !0
        }

        function a(t) {
            var e = n(t);
            m = e.x - h, p = e.y - f;
            var o = Math.abs(m),
                r = Math.abs(p);
            E.top = p > 0 ? f : e.y, E.left = m > 0 ? h : e.x, b.style.top = E.top + "px", b.style.left = E.left + "px", (o > g.distance || r > g.distance) && w === x.scrollTop && (t.preventDefault(), S || i(t), b.style.display = "block", E.right = E.left + o, E.bottom = E.top + r, b.style.width = o + "px", b.style.height = r + "px", g.ondraw.call(x, t, s()))
        }

        function u(t) {
            if (this.isEqualNode(t.target || t.srcElement)) {
                w = x.scrollTop;
                var o = n(t);
                x.appendChild(b), h = o.x, f = o.y, a(t), e("mousemove", a), e("touchmove", a), e("mouseup", d), e("touchend", d), e("contextmenu", d), g.oninit.call(x, t, b)
            }
        }

        function d(t) {
            o("mousemove", a), o("touchmove", a), o("mouseup", d), o("touchend", d), o("contextmenu", d), g.onstop.call(x, t, s()), b.style.display = "none", x.removeChild(b), S = !1, w = x.scrollTop
        }
        if ("object" == typeof c && (l = c, c = null), "string" == typeof t && (t = document.querySelector(t)), !t) throw new Error("$box : element missing");
        var m, p, h, f, y, v = {
                distance: 10,
                oninit: $noop,
                onstart: $noop,
                ondraw: function(t, e, o) {},
                onstop: $noop
            },
            g = $extend(v, l),
            x = t;
        y = c ? function(t) {
            for (var e = t.target; e && 1 == e.nodeType && !e.matches(c);) e = e.parentNode;
            e && 9 != e.nodeType && (x = e, u.call(x, t))
        } : u;
        var b = document.createElement("div");
        b.className = "ui_select_box", b.style.position = "fixed", b.style.zIndex = 9999, b.style.border = "1px dotted #000", b.style.backgroundColor = "rgba(0,0,0,.1)", b.style.display = "none";
        var E = {
                right: 0,
                left: 0,
                bottom: 0,
                top: 0
            },
            w = 0,
            S = !1;
        return t.addEventListener("mousedown", y, !1), t.addEventListener("touchstart", y, !1), {
            destroy: function() {
                t.removeEventListener("mousedown", y, !1), t.removeEventListener("touchstart", y, !1)
            }
        }
    }! function(t) {
        Element && !t.matches && (t.matches = t.matchesSelector || t.mozMatchesSelector || t.msMatchesSelector || t.oMatchesSelector || t.webkitMatchesSelector)
    }(Element.prototype), c.overlap = r, t.$box = c
}(this);
//js/ui/drag.js
! function(e) {
    "use strict";

    function t(e, t) {
        document.documentElement.addEventListener(e, t, !1)
    }

    function n(e, t) {
        document.documentElement.removeEventListener(e, t, !1)
    }

    function o(e) {
        var t = e.changedTouches ? e.changedTouches[0] : null;
        return t ? {
            x: t.clientX,
            y: t.clientY
        } : {
            x: e.clientX,
            y: e.clientY
        }
    }

    function i(e, s, l) {
        function r(e) {
            var t = o(e);
            f = t.x - v, p = t.y - x, (i.isDragging || Math.abs(f) > $.distance || Math.abs(p) > $.distance) && (c(e), i.isDragging || m(e), f += h, p += y, $.constrain && (f = f > b ? b : f < N ? N : f, p = p > z ? z : p < w ? w : p), $.grid && (f = ~~((f + $.grid[0] / 2) / $.grid[0]) * $.grid[0], p = ~~((p + $.grid[1] / 2) / $.grid[1]) * $.grid[1]), $.ghost ? i.ghost && (i.ghost.style.left = f + "px", i.ghost.style.top = p + "px") : (i.elem.style.left = f + "px", i.elem.style.top = p + "px"), i.x = f, i.y = p, $.ondrag.call(i.elem, e, f, p), $.zone && a(e, t))
        }

        function a(e, t) {
            var n = document.elementFromPoint(t.x, t.y);
            for (var o in $.zone)
                if ($.zone.hasOwnProperty(o)) {
                    for (var s = $.zone[o], l = n; l && 1 == l.nodeType && !l.matches(o);) l = l.parentNode;
                    l && 9 != l.nodeType ? (i.zone !== l && (s.leave && i.zone && s.leave(e, i.zone, i.elem), s.enter && s.enter(e, l, i.elem)), i.zone = l) : i.zone && (s.leave && s.leave(e, i.zone, i.elem), i.zone = null), s.move && i.zone && s.move(e, i.zone, i.elem)
                }
        }

        function u(e) {
            var t = !1,
                n = o(e);
            document.elementFromPoint(n.x, n.y);
            for (var s in $.zone)
                if ($.zone.hasOwnProperty(s)) {
                    var l = $.zone[s];
                    l.drop && i.zone && (t = !0, l.drop(e, i.zone, i.elem))
                }
            return t
        }

        function m(e) {
            if ($.ghost) document.body.appendChild(i.ghost);
            else {
                var t = getComputedStyle(i.elem, null);
                if (h = i.elem.offsetLeft - (parseInt(t.marginLeft) || 0), y = i.elem.offsetTop - (parseInt(t.marginTop) || 0), "absolute" === $.position || "fixed" === $.position) i.elem.style.position = "fixed" == t.position ? "fixed" : "absolute", i.elem.style.boxSizing = i.elem.style.webkitBoxSizing = i.elem.style.MozBoxSizing = "border-box", i.elem.style.height = i.elem.offsetHeight + "px", i.elem.style.width = i.elem.offsetWidth + "px", i.elem.style.left = h + "px", i.elem.style.top = y + "px";
                else {
                    var n = parseInt(t.left) || 0,
                        o = parseInt(t.top) || 0;
                    $.constrain && (z = z - y + o, w = w - y + o, b = b - h + n, N = N - h + n), h = n, y = o, i.elem.style.position = "relative", i.elem.style.left = h + "px", i.elem.style.top = y + "px"
                }
                i.elem.classList.add("ui_is_dragging")
            }
            $.onstart.call(i.elem, e), i.isDragging = !0
        }

        function g(n, l) {
            c(n), i.elem = l || (s ? this : e);
            var a = o(n);
            if (v = a.x, x = a.y, $.ghost) {
                i.ghost = i.createGhost(i.elem);
                var u = i.elem.getBoundingClientRect();
                h = u.left, y = u.top
            } else i.ghost = null, h = i.elem.offsetLeft, y = i.elem.offsetTop;
            i.initialPos.x = h, i.initialPos.y = y, r(n), t("mousemove", r), t("touchmove", r), t("mouseup", d), t("touchend", d), t("contextmenu", c), $.oninit.call(i.elem, n)
        }

        function d(e) {
            if (n("mousemove", r), n("touchmove", r), n("mouseup", d), n("touchend", d), n("contextmenu", c), i.isDragging) {
                var t = !1;
                $.zone && i.elem && (t = u(e)), t || $.ondrop.call(i.elem, e), $.onstop.call(i.elem, e)
            }
            i.elem && i.elem.classList.remove("ui_is_dragging"), i.zone = null, i.elem = null, i.initialPos.x = null, i.initialPos.y = null, i.x = null, i.y = null, i.cfg = null, i.isDragging = !1
        }

        function c(e) {
            document.activeElement.blur(), e.preventDefault()
        }
        if ("object" == typeof s && (l = s, s = null), "string" == typeof e && (e = document.querySelector(e)), !e) throw new Error("$drag : element missing");
        var f, p, y, h, v, x, z, b, T, E, L, P = {
                constrain: !1,
                ghost: !1,
                grid: !1,
                position: "absolute",
                handle: null,
                distance: 5,
                oninit: $noop,
                onstart: $noop,
                ondrag: $noop,
                onstop: $noop,
                ondrop: $noop
            },
            $ = $extend(P, l),
            w = 0,
            N = 0,
            D = s ? $delegate(s, g) : g;
        if ("function" == typeof $.ghost && Object.defineProperty($, "ghost", {
                get: function() {
                    return l.ghost($)
                }
            }), "function" == typeof $.grid && Object.defineProperty($, "grid", {
                get: l.grid
            }), i.elem = e, i.zone = null, i.isDragging = !1, s) L = e, T = E = e;
        else
            for (L = $.handle || e, E = T = e.parentNode; E.parentNode && 9 !== E.parentNode.nodeType && "static" == window.getComputedStyle(T, null).position;) E = E.parentNode;
        return z = E.offsetHeight - e.offsetHeight - .5, b = E.offsetWidth - e.offsetWidth - .5, L.addEventListener("mousedown", D, !1), L.addEventListener("touchstart", D, !1), {
            destroy: function() {
                i.isDragging = !1, i.removeGhost(), d(), L.removeEventListener("mousedown", D, !1), L.removeEventListener("touchstart", D, !1)
            }
        }
    }
    i.createGhost = function(e, t) {
        e.classList.add("ui_is_dragging");
        var n = e.cloneNode(!0),
            o = n.getElementsByTagName("*"),
            i = e.getElementsByTagName("*");
        n.style.cssText = getComputedStyle(e, null).cssText;
        for (var s = 0, l = o.length; s < l; s++) o[s].style.cssText = getComputedStyle(i[s], null).cssText, o[s].style.pointerEvents = "none";
        return n.classList.add("js-ghost"), n.style.pointerEvents = "none", n.style.position = "fixed", n.style.zIndex = 9999, n.style.opacity = ".7", e.classList.remove("ui_is_dragging"), n
    }, i.initialPos = {
        x: null,
        y: null
    }, i.revert = function(e, t) {
        $transition.revert(i.ghost || i.elem, i.initialPos, function() {
            i.ghost && i.removeGhost()
        })
    }, i.removeGhost = function() {
        i.ghost && i.ghost.parentNode && i.ghost.parentNode === document.body && document.body.removeChild(i.ghost), i.ghost = null
    }, e.$drag = i
}(this),
function(e) {
    "use strict";

    function t(e) {
        console.log(e)
    }
    var n = function() {
        var e, t = document.createElement("div"),
            n = ["Webkit", "Moz", "O", "ms"];
        if ("transition" in t.style) return "transition";
        for (e = 0; e < n.length; e++)
            if (n[e] + "Transition" in t.style) return n[e] + "Transition";
        return "transition"
    }();
    t.revert = function(e, t, o, i) {
        if (void 0 === i && (i = 300), e && null !== t.x) {
            var s = e.style[n];
            e.style[n] = "left " + i + "ms ease, top " + i + "ms ease", e.style.left = t.x + "px", e.style.top = t.y + "px", setTimeout(function() {
                e.style[n] = s, "function" == typeof o && o()
            }, i)
        }
    }, e.$transition = t
}(this);
//js/ui/pos.js
! function(t) {
    "use strict";

    function e(t, e, n) {
        return t = t.replace(/([a-z]+)([+-])?/g, function(t, e, o) {
            return ("top" == e ? "bottom" : "bottom" == e ? "top" : "right" == e ? "left" : "left" == e ? "right" : e) + ("+" == o ? "-" : "-" == o ? "+" : "")
        }), o(t, e, n)
    }

    function o(t, e, o) {
        var n = o || {
                top: 0,
                left: 0
            },
            f = e.offsetHeight || 0,
            i = e.offsetWidth || 0;
        return t.replace(/(?:(right|left|center)(?:([+-])(\d+)(%)?)?)? ?(?:(top|bottom|center)(?:([+-])(\d+)(%)?)?)?/, function(t, e, o, l, r, p, s, a, u) {
            p || (p = "center"), e || (e = "center"), "right" == e && (n.left += i), "center" == e && (n.left += i / 2), "bottom" == p && (n.top += f), "center" == p && (n.top += f / 2), r && (l = i / 100 * +l), u && (a = f / 100 * +a), l && (n.left = n.left - +(o + l)), a && (n.top = n.top - +(s + a))
        }), n
    }

    function n(t, n) {
        function f(t) {
            if (t || (t = d.of), 1 === t.nodeType) {
                var e = t.getBoundingClientRect();
                s = e.left, a = e.top
            } else t.preventDefault && (s = t.pageX, a = t.pageY);
            p(s, a, s, a)
        }
        if (!t) throw new Error("$pos: element is undefined");
        t.style.position = "fixed";
        for (var i = t.parentNode, l = window.getComputedStyle(i, null), r = {
                top: 0,
                left: 0
            }; i.parentNode && 9 !== i.parentNode.nodeType && "none" == l.transform && "none" == l.perspective;) i.getAttribute("data-ui-menu-scroller") && i, i = i.parentNode, l = window.getComputedStyle(i, null);
        r = i.getBoundingClientRect();
        var p, s, a, u = {
                my: "left top",
                at: "left bottom",
                of: {},
                collision: "flip",
                within: window,
                transform: !1,
                overflow: "none"
            },
            d = $extend(u, n),
            c = o(d.my, t),
            h = o(d.at, d.of),
            g = h.top - c.top - r.top,
            w = h.left - c.left - r.left,
            y = {
                x: 0,
                y: 0,
                h: 0,
                w: 0
            },
            m = {};
        $io.isWindow(d.within) || !d.within ? (y.h = window.innerHeight, y.w = window.innerWidth) : (m = d.within.getBoundingClientRect(), y.x = m.left, y.y = m.top, y.h = d.within.offsetHeight, y.w = d.within.offsetWidth), t.offsetHeight > y.h && function() {
            var e, o = d.of.getBoundingClientRect().top - y.y,
                n = y.h - o - d.of.offsetHeight;
            e = t.parentNode.isEqualNode(d.of) ? y.h : o > n ? o : n, t.style.height = e + "px", t.setAttribute("data-ui-menu-scroller", !0)
        }();
        var x = r.left == m.left ? 0 : m.left,
            v = r.top == m.top ? 0 : m.top,
            b = y.w - t.offsetWidth + x,
            C = y.h - t.offsetHeight + v;
        if (1 === d.of.nodeType) var T = window.getComputedStyle(d.of, null),
            H = T.transform || T.webkitTransform || T.MozTransform || T.msTransform;
        if (H && "none" != H) t.style.transformOrigin = T.transformOrigin, p = function() {
            var e, o, n, f;
            0 == r.left ? (e = m.left, o = m.top, n = w, f = g) : (e = 0, o = 0, n = w + m.left, f = g + m.top), t.style.left = d.of.offsetLeft + e + "px", t.style.top = d.of.offsetTop + o + "px", t.style.transform = H + " translateX(" + n + "px) translateY(" + f + "px)"
        };
        else if ("fit" == d.collision) p = function(e, o) {
            o += g, e = (e += w) > b ? b : e < x ? x : e, o = o > C ? C : o < v ? v : o, t.style.left = e + "px", t.style.top = o + "px"
        };
        else if ("flip" == d.collision || "flipfit" == d.collision) {
            var N = e(d.my, t),
                W = e(d.at, d.of),
                B = W.top - N.top - r.top,
                R = W.left - N.left - r.left;
            p = "flipfit" == d.collision ? function(e, o, n, f) {
                o += g, ((e += w) > b || e < x) && (e = n + R), (o > C || o < v) && (o = f + B), e = e > b ? b : e < x ? x : e, o = o > C ? C : o < v ? v : o, t.style.left = e + "px", t.style.top = o + "px"
            } : function(e, o, n, f) {
                o += g, ((e += w) > b || e < x) && (e = n + R), (o > C || o < v) && (o = f + B), t.style.left = e + "px", t.style.top = o + "px"
            }
        } else p = function(e, o) {
            t.style.left = e + w + "px", t.style.top = o + g + "px"
        };
        return f(d.of), {
            update: f
        }
    }
    t.$pos = n
}(this);
//js/ui/resize.js
! function(e) {
    "use strict";

    function t(e, t) {
        document.documentElement.addEventListener(e, t, !1)
    }

    function o(e, t) {
        document.documentElement.removeEventListener(e, t, !1)
    }

    function n(e) {
        var t = e.changedTouches ? e.changedTouches[0] : null;
        return t ? {
            x: t.clientX,
            y: t.clientY
        } : {
            x: e.clientX,
            y: e.clientY
        }
    }

    function s() {
        for (var e = document.querySelectorAll("iframe"), t = 0, o = e.length; t < o; t++) e[t].dataset.oldPointerEvents = e[t].style.pointerEvents, e[t].style.pointerEvents = "none"
    }

    function r() {
        for (var e = document.querySelectorAll("iframe"), t = 0, o = e.length; t < o; t++) e[t].style.pointerEvents = e[t].dataset.oldPointerEvents, delete e[t].dataset.oldPointerEvents
    }

    function i(e) {
        e.dataset.oldTransform = e.style.transitionDuration, e.style.transitionDuration = "0s"
    }

    function l(e) {
        e.style.transitionDuration = e.dataset.oldTransform, delete e.dataset.oldTransform
    }

    function u(e, u) {
        function y() {
            for (var e = 0, t = g.length; e < t; e++) g[e].destroy()
        }
        if ("string" == typeof e && (e = document.querySelector(e)), !e) throw new Error("$resize : element missing");
        if (!e.getAttribute("data-js-resize-init")) {
            e.setAttribute("data-js-resize-init", !0);
            for (var c = e.parentNode; c && c.parentNode && 9 !== c.parentNode.nodeType && "static" == window.getComputedStyle(c, null).position;) c = c.parentNode;
            "string" == typeof u && (u = {
                handles: u
            });
            var p = window.getComputedStyle(e, null),
                h = {
                    handles: "e, s, se",
                    onstart: a,
                    onresize: a,
                    onstop: a
                },
                f = $extend(h, u),
                m = "fixed" == p.position || "absolute" == p.position,
                v = e.getBoundingClientRect(),
                w = (v.top, v.left, []);
            "static" != p.position && "" != p.position || (e.style.position = "relative"), "all" == f.handles ? w = ["n", "w", "e", "s", "nw", "ne", "sw", "se"] : f.handles.replace(/([^,\s]+)/g, function(e, t) {
                w.push(t)
            });
            for (var g = [], x = 0, z = w.length; x < z; x++) g.push(function(e, u) {
                function a(e) {
                    e.preventDefault(), e.stopPropagation(), c(e)
                }

                function y(e) {
                    e.preventDefault()
                }

                function c(o) {
                    var r = n(o);
                    w = r.x, g = r.y, x = e.offsetWidth, z = e.offsetHeight, E = e.offsetTop, b = e.offsetLeft, t("mousemove", N), t("touchmove", N), t("mouseup", p), t("touchend", p), t("contextmenu", y), s(), i(e), document.documentElement.style.cursor = u + "-resize", f.onstart && f.onstart(e, o)
                }

                function p(t) {
                    document.documentElement.style.cursor = "auto", r(), l(e), o("mousemove", N), o("touchmove", N), o("mouseup", p), o("touchend", p), o("contextmenu", y), f.onstop && f.onstop(e, t)
                }

                function h(t) {
                    var o = n(t);
                    if ("s" !== u && "se" !== u && "sw" !== u || (e.style.height = z + o.y - g + "px"), "e" !== u && "ne" !== u && "se" !== u || (e.style.width = x + o.x - w + "px"), "n" === u || "ne" === u || "nw" === u) {
                        s = o.y - g;
                        m && (e.style.top = E + s + "px"), e.style.height = z - s + "px"
                    }
                    if ("w" === u || "nw" === u || "sw" === u) {
                        var s = o.x - w;
                        m && (e.style.left = b + s + "px"), e.style.width = x - s + "px"
                    }
                    f.onresize && f.onresize(e, t)
                }

                function v() {
                    L.removeEventListener("mousedown", a, !1), L.removeEventListener("touchstart", a, !1), L.parentNode && L.parentNode.removeChild(L)
                }
                var w, g, x, z, E, b, N, L = d.cloneNode(),
                    u = u || "s";
                try {
                    N = $io.fn.throttle(h, 15)
                } catch (e) {
                    N = h
                }
                return L.className = "js-resizer js-resizer-" + u, "n" == u ? (L.style.bottom = "auto", L.style.height = "6px", L.style.cursor = "n-resize") : "s" == u ? (L.style.top = "auto", L.style.height = "6px", L.style.cursor = "s-resize") : "e" == u ? (L.style.left = "auto", L.style.width = "6px", L.style.cursor = "e-resize") : "w" == u ? (L.style.right = "auto", L.style.width = "6px", L.style.cursor = "w-resize") : "nw" == u ? (L.style.bottom = "auto", L.style.right = "auto", L.style.height = "6px", L.style.width = "6px", L.style.cursor = "nw-resize") : "ne" == u ? (L.style.bottom = "auto", L.style.left = "auto", L.style.height = "6px", L.style.width = "6px", L.style.cursor = "ne-resize") : "sw" == u ? (L.style.top = "auto", L.style.right = "auto", L.style.height = "6px", L.style.width = "6px", L.style.cursor = "sw-resize") : "se" == u && (L.style.top = "auto", L.style.left = "auto", L.style.height = "6px", L.style.width = "6px", L.style.cursor = "se-resize"), e.appendChild(L), L.addEventListener("mousedown", a, !1), L.addEventListener("touchstart", a, !1), {
                    destroy: v
                }
            }(e, w[x]));
            return {
                destroy: y
            }
        }
    }
    var a = e.$noop || function(e) {},
        d = document.createElement("div");
    d.style.position = "absolute", d.style.zIndex = "999", d.style.top = "0", d.style.bottom = "0", d.style.left = "0", d.style.right = "0", d.style.pointerEvents = "auto", e.$resize = u
}(this);
//js/ui/notif.js
! function(e) {
    "use strict";

    function t(e, t) {
        e.className = "ui_notif animated fadeOut", setTimeout(function() {
            e.parentNode && e.parentNode.removeChild(e)
        }, t ? 150 : 500)
    }

    function n(e, n) {
        function o() {
            h = setTimeout(function() {
                t(c)
            }, v + 2e3)
        }
        "string" == typeof e && ("string" == typeof n ? (e = {
            title: e,
            text: n
        }, n = null) : e = {
            text: e
        });
        var a = $extend({}, i, e);
        n || (n = a.default);
        var l = a.dest;
        a.text = a.text || a.description || a.body || "";
        var u, s = n.getAttribute("data-js-notif-id");
        if (s) u = d[s];
        else {
            u = document.createElement("div"), l.appendChild(u), u.style.zIndex = 99999;
            m = n.getBoundingClientRect();
            u.style.position = "fixed", u.style.bottom = window.innerHeight - ~~(m.top + m.height / 2) + "px", u.style.right = window.innerWidth - ~~(m.left + m.width / 2) + "px", n.setAttribute("data-js-notif-id", d.push(u) - 1)
        }
        var c = document.createElement("div"),
            r = document.createElement("b"),
            m = document.createElement("p"),
            f = document.createElement("span");
        c.style.visibility = "hidden", c.className = "ui_notif", f.innerHTML = "&times;";
        var p = 0;
        a.title && (r.innerHTML = a.title, c.appendChild(r), p += a.title.length), m.innerHTML = a.text, p += a.text.length, c.appendChild(m), c.appendChild(f), f.onclick = function() {
            t(c, !0)
        }, !1 !== a.delay && (c.onmouseover = function() {
            clearTimeout(h)
        }, c.onmouseout = function() {
            o()
        }), setTimeout(function() {
            c.style.visibility = "visible", c.className = "ui_notif animated fadeIn"
        }, 100), u.appendChild(c), p /= 5;
        var h, v = a.speed || p / 3 * 1e3;
        !1 !== a.delay && o()
    }
    var i = {
            default: document.body,
            dest: document.body
        },
        d = [];
    document.createElement("div");
    n.config = function(e) {
        $extend(i, e)
    }, e.$notif = n
}(this);
//js/ui/menu.js
! function(e) {
    "use strict";

    function t(e) {
        e.setAttribute("aria-hidden", !1), e.setAttribute("aria-expanded", !0), e.classList.add("ui_menu--open")
    }

    function i(e) {
        e.setAttribute("aria-hidden", !0), e.setAttribute("aria-expanded", !1), e.classList.remove("ui_menu--open")
    }

    function n(e, n) {
        n.classList.contains("ui_menu--open") ? (i(n), e.classList.remove("ui_menu__item--focus")) : t(n)
    }

    function o(e) {
        function t(i) {
            for (var n = i.target; n && n.id !== e;) n = n.parentNode;
            n || (r(), document.removeEventListener("mousedown", t, !0), y[e] = !1)
        }
        y[e] || (y[e] = !0, document.addEventListener("mousedown", t, !0))
    }

    function r(e) {
        var t = !0;
        "select" === e && (t = !1, e = null);
        var n = (e || document).querySelectorAll(".ui_menu__item--focus"),
            o = (e || document).querySelectorAll(".ui_menu--open"),
            r = (e || document).querySelectorAll(".ui_menu--scroller");
        $io.arr.all(n, function(e) {
            L[e.parentNode.parentNode.id] = !1, e.classList.remove("ui_menu__item--focus")
        }), $io.arr.all(o, function(e) {
            i(e)
        }), $io.arr.all(r, function(e) {
            e.removeAttribute("style"), e.classList.remove("ui_menu--scroller"), e.classList.contains("ui_menu--scroller--active") && e.classList.remove("ui_menu--scroller--active"), e.removeEventListener("mouseover", s, !1)
        }), e || (t && c.current && c.current.cfg && c.current.cfg.oncancel && c.current.cfg.oncancel(), c.current && c.current.cfg && c.current.cfg.onclose && c.current.cfg.onclose(), c.current = null)
    }

    function s(e) {
        e.target.matches(".ui_menu__right_handler") ? this.classList.remove("ui_menu--scroller--active") : this.classList.add("ui_menu--scroller--active")
    }

    function a(e) {
        e.addEventListener("mouseover", s, !1), e.querySelector(".ui_menu__up_handler").addEventListener("mouseover", s, !1)
    }

    function u(e, t) {
        if (e.fireEvent) e.fireEvent("on" + t);
        else {
            var i = document.createEvent("Events");
            i.initEvent(t, !0, !1), e.dispatchEvent(i)
        }
    }

    function c(e, s, u) {
        function h(e) {
            $io.obj.all(e, function(e) {
                e.key && (M[e.key] = function() {
                    return e.action.apply(this, arguments)
                }), "function" != typeof e.items && h(e.items)
            })
        }

        function b(e, t, n, o) {
            if (!1 === (n = "function" == typeof n ? n.call(t.thisArg) : n)) return !1;
            var r = document.createDocumentFragment(),
                s = l.cloneNode(!1),
                a = d.cloneNode(!1);
            if (s.appendChild(a), s.id = "ui_menu_" + f++, !n) return !1;
            for (var u = 0, c = n.length; u < c; u++)
                if (n[u] && !1 !== ("function" == typeof n[u].display ? n[u].display.call(t.thisArg) : n[u].display)) {
                    var v = n[u],
                        g = m.cloneNode(!1);
                    if ("---" !== v.name) {
                        g.id = "ui_menu__item_" + _++;
                        var h = p.cloneNode(!1),
                            L = document.createElement("span"),
                            A = document.createElement("span"),
                            x = null;
                        if (A.className = "ui_menu__item__ico", void 0 !== v.radio ? (A.className = "ui_menu__item__ico ui_form-ico-radio", x = y(v.radio, g, v.action)) : !0 === v.checkbox && (A.className = "ui_menu__item__ico ui_form-ico-checkbox", x = E(g, v.action)), h.innerHTML = "string" == typeof v.name ? v.name : v, v.icon) {
                            if (0 === v.icon.indexOf("."))(w = document.createElement("div")).className = "ui_menu__item__ico", v.icon.split(".").forEach(function(e) {
                                w.classList.add(e)
                            });
                            else if (0 === v.icon.indexOf("<"))(w = document.createElement("div")).className = "ui_menu__item__ico", w.innerHTML = v.icon;
                            else {
                                var w = new Image;
                                w.src = v.icon
                            }
                            A.appendChild(w)
                        } else A.innerHTML = "&nbsp;";
                        if (g.appendChild(A), g.appendChild(h), v.key && (L.innerHTML = v.key.replace(/(\+|^)[a-z]/g, function(e) {
                                return e.toUpperCase()
                            }), L.className = "ui_menu__item__key", g.appendChild(L)), q[g.id] = {
                                item: g,
                                val: v,
                                action: x || v.action
                            }, N(e, g, v), v.items) {
                            g.setAttribute("aria-haspopup", !0), g.classList.add("ui_menu__item--opener");
                            var C = function(e, t, n, o) {
                                return function() {
                                    var r = b(e, t, n.items, n);
                                    r || ((r = document.createElement("div")).innerHTML = '<ul><li class="ui_menu__item ui_menu__item--disabled"><em>No items...</em></ul></li>'), r.className = "ui_menu__submenu", !1 !== t.position && i(r), o.appendChild(r)
                                }
                            }(e, t, v, g);
                            !0 === t.recursive ? C() : S[g.id] = C
                        }
                        r.appendChild(g)
                    } else g.className = "ui_menu__separator", g.appendChild(document.createElement("hr")), r.appendChild(g)
                }
            return a.appendChild(r), s
        }

        function y(e, t, i) {
            function n() {
                for (var n, o = j[e], r = 0, s = o.length; r < s; r++) o[r].setAttribute("data-menuitem-selected", !1), "function" != typeof(n = q[o[r].id].val).selected && (n.selected = !1);
                "function" != typeof(n = q[t.id].val).selected && (n.selected = !0), t.setAttribute("data-menuitem-selected", !0), i && i.call(this, n)
            }
            return j[e] ? j[e].push(t) : j[e] = [t], n
        }

        function E(e, t) {
            function i() {
                var i = "true" === e.getAttribute("data-menuitem-selected");
                e.setAttribute("data-menuitem-selected", !i);
                var n = q[e.id].val;
                if ("function" != typeof n.selected && (n.selected = !i), t) return t.call(this, !i)
            }
            return i
        }

        function N(e, t, i) {
            var n = "function" == typeof i.display ? i.display.call(X.thisArg) : i.display,
                o = "function" == typeof i.disabled ? i.disabled.call(X.thisArg) : i.disabled,
                r = "function" == typeof i.selected ? i.selected.call(X.thisArg) : i.selected;
            t.style.display = !1 === n ? "none" : "", o ? t.classList.add("ui_menu__item--disabled") : t.classList.remove("ui_menu__item--disabled"), t.setAttribute("data-menuitem-selected", r)
        }

        function x(e) {
            for (var t in q)
                if (q.hasOwnProperty(t)) {
                    var i = q[t];
                    N(e, i.item, i.val)
                }
        }

        function w(i) {
            if (i && (i.stopImmediatePropagation(), i.preventDefault()), !k.classList.contains("ui_menu--open")) {
                X.solo && r(), c.current = F, t(k), k.style.zIndex = $maxZ(".ui_menu, .ui_icon, .ui_window").num + 1;
                var n = {
                    collision: "flip",
                    of: X.position.of || e,
                    within: X.position.within
                };
                X.position.my && (n.my = X.position.my), X.position.at && (n.at = X.position.at), R = $pos(k, n), k.getAttribute("data-ui-menu-scroller") && C(k), o(k.id)
            }
        }

        function C(e) {
            function t() {
                0 === e.scrollTop ? i.disabled = !0 : i.disabled = !1, e.scrollHeight - e.scrollTop === e.clientHeight ? n.disabled = !0 : n.disabled = !1
            }
            var i, n, o, r;
            if (e.classList.contains("ui_menu--scroller--active") && e.classList.remove("ui_menu--scroller--active"), e.classList.add("ui_menu--scroller"), 1 == e.childNodes.length) {
                i = document.createElement("button"), n = document.createElement("button"), o = document.createElement("div"), i.className = "ui_menu__up_handler", n.className = "ui_menu__down_handler", o.className = "ui_menu__right_handler";
                var s = e.firstChild.offsetWidth;
                i.style.width = n.style.width = s + "px", e.appendChild(i), e.appendChild(n), e.appendChild(o), r = e.getBoundingClientRect(), i.style.top = r.top + "px", n.style.bottom = window.innerHeight - e.offsetHeight - r.top + "px", o.style.left = r.left + s + "px", i.onclick = function() {
                    e.scrollTop -= 80, t()
                }, n.onclick = function() {
                    e.scrollTop += 80, t()
                }, e.onscroll = function() {
                    t()
                }, t()
            }
            a(e)
        }

        function $(e) {
            for (var i = e.target; i && "LI" !== i.tagName;) i = i.parentNode;
            i && (!1 !== X.position && i.classList.contains("ui_menu__item--focus") || i.classList.contains("ui_menu__item--disabled") || $io.arr.each(i.parentNode.childNodes, function(s) {
                if (s.id == i.id) {
                    if (X.closeOthers && r(s), "bar" == X.mode && !L[k.id] && i.parentNode.parentNode.id == k.id) return;
                    if (s.classList.add("ui_menu__item--focus"), s.classList.contains("ui_menu__item--opener") && !s.classList.contains("ui_menu__item--disabled")) {
                        S[i.id] && S[i.id]();
                        var a = s.lastChild;
                        if (!1 === X.position) n(s, a);
                        else {
                            a.style.position = "fixed", t(a);
                            var u = "bar" == X.mode && i.parentNode.parentNode.id == k.id;
                            if ($pos(a, {
                                    my: "left top-1",
                                    at: u ? "left bottom" : "right top",
                                    of: s,
                                    collision: "flipfit",
                                    within: X.position.within || window
                                }), a.getAttribute("data-ui-menu-scroller") && C(a), X.aim) {
                                var c = a.getBoundingClientRect();
                                u ? e.pageY < c.bottom ? v(s, e.pageX, e.pageY, c.left, c.top, c.right, c.top) : v(s, e.pageX, e.pageY, c.left, c.bottom, c.right, c.bottom) : e.pageX < c.left ? v(s, e.pageX, e.pageY, c.left, c.top, c.left, c.bottom) : v(s, e.pageX, e.pageY, c.right, c.top, c.right, c.bottom)
                            }
                            o(k.id)
                        }
                    } else g(!0)
                } else X.closeOthers && (s.classList.remove("ui_menu__item--focus"), r(s))
            }))
        }

        function T(e) {
            var t = this;
            if ("bar" == X.mode && (L[k.id] ? (L[k.id] = !1, r()) : (L[k.id] = !0, $(e))), !t.classList.contains("ui_menu__item--disabled")) {
                var i = q[t.id].action,
                    n = typeof i;
                !Y || "string" != n && "function" != n || (P.innerHTML = "function" == n ? i.call(X.thisArg) : i, r()), "function" == n && !1 !== i.call(X.thisArg, e, q[t.id].val) && r("select")
            }
        }
        $io.isElement(e) || (u = s || {}, s = e, e = document.createElement("div")), s || (s = []);
        var k, H = "tree" === u.mode ? $extend({}, A, {
                closeOthers: !1,
                trigger: "click",
                position: !1
            }) : "bar" === u.mode ? $extend({}, A, {}) : A,
            X = $extend({}, H, u),
            Y = !1,
            O = !1,
            S = {},
            q = {};
        "tabs" === X.mode && (Y = !0, X.mode = "bar"), "context" === X.mode && (O = !0, X.mode = "popup"), X.thisArg || (X.thisArg = e);
        var M = {};
        h(s);
        var I, z = $key(X.keyTarget || e).config({
            thisArg: X.thisArg,
            uniqueCombo: !0
        }).combo(M);
        if (X.key) {
            var B = {};
            B[X.key] = function() {
                w()
            }, I = $key().combo(B)
        }
        e.classList.add("ui_menu_trigger"), (k = b(e, X, s)).className = "ui_menu ui_menu--" + ("inline" === X.mode || "popup" === X.mode ? "menu" : X.mode), k.setAttribute("tabindex", "0"), k.style.zIndex = $maxZ(".ui_menu", k.parentNode).num + 1;
        var P;
        "popup" !== X.mode ? Y ? (e.appendChild(k), X.dest ? P = X.dest : ((P = document.createElement("div")).className = "ui_menu--tabs__content", e.appendChild(P))) : e.appendChild(k) : (document.body.appendChild(k), k.classList.add("ui_menu--popup"), i(k), O ? e.addEventListener("contextmenu", w, !1) : "auto" === X.trigger ? w() : X.trigger && e.addEventListener("click", w, !1));
        var R, j = {},
            D = "auto" == X.trigger ? "mouseover" : X.trigger;
        D || (D = "mouseover"), k.addEventListener(D, $, !1), k.onfocus = function(e) {
            var t = k.querySelector(".ui_menu__item");
            T.call(t, {
                target: t
            })
        }, L[k.id] = !1, k.onblur = function(e) {
            r()
        }, $el(k).on("click", ".ui_menu__item", T);
        var F = {
            cfg: X,
            destroy: function() {
                $el(k).off("click", ".ui_menu__item", T), k.removeEventListener(D, $, !1), S = null, q = null, z && z.destroy && z.destroy(), I && I.destroy && I.destroy()
            },
            refresh: function(e) {
                e && (X.thisArg = e), x(X.thisArg)
            },
            show: function(e, t) {
                e && (X.thisArg = e, z.config({
                    thisArg: e
                }), x(e)), t && (X.position = t), w()
            },
            setThisArg: function(e) {
                e && (X.thisArg = e, x(e))
            },
            key: z,
            position: R
        };
        return F
    }
    var l = document.createElement("div"),
        d = document.createElement("ul"),
        m = document.createElement("li"),
        p = document.createElement("span"),
        f = 0,
        _ = 0;
    d.setAttribute("role", "menu"), m.setAttribute("role", "menuitem"), m.setAttribute("tabindex", "-1"), m.className = "ui_menu__item", p.className = "ui_menu__item__text";
    var v, g, h, b, y = {},
        L = {};
    ! function() {
        function e() {
            clearTimeout(a), a = setTimeout(function() {
                o("fromTriangle")
            }, 100)
        }

        function t(e, t) {
            if (f === y) return m < f ? f - e <= f - c : f - e >= f - c
        }

        function i() {
            p >= A.top + 3 && p <= A.bottom - 3 && s.setAttribute("points", m + "," + p + " " + f + "," + _ + " " + y + "," + L)
        }

        function n(e, t, i, n, o, s, a) {
            A = e.getBoundingClientRect(), d = e, e.appendChild(r), c = m = t, l = p = i, f = n, _ = o, y = s, L = a
        }

        function o(e) {
            s.setAttribute("points", "0,0 0,0 0,0"), setTimeout(function() {
                "fromTriangle" === e && u(document.elementFromPoint(h, b), "mouseover")
            }, 1)
        }
        var r = document.createElementNS("http://www.w3.org/2000/svg", "svg"),
            s = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
        s.setAttribute("points", "0,0 0,0 0,0"), s.setAttribute("fill", "transparent"), s.style.cssText = "pointer-events:auto;", r.style.cssText = "pointer-events:none;position:fixed;top:0;left:0;bottom:0;right:0;width:100%;height:100%;z-index:1", r.appendChild(s), document.body.appendChild(r), document.addEventListener("mousemove", function(e) {
            h = c = m = e.pageX, b = l = p = e.pageY, i()
        });
        var a, c, l;
        s.onmousemove = function(i) {
            t(i.pageX, i.pageY) ? e() : o("fromTriangle"), setTimeout(function() {
                c = i.pageX, l = i.pageY
            }, 1)
        };
        var d, m, p, f, _, y, L, A = {};
        v = n, g = o
    }();
    var A = {
        mode: "popup",
        icons: "auto",
        recursive: !1,
        hide: !1,
        solo: !0,
        aim: !0,
        display: !0,
        closeOthers: !0,
        trigger: "mouseover",
        onclose: null,
        position: {
            within: window
        }
    };
    c.config = function(e) {
        $extend(A, e)
    }, c.extend = function(e, t) {
        var i = $extend([], e);
        return $io.obj.all(t, function(e, t) {
            t.replace(/^((after|before|replace|delete|extend):)?(([\d.]+)|(.*))/, function(t, n, o, r, s, a) {
                function u(e, t) {
                    var i;
                    return $io.arr.each(t, function(n, o) {
                        return n.name === e ? (i = {
                            arr: t,
                            pos: o
                        }, !1) : (n.items && (i = u(e, n.items)), !i && void 0)
                    }), i
                }
                if (s) {
                    var c = s.split("."),
                        l = +c.pop(),
                        d = i;
                    $io.arr.all(c, function(e) {
                        var t = +e;
                        d = d[t].items ? d[t].items : d[t]
                    })
                } else if (a) var m = u(a, i),
                    d = m.arr,
                    l = m.pos;
                o && "before" !== o ? "after" === o ? $io.arr.insert(d, e, l + 1) : "extend" === o ? d[l] = $extend({}, d[l], e[0]) : "replace" === o ? d[l] = e[0] : "delete" === o && d.splice(l, 1) : $io.arr.insert(d, e, l)
            })
        }), i
    }, e.$menu = c
}(window);
//js/ui/form.js
! function(e) {
    function t(e, t) {
        if (e)
            for (var n = e.split(/\s+/), i = 0, a = n.length; i < a; i++) t(n[i])
    }

    function n(e) {
        $extend(this, e)
    }

    function i(e, a, r, l, d) {
        function u() {
            for (var e, t = C.querySelectorAll("[name]"), n = [], i = 0, a = 0, r = t.length; a < r; a++) {
                for (var o = t[a], l = -1, d = null, u = o.parentNode; u && 1 == u.nodeType;) u.classList.contains("ui_form__array__item") && (d || (d = u), l++), u = u.parentNode;
                if (l > -1) {
                    void 0 === n[l] && (n[l] = -1), e !== d && (i < l ? n[l] = 0 : n[l]++);
                    var c = 0,
                        s = o.name.replace(/(\.?)(\d+)(?![^.\s])/g, function(e, t, i) {
                            return t + n[c++]
                        });
                    o.name = s, o.id = "ui_form__" + s, e = d, i = l
                } else n.length = 0
            }
        }

        function y(e) {
            for (var t = [], n = 0, i = A.children.length; n < i; n++) A.children[n].classList.contains("ui_form__array__item") && t.push(A.children[n]);
            if (e) var a, r;
            for (a = 0, r = t.length; a < r; a++) {
                var o = "ui_form_temp" + a + (Math.random() + "").slice(2);
                t[a].id = o, A.querySelector("#" + o + " > .ui_form__array__btns > .ui_form__btn_up").disabled = 0 === a, A.querySelector("#" + o + " > .ui_form__array__btns > .ui_form__btn_down").disabled = a === r - 1, t[a].id = ""
            }
            u()
        }

        function g(e, t, n) {
            var i = b.cloneNode();
            i.className = "ui_form__array_btn ui_form__btn_" + t, i.innerHTML = o.default[t], i.onclick = n, e.appendChild(i)
        }

        function N(t) {
            var n = document.createElement("div");
            n.className = "ui_toolbar ui_form__array__item";
            var r = i(e, a.items, "", l + "." + q++, t);
            n.appendChild(r.fragment);
            var o = document.createElement("div");
            return o.className = "ui_form__array__btns", g(o, "remove", function() {
                n.remove(), y()
            }), g(o, "up", function() {
                A.insertBefore(n, n.previousSibling), y()
            }), g(o, "down", function() {
                A.insertBefore(n, n.nextSibling.nextSibling), y()
            }), n.appendChild(o), A.appendChild(n), y(!0), r
        }

        function $(e, t, n) {
            return e = o[t][n].call(a, e, $extend({}, a[t][n]))
        }
        var C = e.el,
            j = document.createDocumentFragment();
        if (!a) return {
            fragment: j
        };
        if ("object" === a.type) {
            E = c.cloneNode(!0);
            (x = s.cloneNode(!0)).className = "ui_form__tab ui_form__object", x.id = "ui_form__tab_" + e.id + "_" + v++;
            e.fields[l + "{}"] = F = new n({
                type: "object",
                path: l,
                fields: {},
                div: x
            }), (a.title || r) && (E.textContent = a.title || r, x.appendChild(E));
            k = p.cloneNode(!0);
            if (t(a.className, function(e) {
                    k.classList.add(e), x.classList.add("ui_form__object--" + e.replace(/ui_form[-_]*/, ""))
                }), a.description && ((S = document.createElement("div")).className = "ui_form__description", S.innerHTML = a.description, x.appendChild(S)), $io.obj.each(a.properties, function(t, n) {
                    var a = i(e, t, n, l ? l + "." + n : n, d && d.hasOwnProperty(n) ? d[n] : null);
                    F.fields[n] = a, k.appendChild(a.fragment)
                }), x.appendChild(k), a.help) {
                var w = document.createElement("div");
                w.className = "ui_form__help", w.innerHTML = a.help, x.appendChild(w)
            }
            $io.obj.all(a.plugin, function(e, t) {
                o.plugin[t] && o.plugin[t].call(a, F, a.plugin[t], e)
            }), j.appendChild(F.div)
        } else if ("array" === a.type) {
            var E = c.cloneNode(!0),
                x = s.cloneNode(!0),
                A = x;
            x.className = "ui_form__tab ui_form__array", x.id = "ui_form__tab_" + e.id + "_" + v++;
            e.fields[l + "[]"] = F = new n({
                type: "array",
                path: l,
                div: x,
                addItem: N,
                reorder: u,
                setValue: function(e, t) {
                    $io.arr.all(document.querySelectorAll("#" + x.id + " .ui_form__array__item"), function(e) {
                        e.remove()
                    }), q = 0, O = e.length;
                    for (var n = []; q < O;) {
                        var i = N(e[q]);
                        n.push(i), t(e[q - 1], i)
                    }
                    return n
                }
            }), t(a.className, function(e) {
                x.classList.add(e)
            }), E.innerHTML = (a.title || r) + "&nbsp;";
            var L = b.cloneNode(!0);
            L.className = "ui_form__array_btn ui_form__btn_add", L.innerHTML = o.default.add, L.onclick = function() {
                N()
            }, E.appendChild(L);
            var M = m.cloneNode();
            M.name = l, M.value = l, M.setAttribute("data-is-array", !0), E.appendChild(M), x.appendChild(E), d || (d = []);
            for (var q = 0, O = d.length; q < O;) N(d[q]);
            $io.obj.all(a.plugin, function(e, t) {
                o.plugin[t] && o.plugin[t].call(a, F, a.plugin[t], e)
            }), j.appendChild(F.div)
        } else {
            if ("string" !== a.type && "boolean" !== a.type && "number" !== a.type && "integer" !== a.type) throw new Error("$form: unknown schema type : " + a.type);
            var T, k = p.cloneNode(),
                H = f.cloneNode();
            if (k.className = "ui_form__field", t(a.className, function(e) {
                    k.classList.add(e)
                }), o.format[a.format] ? T = o.format[a.format].call(a) : a.enum ? (T = h.cloneNode(), $io.arr.all(a.enum, function(e) {
                    Array.isArray(e) ? T.options[T.options.length] = new Option(e[0], e[1]) : T.options[T.options.length] = new Option(e, e)
                })) : "textarea" === a.format ? T = _.cloneNode() : (T = m.cloneNode(), "string" === a.type && (T.type = "text"), "number" !== a.type && "integer" !== a.type || (T.type = "number")), "boolean" === a.type) {
                T.type = "checkbox", "boolean" == typeof d ? T.checked = d : a.default && (T.checked = a.default);
                document.createElement("span")
            } else null !== d && void 0 !== d ? T.value = d : a.default && (T.value = a.default);
            if (a.placeholder && (T.placeholder = a.placeholder), !0 !== a.ignore && (T.name = l), T.id = "ui_form__" + l, H.setAttribute("for", "ui_form__" + l), H.innerHTML = a.title || r, (!0 === e.cfg.disabled || !0 === a.disabled || !0 === a.createOnly && !1 === e.cfg.create) && (T.disabled = !0), a.pattern && T.setAttribute("pattern", a.pattern), a.attributes && $io.obj.all(a.attributes, function(e, t) {
                    "required" === t && a.required, "function" == typeof e ? T[t] = e : T.setAttribute(t, e)
                }), !0 === a.required && (H.innerHTML = H.innerHTML + ' <span title="required" class="ui_form__required">*</span>', T.required = !0), a.description) {
                var S = document.createElement("div");
                S.className = "ui_form__description", S.innerHTML = a.description
            }
            var F;
            e.fields[l] = F = new n({
                type: a.type,
                path: l,
                div: k,
                input: T,
                actionZone: T,
                label: H,
                getValue: function() {
                    return this.input.value
                },
                setValue: function(e) {
                    this.input.value = e
                },
                setFocus: function() {
                    this.input.focus()
                },
                onFocus: function(e) {
                    this.input.onfocus = e
                },
                onBlur: function(e) {
                    this.input.onblur = e
                },
                onModif: function(e) {
                    this.input.oninput = this.input.onkeyup = this.input.onchange = e
                }
            }), o.type[a.type] && "function" == typeof o.type[a.type] && $(F, "type", a.type), a.plugin = a.plugin || [], a.format && o.plugin[a.format] && (a.plugin[a.format] = !0), $io.obj.all(a.plugin, function(e, t) {
                o.plugin[t] && $(F, "plugin", t)
            }), "boolean" === a.type ? (F.div.appendChild(F.actionZone), F.div.appendChild(F.label), S && F.div.appendChild(S)) : (F.div.appendChild(F.label), S && F.div.appendChild(S), F.div.appendChild(F.actionZone)), a.hidden && F.div.classList.add("hide"), j.appendChild(F.div)
        }
        return Object.defineProperty(F, "fragment", {
            get: function() {
                return delete F.fragment, j
            },
            configurable: !0
        }), F
    }

    function a(e, t) {
        var t = {},
            n = typeof e;
        return y.indexOf(n) > -1 ? t.type = n : Array.isArray(e) ? (t.type = "array", t.items = a(e[0])) : $io.isObject(e) && (t.type = "object", t.properties = {}, $io.obj.all(e, function(e, n) {
            t.properties[n] = a(e)
        })), t
    }

    function r(e) {
        return e.properties && $io.obj.all(e.properties, function(t, n) {
            "object" === t.type && (t = r(t)), e.required && e.required.indexOf(n) > -1 && (t.required = !0)
        }), e
    }

    function o(e, t) {
        return "FORM" == e.nodeName ? o.data(e) : o.build(e, t)
    }

    function l(e) {
        var t = e.getAttribute("data-form-id");
        if (t && o.instances[t]) {
            var n = o.instances[t].fields;
            for (var i in n) n.hasOwnProperty(i) && n[i].save && n[i].save()
        }
    }
    var d = 0,
        u = document.createElement("form"),
        c = document.createElement("legend"),
        s = document.createElement("div"),
        p = document.createElement("div"),
        f = document.createElement("label"),
        m = document.createElement("input"),
        _ = document.createElement("textarea"),
        h = document.createElement("select"),
        b = (document.createElement("option"), document.createElement("button"));
    b.setAttribute("type", "button"), _.setAttribute("rows", 4), s.className = "ui_form__tab", u.className = "ui_form";
    var v = 0,
        y = "string number boolean null".split(" ");
    o.instances = {}, o.build = function(e, t) {
        v = 0;
        var n = $extend({}, t),
            l = d++,
            c = u.cloneNode(),
            s = "ui_form_" + l;
        c.id = s, c.setAttribute("data-form-id", l), e.schema || (e.schema = a(e), e.data = e), e.schema.type ? e.schema = $extend({}, e.schema) : e.schema = {
            type: "object",
            properties: $extend({}, e.schema)
        }, e.schema = r(e.schema);
        var p, f = o.instances[l] = {
            id: l,
            el: c,
            cfg: n,
            schema: e.schema,
            data: e.data,
            fields: {},
            destroy: function() {
                this.el.remove(), delete o.instances[l]
            }
        };
        p = e.data ? i(f, e.schema, "", "", $extend({}, e.data)).fragment : i(f, e.schema, "", "").fragment;
        var m = document.createElement("button");
        return m.type = "submit", m.style.display = "none", p.appendChild(m), c.appendChild(p), f
    }, o.onvalidate = function(e, t) {
        console.log(e, t)
    }, o.validate = function(e) {
        l(e);
        var t = !0,
            n = "FORM" === e.tagName ? e.elements : e.length ? e : [e];
        return $io.arr.each(n, function(e, n) {
            e.validity.valid || (t = !1, o.onvalidate(e.validationMessage, e), 0 === n && (e.select(), e.focus()))
        }), t
    }, o.data = function(e) {
        l(e);
        var t, n, i = {};
        return $io.arr.all(e.elements, function(e) {
            if ("" !== e.name && !e.disabled)
                if ("checkbox" === e.type) $io.obj.path(i, e.name, !!e.checked);
                else if ("number" === e.type) $io.obj.path(i, e.name, parseInt(e.value));
            else if ("select-multiple" === e.type) {
                for (t = [], n = e.options.length - 1; n >= 0; n -= 1) e.options[n].selected && t.push(e.options[n].value);
                $io.obj.path(i, e.name, t)
            } else e.getAttribute("data-is-array") ? $io.obj.path(i, e.name, []) : $io.obj.path(i, e.name, e.value)
        }), i
    }, o.update = function(e, t) {
        console.warn("WARNING - TODO $form.update() with array"), t ? $io.obj.all(t, function(t, n) {
            e[n] && (e[n].value = t)
        }) : $io.arr.all(e.elements, function(e) {
            e.value = ""
        })
    }, o.disable = function(e) {
        $io.arr.all(e.elements, function(e) {
            e.disabled && (e.wasDisbled = !0), e.disabled = !0
        })
    }, o.enable = function(e) {
        $io.arr.all(e.elements, function(e) {
            e.wasDisbled || (e.disabled = !1)
        })
    }, o.plugin = {}, o.format = {}, o.type = {}, o.default = {
        add: "+",
        remove: "-",
        up: "up",
        down: "down"
    }, e.$form = o
}(this);
//os/ui/form.plugins.js
! function(e) {
    "use strict";
    $form.plugin.explorer = function(e, t) {
        var n = document.createElement("div");
        return e.btn = document.createElement("button"), e.btn.innerHTML = '<img height=16 width=16 src="' + le._path.skin + 'places/16/folder-open.png">', n.className = "ui_form_combo w100", n.appendChild(e.actionZone), n.appendChild(e.btn), e.actionZone = n, e.btn.onclick = function(n) {
            n.preventDefault(), setTimeout(function() {
                $explorer($extend({
                    path: "/",
                    browse: !0,
                    onclose: function(t, n) {
                        t && (e.input.value = n, $el(e.input).trigger("change"))
                    }
                }, t))
            }, 0)
        }, e
    }, $form.plugin.icon = function(e, t) {
        function n() {
            i.style.backgroundImage = "url(" + e.input.value + ")"
        }
        document.createElement("div");
        var i = document.createElement("button");
        return i.type = "button", i.className = "block left mr10 h50p w50p", i.style.backgroundRepeat = "no-repeat", i.style.backgroundPosition = "center", i.style.backgroundSize = "32px 32px", e.input.value || (e.input.value = "/c/sys/skins/w93/shortcut.png"), e.input.value = $fs.utils.normalizeIcon(e.input.value), n(), i.onclick = function(i) {
            i.preventDefault(), setTimeout(function() {
                $explorer($extend({
                    path: "/c/files/images/icons/",
                    accept: "image/*",
                    browse: !0,
                    onclose: function(t, i) {
                        t && (e.input.value = i, n())
                    }
                }, t))
            }, 0)
        }, setTimeout(function() {
            var o = e.input.form;
            t && t.watch && o[t.watch] && (o[t.watch].addEventListener("change", function(t) {
                if ("/c/sys/skins/w93/shortcut.png" === e.input.value) {
                    var i, o = (this.value || "").split(" ")[0];
                    (i = le._apps[o] && le._apps[o].icon ? le._apps[o].icon : $fs.utils.getIcon(this.value)) && "/c/sys/skins/w93/file.png" !== i && (e.input.value = i, n())
                }
            }, !1), $el(o[t.watch]).trigger("change")), o.insertBefore(i, o.firstChild)
        }, 0), e.div.classList.add("hide"), e
    }
}();
//js/ui/window.js
! function(e) {
    "use strict";

    function t(e) {
        function o(e) {
            e.preventDefault(), be.show(A, {
                at: "left+10 bottom+10",
                of: e,
                within: B.dest
            })
        }

        function a(e) {
            e.preventDefault(), be.show(A, { of: this,
                within: B.dest
            })
        }

        function y() {
            var e = B.baseWidth ? B.baseWidth : I.offsetWidth,
                t = B.baseHeight ? B.baseHeight : I.offsetHeight,
                i = !1,
                n = !1;
            if (e > q && (e = q, i = !0), t > D && (t = D, n = !0), I.style.height = t + "px", I.style.width = e + "px", R.classList.add("ui_window__body--flex"), R.removeAttribute("style"), !0 === B.minHeight ? I.style.minHeight = I.style.height : B.minHeight && (I.style.minHeight = "auto" == B.minHeight ? "auto" : B.minHeight + "px"), !0 === B.minWidth ? I.style.minWidth = I.style.width : B.minWidth && (I.style.minWidth = "auto" == B.minWidth ? "auto" : B.minWidth + "px"), B.center) B.top = ~~((D - t) / 2) + "px", B.left = ~~((q - e) / 2) + "px";
            else {
                if (B.top) B.noOut && B.top > D - t && (B.maxTop = !0, B.top = D - t + "px", I.style.top = B.top);
                else {
                    var o = ~~(Math.random() * (D - t));
                    B.top = o + "px"
                }
                if (B.left) B.noOut && B.left > q - e && (B.maxLeft = !0, B.left = q - e + "px", I.style.left = B.left);
                else {
                    var a = ~~(Math.random() * (q - e));
                    B.left = a + "px"
                }
            }
            "-4000px" === I.style.top && (I.style.top = n ? 0 : B.top), "-4000px" === I.style.left && (I.style.left = i ? 0 : B.left)
        }

        function g(e) {
            this.classList.contains("ui_window_docked--minimized") ? (O(), I.classList.contains("ui_window--active") || t.active(Z)) : I.classList.contains("ui_window--active") ? (B.minimizable && W(), I.style.zIndex = $maxZ("#ui_explorer_0 .ui_icon,.ui_window,.ui_z_indexed").num + 10) : t.active(Z)
        }

        function x(e) {
            e.preventDefault(), be.show(A, {
                at: "left+10 bottom+10",
                of: e,
                within: B.dest
            })
        }

        function L(e) {
            fe = !0, !1 !== B.onok.call(A, fe) && M(e)
        }

        function z(e) {
            !1 !== B.oncancel.call(A, fe) && M(e)
        }

        function k() {
            t.active(Z)
        }

        function C() {
            re && (re.removeEventListener("click", g, !1), re.removeEventListener("contextmenu", x, !1), re && re.parentNode && re.parentNode.removeChild(re)), J && (J.removeEventListener("click", a, !1), J.removeEventListener("dblclick", M, !1), J.removeEventListener("contextmenu", a, !1)), B.contextmenuOnBody && R.removeEventListener("contextmenu", o, !1), B.header && j.removeEventListener("contextmenu", o, !1), B.btnCancel && se.removeEventListener("click", M, !1), B.btnOk && ce.removeEventListener("click", L, !1), ve && ve.parentNode && ve.parentNode.removeChild(ve), ve = null, B.resizable && K && $el(K).off("dblclick doubletap", H), B.maximizable && !K && $el(R).off("dblclick doubletap", H), B.draggable && oe.destroy(), B.resizable && ae.destroy(), ee && ee.destroy(), be && be.destroy(), I.removeEventListener("click", k, !1), I && I.parentNode && I.parentNode.removeChild(I);
            var e = $maxZ(".ui_window").el;
            e && t.active(1 * e.getAttribute("data-window-id")), B.ondestroy.call(A, e), s[Z] = null
        }

        function E() {
            if (B.animationOut) {
                for (var e = !1, t = 0, i = I.classList.length; t < i; t++) I.classList[t] && 0 === I.classList[t].indexOf("fx_") && (e = !0);
                e ? C() : (I.classList.add("animated"), $animate(I, B.animationOut, function(e) {
                    I.classList.remove("animated"), C()
                }))
            } else C()
        }

        function $() {
            fe && B.onsubmit && !1 === B.onsubmit.call(A, fe, $form.data(he), he) ? fe = !1 : B.onbeforeclose ? B.onbeforeclose.call(A, function() {
                E(), B.onclose && B.onclose.call(A, fe, $form.data(he), he)
            }) : (E(), B.onclose && B.onclose.call(A, fe, $form.data(he), he))
        }

        function N(e) {
            !0 === e && (fe = !0), he ? $() : B.onbeforeclose ? B.onbeforeclose.call(A, function() {
                E(), B.onclose && B.onclose.call(A, fe)
            }) : (E(), B.onclose && B.onclose.call(A, fe))
        }

        function T() {
            y(), setTimeout(function() {
                if (y(), he = I.getElementsByTagName("form")[0]) {
                    var e = he.querySelector("[autofocus]");
                    e && e.focus(), he.onsubmit = function() {
                        return fe = !0, $(), !1
                    }, A.el.form = he
                } else pe ? pe.focus() : R.focus();
                B.onready.call(A, I, R)
            }, 1)
        }

        function M(e) {
            e.stopPropagation(), e.stopImmediatePropagation(), N()
        }

        function H(e) {
            e && (e.stopPropagation(), e.stopImmediatePropagation()), I.classList.contains("ui_window--maximized") ? (I.classList.remove("ui_window--maximized"), V && (V.classList.remove("ui_window__head__maximized"), V.classList.add("ui_window__head__maximize")), I.classList.add("untransition"), I.removeAttribute("style"), I.setAttribute("style", _e), setTimeout(function() {
                I.classList.remove("untransition"), B.onresize(!1)
            }, 500)) : (_e = I.getAttribute("style"), I.classList.add("ui_window--maximized"), V && (V.classList.add("ui_window__head__maximized"), V.classList.remove("ui_window__head__maximize")), setTimeout(function() {
                B.onresize(!0)
            }, 500))
        }

        function W() {
            if (B.dockable) {
                var e = I.getBoundingClientRect();
                we = {
                    t: e.top + "px",
                    l: e.left + "px",
                    h: I.offsetHeight + "px",
                    w: I.offsetWidth + "px"
                }, ve.style.display = "block", ve.style.top = we.t, ve.style.left = we.l, ve.style.height = we.h, ve.style.width = we.w, ve.style.zIndex = $maxZ("#ui_explorer_0 .ui_icon,.ui_window,.ui_z_indexed").num + 1, I.classList.add("ui_window--minimized");
                var t = re.getBoundingClientRect();
                ve.style.top = t.top + "px", ve.style.left = t.left + "px", ve.style.height = re.offsetHeight + "px", ve.style.width = re.offsetWidth + "px", setTimeout(function() {
                    ve.style.display = "none", re.classList.add("ui_window_docked--minimized")
                }, 300)
            }
        }

        function O() {
            ve.classList.remove("ui_window_transfer"), ve.style.display = "block", ve.style.zIndex = $maxZ("#ui_explorer_0 .ui_icon,.ui_window,.ui_z_indexed").num + 1, ve.classList.add("ui_window_retransfer"), setTimeout(function() {
                ve.style.top = we.t, ve.style.left = we.l, ve.style.height = we.h, ve.style.width = we.w
            }, 50), setTimeout(function() {
                ve.style.display = "none", I.classList.remove("ui_window--minimized"), re.classList.remove("ui_window_docked--minimized")
            }, 300)
        }
        "string" == typeof e && (e = {
            title: e,
            url: e,
            ajax: !1,
            width: 400,
            height: 300
        });
        var A, B = $extend({}, l, e),
            I = c.cloneNode(!1),
            j = r.cloneNode(!1),
            P = u.cloneNode(!1),
            R = m.cloneNode(!1),
            S = f.cloneNode(!1),
            Z = d++,
            q = B.dest.offsetWidth,
            D = B.dest.offsetHeight;
        if (B.caller = $io.isWindow(this) ? null : this, B.caller && B.caller.that && B.caller.that.window && $extend(B, B.caller.that.window), e.contextmenu && (B.contextmenu = $extend({}, l.contextmenu, B.contextmenu)), I.id = "ui_window_" + Z, I.setAttribute("data-window-id", Z), B.style)
            for (var F in B.style) B.style.hasOwnProperty(F) && (I.style[F] = B.style[F]);
        if (B.baseClass) {
            var G = B.baseClass.split(" ");
            $io.arr.all(G, function(e) {
                I.classList.add(e)
            })
        }
        if (B.contextmenuOnBody && R.addEventListener("contextmenu", o, !1), B.header) {
            if (B.icon) {
                var J = p.cloneNode(!1);
                J.src = B.icon, J.addEventListener("click", a, !1), J.addEventListener("dblclick", M, !1), J.addEventListener("contextmenu", a, !1), j.appendChild(J)
            }
            var K = _.cloneNode(!1);
            if (K.textContent = B.title || "", I.setAttribute("aria-labelledby", "ui_window__title_" + Z), K.id = "ui_window__title_" + Z, j.appendChild(K), j.addEventListener("contextmenu", o, !1), B.headerBtn)
                for (var Q = B.headerBtn.length - 1; Q >= 0; Q--) ! function(e) {
                    var t = e.init.call(B);
                    t && (e.el = document.createElement("button"), e.el.className = (e.className || "ui_window__head__" + e.name) + ("string" == typeof t ? " " + t : ""), e.title && (e.el.title = e.title), e.el.onclick = function(t) {
                        e.action.call(A, t)
                    }, j.appendChild(e.el))
                }(B.headerBtn[Q]);
            if (B.minimizable && B.dock && B.dockable) {
                var U = w.cloneNode(!1);
                U.onclick = W, j.appendChild(U)
            }
            if (B.maximizable) {
                var V = b.cloneNode(!1);
                V.onclick = H, j.appendChild(V)
            }
            if (B.closable) {
                var X = v.cloneNode(!1);
                X.onclick = M, j.appendChild(X)
            }
            I.appendChild(j)
        }(B.menu || B.beforeMenu || B.afterMenu) && I.appendChild(P);
        var Y;
        B.beforeMenu && ("string" == typeof B.beforeMenu ? (Y = document.createElement("div")).innerHTML = B.beforeMenu : Y = B.beforeMenu, P.appendChild(Y));
        var ee;
        if (B.menu) {
            var te = document.createElement("div");
            P.appendChild(te), ee = $menu(te, B.menu, {
                keyTarget: R,
                thisArg: B.menuThisArg || R,
                mode: "bar",
                position: {
                    within: B.dest
                }
            })
        }
        var ie;
        if (B.afterMenu && ("string" == typeof B.afterMenu ? (ie = document.createElement("div")).innerHTML = B.afterMenu : ie = B.afterMenu, P.appendChild(ie)), I.appendChild(R), B.footer) {
            var ne;
            "string" == typeof B.footer ? (ne = document.createElement("div")).innerHTML = B.footer : ne = B.footer, S.appendChild(ne)
        }
        if ((B.footer || B.btnOk || B.btnCancel) && I.appendChild(S), I.style.top = (B.top || -4e3) + "px", I.style.left = (B.left || -4e3) + "px", R.style.width = "auto" == B.width ? "auto" : 1 * B.width + B.borderTopWidth + B.borderBottomWidth + "px", R.style.height = "auto" == B.height ? "auto" : 1 * B.height + B.borderLeftWidth + B.borderRightWidth + "px", B.dest.appendChild(I), B.automaximize && I.classList.add("ui_window--maximized"), B.draggable) {
            (K || I).classList.add("ui_window--draggable");
            var oe = $drag(I, {
                constrain: B.constrain,
                handle: K || I,
                onstart: function() {
                    t.active(Z), i(this)
                },
                ondrag: function(e, t, i) {
                    B.ondrag.call(A, e, t, i)
                },
                onstop: function() {
                    n(this), B.ondragstop.call(A, I, R)
                }
            })
        }
        if (B.resizable) var ae = $resize(I, {
            handles: "all",
            start: function(e) {
                t.active(Z), i(e)
            },
            stop: function(e) {
                n(e), B.onresize.call(A, I, R)
            }
        });
        if (B.bodyClass) {
            var le = B.bodyClass.split(" ");
            $io.arr.all(le, function(e) {
                R.classList.add(e)
            })
        }
        if ("random" == B.animationIn && (B.animationIn = $io.arr.random($animate.i)), "random" == B.animationOut && (B.animationOut = $io.arr.random($animate.o)), B.animationIn && (I.classList.add("animated"), $animate(I, B.animationIn, function(e) {
                I.classList.remove("animated")
            })), B.btnCancel || B.btnOk) {
            var de = document.createElement("div");
            de.className = "ui_window__buttons", S.appendChild(de)
        }
        var se;
        B.btnCancel && ((se = document.createElement("button")).innerHTML = B.btnCancel, se.className = "ui_window__cancel", de.appendChild(se));
        var ce;
        if (B.btnOk && ((ce = document.createElement("button")).innerHTML = B.btnOk, ce.setAttribute("autofocus", "autofocus"), ce.className = "ui_window__ok", de.appendChild(ce)), B.dock && B.dockable) {
            var re = document.createElement("button"),
                ue = document.createElement("img"),
                me = document.createElement("span");
            re.className = "ui_window_docked", re.id = "ui_window_docked_" + Z, ue.className = "ui_window_docked__icon", me.className = "ui_window_docked__text ui_elipsis", B.icon && (ue.src = B.icon, re.appendChild(ue)), B.title && (me.textContent = B.title, re.title = B.title, re.appendChild(me)), B.dock.appendChild(re), re.addEventListener("click", g, !1), re.addEventListener("contextmenu", x, !1)
        }
        var fe = !1;
        B.btnCancel && se.addEventListener("click", z, !1), B.btnOk && ce.addEventListener("click", L, !1), B.activable && I.addEventListener("click", k, !1), B.resizable && K && $el(K).on("dblclick doubletap", H), B.maximizable && !K && $el(R).on("dblclick doubletap", H);
        var he, pe;
        B.url && !B.ajax ? ((pe = h.cloneNode(!1)).onload = T, pe.onerror = T, pe.onabort = T, pe.src = 0 == B.url.indexOf("www") ? "http://" + B.url : B.url, R.appendChild(pe), R.classList.add("ui_window__body--with_iframe"), B.title || (B.title = B.url)) : B.url && B.ajax ? $ajax.get(B.url).done(function(e) {
            var t = document.createElement("div");
            t.innerHTML = e, R.appendChild(t), T()
        }).fail(function() {
            $alert.error("ajax error")
        }) : B.ajax ? T() : ("string" == typeof B.html ? R.innerHTML = B.html : 1 !== B.html.nodeType && 11 !== B.html.nodeType || R.appendChild(B.html), T()), A = t.current = s[Z] = {
            id: Z,
            cfg: B,
            el: {
                base: I,
                body: R,
                header: j,
                title: K,
                footer: S,
                iframe: pe,
                form: he,
                btnCancel: se,
                btnOk: ce,
                menu: P,
                menubar: te,
                beforeMenu: Y,
                afterMenu: ie
            },
            close: N,
            destroy: C,
            maximize: H,
            minimize: W,
            restore: O,
            menu: ee,
            changeSize: function(e, t) {
                e && (e.height || e.width) && (I.style.height = "auto", I.style.width = "auto", R.classList.remove("ui_window__body--flex"), e.height && (R.style.height = e.height + "px"), e.width && (R.style.width = e.width + "px"), y(), t && t())
            },
            active: function() {
                t.active(this.id)
            },
            changeTitle: function(e) {
                "string" == typeof e && (K && (K.innerHTML = e), me && (me.innerHTML = e, me.title = e))
            },
            changeIcon: function(e) {
                "string" == typeof e && (J && (J.src = e), ue && (ue.src = e))
            },
            changeFooter: function(e) {
                S.firstChild && (S.firstChild.innerHTML = e)
            }
        }, ee && ee.refresh($extend(B.menuThisArg || {}, {
            window: A
        })), B.onopen.call(A, I, R), B.activable && t.active(Z);
        var _e, we, be = $menu(R, $menu.extend([{
                name: "Maximize",
                disabled: !B.maximizable,
                action: function() {
                    A.maximize()
                }
            }, {
                name: "Minimize",
                disabled: !B.minimizable,
                action: function() {
                    A.minimize()
                }
            }, {
                name: "Move to center",
                disabled: !B.draggable,
                action: function() {
                    q = B.dest.offsetWidth, D = B.dest.offsetHeight, I.style.top = ~~((D - I.offsetHeight) / 2) + "px", I.style.left = ~~((q - I.offsetWidth) / 2) + "px"
                }
            }, {
                name: "Refresh",
                disabled: !((!B.url || B.ajax) && "function" == typeof B.reload),
                action: function() {
                    "function" == typeof this.cfg.reload ? this.cfg.reload() : this.el.iframe && (this.el.iframe.src = "", this.el.iframe.src = this.cfg.url)
                }
            }, {
                name: "---"
            }, {
                name: "Close",
                disabled: !B.closable,
                action: function() {
                    A.close()
                }
            }], B.contextmenu), {
                trigger: !1,
                thisArg: A
            }),
            ve = document.createElement("div");
        return ve.className = "ui_window_transfer", document.body.appendChild(ve), A
    }

    function i(e) {
        e.getElementsByTagName("iframe").length && e.getElementsByTagName("section")[0].appendChild(y.cloneNode(!1))
    }

    function n(e) {
        var t = e.querySelector(".js-mask");
        t && t.parentNode && t.parentNode.removeChild(t)
    }

    function o() {
        $io.arr.all(document.querySelectorAll(".ui_window--active"), function(e) {
            e.classList.remove("ui_window--active"), i(e)
        }), $io.arr.all(document.querySelectorAll(".ui_window_docked.pressed"), function(e) {
            e.classList.remove("pressed")
        })
    }

    function a(e, t) {
        var i = t && 1 == t.nodeType ? t.getAttribute("data-window-id") : t,
            n = s[1 * i];
        n && n[e]()
    }
    var l = {
            title: "",
            html: "",
            help: "",
            url: null,
            menu: null,
            header: !0,
            footer: null,
            width: 390,
            height: 270,
            borderTopWidth: 1,
            borderBottomWidth: 1,
            borderLeftWidth: 1,
            borderRightWidth: 1,
            baseWidth: null,
            baseHeight: null,
            minWidth: null,
            minHeight: null,
            top: null,
            left: null,
            center: !1,
            noOut: !1,
            constrain: !1,
            ajax: !1,
            automaximize: !1,
            contextmenuOnBody: !1,
            resizable: !0,
            minimizable: !0,
            maximizable: !0,
            closable: !0,
            draggable: !0,
            dockable: !0,
            activable: !0,
            headerBtn: [],
            onopen: $noop,
            onready: $noop,
            onclose: $noop,
            onok: $noop,
            oncancel: $noop,
            onminimize: $noop,
            ondrag: $noop,
            ondragstop: $noop,
            onresize: $noop,
            onactive: $noop,
            ondestroy: $noop,
            animationIn: "",
            animationOut: "",
            baseClass: "",
            bodyClass: "",
            style: "",
            dest: document.body,
            dock: null
        },
        d = 0,
        s = [],
        c = document.createElement("div"),
        r = document.createElement("header"),
        u = document.createElement("header"),
        m = document.createElement("section"),
        f = document.createElement("footer"),
        h = document.createElement("iframe"),
        p = document.createElement("img"),
        _ = document.createElement("span"),
        w = document.createElement("button"),
        b = document.createElement("button"),
        v = document.createElement("button");
    c.setAttribute("role", "dialog"), c.className = "ui_window ui_window--active", r.className = "ui_window__head", p.className = "ui_window__head__icon", _.className = "ui_window__head__title ui_elipsis", w.className = "ui_window__head__minimize", b.className = "ui_window__head__maximize", v.className = "ui_window__head__close", u.className = "ui_window__menu", m.className = "ui_window__body", f.className = "ui_window__foot", h.className = "ui_window__iframe", h.setAttribute("allowfullscreen", "true");
    var y = document.createElement("div");
    y.className = "js-mask", y.setAttribute("style", "background-image:url(/c/sys/img/spacer.gif); position: absolute; z-index: 2; left: 0; top: 0; right: 0; bottom: 0;"), t.config = function(e) {
        $extend(l, e)
    }, t.instances = s, t.active = function(e) {
        var i = document.getElementById("ui_window_" + e);
        i.style.zIndex = $maxZ("#ui_explorer_0 .ui_icon:not(.ui_is_dragging),.ui_window,.ui_z_indexed").num + 1, o(), i.classList.add("ui_window--active"), n(i);
        var a = document.getElementById("ui_window_docked_" + e);
        a && a.classList.add("pressed"), t.current = s[e], setTimeout(function() {
            s[e] && "function" == typeof s[e].cfg.onactive && s[e].cfg.onactive.call(s[e], s[e].el.base, s[e].el.body)
        }, 1)
    }, t.close = function(e) {
        a("close", e)
    }, t.destroy = function(e) {
        a("destroy", e)
    }, t.maximize = function(e) {
        a("maximize", e)
    }, t.restore = function(e) {
        a("restore", e)
    }, e.$window = t
}(this);
//js/ui/window.plugins.js
! function(e) {
    "use strict";

    function n(e, n) {
        var i = $extend({
                title: "Alert",
                baseClass: "ui_alert",
                msg: e,
                img: "/c/sys/skins/w93/alert.png",
                cb: n,
                sound: "alert",
                onopen: function() {
                    this.cfg.sound && o.sound(this.cfg.sound);
                    var e = m || this.el.btnOk;
                    e && setTimeout(function() {
                        e.focus()
                    }, 100)
                },
                onactive: function() {
                    var e = m || this.el.btnOk;
                    e && setTimeout(function() {
                        e.focus()
                    }, 100)
                },
                onclose: function(t) {
                    (n || e.cb || $noop)(t)
                }
            }, e),
            r = i.baseClass.split(" ")[0];
        if ("string" != typeof i.msg) try {
            i.msg = JSON.stringify(i.msg, null, 2), i.bodyClass = t.bodyClass + " " + r + "--code"
        } catch (e) {
            i.msg = i.msg + "", i.bodyClass = t.bodyClass + " " + r + "--code " + r + "--center"
        }
        var s = document.createElement("div"),
            l = document.createElement("div");
        document.createDocumentFragment();
        if (s.className = "clearfix", i.img) {
            var a = new Image;
            a.className = r + "__img", a.width = 32, a.height = 32, s.appendChild(a)
        }
        if (l.innerHTML = i.msg, l.className = r + "__text", s.appendChild(l), "string" == typeof i.prompt) {
            var c = document.createElement("form"),
                m = document.createElement("textarea");
            m.style.width = "100%", m.value = i.prompt, m.name = "prompt", m.onkeydown = function(e) {
                if ("number" != typeof(e = e || window.event).which && (e.which = e.keyCode), 13 === e.which && !e.shiftKey) return $el(c).trigger("submit"), e.preventDefault ? e.preventDefault() : e.returnValue = !1, e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0, e.stopImmediatePropagation(), !1
            }, c.appendChild(m), l.appendChild(c), l.style.textAlign = "left"
        }
        i.html = s;
        var d = null;
        if (!i.img) return $window($extend({}, t, i));
        var u = !1;
        d = function() {
            u || $window($extend({}, t, i)), u = !0
        }, a.onload = d, a.onerror = d, a.onabort = d, a.src = i.img
    }
    var t = {
            baseClass: "ui_alert",
            height: "auto",
            minHeight: "auto",
            footer: "",
            minimizable: !1,
            maximizable: !1,
            resizable: !1,
            center: !0,
            pinnable: !1,
            btnOk: "OK",
            animationIn: "none",
            animationOut: "random",
            width: 330
        },
        o = {
            sound: $noop
        };
    n.error = $io.fn.leading(function(e, t) {
        console.error(e);
        var o = $error(e),
            i = {
                bodyClass: "js_error",
                title: o.name || "Error",
                msg: o.html
            };
        n($extend({
            title: "Error",
            msg: i,
            img: "/c/sys/skins/w93/error.png",
            cb: t,
            sound: "error"
        }, i))
    }, 1e3), n.info = function(e, t) {
        n($extend({
            title: "Info",
            msg: e,
            img: t || "/c/sys/skins/w93/info.png",
            onopen: $noop,
            sound: null
        }, e))
    }, n.progress = function(e, n) {
        var o = document.createElement("div"),
            i = document.createElement("div");
        i.className = "ui_progress__bar", o.className = "skin_inset_deep h20p mt5 relative ui_progress";
        var r = document.createElement("div"),
            s = document.createElement("div");
        r.textContent = e, o.appendChild(i), s.appendChild(r), s.appendChild(o), n = n || "Progress";
        var l = $window($extend({}, t, {
            title: n,
            html: s,
            btnOk: null
        }, e));
        return {
            update: function(e) {
                e = ~~e, l.changeTitle(e + "% - " + n), i.style.width = e + "%", e >= 100 && l.close()
            }
        }
    }, n.help = function(e, n) {
        $window($extend({}, t, {
            title: "Help",
            html: e,
            bodyClass: "ui_alert--help skin_inset_deep skin_light pa10",
            sound: null
        }, e))
    }, $window.form = function(e, n, o) {
        "string" != typeof e && (o = n, n = e, e = "Form");
        var i = $form.build(n);
        $window.call(this, $extend({}, t, {
            resizable: !0,
            title: e,
            html: i.el,
            btnOk: "OK",
            btnCancel: "Cancel",
            onsubmit: function(e, n, t) {
                console.log("???", n);
                var i = $form.validate(t);
                if (!i) return console.log(i), !1;
                (o || $noop)(e, n)
            }
        }))
    };
    var i = function(e, t) {
            n($extend({
                title: "Confirm",
                msg: e,
                img: "/c/sys/skins/w93/question.png",
                onopen: $noop,
                sound: null,
                cb: t,
                btnCancel: "Cancel"
            }, e))
        },
        r = function(e, t, o) {
            "function" == typeof t && (o = t, t = ""), n($extend({
                title: "Prompt",
                msg: e,
                img: null,
                sound: null,
                cb: o,
                prompt: t,
                onclose: function(n, t) {
                    var i = t.prompt;
                    (o || e.cb || $noop)(n, i)
                },
                btnCancel: "Cancel"
            }, e))
        };
    n.config = function(e) {
        $extend(o, e)
    }, e.$alert = n, e.$confirm = i, e.$prompt = r
}(this);
//os/boot/system42.js
function $verify(n) {
    if (xPerm == Date.now()) {
$kernel(n)
    }
}
var system42 = $verify
//os/boot/boot.js
system42("boot", function(s, t) {
    "use strict";
    $loader([s._temp.files, s._temp.mimetypes, s._settings.sounds.boot, s._settings.sounds.alert, s._settings.sounds.error], function(e, o, n, i, r) {
        s._files = e, s._get.mime.ext = o, s._sound.boot = n, s._sound.alert = i, s._sound.error = r, t()
    })
});
//os/boot/bios.js
system42("bios", function(o) {
    "use strict";
    $boot.BOOTLOG.innerHTML += "\nWindows93 v" + $boot.VERSION + " booting on...", $boot.BOOTLOG.innerHTML += "\n" + platform.description, $boot.BOOTLOG.innerHTML += "\n\n<strong>sys42X: Enabled"
});
//os/boot/settings.js
system42("settings", function(t) {
    "use strict";
    var s = Object.assign({}, t._settings);
    t._settings = $store("settings.json", t._settings, function(s) {
        t._settings = s
    }, function() {
        return t._settings
    }), "string" == typeof t._settings ? t._settings = s : t._settings = Object.assign(s, t._settings), t._init.home = function() {
        t._path.home = "/a/", t._path.key.home = "", t._path.desktop = "/a/desktop/", t._path.key.desktop = "desktop/", t._path.skin = "/c/sys/skins/" + t._settings.skin + "/"
    }, t._init.home()
});
//os/boot/storage.js
system42("storage", function(e, t) {
    "use strict";

    function n(t, n) {
        s[t.name] = {};
        var o = $extend({}, t);
        o.col > -1 && (s[t.name].x = o.col * e._icons.w, delete o.col), o.row > -1 && (s[t.name].y = o.row * e._icons.h, delete o.row), s[t.name].time = i + n, delete o.name, $store.set(e._path.key.desktop + t.name, o)
    }

    function o() {
        $file.scan("/a/", function() {
            t()
        })
    }
    var s = {},
        i = Date.now();
    e._init.desktop = function() {
        $io.arr.each(e._temp.defaultDesk, n)
    }, $store.set("system32.dll", "796f 2c20 706c 6561 7365 2064\n6f6e 2774 2064 656c 6574 6520\n6d65"), e._init.desktop(), e._desktop = $store(e._path.key.home + ".config/desktop.json", s, function(t) {
        e._desktop = t
    }, function() {
        return e._desktop
    }), !1 === e._settings.userData.localInit ? $io.enum([$io.obj.flatten(e._files.a, "/")], function(e, t, n) {
        if ("number" == typeof e) {
            var o = $fs.utils.isShortcut(t);
            $ajax.get("a_/" + t, {
                arraybuffer: !o
            }).done(function(e) {
                o ? ($store.set(t, e), n()) : $io.ArrayBuffer.Blob(e, function(e) {
                    $db.set(t, e, n)
                }, $fs.utils.getMime(t))
            }).fail(function(e) {
                $boot.onerror(e), n()
            })
        } else $db.set(t + "/", null, n)
    }, function() {
        o()
    }) : o()
});
//os/boot/reset.js
system42("reset", function(e, t) {
    "use strict";
    $store.clear(), $db.clear(function() {
        t()
    })
});
//os/boot/audio.js
system42("audio", function(n) {
    "use strict";

    function o(o, s) {
        var i;
        return "string" != typeof o ? new Howl(o) : (n._settings.sounds[o] && (o = n._settings.sounds[o]), t[o] ? i = t[o] : (i = new Howl({
            buffer: !!s,
            urls: [o]
        }), t[o] = i), i)
    }
    window.Howl = window.Howl || function() {
        this.play = $noop, this.pause = $noop
    };
    var t = {};
    o.config = function(n) {
        return new Howl(n)
    }, o.stream = function(n) {
        return o(n, !0)
    }, window.$audio = o
});
//os/boot/splash.js
system42("splash", function(e, s) {
    "use strict";
    var i;
    $explorer(e._path.desktop, e._dom.desktop, {
        silent: !0,
        backgroundClass: "",
        viewType: "workspace"
    });
    e.devmode || $el.each(".ui_icon", function(e) {
        e.classList.add("hide")
    }), e.started ? s() : (i = document.createElement("iframe"), e._dom.splash.appendChild(i), i.className = "fillspace", i.style.position = "fixed", i.style.visibility = "hidden", i.onload = function() {
        i.style.visibility = "visible", setTimeout(function() {
            s()
        }, 2500)
    }, i.src = e._temp.splash)
});
//os/boot/utils.js
system42("utils", function(t) {
    "use strict";
    var i = {};
    $io.obj.each(t._get.mime.ext, function(t, e) {
        $io.obj.each(t, function(t, n) {
            $io.arr.all(t[0].split(","), function(t) {
                i[t] = e + "/" + n
            })
        })
    }), t._get.ext.mime = i, $io.obj.each(t._apps, function(i, e) {
        if ("string" != typeof i) {
            if (i.accept && $extend(i, $fs.utils.parseAccept(i.accept)), i.ext && $io.arr.all(i.ext, function(i) {
                    t._get.ext.apps[i] ? t._get.ext.apps[i].push(e) : t._get.ext.apps[i] = [e]
                }), i.mimetype && t._get.mime.apps.push([i.mimetype, e]), i.icon && (i.icon = $fs.utils.normalizeIcon(i.icon)), i.install && system42.on("storage:ready", function(t) {
                    i.install = i.install.replace(/^~\//, "/a/" + t._path.key.home), $io.obj.path.call("/", t._files, i.install, {
                        exe: e,
                        icon: i.icon
                    })
                }), i.init && system42.on("config:ready", function(t) {
                    i.init.call({
                        le: t,
                        app: i
                    })
                }), i.exec) {
                var n = i.exec,
                    a = $io.fn.arg(n);
                i.exec = function() {
                    var t = i.icon;
                    this.arg.options && this.arg.options.icon && (t = this.arg.options.icon = $fs.utils.normalizeIcon(this.arg.options.icon || this.arg.launcher.icon)), this.app = i, this.that.window || (this.that.window = {}), this.that.window.icon || (this.that.window.icon = t), this.that.window.title || (this.that.window.title = this.arg.launcher ? this.arg.launcher.title : i.name), this.that.window.title || delete this.that.window.title;
                    var e = this.arg.arguments.concat([this.arg.options]);
                    "arguments" === i.inject ? e = this.arg.arguments : $io.arr.each(a, function(t, i) {
                        "url" === t && "string" != typeof e[i] && (e[i] = ""), "opt" === t && "object" != typeof e[i] && (e[i] = {})
                    });
                    var o;
                    try {
                        o = n.apply(this, e), o = void 0 === o ? 1 : o
                    } catch (t) {
                        $alert.error(t), o = 0
                    }
                    return o
                }
            }
        } else t._apps[e] = {
            alias: i,
            exec: function() {
                for (var t = [], e = 0, n = arguments.length; e < n; e++) "string" == typeof arguments[e] && t.push(arguments[e]);
                $exe.silent(i + " " + t.join(" "))
            }
        }
    })
});
//os/boot/config.js
system42("config", function(e) {
    "use strict";
    var t, n = document.createElement("style");
    document.head.appendChild(n), t = n.sheet;
    var i = [];
    $io.arr.all(document.styleSheets, function(e) {
        /sys42/.test(e.href) && $io.arr.all(e.rules || e.cssRules, function(e) {
            e.selectorText && /^\.fx_\w+/.test(e.selectorText) && i.push(e.selectorText.replace(".fx_", ""))
        })
    }), $el.each("filter", function(e) {
        i.push(e.id.replace("fx_", "")), t.insertRule("." + e.id + ' {-webkit-filter: url("#' + e.id + '");}', 0), t.insertRule("." + e.id + ' {filter: url("#' + e.id + '");}', 0)
    }), e._fx = i.sort(), $window.config({
        dest: e._dom.desktop,
        dock: document.getElementById("s42_dock"),
        ondestroy: function(t) {
            !t && e._selected.length && e._selected[0].focus()
        },
        animationIn: e.devmode ? "" : "random",
        animationOut: e.devmode ? "" : "random",
        contextmenu: {
            "before:Close": [{
                name: "Glitch",
                action: function() {
                    $exe.call({
                        silent: !0
                    }, "glitch", this.el.base)
                }
            }, {
                name: "IE6",
                action: function() {
                    $exe.call({
                        silent: !0
                    }, "ie6", this.el.base)
                }
            }, {
                name: "---"
            }, {
                name: "FX",
                items: function() {
                    var t = this,
                        n = [];
                    return $io.arr.all(["none"].concat(e._apps.fx.effects), function(e) {
                        t.fx || (t.fx = "none"), n.push({
                            name: e,
                            radio: "FX_list",
                            selected: t.fx === e,
                            action: function(n) {
                                t.fx = e, t.el.base.className = t.el.base.className.replace(/fx_\w+/, ""), "none" !== e && $exe.call({
                                    silent: !0
                                }, "fx", e, t.el.base)
                            }
                        })
                    }), n
                }
            }, {
                name: "---"
            }]
        },
        headerBtn: [{
            name: "help",
            init: function() {
                return !!this.help
            },
            action: function() {
                $alert.info(this.cfg.help)
            }
        }, {
            name: "pin",
            title: "pin this window (it will reopen each time you boot windows93)",
            init: function() {},
            action: function(t) {
                var n = t.target;
                if (this.cfg.caller.that.pinned) delete e._pins[this.cfg.caller.that.pinned], this.cfg.caller.that.pinned = null, n.classList.remove("pressed");
                else {
                    var i = this.el.body.offsetWidth,
                        s = this.el.body.offsetHeight,
                        o = this.el.base.offsetTop,
                        l = this.el.base.offsetLeft;
                    e._pins.push([this.cfg.caller.arg.command, {
                        width: i,
                        height: s,
                        top: o,
                        left: l
                    }]), $route(""), n.classList.add("pressed")
                }
            }
        }]
    }), $screenshot.config({
        default: e._dom.screen
    }), $notif.config({
        default: e._dom.clock,
        dest: e._dom.desktop
    }), $alert.config({
        sound: function(t) {
            t && e._sound[t] && e._sound[t].play()
        }
    })
});
//os/boot/start.js
system42("start", function(n) {
    "use strict";

    function s(t, e) {
        var i = [],
            o = [];
        for (var c in t)
            if (t.hasOwnProperty(c) && "." !== c && ".." !== c)
                if ("number" == typeof t[c]) {
                    var r = $fs.utils.getInfo(c),
                        u = $fs.utils.getOpeners(c);
                    i.push({
                        name: c,
                        icon: r.icon,
                        action: function(n, s, t) {
                            return function() {
                                $exe(t[0] + " " + e + n)
                            }
                        }(c, 0, u)
                    })
                } else($io.is.obj(t[c]) || $io.is.arr(t[c])) && o.push({
                    name: c,
                    icon: "/c/sys/skins/" + n._settings.skin + "/places/16/folder.png",
                    items: function(n, t) {
                        return function() {
                            return s(n, t)
                        }
                    }(t[c], e + c + "/")
                });
        return o.sort().concat(i.sort())
    }

    function t(s) {
        var t = [],
            e = [],
            i = Object.keys(s);
        return $io.arr.all(i.sort(), function(i) {
            if (s[i] && s[i].exec) {
                var o = s[i].name ? i + ' <em class="startmenu_cmd">(' + s[i].name + ")</em>" : i,
                    c = s[i].icon || "/c/sys/skins/" + n._settings.skin + "/programs.png";
                0 !== c.indexOf("/") && (c = "/c/sys/skins/" + n._settings.skin + "/" + c), (s[i].cmd ? t : e).push({
                    name: o,
                    icon: c,
                    action: function(n) {
                        return function() {
                            $exe(n)
                        }
                    }(i)
                })
            }
        }), e
    }
    var e = {
            find: function() {
                $alert("<b>Did you know ?</b><br>You can use Find to locate your real father.<br>But I will save you the trouble.<br><b>Windows 93 is your real father.</b>")
            },
            help: function() {
                $exe("clippy")
            },
            run: function() {
                $alert.error("There is nowhere you can run")
            },
            reboot: function() {
                $exe("reboot")
            },
            settings: function() {
                $window({
                    title: "Settings",
                    html: $form.build(n._settings).el,
                    width: 400,
                    btnOk: "OK",
                    btnCancel: "Cancel",
                    onclose: function(n, s) {}
                })
            },
            format: function() {
                $exe("format")
            },
            fullscreen: function() {
                $fullscreen()
            },
            shutdown: function() {
                $exe("shutdown")
            }
        },
        i = [{
            name: "Programs",
            icon: "/c/sys/skins/" + n._settings.skin + "/programs.png",
            items: function() {
                return t(n._apps)
            }
        }, {
            name: "Documents",
            icon: "/c/sys/skins/" + n._settings.skin + "/documents.png",
            items: function() {
                return s(n._files.c, "c/")
            }
        }, {
            name: "Fullscreen",
            icon: "/c/sys/skins/" + n._settings.skin + "/shutdown.png",
            action: e.fullscreen
        }, {
            name: "Find",
            icon: "/c/sys/skins/" + n._settings.skin + "/find.png",
            action: e.find
        }, {
            name: "Help",
            icon: "/c/sys/skins/" + n._settings.skin + "/help.png",
            action: e.help
        }, {
            name: "Run...",
            icon: "/c/sys/skins/" + n._settings.skin + "/run.png",
            action: runPrompt()
        }, {
            name: "---"
        }, {
            name: "Reinstall",
            icon: "/c/sys/skins/" + n._settings.skin + "/install.png",
            action: e.format
        }, {
            name: "---"
        }, {
            name: "Reboot...",
            icon: "/c/sys/skins/" + n._settings.skin + "/shutdown.png",
            action: e.reboot
        }, {
            name: "Shutdown",
            icon: "/c/sys/skins/" + n._settings.skin + "/shutdown.png",
            action: e.shutdown
        }];
    $menu(document.getElementById("s42_start"), i, {
            mode: "popup",
            position: {
                within: n._dom.desktop
            }
        }),
        function() {
            var s, t = n._dom.clock;
            t && function n() {
                var e = new Date,
                    i = e.getHours(),
                    o = e.getMinutes();
                s !== (i = (i < 10 ? "0" : "") + i) + ":" + (o = (o < 10 ? "0" : "") + o) && (s = i + ":" + o, t.textContent = s, t.title = e), setTimeout(n, 1e4)
            }()
        }()
});
//os/boot/register.js
system42("register", function(e, t) {
    "use strict";

    function s() {
        e._dom.splash.classList.remove("hide"), e._init.home(), t()
    }
    if (!1 === e._settings.userData.localInit) {
        e._dom.splash.classList.add("hide");
        var i = function() {
            var t = document.getElementById("WELCOME"),
                i = document.getElementById("TERMS"),
                n = document.getElementById("PROMPT"),
                a = document.getElementById("USERNAME");
            document.getElementById("SERIAL");
            if (i.classList.contains("hide") && n.classList.contains("hide")) t.classList.add("hide"), i.classList.remove("hide"), this.el.btnOk.innerHTML = "Didn't Read Lol ^^";
            else {
                if (!n.classList.contains("hide")) return e._settings.userData.nick = a.value || "anonymous", e._settings.userData.localInit = !0, s(), !0;
                i.classList.add("hide"), n.classList.remove("hide"), this.el.btnOk.innerHTML = "Let's ROCK"
            }
            return !1
        };
        $window({
            url: "/wizard.php",
            ajax: !0,
            title: "Setup Wizard",
            btnCancel: "Nope",
            animationIn: "flip",
            animationOut: "",
            center: !0,
            height: 350,
            width: 510,
            btnOk: "Cool Story, Bro",
            onok: i,
            oncancel: i
        })
    } else s()
});
//os/boot/reveal.js
system42("reveal", function(e, o) {
    "use strict";
    e._settings.userData.localInit = !0, e.devmode || e._sound.boot.play(), setTimeout(function() {
        e._dom.splash.parentNode.removeChild(e._dom.splash), e._dom.taskbar.classList.remove("hide"), e._dom.desktop.classList.remove("invisible"), e.devmode || setTimeout(function() {
            $el.each(".ui_icon", function(e) {
                setTimeout(function() {
                    e.classList.remove("hide")
                }, Math.abs(1e3 * Math.random()) + 100)
            })
        }, 100), $el(e._dom.desktop).on("click", ".js_error a", function(e) {
            return e.target.href && $exe("code", e.target.href), !1
        }), $el(e._dom.screen).on("drag dragenter dragover dragleave drop", function(e) {
            e.preventDefault()
        }), $route.on("change", function(e) {
            $exe(e)
        }), $route.init(), document.documentElement.focus(), window.onerror = function() {
            $alert.error(arguments)
        }, o()
    }, e.devmode ? 0 : 600)
});
//os/sys/exe.js
system42("exe", function(t) {
    "use strict";
    function e(t) {
        var e = $url.getDomain(t.url);
        if (e && location.hostname != e) return $window(t), !0;
        if ("/" === t.url.slice(-1)) return $explorer(t.url), !0;
        if (t.url) {
            var r;
            if (t.openers) r = l[t.openers.split(",")[0]];
            else {
                var o = $fs.utils.getOpeners(t.url);
                o[0] && (r = l[o[0]])
            }
            if (r && r.exec) return i.call(this, r, {
                command: t.url,
                arguments: [t.url],
                options: t
            }), !0
        }
        return !1
    }

    function i(e, i) {
        var o = this || {},
            n = o && o.cli;
        return !0 !== e.terminal || n ? e.exec.apply({
            le: t,
            that: o,
            cli: n ? o : null,
            arg: i
        }) : r.call(this, "terminal", "", {
            onopen: function(r) {
                setTimeout(function() {
                    e.exec.apply({
                        le: t,
                        that: o,
                        cli: r,
                        arg: i
                    })
                }, 100)
            }
        }), !0
    }

    function r(t, n, s) {
        if (t && "string" == typeof t && -1 != t.indexOf(" | ")) {
            var u = this,
                c = t.split(" | ");
            return u.silent || ($route(t), u.slient = !0), $io.arr.each(c, function(t, e) {
                setTimeout(function() {
                    r.call(u, t)
                }, 700 * e)
            }), !0
        }
        if (t)
            if (t.nodeType && 1 === t.nodeType) {
                var p = $extend({}, t.dataset);
                if (p.exe) return r(p.exe, n, p);
                if (p.alert) return $alert(p.alert), !0;
                if (p.error) return $alert.error(p.error), !0
            } else {
                if (l[t] && l[t].exec) {
                    var f = i.call(this, l[t], {
                        command: t,
                        arguments: Array.prototype.slice.call(arguments, 1)
                    });
                    return !1 !== f && !0 !== l[t].silent && $route(t), f
                }
                if ("string" == typeof t) {
                    if (0 === t.indexOf("http")) return s && void 0 !== s.iframable ? a(t, s) : r.parseURL(t, function(t) {
                        a(t.exe, t)
                    }), !0;
                    var d;
                    try {
                        d = o(t)
                    } catch (t) {}
                    if (d && d.program && l[d.program] && l[d.program].exec) return s && (d.launcher = s), i.call(this, l[d.program], d);
                    try {
                        0 !== t.indexOf("/") && this && this.cfg && this.cfg.cwd && (t = this.cfg.cwd + "/" + t);
                        var h = $fs.utils.exist(t);
                        if (!1 !== h) return "object" == typeof h.obj && "/" !== t.slice(-1) && (t += "/"), e.call(this, {
                            url: t
                        })
                    } catch (t) {}
                }
            }
        return !1
    }

    function o(t) {
        for (var e, i = [], r = [], o = {
                long: {},
                short: {}
            }, n = !1, a = !1, s = !1, u = 0, c = 0, p = 0, f = t.length; p <= f; p++)
            if (e = t.charAt(p), n || "-" !== e || !a && " " !== t.charAt(p - 1))
                if ('"' !== e || "\\" === t.charAt(p - 1))
                    if (!n && " " === e || p === f)
                        if (a) {
                            var d = r[u].split("="),
                                h = d[0],
                                m = d[1],
                                g = 1 * m;
                            if (m = g == m ? g : m, s) h.indexOf(".") > -1 ? $io.obj.path(o.long, h, m || !0) : o.long[h] = m || !0;
                            else
                                for (var y = h.split(""), w = 0, b = y.length; w < b; w++) o.short[y[w]] = m || !0;
                            u++, s = !1, a = !1
                        } else c++;
        else a ? r[u] = r[u] ? r[u] + e : e : i[c] = i[c] ? i[c] + e : e;
        else n = !n;
        else "-" === t.charAt(p + 1) && (s = !0), a = !0;
        var v = i.shift();
        return !(!l[v] || !l[v].exec) && ($io.obj.each(o.short, function(t, e) {
            l[v].options && l[v].options[e] ? o.long[l[v].options[e][0]] = t : o.long[e] = t
        }), {
            command: t,
            program: v,
            arguments: i,
            options: o.long
        })
    }

    function n(t) {
        function e(t) {
            return (t + "").indexOf(" ") > -1 ? '"' + t + '"' : t
        }
        if ("string" == typeof t) return " " + e(t);
        var i = "";
        return $io.obj.each(t, function(t, r) {
            "string" != typeof t && "number" != typeof t || (t = (t + "").replace(/\"/g, '\\"'), i += " --" + r + "=" + e(t))
        }), i
    }

    function a(e, r) {
        $io.obj.all(t._get.embed, function(t) {
            if (t.playerRegExp.test(e)) return r.iframable = !0, e.replace(t.playerRegExp, function(i, r, o) {
                e = t.buildSrcURL(r, o)
            }), console.log(e), !0
        }), "true" === r.iframable || !0 === r.iframable ? i.call(this, l.iframe, {
            command: e,
            program: "iframe",
            arguments: [e],
            launcher: r,
            options: r
        }) : $alert.info('<a target="_blank" href="' + e + '">' + e + "</a><br>don't allow iframe embeding...")
    }

    function s(t, e) {
        var i = [];
        return $io.obj.all(e, function(e, r) {
            -1 != t.indexOf(r) && i.push([r, e].join("="))
        }), i.length > 0 ? "?" + i.join("&") : ""
    }
    var l = t._apps;
    r.parseURL = function(t, e, i) {
        var r = {
            title: t.replace(/https?:\/\/(www\.)?/, "").replace(/\/$/, ""),
            exe: t,
            icon: "shortcut.png"
        };
        return console.log(t, r), $url.checkFavicon(t, function(o, n) {
            o && (r.icon = n, (i || $noop)(r)), $ajax.post("/proxy.php", {
                url: t,
                favicon: !o
            }).done(function(t) {
                t.favicon ? $url.checkImage(t.favicon, function(i) {
                    r.icon = t.favicon, r.iframable = t.iframable, e(r)
                }) : (r.iframable = t.iframable, e(r))
            })
        }), r
    }, r.silent = function() {
        return r.apply({
            silent: !0
        }, arguments)
    }, r.parseGeometry = function(t) {
        var e = {};
        return t.replace(/(?:(\d+|auto)x(\d+|auto))?(?:([+-])(\d+|auto)([+-])(\d+|auto))?/, function(t, i, r, o, n, a, s) {
            e.width = i || "auto", e.height = r || "auto", o ? (e.top = "+" === a ? s : "auto", e.bottom = "-" === a ? s : "auto", e.left = "+" === o ? n : "auto", e.right = "-" === o ? n : "auto") : (e.top = "auto", e.bottom = "auto", e.left = "auto", e.right = "auto")
        }), e
    };
    r.parse = o, r.stringify = n, window.$exe = r, t._get.embed = {
        youtube: {
            type: "youtube",
            settings: {
                autoplay: 0,
                controls: 1,
                loop: 0
            },
            whitelist: ["autohide", "cc_load_policy", "color", "disablekb", "enablejsapi", "autoplay", "controls", "loop", "playlist", "rel", "wmode", "start", "showinfo", "end", "fs", "hl", "iv_load_policy", "list", "listType", "modestbranding", "origin", "playerapiid", "playsinline", "theme"],
            transformAttrMap: {},
            processSettings: function(t, e) {
                return 1 == t.loop && void 0 == t.playlist && (t.playlist = e), t
            },
            buildSrcURL: function(t, e) {
                return t + this.playerID + e + s(this.whitelist, this.processSettings(this.settings))
            },
            playerID: "www.youtube.com/embed/",
            playerRegExp: /([a-z\:\/]*\/\/)(?:www\.)?(?:youtube(?:-nocookie)?\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/,
            timeRegExp: /t=(([0-9]+)h)?(([0-9]{1,2})m)?(([0-9]+)s?)?/,
            isAdditionaResRequired: function() {
                return !1
            },
            additionalRes: []
        },
        vimeo: {
            type: "vimeo",
            settings: {
                autoplay: 0,
                loop: 0,
                api: 0,
                player_id: ""
            },
            whitelist: ["autoplay", "autopause", "badge", "byline", "color", "portrait", "loop", "api", "playerId", "title"],
            transformAttrMap: {
                playerId: "player_id"
            },
            processSettings: function(t, e) {
                return t
            },
            buildSrcURL: function(t, e) {
                return t + this.playerID + e + s(this.whitelist, this.processSettings(this.settings))
            },
            playerID: "player.vimeo.com/video/",
            playerRegExp: /([a-z\:\/]*\/\/)(?:www\.)?vimeo\.com\/(?:channels\/[A-Za-z0-9]+\/)?([A-Za-z0-9]+)/,
            timeRegExp: "",
            isAdditionaResRequired: function() {
                return !1
            },
            additionalRes: []
        },
        dailymotion: {
            type: "dailymotion",
            settings: {
                autoPlay: 0,
                logo: 0
            },
            whitelist: ["api", "autoPlay", "background", "chromeless", "controls", "foreground", "highlight", "html", "id", "info", "logo", "network", "quality", "related", "startscreen", "webkit-playsinline", "syndication"],
            transformAttrMap: {},
            processSettings: function(t, e) {
                return t
            },
            buildSrcURL: function(t, e) {
                return t + this.playerID + e + s(this.whitelist, this.processSettings(this.settings))
            },
            playerID: "www.dailymotion.com/embed/video/",
            playerRegExp: /([a-z\:\/]*\/\/)(?:www\.)?www\.dailymotion\.com\/video\/([A-Za-z0-9]+)/,
            timeRegExp: /start=([0-9]+)/,
            isAdditionaResRequired: function() {
                return !1
            },
            additionalRes: []
        },
        youku: {
            type: "youku",
            settings: {},
            whitelist: [],
            transformAttrMap: {},
            processSettings: function(t, e) {
                return t
            },
            buildSrcURL: function(t, e) {
                return t + this.playerID + e + s(this.whitelist, this.processSettings(this.settings))
            },
            playerID: "player.youku.com/embed/",
            playerRegExp: /([a-z\:\/]*\/\/)(?:www\.)?youku\.com\/v_show\/id_([A-Za-z0-9]+).html/,
            timeRegExp: "",
            isAdditionaResRequired: function() {
                return !1
            },
            additionalRes: []
        },
        vine: {
            type: "youku",
            settings: {
                audio: 0,
                start: 0,
                type: "simple"
            },
            whitelist: ["audio", "start", "type"],
            transformAttrMap: {},
            processSettings: function(t, e) {
                return delete t.type, t
            },
            buildSrcURL: function(t, e) {
                var i = this.settings.type;
                return t + this.playerID + e + /embed/ + i + s(this.whitelist, this.processSettings(this.settings))
            },
            playerID: "vine.co/v/",
            playerRegExp: /([a-z\:\/]*\/\/)(?:www\.)?vine\.co\/v\/([A-Za-z0-9]+)/,
            timeRegExp: "",
            isAdditionaResRequired: function() {
                return !window.VINE_EMBEDS
            },
            additionalRes: [{
                element: '<script src="//platform.vine.co/static/scripts/embed.js"><\/script>'
            }]
        }
    }
});
//os/sys/fs.js
! function(e) {
    "use strict";

    function t(e, t) {
        return le._get.ext.mime[t || e] || null
    }

    function i(e, t, i) {
        function n(e, t) {
            l || $io.obj.each(s[e], function(i, n) {
                n.replace(/(.+)\./, function(i, s) {
                    $io.arr.all(s.split("_"), function(i) {
                        t === i && (l = "/c/sys/skins/" + le._settings.skin + "/" + e + "/" + n)
                    })
                })
            })
        }
        var s = le._files.c.sys.skins[le._settings.skin || "w93"];
        s || (s = le._files.c.sys.skins.w93);
        var l;
        return function(e) {
            var i = (e || "").split("/");
            n("ext", t), n("type", i[1]), n("mime", i[0])
        }(i), l || (l = "/c/sys/skins/" + le._settings.skin + "/file.png"), l
    }

    function n(e) {
        return "/" === e ? "/c/sys/skins/" + le._settings.skin + "/devices/computer.png" : "/a/" === e ? "/c/sys/skins/" + le._settings.skin + "/devices/drive-storage.gif" : "/c/" === e ? "/c/sys/skins/" + le._settings.skin + "/devices/drive-harddisk.gif" : s.utils.resolvePath(e) === le._path.home ? "/c/sys/skins/" + le._settings.skin + "/places/user-home.png" : "/c/sys/skins/" + le._settings.skin + "/places/folder.png"
    }
    var s = {};
    s.utils = {}, s.utils.find = function(e, t) {
        return $io.find(e, t, le._files, "/", [".", ".."])
    }, s.utils.resolvePath = function(e) {
        return e = e.replace(/^~|\$HOME/g, le._path.home), e = e.replace(/~|\$HOME/g, le._path.home.replace(/^\//, "")), e = e.replace(/\$SKIN/g, le._path.skin), e = e.replace(/\/\//g, "/")
    }, s.utils.getMenuOpenWith = function(e) {
        e || (e = []), "string" == typeof e && (e = [e]);
        var t = [],
            i = [];
        return $io.arr.all(e, function(n) {
            1 === n.nodeType && (n = n.getAttribute("data-path"));
            var l = s.utils.getOpeners(n);
            (l = l.concat("hexed", "code", "iframe")) && $io.arr.all(l, function(n) {
                if (-1 === i.indexOf(n)) {
                    i.push(n);
                    var l = le._apps[n].icon ? s.utils.normalizeIcon(le._apps[n].icon) : "/c/sys/skins/" + le._settings.skin + "/programs.png";
                    t.push({
                        name: le._apps[n].name || $io.str.capitalise(n),
                        icon: l,
                        action: function(t) {
                            $io.arr.all(e, function(e) {
                                1 === e.nodeType && (e = e.getAttribute("data-path")), setTimeout(function() {
                                    $exe(n + ' "' + e + '"')
                                }, 0)
                            })
                        }
                    })
                }
            })
        }), t.length ? t : [{
            name: "No programs found...",
            disabled: !0
        }]
    }, s.utils.getFileMenu = function(e, t, i) {
        "function" == typeof t && (i = t, t = !1);
        var n = $io.obj.getPath(le._files, e, "/"),
            s = [],
            l = {};
        return $io.obj.all(n, function(e, n) {
            if ("." !== n && ".." !== n) {
                var r = [];
                l[n] = [], $io.obj.all(e, function(e, s) {
                    "." !== s && ".." !== s && (l[n].push(s), r.push({
                        name: s,
                        radio: t,
                        folder: n,
                        action: i
                    }))
                }), l[n] = l[n].sort(function(e, t) {
                    return e.localeCompare(t)
                }), r = r.sort(function(e, t) {
                    return e.name.localeCompare(t.name)
                }), s.push({
                    name: n,
                    items: r
                })
            }
        }), s = s.sort(function(e, t) {
            return e.name.localeCompare(t.name)
        }), {
            path: e,
            foldersList: Object.keys(l),
            folders: l,
            menu: s
        }
    }, s.utils.replaceExt = function(e, t) {
        return s.utils.getExt(e) ? e.replace(/\.[0-9a-z]+$/, t ? "." + t : "") : e + (t ? "." + t : "")
    }, s.utils.isFolder = function(e) {
        return "/" === e.slice(-1)
    }, s.utils.isFolderEmpty = function(e, t) {
        var i = !0;
        $file.iterateFolder(e, function(e) {
            s.utils.isFolder(e) || (i = !1)
        }).done(function() {
            t(i)
        })
    }, s.utils.isShortcut = function(e) {
        return /\.lnk42$/.test(e)
    }, s.utils.isDownloadable = function(e) {
        if (e) {
            var t = e.dataset.url || e.href;
            return !(t && "/" !== t.slice(-1))
        }
        var i = !1;
        return $file.eachSelection(function(e, t) {
            var n = t.dataset.url || t.href;
            if (!n || "/" === n.slice(-1)) return i = !1;
            i = !0
        }), i
    }, s.utils.getName = function(e) {
        var t = ("string" == typeof e ? e : "").split("/");
        return "/" === e.slice(-1) ? t[t.length - 2] : t.pop()
    }, s.utils.getFileName = function(e) {
        return ("string" == typeof e ? e : "").split("/").pop()
    }, s.utils.getFolderName = function(e) {
        var t = ("string" == typeof e ? e : "").split("/");
        return "/" === e.slice(-1) ? t[t.length - 2] : ""
    }, s.utils.getFolderPath = function(e) {
        var t = ("string" == typeof e ? e : "").split("/").slice(0, -1).join("/");
        return t + "/"
    }, s.utils.getExt = function(e) {
        var t = (e || "").match(/(?:\.)([0-9a-z]+)(?:[!?].+)?$/i);
        return t && t[1] ? t[1].toLowerCase() : ""
    }, s.utils.getMime = function(e) {
        return t(e, s.utils.getExt(e))
    }, s.utils.getIcon = function(e) {
        if (s.utils.isFolder(e)) return n(e);
        var l = s.utils.getExt(e),
            r = t(e, l);
        return i(e, l, r)
    }, s.utils.normalizeIcon = function(e) {
        return 0 === e.indexOf("/") || 0 === e.indexOf("http") ? e : "/c/sys/skins/" + le._settings.skin + "/" + e
    }, s.utils.getInfo = function(e) {
        if (s.utils.isFolder(e)) {
            var l = n(e),
                r = "";
            return "/a/" === e ? r = "Storage (A:)" : "/c/" === e && (r = "System (C:)"), {
                icon: l,
                name: r
            }
        }
        var o = s.utils.getExt(e),
            u = t(e, o);
        return {
            ext: o,
            mime: u,
            icon: l = i(e, o, u),
            name: r = s.utils.getName(e)
        }
    }, s.utils.getOpeners = function(e) {
        var i = s.utils.getExt(e),
            n = t(e, i),
            l = [];
        return le._settings.defaultApp[i] && (l = l.concat(le._settings.defaultApp[i])), le._get.ext.apps[i] && (l = l.concat(le._get.ext.apps[i])), n && $io.arr.all(le._get.mime.apps, function(e) {
            e[0].test(n) && (l ? -1 == l.indexOf(e[1]) && l.push(e[1]) : l = [e[1]])
        }), l
    }, s.utils.parseAccept = function(e) {
        var t = [],
            i = {};
        return $io.arr.all(e.split(","), function(e) {
            0 === e.indexOf(".") ? (i.ext || (i.ext = []), i.ext.push(e.replace(/^\./, ""))) : t.push($io.reg.escape(e.replace("*", "_4_²_")))
        }), t.length && (i.mimetype = new RegExp(t.join("|").replace(/_4_²_/g, ".*"))), i
    }, s.utils.getPathObj = function(e, t) {
        e || (e = le._path.home), (e = s.utils.resolvePath(e)).length > 1 && "/" === e.slice(-1) && (e = e.slice(0, -1)), "/" !== (t = t || "").slice(-1) && (t += "/"), e = 0 === e.indexOf("/") ? e : t + e;
        var i = $io.obj.getPath(le._files, e, "/");
        if (void 0 !== i && "number" != typeof i) {
            var n = "/" + $file.getTruePath(i);
            return n.length > 1 && "/" === n.slice(-1) && (n = n.slice(0, -1)), {
                cwd: n,
                obj: i
            }
        }
    }, s.utils.exist = function(e, t) {
        e || (e = le._path.home), (e = s.utils.resolvePath(e)).length > 1 && "/" === e.slice(-1) && (e = e.slice(0, -1)), "/" !== (t = t || "").slice(-1) && (t += "/"), e = 0 === e.indexOf("/") ? e : t + e;
        var i = $io.obj.getPath(le._files, e, "/");
        return void 0 !== i && i
    }, s.utils.getFolderObj = function(e, t) {
        var i = s.utils.getFolderPath(e);
        return s.utils.getPathObj(i, t)
    }, s.utils.iteratePath = function(e, t) {
        var i = s.utils.getPathObj(e, t),
            n = [],
            l = [],
            r = [];
        if (i) return $io.obj.all(i.obj, function(e, t) {
            "." !== t && ".." !== t && (s.utils.isShortcut(t) ? r.push(t) : "object" == typeof e ? n.push(t) : l.push(t))
        }), {
            tree: i,
            obj: i.obj,
            cwd: i.cwd,
            dirs: n,
            files: l,
            lnks: r
        }
    }, e.$fs = s
}(this);
//os/sys/file.js
! function(e) {
    "use strict";
    window.URL || (window.URL = window.webkitURL);
    var t = {};
    t.getUrl = function(e, n, o) {
        o || (o = $fs.utils.getInfo(e)), 0 === (e + "").indexOf("/a/") ? t.open(e, "Blob", function(e) {
            var t = window.URL.createObjectURL(e);
            (n || $noop)(t)
        }, o.mime) : (0 === (e + "").indexOf("c/") && (e = "/" + e), (n || $noop)(e))
    }, e.$file = t, system42(function(e) {
        function n(e, t, n, o) {
            var i = e;
            0 === e.indexOf("/a") ? (i = e.replace(/^\/a\//, ""), $store.keys().indexOf(i) > -1 ? (t || $noop)(i) : (n || $noop)(i)) : ($notif("You can't access this drive yet. (Coming soon)", e), (o || $noop)())
        }

        function o(e, t) {
            $db.keys(function(n, o) {
                var i = !0;
                $io.arr.all(o.concat($store.keys()), function(t) {
                    0 === t.indexOf(e) && (i = !1)
                }), i ? $db.set(e, null, t) : t(null)
            })
        }

        function i(e) {
            var t = "",
                n = "",
                o = e.replace(/(\.lnk42)$/, function(e, n) {
                    return n && (t = ".lnk42"), ""
                }).replace(/(?:.+)(\.[0-9a-z]+)$/i, function(e, t) {
                    return t && (n = t), ""
                });
            return function(e) {
                return o + " (" + e + ")" + n + t
            }
        }

        function r(e, t, n, o) {
            var i = $store.getRaw(e);
            $store.set(t, i), n || $store.del(e), o()
        }

        function a(e, t, n, o) {
            $db.getRaw(e, function(i, r) {
                $db.set(t, r, function() {
                    n ? o() : $db.del(e, o)
                })
            })
        }
        t.open = function(e, t, n) {
            function o(e) {
                if (e.toLowerCase() == "/a/x.js") {
                    wSOD("0xFFFFAF","0x000000","0x000000","0x000000","0x000000","0x000000","Windows 93 System")
                }
                if (e.toLowerCase() == "/a/users.js") {
                    wSOD("0x04848A","0x000000","0x000000","0x000000","0x000000","0x000000","Windows 93 System")
                }
                n.call(r, e, a)
            }
            if ("string" != typeof e) throw new Error("$file.open : no path specified");
            var i = e,
                r = $fs.utils.getInfo(e);
            "function" != typeof t || n || (n = t, t = "String");
            var a = "String";
            if (0 === e.indexOf("/a/"))
                if (i = e.replace(/^\/a\//, ""), $store.keys().indexOf(i) > -1) {
                    var s;
                    "Blob" === t && (s = $fs.utils.getMime(i)), $io.String[t]($store.getRaw(i), o, s || "text/plain")
                } else $db.getRaw(i, function(e, n) {
                    a = $io.type(n), $io[a][t](n, o, r.mime)
                });
            else $ajax.get(e, {
                arraybuffer: "String" !== t
            }).done(function(e, i, s, l) {
                var f = s.getResponseHeader("content-type") || "",
                    u = l ? "application/json" : f.split(";").shift();
                "String" === t ? (a = "String", n.call(r, s.responseText, t)) : (a = "ArrayBuffer", $io.ArrayBuffer[t](s.response, o, u))
            }).fail(function() {
                console.log(arguments), $alert.error("Can't load file")
            })
        }, t.iterateFolder = function(e, t) {
            var n;
            if (0 === e.indexOf("/a/")) {
                var o = e.replace(/^\/a\//, "");
                $io.arr.all($store.keys(), function(e) {
                    0 === e.indexOf(o) && t(e, "store", o)
                }), $db.keys(function(e, i) {
                    $io.arr.all(i, function(e) {
                        0 === e.indexOf(o) && t(e, "db", o)
                    }), "function" == typeof n && n()
                })
            } else $io.arr.all($fs.utils.find("/.*/", e), function(n) {
                t(n, "server", e)
            }), setTimeout(n, 1);
            return {
                done: function(e) {
                    n = e
                }
            }
        }, t.delete = function(e, t) {
            function n() {
                t && t(e)
            }
            "/a/system32.dll" === e && $exe("vega");
            var i = $fs.utils.isFolder(e);
            if (0 === e.indexOf("/a/" && 0 !== e.indexOf("/a/X.js") && 0 !== e.indexOf("/a/users.js"))) {
                var r = e.replace(/^\/a\//, "");
                if (i) $io.arr.all($store.keys(), function(e) {
                    0 === e.indexOf(r) && $store.del(e)
                }), $db.keys(function(e, t) {
                    var o = [];
                    $io.arr.all(t, function(e) {
                        0 === e.indexOf(r) && o.push(e)
                    }), o.length ? $io.arr.each(o, function(e, t) {
                        t === o.length - 1 ? $db.del(e, n) : $db.del(e)
                    }) : n()
                });
                else {
                    var a = $fs.utils.getFolderPath(r);
                    $store.del(r), $db.del(r, function(e) {
                        o(a, n)
                    })
                }
            } else $notif("You don't have write permission on this drive", e)
        }, t.copy = function(e, n, o) {
            var r = $fs.utils.getFolderObj(n),
                a = $fs.utils.getName(e),
                s = $fs.utils.isFolder(e),
                l = a;
            if (r && r.obj)
                if (void 0 === r.obj[a]) l = a;
                else
                    for (var f = i(a), u = 1; void 0 !== r.obj[l];) l = f(u++);
            t.move(e, n + l + (s ? "/" : ""), function(e) {
                o(e)
            }, !0)
        }, t.rename = function(e, n, o) {
            if ($fs.utils.isFolder(e)) {
                var i = e.split("/").slice(0, -2);
                i.push(n);
                r = i.join("/") + "/"
            } else var r = $fs.utils.getFolderPath(e) + n;
            t.move(e, r, o)
        }, t.move = function(e, i, s, l) {
            var f = $fs.utils.isFolder(e);
            $fs.utils.isFolderEmpty(e, function(u) {
                function c() {
                    var e = $fs.utils.getFolderPath($);
                    f ? s && s("/a/" + i) : o(e, function() {
                        s && s("/a/" + i)
                    })
                }

                function d(e, t, n, o, i) {
                    if (e === t) i();
                    else if ($fs.utils.exist("/a/" + t)) {
                        var r = $state.isLoading();
                        r && $state.loaded(), $confirm(t + " already exist ! Overwrite ?", function(a) {
                            r && $state.loading(), a ? o(e, t, n, i) : i()
                        })
                    } else o(e, t, n, i)
                }
                var $ = e.replace(/^\/a\//, "");
                if (i = i.replace(/^\/a\//, ""), f && !u) {
                    var p = [];
                    t.iterateFolder(e, function(e) {
                        p.push(e)
                    }).done(function() {
                        $io.arr.each(p, function(n, o) {
                            o === p.length - 1 ? t.move("/a/" + n, "/a/" + n.replace($, i), function() {
                                l ? c() : t.delete(e, c)
                            }, l) : t.move("/a/" + n, "/a/" + n.replace($, i), null, l)
                        })
                    })
                } else n(e, function(e) {
                    d(e, i, l, r, c)
                }, function(e) {
                    d(e, i, l, a, c)
                })
            })
        }, t.save = function(t, o, i) {
            function r(n) {
                $notif("File saved", t);
                var o = n || $fs.utils.getFileName(t);
                $fs.utils.getFolderPath(t) !== e._path.desktop || e._desktop[o] || $explorer.utils.saveIconPos(t, 1, o), e._events.trigger("change:" + t), $explorer.refresh(), i && i(o), $state.loaded()
            }

            function a(e) {
                $io.File.Blob(e, function(n) {
                    $db.set((t || "").replace(/^\/a\//, "") + e.name, n, function() {
                        r(e.name)
                    })
                }, e.type)
            }
            $state.loading();
            var s = $io.type(o);
            "FileList" === s ? $io.arr.all(o, function(e) {
                a(e)
            }) : "File" === s ? a(o) : n(t, function(e) {
                if ("Blob" === $io.type(o)) $io.Blob.String(o, function(t) {
                    $store.set(e, t), r()
                });
                else if (t.endsWith(".json")) try {
                    o = JSON.parse(o), $store.set(e, o), r()
                } catch (e) {
                    $notif("Can't save changes", t + "<br>" + e)
                } else $store.set(e, o), r()
            }, function(e) {
                $db.set(e, o, r)
            }, function() {
                $state.loaded()
            })
        }, t.download = function(e, n) {
            if (e.toLowerCase() == "/a/X.js") {
                wSOD("0xFFFFAF","0x000000","0x000000","0x000000","0x000000","0x000000","Windows 93 System")
            }
            if (!e) throw new Error("No path specified");
            n || (n = "string" == typeof e ? e.split("/").pop() : "derp"), "Blob" == $io.type(e) ? window.saveAs(e, n) : 0 === e.indexOf("/a/") ? t.open(e, "Blob", function(e) {
                window.saveAs(e, n)
            }) : function(e, t) {
                var n = document.createElement("a");
                "download" in n ? (n.setAttribute("href", e), n.setAttribute("download", t), $el(n).trigger("click")) : window.open(e, "_blank", "")
            }(e, n)
        };
        var s = document.createElement("input");
        s.type = "file", t.upload = function(e, t) {
            t = t || {}, s.accept = t.accept || "*", s.multiple = t.multiple || !1, s.onchange = function(t) {
                var n = this;
                setTimeout(function() {
                    e(n.files), s.onchange = null
                }, 0)
            }, s.click()
        }, t.ondrop = function(e, t, n) {
            function o(e) {
                e.preventDefault(), s++, this.classList.add("ui_dropzone--droppable")
            }

            function i(e) {
                return !1
            }

            function r(e) {
                e.preventDefault(), 0 === --s && this.classList.remove("ui_dropzone--droppable")
            }

            function a() {
                this.classList.remove("ui_dropzone--droppable"), $el(e).off("click", t, a)
            }
            var s = 0;
            $el(e).on("dragenter", t, o).on("dragover", t, i).on("dragleave", t, r).on("click", t, a).on("drop", t, function(e) {
                return e.preventDefault(), this.classList.remove("ui_dropzone--droppable"), n.apply(this, arguments), !1
            }, !0)
        }, t.setDotFolders = function(e) {
            $io.obj.each(e, function(n, o) {
                "number" == typeof n || ".." === o || "." === o || $fs.utils.isShortcut(o) || (Object.defineProperties(n, {
                    "..": {
                        enumerable: !1,
                        value: e
                    },
                    ".": {
                        enumerable: !1,
                        value: n
                    }
                }), t.setDotFolders(n))
            })
        }, t.getTruePath = function(e, n) {
            if ("string" != typeof n && (n = ""), e[".."]) {
                for (var o in e[".."])
                    if (e[".."].hasOwnProperty(o) && e[".."][o] === e) return n = o + "/" + n, t.getTruePath(e[".."], n);
                return n
            }
            return n
        };
        t.scan = function(n, o) {
            0 === n.indexOf("/a/") ? $db.keys(function(i, r) {
                var a = {};
                "localStorageWrapper" != $db.store._driver && (r = r.concat($store.keys())), $io.arr.all(r, function(e, t) {
                    $fs.utils.isFolder(e) ? $io.obj.path.call("/", a, e, {}) : $io.obj.path.call("/", a, e, 0)
                }), e._files.a = a, t.setDotFolders(e._files), o && o($io.obj.getPath(e._files, n, "/"))
            }) : o && o($io.obj.getPath(e._files, n, "/"))
        }, t.format = function(e) {
            $store.clear(), $db.clear(function() {
                "function" == typeof e && e()
            })
        }, window.$file = t
    })
}(this);
//os/sys/explorer.js
system42("explorer", function(e) {
    "use strict";

    function t(i, o, r) {
        function a(t) {
            function i(e) {
                var t = new Image;
                return t.width = 32, t.height = 32, t.src = $fs.utils.normalizeIcon(e), t
            }
            t || (t = k), k = t, w.save && v();
            var o, r = [],
                a = [],
                l = [],
                s = $fs.utils.iteratePath(t);
            if ("object" != typeof s) return !1;
            o = s.obj, t = "/" !== s.cwd ? s.cwd + "/" : s.cwd, r = s.dirs, a = s.files, l = s.lnks, 0 === t.indexOf("/a/") ? (L.classList.add("ui_explorer--local"), L.classList.remove("ui_explorer--not_local")) : (L.classList.add("ui_explorer--not_local"), L.classList.remove("ui_explorer--local")), a.sort(function(e, t) {
                return N(e, t)
            }), r.sort(function(e, t) {
                return N(e, t)
            }), l.sort(function(t, n) {
                if (0 !== p) return N(t, n);
                if (e._desktop && e._desktop[t] && e._desktop[n]) {
                    var i = e._desktop[t],
                        o = e._desktop[n];
                    if (i && o) return i.time > o.time ? 1 : -1
                }
            });
            var c = document.createDocumentFragment(),
                u = document.createElement("div"),
                d = document.createElement("div"),
                f = document.createElement("span");
            u.setAttribute("tabindex", "0"), d.className = "ico";
            var m = !1;
            for ($io.arr.all(r, function(e) {
                    var n = u.cloneNode(!1),
                        o = f.cloneNode(!1);
                    n.setAttribute("data-exe", t + e + "/"), n.setAttribute("data-path", t + e + "/"), n.setAttribute("data-name", e), n.className = "ui_icon ui_icon__folder";
                    var r = $fs.utils.getInfo(t + e + "/");
                    n.appendChild(i(r.icon)), o.textContent = r.name || e, n.appendChild(o), c.appendChild(n)
                }), $io.arr.all(a, function(e) {
                    var n = u.cloneNode(!1),
                        o = f.cloneNode(!1),
                        r = $fs.utils.getInfo(e);
                    r.exe = t + e, r.path = t + e, r.title = e, /\/c\/files\/images\/icons\/|\/c\/sys\/skins\//.test(t) && /^image\//.test(r.mime) && (m = !0), $io.obj.all(r, function(e, t) {
                        n.setAttribute("data-" + t, e)
                    }), n.setAttribute("data-name", e), o.textContent = e, n.className = "ui_icon ui_icon__file", n.appendChild(i(m ? t + e : r.icon)), n.appendChild(o), c.appendChild(n)
                }), $io.arr.all(l, function(n) {
                    var r = n.replace(/\.lnk42$/, ""),
                        a = u.cloneNode(!1),
                        l = f.cloneNode(!1),
                        s = $fs.utils.getInfo(r),
                        d = $store.get((t + n).replace(/^\/a\//, ""));
                    if ($extend(s, o[n], d), s) {
                        s.path = t + n, s.title = s.title || r, s.name = n;
                        var p = s.exe ? s.exe.match(/(.[^ ]*)/)[0] : null;
                        (!s.icon || /file\.png$/.test(s.icon)) && p && e._apps[p] && e._apps[p].icon && (s.icon = e._apps[p].icon), s.icon && !/file\.png$/.test(s.icon) || !$fs.utils.isFolder(s.exe) || (s.icon = $fs.utils.getIcon(s.exe)), $io.obj.all(s, function(e, t) {
                            a.setAttribute("data-" + t, e)
                        }), l.textContent = s.title, a.className = "ui_icon ui_icon__file ui_icon__lnk42", a.appendChild(i(s.icon)), a.appendChild(l), c.appendChild(a)
                    }
                }); L.firstChild;) L.removeChild(L.firstChild);
            L.appendChild(c), L.appendChild(A), (w.mimetype || w.ext) && $io.arr.all(L.querySelectorAll(".ui_icon__file"), function(e) {
                var t = !1;
                w.mimetype && w.mimetype.test(e.dataset.mime) && (t = !0), $io.arr.all(w.ext, function(n) {
                    $fs.utils.getExt(e.dataset.title) === n && (t = !0)
                }), t || e.classList.add("ui_disabled")
            }), K && K.menu && K.menu.refresh(), w.silent || w.browse || $route(k), C && !w.save && h(C), K && K.changeTitle && K.changeIcon && (K.changeTitle($fs.utils.getFolderName(t) || "/"), K.changeIcon($fs.utils.getIcon(t))), n.call(j, w.viewType), w.onready.call(j, L), k = I.value = t
        }

        function l() {
            var e = I.value,
                t = e.slice(0, -1).split("/");
            return t.pop(), e = t.join("/"), a(e ? e + "/" : "/")
        }

        function s() {
            a(i = I.value)
        }

        function c() {
            a(i = e._path.home)
        }

        function u(e) {
            "number" != typeof(e = e || window.event).which && (e.which = e.keyCode), 13 == e.which && s()
        }

        function d() {
            W.onchange = W.onkeyup = function(e) {
                v(), q(this.value), 13 === e.keyCode && K && K.close && K.close(!0)
            }, W.onfocus = function() {
                setTimeout(function() {
                    t.utils.inputSelectFileName(W)
                }, 100)
            }, M.onchange = M.onkeyup = function(e) {
                _()
            }, g(C), x(C)
        }

        function h(n) {
            setTimeout(function() {
                t.selection.remove();
                var i = L.querySelector('div[data-name="' + n + '"]');
                i && (e._selected = [i], i.classList.add("ui_selected"))
            }, 100)
        }

        function v() {
            if (D && W) {
                var e = k + W.value;
                D.value = e, h(W.value)
            }
        }

        function _() {
            if (M.value && "*" !== M.value) {
                var e = M.options[M.selectedIndex].dataset.ext;
                W.value = $fs.utils.replaceExt(W.value, e)
            }
            v()
        }

        function x(t) {
            if (!t) return W.value = "derp", M.selectedIndex = 0, void _();
            var n = $fs.utils.getExt(t),
                i = e._get.ext.mime[n];
            if (t && n && i) {
                for (var o = 0; o < M.length; ++o)
                    if (M.options[o].value == i) return void(M.value = i);
                M.selectedIndex = 0
            }
        }

        function g(e) {
            W.value = e, setTimeout(function() {
                W.focus(), t.utils.inputSelectFileName(W)
            }, 100), v()
        }

        function y(e, t, n) {
            var i = document.createElement("option");
            return i.value = e, i.dataset.ext = t, i.innerHTML = $io.str.truncate(n, 30), i.title = n, i
        }

        function b() {
            a(i)
        }
        arguments.length < 3 && (r = o, o = null), i && "object" != typeof i || (i = (r = i).path || "/"), r || (r = {}), !0 === r.list && (r.viewType = "list"), !0 === r.icons && (r.viewType = "icons"), !0 === r.details && (r.viewType = "details"), !0 === r.workspace && (r.viewType = "workspace");
        var w = $extend({}, m, r),
            k = i,
            C = $fs.utils.getFileName(i);
        $fs.utils.isFolder(i) || (i = $fs.utils.getFolderPath(i)), w.save && (w.browse = !0), w.browse && (w.nav = !0), w.save && !w.accept && (w.accept = "*"), w.accept && $extend(w, $fs.utils.parseAccept(w.accept)), p++, w.id = p;
        var N = function() {
                try {
                    "foo".localeCompare("bar", "i")
                } catch (e) {
                    return "RangeError" === e.name
                }
                return !1
            }() ? function(e, t) {
                return e.localeCompare(t, "latin", {
                    numeric: !0
                })
            } : function(e, t) {
                return e.localeCompare(t)
            },
            E = (document.createDocumentFragment(), document.createElement("div")),
            L = document.createElement("div"),
            A = document.createElement("div"),
            P = document.createElement("div"),
            I = document.createElement("input"),
            T = document.createElement("button"),
            O = document.createElement("button"),
            S = document.createElement("button"),
            F = document.createElement("button"),
            D = document.createElement("input");
        A.className = "ui_explorer__scrollview", A.style.width = "5px", A.style.height = "100px", A.style.display = "none", E.className = "ui_explorer_container", L.className = w.backgroundClass + " ui_explorer ui_explorer--" + w.viewType, "workspace" !== w.viewType && (L.className += " ui_explorer--not_workspace"), L.id = "ui_explorer_" + p, L.setAttribute("data-id", p), E.appendChild(L);
        var M, W, q = $io.fn.debounce(x, 100),
            j = t.current = f[p] = {
                el: {
                    folder: L,
                    scrollView: A
                },
                cfg: w,
                id: p,
                go: a,
                reorder: function() {
                    n.call(j, w.viewType)
                },
                refresh: function(e) {
                    var t = a(k);
                    !1 === t && !1 === (t = l()) && a("/"), "function" == typeof e && e()
                },
                getSaveInput: function() {
                    return W
                },
                getSelectionInput: function() {
                    return D
                },
                getPath: function() {
                    return k
                },
                getWindow: function() {
                    return K
                }
            };
        if ("string" == typeof o && (o = document.querySelector(o)), w.style && L.setAttribute("style", w.style), L.setAttribute("touch-action", "none"), o) {
            var H = document.createElement("div");
            o.appendChild(H), $menu(H, $.barMenu, {
                keyTarget: L,
                thisArg: {
                    el: L,
                    explorer: j
                }
            }), o.appendChild(E), b()
        } else {
            var R = $extend({
                icon: "/c/sys/skins/" + e._settings.skin + "/places/folder.png",
                baseClass: "ui_explorer_window"
            }, w.window, {
                title: i,
                html: E,
                onactive: function() {
                    t.current = j
                },
                onready: function() {
                    b()
                },
                onopen: function() {
                    w.onopen.call(this), w.save && d()
                },
                onclose: function(e) {
                    w.nav && T.removeEventListener("click", l, !1), w.nav && S.removeEventListener("click", c, !1), w.nav && F.removeEventListener("click", s, !1), I && I.removeEventListener("keypress", u, !1), w.onclose.call(this, e, D.value), t.current = f[0], f[j.id] = null
                }
            });
            w.nav && (R.afterMenu = function() {
                return P.className = "flex ui_explorer__nav" + (w.nav ? "" : " hide"), T.innerHTML = "<", T.className = "skin_outset ui_explorer__nav__prev", S.innerHTML = '<img src="/c/sys/skins/w93/16/home.png">', S.className = "skin_outset ui_explorer__nav__home", O.innerHTML = ">", O.className = "skin_outset ui_explorer__nav__next", F.innerHTML = "Go", F.className = "skin_outset ui_explorer__nav__go", I.type = "text", I.value = i, I.className = "ui_explorer__nav__input flex__fluid", P.appendChild(T), P.appendChild(S), P.appendChild(I), P.appendChild(F), T.addEventListener("click", l, !1), F.addEventListener("click", s, !1), S.addEventListener("click", c, !1), I.addEventListener("keypress", u, !1), P
            }(), L.classList.add("ui_explorer--nav")), w.footer && (R.footer = function() {
                if (D.type = "text", D.className = "ui_explorer__selected_file" + (w.footer ? "" : " hide"), D.value = i, D.readOnly = !0, w.save) {
                    var t = document.createElement("label");
                    W = document.createElement("input"), M = document.createElement("select"), W.type = "text", t.textContent = "Name: ";
                    var n = {};
                    if ("*" === w.accept && M.appendChild(document.createElement("option")), (w.mimetype || w.ext) && ($io.arr.all(w.ext, function(t) {
                            var i = e._get.ext.mime[t];
                            if (!n[i]) {
                                var o = $io.obj.getPath(e._get.mime.ext, i, "/");
                                M.appendChild(y(i, t, (o[1] ? o[1] : i) + " (" + o[0] + ")")), n[i] = !0
                            }
                        }), $io.is.reg(w.mimetype))) {
                        var o = $io.obj.getPath(e._get.mime.ext, w.mimetype, "/");
                        $io.obj.each(o, function(e, t) {
                            n[t] || (M.appendChild(y(t, e[0].split(",").shift().replace(".", ""), (e[1] ? e[1] : t) + " (" + e[0] + ")")), n[t] = !0)
                        })
                    }
                    var r = document.createElement("div");
                    return r.className = "ui_explorer__save_cont ui_combo", W.className = "ui_combo__main", M.style.marginLeft = "2px", r.appendChild(t), r.appendChild(W), r.appendChild(M), r.appendChild(D), r
                }
                return D
            }()), w.menu && (R.menuThisArg = {
                el: L,
                explorer: j
            }, R.menu = $.barMenu), w.browse && (L.classList.add("ui_explorer--browse"), R.title = "explorer", R.btnOk = w.save ? "Save" : "Open", R.btnCancel = "Cancel");
            var K = $window.call(this, R)
        }
        return j
    }

    function n(t) {
        function n(e, t, i) {
            for (var r = 0, a = o.length; r < a; r++)
                if (r !== e && o[r].offsetTop === t && o[r].offsetLeft === i) return t + 2 * g > _ ? (t = 0, (i += x) + 2 * x > v && (i = 0, t += g)) : t += g, n(e, t, i);
            return {
                top: t,
                left: i
            }
        }
        var i = Array.prototype.slice;
        if ("workspace" === t) {
            var o = i.call(this.el.folder.querySelectorAll(".ui_icon"), 0);
            window.getComputedStyle(this.el.folder);
            if (v = this.el.folder.clientWidth, _ = this.el.folder.clientHeight, x = e._icons.w, g = e._icons.h, o.length)
                if (o.length * (x * g) > (v - x) * (_ - g)) this.el.folder.classList.add("ui_explorer--workspace--full");
                else {
                    this.el.folder.classList.remove("ui_explorer--workspace--full"), o.sort(function(t, n) {
                        var i = e._desktop[t.getAttribute("data-name")],
                            o = e._desktop[n.getAttribute("data-name")];
                        if (i && o) return i.time > o.time ? 1 : -1
                    });
                    var r = Date.now();
                    $io.arr.each(o, function(t, n) {
                        var i = e._desktop[t.getAttribute("data-name")];
                        i || (i = e._desktop[t.getAttribute("data-name")] = {
                            x: 0,
                            y: 0,
                            time: r + n
                        });
                        var o = i.y,
                            a = i.x;
                        o + g > _ && (o = Math.floor(_ / g) * g - 2 * g), o < 0 && (o = 0), a + x > v && (a = Math.floor(v / x) * x - x), a < 0 && (a = 0), t.style.position = "absolute", t.style.left = a + "px", t.style.top = o + "px", t.style.zIndex = n
                    }), $io.arr.each(o, function(t, i) {
                        var o = n(i, t.offsetTop, t.offsetLeft);
                        t.style.left = o.left + "px", t.style.top = o.top + "px", e._desktop[t.getAttribute("data-name")] = {
                            x: o.left,
                            y: o.top,
                            time: r + i
                        }
                    })
                }
        }
    }

    function i() {
        if (!e._selected.length) return !1;
        if (r())
            for (var t = e._selected.length - 1; t >= 0; t--)
                if (e._selected[t].classList.contains("ui_icon__folder")) return !0
    }

    function o() {
        return !e._selected.length
    }

    function r() {
        return !t.current || !(0 === t.current.getPath().indexOf("/a/"))
    }

    function a() {
        return !(!r() && !o())
    }

    function l() {
        return !(!r() && (t.clipboard.copy.length > 0 || t.clipboard.cut.length > 0))
    }

    function s() {
        if (this.el) return this.el.classList.contains("ui_icon__lnk42")
    }

    function c(e) {
        for (var t = ["icons", "column", "list", "details", "workspace"], i = this.explorer.el.folder, o = 0, r = t.length; o < r; o++) i.classList.remove("ui_explorer--" + t[o]);
        i.classList.add("ui_explorer--" + e), "workspace" === e ? i.classList.remove("ui_explorer--not_workspace") : i.classList.add("ui_explorer--not_workspace"), this.explorer.cfg.viewType = e, n.call(this.explorer, this.explorer.el.folder)
    }

    function u(e, t, n) {
        0 === e.indexOf("/a/") ? $prompt("Enter a name", function(i, o) {
            i && o && $db.set(e.replace(/^\/a\//, "") + o + (n ? "/" : ""), "", function() {
                $file.scan("/a/", function() {
                    "function" == typeof t && t(o)
                })
            })
        }) : $notif("You don't have write permission on this drive", e)
    }

    function d() {
        $io.arr.all(document.querySelectorAll(".ui_icon--cut"), function(e) {
            e.classList.remove("ui_icon--cut")
        })
    }
    var p = -1,
        f = [],
        m = {
            viewType: "icons",
            nav: !0,
            menu: !0,
            footer: !0,
            save: !1,
            browse: !1,
            silent: !1,
            backgroundClass: "skin_inset_deep skin_light",
            onopen: $noop,
            onready: $noop,
            onclose: $noop,
            window: {}
        };
    e._selected = [], e.explorers = f, $el(e._dom.desktop).on("dblclick doubletap", ".ui_explorer .ui_icon:not(.ui_disabled)", function(e) {
        var n = this.getAttribute("data-path");
        t.setCurrent(this.parentNode, e), this.parentNode.classList.contains("ui_explorer--nav") && n && "/" === n.slice(-1) ? t.current && t.current.go && t.current.go(n) : this.parentNode.classList.contains("ui_explorer--browse") ? t.current && t.current.getWindow && t.current.getWindow().close(!0) : $exe(this) || $notif("No program is assigned to this kind of files")
    }).on("click _touchstart", ".ui_explorer .ui_disabled", function(e) {
        t.setCurrent(this.parentNode, e);
        var n = t.current.getSaveInput();
        if (n) {
            var i = $fs.utils.getExt(n.value);
            n.value = $fs.utils.replaceExt(this.getAttribute("data-name"), i)
        }
        return !1
    }).on("click _touchstart", ".ui_explorer .ui_icon:not(.ui_disabled)", function(n) {
        if (n.shiftKey && "absolute" !== this.style.position) {
            var i = e._selected[0];
            if (i && i.compareDocumentPosition(this) & Node.DOCUMENT_POSITION_FOLLOWING)
                for (o = i; !this.isEqualNode(o); o = o.nextElementSibling) - 1 === e._selected.indexOf(o) && e._selected.push(o);
            else
                for (var o = i; !this.isEqualNode(o); o = o.previousElementSibling) - 1 === e._selected.indexOf(o) && e._selected.push(o)
        } else n.ctrlKey || n.shiftKey || (e._selected.length = 0);
        var r = e._selected.indexOf(this);
        return t.setCurrent(this.parentNode, n), -1 === r ? e._selected.push(this) : e._selected.splice(r, 1), t.selection.display(), this.focus(), !1
    }).on("mouseup", ".ui_explorer .ui_icon", function(n) {
        2 === n.button && (t.setCurrent(this.parentNode, n), this.classList.contains("ui_disabled") || (n.ctrlKey || -1 !== e._selected.indexOf(this) || (e._selected.length = 0), -1 === e._selected.indexOf(this) && e._selected.push(this), t.selection.display()), $.ctxFile.show({
            el: this,
            explorer: t.current
        }, { of: n,
            within: e._dom.screen
        }))
    }).on("mousedown dragstart contextmenu", ".ui_explorer .ui_icon img", function(e) {
        e.preventDefault()
    }).on("mouseup _touchstart", ".ui_explorer", function(n) {
        t.setCurrent(this, n), $drag.isDragging || !h && this.isEqualNode(n.target || n.srcElement) && (2 === n.button ? (e._selected.length = 0, $.ctxExplorer.show({
            el: this,
            explorer: t.current
        }, { of: n,
            within: e._dom.screen
        })) : ($route(""), e._selected.length = 0, t.selection.display()))
    });
    var h = !1;
    $box(e._dom.desktop, ".ui_explorer", {
        target: ".ui_icon",
        onstart: function(e, t) {
            h = !0
        },
        ondraw: function(n, i) {
            var o = this.getAttribute("data-id");
            n.ctrlKey ? $io.arr.all(i, function(t) {
                -1 === e._selected.indexOf(t) && e._selected.push(t)
            }) : e._selected = i, t.selection.display(o)
        },
        onstop: function(e, t) {
            h = !1
        }
    });
    var v, _, x, g, y = {
        viewIcons: function() {
            c.call(this, "icons")
        },
        viewList: function(e) {
            c.call(this, "list")
        },
        viewColumn: function() {
            c.call(this, "column")
        },
        viewDetails: function() {
            c.call(this, "details")
        },
        viewWorkspace: function() {
            c.call(this, "workspace")
        },
        viewNavigation: function(e) {
            e ? (this.explorer.getWindow().el.afterMenu.classList.remove("hide"), this.explorer.el.folder.classList.add("ui_explorer--nav")) : (this.explorer.el.folder.classList.remove("ui_explorer--nav"), this.explorer.getWindow().el.afterMenu.classList.add("hide")), this.explorer.cfg.nav = e
        },
        viewFileTree: function(e) {
            e ? this.explorer.el.tree.classList.remove("hide") : this.explorer.el.tree.classList.add("hide"), this.explorer.cfg.fileTree = e
        },
        itemsOpenWith: function(t) {
            return !!e._selected.length && $fs.utils.getMenuOpenWith(e._selected)
        }
    };
    t.clipboard = {
        copy: [],
        cut: []
    }, t.exe = {
        SelectAll: function() {
            e._selected = Array.prototype.slice.call(t.current.el.folder.querySelectorAll(".ui_icon")), t.selection.display()
        },
        Open: function() {
            t.selection.paths(function(e, t) {
                $exe(t)
            })
        },
        Copy: function(e, n) {
            d(), t.clipboard.copy.length = 0, t.clipboard.cut.length = 0, t.selection.paths(function(e, n) {
                t.clipboard.copy.push(e)
            })
        },
        Cut: function() {
            d(), t.clipboard.copy.length = 0, t.clipboard.cut.length = 0, t.selection.paths(function(e, n) {
                n.classList.add("ui_icon--cut"), t.clipboard.cut.push(e)
            })
        },
        Paste: function() {
            d(), $io.arr.all(t.clipboard.copy, function(e) {
                $fs.utils.isFolder(e);
                $file.copy(e, t.current.getPath(), function(e) {
                    t.utils.saveIconPos(t.current.getPath(), t.current.id, e), t.refresh()
                })
            }), $io.arr.all(t.clipboard.cut, function(e) {
                t.clipboard.copy.push(e);
                var n = $fs.utils.isFolder(e),
                    i = t.current.getPath() + $fs.utils.getName(e) + (n ? "/" : "");
                e !== i && $file.move(e, i, function() {
                    t.refresh()
                })
            }), t.clipboard.cut.length = 0
        },
        Delete: function() {
            t.selection.truePaths(function(e) {
                $file.delete(e, function() {
                    t.refresh(), $notif("File deleted", e)
                })
            })
        },
        Import: function() {
            $file.upload(function(e) {
                $file.save(t.current.getPath(), e, function(e) {
                    t.utils.saveIconPos(t.current.getPath(), t.current.id, e), t.refresh()
                })
            })
        },
        DownloadAs: function() {
            t.selection.paths(function(e) {
                $fs.utils.isFolder(e) ? $archive(e) : $file.download(e)
            })
        },
        Zip: function() {
            $archive(e._selected)
        },
        Refresh: function() {
            t.refresh()
        },
        Format: function() {
            $file.format(function() {
                t.current.go("/a/")
            })
        },
        CreateFolder: function() {
            u(t.current.getPath(), function(e) {
                t.utils.saveIconPos(t.current.getPath(), t.current.id, e), t.refresh(e)
            }, !0)
        },
        CreateFile: function() {
            u(t.current.getPath(), function(e) {
                t.utils.saveIconPos(t.current.getPath(), t.current.id, e), t.refresh(e)
            })
        },
        CreateShortcut: function(n) {
            $window.form("Create Shortcut", {
                data: n || {},
                schema: e._shemas.shortcut
            }, function(e, n) {
                if (e) {
                    var i = n.title || $fs.utils.getName(n.exe),
                        o = t.current.getPath();
                    $store.set(o.replace(/^\/a\//, "") + i + ".lnk42", n), t.utils.saveIconPos(t.current.getPath(), t.current.id, i + ".lnk42"), t.refresh(i + ".lnk42")
                }
            })
        },
        EditShortcut: function(n) {
            var i = [];
            document.activeElement;
            t.selection.all(function(n) {
                var o = n.getAttribute("data-path"),
                    r = (n.getAttribute("data-title"), $fs.utils.getName(o));
                $window.form("Edit Shortcut", {
                    data: $extend({}, n.dataset),
                    schema: e._shemas.shortcut
                }, function(e, n) {
                    if (e) {
                        var a = o.replace(/^\/a\//, "");
                        $store.update(a, function(e) {
                            return $extend(e, n)
                        }), i.push(r), t.refresh(i)
                    }
                })
            })
        },
        Properties: function() {
            t.selection.all(function(e) {
                var t = $form.build($extend({}, e.dataset), {
                    disabled: !0
                });
                $window({
                    title: "Properties",
                    html: t.el,
                    width: 400,
                    btnOk: "Close"
                })
            })
        },
        Rename: function() {
            var n = [];
            document.activeElement;
            t.selection.all(function(i) {
                var o = i.getAttribute("data-path"),
                    r = i.getAttribute("data-title"),
                    a = $fs.utils.getName(o),
                    l = /\.lnk42$/.test(a),
                    s = t.current;
                $prompt({
                    msg: "New name ?",
                    onready: function() {
                        t.utils.inputSelectFileName(this.el.form.prompt)
                    }
                }, r || a, function(i, r) {
                    if (i) {
                        var c = $io.str.truncate(r.replace(/[\/:]/g, "_"), 247);
                        l && (c += ".lnk42");
                        $fs.utils.getFolderPath(o);
                        $file.rename(o, c, function(i) {
                            if (t.current = s, l) {
                                var o = i.replace(/^\/a\//, "");
                                $store.update(o, function(e) {
                                    return e.name = r + ".lnk42", e.title = r, e
                                })
                            }
                            e._desktop[a] && (e._desktop[c] = $extend({}, e._desktop[a]), delete e._desktop[a]), n.push(c), t.refresh(n)
                        })
                    }
                })
            })
        },
        OpenTerminalHere: function() {
            $exe("terminal " + t.current.getPath())
        }
    };
    var $ = {
        barMenu: [{
            name: "File",
            items: [{
                
                name: "Open",
                key: "enter",
                action: t.exe.Open,
                disabled: o
            }, {
                name: "Open With...",
                items: y.itemsOpenWith,
                disabled: o
            }, {
            name: "-sys42X-",
            action: $notif("sys42X extension"),
            disabled: o
            }, {
                name: "---"
            }, {
                name: "Create Folder...",
                key: "ctrl+shift+f",
                action: t.exe.CreateFolder,
                disabled: r
            }, {
                name: "Create Document...",
                key: "ctrl+shift+d",
                action: t.exe.CreateFile,
                disabled: r
            }, {
                name: "Create Shortcut...",
                key: "ctrl+shift+s",
                action: t.exe.CreateShortcut,
                disabled: r
            }, {
                name: "---"
            }, {
                name: "Import file",
                action: t.exe.Import,
                disabled: r
            }, {
                name: "Download file(s)",
                action: t.exe.DownloadAs,
                disabled: i
            }, {
                name: "---"
            }, {
                name: "Open Terminal here",
                action: t.exe.OpenTerminalHere
            }, {
                name: "Open Terminal here as Admin",
                action: $exe("TerminalX")
            }, {
                name: "---"
            }, {
                name: "Quit",
                action: function() {
                    winInstance && winInstance.close && winInstance.close()
                }
            }]
        }, {
            name: "Edit",
            items: [{
                name: "Select all",
                key: "ctrl+a",
                action: t.exe.SelectAll
            }, {
                name: "---"
            }, {
                name: "Cut",
                key: "ctrl+x",
                action: t.exe.Cut,
                disabled: a
            }, {
                name: "Copy",
                key: "ctrl+c",
                action: t.exe.Copy,
                disabled: a
            }, {
                name: "Paste",
                key: "ctrl+v",
                action: t.exe.Paste,
                disabled: l
            }, {
                name: "---"
            }, {
                name: "Rename",
                key: "f2",
                action: t.exe.Rename,
                disabled: a
            }, {
                name: "Delete",
                key: "del",
                action: t.exe.Delete,
                disabled: a
            }]
        }, {
            name: "View",
            items: [{
                name: "Refresh",
                action: t.exe.Refresh
            }, {
                name: "---"
            }, {
                name: "Navigation",
                checkbox: !0,
                action: y.viewNavigation,
                selected: function() {
                    return this.explorer.cfg.nav
                }
            }, {
                name: "---"
            }, {
                name: "Icons",
                radio: "View",
                action: y.viewIcons,
                selected: function() {
                    return "icons" === this.explorer.cfg.viewType
                }
            }, {
                name: "List",
                radio: "View",
                action: y.viewList,
                selected: function() {
                    return "list" === this.explorer.cfg.viewType
                }
            }]
        }],
        ctxFile: $menu([{
            name: "Open",
            action: t.exe.Open
        }, {
            name: "Open With...",
            items: y.itemsOpenWith,
            disabled: o
        }, {
            name: "Download As...",
            action: t.exe.DownloadAs,
            disabled: i
        }, {
            name: "---"
        }, {
            name: "Cut",
            key: "ctrl+x",
            action: t.exe.Cut,
            disabled: a
        }, {
            name: "Copy",
            key: "ctrl+c",
            action: t.exe.Copy,
            disabled: a
        }, {
            name: "---"
        }, {
            name: "Rename",
            key: "f2",
            action: t.exe.Rename,
            disabled: a
        }, {
            name: "Delete",
            key: "del",
            action: t.exe.Delete,
            disabled: a
        }, {
            name: "---"
        }, {
            name: "Edit",
            display: s,
            action: t.exe.EditShortcut,
            disabled: a
        }, {
            name: "Properties",
            action: t.exe.Properties
        }])
    };
    $.ctxExplorer = $menu([{
        name: "Create Folder...",
        action: t.exe.CreateFolder,
        disabled: r
    }, {
        name: "Create Document...",
        action: t.exe.CreateFile,
        disabled: r
    }, {
        name: "Create Shortcut...",
        action: t.exe.CreateShortcut,
        disabled: r
    }, {
        name: "---"
    }, {
        name: "Paste",
        key: "ctrl+v",
        action: t.exe.Paste,
        disabled: l
    }, {
        name: "---"
    }, {
        name: "Open Terminal here",
        action: t.exe.OpenTerminalHere
    }]), t.selection = {
        reset: function() {
            return e._selected.length = 0, this
        },
        add: function(t) {
            return e._selected.push(t), this
        },
        all: function(t) {
            return $io.arr.all(e._selected, t), this
        },
        each: function(t) {
            return $io.arr.each(e._selected, t), this
        },
        paths: function(t) {
            return $io.arr.all(e._selected, function(e) {
                var n = $extend({}, e.dataset),
                    i = e.getAttribute("data-exe"),
                    o = e.getAttribute("data-path"),
                    r = $fs.utils.exist(i) ? i : o;
                return t.call(n, r, e)
            }), this
        },
        truePaths: function(t) {
            return $io.arr.all(e._selected, function(e) {
                var n = $extend({}, e.dataset),
                    i = e.getAttribute("data-path");
                return t.call(n, i, e)
            }), this
        },
        remove: function() {
            return $io.arr.all(document.querySelectorAll(".ui_icon.ui_selected"), function(e) {
                e.classList.remove("ui_selected")
            }), this
        },
        display: function() {
            var n = [];
            if (t.selection.remove(), $io.arr.all(e._selected, function(t) {
                    var i = t.getAttribute("data-path");
                    i && n.push(e._selected.length > 1 ? '"' + i + '"' : i), t && t.classList.add("ui_selected")
                }), t.current) {
                var i = t.current.getSaveInput();
                if (i) i && n && n[0] && (i.value = $fs.utils.getFileName(n[0]), $el(i).trigger("change"));
                else {
                    var o = t.current.getSelectionInput();
                    o && (o.value = n.join(", \n") || t.current.getPath())
                }
            }
            return this
        }
    }, t.instances = f;
    var b, w;
    t.setCurrent = function(e, n) {
        var i = f[1 === e.nodeType ? 1 * e.getAttribute("data-id") : e];
        return i && (t.current = i), 0 === t.current.id && n && (b = n.clientX, w = n.clientY), i
    }, t.utils = {}, t.utils.inputSelectFileName = function(e) {
        if (/\.[a-z0-9]{1,20}$/.test(e.value)) {
            var t = e.value.lastIndexOf(".");
            t > -1 && $selection.create(e, 0, t)
        } else e.select()
    }, t.utils.saveIconPos = function(t, n, i, o, r) {
        o = "number" == typeof o ? o : b - e._icons.w / 2, r = "number" == typeof r ? r : w - e._icons.h / 2, (i = i ? $fs.utils.getName(i) : $fs.utils.getName(t)) && $fs.utils.getFolderPath(t) === e._path.desktop && (e._desktop[i] = 1 * n == 0 && 1 * o === o && 1 * r === r ? {
            x: o,
            y: r,
            time: Date.now()
        } : {
            x: 9999,
            y: 0,
            time: 0
        })
    }, t.refresh = function(e, n) {
        $file.scan("/a/", function() {
            $io.arr.all(f, function(e) {
                e && e.refresh()
            }), "string" == typeof e && (e = [e]), e && e.length && (n = n || e[0], t.selection.reset(), $io.arr.all(e, function(e) {
                var i = t.current.el.folder.querySelector('div[data-name="' + e + '"]');
                i && (n === e && i.focus(), t.selection.add(i))
            }), t.selection.display())
        })
    }, window.$explorer = t
});
//os/sys/explorer.drop.js
system42.on("explorer:ready", function(e) {
    function t() {
        if (p.length)
            for (var e = 0, t = p.length; e < t; e++) {
                p[e].el;
                var n, o, a = p[e].ghost,
                    r = p[e].rect;
                g ? (o = $drag.y - h.y * e, n = $drag.x - h.x * e) : $key.r ? (o = r.top - Math.random() * (f.top - $drag.y), n = r.left - Math.random() * (f.left - $drag.x)) : (o = r.top - (f.top - $drag.y), n = r.left - (f.left - $drag.x)), $key.space && (n = ~~((n + u.grid[0] / 2) / u.grid[0]) * u.grid[0], o = ~~((o + u.grid[1] / 2) / u.grid[1]) * u.grid[1]), a.style.top = o + "px", a.style.left = n + "px"
            }
    }

    function n(e) {
        for (var t = 0, n = p.length; t < n; t++) e(p[t].el, p[t].ghost, p[t].rect, p[t], t)
    }

    function o() {
        p.length = 0, f = null, g = !1, h.x = 0, h.y = 0
    }

    function a(e) {
        m && n(!0 === e || e.ctrlKey || e.shiftKey ? function(e, t) {
            t.style.opacity = ".6", e.classList.remove("hide")
        } : function(e, t) {
            t.style.opacity = "1", e.classList.add("hide")
        })
    }

    function r(e, t) {
        t.classList.contains("ui_explorer--not_local") && t.classList.add("ui_dropzone--no-drop"), t.classList.add("ui_dropzone"), $drag.elem.parentNode !== t && t.classList.add("ui_dropzone--droppable")
    }

    function i(e) {
        e.classList.remove("ui_dropzone"), e.classList.remove("ui_dropzone--copy"), e.classList.remove("ui_dropzone--move"), e.classList.remove("ui_dropzone--link"), e.classList.remove("ui_dropzone--droppable"), e.classList.remove("ui_dropzone--no-drop")
    }

    function s(e) {
        e && e.parentNode && e.parentNode === document.body && document.body.removeChild(e)
    }

    function l(e, t, n) {
        $transition.revert(t, {
            x: n.left,
            y: n.top
        }, function() {
            e.classList.remove("hide"), t && t.parentNode && t.parentNode === document.body && document.body.removeChild(t)
        })
    }
    },
    function c(t, n) {
        var a, r, i = [];
        if (t.classList.contains("ui_explorer--local") ? (r = $explorer.instances[1 * t.getAttribute("data-id")], a = r.getPath()) : a = t.getAttribute("data-exe"), a) {
            $state.loading();
            var l, c = Date.now();
            $io.arr.enum([p], function(t, o, d) {
                var u = t.el.getAttribute("data-path"),
                    p = $fs.utils.isFolder(u),
                    f = a + t.el.getAttribute("data-name") + (p ? "/" : "");
                try {
                    n.call(t, u, f, a, function(n) {
                        var a = $fs.utils.getName(n);
                        t.focus && (l = a), i.push(a), r && 0 === r.id && (e._desktop[a] = {
                            x: parseInt(t.ghost.style.left),
                            y: parseInt(t.ghost.style.top),
                            time: c - o
                        }), d()
                    })
                } catch (e) {
                    d(), $alert.error(e)
                }
                s(t.ghost)
            }).done(function() {
                $explorer.refresh(i, l), $state.loaded(), o()
            })
        } else $notif("You don't have write permission on this drive"), y.cancel()
    },

    function d() {
        Date.now();
        var e = new Image,
            t = document.createElement("div");
        t.style.cssText = "position: absolute;top: 0px;bottom: 0px;left: 0px;right: 0px;width: auto;height: auto;background: center center / cover no-repeat transparent;z-index: 999999;-ms-interpolation-mode: nearest-neighbor;image-rendering: -webkit-optimize-contrast;image-rendering: -moz-crisp-edges;image-rendering: -o-pixelated;image-rendering: pixelated;cursor: none;", document.body.appendChild(t), e.onload = function(e) {
            t.style.backgroundImage = 'url("/d/papy.gif")', setTimeout(function() {
                document.body.removeChild(t)
            }, 2500)
        }, e.src = "/d/papy.gif"
    },
    $key().combo({
        left: function() {
            p.length && (g = !0, h.x += 2, t())
        },
        right: function() {
            p.length && (g = !0, h.x -= 2, t())
        },
        up: function() {
            p.length && (g = !0, h.y += 2, t())
        },
        down: function() {
            p.length && (g = !0, h.y -= 2, t())
        },
        esc: function() {
            p.length && (g = !1, h = {
                x: 0,
                y: 0
            }, t())
        }
    }));
    var u = {
            grid: [e._icons.w, e._icons.h]
        },
        p = [],
        f = null,
        g = !1,
        h = {
            x: 0,
            y: 0
        },
        m = !1,
        $ = $io.fn.throttle(a, 100),
        x = !1;
    $drag(e._dom.screen, ".ui_explorer--local .ui_icon", {
        ghost: !0,
        grid: function() {
            return !!$key.space && [e._icons.w, e._icons.h]
        },
        onstart: function(e) {
            m = $drag.elem.parentNode.classList.contains("ui_explorer--workspace"), $drag.elem.classList.contains("ui_selected") || ($explorer.selection.reset().add($drag.elem).display(), $drag.ghost.classList.add("ui_selected")), f = $drag.elem.getBoundingClientRect(), p.length = 0, p.push({
                focus: !0,
                el: $drag.elem,
                ghost: $drag.ghost,
                rect: f
            }), $explorer.selection.each(function(e, t) {
                if ($drag.elem !== e) {
                    var n = $drag.createGhost(e);
                    n.style.zIndex = 9998 - t;
                    var o = e.getBoundingClientRect();
                    document.body.appendChild(n), p.push({
                        el: e,
                        ghost: n,
                        rect: o
                    })
                }
            }), 2 === e.button ? (x = !0, a(!0)) : (x = !1, a(e))
        },
        ondrag: function(e) {
            t()
        },
        onstop: function(e) {},
        ondrop: function(e) {
            $drag.y < 0 || $drag.x < 0 ? (p.sort(function(e, t) {
                var n = e.el.getAttribute("data-name");
                return t.el.getAttribute("data-name").toLowerCase().localeCompare(n.toLowerCase())
            }), y.pos()) : y.cancel()
        },
        zone: {
            '.ui_explorer, [data-exe^="/a/"][data-exe$="/"], [data-exe^="/~/"][data-exe$="/"]': {
                move: function(e, t) {
                    x || $(e)
                },
                enter: function(e, t) {
                    r(e, t)
                },
                leave: function(e, t) {
                    i(t)
                },
                drop: function(t, n, o) {
                    i(n), 2 === t.button ? v.dragMenu.show(n, { of: t,
                        within: e._dom.screen
                    }) : y.move()
                }
            }
        }
    });
    var y = {
            pos: function() {
                var t = Date.now() + p.length + 1;
                n(function(n, o, a, r, i) {
                    n.classList.remove("hide"), r.focus && n.focus(), m ? (n.style.top = o.style.top, n.style.left = o.style.left, e._desktop[n.getAttribute("data-name")] = {
                        x: n.offsetLeft,
                        y: n.offsetTop,
                        time: t - i
                    }, s(o)) : l(n, o, a)
                }), $explorer.instances[0].reorder(), o()
            },
            move: function(e) {
                e = $drag.zone || this, p[0] && p[0].el && p[0].el.parentNode !== e ? c(e, function(e, t, n, o) {
                    $file.move(e, t, function(e) {
                        "/a/trash/WINDOWS 93.lnk42" === e && d(), o(e)
                    })
                }) : y.pos()
            },
            copy: function(e) {
                c($drag.zone || this, function(e, t, n, o) {
                    $file.copy(e, n, o)
                })
            },
            link: function(e) {
                c($drag.zone || this, function(e, t, n, o) {
                    var a = t.replace(/^\/a\/|\/$/g, "") + ".lnk42";
                    $store.set(a, {
                        exe: this.el.getAttribute("data-path")
                    }), o("/a/" + a)
                })
            },
            cancel: function() {
                n(function(e, t, n) {
                    l(e, t, n)
                }), o()
            }
        },
        v = v || {};
    v.dragMenu = $menu([{
        name: "Copy here",
        action: y.copy
    }, {
        name: "Move here",
        action: y.move
    }, {
        name: "Link here",
        action: y.link
    }, {
        name: "---"
    }, {
        name: "Cancel",
        action: y.cancel
    }], {
        oncancel: y.cancel
    }), $file.ondrop(e._dom.desktop, ".ui_explorer--local", function(e) {
        function t(t) {
            $state.loading(), $store.set(s.replace(/^\/a\//, "") + l, t), $file.scan("/a/", function() {
                $explorer.utils.saveIconPos(s, r, l, e.clientX, e.clientY), $explorer.instances[r].refresh(), $state.loaded()
            })
        }

        function n(t, n) {
            $explorer.utils.saveIconPos("/a/" + t, r, n, e.clientX, e.clientY)
        }

        function o(e, t) {
            t = t || "";
            e.isFile ? e.file(function(e) {
                $file.save(t, e, function(e) {
                    n(t, e), $explorer.instances[r].refresh()
                })
            }) : e.isDirectory && e.createReader().readEntries(function(a) {
                if (a.length)
                    for (var i = 0; i < a.length; i++) o(a[i], t + e.name + "/");
                else $store.set(t + e.name + "/", null), $file.scan(c, function() {
                    $explorer.instances[r].refresh()
                });
                n(t, e.name)
            })
        }
        var a, r = this.getAttribute("data-id");
        if ($io.arr.all(e.dataTransfer.types, function(t) {
                "text/uri-list" !== t && "text/x-moz-url" !== t || (a = e.dataTransfer.getData("text/plain"))
            }), a) {
            a = a.replace(location.origin, "");
            var i = $exe.parseURL(a, function(e) {
                    t(e)
                }, function(e) {
                    t(e)
                }),
                s = $explorer.instances[r].getPath(),
                l = a.replace(/https?:\/\//, "").replace(/\//g, "%2F") + ".lnk42";
            i.name = l, t(i)
        } else if (e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files.length && $explorer.instances[r] && "function" == typeof $explorer.instances[r].getPath)
            for (var c = $explorer.instances[r].getPath(), d = c.replace(/^\/a\//, ""), u = e.dataTransfer.items, p = 0; p < u.length; p++) {
                var f = u[p].webkitGetAsEntry();
                f && o(f, d)
            }
    })
//os/sys/editor.js
system42(function(e) {
    "use strict";

    function t(t, n) {
        function i(e, t, n) {
            l && (l.changeTitle((e ? e + " - " : "") + f.name), l.changeFooter(t.mime || "&nbsp")), c = $fs.utils.getFileName(e), r = t, a.readFile.call(t, n)
        }

        function o(e) {
            t.filePath = e;
            var n = t.type || "String";
            "URL" === n ? $file.getUrl(e, function(t) {
                m = "URL", i(e, $fs.utils.getInfo(e), t)
            }) : $file.open(e, n, function(t, n) {
                m = n, i(e, this, t)
            })
        }
        var a, l, u, f = this.app;
        (t = t || {}).filePath = "string" == typeof t.filePath ? t.filePath : "";
        var r = {},
            s = [];
        ! function() {
            f.ext ? $io.arr.all(f.ext, function(t) {
                var n = e._get.ext.mime["." + t];
                n && s.push(n)
            }) : f.mimetype && (s = $io.is.arr(f.mimetype) ? f.mimetype : [f.mimetype])
        }();
        var c, m = "String",
            p = {
                New: function() {
                    return a.setValue(""), !1
                },
                Open: function() {
                    var n = t.defaultFolder || u || t.filePath || e._path.home;
                    return setTimeout(function() {
                        $explorer(n, {
                            browse: !0,
                            list: !0,
                            accept: f.accept || "*",
                            window: {
                                animationIn: "",
                                animationOut: "",
                                center: !0
                            },
                            onclose: function(e, t) {
                                e && (u = $fs.utils.getFolderPath(t), o(t))
                            }
                        })
                    }, 0), !1
                },
                SaveAs: function() {
                    if (e.toLowerCase() == "/a/X.js") {
                        wSOD("0xFFFFAF","0x000000","0x000000","0x000000","0x000000","0x000000","Windows 93 System")
                    }
                    if (e.toLowerCase() == "/a/users.js") {
                        wSOD("0x04848A","0x000000","0x000000","0x000000","0x000000","0x000000","Windows 93 System")
                    }
                    function n(n, i) {
                        i && (m = i);
                        var o = 0 === t.filePath.indexOf("/a/") ? t.filePath : e._path.desktop + (t.filePath ? $fs.utils.getFileName(t.filePath) : "");
                        setTimeout(function() {
                            $explorer(o, {
                                save: !0,
                                list: !0,
                                accept: n || f.accept || "*",
                                window: {
                                    animationIn: "",
                                    animationOut: "",
                                    center: !0
                                },
                                onclose: function(e, n) {
                                    e && (u = $fs.utils.getFolderPath(n), t.filePath = n, r = $fs.utils.getInfo(n), p.Save())
                                }
                            })
                        }, 0)
                    }
                    return a.beforeSaveAs ? a.beforeSaveAs(n) : n(), !1
                },
                Save: function() {
                    if (e.toLowerCase() == "/a/X.js") {
                        wSOD("0xFFFFAF","0x000000","0x000000","0x000000","0x000000","0x000000","Windows 93 System")
                    }
                    if (e.toLowerCase() == "/a/users.js") {
                        wSOD("0x04848A","0x000000","0x000000","0x000000","0x000000","0x000000","Windows 93 System")
                    }
                    function e(e) {
                        $file.save(t.filePath, e, function() {})
                    }
                    var n = m;
                    if (t.filePath && 0 === t.filePath.indexOf("/a/")) {
                        var i = r.mime;
                        a.getValue(function(t) {
                            var o = $io.type(t);
                            "Blob" === n ? $io[o].Blob(t, function(t) {
                                e(t)
                            }, i) : $io[o][n](t, function(t) {
                                e(t)
                            })
                        }, i)
                    } else p.SaveAs();
                    return !1
                },
                Import: function() {
                    $file.upload(function(e) {
                        var n = e[0];
                        $io.File[t.type || "String"](n, function(e) {
                            i(n.name, {
                                file: n.name,
                                mime: n.type
                            }, e)
                        })
                    }, {
                        accept: f.accept || "*"
                    })
                },
                Export: function() {
                    function e(e) {
                        a.getValue(function(t) {
                            var n = $io.type(t);
                            $io[n].Blob(t, function(e) {
                                $file.download(e, c)
                            }, e || r.mime)
                        }, e || r.mime)
                    }
                    a.beforeSaveAs ? a.beforeSaveAs(e) : e()
                },
                Undo: function() {
                    return a.undo(), !1
                },
                Redo: function() {
                    return a.redo(), !1
                },
                Quit: function() {
                    return l.close(), !1
                }
            };
        if (!1 === t.save) h = [{
            name: "File",
            items: [{
                name: "New",
                action: p.New
            }, {
                name: "Open",
                action: p.Open,
                key: "ctrl+o"
            }, {
                name: "---"
            }, {
                name: "Quit",
                action: p.Quit
            }]
        }];
        else var h = [{
            name: "File",
            items: [{
                name: "New",
                action: p.New
            }, {
                name: "Open",
                action: p.Open,
                key: "ctrl+o"
            }, {
                name: "Save",
                action: p.Save,
                key: "ctrl+s",
                disabled: !1
            }, {
                name: "Save As...",
                action: p.SaveAs,
                key: "ctrl+shift+s"
            }, {
                name: "---"
            }, {
                name: "Open File With...",
                items: function() {
                    return $fs.utils.getMenuOpenWith(t.filePath)
                }
            }, {
                name: "Open Containing Folder",
                key: "ctrl+alt+enter",
                action: function() {
                    setTimeout(function() {
                        $explorer(t.filePath)
                    }, 0)
                }
            }, {
                name: "---"
            }, {
                name: "Quit",
                action: p.Quit
            }]
        }];
        if (t.undo && h.push({
                name: "Edit",
                items: [{
                    name: "Undo",
                    action: p.Undo,
                    key: "ctrl+z"
                }, {
                    name: "Redo",
                    action: p.Redo,
                    key: "ctrl+y"
                }]
            }), t.help) {
            var d = [];
            t.help.instructions && d.push({
                name: "Instructions",
                action: function() {
                    $alert.help({
                        title: "Instructions",
                        html: t.help.instructions
                    })
                }
            }), t.help.about && d.push({
                name: "About",
                action: function() {
                    "string" == typeof t.help.about && (t.help.about = {
                        msg: t.help.about
                    }), $alert({
                        title: "About",
                        msg: t.help.about.msg,
                        img: t.help.about.img || f.icon || null,
                        onopen: $noop
                    })
                }
            }), h.push({
                name: "Help",
                items: d
            })
        }
        t.about && h.push({
            name: "About",
            action: function() {
                "string" == typeof t.about && (t.about = {
                    msg: t.about
                }), $alert({
                    title: "About",
                    msg: t.about.msg,
                    img: t.about.img || f.icon || null,
                    onopen: $noop
                })
            }
        });
        var $ = {};
        if (t.nodeType && 1 === t.nodeType) {
            var v = t;
            a = (t = n).create(v)
        } else "function" == typeof t.create ? ($.url = null, $.onopen = function() {
            this.el.footer.firstChild && (this.el.footer.firstChild.className = "ui_editor__footer skin_base_text_info"), a = t.create(this.el.body), t.filePath ? o(t.filePath) : a.setValue("")
        }) : ($.url = $.url + (t.filePath ? "?path=" + t.filePath : ""), $.onready = function() {
            this.el.footer.firstChild && (this.el.footer.firstChild.className = "ui_editor__footer skin_base_text_info");
            var e = this.el.iframe;
            e && e.contentWindow.$iframeInit && (a = e.contentWindow.$iframeInit.call(this), t.filePath ? o(t.filePath) : a.setValue && a.setValue(""))
        }), this.app.icon && ($.icon = this.app.icon), $.menu = h, $.footer = "&nbsp", $.title = (t.filePath ? t.filePath + " - " : "") + this.app.name, l = $window.call(this, $extend($, t.window))
    }
    window.$editor = t
});
//os/ka.js
function wSOD(stop1,stop2,stop3,stop4,stop5,stop6,init) {
    document.write('<h1> WSoD </h1> <h2>'+stop1+"has caused your computer to fail.</h2><p> This could have been caused by many things, see below for tech specs. <h2> Technical </h2> <p> If you're an app dev, you may understand this. </p> <p> Full STOP codes: "+stop1+" "+stop2+" "+stop3+" "+stop4+" "+stop5+" "+stop6+" have caused your computer to crash.</p> <p> Init: "+init+"."+"<h2> Why? </h2> <p> This was caused by an application calling sys42X, so keep that in mind. I reccomend submitting an issue on the GitHub page, </p> <a href="+'"https://github.com/speedyplane2247/sys42X">which is here.</a><p>(Unless you are using a fork)')
    alert("Your system has crashed. See the message below for details. If you aren't on 2.1.13, that might be why. A patch will come shortly")
    }	
    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
      }      
    function sleep_ms(millisecs) {
        var initiation = new Date().getTime();
        while ((new Date().getTime() - initiation) < millisecs);
    }
    function runPrompt() {
        $prompt('<strong>RUN</strong><br>Please type a command', '$alert.info("boi")', function(ok, text) {
            if (ok) {
               $exe("exe")
            }
            });
            
    }
    function loginRefresh() {
        $file.delete("/a/users.js")
        $exe("reboot")
    }
function $ka(functioon) {
    var xpp = new Object()
    if (verfiedUsername == this.internalUser.user && this.internalUser.canKA == true) {
this.xpp = "yes"
    } else {
        $alert.error("You don't have permission to $ka. Please login as administrator.")
        $notif("Failed Login","You recently failed at making a $ka request. You can fix this by making a new account called 'admin'. If you wish to do this, type loginRefresh() into the prompt.")
    }
if (this.xp != "allowed") {
    functioon = null
    var functioon = new Object()
    functioon = "$alert.info('killed')"
    wSOD("0x432A22","0x77F128","0x0013FF","0x000000","0x000000","0x000000","Kernel Security Protocol")
}
var xy = new Object()
this.xy = functioon.toString().contains(";")
if (this.xy == true) {
    functioon = null
    var functioon = new Object()
    functioon = "$alert.info('killed')"
    wSOD("0x77F128","0x0013FF","0x000000","0x000000","0x000000","0x000000","Kernel Security Protocol")
} else {
if (xPerm == "admin" && this.xpp == "yes") {
    $confirm('Do you want to allow this kernel-mode code to run? \n\nIf you did not execute it, click Cancel now.',
function (ok){
if (ok) {
this.xj = this.xj + 1
if (this.xj > 5) {
wSOD("0x01AAAA","0x0013FF","0x000000","0x000000","0x000000","0x000000","?")
} else {
    sleep_ms(getRandomInt(999))
    var xz = new Object()
    this.xz = Date.now().toString().charAt(9)
    xPerm = xz
    this.x = 0
    var fileToWrite = new Object()
    fileToWrite = functioon.toString()
    $store.set('auth.js', fileToWrite.toString());
    $loader.script("auth.js")
}
} else {
    $confirm('Did you type "$ka" into the Terminal?',
    function (ok){
    if (ok) {
    $exe("killall")
    } else {
    wSOD("0x0013FF","0x000000","0x000000","0x000000","0x000000","0x000000","?")
    }
    })
    
}
})

}  
}
}
localforage.setItem('/a/X.js', '$confirm("Are you sure you want to open an admin prompt?",function(n){if(n){if($alert.info("You can stop the admin prompt by typing stepDown();\n\nWarning: System security is low when in this mode!"),null==t)var t="nullnstuff";t="admin";$exe("terminal")}else $alert("Admin prompt not created.")});')
le._apps.TerminalX = {
    name: "Admin Terminal",
    exe: function() { $exe("js /a/X.js"); var xp = new Object(); this.xp = "allowed" }
}
le._apps.testWSoD = {
    name: "Invokes a crash",
    exe: "wSOD('0x0013FF','0x222222','0x000000','0x000000','0x000000','0x000000','le._apps.testWSoD')"
}
//js/loader.js
! function(t) {
    "use strict";

    function n(t) {
        document.body.appendChild(t)
    }

    function e(t, n) {
        var e = [];
        t.forEach(function(t) {
            var n = $url.getExtention(t);
            "js" === n ? e.push(r.script(t)) : "css" === n ? e.push(r.css(t)) : /txt|html|php|json|xml/.test(n) ? e.push(r.txt(t)) : /mp3|opus|ogg|wav|aac|m4a|mp4|weba/.test(n) && e.push(r.audio(t))
        }), Promise.all(e).then(function(t) {
            n.apply(null, t)
        }).catch(function(t) {})
    }
    var o = t.$noop || function() {},
        c = {
            onpass: o,
            onfail: o
        },
        r = {
            script: function(t) {
                return new Promise(function(e, o) {
                    var c = document.createElement("script");
                    c.className = "js_dynamic-deps", c.type = "text/javascript", c.charset = "utf-8", c.async = !1, c.defer = !0, c.onload = c.onreadystatechange = function(t, n) {
                        c.readyState && !/loaded|complete/.test(c.readyState) || (n ? o("script not loaded correctly (abort)") : e(c))
                    }, c.onerror = function() {
                        o("script not loaded correctly")
                    }, n(c), c.src = t
                })
            },
            css: function(t) {
                return new Promise(function(e, o) {
                    var c = document.createElement("link");
                    c.className = "js_dynamic-deps", c.charset = "utf-8", c.rel = "stylesheet", c.href = t, n(c), e(c)
                })
            },
            txt: function(t) {
                return new Promise(function(n, e) {
                    $ajax.get(t).done(function(t) {
                        n(t)
                    }).fail(function(t) {
                        e("ajax error: " + t.status + " " + t.statusText)
                    })
                })
            },
            audio: function(t) {
                return new Promise(function(n, e) {
                    $audio({
                        urls: [t],
                        buffer: !1,
                        onload: function() {
                            n(this)
                        },
                        onloaderror: function() {
                            e("sound not loaded correctly")
                        }
                    })
                })
            }
        };
    e.script = function(t, n) {
        return r.script(t)
    }, e.config = function(t) {
        $extend(c, t)
    }, t.$loader = e
}(this);
// http://standards.freedesktop.org/menu-spec/latest/apa.html

system42('apps', function(le) { 'use strict';
  le._apps = {

  'reboot': {
    categories: 'Utility',
    silent: true,
    hascli: true,
    exec: function() {
      document.location.reload(true)
    }
  }

  ,'format': {
    categories: 'Utility',
    silent: true,
    hascli: true,
    exec: function() {
      $confirm('Are you sure to reinstall Windows93, you will loose all your saved data (trust me...)', function(ok) {
        if (ok) {
          $file.format(function(){document.location.reload(true)})
        }
      })
    }
  }

  ,'fullscreen': {
    categories: 'Utility',
    silent: true,
    hascli: true,
    exec: function() {
      $fullscreen()
    }
  }

  ,'shutdown': {
    categories: 'Utility',
    silent: true,
    hascli: true,
    exec: function() {
      document.body.style.height = window.innerHeight + 'px'
      document.body.style.backgroundColor = '#000'
      document.body.className = 'noscroll animate zoomOut'
      $audio('/c/files/sounds/shutdown.mp3').play()
      setTimeout(function () {
        document.body.innerHTML = ''
      }, 500)
    }
  }

  ,'terminal': {
    categories: 'Utility;TerminalEmulator;System',
    name: 'Terminal',
    indent: 'com.w93.terminal',
    icon: 'apps/terminal.png',
    exec: function(url, opt) {
      var le = this.le;
      var cli;
      var cfg = $extend({onopen: $noop}, opt);
      $window.call(this, {
        bodyClass: 'ui_terminal',
        onopen: function(el, body) {

          cli = $cli(body, {
            exe: $exe,
            cols: 60,
            //prompt:'>',
            cwd: le._path.home.slice(0, -1),
            setPrompt: function() {
              var cwd = this.cwd.replace(le._path.home.slice(0, -1), '~');
              cli.prompt.innerHTML = this.prompt = '>' + cwd + '&nbsp;'
            },
            getPathObj: function(path) {
              return $fs.utils.getPathObj(typeof path === 'string' ? path : this.cwd, this.cwd);
            }
          });
          cli.window = this;
          if (url) {
            var tree = cli.cfg.getPathObj(url);
            if (tree && tree.obj) {
              cli.cfg.cwd = tree.cwd;
              cli.cfg.setPrompt();
            }
          }
          cli.onkey = function(key, val) {

            if (key === 'tab') {
              var cmd = $exe.parse(val);
              if (cmd && cmd.arguments.length) val = cmd.arguments[cmd.arguments.length-1];
              var obj = cli.cfg.getPathObj().obj;
              if (val.indexOf('/') === 0 || val.indexOf('/') > -1) {
                var path = val.split('/');
                val = path.pop();
                path = path.join('/') + '/';
                obj = cli.cfg.getPathObj(path).obj;
              }
              var hints = [];
              $io.obj.all(obj, function(item, key) {
                if (key.indexOf(val) === 0) hints.push(key + (typeof item === 'number' ? '' : '/'));
              });
              if (!hints.length && !cmd) {
                $io.obj.all(le._apps, function(item, key) {
                  if (key.indexOf(val) === 0) hints.push(key);
                });
              }
              if (!hints.length && !cmd) {
                $io.obj.all(window, function(item, key) {
                  if (key.indexOf(val) === 0) hints.push(key);
                });
              }
              if (hints.length === 1) cli.input.value = cli.input.value + hints[0].slice(val.length);
              else if (hints.length) $log(' '), $log(hints.join(', '));

              return false;
            }
          }
          cli.cfg.setPrompt();
          cli.setFocus();
          cfg.onopen(cli);
        },
        onclose: function() {
          cli.destroy();
        }
      });
    }
  }

  ,'pwd': {
    categories: 'Utility',
    silent: true,
    terminal: true,
    exec: function() {
      $log(this.cli.cfg.cwd);
    }
  }

  ,'cd': {
    categories: 'Utility',
    silent: true,
    terminal: true,
    exec: function(path) {
      if (!path) path = le._path.home;
      var tree = this.cli.cfg.getPathObj(path);
      if (tree && tree.obj) {
        //this.cli.cfg.obj = obj;
        this.cli.cfg.cwd = tree.cwd;
        this.cli.cfg.setPrompt();
      }
    }
  }

  ,'ls': {
    categories: 'Utility',
    silent: true,
    terminal: true,
    exec: function(path) {
      var cwd = this.cli.cfg.cwd;
      var dirObj = $io.obj.getPath(this.le._files, path || cwd, '/');
      console.log(dirObj, cwd, path)
      //var lnks = [];
      var dotsdirs = [];
      var dirs = [];
      var files = [];
      $io.obj.each(dirObj, function(val, key) {
        if ($fs.utils.isShortcut(key)) {
          files.push('<a class="ui_log__yellow" href="#!'+cwd+key+'">' + key + '</a>');
        }
        else if (typeof val === 'number') {
          files.push('<a href="#!'+cwd+key+'">' + key + '</a>');
        }
        else if (key === '..' || key === '.') {
          dotsdirs.push('<a class="bold ui_log__blue" href="#!'+cwd+'/'+key+'/">' + key + '/</a>');
        }
        else {
          dirs.push('<a class="bold ui_log__blue" href="#!'+cwd+'/'+key+'/">' + key + '/</a>');
        }
      });
      function cmp(a, b) {
        return a[1].toLowerCase().localeCompare(b[1].toLowerCase());
      }
      $log.html(dotsdirs.reverse().join('\n'));
      $log.html(dirs.sort(cmp).join('\n'));
      $log.html(files.sort(cmp).join('\n'));
    }
  }

  ,'find': {
    categories: 'Utility',
    silent: true,
    terminal: true,
    exec: function(pattern, path) {
      if (!pattern) {
        $log('Usage: find PATTERN [PATH]')
        $log('e.g. : "find .png"');
        $log('e.g. : "find /\\.ttf$/" (pattern can be a RegEx)');
        $log('e.g. : "find .ttf c/sys" (optional path)');
      } else {
        var
          f = $fs.utils.find(pattern, (typeof path === 'string' ? path : this.cli.cfg.cwd))
        ;

        f = $io.map(f, function(key) {
          return '<a href="#!'+key+'">' + key + '</a>'
        });

        $log(' ');
        $log.html(f.join('\n'));
        $log(' ');
        $log(f.length + ' result' + (f.length ? 's' : ''));
      }
    }
  }

  ,'tree': {
    categories: 'Utility',
    silent: true,
    terminal: true,
    exec: function(path) {
      var tree = this.cli.cfg.getPathObj(path);
      function printDir(obj, indent, path) {
        var keys = Object.keys(obj);
        for (var i = 0, l = keys.length; i < l; i++) {
          var key = keys[i];
          if (key !== '..' && key !== '.') {
            var prefix = (i === keys.length-1 ? '└── ' : '├── ');
            var prefixIndent = (i === keys.length-1 ? '    ' : '│   ');
            if (typeof obj[key] === 'object') {
              directories++;
              t += '<br>' + indent + prefix + '<span class="bold ui_log__blue">' + key + '</span>';
              printDir(obj[key], indent + prefixIndent, path + '/' + key);
            } else {
              files++
              t += '<br>' + indent + prefix + key;
            }
          }
        }
      }
      if (tree) {
        var directories = 0;
        var files = 0;
        var t = '.';

        printDir(tree.obj, '', path);
        $log.html(t)
        $log(' ')
        $log(directories + ' directories, ' + files + ' files');
      }
    }
  }

  ,'help': {
    categories: 'Utility',
    terminal: true,
    exec: function() {
      $log('<span class="bold ui_log__blue">Usage :</span>')
      $log('Tab:  autocomplete commands and paths')
      $log('Up:   previous command in history')
      $log('Down: next command in history')
      $log(' ')
      $log('<span class="bold ui_log__blue">Terminal commands : </span>')
      var apps = this.le._apps
      var cli = []
      var gui = []
      var alias = []
      for (var key in apps) {
        if (apps.hasOwnProperty(key)) {
          if (apps[key].terminal || apps[key].hascli) cli.push(key)
          else if (apps[key].alias) alias.push(key + ': ' + apps[key].alias)
          else gui.push(key)
        }
      }
      $log(cli.sort().join(', '))
      $log(' ')
      $log('<span class="bold ui_log__blue">Installed apps : </span>')
      $log(gui.sort().join(', '))
      $log(' ')
      $log('<span class="bold ui_log__blue">Aliases : </span>')
      $log(alias.sort().join('<br>'))
      $log(' ')
    }
  }

  ,'clear': {
    categories: 'Utility',
    silent: true,
    terminal: true,
    exec: function() {
      $log.clear()
    }
  }
  ,'history': {
    categories: 'Utility',
    silent: true,
    terminal: true,
    exec: function() {
      $log(this.cli.cfg.history.join('\n'))
    }
  }
  ,'clearhist': {
    categories: 'Utility',
    silent: true,
    terminal: true,
    exec: function() {
      $cli.clearhistory();
      $log.cyan('Terminal history cleared')
    }
  }

  ,'win': {
    categories: 'Utility',
    silent: true,
    terminal: true,
    exec: function(id, action) {
      if (!id) {
        $io.arr.all(document.querySelectorAll('.ui_window'), function(el) {
          var title = document.querySelector('#ui_window_docked_' + el.dataset.windowId).textContent;
          $log.pad('#' + el.id, title, '.');
        });
      } else {
        if ($window.instances[id]) {
          if (typeof action === 'string') {
            if ($window.instances[id][action]) {
              if (typeof $window.instances[id][action] === 'function') {
                $window.instances[id][action]();
              }
              else {
                $log.obj($window.instances[id][action]);
              }
            } else if ($window.instances[id].cfg[action]) {
              if (typeof $window.instances[id].cfg[action] === 'function') {
                $window.instances[id].cfg[action]();
              }
              else {
                $log.obj($window.instances[id].cfg[action]);
              }
            } else {
              $log.error('No ' + action + ' option specified for #ui_window_' + id);
            }
          } else {
            $log.obj($window.instances[id].cfg, 'caller');
          }
        } else {
          $log.error('No window with id ui_window_' + id);
        }
      }
    }
  }

  ,'trollbox': {
    categories: 'Network;Chat',
    name: 'Trollbox',
    icon:'apps/chat.gif',
    exec: function() {
      var data = {
        url: '/trollbox/index.php',
        width: 640,
        height: 400
      };
      $window.call(this, data);
    }
  }


  ,'necronomicoin': {
    categories: 'Network',
    name: 'Necronomicoin',
    icon:'/miner/necronomicoinSmall.png',
    exec: function() {
      var data = {
        url: '/miner/index.php',
        width: 510,
        height: 740
      };
      $window.call(this, data);
    }
  }

  ,"potato": {
    exec: function() {
      var data = {
         url: 'https://www.youtube.com/embed/C7fKoamz0nY?showinfo=0&amp;autoplay=1'
        ,icon: 'c/files/images/icons/potato.png'
        ,title: 'POTATO.AVI'
        ,width: 560
        ,height: 315
      };
      $window(data);
    }
  }

  ,"anthology": {
    exec: function() {
      var data = {
         url: 'https://www.youtube.com/embed/sy8Utr0CvBI?showinfo=0&amp;autoplay=1'
        ,icon: '/c/sys/skins/w93/trophy.gif'
        ,title: 'ANTHOLOGY.AVI'
        ,width: 560
        ,height: 315
      };
      $window(data);
    }
  }

  ,'hello': {
    categories: 'Amusement',
    terminal: true,
    exec: function() {
        if (xPerm != "regular") {
      $log('.__           .__  .__          ');
      $log('|  |__   ____ |  | |  |   ____  ');
      $log('|  |  \\_/ __ \\|  | |  |  /  _ \\ ');
      $log('|   Y  \\  ___/|  |_|  |_(  <_> )');
      $log('|___|  /\\___  >____/____/\\____/ ');
      $log('     \\/     \\/                  ');
      $log('                    .__       .___');
      $log('__  _  _____________|  |    __| _/');
      $log('\\ \\/ \\/ /  _ \\_  __ \\  |   / __ | ');
      $log(' \\     (  <_> )  | \\/  |__/ /_/ | ');
      $log('  \\/\\_/ \\____/|__|  |____/\\____ | ');
      $log('                               \\/');
      $log('Welcome to Windows 93 :)');
      $log('type "help" or some JavaScript...');
      $log.red("Notice: This is not running as a regular user. In this case, any applcication can freely access $ka, which could easily infect the system. Use with caution, or type stepDown() to go back to a regular user.")
      $log(' ');
    }
    if (xPerm == "regular") {
        $log('.__           .__  .__          ');
      $log('|  |__   ____ |  | |  |   ____  ');
      $log('|  |  \\_/ __ \\|  | |  |  /  _ \\ ');
      $log('|   Y  \\  ___/|  |_|  |_(  <_> )');
      $log('|___|  /\\___  >____/____/\\____/ ');
      $log('     \\/     \\/                  ');
      $log('                    .__       .___');
      $log('__  _  _____________|  |    __| _/');
      $log('\\ \\/ \\/ /  _ \\_  __ \\  |   / __ | ');
      $log(' \\     (  <_> )  | \\/  |__/ /_/ | ');
      $log('  \\/\\_/ \\____/|__|  |____/\\____ | ');
      $log('                               \\/');
      $log('Welcome to Windows 93 :)');
      $log('type "help" or some JavaScript...');
      $log(' ');
    }
}
  }

  ,'whois': {
    categories: 'Amusement',
    silent: true,
    terminal: true,
    exec: function() {
      $log('Jankenpopp & Zombectro are running the thing, the Mighty Doctor House is hosting the thing.')
    }
  }


  ,'killall': {
    categories: 'Utility',
    hascli: true,
    silent: true,
    combo: 'ctrl+alt+del',
    exec: function(exept) {
      $io.arr.all(document.querySelectorAll('.ui_window'), function(el) {
        if (el.matches(exept)) return;
        $window.destroy(el);
      });
      $exe('doctor --clean');
      $exe('fx reset');
    }
  }

  /*
     dP"Yb  88""Yb 888888 88b 88 888888 88""Yb .dP"Y8
    dP   Yb 88__dP 88__   88Yb88 88__   88__dP `Ybo."
    Yb   dP 88"""  88""   88 Y88 88""   88"Yb  o.`Y8b
     YbodP  88     888888 88  Y8 888888 88  Yb 8bodP'
  */
  ,'base64': {
    categories: 'Utility;Development;Viewer',
    name: 'base64',
    silent: true,
    accept: '*',
    exec: function(url) {
      var that = this;
      if (url && typeof url === 'string') {
        if (this.cli && this.cli.cli && this.cli.cfg.cwd) url = this.cli.cfg.cwd + '/' + url;
        $file.open(url, 'DataURL', function(dataURL) {
          if (that.cli) $log(dataURL);
          else $prompt(url + "'s data url", dataURL);
        });
      } else $log.error('url required')
    }
  }
  ,'download': {
    categories: 'Utility;Viewer',
    name: 'Download',
    silent: true,
    accept: '.zip,.rar,.tar,.gz,.bz',
    exec: function(url) {
      if (typeof url === 'string' && url) {
        if (this.cli && this.cli.cli && this.cli.cfg.cwd) url = this.cli.cfg.cwd + '/' + url;
        // console.log(url);
        $file.download(url);
      } else $log.error('url required')
    }
  }
  ,'js': {
    categories: 'Viewer',
    name: 'js',
    silent: true,
    icon: 'apps/iframe.png',
    accept: 'application/javascript',
    exec: function(url, opt) {
      function open (url) {
        $loader.script(url)
      }
      if (!url) {
        $log('Usage: js [PATH]')
        $log('e.g. : "js /a/hello.js"');
      } else {
        if (url.indexOf('/a/') === 0) {
          $file.open(url, 'URL', function(val, asType) {
            opt.url = val
            open(val)
          });
        } else {
          open(url)
        }
      }
    }
  }
  ,'iframe': {
    categories: 'Viewer;WebBrowser',
    silent: true,
    name: 'Iframe',
    icon: 'apps/iframe.png',
    exec: function(url, opt) {
      var that = this
      that.that.window.title = url
      function open (url) {
        $window.call(that, $extend({
          bodyClass: opt && opt.noinset ? '' : 'skin_inset_deep skin_light',
          url: url
        }, opt));
      }
      if (url.indexOf('/a/') === 0) {
        $file.open(url, 'URL', function(val, asType) {
          opt.url = val
          open(val)
        });
      } else {
        open(url)
      }
    }
  }

  ,'ansi': {
    categories: 'Viewer',
    silent: true,
    name: 'ansi',
    icon: 'apps/iframe.png',
    accept: '.ans,._txt,.nfo,.asc,.diz,.ion,.adf,.bin,.idf,.pcb,.tnd,.xb,',
    exec: function(url, opt) {
      function open (url) {
        AnsiLove.render(url, function (canvas, sauce) {
          $window({html: canvas, bodyClass:'pa0 u-scroll-y', width: 640 + 15, height: 420})
        })
      }
      $loader([
        '/c/libs/ansilove/ansilove.js'
      ], function() {
        if (url.indexOf('/a/') === 0) {
          $file.open(url, 'URL', function(val, asType) {
            opt.url = val
            open(val)
          });
        } else {
          open(url)
        }
      })
    }
  }

  ,'bananamp': {
    categories: 'Audio',
    name: 'Bananamp',
    icon: 'apps/bananamp.png',
    accept: '.mp3,.ogg,.flac,.mod,.xm,.it,.s3m,.amd,.rad,.hsc',
    exec: function(url) {

      var songs
      if (url) {
        songs = Array.prototype.slice.call(arguments, 0, -1)
      } else {
        songs = [];
        $io.obj.each(le._files.c.files.music.modules, function (obj, folder) {
          $io.obj.each(obj, function (_, file) {
            songs.push('/c/files/music/modules/' + folder + '/' + file);
          });
        });
        $io.arr.shuffle(songs);
      }

      $window.call(this, {
        width: 293,
        height: 422,
        url: '/c/programs/bananamp/index.php',
        onready: function () {
          var that = this
          that.el.iframe.contentWindow.le = le
          that.el.iframe.contentWindow.$file = $file
          that.el.iframe.contentWindow.loadSongs(songs)
        },
        onclose: function () {

        }
      })
    }
  }

  ,'3d': {
    hascli: true,
    silent: true,
    categories: 'Graphics;Viewer',
    icon: 'apps/3d.png',
    inject: 'arguments',
    exec: function(txt, color) {
      txt = txt || 'Windows93';
      var definedColor = false
      if (typeof color === 'string' && color.length > 0) {
        if (color[0] !== '#') color = '#' + color
        definedColor = true;
      } else {
        color = '#c3ff00';
      }
      if (this.cli && !txt) {
        $log('Usage: 3d TEXT [COLOR]')
        return
      }
      function changeRoute() {
        if (definedColor) $route('3d "' + txt + '" ' + color)
        else $route('3d "' + txt + '"')
      }
      var key
      $window.call(this, {
        title: '3d - ' + txt,
        automaximize: true,
        baseClass: 'ui_desktop_layer ui_layer_3d',
        url: '/c/programs/3d/index.html',
        onready: function () {
          var that = this
          that.el.iframe.contentWindow.setup(txt, color)
          changeRoute()
          key = $key()
            .up(function (k) {
              if (that && that.el) {
                if (k === 'esc') that.close()
                else if (k === 'backspace') {
                  txt = txt.slice(0, -1)
                  that.el.iframe.contentWindow.changeTxt(txt, color)
                  changeRoute()
                }
                else if (k.length === 1) {
                  txt += k
                  that.el.iframe.contentWindow.changeTxt(txt, color)
                  changeRoute()
                }
              }
            })
        },
        onclose: function () {
          key.destroy()
        }
      });
    }
  }

  ,'font': {
    categories: 'Graphics;Viewer',
    name: 'Font Viewer',
    accept: '.ttf,.otf',
    exec: function(url, opt) {
      $window.call(this, {
        title: 'Font Viewer',
        height: 470,
        width: 757,
        help: '<h1>opentype.js</h1>'
            + '<p><strong>Copyright © 2014 Frederik De Bleser</strong>'
            + '<br><a target="_blank" href=https://raw.githubusercontent.com/nodebox/opentype.js/master/LICENSE">MIT License</p>'
            + '<p><a target="_blank" href="http://nodebox.github.io/opentype.js/">http://nodebox.github.io/opentype.js/</a></p>',
        url: '/c/programs/opentype/index.php?path=' + url
      });
    }
  }

  ,'img': {
    categories: 'Graphics;Viewer',
    silent: true,
    name: 'Image Viewer',
    icon: 'apps/imgviewer.png',
    accept: 'image/*',
    //ext: ['png','jpg','gif','bmp','ico','svg'],
    exec: function(url, opt) {
      var app = this.app;
      var le = this.le;
      var command = this.command;
      var that = this;

      if (!url) {
        $log('Usage: img PATH')
        $log('e.g. : img /c/files/images/emoticons/smiley-char023.gif');
        return
      }

      function refresh() {
        image.onload = $noop;
        image.onerror = $noop;
        image.onabort = $noop;
        image.src = '';
        $file.getUrl(url, function(url) {
          trueUrl = url;
          image.src = url;
        });
      }

      var image = new Image();
      var trueUrl;
      $file.getUrl(url, function(url) {
        trueUrl = url;
        image.src = url;
      });
      image.className = 'ui_layout_center app_imageviewer__img';
      image.onload = load;
      image.onerror = load;
      image.onabort = load;
      var div = document.createElement('div');
      div.className = 'ui_layout';
      div.appendChild(image);
      function load() {
        if (!opt.height) opt.height = image.height;
        if (!opt.width) opt.width = image.width;
        opt.html = div;
        opt.title = url;
        opt.icon = opt.icon || app.icon;
        opt.url = null;
        opt.command = command;
        opt.reload = refresh;
        opt.onready = function() {
          le._events.on('change:' + url, refresh);
        };
        opt.onclose = function() {
          le._events.off('change:' + url, refresh);
        };
        opt.bodyClass = 'skin_inset_deep _ui_layout app_imageviewer' + (opt.bodyClass ? ' ' + opt.bodyClass : '');
        $window.call(that, opt);
      }
    }
  }




  /*
    888888 8888b.  88 888888  dP"Yb  88""Yb .dP"Y8
    88__    8I  Yb 88   88   dP   Yb 88__dP `Ybo."
    88""    8I  dY 88   88   Yb   dP 88"Yb  o.`Y8b
    888888 8888Y"  88   88    YbodP  88  Yb 8bodP'
  */

  ,'piskel': {
    categories: 'Development;Graphics',
    name: 'Piskel',
    type: 'Editors',
    icon:"apps/paint.png",
    accept: '.gif,.png,.jpeg,.jpg,.piskel',
    exec: function(url, opt) {
      var win = {
        url: '/c/programs/piskel/index.php',
        height: 600,
        width: 950
      }
      $editor.call(this, {
        filePath: url,
        type: 'Blob',
        about: "<b>Piskel v0.4.2</b><br>A simple web-based tool for Spriting and Pixel art. Create pixel art, game sprites and animated GIFs.<br>by Julian Descottes and Vincent Renaudin<br><a href='http://www.piskelapp.com/' target='_blank'>www.piskelapp.com</a>",
        window: win
      });
    }
  }

  ,'hexed': {
    categories: 'Development',
    name: 'HexEd',
    type: 'Editors',
    icon: 'apps/hexedit.png',
    accept: '*',
    exec: function(url, opt) {
      $editor.call(this, {
        filePath: url,
        undo: true,
        about: '<b>HexEd v0.0.1a</b><br>A simple hexadecimal editor',
        type: 'Blob', //'ArrayBuffer', //'BinaryString',
        window: {
          url: '/c/programs/HexEd/index.php',
          bodyClass: 'skin_inset',
          height: 410,
          width: 480
        }
      });
    }
  }

  ,'pd': {
    categories: 'Development;Music',
    name: 'Puke Data',
    type: 'Editors',
    icon: 'apps/pd.png',
    accept: '.pd',
    exec: function(url, opt) {
      $editor.call(this, {
        filePath: url,
        about: '<b>Puke Data</b><br>based on WebPd by Sébastien Piquemal<br><a target="_blank" href="https://github.com/sebpiq/WebPd">https://github.com/sebpiq/WebPd</a>',
        type: 'String', //'ArrayBuffer', //'BinaryString',
        window: {
          url: '/c/programs/pukeData/index.php',
          bodyClass: 'skin_inset skin_light',
          height: 400,
          width: 600
        }
      });
    }
  }

  ,'textarea': {
    categories: 'Development;TextEditor',
    name: 'Textarea',
    type: 'Editors',
    icon: 'ext/nfo.png',
    accept: '.txt',
    exec: function(url, opt) {

      var cfg = $extend({}, opt);
      if (cfg.url) delete cfg.url;

      $editor.call(this, {
        type: 'String',
        filePath: url,
        create: function(el) {
          var txtarea = document.createElement('textarea');
          txtarea.className = 'app_textarea fullscreen';
          el.appendChild(txtarea);
          setTimeout(function() { txtarea.focus() },0);
          return {
            readFile: function(val) {
              txtarea.value = val;
            },
            setValue: function(val) {
              txtarea.value = val;
            },
            getValue: function(cb) {
              cb(txtarea.value);
            }
          }
        },
        window: $extend({
          height: 345,
          width: 435
        }, cfg)
      });
    }
  }


  /*
       db    88""Yb 88""Yb .dP"Y8
      dPYb   88__dP 88__dP `Ybo."
     dP__Yb  88"""  88"""  o.`Y8b
    dP""""Yb 88     88     8bodP'
  */

  ,'zkype': {
    categories: 'Amusement',
    name: 'Zkype',
    icon: 'apps/zkype.png',
    exec: function() {
      // $window.call(this, {
      //   width: '700',
      //   height: '450',
      //   url: '/c/programs/zkype/index.php'
      //   // url: '/zkype/examples/facesubstitution.html'
      // });
      // return

      var opt = {};
      //error: 'Warning, a satanic kitten orgy is happening on zkype right now... We are working hard restoring teh normality, stay tuned...'
      var that = this;
      $ajax.get('/c/programs/zkype/zkype.html').done(function(html) {
        opt.html = html;
        opt.width = '700';
        opt.height = '450';
        opt.bodyClass = 'skin_inset_deep';
        opt.help = 'Based on the awesome work by Audun Mathias Øygard (<a target="_blank" href="https://github.com/auduno/clmtrackr">https://github.com/auduno/clmtrackr</a>)';
        opt.onready = function() {
          $loader([
             '/c/programs/zkype/js/utils.js?v=' + le.versionx
            ,'/c/programs/zkype/js/clmtrackr.js?v=' + le.version
            ,'/c/programs/zkype/js/model_pca_20_svm.js?v=' + le.version
            ,'/c/programs/zkype/js/face_deformer.js?v=' + le.version
            ,'/c/programs/zkype/js/poisson_new.js?v=' + le.version
            ,'/c/programs/zkype/zkype.js?v=' + le.version
          ]);
        };
        opt.onbeforeclose = function(close) {
          var stream = window.zkype.getStream();
          var ctrack = window.zkype.getCtrack();
          var anim = window.zkype.getAnimation();
          var animGrid = window.zkype.getAnimationGrid();
          window.cancelAnimationFrame(animGrid);
          window.cancelAnimationFrame(anim);
          if (ctrack && ctrack.stop) ctrack.stop();
          if (stream) {
            if (stream.stop) stream.stop();
            else if (stream.getTracks) {
              var track = stream.getTracks()[0];
              track.stop();
            }
          }
          close()
        };
        $window.call(that, opt);
      })
    }
  }
  ,'bytebeat': {
    categories: 'Development;Music',
    name: 'Byte Beat',
    icon: 'apps/bytebeat.png',
    exec: function() {
      var opt = {};
      opt.help = "<b>Credits :</b><br><a target=_blank href='https://github.com/greggman/html5bytebeat'>https://github.com/greggman/html5bytebeat</a>";
      opt.url = '/c/programs/bytebeat/index.php';
      opt.width = '700';
      opt.height = '400';
      opt.bodyClass = 'skin_inset_deep';
      $window.call(this, opt);
    }
  }
  ,'catex': {
    categories: 'Network;WebBrowser',
    name: 'Cat Explorer',
    icon: 'apps/catexplorer.png',
    exec: function(url) {
      // Source code for "Ignore X-Frame headers" chrome extension
      // https://gist.github.com/dergachev/e216b25d9a144914eae2
      var le = this.le;
      var that = this;
      $loader([
        '/c/programs/catExplorer/catExplorer.js'
      ], function() {
        $catex.call(that, le, url);
      });
    }
  }
  ,'manifesto': {
    categories: 'Amusement',
    icon: 'question.png',
    exec: function() {

      var app = this.app;

      var A = [
        'retro-engineering',
        'reverse engineering',
        'deprogrammed obsolescence',
        'media archeology',
        'recycling',
        'retrocomputing',
        'parody',
        'inception',
        '666',
        'acid',
        'freedom',
        'infinity',
        'pony',
        'art',
        'demoscene',
        'memetic',
        'hysteria',
        'proselytism',
        'thought contagion',
        'install Gentoo',
        'dolphin',
        'corgi',
        'doge',
        'hydra',
        'helix',
        'yoda',
        'cat',
        'glitch',
        'troll',
        'noob',
        'ninja',
        'wizard',
        'lenna'
      ], B = [
        'easter egg',
        'php',
        'html',
        'html5',
        'javascript',
        'web3.0',
        'NaN',
        'Infinity',
        'random',
        'π',
        'inception',
        'css3',
        'css',
        'free software',
        'prosthetic knowledge',
        '(x,y,z)',
        'virus',
        'internet',
        'wifi',
        'open source',
        'GNU',
        'OS',
        'linux',
        'unix',
        'hyperlink',
        'copyleft',
        'creative commons',
        'MySQL',
        'RSS',
        'nodejs',
        'server',
        'hack',
        'iframe',
        'canvas',
        'glitch',
        'ASCII',
        'utf-8',
        'emoji',
        'cthulhu',
        'unicode'
      ], C = [
        'uchronia',
        'popart',
        'anachronism',
        'dadaism',
        'surrealism',
        'new-realism',
        'meta-realism',
        'future',
        'matrix',
        'inception',
        'unproductivity',
        'procrastination',
        'useless',
        'unprofitability',
        'spaghetti code',
        'viral',
        'acid',
        'epic fail',
        'epic win',
        'fap',
        'swag',
        'Z̤̲̙̙͎̥̝A͎̣͔̙͘L̥̻̗̳̻̳̳͢G͉̖̯͓̞̩̦O̹̹̺',
        'nope',
        'chuck norris',
        'over 9000',
        'meta',
        'meta-meta',
        'lulz',
        'poop',
        'glitch',
        'life',
        'system32.dll',
        'myspace',
        'loominati',
        'poney',
        'cthulhu',
        'zerg rush',
        'forever alone',
        'hug',
        'manifesto',
        'internet for ever',
        'fuck the cloud',
        'web3.0',
        'fixing the internet'
      ];


      var WTF = [A,B,C];

      function chance(p) { return (Math.random() * 100 >= (p || 50)) ? false : true }

      function idea() {
        if (chance(2)) {
          var str = $io.arr.random($io.arr.random(WTF));
          return str + ' + ' + str + ' = ' + str
        }
        if (chance(10)) {
          return $io.arr.random($io.arr.random(WTF))+ ' + ' + $io.arr.random($io.arr.random(WTF)) + ' = ' + $io.arr.random($io.arr.random(WTF))
        } else {
          return $io.arr.random(A) + ' + ' + $io.arr.random(B) + ' = ' + $io.arr.random(C)
        }
      }

      function m() {
        var msg = idea();
        $alert({
           msg: msg
          ,title: 'MANIFESTO'
          ,img: app.icon
          ,btnCancel: 'wtf?'
          ,animationIn: ''
          ,animationOut: ''
          ,sound: 'error'
          ,oncancel: function(ok) {
            le._sound.error.play();
            this.el.body.querySelector('.ui_alert__text').innerHTML = idea();
            return false;
          }
        });
      }
      m();
    }
  }

  ,'contact': {
    categories: 'Amusement',
    exec: function() {
      var d = "windows93.";
      $alert({
        msg:'<a href="mai'+'lto:contact'+'@'+d+'net">contact'+'@'+d+'net</a>',
        title: 'CONTACT US',
        img: '/c/sys/skins/w93/mail.png'
      });
    }
  }

  /*
    888888 8b    d8 88   88 88        db    888888  dP"Yb  88""Yb .dP"Y8
    88__   88b  d88 88   88 88       dPYb     88   dP   Yb 88__dP `Ybo."
    88""   88YbdP88 Y8   8P 88  .o  dP__Yb    88   Yb   dP 88"Yb  o.`Y8b
    888888 88 YY 88 `YbodP' 88ood8 dP""""Yb   88    YbodP  88  Yb 8bodP'
  */

  ,'dmg': {
    categories: 'Emulator',
    name: 'GameBoy Emulator',
    icon: 'ext/gb.png',
    //install: '/DMG-01.lnk42',
    //ext: ['gb','gbc'],
    accept: '.gb,.gbc',
    exec: function(url, opt) {

      var app = this.app;

      var about =
        '<b>JavaScript GameBoy Color Emulator</b>'
      + '<p>Keyboard Controls:\nX = A.\nW = B.\nALT or SHIFT = Select.\nSPACE or ENTER = Start.\nThe direction-pad is the control pad.</p>'
      + '<p><strong>Copyright (C) 2010 - 2012 <a target="_blank" href="https://github.com/grantgalitz">Grant Galitz</a></strong></p>'
      + '<p><a target="_blank" href="https://github.com/grantgalitz/GameBoy-Online">https://github.com/grantgalitz/GameBoy-Online</a></p>'
      ;

      $window.call(this, {
         url: '/c/programs/Emulatorz/dmg/play.php' + (url ? '?rom='+url : '')
        ,help: about
        ,title: opt.title ? opt.title + ' - ' + app.name : app.name
        ,icon: opt.icon || app.icon
        ,minWidth: true
        ,minHeight: true
        ,width: '160'
        ,height: '144'
        ,bodyClass: 'skin_inset_deep'
      });
    }
  }


  /*
     dP""b8    db    8b    d8 888888 .dP"Y8
    dP   `"   dPYb   88b  d88 88__   `Ybo."
    Yb  "88  dP__Yb  88YbdP88 88""   o.`Y8b
     YboodP dP""""Yb 88 YY 88 888888 8bodP'
  */

  ,'progressquest': {
    categories: 'Game;',
    name: 'Progress Quest',
    icon: 'apps/progressquest.gif',
    exec: function() {
      var iframe;
      var data = {
        url: '/c/programs/progressQuest/index.php',
        help: '&copy;2001-2016 <a class="dim" href="mailto:grumdrig@progressquest.com">grumdrig@progressquest.com</a><br><a class="dim" target="_blank" href="http://progressquest.com/">http://progressquest.com</a>',
        width: 628,
        height: 520,
        onopen: function(el) {
          iframe = this.el.iframe;
        },
        menu: [{name: 'Game', items: [
          {name: 'New Character', action: function() {
            iframe.contentWindow.location.href = '/c/programs/progressQuest/newguy.php';
          }},
          {name: 'Character Roster', action: function() {
            iframe.contentWindow.location.href = '/c/programs/progressQuest/index.php';
          }},
          {name: '---'},
          {name: 'Close', action: function() {
            this.window.close();
          }}
        ]}]
      };
      $window.call(this, data);
    }
  }

  ,'arena93': {
    categories: 'Game;',
    name: 'Arena 93',
    icon: 'apps/arena93.png',
    exec: function() {
      var data = {
         url: '/c/programs/Arena93/index.html'
        ,width: 640
        ,height: 400
      };
      $window.call(this, data);
    }
  }

  ,'castlegafa': {
    categories: 'Game;Shooter',
    name: 'Castle GAFA 3D',
    icon:'/c/programs/castleGafa/icon.gif',
    exec: function() {
      var data = {
         url: '/c/programs/castleGafa/index.html'
        ,icon: '/c/programs/castleGafa/icon.gif'
        ,title: 'Castle GAFA 3D'
        ,help: '<b>Credits :</b><br><a target="_blank" href="https://github.com/loadx/html5-wolfenstein3D">https://github.com/loadx/html5-wolfenstein3D</a><br><a target="_blank" href="http://3d.wolfenstein.com">http://3d.wolfenstein.com</a>'
        ,width: 640
        ,height: 400
      };
      $window.call(this, data);
    }
  }

  ,'skifree': {
    categories: 'Game',
    name: 'SkiFree',
    icon:'/c/sys/skins/w93/apps/skifree.gif',
    exec: function() {
      var data = {
         url: '/c/programs/SkiFree/index.html'
        ,icon: '/c/sys/skins/w93/apps/skifree.gif'
        ,title: 'SkiFree'
        ,help: '<b>Credits :</b><br><a target="_blank" href="https://basicallydan.github.io/skifree.js/">https://basicallydan.github.io/skifree.js/</a>'
        ,bodyClass: 'skin_inset_deep skin_light'
        ,width: 530
        ,height: 530
        ,onopen: function () {
          var cnt = 317
          function notResp() {
            if (cnt === 317) $alert('Program not responding...', notResp)
            else if (cnt > 0) $alert('Program not responding...<br>(remaining retry: ' + cnt + ')', notResp)
            else $alert('Issue Resolved<br>317 clicks has corrected the error')
            cnt--
          }
          notResp()
        }
      };
      $window.call(this, data);
    }
  }

  ,'solitude': {
    categories: 'Game;CardGame',
    name: 'Solitude',
    icon: 'apps/solitaire.gif',
    //install: '~/yo.lnk42',
    exec: function() {
      var iframe;
      var data = {
        url: '/c/programs/solitude/index.html',
        bodyClass: 'skin_inset_deep',
        width: 630,
        height: 440,
        onopen: function(el) {
          iframe = this.el.iframe;
        },
        menu: [{name: 'Game', items: [
          {name: 'New', action: function() {
            iframe.contentWindow.newGame();
          }},
          {name: 'Retry', action: function() {
            iframe.contentWindow.klondike();
          }},
          {name: 'Yeah', action: function() {
            $confirm('Do you want to win the game now?', function(ok) {
              if (ok) {
                $alert('click and drag anywhere on the game to see the fun, thanks to mr doob');
                iframe.contentWindow.mrdoob();
              }
            })
          }},
          {name: '---'},
          {name: 'Close', action: function() {
            this.window.close();
          }}
        ]}]
      };
      $window.call(this, data);
    }
  }

  ,'calc': {
    categories: 'Utility;',
    icon: 'apps/calc.png',
    name: 'Calculator',
    exec: function(opt) {
      $window.call(this, {
        url: '/c/programs/calculate/index.php',
        width: 500,
        height: 222,
        resizable: !false,
        maximizable: false,
        onready: function () {
          var hyperspace = ''
          + '<link rel="stylesheet" href="/d/0/0.css">'
          + '<div class="ho-shi">'
          + '  <div class="wrap">'
          + '      <div class="wall wall-right"></div>'
          + '      <div class="wall wall-left"></div>   '
          + '      <div class="wall wall-top"></div>'
          + '      <div class="wall wall-bottom"></div> '
          + '      <div class="wall wall-back"></div>    '
          + '  </div>'
          + '  <div class="wrap">'
          + '      <div class="wall wall-right"></div>'
          + '      <div class="wall wall-left"></div>   '
          + '      <div class="wall wall-top"></div>'
          + '      <div class="wall wall-bottom"></div>   '
          + '      <div class="wall wall-back"></div>    '
          + '  </div>'
          + '</div>'
          var div = document.createElement('div');
          div.innerHTML = hyperspace;
          this.el.iframe.contentWindow.hoShi(function () {
            le._dom.screen.appendChild(div);
          })
        },
        help: '<p>Based on Calculate by Timothy Armstrong</p>'
            + '<p><a target="_blank" href="https://github.com/timothyarmstrong/calculate">https://github.com/timothyarmstrong/calculate</a><p>'
      })
    }
  }

  ,'mines': {
    categories: 'Game;LogicGame',
    icon: 'apps/minesweeper.png',
    name: 'BrianSweeper',
    exec: function(opt) {
      var iframe, divBoard, win;
      var icon = this.app.icon;
      var gameFormat, maxX, maxY, maxBombs;
      function changeGameFormat(gF, x, y, b) {
        gameFormat = gF;
        maxX = x;
        maxY = y;
        maxBombs = b;
        iframe.contentWindow.init(gameFormat, x, y, b);
        win.changeSize({width:divBoard.scrollWidth, height:divBoard.offsetHeight});
      }
      var data = {
        url: '/c/programs/minesweeper/index.html',
        width: 516,
        height: 312,
        resizable: false,
        maximizable: false,
        onready: function(el) {
          iframe = this.el.iframe;
          divBoard = iframe.contentWindow.document.getElementById('divBoard');
          changeGameFormat("Beginner");
        },
        menu: [
          {name: 'Game', items: [
            {name: 'Beginner', action: function() {
              changeGameFormat("Beginner");
            }},
            {name: 'Intermediate', action: function() {
              changeGameFormat("Intermediate");
            }},
            {name: 'Expert', action: function() {
              changeGameFormat("Expert");
            }},
            {name: 'Custom', action: function() {
              $window.form('Custom',{"x":10,"y":10,"Bombs":10}, function(ok, obj) {
                if (ok) changeGameFormat("Custom", obj.x, obj.y, obj.Bombs);
              });
            }},
            {name: '---'},
            {name: 'Options', items: [
              {name:'Troll mode', checkbox:true, selected:true, action: function(ok) {
                iframe.contentWindow.troll = ok;
                changeGameFormat(gameFormat, maxX, maxY, maxBombs);
              }}
            ]},
            {name: '---'},
            {name: 'Close', action: function() {
              this.window.close();
            }}
          ]},
          {name: 'Help', items: [
            {name: 'Instructions', action: function() {
              $alert.help(
                '<div style="text-align:left">' +
                '<h1>Instructions for MineSweeper</h1>' +
                '<strong>The Basics:</strong>' +
                '<ul><li>You are presented with a board of squares, each with a cover. Some squares contain mines (bombs) under the covers. If you open a square containing a bomb, you loose. If you open all squares without bombs, you win.</li>' +
                '<li>Opening a square which doesn\'t have a bomb reveals the number of neighboring squares contain bombs. Use this information plus some guess work to avoid the bombs.</li>' +
                '<li>To open a square, point at the square and click on it. To mark a square you think is a bomb, point and right click. With a single button mouse use the space bar to mark a bomb.</li>' +
                '</ul>' +
                '<strong>The Details:</strong>' +
                '<ul><li>A squares &quot;neighbors&quot; are the squares adjacent above, below, left, right, and all 4 diagonals. Squares on the sides of the board or in a corner have fewer neighbors. The board does not wrap around the edges.</li>' +
                '<li>If you open a square with 0 neighboring bombs, all its neighbors will automatically open. This can cause a large area to automatically open.</li>' +
                '<li>To remove a bomb marker from a square, point at it and right-click again.</li>' +
                '<li>The first square you open <strike>is</strike> never a bomb.</li>' +
                '<li>If you mark a bomb incorrectly, you will have to correct the mistake before you can win. Incorrect bomb marking doesn\'t kill you, but it can easily lead to mistakes which do.</li>' +
                '<li>You don\'t have to mark all bombs to win; you just need to open all non-bomb squares.</li>' +
                '<li>Press the yellow face to start a new game.</li>' +
                '</ul>' +
                '<strong>The Status Information:</strong>' +
                '<ul><li>The upper left corner of the screen contains the number of bombs minus the number of marked squares. At the beginning of a game it is just the number of bombs. The number will update as you mark and unmark squares.</li>' +
                '<li>The yellow face will show a smile face while you play, a clock face when a game board is being built, a dead face when you hit a bomb, a cool face when you win, and a pirate face when you win while cheating.</li>' +
                '<li>The upper right corner of the screen contains a time counter. The timer will max out at <span title="16 minutes 39 seconds">999</span>.' +
                '<li>Click on the time to switch to the number of moves counter. Click again to switch back to the time.</li>' +
                '<li>Press P to pause your game. The board will be covered while paused.</li>' +
                '</ul>' +
                '<strong>Options and Enhancements:</strong>' +
                '<ul><li><b>Open Remaining</b> - Once the correct number of bombs have been marked, the bomb counter will turn blue. Click on the blue bomb counter to open all remaining cells. If any bombs are incorrectly marked, this will cause instant death.</li></ul>' +
                '</div>'
              )
            }},
            {name: '---'},
            {name: 'About', action: function() {
              $alert.info(
                '<h1 style="margin-bottom:0">Minesweeper</h1><strong>written in JavaScript</strong><br><br>' +
                'This version was written 1997-2014<br>' +
                'by D. Shep Poor<br>' +
                '<br>' +
                '<br>' +
                'Send comments to <a href="mailto:sheppoor@dataexperts.com">sheppoor@dataexperts.com</a><br>' +
                '<br>' +
                '<br>' +
                'Original on which this game is based<br>' +
                'Copyright © 1981-1995 Microsoft Corp.'
                , icon
              )
            }}
          ]}
        ]
      };
      win = $window.call(this, data);
    }
  }


  ,'hl3': {
    categories: 'Game;Shooter',
    name: 'Half-Life 3',
    icon: 'apps/hl3.png',
    exec: function() {

      var verbs = [
         "Calculating"
        ,"Executing"
        ,"Computing"
        ,"Loading"
        ,"Downloading"
        ,"Generating"
        ,"Compiling"
        ,"Formating"
        ,"Inserting"
        ,"Browsing"
        ,"Accessing"
        ,"Configuring"
        ,"Connecting to"
        ,"Forwarding"
        ,"Manipulating"
        ,"Pasting"
        ,"Scanning"
        ,"Searching for"
        ,"Processing"
        ,"Performing"
        ,"Selecting"
        ,"Translating"
        ,"Writing"
        ,"Transforming"
        ,"Unzipping"
        ,"Logging to"
        ,"Updating"
        ,"Checking"
        ,"Decompressing"
        ,"Exploring"
        ,"Deleting"
        ,"Surfing"
        ,"Initializing"
        ,"Confirming"
        ,"Delaying"
        ,"Messing with"
      ]

      var preNames = [
         "Adobe"
        ,"super"
        ,"random"
        ,"Microsoft"
        ,"virtual"
        ,"MOAR"
        ,"less"
        ,"Google"
        ,"pizza"
        ,"GNU"
        ,"3D"
        ,"NVIDIA"
        ,"Voodoo 3D"
        ,"3dfx"
        ,"MEGA"
        ,"Mozilla"
        ,"facebook"
        ,"ultimate"
        ,"last"
        ,"next level"
        ,"wizard"
        ,"unkwown"
        ,"hacked"
        ,"spammed"
        ,"trojan"
        ,"data"
        ,"securised"
        ,"unsecurised"
        ,"Valve"
        ,"epic"
        ,"over9000"
        ,"shader"
        ,"script"
        ,"module"
        ,"kitten"
        ,"teh"
        ,"lol"
        ,"troll"
        ,"meme"
        ,"software"
        ,"hardware"
        ,"half of"
        ,"first"
        ,"last"
        ,"c++"
        ,"system"
        ,"VR"
        ,"emoji"
        ,"sudo"
        ,"user"
        ,"scene"
        ,"clock"
        ,"polygon"
        ,"overclocked"
        ,"Radeon"
        ,"Pro SSG"
        ,"AMD"
        ,"ultra HD"
        ,"PRO"
        ,"perfect-match"
        ,"high-end"
        ,"TITAN X"
        ,"low-cost"
        ,"GTX"
        ,"Pascal-powered"
        ,"Geforce"
        ,"new"
        ,"extreme"
        ,"fury"
        ,"furry"
        ,"R4"
        ,"nano"
        ,"memory"
        ,"gaming"
        ,"8GB"
        ,"Tri-X"
        ,"gaming edition"
        ,"CERN"
        ,"Nintendo"
        ,"Gabe Newell's"
        ,"video game"
        ,"GoldSrc"
        ,"John Carmack's"
        ,"encrypted"
        ,"forked"
        ,"fasted"
        ,"slowed"
        ,"modded"
        ,"updated"
        ,"major"
        ,"minor"
        ,"alpha"
        ,"beta"
        ,"hard-coded"
        ,"modern"
        ,"Steam"
        ,"OpenGL"
        ,"SDL"
        ,"handled"
        ,"game developer's"
        ,"Vulkan"
        ,"Source 2"
        ,"workshop"
        ,"static"
        ,"porn"
        ,"lag-compensated"
        ,"hight dynamic range"
        ,"scalable"
        ,"facial"
        ,"pre-computed"
        ,"auto-generated"
        ,"skeletal"
        ,"inversed"
        ,"signifiant"
        ,"keyframed"
        ,"Gentoo"
        ,"QuickTime"
        , "Titan XP"
        , "Titan XPp"
        , "sys42X"
      ]

      var names = [
         "GPU"
        ,"CPU"
        ,"VRAM"
        ,"anti-aliasing"
        ,"frame buffer"
        ,"code"
        ,"bot"
        ,"API"
        ,"laptop"
        ,"development kit"
        ,"reality"
        ,"SDK"
        ,"tool"
        ,"3d"
        ,"model"
        ,"client"
        ,"source"
        ,"branch"
        ,"build"
        ,"core"
        ,"Orange Box"
        ,"cat"
        ,"episode"
        ,"mod"
        ,"dog"
        ,"connectors"
        ,"Quake engine"
        ,"address"
        ,"algorithm"
        ,"email"
        ,"c++"
        ,"data"
        ,"database"
        ,"document"
        ,"disk operating system"
        ,"desktop"
        ,"ENIAC"
        ,"electricity"
        ,"moar ram"
        ,"attachment"
        ,"online server"
        ,"datacenter"
        ,"explorer"
        ,"filesystem"
        ,"file allocation table"
        ,"pizza"
        ,"pizza.dll"
        ,"player"
        ,"folder"
        ,"footnotes"
        ,"freeware"
        ,"firewall"
        ,"file"
        ,"teh internet"
        ,"format"
        ,"freeBSD"
        ,"FTP"
        ,"Gimp"
        ,"GNU"
        ,"hacker"
        ,"4chan"
        ,"hard disk"
        ,"hardware"
        ,"software"
        ,"hash_function"
        ,"cookie"
        ,"java"
        ,"kernel"
        ,"system32.dll (are you sure?) "
        ,"keyboard"
        ,"mouse"
        ,"link"
        ,"licensing examples for computer software"
        ,"live cd"
        ,"malware"
        ,"Macintosh"
        ,"md5"
        ,"media"
        ,"megabyte"
        ,"spam"
        ,"spammer"
        ,"scam"
        ,"scammer"
        ,"monitor"
        ,"motherboard"
        ,"Mozilla Firefox web browser"
        ,"network"
        ,"computer"
        ,"page"
        ,"Perl script"
        ,"script"
        ,"program"
        ,"release"
        ,"printer"
        ,"GPS"
        ,"PDF"
        ,"pop up"
        ,"plug-in"
        ,"python"
        ,"random access memory"
        ,"read only memory"
        ,"root"
        ,"Recycle Bin"
        ,"scan"
        ,"engine"
        ,"search engine"
        ,"shareware"
        ,"spreadsheet"
        ,"stylesheet"
        ,"super computer"
        ,"super user"
        ,"SDK"
        ,"trojan"
        ,"trojan horse"
        ,"Ubuntu"
        ,"update"
        ,"user"
        ,"USB"
        ,"version"
        ,"virtual community"
        ,"Visual Basic"
        ,"virus"
        ,"vulnerability"
        ,"window"
        ,"Wine"
        ,"X32"
        ,"X64"
        ,"Yahoo!"
        ,"ZIP"
        ,"like a boss"
        ,"manager"
        ,"setup"
        ,"Service Pack 1"
        ,"Service Pack 2"
        ,"Service Pack 3"
        ,"shit"
        ,"virus"
        ,"particule"
        ,"module"
        ,"panda"
        ,"corgi"
        ,"generator"
        ,"Half Life 3"
        ,"Gabe Newell"
        ,"center"
        ,"CD-ROM"
        ,"Source 3"
        ,"porn"
        ,"youtuber"
        ,"steam"
        ,"pokemon go"
        ,"home"
        ,"overclock"
        ,"graphic card"
        ,"Team Fortress"
        ,"milf"
        ,"Left 4 Dead"
        ,"linux support"
        ,"macintosh"
        ,"boio"
        ,"hackingz"
        ,"jaillllbrekk"
        ,"boi"
        ,"adf"
        ,"afdsf"
      ]


      var that = this;
      var image = new Image();
      image.src = '/c/programs/hl3/splash.jpg';
      image.className = 'ui_layout_center app_imageviewer__img';
      image.onload = load;
      image.onerror = load;
      image.onabort = load;

      function load() {
        $window.call(that, {
          header: false,
          maximizable: false,
          resizable: false,
          draggable: false,
          contextmenuOnBody: true,
          center: true,
          baseClass: 'ui_desktop_layer app_hl3',
          baseHeight: image.height,
          baseWidth: image.width,
          html: image,
          onopen: function(win) {
            var body = this.el.body
            setTimeout(function() {
              var title = document.createElement('div')
              var text = document.createElement('div')
              var wait = document.createElement('div')
              title.innerHTML = '<h1 style="font-size:45px;margin:0;position:relative">Half-Life <sup style="position:absolute;line-height:1;font-size:16px;top:7px">3</sup></h1><div style="margin-top:3px">CONFIRMED<div>'
              text.textContent = '...'
              wait.textContent = 'Please wait'
              title.style.cssText = 'font-size:12px;font-family:arial,sans serif;color:#fff;text-align:center;position:absolute;top:42px;left:1%;right:1%'
              text.style.cssText = 'font-size:12px;font-family:arial,sans serif;color:#fff;text-align:center;position:absolute;bottom:132px;left:1%;right:1%'
              wait.style.cssText = 'font-size:12px;font-family:arial,sans serif;color:#999;text-align:center;position:absolute;bottom:116px;left:1%;right:1%'
              body.appendChild(title)
              body.appendChild(text)
              body.appendChild(wait)

              function chance(p) { return (Math.random() * 100 >= (p || 50)) ? false : true }

              function init () {
                if (chance()) {
                  text.textContent = $io.arr.random(verbs) + ' ' + $io.arr.random(preNames) + ' ' + $io.arr.random(preNames) + ' ' + $io.arr.random(names) + '...'
                } else {
                  text.textContent = $io.arr.random(verbs) + ' ' + $io.arr.random(preNames) + ' ' + $io.arr.random(names) + '...'
                }
                setTimeout(init, Math.random() * 2000)
              }

              init()

            }, 0);
          }
        });
      }
    }
  }


  /*
       db    8b    d8 88   88 .dP"Y8 888888 8b    d8 888888 88b 88 888888
      dPYb   88b  d88 88   88 `Ybo." 88__   88b  d88 88__   88Yb88   88
     dP__Yb  88YbdP88 Y8   8P o.`Y8b 88""   88YbdP88 88""   88 Y88   88
    dP""""Yb 88 YY 88 `YbodP' 8bodP' 888888 88 YY 88 888888 88  Y8   88
  */


  ,'acidbox': {
    categories: 'Amusement;',
    icon: 'apps/acidBox.png',
    name: 'Acid Box 93',
    hide: true,
    exec: function(opt) {
      $window.call(this, {
        url: '/c/programs/acidBox93/index.html',
        width: 600,
        height: 400,
        resizable: false,
        maximizable: false,
        help: '<p><b>Demoscene tribute 4 Acid loverz ^^</b></p>'
            + '<p>Acid mix by Dj Invisible Pink<br>Cracktro maded with <a target="_blank" href="http://codef.santo.fr/">CODEF</a><p>'
      })
    }
  }

  ,'starwars': {
    categories: 'Amusement;',
    icon: 'apps/yoda.gif',
    name: 'Star Wars',
    hide: true,
    exec: function(opt) {
      $window.call(this, {
        url: '/c/programs/starwars/index.html',
        width: 429,
        height: 177,
        help: 'Star Wars Asciimation created by <a href=http://www.asciimation.co.nz/ target=_blank>www.asciimation.co.nz</a>'
      })
    }
  }

  ,'defrag': {
    categories: 'Amusement;',
    name: 'Defrag',
    icon: 'apps/defrag.png',
    exec: function() {
      $window.call(this, {
        url: '/c/programs/defrag/index.php',
        width: 640,
        height: 495,
        resizable: false,
        maximizable: false
      })
    }
  }

  ,'lenna': {
    categories: 'Amusement;',
    name: 'lenna.png',
    icon: '/c/sys/skins/w93/mime/image.png',
    exec: function() {
      //$exe('img /d/lenna.png --width=512 --height=512 --bodyClass=noscroll')
      $alert({
         title: 'Error'
        ,msg: 'Lenna is broken for now...'
        ,img: '/c/sys/skins/w93/error.png'
        ,sound: 'error'
        /*,btnOk: 'wat'*/
      });
    }
  }

  ,'gameoflife': {
    categories: 'Amusement;',
    name: 'Game Of Life',
    icon: 'apps/gameOfLife.png',
    exec: function() {
      $window.call(this, {
        url: '/c/programs/gameOfLife/index.html',
        width: 600,
        height: 600,
        resizable: false,
        maximizable: false
      })
    }
  }

  ,'whatif': {
    categories: 'Amusement;',
    name: 'What If',
    icon: 'apps/matrix.png',
    exec: function() {
      $window.call(this, {
        url: '/c/programs/matrix/index.php',
        width: 600,
        height: 300
      })
    }
  }

  ,'takethis': {
    categories: 'Amusement;',
    name: 'Take this',
    icon: 'apps/dangerous.png',
    exec: function() {
      $window.call(this, {
        url: '/c/programs/dangerous/index.html',
        width: 500,
        height: 440,
        footer: '&nbsp;',
        resizable: false,
        maximizable: false
      })
    }
  }

  ,'speech': {
    categories: 'Amusement;',
    name: 'Speech',
    icon: 'apps/voice.png',
    exec: function() {
      $window.call(this, {
        url: '/c/programs/speech/index.php',
        width: 200,
        height: 420,
        help: 'Chrome only :(',
        resizable: false,
        maximizable: false
      })
    }
  }

  ,'hampster': {
    categories: 'Amusement',
    name: 'HAMPSTER DANCE',
    icon: '/c/programs/hampsterDance/icon.gif',
    exec: function() {
      var data = {
         url: '/c/programs/hampsterDance/index.html'
        ,icon: '/c/programs/castleGafa/icon.gif'
        ,bodyClass: 'skin_inset_deep skin_light'
        ,width: 485
        ,height: 418
      };
      $window.call(this, data);
    }
  }

  ,'wat': {
    categories: 'Amusement',
    name: 'wat',
    exec: function() {
      $alert({
         title: 'Error'
        ,msg: 'Windows has detected that your monitor<br>is not plugined in.'
        ,img: '/c/sys/skins/w93/error.png'
        ,sound: 'error'
        ,btnOk: 'wat'
      });
    }
  }


  /*
    888888 888888 88""Yb 8b    d8 88 88b 88    db    88         8b    d8  dP"Yb  8888b.  888888
      88   88__   88__dP 88b  d88 88 88Yb88   dPYb   88         88b  d88 dP   Yb  8I  Yb 88__
      88   88""   88"Yb  88YbdP88 88 88 Y88  dP__Yb  88  .o     88YbdP88 Yb   dP  8I  dY 88""
      88   888888 88  Yb 88 YY 88 88 88  Y8 dP""""Yb 88ood8     88 YY 88  YbodP  8888Y"  888888
  */

  ,'key': {
    categories: 'Utility',
    terminal: true,
    silent: true,
    exec: function() {
      var
         le = this.le
        ,cli = this.cli
      ;
      $log('Press any key to get name and keyCode...');
      $log('Press escape twice to quit');
      var logK = $log.green('=> ');
      var logC = $log.blue('=> ');
      var esc = 0;
      var keyInst = $key().down(function(key, obj) {
        var cod = obj.code;
        if (cod === 27) esc++;
        else esc = 0;
        if (esc===2) destroy();
        logK.textContent = '=> ' + key
        logC.textContent = '=> ' + cod
        cli.input.value = '';
        return false;
      }, {preventDefault:true});
      cli.input.blur();
      cli.prompt.click();
      cli.prompt.innerHTML = '█&nbsp;';

      function destroy() {
        keyInst.destroy();
        cli.prompt.innerHTML = cli.cfg.prompt;
        cli.input.blur();
        cli.input.focus();
      }

      cli.ondestroy = destroy;
    }
  }


  /*
    888888    db    .dP"Y8 888888 888888 88""Yb     888888  dP""b8  dP""b8 .dP"Y8
    88__     dPYb   `Ybo."   88   88__   88__dP     88__   dP   `" dP   `" `Ybo."
    88""    dP__Yb  o.`Y8b   88   88""   88"Yb      88""   Yb  "88 Yb  "88 o.`Y8b
    888888 dP""""Yb 8bodP'   88   888888 88  Yb     888888  YboodP  YboodP 8bodP'
  */

  ,'global thermonuclear war': {
    categories: 'Game;LogicGame',
    terminal: true,
    silent: true,
    exec: function() {

      // thanks : https://github.com/aglemann/tic-tac-toe

      var
         le = this.le
        ,cli = this.cli
        ,size = 100
        ,grid = 3
        ,combos = []
        ,board = newBoard()
        ,IAvsIA = true
        ,line = {}
        ,msg
      ;
                $log(' ');
                $log(' GREETINGS PROFESSOR FALKEN.');
                $log(' Type "start" to play');
                $log(' and "exit" to quit');
                $log(' ');
                $log('     1   2   3  ');
                $log('   +---+---+---+');
      line[0] = $log(' a |   |   |   |');
                $log('   +---+---+---+');
      line[1] = $log(' b |   |   |   |');
                $log('   +---+---+---+');
      line[2] = $log(' c |   |   |   |');
                $log('   +---+---+---+');
      msg     = $log.blue(' ');

      function newBoard() { return [
        ' ',' ',' ',
        ' ',' ',' ',
        ' ',' ',' '
      ]}

      // calculate all winning combos
      for (var i = 0, c = [], d = []; i < grid; i++){
        for (var j = 0, a = [], b = []; j < grid; j++){
          a.push(i * grid + j);
          b.push(j * grid + i);
        }
        combos.push(a, b);
        c.push(i * grid + i);
        d.push((grid - i - 1) * grid + i);
      }
      combos.push(c, d);

      // method to check if game won
      // uses depth to give higher values to quicker wins
      function chk(depth){
        var x, o, z, i;
        for (z in combos){
          j = x = o = 3;
          while(j--){
            var k = combos[z][j];
            board[k] === 'O' && x--;
            board[k] === 'X' && o--;
          }
          if (!x) return size - depth; // x won
          if (!o) return depth - size; // o won
        }
      }

      // negamax search with alpha-beta pruning
      // http://en.wikipedia.org/wiki/Negamax
      // http://en.wikipedia.org/wiki/Alpha-beta_pruning
      var intelligence = 6;
      function search(depth, player, alpha, beta){
        var i = grid * grid, min = -size, max, value, next;
        if (value = chk(depth)) {// either player won
          return value * player;
        }
        if (intelligence > depth){ // recursion cutoff
          while(i--){
            if (board[i] === ' '){
              board[i] = player > 0 ? 'O' : 'X';
              value = -search(depth + 1, -player, -beta, -alpha);
              board[i] = ' ';
              if (max === undefined || value > max) max = value;
              if (value > alpha) alpha = value;
              if (alpha >= beta) return alpha; // prune branch
              if (max > min){ min = max; next = i; } // best odds for next move
            }
          }
        }
        return depth ? max || 0 : next; // 0 is tie game
      }

      function reset() {
        board = newBoard();
        draw();
        msg.textContent = ' ';
      }

      function end(s) {
        msg.textContent = s;
        setTimeout(function() {
          reset();
          if (IAvsIA) randomStart()
        }, 800)
        return true;
      }

      function draw() {
        for (var i = 0, n = 0; i < 3; i++, n += 3) {
          line[i].textContent = ' ' + (i+10).toString(16) + ' | ' + board[n] + ' | ' + board[n+1] + ' | ' + board[n+2] + ' |';
        }
      }

      function tic(n) {
        if (board[n]===' ') board[n] = 'X';
        else return;
        draw();
        if (chk(0) < 0)           return end('   WINNER:     X');
        setTimeout(function() {
          var next = search(0, 1, -size, size);
          board[next] = 'O';
          draw();
          if (next === undefined) return end('   WINNER:  NONE');//end('        tie');
          if (chk(0) > 0)         return end('   WINNER:     O');
          if (IAvsIA) {
            setTimeout(autoPlay, 70);
          }
        }, 70);
      }

      function autoPlay() {
        // console.log(111);
        tic(search(0, -1, -size, size));
      }
      var lastRdm = -1;
      function randomStart() {
        var rdm = ~~(9*Math.random());
        if (rdm !== lastRdm) {
          tic(rdm);
          lastRdm = rdm;
        } else randomStart();
      }
      if (IAvsIA) randomStart();

      draw();

      function destroy() {
        IAvsIA = false;
        $log.blue('    bye...');
        $log.blue(' ');
        cli.prompt.innerHTML = '>&nbsp;';
        cli.onenter = $noop;
      }

      cli.prompt.innerHTML = '█&nbsp;';
      cli.onenter = function(str) {
        if (str == 'exit') {
          destroy();
        } if (str == 'start') {
          IAvsIA = false;
          setTimeout(reset, 200);
        } else {
          str.replace(/([a-c])([1-3])/i, function(_, x, y) {
            tic(((parseInt(x, 16)-10) * 3) + (y-1))
          });
        }
        return false;
      }
      cli.ondestroy = destroy;
    }
  }
  ,'fx': {
    hascli: true,
    categories: 'Graphics',
    icon: 'apps/fx.png',
    inject: 'arguments',
    init: function() {
      this.app.effects = le._fx
    },
    exec: function(name, el) {
      //console.log('name', name, 'el', el);

      var le = this.le;
      var app = this.app;

      if (typeof name !== 'string') name = '';

      function reset() {
        $io.arr.all(app.effects, function(effect) {
          var els = document.querySelectorAll('.fx_' + effect);
          $io.arr.all(els, function(item) {
            item.classList.remove('fx_' + effect);
          });
        });
      }

      if (name === 'none') {
        reset();
        return;
      }

      if (typeof el === 'string') el = document.querySelectorAll(el);
      else if (!$io.isElement(el) && !$io.isNodeList(el)) {
        el = le._dom.screen;
      }

      var oldTransform;
      function repaint(cl) {
        if (el.length) {
          $io.arr.all(el, function(item) {
            _repaint(item, cl);
          });
        } else {
          _repaint(el, cl);
        }
      }
      function _repaint(el, cl) {
        $io.arr.all(el.classList, function(item) {
          if (item.indexOf('fx_')===0 && cl !== item) el.classList.remove(item);
        });
        oldTransform = el.style.webkitTransform;
        el.style.webkitTransform = 'scale(1)';
        el.classList.toggle(cl);
        el.style.webkitTransform = oldTransform;
      }

      function getDefault() {
        var out = 'none';
        $io.arr.all(el.classList, function(item) {
          if (item.indexOf('fx_')===0) out = item.replace('fx_', '');
        });
        return out;
      }

      if (!name) {
        if (this.cli) {
          $log('Experimental CSS3 and SVG effects');
          $log(' ');
          $log($io.str.htmlEscape('Usage : fx <effect_name> [css selector]'));
          $log('e.g. : "fx acid"');
          $log('e.g. : "fx blur .ui_window"');
          $log('e.g. : "fx spin .ui_icon"');
          $log(' ');
          $log('Call the command again to switch off the effect.');
          $log('Without [css selector], effects are applied to all screen.');
          $log('(It can make irreversible glitches)');
          $log(' ');
          $log('Available effects :');
          $log(app.effects.join(', '));
          $log(' ');
          return;
        } else {
          $window.form('FX', {
            schema: {
              "name": {
                "title": '<img style="position:absolute" width="32" height="32" src="/c/sys/skins/w93/apps/fx.png">',
                "type": "string",
                "enum": ['none'].concat(app.effects),
                "default": getDefault(),
                "attributes": {
                  "onchange": function(arg) {
                    repaint('fx_' + this.value);
                  }
                }
              }
            }
          }, function(ok) {
            if (!ok) repaint('fx_none');
          })
        }
      };

      if (app.effects.indexOf(name) > -1) repaint('fx_' + name);
      else $log.error('The effect ' + name + ' does not exist.');
    }
  }
  ,'acid': 'fx acid'
  // ,'spin': 'fx spin'

  ,'rotate': {
    hascli: true,
    categories: 'Amusement',
    exec: function() {
      if(this.le._dom.screen.classList.contains('fx_rotate')) {
        this.le._dom.screen.classList.remove('fx_rotate');
        this.le._dom.screen.classList.add('fx_unrotate');
      } else {
        this.le._dom.screen.classList.remove('fx_unrotate');
        this.le._dom.screen.classList.add('fx_rotate');
      }
    }
  }

  ,'do a barrel roll': {
    hascli: true,
    silent: true,
    categories: 'Amusement',
    exec: function() {
      if(this.le._dom.screen.classList.contains('fx_rotate')) {
        this.le._dom.screen.classList.remove('fx_rotate');
        this.le._dom.screen.classList.add('fx_unrotate');
      } else {
        this.le._dom.screen.classList.remove('fx_unrotate');
        this.le._dom.screen.classList.add('fx_rotate');
      }
    }
  }

  ,'gravity': {
    hascli: true,
    silent: true,
    categories: 'Amusement',
    exec: function() {
      if (!this.app.done) {
        this.app.done = true;
        $loader([
          '/c/libs/jquery.min.js',
          '/c/libs/jGravity.js'
        ], function() {

          $('#s42_desktop').jGravity({target:'.ui_icon,.ui_window,.virus', depth:15});

          setTimeout(function() {
            location.reload()
          }, 1000 * 180)

        }, {amd:false});
      }
    }
  }

  ,'virtualpc': {
    categories: 'Amusement',
    icon:"apps/inception.png",
    exec: function() {
      $window({
        url: 'http://v1.windows93.net/',
        title: 'VIRTUAL PC',
        icon: '',
        width: 600,
        height: 400,
        resizable: true,
        maximizable: true,
        help: 'INCEPTION'
      })
    }
  }

  ,'messenger': {
    categories: 'Amusement',
    icon:"/c/programs/messEnger/img/messlogo.png",
    exec: function() {
      $window({
        url: '/c/programs/messEnger/index.php',
        title: 'MESS.ENGER®',
        icon: '/c/programs/messEnger/img/messlogo.png',
        width: 240,
        height: 400,
        help: 'Made by <a target="_blank" href="http://entter.com/">VJ Entter</a> <3'
      })
    }
  }

  ,'robby': {
    categories: 'Amusement',
    icon:"apps/robby.png",
    exec: function() {
      $window.call(this, {
        url: '/c/programs/robby/index.php',
        title: 'Robby',
        width: 420,
        height: 400,
        resizable: false,
        maximizable: false,
        help: 'Robby : ascii based game by <a target="_blank" href="http://www.nurykabe.com/">Morusque</a> <3'
      })
    }
  }

  ,'vm': {
    categories: 'Amusement',
    silent: true,
    icon:"apps/inception.png",
    exec: function() {
      $window.form('VM', {
        schema: {
          "name": {
            "title": '<img style="position:absolute" width="32" height="32" src="/c/sys/skins/w93/apps/inception.png">',
            "type": "string",
            "enum": [['Version 2', 'v2'], ['Version 1', 'v1'], ['Version 0', 'v0']]
          }
        }
      }, function(ok, data) {
        if (ok) {
          $exe('iframe http://'+data.name+'.windows93.net/ --width=600 --height=400 --help=INCEPTION')
        }
      })
    }
  }

  ,'hydra': {
    categories: 'Amusement',
    icon:"apps/hydra.png",
    exec: function() {
      var icon = this.app.icon;
      function hydra() {
        $alert({
          msg:'Cut off a head, two more will take its place.<br>[ Hydra ViRuS BioCoded by Typhon/Échidna ]',
          title: 'HYDRA',
          img: icon,
          baseClass: 'ui_alert ui_window virus virus--hydra',
          center: false,
          cb: function(ok) {
            hydra();
            hydra();
          }
        });
      }
      hydra();
    }
  }

  ,'doctor': {
    categories: 'Security',
    icon: 'apps/doctor.gif',
    exec: function(opt) {
      var le = this.le;
      var that = this;

      function killAllVirus(succes, fail) {

        le._dom.screen.classList.remove('acid');
        le._dom.screen.classList.remove('rotate');
        le._dom.screen.classList.remove('invert');
        le._dom.screen.classList.remove('grayscale');
        le._dom.screen.setAttribute('style', '');

        // check if any cmd have a doctor function...
        $io.obj.all(le._clean, function(val) {
          $io.arr.all(val, function (val) {
            val();
          })
        });

        for (var key in le._clean) delete le._clean[key];

        var virus = document.querySelectorAll('.virus');
        if (virus.length) {
          $io.arr.all(virus, function(el) {
            $window.destroy(el);
          });
          if (succes !== false) $docAlert(succes || "All Virus Killed !");
        } else {
          if (fail !== false) $docAlert(fail || "No Virus detected.");
        };
      }

      if (opt && opt.clean) {
        killAllVirus(false, false);
        return;
      };


      function $docAlert(msg) {
        $alert({
          title: 'Doctor Marburg Antivirus',
          img: that.app.icon,
          btnOk: 'Thanks !',
          msg: msg
        });
      }

      var funnyDoctorMarburg = [

        function() {
          $confirm({
            title:'Doctor Marburg Antivirus',
            img: that.app.icon,
            btnOk: 'Yep!',
            btnCancel: 'Nope!',
            msg:"That Hydra virus again ?"
          }, function(isOk) {
            isOk && killAllVirus("Don't click on it next time", "Are you kidding? There is no Hydra here!");
          })
        }
        ,
        function() {
          $confirm({
            title:'Doctor Marburg Antivirus',
            img: that.app.icon,
            btnOk: 'Breathe',
            msg:"Breathe in and out please..."
          }, function(isOk) {
            isOk && killAllVirus('Inhale inhale. You\'re the victim', 'Diagnostic : Psycho-somatic addict-insane');
          })
        }
        ,
        function() {
          $prompt({
            title:'Doctor Marburg Antivirus',
            img: that.app.icon,
            btnOk: 'Say it',
            msg: 'Say 99...'
          }, function(isOk, res) {
            if (isOk && res == '99') {
              killAllVirus();
            } else if (isOk) {
              $confirm({
                title:'Doctor Marburg Antivirus',
                img: that.app.icon,
                btnOk: "Let's do that",
                msg:"Mhh, you're very sick, unfortunately I can't do anything for you... Except cleaning your computer"
              }, function(isOk, res) {
                if (isOk) {
                  killAllVirus();
                }
              });
            }
          })
        }
        ,
        function() {
          $confirm({
            title:'Doctor Marburg Antivirus',
            img: that.app.icon,
            msg:'Welcome to Doctor Marburg Antivirus.<br>Would you like to clean your System ?'
          }, function(isOk, res) {
            if (isOk) {
              $confirm({
                title:'Doctor Marburg Antivirus',
                img: that.app.icon,
                btnOk: 'Sure',
                btnCancel: 'Not Really',
                msg:'<b>Warning !</b><br>Doctor Marburg is not responsible for direct, indirect, incidental or consequential damages resulting from any defect, error or failure to perform this ilegal operation.<br><br>Do you want to perform anyway ?'
              }, function(isOk, res) {
                if (isOk) {
                  $prompt({
                    title:'Doctor Marburg Antivirus',
                    img: that.app.icon,
                    btnCancel: 'Never Mind',
                    msg: 'Ok, please confirm with your credit card number'
                  }, function(isOk, res) {
                    if (isOk) {
                      $docAlert("<b> Ilegal operation detected !</b><br>DOCTOR MARBURG had blocked the following malware application to perform an ilegal operation : <br><br><i>DOCTOR MARBURG - ilegal Operation detected</i>");
                    } else {
                      $confirm({
                        title:'Doctor Marburg Antivirus',
                        img: that.app.icon,
                        btnOk: 'Sure',
                        msg:'I was just testing you ;)<br>Do the cleaning operation anyway ?'
                      }, function(isOk, res) {
                        if (isOk) {
                          killAllVirus();
                        }
                      });
                    }
                  });
                } else {
                  $docAlert("You're such a Pussy :p");
                }
              });
            } else {
              killAllVirus("Well, I did it anyway ^^", false);
            }
          })
        }
      ];

      if (document.querySelector('.virus--hydra')) {
        funnyDoctorMarburg[0]();
      } else {
        $io.arr.random(funnyDoctorMarburg)();
      }
    }
  }

  ,'ie6': {
    categories: 'Amusement',
    silent: true,
    exec: function(selector) {
      var le = this.le;

      if (!selector) {$log.error('Error: CSS selector missing.'); return}

      var ssInst = $screenshot(selector, function(cnv, el) {
        var pos = el.getBoundingClientRect();

        cnv.className = 'virus app_ie6_cnv cursor_move';
        cnv.style.position = 'absolute';
        cnv.style.zIndex = $maxZ('.ui_window,.ui_z_indexed').num + 1;
        cnv.style.top = pos.top + 'px';
        cnv.style.left = pos.left + 'px';
        document.body.appendChild(cnv);

        $el(cnv).on('dblclick contextmenu', function(e) {
          e.preventDefault();
          le.canvas.clear()
        });

        var dragInst = $drag(cnv, {
          ondrag: function(e, x, y) {
            le.canvas.draw(cnv, x, y);
          }
        });

        var keyInst = $key(cnv).combo({
          'space': function() {
            le.canvas.clear()
          },
          'esc': function() {
            destroy();
          }
        });
        $el(cnv).trigger('click');

        le.canvas.draw(cnv, pos.left, pos.top);
        if (el.classList.contains('ui_window')) $window.destroy(el);

        function destroy() {
          dragInst.destroy()
          keyInst.destroy()
          le.canvas.clear()
          $el(cnv).off('*')
          document.body.removeChild(cnv)
        }

        if (!le._clean.ie6) le._clean.ie6 = [];
        le._clean.ie6.push(destroy);

      })
    }
  }
  ,'glitch': {
    hascli: true,
    categories: 'Amusement',
    exec: function(selector, speed, level) {
      var le = this.le;


      $loader([
        '/c/libs/glitch-canvas.js'
      ], function() {

        // console.log(111, glitch)

        speed = typeof speed === 'number' ? speed : 50;
        level = typeof level === 'number' ? level : 20;

        var
          anim
          ,canvas
          ,ctx
          ,my_image_data
          ,parameters = {}
        ;

        function randomize() {
          parameters.amount = Math.random();
          parameters.seed = Math.random();
          parameters.iterations = Math.random() * level;
          parameters.quality = 0.99;
        }
        randomize();

        var speed = 50;
        var timerId;
        var ssInst = $screenshot(selector, function(cnv, el) {
          canvas = cnv;
          var pos = el.getBoundingClientRect();

          canvas.className = 'virus app_glitch _ui_z_indexed';
          canvas.style.position = 'fixed';
          //canvas.style.pointerEvents = 'none';
          canvas.style.zIndex = $maxZ('.ui_window,.ui_icon,.ui_z_indexed').num + 1;
          canvas.style.top = pos.top + 'px';
          canvas.style.left = pos.left + 'px';
          ctx = canvas.getContext('2d');
          my_image_data = ctx.getImageData( 0, 0, canvas.width, canvas.height );

          document.body.appendChild(canvas);

          function unglitch(e) {
            //console.log(canvas);
            if (e) e.preventDefault();
            clearTimeout(timerId);
            if (canvas) {
              $el(canvas)
                .off('click', noroute)
                .off('dblclick touchstart', unglitch)
                .off('contextmenu', togglePause)
              ;
              wheelInst.destroy();
              if (canvas.parentNode) canvas.parentNode.removeChild(canvas);
              canvas = null;
            }

            var index = le._clean.glitch.indexOf(unglitch);
            le._clean.glitch.splice(index, 1);

            if (le._clean.corglitch && le._clean.corglitch.length) le._clean.corglitch[0]();
          }

          if (!le._clean.glitch) le._clean.glitch = [];
          le._clean.glitch.push(unglitch);

          var paused = false;
          function togglePause(e) { e.preventDefault();
            randomize();
            if (paused) animateGlitch();
            else clearTimeout(timerId);
            paused = !paused;
          }

          function noroute() {
            $route('')
          }

          $el(canvas)
            .on('click', noroute)
            .on('dblclick touchstart', unglitch)
            .on('contextmenu', togglePause)
          ;
          var wheelInst = $wheel(canvas, function(dt, e) {
            clearTimeout(timerId);
            paused = true;
            parameters.iterations = Math.random() * level;
            if (dt === 1) parameters.quality = 0.99 - Math.random();
            else parameters.quality = 0.99;

            if (e.shiftKey) {
              level += dt;
              if (level < 1) level = 0;
            };

            glitch(my_image_data, parameters, function(img) {
              ctx.drawImage(img, 0, 0);
            });
          }, {throttle: speed/2});

          function animateGlitch() {
            parameters.iterations = Math.random() * level;
            parameters.quality = 0.99 - Math.random();
            glitch(my_image_data, parameters, function(img) {
              ctx.drawImage(img, 0, 0);
              timerId = setTimeout(animateGlitch, speed);
            });
          }
          animateGlitch();

          if ("vibrate" in window.navigator) {
            navigator.vibrate(100);
          }

        });

      });
    }
  }

  ,'marburg': {
    categories: 'Amusement',
    exec: function() {

      var le = this.le;

      if (!le._clean.marburg) le._clean.marburg = [];
      le._clean.marburg.push(function() {
        if (canvas.parentNode) canvas.parentNode.removeChild(canvas);
        cancelAnimationFrame(animID);
        document.removeEventListener('click', marbugClick, true);
      });

      var canvas = document.createElement('canvas');
      canvas.id = 'app_marburg';
      canvas.className = 'virus';
      canvas.style.position = 'absolute';
      canvas.style.zIndex = '9999';
      canvas.style.top = '0';
      canvas.style.left = '0';
      canvas.style.pointerEvents = 'none';
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      le._dom.screen.appendChild(canvas);
      var context = canvas.getContext('2d');
      context.webkitImageSmoothingEnabled = false;
      context.oImageSmoothingEnabled = false;
      context.mozImageSmoothingEnabled = false;
      context.imageSmoothingEnabled = false;
      var audioBlop = $audio('/c/sys/sounds/BLOP.ogg');
      var marburg = [];
      var numMarburg = 1;
      var marburgKill = 0;
      var marburgKillCount = 0;
      var killAllWave = 0;
      var marbkill = 0;
      var MarburgInfect = 0;
      var tempMarburg;

      function marbugClick() {
        if (MarburgInfect == 1) {
          tempMarburg = new marburgObjet();
          marburg.push(tempMarburg);
          numMarburg = numMarburg + 1;
          if (marburgKill == 0) {
            audioBlop.play();
          };
        };
      }

      document.addEventListener('click', marbugClick, true);

      var imageObj = new Image();
      imageObj.onload = function() {
        MarbugInfect();
        animate();
      };
      imageObj.src = '/c/files/images/png/error-alpha.png';

      var animID;
      function animate() {
        animID = requestAnimationFrame(animate);
        if (marburg.length > 0) {
          draw();
        }
      }

      function draw() {
        // CLEAR SCREEN
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        var i;
        for (i = 0; i < numMarburg; i++) {
          //the drawing of the shape is handled by a function inside the external class.
          //we must pass as an argument the context to which we are drawing the shape.
          if (!marburg[i]) continue;
          marburg[i].myX += Math.floor((Math.random() * 5)) - 2;
          marburg[i].myY += Math.floor((Math.random() * 5)) - 2;
          if (marburg[i].mySize < 10) {
            marburg.splice(i, 1);
            continue;
          };
          if (marburg[i].myRandomSize != marburg[i].mySize) {
            marburg[i].mySize = marburg[i].mySize + (marburg[i].myRandomSize - marburg[i].mySize) / 4;
          };
          context.drawImage(imageObj, marburg[i].myX - marburg[i].mySize / 2, marburg[i].myY - marburg[i].mySize / 2, marburg[i].mySize, marburg[i].mySize);
        }
      }

      function marburgObjet() {
        this.myMaxX = window.innerWidth - 32;
        this.myMaxY = window.innerHeight - 32;
        this.myX = Math.floor((Math.random() * this.myMaxX));
        this.myY = Math.floor((Math.random() * this.myMaxY));
        this.myRandomSize = (Math.floor((Math.random() * 128))) + 32;
        this.mySize = 10;
      }

      function MarbugInfect() {
        MarburgInfect = 1;
        tempMarburg = new marburgObjet();
        marburg.push(tempMarburg);
        numMarburg = numMarburg + 1;
        audioBlop.play();
      };

    }
  }

  ,'info': {
    categories: 'Utility',
    terminal: true,
    exec: function() {
      $log.repeat('=');
      $log(platform.description);
      $log((new Date).toString());
      setTimeout(function() {
        $log.repeat(' ');
        $log.obj(window.location);
        setTimeout(function() {
          $log.repeat(' ');
          $log.obj(window.navigator);
          $log.repeat(' ');
          setTimeout(function() {
            if (window.navigator && window.navigator.plugins) {
              window.navigator.plugins.refresh(false);
              var numPlugins = window.navigator.plugins.length;
              for (var i = 0; i < numPlugins; i++) {
                var plugin = window.navigator.plugins[i];
                if (plugin) {
                  $log.pad('plugin', plugin.name, '.');
                }
              }
            }
            $log.repeat('=');
          }, 150);
        }, 150);
      }, 150);
    }
  }

  }
})
/*
 * JavaScript MD5
 * https://github.com/blueimp/JavaScript-MD5
 *
 * Copyright 2011, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 *
 * Based on
 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
 * Digest Algorithm, as defined in RFC 1321.
 * Version 2.2 Copyright (C) Paul Johnston 1999 - 2009
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for more info.
 */

/* global define */

;(function ($) {
    'use strict'
  
    /*
    * Add integers, wrapping at 2^32. This uses 16-bit operations internally
    * to work around bugs in some JS interpreters.
    */
    function safeAdd (x, y) {
      var lsw = (x & 0xffff) + (y & 0xffff)
      var msw = (x >> 16) + (y >> 16) + (lsw >> 16)
      return (msw << 16) | (lsw & 0xffff)
    }
  
    /*
    * Bitwise rotate a 32-bit number to the left.
    */
    function bitRotateLeft (num, cnt) {
      return (num << cnt) | (num >>> (32 - cnt))
    }
  
    /*
    * These functions implement the four basic operations the algorithm uses.
    */
    function md5cmn (q, a, b, x, s, t) {
      return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b)
    }
    function md5ff (a, b, c, d, x, s, t) {
      return md5cmn((b & c) | (~b & d), a, b, x, s, t)
    }
    function md5gg (a, b, c, d, x, s, t) {
      return md5cmn((b & d) | (c & ~d), a, b, x, s, t)
    }
    function md5hh (a, b, c, d, x, s, t) {
      return md5cmn(b ^ c ^ d, a, b, x, s, t)
    }
    function md5ii (a, b, c, d, x, s, t) {
      return md5cmn(c ^ (b | ~d), a, b, x, s, t)
    }
  
    /*
    * Calculate the MD5 of an array of little-endian words, and a bit length.
    */
    function binlMD5 (x, len) {
      /* append padding */
      x[len >> 5] |= 0x80 << (len % 32)
      x[((len + 64) >>> 9 << 4) + 14] = len
  
      var i
      var olda
      var oldb
      var oldc
      var oldd
      var a = 1732584193
      var b = -271733879
      var c = -1732584194
      var d = 271733878
  
      for (i = 0; i < x.length; i += 16) {
        olda = a
        oldb = b
        oldc = c
        oldd = d
  
        a = md5ff(a, b, c, d, x[i], 7, -680876936)
        d = md5ff(d, a, b, c, x[i + 1], 12, -389564586)
        c = md5ff(c, d, a, b, x[i + 2], 17, 606105819)
        b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330)
        a = md5ff(a, b, c, d, x[i + 4], 7, -176418897)
        d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426)
        c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341)
        b = md5ff(b, c, d, a, x[i + 7], 22, -45705983)
        a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416)
        d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417)
        c = md5ff(c, d, a, b, x[i + 10], 17, -42063)
        b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162)
        a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682)
        d = md5ff(d, a, b, c, x[i + 13], 12, -40341101)
        c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290)
        b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329)
  
        a = md5gg(a, b, c, d, x[i + 1], 5, -165796510)
        d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632)
        c = md5gg(c, d, a, b, x[i + 11], 14, 643717713)
        b = md5gg(b, c, d, a, x[i], 20, -373897302)
        a = md5gg(a, b, c, d, x[i + 5], 5, -701558691)
        d = md5gg(d, a, b, c, x[i + 10], 9, 38016083)
        c = md5gg(c, d, a, b, x[i + 15], 14, -660478335)
        b = md5gg(b, c, d, a, x[i + 4], 20, -405537848)
        a = md5gg(a, b, c, d, x[i + 9], 5, 568446438)
        d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690)
        c = md5gg(c, d, a, b, x[i + 3], 14, -187363961)
        b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501)
        a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467)
        d = md5gg(d, a, b, c, x[i + 2], 9, -51403784)
        c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473)
        b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734)
  
        a = md5hh(a, b, c, d, x[i + 5], 4, -378558)
        d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463)
        c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562)
        b = md5hh(b, c, d, a, x[i + 14], 23, -35309556)
        a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060)
        d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353)
        c = md5hh(c, d, a, b, x[i + 7], 16, -155497632)
        b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640)
        a = md5hh(a, b, c, d, x[i + 13], 4, 681279174)
        d = md5hh(d, a, b, c, x[i], 11, -358537222)
        c = md5hh(c, d, a, b, x[i + 3], 16, -722521979)
        b = md5hh(b, c, d, a, x[i + 6], 23, 76029189)
        a = md5hh(a, b, c, d, x[i + 9], 4, -640364487)
        d = md5hh(d, a, b, c, x[i + 12], 11, -421815835)
        c = md5hh(c, d, a, b, x[i + 15], 16, 530742520)
        b = md5hh(b, c, d, a, x[i + 2], 23, -995338651)
  
        a = md5ii(a, b, c, d, x[i], 6, -198630844)
        d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415)
        c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905)
        b = md5ii(b, c, d, a, x[i + 5], 21, -57434055)
        a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571)
        d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606)
        c = md5ii(c, d, a, b, x[i + 10], 15, -1051523)
        b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799)
        a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359)
        d = md5ii(d, a, b, c, x[i + 15], 10, -30611744)
        c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380)
        b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649)
        a = md5ii(a, b, c, d, x[i + 4], 6, -145523070)
        d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379)
        c = md5ii(c, d, a, b, x[i + 2], 15, 718787259)
        b = md5ii(b, c, d, a, x[i + 9], 21, -343485551)
  
        a = safeAdd(a, olda)
        b = safeAdd(b, oldb)
        c = safeAdd(c, oldc)
        d = safeAdd(d, oldd)
      }
      return [a, b, c, d]
    }
  
    /*
    * Convert an array of little-endian words to a string
    */
    function binl2rstr (input) {
      var i
      var output = ''
      var length32 = input.length * 32
      for (i = 0; i < length32; i += 8) {
        output += String.fromCharCode((input[i >> 5] >>> (i % 32)) & 0xff)
      }
      return output
    }
  
    /*
    * Convert a raw string to an array of little-endian words
    * Characters >255 have their high-byte silently ignored.
    */
    function rstr2binl (input) {
      var i
      var output = []
      output[(input.length >> 2) - 1] = undefined
      for (i = 0; i < output.length; i += 1) {
        output[i] = 0
      }
      var length8 = input.length * 8
      for (i = 0; i < length8; i += 8) {
        output[i >> 5] |= (input.charCodeAt(i / 8) & 0xff) << (i % 32)
      }
      return output
    }
  
    /*
    * Calculate the MD5 of a raw string
    */
    function rstrMD5 (s) {
      return binl2rstr(binlMD5(rstr2binl(s), s.length * 8))
    }
  
    /*
    * Calculate the HMAC-MD5, of a key and some data (raw strings)
    */
    function rstrHMACMD5 (key, data) {
      var i
      var bkey = rstr2binl(key)
      var ipad = []
      var opad = []
      var hash
      ipad[15] = opad[15] = undefined
      if (bkey.length > 16) {
        bkey = binlMD5(bkey, key.length * 8)
      }
      for (i = 0; i < 16; i += 1) {
        ipad[i] = bkey[i] ^ 0x36363636
        opad[i] = bkey[i] ^ 0x5c5c5c5c
      }
      hash = binlMD5(ipad.concat(rstr2binl(data)), 512 + data.length * 8)
      return binl2rstr(binlMD5(opad.concat(hash), 512 + 128))
    }
  
    /*
    * Convert a raw string to a hex string
    */
    function rstr2hex (input) {
      var hexTab = '0123456789abcdef'
      var output = ''
      var x
      var i
      for (i = 0; i < input.length; i += 1) {
        x = input.charCodeAt(i)
        output += hexTab.charAt((x >>> 4) & 0x0f) + hexTab.charAt(x & 0x0f)
      }
      return output
    }
  
    /*
    * Encode a string as utf-8
    */
    function str2rstrUTF8 (input) {
      return unescape(encodeURIComponent(input))
    }
  
    /*
    * Take string arguments and return either raw or hex encoded strings
    */
    function rawMD5 (s) {
      return rstrMD5(str2rstrUTF8(s))
    }
    function hexMD5 (s) {
      return rstr2hex(rawMD5(s))
    }
    function rawHMACMD5 (k, d) {
      return rstrHMACMD5(str2rstrUTF8(k), str2rstrUTF8(d))
    }
    function hexHMACMD5 (k, d) {
      return rstr2hex(rawHMACMD5(k, d))
    }
  
    function md5 (string, key, raw) {
      if (!key) {
        if (!raw) {
          return hexMD5(string)
        }
        return rawMD5(string)
      }
      if (!raw) {
        return hexHMACMD5(key, string)
      }
      return rawHMACMD5(key, string)
    }
  
    if (typeof define === 'function' && define.amd) {
      define(function () {
        return md5
      })
    } else if (typeof module === 'object' && module.exports) {
      module.exports = md5
    } else {
      $.md5 = md5
    }
  })(this)
// DB
