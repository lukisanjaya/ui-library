import * as a from "react";
import ir, { forwardRef as gt, createElement as ze, useState as B, useRef as cr, useEffect as $e, useCallback as ot } from "react";
import { createPortal as ht } from "react-dom";
var ye = { exports: {} }, ue = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nt;
function dr() {
  if (nt) return ue;
  nt = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function s(o, n, l) {
    var i = null;
    if (l !== void 0 && (i = "" + l), n.key !== void 0 && (i = "" + n.key), "key" in n) {
      l = {};
      for (var u in n)
        u !== "key" && (l[u] = n[u]);
    } else l = n;
    return n = l.ref, {
      $$typeof: e,
      type: o,
      key: i,
      ref: n !== void 0 ? n : null,
      props: l
    };
  }
  return ue.Fragment = t, ue.jsx = s, ue.jsxs = s, ue;
}
var me = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var at;
function ur() {
  return at || (at = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(d) {
      if (d == null) return null;
      if (typeof d == "function")
        return d.$$typeof === be ? null : d.displayName || d.name || null;
      if (typeof d == "string") return d;
      switch (d) {
        case A:
          return "Fragment";
        case ee:
          return "Profiler";
        case D:
          return "StrictMode";
        case L:
          return "Suspense";
        case Z:
          return "SuspenseList";
        case he:
          return "Activity";
      }
      if (typeof d == "object")
        switch (typeof d.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), d.$$typeof) {
          case v:
            return "Portal";
          case H:
            return d.displayName || "Context";
          case X:
            return (d._context.displayName || "Context") + ".Consumer";
          case U:
            var j = d.render;
            return d = d.displayName, d || (d = j.displayName || j.name || "", d = d !== "" ? "ForwardRef(" + d + ")" : "ForwardRef"), d;
          case N:
            return j = d.displayName || null, j !== null ? j : e(d.type) || "Memo";
          case O:
            j = d._payload, d = d._init;
            try {
              return e(d(j));
            } catch {
            }
        }
      return null;
    }
    function t(d) {
      return "" + d;
    }
    function s(d) {
      try {
        t(d);
        var j = !1;
      } catch {
        j = !0;
      }
      if (j) {
        j = console;
        var C = j.error, S = typeof Symbol == "function" && Symbol.toStringTag && d[Symbol.toStringTag] || d.constructor.name || "Object";
        return C.call(
          j,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          S
        ), t(d);
      }
    }
    function o(d) {
      if (d === A) return "<>";
      if (typeof d == "object" && d !== null && d.$$typeof === O)
        return "<...>";
      try {
        var j = e(d);
        return j ? "<" + j + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function n() {
      var d = W.A;
      return d === null ? null : d.getOwner();
    }
    function l() {
      return Error("react-stack-top-frame");
    }
    function i(d) {
      if (le.call(d, "key")) {
        var j = Object.getOwnPropertyDescriptor(d, "key").get;
        if (j && j.isReactWarning) return !1;
      }
      return d.key !== void 0;
    }
    function u(d, j) {
      function C() {
        E || (E = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          j
        ));
      }
      C.isReactWarning = !0, Object.defineProperty(d, "key", {
        get: C,
        configurable: !0
      });
    }
    function f() {
      var d = e(this.type);
      return I[d] || (I[d] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), d = this.props.ref, d !== void 0 ? d : null;
    }
    function p(d, j, C, S, V, te) {
      var R = C.ref;
      return d = {
        $$typeof: b,
        type: d,
        key: j,
        props: C,
        _owner: S
      }, (R !== void 0 ? R : null) !== null ? Object.defineProperty(d, "ref", {
        enumerable: !1,
        get: f
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
        value: V
      }), Object.defineProperty(d, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: te
      }), Object.freeze && (Object.freeze(d.props), Object.freeze(d)), d;
    }
    function h(d, j, C, S, V, te) {
      var R = j.children;
      if (R !== void 0)
        if (S)
          if (ie(R)) {
            for (S = 0; S < R.length; S++)
              w(R[S]);
            Object.freeze && Object.freeze(R);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else w(R);
      if (le.call(j, "key")) {
        R = e(d);
        var $ = Object.keys(j).filter(function(re) {
          return re !== "key";
        });
        S = 0 < $.length ? "{key: someKey, " + $.join(": ..., ") + ": ...}" : "{key: someKey}", de[R + S] || ($ = 0 < $.length ? "{" + $.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          S,
          R,
          $,
          R
        ), de[R + S] = !0);
      }
      if (R = null, C !== void 0 && (s(C), R = "" + C), i(j) && (s(j.key), R = "" + j.key), "key" in j) {
        C = {};
        for (var Y in j)
          Y !== "key" && (C[Y] = j[Y]);
      } else C = j;
      return R && u(
        C,
        typeof d == "function" ? d.displayName || d.name || "Unknown" : d
      ), p(
        d,
        R,
        C,
        n(),
        V,
        te
      );
    }
    function w(d) {
      _(d) ? d._store && (d._store.validated = 1) : typeof d == "object" && d !== null && d.$$typeof === O && (d._payload.status === "fulfilled" ? _(d._payload.value) && d._payload.value._store && (d._payload.value._store.validated = 1) : d._store && (d._store.validated = 1));
    }
    function _(d) {
      return typeof d == "object" && d !== null && d.$$typeof === b;
    }
    var m = ir, b = Symbol.for("react.transitional.element"), v = Symbol.for("react.portal"), A = Symbol.for("react.fragment"), D = Symbol.for("react.strict_mode"), ee = Symbol.for("react.profiler"), X = Symbol.for("react.consumer"), H = Symbol.for("react.context"), U = Symbol.for("react.forward_ref"), L = Symbol.for("react.suspense"), Z = Symbol.for("react.suspense_list"), N = Symbol.for("react.memo"), O = Symbol.for("react.lazy"), he = Symbol.for("react.activity"), be = Symbol.for("react.client.reference"), W = m.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, le = Object.prototype.hasOwnProperty, ie = Array.isArray, z = console.createTask ? console.createTask : function() {
      return null;
    };
    m = {
      react_stack_bottom_frame: function(d) {
        return d();
      }
    };
    var E, I = {}, y = m.react_stack_bottom_frame.bind(
      m,
      l
    )(), ce = z(o(l)), de = {};
    me.Fragment = A, me.jsx = function(d, j, C) {
      var S = 1e4 > W.recentlyCreatedOwnerStacks++;
      return h(
        d,
        j,
        C,
        !1,
        S ? Error("react-stack-top-frame") : y,
        S ? z(o(d)) : ce
      );
    }, me.jsxs = function(d, j, C) {
      var S = 1e4 > W.recentlyCreatedOwnerStacks++;
      return h(
        d,
        j,
        C,
        !0,
        S ? Error("react-stack-top-frame") : y,
        S ? z(o(d)) : ce
      );
    };
  })()), me;
}
var lt;
function mr() {
  return lt || (lt = 1, process.env.NODE_ENV === "production" ? ye.exports = dr() : ye.exports = ur()), ye.exports;
}
var r = mr();
function it(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function fr(...e) {
  return (t) => {
    let s = !1;
    const o = e.map((n) => {
      const l = it(n, t);
      return !s && typeof l == "function" && (s = !0), l;
    });
    if (s)
      return () => {
        for (let n = 0; n < o.length; n++) {
          const l = o[n];
          typeof l == "function" ? l() : it(e[n], null);
        }
      };
  };
}
// @__NO_SIDE_EFFECTS__
function pr(e) {
  const t = /* @__PURE__ */ xr(e), s = a.forwardRef((o, n) => {
    const { children: l, ...i } = o, u = a.Children.toArray(l), f = u.find(hr);
    if (f) {
      const p = f.props.children, h = u.map((w) => w === f ? a.Children.count(p) > 1 ? a.Children.only(null) : a.isValidElement(p) ? p.props.children : null : w);
      return /* @__PURE__ */ r.jsx(t, { ...i, ref: n, children: a.isValidElement(p) ? a.cloneElement(p, void 0, h) : null });
    }
    return /* @__PURE__ */ r.jsx(t, { ...i, ref: n, children: l });
  });
  return s.displayName = `${e}.Slot`, s;
}
var bt = /* @__PURE__ */ pr("Slot");
// @__NO_SIDE_EFFECTS__
function xr(e) {
  const t = a.forwardRef((s, o) => {
    const { children: n, ...l } = s;
    if (a.isValidElement(n)) {
      const i = vr(n), u = br(l, n.props);
      return n.type !== a.Fragment && (u.ref = o ? fr(o, i) : i), a.cloneElement(n, u);
    }
    return a.Children.count(n) > 1 ? a.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var gr = Symbol("radix.slottable");
function hr(e) {
  return a.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === gr;
}
function br(e, t) {
  const s = { ...t };
  for (const o in t) {
    const n = e[o], l = t[o];
    /^on[A-Z]/.test(o) ? n && l ? s[o] = (...u) => {
      const f = l(...u);
      return n(...u), f;
    } : n && (s[o] = n) : o === "style" ? s[o] = { ...n, ...l } : o === "className" && (s[o] = [n, l].filter(Boolean).join(" "));
  }
  return { ...e, ...s };
}
function vr(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, s = t && "isReactWarning" in t && t.isReactWarning;
  return s ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, s = t && "isReactWarning" in t && t.isReactWarning, s ? e.props.ref : e.props.ref || e.ref);
}
function vt(e) {
  var t, s, o = "";
  if (typeof e == "string" || typeof e == "number") o += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var n = e.length;
    for (t = 0; t < n; t++) e[t] && (s = vt(e[t])) && (o && (o += " "), o += s);
  } else for (s in e) e[s] && (o && (o += " "), o += s);
  return o;
}
function yt() {
  for (var e, t, s = 0, o = "", n = arguments.length; s < n; s++) (e = arguments[s]) && (t = vt(e)) && (o && (o += " "), o += t);
  return o;
}
const ct = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, dt = yt, J = (e, t) => (s) => {
  var o;
  if (t?.variants == null) return dt(e, s?.class, s?.className);
  const { variants: n, defaultVariants: l } = t, i = Object.keys(n).map((p) => {
    const h = s?.[p], w = l?.[p];
    if (h === null) return null;
    const _ = ct(h) || ct(w);
    return n[p][_];
  }), u = s && Object.entries(s).reduce((p, h) => {
    let [w, _] = h;
    return _ === void 0 || (p[w] = _), p;
  }, {}), f = t == null || (o = t.compoundVariants) === null || o === void 0 ? void 0 : o.reduce((p, h) => {
    let { class: w, className: _, ...m } = h;
    return Object.entries(m).every((b) => {
      let [v, A] = b;
      return Array.isArray(A) ? A.includes({
        ...l,
        ...u
      }[v]) : {
        ...l,
        ...u
      }[v] === A;
    }) ? [
      ...p,
      w,
      _
    ] : p;
  }, []);
  return dt(e, i, f, s?.class, s?.className);
}, Fe = "-", yr = (e) => {
  const t = Nr(e), {
    conflictingClassGroups: s,
    conflictingClassGroupModifiers: o
  } = e;
  return {
    getClassGroupId: (i) => {
      const u = i.split(Fe);
      return u[0] === "" && u.length !== 1 && u.shift(), wt(u, t) || wr(i);
    },
    getConflictingClassGroupIds: (i, u) => {
      const f = s[i] || [];
      return u && o[i] ? [...f, ...o[i]] : f;
    }
  };
}, wt = (e, t) => {
  if (e.length === 0)
    return t.classGroupId;
  const s = e[0], o = t.nextPart.get(s), n = o ? wt(e.slice(1), o) : void 0;
  if (n)
    return n;
  if (t.validators.length === 0)
    return;
  const l = e.join(Fe);
  return t.validators.find(({
    validator: i
  }) => i(l))?.classGroupId;
}, ut = /^\[(.+)\]$/, wr = (e) => {
  if (ut.test(e)) {
    const t = ut.exec(e)[1], s = t?.substring(0, t.indexOf(":"));
    if (s)
      return "arbitrary.." + s;
  }
}, Nr = (e) => {
  const {
    theme: t,
    classGroups: s
  } = e, o = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const n in s)
    Ie(s[n], o, n, t);
  return o;
}, Ie = (e, t, s, o) => {
  e.forEach((n) => {
    if (typeof n == "string") {
      const l = n === "" ? t : mt(t, n);
      l.classGroupId = s;
      return;
    }
    if (typeof n == "function") {
      if (jr(n)) {
        Ie(n(o), t, s, o);
        return;
      }
      t.validators.push({
        validator: n,
        classGroupId: s
      });
      return;
    }
    Object.entries(n).forEach(([l, i]) => {
      Ie(i, mt(t, l), s, o);
    });
  });
}, mt = (e, t) => {
  let s = e;
  return t.split(Fe).forEach((o) => {
    s.nextPart.has(o) || s.nextPart.set(o, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), s = s.nextPart.get(o);
  }), s;
}, jr = (e) => e.isThemeGetter, kr = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, s = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map();
  const n = (l, i) => {
    s.set(l, i), t++, t > e && (t = 0, o = s, s = /* @__PURE__ */ new Map());
  };
  return {
    get(l) {
      let i = s.get(l);
      if (i !== void 0)
        return i;
      if ((i = o.get(l)) !== void 0)
        return n(l, i), i;
    },
    set(l, i) {
      s.has(l) ? s.set(l, i) : n(l, i);
    }
  };
}, De = "!", Le = ":", Cr = Le.length, Rr = (e) => {
  const {
    prefix: t,
    experimentalParseClassName: s
  } = e;
  let o = (n) => {
    const l = [];
    let i = 0, u = 0, f = 0, p;
    for (let b = 0; b < n.length; b++) {
      let v = n[b];
      if (i === 0 && u === 0) {
        if (v === Le) {
          l.push(n.slice(f, b)), f = b + Cr;
          continue;
        }
        if (v === "/") {
          p = b;
          continue;
        }
      }
      v === "[" ? i++ : v === "]" ? i-- : v === "(" ? u++ : v === ")" && u--;
    }
    const h = l.length === 0 ? n : n.substring(f), w = Sr(h), _ = w !== h, m = p && p > f ? p - f : void 0;
    return {
      modifiers: l,
      hasImportantModifier: _,
      baseClassName: w,
      maybePostfixModifierPosition: m
    };
  };
  if (t) {
    const n = t + Le, l = o;
    o = (i) => i.startsWith(n) ? l(i.substring(n.length)) : {
      isExternal: !0,
      modifiers: [],
      hasImportantModifier: !1,
      baseClassName: i,
      maybePostfixModifierPosition: void 0
    };
  }
  if (s) {
    const n = o;
    o = (l) => s({
      className: l,
      parseClassName: n
    });
  }
  return o;
}, Sr = (e) => e.endsWith(De) ? e.substring(0, e.length - 1) : e.startsWith(De) ? e.substring(1) : e, Tr = (e) => {
  const t = Object.fromEntries(e.orderSensitiveModifiers.map((o) => [o, !0]));
  return (o) => {
    if (o.length <= 1)
      return o;
    const n = [];
    let l = [];
    return o.forEach((i) => {
      i[0] === "[" || t[i] ? (n.push(...l.sort(), i), l = []) : l.push(i);
    }), n.push(...l.sort()), n;
  };
}, _r = (e) => ({
  cache: kr(e.cacheSize),
  parseClassName: Rr(e),
  sortModifiers: Tr(e),
  ...yr(e)
}), Ar = /\s+/, Mr = (e, t) => {
  const {
    parseClassName: s,
    getClassGroupId: o,
    getConflictingClassGroupIds: n,
    sortModifiers: l
  } = t, i = [], u = e.trim().split(Ar);
  let f = "";
  for (let p = u.length - 1; p >= 0; p -= 1) {
    const h = u[p], {
      isExternal: w,
      modifiers: _,
      hasImportantModifier: m,
      baseClassName: b,
      maybePostfixModifierPosition: v
    } = s(h);
    if (w) {
      f = h + (f.length > 0 ? " " + f : f);
      continue;
    }
    let A = !!v, D = o(A ? b.substring(0, v) : b);
    if (!D) {
      if (!A) {
        f = h + (f.length > 0 ? " " + f : f);
        continue;
      }
      if (D = o(b), !D) {
        f = h + (f.length > 0 ? " " + f : f);
        continue;
      }
      A = !1;
    }
    const ee = l(_).join(":"), X = m ? ee + De : ee, H = X + D;
    if (i.includes(H))
      continue;
    i.push(H);
    const U = n(D, A);
    for (let L = 0; L < U.length; ++L) {
      const Z = U[L];
      i.push(X + Z);
    }
    f = h + (f.length > 0 ? " " + f : f);
  }
  return f;
};
function Pr() {
  let e = 0, t, s, o = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (s = Nt(t)) && (o && (o += " "), o += s);
  return o;
}
const Nt = (e) => {
  if (typeof e == "string")
    return e;
  let t, s = "";
  for (let o = 0; o < e.length; o++)
    e[o] && (t = Nt(e[o])) && (s && (s += " "), s += t);
  return s;
};
function Or(e, ...t) {
  let s, o, n, l = i;
  function i(f) {
    const p = t.reduce((h, w) => w(h), e());
    return s = _r(p), o = s.cache.get, n = s.cache.set, l = u, u(f);
  }
  function u(f) {
    const p = o(f);
    if (p)
      return p;
    const h = Mr(f, s);
    return n(f, h), h;
  }
  return function() {
    return l(Pr.apply(null, arguments));
  };
}
const P = (e) => {
  const t = (s) => s[e] || [];
  return t.isThemeGetter = !0, t;
}, jt = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, kt = /^\((?:(\w[\w-]*):)?(.+)\)$/i, Er = /^\d+\/\d+$/, zr = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Ir = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Dr = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, Lr = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Vr = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, se = (e) => Er.test(e), k = (e) => !!e && !Number.isNaN(Number(e)), q = (e) => !!e && Number.isInteger(Number(e)), Oe = (e) => e.endsWith("%") && k(e.slice(0, -1)), F = (e) => zr.test(e), $r = () => !0, Fr = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Ir.test(e) && !Dr.test(e)
), Ct = () => !1, Gr = (e) => Lr.test(e), Br = (e) => Vr.test(e), Hr = (e) => !x(e) && !g(e), Ur = (e) => ne(e, Tt, Ct), x = (e) => jt.test(e), K = (e) => ne(e, _t, Fr), Ee = (e) => ne(e, Xr, k), ft = (e) => ne(e, Rt, Ct), Wr = (e) => ne(e, St, Br), we = (e) => ne(e, At, Gr), g = (e) => kt.test(e), fe = (e) => ae(e, _t), Yr = (e) => ae(e, Zr), pt = (e) => ae(e, Rt), qr = (e) => ae(e, Tt), Jr = (e) => ae(e, St), Ne = (e) => ae(e, At, !0), ne = (e, t, s) => {
  const o = jt.exec(e);
  return o ? o[1] ? t(o[1]) : s(o[2]) : !1;
}, ae = (e, t, s = !1) => {
  const o = kt.exec(e);
  return o ? o[1] ? t(o[1]) : s : !1;
}, Rt = (e) => e === "position" || e === "percentage", St = (e) => e === "image" || e === "url", Tt = (e) => e === "length" || e === "size" || e === "bg-size", _t = (e) => e === "length", Xr = (e) => e === "number", Zr = (e) => e === "family-name", At = (e) => e === "shadow", Kr = () => {
  const e = P("color"), t = P("font"), s = P("text"), o = P("font-weight"), n = P("tracking"), l = P("leading"), i = P("breakpoint"), u = P("container"), f = P("spacing"), p = P("radius"), h = P("shadow"), w = P("inset-shadow"), _ = P("text-shadow"), m = P("drop-shadow"), b = P("blur"), v = P("perspective"), A = P("aspect"), D = P("ease"), ee = P("animate"), X = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], H = () => [
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
  ], U = () => [...H(), g, x], L = () => ["auto", "hidden", "clip", "visible", "scroll"], Z = () => ["auto", "contain", "none"], N = () => [g, x, f], O = () => [se, "full", "auto", ...N()], he = () => [q, "none", "subgrid", g, x], be = () => ["auto", {
    span: ["full", q, g, x]
  }, q, g, x], W = () => [q, "auto", g, x], le = () => ["auto", "min", "max", "fr", g, x], ie = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], z = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], E = () => ["auto", ...N()], I = () => [se, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...N()], y = () => [e, g, x], ce = () => [...H(), pt, ft, {
    position: [g, x]
  }], de = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], d = () => ["auto", "cover", "contain", qr, Ur, {
    size: [g, x]
  }], j = () => [Oe, fe, K], C = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    p,
    g,
    x
  ], S = () => ["", k, fe, K], V = () => ["solid", "dashed", "dotted", "double"], te = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], R = () => [k, Oe, pt, ft], $ = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    b,
    g,
    x
  ], Y = () => ["none", k, g, x], re = () => ["none", k, g, x], Pe = () => [k, g, x], ve = () => [se, "full", ...N()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [F],
      breakpoint: [F],
      color: [$r],
      container: [F],
      "drop-shadow": [F],
      ease: ["in", "out", "in-out"],
      font: [Hr],
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
        aspect: ["auto", "square", se, x, g, A]
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
        columns: [k, x, g, u]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": X()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": X()
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
        object: U()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: L()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": L()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": L()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: Z()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": Z()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": Z()
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
        z: [q, "auto", g, x]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [se, "full", "auto", u, ...N()]
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
        flex: [k, se, "auto", "initial", "none", x]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", k, g, x]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", k, g, x]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [q, "first", "last", "none", g, x]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": he()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: be()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": W()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": W()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": he()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: be()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": W()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": W()
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
        "auto-cols": le()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": le()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: N()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": N()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": N()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...ie(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...z(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...z()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...ie()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...z(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...z(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": ie()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...z(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...z()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: N()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: N()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: N()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: N()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: N()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: N()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: N()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: N()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: N()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: E()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: E()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: E()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: E()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: E()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: E()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: E()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: E()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: E()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": N()
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
        "space-y": N()
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
        size: I()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [u, "screen", ...I()]
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
          ...I()
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
          ...I()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...I()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...I()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...I()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", s, fe, K]
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
        font: [o, g, Ee]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Oe, x]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Yr, x, t]
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
        tracking: [n, g, x]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [k, "none", g, Ee]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          l,
          ...N()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", g, x]
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
        list: ["disc", "decimal", "none", g, x]
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
        placeholder: y()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: y()
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
        decoration: [...V(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [k, "from-font", "auto", g, K]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: y()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [k, "auto", g, x]
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
        indent: N()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", g, x]
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
        content: ["none", g, x]
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
        bg: ce()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: de()
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
          }, q, g, x],
          radial: ["", g, x],
          conic: [q, g, x]
        }, Jr, Wr]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: y()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: j()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: j()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: j()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: y()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: y()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: y()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: C()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": C()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": C()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": C()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": C()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": C()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": C()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": C()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": C()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": C()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": C()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": C()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": C()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": C()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": C()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: S()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": S()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": S()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": S()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": S()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": S()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": S()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": S()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": S()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": S()
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
        "divide-y": S()
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
        border: [...V(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...V(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: y()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": y()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": y()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": y()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": y()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": y()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": y()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": y()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": y()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: y()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...V(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [k, g, x]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", k, fe, K]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: y()
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
          h,
          Ne,
          we
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: y()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", w, Ne, we]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": y()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: S()
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
        ring: y()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [k, K]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": y()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": S()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": y()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", _, Ne, we]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": y()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [k, g, x]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...te(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": te()
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
        "mask-linear-from": R()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": R()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": y()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": y()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": R()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": R()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": y()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": y()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": R()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": R()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": y()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": y()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": R()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": R()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": y()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": y()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": R()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": R()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": y()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": y()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": R()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": R()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": y()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": y()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": R()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": R()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": y()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": y()
      }],
      "mask-image-radial": [{
        "mask-radial": [g, x]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": R()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": R()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": y()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": y()
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
        "mask-radial-at": H()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [k]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": R()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": R()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": y()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": y()
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
        mask: ce()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: de()
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
        mask: ["none", g, x]
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
          g,
          x
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: $()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [k, g, x]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [k, g, x]
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
          m,
          Ne,
          we
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": y()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", k, g, x]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [k, g, x]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", k, g, x]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [k, g, x]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", k, g, x]
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
          g,
          x
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": $()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [k, g, x]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [k, g, x]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", k, g, x]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [k, g, x]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", k, g, x]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [k, g, x]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [k, g, x]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", k, g, x]
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
        "border-spacing": N()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": N()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": N()
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
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", g, x]
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
        duration: [k, "initial", g, x]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", D, g, x]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [k, g, x]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", ee, g, x]
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
        perspective: [v, g, x]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": U()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: Y()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": Y()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": Y()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": Y()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: re()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": re()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": re()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": re()
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
        skew: Pe()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": Pe()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": Pe()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [g, x, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: U()
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
        translate: ve()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": ve()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": ve()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": ve()
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
        accent: y()
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
        caret: y()
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", g, x]
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
        "scroll-m": N()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": N()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": N()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": N()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": N()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": N()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": N()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": N()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": N()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": N()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": N()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": N()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": N()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": N()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": N()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": N()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": N()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": N()
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
        "will-change": ["auto", "scroll", "contents", "transform", g, x]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...y()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [k, fe, K, Ee]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...y()]
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
}, Qr = /* @__PURE__ */ Or(Kr);
function c(...e) {
  return Qr(yt(e));
}
const Q = J(
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
), M = a.forwardRef(
  ({ className: e, variant: t, size: s, asChild: o = !1, ...n }, l) => {
    const i = o ? bt : "button";
    return /* @__PURE__ */ r.jsx(
      i,
      {
        className: c(Q({ variant: t, size: s, className: e })),
        ref: l,
        ...n
      }
    );
  }
);
M.displayName = "Button";
const es = a.forwardRef(({ className: e, ...t }, s) => /* @__PURE__ */ r.jsx(
  "div",
  {
    ref: s,
    className: c(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      e
    ),
    ...t
  }
));
es.displayName = "Card";
const ts = a.forwardRef(({ className: e, ...t }, s) => /* @__PURE__ */ r.jsx(
  "div",
  {
    ref: s,
    className: c("flex flex-col space-y-1.5 p-6", e),
    ...t
  }
));
ts.displayName = "CardHeader";
const rs = a.forwardRef(({ className: e, ...t }, s) => /* @__PURE__ */ r.jsx(
  "h3",
  {
    ref: s,
    className: c(
      "text-2xl font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
rs.displayName = "CardTitle";
const ss = a.forwardRef(({ className: e, ...t }, s) => /* @__PURE__ */ r.jsx("div", { ref: s, className: c("p-6 pt-0", e), ...t }));
ss.displayName = "CardContent";
const Ge = a.forwardRef(
  ({ className: e, type: t, ...s }, o) => /* @__PURE__ */ r.jsx(
    "input",
    {
      type: t,
      className: c(
        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ref: o,
      ...s
    }
  )
);
Ge.displayName = "Input";
const ca = ({ isOpen: e, onClose: t, children: s, className: o }) => e ? /* @__PURE__ */ r.jsxs("div", { className: "fixed inset-0 z-50 flex items-center justify-center", children: [
  /* @__PURE__ */ r.jsx(
    "div",
    {
      className: "fixed inset-0 bg-black/50",
      onClick: t
    }
  ),
  /* @__PURE__ */ r.jsx(
    "div",
    {
      className: c(
        "relative z-10 w-full max-w-md rounded-lg bg-background p-6 shadow-lg",
        o
      ),
      children: s
    }
  )
] }) : null, da = ({ children: e, className: t }) => /* @__PURE__ */ r.jsx("div", { className: c("mb-4", t), children: e }), ua = ({ children: e, className: t }) => /* @__PURE__ */ r.jsx("h2", { className: c("text-lg font-semibold", t), children: e }), ma = ({ children: e, className: t }) => /* @__PURE__ */ r.jsx("div", { className: c("mb-4", t), children: e }), fa = ({ children: e, className: t }) => /* @__PURE__ */ r.jsx("div", { className: c("flex justify-end gap-2", t), children: e }), Mt = a.forwardRef(({ className: e, ...t }, s) => /* @__PURE__ */ r.jsx("div", { className: "relative w-full overflow-auto", children: /* @__PURE__ */ r.jsx(
  "table",
  {
    ref: s,
    className: c("w-full caption-bottom text-sm", e),
    ...t
  }
) }));
Mt.displayName = "Table";
const Pt = a.forwardRef(({ className: e, ...t }, s) => /* @__PURE__ */ r.jsx("thead", { ref: s, className: c("[&_tr]:border-b", e), ...t }));
Pt.displayName = "TableHeader";
const Ot = a.forwardRef(({ className: e, ...t }, s) => /* @__PURE__ */ r.jsx(
  "tbody",
  {
    ref: s,
    className: c("[&_tr:last-child]:border-0", e),
    ...t
  }
));
Ot.displayName = "TableBody";
const je = a.forwardRef(({ className: e, ...t }, s) => /* @__PURE__ */ r.jsx(
  "tr",
  {
    ref: s,
    className: c(
      "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
      e
    ),
    ...t
  }
));
je.displayName = "TableRow";
const Et = a.forwardRef(({ className: e, ...t }, s) => /* @__PURE__ */ r.jsx(
  "th",
  {
    ref: s,
    className: c(
      "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
      e
    ),
    ...t
  }
));
Et.displayName = "TableHead";
const Ve = a.forwardRef(({ className: e, ...t }, s) => /* @__PURE__ */ r.jsx(
  "td",
  {
    ref: s,
    className: c("p-4 align-middle [&:has([role=checkbox])]:pr-0", e),
    ...t
  }
));
Ve.displayName = "TableCell";
const os = ({ open: e, onOpenChange: t, children: s }) => e ? /* @__PURE__ */ r.jsxs("div", { className: "fixed inset-0 z-50 flex items-center justify-center", children: [
  /* @__PURE__ */ r.jsx(
    "div",
    {
      className: "fixed inset-0 bg-black/50",
      onClick: () => t(!1)
    }
  ),
  /* @__PURE__ */ r.jsx("div", { className: "relative z-10", children: s })
] }) : null, zt = a.forwardRef(({ className: e, children: t, ...s }, o) => /* @__PURE__ */ r.jsx(
  "div",
  {
    ref: o,
    className: c(
      "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 sm:rounded-lg",
      e
    ),
    ...s,
    children: t
  }
));
zt.displayName = "DialogContent";
const ns = ({ className: e, ...t }) => /* @__PURE__ */ r.jsx(
  "div",
  {
    className: c("flex flex-col space-y-1.5 text-center sm:text-left", e),
    ...t
  }
);
ns.displayName = "DialogHeader";
const as = a.forwardRef(({ className: e, ...t }, s) => /* @__PURE__ */ r.jsx(
  "h3",
  {
    ref: s,
    className: c("text-lg font-semibold leading-none tracking-tight", e),
    ...t
  }
));
as.displayName = "DialogTitle";
const ls = ({ className: e, ...t }) => /* @__PURE__ */ r.jsx(
  "div",
  {
    className: c("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", e),
    ...t
  }
);
ls.displayName = "DialogFooter";
const It = a.forwardRef(
  ({ className: e, ...t }, s) => /* @__PURE__ */ r.jsx(
    "label",
    {
      ref: s,
      className: c(
        "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
        e
      ),
      ...t
    }
  )
);
It.displayName = "Label";
const is = a.forwardRef(
  ({ className: e, children: t, ...s }, o) => /* @__PURE__ */ r.jsx(
    "select",
    {
      className: c(
        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ref: o,
      ...s,
      children: t
    }
  )
);
is.displayName = "Select";
const cs = a.forwardRef(
  ({ className: e, ...t }, s) => /* @__PURE__ */ r.jsx(
    "textarea",
    {
      className: c(
        "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ref: s,
      ...t
    }
  )
);
cs.displayName = "Textarea";
const ds = J(
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
function Ce({ className: e, variant: t, ...s }) {
  return /* @__PURE__ */ r.jsx("div", { className: c(ds({ variant: t }), e), ...s });
}
const us = a.forwardRef(
  ({ className: e, ...t }, s) => /* @__PURE__ */ r.jsx(
    "input",
    {
      type: "checkbox",
      className: c(
        "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ref: s,
      ...t
    }
  )
);
us.displayName = "Checkbox";
const ms = a.forwardRef(
  ({ className: e, orientation: t = "horizontal", ...s }, o) => /* @__PURE__ */ r.jsx(
    "div",
    {
      ref: o,
      className: c(
        "shrink-0 bg-border",
        t === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        e
      ),
      ...s
    }
  )
);
ms.displayName = "Separator";
function pa({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ r.jsx(
    "div",
    {
      className: c("animate-pulse rounded-md bg-muted", e),
      ...t
    }
  );
}
const Be = a.createContext(void 0), xa = ({ value: e, onValueChange: t, children: s, className: o }) => /* @__PURE__ */ r.jsx(Be.Provider, { value: { value: e, onValueChange: t }, children: /* @__PURE__ */ r.jsx("div", { className: c("w-full", o), children: s }) }), fs = a.forwardRef(({ className: e, ...t }, s) => /* @__PURE__ */ r.jsx(
  "div",
  {
    ref: s,
    className: c(
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
      e
    ),
    ...t
  }
));
fs.displayName = "TabsList";
const ps = a.forwardRef(
  ({ className: e, value: t, ...s }, o) => {
    const n = a.useContext(Be), l = n?.value === t;
    return /* @__PURE__ */ r.jsx(
      "button",
      {
        ref: o,
        className: c(
          "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          l && "bg-background text-foreground shadow-sm",
          e
        ),
        onClick: () => n?.onValueChange(t),
        ...s
      }
    );
  }
);
ps.displayName = "TabsTrigger";
const xs = a.forwardRef(
  ({ className: e, value: t, ...s }, o) => a.useContext(Be)?.value !== t ? null : /* @__PURE__ */ r.jsx(
    "div",
    {
      ref: o,
      className: c(
        "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        e
      ),
      ...s
    }
  )
);
xs.displayName = "TabsContent";
const gs = a.forwardRef(
  ({ className: e, ...t }, s) => /* @__PURE__ */ r.jsx(
    "div",
    {
      ref: s,
      className: c(
        "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
        e
      ),
      ...t
    }
  )
);
gs.displayName = "Avatar";
const hs = a.forwardRef(
  ({ className: e, ...t }, s) => /* @__PURE__ */ r.jsx(
    "img",
    {
      ref: s,
      className: c("aspect-square h-full w-full", e),
      ...t
    }
  )
);
hs.displayName = "AvatarImage";
const bs = a.forwardRef(
  ({ className: e, ...t }, s) => /* @__PURE__ */ r.jsx(
    "div",
    {
      ref: s,
      className: c(
        "flex h-full w-full items-center justify-center rounded-full bg-muted",
        e
      ),
      ...t
    }
  )
);
bs.displayName = "AvatarFallback";
/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vs = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), ys = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, s, o) => o ? o.toUpperCase() : s.toLowerCase()
), xt = (e) => {
  const t = ys(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, Dt = (...e) => e.filter((t, s, o) => !!t && t.trim() !== "" && o.indexOf(t) === s).join(" ").trim(), ws = (e) => {
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
var Ns = {
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
const js = gt(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: s = 2,
    absoluteStrokeWidth: o,
    className: n = "",
    children: l,
    iconNode: i,
    ...u
  }, f) => ze(
    "svg",
    {
      ref: f,
      ...Ns,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: o ? Number(s) * 24 / Number(t) : s,
      className: Dt("lucide", n),
      ...!l && !ws(u) && { "aria-hidden": "true" },
      ...u
    },
    [
      ...i.map(([p, h]) => ze(p, h)),
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
const T = (e, t) => {
  const s = gt(
    ({ className: o, ...n }, l) => ze(js, {
      ref: l,
      iconNode: t,
      className: Dt(
        `lucide-${vs(xt(e))}`,
        `lucide-${e}`,
        o
      ),
      ...n
    })
  );
  return s.displayName = xt(e), s;
};
/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ks = [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
], Cs = T("arrow-left", ks);
/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rs = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
], Ss = T("arrow-right", Rs);
/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ts = [
  ["path", { d: "M10.268 21a2 2 0 0 0 3.464 0", key: "vwvbt9" }],
  [
    "path",
    {
      d: "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",
      key: "11g9vi"
    }
  ]
], _s = T("bell", Ts);
/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const As = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }]
], Ms = T("calendar", As);
/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ps = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], Lt = T("check", Ps);
/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Os = [
  [
    "path",
    {
      d: "M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z",
      key: "1qvrer"
    }
  ],
  ["path", { d: "M6 17h12", key: "1jwigz" }]
], Es = T("chef-hat", Os);
/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zs = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], Re = T("chevron-down", zs);
/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Is = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], Vt = T("chevron-left", Is);
/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ds = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], Te = T("chevron-right", Ds);
/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ls = [
  ["path", { d: "m7 15 5 5 5-5", key: "1hf1tw" }],
  ["path", { d: "m7 9 5-5 5 5", key: "sgt6xg" }]
], Vs = T("chevrons-up-down", Ls);
/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $s = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
  ["path", { d: "M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662", key: "154egf" }]
], Fs = T("circle-user", $s);
/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gs = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]], Bs = T("circle", Gs);
/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hs = [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "19", cy: "12", r: "1", key: "1wjl8i" }],
  ["circle", { cx: "5", cy: "12", r: "1", key: "1pcz8c" }]
], $t = T("ellipsis", Hs);
/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Us = [
  ["path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" }],
  [
    "path",
    {
      d: "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
      key: "r6nss1"
    }
  ]
], Ft = T("house", Us);
/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ws = [
  ["path", { d: "m16 17 5-5-5-5", key: "1bji2h" }],
  ["path", { d: "M21 12H9", key: "dn1m92" }],
  ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }]
], He = T("log-out", Ws);
/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ys = [
  ["path", { d: "M4 5h16", key: "1tepv9" }],
  ["path", { d: "M4 12h16", key: "1lakjw" }],
  ["path", { d: "M4 19h16", key: "1djgab" }]
], Gt = T("menu", Ys);
/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qs = [
  [
    "path",
    {
      d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",
      key: "1sd12s"
    }
  ]
], Js = T("message-circle", qs);
/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xs = [
  [
    "path",
    {
      d: "M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",
      key: "kfwtm"
    }
  ]
], Zs = T("moon", Xs);
/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ks = [
  [
    "path",
    {
      d: "M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",
      key: "1a0edw"
    }
  ],
  ["path", { d: "M12 22V12", key: "d0xqtd" }],
  ["polyline", { points: "3.29 7 12 12 20.71 7", key: "ousv84" }],
  ["path", { d: "m7.5 4.27 9 5.15", key: "1c824w" }]
], Qs = T("package", Ks);
/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const eo = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], to = T("plus", eo);
/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ro = [
  [
    "path",
    {
      d: "M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
      key: "rib7q0"
    }
  ],
  [
    "path",
    {
      d: "M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
      key: "1ymkrd"
    }
  ]
], so = T("quote", ro);
/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const oo = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
], no = T("search", oo);
/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ao = [
  [
    "path",
    {
      d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
      key: "1i5ecw"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], Ue = T("settings", ao);
/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lo = [
  ["circle", { cx: "8", cy: "21", r: "1", key: "jimo8o" }],
  ["circle", { cx: "19", cy: "21", r: "1", key: "13723u" }],
  [
    "path",
    {
      d: "M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",
      key: "9zh506"
    }
  ]
], io = T("shopping-cart", lo);
/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const co = [
  [
    "path",
    { d: "M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344", key: "2acyp4" }
  ],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
], uo = T("square-check-big", co);
/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mo = [
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
  ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
  ["path", { d: "M2 12h2", key: "1t8f8n" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }],
  ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
  ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }]
], fo = T("sun", mo);
/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const po = [
  [
    "path",
    {
      d: "M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",
      key: "vktsd0"
    }
  ],
  ["circle", { cx: "7.5", cy: "7.5", r: ".5", fill: "currentColor", key: "kqv944" }]
], xo = T("tag", po);
/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const go = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
], ho = T("trash-2", go);
/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bo = [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
], ke = T("user", bo);
/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vo = [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["path", { d: "M16 3.128a4 4 0 0 1 0 7.744", key: "16gr8j" }],
  ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }]
], yo = T("users", vo);
/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wo = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], We = T("x", wo);
/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const No = [
  [
    "path",
    {
      d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
      key: "1xq2db"
    }
  ]
], jo = T("zap", No), ko = a.forwardRef(({ ...e }, t) => /* @__PURE__ */ r.jsx("nav", { ref: t, "aria-label": "breadcrumb", ...e }));
ko.displayName = "Breadcrumb";
const Co = a.forwardRef(({ className: e, ...t }, s) => /* @__PURE__ */ r.jsx(
  "ol",
  {
    ref: s,
    className: c(
      "flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5",
      e
    ),
    ...t
  }
));
Co.displayName = "BreadcrumbList";
const Ro = a.forwardRef(({ className: e, ...t }, s) => /* @__PURE__ */ r.jsx(
  "li",
  {
    ref: s,
    className: c("inline-flex items-center gap-1.5", e),
    ...t
  }
));
Ro.displayName = "BreadcrumbItem";
const So = a.forwardRef(({ asChild: e, className: t, ...s }, o) => {
  const n = e ? bt : "a";
  return /* @__PURE__ */ r.jsx(
    n,
    {
      ref: o,
      className: c("transition-colors hover:text-foreground", t),
      ...s
    }
  );
});
So.displayName = "BreadcrumbLink";
const To = a.forwardRef(({ className: e, ...t }, s) => /* @__PURE__ */ r.jsx(
  "span",
  {
    ref: s,
    role: "link",
    "aria-disabled": "true",
    "aria-current": "page",
    className: c("font-normal text-foreground", e),
    ...t
  }
));
To.displayName = "BreadcrumbPage";
const _o = ({
  children: e,
  className: t,
  ...s
}) => /* @__PURE__ */ r.jsx(
  "li",
  {
    role: "presentation",
    "aria-hidden": "true",
    className: c("[&>svg]:size-3.5", t),
    ...s,
    children: e ?? /* @__PURE__ */ r.jsx(Te, {})
  }
);
_o.displayName = "BreadcrumbSeparator";
const Ao = ({
  className: e,
  ...t
}) => /* @__PURE__ */ r.jsxs(
  "span",
  {
    role: "presentation",
    "aria-hidden": "true",
    className: c("flex h-9 w-9 items-center justify-center", e),
    ...t,
    children: [
      /* @__PURE__ */ r.jsx($t, { className: "h-4 w-4" }),
      /* @__PURE__ */ r.jsx("span", { className: "sr-only", children: "More" })
    ]
  }
);
Ao.displayName = "BreadcrumbEllipsis";
const Ye = a.createContext({ isOpen: !1, setIsOpen: () => {
} }), Se = ({ children: e }) => {
  const [t, s] = a.useState(!1);
  return /* @__PURE__ */ r.jsx(Ye.Provider, { value: { isOpen: t, setIsOpen: s }, children: /* @__PURE__ */ r.jsxs("div", { className: "relative inline-block text-left", children: [
    e,
    t && ht(
      /* @__PURE__ */ r.jsx(
        "div",
        {
          className: "fixed inset-0 z-[99998]",
          onClick: () => s(!1)
        }
      ),
      document.body
    )
  ] }) });
}, pe = a.forwardRef(({ className: e, children: t, asChild: s, ...o }, n) => {
  const { setIsOpen: l } = a.useContext(Ye);
  if (s && a.isValidElement(t)) {
    const i = t.props;
    return a.cloneElement(t, {
      ...i,
      onClick: (u) => {
        i.onClick?.(u), l(!0);
      }
    });
  }
  return /* @__PURE__ */ r.jsx(
    "div",
    {
      ref: n,
      className: c("inline-flex items-center cursor-pointer", e),
      onClick: () => l(!0),
      ...o,
      children: t
    }
  );
});
pe.displayName = "DropdownMenuTrigger";
const xe = a.forwardRef(({ className: e, align: t = "start", side: s = "bottom", ...o }, n) => {
  const { isOpen: l } = a.useContext(Ye);
  if (!l) return null;
  const i = /* @__PURE__ */ r.jsx(
    "div",
    {
      ref: n,
      className: c(
        "fixed z-[99999] min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg",
        t === "end" ? "right-2 sm:right-4" : "left-2 sm:left-4",
        "top-16",
        e
      ),
      ...o
    }
  );
  return ht(i, document.body);
});
xe.displayName = "DropdownMenuContent";
const G = a.forwardRef(({ className: e, ...t }, s) => /* @__PURE__ */ r.jsx(
  "div",
  {
    ref: s,
    className: c(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground",
      e
    ),
    ...t
  }
));
G.displayName = "DropdownMenuItem";
const oe = a.forwardRef(({ className: e, ...t }, s) => /* @__PURE__ */ r.jsx(
  "div",
  {
    ref: s,
    className: c("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
oe.displayName = "DropdownMenuSeparator";
const Bt = a.forwardRef(({ className: e, ...t }, s) => /* @__PURE__ */ r.jsx(
  "div",
  {
    ref: s,
    className: c("px-2 py-1.5 text-sm font-semibold", e),
    ...t
  }
));
Bt.displayName = "DropdownMenuLabel";
const Mo = ({ className: e, ...t }) => /* @__PURE__ */ r.jsx(
  "nav",
  {
    role: "navigation",
    "aria-label": "pagination",
    className: c("mx-auto flex w-full justify-center", e),
    ...t
  }
);
Mo.displayName = "Pagination";
const Po = a.forwardRef(({ className: e, ...t }, s) => /* @__PURE__ */ r.jsx(
  "ul",
  {
    ref: s,
    className: c("flex flex-row items-center gap-1", e),
    ...t
  }
));
Po.displayName = "PaginationContent";
const Oo = a.forwardRef(({ className: e, ...t }, s) => /* @__PURE__ */ r.jsx("li", { ref: s, className: c("", e), ...t }));
Oo.displayName = "PaginationItem";
const qe = ({
  className: e,
  isActive: t,
  size: s = "icon",
  ...o
}) => /* @__PURE__ */ r.jsx(
  "a",
  {
    "aria-current": t ? "page" : void 0,
    className: c(
      Q({
        variant: t ? "outline" : "ghost",
        size: s
      }),
      e
    ),
    ...o
  }
);
qe.displayName = "PaginationLink";
const Eo = ({
  className: e,
  ...t
}) => /* @__PURE__ */ r.jsxs(
  qe,
  {
    "aria-label": "Go to previous page",
    size: "default",
    className: c("gap-1 pl-2.5", e),
    ...t,
    children: [
      /* @__PURE__ */ r.jsx(Vt, { className: "h-4 w-4" }),
      /* @__PURE__ */ r.jsx("span", { children: "Previous" })
    ]
  }
);
Eo.displayName = "PaginationPrevious";
const zo = ({
  className: e,
  ...t
}) => /* @__PURE__ */ r.jsxs(
  qe,
  {
    "aria-label": "Go to next page",
    size: "default",
    className: c("gap-1 pr-2.5", e),
    ...t,
    children: [
      /* @__PURE__ */ r.jsx("span", { children: "Next" }),
      /* @__PURE__ */ r.jsx(Te, { className: "h-4 w-4" })
    ]
  }
);
zo.displayName = "PaginationNext";
const Io = ({
  className: e,
  ...t
}) => /* @__PURE__ */ r.jsxs(
  "span",
  {
    "aria-hidden": !0,
    className: c("flex h-9 w-9 items-center justify-center", e),
    ...t,
    children: [
      /* @__PURE__ */ r.jsx($t, { className: "h-4 w-4" }),
      /* @__PURE__ */ r.jsx("span", { className: "sr-only", children: "More pages" })
    ]
  }
);
Io.displayName = "PaginationEllipsis";
const Do = a.forwardRef(
  ({ className: e, ...t }, s) => /* @__PURE__ */ r.jsxs("label", { className: "relative inline-flex items-center cursor-pointer", children: [
    /* @__PURE__ */ r.jsx(
      "input",
      {
        type: "checkbox",
        ref: s,
        className: "sr-only peer",
        ...t
      }
    ),
    /* @__PURE__ */ r.jsx("div", { className: c(
      "relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600",
      e
    ) })
  ] })
);
Do.displayName = "Switch";
const Je = a.createContext({ open: !1, onOpenChange: () => {
} }), ga = ({ children: e }) => {
  const [t, s] = a.useState(!1);
  return /* @__PURE__ */ r.jsx(Je.Provider, { value: { open: t, onOpenChange: s }, children: /* @__PURE__ */ r.jsx("div", { className: "relative inline-block", children: e }) });
}, Lo = a.forwardRef(
  ({ className: e, children: t, asChild: s, ...o }, n) => {
    const { onOpenChange: l } = a.useContext(Je);
    if (s && a.isValidElement(t)) {
      const i = t.props;
      return a.cloneElement(t, {
        ...i,
        onMouseEnter: () => l(!0),
        onMouseLeave: () => l(!1)
      });
    }
    return /* @__PURE__ */ r.jsx(
      "div",
      {
        ref: n,
        className: e,
        onMouseEnter: () => l(!0),
        onMouseLeave: () => l(!1),
        ...o,
        children: t
      }
    );
  }
);
Lo.displayName = "TooltipTrigger";
const Vo = a.forwardRef(
  ({ className: e, children: t, ...s }, o) => {
    const { open: n } = a.useContext(Je);
    return n ? /* @__PURE__ */ r.jsx(
      "div",
      {
        ref: o,
        className: c(
          "absolute bottom-full left-1/2 z-50 mb-2 -translate-x-1/2 rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md",
          e
        ),
        ...s,
        children: t
      }
    ) : null;
  }
);
Vo.displayName = "TooltipContent";
const $o = a.forwardRef(
  ({ className: e, value: t = 0, max: s = 100, ...o }, n) => /* @__PURE__ */ r.jsx(
    "div",
    {
      ref: n,
      className: c(
        "relative h-4 w-full overflow-hidden rounded-full bg-secondary",
        e
      ),
      ...o,
      children: /* @__PURE__ */ r.jsx(
        "div",
        {
          className: "h-full w-full flex-1 bg-primary transition-all",
          style: { transform: `translateX(-${100 - t / s * 100}%)` }
        }
      )
    }
  )
);
$o.displayName = "Progress";
const Fo = a.forwardRef(
  ({ className: e, ...t }, s) => /* @__PURE__ */ r.jsx(
    "input",
    {
      type: "range",
      ref: s,
      className: c(
        "flex h-6 w-full cursor-pointer appearance-none items-center rounded-lg bg-gray-200 outline-none dark:bg-gray-700 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:cursor-pointer",
        e
      ),
      ...t
    }
  )
);
Fo.displayName = "Slider";
const Go = J(
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
), Bo = a.forwardRef(
  ({ className: e, variant: t, size: s, pressed: o, onPressedChange: n, onClick: l, ...i }, u) => /* @__PURE__ */ r.jsx(
    "button",
    {
      ref: u,
      className: c(Go({ variant: t, size: s, className: e })),
      "data-state": o ? "on" : "off",
      onClick: (f) => {
        n?.(!o), l?.(f);
      },
      ...i
    }
  )
);
Bo.displayName = "Toggle";
const Ho = a.createContext({}), Uo = a.forwardRef(
  ({ className: e, type: t = "single", value: s, onValueChange: o, ...n }, l) => /* @__PURE__ */ r.jsx(Ho.Provider, { value: { value: s, onValueChange: o, type: t }, children: /* @__PURE__ */ r.jsx("div", { ref: l, className: c("space-y-2", e), ...n }) })
);
Uo.displayName = "Accordion";
const Wo = a.forwardRef(
  ({ className: e, ...t }, s) => /* @__PURE__ */ r.jsx("div", { ref: s, className: c("border-b", e), ...t })
);
Wo.displayName = "AccordionItem";
const Yo = a.forwardRef(
  ({ className: e, children: t, ...s }, o) => /* @__PURE__ */ r.jsxs(
    "button",
    {
      ref: o,
      className: c(
        "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
        e
      ),
      ...s,
      children: [
        t,
        /* @__PURE__ */ r.jsx(Re, { className: "h-4 w-4 shrink-0 transition-transform duration-200" })
      ]
    }
  )
);
Yo.displayName = "AccordionTrigger";
const qo = a.forwardRef(
  ({ className: e, children: t, ...s }, o) => /* @__PURE__ */ r.jsx(
    "div",
    {
      ref: o,
      className: c("overflow-hidden text-sm transition-all", e),
      ...s,
      children: /* @__PURE__ */ r.jsx("div", { className: "pb-4 pt-0", children: t })
    }
  )
);
qo.displayName = "AccordionContent";
const ge = a.createContext({
  open: !1,
  onOpenChange: () => {
  }
}), Jo = ({ children: e, open: t, onOpenChange: s }) => {
  const [o, n] = a.useState(!1), l = t !== void 0 ? t : o, i = s || n;
  return /* @__PURE__ */ r.jsx(ge.Provider, { value: { open: l, onOpenChange: i }, children: e });
}, Xo = a.forwardRef(({ children: e, onClick: t, ...s }, o) => {
  const { onOpenChange: n } = a.useContext(ge);
  return /* @__PURE__ */ r.jsx(
    "button",
    {
      ref: o,
      onClick: (l) => {
        n(!0), t?.(l);
      },
      ...s,
      children: e
    }
  );
});
Xo.displayName = "AlertDialogTrigger";
const Ht = a.forwardRef(({ className: e, ...t }, s) => {
  const { open: o } = a.useContext(ge);
  return o ? /* @__PURE__ */ r.jsxs("div", { className: "fixed inset-0 z-50 flex items-center justify-center", children: [
    /* @__PURE__ */ r.jsx("div", { className: "fixed inset-0 bg-black/80" }),
    /* @__PURE__ */ r.jsx(
      "div",
      {
        ref: s,
        className: c(
          "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 sm:rounded-lg",
          e
        ),
        ...t
      }
    )
  ] }) : null;
});
Ht.displayName = "AlertDialogContent";
const Ut = ({ className: e, ...t }) => /* @__PURE__ */ r.jsx(
  "div",
  {
    className: c("flex flex-col space-y-2 text-center sm:text-left", e),
    ...t
  }
);
Ut.displayName = "AlertDialogHeader";
const Wt = ({ className: e, ...t }) => /* @__PURE__ */ r.jsx(
  "div",
  {
    className: c("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", e),
    ...t
  }
);
Wt.displayName = "AlertDialogFooter";
const Yt = a.forwardRef(({ className: e, ...t }, s) => /* @__PURE__ */ r.jsx(
  "h3",
  {
    ref: s,
    className: c("text-lg font-semibold", e),
    ...t
  }
));
Yt.displayName = "AlertDialogTitle";
const qt = a.forwardRef(({ className: e, ...t }, s) => /* @__PURE__ */ r.jsx(
  "p",
  {
    ref: s,
    className: c("text-sm text-muted-foreground", e),
    ...t
  }
));
qt.displayName = "AlertDialogDescription";
const Jt = a.forwardRef(({ className: e, onClick: t, ...s }, o) => {
  const { onOpenChange: n } = a.useContext(ge);
  return /* @__PURE__ */ r.jsx(
    "button",
    {
      ref: o,
      className: c(Q(), e),
      onClick: (l) => {
        t?.(l), n(!1);
      },
      ...s
    }
  );
});
Jt.displayName = "AlertDialogAction";
const Xt = a.forwardRef(({ className: e, onClick: t, ...s }, o) => {
  const { onOpenChange: n } = a.useContext(ge);
  return /* @__PURE__ */ r.jsx(
    "button",
    {
      ref: o,
      className: c(Q({ variant: "outline" }), "mt-2 sm:mt-0", e),
      onClick: (l) => {
        t?.(l), n(!1);
      },
      ...s
    }
  );
});
Xt.displayName = "AlertDialogCancel";
const Zo = a.forwardRef(
  ({ ratio: e = 1, className: t, style: s, ...o }, n) => /* @__PURE__ */ r.jsx(
    "div",
    {
      ref: n,
      className: t,
      style: {
        position: "relative",
        width: "100%",
        paddingBottom: `${100 / e}%`,
        ...s
      },
      ...o
    }
  )
);
Zo.displayName = "AspectRatio";
const Xe = a.createContext({
  open: !1,
  onOpenChange: () => {
  }
}), ha = ({ open: e, onOpenChange: t, children: s }) => {
  const [o, n] = a.useState(!1), l = e !== void 0 ? e : o, i = t || n;
  return /* @__PURE__ */ r.jsx(Xe.Provider, { value: { open: l, onOpenChange: i }, children: s });
}, Ko = a.forwardRef(({ onClick: e, ...t }, s) => {
  const { onOpenChange: o, open: n } = a.useContext(Xe);
  return /* @__PURE__ */ r.jsx(
    "button",
    {
      ref: s,
      onClick: (l) => {
        o(!n), e?.(l);
      },
      ...t
    }
  );
});
Ko.displayName = "CollapsibleTrigger";
const Qo = a.forwardRef(({ className: e, ...t }, s) => {
  const { open: o } = a.useContext(Xe);
  return o ? /* @__PURE__ */ r.jsx("div", { ref: s, className: e, ...t }) : null;
});
Qo.displayName = "CollapsibleContent";
const Ze = a.forwardRef(({ className: e, ...t }, s) => /* @__PURE__ */ r.jsx(
  "div",
  {
    ref: s,
    className: c(
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
      e
    ),
    ...t
  }
));
Ze.displayName = "Command";
const ba = ({ children: e, open: t = !1, onOpenChange: s = () => {
} }) => /* @__PURE__ */ r.jsx(os, { open: t, onOpenChange: s, children: /* @__PURE__ */ r.jsx(zt, { className: "overflow-hidden p-0 shadow-lg", children: /* @__PURE__ */ r.jsx(Ze, { children: e }) }) }), Zt = a.forwardRef(({ className: e, ...t }, s) => /* @__PURE__ */ r.jsxs("div", { className: "flex items-center border-b px-3", children: [
  /* @__PURE__ */ r.jsx(no, { className: "mr-2 h-4 w-4 shrink-0 opacity-50" }),
  /* @__PURE__ */ r.jsx(
    "input",
    {
      ref: s,
      className: c(
        "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ...t
    }
  )
] }));
Zt.displayName = "CommandInput";
const Kt = a.forwardRef(({ className: e, ...t }, s) => /* @__PURE__ */ r.jsx(
  "div",
  {
    ref: s,
    className: c("max-h-[300px] overflow-y-auto overflow-x-hidden", e),
    ...t
  }
));
Kt.displayName = "CommandList";
const Qt = a.forwardRef(({ ...e }, t) => /* @__PURE__ */ r.jsx(
  "div",
  {
    ref: t,
    className: "py-6 text-center text-sm",
    ...e
  }
));
Qt.displayName = "CommandEmpty";
const er = a.forwardRef(({ className: e, ...t }, s) => /* @__PURE__ */ r.jsx(
  "div",
  {
    ref: s,
    className: c(
      "overflow-hidden p-1 text-foreground",
      e
    ),
    ...t
  }
));
er.displayName = "CommandGroup";
const en = a.forwardRef(({ className: e, ...t }, s) => /* @__PURE__ */ r.jsx(
  "div",
  {
    ref: s,
    className: c("-mx-1 h-px bg-border", e),
    ...t
  }
));
en.displayName = "CommandSeparator";
const tr = a.forwardRef(({ className: e, value: t, onSelect: s, onClick: o, ...n }, l) => /* @__PURE__ */ r.jsx(
  "div",
  {
    ref: l,
    className: c(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-accent hover:text-accent-foreground",
      e
    ),
    onClick: (i) => {
      t && s && s(t), o?.(i);
    },
    ...n
  }
));
tr.displayName = "CommandItem";
const tn = ({
  className: e,
  ...t
}) => /* @__PURE__ */ r.jsx(
  "span",
  {
    className: c(
      "ml-auto text-xs tracking-widest text-muted-foreground",
      e
    ),
    ...t
  }
);
tn.displayName = "CommandShortcut";
const rn = a.forwardRef(
  ({ className: e, title: t, description: s, icon: o, action: n, children: l, ...i }, u) => /* @__PURE__ */ r.jsxs(
    "div",
    {
      ref: u,
      className: c(
        "flex min-h-[400px] flex-col items-center justify-center rounded-md border border-dashed p-8 text-center animate-in fade-in-50",
        e
      ),
      ...i,
      children: [
        /* @__PURE__ */ r.jsx("div", { className: "mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-muted", children: o || /* @__PURE__ */ r.jsx(
          "svg",
          {
            className: "h-10 w-10 text-muted-foreground",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            children: /* @__PURE__ */ r.jsx(
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
        /* @__PURE__ */ r.jsxs("div", { className: "mx-auto max-w-[420px] text-center", children: [
          /* @__PURE__ */ r.jsx("h3", { className: "mt-4 text-lg font-semibold", children: t || "No data found" }),
          /* @__PURE__ */ r.jsx("p", { className: "mb-4 mt-2 text-sm text-muted-foreground", children: s || "There are no items to display at the moment." }),
          n
        ] }),
        l
      ]
    }
  )
);
rn.displayName = "Empty";
const Ke = a.createContext({
  open: !1,
  onOpenChange: () => {
  }
}), rr = ({ open: e, onOpenChange: t, children: s }) => {
  const [o, n] = a.useState(!1), l = e !== void 0 ? e : o, i = t || n;
  return /* @__PURE__ */ r.jsx(Ke.Provider, { value: { open: l, onOpenChange: i }, children: /* @__PURE__ */ r.jsx("div", { className: "relative", children: s }) });
}, Qe = a.forwardRef(({ onClick: e, ...t }, s) => {
  const { onOpenChange: o, open: n } = a.useContext(Ke);
  return /* @__PURE__ */ r.jsx(
    "button",
    {
      ref: s,
      onClick: (l) => {
        o(!n), e?.(l);
      },
      ...t
    }
  );
});
Qe.displayName = "PopoverTrigger";
const et = a.forwardRef(({ className: e, align: t = "center", sideOffset: s = 4, ...o }, n) => {
  const { open: l } = a.useContext(Ke);
  return l ? /* @__PURE__ */ r.jsx(
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
      style: { marginTop: s },
      ...o
    }
  ) : null;
});
et.displayName = "PopoverContent";
const sr = a.createContext({}), sn = a.forwardRef(
  ({ className: e, value: t, onValueChange: s, name: o, ...n }, l) => /* @__PURE__ */ r.jsx(sr.Provider, { value: { value: t, onValueChange: s, name: o }, children: /* @__PURE__ */ r.jsx("div", { className: c("grid gap-2", e), ...n, ref: l }) })
);
sn.displayName = "RadioGroup";
const on = a.forwardRef(
  ({ className: e, value: t, ...s }, o) => {
    const { value: n, onValueChange: l, name: i } = a.useContext(sr), u = n === t;
    return /* @__PURE__ */ r.jsxs("div", { className: "flex items-center space-x-2", children: [
      /* @__PURE__ */ r.jsx(
        "input",
        {
          ref: o,
          type: "radio",
          name: i,
          value: t,
          checked: u,
          onChange: () => l?.(t),
          className: "sr-only",
          ...s
        }
      ),
      /* @__PURE__ */ r.jsx(
        "div",
        {
          className: c(
            "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer",
            e
          ),
          onClick: () => l?.(t),
          children: u && /* @__PURE__ */ r.jsx("div", { className: "flex items-center justify-center h-full", children: /* @__PURE__ */ r.jsx(Bs, { className: "h-2.5 w-2.5 fill-current text-current" }) })
        }
      )
    ] });
  }
);
on.displayName = "RadioGroupItem";
function or({
  className: e,
  selected: t,
  onSelect: s,
  showOutsideDays: o = !0,
  ...n
}) {
  const [l, i] = a.useState(/* @__PURE__ */ new Date()), u = new Date(l.getFullYear(), l.getMonth() + 1, 0).getDate(), f = new Date(l.getFullYear(), l.getMonth(), 1).getDay(), p = Array.from({ length: u }, (v, A) => A + 1), h = Array.from({ length: f }, (v, A) => A), w = () => {
    i(new Date(l.getFullYear(), l.getMonth() - 1));
  }, _ = () => {
    i(new Date(l.getFullYear(), l.getMonth() + 1));
  }, m = (v) => t ? t.getDate() === v && t.getMonth() === l.getMonth() && t.getFullYear() === l.getFullYear() : !1, b = (v) => {
    const A = new Date(l.getFullYear(), l.getMonth(), v);
    s?.(A);
  };
  return /* @__PURE__ */ r.jsxs("div", { className: c("p-3", e), ...n, children: [
    /* @__PURE__ */ r.jsxs("div", { className: "flex justify-center pt-1 relative items-center mb-4", children: [
      /* @__PURE__ */ r.jsx(
        "button",
        {
          onClick: w,
          className: c(
            Q({ variant: "outline" }),
            "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 absolute left-1"
          ),
          children: /* @__PURE__ */ r.jsx(Vt, { className: "h-4 w-4" })
        }
      ),
      /* @__PURE__ */ r.jsx("div", { className: "text-sm font-medium", children: l.toLocaleDateString("en-US", { month: "long", year: "numeric" }) }),
      /* @__PURE__ */ r.jsx(
        "button",
        {
          onClick: _,
          className: c(
            Q({ variant: "outline" }),
            "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 absolute right-1"
          ),
          children: /* @__PURE__ */ r.jsx(Te, { className: "h-4 w-4" })
        }
      )
    ] }),
    /* @__PURE__ */ r.jsxs("table", { className: "w-full border-collapse", children: [
      /* @__PURE__ */ r.jsx("thead", { children: /* @__PURE__ */ r.jsx("tr", { className: "flex", children: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((v) => /* @__PURE__ */ r.jsx("th", { className: "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]", children: v }, v)) }) }),
      /* @__PURE__ */ r.jsx("tbody", { children: /* @__PURE__ */ r.jsxs("tr", { className: "flex w-full mt-2", children: [
        h.map((v, A) => /* @__PURE__ */ r.jsx("td", { className: "h-9 w-9 p-0" }, `empty-${A}`)),
        p.map((v) => /* @__PURE__ */ r.jsx("td", { className: "h-9 w-9 text-center text-sm p-0 relative", children: /* @__PURE__ */ r.jsx(
          "button",
          {
            onClick: () => b(v),
            className: c(
              Q({ variant: "ghost" }),
              "h-9 w-9 p-0 font-normal",
              m(v) && "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground"
            ),
            children: v
          }
        ) }, v))
      ] }) })
    ] })
  ] });
}
or.displayName = "Calendar";
const nr = a.createContext({
  currentIndex: 0,
  setCurrentIndex: () => {
  },
  itemsLength: 0,
  orientation: "horizontal"
});
function _e() {
  const e = a.useContext(nr);
  if (!e)
    throw new Error("useCarousel must be used within a <Carousel />");
  return e;
}
const nn = a.forwardRef(
  ({ orientation: e = "horizontal", className: t, children: s, ...o }, n) => {
    const [l, i] = a.useState(0), [u, f] = a.useState(0);
    return a.useEffect(() => {
      const p = a.Children.count(s);
      f(p);
    }, [s]), /* @__PURE__ */ r.jsx(nr.Provider, { value: { currentIndex: l, setCurrentIndex: i, itemsLength: u, orientation: e }, children: /* @__PURE__ */ r.jsx(
      "div",
      {
        ref: n,
        className: c("relative", t),
        role: "region",
        "aria-roledescription": "carousel",
        ...o,
        children: s
      }
    ) });
  }
);
nn.displayName = "Carousel";
const an = a.forwardRef(({ className: e, children: t, ...s }, o) => {
  const { orientation: n, currentIndex: l } = _e();
  return /* @__PURE__ */ r.jsx("div", { className: "overflow-hidden", children: /* @__PURE__ */ r.jsx(
    "div",
    {
      ref: o,
      className: c(
        "flex transition-transform duration-300",
        n === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
        e
      ),
      style: {
        transform: n === "horizontal" ? `translateX(-${l * 100}%)` : `translateY(-${l * 100}%)`
      },
      ...s,
      children: t
    }
  ) });
});
an.displayName = "CarouselContent";
const ln = a.forwardRef(({ className: e, ...t }, s) => {
  const { orientation: o } = _e();
  return /* @__PURE__ */ r.jsx(
    "div",
    {
      ref: s,
      role: "group",
      "aria-roledescription": "slide",
      className: c(
        "min-w-0 shrink-0 grow-0 basis-full",
        o === "horizontal" ? "pl-4" : "pt-4",
        e
      ),
      ...t
    }
  );
});
ln.displayName = "CarouselItem";
const cn = a.forwardRef(({ className: e, variant: t = "outline", size: s = "icon", ...o }, n) => {
  const { orientation: l, currentIndex: i, setCurrentIndex: u, itemsLength: f } = _e(), p = () => {
    u(i > 0 ? i - 1 : f - 1);
  };
  return /* @__PURE__ */ r.jsxs(
    M,
    {
      ref: n,
      variant: t,
      size: s,
      className: c(
        "absolute h-8 w-8 rounded-full",
        l === "horizontal" ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        e
      ),
      onClick: p,
      ...o,
      children: [
        /* @__PURE__ */ r.jsx(Cs, { className: "h-4 w-4" }),
        /* @__PURE__ */ r.jsx("span", { className: "sr-only", children: "Previous slide" })
      ]
    }
  );
});
cn.displayName = "CarouselPrevious";
const dn = a.forwardRef(({ className: e, variant: t = "outline", size: s = "icon", ...o }, n) => {
  const { orientation: l, currentIndex: i, setCurrentIndex: u, itemsLength: f } = _e(), p = () => {
    u(i < f - 1 ? i + 1 : 0);
  };
  return /* @__PURE__ */ r.jsxs(
    M,
    {
      ref: n,
      variant: t,
      size: s,
      className: c(
        "absolute h-8 w-8 rounded-full",
        l === "horizontal" ? "-right-12 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        e
      ),
      onClick: p,
      ...o,
      children: [
        /* @__PURE__ */ r.jsx(Ss, { className: "h-4 w-4" }),
        /* @__PURE__ */ r.jsx("span", { className: "sr-only", children: "Next slide" })
      ]
    }
  );
});
dn.displayName = "CarouselNext";
function va({
  options: e,
  value: t,
  onValueChange: s,
  placeholder: o = "Select option...",
  searchPlaceholder: n = "Search...",
  emptyText: l = "No option found.",
  className: i
}) {
  const [u, f] = a.useState(!1);
  return /* @__PURE__ */ r.jsxs(rr, { open: u, onOpenChange: f, children: [
    /* @__PURE__ */ r.jsx(Qe, { children: /* @__PURE__ */ r.jsxs(
      M,
      {
        variant: "outline",
        role: "combobox",
        "aria-expanded": u,
        className: c("w-[200px] justify-between", i),
        children: [
          t ? e.find((p) => p.value === t)?.label : o,
          /* @__PURE__ */ r.jsx(Vs, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" })
        ]
      }
    ) }),
    /* @__PURE__ */ r.jsx(et, { className: "w-[200px] p-0", children: /* @__PURE__ */ r.jsxs(Ze, { children: [
      /* @__PURE__ */ r.jsx(Zt, { placeholder: n }),
      /* @__PURE__ */ r.jsxs(Kt, { children: [
        /* @__PURE__ */ r.jsx(Qt, { children: l }),
        /* @__PURE__ */ r.jsx(er, { children: e.map((p) => /* @__PURE__ */ r.jsxs(
          tr,
          {
            value: p.value,
            onSelect: () => {
              s?.(p.value === t ? "" : p.value), f(!1);
            },
            children: [
              /* @__PURE__ */ r.jsx(
                Lt,
                {
                  className: c(
                    "mr-2 h-4 w-4",
                    t === p.value ? "opacity-100" : "opacity-0"
                  )
                }
              ),
              p.label
            ]
          },
          p.value
        )) })
      ] })
    ] }) })
  ] });
}
function ya({
  columns: e,
  data: t,
  searchKey: s,
  searchPlaceholder: o = "Filter..."
}) {
  const [n, l] = a.useState(""), [i, u] = a.useState(1), [f] = a.useState(10), p = a.useMemo(() => !n || !s ? t : t.filter(
    (m) => String(m[s]).toLowerCase().includes(n.toLowerCase())
  ), [t, n, s]), h = a.useMemo(() => {
    const m = (i - 1) * f;
    return p.slice(m, m + f);
  }, [p, i, f]), w = Math.ceil(p.length / f), _ = (m, b) => b.cell ? b.cell(m) : b.accessorKey ? m[b.accessorKey] : "";
  return /* @__PURE__ */ r.jsxs("div", { className: "w-full", children: [
    /* @__PURE__ */ r.jsxs("div", { className: "flex items-center py-4", children: [
      s && /* @__PURE__ */ r.jsx(
        Ge,
        {
          placeholder: o,
          value: n,
          onChange: (m) => l(m.target.value),
          className: "max-w-sm"
        }
      ),
      /* @__PURE__ */ r.jsxs(Se, { children: [
        /* @__PURE__ */ r.jsx(pe, { children: /* @__PURE__ */ r.jsxs(M, { variant: "outline", className: "ml-auto", children: [
          "Columns ",
          /* @__PURE__ */ r.jsx(Re, { className: "ml-2 h-4 w-4" })
        ] }) }),
        /* @__PURE__ */ r.jsx(xe, { align: "end", children: /* @__PURE__ */ r.jsx("div", { className: "p-2", children: /* @__PURE__ */ r.jsx("p", { className: "text-sm text-muted-foreground", children: "Toggle columns" }) }) })
      ] })
    ] }),
    /* @__PURE__ */ r.jsx("div", { className: "rounded-md border", children: /* @__PURE__ */ r.jsxs(Mt, { children: [
      /* @__PURE__ */ r.jsx(Pt, { children: /* @__PURE__ */ r.jsx(je, { children: e.map((m) => /* @__PURE__ */ r.jsx(Et, { children: m.header }, m.id)) }) }),
      /* @__PURE__ */ r.jsx(Ot, { children: h.length ? h.map((m, b) => /* @__PURE__ */ r.jsx(je, { children: e.map((v) => /* @__PURE__ */ r.jsx(Ve, { children: _(m, v) }, v.id)) }, b)) : /* @__PURE__ */ r.jsx(je, { children: /* @__PURE__ */ r.jsx(
        Ve,
        {
          colSpan: e.length,
          className: "h-24 text-center",
          children: "No results."
        }
      ) }) })
    ] }) }),
    /* @__PURE__ */ r.jsxs("div", { className: "flex items-center justify-end space-x-2 py-4", children: [
      /* @__PURE__ */ r.jsxs("div", { className: "flex-1 text-sm text-muted-foreground", children: [
        "Showing ",
        h.length,
        " of ",
        p.length,
        " row(s)."
      ] }),
      /* @__PURE__ */ r.jsxs("div", { className: "space-x-2", children: [
        /* @__PURE__ */ r.jsx(
          M,
          {
            variant: "outline",
            size: "sm",
            onClick: () => u((m) => Math.max(m - 1, 1)),
            disabled: i === 1,
            children: "Previous"
          }
        ),
        /* @__PURE__ */ r.jsx(
          M,
          {
            variant: "outline",
            size: "sm",
            onClick: () => u((m) => Math.min(m + 1, w)),
            disabled: i === w,
            children: "Next"
          }
        )
      ] })
    ] })
  ] });
}
function wa({
  date: e,
  onDateChange: t,
  placeholder: s = "Pick a date",
  className: o
}) {
  return /* @__PURE__ */ r.jsxs(rr, { children: [
    /* @__PURE__ */ r.jsx(Qe, { children: /* @__PURE__ */ r.jsxs(
      M,
      {
        variant: "outline",
        className: c(
          "w-[280px] justify-start text-left font-normal",
          !e && "text-muted-foreground",
          o
        ),
        children: [
          /* @__PURE__ */ r.jsx(Ms, { className: "mr-2 h-4 w-4" }),
          e ? e.toLocaleDateString() : /* @__PURE__ */ r.jsx("span", { children: s })
        ]
      }
    ) }),
    /* @__PURE__ */ r.jsx(et, { className: "w-auto p-0", children: /* @__PURE__ */ r.jsx(
      or,
      {
        selected: e,
        onSelect: t
      }
    ) })
  ] });
}
const Ae = a.createContext({
  open: !1,
  onOpenChange: () => {
  }
}), Na = ({ open: e, onOpenChange: t, children: s }) => {
  const [o, n] = a.useState(!1), l = e !== void 0 ? e : o, i = t || n;
  return /* @__PURE__ */ r.jsx(Ae.Provider, { value: { open: l, onOpenChange: i }, children: s });
}, un = a.forwardRef(({ onClick: e, ...t }, s) => {
  const { onOpenChange: o } = a.useContext(Ae);
  return /* @__PURE__ */ r.jsx(
    "button",
    {
      ref: s,
      onClick: (n) => {
        o(!0), e?.(n);
      },
      ...t
    }
  );
});
un.displayName = "DrawerTrigger";
const mn = a.forwardRef(({ onClick: e, ...t }, s) => {
  const { onOpenChange: o } = a.useContext(Ae);
  return /* @__PURE__ */ r.jsx(
    "button",
    {
      ref: s,
      onClick: (n) => {
        o(!1), e?.(n);
      },
      ...t
    }
  );
});
mn.displayName = "DrawerClose";
const fn = a.forwardRef(({ className: e, children: t, ...s }, o) => {
  const { open: n } = a.useContext(Ae);
  return n ? /* @__PURE__ */ r.jsxs("div", { className: "fixed inset-0 z-50", children: [
    /* @__PURE__ */ r.jsx("div", { className: "fixed inset-0 bg-black/80" }),
    /* @__PURE__ */ r.jsxs(
      "div",
      {
        ref: o,
        className: c(
          "fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background",
          e
        ),
        ...s,
        children: [
          /* @__PURE__ */ r.jsx("div", { className: "mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted" }),
          t
        ]
      }
    )
  ] }) : null;
});
fn.displayName = "DrawerContent";
const pn = ({ className: e, ...t }) => /* @__PURE__ */ r.jsx(
  "div",
  {
    className: c("grid gap-1.5 p-4 text-center sm:text-left", e),
    ...t
  }
);
pn.displayName = "DrawerHeader";
const xn = ({ className: e, ...t }) => /* @__PURE__ */ r.jsx("div", { className: c("mt-auto flex flex-col gap-2 p-4", e), ...t });
xn.displayName = "DrawerFooter";
const gn = a.forwardRef(({ className: e, ...t }, s) => /* @__PURE__ */ r.jsx(
  "h3",
  {
    ref: s,
    className: c("text-lg font-semibold leading-none tracking-tight", e),
    ...t
  }
));
gn.displayName = "DrawerTitle";
const hn = a.forwardRef(({ className: e, ...t }, s) => /* @__PURE__ */ r.jsx(
  "p",
  {
    ref: s,
    className: c("text-sm text-muted-foreground", e),
    ...t
  }
));
hn.displayName = "DrawerDescription";
const tt = a.createContext({
  errors: {},
  values: {},
  setValue: () => {
  },
  setError: () => {
  }
}), bn = a.forwardRef(
  ({ children: e, ...t }, s) => {
    const [o, n] = a.useState({}), [l, i] = a.useState({}), u = (p, h) => {
      i((w) => ({ ...w, [p]: h }));
    }, f = (p, h) => {
      n((w) => ({ ...w, [p]: h }));
    };
    return /* @__PURE__ */ r.jsx(tt.Provider, { value: { errors: o, values: l, setValue: u, setError: f }, children: /* @__PURE__ */ r.jsx("form", { ref: s, ...t, children: e }) });
  }
);
bn.displayName = "Form";
const vn = a.forwardRef(({ className: e, ...t }, s) => /* @__PURE__ */ r.jsx("div", { ref: s, className: c("space-y-2", e), ...t }));
vn.displayName = "FormItem";
const yn = a.forwardRef(
  ({ className: e, name: t, ...s }, o) => {
    const { errors: n } = a.useContext(tt), l = t && n[t];
    return /* @__PURE__ */ r.jsx(
      It,
      {
        ref: o,
        className: c(l && "text-destructive", e),
        ...s
      }
    );
  }
);
yn.displayName = "FormLabel";
const wn = a.forwardRef(
  ({ children: e, ...t }, s) => /* @__PURE__ */ r.jsx("div", { ref: s, ...t, children: e })
);
wn.displayName = "FormControl";
const Nn = a.forwardRef(({ className: e, ...t }, s) => /* @__PURE__ */ r.jsx(
  "p",
  {
    ref: s,
    className: c("text-sm text-muted-foreground", e),
    ...t
  }
));
Nn.displayName = "FormDescription";
const jn = a.forwardRef(
  ({ className: e, name: t, children: s, ...o }, n) => {
    const { errors: l } = a.useContext(tt), u = (t ? l[t] : void 0) || s;
    return u ? /* @__PURE__ */ r.jsx(
      "p",
      {
        ref: n,
        className: c("text-sm font-medium text-destructive", e),
        ...o,
        children: u
      }
    ) : null;
  }
);
jn.displayName = "FormMessage";
const rt = a.createContext({
  open: !1,
  onOpenChange: () => {
  }
}), ja = ({ children: e }) => {
  const [t, s] = a.useState(!1);
  return /* @__PURE__ */ r.jsx(rt.Provider, { value: { open: t, onOpenChange: s }, children: /* @__PURE__ */ r.jsx("div", { className: "relative inline-block", children: e }) });
}, kn = a.forwardRef(({ children: e, ...t }, s) => {
  const { onOpenChange: o } = a.useContext(rt);
  return /* @__PURE__ */ r.jsx(
    "div",
    {
      ref: s,
      onMouseEnter: () => o(!0),
      onMouseLeave: () => o(!1),
      ...t,
      children: e
    }
  );
});
kn.displayName = "HoverCardTrigger";
const Cn = a.forwardRef(({ className: e, align: t = "center", sideOffset: s = 4, ...o }, n) => {
  const { open: l } = a.useContext(rt);
  return l ? /* @__PURE__ */ r.jsx(
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
      style: { marginTop: s },
      ...o
    }
  ) : null;
});
Cn.displayName = "HoverCardContent";
const Rn = a.forwardRef(
  ({ className: e, value: t = "", onChange: s, maxLength: o = 6, ...n }, l) => {
    const [i, u] = a.useState(t), f = a.useRef([]), p = t || i, h = s || u, w = (m, b) => {
      b.length > 1 && (b = b.slice(-1));
      const v = p.split("");
      v[m] = b;
      const A = v.join("").slice(0, o);
      h(A), b && m < o - 1 && f.current[m + 1]?.focus();
    }, _ = (m, b) => {
      b.key === "Backspace" && !p[m] && m > 0 && f.current[m - 1]?.focus();
    };
    return /* @__PURE__ */ r.jsx(
      "div",
      {
        ref: l,
        className: c("flex items-center gap-2", e),
        ...n,
        children: Array.from({ length: o }).map((m, b) => /* @__PURE__ */ r.jsx(
          "input",
          {
            ref: (v) => {
              f.current[b] = v;
            },
            type: "text",
            inputMode: "numeric",
            maxLength: 1,
            value: p[b] || "",
            onChange: (v) => w(b, v.target.value),
            onKeyDown: (v) => _(b, v),
            className: "h-10 w-10 text-center border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          },
          b
        ))
      }
    );
  }
);
Rn.displayName = "InputOTP";
const Sn = a.forwardRef(({ className: e, ...t }, s) => /* @__PURE__ */ r.jsx("div", { ref: s, className: c("flex items-center", e), ...t }));
Sn.displayName = "InputOTPGroup";
const Tn = a.forwardRef(({ index: e, className: t, ...s }, o) => /* @__PURE__ */ r.jsx(
  "div",
  {
    ref: o,
    className: c(
      "relative flex h-10 w-10 items-center justify-center border-y border-r border-input text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md",
      t
    ),
    ...s
  }
));
Tn.displayName = "InputOTPSlot";
const _n = a.forwardRef(({ ...e }, t) => /* @__PURE__ */ r.jsx("div", { ref: t, role: "separator", ...e, children: /* @__PURE__ */ r.jsx("div", { className: "w-2 h-2 rounded-full bg-border" }) }));
_n.displayName = "InputOTPSeparator";
const An = J(
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
), Mn = a.forwardRef(
  ({ className: e, size: t, ...s }, o) => /* @__PURE__ */ r.jsx(
    "kbd",
    {
      ref: o,
      className: c(An({ size: t, className: e })),
      ...s
    }
  )
);
Mn.displayName = "Kbd";
function ar({ open: e, onOpenChange: t, onConfirm: s }) {
  return /* @__PURE__ */ r.jsx(Jo, { open: e, onOpenChange: t, children: /* @__PURE__ */ r.jsxs(Ht, { children: [
    /* @__PURE__ */ r.jsx(Ut, { children: /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ r.jsx("div", { className: "h-10 w-10 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center", children: /* @__PURE__ */ r.jsx(He, { className: "h-5 w-5 text-red-600 dark:text-red-400" }) }),
      /* @__PURE__ */ r.jsxs("div", { children: [
        /* @__PURE__ */ r.jsx(Yt, { children: "Confirm Logout" }),
        /* @__PURE__ */ r.jsx(qt, { children: "Are you sure you want to logout? You will need to login again to access your account." })
      ] })
    ] }) }),
    /* @__PURE__ */ r.jsxs(Wt, { children: [
      /* @__PURE__ */ r.jsx(Xt, { children: "Cancel" }),
      /* @__PURE__ */ r.jsx(
        Jt,
        {
          onClick: s,
          className: "bg-red-600 hover:bg-red-700 focus:ring-red-600",
          children: "Logout"
        }
      )
    ] })
  ] }) });
}
const Pn = a.forwardRef(({ className: e, children: t, ...s }, o) => /* @__PURE__ */ r.jsx(
  "div",
  {
    ref: o,
    className: c("relative overflow-auto", e),
    ...s,
    children: t
  }
));
Pn.displayName = "ScrollArea";
const On = a.forwardRef(({ className: e, orientation: t = "vertical", ...s }, o) => /* @__PURE__ */ r.jsx(
  "div",
  {
    ref: o,
    className: c(
      "flex touch-none select-none transition-colors",
      t === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]",
      t === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]",
      e
    ),
    ...s,
    children: /* @__PURE__ */ r.jsx("div", { className: "relative flex-1 rounded-full bg-border" })
  }
));
On.displayName = "ScrollBar";
const En = J(
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
), Me = a.createContext({
  open: !1,
  onOpenChange: () => {
  }
}), ka = ({ open: e, onOpenChange: t, children: s }) => {
  const [o, n] = a.useState(!1), l = e !== void 0 ? e : o, i = t || n;
  return /* @__PURE__ */ r.jsx(Me.Provider, { value: { open: l, onOpenChange: i }, children: s });
}, zn = a.forwardRef(({ onClick: e, ...t }, s) => {
  const { onOpenChange: o } = a.useContext(Me);
  return /* @__PURE__ */ r.jsx(
    "button",
    {
      ref: s,
      onClick: (n) => {
        o(!0), e?.(n);
      },
      ...t
    }
  );
});
zn.displayName = "SheetTrigger";
const In = a.forwardRef(({ onClick: e, ...t }, s) => {
  const { onOpenChange: o } = a.useContext(Me);
  return /* @__PURE__ */ r.jsx(
    "button",
    {
      ref: s,
      onClick: (n) => {
        o(!1), e?.(n);
      },
      ...t
    }
  );
});
In.displayName = "SheetClose";
const Dn = a.forwardRef(
  ({ side: e = "right", className: t, children: s, ...o }, n) => {
    const { open: l, onOpenChange: i } = a.useContext(Me);
    return l ? /* @__PURE__ */ r.jsxs("div", { className: "fixed inset-0 z-50", children: [
      /* @__PURE__ */ r.jsx("div", { className: "fixed inset-0 bg-black/80", onClick: () => i(!1) }),
      /* @__PURE__ */ r.jsxs(
        "div",
        {
          ref: n,
          className: c(En({ side: e }), t),
          ...o,
          children: [
            s,
            /* @__PURE__ */ r.jsxs(
              "button",
              {
                onClick: () => i(!1),
                className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
                children: [
                  /* @__PURE__ */ r.jsx(We, { className: "h-4 w-4" }),
                  /* @__PURE__ */ r.jsx("span", { className: "sr-only", children: "Close" })
                ]
              }
            )
          ]
        }
      )
    ] }) : null;
  }
);
Dn.displayName = "SheetContent";
const Ln = ({ className: e, ...t }) => /* @__PURE__ */ r.jsx(
  "div",
  {
    className: c("flex flex-col space-y-2 text-center sm:text-left", e),
    ...t
  }
);
Ln.displayName = "SheetHeader";
const Vn = ({ className: e, ...t }) => /* @__PURE__ */ r.jsx(
  "div",
  {
    className: c("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", e),
    ...t
  }
);
Vn.displayName = "SheetFooter";
const $n = a.forwardRef(({ className: e, ...t }, s) => /* @__PURE__ */ r.jsx(
  "h3",
  {
    ref: s,
    className: c("text-lg font-semibold text-foreground", e),
    ...t
  }
));
$n.displayName = "SheetTitle";
const Fn = a.forwardRef(({ className: e, ...t }, s) => /* @__PURE__ */ r.jsx(
  "p",
  {
    ref: s,
    className: c("text-sm text-muted-foreground", e),
    ...t
  }
));
Fn.displayName = "SheetDescription";
function Ca({ title: e, description: t, variant: s = "default", onClose: o }) {
  return a.useEffect(() => {
    const n = setTimeout(() => {
      o?.();
    }, 5e3);
    return () => clearTimeout(n);
  }, [o]), /* @__PURE__ */ r.jsxs("div", { className: c(
    "fixed bottom-4 right-4 z-50 w-full max-w-sm rounded-lg border p-4 shadow-lg",
    {
      "bg-background border-border": s === "default",
      "bg-destructive text-destructive-foreground border-destructive": s === "destructive",
      "bg-green-500 text-white border-green-600": s === "success"
    }
  ), children: [
    e && /* @__PURE__ */ r.jsx("div", { className: "font-semibold", children: e }),
    t && /* @__PURE__ */ r.jsx("div", { className: "text-sm opacity-90", children: t }),
    /* @__PURE__ */ r.jsx(
      "button",
      {
        onClick: o,
        className: "absolute top-2 right-2 text-xs opacity-70 hover:opacity-100",
        children: "×"
      }
    )
  ] });
}
const Gn = ["love", "life", "happiness", "technology", "travel", "food", "music", "art", "nature", "friendship"];
function Ra({ value: e, onChange: t, placeholder: s = "Type to search or create tags...", className: o }) {
  const [n, l] = B(""), [i, u] = B(!1), f = cr(null), p = Gn.filter(
    (m) => !e.includes(m) && m.toLowerCase().includes(n.toLowerCase())
  ), h = (m) => {
    m && !e.includes(m) && t([...e, m]), l(""), u(!1);
  }, w = (m) => {
    t(e.filter((b) => b !== m));
  }, _ = (m) => {
    m.key === "Enter" && n.trim() && (m.preventDefault(), h(n.trim())), m.key === "Backspace" && !n && e.length > 0 && w(e[e.length - 1]);
  };
  return $e(() => {
    const m = (b) => {
      f.current && !f.current.parentElement?.contains(b.target) && u(!1);
    };
    return document.addEventListener("mousedown", m), () => document.removeEventListener("mousedown", m);
  }, []), /* @__PURE__ */ r.jsxs("div", { className: c("relative", o), children: [
    /* @__PURE__ */ r.jsxs("div", { className: "flex flex-wrap gap-2 p-2 border rounded-md min-h-[40px] focus-within:ring-2 focus-within:ring-ring", children: [
      e.map((m) => /* @__PURE__ */ r.jsxs(Ce, { variant: "secondary", className: "flex items-center gap-1", children: [
        m,
        /* @__PURE__ */ r.jsx(
          We,
          {
            className: "h-3 w-3 cursor-pointer hover:text-destructive",
            onClick: () => w(m)
          }
        )
      ] }, m)),
      /* @__PURE__ */ r.jsx(
        Ge,
        {
          ref: f,
          value: n,
          onChange: (m) => {
            l(m.target.value), u(!0);
          },
          onFocus: () => u(!0),
          onKeyDown: _,
          placeholder: e.length === 0 ? s : "",
          className: "border-0 shadow-none focus-visible:ring-0 flex-1 min-w-[120px] p-0"
        }
      )
    ] }),
    i && (n || p.length > 0) && /* @__PURE__ */ r.jsxs("div", { className: "absolute top-full z-50 mt-1 w-full bg-background border rounded-md shadow-md max-h-60 overflow-auto", children: [
      n && !e.includes(n.trim()) && n.trim() && /* @__PURE__ */ r.jsxs(
        "div",
        {
          className: "flex items-center gap-2 p-2 hover:bg-accent cursor-pointer",
          onMouseDown: (m) => {
            m.preventDefault(), h(n.trim());
          },
          children: [
            /* @__PURE__ */ r.jsx(to, { className: "h-4 w-4" }),
            'Create "',
            n.trim(),
            '"'
          ]
        }
      ),
      p.map((m) => /* @__PURE__ */ r.jsx(
        "div",
        {
          className: "p-2 hover:bg-accent cursor-pointer",
          onMouseDown: (b) => {
            b.preventDefault(), h(m);
          },
          children: m
        },
        m
      ))
    ] })
  ] });
}
const Bn = J(
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
), Hn = J(
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
), lr = a.createContext({
  value: "",
  onValueChange: () => {
  },
  type: "single"
}), Un = a.forwardRef(
  ({ className: e, variant: t, type: s, value: o, onValueChange: n, ...l }, i) => /* @__PURE__ */ r.jsx(lr.Provider, { value: { value: o, onValueChange: n, type: s }, children: /* @__PURE__ */ r.jsx(
    "div",
    {
      ref: i,
      className: c(Bn({ variant: t, className: e })),
      ...l
    }
  ) })
);
Un.displayName = "ToggleGroup";
const Wn = a.forwardRef(
  ({ className: e, variant: t, size: s, value: o, onClick: n, ...l }, i) => {
    const { value: u, onValueChange: f, type: p } = a.useContext(lr), h = p === "single" ? u === o : Array.isArray(u) && u.includes(o), w = (_) => {
      if (p === "single")
        f(h ? "" : o);
      else {
        const m = Array.isArray(u) ? u : [];
        f(h ? m.filter((b) => b !== o) : [...m, o]);
      }
      n?.(_);
    };
    return /* @__PURE__ */ r.jsx(
      "button",
      {
        ref: i,
        className: c(Hn({ variant: t, size: s, className: e })),
        "data-state": h ? "on" : "off",
        onClick: w,
        ...l
      }
    );
  }
);
Wn.displayName = "ToggleGroupItem";
const Yn = a.forwardRef(
  ({ className: e, children: t, ...s }, o) => /* @__PURE__ */ r.jsx(
    "header",
    {
      ref: o,
      className: c(
        "sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
        e
      ),
      ...s,
      children: t
    }
  )
);
Yn.displayName = "Header";
const qn = a.forwardRef(
  ({ className: e, children: t, ...s }, o) => /* @__PURE__ */ r.jsx(
    "div",
    {
      ref: o,
      className: c(
        "flex h-full w-64 flex-col border-r bg-background",
        e
      ),
      ...s,
      children: t
    }
  )
);
qn.displayName = "Sidebar";
const Jn = a.forwardRef(
  ({ className: e, children: t, ...s }, o) => /* @__PURE__ */ r.jsx(
    "footer",
    {
      ref: o,
      className: c(
        "border-t bg-background px-6 py-4 text-sm text-muted-foreground",
        e
      ),
      ...s,
      children: t
    }
  )
);
Jn.displayName = "Footer";
const Xn = a.forwardRef(
  ({ className: e, children: t, ...s }, o) => /* @__PURE__ */ r.jsx(
    "nav",
    {
      ref: o,
      className: c("flex items-center space-x-4", e),
      ...s,
      children: t
    }
  )
);
Xn.displayName = "Navigation";
const Zn = a.forwardRef(
  ({ className: e, children: t, active: s, ...o }, n) => /* @__PURE__ */ r.jsx(
    "a",
    {
      ref: n,
      className: c(
        "px-3 py-2 text-sm font-medium transition-colors hover:text-foreground",
        s ? "text-foreground" : "text-muted-foreground",
        e
      ),
      ...o,
      children: t
    }
  )
);
Zn.displayName = "NavItem";
const Kn = {
  Home: Ft,
  Users: yo,
  Package: Qs,
  Tag: xo,
  ShoppingCart: io,
  ChefHat: Es,
  MessageCircle: Js,
  CheckSquare: uo,
  Quote: so,
  Settings: Ue
};
function Qn({
  isCollapsed: e,
  onToggle: t,
  menuItems: s = [],
  user: o,
  onLogout: n,
  currentPath: l = "/"
}) {
  const [i, u] = B([]), [f, p] = B(!1), h = (m) => {
    u(
      (b) => b.includes(m) ? b.filter((v) => v !== m) : [...b, m]
    );
  }, w = (m) => l === m, _ = () => {
    n?.(), p(!1);
  };
  return /* @__PURE__ */ r.jsxs("div", { className: c(
    "flex flex-col h-full bg-gradient-to-b from-card to-card/95 border-r border-border/50 transition-all duration-300 shadow-sm",
    e ? "w-16" : "w-64"
  ), children: [
    /* @__PURE__ */ r.jsxs("div", { className: "flex items-center justify-between p-4 border-b border-border/50", children: [
      !e && /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ r.jsx("div", { className: "h-8 w-8 bg-primary rounded-lg flex items-center justify-center", children: /* @__PURE__ */ r.jsx(jo, { className: "h-4 w-4 text-primary-foreground" }) }),
        /* @__PURE__ */ r.jsx("h2", { className: "text-lg font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent", children: "Dashboard" })
      ] }),
      /* @__PURE__ */ r.jsx(
        M,
        {
          variant: "ghost",
          size: "icon",
          onClick: t,
          className: "h-8 w-8 hover:bg-accent/50 transition-colors",
          children: e ? /* @__PURE__ */ r.jsx(Gt, { className: "h-4 w-4" }) : /* @__PURE__ */ r.jsx(We, { className: "h-4 w-4" })
        }
      )
    ] }),
    /* @__PURE__ */ r.jsx("nav", { className: "flex-1 p-3", children: /* @__PURE__ */ r.jsx("ul", { className: "space-y-2", children: s.map((m) => {
      const b = Kn[m.icon] || Ft;
      return /* @__PURE__ */ r.jsxs("li", { children: [
        /* @__PURE__ */ r.jsx("div", { className: "relative", children: m.children ? /* @__PURE__ */ r.jsxs(
          M,
          {
            variant: "ghost",
            className: c(
              "w-full justify-start h-11 rounded-lg transition-all duration-200 group",
              "px-3",
              "hover:bg-accent/50 hover:shadow-sm"
            ),
            onClick: () => h(m.label),
            children: [
              /* @__PURE__ */ r.jsx("div", { className: c(
                "flex items-center justify-center rounded-md transition-colors",
                e ? "h-6 w-6" : "h-5 w-5 mr-3",
                "group-hover:text-primary"
              ), children: /* @__PURE__ */ r.jsx(b, { className: "h-4 w-4 shrink-0" }) }),
              !e && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
                /* @__PURE__ */ r.jsx("span", { className: "truncate font-medium", children: m.label }),
                m.badge && /* @__PURE__ */ r.jsx(Ce, { variant: "secondary", className: "ml-auto mr-2 h-5 text-xs", children: m.badge }),
                /* @__PURE__ */ r.jsx("div", { className: "ml-auto", children: i.includes(m.label) ? /* @__PURE__ */ r.jsx(Re, { className: "h-4 w-4 transition-transform" }) : /* @__PURE__ */ r.jsx(Te, { className: "h-4 w-4 transition-transform" }) })
              ] })
            ]
          }
        ) : /* @__PURE__ */ r.jsx("a", { href: m.href, children: /* @__PURE__ */ r.jsxs(
          M,
          {
            variant: "ghost",
            className: c(
              "w-full justify-start h-11 rounded-lg transition-all duration-200 group",
              "px-3",
              w(m.href) ? "bg-primary/10 text-primary border border-primary/20 shadow-sm" : "hover:bg-accent/50 hover:shadow-sm"
            ),
            children: [
              /* @__PURE__ */ r.jsx("div", { className: c(
                "flex items-center justify-center rounded-md transition-colors",
                e ? "h-6 w-6" : "h-5 w-5 mr-3",
                w(m.href) ? "text-primary" : "group-hover:text-primary"
              ), children: /* @__PURE__ */ r.jsx(b, { className: "h-4 w-4 shrink-0" }) }),
              !e && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
                /* @__PURE__ */ r.jsx("span", { className: "truncate font-medium", children: m.label }),
                m.badge && /* @__PURE__ */ r.jsx(
                  Ce,
                  {
                    variant: w(m.href) ? "default" : "secondary",
                    className: "ml-auto h-5 text-xs",
                    children: m.badge
                  }
                )
              ] })
            ]
          }
        ) }) }),
        m.children && !e && i.includes(m.label) && /* @__PURE__ */ r.jsx("ul", { className: "ml-8 mt-2 space-y-1 border-l border-border/30 pl-4", children: m.children.map((v) => /* @__PURE__ */ r.jsx("li", { children: /* @__PURE__ */ r.jsx("a", { href: v.href, children: /* @__PURE__ */ r.jsxs(
          M,
          {
            variant: "ghost",
            className: c(
              "w-full justify-start h-9 text-sm rounded-md transition-all duration-200",
              w(v.href) ? "bg-primary/10 text-primary font-medium" : "text-muted-foreground hover:text-foreground hover:bg-accent/30"
            ),
            children: [
              /* @__PURE__ */ r.jsx("div", { className: "h-1.5 w-1.5 rounded-full bg-current mr-3 opacity-60" }),
              /* @__PURE__ */ r.jsx("span", { className: "truncate", children: v.label })
            ]
          }
        ) }) }, v.label)) })
      ] }, m.label);
    }) }) }),
    !e && o && /* @__PURE__ */ r.jsx("div", { className: "p-4 border-t border-border/50 relative sidebar-profile-container", children: /* @__PURE__ */ r.jsxs(Se, { children: [
      /* @__PURE__ */ r.jsx(pe, { asChild: !0, children: /* @__PURE__ */ r.jsxs(
        M,
        {
          variant: "ghost",
          className: "w-full justify-start h-12 p-3 hover:bg-accent/50 transition-colors",
          children: [
            /* @__PURE__ */ r.jsx("div", { className: "h-8 w-8 bg-primary/10 rounded-full flex items-center justify-center mr-3", children: /* @__PURE__ */ r.jsx(Fs, { className: "h-5 w-5 text-primary" }) }),
            /* @__PURE__ */ r.jsxs("div", { className: "flex-1 text-left min-w-0", children: [
              /* @__PURE__ */ r.jsx("p", { className: "text-sm font-medium truncate", children: o?.firstName && o?.lastName ? `${o.firstName} ${o.lastName}` : o?.username || "User" }),
              /* @__PURE__ */ r.jsx("p", { className: "text-xs text-muted-foreground truncate", children: o?.email || "user@example.com" })
            ] }),
            /* @__PURE__ */ r.jsx(Re, { className: "h-4 w-4 ml-2 opacity-50" })
          ]
        }
      ) }),
      /* @__PURE__ */ r.jsxs(
        xe,
        {
          align: "start",
          side: "top",
          className: "w-56 !fixed !bottom-20 !left-4 !top-auto",
          children: [
            /* @__PURE__ */ r.jsxs(G, { children: [
              /* @__PURE__ */ r.jsx(ke, { className: "mr-2 h-4 w-4" }),
              "Profile"
            ] }),
            /* @__PURE__ */ r.jsxs(G, { children: [
              /* @__PURE__ */ r.jsx(Ue, { className: "mr-2 h-4 w-4" }),
              "Settings"
            ] }),
            /* @__PURE__ */ r.jsx(oe, {}),
            /* @__PURE__ */ r.jsxs(
              G,
              {
                onClick: () => p(!0),
                className: "text-red-600 focus:text-red-600",
                children: [
                  /* @__PURE__ */ r.jsx(He, { className: "mr-2 h-4 w-4" }),
                  "Logout"
                ]
              }
            )
          ]
        }
      )
    ] }) }),
    /* @__PURE__ */ r.jsx(
      ar,
      {
        open: f,
        onOpenChange: p,
        onConfirm: _
      }
    )
  ] });
}
const ea = [
  {
    id: "1",
    title: "New user registered",
    message: "John Doe has joined the platform",
    time: "2 min ago",
    unread: !0
  },
  {
    id: "2",
    title: "System update",
    message: "Server maintenance completed successfully",
    time: "1 hour ago",
    unread: !0
  },
  {
    id: "3",
    title: "Payment received",
    message: "Invoice #1234 has been paid",
    time: "3 hours ago",
    unread: !1
  }
];
function ta({
  onToggleSidebar: e,
  user: t,
  onLogout: s,
  theme: o = "light",
  onThemeChange: n,
  notifications: l = ea
}) {
  const [i, u] = B(!1), f = () => {
    n?.(o === "dark" ? "light" : "dark");
  }, p = () => {
    s?.(), u(!1);
  }, h = l.filter((w) => w.unread).length;
  return /* @__PURE__ */ r.jsxs("header", { className: "flex items-center justify-between px-4 sm:px-6 py-3 bg-background/80 backdrop-blur-sm border-b border-border/50 shadow-sm", children: [
    /* @__PURE__ */ r.jsxs("div", { className: "flex items-center space-x-3 sm:space-x-4 min-w-0", children: [
      /* @__PURE__ */ r.jsx(
        M,
        {
          variant: "ghost",
          size: "icon",
          onClick: e,
          className: "h-10 w-10 md:hidden hover:bg-accent/50 transition-colors rounded-lg",
          children: /* @__PURE__ */ r.jsx(Gt, { className: "h-5 w-5" })
        }
      ),
      /* @__PURE__ */ r.jsxs("div", { className: "flex flex-col", children: [
        /* @__PURE__ */ r.jsxs("h1", { className: "text-lg sm:text-xl font-bold truncate bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent", children: [
          "Welcome back, ",
          t?.firstName || t?.username || "User"
        ] }),
        /* @__PURE__ */ r.jsx("p", { className: "text-xs sm:text-sm text-muted-foreground hidden sm:block", children: (/* @__PURE__ */ new Date()).toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" }) })
      ] })
    ] }),
    /* @__PURE__ */ r.jsxs("div", { className: "flex items-center space-x-2 sm:space-x-3 flex-shrink-0", children: [
      /* @__PURE__ */ r.jsx(
        M,
        {
          variant: "ghost",
          size: "icon",
          onClick: f,
          className: "h-10 w-10 hover:bg-accent/50 transition-all duration-200 rounded-lg group",
          children: o === "dark" ? /* @__PURE__ */ r.jsx(fo, { className: "h-5 w-5 group-hover:rotate-12 transition-transform" }) : /* @__PURE__ */ r.jsx(Zs, { className: "h-5 w-5 group-hover:-rotate-12 transition-transform" })
        }
      ),
      /* @__PURE__ */ r.jsxs(Se, { children: [
        /* @__PURE__ */ r.jsx(pe, { asChild: !0, children: /* @__PURE__ */ r.jsxs(
          M,
          {
            variant: "ghost",
            size: "icon",
            className: "h-10 w-10 relative hover:bg-accent/50 transition-all duration-200 rounded-lg group",
            children: [
              /* @__PURE__ */ r.jsx(_s, { className: "h-5 w-5 group-hover:animate-pulse" }),
              h > 0 && /* @__PURE__ */ r.jsx(
                Ce,
                {
                  variant: "destructive",
                  className: "absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs animate-pulse",
                  children: h
                }
              )
            ]
          }
        ) }),
        /* @__PURE__ */ r.jsxs(xe, { align: "end", className: "w-72 sm:w-80 md:w-96 max-w-[calc(100vw-1rem)] z-[9999] mr-2 sm:mr-0", children: [
          /* @__PURE__ */ r.jsxs(Bt, { className: "flex items-center justify-between px-3 py-2", children: [
            /* @__PURE__ */ r.jsx("span", { className: "text-sm font-medium", children: "Notifications" }),
            /* @__PURE__ */ r.jsx(M, { variant: "ghost", size: "sm", className: "h-6 text-xs px-2", children: "Mark all read" })
          ] }),
          /* @__PURE__ */ r.jsx(oe, {}),
          l.map((w) => /* @__PURE__ */ r.jsx(G, { className: "flex flex-col items-start p-2 sm:p-3 cursor-pointer", children: /* @__PURE__ */ r.jsxs("div", { className: "flex items-start justify-between w-full gap-2", children: [
            /* @__PURE__ */ r.jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ r.jsx("p", { className: "font-medium text-sm truncate", children: w.title }),
                w.unread && /* @__PURE__ */ r.jsx("div", { className: "h-2 w-2 bg-blue-500 rounded-full flex-shrink-0" })
              ] }),
              /* @__PURE__ */ r.jsx("p", { className: "text-xs text-muted-foreground mt-1 line-clamp-2", children: w.message }),
              /* @__PURE__ */ r.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: w.time })
            ] }),
            /* @__PURE__ */ r.jsxs("div", { className: "flex gap-1 flex-shrink-0", children: [
              /* @__PURE__ */ r.jsx(M, { variant: "ghost", size: "icon", className: "h-6 w-6", children: /* @__PURE__ */ r.jsx(Lt, { className: "h-3 w-3" }) }),
              /* @__PURE__ */ r.jsx(M, { variant: "ghost", size: "icon", className: "h-6 w-6", children: /* @__PURE__ */ r.jsx(ho, { className: "h-3 w-3" }) })
            ] })
          ] }) }, w.id)),
          /* @__PURE__ */ r.jsx(oe, {}),
          /* @__PURE__ */ r.jsx(G, { className: "text-center justify-center", children: "View all notifications" })
        ] })
      ] }),
      /* @__PURE__ */ r.jsxs(Se, { children: [
        /* @__PURE__ */ r.jsx(pe, { asChild: !0, children: /* @__PURE__ */ r.jsx(
          M,
          {
            variant: "ghost",
            className: "h-10 w-10 p-0 rounded-full hover:bg-accent/50 transition-all duration-200 group",
            children: /* @__PURE__ */ r.jsx("div", { className: "h-9 w-9 bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center", children: /* @__PURE__ */ r.jsx(ke, { className: "h-4 w-4 text-primary-foreground" }) })
          }
        ) }),
        /* @__PURE__ */ r.jsxs(xe, { align: "end", side: "bottom", sideOffset: 8, className: "w-64 p-2 mr-2", children: [
          /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-3 p-3 rounded-lg bg-accent/30", children: [
            /* @__PURE__ */ r.jsx("div", { className: "h-10 w-10 bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center", children: /* @__PURE__ */ r.jsx(ke, { className: "h-5 w-5 text-primary-foreground" }) }),
            /* @__PURE__ */ r.jsxs("div", { className: "flex flex-col space-y-1 leading-none min-w-0", children: [
              /* @__PURE__ */ r.jsx("p", { className: "font-semibold truncate", children: t?.firstName && t?.lastName ? `${t.firstName} ${t.lastName}` : t?.username || "User" }),
              /* @__PURE__ */ r.jsx("p", { className: "text-xs text-muted-foreground truncate", children: t?.email || "user@example.com" })
            ] })
          ] }),
          /* @__PURE__ */ r.jsx(oe, { className: "my-2" }),
          /* @__PURE__ */ r.jsxs(G, { className: "rounded-md", children: [
            /* @__PURE__ */ r.jsx(ke, { className: "mr-3 h-4 w-4" }),
            "Profile"
          ] }),
          /* @__PURE__ */ r.jsxs(G, { className: "rounded-md", children: [
            /* @__PURE__ */ r.jsx(Ue, { className: "mr-3 h-4 w-4" }),
            "Settings"
          ] }),
          /* @__PURE__ */ r.jsx(oe, { className: "my-2" }),
          /* @__PURE__ */ r.jsxs(
            G,
            {
              onClick: () => u(!0),
              className: "text-red-600 focus:text-red-600 rounded-md",
              children: [
                /* @__PURE__ */ r.jsx(He, { className: "mr-3 h-4 w-4" }),
                "Logout"
              ]
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ r.jsx(
      ar,
      {
        open: i,
        onOpenChange: u,
        onConfirm: p
      }
    )
  ] });
}
const st = a.forwardRef(
  ({ className: e, size: t = "md", ...s }, o) => {
    const n = {
      sm: "h-4 w-4",
      md: "h-6 w-6",
      lg: "h-8 w-8"
    };
    return /* @__PURE__ */ r.jsx(
      "div",
      {
        ref: o,
        className: c(
          "animate-spin rounded-full border-2 border-current border-t-transparent",
          n[t],
          e
        ),
        ...s
      }
    );
  }
);
st.displayName = "Spinner";
function Sa({
  children: e,
  isAuthenticated: t = !0,
  isLoading: s = !1,
  user: o,
  onLogout: n,
  menuItems: l = [],
  currentPath: i = "/"
}) {
  const [u, f] = B(() => {
    if (typeof window < "u") {
      const h = localStorage.getItem("sidebar-collapsed");
      return h ? JSON.parse(h) : window.innerWidth < 768;
    }
    return !1;
  }), p = () => {
    f(!u);
  };
  return $e(() => {
    typeof window < "u" && localStorage.setItem("sidebar-collapsed", JSON.stringify(u));
  }, [u]), s ? /* @__PURE__ */ r.jsx("div", { className: "flex items-center justify-center h-screen", children: /* @__PURE__ */ r.jsx(st, { className: "h-8 w-8" }) }) : t ? /* @__PURE__ */ r.jsxs("div", { className: "flex h-screen bg-background relative", children: [
    !u && /* @__PURE__ */ r.jsx(
      "div",
      {
        className: "fixed inset-0 bg-black/50 z-40 md:hidden",
        onClick: p
      }
    ),
    /* @__PURE__ */ r.jsx("div", { className: c(
      "fixed md:relative z-50 md:z-10 h-full transition-transform duration-300",
      u ? "-translate-x-full md:translate-x-0" : "translate-x-0"
    ), children: /* @__PURE__ */ r.jsx(
      Qn,
      {
        isCollapsed: u,
        onToggle: p,
        menuItems: l,
        user: o,
        onLogout: n,
        currentPath: i
      }
    ) }),
    /* @__PURE__ */ r.jsxs("div", { className: "flex-1 flex flex-col overflow-hidden", children: [
      /* @__PURE__ */ r.jsx(
        ta,
        {
          onToggleSidebar: p,
          user: o,
          onLogout: n
        }
      ),
      /* @__PURE__ */ r.jsx("main", { className: "flex-1 overflow-auto p-4 md:p-6", children: e })
    ] })
  ] }) : /* @__PURE__ */ r.jsx(r.Fragment, { children: e });
}
const ra = J(
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
), sa = a.forwardRef(({ className: e, variant: t, ...s }, o) => /* @__PURE__ */ r.jsx(
  "div",
  {
    ref: o,
    role: "alert",
    className: c(ra({ variant: t }), e),
    ...s
  }
));
sa.displayName = "Alert";
const oa = a.forwardRef(({ className: e, ...t }, s) => /* @__PURE__ */ r.jsx(
  "h5",
  {
    ref: s,
    className: c("mb-1 font-medium leading-none tracking-tight", e),
    ...t
  }
));
oa.displayName = "AlertTitle";
const na = a.forwardRef(({ className: e, ...t }, s) => /* @__PURE__ */ r.jsx(
  "div",
  {
    ref: s,
    className: c("text-sm [&_p]:leading-relaxed", e),
    ...t
  }
));
na.displayName = "AlertDescription";
const aa = a.forwardRef(
  ({ className: e, text: t = "Loading...", size: s = "md", ...o }, n) => /* @__PURE__ */ r.jsxs(
    "div",
    {
      ref: n,
      className: c(
        "flex flex-col items-center justify-center gap-2 p-4",
        e
      ),
      ...o,
      children: [
        /* @__PURE__ */ r.jsx(st, { size: s }),
        t && /* @__PURE__ */ r.jsx("p", { className: "text-sm text-muted-foreground", children: t })
      ]
    }
  )
);
aa.displayName = "Loader";
function Ta() {
  const [e, t] = B("system");
  return $e(() => {
    const s = window.document.documentElement;
    if (s.classList.remove("light", "dark"), e === "system") {
      const o = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      s.classList.add(o);
    } else
      s.classList.add(e);
  }, [e]), { theme: e, setTheme: t };
}
function _a() {
  const [e, t] = B([]), s = ot(({ title: n, description: l, variant: i = "default" }) => {
    const u = Math.random().toString(36).substr(2, 9), f = { id: u, title: n, description: l, variant: i };
    return t((p) => [...p, f]), setTimeout(() => {
      t((p) => p.filter((h) => h.id !== u));
    }, 5e3), u;
  }, []), o = ot((n) => {
    t((l) => l.filter((i) => i.id !== n));
  }, []);
  return { toasts: e, toast: s, dismiss: o };
}
function Aa(e, t) {
  const [s, o] = B(() => {
    try {
      const l = window.localStorage.getItem(e);
      return l ? JSON.parse(l) : t;
    } catch {
      return t;
    }
  });
  return [s, (l) => {
    try {
      const i = l instanceof Function ? l(s) : l;
      o(i), window.localStorage.setItem(e, JSON.stringify(i));
    } catch (i) {
      console.error(i);
    }
  }];
}
function Ma(...e) {
  return e.filter(Boolean).join(" ");
}
function Pa(e, t = "USD") {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: t
  }).format(e);
}
function Oa(e, t = "short") {
  const s = new Date(e);
  return new Intl.DateTimeFormat("en-US", {
    dateStyle: t
  }).format(s);
}
export {
  Uo as Accordion,
  qo as AccordionContent,
  Wo as AccordionItem,
  Yo as AccordionTrigger,
  sa as Alert,
  na as AlertDescription,
  Jo as AlertDialog,
  Jt as AlertDialogAction,
  Xt as AlertDialogCancel,
  Ht as AlertDialogContent,
  qt as AlertDialogDescription,
  Wt as AlertDialogFooter,
  Ut as AlertDialogHeader,
  Yt as AlertDialogTitle,
  Xo as AlertDialogTrigger,
  oa as AlertTitle,
  ta as AppNavbar,
  Qn as AppSidebar,
  Zo as AspectRatio,
  gs as Avatar,
  bs as AvatarFallback,
  hs as AvatarImage,
  Ce as Badge,
  ko as Breadcrumb,
  Ao as BreadcrumbEllipsis,
  Ro as BreadcrumbItem,
  So as BreadcrumbLink,
  Co as BreadcrumbList,
  To as BreadcrumbPage,
  _o as BreadcrumbSeparator,
  M as Button,
  or as Calendar,
  es as Card,
  ss as CardContent,
  ts as CardHeader,
  rs as CardTitle,
  nn as Carousel,
  an as CarouselContent,
  ln as CarouselItem,
  dn as CarouselNext,
  cn as CarouselPrevious,
  us as Checkbox,
  ha as Collapsible,
  Qo as CollapsibleContent,
  Ko as CollapsibleTrigger,
  va as Combobox,
  Ze as Command,
  ba as CommandDialog,
  Qt as CommandEmpty,
  er as CommandGroup,
  Zt as CommandInput,
  tr as CommandItem,
  Kt as CommandList,
  en as CommandSeparator,
  tn as CommandShortcut,
  ya as DataTable,
  wa as DatePicker,
  os as Dialog,
  zt as DialogContent,
  ls as DialogFooter,
  ns as DialogHeader,
  as as DialogTitle,
  Na as Drawer,
  mn as DrawerClose,
  fn as DrawerContent,
  hn as DrawerDescription,
  xn as DrawerFooter,
  pn as DrawerHeader,
  gn as DrawerTitle,
  un as DrawerTrigger,
  Se as DropdownMenu,
  xe as DropdownMenuContent,
  G as DropdownMenuItem,
  Bt as DropdownMenuLabel,
  oe as DropdownMenuSeparator,
  pe as DropdownMenuTrigger,
  rn as Empty,
  Jn as Footer,
  bn as Form,
  wn as FormControl,
  Nn as FormDescription,
  vn as FormItem,
  yn as FormLabel,
  jn as FormMessage,
  Yn as Header,
  ja as HoverCard,
  Cn as HoverCardContent,
  kn as HoverCardTrigger,
  Ge as Input,
  Rn as InputOTP,
  Sn as InputOTPGroup,
  _n as InputOTPSeparator,
  Tn as InputOTPSlot,
  Mn as Kbd,
  It as Label,
  Sa as Layout,
  aa as Loader,
  ar as LogoutModal,
  ca as Modal,
  ma as ModalContent,
  fa as ModalFooter,
  da as ModalHeader,
  ua as ModalTitle,
  Zn as NavItem,
  Xn as Navigation,
  Mo as Pagination,
  Po as PaginationContent,
  Io as PaginationEllipsis,
  Oo as PaginationItem,
  qe as PaginationLink,
  zo as PaginationNext,
  Eo as PaginationPrevious,
  rr as Popover,
  et as PopoverContent,
  Qe as PopoverTrigger,
  $o as Progress,
  sn as RadioGroup,
  on as RadioGroupItem,
  Pn as ScrollArea,
  On as ScrollBar,
  is as Select,
  ms as Separator,
  ka as Sheet,
  In as SheetClose,
  Dn as SheetContent,
  Fn as SheetDescription,
  Vn as SheetFooter,
  Ln as SheetHeader,
  $n as SheetTitle,
  zn as SheetTrigger,
  qn as Sidebar,
  pa as Skeleton,
  Fo as Slider,
  st as Spinner,
  Do as Switch,
  Mt as Table,
  Ot as TableBody,
  Ve as TableCell,
  Et as TableHead,
  Pt as TableHeader,
  je as TableRow,
  xa as Tabs,
  xs as TabsContent,
  fs as TabsList,
  ps as TabsTrigger,
  Ra as TagsSelect,
  cs as Textarea,
  Ca as Toast,
  Bo as Toggle,
  Un as ToggleGroup,
  Wn as ToggleGroupItem,
  ga as Tooltip,
  Vo as TooltipContent,
  Lo as TooltipTrigger,
  ds as badgeVariants,
  Q as buttonVariants,
  c as cn,
  Pa as formatCurrency,
  Oa as formatDate,
  An as kbdVariants,
  Ma as mergeClass,
  Go as toggleVariants,
  Aa as useLocalStorage,
  Ta as useTheme,
  _a as useToast
};
