import je from "react";
var Y = {}, cr = {
  get exports() {
    return Y;
  },
  set exports(d) {
    Y = d;
  }
}, U = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ce;
function fr() {
  if (Ce)
    return U;
  Ce = 1;
  var d = je, p = Symbol.for("react.element"), g = Symbol.for("react.fragment"), s = Object.prototype.hasOwnProperty, E = d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, S = { key: !0, ref: !0, __self: !0, __source: !0 };
  function _(b, v, R) {
    var m, T = {}, x = null, j = null;
    R !== void 0 && (x = "" + R), v.key !== void 0 && (x = "" + v.key), v.ref !== void 0 && (j = v.ref);
    for (m in v)
      s.call(v, m) && !S.hasOwnProperty(m) && (T[m] = v[m]);
    if (b && b.defaultProps)
      for (m in v = b.defaultProps, v)
        T[m] === void 0 && (T[m] = v[m]);
    return { $$typeof: p, type: b, key: x, ref: j, props: T, _owner: E.current };
  }
  return U.Fragment = g, U.jsx = _, U.jsxs = _, U;
}
var W = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xe;
function dr() {
  return xe || (xe = 1, process.env.NODE_ENV !== "production" && function() {
    var d = je, p = Symbol.for("react.element"), g = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), E = Symbol.for("react.strict_mode"), S = Symbol.for("react.profiler"), _ = Symbol.for("react.provider"), b = Symbol.for("react.context"), v = Symbol.for("react.forward_ref"), R = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), T = Symbol.for("react.memo"), x = Symbol.for("react.lazy"), j = Symbol.for("react.offscreen"), I = Symbol.iterator, J = "@@iterator";
    function z(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = I && e[I] || e[J];
      return typeof r == "function" ? r : null;
    }
    var w = d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function y(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        ke("error", e, t);
      }
    }
    function ke(e, r, t) {
      {
        var n = w.ReactDebugCurrentFrame, i = n.getStackAddendum();
        i !== "" && (r += "%s", t = t.concat([i]));
        var u = t.map(function(o) {
          return String(o);
        });
        u.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, u);
      }
    }
    var Ie = !1, Ae = !1, De = !1, Fe = !1, $e = !1, ae;
    ae = Symbol.for("react.module.reference");
    function Ue(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === s || e === S || $e || e === E || e === R || e === m || Fe || e === j || Ie || Ae || De || typeof e == "object" && e !== null && (e.$$typeof === x || e.$$typeof === T || e.$$typeof === _ || e.$$typeof === b || e.$$typeof === v || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ae || e.getModuleId !== void 0));
    }
    function We(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var i = r.displayName || r.name || "";
      return i !== "" ? t + "(" + i + ")" : t;
    }
    function oe(e) {
      return e.displayName || "Context";
    }
    function P(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case s:
          return "Fragment";
        case g:
          return "Portal";
        case S:
          return "Profiler";
        case E:
          return "StrictMode";
        case R:
          return "Suspense";
        case m:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case b:
            var r = e;
            return oe(r) + ".Consumer";
          case _:
            var t = e;
            return oe(t._context) + ".Provider";
          case v:
            return We(e, e.render, "ForwardRef");
          case T:
            var n = e.displayName || null;
            return n !== null ? n : P(e.type) || "Memo";
          case x: {
            var i = e, u = i._payload, o = i._init;
            try {
              return P(o(u));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var k = Object.assign, F = 0, ie, ue, se, le, ce, fe, de;
    function ve() {
    }
    ve.__reactDisabledLog = !0;
    function Ye() {
      {
        if (F === 0) {
          ie = console.log, ue = console.info, se = console.warn, le = console.error, ce = console.group, fe = console.groupCollapsed, de = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ve,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        F++;
      }
    }
    function Le() {
      {
        if (F--, F === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: k({}, e, {
              value: ie
            }),
            info: k({}, e, {
              value: ue
            }),
            warn: k({}, e, {
              value: se
            }),
            error: k({}, e, {
              value: le
            }),
            group: k({}, e, {
              value: ce
            }),
            groupCollapsed: k({}, e, {
              value: fe
            }),
            groupEnd: k({}, e, {
              value: de
            })
          });
        }
        F < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var G = w.ReactCurrentDispatcher, H;
    function L(e, r, t) {
      {
        if (H === void 0)
          try {
            throw Error();
          } catch (i) {
            var n = i.stack.trim().match(/\n( *(at )?)/);
            H = n && n[1] || "";
          }
        return `
` + H + e;
      }
    }
    var K = !1, N;
    {
      var Ne = typeof WeakMap == "function" ? WeakMap : Map;
      N = new Ne();
    }
    function pe(e, r) {
      if (!e || K)
        return "";
      {
        var t = N.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      K = !0;
      var i = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var u;
      u = G.current, G.current = null, Ye();
      try {
        if (r) {
          var o = function() {
            throw Error();
          };
          if (Object.defineProperty(o.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(o, []);
            } catch (C) {
              n = C;
            }
            Reflect.construct(e, [], o);
          } else {
            try {
              o.call();
            } catch (C) {
              n = C;
            }
            e.call(o.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (C) {
            n = C;
          }
          e();
        }
      } catch (C) {
        if (C && n && typeof C.stack == "string") {
          for (var a = C.stack.split(`
`), h = n.stack.split(`
`), c = a.length - 1, f = h.length - 1; c >= 1 && f >= 0 && a[c] !== h[f]; )
            f--;
          for (; c >= 1 && f >= 0; c--, f--)
            if (a[c] !== h[f]) {
              if (c !== 1 || f !== 1)
                do
                  if (c--, f--, f < 0 || a[c] !== h[f]) {
                    var O = `
` + a[c].replace(" at new ", " at ");
                    return e.displayName && O.includes("<anonymous>") && (O = O.replace("<anonymous>", e.displayName)), typeof e == "function" && N.set(e, O), O;
                  }
                while (c >= 1 && f >= 0);
              break;
            }
        }
      } finally {
        K = !1, G.current = u, Le(), Error.prepareStackTrace = i;
      }
      var D = e ? e.displayName || e.name : "", Pe = D ? L(D) : "";
      return typeof e == "function" && N.set(e, Pe), Pe;
    }
    function Ve(e, r, t) {
      return pe(e, !1);
    }
    function Be(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function V(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return pe(e, Be(e));
      if (typeof e == "string")
        return L(e);
      switch (e) {
        case R:
          return L("Suspense");
        case m:
          return L("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case v:
            return Ve(e.render);
          case T:
            return V(e.type, r, t);
          case x: {
            var n = e, i = n._payload, u = n._init;
            try {
              return V(u(i), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var B = Object.prototype.hasOwnProperty, me = {}, ge = w.ReactDebugCurrentFrame;
    function q(e) {
      if (e) {
        var r = e._owner, t = V(e.type, e._source, r ? r.type : null);
        ge.setExtraStackFrame(t);
      } else
        ge.setExtraStackFrame(null);
    }
    function qe(e, r, t, n, i) {
      {
        var u = Function.call.bind(B);
        for (var o in e)
          if (u(e, o)) {
            var a = void 0;
            try {
              if (typeof e[o] != "function") {
                var h = Error((n || "React class") + ": " + t + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw h.name = "Invariant Violation", h;
              }
              a = e[o](r, o, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (c) {
              a = c;
            }
            a && !(a instanceof Error) && (q(i), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, o, typeof a), q(null)), a instanceof Error && !(a.message in me) && (me[a.message] = !0, q(i), y("Failed %s type: %s", t, a.message), q(null));
          }
      }
    }
    var Je = Array.isArray;
    function M(e) {
      return Je(e);
    }
    function ze(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Ge(e) {
      try {
        return ye(e), !1;
      } catch {
        return !0;
      }
    }
    function ye(e) {
      return "" + e;
    }
    function he(e) {
      if (Ge(e))
        return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ze(e)), ye(e);
    }
    var $ = w.ReactCurrentOwner, He = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, be, Ee, X;
    X = {};
    function Ke(e) {
      if (B.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Me(e) {
      if (B.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Xe(e, r) {
      if (typeof e.ref == "string" && $.current && r && $.current.stateNode !== r) {
        var t = P($.current.type);
        X[t] || (y('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', P($.current.type), e.ref), X[t] = !0);
      }
    }
    function Ze(e, r) {
      {
        var t = function() {
          be || (be = !0, y("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function Qe(e, r) {
      {
        var t = function() {
          Ee || (Ee = !0, y("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var er = function(e, r, t, n, i, u, o) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: p,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: o,
        // Record the component responsible for creating this element.
        _owner: u
      };
      return a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(a, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(a, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: i
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function rr(e, r, t, n, i) {
      {
        var u, o = {}, a = null, h = null;
        t !== void 0 && (he(t), a = "" + t), Me(r) && (he(r.key), a = "" + r.key), Ke(r) && (h = r.ref, Xe(r, i));
        for (u in r)
          B.call(r, u) && !He.hasOwnProperty(u) && (o[u] = r[u]);
        if (e && e.defaultProps) {
          var c = e.defaultProps;
          for (u in c)
            o[u] === void 0 && (o[u] = c[u]);
        }
        if (a || h) {
          var f = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && Ze(o, f), h && Qe(o, f);
        }
        return er(e, a, h, i, n, $.current, o);
      }
    }
    var Z = w.ReactCurrentOwner, _e = w.ReactDebugCurrentFrame;
    function A(e) {
      if (e) {
        var r = e._owner, t = V(e.type, e._source, r ? r.type : null);
        _e.setExtraStackFrame(t);
      } else
        _e.setExtraStackFrame(null);
    }
    var Q;
    Q = !1;
    function ee(e) {
      return typeof e == "object" && e !== null && e.$$typeof === p;
    }
    function Re() {
      {
        if (Z.current) {
          var e = P(Z.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function tr(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var Te = {};
    function nr(e) {
      {
        var r = Re();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function we(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = nr(r);
        if (Te[t])
          return;
        Te[t] = !0;
        var n = "";
        e && e._owner && e._owner !== Z.current && (n = " It was passed a child from " + P(e._owner.type) + "."), A(e), y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), A(null);
      }
    }
    function Oe(e, r) {
      {
        if (typeof e != "object")
          return;
        if (M(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            ee(n) && we(n, r);
          }
        else if (ee(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var i = z(e);
          if (typeof i == "function" && i !== e.entries)
            for (var u = i.call(e), o; !(o = u.next()).done; )
              ee(o.value) && we(o.value, r);
        }
      }
    }
    function ar(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === v || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === T))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = P(r);
          qe(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !Q) {
          Q = !0;
          var i = P(r);
          y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", i || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function or(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            A(e), y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), A(null);
            break;
          }
        }
        e.ref !== null && (A(e), y("Invalid attribute `ref` supplied to `React.Fragment`."), A(null));
      }
    }
    function Se(e, r, t, n, i, u) {
      {
        var o = Ue(e);
        if (!o) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var h = tr(i);
          h ? a += h : a += Re();
          var c;
          e === null ? c = "null" : M(e) ? c = "array" : e !== void 0 && e.$$typeof === p ? (c = "<" + (P(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : c = typeof e, y("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", c, a);
        }
        var f = rr(e, r, t, i, u);
        if (f == null)
          return f;
        if (o) {
          var O = r.children;
          if (O !== void 0)
            if (n)
              if (M(O)) {
                for (var D = 0; D < O.length; D++)
                  Oe(O[D], e);
                Object.freeze && Object.freeze(O);
              } else
                y("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Oe(O, e);
        }
        return e === s ? or(f) : ar(f), f;
      }
    }
    function ir(e, r, t) {
      return Se(e, r, t, !0);
    }
    function ur(e, r, t) {
      return Se(e, r, t, !1);
    }
    var sr = ur, lr = ir;
    W.Fragment = s, W.jsx = sr, W.jsxs = lr;
  }()), W;
}
(function(d) {
  process.env.NODE_ENV === "production" ? d.exports = fr() : d.exports = dr();
})(cr);
const re = Y.Fragment, l = Y.jsx, te = Y.jsxs, ne = ({ title: d, description: p, ogType: g, ogImage: s, twImage: E, canonicalUrl: S, pathname: _, siteMetadata: b }) => /* @__PURE__ */ te(re, { children: [
  /* @__PURE__ */ l("title", { children: d }),
  /* @__PURE__ */ l("meta", { name: "robots", content: "follow, index" }),
  /* @__PURE__ */ l("meta", { name: "description", content: p }),
  /* @__PURE__ */ l("meta", { property: "og:url", content: `${b.siteUrl}${_}` }),
  /* @__PURE__ */ l("meta", { property: "og:type", content: g }),
  /* @__PURE__ */ l("meta", { property: "og:site_name", content: b.title }),
  /* @__PURE__ */ l("meta", { property: "og:description", content: p }),
  /* @__PURE__ */ l("meta", { property: "og:title", content: d }),
  s.constructor.name === "Array" ? s.map(({ url: v }) => /* @__PURE__ */ l("meta", { property: "og:image", content: v }, v)) : /* @__PURE__ */ l("meta", { property: "og:image", content: s }, s),
  /* @__PURE__ */ l("meta", { name: "twitter:card", content: "summary_large_image" }),
  /* @__PURE__ */ l("meta", { name: "twitter:site", content: b.twitter }),
  /* @__PURE__ */ l("meta", { name: "twitter:title", content: d }),
  /* @__PURE__ */ l("meta", { name: "twitter:description", content: p }),
  /* @__PURE__ */ l("meta", { name: "twitter:image", content: E }),
  /* @__PURE__ */ l(
    "link",
    {
      rel: "canonical",
      href: S || `${b.siteUrl}${_}`
    }
  )
] }), pr = ({
  authorDetails: d,
  title: p,
  summary: g,
  date: s,
  lastmod: E,
  url: S,
  images: _ = [],
  canonicalUrl: b,
  pathname: v,
  siteMetadata: R
}) => {
  const m = new Date(s).toISOString(), T = new Date(E || s).toISOString(), j = (_.length === 0 ? [R.socialBanner] : typeof _ == "string" ? [_] : _).map((w) => ({
    "@type": "ImageObject",
    url: w.includes("http") ? w : R.siteUrl + w
  }));
  let I;
  d ? I = d.map((w) => ({
    "@type": "Person",
    name: w.name
  })) : I = {
    "@type": "Person",
    name: R.author
  };
  const J = {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": S
    },
    headline: p,
    image: j,
    datePublished: m,
    dateModified: T,
    author: I,
    publisher: {
      "@type": "Organization",
      name: R.author,
      logo: {
        "@type": "ImageObject",
        url: `${R.siteUrl}${R.siteLogo}`
      }
    },
    description: g
  }, z = j[0].url;
  return /* @__PURE__ */ te(re, { children: [
    /* @__PURE__ */ l(
      ne,
      {
        title: p,
        description: g,
        ogType: "article",
        ogImage: j,
        twImage: z,
        canonicalUrl: b
      }
    ),
    s && /* @__PURE__ */ l("meta", { property: "article:published_time", content: m }),
    E && /* @__PURE__ */ l("meta", { property: "article:modified_time", content: T }),
    /* @__PURE__ */ l(
      "script",
      {
        type: "application/ld+json",
        dangerouslySetInnerHTML: {
          __html: JSON.stringify(J, null, 2)
        }
      }
    )
  ] });
}, mr = ({ title: d, description: p, siteMetadata: g }) => {
  const s = g.siteUrl + g.socialBanner, E = g.siteUrl + g.socialBanner;
  return /* @__PURE__ */ l(
    ne,
    {
      title: d,
      description: p,
      ogType: "website",
      ogImage: s,
      twImage: E
    }
  );
}, gr = ({ title: d, description: p, pathname: g, siteMetadata: s }) => {
  const E = s.siteUrl + s.socialBanner, S = s.siteUrl + s.socialBanner;
  return /* @__PURE__ */ te(re, { children: [
    /* @__PURE__ */ l(
      ne,
      {
        title: d,
        description: p,
        ogType: "website",
        ogImage: E,
        twImage: S
      }
    ),
    /* @__PURE__ */ l(
      "link",
      {
        rel: "alternate",
        type: "application/rss+xml",
        title: `${p} - RSS feed`,
        href: `${s.siteUrl}${g}/feed.xml`
      }
    )
  ] });
};
export {
  pr as BlogSEO,
  ne as CommonSEO,
  mr as PageSEO,
  gr as TagSEO
};
