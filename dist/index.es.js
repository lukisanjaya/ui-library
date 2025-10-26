import * as l from "react";
import ht, { forwardRef as gt, createElement as ze, useState as B, useRef as dr, useEffect as $e, createContext as ur, useContext as mr, useCallback as ot } from "react";
import { createPortal as bt } from "react-dom";
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
function fr() {
  if (nt) return ue;
  nt = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function s(o, n, a) {
    var i = null;
    if (a !== void 0 && (i = "" + a), n.key !== void 0 && (i = "" + n.key), "key" in n) {
      a = {};
      for (var d in n)
        d !== "key" && (a[d] = n[d]);
    } else a = n;
    return n = a.ref, {
      $$typeof: e,
      type: o,
      key: i,
      ref: n !== void 0 ? n : null,
      props: a
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
function pr() {
  return at || (at = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(u) {
      if (u == null) return null;
      if (typeof u == "function")
        return u.$$typeof === be ? null : u.displayName || u.name || null;
      if (typeof u == "string") return u;
      switch (u) {
        case _:
          return "Fragment";
        case ee:
          return "Profiler";
        case D:
          return "StrictMode";
        case L:
          return "Suspense";
        case Z:
          return "SuspenseList";
        case ge:
          return "Activity";
      }
      if (typeof u == "object")
        switch (typeof u.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), u.$$typeof) {
          case v:
            return "Portal";
          case H:
            return u.displayName || "Context";
          case X:
            return (u._context.displayName || "Context") + ".Consumer";
          case U:
            var j = u.render;
            return u = u.displayName, u || (u = j.displayName || j.name || "", u = u !== "" ? "ForwardRef(" + u + ")" : "ForwardRef"), u;
          case N:
            return j = u.displayName || null, j !== null ? j : e(u.type) || "Memo";
          case E:
            j = u._payload, u = u._init;
            try {
              return e(u(j));
            } catch {
            }
        }
      return null;
    }
    function t(u) {
      return "" + u;
    }
    function s(u) {
      try {
        t(u);
        var j = !1;
      } catch {
        j = !0;
      }
      if (j) {
        j = console;
        var C = j.error, S = typeof Symbol == "function" && Symbol.toStringTag && u[Symbol.toStringTag] || u.constructor.name || "Object";
        return C.call(
          j,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          S
        ), t(u);
      }
    }
    function o(u) {
      if (u === _) return "<>";
      if (typeof u == "object" && u !== null && u.$$typeof === E)
        return "<...>";
      try {
        var j = e(u);
        return j ? "<" + j + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function n() {
      var u = W.A;
      return u === null ? null : u.getOwner();
    }
    function a() {
      return Error("react-stack-top-frame");
    }
    function i(u) {
      if (le.call(u, "key")) {
        var j = Object.getOwnPropertyDescriptor(u, "key").get;
        if (j && j.isReactWarning) return !1;
      }
      return u.key !== void 0;
    }
    function d(u, j) {
      function C() {
        O || (O = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          j
        ));
      }
      C.isReactWarning = !0, Object.defineProperty(u, "key", {
        get: C,
        configurable: !0
      });
    }
    function m() {
      var u = e(this.type);
      return I[u] || (I[u] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), u = this.props.ref, u !== void 0 ? u : null;
    }
    function f(u, j, C, S, V, te) {
      var R = C.ref;
      return u = {
        $$typeof: p,
        type: u,
        key: j,
        props: C,
        _owner: S
      }, (R !== void 0 ? R : null) !== null ? Object.defineProperty(u, "ref", {
        enumerable: !1,
        get: m
      }) : Object.defineProperty(u, "ref", { enumerable: !1, value: null }), u._store = {}, Object.defineProperty(u._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(u, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(u, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: V
      }), Object.defineProperty(u, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: te
      }), Object.freeze && (Object.freeze(u.props), Object.freeze(u)), u;
    }
    function b(u, j, C, S, V, te) {
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
        R = e(u);
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
      return R && d(
        C,
        typeof u == "function" ? u.displayName || u.name || "Unknown" : u
      ), f(
        u,
        R,
        C,
        n(),
        V,
        te
      );
    }
    function w(u) {
      A(u) ? u._store && (u._store.validated = 1) : typeof u == "object" && u !== null && u.$$typeof === E && (u._payload.status === "fulfilled" ? A(u._payload.value) && u._payload.value._store && (u._payload.value._store.validated = 1) : u._store && (u._store.validated = 1));
    }
    function A(u) {
      return typeof u == "object" && u !== null && u.$$typeof === p;
    }
    var x = ht, p = Symbol.for("react.transitional.element"), v = Symbol.for("react.portal"), _ = Symbol.for("react.fragment"), D = Symbol.for("react.strict_mode"), ee = Symbol.for("react.profiler"), X = Symbol.for("react.consumer"), H = Symbol.for("react.context"), U = Symbol.for("react.forward_ref"), L = Symbol.for("react.suspense"), Z = Symbol.for("react.suspense_list"), N = Symbol.for("react.memo"), E = Symbol.for("react.lazy"), ge = Symbol.for("react.activity"), be = Symbol.for("react.client.reference"), W = x.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, le = Object.prototype.hasOwnProperty, ie = Array.isArray, z = console.createTask ? console.createTask : function() {
      return null;
    };
    x = {
      react_stack_bottom_frame: function(u) {
        return u();
      }
    };
    var O, I = {}, y = x.react_stack_bottom_frame.bind(
      x,
      a
    )(), ce = z(o(a)), de = {};
    me.Fragment = _, me.jsx = function(u, j, C) {
      var S = 1e4 > W.recentlyCreatedOwnerStacks++;
      return b(
        u,
        j,
        C,
        !1,
        S ? Error("react-stack-top-frame") : y,
        S ? z(o(u)) : ce
      );
    }, me.jsxs = function(u, j, C) {
      var S = 1e4 > W.recentlyCreatedOwnerStacks++;
      return b(
        u,
        j,
        C,
        !0,
        S ? Error("react-stack-top-frame") : y,
        S ? z(o(u)) : ce
      );
    };
  })()), me;
}
var lt;
function xr() {
  return lt || (lt = 1, process.env.NODE_ENV === "production" ? ye.exports = fr() : ye.exports = pr()), ye.exports;
}
var r = xr();
function it(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function hr(...e) {
  return (t) => {
    let s = !1;
    const o = e.map((n) => {
      const a = it(n, t);
      return !s && typeof a == "function" && (s = !0), a;
    });
    if (s)
      return () => {
        for (let n = 0; n < o.length; n++) {
          const a = o[n];
          typeof a == "function" ? a() : it(e[n], null);
        }
      };
  };
}
// @__NO_SIDE_EFFECTS__
function gr(e) {
  const t = /* @__PURE__ */ br(e), s = l.forwardRef((o, n) => {
    const { children: a, ...i } = o, d = l.Children.toArray(a), m = d.find(yr);
    if (m) {
      const f = m.props.children, b = d.map((w) => w === m ? l.Children.count(f) > 1 ? l.Children.only(null) : l.isValidElement(f) ? f.props.children : null : w);
      return /* @__PURE__ */ r.jsx(t, { ...i, ref: n, children: l.isValidElement(f) ? l.cloneElement(f, void 0, b) : null });
    }
    return /* @__PURE__ */ r.jsx(t, { ...i, ref: n, children: a });
  });
  return s.displayName = `${e}.Slot`, s;
}
var vt = /* @__PURE__ */ gr("Slot");
// @__NO_SIDE_EFFECTS__
function br(e) {
  const t = l.forwardRef((s, o) => {
    const { children: n, ...a } = s;
    if (l.isValidElement(n)) {
      const i = Nr(n), d = wr(a, n.props);
      return n.type !== l.Fragment && (d.ref = o ? hr(o, i) : i), l.cloneElement(n, d);
    }
    return l.Children.count(n) > 1 ? l.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var vr = Symbol("radix.slottable");
function yr(e) {
  return l.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === vr;
}
function wr(e, t) {
  const s = { ...t };
  for (const o in t) {
    const n = e[o], a = t[o];
    /^on[A-Z]/.test(o) ? n && a ? s[o] = (...d) => {
      const m = a(...d);
      return n(...d), m;
    } : n && (s[o] = n) : o === "style" ? s[o] = { ...n, ...a } : o === "className" && (s[o] = [n, a].filter(Boolean).join(" "));
  }
  return { ...e, ...s };
}
function Nr(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, s = t && "isReactWarning" in t && t.isReactWarning;
  return s ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, s = t && "isReactWarning" in t && t.isReactWarning, s ? e.props.ref : e.props.ref || e.ref);
}
function yt(e) {
  var t, s, o = "";
  if (typeof e == "string" || typeof e == "number") o += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var n = e.length;
    for (t = 0; t < n; t++) e[t] && (s = yt(e[t])) && (o && (o += " "), o += s);
  } else for (s in e) e[s] && (o && (o += " "), o += s);
  return o;
}
function wt() {
  for (var e, t, s = 0, o = "", n = arguments.length; s < n; s++) (e = arguments[s]) && (t = yt(e)) && (o && (o += " "), o += t);
  return o;
}
const ct = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, dt = wt, J = (e, t) => (s) => {
  var o;
  if (t?.variants == null) return dt(e, s?.class, s?.className);
  const { variants: n, defaultVariants: a } = t, i = Object.keys(n).map((f) => {
    const b = s?.[f], w = a?.[f];
    if (b === null) return null;
    const A = ct(b) || ct(w);
    return n[f][A];
  }), d = s && Object.entries(s).reduce((f, b) => {
    let [w, A] = b;
    return A === void 0 || (f[w] = A), f;
  }, {}), m = t == null || (o = t.compoundVariants) === null || o === void 0 ? void 0 : o.reduce((f, b) => {
    let { class: w, className: A, ...x } = b;
    return Object.entries(x).every((p) => {
      let [v, _] = p;
      return Array.isArray(_) ? _.includes({
        ...a,
        ...d
      }[v]) : {
        ...a,
        ...d
      }[v] === _;
    }) ? [
      ...f,
      w,
      A
    ] : f;
  }, []);
  return dt(e, i, m, s?.class, s?.className);
}, Fe = "-", jr = (e) => {
  const t = Cr(e), {
    conflictingClassGroups: s,
    conflictingClassGroupModifiers: o
  } = e;
  return {
    getClassGroupId: (i) => {
      const d = i.split(Fe);
      return d[0] === "" && d.length !== 1 && d.shift(), Nt(d, t) || kr(i);
    },
    getConflictingClassGroupIds: (i, d) => {
      const m = s[i] || [];
      return d && o[i] ? [...m, ...o[i]] : m;
    }
  };
}, Nt = (e, t) => {
  if (e.length === 0)
    return t.classGroupId;
  const s = e[0], o = t.nextPart.get(s), n = o ? Nt(e.slice(1), o) : void 0;
  if (n)
    return n;
  if (t.validators.length === 0)
    return;
  const a = e.join(Fe);
  return t.validators.find(({
    validator: i
  }) => i(a))?.classGroupId;
}, ut = /^\[(.+)\]$/, kr = (e) => {
  if (ut.test(e)) {
    const t = ut.exec(e)[1], s = t?.substring(0, t.indexOf(":"));
    if (s)
      return "arbitrary.." + s;
  }
}, Cr = (e) => {
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
      const a = n === "" ? t : mt(t, n);
      a.classGroupId = s;
      return;
    }
    if (typeof n == "function") {
      if (Rr(n)) {
        Ie(n(o), t, s, o);
        return;
      }
      t.validators.push({
        validator: n,
        classGroupId: s
      });
      return;
    }
    Object.entries(n).forEach(([a, i]) => {
      Ie(i, mt(t, a), s, o);
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
}, Rr = (e) => e.isThemeGetter, Sr = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, s = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map();
  const n = (a, i) => {
    s.set(a, i), t++, t > e && (t = 0, o = s, s = /* @__PURE__ */ new Map());
  };
  return {
    get(a) {
      let i = s.get(a);
      if (i !== void 0)
        return i;
      if ((i = o.get(a)) !== void 0)
        return n(a, i), i;
    },
    set(a, i) {
      s.has(a) ? s.set(a, i) : n(a, i);
    }
  };
}, De = "!", Le = ":", Tr = Le.length, _r = (e) => {
  const {
    prefix: t,
    experimentalParseClassName: s
  } = e;
  let o = (n) => {
    const a = [];
    let i = 0, d = 0, m = 0, f;
    for (let p = 0; p < n.length; p++) {
      let v = n[p];
      if (i === 0 && d === 0) {
        if (v === Le) {
          a.push(n.slice(m, p)), m = p + Tr;
          continue;
        }
        if (v === "/") {
          f = p;
          continue;
        }
      }
      v === "[" ? i++ : v === "]" ? i-- : v === "(" ? d++ : v === ")" && d--;
    }
    const b = a.length === 0 ? n : n.substring(m), w = Ar(b), A = w !== b, x = f && f > m ? f - m : void 0;
    return {
      modifiers: a,
      hasImportantModifier: A,
      baseClassName: w,
      maybePostfixModifierPosition: x
    };
  };
  if (t) {
    const n = t + Le, a = o;
    o = (i) => i.startsWith(n) ? a(i.substring(n.length)) : {
      isExternal: !0,
      modifiers: [],
      hasImportantModifier: !1,
      baseClassName: i,
      maybePostfixModifierPosition: void 0
    };
  }
  if (s) {
    const n = o;
    o = (a) => s({
      className: a,
      parseClassName: n
    });
  }
  return o;
}, Ar = (e) => e.endsWith(De) ? e.substring(0, e.length - 1) : e.startsWith(De) ? e.substring(1) : e, Mr = (e) => {
  const t = Object.fromEntries(e.orderSensitiveModifiers.map((o) => [o, !0]));
  return (o) => {
    if (o.length <= 1)
      return o;
    const n = [];
    let a = [];
    return o.forEach((i) => {
      i[0] === "[" || t[i] ? (n.push(...a.sort(), i), a = []) : a.push(i);
    }), n.push(...a.sort()), n;
  };
}, Pr = (e) => ({
  cache: Sr(e.cacheSize),
  parseClassName: _r(e),
  sortModifiers: Mr(e),
  ...jr(e)
}), Er = /\s+/, Or = (e, t) => {
  const {
    parseClassName: s,
    getClassGroupId: o,
    getConflictingClassGroupIds: n,
    sortModifiers: a
  } = t, i = [], d = e.trim().split(Er);
  let m = "";
  for (let f = d.length - 1; f >= 0; f -= 1) {
    const b = d[f], {
      isExternal: w,
      modifiers: A,
      hasImportantModifier: x,
      baseClassName: p,
      maybePostfixModifierPosition: v
    } = s(b);
    if (w) {
      m = b + (m.length > 0 ? " " + m : m);
      continue;
    }
    let _ = !!v, D = o(_ ? p.substring(0, v) : p);
    if (!D) {
      if (!_) {
        m = b + (m.length > 0 ? " " + m : m);
        continue;
      }
      if (D = o(p), !D) {
        m = b + (m.length > 0 ? " " + m : m);
        continue;
      }
      _ = !1;
    }
    const ee = a(A).join(":"), X = x ? ee + De : ee, H = X + D;
    if (i.includes(H))
      continue;
    i.push(H);
    const U = n(D, _);
    for (let L = 0; L < U.length; ++L) {
      const Z = U[L];
      i.push(X + Z);
    }
    m = b + (m.length > 0 ? " " + m : m);
  }
  return m;
};
function zr() {
  let e = 0, t, s, o = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (s = jt(t)) && (o && (o += " "), o += s);
  return o;
}
const jt = (e) => {
  if (typeof e == "string")
    return e;
  let t, s = "";
  for (let o = 0; o < e.length; o++)
    e[o] && (t = jt(e[o])) && (s && (s += " "), s += t);
  return s;
};
function Ir(e, ...t) {
  let s, o, n, a = i;
  function i(m) {
    const f = t.reduce((b, w) => w(b), e());
    return s = Pr(f), o = s.cache.get, n = s.cache.set, a = d, d(m);
  }
  function d(m) {
    const f = o(m);
    if (f)
      return f;
    const b = Or(m, s);
    return n(m, b), b;
  }
  return function() {
    return a(zr.apply(null, arguments));
  };
}
const P = (e) => {
  const t = (s) => s[e] || [];
  return t.isThemeGetter = !0, t;
}, kt = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Ct = /^\((?:(\w[\w-]*):)?(.+)\)$/i, Dr = /^\d+\/\d+$/, Lr = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Vr = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, $r = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, Fr = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Gr = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, se = (e) => Dr.test(e), k = (e) => !!e && !Number.isNaN(Number(e)), q = (e) => !!e && Number.isInteger(Number(e)), Ee = (e) => e.endsWith("%") && k(e.slice(0, -1)), F = (e) => Lr.test(e), Br = () => !0, Hr = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Vr.test(e) && !$r.test(e)
), Rt = () => !1, Ur = (e) => Fr.test(e), Wr = (e) => Gr.test(e), Yr = (e) => !h(e) && !g(e), qr = (e) => ne(e, _t, Rt), h = (e) => kt.test(e), K = (e) => ne(e, At, Hr), Oe = (e) => ne(e, Qr, k), ft = (e) => ne(e, St, Rt), Jr = (e) => ne(e, Tt, Wr), we = (e) => ne(e, Mt, Ur), g = (e) => Ct.test(e), fe = (e) => ae(e, At), Xr = (e) => ae(e, es), pt = (e) => ae(e, St), Zr = (e) => ae(e, _t), Kr = (e) => ae(e, Tt), Ne = (e) => ae(e, Mt, !0), ne = (e, t, s) => {
  const o = kt.exec(e);
  return o ? o[1] ? t(o[1]) : s(o[2]) : !1;
}, ae = (e, t, s = !1) => {
  const o = Ct.exec(e);
  return o ? o[1] ? t(o[1]) : s : !1;
}, St = (e) => e === "position" || e === "percentage", Tt = (e) => e === "image" || e === "url", _t = (e) => e === "length" || e === "size" || e === "bg-size", At = (e) => e === "length", Qr = (e) => e === "number", es = (e) => e === "family-name", Mt = (e) => e === "shadow", ts = () => {
  const e = P("color"), t = P("font"), s = P("text"), o = P("font-weight"), n = P("tracking"), a = P("leading"), i = P("breakpoint"), d = P("container"), m = P("spacing"), f = P("radius"), b = P("shadow"), w = P("inset-shadow"), A = P("text-shadow"), x = P("drop-shadow"), p = P("blur"), v = P("perspective"), _ = P("aspect"), D = P("ease"), ee = P("animate"), X = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], H = () => [
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
  ], U = () => [...H(), g, h], L = () => ["auto", "hidden", "clip", "visible", "scroll"], Z = () => ["auto", "contain", "none"], N = () => [g, h, m], E = () => [se, "full", "auto", ...N()], ge = () => [q, "none", "subgrid", g, h], be = () => ["auto", {
    span: ["full", q, g, h]
  }, q, g, h], W = () => [q, "auto", g, h], le = () => ["auto", "min", "max", "fr", g, h], ie = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], z = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], O = () => ["auto", ...N()], I = () => [se, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...N()], y = () => [e, g, h], ce = () => [...H(), pt, ft, {
    position: [g, h]
  }], de = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], u = () => ["auto", "cover", "contain", Zr, qr, {
    size: [g, h]
  }], j = () => [Ee, fe, K], C = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    f,
    g,
    h
  ], S = () => ["", k, fe, K], V = () => ["solid", "dashed", "dotted", "double"], te = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], R = () => [k, Ee, pt, ft], $ = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    p,
    g,
    h
  ], Y = () => ["none", k, g, h], re = () => ["none", k, g, h], Pe = () => [k, g, h], ve = () => [se, "full", ...N()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [F],
      breakpoint: [F],
      color: [Br],
      container: [F],
      "drop-shadow": [F],
      ease: ["in", "out", "in-out"],
      font: [Yr],
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
        aspect: ["auto", "square", se, h, g, _]
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
        columns: [k, h, g, d]
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
        inset: E()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": E()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": E()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: E()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: E()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: E()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: E()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: E()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: E()
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
        z: [q, "auto", g, h]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [se, "full", "auto", d, ...N()]
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
        flex: [k, se, "auto", "initial", "none", h]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", k, g, h]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", k, g, h]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [q, "first", "last", "none", g, h]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": ge()
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
        "grid-rows": ge()
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
        m: O()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: O()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: O()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: O()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: O()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: O()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: O()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: O()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: O()
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
        w: [d, "screen", ...I()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          d,
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
          d,
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
        font: [o, g, Oe]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Ee, h]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Xr, h, t]
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
        tracking: [n, g, h]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [k, "none", g, Oe]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          a,
          ...N()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", g, h]
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
        list: ["disc", "decimal", "none", g, h]
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
        "underline-offset": [k, "auto", g, h]
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
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", g, h]
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
        content: ["none", g, h]
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
        bg: u()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, q, g, h],
          radial: ["", g, h],
          conic: [q, g, h]
        }, Kr, Jr]
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
        "outline-offset": [k, g, h]
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
          b,
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
        "text-shadow": ["none", A, Ne, we]
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
        opacity: [k, g, h]
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
        "mask-radial": [g, h]
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
        mask: u()
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
        mask: ["none", g, h]
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
          h
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
        brightness: [k, g, h]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [k, g, h]
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
          x,
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
        grayscale: ["", k, g, h]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [k, g, h]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", k, g, h]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [k, g, h]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", k, g, h]
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
          h
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
        "backdrop-brightness": [k, g, h]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [k, g, h]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", k, g, h]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [k, g, h]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", k, g, h]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [k, g, h]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [k, g, h]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", k, g, h]
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
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", g, h]
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
        duration: [k, "initial", g, h]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", D, g, h]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [k, g, h]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", ee, g, h]
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
        perspective: [v, g, h]
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
        transform: [g, h, "", "none", "gpu", "cpu"]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", g, h]
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
        "will-change": ["auto", "scroll", "contents", "transform", g, h]
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
        stroke: [k, fe, K, Oe]
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
}, rs = /* @__PURE__ */ Ir(ts);
function c(...e) {
  return rs(wt(e));
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
), M = l.forwardRef(
  ({ className: e, variant: t, size: s, asChild: o = !1, ...n }, a) => {
    const i = o ? vt : "button";
    return /* @__PURE__ */ r.jsx(
      i,
      {
        className: c(Q({ variant: t, size: s, className: e })),
        ref: a,
        ...n
      }
    );
  }
);
M.displayName = "Button";
const ss = l.forwardRef(({ className: e, ...t }, s) => /* @__PURE__ */ r.jsx(
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
ss.displayName = "Card";
const os = l.forwardRef(({ className: e, ...t }, s) => /* @__PURE__ */ r.jsx(
  "div",
  {
    ref: s,
    className: c("flex flex-col space-y-1.5 p-6", e),
    ...t
  }
));
os.displayName = "CardHeader";
const ns = l.forwardRef(({ className: e, ...t }, s) => /* @__PURE__ */ r.jsx(
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
ns.displayName = "CardTitle";
const as = l.forwardRef(({ className: e, ...t }, s) => /* @__PURE__ */ r.jsx("div", { ref: s, className: c("p-6 pt-0", e), ...t }));
as.displayName = "CardContent";
const Ge = l.forwardRef(
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
const pa = ({ isOpen: e, onClose: t, children: s, className: o }) => e ? /* @__PURE__ */ r.jsxs("div", { className: "fixed inset-0 z-50 flex items-center justify-center", children: [
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
] }) : null, xa = ({ children: e, className: t }) => /* @__PURE__ */ r.jsx("div", { className: c("mb-4", t), children: e }), ha = ({ children: e, className: t }) => /* @__PURE__ */ r.jsx("h2", { className: c("text-lg font-semibold", t), children: e }), ga = ({ children: e, className: t }) => /* @__PURE__ */ r.jsx("div", { className: c("mb-4", t), children: e }), ba = ({ children: e, className: t }) => /* @__PURE__ */ r.jsx("div", { className: c("flex justify-end gap-2", t), children: e }), Pt = l.forwardRef(({ className: e, ...t }, s) => /* @__PURE__ */ r.jsx("div", { className: "relative w-full overflow-auto", children: /* @__PURE__ */ r.jsx(
  "table",
  {
    ref: s,
    className: c("w-full caption-bottom text-sm", e),
    ...t
  }
) }));
Pt.displayName = "Table";
const Et = l.forwardRef(({ className: e, ...t }, s) => /* @__PURE__ */ r.jsx("thead", { ref: s, className: c("[&_tr]:border-b", e), ...t }));
Et.displayName = "TableHeader";
const Ot = l.forwardRef(({ className: e, ...t }, s) => /* @__PURE__ */ r.jsx(
  "tbody",
  {
    ref: s,
    className: c("[&_tr:last-child]:border-0", e),
    ...t
  }
));
Ot.displayName = "TableBody";
const je = l.forwardRef(({ className: e, ...t }, s) => /* @__PURE__ */ r.jsx(
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
const zt = l.forwardRef(({ className: e, ...t }, s) => /* @__PURE__ */ r.jsx(
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
zt.displayName = "TableHead";
const Ve = l.forwardRef(({ className: e, ...t }, s) => /* @__PURE__ */ r.jsx(
  "td",
  {
    ref: s,
    className: c("p-4 align-middle [&:has([role=checkbox])]:pr-0", e),
    ...t
  }
));
Ve.displayName = "TableCell";
const ls = ({ open: e, onOpenChange: t, children: s }) => e ? /* @__PURE__ */ r.jsxs("div", { className: "fixed inset-0 z-50 flex items-center justify-center", children: [
  /* @__PURE__ */ r.jsx(
    "div",
    {
      className: "fixed inset-0 bg-black/50",
      onClick: () => t(!1)
    }
  ),
  /* @__PURE__ */ r.jsx("div", { className: "relative z-10", children: s })
] }) : null, It = l.forwardRef(({ className: e, children: t, ...s }, o) => /* @__PURE__ */ r.jsx(
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
It.displayName = "DialogContent";
const is = ({ className: e, ...t }) => /* @__PURE__ */ r.jsx(
  "div",
  {
    className: c("flex flex-col space-y-1.5 text-center sm:text-left", e),
    ...t
  }
);
is.displayName = "DialogHeader";
const cs = l.forwardRef(({ className: e, ...t }, s) => /* @__PURE__ */ r.jsx(
  "h3",
  {
    ref: s,
    className: c("text-lg font-semibold leading-none tracking-tight", e),
    ...t
  }
));
cs.displayName = "DialogTitle";
const ds = ({ className: e, ...t }) => /* @__PURE__ */ r.jsx(
  "div",
  {
    className: c("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", e),
    ...t
  }
);
ds.displayName = "DialogFooter";
const Dt = l.forwardRef(
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
Dt.displayName = "Label";
const us = l.forwardRef(
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
us.displayName = "Select";
const ms = l.forwardRef(
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
ms.displayName = "Textarea";
const fs = J(
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
  return /* @__PURE__ */ r.jsx("div", { className: c(fs({ variant: t }), e), ...s });
}
const ps = l.forwardRef(
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
ps.displayName = "Checkbox";
const xs = l.forwardRef(
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
xs.displayName = "Separator";
function va({
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
const Be = l.createContext(void 0), ya = ({ value: e, onValueChange: t, children: s, className: o }) => /* @__PURE__ */ r.jsx(Be.Provider, { value: { value: e, onValueChange: t }, children: /* @__PURE__ */ r.jsx("div", { className: c("w-full", o), children: s }) }), hs = l.forwardRef(({ className: e, ...t }, s) => /* @__PURE__ */ r.jsx(
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
hs.displayName = "TabsList";
const gs = l.forwardRef(
  ({ className: e, value: t, ...s }, o) => {
    const n = l.useContext(Be), a = n?.value === t;
    return /* @__PURE__ */ r.jsx(
      "button",
      {
        ref: o,
        className: c(
          "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          a && "bg-background text-foreground shadow-sm",
          e
        ),
        onClick: () => n?.onValueChange(t),
        ...s
      }
    );
  }
);
gs.displayName = "TabsTrigger";
const bs = l.forwardRef(
  ({ className: e, value: t, ...s }, o) => l.useContext(Be)?.value !== t ? null : /* @__PURE__ */ r.jsx(
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
bs.displayName = "TabsContent";
const vs = l.forwardRef(
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
vs.displayName = "Avatar";
const ys = l.forwardRef(
  ({ className: e, ...t }, s) => /* @__PURE__ */ r.jsx(
    "img",
    {
      ref: s,
      className: c("aspect-square h-full w-full", e),
      ...t
    }
  )
);
ys.displayName = "AvatarImage";
const ws = l.forwardRef(
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
ws.displayName = "AvatarFallback";
/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ns = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), js = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, s, o) => o ? o.toUpperCase() : s.toLowerCase()
), xt = (e) => {
  const t = js(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, Lt = (...e) => e.filter((t, s, o) => !!t && t.trim() !== "" && o.indexOf(t) === s).join(" ").trim(), ks = (e) => {
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
var Cs = {
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
const Rs = gt(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: s = 2,
    absoluteStrokeWidth: o,
    className: n = "",
    children: a,
    iconNode: i,
    ...d
  }, m) => ze(
    "svg",
    {
      ref: m,
      ...Cs,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: o ? Number(s) * 24 / Number(t) : s,
      className: Lt("lucide", n),
      ...!a && !ks(d) && { "aria-hidden": "true" },
      ...d
    },
    [
      ...i.map(([f, b]) => ze(f, b)),
      ...Array.isArray(a) ? a : [a]
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
    ({ className: o, ...n }, a) => ze(Rs, {
      ref: a,
      iconNode: t,
      className: Lt(
        `lucide-${Ns(xt(e))}`,
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
const Ss = [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
], Ts = T("arrow-left", Ss);
/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _s = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
], As = T("arrow-right", _s);
/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ms = [
  ["path", { d: "M10.268 21a2 2 0 0 0 3.464 0", key: "vwvbt9" }],
  [
    "path",
    {
      d: "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",
      key: "11g9vi"
    }
  ]
], Ps = T("bell", Ms);
/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Es = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }]
], Os = T("calendar", Es);
/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zs = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], Vt = T("check", zs);
/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Is = [
  [
    "path",
    {
      d: "M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z",
      key: "1qvrer"
    }
  ],
  ["path", { d: "M6 17h12", key: "1jwigz" }]
], Ds = T("chef-hat", Is);
/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ls = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], Re = T("chevron-down", Ls);
/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vs = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], $t = T("chevron-left", Vs);
/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $s = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], Te = T("chevron-right", $s);
/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fs = [
  ["path", { d: "m7 15 5 5 5-5", key: "1hf1tw" }],
  ["path", { d: "m7 9 5-5 5 5", key: "sgt6xg" }]
], Gs = T("chevrons-up-down", Fs);
/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bs = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
  ["path", { d: "M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662", key: "154egf" }]
], Hs = T("circle-user", Bs);
/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Us = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]], Ws = T("circle", Us);
/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ys = [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "19", cy: "12", r: "1", key: "1wjl8i" }],
  ["circle", { cx: "5", cy: "12", r: "1", key: "1pcz8c" }]
], Ft = T("ellipsis", Ys);
/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qs = [
  ["path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" }],
  [
    "path",
    {
      d: "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
      key: "r6nss1"
    }
  ]
], Gt = T("house", qs);
/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Js = [
  ["path", { d: "m16 17 5-5-5-5", key: "1bji2h" }],
  ["path", { d: "M21 12H9", key: "dn1m92" }],
  ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }]
], He = T("log-out", Js);
/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xs = [
  ["path", { d: "M4 5h16", key: "1tepv9" }],
  ["path", { d: "M4 12h16", key: "1lakjw" }],
  ["path", { d: "M4 19h16", key: "1djgab" }]
], Bt = T("menu", Xs);
/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zs = [
  [
    "path",
    {
      d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",
      key: "1sd12s"
    }
  ]
], Ks = T("message-circle", Zs);
/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qs = [
  [
    "path",
    {
      d: "M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",
      key: "kfwtm"
    }
  ]
], eo = T("moon", Qs);
/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const to = [
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
], ro = T("package", to);
/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const so = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], oo = T("plus", so);
/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const no = [
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
], ao = T("quote", no);
/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lo = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
], io = T("search", lo);
/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const co = [
  [
    "path",
    {
      d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
      key: "1i5ecw"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], Ue = T("settings", co);
/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const uo = [
  ["circle", { cx: "8", cy: "21", r: "1", key: "jimo8o" }],
  ["circle", { cx: "19", cy: "21", r: "1", key: "13723u" }],
  [
    "path",
    {
      d: "M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",
      key: "9zh506"
    }
  ]
], mo = T("shopping-cart", uo);
/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fo = [
  [
    "path",
    { d: "M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344", key: "2acyp4" }
  ],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
], po = T("square-check-big", fo);
/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xo = [
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
  ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
  ["path", { d: "M2 12h2", key: "1t8f8n" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }],
  ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
  ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }]
], ho = T("sun", xo);
/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const go = [
  [
    "path",
    {
      d: "M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",
      key: "vktsd0"
    }
  ],
  ["circle", { cx: "7.5", cy: "7.5", r: ".5", fill: "currentColor", key: "kqv944" }]
], bo = T("tag", go);
/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vo = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
], yo = T("trash-2", vo);
/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wo = [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
], ke = T("user", wo);
/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const No = [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["path", { d: "M16 3.128a4 4 0 0 1 0 7.744", key: "16gr8j" }],
  ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }]
], jo = T("users", No);
/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ko = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], We = T("x", ko);
/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Co = [
  [
    "path",
    {
      d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
      key: "1xq2db"
    }
  ]
], Ro = T("zap", Co), So = l.forwardRef(({ ...e }, t) => /* @__PURE__ */ r.jsx("nav", { ref: t, "aria-label": "breadcrumb", ...e }));
So.displayName = "Breadcrumb";
const To = l.forwardRef(({ className: e, ...t }, s) => /* @__PURE__ */ r.jsx(
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
To.displayName = "BreadcrumbList";
const _o = l.forwardRef(({ className: e, ...t }, s) => /* @__PURE__ */ r.jsx(
  "li",
  {
    ref: s,
    className: c("inline-flex items-center gap-1.5", e),
    ...t
  }
));
_o.displayName = "BreadcrumbItem";
const Ao = l.forwardRef(({ asChild: e, className: t, ...s }, o) => {
  const n = e ? vt : "a";
  return /* @__PURE__ */ r.jsx(
    n,
    {
      ref: o,
      className: c("transition-colors hover:text-foreground", t),
      ...s
    }
  );
});
Ao.displayName = "BreadcrumbLink";
const Mo = l.forwardRef(({ className: e, ...t }, s) => /* @__PURE__ */ r.jsx(
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
Mo.displayName = "BreadcrumbPage";
const Po = ({
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
Po.displayName = "BreadcrumbSeparator";
const Eo = ({
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
      /* @__PURE__ */ r.jsx(Ft, { className: "h-4 w-4" }),
      /* @__PURE__ */ r.jsx("span", { className: "sr-only", children: "More" })
    ]
  }
);
Eo.displayName = "BreadcrumbEllipsis";
const Ye = l.createContext({ isOpen: !1, setIsOpen: () => {
} }), Se = ({ children: e }) => {
  const [t, s] = l.useState(!1);
  return /* @__PURE__ */ r.jsx(Ye.Provider, { value: { isOpen: t, setIsOpen: s }, children: /* @__PURE__ */ r.jsxs("div", { className: "relative block text-left", children: [
    e,
    t && bt(
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
}, pe = l.forwardRef(({ className: e, children: t, asChild: s, ...o }, n) => {
  const { setIsOpen: a } = l.useContext(Ye);
  if (s && l.isValidElement(t)) {
    const i = t.props;
    return l.cloneElement(t, {
      ...i,
      onClick: (d) => {
        i.onClick?.(d), a(!0);
      }
    });
  }
  return /* @__PURE__ */ r.jsx(
    "button",
    {
      ref: n,
      type: "button",
      className: c("inline-flex items-center cursor-pointer", e),
      onClick: () => a(!0),
      ...o,
      children: t
    }
  );
});
pe.displayName = "DropdownMenuTrigger";
const xe = l.forwardRef(({ className: e, align: t = "start", side: s = "bottom", ...o }, n) => {
  const { isOpen: a } = l.useContext(Ye);
  if (!a) return null;
  const i = /* @__PURE__ */ r.jsx(
    "div",
    {
      ref: n,
      className: c(
        "fixed z-[99999] min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg",
        t === "end" ? "right-2 sm:right-4" : "left-2 sm:left-4",
        s === "top" ? "top-16" : "bottom-16",
        e
      ),
      ...o
    }
  );
  return bt(i, document.body);
});
xe.displayName = "DropdownMenuContent";
const G = l.forwardRef(({ className: e, ...t }, s) => /* @__PURE__ */ r.jsx(
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
const oe = l.forwardRef(({ className: e, ...t }, s) => /* @__PURE__ */ r.jsx(
  "div",
  {
    ref: s,
    className: c("-mx-1 my-1 h-px bg-muted", e),
    ...t
  }
));
oe.displayName = "DropdownMenuSeparator";
const Ht = l.forwardRef(({ className: e, ...t }, s) => /* @__PURE__ */ r.jsx(
  "div",
  {
    ref: s,
    className: c("px-2 py-1.5 text-sm font-semibold", e),
    ...t
  }
));
Ht.displayName = "DropdownMenuLabel";
const Oo = ({ className: e, ...t }) => /* @__PURE__ */ r.jsx(
  "nav",
  {
    role: "navigation",
    "aria-label": "pagination",
    className: c("mx-auto flex w-full justify-center", e),
    ...t
  }
);
Oo.displayName = "Pagination";
const zo = l.forwardRef(({ className: e, ...t }, s) => /* @__PURE__ */ r.jsx(
  "ul",
  {
    ref: s,
    className: c("flex flex-row items-center gap-1", e),
    ...t
  }
));
zo.displayName = "PaginationContent";
const Io = l.forwardRef(({ className: e, ...t }, s) => /* @__PURE__ */ r.jsx("li", { ref: s, className: c("", e), ...t }));
Io.displayName = "PaginationItem";
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
const Do = ({
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
      /* @__PURE__ */ r.jsx($t, { className: "h-4 w-4" }),
      /* @__PURE__ */ r.jsx("span", { children: "Previous" })
    ]
  }
);
Do.displayName = "PaginationPrevious";
const Lo = ({
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
Lo.displayName = "PaginationNext";
const Vo = ({
  className: e,
  ...t
}) => /* @__PURE__ */ r.jsxs(
  "span",
  {
    "aria-hidden": !0,
    className: c("flex h-9 w-9 items-center justify-center", e),
    ...t,
    children: [
      /* @__PURE__ */ r.jsx(Ft, { className: "h-4 w-4" }),
      /* @__PURE__ */ r.jsx("span", { className: "sr-only", children: "More pages" })
    ]
  }
);
Vo.displayName = "PaginationEllipsis";
const $o = l.forwardRef(
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
$o.displayName = "Switch";
const Je = l.createContext({ open: !1, onOpenChange: () => {
} }), wa = ({ children: e }) => {
  const [t, s] = l.useState(!1);
  return /* @__PURE__ */ r.jsx(Je.Provider, { value: { open: t, onOpenChange: s }, children: /* @__PURE__ */ r.jsx("div", { className: "relative inline-block", children: e }) });
}, Fo = l.forwardRef(
  ({ className: e, children: t, asChild: s, ...o }, n) => {
    const { onOpenChange: a } = l.useContext(Je);
    if (s && l.isValidElement(t)) {
      const i = t.props;
      return l.cloneElement(t, {
        ...i,
        onMouseEnter: () => a(!0),
        onMouseLeave: () => a(!1)
      });
    }
    return /* @__PURE__ */ r.jsx(
      "div",
      {
        ref: n,
        className: e,
        onMouseEnter: () => a(!0),
        onMouseLeave: () => a(!1),
        ...o,
        children: t
      }
    );
  }
);
Fo.displayName = "TooltipTrigger";
const Go = l.forwardRef(
  ({ className: e, children: t, ...s }, o) => {
    const { open: n } = l.useContext(Je);
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
Go.displayName = "TooltipContent";
const Bo = l.forwardRef(
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
Bo.displayName = "Progress";
const Ho = l.forwardRef(
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
Ho.displayName = "Slider";
const Uo = J(
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
), Wo = l.forwardRef(
  ({ className: e, variant: t, size: s, pressed: o, onPressedChange: n, onClick: a, ...i }, d) => /* @__PURE__ */ r.jsx(
    "button",
    {
      ref: d,
      className: c(Uo({ variant: t, size: s, className: e })),
      "data-state": o ? "on" : "off",
      onClick: (m) => {
        n?.(!o), a?.(m);
      },
      ...i
    }
  )
);
Wo.displayName = "Toggle";
const Yo = l.createContext({}), qo = l.forwardRef(
  ({ className: e, type: t = "single", value: s, onValueChange: o, ...n }, a) => /* @__PURE__ */ r.jsx(Yo.Provider, { value: { value: s, onValueChange: o, type: t }, children: /* @__PURE__ */ r.jsx("div", { ref: a, className: c("space-y-2", e), ...n }) })
);
qo.displayName = "Accordion";
const Jo = l.forwardRef(
  ({ className: e, ...t }, s) => /* @__PURE__ */ r.jsx("div", { ref: s, className: c("border-b", e), ...t })
);
Jo.displayName = "AccordionItem";
const Xo = l.forwardRef(
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
Xo.displayName = "AccordionTrigger";
const Zo = l.forwardRef(
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
Zo.displayName = "AccordionContent";
const he = l.createContext({
  open: !1,
  onOpenChange: () => {
  }
}), Ko = ({ children: e, open: t, onOpenChange: s }) => {
  const [o, n] = l.useState(!1), a = t !== void 0 ? t : o, i = s || n;
  return /* @__PURE__ */ r.jsx(he.Provider, { value: { open: a, onOpenChange: i }, children: e });
}, Qo = l.forwardRef(({ children: e, onClick: t, ...s }, o) => {
  const { onOpenChange: n } = l.useContext(he);
  return /* @__PURE__ */ r.jsx(
    "button",
    {
      ref: o,
      onClick: (a) => {
        n(!0), t?.(a);
      },
      ...s,
      children: e
    }
  );
});
Qo.displayName = "AlertDialogTrigger";
const Ut = l.forwardRef(({ className: e, ...t }, s) => {
  const { open: o } = l.useContext(he);
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
Ut.displayName = "AlertDialogContent";
const Wt = ({ className: e, ...t }) => /* @__PURE__ */ r.jsx(
  "div",
  {
    className: c("flex flex-col space-y-2 text-center sm:text-left", e),
    ...t
  }
);
Wt.displayName = "AlertDialogHeader";
const Yt = ({ className: e, ...t }) => /* @__PURE__ */ r.jsx(
  "div",
  {
    className: c("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", e),
    ...t
  }
);
Yt.displayName = "AlertDialogFooter";
const qt = l.forwardRef(({ className: e, ...t }, s) => /* @__PURE__ */ r.jsx(
  "h3",
  {
    ref: s,
    className: c("text-lg font-semibold", e),
    ...t
  }
));
qt.displayName = "AlertDialogTitle";
const Jt = l.forwardRef(({ className: e, ...t }, s) => /* @__PURE__ */ r.jsx(
  "p",
  {
    ref: s,
    className: c("text-sm text-muted-foreground", e),
    ...t
  }
));
Jt.displayName = "AlertDialogDescription";
const Xt = l.forwardRef(({ className: e, onClick: t, ...s }, o) => {
  const { onOpenChange: n } = l.useContext(he);
  return /* @__PURE__ */ r.jsx(
    "button",
    {
      ref: o,
      className: c(Q(), e),
      onClick: (a) => {
        t?.(a), n(!1);
      },
      ...s
    }
  );
});
Xt.displayName = "AlertDialogAction";
const Zt = l.forwardRef(({ className: e, onClick: t, ...s }, o) => {
  const { onOpenChange: n } = l.useContext(he);
  return /* @__PURE__ */ r.jsx(
    "button",
    {
      ref: o,
      className: c(Q({ variant: "outline" }), "mt-2 sm:mt-0", e),
      onClick: (a) => {
        t?.(a), n(!1);
      },
      ...s
    }
  );
});
Zt.displayName = "AlertDialogCancel";
const en = l.forwardRef(
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
en.displayName = "AspectRatio";
const Xe = l.createContext({
  open: !1,
  onOpenChange: () => {
  }
}), Na = ({ open: e, onOpenChange: t, children: s }) => {
  const [o, n] = l.useState(!1), a = e !== void 0 ? e : o, i = t || n;
  return /* @__PURE__ */ r.jsx(Xe.Provider, { value: { open: a, onOpenChange: i }, children: s });
}, tn = l.forwardRef(({ onClick: e, ...t }, s) => {
  const { onOpenChange: o, open: n } = l.useContext(Xe);
  return /* @__PURE__ */ r.jsx(
    "button",
    {
      ref: s,
      onClick: (a) => {
        o(!n), e?.(a);
      },
      ...t
    }
  );
});
tn.displayName = "CollapsibleTrigger";
const rn = l.forwardRef(({ className: e, ...t }, s) => {
  const { open: o } = l.useContext(Xe);
  return o ? /* @__PURE__ */ r.jsx("div", { ref: s, className: e, ...t }) : null;
});
rn.displayName = "CollapsibleContent";
const Ze = l.forwardRef(({ className: e, ...t }, s) => /* @__PURE__ */ r.jsx(
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
const ja = ({ children: e, open: t = !1, onOpenChange: s = () => {
} }) => /* @__PURE__ */ r.jsx(ls, { open: t, onOpenChange: s, children: /* @__PURE__ */ r.jsx(It, { className: "overflow-hidden p-0 shadow-lg", children: /* @__PURE__ */ r.jsx(Ze, { children: e }) }) }), Kt = l.forwardRef(({ className: e, ...t }, s) => /* @__PURE__ */ r.jsxs("div", { className: "flex items-center border-b px-3", children: [
  /* @__PURE__ */ r.jsx(io, { className: "mr-2 h-4 w-4 shrink-0 opacity-50" }),
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
Kt.displayName = "CommandInput";
const Qt = l.forwardRef(({ className: e, ...t }, s) => /* @__PURE__ */ r.jsx(
  "div",
  {
    ref: s,
    className: c("max-h-[300px] overflow-y-auto overflow-x-hidden", e),
    ...t
  }
));
Qt.displayName = "CommandList";
const er = l.forwardRef(({ ...e }, t) => /* @__PURE__ */ r.jsx(
  "div",
  {
    ref: t,
    className: "py-6 text-center text-sm",
    ...e
  }
));
er.displayName = "CommandEmpty";
const tr = l.forwardRef(({ className: e, ...t }, s) => /* @__PURE__ */ r.jsx(
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
tr.displayName = "CommandGroup";
const sn = l.forwardRef(({ className: e, ...t }, s) => /* @__PURE__ */ r.jsx(
  "div",
  {
    ref: s,
    className: c("-mx-1 h-px bg-border", e),
    ...t
  }
));
sn.displayName = "CommandSeparator";
const rr = l.forwardRef(({ className: e, value: t, onSelect: s, onClick: o, ...n }, a) => /* @__PURE__ */ r.jsx(
  "div",
  {
    ref: a,
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
rr.displayName = "CommandItem";
const on = ({
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
on.displayName = "CommandShortcut";
const nn = l.forwardRef(
  ({ className: e, title: t, description: s, icon: o, action: n, children: a, ...i }, d) => /* @__PURE__ */ r.jsxs(
    "div",
    {
      ref: d,
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
        a
      ]
    }
  )
);
nn.displayName = "Empty";
const Ke = l.createContext({
  open: !1,
  onOpenChange: () => {
  }
}), sr = ({ open: e, onOpenChange: t, children: s }) => {
  const [o, n] = l.useState(!1), a = e !== void 0 ? e : o, i = t || n;
  return /* @__PURE__ */ r.jsx(Ke.Provider, { value: { open: a, onOpenChange: i }, children: /* @__PURE__ */ r.jsx("div", { className: "relative", children: s }) });
}, Qe = l.forwardRef(({ onClick: e, ...t }, s) => {
  const { onOpenChange: o, open: n } = l.useContext(Ke);
  return /* @__PURE__ */ r.jsx(
    "button",
    {
      ref: s,
      onClick: (a) => {
        o(!n), e?.(a);
      },
      ...t
    }
  );
});
Qe.displayName = "PopoverTrigger";
const et = l.forwardRef(({ className: e, align: t = "center", sideOffset: s = 4, ...o }, n) => {
  const { open: a } = l.useContext(Ke);
  return a ? /* @__PURE__ */ r.jsx(
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
const or = l.createContext({}), an = l.forwardRef(
  ({ className: e, value: t, onValueChange: s, name: o, ...n }, a) => /* @__PURE__ */ r.jsx(or.Provider, { value: { value: t, onValueChange: s, name: o }, children: /* @__PURE__ */ r.jsx("div", { className: c("grid gap-2", e), ...n, ref: a }) })
);
an.displayName = "RadioGroup";
const ln = l.forwardRef(
  ({ className: e, value: t, ...s }, o) => {
    const { value: n, onValueChange: a, name: i } = l.useContext(or), d = n === t;
    return /* @__PURE__ */ r.jsxs("div", { className: "flex items-center space-x-2", children: [
      /* @__PURE__ */ r.jsx(
        "input",
        {
          ref: o,
          type: "radio",
          name: i,
          value: t,
          checked: d,
          onChange: () => a?.(t),
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
          onClick: () => a?.(t),
          children: d && /* @__PURE__ */ r.jsx("div", { className: "flex items-center justify-center h-full", children: /* @__PURE__ */ r.jsx(Ws, { className: "h-2.5 w-2.5 fill-current text-current" }) })
        }
      )
    ] });
  }
);
ln.displayName = "RadioGroupItem";
function nr({
  className: e,
  selected: t,
  onSelect: s,
  showOutsideDays: o = !0,
  ...n
}) {
  const [a, i] = l.useState(/* @__PURE__ */ new Date()), d = new Date(a.getFullYear(), a.getMonth() + 1, 0).getDate(), m = new Date(a.getFullYear(), a.getMonth(), 1).getDay(), f = Array.from({ length: d }, (v, _) => _ + 1), b = Array.from({ length: m }, (v, _) => _), w = () => {
    i(new Date(a.getFullYear(), a.getMonth() - 1));
  }, A = () => {
    i(new Date(a.getFullYear(), a.getMonth() + 1));
  }, x = (v) => t ? t.getDate() === v && t.getMonth() === a.getMonth() && t.getFullYear() === a.getFullYear() : !1, p = (v) => {
    const _ = new Date(a.getFullYear(), a.getMonth(), v);
    s?.(_);
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
          children: /* @__PURE__ */ r.jsx($t, { className: "h-4 w-4" })
        }
      ),
      /* @__PURE__ */ r.jsx("div", { className: "text-sm font-medium", children: a.toLocaleDateString("en-US", { month: "long", year: "numeric" }) }),
      /* @__PURE__ */ r.jsx(
        "button",
        {
          onClick: A,
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
        b.map((v, _) => /* @__PURE__ */ r.jsx("td", { className: "h-9 w-9 p-0" }, `empty-${_}`)),
        f.map((v) => /* @__PURE__ */ r.jsx("td", { className: "h-9 w-9 text-center text-sm p-0 relative", children: /* @__PURE__ */ r.jsx(
          "button",
          {
            onClick: () => p(v),
            className: c(
              Q({ variant: "ghost" }),
              "h-9 w-9 p-0 font-normal",
              x(v) && "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground"
            ),
            children: v
          }
        ) }, v))
      ] }) })
    ] })
  ] });
}
nr.displayName = "Calendar";
const ar = l.createContext({
  currentIndex: 0,
  setCurrentIndex: () => {
  },
  itemsLength: 0,
  orientation: "horizontal"
});
function _e() {
  const e = l.useContext(ar);
  if (!e)
    throw new Error("useCarousel must be used within a <Carousel />");
  return e;
}
const cn = l.forwardRef(
  ({ orientation: e = "horizontal", className: t, children: s, ...o }, n) => {
    const [a, i] = l.useState(0), [d, m] = l.useState(0);
    return l.useEffect(() => {
      const f = l.Children.count(s);
      m(f);
    }, [s]), /* @__PURE__ */ r.jsx(ar.Provider, { value: { currentIndex: a, setCurrentIndex: i, itemsLength: d, orientation: e }, children: /* @__PURE__ */ r.jsx(
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
cn.displayName = "Carousel";
const dn = l.forwardRef(({ className: e, children: t, ...s }, o) => {
  const { orientation: n, currentIndex: a } = _e();
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
        transform: n === "horizontal" ? `translateX(-${a * 100}%)` : `translateY(-${a * 100}%)`
      },
      ...s,
      children: t
    }
  ) });
});
dn.displayName = "CarouselContent";
const un = l.forwardRef(({ className: e, ...t }, s) => {
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
un.displayName = "CarouselItem";
const mn = l.forwardRef(({ className: e, variant: t = "outline", size: s = "icon", ...o }, n) => {
  const { orientation: a, currentIndex: i, setCurrentIndex: d, itemsLength: m } = _e(), f = () => {
    d(i > 0 ? i - 1 : m - 1);
  };
  return /* @__PURE__ */ r.jsxs(
    M,
    {
      ref: n,
      variant: t,
      size: s,
      className: c(
        "absolute h-8 w-8 rounded-full",
        a === "horizontal" ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        e
      ),
      onClick: f,
      ...o,
      children: [
        /* @__PURE__ */ r.jsx(Ts, { className: "h-4 w-4" }),
        /* @__PURE__ */ r.jsx("span", { className: "sr-only", children: "Previous slide" })
      ]
    }
  );
});
mn.displayName = "CarouselPrevious";
const fn = l.forwardRef(({ className: e, variant: t = "outline", size: s = "icon", ...o }, n) => {
  const { orientation: a, currentIndex: i, setCurrentIndex: d, itemsLength: m } = _e(), f = () => {
    d(i < m - 1 ? i + 1 : 0);
  };
  return /* @__PURE__ */ r.jsxs(
    M,
    {
      ref: n,
      variant: t,
      size: s,
      className: c(
        "absolute h-8 w-8 rounded-full",
        a === "horizontal" ? "-right-12 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        e
      ),
      onClick: f,
      ...o,
      children: [
        /* @__PURE__ */ r.jsx(As, { className: "h-4 w-4" }),
        /* @__PURE__ */ r.jsx("span", { className: "sr-only", children: "Next slide" })
      ]
    }
  );
});
fn.displayName = "CarouselNext";
function ka({
  options: e,
  value: t,
  onValueChange: s,
  placeholder: o = "Select option...",
  searchPlaceholder: n = "Search...",
  emptyText: a = "No option found.",
  className: i
}) {
  const [d, m] = l.useState(!1);
  return /* @__PURE__ */ r.jsxs(sr, { open: d, onOpenChange: m, children: [
    /* @__PURE__ */ r.jsx(Qe, { children: /* @__PURE__ */ r.jsxs(
      M,
      {
        variant: "outline",
        role: "combobox",
        "aria-expanded": d,
        className: c("w-[200px] justify-between", i),
        children: [
          t ? e.find((f) => f.value === t)?.label : o,
          /* @__PURE__ */ r.jsx(Gs, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" })
        ]
      }
    ) }),
    /* @__PURE__ */ r.jsx(et, { className: "w-[200px] p-0", children: /* @__PURE__ */ r.jsxs(Ze, { children: [
      /* @__PURE__ */ r.jsx(Kt, { placeholder: n }),
      /* @__PURE__ */ r.jsxs(Qt, { children: [
        /* @__PURE__ */ r.jsx(er, { children: a }),
        /* @__PURE__ */ r.jsx(tr, { children: e.map((f) => /* @__PURE__ */ r.jsxs(
          rr,
          {
            value: f.value,
            onSelect: () => {
              s?.(f.value === t ? "" : f.value), m(!1);
            },
            children: [
              /* @__PURE__ */ r.jsx(
                Vt,
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
function Ca({
  columns: e,
  data: t,
  searchKey: s,
  searchPlaceholder: o = "Filter..."
}) {
  const [n, a] = l.useState(""), [i, d] = l.useState(1), [m] = l.useState(10), f = l.useMemo(() => !n || !s ? t : t.filter(
    (x) => String(x[s]).toLowerCase().includes(n.toLowerCase())
  ), [t, n, s]), b = l.useMemo(() => {
    const x = (i - 1) * m;
    return f.slice(x, x + m);
  }, [f, i, m]), w = Math.ceil(f.length / m), A = (x, p) => p.cell ? p.cell(x) : p.accessorKey ? x[p.accessorKey] : "";
  return /* @__PURE__ */ r.jsxs("div", { className: "w-full", children: [
    /* @__PURE__ */ r.jsxs("div", { className: "flex items-center py-4", children: [
      s && /* @__PURE__ */ r.jsx(
        Ge,
        {
          placeholder: o,
          value: n,
          onChange: (x) => a(x.target.value),
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
    /* @__PURE__ */ r.jsx("div", { className: "rounded-md border", children: /* @__PURE__ */ r.jsxs(Pt, { children: [
      /* @__PURE__ */ r.jsx(Et, { children: /* @__PURE__ */ r.jsx(je, { children: e.map((x) => /* @__PURE__ */ r.jsx(zt, { children: x.header }, x.id)) }) }),
      /* @__PURE__ */ r.jsx(Ot, { children: b.length ? b.map((x, p) => /* @__PURE__ */ r.jsx(je, { children: e.map((v) => /* @__PURE__ */ r.jsx(Ve, { children: A(x, v) }, v.id)) }, p)) : /* @__PURE__ */ r.jsx(je, { children: /* @__PURE__ */ r.jsx(
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
        b.length,
        " of ",
        f.length,
        " row(s)."
      ] }),
      /* @__PURE__ */ r.jsxs("div", { className: "space-x-2", children: [
        /* @__PURE__ */ r.jsx(
          M,
          {
            variant: "outline",
            size: "sm",
            onClick: () => d((x) => Math.max(x - 1, 1)),
            disabled: i === 1,
            children: "Previous"
          }
        ),
        /* @__PURE__ */ r.jsx(
          M,
          {
            variant: "outline",
            size: "sm",
            onClick: () => d((x) => Math.min(x + 1, w)),
            disabled: i === w,
            children: "Next"
          }
        )
      ] })
    ] })
  ] });
}
function Ra({
  date: e,
  onDateChange: t,
  placeholder: s = "Pick a date",
  className: o
}) {
  return /* @__PURE__ */ r.jsxs(sr, { children: [
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
          /* @__PURE__ */ r.jsx(Os, { className: "mr-2 h-4 w-4" }),
          e ? e.toLocaleDateString() : /* @__PURE__ */ r.jsx("span", { children: s })
        ]
      }
    ) }),
    /* @__PURE__ */ r.jsx(et, { className: "w-auto p-0", children: /* @__PURE__ */ r.jsx(
      nr,
      {
        selected: e,
        onSelect: t
      }
    ) })
  ] });
}
const Ae = l.createContext({
  open: !1,
  onOpenChange: () => {
  }
}), Sa = ({ open: e, onOpenChange: t, children: s }) => {
  const [o, n] = l.useState(!1), a = e !== void 0 ? e : o, i = t || n;
  return /* @__PURE__ */ r.jsx(Ae.Provider, { value: { open: a, onOpenChange: i }, children: s });
}, pn = l.forwardRef(({ onClick: e, ...t }, s) => {
  const { onOpenChange: o } = l.useContext(Ae);
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
pn.displayName = "DrawerTrigger";
const xn = l.forwardRef(({ onClick: e, ...t }, s) => {
  const { onOpenChange: o } = l.useContext(Ae);
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
xn.displayName = "DrawerClose";
const hn = l.forwardRef(({ className: e, children: t, ...s }, o) => {
  const { open: n } = l.useContext(Ae);
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
hn.displayName = "DrawerContent";
const gn = ({ className: e, ...t }) => /* @__PURE__ */ r.jsx(
  "div",
  {
    className: c("grid gap-1.5 p-4 text-center sm:text-left", e),
    ...t
  }
);
gn.displayName = "DrawerHeader";
const bn = ({ className: e, ...t }) => /* @__PURE__ */ r.jsx("div", { className: c("mt-auto flex flex-col gap-2 p-4", e), ...t });
bn.displayName = "DrawerFooter";
const vn = l.forwardRef(({ className: e, ...t }, s) => /* @__PURE__ */ r.jsx(
  "h3",
  {
    ref: s,
    className: c("text-lg font-semibold leading-none tracking-tight", e),
    ...t
  }
));
vn.displayName = "DrawerTitle";
const yn = l.forwardRef(({ className: e, ...t }, s) => /* @__PURE__ */ r.jsx(
  "p",
  {
    ref: s,
    className: c("text-sm text-muted-foreground", e),
    ...t
  }
));
yn.displayName = "DrawerDescription";
const tt = l.createContext({
  errors: {},
  values: {},
  setValue: () => {
  },
  setError: () => {
  }
}), wn = l.forwardRef(
  ({ children: e, ...t }, s) => {
    const [o, n] = l.useState({}), [a, i] = l.useState({}), d = (f, b) => {
      i((w) => ({ ...w, [f]: b }));
    }, m = (f, b) => {
      n((w) => ({ ...w, [f]: b }));
    };
    return /* @__PURE__ */ r.jsx(tt.Provider, { value: { errors: o, values: a, setValue: d, setError: m }, children: /* @__PURE__ */ r.jsx("form", { ref: s, ...t, children: e }) });
  }
);
wn.displayName = "Form";
const Nn = l.forwardRef(({ className: e, ...t }, s) => /* @__PURE__ */ r.jsx("div", { ref: s, className: c("space-y-2", e), ...t }));
Nn.displayName = "FormItem";
const jn = l.forwardRef(
  ({ className: e, name: t, ...s }, o) => {
    const { errors: n } = l.useContext(tt), a = t && n[t];
    return /* @__PURE__ */ r.jsx(
      Dt,
      {
        ref: o,
        className: c(a && "text-destructive", e),
        ...s
      }
    );
  }
);
jn.displayName = "FormLabel";
const kn = l.forwardRef(
  ({ children: e, ...t }, s) => /* @__PURE__ */ r.jsx("div", { ref: s, ...t, children: e })
);
kn.displayName = "FormControl";
const Cn = l.forwardRef(({ className: e, ...t }, s) => /* @__PURE__ */ r.jsx(
  "p",
  {
    ref: s,
    className: c("text-sm text-muted-foreground", e),
    ...t
  }
));
Cn.displayName = "FormDescription";
const Rn = l.forwardRef(
  ({ className: e, name: t, children: s, ...o }, n) => {
    const { errors: a } = l.useContext(tt), d = (t ? a[t] : void 0) || s;
    return d ? /* @__PURE__ */ r.jsx(
      "p",
      {
        ref: n,
        className: c("text-sm font-medium text-destructive", e),
        ...o,
        children: d
      }
    ) : null;
  }
);
Rn.displayName = "FormMessage";
const rt = l.createContext({
  open: !1,
  onOpenChange: () => {
  }
}), Ta = ({ children: e }) => {
  const [t, s] = l.useState(!1);
  return /* @__PURE__ */ r.jsx(rt.Provider, { value: { open: t, onOpenChange: s }, children: /* @__PURE__ */ r.jsx("div", { className: "relative inline-block", children: e }) });
}, Sn = l.forwardRef(({ children: e, ...t }, s) => {
  const { onOpenChange: o } = l.useContext(rt);
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
Sn.displayName = "HoverCardTrigger";
const Tn = l.forwardRef(({ className: e, align: t = "center", sideOffset: s = 4, ...o }, n) => {
  const { open: a } = l.useContext(rt);
  return a ? /* @__PURE__ */ r.jsx(
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
Tn.displayName = "HoverCardContent";
const _n = l.forwardRef(
  ({ className: e, value: t = "", onChange: s, maxLength: o = 6, ...n }, a) => {
    const [i, d] = l.useState(t), m = l.useRef([]), f = t || i, b = s || d, w = (x, p) => {
      p.length > 1 && (p = p.slice(-1));
      const v = f.split("");
      v[x] = p;
      const _ = v.join("").slice(0, o);
      b(_), p && x < o - 1 && m.current[x + 1]?.focus();
    }, A = (x, p) => {
      p.key === "Backspace" && !f[x] && x > 0 && m.current[x - 1]?.focus();
    };
    return /* @__PURE__ */ r.jsx(
      "div",
      {
        ref: a,
        className: c("flex items-center gap-2", e),
        ...n,
        children: Array.from({ length: o }).map((x, p) => /* @__PURE__ */ r.jsx(
          "input",
          {
            ref: (v) => {
              m.current[p] = v;
            },
            type: "text",
            inputMode: "numeric",
            maxLength: 1,
            value: f[p] || "",
            onChange: (v) => w(p, v.target.value),
            onKeyDown: (v) => A(p, v),
            className: "h-10 w-10 text-center border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          },
          p
        ))
      }
    );
  }
);
_n.displayName = "InputOTP";
const An = l.forwardRef(({ className: e, ...t }, s) => /* @__PURE__ */ r.jsx("div", { ref: s, className: c("flex items-center", e), ...t }));
An.displayName = "InputOTPGroup";
const Mn = l.forwardRef(({ index: e, className: t, ...s }, o) => /* @__PURE__ */ r.jsx(
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
Mn.displayName = "InputOTPSlot";
const Pn = l.forwardRef(({ ...e }, t) => /* @__PURE__ */ r.jsx("div", { ref: t, role: "separator", ...e, children: /* @__PURE__ */ r.jsx("div", { className: "w-2 h-2 rounded-full bg-border" }) }));
Pn.displayName = "InputOTPSeparator";
const En = J(
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
), On = l.forwardRef(
  ({ className: e, size: t, ...s }, o) => /* @__PURE__ */ r.jsx(
    "kbd",
    {
      ref: o,
      className: c(En({ size: t, className: e })),
      ...s
    }
  )
);
On.displayName = "Kbd";
function lr({ open: e, onOpenChange: t, onConfirm: s }) {
  return /* @__PURE__ */ r.jsx(Ko, { open: e, onOpenChange: t, children: /* @__PURE__ */ r.jsxs(Ut, { children: [
    /* @__PURE__ */ r.jsx(Wt, { children: /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ r.jsx("div", { className: "h-10 w-10 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center", children: /* @__PURE__ */ r.jsx(He, { className: "h-5 w-5 text-red-600 dark:text-red-400" }) }),
      /* @__PURE__ */ r.jsxs("div", { children: [
        /* @__PURE__ */ r.jsx(qt, { children: "Confirm Logout" }),
        /* @__PURE__ */ r.jsx(Jt, { children: "Are you sure you want to logout? You will need to login again to access your account." })
      ] })
    ] }) }),
    /* @__PURE__ */ r.jsxs(Yt, { children: [
      /* @__PURE__ */ r.jsx(Zt, { children: "Cancel" }),
      /* @__PURE__ */ r.jsx(
        Xt,
        {
          onClick: s,
          className: "bg-red-600 hover:bg-red-700 focus:ring-red-600",
          children: "Logout"
        }
      )
    ] })
  ] }) });
}
const zn = l.forwardRef(({ className: e, children: t, ...s }, o) => /* @__PURE__ */ r.jsx(
  "div",
  {
    ref: o,
    className: c("relative overflow-auto", e),
    ...s,
    children: t
  }
));
zn.displayName = "ScrollArea";
const In = l.forwardRef(({ className: e, orientation: t = "vertical", ...s }, o) => /* @__PURE__ */ r.jsx(
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
In.displayName = "ScrollBar";
const Dn = J(
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
), Me = l.createContext({
  open: !1,
  onOpenChange: () => {
  }
}), _a = ({ open: e, onOpenChange: t, children: s }) => {
  const [o, n] = l.useState(!1), a = e !== void 0 ? e : o, i = t || n;
  return /* @__PURE__ */ r.jsx(Me.Provider, { value: { open: a, onOpenChange: i }, children: s });
}, Ln = l.forwardRef(({ onClick: e, ...t }, s) => {
  const { onOpenChange: o } = l.useContext(Me);
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
Ln.displayName = "SheetTrigger";
const Vn = l.forwardRef(({ onClick: e, ...t }, s) => {
  const { onOpenChange: o } = l.useContext(Me);
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
Vn.displayName = "SheetClose";
const $n = l.forwardRef(
  ({ side: e = "right", className: t, children: s, ...o }, n) => {
    const { open: a, onOpenChange: i } = l.useContext(Me);
    return a ? /* @__PURE__ */ r.jsxs("div", { className: "fixed inset-0 z-50", children: [
      /* @__PURE__ */ r.jsx("div", { className: "fixed inset-0 bg-black/80", onClick: () => i(!1) }),
      /* @__PURE__ */ r.jsxs(
        "div",
        {
          ref: n,
          className: c(Dn({ side: e }), t),
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
$n.displayName = "SheetContent";
const Fn = ({ className: e, ...t }) => /* @__PURE__ */ r.jsx(
  "div",
  {
    className: c("flex flex-col space-y-2 text-center sm:text-left", e),
    ...t
  }
);
Fn.displayName = "SheetHeader";
const Gn = ({ className: e, ...t }) => /* @__PURE__ */ r.jsx(
  "div",
  {
    className: c("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", e),
    ...t
  }
);
Gn.displayName = "SheetFooter";
const Bn = l.forwardRef(({ className: e, ...t }, s) => /* @__PURE__ */ r.jsx(
  "h3",
  {
    ref: s,
    className: c("text-lg font-semibold text-foreground", e),
    ...t
  }
));
Bn.displayName = "SheetTitle";
const Hn = l.forwardRef(({ className: e, ...t }, s) => /* @__PURE__ */ r.jsx(
  "p",
  {
    ref: s,
    className: c("text-sm text-muted-foreground", e),
    ...t
  }
));
Hn.displayName = "SheetDescription";
function Aa({ title: e, description: t, variant: s = "default", onClose: o }) {
  return l.useEffect(() => {
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
const Un = ["love", "life", "happiness", "technology", "travel", "food", "music", "art", "nature", "friendship"];
function Ma({ value: e, onChange: t, placeholder: s = "Type to search or create tags...", className: o }) {
  const [n, a] = B(""), [i, d] = B(!1), m = dr(null), f = Un.filter(
    (x) => !e.includes(x) && x.toLowerCase().includes(n.toLowerCase())
  ), b = (x) => {
    x && !e.includes(x) && t([...e, x]), a(""), d(!1);
  }, w = (x) => {
    t(e.filter((p) => p !== x));
  }, A = (x) => {
    x.key === "Enter" && n.trim() && (x.preventDefault(), b(n.trim())), x.key === "Backspace" && !n && e.length > 0 && w(e[e.length - 1]);
  };
  return $e(() => {
    const x = (p) => {
      m.current && !m.current.parentElement?.contains(p.target) && d(!1);
    };
    return document.addEventListener("mousedown", x), () => document.removeEventListener("mousedown", x);
  }, []), /* @__PURE__ */ r.jsxs("div", { className: c("relative", o), children: [
    /* @__PURE__ */ r.jsxs("div", { className: "flex flex-wrap gap-2 p-2 border rounded-md min-h-[40px] focus-within:ring-2 focus-within:ring-ring", children: [
      e.map((x) => /* @__PURE__ */ r.jsxs(Ce, { variant: "secondary", className: "flex items-center gap-1", children: [
        x,
        /* @__PURE__ */ r.jsx(
          We,
          {
            className: "h-3 w-3 cursor-pointer hover:text-destructive",
            onClick: () => w(x)
          }
        )
      ] }, x)),
      /* @__PURE__ */ r.jsx(
        Ge,
        {
          ref: m,
          value: n,
          onChange: (x) => {
            a(x.target.value), d(!0);
          },
          onFocus: () => d(!0),
          onKeyDown: A,
          placeholder: e.length === 0 ? s : "",
          className: "border-0 shadow-none focus-visible:ring-0 flex-1 min-w-[120px] p-0"
        }
      )
    ] }),
    i && (n || f.length > 0) && /* @__PURE__ */ r.jsxs("div", { className: "absolute top-full z-50 mt-1 w-full bg-background border rounded-md shadow-md max-h-60 overflow-auto", children: [
      n && !e.includes(n.trim()) && n.trim() && /* @__PURE__ */ r.jsxs(
        "div",
        {
          className: "flex items-center gap-2 p-2 hover:bg-accent cursor-pointer",
          onMouseDown: (x) => {
            x.preventDefault(), b(n.trim());
          },
          children: [
            /* @__PURE__ */ r.jsx(oo, { className: "h-4 w-4" }),
            'Create "',
            n.trim(),
            '"'
          ]
        }
      ),
      f.map((x) => /* @__PURE__ */ r.jsx(
        "div",
        {
          className: "p-2 hover:bg-accent cursor-pointer",
          onMouseDown: (p) => {
            p.preventDefault(), b(x);
          },
          children: x
        },
        x
      ))
    ] })
  ] });
}
const Wn = J(
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
), Yn = J(
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
), ir = l.createContext({
  value: "",
  onValueChange: () => {
  },
  type: "single"
}), qn = l.forwardRef(
  ({ className: e, variant: t, type: s, value: o, onValueChange: n, ...a }, i) => /* @__PURE__ */ r.jsx(ir.Provider, { value: { value: o, onValueChange: n, type: s }, children: /* @__PURE__ */ r.jsx(
    "div",
    {
      ref: i,
      className: c(Wn({ variant: t, className: e })),
      ...a
    }
  ) })
);
qn.displayName = "ToggleGroup";
const Jn = l.forwardRef(
  ({ className: e, variant: t, size: s, value: o, onClick: n, ...a }, i) => {
    const { value: d, onValueChange: m, type: f } = l.useContext(ir), b = f === "single" ? d === o : Array.isArray(d) && d.includes(o), w = (A) => {
      if (f === "single")
        m(b ? "" : o);
      else {
        const x = Array.isArray(d) ? d : [];
        m(b ? x.filter((p) => p !== o) : [...x, o]);
      }
      n?.(A);
    };
    return /* @__PURE__ */ r.jsx(
      "button",
      {
        ref: i,
        className: c(Yn({ variant: t, size: s, className: e })),
        "data-state": b ? "on" : "off",
        onClick: w,
        ...a
      }
    );
  }
);
Jn.displayName = "ToggleGroupItem";
const Xn = l.forwardRef(
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
Xn.displayName = "Header";
const Zn = l.forwardRef(
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
Zn.displayName = "Sidebar";
const Kn = l.forwardRef(
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
Kn.displayName = "Footer";
const Qn = l.forwardRef(
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
Qn.displayName = "Navigation";
const ea = l.forwardRef(
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
ea.displayName = "NavItem";
const ta = {
  Home: Gt,
  Users: jo,
  Package: ro,
  Tag: bo,
  ShoppingCart: mo,
  ChefHat: Ds,
  MessageCircle: Ks,
  CheckSquare: po,
  Quote: ao,
  Settings: Ue
};
function ra({
  isCollapsed: e,
  onToggle: t,
  menuItems: s = [],
  user: o,
  onLogout: n,
  currentPath: a = "/"
}) {
  const [i, d] = B([]), [m, f] = B(!1), b = (p) => {
    d(
      (v) => v.includes(p) ? v.filter((_) => _ !== p) : [...v, p]
    );
  }, w = (p) => a === p, A = (p) => p.children ? p.children.some((v) => a === v.href) : !1;
  ht.useEffect(() => {
    s.forEach((p) => {
      p.children && A(p) && d(
        (v) => v.includes(p.label) ? v : [...v, p.label]
      );
    });
  }, [a, s]);
  const x = () => {
    n?.(), f(!1);
  };
  return /* @__PURE__ */ r.jsxs("div", { className: c(
    "flex flex-col h-full bg-gradient-to-b from-card to-card/95 border-r border-border/50 transition-all duration-300 shadow-sm",
    e ? "w-16" : "w-64"
  ), children: [
    /* @__PURE__ */ r.jsxs("div", { className: "flex items-center justify-between p-4 border-b border-border/50", children: [
      !e && /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ r.jsx("div", { className: "h-8 w-8 bg-primary rounded-lg flex items-center justify-center", children: /* @__PURE__ */ r.jsx(Ro, { className: "h-4 w-4 text-primary-foreground" }) }),
        /* @__PURE__ */ r.jsx("h2", { className: "text-lg font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent", children: "Dashboard" })
      ] }),
      /* @__PURE__ */ r.jsx(
        M,
        {
          variant: "ghost",
          size: "icon",
          onClick: t,
          className: "h-8 w-8 hover:bg-accent/50 transition-colors",
          children: e ? /* @__PURE__ */ r.jsx(Bt, { className: "h-4 w-4" }) : /* @__PURE__ */ r.jsx(We, { className: "h-4 w-4" })
        }
      )
    ] }),
    /* @__PURE__ */ r.jsx("nav", { className: "flex-1 p-3", children: /* @__PURE__ */ r.jsx("ul", { className: "space-y-2", children: s.map((p) => {
      const v = ta[p.icon] || Gt;
      return /* @__PURE__ */ r.jsxs("li", { children: [
        /* @__PURE__ */ r.jsx("div", { className: "relative", children: p.children ? /* @__PURE__ */ r.jsxs(
          M,
          {
            variant: "ghost",
            className: c(
              "w-full justify-start h-11 rounded-lg transition-all duration-200 group",
              "px-3",
              A(p) ? "bg-primary/5 text-primary border border-primary/10" : "hover:bg-accent/50 hover:shadow-sm"
            ),
            onClick: () => b(p.label),
            children: [
              /* @__PURE__ */ r.jsx("div", { className: c(
                "flex items-center justify-center rounded-md transition-colors",
                e ? "h-6 w-6" : "h-5 w-5 mr-3",
                "group-hover:text-primary"
              ), children: /* @__PURE__ */ r.jsx(v, { className: "h-4 w-4 shrink-0" }) }),
              !e && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
                /* @__PURE__ */ r.jsx("span", { className: "truncate font-medium", children: p.label }),
                p.badge && /* @__PURE__ */ r.jsx(Ce, { variant: "secondary", className: "ml-auto mr-2 h-5 text-xs", children: p.badge }),
                /* @__PURE__ */ r.jsx("div", { className: "ml-auto", children: i.includes(p.label) ? /* @__PURE__ */ r.jsx(Re, { className: "h-4 w-4 transition-transform" }) : /* @__PURE__ */ r.jsx(Te, { className: "h-4 w-4 transition-transform" }) })
              ] })
            ]
          }
        ) : /* @__PURE__ */ r.jsx("a", { href: p.href, children: /* @__PURE__ */ r.jsxs(
          M,
          {
            variant: "ghost",
            className: c(
              "w-full justify-start h-11 rounded-lg transition-all duration-200 group",
              "px-3",
              w(p.href) ? "bg-primary/10 text-primary border border-primary/20 shadow-sm" : "hover:bg-accent/50 hover:shadow-sm"
            ),
            children: [
              /* @__PURE__ */ r.jsx("div", { className: c(
                "flex items-center justify-center rounded-md transition-colors",
                e ? "h-6 w-6" : "h-5 w-5 mr-3",
                w(p.href) ? "text-primary" : "group-hover:text-primary"
              ), children: /* @__PURE__ */ r.jsx(v, { className: "h-4 w-4 shrink-0" }) }),
              !e && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
                /* @__PURE__ */ r.jsx("span", { className: "truncate font-medium", children: p.label }),
                p.badge && /* @__PURE__ */ r.jsx(
                  Ce,
                  {
                    variant: w(p.href) ? "default" : "secondary",
                    className: "ml-auto h-5 text-xs",
                    children: p.badge
                  }
                )
              ] })
            ]
          }
        ) }) }),
        p.children && !e && i.includes(p.label) && /* @__PURE__ */ r.jsx("ul", { className: "ml-8 mt-2 space-y-1 border-l border-border/30 pl-4", children: p.children.map((_) => /* @__PURE__ */ r.jsx("li", { children: /* @__PURE__ */ r.jsx("a", { href: _.href, children: /* @__PURE__ */ r.jsxs(
          M,
          {
            variant: "ghost",
            className: c(
              "w-full justify-start h-9 text-sm rounded-md transition-all duration-200",
              w(_.href) ? "bg-primary/10 text-primary font-medium" : "text-muted-foreground hover:text-foreground hover:bg-accent/30"
            ),
            children: [
              /* @__PURE__ */ r.jsx("div", { className: "h-1.5 w-1.5 rounded-full bg-current mr-3 opacity-60" }),
              /* @__PURE__ */ r.jsx("span", { className: "truncate", children: _.label })
            ]
          }
        ) }) }, _.label)) })
      ] }, p.label);
    }) }) }),
    !e && o && /* @__PURE__ */ r.jsx("div", { className: "p-4 border-t border-border/50 relative sidebar-profile-container", children: /* @__PURE__ */ r.jsxs(Se, { children: [
      /* @__PURE__ */ r.jsx(pe, { asChild: !0, children: /* @__PURE__ */ r.jsxs(
        M,
        {
          variant: "ghost",
          className: "w-full justify-start h-12 p-3 hover:bg-accent/50 transition-colors",
          children: [
            /* @__PURE__ */ r.jsx("div", { className: "h-8 w-8 bg-primary/10 rounded-full flex items-center justify-center mr-3", children: /* @__PURE__ */ r.jsx(Hs, { className: "h-5 w-5 text-primary" }) }),
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
          className: "w-56",
          style: {
            position: "fixed",
            bottom: "80px",
            left: "16px",
            top: "auto",
            transform: "none"
          },
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
                onClick: () => f(!0),
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
      lr,
      {
        open: m,
        onOpenChange: f,
        onConfirm: x
      }
    )
  ] });
}
const sa = {
  theme: "system",
  setTheme: () => null
}, cr = ur(sa);
function Pa({
  children: e,
  defaultTheme: t = "system",
  storageKey: s = "ui-theme",
  ...o
}) {
  const [n, a] = B(
    () => localStorage.getItem(s) || t
  );
  $e(() => {
    const d = window.document.documentElement;
    if (d.classList.remove("light", "dark"), n === "system") {
      const m = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      d.classList.add(m);
      return;
    }
    d.classList.add(n);
  }, [n]);
  const i = {
    theme: n,
    setTheme: (d) => {
      localStorage.setItem(s, d), a(d);
    }
  };
  return /* @__PURE__ */ r.jsx(cr.Provider, { ...o, value: i, children: e });
}
const oa = () => {
  const e = mr(cr);
  if (e === void 0)
    throw new Error("useTheme must be used within a ThemeProvider");
  return e;
}, na = [
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
function aa({
  onToggleSidebar: e,
  user: t,
  onLogout: s,
  notifications: o = na
}) {
  const [n, a] = B(!1), { theme: i, setTheme: d } = oa(), m = () => {
    d(i === "dark" ? "light" : "dark");
  }, f = () => {
    s?.(), a(!1);
  }, b = o.filter((w) => w.unread).length;
  return /* @__PURE__ */ r.jsxs("header", { className: "flex items-center justify-between px-4 sm:px-6 py-3 bg-background/80 backdrop-blur-sm border-b border-border/50 shadow-sm", children: [
    /* @__PURE__ */ r.jsxs("div", { className: "flex items-center space-x-3 sm:space-x-4 min-w-0", children: [
      /* @__PURE__ */ r.jsx(
        M,
        {
          variant: "ghost",
          size: "icon",
          onClick: e,
          className: "h-10 w-10 md:hidden hover:bg-accent/50 transition-colors rounded-lg",
          children: /* @__PURE__ */ r.jsx(Bt, { className: "h-5 w-5" })
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
          onClick: m,
          className: "h-10 w-10 hover:bg-accent/50 transition-all duration-200 rounded-lg group",
          children: i === "dark" ? /* @__PURE__ */ r.jsx(ho, { className: "h-5 w-5 group-hover:rotate-12 transition-transform" }) : /* @__PURE__ */ r.jsx(eo, { className: "h-5 w-5 group-hover:-rotate-12 transition-transform" })
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
              /* @__PURE__ */ r.jsx(Ps, { className: "h-5 w-5 group-hover:animate-pulse" }),
              b > 0 && /* @__PURE__ */ r.jsx(
                Ce,
                {
                  variant: "destructive",
                  className: "absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs animate-pulse",
                  children: b
                }
              )
            ]
          }
        ) }),
        /* @__PURE__ */ r.jsxs(xe, { align: "end", className: "w-64 sm:w-72 md:w-80 max-w-[calc(100vw-2rem)] z-[9999]", children: [
          /* @__PURE__ */ r.jsxs(Ht, { className: "flex items-center justify-between px-3 py-2", children: [
            /* @__PURE__ */ r.jsx("span", { className: "text-sm font-medium", children: "Notifications" }),
            /* @__PURE__ */ r.jsx(M, { variant: "ghost", size: "sm", className: "h-6 text-xs px-2", children: "Mark all read" })
          ] }),
          /* @__PURE__ */ r.jsx(oe, {}),
          o.map((w) => /* @__PURE__ */ r.jsx(G, { className: "flex flex-col items-start p-2 sm:p-3 cursor-pointer", children: /* @__PURE__ */ r.jsxs("div", { className: "flex items-start justify-between w-full gap-2", children: [
            /* @__PURE__ */ r.jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ r.jsx("p", { className: "font-medium text-sm truncate", children: w.title }),
                w.unread && /* @__PURE__ */ r.jsx("div", { className: "h-2 w-2 bg-blue-500 rounded-full flex-shrink-0" })
              ] }),
              /* @__PURE__ */ r.jsx("p", { className: "text-xs text-muted-foreground mt-1 line-clamp-2", children: w.message }),
              /* @__PURE__ */ r.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: w.time })
            ] }),
            /* @__PURE__ */ r.jsxs("div", { className: "flex gap-1 flex-shrink-0", children: [
              /* @__PURE__ */ r.jsx(M, { variant: "ghost", size: "icon", className: "h-6 w-6", children: /* @__PURE__ */ r.jsx(Vt, { className: "h-3 w-3" }) }),
              /* @__PURE__ */ r.jsx(M, { variant: "ghost", size: "icon", className: "h-6 w-6", children: /* @__PURE__ */ r.jsx(yo, { className: "h-3 w-3" }) })
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
        /* @__PURE__ */ r.jsxs(xe, { align: "end", side: "bottom", className: "w-64 p-2", children: [
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
              onClick: () => a(!0),
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
      lr,
      {
        open: n,
        onOpenChange: a,
        onConfirm: f
      }
    )
  ] });
}
const st = l.forwardRef(
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
function Ea({
  children: e,
  isAuthenticated: t = !0,
  isLoading: s = !1,
  user: o,
  onLogout: n,
  menuItems: a = [],
  currentPath: i = "/"
}) {
  const [d, m] = B(() => {
    if (typeof window < "u") {
      const b = localStorage.getItem("sidebar-collapsed");
      return b ? JSON.parse(b) : window.innerWidth < 768;
    }
    return !1;
  }), f = () => {
    m(!d);
  };
  return $e(() => {
    typeof window < "u" && localStorage.setItem("sidebar-collapsed", JSON.stringify(d));
  }, [d]), s ? /* @__PURE__ */ r.jsx("div", { className: "flex items-center justify-center h-screen", children: /* @__PURE__ */ r.jsx(st, { className: "h-8 w-8" }) }) : t ? /* @__PURE__ */ r.jsxs("div", { className: "flex h-screen bg-background relative", children: [
    !d && /* @__PURE__ */ r.jsx(
      "div",
      {
        className: "fixed inset-0 bg-black/50 z-40 md:hidden",
        onClick: f
      }
    ),
    /* @__PURE__ */ r.jsx("div", { className: c(
      "fixed md:relative z-50 md:z-10 h-full transition-transform duration-300",
      d ? "-translate-x-full md:translate-x-0" : "translate-x-0"
    ), children: /* @__PURE__ */ r.jsx(
      ra,
      {
        isCollapsed: d,
        onToggle: f,
        menuItems: a,
        user: o,
        onLogout: n,
        currentPath: i
      }
    ) }),
    /* @__PURE__ */ r.jsxs("div", { className: "flex-1 flex flex-col overflow-hidden", children: [
      /* @__PURE__ */ r.jsx(
        aa,
        {
          onToggleSidebar: f,
          user: o,
          onLogout: n
        }
      ),
      /* @__PURE__ */ r.jsx("main", { className: "flex-1 overflow-auto p-4 md:p-6", children: e })
    ] })
  ] }) : /* @__PURE__ */ r.jsx(r.Fragment, { children: e });
}
const la = J(
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
), ia = l.forwardRef(({ className: e, variant: t, ...s }, o) => /* @__PURE__ */ r.jsx(
  "div",
  {
    ref: o,
    role: "alert",
    className: c(la({ variant: t }), e),
    ...s
  }
));
ia.displayName = "Alert";
const ca = l.forwardRef(({ className: e, ...t }, s) => /* @__PURE__ */ r.jsx(
  "h5",
  {
    ref: s,
    className: c("mb-1 font-medium leading-none tracking-tight", e),
    ...t
  }
));
ca.displayName = "AlertTitle";
const da = l.forwardRef(({ className: e, ...t }, s) => /* @__PURE__ */ r.jsx(
  "div",
  {
    ref: s,
    className: c("text-sm [&_p]:leading-relaxed", e),
    ...t
  }
));
da.displayName = "AlertDescription";
const ua = l.forwardRef(
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
ua.displayName = "Loader";
function Oa() {
  const [e, t] = B([]), s = ot(({ title: n, description: a, variant: i = "default" }) => {
    const d = Math.random().toString(36).substr(2, 9), m = { id: d, title: n, description: a, variant: i };
    return t((f) => [...f, m]), setTimeout(() => {
      t((f) => f.filter((b) => b.id !== d));
    }, 5e3), d;
  }, []), o = ot((n) => {
    t((a) => a.filter((i) => i.id !== n));
  }, []);
  return { toasts: e, toast: s, dismiss: o };
}
function za(e, t) {
  const [s, o] = B(() => {
    try {
      const a = window.localStorage.getItem(e);
      return a ? JSON.parse(a) : t;
    } catch {
      return t;
    }
  });
  return [s, (a) => {
    try {
      const i = a instanceof Function ? a(s) : a;
      o(i), window.localStorage.setItem(e, JSON.stringify(i));
    } catch (i) {
      console.error(i);
    }
  }];
}
function Ia(...e) {
  return e.filter(Boolean).join(" ");
}
function Da(e, t = "USD") {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: t
  }).format(e);
}
function La(e, t = "short") {
  const s = new Date(e);
  return new Intl.DateTimeFormat("en-US", {
    dateStyle: t
  }).format(s);
}
export {
  qo as Accordion,
  Zo as AccordionContent,
  Jo as AccordionItem,
  Xo as AccordionTrigger,
  ia as Alert,
  da as AlertDescription,
  Ko as AlertDialog,
  Xt as AlertDialogAction,
  Zt as AlertDialogCancel,
  Ut as AlertDialogContent,
  Jt as AlertDialogDescription,
  Yt as AlertDialogFooter,
  Wt as AlertDialogHeader,
  qt as AlertDialogTitle,
  Qo as AlertDialogTrigger,
  ca as AlertTitle,
  aa as AppNavbar,
  ra as AppSidebar,
  en as AspectRatio,
  vs as Avatar,
  ws as AvatarFallback,
  ys as AvatarImage,
  Ce as Badge,
  So as Breadcrumb,
  Eo as BreadcrumbEllipsis,
  _o as BreadcrumbItem,
  Ao as BreadcrumbLink,
  To as BreadcrumbList,
  Mo as BreadcrumbPage,
  Po as BreadcrumbSeparator,
  M as Button,
  nr as Calendar,
  ss as Card,
  as as CardContent,
  os as CardHeader,
  ns as CardTitle,
  cn as Carousel,
  dn as CarouselContent,
  un as CarouselItem,
  fn as CarouselNext,
  mn as CarouselPrevious,
  ps as Checkbox,
  Na as Collapsible,
  rn as CollapsibleContent,
  tn as CollapsibleTrigger,
  ka as Combobox,
  Ze as Command,
  ja as CommandDialog,
  er as CommandEmpty,
  tr as CommandGroup,
  Kt as CommandInput,
  rr as CommandItem,
  Qt as CommandList,
  sn as CommandSeparator,
  on as CommandShortcut,
  Ca as DataTable,
  Ra as DatePicker,
  ls as Dialog,
  It as DialogContent,
  ds as DialogFooter,
  is as DialogHeader,
  cs as DialogTitle,
  Sa as Drawer,
  xn as DrawerClose,
  hn as DrawerContent,
  yn as DrawerDescription,
  bn as DrawerFooter,
  gn as DrawerHeader,
  vn as DrawerTitle,
  pn as DrawerTrigger,
  Se as DropdownMenu,
  xe as DropdownMenuContent,
  G as DropdownMenuItem,
  Ht as DropdownMenuLabel,
  oe as DropdownMenuSeparator,
  pe as DropdownMenuTrigger,
  nn as Empty,
  Kn as Footer,
  wn as Form,
  kn as FormControl,
  Cn as FormDescription,
  Nn as FormItem,
  jn as FormLabel,
  Rn as FormMessage,
  Xn as Header,
  Ta as HoverCard,
  Tn as HoverCardContent,
  Sn as HoverCardTrigger,
  Ge as Input,
  _n as InputOTP,
  An as InputOTPGroup,
  Pn as InputOTPSeparator,
  Mn as InputOTPSlot,
  On as Kbd,
  Dt as Label,
  Ea as Layout,
  ua as Loader,
  lr as LogoutModal,
  pa as Modal,
  ga as ModalContent,
  ba as ModalFooter,
  xa as ModalHeader,
  ha as ModalTitle,
  ea as NavItem,
  Qn as Navigation,
  Oo as Pagination,
  zo as PaginationContent,
  Vo as PaginationEllipsis,
  Io as PaginationItem,
  qe as PaginationLink,
  Lo as PaginationNext,
  Do as PaginationPrevious,
  sr as Popover,
  et as PopoverContent,
  Qe as PopoverTrigger,
  Bo as Progress,
  an as RadioGroup,
  ln as RadioGroupItem,
  zn as ScrollArea,
  In as ScrollBar,
  us as Select,
  xs as Separator,
  _a as Sheet,
  Vn as SheetClose,
  $n as SheetContent,
  Hn as SheetDescription,
  Gn as SheetFooter,
  Fn as SheetHeader,
  Bn as SheetTitle,
  Ln as SheetTrigger,
  Zn as Sidebar,
  va as Skeleton,
  Ho as Slider,
  st as Spinner,
  $o as Switch,
  Pt as Table,
  Ot as TableBody,
  Ve as TableCell,
  zt as TableHead,
  Et as TableHeader,
  je as TableRow,
  ya as Tabs,
  bs as TabsContent,
  hs as TabsList,
  gs as TabsTrigger,
  Ma as TagsSelect,
  ms as Textarea,
  Pa as ThemeProvider,
  Aa as Toast,
  Wo as Toggle,
  qn as ToggleGroup,
  Jn as ToggleGroupItem,
  wa as Tooltip,
  Go as TooltipContent,
  Fo as TooltipTrigger,
  fs as badgeVariants,
  Q as buttonVariants,
  c as cn,
  Da as formatCurrency,
  La as formatDate,
  En as kbdVariants,
  Ia as mergeClass,
  Uo as toggleVariants,
  za as useLocalStorage,
  oa as useTheme,
  Oa as useToast
};
