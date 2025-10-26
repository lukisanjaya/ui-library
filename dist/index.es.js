import * as a from "react";
import Xt, { forwardRef as ot, createElement as Re, useState as ue, useRef as Kt, useEffect as st, useCallback as We } from "react";
import { createPortal as nt } from "react-dom";
var xe = { exports: {} }, ie = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ye;
function Zt() {
  if (Ye) return ie;
  Ye = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function r(s, n, l) {
    var i = null;
    if (l !== void 0 && (i = "" + l), n.key !== void 0 && (i = "" + n.key), "key" in n) {
      l = {};
      for (var u in n)
        u !== "key" && (l[u] = n[u]);
    } else l = n;
    return n = l.ref, {
      $$typeof: e,
      type: s,
      key: i,
      ref: n !== void 0 ? n : null,
      props: l
    };
  }
  return ie.Fragment = t, ie.jsx = r, ie.jsxs = r, ie;
}
var ce = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ue;
function Qt() {
  return Ue || (Ue = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(d) {
      if (d == null) return null;
      if (typeof d == "function")
        return d.$$typeof === pe ? null : d.displayName || d.name || null;
      if (typeof d == "string") return d;
      switch (d) {
        case A:
          return "Fragment";
        case Z:
          return "Profiler";
        case I:
          return "StrictMode";
        case z:
          return "Suspense";
        case J:
          return "SuspenseList";
        case fe:
          return "Activity";
      }
      if (typeof d == "object")
        switch (typeof d.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), d.$$typeof) {
          case w:
            return "Portal";
          case G:
            return d.displayName || "Context";
          case q:
            return (d._context.displayName || "Context") + ".Consumer";
          case $:
            var N = d.render;
            return d = d.displayName, d || (d = N.displayName || N.name || "", d = d !== "" ? "ForwardRef(" + d + ")" : "ForwardRef"), d;
          case y:
            return N = d.displayName || null, N !== null ? N : e(d.type) || "Memo";
          case O:
            N = d._payload, d = d._init;
            try {
              return e(d(N));
            } catch {
            }
        }
      return null;
    }
    function t(d) {
      return "" + d;
    }
    function r(d) {
      try {
        t(d);
        var N = !1;
      } catch {
        N = !0;
      }
      if (N) {
        N = console;
        var j = N.error, T = typeof Symbol == "function" && Symbol.toStringTag && d[Symbol.toStringTag] || d.constructor.name || "Object";
        return j.call(
          N,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          T
        ), t(d);
      }
    }
    function s(d) {
      if (d === A) return "<>";
      if (typeof d == "object" && d !== null && d.$$typeof === O)
        return "<...>";
      try {
        var N = e(d);
        return N ? "<" + N + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function n() {
      var d = B.A;
      return d === null ? null : d.getOwner();
    }
    function l() {
      return Error("react-stack-top-frame");
    }
    function i(d) {
      if (se.call(d, "key")) {
        var N = Object.getOwnPropertyDescriptor(d, "key").get;
        if (N && N.isReactWarning) return !1;
      }
      return d.key !== void 0;
    }
    function u(d, N) {
      function j() {
        _ || (_ = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          N
        ));
      }
      j.isReactWarning = !0, Object.defineProperty(d, "key", {
        get: j,
        configurable: !0
      });
    }
    function m() {
      var d = e(this.type);
      return D[d] || (D[d] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), d = this.props.ref, d !== void 0 ? d : null;
    }
    function f(d, N, j, T, L, Q) {
      var C = j.ref;
      return d = {
        $$typeof: v,
        type: d,
        key: N,
        props: j,
        _owner: T
      }, (C !== void 0 ? C : null) !== null ? Object.defineProperty(d, "ref", {
        enumerable: !1,
        get: m
      }) : Object.defineProperty(d, "ref", { enumerable: !1, value: null }), d._store = {}, Object.defineProperty(d._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(d, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(d, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: L
      }), Object.defineProperty(d, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: Q
      }), Object.freeze && (Object.freeze(d.props), Object.freeze(d)), d;
    }
    function b(d, N, j, T, L, Q) {
      var C = N.children;
      if (C !== void 0)
        if (T)
          if (ne(C)) {
            for (T = 0; T < C.length; T++)
              R(C[T]);
            Object.freeze && Object.freeze(C);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else R(C);
      if (se.call(N, "key")) {
        C = e(d);
        var V = Object.keys(N).filter(function(ee) {
          return ee !== "key";
        });
        T = 0 < V.length ? "{key: someKey, " + V.join(": ..., ") + ": ...}" : "{key: someKey}", le[C + T] || (V = 0 < V.length ? "{" + V.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          T,
          C,
          V,
          C
        ), le[C + T] = !0);
      }
      if (C = null, j !== void 0 && (r(j), C = "" + j), i(N) && (r(N.key), C = "" + N.key), "key" in N) {
        j = {};
        for (var H in N)
          H !== "key" && (j[H] = N[H]);
      } else j = N;
      return C && u(
        j,
        typeof d == "function" ? d.displayName || d.name || "Unknown" : d
      ), f(
        d,
        C,
        j,
        n(),
        L,
        Q
      );
    }
    function R(d) {
      S(d) ? d._store && (d._store.validated = 1) : typeof d == "object" && d !== null && d.$$typeof === O && (d._payload.status === "fulfilled" ? S(d._payload.value) && d._payload.value._store && (d._payload.value._store.validated = 1) : d._store && (d._store.validated = 1));
    }
    function S(d) {
      return typeof d == "object" && d !== null && d.$$typeof === v;
    }
    var p = Xt, v = Symbol.for("react.transitional.element"), w = Symbol.for("react.portal"), A = Symbol.for("react.fragment"), I = Symbol.for("react.strict_mode"), Z = Symbol.for("react.profiler"), q = Symbol.for("react.consumer"), G = Symbol.for("react.context"), $ = Symbol.for("react.forward_ref"), z = Symbol.for("react.suspense"), J = Symbol.for("react.suspense_list"), y = Symbol.for("react.memo"), O = Symbol.for("react.lazy"), fe = Symbol.for("react.activity"), pe = Symbol.for("react.client.reference"), B = p.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, se = Object.prototype.hasOwnProperty, ne = Array.isArray, M = console.createTask ? console.createTask : function() {
      return null;
    };
    p = {
      react_stack_bottom_frame: function(d) {
        return d();
      }
    };
    var _, D = {}, h = p.react_stack_bottom_frame.bind(
      p,
      l
    )(), ae = M(s(l)), le = {};
    ce.Fragment = A, ce.jsx = function(d, N, j) {
      var T = 1e4 > B.recentlyCreatedOwnerStacks++;
      return b(
        d,
        N,
        j,
        !1,
        T ? Error("react-stack-top-frame") : h,
        T ? M(s(d)) : ae
      );
    }, ce.jsxs = function(d, N, j) {
      var T = 1e4 > B.recentlyCreatedOwnerStacks++;
      return b(
        d,
        N,
        j,
        !0,
        T ? Error("react-stack-top-frame") : h,
        T ? M(s(d)) : ae
      );
    };
  })()), ce;
}
var qe;
function er() {
  return qe || (qe = 1, process.env.NODE_ENV === "production" ? xe.exports = Zt() : xe.exports = Qt()), xe.exports;
}
var o = er();
function Je(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function tr(...e) {
  return (t) => {
    let r = !1;
    const s = e.map((n) => {
      const l = Je(n, t);
      return !r && typeof l == "function" && (r = !0), l;
    });
    if (r)
      return () => {
        for (let n = 0; n < s.length; n++) {
          const l = s[n];
          typeof l == "function" ? l() : Je(e[n], null);
        }
      };
  };
}
// @__NO_SIDE_EFFECTS__
function rr(e) {
  const t = /* @__PURE__ */ or(e), r = a.forwardRef((s, n) => {
    const { children: l, ...i } = s, u = a.Children.toArray(l), m = u.find(nr);
    if (m) {
      const f = m.props.children, b = u.map((R) => R === m ? a.Children.count(f) > 1 ? a.Children.only(null) : a.isValidElement(f) ? f.props.children : null : R);
      return /* @__PURE__ */ o.jsx(t, { ...i, ref: n, children: a.isValidElement(f) ? a.cloneElement(f, void 0, b) : null });
    }
    return /* @__PURE__ */ o.jsx(t, { ...i, ref: n, children: l });
  });
  return r.displayName = `${e}.Slot`, r;
}
var at = /* @__PURE__ */ rr("Slot");
// @__NO_SIDE_EFFECTS__
function or(e) {
  const t = a.forwardRef((r, s) => {
    const { children: n, ...l } = r;
    if (a.isValidElement(n)) {
      const i = lr(n), u = ar(l, n.props);
      return n.type !== a.Fragment && (u.ref = s ? tr(s, i) : i), a.cloneElement(n, u);
    }
    return a.Children.count(n) > 1 ? a.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var sr = Symbol("radix.slottable");
function nr(e) {
  return a.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === sr;
}
function ar(e, t) {
  const r = { ...t };
  for (const s in t) {
    const n = e[s], l = t[s];
    /^on[A-Z]/.test(s) ? n && l ? r[s] = (...u) => {
      const m = l(...u);
      return n(...u), m;
    } : n && (r[s] = n) : s === "style" ? r[s] = { ...n, ...l } : s === "className" && (r[s] = [n, l].filter(Boolean).join(" "));
  }
  return { ...e, ...r };
}
function lr(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, r = t && "isReactWarning" in t && t.isReactWarning;
  return r ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
}
function lt(e) {
  var t, r, s = "";
  if (typeof e == "string" || typeof e == "number") s += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var n = e.length;
    for (t = 0; t < n; t++) e[t] && (r = lt(e[t])) && (s && (s += " "), s += r);
  } else for (r in e) e[r] && (s && (s += " "), s += r);
  return s;
}
function it() {
  for (var e, t, r = 0, s = "", n = arguments.length; r < n; r++) (e = arguments[r]) && (t = lt(e)) && (s && (s += " "), s += t);
  return s;
}
const Xe = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, Ke = it, U = (e, t) => (r) => {
  var s;
  if (t?.variants == null) return Ke(e, r?.class, r?.className);
  const { variants: n, defaultVariants: l } = t, i = Object.keys(n).map((f) => {
    const b = r?.[f], R = l?.[f];
    if (b === null) return null;
    const S = Xe(b) || Xe(R);
    return n[f][S];
  }), u = r && Object.entries(r).reduce((f, b) => {
    let [R, S] = b;
    return S === void 0 || (f[R] = S), f;
  }, {}), m = t == null || (s = t.compoundVariants) === null || s === void 0 ? void 0 : s.reduce((f, b) => {
    let { class: R, className: S, ...p } = b;
    return Object.entries(p).every((v) => {
      let [w, A] = v;
      return Array.isArray(A) ? A.includes({
        ...l,
        ...u
      }[w]) : {
        ...l,
        ...u
      }[w] === A;
    }) ? [
      ...f,
      R,
      S
    ] : f;
  }, []);
  return Ke(e, i, m, r?.class, r?.className);
}, Ee = "-", ir = (e) => {
  const t = dr(e), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: s
  } = e;
  return {
    getClassGroupId: (i) => {
      const u = i.split(Ee);
      return u[0] === "" && u.length !== 1 && u.shift(), ct(u, t) || cr(i);
    },
    getConflictingClassGroupIds: (i, u) => {
      const m = r[i] || [];
      return u && s[i] ? [...m, ...s[i]] : m;
    }
  };
}, ct = (e, t) => {
  if (e.length === 0)
    return t.classGroupId;
  const r = e[0], s = t.nextPart.get(r), n = s ? ct(e.slice(1), s) : void 0;
  if (n)
    return n;
  if (t.validators.length === 0)
    return;
  const l = e.join(Ee);
  return t.validators.find(({
    validator: i
  }) => i(l))?.classGroupId;
}, Ze = /^\[(.+)\]$/, cr = (e) => {
  if (Ze.test(e)) {
    const t = Ze.exec(e)[1], r = t?.substring(0, t.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}, dr = (e) => {
  const {
    theme: t,
    classGroups: r
  } = e, s = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const n in r)
    Te(r[n], s, n, t);
  return s;
}, Te = (e, t, r, s) => {
  e.forEach((n) => {
    if (typeof n == "string") {
      const l = n === "" ? t : Qe(t, n);
      l.classGroupId = r;
      return;
    }
    if (typeof n == "function") {
      if (ur(n)) {
        Te(n(s), t, r, s);
        return;
      }
      t.validators.push({
        validator: n,
        classGroupId: r
      });
      return;
    }
    Object.entries(n).forEach(([l, i]) => {
      Te(i, Qe(t, l), r, s);
    });
  });
}, Qe = (e, t) => {
  let r = e;
  return t.split(Ee).forEach((s) => {
    r.nextPart.has(s) || r.nextPart.set(s, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(s);
  }), r;
}, ur = (e) => e.isThemeGetter, mr = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, r = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map();
  const n = (l, i) => {
    r.set(l, i), t++, t > e && (t = 0, s = r, r = /* @__PURE__ */ new Map());
  };
  return {
    get(l) {
      let i = r.get(l);
      if (i !== void 0)
        return i;
      if ((i = s.get(l)) !== void 0)
        return n(l, i), i;
    },
    set(l, i) {
      r.has(l) ? r.set(l, i) : n(l, i);
    }
  };
}, Se = "!", Ae = ":", fr = Ae.length, pr = (e) => {
  const {
    prefix: t,
    experimentalParseClassName: r
  } = e;
  let s = (n) => {
    const l = [];
    let i = 0, u = 0, m = 0, f;
    for (let v = 0; v < n.length; v++) {
      let w = n[v];
      if (i === 0 && u === 0) {
        if (w === Ae) {
          l.push(n.slice(m, v)), m = v + fr;
          continue;
        }
        if (w === "/") {
          f = v;
          continue;
        }
      }
      w === "[" ? i++ : w === "]" ? i-- : w === "(" ? u++ : w === ")" && u--;
    }
    const b = l.length === 0 ? n : n.substring(m), R = gr(b), S = R !== b, p = f && f > m ? f - m : void 0;
    return {
      modifiers: l,
      hasImportantModifier: S,
      baseClassName: R,
      maybePostfixModifierPosition: p
    };
  };
  if (t) {
    const n = t + Ae, l = s;
    s = (i) => i.startsWith(n) ? l(i.substring(n.length)) : {
      isExternal: !0,
      modifiers: [],
      hasImportantModifier: !1,
      baseClassName: i,
      maybePostfixModifierPosition: void 0
    };
  }
  if (r) {
    const n = s;
    s = (l) => r({
      className: l,
      parseClassName: n
    });
  }
  return s;
}, gr = (e) => e.endsWith(Se) ? e.substring(0, e.length - 1) : e.startsWith(Se) ? e.substring(1) : e, xr = (e) => {
  const t = Object.fromEntries(e.orderSensitiveModifiers.map((s) => [s, !0]));
  return (s) => {
    if (s.length <= 1)
      return s;
    const n = [];
    let l = [];
    return s.forEach((i) => {
      i[0] === "[" || t[i] ? (n.push(...l.sort(), i), l = []) : l.push(i);
    }), n.push(...l.sort()), n;
  };
}, br = (e) => ({
  cache: mr(e.cacheSize),
  parseClassName: pr(e),
  sortModifiers: xr(e),
  ...ir(e)
}), hr = /\s+/, vr = (e, t) => {
  const {
    parseClassName: r,
    getClassGroupId: s,
    getConflictingClassGroupIds: n,
    sortModifiers: l
  } = t, i = [], u = e.trim().split(hr);
  let m = "";
  for (let f = u.length - 1; f >= 0; f -= 1) {
    const b = u[f], {
      isExternal: R,
      modifiers: S,
      hasImportantModifier: p,
      baseClassName: v,
      maybePostfixModifierPosition: w
    } = r(b);
    if (R) {
      m = b + (m.length > 0 ? " " + m : m);
      continue;
    }
    let A = !!w, I = s(A ? v.substring(0, w) : v);
    if (!I) {
      if (!A) {
        m = b + (m.length > 0 ? " " + m : m);
        continue;
      }
      if (I = s(v), !I) {
        m = b + (m.length > 0 ? " " + m : m);
        continue;
      }
      A = !1;
    }
    const Z = l(S).join(":"), q = p ? Z + Se : Z, G = q + I;
    if (i.includes(G))
      continue;
    i.push(G);
    const $ = n(I, A);
    for (let z = 0; z < $.length; ++z) {
      const J = $[z];
      i.push(q + J);
    }
    m = b + (m.length > 0 ? " " + m : m);
  }
  return m;
};
function yr() {
  let e = 0, t, r, s = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (r = dt(t)) && (s && (s += " "), s += r);
  return s;
}
const dt = (e) => {
  if (typeof e == "string")
    return e;
  let t, r = "";
  for (let s = 0; s < e.length; s++)
    e[s] && (t = dt(e[s])) && (r && (r += " "), r += t);
  return r;
};
function wr(e, ...t) {
  let r, s, n, l = i;
  function i(m) {
    const f = t.reduce((b, R) => R(b), e());
    return r = br(f), s = r.cache.get, n = r.cache.set, l = u, u(m);
  }
  function u(m) {
    const f = s(m);
    if (f)
      return f;
    const b = vr(m, r);
    return n(m, b), b;
  }
  return function() {
    return l(yr.apply(null, arguments));
  };
}
const P = (e) => {
  const t = (r) => r[e] || [];
  return t.isThemeGetter = !0, t;
}, ut = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, mt = /^\((?:(\w[\w-]*):)?(.+)\)$/i, Nr = /^\d+\/\d+$/, kr = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, jr = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Cr = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, Rr = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Tr = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, te = (e) => Nr.test(e), k = (e) => !!e && !Number.isNaN(Number(e)), W = (e) => !!e && Number.isInteger(Number(e)), je = (e) => e.endsWith("%") && k(e.slice(0, -1)), F = (e) => kr.test(e), Sr = () => !0, Ar = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  jr.test(e) && !Cr.test(e)
), ft = () => !1, Pr = (e) => Rr.test(e), Er = (e) => Tr.test(e), Or = (e) => !g(e) && !x(e), _r = (e) => re(e, xt, ft), g = (e) => ut.test(e), X = (e) => re(e, bt, Ar), Ce = (e) => re(e, Lr, k), et = (e) => re(e, pt, ft), Mr = (e) => re(e, gt, Er), be = (e) => re(e, ht, Pr), x = (e) => mt.test(e), de = (e) => oe(e, bt), Dr = (e) => oe(e, Vr), tt = (e) => oe(e, pt), Ir = (e) => oe(e, xt), zr = (e) => oe(e, gt), he = (e) => oe(e, ht, !0), re = (e, t, r) => {
  const s = ut.exec(e);
  return s ? s[1] ? t(s[1]) : r(s[2]) : !1;
}, oe = (e, t, r = !1) => {
  const s = mt.exec(e);
  return s ? s[1] ? t(s[1]) : r : !1;
}, pt = (e) => e === "position" || e === "percentage", gt = (e) => e === "image" || e === "url", xt = (e) => e === "length" || e === "size" || e === "bg-size", bt = (e) => e === "length", Lr = (e) => e === "number", Vr = (e) => e === "family-name", ht = (e) => e === "shadow", Fr = () => {
  const e = P("color"), t = P("font"), r = P("text"), s = P("font-weight"), n = P("tracking"), l = P("leading"), i = P("breakpoint"), u = P("container"), m = P("spacing"), f = P("radius"), b = P("shadow"), R = P("inset-shadow"), S = P("text-shadow"), p = P("drop-shadow"), v = P("blur"), w = P("perspective"), A = P("aspect"), I = P("ease"), Z = P("animate"), q = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], G = () => [
    "center",
    "top",
    "bottom",
    "left",
    "right",
    "top-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-top",
    "top-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-top",
    "bottom-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-bottom",
    "bottom-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-bottom"
  ], $ = () => [...G(), x, g], z = () => ["auto", "hidden", "clip", "visible", "scroll"], J = () => ["auto", "contain", "none"], y = () => [x, g, m], O = () => [te, "full", "auto", ...y()], fe = () => [W, "none", "subgrid", x, g], pe = () => ["auto", {
    span: ["full", W, x, g]
  }, W, x, g], B = () => [W, "auto", x, g], se = () => ["auto", "min", "max", "fr", x, g], ne = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], M = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], _ = () => ["auto", ...y()], D = () => [te, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...y()], h = () => [e, x, g], ae = () => [...G(), tt, et, {
    position: [x, g]
  }], le = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], d = () => ["auto", "cover", "contain", Ir, _r, {
    size: [x, g]
  }], N = () => [je, de, X], j = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    f,
    x,
    g
  ], T = () => ["", k, de, X], L = () => ["solid", "dashed", "dotted", "double"], Q = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], C = () => [k, je, tt, et], V = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    v,
    x,
    g
  ], H = () => ["none", k, x, g], ee = () => ["none", k, x, g], ke = () => [k, x, g], ge = () => [te, "full", ...y()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [F],
      breakpoint: [F],
      color: [Sr],
      container: [F],
      "drop-shadow": [F],
      ease: ["in", "out", "in-out"],
      font: [Or],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [F],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [F],
      shadow: [F],
      spacing: ["px", k],
      text: [F],
      "text-shadow": [F],
      tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
    },
    classGroups: {
      // --------------
      // --- Layout ---
      // --------------
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", te, g, x, A]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       * @deprecated since Tailwind CSS v4.0.0
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [k, g, x, u]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": q()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": q()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Screen Reader Only
       * @see https://tailwindcss.com/docs/display#screen-reader-only
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: $()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: z()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": z()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": z()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: J()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": J()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": J()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: O()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": O()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": O()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: O()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: O()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: O()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: O()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: O()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: O()
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: [W, "auto", x, g]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [te, "full", "auto", u, ...y()]
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["nowrap", "wrap", "wrap-reverse"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: [k, te, "auto", "initial", "none", g]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", k, x, g]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", k, x, g]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [W, "first", "last", "none", x, g]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": fe()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: pe()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": B()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": B()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": fe()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: pe()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": B()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": B()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": se()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": se()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: y()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": y()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": y()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...ne(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...M(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...M()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...ne()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...M(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...M(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": ne()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...M(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...M()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: y()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: y()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: y()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: y()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: y()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: y()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: y()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: y()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: y()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: _()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: _()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: _()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: _()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: _()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: _()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: _()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: _()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: _()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": y()
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y": [{
        "space-y": y()
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y-reverse": ["space-y-reverse"],
      // --------------
      // --- Sizing ---
      // --------------
      /**
       * Size
       * @see https://tailwindcss.com/docs/width#setting-both-width-and-height
       */
      size: [{
        size: D()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [u, "screen", ...D()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          u,
          "screen",
          /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "none",
          ...D()
        ]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [
          u,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [i]
          },
          ...D()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...D()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...D()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...D()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", r, de, X]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: [s, x, Ce]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", je, g]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Dr, g, t]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: [n, x, g]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [k, "none", x, Ce]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          l,
          ...y()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", x, g]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["disc", "decimal", "none", x, g]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://v3.tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: h()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: h()
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...L(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [k, "from-font", "auto", x, X]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: h()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [k, "auto", x, g]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: y()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", x, g]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Overflow Wrap
       * @see https://tailwindcss.com/docs/overflow-wrap
       */
      wrap: [{
        wrap: ["break-word", "anywhere", "normal"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", x, g]
      }],
      // -------------------
      // --- Backgrounds ---
      // -------------------
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: ae()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: le()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: d()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, W, x, g],
          radial: ["", x, g],
          conic: [W, x, g]
        }, zr, Mr]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: h()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: N()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: N()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: N()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: h()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: h()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: h()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: j()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": j()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": j()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": j()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": j()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": j()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": j()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": j()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": j()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": j()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": j()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": j()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": j()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": j()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": j()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: T()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": T()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": T()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": T()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": T()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": T()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": T()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": T()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": T()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": T()
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y": [{
        "divide-y": T()
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...L(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...L(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: h()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": h()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": h()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": h()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": h()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": h()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": h()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": h()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": h()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: h()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...L(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [k, x, g]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", k, de, X]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: h()
      }],
      // ---------------
      // --- Effects ---
      // ---------------
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          b,
          he,
          be
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: h()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", R, he, be]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": h()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: T()
      }],
      /**
       * Ring Width Inset
       * @see https://v3.tailwindcss.com/docs/ring-width#inset-rings
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-ring-color
       */
      "ring-color": [{
        ring: h()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [k, X]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": h()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": T()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": h()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", S, he, be]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": h()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [k, x, g]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...Q(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": Q()
      }],
      /**
       * Mask Clip
       * @see https://tailwindcss.com/docs/mask-clip
       */
      "mask-clip": [{
        "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
      }, "mask-no-clip"],
      /**
       * Mask Composite
       * @see https://tailwindcss.com/docs/mask-composite
       */
      "mask-composite": [{
        mask: ["add", "subtract", "intersect", "exclude"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image-linear-pos": [{
        "mask-linear": [k]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": C()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": C()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": h()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": h()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": C()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": C()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": h()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": h()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": C()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": C()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": h()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": h()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": C()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": C()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": h()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": h()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": C()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": C()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": h()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": h()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": C()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": C()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": h()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": h()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": C()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": C()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": h()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": h()
      }],
      "mask-image-radial": [{
        "mask-radial": [x, g]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": C()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": C()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": h()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": h()
      }],
      "mask-image-radial-shape": [{
        "mask-radial": ["circle", "ellipse"]
      }],
      "mask-image-radial-size": [{
        "mask-radial": [{
          closest: ["side", "corner"],
          farthest: ["side", "corner"]
        }]
      }],
      "mask-image-radial-pos": [{
        "mask-radial-at": G()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [k]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": C()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": C()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": h()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": h()
      }],
      /**
       * Mask Mode
       * @see https://tailwindcss.com/docs/mask-mode
       */
      "mask-mode": [{
        mask: ["alpha", "luminance", "match"]
      }],
      /**
       * Mask Origin
       * @see https://tailwindcss.com/docs/mask-origin
       */
      "mask-origin": [{
        "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
      }],
      /**
       * Mask Position
       * @see https://tailwindcss.com/docs/mask-position
       */
      "mask-position": [{
        mask: ae()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: le()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: d()
      }],
      /**
       * Mask Type
       * @see https://tailwindcss.com/docs/mask-type
       */
      "mask-type": [{
        "mask-type": ["alpha", "luminance"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image": [{
        mask: ["none", x, g]
      }],
      // ---------------
      // --- Filters ---
      // ---------------
      /**
       * Filter
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          x,
          g
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: V()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [k, x, g]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [k, x, g]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          p,
          he,
          be
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": h()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", k, x, g]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [k, x, g]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", k, x, g]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [k, x, g]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", k, x, g]
      }],
      /**
       * Backdrop Filter
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          x,
          g
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": V()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [k, x, g]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [k, x, g]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", k, x, g]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [k, x, g]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", k, x, g]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [k, x, g]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [k, x, g]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", k, x, g]
      }],
      // --------------
      // --- Tables ---
      // --------------
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": y()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": y()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": y()
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // ---------------------------------
      // --- Transitions and Animation ---
      // ---------------------------------
      /**
       * Transition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", x, g]
      }],
      /**
       * Transition Behavior
       * @see https://tailwindcss.com/docs/transition-behavior
       */
      "transition-behavior": [{
        transition: ["normal", "discrete"]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: [k, "initial", x, g]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", I, x, g]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [k, x, g]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", Z, x, g]
      }],
      // ------------------
      // --- Transforms ---
      // ------------------
      /**
       * Backface Visibility
       * @see https://tailwindcss.com/docs/backface-visibility
       */
      backface: [{
        backface: ["hidden", "visible"]
      }],
      /**
       * Perspective
       * @see https://tailwindcss.com/docs/perspective
       */
      perspective: [{
        perspective: [w, x, g]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": $()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: H()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": H()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": H()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": H()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: ee()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": ee()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": ee()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": ee()
      }],
      /**
       * Scale 3D
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-3d": ["scale-3d"],
      /**
       * Skew
       * @see https://tailwindcss.com/docs/skew
       */
      skew: [{
        skew: ke()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": ke()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": ke()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [x, g, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: $()
      }],
      /**
       * Transform Style
       * @see https://tailwindcss.com/docs/transform-style
       */
      "transform-style": [{
        transform: ["3d", "flat"]
      }],
      /**
       * Translate
       * @see https://tailwindcss.com/docs/translate
       */
      translate: [{
        translate: ge()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": ge()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": ge()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": ge()
      }],
      /**
       * Translate None
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-none": ["translate-none"],
      // ---------------------
      // --- Interactivity ---
      // ---------------------
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: h()
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: h()
      }],
      /**
       * Color Scheme
       * @see https://tailwindcss.com/docs/color-scheme
       */
      "color-scheme": [{
        scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", x, g]
      }],
      /**
       * Field Sizing
       * @see https://tailwindcss.com/docs/field-sizing
       */
      "field-sizing": [{
        "field-sizing": ["fixed", "content"]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["auto", "none"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "", "y", "x"]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": y()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": y()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": y()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": y()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": y()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": y()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": y()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": y()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": y()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": y()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": y()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": y()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": y()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": y()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": y()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": y()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": y()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": y()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", x, g]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...h()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [k, de, X, Ce]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...h()]
      }],
      // ---------------------
      // --- Accessibility ---
      // ---------------------
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      translate: ["translate-x", "translate-y", "translate-none"],
      "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    },
    orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
  };
}, Gr = /* @__PURE__ */ wr(Fr);
function c(...e) {
  return Gr(it(e));
}
const K = U(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), Y = a.forwardRef(
  ({ className: e, variant: t, size: r, asChild: s = !1, ...n }, l) => {
    const i = s ? at : "button";
    return /* @__PURE__ */ o.jsx(
      i,
      {
        className: c(K({ variant: t, size: r, className: e })),
        ref: l,
        ...n
      }
    );
  }
);
Y.displayName = "Button";
const $r = a.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ o.jsx(
  "div",
  {
    ref: r,
    className: c(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      e
    ),
    ...t
  }
));
$r.displayName = "Card";
const Br = a.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ o.jsx(
  "div",
  {
    ref: r,
    className: c("flex flex-col space-y-1.5 p-6", e),
    ...t
  }
));
Br.displayName = "CardHeader";
const Hr = a.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ o.jsx(
  "h3",
  {
    ref: r,
    className: c(
      "text-2xl font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
Hr.displayName = "CardTitle";
const Wr = a.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ o.jsx("div", { ref: r, className: c("p-6 pt-0", e), ...t }));
Wr.displayName = "CardContent";
const Oe = a.forwardRef(
  ({ className: e, type: t, ...r }, s) => /* @__PURE__ */ o.jsx(
    "input",
    {
      type: t,
      className: c(
        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ref: s,
      ...r
    }
  )
);
Oe.displayName = "Input";
const Nn = ({ isOpen: e, onClose: t, children: r, className: s }) => e ? /* @__PURE__ */ o.jsxs("div", { className: "fixed inset-0 z-50 flex items-center justify-center", children: [
  /* @__PURE__ */ o.jsx(
    "div",
    {
      className: "fixed inset-0 bg-black/50",
      onClick: t
    }
  ),
  /* @__PURE__ */ o.jsx(
    "div",
    {
      className: c(
        "relative z-10 w-full max-w-md rounded-lg bg-background p-6 shadow-lg",
        s
      ),
      children: r
    }
  )
] }) : null, kn = ({ children: e, className: t }) => /* @__PURE__ */ o.jsx("div", { className: c("mb-4", t), children: e }), jn = ({ children: e, className: t }) => /* @__PURE__ */ o.jsx("h2", { className: c("text-lg font-semibold", t), children: e }), Cn = ({ children: e, className: t }) => /* @__PURE__ */ o.jsx("div", { className: c("mb-4", t), children: e }), Rn = ({ children: e, className: t }) => /* @__PURE__ */ o.jsx("div", { className: c("flex justify-end gap-2", t), children: e }), vt = a.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ o.jsx("div", { className: "relative w-full overflow-auto", children: /* @__PURE__ */ o.jsx(
  "table",
  {
    ref: r,
    className: c("w-full caption-bottom text-sm", e),
    ...t
  }
) }));
vt.displayName = "Table";
const yt = a.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ o.jsx("thead", { ref: r, className: c("[&_tr]:border-b", e), ...t }));
yt.displayName = "TableHeader";
const wt = a.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ o.jsx(
  "tbody",
  {
    ref: r,
    className: c("[&_tr:last-child]:border-0", e),
    ...t
  }
));
wt.displayName = "TableBody";
const ve = a.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ o.jsx(
  "tr",
  {
    ref: r,
    className: c(
      "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
      e
    ),
    ...t
  }
));
ve.displayName = "TableRow";
const Nt = a.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ o.jsx(
  "th",
  {
    ref: r,
    className: c(
      "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
      e
    ),
    ...t
  }
));
Nt.displayName = "TableHead";
const Pe = a.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ o.jsx(
  "td",
  {
    ref: r,
    className: c("p-4 align-middle [&:has([role=checkbox])]:pr-0", e),
    ...t
  }
));
Pe.displayName = "TableCell";
const Yr = ({ open: e, onOpenChange: t, children: r }) => e ? /* @__PURE__ */ o.jsxs("div", { className: "fixed inset-0 z-50 flex items-center justify-center", children: [
  /* @__PURE__ */ o.jsx(
    "div",
    {
      className: "fixed inset-0 bg-black/50",
      onClick: () => t(!1)
    }
  ),
  /* @__PURE__ */ o.jsx("div", { className: "relative z-10", children: r })
] }) : null, kt = a.forwardRef(({ className: e, children: t, ...r }, s) => /* @__PURE__ */ o.jsx(
  "div",
  {
    ref: s,
    className: c(
      "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 sm:rounded-lg",
      e
    ),
    ...r,
    children: t
  }
));
kt.displayName = "DialogContent";
const Ur = ({ className: e, ...t }) => /* @__PURE__ */ o.jsx(
  "div",
  {
    className: c("flex flex-col space-y-1.5 text-center sm:text-left", e),
    ...t
  }
);
Ur.displayName = "DialogHeader";
const qr = a.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ o.jsx(
  "h3",
  {
    ref: r,
    className: c("text-lg font-semibold leading-none tracking-tight", e),
    ...t
  }
));
qr.displayName = "DialogTitle";
const Jr = ({ className: e, ...t }) => /* @__PURE__ */ o.jsx(
  "div",
  {
    className: c("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", e),
    ...t
  }
);
Jr.displayName = "DialogFooter";
const jt = a.forwardRef(
  ({ className: e, ...t }, r) => /* @__PURE__ */ o.jsx(
    "label",
    {
      ref: r,
      className: c(
        "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
        e
      ),
      ...t
    }
  )
);
jt.displayName = "Label";
const Xr = a.forwardRef(
  ({ className: e, children: t, ...r }, s) => /* @__PURE__ */ o.jsx(
    "select",
    {
      className: c(
        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ref: s,
      ...r,
      children: t
    }
  )
);
Xr.displayName = "Select";
const Kr = a.forwardRef(
  ({ className: e, ...t }, r) => /* @__PURE__ */ o.jsx(
    "textarea",
    {
      className: c(
        "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ref: r,
      ...t
    }
  )
);
Kr.displayName = "Textarea";
const Zr = U(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Qr({ className: e, variant: t, ...r }) {
  return /* @__PURE__ */ o.jsx("div", { className: c(Zr({ variant: t }), e), ...r });
}
const eo = a.forwardRef(
  ({ className: e, ...t }, r) => /* @__PURE__ */ o.jsx(
    "input",
    {
      type: "checkbox",
      className: c(
        "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ref: r,
      ...t
    }
  )
);
eo.displayName = "Checkbox";
const to = a.forwardRef(
  ({ className: e, orientation: t = "horizontal", ...r }, s) => /* @__PURE__ */ o.jsx(
    "div",
    {
      ref: s,
      className: c(
        "shrink-0 bg-border",
        t === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        e
      ),
      ...r
    }
  )
);
to.displayName = "Separator";
function Tn({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ o.jsx(
    "div",
    {
      className: c("animate-pulse rounded-md bg-muted", e),
      ...t
    }
  );
}
const _e = a.createContext(void 0), Sn = ({ value: e, onValueChange: t, children: r, className: s }) => /* @__PURE__ */ o.jsx(_e.Provider, { value: { value: e, onValueChange: t }, children: /* @__PURE__ */ o.jsx("div", { className: c("w-full", s), children: r }) }), ro = a.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ o.jsx(
  "div",
  {
    ref: r,
    className: c(
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
      e
    ),
    ...t
  }
));
ro.displayName = "TabsList";
const oo = a.forwardRef(
  ({ className: e, value: t, ...r }, s) => {
    const n = a.useContext(_e), l = n?.value === t;
    return /* @__PURE__ */ o.jsx(
      "button",
      {
        ref: s,
        className: c(
          "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          l && "bg-background text-foreground shadow-sm",
          e
        ),
        onClick: () => n?.onValueChange(t),
        ...r
      }
    );
  }
);
oo.displayName = "TabsTrigger";
const so = a.forwardRef(
  ({ className: e, value: t, ...r }, s) => a.useContext(_e)?.value !== t ? null : /* @__PURE__ */ o.jsx(
    "div",
    {
      ref: s,
      className: c(
        "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        e
      ),
      ...r
    }
  )
);
so.displayName = "TabsContent";
const no = a.forwardRef(
  ({ className: e, ...t }, r) => /* @__PURE__ */ o.jsx(
    "div",
    {
      ref: r,
      className: c(
        "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
        e
      ),
      ...t
    }
  )
);
no.displayName = "Avatar";
const ao = a.forwardRef(
  ({ className: e, ...t }, r) => /* @__PURE__ */ o.jsx(
    "img",
    {
      ref: r,
      className: c("aspect-square h-full w-full", e),
      ...t
    }
  )
);
ao.displayName = "AvatarImage";
const lo = a.forwardRef(
  ({ className: e, ...t }, r) => /* @__PURE__ */ o.jsx(
    "div",
    {
      ref: r,
      className: c(
        "flex h-full w-full items-center justify-center rounded-full bg-muted",
        e
      ),
      ...t
    }
  )
);
lo.displayName = "AvatarFallback";
/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const io = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), co = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, r, s) => s ? s.toUpperCase() : r.toLowerCase()
), rt = (e) => {
  const t = co(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, Ct = (...e) => e.filter((t, r, s) => !!t && t.trim() !== "" && s.indexOf(t) === r).join(" ").trim(), uo = (e) => {
  for (const t in e)
    if (t.startsWith("aria-") || t === "role" || t === "title")
      return !0;
};
/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var mo = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fo = ot(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: s,
    className: n = "",
    children: l,
    iconNode: i,
    ...u
  }, m) => Re(
    "svg",
    {
      ref: m,
      ...mo,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: s ? Number(r) * 24 / Number(t) : r,
      className: Ct("lucide", n),
      ...!l && !uo(u) && { "aria-hidden": "true" },
      ...u
    },
    [
      ...i.map(([f, b]) => Re(f, b)),
      ...Array.isArray(l) ? l : [l]
    ]
  )
);
/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const E = (e, t) => {
  const r = ot(
    ({ className: s, ...n }, l) => Re(fo, {
      ref: l,
      iconNode: t,
      className: Ct(
        `lucide-${io(rt(e))}`,
        `lucide-${e}`,
        s
      ),
      ...n
    })
  );
  return r.displayName = rt(e), r;
};
/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const po = [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
], go = E("arrow-left", po);
/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xo = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
], bo = E("arrow-right", xo);
/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ho = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }]
], vo = E("calendar", ho);
/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yo = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], wo = E("check", yo);
/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const No = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], Rt = E("chevron-down", No);
/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ko = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], Tt = E("chevron-left", ko);
/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jo = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], Me = E("chevron-right", jo);
/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Co = [
  ["path", { d: "m7 15 5 5 5-5", key: "1hf1tw" }],
  ["path", { d: "m7 9 5-5 5 5", key: "sgt6xg" }]
], Ro = E("chevrons-up-down", Co);
/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const To = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]], So = E("circle", To);
/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ao = [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "19", cy: "12", r: "1", key: "1wjl8i" }],
  ["circle", { cx: "5", cy: "12", r: "1", key: "1pcz8c" }]
], St = E("ellipsis", Ao);
/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Po = [
  ["path", { d: "m16 17 5-5-5-5", key: "1bji2h" }],
  ["path", { d: "M21 12H9", key: "dn1m92" }],
  ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }]
], Eo = E("log-out", Po);
/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Oo = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], _o = E("plus", Oo);
/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mo = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
], Do = E("search", Mo);
/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Io = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], At = E("x", Io), zo = a.forwardRef(({ ...e }, t) => /* @__PURE__ */ o.jsx("nav", { ref: t, "aria-label": "breadcrumb", ...e }));
zo.displayName = "Breadcrumb";
const Lo = a.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ o.jsx(
  "ol",
  {
    ref: r,
    className: c(
      "flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5",
      e
    ),
    ...t
  }
));
Lo.displayName = "BreadcrumbList";
const Vo = a.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ o.jsx(
  "li",
  {
    ref: r,
    className: c("inline-flex items-center gap-1.5", e),
    ...t
  }
));
Vo.displayName = "BreadcrumbItem";
const Fo = a.forwardRef(({ asChild: e, className: t, ...r }, s) => {
  const n = e ? at : "a";
  return /* @__PURE__ */ o.jsx(
    n,
    {
      ref: s,
      className: c("transition-colors hover:text-foreground", t),
      ...r
    }
  );
});
Fo.displayName = "BreadcrumbLink";
const Go = a.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ o.jsx(
  "span",
  {
    ref: r,
    role: "link",
    "aria-disabled": "true",
    "aria-current": "page",
    className: c("font-normal text-foreground", e),
    ...t
  }
));
Go.displayName = "BreadcrumbPage";
const $o = ({
  children: e,
  className: t,
  ...r
}) => /* @__PURE__ */ o.jsx(
  "li",
  {
    role: "presentation",
    "aria-hidden": "true",
    className: c("[&>svg]:size-3.5", t),
    ...r,
    children: e ?? /* @__PURE__ */ o.jsx(Me, {})
  }
);
$o.displayName = "BreadcrumbSeparator";
const Bo = ({
  className: e,
  ...t
}) => /* @__PURE__ */ o.jsxs(
  "span",
  {
    role: "presentation",
    "aria-hidden": "true",
    className: c("flex h-9 w-9 items-center justify-center", e),
    ...t,
    children: [
      /* @__PURE__ */ o.jsx(St, { className: "h-4 w-4" }),
      /* @__PURE__ */ o.jsx("span", { className: "sr-only", children: "More" })
    ]
  }
);
Bo.displayName = "BreadcrumbEllipsis";
const De = a.createContext({ isOpen: !1, setIsOpen: () => {
} }), Ho = ({ children: e }) => {
  const [t, r] = a.useState(!1);
  return /* @__PURE__ */ o.jsx(De.Provider, { value: { isOpen: t, setIsOpen: r }, children: /* @__PURE__ */ o.jsxs("div", { className: "relative inline-block text-left", children: [
    e,
    t && nt(
      /* @__PURE__ */ o.jsx(
        "div",
        {
          className: "fixed inset-0 z-[99998]",
          onClick: () => r(!1)
        }
      ),
      document.body
    )
  ] }) });
}, Pt = a.forwardRef(({ className: e, children: t, asChild: r, ...s }, n) => {
  const { setIsOpen: l } = a.useContext(De);
  if (r && a.isValidElement(t)) {
    const i = t.props;
    return a.cloneElement(t, {
      ...i,
      onClick: (u) => {
        i.onClick?.(u), l(!0);
      }
    });
  }
  return /* @__PURE__ */ o.jsx(
    "div",
    {
      ref: n,
      className: c("inline-flex items-center cursor-pointer", e),
      onClick: () => l(!0),
      ...s,
      children: t
    }
  );
});
Pt.displayName = "DropdownMenuTrigger";
const Et = a.forwardRef(({ className: e, align: t = "start", side: r = "bottom", ...s }, n) => {
  const { isOpen: l } = a.useContext(De);
  if (!l) return null;
  const i = /* @__PURE__ */ o.jsx(
    "div",
    {
      ref: n,
      className: c(
        "fixed z-[99999] min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg",
        t === "end" ? "right-2 sm:right-4" : "left-2 sm:left-4",
        "top-16",
        e
      ),
      ...s
    }
  );
  return nt(i, document.body);
});
Et.displayName = "DropdownMenuContent";
const Wo = a.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ o.jsx(
  "div",
  {
    ref: r,
    className: c(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground",
      e
    ),
    ...t
  }
));
Wo.displayName = "DropdownMenuItem";
const Yo = a.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ o.jsx(
  "div",
  {
    ref: r,
    className: c("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
Yo.displayName = "DropdownMenuSeparator";
const Uo = a.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ o.jsx(
  "div",
  {
    ref: r,
    className: c("px-2 py-1.5 text-sm font-semibold", e),
    ...t
  }
));
Uo.displayName = "DropdownMenuLabel";
const qo = ({ className: e, ...t }) => /* @__PURE__ */ o.jsx(
  "nav",
  {
    role: "navigation",
    "aria-label": "pagination",
    className: c("mx-auto flex w-full justify-center", e),
    ...t
  }
);
qo.displayName = "Pagination";
const Jo = a.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ o.jsx(
  "ul",
  {
    ref: r,
    className: c("flex flex-row items-center gap-1", e),
    ...t
  }
));
Jo.displayName = "PaginationContent";
const Xo = a.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ o.jsx("li", { ref: r, className: c("", e), ...t }));
Xo.displayName = "PaginationItem";
const Ie = ({
  className: e,
  isActive: t,
  size: r = "icon",
  ...s
}) => /* @__PURE__ */ o.jsx(
  "a",
  {
    "aria-current": t ? "page" : void 0,
    className: c(
      K({
        variant: t ? "outline" : "ghost",
        size: r
      }),
      e
    ),
    ...s
  }
);
Ie.displayName = "PaginationLink";
const Ko = ({
  className: e,
  ...t
}) => /* @__PURE__ */ o.jsxs(
  Ie,
  {
    "aria-label": "Go to previous page",
    size: "default",
    className: c("gap-1 pl-2.5", e),
    ...t,
    children: [
      /* @__PURE__ */ o.jsx(Tt, { className: "h-4 w-4" }),
      /* @__PURE__ */ o.jsx("span", { children: "Previous" })
    ]
  }
);
Ko.displayName = "PaginationPrevious";
const Zo = ({
  className: e,
  ...t
}) => /* @__PURE__ */ o.jsxs(
  Ie,
  {
    "aria-label": "Go to next page",
    size: "default",
    className: c("gap-1 pr-2.5", e),
    ...t,
    children: [
      /* @__PURE__ */ o.jsx("span", { children: "Next" }),
      /* @__PURE__ */ o.jsx(Me, { className: "h-4 w-4" })
    ]
  }
);
Zo.displayName = "PaginationNext";
const Qo = ({
  className: e,
  ...t
}) => /* @__PURE__ */ o.jsxs(
  "span",
  {
    "aria-hidden": !0,
    className: c("flex h-9 w-9 items-center justify-center", e),
    ...t,
    children: [
      /* @__PURE__ */ o.jsx(St, { className: "h-4 w-4" }),
      /* @__PURE__ */ o.jsx("span", { className: "sr-only", children: "More pages" })
    ]
  }
);
Qo.displayName = "PaginationEllipsis";
const es = a.forwardRef(
  ({ className: e, ...t }, r) => /* @__PURE__ */ o.jsxs("label", { className: "relative inline-flex items-center cursor-pointer", children: [
    /* @__PURE__ */ o.jsx(
      "input",
      {
        type: "checkbox",
        ref: r,
        className: "sr-only peer",
        ...t
      }
    ),
    /* @__PURE__ */ o.jsx("div", { className: c(
      "relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600",
      e
    ) })
  ] })
);
es.displayName = "Switch";
const ze = a.createContext({ open: !1, onOpenChange: () => {
} }), An = ({ children: e }) => {
  const [t, r] = a.useState(!1);
  return /* @__PURE__ */ o.jsx(ze.Provider, { value: { open: t, onOpenChange: r }, children: /* @__PURE__ */ o.jsx("div", { className: "relative inline-block", children: e }) });
}, ts = a.forwardRef(
  ({ className: e, children: t, asChild: r, ...s }, n) => {
    const { onOpenChange: l } = a.useContext(ze);
    if (r && a.isValidElement(t)) {
      const i = t.props;
      return a.cloneElement(t, {
        ...i,
        onMouseEnter: () => l(!0),
        onMouseLeave: () => l(!1)
      });
    }
    return /* @__PURE__ */ o.jsx(
      "div",
      {
        ref: n,
        className: e,
        onMouseEnter: () => l(!0),
        onMouseLeave: () => l(!1),
        ...s,
        children: t
      }
    );
  }
);
ts.displayName = "TooltipTrigger";
const rs = a.forwardRef(
  ({ className: e, children: t, ...r }, s) => {
    const { open: n } = a.useContext(ze);
    return n ? /* @__PURE__ */ o.jsx(
      "div",
      {
        ref: s,
        className: c(
          "absolute bottom-full left-1/2 z-50 mb-2 -translate-x-1/2 rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md",
          e
        ),
        ...r,
        children: t
      }
    ) : null;
  }
);
rs.displayName = "TooltipContent";
const os = a.forwardRef(
  ({ className: e, value: t = 0, max: r = 100, ...s }, n) => /* @__PURE__ */ o.jsx(
    "div",
    {
      ref: n,
      className: c(
        "relative h-4 w-full overflow-hidden rounded-full bg-secondary",
        e
      ),
      ...s,
      children: /* @__PURE__ */ o.jsx(
        "div",
        {
          className: "h-full w-full flex-1 bg-primary transition-all",
          style: { transform: `translateX(-${100 - t / r * 100}%)` }
        }
      )
    }
  )
);
os.displayName = "Progress";
const ss = a.forwardRef(
  ({ className: e, ...t }, r) => /* @__PURE__ */ o.jsx(
    "input",
    {
      type: "range",
      ref: r,
      className: c(
        "flex h-6 w-full cursor-pointer appearance-none items-center rounded-lg bg-gray-200 outline-none dark:bg-gray-700 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:cursor-pointer",
        e
      ),
      ...t
    }
  )
);
ss.displayName = "Slider";
const ns = U(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline: "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground"
      },
      size: {
        default: "h-10 px-3",
        sm: "h-9 px-2.5",
        lg: "h-11 px-5"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), as = a.forwardRef(
  ({ className: e, variant: t, size: r, pressed: s, onPressedChange: n, onClick: l, ...i }, u) => /* @__PURE__ */ o.jsx(
    "button",
    {
      ref: u,
      className: c(ns({ variant: t, size: r, className: e })),
      "data-state": s ? "on" : "off",
      onClick: (m) => {
        n?.(!s), l?.(m);
      },
      ...i
    }
  )
);
as.displayName = "Toggle";
const ls = a.createContext({}), is = a.forwardRef(
  ({ className: e, type: t = "single", value: r, onValueChange: s, ...n }, l) => /* @__PURE__ */ o.jsx(ls.Provider, { value: { value: r, onValueChange: s, type: t }, children: /* @__PURE__ */ o.jsx("div", { ref: l, className: c("space-y-2", e), ...n }) })
);
is.displayName = "Accordion";
const cs = a.forwardRef(
  ({ className: e, ...t }, r) => /* @__PURE__ */ o.jsx("div", { ref: r, className: c("border-b", e), ...t })
);
cs.displayName = "AccordionItem";
const ds = a.forwardRef(
  ({ className: e, children: t, ...r }, s) => /* @__PURE__ */ o.jsxs(
    "button",
    {
      ref: s,
      className: c(
        "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
        e
      ),
      ...r,
      children: [
        t,
        /* @__PURE__ */ o.jsx(Rt, { className: "h-4 w-4 shrink-0 transition-transform duration-200" })
      ]
    }
  )
);
ds.displayName = "AccordionTrigger";
const us = a.forwardRef(
  ({ className: e, children: t, ...r }, s) => /* @__PURE__ */ o.jsx(
    "div",
    {
      ref: s,
      className: c("overflow-hidden text-sm transition-all", e),
      ...r,
      children: /* @__PURE__ */ o.jsx("div", { className: "pb-4 pt-0", children: t })
    }
  )
);
us.displayName = "AccordionContent";
const me = a.createContext({
  open: !1,
  onOpenChange: () => {
  }
}), ms = ({ children: e, open: t, onOpenChange: r }) => {
  const [s, n] = a.useState(!1), l = t !== void 0 ? t : s, i = r || n;
  return /* @__PURE__ */ o.jsx(me.Provider, { value: { open: l, onOpenChange: i }, children: e });
}, fs = a.forwardRef(({ children: e, onClick: t, ...r }, s) => {
  const { onOpenChange: n } = a.useContext(me);
  return /* @__PURE__ */ o.jsx(
    "button",
    {
      ref: s,
      onClick: (l) => {
        n(!0), t?.(l);
      },
      ...r,
      children: e
    }
  );
});
fs.displayName = "AlertDialogTrigger";
const Ot = a.forwardRef(({ className: e, ...t }, r) => {
  const { open: s } = a.useContext(me);
  return s ? /* @__PURE__ */ o.jsxs("div", { className: "fixed inset-0 z-50 flex items-center justify-center", children: [
    /* @__PURE__ */ o.jsx("div", { className: "fixed inset-0 bg-black/80" }),
    /* @__PURE__ */ o.jsx(
      "div",
      {
        ref: r,
        className: c(
          "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 sm:rounded-lg",
          e
        ),
        ...t
      }
    )
  ] }) : null;
});
Ot.displayName = "AlertDialogContent";
const _t = ({ className: e, ...t }) => /* @__PURE__ */ o.jsx(
  "div",
  {
    className: c("flex flex-col space-y-2 text-center sm:text-left", e),
    ...t
  }
);
_t.displayName = "AlertDialogHeader";
const Mt = ({ className: e, ...t }) => /* @__PURE__ */ o.jsx(
  "div",
  {
    className: c("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", e),
    ...t
  }
);
Mt.displayName = "AlertDialogFooter";
const Dt = a.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ o.jsx(
  "h3",
  {
    ref: r,
    className: c("text-lg font-semibold", e),
    ...t
  }
));
Dt.displayName = "AlertDialogTitle";
const It = a.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ o.jsx(
  "p",
  {
    ref: r,
    className: c("text-sm text-muted-foreground", e),
    ...t
  }
));
It.displayName = "AlertDialogDescription";
const zt = a.forwardRef(({ className: e, onClick: t, ...r }, s) => {
  const { onOpenChange: n } = a.useContext(me);
  return /* @__PURE__ */ o.jsx(
    "button",
    {
      ref: s,
      className: c(K(), e),
      onClick: (l) => {
        t?.(l), n(!1);
      },
      ...r
    }
  );
});
zt.displayName = "AlertDialogAction";
const Lt = a.forwardRef(({ className: e, onClick: t, ...r }, s) => {
  const { onOpenChange: n } = a.useContext(me);
  return /* @__PURE__ */ o.jsx(
    "button",
    {
      ref: s,
      className: c(K({ variant: "outline" }), "mt-2 sm:mt-0", e),
      onClick: (l) => {
        t?.(l), n(!1);
      },
      ...r
    }
  );
});
Lt.displayName = "AlertDialogCancel";
const ps = a.forwardRef(
  ({ ratio: e = 1, className: t, style: r, ...s }, n) => /* @__PURE__ */ o.jsx(
    "div",
    {
      ref: n,
      className: t,
      style: {
        position: "relative",
        width: "100%",
        paddingBottom: `${100 / e}%`,
        ...r
      },
      ...s
    }
  )
);
ps.displayName = "AspectRatio";
const Le = a.createContext({
  open: !1,
  onOpenChange: () => {
  }
}), Pn = ({ open: e, onOpenChange: t, children: r }) => {
  const [s, n] = a.useState(!1), l = e !== void 0 ? e : s, i = t || n;
  return /* @__PURE__ */ o.jsx(Le.Provider, { value: { open: l, onOpenChange: i }, children: r });
}, gs = a.forwardRef(({ onClick: e, ...t }, r) => {
  const { onOpenChange: s, open: n } = a.useContext(Le);
  return /* @__PURE__ */ o.jsx(
    "button",
    {
      ref: r,
      onClick: (l) => {
        s(!n), e?.(l);
      },
      ...t
    }
  );
});
gs.displayName = "CollapsibleTrigger";
const xs = a.forwardRef(({ className: e, ...t }, r) => {
  const { open: s } = a.useContext(Le);
  return s ? /* @__PURE__ */ o.jsx("div", { ref: r, className: e, ...t }) : null;
});
xs.displayName = "CollapsibleContent";
const Ve = a.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ o.jsx(
  "div",
  {
    ref: r,
    className: c(
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
      e
    ),
    ...t
  }
));
Ve.displayName = "Command";
const En = ({ children: e, open: t = !1, onOpenChange: r = () => {
} }) => /* @__PURE__ */ o.jsx(Yr, { open: t, onOpenChange: r, children: /* @__PURE__ */ o.jsx(kt, { className: "overflow-hidden p-0 shadow-lg", children: /* @__PURE__ */ o.jsx(Ve, { children: e }) }) }), Vt = a.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ o.jsxs("div", { className: "flex items-center border-b px-3", children: [
  /* @__PURE__ */ o.jsx(Do, { className: "mr-2 h-4 w-4 shrink-0 opacity-50" }),
  /* @__PURE__ */ o.jsx(
    "input",
    {
      ref: r,
      className: c(
        "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ...t
    }
  )
] }));
Vt.displayName = "CommandInput";
const Ft = a.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ o.jsx(
  "div",
  {
    ref: r,
    className: c("max-h-[300px] overflow-y-auto overflow-x-hidden", e),
    ...t
  }
));
Ft.displayName = "CommandList";
const Gt = a.forwardRef(({ ...e }, t) => /* @__PURE__ */ o.jsx(
  "div",
  {
    ref: t,
    className: "py-6 text-center text-sm",
    ...e
  }
));
Gt.displayName = "CommandEmpty";
const $t = a.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ o.jsx(
  "div",
  {
    ref: r,
    className: c(
      "overflow-hidden p-1 text-foreground",
      e
    ),
    ...t
  }
));
$t.displayName = "CommandGroup";
const bs = a.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ o.jsx(
  "div",
  {
    ref: r,
    className: c("-mx-1 h-px bg-border", e),
    ...t
  }
));
bs.displayName = "CommandSeparator";
const Bt = a.forwardRef(({ className: e, value: t, onSelect: r, onClick: s, ...n }, l) => /* @__PURE__ */ o.jsx(
  "div",
  {
    ref: l,
    className: c(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-accent hover:text-accent-foreground",
      e
    ),
    onClick: (i) => {
      t && r && r(t), s?.(i);
    },
    ...n
  }
));
Bt.displayName = "CommandItem";
const hs = ({
  className: e,
  ...t
}) => /* @__PURE__ */ o.jsx(
  "span",
  {
    className: c(
      "ml-auto text-xs tracking-widest text-muted-foreground",
      e
    ),
    ...t
  }
);
hs.displayName = "CommandShortcut";
const vs = a.forwardRef(
  ({ className: e, title: t, description: r, icon: s, action: n, children: l, ...i }, u) => /* @__PURE__ */ o.jsxs(
    "div",
    {
      ref: u,
      className: c(
        "flex min-h-[400px] flex-col items-center justify-center rounded-md border border-dashed p-8 text-center animate-in fade-in-50",
        e
      ),
      ...i,
      children: [
        /* @__PURE__ */ o.jsx("div", { className: "mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-muted", children: s || /* @__PURE__ */ o.jsx(
          "svg",
          {
            className: "h-10 w-10 text-muted-foreground",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            children: /* @__PURE__ */ o.jsx(
              "path",
              {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              }
            )
          }
        ) }),
        /* @__PURE__ */ o.jsxs("div", { className: "mx-auto max-w-[420px] text-center", children: [
          /* @__PURE__ */ o.jsx("h3", { className: "mt-4 text-lg font-semibold", children: t || "No data found" }),
          /* @__PURE__ */ o.jsx("p", { className: "mb-4 mt-2 text-sm text-muted-foreground", children: r || "There are no items to display at the moment." }),
          n
        ] }),
        l
      ]
    }
  )
);
vs.displayName = "Empty";
const Fe = a.createContext({
  open: !1,
  onOpenChange: () => {
  }
}), Ht = ({ open: e, onOpenChange: t, children: r }) => {
  const [s, n] = a.useState(!1), l = e !== void 0 ? e : s, i = t || n;
  return /* @__PURE__ */ o.jsx(Fe.Provider, { value: { open: l, onOpenChange: i }, children: /* @__PURE__ */ o.jsx("div", { className: "relative", children: r }) });
}, Ge = a.forwardRef(({ onClick: e, ...t }, r) => {
  const { onOpenChange: s, open: n } = a.useContext(Fe);
  return /* @__PURE__ */ o.jsx(
    "button",
    {
      ref: r,
      onClick: (l) => {
        s(!n), e?.(l);
      },
      ...t
    }
  );
});
Ge.displayName = "PopoverTrigger";
const $e = a.forwardRef(({ className: e, align: t = "center", sideOffset: r = 4, ...s }, n) => {
  const { open: l } = a.useContext(Fe);
  return l ? /* @__PURE__ */ o.jsx(
    "div",
    {
      ref: n,
      className: c(
        "absolute z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none",
        "top-full mt-1",
        t === "start" && "left-0",
        t === "center" && "left-1/2 -translate-x-1/2",
        t === "end" && "right-0",
        e
      ),
      style: { marginTop: r },
      ...s
    }
  ) : null;
});
$e.displayName = "PopoverContent";
const Wt = a.createContext({}), ys = a.forwardRef(
  ({ className: e, value: t, onValueChange: r, name: s, ...n }, l) => /* @__PURE__ */ o.jsx(Wt.Provider, { value: { value: t, onValueChange: r, name: s }, children: /* @__PURE__ */ o.jsx("div", { className: c("grid gap-2", e), ...n, ref: l }) })
);
ys.displayName = "RadioGroup";
const ws = a.forwardRef(
  ({ className: e, value: t, ...r }, s) => {
    const { value: n, onValueChange: l, name: i } = a.useContext(Wt), u = n === t;
    return /* @__PURE__ */ o.jsxs("div", { className: "flex items-center space-x-2", children: [
      /* @__PURE__ */ o.jsx(
        "input",
        {
          ref: s,
          type: "radio",
          name: i,
          value: t,
          checked: u,
          onChange: () => l?.(t),
          className: "sr-only",
          ...r
        }
      ),
      /* @__PURE__ */ o.jsx(
        "div",
        {
          className: c(
            "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer",
            e
          ),
          onClick: () => l?.(t),
          children: u && /* @__PURE__ */ o.jsx("div", { className: "flex items-center justify-center h-full", children: /* @__PURE__ */ o.jsx(So, { className: "h-2.5 w-2.5 fill-current text-current" }) })
        }
      )
    ] });
  }
);
ws.displayName = "RadioGroupItem";
function Yt({
  className: e,
  selected: t,
  onSelect: r,
  showOutsideDays: s = !0,
  ...n
}) {
  const [l, i] = a.useState(/* @__PURE__ */ new Date()), u = new Date(l.getFullYear(), l.getMonth() + 1, 0).getDate(), m = new Date(l.getFullYear(), l.getMonth(), 1).getDay(), f = Array.from({ length: u }, (w, A) => A + 1), b = Array.from({ length: m }, (w, A) => A), R = () => {
    i(new Date(l.getFullYear(), l.getMonth() - 1));
  }, S = () => {
    i(new Date(l.getFullYear(), l.getMonth() + 1));
  }, p = (w) => t ? t.getDate() === w && t.getMonth() === l.getMonth() && t.getFullYear() === l.getFullYear() : !1, v = (w) => {
    const A = new Date(l.getFullYear(), l.getMonth(), w);
    r?.(A);
  };
  return /* @__PURE__ */ o.jsxs("div", { className: c("p-3", e), ...n, children: [
    /* @__PURE__ */ o.jsxs("div", { className: "flex justify-center pt-1 relative items-center mb-4", children: [
      /* @__PURE__ */ o.jsx(
        "button",
        {
          onClick: R,
          className: c(
            K({ variant: "outline" }),
            "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 absolute left-1"
          ),
          children: /* @__PURE__ */ o.jsx(Tt, { className: "h-4 w-4" })
        }
      ),
      /* @__PURE__ */ o.jsx("div", { className: "text-sm font-medium", children: l.toLocaleDateString("en-US", { month: "long", year: "numeric" }) }),
      /* @__PURE__ */ o.jsx(
        "button",
        {
          onClick: S,
          className: c(
            K({ variant: "outline" }),
            "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 absolute right-1"
          ),
          children: /* @__PURE__ */ o.jsx(Me, { className: "h-4 w-4" })
        }
      )
    ] }),
    /* @__PURE__ */ o.jsxs("table", { className: "w-full border-collapse", children: [
      /* @__PURE__ */ o.jsx("thead", { children: /* @__PURE__ */ o.jsx("tr", { className: "flex", children: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((w) => /* @__PURE__ */ o.jsx("th", { className: "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]", children: w }, w)) }) }),
      /* @__PURE__ */ o.jsx("tbody", { children: /* @__PURE__ */ o.jsxs("tr", { className: "flex w-full mt-2", children: [
        b.map((w, A) => /* @__PURE__ */ o.jsx("td", { className: "h-9 w-9 p-0" }, `empty-${A}`)),
        f.map((w) => /* @__PURE__ */ o.jsx("td", { className: "h-9 w-9 text-center text-sm p-0 relative", children: /* @__PURE__ */ o.jsx(
          "button",
          {
            onClick: () => v(w),
            className: c(
              K({ variant: "ghost" }),
              "h-9 w-9 p-0 font-normal",
              p(w) && "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground"
            ),
            children: w
          }
        ) }, w))
      ] }) })
    ] })
  ] });
}
Yt.displayName = "Calendar";
const Ut = a.createContext({
  currentIndex: 0,
  setCurrentIndex: () => {
  },
  itemsLength: 0,
  orientation: "horizontal"
});
function ye() {
  const e = a.useContext(Ut);
  if (!e)
    throw new Error("useCarousel must be used within a <Carousel />");
  return e;
}
const Ns = a.forwardRef(
  ({ orientation: e = "horizontal", className: t, children: r, ...s }, n) => {
    const [l, i] = a.useState(0), [u, m] = a.useState(0);
    return a.useEffect(() => {
      const f = a.Children.count(r);
      m(f);
    }, [r]), /* @__PURE__ */ o.jsx(Ut.Provider, { value: { currentIndex: l, setCurrentIndex: i, itemsLength: u, orientation: e }, children: /* @__PURE__ */ o.jsx(
      "div",
      {
        ref: n,
        className: c("relative", t),
        role: "region",
        "aria-roledescription": "carousel",
        ...s,
        children: r
      }
    ) });
  }
);
Ns.displayName = "Carousel";
const ks = a.forwardRef(({ className: e, children: t, ...r }, s) => {
  const { orientation: n, currentIndex: l } = ye();
  return /* @__PURE__ */ o.jsx("div", { className: "overflow-hidden", children: /* @__PURE__ */ o.jsx(
    "div",
    {
      ref: s,
      className: c(
        "flex transition-transform duration-300",
        n === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
        e
      ),
      style: {
        transform: n === "horizontal" ? `translateX(-${l * 100}%)` : `translateY(-${l * 100}%)`
      },
      ...r,
      children: t
    }
  ) });
});
ks.displayName = "CarouselContent";
const js = a.forwardRef(({ className: e, ...t }, r) => {
  const { orientation: s } = ye();
  return /* @__PURE__ */ o.jsx(
    "div",
    {
      ref: r,
      role: "group",
      "aria-roledescription": "slide",
      className: c(
        "min-w-0 shrink-0 grow-0 basis-full",
        s === "horizontal" ? "pl-4" : "pt-4",
        e
      ),
      ...t
    }
  );
});
js.displayName = "CarouselItem";
const Cs = a.forwardRef(({ className: e, variant: t = "outline", size: r = "icon", ...s }, n) => {
  const { orientation: l, currentIndex: i, setCurrentIndex: u, itemsLength: m } = ye(), f = () => {
    u(i > 0 ? i - 1 : m - 1);
  };
  return /* @__PURE__ */ o.jsxs(
    Y,
    {
      ref: n,
      variant: t,
      size: r,
      className: c(
        "absolute h-8 w-8 rounded-full",
        l === "horizontal" ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        e
      ),
      onClick: f,
      ...s,
      children: [
        /* @__PURE__ */ o.jsx(go, { className: "h-4 w-4" }),
        /* @__PURE__ */ o.jsx("span", { className: "sr-only", children: "Previous slide" })
      ]
    }
  );
});
Cs.displayName = "CarouselPrevious";
const Rs = a.forwardRef(({ className: e, variant: t = "outline", size: r = "icon", ...s }, n) => {
  const { orientation: l, currentIndex: i, setCurrentIndex: u, itemsLength: m } = ye(), f = () => {
    u(i < m - 1 ? i + 1 : 0);
  };
  return /* @__PURE__ */ o.jsxs(
    Y,
    {
      ref: n,
      variant: t,
      size: r,
      className: c(
        "absolute h-8 w-8 rounded-full",
        l === "horizontal" ? "-right-12 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        e
      ),
      onClick: f,
      ...s,
      children: [
        /* @__PURE__ */ o.jsx(bo, { className: "h-4 w-4" }),
        /* @__PURE__ */ o.jsx("span", { className: "sr-only", children: "Next slide" })
      ]
    }
  );
});
Rs.displayName = "CarouselNext";
function On({
  options: e,
  value: t,
  onValueChange: r,
  placeholder: s = "Select option...",
  searchPlaceholder: n = "Search...",
  emptyText: l = "No option found.",
  className: i
}) {
  const [u, m] = a.useState(!1);
  return /* @__PURE__ */ o.jsxs(Ht, { open: u, onOpenChange: m, children: [
    /* @__PURE__ */ o.jsx(Ge, { children: /* @__PURE__ */ o.jsxs(
      Y,
      {
        variant: "outline",
        role: "combobox",
        "aria-expanded": u,
        className: c("w-[200px] justify-between", i),
        children: [
          t ? e.find((f) => f.value === t)?.label : s,
          /* @__PURE__ */ o.jsx(Ro, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" })
        ]
      }
    ) }),
    /* @__PURE__ */ o.jsx($e, { className: "w-[200px] p-0", children: /* @__PURE__ */ o.jsxs(Ve, { children: [
      /* @__PURE__ */ o.jsx(Vt, { placeholder: n }),
      /* @__PURE__ */ o.jsxs(Ft, { children: [
        /* @__PURE__ */ o.jsx(Gt, { children: l }),
        /* @__PURE__ */ o.jsx($t, { children: e.map((f) => /* @__PURE__ */ o.jsxs(
          Bt,
          {
            value: f.value,
            onSelect: () => {
              r?.(f.value === t ? "" : f.value), m(!1);
            },
            children: [
              /* @__PURE__ */ o.jsx(
                wo,
                {
                  className: c(
                    "mr-2 h-4 w-4",
                    t === f.value ? "opacity-100" : "opacity-0"
                  )
                }
              ),
              f.label
            ]
          },
          f.value
        )) })
      ] })
    ] }) })
  ] });
}
function _n({
  columns: e,
  data: t,
  searchKey: r,
  searchPlaceholder: s = "Filter..."
}) {
  const [n, l] = a.useState(""), [i, u] = a.useState(1), [m] = a.useState(10), f = a.useMemo(() => !n || !r ? t : t.filter(
    (p) => String(p[r]).toLowerCase().includes(n.toLowerCase())
  ), [t, n, r]), b = a.useMemo(() => {
    const p = (i - 1) * m;
    return f.slice(p, p + m);
  }, [f, i, m]), R = Math.ceil(f.length / m), S = (p, v) => v.cell ? v.cell(p) : v.accessorKey ? p[v.accessorKey] : "";
  return /* @__PURE__ */ o.jsxs("div", { className: "w-full", children: [
    /* @__PURE__ */ o.jsxs("div", { className: "flex items-center py-4", children: [
      r && /* @__PURE__ */ o.jsx(
        Oe,
        {
          placeholder: s,
          value: n,
          onChange: (p) => l(p.target.value),
          className: "max-w-sm"
        }
      ),
      /* @__PURE__ */ o.jsxs(Ho, { children: [
        /* @__PURE__ */ o.jsx(Pt, { children: /* @__PURE__ */ o.jsxs(Y, { variant: "outline", className: "ml-auto", children: [
          "Columns ",
          /* @__PURE__ */ o.jsx(Rt, { className: "ml-2 h-4 w-4" })
        ] }) }),
        /* @__PURE__ */ o.jsx(Et, { align: "end", children: /* @__PURE__ */ o.jsx("div", { className: "p-2", children: /* @__PURE__ */ o.jsx("p", { className: "text-sm text-muted-foreground", children: "Toggle columns" }) }) })
      ] })
    ] }),
    /* @__PURE__ */ o.jsx("div", { className: "rounded-md border", children: /* @__PURE__ */ o.jsxs(vt, { children: [
      /* @__PURE__ */ o.jsx(yt, { children: /* @__PURE__ */ o.jsx(ve, { children: e.map((p) => /* @__PURE__ */ o.jsx(Nt, { children: p.header }, p.id)) }) }),
      /* @__PURE__ */ o.jsx(wt, { children: b.length ? b.map((p, v) => /* @__PURE__ */ o.jsx(ve, { children: e.map((w) => /* @__PURE__ */ o.jsx(Pe, { children: S(p, w) }, w.id)) }, v)) : /* @__PURE__ */ o.jsx(ve, { children: /* @__PURE__ */ o.jsx(
        Pe,
        {
          colSpan: e.length,
          className: "h-24 text-center",
          children: "No results."
        }
      ) }) })
    ] }) }),
    /* @__PURE__ */ o.jsxs("div", { className: "flex items-center justify-end space-x-2 py-4", children: [
      /* @__PURE__ */ o.jsxs("div", { className: "flex-1 text-sm text-muted-foreground", children: [
        "Showing ",
        b.length,
        " of ",
        f.length,
        " row(s)."
      ] }),
      /* @__PURE__ */ o.jsxs("div", { className: "space-x-2", children: [
        /* @__PURE__ */ o.jsx(
          Y,
          {
            variant: "outline",
            size: "sm",
            onClick: () => u((p) => Math.max(p - 1, 1)),
            disabled: i === 1,
            children: "Previous"
          }
        ),
        /* @__PURE__ */ o.jsx(
          Y,
          {
            variant: "outline",
            size: "sm",
            onClick: () => u((p) => Math.min(p + 1, R)),
            disabled: i === R,
            children: "Next"
          }
        )
      ] })
    ] })
  ] });
}
function Mn({
  date: e,
  onDateChange: t,
  placeholder: r = "Pick a date",
  className: s
}) {
  return /* @__PURE__ */ o.jsxs(Ht, { children: [
    /* @__PURE__ */ o.jsx(Ge, { children: /* @__PURE__ */ o.jsxs(
      Y,
      {
        variant: "outline",
        className: c(
          "w-[280px] justify-start text-left font-normal",
          !e && "text-muted-foreground",
          s
        ),
        children: [
          /* @__PURE__ */ o.jsx(vo, { className: "mr-2 h-4 w-4" }),
          e ? e.toLocaleDateString() : /* @__PURE__ */ o.jsx("span", { children: r })
        ]
      }
    ) }),
    /* @__PURE__ */ o.jsx($e, { className: "w-auto p-0", children: /* @__PURE__ */ o.jsx(
      Yt,
      {
        selected: e,
        onSelect: t
      }
    ) })
  ] });
}
const we = a.createContext({
  open: !1,
  onOpenChange: () => {
  }
}), Dn = ({ open: e, onOpenChange: t, children: r }) => {
  const [s, n] = a.useState(!1), l = e !== void 0 ? e : s, i = t || n;
  return /* @__PURE__ */ o.jsx(we.Provider, { value: { open: l, onOpenChange: i }, children: r });
}, Ts = a.forwardRef(({ onClick: e, ...t }, r) => {
  const { onOpenChange: s } = a.useContext(we);
  return /* @__PURE__ */ o.jsx(
    "button",
    {
      ref: r,
      onClick: (n) => {
        s(!0), e?.(n);
      },
      ...t
    }
  );
});
Ts.displayName = "DrawerTrigger";
const Ss = a.forwardRef(({ onClick: e, ...t }, r) => {
  const { onOpenChange: s } = a.useContext(we);
  return /* @__PURE__ */ o.jsx(
    "button",
    {
      ref: r,
      onClick: (n) => {
        s(!1), e?.(n);
      },
      ...t
    }
  );
});
Ss.displayName = "DrawerClose";
const As = a.forwardRef(({ className: e, children: t, ...r }, s) => {
  const { open: n } = a.useContext(we);
  return n ? /* @__PURE__ */ o.jsxs("div", { className: "fixed inset-0 z-50", children: [
    /* @__PURE__ */ o.jsx("div", { className: "fixed inset-0 bg-black/80" }),
    /* @__PURE__ */ o.jsxs(
      "div",
      {
        ref: s,
        className: c(
          "fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background",
          e
        ),
        ...r,
        children: [
          /* @__PURE__ */ o.jsx("div", { className: "mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted" }),
          t
        ]
      }
    )
  ] }) : null;
});
As.displayName = "DrawerContent";
const Ps = ({ className: e, ...t }) => /* @__PURE__ */ o.jsx(
  "div",
  {
    className: c("grid gap-1.5 p-4 text-center sm:text-left", e),
    ...t
  }
);
Ps.displayName = "DrawerHeader";
const Es = ({ className: e, ...t }) => /* @__PURE__ */ o.jsx("div", { className: c("mt-auto flex flex-col gap-2 p-4", e), ...t });
Es.displayName = "DrawerFooter";
const Os = a.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ o.jsx(
  "h3",
  {
    ref: r,
    className: c("text-lg font-semibold leading-none tracking-tight", e),
    ...t
  }
));
Os.displayName = "DrawerTitle";
const _s = a.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ o.jsx(
  "p",
  {
    ref: r,
    className: c("text-sm text-muted-foreground", e),
    ...t
  }
));
_s.displayName = "DrawerDescription";
const Be = a.createContext({
  errors: {},
  values: {},
  setValue: () => {
  },
  setError: () => {
  }
}), Ms = a.forwardRef(
  ({ children: e, ...t }, r) => {
    const [s, n] = a.useState({}), [l, i] = a.useState({}), u = (f, b) => {
      i((R) => ({ ...R, [f]: b }));
    }, m = (f, b) => {
      n((R) => ({ ...R, [f]: b }));
    };
    return /* @__PURE__ */ o.jsx(Be.Provider, { value: { errors: s, values: l, setValue: u, setError: m }, children: /* @__PURE__ */ o.jsx("form", { ref: r, ...t, children: e }) });
  }
);
Ms.displayName = "Form";
const Ds = a.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ o.jsx("div", { ref: r, className: c("space-y-2", e), ...t }));
Ds.displayName = "FormItem";
const Is = a.forwardRef(
  ({ className: e, name: t, ...r }, s) => {
    const { errors: n } = a.useContext(Be), l = t && n[t];
    return /* @__PURE__ */ o.jsx(
      jt,
      {
        ref: s,
        className: c(l && "text-destructive", e),
        ...r
      }
    );
  }
);
Is.displayName = "FormLabel";
const zs = a.forwardRef(
  ({ children: e, ...t }, r) => /* @__PURE__ */ o.jsx("div", { ref: r, ...t, children: e })
);
zs.displayName = "FormControl";
const Ls = a.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ o.jsx(
  "p",
  {
    ref: r,
    className: c("text-sm text-muted-foreground", e),
    ...t
  }
));
Ls.displayName = "FormDescription";
const Vs = a.forwardRef(
  ({ className: e, name: t, children: r, ...s }, n) => {
    const { errors: l } = a.useContext(Be), u = (t ? l[t] : void 0) || r;
    return u ? /* @__PURE__ */ o.jsx(
      "p",
      {
        ref: n,
        className: c("text-sm font-medium text-destructive", e),
        ...s,
        children: u
      }
    ) : null;
  }
);
Vs.displayName = "FormMessage";
const He = a.createContext({
  open: !1,
  onOpenChange: () => {
  }
}), In = ({ children: e }) => {
  const [t, r] = a.useState(!1);
  return /* @__PURE__ */ o.jsx(He.Provider, { value: { open: t, onOpenChange: r }, children: /* @__PURE__ */ o.jsx("div", { className: "relative inline-block", children: e }) });
}, Fs = a.forwardRef(({ children: e, ...t }, r) => {
  const { onOpenChange: s } = a.useContext(He);
  return /* @__PURE__ */ o.jsx(
    "div",
    {
      ref: r,
      onMouseEnter: () => s(!0),
      onMouseLeave: () => s(!1),
      ...t,
      children: e
    }
  );
});
Fs.displayName = "HoverCardTrigger";
const Gs = a.forwardRef(({ className: e, align: t = "center", sideOffset: r = 4, ...s }, n) => {
  const { open: l } = a.useContext(He);
  return l ? /* @__PURE__ */ o.jsx(
    "div",
    {
      ref: n,
      className: c(
        "absolute z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none",
        "top-full mt-1",
        t === "start" && "left-0",
        t === "center" && "left-1/2 -translate-x-1/2",
        t === "end" && "right-0",
        e
      ),
      style: { marginTop: r },
      ...s
    }
  ) : null;
});
Gs.displayName = "HoverCardContent";
const $s = a.forwardRef(
  ({ className: e, value: t = "", onChange: r, maxLength: s = 6, ...n }, l) => {
    const [i, u] = a.useState(t), m = a.useRef([]), f = t || i, b = r || u, R = (p, v) => {
      v.length > 1 && (v = v.slice(-1));
      const w = f.split("");
      w[p] = v;
      const A = w.join("").slice(0, s);
      b(A), v && p < s - 1 && m.current[p + 1]?.focus();
    }, S = (p, v) => {
      v.key === "Backspace" && !f[p] && p > 0 && m.current[p - 1]?.focus();
    };
    return /* @__PURE__ */ o.jsx(
      "div",
      {
        ref: l,
        className: c("flex items-center gap-2", e),
        ...n,
        children: Array.from({ length: s }).map((p, v) => /* @__PURE__ */ o.jsx(
          "input",
          {
            ref: (w) => {
              m.current[v] = w;
            },
            type: "text",
            inputMode: "numeric",
            maxLength: 1,
            value: f[v] || "",
            onChange: (w) => R(v, w.target.value),
            onKeyDown: (w) => S(v, w),
            className: "h-10 w-10 text-center border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          },
          v
        ))
      }
    );
  }
);
$s.displayName = "InputOTP";
const Bs = a.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ o.jsx("div", { ref: r, className: c("flex items-center", e), ...t }));
Bs.displayName = "InputOTPGroup";
const Hs = a.forwardRef(({ index: e, className: t, ...r }, s) => /* @__PURE__ */ o.jsx(
  "div",
  {
    ref: s,
    className: c(
      "relative flex h-10 w-10 items-center justify-center border-y border-r border-input text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md",
      t
    ),
    ...r
  }
));
Hs.displayName = "InputOTPSlot";
const Ws = a.forwardRef(({ ...e }, t) => /* @__PURE__ */ o.jsx("div", { ref: t, role: "separator", ...e, children: /* @__PURE__ */ o.jsx("div", { className: "w-2 h-2 rounded-full bg-border" }) }));
Ws.displayName = "InputOTPSeparator";
const Ys = U(
  "inline-flex items-center justify-center rounded border border-border bg-muted px-1.5 py-1 font-mono text-xs font-medium text-muted-foreground shadow-sm",
  {
    variants: {
      size: {
        sm: "h-5 min-w-[20px] text-[10px]",
        default: "h-6 min-w-[24px] text-xs",
        lg: "h-7 min-w-[28px] text-sm"
      }
    },
    defaultVariants: {
      size: "default"
    }
  }
), Us = a.forwardRef(
  ({ className: e, size: t, ...r }, s) => /* @__PURE__ */ o.jsx(
    "kbd",
    {
      ref: s,
      className: c(Ys({ size: t, className: e })),
      ...r
    }
  )
);
Us.displayName = "Kbd";
function zn({ open: e, onOpenChange: t, onConfirm: r }) {
  return /* @__PURE__ */ o.jsx(ms, { open: e, onOpenChange: t, children: /* @__PURE__ */ o.jsxs(Ot, { children: [
    /* @__PURE__ */ o.jsx(_t, { children: /* @__PURE__ */ o.jsxs("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ o.jsx("div", { className: "h-10 w-10 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center", children: /* @__PURE__ */ o.jsx(Eo, { className: "h-5 w-5 text-red-600 dark:text-red-400" }) }),
      /* @__PURE__ */ o.jsxs("div", { children: [
        /* @__PURE__ */ o.jsx(Dt, { children: "Confirm Logout" }),
        /* @__PURE__ */ o.jsx(It, { children: "Are you sure you want to logout? You will need to login again to access your account." })
      ] })
    ] }) }),
    /* @__PURE__ */ o.jsxs(Mt, { children: [
      /* @__PURE__ */ o.jsx(Lt, { children: "Cancel" }),
      /* @__PURE__ */ o.jsx(
        zt,
        {
          onClick: r,
          className: "bg-red-600 hover:bg-red-700 focus:ring-red-600",
          children: "Logout"
        }
      )
    ] })
  ] }) });
}
const qs = a.forwardRef(({ className: e, children: t, ...r }, s) => /* @__PURE__ */ o.jsx(
  "div",
  {
    ref: s,
    className: c("relative overflow-auto", e),
    ...r,
    children: t
  }
));
qs.displayName = "ScrollArea";
const Js = a.forwardRef(({ className: e, orientation: t = "vertical", ...r }, s) => /* @__PURE__ */ o.jsx(
  "div",
  {
    ref: s,
    className: c(
      "flex touch-none select-none transition-colors",
      t === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]",
      t === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]",
      e
    ),
    ...r,
    children: /* @__PURE__ */ o.jsx("div", { className: "relative flex-1 rounded-full bg-border" })
  }
));
Js.displayName = "ScrollBar";
const Xs = U(
  "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b",
        bottom: "inset-x-0 bottom-0 border-t",
        left: "inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
        right: "inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm"
      }
    },
    defaultVariants: {
      side: "right"
    }
  }
), Ne = a.createContext({
  open: !1,
  onOpenChange: () => {
  }
}), Ln = ({ open: e, onOpenChange: t, children: r }) => {
  const [s, n] = a.useState(!1), l = e !== void 0 ? e : s, i = t || n;
  return /* @__PURE__ */ o.jsx(Ne.Provider, { value: { open: l, onOpenChange: i }, children: r });
}, Ks = a.forwardRef(({ onClick: e, ...t }, r) => {
  const { onOpenChange: s } = a.useContext(Ne);
  return /* @__PURE__ */ o.jsx(
    "button",
    {
      ref: r,
      onClick: (n) => {
        s(!0), e?.(n);
      },
      ...t
    }
  );
});
Ks.displayName = "SheetTrigger";
const Zs = a.forwardRef(({ onClick: e, ...t }, r) => {
  const { onOpenChange: s } = a.useContext(Ne);
  return /* @__PURE__ */ o.jsx(
    "button",
    {
      ref: r,
      onClick: (n) => {
        s(!1), e?.(n);
      },
      ...t
    }
  );
});
Zs.displayName = "SheetClose";
const Qs = a.forwardRef(
  ({ side: e = "right", className: t, children: r, ...s }, n) => {
    const { open: l, onOpenChange: i } = a.useContext(Ne);
    return l ? /* @__PURE__ */ o.jsxs("div", { className: "fixed inset-0 z-50", children: [
      /* @__PURE__ */ o.jsx("div", { className: "fixed inset-0 bg-black/80", onClick: () => i(!1) }),
      /* @__PURE__ */ o.jsxs(
        "div",
        {
          ref: n,
          className: c(Xs({ side: e }), t),
          ...s,
          children: [
            r,
            /* @__PURE__ */ o.jsxs(
              "button",
              {
                onClick: () => i(!1),
                className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
                children: [
                  /* @__PURE__ */ o.jsx(At, { className: "h-4 w-4" }),
                  /* @__PURE__ */ o.jsx("span", { className: "sr-only", children: "Close" })
                ]
              }
            )
          ]
        }
      )
    ] }) : null;
  }
);
Qs.displayName = "SheetContent";
const en = ({ className: e, ...t }) => /* @__PURE__ */ o.jsx(
  "div",
  {
    className: c("flex flex-col space-y-2 text-center sm:text-left", e),
    ...t
  }
);
en.displayName = "SheetHeader";
const tn = ({ className: e, ...t }) => /* @__PURE__ */ o.jsx(
  "div",
  {
    className: c("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", e),
    ...t
  }
);
tn.displayName = "SheetFooter";
const rn = a.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ o.jsx(
  "h3",
  {
    ref: r,
    className: c("text-lg font-semibold text-foreground", e),
    ...t
  }
));
rn.displayName = "SheetTitle";
const on = a.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ o.jsx(
  "p",
  {
    ref: r,
    className: c("text-sm text-muted-foreground", e),
    ...t
  }
));
on.displayName = "SheetDescription";
function Vn({ title: e, description: t, variant: r = "default", onClose: s }) {
  return a.useEffect(() => {
    const n = setTimeout(() => {
      s?.();
    }, 5e3);
    return () => clearTimeout(n);
  }, [s]), /* @__PURE__ */ o.jsxs("div", { className: c(
    "fixed bottom-4 right-4 z-50 w-full max-w-sm rounded-lg border p-4 shadow-lg",
    {
      "bg-background border-border": r === "default",
      "bg-destructive text-destructive-foreground border-destructive": r === "destructive",
      "bg-green-500 text-white border-green-600": r === "success"
    }
  ), children: [
    e && /* @__PURE__ */ o.jsx("div", { className: "font-semibold", children: e }),
    t && /* @__PURE__ */ o.jsx("div", { className: "text-sm opacity-90", children: t }),
    /* @__PURE__ */ o.jsx(
      "button",
      {
        onClick: s,
        className: "absolute top-2 right-2 text-xs opacity-70 hover:opacity-100",
        children: "×"
      }
    )
  ] });
}
const sn = ["love", "life", "happiness", "technology", "travel", "food", "music", "art", "nature", "friendship"];
function Fn({ value: e, onChange: t, placeholder: r = "Type to search or create tags...", className: s }) {
  const [n, l] = ue(""), [i, u] = ue(!1), m = Kt(null), f = sn.filter(
    (p) => !e.includes(p) && p.toLowerCase().includes(n.toLowerCase())
  ), b = (p) => {
    p && !e.includes(p) && t([...e, p]), l(""), u(!1);
  }, R = (p) => {
    t(e.filter((v) => v !== p));
  }, S = (p) => {
    p.key === "Enter" && n.trim() && (p.preventDefault(), b(n.trim())), p.key === "Backspace" && !n && e.length > 0 && R(e[e.length - 1]);
  };
  return st(() => {
    const p = (v) => {
      m.current && !m.current.parentElement?.contains(v.target) && u(!1);
    };
    return document.addEventListener("mousedown", p), () => document.removeEventListener("mousedown", p);
  }, []), /* @__PURE__ */ o.jsxs("div", { className: c("relative", s), children: [
    /* @__PURE__ */ o.jsxs("div", { className: "flex flex-wrap gap-2 p-2 border rounded-md min-h-[40px] focus-within:ring-2 focus-within:ring-ring", children: [
      e.map((p) => /* @__PURE__ */ o.jsxs(Qr, { variant: "secondary", className: "flex items-center gap-1", children: [
        p,
        /* @__PURE__ */ o.jsx(
          At,
          {
            className: "h-3 w-3 cursor-pointer hover:text-destructive",
            onClick: () => R(p)
          }
        )
      ] }, p)),
      /* @__PURE__ */ o.jsx(
        Oe,
        {
          ref: m,
          value: n,
          onChange: (p) => {
            l(p.target.value), u(!0);
          },
          onFocus: () => u(!0),
          onKeyDown: S,
          placeholder: e.length === 0 ? r : "",
          className: "border-0 shadow-none focus-visible:ring-0 flex-1 min-w-[120px] p-0"
        }
      )
    ] }),
    i && (n || f.length > 0) && /* @__PURE__ */ o.jsxs("div", { className: "absolute top-full z-50 mt-1 w-full bg-background border rounded-md shadow-md max-h-60 overflow-auto", children: [
      n && !e.includes(n.trim()) && n.trim() && /* @__PURE__ */ o.jsxs(
        "div",
        {
          className: "flex items-center gap-2 p-2 hover:bg-accent cursor-pointer",
          onMouseDown: (p) => {
            p.preventDefault(), b(n.trim());
          },
          children: [
            /* @__PURE__ */ o.jsx(_o, { className: "h-4 w-4" }),
            'Create "',
            n.trim(),
            '"'
          ]
        }
      ),
      f.map((p) => /* @__PURE__ */ o.jsx(
        "div",
        {
          className: "p-2 hover:bg-accent cursor-pointer",
          onMouseDown: (v) => {
            v.preventDefault(), b(p);
          },
          children: p
        },
        p
      ))
    ] })
  ] });
}
const nn = U(
  "flex items-center justify-center gap-1",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline: "border border-input bg-transparent"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
), an = U(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline: "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground"
      },
      size: {
        default: "h-10 px-3",
        sm: "h-9 px-2.5",
        lg: "h-11 px-5"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), qt = a.createContext({
  value: "",
  onValueChange: () => {
  },
  type: "single"
}), ln = a.forwardRef(
  ({ className: e, variant: t, type: r, value: s, onValueChange: n, ...l }, i) => /* @__PURE__ */ o.jsx(qt.Provider, { value: { value: s, onValueChange: n, type: r }, children: /* @__PURE__ */ o.jsx(
    "div",
    {
      ref: i,
      className: c(nn({ variant: t, className: e })),
      ...l
    }
  ) })
);
ln.displayName = "ToggleGroup";
const cn = a.forwardRef(
  ({ className: e, variant: t, size: r, value: s, onClick: n, ...l }, i) => {
    const { value: u, onValueChange: m, type: f } = a.useContext(qt), b = f === "single" ? u === s : Array.isArray(u) && u.includes(s), R = (S) => {
      if (f === "single")
        m(b ? "" : s);
      else {
        const p = Array.isArray(u) ? u : [];
        m(b ? p.filter((v) => v !== s) : [...p, s]);
      }
      n?.(S);
    };
    return /* @__PURE__ */ o.jsx(
      "button",
      {
        ref: i,
        className: c(an({ variant: t, size: r, className: e })),
        "data-state": b ? "on" : "off",
        onClick: R,
        ...l
      }
    );
  }
);
cn.displayName = "ToggleGroupItem";
const dn = a.forwardRef(
  ({ className: e, children: t, ...r }, s) => /* @__PURE__ */ o.jsx(
    "header",
    {
      ref: s,
      className: c(
        "sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
        e
      ),
      ...r,
      children: t
    }
  )
);
dn.displayName = "Header";
const un = a.forwardRef(
  ({ className: e, children: t, ...r }, s) => /* @__PURE__ */ o.jsx(
    "div",
    {
      ref: s,
      className: c(
        "flex h-full w-64 flex-col border-r bg-background",
        e
      ),
      ...r,
      children: t
    }
  )
);
un.displayName = "Sidebar";
const mn = a.forwardRef(
  ({ className: e, children: t, ...r }, s) => /* @__PURE__ */ o.jsx(
    "footer",
    {
      ref: s,
      className: c(
        "border-t bg-background px-6 py-4 text-sm text-muted-foreground",
        e
      ),
      ...r,
      children: t
    }
  )
);
mn.displayName = "Footer";
const fn = a.forwardRef(
  ({ className: e, children: t, ...r }, s) => /* @__PURE__ */ o.jsx(
    "nav",
    {
      ref: s,
      className: c("flex items-center space-x-4", e),
      ...r,
      children: t
    }
  )
);
fn.displayName = "Navigation";
const pn = a.forwardRef(
  ({ className: e, children: t, active: r, ...s }, n) => /* @__PURE__ */ o.jsx(
    "a",
    {
      ref: n,
      className: c(
        "px-3 py-2 text-sm font-medium transition-colors hover:text-foreground",
        r ? "text-foreground" : "text-muted-foreground",
        e
      ),
      ...s,
      children: t
    }
  )
);
pn.displayName = "NavItem";
const Jt = a.forwardRef(
  ({ className: e, size: t = "md", ...r }, s) => {
    const n = {
      sm: "h-4 w-4",
      md: "h-6 w-6",
      lg: "h-8 w-8"
    };
    return /* @__PURE__ */ o.jsx(
      "div",
      {
        ref: s,
        className: c(
          "animate-spin rounded-full border-2 border-current border-t-transparent",
          n[t],
          e
        ),
        ...r
      }
    );
  }
);
Jt.displayName = "Spinner";
const gn = U(
  "relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        destructive: "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",
        success: "border-green-500/50 text-green-700 dark:text-green-400 [&>svg]:text-green-600",
        warning: "border-yellow-500/50 text-yellow-700 dark:text-yellow-400 [&>svg]:text-yellow-600"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
), xn = a.forwardRef(({ className: e, variant: t, ...r }, s) => /* @__PURE__ */ o.jsx(
  "div",
  {
    ref: s,
    role: "alert",
    className: c(gn({ variant: t }), e),
    ...r
  }
));
xn.displayName = "Alert";
const bn = a.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ o.jsx(
  "h5",
  {
    ref: r,
    className: c("mb-1 font-medium leading-none tracking-tight", e),
    ...t
  }
));
bn.displayName = "AlertTitle";
const hn = a.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ o.jsx(
  "div",
  {
    ref: r,
    className: c("text-sm [&_p]:leading-relaxed", e),
    ...t
  }
));
hn.displayName = "AlertDescription";
const vn = a.forwardRef(
  ({ className: e, text: t = "Loading...", size: r = "md", ...s }, n) => /* @__PURE__ */ o.jsxs(
    "div",
    {
      ref: n,
      className: c(
        "flex flex-col items-center justify-center gap-2 p-4",
        e
      ),
      ...s,
      children: [
        /* @__PURE__ */ o.jsx(Jt, { size: r }),
        t && /* @__PURE__ */ o.jsx("p", { className: "text-sm text-muted-foreground", children: t })
      ]
    }
  )
);
vn.displayName = "Loader";
function Gn() {
  const [e, t] = ue("system");
  return st(() => {
    const r = window.document.documentElement;
    if (r.classList.remove("light", "dark"), e === "system") {
      const s = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      r.classList.add(s);
    } else
      r.classList.add(e);
  }, [e]), { theme: e, setTheme: t };
}
function $n() {
  const [e, t] = ue([]), r = We(({ title: n, description: l, variant: i = "default" }) => {
    const u = Math.random().toString(36).substr(2, 9), m = { id: u, title: n, description: l, variant: i };
    return t((f) => [...f, m]), setTimeout(() => {
      t((f) => f.filter((b) => b.id !== u));
    }, 5e3), u;
  }, []), s = We((n) => {
    t((l) => l.filter((i) => i.id !== n));
  }, []);
  return { toasts: e, toast: r, dismiss: s };
}
function Bn(e, t) {
  const [r, s] = ue(() => {
    try {
      const l = window.localStorage.getItem(e);
      return l ? JSON.parse(l) : t;
    } catch {
      return t;
    }
  });
  return [r, (l) => {
    try {
      const i = l instanceof Function ? l(r) : l;
      s(i), window.localStorage.setItem(e, JSON.stringify(i));
    } catch (i) {
      console.error(i);
    }
  }];
}
function Hn(...e) {
  return e.filter(Boolean).join(" ");
}
function Wn(e, t = "USD") {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: t
  }).format(e);
}
function Yn(e, t = "short") {
  const r = new Date(e);
  return new Intl.DateTimeFormat("en-US", {
    dateStyle: t
  }).format(r);
}
export {
  is as Accordion,
  us as AccordionContent,
  cs as AccordionItem,
  ds as AccordionTrigger,
  xn as Alert,
  hn as AlertDescription,
  ms as AlertDialog,
  zt as AlertDialogAction,
  Lt as AlertDialogCancel,
  Ot as AlertDialogContent,
  It as AlertDialogDescription,
  Mt as AlertDialogFooter,
  _t as AlertDialogHeader,
  Dt as AlertDialogTitle,
  fs as AlertDialogTrigger,
  bn as AlertTitle,
  ps as AspectRatio,
  no as Avatar,
  lo as AvatarFallback,
  ao as AvatarImage,
  Qr as Badge,
  zo as Breadcrumb,
  Bo as BreadcrumbEllipsis,
  Vo as BreadcrumbItem,
  Fo as BreadcrumbLink,
  Lo as BreadcrumbList,
  Go as BreadcrumbPage,
  $o as BreadcrumbSeparator,
  Y as Button,
  Yt as Calendar,
  $r as Card,
  Wr as CardContent,
  Br as CardHeader,
  Hr as CardTitle,
  Ns as Carousel,
  ks as CarouselContent,
  js as CarouselItem,
  Rs as CarouselNext,
  Cs as CarouselPrevious,
  eo as Checkbox,
  Pn as Collapsible,
  xs as CollapsibleContent,
  gs as CollapsibleTrigger,
  On as Combobox,
  Ve as Command,
  En as CommandDialog,
  Gt as CommandEmpty,
  $t as CommandGroup,
  Vt as CommandInput,
  Bt as CommandItem,
  Ft as CommandList,
  bs as CommandSeparator,
  hs as CommandShortcut,
  _n as DataTable,
  Mn as DatePicker,
  Yr as Dialog,
  kt as DialogContent,
  Jr as DialogFooter,
  Ur as DialogHeader,
  qr as DialogTitle,
  Dn as Drawer,
  Ss as DrawerClose,
  As as DrawerContent,
  _s as DrawerDescription,
  Es as DrawerFooter,
  Ps as DrawerHeader,
  Os as DrawerTitle,
  Ts as DrawerTrigger,
  Ho as DropdownMenu,
  Et as DropdownMenuContent,
  Wo as DropdownMenuItem,
  Uo as DropdownMenuLabel,
  Yo as DropdownMenuSeparator,
  Pt as DropdownMenuTrigger,
  vs as Empty,
  mn as Footer,
  Ms as Form,
  zs as FormControl,
  Ls as FormDescription,
  Ds as FormItem,
  Is as FormLabel,
  Vs as FormMessage,
  dn as Header,
  In as HoverCard,
  Gs as HoverCardContent,
  Fs as HoverCardTrigger,
  Oe as Input,
  $s as InputOTP,
  Bs as InputOTPGroup,
  Ws as InputOTPSeparator,
  Hs as InputOTPSlot,
  Us as Kbd,
  jt as Label,
  vn as Loader,
  zn as LogoutModal,
  Nn as Modal,
  Cn as ModalContent,
  Rn as ModalFooter,
  kn as ModalHeader,
  jn as ModalTitle,
  pn as NavItem,
  fn as Navigation,
  qo as Pagination,
  Jo as PaginationContent,
  Qo as PaginationEllipsis,
  Xo as PaginationItem,
  Ie as PaginationLink,
  Zo as PaginationNext,
  Ko as PaginationPrevious,
  Ht as Popover,
  $e as PopoverContent,
  Ge as PopoverTrigger,
  os as Progress,
  ys as RadioGroup,
  ws as RadioGroupItem,
  qs as ScrollArea,
  Js as ScrollBar,
  Xr as Select,
  to as Separator,
  Ln as Sheet,
  Zs as SheetClose,
  Qs as SheetContent,
  on as SheetDescription,
  tn as SheetFooter,
  en as SheetHeader,
  rn as SheetTitle,
  Ks as SheetTrigger,
  un as Sidebar,
  Tn as Skeleton,
  ss as Slider,
  Jt as Spinner,
  es as Switch,
  vt as Table,
  wt as TableBody,
  Pe as TableCell,
  Nt as TableHead,
  yt as TableHeader,
  ve as TableRow,
  Sn as Tabs,
  so as TabsContent,
  ro as TabsList,
  oo as TabsTrigger,
  Fn as TagsSelect,
  Kr as Textarea,
  Vn as Toast,
  as as Toggle,
  ln as ToggleGroup,
  cn as ToggleGroupItem,
  An as Tooltip,
  rs as TooltipContent,
  ts as TooltipTrigger,
  Zr as badgeVariants,
  K as buttonVariants,
  c as cn,
  Wn as formatCurrency,
  Yn as formatDate,
  Ys as kbdVariants,
  Hn as mergeClass,
  ns as toggleVariants,
  Bn as useLocalStorage,
  Gn as useTheme,
  $n as useToast
};
