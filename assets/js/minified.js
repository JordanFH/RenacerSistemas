!(function (t, e) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = t.document
        ? e(t, !0)
        : function (t) {
            if (!t.document)
              throw new Error("jQuery requires a window with a document");
            return e(t);
          })
    : e(t);
})("undefined" != typeof window ? window : this, function (t, e) {
  "use strict";
  var i = [],
    n = t.document,
    s = Object.getPrototypeOf,
    o = i.slice,
    r = i.concat,
    a = i.push,
    l = i.indexOf,
    h = {},
    c = h.toString,
    u = h.hasOwnProperty,
    d = u.toString,
    p = d.call(Object),
    f = {},
    g = function (t) {
      return "function" == typeof t && "number" != typeof t.nodeType;
    },
    m = function (t) {
      return null != t && t === t.window;
    },
    v = { type: !0, src: !0, noModule: !0 };
  function _(t, e, i) {
    var s,
      o = (e = e || n).createElement("script");
    if (((o.text = t), i)) for (s in v) i[s] && (o[s] = i[s]);
    e.head.appendChild(o).parentNode.removeChild(o);
  }
  function y(t) {
    return null == t
      ? t + ""
      : "object" == typeof t || "function" == typeof t
      ? h[c.call(t)] || "object"
      : typeof t;
  }
  var b = function (t, e) {
      return new b.fn.init(t, e);
    },
    w = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  function x(t) {
    var e = !!t && "length" in t && t.length,
      i = y(t);
    return (
      !g(t) &&
      !m(t) &&
      ("array" === i ||
        0 === e ||
        ("number" == typeof e && e > 0 && e - 1 in t))
    );
  }
  (b.fn = b.prototype =
    {
      jquery: "3.3.1",
      constructor: b,
      length: 0,
      toArray: function () {
        return o.call(this);
      },
      get: function (t) {
        return null == t
          ? o.call(this)
          : t < 0
          ? this[t + this.length]
          : this[t];
      },
      pushStack: function (t) {
        var e = b.merge(this.constructor(), t);
        return (e.prevObject = this), e;
      },
      each: function (t) {
        return b.each(this, t);
      },
      map: function (t) {
        return this.pushStack(
          b.map(this, function (e, i) {
            return t.call(e, i, e);
          })
        );
      },
      slice: function () {
        return this.pushStack(o.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      eq: function (t) {
        var e = this.length,
          i = +t + (t < 0 ? e : 0);
        return this.pushStack(i >= 0 && i < e ? [this[i]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor();
      },
      push: a,
      sort: i.sort,
      splice: i.splice,
    }),
    (b.extend = b.fn.extend =
      function () {
        var t,
          e,
          i,
          n,
          s,
          o,
          r = arguments[0] || {},
          a = 1,
          l = arguments.length,
          h = !1;
        for (
          "boolean" == typeof r && ((h = r), (r = arguments[a] || {}), a++),
            "object" == typeof r || g(r) || (r = {}),
            a === l && ((r = this), a--);
          a < l;
          a++
        )
          if (null != (t = arguments[a]))
            for (e in t)
              (i = r[e]),
                r !== (n = t[e]) &&
                  (h && n && (b.isPlainObject(n) || (s = Array.isArray(n)))
                    ? (s
                        ? ((s = !1), (o = i && Array.isArray(i) ? i : []))
                        : (o = i && b.isPlainObject(i) ? i : {}),
                      (r[e] = b.extend(h, o, n)))
                    : void 0 !== n && (r[e] = n));
        return r;
      }),
    b.extend({
      expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (t) {
        throw new Error(t);
      },
      noop: function () {},
      isPlainObject: function (t) {
        var e, i;
        return !(
          !t ||
          "[object Object]" !== c.call(t) ||
          ((e = s(t)) &&
            ("function" !=
              typeof (i = u.call(e, "constructor") && e.constructor) ||
              d.call(i) !== p))
        );
      },
      isEmptyObject: function (t) {
        var e;
        for (e in t) return !1;
        return !0;
      },
      globalEval: function (t) {
        _(t);
      },
      each: function (t, e) {
        var i,
          n = 0;
        if (x(t))
          for (i = t.length; n < i && !1 !== e.call(t[n], n, t[n]); n++);
        else for (n in t) if (!1 === e.call(t[n], n, t[n])) break;
        return t;
      },
      trim: function (t) {
        return null == t ? "" : (t + "").replace(w, "");
      },
      makeArray: function (t, e) {
        var i = e || [];
        return (
          null != t &&
            (x(Object(t))
              ? b.merge(i, "string" == typeof t ? [t] : t)
              : a.call(i, t)),
          i
        );
      },
      inArray: function (t, e, i) {
        return null == e ? -1 : l.call(e, t, i);
      },
      merge: function (t, e) {
        for (var i = +e.length, n = 0, s = t.length; n < i; n++) t[s++] = e[n];
        return (t.length = s), t;
      },
      grep: function (t, e, i) {
        for (var n = [], s = 0, o = t.length, r = !i; s < o; s++)
          !e(t[s], s) !== r && n.push(t[s]);
        return n;
      },
      map: function (t, e, i) {
        var n,
          s,
          o = 0,
          a = [];
        if (x(t))
          for (n = t.length; o < n; o++)
            null != (s = e(t[o], o, i)) && a.push(s);
        else for (o in t) null != (s = e(t[o], o, i)) && a.push(s);
        return r.apply([], a);
      },
      guid: 1,
      support: f,
    }),
    "function" == typeof Symbol && (b.fn[Symbol.iterator] = i[Symbol.iterator]),
    b.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
        " "
      ),
      function (t, e) {
        h["[object " + e + "]"] = e.toLowerCase();
      }
    );
  var C = (function (t) {
    var e,
      i,
      n,
      s,
      o,
      r,
      a,
      l,
      h,
      c,
      u,
      d,
      p,
      f,
      g,
      m,
      v,
      _,
      y,
      b = "sizzle" + 1 * new Date(),
      w = t.document,
      x = 0,
      C = 0,
      k = rt(),
      T = rt(),
      D = rt(),
      S = function (t, e) {
        return t === e && (u = !0), 0;
      },
      E = {}.hasOwnProperty,
      I = [],
      A = I.pop,
      P = I.push,
      O = I.push,
      N = I.slice,
      M = function (t, e) {
        for (var i = 0, n = t.length; i < n; i++) if (t[i] === e) return i;
        return -1;
      },
      H =
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      z = "[\\x20\\t\\r\\n\\f]",
      L = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
      W =
        "\\[" +
        z +
        "*(" +
        L +
        ")(?:" +
        z +
        "*([*^$|!~]?=)" +
        z +
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
        L +
        "))|)" +
        z +
        "*\\]",
      j =
        ":(" +
        L +
        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
        W +
        ")*)|.*)\\)|)",
      R = new RegExp(z + "+", "g"),
      F = new RegExp("^" + z + "+|((?:^|[^\\\\])(?:\\\\.)*)" + z + "+$", "g"),
      q = new RegExp("^" + z + "*," + z + "*"),
      B = new RegExp("^" + z + "*([>+~]|" + z + ")" + z + "*"),
      $ = new RegExp("=" + z + "*([^\\]'\"]*?)" + z + "*\\]", "g"),
      U = new RegExp(j),
      Y = new RegExp("^" + L + "$"),
      K = {
        ID: new RegExp("^#(" + L + ")"),
        CLASS: new RegExp("^\\.(" + L + ")"),
        TAG: new RegExp("^(" + L + "|[*])"),
        ATTR: new RegExp("^" + W),
        PSEUDO: new RegExp("^" + j),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            z +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            z +
            "*(?:([+-]|)" +
            z +
            "*(\\d+)|))" +
            z +
            "*\\)|)",
          "i"
        ),
        bool: new RegExp("^(?:" + H + ")$", "i"),
        needsContext: new RegExp(
          "^" +
            z +
            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
            z +
            "*((?:-\\d)?\\d*)" +
            z +
            "*\\)|)(?=[^-]|$)",
          "i"
        ),
      },
      V = /^(?:input|select|textarea|button)$/i,
      Q = /^h\d$/i,
      X = /^[^{]+\{\s*\[native \w/,
      G = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      Z = /[+~]/,
      J = new RegExp("\\\\([\\da-f]{1,6}" + z + "?|(" + z + ")|.)", "ig"),
      tt = function (t, e, i) {
        var n = "0x" + e - 65536;
        return n != n || i
          ? e
          : n < 0
          ? String.fromCharCode(n + 65536)
          : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320);
      },
      et = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
      it = function (t, e) {
        return e
          ? "\0" === t
            ? "�"
            : t.slice(0, -1) +
              "\\" +
              t.charCodeAt(t.length - 1).toString(16) +
              " "
          : "\\" + t;
      },
      nt = function () {
        d();
      },
      st = _t(
        function (t) {
          return !0 === t.disabled && ("form" in t || "label" in t);
        },
        { dir: "parentNode", next: "legend" }
      );
    try {
      O.apply((I = N.call(w.childNodes)), w.childNodes),
        I[w.childNodes.length].nodeType;
    } catch (t) {
      O = {
        apply: I.length
          ? function (t, e) {
              P.apply(t, N.call(e));
            }
          : function (t, e) {
              for (var i = t.length, n = 0; (t[i++] = e[n++]); );
              t.length = i - 1;
            },
      };
    }
    function ot(t, e, n, s) {
      var o,
        a,
        h,
        c,
        u,
        f,
        v,
        _ = e && e.ownerDocument,
        x = e ? e.nodeType : 9;
      if (
        ((n = n || []),
        "string" != typeof t || !t || (1 !== x && 9 !== x && 11 !== x))
      )
        return n;
      if (
        !s &&
        ((e ? e.ownerDocument || e : w) !== p && d(e), (e = e || p), g)
      ) {
        if (11 !== x && (u = G.exec(t)))
          if ((o = u[1])) {
            if (9 === x) {
              if (!(h = e.getElementById(o))) return n;
              if (h.id === o) return n.push(h), n;
            } else if (_ && (h = _.getElementById(o)) && y(e, h) && h.id === o)
              return n.push(h), n;
          } else {
            if (u[2]) return O.apply(n, e.getElementsByTagName(t)), n;
            if (
              (o = u[3]) &&
              i.getElementsByClassName &&
              e.getElementsByClassName
            )
              return O.apply(n, e.getElementsByClassName(o)), n;
          }
        if (i.qsa && !D[t + " "] && (!m || !m.test(t))) {
          if (1 !== x) (_ = e), (v = t);
          else if ("object" !== e.nodeName.toLowerCase()) {
            for (
              (c = e.getAttribute("id"))
                ? (c = c.replace(et, it))
                : e.setAttribute("id", (c = b)),
                a = (f = r(t)).length;
              a--;

            )
              f[a] = "#" + c + " " + vt(f[a]);
            (v = f.join(",")), (_ = (Z.test(t) && gt(e.parentNode)) || e);
          }
          if (v)
            try {
              return O.apply(n, _.querySelectorAll(v)), n;
            } catch (t) {
            } finally {
              c === b && e.removeAttribute("id");
            }
        }
      }
      return l(t.replace(F, "$1"), e, n, s);
    }
    function rt() {
      var t = [];
      return function e(i, s) {
        return (
          t.push(i + " ") > n.cacheLength && delete e[t.shift()],
          (e[i + " "] = s)
        );
      };
    }
    function at(t) {
      return (t[b] = !0), t;
    }
    function lt(t) {
      var e = p.createElement("fieldset");
      try {
        return !!t(e);
      } catch (t) {
        return !1;
      } finally {
        e.parentNode && e.parentNode.removeChild(e), (e = null);
      }
    }
    function ht(t, e) {
      for (var i = t.split("|"), s = i.length; s--; ) n.attrHandle[i[s]] = e;
    }
    function ct(t, e) {
      var i = e && t,
        n =
          i &&
          1 === t.nodeType &&
          1 === e.nodeType &&
          t.sourceIndex - e.sourceIndex;
      if (n) return n;
      if (i) for (; (i = i.nextSibling); ) if (i === e) return -1;
      return t ? 1 : -1;
    }
    function ut(t) {
      return function (e) {
        return "input" === e.nodeName.toLowerCase() && e.type === t;
      };
    }
    function dt(t) {
      return function (e) {
        var i = e.nodeName.toLowerCase();
        return ("input" === i || "button" === i) && e.type === t;
      };
    }
    function pt(t) {
      return function (e) {
        return "form" in e
          ? e.parentNode && !1 === e.disabled
            ? "label" in e
              ? "label" in e.parentNode
                ? e.parentNode.disabled === t
                : e.disabled === t
              : e.isDisabled === t || (e.isDisabled !== !t && st(e) === t)
            : e.disabled === t
          : "label" in e && e.disabled === t;
      };
    }
    function ft(t) {
      return at(function (e) {
        return (
          (e = +e),
          at(function (i, n) {
            for (var s, o = t([], i.length, e), r = o.length; r--; )
              i[(s = o[r])] && (i[s] = !(n[s] = i[s]));
          })
        );
      });
    }
    function gt(t) {
      return t && void 0 !== t.getElementsByTagName && t;
    }
    for (e in ((i = ot.support = {}),
    (o = ot.isXML =
      function (t) {
        var e = t && (t.ownerDocument || t).documentElement;
        return !!e && "HTML" !== e.nodeName;
      }),
    (d = ot.setDocument =
      function (t) {
        var e,
          s,
          r = t ? t.ownerDocument || t : w;
        return r !== p && 9 === r.nodeType && r.documentElement
          ? ((f = (p = r).documentElement),
            (g = !o(p)),
            w !== p &&
              (s = p.defaultView) &&
              s.top !== s &&
              (s.addEventListener
                ? s.addEventListener("unload", nt, !1)
                : s.attachEvent && s.attachEvent("onunload", nt)),
            (i.attributes = lt(function (t) {
              return (t.className = "i"), !t.getAttribute("className");
            })),
            (i.getElementsByTagName = lt(function (t) {
              return (
                t.appendChild(p.createComment("")),
                !t.getElementsByTagName("*").length
              );
            })),
            (i.getElementsByClassName = X.test(p.getElementsByClassName)),
            (i.getById = lt(function (t) {
              return (
                (f.appendChild(t).id = b),
                !p.getElementsByName || !p.getElementsByName(b).length
              );
            })),
            i.getById
              ? ((n.filter.ID = function (t) {
                  var e = t.replace(J, tt);
                  return function (t) {
                    return t.getAttribute("id") === e;
                  };
                }),
                (n.find.ID = function (t, e) {
                  if (void 0 !== e.getElementById && g) {
                    var i = e.getElementById(t);
                    return i ? [i] : [];
                  }
                }))
              : ((n.filter.ID = function (t) {
                  var e = t.replace(J, tt);
                  return function (t) {
                    var i =
                      void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                    return i && i.value === e;
                  };
                }),
                (n.find.ID = function (t, e) {
                  if (void 0 !== e.getElementById && g) {
                    var i,
                      n,
                      s,
                      o = e.getElementById(t);
                    if (o) {
                      if ((i = o.getAttributeNode("id")) && i.value === t)
                        return [o];
                      for (s = e.getElementsByName(t), n = 0; (o = s[n++]); )
                        if ((i = o.getAttributeNode("id")) && i.value === t)
                          return [o];
                    }
                    return [];
                  }
                })),
            (n.find.TAG = i.getElementsByTagName
              ? function (t, e) {
                  return void 0 !== e.getElementsByTagName
                    ? e.getElementsByTagName(t)
                    : i.qsa
                    ? e.querySelectorAll(t)
                    : void 0;
                }
              : function (t, e) {
                  var i,
                    n = [],
                    s = 0,
                    o = e.getElementsByTagName(t);
                  if ("*" === t) {
                    for (; (i = o[s++]); ) 1 === i.nodeType && n.push(i);
                    return n;
                  }
                  return o;
                }),
            (n.find.CLASS =
              i.getElementsByClassName &&
              function (t, e) {
                if (void 0 !== e.getElementsByClassName && g)
                  return e.getElementsByClassName(t);
              }),
            (v = []),
            (m = []),
            (i.qsa = X.test(p.querySelectorAll)) &&
              (lt(function (t) {
                (f.appendChild(t).innerHTML =
                  "<a id='" +
                  b +
                  "'></a><select id='" +
                  b +
                  "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                  t.querySelectorAll("[msallowcapture^='']").length &&
                    m.push("[*^$]=" + z + "*(?:''|\"\")"),
                  t.querySelectorAll("[selected]").length ||
                    m.push("\\[" + z + "*(?:value|" + H + ")"),
                  t.querySelectorAll("[id~=" + b + "-]").length || m.push("~="),
                  t.querySelectorAll(":checked").length || m.push(":checked"),
                  t.querySelectorAll("a#" + b + "+*").length ||
                    m.push(".#.+[+~]");
              }),
              lt(function (t) {
                t.innerHTML =
                  "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var e = p.createElement("input");
                e.setAttribute("type", "hidden"),
                  t.appendChild(e).setAttribute("name", "D"),
                  t.querySelectorAll("[name=d]").length &&
                    m.push("name" + z + "*[*^$|!~]?="),
                  2 !== t.querySelectorAll(":enabled").length &&
                    m.push(":enabled", ":disabled"),
                  (f.appendChild(t).disabled = !0),
                  2 !== t.querySelectorAll(":disabled").length &&
                    m.push(":enabled", ":disabled"),
                  t.querySelectorAll("*,:x"),
                  m.push(",.*:");
              })),
            (i.matchesSelector = X.test(
              (_ =
                f.matches ||
                f.webkitMatchesSelector ||
                f.mozMatchesSelector ||
                f.oMatchesSelector ||
                f.msMatchesSelector)
            )) &&
              lt(function (t) {
                (i.disconnectedMatch = _.call(t, "*")),
                  _.call(t, "[s!='']:x"),
                  v.push("!=", j);
              }),
            (m = m.length && new RegExp(m.join("|"))),
            (v = v.length && new RegExp(v.join("|"))),
            (e = X.test(f.compareDocumentPosition)),
            (y =
              e || X.test(f.contains)
                ? function (t, e) {
                    var i = 9 === t.nodeType ? t.documentElement : t,
                      n = e && e.parentNode;
                    return (
                      t === n ||
                      !(
                        !n ||
                        1 !== n.nodeType ||
                        !(i.contains
                          ? i.contains(n)
                          : t.compareDocumentPosition &&
                            16 & t.compareDocumentPosition(n))
                      )
                    );
                  }
                : function (t, e) {
                    if (e) for (; (e = e.parentNode); ) if (e === t) return !0;
                    return !1;
                  }),
            (S = e
              ? function (t, e) {
                  if (t === e) return (u = !0), 0;
                  var n =
                    !t.compareDocumentPosition - !e.compareDocumentPosition;
                  return (
                    n ||
                    (1 &
                      (n =
                        (t.ownerDocument || t) === (e.ownerDocument || e)
                          ? t.compareDocumentPosition(e)
                          : 1) ||
                    (!i.sortDetached && e.compareDocumentPosition(t) === n)
                      ? t === p || (t.ownerDocument === w && y(w, t))
                        ? -1
                        : e === p || (e.ownerDocument === w && y(w, e))
                        ? 1
                        : c
                        ? M(c, t) - M(c, e)
                        : 0
                      : 4 & n
                      ? -1
                      : 1)
                  );
                }
              : function (t, e) {
                  if (t === e) return (u = !0), 0;
                  var i,
                    n = 0,
                    s = t.parentNode,
                    o = e.parentNode,
                    r = [t],
                    a = [e];
                  if (!s || !o)
                    return t === p
                      ? -1
                      : e === p
                      ? 1
                      : s
                      ? -1
                      : o
                      ? 1
                      : c
                      ? M(c, t) - M(c, e)
                      : 0;
                  if (s === o) return ct(t, e);
                  for (i = t; (i = i.parentNode); ) r.unshift(i);
                  for (i = e; (i = i.parentNode); ) a.unshift(i);
                  for (; r[n] === a[n]; ) n++;
                  return n
                    ? ct(r[n], a[n])
                    : r[n] === w
                    ? -1
                    : a[n] === w
                    ? 1
                    : 0;
                }),
            p)
          : p;
      }),
    (ot.matches = function (t, e) {
      return ot(t, null, null, e);
    }),
    (ot.matchesSelector = function (t, e) {
      if (
        ((t.ownerDocument || t) !== p && d(t),
        (e = e.replace($, "='$1']")),
        i.matchesSelector &&
          g &&
          !D[e + " "] &&
          (!v || !v.test(e)) &&
          (!m || !m.test(e)))
      )
        try {
          var n = _.call(t, e);
          if (
            n ||
            i.disconnectedMatch ||
            (t.document && 11 !== t.document.nodeType)
          )
            return n;
        } catch (t) {}
      return ot(e, p, null, [t]).length > 0;
    }),
    (ot.contains = function (t, e) {
      return (t.ownerDocument || t) !== p && d(t), y(t, e);
    }),
    (ot.attr = function (t, e) {
      (t.ownerDocument || t) !== p && d(t);
      var s = n.attrHandle[e.toLowerCase()],
        o = s && E.call(n.attrHandle, e.toLowerCase()) ? s(t, e, !g) : void 0;
      return void 0 !== o
        ? o
        : i.attributes || !g
        ? t.getAttribute(e)
        : (o = t.getAttributeNode(e)) && o.specified
        ? o.value
        : null;
    }),
    (ot.escape = function (t) {
      return (t + "").replace(et, it);
    }),
    (ot.error = function (t) {
      throw new Error("Syntax error, unrecognized expression: " + t);
    }),
    (ot.uniqueSort = function (t) {
      var e,
        n = [],
        s = 0,
        o = 0;
      if (
        ((u = !i.detectDuplicates),
        (c = !i.sortStable && t.slice(0)),
        t.sort(S),
        u)
      ) {
        for (; (e = t[o++]); ) e === t[o] && (s = n.push(o));
        for (; s--; ) t.splice(n[s], 1);
      }
      return (c = null), t;
    }),
    (s = ot.getText =
      function (t) {
        var e,
          i = "",
          n = 0,
          o = t.nodeType;
        if (o) {
          if (1 === o || 9 === o || 11 === o) {
            if ("string" == typeof t.textContent) return t.textContent;
            for (t = t.firstChild; t; t = t.nextSibling) i += s(t);
          } else if (3 === o || 4 === o) return t.nodeValue;
        } else for (; (e = t[n++]); ) i += s(e);
        return i;
      }),
    ((n = ot.selectors =
      {
        cacheLength: 50,
        createPseudo: at,
        match: K,
        attrHandle: {},
        find: {},
        relative: {
          ">": { dir: "parentNode", first: !0 },
          " ": { dir: "parentNode" },
          "+": { dir: "previousSibling", first: !0 },
          "~": { dir: "previousSibling" },
        },
        preFilter: {
          ATTR: function (t) {
            return (
              (t[1] = t[1].replace(J, tt)),
              (t[3] = (t[3] || t[4] || t[5] || "").replace(J, tt)),
              "~=" === t[2] && (t[3] = " " + t[3] + " "),
              t.slice(0, 4)
            );
          },
          CHILD: function (t) {
            return (
              (t[1] = t[1].toLowerCase()),
              "nth" === t[1].slice(0, 3)
                ? (t[3] || ot.error(t[0]),
                  (t[4] = +(t[4]
                    ? t[5] + (t[6] || 1)
                    : 2 * ("even" === t[3] || "odd" === t[3]))),
                  (t[5] = +(t[7] + t[8] || "odd" === t[3])))
                : t[3] && ot.error(t[0]),
              t
            );
          },
          PSEUDO: function (t) {
            var e,
              i = !t[6] && t[2];
            return K.CHILD.test(t[0])
              ? null
              : (t[3]
                  ? (t[2] = t[4] || t[5] || "")
                  : i &&
                    U.test(i) &&
                    (e = r(i, !0)) &&
                    (e = i.indexOf(")", i.length - e) - i.length) &&
                    ((t[0] = t[0].slice(0, e)), (t[2] = i.slice(0, e))),
                t.slice(0, 3));
          },
        },
        filter: {
          TAG: function (t) {
            var e = t.replace(J, tt).toLowerCase();
            return "*" === t
              ? function () {
                  return !0;
                }
              : function (t) {
                  return t.nodeName && t.nodeName.toLowerCase() === e;
                };
          },
          CLASS: function (t) {
            var e = k[t + " "];
            return (
              e ||
              ((e = new RegExp("(^|" + z + ")" + t + "(" + z + "|$)")) &&
                k(t, function (t) {
                  return e.test(
                    ("string" == typeof t.className && t.className) ||
                      (void 0 !== t.getAttribute && t.getAttribute("class")) ||
                      ""
                  );
                }))
            );
          },
          ATTR: function (t, e, i) {
            return function (n) {
              var s = ot.attr(n, t);
              return null == s
                ? "!=" === e
                : !e ||
                    ((s += ""),
                    "=" === e
                      ? s === i
                      : "!=" === e
                      ? s !== i
                      : "^=" === e
                      ? i && 0 === s.indexOf(i)
                      : "*=" === e
                      ? i && s.indexOf(i) > -1
                      : "$=" === e
                      ? i && s.slice(-i.length) === i
                      : "~=" === e
                      ? (" " + s.replace(R, " ") + " ").indexOf(i) > -1
                      : "|=" === e &&
                        (s === i || s.slice(0, i.length + 1) === i + "-"));
            };
          },
          CHILD: function (t, e, i, n, s) {
            var o = "nth" !== t.slice(0, 3),
              r = "last" !== t.slice(-4),
              a = "of-type" === e;
            return 1 === n && 0 === s
              ? function (t) {
                  return !!t.parentNode;
                }
              : function (e, i, l) {
                  var h,
                    c,
                    u,
                    d,
                    p,
                    f,
                    g = o !== r ? "nextSibling" : "previousSibling",
                    m = e.parentNode,
                    v = a && e.nodeName.toLowerCase(),
                    _ = !l && !a,
                    y = !1;
                  if (m) {
                    if (o) {
                      for (; g; ) {
                        for (d = e; (d = d[g]); )
                          if (
                            a
                              ? d.nodeName.toLowerCase() === v
                              : 1 === d.nodeType
                          )
                            return !1;
                        f = g = "only" === t && !f && "nextSibling";
                      }
                      return !0;
                    }
                    if (((f = [r ? m.firstChild : m.lastChild]), r && _)) {
                      for (
                        y =
                          (p =
                            (h =
                              (c =
                                (u = (d = m)[b] || (d[b] = {}))[d.uniqueID] ||
                                (u[d.uniqueID] = {}))[t] || [])[0] === x &&
                            h[1]) && h[2],
                          d = p && m.childNodes[p];
                        (d = (++p && d && d[g]) || (y = p = 0) || f.pop());

                      )
                        if (1 === d.nodeType && ++y && d === e) {
                          c[t] = [x, p, y];
                          break;
                        }
                    } else if (
                      (_ &&
                        (y = p =
                          (h =
                            (c =
                              (u = (d = e)[b] || (d[b] = {}))[d.uniqueID] ||
                              (u[d.uniqueID] = {}))[t] || [])[0] === x && h[1]),
                      !1 === y)
                    )
                      for (
                        ;
                        (d = (++p && d && d[g]) || (y = p = 0) || f.pop()) &&
                        ((a
                          ? d.nodeName.toLowerCase() !== v
                          : 1 !== d.nodeType) ||
                          !++y ||
                          (_ &&
                            ((c =
                              (u = d[b] || (d[b] = {}))[d.uniqueID] ||
                              (u[d.uniqueID] = {}))[t] = [x, y]),
                          d !== e));

                      );
                    return (y -= s) === n || (y % n == 0 && y / n >= 0);
                  }
                };
          },
          PSEUDO: function (t, e) {
            var i,
              s =
                n.pseudos[t] ||
                n.setFilters[t.toLowerCase()] ||
                ot.error("unsupported pseudo: " + t);
            return s[b]
              ? s(e)
              : s.length > 1
              ? ((i = [t, t, "", e]),
                n.setFilters.hasOwnProperty(t.toLowerCase())
                  ? at(function (t, i) {
                      for (var n, o = s(t, e), r = o.length; r--; )
                        t[(n = M(t, o[r]))] = !(i[n] = o[r]);
                    })
                  : function (t) {
                      return s(t, 0, i);
                    })
              : s;
          },
        },
        pseudos: {
          not: at(function (t) {
            var e = [],
              i = [],
              n = a(t.replace(F, "$1"));
            return n[b]
              ? at(function (t, e, i, s) {
                  for (var o, r = n(t, null, s, []), a = t.length; a--; )
                    (o = r[a]) && (t[a] = !(e[a] = o));
                })
              : function (t, s, o) {
                  return (e[0] = t), n(e, null, o, i), (e[0] = null), !i.pop();
                };
          }),
          has: at(function (t) {
            return function (e) {
              return ot(t, e).length > 0;
            };
          }),
          contains: at(function (t) {
            return (
              (t = t.replace(J, tt)),
              function (e) {
                return (e.textContent || e.innerText || s(e)).indexOf(t) > -1;
              }
            );
          }),
          lang: at(function (t) {
            return (
              Y.test(t || "") || ot.error("unsupported lang: " + t),
              (t = t.replace(J, tt).toLowerCase()),
              function (e) {
                var i;
                do {
                  if (
                    (i = g
                      ? e.lang
                      : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                  )
                    return (
                      (i = i.toLowerCase()) === t || 0 === i.indexOf(t + "-")
                    );
                } while ((e = e.parentNode) && 1 === e.nodeType);
                return !1;
              }
            );
          }),
          target: function (e) {
            var i = t.location && t.location.hash;
            return i && i.slice(1) === e.id;
          },
          root: function (t) {
            return t === f;
          },
          focus: function (t) {
            return (
              t === p.activeElement &&
              (!p.hasFocus || p.hasFocus()) &&
              !!(t.type || t.href || ~t.tabIndex)
            );
          },
          enabled: pt(!1),
          disabled: pt(!0),
          checked: function (t) {
            var e = t.nodeName.toLowerCase();
            return (
              ("input" === e && !!t.checked) || ("option" === e && !!t.selected)
            );
          },
          selected: function (t) {
            return (
              t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
            );
          },
          empty: function (t) {
            for (t = t.firstChild; t; t = t.nextSibling)
              if (t.nodeType < 6) return !1;
            return !0;
          },
          parent: function (t) {
            return !n.pseudos.empty(t);
          },
          header: function (t) {
            return Q.test(t.nodeName);
          },
          input: function (t) {
            return V.test(t.nodeName);
          },
          button: function (t) {
            var e = t.nodeName.toLowerCase();
            return ("input" === e && "button" === t.type) || "button" === e;
          },
          text: function (t) {
            var e;
            return (
              "input" === t.nodeName.toLowerCase() &&
              "text" === t.type &&
              (null == (e = t.getAttribute("type")) ||
                "text" === e.toLowerCase())
            );
          },
          first: ft(function () {
            return [0];
          }),
          last: ft(function (t, e) {
            return [e - 1];
          }),
          eq: ft(function (t, e, i) {
            return [i < 0 ? i + e : i];
          }),
          even: ft(function (t, e) {
            for (var i = 0; i < e; i += 2) t.push(i);
            return t;
          }),
          odd: ft(function (t, e) {
            for (var i = 1; i < e; i += 2) t.push(i);
            return t;
          }),
          lt: ft(function (t, e, i) {
            for (var n = i < 0 ? i + e : i; --n >= 0; ) t.push(n);
            return t;
          }),
          gt: ft(function (t, e, i) {
            for (var n = i < 0 ? i + e : i; ++n < e; ) t.push(n);
            return t;
          }),
        },
      }).pseudos.nth = n.pseudos.eq),
    { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
      n.pseudos[e] = ut(e);
    for (e in { submit: !0, reset: !0 }) n.pseudos[e] = dt(e);
    function mt() {}
    function vt(t) {
      for (var e = 0, i = t.length, n = ""; e < i; e++) n += t[e].value;
      return n;
    }
    function _t(t, e, i) {
      var n = e.dir,
        s = e.next,
        o = s || n,
        r = i && "parentNode" === o,
        a = C++;
      return e.first
        ? function (e, i, s) {
            for (; (e = e[n]); ) if (1 === e.nodeType || r) return t(e, i, s);
            return !1;
          }
        : function (e, i, l) {
            var h,
              c,
              u,
              d = [x, a];
            if (l) {
              for (; (e = e[n]); )
                if ((1 === e.nodeType || r) && t(e, i, l)) return !0;
            } else
              for (; (e = e[n]); )
                if (1 === e.nodeType || r)
                  if (
                    ((c =
                      (u = e[b] || (e[b] = {}))[e.uniqueID] ||
                      (u[e.uniqueID] = {})),
                    s && s === e.nodeName.toLowerCase())
                  )
                    e = e[n] || e;
                  else {
                    if ((h = c[o]) && h[0] === x && h[1] === a)
                      return (d[2] = h[2]);
                    if (((c[o] = d), (d[2] = t(e, i, l)))) return !0;
                  }
            return !1;
          };
    }
    function yt(t) {
      return t.length > 1
        ? function (e, i, n) {
            for (var s = t.length; s--; ) if (!t[s](e, i, n)) return !1;
            return !0;
          }
        : t[0];
    }
    function bt(t, e, i, n, s) {
      for (var o, r = [], a = 0, l = t.length, h = null != e; a < l; a++)
        (o = t[a]) && ((i && !i(o, n, s)) || (r.push(o), h && e.push(a)));
      return r;
    }
    function wt(t, e, i, n, s, o) {
      return (
        n && !n[b] && (n = wt(n)),
        s && !s[b] && (s = wt(s, o)),
        at(function (o, r, a, l) {
          var h,
            c,
            u,
            d = [],
            p = [],
            f = r.length,
            g =
              o ||
              (function (t, e, i) {
                for (var n = 0, s = e.length; n < s; n++) ot(t, e[n], i);
                return i;
              })(e || "*", a.nodeType ? [a] : a, []),
            m = !t || (!o && e) ? g : bt(g, d, t, a, l),
            v = i ? (s || (o ? t : f || n) ? [] : r) : m;
          if ((i && i(m, v, a, l), n))
            for (h = bt(v, p), n(h, [], a, l), c = h.length; c--; )
              (u = h[c]) && (v[p[c]] = !(m[p[c]] = u));
          if (o) {
            if (s || t) {
              if (s) {
                for (h = [], c = v.length; c--; )
                  (u = v[c]) && h.push((m[c] = u));
                s(null, (v = []), h, l);
              }
              for (c = v.length; c--; )
                (u = v[c]) &&
                  (h = s ? M(o, u) : d[c]) > -1 &&
                  (o[h] = !(r[h] = u));
            }
          } else (v = bt(v === r ? v.splice(f, v.length) : v)), s ? s(null, r, v, l) : O.apply(r, v);
        })
      );
    }
    function xt(t) {
      for (
        var e,
          i,
          s,
          o = t.length,
          r = n.relative[t[0].type],
          a = r || n.relative[" "],
          l = r ? 1 : 0,
          c = _t(
            function (t) {
              return t === e;
            },
            a,
            !0
          ),
          u = _t(
            function (t) {
              return M(e, t) > -1;
            },
            a,
            !0
          ),
          d = [
            function (t, i, n) {
              var s =
                (!r && (n || i !== h)) ||
                ((e = i).nodeType ? c(t, i, n) : u(t, i, n));
              return (e = null), s;
            },
          ];
        l < o;
        l++
      )
        if ((i = n.relative[t[l].type])) d = [_t(yt(d), i)];
        else {
          if ((i = n.filter[t[l].type].apply(null, t[l].matches))[b]) {
            for (s = ++l; s < o && !n.relative[t[s].type]; s++);
            return wt(
              l > 1 && yt(d),
              l > 1 &&
                vt(
                  t
                    .slice(0, l - 1)
                    .concat({ value: " " === t[l - 2].type ? "*" : "" })
                ).replace(F, "$1"),
              i,
              l < s && xt(t.slice(l, s)),
              s < o && xt((t = t.slice(s))),
              s < o && vt(t)
            );
          }
          d.push(i);
        }
      return yt(d);
    }
    function Ct(t, e) {
      var i = e.length > 0,
        s = t.length > 0,
        o = function (o, r, a, l, c) {
          var u,
            f,
            m,
            v = 0,
            _ = "0",
            y = o && [],
            b = [],
            w = h,
            C = o || (s && n.find.TAG("*", c)),
            k = (x += null == w ? 1 : Math.random() || 0.1),
            T = C.length;
          for (
            c && (h = r === p || r || c);
            _ !== T && null != (u = C[_]);
            _++
          ) {
            if (s && u) {
              for (
                f = 0, r || u.ownerDocument === p || (d(u), (a = !g));
                (m = t[f++]);

              )
                if (m(u, r || p, a)) {
                  l.push(u);
                  break;
                }
              c && (x = k);
            }
            i && ((u = !m && u) && v--, o && y.push(u));
          }
          if (((v += _), i && _ !== v)) {
            for (f = 0; (m = e[f++]); ) m(y, b, r, a);
            if (o) {
              if (v > 0) for (; _--; ) y[_] || b[_] || (b[_] = A.call(l));
              b = bt(b);
            }
            O.apply(l, b),
              c && !o && b.length > 0 && v + e.length > 1 && ot.uniqueSort(l);
          }
          return c && ((x = k), (h = w)), y;
        };
      return i ? at(o) : o;
    }
    return (
      (mt.prototype = n.filters = n.pseudos),
      (n.setFilters = new mt()),
      (r = ot.tokenize =
        function (t, e) {
          var i,
            s,
            o,
            r,
            a,
            l,
            h,
            c = T[t + " "];
          if (c) return e ? 0 : c.slice(0);
          for (a = t, l = [], h = n.preFilter; a; ) {
            for (r in ((i && !(s = q.exec(a))) ||
              (s && (a = a.slice(s[0].length) || a), l.push((o = []))),
            (i = !1),
            (s = B.exec(a)) &&
              ((i = s.shift()),
              o.push({ value: i, type: s[0].replace(F, " ") }),
              (a = a.slice(i.length))),
            n.filter))
              !(s = K[r].exec(a)) ||
                (h[r] && !(s = h[r](s))) ||
                ((i = s.shift()),
                o.push({ value: i, type: r, matches: s }),
                (a = a.slice(i.length)));
            if (!i) break;
          }
          return e ? a.length : a ? ot.error(t) : T(t, l).slice(0);
        }),
      (a = ot.compile =
        function (t, e) {
          var i,
            n = [],
            s = [],
            o = D[t + " "];
          if (!o) {
            for (e || (e = r(t)), i = e.length; i--; )
              (o = xt(e[i]))[b] ? n.push(o) : s.push(o);
            (o = D(t, Ct(s, n))).selector = t;
          }
          return o;
        }),
      (l = ot.select =
        function (t, e, i, s) {
          var o,
            l,
            h,
            c,
            u,
            d = "function" == typeof t && t,
            p = !s && r((t = d.selector || t));
          if (((i = i || []), 1 === p.length)) {
            if (
              (l = p[0] = p[0].slice(0)).length > 2 &&
              "ID" === (h = l[0]).type &&
              9 === e.nodeType &&
              g &&
              n.relative[l[1].type]
            ) {
              if (!(e = (n.find.ID(h.matches[0].replace(J, tt), e) || [])[0]))
                return i;
              d && (e = e.parentNode), (t = t.slice(l.shift().value.length));
            }
            for (
              o = K.needsContext.test(t) ? 0 : l.length;
              o-- && ((h = l[o]), !n.relative[(c = h.type)]);

            )
              if (
                (u = n.find[c]) &&
                (s = u(
                  h.matches[0].replace(J, tt),
                  (Z.test(l[0].type) && gt(e.parentNode)) || e
                ))
              ) {
                if ((l.splice(o, 1), !(t = s.length && vt(l))))
                  return O.apply(i, s), i;
                break;
              }
          }
          return (
            (d || a(t, p))(
              s,
              e,
              !g,
              i,
              !e || (Z.test(t) && gt(e.parentNode)) || e
            ),
            i
          );
        }),
      (i.sortStable = b.split("").sort(S).join("") === b),
      (i.detectDuplicates = !!u),
      d(),
      (i.sortDetached = lt(function (t) {
        return 1 & t.compareDocumentPosition(p.createElement("fieldset"));
      })),
      lt(function (t) {
        return (
          (t.innerHTML = "<a href='#'></a>"),
          "#" === t.firstChild.getAttribute("href")
        );
      }) ||
        ht("type|href|height|width", function (t, e, i) {
          if (!i) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2);
        }),
      (i.attributes &&
        lt(function (t) {
          return (
            (t.innerHTML = "<input/>"),
            t.firstChild.setAttribute("value", ""),
            "" === t.firstChild.getAttribute("value")
          );
        })) ||
        ht("value", function (t, e, i) {
          if (!i && "input" === t.nodeName.toLowerCase()) return t.defaultValue;
        }),
      lt(function (t) {
        return null == t.getAttribute("disabled");
      }) ||
        ht(H, function (t, e, i) {
          var n;
          if (!i)
            return !0 === t[e]
              ? e.toLowerCase()
              : (n = t.getAttributeNode(e)) && n.specified
              ? n.value
              : null;
        }),
      ot
    );
  })(t);
  (b.find = C),
    (b.expr = C.selectors),
    (b.expr[":"] = b.expr.pseudos),
    (b.uniqueSort = b.unique = C.uniqueSort),
    (b.text = C.getText),
    (b.isXMLDoc = C.isXML),
    (b.contains = C.contains),
    (b.escapeSelector = C.escape);
  var k = function (t, e, i) {
      for (var n = [], s = void 0 !== i; (t = t[e]) && 9 !== t.nodeType; )
        if (1 === t.nodeType) {
          if (s && b(t).is(i)) break;
          n.push(t);
        }
      return n;
    },
    T = function (t, e) {
      for (var i = []; t; t = t.nextSibling)
        1 === t.nodeType && t !== e && i.push(t);
      return i;
    },
    D = b.expr.match.needsContext;
  function S(t, e) {
    return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase();
  }
  var E = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  function I(t, e, i) {
    return g(e)
      ? b.grep(t, function (t, n) {
          return !!e.call(t, n, t) !== i;
        })
      : e.nodeType
      ? b.grep(t, function (t) {
          return (t === e) !== i;
        })
      : "string" != typeof e
      ? b.grep(t, function (t) {
          return l.call(e, t) > -1 !== i;
        })
      : b.filter(e, t, i);
  }
  (b.filter = function (t, e, i) {
    var n = e[0];
    return (
      i && (t = ":not(" + t + ")"),
      1 === e.length && 1 === n.nodeType
        ? b.find.matchesSelector(n, t)
          ? [n]
          : []
        : b.find.matches(
            t,
            b.grep(e, function (t) {
              return 1 === t.nodeType;
            })
          )
    );
  }),
    b.fn.extend({
      find: function (t) {
        var e,
          i,
          n = this.length,
          s = this;
        if ("string" != typeof t)
          return this.pushStack(
            b(t).filter(function () {
              for (e = 0; e < n; e++) if (b.contains(s[e], this)) return !0;
            })
          );
        for (i = this.pushStack([]), e = 0; e < n; e++) b.find(t, s[e], i);
        return n > 1 ? b.uniqueSort(i) : i;
      },
      filter: function (t) {
        return this.pushStack(I(this, t || [], !1));
      },
      not: function (t) {
        return this.pushStack(I(this, t || [], !0));
      },
      is: function (t) {
        return !!I(this, "string" == typeof t && D.test(t) ? b(t) : t || [], !1)
          .length;
      },
    });
  var A,
    P = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  ((b.fn.init = function (t, e, i) {
    var s, o;
    if (!t) return this;
    if (((i = i || A), "string" == typeof t)) {
      if (
        !(s =
          "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3
            ? [null, t, null]
            : P.exec(t)) ||
        (!s[1] && e)
      )
        return !e || e.jquery ? (e || i).find(t) : this.constructor(e).find(t);
      if (s[1]) {
        if (
          ((e = e instanceof b ? e[0] : e),
          b.merge(
            this,
            b.parseHTML(s[1], e && e.nodeType ? e.ownerDocument || e : n, !0)
          ),
          E.test(s[1]) && b.isPlainObject(e))
        )
          for (s in e) g(this[s]) ? this[s](e[s]) : this.attr(s, e[s]);
        return this;
      }
      return (
        (o = n.getElementById(s[2])) && ((this[0] = o), (this.length = 1)), this
      );
    }
    return t.nodeType
      ? ((this[0] = t), (this.length = 1), this)
      : g(t)
      ? void 0 !== i.ready
        ? i.ready(t)
        : t(b)
      : b.makeArray(t, this);
  }).prototype = b.fn),
    (A = b(n));
  var O = /^(?:parents|prev(?:Until|All))/,
    N = { children: !0, contents: !0, next: !0, prev: !0 };
  function M(t, e) {
    for (; (t = t[e]) && 1 !== t.nodeType; );
    return t;
  }
  b.fn.extend({
    has: function (t) {
      var e = b(t, this),
        i = e.length;
      return this.filter(function () {
        for (var t = 0; t < i; t++) if (b.contains(this, e[t])) return !0;
      });
    },
    closest: function (t, e) {
      var i,
        n = 0,
        s = this.length,
        o = [],
        r = "string" != typeof t && b(t);
      if (!D.test(t))
        for (; n < s; n++)
          for (i = this[n]; i && i !== e; i = i.parentNode)
            if (
              i.nodeType < 11 &&
              (r
                ? r.index(i) > -1
                : 1 === i.nodeType && b.find.matchesSelector(i, t))
            ) {
              o.push(i);
              break;
            }
      return this.pushStack(o.length > 1 ? b.uniqueSort(o) : o);
    },
    index: function (t) {
      return t
        ? "string" == typeof t
          ? l.call(b(t), this[0])
          : l.call(this, t.jquery ? t[0] : t)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function (t, e) {
      return this.pushStack(b.uniqueSort(b.merge(this.get(), b(t, e))));
    },
    addBack: function (t) {
      return this.add(null == t ? this.prevObject : this.prevObject.filter(t));
    },
  }),
    b.each(
      {
        parent: function (t) {
          var e = t.parentNode;
          return e && 11 !== e.nodeType ? e : null;
        },
        parents: function (t) {
          return k(t, "parentNode");
        },
        parentsUntil: function (t, e, i) {
          return k(t, "parentNode", i);
        },
        next: function (t) {
          return M(t, "nextSibling");
        },
        prev: function (t) {
          return M(t, "previousSibling");
        },
        nextAll: function (t) {
          return k(t, "nextSibling");
        },
        prevAll: function (t) {
          return k(t, "previousSibling");
        },
        nextUntil: function (t, e, i) {
          return k(t, "nextSibling", i);
        },
        prevUntil: function (t, e, i) {
          return k(t, "previousSibling", i);
        },
        siblings: function (t) {
          return T((t.parentNode || {}).firstChild, t);
        },
        children: function (t) {
          return T(t.firstChild);
        },
        contents: function (t) {
          return S(t, "iframe")
            ? t.contentDocument
            : (S(t, "template") && (t = t.content || t),
              b.merge([], t.childNodes));
        },
      },
      function (t, e) {
        b.fn[t] = function (i, n) {
          var s = b.map(this, e, i);
          return (
            "Until" !== t.slice(-5) && (n = i),
            n && "string" == typeof n && (s = b.filter(n, s)),
            this.length > 1 &&
              (N[t] || b.uniqueSort(s), O.test(t) && s.reverse()),
            this.pushStack(s)
          );
        };
      }
    );
  var H = /[^\x20\t\r\n\f]+/g;
  function z(t) {
    return t;
  }
  function L(t) {
    throw t;
  }
  function W(t, e, i, n) {
    var s;
    try {
      t && g((s = t.promise))
        ? s.call(t).done(e).fail(i)
        : t && g((s = t.then))
        ? s.call(t, e, i)
        : e.apply(void 0, [t].slice(n));
    } catch (t) {
      i.apply(void 0, [t]);
    }
  }
  (b.Callbacks = function (t) {
    t =
      "string" == typeof t
        ? (function (t) {
            var e = {};
            return (
              b.each(t.match(H) || [], function (t, i) {
                e[i] = !0;
              }),
              e
            );
          })(t)
        : b.extend({}, t);
    var e,
      i,
      n,
      s,
      o = [],
      r = [],
      a = -1,
      l = function () {
        for (s = s || t.once, n = e = !0; r.length; a = -1)
          for (i = r.shift(); ++a < o.length; )
            !1 === o[a].apply(i[0], i[1]) &&
              t.stopOnFalse &&
              ((a = o.length), (i = !1));
        t.memory || (i = !1), (e = !1), s && (o = i ? [] : "");
      },
      h = {
        add: function () {
          return (
            o &&
              (i && !e && ((a = o.length - 1), r.push(i)),
              (function e(i) {
                b.each(i, function (i, n) {
                  g(n)
                    ? (t.unique && h.has(n)) || o.push(n)
                    : n && n.length && "string" !== y(n) && e(n);
                });
              })(arguments),
              i && !e && l()),
            this
          );
        },
        remove: function () {
          return (
            b.each(arguments, function (t, e) {
              for (var i; (i = b.inArray(e, o, i)) > -1; )
                o.splice(i, 1), i <= a && a--;
            }),
            this
          );
        },
        has: function (t) {
          return t ? b.inArray(t, o) > -1 : o.length > 0;
        },
        empty: function () {
          return o && (o = []), this;
        },
        disable: function () {
          return (s = r = []), (o = i = ""), this;
        },
        disabled: function () {
          return !o;
        },
        lock: function () {
          return (s = r = []), i || e || (o = i = ""), this;
        },
        locked: function () {
          return !!s;
        },
        fireWith: function (t, i) {
          return (
            s ||
              ((i = [t, (i = i || []).slice ? i.slice() : i]),
              r.push(i),
              e || l()),
            this
          );
        },
        fire: function () {
          return h.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!n;
        },
      };
    return h;
  }),
    b.extend({
      Deferred: function (e) {
        var i = [
            [
              "notify",
              "progress",
              b.Callbacks("memory"),
              b.Callbacks("memory"),
              2,
            ],
            [
              "resolve",
              "done",
              b.Callbacks("once memory"),
              b.Callbacks("once memory"),
              0,
              "resolved",
            ],
            [
              "reject",
              "fail",
              b.Callbacks("once memory"),
              b.Callbacks("once memory"),
              1,
              "rejected",
            ],
          ],
          n = "pending",
          s = {
            state: function () {
              return n;
            },
            always: function () {
              return o.done(arguments).fail(arguments), this;
            },
            catch: function (t) {
              return s.then(null, t);
            },
            pipe: function () {
              var t = arguments;
              return b
                .Deferred(function (e) {
                  b.each(i, function (i, n) {
                    var s = g(t[n[4]]) && t[n[4]];
                    o[n[1]](function () {
                      var t = s && s.apply(this, arguments);
                      t && g(t.promise)
                        ? t
                            .promise()
                            .progress(e.notify)
                            .done(e.resolve)
                            .fail(e.reject)
                        : e[n[0] + "With"](this, s ? [t] : arguments);
                    });
                  }),
                    (t = null);
                })
                .promise();
            },
            then: function (e, n, s) {
              var o = 0;
              function r(e, i, n, s) {
                return function () {
                  var a = this,
                    l = arguments,
                    h = function () {
                      var t, h;
                      if (!(e < o)) {
                        if ((t = n.apply(a, l)) === i.promise())
                          throw new TypeError("Thenable self-resolution");
                        (h =
                          t &&
                          ("object" == typeof t || "function" == typeof t) &&
                          t.then),
                          g(h)
                            ? s
                              ? h.call(t, r(o, i, z, s), r(o, i, L, s))
                              : (o++,
                                h.call(
                                  t,
                                  r(o, i, z, s),
                                  r(o, i, L, s),
                                  r(o, i, z, i.notifyWith)
                                ))
                            : (n !== z && ((a = void 0), (l = [t])),
                              (s || i.resolveWith)(a, l));
                      }
                    },
                    c = s
                      ? h
                      : function () {
                          try {
                            h();
                          } catch (t) {
                            b.Deferred.exceptionHook &&
                              b.Deferred.exceptionHook(t, c.stackTrace),
                              e + 1 >= o &&
                                (n !== L && ((a = void 0), (l = [t])),
                                i.rejectWith(a, l));
                          }
                        };
                  e
                    ? c()
                    : (b.Deferred.getStackHook &&
                        (c.stackTrace = b.Deferred.getStackHook()),
                      t.setTimeout(c));
                };
              }
              return b
                .Deferred(function (t) {
                  i[0][3].add(r(0, t, g(s) ? s : z, t.notifyWith)),
                    i[1][3].add(r(0, t, g(e) ? e : z)),
                    i[2][3].add(r(0, t, g(n) ? n : L));
                })
                .promise();
            },
            promise: function (t) {
              return null != t ? b.extend(t, s) : s;
            },
          },
          o = {};
        return (
          b.each(i, function (t, e) {
            var r = e[2],
              a = e[5];
            (s[e[1]] = r.add),
              a &&
                r.add(
                  function () {
                    n = a;
                  },
                  i[3 - t][2].disable,
                  i[3 - t][3].disable,
                  i[0][2].lock,
                  i[0][3].lock
                ),
              r.add(e[3].fire),
              (o[e[0]] = function () {
                return (
                  o[e[0] + "With"](this === o ? void 0 : this, arguments), this
                );
              }),
              (o[e[0] + "With"] = r.fireWith);
          }),
          s.promise(o),
          e && e.call(o, o),
          o
        );
      },
      when: function (t) {
        var e = arguments.length,
          i = e,
          n = Array(i),
          s = o.call(arguments),
          r = b.Deferred(),
          a = function (t) {
            return function (i) {
              (n[t] = this),
                (s[t] = arguments.length > 1 ? o.call(arguments) : i),
                --e || r.resolveWith(n, s);
            };
          };
        if (
          e <= 1 &&
          (W(t, r.done(a(i)).resolve, r.reject, !e),
          "pending" === r.state() || g(s[i] && s[i].then))
        )
          return r.then();
        for (; i--; ) W(s[i], a(i), r.reject);
        return r.promise();
      },
    });
  var j = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  (b.Deferred.exceptionHook = function (e, i) {
    t.console &&
      t.console.warn &&
      e &&
      j.test(e.name) &&
      t.console.warn("jQuery.Deferred exception: " + e.message, e.stack, i);
  }),
    (b.readyException = function (e) {
      t.setTimeout(function () {
        throw e;
      });
    });
  var R = b.Deferred();
  function F() {
    n.removeEventListener("DOMContentLoaded", F),
      t.removeEventListener("load", F),
      b.ready();
  }
  (b.fn.ready = function (t) {
    return (
      R.then(t).catch(function (t) {
        b.readyException(t);
      }),
      this
    );
  }),
    b.extend({
      isReady: !1,
      readyWait: 1,
      ready: function (t) {
        (!0 === t ? --b.readyWait : b.isReady) ||
          ((b.isReady = !0),
          (!0 !== t && --b.readyWait > 0) || R.resolveWith(n, [b]));
      },
    }),
    (b.ready.then = R.then),
    "complete" === n.readyState ||
    ("loading" !== n.readyState && !n.documentElement.doScroll)
      ? t.setTimeout(b.ready)
      : (n.addEventListener("DOMContentLoaded", F),
        t.addEventListener("load", F));
  var q = function (t, e, i, n, s, o, r) {
      var a = 0,
        l = t.length,
        h = null == i;
      if ("object" === y(i))
        for (a in ((s = !0), i)) q(t, e, a, i[a], !0, o, r);
      else if (
        void 0 !== n &&
        ((s = !0),
        g(n) || (r = !0),
        h &&
          (r
            ? (e.call(t, n), (e = null))
            : ((h = e),
              (e = function (t, e, i) {
                return h.call(b(t), i);
              }))),
        e)
      )
        for (; a < l; a++) e(t[a], i, r ? n : n.call(t[a], a, e(t[a], i)));
      return s ? t : h ? e.call(t) : l ? e(t[0], i) : o;
    },
    B = /^-ms-/,
    $ = /-([a-z])/g;
  function U(t, e) {
    return e.toUpperCase();
  }
  function Y(t) {
    return t.replace(B, "ms-").replace($, U);
  }
  var K = function (t) {
    return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType;
  };
  function V() {
    this.expando = b.expando + V.uid++;
  }
  (V.uid = 1),
    (V.prototype = {
      cache: function (t) {
        var e = t[this.expando];
        return (
          e ||
            ((e = {}),
            K(t) &&
              (t.nodeType
                ? (t[this.expando] = e)
                : Object.defineProperty(t, this.expando, {
                    value: e,
                    configurable: !0,
                  }))),
          e
        );
      },
      set: function (t, e, i) {
        var n,
          s = this.cache(t);
        if ("string" == typeof e) s[Y(e)] = i;
        else for (n in e) s[Y(n)] = e[n];
        return s;
      },
      get: function (t, e) {
        return void 0 === e
          ? this.cache(t)
          : t[this.expando] && t[this.expando][Y(e)];
      },
      access: function (t, e, i) {
        return void 0 === e || (e && "string" == typeof e && void 0 === i)
          ? this.get(t, e)
          : (this.set(t, e, i), void 0 !== i ? i : e);
      },
      remove: function (t, e) {
        var i,
          n = t[this.expando];
        if (void 0 !== n) {
          if (void 0 !== e) {
            i = (e = Array.isArray(e)
              ? e.map(Y)
              : (e = Y(e)) in n
              ? [e]
              : e.match(H) || []).length;
            for (; i--; ) delete n[e[i]];
          }
          (void 0 === e || b.isEmptyObject(n)) &&
            (t.nodeType ? (t[this.expando] = void 0) : delete t[this.expando]);
        }
      },
      hasData: function (t) {
        var e = t[this.expando];
        return void 0 !== e && !b.isEmptyObject(e);
      },
    });
  var Q = new V(),
    X = new V(),
    G = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    Z = /[A-Z]/g;
  function J(t, e, i) {
    var n;
    if (void 0 === i && 1 === t.nodeType)
      if (
        ((n = "data-" + e.replace(Z, "-$&").toLowerCase()),
        "string" == typeof (i = t.getAttribute(n)))
      ) {
        try {
          i = (function (t) {
            return (
              "true" === t ||
              ("false" !== t &&
                ("null" === t
                  ? null
                  : t === +t + ""
                  ? +t
                  : G.test(t)
                  ? JSON.parse(t)
                  : t))
            );
          })(i);
        } catch (t) {}
        X.set(t, e, i);
      } else i = void 0;
    return i;
  }
  b.extend({
    hasData: function (t) {
      return X.hasData(t) || Q.hasData(t);
    },
    data: function (t, e, i) {
      return X.access(t, e, i);
    },
    removeData: function (t, e) {
      X.remove(t, e);
    },
    _data: function (t, e, i) {
      return Q.access(t, e, i);
    },
    _removeData: function (t, e) {
      Q.remove(t, e);
    },
  }),
    b.fn.extend({
      data: function (t, e) {
        var i,
          n,
          s,
          o = this[0],
          r = o && o.attributes;
        if (void 0 === t) {
          if (
            this.length &&
            ((s = X.get(o)), 1 === o.nodeType && !Q.get(o, "hasDataAttrs"))
          ) {
            for (i = r.length; i--; )
              r[i] &&
                0 === (n = r[i].name).indexOf("data-") &&
                ((n = Y(n.slice(5))), J(o, n, s[n]));
            Q.set(o, "hasDataAttrs", !0);
          }
          return s;
        }
        return "object" == typeof t
          ? this.each(function () {
              X.set(this, t);
            })
          : q(
              this,
              function (e) {
                var i;
                if (o && void 0 === e) {
                  if (void 0 !== (i = X.get(o, t))) return i;
                  if (void 0 !== (i = J(o, t))) return i;
                } else
                  this.each(function () {
                    X.set(this, t, e);
                  });
              },
              null,
              e,
              arguments.length > 1,
              null,
              !0
            );
      },
      removeData: function (t) {
        return this.each(function () {
          X.remove(this, t);
        });
      },
    }),
    b.extend({
      queue: function (t, e, i) {
        var n;
        if (t)
          return (
            (e = (e || "fx") + "queue"),
            (n = Q.get(t, e)),
            i &&
              (!n || Array.isArray(i)
                ? (n = Q.access(t, e, b.makeArray(i)))
                : n.push(i)),
            n || []
          );
      },
      dequeue: function (t, e) {
        e = e || "fx";
        var i = b.queue(t, e),
          n = i.length,
          s = i.shift(),
          o = b._queueHooks(t, e);
        "inprogress" === s && ((s = i.shift()), n--),
          s &&
            ("fx" === e && i.unshift("inprogress"),
            delete o.stop,
            s.call(
              t,
              function () {
                b.dequeue(t, e);
              },
              o
            )),
          !n && o && o.empty.fire();
      },
      _queueHooks: function (t, e) {
        var i = e + "queueHooks";
        return (
          Q.get(t, i) ||
          Q.access(t, i, {
            empty: b.Callbacks("once memory").add(function () {
              Q.remove(t, [e + "queue", i]);
            }),
          })
        );
      },
    }),
    b.fn.extend({
      queue: function (t, e) {
        var i = 2;
        return (
          "string" != typeof t && ((e = t), (t = "fx"), i--),
          arguments.length < i
            ? b.queue(this[0], t)
            : void 0 === e
            ? this
            : this.each(function () {
                var i = b.queue(this, t, e);
                b._queueHooks(this, t),
                  "fx" === t && "inprogress" !== i[0] && b.dequeue(this, t);
              })
        );
      },
      dequeue: function (t) {
        return this.each(function () {
          b.dequeue(this, t);
        });
      },
      clearQueue: function (t) {
        return this.queue(t || "fx", []);
      },
      promise: function (t, e) {
        var i,
          n = 1,
          s = b.Deferred(),
          o = this,
          r = this.length,
          a = function () {
            --n || s.resolveWith(o, [o]);
          };
        for (
          "string" != typeof t && ((e = t), (t = void 0)), t = t || "fx";
          r--;

        )
          (i = Q.get(o[r], t + "queueHooks")) &&
            i.empty &&
            (n++, i.empty.add(a));
        return a(), s.promise(e);
      },
    });
  var tt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    et = new RegExp("^(?:([+-])=|)(" + tt + ")([a-z%]*)$", "i"),
    it = ["Top", "Right", "Bottom", "Left"],
    nt = function (t, e) {
      return (
        "none" === (t = e || t).style.display ||
        ("" === t.style.display &&
          b.contains(t.ownerDocument, t) &&
          "none" === b.css(t, "display"))
      );
    },
    st = function (t, e, i, n) {
      var s,
        o,
        r = {};
      for (o in e) (r[o] = t.style[o]), (t.style[o] = e[o]);
      for (o in ((s = i.apply(t, n || [])), e)) t.style[o] = r[o];
      return s;
    };
  function ot(t, e, i, n) {
    var s,
      o,
      r = 20,
      a = n
        ? function () {
            return n.cur();
          }
        : function () {
            return b.css(t, e, "");
          },
      l = a(),
      h = (i && i[3]) || (b.cssNumber[e] ? "" : "px"),
      c = (b.cssNumber[e] || ("px" !== h && +l)) && et.exec(b.css(t, e));
    if (c && c[3] !== h) {
      for (l /= 2, h = h || c[3], c = +l || 1; r--; )
        b.style(t, e, c + h),
          (1 - o) * (1 - (o = a() / l || 0.5)) <= 0 && (r = 0),
          (c /= o);
      (c *= 2), b.style(t, e, c + h), (i = i || []);
    }
    return (
      i &&
        ((c = +c || +l || 0),
        (s = i[1] ? c + (i[1] + 1) * i[2] : +i[2]),
        n && ((n.unit = h), (n.start = c), (n.end = s))),
      s
    );
  }
  var rt = {};
  function at(t) {
    var e,
      i = t.ownerDocument,
      n = t.nodeName,
      s = rt[n];
    return (
      s ||
      ((e = i.body.appendChild(i.createElement(n))),
      (s = b.css(e, "display")),
      e.parentNode.removeChild(e),
      "none" === s && (s = "block"),
      (rt[n] = s),
      s)
    );
  }
  function lt(t, e) {
    for (var i, n, s = [], o = 0, r = t.length; o < r; o++)
      (n = t[o]).style &&
        ((i = n.style.display),
        e
          ? ("none" === i &&
              ((s[o] = Q.get(n, "display") || null),
              s[o] || (n.style.display = "")),
            "" === n.style.display && nt(n) && (s[o] = at(n)))
          : "none" !== i && ((s[o] = "none"), Q.set(n, "display", i)));
    for (o = 0; o < r; o++) null != s[o] && (t[o].style.display = s[o]);
    return t;
  }
  b.fn.extend({
    show: function () {
      return lt(this, !0);
    },
    hide: function () {
      return lt(this);
    },
    toggle: function (t) {
      return "boolean" == typeof t
        ? t
          ? this.show()
          : this.hide()
        : this.each(function () {
            nt(this) ? b(this).show() : b(this).hide();
          });
    },
  });
  var ht = /^(?:checkbox|radio)$/i,
    ct = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
    ut = /^$|^module$|\/(?:java|ecma)script/i,
    dt = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""],
    };
  function pt(t, e) {
    var i;
    return (
      (i =
        void 0 !== t.getElementsByTagName
          ? t.getElementsByTagName(e || "*")
          : void 0 !== t.querySelectorAll
          ? t.querySelectorAll(e || "*")
          : []),
      void 0 === e || (e && S(t, e)) ? b.merge([t], i) : i
    );
  }
  function ft(t, e) {
    for (var i = 0, n = t.length; i < n; i++)
      Q.set(t[i], "globalEval", !e || Q.get(e[i], "globalEval"));
  }
  (dt.optgroup = dt.option),
    (dt.tbody = dt.tfoot = dt.colgroup = dt.caption = dt.thead),
    (dt.th = dt.td);
  var gt = /<|&#?\w+;/;
  function mt(t, e, i, n, s) {
    for (
      var o,
        r,
        a,
        l,
        h,
        c,
        u = e.createDocumentFragment(),
        d = [],
        p = 0,
        f = t.length;
      p < f;
      p++
    )
      if ((o = t[p]) || 0 === o)
        if ("object" === y(o)) b.merge(d, o.nodeType ? [o] : o);
        else if (gt.test(o)) {
          for (
            r = r || u.appendChild(e.createElement("div")),
              a = (ct.exec(o) || ["", ""])[1].toLowerCase(),
              l = dt[a] || dt._default,
              r.innerHTML = l[1] + b.htmlPrefilter(o) + l[2],
              c = l[0];
            c--;

          )
            r = r.lastChild;
          b.merge(d, r.childNodes), ((r = u.firstChild).textContent = "");
        } else d.push(e.createTextNode(o));
    for (u.textContent = "", p = 0; (o = d[p++]); )
      if (n && b.inArray(o, n) > -1) s && s.push(o);
      else if (
        ((h = b.contains(o.ownerDocument, o)),
        (r = pt(u.appendChild(o), "script")),
        h && ft(r),
        i)
      )
        for (c = 0; (o = r[c++]); ) ut.test(o.type || "") && i.push(o);
    return u;
  }
  !(function () {
    var t = n.createDocumentFragment().appendChild(n.createElement("div")),
      e = n.createElement("input");
    e.setAttribute("type", "radio"),
      e.setAttribute("checked", "checked"),
      e.setAttribute("name", "t"),
      t.appendChild(e),
      (f.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked),
      (t.innerHTML = "<textarea>x</textarea>"),
      (f.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue);
  })();
  var vt = n.documentElement,
    _t = /^key/,
    yt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    bt = /^([^.]*)(?:\.(.+)|)/;
  function wt() {
    return !0;
  }
  function xt() {
    return !1;
  }
  function Ct() {
    try {
      return n.activeElement;
    } catch (t) {}
  }
  function kt(t, e, i, n, s, o) {
    var r, a;
    if ("object" == typeof e) {
      for (a in ("string" != typeof i && ((n = n || i), (i = void 0)), e))
        kt(t, a, i, n, e[a], o);
      return t;
    }
    if (
      (null == n && null == s
        ? ((s = i), (n = i = void 0))
        : null == s &&
          ("string" == typeof i
            ? ((s = n), (n = void 0))
            : ((s = n), (n = i), (i = void 0))),
      !1 === s)
    )
      s = xt;
    else if (!s) return t;
    return (
      1 === o &&
        ((r = s),
        ((s = function (t) {
          return b().off(t), r.apply(this, arguments);
        }).guid = r.guid || (r.guid = b.guid++))),
      t.each(function () {
        b.event.add(this, e, s, n, i);
      })
    );
  }
  (b.event = {
    global: {},
    add: function (t, e, i, n, s) {
      var o,
        r,
        a,
        l,
        h,
        c,
        u,
        d,
        p,
        f,
        g,
        m = Q.get(t);
      if (m)
        for (
          i.handler && ((i = (o = i).handler), (s = o.selector)),
            s && b.find.matchesSelector(vt, s),
            i.guid || (i.guid = b.guid++),
            (l = m.events) || (l = m.events = {}),
            (r = m.handle) ||
              (r = m.handle =
                function (e) {
                  return void 0 !== b && b.event.triggered !== e.type
                    ? b.event.dispatch.apply(t, arguments)
                    : void 0;
                }),
            h = (e = (e || "").match(H) || [""]).length;
          h--;

        )
          (p = g = (a = bt.exec(e[h]) || [])[1]),
            (f = (a[2] || "").split(".").sort()),
            p &&
              ((u = b.event.special[p] || {}),
              (p = (s ? u.delegateType : u.bindType) || p),
              (u = b.event.special[p] || {}),
              (c = b.extend(
                {
                  type: p,
                  origType: g,
                  data: n,
                  handler: i,
                  guid: i.guid,
                  selector: s,
                  needsContext: s && b.expr.match.needsContext.test(s),
                  namespace: f.join("."),
                },
                o
              )),
              (d = l[p]) ||
                (((d = l[p] = []).delegateCount = 0),
                (u.setup && !1 !== u.setup.call(t, n, f, r)) ||
                  (t.addEventListener && t.addEventListener(p, r))),
              u.add &&
                (u.add.call(t, c), c.handler.guid || (c.handler.guid = i.guid)),
              s ? d.splice(d.delegateCount++, 0, c) : d.push(c),
              (b.event.global[p] = !0));
    },
    remove: function (t, e, i, n, s) {
      var o,
        r,
        a,
        l,
        h,
        c,
        u,
        d,
        p,
        f,
        g,
        m = Q.hasData(t) && Q.get(t);
      if (m && (l = m.events)) {
        for (h = (e = (e || "").match(H) || [""]).length; h--; )
          if (
            ((p = g = (a = bt.exec(e[h]) || [])[1]),
            (f = (a[2] || "").split(".").sort()),
            p)
          ) {
            for (
              u = b.event.special[p] || {},
                d = l[(p = (n ? u.delegateType : u.bindType) || p)] || [],
                a =
                  a[2] &&
                  new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                r = o = d.length;
              o--;

            )
              (c = d[o]),
                (!s && g !== c.origType) ||
                  (i && i.guid !== c.guid) ||
                  (a && !a.test(c.namespace)) ||
                  (n && n !== c.selector && ("**" !== n || !c.selector)) ||
                  (d.splice(o, 1),
                  c.selector && d.delegateCount--,
                  u.remove && u.remove.call(t, c));
            r &&
              !d.length &&
              ((u.teardown && !1 !== u.teardown.call(t, f, m.handle)) ||
                b.removeEvent(t, p, m.handle),
              delete l[p]);
          } else for (p in l) b.event.remove(t, p + e[h], i, n, !0);
        b.isEmptyObject(l) && Q.remove(t, "handle events");
      }
    },
    dispatch: function (t) {
      var e,
        i,
        n,
        s,
        o,
        r,
        a = b.event.fix(t),
        l = new Array(arguments.length),
        h = (Q.get(this, "events") || {})[a.type] || [],
        c = b.event.special[a.type] || {};
      for (l[0] = a, e = 1; e < arguments.length; e++) l[e] = arguments[e];
      if (
        ((a.delegateTarget = this),
        !c.preDispatch || !1 !== c.preDispatch.call(this, a))
      ) {
        for (
          r = b.event.handlers.call(this, a, h), e = 0;
          (s = r[e++]) && !a.isPropagationStopped();

        )
          for (
            a.currentTarget = s.elem, i = 0;
            (o = s.handlers[i++]) && !a.isImmediatePropagationStopped();

          )
            (a.rnamespace && !a.rnamespace.test(o.namespace)) ||
              ((a.handleObj = o),
              (a.data = o.data),
              void 0 !==
                (n = (
                  (b.event.special[o.origType] || {}).handle || o.handler
                ).apply(s.elem, l)) &&
                !1 === (a.result = n) &&
                (a.preventDefault(), a.stopPropagation()));
        return c.postDispatch && c.postDispatch.call(this, a), a.result;
      }
    },
    handlers: function (t, e) {
      var i,
        n,
        s,
        o,
        r,
        a = [],
        l = e.delegateCount,
        h = t.target;
      if (l && h.nodeType && !("click" === t.type && t.button >= 1))
        for (; h !== this; h = h.parentNode || this)
          if (1 === h.nodeType && ("click" !== t.type || !0 !== h.disabled)) {
            for (o = [], r = {}, i = 0; i < l; i++)
              void 0 === r[(s = (n = e[i]).selector + " ")] &&
                (r[s] = n.needsContext
                  ? b(s, this).index(h) > -1
                  : b.find(s, this, null, [h]).length),
                r[s] && o.push(n);
            o.length && a.push({ elem: h, handlers: o });
          }
      return (
        (h = this), l < e.length && a.push({ elem: h, handlers: e.slice(l) }), a
      );
    },
    addProp: function (t, e) {
      Object.defineProperty(b.Event.prototype, t, {
        enumerable: !0,
        configurable: !0,
        get: g(e)
          ? function () {
              if (this.originalEvent) return e(this.originalEvent);
            }
          : function () {
              if (this.originalEvent) return this.originalEvent[t];
            },
        set: function (e) {
          Object.defineProperty(this, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e,
          });
        },
      });
    },
    fix: function (t) {
      return t[b.expando] ? t : new b.Event(t);
    },
    special: {
      load: { noBubble: !0 },
      focus: {
        trigger: function () {
          if (this !== Ct() && this.focus) return this.focus(), !1;
        },
        delegateType: "focusin",
      },
      blur: {
        trigger: function () {
          if (this === Ct() && this.blur) return this.blur(), !1;
        },
        delegateType: "focusout",
      },
      click: {
        trigger: function () {
          if ("checkbox" === this.type && this.click && S(this, "input"))
            return this.click(), !1;
        },
        _default: function (t) {
          return S(t.target, "a");
        },
      },
      beforeunload: {
        postDispatch: function (t) {
          void 0 !== t.result &&
            t.originalEvent &&
            (t.originalEvent.returnValue = t.result);
        },
      },
    },
  }),
    (b.removeEvent = function (t, e, i) {
      t.removeEventListener && t.removeEventListener(e, i);
    }),
    (b.Event = function (t, e) {
      if (!(this instanceof b.Event)) return new b.Event(t, e);
      t && t.type
        ? ((this.originalEvent = t),
          (this.type = t.type),
          (this.isDefaultPrevented =
            t.defaultPrevented ||
            (void 0 === t.defaultPrevented && !1 === t.returnValue)
              ? wt
              : xt),
          (this.target =
            t.target && 3 === t.target.nodeType
              ? t.target.parentNode
              : t.target),
          (this.currentTarget = t.currentTarget),
          (this.relatedTarget = t.relatedTarget))
        : (this.type = t),
        e && b.extend(this, e),
        (this.timeStamp = (t && t.timeStamp) || Date.now()),
        (this[b.expando] = !0);
    }),
    (b.Event.prototype = {
      constructor: b.Event,
      isDefaultPrevented: xt,
      isPropagationStopped: xt,
      isImmediatePropagationStopped: xt,
      isSimulated: !1,
      preventDefault: function () {
        var t = this.originalEvent;
        (this.isDefaultPrevented = wt),
          t && !this.isSimulated && t.preventDefault();
      },
      stopPropagation: function () {
        var t = this.originalEvent;
        (this.isPropagationStopped = wt),
          t && !this.isSimulated && t.stopPropagation();
      },
      stopImmediatePropagation: function () {
        var t = this.originalEvent;
        (this.isImmediatePropagationStopped = wt),
          t && !this.isSimulated && t.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    b.each(
      {
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function (t) {
          var e = t.button;
          return null == t.which && _t.test(t.type)
            ? null != t.charCode
              ? t.charCode
              : t.keyCode
            : !t.which && void 0 !== e && yt.test(t.type)
            ? 1 & e
              ? 1
              : 2 & e
              ? 3
              : 4 & e
              ? 2
              : 0
            : t.which;
        },
      },
      b.event.addProp
    ),
    b.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout",
      },
      function (t, e) {
        b.event.special[t] = {
          delegateType: e,
          bindType: e,
          handle: function (t) {
            var i,
              n = t.relatedTarget,
              s = t.handleObj;
            return (
              (n && (n === this || b.contains(this, n))) ||
                ((t.type = s.origType),
                (i = s.handler.apply(this, arguments)),
                (t.type = e)),
              i
            );
          },
        };
      }
    ),
    b.fn.extend({
      on: function (t, e, i, n) {
        return kt(this, t, e, i, n);
      },
      one: function (t, e, i, n) {
        return kt(this, t, e, i, n, 1);
      },
      off: function (t, e, i) {
        var n, s;
        if (t && t.preventDefault && t.handleObj)
          return (
            (n = t.handleObj),
            b(t.delegateTarget).off(
              n.namespace ? n.origType + "." + n.namespace : n.origType,
              n.selector,
              n.handler
            ),
            this
          );
        if ("object" == typeof t) {
          for (s in t) this.off(s, e, t[s]);
          return this;
        }
        return (
          (!1 !== e && "function" != typeof e) || ((i = e), (e = void 0)),
          !1 === i && (i = xt),
          this.each(function () {
            b.event.remove(this, t, i, e);
          })
        );
      },
    });
  var Tt =
      /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
    Dt = /<script|<style|<link/i,
    St = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Et = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  function It(t, e) {
    return (
      (S(t, "table") &&
        S(11 !== e.nodeType ? e : e.firstChild, "tr") &&
        b(t).children("tbody")[0]) ||
      t
    );
  }
  function At(t) {
    return (t.type = (null !== t.getAttribute("type")) + "/" + t.type), t;
  }
  function Pt(t) {
    return (
      "true/" === (t.type || "").slice(0, 5)
        ? (t.type = t.type.slice(5))
        : t.removeAttribute("type"),
      t
    );
  }
  function Ot(t, e) {
    var i, n, s, o, r, a, l, h;
    if (1 === e.nodeType) {
      if (
        Q.hasData(t) &&
        ((o = Q.access(t)), (r = Q.set(e, o)), (h = o.events))
      )
        for (s in (delete r.handle, (r.events = {}), h))
          for (i = 0, n = h[s].length; i < n; i++) b.event.add(e, s, h[s][i]);
      X.hasData(t) && ((a = X.access(t)), (l = b.extend({}, a)), X.set(e, l));
    }
  }
  function Nt(t, e) {
    var i = e.nodeName.toLowerCase();
    "input" === i && ht.test(t.type)
      ? (e.checked = t.checked)
      : ("input" !== i && "textarea" !== i) ||
        (e.defaultValue = t.defaultValue);
  }
  function Mt(t, e, i, n) {
    e = r.apply([], e);
    var s,
      o,
      a,
      l,
      h,
      c,
      u = 0,
      d = t.length,
      p = d - 1,
      m = e[0],
      v = g(m);
    if (v || (d > 1 && "string" == typeof m && !f.checkClone && St.test(m)))
      return t.each(function (s) {
        var o = t.eq(s);
        v && (e[0] = m.call(this, s, o.html())), Mt(o, e, i, n);
      });
    if (
      d &&
      ((o = (s = mt(e, t[0].ownerDocument, !1, t, n)).firstChild),
      1 === s.childNodes.length && (s = o),
      o || n)
    ) {
      for (l = (a = b.map(pt(s, "script"), At)).length; u < d; u++)
        (h = s),
          u !== p &&
            ((h = b.clone(h, !0, !0)), l && b.merge(a, pt(h, "script"))),
          i.call(t[u], h, u);
      if (l)
        for (c = a[a.length - 1].ownerDocument, b.map(a, Pt), u = 0; u < l; u++)
          (h = a[u]),
            ut.test(h.type || "") &&
              !Q.access(h, "globalEval") &&
              b.contains(c, h) &&
              (h.src && "module" !== (h.type || "").toLowerCase()
                ? b._evalUrl && b._evalUrl(h.src)
                : _(h.textContent.replace(Et, ""), c, h));
    }
    return t;
  }
  function Ht(t, e, i) {
    for (var n, s = e ? b.filter(e, t) : t, o = 0; null != (n = s[o]); o++)
      i || 1 !== n.nodeType || b.cleanData(pt(n)),
        n.parentNode &&
          (i && b.contains(n.ownerDocument, n) && ft(pt(n, "script")),
          n.parentNode.removeChild(n));
    return t;
  }
  b.extend({
    htmlPrefilter: function (t) {
      return t.replace(Tt, "<$1></$2>");
    },
    clone: function (t, e, i) {
      var n,
        s,
        o,
        r,
        a = t.cloneNode(!0),
        l = b.contains(t.ownerDocument, t);
      if (
        !(
          f.noCloneChecked ||
          (1 !== t.nodeType && 11 !== t.nodeType) ||
          b.isXMLDoc(t)
        )
      )
        for (r = pt(a), n = 0, s = (o = pt(t)).length; n < s; n++)
          Nt(o[n], r[n]);
      if (e)
        if (i)
          for (o = o || pt(t), r = r || pt(a), n = 0, s = o.length; n < s; n++)
            Ot(o[n], r[n]);
        else Ot(t, a);
      return (
        (r = pt(a, "script")).length > 0 && ft(r, !l && pt(t, "script")), a
      );
    },
    cleanData: function (t) {
      for (var e, i, n, s = b.event.special, o = 0; void 0 !== (i = t[o]); o++)
        if (K(i)) {
          if ((e = i[Q.expando])) {
            if (e.events)
              for (n in e.events)
                s[n] ? b.event.remove(i, n) : b.removeEvent(i, n, e.handle);
            i[Q.expando] = void 0;
          }
          i[X.expando] && (i[X.expando] = void 0);
        }
    },
  }),
    b.fn.extend({
      detach: function (t) {
        return Ht(this, t, !0);
      },
      remove: function (t) {
        return Ht(this, t);
      },
      text: function (t) {
        return q(
          this,
          function (t) {
            return void 0 === t
              ? b.text(this)
              : this.empty().each(function () {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    (this.textContent = t);
                });
          },
          null,
          t,
          arguments.length
        );
      },
      append: function () {
        return Mt(this, arguments, function (t) {
          (1 !== this.nodeType &&
            11 !== this.nodeType &&
            9 !== this.nodeType) ||
            It(this, t).appendChild(t);
        });
      },
      prepend: function () {
        return Mt(this, arguments, function (t) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var e = It(this, t);
            e.insertBefore(t, e.firstChild);
          }
        });
      },
      before: function () {
        return Mt(this, arguments, function (t) {
          this.parentNode && this.parentNode.insertBefore(t, this);
        });
      },
      after: function () {
        return Mt(this, arguments, function (t) {
          this.parentNode && this.parentNode.insertBefore(t, this.nextSibling);
        });
      },
      empty: function () {
        for (var t, e = 0; null != (t = this[e]); e++)
          1 === t.nodeType && (b.cleanData(pt(t, !1)), (t.textContent = ""));
        return this;
      },
      clone: function (t, e) {
        return (
          (t = null != t && t),
          (e = null == e ? t : e),
          this.map(function () {
            return b.clone(this, t, e);
          })
        );
      },
      html: function (t) {
        return q(
          this,
          function (t) {
            var e = this[0] || {},
              i = 0,
              n = this.length;
            if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
            if (
              "string" == typeof t &&
              !Dt.test(t) &&
              !dt[(ct.exec(t) || ["", ""])[1].toLowerCase()]
            ) {
              t = b.htmlPrefilter(t);
              try {
                for (; i < n; i++)
                  1 === (e = this[i] || {}).nodeType &&
                    (b.cleanData(pt(e, !1)), (e.innerHTML = t));
                e = 0;
              } catch (t) {}
            }
            e && this.empty().append(t);
          },
          null,
          t,
          arguments.length
        );
      },
      replaceWith: function () {
        var t = [];
        return Mt(
          this,
          arguments,
          function (e) {
            var i = this.parentNode;
            b.inArray(this, t) < 0 &&
              (b.cleanData(pt(this)), i && i.replaceChild(e, this));
          },
          t
        );
      },
    }),
    b.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (t, e) {
        b.fn[t] = function (t) {
          for (var i, n = [], s = b(t), o = s.length - 1, r = 0; r <= o; r++)
            (i = r === o ? this : this.clone(!0)),
              b(s[r])[e](i),
              a.apply(n, i.get());
          return this.pushStack(n);
        };
      }
    );
  var zt = new RegExp("^(" + tt + ")(?!px)[a-z%]+$", "i"),
    Lt = function (e) {
      var i = e.ownerDocument.defaultView;
      return (i && i.opener) || (i = t), i.getComputedStyle(e);
    },
    Wt = new RegExp(it.join("|"), "i");
  function jt(t, e, i) {
    var n,
      s,
      o,
      r,
      a = t.style;
    return (
      (i = i || Lt(t)) &&
        ("" !== (r = i.getPropertyValue(e) || i[e]) ||
          b.contains(t.ownerDocument, t) ||
          (r = b.style(t, e)),
        !f.pixelBoxStyles() &&
          zt.test(r) &&
          Wt.test(e) &&
          ((n = a.width),
          (s = a.minWidth),
          (o = a.maxWidth),
          (a.minWidth = a.maxWidth = a.width = r),
          (r = i.width),
          (a.width = n),
          (a.minWidth = s),
          (a.maxWidth = o))),
      void 0 !== r ? r + "" : r
    );
  }
  function Rt(t, e) {
    return {
      get: function () {
        if (!t()) return (this.get = e).apply(this, arguments);
        delete this.get;
      },
    };
  }
  !(function () {
    function e() {
      if (c) {
        (h.style.cssText =
          "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
          (c.style.cssText =
            "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
          vt.appendChild(h).appendChild(c);
        var e = t.getComputedStyle(c);
        (s = "1%" !== e.top),
          (l = 12 === i(e.marginLeft)),
          (c.style.right = "60%"),
          (a = 36 === i(e.right)),
          (o = 36 === i(e.width)),
          (c.style.position = "absolute"),
          (r = 36 === c.offsetWidth || "absolute"),
          vt.removeChild(h),
          (c = null);
      }
    }
    function i(t) {
      return Math.round(parseFloat(t));
    }
    var s,
      o,
      r,
      a,
      l,
      h = n.createElement("div"),
      c = n.createElement("div");
    c.style &&
      ((c.style.backgroundClip = "content-box"),
      (c.cloneNode(!0).style.backgroundClip = ""),
      (f.clearCloneStyle = "content-box" === c.style.backgroundClip),
      b.extend(f, {
        boxSizingReliable: function () {
          return e(), o;
        },
        pixelBoxStyles: function () {
          return e(), a;
        },
        pixelPosition: function () {
          return e(), s;
        },
        reliableMarginLeft: function () {
          return e(), l;
        },
        scrollboxSize: function () {
          return e(), r;
        },
      }));
  })();
  var Ft = /^(none|table(?!-c[ea]).+)/,
    qt = /^--/,
    Bt = { position: "absolute", visibility: "hidden", display: "block" },
    $t = { letterSpacing: "0", fontWeight: "400" },
    Ut = ["Webkit", "Moz", "ms"],
    Yt = n.createElement("div").style;
  function Kt(t) {
    var e = b.cssProps[t];
    return (
      e ||
        (e = b.cssProps[t] =
          (function (t) {
            if (t in Yt) return t;
            for (var e = t[0].toUpperCase() + t.slice(1), i = Ut.length; i--; )
              if ((t = Ut[i] + e) in Yt) return t;
          })(t) || t),
      e
    );
  }
  function Vt(t, e, i) {
    var n = et.exec(e);
    return n ? Math.max(0, n[2] - (i || 0)) + (n[3] || "px") : e;
  }
  function Qt(t, e, i, n, s, o) {
    var r = "width" === e ? 1 : 0,
      a = 0,
      l = 0;
    if (i === (n ? "border" : "content")) return 0;
    for (; r < 4; r += 2)
      "margin" === i && (l += b.css(t, i + it[r], !0, s)),
        n
          ? ("content" === i && (l -= b.css(t, "padding" + it[r], !0, s)),
            "margin" !== i &&
              (l -= b.css(t, "border" + it[r] + "Width", !0, s)))
          : ((l += b.css(t, "padding" + it[r], !0, s)),
            "padding" !== i
              ? (l += b.css(t, "border" + it[r] + "Width", !0, s))
              : (a += b.css(t, "border" + it[r] + "Width", !0, s)));
    return (
      !n &&
        o >= 0 &&
        (l += Math.max(
          0,
          Math.ceil(
            t["offset" + e[0].toUpperCase() + e.slice(1)] - o - l - a - 0.5
          )
        )),
      l
    );
  }
  function Xt(t, e, i) {
    var n = Lt(t),
      s = jt(t, e, n),
      o = "border-box" === b.css(t, "boxSizing", !1, n),
      r = o;
    if (zt.test(s)) {
      if (!i) return s;
      s = "auto";
    }
    return (
      (r = r && (f.boxSizingReliable() || s === t.style[e])),
      ("auto" === s ||
        (!parseFloat(s) && "inline" === b.css(t, "display", !1, n))) &&
        ((s = t["offset" + e[0].toUpperCase() + e.slice(1)]), (r = !0)),
      (s = parseFloat(s) || 0) +
        Qt(t, e, i || (o ? "border" : "content"), r, n, s) +
        "px"
    );
  }
  function Gt(t, e, i, n, s) {
    return new Gt.prototype.init(t, e, i, n, s);
  }
  b.extend({
    cssHooks: {
      opacity: {
        get: function (t, e) {
          if (e) {
            var i = jt(t, "opacity");
            return "" === i ? "1" : i;
          }
        },
      },
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
    },
    cssProps: {},
    style: function (t, e, i, n) {
      if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
        var s,
          o,
          r,
          a = Y(e),
          l = qt.test(e),
          h = t.style;
        if (
          (l || (e = Kt(a)), (r = b.cssHooks[e] || b.cssHooks[a]), void 0 === i)
        )
          return r && "get" in r && void 0 !== (s = r.get(t, !1, n)) ? s : h[e];
        "string" == (o = typeof i) &&
          (s = et.exec(i)) &&
          s[1] &&
          ((i = ot(t, e, s)), (o = "number")),
          null != i &&
            i == i &&
            ("number" === o &&
              (i += (s && s[3]) || (b.cssNumber[a] ? "" : "px")),
            f.clearCloneStyle ||
              "" !== i ||
              0 !== e.indexOf("background") ||
              (h[e] = "inherit"),
            (r && "set" in r && void 0 === (i = r.set(t, i, n))) ||
              (l ? h.setProperty(e, i) : (h[e] = i)));
      }
    },
    css: function (t, e, i, n) {
      var s,
        o,
        r,
        a = Y(e);
      return (
        qt.test(e) || (e = Kt(a)),
        (r = b.cssHooks[e] || b.cssHooks[a]) &&
          "get" in r &&
          (s = r.get(t, !0, i)),
        void 0 === s && (s = jt(t, e, n)),
        "normal" === s && e in $t && (s = $t[e]),
        "" === i || i
          ? ((o = parseFloat(s)), !0 === i || isFinite(o) ? o || 0 : s)
          : s
      );
    },
  }),
    b.each(["height", "width"], function (t, e) {
      b.cssHooks[e] = {
        get: function (t, i, n) {
          if (i)
            return !Ft.test(b.css(t, "display")) ||
              (t.getClientRects().length && t.getBoundingClientRect().width)
              ? Xt(t, e, n)
              : st(t, Bt, function () {
                  return Xt(t, e, n);
                });
        },
        set: function (t, i, n) {
          var s,
            o = Lt(t),
            r = "border-box" === b.css(t, "boxSizing", !1, o),
            a = n && Qt(t, e, n, r, o);
          return (
            r &&
              f.scrollboxSize() === o.position &&
              (a -= Math.ceil(
                t["offset" + e[0].toUpperCase() + e.slice(1)] -
                  parseFloat(o[e]) -
                  Qt(t, e, "border", !1, o) -
                  0.5
              )),
            a &&
              (s = et.exec(i)) &&
              "px" !== (s[3] || "px") &&
              ((t.style[e] = i), (i = b.css(t, e))),
            Vt(0, i, a)
          );
        },
      };
    }),
    (b.cssHooks.marginLeft = Rt(f.reliableMarginLeft, function (t, e) {
      if (e)
        return (
          (parseFloat(jt(t, "marginLeft")) ||
            t.getBoundingClientRect().left -
              st(t, { marginLeft: 0 }, function () {
                return t.getBoundingClientRect().left;
              })) + "px"
        );
    })),
    b.each({ margin: "", padding: "", border: "Width" }, function (t, e) {
      (b.cssHooks[t + e] = {
        expand: function (i) {
          for (
            var n = 0, s = {}, o = "string" == typeof i ? i.split(" ") : [i];
            n < 4;
            n++
          )
            s[t + it[n] + e] = o[n] || o[n - 2] || o[0];
          return s;
        },
      }),
        "margin" !== t && (b.cssHooks[t + e].set = Vt);
    }),
    b.fn.extend({
      css: function (t, e) {
        return q(
          this,
          function (t, e, i) {
            var n,
              s,
              o = {},
              r = 0;
            if (Array.isArray(e)) {
              for (n = Lt(t), s = e.length; r < s; r++)
                o[e[r]] = b.css(t, e[r], !1, n);
              return o;
            }
            return void 0 !== i ? b.style(t, e, i) : b.css(t, e);
          },
          t,
          e,
          arguments.length > 1
        );
      },
    }),
    (b.Tween = Gt),
    (Gt.prototype = {
      constructor: Gt,
      init: function (t, e, i, n, s, o) {
        (this.elem = t),
          (this.prop = i),
          (this.easing = s || b.easing._default),
          (this.options = e),
          (this.start = this.now = this.cur()),
          (this.end = n),
          (this.unit = o || (b.cssNumber[i] ? "" : "px"));
      },
      cur: function () {
        var t = Gt.propHooks[this.prop];
        return t && t.get ? t.get(this) : Gt.propHooks._default.get(this);
      },
      run: function (t) {
        var e,
          i = Gt.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = e =
                b.easing[this.easing](
                  t,
                  this.options.duration * t,
                  0,
                  1,
                  this.options.duration
                ))
            : (this.pos = e = t),
          (this.now = (this.end - this.start) * e + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          i && i.set ? i.set(this) : Gt.propHooks._default.set(this),
          this
        );
      },
    }),
    (Gt.prototype.init.prototype = Gt.prototype),
    (Gt.propHooks = {
      _default: {
        get: function (t) {
          var e;
          return 1 !== t.elem.nodeType ||
            (null != t.elem[t.prop] && null == t.elem.style[t.prop])
            ? t.elem[t.prop]
            : (e = b.css(t.elem, t.prop, "")) && "auto" !== e
            ? e
            : 0;
        },
        set: function (t) {
          b.fx.step[t.prop]
            ? b.fx.step[t.prop](t)
            : 1 !== t.elem.nodeType ||
              (null == t.elem.style[b.cssProps[t.prop]] && !b.cssHooks[t.prop])
            ? (t.elem[t.prop] = t.now)
            : b.style(t.elem, t.prop, t.now + t.unit);
        },
      },
    }),
    (Gt.propHooks.scrollTop = Gt.propHooks.scrollLeft =
      {
        set: function (t) {
          t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now);
        },
      }),
    (b.easing = {
      linear: function (t) {
        return t;
      },
      swing: function (t) {
        return 0.5 - Math.cos(t * Math.PI) / 2;
      },
      _default: "swing",
    }),
    (b.fx = Gt.prototype.init),
    (b.fx.step = {});
  var Zt,
    Jt,
    te = /^(?:toggle|show|hide)$/,
    ee = /queueHooks$/;
  function ie() {
    Jt &&
      (!1 === n.hidden && t.requestAnimationFrame
        ? t.requestAnimationFrame(ie)
        : t.setTimeout(ie, b.fx.interval),
      b.fx.tick());
  }
  function ne() {
    return (
      t.setTimeout(function () {
        Zt = void 0;
      }),
      (Zt = Date.now())
    );
  }
  function se(t, e) {
    var i,
      n = 0,
      s = { height: t };
    for (e = e ? 1 : 0; n < 4; n += 2 - e)
      s["margin" + (i = it[n])] = s["padding" + i] = t;
    return e && (s.opacity = s.width = t), s;
  }
  function oe(t, e, i) {
    for (
      var n,
        s = (re.tweeners[e] || []).concat(re.tweeners["*"]),
        o = 0,
        r = s.length;
      o < r;
      o++
    )
      if ((n = s[o].call(i, e, t))) return n;
  }
  function re(t, e, i) {
    var n,
      s,
      o = 0,
      r = re.prefilters.length,
      a = b.Deferred().always(function () {
        delete l.elem;
      }),
      l = function () {
        if (s) return !1;
        for (
          var e = Zt || ne(),
            i = Math.max(0, h.startTime + h.duration - e),
            n = 1 - (i / h.duration || 0),
            o = 0,
            r = h.tweens.length;
          o < r;
          o++
        )
          h.tweens[o].run(n);
        return (
          a.notifyWith(t, [h, n, i]),
          n < 1 && r
            ? i
            : (r || a.notifyWith(t, [h, 1, 0]), a.resolveWith(t, [h]), !1)
        );
      },
      h = a.promise({
        elem: t,
        props: b.extend({}, e),
        opts: b.extend(!0, { specialEasing: {}, easing: b.easing._default }, i),
        originalProperties: e,
        originalOptions: i,
        startTime: Zt || ne(),
        duration: i.duration,
        tweens: [],
        createTween: function (e, i) {
          var n = b.Tween(
            t,
            h.opts,
            e,
            i,
            h.opts.specialEasing[e] || h.opts.easing
          );
          return h.tweens.push(n), n;
        },
        stop: function (e) {
          var i = 0,
            n = e ? h.tweens.length : 0;
          if (s) return this;
          for (s = !0; i < n; i++) h.tweens[i].run(1);
          return (
            e
              ? (a.notifyWith(t, [h, 1, 0]), a.resolveWith(t, [h, e]))
              : a.rejectWith(t, [h, e]),
            this
          );
        },
      }),
      c = h.props;
    for (
      (function (t, e) {
        var i, n, s, o, r;
        for (i in t)
          if (
            ((s = e[(n = Y(i))]),
            (o = t[i]),
            Array.isArray(o) && ((s = o[1]), (o = t[i] = o[0])),
            i !== n && ((t[n] = o), delete t[i]),
            (r = b.cssHooks[n]) && ("expand" in r))
          )
            for (i in ((o = r.expand(o)), delete t[n], o))
              (i in t) || ((t[i] = o[i]), (e[i] = s));
          else e[n] = s;
      })(c, h.opts.specialEasing);
      o < r;
      o++
    )
      if ((n = re.prefilters[o].call(h, t, c, h.opts)))
        return (
          g(n.stop) &&
            (b._queueHooks(h.elem, h.opts.queue).stop = n.stop.bind(n)),
          n
        );
    return (
      b.map(c, oe, h),
      g(h.opts.start) && h.opts.start.call(t, h),
      h
        .progress(h.opts.progress)
        .done(h.opts.done, h.opts.complete)
        .fail(h.opts.fail)
        .always(h.opts.always),
      b.fx.timer(b.extend(l, { elem: t, anim: h, queue: h.opts.queue })),
      h
    );
  }
  (b.Animation = b.extend(re, {
    tweeners: {
      "*": [
        function (t, e) {
          var i = this.createTween(t, e);
          return ot(i.elem, t, et.exec(e), i), i;
        },
      ],
    },
    tweener: function (t, e) {
      g(t) ? ((e = t), (t = ["*"])) : (t = t.match(H));
      for (var i, n = 0, s = t.length; n < s; n++)
        (i = t[n]),
          (re.tweeners[i] = re.tweeners[i] || []),
          re.tweeners[i].unshift(e);
    },
    prefilters: [
      function (t, e, i) {
        var n,
          s,
          o,
          r,
          a,
          l,
          h,
          c,
          u = "width" in e || "height" in e,
          d = this,
          p = {},
          f = t.style,
          g = t.nodeType && nt(t),
          m = Q.get(t, "fxshow");
        for (n in (i.queue ||
          (null == (r = b._queueHooks(t, "fx")).unqueued &&
            ((r.unqueued = 0),
            (a = r.empty.fire),
            (r.empty.fire = function () {
              r.unqueued || a();
            })),
          r.unqueued++,
          d.always(function () {
            d.always(function () {
              r.unqueued--, b.queue(t, "fx").length || r.empty.fire();
            });
          })),
        e))
          if (((s = e[n]), te.test(s))) {
            if (
              (delete e[n],
              (o = o || "toggle" === s),
              s === (g ? "hide" : "show"))
            ) {
              if ("show" !== s || !m || void 0 === m[n]) continue;
              g = !0;
            }
            p[n] = (m && m[n]) || b.style(t, n);
          }
        if ((l = !b.isEmptyObject(e)) || !b.isEmptyObject(p))
          for (n in (u &&
            1 === t.nodeType &&
            ((i.overflow = [f.overflow, f.overflowX, f.overflowY]),
            null == (h = m && m.display) && (h = Q.get(t, "display")),
            "none" === (c = b.css(t, "display")) &&
              (h
                ? (c = h)
                : (lt([t], !0),
                  (h = t.style.display || h),
                  (c = b.css(t, "display")),
                  lt([t]))),
            ("inline" === c || ("inline-block" === c && null != h)) &&
              "none" === b.css(t, "float") &&
              (l ||
                (d.done(function () {
                  f.display = h;
                }),
                null == h && ((c = f.display), (h = "none" === c ? "" : c))),
              (f.display = "inline-block"))),
          i.overflow &&
            ((f.overflow = "hidden"),
            d.always(function () {
              (f.overflow = i.overflow[0]),
                (f.overflowX = i.overflow[1]),
                (f.overflowY = i.overflow[2]);
            })),
          (l = !1),
          p))
            l ||
              (m
                ? "hidden" in m && (g = m.hidden)
                : (m = Q.access(t, "fxshow", { display: h })),
              o && (m.hidden = !g),
              g && lt([t], !0),
              d.done(function () {
                for (n in (g || lt([t]), Q.remove(t, "fxshow"), p))
                  b.style(t, n, p[n]);
              })),
              (l = oe(g ? m[n] : 0, n, d)),
              n in m ||
                ((m[n] = l.start), g && ((l.end = l.start), (l.start = 0)));
      },
    ],
    prefilter: function (t, e) {
      e ? re.prefilters.unshift(t) : re.prefilters.push(t);
    },
  })),
    (b.speed = function (t, e, i) {
      var n =
        t && "object" == typeof t
          ? b.extend({}, t)
          : {
              complete: i || (!i && e) || (g(t) && t),
              duration: t,
              easing: (i && e) || (e && !g(e) && e),
            };
      return (
        b.fx.off
          ? (n.duration = 0)
          : "number" != typeof n.duration &&
            (n.duration in b.fx.speeds
              ? (n.duration = b.fx.speeds[n.duration])
              : (n.duration = b.fx.speeds._default)),
        (null != n.queue && !0 !== n.queue) || (n.queue = "fx"),
        (n.old = n.complete),
        (n.complete = function () {
          g(n.old) && n.old.call(this), n.queue && b.dequeue(this, n.queue);
        }),
        n
      );
    }),
    b.fn.extend({
      fadeTo: function (t, e, i, n) {
        return this.filter(nt)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: e }, t, i, n);
      },
      animate: function (t, e, i, n) {
        var s = b.isEmptyObject(t),
          o = b.speed(e, i, n),
          r = function () {
            var e = re(this, b.extend({}, t), o);
            (s || Q.get(this, "finish")) && e.stop(!0);
          };
        return (
          (r.finish = r),
          s || !1 === o.queue ? this.each(r) : this.queue(o.queue, r)
        );
      },
      stop: function (t, e, i) {
        var n = function (t) {
          var e = t.stop;
          delete t.stop, e(i);
        };
        return (
          "string" != typeof t && ((i = e), (e = t), (t = void 0)),
          e && !1 !== t && this.queue(t || "fx", []),
          this.each(function () {
            var e = !0,
              s = null != t && t + "queueHooks",
              o = b.timers,
              r = Q.get(this);
            if (s) r[s] && r[s].stop && n(r[s]);
            else for (s in r) r[s] && r[s].stop && ee.test(s) && n(r[s]);
            for (s = o.length; s--; )
              o[s].elem !== this ||
                (null != t && o[s].queue !== t) ||
                (o[s].anim.stop(i), (e = !1), o.splice(s, 1));
            (!e && i) || b.dequeue(this, t);
          })
        );
      },
      finish: function (t) {
        return (
          !1 !== t && (t = t || "fx"),
          this.each(function () {
            var e,
              i = Q.get(this),
              n = i[t + "queue"],
              s = i[t + "queueHooks"],
              o = b.timers,
              r = n ? n.length : 0;
            for (
              i.finish = !0,
                b.queue(this, t, []),
                s && s.stop && s.stop.call(this, !0),
                e = o.length;
              e--;

            )
              o[e].elem === this &&
                o[e].queue === t &&
                (o[e].anim.stop(!0), o.splice(e, 1));
            for (e = 0; e < r; e++)
              n[e] && n[e].finish && n[e].finish.call(this);
            delete i.finish;
          })
        );
      },
    }),
    b.each(["toggle", "show", "hide"], function (t, e) {
      var i = b.fn[e];
      b.fn[e] = function (t, n, s) {
        return null == t || "boolean" == typeof t
          ? i.apply(this, arguments)
          : this.animate(se(e, !0), t, n, s);
      };
    }),
    b.each(
      {
        slideDown: se("show"),
        slideUp: se("hide"),
        slideToggle: se("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (t, e) {
        b.fn[t] = function (t, i, n) {
          return this.animate(e, t, i, n);
        };
      }
    ),
    (b.timers = []),
    (b.fx.tick = function () {
      var t,
        e = 0,
        i = b.timers;
      for (Zt = Date.now(); e < i.length; e++)
        (t = i[e])() || i[e] !== t || i.splice(e--, 1);
      i.length || b.fx.stop(), (Zt = void 0);
    }),
    (b.fx.timer = function (t) {
      b.timers.push(t), b.fx.start();
    }),
    (b.fx.interval = 13),
    (b.fx.start = function () {
      Jt || ((Jt = !0), ie());
    }),
    (b.fx.stop = function () {
      Jt = null;
    }),
    (b.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (b.fn.delay = function (e, i) {
      return (
        (e = (b.fx && b.fx.speeds[e]) || e),
        (i = i || "fx"),
        this.queue(i, function (i, n) {
          var s = t.setTimeout(i, e);
          n.stop = function () {
            t.clearTimeout(s);
          };
        })
      );
    }),
    (function () {
      var t = n.createElement("input"),
        e = n.createElement("select").appendChild(n.createElement("option"));
      (t.type = "checkbox"),
        (f.checkOn = "" !== t.value),
        (f.optSelected = e.selected),
        ((t = n.createElement("input")).value = "t"),
        (t.type = "radio"),
        (f.radioValue = "t" === t.value);
    })();
  var ae,
    le = b.expr.attrHandle;
  b.fn.extend({
    attr: function (t, e) {
      return q(this, b.attr, t, e, arguments.length > 1);
    },
    removeAttr: function (t) {
      return this.each(function () {
        b.removeAttr(this, t);
      });
    },
  }),
    b.extend({
      attr: function (t, e, i) {
        var n,
          s,
          o = t.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return void 0 === t.getAttribute
            ? b.prop(t, e, i)
            : ((1 === o && b.isXMLDoc(t)) ||
                (s =
                  b.attrHooks[e.toLowerCase()] ||
                  (b.expr.match.bool.test(e) ? ae : void 0)),
              void 0 !== i
                ? null === i
                  ? void b.removeAttr(t, e)
                  : s && "set" in s && void 0 !== (n = s.set(t, i, e))
                  ? n
                  : (t.setAttribute(e, i + ""), i)
                : s && "get" in s && null !== (n = s.get(t, e))
                ? n
                : null == (n = b.find.attr(t, e))
                ? void 0
                : n);
      },
      attrHooks: {
        type: {
          set: function (t, e) {
            if (!f.radioValue && "radio" === e && S(t, "input")) {
              var i = t.value;
              return t.setAttribute("type", e), i && (t.value = i), e;
            }
          },
        },
      },
      removeAttr: function (t, e) {
        var i,
          n = 0,
          s = e && e.match(H);
        if (s && 1 === t.nodeType) for (; (i = s[n++]); ) t.removeAttribute(i);
      },
    }),
    (ae = {
      set: function (t, e, i) {
        return !1 === e ? b.removeAttr(t, i) : t.setAttribute(i, i), i;
      },
    }),
    b.each(b.expr.match.bool.source.match(/\w+/g), function (t, e) {
      var i = le[e] || b.find.attr;
      le[e] = function (t, e, n) {
        var s,
          o,
          r = e.toLowerCase();
        return (
          n ||
            ((o = le[r]),
            (le[r] = s),
            (s = null != i(t, e, n) ? r : null),
            (le[r] = o)),
          s
        );
      };
    });
  var he = /^(?:input|select|textarea|button)$/i,
    ce = /^(?:a|area)$/i;
  function ue(t) {
    return (t.match(H) || []).join(" ");
  }
  function de(t) {
    return (t.getAttribute && t.getAttribute("class")) || "";
  }
  function pe(t) {
    return Array.isArray(t) ? t : ("string" == typeof t && t.match(H)) || [];
  }
  b.fn.extend({
    prop: function (t, e) {
      return q(this, b.prop, t, e, arguments.length > 1);
    },
    removeProp: function (t) {
      return this.each(function () {
        delete this[b.propFix[t] || t];
      });
    },
  }),
    b.extend({
      prop: function (t, e, i) {
        var n,
          s,
          o = t.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return (
            (1 === o && b.isXMLDoc(t)) ||
              ((e = b.propFix[e] || e), (s = b.propHooks[e])),
            void 0 !== i
              ? s && "set" in s && void 0 !== (n = s.set(t, i, e))
                ? n
                : (t[e] = i)
              : s && "get" in s && null !== (n = s.get(t, e))
              ? n
              : t[e]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (t) {
            var e = b.find.attr(t, "tabindex");
            return e
              ? parseInt(e, 10)
              : he.test(t.nodeName) || (ce.test(t.nodeName) && t.href)
              ? 0
              : -1;
          },
        },
      },
      propFix: { for: "htmlFor", class: "className" },
    }),
    f.optSelected ||
      (b.propHooks.selected = {
        get: function (t) {
          var e = t.parentNode;
          return e && e.parentNode && e.parentNode.selectedIndex, null;
        },
        set: function (t) {
          var e = t.parentNode;
          e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex);
        },
      }),
    b.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable",
      ],
      function () {
        b.propFix[this.toLowerCase()] = this;
      }
    ),
    b.fn.extend({
      addClass: function (t) {
        var e,
          i,
          n,
          s,
          o,
          r,
          a,
          l = 0;
        if (g(t))
          return this.each(function (e) {
            b(this).addClass(t.call(this, e, de(this)));
          });
        if ((e = pe(t)).length)
          for (; (i = this[l++]); )
            if (((s = de(i)), (n = 1 === i.nodeType && " " + ue(s) + " "))) {
              for (r = 0; (o = e[r++]); )
                n.indexOf(" " + o + " ") < 0 && (n += o + " ");
              s !== (a = ue(n)) && i.setAttribute("class", a);
            }
        return this;
      },
      removeClass: function (t) {
        var e,
          i,
          n,
          s,
          o,
          r,
          a,
          l = 0;
        if (g(t))
          return this.each(function (e) {
            b(this).removeClass(t.call(this, e, de(this)));
          });
        if (!arguments.length) return this.attr("class", "");
        if ((e = pe(t)).length)
          for (; (i = this[l++]); )
            if (((s = de(i)), (n = 1 === i.nodeType && " " + ue(s) + " "))) {
              for (r = 0; (o = e[r++]); )
                for (; n.indexOf(" " + o + " ") > -1; )
                  n = n.replace(" " + o + " ", " ");
              s !== (a = ue(n)) && i.setAttribute("class", a);
            }
        return this;
      },
      toggleClass: function (t, e) {
        var i = typeof t,
          n = "string" === i || Array.isArray(t);
        return "boolean" == typeof e && n
          ? e
            ? this.addClass(t)
            : this.removeClass(t)
          : g(t)
          ? this.each(function (i) {
              b(this).toggleClass(t.call(this, i, de(this), e), e);
            })
          : this.each(function () {
              var e, s, o, r;
              if (n)
                for (s = 0, o = b(this), r = pe(t); (e = r[s++]); )
                  o.hasClass(e) ? o.removeClass(e) : o.addClass(e);
              else
                (void 0 !== t && "boolean" !== i) ||
                  ((e = de(this)) && Q.set(this, "__className__", e),
                  this.setAttribute &&
                    this.setAttribute(
                      "class",
                      e || !1 === t ? "" : Q.get(this, "__className__") || ""
                    ));
            });
      },
      hasClass: function (t) {
        var e,
          i,
          n = 0;
        for (e = " " + t + " "; (i = this[n++]); )
          if (1 === i.nodeType && (" " + ue(de(i)) + " ").indexOf(e) > -1)
            return !0;
        return !1;
      },
    });
  var fe = /\r/g;
  b.fn.extend({
    val: function (t) {
      var e,
        i,
        n,
        s = this[0];
      return arguments.length
        ? ((n = g(t)),
          this.each(function (i) {
            var s;
            1 === this.nodeType &&
              (null == (s = n ? t.call(this, i, b(this).val()) : t)
                ? (s = "")
                : "number" == typeof s
                ? (s += "")
                : Array.isArray(s) &&
                  (s = b.map(s, function (t) {
                    return null == t ? "" : t + "";
                  })),
              ((e =
                b.valHooks[this.type] ||
                b.valHooks[this.nodeName.toLowerCase()]) &&
                "set" in e &&
                void 0 !== e.set(this, s, "value")) ||
                (this.value = s));
          }))
        : s
        ? (e = b.valHooks[s.type] || b.valHooks[s.nodeName.toLowerCase()]) &&
          "get" in e &&
          void 0 !== (i = e.get(s, "value"))
          ? i
          : "string" == typeof (i = s.value)
          ? i.replace(fe, "")
          : null == i
          ? ""
          : i
        : void 0;
    },
  }),
    b.extend({
      valHooks: {
        option: {
          get: function (t) {
            var e = b.find.attr(t, "value");
            return null != e ? e : ue(b.text(t));
          },
        },
        select: {
          get: function (t) {
            var e,
              i,
              n,
              s = t.options,
              o = t.selectedIndex,
              r = "select-one" === t.type,
              a = r ? null : [],
              l = r ? o + 1 : s.length;
            for (n = o < 0 ? l : r ? o : 0; n < l; n++)
              if (
                ((i = s[n]).selected || n === o) &&
                !i.disabled &&
                (!i.parentNode.disabled || !S(i.parentNode, "optgroup"))
              ) {
                if (((e = b(i).val()), r)) return e;
                a.push(e);
              }
            return a;
          },
          set: function (t, e) {
            for (
              var i, n, s = t.options, o = b.makeArray(e), r = s.length;
              r--;

            )
              ((n = s[r]).selected =
                b.inArray(b.valHooks.option.get(n), o) > -1) && (i = !0);
            return i || (t.selectedIndex = -1), o;
          },
        },
      },
    }),
    b.each(["radio", "checkbox"], function () {
      (b.valHooks[this] = {
        set: function (t, e) {
          if (Array.isArray(e))
            return (t.checked = b.inArray(b(t).val(), e) > -1);
        },
      }),
        f.checkOn ||
          (b.valHooks[this].get = function (t) {
            return null === t.getAttribute("value") ? "on" : t.value;
          });
    }),
    (f.focusin = "onfocusin" in t);
  var ge = /^(?:focusinfocus|focusoutblur)$/,
    me = function (t) {
      t.stopPropagation();
    };
  b.extend(b.event, {
    trigger: function (e, i, s, o) {
      var r,
        a,
        l,
        h,
        c,
        d,
        p,
        f,
        v = [s || n],
        _ = u.call(e, "type") ? e.type : e,
        y = u.call(e, "namespace") ? e.namespace.split(".") : [];
      if (
        ((a = f = l = s = s || n),
        3 !== s.nodeType &&
          8 !== s.nodeType &&
          !ge.test(_ + b.event.triggered) &&
          (_.indexOf(".") > -1 && ((_ = (y = _.split(".")).shift()), y.sort()),
          (c = _.indexOf(":") < 0 && "on" + _),
          ((e = e[b.expando]
            ? e
            : new b.Event(_, "object" == typeof e && e)).isTrigger = o ? 2 : 3),
          (e.namespace = y.join(".")),
          (e.rnamespace = e.namespace
            ? new RegExp("(^|\\.)" + y.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (e.result = void 0),
          e.target || (e.target = s),
          (i = null == i ? [e] : b.makeArray(i, [e])),
          (p = b.event.special[_] || {}),
          o || !p.trigger || !1 !== p.trigger.apply(s, i)))
      ) {
        if (!o && !p.noBubble && !m(s)) {
          for (
            h = p.delegateType || _, ge.test(h + _) || (a = a.parentNode);
            a;
            a = a.parentNode
          )
            v.push(a), (l = a);
          l === (s.ownerDocument || n) &&
            v.push(l.defaultView || l.parentWindow || t);
        }
        for (r = 0; (a = v[r++]) && !e.isPropagationStopped(); )
          (f = a),
            (e.type = r > 1 ? h : p.bindType || _),
            (d = (Q.get(a, "events") || {})[e.type] && Q.get(a, "handle")) &&
              d.apply(a, i),
            (d = c && a[c]) &&
              d.apply &&
              K(a) &&
              ((e.result = d.apply(a, i)),
              !1 === e.result && e.preventDefault());
        return (
          (e.type = _),
          o ||
            e.isDefaultPrevented() ||
            (p._default && !1 !== p._default.apply(v.pop(), i)) ||
            !K(s) ||
            (c &&
              g(s[_]) &&
              !m(s) &&
              ((l = s[c]) && (s[c] = null),
              (b.event.triggered = _),
              e.isPropagationStopped() && f.addEventListener(_, me),
              s[_](),
              e.isPropagationStopped() && f.removeEventListener(_, me),
              (b.event.triggered = void 0),
              l && (s[c] = l))),
          e.result
        );
      }
    },
    simulate: function (t, e, i) {
      var n = b.extend(new b.Event(), i, { type: t, isSimulated: !0 });
      b.event.trigger(n, null, e);
    },
  }),
    b.fn.extend({
      trigger: function (t, e) {
        return this.each(function () {
          b.event.trigger(t, e, this);
        });
      },
      triggerHandler: function (t, e) {
        var i = this[0];
        if (i) return b.event.trigger(t, e, i, !0);
      },
    }),
    f.focusin ||
      b.each({ focus: "focusin", blur: "focusout" }, function (t, e) {
        var i = function (t) {
          b.event.simulate(e, t.target, b.event.fix(t));
        };
        b.event.special[e] = {
          setup: function () {
            var n = this.ownerDocument || this,
              s = Q.access(n, e);
            s || n.addEventListener(t, i, !0), Q.access(n, e, (s || 0) + 1);
          },
          teardown: function () {
            var n = this.ownerDocument || this,
              s = Q.access(n, e) - 1;
            s
              ? Q.access(n, e, s)
              : (n.removeEventListener(t, i, !0), Q.remove(n, e));
          },
        };
      });
  var ve = t.location,
    _e = Date.now(),
    ye = /\?/;
  b.parseXML = function (e) {
    var i;
    if (!e || "string" != typeof e) return null;
    try {
      i = new t.DOMParser().parseFromString(e, "text/xml");
    } catch (t) {
      i = void 0;
    }
    return (
      (i && !i.getElementsByTagName("parsererror").length) ||
        b.error("Invalid XML: " + e),
      i
    );
  };
  var be = /\[\]$/,
    we = /\r?\n/g,
    xe = /^(?:submit|button|image|reset|file)$/i,
    Ce = /^(?:input|select|textarea|keygen)/i;
  function ke(t, e, i, n) {
    var s;
    if (Array.isArray(e))
      b.each(e, function (e, s) {
        i || be.test(t)
          ? n(t, s)
          : ke(
              t + "[" + ("object" == typeof s && null != s ? e : "") + "]",
              s,
              i,
              n
            );
      });
    else if (i || "object" !== y(e)) n(t, e);
    else for (s in e) ke(t + "[" + s + "]", e[s], i, n);
  }
  (b.param = function (t, e) {
    var i,
      n = [],
      s = function (t, e) {
        var i = g(e) ? e() : e;
        n[n.length] =
          encodeURIComponent(t) + "=" + encodeURIComponent(null == i ? "" : i);
      };
    if (Array.isArray(t) || (t.jquery && !b.isPlainObject(t)))
      b.each(t, function () {
        s(this.name, this.value);
      });
    else for (i in t) ke(i, t[i], e, s);
    return n.join("&");
  }),
    b.fn.extend({
      serialize: function () {
        return b.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var t = b.prop(this, "elements");
          return t ? b.makeArray(t) : this;
        })
          .filter(function () {
            var t = this.type;
            return (
              this.name &&
              !b(this).is(":disabled") &&
              Ce.test(this.nodeName) &&
              !xe.test(t) &&
              (this.checked || !ht.test(t))
            );
          })
          .map(function (t, e) {
            var i = b(this).val();
            return null == i
              ? null
              : Array.isArray(i)
              ? b.map(i, function (t) {
                  return { name: e.name, value: t.replace(we, "\r\n") };
                })
              : { name: e.name, value: i.replace(we, "\r\n") };
          })
          .get();
      },
    });
  var Te = /%20/g,
    De = /#.*$/,
    Se = /([?&])_=[^&]*/,
    Ee = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    Ie = /^(?:GET|HEAD)$/,
    Ae = /^\/\//,
    Pe = {},
    Oe = {},
    Ne = "*/".concat("*"),
    Me = n.createElement("a");
  function He(t) {
    return function (e, i) {
      "string" != typeof e && ((i = e), (e = "*"));
      var n,
        s = 0,
        o = e.toLowerCase().match(H) || [];
      if (g(i))
        for (; (n = o[s++]); )
          "+" === n[0]
            ? ((n = n.slice(1) || "*"), (t[n] = t[n] || []).unshift(i))
            : (t[n] = t[n] || []).push(i);
    };
  }
  function ze(t, e, i, n) {
    var s = {},
      o = t === Oe;
    function r(a) {
      var l;
      return (
        (s[a] = !0),
        b.each(t[a] || [], function (t, a) {
          var h = a(e, i, n);
          return "string" != typeof h || o || s[h]
            ? o
              ? !(l = h)
              : void 0
            : (e.dataTypes.unshift(h), r(h), !1);
        }),
        l
      );
    }
    return r(e.dataTypes[0]) || (!s["*"] && r("*"));
  }
  function Le(t, e) {
    var i,
      n,
      s = b.ajaxSettings.flatOptions || {};
    for (i in e) void 0 !== e[i] && ((s[i] ? t : n || (n = {}))[i] = e[i]);
    return n && b.extend(!0, t, n), t;
  }
  (Me.href = ve.href),
    b.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: ve.href,
        type: "GET",
        isLocal:
          /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
            ve.protocol
          ),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": Ne,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript",
        },
        contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON",
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": JSON.parse,
          "text xml": b.parseXML,
        },
        flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup: function (t, e) {
        return e ? Le(Le(t, b.ajaxSettings), e) : Le(b.ajaxSettings, t);
      },
      ajaxPrefilter: He(Pe),
      ajaxTransport: He(Oe),
      ajax: function (e, i) {
        "object" == typeof e && ((i = e), (e = void 0)), (i = i || {});
        var s,
          o,
          r,
          a,
          l,
          h,
          c,
          u,
          d,
          p,
          f = b.ajaxSetup({}, i),
          g = f.context || f,
          m = f.context && (g.nodeType || g.jquery) ? b(g) : b.event,
          v = b.Deferred(),
          _ = b.Callbacks("once memory"),
          y = f.statusCode || {},
          w = {},
          x = {},
          C = "canceled",
          k = {
            readyState: 0,
            getResponseHeader: function (t) {
              var e;
              if (c) {
                if (!a)
                  for (a = {}; (e = Ee.exec(r)); ) a[e[1].toLowerCase()] = e[2];
                e = a[t.toLowerCase()];
              }
              return null == e ? null : e;
            },
            getAllResponseHeaders: function () {
              return c ? r : null;
            },
            setRequestHeader: function (t, e) {
              return (
                null == c &&
                  ((t = x[t.toLowerCase()] = x[t.toLowerCase()] || t),
                  (w[t] = e)),
                this
              );
            },
            overrideMimeType: function (t) {
              return null == c && (f.mimeType = t), this;
            },
            statusCode: function (t) {
              var e;
              if (t)
                if (c) k.always(t[k.status]);
                else for (e in t) y[e] = [y[e], t[e]];
              return this;
            },
            abort: function (t) {
              var e = t || C;
              return s && s.abort(e), T(0, e), this;
            },
          };
        if (
          (v.promise(k),
          (f.url = ((e || f.url || ve.href) + "").replace(
            Ae,
            ve.protocol + "//"
          )),
          (f.type = i.method || i.type || f.method || f.type),
          (f.dataTypes = (f.dataType || "*").toLowerCase().match(H) || [""]),
          null == f.crossDomain)
        ) {
          h = n.createElement("a");
          try {
            (h.href = f.url),
              (h.href = h.href),
              (f.crossDomain =
                Me.protocol + "//" + Me.host != h.protocol + "//" + h.host);
          } catch (t) {
            f.crossDomain = !0;
          }
        }
        if (
          (f.data &&
            f.processData &&
            "string" != typeof f.data &&
            (f.data = b.param(f.data, f.traditional)),
          ze(Pe, f, i, k),
          c)
        )
          return k;
        for (d in ((u = b.event && f.global) &&
          0 == b.active++ &&
          b.event.trigger("ajaxStart"),
        (f.type = f.type.toUpperCase()),
        (f.hasContent = !Ie.test(f.type)),
        (o = f.url.replace(De, "")),
        f.hasContent
          ? f.data &&
            f.processData &&
            0 ===
              (f.contentType || "").indexOf(
                "application/x-www-form-urlencoded"
              ) &&
            (f.data = f.data.replace(Te, "+"))
          : ((p = f.url.slice(o.length)),
            f.data &&
              (f.processData || "string" == typeof f.data) &&
              ((o += (ye.test(o) ? "&" : "?") + f.data), delete f.data),
            !1 === f.cache &&
              ((o = o.replace(Se, "$1")),
              (p = (ye.test(o) ? "&" : "?") + "_=" + _e++ + p)),
            (f.url = o + p)),
        f.ifModified &&
          (b.lastModified[o] &&
            k.setRequestHeader("If-Modified-Since", b.lastModified[o]),
          b.etag[o] && k.setRequestHeader("If-None-Match", b.etag[o])),
        ((f.data && f.hasContent && !1 !== f.contentType) || i.contentType) &&
          k.setRequestHeader("Content-Type", f.contentType),
        k.setRequestHeader(
          "Accept",
          f.dataTypes[0] && f.accepts[f.dataTypes[0]]
            ? f.accepts[f.dataTypes[0]] +
                ("*" !== f.dataTypes[0] ? ", " + Ne + "; q=0.01" : "")
            : f.accepts["*"]
        ),
        f.headers))
          k.setRequestHeader(d, f.headers[d]);
        if (f.beforeSend && (!1 === f.beforeSend.call(g, k, f) || c))
          return k.abort();
        if (
          ((C = "abort"),
          _.add(f.complete),
          k.done(f.success),
          k.fail(f.error),
          (s = ze(Oe, f, i, k)))
        ) {
          if (((k.readyState = 1), u && m.trigger("ajaxSend", [k, f]), c))
            return k;
          f.async &&
            f.timeout > 0 &&
            (l = t.setTimeout(function () {
              k.abort("timeout");
            }, f.timeout));
          try {
            (c = !1), s.send(w, T);
          } catch (t) {
            if (c) throw t;
            T(-1, t);
          }
        } else T(-1, "No Transport");
        function T(e, i, n, a) {
          var h,
            d,
            p,
            w,
            x,
            C = i;
          c ||
            ((c = !0),
            l && t.clearTimeout(l),
            (s = void 0),
            (r = a || ""),
            (k.readyState = e > 0 ? 4 : 0),
            (h = (e >= 200 && e < 300) || 304 === e),
            n &&
              (w = (function (t, e, i) {
                for (
                  var n, s, o, r, a = t.contents, l = t.dataTypes;
                  "*" === l[0];

                )
                  l.shift(),
                    void 0 === n &&
                      (n = t.mimeType || e.getResponseHeader("Content-Type"));
                if (n)
                  for (s in a)
                    if (a[s] && a[s].test(n)) {
                      l.unshift(s);
                      break;
                    }
                if (l[0] in i) o = l[0];
                else {
                  for (s in i) {
                    if (!l[0] || t.converters[s + " " + l[0]]) {
                      o = s;
                      break;
                    }
                    r || (r = s);
                  }
                  o = o || r;
                }
                if (o) return o !== l[0] && l.unshift(o), i[o];
              })(f, k, n)),
            (w = (function (t, e, i, n) {
              var s,
                o,
                r,
                a,
                l,
                h = {},
                c = t.dataTypes.slice();
              if (c[1])
                for (r in t.converters) h[r.toLowerCase()] = t.converters[r];
              for (o = c.shift(); o; )
                if (
                  (t.responseFields[o] && (i[t.responseFields[o]] = e),
                  !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)),
                  (l = o),
                  (o = c.shift()))
                )
                  if ("*" === o) o = l;
                  else if ("*" !== l && l !== o) {
                    if (!(r = h[l + " " + o] || h["* " + o]))
                      for (s in h)
                        if (
                          (a = s.split(" "))[1] === o &&
                          (r = h[l + " " + a[0]] || h["* " + a[0]])
                        ) {
                          !0 === r
                            ? (r = h[s])
                            : !0 !== h[s] && ((o = a[0]), c.unshift(a[1]));
                          break;
                        }
                    if (!0 !== r)
                      if (r && t.throws) e = r(e);
                      else
                        try {
                          e = r(e);
                        } catch (t) {
                          return {
                            state: "parsererror",
                            error: r
                              ? t
                              : "No conversion from " + l + " to " + o,
                          };
                        }
                  }
              return { state: "success", data: e };
            })(f, w, k, h)),
            h
              ? (f.ifModified &&
                  ((x = k.getResponseHeader("Last-Modified")) &&
                    (b.lastModified[o] = x),
                  (x = k.getResponseHeader("etag")) && (b.etag[o] = x)),
                204 === e || "HEAD" === f.type
                  ? (C = "nocontent")
                  : 304 === e
                  ? (C = "notmodified")
                  : ((C = w.state), (d = w.data), (h = !(p = w.error))))
              : ((p = C), (!e && C) || ((C = "error"), e < 0 && (e = 0))),
            (k.status = e),
            (k.statusText = (i || C) + ""),
            h ? v.resolveWith(g, [d, C, k]) : v.rejectWith(g, [k, C, p]),
            k.statusCode(y),
            (y = void 0),
            u && m.trigger(h ? "ajaxSuccess" : "ajaxError", [k, f, h ? d : p]),
            _.fireWith(g, [k, C]),
            u &&
              (m.trigger("ajaxComplete", [k, f]),
              --b.active || b.event.trigger("ajaxStop")));
        }
        return k;
      },
      getJSON: function (t, e, i) {
        return b.get(t, e, i, "json");
      },
      getScript: function (t, e) {
        return b.get(t, void 0, e, "script");
      },
    }),
    b.each(["get", "post"], function (t, e) {
      b[e] = function (t, i, n, s) {
        return (
          g(i) && ((s = s || n), (n = i), (i = void 0)),
          b.ajax(
            b.extend(
              { url: t, type: e, dataType: s, data: i, success: n },
              b.isPlainObject(t) && t
            )
          )
        );
      };
    }),
    (b._evalUrl = function (t) {
      return b.ajax({
        url: t,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        throws: !0,
      });
    }),
    b.fn.extend({
      wrapAll: function (t) {
        var e;
        return (
          this[0] &&
            (g(t) && (t = t.call(this[0])),
            (e = b(t, this[0].ownerDocument).eq(0).clone(!0)),
            this[0].parentNode && e.insertBefore(this[0]),
            e
              .map(function () {
                for (var t = this; t.firstElementChild; )
                  t = t.firstElementChild;
                return t;
              })
              .append(this)),
          this
        );
      },
      wrapInner: function (t) {
        return g(t)
          ? this.each(function (e) {
              b(this).wrapInner(t.call(this, e));
            })
          : this.each(function () {
              var e = b(this),
                i = e.contents();
              i.length ? i.wrapAll(t) : e.append(t);
            });
      },
      wrap: function (t) {
        var e = g(t);
        return this.each(function (i) {
          b(this).wrapAll(e ? t.call(this, i) : t);
        });
      },
      unwrap: function (t) {
        return (
          this.parent(t)
            .not("body")
            .each(function () {
              b(this).replaceWith(this.childNodes);
            }),
          this
        );
      },
    }),
    (b.expr.pseudos.hidden = function (t) {
      return !b.expr.pseudos.visible(t);
    }),
    (b.expr.pseudos.visible = function (t) {
      return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length);
    }),
    (b.ajaxSettings.xhr = function () {
      try {
        return new t.XMLHttpRequest();
      } catch (t) {}
    });
  var We = { 0: 200, 1223: 204 },
    je = b.ajaxSettings.xhr();
  (f.cors = !!je && "withCredentials" in je),
    (f.ajax = je = !!je),
    b.ajaxTransport(function (e) {
      var i, n;
      if (f.cors || (je && !e.crossDomain))
        return {
          send: function (s, o) {
            var r,
              a = e.xhr();
            if (
              (a.open(e.type, e.url, e.async, e.username, e.password),
              e.xhrFields)
            )
              for (r in e.xhrFields) a[r] = e.xhrFields[r];
            for (r in (e.mimeType &&
              a.overrideMimeType &&
              a.overrideMimeType(e.mimeType),
            e.crossDomain ||
              s["X-Requested-With"] ||
              (s["X-Requested-With"] = "XMLHttpRequest"),
            s))
              a.setRequestHeader(r, s[r]);
            (i = function (t) {
              return function () {
                i &&
                  ((i =
                    n =
                    a.onload =
                    a.onerror =
                    a.onabort =
                    a.ontimeout =
                    a.onreadystatechange =
                      null),
                  "abort" === t
                    ? a.abort()
                    : "error" === t
                    ? "number" != typeof a.status
                      ? o(0, "error")
                      : o(a.status, a.statusText)
                    : o(
                        We[a.status] || a.status,
                        a.statusText,
                        "text" !== (a.responseType || "text") ||
                          "string" != typeof a.responseText
                          ? { binary: a.response }
                          : { text: a.responseText },
                        a.getAllResponseHeaders()
                      ));
              };
            }),
              (a.onload = i()),
              (n = a.onerror = a.ontimeout = i("error")),
              void 0 !== a.onabort
                ? (a.onabort = n)
                : (a.onreadystatechange = function () {
                    4 === a.readyState &&
                      t.setTimeout(function () {
                        i && n();
                      });
                  }),
              (i = i("abort"));
            try {
              a.send((e.hasContent && e.data) || null);
            } catch (t) {
              if (i) throw t;
            }
          },
          abort: function () {
            i && i();
          },
        };
    }),
    b.ajaxPrefilter(function (t) {
      t.crossDomain && (t.contents.script = !1);
    }),
    b.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        "text script": function (t) {
          return b.globalEval(t), t;
        },
      },
    }),
    b.ajaxPrefilter("script", function (t) {
      void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET");
    }),
    b.ajaxTransport("script", function (t) {
      var e, i;
      if (t.crossDomain)
        return {
          send: function (s, o) {
            (e = b("<script>")
              .prop({ charset: t.scriptCharset, src: t.url })
              .on(
                "load error",
                (i = function (t) {
                  e.remove(),
                    (i = null),
                    t && o("error" === t.type ? 404 : 200, t.type);
                })
              )),
              n.head.appendChild(e[0]);
          },
          abort: function () {
            i && i();
          },
        };
    });
  var Re = [],
    Fe = /(=)\?(?=&|$)|\?\?/;
  b.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var t = Re.pop() || b.expando + "_" + _e++;
      return (this[t] = !0), t;
    },
  }),
    b.ajaxPrefilter("json jsonp", function (e, i, n) {
      var s,
        o,
        r,
        a =
          !1 !== e.jsonp &&
          (Fe.test(e.url)
            ? "url"
            : "string" == typeof e.data &&
              0 ===
                (e.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
              Fe.test(e.data) &&
              "data");
      if (a || "jsonp" === e.dataTypes[0])
        return (
          (s = e.jsonpCallback =
            g(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
          a
            ? (e[a] = e[a].replace(Fe, "$1" + s))
            : !1 !== e.jsonp &&
              (e.url += (ye.test(e.url) ? "&" : "?") + e.jsonp + "=" + s),
          (e.converters["script json"] = function () {
            return r || b.error(s + " was not called"), r[0];
          }),
          (e.dataTypes[0] = "json"),
          (o = t[s]),
          (t[s] = function () {
            r = arguments;
          }),
          n.always(function () {
            void 0 === o ? b(t).removeProp(s) : (t[s] = o),
              e[s] && ((e.jsonpCallback = i.jsonpCallback), Re.push(s)),
              r && g(o) && o(r[0]),
              (r = o = void 0);
          }),
          "script"
        );
    }),
    (f.createHTMLDocument = (function () {
      var t = n.implementation.createHTMLDocument("").body;
      return (
        (t.innerHTML = "<form></form><form></form>"), 2 === t.childNodes.length
      );
    })()),
    (b.parseHTML = function (t, e, i) {
      return "string" != typeof t
        ? []
        : ("boolean" == typeof e && ((i = e), (e = !1)),
          e ||
            (f.createHTMLDocument
              ? (((s = (e =
                  n.implementation.createHTMLDocument("")).createElement(
                  "base"
                )).href = n.location.href),
                e.head.appendChild(s))
              : (e = n)),
          (r = !i && []),
          (o = E.exec(t))
            ? [e.createElement(o[1])]
            : ((o = mt([t], e, r)),
              r && r.length && b(r).remove(),
              b.merge([], o.childNodes)));
      var s, o, r;
    }),
    (b.fn.load = function (t, e, i) {
      var n,
        s,
        o,
        r = this,
        a = t.indexOf(" ");
      return (
        a > -1 && ((n = ue(t.slice(a))), (t = t.slice(0, a))),
        g(e)
          ? ((i = e), (e = void 0))
          : e && "object" == typeof e && (s = "POST"),
        r.length > 0 &&
          b
            .ajax({ url: t, type: s || "GET", dataType: "html", data: e })
            .done(function (t) {
              (o = arguments),
                r.html(n ? b("<div>").append(b.parseHTML(t)).find(n) : t);
            })
            .always(
              i &&
                function (t, e) {
                  r.each(function () {
                    i.apply(this, o || [t.responseText, e, t]);
                  });
                }
            ),
        this
      );
    }),
    b.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (t, e) {
        b.fn[e] = function (t) {
          return this.on(e, t);
        };
      }
    ),
    (b.expr.pseudos.animated = function (t) {
      return b.grep(b.timers, function (e) {
        return t === e.elem;
      }).length;
    }),
    (b.offset = {
      setOffset: function (t, e, i) {
        var n,
          s,
          o,
          r,
          a,
          l,
          h = b.css(t, "position"),
          c = b(t),
          u = {};
        "static" === h && (t.style.position = "relative"),
          (a = c.offset()),
          (o = b.css(t, "top")),
          (l = b.css(t, "left")),
          ("absolute" === h || "fixed" === h) && (o + l).indexOf("auto") > -1
            ? ((r = (n = c.position()).top), (s = n.left))
            : ((r = parseFloat(o) || 0), (s = parseFloat(l) || 0)),
          g(e) && (e = e.call(t, i, b.extend({}, a))),
          null != e.top && (u.top = e.top - a.top + r),
          null != e.left && (u.left = e.left - a.left + s),
          "using" in e ? e.using.call(t, u) : c.css(u);
      },
    }),
    b.fn.extend({
      offset: function (t) {
        if (arguments.length)
          return void 0 === t
            ? this
            : this.each(function (e) {
                b.offset.setOffset(this, t, e);
              });
        var e,
          i,
          n = this[0];
        return n
          ? n.getClientRects().length
            ? ((e = n.getBoundingClientRect()),
              (i = n.ownerDocument.defaultView),
              { top: e.top + i.pageYOffset, left: e.left + i.pageXOffset })
            : { top: 0, left: 0 }
          : void 0;
      },
      position: function () {
        if (this[0]) {
          var t,
            e,
            i,
            n = this[0],
            s = { top: 0, left: 0 };
          if ("fixed" === b.css(n, "position")) e = n.getBoundingClientRect();
          else {
            for (
              e = this.offset(),
                i = n.ownerDocument,
                t = n.offsetParent || i.documentElement;
              t &&
              (t === i.body || t === i.documentElement) &&
              "static" === b.css(t, "position");

            )
              t = t.parentNode;
            t &&
              t !== n &&
              1 === t.nodeType &&
              (((s = b(t).offset()).top += b.css(t, "borderTopWidth", !0)),
              (s.left += b.css(t, "borderLeftWidth", !0)));
          }
          return {
            top: e.top - s.top - b.css(n, "marginTop", !0),
            left: e.left - s.left - b.css(n, "marginLeft", !0),
          };
        }
      },
      offsetParent: function () {
        return this.map(function () {
          for (
            var t = this.offsetParent;
            t && "static" === b.css(t, "position");

          )
            t = t.offsetParent;
          return t || vt;
        });
      },
    }),
    b.each(
      { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
      function (t, e) {
        var i = "pageYOffset" === e;
        b.fn[t] = function (n) {
          return q(
            this,
            function (t, n, s) {
              var o;
              if (
                (m(t) ? (o = t) : 9 === t.nodeType && (o = t.defaultView),
                void 0 === s)
              )
                return o ? o[e] : t[n];
              o
                ? o.scrollTo(i ? o.pageXOffset : s, i ? s : o.pageYOffset)
                : (t[n] = s);
            },
            t,
            n,
            arguments.length
          );
        };
      }
    ),
    b.each(["top", "left"], function (t, e) {
      b.cssHooks[e] = Rt(f.pixelPosition, function (t, i) {
        if (i)
          return (i = jt(t, e)), zt.test(i) ? b(t).position()[e] + "px" : i;
      });
    }),
    b.each({ Height: "height", Width: "width" }, function (t, e) {
      b.each(
        { padding: "inner" + t, content: e, "": "outer" + t },
        function (i, n) {
          b.fn[n] = function (s, o) {
            var r = arguments.length && (i || "boolean" != typeof s),
              a = i || (!0 === s || !0 === o ? "margin" : "border");
            return q(
              this,
              function (e, i, s) {
                var o;
                return m(e)
                  ? 0 === n.indexOf("outer")
                    ? e["inner" + t]
                    : e.document.documentElement["client" + t]
                  : 9 === e.nodeType
                  ? ((o = e.documentElement),
                    Math.max(
                      e.body["scroll" + t],
                      o["scroll" + t],
                      e.body["offset" + t],
                      o["offset" + t],
                      o["client" + t]
                    ))
                  : void 0 === s
                  ? b.css(e, i, a)
                  : b.style(e, i, s, a);
              },
              e,
              r ? s : void 0,
              r
            );
          };
        }
      );
    }),
    b.each(
      "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
        " "
      ),
      function (t, e) {
        b.fn[e] = function (t, i) {
          return arguments.length > 0
            ? this.on(e, null, t, i)
            : this.trigger(e);
        };
      }
    ),
    b.fn.extend({
      hover: function (t, e) {
        return this.mouseenter(t).mouseleave(e || t);
      },
    }),
    b.fn.extend({
      bind: function (t, e, i) {
        return this.on(t, null, e, i);
      },
      unbind: function (t, e) {
        return this.off(t, null, e);
      },
      delegate: function (t, e, i, n) {
        return this.on(e, t, i, n);
      },
      undelegate: function (t, e, i) {
        return 1 === arguments.length
          ? this.off(t, "**")
          : this.off(e, t || "**", i);
      },
    }),
    (b.proxy = function (t, e) {
      var i, n, s;
      if (("string" == typeof e && ((i = t[e]), (e = t), (t = i)), g(t)))
        return (
          (n = o.call(arguments, 2)),
          ((s = function () {
            return t.apply(e || this, n.concat(o.call(arguments)));
          }).guid = t.guid =
            t.guid || b.guid++),
          s
        );
    }),
    (b.holdReady = function (t) {
      t ? b.readyWait++ : b.ready(!0);
    }),
    (b.isArray = Array.isArray),
    (b.parseJSON = JSON.parse),
    (b.nodeName = S),
    (b.isFunction = g),
    (b.isWindow = m),
    (b.camelCase = Y),
    (b.type = y),
    (b.now = Date.now),
    (b.isNumeric = function (t) {
      var e = b.type(t);
      return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t));
    }),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return b;
      });
  var qe = t.jQuery,
    Be = t.$;
  return (
    (b.noConflict = function (e) {
      return t.$ === b && (t.$ = Be), e && t.jQuery === b && (t.jQuery = qe), b;
    }),
    e || (t.jQuery = t.$ = b),
    b
  );
}),
  (function (t, e, i) {
    function n(t, e) {
      return typeof t === e;
    }
    function s(t) {
      var e = w.className,
        i = y._config.classPrefix || "";
      if ((x && (e = e.baseVal), y._config.enableJSClass)) {
        var n = new RegExp("(^|\\s)" + i + "no-js(\\s|$)");
        e = e.replace(n, "$1" + i + "js$2");
      }
      y._config.enableClasses &&
        ((e += " " + i + t.join(" " + i)),
        x ? (w.className.baseVal = e) : (w.className = e));
    }
    function o(t, e) {
      if ("object" == typeof t) for (var i in t) T(t, i) && o(i, t[i]);
      else {
        var n = (t = t.toLowerCase()).split("."),
          r = y[n[0]];
        if ((2 == n.length && (r = r[n[1]]), void 0 !== r)) return y;
        (e = "function" == typeof e ? e() : e),
          1 == n.length
            ? (y[n[0]] = e)
            : (!y[n[0]] ||
                y[n[0]] instanceof Boolean ||
                (y[n[0]] = new Boolean(y[n[0]])),
              (y[n[0]][n[1]] = e)),
          s([(e && 0 != e ? "" : "no-") + n.join("-")]),
          y._trigger(t, e);
      }
      return y;
    }
    function r() {
      return "function" != typeof e.createElement
        ? e.createElement(arguments[0])
        : x
        ? e.createElementNS.call(e, "http://www.w3.org/2000/svg", arguments[0])
        : e.createElement.apply(e, arguments);
    }
    function a(t, i, n, s) {
      var o,
        a,
        l,
        h,
        c = "modernizr",
        u = r("div"),
        d = (function () {
          var t = e.body;
          return t || ((t = r(x ? "svg" : "body")).fake = !0), t;
        })();
      if (parseInt(n, 10))
        for (; n--; )
          ((l = r("div")).id = s ? s[n] : c + (n + 1)), u.appendChild(l);
      return (
        ((o = r("style")).type = "text/css"),
        (o.id = "s" + c),
        (d.fake ? d : u).appendChild(o),
        d.appendChild(u),
        o.styleSheet
          ? (o.styleSheet.cssText = t)
          : o.appendChild(e.createTextNode(t)),
        (u.id = c),
        d.fake &&
          ((d.style.background = ""),
          (d.style.overflow = "hidden"),
          (h = w.style.overflow),
          (w.style.overflow = "hidden"),
          w.appendChild(d)),
        (a = i(u, t)),
        d.fake
          ? (d.parentNode.removeChild(d),
            (w.style.overflow = h),
            w.offsetHeight)
          : u.parentNode.removeChild(u),
        !!a
      );
    }
    function l(t, e) {
      return !!~("" + t).indexOf(e);
    }
    function h(t) {
      return t
        .replace(/([A-Z])/g, function (t, e) {
          return "-" + e.toLowerCase();
        })
        .replace(/^ms-/, "-ms-");
    }
    function c(e, i, n) {
      var s;
      if ("getComputedStyle" in t) {
        s = getComputedStyle.call(t, e, i);
        var o = t.console;
        if (null !== s) n && (s = s.getPropertyValue(n));
        else if (o) {
          o[o.error ? "error" : "log"].call(
            o,
            "getComputedStyle returning null, its possible modernizr test results are inaccurate"
          );
        }
      } else s = !i && e.currentStyle && e.currentStyle[n];
      return s;
    }
    function u(e, n) {
      var s = e.length;
      if ("CSS" in t && "supports" in t.CSS) {
        for (; s--; ) if (t.CSS.supports(h(e[s]), n)) return !0;
        return !1;
      }
      if ("CSSSupportsRule" in t) {
        for (var o = []; s--; ) o.push("(" + h(e[s]) + ":" + n + ")");
        return a(
          "@supports (" +
            (o = o.join(" or ")) +
            ") { #modernizr { position: absolute; } }",
          function (t) {
            return "absolute" == c(t, null, "position");
          }
        );
      }
      return i;
    }
    function d(t) {
      return t
        .replace(/([a-z])-([a-z])/g, function (t, e, i) {
          return e + i.toUpperCase();
        })
        .replace(/^-/, "");
    }
    function p(t, e, s, o) {
      function a() {
        c && (delete P.style, delete P.modElem);
      }
      if (((o = !n(o, "undefined") && o), !n(s, "undefined"))) {
        var h = u(t, s);
        if (!n(h, "undefined")) return h;
      }
      for (
        var c, p, f, g, m, v = ["modernizr", "tspan", "samp"];
        !P.style && v.length;

      )
        (c = !0), (P.modElem = r(v.shift())), (P.style = P.modElem.style);
      for (f = t.length, p = 0; f > p; p++)
        if (
          ((g = t[p]),
          (m = P.style[g]),
          l(g, "-") && (g = d(g)),
          P.style[g] !== i)
        ) {
          if (o || n(s, "undefined")) return a(), "pfx" != e || g;
          try {
            P.style[g] = s;
          } catch (t) {}
          if (P.style[g] != m) return a(), "pfx" != e || g;
        }
      return a(), !1;
    }
    function f(t, e) {
      return function () {
        return t.apply(e, arguments);
      };
    }
    function g(t, e, i, s, o) {
      var r = t.charAt(0).toUpperCase() + t.slice(1),
        a = (t + " " + I.join(r + " ") + r).split(" ");
      return n(e, "string") || n(e, "undefined")
        ? p(a, e, s, o)
        : (function (t, e, i) {
            var s;
            for (var o in t)
              if (t[o] in e)
                return !1 === i
                  ? t[o]
                  : n((s = e[t[o]]), "function")
                  ? f(s, i || e)
                  : s;
            return !1;
          })((a = (t + " " + k.join(r + " ") + r).split(" ")), e, i);
    }
    function m(t, e, n) {
      return g(t, i, i, e, n);
    }
    var v = [],
      _ = {
        _version: "3.6.0",
        _config: {
          classPrefix: "",
          enableClasses: !0,
          enableJSClass: !0,
          usePrefixes: !0,
        },
        _q: [],
        on: function (t, e) {
          var i = this;
          setTimeout(function () {
            e(i[t]);
          }, 0);
        },
        addTest: function (t, e, i) {
          v.push({ name: t, fn: e, options: i });
        },
        addAsyncTest: function (t) {
          v.push({ name: null, fn: t });
        },
      },
      y = function () {};
    (y.prototype = _), (y = new y());
    var b = [],
      w = e.documentElement,
      x = "svg" === w.nodeName.toLowerCase(),
      C = "Moz O ms Webkit",
      k = _._config.usePrefixes ? C.toLowerCase().split(" ") : [];
    _._domPrefixes = k;
    var T,
      D = _._config.usePrefixes
        ? " -webkit- -moz- -o- -ms- ".split(" ")
        : ["", ""];
    (_._prefixes = D),
      (function () {
        var t = {}.hasOwnProperty;
        T =
          n(t, "undefined") || n(t.call, "undefined")
            ? function (t, e) {
                return e in t && n(t.constructor.prototype[e], "undefined");
              }
            : function (e, i) {
                return t.call(e, i);
              };
      })(),
      (_._l = {}),
      (_.on = function (t, e) {
        this._l[t] || (this._l[t] = []),
          this._l[t].push(e),
          y.hasOwnProperty(t) &&
            setTimeout(function () {
              y._trigger(t, y[t]);
            }, 0);
      }),
      (_._trigger = function (t, e) {
        if (this._l[t]) {
          var i = this._l[t];
          setTimeout(function () {
            var t;
            for (t = 0; t < i.length; t++) (0, i[t])(e);
          }, 0),
            delete this._l[t];
        }
      }),
      y._q.push(function () {
        _.addTest = o;
      });
    var S = (function () {
      var t = !("onblur" in e.documentElement);
      return function (e, n) {
        var s;
        return (
          !!e &&
          ((n && "string" != typeof n) || (n = r(n || "div")),
          !(s = (e = "on" + e) in n) &&
            t &&
            (n.setAttribute || (n = r("div")),
            n.setAttribute(e, ""),
            (s = "function" == typeof n[e]),
            n[e] !== i && (n[e] = i),
            n.removeAttribute(e)),
          s)
        );
      };
    })();
    _.hasEvent = S;
    var E = (function () {
      var e = t.matchMedia || t.msMatchMedia;
      return e
        ? function (t) {
            var i = e(t);
            return (i && i.matches) || !1;
          }
        : function (e) {
            var i = !1;
            return (
              a(
                "@media " + e + " { #modernizr { position: absolute; } }",
                function (e) {
                  i =
                    "absolute" ==
                    (t.getComputedStyle
                      ? t.getComputedStyle(e, null)
                      : e.currentStyle
                    ).position;
                }
              ),
              i
            );
          };
    })();
    _.mq = E;
    _.prefixedCSSValue = function (t, e) {
      var i = !1,
        n = r("div").style;
      if (t in n) {
        var s = k.length;
        for (n[t] = e, i = n[t]; s-- && !i; )
          (n[t] = "-" + k[s] + "-" + e), (i = n[t]);
      }
      return "" === i && (i = !1), i;
    };
    var I = _._config.usePrefixes ? C.split(" ") : [];
    _._cssomPrefixes = I;
    var A = { elem: r("modernizr") };
    y._q.push(function () {
      delete A.elem;
    });
    var P = { style: A.elem.style };
    y._q.unshift(function () {
      delete P.style;
    }),
      (_.testAllProps = g),
      (_.testAllProps = m),
      (_.testProp = function (t, e, n) {
        return p([t], i, e, n);
      }),
      (_.testStyles = a),
      y.addTest("customelements", "customElements" in t),
      y.addTest("history", function () {
        var e = navigator.userAgent;
        return (
          ((-1 === e.indexOf("Android 2.") &&
            -1 === e.indexOf("Android 4.0")) ||
            -1 === e.indexOf("Mobile Safari") ||
            -1 !== e.indexOf("Chrome") ||
            -1 !== e.indexOf("Windows Phone") ||
            "file:" === location.protocol) &&
          t.history &&
          "pushState" in t.history
        );
      }),
      y.addTest("pointerevents", function () {
        var t = !1,
          e = k.length;
        for (t = y.hasEvent("pointerdown"); e-- && !t; )
          S(k[e] + "pointerdown") && (t = !0);
        return t;
      }),
      y.addTest("postmessage", "postMessage" in t),
      y.addTest("webgl", function () {
        var e = r("canvas"),
          i =
            "probablySupportsContext" in e
              ? "probablySupportsContext"
              : "supportsContext";
        return i in e
          ? e[i]("webgl") || e[i]("experimental-webgl")
          : "WebGLRenderingContext" in t;
      });
    var O = !1;
    try {
      O = "WebSocket" in t && 2 === t.WebSocket.CLOSING;
    } catch (t) {}
    y.addTest("websockets", O),
      y.addTest("cssanimations", m("animationName", "a", !0)),
      (function () {
        y.addTest("csscolumns", function () {
          var t = !1,
            e = m("columnCount");
          try {
            (t = !!e) && (t = new Boolean(t));
          } catch (t) {}
          return t;
        });
        for (
          var t,
            e,
            i = [
              "Width",
              "Span",
              "Fill",
              "Gap",
              "Rule",
              "RuleColor",
              "RuleStyle",
              "RuleWidth",
              "BreakBefore",
              "BreakAfter",
              "BreakInside",
            ],
            n = 0;
          n < i.length;
          n++
        )
          (t = i[n].toLowerCase()),
            (e = m("column" + i[n])),
            ("breakbefore" === t || "breakafter" === t || "breakinside" == t) &&
              (e = e || m(i[n])),
            y.addTest("csscolumns." + t, e);
      })(),
      y.addTest("flexbox", m("flexBasis", "1px", !0)),
      y.addTest("picture", "HTMLPictureElement" in t),
      y.addAsyncTest(function () {
        var t,
          e,
          i = r("img"),
          n = "sizes" in i;
        !n && "srcset" in i
          ? ("data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw==",
            (t =
              "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="),
            (e = function () {
              o("sizes", 2 == i.width);
            }),
            (i.onload = e),
            (i.onerror = e),
            i.setAttribute("sizes", "9px"),
            (i.srcset =
              t +
              " 1w,data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw== 8w"),
            (i.src = t))
          : o("sizes", n);
      }),
      y.addTest("srcset", "srcset" in r("img")),
      y.addTest("webworkers", "Worker" in t),
      (function () {
        var t, e, i, s, o, r;
        for (var a in v)
          if (v.hasOwnProperty(a)) {
            if (
              ((t = []),
              (e = v[a]).name &&
                (t.push(e.name.toLowerCase()),
                e.options && e.options.aliases && e.options.aliases.length))
            )
              for (i = 0; i < e.options.aliases.length; i++)
                t.push(e.options.aliases[i].toLowerCase());
            for (
              s = n(e.fn, "function") ? e.fn() : e.fn, o = 0;
              o < t.length;
              o++
            )
              1 === (r = t[o].split(".")).length
                ? (y[r[0]] = s)
                : (!y[r[0]] ||
                    y[r[0]] instanceof Boolean ||
                    (y[r[0]] = new Boolean(y[r[0]])),
                  (y[r[0]][r[1]] = s)),
                b.push((s ? "" : "no-") + r.join("-"));
          }
      })(),
      s(b),
      delete _.addTest,
      delete _.addAsyncTest;
    for (var N = 0; N < y._q.length; N++) y._q[N]();
    t.Modernizr = y;
  })(window, document),
  (function () {
    for (
      var t,
        e = function () {},
        i = [
          "assert",
          "clear",
          "count",
          "debug",
          "dir",
          "dirxml",
          "error",
          "exception",
          "group",
          "groupCollapsed",
          "groupEnd",
          "info",
          "log",
          "markTimeline",
          "profile",
          "profileEnd",
          "table",
          "time",
          "timeEnd",
          "timeline",
          "timelineEnd",
          "timeStamp",
          "trace",
          "warn",
        ],
        n = i.length,
        s = (window.console = window.console || {});
      n--;

    )
      s[(t = i[n])] || (s[t] = e);
  })(),
  (function (t, e) {
    "object" == typeof exports && "undefined" != typeof module
      ? e(exports, require("jquery"), require("popper.js"))
      : "function" == typeof define && define.amd
      ? define(["exports", "jquery", "popper.js"], e)
      : e(((t = t || self).bootstrap = {}), t.jQuery, t.Popper);
  })(this, function (t, e, i) {
    "use strict";
    function n(t, e) {
      for (var i = 0; i < e.length; i++) {
        var n = e[i];
        (n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          "value" in n && (n.writable = !0),
          Object.defineProperty(t, n.key, n);
      }
    }
    function s(t, e, i) {
      return e && n(t.prototype, e), i && n(t, i), t;
    }
    function o(t, e) {
      var i = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          i.push.apply(i, n);
      }
      return i;
    }
    function r(t) {
      for (var e = 1; e < arguments.length; e++) {
        var i = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? o(Object(i), !0).forEach(function (e) {
              var n, s, o;
              (n = t),
                (o = i[(s = e)]),
                s in n
                  ? Object.defineProperty(n, s, {
                      value: o,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (n[s] = o);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i))
          : o(Object(i)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(i, e)
              );
            });
      }
      return t;
    }
    (e = e && e.hasOwnProperty("default") ? e.default : e),
      (i = i && i.hasOwnProperty("default") ? i.default : i);
    var a = "transitionend";
    var l = {
      TRANSITION_END: "bsTransitionEnd",
      getUID: function (t) {
        for (; (t += ~~(1e6 * Math.random())), document.getElementById(t); );
        return t;
      },
      getSelectorFromElement: function (t) {
        var e = t.getAttribute("data-target");
        if (!e || "#" === e) {
          var i = t.getAttribute("href");
          e = i && "#" !== i ? i.trim() : "";
        }
        try {
          return document.querySelector(e) ? e : null;
        } catch (t) {
          return null;
        }
      },
      getTransitionDurationFromElement: function (t) {
        if (!t) return 0;
        var i = e(t).css("transition-duration"),
          n = e(t).css("transition-delay"),
          s = parseFloat(i),
          o = parseFloat(n);
        return s || o
          ? ((i = i.split(",")[0]),
            (n = n.split(",")[0]),
            1e3 * (parseFloat(i) + parseFloat(n)))
          : 0;
      },
      reflow: function (t) {
        return t.offsetHeight;
      },
      triggerTransitionEnd: function (t) {
        e(t).trigger(a);
      },
      supportsTransitionEnd: function () {
        return Boolean(a);
      },
      isElement: function (t) {
        return (t[0] || t).nodeType;
      },
      typeCheckConfig: function (t, e, i) {
        for (var n in i)
          if (Object.prototype.hasOwnProperty.call(i, n)) {
            var s = i[n],
              o = e[n],
              r =
                o && l.isElement(o)
                  ? "element"
                  : ((a = o),
                    {}.toString
                      .call(a)
                      .match(/\s([a-z]+)/i)[1]
                      .toLowerCase());
            if (!new RegExp(s).test(r))
              throw new Error(
                t.toUpperCase() +
                  ': Option "' +
                  n +
                  '" provided type "' +
                  r +
                  '" but expected type "' +
                  s +
                  '".'
              );
          }
        var a;
      },
      findShadowRoot: function (t) {
        if (!document.documentElement.attachShadow) return null;
        if ("function" != typeof t.getRootNode)
          return t instanceof ShadowRoot
            ? t
            : t.parentNode
            ? l.findShadowRoot(t.parentNode)
            : null;
        var e = t.getRootNode();
        return e instanceof ShadowRoot ? e : null;
      },
      jQueryDetection: function () {
        if (void 0 === e)
          throw new TypeError(
            "Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript."
          );
        var t = e.fn.jquery.split(" ")[0].split(".");
        if (
          (t[0] < 2 && t[1] < 9) ||
          (1 === t[0] && 9 === t[1] && t[2] < 1) ||
          4 <= t[0]
        )
          throw new Error(
            "Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0"
          );
      },
    };
    l.jQueryDetection(),
      (e.fn.emulateTransitionEnd = function (t) {
        var i = this,
          n = !1;
        return (
          e(this).one(l.TRANSITION_END, function () {
            n = !0;
          }),
          setTimeout(function () {
            n || l.triggerTransitionEnd(i);
          }, t),
          this
        );
      }),
      (e.event.special[l.TRANSITION_END] = {
        bindType: a,
        delegateType: a,
        handle: function (t) {
          if (e(t.target).is(this))
            return t.handleObj.handler.apply(this, arguments);
        },
      });
    var h = "alert",
      c = "bs.alert",
      u = "." + c,
      d = e.fn[h],
      p = {
        CLOSE: "close" + u,
        CLOSED: "closed" + u,
        CLICK_DATA_API: "click" + u + ".data-api",
      },
      f = (function () {
        function t(t) {
          this._element = t;
        }
        var i = t.prototype;
        return (
          (i.close = function (t) {
            var e = this._element;
            t && (e = this._getRootElement(t)),
              this._triggerCloseEvent(e).isDefaultPrevented() ||
                this._removeElement(e);
          }),
          (i.dispose = function () {
            e.removeData(this._element, c), (this._element = null);
          }),
          (i._getRootElement = function (t) {
            var i = l.getSelectorFromElement(t),
              n = !1;
            return (
              i && (n = document.querySelector(i)),
              n || e(t).closest(".alert")[0]
            );
          }),
          (i._triggerCloseEvent = function (t) {
            var i = e.Event(p.CLOSE);
            return e(t).trigger(i), i;
          }),
          (i._removeElement = function (t) {
            var i = this;
            if ((e(t).removeClass("show"), e(t).hasClass("fade"))) {
              var n = l.getTransitionDurationFromElement(t);
              e(t)
                .one(l.TRANSITION_END, function (e) {
                  return i._destroyElement(t, e);
                })
                .emulateTransitionEnd(n);
            } else this._destroyElement(t);
          }),
          (i._destroyElement = function (t) {
            e(t).detach().trigger(p.CLOSED).remove();
          }),
          (t._jQueryInterface = function (i) {
            return this.each(function () {
              var n = e(this),
                s = n.data(c);
              s || ((s = new t(this)), n.data(c, s)),
                "close" === i && s[i](this);
            });
          }),
          (t._handleDismiss = function (t) {
            return function (e) {
              e && e.preventDefault(), t.close(this);
            };
          }),
          s(t, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.4.1";
              },
            },
          ]),
          t
        );
      })();
    e(document).on(
      p.CLICK_DATA_API,
      '[data-dismiss="alert"]',
      f._handleDismiss(new f())
    ),
      (e.fn[h] = f._jQueryInterface),
      (e.fn[h].Constructor = f),
      (e.fn[h].noConflict = function () {
        return (e.fn[h] = d), f._jQueryInterface;
      });
    var g = "button",
      m = "bs.button",
      v = "." + m,
      _ = ".data-api",
      y = e.fn[g],
      b = "active",
      w = '[data-toggle^="button"]',
      x = 'input:not([type="hidden"])',
      C = ".btn",
      k = {
        CLICK_DATA_API: "click" + v + _,
        FOCUS_BLUR_DATA_API: "focus" + v + _ + " blur" + v + _,
        LOAD_DATA_API: "load" + v + _,
      },
      T = (function () {
        function t(t) {
          this._element = t;
        }
        var i = t.prototype;
        return (
          (i.toggle = function () {
            var t = !0,
              i = !0,
              n = e(this._element).closest('[data-toggle="buttons"]')[0];
            if (n) {
              var s = this._element.querySelector(x);
              if (s) {
                if ("radio" === s.type)
                  if (s.checked && this._element.classList.contains(b)) t = !1;
                  else {
                    var o = n.querySelector(".active");
                    o && e(o).removeClass(b);
                  }
                else
                  "checkbox" === s.type
                    ? "LABEL" === this._element.tagName &&
                      s.checked === this._element.classList.contains(b) &&
                      (t = !1)
                    : (t = !1);
                t &&
                  ((s.checked = !this._element.classList.contains(b)),
                  e(s).trigger("change")),
                  s.focus(),
                  (i = !1);
              }
            }
            this._element.hasAttribute("disabled") ||
              this._element.classList.contains("disabled") ||
              (i &&
                this._element.setAttribute(
                  "aria-pressed",
                  !this._element.classList.contains(b)
                ),
              t && e(this._element).toggleClass(b));
          }),
          (i.dispose = function () {
            e.removeData(this._element, m), (this._element = null);
          }),
          (t._jQueryInterface = function (i) {
            return this.each(function () {
              var n = e(this).data(m);
              n || ((n = new t(this)), e(this).data(m, n)),
                "toggle" === i && n[i]();
            });
          }),
          s(t, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.4.1";
              },
            },
          ]),
          t
        );
      })();
    e(document)
      .on(k.CLICK_DATA_API, w, function (t) {
        var i = t.target;
        if (
          (e(i).hasClass("btn") || (i = e(i).closest(C)[0]),
          !i || i.hasAttribute("disabled") || i.classList.contains("disabled"))
        )
          t.preventDefault();
        else {
          var n = i.querySelector(x);
          if (
            n &&
            (n.hasAttribute("disabled") || n.classList.contains("disabled"))
          )
            return void t.preventDefault();
          T._jQueryInterface.call(e(i), "toggle");
        }
      })
      .on(k.FOCUS_BLUR_DATA_API, w, function (t) {
        var i = e(t.target).closest(C)[0];
        e(i).toggleClass("focus", /^focus(in)?$/.test(t.type));
      }),
      e(window).on(k.LOAD_DATA_API, function () {
        for (
          var t = [].slice.call(
              document.querySelectorAll('[data-toggle="buttons"] .btn')
            ),
            e = 0,
            i = t.length;
          e < i;
          e++
        ) {
          var n = t[e],
            s = n.querySelector(x);
          s.checked || s.hasAttribute("checked")
            ? n.classList.add(b)
            : n.classList.remove(b);
        }
        for (
          var o = 0,
            r = (t = [].slice.call(
              document.querySelectorAll('[data-toggle="button"]')
            )).length;
          o < r;
          o++
        ) {
          var a = t[o];
          "true" === a.getAttribute("aria-pressed")
            ? a.classList.add(b)
            : a.classList.remove(b);
        }
      }),
      (e.fn[g] = T._jQueryInterface),
      (e.fn[g].Constructor = T),
      (e.fn[g].noConflict = function () {
        return (e.fn[g] = y), T._jQueryInterface;
      });
    var D = "carousel",
      S = "bs.carousel",
      E = "." + S,
      I = ".data-api",
      A = e.fn[D],
      P = {
        interval: 5e3,
        keyboard: !0,
        slide: !1,
        pause: "hover",
        wrap: !0,
        touch: !0,
      },
      O = {
        interval: "(number|boolean)",
        keyboard: "boolean",
        slide: "(boolean|string)",
        pause: "(string|boolean)",
        wrap: "boolean",
        touch: "boolean",
      },
      N = "next",
      M = "prev",
      H = {
        SLIDE: "slide" + E,
        SLID: "slid" + E,
        KEYDOWN: "keydown" + E,
        MOUSEENTER: "mouseenter" + E,
        MOUSELEAVE: "mouseleave" + E,
        TOUCHSTART: "touchstart" + E,
        TOUCHMOVE: "touchmove" + E,
        TOUCHEND: "touchend" + E,
        POINTERDOWN: "pointerdown" + E,
        POINTERUP: "pointerup" + E,
        DRAG_START: "dragstart" + E,
        LOAD_DATA_API: "load" + E + I,
        CLICK_DATA_API: "click" + E + I,
      },
      z = "active",
      L = ".active.carousel-item",
      W = ".carousel-indicators",
      j = { TOUCH: "touch", PEN: "pen" },
      R = (function () {
        function t(t, e) {
          (this._items = null),
            (this._interval = null),
            (this._activeElement = null),
            (this._isPaused = !1),
            (this._isSliding = !1),
            (this.touchTimeout = null),
            (this.touchStartX = 0),
            (this.touchDeltaX = 0),
            (this._config = this._getConfig(e)),
            (this._element = t),
            (this._indicatorsElement = this._element.querySelector(W)),
            (this._touchSupported =
              "ontouchstart" in document.documentElement ||
              0 < navigator.maxTouchPoints),
            (this._pointerEvent = Boolean(
              window.PointerEvent || window.MSPointerEvent
            )),
            this._addEventListeners();
        }
        var i = t.prototype;
        return (
          (i.next = function () {
            this._isSliding || this._slide(N);
          }),
          (i.nextWhenVisible = function () {
            !document.hidden &&
              e(this._element).is(":visible") &&
              "hidden" !== e(this._element).css("visibility") &&
              this.next();
          }),
          (i.prev = function () {
            this._isSliding || this._slide(M);
          }),
          (i.pause = function (t) {
            t || (this._isPaused = !0),
              this._element.querySelector(
                ".carousel-item-next, .carousel-item-prev"
              ) && (l.triggerTransitionEnd(this._element), this.cycle(!0)),
              clearInterval(this._interval),
              (this._interval = null);
          }),
          (i.cycle = function (t) {
            t || (this._isPaused = !1),
              this._interval &&
                (clearInterval(this._interval), (this._interval = null)),
              this._config.interval &&
                !this._isPaused &&
                (this._interval = setInterval(
                  (document.visibilityState
                    ? this.nextWhenVisible
                    : this.next
                  ).bind(this),
                  this._config.interval
                ));
          }),
          (i.to = function (t) {
            var i = this;
            this._activeElement = this._element.querySelector(L);
            var n = this._getItemIndex(this._activeElement);
            if (!(t > this._items.length - 1 || t < 0))
              if (this._isSliding)
                e(this._element).one(H.SLID, function () {
                  return i.to(t);
                });
              else {
                if (n === t) return this.pause(), void this.cycle();
                var s = n < t ? N : M;
                this._slide(s, this._items[t]);
              }
          }),
          (i.dispose = function () {
            e(this._element).off(E),
              e.removeData(this._element, S),
              (this._items = null),
              (this._config = null),
              (this._element = null),
              (this._interval = null),
              (this._isPaused = null),
              (this._isSliding = null),
              (this._activeElement = null),
              (this._indicatorsElement = null);
          }),
          (i._getConfig = function (t) {
            return (t = r({}, P, {}, t)), l.typeCheckConfig(D, t, O), t;
          }),
          (i._handleSwipe = function () {
            var t = Math.abs(this.touchDeltaX);
            if (!(t <= 40)) {
              var e = t / this.touchDeltaX;
              (this.touchDeltaX = 0) < e && this.prev(), e < 0 && this.next();
            }
          }),
          (i._addEventListeners = function () {
            var t = this;
            this._config.keyboard &&
              e(this._element).on(H.KEYDOWN, function (e) {
                return t._keydown(e);
              }),
              "hover" === this._config.pause &&
                e(this._element)
                  .on(H.MOUSEENTER, function (e) {
                    return t.pause(e);
                  })
                  .on(H.MOUSELEAVE, function (e) {
                    return t.cycle(e);
                  }),
              this._config.touch && this._addTouchEventListeners();
          }),
          (i._addTouchEventListeners = function () {
            var t = this;
            if (this._touchSupported) {
              var i = function (e) {
                  t._pointerEvent &&
                  j[e.originalEvent.pointerType.toUpperCase()]
                    ? (t.touchStartX = e.originalEvent.clientX)
                    : t._pointerEvent ||
                      (t.touchStartX = e.originalEvent.touches[0].clientX);
                },
                n = function (e) {
                  t._pointerEvent &&
                    j[e.originalEvent.pointerType.toUpperCase()] &&
                    (t.touchDeltaX = e.originalEvent.clientX - t.touchStartX),
                    t._handleSwipe(),
                    "hover" === t._config.pause &&
                      (t.pause(),
                      t.touchTimeout && clearTimeout(t.touchTimeout),
                      (t.touchTimeout = setTimeout(function (e) {
                        return t.cycle(e);
                      }, 500 + t._config.interval)));
                };
              e(this._element.querySelectorAll(".carousel-item img")).on(
                H.DRAG_START,
                function (t) {
                  return t.preventDefault();
                }
              ),
                this._pointerEvent
                  ? (e(this._element).on(H.POINTERDOWN, function (t) {
                      return i(t);
                    }),
                    e(this._element).on(H.POINTERUP, function (t) {
                      return n(t);
                    }),
                    this._element.classList.add("pointer-event"))
                  : (e(this._element).on(H.TOUCHSTART, function (t) {
                      return i(t);
                    }),
                    e(this._element).on(H.TOUCHMOVE, function (e) {
                      return (function (e) {
                        e.originalEvent.touches &&
                        1 < e.originalEvent.touches.length
                          ? (t.touchDeltaX = 0)
                          : (t.touchDeltaX =
                              e.originalEvent.touches[0].clientX -
                              t.touchStartX);
                      })(e);
                    }),
                    e(this._element).on(H.TOUCHEND, function (t) {
                      return n(t);
                    }));
            }
          }),
          (i._keydown = function (t) {
            if (!/input|textarea/i.test(t.target.tagName))
              switch (t.which) {
                case 37:
                  t.preventDefault(), this.prev();
                  break;
                case 39:
                  t.preventDefault(), this.next();
              }
          }),
          (i._getItemIndex = function (t) {
            return (
              (this._items =
                t && t.parentNode
                  ? [].slice.call(
                      t.parentNode.querySelectorAll(".carousel-item")
                    )
                  : []),
              this._items.indexOf(t)
            );
          }),
          (i._getItemByDirection = function (t, e) {
            var i = t === N,
              n = t === M,
              s = this._getItemIndex(e),
              o = this._items.length - 1;
            if (((n && 0 === s) || (i && s === o)) && !this._config.wrap)
              return e;
            var r = (s + (t === M ? -1 : 1)) % this._items.length;
            return -1 == r
              ? this._items[this._items.length - 1]
              : this._items[r];
          }),
          (i._triggerSlideEvent = function (t, i) {
            var n = this._getItemIndex(t),
              s = this._getItemIndex(this._element.querySelector(L)),
              o = e.Event(H.SLIDE, {
                relatedTarget: t,
                direction: i,
                from: s,
                to: n,
              });
            return e(this._element).trigger(o), o;
          }),
          (i._setActiveIndicatorElement = function (t) {
            if (this._indicatorsElement) {
              var i = [].slice.call(
                this._indicatorsElement.querySelectorAll(".active")
              );
              e(i).removeClass(z);
              var n = this._indicatorsElement.children[this._getItemIndex(t)];
              n && e(n).addClass(z);
            }
          }),
          (i._slide = function (t, i) {
            var n,
              s,
              o,
              r = this,
              a = this._element.querySelector(L),
              h = this._getItemIndex(a),
              c = i || (a && this._getItemByDirection(t, a)),
              u = this._getItemIndex(c),
              d = Boolean(this._interval);
            if (
              ((o =
                t === N
                  ? ((n = "carousel-item-left"),
                    (s = "carousel-item-next"),
                    "left")
                  : ((n = "carousel-item-right"),
                    (s = "carousel-item-prev"),
                    "right")),
              c && e(c).hasClass(z))
            )
              this._isSliding = !1;
            else if (
              !this._triggerSlideEvent(c, o).isDefaultPrevented() &&
              a &&
              c
            ) {
              (this._isSliding = !0),
                d && this.pause(),
                this._setActiveIndicatorElement(c);
              var p = e.Event(H.SLID, {
                relatedTarget: c,
                direction: o,
                from: h,
                to: u,
              });
              if (e(this._element).hasClass("slide")) {
                e(c).addClass(s),
                  l.reflow(c),
                  e(a).addClass(n),
                  e(c).addClass(n);
                var f = parseInt(c.getAttribute("data-interval"), 10);
                f
                  ? ((this._config.defaultInterval =
                      this._config.defaultInterval || this._config.interval),
                    (this._config.interval = f))
                  : (this._config.interval =
                      this._config.defaultInterval || this._config.interval);
                var g = l.getTransitionDurationFromElement(a);
                e(a)
                  .one(l.TRANSITION_END, function () {
                    e(c)
                      .removeClass(n + " " + s)
                      .addClass(z),
                      e(a).removeClass(z + " " + s + " " + n),
                      (r._isSliding = !1),
                      setTimeout(function () {
                        return e(r._element).trigger(p);
                      }, 0);
                  })
                  .emulateTransitionEnd(g);
              } else
                e(a).removeClass(z),
                  e(c).addClass(z),
                  (this._isSliding = !1),
                  e(this._element).trigger(p);
              d && this.cycle();
            }
          }),
          (t._jQueryInterface = function (i) {
            return this.each(function () {
              var n = e(this).data(S),
                s = r({}, P, {}, e(this).data());
              "object" == typeof i && (s = r({}, s, {}, i));
              var o = "string" == typeof i ? i : s.slide;
              if (
                (n || ((n = new t(this, s)), e(this).data(S, n)),
                "number" == typeof i)
              )
                n.to(i);
              else if ("string" == typeof o) {
                if (void 0 === n[o])
                  throw new TypeError('No method named "' + o + '"');
                n[o]();
              } else s.interval && s.ride && (n.pause(), n.cycle());
            });
          }),
          (t._dataApiClickHandler = function (i) {
            var n = l.getSelectorFromElement(this);
            if (n) {
              var s = e(n)[0];
              if (s && e(s).hasClass("carousel")) {
                var o = r({}, e(s).data(), {}, e(this).data()),
                  a = this.getAttribute("data-slide-to");
                a && (o.interval = !1),
                  t._jQueryInterface.call(e(s), o),
                  a && e(s).data(S).to(a),
                  i.preventDefault();
              }
            }
          }),
          s(t, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.4.1";
              },
            },
            {
              key: "Default",
              get: function () {
                return P;
              },
            },
          ]),
          t
        );
      })();
    e(document).on(
      H.CLICK_DATA_API,
      "[data-slide], [data-slide-to]",
      R._dataApiClickHandler
    ),
      e(window).on(H.LOAD_DATA_API, function () {
        for (
          var t = [].slice.call(
              document.querySelectorAll('[data-ride="carousel"]')
            ),
            i = 0,
            n = t.length;
          i < n;
          i++
        ) {
          var s = e(t[i]);
          R._jQueryInterface.call(s, s.data());
        }
      }),
      (e.fn[D] = R._jQueryInterface),
      (e.fn[D].Constructor = R),
      (e.fn[D].noConflict = function () {
        return (e.fn[D] = A), R._jQueryInterface;
      });
    var F = "collapse",
      q = "bs.collapse",
      B = "." + q,
      $ = e.fn[F],
      U = { toggle: !0, parent: "" },
      Y = { toggle: "boolean", parent: "(string|element)" },
      K = {
        SHOW: "show" + B,
        SHOWN: "shown" + B,
        HIDE: "hide" + B,
        HIDDEN: "hidden" + B,
        CLICK_DATA_API: "click" + B + ".data-api",
      },
      V = "show",
      Q = "collapse",
      X = "collapsing",
      G = "collapsed",
      Z = '[data-toggle="collapse"]',
      J = (function () {
        function t(t, e) {
          (this._isTransitioning = !1),
            (this._element = t),
            (this._config = this._getConfig(e)),
            (this._triggerArray = [].slice.call(
              document.querySelectorAll(
                '[data-toggle="collapse"][href="#' +
                  t.id +
                  '"],[data-toggle="collapse"][data-target="#' +
                  t.id +
                  '"]'
              )
            ));
          for (
            var i = [].slice.call(document.querySelectorAll(Z)),
              n = 0,
              s = i.length;
            n < s;
            n++
          ) {
            var o = i[n],
              r = l.getSelectorFromElement(o),
              a = [].slice
                .call(document.querySelectorAll(r))
                .filter(function (e) {
                  return e === t;
                });
            null !== r &&
              0 < a.length &&
              ((this._selector = r), this._triggerArray.push(o));
          }
          (this._parent = this._config.parent ? this._getParent() : null),
            this._config.parent ||
              this._addAriaAndCollapsedClass(this._element, this._triggerArray),
            this._config.toggle && this.toggle();
        }
        var i = t.prototype;
        return (
          (i.toggle = function () {
            e(this._element).hasClass(V) ? this.hide() : this.show();
          }),
          (i.show = function () {
            var i,
              n,
              s = this;
            if (
              !(
                this._isTransitioning ||
                e(this._element).hasClass(V) ||
                (this._parent &&
                  0 ===
                    (i = [].slice
                      .call(this._parent.querySelectorAll(".show, .collapsing"))
                      .filter(function (t) {
                        return "string" == typeof s._config.parent
                          ? t.getAttribute("data-parent") === s._config.parent
                          : t.classList.contains(Q);
                      })).length &&
                  (i = null),
                i &&
                  (n = e(i).not(this._selector).data(q)) &&
                  n._isTransitioning)
              )
            ) {
              var o = e.Event(K.SHOW);
              if ((e(this._element).trigger(o), !o.isDefaultPrevented())) {
                i &&
                  (t._jQueryInterface.call(e(i).not(this._selector), "hide"),
                  n || e(i).data(q, null));
                var r = this._getDimension();
                e(this._element).removeClass(Q).addClass(X),
                  (this._element.style[r] = 0),
                  this._triggerArray.length &&
                    e(this._triggerArray)
                      .removeClass(G)
                      .attr("aria-expanded", !0),
                  this.setTransitioning(!0);
                var a = "scroll" + (r[0].toUpperCase() + r.slice(1)),
                  h = l.getTransitionDurationFromElement(this._element);
                e(this._element)
                  .one(l.TRANSITION_END, function () {
                    e(s._element).removeClass(X).addClass(Q).addClass(V),
                      (s._element.style[r] = ""),
                      s.setTransitioning(!1),
                      e(s._element).trigger(K.SHOWN);
                  })
                  .emulateTransitionEnd(h),
                  (this._element.style[r] = this._element[a] + "px");
              }
            }
          }),
          (i.hide = function () {
            var t = this;
            if (!this._isTransitioning && e(this._element).hasClass(V)) {
              var i = e.Event(K.HIDE);
              if ((e(this._element).trigger(i), !i.isDefaultPrevented())) {
                var n = this._getDimension();
                (this._element.style[n] =
                  this._element.getBoundingClientRect()[n] + "px"),
                  l.reflow(this._element),
                  e(this._element).addClass(X).removeClass(Q).removeClass(V);
                var s = this._triggerArray.length;
                if (0 < s)
                  for (var o = 0; o < s; o++) {
                    var r = this._triggerArray[o],
                      a = l.getSelectorFromElement(r);
                    null !== a &&
                      (e([].slice.call(document.querySelectorAll(a))).hasClass(
                        V
                      ) ||
                        e(r).addClass(G).attr("aria-expanded", !1));
                  }
                this.setTransitioning(!0), (this._element.style[n] = "");
                var h = l.getTransitionDurationFromElement(this._element);
                e(this._element)
                  .one(l.TRANSITION_END, function () {
                    t.setTransitioning(!1),
                      e(t._element)
                        .removeClass(X)
                        .addClass(Q)
                        .trigger(K.HIDDEN);
                  })
                  .emulateTransitionEnd(h);
              }
            }
          }),
          (i.setTransitioning = function (t) {
            this._isTransitioning = t;
          }),
          (i.dispose = function () {
            e.removeData(this._element, q),
              (this._config = null),
              (this._parent = null),
              (this._element = null),
              (this._triggerArray = null),
              (this._isTransitioning = null);
          }),
          (i._getConfig = function (t) {
            return (
              ((t = r({}, U, {}, t)).toggle = Boolean(t.toggle)),
              l.typeCheckConfig(F, t, Y),
              t
            );
          }),
          (i._getDimension = function () {
            return e(this._element).hasClass("width") ? "width" : "height";
          }),
          (i._getParent = function () {
            var i,
              n = this;
            l.isElement(this._config.parent)
              ? ((i = this._config.parent),
                void 0 !== this._config.parent.jquery &&
                  (i = this._config.parent[0]))
              : (i = document.querySelector(this._config.parent));
            var s =
                '[data-toggle="collapse"][data-parent="' +
                this._config.parent +
                '"]',
              o = [].slice.call(i.querySelectorAll(s));
            return (
              e(o).each(function (e, i) {
                n._addAriaAndCollapsedClass(t._getTargetFromElement(i), [i]);
              }),
              i
            );
          }),
          (i._addAriaAndCollapsedClass = function (t, i) {
            var n = e(t).hasClass(V);
            i.length && e(i).toggleClass(G, !n).attr("aria-expanded", n);
          }),
          (t._getTargetFromElement = function (t) {
            var e = l.getSelectorFromElement(t);
            return e ? document.querySelector(e) : null;
          }),
          (t._jQueryInterface = function (i) {
            return this.each(function () {
              var n = e(this),
                s = n.data(q),
                o = r(
                  {},
                  U,
                  {},
                  n.data(),
                  {},
                  "object" == typeof i && i ? i : {}
                );
              if (
                (!s && o.toggle && /show|hide/.test(i) && (o.toggle = !1),
                s || ((s = new t(this, o)), n.data(q, s)),
                "string" == typeof i)
              ) {
                if (void 0 === s[i])
                  throw new TypeError('No method named "' + i + '"');
                s[i]();
              }
            });
          }),
          s(t, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.4.1";
              },
            },
            {
              key: "Default",
              get: function () {
                return U;
              },
            },
          ]),
          t
        );
      })();
    e(document).on(K.CLICK_DATA_API, Z, function (t) {
      "A" === t.currentTarget.tagName && t.preventDefault();
      var i = e(this),
        n = l.getSelectorFromElement(this),
        s = [].slice.call(document.querySelectorAll(n));
      e(s).each(function () {
        var t = e(this),
          n = t.data(q) ? "toggle" : i.data();
        J._jQueryInterface.call(t, n);
      });
    }),
      (e.fn[F] = J._jQueryInterface),
      (e.fn[F].Constructor = J),
      (e.fn[F].noConflict = function () {
        return (e.fn[F] = $), J._jQueryInterface;
      });
    var tt = "dropdown",
      et = "bs.dropdown",
      it = "." + et,
      nt = ".data-api",
      st = e.fn[tt],
      ot = new RegExp("38|40|27"),
      rt = {
        HIDE: "hide" + it,
        HIDDEN: "hidden" + it,
        SHOW: "show" + it,
        SHOWN: "shown" + it,
        CLICK: "click" + it,
        CLICK_DATA_API: "click" + it + nt,
        KEYDOWN_DATA_API: "keydown" + it + nt,
        KEYUP_DATA_API: "keyup" + it + nt,
      },
      at = "disabled",
      lt = "show",
      ht = "dropdown-menu-right",
      ct = '[data-toggle="dropdown"]',
      ut = ".dropdown-menu",
      dt = {
        offset: 0,
        flip: !0,
        boundary: "scrollParent",
        reference: "toggle",
        display: "dynamic",
        popperConfig: null,
      },
      pt = {
        offset: "(number|string|function)",
        flip: "boolean",
        boundary: "(string|element)",
        reference: "(string|element)",
        display: "string",
        popperConfig: "(null|object)",
      },
      ft = (function () {
        function t(t, e) {
          (this._element = t),
            (this._popper = null),
            (this._config = this._getConfig(e)),
            (this._menu = this._getMenuElement()),
            (this._inNavbar = this._detectNavbar()),
            this._addEventListeners();
        }
        var n = t.prototype;
        return (
          (n.toggle = function () {
            if (!this._element.disabled && !e(this._element).hasClass(at)) {
              var i = e(this._menu).hasClass(lt);
              t._clearMenus(), i || this.show(!0);
            }
          }),
          (n.show = function (n) {
            if (
              (void 0 === n && (n = !1),
              !(
                this._element.disabled ||
                e(this._element).hasClass(at) ||
                e(this._menu).hasClass(lt)
              ))
            ) {
              var s = { relatedTarget: this._element },
                o = e.Event(rt.SHOW, s),
                r = t._getParentFromElement(this._element);
              if ((e(r).trigger(o), !o.isDefaultPrevented())) {
                if (!this._inNavbar && n) {
                  if (void 0 === i)
                    throw new TypeError(
                      "Bootstrap's dropdowns require Popper.js (https://popper.js.org/)"
                    );
                  var a = this._element;
                  "parent" === this._config.reference
                    ? (a = r)
                    : l.isElement(this._config.reference) &&
                      ((a = this._config.reference),
                      void 0 !== this._config.reference.jquery &&
                        (a = this._config.reference[0])),
                    "scrollParent" !== this._config.boundary &&
                      e(r).addClass("position-static"),
                    (this._popper = new i(
                      a,
                      this._menu,
                      this._getPopperConfig()
                    ));
                }
                "ontouchstart" in document.documentElement &&
                  0 === e(r).closest(".navbar-nav").length &&
                  e(document.body).children().on("mouseover", null, e.noop),
                  this._element.focus(),
                  this._element.setAttribute("aria-expanded", !0),
                  e(this._menu).toggleClass(lt),
                  e(r).toggleClass(lt).trigger(e.Event(rt.SHOWN, s));
              }
            }
          }),
          (n.hide = function () {
            if (
              !this._element.disabled &&
              !e(this._element).hasClass(at) &&
              e(this._menu).hasClass(lt)
            ) {
              var i = { relatedTarget: this._element },
                n = e.Event(rt.HIDE, i),
                s = t._getParentFromElement(this._element);
              e(s).trigger(n),
                n.isDefaultPrevented() ||
                  (this._popper && this._popper.destroy(),
                  e(this._menu).toggleClass(lt),
                  e(s).toggleClass(lt).trigger(e.Event(rt.HIDDEN, i)));
            }
          }),
          (n.dispose = function () {
            e.removeData(this._element, et),
              e(this._element).off(it),
              (this._element = null),
              (this._menu = null) !== this._popper &&
                (this._popper.destroy(), (this._popper = null));
          }),
          (n.update = function () {
            (this._inNavbar = this._detectNavbar()),
              null !== this._popper && this._popper.scheduleUpdate();
          }),
          (n._addEventListeners = function () {
            var t = this;
            e(this._element).on(rt.CLICK, function (e) {
              e.preventDefault(), e.stopPropagation(), t.toggle();
            });
          }),
          (n._getConfig = function (t) {
            return (
              (t = r(
                {},
                this.constructor.Default,
                {},
                e(this._element).data(),
                {},
                t
              )),
              l.typeCheckConfig(tt, t, this.constructor.DefaultType),
              t
            );
          }),
          (n._getMenuElement = function () {
            if (!this._menu) {
              var e = t._getParentFromElement(this._element);
              e && (this._menu = e.querySelector(ut));
            }
            return this._menu;
          }),
          (n._getPlacement = function () {
            var t = e(this._element.parentNode),
              i = "bottom-start";
            return (
              t.hasClass("dropup")
                ? ((i = "top-start"),
                  e(this._menu).hasClass(ht) && (i = "top-end"))
                : t.hasClass("dropright")
                ? (i = "right-start")
                : t.hasClass("dropleft")
                ? (i = "left-start")
                : e(this._menu).hasClass(ht) && (i = "bottom-end"),
              i
            );
          }),
          (n._detectNavbar = function () {
            return 0 < e(this._element).closest(".navbar").length;
          }),
          (n._getOffset = function () {
            var t = this,
              e = {};
            return (
              "function" == typeof this._config.offset
                ? (e.fn = function (e) {
                    return (
                      (e.offsets = r(
                        {},
                        e.offsets,
                        {},
                        t._config.offset(e.offsets, t._element) || {}
                      )),
                      e
                    );
                  })
                : (e.offset = this._config.offset),
              e
            );
          }),
          (n._getPopperConfig = function () {
            var t = {
              placement: this._getPlacement(),
              modifiers: {
                offset: this._getOffset(),
                flip: { enabled: this._config.flip },
                preventOverflow: { boundariesElement: this._config.boundary },
              },
            };
            return (
              "static" === this._config.display &&
                (t.modifiers.applyStyle = { enabled: !1 }),
              r({}, t, {}, this._config.popperConfig)
            );
          }),
          (t._jQueryInterface = function (i) {
            return this.each(function () {
              var n = e(this).data(et);
              if (
                (n ||
                  ((n = new t(this, "object" == typeof i ? i : null)),
                  e(this).data(et, n)),
                "string" == typeof i)
              ) {
                if (void 0 === n[i])
                  throw new TypeError('No method named "' + i + '"');
                n[i]();
              }
            });
          }),
          (t._clearMenus = function (i) {
            if (!i || (3 !== i.which && ("keyup" !== i.type || 9 === i.which)))
              for (
                var n = [].slice.call(document.querySelectorAll(ct)),
                  s = 0,
                  o = n.length;
                s < o;
                s++
              ) {
                var r = t._getParentFromElement(n[s]),
                  a = e(n[s]).data(et),
                  l = { relatedTarget: n[s] };
                if ((i && "click" === i.type && (l.clickEvent = i), a)) {
                  var h = a._menu;
                  if (
                    e(r).hasClass(lt) &&
                    !(
                      i &&
                      (("click" === i.type &&
                        /input|textarea/i.test(i.target.tagName)) ||
                        ("keyup" === i.type && 9 === i.which)) &&
                      e.contains(r, i.target)
                    )
                  ) {
                    var c = e.Event(rt.HIDE, l);
                    e(r).trigger(c),
                      c.isDefaultPrevented() ||
                        ("ontouchstart" in document.documentElement &&
                          e(document.body)
                            .children()
                            .off("mouseover", null, e.noop),
                        n[s].setAttribute("aria-expanded", "false"),
                        a._popper && a._popper.destroy(),
                        e(h).removeClass(lt),
                        e(r).removeClass(lt).trigger(e.Event(rt.HIDDEN, l)));
                  }
                }
              }
          }),
          (t._getParentFromElement = function (t) {
            var e,
              i = l.getSelectorFromElement(t);
            return i && (e = document.querySelector(i)), e || t.parentNode;
          }),
          (t._dataApiKeydownHandler = function (i) {
            if (
              (/input|textarea/i.test(i.target.tagName)
                ? !(
                    32 === i.which ||
                    (27 !== i.which &&
                      ((40 !== i.which && 38 !== i.which) ||
                        e(i.target).closest(ut).length))
                  )
                : ot.test(i.which)) &&
              (i.preventDefault(),
              i.stopPropagation(),
              !this.disabled && !e(this).hasClass(at))
            ) {
              var n = t._getParentFromElement(this),
                s = e(n).hasClass(lt);
              if (s || 27 !== i.which)
                if (s && (!s || (27 !== i.which && 32 !== i.which))) {
                  var o = [].slice
                    .call(
                      n.querySelectorAll(
                        ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)"
                      )
                    )
                    .filter(function (t) {
                      return e(t).is(":visible");
                    });
                  if (0 !== o.length) {
                    var r = o.indexOf(i.target);
                    38 === i.which && 0 < r && r--,
                      40 === i.which && r < o.length - 1 && r++,
                      r < 0 && (r = 0),
                      o[r].focus();
                  }
                } else {
                  if (27 === i.which) {
                    var a = n.querySelector(ct);
                    e(a).trigger("focus");
                  }
                  e(this).trigger("click");
                }
            }
          }),
          s(t, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.4.1";
              },
            },
            {
              key: "Default",
              get: function () {
                return dt;
              },
            },
            {
              key: "DefaultType",
              get: function () {
                return pt;
              },
            },
          ]),
          t
        );
      })();
    e(document)
      .on(rt.KEYDOWN_DATA_API, ct, ft._dataApiKeydownHandler)
      .on(rt.KEYDOWN_DATA_API, ut, ft._dataApiKeydownHandler)
      .on(rt.CLICK_DATA_API + " " + rt.KEYUP_DATA_API, ft._clearMenus)
      .on(rt.CLICK_DATA_API, ct, function (t) {
        t.preventDefault(),
          t.stopPropagation(),
          ft._jQueryInterface.call(e(this), "toggle");
      })
      .on(rt.CLICK_DATA_API, ".dropdown form", function (t) {
        t.stopPropagation();
      }),
      (e.fn[tt] = ft._jQueryInterface),
      (e.fn[tt].Constructor = ft),
      (e.fn[tt].noConflict = function () {
        return (e.fn[tt] = st), ft._jQueryInterface;
      });
    var gt = "modal",
      mt = "bs.modal",
      vt = "." + mt,
      _t = e.fn[gt],
      yt = { backdrop: !0, keyboard: !0, focus: !0, show: !0 },
      bt = {
        backdrop: "(boolean|string)",
        keyboard: "boolean",
        focus: "boolean",
        show: "boolean",
      },
      wt = {
        HIDE: "hide" + vt,
        HIDE_PREVENTED: "hidePrevented" + vt,
        HIDDEN: "hidden" + vt,
        SHOW: "show" + vt,
        SHOWN: "shown" + vt,
        FOCUSIN: "focusin" + vt,
        RESIZE: "resize" + vt,
        CLICK_DISMISS: "click.dismiss" + vt,
        KEYDOWN_DISMISS: "keydown.dismiss" + vt,
        MOUSEUP_DISMISS: "mouseup.dismiss" + vt,
        MOUSEDOWN_DISMISS: "mousedown.dismiss" + vt,
        CLICK_DATA_API: "click" + vt + ".data-api",
      },
      xt = "modal-open",
      Ct = "fade",
      kt = "show",
      Tt = "modal-static",
      Dt = ".modal-dialog",
      St = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
      Et = ".sticky-top",
      It = (function () {
        function t(t, e) {
          (this._config = this._getConfig(e)),
            (this._element = t),
            (this._dialog = t.querySelector(Dt)),
            (this._backdrop = null),
            (this._isShown = !1),
            (this._isBodyOverflowing = !1),
            (this._ignoreBackdropClick = !1),
            (this._isTransitioning = !1),
            (this._scrollbarWidth = 0);
        }
        var i = t.prototype;
        return (
          (i.toggle = function (t) {
            return this._isShown ? this.hide() : this.show(t);
          }),
          (i.show = function (t) {
            var i = this;
            if (!this._isShown && !this._isTransitioning) {
              e(this._element).hasClass(Ct) && (this._isTransitioning = !0);
              var n = e.Event(wt.SHOW, { relatedTarget: t });
              e(this._element).trigger(n),
                this._isShown ||
                  n.isDefaultPrevented() ||
                  ((this._isShown = !0),
                  this._checkScrollbar(),
                  this._setScrollbar(),
                  this._adjustDialog(),
                  this._setEscapeEvent(),
                  this._setResizeEvent(),
                  e(this._element).on(
                    wt.CLICK_DISMISS,
                    '[data-dismiss="modal"]',
                    function (t) {
                      return i.hide(t);
                    }
                  ),
                  e(this._dialog).on(wt.MOUSEDOWN_DISMISS, function () {
                    e(i._element).one(wt.MOUSEUP_DISMISS, function (t) {
                      e(t.target).is(i._element) &&
                        (i._ignoreBackdropClick = !0);
                    });
                  }),
                  this._showBackdrop(function () {
                    return i._showElement(t);
                  }));
            }
          }),
          (i.hide = function (t) {
            var i = this;
            if (
              (t && t.preventDefault(), this._isShown && !this._isTransitioning)
            ) {
              var n = e.Event(wt.HIDE);
              if (
                (e(this._element).trigger(n),
                this._isShown && !n.isDefaultPrevented())
              ) {
                this._isShown = !1;
                var s = e(this._element).hasClass(Ct);
                if (
                  (s && (this._isTransitioning = !0),
                  this._setEscapeEvent(),
                  this._setResizeEvent(),
                  e(document).off(wt.FOCUSIN),
                  e(this._element).removeClass(kt),
                  e(this._element).off(wt.CLICK_DISMISS),
                  e(this._dialog).off(wt.MOUSEDOWN_DISMISS),
                  s)
                ) {
                  var o = l.getTransitionDurationFromElement(this._element);
                  e(this._element)
                    .one(l.TRANSITION_END, function (t) {
                      return i._hideModal(t);
                    })
                    .emulateTransitionEnd(o);
                } else this._hideModal();
              }
            }
          }),
          (i.dispose = function () {
            [window, this._element, this._dialog].forEach(function (t) {
              return e(t).off(vt);
            }),
              e(document).off(wt.FOCUSIN),
              e.removeData(this._element, mt),
              (this._config = null),
              (this._element = null),
              (this._dialog = null),
              (this._backdrop = null),
              (this._isShown = null),
              (this._isBodyOverflowing = null),
              (this._ignoreBackdropClick = null),
              (this._isTransitioning = null),
              (this._scrollbarWidth = null);
          }),
          (i.handleUpdate = function () {
            this._adjustDialog();
          }),
          (i._getConfig = function (t) {
            return (t = r({}, yt, {}, t)), l.typeCheckConfig(gt, t, bt), t;
          }),
          (i._triggerBackdropTransition = function () {
            var t = this;
            if ("static" === this._config.backdrop) {
              var i = e.Event(wt.HIDE_PREVENTED);
              if ((e(this._element).trigger(i), i.defaultPrevented)) return;
              this._element.classList.add(Tt);
              var n = l.getTransitionDurationFromElement(this._element);
              e(this._element)
                .one(l.TRANSITION_END, function () {
                  t._element.classList.remove(Tt);
                })
                .emulateTransitionEnd(n),
                this._element.focus();
            } else this.hide();
          }),
          (i._showElement = function (t) {
            var i = this,
              n = e(this._element).hasClass(Ct),
              s = this._dialog
                ? this._dialog.querySelector(".modal-body")
                : null;
            function o() {
              i._config.focus && i._element.focus(),
                (i._isTransitioning = !1),
                e(i._element).trigger(r);
            }
            (this._element.parentNode &&
              this._element.parentNode.nodeType === Node.ELEMENT_NODE) ||
              document.body.appendChild(this._element),
              (this._element.style.display = "block"),
              this._element.removeAttribute("aria-hidden"),
              this._element.setAttribute("aria-modal", !0),
              e(this._dialog).hasClass("modal-dialog-scrollable") && s
                ? (s.scrollTop = 0)
                : (this._element.scrollTop = 0),
              n && l.reflow(this._element),
              e(this._element).addClass(kt),
              this._config.focus && this._enforceFocus();
            var r = e.Event(wt.SHOWN, { relatedTarget: t });
            if (n) {
              var a = l.getTransitionDurationFromElement(this._dialog);
              e(this._dialog).one(l.TRANSITION_END, o).emulateTransitionEnd(a);
            } else o();
          }),
          (i._enforceFocus = function () {
            var t = this;
            e(document)
              .off(wt.FOCUSIN)
              .on(wt.FOCUSIN, function (i) {
                document !== i.target &&
                  t._element !== i.target &&
                  0 === e(t._element).has(i.target).length &&
                  t._element.focus();
              });
          }),
          (i._setEscapeEvent = function () {
            var t = this;
            this._isShown && this._config.keyboard
              ? e(this._element).on(wt.KEYDOWN_DISMISS, function (e) {
                  27 === e.which && t._triggerBackdropTransition();
                })
              : this._isShown || e(this._element).off(wt.KEYDOWN_DISMISS);
          }),
          (i._setResizeEvent = function () {
            var t = this;
            this._isShown
              ? e(window).on(wt.RESIZE, function (e) {
                  return t.handleUpdate(e);
                })
              : e(window).off(wt.RESIZE);
          }),
          (i._hideModal = function () {
            var t = this;
            (this._element.style.display = "none"),
              this._element.setAttribute("aria-hidden", !0),
              this._element.removeAttribute("aria-modal"),
              (this._isTransitioning = !1),
              this._showBackdrop(function () {
                e(document.body).removeClass(xt),
                  t._resetAdjustments(),
                  t._resetScrollbar(),
                  e(t._element).trigger(wt.HIDDEN);
              });
          }),
          (i._removeBackdrop = function () {
            this._backdrop &&
              (e(this._backdrop).remove(), (this._backdrop = null));
          }),
          (i._showBackdrop = function (t) {
            var i = this,
              n = e(this._element).hasClass(Ct) ? Ct : "";
            if (this._isShown && this._config.backdrop) {
              if (
                ((this._backdrop = document.createElement("div")),
                (this._backdrop.className = "modal-backdrop"),
                n && this._backdrop.classList.add(n),
                e(this._backdrop).appendTo(document.body),
                e(this._element).on(wt.CLICK_DISMISS, function (t) {
                  i._ignoreBackdropClick
                    ? (i._ignoreBackdropClick = !1)
                    : t.target === t.currentTarget &&
                      i._triggerBackdropTransition();
                }),
                n && l.reflow(this._backdrop),
                e(this._backdrop).addClass(kt),
                !t)
              )
                return;
              if (!n) return void t();
              var s = l.getTransitionDurationFromElement(this._backdrop);
              e(this._backdrop)
                .one(l.TRANSITION_END, t)
                .emulateTransitionEnd(s);
            } else if (!this._isShown && this._backdrop) {
              e(this._backdrop).removeClass(kt);
              var o = function () {
                i._removeBackdrop(), t && t();
              };
              if (e(this._element).hasClass(Ct)) {
                var r = l.getTransitionDurationFromElement(this._backdrop);
                e(this._backdrop)
                  .one(l.TRANSITION_END, o)
                  .emulateTransitionEnd(r);
              } else o();
            } else t && t();
          }),
          (i._adjustDialog = function () {
            var t =
              this._element.scrollHeight >
              document.documentElement.clientHeight;
            !this._isBodyOverflowing &&
              t &&
              (this._element.style.paddingLeft = this._scrollbarWidth + "px"),
              this._isBodyOverflowing &&
                !t &&
                (this._element.style.paddingRight =
                  this._scrollbarWidth + "px");
          }),
          (i._resetAdjustments = function () {
            (this._element.style.paddingLeft = ""),
              (this._element.style.paddingRight = "");
          }),
          (i._checkScrollbar = function () {
            var t = document.body.getBoundingClientRect();
            (this._isBodyOverflowing = t.left + t.right < window.innerWidth),
              (this._scrollbarWidth = this._getScrollbarWidth());
          }),
          (i._setScrollbar = function () {
            var t = this;
            if (this._isBodyOverflowing) {
              var i = [].slice.call(document.querySelectorAll(St)),
                n = [].slice.call(document.querySelectorAll(Et));
              e(i).each(function (i, n) {
                var s = n.style.paddingRight,
                  o = e(n).css("padding-right");
                e(n)
                  .data("padding-right", s)
                  .css(
                    "padding-right",
                    parseFloat(o) + t._scrollbarWidth + "px"
                  );
              }),
                e(n).each(function (i, n) {
                  var s = n.style.marginRight,
                    o = e(n).css("margin-right");
                  e(n)
                    .data("margin-right", s)
                    .css(
                      "margin-right",
                      parseFloat(o) - t._scrollbarWidth + "px"
                    );
                });
              var s = document.body.style.paddingRight,
                o = e(document.body).css("padding-right");
              e(document.body)
                .data("padding-right", s)
                .css(
                  "padding-right",
                  parseFloat(o) + this._scrollbarWidth + "px"
                );
            }
            e(document.body).addClass(xt);
          }),
          (i._resetScrollbar = function () {
            var t = [].slice.call(document.querySelectorAll(St));
            e(t).each(function (t, i) {
              var n = e(i).data("padding-right");
              e(i).removeData("padding-right"),
                (i.style.paddingRight = n || "");
            });
            var i = [].slice.call(document.querySelectorAll("" + Et));
            e(i).each(function (t, i) {
              var n = e(i).data("margin-right");
              void 0 !== n &&
                e(i).css("margin-right", n).removeData("margin-right");
            });
            var n = e(document.body).data("padding-right");
            e(document.body).removeData("padding-right"),
              (document.body.style.paddingRight = n || "");
          }),
          (i._getScrollbarWidth = function () {
            var t = document.createElement("div");
            (t.className = "modal-scrollbar-measure"),
              document.body.appendChild(t);
            var e = t.getBoundingClientRect().width - t.clientWidth;
            return document.body.removeChild(t), e;
          }),
          (t._jQueryInterface = function (i, n) {
            return this.each(function () {
              var s = e(this).data(mt),
                o = r(
                  {},
                  yt,
                  {},
                  e(this).data(),
                  {},
                  "object" == typeof i && i ? i : {}
                );
              if (
                (s || ((s = new t(this, o)), e(this).data(mt, s)),
                "string" == typeof i)
              ) {
                if (void 0 === s[i])
                  throw new TypeError('No method named "' + i + '"');
                s[i](n);
              } else o.show && s.show(n);
            });
          }),
          s(t, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.4.1";
              },
            },
            {
              key: "Default",
              get: function () {
                return yt;
              },
            },
          ]),
          t
        );
      })();
    e(document).on(wt.CLICK_DATA_API, '[data-toggle="modal"]', function (t) {
      var i,
        n = this,
        s = l.getSelectorFromElement(this);
      s && (i = document.querySelector(s));
      var o = e(i).data(mt) ? "toggle" : r({}, e(i).data(), {}, e(this).data());
      ("A" !== this.tagName && "AREA" !== this.tagName) || t.preventDefault();
      var a = e(i).one(wt.SHOW, function (t) {
        t.isDefaultPrevented() ||
          a.one(wt.HIDDEN, function () {
            e(n).is(":visible") && n.focus();
          });
      });
      It._jQueryInterface.call(e(i), o, this);
    }),
      (e.fn[gt] = It._jQueryInterface),
      (e.fn[gt].Constructor = It),
      (e.fn[gt].noConflict = function () {
        return (e.fn[gt] = _t), It._jQueryInterface;
      });
    var At = [
        "background",
        "cite",
        "href",
        "itemtype",
        "longdesc",
        "poster",
        "src",
        "xlink:href",
      ],
      Pt = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:\/?#]*(?:[\/?#]|$))/gi,
      Ot =
        /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i;
    function Nt(t, e, i) {
      if (0 === t.length) return t;
      if (i && "function" == typeof i) return i(t);
      for (
        var n = new window.DOMParser().parseFromString(t, "text/html"),
          s = Object.keys(e),
          o = [].slice.call(n.body.querySelectorAll("*")),
          r = function (t) {
            var i = o[t],
              n = i.nodeName.toLowerCase();
            if (-1 === s.indexOf(i.nodeName.toLowerCase()))
              return i.parentNode.removeChild(i), "continue";
            var r = [].slice.call(i.attributes),
              a = [].concat(e["*"] || [], e[n] || []);
            r.forEach(function (t) {
              !(function (t, e) {
                var i = t.nodeName.toLowerCase();
                if (-1 !== e.indexOf(i))
                  return (
                    -1 === At.indexOf(i) ||
                    Boolean(t.nodeValue.match(Pt) || t.nodeValue.match(Ot))
                  );
                for (
                  var n = e.filter(function (t) {
                      return t instanceof RegExp;
                    }),
                    s = 0,
                    o = n.length;
                  s < o;
                  s++
                )
                  if (i.match(n[s])) return !0;
                return !1;
              })(t, a) && i.removeAttribute(t.nodeName);
            });
          },
          a = 0,
          l = o.length;
        a < l;
        a++
      )
        r(a);
      return n.body.innerHTML;
    }
    var Mt = "tooltip",
      Ht = "bs.tooltip",
      zt = "." + Ht,
      Lt = e.fn[Mt],
      Wt = "bs-tooltip",
      jt = new RegExp("(^|\\s)" + Wt + "\\S+", "g"),
      Rt = ["sanitize", "whiteList", "sanitizeFn"],
      Ft = {
        animation: "boolean",
        template: "string",
        title: "(string|element|function)",
        trigger: "string",
        delay: "(number|object)",
        html: "boolean",
        selector: "(string|boolean)",
        placement: "(string|function)",
        offset: "(number|string|function)",
        container: "(string|element|boolean)",
        fallbackPlacement: "(string|array)",
        boundary: "(string|element)",
        sanitize: "boolean",
        sanitizeFn: "(null|function)",
        whiteList: "object",
        popperConfig: "(null|object)",
      },
      qt = {
        AUTO: "auto",
        TOP: "top",
        RIGHT: "right",
        BOTTOM: "bottom",
        LEFT: "left",
      },
      Bt = {
        animation: !0,
        template:
          '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        selector: !1,
        placement: "top",
        offset: 0,
        container: !1,
        fallbackPlacement: "flip",
        boundary: "scrollParent",
        sanitize: !0,
        sanitizeFn: null,
        whiteList: {
          "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
          a: ["target", "href", "title", "rel"],
          area: [],
          b: [],
          br: [],
          col: [],
          code: [],
          div: [],
          em: [],
          hr: [],
          h1: [],
          h2: [],
          h3: [],
          h4: [],
          h5: [],
          h6: [],
          i: [],
          img: ["src", "alt", "title", "width", "height"],
          li: [],
          ol: [],
          p: [],
          pre: [],
          s: [],
          small: [],
          span: [],
          sub: [],
          sup: [],
          strong: [],
          u: [],
          ul: [],
        },
        popperConfig: null,
      },
      $t = "show",
      Ut = {
        HIDE: "hide" + zt,
        HIDDEN: "hidden" + zt,
        SHOW: "show" + zt,
        SHOWN: "shown" + zt,
        INSERTED: "inserted" + zt,
        CLICK: "click" + zt,
        FOCUSIN: "focusin" + zt,
        FOCUSOUT: "focusout" + zt,
        MOUSEENTER: "mouseenter" + zt,
        MOUSELEAVE: "mouseleave" + zt,
      },
      Yt = "fade",
      Kt = "show",
      Vt = "hover",
      Qt = "focus",
      Xt = (function () {
        function t(t, e) {
          if (void 0 === i)
            throw new TypeError(
              "Bootstrap's tooltips require Popper.js (https://popper.js.org/)"
            );
          (this._isEnabled = !0),
            (this._timeout = 0),
            (this._hoverState = ""),
            (this._activeTrigger = {}),
            (this._popper = null),
            (this.element = t),
            (this.config = this._getConfig(e)),
            (this.tip = null),
            this._setListeners();
        }
        var n = t.prototype;
        return (
          (n.enable = function () {
            this._isEnabled = !0;
          }),
          (n.disable = function () {
            this._isEnabled = !1;
          }),
          (n.toggleEnabled = function () {
            this._isEnabled = !this._isEnabled;
          }),
          (n.toggle = function (t) {
            if (this._isEnabled)
              if (t) {
                var i = this.constructor.DATA_KEY,
                  n = e(t.currentTarget).data(i);
                n ||
                  ((n = new this.constructor(
                    t.currentTarget,
                    this._getDelegateConfig()
                  )),
                  e(t.currentTarget).data(i, n)),
                  (n._activeTrigger.click = !n._activeTrigger.click),
                  n._isWithActiveTrigger()
                    ? n._enter(null, n)
                    : n._leave(null, n);
              } else {
                if (e(this.getTipElement()).hasClass(Kt))
                  return void this._leave(null, this);
                this._enter(null, this);
              }
          }),
          (n.dispose = function () {
            clearTimeout(this._timeout),
              e.removeData(this.element, this.constructor.DATA_KEY),
              e(this.element).off(this.constructor.EVENT_KEY),
              e(this.element)
                .closest(".modal")
                .off("hide.bs.modal", this._hideModalHandler),
              this.tip && e(this.tip).remove(),
              (this._isEnabled = null),
              (this._timeout = null),
              (this._hoverState = null),
              (this._activeTrigger = null),
              this._popper && this._popper.destroy(),
              (this._popper = null),
              (this.element = null),
              (this.config = null),
              (this.tip = null);
          }),
          (n.show = function () {
            var t = this;
            if ("none" === e(this.element).css("display"))
              throw new Error("Please use show on visible elements");
            var n = e.Event(this.constructor.Event.SHOW);
            if (this.isWithContent() && this._isEnabled) {
              e(this.element).trigger(n);
              var s = l.findShadowRoot(this.element),
                o = e.contains(
                  null !== s ? s : this.element.ownerDocument.documentElement,
                  this.element
                );
              if (n.isDefaultPrevented() || !o) return;
              var r = this.getTipElement(),
                a = l.getUID(this.constructor.NAME);
              r.setAttribute("id", a),
                this.element.setAttribute("aria-describedby", a),
                this.setContent(),
                this.config.animation && e(r).addClass(Yt);
              var h =
                  "function" == typeof this.config.placement
                    ? this.config.placement.call(this, r, this.element)
                    : this.config.placement,
                c = this._getAttachment(h);
              this.addAttachmentClass(c);
              var u = this._getContainer();
              e(r).data(this.constructor.DATA_KEY, this),
                e.contains(
                  this.element.ownerDocument.documentElement,
                  this.tip
                ) || e(r).appendTo(u),
                e(this.element).trigger(this.constructor.Event.INSERTED),
                (this._popper = new i(
                  this.element,
                  r,
                  this._getPopperConfig(c)
                )),
                e(r).addClass(Kt),
                "ontouchstart" in document.documentElement &&
                  e(document.body).children().on("mouseover", null, e.noop);
              var d = function () {
                t.config.animation && t._fixTransition();
                var i = t._hoverState;
                (t._hoverState = null),
                  e(t.element).trigger(t.constructor.Event.SHOWN),
                  "out" === i && t._leave(null, t);
              };
              if (e(this.tip).hasClass(Yt)) {
                var p = l.getTransitionDurationFromElement(this.tip);
                e(this.tip).one(l.TRANSITION_END, d).emulateTransitionEnd(p);
              } else d();
            }
          }),
          (n.hide = function (t) {
            function i() {
              n._hoverState !== $t &&
                s.parentNode &&
                s.parentNode.removeChild(s),
                n._cleanTipClass(),
                n.element.removeAttribute("aria-describedby"),
                e(n.element).trigger(n.constructor.Event.HIDDEN),
                null !== n._popper && n._popper.destroy(),
                t && t();
            }
            var n = this,
              s = this.getTipElement(),
              o = e.Event(this.constructor.Event.HIDE);
            if ((e(this.element).trigger(o), !o.isDefaultPrevented())) {
              if (
                (e(s).removeClass(Kt),
                "ontouchstart" in document.documentElement &&
                  e(document.body).children().off("mouseover", null, e.noop),
                (this._activeTrigger.click = !1),
                (this._activeTrigger[Qt] = !1),
                (this._activeTrigger[Vt] = !1),
                e(this.tip).hasClass(Yt))
              ) {
                var r = l.getTransitionDurationFromElement(s);
                e(s).one(l.TRANSITION_END, i).emulateTransitionEnd(r);
              } else i();
              this._hoverState = "";
            }
          }),
          (n.update = function () {
            null !== this._popper && this._popper.scheduleUpdate();
          }),
          (n.isWithContent = function () {
            return Boolean(this.getTitle());
          }),
          (n.addAttachmentClass = function (t) {
            e(this.getTipElement()).addClass(Wt + "-" + t);
          }),
          (n.getTipElement = function () {
            return (
              (this.tip = this.tip || e(this.config.template)[0]), this.tip
            );
          }),
          (n.setContent = function () {
            var t = this.getTipElement();
            this.setElementContent(
              e(t.querySelectorAll(".tooltip-inner")),
              this.getTitle()
            ),
              e(t).removeClass(Yt + " " + Kt);
          }),
          (n.setElementContent = function (t, i) {
            "object" != typeof i || (!i.nodeType && !i.jquery)
              ? this.config.html
                ? (this.config.sanitize &&
                    (i = Nt(i, this.config.whiteList, this.config.sanitizeFn)),
                  t.html(i))
                : t.text(i)
              : this.config.html
              ? e(i).parent().is(t) || t.empty().append(i)
              : t.text(e(i).text());
          }),
          (n.getTitle = function () {
            var t = this.element.getAttribute("data-original-title");
            return (
              t ||
              ("function" == typeof this.config.title
                ? this.config.title.call(this.element)
                : this.config.title)
            );
          }),
          (n._getPopperConfig = function (t) {
            var e = this;
            return r(
              {},
              {
                placement: t,
                modifiers: {
                  offset: this._getOffset(),
                  flip: { behavior: this.config.fallbackPlacement },
                  arrow: { element: ".arrow" },
                  preventOverflow: { boundariesElement: this.config.boundary },
                },
                onCreate: function (t) {
                  t.originalPlacement !== t.placement &&
                    e._handlePopperPlacementChange(t);
                },
                onUpdate: function (t) {
                  return e._handlePopperPlacementChange(t);
                },
              },
              {},
              this.config.popperConfig
            );
          }),
          (n._getOffset = function () {
            var t = this,
              e = {};
            return (
              "function" == typeof this.config.offset
                ? (e.fn = function (e) {
                    return (
                      (e.offsets = r(
                        {},
                        e.offsets,
                        {},
                        t.config.offset(e.offsets, t.element) || {}
                      )),
                      e
                    );
                  })
                : (e.offset = this.config.offset),
              e
            );
          }),
          (n._getContainer = function () {
            return !1 === this.config.container
              ? document.body
              : l.isElement(this.config.container)
              ? e(this.config.container)
              : e(document).find(this.config.container);
          }),
          (n._getAttachment = function (t) {
            return qt[t.toUpperCase()];
          }),
          (n._setListeners = function () {
            var t = this;
            this.config.trigger.split(" ").forEach(function (i) {
              if ("click" === i)
                e(t.element).on(
                  t.constructor.Event.CLICK,
                  t.config.selector,
                  function (e) {
                    return t.toggle(e);
                  }
                );
              else if ("manual" !== i) {
                var n =
                    i === Vt
                      ? t.constructor.Event.MOUSEENTER
                      : t.constructor.Event.FOCUSIN,
                  s =
                    i === Vt
                      ? t.constructor.Event.MOUSELEAVE
                      : t.constructor.Event.FOCUSOUT;
                e(t.element)
                  .on(n, t.config.selector, function (e) {
                    return t._enter(e);
                  })
                  .on(s, t.config.selector, function (e) {
                    return t._leave(e);
                  });
              }
            }),
              (this._hideModalHandler = function () {
                t.element && t.hide();
              }),
              e(this.element)
                .closest(".modal")
                .on("hide.bs.modal", this._hideModalHandler),
              this.config.selector
                ? (this.config = r({}, this.config, {
                    trigger: "manual",
                    selector: "",
                  }))
                : this._fixTitle();
          }),
          (n._fixTitle = function () {
            var t = typeof this.element.getAttribute("data-original-title");
            (!this.element.getAttribute("title") && "string" == t) ||
              (this.element.setAttribute(
                "data-original-title",
                this.element.getAttribute("title") || ""
              ),
              this.element.setAttribute("title", ""));
          }),
          (n._enter = function (t, i) {
            var n = this.constructor.DATA_KEY;
            (i = i || e(t.currentTarget).data(n)) ||
              ((i = new this.constructor(
                t.currentTarget,
                this._getDelegateConfig()
              )),
              e(t.currentTarget).data(n, i)),
              t && (i._activeTrigger["focusin" === t.type ? Qt : Vt] = !0),
              e(i.getTipElement()).hasClass(Kt) || i._hoverState === $t
                ? (i._hoverState = $t)
                : (clearTimeout(i._timeout),
                  (i._hoverState = $t),
                  i.config.delay && i.config.delay.show
                    ? (i._timeout = setTimeout(function () {
                        i._hoverState === $t && i.show();
                      }, i.config.delay.show))
                    : i.show());
          }),
          (n._leave = function (t, i) {
            var n = this.constructor.DATA_KEY;
            (i = i || e(t.currentTarget).data(n)) ||
              ((i = new this.constructor(
                t.currentTarget,
                this._getDelegateConfig()
              )),
              e(t.currentTarget).data(n, i)),
              t && (i._activeTrigger["focusout" === t.type ? Qt : Vt] = !1),
              i._isWithActiveTrigger() ||
                (clearTimeout(i._timeout),
                (i._hoverState = "out"),
                i.config.delay && i.config.delay.hide
                  ? (i._timeout = setTimeout(function () {
                      "out" === i._hoverState && i.hide();
                    }, i.config.delay.hide))
                  : i.hide());
          }),
          (n._isWithActiveTrigger = function () {
            for (var t in this._activeTrigger)
              if (this._activeTrigger[t]) return !0;
            return !1;
          }),
          (n._getConfig = function (t) {
            var i = e(this.element).data();
            return (
              Object.keys(i).forEach(function (t) {
                -1 !== Rt.indexOf(t) && delete i[t];
              }),
              "number" ==
                typeof (t = r(
                  {},
                  this.constructor.Default,
                  {},
                  i,
                  {},
                  "object" == typeof t && t ? t : {}
                )).delay && (t.delay = { show: t.delay, hide: t.delay }),
              "number" == typeof t.title && (t.title = t.title.toString()),
              "number" == typeof t.content &&
                (t.content = t.content.toString()),
              l.typeCheckConfig(Mt, t, this.constructor.DefaultType),
              t.sanitize &&
                (t.template = Nt(t.template, t.whiteList, t.sanitizeFn)),
              t
            );
          }),
          (n._getDelegateConfig = function () {
            var t = {};
            if (this.config)
              for (var e in this.config)
                this.constructor.Default[e] !== this.config[e] &&
                  (t[e] = this.config[e]);
            return t;
          }),
          (n._cleanTipClass = function () {
            var t = e(this.getTipElement()),
              i = t.attr("class").match(jt);
            null !== i && i.length && t.removeClass(i.join(""));
          }),
          (n._handlePopperPlacementChange = function (t) {
            var e = t.instance;
            (this.tip = e.popper),
              this._cleanTipClass(),
              this.addAttachmentClass(this._getAttachment(t.placement));
          }),
          (n._fixTransition = function () {
            var t = this.getTipElement(),
              i = this.config.animation;
            null === t.getAttribute("x-placement") &&
              (e(t).removeClass(Yt),
              (this.config.animation = !1),
              this.hide(),
              this.show(),
              (this.config.animation = i));
          }),
          (t._jQueryInterface = function (i) {
            return this.each(function () {
              var n = e(this).data(Ht),
                s = "object" == typeof i && i;
              if (
                (n || !/dispose|hide/.test(i)) &&
                (n || ((n = new t(this, s)), e(this).data(Ht, n)),
                "string" == typeof i)
              ) {
                if (void 0 === n[i])
                  throw new TypeError('No method named "' + i + '"');
                n[i]();
              }
            });
          }),
          s(t, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.4.1";
              },
            },
            {
              key: "Default",
              get: function () {
                return Bt;
              },
            },
            {
              key: "NAME",
              get: function () {
                return Mt;
              },
            },
            {
              key: "DATA_KEY",
              get: function () {
                return Ht;
              },
            },
            {
              key: "Event",
              get: function () {
                return Ut;
              },
            },
            {
              key: "EVENT_KEY",
              get: function () {
                return zt;
              },
            },
            {
              key: "DefaultType",
              get: function () {
                return Ft;
              },
            },
          ]),
          t
        );
      })();
    (e.fn[Mt] = Xt._jQueryInterface),
      (e.fn[Mt].Constructor = Xt),
      (e.fn[Mt].noConflict = function () {
        return (e.fn[Mt] = Lt), Xt._jQueryInterface;
      });
    var Gt = "popover",
      Zt = "bs.popover",
      Jt = "." + Zt,
      te = e.fn[Gt],
      ee = "bs-popover",
      ie = new RegExp("(^|\\s)" + ee + "\\S+", "g"),
      ne = r({}, Xt.Default, {
        placement: "right",
        trigger: "click",
        content: "",
        template:
          '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
      }),
      se = r({}, Xt.DefaultType, { content: "(string|element|function)" }),
      oe = {
        HIDE: "hide" + Jt,
        HIDDEN: "hidden" + Jt,
        SHOW: "show" + Jt,
        SHOWN: "shown" + Jt,
        INSERTED: "inserted" + Jt,
        CLICK: "click" + Jt,
        FOCUSIN: "focusin" + Jt,
        FOCUSOUT: "focusout" + Jt,
        MOUSEENTER: "mouseenter" + Jt,
        MOUSELEAVE: "mouseleave" + Jt,
      },
      re = (function (t) {
        function i() {
          return t.apply(this, arguments) || this;
        }
        !(function (t, e) {
          (t.prototype = Object.create(e.prototype)),
            ((t.prototype.constructor = t).__proto__ = e);
        })(i, t);
        var n = i.prototype;
        return (
          (n.isWithContent = function () {
            return this.getTitle() || this._getContent();
          }),
          (n.addAttachmentClass = function (t) {
            e(this.getTipElement()).addClass(ee + "-" + t);
          }),
          (n.getTipElement = function () {
            return (
              (this.tip = this.tip || e(this.config.template)[0]), this.tip
            );
          }),
          (n.setContent = function () {
            var t = e(this.getTipElement());
            this.setElementContent(t.find(".popover-header"), this.getTitle());
            var i = this._getContent();
            "function" == typeof i && (i = i.call(this.element)),
              this.setElementContent(t.find(".popover-body"), i),
              t.removeClass("fade show");
          }),
          (n._getContent = function () {
            return (
              this.element.getAttribute("data-content") || this.config.content
            );
          }),
          (n._cleanTipClass = function () {
            var t = e(this.getTipElement()),
              i = t.attr("class").match(ie);
            null !== i && 0 < i.length && t.removeClass(i.join(""));
          }),
          (i._jQueryInterface = function (t) {
            return this.each(function () {
              var n = e(this).data(Zt),
                s = "object" == typeof t ? t : null;
              if (
                (n || !/dispose|hide/.test(t)) &&
                (n || ((n = new i(this, s)), e(this).data(Zt, n)),
                "string" == typeof t)
              ) {
                if (void 0 === n[t])
                  throw new TypeError('No method named "' + t + '"');
                n[t]();
              }
            });
          }),
          s(i, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.4.1";
              },
            },
            {
              key: "Default",
              get: function () {
                return ne;
              },
            },
            {
              key: "NAME",
              get: function () {
                return Gt;
              },
            },
            {
              key: "DATA_KEY",
              get: function () {
                return Zt;
              },
            },
            {
              key: "Event",
              get: function () {
                return oe;
              },
            },
            {
              key: "EVENT_KEY",
              get: function () {
                return Jt;
              },
            },
            {
              key: "DefaultType",
              get: function () {
                return se;
              },
            },
          ]),
          i
        );
      })(Xt);
    (e.fn[Gt] = re._jQueryInterface),
      (e.fn[Gt].Constructor = re),
      (e.fn[Gt].noConflict = function () {
        return (e.fn[Gt] = te), re._jQueryInterface;
      });
    var ae = "scrollspy",
      le = "bs.scrollspy",
      he = "." + le,
      ce = e.fn[ae],
      ue = { offset: 10, method: "auto", target: "" },
      de = { offset: "number", method: "string", target: "(string|element)" },
      pe = {
        ACTIVATE: "activate" + he,
        SCROLL: "scroll" + he,
        LOAD_DATA_API: "load" + he + ".data-api",
      },
      fe = "active",
      ge = ".nav, .list-group",
      me = ".nav-link",
      ve = ".list-group-item",
      _e = ".dropdown-item",
      ye = "position",
      be = (function () {
        function t(t, i) {
          var n = this;
          (this._element = t),
            (this._scrollElement = "BODY" === t.tagName ? window : t),
            (this._config = this._getConfig(i)),
            (this._selector =
              this._config.target +
              " " +
              me +
              "," +
              this._config.target +
              " " +
              ve +
              "," +
              this._config.target +
              " " +
              _e),
            (this._offsets = []),
            (this._targets = []),
            (this._activeTarget = null),
            (this._scrollHeight = 0),
            e(this._scrollElement).on(pe.SCROLL, function (t) {
              return n._process(t);
            }),
            this.refresh(),
            this._process();
        }
        var i = t.prototype;
        return (
          (i.refresh = function () {
            var t = this,
              i =
                this._scrollElement === this._scrollElement.window
                  ? "offset"
                  : ye,
              n = "auto" === this._config.method ? i : this._config.method,
              s = n === ye ? this._getScrollTop() : 0;
            (this._offsets = []),
              (this._targets = []),
              (this._scrollHeight = this._getScrollHeight()),
              [].slice
                .call(document.querySelectorAll(this._selector))
                .map(function (t) {
                  var i,
                    o = l.getSelectorFromElement(t);
                  if ((o && (i = document.querySelector(o)), i)) {
                    var r = i.getBoundingClientRect();
                    if (r.width || r.height) return [e(i)[n]().top + s, o];
                  }
                  return null;
                })
                .filter(function (t) {
                  return t;
                })
                .sort(function (t, e) {
                  return t[0] - e[0];
                })
                .forEach(function (e) {
                  t._offsets.push(e[0]), t._targets.push(e[1]);
                });
          }),
          (i.dispose = function () {
            e.removeData(this._element, le),
              e(this._scrollElement).off(he),
              (this._element = null),
              (this._scrollElement = null),
              (this._config = null),
              (this._selector = null),
              (this._offsets = null),
              (this._targets = null),
              (this._activeTarget = null),
              (this._scrollHeight = null);
          }),
          (i._getConfig = function (t) {
            if (
              "string" !=
              typeof (t = r({}, ue, {}, "object" == typeof t && t ? t : {}))
                .target
            ) {
              var i = e(t.target).attr("id");
              i || ((i = l.getUID(ae)), e(t.target).attr("id", i)),
                (t.target = "#" + i);
            }
            return l.typeCheckConfig(ae, t, de), t;
          }),
          (i._getScrollTop = function () {
            return this._scrollElement === window
              ? this._scrollElement.pageYOffset
              : this._scrollElement.scrollTop;
          }),
          (i._getScrollHeight = function () {
            return (
              this._scrollElement.scrollHeight ||
              Math.max(
                document.body.scrollHeight,
                document.documentElement.scrollHeight
              )
            );
          }),
          (i._getOffsetHeight = function () {
            return this._scrollElement === window
              ? window.innerHeight
              : this._scrollElement.getBoundingClientRect().height;
          }),
          (i._process = function () {
            var t = this._getScrollTop() + this._config.offset,
              e = this._getScrollHeight(),
              i = this._config.offset + e - this._getOffsetHeight();
            if ((this._scrollHeight !== e && this.refresh(), i <= t)) {
              var n = this._targets[this._targets.length - 1];
              this._activeTarget !== n && this._activate(n);
            } else {
              if (
                this._activeTarget &&
                t < this._offsets[0] &&
                0 < this._offsets[0]
              )
                return (this._activeTarget = null), void this._clear();
              for (var s = this._offsets.length; s--; )
                this._activeTarget !== this._targets[s] &&
                  t >= this._offsets[s] &&
                  (void 0 === this._offsets[s + 1] ||
                    t < this._offsets[s + 1]) &&
                  this._activate(this._targets[s]);
            }
          }),
          (i._activate = function (t) {
            (this._activeTarget = t), this._clear();
            var i = this._selector.split(",").map(function (e) {
                return (
                  e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]'
                );
              }),
              n = e([].slice.call(document.querySelectorAll(i.join(","))));
            n.hasClass("dropdown-item")
              ? (n.closest(".dropdown").find(".dropdown-toggle").addClass(fe),
                n.addClass(fe))
              : (n.addClass(fe),
                n
                  .parents(ge)
                  .prev(me + ", " + ve)
                  .addClass(fe),
                n.parents(ge).prev(".nav-item").children(me).addClass(fe)),
              e(this._scrollElement).trigger(pe.ACTIVATE, { relatedTarget: t });
          }),
          (i._clear = function () {
            [].slice
              .call(document.querySelectorAll(this._selector))
              .filter(function (t) {
                return t.classList.contains(fe);
              })
              .forEach(function (t) {
                return t.classList.remove(fe);
              });
          }),
          (t._jQueryInterface = function (i) {
            return this.each(function () {
              var n = e(this).data(le);
              if (
                (n ||
                  ((n = new t(this, "object" == typeof i && i)),
                  e(this).data(le, n)),
                "string" == typeof i)
              ) {
                if (void 0 === n[i])
                  throw new TypeError('No method named "' + i + '"');
                n[i]();
              }
            });
          }),
          s(t, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.4.1";
              },
            },
            {
              key: "Default",
              get: function () {
                return ue;
              },
            },
          ]),
          t
        );
      })();
    e(window).on(pe.LOAD_DATA_API, function () {
      for (
        var t = [].slice.call(document.querySelectorAll('[data-spy="scroll"]')),
          i = t.length;
        i--;

      ) {
        var n = e(t[i]);
        be._jQueryInterface.call(n, n.data());
      }
    }),
      (e.fn[ae] = be._jQueryInterface),
      (e.fn[ae].Constructor = be),
      (e.fn[ae].noConflict = function () {
        return (e.fn[ae] = ce), be._jQueryInterface;
      });
    var we = "bs.tab",
      xe = "." + we,
      Ce = e.fn.tab,
      ke = {
        HIDE: "hide" + xe,
        HIDDEN: "hidden" + xe,
        SHOW: "show" + xe,
        SHOWN: "shown" + xe,
        CLICK_DATA_API: "click" + xe + ".data-api",
      },
      Te = "active",
      De = ".active",
      Se = "> li > .active",
      Ee = (function () {
        function t(t) {
          this._element = t;
        }
        var i = t.prototype;
        return (
          (i.show = function () {
            var t = this;
            if (
              !(
                (this._element.parentNode &&
                  this._element.parentNode.nodeType === Node.ELEMENT_NODE &&
                  e(this._element).hasClass(Te)) ||
                e(this._element).hasClass("disabled")
              )
            ) {
              var i,
                n,
                s = e(this._element).closest(".nav, .list-group")[0],
                o = l.getSelectorFromElement(this._element);
              if (s) {
                var r = "UL" === s.nodeName || "OL" === s.nodeName ? Se : De;
                n = (n = e.makeArray(e(s).find(r)))[n.length - 1];
              }
              var a = e.Event(ke.HIDE, { relatedTarget: this._element }),
                h = e.Event(ke.SHOW, { relatedTarget: n });
              if (
                (n && e(n).trigger(a),
                e(this._element).trigger(h),
                !h.isDefaultPrevented() && !a.isDefaultPrevented())
              ) {
                o && (i = document.querySelector(o)),
                  this._activate(this._element, s);
                var c = function () {
                  var i = e.Event(ke.HIDDEN, { relatedTarget: t._element }),
                    s = e.Event(ke.SHOWN, { relatedTarget: n });
                  e(n).trigger(i), e(t._element).trigger(s);
                };
                i ? this._activate(i, i.parentNode, c) : c();
              }
            }
          }),
          (i.dispose = function () {
            e.removeData(this._element, we), (this._element = null);
          }),
          (i._activate = function (t, i, n) {
            function s() {
              return o._transitionComplete(t, r, n);
            }
            var o = this,
              r = (
                !i || ("UL" !== i.nodeName && "OL" !== i.nodeName)
                  ? e(i).children(De)
                  : e(i).find(Se)
              )[0],
              a = n && r && e(r).hasClass("fade");
            if (r && a) {
              var h = l.getTransitionDurationFromElement(r);
              e(r)
                .removeClass("show")
                .one(l.TRANSITION_END, s)
                .emulateTransitionEnd(h);
            } else s();
          }),
          (i._transitionComplete = function (t, i, n) {
            if (i) {
              e(i).removeClass(Te);
              var s = e(i.parentNode).find("> .dropdown-menu .active")[0];
              s && e(s).removeClass(Te),
                "tab" === i.getAttribute("role") &&
                  i.setAttribute("aria-selected", !1);
            }
            if (
              (e(t).addClass(Te),
              "tab" === t.getAttribute("role") &&
                t.setAttribute("aria-selected", !0),
              l.reflow(t),
              t.classList.contains("fade") && t.classList.add("show"),
              t.parentNode && e(t.parentNode).hasClass("dropdown-menu"))
            ) {
              var o = e(t).closest(".dropdown")[0];
              if (o) {
                var r = [].slice.call(o.querySelectorAll(".dropdown-toggle"));
                e(r).addClass(Te);
              }
              t.setAttribute("aria-expanded", !0);
            }
            n && n();
          }),
          (t._jQueryInterface = function (i) {
            return this.each(function () {
              var n = e(this),
                s = n.data(we);
              if (
                (s || ((s = new t(this)), n.data(we, s)), "string" == typeof i)
              ) {
                if (void 0 === s[i])
                  throw new TypeError('No method named "' + i + '"');
                s[i]();
              }
            });
          }),
          s(t, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.4.1";
              },
            },
          ]),
          t
        );
      })();
    e(document).on(
      ke.CLICK_DATA_API,
      '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
      function (t) {
        t.preventDefault(), Ee._jQueryInterface.call(e(this), "show");
      }
    ),
      (e.fn.tab = Ee._jQueryInterface),
      (e.fn.tab.Constructor = Ee),
      (e.fn.tab.noConflict = function () {
        return (e.fn.tab = Ce), Ee._jQueryInterface;
      });
    var Ie = "toast",
      Ae = "bs.toast",
      Pe = "." + Ae,
      Oe = e.fn[Ie],
      Ne = {
        CLICK_DISMISS: "click.dismiss" + Pe,
        HIDE: "hide" + Pe,
        HIDDEN: "hidden" + Pe,
        SHOW: "show" + Pe,
        SHOWN: "shown" + Pe,
      },
      Me = "hide",
      He = "show",
      ze = "showing",
      Le = { animation: "boolean", autohide: "boolean", delay: "number" },
      We = { animation: !0, autohide: !0, delay: 500 },
      je = (function () {
        function t(t, e) {
          (this._element = t),
            (this._config = this._getConfig(e)),
            (this._timeout = null),
            this._setListeners();
        }
        var i = t.prototype;
        return (
          (i.show = function () {
            var t = this,
              i = e.Event(Ne.SHOW);
            if ((e(this._element).trigger(i), !i.isDefaultPrevented())) {
              this._config.animation && this._element.classList.add("fade");
              var n = function () {
                t._element.classList.remove(ze),
                  t._element.classList.add(He),
                  e(t._element).trigger(Ne.SHOWN),
                  t._config.autohide &&
                    (t._timeout = setTimeout(function () {
                      t.hide();
                    }, t._config.delay));
              };
              if (
                (this._element.classList.remove(Me),
                l.reflow(this._element),
                this._element.classList.add(ze),
                this._config.animation)
              ) {
                var s = l.getTransitionDurationFromElement(this._element);
                e(this._element)
                  .one(l.TRANSITION_END, n)
                  .emulateTransitionEnd(s);
              } else n();
            }
          }),
          (i.hide = function () {
            if (this._element.classList.contains(He)) {
              var t = e.Event(Ne.HIDE);
              e(this._element).trigger(t),
                t.isDefaultPrevented() || this._close();
            }
          }),
          (i.dispose = function () {
            clearTimeout(this._timeout),
              (this._timeout = null),
              this._element.classList.contains(He) &&
                this._element.classList.remove(He),
              e(this._element).off(Ne.CLICK_DISMISS),
              e.removeData(this._element, Ae),
              (this._element = null),
              (this._config = null);
          }),
          (i._getConfig = function (t) {
            return (
              (t = r(
                {},
                We,
                {},
                e(this._element).data(),
                {},
                "object" == typeof t && t ? t : {}
              )),
              l.typeCheckConfig(Ie, t, this.constructor.DefaultType),
              t
            );
          }),
          (i._setListeners = function () {
            var t = this;
            e(this._element).on(
              Ne.CLICK_DISMISS,
              '[data-dismiss="toast"]',
              function () {
                return t.hide();
              }
            );
          }),
          (i._close = function () {
            function t() {
              i._element.classList.add(Me), e(i._element).trigger(Ne.HIDDEN);
            }
            var i = this;
            if ((this._element.classList.remove(He), this._config.animation)) {
              var n = l.getTransitionDurationFromElement(this._element);
              e(this._element).one(l.TRANSITION_END, t).emulateTransitionEnd(n);
            } else t();
          }),
          (t._jQueryInterface = function (i) {
            return this.each(function () {
              var n = e(this),
                s = n.data(Ae);
              if (
                (s ||
                  ((s = new t(this, "object" == typeof i && i)), n.data(Ae, s)),
                "string" == typeof i)
              ) {
                if (void 0 === s[i])
                  throw new TypeError('No method named "' + i + '"');
                s[i](this);
              }
            });
          }),
          s(t, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.4.1";
              },
            },
            {
              key: "DefaultType",
              get: function () {
                return Le;
              },
            },
            {
              key: "Default",
              get: function () {
                return We;
              },
            },
          ]),
          t
        );
      })();
    (e.fn[Ie] = je._jQueryInterface),
      (e.fn[Ie].Constructor = je),
      (e.fn[Ie].noConflict = function () {
        return (e.fn[Ie] = Oe), je._jQueryInterface;
      }),
      (t.Alert = f),
      (t.Button = T),
      (t.Carousel = R),
      (t.Collapse = J),
      (t.Dropdown = ft),
      (t.Modal = It),
      (t.Popover = re),
      (t.Scrollspy = be),
      (t.Tab = Ee),
      (t.Toast = je),
      (t.Tooltip = Xt),
      (t.Util = l),
      Object.defineProperty(t, "__esModule", { value: !0 });
  }),
  (function (t) {
    "function" == typeof define && define.amd
      ? define(["jquery"], t)
      : t(
          "object" == typeof exports
            ? require("jquery")
            : window.jQuery || window.Zepto
        );
  })(function (t) {
    var e,
      i,
      n,
      s,
      o,
      r,
      a = "Close",
      l = "BeforeClose",
      h = "MarkupParse",
      c = "Open",
      u = "Change",
      d = "mfp",
      p = "." + d,
      f = "mfp-ready",
      g = "mfp-removing",
      m = "mfp-prevent-close",
      v = function () {},
      _ = !!window.jQuery,
      y = t(window),
      b = function (t, i) {
        e.ev.on(d + t + p, i);
      },
      w = function (e, i, n, s) {
        var o = document.createElement("div");
        return (
          (o.className = "mfp-" + e),
          n && (o.innerHTML = n),
          s ? i && i.appendChild(o) : ((o = t(o)), i && o.appendTo(i)),
          o
        );
      },
      x = function (i, n) {
        e.ev.triggerHandler(d + i, n),
          e.st.callbacks &&
            ((i = i.charAt(0).toLowerCase() + i.slice(1)),
            e.st.callbacks[i] &&
              e.st.callbacks[i].apply(e, t.isArray(n) ? n : [n]));
      },
      C = function (i) {
        return (
          (i === r && e.currTemplate.closeBtn) ||
            ((e.currTemplate.closeBtn = t(
              e.st.closeMarkup.replace("%title%", e.st.tClose)
            )),
            (r = i)),
          e.currTemplate.closeBtn
        );
      },
      k = function () {
        t.magnificPopup.instance ||
          ((e = new v()).init(), (t.magnificPopup.instance = e));
      };
    (v.prototype = {
      constructor: v,
      init: function () {
        var i = navigator.appVersion;
        (e.isLowIE = e.isIE8 = document.all && !document.addEventListener),
          (e.isAndroid = /android/gi.test(i)),
          (e.isIOS = /iphone|ipad|ipod/gi.test(i)),
          (e.supportsTransition = (function () {
            var t = document.createElement("p").style,
              e = ["ms", "O", "Moz", "Webkit"];
            if (void 0 !== t.transition) return !0;
            for (; e.length; ) if (e.pop() + "Transition" in t) return !0;
            return !1;
          })()),
          (e.probablyMobile =
            e.isAndroid ||
            e.isIOS ||
            /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(
              navigator.userAgent
            )),
          (n = t(document)),
          (e.popupsCache = {});
      },
      open: function (i) {
        var s;
        if (!1 === i.isObj) {
          (e.items = i.items.toArray()), (e.index = 0);
          var r,
            a = i.items;
          for (s = 0; s < a.length; s++)
            if (((r = a[s]).parsed && (r = r.el[0]), r === i.el[0])) {
              e.index = s;
              break;
            }
        } else
          (e.items = t.isArray(i.items) ? i.items : [i.items]),
            (e.index = i.index || 0);
        if (!e.isOpen) {
          (e.types = []),
            (o = ""),
            i.mainEl && i.mainEl.length ? (e.ev = i.mainEl.eq(0)) : (e.ev = n),
            i.key
              ? (e.popupsCache[i.key] || (e.popupsCache[i.key] = {}),
                (e.currTemplate = e.popupsCache[i.key]))
              : (e.currTemplate = {}),
            (e.st = t.extend(!0, {}, t.magnificPopup.defaults, i)),
            (e.fixedContentPos =
              "auto" === e.st.fixedContentPos
                ? !e.probablyMobile
                : e.st.fixedContentPos),
            e.st.modal &&
              ((e.st.closeOnContentClick = !1),
              (e.st.closeOnBgClick = !1),
              (e.st.showCloseBtn = !1),
              (e.st.enableEscapeKey = !1)),
            e.bgOverlay ||
              ((e.bgOverlay = w("bg").on("click" + p, function () {
                e.close();
              })),
              (e.wrap = w("wrap")
                .attr("tabindex", -1)
                .on("click" + p, function (t) {
                  e._checkIfClose(t.target) && e.close();
                })),
              (e.container = w("container", e.wrap))),
            (e.contentContainer = w("content")),
            e.st.preloader &&
              (e.preloader = w("preloader", e.container, e.st.tLoading));
          var l = t.magnificPopup.modules;
          for (s = 0; s < l.length; s++) {
            var u = l[s];
            (u = u.charAt(0).toUpperCase() + u.slice(1)), e["init" + u].call(e);
          }
          x("BeforeOpen"),
            e.st.showCloseBtn &&
              (e.st.closeBtnInside
                ? (b(h, function (t, e, i, n) {
                    i.close_replaceWith = C(n.type);
                  }),
                  (o += " mfp-close-btn-in"))
                : e.wrap.append(C())),
            e.st.alignTop && (o += " mfp-align-top"),
            e.fixedContentPos
              ? e.wrap.css({
                  overflow: e.st.overflowY,
                  overflowX: "hidden",
                  overflowY: e.st.overflowY,
                })
              : e.wrap.css({ top: y.scrollTop(), position: "absolute" }),
            (!1 === e.st.fixedBgPos ||
              ("auto" === e.st.fixedBgPos && !e.fixedContentPos)) &&
              e.bgOverlay.css({ height: n.height(), position: "absolute" }),
            e.st.enableEscapeKey &&
              n.on("keyup" + p, function (t) {
                27 === t.keyCode && e.close();
              }),
            y.on("resize" + p, function () {
              e.updateSize();
            }),
            e.st.closeOnContentClick || (o += " mfp-auto-cursor"),
            o && e.wrap.addClass(o);
          var d = (e.wH = y.height()),
            g = {};
          if (e.fixedContentPos && e._hasScrollBar(d)) {
            var m = e._getScrollbarSize();
            m && (g.marginRight = m);
          }
          e.fixedContentPos &&
            (e.isIE7
              ? t("body, html").css("overflow", "hidden")
              : (g.overflow = "hidden"));
          var v = e.st.mainClass;
          return (
            e.isIE7 && (v += " mfp-ie7"),
            v && e._addClassToMFP(v),
            e.updateItemHTML(),
            x("BuildControls"),
            t("html").css(g),
            e.bgOverlay
              .add(e.wrap)
              .prependTo(e.st.prependTo || t(document.body)),
            (e._lastFocusedEl = document.activeElement),
            setTimeout(function () {
              e.content
                ? (e._addClassToMFP(f), e._setFocus())
                : e.bgOverlay.addClass(f),
                n.on("focusin" + p, e._onFocusIn);
            }, 16),
            (e.isOpen = !0),
            e.updateSize(d),
            x(c),
            i
          );
        }
        e.updateItemHTML();
      },
      close: function () {
        e.isOpen &&
          (x(l),
          (e.isOpen = !1),
          e.st.removalDelay && !e.isLowIE && e.supportsTransition
            ? (e._addClassToMFP(g),
              setTimeout(function () {
                e._close();
              }, e.st.removalDelay))
            : e._close());
      },
      _close: function () {
        x(a);
        var i = g + " " + f + " ";
        if (
          (e.bgOverlay.detach(),
          e.wrap.detach(),
          e.container.empty(),
          e.st.mainClass && (i += e.st.mainClass + " "),
          e._removeClassFromMFP(i),
          e.fixedContentPos)
        ) {
          var s = { marginRight: "" };
          e.isIE7 ? t("body, html").css("overflow", "") : (s.overflow = ""),
            t("html").css(s);
        }
        n.off("keyup.mfp focusin" + p),
          e.ev.off(p),
          e.wrap.attr("class", "mfp-wrap").removeAttr("style"),
          e.bgOverlay.attr("class", "mfp-bg"),
          e.container.attr("class", "mfp-container"),
          !e.st.showCloseBtn ||
            (e.st.closeBtnInside && !0 !== e.currTemplate[e.currItem.type]) ||
            (e.currTemplate.closeBtn && e.currTemplate.closeBtn.detach()),
          e.st.autoFocusLast && e._lastFocusedEl && t(e._lastFocusedEl).focus(),
          (e.currItem = null),
          (e.content = null),
          (e.currTemplate = null),
          (e.prevHeight = 0),
          x("AfterClose");
      },
      updateSize: function (t) {
        if (e.isIOS) {
          var i = document.documentElement.clientWidth / window.innerWidth,
            n = window.innerHeight * i;
          e.wrap.css("height", n), (e.wH = n);
        } else e.wH = t || y.height();
        e.fixedContentPos || e.wrap.css("height", e.wH), x("Resize");
      },
      updateItemHTML: function () {
        var i = e.items[e.index];
        e.contentContainer.detach(),
          e.content && e.content.detach(),
          i.parsed || (i = e.parseEl(e.index));
        var n = i.type;
        if (
          (x("BeforeChange", [e.currItem ? e.currItem.type : "", n]),
          (e.currItem = i),
          !e.currTemplate[n])
        ) {
          var o = !!e.st[n] && e.st[n].markup;
          x("FirstMarkupParse", o), (e.currTemplate[n] = !o || t(o));
        }
        s && s !== i.type && e.container.removeClass("mfp-" + s + "-holder");
        var r = e["get" + n.charAt(0).toUpperCase() + n.slice(1)](
          i,
          e.currTemplate[n]
        );
        e.appendContent(r, n),
          (i.preloaded = !0),
          x(u, i),
          (s = i.type),
          e.container.prepend(e.contentContainer),
          x("AfterChange");
      },
      appendContent: function (t, i) {
        (e.content = t),
          t
            ? e.st.showCloseBtn &&
              e.st.closeBtnInside &&
              !0 === e.currTemplate[i]
              ? e.content.find(".mfp-close").length || e.content.append(C())
              : (e.content = t)
            : (e.content = ""),
          x("BeforeAppend"),
          e.container.addClass("mfp-" + i + "-holder"),
          e.contentContainer.append(e.content);
      },
      parseEl: function (i) {
        var n,
          s = e.items[i];
        if (
          (s.tagName
            ? (s = { el: t(s) })
            : ((n = s.type), (s = { data: s, src: s.src })),
          s.el)
        ) {
          for (var o = e.types, r = 0; r < o.length; r++)
            if (s.el.hasClass("mfp-" + o[r])) {
              n = o[r];
              break;
            }
          (s.src = s.el.attr("data-mfp-src")),
            s.src || (s.src = s.el.attr("href"));
        }
        return (
          (s.type = n || e.st.type || "inline"),
          (s.index = i),
          (s.parsed = !0),
          (e.items[i] = s),
          x("ElementParse", s),
          e.items[i]
        );
      },
      addGroup: function (t, i) {
        var n = function (n) {
          (n.mfpEl = this), e._openClick(n, t, i);
        };
        i || (i = {});
        var s = "click.magnificPopup";
        (i.mainEl = t),
          i.items
            ? ((i.isObj = !0), t.off(s).on(s, n))
            : ((i.isObj = !1),
              i.delegate
                ? t.off(s).on(s, i.delegate, n)
                : ((i.items = t), t.off(s).on(s, n)));
      },
      _openClick: function (i, n, s) {
        if (
          (void 0 !== s.midClick
            ? s.midClick
            : t.magnificPopup.defaults.midClick) ||
          !(2 === i.which || i.ctrlKey || i.metaKey || i.altKey || i.shiftKey)
        ) {
          var o =
            void 0 !== s.disableOn
              ? s.disableOn
              : t.magnificPopup.defaults.disableOn;
          if (o)
            if (t.isFunction(o)) {
              if (!o.call(e)) return !0;
            } else if (y.width() < o) return !0;
          i.type && (i.preventDefault(), e.isOpen && i.stopPropagation()),
            (s.el = t(i.mfpEl)),
            s.delegate && (s.items = n.find(s.delegate)),
            e.open(s);
        }
      },
      updateStatus: function (t, n) {
        if (e.preloader) {
          i !== t && e.container.removeClass("mfp-s-" + i),
            n || "loading" !== t || (n = e.st.tLoading);
          var s = { status: t, text: n };
          x("UpdateStatus", s),
            (t = s.status),
            (n = s.text),
            e.preloader.html(n),
            e.preloader.find("a").on("click", function (t) {
              t.stopImmediatePropagation();
            }),
            e.container.addClass("mfp-s-" + t),
            (i = t);
        }
      },
      _checkIfClose: function (i) {
        if (!t(i).hasClass(m)) {
          var n = e.st.closeOnContentClick,
            s = e.st.closeOnBgClick;
          if (n && s) return !0;
          if (
            !e.content ||
            t(i).hasClass("mfp-close") ||
            (e.preloader && i === e.preloader[0])
          )
            return !0;
          if (i === e.content[0] || t.contains(e.content[0], i)) {
            if (n) return !0;
          } else if (s && t.contains(document, i)) return !0;
          return !1;
        }
      },
      _addClassToMFP: function (t) {
        e.bgOverlay.addClass(t), e.wrap.addClass(t);
      },
      _removeClassFromMFP: function (t) {
        this.bgOverlay.removeClass(t), e.wrap.removeClass(t);
      },
      _hasScrollBar: function (t) {
        return (
          (e.isIE7 ? n.height() : document.body.scrollHeight) >
          (t || y.height())
        );
      },
      _setFocus: function () {
        (e.st.focus ? e.content.find(e.st.focus).eq(0) : e.wrap).focus();
      },
      _onFocusIn: function (i) {
        return i.target === e.wrap[0] || t.contains(e.wrap[0], i.target)
          ? void 0
          : (e._setFocus(), !1);
      },
      _parseMarkup: function (e, i, n) {
        var s;
        n.data && (i = t.extend(n.data, i)),
          x(h, [e, i, n]),
          t.each(i, function (i, n) {
            if (void 0 === n || !1 === n) return !0;
            if ((s = i.split("_")).length > 1) {
              var o = e.find(p + "-" + s[0]);
              if (o.length > 0) {
                var r = s[1];
                "replaceWith" === r
                  ? o[0] !== n[0] && o.replaceWith(n)
                  : "img" === r
                  ? o.is("img")
                    ? o.attr("src", n)
                    : o.replaceWith(
                        t("<img>").attr("src", n).attr("class", o.attr("class"))
                      )
                  : o.attr(s[1], n);
              }
            } else e.find(p + "-" + i).html(n);
          });
      },
      _getScrollbarSize: function () {
        if (void 0 === e.scrollbarSize) {
          var t = document.createElement("div");
          (t.style.cssText =
            "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;"),
            document.body.appendChild(t),
            (e.scrollbarSize = t.offsetWidth - t.clientWidth),
            document.body.removeChild(t);
        }
        return e.scrollbarSize;
      },
    }),
      (t.magnificPopup = {
        instance: null,
        proto: v.prototype,
        modules: [],
        open: function (e, i) {
          return (
            k(),
            ((e = e ? t.extend(!0, {}, e) : {}).isObj = !0),
            (e.index = i || 0),
            this.instance.open(e)
          );
        },
        close: function () {
          return t.magnificPopup.instance && t.magnificPopup.instance.close();
        },
        registerModule: function (e, i) {
          i.options && (t.magnificPopup.defaults[e] = i.options),
            t.extend(this.proto, i.proto),
            this.modules.push(e);
        },
        defaults: {
          disableOn: 0,
          key: null,
          midClick: !1,
          mainClass: "",
          preloader: !0,
          focus: "",
          closeOnContentClick: !1,
          closeOnBgClick: !0,
          closeBtnInside: !0,
          showCloseBtn: !0,
          enableEscapeKey: !0,
          modal: !1,
          alignTop: !1,
          removalDelay: 0,
          prependTo: null,
          fixedContentPos: "auto",
          fixedBgPos: "auto",
          overflowY: "auto",
          closeMarkup:
            '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
          tClose: "Cerrar (Esc)",
          tLoading: "Cargando...",
          autoFocusLast: !0,
        },
      }),
      (t.fn.magnificPopup = function (i) {
        k();
        var n = t(this);
        if ("string" == typeof i)
          if ("open" === i) {
            var s,
              o = _ ? n.data("magnificPopup") : n[0].magnificPopup,
              r = parseInt(arguments[1], 10) || 0;
            o.items
              ? (s = o.items[r])
              : ((s = n),
                o.delegate && (s = s.find(o.delegate)),
                (s = s.eq(r))),
              e._openClick({ mfpEl: s }, n, o);
          } else
            e.isOpen && e[i].apply(e, Array.prototype.slice.call(arguments, 1));
        else
          (i = t.extend(!0, {}, i)),
            _ ? n.data("magnificPopup", i) : (n[0].magnificPopup = i),
            e.addGroup(n, i);
        return n;
      });
    var T,
      D,
      S,
      E = "inline",
      I = function () {
        S && (D.after(S.addClass(T)).detach(), (S = null));
      };
    t.magnificPopup.registerModule(E, {
      options: {
        hiddenClass: "hide",
        markup: "",
        tNotFound: "Content not found",
      },
      proto: {
        initInline: function () {
          e.types.push(E),
            b(a + "." + E, function () {
              I();
            });
        },
        getInline: function (i, n) {
          if ((I(), i.src)) {
            var s = e.st.inline,
              o = t(i.src);
            if (o.length) {
              var r = o[0].parentNode;
              r &&
                r.tagName &&
                (D || ((T = s.hiddenClass), (D = w(T)), (T = "mfp-" + T)),
                (S = o.after(D).detach().removeClass(T))),
                e.updateStatus("ready");
            } else e.updateStatus("error", s.tNotFound), (o = t("<div>"));
            return (i.inlineElement = o), o;
          }
          return e.updateStatus("ready"), e._parseMarkup(n, {}, i), n;
        },
      },
    });
    var A,
      P = "ajax",
      O = function () {
        A && t(document.body).removeClass(A);
      },
      N = function () {
        O(), e.req && e.req.abort();
      };
    t.magnificPopup.registerModule(P, {
      options: {
        settings: null,
        cursor: "mfp-ajax-cur",
        tError: '<a href="%url%">The content</a> could not be loaded.',
      },
      proto: {
        initAjax: function () {
          e.types.push(P),
            (A = e.st.ajax.cursor),
            b(a + "." + P, N),
            b("BeforeChange." + P, N);
        },
        getAjax: function (i) {
          A && t(document.body).addClass(A), e.updateStatus("loading");
          var n = t.extend(
            {
              url: i.src,
              success: function (n, s, o) {
                var r = { data: n, xhr: o };
                x("ParseAjax", r),
                  e.appendContent(t(r.data), P),
                  (i.finished = !0),
                  O(),
                  e._setFocus(),
                  setTimeout(function () {
                    e.wrap.addClass(f);
                  }, 16),
                  e.updateStatus("ready"),
                  x("AjaxContentAdded");
              },
              error: function () {
                O(),
                  (i.finished = i.loadError = !0),
                  e.updateStatus(
                    "error",
                    e.st.ajax.tError.replace("%url%", i.src)
                  );
              },
            },
            e.st.ajax.settings
          );
          return (e.req = t.ajax(n)), "";
        },
      },
    });
    var M,
      H,
      z = function (i) {
        if (i.data && void 0 !== i.data.title) return i.data.title;
        var n = e.st.image.titleSrc;
        if (n) {
          if (t.isFunction(n)) return n.call(e, i);
          if (i.el) return i.el.attr(n) || "";
        }
        return "";
      };
    t.magnificPopup.registerModule("image", {
      options: {
        markup:
          '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
        cursor: "mfp-zoom-out-cur",
        titleSrc: "title",
        verticalFit: !0,
        tError: '<a href="%url%">The image</a> could not be loaded.',
      },
      proto: {
        initImage: function () {
          var i = e.st.image,
            n = ".image";
          e.types.push("image"),
            b(c + n, function () {
              "image" === e.currItem.type &&
                i.cursor &&
                t(document.body).addClass(i.cursor);
            }),
            b(a + n, function () {
              i.cursor && t(document.body).removeClass(i.cursor),
                y.off("resize" + p);
            }),
            b("Resize" + n, e.resizeImage),
            e.isLowIE && b("AfterChange", e.resizeImage);
        },
        resizeImage: function () {
          var t = e.currItem;
          if (t && t.img && e.st.image.verticalFit) {
            var i = 0;
            e.isLowIE &&
              (i =
                parseInt(t.img.css("padding-top"), 10) +
                parseInt(t.img.css("padding-bottom"), 10)),
              t.img.css("max-height", e.wH - i);
          }
        },
        _onImageHasSize: function (t) {
          t.img &&
            ((t.hasSize = !0),
            M && clearInterval(M),
            (t.isCheckingImgSize = !1),
            x("ImageHasSize", t),
            t.imgHidden &&
              (e.content && e.content.removeClass("mfp-loading"),
              (t.imgHidden = !1)));
        },
        findImageSize: function (t) {
          var i = 0,
            n = t.img[0],
            s = function (o) {
              M && clearInterval(M),
                (M = setInterval(function () {
                  return n.naturalWidth > 0
                    ? void e._onImageHasSize(t)
                    : (i > 200 && clearInterval(M),
                      void (3 == ++i
                        ? s(10)
                        : 40 === i
                        ? s(50)
                        : 100 === i && s(500)));
                }, o));
            };
          s(1);
        },
        getImage: function (i, n) {
          var s = 0,
            o = function () {
              i &&
                (i.img[0].complete
                  ? (i.img.off(".mfploader"),
                    i === e.currItem &&
                      (e._onImageHasSize(i), e.updateStatus("ready")),
                    (i.hasSize = !0),
                    (i.loaded = !0),
                    x("ImageLoadComplete"))
                  : 200 > ++s
                  ? setTimeout(o, 100)
                  : r());
            },
            r = function () {
              i &&
                (i.img.off(".mfploader"),
                i === e.currItem &&
                  (e._onImageHasSize(i),
                  e.updateStatus("error", a.tError.replace("%url%", i.src))),
                (i.hasSize = !0),
                (i.loaded = !0),
                (i.loadError = !0));
            },
            a = e.st.image,
            l = n.find(".mfp-img");
          if (l.length) {
            var h = document.createElement("img");
            (h.className = "mfp-img"),
              i.el &&
                i.el.find("img").length &&
                (h.alt = i.el.find("img").attr("alt")),
              (i.img = t(h).on("load.mfploader", o).on("error.mfploader", r)),
              (h.src = i.src),
              l.is("img") && (i.img = i.img.clone()),
              (h = i.img[0]).naturalWidth > 0
                ? (i.hasSize = !0)
                : h.width || (i.hasSize = !1);
          }
          return (
            e._parseMarkup(n, { title: z(i), img_replaceWith: i.img }, i),
            e.resizeImage(),
            i.hasSize
              ? (M && clearInterval(M),
                i.loadError
                  ? (n.addClass("mfp-loading"),
                    e.updateStatus("error", a.tError.replace("%url%", i.src)))
                  : (n.removeClass("mfp-loading"), e.updateStatus("ready")),
                n)
              : (e.updateStatus("loading"),
                (i.loading = !0),
                i.hasSize ||
                  ((i.imgHidden = !0),
                  n.addClass("mfp-loading"),
                  e.findImageSize(i)),
                n)
          );
        },
      },
    }),
      t.magnificPopup.registerModule("zoom", {
        options: {
          enabled: !1,
          easing: "ease-in-out",
          duration: 300,
          opener: function (t) {
            return t.is("img") ? t : t.find("img");
          },
        },
        proto: {
          initZoom: function () {
            var t,
              i = e.st.zoom,
              n = ".zoom";
            if (i.enabled && e.supportsTransition) {
              var s,
                o,
                r = i.duration,
                h = function (t) {
                  var e = t
                      .clone()
                      .removeAttr("style")
                      .removeAttr("class")
                      .addClass("mfp-animated-image"),
                    n = "all " + i.duration / 1e3 + "s " + i.easing,
                    s = {
                      position: "fixed",
                      zIndex: 9999,
                      left: 0,
                      top: 0,
                      "-webkit-backface-visibility": "hidden",
                    },
                    o = "transition";
                  return (
                    (s["-webkit-" + o] =
                      s["-moz-" + o] =
                      s["-o-" + o] =
                      s[o] =
                        n),
                    e.css(s),
                    e
                  );
                },
                c = function () {
                  e.content.css("visibility", "visible");
                };
              b("BuildControls" + n, function () {
                if (e._allowZoom()) {
                  if (
                    (clearTimeout(s),
                    e.content.css("visibility", "hidden"),
                    !(t = e._getItemToZoom()))
                  )
                    return void c();
                  (o = h(t)).css(e._getOffset()),
                    e.wrap.append(o),
                    (s = setTimeout(function () {
                      o.css(e._getOffset(!0)),
                        (s = setTimeout(function () {
                          c(),
                            setTimeout(function () {
                              o.remove(),
                                (t = o = null),
                                x("ZoomAnimationEnded");
                            }, 16);
                        }, r));
                    }, 16));
                }
              }),
                b(l + n, function () {
                  if (e._allowZoom()) {
                    if ((clearTimeout(s), (e.st.removalDelay = r), !t)) {
                      if (!(t = e._getItemToZoom())) return;
                      o = h(t);
                    }
                    o.css(e._getOffset(!0)),
                      e.wrap.append(o),
                      e.content.css("visibility", "hidden"),
                      setTimeout(function () {
                        o.css(e._getOffset());
                      }, 16);
                  }
                }),
                b(a + n, function () {
                  e._allowZoom() && (c(), o && o.remove(), (t = null));
                });
            }
          },
          _allowZoom: function () {
            return "image" === e.currItem.type;
          },
          _getItemToZoom: function () {
            return !!e.currItem.hasSize && e.currItem.img;
          },
          _getOffset: function (i) {
            var n,
              s = (n = i
                ? e.currItem.img
                : e.st.zoom.opener(e.currItem.el || e.currItem)).offset(),
              o = parseInt(n.css("padding-top"), 10),
              r = parseInt(n.css("padding-bottom"), 10);
            s.top -= t(window).scrollTop() - o;
            var a = {
              width: n.width(),
              height: (_ ? n.innerHeight() : n[0].offsetHeight) - r - o,
            };
            return (
              void 0 === H &&
                (H = void 0 !== document.createElement("p").style.MozTransform),
              H
                ? (a["-moz-transform"] = a.transform =
                    "translate(" + s.left + "px," + s.top + "px)")
                : ((a.left = s.left), (a.top = s.top)),
              a
            );
          },
        },
      });
    var L = "iframe",
      W = function (t) {
        if (e.currTemplate[L]) {
          var i = e.currTemplate[L].find("iframe");
          i.length &&
            (t || (i[0].src = "//about:blank"),
            e.isIE8 && i.css("display", t ? "block" : "none"));
        }
      };
    t.magnificPopup.registerModule(L, {
      options: {
        markup:
          '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
        srcAction: "iframe_src",
        patterns: {
          youtube: {
            index: "youtube.com",
            id: "v=",
            src: "//www.youtube.com/embed/%id%?autoplay=1",
          },
          vimeo: {
            index: "vimeo.com/",
            id: "/",
            src: "//player.vimeo.com/video/%id%?autoplay=1",
          },
          gmaps: { index: "//maps.google.", src: "%id%&output=embed" },
        },
      },
      proto: {
        initIframe: function () {
          e.types.push(L),
            b("BeforeChange", function (t, e, i) {
              e !== i && (e === L ? W() : i === L && W(!0));
            }),
            b(a + "." + L, function () {
              W();
            });
        },
        getIframe: function (i, n) {
          var s = i.src,
            o = e.st.iframe;
          t.each(o.patterns, function () {
            return s.indexOf(this.index) > -1
              ? (this.id &&
                  (s =
                    "string" == typeof this.id
                      ? s.substr(
                          s.lastIndexOf(this.id) + this.id.length,
                          s.length
                        )
                      : this.id.call(this, s)),
                (s = this.src.replace("%id%", s)),
                !1)
              : void 0;
          });
          var r = {};
          return (
            o.srcAction && (r[o.srcAction] = s),
            e._parseMarkup(n, r, i),
            e.updateStatus("ready"),
            n
          );
        },
      },
    });
    var j = function (t) {
        var i = e.items.length;
        return t > i - 1 ? t - i : 0 > t ? i + t : t;
      },
      R = function (t, e, i) {
        return t.replace(/%curr%/gi, e + 1).replace(/%total%/gi, i);
      };
    t.magnificPopup.registerModule("gallery", {
      options: {
        enabled: !1,
        arrowMarkup:
          '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
        preload: [0, 2],
        navigateByImgClick: !0,
        arrows: !0,
        tPrev: "Previous (Left arrow key)",
        tNext: "Next (Right arrow key)",
        tCounter: "%curr% of %total%",
      },
      proto: {
        initGallery: function () {
          var i = e.st.gallery,
            s = ".mfp-gallery";
          return (
            (e.direction = !0),
            !(!i || !i.enabled) &&
              ((o += " mfp-gallery"),
              b(c + s, function () {
                i.navigateByImgClick &&
                  e.wrap.on("click" + s, ".mfp-img", function () {
                    return e.items.length > 1 ? (e.next(), !1) : void 0;
                  }),
                  n.on("keydown" + s, function (t) {
                    37 === t.keyCode ? e.prev() : 39 === t.keyCode && e.next();
                  });
              }),
              b("UpdateStatus" + s, function (t, i) {
                i.text &&
                  (i.text = R(i.text, e.currItem.index, e.items.length));
              }),
              b(h + s, function (t, n, s, o) {
                var r = e.items.length;
                s.counter = r > 1 ? R(i.tCounter, o.index, r) : "";
              }),
              b("BuildControls" + s, function () {
                if (e.items.length > 1 && i.arrows && !e.arrowLeft) {
                  var n = i.arrowMarkup,
                    s = (e.arrowLeft = t(
                      n.replace(/%title%/gi, i.tPrev).replace(/%dir%/gi, "left")
                    ).addClass(m)),
                    o = (e.arrowRight = t(
                      n
                        .replace(/%title%/gi, i.tNext)
                        .replace(/%dir%/gi, "right")
                    ).addClass(m));
                  s.click(function () {
                    e.prev();
                  }),
                    o.click(function () {
                      e.next();
                    }),
                    e.container.append(s.add(o));
                }
              }),
              b(u + s, function () {
                e._preloadTimeout && clearTimeout(e._preloadTimeout),
                  (e._preloadTimeout = setTimeout(function () {
                    e.preloadNearbyImages(), (e._preloadTimeout = null);
                  }, 16));
              }),
              void b(a + s, function () {
                n.off(s),
                  e.wrap.off("click" + s),
                  (e.arrowRight = e.arrowLeft = null);
              }))
          );
        },
        next: function () {
          (e.direction = !0), (e.index = j(e.index + 1)), e.updateItemHTML();
        },
        prev: function () {
          (e.direction = !1), (e.index = j(e.index - 1)), e.updateItemHTML();
        },
        goTo: function (t) {
          (e.direction = t >= e.index), (e.index = t), e.updateItemHTML();
        },
        preloadNearbyImages: function () {
          var t,
            i = e.st.gallery.preload,
            n = Math.min(i[0], e.items.length),
            s = Math.min(i[1], e.items.length);
          for (t = 1; t <= (e.direction ? s : n); t++)
            e._preloadItem(e.index + t);
          for (t = 1; t <= (e.direction ? n : s); t++)
            e._preloadItem(e.index - t);
        },
        _preloadItem: function (i) {
          if (((i = j(i)), !e.items[i].preloaded)) {
            var n = e.items[i];
            n.parsed || (n = e.parseEl(i)),
              x("LazyLoad", n),
              "image" === n.type &&
                (n.img = t('<img class="mfp-img" />')
                  .on("load.mfploader", function () {
                    n.hasSize = !0;
                  })
                  .on("error.mfploader", function () {
                    (n.hasSize = !0), (n.loadError = !0), x("LazyLoadError", n);
                  })
                  .attr("src", n.src)),
              (n.preloaded = !0);
          }
        },
      },
    });
    var F = "retina";
    t.magnificPopup.registerModule(F, {
      options: {
        replaceSrc: function (t) {
          return t.src.replace(/\.\w+$/, function (t) {
            return "@2x" + t;
          });
        },
        ratio: 1,
      },
      proto: {
        initRetina: function () {
          if (window.devicePixelRatio > 1) {
            var t = e.st.retina,
              i = t.ratio;
            (i = isNaN(i) ? i() : i) > 1 &&
              (b("ImageHasSize." + F, function (t, e) {
                e.img.css({
                  "max-width": e.img[0].naturalWidth / i,
                  width: "100%",
                });
              }),
              b("ElementParse." + F, function (e, n) {
                n.src = t.replaceSrc(n, i);
              }));
          }
        },
      },
    }),
      k();
  }),
  (function (t) {
    "function" == typeof define && define.amd
      ? define(["jquery"], t)
      : t(jQuery);
  })(function (t) {
    function e() {
      (this._curInst = null),
        (this._keyEvent = !1),
        (this._disabledInputs = []),
        (this._datepickerShowing = !1),
        (this._inDialog = !1),
        (this._mainDivId = "ui-datepicker-div"),
        (this._inlineClass = "ui-datepicker-inline"),
        (this._appendClass = "ui-datepicker-append"),
        (this._triggerClass = "ui-datepicker-trigger"),
        (this._dialogClass = "ui-datepicker-dialog"),
        (this._disableClass = "ui-datepicker-disabled"),
        (this._unselectableClass = "ui-datepicker-unselectable"),
        (this._currentClass = "ui-datepicker-current-day"),
        (this._dayOverClass = "ui-datepicker-days-cell-over"),
        (this.regional = []),
        (this.regional[""] = {
          closeText: "Done",
          prevText: "Prev",
          nextText: "Next",
          currentText: "Today",
          monthNames: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ],
          monthNamesShort: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          dayNames: [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
          weekHeader: "Wk",
          dateFormat: "mm/dd/yy",
          firstDay: 0,
          isRTL: !1,
          showMonthAfterYear: !1,
          yearSuffix: "",
        }),
        (this._defaults = {
          showOn: "focus",
          showAnim: "fadeIn",
          showOptions: {},
          defaultDate: null,
          appendText: "",
          buttonText: "...",
          buttonImage: "",
          buttonImageOnly: !1,
          hideIfNoPrevNext: !1,
          navigationAsDateFormat: !1,
          gotoCurrent: !1,
          changeMonth: !1,
          changeYear: !1,
          yearRange: "c-10:c+10",
          showOtherMonths: !1,
          selectOtherMonths: !1,
          showWeek: !1,
          calculateWeek: this.iso8601Week,
          shortYearCutoff: "+10",
          minDate: null,
          maxDate: null,
          duration: "fast",
          beforeShowDay: null,
          beforeShow: null,
          onSelect: null,
          onChangeMonthYear: null,
          onClose: null,
          numberOfMonths: 1,
          showCurrentAtPos: 0,
          stepMonths: 1,
          stepBigMonths: 12,
          altField: "",
          altFormat: "",
          constrainInput: !0,
          showButtonPanel: !1,
          autoSize: !1,
          disabled: !1,
        }),
        t.extend(this._defaults, this.regional[""]),
        (this.regional.en = t.extend(!0, {}, this.regional[""])),
        (this.regional["en-US"] = t.extend(!0, {}, this.regional.en)),
        (this.dpDiv = i(
          t(
            "<div id='" +
              this._mainDivId +
              "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"
          )
        ));
    }
    function i(e) {
      var i =
        "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
      return e
        .on("mouseout", i, function () {
          t(this).removeClass("ui-state-hover"),
            -1 !== this.className.indexOf("ui-datepicker-prev") &&
              t(this).removeClass("ui-datepicker-prev-hover"),
            -1 !== this.className.indexOf("ui-datepicker-next") &&
              t(this).removeClass("ui-datepicker-next-hover");
        })
        .on("mouseover", i, n);
    }
    function n() {
      t.datepicker._isDisabledDatepicker(
        c.inline ? c.dpDiv.parent()[0] : c.input[0]
      ) ||
        (t(this)
          .parents(".ui-datepicker-calendar")
          .find("a")
          .removeClass("ui-state-hover"),
        t(this).addClass("ui-state-hover"),
        -1 !== this.className.indexOf("ui-datepicker-prev") &&
          t(this).addClass("ui-datepicker-prev-hover"),
        -1 !== this.className.indexOf("ui-datepicker-next") &&
          t(this).addClass("ui-datepicker-next-hover"));
    }
    function s(e, i) {
      for (var n in (t.extend(e, i), i)) null == i[n] && (e[n] = i[n]);
      return e;
    }
    function o(t) {
      return function () {
        var e = this.element.val();
        t.apply(this, arguments),
          this._refresh(),
          e !== this.element.val() && this._trigger("change");
      };
    }
    (t.ui = t.ui || {}), (t.ui.version = "1.12.1");
    var r = 0,
      a = Array.prototype.slice;
    (t.cleanData = (function (e) {
      return function (i) {
        var n, s, o;
        for (o = 0; null != (s = i[o]); o++)
          try {
            (n = t._data(s, "events")) &&
              n.remove &&
              t(s).triggerHandler("remove");
          } catch (t) {}
        e(i);
      };
    })(t.cleanData)),
      (t.widget = function (e, i, n) {
        var s,
          o,
          r,
          a = {},
          l = e.split(".")[0],
          h = l + "-" + (e = e.split(".")[1]);
        return (
          n || ((n = i), (i = t.Widget)),
          t.isArray(n) && (n = t.extend.apply(null, [{}].concat(n))),
          (t.expr[":"][h.toLowerCase()] = function (e) {
            return !!t.data(e, h);
          }),
          (t[l] = t[l] || {}),
          (s = t[l][e]),
          (o = t[l][e] =
            function (t, e) {
              return this._createWidget
                ? void (arguments.length && this._createWidget(t, e))
                : new o(t, e);
            }),
          t.extend(o, s, {
            version: n.version,
            _proto: t.extend({}, n),
            _childConstructors: [],
          }),
          ((r = new i()).options = t.widget.extend({}, r.options)),
          t.each(n, function (e, n) {
            return t.isFunction(n)
              ? void (a[e] = (function () {
                  function t() {
                    return i.prototype[e].apply(this, arguments);
                  }
                  function s(t) {
                    return i.prototype[e].apply(this, t);
                  }
                  return function () {
                    var e,
                      i = this._super,
                      o = this._superApply;
                    return (
                      (this._super = t),
                      (this._superApply = s),
                      (e = n.apply(this, arguments)),
                      (this._super = i),
                      (this._superApply = o),
                      e
                    );
                  };
                })())
              : void (a[e] = n);
          }),
          (o.prototype = t.widget.extend(
            r,
            { widgetEventPrefix: (s && r.widgetEventPrefix) || e },
            a,
            { constructor: o, namespace: l, widgetName: e, widgetFullName: h }
          )),
          s
            ? (t.each(s._childConstructors, function (e, i) {
                var n = i.prototype;
                t.widget(n.namespace + "." + n.widgetName, o, i._proto);
              }),
              delete s._childConstructors)
            : i._childConstructors.push(o),
          t.widget.bridge(e, o),
          o
        );
      }),
      (t.widget.extend = function (e) {
        for (
          var i, n, s = a.call(arguments, 1), o = 0, r = s.length;
          r > o;
          o++
        )
          for (i in s[o])
            (n = s[o][i]),
              s[o].hasOwnProperty(i) &&
                void 0 !== n &&
                (e[i] = t.isPlainObject(n)
                  ? t.isPlainObject(e[i])
                    ? t.widget.extend({}, e[i], n)
                    : t.widget.extend({}, n)
                  : n);
        return e;
      }),
      (t.widget.bridge = function (e, i) {
        var n = i.prototype.widgetFullName || e;
        t.fn[e] = function (s) {
          var o = "string" == typeof s,
            r = a.call(arguments, 1),
            l = this;
          return (
            o
              ? this.length || "instance" !== s
                ? this.each(function () {
                    var i,
                      o = t.data(this, n);
                    return "instance" === s
                      ? ((l = o), !1)
                      : o
                      ? t.isFunction(o[s]) && "_" !== s.charAt(0)
                        ? (i = o[s].apply(o, r)) !== o && void 0 !== i
                          ? ((l = i && i.jquery ? l.pushStack(i.get()) : i), !1)
                          : void 0
                        : t.error(
                            "no such method '" +
                              s +
                              "' for " +
                              e +
                              " widget instance"
                          )
                      : t.error(
                          "cannot call methods on " +
                            e +
                            " prior to initialization; attempted to call method '" +
                            s +
                            "'"
                        );
                  })
                : (l = void 0)
              : (r.length && (s = t.widget.extend.apply(null, [s].concat(r))),
                this.each(function () {
                  var e = t.data(this, n);
                  e
                    ? (e.option(s || {}), e._init && e._init())
                    : t.data(this, n, new i(s, this));
                })),
            l
          );
        };
      }),
      (t.Widget = function () {}),
      (t.Widget._childConstructors = []),
      (t.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: { classes: {}, disabled: !1, create: null },
        _createWidget: function (e, i) {
          (i = t(i || this.defaultElement || this)[0]),
            (this.element = t(i)),
            (this.uuid = r++),
            (this.eventNamespace = "." + this.widgetName + this.uuid),
            (this.bindings = t()),
            (this.hoverable = t()),
            (this.focusable = t()),
            (this.classesElementLookup = {}),
            i !== this &&
              (t.data(i, this.widgetFullName, this),
              this._on(!0, this.element, {
                remove: function (t) {
                  t.target === i && this.destroy();
                },
              }),
              (this.document = t(i.style ? i.ownerDocument : i.document || i)),
              (this.window = t(
                this.document[0].defaultView || this.document[0].parentWindow
              ))),
            (this.options = t.widget.extend(
              {},
              this.options,
              this._getCreateOptions(),
              e
            )),
            this._create(),
            this.options.disabled &&
              this._setOptionDisabled(this.options.disabled),
            this._trigger("create", null, this._getCreateEventData()),
            this._init();
        },
        _getCreateOptions: function () {
          return {};
        },
        _getCreateEventData: t.noop,
        _create: t.noop,
        _init: t.noop,
        destroy: function () {
          var e = this;
          this._destroy(),
            t.each(this.classesElementLookup, function (t, i) {
              e._removeClass(i, t);
            }),
            this.element
              .off(this.eventNamespace)
              .removeData(this.widgetFullName),
            this.widget().off(this.eventNamespace).removeAttr("aria-disabled"),
            this.bindings.off(this.eventNamespace);
        },
        _destroy: t.noop,
        widget: function () {
          return this.element;
        },
        option: function (e, i) {
          var n,
            s,
            o,
            r = e;
          if (0 === arguments.length) return t.widget.extend({}, this.options);
          if ("string" == typeof e)
            if (((r = {}), (n = e.split(".")), (e = n.shift()), n.length)) {
              for (
                s = r[e] = t.widget.extend({}, this.options[e]), o = 0;
                n.length - 1 > o;
                o++
              )
                (s[n[o]] = s[n[o]] || {}), (s = s[n[o]]);
              if (((e = n.pop()), 1 === arguments.length))
                return void 0 === s[e] ? null : s[e];
              s[e] = i;
            } else {
              if (1 === arguments.length)
                return void 0 === this.options[e] ? null : this.options[e];
              r[e] = i;
            }
          return this._setOptions(r), this;
        },
        _setOptions: function (t) {
          var e;
          for (e in t) this._setOption(e, t[e]);
          return this;
        },
        _setOption: function (t, e) {
          return (
            "classes" === t && this._setOptionClasses(e),
            (this.options[t] = e),
            "disabled" === t && this._setOptionDisabled(e),
            this
          );
        },
        _setOptionClasses: function (e) {
          var i, n, s;
          for (i in e)
            (s = this.classesElementLookup[i]),
              e[i] !== this.options.classes[i] &&
                s &&
                s.length &&
                ((n = t(s.get())),
                this._removeClass(s, i),
                n.addClass(
                  this._classes({ element: n, keys: i, classes: e, add: !0 })
                ));
        },
        _setOptionDisabled: function (t) {
          this._toggleClass(
            this.widget(),
            this.widgetFullName + "-disabled",
            null,
            !!t
          ),
            t &&
              (this._removeClass(this.hoverable, null, "ui-state-hover"),
              this._removeClass(this.focusable, null, "ui-state-focus"));
        },
        enable: function () {
          return this._setOptions({ disabled: !1 });
        },
        disable: function () {
          return this._setOptions({ disabled: !0 });
        },
        _classes: function (e) {
          function i(i, o) {
            var r, a;
            for (a = 0; i.length > a; a++)
              (r = s.classesElementLookup[i[a]] || t()),
                (r = e.add
                  ? t(t.unique(r.get().concat(e.element.get())))
                  : t(r.not(e.element).get())),
                (s.classesElementLookup[i[a]] = r),
                n.push(i[a]),
                o && e.classes[i[a]] && n.push(e.classes[i[a]]);
          }
          var n = [],
            s = this;
          return (
            (e = t.extend(
              { element: this.element, classes: this.options.classes || {} },
              e
            )),
            this._on(e.element, { remove: "_untrackClassesElement" }),
            e.keys && i(e.keys.match(/\S+/g) || [], !0),
            e.extra && i(e.extra.match(/\S+/g) || []),
            n.join(" ")
          );
        },
        _untrackClassesElement: function (e) {
          var i = this;
          t.each(i.classesElementLookup, function (n, s) {
            -1 !== t.inArray(e.target, s) &&
              (i.classesElementLookup[n] = t(s.not(e.target).get()));
          });
        },
        _removeClass: function (t, e, i) {
          return this._toggleClass(t, e, i, !1);
        },
        _addClass: function (t, e, i) {
          return this._toggleClass(t, e, i, !0);
        },
        _toggleClass: function (t, e, i, n) {
          n = "boolean" == typeof n ? n : i;
          var s = "string" == typeof t || null === t,
            o = {
              extra: s ? e : i,
              keys: s ? t : e,
              element: s ? this.element : t,
              add: n,
            };
          return o.element.toggleClass(this._classes(o), n), this;
        },
        _on: function (e, i, n) {
          var s,
            o = this;
          "boolean" != typeof e && ((n = i), (i = e), (e = !1)),
            n
              ? ((i = s = t(i)), (this.bindings = this.bindings.add(i)))
              : ((n = i), (i = this.element), (s = this.widget())),
            t.each(n, function (n, r) {
              function a() {
                return e ||
                  (!0 !== o.options.disabled &&
                    !t(this).hasClass("ui-state-disabled"))
                  ? ("string" == typeof r ? o[r] : r).apply(o, arguments)
                  : void 0;
              }
              "string" != typeof r &&
                (a.guid = r.guid = r.guid || a.guid || t.guid++);
              var l = n.match(/^([\w:-]*)\s*(.*)$/),
                h = l[1] + o.eventNamespace,
                c = l[2];
              c ? s.on(h, c, a) : i.on(h, a);
            });
        },
        _off: function (e, i) {
          (i =
            (i || "").split(" ").join(this.eventNamespace + " ") +
            this.eventNamespace),
            e.off(i).off(i),
            (this.bindings = t(this.bindings.not(e).get())),
            (this.focusable = t(this.focusable.not(e).get())),
            (this.hoverable = t(this.hoverable.not(e).get()));
        },
        _delay: function (t, e) {
          var i = this;
          return setTimeout(function () {
            return ("string" == typeof t ? i[t] : t).apply(i, arguments);
          }, e || 0);
        },
        _hoverable: function (e) {
          (this.hoverable = this.hoverable.add(e)),
            this._on(e, {
              mouseenter: function (e) {
                this._addClass(t(e.currentTarget), null, "ui-state-hover");
              },
              mouseleave: function (e) {
                this._removeClass(t(e.currentTarget), null, "ui-state-hover");
              },
            });
        },
        _focusable: function (e) {
          (this.focusable = this.focusable.add(e)),
            this._on(e, {
              focusin: function (e) {
                this._addClass(t(e.currentTarget), null, "ui-state-focus");
              },
              focusout: function (e) {
                this._removeClass(t(e.currentTarget), null, "ui-state-focus");
              },
            });
        },
        _trigger: function (e, i, n) {
          var s,
            o,
            r = this.options[e];
          if (
            ((n = n || {}),
            ((i = t.Event(i)).type = (
              e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e
            ).toLowerCase()),
            (i.target = this.element[0]),
            (o = i.originalEvent))
          )
            for (s in o) s in i || (i[s] = o[s]);
          return (
            this.element.trigger(i, n),
            !(
              (t.isFunction(r) &&
                !1 === r.apply(this.element[0], [i].concat(n))) ||
              i.isDefaultPrevented()
            )
          );
        },
      }),
      t.each({ show: "fadeIn", hide: "fadeOut" }, function (e, i) {
        t.Widget.prototype["_" + e] = function (n, s, o) {
          "string" == typeof s && (s = { effect: s });
          var r,
            a = s ? (!0 === s || "number" == typeof s ? i : s.effect || i) : e;
          "number" == typeof (s = s || {}) && (s = { duration: s }),
            (r = !t.isEmptyObject(s)),
            (s.complete = o),
            s.delay && n.delay(s.delay),
            r && t.effects && t.effects.effect[a]
              ? n[e](s)
              : a !== e && n[a]
              ? n[a](s.duration, s.easing, o)
              : n.queue(function (i) {
                  t(this)[e](), o && o.call(n[0]), i();
                });
        };
      }),
      t.widget,
      (function () {
        function e(t, e, i) {
          return [
            parseFloat(t[0]) * (c.test(t[0]) ? e / 100 : 1),
            parseFloat(t[1]) * (c.test(t[1]) ? i / 100 : 1),
          ];
        }
        function i(e, i) {
          return parseInt(t.css(e, i), 10) || 0;
        }
        var n,
          s = Math.max,
          o = Math.abs,
          r = /left|center|right/,
          a = /top|center|bottom/,
          l = /[\+\-]\d+(\.[\d]+)?%?/,
          h = /^\w+/,
          c = /%$/,
          u = t.fn.position;
        (t.position = {
          scrollbarWidth: function () {
            if (void 0 !== n) return n;
            var e,
              i,
              s = t(
                "<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"
              ),
              o = s.children()[0];
            return (
              t("body").append(s),
              (e = o.offsetWidth),
              s.css("overflow", "scroll"),
              e === (i = o.offsetWidth) && (i = s[0].clientWidth),
              s.remove(),
              (n = e - i)
            );
          },
          getScrollInfo: function (e) {
            var i =
                e.isWindow || e.isDocument ? "" : e.element.css("overflow-x"),
              n = e.isWindow || e.isDocument ? "" : e.element.css("overflow-y"),
              s =
                "scroll" === i ||
                ("auto" === i && e.width < e.element[0].scrollWidth);
            return {
              width:
                "scroll" === n ||
                ("auto" === n && e.height < e.element[0].scrollHeight)
                  ? t.position.scrollbarWidth()
                  : 0,
              height: s ? t.position.scrollbarWidth() : 0,
            };
          },
          getWithinInfo: function (e) {
            var i = t(e || window),
              n = t.isWindow(i[0]),
              s = !!i[0] && 9 === i[0].nodeType;
            return {
              element: i,
              isWindow: n,
              isDocument: s,
              offset: !n && !s ? t(e).offset() : { left: 0, top: 0 },
              scrollLeft: i.scrollLeft(),
              scrollTop: i.scrollTop(),
              width: i.outerWidth(),
              height: i.outerHeight(),
            };
          },
        }),
          (t.fn.position = function (n) {
            if (!n || !n.of) return u.apply(this, arguments);
            n = t.extend({}, n);
            var c,
              d,
              p,
              f,
              g,
              m,
              v = t(n.of),
              _ = t.position.getWithinInfo(n.within),
              y = t.position.getScrollInfo(_),
              b = (n.collision || "flip").split(" "),
              w = {};
            return (
              (m = (function (e) {
                var i = e[0];
                return 9 === i.nodeType
                  ? {
                      width: e.width(),
                      height: e.height(),
                      offset: { top: 0, left: 0 },
                    }
                  : t.isWindow(i)
                  ? {
                      width: e.width(),
                      height: e.height(),
                      offset: { top: e.scrollTop(), left: e.scrollLeft() },
                    }
                  : i.preventDefault
                  ? {
                      width: 0,
                      height: 0,
                      offset: { top: i.pageY, left: i.pageX },
                    }
                  : {
                      width: e.outerWidth(),
                      height: e.outerHeight(),
                      offset: e.offset(),
                    };
              })(v)),
              v[0].preventDefault && (n.at = "left top"),
              (d = m.width),
              (p = m.height),
              (f = m.offset),
              (g = t.extend({}, f)),
              t.each(["my", "at"], function () {
                var t,
                  e,
                  i = (n[this] || "").split(" ");
                1 === i.length &&
                  (i = r.test(i[0])
                    ? i.concat(["center"])
                    : a.test(i[0])
                    ? ["center"].concat(i)
                    : ["center", "center"]),
                  (i[0] = r.test(i[0]) ? i[0] : "center"),
                  (i[1] = a.test(i[1]) ? i[1] : "center"),
                  (t = l.exec(i[0])),
                  (e = l.exec(i[1])),
                  (w[this] = [t ? t[0] : 0, e ? e[0] : 0]),
                  (n[this] = [h.exec(i[0])[0], h.exec(i[1])[0]]);
              }),
              1 === b.length && (b[1] = b[0]),
              "right" === n.at[0]
                ? (g.left += d)
                : "center" === n.at[0] && (g.left += d / 2),
              "bottom" === n.at[1]
                ? (g.top += p)
                : "center" === n.at[1] && (g.top += p / 2),
              (c = e(w.at, d, p)),
              (g.left += c[0]),
              (g.top += c[1]),
              this.each(function () {
                var r,
                  a,
                  l = t(this),
                  h = l.outerWidth(),
                  u = l.outerHeight(),
                  m = i(this, "marginLeft"),
                  x = i(this, "marginTop"),
                  C = h + m + i(this, "marginRight") + y.width,
                  k = u + x + i(this, "marginBottom") + y.height,
                  T = t.extend({}, g),
                  D = e(w.my, l.outerWidth(), l.outerHeight());
                "right" === n.my[0]
                  ? (T.left -= h)
                  : "center" === n.my[0] && (T.left -= h / 2),
                  "bottom" === n.my[1]
                    ? (T.top -= u)
                    : "center" === n.my[1] && (T.top -= u / 2),
                  (T.left += D[0]),
                  (T.top += D[1]),
                  (r = { marginLeft: m, marginTop: x }),
                  t.each(["left", "top"], function (e, i) {
                    t.ui.position[b[e]] &&
                      t.ui.position[b[e]][i](T, {
                        targetWidth: d,
                        targetHeight: p,
                        elemWidth: h,
                        elemHeight: u,
                        collisionPosition: r,
                        collisionWidth: C,
                        collisionHeight: k,
                        offset: [c[0] + D[0], c[1] + D[1]],
                        my: n.my,
                        at: n.at,
                        within: _,
                        elem: l,
                      });
                  }),
                  n.using &&
                    (a = function (t) {
                      var e = f.left - T.left,
                        i = e + d - h,
                        r = f.top - T.top,
                        a = r + p - u,
                        c = {
                          target: {
                            element: v,
                            left: f.left,
                            top: f.top,
                            width: d,
                            height: p,
                          },
                          element: {
                            element: l,
                            left: T.left,
                            top: T.top,
                            width: h,
                            height: u,
                          },
                          horizontal:
                            0 > i ? "left" : e > 0 ? "right" : "center",
                          vertical: 0 > a ? "top" : r > 0 ? "bottom" : "middle",
                        };
                      h > d && d > o(e + i) && (c.horizontal = "center"),
                        u > p && p > o(r + a) && (c.vertical = "middle"),
                        (c.important =
                          s(o(e), o(i)) > s(o(r), o(a))
                            ? "horizontal"
                            : "vertical"),
                        n.using.call(this, t, c);
                    }),
                  l.offset(t.extend(T, { using: a }));
              })
            );
          }),
          (t.ui.position = {
            fit: {
              left: function (t, e) {
                var i,
                  n = e.within,
                  o = n.isWindow ? n.scrollLeft : n.offset.left,
                  r = n.width,
                  a = t.left - e.collisionPosition.marginLeft,
                  l = o - a,
                  h = a + e.collisionWidth - r - o;
                e.collisionWidth > r
                  ? l > 0 && 0 >= h
                    ? ((i = t.left + l + e.collisionWidth - r - o),
                      (t.left += l - i))
                    : (t.left =
                        h > 0 && 0 >= l
                          ? o
                          : l > h
                          ? o + r - e.collisionWidth
                          : o)
                  : l > 0
                  ? (t.left += l)
                  : h > 0
                  ? (t.left -= h)
                  : (t.left = s(t.left - a, t.left));
              },
              top: function (t, e) {
                var i,
                  n = e.within,
                  o = n.isWindow ? n.scrollTop : n.offset.top,
                  r = e.within.height,
                  a = t.top - e.collisionPosition.marginTop,
                  l = o - a,
                  h = a + e.collisionHeight - r - o;
                e.collisionHeight > r
                  ? l > 0 && 0 >= h
                    ? ((i = t.top + l + e.collisionHeight - r - o),
                      (t.top += l - i))
                    : (t.top =
                        h > 0 && 0 >= l
                          ? o
                          : l > h
                          ? o + r - e.collisionHeight
                          : o)
                  : l > 0
                  ? (t.top += l)
                  : h > 0
                  ? (t.top -= h)
                  : (t.top = s(t.top - a, t.top));
              },
            },
            flip: {
              left: function (t, e) {
                var i,
                  n,
                  s = e.within,
                  r = s.offset.left + s.scrollLeft,
                  a = s.width,
                  l = s.isWindow ? s.scrollLeft : s.offset.left,
                  h = t.left - e.collisionPosition.marginLeft,
                  c = h - l,
                  u = h + e.collisionWidth - a - l,
                  d =
                    "left" === e.my[0]
                      ? -e.elemWidth
                      : "right" === e.my[0]
                      ? e.elemWidth
                      : 0,
                  p =
                    "left" === e.at[0]
                      ? e.targetWidth
                      : "right" === e.at[0]
                      ? -e.targetWidth
                      : 0,
                  f = -2 * e.offset[0];
                0 > c
                  ? (0 > (i = t.left + d + p + f + e.collisionWidth - a - r) ||
                      o(c) > i) &&
                    (t.left += d + p + f)
                  : u > 0 &&
                    ((n =
                      t.left - e.collisionPosition.marginLeft + d + p + f - l) >
                      0 ||
                      u > o(n)) &&
                    (t.left += d + p + f);
              },
              top: function (t, e) {
                var i,
                  n,
                  s = e.within,
                  r = s.offset.top + s.scrollTop,
                  a = s.height,
                  l = s.isWindow ? s.scrollTop : s.offset.top,
                  h = t.top - e.collisionPosition.marginTop,
                  c = h - l,
                  u = h + e.collisionHeight - a - l,
                  d =
                    "top" === e.my[1]
                      ? -e.elemHeight
                      : "bottom" === e.my[1]
                      ? e.elemHeight
                      : 0,
                  p =
                    "top" === e.at[1]
                      ? e.targetHeight
                      : "bottom" === e.at[1]
                      ? -e.targetHeight
                      : 0,
                  f = -2 * e.offset[1];
                0 > c
                  ? (0 > (n = t.top + d + p + f + e.collisionHeight - a - r) ||
                      o(c) > n) &&
                    (t.top += d + p + f)
                  : u > 0 &&
                    ((i =
                      t.top - e.collisionPosition.marginTop + d + p + f - l) >
                      0 ||
                      u > o(i)) &&
                    (t.top += d + p + f);
              },
            },
            flipfit: {
              left: function () {
                t.ui.position.flip.left.apply(this, arguments),
                  t.ui.position.fit.left.apply(this, arguments);
              },
              top: function () {
                t.ui.position.flip.top.apply(this, arguments),
                  t.ui.position.fit.top.apply(this, arguments);
              },
            },
          });
      })(),
      t.ui.position,
      t.extend(t.expr[":"], {
        data: t.expr.createPseudo
          ? t.expr.createPseudo(function (e) {
              return function (i) {
                return !!t.data(i, e);
              };
            })
          : function (e, i, n) {
              return !!t.data(e, n[3]);
            },
      }),
      t.fn.extend({
        disableSelection: (function () {
          var t =
            "onselectstart" in document.createElement("div")
              ? "selectstart"
              : "mousedown";
          return function () {
            return this.on(t + ".ui-disableSelection", function (t) {
              t.preventDefault();
            });
          };
        })(),
        enableSelection: function () {
          return this.off(".ui-disableSelection");
        },
      }),
      (t.ui.focusable = function (e, i) {
        var n,
          s,
          o,
          r,
          a,
          l = e.nodeName.toLowerCase();
        return "area" === l
          ? ((s = (n = e.parentNode).name),
            !(!e.href || !s || "map" !== n.nodeName.toLowerCase()) &&
              (o = t("img[usemap='#" + s + "']")).length > 0 &&
              o.is(":visible"))
          : (/^(input|select|textarea|button|object)$/.test(l)
              ? (r = !e.disabled) &&
                (a = t(e).closest("fieldset")[0]) &&
                (r = !a.disabled)
              : (r = ("a" === l && e.href) || i),
            r &&
              t(e).is(":visible") &&
              (function (t) {
                for (var e = t.css("visibility"); "inherit" === e; )
                  e = (t = t.parent()).css("visibility");
                return "hidden" !== e;
              })(t(e)));
      }),
      t.extend(t.expr[":"], {
        focusable: function (e) {
          return t.ui.focusable(e, null != t.attr(e, "tabindex"));
        },
      }),
      t.ui.focusable,
      (t.fn.form = function () {
        return "string" == typeof this[0].form
          ? this.closest("form")
          : t(this[0].form);
      }),
      (t.ui.formResetMixin = {
        _formResetHandler: function () {
          var e = t(this);
          setTimeout(function () {
            var i = e.data("ui-form-reset-instances");
            t.each(i, function () {
              this.refresh();
            });
          });
        },
        _bindFormResetHandler: function () {
          if (((this.form = this.element.form()), this.form.length)) {
            var t = this.form.data("ui-form-reset-instances") || [];
            t.length ||
              this.form.on("reset.ui-form-reset", this._formResetHandler),
              t.push(this),
              this.form.data("ui-form-reset-instances", t);
          }
        },
        _unbindFormResetHandler: function () {
          if (this.form.length) {
            var e = this.form.data("ui-form-reset-instances");
            e.splice(t.inArray(this, e), 1),
              e.length
                ? this.form.data("ui-form-reset-instances", e)
                : this.form
                    .removeData("ui-form-reset-instances")
                    .off("reset.ui-form-reset");
          }
        },
      }),
      "1.7" === t.fn.jquery.substring(0, 3) &&
        (t.each(["Width", "Height"], function (e, i) {
          function n(e, i, n, o) {
            return (
              t.each(s, function () {
                (i -= parseFloat(t.css(e, "padding" + this)) || 0),
                  n &&
                    (i -= parseFloat(t.css(e, "border" + this + "Width")) || 0),
                  o && (i -= parseFloat(t.css(e, "margin" + this)) || 0);
              }),
              i
            );
          }
          var s = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"],
            o = i.toLowerCase(),
            r = {
              innerWidth: t.fn.innerWidth,
              innerHeight: t.fn.innerHeight,
              outerWidth: t.fn.outerWidth,
              outerHeight: t.fn.outerHeight,
            };
          (t.fn["inner" + i] = function (e) {
            return void 0 === e
              ? r["inner" + i].call(this)
              : this.each(function () {
                  t(this).css(o, n(this, e) + "px");
                });
          }),
            (t.fn["outer" + i] = function (e, s) {
              return "number" != typeof e
                ? r["outer" + i].call(this, e)
                : this.each(function () {
                    t(this).css(o, n(this, e, !0, s) + "px");
                  });
            });
        }),
        (t.fn.addBack = function (t) {
          return this.add(
            null == t ? this.prevObject : this.prevObject.filter(t)
          );
        })),
      (t.ui.keyCode = {
        BACKSPACE: 8,
        COMMA: 188,
        DELETE: 46,
        DOWN: 40,
        END: 35,
        ENTER: 13,
        ESCAPE: 27,
        HOME: 36,
        LEFT: 37,
        PAGE_DOWN: 34,
        PAGE_UP: 33,
        PERIOD: 190,
        RIGHT: 39,
        SPACE: 32,
        TAB: 9,
        UP: 38,
      }),
      (t.ui.escapeSelector = (function () {
        var t = /([!"#$%&'()*+,.\/:;<=>?@[\]^`{|}~])/g;
        return function (e) {
          return e.replace(t, "\\$1");
        };
      })()),
      (t.fn.labels = function () {
        var e, i, n, s, o;
        return this[0].labels && this[0].labels.length
          ? this.pushStack(this[0].labels)
          : ((s = this.eq(0).parents("label")),
            (n = this.attr("id")) &&
              ((o = (e = this.eq(0).parents().last()).add(
                e.length ? e.siblings() : this.siblings()
              )),
              (i = "label[for='" + t.ui.escapeSelector(n) + "']"),
              (s = s.add(o.find(i).addBack(i)))),
            this.pushStack(s));
      }),
      (t.fn.scrollParent = function (e) {
        var i = this.css("position"),
          n = "absolute" === i,
          s = e ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
          o = this.parents()
            .filter(function () {
              var e = t(this);
              return (
                (!n || "static" !== e.css("position")) &&
                s.test(
                  e.css("overflow") + e.css("overflow-y") + e.css("overflow-x")
                )
              );
            })
            .eq(0);
        return "fixed" !== i && o.length
          ? o
          : t(this[0].ownerDocument || document);
      }),
      t.extend(t.expr[":"], {
        tabbable: function (e) {
          var i = t.attr(e, "tabindex"),
            n = null != i;
          return (!n || i >= 0) && t.ui.focusable(e, n);
        },
      }),
      t.fn.extend({
        uniqueId: (function () {
          var t = 0;
          return function () {
            return this.each(function () {
              this.id || (this.id = "ui-id-" + ++t);
            });
          };
        })(),
        removeUniqueId: function () {
          return this.each(function () {
            /^ui-id-\d+$/.test(this.id) && t(this).removeAttr("id");
          });
        },
      }),
      (t.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()));
    var l = !1;
    t(document).on("mouseup", function () {
      l = !1;
    }),
      t.widget("ui.mouse", {
        version: "1.12.1",
        options: {
          cancel: "input, textarea, button, select, option",
          distance: 1,
          delay: 0,
        },
        _mouseInit: function () {
          var e = this;
          this.element
            .on("mousedown." + this.widgetName, function (t) {
              return e._mouseDown(t);
            })
            .on("click." + this.widgetName, function (i) {
              return !0 ===
                t.data(i.target, e.widgetName + ".preventClickEvent")
                ? (t.removeData(i.target, e.widgetName + ".preventClickEvent"),
                  i.stopImmediatePropagation(),
                  !1)
                : void 0;
            }),
            (this.started = !1);
        },
        _mouseDestroy: function () {
          this.element.off("." + this.widgetName),
            this._mouseMoveDelegate &&
              this.document
                .off("mousemove." + this.widgetName, this._mouseMoveDelegate)
                .off("mouseup." + this.widgetName, this._mouseUpDelegate);
        },
        _mouseDown: function (e) {
          if (!l) {
            (this._mouseMoved = !1),
              this._mouseStarted && this._mouseUp(e),
              (this._mouseDownEvent = e);
            var i = this,
              n = 1 === e.which,
              s =
                !(
                  "string" != typeof this.options.cancel || !e.target.nodeName
                ) && t(e.target).closest(this.options.cancel).length;
            return (
              !(n && !s && this._mouseCapture(e)) ||
              ((this.mouseDelayMet = !this.options.delay),
              this.mouseDelayMet ||
                (this._mouseDelayTimer = setTimeout(function () {
                  i.mouseDelayMet = !0;
                }, this.options.delay)),
              this._mouseDistanceMet(e) &&
              this._mouseDelayMet(e) &&
              ((this._mouseStarted = !1 !== this._mouseStart(e)),
              !this._mouseStarted)
                ? (e.preventDefault(), !0)
                : (!0 ===
                    t.data(e.target, this.widgetName + ".preventClickEvent") &&
                    t.removeData(
                      e.target,
                      this.widgetName + ".preventClickEvent"
                    ),
                  (this._mouseMoveDelegate = function (t) {
                    return i._mouseMove(t);
                  }),
                  (this._mouseUpDelegate = function (t) {
                    return i._mouseUp(t);
                  }),
                  this.document
                    .on("mousemove." + this.widgetName, this._mouseMoveDelegate)
                    .on("mouseup." + this.widgetName, this._mouseUpDelegate),
                  e.preventDefault(),
                  (l = !0),
                  !0))
            );
          }
        },
        _mouseMove: function (e) {
          if (this._mouseMoved) {
            if (
              t.ui.ie &&
              (!document.documentMode || 9 > document.documentMode) &&
              !e.button
            )
              return this._mouseUp(e);
            if (!e.which)
              if (
                e.originalEvent.altKey ||
                e.originalEvent.ctrlKey ||
                e.originalEvent.metaKey ||
                e.originalEvent.shiftKey
              )
                this.ignoreMissingWhich = !0;
              else if (!this.ignoreMissingWhich) return this._mouseUp(e);
          }
          return (
            (e.which || e.button) && (this._mouseMoved = !0),
            this._mouseStarted
              ? (this._mouseDrag(e), e.preventDefault())
              : (this._mouseDistanceMet(e) &&
                  this._mouseDelayMet(e) &&
                  ((this._mouseStarted =
                    !1 !== this._mouseStart(this._mouseDownEvent, e)),
                  this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)),
                !this._mouseStarted)
          );
        },
        _mouseUp: function (e) {
          this.document
            .off("mousemove." + this.widgetName, this._mouseMoveDelegate)
            .off("mouseup." + this.widgetName, this._mouseUpDelegate),
            this._mouseStarted &&
              ((this._mouseStarted = !1),
              e.target === this._mouseDownEvent.target &&
                t.data(e.target, this.widgetName + ".preventClickEvent", !0),
              this._mouseStop(e)),
            this._mouseDelayTimer &&
              (clearTimeout(this._mouseDelayTimer),
              delete this._mouseDelayTimer),
            (this.ignoreMissingWhich = !1),
            (l = !1),
            e.preventDefault();
        },
        _mouseDistanceMet: function (t) {
          return (
            Math.max(
              Math.abs(this._mouseDownEvent.pageX - t.pageX),
              Math.abs(this._mouseDownEvent.pageY - t.pageY)
            ) >= this.options.distance
          );
        },
        _mouseDelayMet: function () {
          return this.mouseDelayMet;
        },
        _mouseStart: function () {},
        _mouseDrag: function () {},
        _mouseStop: function () {},
        _mouseCapture: function () {
          return !0;
        },
      }),
      (t.ui.plugin = {
        add: function (e, i, n) {
          var s,
            o = t.ui[e].prototype;
          for (s in n)
            (o.plugins[s] = o.plugins[s] || []), o.plugins[s].push([i, n[s]]);
        },
        call: function (t, e, i, n) {
          var s,
            o = t.plugins[e];
          if (
            o &&
            (n ||
              (t.element[0].parentNode &&
                11 !== t.element[0].parentNode.nodeType))
          )
            for (s = 0; o.length > s; s++)
              t.options[o[s][0]] && o[s][1].apply(t.element, i);
        },
      }),
      (t.ui.safeActiveElement = function (t) {
        var e;
        try {
          e = t.activeElement;
        } catch (i) {
          e = t.body;
        }
        return e || (e = t.body), e.nodeName || (e = t.body), e;
      }),
      (t.ui.safeBlur = function (e) {
        e && "body" !== e.nodeName.toLowerCase() && t(e).trigger("blur");
      }),
      t.widget("ui.draggable", t.ui.mouse, {
        version: "1.12.1",
        widgetEventPrefix: "drag",
        options: {
          addClasses: !0,
          appendTo: "parent",
          axis: !1,
          connectToSortable: !1,
          containment: !1,
          cursor: "auto",
          cursorAt: !1,
          grid: !1,
          handle: !1,
          helper: "original",
          iframeFix: !1,
          opacity: !1,
          refreshPositions: !1,
          revert: !1,
          revertDuration: 500,
          scope: "default",
          scroll: !0,
          scrollSensitivity: 20,
          scrollSpeed: 20,
          snap: !1,
          snapMode: "both",
          snapTolerance: 20,
          stack: !1,
          zIndex: !1,
          drag: null,
          start: null,
          stop: null,
        },
        _create: function () {
          "original" === this.options.helper && this._setPositionRelative(),
            this.options.addClasses && this._addClass("ui-draggable"),
            this._setHandleClassName(),
            this._mouseInit();
        },
        _setOption: function (t, e) {
          this._super(t, e),
            "handle" === t &&
              (this._removeHandleClassName(), this._setHandleClassName());
        },
        _destroy: function () {
          return (this.helper || this.element).is(".ui-draggable-dragging")
            ? void (this.destroyOnClear = !0)
            : (this._removeHandleClassName(), void this._mouseDestroy());
        },
        _mouseCapture: function (e) {
          var i = this.options;
          return (
            !(
              this.helper ||
              i.disabled ||
              t(e.target).closest(".ui-resizable-handle").length > 0
            ) &&
            ((this.handle = this._getHandle(e)),
            !!this.handle &&
              (this._blurActiveElement(e),
              this._blockFrames(!0 === i.iframeFix ? "iframe" : i.iframeFix),
              !0))
          );
        },
        _blockFrames: function (e) {
          this.iframeBlocks = this.document.find(e).map(function () {
            var e = t(this);
            return t("<div>")
              .css("position", "absolute")
              .appendTo(e.parent())
              .outerWidth(e.outerWidth())
              .outerHeight(e.outerHeight())
              .offset(e.offset())[0];
          });
        },
        _unblockFrames: function () {
          this.iframeBlocks &&
            (this.iframeBlocks.remove(), delete this.iframeBlocks);
        },
        _blurActiveElement: function (e) {
          var i = t.ui.safeActiveElement(this.document[0]);
          t(e.target).closest(i).length || t.ui.safeBlur(i);
        },
        _mouseStart: function (e) {
          var i = this.options;
          return (
            (this.helper = this._createHelper(e)),
            this._addClass(this.helper, "ui-draggable-dragging"),
            this._cacheHelperProportions(),
            t.ui.ddmanager && (t.ui.ddmanager.current = this),
            this._cacheMargins(),
            (this.cssPosition = this.helper.css("position")),
            (this.scrollParent = this.helper.scrollParent(!0)),
            (this.offsetParent = this.helper.offsetParent()),
            (this.hasFixedAncestor =
              this.helper.parents().filter(function () {
                return "fixed" === t(this).css("position");
              }).length > 0),
            (this.positionAbs = this.element.offset()),
            this._refreshOffsets(e),
            (this.originalPosition = this.position =
              this._generatePosition(e, !1)),
            (this.originalPageX = e.pageX),
            (this.originalPageY = e.pageY),
            i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt),
            this._setContainment(),
            !1 === this._trigger("start", e)
              ? (this._clear(), !1)
              : (this._cacheHelperProportions(),
                t.ui.ddmanager &&
                  !i.dropBehaviour &&
                  t.ui.ddmanager.prepareOffsets(this, e),
                this._mouseDrag(e, !0),
                t.ui.ddmanager && t.ui.ddmanager.dragStart(this, e),
                !0)
          );
        },
        _refreshOffsets: function (t) {
          (this.offset = {
            top: this.positionAbs.top - this.margins.top,
            left: this.positionAbs.left - this.margins.left,
            scroll: !1,
            parent: this._getParentOffset(),
            relative: this._getRelativeOffset(),
          }),
            (this.offset.click = {
              left: t.pageX - this.offset.left,
              top: t.pageY - this.offset.top,
            });
        },
        _mouseDrag: function (e, i) {
          if (
            (this.hasFixedAncestor &&
              (this.offset.parent = this._getParentOffset()),
            (this.position = this._generatePosition(e, !0)),
            (this.positionAbs = this._convertPositionTo("absolute")),
            !i)
          ) {
            var n = this._uiHash();
            if (!1 === this._trigger("drag", e, n))
              return this._mouseUp(new t.Event("mouseup", e)), !1;
            this.position = n.position;
          }
          return (
            (this.helper[0].style.left = this.position.left + "px"),
            (this.helper[0].style.top = this.position.top + "px"),
            t.ui.ddmanager && t.ui.ddmanager.drag(this, e),
            !1
          );
        },
        _mouseStop: function (e) {
          var i = this,
            n = !1;
          return (
            t.ui.ddmanager &&
              !this.options.dropBehaviour &&
              (n = t.ui.ddmanager.drop(this, e)),
            this.dropped && ((n = this.dropped), (this.dropped = !1)),
            ("invalid" === this.options.revert && !n) ||
            ("valid" === this.options.revert && n) ||
            !0 === this.options.revert ||
            (t.isFunction(this.options.revert) &&
              this.options.revert.call(this.element, n))
              ? t(this.helper).animate(
                  this.originalPosition,
                  parseInt(this.options.revertDuration, 10),
                  function () {
                    !1 !== i._trigger("stop", e) && i._clear();
                  }
                )
              : !1 !== this._trigger("stop", e) && this._clear(),
            !1
          );
        },
        _mouseUp: function (e) {
          return (
            this._unblockFrames(),
            t.ui.ddmanager && t.ui.ddmanager.dragStop(this, e),
            this.handleElement.is(e.target) && this.element.trigger("focus"),
            t.ui.mouse.prototype._mouseUp.call(this, e)
          );
        },
        cancel: function () {
          return (
            this.helper.is(".ui-draggable-dragging")
              ? this._mouseUp(
                  new t.Event("mouseup", { target: this.element[0] })
                )
              : this._clear(),
            this
          );
        },
        _getHandle: function (e) {
          return (
            !this.options.handle ||
            !!t(e.target).closest(this.element.find(this.options.handle)).length
          );
        },
        _setHandleClassName: function () {
          (this.handleElement = this.options.handle
            ? this.element.find(this.options.handle)
            : this.element),
            this._addClass(this.handleElement, "ui-draggable-handle");
        },
        _removeHandleClassName: function () {
          this._removeClass(this.handleElement, "ui-draggable-handle");
        },
        _createHelper: function (e) {
          var i = this.options,
            n = t.isFunction(i.helper),
            s = n
              ? t(i.helper.apply(this.element[0], [e]))
              : "clone" === i.helper
              ? this.element.clone().removeAttr("id")
              : this.element;
          return (
            s.parents("body").length ||
              s.appendTo(
                "parent" === i.appendTo
                  ? this.element[0].parentNode
                  : i.appendTo
              ),
            n && s[0] === this.element[0] && this._setPositionRelative(),
            s[0] === this.element[0] ||
              /(fixed|absolute)/.test(s.css("position")) ||
              s.css("position", "absolute"),
            s
          );
        },
        _setPositionRelative: function () {
          /^(?:r|a|f)/.test(this.element.css("position")) ||
            (this.element[0].style.position = "relative");
        },
        _adjustOffsetFromHelper: function (e) {
          "string" == typeof e && (e = e.split(" ")),
            t.isArray(e) && (e = { left: +e[0], top: +e[1] || 0 }),
            "left" in e &&
              (this.offset.click.left = e.left + this.margins.left),
            "right" in e &&
              (this.offset.click.left =
                this.helperProportions.width - e.right + this.margins.left),
            "top" in e && (this.offset.click.top = e.top + this.margins.top),
            "bottom" in e &&
              (this.offset.click.top =
                this.helperProportions.height - e.bottom + this.margins.top);
        },
        _isRootNode: function (t) {
          return /(html|body)/i.test(t.tagName) || t === this.document[0];
        },
        _getParentOffset: function () {
          var e = this.offsetParent.offset(),
            i = this.document[0];
          return (
            "absolute" === this.cssPosition &&
              this.scrollParent[0] !== i &&
              t.contains(this.scrollParent[0], this.offsetParent[0]) &&
              ((e.left += this.scrollParent.scrollLeft()),
              (e.top += this.scrollParent.scrollTop())),
            this._isRootNode(this.offsetParent[0]) && (e = { top: 0, left: 0 }),
            {
              top:
                e.top +
                (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
              left:
                e.left +
                (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0),
            }
          );
        },
        _getRelativeOffset: function () {
          if ("relative" !== this.cssPosition) return { top: 0, left: 0 };
          var t = this.element.position(),
            e = this._isRootNode(this.scrollParent[0]);
          return {
            top:
              t.top -
              (parseInt(this.helper.css("top"), 10) || 0) +
              (e ? 0 : this.scrollParent.scrollTop()),
            left:
              t.left -
              (parseInt(this.helper.css("left"), 10) || 0) +
              (e ? 0 : this.scrollParent.scrollLeft()),
          };
        },
        _cacheMargins: function () {
          this.margins = {
            left: parseInt(this.element.css("marginLeft"), 10) || 0,
            top: parseInt(this.element.css("marginTop"), 10) || 0,
            right: parseInt(this.element.css("marginRight"), 10) || 0,
            bottom: parseInt(this.element.css("marginBottom"), 10) || 0,
          };
        },
        _cacheHelperProportions: function () {
          this.helperProportions = {
            width: this.helper.outerWidth(),
            height: this.helper.outerHeight(),
          };
        },
        _setContainment: function () {
          var e,
            i,
            n,
            s = this.options,
            o = this.document[0];
          return (
            (this.relativeContainer = null),
            s.containment
              ? "window" === s.containment
                ? void (this.containment = [
                    t(window).scrollLeft() -
                      this.offset.relative.left -
                      this.offset.parent.left,
                    t(window).scrollTop() -
                      this.offset.relative.top -
                      this.offset.parent.top,
                    t(window).scrollLeft() +
                      t(window).width() -
                      this.helperProportions.width -
                      this.margins.left,
                    t(window).scrollTop() +
                      (t(window).height() || o.body.parentNode.scrollHeight) -
                      this.helperProportions.height -
                      this.margins.top,
                  ])
                : "document" === s.containment
                ? void (this.containment = [
                    0,
                    0,
                    t(o).width() -
                      this.helperProportions.width -
                      this.margins.left,
                    (t(o).height() || o.body.parentNode.scrollHeight) -
                      this.helperProportions.height -
                      this.margins.top,
                  ])
                : s.containment.constructor === Array
                ? void (this.containment = s.containment)
                : ("parent" === s.containment &&
                    (s.containment = this.helper[0].parentNode),
                  void (
                    (n = (i = t(s.containment))[0]) &&
                    ((e = /(scroll|auto)/.test(i.css("overflow"))),
                    (this.containment = [
                      (parseInt(i.css("borderLeftWidth"), 10) || 0) +
                        (parseInt(i.css("paddingLeft"), 10) || 0),
                      (parseInt(i.css("borderTopWidth"), 10) || 0) +
                        (parseInt(i.css("paddingTop"), 10) || 0),
                      (e
                        ? Math.max(n.scrollWidth, n.offsetWidth)
                        : n.offsetWidth) -
                        (parseInt(i.css("borderRightWidth"), 10) || 0) -
                        (parseInt(i.css("paddingRight"), 10) || 0) -
                        this.helperProportions.width -
                        this.margins.left -
                        this.margins.right,
                      (e
                        ? Math.max(n.scrollHeight, n.offsetHeight)
                        : n.offsetHeight) -
                        (parseInt(i.css("borderBottomWidth"), 10) || 0) -
                        (parseInt(i.css("paddingBottom"), 10) || 0) -
                        this.helperProportions.height -
                        this.margins.top -
                        this.margins.bottom,
                    ]),
                    (this.relativeContainer = i))
                  ))
              : void (this.containment = null)
          );
        },
        _convertPositionTo: function (t, e) {
          e || (e = this.position);
          var i = "absolute" === t ? 1 : -1,
            n = this._isRootNode(this.scrollParent[0]);
          return {
            top:
              e.top +
              this.offset.relative.top * i +
              this.offset.parent.top * i -
              ("fixed" === this.cssPosition
                ? -this.offset.scroll.top
                : n
                ? 0
                : this.offset.scroll.top) *
                i,
            left:
              e.left +
              this.offset.relative.left * i +
              this.offset.parent.left * i -
              ("fixed" === this.cssPosition
                ? -this.offset.scroll.left
                : n
                ? 0
                : this.offset.scroll.left) *
                i,
          };
        },
        _generatePosition: function (t, e) {
          var i,
            n,
            s,
            o,
            r = this.options,
            a = this._isRootNode(this.scrollParent[0]),
            l = t.pageX,
            h = t.pageY;
          return (
            (a && this.offset.scroll) ||
              (this.offset.scroll = {
                top: this.scrollParent.scrollTop(),
                left: this.scrollParent.scrollLeft(),
              }),
            e &&
              (this.containment &&
                (this.relativeContainer
                  ? ((n = this.relativeContainer.offset()),
                    (i = [
                      this.containment[0] + n.left,
                      this.containment[1] + n.top,
                      this.containment[2] + n.left,
                      this.containment[3] + n.top,
                    ]))
                  : (i = this.containment),
                t.pageX - this.offset.click.left < i[0] &&
                  (l = i[0] + this.offset.click.left),
                t.pageY - this.offset.click.top < i[1] &&
                  (h = i[1] + this.offset.click.top),
                t.pageX - this.offset.click.left > i[2] &&
                  (l = i[2] + this.offset.click.left),
                t.pageY - this.offset.click.top > i[3] &&
                  (h = i[3] + this.offset.click.top)),
              r.grid &&
                ((s = r.grid[1]
                  ? this.originalPageY +
                    Math.round((h - this.originalPageY) / r.grid[1]) * r.grid[1]
                  : this.originalPageY),
                (h = i
                  ? s - this.offset.click.top >= i[1] ||
                    s - this.offset.click.top > i[3]
                    ? s
                    : s - this.offset.click.top >= i[1]
                    ? s - r.grid[1]
                    : s + r.grid[1]
                  : s),
                (o = r.grid[0]
                  ? this.originalPageX +
                    Math.round((l - this.originalPageX) / r.grid[0]) * r.grid[0]
                  : this.originalPageX),
                (l = i
                  ? o - this.offset.click.left >= i[0] ||
                    o - this.offset.click.left > i[2]
                    ? o
                    : o - this.offset.click.left >= i[0]
                    ? o - r.grid[0]
                    : o + r.grid[0]
                  : o)),
              "y" === r.axis && (l = this.originalPageX),
              "x" === r.axis && (h = this.originalPageY)),
            {
              top:
                h -
                this.offset.click.top -
                this.offset.relative.top -
                this.offset.parent.top +
                ("fixed" === this.cssPosition
                  ? -this.offset.scroll.top
                  : a
                  ? 0
                  : this.offset.scroll.top),
              left:
                l -
                this.offset.click.left -
                this.offset.relative.left -
                this.offset.parent.left +
                ("fixed" === this.cssPosition
                  ? -this.offset.scroll.left
                  : a
                  ? 0
                  : this.offset.scroll.left),
            }
          );
        },
        _clear: function () {
          this._removeClass(this.helper, "ui-draggable-dragging"),
            this.helper[0] === this.element[0] ||
              this.cancelHelperRemoval ||
              this.helper.remove(),
            (this.helper = null),
            (this.cancelHelperRemoval = !1),
            this.destroyOnClear && this.destroy();
        },
        _trigger: function (e, i, n) {
          return (
            (n = n || this._uiHash()),
            t.ui.plugin.call(this, e, [i, n, this], !0),
            /^(drag|start|stop)/.test(e) &&
              ((this.positionAbs = this._convertPositionTo("absolute")),
              (n.offset = this.positionAbs)),
            t.Widget.prototype._trigger.call(this, e, i, n)
          );
        },
        plugins: {},
        _uiHash: function () {
          return {
            helper: this.helper,
            position: this.position,
            originalPosition: this.originalPosition,
            offset: this.positionAbs,
          };
        },
      }),
      t.ui.plugin.add("draggable", "connectToSortable", {
        start: function (e, i, n) {
          var s = t.extend({}, i, { item: n.element });
          (n.sortables = []),
            t(n.options.connectToSortable).each(function () {
              var i = t(this).sortable("instance");
              i &&
                !i.options.disabled &&
                (n.sortables.push(i),
                i.refreshPositions(),
                i._trigger("activate", e, s));
            });
        },
        stop: function (e, i, n) {
          var s = t.extend({}, i, { item: n.element });
          (n.cancelHelperRemoval = !1),
            t.each(n.sortables, function () {
              var t = this;
              t.isOver
                ? ((t.isOver = 0),
                  (n.cancelHelperRemoval = !0),
                  (t.cancelHelperRemoval = !1),
                  (t._storedCSS = {
                    position: t.placeholder.css("position"),
                    top: t.placeholder.css("top"),
                    left: t.placeholder.css("left"),
                  }),
                  t._mouseStop(e),
                  (t.options.helper = t.options._helper))
                : ((t.cancelHelperRemoval = !0),
                  t._trigger("deactivate", e, s));
            });
        },
        drag: function (e, i, n) {
          t.each(n.sortables, function () {
            var s = !1,
              o = this;
            (o.positionAbs = n.positionAbs),
              (o.helperProportions = n.helperProportions),
              (o.offset.click = n.offset.click),
              o._intersectsWith(o.containerCache) &&
                ((s = !0),
                t.each(n.sortables, function () {
                  return (
                    (this.positionAbs = n.positionAbs),
                    (this.helperProportions = n.helperProportions),
                    (this.offset.click = n.offset.click),
                    this !== o &&
                      this._intersectsWith(this.containerCache) &&
                      t.contains(o.element[0], this.element[0]) &&
                      (s = !1),
                    s
                  );
                })),
              s
                ? (o.isOver ||
                    ((o.isOver = 1),
                    (n._parent = i.helper.parent()),
                    (o.currentItem = i.helper
                      .appendTo(o.element)
                      .data("ui-sortable-item", !0)),
                    (o.options._helper = o.options.helper),
                    (o.options.helper = function () {
                      return i.helper[0];
                    }),
                    (e.target = o.currentItem[0]),
                    o._mouseCapture(e, !0),
                    o._mouseStart(e, !0, !0),
                    (o.offset.click.top = n.offset.click.top),
                    (o.offset.click.left = n.offset.click.left),
                    (o.offset.parent.left -=
                      n.offset.parent.left - o.offset.parent.left),
                    (o.offset.parent.top -=
                      n.offset.parent.top - o.offset.parent.top),
                    n._trigger("toSortable", e),
                    (n.dropped = o.element),
                    t.each(n.sortables, function () {
                      this.refreshPositions();
                    }),
                    (n.currentItem = n.element),
                    (o.fromOutside = n)),
                  o.currentItem && (o._mouseDrag(e), (i.position = o.position)))
                : o.isOver &&
                  ((o.isOver = 0),
                  (o.cancelHelperRemoval = !0),
                  (o.options._revert = o.options.revert),
                  (o.options.revert = !1),
                  o._trigger("out", e, o._uiHash(o)),
                  o._mouseStop(e, !0),
                  (o.options.revert = o.options._revert),
                  (o.options.helper = o.options._helper),
                  o.placeholder && o.placeholder.remove(),
                  i.helper.appendTo(n._parent),
                  n._refreshOffsets(e),
                  (i.position = n._generatePosition(e, !0)),
                  n._trigger("fromSortable", e),
                  (n.dropped = !1),
                  t.each(n.sortables, function () {
                    this.refreshPositions();
                  }));
          });
        },
      }),
      t.ui.plugin.add("draggable", "cursor", {
        start: function (e, i, n) {
          var s = t("body"),
            o = n.options;
          s.css("cursor") && (o._cursor = s.css("cursor")),
            s.css("cursor", o.cursor);
        },
        stop: function (e, i, n) {
          var s = n.options;
          s._cursor && t("body").css("cursor", s._cursor);
        },
      }),
      t.ui.plugin.add("draggable", "opacity", {
        start: function (e, i, n) {
          var s = t(i.helper),
            o = n.options;
          s.css("opacity") && (o._opacity = s.css("opacity")),
            s.css("opacity", o.opacity);
        },
        stop: function (e, i, n) {
          var s = n.options;
          s._opacity && t(i.helper).css("opacity", s._opacity);
        },
      }),
      t.ui.plugin.add("draggable", "scroll", {
        start: function (t, e, i) {
          i.scrollParentNotHidden ||
            (i.scrollParentNotHidden = i.helper.scrollParent(!1)),
            i.scrollParentNotHidden[0] !== i.document[0] &&
              "HTML" !== i.scrollParentNotHidden[0].tagName &&
              (i.overflowOffset = i.scrollParentNotHidden.offset());
        },
        drag: function (e, i, n) {
          var s = n.options,
            o = !1,
            r = n.scrollParentNotHidden[0],
            a = n.document[0];
          r !== a && "HTML" !== r.tagName
            ? ((s.axis && "x" === s.axis) ||
                (n.overflowOffset.top + r.offsetHeight - e.pageY <
                s.scrollSensitivity
                  ? (r.scrollTop = o = r.scrollTop + s.scrollSpeed)
                  : e.pageY - n.overflowOffset.top < s.scrollSensitivity &&
                    (r.scrollTop = o = r.scrollTop - s.scrollSpeed)),
              (s.axis && "y" === s.axis) ||
                (n.overflowOffset.left + r.offsetWidth - e.pageX <
                s.scrollSensitivity
                  ? (r.scrollLeft = o = r.scrollLeft + s.scrollSpeed)
                  : e.pageX - n.overflowOffset.left < s.scrollSensitivity &&
                    (r.scrollLeft = o = r.scrollLeft - s.scrollSpeed)))
            : ((s.axis && "x" === s.axis) ||
                (e.pageY - t(a).scrollTop() < s.scrollSensitivity
                  ? (o = t(a).scrollTop(t(a).scrollTop() - s.scrollSpeed))
                  : t(window).height() - (e.pageY - t(a).scrollTop()) <
                      s.scrollSensitivity &&
                    (o = t(a).scrollTop(t(a).scrollTop() + s.scrollSpeed))),
              (s.axis && "y" === s.axis) ||
                (e.pageX - t(a).scrollLeft() < s.scrollSensitivity
                  ? (o = t(a).scrollLeft(t(a).scrollLeft() - s.scrollSpeed))
                  : t(window).width() - (e.pageX - t(a).scrollLeft()) <
                      s.scrollSensitivity &&
                    (o = t(a).scrollLeft(t(a).scrollLeft() + s.scrollSpeed)))),
            !1 !== o &&
              t.ui.ddmanager &&
              !s.dropBehaviour &&
              t.ui.ddmanager.prepareOffsets(n, e);
        },
      }),
      t.ui.plugin.add("draggable", "snap", {
        start: function (e, i, n) {
          var s = n.options;
          (n.snapElements = []),
            t(
              s.snap.constructor !== String
                ? s.snap.items || ":data(ui-draggable)"
                : s.snap
            ).each(function () {
              var e = t(this),
                i = e.offset();
              this !== n.element[0] &&
                n.snapElements.push({
                  item: this,
                  width: e.outerWidth(),
                  height: e.outerHeight(),
                  top: i.top,
                  left: i.left,
                });
            });
        },
        drag: function (e, i, n) {
          var s,
            o,
            r,
            a,
            l,
            h,
            c,
            u,
            d,
            p,
            f = n.options,
            g = f.snapTolerance,
            m = i.offset.left,
            v = m + n.helperProportions.width,
            _ = i.offset.top,
            y = _ + n.helperProportions.height;
          for (d = n.snapElements.length - 1; d >= 0; d--)
            (h =
              (l = n.snapElements[d].left - n.margins.left) +
              n.snapElements[d].width),
              (u =
                (c = n.snapElements[d].top - n.margins.top) +
                n.snapElements[d].height),
              l - g > v ||
              m > h + g ||
              c - g > y ||
              _ > u + g ||
              !t.contains(
                n.snapElements[d].item.ownerDocument,
                n.snapElements[d].item
              )
                ? (n.snapElements[d].snapping &&
                    n.options.snap.release &&
                    n.options.snap.release.call(
                      n.element,
                      e,
                      t.extend(n._uiHash(), {
                        snapItem: n.snapElements[d].item,
                      })
                    ),
                  (n.snapElements[d].snapping = !1))
                : ("inner" !== f.snapMode &&
                    ((s = g >= Math.abs(c - y)),
                    (o = g >= Math.abs(u - _)),
                    (r = g >= Math.abs(l - v)),
                    (a = g >= Math.abs(h - m)),
                    s &&
                      (i.position.top = n._convertPositionTo("relative", {
                        top: c - n.helperProportions.height,
                        left: 0,
                      }).top),
                    o &&
                      (i.position.top = n._convertPositionTo("relative", {
                        top: u,
                        left: 0,
                      }).top),
                    r &&
                      (i.position.left = n._convertPositionTo("relative", {
                        top: 0,
                        left: l - n.helperProportions.width,
                      }).left),
                    a &&
                      (i.position.left = n._convertPositionTo("relative", {
                        top: 0,
                        left: h,
                      }).left)),
                  (p = s || o || r || a),
                  "outer" !== f.snapMode &&
                    ((s = g >= Math.abs(c - _)),
                    (o = g >= Math.abs(u - y)),
                    (r = g >= Math.abs(l - m)),
                    (a = g >= Math.abs(h - v)),
                    s &&
                      (i.position.top = n._convertPositionTo("relative", {
                        top: c,
                        left: 0,
                      }).top),
                    o &&
                      (i.position.top = n._convertPositionTo("relative", {
                        top: u - n.helperProportions.height,
                        left: 0,
                      }).top),
                    r &&
                      (i.position.left = n._convertPositionTo("relative", {
                        top: 0,
                        left: l,
                      }).left),
                    a &&
                      (i.position.left = n._convertPositionTo("relative", {
                        top: 0,
                        left: h - n.helperProportions.width,
                      }).left)),
                  !n.snapElements[d].snapping &&
                    (s || o || r || a || p) &&
                    n.options.snap.snap &&
                    n.options.snap.snap.call(
                      n.element,
                      e,
                      t.extend(n._uiHash(), {
                        snapItem: n.snapElements[d].item,
                      })
                    ),
                  (n.snapElements[d].snapping = s || o || r || a || p));
        },
      }),
      t.ui.plugin.add("draggable", "stack", {
        start: function (e, i, n) {
          var s,
            o = n.options,
            r = t.makeArray(t(o.stack)).sort(function (e, i) {
              return (
                (parseInt(t(e).css("zIndex"), 10) || 0) -
                (parseInt(t(i).css("zIndex"), 10) || 0)
              );
            });
          r.length &&
            ((s = parseInt(t(r[0]).css("zIndex"), 10) || 0),
            t(r).each(function (e) {
              t(this).css("zIndex", s + e);
            }),
            this.css("zIndex", s + r.length));
        },
      }),
      t.ui.plugin.add("draggable", "zIndex", {
        start: function (e, i, n) {
          var s = t(i.helper),
            o = n.options;
          s.css("zIndex") && (o._zIndex = s.css("zIndex")),
            s.css("zIndex", o.zIndex);
        },
        stop: function (e, i, n) {
          var s = n.options;
          s._zIndex && t(i.helper).css("zIndex", s._zIndex);
        },
      }),
      t.ui.draggable,
      t.widget("ui.droppable", {
        version: "1.12.1",
        widgetEventPrefix: "drop",
        options: {
          accept: "*",
          addClasses: !0,
          greedy: !1,
          scope: "default",
          tolerance: "intersect",
          activate: null,
          deactivate: null,
          drop: null,
          out: null,
          over: null,
        },
        _create: function () {
          var e,
            i = this.options,
            n = i.accept;
          (this.isover = !1),
            (this.isout = !0),
            (this.accept = t.isFunction(n)
              ? n
              : function (t) {
                  return t.is(n);
                }),
            (this.proportions = function () {
              return arguments.length
                ? void (e = arguments[0])
                : e ||
                    (e = {
                      width: this.element[0].offsetWidth,
                      height: this.element[0].offsetHeight,
                    });
            }),
            this._addToManager(i.scope),
            i.addClasses && this._addClass("ui-droppable");
        },
        _addToManager: function (e) {
          (t.ui.ddmanager.droppables[e] = t.ui.ddmanager.droppables[e] || []),
            t.ui.ddmanager.droppables[e].push(this);
        },
        _splice: function (t) {
          for (var e = 0; t.length > e; e++) t[e] === this && t.splice(e, 1);
        },
        _destroy: function () {
          var e = t.ui.ddmanager.droppables[this.options.scope];
          this._splice(e);
        },
        _setOption: function (e, i) {
          if ("accept" === e)
            this.accept = t.isFunction(i)
              ? i
              : function (t) {
                  return t.is(i);
                };
          else if ("scope" === e) {
            var n = t.ui.ddmanager.droppables[this.options.scope];
            this._splice(n), this._addToManager(i);
          }
          this._super(e, i);
        },
        _activate: function (e) {
          var i = t.ui.ddmanager.current;
          this._addActiveClass(), i && this._trigger("activate", e, this.ui(i));
        },
        _deactivate: function (e) {
          var i = t.ui.ddmanager.current;
          this._removeActiveClass(),
            i && this._trigger("deactivate", e, this.ui(i));
        },
        _over: function (e) {
          var i = t.ui.ddmanager.current;
          i &&
            (i.currentItem || i.element)[0] !== this.element[0] &&
            this.accept.call(this.element[0], i.currentItem || i.element) &&
            (this._addHoverClass(), this._trigger("over", e, this.ui(i)));
        },
        _out: function (e) {
          var i = t.ui.ddmanager.current;
          i &&
            (i.currentItem || i.element)[0] !== this.element[0] &&
            this.accept.call(this.element[0], i.currentItem || i.element) &&
            (this._removeHoverClass(), this._trigger("out", e, this.ui(i)));
        },
        _drop: function (e, i) {
          var n = i || t.ui.ddmanager.current,
            s = !1;
          return (
            !(!n || (n.currentItem || n.element)[0] === this.element[0]) &&
            (this.element
              .find(":data(ui-droppable)")
              .not(".ui-draggable-dragging")
              .each(function () {
                var i = t(this).droppable("instance");
                return i.options.greedy &&
                  !i.options.disabled &&
                  i.options.scope === n.options.scope &&
                  i.accept.call(i.element[0], n.currentItem || n.element) &&
                  h(
                    n,
                    t.extend(i, { offset: i.element.offset() }),
                    i.options.tolerance,
                    e
                  )
                  ? ((s = !0), !1)
                  : void 0;
              }),
            !s &&
              !!this.accept.call(this.element[0], n.currentItem || n.element) &&
              (this._removeActiveClass(),
              this._removeHoverClass(),
              this._trigger("drop", e, this.ui(n)),
              this.element))
          );
        },
        ui: function (t) {
          return {
            draggable: t.currentItem || t.element,
            helper: t.helper,
            position: t.position,
            offset: t.positionAbs,
          };
        },
        _addHoverClass: function () {
          this._addClass("ui-droppable-hover");
        },
        _removeHoverClass: function () {
          this._removeClass("ui-droppable-hover");
        },
        _addActiveClass: function () {
          this._addClass("ui-droppable-active");
        },
        _removeActiveClass: function () {
          this._removeClass("ui-droppable-active");
        },
      });
    var h = (t.ui.intersect = (function () {
      function t(t, e, i) {
        return t >= e && e + i > t;
      }
      return function (e, i, n, s) {
        if (!i.offset) return !1;
        var o = (e.positionAbs || e.position.absolute).left + e.margins.left,
          r = (e.positionAbs || e.position.absolute).top + e.margins.top,
          a = o + e.helperProportions.width,
          l = r + e.helperProportions.height,
          h = i.offset.left,
          c = i.offset.top,
          u = h + i.proportions().width,
          d = c + i.proportions().height;
        switch (n) {
          case "fit":
            return o >= h && u >= a && r >= c && d >= l;
          case "intersect":
            return (
              o + e.helperProportions.width / 2 > h &&
              u > a - e.helperProportions.width / 2 &&
              r + e.helperProportions.height / 2 > c &&
              d > l - e.helperProportions.height / 2
            );
          case "pointer":
            return (
              t(s.pageY, c, i.proportions().height) &&
              t(s.pageX, h, i.proportions().width)
            );
          case "touch":
            return (
              ((r >= c && d >= r) || (l >= c && d >= l) || (c > r && l > d)) &&
              ((o >= h && u >= o) || (a >= h && u >= a) || (h > o && a > u))
            );
          default:
            return !1;
        }
      };
    })());
    (t.ui.ddmanager = {
      current: null,
      droppables: { default: [] },
      prepareOffsets: function (e, i) {
        var n,
          s,
          o = t.ui.ddmanager.droppables[e.options.scope] || [],
          r = i ? i.type : null,
          a = (e.currentItem || e.element)
            .find(":data(ui-droppable)")
            .addBack();
        t: for (n = 0; o.length > n; n++)
          if (
            !(
              o[n].options.disabled ||
              (e &&
                !o[n].accept.call(o[n].element[0], e.currentItem || e.element))
            )
          ) {
            for (s = 0; a.length > s; s++)
              if (a[s] === o[n].element[0]) {
                o[n].proportions().height = 0;
                continue t;
              }
            (o[n].visible = "none" !== o[n].element.css("display")),
              o[n].visible &&
                ("mousedown" === r && o[n]._activate.call(o[n], i),
                (o[n].offset = o[n].element.offset()),
                o[n].proportions({
                  width: o[n].element[0].offsetWidth,
                  height: o[n].element[0].offsetHeight,
                }));
          }
      },
      drop: function (e, i) {
        var n = !1;
        return (
          t.each(
            (t.ui.ddmanager.droppables[e.options.scope] || []).slice(),
            function () {
              this.options &&
                (!this.options.disabled &&
                  this.visible &&
                  h(e, this, this.options.tolerance, i) &&
                  (n = this._drop.call(this, i) || n),
                !this.options.disabled &&
                  this.visible &&
                  this.accept.call(
                    this.element[0],
                    e.currentItem || e.element
                  ) &&
                  ((this.isout = !0),
                  (this.isover = !1),
                  this._deactivate.call(this, i)));
            }
          ),
          n
        );
      },
      dragStart: function (e, i) {
        e.element.parentsUntil("body").on("scroll.droppable", function () {
          e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i);
        });
      },
      drag: function (e, i) {
        e.options.refreshPositions && t.ui.ddmanager.prepareOffsets(e, i),
          t.each(t.ui.ddmanager.droppables[e.options.scope] || [], function () {
            if (!this.options.disabled && !this.greedyChild && this.visible) {
              var n,
                s,
                o,
                r = h(e, this, this.options.tolerance, i),
                a =
                  !r && this.isover
                    ? "isout"
                    : r && !this.isover
                    ? "isover"
                    : null;
              a &&
                (this.options.greedy &&
                  ((s = this.options.scope),
                  (o = this.element
                    .parents(":data(ui-droppable)")
                    .filter(function () {
                      return t(this).droppable("instance").options.scope === s;
                    })).length &&
                    ((n = t(o[0]).droppable("instance")).greedyChild =
                      "isover" === a)),
                n &&
                  "isover" === a &&
                  ((n.isover = !1), (n.isout = !0), n._out.call(n, i)),
                (this[a] = !0),
                (this["isout" === a ? "isover" : "isout"] = !1),
                this["isover" === a ? "_over" : "_out"].call(this, i),
                n &&
                  "isout" === a &&
                  ((n.isout = !1), (n.isover = !0), n._over.call(n, i)));
            }
          });
      },
      dragStop: function (e, i) {
        e.element.parentsUntil("body").off("scroll.droppable"),
          e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i);
      },
    }),
      !1 !== t.uiBackCompat &&
        t.widget("ui.droppable", t.ui.droppable, {
          options: { hoverClass: !1, activeClass: !1 },
          _addActiveClass: function () {
            this._super(),
              this.options.activeClass &&
                this.element.addClass(this.options.activeClass);
          },
          _removeActiveClass: function () {
            this._super(),
              this.options.activeClass &&
                this.element.removeClass(this.options.activeClass);
          },
          _addHoverClass: function () {
            this._super(),
              this.options.hoverClass &&
                this.element.addClass(this.options.hoverClass);
          },
          _removeHoverClass: function () {
            this._super(),
              this.options.hoverClass &&
                this.element.removeClass(this.options.hoverClass);
          },
        }),
      t.ui.droppable,
      t.widget("ui.resizable", t.ui.mouse, {
        version: "1.12.1",
        widgetEventPrefix: "resize",
        options: {
          alsoResize: !1,
          animate: !1,
          animateDuration: "slow",
          animateEasing: "swing",
          aspectRatio: !1,
          autoHide: !1,
          classes: {
            "ui-resizable-se": "ui-icon ui-icon-gripsmall-diagonal-se",
          },
          containment: !1,
          ghost: !1,
          grid: !1,
          handles: "e,s,se",
          helper: !1,
          maxHeight: null,
          maxWidth: null,
          minHeight: 10,
          minWidth: 10,
          zIndex: 90,
          resize: null,
          start: null,
          stop: null,
        },
        _num: function (t) {
          return parseFloat(t) || 0;
        },
        _isNumber: function (t) {
          return !isNaN(parseFloat(t));
        },
        _hasScroll: function (e, i) {
          if ("hidden" === t(e).css("overflow")) return !1;
          var n = i && "left" === i ? "scrollLeft" : "scrollTop",
            s = !1;
          return e[n] > 0 || ((e[n] = 1), (s = e[n] > 0), (e[n] = 0), s);
        },
        _create: function () {
          var e,
            i = this.options,
            n = this;
          this._addClass("ui-resizable"),
            t.extend(this, {
              _aspectRatio: !!i.aspectRatio,
              aspectRatio: i.aspectRatio,
              originalElement: this.element,
              _proportionallyResizeElements: [],
              _helper:
                i.helper || i.ghost || i.animate
                  ? i.helper || "ui-resizable-helper"
                  : null,
            }),
            this.element[0].nodeName.match(
              /^(canvas|textarea|input|select|button|img)$/i
            ) &&
              (this.element.wrap(
                t(
                  "<div class='ui-wrapper' style='overflow: hidden;'></div>"
                ).css({
                  position: this.element.css("position"),
                  width: this.element.outerWidth(),
                  height: this.element.outerHeight(),
                  top: this.element.css("top"),
                  left: this.element.css("left"),
                })
              ),
              (this.element = this.element
                .parent()
                .data("ui-resizable", this.element.resizable("instance"))),
              (this.elementIsWrapper = !0),
              (e = {
                marginTop: this.originalElement.css("marginTop"),
                marginRight: this.originalElement.css("marginRight"),
                marginBottom: this.originalElement.css("marginBottom"),
                marginLeft: this.originalElement.css("marginLeft"),
              }),
              this.element.css(e),
              this.originalElement.css("margin", 0),
              (this.originalResizeStyle = this.originalElement.css("resize")),
              this.originalElement.css("resize", "none"),
              this._proportionallyResizeElements.push(
                this.originalElement.css({
                  position: "static",
                  zoom: 1,
                  display: "block",
                })
              ),
              this.originalElement.css(e),
              this._proportionallyResize()),
            this._setupHandles(),
            i.autoHide &&
              t(this.element)
                .on("mouseenter", function () {
                  i.disabled ||
                    (n._removeClass("ui-resizable-autohide"),
                    n._handles.show());
                })
                .on("mouseleave", function () {
                  i.disabled ||
                    n.resizing ||
                    (n._addClass("ui-resizable-autohide"), n._handles.hide());
                }),
            this._mouseInit();
        },
        _destroy: function () {
          this._mouseDestroy();
          var e,
            i = function (e) {
              t(e)
                .removeData("resizable")
                .removeData("ui-resizable")
                .off(".resizable")
                .find(".ui-resizable-handle")
                .remove();
            };
          return (
            this.elementIsWrapper &&
              (i(this.element),
              (e = this.element),
              this.originalElement
                .css({
                  position: e.css("position"),
                  width: e.outerWidth(),
                  height: e.outerHeight(),
                  top: e.css("top"),
                  left: e.css("left"),
                })
                .insertAfter(e),
              e.remove()),
            this.originalElement.css("resize", this.originalResizeStyle),
            i(this.originalElement),
            this
          );
        },
        _setOption: function (t, e) {
          switch ((this._super(t, e), t)) {
            case "handles":
              this._removeHandles(), this._setupHandles();
          }
        },
        _setupHandles: function () {
          var e,
            i,
            n,
            s,
            o,
            r = this.options,
            a = this;
          if (
            ((this.handles =
              r.handles ||
              (t(".ui-resizable-handle", this.element).length
                ? {
                    n: ".ui-resizable-n",
                    e: ".ui-resizable-e",
                    s: ".ui-resizable-s",
                    w: ".ui-resizable-w",
                    se: ".ui-resizable-se",
                    sw: ".ui-resizable-sw",
                    ne: ".ui-resizable-ne",
                    nw: ".ui-resizable-nw",
                  }
                : "e,s,se")),
            (this._handles = t()),
            this.handles.constructor === String)
          )
            for (
              "all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"),
                n = this.handles.split(","),
                this.handles = {},
                i = 0;
              n.length > i;
              i++
            )
              (s = "ui-resizable-" + (e = t.trim(n[i]))),
                (o = t("<div>")),
                this._addClass(o, "ui-resizable-handle " + s),
                o.css({ zIndex: r.zIndex }),
                (this.handles[e] = ".ui-resizable-" + e),
                this.element.append(o);
          (this._renderAxis = function (e) {
            var i, n, s, o;
            for (i in ((e = e || this.element), this.handles))
              this.handles[i].constructor === String
                ? (this.handles[i] = this.element
                    .children(this.handles[i])
                    .first()
                    .show())
                : (this.handles[i].jquery || this.handles[i].nodeType) &&
                  ((this.handles[i] = t(this.handles[i])),
                  this._on(this.handles[i], { mousedown: a._mouseDown })),
                this.elementIsWrapper &&
                  this.originalElement[0].nodeName.match(
                    /^(textarea|input|select|button)$/i
                  ) &&
                  ((n = t(this.handles[i], this.element)),
                  (o = /sw|ne|nw|se|n|s/.test(i)
                    ? n.outerHeight()
                    : n.outerWidth()),
                  (s = [
                    "padding",
                    /ne|nw|n/.test(i)
                      ? "Top"
                      : /se|sw|s/.test(i)
                      ? "Bottom"
                      : /^e$/.test(i)
                      ? "Right"
                      : "Left",
                  ].join("")),
                  e.css(s, o),
                  this._proportionallyResize()),
                (this._handles = this._handles.add(this.handles[i]));
          }),
            this._renderAxis(this.element),
            (this._handles = this._handles.add(
              this.element.find(".ui-resizable-handle")
            )),
            this._handles.disableSelection(),
            this._handles.on("mouseover", function () {
              a.resizing ||
                (this.className &&
                  (o = this.className.match(
                    /ui-resizable-(se|sw|ne|nw|n|e|s|w)/i
                  )),
                (a.axis = o && o[1] ? o[1] : "se"));
            }),
            r.autoHide &&
              (this._handles.hide(), this._addClass("ui-resizable-autohide"));
        },
        _removeHandles: function () {
          this._handles.remove();
        },
        _mouseCapture: function (e) {
          var i,
            n,
            s = !1;
          for (i in this.handles)
            ((n = t(this.handles[i])[0]) === e.target ||
              t.contains(n, e.target)) &&
              (s = !0);
          return !this.options.disabled && s;
        },
        _mouseStart: function (e) {
          var i,
            n,
            s,
            o = this.options,
            r = this.element;
          return (
            (this.resizing = !0),
            this._renderProxy(),
            (i = this._num(this.helper.css("left"))),
            (n = this._num(this.helper.css("top"))),
            o.containment &&
              ((i += t(o.containment).scrollLeft() || 0),
              (n += t(o.containment).scrollTop() || 0)),
            (this.offset = this.helper.offset()),
            (this.position = { left: i, top: n }),
            (this.size = this._helper
              ? { width: this.helper.width(), height: this.helper.height() }
              : { width: r.width(), height: r.height() }),
            (this.originalSize = this._helper
              ? { width: r.outerWidth(), height: r.outerHeight() }
              : { width: r.width(), height: r.height() }),
            (this.sizeDiff = {
              width: r.outerWidth() - r.width(),
              height: r.outerHeight() - r.height(),
            }),
            (this.originalPosition = { left: i, top: n }),
            (this.originalMousePosition = { left: e.pageX, top: e.pageY }),
            (this.aspectRatio =
              "number" == typeof o.aspectRatio
                ? o.aspectRatio
                : this.originalSize.width / this.originalSize.height || 1),
            (s = t(".ui-resizable-" + this.axis).css("cursor")),
            t("body").css("cursor", "auto" === s ? this.axis + "-resize" : s),
            this._addClass("ui-resizable-resizing"),
            this._propagate("start", e),
            !0
          );
        },
        _mouseDrag: function (e) {
          var i,
            n,
            s = this.originalMousePosition,
            o = this.axis,
            r = e.pageX - s.left || 0,
            a = e.pageY - s.top || 0,
            l = this._change[o];
          return (
            this._updatePrevProperties(),
            !!l &&
              ((i = l.apply(this, [e, r, a])),
              this._updateVirtualBoundaries(e.shiftKey),
              (this._aspectRatio || e.shiftKey) &&
                (i = this._updateRatio(i, e)),
              (i = this._respectSize(i, e)),
              this._updateCache(i),
              this._propagate("resize", e),
              (n = this._applyChanges()),
              !this._helper &&
                this._proportionallyResizeElements.length &&
                this._proportionallyResize(),
              t.isEmptyObject(n) ||
                (this._updatePrevProperties(),
                this._trigger("resize", e, this.ui()),
                this._applyChanges()),
              !1)
          );
        },
        _mouseStop: function (e) {
          this.resizing = !1;
          var i,
            n,
            s,
            o,
            r,
            a,
            l,
            h = this.options,
            c = this;
          return (
            this._helper &&
              ((s =
                (n =
                  (i = this._proportionallyResizeElements).length &&
                  /textarea/i.test(i[0].nodeName)) &&
                this._hasScroll(i[0], "left")
                  ? 0
                  : c.sizeDiff.height),
              (o = n ? 0 : c.sizeDiff.width),
              (r = {
                width: c.helper.width() - o,
                height: c.helper.height() - s,
              }),
              (a =
                parseFloat(c.element.css("left")) +
                  (c.position.left - c.originalPosition.left) || null),
              (l =
                parseFloat(c.element.css("top")) +
                  (c.position.top - c.originalPosition.top) || null),
              h.animate || this.element.css(t.extend(r, { top: l, left: a })),
              c.helper.height(c.size.height),
              c.helper.width(c.size.width),
              this._helper && !h.animate && this._proportionallyResize()),
            t("body").css("cursor", "auto"),
            this._removeClass("ui-resizable-resizing"),
            this._propagate("stop", e),
            this._helper && this.helper.remove(),
            !1
          );
        },
        _updatePrevProperties: function () {
          (this.prevPosition = {
            top: this.position.top,
            left: this.position.left,
          }),
            (this.prevSize = {
              width: this.size.width,
              height: this.size.height,
            });
        },
        _applyChanges: function () {
          var t = {};
          return (
            this.position.top !== this.prevPosition.top &&
              (t.top = this.position.top + "px"),
            this.position.left !== this.prevPosition.left &&
              (t.left = this.position.left + "px"),
            this.size.width !== this.prevSize.width &&
              (t.width = this.size.width + "px"),
            this.size.height !== this.prevSize.height &&
              (t.height = this.size.height + "px"),
            this.helper.css(t),
            t
          );
        },
        _updateVirtualBoundaries: function (t) {
          var e,
            i,
            n,
            s,
            o,
            r = this.options;
          (o = {
            minWidth: this._isNumber(r.minWidth) ? r.minWidth : 0,
            maxWidth: this._isNumber(r.maxWidth) ? r.maxWidth : 1 / 0,
            minHeight: this._isNumber(r.minHeight) ? r.minHeight : 0,
            maxHeight: this._isNumber(r.maxHeight) ? r.maxHeight : 1 / 0,
          }),
            (this._aspectRatio || t) &&
              ((e = o.minHeight * this.aspectRatio),
              (n = o.minWidth / this.aspectRatio),
              (i = o.maxHeight * this.aspectRatio),
              (s = o.maxWidth / this.aspectRatio),
              e > o.minWidth && (o.minWidth = e),
              n > o.minHeight && (o.minHeight = n),
              o.maxWidth > i && (o.maxWidth = i),
              o.maxHeight > s && (o.maxHeight = s)),
            (this._vBoundaries = o);
        },
        _updateCache: function (t) {
          (this.offset = this.helper.offset()),
            this._isNumber(t.left) && (this.position.left = t.left),
            this._isNumber(t.top) && (this.position.top = t.top),
            this._isNumber(t.height) && (this.size.height = t.height),
            this._isNumber(t.width) && (this.size.width = t.width);
        },
        _updateRatio: function (t) {
          var e = this.position,
            i = this.size,
            n = this.axis;
          return (
            this._isNumber(t.height)
              ? (t.width = t.height * this.aspectRatio)
              : this._isNumber(t.width) &&
                (t.height = t.width / this.aspectRatio),
            "sw" === n &&
              ((t.left = e.left + (i.width - t.width)), (t.top = null)),
            "nw" === n &&
              ((t.top = e.top + (i.height - t.height)),
              (t.left = e.left + (i.width - t.width))),
            t
          );
        },
        _respectSize: function (t) {
          var e = this._vBoundaries,
            i = this.axis,
            n = this._isNumber(t.width) && e.maxWidth && e.maxWidth < t.width,
            s =
              this._isNumber(t.height) && e.maxHeight && e.maxHeight < t.height,
            o = this._isNumber(t.width) && e.minWidth && e.minWidth > t.width,
            r =
              this._isNumber(t.height) && e.minHeight && e.minHeight > t.height,
            a = this.originalPosition.left + this.originalSize.width,
            l = this.originalPosition.top + this.originalSize.height,
            h = /sw|nw|w/.test(i),
            c = /nw|ne|n/.test(i);
          return (
            o && (t.width = e.minWidth),
            r && (t.height = e.minHeight),
            n && (t.width = e.maxWidth),
            s && (t.height = e.maxHeight),
            o && h && (t.left = a - e.minWidth),
            n && h && (t.left = a - e.maxWidth),
            r && c && (t.top = l - e.minHeight),
            s && c && (t.top = l - e.maxHeight),
            t.width || t.height || t.left || !t.top
              ? t.width || t.height || t.top || !t.left || (t.left = null)
              : (t.top = null),
            t
          );
        },
        _getPaddingPlusBorderDimensions: function (t) {
          for (
            var e = 0,
              i = [],
              n = [
                t.css("borderTopWidth"),
                t.css("borderRightWidth"),
                t.css("borderBottomWidth"),
                t.css("borderLeftWidth"),
              ],
              s = [
                t.css("paddingTop"),
                t.css("paddingRight"),
                t.css("paddingBottom"),
                t.css("paddingLeft"),
              ];
            4 > e;
            e++
          )
            (i[e] = parseFloat(n[e]) || 0), (i[e] += parseFloat(s[e]) || 0);
          return { height: i[0] + i[2], width: i[1] + i[3] };
        },
        _proportionallyResize: function () {
          if (this._proportionallyResizeElements.length)
            for (
              var t, e = 0, i = this.helper || this.element;
              this._proportionallyResizeElements.length > e;
              e++
            )
              (t = this._proportionallyResizeElements[e]),
                this.outerDimensions ||
                  (this.outerDimensions =
                    this._getPaddingPlusBorderDimensions(t)),
                t.css({
                  height: i.height() - this.outerDimensions.height || 0,
                  width: i.width() - this.outerDimensions.width || 0,
                });
        },
        _renderProxy: function () {
          var e = this.element,
            i = this.options;
          (this.elementOffset = e.offset()),
            this._helper
              ? ((this.helper =
                  this.helper || t("<div style='overflow:hidden;'></div>")),
                this._addClass(this.helper, this._helper),
                this.helper.css({
                  width: this.element.outerWidth(),
                  height: this.element.outerHeight(),
                  position: "absolute",
                  left: this.elementOffset.left + "px",
                  top: this.elementOffset.top + "px",
                  zIndex: ++i.zIndex,
                }),
                this.helper.appendTo("body").disableSelection())
              : (this.helper = this.element);
        },
        _change: {
          e: function (t, e) {
            return { width: this.originalSize.width + e };
          },
          w: function (t, e) {
            var i = this.originalSize;
            return { left: this.originalPosition.left + e, width: i.width - e };
          },
          n: function (t, e, i) {
            var n = this.originalSize;
            return { top: this.originalPosition.top + i, height: n.height - i };
          },
          s: function (t, e, i) {
            return { height: this.originalSize.height + i };
          },
          se: function (e, i, n) {
            return t.extend(
              this._change.s.apply(this, arguments),
              this._change.e.apply(this, [e, i, n])
            );
          },
          sw: function (e, i, n) {
            return t.extend(
              this._change.s.apply(this, arguments),
              this._change.w.apply(this, [e, i, n])
            );
          },
          ne: function (e, i, n) {
            return t.extend(
              this._change.n.apply(this, arguments),
              this._change.e.apply(this, [e, i, n])
            );
          },
          nw: function (e, i, n) {
            return t.extend(
              this._change.n.apply(this, arguments),
              this._change.w.apply(this, [e, i, n])
            );
          },
        },
        _propagate: function (e, i) {
          t.ui.plugin.call(this, e, [i, this.ui()]),
            "resize" !== e && this._trigger(e, i, this.ui());
        },
        plugins: {},
        ui: function () {
          return {
            originalElement: this.originalElement,
            element: this.element,
            helper: this.helper,
            position: this.position,
            size: this.size,
            originalSize: this.originalSize,
            originalPosition: this.originalPosition,
          };
        },
      }),
      t.ui.plugin.add("resizable", "animate", {
        stop: function (e) {
          var i = t(this).resizable("instance"),
            n = i.options,
            s = i._proportionallyResizeElements,
            o = s.length && /textarea/i.test(s[0].nodeName),
            r = o && i._hasScroll(s[0], "left") ? 0 : i.sizeDiff.height,
            a = o ? 0 : i.sizeDiff.width,
            l = { width: i.size.width - a, height: i.size.height - r },
            h =
              parseFloat(i.element.css("left")) +
                (i.position.left - i.originalPosition.left) || null,
            c =
              parseFloat(i.element.css("top")) +
                (i.position.top - i.originalPosition.top) || null;
          i.element.animate(t.extend(l, c && h ? { top: c, left: h } : {}), {
            duration: n.animateDuration,
            easing: n.animateEasing,
            step: function () {
              var n = {
                width: parseFloat(i.element.css("width")),
                height: parseFloat(i.element.css("height")),
                top: parseFloat(i.element.css("top")),
                left: parseFloat(i.element.css("left")),
              };
              s &&
                s.length &&
                t(s[0]).css({ width: n.width, height: n.height }),
                i._updateCache(n),
                i._propagate("resize", e);
            },
          });
        },
      }),
      t.ui.plugin.add("resizable", "containment", {
        start: function () {
          var e,
            i,
            n,
            s,
            o,
            r,
            a,
            l = t(this).resizable("instance"),
            h = l.options,
            c = l.element,
            u = h.containment,
            d =
              u instanceof t
                ? u.get(0)
                : /parent/.test(u)
                ? c.parent().get(0)
                : u;
          d &&
            ((l.containerElement = t(d)),
            /document/.test(u) || u === document
              ? ((l.containerOffset = { left: 0, top: 0 }),
                (l.containerPosition = { left: 0, top: 0 }),
                (l.parentData = {
                  element: t(document),
                  left: 0,
                  top: 0,
                  width: t(document).width(),
                  height:
                    t(document).height() ||
                    document.body.parentNode.scrollHeight,
                }))
              : ((e = t(d)),
                (i = []),
                t(["Top", "Right", "Left", "Bottom"]).each(function (t, n) {
                  i[t] = l._num(e.css("padding" + n));
                }),
                (l.containerOffset = e.offset()),
                (l.containerPosition = e.position()),
                (l.containerSize = {
                  height: e.innerHeight() - i[3],
                  width: e.innerWidth() - i[1],
                }),
                (n = l.containerOffset),
                (s = l.containerSize.height),
                (o = l.containerSize.width),
                (r = l._hasScroll(d, "left") ? d.scrollWidth : o),
                (a = l._hasScroll(d) ? d.scrollHeight : s),
                (l.parentData = {
                  element: d,
                  left: n.left,
                  top: n.top,
                  width: r,
                  height: a,
                })));
        },
        resize: function (e) {
          var i,
            n,
            s,
            o,
            r = t(this).resizable("instance"),
            a = r.options,
            l = r.containerOffset,
            h = r.position,
            c = r._aspectRatio || e.shiftKey,
            u = { top: 0, left: 0 },
            d = r.containerElement,
            p = !0;
          d[0] !== document && /static/.test(d.css("position")) && (u = l),
            h.left < (r._helper ? l.left : 0) &&
              ((r.size.width =
                r.size.width +
                (r._helper
                  ? r.position.left - l.left
                  : r.position.left - u.left)),
              c && ((r.size.height = r.size.width / r.aspectRatio), (p = !1)),
              (r.position.left = a.helper ? l.left : 0)),
            h.top < (r._helper ? l.top : 0) &&
              ((r.size.height =
                r.size.height +
                (r._helper ? r.position.top - l.top : r.position.top)),
              c && ((r.size.width = r.size.height * r.aspectRatio), (p = !1)),
              (r.position.top = r._helper ? l.top : 0)),
            (s = r.containerElement.get(0) === r.element.parent().get(0)),
            (o = /relative|absolute/.test(r.containerElement.css("position"))),
            s && o
              ? ((r.offset.left = r.parentData.left + r.position.left),
                (r.offset.top = r.parentData.top + r.position.top))
              : ((r.offset.left = r.element.offset().left),
                (r.offset.top = r.element.offset().top)),
            (i = Math.abs(
              r.sizeDiff.width +
                (r._helper ? r.offset.left - u.left : r.offset.left - l.left)
            )),
            (n = Math.abs(
              r.sizeDiff.height +
                (r._helper ? r.offset.top - u.top : r.offset.top - l.top)
            )),
            i + r.size.width >= r.parentData.width &&
              ((r.size.width = r.parentData.width - i),
              c && ((r.size.height = r.size.width / r.aspectRatio), (p = !1))),
            n + r.size.height >= r.parentData.height &&
              ((r.size.height = r.parentData.height - n),
              c && ((r.size.width = r.size.height * r.aspectRatio), (p = !1))),
            p ||
              ((r.position.left = r.prevPosition.left),
              (r.position.top = r.prevPosition.top),
              (r.size.width = r.prevSize.width),
              (r.size.height = r.prevSize.height));
        },
        stop: function () {
          var e = t(this).resizable("instance"),
            i = e.options,
            n = e.containerOffset,
            s = e.containerPosition,
            o = e.containerElement,
            r = t(e.helper),
            a = r.offset(),
            l = r.outerWidth() - e.sizeDiff.width,
            h = r.outerHeight() - e.sizeDiff.height;
          e._helper &&
            !i.animate &&
            /relative/.test(o.css("position")) &&
            t(this).css({
              left: a.left - s.left - n.left,
              width: l,
              height: h,
            }),
            e._helper &&
              !i.animate &&
              /static/.test(o.css("position")) &&
              t(this).css({
                left: a.left - s.left - n.left,
                width: l,
                height: h,
              });
        },
      }),
      t.ui.plugin.add("resizable", "alsoResize", {
        start: function () {
          var e = t(this).resizable("instance").options;
          t(e.alsoResize).each(function () {
            var e = t(this);
            e.data("ui-resizable-alsoresize", {
              width: parseFloat(e.width()),
              height: parseFloat(e.height()),
              left: parseFloat(e.css("left")),
              top: parseFloat(e.css("top")),
            });
          });
        },
        resize: function (e, i) {
          var n = t(this).resizable("instance"),
            s = n.options,
            o = n.originalSize,
            r = n.originalPosition,
            a = {
              height: n.size.height - o.height || 0,
              width: n.size.width - o.width || 0,
              top: n.position.top - r.top || 0,
              left: n.position.left - r.left || 0,
            };
          t(s.alsoResize).each(function () {
            var e = t(this),
              n = t(this).data("ui-resizable-alsoresize"),
              s = {},
              o = e.parents(i.originalElement[0]).length
                ? ["width", "height"]
                : ["width", "height", "top", "left"];
            t.each(o, function (t, e) {
              var i = (n[e] || 0) + (a[e] || 0);
              i && i >= 0 && (s[e] = i || null);
            }),
              e.css(s);
          });
        },
        stop: function () {
          t(this).removeData("ui-resizable-alsoresize");
        },
      }),
      t.ui.plugin.add("resizable", "ghost", {
        start: function () {
          var e = t(this).resizable("instance"),
            i = e.size;
          (e.ghost = e.originalElement.clone()),
            e.ghost.css({
              opacity: 0.25,
              display: "block",
              position: "relative",
              height: i.height,
              width: i.width,
              margin: 0,
              left: 0,
              top: 0,
            }),
            e._addClass(e.ghost, "ui-resizable-ghost"),
            !1 !== t.uiBackCompat &&
              "string" == typeof e.options.ghost &&
              e.ghost.addClass(this.options.ghost),
            e.ghost.appendTo(e.helper);
        },
        resize: function () {
          var e = t(this).resizable("instance");
          e.ghost &&
            e.ghost.css({
              position: "relative",
              height: e.size.height,
              width: e.size.width,
            });
        },
        stop: function () {
          var e = t(this).resizable("instance");
          e.ghost && e.helper && e.helper.get(0).removeChild(e.ghost.get(0));
        },
      }),
      t.ui.plugin.add("resizable", "grid", {
        resize: function () {
          var e,
            i = t(this).resizable("instance"),
            n = i.options,
            s = i.size,
            o = i.originalSize,
            r = i.originalPosition,
            a = i.axis,
            l = "number" == typeof n.grid ? [n.grid, n.grid] : n.grid,
            h = l[0] || 1,
            c = l[1] || 1,
            u = Math.round((s.width - o.width) / h) * h,
            d = Math.round((s.height - o.height) / c) * c,
            p = o.width + u,
            f = o.height + d,
            g = n.maxWidth && p > n.maxWidth,
            m = n.maxHeight && f > n.maxHeight,
            v = n.minWidth && n.minWidth > p,
            _ = n.minHeight && n.minHeight > f;
          (n.grid = l),
            v && (p += h),
            _ && (f += c),
            g && (p -= h),
            m && (f -= c),
            /^(se|s|e)$/.test(a)
              ? ((i.size.width = p), (i.size.height = f))
              : /^(ne)$/.test(a)
              ? ((i.size.width = p),
                (i.size.height = f),
                (i.position.top = r.top - d))
              : /^(sw)$/.test(a)
              ? ((i.size.width = p),
                (i.size.height = f),
                (i.position.left = r.left - u))
              : ((0 >= f - c || 0 >= p - h) &&
                  (e = i._getPaddingPlusBorderDimensions(this)),
                f - c > 0
                  ? ((i.size.height = f), (i.position.top = r.top - d))
                  : ((f = c - e.height),
                    (i.size.height = f),
                    (i.position.top = r.top + o.height - f)),
                p - h > 0
                  ? ((i.size.width = p), (i.position.left = r.left - u))
                  : ((p = h - e.width),
                    (i.size.width = p),
                    (i.position.left = r.left + o.width - p)));
        },
      }),
      t.ui.resizable,
      t.widget("ui.selectable", t.ui.mouse, {
        version: "1.12.1",
        options: {
          appendTo: "body",
          autoRefresh: !0,
          distance: 0,
          filter: "*",
          tolerance: "touch",
          selected: null,
          selecting: null,
          start: null,
          stop: null,
          unselected: null,
          unselecting: null,
        },
        _create: function () {
          var e = this;
          this._addClass("ui-selectable"),
            (this.dragged = !1),
            (this.refresh = function () {
              (e.elementPos = t(e.element[0]).offset()),
                (e.selectees = t(e.options.filter, e.element[0])),
                e._addClass(e.selectees, "ui-selectee"),
                e.selectees.each(function () {
                  var i = t(this),
                    n = i.offset(),
                    s = {
                      left: n.left - e.elementPos.left,
                      top: n.top - e.elementPos.top,
                    };
                  t.data(this, "selectable-item", {
                    element: this,
                    $element: i,
                    left: s.left,
                    top: s.top,
                    right: s.left + i.outerWidth(),
                    bottom: s.top + i.outerHeight(),
                    startselected: !1,
                    selected: i.hasClass("ui-selected"),
                    selecting: i.hasClass("ui-selecting"),
                    unselecting: i.hasClass("ui-unselecting"),
                  });
                });
            }),
            this.refresh(),
            this._mouseInit(),
            (this.helper = t("<div>")),
            this._addClass(this.helper, "ui-selectable-helper");
        },
        _destroy: function () {
          this.selectees.removeData("selectable-item"), this._mouseDestroy();
        },
        _mouseStart: function (e) {
          var i = this,
            n = this.options;
          (this.opos = [e.pageX, e.pageY]),
            (this.elementPos = t(this.element[0]).offset()),
            this.options.disabled ||
              ((this.selectees = t(n.filter, this.element[0])),
              this._trigger("start", e),
              t(n.appendTo).append(this.helper),
              this.helper.css({
                left: e.pageX,
                top: e.pageY,
                width: 0,
                height: 0,
              }),
              n.autoRefresh && this.refresh(),
              this.selectees.filter(".ui-selected").each(function () {
                var n = t.data(this, "selectable-item");
                (n.startselected = !0),
                  e.metaKey ||
                    e.ctrlKey ||
                    (i._removeClass(n.$element, "ui-selected"),
                    (n.selected = !1),
                    i._addClass(n.$element, "ui-unselecting"),
                    (n.unselecting = !0),
                    i._trigger("unselecting", e, { unselecting: n.element }));
              }),
              t(e.target)
                .parents()
                .addBack()
                .each(function () {
                  var n,
                    s = t.data(this, "selectable-item");
                  return s
                    ? ((n =
                        (!e.metaKey && !e.ctrlKey) ||
                        !s.$element.hasClass("ui-selected")),
                      i
                        ._removeClass(
                          s.$element,
                          n ? "ui-unselecting" : "ui-selected"
                        )
                        ._addClass(
                          s.$element,
                          n ? "ui-selecting" : "ui-unselecting"
                        ),
                      (s.unselecting = !n),
                      (s.selecting = n),
                      (s.selected = n),
                      n
                        ? i._trigger("selecting", e, { selecting: s.element })
                        : i._trigger("unselecting", e, {
                            unselecting: s.element,
                          }),
                      !1)
                    : void 0;
                }));
        },
        _mouseDrag: function (e) {
          if (((this.dragged = !0), !this.options.disabled)) {
            var i,
              n = this,
              s = this.options,
              o = this.opos[0],
              r = this.opos[1],
              a = e.pageX,
              l = e.pageY;
            return (
              o > a && ((i = a), (a = o), (o = i)),
              r > l && ((i = l), (l = r), (r = i)),
              this.helper.css({ left: o, top: r, width: a - o, height: l - r }),
              this.selectees.each(function () {
                var i = t.data(this, "selectable-item"),
                  h = !1,
                  c = {};
                i &&
                  i.element !== n.element[0] &&
                  ((c.left = i.left + n.elementPos.left),
                  (c.right = i.right + n.elementPos.left),
                  (c.top = i.top + n.elementPos.top),
                  (c.bottom = i.bottom + n.elementPos.top),
                  "touch" === s.tolerance
                    ? (h = !(
                        c.left > a ||
                        o > c.right ||
                        c.top > l ||
                        r > c.bottom
                      ))
                    : "fit" === s.tolerance &&
                      (h =
                        c.left > o && a > c.right && c.top > r && l > c.bottom),
                  h
                    ? (i.selected &&
                        (n._removeClass(i.$element, "ui-selected"),
                        (i.selected = !1)),
                      i.unselecting &&
                        (n._removeClass(i.$element, "ui-unselecting"),
                        (i.unselecting = !1)),
                      i.selecting ||
                        (n._addClass(i.$element, "ui-selecting"),
                        (i.selecting = !0),
                        n._trigger("selecting", e, { selecting: i.element })))
                    : (i.selecting &&
                        ((e.metaKey || e.ctrlKey) && i.startselected
                          ? (n._removeClass(i.$element, "ui-selecting"),
                            (i.selecting = !1),
                            n._addClass(i.$element, "ui-selected"),
                            (i.selected = !0))
                          : (n._removeClass(i.$element, "ui-selecting"),
                            (i.selecting = !1),
                            i.startselected &&
                              (n._addClass(i.$element, "ui-unselecting"),
                              (i.unselecting = !0)),
                            n._trigger("unselecting", e, {
                              unselecting: i.element,
                            }))),
                      i.selected &&
                        (e.metaKey ||
                          e.ctrlKey ||
                          i.startselected ||
                          (n._removeClass(i.$element, "ui-selected"),
                          (i.selected = !1),
                          n._addClass(i.$element, "ui-unselecting"),
                          (i.unselecting = !0),
                          n._trigger("unselecting", e, {
                            unselecting: i.element,
                          })))));
              }),
              !1
            );
          }
        },
        _mouseStop: function (e) {
          var i = this;
          return (
            (this.dragged = !1),
            t(".ui-unselecting", this.element[0]).each(function () {
              var n = t.data(this, "selectable-item");
              i._removeClass(n.$element, "ui-unselecting"),
                (n.unselecting = !1),
                (n.startselected = !1),
                i._trigger("unselected", e, { unselected: n.element });
            }),
            t(".ui-selecting", this.element[0]).each(function () {
              var n = t.data(this, "selectable-item");
              i
                ._removeClass(n.$element, "ui-selecting")
                ._addClass(n.$element, "ui-selected"),
                (n.selecting = !1),
                (n.selected = !0),
                (n.startselected = !0),
                i._trigger("selected", e, { selected: n.element });
            }),
            this._trigger("stop", e),
            this.helper.remove(),
            !1
          );
        },
      }),
      t.widget("ui.sortable", t.ui.mouse, {
        version: "1.12.1",
        widgetEventPrefix: "sort",
        ready: !1,
        options: {
          appendTo: "parent",
          axis: !1,
          connectWith: !1,
          containment: !1,
          cursor: "auto",
          cursorAt: !1,
          dropOnEmpty: !0,
          forcePlaceholderSize: !1,
          forceHelperSize: !1,
          grid: !1,
          handle: !1,
          helper: "original",
          items: "> *",
          opacity: !1,
          placeholder: !1,
          revert: !1,
          scroll: !0,
          scrollSensitivity: 20,
          scrollSpeed: 20,
          scope: "default",
          tolerance: "intersect",
          zIndex: 1e3,
          activate: null,
          beforeStop: null,
          change: null,
          deactivate: null,
          out: null,
          over: null,
          receive: null,
          remove: null,
          sort: null,
          start: null,
          stop: null,
          update: null,
        },
        _isOverAxis: function (t, e, i) {
          return t >= e && e + i > t;
        },
        _isFloating: function (t) {
          return (
            /left|right/.test(t.css("float")) ||
            /inline|table-cell/.test(t.css("display"))
          );
        },
        _create: function () {
          (this.containerCache = {}),
            this._addClass("ui-sortable"),
            this.refresh(),
            (this.offset = this.element.offset()),
            this._mouseInit(),
            this._setHandleClassName(),
            (this.ready = !0);
        },
        _setOption: function (t, e) {
          this._super(t, e), "handle" === t && this._setHandleClassName();
        },
        _setHandleClassName: function () {
          var e = this;
          this._removeClass(
            this.element.find(".ui-sortable-handle"),
            "ui-sortable-handle"
          ),
            t.each(this.items, function () {
              e._addClass(
                this.instance.options.handle
                  ? this.item.find(this.instance.options.handle)
                  : this.item,
                "ui-sortable-handle"
              );
            });
        },
        _destroy: function () {
          this._mouseDestroy();
          for (var t = this.items.length - 1; t >= 0; t--)
            this.items[t].item.removeData(this.widgetName + "-item");
          return this;
        },
        _mouseCapture: function (e, i) {
          var n = null,
            s = !1,
            o = this;
          return (
            !this.reverting &&
            !this.options.disabled &&
            "static" !== this.options.type &&
            (this._refreshItems(e),
            t(e.target)
              .parents()
              .each(function () {
                return t.data(this, o.widgetName + "-item") === o
                  ? ((n = t(this)), !1)
                  : void 0;
              }),
            t.data(e.target, o.widgetName + "-item") === o && (n = t(e.target)),
            !!n &&
              !(
                this.options.handle &&
                !i &&
                (t(this.options.handle, n)
                  .find("*")
                  .addBack()
                  .each(function () {
                    this === e.target && (s = !0);
                  }),
                !s)
              ) &&
              ((this.currentItem = n), this._removeCurrentsFromItems(), !0))
          );
        },
        _mouseStart: function (e, i, n) {
          var s,
            o,
            r = this.options;
          if (
            ((this.currentContainer = this),
            this.refreshPositions(),
            (this.helper = this._createHelper(e)),
            this._cacheHelperProportions(),
            this._cacheMargins(),
            (this.scrollParent = this.helper.scrollParent()),
            (this.offset = this.currentItem.offset()),
            (this.offset = {
              top: this.offset.top - this.margins.top,
              left: this.offset.left - this.margins.left,
            }),
            t.extend(this.offset, {
              click: {
                left: e.pageX - this.offset.left,
                top: e.pageY - this.offset.top,
              },
              parent: this._getParentOffset(),
              relative: this._getRelativeOffset(),
            }),
            this.helper.css("position", "absolute"),
            (this.cssPosition = this.helper.css("position")),
            (this.originalPosition = this._generatePosition(e)),
            (this.originalPageX = e.pageX),
            (this.originalPageY = e.pageY),
            r.cursorAt && this._adjustOffsetFromHelper(r.cursorAt),
            (this.domPosition = {
              prev: this.currentItem.prev()[0],
              parent: this.currentItem.parent()[0],
            }),
            this.helper[0] !== this.currentItem[0] && this.currentItem.hide(),
            this._createPlaceholder(),
            r.containment && this._setContainment(),
            r.cursor &&
              "auto" !== r.cursor &&
              ((o = this.document.find("body")),
              (this.storedCursor = o.css("cursor")),
              o.css("cursor", r.cursor),
              (this.storedStylesheet = t(
                "<style>*{ cursor: " + r.cursor + " !important; }</style>"
              ).appendTo(o))),
            r.opacity &&
              (this.helper.css("opacity") &&
                (this._storedOpacity = this.helper.css("opacity")),
              this.helper.css("opacity", r.opacity)),
            r.zIndex &&
              (this.helper.css("zIndex") &&
                (this._storedZIndex = this.helper.css("zIndex")),
              this.helper.css("zIndex", r.zIndex)),
            this.scrollParent[0] !== this.document[0] &&
              "HTML" !== this.scrollParent[0].tagName &&
              (this.overflowOffset = this.scrollParent.offset()),
            this._trigger("start", e, this._uiHash()),
            this._preserveHelperProportions || this._cacheHelperProportions(),
            !n)
          )
            for (s = this.containers.length - 1; s >= 0; s--)
              this.containers[s]._trigger("activate", e, this._uiHash(this));
          return (
            t.ui.ddmanager && (t.ui.ddmanager.current = this),
            t.ui.ddmanager &&
              !r.dropBehaviour &&
              t.ui.ddmanager.prepareOffsets(this, e),
            (this.dragging = !0),
            this._addClass(this.helper, "ui-sortable-helper"),
            this._mouseDrag(e),
            !0
          );
        },
        _mouseDrag: function (e) {
          var i,
            n,
            s,
            o,
            r = this.options,
            a = !1;
          for (
            this.position = this._generatePosition(e),
              this.positionAbs = this._convertPositionTo("absolute"),
              this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs),
              this.options.scroll &&
                (this.scrollParent[0] !== this.document[0] &&
                "HTML" !== this.scrollParent[0].tagName
                  ? (this.overflowOffset.top +
                      this.scrollParent[0].offsetHeight -
                      e.pageY <
                    r.scrollSensitivity
                      ? (this.scrollParent[0].scrollTop = a =
                          this.scrollParent[0].scrollTop + r.scrollSpeed)
                      : e.pageY - this.overflowOffset.top <
                          r.scrollSensitivity &&
                        (this.scrollParent[0].scrollTop = a =
                          this.scrollParent[0].scrollTop - r.scrollSpeed),
                    this.overflowOffset.left +
                      this.scrollParent[0].offsetWidth -
                      e.pageX <
                    r.scrollSensitivity
                      ? (this.scrollParent[0].scrollLeft = a =
                          this.scrollParent[0].scrollLeft + r.scrollSpeed)
                      : e.pageX - this.overflowOffset.left <
                          r.scrollSensitivity &&
                        (this.scrollParent[0].scrollLeft = a =
                          this.scrollParent[0].scrollLeft - r.scrollSpeed))
                  : (e.pageY - this.document.scrollTop() < r.scrollSensitivity
                      ? (a = this.document.scrollTop(
                          this.document.scrollTop() - r.scrollSpeed
                        ))
                      : this.window.height() -
                          (e.pageY - this.document.scrollTop()) <
                          r.scrollSensitivity &&
                        (a = this.document.scrollTop(
                          this.document.scrollTop() + r.scrollSpeed
                        )),
                    e.pageX - this.document.scrollLeft() < r.scrollSensitivity
                      ? (a = this.document.scrollLeft(
                          this.document.scrollLeft() - r.scrollSpeed
                        ))
                      : this.window.width() -
                          (e.pageX - this.document.scrollLeft()) <
                          r.scrollSensitivity &&
                        (a = this.document.scrollLeft(
                          this.document.scrollLeft() + r.scrollSpeed
                        ))),
                !1 !== a &&
                  t.ui.ddmanager &&
                  !r.dropBehaviour &&
                  t.ui.ddmanager.prepareOffsets(this, e)),
              this.positionAbs = this._convertPositionTo("absolute"),
              (this.options.axis && "y" === this.options.axis) ||
                (this.helper[0].style.left = this.position.left + "px"),
              (this.options.axis && "x" === this.options.axis) ||
                (this.helper[0].style.top = this.position.top + "px"),
              i = this.items.length - 1;
            i >= 0;
            i--
          )
            if (
              ((s = (n = this.items[i]).item[0]),
              (o = this._intersectsWithPointer(n)) &&
                n.instance === this.currentContainer &&
                s !== this.currentItem[0] &&
                this.placeholder[1 === o ? "next" : "prev"]()[0] !== s &&
                !t.contains(this.placeholder[0], s) &&
                ("semi-dynamic" !== this.options.type ||
                  !t.contains(this.element[0], s)))
            ) {
              if (
                ((this.direction = 1 === o ? "down" : "up"),
                "pointer" !== this.options.tolerance &&
                  !this._intersectsWithSides(n))
              )
                break;
              this._rearrange(e, n), this._trigger("change", e, this._uiHash());
              break;
            }
          return (
            this._contactContainers(e),
            t.ui.ddmanager && t.ui.ddmanager.drag(this, e),
            this._trigger("sort", e, this._uiHash()),
            (this.lastPositionAbs = this.positionAbs),
            !1
          );
        },
        _mouseStop: function (e, i) {
          if (e) {
            if (
              (t.ui.ddmanager &&
                !this.options.dropBehaviour &&
                t.ui.ddmanager.drop(this, e),
              this.options.revert)
            ) {
              var n = this,
                s = this.placeholder.offset(),
                o = this.options.axis,
                r = {};
              (o && "x" !== o) ||
                (r.left =
                  s.left -
                  this.offset.parent.left -
                  this.margins.left +
                  (this.offsetParent[0] === this.document[0].body
                    ? 0
                    : this.offsetParent[0].scrollLeft)),
                (o && "y" !== o) ||
                  (r.top =
                    s.top -
                    this.offset.parent.top -
                    this.margins.top +
                    (this.offsetParent[0] === this.document[0].body
                      ? 0
                      : this.offsetParent[0].scrollTop)),
                (this.reverting = !0),
                t(this.helper).animate(
                  r,
                  parseInt(this.options.revert, 10) || 500,
                  function () {
                    n._clear(e);
                  }
                );
            } else this._clear(e, i);
            return !1;
          }
        },
        cancel: function () {
          if (this.dragging) {
            this._mouseUp(new t.Event("mouseup", { target: null })),
              "original" === this.options.helper
                ? (this.currentItem.css(this._storedCSS),
                  this._removeClass(this.currentItem, "ui-sortable-helper"))
                : this.currentItem.show();
            for (var e = this.containers.length - 1; e >= 0; e--)
              this.containers[e]._trigger(
                "deactivate",
                null,
                this._uiHash(this)
              ),
                this.containers[e].containerCache.over &&
                  (this.containers[e]._trigger("out", null, this._uiHash(this)),
                  (this.containers[e].containerCache.over = 0));
          }
          return (
            this.placeholder &&
              (this.placeholder[0].parentNode &&
                this.placeholder[0].parentNode.removeChild(this.placeholder[0]),
              "original" !== this.options.helper &&
                this.helper &&
                this.helper[0].parentNode &&
                this.helper.remove(),
              t.extend(this, {
                helper: null,
                dragging: !1,
                reverting: !1,
                _noFinalSort: null,
              }),
              this.domPosition.prev
                ? t(this.domPosition.prev).after(this.currentItem)
                : t(this.domPosition.parent).prepend(this.currentItem)),
            this
          );
        },
        serialize: function (e) {
          var i = this._getItemsAsjQuery(e && e.connected),
            n = [];
          return (
            (e = e || {}),
            t(i).each(function () {
              var i = (t(e.item || this).attr(e.attribute || "id") || "").match(
                e.expression || /(.+)[\-=_](.+)/
              );
              i &&
                n.push(
                  (e.key || i[1] + "[]") +
                    "=" +
                    (e.key && e.expression ? i[1] : i[2])
                );
            }),
            !n.length && e.key && n.push(e.key + "="),
            n.join("&")
          );
        },
        toArray: function (e) {
          var i = this._getItemsAsjQuery(e && e.connected),
            n = [];
          return (
            (e = e || {}),
            i.each(function () {
              n.push(t(e.item || this).attr(e.attribute || "id") || "");
            }),
            n
          );
        },
        _intersectsWith: function (t) {
          var e = this.positionAbs.left,
            i = e + this.helperProportions.width,
            n = this.positionAbs.top,
            s = n + this.helperProportions.height,
            o = t.left,
            r = o + t.width,
            a = t.top,
            l = a + t.height,
            h = this.offset.click.top,
            c = this.offset.click.left,
            u = "x" === this.options.axis || (n + h > a && l > n + h),
            d = "y" === this.options.axis || (e + c > o && r > e + c),
            p = u && d;
          return "pointer" === this.options.tolerance ||
            this.options.forcePointerForContainers ||
            ("pointer" !== this.options.tolerance &&
              this.helperProportions[this.floating ? "width" : "height"] >
                t[this.floating ? "width" : "height"])
            ? p
            : e + this.helperProportions.width / 2 > o &&
                r > i - this.helperProportions.width / 2 &&
                n + this.helperProportions.height / 2 > a &&
                l > s - this.helperProportions.height / 2;
        },
        _intersectsWithPointer: function (t) {
          var e,
            i,
            n =
              "x" === this.options.axis ||
              this._isOverAxis(
                this.positionAbs.top + this.offset.click.top,
                t.top,
                t.height
              ),
            s =
              "y" === this.options.axis ||
              this._isOverAxis(
                this.positionAbs.left + this.offset.click.left,
                t.left,
                t.width
              );
          return (
            !!(n && s) &&
            ((e = this._getDragVerticalDirection()),
            (i = this._getDragHorizontalDirection()),
            this.floating
              ? "right" === i || "down" === e
                ? 2
                : 1
              : e && ("down" === e ? 2 : 1))
          );
        },
        _intersectsWithSides: function (t) {
          var e = this._isOverAxis(
              this.positionAbs.top + this.offset.click.top,
              t.top + t.height / 2,
              t.height
            ),
            i = this._isOverAxis(
              this.positionAbs.left + this.offset.click.left,
              t.left + t.width / 2,
              t.width
            ),
            n = this._getDragVerticalDirection(),
            s = this._getDragHorizontalDirection();
          return this.floating && s
            ? ("right" === s && i) || ("left" === s && !i)
            : n && (("down" === n && e) || ("up" === n && !e));
        },
        _getDragVerticalDirection: function () {
          var t = this.positionAbs.top - this.lastPositionAbs.top;
          return 0 !== t && (t > 0 ? "down" : "up");
        },
        _getDragHorizontalDirection: function () {
          var t = this.positionAbs.left - this.lastPositionAbs.left;
          return 0 !== t && (t > 0 ? "right" : "left");
        },
        refresh: function (t) {
          return (
            this._refreshItems(t),
            this._setHandleClassName(),
            this.refreshPositions(),
            this
          );
        },
        _connectWith: function () {
          var t = this.options;
          return t.connectWith.constructor === String
            ? [t.connectWith]
            : t.connectWith;
        },
        _getItemsAsjQuery: function (e) {
          function i() {
            a.push(this);
          }
          var n,
            s,
            o,
            r,
            a = [],
            l = [],
            h = this._connectWith();
          if (h && e)
            for (n = h.length - 1; n >= 0; n--)
              for (s = (o = t(h[n], this.document[0])).length - 1; s >= 0; s--)
                (r = t.data(o[s], this.widgetFullName)) &&
                  r !== this &&
                  !r.options.disabled &&
                  l.push([
                    t.isFunction(r.options.items)
                      ? r.options.items.call(r.element)
                      : t(r.options.items, r.element)
                          .not(".ui-sortable-helper")
                          .not(".ui-sortable-placeholder"),
                    r,
                  ]);
          for (
            l.push([
              t.isFunction(this.options.items)
                ? this.options.items.call(this.element, null, {
                    options: this.options,
                    item: this.currentItem,
                  })
                : t(this.options.items, this.element)
                    .not(".ui-sortable-helper")
                    .not(".ui-sortable-placeholder"),
              this,
            ]),
              n = l.length - 1;
            n >= 0;
            n--
          )
            l[n][0].each(i);
          return t(a);
        },
        _removeCurrentsFromItems: function () {
          var e = this.currentItem.find(":data(" + this.widgetName + "-item)");
          this.items = t.grep(this.items, function (t) {
            for (var i = 0; e.length > i; i++)
              if (e[i] === t.item[0]) return !1;
            return !0;
          });
        },
        _refreshItems: function (e) {
          (this.items = []), (this.containers = [this]);
          var i,
            n,
            s,
            o,
            r,
            a,
            l,
            h,
            c = this.items,
            u = [
              [
                t.isFunction(this.options.items)
                  ? this.options.items.call(this.element[0], e, {
                      item: this.currentItem,
                    })
                  : t(this.options.items, this.element),
                this,
              ],
            ],
            d = this._connectWith();
          if (d && this.ready)
            for (i = d.length - 1; i >= 0; i--)
              for (n = (s = t(d[i], this.document[0])).length - 1; n >= 0; n--)
                (o = t.data(s[n], this.widgetFullName)) &&
                  o !== this &&
                  !o.options.disabled &&
                  (u.push([
                    t.isFunction(o.options.items)
                      ? o.options.items.call(o.element[0], e, {
                          item: this.currentItem,
                        })
                      : t(o.options.items, o.element),
                    o,
                  ]),
                  this.containers.push(o));
          for (i = u.length - 1; i >= 0; i--)
            for (r = u[i][1], n = 0, h = (a = u[i][0]).length; h > n; n++)
              (l = t(a[n])).data(this.widgetName + "-item", r),
                c.push({
                  item: l,
                  instance: r,
                  width: 0,
                  height: 0,
                  left: 0,
                  top: 0,
                });
        },
        refreshPositions: function (e) {
          var i, n, s, o;
          for (
            this.floating =
              !!this.items.length &&
              ("x" === this.options.axis ||
                this._isFloating(this.items[0].item)),
              this.offsetParent &&
                this.helper &&
                (this.offset.parent = this._getParentOffset()),
              i = this.items.length - 1;
            i >= 0;
            i--
          )
            ((n = this.items[i]).instance !== this.currentContainer &&
              this.currentContainer &&
              n.item[0] !== this.currentItem[0]) ||
              ((s = this.options.toleranceElement
                ? t(this.options.toleranceElement, n.item)
                : n.item),
              e || ((n.width = s.outerWidth()), (n.height = s.outerHeight())),
              (o = s.offset()),
              (n.left = o.left),
              (n.top = o.top));
          if (this.options.custom && this.options.custom.refreshContainers)
            this.options.custom.refreshContainers.call(this);
          else
            for (i = this.containers.length - 1; i >= 0; i--)
              (o = this.containers[i].element.offset()),
                (this.containers[i].containerCache.left = o.left),
                (this.containers[i].containerCache.top = o.top),
                (this.containers[i].containerCache.width =
                  this.containers[i].element.outerWidth()),
                (this.containers[i].containerCache.height =
                  this.containers[i].element.outerHeight());
          return this;
        },
        _createPlaceholder: function (e) {
          var i,
            n = (e = e || this).options;
          (n.placeholder && n.placeholder.constructor !== String) ||
            ((i = n.placeholder),
            (n.placeholder = {
              element: function () {
                var n = e.currentItem[0].nodeName.toLowerCase(),
                  s = t("<" + n + ">", e.document[0]);
                return (
                  e
                    ._addClass(
                      s,
                      "ui-sortable-placeholder",
                      i || e.currentItem[0].className
                    )
                    ._removeClass(s, "ui-sortable-helper"),
                  "tbody" === n
                    ? e._createTrPlaceholder(
                        e.currentItem.find("tr").eq(0),
                        t("<tr>", e.document[0]).appendTo(s)
                      )
                    : "tr" === n
                    ? e._createTrPlaceholder(e.currentItem, s)
                    : "img" === n && s.attr("src", e.currentItem.attr("src")),
                  i || s.css("visibility", "hidden"),
                  s
                );
              },
              update: function (t, s) {
                (!i || n.forcePlaceholderSize) &&
                  (s.height() ||
                    s.height(
                      e.currentItem.innerHeight() -
                        parseInt(e.currentItem.css("paddingTop") || 0, 10) -
                        parseInt(e.currentItem.css("paddingBottom") || 0, 10)
                    ),
                  s.width() ||
                    s.width(
                      e.currentItem.innerWidth() -
                        parseInt(e.currentItem.css("paddingLeft") || 0, 10) -
                        parseInt(e.currentItem.css("paddingRight") || 0, 10)
                    ));
              },
            })),
            (e.placeholder = t(
              n.placeholder.element.call(e.element, e.currentItem)
            )),
            e.currentItem.after(e.placeholder),
            n.placeholder.update(e, e.placeholder);
        },
        _createTrPlaceholder: function (e, i) {
          var n = this;
          e.children().each(function () {
            t("<td>&#160;</td>", n.document[0])
              .attr("colspan", t(this).attr("colspan") || 1)
              .appendTo(i);
          });
        },
        _contactContainers: function (e) {
          var i,
            n,
            s,
            o,
            r,
            a,
            l,
            h,
            c,
            u,
            d = null,
            p = null;
          for (i = this.containers.length - 1; i >= 0; i--)
            if (!t.contains(this.currentItem[0], this.containers[i].element[0]))
              if (this._intersectsWith(this.containers[i].containerCache)) {
                if (
                  d &&
                  t.contains(this.containers[i].element[0], d.element[0])
                )
                  continue;
                (d = this.containers[i]), (p = i);
              } else
                this.containers[i].containerCache.over &&
                  (this.containers[i]._trigger("out", e, this._uiHash(this)),
                  (this.containers[i].containerCache.over = 0));
          if (d)
            if (1 === this.containers.length)
              this.containers[p].containerCache.over ||
                (this.containers[p]._trigger("over", e, this._uiHash(this)),
                (this.containers[p].containerCache.over = 1));
            else {
              for (
                s = 1e4,
                  o = null,
                  r = (c = d.floating || this._isFloating(this.currentItem))
                    ? "left"
                    : "top",
                  a = c ? "width" : "height",
                  u = c ? "pageX" : "pageY",
                  n = this.items.length - 1;
                n >= 0;
                n--
              )
                t.contains(
                  this.containers[p].element[0],
                  this.items[n].item[0]
                ) &&
                  this.items[n].item[0] !== this.currentItem[0] &&
                  ((l = this.items[n].item.offset()[r]),
                  (h = !1),
                  e[u] - l > this.items[n][a] / 2 && (h = !0),
                  s > Math.abs(e[u] - l) &&
                    ((s = Math.abs(e[u] - l)),
                    (o = this.items[n]),
                    (this.direction = h ? "up" : "down")));
              if (!o && !this.options.dropOnEmpty) return;
              if (this.currentContainer === this.containers[p])
                return void (
                  this.currentContainer.containerCache.over ||
                  (this.containers[p]._trigger("over", e, this._uiHash()),
                  (this.currentContainer.containerCache.over = 1))
                );
              o
                ? this._rearrange(e, o, null, !0)
                : this._rearrange(e, null, this.containers[p].element, !0),
                this._trigger("change", e, this._uiHash()),
                this.containers[p]._trigger("change", e, this._uiHash(this)),
                (this.currentContainer = this.containers[p]),
                this.options.placeholder.update(
                  this.currentContainer,
                  this.placeholder
                ),
                this.containers[p]._trigger("over", e, this._uiHash(this)),
                (this.containers[p].containerCache.over = 1);
            }
        },
        _createHelper: function (e) {
          var i = this.options,
            n = t.isFunction(i.helper)
              ? t(i.helper.apply(this.element[0], [e, this.currentItem]))
              : "clone" === i.helper
              ? this.currentItem.clone()
              : this.currentItem;
          return (
            n.parents("body").length ||
              t(
                "parent" !== i.appendTo
                  ? i.appendTo
                  : this.currentItem[0].parentNode
              )[0].appendChild(n[0]),
            n[0] === this.currentItem[0] &&
              (this._storedCSS = {
                width: this.currentItem[0].style.width,
                height: this.currentItem[0].style.height,
                position: this.currentItem.css("position"),
                top: this.currentItem.css("top"),
                left: this.currentItem.css("left"),
              }),
            (!n[0].style.width || i.forceHelperSize) &&
              n.width(this.currentItem.width()),
            (!n[0].style.height || i.forceHelperSize) &&
              n.height(this.currentItem.height()),
            n
          );
        },
        _adjustOffsetFromHelper: function (e) {
          "string" == typeof e && (e = e.split(" ")),
            t.isArray(e) && (e = { left: +e[0], top: +e[1] || 0 }),
            "left" in e &&
              (this.offset.click.left = e.left + this.margins.left),
            "right" in e &&
              (this.offset.click.left =
                this.helperProportions.width - e.right + this.margins.left),
            "top" in e && (this.offset.click.top = e.top + this.margins.top),
            "bottom" in e &&
              (this.offset.click.top =
                this.helperProportions.height - e.bottom + this.margins.top);
        },
        _getParentOffset: function () {
          this.offsetParent = this.helper.offsetParent();
          var e = this.offsetParent.offset();
          return (
            "absolute" === this.cssPosition &&
              this.scrollParent[0] !== this.document[0] &&
              t.contains(this.scrollParent[0], this.offsetParent[0]) &&
              ((e.left += this.scrollParent.scrollLeft()),
              (e.top += this.scrollParent.scrollTop())),
            (this.offsetParent[0] === this.document[0].body ||
              (this.offsetParent[0].tagName &&
                "html" === this.offsetParent[0].tagName.toLowerCase() &&
                t.ui.ie)) &&
              (e = { top: 0, left: 0 }),
            {
              top:
                e.top +
                (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
              left:
                e.left +
                (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0),
            }
          );
        },
        _getRelativeOffset: function () {
          if ("relative" === this.cssPosition) {
            var t = this.currentItem.position();
            return {
              top:
                t.top -
                (parseInt(this.helper.css("top"), 10) || 0) +
                this.scrollParent.scrollTop(),
              left:
                t.left -
                (parseInt(this.helper.css("left"), 10) || 0) +
                this.scrollParent.scrollLeft(),
            };
          }
          return { top: 0, left: 0 };
        },
        _cacheMargins: function () {
          this.margins = {
            left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
            top: parseInt(this.currentItem.css("marginTop"), 10) || 0,
          };
        },
        _cacheHelperProportions: function () {
          this.helperProportions = {
            width: this.helper.outerWidth(),
            height: this.helper.outerHeight(),
          };
        },
        _setContainment: function () {
          var e,
            i,
            n,
            s = this.options;
          "parent" === s.containment &&
            (s.containment = this.helper[0].parentNode),
            ("document" === s.containment || "window" === s.containment) &&
              (this.containment = [
                0 - this.offset.relative.left - this.offset.parent.left,
                0 - this.offset.relative.top - this.offset.parent.top,
                "document" === s.containment
                  ? this.document.width()
                  : this.window.width() -
                    this.helperProportions.width -
                    this.margins.left,
                ("document" === s.containment
                  ? this.document.height() ||
                    document.body.parentNode.scrollHeight
                  : this.window.height() ||
                    this.document[0].body.parentNode.scrollHeight) -
                  this.helperProportions.height -
                  this.margins.top,
              ]),
            /^(document|window|parent)$/.test(s.containment) ||
              ((e = t(s.containment)[0]),
              (i = t(s.containment).offset()),
              (n = "hidden" !== t(e).css("overflow")),
              (this.containment = [
                i.left +
                  (parseInt(t(e).css("borderLeftWidth"), 10) || 0) +
                  (parseInt(t(e).css("paddingLeft"), 10) || 0) -
                  this.margins.left,
                i.top +
                  (parseInt(t(e).css("borderTopWidth"), 10) || 0) +
                  (parseInt(t(e).css("paddingTop"), 10) || 0) -
                  this.margins.top,
                i.left +
                  (n ? Math.max(e.scrollWidth, e.offsetWidth) : e.offsetWidth) -
                  (parseInt(t(e).css("borderLeftWidth"), 10) || 0) -
                  (parseInt(t(e).css("paddingRight"), 10) || 0) -
                  this.helperProportions.width -
                  this.margins.left,
                i.top +
                  (n
                    ? Math.max(e.scrollHeight, e.offsetHeight)
                    : e.offsetHeight) -
                  (parseInt(t(e).css("borderTopWidth"), 10) || 0) -
                  (parseInt(t(e).css("paddingBottom"), 10) || 0) -
                  this.helperProportions.height -
                  this.margins.top,
              ]));
        },
        _convertPositionTo: function (e, i) {
          i || (i = this.position);
          var n = "absolute" === e ? 1 : -1,
            s =
              "absolute" !== this.cssPosition ||
              (this.scrollParent[0] !== this.document[0] &&
                t.contains(this.scrollParent[0], this.offsetParent[0]))
                ? this.scrollParent
                : this.offsetParent,
            o = /(html|body)/i.test(s[0].tagName);
          return {
            top:
              i.top +
              this.offset.relative.top * n +
              this.offset.parent.top * n -
              ("fixed" === this.cssPosition
                ? -this.scrollParent.scrollTop()
                : o
                ? 0
                : s.scrollTop()) *
                n,
            left:
              i.left +
              this.offset.relative.left * n +
              this.offset.parent.left * n -
              ("fixed" === this.cssPosition
                ? -this.scrollParent.scrollLeft()
                : o
                ? 0
                : s.scrollLeft()) *
                n,
          };
        },
        _generatePosition: function (e) {
          var i,
            n,
            s = this.options,
            o = e.pageX,
            r = e.pageY,
            a =
              "absolute" !== this.cssPosition ||
              (this.scrollParent[0] !== this.document[0] &&
                t.contains(this.scrollParent[0], this.offsetParent[0]))
                ? this.scrollParent
                : this.offsetParent,
            l = /(html|body)/i.test(a[0].tagName);
          return (
            "relative" !== this.cssPosition ||
              (this.scrollParent[0] !== this.document[0] &&
                this.scrollParent[0] !== this.offsetParent[0]) ||
              (this.offset.relative = this._getRelativeOffset()),
            this.originalPosition &&
              (this.containment &&
                (e.pageX - this.offset.click.left < this.containment[0] &&
                  (o = this.containment[0] + this.offset.click.left),
                e.pageY - this.offset.click.top < this.containment[1] &&
                  (r = this.containment[1] + this.offset.click.top),
                e.pageX - this.offset.click.left > this.containment[2] &&
                  (o = this.containment[2] + this.offset.click.left),
                e.pageY - this.offset.click.top > this.containment[3] &&
                  (r = this.containment[3] + this.offset.click.top)),
              s.grid &&
                ((i =
                  this.originalPageY +
                  Math.round((r - this.originalPageY) / s.grid[1]) * s.grid[1]),
                (r = this.containment
                  ? i - this.offset.click.top >= this.containment[1] &&
                    i - this.offset.click.top <= this.containment[3]
                    ? i
                    : i - this.offset.click.top >= this.containment[1]
                    ? i - s.grid[1]
                    : i + s.grid[1]
                  : i),
                (n =
                  this.originalPageX +
                  Math.round((o - this.originalPageX) / s.grid[0]) * s.grid[0]),
                (o = this.containment
                  ? n - this.offset.click.left >= this.containment[0] &&
                    n - this.offset.click.left <= this.containment[2]
                    ? n
                    : n - this.offset.click.left >= this.containment[0]
                    ? n - s.grid[0]
                    : n + s.grid[0]
                  : n))),
            {
              top:
                r -
                this.offset.click.top -
                this.offset.relative.top -
                this.offset.parent.top +
                ("fixed" === this.cssPosition
                  ? -this.scrollParent.scrollTop()
                  : l
                  ? 0
                  : a.scrollTop()),
              left:
                o -
                this.offset.click.left -
                this.offset.relative.left -
                this.offset.parent.left +
                ("fixed" === this.cssPosition
                  ? -this.scrollParent.scrollLeft()
                  : l
                  ? 0
                  : a.scrollLeft()),
            }
          );
        },
        _rearrange: function (t, e, i, n) {
          i
            ? i[0].appendChild(this.placeholder[0])
            : e.item[0].parentNode.insertBefore(
                this.placeholder[0],
                "down" === this.direction ? e.item[0] : e.item[0].nextSibling
              ),
            (this.counter = this.counter ? ++this.counter : 1);
          var s = this.counter;
          this._delay(function () {
            s === this.counter && this.refreshPositions(!n);
          });
        },
        _clear: function (t, e) {
          function i(t, e, i) {
            return function (n) {
              i._trigger(t, n, e._uiHash(e));
            };
          }
          this.reverting = !1;
          var n,
            s = [];
          if (
            (!this._noFinalSort &&
              this.currentItem.parent().length &&
              this.placeholder.before(this.currentItem),
            (this._noFinalSort = null),
            this.helper[0] === this.currentItem[0])
          ) {
            for (n in this._storedCSS)
              ("auto" === this._storedCSS[n] ||
                "static" === this._storedCSS[n]) &&
                (this._storedCSS[n] = "");
            this.currentItem.css(this._storedCSS),
              this._removeClass(this.currentItem, "ui-sortable-helper");
          } else this.currentItem.show();
          for (
            this.fromOutside &&
              !e &&
              s.push(function (t) {
                this._trigger("receive", t, this._uiHash(this.fromOutside));
              }),
              (!this.fromOutside &&
                this.domPosition.prev ===
                  this.currentItem.prev().not(".ui-sortable-helper")[0] &&
                this.domPosition.parent === this.currentItem.parent()[0]) ||
                e ||
                s.push(function (t) {
                  this._trigger("update", t, this._uiHash());
                }),
              this !== this.currentContainer &&
                (e ||
                  (s.push(function (t) {
                    this._trigger("remove", t, this._uiHash());
                  }),
                  s.push(
                    function (t) {
                      return function (e) {
                        t._trigger("receive", e, this._uiHash(this));
                      };
                    }.call(this, this.currentContainer)
                  ),
                  s.push(
                    function (t) {
                      return function (e) {
                        t._trigger("update", e, this._uiHash(this));
                      };
                    }.call(this, this.currentContainer)
                  ))),
              n = this.containers.length - 1;
            n >= 0;
            n--
          )
            e || s.push(i("deactivate", this, this.containers[n])),
              this.containers[n].containerCache.over &&
                (s.push(i("out", this, this.containers[n])),
                (this.containers[n].containerCache.over = 0));
          if (
            (this.storedCursor &&
              (this.document.find("body").css("cursor", this.storedCursor),
              this.storedStylesheet.remove()),
            this._storedOpacity &&
              this.helper.css("opacity", this._storedOpacity),
            this._storedZIndex &&
              this.helper.css(
                "zIndex",
                "auto" === this._storedZIndex ? "" : this._storedZIndex
              ),
            (this.dragging = !1),
            e || this._trigger("beforeStop", t, this._uiHash()),
            this.placeholder[0].parentNode.removeChild(this.placeholder[0]),
            this.cancelHelperRemoval ||
              (this.helper[0] !== this.currentItem[0] && this.helper.remove(),
              (this.helper = null)),
            !e)
          ) {
            for (n = 0; s.length > n; n++) s[n].call(this, t);
            this._trigger("stop", t, this._uiHash());
          }
          return (this.fromOutside = !1), !this.cancelHelperRemoval;
        },
        _trigger: function () {
          !1 === t.Widget.prototype._trigger.apply(this, arguments) &&
            this.cancel();
        },
        _uiHash: function (e) {
          var i = e || this;
          return {
            helper: i.helper,
            placeholder: i.placeholder || t([]),
            position: i.position,
            originalPosition: i.originalPosition,
            offset: i.positionAbs,
            item: i.currentItem,
            sender: e ? e.element : null,
          };
        },
      }),
      t.widget("ui.accordion", {
        version: "1.12.1",
        options: {
          active: 0,
          animate: {},
          classes: {
            "ui-accordion-header": "ui-corner-top",
            "ui-accordion-header-collapsed": "ui-corner-all",
            "ui-accordion-content": "ui-corner-bottom",
          },
          collapsible: !1,
          event: "click",
          header: "> li > :first-child, > :not(li):even",
          heightStyle: "auto",
          icons: {
            activeHeader: "ui-icon-triangle-1-s",
            header: "ui-icon-triangle-1-e",
          },
          activate: null,
          beforeActivate: null,
        },
        hideProps: {
          borderTopWidth: "hide",
          borderBottomWidth: "hide",
          paddingTop: "hide",
          paddingBottom: "hide",
          height: "hide",
        },
        showProps: {
          borderTopWidth: "show",
          borderBottomWidth: "show",
          paddingTop: "show",
          paddingBottom: "show",
          height: "show",
        },
        _create: function () {
          var e = this.options;
          (this.prevShow = this.prevHide = t()),
            this._addClass("ui-accordion", "ui-widget ui-helper-reset"),
            this.element.attr("role", "tablist"),
            e.collapsible ||
              (!1 !== e.active && null != e.active) ||
              (e.active = 0),
            this._processPanels(),
            0 > e.active && (e.active += this.headers.length),
            this._refresh();
        },
        _getCreateEventData: function () {
          return {
            header: this.active,
            panel: this.active.length ? this.active.next() : t(),
          };
        },
        _createIcons: function () {
          var e,
            i,
            n = this.options.icons;
          n &&
            ((e = t("<span>")),
            this._addClass(
              e,
              "ui-accordion-header-icon",
              "ui-icon " + n.header
            ),
            e.prependTo(this.headers),
            (i = this.active.children(".ui-accordion-header-icon")),
            this._removeClass(i, n.header)
              ._addClass(i, null, n.activeHeader)
              ._addClass(this.headers, "ui-accordion-icons"));
        },
        _destroyIcons: function () {
          this._removeClass(this.headers, "ui-accordion-icons"),
            this.headers.children(".ui-accordion-header-icon").remove();
        },
        _destroy: function () {
          var t;
          this.element.removeAttr("role"),
            this.headers
              .removeAttr(
                "role aria-expanded aria-selected aria-controls tabIndex"
              )
              .removeUniqueId(),
            this._destroyIcons(),
            (t = this.headers
              .next()
              .css("display", "")
              .removeAttr("role aria-hidden aria-labelledby")
              .removeUniqueId()),
            "content" !== this.options.heightStyle && t.css("height", "");
        },
        _setOption: function (t, e) {
          return "active" === t
            ? void this._activate(e)
            : ("event" === t &&
                (this.options.event &&
                  this._off(this.headers, this.options.event),
                this._setupEvents(e)),
              this._super(t, e),
              "collapsible" !== t ||
                e ||
                !1 !== this.options.active ||
                this._activate(0),
              void (
                "icons" === t &&
                (this._destroyIcons(), e && this._createIcons())
              ));
        },
        _setOptionDisabled: function (t) {
          this._super(t),
            this.element.attr("aria-disabled", t),
            this._toggleClass(null, "ui-state-disabled", !!t),
            this._toggleClass(
              this.headers.add(this.headers.next()),
              null,
              "ui-state-disabled",
              !!t
            );
        },
        _keydown: function (e) {
          if (!e.altKey && !e.ctrlKey) {
            var i = t.ui.keyCode,
              n = this.headers.length,
              s = this.headers.index(e.target),
              o = !1;
            switch (e.keyCode) {
              case i.RIGHT:
              case i.DOWN:
                o = this.headers[(s + 1) % n];
                break;
              case i.LEFT:
              case i.UP:
                o = this.headers[(s - 1 + n) % n];
                break;
              case i.SPACE:
              case i.ENTER:
                this._eventHandler(e);
                break;
              case i.HOME:
                o = this.headers[0];
                break;
              case i.END:
                o = this.headers[n - 1];
            }
            o &&
              (t(e.target).attr("tabIndex", -1),
              t(o).attr("tabIndex", 0),
              t(o).trigger("focus"),
              e.preventDefault());
          }
        },
        _panelKeyDown: function (e) {
          e.keyCode === t.ui.keyCode.UP &&
            e.ctrlKey &&
            t(e.currentTarget).prev().trigger("focus");
        },
        refresh: function () {
          var e = this.options;
          this._processPanels(),
            (!1 === e.active && !0 === e.collapsible) || !this.headers.length
              ? ((e.active = !1), (this.active = t()))
              : !1 === e.active
              ? this._activate(0)
              : this.active.length &&
                !t.contains(this.element[0], this.active[0])
              ? this.headers.length ===
                this.headers.find(".ui-state-disabled").length
                ? ((e.active = !1), (this.active = t()))
                : this._activate(Math.max(0, e.active - 1))
              : (e.active = this.headers.index(this.active)),
            this._destroyIcons(),
            this._refresh();
        },
        _processPanels: function () {
          var t = this.headers,
            e = this.panels;
          (this.headers = this.element.find(this.options.header)),
            this._addClass(
              this.headers,
              "ui-accordion-header ui-accordion-header-collapsed",
              "ui-state-default"
            ),
            (this.panels = this.headers
              .next()
              .filter(":not(.ui-accordion-content-active)")
              .hide()),
            this._addClass(
              this.panels,
              "ui-accordion-content",
              "ui-helper-reset ui-widget-content"
            ),
            e &&
              (this._off(t.not(this.headers)), this._off(e.not(this.panels)));
        },
        _refresh: function () {
          var e,
            i = this.options,
            n = i.heightStyle,
            s = this.element.parent();
          (this.active = this._findActive(i.active)),
            this._addClass(
              this.active,
              "ui-accordion-header-active",
              "ui-state-active"
            )._removeClass(this.active, "ui-accordion-header-collapsed"),
            this._addClass(this.active.next(), "ui-accordion-content-active"),
            this.active.next().show(),
            this.headers
              .attr("role", "tab")
              .each(function () {
                var e = t(this),
                  i = e.uniqueId().attr("id"),
                  n = e.next(),
                  s = n.uniqueId().attr("id");
                e.attr("aria-controls", s), n.attr("aria-labelledby", i);
              })
              .next()
              .attr("role", "tabpanel"),
            this.headers
              .not(this.active)
              .attr({
                "aria-selected": "false",
                "aria-expanded": "false",
                tabIndex: -1,
              })
              .next()
              .attr({ "aria-hidden": "true" })
              .hide(),
            this.active.length
              ? this.active
                  .attr({
                    "aria-selected": "true",
                    "aria-expanded": "true",
                    tabIndex: 0,
                  })
                  .next()
                  .attr({ "aria-hidden": "false" })
              : this.headers.eq(0).attr("tabIndex", 0),
            this._createIcons(),
            this._setupEvents(i.event),
            "fill" === n
              ? ((e = s.height()),
                this.element.siblings(":visible").each(function () {
                  var i = t(this),
                    n = i.css("position");
                  "absolute" !== n && "fixed" !== n && (e -= i.outerHeight(!0));
                }),
                this.headers.each(function () {
                  e -= t(this).outerHeight(!0);
                }),
                this.headers
                  .next()
                  .each(function () {
                    t(this).height(
                      Math.max(0, e - t(this).innerHeight() + t(this).height())
                    );
                  })
                  .css("overflow", "auto"))
              : "auto" === n &&
                ((e = 0),
                this.headers
                  .next()
                  .each(function () {
                    var i = t(this).is(":visible");
                    i || t(this).show(),
                      (e = Math.max(e, t(this).css("height", "").height())),
                      i || t(this).hide();
                  })
                  .height(e));
        },
        _activate: function (e) {
          var i = this._findActive(e)[0];
          i !== this.active[0] &&
            ((i = i || this.active[0]),
            this._eventHandler({
              target: i,
              currentTarget: i,
              preventDefault: t.noop,
            }));
        },
        _findActive: function (e) {
          return "number" == typeof e ? this.headers.eq(e) : t();
        },
        _setupEvents: function (e) {
          var i = { keydown: "_keydown" };
          e &&
            t.each(e.split(" "), function (t, e) {
              i[e] = "_eventHandler";
            }),
            this._off(this.headers.add(this.headers.next())),
            this._on(this.headers, i),
            this._on(this.headers.next(), { keydown: "_panelKeyDown" }),
            this._hoverable(this.headers),
            this._focusable(this.headers);
        },
        _eventHandler: function (e) {
          var i,
            n,
            s = this.options,
            o = this.active,
            r = t(e.currentTarget),
            a = r[0] === o[0],
            l = a && s.collapsible,
            h = l ? t() : r.next(),
            c = o.next(),
            u = {
              oldHeader: o,
              oldPanel: c,
              newHeader: l ? t() : r,
              newPanel: h,
            };
          e.preventDefault(),
            (a && !s.collapsible) ||
              !1 === this._trigger("beforeActivate", e, u) ||
              ((s.active = !l && this.headers.index(r)),
              (this.active = a ? t() : r),
              this._toggle(u),
              this._removeClass(
                o,
                "ui-accordion-header-active",
                "ui-state-active"
              ),
              s.icons &&
                ((i = o.children(".ui-accordion-header-icon")),
                this._removeClass(i, null, s.icons.activeHeader)._addClass(
                  i,
                  null,
                  s.icons.header
                )),
              a ||
                (this._removeClass(
                  r,
                  "ui-accordion-header-collapsed"
                )._addClass(r, "ui-accordion-header-active", "ui-state-active"),
                s.icons &&
                  ((n = r.children(".ui-accordion-header-icon")),
                  this._removeClass(n, null, s.icons.header)._addClass(
                    n,
                    null,
                    s.icons.activeHeader
                  )),
                this._addClass(r.next(), "ui-accordion-content-active")));
        },
        _toggle: function (e) {
          var i = e.newPanel,
            n = this.prevShow.length ? this.prevShow : e.oldPanel;
          this.prevShow.add(this.prevHide).stop(!0, !0),
            (this.prevShow = i),
            (this.prevHide = n),
            this.options.animate
              ? this._animate(i, n, e)
              : (n.hide(), i.show(), this._toggleComplete(e)),
            n.attr({ "aria-hidden": "true" }),
            n
              .prev()
              .attr({ "aria-selected": "false", "aria-expanded": "false" }),
            i.length && n.length
              ? n.prev().attr({ tabIndex: -1, "aria-expanded": "false" })
              : i.length &&
                this.headers
                  .filter(function () {
                    return 0 === parseInt(t(this).attr("tabIndex"), 10);
                  })
                  .attr("tabIndex", -1),
            i
              .attr("aria-hidden", "false")
              .prev()
              .attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0,
              });
        },
        _animate: function (t, e, i) {
          var n,
            s,
            o,
            r = this,
            a = 0,
            l = t.css("box-sizing"),
            h = t.length && (!e.length || t.index() < e.index()),
            c = this.options.animate || {},
            u = (h && c.down) || c,
            d = function () {
              r._toggleComplete(i);
            };
          return (
            "number" == typeof u && (o = u),
            "string" == typeof u && (s = u),
            (s = s || u.easing || c.easing),
            (o = o || u.duration || c.duration),
            e.length
              ? t.length
                ? ((n = t.show().outerHeight()),
                  e.animate(this.hideProps, {
                    duration: o,
                    easing: s,
                    step: function (t, e) {
                      e.now = Math.round(t);
                    },
                  }),
                  void t.hide().animate(this.showProps, {
                    duration: o,
                    easing: s,
                    complete: d,
                    step: function (t, i) {
                      (i.now = Math.round(t)),
                        "height" !== i.prop
                          ? "content-box" === l && (a += i.now)
                          : "content" !== r.options.heightStyle &&
                            ((i.now = Math.round(n - e.outerHeight() - a)),
                            (a = 0));
                    },
                  }))
                : e.animate(this.hideProps, o, s, d)
              : t.animate(this.showProps, o, s, d)
          );
        },
        _toggleComplete: function (t) {
          var e = t.oldPanel,
            i = e.prev();
          this._removeClass(e, "ui-accordion-content-active"),
            this._removeClass(i, "ui-accordion-header-active")._addClass(
              i,
              "ui-accordion-header-collapsed"
            ),
            e.length && (e.parent()[0].className = e.parent()[0].className),
            this._trigger("activate", null, t);
        },
      }),
      t.widget("ui.menu", {
        version: "1.12.1",
        defaultElement: "<ul>",
        delay: 300,
        options: {
          icons: { submenu: "ui-icon-caret-1-e" },
          items: "> *",
          menus: "ul",
          position: { my: "left top", at: "right top" },
          role: "menu",
          blur: null,
          focus: null,
          select: null,
        },
        _create: function () {
          (this.activeMenu = this.element),
            (this.mouseHandled = !1),
            this.element
              .uniqueId()
              .attr({ role: this.options.role, tabIndex: 0 }),
            this._addClass("ui-menu", "ui-widget ui-widget-content"),
            this._on({
              "mousedown .ui-menu-item": function (t) {
                t.preventDefault();
              },
              "click .ui-menu-item": function (e) {
                var i = t(e.target),
                  n = t(t.ui.safeActiveElement(this.document[0]));
                !this.mouseHandled &&
                  i.not(".ui-state-disabled").length &&
                  (this.select(e),
                  e.isPropagationStopped() || (this.mouseHandled = !0),
                  i.has(".ui-menu").length
                    ? this.expand(e)
                    : !this.element.is(":focus") &&
                      n.closest(".ui-menu").length &&
                      (this.element.trigger("focus", [!0]),
                      this.active &&
                        1 === this.active.parents(".ui-menu").length &&
                        clearTimeout(this.timer)));
              },
              "mouseenter .ui-menu-item": function (e) {
                if (!this.previousFilter) {
                  var i = t(e.target).closest(".ui-menu-item"),
                    n = t(e.currentTarget);
                  i[0] === n[0] &&
                    (this._removeClass(
                      n.siblings().children(".ui-state-active"),
                      null,
                      "ui-state-active"
                    ),
                    this.focus(e, n));
                }
              },
              mouseleave: "collapseAll",
              "mouseleave .ui-menu": "collapseAll",
              focus: function (t, e) {
                var i =
                  this.active || this.element.find(this.options.items).eq(0);
                e || this.focus(t, i);
              },
              blur: function (e) {
                this._delay(function () {
                  !t.contains(
                    this.element[0],
                    t.ui.safeActiveElement(this.document[0])
                  ) && this.collapseAll(e);
                });
              },
              keydown: "_keydown",
            }),
            this.refresh(),
            this._on(this.document, {
              click: function (t) {
                this._closeOnDocumentClick(t) && this.collapseAll(t),
                  (this.mouseHandled = !1);
              },
            });
        },
        _destroy: function () {
          var e = this.element
            .find(".ui-menu-item")
            .removeAttr("role aria-disabled")
            .children(".ui-menu-item-wrapper")
            .removeUniqueId()
            .removeAttr("tabIndex role aria-haspopup");
          this.element
            .removeAttr("aria-activedescendant")
            .find(".ui-menu")
            .addBack()
            .removeAttr(
              "role aria-labelledby aria-expanded aria-hidden aria-disabled tabIndex"
            )
            .removeUniqueId()
            .show(),
            e.children().each(function () {
              var e = t(this);
              e.data("ui-menu-submenu-caret") && e.remove();
            });
        },
        _keydown: function (e) {
          var i,
            n,
            s,
            o,
            r = !0;
          switch (e.keyCode) {
            case t.ui.keyCode.PAGE_UP:
              this.previousPage(e);
              break;
            case t.ui.keyCode.PAGE_DOWN:
              this.nextPage(e);
              break;
            case t.ui.keyCode.HOME:
              this._move("first", "first", e);
              break;
            case t.ui.keyCode.END:
              this._move("last", "last", e);
              break;
            case t.ui.keyCode.UP:
              this.previous(e);
              break;
            case t.ui.keyCode.DOWN:
              this.next(e);
              break;
            case t.ui.keyCode.LEFT:
              this.collapse(e);
              break;
            case t.ui.keyCode.RIGHT:
              this.active &&
                !this.active.is(".ui-state-disabled") &&
                this.expand(e);
              break;
            case t.ui.keyCode.ENTER:
            case t.ui.keyCode.SPACE:
              this._activate(e);
              break;
            case t.ui.keyCode.ESCAPE:
              this.collapse(e);
              break;
            default:
              (r = !1),
                (n = this.previousFilter || ""),
                (o = !1),
                (s =
                  e.keyCode >= 96 && 105 >= e.keyCode
                    ? "" + (e.keyCode - 96)
                    : String.fromCharCode(e.keyCode)),
                clearTimeout(this.filterTimer),
                s === n ? (o = !0) : (s = n + s),
                (i = this._filterMenuItems(s)),
                (i =
                  o && -1 !== i.index(this.active.next())
                    ? this.active.nextAll(".ui-menu-item")
                    : i).length ||
                  ((s = String.fromCharCode(e.keyCode)),
                  (i = this._filterMenuItems(s))),
                i.length
                  ? (this.focus(e, i),
                    (this.previousFilter = s),
                    (this.filterTimer = this._delay(function () {
                      delete this.previousFilter;
                    }, 1e3)))
                  : delete this.previousFilter;
          }
          r && e.preventDefault();
        },
        _activate: function (t) {
          this.active &&
            !this.active.is(".ui-state-disabled") &&
            (this.active.children("[aria-haspopup='true']").length
              ? this.expand(t)
              : this.select(t));
        },
        refresh: function () {
          var e,
            i,
            n,
            s,
            o = this,
            r = this.options.icons.submenu,
            a = this.element.find(this.options.menus);
          this._toggleClass(
            "ui-menu-icons",
            null,
            !!this.element.find(".ui-icon").length
          ),
            (i = a
              .filter(":not(.ui-menu)")
              .hide()
              .attr({
                role: this.options.role,
                "aria-hidden": "true",
                "aria-expanded": "false",
              })
              .each(function () {
                var e = t(this),
                  i = e.prev(),
                  n = t("<span>").data("ui-menu-submenu-caret", !0);
                o._addClass(n, "ui-menu-icon", "ui-icon " + r),
                  i.attr("aria-haspopup", "true").prepend(n),
                  e.attr("aria-labelledby", i.attr("id"));
              })),
            this._addClass(
              i,
              "ui-menu",
              "ui-widget ui-widget-content ui-front"
            ),
            (e = a.add(this.element).find(this.options.items))
              .not(".ui-menu-item")
              .each(function () {
                var e = t(this);
                o._isDivider(e) &&
                  o._addClass(e, "ui-menu-divider", "ui-widget-content");
              }),
            (s = (n = e.not(".ui-menu-item, .ui-menu-divider"))
              .children()
              .not(".ui-menu")
              .uniqueId()
              .attr({ tabIndex: -1, role: this._itemRole() })),
            this._addClass(n, "ui-menu-item")._addClass(
              s,
              "ui-menu-item-wrapper"
            ),
            e.filter(".ui-state-disabled").attr("aria-disabled", "true"),
            this.active &&
              !t.contains(this.element[0], this.active[0]) &&
              this.blur();
        },
        _itemRole: function () {
          return { menu: "menuitem", listbox: "option" }[this.options.role];
        },
        _setOption: function (t, e) {
          if ("icons" === t) {
            var i = this.element.find(".ui-menu-icon");
            this._removeClass(i, null, this.options.icons.submenu)._addClass(
              i,
              null,
              e.submenu
            );
          }
          this._super(t, e);
        },
        _setOptionDisabled: function (t) {
          this._super(t),
            this.element.attr("aria-disabled", t + ""),
            this._toggleClass(null, "ui-state-disabled", !!t);
        },
        focus: function (t, e) {
          var i, n, s;
          this.blur(t, t && "focus" === t.type),
            this._scrollIntoView(e),
            (this.active = e.first()),
            (n = this.active.children(".ui-menu-item-wrapper")),
            this._addClass(n, null, "ui-state-active"),
            this.options.role &&
              this.element.attr("aria-activedescendant", n.attr("id")),
            (s = this.active
              .parent()
              .closest(".ui-menu-item")
              .children(".ui-menu-item-wrapper")),
            this._addClass(s, null, "ui-state-active"),
            t && "keydown" === t.type
              ? this._close()
              : (this.timer = this._delay(function () {
                  this._close();
                }, this.delay)),
            (i = e.children(".ui-menu")).length &&
              t &&
              /^mouse/.test(t.type) &&
              this._startOpening(i),
            (this.activeMenu = e.parent()),
            this._trigger("focus", t, { item: e });
        },
        _scrollIntoView: function (e) {
          var i, n, s, o, r, a;
          this._hasScroll() &&
            ((i = parseFloat(t.css(this.activeMenu[0], "borderTopWidth")) || 0),
            (n = parseFloat(t.css(this.activeMenu[0], "paddingTop")) || 0),
            (s = e.offset().top - this.activeMenu.offset().top - i - n),
            (o = this.activeMenu.scrollTop()),
            (r = this.activeMenu.height()),
            (a = e.outerHeight()),
            0 > s
              ? this.activeMenu.scrollTop(o + s)
              : s + a > r && this.activeMenu.scrollTop(o + s - r + a));
        },
        blur: function (t, e) {
          e || clearTimeout(this.timer),
            this.active &&
              (this._removeClass(
                this.active.children(".ui-menu-item-wrapper"),
                null,
                "ui-state-active"
              ),
              this._trigger("blur", t, { item: this.active }),
              (this.active = null));
        },
        _startOpening: function (t) {
          clearTimeout(this.timer),
            "true" === t.attr("aria-hidden") &&
              (this.timer = this._delay(function () {
                this._close(), this._open(t);
              }, this.delay));
        },
        _open: function (e) {
          var i = t.extend({ of: this.active }, this.options.position);
          clearTimeout(this.timer),
            this.element
              .find(".ui-menu")
              .not(e.parents(".ui-menu"))
              .hide()
              .attr("aria-hidden", "true"),
            e
              .show()
              .removeAttr("aria-hidden")
              .attr("aria-expanded", "true")
              .position(i);
        },
        collapseAll: function (e, i) {
          clearTimeout(this.timer),
            (this.timer = this._delay(function () {
              var n = i
                ? this.element
                : t(e && e.target).closest(this.element.find(".ui-menu"));
              n.length || (n = this.element),
                this._close(n),
                this.blur(e),
                this._removeClass(
                  n.find(".ui-state-active"),
                  null,
                  "ui-state-active"
                ),
                (this.activeMenu = n);
            }, this.delay));
        },
        _close: function (t) {
          t || (t = this.active ? this.active.parent() : this.element),
            t
              .find(".ui-menu")
              .hide()
              .attr("aria-hidden", "true")
              .attr("aria-expanded", "false");
        },
        _closeOnDocumentClick: function (e) {
          return !t(e.target).closest(".ui-menu").length;
        },
        _isDivider: function (t) {
          return !/[^\-\u2014\u2013\s]/.test(t.text());
        },
        collapse: function (t) {
          var e =
            this.active &&
            this.active.parent().closest(".ui-menu-item", this.element);
          e && e.length && (this._close(), this.focus(t, e));
        },
        expand: function (t) {
          var e =
            this.active &&
            this.active.children(".ui-menu ").find(this.options.items).first();
          e &&
            e.length &&
            (this._open(e.parent()),
            this._delay(function () {
              this.focus(t, e);
            }));
        },
        next: function (t) {
          this._move("next", "first", t);
        },
        previous: function (t) {
          this._move("prev", "last", t);
        },
        isFirstItem: function () {
          return this.active && !this.active.prevAll(".ui-menu-item").length;
        },
        isLastItem: function () {
          return this.active && !this.active.nextAll(".ui-menu-item").length;
        },
        _move: function (t, e, i) {
          var n;
          this.active &&
            (n =
              "first" === t || "last" === t
                ? this.active["first" === t ? "prevAll" : "nextAll"](
                    ".ui-menu-item"
                  ).eq(-1)
                : this.active[t + "All"](".ui-menu-item").eq(0)),
            (n && n.length && this.active) ||
              (n = this.activeMenu.find(this.options.items)[e]()),
            this.focus(i, n);
        },
        nextPage: function (e) {
          var i, n, s;
          return this.active
            ? void (
                this.isLastItem() ||
                (this._hasScroll()
                  ? ((n = this.active.offset().top),
                    (s = this.element.height()),
                    this.active.nextAll(".ui-menu-item").each(function () {
                      return 0 > (i = t(this)).offset().top - n - s;
                    }),
                    this.focus(e, i))
                  : this.focus(
                      e,
                      this.activeMenu
                        .find(this.options.items)
                        [this.active ? "last" : "first"]()
                    ))
              )
            : void this.next(e);
        },
        previousPage: function (e) {
          var i, n, s;
          return this.active
            ? void (
                this.isFirstItem() ||
                (this._hasScroll()
                  ? ((n = this.active.offset().top),
                    (s = this.element.height()),
                    this.active.prevAll(".ui-menu-item").each(function () {
                      return (i = t(this)).offset().top - n + s > 0;
                    }),
                    this.focus(e, i))
                  : this.focus(
                      e,
                      this.activeMenu.find(this.options.items).first()
                    ))
              )
            : void this.next(e);
        },
        _hasScroll: function () {
          return this.element.outerHeight() < this.element.prop("scrollHeight");
        },
        select: function (e) {
          this.active = this.active || t(e.target).closest(".ui-menu-item");
          var i = { item: this.active };
          this.active.has(".ui-menu").length || this.collapseAll(e, !0),
            this._trigger("select", e, i);
        },
        _filterMenuItems: function (e) {
          var i = e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"),
            n = RegExp("^" + i, "i");
          return this.activeMenu
            .find(this.options.items)
            .filter(".ui-menu-item")
            .filter(function () {
              return n.test(
                t.trim(t(this).children(".ui-menu-item-wrapper").text())
              );
            });
        },
      }),
      t.widget("ui.autocomplete", {
        version: "1.12.1",
        defaultElement: "<input>",
        options: {
          appendTo: null,
          autoFocus: !1,
          delay: 300,
          minLength: 1,
          position: { my: "left top", at: "left bottom", collision: "none" },
          source: null,
          change: null,
          close: null,
          focus: null,
          open: null,
          response: null,
          search: null,
          select: null,
        },
        requestIndex: 0,
        pending: 0,
        _create: function () {
          var e,
            i,
            n,
            s = this.element[0].nodeName.toLowerCase(),
            o = "textarea" === s,
            r = "input" === s;
          (this.isMultiLine =
            o || (!r && this._isContentEditable(this.element))),
            (this.valueMethod = this.element[o || r ? "val" : "text"]),
            (this.isNewMenu = !0),
            this._addClass("ui-autocomplete-input"),
            this.element.attr("autocomplete", "off"),
            this._on(this.element, {
              keydown: function (s) {
                if (this.element.prop("readOnly"))
                  return (e = !0), (n = !0), void (i = !0);
                (e = !1), (n = !1), (i = !1);
                var o = t.ui.keyCode;
                switch (s.keyCode) {
                  case o.PAGE_UP:
                    (e = !0), this._move("previousPage", s);
                    break;
                  case o.PAGE_DOWN:
                    (e = !0), this._move("nextPage", s);
                    break;
                  case o.UP:
                    (e = !0), this._keyEvent("previous", s);
                    break;
                  case o.DOWN:
                    (e = !0), this._keyEvent("next", s);
                    break;
                  case o.ENTER:
                    this.menu.active &&
                      ((e = !0), s.preventDefault(), this.menu.select(s));
                    break;
                  case o.TAB:
                    this.menu.active && this.menu.select(s);
                    break;
                  case o.ESCAPE:
                    this.menu.element.is(":visible") &&
                      (this.isMultiLine || this._value(this.term),
                      this.close(s),
                      s.preventDefault());
                    break;
                  default:
                    (i = !0), this._searchTimeout(s);
                }
              },
              keypress: function (n) {
                if (e)
                  return (
                    (e = !1),
                    void (
                      (!this.isMultiLine || this.menu.element.is(":visible")) &&
                      n.preventDefault()
                    )
                  );
                if (!i) {
                  var s = t.ui.keyCode;
                  switch (n.keyCode) {
                    case s.PAGE_UP:
                      this._move("previousPage", n);
                      break;
                    case s.PAGE_DOWN:
                      this._move("nextPage", n);
                      break;
                    case s.UP:
                      this._keyEvent("previous", n);
                      break;
                    case s.DOWN:
                      this._keyEvent("next", n);
                  }
                }
              },
              input: function (t) {
                return n
                  ? ((n = !1), void t.preventDefault())
                  : void this._searchTimeout(t);
              },
              focus: function () {
                (this.selectedItem = null), (this.previous = this._value());
              },
              blur: function (t) {
                return this.cancelBlur
                  ? void delete this.cancelBlur
                  : (clearTimeout(this.searching),
                    this.close(t),
                    void this._change(t));
              },
            }),
            this._initSource(),
            (this.menu = t("<ul>")
              .appendTo(this._appendTo())
              .menu({ role: null })
              .hide()
              .menu("instance")),
            this._addClass(this.menu.element, "ui-autocomplete", "ui-front"),
            this._on(this.menu.element, {
              mousedown: function (e) {
                e.preventDefault(),
                  (this.cancelBlur = !0),
                  this._delay(function () {
                    delete this.cancelBlur,
                      this.element[0] !==
                        t.ui.safeActiveElement(this.document[0]) &&
                        this.element.trigger("focus");
                  });
              },
              menufocus: function (e, i) {
                var n, s;
                return this.isNewMenu &&
                  ((this.isNewMenu = !1),
                  e.originalEvent && /^mouse/.test(e.originalEvent.type))
                  ? (this.menu.blur(),
                    void this.document.one("mousemove", function () {
                      t(e.target).trigger(e.originalEvent);
                    }))
                  : ((s = i.item.data("ui-autocomplete-item")),
                    !1 !== this._trigger("focus", e, { item: s }) &&
                      e.originalEvent &&
                      /^key/.test(e.originalEvent.type) &&
                      this._value(s.value),
                    void (
                      (n = i.item.attr("aria-label") || s.value) &&
                      t.trim(n).length &&
                      (this.liveRegion.children().hide(),
                      t("<div>").text(n).appendTo(this.liveRegion))
                    ));
              },
              menuselect: function (e, i) {
                var n = i.item.data("ui-autocomplete-item"),
                  s = this.previous;
                this.element[0] !== t.ui.safeActiveElement(this.document[0]) &&
                  (this.element.trigger("focus"),
                  (this.previous = s),
                  this._delay(function () {
                    (this.previous = s), (this.selectedItem = n);
                  })),
                  !1 !== this._trigger("select", e, { item: n }) &&
                    this._value(n.value),
                  (this.term = this._value()),
                  this.close(e),
                  (this.selectedItem = n);
              },
            }),
            (this.liveRegion = t("<div>", {
              role: "status",
              "aria-live": "assertive",
              "aria-relevant": "additions",
            }).appendTo(this.document[0].body)),
            this._addClass(
              this.liveRegion,
              null,
              "ui-helper-hidden-accessible"
            ),
            this._on(this.window, {
              beforeunload: function () {
                this.element.removeAttr("autocomplete");
              },
            });
        },
        _destroy: function () {
          clearTimeout(this.searching),
            this.element.removeAttr("autocomplete"),
            this.menu.element.remove(),
            this.liveRegion.remove();
        },
        _setOption: function (t, e) {
          this._super(t, e),
            "source" === t && this._initSource(),
            "appendTo" === t && this.menu.element.appendTo(this._appendTo()),
            "disabled" === t && e && this.xhr && this.xhr.abort();
        },
        _isEventTargetInWidget: function (e) {
          var i = this.menu.element[0];
          return (
            e.target === this.element[0] ||
            e.target === i ||
            t.contains(i, e.target)
          );
        },
        _closeOnClickOutside: function (t) {
          this._isEventTargetInWidget(t) || this.close();
        },
        _appendTo: function () {
          var e = this.options.appendTo;
          return (
            e &&
              (e = e.jquery || e.nodeType ? t(e) : this.document.find(e).eq(0)),
            (e && e[0]) || (e = this.element.closest(".ui-front, dialog")),
            e.length || (e = this.document[0].body),
            e
          );
        },
        _initSource: function () {
          var e,
            i,
            n = this;
          t.isArray(this.options.source)
            ? ((e = this.options.source),
              (this.source = function (i, n) {
                n(t.ui.autocomplete.filter(e, i.term));
              }))
            : "string" == typeof this.options.source
            ? ((i = this.options.source),
              (this.source = function (e, s) {
                n.xhr && n.xhr.abort(),
                  (n.xhr = t.ajax({
                    url: i,
                    data: e,
                    dataType: "json",
                    success: function (t) {
                      s(t);
                    },
                    error: function () {
                      s([]);
                    },
                  }));
              }))
            : (this.source = this.options.source);
        },
        _searchTimeout: function (t) {
          clearTimeout(this.searching),
            (this.searching = this._delay(function () {
              var e = this.term === this._value(),
                i = this.menu.element.is(":visible"),
                n = t.altKey || t.ctrlKey || t.metaKey || t.shiftKey;
              (!e || (e && !i && !n)) &&
                ((this.selectedItem = null), this.search(null, t));
            }, this.options.delay));
        },
        search: function (t, e) {
          return (
            (t = null != t ? t : this._value()),
            (this.term = this._value()),
            t.length < this.options.minLength
              ? this.close(e)
              : !1 !== this._trigger("search", e)
              ? this._search(t)
              : void 0
          );
        },
        _search: function (t) {
          this.pending++,
            this._addClass("ui-autocomplete-loading"),
            (this.cancelSearch = !1),
            this.source({ term: t }, this._response());
        },
        _response: function () {
          var e = ++this.requestIndex;
          return t.proxy(function (t) {
            e === this.requestIndex && this.__response(t),
              this.pending--,
              this.pending || this._removeClass("ui-autocomplete-loading");
          }, this);
        },
        __response: function (t) {
          t && (t = this._normalize(t)),
            this._trigger("response", null, { content: t }),
            !this.options.disabled && t && t.length && !this.cancelSearch
              ? (this._suggest(t), this._trigger("open"))
              : this._close();
        },
        close: function (t) {
          (this.cancelSearch = !0), this._close(t);
        },
        _close: function (t) {
          this._off(this.document, "mousedown"),
            this.menu.element.is(":visible") &&
              (this.menu.element.hide(),
              this.menu.blur(),
              (this.isNewMenu = !0),
              this._trigger("close", t));
        },
        _change: function (t) {
          this.previous !== this._value() &&
            this._trigger("change", t, { item: this.selectedItem });
        },
        _normalize: function (e) {
          return e.length && e[0].label && e[0].value
            ? e
            : t.map(e, function (e) {
                return "string" == typeof e
                  ? { label: e, value: e }
                  : t.extend({}, e, {
                      label: e.label || e.value,
                      value: e.value || e.label,
                    });
              });
        },
        _suggest: function (e) {
          var i = this.menu.element.empty();
          this._renderMenu(i, e),
            (this.isNewMenu = !0),
            this.menu.refresh(),
            i.show(),
            this._resizeMenu(),
            i.position(t.extend({ of: this.element }, this.options.position)),
            this.options.autoFocus && this.menu.next(),
            this._on(this.document, { mousedown: "_closeOnClickOutside" });
        },
        _resizeMenu: function () {
          var t = this.menu.element;
          t.outerWidth(
            Math.max(t.width("").outerWidth() + 1, this.element.outerWidth())
          );
        },
        _renderMenu: function (e, i) {
          var n = this;
          t.each(i, function (t, i) {
            n._renderItemData(e, i);
          });
        },
        _renderItemData: function (t, e) {
          return this._renderItem(t, e).data("ui-autocomplete-item", e);
        },
        _renderItem: function (e, i) {
          return t("<li>").append(t("<div>").text(i.label)).appendTo(e);
        },
        _move: function (t, e) {
          return this.menu.element.is(":visible")
            ? (this.menu.isFirstItem() && /^previous/.test(t)) ||
              (this.menu.isLastItem() && /^next/.test(t))
              ? (this.isMultiLine || this._value(this.term),
                void this.menu.blur())
              : void this.menu[t](e)
            : void this.search(null, e);
        },
        widget: function () {
          return this.menu.element;
        },
        _value: function () {
          return this.valueMethod.apply(this.element, arguments);
        },
        _keyEvent: function (t, e) {
          (!this.isMultiLine || this.menu.element.is(":visible")) &&
            (this._move(t, e), e.preventDefault());
        },
        _isContentEditable: function (t) {
          if (!t.length) return !1;
          var e = t.prop("contentEditable");
          return "inherit" === e
            ? this._isContentEditable(t.parent())
            : "true" === e;
        },
      }),
      t.extend(t.ui.autocomplete, {
        escapeRegex: function (t) {
          return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
        },
        filter: function (e, i) {
          var n = RegExp(t.ui.autocomplete.escapeRegex(i), "i");
          return t.grep(e, function (t) {
            return n.test(t.label || t.value || t);
          });
        },
      }),
      t.widget("ui.autocomplete", t.ui.autocomplete, {
        options: {
          messages: {
            noResults: "No search results.",
            results: function (t) {
              return (
                t +
                (t > 1 ? " results are" : " result is") +
                " available, use up and down arrow keys to navigate."
              );
            },
          },
        },
        __response: function (e) {
          var i;
          this._superApply(arguments),
            this.options.disabled ||
              this.cancelSearch ||
              ((i =
                e && e.length
                  ? this.options.messages.results(e.length)
                  : this.options.messages.noResults),
              this.liveRegion.children().hide(),
              t("<div>").text(i).appendTo(this.liveRegion));
        },
      }),
      t.ui.autocomplete;
    var c,
      u = /ui-corner-([a-z]){2,6}/g;
    t.widget("ui.controlgroup", {
      version: "1.12.1",
      defaultElement: "<div>",
      options: {
        direction: "horizontal",
        disabled: null,
        onlyVisible: !0,
        items: {
          button:
            "input[type=button], input[type=submit], input[type=reset], button, a",
          controlgroupLabel: ".ui-controlgroup-label",
          checkboxradio: "input[type='checkbox'], input[type='radio']",
          selectmenu: "select",
          spinner: ".ui-spinner-input",
        },
      },
      _create: function () {
        this._enhance();
      },
      _enhance: function () {
        this.element.attr("role", "toolbar"), this.refresh();
      },
      _destroy: function () {
        this._callChildMethod("destroy"),
          this.childWidgets.removeData("ui-controlgroup-data"),
          this.element.removeAttr("role"),
          this.options.items.controlgroupLabel &&
            this.element
              .find(this.options.items.controlgroupLabel)
              .find(".ui-controlgroup-label-contents")
              .contents()
              .unwrap();
      },
      _initWidgets: function () {
        var e = this,
          i = [];
        t.each(this.options.items, function (n, s) {
          var o,
            r = {};
          return s
            ? "controlgroupLabel" === n
              ? ((o = e.element.find(s)).each(function () {
                  var e = t(this);
                  e.children(".ui-controlgroup-label-contents").length ||
                    e
                      .contents()
                      .wrapAll(
                        "<span class='ui-controlgroup-label-contents'></span>"
                      );
                }),
                e._addClass(
                  o,
                  null,
                  "ui-widget ui-widget-content ui-state-default"
                ),
                void (i = i.concat(o.get())))
              : void (
                  t.fn[n] &&
                  ((r = e["_" + n + "Options"]
                    ? e["_" + n + "Options"]("middle")
                    : { classes: {} }),
                  e.element.find(s).each(function () {
                    var s = t(this),
                      o = s[n]("instance"),
                      a = t.widget.extend({}, r);
                    if ("button" !== n || !s.parent(".ui-spinner").length) {
                      o || (o = s[n]()[n]("instance")),
                        o &&
                          (a.classes = e._resolveClassesValues(a.classes, o)),
                        s[n](a);
                      var l = s[n]("widget");
                      t.data(
                        l[0],
                        "ui-controlgroup-data",
                        o || s[n]("instance")
                      ),
                        i.push(l[0]);
                    }
                  }))
                )
            : void 0;
        }),
          (this.childWidgets = t(t.unique(i))),
          this._addClass(this.childWidgets, "ui-controlgroup-item");
      },
      _callChildMethod: function (e) {
        this.childWidgets.each(function () {
          var i = t(this).data("ui-controlgroup-data");
          i && i[e] && i[e]();
        });
      },
      _updateCornerClass: function (t, e) {
        var i = this._buildSimpleOptions(e, "label").classes.label;
        this._removeClass(
          t,
          null,
          "ui-corner-top ui-corner-bottom ui-corner-left ui-corner-right ui-corner-all"
        ),
          this._addClass(t, null, i);
      },
      _buildSimpleOptions: function (t, e) {
        var i = "vertical" === this.options.direction,
          n = { classes: {} };
        return (
          (n.classes[e] = {
            middle: "",
            first: "ui-corner-" + (i ? "top" : "left"),
            last: "ui-corner-" + (i ? "bottom" : "right"),
            only: "ui-corner-all",
          }[t]),
          n
        );
      },
      _spinnerOptions: function (t) {
        var e = this._buildSimpleOptions(t, "ui-spinner");
        return (
          (e.classes["ui-spinner-up"] = ""),
          (e.classes["ui-spinner-down"] = ""),
          e
        );
      },
      _buttonOptions: function (t) {
        return this._buildSimpleOptions(t, "ui-button");
      },
      _checkboxradioOptions: function (t) {
        return this._buildSimpleOptions(t, "ui-checkboxradio-label");
      },
      _selectmenuOptions: function (t) {
        var e = "vertical" === this.options.direction;
        return {
          width: !!e && "auto",
          classes: {
            middle: {
              "ui-selectmenu-button-open": "",
              "ui-selectmenu-button-closed": "",
            },
            first: {
              "ui-selectmenu-button-open": "ui-corner-" + (e ? "top" : "tl"),
              "ui-selectmenu-button-closed":
                "ui-corner-" + (e ? "top" : "left"),
            },
            last: {
              "ui-selectmenu-button-open": e ? "" : "ui-corner-tr",
              "ui-selectmenu-button-closed":
                "ui-corner-" + (e ? "bottom" : "right"),
            },
            only: {
              "ui-selectmenu-button-open": "ui-corner-top",
              "ui-selectmenu-button-closed": "ui-corner-all",
            },
          }[t],
        };
      },
      _resolveClassesValues: function (e, i) {
        var n = {};
        return (
          t.each(e, function (s) {
            var o = i.options.classes[s] || "";
            (o = t.trim(o.replace(u, ""))),
              (n[s] = (o + " " + e[s]).replace(/\s+/g, " "));
          }),
          n
        );
      },
      _setOption: function (t, e) {
        return (
          "direction" === t &&
            this._removeClass("ui-controlgroup-" + this.options.direction),
          this._super(t, e),
          "disabled" === t
            ? void this._callChildMethod(e ? "disable" : "enable")
            : void this.refresh()
        );
      },
      refresh: function () {
        var e,
          i = this;
        this._addClass(
          "ui-controlgroup ui-controlgroup-" + this.options.direction
        ),
          "horizontal" === this.options.direction &&
            this._addClass(null, "ui-helper-clearfix"),
          this._initWidgets(),
          (e = this.childWidgets),
          this.options.onlyVisible && (e = e.filter(":visible")),
          e.length &&
            (t.each(["first", "last"], function (t, n) {
              var s = e[n]().data("ui-controlgroup-data");
              if (s && i["_" + s.widgetName + "Options"]) {
                var o = i["_" + s.widgetName + "Options"](
                  1 === e.length ? "only" : n
                );
                (o.classes = i._resolveClassesValues(o.classes, s)),
                  s.element[s.widgetName](o);
              } else i._updateCornerClass(e[n](), n);
            }),
            this._callChildMethod("refresh"));
      },
    }),
      t.widget("ui.checkboxradio", [
        t.ui.formResetMixin,
        {
          version: "1.12.1",
          options: {
            disabled: null,
            label: null,
            icon: !0,
            classes: {
              "ui-checkboxradio-label": "ui-corner-all",
              "ui-checkboxradio-icon": "ui-corner-all",
            },
          },
          _getCreateOptions: function () {
            var e,
              i,
              n = this,
              s = this._super() || {};
            return (
              this._readType(),
              (i = this.element.labels()),
              (this.label = t(i[i.length - 1])),
              this.label.length ||
                t.error("No label found for checkboxradio widget"),
              (this.originalLabel = ""),
              this.label
                .contents()
                .not(this.element[0])
                .each(function () {
                  n.originalLabel +=
                    3 === this.nodeType ? t(this).text() : this.outerHTML;
                }),
              this.originalLabel && (s.label = this.originalLabel),
              null != (e = this.element[0].disabled) && (s.disabled = e),
              s
            );
          },
          _create: function () {
            var t = this.element[0].checked;
            this._bindFormResetHandler(),
              null == this.options.disabled &&
                (this.options.disabled = this.element[0].disabled),
              this._setOption("disabled", this.options.disabled),
              this._addClass("ui-checkboxradio", "ui-helper-hidden-accessible"),
              this._addClass(
                this.label,
                "ui-checkboxradio-label",
                "ui-button ui-widget"
              ),
              "radio" === this.type &&
                this._addClass(this.label, "ui-checkboxradio-radio-label"),
              this.options.label && this.options.label !== this.originalLabel
                ? this._updateLabel()
                : this.originalLabel &&
                  (this.options.label = this.originalLabel),
              this._enhance(),
              t &&
                (this._addClass(
                  this.label,
                  "ui-checkboxradio-checked",
                  "ui-state-active"
                ),
                this.icon && this._addClass(this.icon, null, "ui-state-hover")),
              this._on({
                change: "_toggleClasses",
                focus: function () {
                  this._addClass(
                    this.label,
                    null,
                    "ui-state-focus ui-visual-focus"
                  );
                },
                blur: function () {
                  this._removeClass(
                    this.label,
                    null,
                    "ui-state-focus ui-visual-focus"
                  );
                },
              });
          },
          _readType: function () {
            var e = this.element[0].nodeName.toLowerCase();
            (this.type = this.element[0].type),
              ("input" === e && /radio|checkbox/.test(this.type)) ||
                t.error(
                  "Can't create checkboxradio on element.nodeName=" +
                    e +
                    " and element.type=" +
                    this.type
                );
          },
          _enhance: function () {
            this._updateIcon(this.element[0].checked);
          },
          widget: function () {
            return this.label;
          },
          _getRadioGroup: function () {
            var e = this.element[0].name,
              i = "input[name='" + t.ui.escapeSelector(e) + "']";
            return e
              ? (this.form.length
                  ? t(this.form[0].elements).filter(i)
                  : t(i).filter(function () {
                      return 0 === t(this).form().length;
                    })
                ).not(this.element)
              : t([]);
          },
          _toggleClasses: function () {
            var e = this.element[0].checked;
            this._toggleClass(
              this.label,
              "ui-checkboxradio-checked",
              "ui-state-active",
              e
            ),
              this.options.icon &&
                "checkbox" === this.type &&
                this._toggleClass(
                  this.icon,
                  null,
                  "ui-icon-check ui-state-checked",
                  e
                )._toggleClass(this.icon, null, "ui-icon-blank", !e),
              "radio" === this.type &&
                this._getRadioGroup().each(function () {
                  var e = t(this).checkboxradio("instance");
                  e &&
                    e._removeClass(
                      e.label,
                      "ui-checkboxradio-checked",
                      "ui-state-active"
                    );
                });
          },
          _destroy: function () {
            this._unbindFormResetHandler(),
              this.icon && (this.icon.remove(), this.iconSpace.remove());
          },
          _setOption: function (t, e) {
            return "label" !== t || e
              ? (this._super(t, e),
                "disabled" === t
                  ? (this._toggleClass(
                      this.label,
                      null,
                      "ui-state-disabled",
                      e
                    ),
                    void (this.element[0].disabled = e))
                  : void this.refresh())
              : void 0;
          },
          _updateIcon: function (e) {
            var i = "ui-icon ui-icon-background ";
            this.options.icon
              ? (this.icon ||
                  ((this.icon = t("<span>")),
                  (this.iconSpace = t("<span> </span>")),
                  this._addClass(
                    this.iconSpace,
                    "ui-checkboxradio-icon-space"
                  )),
                "checkbox" === this.type
                  ? ((i += e
                      ? "ui-icon-check ui-state-checked"
                      : "ui-icon-blank"),
                    this._removeClass(
                      this.icon,
                      null,
                      e ? "ui-icon-blank" : "ui-icon-check"
                    ))
                  : (i += "ui-icon-blank"),
                this._addClass(this.icon, "ui-checkboxradio-icon", i),
                e ||
                  this._removeClass(
                    this.icon,
                    null,
                    "ui-icon-check ui-state-checked"
                  ),
                this.icon.prependTo(this.label).after(this.iconSpace))
              : void 0 !== this.icon &&
                (this.icon.remove(), this.iconSpace.remove(), delete this.icon);
          },
          _updateLabel: function () {
            var t = this.label.contents().not(this.element[0]);
            this.icon && (t = t.not(this.icon[0])),
              this.iconSpace && (t = t.not(this.iconSpace[0])),
              t.remove(),
              this.label.append(this.options.label);
          },
          refresh: function () {
            var t = this.element[0].checked,
              e = this.element[0].disabled;
            this._updateIcon(t),
              this._toggleClass(
                this.label,
                "ui-checkboxradio-checked",
                "ui-state-active",
                t
              ),
              null !== this.options.label && this._updateLabel(),
              e !== this.options.disabled && this._setOptions({ disabled: e });
          },
        },
      ]),
      t.ui.checkboxradio,
      t.widget("ui.button", {
        version: "1.12.1",
        defaultElement: "<button>",
        options: {
          classes: { "ui-button": "ui-corner-all" },
          disabled: null,
          icon: null,
          iconPosition: "beginning",
          label: null,
          showLabel: !0,
        },
        _getCreateOptions: function () {
          var t,
            e = this._super() || {};
          return (
            (this.isInput = this.element.is("input")),
            null != (t = this.element[0].disabled) && (e.disabled = t),
            (this.originalLabel = this.isInput
              ? this.element.val()
              : this.element.html()),
            this.originalLabel && (e.label = this.originalLabel),
            e
          );
        },
        _create: function () {
          !this.option.showLabel & !this.options.icon &&
            (this.options.showLabel = !0),
            null == this.options.disabled &&
              (this.options.disabled = this.element[0].disabled || !1),
            (this.hasTitle = !!this.element.attr("title")),
            this.options.label &&
              this.options.label !== this.originalLabel &&
              (this.isInput
                ? this.element.val(this.options.label)
                : this.element.html(this.options.label)),
            this._addClass("ui-button", "ui-widget"),
            this._setOption("disabled", this.options.disabled),
            this._enhance(),
            this.element.is("a") &&
              this._on({
                keyup: function (e) {
                  e.keyCode === t.ui.keyCode.SPACE &&
                    (e.preventDefault(),
                    this.element[0].click
                      ? this.element[0].click()
                      : this.element.trigger("click"));
                },
              });
        },
        _enhance: function () {
          this.element.is("button") || this.element.attr("role", "button"),
            this.options.icon &&
              (this._updateIcon("icon", this.options.icon),
              this._updateTooltip());
        },
        _updateTooltip: function () {
          (this.title = this.element.attr("title")),
            this.options.showLabel ||
              this.title ||
              this.element.attr("title", this.options.label);
        },
        _updateIcon: function (e, i) {
          var n = "iconPosition" !== e,
            s = n ? this.options.iconPosition : i,
            o = "top" === s || "bottom" === s;
          this.icon
            ? n && this._removeClass(this.icon, null, this.options.icon)
            : ((this.icon = t("<span>")),
              this._addClass(this.icon, "ui-button-icon", "ui-icon"),
              this.options.showLabel || this._addClass("ui-button-icon-only")),
            n && this._addClass(this.icon, null, i),
            this._attachIcon(s),
            o
              ? (this._addClass(this.icon, null, "ui-widget-icon-block"),
                this.iconSpace && this.iconSpace.remove())
              : (this.iconSpace ||
                  ((this.iconSpace = t("<span> </span>")),
                  this._addClass(this.iconSpace, "ui-button-icon-space")),
                this._removeClass(this.icon, null, "ui-wiget-icon-block"),
                this._attachIconSpace(s));
        },
        _destroy: function () {
          this.element.removeAttr("role"),
            this.icon && this.icon.remove(),
            this.iconSpace && this.iconSpace.remove(),
            this.hasTitle || this.element.removeAttr("title");
        },
        _attachIconSpace: function (t) {
          this.icon[/^(?:end|bottom)/.test(t) ? "before" : "after"](
            this.iconSpace
          );
        },
        _attachIcon: function (t) {
          this.element[/^(?:end|bottom)/.test(t) ? "append" : "prepend"](
            this.icon
          );
        },
        _setOptions: function (t) {
          var e = void 0 === t.showLabel ? this.options.showLabel : t.showLabel,
            i = void 0 === t.icon ? this.options.icon : t.icon;
          e || i || (t.showLabel = !0), this._super(t);
        },
        _setOption: function (t, e) {
          "icon" === t &&
            (e
              ? this._updateIcon(t, e)
              : this.icon &&
                (this.icon.remove(),
                this.iconSpace && this.iconSpace.remove())),
            "iconPosition" === t && this._updateIcon(t, e),
            "showLabel" === t &&
              (this._toggleClass("ui-button-icon-only", null, !e),
              this._updateTooltip()),
            "label" === t &&
              (this.isInput
                ? this.element.val(e)
                : (this.element.html(e),
                  this.icon &&
                    (this._attachIcon(this.options.iconPosition),
                    this._attachIconSpace(this.options.iconPosition)))),
            this._super(t, e),
            "disabled" === t &&
              (this._toggleClass(null, "ui-state-disabled", e),
              (this.element[0].disabled = e),
              e && this.element.blur());
        },
        refresh: function () {
          var t = this.element.is("input, button")
            ? this.element[0].disabled
            : this.element.hasClass("ui-button-disabled");
          t !== this.options.disabled && this._setOptions({ disabled: t }),
            this._updateTooltip();
        },
      }),
      !1 !== t.uiBackCompat &&
        (t.widget("ui.button", t.ui.button, {
          options: { text: !0, icons: { primary: null, secondary: null } },
          _create: function () {
            this.options.showLabel &&
              !this.options.text &&
              (this.options.showLabel = this.options.text),
              !this.options.showLabel &&
                this.options.text &&
                (this.options.text = this.options.showLabel),
              this.options.icon ||
              (!this.options.icons.primary && !this.options.icons.secondary)
                ? this.options.icon &&
                  (this.options.icons.primary = this.options.icon)
                : this.options.icons.primary
                ? (this.options.icon = this.options.icons.primary)
                : ((this.options.icon = this.options.icons.secondary),
                  (this.options.iconPosition = "end")),
              this._super();
          },
          _setOption: function (t, e) {
            return "text" === t
              ? void this._super("showLabel", e)
              : ("showLabel" === t && (this.options.text = e),
                "icon" === t && (this.options.icons.primary = e),
                "icons" === t &&
                  (e.primary
                    ? (this._super("icon", e.primary),
                      this._super("iconPosition", "beginning"))
                    : e.secondary &&
                      (this._super("icon", e.secondary),
                      this._super("iconPosition", "end"))),
                void this._superApply(arguments));
          },
        }),
        (t.fn.button = (function (e) {
          return function () {
            return !this.length ||
              (this.length && "INPUT" !== this[0].tagName) ||
              (this.length &&
                "INPUT" === this[0].tagName &&
                "checkbox" !== this.attr("type") &&
                "radio" !== this.attr("type"))
              ? e.apply(this, arguments)
              : (t.ui.checkboxradio || t.error("Checkboxradio widget missing"),
                0 === arguments.length
                  ? this.checkboxradio({ icon: !1 })
                  : this.checkboxradio.apply(this, arguments));
          };
        })(t.fn.button)),
        (t.fn.buttonset = function () {
          return (
            t.ui.controlgroup || t.error("Controlgroup widget missing"),
            "option" === arguments[0] &&
            "items" === arguments[1] &&
            arguments[2]
              ? this.controlgroup.apply(this, [
                  arguments[0],
                  "items.button",
                  arguments[2],
                ])
              : "option" === arguments[0] && "items" === arguments[1]
              ? this.controlgroup.apply(this, [arguments[0], "items.button"])
              : ("object" == typeof arguments[0] &&
                  arguments[0].items &&
                  (arguments[0].items = { button: arguments[0].items }),
                this.controlgroup.apply(this, arguments))
          );
        })),
      t.ui.button,
      t.extend(t.ui, { datepicker: { version: "1.12.1" } }),
      t.extend(e.prototype, {
        markerClassName: "hasDatepicker",
        maxRows: 4,
        _widgetDatepicker: function () {
          return this.dpDiv;
        },
        setDefaults: function (t) {
          return s(this._defaults, t || {}), this;
        },
        _attachDatepicker: function (e, i) {
          var n, s, o;
          (s = "div" === (n = e.nodeName.toLowerCase()) || "span" === n),
            e.id || ((this.uuid += 1), (e.id = "dp" + this.uuid)),
            ((o = this._newInst(t(e), s)).settings = t.extend({}, i || {})),
            "input" === n
              ? this._connectDatepicker(e, o)
              : s && this._inlineDatepicker(e, o);
        },
        _newInst: function (e, n) {
          return {
            id: e[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1"),
            input: e,
            selectedDay: 0,
            selectedMonth: 0,
            selectedYear: 0,
            drawMonth: 0,
            drawYear: 0,
            inline: n,
            dpDiv: n
              ? i(
                  t(
                    "<div class='" +
                      this._inlineClass +
                      " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"
                  )
                )
              : this.dpDiv,
          };
        },
        _connectDatepicker: function (e, i) {
          var n = t(e);
          (i.append = t([])),
            (i.trigger = t([])),
            n.hasClass(this.markerClassName) ||
              (this._attachments(n, i),
              n
                .addClass(this.markerClassName)
                .on("keydown", this._doKeyDown)
                .on("keypress", this._doKeyPress)
                .on("keyup", this._doKeyUp),
              this._autoSize(i),
              t.data(e, "datepicker", i),
              i.settings.disabled && this._disableDatepicker(e));
        },
        _attachments: function (e, i) {
          var n,
            s,
            o,
            r = this._get(i, "appendText"),
            a = this._get(i, "isRTL");
          i.append && i.append.remove(),
            r &&
              ((i.append = t(
                "<span class='" + this._appendClass + "'>" + r + "</span>"
              )),
              e[a ? "before" : "after"](i.append)),
            e.off("focus", this._showDatepicker),
            i.trigger && i.trigger.remove(),
            ("focus" === (n = this._get(i, "showOn")) || "both" === n) &&
              e.on("focus", this._showDatepicker),
            ("button" === n || "both" === n) &&
              ((s = this._get(i, "buttonText")),
              (o = this._get(i, "buttonImage")),
              (i.trigger = t(
                this._get(i, "buttonImageOnly")
                  ? t("<img/>")
                      .addClass(this._triggerClass)
                      .attr({ src: o, alt: s, title: s })
                  : t("<button type='button'></button>")
                      .addClass(this._triggerClass)
                      .html(
                        o ? t("<img/>").attr({ src: o, alt: s, title: s }) : s
                      )
              )),
              e[a ? "before" : "after"](i.trigger),
              i.trigger.on("click", function () {
                return (
                  t.datepicker._datepickerShowing &&
                  t.datepicker._lastInput === e[0]
                    ? t.datepicker._hideDatepicker()
                    : t.datepicker._datepickerShowing &&
                      t.datepicker._lastInput !== e[0]
                    ? (t.datepicker._hideDatepicker(),
                      t.datepicker._showDatepicker(e[0]))
                    : t.datepicker._showDatepicker(e[0]),
                  !1
                );
              }));
        },
        _autoSize: function (t) {
          if (this._get(t, "autoSize") && !t.inline) {
            var e,
              i,
              n,
              s,
              o = new Date(2009, 11, 20),
              r = this._get(t, "dateFormat");
            r.match(/[DM]/) &&
              ((e = function (t) {
                for (i = 0, n = 0, s = 0; t.length > s; s++)
                  t[s].length > i && ((i = t[s].length), (n = s));
                return n;
              }),
              o.setMonth(
                e(
                  this._get(t, r.match(/MM/) ? "monthNames" : "monthNamesShort")
                )
              ),
              o.setDate(
                e(this._get(t, r.match(/DD/) ? "dayNames" : "dayNamesShort")) +
                  20 -
                  o.getDay()
              )),
              t.input.attr("size", this._formatDate(t, o).length);
          }
        },
        _inlineDatepicker: function (e, i) {
          var n = t(e);
          n.hasClass(this.markerClassName) ||
            (n.addClass(this.markerClassName).append(i.dpDiv),
            t.data(e, "datepicker", i),
            this._setDate(i, this._getDefaultDate(i), !0),
            this._updateDatepicker(i),
            this._updateAlternate(i),
            i.settings.disabled && this._disableDatepicker(e),
            i.dpDiv.css("display", "block"));
        },
        _dialogDatepicker: function (e, i, n, o, r) {
          var a,
            l,
            h,
            c,
            u,
            d = this._dialogInst;
          return (
            d ||
              ((this.uuid += 1),
              (a = "dp" + this.uuid),
              (this._dialogInput = t(
                "<input type='text' id='" +
                  a +
                  "' style='position: absolute; top: -100px; width: 0px;'/>"
              )),
              this._dialogInput.on("keydown", this._doKeyDown),
              t("body").append(this._dialogInput),
              ((d = this._dialogInst =
                this._newInst(this._dialogInput, !1)).settings = {}),
              t.data(this._dialogInput[0], "datepicker", d)),
            s(d.settings, o || {}),
            (i = i && i.constructor === Date ? this._formatDate(d, i) : i),
            this._dialogInput.val(i),
            (this._pos = r ? (r.length ? r : [r.pageX, r.pageY]) : null),
            this._pos ||
              ((l = document.documentElement.clientWidth),
              (h = document.documentElement.clientHeight),
              (c =
                document.documentElement.scrollLeft ||
                document.body.scrollLeft),
              (u =
                document.documentElement.scrollTop || document.body.scrollTop),
              (this._pos = [l / 2 - 100 + c, h / 2 - 150 + u])),
            this._dialogInput
              .css("left", this._pos[0] + 20 + "px")
              .css("top", this._pos[1] + "px"),
            (d.settings.onSelect = n),
            (this._inDialog = !0),
            this.dpDiv.addClass(this._dialogClass),
            this._showDatepicker(this._dialogInput[0]),
            t.blockUI && t.blockUI(this.dpDiv),
            t.data(this._dialogInput[0], "datepicker", d),
            this
          );
        },
        _destroyDatepicker: function (e) {
          var i,
            n = t(e),
            s = t.data(e, "datepicker");
          n.hasClass(this.markerClassName) &&
            ((i = e.nodeName.toLowerCase()),
            t.removeData(e, "datepicker"),
            "input" === i
              ? (s.append.remove(),
                s.trigger.remove(),
                n
                  .removeClass(this.markerClassName)
                  .off("focus", this._showDatepicker)
                  .off("keydown", this._doKeyDown)
                  .off("keypress", this._doKeyPress)
                  .off("keyup", this._doKeyUp))
              : ("div" === i || "span" === i) &&
                n.removeClass(this.markerClassName).empty(),
            c === s && (c = null));
        },
        _enableDatepicker: function (e) {
          var i,
            n,
            s = t(e),
            o = t.data(e, "datepicker");
          s.hasClass(this.markerClassName) &&
            ("input" === (i = e.nodeName.toLowerCase())
              ? ((e.disabled = !1),
                o.trigger
                  .filter("button")
                  .each(function () {
                    this.disabled = !1;
                  })
                  .end()
                  .filter("img")
                  .css({ opacity: "1.0", cursor: "" }))
              : ("div" === i || "span" === i) &&
                ((n = s.children("." + this._inlineClass))
                  .children()
                  .removeClass("ui-state-disabled"),
                n
                  .find("select.ui-datepicker-month, select.ui-datepicker-year")
                  .prop("disabled", !1)),
            (this._disabledInputs = t.map(this._disabledInputs, function (t) {
              return t === e ? null : t;
            })));
        },
        _disableDatepicker: function (e) {
          var i,
            n,
            s = t(e),
            o = t.data(e, "datepicker");
          s.hasClass(this.markerClassName) &&
            ("input" === (i = e.nodeName.toLowerCase())
              ? ((e.disabled = !0),
                o.trigger
                  .filter("button")
                  .each(function () {
                    this.disabled = !0;
                  })
                  .end()
                  .filter("img")
                  .css({ opacity: "0.5", cursor: "default" }))
              : ("div" === i || "span" === i) &&
                ((n = s.children("." + this._inlineClass))
                  .children()
                  .addClass("ui-state-disabled"),
                n
                  .find("select.ui-datepicker-month, select.ui-datepicker-year")
                  .prop("disabled", !0)),
            (this._disabledInputs = t.map(this._disabledInputs, function (t) {
              return t === e ? null : t;
            })),
            (this._disabledInputs[this._disabledInputs.length] = e));
        },
        _isDisabledDatepicker: function (t) {
          if (!t) return !1;
          for (var e = 0; this._disabledInputs.length > e; e++)
            if (this._disabledInputs[e] === t) return !0;
          return !1;
        },
        _getInst: function (e) {
          try {
            return t.data(e, "datepicker");
          } catch (t) {
            throw "Missing instance data for this datepicker";
          }
        },
        _optionDatepicker: function (e, i, n) {
          var o,
            r,
            a,
            l,
            h = this._getInst(e);
          return 2 === arguments.length && "string" == typeof i
            ? "defaults" === i
              ? t.extend({}, t.datepicker._defaults)
              : h
              ? "all" === i
                ? t.extend({}, h.settings)
                : this._get(h, i)
              : null
            : ((o = i || {}),
              "string" == typeof i && ((o = {})[i] = n),
              void (
                h &&
                (this._curInst === h && this._hideDatepicker(),
                (r = this._getDateDatepicker(e, !0)),
                (a = this._getMinMaxDate(h, "min")),
                (l = this._getMinMaxDate(h, "max")),
                s(h.settings, o),
                null !== a &&
                  void 0 !== o.dateFormat &&
                  void 0 === o.minDate &&
                  (h.settings.minDate = this._formatDate(h, a)),
                null !== l &&
                  void 0 !== o.dateFormat &&
                  void 0 === o.maxDate &&
                  (h.settings.maxDate = this._formatDate(h, l)),
                "disabled" in o &&
                  (o.disabled
                    ? this._disableDatepicker(e)
                    : this._enableDatepicker(e)),
                this._attachments(t(e), h),
                this._autoSize(h),
                this._setDate(h, r),
                this._updateAlternate(h),
                this._updateDatepicker(h))
              ));
        },
        _changeDatepicker: function (t, e, i) {
          this._optionDatepicker(t, e, i);
        },
        _refreshDatepicker: function (t) {
          var e = this._getInst(t);
          e && this._updateDatepicker(e);
        },
        _setDateDatepicker: function (t, e) {
          var i = this._getInst(t);
          i &&
            (this._setDate(i, e),
            this._updateDatepicker(i),
            this._updateAlternate(i));
        },
        _getDateDatepicker: function (t, e) {
          var i = this._getInst(t);
          return (
            i && !i.inline && this._setDateFromField(i, e),
            i ? this._getDate(i) : null
          );
        },
        _doKeyDown: function (e) {
          var i,
            n,
            s,
            o = t.datepicker._getInst(e.target),
            r = !0,
            a = o.dpDiv.is(".ui-datepicker-rtl");
          if (((o._keyEvent = !0), t.datepicker._datepickerShowing))
            switch (e.keyCode) {
              case 9:
                t.datepicker._hideDatepicker(), (r = !1);
                break;
              case 13:
                return (
                  (s = t(
                    "td." +
                      t.datepicker._dayOverClass +
                      ":not(." +
                      t.datepicker._currentClass +
                      ")",
                    o.dpDiv
                  ))[0] &&
                    t.datepicker._selectDay(
                      e.target,
                      o.selectedMonth,
                      o.selectedYear,
                      s[0]
                    ),
                  (i = t.datepicker._get(o, "onSelect"))
                    ? ((n = t.datepicker._formatDate(o)),
                      i.apply(o.input ? o.input[0] : null, [n, o]))
                    : t.datepicker._hideDatepicker(),
                  !1
                );
              case 27:
                t.datepicker._hideDatepicker();
                break;
              case 33:
                t.datepicker._adjustDate(
                  e.target,
                  e.ctrlKey
                    ? -t.datepicker._get(o, "stepBigMonths")
                    : -t.datepicker._get(o, "stepMonths"),
                  "M"
                );
                break;
              case 34:
                t.datepicker._adjustDate(
                  e.target,
                  e.ctrlKey
                    ? +t.datepicker._get(o, "stepBigMonths")
                    : +t.datepicker._get(o, "stepMonths"),
                  "M"
                );
                break;
              case 35:
                (e.ctrlKey || e.metaKey) && t.datepicker._clearDate(e.target),
                  (r = e.ctrlKey || e.metaKey);
                break;
              case 36:
                (e.ctrlKey || e.metaKey) && t.datepicker._gotoToday(e.target),
                  (r = e.ctrlKey || e.metaKey);
                break;
              case 37:
                (e.ctrlKey || e.metaKey) &&
                  t.datepicker._adjustDate(e.target, a ? 1 : -1, "D"),
                  (r = e.ctrlKey || e.metaKey),
                  e.originalEvent.altKey &&
                    t.datepicker._adjustDate(
                      e.target,
                      e.ctrlKey
                        ? -t.datepicker._get(o, "stepBigMonths")
                        : -t.datepicker._get(o, "stepMonths"),
                      "M"
                    );
                break;
              case 38:
                (e.ctrlKey || e.metaKey) &&
                  t.datepicker._adjustDate(e.target, -7, "D"),
                  (r = e.ctrlKey || e.metaKey);
                break;
              case 39:
                (e.ctrlKey || e.metaKey) &&
                  t.datepicker._adjustDate(e.target, a ? -1 : 1, "D"),
                  (r = e.ctrlKey || e.metaKey),
                  e.originalEvent.altKey &&
                    t.datepicker._adjustDate(
                      e.target,
                      e.ctrlKey
                        ? +t.datepicker._get(o, "stepBigMonths")
                        : +t.datepicker._get(o, "stepMonths"),
                      "M"
                    );
                break;
              case 40:
                (e.ctrlKey || e.metaKey) &&
                  t.datepicker._adjustDate(e.target, 7, "D"),
                  (r = e.ctrlKey || e.metaKey);
                break;
              default:
                r = !1;
            }
          else
            36 === e.keyCode && e.ctrlKey
              ? t.datepicker._showDatepicker(this)
              : (r = !1);
          r && (e.preventDefault(), e.stopPropagation());
        },
        _doKeyPress: function (e) {
          var i,
            n,
            s = t.datepicker._getInst(e.target);
          return t.datepicker._get(s, "constrainInput")
            ? ((i = t.datepicker._possibleChars(
                t.datepicker._get(s, "dateFormat")
              )),
              (n = String.fromCharCode(
                null == e.charCode ? e.keyCode : e.charCode
              )),
              e.ctrlKey || e.metaKey || " " > n || !i || i.indexOf(n) > -1)
            : void 0;
        },
        _doKeyUp: function (e) {
          var i = t.datepicker._getInst(e.target);
          if (i.input.val() !== i.lastVal)
            try {
              t.datepicker.parseDate(
                t.datepicker._get(i, "dateFormat"),
                i.input ? i.input.val() : null,
                t.datepicker._getFormatConfig(i)
              ) &&
                (t.datepicker._setDateFromField(i),
                t.datepicker._updateAlternate(i),
                t.datepicker._updateDatepicker(i));
            } catch (t) {}
          return !0;
        },
        _showDatepicker: function (e) {
          var i, n, o, r, a, l, h;
          ("input" !== (e = e.target || e).nodeName.toLowerCase() &&
            (e = t("input", e.parentNode)[0]),
          t.datepicker._isDisabledDatepicker(e) ||
            t.datepicker._lastInput === e) ||
            ((i = t.datepicker._getInst(e)),
            t.datepicker._curInst &&
              t.datepicker._curInst !== i &&
              (t.datepicker._curInst.dpDiv.stop(!0, !0),
              i &&
                t.datepicker._datepickerShowing &&
                t.datepicker._hideDatepicker(t.datepicker._curInst.input[0])),
            !1 !==
              (o = (n = t.datepicker._get(i, "beforeShow"))
                ? n.apply(e, [e, i])
                : {}) &&
              (s(i.settings, o),
              (i.lastVal = null),
              (t.datepicker._lastInput = e),
              t.datepicker._setDateFromField(i),
              t.datepicker._inDialog && (e.value = ""),
              t.datepicker._pos ||
                ((t.datepicker._pos = t.datepicker._findPos(e)),
                (t.datepicker._pos[1] += e.offsetHeight)),
              (r = !1),
              t(e)
                .parents()
                .each(function () {
                  return !(r |= "fixed" === t(this).css("position"));
                }),
              (a = { left: t.datepicker._pos[0], top: t.datepicker._pos[1] }),
              (t.datepicker._pos = null),
              i.dpDiv.empty(),
              i.dpDiv.css({
                position: "absolute",
                display: "block",
                top: "-1000px",
              }),
              t.datepicker._updateDatepicker(i),
              (a = t.datepicker._checkOffset(i, a, r)),
              i.dpDiv.css({
                position:
                  t.datepicker._inDialog && t.blockUI
                    ? "static"
                    : r
                    ? "fixed"
                    : "absolute",
                display: "none",
                left: a.left + "px",
                top: a.top + "px",
              }),
              i.inline ||
                ((l = t.datepicker._get(i, "showAnim")),
                (h = t.datepicker._get(i, "duration")),
                i.dpDiv.css(
                  "z-index",
                  (function (t) {
                    for (var e, i; t.length && t[0] !== document; ) {
                      if (
                        ("absolute" === (e = t.css("position")) ||
                          "relative" === e ||
                          "fixed" === e) &&
                        ((i = parseInt(t.css("zIndex"), 10)),
                        !isNaN(i) && 0 !== i)
                      )
                        return i;
                      t = t.parent();
                    }
                    return 0;
                  })(t(e)) + 1
                ),
                (t.datepicker._datepickerShowing = !0),
                t.effects && t.effects.effect[l]
                  ? i.dpDiv.show(l, t.datepicker._get(i, "showOptions"), h)
                  : i.dpDiv[l || "show"](l ? h : null),
                t.datepicker._shouldFocusInput(i) && i.input.trigger("focus"),
                (t.datepicker._curInst = i))));
        },
        _updateDatepicker: function (e) {
          (this.maxRows = 4),
            (c = e),
            e.dpDiv.empty().append(this._generateHTML(e)),
            this._attachHandlers(e);
          var i,
            s = this._getNumberOfMonths(e),
            o = s[1],
            r = e.dpDiv.find("." + this._dayOverClass + " a");
          r.length > 0 && n.apply(r.get(0)),
            e.dpDiv
              .removeClass(
                "ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4"
              )
              .width(""),
            o > 1 &&
              e.dpDiv
                .addClass("ui-datepicker-multi-" + o)
                .css("width", 17 * o + "em"),
            e.dpDiv[(1 !== s[0] || 1 !== s[1] ? "add" : "remove") + "Class"](
              "ui-datepicker-multi"
            ),
            e.dpDiv[(this._get(e, "isRTL") ? "add" : "remove") + "Class"](
              "ui-datepicker-rtl"
            ),
            e === t.datepicker._curInst &&
              t.datepicker._datepickerShowing &&
              t.datepicker._shouldFocusInput(e) &&
              e.input.trigger("focus"),
            e.yearshtml &&
              ((i = e.yearshtml),
              setTimeout(function () {
                i === e.yearshtml &&
                  e.yearshtml &&
                  e.dpDiv
                    .find("select.ui-datepicker-year:first")
                    .replaceWith(e.yearshtml),
                  (i = e.yearshtml = null);
              }, 0));
        },
        _shouldFocusInput: function (t) {
          return (
            t.input &&
            t.input.is(":visible") &&
            !t.input.is(":disabled") &&
            !t.input.is(":focus")
          );
        },
        _checkOffset: function (e, i, n) {
          var s = e.dpDiv.outerWidth(),
            o = e.dpDiv.outerHeight(),
            r = e.input ? e.input.outerWidth() : 0,
            a = e.input ? e.input.outerHeight() : 0,
            l =
              document.documentElement.clientWidth +
              (n ? 0 : t(document).scrollLeft()),
            h =
              document.documentElement.clientHeight +
              (n ? 0 : t(document).scrollTop());
          return (
            (i.left -= this._get(e, "isRTL") ? s - r : 0),
            (i.left -=
              n && i.left === e.input.offset().left
                ? t(document).scrollLeft()
                : 0),
            (i.top -=
              n && i.top === e.input.offset().top + a
                ? t(document).scrollTop()
                : 0),
            (i.left -= Math.min(
              i.left,
              i.left + s > l && l > s ? Math.abs(i.left + s - l) : 0
            )),
            (i.top -= Math.min(
              i.top,
              i.top + o > h && h > o ? Math.abs(o + a) : 0
            )),
            i
          );
        },
        _findPos: function (e) {
          for (
            var i, n = this._getInst(e), s = this._get(n, "isRTL");
            e &&
            ("hidden" === e.type ||
              1 !== e.nodeType ||
              t.expr.filters.hidden(e));

          )
            e = e[s ? "previousSibling" : "nextSibling"];
          return [(i = t(e).offset()).left, i.top];
        },
        _hideDatepicker: function (e) {
          var i,
            n,
            s,
            o,
            r = this._curInst;
          !r ||
            (e && r !== t.data(e, "datepicker")) ||
            (this._datepickerShowing &&
              ((i = this._get(r, "showAnim")),
              (n = this._get(r, "duration")),
              (s = function () {
                t.datepicker._tidyDialog(r);
              }),
              t.effects && (t.effects.effect[i] || t.effects[i])
                ? r.dpDiv.hide(i, t.datepicker._get(r, "showOptions"), n, s)
                : r.dpDiv[
                    "slideDown" === i
                      ? "slideUp"
                      : "fadeIn" === i
                      ? "fadeOut"
                      : "hide"
                  ](i ? n : null, s),
              i || s(),
              (this._datepickerShowing = !1),
              (o = this._get(r, "onClose")) &&
                o.apply(r.input ? r.input[0] : null, [
                  r.input ? r.input.val() : "",
                  r,
                ]),
              (this._lastInput = null),
              this._inDialog &&
                (this._dialogInput.css({
                  position: "absolute",
                  left: "0",
                  top: "-100px",
                }),
                t.blockUI && (t.unblockUI(), t("body").append(this.dpDiv))),
              (this._inDialog = !1)));
        },
        _tidyDialog: function (t) {
          t.dpDiv.removeClass(this._dialogClass).off(".ui-datepicker-calendar");
        },
        _checkExternalClick: function (e) {
          if (t.datepicker._curInst) {
            var i = t(e.target),
              n = t.datepicker._getInst(i[0]);
            ((i[0].id !== t.datepicker._mainDivId &&
              0 === i.parents("#" + t.datepicker._mainDivId).length &&
              !i.hasClass(t.datepicker.markerClassName) &&
              !i.closest("." + t.datepicker._triggerClass).length &&
              t.datepicker._datepickerShowing &&
              (!t.datepicker._inDialog || !t.blockUI)) ||
              (i.hasClass(t.datepicker.markerClassName) &&
                t.datepicker._curInst !== n)) &&
              t.datepicker._hideDatepicker();
          }
        },
        _adjustDate: function (e, i, n) {
          var s = t(e),
            o = this._getInst(s[0]);
          this._isDisabledDatepicker(s[0]) ||
            (this._adjustInstDate(
              o,
              i + ("M" === n ? this._get(o, "showCurrentAtPos") : 0),
              n
            ),
            this._updateDatepicker(o));
        },
        _gotoToday: function (e) {
          var i,
            n = t(e),
            s = this._getInst(n[0]);
          this._get(s, "gotoCurrent") && s.currentDay
            ? ((s.selectedDay = s.currentDay),
              (s.drawMonth = s.selectedMonth = s.currentMonth),
              (s.drawYear = s.selectedYear = s.currentYear))
            : ((i = new Date()),
              (s.selectedDay = i.getDate()),
              (s.drawMonth = s.selectedMonth = i.getMonth()),
              (s.drawYear = s.selectedYear = i.getFullYear())),
            this._notifyChange(s),
            this._adjustDate(n);
        },
        _selectMonthYear: function (e, i, n) {
          var s = t(e),
            o = this._getInst(s[0]);
          (o["selected" + ("M" === n ? "Month" : "Year")] = o[
            "draw" + ("M" === n ? "Month" : "Year")
          ] =
            parseInt(i.options[i.selectedIndex].value, 10)),
            this._notifyChange(o),
            this._adjustDate(s);
        },
        _selectDay: function (e, i, n, s) {
          var o,
            r = t(e);
          t(s).hasClass(this._unselectableClass) ||
            this._isDisabledDatepicker(r[0]) ||
            (((o = this._getInst(r[0])).selectedDay = o.currentDay =
              t("a", s).html()),
            (o.selectedMonth = o.currentMonth = i),
            (o.selectedYear = o.currentYear = n),
            this._selectDate(
              e,
              this._formatDate(o, o.currentDay, o.currentMonth, o.currentYear)
            ));
        },
        _clearDate: function (e) {
          var i = t(e);
          this._selectDate(i, "");
        },
        _selectDate: function (e, i) {
          var n,
            s = t(e),
            o = this._getInst(s[0]);
          (i = null != i ? i : this._formatDate(o)),
            o.input && o.input.val(i),
            this._updateAlternate(o),
            (n = this._get(o, "onSelect"))
              ? n.apply(o.input ? o.input[0] : null, [i, o])
              : o.input && o.input.trigger("change"),
            o.inline
              ? this._updateDatepicker(o)
              : (this._hideDatepicker(),
                (this._lastInput = o.input[0]),
                "object" != typeof o.input[0] && o.input.trigger("focus"),
                (this._lastInput = null));
        },
        _updateAlternate: function (e) {
          var i,
            n,
            s,
            o = this._get(e, "altField");
          o &&
            ((i = this._get(e, "altFormat") || this._get(e, "dateFormat")),
            (n = this._getDate(e)),
            (s = this.formatDate(i, n, this._getFormatConfig(e))),
            t(o).val(s));
        },
        noWeekends: function (t) {
          var e = t.getDay();
          return [e > 0 && 6 > e, ""];
        },
        iso8601Week: function (t) {
          var e,
            i = new Date(t.getTime());
          return (
            i.setDate(i.getDate() + 4 - (i.getDay() || 7)),
            (e = i.getTime()),
            i.setMonth(0),
            i.setDate(1),
            Math.floor(Math.round((e - i) / 864e5) / 7) + 1
          );
        },
        parseDate: function (e, i, n) {
          if (null == e || null == i) throw "Invalid arguments";
          if ("" === (i = "object" == typeof i ? "" + i : i + "")) return null;
          var s,
            o,
            r,
            a,
            l = 0,
            h =
              (n ? n.shortYearCutoff : null) || this._defaults.shortYearCutoff,
            c =
              "string" != typeof h
                ? h
                : (new Date().getFullYear() % 100) + parseInt(h, 10),
            u = (n ? n.dayNamesShort : null) || this._defaults.dayNamesShort,
            d = (n ? n.dayNames : null) || this._defaults.dayNames,
            p =
              (n ? n.monthNamesShort : null) || this._defaults.monthNamesShort,
            f = (n ? n.monthNames : null) || this._defaults.monthNames,
            g = -1,
            m = -1,
            v = -1,
            _ = -1,
            y = !1,
            b = function (t) {
              var i = e.length > s + 1 && e.charAt(s + 1) === t;
              return i && s++, i;
            },
            w = function (t) {
              var e = b(t),
                n =
                  "@" === t
                    ? 14
                    : "!" === t
                    ? 20
                    : "y" === t && e
                    ? 4
                    : "o" === t
                    ? 3
                    : 2,
                s = RegExp("^\\d{" + ("y" === t ? n : 1) + "," + n + "}"),
                o = i.substring(l).match(s);
              if (!o) throw "Missing number at position " + l;
              return (l += o[0].length), parseInt(o[0], 10);
            },
            x = function (e, n, s) {
              var o = -1,
                r = t
                  .map(b(e) ? s : n, function (t, e) {
                    return [[e, t]];
                  })
                  .sort(function (t, e) {
                    return -(t[1].length - e[1].length);
                  });
              if (
                (t.each(r, function (t, e) {
                  var n = e[1];
                  return i.substr(l, n.length).toLowerCase() === n.toLowerCase()
                    ? ((o = e[0]), (l += n.length), !1)
                    : void 0;
                }),
                -1 !== o)
              )
                return o + 1;
              throw "Unknown name at position " + l;
            },
            C = function () {
              if (i.charAt(l) !== e.charAt(s))
                throw "Unexpected literal at position " + l;
              l++;
            };
          for (s = 0; e.length > s; s++)
            if (y) "'" !== e.charAt(s) || b("'") ? C() : (y = !1);
            else
              switch (e.charAt(s)) {
                case "d":
                  v = w("d");
                  break;
                case "D":
                  x("D", u, d);
                  break;
                case "o":
                  _ = w("o");
                  break;
                case "m":
                  m = w("m");
                  break;
                case "M":
                  m = x("M", p, f);
                  break;
                case "y":
                  g = w("y");
                  break;
                case "@":
                  (g = (a = new Date(w("@"))).getFullYear()),
                    (m = a.getMonth() + 1),
                    (v = a.getDate());
                  break;
                case "!":
                  (g = (a = new Date(
                    (w("!") - this._ticksTo1970) / 1e4
                  )).getFullYear()),
                    (m = a.getMonth() + 1),
                    (v = a.getDate());
                  break;
                case "'":
                  b("'") ? C() : (y = !0);
                  break;
                default:
                  C();
              }
          if (i.length > l && ((r = i.substr(l)), !/^\s+/.test(r)))
            throw "Extra/unparsed characters found in date: " + r;
          if (
            (-1 === g
              ? (g = new Date().getFullYear())
              : 100 > g &&
                (g +=
                  new Date().getFullYear() -
                  (new Date().getFullYear() % 100) +
                  (c >= g ? 0 : -100)),
            _ > -1)
          )
            for (m = 1, v = _; !((o = this._getDaysInMonth(g, m - 1)) >= v); )
              m++, (v -= o);
          if (
            (a = this._daylightSavingAdjust(
              new Date(g, m - 1, v)
            )).getFullYear() !== g ||
            a.getMonth() + 1 !== m ||
            a.getDate() !== v
          )
            throw "Invalid date";
          return a;
        },
        ATOM: "yy-mm-dd",
        COOKIE: "D, dd M yy",
        ISO_8601: "yy-mm-dd",
        RFC_822: "D, d M y",
        RFC_850: "DD, dd-M-y",
        RFC_1036: "D, d M y",
        RFC_1123: "D, d M yy",
        RFC_2822: "D, d M yy",
        RSS: "D, d M y",
        TICKS: "!",
        TIMESTAMP: "@",
        W3C: "yy-mm-dd",
        _ticksTo1970:
          864e9 *
          (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)),
        formatDate: function (t, e, i) {
          if (!e) return "";
          var n,
            s = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort,
            o = (i ? i.dayNames : null) || this._defaults.dayNames,
            r =
              (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort,
            a = (i ? i.monthNames : null) || this._defaults.monthNames,
            l = function (e) {
              var i = t.length > n + 1 && t.charAt(n + 1) === e;
              return i && n++, i;
            },
            h = function (t, e, i) {
              var n = "" + e;
              if (l(t)) for (; i > n.length; ) n = "0" + n;
              return n;
            },
            c = function (t, e, i, n) {
              return l(t) ? n[e] : i[e];
            },
            u = "",
            d = !1;
          if (e)
            for (n = 0; t.length > n; n++)
              if (d)
                "'" !== t.charAt(n) || l("'") ? (u += t.charAt(n)) : (d = !1);
              else
                switch (t.charAt(n)) {
                  case "d":
                    u += h("d", e.getDate(), 2);
                    break;
                  case "D":
                    u += c("D", e.getDay(), s, o);
                    break;
                  case "o":
                    u += h(
                      "o",
                      Math.round(
                        (new Date(
                          e.getFullYear(),
                          e.getMonth(),
                          e.getDate()
                        ).getTime() -
                          new Date(e.getFullYear(), 0, 0).getTime()) /
                          864e5
                      ),
                      3
                    );
                    break;
                  case "m":
                    u += h("m", e.getMonth() + 1, 2);
                    break;
                  case "M":
                    u += c("M", e.getMonth(), r, a);
                    break;
                  case "y":
                    u += l("y")
                      ? e.getFullYear()
                      : (10 > e.getFullYear() % 100 ? "0" : "") +
                        (e.getFullYear() % 100);
                    break;
                  case "@":
                    u += e.getTime();
                    break;
                  case "!":
                    u += 1e4 * e.getTime() + this._ticksTo1970;
                    break;
                  case "'":
                    l("'") ? (u += "'") : (d = !0);
                    break;
                  default:
                    u += t.charAt(n);
                }
          return u;
        },
        _possibleChars: function (t) {
          var e,
            i = "",
            n = !1,
            s = function (i) {
              var n = t.length > e + 1 && t.charAt(e + 1) === i;
              return n && e++, n;
            };
          for (e = 0; t.length > e; e++)
            if (n)
              "'" !== t.charAt(e) || s("'") ? (i += t.charAt(e)) : (n = !1);
            else
              switch (t.charAt(e)) {
                case "d":
                case "m":
                case "y":
                case "@":
                  i += "0123456789";
                  break;
                case "D":
                case "M":
                  return null;
                case "'":
                  s("'") ? (i += "'") : (n = !0);
                  break;
                default:
                  i += t.charAt(e);
              }
          return i;
        },
        _get: function (t, e) {
          return void 0 !== t.settings[e] ? t.settings[e] : this._defaults[e];
        },
        _setDateFromField: function (t, e) {
          if (t.input.val() !== t.lastVal) {
            var i = this._get(t, "dateFormat"),
              n = (t.lastVal = t.input ? t.input.val() : null),
              s = this._getDefaultDate(t),
              o = s,
              r = this._getFormatConfig(t);
            try {
              o = this.parseDate(i, n, r) || s;
            } catch (t) {
              n = e ? "" : n;
            }
            (t.selectedDay = o.getDate()),
              (t.drawMonth = t.selectedMonth = o.getMonth()),
              (t.drawYear = t.selectedYear = o.getFullYear()),
              (t.currentDay = n ? o.getDate() : 0),
              (t.currentMonth = n ? o.getMonth() : 0),
              (t.currentYear = n ? o.getFullYear() : 0),
              this._adjustInstDate(t);
          }
        },
        _getDefaultDate: function (t) {
          return this._restrictMinMax(
            t,
            this._determineDate(t, this._get(t, "defaultDate"), new Date())
          );
        },
        _determineDate: function (e, i, n) {
          var s =
            null == i || "" === i
              ? n
              : "string" == typeof i
              ? (function (i) {
                  try {
                    return t.datepicker.parseDate(
                      t.datepicker._get(e, "dateFormat"),
                      i,
                      t.datepicker._getFormatConfig(e)
                    );
                  } catch (t) {}
                  for (
                    var n =
                        (i.toLowerCase().match(/^c/)
                          ? t.datepicker._getDate(e)
                          : null) || new Date(),
                      s = n.getFullYear(),
                      o = n.getMonth(),
                      r = n.getDate(),
                      a = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,
                      l = a.exec(i);
                    l;

                  ) {
                    switch (l[2] || "d") {
                      case "d":
                      case "D":
                        r += parseInt(l[1], 10);
                        break;
                      case "w":
                      case "W":
                        r += 7 * parseInt(l[1], 10);
                        break;
                      case "m":
                      case "M":
                        (o += parseInt(l[1], 10)),
                          (r = Math.min(r, t.datepicker._getDaysInMonth(s, o)));
                        break;
                      case "y":
                      case "Y":
                        (s += parseInt(l[1], 10)),
                          (r = Math.min(r, t.datepicker._getDaysInMonth(s, o)));
                    }
                    l = a.exec(i);
                  }
                  return new Date(s, o, r);
                })(i)
              : "number" == typeof i
              ? isNaN(i)
                ? n
                : (function (t) {
                    var e = new Date();
                    return e.setDate(e.getDate() + t), e;
                  })(i)
              : new Date(i.getTime());
          return (
            (s = s && "Invalid Date" == "" + s ? n : s) &&
              (s.setHours(0),
              s.setMinutes(0),
              s.setSeconds(0),
              s.setMilliseconds(0)),
            this._daylightSavingAdjust(s)
          );
        },
        _daylightSavingAdjust: function (t) {
          return t
            ? (t.setHours(t.getHours() > 12 ? t.getHours() + 2 : 0), t)
            : null;
        },
        _setDate: function (t, e, i) {
          var n = !e,
            s = t.selectedMonth,
            o = t.selectedYear,
            r = this._restrictMinMax(t, this._determineDate(t, e, new Date()));
          (t.selectedDay = t.currentDay = r.getDate()),
            (t.drawMonth = t.selectedMonth = t.currentMonth = r.getMonth()),
            (t.drawYear = t.selectedYear = t.currentYear = r.getFullYear()),
            (s === t.selectedMonth && o === t.selectedYear) ||
              i ||
              this._notifyChange(t),
            this._adjustInstDate(t),
            t.input && t.input.val(n ? "" : this._formatDate(t));
        },
        _getDate: function (t) {
          return !t.currentYear || (t.input && "" === t.input.val())
            ? null
            : this._daylightSavingAdjust(
                new Date(t.currentYear, t.currentMonth, t.currentDay)
              );
        },
        _attachHandlers: function (e) {
          var i = this._get(e, "stepMonths"),
            n = "#" + e.id.replace(/\\\\/g, "\\");
          e.dpDiv.find("[data-handler]").map(function () {
            var e = {
              prev: function () {
                t.datepicker._adjustDate(n, -i, "M");
              },
              next: function () {
                t.datepicker._adjustDate(n, +i, "M");
              },
              hide: function () {
                t.datepicker._hideDatepicker();
              },
              today: function () {
                t.datepicker._gotoToday(n);
              },
              selectDay: function () {
                return (
                  t.datepicker._selectDay(
                    n,
                    +this.getAttribute("data-month"),
                    +this.getAttribute("data-year"),
                    this
                  ),
                  !1
                );
              },
              selectMonth: function () {
                return t.datepicker._selectMonthYear(n, this, "M"), !1;
              },
              selectYear: function () {
                return t.datepicker._selectMonthYear(n, this, "Y"), !1;
              },
            };
            t(this).on(
              this.getAttribute("data-event"),
              e[this.getAttribute("data-handler")]
            );
          });
        },
        _generateHTML: function (t) {
          var e,
            i,
            n,
            s,
            o,
            r,
            a,
            l,
            h,
            c,
            u,
            d,
            p,
            f,
            g,
            m,
            v,
            _,
            y,
            b,
            w,
            x,
            C,
            k,
            T,
            D,
            S,
            E,
            I,
            A,
            P,
            O,
            N,
            M,
            H,
            z,
            L,
            W,
            j,
            R = new Date(),
            F = this._daylightSavingAdjust(
              new Date(R.getFullYear(), R.getMonth(), R.getDate())
            ),
            q = this._get(t, "isRTL"),
            B = this._get(t, "showButtonPanel"),
            $ = this._get(t, "hideIfNoPrevNext"),
            U = this._get(t, "navigationAsDateFormat"),
            Y = this._getNumberOfMonths(t),
            K = this._get(t, "showCurrentAtPos"),
            V = this._get(t, "stepMonths"),
            Q = 1 !== Y[0] || 1 !== Y[1],
            X = this._daylightSavingAdjust(
              t.currentDay
                ? new Date(t.currentYear, t.currentMonth, t.currentDay)
                : new Date(9999, 9, 9)
            ),
            G = this._getMinMaxDate(t, "min"),
            Z = this._getMinMaxDate(t, "max"),
            J = t.drawMonth - K,
            tt = t.drawYear;
          if ((0 > J && ((J += 12), tt--), Z))
            for (
              e = this._daylightSavingAdjust(
                new Date(
                  Z.getFullYear(),
                  Z.getMonth() - Y[0] * Y[1] + 1,
                  Z.getDate()
                )
              ),
                e = G && G > e ? G : e;
              this._daylightSavingAdjust(new Date(tt, J, 1)) > e;

            )
              0 > --J && ((J = 11), tt--);
          for (
            t.drawMonth = J,
              t.drawYear = tt,
              i = this._get(t, "prevText"),
              i = U
                ? this.formatDate(
                    i,
                    this._daylightSavingAdjust(new Date(tt, J - V, 1)),
                    this._getFormatConfig(t)
                  )
                : i,
              n = this._canAdjustMonth(t, -1, tt, J)
                ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" +
                  i +
                  "'><span class='ui-icon ui-icon-circle-triangle-" +
                  (q ? "e" : "w") +
                  "'>" +
                  i +
                  "</span></a>"
                : $
                ? ""
                : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" +
                  i +
                  "'><span class='ui-icon ui-icon-circle-triangle-" +
                  (q ? "e" : "w") +
                  "'>" +
                  i +
                  "</span></a>",
              s = this._get(t, "nextText"),
              s = U
                ? this.formatDate(
                    s,
                    this._daylightSavingAdjust(new Date(tt, J + V, 1)),
                    this._getFormatConfig(t)
                  )
                : s,
              o = this._canAdjustMonth(t, 1, tt, J)
                ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" +
                  s +
                  "'><span class='ui-icon ui-icon-circle-triangle-" +
                  (q ? "w" : "e") +
                  "'>" +
                  s +
                  "</span></a>"
                : $
                ? ""
                : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" +
                  s +
                  "'><span class='ui-icon ui-icon-circle-triangle-" +
                  (q ? "w" : "e") +
                  "'>" +
                  s +
                  "</span></a>",
              r = this._get(t, "currentText"),
              a = this._get(t, "gotoCurrent") && t.currentDay ? X : F,
              r = U ? this.formatDate(r, a, this._getFormatConfig(t)) : r,
              l = t.inline
                ? ""
                : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" +
                  this._get(t, "closeText") +
                  "</button>",
              h = B
                ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" +
                  (q ? l : "") +
                  (this._isInRange(t, a)
                    ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" +
                      r +
                      "</button>"
                    : "") +
                  (q ? "" : l) +
                  "</div>"
                : "",
              c = parseInt(this._get(t, "firstDay"), 10),
              c = isNaN(c) ? 0 : c,
              u = this._get(t, "showWeek"),
              d = this._get(t, "dayNames"),
              p = this._get(t, "dayNamesMin"),
              f = this._get(t, "monthNames"),
              g = this._get(t, "monthNamesShort"),
              m = this._get(t, "beforeShowDay"),
              v = this._get(t, "showOtherMonths"),
              _ = this._get(t, "selectOtherMonths"),
              y = this._getDefaultDate(t),
              b = "",
              x = 0;
            Y[0] > x;
            x++
          ) {
            for (C = "", this.maxRows = 4, k = 0; Y[1] > k; k++) {
              if (
                ((T = this._daylightSavingAdjust(
                  new Date(tt, J, t.selectedDay)
                )),
                (D = " ui-corner-all"),
                (S = ""),
                Q)
              ) {
                if (((S += "<div class='ui-datepicker-group"), Y[1] > 1))
                  switch (k) {
                    case 0:
                      (S += " ui-datepicker-group-first"),
                        (D = " ui-corner-" + (q ? "right" : "left"));
                      break;
                    case Y[1] - 1:
                      (S += " ui-datepicker-group-last"),
                        (D = " ui-corner-" + (q ? "left" : "right"));
                      break;
                    default:
                      (S += " ui-datepicker-group-middle"), (D = "");
                  }
                S += "'>";
              }
              for (
                S +=
                  "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" +
                  D +
                  "'>" +
                  (/all|left/.test(D) && 0 === x ? (q ? o : n) : "") +
                  (/all|right/.test(D) && 0 === x ? (q ? n : o) : "") +
                  this._generateMonthYearHeader(
                    t,
                    J,
                    tt,
                    G,
                    Z,
                    x > 0 || k > 0,
                    f,
                    g
                  ) +
                  "</div><table class='ui-datepicker-calendar'><thead><tr>",
                  E = u
                    ? "<th class='ui-datepicker-week-col'>" +
                      this._get(t, "weekHeader") +
                      "</th>"
                    : "",
                  w = 0;
                7 > w;
                w++
              )
                E +=
                  "<th scope='col'" +
                  ((w + c + 6) % 7 >= 5
                    ? " class='ui-datepicker-week-end'"
                    : "") +
                  "><span title='" +
                  d[(I = (w + c) % 7)] +
                  "'>" +
                  p[I] +
                  "</span></th>";
              for (
                S += E + "</tr></thead><tbody>",
                  A = this._getDaysInMonth(tt, J),
                  tt === t.selectedYear &&
                    J === t.selectedMonth &&
                    (t.selectedDay = Math.min(t.selectedDay, A)),
                  P = (this._getFirstDayOfMonth(tt, J) - c + 7) % 7,
                  O = Math.ceil((P + A) / 7),
                  N = Q && this.maxRows > O ? this.maxRows : O,
                  this.maxRows = N,
                  M = this._daylightSavingAdjust(new Date(tt, J, 1 - P)),
                  H = 0;
                N > H;
                H++
              ) {
                for (
                  S += "<tr>",
                    z = u
                      ? "<td class='ui-datepicker-week-col'>" +
                        this._get(t, "calculateWeek")(M) +
                        "</td>"
                      : "",
                    w = 0;
                  7 > w;
                  w++
                )
                  (L = m
                    ? m.apply(t.input ? t.input[0] : null, [M])
                    : [!0, ""]),
                    (j =
                      ((W = M.getMonth() !== J) && !_) ||
                      !L[0] ||
                      (G && G > M) ||
                      (Z && M > Z)),
                    (z +=
                      "<td class='" +
                      ((w + c + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") +
                      (W ? " ui-datepicker-other-month" : "") +
                      ((M.getTime() === T.getTime() &&
                        J === t.selectedMonth &&
                        t._keyEvent) ||
                      (y.getTime() === M.getTime() &&
                        y.getTime() === T.getTime())
                        ? " " + this._dayOverClass
                        : "") +
                      (j
                        ? " " + this._unselectableClass + " ui-state-disabled"
                        : "") +
                      (W && !v
                        ? ""
                        : " " +
                          L[1] +
                          (M.getTime() === X.getTime()
                            ? " " + this._currentClass
                            : "") +
                          (M.getTime() === F.getTime()
                            ? " ui-datepicker-today"
                            : "")) +
                      "'" +
                      ((W && !v) || !L[2]
                        ? ""
                        : " title='" + L[2].replace(/'/g, "&#39;") + "'") +
                      (j
                        ? ""
                        : " data-handler='selectDay' data-event='click' data-month='" +
                          M.getMonth() +
                          "' data-year='" +
                          M.getFullYear() +
                          "'") +
                      ">" +
                      (W && !v
                        ? "&#xa0;"
                        : j
                        ? "<span class='ui-state-default'>" +
                          M.getDate() +
                          "</span>"
                        : "<a class='ui-state-default" +
                          (M.getTime() === F.getTime()
                            ? " ui-state-highlight"
                            : "") +
                          (M.getTime() === X.getTime()
                            ? " ui-state-active"
                            : "") +
                          (W ? " ui-priority-secondary" : "") +
                          "' href='#'>" +
                          M.getDate() +
                          "</a>") +
                      "</td>"),
                    M.setDate(M.getDate() + 1),
                    (M = this._daylightSavingAdjust(M));
                S += z + "</tr>";
              }
              ++J > 11 && ((J = 0), tt++),
                (C += S +=
                  "</tbody></table>" +
                  (Q
                    ? "</div>" +
                      (Y[0] > 0 && k === Y[1] - 1
                        ? "<div class='ui-datepicker-row-break'></div>"
                        : "")
                    : ""));
            }
            b += C;
          }
          return (b += h), (t._keyEvent = !1), b;
        },
        _generateMonthYearHeader: function (t, e, i, n, s, o, r, a) {
          var l,
            h,
            c,
            u,
            d,
            p,
            f,
            g,
            m = this._get(t, "changeMonth"),
            v = this._get(t, "changeYear"),
            _ = this._get(t, "showMonthAfterYear"),
            y = "<div class='ui-datepicker-title'>",
            b = "";
          if (o || !m)
            b += "<span class='ui-datepicker-month'>" + r[e] + "</span>";
          else {
            for (
              l = n && n.getFullYear() === i,
                h = s && s.getFullYear() === i,
                b +=
                  "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>",
                c = 0;
              12 > c;
              c++
            )
              (!l || c >= n.getMonth()) &&
                (!h || s.getMonth() >= c) &&
                (b +=
                  "<option value='" +
                  c +
                  "'" +
                  (c === e ? " selected='selected'" : "") +
                  ">" +
                  a[c] +
                  "</option>");
            b += "</select>";
          }
          if ((_ || (y += b + (!o && m && v ? "" : "&#xa0;")), !t.yearshtml))
            if (((t.yearshtml = ""), o || !v))
              y += "<span class='ui-datepicker-year'>" + i + "</span>";
            else {
              for (
                u = this._get(t, "yearRange").split(":"),
                  d = new Date().getFullYear(),
                  f = (p = function (t) {
                    var e = t.match(/c[+\-].*/)
                      ? i + parseInt(t.substring(1), 10)
                      : t.match(/[+\-].*/)
                      ? d + parseInt(t, 10)
                      : parseInt(t, 10);
                    return isNaN(e) ? d : e;
                  })(u[0]),
                  g = Math.max(f, p(u[1] || "")),
                  f = n ? Math.max(f, n.getFullYear()) : f,
                  g = s ? Math.min(g, s.getFullYear()) : g,
                  t.yearshtml +=
                    "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";
                g >= f;
                f++
              )
                t.yearshtml +=
                  "<option value='" +
                  f +
                  "'" +
                  (f === i ? " selected='selected'" : "") +
                  ">" +
                  f +
                  "</option>";
              (t.yearshtml += "</select>"),
                (y += t.yearshtml),
                (t.yearshtml = null);
            }
          return (
            (y += this._get(t, "yearSuffix")),
            _ && (y += (!o && m && v ? "" : "&#xa0;") + b),
            y + "</div>"
          );
        },
        _adjustInstDate: function (t, e, i) {
          var n = t.selectedYear + ("Y" === i ? e : 0),
            s = t.selectedMonth + ("M" === i ? e : 0),
            o =
              Math.min(t.selectedDay, this._getDaysInMonth(n, s)) +
              ("D" === i ? e : 0),
            r = this._restrictMinMax(
              t,
              this._daylightSavingAdjust(new Date(n, s, o))
            );
          (t.selectedDay = r.getDate()),
            (t.drawMonth = t.selectedMonth = r.getMonth()),
            (t.drawYear = t.selectedYear = r.getFullYear()),
            ("M" === i || "Y" === i) && this._notifyChange(t);
        },
        _restrictMinMax: function (t, e) {
          var i = this._getMinMaxDate(t, "min"),
            n = this._getMinMaxDate(t, "max"),
            s = i && i > e ? i : e;
          return n && s > n ? n : s;
        },
        _notifyChange: function (t) {
          var e = this._get(t, "onChangeMonthYear");
          e &&
            e.apply(t.input ? t.input[0] : null, [
              t.selectedYear,
              t.selectedMonth + 1,
              t,
            ]);
        },
        _getNumberOfMonths: function (t) {
          var e = this._get(t, "numberOfMonths");
          return null == e ? [1, 1] : "number" == typeof e ? [1, e] : e;
        },
        _getMinMaxDate: function (t, e) {
          return this._determineDate(t, this._get(t, e + "Date"), null);
        },
        _getDaysInMonth: function (t, e) {
          return 32 - this._daylightSavingAdjust(new Date(t, e, 32)).getDate();
        },
        _getFirstDayOfMonth: function (t, e) {
          return new Date(t, e, 1).getDay();
        },
        _canAdjustMonth: function (t, e, i, n) {
          var s = this._getNumberOfMonths(t),
            o = this._daylightSavingAdjust(
              new Date(i, n + (0 > e ? e : s[0] * s[1]), 1)
            );
          return (
            0 > e &&
              o.setDate(this._getDaysInMonth(o.getFullYear(), o.getMonth())),
            this._isInRange(t, o)
          );
        },
        _isInRange: function (t, e) {
          var i,
            n,
            s = this._getMinMaxDate(t, "min"),
            o = this._getMinMaxDate(t, "max"),
            r = null,
            a = null,
            l = this._get(t, "yearRange");
          return (
            l &&
              ((i = l.split(":")),
              (n = new Date().getFullYear()),
              (r = parseInt(i[0], 10)),
              (a = parseInt(i[1], 10)),
              i[0].match(/[+\-].*/) && (r += n),
              i[1].match(/[+\-].*/) && (a += n)),
            (!s || e.getTime() >= s.getTime()) &&
              (!o || e.getTime() <= o.getTime()) &&
              (!r || e.getFullYear() >= r) &&
              (!a || a >= e.getFullYear())
          );
        },
        _getFormatConfig: function (t) {
          var e = this._get(t, "shortYearCutoff");
          return {
            shortYearCutoff: (e =
              "string" != typeof e
                ? e
                : (new Date().getFullYear() % 100) + parseInt(e, 10)),
            dayNamesShort: this._get(t, "dayNamesShort"),
            dayNames: this._get(t, "dayNames"),
            monthNamesShort: this._get(t, "monthNamesShort"),
            monthNames: this._get(t, "monthNames"),
          };
        },
        _formatDate: function (t, e, i, n) {
          e ||
            ((t.currentDay = t.selectedDay),
            (t.currentMonth = t.selectedMonth),
            (t.currentYear = t.selectedYear));
          var s = e
            ? "object" == typeof e
              ? e
              : this._daylightSavingAdjust(new Date(n, i, e))
            : this._daylightSavingAdjust(
                new Date(t.currentYear, t.currentMonth, t.currentDay)
              );
          return this.formatDate(
            this._get(t, "dateFormat"),
            s,
            this._getFormatConfig(t)
          );
        },
      }),
      (t.fn.datepicker = function (e) {
        if (!this.length) return this;
        t.datepicker.initialized ||
          (t(document).on("mousedown", t.datepicker._checkExternalClick),
          (t.datepicker.initialized = !0)),
          0 === t("#" + t.datepicker._mainDivId).length &&
            t("body").append(t.datepicker.dpDiv);
        var i = Array.prototype.slice.call(arguments, 1);
        return "string" != typeof e ||
          ("isDisabled" !== e && "getDate" !== e && "widget" !== e)
          ? "option" === e &&
            2 === arguments.length &&
            "string" == typeof arguments[1]
            ? t.datepicker["_" + e + "Datepicker"].apply(
                t.datepicker,
                [this[0]].concat(i)
              )
            : this.each(function () {
                "string" == typeof e
                  ? t.datepicker["_" + e + "Datepicker"].apply(
                      t.datepicker,
                      [this].concat(i)
                    )
                  : t.datepicker._attachDatepicker(this, e);
              })
          : t.datepicker["_" + e + "Datepicker"].apply(
              t.datepicker,
              [this[0]].concat(i)
            );
      }),
      (t.datepicker = new e()),
      (t.datepicker.initialized = !1),
      (t.datepicker.uuid = new Date().getTime()),
      (t.datepicker.version = "1.12.1"),
      t.datepicker,
      t.widget("ui.dialog", {
        version: "1.12.1",
        options: {
          appendTo: "body",
          autoOpen: !0,
          buttons: [],
          classes: {
            "ui-dialog": "ui-corner-all",
            "ui-dialog-titlebar": "ui-corner-all",
          },
          closeOnEscape: !0,
          closeText: "Close",
          draggable: !0,
          hide: null,
          height: "auto",
          maxHeight: null,
          maxWidth: null,
          minHeight: 150,
          minWidth: 150,
          modal: !1,
          position: {
            my: "center",
            at: "center",
            of: window,
            collision: "fit",
            using: function (e) {
              var i = t(this).css(e).offset().top;
              0 > i && t(this).css("top", e.top - i);
            },
          },
          resizable: !0,
          show: null,
          title: null,
          width: 300,
          beforeClose: null,
          close: null,
          drag: null,
          dragStart: null,
          dragStop: null,
          focus: null,
          open: null,
          resize: null,
          resizeStart: null,
          resizeStop: null,
        },
        sizeRelatedOptions: {
          buttons: !0,
          height: !0,
          maxHeight: !0,
          maxWidth: !0,
          minHeight: !0,
          minWidth: !0,
          width: !0,
        },
        resizableRelatedOptions: {
          maxHeight: !0,
          maxWidth: !0,
          minHeight: !0,
          minWidth: !0,
        },
        _create: function () {
          (this.originalCss = {
            display: this.element[0].style.display,
            width: this.element[0].style.width,
            minHeight: this.element[0].style.minHeight,
            maxHeight: this.element[0].style.maxHeight,
            height: this.element[0].style.height,
          }),
            (this.originalPosition = {
              parent: this.element.parent(),
              index: this.element.parent().children().index(this.element),
            }),
            (this.originalTitle = this.element.attr("title")),
            null == this.options.title &&
              null != this.originalTitle &&
              (this.options.title = this.originalTitle),
            this.options.disabled && (this.options.disabled = !1),
            this._createWrapper(),
            this.element.show().removeAttr("title").appendTo(this.uiDialog),
            this._addClass("ui-dialog-content", "ui-widget-content"),
            this._createTitlebar(),
            this._createButtonPane(),
            this.options.draggable && t.fn.draggable && this._makeDraggable(),
            this.options.resizable && t.fn.resizable && this._makeResizable(),
            (this._isOpen = !1),
            this._trackFocus();
        },
        _init: function () {
          this.options.autoOpen && this.open();
        },
        _appendTo: function () {
          var e = this.options.appendTo;
          return e && (e.jquery || e.nodeType)
            ? t(e)
            : this.document.find(e || "body").eq(0);
        },
        _destroy: function () {
          var t,
            e = this.originalPosition;
          this._untrackInstance(),
            this._destroyOverlay(),
            this.element.removeUniqueId().css(this.originalCss).detach(),
            this.uiDialog.remove(),
            this.originalTitle &&
              this.element.attr("title", this.originalTitle),
            (t = e.parent.children().eq(e.index)).length &&
            t[0] !== this.element[0]
              ? t.before(this.element)
              : e.parent.append(this.element);
        },
        widget: function () {
          return this.uiDialog;
        },
        disable: t.noop,
        enable: t.noop,
        close: function (e) {
          var i = this;
          this._isOpen &&
            !1 !== this._trigger("beforeClose", e) &&
            ((this._isOpen = !1),
            (this._focusedElement = null),
            this._destroyOverlay(),
            this._untrackInstance(),
            this.opener.filter(":focusable").trigger("focus").length ||
              t.ui.safeBlur(t.ui.safeActiveElement(this.document[0])),
            this._hide(this.uiDialog, this.options.hide, function () {
              i._trigger("close", e);
            }));
        },
        isOpen: function () {
          return this._isOpen;
        },
        moveToTop: function () {
          this._moveToTop();
        },
        _moveToTop: function (e, i) {
          var n = !1,
            s = this.uiDialog
              .siblings(".ui-front:visible")
              .map(function () {
                return +t(this).css("z-index");
              })
              .get(),
            o = Math.max.apply(null, s);
          return (
            o >= +this.uiDialog.css("z-index") &&
              (this.uiDialog.css("z-index", o + 1), (n = !0)),
            n && !i && this._trigger("focus", e),
            n
          );
        },
        open: function () {
          var e = this;
          return this._isOpen
            ? void (this._moveToTop() && this._focusTabbable())
            : ((this._isOpen = !0),
              (this.opener = t(t.ui.safeActiveElement(this.document[0]))),
              this._size(),
              this._position(),
              this._createOverlay(),
              this._moveToTop(null, !0),
              this.overlay &&
                this.overlay.css("z-index", this.uiDialog.css("z-index") - 1),
              this._show(this.uiDialog, this.options.show, function () {
                e._focusTabbable(), e._trigger("focus");
              }),
              this._makeFocusTarget(),
              void this._trigger("open"));
        },
        _focusTabbable: function () {
          var t = this._focusedElement;
          t || (t = this.element.find("[autofocus]")),
            t.length || (t = this.element.find(":tabbable")),
            t.length || (t = this.uiDialogButtonPane.find(":tabbable")),
            t.length || (t = this.uiDialogTitlebarClose.filter(":tabbable")),
            t.length || (t = this.uiDialog),
            t.eq(0).trigger("focus");
        },
        _keepFocus: function (e) {
          function i() {
            var e = t.ui.safeActiveElement(this.document[0]);
            this.uiDialog[0] === e ||
              t.contains(this.uiDialog[0], e) ||
              this._focusTabbable();
          }
          e.preventDefault(), i.call(this), this._delay(i);
        },
        _createWrapper: function () {
          (this.uiDialog = t("<div>")
            .hide()
            .attr({ tabIndex: -1, role: "dialog" })
            .appendTo(this._appendTo())),
            this._addClass(
              this.uiDialog,
              "ui-dialog",
              "ui-widget ui-widget-content ui-front"
            ),
            this._on(this.uiDialog, {
              keydown: function (e) {
                if (
                  this.options.closeOnEscape &&
                  !e.isDefaultPrevented() &&
                  e.keyCode &&
                  e.keyCode === t.ui.keyCode.ESCAPE
                )
                  return e.preventDefault(), void this.close(e);
                if (e.keyCode === t.ui.keyCode.TAB && !e.isDefaultPrevented()) {
                  var i = this.uiDialog.find(":tabbable"),
                    n = i.filter(":first"),
                    s = i.filter(":last");
                  (e.target !== s[0] && e.target !== this.uiDialog[0]) ||
                  e.shiftKey
                    ? (e.target !== n[0] && e.target !== this.uiDialog[0]) ||
                      !e.shiftKey ||
                      (this._delay(function () {
                        s.trigger("focus");
                      }),
                      e.preventDefault())
                    : (this._delay(function () {
                        n.trigger("focus");
                      }),
                      e.preventDefault());
                }
              },
              mousedown: function (t) {
                this._moveToTop(t) && this._focusTabbable();
              },
            }),
            this.element.find("[aria-describedby]").length ||
              this.uiDialog.attr({
                "aria-describedby": this.element.uniqueId().attr("id"),
              });
        },
        _createTitlebar: function () {
          var e;
          (this.uiDialogTitlebar = t("<div>")),
            this._addClass(
              this.uiDialogTitlebar,
              "ui-dialog-titlebar",
              "ui-widget-header ui-helper-clearfix"
            ),
            this._on(this.uiDialogTitlebar, {
              mousedown: function (e) {
                t(e.target).closest(".ui-dialog-titlebar-close") ||
                  this.uiDialog.trigger("focus");
              },
            }),
            (this.uiDialogTitlebarClose = t("<button type='button'></button>")
              .button({
                label: t("<a>").text(this.options.closeText).html(),
                icon: "ui-icon-closethick",
                showLabel: !1,
              })
              .appendTo(this.uiDialogTitlebar)),
            this._addClass(
              this.uiDialogTitlebarClose,
              "ui-dialog-titlebar-close"
            ),
            this._on(this.uiDialogTitlebarClose, {
              click: function (t) {
                t.preventDefault(), this.close(t);
              },
            }),
            (e = t("<span>").uniqueId().prependTo(this.uiDialogTitlebar)),
            this._addClass(e, "ui-dialog-title"),
            this._title(e),
            this.uiDialogTitlebar.prependTo(this.uiDialog),
            this.uiDialog.attr({ "aria-labelledby": e.attr("id") });
        },
        _title: function (t) {
          this.options.title ? t.text(this.options.title) : t.html("&#160;");
        },
        _createButtonPane: function () {
          (this.uiDialogButtonPane = t("<div>")),
            this._addClass(
              this.uiDialogButtonPane,
              "ui-dialog-buttonpane",
              "ui-widget-content ui-helper-clearfix"
            ),
            (this.uiButtonSet = t("<div>").appendTo(this.uiDialogButtonPane)),
            this._addClass(this.uiButtonSet, "ui-dialog-buttonset"),
            this._createButtons();
        },
        _createButtons: function () {
          var e = this,
            i = this.options.buttons;
          return (
            this.uiDialogButtonPane.remove(),
            this.uiButtonSet.empty(),
            t.isEmptyObject(i) || (t.isArray(i) && !i.length)
              ? void this._removeClass(this.uiDialog, "ui-dialog-buttons")
              : (t.each(i, function (i, n) {
                  var s, o;
                  (n = t.isFunction(n) ? { click: n, text: i } : n),
                    (n = t.extend({ type: "button" }, n)),
                    (s = n.click),
                    (o = {
                      icon: n.icon,
                      iconPosition: n.iconPosition,
                      showLabel: n.showLabel,
                      icons: n.icons,
                      text: n.text,
                    }),
                    delete n.click,
                    delete n.icon,
                    delete n.iconPosition,
                    delete n.showLabel,
                    delete n.icons,
                    "boolean" == typeof n.text && delete n.text,
                    t("<button></button>", n)
                      .button(o)
                      .appendTo(e.uiButtonSet)
                      .on("click", function () {
                        s.apply(e.element[0], arguments);
                      });
                }),
                this._addClass(this.uiDialog, "ui-dialog-buttons"),
                void this.uiDialogButtonPane.appendTo(this.uiDialog))
          );
        },
        _makeDraggable: function () {
          function e(t) {
            return { position: t.position, offset: t.offset };
          }
          var i = this,
            n = this.options;
          this.uiDialog.draggable({
            cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
            handle: ".ui-dialog-titlebar",
            containment: "document",
            start: function (n, s) {
              i._addClass(t(this), "ui-dialog-dragging"),
                i._blockFrames(),
                i._trigger("dragStart", n, e(s));
            },
            drag: function (t, n) {
              i._trigger("drag", t, e(n));
            },
            stop: function (s, o) {
              var r = o.offset.left - i.document.scrollLeft(),
                a = o.offset.top - i.document.scrollTop();
              (n.position = {
                my: "left top",
                at:
                  "left" +
                  (r >= 0 ? "+" : "") +
                  r +
                  " top" +
                  (a >= 0 ? "+" : "") +
                  a,
                of: i.window,
              }),
                i._removeClass(t(this), "ui-dialog-dragging"),
                i._unblockFrames(),
                i._trigger("dragStop", s, e(o));
            },
          });
        },
        _makeResizable: function () {
          function e(t) {
            return {
              originalPosition: t.originalPosition,
              originalSize: t.originalSize,
              position: t.position,
              size: t.size,
            };
          }
          var i = this,
            n = this.options,
            s = n.resizable,
            o = this.uiDialog.css("position"),
            r = "string" == typeof s ? s : "n,e,s,w,se,sw,ne,nw";
          this.uiDialog
            .resizable({
              cancel: ".ui-dialog-content",
              containment: "document",
              alsoResize: this.element,
              maxWidth: n.maxWidth,
              maxHeight: n.maxHeight,
              minWidth: n.minWidth,
              minHeight: this._minHeight(),
              handles: r,
              start: function (n, s) {
                i._addClass(t(this), "ui-dialog-resizing"),
                  i._blockFrames(),
                  i._trigger("resizeStart", n, e(s));
              },
              resize: function (t, n) {
                i._trigger("resize", t, e(n));
              },
              stop: function (s, o) {
                var r = i.uiDialog.offset(),
                  a = r.left - i.document.scrollLeft(),
                  l = r.top - i.document.scrollTop();
                (n.height = i.uiDialog.height()),
                  (n.width = i.uiDialog.width()),
                  (n.position = {
                    my: "left top",
                    at:
                      "left" +
                      (a >= 0 ? "+" : "") +
                      a +
                      " top" +
                      (l >= 0 ? "+" : "") +
                      l,
                    of: i.window,
                  }),
                  i._removeClass(t(this), "ui-dialog-resizing"),
                  i._unblockFrames(),
                  i._trigger("resizeStop", s, e(o));
              },
            })
            .css("position", o);
        },
        _trackFocus: function () {
          this._on(this.widget(), {
            focusin: function (e) {
              this._makeFocusTarget(), (this._focusedElement = t(e.target));
            },
          });
        },
        _makeFocusTarget: function () {
          this._untrackInstance(), this._trackingInstances().unshift(this);
        },
        _untrackInstance: function () {
          var e = this._trackingInstances(),
            i = t.inArray(this, e);
          -1 !== i && e.splice(i, 1);
        },
        _trackingInstances: function () {
          var t = this.document.data("ui-dialog-instances");
          return (
            t || ((t = []), this.document.data("ui-dialog-instances", t)), t
          );
        },
        _minHeight: function () {
          var t = this.options;
          return "auto" === t.height
            ? t.minHeight
            : Math.min(t.minHeight, t.height);
        },
        _position: function () {
          var t = this.uiDialog.is(":visible");
          t || this.uiDialog.show(),
            this.uiDialog.position(this.options.position),
            t || this.uiDialog.hide();
        },
        _setOptions: function (e) {
          var i = this,
            n = !1,
            s = {};
          t.each(e, function (t, e) {
            i._setOption(t, e),
              t in i.sizeRelatedOptions && (n = !0),
              t in i.resizableRelatedOptions && (s[t] = e);
          }),
            n && (this._size(), this._position()),
            this.uiDialog.is(":data(ui-resizable)") &&
              this.uiDialog.resizable("option", s);
        },
        _setOption: function (e, i) {
          var n,
            s,
            o = this.uiDialog;
          "disabled" !== e &&
            (this._super(e, i),
            "appendTo" === e && this.uiDialog.appendTo(this._appendTo()),
            "buttons" === e && this._createButtons(),
            "closeText" === e &&
              this.uiDialogTitlebarClose.button({
                label: t("<a>")
                  .text("" + this.options.closeText)
                  .html(),
              }),
            "draggable" === e &&
              ((n = o.is(":data(ui-draggable)")) &&
                !i &&
                o.draggable("destroy"),
              !n && i && this._makeDraggable()),
            "position" === e && this._position(),
            "resizable" === e &&
              ((s = o.is(":data(ui-resizable)")) &&
                !i &&
                o.resizable("destroy"),
              s && "string" == typeof i && o.resizable("option", "handles", i),
              s || !1 === i || this._makeResizable()),
            "title" === e &&
              this._title(this.uiDialogTitlebar.find(".ui-dialog-title")));
        },
        _size: function () {
          var t,
            e,
            i,
            n = this.options;
          this.element
            .show()
            .css({ width: "auto", minHeight: 0, maxHeight: "none", height: 0 }),
            n.minWidth > n.width && (n.width = n.minWidth),
            (t = this.uiDialog
              .css({ height: "auto", width: n.width })
              .outerHeight()),
            (e = Math.max(0, n.minHeight - t)),
            (i =
              "number" == typeof n.maxHeight
                ? Math.max(0, n.maxHeight - t)
                : "none"),
            "auto" === n.height
              ? this.element.css({ minHeight: e, maxHeight: i, height: "auto" })
              : this.element.height(Math.max(0, n.height - t)),
            this.uiDialog.is(":data(ui-resizable)") &&
              this.uiDialog.resizable("option", "minHeight", this._minHeight());
        },
        _blockFrames: function () {
          this.iframeBlocks = this.document.find("iframe").map(function () {
            var e = t(this);
            return t("<div>")
              .css({
                position: "absolute",
                width: e.outerWidth(),
                height: e.outerHeight(),
              })
              .appendTo(e.parent())
              .offset(e.offset())[0];
          });
        },
        _unblockFrames: function () {
          this.iframeBlocks &&
            (this.iframeBlocks.remove(), delete this.iframeBlocks);
        },
        _allowInteraction: function (e) {
          return (
            !!t(e.target).closest(".ui-dialog").length ||
            !!t(e.target).closest(".ui-datepicker").length
          );
        },
        _createOverlay: function () {
          if (this.options.modal) {
            var e = !0;
            this._delay(function () {
              e = !1;
            }),
              this.document.data("ui-dialog-overlays") ||
                this._on(this.document, {
                  focusin: function (t) {
                    e ||
                      this._allowInteraction(t) ||
                      (t.preventDefault(),
                      this._trackingInstances()[0]._focusTabbable());
                  },
                }),
              (this.overlay = t("<div>").appendTo(this._appendTo())),
              this._addClass(this.overlay, null, "ui-widget-overlay ui-front"),
              this._on(this.overlay, { mousedown: "_keepFocus" }),
              this.document.data(
                "ui-dialog-overlays",
                (this.document.data("ui-dialog-overlays") || 0) + 1
              );
          }
        },
        _destroyOverlay: function () {
          if (this.options.modal && this.overlay) {
            var t = this.document.data("ui-dialog-overlays") - 1;
            t
              ? this.document.data("ui-dialog-overlays", t)
              : (this._off(this.document, "focusin"),
                this.document.removeData("ui-dialog-overlays")),
              this.overlay.remove(),
              (this.overlay = null);
          }
        },
      }),
      !1 !== t.uiBackCompat &&
        t.widget("ui.dialog", t.ui.dialog, {
          options: { dialogClass: "" },
          _createWrapper: function () {
            this._super(), this.uiDialog.addClass(this.options.dialogClass);
          },
          _setOption: function (t, e) {
            "dialogClass" === t &&
              this.uiDialog.removeClass(this.options.dialogClass).addClass(e),
              this._superApply(arguments);
          },
        }),
      t.ui.dialog,
      t.widget("ui.progressbar", {
        version: "1.12.1",
        options: {
          classes: {
            "ui-progressbar": "ui-corner-all",
            "ui-progressbar-value": "ui-corner-left",
            "ui-progressbar-complete": "ui-corner-right",
          },
          max: 100,
          value: 0,
          change: null,
          complete: null,
        },
        min: 0,
        _create: function () {
          (this.oldValue = this.options.value = this._constrainedValue()),
            this.element.attr({
              role: "progressbar",
              "aria-valuemin": this.min,
            }),
            this._addClass("ui-progressbar", "ui-widget ui-widget-content"),
            (this.valueDiv = t("<div>").appendTo(this.element)),
            this._addClass(
              this.valueDiv,
              "ui-progressbar-value",
              "ui-widget-header"
            ),
            this._refreshValue();
        },
        _destroy: function () {
          this.element.removeAttr(
            "role aria-valuemin aria-valuemax aria-valuenow"
          ),
            this.valueDiv.remove();
        },
        value: function (t) {
          return void 0 === t
            ? this.options.value
            : ((this.options.value = this._constrainedValue(t)),
              void this._refreshValue());
        },
        _constrainedValue: function (t) {
          return (
            void 0 === t && (t = this.options.value),
            (this.indeterminate = !1 === t),
            "number" != typeof t && (t = 0),
            !this.indeterminate &&
              Math.min(this.options.max, Math.max(this.min, t))
          );
        },
        _setOptions: function (t) {
          var e = t.value;
          delete t.value,
            this._super(t),
            (this.options.value = this._constrainedValue(e)),
            this._refreshValue();
        },
        _setOption: function (t, e) {
          "max" === t && (e = Math.max(this.min, e)), this._super(t, e);
        },
        _setOptionDisabled: function (t) {
          this._super(t),
            this.element.attr("aria-disabled", t),
            this._toggleClass(null, "ui-state-disabled", !!t);
        },
        _percentage: function () {
          return this.indeterminate
            ? 100
            : (100 * (this.options.value - this.min)) /
                (this.options.max - this.min);
        },
        _refreshValue: function () {
          var e = this.options.value,
            i = this._percentage();
          this.valueDiv
            .toggle(this.indeterminate || e > this.min)
            .width(i.toFixed(0) + "%"),
            this._toggleClass(
              this.valueDiv,
              "ui-progressbar-complete",
              null,
              e === this.options.max
            )._toggleClass(
              "ui-progressbar-indeterminate",
              null,
              this.indeterminate
            ),
            this.indeterminate
              ? (this.element.removeAttr("aria-valuenow"),
                this.overlayDiv ||
                  ((this.overlayDiv = t("<div>").appendTo(this.valueDiv)),
                  this._addClass(this.overlayDiv, "ui-progressbar-overlay")))
              : (this.element.attr({
                  "aria-valuemax": this.options.max,
                  "aria-valuenow": e,
                }),
                this.overlayDiv &&
                  (this.overlayDiv.remove(), (this.overlayDiv = null))),
            this.oldValue !== e &&
              ((this.oldValue = e), this._trigger("change")),
            e === this.options.max && this._trigger("complete");
        },
      }),
      t.widget("ui.selectmenu", [
        t.ui.formResetMixin,
        {
          version: "1.12.1",
          defaultElement: "<select>",
          options: {
            appendTo: null,
            classes: {
              "ui-selectmenu-button-open": "ui-corner-top",
              "ui-selectmenu-button-closed": "ui-corner-all",
            },
            disabled: null,
            icons: { button: "ui-icon-triangle-1-s" },
            position: { my: "left top", at: "left bottom", collision: "none" },
            width: !1,
            change: null,
            close: null,
            focus: null,
            open: null,
            select: null,
          },
          _create: function () {
            var e = this.element.uniqueId().attr("id");
            (this.ids = {
              element: e,
              button: e + "-button",
              menu: e + "-menu",
            }),
              this._drawButton(),
              this._drawMenu(),
              this._bindFormResetHandler(),
              (this._rendered = !1),
              (this.menuItems = t());
          },
          _drawButton: function () {
            var e,
              i = this,
              n = this._parseOption(
                this.element.find("option:selected"),
                this.element[0].selectedIndex
              );
            (this.labels = this.element.labels().attr("for", this.ids.button)),
              this._on(this.labels, {
                click: function (t) {
                  this.button.focus(), t.preventDefault();
                },
              }),
              this.element.hide(),
              (this.button = t("<span>", {
                tabindex: this.options.disabled ? -1 : 0,
                id: this.ids.button,
                role: "combobox",
                "aria-expanded": "false",
                "aria-autocomplete": "list",
                "aria-owns": this.ids.menu,
                "aria-haspopup": "true",
                title: this.element.attr("title"),
              }).insertAfter(this.element)),
              this._addClass(
                this.button,
                "ui-selectmenu-button ui-selectmenu-button-closed",
                "ui-button ui-widget"
              ),
              (e = t("<span>").appendTo(this.button)),
              this._addClass(
                e,
                "ui-selectmenu-icon",
                "ui-icon " + this.options.icons.button
              ),
              (this.buttonItem = this._renderButtonItem(n).appendTo(
                this.button
              )),
              !1 !== this.options.width && this._resizeButton(),
              this._on(this.button, this._buttonEvents),
              this.button.one("focusin", function () {
                i._rendered || i._refreshMenu();
              });
          },
          _drawMenu: function () {
            var e = this;
            (this.menu = t("<ul>", {
              "aria-hidden": "true",
              "aria-labelledby": this.ids.button,
              id: this.ids.menu,
            })),
              (this.menuWrap = t("<div>").append(this.menu)),
              this._addClass(this.menuWrap, "ui-selectmenu-menu", "ui-front"),
              this.menuWrap.appendTo(this._appendTo()),
              (this.menuInstance = this.menu
                .menu({
                  classes: { "ui-menu": "ui-corner-bottom" },
                  role: "listbox",
                  select: function (t, i) {
                    t.preventDefault(),
                      e._setSelection(),
                      e._select(i.item.data("ui-selectmenu-item"), t);
                  },
                  focus: function (t, i) {
                    var n = i.item.data("ui-selectmenu-item");
                    null != e.focusIndex &&
                      n.index !== e.focusIndex &&
                      (e._trigger("focus", t, { item: n }),
                      e.isOpen || e._select(n, t)),
                      (e.focusIndex = n.index),
                      e.button.attr(
                        "aria-activedescendant",
                        e.menuItems.eq(n.index).attr("id")
                      );
                  },
                })
                .menu("instance")),
              this.menuInstance._off(this.menu, "mouseleave"),
              (this.menuInstance._closeOnDocumentClick = function () {
                return !1;
              }),
              (this.menuInstance._isDivider = function () {
                return !1;
              });
          },
          refresh: function () {
            this._refreshMenu(),
              this.buttonItem.replaceWith(
                (this.buttonItem = this._renderButtonItem(
                  this._getSelectedItem().data("ui-selectmenu-item") || {}
                ))
              ),
              null === this.options.width && this._resizeButton();
          },
          _refreshMenu: function () {
            var t,
              e = this.element.find("option");
            this.menu.empty(),
              this._parseOptions(e),
              this._renderMenu(this.menu, this.items),
              this.menuInstance.refresh(),
              (this.menuItems = this.menu
                .find("li")
                .not(".ui-selectmenu-optgroup")
                .find(".ui-menu-item-wrapper")),
              (this._rendered = !0),
              e.length &&
                ((t = this._getSelectedItem()),
                this.menuInstance.focus(null, t),
                this._setAria(t.data("ui-selectmenu-item")),
                this._setOption("disabled", this.element.prop("disabled")));
          },
          open: function (t) {
            this.options.disabled ||
              (this._rendered
                ? (this._removeClass(
                    this.menu.find(".ui-state-active"),
                    null,
                    "ui-state-active"
                  ),
                  this.menuInstance.focus(null, this._getSelectedItem()))
                : this._refreshMenu(),
              this.menuItems.length &&
                ((this.isOpen = !0),
                this._toggleAttr(),
                this._resizeMenu(),
                this._position(),
                this._on(this.document, this._documentClick),
                this._trigger("open", t)));
          },
          _position: function () {
            this.menuWrap.position(
              t.extend({ of: this.button }, this.options.position)
            );
          },
          close: function (t) {
            this.isOpen &&
              ((this.isOpen = !1),
              this._toggleAttr(),
              (this.range = null),
              this._off(this.document),
              this._trigger("close", t));
          },
          widget: function () {
            return this.button;
          },
          menuWidget: function () {
            return this.menu;
          },
          _renderButtonItem: function (e) {
            var i = t("<span>");
            return (
              this._setText(i, e.label),
              this._addClass(i, "ui-selectmenu-text"),
              i
            );
          },
          _renderMenu: function (e, i) {
            var n = this,
              s = "";
            t.each(i, function (i, o) {
              var r;
              o.optgroup !== s &&
                ((r = t("<li>", { text: o.optgroup })),
                n._addClass(
                  r,
                  "ui-selectmenu-optgroup",
                  "ui-menu-divider" +
                    (o.element.parent("optgroup").prop("disabled")
                      ? " ui-state-disabled"
                      : "")
                ),
                r.appendTo(e),
                (s = o.optgroup)),
                n._renderItemData(e, o);
            });
          },
          _renderItemData: function (t, e) {
            return this._renderItem(t, e).data("ui-selectmenu-item", e);
          },
          _renderItem: function (e, i) {
            var n = t("<li>"),
              s = t("<div>", { title: i.element.attr("title") });
            return (
              i.disabled && this._addClass(n, null, "ui-state-disabled"),
              this._setText(s, i.label),
              n.append(s).appendTo(e)
            );
          },
          _setText: function (t, e) {
            e ? t.text(e) : t.html("&#160;");
          },
          _move: function (t, e) {
            var i,
              n,
              s = ".ui-menu-item";
            this.isOpen
              ? (i = this.menuItems.eq(this.focusIndex).parent("li"))
              : ((i = this.menuItems
                  .eq(this.element[0].selectedIndex)
                  .parent("li")),
                (s += ":not(.ui-state-disabled)")),
              (n =
                "first" === t || "last" === t
                  ? i["first" === t ? "prevAll" : "nextAll"](s).eq(-1)
                  : i[t + "All"](s).eq(0)).length &&
                this.menuInstance.focus(e, n);
          },
          _getSelectedItem: function () {
            return this.menuItems
              .eq(this.element[0].selectedIndex)
              .parent("li");
          },
          _toggle: function (t) {
            this[this.isOpen ? "close" : "open"](t);
          },
          _setSelection: function () {
            var t;
            this.range &&
              (window.getSelection
                ? ((t = window.getSelection()).removeAllRanges(),
                  t.addRange(this.range))
                : this.range.select(),
              this.button.focus());
          },
          _documentClick: {
            mousedown: function (e) {
              this.isOpen &&
                (t(e.target).closest(
                  ".ui-selectmenu-menu, #" +
                    t.ui.escapeSelector(this.ids.button)
                ).length ||
                  this.close(e));
            },
          },
          _buttonEvents: {
            mousedown: function () {
              var t;
              window.getSelection
                ? (t = window.getSelection()).rangeCount &&
                  (this.range = t.getRangeAt(0))
                : (this.range = document.selection.createRange());
            },
            click: function (t) {
              this._setSelection(), this._toggle(t);
            },
            keydown: function (e) {
              var i = !0;
              switch (e.keyCode) {
                case t.ui.keyCode.TAB:
                case t.ui.keyCode.ESCAPE:
                  this.close(e), (i = !1);
                  break;
                case t.ui.keyCode.ENTER:
                  this.isOpen && this._selectFocusedItem(e);
                  break;
                case t.ui.keyCode.UP:
                  e.altKey ? this._toggle(e) : this._move("prev", e);
                  break;
                case t.ui.keyCode.DOWN:
                  e.altKey ? this._toggle(e) : this._move("next", e);
                  break;
                case t.ui.keyCode.SPACE:
                  this.isOpen ? this._selectFocusedItem(e) : this._toggle(e);
                  break;
                case t.ui.keyCode.LEFT:
                  this._move("prev", e);
                  break;
                case t.ui.keyCode.RIGHT:
                  this._move("next", e);
                  break;
                case t.ui.keyCode.HOME:
                case t.ui.keyCode.PAGE_UP:
                  this._move("first", e);
                  break;
                case t.ui.keyCode.END:
                case t.ui.keyCode.PAGE_DOWN:
                  this._move("last", e);
                  break;
                default:
                  this.menu.trigger(e), (i = !1);
              }
              i && e.preventDefault();
            },
          },
          _selectFocusedItem: function (t) {
            var e = this.menuItems.eq(this.focusIndex).parent("li");
            e.hasClass("ui-state-disabled") ||
              this._select(e.data("ui-selectmenu-item"), t);
          },
          _select: function (t, e) {
            var i = this.element[0].selectedIndex;
            (this.element[0].selectedIndex = t.index),
              this.buttonItem.replaceWith(
                (this.buttonItem = this._renderButtonItem(t))
              ),
              this._setAria(t),
              this._trigger("select", e, { item: t }),
              t.index !== i && this._trigger("change", e, { item: t }),
              this.close(e);
          },
          _setAria: function (t) {
            var e = this.menuItems.eq(t.index).attr("id");
            this.button.attr({
              "aria-labelledby": e,
              "aria-activedescendant": e,
            }),
              this.menu.attr("aria-activedescendant", e);
          },
          _setOption: function (t, e) {
            if ("icons" === t) {
              var i = this.button.find("span.ui-icon");
              this._removeClass(i, null, this.options.icons.button)._addClass(
                i,
                null,
                e.button
              );
            }
            this._super(t, e),
              "appendTo" === t && this.menuWrap.appendTo(this._appendTo()),
              "width" === t && this._resizeButton();
          },
          _setOptionDisabled: function (t) {
            this._super(t),
              this.menuInstance.option("disabled", t),
              this.button.attr("aria-disabled", t),
              this._toggleClass(this.button, null, "ui-state-disabled", t),
              this.element.prop("disabled", t),
              t
                ? (this.button.attr("tabindex", -1), this.close())
                : this.button.attr("tabindex", 0);
          },
          _appendTo: function () {
            var e = this.options.appendTo;
            return (
              e &&
                (e =
                  e.jquery || e.nodeType ? t(e) : this.document.find(e).eq(0)),
              (e && e[0]) || (e = this.element.closest(".ui-front, dialog")),
              e.length || (e = this.document[0].body),
              e
            );
          },
          _toggleAttr: function () {
            this.button.attr("aria-expanded", this.isOpen),
              this._removeClass(
                this.button,
                "ui-selectmenu-button-" + (this.isOpen ? "closed" : "open")
              )
                ._addClass(
                  this.button,
                  "ui-selectmenu-button-" + (this.isOpen ? "open" : "closed")
                )
                ._toggleClass(
                  this.menuWrap,
                  "ui-selectmenu-open",
                  null,
                  this.isOpen
                ),
              this.menu.attr("aria-hidden", !this.isOpen);
          },
          _resizeButton: function () {
            var t = this.options.width;
            return !1 === t
              ? void this.button.css("width", "")
              : (null === t &&
                  ((t = this.element.show().outerWidth()), this.element.hide()),
                void this.button.outerWidth(t));
          },
          _resizeMenu: function () {
            this.menu.outerWidth(
              Math.max(
                this.button.outerWidth(),
                this.menu.width("").outerWidth() + 1
              )
            );
          },
          _getCreateOptions: function () {
            var t = this._super();
            return (t.disabled = this.element.prop("disabled")), t;
          },
          _parseOptions: function (e) {
            var i = this,
              n = [];
            e.each(function (e, s) {
              n.push(i._parseOption(t(s), e));
            }),
              (this.items = n);
          },
          _parseOption: function (t, e) {
            var i = t.parent("optgroup");
            return {
              element: t,
              index: e,
              value: t.val(),
              label: t.text(),
              optgroup: i.attr("label") || "",
              disabled: i.prop("disabled") || t.prop("disabled"),
            };
          },
          _destroy: function () {
            this._unbindFormResetHandler(),
              this.menuWrap.remove(),
              this.button.remove(),
              this.element.show(),
              this.element.removeUniqueId(),
              this.labels.attr("for", this.ids.element);
          },
        },
      ]),
      t.widget("ui.slider", t.ui.mouse, {
        version: "1.12.1",
        widgetEventPrefix: "slide",
        options: {
          animate: !1,
          classes: {
            "ui-slider": "ui-corner-all",
            "ui-slider-handle": "ui-corner-all",
            "ui-slider-range": "ui-corner-all ui-widget-header",
          },
          distance: 0,
          max: 100,
          min: 0,
          orientation: "horizontal",
          range: !1,
          step: 1,
          value: 0,
          values: null,
          change: null,
          slide: null,
          start: null,
          stop: null,
        },
        numPages: 5,
        _create: function () {
          (this._keySliding = !1),
            (this._mouseSliding = !1),
            (this._animateOff = !0),
            (this._handleIndex = null),
            this._detectOrientation(),
            this._mouseInit(),
            this._calculateNewMax(),
            this._addClass(
              "ui-slider ui-slider-" + this.orientation,
              "ui-widget ui-widget-content"
            ),
            this._refresh(),
            (this._animateOff = !1);
        },
        _refresh: function () {
          this._createRange(),
            this._createHandles(),
            this._setupEvents(),
            this._refreshValue();
        },
        _createHandles: function () {
          var e,
            i,
            n = this.options,
            s = this.element.find(".ui-slider-handle"),
            o = [];
          for (
            i = (n.values && n.values.length) || 1,
              s.length > i && (s.slice(i).remove(), (s = s.slice(0, i))),
              e = s.length;
            i > e;
            e++
          )
            o.push("<span tabindex='0'></span>");
          (this.handles = s.add(t(o.join("")).appendTo(this.element))),
            this._addClass(
              this.handles,
              "ui-slider-handle",
              "ui-state-default"
            ),
            (this.handle = this.handles.eq(0)),
            this.handles.each(function (e) {
              t(this).data("ui-slider-handle-index", e).attr("tabIndex", 0);
            });
        },
        _createRange: function () {
          var e = this.options;
          e.range
            ? (!0 === e.range &&
                (e.values
                  ? e.values.length && 2 !== e.values.length
                    ? (e.values = [e.values[0], e.values[0]])
                    : t.isArray(e.values) && (e.values = e.values.slice(0))
                  : (e.values = [this._valueMin(), this._valueMin()])),
              this.range && this.range.length
                ? (this._removeClass(
                    this.range,
                    "ui-slider-range-min ui-slider-range-max"
                  ),
                  this.range.css({ left: "", bottom: "" }))
                : ((this.range = t("<div>").appendTo(this.element)),
                  this._addClass(this.range, "ui-slider-range")),
              ("min" === e.range || "max" === e.range) &&
                this._addClass(this.range, "ui-slider-range-" + e.range))
            : (this.range && this.range.remove(), (this.range = null));
        },
        _setupEvents: function () {
          this._off(this.handles),
            this._on(this.handles, this._handleEvents),
            this._hoverable(this.handles),
            this._focusable(this.handles);
        },
        _destroy: function () {
          this.handles.remove(),
            this.range && this.range.remove(),
            this._mouseDestroy();
        },
        _mouseCapture: function (e) {
          var i,
            n,
            s,
            o,
            r,
            a,
            l,
            h = this,
            c = this.options;
          return (
            !c.disabled &&
            ((this.elementSize = {
              width: this.element.outerWidth(),
              height: this.element.outerHeight(),
            }),
            (this.elementOffset = this.element.offset()),
            (i = { x: e.pageX, y: e.pageY }),
            (n = this._normValueFromMouse(i)),
            (s = this._valueMax() - this._valueMin() + 1),
            this.handles.each(function (e) {
              var i = Math.abs(n - h.values(e));
              (s > i ||
                (s === i &&
                  (e === h._lastChangedValue || h.values(e) === c.min))) &&
                ((s = i), (o = t(this)), (r = e));
            }),
            !1 !== this._start(e, r) &&
              ((this._mouseSliding = !0),
              (this._handleIndex = r),
              this._addClass(o, null, "ui-state-active"),
              o.trigger("focus"),
              (a = o.offset()),
              (l = !t(e.target).parents().addBack().is(".ui-slider-handle")),
              (this._clickOffset = l
                ? { left: 0, top: 0 }
                : {
                    left: e.pageX - a.left - o.width() / 2,
                    top:
                      e.pageY -
                      a.top -
                      o.height() / 2 -
                      (parseInt(o.css("borderTopWidth"), 10) || 0) -
                      (parseInt(o.css("borderBottomWidth"), 10) || 0) +
                      (parseInt(o.css("marginTop"), 10) || 0),
                  }),
              this.handles.hasClass("ui-state-hover") || this._slide(e, r, n),
              (this._animateOff = !0),
              !0))
          );
        },
        _mouseStart: function () {
          return !0;
        },
        _mouseDrag: function (t) {
          var e = { x: t.pageX, y: t.pageY },
            i = this._normValueFromMouse(e);
          return this._slide(t, this._handleIndex, i), !1;
        },
        _mouseStop: function (t) {
          return (
            this._removeClass(this.handles, null, "ui-state-active"),
            (this._mouseSliding = !1),
            this._stop(t, this._handleIndex),
            this._change(t, this._handleIndex),
            (this._handleIndex = null),
            (this._clickOffset = null),
            (this._animateOff = !1),
            !1
          );
        },
        _detectOrientation: function () {
          this.orientation =
            "vertical" === this.options.orientation ? "vertical" : "horizontal";
        },
        _normValueFromMouse: function (t) {
          var e, i, n, s, o;
          return (
            "horizontal" === this.orientation
              ? ((e = this.elementSize.width),
                (i =
                  t.x -
                  this.elementOffset.left -
                  (this._clickOffset ? this._clickOffset.left : 0)))
              : ((e = this.elementSize.height),
                (i =
                  t.y -
                  this.elementOffset.top -
                  (this._clickOffset ? this._clickOffset.top : 0))),
            (n = i / e) > 1 && (n = 1),
            0 > n && (n = 0),
            "vertical" === this.orientation && (n = 1 - n),
            (s = this._valueMax() - this._valueMin()),
            (o = this._valueMin() + n * s),
            this._trimAlignValue(o)
          );
        },
        _uiHash: function (t, e, i) {
          var n = {
            handle: this.handles[t],
            handleIndex: t,
            value: void 0 !== e ? e : this.value(),
          };
          return (
            this._hasMultipleValues() &&
              ((n.value = void 0 !== e ? e : this.values(t)),
              (n.values = i || this.values())),
            n
          );
        },
        _hasMultipleValues: function () {
          return this.options.values && this.options.values.length;
        },
        _start: function (t, e) {
          return this._trigger("start", t, this._uiHash(e));
        },
        _slide: function (t, e, i) {
          var n,
            s = this.value(),
            o = this.values();
          this._hasMultipleValues() &&
            ((n = this.values(e ? 0 : 1)),
            (s = this.values(e)),
            2 === this.options.values.length &&
              !0 === this.options.range &&
              (i = 0 === e ? Math.min(n, i) : Math.max(n, i)),
            (o[e] = i)),
            i !== s &&
              !1 !== this._trigger("slide", t, this._uiHash(e, i, o)) &&
              (this._hasMultipleValues() ? this.values(e, i) : this.value(i));
        },
        _stop: function (t, e) {
          this._trigger("stop", t, this._uiHash(e));
        },
        _change: function (t, e) {
          this._keySliding ||
            this._mouseSliding ||
            ((this._lastChangedValue = e),
            this._trigger("change", t, this._uiHash(e)));
        },
        value: function (t) {
          return arguments.length
            ? ((this.options.value = this._trimAlignValue(t)),
              this._refreshValue(),
              void this._change(null, 0))
            : this._value();
        },
        values: function (e, i) {
          var n, s, o;
          if (arguments.length > 1)
            return (
              (this.options.values[e] = this._trimAlignValue(i)),
              this._refreshValue(),
              void this._change(null, e)
            );
          if (!arguments.length) return this._values();
          if (!t.isArray(arguments[0]))
            return this._hasMultipleValues() ? this._values(e) : this.value();
          for (
            n = this.options.values, s = arguments[0], o = 0;
            n.length > o;
            o += 1
          )
            (n[o] = this._trimAlignValue(s[o])), this._change(null, o);
          this._refreshValue();
        },
        _setOption: function (e, i) {
          var n,
            s = 0;
          switch (
            ("range" === e &&
              !0 === this.options.range &&
              ("min" === i
                ? ((this.options.value = this._values(0)),
                  (this.options.values = null))
                : "max" === i &&
                  ((this.options.value = this._values(
                    this.options.values.length - 1
                  )),
                  (this.options.values = null))),
            t.isArray(this.options.values) && (s = this.options.values.length),
            this._super(e, i),
            e)
          ) {
            case "orientation":
              this._detectOrientation(),
                this._removeClass(
                  "ui-slider-horizontal ui-slider-vertical"
                )._addClass("ui-slider-" + this.orientation),
                this._refreshValue(),
                this.options.range && this._refreshRange(i),
                this.handles.css("horizontal" === i ? "bottom" : "left", "");
              break;
            case "value":
              (this._animateOff = !0),
                this._refreshValue(),
                this._change(null, 0),
                (this._animateOff = !1);
              break;
            case "values":
              for (
                this._animateOff = !0, this._refreshValue(), n = s - 1;
                n >= 0;
                n--
              )
                this._change(null, n);
              this._animateOff = !1;
              break;
            case "step":
            case "min":
            case "max":
              (this._animateOff = !0),
                this._calculateNewMax(),
                this._refreshValue(),
                (this._animateOff = !1);
              break;
            case "range":
              (this._animateOff = !0), this._refresh(), (this._animateOff = !1);
          }
        },
        _setOptionDisabled: function (t) {
          this._super(t), this._toggleClass(null, "ui-state-disabled", !!t);
        },
        _value: function () {
          var t = this.options.value;
          return this._trimAlignValue(t);
        },
        _values: function (t) {
          var e, i, n;
          if (arguments.length)
            return (e = this.options.values[t]), this._trimAlignValue(e);
          if (this._hasMultipleValues()) {
            for (i = this.options.values.slice(), n = 0; i.length > n; n += 1)
              i[n] = this._trimAlignValue(i[n]);
            return i;
          }
          return [];
        },
        _trimAlignValue: function (t) {
          if (this._valueMin() >= t) return this._valueMin();
          if (t >= this._valueMax()) return this._valueMax();
          var e = this.options.step > 0 ? this.options.step : 1,
            i = (t - this._valueMin()) % e,
            n = t - i;
          return (
            2 * Math.abs(i) >= e && (n += i > 0 ? e : -e),
            parseFloat(n.toFixed(5))
          );
        },
        _calculateNewMax: function () {
          var t = this.options.max,
            e = this._valueMin(),
            i = this.options.step;
          (t = Math.round((t - e) / i) * i + e) > this.options.max && (t -= i),
            (this.max = parseFloat(t.toFixed(this._precision())));
        },
        _precision: function () {
          var t = this._precisionOf(this.options.step);
          return (
            null !== this.options.min &&
              (t = Math.max(t, this._precisionOf(this.options.min))),
            t
          );
        },
        _precisionOf: function (t) {
          var e = "" + t,
            i = e.indexOf(".");
          return -1 === i ? 0 : e.length - i - 1;
        },
        _valueMin: function () {
          return this.options.min;
        },
        _valueMax: function () {
          return this.max;
        },
        _refreshRange: function (t) {
          "vertical" === t && this.range.css({ width: "", left: "" }),
            "horizontal" === t && this.range.css({ height: "", bottom: "" });
        },
        _refreshValue: function () {
          var e,
            i,
            n,
            s,
            o,
            r = this.options.range,
            a = this.options,
            l = this,
            h = !this._animateOff && a.animate,
            c = {};
          this._hasMultipleValues()
            ? this.handles.each(function (n) {
                (i =
                  ((l.values(n) - l._valueMin()) /
                    (l._valueMax() - l._valueMin())) *
                  100),
                  (c["horizontal" === l.orientation ? "left" : "bottom"] =
                    i + "%"),
                  t(this).stop(1, 1)[h ? "animate" : "css"](c, a.animate),
                  !0 === l.options.range &&
                    ("horizontal" === l.orientation
                      ? (0 === n &&
                          l.range
                            .stop(1, 1)
                            [h ? "animate" : "css"](
                              { left: i + "%" },
                              a.animate
                            ),
                        1 === n &&
                          l.range[h ? "animate" : "css"](
                            { width: i - e + "%" },
                            { queue: !1, duration: a.animate }
                          ))
                      : (0 === n &&
                          l.range
                            .stop(1, 1)
                            [h ? "animate" : "css"](
                              { bottom: i + "%" },
                              a.animate
                            ),
                        1 === n &&
                          l.range[h ? "animate" : "css"](
                            { height: i - e + "%" },
                            { queue: !1, duration: a.animate }
                          ))),
                  (e = i);
              })
            : ((n = this.value()),
              (s = this._valueMin()),
              (o = this._valueMax()),
              (i = o !== s ? ((n - s) / (o - s)) * 100 : 0),
              (c["horizontal" === this.orientation ? "left" : "bottom"] =
                i + "%"),
              this.handle.stop(1, 1)[h ? "animate" : "css"](c, a.animate),
              "min" === r &&
                "horizontal" === this.orientation &&
                this.range
                  .stop(1, 1)
                  [h ? "animate" : "css"]({ width: i + "%" }, a.animate),
              "max" === r &&
                "horizontal" === this.orientation &&
                this.range
                  .stop(1, 1)
                  [h ? "animate" : "css"]({ width: 100 - i + "%" }, a.animate),
              "min" === r &&
                "vertical" === this.orientation &&
                this.range
                  .stop(1, 1)
                  [h ? "animate" : "css"]({ height: i + "%" }, a.animate),
              "max" === r &&
                "vertical" === this.orientation &&
                this.range
                  .stop(1, 1)
                  [h ? "animate" : "css"](
                    { height: 100 - i + "%" },
                    a.animate
                  ));
        },
        _handleEvents: {
          keydown: function (e) {
            var i,
              n,
              s,
              o = t(e.target).data("ui-slider-handle-index");
            switch (e.keyCode) {
              case t.ui.keyCode.HOME:
              case t.ui.keyCode.END:
              case t.ui.keyCode.PAGE_UP:
              case t.ui.keyCode.PAGE_DOWN:
              case t.ui.keyCode.UP:
              case t.ui.keyCode.RIGHT:
              case t.ui.keyCode.DOWN:
              case t.ui.keyCode.LEFT:
                if (
                  (e.preventDefault(),
                  !this._keySliding &&
                    ((this._keySliding = !0),
                    this._addClass(t(e.target), null, "ui-state-active"),
                    !1 === this._start(e, o)))
                )
                  return;
            }
            switch (
              ((s = this.options.step),
              (i = n =
                this._hasMultipleValues() ? this.values(o) : this.value()),
              e.keyCode)
            ) {
              case t.ui.keyCode.HOME:
                n = this._valueMin();
                break;
              case t.ui.keyCode.END:
                n = this._valueMax();
                break;
              case t.ui.keyCode.PAGE_UP:
                n = this._trimAlignValue(
                  i + (this._valueMax() - this._valueMin()) / this.numPages
                );
                break;
              case t.ui.keyCode.PAGE_DOWN:
                n = this._trimAlignValue(
                  i - (this._valueMax() - this._valueMin()) / this.numPages
                );
                break;
              case t.ui.keyCode.UP:
              case t.ui.keyCode.RIGHT:
                if (i === this._valueMax()) return;
                n = this._trimAlignValue(i + s);
                break;
              case t.ui.keyCode.DOWN:
              case t.ui.keyCode.LEFT:
                if (i === this._valueMin()) return;
                n = this._trimAlignValue(i - s);
            }
            this._slide(e, o, n);
          },
          keyup: function (e) {
            var i = t(e.target).data("ui-slider-handle-index");
            this._keySliding &&
              ((this._keySliding = !1),
              this._stop(e, i),
              this._change(e, i),
              this._removeClass(t(e.target), null, "ui-state-active"));
          },
        },
      }),
      t.widget("ui.spinner", {
        version: "1.12.1",
        defaultElement: "<input>",
        widgetEventPrefix: "spin",
        options: {
          classes: {
            "ui-spinner": "ui-corner-all",
            "ui-spinner-down": "ui-corner-br",
            "ui-spinner-up": "ui-corner-tr",
          },
          culture: null,
          icons: { down: "ui-icon-triangle-1-s", up: "ui-icon-triangle-1-n" },
          incremental: !0,
          max: null,
          min: null,
          numberFormat: null,
          page: 10,
          step: 1,
          change: null,
          spin: null,
          start: null,
          stop: null,
        },
        _create: function () {
          this._setOption("max", this.options.max),
            this._setOption("min", this.options.min),
            this._setOption("step", this.options.step),
            "" !== this.value() && this._value(this.element.val(), !0),
            this._draw(),
            this._on(this._events),
            this._refresh(),
            this._on(this.window, {
              beforeunload: function () {
                this.element.removeAttr("autocomplete");
              },
            });
        },
        _getCreateOptions: function () {
          var e = this._super(),
            i = this.element;
          return (
            t.each(["min", "max", "step"], function (t, n) {
              var s = i.attr(n);
              null != s && s.length && (e[n] = s);
            }),
            e
          );
        },
        _events: {
          keydown: function (t) {
            this._start(t) && this._keydown(t) && t.preventDefault();
          },
          keyup: "_stop",
          focus: function () {
            this.previous = this.element.val();
          },
          blur: function (t) {
            return this.cancelBlur
              ? void delete this.cancelBlur
              : (this._stop(),
                this._refresh(),
                void (
                  this.previous !== this.element.val() &&
                  this._trigger("change", t)
                ));
          },
          mousewheel: function (t, e) {
            if (e) {
              if (!this.spinning && !this._start(t)) return !1;
              this._spin((e > 0 ? 1 : -1) * this.options.step, t),
                clearTimeout(this.mousewheelTimer),
                (this.mousewheelTimer = this._delay(function () {
                  this.spinning && this._stop(t);
                }, 100)),
                t.preventDefault();
            }
          },
          "mousedown .ui-spinner-button": function (e) {
            function i() {
              this.element[0] === t.ui.safeActiveElement(this.document[0]) ||
                (this.element.trigger("focus"),
                (this.previous = n),
                this._delay(function () {
                  this.previous = n;
                }));
            }
            var n;
            (n =
              this.element[0] === t.ui.safeActiveElement(this.document[0])
                ? this.previous
                : this.element.val()),
              e.preventDefault(),
              i.call(this),
              (this.cancelBlur = !0),
              this._delay(function () {
                delete this.cancelBlur, i.call(this);
              }),
              !1 !== this._start(e) &&
                this._repeat(
                  null,
                  t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1,
                  e
                );
          },
          "mouseup .ui-spinner-button": "_stop",
          "mouseenter .ui-spinner-button": function (e) {
            return t(e.currentTarget).hasClass("ui-state-active")
              ? !1 !== this._start(e) &&
                  void this._repeat(
                    null,
                    t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1,
                    e
                  )
              : void 0;
          },
          "mouseleave .ui-spinner-button": "_stop",
        },
        _enhance: function () {
          this.uiSpinner = this.element
            .attr("autocomplete", "off")
            .wrap("<span>")
            .parent()
            .append("<a></a><a></a>");
        },
        _draw: function () {
          this._enhance(),
            this._addClass(
              this.uiSpinner,
              "ui-spinner",
              "ui-widget ui-widget-content"
            ),
            this._addClass("ui-spinner-input"),
            this.element.attr("role", "spinbutton"),
            (this.buttons = this.uiSpinner
              .children("a")
              .attr("tabIndex", -1)
              .attr("aria-hidden", !0)
              .button({ classes: { "ui-button": "" } })),
            this._removeClass(this.buttons, "ui-corner-all"),
            this._addClass(
              this.buttons.first(),
              "ui-spinner-button ui-spinner-up"
            ),
            this._addClass(
              this.buttons.last(),
              "ui-spinner-button ui-spinner-down"
            ),
            this.buttons
              .first()
              .button({ icon: this.options.icons.up, showLabel: !1 }),
            this.buttons
              .last()
              .button({ icon: this.options.icons.down, showLabel: !1 }),
            this.buttons.height() > Math.ceil(0.5 * this.uiSpinner.height()) &&
              this.uiSpinner.height() > 0 &&
              this.uiSpinner.height(this.uiSpinner.height());
        },
        _keydown: function (e) {
          var i = this.options,
            n = t.ui.keyCode;
          switch (e.keyCode) {
            case n.UP:
              return this._repeat(null, 1, e), !0;
            case n.DOWN:
              return this._repeat(null, -1, e), !0;
            case n.PAGE_UP:
              return this._repeat(null, i.page, e), !0;
            case n.PAGE_DOWN:
              return this._repeat(null, -i.page, e), !0;
          }
          return !1;
        },
        _start: function (t) {
          return (
            !(!this.spinning && !1 === this._trigger("start", t)) &&
            (this.counter || (this.counter = 1), (this.spinning = !0), !0)
          );
        },
        _repeat: function (t, e, i) {
          (t = t || 500),
            clearTimeout(this.timer),
            (this.timer = this._delay(function () {
              this._repeat(40, e, i);
            }, t)),
            this._spin(e * this.options.step, i);
        },
        _spin: function (t, e) {
          var i = this.value() || 0;
          this.counter || (this.counter = 1),
            (i = this._adjustValue(i + t * this._increment(this.counter))),
            (this.spinning && !1 === this._trigger("spin", e, { value: i })) ||
              (this._value(i), this.counter++);
        },
        _increment: function (e) {
          var i = this.options.incremental;
          return i
            ? t.isFunction(i)
              ? i(e)
              : Math.floor(
                  (e * e * e) / 5e4 - (e * e) / 500 + (17 * e) / 200 + 1
                )
            : 1;
        },
        _precision: function () {
          var t = this._precisionOf(this.options.step);
          return (
            null !== this.options.min &&
              (t = Math.max(t, this._precisionOf(this.options.min))),
            t
          );
        },
        _precisionOf: function (t) {
          var e = "" + t,
            i = e.indexOf(".");
          return -1 === i ? 0 : e.length - i - 1;
        },
        _adjustValue: function (t) {
          var e,
            i,
            n = this.options;
          return (
            (i = t - (e = null !== n.min ? n.min : 0)),
            (t = e + (i = Math.round(i / n.step) * n.step)),
            (t = parseFloat(t.toFixed(this._precision()))),
            null !== n.max && t > n.max
              ? n.max
              : null !== n.min && n.min > t
              ? n.min
              : t
          );
        },
        _stop: function (t) {
          this.spinning &&
            (clearTimeout(this.timer),
            clearTimeout(this.mousewheelTimer),
            (this.counter = 0),
            (this.spinning = !1),
            this._trigger("stop", t));
        },
        _setOption: function (t, e) {
          var i, n, s;
          return "culture" === t || "numberFormat" === t
            ? ((i = this._parse(this.element.val())),
              (this.options[t] = e),
              void this.element.val(this._format(i)))
            : (("max" === t || "min" === t || "step" === t) &&
                "string" == typeof e &&
                (e = this._parse(e)),
              "icons" === t &&
                ((n = this.buttons.first().find(".ui-icon")),
                this._removeClass(n, null, this.options.icons.up),
                this._addClass(n, null, e.up),
                (s = this.buttons.last().find(".ui-icon")),
                this._removeClass(s, null, this.options.icons.down),
                this._addClass(s, null, e.down)),
              void this._super(t, e));
        },
        _setOptionDisabled: function (t) {
          this._super(t),
            this._toggleClass(this.uiSpinner, null, "ui-state-disabled", !!t),
            this.element.prop("disabled", !!t),
            this.buttons.button(t ? "disable" : "enable");
        },
        _setOptions: o(function (t) {
          this._super(t);
        }),
        _parse: function (t) {
          return (
            "string" == typeof t &&
              "" !== t &&
              (t =
                window.Globalize && this.options.numberFormat
                  ? Globalize.parseFloat(t, 10, this.options.culture)
                  : +t),
            "" === t || isNaN(t) ? null : t
          );
        },
        _format: function (t) {
          return "" === t
            ? ""
            : window.Globalize && this.options.numberFormat
            ? Globalize.format(
                t,
                this.options.numberFormat,
                this.options.culture
              )
            : t;
        },
        _refresh: function () {
          this.element.attr({
            "aria-valuemin": this.options.min,
            "aria-valuemax": this.options.max,
            "aria-valuenow": this._parse(this.element.val()),
          });
        },
        isValid: function () {
          var t = this.value();
          return null !== t && t === this._adjustValue(t);
        },
        _value: function (t, e) {
          var i;
          "" !== t &&
            null !== (i = this._parse(t)) &&
            (e || (i = this._adjustValue(i)), (t = this._format(i))),
            this.element.val(t),
            this._refresh();
        },
        _destroy: function () {
          this.element
            .prop("disabled", !1)
            .removeAttr(
              "autocomplete role aria-valuemin aria-valuemax aria-valuenow"
            ),
            this.uiSpinner.replaceWith(this.element);
        },
        stepUp: o(function (t) {
          this._stepUp(t);
        }),
        _stepUp: function (t) {
          this._start() &&
            (this._spin((t || 1) * this.options.step), this._stop());
        },
        stepDown: o(function (t) {
          this._stepDown(t);
        }),
        _stepDown: function (t) {
          this._start() &&
            (this._spin((t || 1) * -this.options.step), this._stop());
        },
        pageUp: o(function (t) {
          this._stepUp((t || 1) * this.options.page);
        }),
        pageDown: o(function (t) {
          this._stepDown((t || 1) * this.options.page);
        }),
        value: function (t) {
          return arguments.length
            ? void o(this._value).call(this, t)
            : this._parse(this.element.val());
        },
        widget: function () {
          return this.uiSpinner;
        },
      }),
      !1 !== t.uiBackCompat &&
        t.widget("ui.spinner", t.ui.spinner, {
          _enhance: function () {
            this.uiSpinner = this.element
              .attr("autocomplete", "off")
              .wrap(this._uiSpinnerHtml())
              .parent()
              .append(this._buttonHtml());
          },
          _uiSpinnerHtml: function () {
            return "<span>";
          },
          _buttonHtml: function () {
            return "<a></a><a></a>";
          },
        }),
      t.ui.spinner,
      t.widget("ui.tabs", {
        version: "1.12.1",
        delay: 300,
        options: {
          active: null,
          classes: {
            "ui-tabs": "ui-corner-all",
            "ui-tabs-nav": "ui-corner-all",
            "ui-tabs-panel": "ui-corner-bottom",
            "ui-tabs-tab": "ui-corner-top",
          },
          collapsible: !1,
          event: "click",
          heightStyle: "content",
          hide: null,
          show: null,
          activate: null,
          beforeActivate: null,
          beforeLoad: null,
          load: null,
        },
        _isLocal: (function () {
          var t = /#.*$/;
          return function (e) {
            var i, n;
            (i = e.href.replace(t, "")), (n = location.href.replace(t, ""));
            try {
              i = decodeURIComponent(i);
            } catch (t) {}
            try {
              n = decodeURIComponent(n);
            } catch (t) {}
            return e.hash.length > 1 && i === n;
          };
        })(),
        _create: function () {
          var e = this,
            i = this.options;
          (this.running = !1),
            this._addClass("ui-tabs", "ui-widget ui-widget-content"),
            this._toggleClass("ui-tabs-collapsible", null, i.collapsible),
            this._processTabs(),
            (i.active = this._initialActive()),
            t.isArray(i.disabled) &&
              (i.disabled = t
                .unique(
                  i.disabled.concat(
                    t.map(this.tabs.filter(".ui-state-disabled"), function (t) {
                      return e.tabs.index(t);
                    })
                  )
                )
                .sort()),
            (this.active =
              !1 !== this.options.active && this.anchors.length
                ? this._findActive(i.active)
                : t()),
            this._refresh(),
            this.active.length && this.load(i.active);
        },
        _initialActive: function () {
          var e = this.options.active,
            i = this.options.collapsible,
            n = location.hash.substring(1);
          return (
            null === e &&
              (n &&
                this.tabs.each(function (i, s) {
                  return t(s).attr("aria-controls") === n
                    ? ((e = i), !1)
                    : void 0;
                }),
              null === e &&
                (e = this.tabs.index(this.tabs.filter(".ui-tabs-active"))),
              (null === e || -1 === e) && (e = !!this.tabs.length && 0)),
            !1 !== e &&
              -1 === (e = this.tabs.index(this.tabs.eq(e))) &&
              (e = !i && 0),
            !i && !1 === e && this.anchors.length && (e = 0),
            e
          );
        },
        _getCreateEventData: function () {
          return {
            tab: this.active,
            panel: this.active.length ? this._getPanelForTab(this.active) : t(),
          };
        },
        _tabKeydown: function (e) {
          var i = t(t.ui.safeActiveElement(this.document[0])).closest("li"),
            n = this.tabs.index(i),
            s = !0;
          if (!this._handlePageNav(e)) {
            switch (e.keyCode) {
              case t.ui.keyCode.RIGHT:
              case t.ui.keyCode.DOWN:
                n++;
                break;
              case t.ui.keyCode.UP:
              case t.ui.keyCode.LEFT:
                (s = !1), n--;
                break;
              case t.ui.keyCode.END:
                n = this.anchors.length - 1;
                break;
              case t.ui.keyCode.HOME:
                n = 0;
                break;
              case t.ui.keyCode.SPACE:
                return (
                  e.preventDefault(),
                  clearTimeout(this.activating),
                  void this._activate(n)
                );
              case t.ui.keyCode.ENTER:
                return (
                  e.preventDefault(),
                  clearTimeout(this.activating),
                  void this._activate(n !== this.options.active && n)
                );
              default:
                return;
            }
            e.preventDefault(),
              clearTimeout(this.activating),
              (n = this._focusNextTab(n, s)),
              e.ctrlKey ||
                e.metaKey ||
                (i.attr("aria-selected", "false"),
                this.tabs.eq(n).attr("aria-selected", "true"),
                (this.activating = this._delay(function () {
                  this.option("active", n);
                }, this.delay)));
          }
        },
        _panelKeydown: function (e) {
          this._handlePageNav(e) ||
            (e.ctrlKey &&
              e.keyCode === t.ui.keyCode.UP &&
              (e.preventDefault(), this.active.trigger("focus")));
        },
        _handlePageNav: function (e) {
          return e.altKey && e.keyCode === t.ui.keyCode.PAGE_UP
            ? (this._activate(this._focusNextTab(this.options.active - 1, !1)),
              !0)
            : e.altKey && e.keyCode === t.ui.keyCode.PAGE_DOWN
            ? (this._activate(this._focusNextTab(this.options.active + 1, !0)),
              !0)
            : void 0;
        },
        _findNextTab: function (e, i) {
          for (
            var n = this.tabs.length - 1;
            -1 !==
            t.inArray(
              (e > n && (e = 0), 0 > e && (e = n), e),
              this.options.disabled
            );

          )
            e = i ? e + 1 : e - 1;
          return e;
        },
        _focusNextTab: function (t, e) {
          return (
            (t = this._findNextTab(t, e)), this.tabs.eq(t).trigger("focus"), t
          );
        },
        _setOption: function (t, e) {
          return "active" === t
            ? void this._activate(e)
            : (this._super(t, e),
              "collapsible" === t &&
                (this._toggleClass("ui-tabs-collapsible", null, e),
                e || !1 !== this.options.active || this._activate(0)),
              "event" === t && this._setupEvents(e),
              void ("heightStyle" === t && this._setupHeightStyle(e)));
        },
        _sanitizeSelector: function (t) {
          return t
            ? t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&")
            : "";
        },
        refresh: function () {
          var e = this.options,
            i = this.tablist.children(":has(a[href])");
          (e.disabled = t.map(i.filter(".ui-state-disabled"), function (t) {
            return i.index(t);
          })),
            this._processTabs(),
            !1 !== e.active && this.anchors.length
              ? this.active.length &&
                !t.contains(this.tablist[0], this.active[0])
                ? this.tabs.length === e.disabled.length
                  ? ((e.active = !1), (this.active = t()))
                  : this._activate(
                      this._findNextTab(Math.max(0, e.active - 1), !1)
                    )
                : (e.active = this.tabs.index(this.active))
              : ((e.active = !1), (this.active = t())),
            this._refresh();
        },
        _refresh: function () {
          this._setOptionDisabled(this.options.disabled),
            this._setupEvents(this.options.event),
            this._setupHeightStyle(this.options.heightStyle),
            this.tabs
              .not(this.active)
              .attr({
                "aria-selected": "false",
                "aria-expanded": "false",
                tabIndex: -1,
              }),
            this.panels
              .not(this._getPanelForTab(this.active))
              .hide()
              .attr({ "aria-hidden": "true" }),
            this.active.length
              ? (this.active.attr({
                  "aria-selected": "true",
                  "aria-expanded": "true",
                  tabIndex: 0,
                }),
                this._addClass(
                  this.active,
                  "ui-tabs-active",
                  "ui-state-active"
                ),
                this._getPanelForTab(this.active)
                  .show()
                  .attr({ "aria-hidden": "false" }))
              : this.tabs.eq(0).attr("tabIndex", 0);
        },
        _processTabs: function () {
          var e = this,
            i = this.tabs,
            n = this.anchors,
            s = this.panels;
          (this.tablist = this._getList().attr("role", "tablist")),
            this._addClass(
              this.tablist,
              "ui-tabs-nav",
              "ui-helper-reset ui-helper-clearfix ui-widget-header"
            ),
            this.tablist
              .on("mousedown" + this.eventNamespace, "> li", function (e) {
                t(this).is(".ui-state-disabled") && e.preventDefault();
              })
              .on(
                "focus" + this.eventNamespace,
                ".ui-tabs-anchor",
                function () {
                  t(this).closest("li").is(".ui-state-disabled") && this.blur();
                }
              ),
            (this.tabs = this.tablist
              .find("> li:has(a[href])")
              .attr({ role: "tab", tabIndex: -1 })),
            this._addClass(this.tabs, "ui-tabs-tab", "ui-state-default"),
            (this.anchors = this.tabs
              .map(function () {
                return t("a", this)[0];
              })
              .attr({ role: "presentation", tabIndex: -1 })),
            this._addClass(this.anchors, "ui-tabs-anchor"),
            (this.panels = t()),
            this.anchors.each(function (i, n) {
              var s,
                o,
                r,
                a = t(n).uniqueId().attr("id"),
                l = t(n).closest("li"),
                h = l.attr("aria-controls");
              e._isLocal(n)
                ? ((r = (s = n.hash).substring(1)),
                  (o = e.element.find(e._sanitizeSelector(s))))
                : ((s =
                    "#" +
                    (r = l.attr("aria-controls") || t({}).uniqueId()[0].id)),
                  (o = e.element.find(s)).length ||
                    (o = e._createPanel(r)).insertAfter(
                      e.panels[i - 1] || e.tablist
                    ),
                  o.attr("aria-live", "polite")),
                o.length && (e.panels = e.panels.add(o)),
                h && l.data("ui-tabs-aria-controls", h),
                l.attr({ "aria-controls": r, "aria-labelledby": a }),
                o.attr("aria-labelledby", a);
            }),
            this.panels.attr("role", "tabpanel"),
            this._addClass(this.panels, "ui-tabs-panel", "ui-widget-content"),
            i &&
              (this._off(i.not(this.tabs)),
              this._off(n.not(this.anchors)),
              this._off(s.not(this.panels)));
        },
        _getList: function () {
          return this.tablist || this.element.find("ol, ul").eq(0);
        },
        _createPanel: function (e) {
          return t("<div>").attr("id", e).data("ui-tabs-destroy", !0);
        },
        _setOptionDisabled: function (e) {
          var i, n, s;
          for (
            t.isArray(e) &&
              (e.length
                ? e.length === this.anchors.length && (e = !0)
                : (e = !1)),
              s = 0;
            (n = this.tabs[s]);
            s++
          )
            (i = t(n)),
              !0 === e || -1 !== t.inArray(s, e)
                ? (i.attr("aria-disabled", "true"),
                  this._addClass(i, null, "ui-state-disabled"))
                : (i.removeAttr("aria-disabled"),
                  this._removeClass(i, null, "ui-state-disabled"));
          (this.options.disabled = e),
            this._toggleClass(
              this.widget(),
              this.widgetFullName + "-disabled",
              null,
              !0 === e
            );
        },
        _setupEvents: function (e) {
          var i = {};
          e &&
            t.each(e.split(" "), function (t, e) {
              i[e] = "_eventHandler";
            }),
            this._off(this.anchors.add(this.tabs).add(this.panels)),
            this._on(!0, this.anchors, {
              click: function (t) {
                t.preventDefault();
              },
            }),
            this._on(this.anchors, i),
            this._on(this.tabs, { keydown: "_tabKeydown" }),
            this._on(this.panels, { keydown: "_panelKeydown" }),
            this._focusable(this.tabs),
            this._hoverable(this.tabs);
        },
        _setupHeightStyle: function (e) {
          var i,
            n = this.element.parent();
          "fill" === e
            ? ((i = n.height()),
              (i -= this.element.outerHeight() - this.element.height()),
              this.element.siblings(":visible").each(function () {
                var e = t(this),
                  n = e.css("position");
                "absolute" !== n && "fixed" !== n && (i -= e.outerHeight(!0));
              }),
              this.element
                .children()
                .not(this.panels)
                .each(function () {
                  i -= t(this).outerHeight(!0);
                }),
              this.panels
                .each(function () {
                  t(this).height(
                    Math.max(0, i - t(this).innerHeight() + t(this).height())
                  );
                })
                .css("overflow", "auto"))
            : "auto" === e &&
              ((i = 0),
              this.panels
                .each(function () {
                  i = Math.max(i, t(this).height("").height());
                })
                .height(i));
        },
        _eventHandler: function (e) {
          var i = this.options,
            n = this.active,
            s = t(e.currentTarget).closest("li"),
            o = s[0] === n[0],
            r = o && i.collapsible,
            a = r ? t() : this._getPanelForTab(s),
            l = n.length ? this._getPanelForTab(n) : t(),
            h = { oldTab: n, oldPanel: l, newTab: r ? t() : s, newPanel: a };
          e.preventDefault(),
            s.hasClass("ui-state-disabled") ||
              s.hasClass("ui-tabs-loading") ||
              this.running ||
              (o && !i.collapsible) ||
              !1 === this._trigger("beforeActivate", e, h) ||
              ((i.active = !r && this.tabs.index(s)),
              (this.active = o ? t() : s),
              this.xhr && this.xhr.abort(),
              l.length ||
                a.length ||
                t.error("jQuery UI Tabs: Mismatching fragment identifier."),
              a.length && this.load(this.tabs.index(s), e),
              this._toggle(e, h));
        },
        _toggle: function (e, i) {
          function n() {
            (o.running = !1), o._trigger("activate", e, i);
          }
          function s() {
            o._addClass(
              i.newTab.closest("li"),
              "ui-tabs-active",
              "ui-state-active"
            ),
              r.length && o.options.show
                ? o._show(r, o.options.show, n)
                : (r.show(), n());
          }
          var o = this,
            r = i.newPanel,
            a = i.oldPanel;
          (this.running = !0),
            a.length && this.options.hide
              ? this._hide(a, this.options.hide, function () {
                  o._removeClass(
                    i.oldTab.closest("li"),
                    "ui-tabs-active",
                    "ui-state-active"
                  ),
                    s();
                })
              : (this._removeClass(
                  i.oldTab.closest("li"),
                  "ui-tabs-active",
                  "ui-state-active"
                ),
                a.hide(),
                s()),
            a.attr("aria-hidden", "true"),
            i.oldTab.attr({
              "aria-selected": "false",
              "aria-expanded": "false",
            }),
            r.length && a.length
              ? i.oldTab.attr("tabIndex", -1)
              : r.length &&
                this.tabs
                  .filter(function () {
                    return 0 === t(this).attr("tabIndex");
                  })
                  .attr("tabIndex", -1),
            r.attr("aria-hidden", "false"),
            i.newTab.attr({
              "aria-selected": "true",
              "aria-expanded": "true",
              tabIndex: 0,
            });
        },
        _activate: function (e) {
          var i,
            n = this._findActive(e);
          n[0] !== this.active[0] &&
            (n.length || (n = this.active),
            (i = n.find(".ui-tabs-anchor")[0]),
            this._eventHandler({
              target: i,
              currentTarget: i,
              preventDefault: t.noop,
            }));
        },
        _findActive: function (e) {
          return !1 === e ? t() : this.tabs.eq(e);
        },
        _getIndex: function (e) {
          return (
            "string" == typeof e &&
              (e = this.anchors.index(
                this.anchors.filter("[href$='" + t.ui.escapeSelector(e) + "']")
              )),
            e
          );
        },
        _destroy: function () {
          this.xhr && this.xhr.abort(),
            this.tablist.removeAttr("role").off(this.eventNamespace),
            this.anchors.removeAttr("role tabIndex").removeUniqueId(),
            this.tabs.add(this.panels).each(function () {
              t.data(this, "ui-tabs-destroy")
                ? t(this).remove()
                : t(this).removeAttr(
                    "role tabIndex aria-live aria-busy aria-selected aria-labelledby aria-hidden aria-expanded"
                  );
            }),
            this.tabs.each(function () {
              var e = t(this),
                i = e.data("ui-tabs-aria-controls");
              i
                ? e.attr("aria-controls", i).removeData("ui-tabs-aria-controls")
                : e.removeAttr("aria-controls");
            }),
            this.panels.show(),
            "content" !== this.options.heightStyle &&
              this.panels.css("height", "");
        },
        enable: function (e) {
          var i = this.options.disabled;
          !1 !== i &&
            (void 0 === e
              ? (i = !1)
              : ((e = this._getIndex(e)),
                (i = t.isArray(i)
                  ? t.map(i, function (t) {
                      return t !== e ? t : null;
                    })
                  : t.map(this.tabs, function (t, i) {
                      return i !== e ? i : null;
                    }))),
            this._setOptionDisabled(i));
        },
        disable: function (e) {
          var i = this.options.disabled;
          if (!0 !== i) {
            if (void 0 === e) i = !0;
            else {
              if (((e = this._getIndex(e)), -1 !== t.inArray(e, i))) return;
              i = t.isArray(i) ? t.merge([e], i).sort() : [e];
            }
            this._setOptionDisabled(i);
          }
        },
        load: function (e, i) {
          e = this._getIndex(e);
          var n = this,
            s = this.tabs.eq(e),
            o = s.find(".ui-tabs-anchor"),
            r = this._getPanelForTab(s),
            a = { tab: s, panel: r },
            l = function (t, e) {
              "abort" === e && n.panels.stop(!1, !0),
                n._removeClass(s, "ui-tabs-loading"),
                r.removeAttr("aria-busy"),
                t === n.xhr && delete n.xhr;
            };
          this._isLocal(o[0]) ||
            ((this.xhr = t.ajax(this._ajaxSettings(o, i, a))),
            this.xhr &&
              "canceled" !== this.xhr.statusText &&
              (this._addClass(s, "ui-tabs-loading"),
              r.attr("aria-busy", "true"),
              this.xhr
                .done(function (t, e, s) {
                  setTimeout(function () {
                    r.html(t), n._trigger("load", i, a), l(s, e);
                  }, 1);
                })
                .fail(function (t, e) {
                  setTimeout(function () {
                    l(t, e);
                  }, 1);
                })));
        },
        _ajaxSettings: function (e, i, n) {
          var s = this;
          return {
            url: e.attr("href").replace(/#.*$/, ""),
            beforeSend: function (e, o) {
              return s._trigger(
                "beforeLoad",
                i,
                t.extend({ jqXHR: e, ajaxSettings: o }, n)
              );
            },
          };
        },
        _getPanelForTab: function (e) {
          var i = t(e).attr("aria-controls");
          return this.element.find(this._sanitizeSelector("#" + i));
        },
      }),
      !1 !== t.uiBackCompat &&
        t.widget("ui.tabs", t.ui.tabs, {
          _processTabs: function () {
            this._superApply(arguments), this._addClass(this.tabs, "ui-tab");
          },
        }),
      t.ui.tabs,
      t.widget("ui.tooltip", {
        version: "1.12.1",
        options: {
          classes: { "ui-tooltip": "ui-corner-all ui-widget-shadow" },
          content: function () {
            var e = t(this).attr("title") || "";
            return t("<a>").text(e).html();
          },
          hide: !0,
          items: "[title]:not([disabled])",
          position: {
            my: "left top+15",
            at: "left bottom",
            collision: "flipfit flip",
          },
          show: !0,
          track: !1,
          close: null,
          open: null,
        },
        _addDescribedBy: function (e, i) {
          var n = (e.attr("aria-describedby") || "").split(/\s+/);
          n.push(i),
            e
              .data("ui-tooltip-id", i)
              .attr("aria-describedby", t.trim(n.join(" ")));
        },
        _removeDescribedBy: function (e) {
          var i = e.data("ui-tooltip-id"),
            n = (e.attr("aria-describedby") || "").split(/\s+/),
            s = t.inArray(i, n);
          -1 !== s && n.splice(s, 1),
            e.removeData("ui-tooltip-id"),
            (n = t.trim(n.join(" ")))
              ? e.attr("aria-describedby", n)
              : e.removeAttr("aria-describedby");
        },
        _create: function () {
          this._on({ mouseover: "open", focusin: "open" }),
            (this.tooltips = {}),
            (this.parents = {}),
            (this.liveRegion = t("<div>")
              .attr({
                role: "log",
                "aria-live": "assertive",
                "aria-relevant": "additions",
              })
              .appendTo(this.document[0].body)),
            this._addClass(
              this.liveRegion,
              null,
              "ui-helper-hidden-accessible"
            ),
            (this.disabledTitles = t([]));
        },
        _setOption: function (e, i) {
          var n = this;
          this._super(e, i),
            "content" === e &&
              t.each(this.tooltips, function (t, e) {
                n._updateContent(e.element);
              });
        },
        _setOptionDisabled: function (t) {
          this[t ? "_disable" : "_enable"]();
        },
        _disable: function () {
          var e = this;
          t.each(this.tooltips, function (i, n) {
            var s = t.Event("blur");
            (s.target = s.currentTarget = n.element[0]), e.close(s, !0);
          }),
            (this.disabledTitles = this.disabledTitles.add(
              this.element
                .find(this.options.items)
                .addBack()
                .filter(function () {
                  var e = t(this);
                  return e.is("[title]")
                    ? e
                        .data("ui-tooltip-title", e.attr("title"))
                        .removeAttr("title")
                    : void 0;
                })
            ));
        },
        _enable: function () {
          this.disabledTitles.each(function () {
            var e = t(this);
            e.data("ui-tooltip-title") &&
              e.attr("title", e.data("ui-tooltip-title"));
          }),
            (this.disabledTitles = t([]));
        },
        open: function (e) {
          var i = this,
            n = t(e ? e.target : this.element).closest(this.options.items);
          n.length &&
            !n.data("ui-tooltip-id") &&
            (n.attr("title") && n.data("ui-tooltip-title", n.attr("title")),
            n.data("ui-tooltip-open", !0),
            e &&
              "mouseover" === e.type &&
              n.parents().each(function () {
                var e,
                  n = t(this);
                n.data("ui-tooltip-open") &&
                  (((e = t.Event("blur")).target = e.currentTarget = this),
                  i.close(e, !0)),
                  n.attr("title") &&
                    (n.uniqueId(),
                    (i.parents[this.id] = {
                      element: this,
                      title: n.attr("title"),
                    }),
                    n.attr("title", ""));
              }),
            this._registerCloseHandlers(e, n),
            this._updateContent(n, e));
        },
        _updateContent: function (t, e) {
          var i,
            n = this.options.content,
            s = this,
            o = e ? e.type : null;
          return "string" == typeof n || n.nodeType || n.jquery
            ? this._open(e, t, n)
            : void (
                (i = n.call(t[0], function (i) {
                  s._delay(function () {
                    t.data("ui-tooltip-open") &&
                      (e && (e.type = o), this._open(e, t, i));
                  });
                })) && this._open(e, t, i)
              );
        },
        _open: function (e, i, n) {
          function s(t) {
            (h.of = t), r.is(":hidden") || r.position(h);
          }
          var o,
            r,
            a,
            l,
            h = t.extend({}, this.options.position);
          if (n) {
            if ((o = this._find(i)))
              return void o.tooltip.find(".ui-tooltip-content").html(n);
            i.is("[title]") &&
              (e && "mouseover" === e.type
                ? i.attr("title", "")
                : i.removeAttr("title")),
              (o = this._tooltip(i)),
              (r = o.tooltip),
              this._addDescribedBy(i, r.attr("id")),
              r.find(".ui-tooltip-content").html(n),
              this.liveRegion.children().hide(),
              (l = t("<div>").html(r.find(".ui-tooltip-content").html()))
                .removeAttr("name")
                .find("[name]")
                .removeAttr("name"),
              l.removeAttr("id").find("[id]").removeAttr("id"),
              l.appendTo(this.liveRegion),
              this.options.track && e && /^mouse/.test(e.type)
                ? (this._on(this.document, { mousemove: s }), s(e))
                : r.position(t.extend({ of: i }, this.options.position)),
              r.hide(),
              this._show(r, this.options.show),
              this.options.track &&
                this.options.show &&
                this.options.show.delay &&
                (a = this.delayedShow =
                  setInterval(function () {
                    r.is(":visible") && (s(h.of), clearInterval(a));
                  }, t.fx.interval)),
              this._trigger("open", e, { tooltip: r });
          }
        },
        _registerCloseHandlers: function (e, i) {
          var n = {
            keyup: function (e) {
              if (e.keyCode === t.ui.keyCode.ESCAPE) {
                var n = t.Event(e);
                (n.currentTarget = i[0]), this.close(n, !0);
              }
            },
          };
          i[0] !== this.element[0] &&
            (n.remove = function () {
              this._removeTooltip(this._find(i).tooltip);
            }),
            (e && "mouseover" !== e.type) || (n.mouseleave = "close"),
            (e && "focusin" !== e.type) || (n.focusout = "close"),
            this._on(!0, i, n);
        },
        close: function (e) {
          var i,
            n = this,
            s = t(e ? e.currentTarget : this.element),
            o = this._find(s);
          return o
            ? ((i = o.tooltip),
              void (
                o.closing ||
                (clearInterval(this.delayedShow),
                s.data("ui-tooltip-title") &&
                  !s.attr("title") &&
                  s.attr("title", s.data("ui-tooltip-title")),
                this._removeDescribedBy(s),
                (o.hiding = !0),
                i.stop(!0),
                this._hide(i, this.options.hide, function () {
                  n._removeTooltip(t(this));
                }),
                s.removeData("ui-tooltip-open"),
                this._off(s, "mouseleave focusout keyup"),
                s[0] !== this.element[0] && this._off(s, "remove"),
                this._off(this.document, "mousemove"),
                e &&
                  "mouseleave" === e.type &&
                  t.each(this.parents, function (e, i) {
                    t(i.element).attr("title", i.title), delete n.parents[e];
                  }),
                (o.closing = !0),
                this._trigger("close", e, { tooltip: i }),
                o.hiding || (o.closing = !1))
              ))
            : void s.removeData("ui-tooltip-open");
        },
        _tooltip: function (e) {
          var i = t("<div>").attr("role", "tooltip"),
            n = t("<div>").appendTo(i),
            s = i.uniqueId().attr("id");
          return (
            this._addClass(n, "ui-tooltip-content"),
            this._addClass(i, "ui-tooltip", "ui-widget ui-widget-content"),
            i.appendTo(this._appendTo(e)),
            (this.tooltips[s] = { element: e, tooltip: i })
          );
        },
        _find: function (t) {
          var e = t.data("ui-tooltip-id");
          return e ? this.tooltips[e] : null;
        },
        _removeTooltip: function (t) {
          t.remove(), delete this.tooltips[t.attr("id")];
        },
        _appendTo: function (t) {
          var e = t.closest(".ui-front, dialog");
          return e.length || (e = this.document[0].body), e;
        },
        _destroy: function () {
          var e = this;
          t.each(this.tooltips, function (i, n) {
            var s = t.Event("blur"),
              o = n.element;
            (s.target = s.currentTarget = o[0]),
              e.close(s, !0),
              t("#" + i).remove(),
              o.data("ui-tooltip-title") &&
                (o.attr("title") || o.attr("title", o.data("ui-tooltip-title")),
                o.removeData("ui-tooltip-title"));
          }),
            this.liveRegion.remove();
        },
      }),
      !1 !== t.uiBackCompat &&
        t.widget("ui.tooltip", t.ui.tooltip, {
          options: { tooltipClass: null },
          _tooltip: function () {
            var t = this._superApply(arguments);
            return (
              this.options.tooltipClass &&
                t.tooltip.addClass(this.options.tooltipClass),
              t
            );
          },
        }),
      t.ui.tooltip;
    var d = "ui-effects-",
      p = "ui-effects-style",
      f = "ui-effects-animated",
      g = t;
    (t.effects = { effect: {} }),
      (function (t, e) {
        function i(t, e, i) {
          var n = c[e.type] || {};
          return null == t
            ? i || !e.def
              ? null
              : e.def
            : ((t = n.floor ? ~~t : parseFloat(t)),
              isNaN(t)
                ? e.def
                : n.mod
                ? (t + n.mod) % n.mod
                : 0 > t
                ? 0
                : t > n.max
                ? n.max
                : t);
        }
        function n(i) {
          var n = l(),
            s = (n._rgba = []);
          return (
            (i = i.toLowerCase()),
            p(a, function (t, o) {
              var r,
                a = o.re.exec(i),
                l = a && o.parse(a),
                c = o.space || "rgba";
              return l
                ? ((r = n[c](l)),
                  (n[h[c].cache] = r[h[c].cache]),
                  (s = n._rgba = r._rgba),
                  !1)
                : e;
            }),
            s.length
              ? ("0,0,0,0" === s.join() && t.extend(s, o.transparent), n)
              : o[i]
          );
        }
        function s(t, e, i) {
          return 1 > 6 * (i = (i + 1) % 1)
            ? t + 6 * (e - t) * i
            : 1 > 2 * i
            ? e
            : 2 > 3 * i
            ? t + 6 * (e - t) * (2 / 3 - i)
            : t;
        }
        var o,
          r = /^([\-+])=\s*(\d+\.?\d*)/,
          a = [
            {
              re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
              parse: function (t) {
                return [t[1], t[2], t[3], t[4]];
              },
            },
            {
              re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
              parse: function (t) {
                return [2.55 * t[1], 2.55 * t[2], 2.55 * t[3], t[4]];
              },
            },
            {
              re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
              parse: function (t) {
                return [
                  parseInt(t[1], 16),
                  parseInt(t[2], 16),
                  parseInt(t[3], 16),
                ];
              },
            },
            {
              re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
              parse: function (t) {
                return [
                  parseInt(t[1] + t[1], 16),
                  parseInt(t[2] + t[2], 16),
                  parseInt(t[3] + t[3], 16),
                ];
              },
            },
            {
              re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
              space: "hsla",
              parse: function (t) {
                return [t[1], t[2] / 100, t[3] / 100, t[4]];
              },
            },
          ],
          l = (t.Color = function (e, i, n, s) {
            return new t.Color.fn.parse(e, i, n, s);
          }),
          h = {
            rgba: {
              props: {
                red: { idx: 0, type: "byte" },
                green: { idx: 1, type: "byte" },
                blue: { idx: 2, type: "byte" },
              },
            },
            hsla: {
              props: {
                hue: { idx: 0, type: "degrees" },
                saturation: { idx: 1, type: "percent" },
                lightness: { idx: 2, type: "percent" },
              },
            },
          },
          c = {
            byte: { floor: !0, max: 255 },
            percent: { max: 1 },
            degrees: { mod: 360, floor: !0 },
          },
          u = (l.support = {}),
          d = t("<p>")[0],
          p = t.each;
        (d.style.cssText = "background-color:rgba(1,1,1,.5)"),
          (u.rgba = d.style.backgroundColor.indexOf("rgba") > -1),
          p(h, function (t, e) {
            (e.cache = "_" + t),
              (e.props.alpha = { idx: 3, type: "percent", def: 1 });
          }),
          (l.fn = t.extend(l.prototype, {
            parse: function (s, r, a, c) {
              if (s === e) return (this._rgba = [null, null, null, null]), this;
              (s.jquery || s.nodeType) && ((s = t(s).css(r)), (r = e));
              var u = this,
                d = t.type(s),
                f = (this._rgba = []);
              return (
                r !== e && ((s = [s, r, a, c]), (d = "array")),
                "string" === d
                  ? this.parse(n(s) || o._default)
                  : "array" === d
                  ? (p(h.rgba.props, function (t, e) {
                      f[e.idx] = i(s[e.idx], e);
                    }),
                    this)
                  : "object" === d
                  ? (p(
                      h,
                      s instanceof l
                        ? function (t, e) {
                            s[e.cache] && (u[e.cache] = s[e.cache].slice());
                          }
                        : function (e, n) {
                            var o = n.cache;
                            p(n.props, function (t, e) {
                              if (!u[o] && n.to) {
                                if ("alpha" === t || null == s[t]) return;
                                u[o] = n.to(u._rgba);
                              }
                              u[o][e.idx] = i(s[t], e, !0);
                            }),
                              u[o] &&
                                0 > t.inArray(null, u[o].slice(0, 3)) &&
                                ((u[o][3] = 1),
                                n.from && (u._rgba = n.from(u[o])));
                          }
                    ),
                    this)
                  : e
              );
            },
            is: function (t) {
              var i = l(t),
                n = !0,
                s = this;
              return (
                p(h, function (t, o) {
                  var r,
                    a = i[o.cache];
                  return (
                    a &&
                      ((r = s[o.cache] || (o.to && o.to(s._rgba)) || []),
                      p(o.props, function (t, i) {
                        return null != a[i.idx]
                          ? (n = a[i.idx] === r[i.idx])
                          : e;
                      })),
                    n
                  );
                }),
                n
              );
            },
            _space: function () {
              var t = [],
                e = this;
              return (
                p(h, function (i, n) {
                  e[n.cache] && t.push(i);
                }),
                t.pop()
              );
            },
            transition: function (t, e) {
              var n = l(t),
                s = n._space(),
                o = h[s],
                r = 0 === this.alpha() ? l("transparent") : this,
                a = r[o.cache] || o.to(r._rgba),
                u = a.slice();
              return (
                (n = n[o.cache]),
                p(o.props, function (t, s) {
                  var o = s.idx,
                    r = a[o],
                    l = n[o],
                    h = c[s.type] || {};
                  null !== l &&
                    (null === r
                      ? (u[o] = l)
                      : (h.mod &&
                          (l - r > h.mod / 2
                            ? (r += h.mod)
                            : r - l > h.mod / 2 && (r -= h.mod)),
                        (u[o] = i((l - r) * e + r, s))));
                }),
                this[s](u)
              );
            },
            blend: function (e) {
              if (1 === this._rgba[3]) return this;
              var i = this._rgba.slice(),
                n = i.pop(),
                s = l(e)._rgba;
              return l(
                t.map(i, function (t, e) {
                  return (1 - n) * s[e] + n * t;
                })
              );
            },
            toRgbaString: function () {
              var e = "rgba(",
                i = t.map(this._rgba, function (t, e) {
                  return null == t ? (e > 2 ? 1 : 0) : t;
                });
              return 1 === i[3] && (i.pop(), (e = "rgb(")), e + i.join() + ")";
            },
            toHslaString: function () {
              var e = "hsla(",
                i = t.map(this.hsla(), function (t, e) {
                  return (
                    null == t && (t = e > 2 ? 1 : 0),
                    e && 3 > e && (t = Math.round(100 * t) + "%"),
                    t
                  );
                });
              return 1 === i[3] && (i.pop(), (e = "hsl(")), e + i.join() + ")";
            },
            toHexString: function (e) {
              var i = this._rgba.slice(),
                n = i.pop();
              return (
                e && i.push(~~(255 * n)),
                "#" +
                  t
                    .map(i, function (t) {
                      return 1 === (t = (t || 0).toString(16)).length
                        ? "0" + t
                        : t;
                    })
                    .join("")
              );
            },
            toString: function () {
              return 0 === this._rgba[3] ? "transparent" : this.toRgbaString();
            },
          })),
          (l.fn.parse.prototype = l.fn),
          (h.hsla.to = function (t) {
            if (null == t[0] || null == t[1] || null == t[2])
              return [null, null, null, t[3]];
            var e,
              i,
              n = t[0] / 255,
              s = t[1] / 255,
              o = t[2] / 255,
              r = t[3],
              a = Math.max(n, s, o),
              l = Math.min(n, s, o),
              h = a - l,
              c = a + l,
              u = 0.5 * c;
            return (
              (e =
                l === a
                  ? 0
                  : n === a
                  ? (60 * (s - o)) / h + 360
                  : s === a
                  ? (60 * (o - n)) / h + 120
                  : (60 * (n - s)) / h + 240),
              (i = 0 === h ? 0 : 0.5 >= u ? h / c : h / (2 - c)),
              [Math.round(e) % 360, i, u, null == r ? 1 : r]
            );
          }),
          (h.hsla.from = function (t) {
            if (null == t[0] || null == t[1] || null == t[2])
              return [null, null, null, t[3]];
            var e = t[0] / 360,
              i = t[1],
              n = t[2],
              o = t[3],
              r = 0.5 >= n ? n * (1 + i) : n + i - n * i,
              a = 2 * n - r;
            return [
              Math.round(255 * s(a, r, e + 1 / 3)),
              Math.round(255 * s(a, r, e)),
              Math.round(255 * s(a, r, e - 1 / 3)),
              o,
            ];
          }),
          p(h, function (n, s) {
            var o = s.props,
              a = s.cache,
              h = s.to,
              c = s.from;
            (l.fn[n] = function (n) {
              if ((h && !this[a] && (this[a] = h(this._rgba)), n === e))
                return this[a].slice();
              var s,
                r = t.type(n),
                u = "array" === r || "object" === r ? n : arguments,
                d = this[a].slice();
              return (
                p(o, function (t, e) {
                  var n = u["object" === r ? t : e.idx];
                  null == n && (n = d[e.idx]), (d[e.idx] = i(n, e));
                }),
                c ? (((s = l(c(d)))[a] = d), s) : l(d)
              );
            }),
              p(o, function (e, i) {
                l.fn[e] ||
                  (l.fn[e] = function (s) {
                    var o,
                      a = t.type(s),
                      l = "alpha" === e ? (this._hsla ? "hsla" : "rgba") : n,
                      h = this[l](),
                      c = h[i.idx];
                    return "undefined" === a
                      ? c
                      : ("function" === a &&
                          ((s = s.call(this, c)), (a = t.type(s))),
                        null == s && i.empty
                          ? this
                          : ("string" === a &&
                              (o = r.exec(s)) &&
                              (s =
                                c + parseFloat(o[2]) * ("+" === o[1] ? 1 : -1)),
                            (h[i.idx] = s),
                            this[l](h)));
                  });
              });
          }),
          (l.hook = function (e) {
            var i = e.split(" ");
            p(i, function (e, i) {
              (t.cssHooks[i] = {
                set: function (e, s) {
                  var o,
                    r,
                    a = "";
                  if (
                    "transparent" !== s &&
                    ("string" !== t.type(s) || (o = n(s)))
                  ) {
                    if (((s = l(o || s)), !u.rgba && 1 !== s._rgba[3])) {
                      for (
                        r = "backgroundColor" === i ? e.parentNode : e;
                        ("" === a || "transparent" === a) && r && r.style;

                      )
                        try {
                          (a = t.css(r, "backgroundColor")), (r = r.parentNode);
                        } catch (t) {}
                      s = s.blend(a && "transparent" !== a ? a : "_default");
                    }
                    s = s.toRgbaString();
                  }
                  try {
                    e.style[i] = s;
                  } catch (t) {}
                },
              }),
                (t.fx.step[i] = function (e) {
                  e.colorInit ||
                    ((e.start = l(e.elem, i)),
                    (e.end = l(e.end)),
                    (e.colorInit = !0)),
                    t.cssHooks[i].set(e.elem, e.start.transition(e.end, e.pos));
                });
            });
          }),
          l.hook(
            "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor"
          ),
          (t.cssHooks.borderColor = {
            expand: function (t) {
              var e = {};
              return (
                p(["Top", "Right", "Bottom", "Left"], function (i, n) {
                  e["border" + n + "Color"] = t;
                }),
                e
              );
            },
          }),
          (o = t.Color.names =
            {
              aqua: "#00ffff",
              black: "#000000",
              blue: "#0000ff",
              fuchsia: "#ff00ff",
              gray: "#808080",
              green: "#008000",
              lime: "#00ff00",
              maroon: "#800000",
              navy: "#000080",
              olive: "#808000",
              purple: "#800080",
              red: "#ff0000",
              silver: "#c0c0c0",
              teal: "#008080",
              white: "#ffffff",
              yellow: "#ffff00",
              transparent: [null, null, null, 0],
              _default: "#ffffff",
            });
      })(g),
      (function () {
        function e(e) {
          var i,
            n,
            s = e.ownerDocument.defaultView
              ? e.ownerDocument.defaultView.getComputedStyle(e, null)
              : e.currentStyle,
            o = {};
          if (s && s.length && s[0] && s[s[0]])
            for (n = s.length; n--; )
              "string" == typeof s[(i = s[n])] && (o[t.camelCase(i)] = s[i]);
          else for (i in s) "string" == typeof s[i] && (o[i] = s[i]);
          return o;
        }
        function i(e, i) {
          var n,
            o,
            r = {};
          for (n in i)
            (o = i[n]),
              e[n] !== o &&
                (s[n] ||
                  ((t.fx.step[n] || !isNaN(parseFloat(o))) && (r[n] = o)));
          return r;
        }
        var n = ["add", "remove", "toggle"],
          s = {
            border: 1,
            borderBottom: 1,
            borderColor: 1,
            borderLeft: 1,
            borderRight: 1,
            borderTop: 1,
            borderWidth: 1,
            margin: 1,
            padding: 1,
          };
        t.each(
          [
            "borderLeftStyle",
            "borderRightStyle",
            "borderBottomStyle",
            "borderTopStyle",
          ],
          function (e, i) {
            t.fx.step[i] = function (t) {
              (("none" !== t.end && !t.setAttr) ||
                (1 === t.pos && !t.setAttr)) &&
                (g.style(t.elem, i, t.end), (t.setAttr = !0));
            };
          }
        ),
          t.fn.addBack ||
            (t.fn.addBack = function (t) {
              return this.add(
                null == t ? this.prevObject : this.prevObject.filter(t)
              );
            }),
          (t.effects.animateClass = function (s, o, r, a) {
            var l = t.speed(o, r, a);
            return this.queue(function () {
              var o,
                r = t(this),
                a = r.attr("class") || "",
                h = l.children ? r.find("*").addBack() : r;
              (h = h.map(function () {
                return { el: t(this), start: e(this) };
              })),
                (o = function () {
                  t.each(n, function (t, e) {
                    s[e] && r[e + "Class"](s[e]);
                  });
                })(),
                (h = h.map(function () {
                  return (
                    (this.end = e(this.el[0])),
                    (this.diff = i(this.start, this.end)),
                    this
                  );
                })),
                r.attr("class", a),
                (h = h.map(function () {
                  var e = this,
                    i = t.Deferred(),
                    n = t.extend({}, l, {
                      queue: !1,
                      complete: function () {
                        i.resolve(e);
                      },
                    });
                  return this.el.animate(this.diff, n), i.promise();
                })),
                t.when.apply(t, h.get()).done(function () {
                  o(),
                    t.each(arguments, function () {
                      var e = this.el;
                      t.each(this.diff, function (t) {
                        e.css(t, "");
                      });
                    }),
                    l.complete.call(r[0]);
                });
            });
          }),
          t.fn.extend({
            addClass: (function (e) {
              return function (i, n, s, o) {
                return n
                  ? t.effects.animateClass.call(this, { add: i }, n, s, o)
                  : e.apply(this, arguments);
              };
            })(t.fn.addClass),
            removeClass: (function (e) {
              return function (i, n, s, o) {
                return arguments.length > 1
                  ? t.effects.animateClass.call(this, { remove: i }, n, s, o)
                  : e.apply(this, arguments);
              };
            })(t.fn.removeClass),
            toggleClass: (function (e) {
              return function (i, n, s, o, r) {
                return "boolean" == typeof n || void 0 === n
                  ? s
                    ? t.effects.animateClass.call(
                        this,
                        n ? { add: i } : { remove: i },
                        s,
                        o,
                        r
                      )
                    : e.apply(this, arguments)
                  : t.effects.animateClass.call(this, { toggle: i }, n, s, o);
              };
            })(t.fn.toggleClass),
            switchClass: function (e, i, n, s, o) {
              return t.effects.animateClass.call(
                this,
                { add: i, remove: e },
                n,
                s,
                o
              );
            },
          });
      })(),
      (function () {
        function e(e, i, n, s) {
          return (
            t.isPlainObject(e) && ((i = e), (e = e.effect)),
            (e = { effect: e }),
            null == i && (i = {}),
            t.isFunction(i) && ((s = i), (n = null), (i = {})),
            ("number" == typeof i || t.fx.speeds[i]) &&
              ((s = n), (n = i), (i = {})),
            t.isFunction(n) && ((s = n), (n = null)),
            i && t.extend(e, i),
            (n = n || i.duration),
            (e.duration = t.fx.off
              ? 0
              : "number" == typeof n
              ? n
              : n in t.fx.speeds
              ? t.fx.speeds[n]
              : t.fx.speeds._default),
            (e.complete = s || i.complete),
            e
          );
        }
        function i(e) {
          return (
            !(e && "number" != typeof e && !t.fx.speeds[e]) ||
            ("string" == typeof e && !t.effects.effect[e]) ||
            !!t.isFunction(e) ||
            ("object" == typeof e && !e.effect)
          );
        }
        function n(t, e) {
          var i = e.outerWidth(),
            n = e.outerHeight(),
            s =
              /^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/.exec(
                t
              ) || ["", 0, i, n, 0];
          return {
            top: parseFloat(s[1]) || 0,
            right: "auto" === s[2] ? i : parseFloat(s[2]),
            bottom: "auto" === s[3] ? n : parseFloat(s[3]),
            left: parseFloat(s[4]) || 0,
          };
        }
        t.expr &&
          t.expr.filters &&
          t.expr.filters.animated &&
          (t.expr.filters.animated = (function (e) {
            return function (i) {
              return !!t(i).data(f) || e(i);
            };
          })(t.expr.filters.animated)),
          !1 !== t.uiBackCompat &&
            t.extend(t.effects, {
              save: function (t, e) {
                for (var i = 0, n = e.length; n > i; i++)
                  null !== e[i] && t.data(d + e[i], t[0].style[e[i]]);
              },
              restore: function (t, e) {
                for (var i, n = 0, s = e.length; s > n; n++)
                  null !== e[n] && ((i = t.data(d + e[n])), t.css(e[n], i));
              },
              setMode: function (t, e) {
                return (
                  "toggle" === e && (e = t.is(":hidden") ? "show" : "hide"), e
                );
              },
              createWrapper: function (e) {
                if (e.parent().is(".ui-effects-wrapper")) return e.parent();
                var i = {
                    width: e.outerWidth(!0),
                    height: e.outerHeight(!0),
                    float: e.css("float"),
                  },
                  n = t("<div></div>")
                    .addClass("ui-effects-wrapper")
                    .css({
                      fontSize: "100%",
                      background: "transparent",
                      border: "none",
                      margin: 0,
                      padding: 0,
                    }),
                  s = { width: e.width(), height: e.height() },
                  o = document.activeElement;
                try {
                  o.id;
                } catch (t) {
                  o = document.body;
                }
                return (
                  e.wrap(n),
                  (e[0] === o || t.contains(e[0], o)) && t(o).trigger("focus"),
                  (n = e.parent()),
                  "static" === e.css("position")
                    ? (n.css({ position: "relative" }),
                      e.css({ position: "relative" }))
                    : (t.extend(i, {
                        position: e.css("position"),
                        zIndex: e.css("z-index"),
                      }),
                      t.each(
                        ["top", "left", "bottom", "right"],
                        function (t, n) {
                          (i[n] = e.css(n)),
                            isNaN(parseInt(i[n], 10)) && (i[n] = "auto");
                        }
                      ),
                      e.css({
                        position: "relative",
                        top: 0,
                        left: 0,
                        right: "auto",
                        bottom: "auto",
                      })),
                  e.css(s),
                  n.css(i).show()
                );
              },
              removeWrapper: function (e) {
                var i = document.activeElement;
                return (
                  e.parent().is(".ui-effects-wrapper") &&
                    (e.parent().replaceWith(e),
                    (e[0] === i || t.contains(e[0], i)) &&
                      t(i).trigger("focus")),
                  e
                );
              },
            }),
          t.extend(t.effects, {
            version: "1.12.1",
            define: function (e, i, n) {
              return (
                n || ((n = i), (i = "effect")),
                (t.effects.effect[e] = n),
                (t.effects.effect[e].mode = i),
                n
              );
            },
            scaledDimensions: function (t, e, i) {
              if (0 === e)
                return { height: 0, width: 0, outerHeight: 0, outerWidth: 0 };
              var n = "horizontal" !== i ? (e || 100) / 100 : 1,
                s = "vertical" !== i ? (e || 100) / 100 : 1;
              return {
                height: t.height() * s,
                width: t.width() * n,
                outerHeight: t.outerHeight() * s,
                outerWidth: t.outerWidth() * n,
              };
            },
            clipToBox: function (t) {
              return {
                width: t.clip.right - t.clip.left,
                height: t.clip.bottom - t.clip.top,
                left: t.clip.left,
                top: t.clip.top,
              };
            },
            unshift: function (t, e, i) {
              var n = t.queue();
              e > 1 && n.splice.apply(n, [1, 0].concat(n.splice(e, i))),
                t.dequeue();
            },
            saveStyle: function (t) {
              t.data(p, t[0].style.cssText);
            },
            restoreStyle: function (t) {
              (t[0].style.cssText = t.data(p) || ""), t.removeData(p);
            },
            mode: function (t, e) {
              var i = t.is(":hidden");
              return (
                "toggle" === e && (e = i ? "show" : "hide"),
                (i ? "hide" === e : "show" === e) && (e = "none"),
                e
              );
            },
            getBaseline: function (t, e) {
              var i, n;
              switch (t[0]) {
                case "top":
                  i = 0;
                  break;
                case "middle":
                  i = 0.5;
                  break;
                case "bottom":
                  i = 1;
                  break;
                default:
                  i = t[0] / e.height;
              }
              switch (t[1]) {
                case "left":
                  n = 0;
                  break;
                case "center":
                  n = 0.5;
                  break;
                case "right":
                  n = 1;
                  break;
                default:
                  n = t[1] / e.width;
              }
              return { x: n, y: i };
            },
            createPlaceholder: function (e) {
              var i,
                n = e.css("position"),
                s = e.position();
              return (
                e
                  .css({
                    marginTop: e.css("marginTop"),
                    marginBottom: e.css("marginBottom"),
                    marginLeft: e.css("marginLeft"),
                    marginRight: e.css("marginRight"),
                  })
                  .outerWidth(e.outerWidth())
                  .outerHeight(e.outerHeight()),
                /^(static|relative)/.test(n) &&
                  ((n = "absolute"),
                  (i = t("<" + e[0].nodeName + ">")
                    .insertAfter(e)
                    .css({
                      display: /^(inline|ruby)/.test(e.css("display"))
                        ? "inline-block"
                        : "block",
                      visibility: "hidden",
                      marginTop: e.css("marginTop"),
                      marginBottom: e.css("marginBottom"),
                      marginLeft: e.css("marginLeft"),
                      marginRight: e.css("marginRight"),
                      float: e.css("float"),
                    })
                    .outerWidth(e.outerWidth())
                    .outerHeight(e.outerHeight())
                    .addClass("ui-effects-placeholder")),
                  e.data(d + "placeholder", i)),
                e.css({ position: n, left: s.left, top: s.top }),
                i
              );
            },
            removePlaceholder: function (t) {
              var e = d + "placeholder",
                i = t.data(e);
              i && (i.remove(), t.removeData(e));
            },
            cleanUp: function (e) {
              t.effects.restoreStyle(e), t.effects.removePlaceholder(e);
            },
            setTransition: function (e, i, n, s) {
              return (
                (s = s || {}),
                t.each(i, function (t, i) {
                  var o = e.cssUnit(i);
                  o[0] > 0 && (s[i] = o[0] * n + o[1]);
                }),
                s
              );
            },
          }),
          t.fn.extend({
            effect: function () {
              function i(e) {
                function i() {
                  t.isFunction(l) && l.call(r[0]), t.isFunction(e) && e();
                }
                var r = t(this);
                (n.mode = c.shift()),
                  !1 === t.uiBackCompat || o
                    ? "none" === n.mode
                      ? (r[h](), i())
                      : s.call(r[0], n, function () {
                          r.removeData(f),
                            t.effects.cleanUp(r),
                            "hide" === n.mode && r.hide(),
                            i();
                        })
                    : (r.is(":hidden") ? "hide" === h : "show" === h)
                    ? (r[h](), i())
                    : s.call(r[0], n, i);
              }
              var n = e.apply(this, arguments),
                s = t.effects.effect[n.effect],
                o = s.mode,
                r = n.queue,
                a = r || "fx",
                l = n.complete,
                h = n.mode,
                c = [],
                u = function (e) {
                  var i = t(this),
                    n = t.effects.mode(i, h) || o;
                  i.data(f, !0),
                    c.push(n),
                    o &&
                      ("show" === n || (n === o && "hide" === n)) &&
                      i.show(),
                    (o && "none" === n) || t.effects.saveStyle(i),
                    t.isFunction(e) && e();
                };
              return t.fx.off || !s
                ? h
                  ? this[h](n.duration, l)
                  : this.each(function () {
                      l && l.call(this);
                    })
                : !1 === r
                ? this.each(u).each(i)
                : this.queue(a, u).queue(a, i);
            },
            show: (function (t) {
              return function (n) {
                if (i(n)) return t.apply(this, arguments);
                var s = e.apply(this, arguments);
                return (s.mode = "show"), this.effect.call(this, s);
              };
            })(t.fn.show),
            hide: (function (t) {
              return function (n) {
                if (i(n)) return t.apply(this, arguments);
                var s = e.apply(this, arguments);
                return (s.mode = "hide"), this.effect.call(this, s);
              };
            })(t.fn.hide),
            toggle: (function (t) {
              return function (n) {
                if (i(n) || "boolean" == typeof n)
                  return t.apply(this, arguments);
                var s = e.apply(this, arguments);
                return (s.mode = "toggle"), this.effect.call(this, s);
              };
            })(t.fn.toggle),
            cssUnit: function (e) {
              var i = this.css(e),
                n = [];
              return (
                t.each(["em", "px", "%", "pt"], function (t, e) {
                  i.indexOf(e) > 0 && (n = [parseFloat(i), e]);
                }),
                n
              );
            },
            cssClip: function (t) {
              return t
                ? this.css(
                    "clip",
                    "rect(" +
                      t.top +
                      "px " +
                      t.right +
                      "px " +
                      t.bottom +
                      "px " +
                      t.left +
                      "px)"
                  )
                : n(this.css("clip"), this);
            },
            transfer: function (e, i) {
              var n = t(this),
                s = t(e.to),
                o = "fixed" === s.css("position"),
                r = t("body"),
                a = o ? r.scrollTop() : 0,
                l = o ? r.scrollLeft() : 0,
                h = s.offset(),
                c = {
                  top: h.top - a,
                  left: h.left - l,
                  height: s.innerHeight(),
                  width: s.innerWidth(),
                },
                u = n.offset(),
                d = t("<div class='ui-effects-transfer'></div>")
                  .appendTo("body")
                  .addClass(e.className)
                  .css({
                    top: u.top - a,
                    left: u.left - l,
                    height: n.innerHeight(),
                    width: n.innerWidth(),
                    position: o ? "fixed" : "absolute",
                  })
                  .animate(c, e.duration, e.easing, function () {
                    d.remove(), t.isFunction(i) && i();
                  });
            },
          }),
          (t.fx.step.clip = function (e) {
            e.clipInit ||
              ((e.start = t(e.elem).cssClip()),
              "string" == typeof e.end && (e.end = n(e.end, e.elem)),
              (e.clipInit = !0)),
              t(e.elem).cssClip({
                top: e.pos * (e.end.top - e.start.top) + e.start.top,
                right: e.pos * (e.end.right - e.start.right) + e.start.right,
                bottom:
                  e.pos * (e.end.bottom - e.start.bottom) + e.start.bottom,
                left: e.pos * (e.end.left - e.start.left) + e.start.left,
              });
          });
      })(),
      (function () {
        var e = {};
        t.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function (t, i) {
          e[i] = function (e) {
            return Math.pow(e, t + 2);
          };
        }),
          t.extend(e, {
            Sine: function (t) {
              return 1 - Math.cos((t * Math.PI) / 2);
            },
            Circ: function (t) {
              return 1 - Math.sqrt(1 - t * t);
            },
            Elastic: function (t) {
              return 0 === t || 1 === t
                ? t
                : -Math.pow(2, 8 * (t - 1)) *
                    Math.sin(((80 * (t - 1) - 7.5) * Math.PI) / 15);
            },
            Back: function (t) {
              return t * t * (3 * t - 2);
            },
            Bounce: function (t) {
              for (var e, i = 4; ((e = Math.pow(2, --i)) - 1) / 11 > t; );
              return (
                1 / Math.pow(4, 3 - i) -
                7.5625 * Math.pow((3 * e - 2) / 22 - t, 2)
              );
            },
          }),
          t.each(e, function (e, i) {
            (t.easing["easeIn" + e] = i),
              (t.easing["easeOut" + e] = function (t) {
                return 1 - i(1 - t);
              }),
              (t.easing["easeInOut" + e] = function (t) {
                return 0.5 > t ? i(2 * t) / 2 : 1 - i(-2 * t + 2) / 2;
              });
          });
      })();
    t.effects;
    t.effects.define("blind", "hide", function (e, i) {
      var n = {
          up: ["bottom", "top"],
          vertical: ["bottom", "top"],
          down: ["top", "bottom"],
          left: ["right", "left"],
          horizontal: ["right", "left"],
          right: ["left", "right"],
        },
        s = t(this),
        o = e.direction || "up",
        r = s.cssClip(),
        a = { clip: t.extend({}, r) },
        l = t.effects.createPlaceholder(s);
      (a.clip[n[o][0]] = a.clip[n[o][1]]),
        "show" === e.mode &&
          (s.cssClip(a.clip), l && l.css(t.effects.clipToBox(a)), (a.clip = r)),
        l && l.animate(t.effects.clipToBox(a), e.duration, e.easing),
        s.animate(a, {
          queue: !1,
          duration: e.duration,
          easing: e.easing,
          complete: i,
        });
    }),
      t.effects.define("bounce", function (e, i) {
        var n,
          s,
          o,
          r = t(this),
          a = e.mode,
          l = "hide" === a,
          h = "show" === a,
          c = e.direction || "up",
          u = e.distance,
          d = e.times || 5,
          p = 2 * d + (h || l ? 1 : 0),
          f = e.duration / p,
          g = e.easing,
          m = "up" === c || "down" === c ? "top" : "left",
          v = "up" === c || "left" === c,
          _ = 0,
          y = r.queue().length;
        for (
          t.effects.createPlaceholder(r),
            o = r.css(m),
            u || (u = r["top" === m ? "outerHeight" : "outerWidth"]() / 3),
            h &&
              (((s = { opacity: 1 })[m] = o),
              r
                .css("opacity", 0)
                .css(m, v ? 2 * -u : 2 * u)
                .animate(s, f, g)),
            l && (u /= Math.pow(2, d - 1)),
            (s = {})[m] = o;
          d > _;
          _++
        )
          ((n = {})[m] = (v ? "-=" : "+=") + u),
            r.animate(n, f, g).animate(s, f, g),
            (u = l ? 2 * u : u / 2);
        l &&
          (((n = { opacity: 0 })[m] = (v ? "-=" : "+=") + u),
          r.animate(n, f, g)),
          r.queue(i),
          t.effects.unshift(r, y, p + 1);
      }),
      t.effects.define("clip", "hide", function (e, i) {
        var n,
          s = {},
          o = t(this),
          r = e.direction || "vertical",
          a = "both" === r,
          l = a || "horizontal" === r,
          h = a || "vertical" === r;
        (n = o.cssClip()),
          (s.clip = {
            top: h ? (n.bottom - n.top) / 2 : n.top,
            right: l ? (n.right - n.left) / 2 : n.right,
            bottom: h ? (n.bottom - n.top) / 2 : n.bottom,
            left: l ? (n.right - n.left) / 2 : n.left,
          }),
          t.effects.createPlaceholder(o),
          "show" === e.mode && (o.cssClip(s.clip), (s.clip = n)),
          o.animate(s, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: i,
          });
      }),
      t.effects.define("drop", "hide", function (e, i) {
        var n,
          s = t(this),
          o = "show" === e.mode,
          r = e.direction || "left",
          a = "up" === r || "down" === r ? "top" : "left",
          l = "up" === r || "left" === r ? "-=" : "+=",
          h = "+=" === l ? "-=" : "+=",
          c = { opacity: 0 };
        t.effects.createPlaceholder(s),
          (n =
            e.distance ||
            s["top" === a ? "outerHeight" : "outerWidth"](!0) / 2),
          (c[a] = l + n),
          o && (s.css(c), (c[a] = h + n), (c.opacity = 1)),
          s.animate(c, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: i,
          });
      }),
      t.effects.define("explode", "hide", function (e, i) {
        function n() {
          v.push(this),
            v.length === c * u &&
              (d.css({ visibility: "visible" }), t(v).remove(), i());
        }
        var s,
          o,
          r,
          a,
          l,
          h,
          c = e.pieces ? Math.round(Math.sqrt(e.pieces)) : 3,
          u = c,
          d = t(this),
          p = "show" === e.mode,
          f = d.show().css("visibility", "hidden").offset(),
          g = Math.ceil(d.outerWidth() / u),
          m = Math.ceil(d.outerHeight() / c),
          v = [];
        for (s = 0; c > s; s++)
          for (a = f.top + s * m, h = s - (c - 1) / 2, o = 0; u > o; o++)
            (r = f.left + o * g),
              (l = o - (u - 1) / 2),
              d
                .clone()
                .appendTo("body")
                .wrap("<div></div>")
                .css({
                  position: "absolute",
                  visibility: "visible",
                  left: -o * g,
                  top: -s * m,
                })
                .parent()
                .addClass("ui-effects-explode")
                .css({
                  position: "absolute",
                  overflow: "hidden",
                  width: g,
                  height: m,
                  left: r + (p ? l * g : 0),
                  top: a + (p ? h * m : 0),
                  opacity: p ? 0 : 1,
                })
                .animate(
                  {
                    left: r + (p ? 0 : l * g),
                    top: a + (p ? 0 : h * m),
                    opacity: p ? 1 : 0,
                  },
                  e.duration || 500,
                  e.easing,
                  n
                );
      }),
      t.effects.define("fade", "toggle", function (e, i) {
        var n = "show" === e.mode;
        t(this)
          .css("opacity", n ? 0 : 1)
          .animate(
            { opacity: n ? 1 : 0 },
            { queue: !1, duration: e.duration, easing: e.easing, complete: i }
          );
      }),
      t.effects.define("fold", "hide", function (e, i) {
        var n = t(this),
          s = e.mode,
          o = "show" === s,
          r = "hide" === s,
          a = e.size || 15,
          l = /([0-9]+)%/.exec(a),
          h = !!e.horizFirst ? ["right", "bottom"] : ["bottom", "right"],
          c = e.duration / 2,
          u = t.effects.createPlaceholder(n),
          d = n.cssClip(),
          p = { clip: t.extend({}, d) },
          f = { clip: t.extend({}, d) },
          g = [d[h[0]], d[h[1]]],
          m = n.queue().length;
        l && (a = (parseInt(l[1], 10) / 100) * g[r ? 0 : 1]),
          (p.clip[h[0]] = a),
          (f.clip[h[0]] = a),
          (f.clip[h[1]] = 0),
          o &&
            (n.cssClip(f.clip),
            u && u.css(t.effects.clipToBox(f)),
            (f.clip = d)),
          n
            .queue(function (i) {
              u &&
                u
                  .animate(t.effects.clipToBox(p), c, e.easing)
                  .animate(t.effects.clipToBox(f), c, e.easing),
                i();
            })
            .animate(p, c, e.easing)
            .animate(f, c, e.easing)
            .queue(i),
          t.effects.unshift(n, m, 4);
      }),
      t.effects.define("highlight", "show", function (e, i) {
        var n = t(this),
          s = { backgroundColor: n.css("backgroundColor") };
        "hide" === e.mode && (s.opacity = 0),
          t.effects.saveStyle(n),
          n
            .css({
              backgroundImage: "none",
              backgroundColor: e.color || "#ffff99",
            })
            .animate(s, {
              queue: !1,
              duration: e.duration,
              easing: e.easing,
              complete: i,
            });
      }),
      t.effects.define("size", function (e, i) {
        var n,
          s,
          o,
          r = t(this),
          a = ["fontSize"],
          l = [
            "borderTopWidth",
            "borderBottomWidth",
            "paddingTop",
            "paddingBottom",
          ],
          h = [
            "borderLeftWidth",
            "borderRightWidth",
            "paddingLeft",
            "paddingRight",
          ],
          c = e.mode,
          u = "effect" !== c,
          d = e.scale || "both",
          p = e.origin || ["middle", "center"],
          f = r.css("position"),
          g = r.position(),
          m = t.effects.scaledDimensions(r),
          v = e.from || m,
          _ = e.to || t.effects.scaledDimensions(r, 0);
        t.effects.createPlaceholder(r),
          "show" === c && ((o = v), (v = _), (_ = o)),
          (s = {
            from: { y: v.height / m.height, x: v.width / m.width },
            to: { y: _.height / m.height, x: _.width / m.width },
          }),
          ("box" === d || "both" === d) &&
            (s.from.y !== s.to.y &&
              ((v = t.effects.setTransition(r, l, s.from.y, v)),
              (_ = t.effects.setTransition(r, l, s.to.y, _))),
            s.from.x !== s.to.x &&
              ((v = t.effects.setTransition(r, h, s.from.x, v)),
              (_ = t.effects.setTransition(r, h, s.to.x, _)))),
          ("content" === d || "both" === d) &&
            s.from.y !== s.to.y &&
            ((v = t.effects.setTransition(r, a, s.from.y, v)),
            (_ = t.effects.setTransition(r, a, s.to.y, _))),
          p &&
            ((n = t.effects.getBaseline(p, m)),
            (v.top = (m.outerHeight - v.outerHeight) * n.y + g.top),
            (v.left = (m.outerWidth - v.outerWidth) * n.x + g.left),
            (_.top = (m.outerHeight - _.outerHeight) * n.y + g.top),
            (_.left = (m.outerWidth - _.outerWidth) * n.x + g.left)),
          r.css(v),
          ("content" === d || "both" === d) &&
            ((l = l.concat(["marginTop", "marginBottom"]).concat(a)),
            (h = h.concat(["marginLeft", "marginRight"])),
            r.find("*[width]").each(function () {
              var i = t(this),
                n = t.effects.scaledDimensions(i),
                o = {
                  height: n.height * s.from.y,
                  width: n.width * s.from.x,
                  outerHeight: n.outerHeight * s.from.y,
                  outerWidth: n.outerWidth * s.from.x,
                },
                r = {
                  height: n.height * s.to.y,
                  width: n.width * s.to.x,
                  outerHeight: n.height * s.to.y,
                  outerWidth: n.width * s.to.x,
                };
              s.from.y !== s.to.y &&
                ((o = t.effects.setTransition(i, l, s.from.y, o)),
                (r = t.effects.setTransition(i, l, s.to.y, r))),
                s.from.x !== s.to.x &&
                  ((o = t.effects.setTransition(i, h, s.from.x, o)),
                  (r = t.effects.setTransition(i, h, s.to.x, r))),
                u && t.effects.saveStyle(i),
                i.css(o),
                i.animate(r, e.duration, e.easing, function () {
                  u && t.effects.restoreStyle(i);
                });
            })),
          r.animate(_, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: function () {
              var e = r.offset();
              0 === _.opacity && r.css("opacity", v.opacity),
                u ||
                  (r.css("position", "static" === f ? "relative" : f).offset(e),
                  t.effects.saveStyle(r)),
                i();
            },
          });
      }),
      t.effects.define("scale", function (e, i) {
        var n = t(this),
          s = e.mode,
          o =
            parseInt(e.percent, 10) ||
            (0 === parseInt(e.percent, 10) ? 0 : "effect" !== s ? 0 : 100),
          r = t.extend(
            !0,
            {
              from: t.effects.scaledDimensions(n),
              to: t.effects.scaledDimensions(n, o, e.direction || "both"),
              origin: e.origin || ["middle", "center"],
            },
            e
          );
        e.fade && ((r.from.opacity = 1), (r.to.opacity = 0)),
          t.effects.effect.size.call(this, r, i);
      }),
      t.effects.define("puff", "hide", function (e, i) {
        var n = t.extend(!0, {}, e, {
          fade: !0,
          percent: parseInt(e.percent, 10) || 150,
        });
        t.effects.effect.scale.call(this, n, i);
      }),
      t.effects.define("pulsate", "show", function (e, i) {
        var n = t(this),
          s = e.mode,
          o = "show" === s,
          r = o || "hide" === s,
          a = 2 * (e.times || 5) + (r ? 1 : 0),
          l = e.duration / a,
          h = 0,
          c = 1,
          u = n.queue().length;
        for (
          (o || !n.is(":visible")) && (n.css("opacity", 0).show(), (h = 1));
          a > c;
          c++
        )
          n.animate({ opacity: h }, l, e.easing), (h = 1 - h);
        n.animate({ opacity: h }, l, e.easing),
          n.queue(i),
          t.effects.unshift(n, u, a + 1);
      }),
      t.effects.define("shake", function (e, i) {
        var n = 1,
          s = t(this),
          o = e.direction || "left",
          r = e.distance || 20,
          a = e.times || 3,
          l = 2 * a + 1,
          h = Math.round(e.duration / l),
          c = "up" === o || "down" === o ? "top" : "left",
          u = "up" === o || "left" === o,
          d = {},
          p = {},
          f = {},
          g = s.queue().length;
        for (
          t.effects.createPlaceholder(s),
            d[c] = (u ? "-=" : "+=") + r,
            p[c] = (u ? "+=" : "-=") + 2 * r,
            f[c] = (u ? "-=" : "+=") + 2 * r,
            s.animate(d, h, e.easing);
          a > n;
          n++
        )
          s.animate(p, h, e.easing).animate(f, h, e.easing);
        s
          .animate(p, h, e.easing)
          .animate(d, h / 2, e.easing)
          .queue(i),
          t.effects.unshift(s, g, l + 1);
      }),
      t.effects.define("slide", "show", function (e, i) {
        var n,
          s,
          o = t(this),
          r = {
            up: ["bottom", "top"],
            down: ["top", "bottom"],
            left: ["right", "left"],
            right: ["left", "right"],
          },
          a = e.mode,
          l = e.direction || "left",
          h = "up" === l || "down" === l ? "top" : "left",
          c = "up" === l || "left" === l,
          u = e.distance || o["top" === h ? "outerHeight" : "outerWidth"](!0),
          d = {};
        t.effects.createPlaceholder(o),
          (n = o.cssClip()),
          (s = o.position()[h]),
          (d[h] = (c ? -1 : 1) * u + s),
          (d.clip = o.cssClip()),
          (d.clip[r[l][1]] = d.clip[r[l][0]]),
          "show" === a &&
            (o.cssClip(d.clip), o.css(h, d[h]), (d.clip = n), (d[h] = s)),
          o.animate(d, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: i,
          });
      }),
      !1 !== t.uiBackCompat &&
        t.effects.define("transfer", function (e, i) {
          t(this).transfer(e, i);
        });
  }),
  function () {
    var t,
      e,
      i,
      n,
      s,
      o = function (t, e) {
        return function () {
          return t.apply(e, arguments);
        };
      },
      r =
        [].indexOf ||
        function (t) {
          for (var e = 0, i = this.length; i > e; e++)
            if (e in this && this[e] === t) return e;
          return -1;
        };
    (e = (function () {
      function t() {}
      return (
        (t.prototype.extend = function (t, e) {
          var i, n;
          for (i in e) (n = e[i]), null == t[i] && (t[i] = n);
          return t;
        }),
        (t.prototype.isMobile = function (t) {
          return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            t
          );
        }),
        (t.prototype.createEvent = function (t, e, i, n) {
          var s;
          return (
            null == e && (e = !1),
            null == i && (i = !1),
            null == n && (n = null),
            null != document.createEvent
              ? (s = document.createEvent("CustomEvent")).initCustomEvent(
                  t,
                  e,
                  i,
                  n
                )
              : null != document.createEventObject
              ? ((s = document.createEventObject()).eventType = t)
              : (s.eventName = t),
            s
          );
        }),
        (t.prototype.emitEvent = function (t, e) {
          return null != t.dispatchEvent
            ? t.dispatchEvent(e)
            : e in (null != t)
            ? t[e]()
            : "on" + e in (null != t)
            ? t["on" + e]()
            : void 0;
        }),
        (t.prototype.addEvent = function (t, e, i) {
          return null != t.addEventListener
            ? t.addEventListener(e, i, !1)
            : null != t.attachEvent
            ? t.attachEvent("on" + e, i)
            : (t[e] = i);
        }),
        (t.prototype.removeEvent = function (t, e, i) {
          return null != t.removeEventListener
            ? t.removeEventListener(e, i, !1)
            : null != t.detachEvent
            ? t.detachEvent("on" + e, i)
            : delete t[e];
        }),
        (t.prototype.innerHeight = function () {
          return "innerHeight" in window
            ? window.innerHeight
            : document.documentElement.clientHeight;
        }),
        t
      );
    })()),
      (i =
        this.WeakMap ||
        this.MozWeakMap ||
        (i = (function () {
          function t() {
            (this.keys = []), (this.values = []);
          }
          return (
            (t.prototype.get = function (t) {
              var e, i, n, s;
              for (e = i = 0, n = (s = this.keys).length; n > i; e = ++i)
                if (s[e] === t) return this.values[e];
            }),
            (t.prototype.set = function (t, e) {
              var i, n, s, o;
              for (i = n = 0, s = (o = this.keys).length; s > n; i = ++n)
                if (o[i] === t) return void (this.values[i] = e);
              return this.keys.push(t), this.values.push(e);
            }),
            t
          );
        })())),
      (t =
        this.MutationObserver ||
        this.WebkitMutationObserver ||
        this.MozMutationObserver ||
        (t = (function () {
          function t() {
            "undefined" != typeof console &&
              null !== console &&
              console.warn(
                "MutationObserver is not supported by your browser."
              ),
              "undefined" != typeof console &&
                null !== console &&
                console.warn(
                  "WOW.js cannot detect dom mutations, please call .sync() after loading new content."
                );
          }
          return (
            (t.notSupported = !0), (t.prototype.observe = function () {}), t
          );
        })())),
      (n =
        this.getComputedStyle ||
        function (t, e) {
          return (
            (this.getPropertyValue = function (e) {
              var i;
              return (
                "float" === e && (e = "styleFloat"),
                s.test(e) &&
                  e.replace(s, function (t, e) {
                    return e.toUpperCase();
                  }),
                (null != (i = t.currentStyle) ? i[e] : void 0) || null
              );
            }),
            this
          );
        }),
      (s = /(\-([a-z]){1})/g),
      (this.WOW = (function () {
        function s(t) {
          null == t && (t = {}),
            (this.scrollCallback = o(this.scrollCallback, this)),
            (this.scrollHandler = o(this.scrollHandler, this)),
            (this.resetAnimation = o(this.resetAnimation, this)),
            (this.start = o(this.start, this)),
            (this.scrolled = !0),
            (this.config = this.util().extend(t, this.defaults)),
            null != t.scrollContainer &&
              (this.config.scrollContainer = document.querySelector(
                t.scrollContainer
              )),
            (this.animationNameCache = new i()),
            (this.wowEvent = this.util().createEvent(this.config.boxClass));
        }
        return (
          (s.prototype.defaults = {
            boxClass: "wow",
            animateClass: "animated",
            offset: 0,
            mobile: !0,
            live: !0,
            callback: null,
            scrollContainer: null,
          }),
          (s.prototype.init = function () {
            var t;
            return (
              (this.element = window.document.documentElement),
              "interactive" === (t = document.readyState) || "complete" === t
                ? this.start()
                : this.util().addEvent(
                    document,
                    "DOMContentLoaded",
                    this.start
                  ),
              (this.finished = [])
            );
          }),
          (s.prototype.start = function () {
            var e, i, n, s;
            if (
              ((this.stopped = !1),
              (this.boxes = function () {
                var t, i, n, s;
                for (
                  s = [],
                    t = 0,
                    i = (n = this.element.querySelectorAll(
                      "." + this.config.boxClass
                    )).length;
                  i > t;
                  t++
                )
                  (e = n[t]), s.push(e);
                return s;
              }.call(this)),
              (this.all = function () {
                var t, i, n, s;
                for (s = [], t = 0, i = (n = this.boxes).length; i > t; t++)
                  (e = n[t]), s.push(e);
                return s;
              }.call(this)),
              this.boxes.length)
            )
              if (this.disabled()) this.resetStyle();
              else
                for (i = 0, n = (s = this.boxes).length; n > i; i++)
                  (e = s[i]), this.applyStyle(e, !0);
            return (
              this.disabled() ||
                (this.util().addEvent(
                  this.config.scrollContainer || window,
                  "scroll",
                  this.scrollHandler
                ),
                this.util().addEvent(window, "resize", this.scrollHandler),
                (this.interval = setInterval(this.scrollCallback, 50))),
              this.config.live
                ? new t(
                    (function (t) {
                      return function (e) {
                        var i, n, s, o, r;
                        for (r = [], i = 0, n = e.length; n > i; i++)
                          (o = e[i]),
                            r.push(
                              function () {
                                var t, e, i, n;
                                for (
                                  n = [],
                                    t = 0,
                                    e = (i = o.addedNodes || []).length;
                                  e > t;
                                  t++
                                )
                                  (s = i[t]), n.push(this.doSync(s));
                                return n;
                              }.call(t)
                            );
                        return r;
                      };
                    })(this)
                  ).observe(document.body, { childList: !0, subtree: !0 })
                : void 0
            );
          }),
          (s.prototype.stop = function () {
            return (
              (this.stopped = !0),
              this.util().removeEvent(
                this.config.scrollContainer || window,
                "scroll",
                this.scrollHandler
              ),
              this.util().removeEvent(window, "resize", this.scrollHandler),
              null != this.interval ? clearInterval(this.interval) : void 0
            );
          }),
          (s.prototype.sync = function (e) {
            return t.notSupported ? this.doSync(this.element) : void 0;
          }),
          (s.prototype.doSync = function (t) {
            var e, i, n, s, o;
            if ((null == t && (t = this.element), 1 === t.nodeType)) {
              for (
                o = [],
                  i = 0,
                  n = (s = (t = t.parentNode || t).querySelectorAll(
                    "." + this.config.boxClass
                  )).length;
                n > i;
                i++
              )
                (e = s[i]),
                  r.call(this.all, e) < 0
                    ? (this.boxes.push(e),
                      this.all.push(e),
                      this.stopped || this.disabled()
                        ? this.resetStyle()
                        : this.applyStyle(e, !0),
                      o.push((this.scrolled = !0)))
                    : o.push(void 0);
              return o;
            }
          }),
          (s.prototype.show = function (t) {
            return (
              this.applyStyle(t),
              (t.className = t.className + " " + this.config.animateClass),
              null != this.config.callback && this.config.callback(t),
              this.util().emitEvent(t, this.wowEvent),
              this.util().addEvent(t, "animationend", this.resetAnimation),
              this.util().addEvent(t, "oanimationend", this.resetAnimation),
              this.util().addEvent(
                t,
                "webkitAnimationEnd",
                this.resetAnimation
              ),
              this.util().addEvent(t, "MSAnimationEnd", this.resetAnimation),
              t
            );
          }),
          (s.prototype.applyStyle = function (t, e) {
            var i, n, s, o;
            return (
              (n = t.getAttribute("data-wow-duration")),
              (i = t.getAttribute("data-wow-delay")),
              (s = t.getAttribute("data-wow-iteration")),
              this.animate(
                ((o = this),
                function () {
                  return o.customStyle(t, e, n, i, s);
                })
              )
            );
          }),
          (s.prototype.animate =
            "requestAnimationFrame" in window
              ? function (t) {
                  return window.requestAnimationFrame(t);
                }
              : function (t) {
                  return t();
                }),
          (s.prototype.resetStyle = function () {
            var t, e, i, n, s;
            for (s = [], e = 0, i = (n = this.boxes).length; i > e; e++)
              (t = n[e]), s.push((t.style.visibility = "visible"));
            return s;
          }),
          (s.prototype.resetAnimation = function (t) {
            var e;
            return t.type.toLowerCase().indexOf("animationend") >= 0
              ? ((e = t.target || t.srcElement).className = e.className
                  .replace(this.config.animateClass, "")
                  .trim())
              : void 0;
          }),
          (s.prototype.customStyle = function (t, e, i, n, s) {
            return (
              e && this.cacheAnimationName(t),
              (t.style.visibility = e ? "hidden" : "visible"),
              i && this.vendorSet(t.style, { animationDuration: i }),
              n && this.vendorSet(t.style, { animationDelay: n }),
              s && this.vendorSet(t.style, { animationIterationCount: s }),
              this.vendorSet(t.style, {
                animationName: e ? "none" : this.cachedAnimationName(t),
              }),
              t
            );
          }),
          (s.prototype.vendors = ["moz", "webkit"]),
          (s.prototype.vendorSet = function (t, e) {
            var i, n, s, o;
            for (i in ((n = []), e))
              (s = e[i]),
                (t["" + i] = s),
                n.push(
                  function () {
                    var e, n, r, a;
                    for (
                      a = [], e = 0, n = (r = this.vendors).length;
                      n > e;
                      e++
                    )
                      (o = r[e]),
                        a.push(
                          (t["" + o + i.charAt(0).toUpperCase() + i.substr(1)] =
                            s)
                        );
                    return a;
                  }.call(this)
                );
            return n;
          }),
          (s.prototype.vendorCSS = function (t, e) {
            var i, s, o, r, a, l;
            for (
              r = (a = n(t)).getPropertyCSSValue(e),
                i = 0,
                s = (o = this.vendors).length;
              s > i;
              i++
            )
              (l = o[i]), (r = r || a.getPropertyCSSValue("-" + l + "-" + e));
            return r;
          }),
          (s.prototype.animationName = function (t) {
            var e;
            try {
              e = this.vendorCSS(t, "animation-name").cssText;
            } catch (i) {
              e = n(t).getPropertyValue("animation-name");
            }
            return "none" === e ? "" : e;
          }),
          (s.prototype.cacheAnimationName = function (t) {
            return this.animationNameCache.set(t, this.animationName(t));
          }),
          (s.prototype.cachedAnimationName = function (t) {
            return this.animationNameCache.get(t);
          }),
          (s.prototype.scrollHandler = function () {
            return (this.scrolled = !0);
          }),
          (s.prototype.scrollCallback = function () {
            var t;
            return !this.scrolled ||
              ((this.scrolled = !1),
              (this.boxes = function () {
                var e, i, n, s;
                for (s = [], e = 0, i = (n = this.boxes).length; i > e; e++)
                  (t = n[e]) && (this.isVisible(t) ? this.show(t) : s.push(t));
                return s;
              }.call(this)),
              this.boxes.length || this.config.live)
              ? void 0
              : this.stop();
          }),
          (s.prototype.offsetTop = function (t) {
            for (var e; void 0 === t.offsetTop; ) t = t.parentNode;
            for (e = t.offsetTop; (t = t.offsetParent); ) e += t.offsetTop;
            return e;
          }),
          (s.prototype.isVisible = function (t) {
            var e, i, n, s, o;
            return (
              (i = t.getAttribute("data-wow-offset") || this.config.offset),
              (s =
                (o =
                  (this.config.scrollContainer &&
                    this.config.scrollContainer.scrollTop) ||
                  window.pageYOffset) +
                Math.min(this.element.clientHeight, this.util().innerHeight()) -
                i),
              (e = (n = this.offsetTop(t)) + t.clientHeight),
              s >= n && e >= o
            );
          }),
          (s.prototype.util = function () {
            return null != this._util ? this._util : (this._util = new e());
          }),
          (s.prototype.disabled = function () {
            return (
              !this.config.mobile && this.util().isMobile(navigator.userAgent)
            );
          }),
          s
        );
      })());
  }.call(this),
  (function () {
    "use strict";
    function t(n) {
      if (!n) throw new Error("No options passed to Waypoint constructor");
      if (!n.element)
        throw new Error("No element option passed to Waypoint constructor");
      if (!n.handler)
        throw new Error("No handler option passed to Waypoint constructor");
      (this.key = "waypoint-" + e),
        (this.options = t.Adapter.extend({}, t.defaults, n)),
        (this.element = this.options.element),
        (this.adapter = new t.Adapter(this.element)),
        (this.callback = n.handler),
        (this.axis = this.options.horizontal ? "horizontal" : "vertical"),
        (this.enabled = this.options.enabled),
        (this.triggerPoint = null),
        (this.group = t.Group.findOrCreate({
          name: this.options.group,
          axis: this.axis,
        })),
        (this.context = t.Context.findOrCreateByElement(this.options.context)),
        t.offsetAliases[this.options.offset] &&
          (this.options.offset = t.offsetAliases[this.options.offset]),
        this.group.add(this),
        this.context.add(this),
        (i[this.key] = this),
        (e += 1);
    }
    var e = 0,
      i = {};
    (t.prototype.queueTrigger = function (t) {
      this.group.queueTrigger(this, t);
    }),
      (t.prototype.trigger = function (t) {
        this.enabled && this.callback && this.callback.apply(this, t);
      }),
      (t.prototype.destroy = function () {
        this.context.remove(this), this.group.remove(this), delete i[this.key];
      }),
      (t.prototype.disable = function () {
        return (this.enabled = !1), this;
      }),
      (t.prototype.enable = function () {
        return this.context.refresh(), (this.enabled = !0), this;
      }),
      (t.prototype.next = function () {
        return this.group.next(this);
      }),
      (t.prototype.previous = function () {
        return this.group.previous(this);
      }),
      (t.invokeAll = function (t) {
        var e = [];
        for (var n in i) e.push(i[n]);
        for (var s = 0, o = e.length; o > s; s++) e[s][t]();
      }),
      (t.destroyAll = function () {
        t.invokeAll("destroy");
      }),
      (t.disableAll = function () {
        t.invokeAll("disable");
      }),
      (t.enableAll = function () {
        t.invokeAll("enable");
      }),
      (t.refreshAll = function () {
        t.Context.refreshAll();
      }),
      (t.viewportHeight = function () {
        return window.innerHeight || document.documentElement.clientHeight;
      }),
      (t.viewportWidth = function () {
        return document.documentElement.clientWidth;
      }),
      (t.adapters = []),
      (t.defaults = {
        context: window,
        continuous: !0,
        enabled: !0,
        group: "default",
        horizontal: !1,
        offset: 0,
      }),
      (t.offsetAliases = {
        "bottom-in-view": function () {
          return this.context.innerHeight() - this.adapter.outerHeight();
        },
        "right-in-view": function () {
          return this.context.innerWidth() - this.adapter.outerWidth();
        },
      }),
      (window.Waypoint = t);
  })(),
  (function () {
    "use strict";
    function t(t) {
      window.setTimeout(t, 1e3 / 60);
    }
    function e(t) {
      (this.element = t),
        (this.Adapter = s.Adapter),
        (this.adapter = new this.Adapter(t)),
        (this.key = "waypoint-context-" + i),
        (this.didScroll = !1),
        (this.didResize = !1),
        (this.oldScroll = {
          x: this.adapter.scrollLeft(),
          y: this.adapter.scrollTop(),
        }),
        (this.waypoints = { vertical: {}, horizontal: {} }),
        (t.waypointContextKey = this.key),
        (n[t.waypointContextKey] = this),
        (i += 1),
        this.createThrottledScrollHandler(),
        this.createThrottledResizeHandler();
    }
    var i = 0,
      n = {},
      s = window.Waypoint,
      o = window.onload;
    (e.prototype.add = function (t) {
      var e = t.options.horizontal ? "horizontal" : "vertical";
      (this.waypoints[e][t.key] = t), this.refresh();
    }),
      (e.prototype.checkEmpty = function () {
        var t = this.Adapter.isEmptyObject(this.waypoints.horizontal),
          e = this.Adapter.isEmptyObject(this.waypoints.vertical);
        t && e && (this.adapter.off(".waypoints"), delete n[this.key]);
      }),
      (e.prototype.createThrottledResizeHandler = function () {
        function t() {
          e.handleResize(), (e.didResize = !1);
        }
        var e = this;
        this.adapter.on("resize.waypoints", function () {
          e.didResize || ((e.didResize = !0), s.requestAnimationFrame(t));
        });
      }),
      (e.prototype.createThrottledScrollHandler = function () {
        function t() {
          e.handleScroll(), (e.didScroll = !1);
        }
        var e = this;
        this.adapter.on("scroll.waypoints", function () {
          (!e.didScroll || s.isTouch) &&
            ((e.didScroll = !0), s.requestAnimationFrame(t));
        });
      }),
      (e.prototype.handleResize = function () {
        s.Context.refreshAll();
      }),
      (e.prototype.handleScroll = function () {
        var t = {},
          e = {
            horizontal: {
              newScroll: this.adapter.scrollLeft(),
              oldScroll: this.oldScroll.x,
              forward: "right",
              backward: "left",
            },
            vertical: {
              newScroll: this.adapter.scrollTop(),
              oldScroll: this.oldScroll.y,
              forward: "down",
              backward: "up",
            },
          };
        for (var i in e) {
          var n = e[i],
            s = n.newScroll > n.oldScroll ? n.forward : n.backward;
          for (var o in this.waypoints[i]) {
            var r = this.waypoints[i][o],
              a = n.oldScroll < r.triggerPoint,
              l = n.newScroll >= r.triggerPoint;
            ((a && l) || (!a && !l)) &&
              (r.queueTrigger(s), (t[r.group.id] = r.group));
          }
        }
        for (var h in t) t[h].flushTriggers();
        this.oldScroll = { x: e.horizontal.newScroll, y: e.vertical.newScroll };
      }),
      (e.prototype.innerHeight = function () {
        return this.element == this.element.window
          ? s.viewportHeight()
          : this.adapter.innerHeight();
      }),
      (e.prototype.remove = function (t) {
        delete this.waypoints[t.axis][t.key], this.checkEmpty();
      }),
      (e.prototype.innerWidth = function () {
        return this.element == this.element.window
          ? s.viewportWidth()
          : this.adapter.innerWidth();
      }),
      (e.prototype.destroy = function () {
        var t = [];
        for (var e in this.waypoints)
          for (var i in this.waypoints[e]) t.push(this.waypoints[e][i]);
        for (var n = 0, s = t.length; s > n; n++) t[n].destroy();
      }),
      (e.prototype.refresh = function () {
        var t,
          e = this.element == this.element.window,
          i = e ? void 0 : this.adapter.offset(),
          n = {};
        for (var o in (this.handleScroll(),
        (t = {
          horizontal: {
            contextOffset: e ? 0 : i.left,
            contextScroll: e ? 0 : this.oldScroll.x,
            contextDimension: this.innerWidth(),
            oldScroll: this.oldScroll.x,
            forward: "right",
            backward: "left",
            offsetProp: "left",
          },
          vertical: {
            contextOffset: e ? 0 : i.top,
            contextScroll: e ? 0 : this.oldScroll.y,
            contextDimension: this.innerHeight(),
            oldScroll: this.oldScroll.y,
            forward: "down",
            backward: "up",
            offsetProp: "top",
          },
        }))) {
          var r = t[o];
          for (var a in this.waypoints[o]) {
            var l,
              h,
              c,
              u,
              d = this.waypoints[o][a],
              p = d.options.offset,
              f = d.triggerPoint,
              g = 0,
              m = null == f;
            d.element !== d.element.window &&
              (g = d.adapter.offset()[r.offsetProp]),
              "function" == typeof p
                ? (p = p.apply(d))
                : "string" == typeof p &&
                  ((p = parseFloat(p)),
                  d.options.offset.indexOf("%") > -1 &&
                    (p = Math.ceil((r.contextDimension * p) / 100))),
              (l = r.contextScroll - r.contextOffset),
              (d.triggerPoint = g + l - p),
              (h = f < r.oldScroll),
              (c = d.triggerPoint >= r.oldScroll),
              (u = !h && !c),
              !m && h && c
                ? (d.queueTrigger(r.backward), (n[d.group.id] = d.group))
                : !m && u
                ? (d.queueTrigger(r.forward), (n[d.group.id] = d.group))
                : m &&
                  r.oldScroll >= d.triggerPoint &&
                  (d.queueTrigger(r.forward), (n[d.group.id] = d.group));
          }
        }
        return (
          s.requestAnimationFrame(function () {
            for (var t in n) n[t].flushTriggers();
          }),
          this
        );
      }),
      (e.findOrCreateByElement = function (t) {
        return e.findByElement(t) || new e(t);
      }),
      (e.refreshAll = function () {
        for (var t in n) n[t].refresh();
      }),
      (e.findByElement = function (t) {
        return n[t.waypointContextKey];
      }),
      (window.onload = function () {
        o && o(), e.refreshAll();
      }),
      (s.requestAnimationFrame = function (e) {
        (
          window.requestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          window.webkitRequestAnimationFrame ||
          t
        ).call(window, e);
      }),
      (s.Context = e);
  })(),
  (function () {
    "use strict";
    function t(t, e) {
      return t.triggerPoint - e.triggerPoint;
    }
    function e(t, e) {
      return e.triggerPoint - t.triggerPoint;
    }
    function i(t) {
      (this.name = t.name),
        (this.axis = t.axis),
        (this.id = this.name + "-" + this.axis),
        (this.waypoints = []),
        this.clearTriggerQueues(),
        (n[this.axis][this.name] = this);
    }
    var n = { vertical: {}, horizontal: {} },
      s = window.Waypoint;
    (i.prototype.add = function (t) {
      this.waypoints.push(t);
    }),
      (i.prototype.clearTriggerQueues = function () {
        this.triggerQueues = { up: [], down: [], left: [], right: [] };
      }),
      (i.prototype.flushTriggers = function () {
        for (var i in this.triggerQueues) {
          var n = this.triggerQueues[i],
            s = "up" === i || "left" === i;
          n.sort(s ? e : t);
          for (var o = 0, r = n.length; r > o; o += 1) {
            var a = n[o];
            (a.options.continuous || o === n.length - 1) && a.trigger([i]);
          }
        }
        this.clearTriggerQueues();
      }),
      (i.prototype.next = function (e) {
        this.waypoints.sort(t);
        var i = s.Adapter.inArray(e, this.waypoints);
        return i === this.waypoints.length - 1 ? null : this.waypoints[i + 1];
      }),
      (i.prototype.previous = function (e) {
        this.waypoints.sort(t);
        var i = s.Adapter.inArray(e, this.waypoints);
        return i ? this.waypoints[i - 1] : null;
      }),
      (i.prototype.queueTrigger = function (t, e) {
        this.triggerQueues[e].push(t);
      }),
      (i.prototype.remove = function (t) {
        var e = s.Adapter.inArray(t, this.waypoints);
        e > -1 && this.waypoints.splice(e, 1);
      }),
      (i.prototype.first = function () {
        return this.waypoints[0];
      }),
      (i.prototype.last = function () {
        return this.waypoints[this.waypoints.length - 1];
      }),
      (i.findOrCreate = function (t) {
        return n[t.axis][t.name] || new i(t);
      }),
      (s.Group = i);
  })(),
  (function () {
    "use strict";
    function t(t) {
      this.$element = e(t);
    }
    var e = window.jQuery,
      i = window.Waypoint;
    e.each(
      [
        "innerHeight",
        "innerWidth",
        "off",
        "offset",
        "on",
        "outerHeight",
        "outerWidth",
        "scrollLeft",
        "scrollTop",
      ],
      function (e, i) {
        t.prototype[i] = function () {
          var t = Array.prototype.slice.call(arguments);
          return this.$element[i].apply(this.$element, t);
        };
      }
    ),
      e.each(["extend", "inArray", "isEmptyObject"], function (i, n) {
        t[n] = e[n];
      }),
      i.adapters.push({ name: "jquery", Adapter: t }),
      (i.Adapter = t);
  })(),
  (function () {
    "use strict";
    function t(t) {
      return function () {
        var i = [],
          n = arguments[0];
        return (
          t.isFunction(arguments[0]) &&
            ((n = t.extend({}, arguments[1])).handler = arguments[0]),
          this.each(function () {
            var s = t.extend({}, n, { element: this });
            "string" == typeof s.context &&
              (s.context = t(this).closest(s.context)[0]),
              i.push(new e(s));
          }),
          i
        );
      };
    }
    var e = window.Waypoint;
    window.jQuery && (window.jQuery.fn.waypoint = t(window.jQuery)),
      window.Zepto && (window.Zepto.fn.waypoint = t(window.Zepto));
  })(),
  (function (t) {
    t.fn.niceSelect = function (e) {
      function i(e) {
        e.after(
          t("<div></div>")
            .addClass("nice-select")
            .addClass(e.attr("class") || "")
            .addClass(e.attr("disabled") ? "disabled" : "")
            .attr("tabindex", e.attr("disabled") ? null : "0")
            .html('<span class="current"></span><ul class="list"></ul>')
        );
        var i = e.next(),
          n = e.find("option"),
          s = e.find("option:selected");
        i.find(".current").html(s.data("display") || s.text()),
          n.each(function (e) {
            var n = t(this),
              s = n.data("display");
            i.find("ul").append(
              t("<li></li>")
                .attr("data-value", n.val())
                .attr("data-display", s || null)
                .addClass(
                  "option" +
                    (n.is(":selected") ? " selected" : "") +
                    (n.is(":disabled") ? " disabled" : "")
                )
                .html(n.text())
            );
          });
      }
      if ("string" == typeof e)
        return (
          "update" == e
            ? this.each(function () {
                var e = t(this),
                  n = t(this).next(".nice-select"),
                  s = n.hasClass("open");
                n.length && (n.remove(), i(e), s && e.next().trigger("click"));
              })
            : "destroy" == e
            ? (this.each(function () {
                var e = t(this),
                  i = t(this).next(".nice-select");
                i.length && (i.remove(), e.css("display", ""));
              }),
              0 == t(".nice-select").length && t(document).off(".nice_select"))
            : console.log('Method "' + e + '" does not exist.'),
          this
        );
      this.hide(),
        this.each(function () {
          var e = t(this);
          e.next().hasClass("nice-select") || i(e);
        }),
        t(document).off(".nice_select"),
        t(document).on("click.nice_select", ".nice-select", function (e) {
          var i = t(this);
          t(".nice-select").not(i).removeClass("open"),
            i.toggleClass("open"),
            i.hasClass("open")
              ? (i.find(".option"),
                i.find(".focus").removeClass("focus"),
                i.find(".selected").addClass("focus"))
              : i.focus();
        }),
        t(document).on("click.nice_select", function (e) {
          0 === t(e.target).closest(".nice-select").length &&
            t(".nice-select").removeClass("open").find(".option");
        }),
        t(document).on(
          "click.nice_select",
          ".nice-select .option:not(.disabled)",
          function (e) {
            var i = t(this),
              n = i.closest(".nice-select");
            n.find(".selected").removeClass("selected"), i.addClass("selected");
            var s = i.data("display") || i.text();
            n.find(".current").text(s),
              n.prev("select").val(i.data("value")).trigger("change");
          }
        ),
        t(document).on("keydown.nice_select", ".nice-select", function (e) {
          var i = t(this),
            n = t(i.find(".focus") || i.find(".list .option.selected"));
          if (32 == e.keyCode || 13 == e.keyCode)
            return (
              i.hasClass("open") ? n.trigger("click") : i.trigger("click"), !1
            );
          if (40 == e.keyCode) {
            if (i.hasClass("open")) {
              var s = n.nextAll(".option:not(.disabled)").first();
              s.length > 0 &&
                (i.find(".focus").removeClass("focus"), s.addClass("focus"));
            } else i.trigger("click");
            return !1;
          }
          if (38 == e.keyCode) {
            if (i.hasClass("open")) {
              var o = n.prevAll(".option:not(.disabled)").first();
              o.length > 0 &&
                (i.find(".focus").removeClass("focus"), o.addClass("focus"));
            } else i.trigger("click");
            return !1;
          }
          if (27 == e.keyCode) i.hasClass("open") && i.trigger("click");
          else if (9 == e.keyCode && i.hasClass("open")) return !1;
        });
      var n = document.createElement("a").style;
      return (
        (n.cssText = "pointer-events:auto"),
        "auto" !== n.pointerEvents && t("html").addClass("no-csspointerevents"),
        this
      );
    };
  })(jQuery),
  (function (t, e, i, n) {
    function s(e, i) {
      (this.settings = null),
        (this.options = t.extend({}, s.Defaults, i)),
        (this.$element = t(e)),
        (this._handlers = {}),
        (this._plugins = {}),
        (this._supress = {}),
        (this._current = null),
        (this._speed = null),
        (this._coordinates = []),
        (this._breakpoint = null),
        (this._width = null),
        (this._items = []),
        (this._clones = []),
        (this._mergers = []),
        (this._widths = []),
        (this._invalidated = {}),
        (this._pipe = []),
        (this._drag = {
          time: null,
          target: null,
          pointer: null,
          stage: { start: null, current: null },
          direction: null,
        }),
        (this._states = {
          current: {},
          tags: {
            initializing: ["busy"],
            animating: ["busy"],
            dragging: ["interacting"],
          },
        }),
        t.each(
          ["onResize", "onThrottledResize"],
          t.proxy(function (e, i) {
            this._handlers[i] = t.proxy(this[i], this);
          }, this)
        ),
        t.each(
          s.Plugins,
          t.proxy(function (t, e) {
            this._plugins[t.charAt(0).toLowerCase() + t.slice(1)] = new e(this);
          }, this)
        ),
        t.each(
          s.Workers,
          t.proxy(function (e, i) {
            this._pipe.push({ filter: i.filter, run: t.proxy(i.run, this) });
          }, this)
        ),
        this.setup(),
        this.initialize();
    }
    (s.Defaults = {
      items: 3,
      loop: !1,
      center: !1,
      rewind: !1,
      mouseDrag: !0,
      touchDrag: !0,
      pullDrag: !0,
      freeDrag: !1,
      margin: 0,
      stagePadding: 0,
      merge: !1,
      mergeFit: !0,
      autoWidth: !1,
      startPosition: 0,
      rtl: !1,
      smartSpeed: 250,
      fluidSpeed: !1,
      dragEndSpeed: !1,
      responsive: {},
      responsiveRefreshRate: 200,
      responsiveBaseElement: e,
      fallbackEasing: "swing",
      info: !1,
      nestedItemSelector: !1,
      itemElement: "div",
      stageElement: "div",
      refreshClass: "owl-refresh",
      loadedClass: "owl-loaded",
      loadingClass: "owl-loading",
      rtlClass: "owl-rtl",
      responsiveClass: "owl-responsive",
      dragClass: "owl-drag",
      itemClass: "owl-item",
      stageClass: "owl-stage",
      stageOuterClass: "owl-stage-outer",
      grabClass: "owl-grab",
    }),
      (s.Width = { Default: "default", Inner: "inner", Outer: "outer" }),
      (s.Type = { Event: "event", State: "state" }),
      (s.Plugins = {}),
      (s.Workers = [
        {
          filter: ["width", "settings"],
          run: function () {
            this._width = this.$element.width();
          },
        },
        {
          filter: ["width", "items", "settings"],
          run: function (t) {
            t.current =
              this._items && this._items[this.relative(this._current)];
          },
        },
        {
          filter: ["items", "settings"],
          run: function () {
            this.$stage.children(".cloned").remove();
          },
        },
        {
          filter: ["width", "items", "settings"],
          run: function (t) {
            var e = this.settings.margin || "",
              i = !this.settings.autoWidth,
              n = this.settings.rtl,
              s = {
                width: "auto",
                "margin-left": n ? e : "",
                "margin-right": n ? "" : e,
              };
            !i && this.$stage.children().css(s), (t.css = s);
          },
        },
        {
          filter: ["width", "items", "settings"],
          run: function (t) {
            var e =
                (this.width() / this.settings.items).toFixed(3) -
                this.settings.margin,
              i = null,
              n = this._items.length,
              s = !this.settings.autoWidth,
              o = [];
            for (t.items = { merge: !1, width: e }; n--; )
              (i = this._mergers[n]),
                (i =
                  (this.settings.mergeFit &&
                    Math.min(i, this.settings.items)) ||
                  i),
                (t.items.merge = i > 1 || t.items.merge),
                (o[n] = s ? e * i : this._items[n].width());
            this._widths = o;
          },
        },
        {
          filter: ["items", "settings"],
          run: function () {
            var e = [],
              i = this._items,
              n = this.settings,
              s = Math.max(2 * n.items, 4),
              o = 2 * Math.ceil(i.length / 2),
              r = n.loop && i.length ? (n.rewind ? s : Math.max(s, o)) : 0,
              a = "",
              l = "";
            for (r /= 2; r--; )
              e.push(this.normalize(e.length / 2, !0)),
                (a += i[e[e.length - 1]][0].outerHTML),
                e.push(this.normalize(i.length - 1 - (e.length - 1) / 2, !0)),
                (l = i[e[e.length - 1]][0].outerHTML + l);
            (this._clones = e),
              t(a).addClass("cloned").appendTo(this.$stage),
              t(l).addClass("cloned").prependTo(this.$stage);
          },
        },
        {
          filter: ["width", "items", "settings"],
          run: function () {
            for (
              var t = this.settings.rtl ? 1 : -1,
                e = this._clones.length + this._items.length,
                i = -1,
                n = 0,
                s = 0,
                o = [];
              ++i < e;

            )
              (n = o[i - 1] || 0),
                (s = this._widths[this.relative(i)] + this.settings.margin),
                o.push(n + s * t);
            this._coordinates = o;
          },
        },
        {
          filter: ["width", "items", "settings"],
          run: function () {
            var t = this.settings.stagePadding,
              e = this._coordinates,
              i = {
                width: Math.ceil(Math.abs(e[e.length - 1])) + 2 * t,
                "padding-left": t || "",
                "padding-right": t || "",
              };
            this.$stage.css(i);
          },
        },
        {
          filter: ["width", "items", "settings"],
          run: function (t) {
            var e = this._coordinates.length,
              i = !this.settings.autoWidth,
              n = this.$stage.children();
            if (i && t.items.merge)
              for (; e--; )
                (t.css.width = this._widths[this.relative(e)]),
                  n.eq(e).css(t.css);
            else i && ((t.css.width = t.items.width), n.css(t.css));
          },
        },
        {
          filter: ["items"],
          run: function () {
            this._coordinates.length < 1 && this.$stage.removeAttr("style");
          },
        },
        {
          filter: ["width", "items", "settings"],
          run: function (t) {
            (t.current = t.current
              ? this.$stage.children().index(t.current)
              : 0),
              (t.current = Math.max(
                this.minimum(),
                Math.min(this.maximum(), t.current)
              )),
              this.reset(t.current);
          },
        },
        {
          filter: ["position"],
          run: function () {
            this.animate(this.coordinates(this._current));
          },
        },
        {
          filter: ["width", "position", "items", "settings"],
          run: function () {
            var t,
              e,
              i,
              n,
              s = this.settings.rtl ? 1 : -1,
              o = 2 * this.settings.stagePadding,
              r = this.coordinates(this.current()) + o,
              a = r + this.width() * s,
              l = [];
            for (i = 0, n = this._coordinates.length; i < n; i++)
              (t = this._coordinates[i - 1] || 0),
                (e = Math.abs(this._coordinates[i]) + o * s),
                ((this.op(t, "<=", r) && this.op(t, ">", a)) ||
                  (this.op(e, "<", r) && this.op(e, ">", a))) &&
                  l.push(i);
            this.$stage.children(".active").removeClass("active"),
              this.$stage
                .children(":eq(" + l.join("), :eq(") + ")")
                .addClass("active"),
              this.settings.center &&
                (this.$stage.children(".center").removeClass("center"),
                this.$stage.children().eq(this.current()).addClass("center"));
          },
        },
      ]),
      (s.prototype.initialize = function () {
        var e, i, s;
        this.enter("initializing"),
          this.trigger("initialize"),
          this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl),
          this.settings.autoWidth &&
            !this.is("pre-loading") &&
            ((e = this.$element.find("img")),
            (i = this.settings.nestedItemSelector
              ? "." + this.settings.nestedItemSelector
              : n),
            (s = this.$element.children(i).width()),
            e.length && s <= 0 && this.preloadAutoWidthImages(e)),
          this.$element.addClass(this.options.loadingClass),
          (this.$stage = t(
            "<" +
              this.settings.stageElement +
              ' class="' +
              this.settings.stageClass +
              '"/>'
          ).wrap('<div class="' + this.settings.stageOuterClass + '"/>')),
          this.$element.append(this.$stage.parent()),
          this.replace(this.$element.children().not(this.$stage.parent())),
          this.$element.is(":visible")
            ? this.refresh()
            : this.invalidate("width"),
          this.$element
            .removeClass(this.options.loadingClass)
            .addClass(this.options.loadedClass),
          this.registerEventHandlers(),
          this.leave("initializing"),
          this.trigger("initialized");
      }),
      (s.prototype.setup = function () {
        var e = this.viewport(),
          i = this.options.responsive,
          n = -1,
          s = null;
        i
          ? (t.each(i, function (t) {
              t <= e && t > n && (n = Number(t));
            }),
            "function" ==
              typeof (s = t.extend({}, this.options, i[n])).stagePadding &&
              (s.stagePadding = s.stagePadding()),
            delete s.responsive,
            s.responsiveClass &&
              this.$element.attr(
                "class",
                this.$element
                  .attr("class")
                  .replace(
                    new RegExp(
                      "(" + this.options.responsiveClass + "-)\\S+\\s",
                      "g"
                    ),
                    "$1" + n
                  )
              ))
          : (s = t.extend({}, this.options)),
          this.trigger("change", { property: { name: "settings", value: s } }),
          (this._breakpoint = n),
          (this.settings = s),
          this.invalidate("settings"),
          this.trigger("changed", {
            property: { name: "settings", value: this.settings },
          });
      }),
      (s.prototype.optionsLogic = function () {
        this.settings.autoWidth &&
          ((this.settings.stagePadding = !1), (this.settings.merge = !1));
      }),
      (s.prototype.prepare = function (e) {
        var i = this.trigger("prepare", { content: e });
        return (
          i.data ||
            (i.data = t("<" + this.settings.itemElement + "/>")
              .addClass(this.options.itemClass)
              .append(e)),
          this.trigger("prepared", { content: i.data }),
          i.data
        );
      }),
      (s.prototype.update = function () {
        for (
          var e = 0,
            i = this._pipe.length,
            n = t.proxy(function (t) {
              return this[t];
            }, this._invalidated),
            s = {};
          e < i;

        )
          (this._invalidated.all ||
            t.grep(this._pipe[e].filter, n).length > 0) &&
            this._pipe[e].run(s),
            e++;
        (this._invalidated = {}), !this.is("valid") && this.enter("valid");
      }),
      (s.prototype.width = function (t) {
        switch ((t = t || s.Width.Default)) {
          case s.Width.Inner:
          case s.Width.Outer:
            return this._width;
          default:
            return (
              this._width -
              2 * this.settings.stagePadding +
              this.settings.margin
            );
        }
      }),
      (s.prototype.refresh = function () {
        this.enter("refreshing"),
          this.trigger("refresh"),
          this.setup(),
          this.optionsLogic(),
          this.$element.addClass(this.options.refreshClass),
          this.update(),
          this.$element.removeClass(this.options.refreshClass),
          this.leave("refreshing"),
          this.trigger("refreshed");
      }),
      (s.prototype.onThrottledResize = function () {
        e.clearTimeout(this.resizeTimer),
          (this.resizeTimer = e.setTimeout(
            this._handlers.onResize,
            this.settings.responsiveRefreshRate
          ));
      }),
      (s.prototype.onResize = function () {
        return (
          !!this._items.length &&
          this._width !== this.$element.width() &&
          !!this.$element.is(":visible") &&
          (this.enter("resizing"),
          this.trigger("resize").isDefaultPrevented()
            ? (this.leave("resizing"), !1)
            : (this.invalidate("width"),
              this.refresh(),
              this.leave("resizing"),
              void this.trigger("resized")))
        );
      }),
      (s.prototype.registerEventHandlers = function () {
        t.support.transition &&
          this.$stage.on(
            t.support.transition.end + ".owl.core",
            t.proxy(this.onTransitionEnd, this)
          ),
          !1 !== this.settings.responsive &&
            this.on(e, "resize", this._handlers.onThrottledResize),
          this.settings.mouseDrag &&
            (this.$element.addClass(this.options.dragClass),
            this.$stage.on(
              "mousedown.owl.core",
              t.proxy(this.onDragStart, this)
            ),
            this.$stage.on(
              "dragstart.owl.core selectstart.owl.core",
              function () {
                return !1;
              }
            )),
          this.settings.touchDrag &&
            (this.$stage.on(
              "touchstart.owl.core",
              t.proxy(this.onDragStart, this)
            ),
            this.$stage.on(
              "touchcancel.owl.core",
              t.proxy(this.onDragEnd, this)
            ));
      }),
      (s.prototype.onDragStart = function (e) {
        var n = null;
        3 !== e.which &&
          (t.support.transform
            ? (n = {
                x: (n = this.$stage
                  .css("transform")
                  .replace(/.*\(|\)| /g, "")
                  .split(","))[16 === n.length ? 12 : 4],
                y: n[16 === n.length ? 13 : 5],
              })
            : ((n = this.$stage.position()),
              (n = {
                x: this.settings.rtl
                  ? n.left +
                    this.$stage.width() -
                    this.width() +
                    this.settings.margin
                  : n.left,
                y: n.top,
              })),
          this.is("animating") &&
            (t.support.transform ? this.animate(n.x) : this.$stage.stop(),
            this.invalidate("position")),
          this.$element.toggleClass(
            this.options.grabClass,
            "mousedown" === e.type
          ),
          this.speed(0),
          (this._drag.time = new Date().getTime()),
          (this._drag.target = t(e.target)),
          (this._drag.stage.start = n),
          (this._drag.stage.current = n),
          (this._drag.pointer = this.pointer(e)),
          t(i).on(
            "mouseup.owl.core touchend.owl.core",
            t.proxy(this.onDragEnd, this)
          ),
          t(i).one(
            "mousemove.owl.core touchmove.owl.core",
            t.proxy(function (e) {
              var n = this.difference(this._drag.pointer, this.pointer(e));
              t(i).on(
                "mousemove.owl.core touchmove.owl.core",
                t.proxy(this.onDragMove, this)
              ),
                (Math.abs(n.x) < Math.abs(n.y) && this.is("valid")) ||
                  (e.preventDefault(),
                  this.enter("dragging"),
                  this.trigger("drag"));
            }, this)
          ));
      }),
      (s.prototype.onDragMove = function (t) {
        var e = null,
          i = null,
          n = null,
          s = this.difference(this._drag.pointer, this.pointer(t)),
          o = this.difference(this._drag.stage.start, s);
        this.is("dragging") &&
          (t.preventDefault(),
          this.settings.loop
            ? ((e = this.coordinates(this.minimum())),
              (i = this.coordinates(this.maximum() + 1) - e),
              (o.x = ((((o.x - e) % i) + i) % i) + e))
            : ((e = this.settings.rtl
                ? this.coordinates(this.maximum())
                : this.coordinates(this.minimum())),
              (i = this.settings.rtl
                ? this.coordinates(this.minimum())
                : this.coordinates(this.maximum())),
              (n = this.settings.pullDrag ? (-1 * s.x) / 5 : 0),
              (o.x = Math.max(Math.min(o.x, e + n), i + n))),
          (this._drag.stage.current = o),
          this.animate(o.x));
      }),
      (s.prototype.onDragEnd = function (e) {
        var n = this.difference(this._drag.pointer, this.pointer(e)),
          s = this._drag.stage.current,
          o = (n.x > 0) ^ this.settings.rtl ? "left" : "right";
        t(i).off(".owl.core"),
          this.$element.removeClass(this.options.grabClass),
          ((0 !== n.x && this.is("dragging")) || !this.is("valid")) &&
            (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed),
            this.current(
              this.closest(s.x, 0 !== n.x ? o : this._drag.direction)
            ),
            this.invalidate("position"),
            this.update(),
            (this._drag.direction = o),
            (Math.abs(n.x) > 3 ||
              new Date().getTime() - this._drag.time > 300) &&
              this._drag.target.one("click.owl.core", function () {
                return !1;
              })),
          this.is("dragging") &&
            (this.leave("dragging"), this.trigger("dragged"));
      }),
      (s.prototype.closest = function (e, i) {
        var n = -1,
          s = this.width(),
          o = this.coordinates();
        return (
          this.settings.freeDrag ||
            t.each(
              o,
              t.proxy(function (t, r) {
                return (
                  "left" === i && e > r - 30 && e < r + 30
                    ? (n = t)
                    : "right" === i && e > r - s - 30 && e < r - s + 30
                    ? (n = t + 1)
                    : this.op(e, "<", r) &&
                      this.op(e, ">", o[t + 1] || r - s) &&
                      (n = "left" === i ? t + 1 : t),
                  -1 === n
                );
              }, this)
            ),
          this.settings.loop ||
            (this.op(e, ">", o[this.minimum()])
              ? (n = e = this.minimum())
              : this.op(e, "<", o[this.maximum()]) && (n = e = this.maximum())),
          n
        );
      }),
      (s.prototype.animate = function (e) {
        var i = this.speed() > 0;
        this.is("animating") && this.onTransitionEnd(),
          i && (this.enter("animating"), this.trigger("translate")),
          t.support.transform3d && t.support.transition
            ? this.$stage.css({
                transform: "translate3d(" + e + "px,0px,0px)",
                transition: this.speed() / 1e3 + "s",
              })
            : i
            ? this.$stage.animate(
                { left: e + "px" },
                this.speed(),
                this.settings.fallbackEasing,
                t.proxy(this.onTransitionEnd, this)
              )
            : this.$stage.css({ left: e + "px" });
      }),
      (s.prototype.is = function (t) {
        return this._states.current[t] && this._states.current[t] > 0;
      }),
      (s.prototype.current = function (t) {
        if (t === n) return this._current;
        if (0 === this._items.length) return n;
        if (((t = this.normalize(t)), this._current !== t)) {
          var e = this.trigger("change", {
            property: { name: "position", value: t },
          });
          e.data !== n && (t = this.normalize(e.data)),
            (this._current = t),
            this.invalidate("position"),
            this.trigger("changed", {
              property: { name: "position", value: this._current },
            });
        }
        return this._current;
      }),
      (s.prototype.invalidate = function (e) {
        return (
          "string" === t.type(e) &&
            ((this._invalidated[e] = !0),
            this.is("valid") && this.leave("valid")),
          t.map(this._invalidated, function (t, e) {
            return e;
          })
        );
      }),
      (s.prototype.reset = function (t) {
        (t = this.normalize(t)) !== n &&
          ((this._speed = 0),
          (this._current = t),
          this.suppress(["translate", "translated"]),
          this.animate(this.coordinates(t)),
          this.release(["translate", "translated"]));
      }),
      (s.prototype.normalize = function (t, e) {
        var i = this._items.length,
          s = e ? 0 : this._clones.length;
        return (
          !this.isNumeric(t) || i < 1
            ? (t = n)
            : (t < 0 || t >= i + s) &&
              (t = ((((t - s / 2) % i) + i) % i) + s / 2),
          t
        );
      }),
      (s.prototype.relative = function (t) {
        return (t -= this._clones.length / 2), this.normalize(t, !0);
      }),
      (s.prototype.maximum = function (t) {
        var e,
          i,
          n,
          s = this.settings,
          o = this._coordinates.length;
        if (s.loop) o = this._clones.length / 2 + this._items.length - 1;
        else if (s.autoWidth || s.merge) {
          for (
            e = this._items.length,
              i = this._items[--e].width(),
              n = this.$element.width();
            e-- && !((i += this._items[e].width() + this.settings.margin) > n);

          );
          o = e + 1;
        } else
          o = s.center ? this._items.length - 1 : this._items.length - s.items;
        return t && (o -= this._clones.length / 2), Math.max(o, 0);
      }),
      (s.prototype.minimum = function (t) {
        return t ? 0 : this._clones.length / 2;
      }),
      (s.prototype.items = function (t) {
        return t === n
          ? this._items.slice()
          : ((t = this.normalize(t, !0)), this._items[t]);
      }),
      (s.prototype.mergers = function (t) {
        return t === n
          ? this._mergers.slice()
          : ((t = this.normalize(t, !0)), this._mergers[t]);
      }),
      (s.prototype.clones = function (e) {
        var i = this._clones.length / 2,
          s = i + this._items.length,
          o = function (t) {
            return t % 2 == 0 ? s + t / 2 : i - (t + 1) / 2;
          };
        return e === n
          ? t.map(this._clones, function (t, e) {
              return o(e);
            })
          : t.map(this._clones, function (t, i) {
              return t === e ? o(i) : null;
            });
      }),
      (s.prototype.speed = function (t) {
        return t !== n && (this._speed = t), this._speed;
      }),
      (s.prototype.coordinates = function (e) {
        var i,
          s = 1,
          o = e - 1;
        return e === n
          ? t.map(
              this._coordinates,
              t.proxy(function (t, e) {
                return this.coordinates(e);
              }, this)
            )
          : (this.settings.center
              ? (this.settings.rtl && ((s = -1), (o = e + 1)),
                (i = this._coordinates[e]),
                (i +=
                  ((this.width() - i + (this._coordinates[o] || 0)) / 2) * s))
              : (i = this._coordinates[o] || 0),
            (i = Math.ceil(i)));
      }),
      (s.prototype.duration = function (t, e, i) {
        return 0 === i
          ? 0
          : Math.min(Math.max(Math.abs(e - t), 1), 6) *
              Math.abs(i || this.settings.smartSpeed);
      }),
      (s.prototype.to = function (t, e) {
        var i = this.current(),
          n = null,
          s = t - this.relative(i),
          o = (s > 0) - (s < 0),
          r = this._items.length,
          a = this.minimum(),
          l = this.maximum();
        this.settings.loop
          ? (!this.settings.rewind && Math.abs(s) > r / 2 && (s += -1 * o * r),
            (n = (((((t = i + s) - a) % r) + r) % r) + a) !== t &&
              n - s <= l &&
              n - s > 0 &&
              ((i = n - s), (t = n), this.reset(i)))
          : (t = this.settings.rewind
              ? ((t % (l += 1)) + l) % l
              : Math.max(a, Math.min(l, t))),
          this.speed(this.duration(i, t, e)),
          this.current(t),
          this.$element.is(":visible") && this.update();
      }),
      (s.prototype.next = function (t) {
        (t = t || !1), this.to(this.relative(this.current()) + 1, t);
      }),
      (s.prototype.prev = function (t) {
        (t = t || !1), this.to(this.relative(this.current()) - 1, t);
      }),
      (s.prototype.onTransitionEnd = function (t) {
        if (
          t !== n &&
          (t.stopPropagation(),
          (t.target || t.srcElement || t.originalTarget) !== this.$stage.get(0))
        )
          return !1;
        this.leave("animating"), this.trigger("translated");
      }),
      (s.prototype.viewport = function () {
        var n;
        return (
          this.options.responsiveBaseElement !== e
            ? (n = t(this.options.responsiveBaseElement).width())
            : e.innerWidth
            ? (n = e.innerWidth)
            : i.documentElement && i.documentElement.clientWidth
            ? (n = i.documentElement.clientWidth)
            : console.warn("Can not detect viewport width."),
          n
        );
      }),
      (s.prototype.replace = function (e) {
        this.$stage.empty(),
          (this._items = []),
          e && (e = e instanceof jQuery ? e : t(e)),
          this.settings.nestedItemSelector &&
            (e = e.find("." + this.settings.nestedItemSelector)),
          e
            .filter(function () {
              return 1 === this.nodeType;
            })
            .each(
              t.proxy(function (t, e) {
                (e = this.prepare(e)),
                  this.$stage.append(e),
                  this._items.push(e),
                  this._mergers.push(
                    1 *
                      e
                        .find("[data-merge]")
                        .addBack("[data-merge]")
                        .attr("data-merge") || 1
                  );
              }, this)
            ),
          this.reset(
            this.isNumeric(this.settings.startPosition)
              ? this.settings.startPosition
              : 0
          ),
          this.invalidate("items");
      }),
      (s.prototype.add = function (e, i) {
        var s = this.relative(this._current);
        (i = i === n ? this._items.length : this.normalize(i, !0)),
          (e = e instanceof jQuery ? e : t(e)),
          this.trigger("add", { content: e, position: i }),
          (e = this.prepare(e)),
          0 === this._items.length || i === this._items.length
            ? (0 === this._items.length && this.$stage.append(e),
              0 !== this._items.length && this._items[i - 1].after(e),
              this._items.push(e),
              this._mergers.push(
                1 *
                  e
                    .find("[data-merge]")
                    .addBack("[data-merge]")
                    .attr("data-merge") || 1
              ))
            : (this._items[i].before(e),
              this._items.splice(i, 0, e),
              this._mergers.splice(
                i,
                0,
                1 *
                  e
                    .find("[data-merge]")
                    .addBack("[data-merge]")
                    .attr("data-merge") || 1
              )),
          this._items[s] && this.reset(this._items[s].index()),
          this.invalidate("items"),
          this.trigger("added", { content: e, position: i });
      }),
      (s.prototype.remove = function (t) {
        (t = this.normalize(t, !0)) !== n &&
          (this.trigger("remove", { content: this._items[t], position: t }),
          this._items[t].remove(),
          this._items.splice(t, 1),
          this._mergers.splice(t, 1),
          this.invalidate("items"),
          this.trigger("removed", { content: null, position: t }));
      }),
      (s.prototype.preloadAutoWidthImages = function (e) {
        e.each(
          t.proxy(function (e, i) {
            this.enter("pre-loading"),
              (i = t(i)),
              t(new Image())
                .one(
                  "load",
                  t.proxy(function (t) {
                    i.attr("src", t.target.src),
                      i.css("opacity", 1),
                      this.leave("pre-loading"),
                      !this.is("pre-loading") &&
                        !this.is("initializing") &&
                        this.refresh();
                  }, this)
                )
                .attr(
                  "src",
                  i.attr("src") ||
                    i.attr("data-src") ||
                    i.attr("data-src-retina")
                );
          }, this)
        );
      }),
      (s.prototype.destroy = function () {
        for (var n in (this.$element.off(".owl.core"),
        this.$stage.off(".owl.core"),
        t(i).off(".owl.core"),
        !1 !== this.settings.responsive &&
          (e.clearTimeout(this.resizeTimer),
          this.off(e, "resize", this._handlers.onThrottledResize)),
        this._plugins))
          this._plugins[n].destroy();
        this.$stage.children(".cloned").remove(),
          this.$stage.unwrap(),
          this.$stage.children().contents().unwrap(),
          this.$stage.children().unwrap(),
          this.$element
            .removeClass(this.options.refreshClass)
            .removeClass(this.options.loadingClass)
            .removeClass(this.options.loadedClass)
            .removeClass(this.options.rtlClass)
            .removeClass(this.options.dragClass)
            .removeClass(this.options.grabClass)
            .attr(
              "class",
              this.$element
                .attr("class")
                .replace(
                  new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"),
                  ""
                )
            )
            .removeData("owl.carousel");
      }),
      (s.prototype.op = function (t, e, i) {
        var n = this.settings.rtl;
        switch (e) {
          case "<":
            return n ? t > i : t < i;
          case ">":
            return n ? t < i : t > i;
          case ">=":
            return n ? t <= i : t >= i;
          case "<=":
            return n ? t >= i : t <= i;
        }
      }),
      (s.prototype.on = function (t, e, i, n) {
        t.addEventListener
          ? t.addEventListener(e, i, n)
          : t.attachEvent && t.attachEvent("on" + e, i);
      }),
      (s.prototype.off = function (t, e, i, n) {
        t.removeEventListener
          ? t.removeEventListener(e, i, n)
          : t.detachEvent && t.detachEvent("on" + e, i);
      }),
      (s.prototype.trigger = function (e, i, n, o, r) {
        var a = { item: { count: this._items.length, index: this.current() } },
          l = t.camelCase(
            t
              .grep(["on", e, n], function (t) {
                return t;
              })
              .join("-")
              .toLowerCase()
          ),
          h = t.Event(
            [e, "owl", n || "carousel"].join(".").toLowerCase(),
            t.extend({ relatedTarget: this }, a, i)
          );
        return (
          this._supress[e] ||
            (t.each(this._plugins, function (t, e) {
              e.onTrigger && e.onTrigger(h);
            }),
            this.register({ type: s.Type.Event, name: e }),
            this.$element.trigger(h),
            this.settings &&
              "function" == typeof this.settings[l] &&
              this.settings[l].call(this, h)),
          h
        );
      }),
      (s.prototype.enter = function (e) {
        t.each(
          [e].concat(this._states.tags[e] || []),
          t.proxy(function (t, e) {
            this._states.current[e] === n && (this._states.current[e] = 0),
              this._states.current[e]++;
          }, this)
        );
      }),
      (s.prototype.leave = function (e) {
        t.each(
          [e].concat(this._states.tags[e] || []),
          t.proxy(function (t, e) {
            this._states.current[e]--;
          }, this)
        );
      }),
      (s.prototype.register = function (e) {
        if (e.type === s.Type.Event) {
          if (
            (t.event.special[e.name] || (t.event.special[e.name] = {}),
            !t.event.special[e.name].owl)
          ) {
            var i = t.event.special[e.name]._default;
            (t.event.special[e.name]._default = function (t) {
              return !i ||
                !i.apply ||
                (t.namespace && -1 !== t.namespace.indexOf("owl"))
                ? t.namespace && t.namespace.indexOf("owl") > -1
                : i.apply(this, arguments);
            }),
              (t.event.special[e.name].owl = !0);
          }
        } else
          e.type === s.Type.State &&
            (this._states.tags[e.name]
              ? (this._states.tags[e.name] = this._states.tags[e.name].concat(
                  e.tags
                ))
              : (this._states.tags[e.name] = e.tags),
            (this._states.tags[e.name] = t.grep(
              this._states.tags[e.name],
              t.proxy(function (i, n) {
                return t.inArray(i, this._states.tags[e.name]) === n;
              }, this)
            )));
      }),
      (s.prototype.suppress = function (e) {
        t.each(
          e,
          t.proxy(function (t, e) {
            this._supress[e] = !0;
          }, this)
        );
      }),
      (s.prototype.release = function (e) {
        t.each(
          e,
          t.proxy(function (t, e) {
            delete this._supress[e];
          }, this)
        );
      }),
      (s.prototype.pointer = function (t) {
        var i = { x: null, y: null };
        return (
          (t =
            (t = t.originalEvent || t || e.event).touches && t.touches.length
              ? t.touches[0]
              : t.changedTouches && t.changedTouches.length
              ? t.changedTouches[0]
              : t).pageX
            ? ((i.x = t.pageX), (i.y = t.pageY))
            : ((i.x = t.clientX), (i.y = t.clientY)),
          i
        );
      }),
      (s.prototype.isNumeric = function (t) {
        return !isNaN(parseFloat(t));
      }),
      (s.prototype.difference = function (t, e) {
        return { x: t.x - e.x, y: t.y - e.y };
      }),
      (t.fn.owlCarousel = function (e) {
        var i = Array.prototype.slice.call(arguments, 1);
        return this.each(function () {
          var n = t(this),
            o = n.data("owl.carousel");
          o ||
            ((o = new s(this, "object" == typeof e && e)),
            n.data("owl.carousel", o),
            t.each(
              [
                "next",
                "prev",
                "to",
                "destroy",
                "refresh",
                "replace",
                "add",
                "remove",
              ],
              function (e, i) {
                o.register({ type: s.Type.Event, name: i }),
                  o.$element.on(
                    i + ".owl.carousel.core",
                    t.proxy(function (t) {
                      t.namespace &&
                        t.relatedTarget !== this &&
                        (this.suppress([i]),
                        o[i].apply(this, [].slice.call(arguments, 1)),
                        this.release([i]));
                    }, o)
                  );
              }
            )),
            "string" == typeof e && "_" !== e.charAt(0) && o[e].apply(o, i);
        });
      }),
      (t.fn.owlCarousel.Constructor = s);
  })(window.Zepto || window.jQuery, window, document),
  (function (t, e, i, n) {
    var s = function (e) {
      (this._core = e),
        (this._interval = null),
        (this._visible = null),
        (this._handlers = {
          "initialized.owl.carousel": t.proxy(function (t) {
            t.namespace && this._core.settings.autoRefresh && this.watch();
          }, this),
        }),
        (this._core.options = t.extend({}, s.Defaults, this._core.options)),
        this._core.$element.on(this._handlers);
    };
    (s.Defaults = { autoRefresh: !0, autoRefreshInterval: 500 }),
      (s.prototype.watch = function () {
        this._interval ||
          ((this._visible = this._core.$element.is(":visible")),
          (this._interval = e.setInterval(
            t.proxy(this.refresh, this),
            this._core.settings.autoRefreshInterval
          )));
      }),
      (s.prototype.refresh = function () {
        this._core.$element.is(":visible") !== this._visible &&
          ((this._visible = !this._visible),
          this._core.$element.toggleClass("owl-hidden", !this._visible),
          this._visible &&
            this._core.invalidate("width") &&
            this._core.refresh());
      }),
      (s.prototype.destroy = function () {
        var t, i;
        for (t in (e.clearInterval(this._interval), this._handlers))
          this._core.$element.off(t, this._handlers[t]);
        for (i in Object.getOwnPropertyNames(this))
          "function" != typeof this[i] && (this[i] = null);
      }),
      (t.fn.owlCarousel.Constructor.Plugins.AutoRefresh = s);
  })(window.Zepto || window.jQuery, window, document),
  (function (t, e, i, n) {
    var s = function (e) {
      (this._core = e),
        (this._loaded = []),
        (this._handlers = {
          "initialized.owl.carousel change.owl.carousel resized.owl.carousel":
            t.proxy(function (e) {
              if (
                e.namespace &&
                this._core.settings &&
                this._core.settings.lazyLoad &&
                ((e.property && "position" == e.property.name) ||
                  "initialized" == e.type)
              )
                for (
                  var i = this._core.settings,
                    n = (i.center && Math.ceil(i.items / 2)) || i.items,
                    s = (i.center && -1 * n) || 0,
                    o =
                      (e.property && void 0 !== e.property.value
                        ? e.property.value
                        : this._core.current()) + s,
                    r = this._core.clones().length,
                    a = t.proxy(function (t, e) {
                      this.load(e);
                    }, this);
                  s++ < n;

                )
                  this.load(r / 2 + this._core.relative(o)),
                    r && t.each(this._core.clones(this._core.relative(o)), a),
                    o++;
            }, this),
        }),
        (this._core.options = t.extend({}, s.Defaults, this._core.options)),
        this._core.$element.on(this._handlers);
    };
    (s.Defaults = { lazyLoad: !1 }),
      (s.prototype.load = function (i) {
        var n = this._core.$stage.children().eq(i),
          s = n && n.find(".owl-lazy");
        !s ||
          t.inArray(n.get(0), this._loaded) > -1 ||
          (s.each(
            t.proxy(function (i, n) {
              var s,
                o = t(n),
                r =
                  (e.devicePixelRatio > 1 && o.attr("data-src-retina")) ||
                  o.attr("data-src");
              this._core.trigger("load", { element: o, url: r }, "lazy"),
                o.is("img")
                  ? o
                      .one(
                        "load.owl.lazy",
                        t.proxy(function () {
                          o.css("opacity", 1),
                            this._core.trigger(
                              "loaded",
                              { element: o, url: r },
                              "lazy"
                            );
                        }, this)
                      )
                      .attr("src", r)
                  : (((s = new Image()).onload = t.proxy(function () {
                      o.css({
                        "background-image": 'url("' + r + '")',
                        opacity: "1",
                      }),
                        this._core.trigger(
                          "loaded",
                          { element: o, url: r },
                          "lazy"
                        );
                    }, this)),
                    (s.src = r));
            }, this)
          ),
          this._loaded.push(n.get(0)));
      }),
      (s.prototype.destroy = function () {
        var t, e;
        for (t in this.handlers) this._core.$element.off(t, this.handlers[t]);
        for (e in Object.getOwnPropertyNames(this))
          "function" != typeof this[e] && (this[e] = null);
      }),
      (t.fn.owlCarousel.Constructor.Plugins.Lazy = s);
  })(window.Zepto || window.jQuery, window, document),
  (function (t, e, i, n) {
    var s = function (e) {
      (this._core = e),
        (this._handlers = {
          "initialized.owl.carousel refreshed.owl.carousel": t.proxy(function (
            t
          ) {
            t.namespace && this._core.settings.autoHeight && this.update();
          },
          this),
          "changed.owl.carousel": t.proxy(function (t) {
            t.namespace &&
              this._core.settings.autoHeight &&
              "position" == t.property.name &&
              this.update();
          }, this),
          "loaded.owl.lazy": t.proxy(function (t) {
            t.namespace &&
              this._core.settings.autoHeight &&
              t.element.closest("." + this._core.settings.itemClass).index() ===
                this._core.current() &&
              this.update();
          }, this),
        }),
        (this._core.options = t.extend({}, s.Defaults, this._core.options)),
        this._core.$element.on(this._handlers);
    };
    (s.Defaults = { autoHeight: !1, autoHeightClass: "owl-height" }),
      (s.prototype.update = function () {
        var e,
          i = this._core._current,
          n = i + this._core.settings.items,
          s = this._core.$stage.children().toArray().slice(i, n),
          o = [];
        t.each(s, function (e, i) {
          o.push(t(i).height());
        }),
          (e = Math.max.apply(null, o)),
          this._core.$stage
            .parent()
            .height(e)
            .addClass(this._core.settings.autoHeightClass);
      }),
      (s.prototype.destroy = function () {
        var t, e;
        for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this))
          "function" != typeof this[e] && (this[e] = null);
      }),
      (t.fn.owlCarousel.Constructor.Plugins.AutoHeight = s);
  })(window.Zepto || window.jQuery, window, document),
  (function (t, e, i, n) {
    var s = function (e) {
      (this._core = e),
        (this._videos = {}),
        (this._playing = null),
        (this._handlers = {
          "initialized.owl.carousel": t.proxy(function (t) {
            t.namespace &&
              this._core.register({
                type: "state",
                name: "playing",
                tags: ["interacting"],
              });
          }, this),
          "resize.owl.carousel": t.proxy(function (t) {
            t.namespace &&
              this._core.settings.video &&
              this.isInFullScreen() &&
              t.preventDefault();
          }, this),
          "refreshed.owl.carousel": t.proxy(function (t) {
            t.namespace &&
              this._core.is("resizing") &&
              this._core.$stage.find(".cloned .owl-video-frame").remove();
          }, this),
          "changed.owl.carousel": t.proxy(function (t) {
            t.namespace &&
              "position" === t.property.name &&
              this._playing &&
              this.stop();
          }, this),
          "prepared.owl.carousel": t.proxy(function (e) {
            if (e.namespace) {
              var i = t(e.content).find(".owl-video");
              i.length &&
                (i.css("display", "none"), this.fetch(i, t(e.content)));
            }
          }, this),
        }),
        (this._core.options = t.extend({}, s.Defaults, this._core.options)),
        this._core.$element.on(this._handlers),
        this._core.$element.on(
          "click.owl.video",
          ".owl-video-play-icon",
          t.proxy(function (t) {
            this.play(t);
          }, this)
        );
    };
    (s.Defaults = { video: !1, videoHeight: !1, videoWidth: !1 }),
      (s.prototype.fetch = function (t, e) {
        var i = t.attr("data-vimeo-id")
            ? "vimeo"
            : t.attr("data-vzaar-id")
            ? "vzaar"
            : "youtube",
          n =
            t.attr("data-vimeo-id") ||
            t.attr("data-youtube-id") ||
            t.attr("data-vzaar-id"),
          s = t.attr("data-width") || this._core.settings.videoWidth,
          o = t.attr("data-height") || this._core.settings.videoHeight,
          r = t.attr("href");
        if (!r) throw new Error("Missing video URL.");
        if (
          (n = r.match(
            /(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/
          ))[3].indexOf("youtu") > -1
        )
          i = "youtube";
        else if (n[3].indexOf("vimeo") > -1) i = "vimeo";
        else {
          if (!(n[3].indexOf("vzaar") > -1))
            throw new Error("Video URL not supported.");
          i = "vzaar";
        }
        (n = n[6]),
          (this._videos[r] = { type: i, id: n, width: s, height: o }),
          e.attr("data-video", r),
          this.thumbnail(t, this._videos[r]);
      }),
      (s.prototype.thumbnail = function (e, i) {
        var n,
          s,
          o =
            i.width && i.height
              ? 'style="width:' + i.width + "px;height:" + i.height + 'px;"'
              : "",
          r = e.find("img"),
          a = "src",
          l = "",
          h = this._core.settings,
          c = function (t) {
            (n = h.lazyLoad
              ? '<div class="owl-video-tn ' +
                l +
                '" ' +
                a +
                '="' +
                t +
                '"></div>'
              : '<div class="owl-video-tn" style="opacity:1;background-image:url(' +
                t +
                ')"></div>'),
              e.after(n),
              e.after('<div class="owl-video-play-icon"></div>');
          };
        if (
          (e.wrap('<div class="owl-video-wrapper"' + o + "></div>"),
          this._core.settings.lazyLoad && ((a = "data-src"), (l = "owl-lazy")),
          r.length)
        )
          return c(r.attr(a)), r.remove(), !1;
        "youtube" === i.type
          ? ((s = "//img.youtube.com/vi/" + i.id + "/hqdefault.jpg"), c(s))
          : "vimeo" === i.type
          ? t.ajax({
              type: "GET",
              url: "//vimeo.com/api/v2/video/" + i.id + ".json",
              jsonp: "callback",
              dataType: "jsonp",
              success: function (t) {
                (s = t[0].thumbnail_large), c(s);
              },
            })
          : "vzaar" === i.type &&
            t.ajax({
              type: "GET",
              url: "//vzaar.com/api/videos/" + i.id + ".json",
              jsonp: "callback",
              dataType: "jsonp",
              success: function (t) {
                (s = t.framegrab_url), c(s);
              },
            });
      }),
      (s.prototype.stop = function () {
        this._core.trigger("stop", null, "video"),
          this._playing.find(".owl-video-frame").remove(),
          this._playing.removeClass("owl-video-playing"),
          (this._playing = null),
          this._core.leave("playing"),
          this._core.trigger("stopped", null, "video");
      }),
      (s.prototype.play = function (e) {
        var i,
          n = t(e.target).closest("." + this._core.settings.itemClass),
          s = this._videos[n.attr("data-video")],
          o = s.width || "100%",
          r = s.height || this._core.$stage.height();
        this._playing ||
          (this._core.enter("playing"),
          this._core.trigger("play", null, "video"),
          (n = this._core.items(this._core.relative(n.index()))),
          this._core.reset(n.index()),
          "youtube" === s.type
            ? (i =
                '<iframe width="' +
                o +
                '" height="' +
                r +
                '" src="//www.youtube.com/embed/' +
                s.id +
                "?autoplay=1&rel=0&v=" +
                s.id +
                '" frameborder="0" allowfullscreen></iframe>')
            : "vimeo" === s.type
            ? (i =
                '<iframe src="//player.vimeo.com/video/' +
                s.id +
                '?autoplay=1" width="' +
                o +
                '" height="' +
                r +
                '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>')
            : "vzaar" === s.type &&
              (i =
                '<iframe frameborder="0"height="' +
                r +
                '"width="' +
                o +
                '" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/' +
                s.id +
                '/player?autoplay=true"></iframe>'),
          t('<div class="owl-video-frame">' + i + "</div>").insertAfter(
            n.find(".owl-video")
          ),
          (this._playing = n.addClass("owl-video-playing")));
      }),
      (s.prototype.isInFullScreen = function () {
        var e =
          i.fullscreenElement ||
          i.mozFullScreenElement ||
          i.webkitFullscreenElement;
        return e && t(e).parent().hasClass("owl-video-frame");
      }),
      (s.prototype.destroy = function () {
        var t, e;
        for (t in (this._core.$element.off("click.owl.video"), this._handlers))
          this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this))
          "function" != typeof this[e] && (this[e] = null);
      }),
      (t.fn.owlCarousel.Constructor.Plugins.Video = s);
  })(window.Zepto || window.jQuery, window, document),
  (function (t, e, i, n) {
    var s = function (e) {
      (this.core = e),
        (this.core.options = t.extend({}, s.Defaults, this.core.options)),
        (this.swapping = !0),
        (this.previous = n),
        (this.next = n),
        (this.handlers = {
          "change.owl.carousel": t.proxy(function (t) {
            t.namespace &&
              "position" == t.property.name &&
              ((this.previous = this.core.current()),
              (this.next = t.property.value));
          }, this),
          "drag.owl.carousel dragged.owl.carousel translated.owl.carousel":
            t.proxy(function (t) {
              t.namespace && (this.swapping = "translated" == t.type);
            }, this),
          "translate.owl.carousel": t.proxy(function (t) {
            t.namespace &&
              this.swapping &&
              (this.core.options.animateOut || this.core.options.animateIn) &&
              this.swap();
          }, this),
        }),
        this.core.$element.on(this.handlers);
    };
    (s.Defaults = { animateOut: !1, animateIn: !1 }),
      (s.prototype.swap = function () {
        if (
          1 === this.core.settings.items &&
          t.support.animation &&
          t.support.transition
        ) {
          this.core.speed(0);
          var e,
            i = t.proxy(this.clear, this),
            n = this.core.$stage.children().eq(this.previous),
            s = this.core.$stage.children().eq(this.next),
            o = this.core.settings.animateIn,
            r = this.core.settings.animateOut;
          this.core.current() !== this.previous &&
            (r &&
              ((e =
                this.core.coordinates(this.previous) -
                this.core.coordinates(this.next)),
              n
                .one(t.support.animation.end, i)
                .css({ left: e + "px" })
                .addClass("animated owl-animated-out")
                .addClass(r)),
            o &&
              s
                .one(t.support.animation.end, i)
                .addClass("animated owl-animated-in")
                .addClass(o));
        }
      }),
      (s.prototype.clear = function (e) {
        t(e.target)
          .css({ left: "" })
          .removeClass("animated owl-animated-out owl-animated-in")
          .removeClass(this.core.settings.animateIn)
          .removeClass(this.core.settings.animateOut),
          this.core.onTransitionEnd();
      }),
      (s.prototype.destroy = function () {
        var t, e;
        for (t in this.handlers) this.core.$element.off(t, this.handlers[t]);
        for (e in Object.getOwnPropertyNames(this))
          "function" != typeof this[e] && (this[e] = null);
      }),
      (t.fn.owlCarousel.Constructor.Plugins.Animate = s);
  })(window.Zepto || window.jQuery, window, document),
  (function (t, e, i, n) {
    var s = function (e) {
      (this._core = e),
        (this._timeout = null),
        (this._paused = !1),
        (this._handlers = {
          "changed.owl.carousel": t.proxy(function (t) {
            t.namespace && "settings" === t.property.name
              ? this._core.settings.autoplay
                ? this.play()
                : this.stop()
              : t.namespace &&
                "position" === t.property.name &&
                this._core.settings.autoplay &&
                this._setAutoPlayInterval();
          }, this),
          "initialized.owl.carousel": t.proxy(function (t) {
            t.namespace && this._core.settings.autoplay && this.play();
          }, this),
          "play.owl.autoplay": t.proxy(function (t, e, i) {
            t.namespace && this.play(e, i);
          }, this),
          "stop.owl.autoplay": t.proxy(function (t) {
            t.namespace && this.stop();
          }, this),
          "mouseover.owl.autoplay": t.proxy(function () {
            this._core.settings.autoplayHoverPause &&
              this._core.is("rotating") &&
              this.pause();
          }, this),
          "mouseleave.owl.autoplay": t.proxy(function () {
            this._core.settings.autoplayHoverPause &&
              this._core.is("rotating") &&
              this.play();
          }, this),
          "touchstart.owl.core": t.proxy(function () {
            this._core.settings.autoplayHoverPause &&
              this._core.is("rotating") &&
              this.pause();
          }, this),
          "touchend.owl.core": t.proxy(function () {
            this._core.settings.autoplayHoverPause && this.play();
          }, this),
        }),
        this._core.$element.on(this._handlers),
        (this._core.options = t.extend({}, s.Defaults, this._core.options));
    };
    (s.Defaults = {
      autoplay: !1,
      autoplayTimeout: 5e3,
      autoplayHoverPause: !1,
      autoplaySpeed: !1,
    }),
      (s.prototype.play = function (t, e) {
        (this._paused = !1),
          this._core.is("rotating") ||
            (this._core.enter("rotating"), this._setAutoPlayInterval());
      }),
      (s.prototype._getNextTimeout = function (n, s) {
        return (
          this._timeout && e.clearTimeout(this._timeout),
          e.setTimeout(
            t.proxy(function () {
              this._paused ||
                this._core.is("busy") ||
                this._core.is("interacting") ||
                i.hidden ||
                this._core.next(s || this._core.settings.autoplaySpeed);
            }, this),
            n || this._core.settings.autoplayTimeout
          )
        );
      }),
      (s.prototype._setAutoPlayInterval = function () {
        this._timeout = this._getNextTimeout();
      }),
      (s.prototype.stop = function () {
        this._core.is("rotating") &&
          (e.clearTimeout(this._timeout), this._core.leave("rotating"));
      }),
      (s.prototype.pause = function () {
        this._core.is("rotating") && (this._paused = !0);
      }),
      (s.prototype.destroy = function () {
        var t, e;
        for (t in (this.stop(), this._handlers))
          this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this))
          "function" != typeof this[e] && (this[e] = null);
      }),
      (t.fn.owlCarousel.Constructor.Plugins.autoplay = s);
  })(window.Zepto || window.jQuery, window, document),
  (function (t, e, i, n) {
    "use strict";
    var s = function (e) {
      (this._core = e),
        (this._initialized = !1),
        (this._pages = []),
        (this._controls = {}),
        (this._templates = []),
        (this.$element = this._core.$element),
        (this._overrides = {
          next: this._core.next,
          prev: this._core.prev,
          to: this._core.to,
        }),
        (this._handlers = {
          "prepared.owl.carousel": t.proxy(function (e) {
            e.namespace &&
              this._core.settings.dotsData &&
              this._templates.push(
                '<div class="' +
                  this._core.settings.dotClass +
                  '">' +
                  t(e.content)
                    .find("[data-dot]")
                    .addBack("[data-dot]")
                    .attr("data-dot") +
                  "</div>"
              );
          }, this),
          "added.owl.carousel": t.proxy(function (t) {
            t.namespace &&
              this._core.settings.dotsData &&
              this._templates.splice(t.position, 0, this._templates.pop());
          }, this),
          "remove.owl.carousel": t.proxy(function (t) {
            t.namespace &&
              this._core.settings.dotsData &&
              this._templates.splice(t.position, 1);
          }, this),
          "changed.owl.carousel": t.proxy(function (t) {
            t.namespace && "position" == t.property.name && this.draw();
          }, this),
          "initialized.owl.carousel": t.proxy(function (t) {
            t.namespace &&
              !this._initialized &&
              (this._core.trigger("initialize", null, "navigation"),
              this.initialize(),
              this.update(),
              this.draw(),
              (this._initialized = !0),
              this._core.trigger("initialized", null, "navigation"));
          }, this),
          "refreshed.owl.carousel": t.proxy(function (t) {
            t.namespace &&
              this._initialized &&
              (this._core.trigger("refresh", null, "navigation"),
              this.update(),
              this.draw(),
              this._core.trigger("refreshed", null, "navigation"));
          }, this),
        }),
        (this._core.options = t.extend({}, s.Defaults, this._core.options)),
        this.$element.on(this._handlers);
    };
    (s.Defaults = {
      nav: !1,
      navText: ["prev", "next"],
      navSpeed: !1,
      navElement: "div",
      navContainer: !1,
      navContainerClass: "owl-nav",
      navClass: ["owl-prev", "owl-next"],
      slideBy: 1,
      dotClass: "owl-dot",
      dotsClass: "owl-dots",
      dots: !0,
      dotsEach: !1,
      dotsData: !1,
      dotsSpeed: !1,
      dotsContainer: !1,
    }),
      (s.prototype.initialize = function () {
        var e,
          i = this._core.settings;
        for (e in ((this._controls.$relative = (
          i.navContainer
            ? t(i.navContainer)
            : t("<div>").addClass(i.navContainerClass).appendTo(this.$element)
        ).addClass("disabled")),
        (this._controls.$previous = t("<" + i.navElement + ">")
          .addClass(i.navClass[0])
          .html(i.navText[0])
          .prependTo(this._controls.$relative)
          .on(
            "click",
            t.proxy(function (t) {
              this.prev(i.navSpeed);
            }, this)
          )),
        (this._controls.$next = t("<" + i.navElement + ">")
          .addClass(i.navClass[1])
          .html(i.navText[1])
          .appendTo(this._controls.$relative)
          .on(
            "click",
            t.proxy(function (t) {
              this.next(i.navSpeed);
            }, this)
          )),
        i.dotsData ||
          (this._templates = [
            t("<div>")
              .addClass(i.dotClass)
              .append(t("<span>"))
              .prop("outerHTML"),
          ]),
        (this._controls.$absolute = (
          i.dotsContainer
            ? t(i.dotsContainer)
            : t("<div>").addClass(i.dotsClass).appendTo(this.$element)
        ).addClass("disabled")),
        this._controls.$absolute.on(
          "click",
          "div",
          t.proxy(function (e) {
            var n = t(e.target).parent().is(this._controls.$absolute)
              ? t(e.target).index()
              : t(e.target).parent().index();
            e.preventDefault(), this.to(n, i.dotsSpeed);
          }, this)
        ),
        this._overrides))
          this._core[e] = t.proxy(this[e], this);
      }),
      (s.prototype.destroy = function () {
        var t, e, i, n;
        for (t in this._handlers) this.$element.off(t, this._handlers[t]);
        for (e in this._controls) this._controls[e].remove();
        for (n in this.overides) this._core[n] = this._overrides[n];
        for (i in Object.getOwnPropertyNames(this))
          "function" != typeof this[i] && (this[i] = null);
      }),
      (s.prototype.update = function () {
        var t,
          e,
          i = this._core.clones().length / 2,
          n = i + this._core.items().length,
          s = this._core.maximum(!0),
          o = this._core.settings,
          r = o.center || o.autoWidth || o.dotsData ? 1 : o.dotsEach || o.items;
        if (
          ("page" !== o.slideBy && (o.slideBy = Math.min(o.slideBy, o.items)),
          o.dots || "page" == o.slideBy)
        )
          for (this._pages = [], t = i, e = 0; t < n; t++) {
            if (e >= r || 0 === e) {
              if (
                (this._pages.push({
                  start: Math.min(s, t - i),
                  end: t - i + r - 1,
                }),
                Math.min(s, t - i) === s)
              )
                break;
              e = 0;
            }
            e += this._core.mergers(this._core.relative(t));
          }
      }),
      (s.prototype.draw = function () {
        var e,
          i = this._core.settings,
          n = this._core.items().length <= i.items,
          s = this._core.relative(this._core.current()),
          o = i.loop || i.rewind;
        this._controls.$relative.toggleClass("disabled", !i.nav || n),
          i.nav &&
            (this._controls.$previous.toggleClass(
              "disabled",
              !o && s <= this._core.minimum(!0)
            ),
            this._controls.$next.toggleClass(
              "disabled",
              !o && s >= this._core.maximum(!0)
            )),
          this._controls.$absolute.toggleClass("disabled", !i.dots || n),
          i.dots &&
            ((e =
              this._pages.length - this._controls.$absolute.children().length),
            i.dotsData && 0 !== e
              ? this._controls.$absolute.html(this._templates.join(""))
              : e > 0
              ? this._controls.$absolute.append(
                  new Array(e + 1).join(this._templates[0])
                )
              : e < 0 && this._controls.$absolute.children().slice(e).remove(),
            this._controls.$absolute.find(".active").removeClass("active"),
            this._controls.$absolute
              .children()
              .eq(t.inArray(this.current(), this._pages))
              .addClass("active"));
      }),
      (s.prototype.onTrigger = function (e) {
        var i = this._core.settings;
        e.page = {
          index: t.inArray(this.current(), this._pages),
          count: this._pages.length,
          size:
            i &&
            (i.center || i.autoWidth || i.dotsData ? 1 : i.dotsEach || i.items),
        };
      }),
      (s.prototype.current = function () {
        var e = this._core.relative(this._core.current());
        return t
          .grep(
            this._pages,
            t.proxy(function (t, i) {
              return t.start <= e && t.end >= e;
            }, this)
          )
          .pop();
      }),
      (s.prototype.getPosition = function (e) {
        var i,
          n,
          s = this._core.settings;
        return (
          "page" == s.slideBy
            ? ((i = t.inArray(this.current(), this._pages)),
              (n = this._pages.length),
              e ? ++i : --i,
              (i = this._pages[((i % n) + n) % n].start))
            : ((i = this._core.relative(this._core.current())),
              (n = this._core.items().length),
              e ? (i += s.slideBy) : (i -= s.slideBy)),
          i
        );
      }),
      (s.prototype.next = function (e) {
        t.proxy(this._overrides.to, this._core)(this.getPosition(!0), e);
      }),
      (s.prototype.prev = function (e) {
        t.proxy(this._overrides.to, this._core)(this.getPosition(!1), e);
      }),
      (s.prototype.to = function (e, i, n) {
        var s;
        !n && this._pages.length
          ? ((s = this._pages.length),
            t.proxy(this._overrides.to, this._core)(
              this._pages[((e % s) + s) % s].start,
              i
            ))
          : t.proxy(this._overrides.to, this._core)(e, i);
      }),
      (t.fn.owlCarousel.Constructor.Plugins.Navigation = s);
  })(window.Zepto || window.jQuery, window, document),
  (function (t, e, i, n) {
    "use strict";
    var s = function (i) {
      (this._core = i),
        (this._hashes = {}),
        (this.$element = this._core.$element),
        (this._handlers = {
          "initialized.owl.carousel": t.proxy(function (i) {
            i.namespace &&
              "URLHash" === this._core.settings.startPosition &&
              t(e).trigger("hashchange.owl.navigation");
          }, this),
          "prepared.owl.carousel": t.proxy(function (e) {
            if (e.namespace) {
              var i = t(e.content)
                .find("[data-hash]")
                .addBack("[data-hash]")
                .attr("data-hash");
              if (!i) return;
              this._hashes[i] = e.content;
            }
          }, this),
          "changed.owl.carousel": t.proxy(function (i) {
            if (i.namespace && "position" === i.property.name) {
              var n = this._core.items(
                  this._core.relative(this._core.current())
                ),
                s = t
                  .map(this._hashes, function (t, e) {
                    return t === n ? e : null;
                  })
                  .join();
              if (!s || e.location.hash.slice(1) === s) return;
              e.location.hash = s;
            }
          }, this),
        }),
        (this._core.options = t.extend({}, s.Defaults, this._core.options)),
        this.$element.on(this._handlers),
        t(e).on(
          "hashchange.owl.navigation",
          t.proxy(function (t) {
            var i = e.location.hash.substring(1),
              n = this._core.$stage.children(),
              s = this._hashes[i] && n.index(this._hashes[i]);
            void 0 !== s &&
              s !== this._core.current() &&
              this._core.to(this._core.relative(s), !1, !0);
          }, this)
        );
    };
    (s.Defaults = { URLhashListener: !1 }),
      (s.prototype.destroy = function () {
        var i, n;
        for (i in (t(e).off("hashchange.owl.navigation"), this._handlers))
          this._core.$element.off(i, this._handlers[i]);
        for (n in Object.getOwnPropertyNames(this))
          "function" != typeof this[n] && (this[n] = null);
      }),
      (t.fn.owlCarousel.Constructor.Plugins.Hash = s);
  })(window.Zepto || window.jQuery, window, document),
  (function (t, e, i, n) {
    function s(e, i) {
      var s = !1,
        o = e.charAt(0).toUpperCase() + e.slice(1);
      return (
        t.each((e + " " + a.join(o + " ") + o).split(" "), function (t, e) {
          if (r[e] !== n) return (s = !i || e), !1;
        }),
        s
      );
    }
    function o(t) {
      return s(t, !0);
    }
    var r = t("<support>").get(0).style,
      a = "Webkit Moz O ms".split(" "),
      l = {
        transition: {
          end: {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd",
            transition: "transitionend",
          },
        },
        animation: {
          end: {
            WebkitAnimation: "webkitAnimationEnd",
            MozAnimation: "animationend",
            OAnimation: "oAnimationEnd",
            animation: "animationend",
          },
        },
      };
    !!s("transition") &&
      ((t.support.transition = new String(o("transition"))),
      (t.support.transition.end = l.transition.end[t.support.transition])),
      !!s("animation") &&
        ((t.support.animation = new String(o("animation"))),
        (t.support.animation.end = l.animation.end[t.support.animation])),
      s("transform") &&
        ((t.support.transform = new String(o("transform"))),
        (t.support.transform3d = !!s("perspective")));
  })(window.Zepto || window.jQuery, window, document),
  (function (t, e, i, n) {
    "use strict";
    var s = function (e) {
      (this.owl = e),
        (this._thumbcontent = []),
        (this._identifier = 0),
        (this.owl_currentitem = this.owl.options.startPosition),
        (this.$element = this.owl.$element),
        (this._handlers = {
          "prepared.owl.carousel": t.proxy(function (e) {
            if (
              !e.namespace ||
              !this.owl.options.thumbs ||
              this.owl.options.thumbImage ||
              this.owl.options.thumbsPrerendered ||
              this.owl.options.thumbImage
            ) {
              if (
                e.namespace &&
                this.owl.options.thumbs &&
                this.owl.options.thumbImage
              ) {
                var i = t(e.content).find("img");
                this._thumbcontent.push(i);
              }
            } else void 0 !== t(e.content).find("[data-thumb]").attr("data-thumb") && this._thumbcontent.push(t(e.content).find("[data-thumb]").attr("data-thumb"));
          }, this),
          "initialized.owl.carousel": t.proxy(function (t) {
            t.namespace &&
              this.owl.options.thumbs &&
              (this.render(),
              this.listen(),
              (this._identifier = this.owl.$element.data("slider-id")),
              this.setActive());
          }, this),
          "changed.owl.carousel": t.proxy(function (t) {
            t.namespace &&
              "position" === t.property.name &&
              this.owl.options.thumbs &&
              ((this._identifier = this.owl.$element.data("slider-id")),
              this.setActive());
          }, this),
        }),
        (this.owl.options = t.extend({}, s.Defaults, this.owl.options)),
        this.owl.$element.on(this._handlers);
    };
    (s.Defaults = {
      thumbs: !0,
      thumbImage: !1,
      thumbContainerClass: "owl-thumbs",
      thumbItemClass: "owl-thumb-item",
      moveThumbsInside: !1,
    }),
      (s.prototype.listen = function () {
        var e = this.owl.options;
        e.thumbsPrerendered &&
          (this._thumbcontent._thumbcontainer = t("." + e.thumbContainerClass)),
          t(this._thumbcontent._thumbcontainer).on(
            "click",
            this._thumbcontent._thumbcontainer.children(),
            t.proxy(function (i) {
              this._identifier = t(i.target)
                .closest("." + e.thumbContainerClass)
                .data("slider-id");
              var n = t(i.target)
                .parent()
                .is(this._thumbcontent._thumbcontainer)
                ? t(i.target).index()
                : t(i.target)
                    .closest("." + e.thumbItemClass)
                    .index();
              e.thumbsPrerendered
                ? t("[data-slider-id=" + this._identifier + "]").trigger(
                    "to.owl.carousel",
                    [n, e.dotsSpeed, !0]
                  )
                : this.owl.to(n, e.dotsSpeed),
                i.preventDefault();
            }, this)
          );
      }),
      (s.prototype.render = function () {
        var e,
          i = this.owl.options;
        if (
          (i.thumbsPrerendered
            ? ((this._thumbcontent._thumbcontainer = t(
                "." + i.thumbContainerClass
              )),
              i.moveThumbsInside &&
                this._thumbcontent._thumbcontainer.appendTo(this.$element))
            : (this._thumbcontent._thumbcontainer = t("<div>")
                .addClass(i.thumbContainerClass)
                .appendTo(this.$element)),
          i.thumbImage)
        )
          for (e = 0; e < this._thumbcontent.length; ++e)
            this._thumbcontent._thumbcontainer.append(
              "<button class=" +
                i.thumbItemClass +
                '><img src="' +
                this._thumbcontent[e].attr("src") +
                '" alt="' +
                this._thumbcontent[e].attr("alt") +
                '" /></button>'
            );
        else
          for (e = 0; e < this._thumbcontent.length; ++e)
            this._thumbcontent._thumbcontainer.append(
              "<button class=" +
                i.thumbItemClass +
                ">" +
                this._thumbcontent[e] +
                "</button>"
            );
      }),
      (s.prototype.setActive = function () {
        (this.owl_currentitem =
          this.owl._current - this.owl._clones.length / 2),
          this.owl_currentitem === this.owl._items.length &&
            (this.owl_currentitem = 0);
        var e = this.owl.options,
          i = e.thumbsPrerendered
            ? t(
                "." +
                  e.thumbContainerClass +
                  '[data-slider-id="' +
                  this._identifier +
                  '"]'
              )
            : this._thumbcontent._thumbcontainer;
        i.children().filter(".active").removeClass("active"),
          i.children().eq(this.owl_currentitem).addClass("active");
      }),
      (s.prototype.destroy = function () {
        var t, e;
        for (t in this._handlers) this.owl.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this))
          "function" != typeof this[e] && (this[e] = null);
      }),
      (t.fn.owlCarousel.Constructor.Plugins.Thumbs = s);
  })(window.Zepto || window.jQuery, window, document),
  (function (t) {
    "use strict";
    t.fn.countUp = function (e) {
      var i = t.extend({ time: 2e3, delay: 10 }, e);
      return this.each(function () {
        var e = t(this),
          n = i;
        e.waypoint(
          function () {
            e.data("counterupTo") || e.data("counterupTo", e.text());
            var t =
                parseInt(e.data("counter-time")) > 0
                  ? parseInt(e.data("counter-time"))
                  : n.time,
              i =
                parseInt(e.data("counter-delay")) > 0
                  ? parseInt(e.data("counter-delay"))
                  : n.delay,
              s = t / i,
              o = e.data("counterupTo"),
              r = [o],
              a = /[0-9]+,[0-9]+/.test(o);
            o = o.replace(/,/g, "");
            for (
              var l = (/^[0-9]+$/.test(o), /^[0-9]+\.[0-9]+$/.test(o)),
                h = l ? (o.split(".")[1] || []).length : 0,
                c = s;
              c >= 1;
              c--
            ) {
              var u = parseInt(Math.round((o / s) * c));
              if ((l && (u = parseFloat((o / s) * c).toFixed(h)), a))
                for (; /(\d+)(\d{3})/.test(u.toString()); )
                  u = u.toString().replace(/(\d+)(\d{3})/, "$1,$2");
              r.unshift(u);
            }
            e.data("counterup-nums", r), e.text("0");
            e.data("counterup-func", function () {
              e.text(e.data("counterup-nums").shift()),
                e.data("counterup-nums").length
                  ? setTimeout(e.data("counterup-func"), i)
                  : (e.data("counterup-nums"),
                    e.data("counterup-nums", null),
                    e.data("counterup-func", null));
            }),
              setTimeout(e.data("counterup-func"), i);
          },
          { offset: "100%", triggerOnce: !0 }
        );
      });
    };
  })(jQuery),
  (function (t) {
    "use strict";
    "function" == typeof define && define.amd
      ? define("parollerjs", ["jquery"], t)
      : "object" == typeof module && "object" == typeof module.exports
      ? (module.exports = t(require("jquery")))
      : t(jQuery);
  })(function (t) {
    "use strict";
    var e = !1,
      i = function () {
        e = !1;
      },
      n = function (t, e) {
        return t.css({ "background-position": "center " + -e + "px" });
      },
      s = function (t, e) {
        return t.css({ "background-position": -e + "px center" });
      },
      o = function (t, e, i, n) {
        return (
          "none" !== n || (n = ""),
          t.css({
            "-webkit-transform": "translateY(" + e + "px)" + n,
            "-moz-transform": "translateY(" + e + "px)" + n,
            transform: "translate(0," + e + "px)" + n,
            transition: i,
            "will-change": "transform",
          })
        );
      },
      r = function (t, e, i, n) {
        return (
          "none" !== n || (n = ""),
          t.css({
            "-webkit-transform": "translateX(" + e + "px)" + n,
            "-moz-transform": "translateX(" + e + "px)" + n,
            transform: "translate(" + e + "px, 0)" + n,
            transition: i,
            "will-change": "transform",
          })
        );
      },
      a = function (t, e, i) {
        var n = t.data("paroller-factor") || i.factor;
        return e < 576
          ? t.data("paroller-factor-xs") || i.factorXs || n
          : e <= 768
          ? t.data("paroller-factor-sm") || i.factorSm || n
          : e <= 1024
          ? t.data("paroller-factor-md") || i.factorMd || n
          : e <= 1200
          ? t.data("paroller-factor-lg") || i.factorLg || n
          : (e <= 1920 && (t.data("paroller-factor-xl") || i.factorXl)) || n;
      };
    t.fn.paroller = function (l) {
      var h = t(window).height(),
        c = t(document).height();
      return (
        (l = t.extend(
          {
            factor: 0,
            factorXs: 0,
            factorSm: 0,
            factorMd: 0,
            factorLg: 0,
            factorXl: 0,
            transition: "transform .1s ease",
            type: "background",
            direction: "vertical",
          },
          l
        )),
        this.each(function () {
          var u = t(this),
            d = t(window).width(),
            p = u.offset().top,
            f = u.outerHeight(),
            g = u.data("paroller-type"),
            m = u.data("paroller-direction"),
            v = u.data("paroller-transition"),
            _ = u.css("transform"),
            y = v || l.transition,
            b = g || l.type,
            w = m || l.direction,
            x = 0,
            C = (function (t, e) {
              return Math.round(t * e);
            })(p, x),
            k = (function (t, e, i, n) {
              return Math.round((t - i / 2 + n) * e);
            })(p, x, h, f);
          "background" === b
            ? "vertical" === w
              ? n(u, C)
              : "horizontal" === w && s(u, C)
            : "foreground" === b &&
              ("vertical" === w
                ? o(u, k, y, _)
                : "horizontal" === w && r(u, k, y, _)),
            t(window).on("resize", function () {
              var g = t(this).scrollTop();
              (d = t(window).width()),
                (p = u.offset().top),
                (f = u.outerHeight()),
                (x = a(u, d, l)),
                (C = Math.round(p * x)),
                (k = Math.round((p - h / 2 + f) * x)),
                e || (window.requestAnimationFrame(i), (e = !0)),
                "background" === b
                  ? (u.css({ "background-position": "unset" }),
                    "vertical" === w ? n(u, C) : "horizontal" === w && s(u, C))
                  : "foreground" === b &&
                    g <= c &&
                    (u.css({ transform: "unset", transition: "unset" }),
                    "vertical" === w
                      ? o(u, k, y)
                      : "horizontal" === w && r(u, k, y));
            }),
            t(window).on("scroll", function () {
              var g = t(this).scrollTop(),
                m = t(document).scrollTop();
              (x = 0 === m ? 0 : a(u, d, l)),
                (C = Math.round((p - g) * x)),
                (k = Math.round((p - h / 2 + f - g) * x)),
                e || (window.requestAnimationFrame(i), (e = !0)),
                "background" === b
                  ? "vertical" === w
                    ? n(u, C)
                    : "horizontal" === w && s(u, C)
                  : "foreground" === b &&
                    g <= c &&
                    ("vertical" === w
                      ? o(u, k, y, _)
                      : "horizontal" === w && r(u, k, y, _));
            });
        })
      );
    };
  });
