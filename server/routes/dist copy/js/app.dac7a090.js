(function (e) {
  function t(t) {
    for (
      var i, n, c = t[0], d = t[1], r = t[2], b = 0, l = [];
      b < c.length;
      b++
    )
      (n = c[b]),
        Object.prototype.hasOwnProperty.call(s, n) && s[n] && l.push(s[n][0]),
        (s[n] = 0);
    for (i in d) Object.prototype.hasOwnProperty.call(d, i) && (e[i] = d[i]);
    f && f(t);
    while (l.length) l.shift()();
    return o.push.apply(o, r || []), a();
  }
  function a() {
    for (var e, t = 0; t < o.length; t++) {
      for (var a = o[t], i = !0, n = 1; n < a.length; n++) {
        var d = a[n];
        0 !== s[d] && (i = !1);
      }
      i && (o.splice(t--, 1), (e = c((c.s = a[0]))));
    }
    return e;
  }
  var i = {},
    s = { app: 0 },
    o = [];
  function n(e) {
    return (
      c.p +
      "js/" +
      ({ Friends: "Friends", Messages: "Messages" }[e] || e) +
      "." +
      { Friends: "ff009d1c", Messages: "c32bb05a" }[e] +
      ".js"
    );
  }
  function c(t) {
    if (i[t]) return i[t].exports;
    var a = (i[t] = { i: t, l: !1, exports: {} });
    return e[t].call(a.exports, a, a.exports, c), (a.l = !0), a.exports;
  }
  (c.e = function (e) {
    var t = [],
      a = s[e];
    if (0 !== a)
      if (a) t.push(a[2]);
      else {
        var i = new Promise(function (t, i) {
          a = s[e] = [t, i];
        });
        t.push((a[2] = i));
        var o,
          d = document.createElement("script");
        (d.charset = "utf-8"),
          (d.timeout = 120),
          c.nc && d.setAttribute("nonce", c.nc),
          (d.src = n(e));
        var r = new Error();
        o = function (t) {
          (d.onerror = d.onload = null), clearTimeout(b);
          var a = s[e];
          if (0 !== a) {
            if (a) {
              var i = t && ("load" === t.type ? "missing" : t.type),
                o = t && t.target && t.target.src;
              (r.message =
                "Loading chunk " + e + " failed.\n(" + i + ": " + o + ")"),
                (r.name = "ChunkLoadError"),
                (r.type = i),
                (r.request = o),
                a[1](r);
            }
            s[e] = void 0;
          }
        };
        var b = setTimeout(function () {
          o({ type: "timeout", target: d });
        }, 12e4);
        (d.onerror = d.onload = o), document.head.appendChild(d);
      }
    return Promise.all(t);
  }),
    (c.m = e),
    (c.c = i),
    (c.d = function (e, t, a) {
      c.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: a });
    }),
    (c.r = function (e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (c.t = function (e, t) {
      if ((1 & t && (e = c(e)), 8 & t)) return e;
      if (4 & t && "object" === typeof e && e && e.__esModule) return e;
      var a = Object.create(null);
      if (
        (c.r(a),
        Object.defineProperty(a, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var i in e)
          c.d(
            a,
            i,
            function (t) {
              return e[t];
            }.bind(null, i)
          );
      return a;
    }),
    (c.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e["default"];
            }
          : function () {
              return e;
            };
      return c.d(t, "a", t), t;
    }),
    (c.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (c.p = "/"),
    (c.oe = function (e) {
      throw (console.error(e), e);
    });
  var d = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    r = d.push.bind(d);
  (d.push = t), (d = d.slice());
  for (var b = 0; b < d.length; b++) t(d[b]);
  var f = r;
  o.push([0, "chunk-vendors"]), a();
})({
  0: function (e, t, a) {
    e.exports = a("56d7");
  },
  "0a8f": function (e, t, a) {
    e.exports = a.p + "media/ada-post2.13b3b63d.mp4";
  },
  "0d82": function (e, t, a) {
    e.exports = a.p + "media/josh-post2.ef466adc.mp4";
  },
  "146c": function (e, t, a) {
    e.exports = a.p + "img/ella-profilepix.f02f99f2.jpg";
  },
  "16d1": function (e, t, a) {
    e.exports = a.p + "img/liam-profilePix.d404efb9.jpg";
  },
  2213: function (e, t, a) {
    e.exports = a.p + "img/olive-post1.6f8e087b.jpg";
  },
  "2d52": function (e, t, a) {
    e.exports = a.p + "img/User.de2ba6b9.png";
  },
  "2f09": function (e, t, a) {
    e.exports = a.p + "img/logan-post1.10609f63.jpeg";
  },
  "30c8": function (e, t, a) {
    e.exports = a.p + "img/ava-profilepix.775f7498.jpg";
  },
  "35b7": function (e, t, a) {
    e.exports = a.p + "img/lily-post1.439a8b59.jpeg";
  },
  4678: function (e, t, a) {
    var i = {
      "./af": "2bfb",
      "./af.js": "2bfb",
      "./ar": "8e73",
      "./ar-dz": "a356",
      "./ar-dz.js": "a356",
      "./ar-kw": "423e",
      "./ar-kw.js": "423e",
      "./ar-ly": "1cfd",
      "./ar-ly.js": "1cfd",
      "./ar-ma": "0a84",
      "./ar-ma.js": "0a84",
      "./ar-sa": "8230",
      "./ar-sa.js": "8230",
      "./ar-tn": "6d83",
      "./ar-tn.js": "6d83",
      "./ar.js": "8e73",
      "./az": "485c",
      "./az.js": "485c",
      "./be": "1fc1",
      "./be.js": "1fc1",
      "./bg": "84aa",
      "./bg.js": "84aa",
      "./bm": "a7fa",
      "./bm.js": "a7fa",
      "./bn": "9043",
      "./bn-bd": "9686",
      "./bn-bd.js": "9686",
      "./bn.js": "9043",
      "./bo": "d26a",
      "./bo.js": "d26a",
      "./br": "6887",
      "./br.js": "6887",
      "./bs": "2554",
      "./bs.js": "2554",
      "./ca": "d716",
      "./ca.js": "d716",
      "./cs": "3c0d",
      "./cs.js": "3c0d",
      "./cv": "03ec",
      "./cv.js": "03ec",
      "./cy": "9797",
      "./cy.js": "9797",
      "./da": "0f14",
      "./da.js": "0f14",
      "./de": "b469",
      "./de-at": "b3eb",
      "./de-at.js": "b3eb",
      "./de-ch": "bb71",
      "./de-ch.js": "bb71",
      "./de.js": "b469",
      "./dv": "598a",
      "./dv.js": "598a",
      "./el": "8d47",
      "./el.js": "8d47",
      "./en-au": "0e6b",
      "./en-au.js": "0e6b",
      "./en-ca": "3886",
      "./en-ca.js": "3886",
      "./en-gb": "39a6",
      "./en-gb.js": "39a6",
      "./en-ie": "e1d3",
      "./en-ie.js": "e1d3",
      "./en-il": "7333",
      "./en-il.js": "7333",
      "./en-in": "ec2e",
      "./en-in.js": "ec2e",
      "./en-nz": "6f50",
      "./en-nz.js": "6f50",
      "./en-sg": "b7e9",
      "./en-sg.js": "b7e9",
      "./eo": "65db",
      "./eo.js": "65db",
      "./es": "898b",
      "./es-do": "0a3c",
      "./es-do.js": "0a3c",
      "./es-mx": "b5b7",
      "./es-mx.js": "b5b7",
      "./es-us": "55c9",
      "./es-us.js": "55c9",
      "./es.js": "898b",
      "./et": "ec18",
      "./et.js": "ec18",
      "./eu": "0ff2",
      "./eu.js": "0ff2",
      "./fa": "8df4",
      "./fa.js": "8df4",
      "./fi": "81e9",
      "./fi.js": "81e9",
      "./fil": "d69a",
      "./fil.js": "d69a",
      "./fo": "0721",
      "./fo.js": "0721",
      "./fr": "9f26",
      "./fr-ca": "d9f8",
      "./fr-ca.js": "d9f8",
      "./fr-ch": "0e49",
      "./fr-ch.js": "0e49",
      "./fr.js": "9f26",
      "./fy": "7118",
      "./fy.js": "7118",
      "./ga": "5120",
      "./ga.js": "5120",
      "./gd": "f6b4",
      "./gd.js": "f6b4",
      "./gl": "8840",
      "./gl.js": "8840",
      "./gom-deva": "aaf2",
      "./gom-deva.js": "aaf2",
      "./gom-latn": "0caa",
      "./gom-latn.js": "0caa",
      "./gu": "e0c5",
      "./gu.js": "e0c5",
      "./he": "c7aa",
      "./he.js": "c7aa",
      "./hi": "dc4d",
      "./hi.js": "dc4d",
      "./hr": "4ba9",
      "./hr.js": "4ba9",
      "./hu": "5b14",
      "./hu.js": "5b14",
      "./hy-am": "d6b6",
      "./hy-am.js": "d6b6",
      "./id": "5038",
      "./id.js": "5038",
      "./is": "0558",
      "./is.js": "0558",
      "./it": "6e98",
      "./it-ch": "6f12",
      "./it-ch.js": "6f12",
      "./it.js": "6e98",
      "./ja": "079e",
      "./ja.js": "079e",
      "./jv": "b540",
      "./jv.js": "b540",
      "./ka": "201b",
      "./ka.js": "201b",
      "./kk": "6d79",
      "./kk.js": "6d79",
      "./km": "e81d",
      "./km.js": "e81d",
      "./kn": "3e92",
      "./kn.js": "3e92",
      "./ko": "22f8",
      "./ko.js": "22f8",
      "./ku": "2421",
      "./ku.js": "2421",
      "./ky": "9609",
      "./ky.js": "9609",
      "./lb": "440c",
      "./lb.js": "440c",
      "./lo": "b29d",
      "./lo.js": "b29d",
      "./lt": "26f9",
      "./lt.js": "26f9",
      "./lv": "b97c",
      "./lv.js": "b97c",
      "./me": "293c",
      "./me.js": "293c",
      "./mi": "688b",
      "./mi.js": "688b",
      "./mk": "6909",
      "./mk.js": "6909",
      "./ml": "02fb",
      "./ml.js": "02fb",
      "./mn": "958b",
      "./mn.js": "958b",
      "./mr": "39bd",
      "./mr.js": "39bd",
      "./ms": "ebe4",
      "./ms-my": "6403",
      "./ms-my.js": "6403",
      "./ms.js": "ebe4",
      "./mt": "1b45",
      "./mt.js": "1b45",
      "./my": "8689",
      "./my.js": "8689",
      "./nb": "6ce3",
      "./nb.js": "6ce3",
      "./ne": "3a39",
      "./ne.js": "3a39",
      "./nl": "facd",
      "./nl-be": "db29",
      "./nl-be.js": "db29",
      "./nl.js": "facd",
      "./nn": "b84c",
      "./nn.js": "b84c",
      "./oc-lnc": "167b",
      "./oc-lnc.js": "167b",
      "./pa-in": "f3ff",
      "./pa-in.js": "f3ff",
      "./pl": "8d57",
      "./pl.js": "8d57",
      "./pt": "f260",
      "./pt-br": "d2d4",
      "./pt-br.js": "d2d4",
      "./pt.js": "f260",
      "./ro": "972c",
      "./ro.js": "972c",
      "./ru": "957c",
      "./ru.js": "957c",
      "./sd": "6784",
      "./sd.js": "6784",
      "./se": "ffff",
      "./se.js": "ffff",
      "./si": "eda5",
      "./si.js": "eda5",
      "./sk": "7be6",
      "./sk.js": "7be6",
      "./sl": "8155",
      "./sl.js": "8155",
      "./sq": "c8f3",
      "./sq.js": "c8f3",
      "./sr": "cf1e",
      "./sr-cyrl": "13e9",
      "./sr-cyrl.js": "13e9",
      "./sr.js": "cf1e",
      "./ss": "52bd",
      "./ss.js": "52bd",
      "./sv": "5fbd",
      "./sv.js": "5fbd",
      "./sw": "74dc",
      "./sw.js": "74dc",
      "./ta": "3de5",
      "./ta.js": "3de5",
      "./te": "5cbb",
      "./te.js": "5cbb",
      "./tet": "576c",
      "./tet.js": "576c",
      "./tg": "3b1b",
      "./tg.js": "3b1b",
      "./th": "10e8",
      "./th.js": "10e8",
      "./tk": "5aff",
      "./tk.js": "5aff",
      "./tl-ph": "0f38",
      "./tl-ph.js": "0f38",
      "./tlh": "cf75",
      "./tlh.js": "cf75",
      "./tr": "0e81",
      "./tr.js": "0e81",
      "./tzl": "cf51",
      "./tzl.js": "cf51",
      "./tzm": "c109",
      "./tzm-latn": "b53d",
      "./tzm-latn.js": "b53d",
      "./tzm.js": "c109",
      "./ug-cn": "6117",
      "./ug-cn.js": "6117",
      "./uk": "ada2",
      "./uk.js": "ada2",
      "./ur": "5294",
      "./ur.js": "5294",
      "./uz": "2e8c",
      "./uz-latn": "010e",
      "./uz-latn.js": "010e",
      "./uz.js": "2e8c",
      "./vi": "2921",
      "./vi.js": "2921",
      "./x-pseudo": "fd7e",
      "./x-pseudo.js": "fd7e",
      "./yo": "7f33",
      "./yo.js": "7f33",
      "./zh-cn": "5c3a",
      "./zh-cn.js": "5c3a",
      "./zh-hk": "49ab",
      "./zh-hk.js": "49ab",
      "./zh-mo": "3a6c",
      "./zh-mo.js": "3a6c",
      "./zh-tw": "90ea",
      "./zh-tw.js": "90ea",
    };
    function s(e) {
      var t = o(e);
      return a(t);
    }
    function o(e) {
      if (!a.o(i, e)) {
        var t = new Error("Cannot find module '" + e + "'");
        throw ((t.code = "MODULE_NOT_FOUND"), t);
      }
      return i[e];
    }
    (s.keys = function () {
      return Object.keys(i);
    }),
      (s.resolve = o),
      (e.exports = s),
      (s.id = "4678");
  },
  "4a8f": function (e, t, a) {
    e.exports = a.p + "img/mia-profilePix.c4b68a16.jpg";
  },
  "4e5d": function (e, t, a) {
    e.exports = a.p + "img/ada-profilepix.1cade501.jpg";
  },
  "506d": function (e, t, a) {
    e.exports = a.p + "img/logan-profilePix.4f817a22.jpg";
  },
  5338: function (e, t, a) {
    e.exports = a.p + "img/olive-profilePix.83831b35.jpg";
  },
  "56d7": function (e, t, a) {
    "use strict";
    a.r(t);
    var i = a("7a23");
    const s = { class: "nav-container-one" },
      o = { class: "logo-container" },
      n = { class: "search-main-container" },
      c = Object(i["g"])("  "),
      d = Object(i["g"])("  "),
      r = { key: 1, class: "search-contents" },
      b = { class: "names-Bold" },
      f = { key: 0, style: { "text-align": "center" } },
      l = { class: "website-info" },
      u = Object(i["h"])(
        "a",
        {
          href: "https://www.linkedin.com/in/uche-okoroafor-a9286b19b",
          target: "_blank",
        },
        "About",
        -1
      ),
      m = Object(i["g"])("  "),
      h = Object(i["h"])(
        "a",
        {
          href: "https://www.linkedin.com/in/uche-okoroafor-a9286b19b",
          target: "_blank",
        },
        "Contact",
        -1
      ),
      p = Object(i["g"])("  "),
      N = Object(i["g"])("LogOut "),
      y = Object(i["g"])("LogIn "),
      v = { key: 0, class: "user-icon" },
      O = Object(i["g"])("  "),
      j = { class: "names-Bold" },
      g = Object(i["g"])("   "),
      k = { class: "dropdown-OwnMenu", ref: "userOwnMenuMobileView" },
      I = Object(i["g"])(" My Profile   "),
      D = { class: "login-btns" },
      S = Object(i["g"])("LogOut "),
      U = Object(i["g"])("LogIn "),
      C = { class: "nav-container-two" },
      w = { class: "home-list" },
      R = Object(i["g"])("Home "),
      L = Object(i["g"])("   "),
      T = Object(i["g"])("Newsfeed "),
      A = Object(i["g"])("  "),
      q = { key: 0, class: "show-counter" },
      x = Object(i["g"])("Timeline "),
      F = Object(i["g"])("  "),
      M = Object(i["g"])("Profile "),
      P = Object(i["g"])("  "),
      E = Object(i["g"])("Messages "),
      $ = Object(i["g"])(),
      z = { key: 0, class: "show-counter-messages" },
      V = { class: "nav-notification-hover" },
      B = Object(i["g"])("Notifications "),
      G = { key: 0, class: "show-counter-notification" },
      _ = { class: "dropdown-notifications", ref: "notificationMenuFullNav" },
      J = Object(i["g"])(" Your friend "),
      H = { class: "names-Bold" },
      Y = Object(i["h"])("br", null, null, -1),
      Z = Object(i["h"])("hr", null, null, -1),
      W = { class: "names-Bold" },
      K = Object(i["h"])("br", null, null, -1),
      Q = Object(i["g"])(),
      X = Object(i["h"])("hr", null, null, -1),
      ee = { class: "names-Bold" },
      te = Object(i["g"])(" Accpted Your Friend request "),
      ae = Object(i["h"])("br", null, null, -1),
      ie = Object(i["g"])(),
      se = Object(i["h"])("hr", null, null, -1),
      oe = { class: "names-Bold" },
      ne = Object(i["g"])(),
      ce = Object(i["h"])("br", null, null, -1),
      de = Object(i["h"])("hr", null, null, -1),
      re = { class: "names-Bold" },
      be = Object(i["g"])(" likes your post "),
      fe = Object(i["h"])("br", null, null, -1),
      le = Object(i["h"])("hr", null, null, -1),
      ue = Object(i["g"])(" Your friend "),
      me = { class: "names-Bold" },
      he = Object(i["g"])(" likes "),
      pe = { class: "names-Bold" },
      Ne = Object(i["g"])("'s post "),
      ye = Object(i["h"])("br", null, null, -1),
      ve = Object(i["h"])("hr", null, null, -1),
      Oe = Object(i["g"])(" Your friend "),
      je = { class: "names-Bold" },
      ge = Object(i["g"])(" likes "),
      ke = { class: "names-Bold" },
      Ie = Object(i["g"])(" post "),
      De = Object(i["g"])(),
      Se = Object(i["h"])("br", null, null, -1),
      Ue = Object(i["h"])("hr", null, null, -1),
      Ce = { class: "names-Bold" },
      we = Object(i["g"])(" likes your comment on "),
      Re = { class: "names-Bold" },
      Le = Object(i["g"])("'s post "),
      Te = Object(i["h"])("br", null, null, -1),
      Ae = Object(i["h"])("hr", null, null, -1),
      qe = { class: "names-Bold" },
      xe = { class: "names-Bold" },
      Fe = Object(i["g"])("'s post "),
      Me = Object(i["h"])("br", null, null, -1),
      Pe = Object(i["h"])("hr", null, null, -1),
      Ee = { class: "names-Bold" },
      $e = Object(i["g"])(" likes your comment on Your post "),
      ze = Object(i["g"])(),
      Ve = Object(i["h"])("br", null, null, -1),
      Be = Object(i["h"])("hr", null, null, -1),
      Ge = { class: "names-Bold" },
      _e = Object(i["g"])(),
      Je = Object(i["h"])("br", null, null, -1),
      He = Object(i["h"])("hr", null, null, -1),
      Ye = { class: "names-Bold" },
      Ze = Object(i["g"])(),
      We = Object(i["h"])("br", null, null, -1),
      Ke = Object(i["h"])("hr", null, null, -1),
      Qe = { class: "names-Bold" },
      Xe = Object(i["g"])(" commented on your post "),
      et = Object(i["h"])("br", null, null, -1),
      tt = Object(i["h"])("hr", null, null, -1),
      at = Object(i["g"])(" Your friend "),
      it = { class: "names-Bold" },
      st = Object(i["g"])(" commented on "),
      ot = { class: "names-Bold" },
      nt = Object(i["g"])("'s post "),
      ct = Object(i["h"])("br", null, null, -1),
      dt = Object(i["h"])("hr", null, null, -1),
      rt = Object(i["g"])(" Your friend "),
      bt = { class: "names-Bold" },
      ft = Object(i["h"])("br", null, null, -1),
      lt = Object(i["h"])("hr", null, null, -1),
      ut = { class: "names-Bold" },
      mt = Object(i["g"])(" started following you "),
      ht = Object(i["h"])("br", null, null, -1),
      pt = Object(i["h"])("hr", null, null, -1),
      Nt = { key: 0 },
      yt = { class: "user-icon" },
      vt = Object(i["g"])(" "),
      Ot = { class: "names-Bold" },
      jt = Object(i["g"])("  "),
      gt = { class: "dropdown-OwnMenu", ref: "userOwnMenuFullNav" },
      kt = { class: "logo-container" },
      It = { class: "search-main-container" },
      Dt = Object(i["g"])("  "),
      St = Object(i["g"])("  "),
      Ut = { key: 1, class: "search-contents" },
      Ct = Object(i["g"])("  "),
      wt = { class: "names-Bold" },
      Rt = { key: 0, style: { "text-align": "center" } },
      Lt = { key: 4, class: "nav-container-two" },
      Tt = { key: 0, class: "collapsed-nav-menu-contents" },
      At = Object(i["h"])("span", { class: "" }, "Newsfeed ", -1),
      qt = { key: 0, class: "show-counter" },
      xt = Object(i["h"])("span", { class: "" }, "Timeline ", -1),
      Ft = Object(i["h"])("span", { class: "" }, " Profile ", -1),
      Mt = Object(i["h"])("span", { class: "" }, " Messages ", -1),
      Pt = { key: 0, class: "show-counter-messages  " },
      Et = { class: "home-list" },
      $t = { key: 0, class: "show-counter" },
      zt = { key: 0, class: "show-counter-messages  " },
      Vt = { key: 0, class: "show-counter-notification" },
      Bt = {
        class: "dropdown-notifications  collapsed-dropdown",
        ref: "notificationMenu",
      },
      Gt = Object(i["g"])(" Your friend "),
      _t = { class: "names-Bold" },
      Jt = Object(i["h"])("br", null, null, -1),
      Ht = Object(i["h"])("hr", null, null, -1),
      Yt = { class: "names-Bold" },
      Zt = Object(i["h"])("br", null, null, -1),
      Wt = Object(i["g"])(),
      Kt = Object(i["h"])("hr", null, null, -1),
      Qt = { class: "names-Bold" },
      Xt = Object(i["g"])(" Accpted Your Friend request "),
      ea = Object(i["h"])("br", null, null, -1),
      ta = Object(i["g"])(),
      aa = Object(i["h"])("hr", null, null, -1),
      ia = { class: "names-Bold" },
      sa = Object(i["g"])(),
      oa = Object(i["h"])("br", null, null, -1),
      na = Object(i["h"])("hr", null, null, -1),
      ca = { class: "names-Bold" },
      da = Object(i["g"])(" likes your post "),
      ra = Object(i["h"])("br", null, null, -1),
      ba = Object(i["h"])("hr", null, null, -1),
      fa = Object(i["g"])(" Your friend "),
      la = { class: "names-Bold" },
      ua = Object(i["g"])(" likes "),
      ma = { class: "names-Bold" },
      ha = Object(i["g"])("'s post "),
      pa = Object(i["h"])("br", null, null, -1),
      Na = Object(i["h"])("hr", null, null, -1),
      ya = Object(i["g"])(" Your friend "),
      va = { class: "names-Bold" },
      Oa = Object(i["g"])(" likes "),
      ja = { class: "names-Bold" },
      ga = Object(i["g"])(" post "),
      ka = Object(i["g"])(),
      Ia = Object(i["h"])("br", null, null, -1),
      Da = Object(i["h"])("hr", null, null, -1),
      Sa = { class: "names-Bold" },
      Ua = Object(i["g"])(" likes your comment on "),
      Ca = { class: "names-Bold" },
      wa = Object(i["g"])("'s post "),
      Ra = Object(i["h"])("br", null, null, -1),
      La = Object(i["h"])("hr", null, null, -1),
      Ta = { class: "names-Bold" },
      Aa = { class: "names-Bold" },
      qa = Object(i["g"])("'s post "),
      xa = Object(i["h"])("br", null, null, -1),
      Fa = Object(i["h"])("hr", null, null, -1),
      Ma = { class: "names-Bold" },
      Pa = Object(i["g"])(" likes your comment on Your post "),
      Ea = Object(i["g"])(),
      $a = Object(i["h"])("br", null, null, -1),
      za = Object(i["h"])("hr", null, null, -1),
      Va = { class: "names-Bold" },
      Ba = Object(i["g"])(),
      Ga = Object(i["h"])("br", null, null, -1),
      _a = Object(i["h"])("hr", null, null, -1),
      Ja = { class: "names-Bold" },
      Ha = Object(i["g"])(),
      Ya = Object(i["h"])("br", null, null, -1),
      Za = Object(i["h"])("hr", null, null, -1),
      Wa = { class: "names-Bold" },
      Ka = Object(i["g"])(" commented on your post "),
      Qa = Object(i["h"])("br", null, null, -1),
      Xa = Object(i["h"])("hr", null, null, -1),
      ei = Object(i["g"])(" Your friend "),
      ti = { class: "names-Bold" },
      ai = Object(i["g"])(" commented on "),
      ii = { class: "names-Bold" },
      si = Object(i["g"])("'s post "),
      oi = Object(i["h"])("br", null, null, -1),
      ni = Object(i["h"])("hr", null, null, -1),
      ci = Object(i["g"])(" Your friend "),
      di = { class: "names-Bold" },
      ri = Object(i["h"])("br", null, null, -1),
      bi = Object(i["h"])("hr", null, null, -1),
      fi = { class: "names-Bold" },
      li = Object(i["g"])(" started following you "),
      ui = Object(i["h"])("br", null, null, -1),
      mi = Object(i["h"])("hr", null, null, -1),
      hi = { key: 0 },
      pi = { class: "user-icon" },
      Ni = Object(i["g"])("  "),
      yi = { class: "names-Bold" },
      vi = Object(i["g"])(" My Profile   "),
      Oi = { class: "login-btns" },
      ji = Object(i["g"])("LogOut "),
      gi = Object(i["g"])("LogIn "),
      ki = { class: "restrict-Guest-contents" },
      Ii = { class: "mt-4" },
      Di = Object(i["g"])("Login Or Create an Account to Have Access to this"),
      Si = Object(i["h"])(
        "span",
        { style: { "white-space": "nowrap" } },
        " Link !",
        -1
      ),
      Ui = Object(i["h"])("br", null, null, -1),
      Ci = Object(i["h"])("br", null, null, -1),
      wi = Object(i["g"])("Sign In "),
      Ri = { id: "newAlert", style: { visibility: "hidden" }, preload: "auto" };
    function Li(e, t, Li, Ti, Ai, qi) {
      const xi = Object(i["x"])("font-awesome-icon"),
        Fi = Object(i["x"])("router-view"),
        Mi = Object(i["x"])("AutoUsers"),
        Pi = Object(i["x"])("Footer");
      return (
        Object(i["q"])(),
        Object(i["d"])(
          i["a"],
          null,
          [
            e.$store.state.displayFunctions.loginPageUnmounted
              ? (Object(i["q"])(),
                Object(i["d"])(
                  "nav",
                  { key: 0, style: Ai.navStyle },
                  [
                    Object(i["h"])("div", s, [
                      Object(i["h"])("div", o, [
                        Object(i["h"])(
                          "h3",
                          {
                            onClick:
                              t[1] ||
                              (t[1] = () => {
                                qi.reset(), qi.handleActiveLink("Home");
                              }),
                          },
                          "SoMedia"
                        ),
                        Object(i["h"])("div", n, [
                          Ai.searchMobileView
                            ? (Object(i["q"])(),
                              Object(i["d"])(
                                "span",
                                {
                                  key: 0,
                                  class: "search-icon-mobile-view",
                                  style: Ai.searchZIndex,
                                  onClick:
                                    t[2] ||
                                    (t[2] = (...e) =>
                                      qi.showSearchInput &&
                                      qi.showSearchInput(...e)),
                                },
                                [
                                  c,
                                  Object(i["h"])(xi, {
                                    icon: ["fas", "search"],
                                  }),
                                ],
                                4
                              ))
                            : Object(i["e"])("", !0),
                          Object(i["h"])(
                            "span",
                            {
                              class: "search-icon  search-items",
                              style: Ai.searchZIndex,
                            },
                            [
                              d,
                              Object(i["h"])(xi, { icon: ["fas", "search"] }),
                            ],
                            4
                          ),
                          Object(i["h"])(
                            "span",
                            {
                              class: "search-container",
                              style: Ai.searchZIndex,
                            },
                            [
                              Object(i["G"])(
                                Object(i["h"])(
                                  "input",
                                  {
                                    type: "text",
                                    placeholder: " Search for Friends...",
                                    "onUpdate:modelValue":
                                      t[3] ||
                                      (t[3] = (e) => (Ai.searchInput = e)),
                                    onClick:
                                      t[4] ||
                                      (t[4] = (e) =>
                                        qi.handleSearchBackDrop("open")),
                                    class: "search-items",
                                    style: Ai.searchZIndex,
                                  },
                                  null,
                                  4
                                ),
                                [[i["C"], Ai.searchInput]]
                              ),
                            ],
                            4
                          ),
                          Ai.displaySearchContents
                            ? (Object(i["q"])(),
                              Object(i["d"])("div", r, [
                                (Object(i["q"])(!0),
                                Object(i["d"])(
                                  i["a"],
                                  null,
                                  Object(i["w"])(
                                    qi.filteredSearchList,
                                    (t) => (
                                      Object(i["q"])(),
                                      Object(i["d"])(
                                        "ul",
                                        { key: t.userName },
                                        [
                                          Object(i["h"])(
                                            "li",
                                            {
                                              onClick: (e) =>
                                                qi.showUserTimeline(t.userName),
                                            },
                                            [
                                              Object(i["h"])(
                                                "img",
                                                {
                                                  src: e.$store.state.users[
                                                    t.userName
                                                  ].userProfileImage,
                                                  alt: "",
                                                },
                                                null,
                                                8,
                                                ["src"]
                                              ),
                                              Object(i["h"])(
                                                "span",
                                                b,
                                                Object(i["z"])(t.userName),
                                                1
                                              ),
                                            ],
                                            8,
                                            ["onClick"]
                                          ),
                                        ]
                                      )
                                    )
                                  ),
                                  128
                                )),
                                qi.searchNotFound
                                  ? (Object(i["q"])(),
                                    Object(i["d"])("div", f, "User Not Found"))
                                  : Object(i["e"])("", !0),
                              ]))
                            : Object(i["e"])("", !0),
                        ]),
                      ]),
                      Object(i["h"])("ul", l, [
                        Object(i["h"])("li", null, [
                          u,
                          m,
                          Object(i["h"])(xi, { icon: ["fas", "info"] }),
                        ]),
                        Object(i["h"])("li", null, [
                          h,
                          p,
                          Object(i["h"])(xi, {
                            icon: ["fas", "phone-square-alt"],
                          }),
                        ]),
                        Object(i["h"])("li", null, [
                          Ai.logout
                            ? (Object(i["q"])(),
                              Object(i["d"])(
                                "button",
                                {
                                  key: 0,
                                  onClick:
                                    t[5] || (t[5] = (e) => qi.handleLogin("")),
                                  class: "btn btn-danger m-1",
                                },
                                [
                                  N,
                                  Object(i["h"])(xi, {
                                    icon: ["fas", "sign-out-alt"],
                                  }),
                                ]
                              ))
                            : Object(i["e"])("", !0),
                          qi.updateUserData
                            ? (Object(i["q"])(),
                              Object(i["d"])(
                                "button",
                                {
                                  key: 1,
                                  onClick:
                                    t[6] ||
                                    (t[6] = (e) => qi.handleLogin("login")),
                                  class: "btn btn-success m-1",
                                },
                                [
                                  y,
                                  Object(i["h"])(xi, {
                                    icon: ["fas", "sign-in-alt"],
                                  }),
                                ]
                              ))
                            : Object(i["e"])("", !0),
                        ]),
                      ]),
                      Ai.userIconMenu
                        ? (Object(i["q"])(),
                          Object(i["d"])("div", v, [
                            Object(i["h"])(
                              "span",
                              {
                                ref: "userImageMobileView",
                                class: "userImage  username-header",
                                onClick:
                                  t[13] ||
                                  (t[13] = (e) =>
                                    qi.handleUserOwnMenu(
                                      "userImageMobileView"
                                    )),
                              },
                              [
                                Object(i["h"])(
                                  "img",
                                  {
                                    src: Ai.userData.userProfileImage,
                                    alt: "",
                                  },
                                  null,
                                  8,
                                  ["src"]
                                ),
                                O,
                                Object(i["h"])(
                                  "span",
                                  j,
                                  Object(i["z"])(Ai.userData.userName),
                                  1
                                ),
                                g,
                                Ai.dropIconDisplay
                                  ? (Object(i["q"])(),
                                    Object(i["d"])(
                                      xi,
                                      {
                                        key: 0,
                                        icon: ["fas", "sort-down"],
                                        ref: "sortDown",
                                      },
                                      null,
                                      512
                                    ))
                                  : Object(i["e"])("", !0),
                                Ai.dropIconDisplay
                                  ? Object(i["e"])("", !0)
                                  : (Object(i["q"])(),
                                    Object(i["d"])(
                                      xi,
                                      {
                                        key: 1,
                                        icon: ["fas", "sort-up"],
                                        ref: "sortUp",
                                      },
                                      null,
                                      512
                                    )),
                                Object(i["h"])(
                                  "div",
                                  k,
                                  [
                                    Object(i["h"])(xi, {
                                      icon: ["fas", "sort-up"],
                                      class: "pointer-part",
                                    }),
                                    Object(i["h"])("ul", null, [
                                      Object(i["h"])(
                                        "li",
                                        {
                                          onClick:
                                            t[7] ||
                                            (t[7] = (e) => qi.showFriends()),
                                        },
                                        "Your Friends"
                                      ),
                                      Object(i["h"])(
                                        "li",
                                        {
                                          onClick:
                                            t[8] ||
                                            (t[8] = (e) => qi.showFriends()),
                                        },
                                        "Your Followers"
                                      ),
                                      Object(i["h"])(
                                        "li",
                                        {
                                          onClick:
                                            t[9] ||
                                            (t[9] = (e) => qi.showFriends()),
                                        },
                                        " Following"
                                      ),
                                      Object(i["h"])(
                                        "li",
                                        { onClick: (e) => "chats" },
                                        "Chats"
                                      ),
                                      Object(i["h"])(
                                        "li",
                                        {
                                          class: " own-profile",
                                          ref: "profile",
                                          onClick:
                                            t[10] ||
                                            (t[10] = (e) =>
                                              qi.handlePushRoutes(
                                                "userProfile"
                                              )),
                                        },
                                        [
                                          I,
                                          Object(i["h"])(
                                            xi,
                                            {
                                              icon: ["fas", "user"],
                                              ref: "profileIcon",
                                            },
                                            null,
                                            512
                                          ),
                                        ],
                                        512
                                      ),
                                      Object(i["h"])("li", D, [
                                        Ai.logout
                                          ? (Object(i["q"])(),
                                            Object(i["d"])(
                                              "button",
                                              {
                                                key: 0,
                                                onClick:
                                                  t[11] ||
                                                  (t[11] = (e) =>
                                                    qi.handleLogin("")),
                                                class: "btn btn-danger m-1",
                                              },
                                              [
                                                S,
                                                Object(i["h"])(xi, {
                                                  icon: ["fas", "sign-out-alt"],
                                                }),
                                              ]
                                            ))
                                          : Object(i["e"])("", !0),
                                        qi.updateUserData
                                          ? (Object(i["q"])(),
                                            Object(i["d"])(
                                              "button",
                                              {
                                                key: 1,
                                                onClick:
                                                  t[12] ||
                                                  (t[12] = (e) =>
                                                    qi.handleLogin("login")),
                                                class: "btn btn-success m-1",
                                              },
                                              [
                                                U,
                                                Object(i["h"])(xi, {
                                                  icon: ["fas", "sign-in-alt"],
                                                }),
                                              ]
                                            ))
                                          : Object(i["e"])("", !0),
                                      ]),
                                    ]),
                                  ],
                                  512
                                ),
                              ],
                              512
                            ),
                          ]))
                        : Object(i["e"])("", !0),
                    ]),
                    Object(i["h"])("div", C, [
                      Object(i["h"])("ul", w, [
                        Object(i["h"])(
                          "li",
                          {
                            ref: "home",
                            onClick:
                              t[14] ||
                              (t[14] = () => {
                                qi.handlePushRoutes("Home"),
                                  qi.handleActiveLink("Home");
                              }),
                            style: Ai.homeLink,
                            class: "lists",
                          },
                          [
                            Object(i["h"])(
                              "span",
                              { class: qi.handleTextHover("Home") },
                              [
                                R,
                                Object(i["h"])(
                                  xi,
                                  { icon: ["fas", "home"], ref: "homeIcon" },
                                  null,
                                  512
                                ),
                                L,
                              ],
                              2
                            ),
                          ],
                          4
                        ),
                        Object(i["h"])(
                          "li",
                          {
                            class: "lists nav-newsFeed",
                            style: Ai.newsFeedLink,
                            ref: "newsFeed",
                            onClick:
                              t[15] ||
                              (t[15] = () => {
                                qi.handlePushRoutes("Newsfeed"),
                                  qi.handleActiveLink("Newsfeed");
                              }),
                          },
                          [
                            Object(i["h"])(
                              "span",
                              { class: qi.handleTextHover("Newsfeed") },
                              [
                                T,
                                Object(i["h"])(
                                  xi,
                                  {
                                    icon: ["fas", "newspaper"],
                                    ref: "newsFeedIcon",
                                  },
                                  null,
                                  512
                                ),
                                A,
                              ],
                              2
                            ),
                            !Ai.timelineCount
                              ? Object(i["e"])("", !0)
                              : (Object(i["q"])(),
                                Object(i["d"])(
                                  "span",
                                  q,
                                  Object(i["z"])(Ai.timelineCount),
                                  1
                                )),
                          ],
                          4
                        ),
                        Object(i["h"])(
                          "li",
                          {
                            class: "lists",
                            style: Ai.timelineLink,
                            ref: "timeline",
                            onClick:
                              t[16] ||
                              (t[16] = (e) => qi.handlePushRoutes("Timeline")),
                          },
                          [
                            Object(i["h"])(
                              "span",
                              { class: qi.handleTextHover("Timeline") },
                              [
                                x,
                                Object(i["h"])(
                                  xi,
                                  {
                                    icon: ["fas", "user-clock"],
                                    ref: "timelineIcon",
                                  },
                                  null,
                                  512
                                ),
                                F,
                              ],
                              2
                            ),
                          ],
                          4
                        ),
                        Object(i["h"])(
                          "li",
                          {
                            class: "lists nav-profile",
                            style: Ai.profileLink,
                            ref: "profile",
                            onClick:
                              t[17] ||
                              (t[17] = (e) =>
                                qi.handlePushRoutes("userProfile")),
                          },
                          [
                            Object(i["h"])(
                              "span",
                              { class: qi.handleTextHover("userProfile") },
                              [
                                M,
                                Object(i["h"])(
                                  xi,
                                  { icon: ["fas", "user"], ref: "profileIcon" },
                                  null,
                                  512
                                ),
                                P,
                              ],
                              2
                            ),
                          ],
                          4
                        ),
                        Object(i["h"])(
                          "li",
                          {
                            class: "lists",
                            style: Ai.messageLink,
                            ref: "messages",
                            onClick:
                              t[18] ||
                              (t[18] = (e) => qi.handlePushRoutes("Messages")),
                          },
                          [
                            Object(i["h"])(
                              "span",
                              { class: qi.handleTextHover("Messages") },
                              [
                                E,
                                Object(i["h"])(
                                  xi,
                                  {
                                    icon: ["fas", "envelope"],
                                    ref: "messageIcon",
                                  },
                                  null,
                                  512
                                ),
                              ],
                              2
                            ),
                            $,
                            !Ai.newMessageCount
                              ? Object(i["e"])("", !0)
                              : (Object(i["q"])(),
                                Object(i["d"])(
                                  "span",
                                  z,
                                  Object(i["z"])(Ai.newMessageCount),
                                  1
                                )),
                          ],
                          4
                        ),
                        Object(i["h"])(
                          "li",
                          {
                            class: "lists collapsed-nav-notification",
                            ref: "notificationsFullNav",
                            onClick:
                              t[19] ||
                              (t[19] = (e) =>
                                qi.handleNotifications("notificationsFullNav")),
                          },
                          [
                            Object(i["h"])("span", V, [
                              B,
                              Object(i["h"])(
                                xi,
                                {
                                  icon: ["fas", "bell"],
                                  ref: "notificationIcon",
                                },
                                null,
                                512
                              ),
                            ]),
                            !Ai.notificationCount
                              ? Object(i["e"])("", !0)
                              : (Object(i["q"])(),
                                Object(i["d"])(
                                  "span",
                                  G,
                                  Object(i["z"])(Ai.notificationCount),
                                  1
                                )),
                            Object(i["h"])(
                              "div",
                              _,
                              [
                                Object(i["h"])(xi, {
                                  icon: ["fas", "sort-up"],
                                  class: "pointer-part",
                                }),
                                (Object(i["q"])(!0),
                                Object(i["d"])(
                                  i["a"],
                                  null,
                                  Object(i["w"])(
                                    Ai.notifications,
                                    (e) => (
                                      Object(i["q"])(),
                                      Object(i["d"])("ul", null, [
                                        "post" === e.notificationType &&
                                        "unRead" === e.notificationStatus
                                          ? (Object(i["q"])(),
                                            Object(i["d"])(
                                              "li",
                                              {
                                                key: 0,
                                                ref: "lists",
                                                onClick: (t) =>
                                                  qi.showNotificationDetails(
                                                    "post",
                                                    e.notificationId,
                                                    e.userName
                                                  ),
                                              },
                                              [
                                                J,
                                                Object(i["h"])(
                                                  "span",
                                                  H,
                                                  Object(i["z"])(e.userName),
                                                  1
                                                ),
                                                Object(i["g"])(
                                                  " just made a new " +
                                                    Object(i["z"])(
                                                      e.notificationType
                                                    ) +
                                                    " ",
                                                  1
                                                ),
                                                Object(i["h"])(xi, {
                                                  icon: ["fas", "newspaper"],
                                                }),
                                                Y,
                                                Object(i["h"])(
                                                  "span",
                                                  null,
                                                  Object(i["z"])(
                                                    qi.showDate(
                                                      e.notificationDate
                                                    )
                                                  ),
                                                  1
                                                ),
                                                Z,
                                              ],
                                              8,
                                              ["onClick"]
                                            ))
                                          : Object(i["e"])("", !0),
                                        "friend request" ===
                                          e.notificationType &&
                                        "unRead" === e.notificationStatus
                                          ? (Object(i["q"])(),
                                            Object(i["d"])(
                                              "li",
                                              {
                                                key: 1,
                                                ref: "lists",
                                                onClick: (t) =>
                                                  qi.showNotificationDetails(
                                                    "friend request",
                                                    e.notificationId,
                                                    e.userName
                                                  ),
                                              },
                                              [
                                                Object(i["h"])(
                                                  "span",
                                                  W,
                                                  Object(i["z"])(e.userName),
                                                  1
                                                ),
                                                Object(i["g"])(
                                                  " sent you a " +
                                                    Object(i["z"])(
                                                      e.notificationType
                                                    ) +
                                                    " ",
                                                  1
                                                ),
                                                Object(i["h"])(xi, {
                                                  class: "ml-2",
                                                  icon: ["fas", "user-friends"],
                                                }),
                                                K,
                                                Q,
                                                Object(i["h"])(
                                                  "span",
                                                  null,
                                                  Object(i["z"])(
                                                    qi.showDate(
                                                      e.notificationDate
                                                    )
                                                  ),
                                                  1
                                                ),
                                                X,
                                              ],
                                              8,
                                              ["onClick"]
                                            ))
                                          : Object(i["e"])("", !0),
                                        "Accepted Friend Request" ===
                                          e.notificationType &&
                                        "unRead" === e.notificationStatus
                                          ? (Object(i["q"])(),
                                            Object(i["d"])(
                                              "li",
                                              {
                                                key: 2,
                                                ref: "lists",
                                                onClick: (t) =>
                                                  qi.showNotificationDetails(
                                                    "Accepted Friend Request",
                                                    e.notificationId,
                                                    e.userName
                                                  ),
                                              },
                                              [
                                                Object(i["h"])(
                                                  "span",
                                                  ee,
                                                  Object(i["z"])(e.userName),
                                                  1
                                                ),
                                                te,
                                                Object(i["h"])(xi, {
                                                  class: "ml-2",
                                                  icon: ["fas", "user-friends"],
                                                }),
                                                ae,
                                                ie,
                                                Object(i["h"])(
                                                  "span",
                                                  null,
                                                  Object(i["z"])(
                                                    qi.showDate(
                                                      e.notificationDate
                                                    )
                                                  ),
                                                  1
                                                ),
                                                se,
                                              ],
                                              8,
                                              ["onClick"]
                                            ))
                                          : Object(i["e"])("", !0),
                                        "message" === e.notificationType &&
                                        "unRead" === e.notificationStatus
                                          ? (Object(i["q"])(),
                                            Object(i["d"])(
                                              "li",
                                              {
                                                key: 3,
                                                ref: "lists",
                                                onClick: (t) =>
                                                  qi.showNotificationDetails(
                                                    "message",
                                                    e.notificationId,
                                                    e.userName
                                                  ),
                                              },
                                              [
                                                Object(i["g"])(
                                                  " You have a new " +
                                                    Object(i["z"])(
                                                      e.notificationType
                                                    ) +
                                                    " from ",
                                                  1
                                                ),
                                                Object(i["h"])("span", oe, [
                                                  Object(i["g"])(
                                                    Object(i["z"])(e.userName) +
                                                      " ",
                                                    1
                                                  ),
                                                  Object(i["h"])(xi, {
                                                    class: "ml-2",
                                                    icon: ["fas", "envelope"],
                                                  }),
                                                ]),
                                                ne,
                                                ce,
                                                Object(i["h"])(
                                                  "span",
                                                  null,
                                                  Object(i["z"])(
                                                    qi.showDate(
                                                      e.notificationDate
                                                    )
                                                  ),
                                                  1
                                                ),
                                                de,
                                              ],
                                              8,
                                              ["onClick"]
                                            ))
                                          : Object(i["e"])("", !0),
                                        "likes" === e.notificationType &&
                                        "unRead" === e.notificationStatus &&
                                        e.posterUserName ===
                                          Ai.userData.userName
                                          ? (Object(i["q"])(),
                                            Object(i["d"])(
                                              "li",
                                              {
                                                key: 4,
                                                ref: "lists",
                                                onClick: (t) =>
                                                  qi.showNotificationDetails(
                                                    "likes",
                                                    e.notificationId,
                                                    e.posterUserName
                                                  ),
                                              },
                                              [
                                                Object(i["h"])(
                                                  "span",
                                                  re,
                                                  Object(i["z"])(e.userName),
                                                  1
                                                ),
                                                be,
                                                Object(i["h"])(xi, {
                                                  icon: ["fas", "thumbs-up"],
                                                }),
                                                fe,
                                                Object(i["h"])(
                                                  "span",
                                                  null,
                                                  Object(i["z"])(
                                                    qi.showDate(
                                                      e.notificationDate
                                                    )
                                                  ),
                                                  1
                                                ),
                                                le,
                                              ],
                                              8,
                                              ["onClick"]
                                            ))
                                          : Object(i["e"])("", !0),
                                        "likes" === e.notificationType &&
                                        "unRead" === e.notificationStatus &&
                                        e.userName !== e.posterUserName &&
                                        e.posterUserName !==
                                          Ai.userData.userName
                                          ? (Object(i["q"])(),
                                            Object(i["d"])(
                                              "li",
                                              {
                                                key: 5,
                                                ref: "lists",
                                                onClick: (t) =>
                                                  qi.showNotificationDetails(
                                                    "likes",
                                                    e.notificationId,
                                                    e.userName,
                                                    e.posterUserName
                                                  ),
                                              },
                                              [
                                                ue,
                                                Object(i["h"])(
                                                  "span",
                                                  me,
                                                  Object(i["z"])(e.userName),
                                                  1
                                                ),
                                                he,
                                                Object(i["h"])(
                                                  "span",
                                                  pe,
                                                  Object(i["z"])(
                                                    e.posterUserName
                                                  ),
                                                  1
                                                ),
                                                Ne,
                                                Object(i["h"])(xi, {
                                                  icon: ["fas", "thumbs-up"],
                                                }),
                                                ye,
                                                Object(i["h"])(
                                                  "span",
                                                  null,
                                                  Object(i["z"])(
                                                    qi.showDate(
                                                      e.notificationDate
                                                    )
                                                  ),
                                                  1
                                                ),
                                                ve,
                                              ],
                                              8,
                                              ["onClick"]
                                            ))
                                          : Object(i["e"])("", !0),
                                        "likes" === e.notificationType &&
                                        "unRead" === e.notificationStatus &&
                                        e.userName === e.posterUserName &&
                                        e.posterUserName !==
                                          Ai.userData.userName
                                          ? (Object(i["q"])(),
                                            Object(i["d"])(
                                              "li",
                                              {
                                                key: 6,
                                                ref: "lists",
                                                onClick: (t) =>
                                                  qi.showNotificationDetails(
                                                    "likes",
                                                    e.notificationId,
                                                    e.userName,
                                                    e.posterUserName
                                                  ),
                                              },
                                              [
                                                Oe,
                                                Object(i["h"])(
                                                  "span",
                                                  je,
                                                  Object(i["z"])(e.userName),
                                                  1
                                                ),
                                                ge,
                                                Object(i["h"])(
                                                  "span",
                                                  ke,
                                                  Object(i["z"])(
                                                    qi.handleGender(e.userName)
                                                  ),
                                                  1
                                                ),
                                                Ie,
                                                Object(i["h"])(xi, {
                                                  icon: ["fas", "thumbs-up"],
                                                }),
                                                De,
                                                Se,
                                                Object(i["h"])(
                                                  "span",
                                                  null,
                                                  Object(i["z"])(
                                                    qi.showDate(
                                                      e.notificationDate
                                                    )
                                                  ),
                                                  1
                                                ),
                                                Ue,
                                              ],
                                              8,
                                              ["onClick"]
                                            ))
                                          : Object(i["e"])("", !0),
                                        "likedComment" === e.notificationType &&
                                        "unRead" === e.notificationStatus &&
                                        e.commenterUserName ===
                                          Ai.userData.userName &&
                                        e.posterUserName !==
                                          Ai.userData.userName &&
                                        e.posterUserName !== e.userName &&
                                        e.commenterUserName !== e.userName
                                          ? (Object(i["q"])(),
                                            Object(i["d"])(
                                              "li",
                                              {
                                                key: 7,
                                                ref: "lists",
                                                onClick: (t) =>
                                                  qi.showNotificationDetails(
                                                    "likedComment",
                                                    e.notificationId,
                                                    e.userName
                                                  ),
                                              },
                                              [
                                                Object(i["h"])(
                                                  "span",
                                                  Ce,
                                                  Object(i["z"])(e.userName),
                                                  1
                                                ),
                                                we,
                                                Object(i["h"])(
                                                  "span",
                                                  Re,
                                                  Object(i["z"])(
                                                    e.posterUserName
                                                  ),
                                                  1
                                                ),
                                                Le,
                                                Object(i["h"])(xi, {
                                                  icon: ["fas", "thumbs-up"],
                                                }),
                                                Te,
                                                Object(i["h"])(
                                                  "span",
                                                  null,
                                                  Object(i["z"])(
                                                    qi.showDate(
                                                      e.notificationDate
                                                    )
                                                  ),
                                                  1
                                                ),
                                                Ae,
                                              ],
                                              8,
                                              ["onClick"]
                                            ))
                                          : Object(i["e"])("", !0),
                                        "likedComment" === e.notificationType &&
                                        "unRead" === e.notificationStatus &&
                                        e.commenterUserName === e.userName &&
                                        e.userName !== Ai.userData.userName &&
                                        e.posterUserName !== e.userName
                                          ? (Object(i["q"])(),
                                            Object(i["d"])(
                                              "li",
                                              {
                                                key: 8,
                                                ref: "lists",
                                                onClick: (t) =>
                                                  qi.showNotificationDetails(
                                                    "likedComment",
                                                    e.notificationId,
                                                    e.userName
                                                  ),
                                              },
                                              [
                                                Object(i["h"])(
                                                  "span",
                                                  qe,
                                                  Object(i["z"])(e.userName),
                                                  1
                                                ),
                                                Object(i["g"])(
                                                  " likes " +
                                                    Object(i["z"])(
                                                      qi.handleGender(
                                                        e.userName
                                                      )
                                                    ) +
                                                    " comment on ",
                                                  1
                                                ),
                                                Object(i["h"])(
                                                  "span",
                                                  xe,
                                                  Object(i["z"])(
                                                    e.posterUserName
                                                  ),
                                                  1
                                                ),
                                                Fe,
                                                Object(i["h"])(xi, {
                                                  icon: ["fas", "thumbs-up"],
                                                }),
                                                Me,
                                                Object(i["h"])(
                                                  "span",
                                                  null,
                                                  Object(i["z"])(
                                                    qi.showDate(
                                                      e.notificationDate
                                                    )
                                                  ),
                                                  1
                                                ),
                                                Pe,
                                              ],
                                              8,
                                              ["onClick"]
                                            ))
                                          : Object(i["e"])("", !0),
                                        "likedComment" === e.notificationType &&
                                        "unRead" === e.notificationStatus &&
                                        e.commenterUserName ===
                                          Ai.userData.userName &&
                                        e.posterUserName ===
                                          Ai.userData.userName &&
                                        e.posterUserName !== e.userName
                                          ? (Object(i["q"])(),
                                            Object(i["d"])(
                                              "li",
                                              {
                                                key: 9,
                                                ref: "lists",
                                                onClick: (t) =>
                                                  qi.showNotificationDetails(
                                                    "likedComment",
                                                    e.notificationId,
                                                    e.userName
                                                  ),
                                              },
                                              [
                                                Object(i["h"])(
                                                  "span",
                                                  Ee,
                                                  Object(i["z"])(e.userName),
                                                  1
                                                ),
                                                $e,
                                                Object(i["h"])(xi, {
                                                  icon: ["fas", "thumbs-up"],
                                                }),
                                                ze,
                                                Ve,
                                                Object(i["h"])(
                                                  "span",
                                                  null,
                                                  Object(i["z"])(
                                                    qi.showDate(
                                                      e.notificationDate
                                                    )
                                                  ),
                                                  1
                                                ),
                                                Be,
                                              ],
                                              8,
                                              ["onClick"]
                                            ))
                                          : Object(i["e"])("", !0),
                                        "likedComment" === e.notificationType &&
                                        "unRead" === e.notificationStatus &&
                                        e.commenterUserName !==
                                          Ai.userData.userName &&
                                        e.posterUserName ===
                                          Ai.userData.userName &&
                                        e.posterUserName !== e.userName
                                          ? (Object(i["q"])(),
                                            Object(i["d"])(
                                              "li",
                                              {
                                                key: 10,
                                                ref: "lists",
                                                onClick: (t) =>
                                                  qi.showNotificationDetails(
                                                    "likedComment",
                                                    e.notificationId,
                                                    e.userName
                                                  ),
                                              },
                                              [
                                                Object(i["h"])(
                                                  "span",
                                                  Ge,
                                                  Object(i["z"])(e.userName),
                                                  1
                                                ),
                                                Object(i["g"])(
                                                  " likes " +
                                                    Object(i["z"])(
                                                      e.commenterUserName
                                                    ) +
                                                    " comment on Your post ",
                                                  1
                                                ),
                                                Object(i["h"])(xi, {
                                                  icon: ["fas", "thumbs-up"],
                                                }),
                                                _e,
                                                Je,
                                                Object(i["h"])(
                                                  "span",
                                                  null,
                                                  Object(i["z"])(
                                                    qi.showDate(
                                                      e.notificationDate
                                                    )
                                                  ),
                                                  1
                                                ),
                                                He,
                                              ],
                                              8,
                                              ["onClick"]
                                            ))
                                          : Object(i["e"])("", !0),
                                        "likedComment" === e.notificationType &&
                                        "unRead" === e.notificationStatus &&
                                        e.commenterUserName === e.userName &&
                                        e.posterUserName !==
                                          Ai.userData.userName &&
                                        e.posterUserName === e.userName
                                          ? (Object(i["q"])(),
                                            Object(i["d"])(
                                              "li",
                                              {
                                                key: 11,
                                                ref: "lists",
                                                onClick: (t) =>
                                                  qi.showNotificationDetails(
                                                    "likedComment",
                                                    e.notificationId,
                                                    e.userName
                                                  ),
                                              },
                                              [
                                                Object(i["h"])(
                                                  "span",
                                                  Ye,
                                                  Object(i["z"])(e.userName),
                                                  1
                                                ),
                                                Object(i["g"])(
                                                  " likes " +
                                                    Object(i["z"])(
                                                      qi.handleGender(
                                                        e.userName
                                                      )
                                                    ) +
                                                    " comment on " +
                                                    Object(i["z"])(
                                                      qi.handleGender(
                                                        e.userName
                                                      )
                                                    ) +
                                                    " post ",
                                                  1
                                                ),
                                                Object(i["h"])(xi, {
                                                  icon: ["fas", "thumbs-up"],
                                                }),
                                                Ze,
                                                We,
                                                Object(i["h"])(
                                                  "span",
                                                  null,
                                                  Object(i["z"])(
                                                    qi.showDate(
                                                      e.notificationDate
                                                    )
                                                  ),
                                                  1
                                                ),
                                                Ke,
                                              ],
                                              8,
                                              ["onClick"]
                                            ))
                                          : Object(i["e"])("", !0),
                                        "comment" === e.notificationType &&
                                        "unRead" === e.notificationStatus &&
                                        e.posterUserName ===
                                          Ai.userData.userName &&
                                        e.userName !== Ai.userData.userName
                                          ? (Object(i["q"])(),
                                            Object(i["d"])(
                                              "li",
                                              {
                                                key: 12,
                                                ref: "lists",
                                                onClick: (t) =>
                                                  qi.showNotificationDetails(
                                                    "comment",
                                                    e.notificationId,
                                                    e.userName
                                                  ),
                                              },
                                              [
                                                Object(i["h"])(
                                                  "span",
                                                  Qe,
                                                  Object(i["z"])(e.userName),
                                                  1
                                                ),
                                                Xe,
                                                et,
                                                Object(i["h"])(
                                                  "span",
                                                  null,
                                                  Object(i["z"])(
                                                    qi.showDate(
                                                      e.notificationDate
                                                    )
                                                  ),
                                                  1
                                                ),
                                                tt,
                                              ],
                                              8,
                                              ["onClick"]
                                            ))
                                          : Object(i["e"])("", !0),
                                        "comment" === e.notificationType &&
                                        "unRead" === e.notificationStatus &&
                                        e.userName !== Ai.userData.userName &&
                                        e.userName !== e.posterUserName &&
                                        Ai.userData.userName !==
                                          e.posterUserName
                                          ? (Object(i["q"])(),
                                            Object(i["d"])(
                                              "li",
                                              {
                                                key: 13,
                                                ref: "lists",
                                                onClick: (t) =>
                                                  qi.showNotificationDetails(
                                                    "comment",
                                                    e.notificationId,
                                                    e.userName,
                                                    e.posterUserName
                                                  ),
                                              },
                                              [
                                                at,
                                                Object(i["h"])(
                                                  "span",
                                                  it,
                                                  Object(i["z"])(e.userName),
                                                  1
                                                ),
                                                st,
                                                Object(i["h"])(
                                                  "span",
                                                  ot,
                                                  Object(i["z"])(
                                                    e.posterUserName
                                                  ),
                                                  1
                                                ),
                                                nt,
                                                ct,
                                                Object(i["h"])(
                                                  "span",
                                                  null,
                                                  Object(i["z"])(
                                                    qi.showDate(
                                                      e.notificationDate
                                                    )
                                                  ),
                                                  1
                                                ),
                                                dt,
                                              ],
                                              8,
                                              ["onClick"]
                                            ))
                                          : Object(i["e"])("", !0),
                                        "comment" === e.notificationType &&
                                        "unRead" === e.notificationStatus &&
                                        e.userName !== Ai.userData.userName &&
                                        e.userName === e.posterUserName
                                          ? (Object(i["q"])(),
                                            Object(i["d"])(
                                              "li",
                                              {
                                                key: 14,
                                                ref: "lists",
                                                onClick: (t) =>
                                                  qi.showNotificationDetails(
                                                    "comment",
                                                    e.notificationId,
                                                    e.userName,
                                                    e.posterUserName
                                                  ),
                                              },
                                              [
                                                rt,
                                                Object(i["h"])(
                                                  "span",
                                                  bt,
                                                  Object(i["z"])(e.userName),
                                                  1
                                                ),
                                                Object(i["g"])(
                                                  " commented on " +
                                                    Object(i["z"])(
                                                      qi.handleGender(
                                                        e.userName
                                                      )
                                                    ) +
                                                    " post ",
                                                  1
                                                ),
                                                ft,
                                                Object(i["h"])(
                                                  "span",
                                                  null,
                                                  Object(i["z"])(
                                                    qi.showDate(
                                                      e.notificationDate
                                                    )
                                                  ),
                                                  1
                                                ),
                                                lt,
                                              ],
                                              8,
                                              ["onClick"]
                                            ))
                                          : Object(i["e"])("", !0),
                                        "follow" === e.notificationType &&
                                        "unRead" === e.notificationStatus &&
                                        e.userName !== Ai.userData.userName
                                          ? (Object(i["q"])(),
                                            Object(i["d"])(
                                              "li",
                                              {
                                                key: 15,
                                                ref: "lists",
                                                onClick: (t) =>
                                                  qi.showNotificationDetails(
                                                    "follow",
                                                    e.notificationId,
                                                    e.userName
                                                  ),
                                              },
                                              [
                                                Object(i["h"])(
                                                  "span",
                                                  ut,
                                                  Object(i["z"])(e.userName),
                                                  1
                                                ),
                                                mt,
                                                Object(i["h"])(xi, {
                                                  class: "ml-2",
                                                  icon: ["fas", "users"],
                                                }),
                                                ht,
                                                Object(i["h"])(
                                                  "span",
                                                  null,
                                                  Object(i["z"])(
                                                    qi.showDate(
                                                      e.notificationDate
                                                    )
                                                  ),
                                                  1
                                                ),
                                                pt,
                                              ],
                                              8,
                                              ["onClick"]
                                            ))
                                          : Object(i["e"])("", !0),
                                      ])
                                    )
                                  ),
                                  256
                                )),
                                Ai.notificationCount
                                  ? Object(i["e"])("", !0)
                                  : (Object(i["q"])(),
                                    Object(i["d"])(
                                      "span",
                                      Nt,
                                      "You have no new Notification"
                                    )),
                              ],
                              512
                            ),
                          ],
                          512
                        ),
                      ]),
                      Object(i["h"])("div", yt, [
                        Object(i["h"])(
                          "span",
                          {
                            ref: "userImageFullNav",
                            class: "userImage",
                            onClick:
                              t[23] ||
                              (t[23] = (e) =>
                                qi.handleUserOwnMenu("userImageFullNav")),
                          },
                          [
                            Object(i["h"])(
                              "img",
                              { src: Ai.userData.userProfileImage, alt: "" },
                              null,
                              8,
                              ["src"]
                            ),
                            vt,
                            Object(i["h"])(
                              "span",
                              Ot,
                              Object(i["z"])(Ai.userData.userName),
                              1
                            ),
                            jt,
                            Ai.dropIconDisplay
                              ? (Object(i["q"])(),
                                Object(i["d"])(
                                  xi,
                                  {
                                    key: 0,
                                    icon: ["fas", "sort-down"],
                                    ref: "sortDown",
                                  },
                                  null,
                                  512
                                ))
                              : Object(i["e"])("", !0),
                            Ai.dropIconDisplay
                              ? Object(i["e"])("", !0)
                              : (Object(i["q"])(),
                                Object(i["d"])(
                                  xi,
                                  {
                                    key: 1,
                                    icon: ["fas", "sort-up"],
                                    ref: "sortUp",
                                  },
                                  null,
                                  512
                                )),
                            Object(i["h"])(
                              "div",
                              gt,
                              [
                                Object(i["h"])(xi, {
                                  icon: ["fas", "sort-up"],
                                  class: "pointer-part",
                                }),
                                Object(i["h"])("ul", null, [
                                  Object(i["h"])(
                                    "li",
                                    {
                                      onClick:
                                        t[20] ||
                                        (t[20] = (...e) =>
                                          qi.showFriends &&
                                          qi.showFriends(...e)),
                                    },
                                    "Your Friends"
                                  ),
                                  Object(i["h"])(
                                    "li",
                                    {
                                      onClick:
                                        t[21] ||
                                        (t[21] = (...e) =>
                                          qi.showFriends &&
                                          qi.showFriends(...e)),
                                    },
                                    "Your Followers"
                                  ),
                                  Object(i["h"])(
                                    "li",
                                    {
                                      onClick:
                                        t[22] ||
                                        (t[22] = (...e) =>
                                          qi.showFriends &&
                                          qi.showFriends(...e)),
                                    },
                                    " Following"
                                  ),
                                  Object(i["h"])(
                                    "li",
                                    { onClick: (e) => "chats" },
                                    "Chats"
                                  ),
                                ]),
                              ],
                              512
                            ),
                          ],
                          512
                        ),
                      ]),
                    ]),
                    Ai.backDrop
                      ? (Object(i["q"])(),
                        Object(i["d"])("div", {
                          key: 0,
                          class: "back-drop",
                          onClick:
                            t[24] ||
                            (t[24] = (e) =>
                              qi.handleUserOwnMenu(Ai.clickedMenu)),
                        }))
                      : Object(i["e"])("", !0),
                    Ai.searchBackDrop
                      ? (Object(i["q"])(),
                        Object(i["d"])("div", {
                          key: 1,
                          class: "search-back-drop",
                          onClick:
                            t[25] ||
                            (t[25] = (e) => qi.handleSearchBackDrop("close")),
                        }))
                      : Object(i["e"])("", !0),
                    Ai.notificationBackDrop
                      ? (Object(i["q"])(),
                        Object(i["d"])("div", {
                          key: 2,
                          class: "notify-back-drop",
                          onClick:
                            t[26] ||
                            (t[26] = (...e) =>
                              qi.handleNotifyBackDrop &&
                              qi.handleNotifyBackDrop(...e)),
                        }))
                      : Object(i["e"])("", !0),
                    Ai.menuBarBackDrop
                      ? (Object(i["q"])(),
                        Object(i["d"])("div", {
                          key: 3,
                          class: "nav-menu-bar-drop",
                          onClick:
                            t[27] ||
                            (t[27] = (...e) =>
                              qi.handleMenuBarBackDropBackDrop &&
                              qi.handleMenuBarBackDropBackDrop(...e)),
                        }))
                      : Object(i["e"])("", !0),
                  ],
                  4
                ))
              : Object(i["e"])("", !0),
            e.$store.state.displayFunctions.loginPageUnmounted
              ? (Object(i["q"])(),
                Object(i["d"])(
                  "div",
                  { key: 1, class: "collapsed-nav", style: Ai.collapsedNav },
                  [
                    Ai.backDrop
                      ? (Object(i["q"])(),
                        Object(i["d"])("div", {
                          key: 0,
                          class: "back-drop",
                          onClick:
                            t[28] ||
                            (t[28] = (e) =>
                              qi.handleUserOwnMenu(Ai.clickedMenu)),
                        }))
                      : Object(i["e"])("", !0),
                    Ai.searchBackDrop
                      ? (Object(i["q"])(),
                        Object(i["d"])("div", {
                          key: 1,
                          class: "search-back-drop",
                          onClick:
                            t[29] ||
                            (t[29] = (e) => qi.handleSearchBackDrop("close")),
                        }))
                      : Object(i["e"])("", !0),
                    Ai.notificationBackDrop
                      ? (Object(i["q"])(),
                        Object(i["d"])("div", {
                          key: 2,
                          class: "notify-back-drop",
                          onClick:
                            t[30] ||
                            (t[30] = (...e) =>
                              qi.handleNotifyBackDrop &&
                              qi.handleNotifyBackDrop(...e)),
                        }))
                      : Object(i["e"])("", !0),
                    Ai.menuBarBackDrop
                      ? (Object(i["q"])(),
                        Object(i["d"])("div", {
                          key: 3,
                          class: "nav-menu-bar-drop",
                          onClick:
                            t[31] ||
                            (t[31] = (...e) =>
                              qi.handleMenuBarBackDropBackDrop &&
                              qi.handleMenuBarBackDropBackDrop(...e)),
                        }))
                      : Object(i["e"])("", !0),
                    Object(i["h"])("div", kt, [
                      Object(i["h"])(
                        "h3",
                        {
                          onClick:
                            t[32] ||
                            (t[32] = (e) => qi.handleActiveLink("Home")),
                        },
                        "SoMedia"
                      ),
                      Object(i["h"])("div", It, [
                        Ai.searchMobileView
                          ? (Object(i["q"])(),
                            Object(i["d"])(
                              "span",
                              {
                                key: 0,
                                class: "search-icon-mobile-view",
                                style: Ai.searchZIndex,
                                onClick:
                                  t[33] ||
                                  (t[33] = (...e) =>
                                    qi.showSearchInput &&
                                    qi.showSearchInput(...e)),
                              },
                              [
                                Dt,
                                Object(i["h"])(xi, { icon: ["fas", "search"] }),
                              ],
                              4
                            ))
                          : Object(i["e"])("", !0),
                        Object(i["h"])(
                          "span",
                          {
                            class: "search-icon search-items",
                            style: Ai.searchZIndex,
                          },
                          [St, Object(i["h"])(xi, { icon: ["fas", "search"] })],
                          4
                        ),
                        Object(i["h"])(
                          "span",
                          {
                            class: "search-container search-items",
                            style: Ai.searchZIndex,
                          },
                          [
                            Object(i["G"])(
                              Object(i["h"])(
                                "input",
                                {
                                  type: "text",
                                  placeholder: " Search for Friends...",
                                  "onUpdate:modelValue":
                                    t[34] ||
                                    (t[34] = (e) => (Ai.searchInput = e)),
                                  onClick:
                                    t[35] ||
                                    (t[35] = (e) =>
                                      qi.handleSearchBackDrop("open")),
                                },
                                null,
                                512
                              ),
                              [[i["C"], Ai.searchInput]]
                            ),
                          ],
                          4
                        ),
                        Ai.displaySearchContents
                          ? (Object(i["q"])(),
                            Object(i["d"])("div", Ut, [
                              (Object(i["q"])(!0),
                              Object(i["d"])(
                                i["a"],
                                null,
                                Object(i["w"])(
                                  qi.filteredSearchList,
                                  (t) => (
                                    Object(i["q"])(),
                                    Object(i["d"])("ul", null, [
                                      Object(i["h"])(
                                        "li",
                                        {
                                          onClick: (e) =>
                                            qi.showUserTimeline(t.userName),
                                        },
                                        [
                                          Object(i["h"])(
                                            "img",
                                            {
                                              src: e.$store.state.users[
                                                t.userName
                                              ].userProfileImage,
                                              alt: "",
                                            },
                                            null,
                                            8,
                                            ["src"]
                                          ),
                                          Ct,
                                          Object(i["h"])(
                                            "span",
                                            wt,
                                            Object(i["z"])(t.userName),
                                            1
                                          ),
                                        ],
                                        8,
                                        ["onClick"]
                                      ),
                                    ])
                                  )
                                ),
                                256
                              )),
                              qi.searchNotFound
                                ? (Object(i["q"])(),
                                  Object(i["d"])("div", Rt, "User Not Found"))
                                : Object(i["e"])("", !0),
                            ]))
                          : Object(i["e"])("", !0),
                      ]),
                    ]),
                    Ai.displayNavTwo
                      ? (Object(i["q"])(),
                        Object(i["d"])("div", Lt, [
                          Object(i["h"])(
                            "div",
                            {
                              class: "collapsed-nav-menu-bar",
                              onClick:
                                t[40] ||
                                (t[40] = (...e) =>
                                  qi.handleShowMenuContents &&
                                  qi.handleShowMenuContents(...e)),
                            },
                            [
                              Object(i["h"])(xi, { icon: ["fas", "bars"] }),
                              Ai.menuContents
                                ? (Object(i["q"])(),
                                  Object(i["d"])("div", Tt, [
                                    Object(i["h"])(xi, {
                                      icon: ["fas", "sort-up"],
                                      class: "pointer-part",
                                    }),
                                    Object(i["h"])("ul", null, [
                                      Object(i["h"])(
                                        "li",
                                        {
                                          class: "",
                                          onClick:
                                            t[36] ||
                                            (t[36] = () => {
                                              qi.handlePushRoutes("Newsfeed"),
                                                qi.handleActiveLink("Newsfeed");
                                            }),
                                        },
                                        [
                                          At,
                                          Object(i["h"])(xi, {
                                            icon: ["fas", "newspaper"],
                                          }),
                                          !Ai.timelineCount
                                            ? Object(i["e"])("", !0)
                                            : (Object(i["q"])(),
                                              Object(i["d"])(
                                                "span",
                                                qt,
                                                Object(i["z"])(
                                                  Ai.timelineCount
                                                ),
                                                1
                                              )),
                                        ]
                                      ),
                                      Object(i["h"])(
                                        "li",
                                        {
                                          class: " ",
                                          onClick:
                                            t[37] ||
                                            (t[37] = (e) =>
                                              qi.handlePushRoutes("Timeline")),
                                        },
                                        [
                                          xt,
                                          Object(i["h"])(xi, {
                                            icon: ["fas", "user-clock"],
                                          }),
                                        ]
                                      ),
                                      Object(i["h"])(
                                        "li",
                                        {
                                          class: "  ",
                                          onClick:
                                            t[38] ||
                                            (t[38] = (e) =>
                                              qi.handlePushRoutes(
                                                "userProfile"
                                              )),
                                        },
                                        [
                                          Ft,
                                          Object(i["h"])(xi, {
                                            icon: ["fas", "user"],
                                          }),
                                        ]
                                      ),
                                      Object(i["h"])(
                                        "li",
                                        {
                                          class: "",
                                          onClick:
                                            t[39] ||
                                            (t[39] = (e) =>
                                              qi.handlePushRoutes("Messages")),
                                        },
                                        [
                                          Mt,
                                          Object(i["h"])(xi, {
                                            icon: ["fas", "envelope"],
                                          }),
                                          !Ai.newMessageCount
                                            ? Object(i["e"])("", !0)
                                            : (Object(i["q"])(),
                                              Object(i["d"])(
                                                "span",
                                                Pt,
                                                Object(i["z"])(
                                                  Ai.newMessageCount
                                                ),
                                                1
                                              )),
                                        ]
                                      ),
                                    ]),
                                  ]))
                                : Object(i["e"])("", !0),
                            ]
                          ),
                          Object(i["h"])("ul", Et, [
                            Object(i["h"])(
                              "li",
                              {
                                ref: "home",
                                style: Ai.homeLink,
                                onClick:
                                  t[41] ||
                                  (t[41] = () => {
                                    qi.handlePushRoutes("Home"),
                                      qi.handleActiveLink("Home");
                                  }),
                                class: "lists list-mobile-view",
                              },
                              [
                                Object(i["h"])(
                                  "span",
                                  {
                                    class: [
                                      "collapsed-nav-text",
                                      qi.handleTextHover("Home"),
                                    ],
                                  },
                                  "Home ",
                                  2
                                ),
                                Object(i["h"])(
                                  xi,
                                  { icon: ["fas", "home"], ref: "homeIcon" },
                                  null,
                                  512
                                ),
                              ],
                              4
                            ),
                            Object(i["h"])(
                              "li",
                              {
                                class: "lists list-mobile-view",
                                style: Ai.newsFeedLink,
                                ref: "newsFeed",
                                onClick:
                                  t[42] ||
                                  (t[42] = () => {
                                    qi.handlePushRoutes("Newsfeed"),
                                      qi.handleActiveLink("Newsfeed");
                                  }),
                              },
                              [
                                Object(i["h"])(
                                  "span",
                                  {
                                    class: [
                                      "collapsed-nav-text list-mobile-view ",
                                      qi.handleTextHover("Newsfeed"),
                                    ],
                                  },
                                  "Newsfeed  ",
                                  2
                                ),
                                Object(i["h"])(
                                  xi,
                                  {
                                    icon: ["fas", "newspaper"],
                                    ref: "newsFeedIcon",
                                  },
                                  null,
                                  512
                                ),
                                !Ai.timelineCount
                                  ? Object(i["e"])("", !0)
                                  : (Object(i["q"])(),
                                    Object(i["d"])(
                                      "span",
                                      $t,
                                      Object(i["z"])(Ai.timelineCount),
                                      1
                                    )),
                              ],
                              4
                            ),
                            Object(i["h"])(
                              "li",
                              {
                                class: "lists  list-mobile-view",
                                style: Ai.timelineLink,
                                ref: "timeline",
                                onClick:
                                  t[43] ||
                                  (t[43] = (e) =>
                                    qi.handlePushRoutes("Timeline")),
                              },
                              [
                                Object(i["h"])(
                                  "span",
                                  {
                                    class: [
                                      "collapsed-nav-text ",
                                      qi.handleTextHover("Timeline"),
                                    ],
                                  },
                                  "Timeline ",
                                  2
                                ),
                                Object(i["h"])(
                                  xi,
                                  {
                                    icon: ["fas", "user-clock"],
                                    ref: "timelineIcon",
                                  },
                                  null,
                                  512
                                ),
                              ],
                              4
                            ),
                            Object(i["h"])(
                              "li",
                              {
                                class: "lists   list-mobile-view",
                                style: Ai.profileLink,
                                ref: "profile",
                                onClick:
                                  t[44] ||
                                  (t[44] = (e) =>
                                    qi.handlePushRoutes("userProfile")),
                              },
                              [
                                Object(i["h"])(
                                  "span",
                                  {
                                    class: [
                                      "collapsed-nav-text nav-profile ",
                                      qi.handleTextHover("userProfile"),
                                    ],
                                  },
                                  "Profile ",
                                  2
                                ),
                                Object(i["h"])(
                                  xi,
                                  { icon: ["fas", "user"], ref: "profileIcon" },
                                  null,
                                  512
                                ),
                              ],
                              4
                            ),
                            Object(i["h"])(
                              "li",
                              {
                                class: "lists list-mobile-view",
                                style: Ai.messageLink,
                                ref: "messages",
                                onClick:
                                  t[45] ||
                                  (t[45] = (e) =>
                                    qi.handlePushRoutes("Messages")),
                              },
                              [
                                Object(i["h"])(
                                  "span",
                                  {
                                    class: [
                                      "collapsed-nav-text ",
                                      qi.handleTextHover("Messages"),
                                    ],
                                  },
                                  " Messages ",
                                  2
                                ),
                                Object(i["h"])(
                                  xi,
                                  {
                                    icon: ["fas", "envelope"],
                                    ref: "messageIcon",
                                  },
                                  null,
                                  512
                                ),
                                !Ai.newMessageCount
                                  ? Object(i["e"])("", !0)
                                  : (Object(i["q"])(),
                                    Object(i["d"])(
                                      "span",
                                      zt,
                                      Object(i["z"])(Ai.newMessageCount),
                                      1
                                    )),
                              ],
                              4
                            ),
                            Object(i["h"])(
                              "li",
                              {
                                class: "lists  collapsed-nav-notification",
                                ref: "notifications",
                                onClick:
                                  t[47] ||
                                  (t[47] = (e) =>
                                    qi.handleNotifications("notifications")),
                              },
                              [
                                Object(i["h"])(
                                  "span",
                                  {
                                    onClick:
                                      t[46] ||
                                      (t[46] = (e) =>
                                        qi.handleNotifications(
                                          "notifications"
                                        )),
                                    class:
                                      "collapsed-nav-text  nav-notification-hover",
                                  },
                                  " Notifications "
                                ),
                                Object(i["h"])(
                                  xi,
                                  {
                                    icon: ["fas", "bell"],
                                    ref: "notificationIcon",
                                  },
                                  null,
                                  512
                                ),
                                !Ai.notificationCount
                                  ? Object(i["e"])("", !0)
                                  : (Object(i["q"])(),
                                    Object(i["d"])(
                                      "span",
                                      Vt,
                                      Object(i["z"])(Ai.notificationCount),
                                      1
                                    )),
                                Object(i["h"])(
                                  "div",
                                  Bt,
                                  [
                                    Object(i["h"])(xi, {
                                      icon: ["fas", "sort-up"],
                                      class: "pointer-part",
                                    }),
                                    (Object(i["q"])(!0),
                                    Object(i["d"])(
                                      i["a"],
                                      null,
                                      Object(i["w"])(
                                        Ai.notifications,
                                        (e) => (
                                          Object(i["q"])(),
                                          Object(i["d"])("ul", null, [
                                            "post" === e.notificationType &&
                                            "unRead" === e.notificationStatus
                                              ? (Object(i["q"])(),
                                                Object(i["d"])(
                                                  "li",
                                                  {
                                                    key: 0,
                                                    ref: "lists",
                                                    onClick: (t) =>
                                                      qi.showNotificationDetails(
                                                        "post",
                                                        e.notificationId,
                                                        e.userName
                                                      ),
                                                  },
                                                  [
                                                    Gt,
                                                    Object(i["h"])(
                                                      "span",
                                                      _t,
                                                      Object(i["z"])(
                                                        e.userName
                                                      ),
                                                      1
                                                    ),
                                                    Object(i["g"])(
                                                      " just made a new " +
                                                        Object(i["z"])(
                                                          e.notificationType
                                                        ) +
                                                        " ",
                                                      1
                                                    ),
                                                    Object(i["h"])(
                                                      xi,
                                                      {
                                                        icon: [
                                                          "fas",
                                                          "newspaper",
                                                        ],
                                                        ref: "newsFeedIcon",
                                                      },
                                                      null,
                                                      512
                                                    ),
                                                    Jt,
                                                    Object(i["h"])(
                                                      "span",
                                                      null,
                                                      Object(i["z"])(
                                                        qi.showDate(
                                                          e.notificationDate
                                                        )
                                                      ),
                                                      1
                                                    ),
                                                    Ht,
                                                  ],
                                                  8,
                                                  ["onClick"]
                                                ))
                                              : Object(i["e"])("", !0),
                                            "friend request" ===
                                              e.notificationType &&
                                            "unRead" === e.notificationStatus
                                              ? (Object(i["q"])(),
                                                Object(i["d"])(
                                                  "li",
                                                  {
                                                    key: 1,
                                                    ref: "lists",
                                                    onClick: (t) =>
                                                      qi.showNotificationDetails(
                                                        "friend request",
                                                        e.notificationId,
                                                        e.userName
                                                      ),
                                                  },
                                                  [
                                                    Object(i["h"])(
                                                      "span",
                                                      Yt,
                                                      Object(i["z"])(
                                                        e.userName
                                                      ),
                                                      1
                                                    ),
                                                    Object(i["g"])(
                                                      " sent you a " +
                                                        Object(i["z"])(
                                                          e.notificationType
                                                        ) +
                                                        " ",
                                                      1
                                                    ),
                                                    Object(i["h"])(xi, {
                                                      class: "ml-2",
                                                      icon: [
                                                        "fas",
                                                        "user-friends",
                                                      ],
                                                    }),
                                                    Zt,
                                                    Wt,
                                                    Object(i["h"])(
                                                      "span",
                                                      null,
                                                      Object(i["z"])(
                                                        qi.showDate(
                                                          e.notificationDate
                                                        )
                                                      ),
                                                      1
                                                    ),
                                                    Kt,
                                                  ],
                                                  8,
                                                  ["onClick"]
                                                ))
                                              : Object(i["e"])("", !0),
                                            "Accepted Friend Request" ===
                                              e.notificationType &&
                                            "unRead" === e.notificationStatus
                                              ? (Object(i["q"])(),
                                                Object(i["d"])(
                                                  "li",
                                                  {
                                                    key: 2,
                                                    ref: "lists",
                                                    onClick: (t) =>
                                                      qi.showNotificationDetails(
                                                        "Accepted Friend Request",
                                                        e.notificationId,
                                                        e.userName
                                                      ),
                                                  },
                                                  [
                                                    Object(i["h"])(
                                                      "span",
                                                      Qt,
                                                      Object(i["z"])(
                                                        e.userName
                                                      ),
                                                      1
                                                    ),
                                                    Xt,
                                                    Object(i["h"])(xi, {
                                                      class: "ml-2",
                                                      icon: [
                                                        "fas",
                                                        "user-friends",
                                                      ],
                                                    }),
                                                    ea,
                                                    ta,
                                                    Object(i["h"])(
                                                      "span",
                                                      null,
                                                      Object(i["z"])(
                                                        qi.showDate(
                                                          e.notificationDate
                                                        )
                                                      ),
                                                      1
                                                    ),
                                                    aa,
                                                  ],
                                                  8,
                                                  ["onClick"]
                                                ))
                                              : Object(i["e"])("", !0),
                                            "message" === e.notificationType &&
                                            "unRead" === e.notificationStatus
                                              ? (Object(i["q"])(),
                                                Object(i["d"])(
                                                  "li",
                                                  {
                                                    key: 3,
                                                    ref: "lists",
                                                    onClick: (t) =>
                                                      qi.showNotificationDetails(
                                                        "message",
                                                        e.notificationId,
                                                        e.userName
                                                      ),
                                                  },
                                                  [
                                                    Object(i["g"])(
                                                      " You have a new " +
                                                        Object(i["z"])(
                                                          e.notificationType
                                                        ) +
                                                        " from ",
                                                      1
                                                    ),
                                                    Object(i["h"])("span", ia, [
                                                      Object(i["g"])(
                                                        Object(i["z"])(
                                                          e.userName
                                                        ) + " ",
                                                        1
                                                      ),
                                                      Object(i["h"])(xi, {
                                                        class: "ml-2",
                                                        icon: [
                                                          "fas",
                                                          "envelope",
                                                        ],
                                                      }),
                                                    ]),
                                                    sa,
                                                    oa,
                                                    Object(i["h"])(
                                                      "span",
                                                      null,
                                                      Object(i["z"])(
                                                        qi.showDate(
                                                          e.notificationDate
                                                        )
                                                      ),
                                                      1
                                                    ),
                                                    na,
                                                  ],
                                                  8,
                                                  ["onClick"]
                                                ))
                                              : Object(i["e"])("", !0),
                                            "likes" === e.notificationType &&
                                            "unRead" === e.notificationStatus &&
                                            e.posterUserName ===
                                              Ai.userData.userName
                                              ? (Object(i["q"])(),
                                                Object(i["d"])(
                                                  "li",
                                                  {
                                                    key: 4,
                                                    ref: "lists",
                                                    onClick: (t) =>
                                                      qi.showNotificationDetails(
                                                        "likes",
                                                        e.notificationId,
                                                        e.posterUserName
                                                      ),
                                                  },
                                                  [
                                                    Object(i["h"])(
                                                      "span",
                                                      ca,
                                                      Object(i["z"])(
                                                        e.userName
                                                      ),
                                                      1
                                                    ),
                                                    da,
                                                    Object(i["h"])(xi, {
                                                      icon: [
                                                        "fas",
                                                        "thumbs-up",
                                                      ],
                                                    }),
                                                    ra,
                                                    Object(i["h"])(
                                                      "span",
                                                      null,
                                                      Object(i["z"])(
                                                        qi.showDate(
                                                          e.notificationDate
                                                        )
                                                      ),
                                                      1
                                                    ),
                                                    ba,
                                                  ],
                                                  8,
                                                  ["onClick"]
                                                ))
                                              : Object(i["e"])("", !0),
                                            "likes" === e.notificationType &&
                                            "unRead" === e.notificationStatus &&
                                            e.userName !== e.posterUserName &&
                                            e.posterUserName !==
                                              Ai.userData.userName
                                              ? (Object(i["q"])(),
                                                Object(i["d"])(
                                                  "li",
                                                  {
                                                    key: 5,
                                                    ref: "lists",
                                                    onClick: (t) =>
                                                      qi.showNotificationDetails(
                                                        "likes",
                                                        e.notificationId,
                                                        e.userName,
                                                        e.posterUserName
                                                      ),
                                                  },
                                                  [
                                                    fa,
                                                    Object(i["h"])(
                                                      "span",
                                                      la,
                                                      Object(i["z"])(
                                                        e.userName
                                                      ),
                                                      1
                                                    ),
                                                    ua,
                                                    Object(i["h"])(
                                                      "span",
                                                      ma,
                                                      Object(i["z"])(
                                                        e.posterUserName
                                                      ),
                                                      1
                                                    ),
                                                    ha,
                                                    Object(i["h"])(xi, {
                                                      icon: [
                                                        "fas",
                                                        "thumbs-up",
                                                      ],
                                                    }),
                                                    pa,
                                                    Object(i["h"])(
                                                      "span",
                                                      null,
                                                      Object(i["z"])(
                                                        qi.showDate(
                                                          e.notificationDate
                                                        )
                                                      ),
                                                      1
                                                    ),
                                                    Na,
                                                  ],
                                                  8,
                                                  ["onClick"]
                                                ))
                                              : Object(i["e"])("", !0),
                                            "likes" === e.notificationType &&
                                            "unRead" === e.notificationStatus &&
                                            e.userName === e.posterUserName &&
                                            e.posterUserName !==
                                              Ai.userData.userName
                                              ? (Object(i["q"])(),
                                                Object(i["d"])(
                                                  "li",
                                                  {
                                                    key: 6,
                                                    ref: "lists",
                                                    onClick: (t) =>
                                                      qi.showNotificationDetails(
                                                        "likes",
                                                        e.notificationId,
                                                        e.userName,
                                                        e.posterUserName
                                                      ),
                                                  },
                                                  [
                                                    ya,
                                                    Object(i["h"])(
                                                      "span",
                                                      va,
                                                      Object(i["z"])(
                                                        e.userName
                                                      ),
                                                      1
                                                    ),
                                                    Oa,
                                                    Object(i["h"])(
                                                      "span",
                                                      ja,
                                                      Object(i["z"])(
                                                        qi.handleGender(
                                                          e.userName
                                                        )
                                                      ),
                                                      1
                                                    ),
                                                    ga,
                                                    Object(i["h"])(xi, {
                                                      icon: [
                                                        "fas",
                                                        "thumbs-up",
                                                      ],
                                                    }),
                                                    ka,
                                                    Ia,
                                                    Object(i["h"])(
                                                      "span",
                                                      null,
                                                      Object(i["z"])(
                                                        qi.showDate(
                                                          e.notificationDate
                                                        )
                                                      ),
                                                      1
                                                    ),
                                                    Da,
                                                  ],
                                                  8,
                                                  ["onClick"]
                                                ))
                                              : Object(i["e"])("", !0),
                                            "likedComment" ===
                                              e.notificationType &&
                                            "unRead" === e.notificationStatus &&
                                            e.commenterUserName ===
                                              Ai.userData.userName &&
                                            e.posterUserName !==
                                              Ai.userData.userName &&
                                            e.posterUserName !== e.userName &&
                                            e.commenterUserName !== e.userName
                                              ? (Object(i["q"])(),
                                                Object(i["d"])(
                                                  "li",
                                                  {
                                                    key: 7,
                                                    ref: "lists",
                                                    onClick: (t) =>
                                                      qi.showNotificationDetails(
                                                        "likedComment",
                                                        e.notificationId,
                                                        e.userName
                                                      ),
                                                  },
                                                  [
                                                    Object(i["h"])(
                                                      "span",
                                                      Sa,
                                                      Object(i["z"])(
                                                        e.userName
                                                      ),
                                                      1
                                                    ),
                                                    Ua,
                                                    Object(i["h"])(
                                                      "span",
                                                      Ca,
                                                      Object(i["z"])(
                                                        e.posterUserName
                                                      ),
                                                      1
                                                    ),
                                                    wa,
                                                    Object(i["h"])(xi, {
                                                      icon: [
                                                        "fas",
                                                        "thumbs-up",
                                                      ],
                                                    }),
                                                    Ra,
                                                    Object(i["h"])(
                                                      "span",
                                                      null,
                                                      Object(i["z"])(
                                                        qi.showDate(
                                                          e.notificationDate
                                                        )
                                                      ),
                                                      1
                                                    ),
                                                    La,
                                                  ],
                                                  8,
                                                  ["onClick"]
                                                ))
                                              : Object(i["e"])("", !0),
                                            "likedComment" ===
                                              e.notificationType &&
                                            "unRead" === e.notificationStatus &&
                                            e.commenterUserName ===
                                              e.userName &&
                                            e.userName !==
                                              Ai.userData.userName &&
                                            e.posterUserName !== e.userName
                                              ? (Object(i["q"])(),
                                                Object(i["d"])(
                                                  "li",
                                                  {
                                                    key: 8,
                                                    ref: "lists",
                                                    onClick: (t) =>
                                                      qi.showNotificationDetails(
                                                        "likedComment",
                                                        e.notificationId,
                                                        e.userName
                                                      ),
                                                  },
                                                  [
                                                    Object(i["h"])(
                                                      "span",
                                                      Ta,
                                                      Object(i["z"])(
                                                        e.userName
                                                      ),
                                                      1
                                                    ),
                                                    Object(i["g"])(
                                                      " likes " +
                                                        Object(i["z"])(
                                                          qi.handleGender(
                                                            e.userName
                                                          )
                                                        ) +
                                                        " comment on ",
                                                      1
                                                    ),
                                                    Object(i["h"])(
                                                      "span",
                                                      Aa,
                                                      Object(i["z"])(
                                                        e.posterUserName
                                                      ),
                                                      1
                                                    ),
                                                    qa,
                                                    Object(i["h"])(xi, {
                                                      icon: [
                                                        "fas",
                                                        "thumbs-up",
                                                      ],
                                                    }),
                                                    xa,
                                                    Object(i["h"])(
                                                      "span",
                                                      null,
                                                      Object(i["z"])(
                                                        qi.showDate(
                                                          e.notificationDate
                                                        )
                                                      ),
                                                      1
                                                    ),
                                                    Fa,
                                                  ],
                                                  8,
                                                  ["onClick"]
                                                ))
                                              : Object(i["e"])("", !0),
                                            "likedComment" ===
                                              e.notificationType &&
                                            "unRead" === e.notificationStatus &&
                                            e.commenterUserName ===
                                              Ai.userData.userName &&
                                            e.posterUserName ===
                                              Ai.userData.userName &&
                                            e.posterUserName !== e.userName
                                              ? (Object(i["q"])(),
                                                Object(i["d"])(
                                                  "li",
                                                  {
                                                    key: 9,
                                                    ref: "lists",
                                                    onClick: (t) =>
                                                      qi.showNotificationDetails(
                                                        "likedComment",
                                                        e.notificationId,
                                                        e.userName
                                                      ),
                                                  },
                                                  [
                                                    Object(i["h"])(
                                                      "span",
                                                      Ma,
                                                      Object(i["z"])(
                                                        e.userName
                                                      ),
                                                      1
                                                    ),
                                                    Pa,
                                                    Object(i["h"])(xi, {
                                                      icon: [
                                                        "fas",
                                                        "thumbs-up",
                                                      ],
                                                    }),
                                                    Ea,
                                                    $a,
                                                    Object(i["h"])(
                                                      "span",
                                                      null,
                                                      Object(i["z"])(
                                                        qi.showDate(
                                                          e.notificationDate
                                                        )
                                                      ),
                                                      1
                                                    ),
                                                    za,
                                                  ],
                                                  8,
                                                  ["onClick"]
                                                ))
                                              : Object(i["e"])("", !0),
                                            "likedComment" ===
                                              e.notificationType &&
                                            "unRead" === e.notificationStatus &&
                                            e.commenterUserName !==
                                              Ai.userData.userName &&
                                            e.posterUserName ===
                                              Ai.userData.userName &&
                                            e.posterUserName !== e.userName
                                              ? (Object(i["q"])(),
                                                Object(i["d"])(
                                                  "li",
                                                  {
                                                    key: 10,
                                                    ref: "lists",
                                                    onClick: (t) =>
                                                      qi.showNotificationDetails(
                                                        "likedComment",
                                                        e.notificationId,
                                                        e.userName
                                                      ),
                                                  },
                                                  [
                                                    Object(i["h"])(
                                                      "span",
                                                      Va,
                                                      Object(i["z"])(
                                                        e.userName
                                                      ),
                                                      1
                                                    ),
                                                    Object(i["g"])(
                                                      " likes " +
                                                        Object(i["z"])(
                                                          e.commenterUserName
                                                        ) +
                                                        " comment on Your post ",
                                                      1
                                                    ),
                                                    Object(i["h"])(xi, {
                                                      icon: [
                                                        "fas",
                                                        "thumbs-up",
                                                      ],
                                                    }),
                                                    Ba,
                                                    Ga,
                                                    Object(i["h"])(
                                                      "span",
                                                      null,
                                                      Object(i["z"])(
                                                        qi.showDate(
                                                          e.notificationDate
                                                        )
                                                      ),
                                                      1
                                                    ),
                                                    _a,
                                                  ],
                                                  8,
                                                  ["onClick"]
                                                ))
                                              : Object(i["e"])("", !0),
                                            "likedComment" ===
                                              e.notificationType &&
                                            "unRead" === e.notificationStatus &&
                                            e.commenterUserName ===
                                              e.userName &&
                                            e.posterUserName !==
                                              Ai.userData.userName &&
                                            e.posterUserName === e.userName
                                              ? (Object(i["q"])(),
                                                Object(i["d"])(
                                                  "li",
                                                  {
                                                    key: 11,
                                                    ref: "lists",
                                                    onClick: (t) =>
                                                      qi.showNotificationDetails(
                                                        "likedComment",
                                                        e.notificationId,
                                                        e.userName
                                                      ),
                                                  },
                                                  [
                                                    Object(i["h"])(
                                                      "span",
                                                      Ja,
                                                      Object(i["z"])(
                                                        e.userName
                                                      ),
                                                      1
                                                    ),
                                                    Object(i["g"])(
                                                      " likes " +
                                                        Object(i["z"])(
                                                          qi.handleGender(
                                                            e.userName
                                                          )
                                                        ) +
                                                        " comment on " +
                                                        Object(i["z"])(
                                                          qi.handleGender(
                                                            e.userName
                                                          )
                                                        ) +
                                                        " post ",
                                                      1
                                                    ),
                                                    Object(i["h"])(xi, {
                                                      icon: [
                                                        "fas",
                                                        "thumbs-up",
                                                      ],
                                                    }),
                                                    Ha,
                                                    Ya,
                                                    Object(i["h"])(
                                                      "span",
                                                      null,
                                                      Object(i["z"])(
                                                        qi.showDate(
                                                          e.notificationDate
                                                        )
                                                      ),
                                                      1
                                                    ),
                                                    Za,
                                                  ],
                                                  8,
                                                  ["onClick"]
                                                ))
                                              : Object(i["e"])("", !0),
                                            "comment" === e.notificationType &&
                                            "unRead" === e.notificationStatus &&
                                            e.posterUserName ===
                                              Ai.userData.userName &&
                                            e.userName !== Ai.userData.userName
                                              ? (Object(i["q"])(),
                                                Object(i["d"])(
                                                  "li",
                                                  {
                                                    key: 12,
                                                    ref: "lists",
                                                    onClick: (t) =>
                                                      qi.showNotificationDetails(
                                                        "comment",
                                                        e.notificationId,
                                                        e.userName
                                                      ),
                                                  },
                                                  [
                                                    Object(i["h"])(
                                                      "span",
                                                      Wa,
                                                      Object(i["z"])(
                                                        e.userName
                                                      ),
                                                      1
                                                    ),
                                                    Ka,
                                                    Qa,
                                                    Object(i["h"])(
                                                      "span",
                                                      null,
                                                      Object(i["z"])(
                                                        qi.showDate(
                                                          e.notificationDate
                                                        )
                                                      ),
                                                      1
                                                    ),
                                                    Xa,
                                                  ],
                                                  8,
                                                  ["onClick"]
                                                ))
                                              : Object(i["e"])("", !0),
                                            "comment" === e.notificationType &&
                                            "unRead" === e.notificationStatus &&
                                            e.userName !==
                                              Ai.userData.userName &&
                                            e.userName !== e.posterUserName &&
                                            Ai.userData.userName !==
                                              e.posterUserName
                                              ? (Object(i["q"])(),
                                                Object(i["d"])(
                                                  "li",
                                                  {
                                                    key: 13,
                                                    ref: "lists",
                                                    onClick: (t) =>
                                                      qi.showNotificationDetails(
                                                        "comment",
                                                        e.notificationId,
                                                        e.userName,
                                                        e.posterUserName
                                                      ),
                                                  },
                                                  [
                                                    ei,
                                                    Object(i["h"])(
                                                      "span",
                                                      ti,
                                                      Object(i["z"])(
                                                        e.userName
                                                      ),
                                                      1
                                                    ),
                                                    ai,
                                                    Object(i["h"])(
                                                      "span",
                                                      ii,
                                                      Object(i["z"])(
                                                        e.posterUserName
                                                      ),
                                                      1
                                                    ),
                                                    si,
                                                    oi,
                                                    Object(i["h"])(
                                                      "span",
                                                      null,
                                                      Object(i["z"])(
                                                        qi.showDate(
                                                          e.notificationDate
                                                        )
                                                      ),
                                                      1
                                                    ),
                                                    ni,
                                                  ],
                                                  8,
                                                  ["onClick"]
                                                ))
                                              : Object(i["e"])("", !0),
                                            "comment" === e.notificationType &&
                                            "unRead" === e.notificationStatus &&
                                            e.userName !==
                                              Ai.userData.userName &&
                                            e.userName === e.posterUserName
                                              ? (Object(i["q"])(),
                                                Object(i["d"])(
                                                  "li",
                                                  {
                                                    key: 14,
                                                    ref: "lists",
                                                    onClick: (t) =>
                                                      qi.showNotificationDetails(
                                                        "comment",
                                                        e.notificationId,
                                                        e.userName,
                                                        e.posterUserName
                                                      ),
                                                  },
                                                  [
                                                    ci,
                                                    Object(i["h"])(
                                                      "span",
                                                      di,
                                                      Object(i["z"])(
                                                        e.userName
                                                      ),
                                                      1
                                                    ),
                                                    Object(i["g"])(
                                                      " commented on " +
                                                        Object(i["z"])(
                                                          qi.handleGender(
                                                            e.userName
                                                          )
                                                        ) +
                                                        " post ",
                                                      1
                                                    ),
                                                    ri,
                                                    Object(i["h"])(
                                                      "span",
                                                      null,
                                                      Object(i["z"])(
                                                        qi.showDate(
                                                          e.notificationDate
                                                        )
                                                      ),
                                                      1
                                                    ),
                                                    bi,
                                                  ],
                                                  8,
                                                  ["onClick"]
                                                ))
                                              : Object(i["e"])("", !0),
                                            "follow" === e.notificationType &&
                                            "unRead" === e.notificationStatus &&
                                            e.userName !== Ai.userData.userName
                                              ? (Object(i["q"])(),
                                                Object(i["d"])(
                                                  "li",
                                                  {
                                                    key: 15,
                                                    ref: "lists",
                                                    onClick: (t) =>
                                                      qi.showNotificationDetails(
                                                        "follow",
                                                        e.notificationId,
                                                        e.userName
                                                      ),
                                                  },
                                                  [
                                                    Object(i["h"])(
                                                      "span",
                                                      fi,
                                                      Object(i["z"])(
                                                        e.userName
                                                      ),
                                                      1
                                                    ),
                                                    li,
                                                    Object(i["h"])(xi, {
                                                      class: "ml-2",
                                                      icon: ["fas", "users"],
                                                    }),
                                                    ui,
                                                    Object(i["h"])(
                                                      "span",
                                                      null,
                                                      Object(i["z"])(
                                                        qi.showDate(
                                                          e.notificationDate
                                                        )
                                                      ),
                                                      1
                                                    ),
                                                    mi,
                                                  ],
                                                  8,
                                                  ["onClick"]
                                                ))
                                              : Object(i["e"])("", !0),
                                          ])
                                        )
                                      ),
                                      256
                                    )),
                                    Ai.notificationCount
                                      ? Object(i["e"])("", !0)
                                      : (Object(i["q"])(),
                                        Object(i["d"])(
                                          "span",
                                          hi,
                                          "You have no new Notification"
                                        )),
                                  ],
                                  512
                                ),
                              ],
                              512
                            ),
                          ]),
                        ]))
                      : Object(i["e"])("", !0),
                    Object(i["h"])("div", pi, [
                      Object(i["h"])(
                        "span",
                        {
                          ref: "userImage",
                          class: "userImage",
                          onClick:
                            t[54] ||
                            (t[54] = (...e) =>
                              qi.handleUserOwnMenu &&
                              qi.handleUserOwnMenu(...e)),
                        },
                        [
                          Object(i["h"])(
                            "img",
                            { src: Ai.userData.userProfileImage, alt: "" },
                            null,
                            8,
                            ["src"]
                          ),
                          Ni,
                          Object(i["h"])(
                            "span",
                            yi,
                            Object(i["z"])(Ai.userData.userName),
                            1
                          ),
                          Ai.dropIconDisplay
                            ? (Object(i["q"])(),
                              Object(i["d"])(
                                xi,
                                {
                                  key: 0,
                                  icon: ["fas", "sort-down"],
                                  ref: "sortDown",
                                },
                                null,
                                512
                              ))
                            : Object(i["e"])("", !0),
                          Ai.dropIconDisplay
                            ? Object(i["e"])("", !0)
                            : (Object(i["q"])(),
                              Object(i["d"])(
                                xi,
                                {
                                  key: 1,
                                  icon: ["fas", "sort-up"],
                                  ref: "sortUp",
                                },
                                null,
                                512
                              )),
                          Object(i["h"])(
                            "div",
                            {
                              class: "dropdown-OwnMenu",
                              style: Ai.userOwnMenuStyle,
                            },
                            [
                              Object(i["h"])(xi, {
                                icon: ["fas", "sort-up"],
                                class: "pointer-part",
                              }),
                              Object(i["h"])("ul", null, [
                                Object(i["h"])(
                                  "li",
                                  {
                                    onClick:
                                      t[48] ||
                                      (t[48] = (...e) =>
                                        qi.showFriends && qi.showFriends(...e)),
                                  },
                                  "Your Friends"
                                ),
                                Object(i["h"])(
                                  "li",
                                  {
                                    onClick:
                                      t[49] ||
                                      (t[49] = (...e) =>
                                        qi.showFriends && qi.showFriends(...e)),
                                  },
                                  "Your Followers"
                                ),
                                Object(i["h"])(
                                  "li",
                                  {
                                    onClick:
                                      t[50] ||
                                      (t[50] = (...e) =>
                                        qi.showFriends && qi.showFriends(...e)),
                                  },
                                  " Following"
                                ),
                                Object(i["h"])(
                                  "li",
                                  { onClick: (e) => "chats" },
                                  "Chats"
                                ),
                                Object(i["h"])(
                                  "li",
                                  {
                                    class: " own-profile",
                                    ref: "profile",
                                    onClick:
                                      t[51] ||
                                      (t[51] = (e) =>
                                        qi.handlePushRoutes("userProfile")),
                                  },
                                  [
                                    vi,
                                    Object(i["h"])(
                                      xi,
                                      {
                                        icon: ["fas", "user"],
                                        ref: "profileIcon",
                                      },
                                      null,
                                      512
                                    ),
                                  ],
                                  512
                                ),
                                Object(i["h"])("li", Oi, [
                                  Ai.logout
                                    ? (Object(i["q"])(),
                                      Object(i["d"])(
                                        "button",
                                        {
                                          key: 0,
                                          onClick:
                                            t[52] ||
                                            (t[52] = (e) => qi.handleLogin("")),
                                          class: "btn btn-danger ",
                                        },
                                        [
                                          ji,
                                          Object(i["h"])(xi, {
                                            icon: ["fas", "sign-out-alt"],
                                          }),
                                        ]
                                      ))
                                    : Object(i["e"])("", !0),
                                  qi.updateUserData
                                    ? (Object(i["q"])(),
                                      Object(i["d"])(
                                        "button",
                                        {
                                          key: 1,
                                          onClick:
                                            t[53] ||
                                            (t[53] = (e) =>
                                              qi.handleLogin("login")),
                                          class: "btn btn-success ",
                                        },
                                        [
                                          gi,
                                          Object(i["h"])(xi, {
                                            icon: ["fas", "sign-in-alt"],
                                          }),
                                        ]
                                      ))
                                    : Object(i["e"])("", !0),
                                ]),
                              ]),
                            ],
                            4
                          ),
                        ],
                        512
                      ),
                    ]),
                  ],
                  4
                ))
              : Object(i["e"])("", !0),
            Ai.restrictGuest
              ? (Object(i["q"])(),
                Object(i["d"])(
                  "div",
                  {
                    key: 2,
                    class: "restrict-Guest",
                    onClick:
                      t[57] ||
                      (t[57] = (...e) =>
                        qi.closeRestrictMessage &&
                        qi.closeRestrictMessage(...e)),
                  },
                  [
                    Object(i["h"])("div", ki, [
                      Object(i["h"])(
                        "div",
                        {
                          class: "close-restrict-message ",
                          onClick:
                            t[55] ||
                            (t[55] = (...e) =>
                              qi.closeRestrictMessage &&
                              qi.closeRestrictMessage(...e)),
                        },
                        [
                          Object(i["h"])(xi, {
                            icon: ["fas", "times-circle"],
                            class: "color-danger",
                          }),
                        ]
                      ),
                      Object(i["h"])("span", Ii, [
                        Di,
                        Si,
                        Ui,
                        Ci,
                        Object(i["h"])(
                          "span",
                          {
                            class: "signin-button btn btn-success h-1 mb-1",
                            onClick:
                              t[56] || (t[56] = (e) => qi.handleLogin("login")),
                          },
                          [
                            wi,
                            Object(i["h"])(xi, {
                              icon: ["fas", "sign-in-alt"],
                            }),
                          ]
                        ),
                      ]),
                    ]),
                  ]
                ))
              : Object(i["e"])("", !0),
            Object(i["h"])(Fi),
            Object(i["h"])(Mi),
            Object(i["h"])("audio", Ri, [
              Object(i["h"])(
                "source",
                { src: a("c516"), type: "audio/mp3" },
                null,
                8,
                ["src"]
              ),
              Object(i["h"])(
                "source",
                { src: a("67e5"), type: "audio/ogg" },
                null,
                8,
                ["src"]
              ),
            ]),
            qi.handleFooterDisplay()
              ? (Object(i["q"])(), Object(i["d"])(Pi, { key: 3 }))
              : Object(i["e"])("", !0),
          ],
          64
        )
      );
    }
    var Ti = a("c1df"),
      Ai = a.n(Ti);
    function qi(e, t, a, i, s, o) {
      return null;
    }
    var xi = a("9612"),
      Fi = {
        name: "AutoUsers",
        data() {
          return { newUser: this.$store.state.displayFunctions.newAccount };
        },
        watch: { newUser: { handler(e) {}, deep: !0 } },
        methods: {},
        computed: {},
      },
      Mi = a("d959"),
      Pi = a.n(Mi);
    const Ei = Pi()(Fi, [["render", qi]]);
    var $i = Ei;
    const zi = { class: "footer-dark" },
      Vi = { class: "container" },
      Bi = { class: "row" },
      Gi = Object(i["f"])(
        '<div class="col-sm-6 col-md-3 item"><h3>About</h3><ul><li><a href="https://www.linkedin.com/in/uche-okoroafor-a9286b19b" target="_blank">About Us</a></li><li><a href="https://www.linkedin.com/in/uche-okoroafor-a9286b19b" target="_blank">Contact Us</a></li><li><a href="#">Help</a></li></ul></div><div class="col-sm-6 col-md-3 item"><h3>Policies</h3><ul><li><a href="#">Terms &amp; Conditions</a></li><li><a href="#">Website Accessibility</a></li><li><a href="#">Privacy Policy</a></li></ul></div><div class="col-md-6 item text"><h3>SoMedia</h3><p>Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus ac sem lacus. Ut vehicula rhoncus elementum. Etiam quis tristique lectus. Aliquam in arcu eget velit pulvinar dictum vel in justo.</p></div>',
        3
      ),
      _i = { class: "col item social", ref: "footerOnScreen" },
      Ji = { href: "https://m.facebook.com/uche.okoroafor", target: "_blank" },
      Hi = { href: "https://github.com/uche-okoroafor", target: "_blank" },
      Yi = {
        href: "https://www.instagram.com/uche_okoroafor/",
        target: "_blank",
      },
      Zi = {
        href: "https://www.linkedin.com/in/uche-okoroafor-a9286b19b",
        target: "_blank",
      },
      Wi = Object(i["h"])(
        "p",
        { class: "copyright" },
        "SoMedia © 2021. All rights reserved",
        -1
      );
    function Ki(e, t, a, s, o, n) {
      const c = Object(i["x"])("font-awesome-icon");
      return (
        Object(i["q"])(),
        Object(i["d"])("body", null, [
          Object(i["h"])("div", zi, [
            Object(i["h"])("footer", null, [
              Object(i["h"])("div", Vi, [
                Object(i["h"])("div", Bi, [
                  Gi,
                  Object(i["h"])(
                    "div",
                    _i,
                    [
                      Object(i["h"])("a", Ji, [
                        Object(i["h"])(c, {
                          icon: { prefix: "fab", iconName: "facebook-f" },
                        }),
                      ]),
                      Object(i["h"])(
                        "a",
                        {
                          href: "https://twitter.com/Uchman101",
                          target: "_blank",
                          style: n.updateStore,
                        },
                        [
                          Object(i["h"])(c, {
                            icon: { prefix: "fab", iconName: "twitter" },
                          }),
                        ],
                        4
                      ),
                      Object(i["h"])("a", Hi, [
                        Object(i["h"])(c, {
                          icon: { prefix: "fab", iconName: "github" },
                        }),
                      ]),
                      Object(i["h"])("a", Yi, [
                        Object(i["h"])(c, {
                          icon: { prefix: "fab", iconName: "instagram" },
                        }),
                      ]),
                      Object(i["h"])("a", Zi, [
                        Object(i["h"])(c, {
                          icon: { prefix: "fab", iconName: "linkedin-in" },
                        }),
                      ]),
                    ],
                    512
                  ),
                ]),
                Wi,
              ]),
            ]),
          ]),
        ])
      );
    }
    var Qi = {
      name: "Footer",
      data() {
        return { storeData: {} };
      },
      watch: {
        storeData: {
          handler(e) {
            this.$store.dispatch("handleUpdateLocalStorage", {
              params: "updateData",
            }),
              console.log("working");
          },
          deep: !0,
        },
      },
      mounted() {
        document.addEventListener("scroll", () => this.onScroll(this.$refs));
      },
      beforeUnmount() {
        document.removeEventListener("scroll", () => this.onScroll(this.$refs));
      },
      methods: {
        onScroll(e) {
          null !== e["footerOnScreen"] &&
            (this.isElementInViewport(e["footerOnScreen"])
              ? this.$store.dispatch("handleDisplayFunctions", {
                  footerOnScreen: !0,
                  params: "footerOnScreen",
                })
              : this.$store.dispatch("handleDisplayFunctions", {
                  footerOnScreen: !1,
                  params: "footerOnScreen",
                }));
        },
        isElementInViewport(e) {
          var t = e.getBoundingClientRect();
          return (
            t.top >= 0 &&
            t.left >= 0 &&
            t.bottom <=
              (window.innerHeight || document.documentElement.clientHeight) &&
            t.right <=
              (window.innerWidth || document.documentElement.clientWidth)
          );
        },
      },
      computed: {
        updateStore() {
          return (this.storeData = this.$store.state), "";
        },
      },
    };
    a("f4a4");
    const Xi = Pi()(Qi, [["render", Ki]]);
    var es = Xi,
      ts = {
        name: "App",
        components: { Footer: es, AutoUsers: $i },
        data() {
          return {
            userData: {},
            storeData: {},
            login: !0,
            logout: !1,
            userOwnMenu: !1,
            userOwnMenuFullNav: !1,
            userOwnMenuMobileView: !1,
            searchInput: "",
            dropIconDisplay: !0,
            friendsList: [],
            notifications: [],
            notificationCount: "",
            newMessageCount: 0,
            timelineCount: 0,
            homeLink:
              "background-color: var(--pink);color:var(--nave-blue)!important;font-weight: bolder;",
            profileLink: "",
            timelineLink: "",
            messageLink: "",
            newsFeedLink: "",
            notificationLink: "",
            activeLink:
              "background-color: var(--pink);color:var(--nave-blue)!important;font-weight: bolder;",
            inActiveLink: "background-color: var(--nave-blue);",
            backDrop: !1,
            searchBackDrop: !1,
            clickedMenu: "",
            allUsers: [],
            filteredSearchLists: [],
            displaySearchContents: !1,
            searchZIndex: "z-index:0",
            notificationBackDrop: !1,
            navStyle: "display:block",
            collapsedNav: "display:none",
            userOwnMenuStyle: "display:none;height:0;transition:all 1s",
            restrictGuest: !1,
            userIconMenu: !0,
            searchMobileView: !0,
            displayNavTwo: !0,
            menuContents: !1,
            menuBarBackDrop: !1,
            userIsActive: "",
            clickedLink: "Home",
            soundNum: 0,
            autoPostCounter: 0,
          };
        },
        beforeMount() {
          this.handleUserData();
        },
        mounted() {
          window.addEventListener("scroll", () => this.handleCollapseNav()),
            this.handleUserData(),
            window.addEventListener(
              "mousemove",
              () => (this.userIsActive = Date.now())
            );
        },
        beforeUnmount() {
          window.removeEventListener("scroll", () => this.handleCollapseNav()),
            this.handleUserData(),
            window.addEventListener(
              "mousemove",
              () => (this.userIsActive = Date.now())
            );
        },
        methods: {
          handleUserData() {
            this.handleActiveLink(
              this.$store.state.displayFunctions.activeLink
            ),
              void 0 === localStorage.state
                ? this.$store.dispatch("handleUpdateLocalStorage", {
                    params: "loadData",
                  })
                : this.$store.dispatch("handleUpdateLocalStorage", {
                    params: "retrieveData",
                  });
            const e = Date.now() - this.userIsActive,
              t = Math.round(e / 6e4);
            if (void 0 !== localStorage.userData) {
              let e = JSON.parse(localStorage.userData);
              e.userName &&
                t >= 5 &&
                (this.$store.dispatch("handleLogin", {
                  userName: e.userName,
                  status: "online",
                }),
                this.$store.dispatch("handleDisplayFunctions", {
                  loginPageUnmounted: !0,
                  params: "loginPageUnMount",
                }));
            } else {
              let e = { userName: "", loginTime: "" };
              (localStorage.userData = JSON.stringify(e)),
                this.$router.push({ name: "Login" }),
                this.handleActiveLink("Home");
            }
          },
          reset() {
            delete localStorage.state, delete localStorage.userData;
          },
          handleCollapseNav() {
            document.body.scrollTop > 80 ||
            document.documentElement.scrollTop > 80
              ? (this.$store.dispatch("handleDisplayFunctions", {
                  navCollapsed: !0,
                  params: "collapseNav",
                }),
                (this.navStyle = "display:none"),
                (this.collapsedNav = "display:flex"))
              : (this.$store.dispatch("handleDisplayFunctions", {
                  navCollapsed: !1,
                  params: "collapseNav",
                }),
                (this.navStyle = "display:block"),
                (this.collapsedNav = "display:none"));
          },
          showUserTimeline(e) {
            if ("Guest" === this.userData.userName)
              return (this.restrictGuest = !0);
            this.handleSearchBackDrop("close"),
              this.$router.push({
                name: "Timeline",
                params: { userName: e, Timeline: "Timeline" },
              });
          },
          handleLogin(e) {
            if (e)
              return (
                this.handleActiveLink("Home"),
                this.$router.push({ name: "Login" })
              );
            this.soundNum = 0;
            this.$store.dispatch("handleDisplayFunctions", {
              newAccount: !1,
              params: "newAccount",
            }),
              this.$router.push({ name: "Login" }),
              (this.login = !0),
              (this.logout = !1),
              this.$router.push({ name: "Login" }),
              this.handleActiveLink("Home"),
              setTimeout(() => {
                this.$store.dispatch("updateUserData", {
                  Guest: {
                    userName: "Guest",
                    emailAddress: "",
                    password: "",
                    emailAddress: "419",
                    firstName: "",
                    lastName: "",
                    age: "",
                    education: "",
                    gender: "",
                    videos: [],
                    photos: [],
                    address: "",
                    emailAddress: "",
                    postCode: "",
                    country: "",
                    city: "",
                    aboutMe: "",
                    messages: {},
                    messageStatus: {},
                    notifications: {},
                    occupation: "",
                    status: "online",
                    posts: [],
                    followers: [],
                    following: [],
                    friends: [],
                    activities: {},
                    postCode: "",
                  },
                });
              }, 100);
          },
          handleShowMenuContents() {
            (this.menuBarBackDrop = !0), (this.menuContents = !0);
          },
          handleMenuBarBackDropBackDrop() {
            (this.menuBarBackDrop = !1), (this.menuContents = !1);
          },
          handleSearchBackDrop(e) {
            return "open" === e
              ? (this.searchMobileView
                  ? (this.searchZIndex = "z-index:500")
                  : (this.searchZIndex = "z-index:500;display:inline"),
                (this.searchBackDrop = !0))
              : ((this.searchInput = ""),
                (this.displaySearchContents = !1),
                (this.filteredSearchList = []),
                (this.searchZIndex = "z-index:1"),
                (this.userIconMenu = !0),
                (this.searchMobileView = !0),
                (this.displayNavTwo = !0),
                (this.searchBackDrop = !1));
          },
          closeRestrictMessage() {
            this.restrictGuest = !1;
          },
          showSearchInput() {
            (this.searchZIndex = "display:inline;z-index:500"),
              (this.searchMobileView = !1),
              (this.searchBackDrop = !0),
              (this.userIconMenu = !1),
              (this.displayNavTwo = !1);
          },
          handleUserOwnMenu(e) {
            (this.clickedMenu = e),
              "userImageFullNav" === e
                ? (this.userOwnMenuFullNav
                    ? (this.$refs.userOwnMenuFullNav.style =
                        "display:none;height:0;transition:all 1s")
                    : (this.$refs.userOwnMenuFullNav.style =
                        "display:flex;height:auto;transition:all 1s"),
                  (this.dropIconDisplay = !this.dropIconDisplay),
                  (this.userOwnMenuFullNav = !this.userOwnMenuFullNav))
                : "userImageMobileView" === e &&
                  null !== this.$refs.userOwnMenuMobileView
                ? (this.userOwnMenuMobileView
                    ? (this.$refs.userOwnMenuMobileView.style =
                        "display:none;height:0;transition:all 1s")
                    : (this.$refs.userOwnMenuMobileView.style =
                        "display:flex;height:auto;transition:all 1s"),
                  (this.dropIconDisplay = !this.dropIconDisplay),
                  (this.userOwnMenuMobileView = !this.userOwnMenuMobileView))
                : (this.userOwnMenu
                    ? (this.userOwnMenuStyle =
                        "display:none;height:0;transition:all 1s")
                    : (this.userOwnMenuStyle =
                        "display:flex;height:auto;transition:all 1s"),
                  (this.dropIconDisplay = !this.dropIconDisplay),
                  (this.userOwnMenu = !this.userOwnMenu)),
              (this.backDrop = !this.backDrop);
          },
          handleActiveLink(e) {
            switch (e) {
              case "Home":
                (this.homeLink = this.activeLink),
                  (this.profileLink = this.inActiveLink),
                  (this.timelineLink = this.inActiveLink),
                  (this.messageLink = this.inActiveLink),
                  (this.newsFeedLink = this.inActiveLink),
                  (this.notificationLink = this.inActiveLink),
                  this.$store.dispatch("handleDisplayFunctions", {
                    activeLink: "Home",
                    params: "activeLink",
                  });
                break;
              case "userProfile":
                if ("Guest" === this.userData.userName)
                  return (this.restrictGuest = !0);
                (this.homeLink = this.inActiveLink),
                  (this.profileLink = this.activeLink),
                  (this.timelineLink = this.inActiveLink),
                  (this.messageLink = this.inActiveLink),
                  (this.newsFeedLink = this.inActiveLink),
                  (this.notificationLink = this.inActiveLink);
                break;
              case "Messages":
                if ("Guest" === this.userData.userName)
                  return (this.restrictGuest = !0);
                (this.homeLink = this.inActiveLink),
                  (this.profileLink = this.inActiveLink),
                  (this.timelineLink = this.inActiveLink),
                  (this.messageLink = this.activeLink),
                  (this.newsFeedLink = this.inActiveLink),
                  (this.notificationLink = this.inActiveLink);
                break;
              case "Timeline":
                if ("Guest" === this.userData.userName)
                  return (this.restrictGuest = !0);
                (this.homeLink = this.inActiveLink),
                  (this.profileLink = this.inActiveLink),
                  (this.timelineLink = this.activeLink),
                  (this.messageLink = this.inActiveLink),
                  (this.newsFeedLink = this.inActiveLink),
                  (this.notificationLink = this.inActiveLink);
                break;
              case "Newsfeed":
                if ("Guest" === this.userData.userName)
                  return (this.restrictGuest = !0);
                (this.homeLink = this.inActiveLink),
                  (this.profileLink = this.inActiveLink),
                  (this.timelineLink = this.inActiveLink),
                  (this.messageLink = this.inActiveLink),
                  (this.newsFeedLink = this.activeLink),
                  (this.notificationLink = this.inActiveLink);
                break;
              default:
                break;
            }
          },
          handlePushRoutes(e) {
            if (((this.clickedLink = e), "Guest" === this.userData.userName))
              return (this.restrictGuest = !0);
            this.$router.push({
              name: e,
              params: { userName: this.userData.userName },
            });
          },
          handleTextHover(e) {
            return this.clickedLink === e ? "" : "nav-notification-hover";
          },
          handleNotifications(e) {
            if (
              ((this.clickedLink = "Notifications"),
              "Guest" === this.userData.userName)
            )
              return (this.restrictGuest = !0);
            "notificationsFullNav" === e
              ? (this.notificationStateFullNav
                  ? ((this.$refs.notificationMenuFullNav.style =
                      "display:none;height:0;transition:all 1s"),
                    (this.notificationBackDrop = !1))
                  : ((this.$refs.notificationMenuFullNav.style =
                      "display:flex;height:auto;transition:all 1s"),
                    (this.notificationBackDrop = !0)),
                (this.notificationStateFullNav =
                  !this.notificationStateFullNav))
              : this.notificationState
              ? ((this.$refs.notificationMenu.style =
                  "display:none;height:0;transition:all 1s"),
                (this.notificationBackDrop = !1))
              : ((this.$refs.notificationMenu.style =
                  "display:flex;height:auto;transition:all 1s"),
                (this.notificationBackDrop = !0));
          },
          handleNotifyBackDrop() {
            (this.notificationBackDrop = !1),
              (this.$refs.notificationMenuFullNav.style =
                "display:none;height:0;transition:all 1s"),
              (this.$refs.notificationMenu.style =
                "display:none;height:0;transition:all 1s");
          },
          showMessages() {
            if ("Guest" === this.userData.userName)
              return (this.restrictGuest = !0);
            this.$router.push({
              name: "Messages",
              params: { userName: this.userData.userName },
            });
          },
          showFriends() {
            if ("Guest" === this.userData.userName)
              return (this.restrictGuest = !0);
            this.$router.push({
              name: "Friends",
              params: { userName: this.userData.userName },
            });
          },
          showNotificationDetails(e, t, a, i) {
            switch ((this.soundNum--, e)) {
              case "friend request":
                console.log("yes"),
                  this.$router.push({
                    name: "Friends",
                    params: { userName: this.userData.userName },
                  });
                break;
              case "follow":
                console.log("yes"),
                  this.$router.push({
                    name: "Friends",
                    params: { userName: this.userData.userName },
                  }),
                  this.$store.dispatch("handleNotificationUpdate", {
                    userName: this.userData.userName,
                    notificationStatus: "Read",
                    notificationType: "follow",
                  });
                break;
              case "message":
                this.$store.dispatch("handleMessageViewStatus", {
                  friendMessaged: a,
                  userName: this.userData.userName,
                  messageViewStatus: "Read",
                  showMessage: !0,
                }),
                  this.$router.push({
                    name: "Messages",
                    params: { userName: this.userData.userName },
                  });
                break;
              case "post":
                this.$router.push({
                  name: "Timeline",
                  params: { userName: a, Timeline: "Timeline" },
                });
                break;
              case "likes":
                this.$router.push({
                  name: "Timeline",
                  params: { userName: i, Timeline: "Timeline" },
                }),
                  this.$store.dispatch("handleNotificationUpdate", {
                    userName: this.userData.userName,
                    notificationStatus: "Read",
                    notificationType: "likes",
                  });
                break;
              case "comment":
                this.$router.push({
                  name: "Timeline",
                  params: { userName: i, Timeline: "Timeline" },
                }),
                  this.$store.dispatch("handleNotificationUpdate", {
                    userName: this.userData.userName,
                    notificationStatus: "Read",
                    notificationType: "comment",
                  });
                break;
              default:
                break;
            }
          },
          handleGender(e) {
            for (const t in this.$store.state.users)
              if ("male" === this.$store.state.users[e].gender) return "his";
            return "her";
          },
          showDate(e) {
            const t = Date.now(),
              a = t - e,
              i = Math.round(a / 6e4),
              s = Math.round(a / 36e5),
              o = Math.round(a / 864e5),
              n = Math.round(a / 6048e5),
              c = Math.round(a / 72576e5),
              d = Math.round(a / 1314e6);
            return i <= 0
              ? "Just now"
              : i < 59
              ? 1 === i
                ? "1 minute ago"
                : i + " minutes ago"
              : s < 11
              ? 1 === s
                ? "1 hour ago"
                : s + " hours ago"
              : o >= 1
              ? 1 === o
                ? "1 day ago"
                : o + " days ago"
              : n < 59
              ? 1 === n
                ? "1 week ago"
                : n + " weeks ago"
              : c < 59
              ? 1 === c
                ? "1 month ago"
                : c + " mouths ago"
              : 1 === d
              ? "1 year ago"
              : d + " years ago";
          },
          handleFooterDisplay() {
            return (
              "Messages" !== this.$store.state.displayFunctions.activeLink &&
              ("Timeline" !== this.$store.state.displayFunctions.activeLink ||
                !this.$store.state.displayFunctions.photosCompOnScreen) &&
              !!this.$store.state.displayFunctions.loginPageUnmounted
            );
          },
          autoPosts(e, t, a, i) {
            switch (e) {
              case "message":
                const e = xi["a"].v1();
                this.$store.dispatch("handleSubmitMessage", {
                  [e]: {
                    userName: t,
                    friendMessaged: this.$store.state.userData.userName,
                    userId: a,
                    message: i,
                    messageId: e,
                    messageDate: Date.now(),
                    messageStatus: "sent",
                  },
                }),
                  this.$store.dispatch("handleNotifications", {
                    userName: t,
                    friendUserName: this.$store.state.userData.userName,
                    notificationId: xi["a"].v1(),
                    notificationType: "message",
                    notificationStatus: "unRead",
                    notificationDate: Date.now(),
                  }),
                  this.$store.dispatch("handleMessageViewStatus", {
                    friendMessaged: this.$store.state.userData.userName,
                    messageOnScreen: "off",
                    userName: t,
                    messageViewStatus: "unRead",
                    showMessage: !1,
                  });
                break;
              case "follow":
                this.$store.dispatch("handleFollow", {
                  friendUserName: this.userData.userName,
                  userName: t,
                  followState: "follow",
                }),
                  this.$store.dispatch("handleNotifications", {
                    userName: t,
                    friendUserName: this.userData.userName,
                    notificationId: xi["a"].v1(),
                    notificationType: "follow",
                    notificationStatus: "unRead",
                    notificationDate: Date.now(),
                  }),
                  this.$store.dispatch("handleActivities", {
                    friendUserName: this.userData.userName,
                    userName: t,
                    activity: "followed",
                    activityDate: Date.now(),
                    activityId: xi["a"].v1(),
                  });
                break;
              case "Add Friend":
                this.$store.dispatch("handleFriendRequest", {
                  friendUserName: this.userData.userName,
                  userName: t,
                  requestStatus: "Request Sent",
                }),
                  this.$store.dispatch("handleNotifications", {
                    userName: t,
                    friendUserName: this.userData.userName,
                    notificationId: xi["a"].v1(),
                    notificationType: "friend request",
                    notificationStatus: "unRead",
                    notificationDate: Date.now(),
                  }),
                  this.$store.dispatch("handleActivities", {
                    userName: t,
                    friendUserName: this.userData.userName,
                    activity: "Friend request",
                    activityDate: Date.now(),
                    activityId: xi["a"].v1(),
                  });
                break;
              default:
                break;
            }
            return this.autoPostCounter++, "play";
          },
        },
        computed: {
          filteredSearchList() {
            let e = this.allUsers
              .sort(function (e, t) {
                var a = e.userName.toUpperCase(),
                  i = t.userName.toUpperCase();
                return a < i ? -1 : a > i ? 1 : 0;
              })
              .filter(
                (e) =>
                  -1 !==
                  e.userName
                    .toLowerCase()
                    .indexOf(this.searchInput.toLowerCase())
              );
            return (
              (this.filteredSearchLists = e.filter(
                (e) => e.userName !== this.$store.state.userData.userName
              )),
              this.filteredSearchLists
            );
          },
          searchNotFound() {
            return !this.filteredSearchLists.length;
          },
          updateUserData() {
            this.$store.state.userData;
            (this.userData = this.$store.state.userData),
              (this.storeData = this.$store.state),
              this.$store.state.displayFunctions.newAccount &&
                this.autoPostCounter < 1 &&
                (setTimeout(() => {
                  this.autoPosts(
                    "message",
                    "Ivy",
                    "5c8ef170-db3a-11eb-af32-47b0df65ae76",
                    "hello"
                  );
                }, 1e4),
                setTimeout(() => {
                  this.autoPosts(
                    "message",
                    "Sophie",
                    "5c8ef170-db3a-11eb-af32-47b0df65ae76",
                    `hello ${this.userData.userName}, How are you `
                  );
                }, 15e3),
                setTimeout(() => {
                  this.autoPosts(
                    "message",
                    "Ada",
                    "5c8ef170-db3a-11eb-af32-47b0df65ae76",
                    "hi " + this.userData.userName
                  );
                }, 25e3),
                setTimeout(() => {
                  this.autoPosts(
                    "Add Friend",
                    "Ivy",
                    "5c8ef170-db3a-11eb-af32-47b0df65ae76"
                  );
                }, 2e4),
                setTimeout(() => {
                  this.autoPosts(
                    "Add Friend",
                    "Sophie",
                    "5c8ef170-db3a-11eb-af32-47b0df65ae76"
                  );
                }, 35e3),
                setTimeout(() => {
                  this.autoPosts(
                    "Add Friend",
                    "Ada",
                    "5c8ef170-db3a-11eb-af32-47b0df65ae76"
                  );
                }, 45e3),
                setTimeout(() => {
                  this.autoPosts(
                    "follow",
                    "Ivy",
                    "5c8ef170-db3a-11eb-af32-47b0df65ae76"
                  );
                }, 2e4),
                setTimeout(() => {
                  this.autoPosts(
                    "follow",
                    "Sophie",
                    "5c8ef170-db3a-11eb-af32-47b0df65ae76"
                  );
                }, 35e3),
                setTimeout(() => {
                  this.autoPosts(
                    "follow",
                    "Ada",
                    "5c8ef170-db3a-11eb-af32-47b0df65ae76"
                  );
                }, 45e3),
                this.$store.dispatch("handleDisplayFunctions", {
                  newAccount: !1,
                  params: "newAccount",
                }));
            let e = [];
            this.searchInput.length
              ? (this.displaySearchContents = !0)
              : (this.displaySearchContents = !1);
            for (let d in this.$store.state.allUsers)
              e = [...e, { userName: d }];
            this.allUsers = e;
            let t = [],
              a = 0,
              i = this.userData.notifications;
            for (const d in this.userData.notifications) {
              for (const e in i)
                ("message" ===
                  this.userData.notifications[d].notificationType &&
                  "post" === this.userData.notifications[d].notificationType) ||
                  (this.userData.notifications[d].notificationType ===
                    i[e].notificationType &&
                    this.userData.notifications[d].posterUserName ===
                      i[e].posterUserName &&
                    this.userData.notifications[d].userName === i[e].userName &&
                    this.userData.notifications[d].commenterUserName ===
                      i[e].commenterUserName &&
                    (a++, a > 1 && delete i[e]));
              a = 0;
            }
            for (const d in i)
              (t = [...t, this.userData.notifications[d]]),
                (this.notifications = t);
            (this.notifications = this.notifications
              .filter((e) => e.userName !== this.userData.userName)
              .reverse()),
              this.$store.dispatch("handleMessageStatus", {
                userName: this.userData.userName,
                params: "received",
              });
            let s = {};
            for (let d in this.userData.messageStatus)
              if ("unRead" === this.userData.messageStatus[d].messageViewStatus)
                for (let e in this.userData.messages[d])
                  "received" === this.userData.messages[d][e].messageStatus &&
                    (s = {
                      ...s,
                      [e]: {
                        friendMessaged: this.userData.messages[d][e].userName,
                      },
                    });
            (this.newMessageCount = Object.keys(s).length),
              this.$store.state.displayFunctions.activeLink.length &&
                this.handleActiveLink(
                  this.$store.state.displayFunctions.activeLink
                );
            let o = [];
            for (const d in this.$store.state.newsFeed)
              this.$store.state.newsFeed[d].views.includes(
                this.userData.userName
              ) ||
                this.$store.state.newsFeed[d].userName ===
                  this.userData.userName ||
                (o = [
                  ...o,
                  { userName: this.$store.state.newsFeed[d].userName },
                ]);
            this.timelineCount = o.length;
            const n = this.notifications.filter(
              (e) => "unRead" === e.notificationStatus
            );
            (this.notificationCount = n.length),
              this.notificationCount > this.soundNum &&
                setTimeout(() => {
                  var e = document.getElementById("newAlert").play();
                  void 0 !== e && e.then((e) => {}).catch((e) => {}),
                    (this.soundNum = this.notificationCount);
                }, 500),
              this.userData.friends.length &&
                (this.friendsList = this.userData.friends.map(
                  (e) => e.userName
                ));
            let c = !0;
            return (
              "Guest" === this.$store.state.userData.userName
                ? ((c = !0), (this.logout = !1))
                : ((c = !1), (this.logout = !0)),
              c
            );
          },
        },
      };
    const as = Pi()(ts, [["render", Li]]);
    var is = as,
      ss = a("6c02");
    const os = Object(i["h"])("h1", null, "404", -1),
      ns = Object(i["h"])("h2", null, "Page Not Found", -1);
    function cs(e, t) {
      return Object(i["q"])(), Object(i["d"])(i["a"], null, [os, ns], 64);
    }
    const ds = {},
      rs = Pi()(ds, [["render", cs]]);
    var bs = rs,
      fs = a("bb51");
    const ls = { class: "timeline-layout" },
      us = { class: "cover-Links" },
      ms = Object(i["g"])("Posts"),
      hs = Object(i["g"])("Profile"),
      ps = Object(i["g"])("Photos"),
      Ns = { class: "user-profile-pic" },
      ys = { class: "username-header" },
      vs = { class: "timeline-container" },
      Os = { key: 0, class: "sideBar" },
      js = { class: "timeline-user-photos" },
      gs = { class: "user-photos-header" },
      ks = { key: 0 },
      Is = { key: 1 },
      Ds = { key: 0, class: "photo-empty" },
      Ss = Object(i["h"])(
        "span",
        { class: "comment" },
        " Add Your Photos ",
        -1
      ),
      Us = { key: 1, class: "photo-empty" },
      Cs = { class: "comment" },
      ws = { key: 2, class: "userPhotos" },
      Rs = { class: "active-container" },
      Ls = { class: "active-header" },
      Ts = { key: 0 },
      As = { key: 1 },
      qs = { key: 0 },
      xs = { key: 0 },
      Fs = { key: 1 },
      Ms = Object(i["g"])(" Created a "),
      Ps = Object(i["h"])("br", null, null, -1),
      Es = Object(i["g"])(" SoMedia Account "),
      $s = Object(i["h"])("br", null, null, -1),
      zs = Object(i["h"])("hr", null, null, -1),
      Vs = { key: 1 },
      Bs = { key: 0 },
      Gs = { key: 1 },
      _s = Object(i["g"])(" started "),
      Js = Object(i["h"])("br", null, null, -1),
      Hs = Object(i["h"])("br", null, null, -1),
      Ys = Object(i["h"])("hr", null, null, -1),
      Zs = { key: 2 },
      Ws = { key: 0 },
      Ks = { key: 1 },
      Qs = Object(i["g"])(" made "),
      Xs = Object(i["h"])("br", null, null, -1),
      eo = Object(i["g"])(" a post "),
      to = Object(i["h"])("br", null, null, -1),
      ao = Object(i["h"])("hr", null, null, -1),
      io = { key: 3 },
      so = { key: 0 },
      oo = { key: 1 },
      no = Object(i["g"])(" commented on a "),
      co = Object(i["h"])("br", null, null, -1),
      ro = Object(i["h"])("br", null, null, -1),
      bo = Object(i["h"])("hr", null, null, -1),
      fo = { key: 4 },
      lo = { key: 0 },
      uo = { key: 1 },
      mo = Object(i["g"])(" commented on a "),
      ho = Object(i["h"])("br", null, null, -1),
      po = Object(i["g"])(" post "),
      No = { key: 2 },
      yo = { key: 3 },
      vo = Object(i["g"])(" Made"),
      Oo = Object(i["h"])("br", null, null, -1),
      jo = Object(i["h"])("hr", null, null, -1),
      go = { key: 5 },
      ko = { key: 0 },
      Io = { key: 1 },
      Do = Object(i["g"])(" liked a "),
      So = Object(i["h"])("br", null, null, -1),
      Uo = Object(i["h"])("br", null, null, -1),
      Co = Object(i["h"])("hr", null, null, -1),
      wo = { key: 6 },
      Ro = { key: 0 },
      Lo = { key: 1 },
      To = Object(i["g"])(" liked a "),
      Ao = Object(i["h"])("br", null, null, -1),
      qo = Object(i["h"])("br", null, null, -1),
      xo = Object(i["h"])("hr", null, null, -1),
      Fo = { key: 7 },
      Mo = { key: 0 },
      Po = { key: 1 },
      Eo = Object(i["g"])(" liked a "),
      $o = Object(i["h"])("br", null, null, -1),
      zo = Object(i["h"])("br", null, null, -1),
      Vo = Object(i["h"])("hr", null, null, -1),
      Bo = { key: 8 },
      Go = { key: 0 },
      _o = { key: 1 },
      Jo = Object(i["g"])(" liked a "),
      Ho = Object(i["h"])("br", null, null, -1),
      Yo = { key: 2 },
      Zo = { key: 3 },
      Wo = Object(i["g"])(" Post"),
      Ko = Object(i["h"])("br", null, null, -1),
      Qo = Object(i["h"])("hr", null, null, -1),
      Xo = { key: 9 },
      en = { key: 0 },
      tn = { key: 1 },
      an = Object(i["g"])(" liked "),
      sn = Object(i["h"])("br", null, null, -1),
      on = { key: 2 },
      nn = { key: 3 },
      cn = Object(i["g"])(" own post"),
      dn = Object(i["h"])("br", null, null, -1),
      rn = Object(i["h"])("hr", null, null, -1),
      bn = Object(i["h"])("div", null, null, -1);
    function fn(e, t, a, s, o, n) {
      const c = Object(i["x"])("router-link"),
        d = Object(i["x"])("Posts"),
        r = Object(i["x"])("Photos"),
        b = Object(i["x"])("Friends"),
        f = Object(i["x"])("Profiles"),
        l = Object(i["x"])("Footer");
      return (
        Object(i["q"])(),
        Object(i["d"])(
          i["a"],
          null,
          [
            Object(i["h"])("div", ls, [
              Object(i["h"])(
                "div",
                { class: "profile-cover-container", style: n.userCoverImage },
                [
                  Object(i["h"])("div", us, [
                    Object(i["h"])("ul", null, [
                      Object(i["h"])(
                        "li",
                        {
                          onClick:
                            t[1] ||
                            (t[1] = (e) => n.toggleDisplay("displayPosts")),
                        },
                        [
                          Object(i["h"])(
                            c,
                            {
                              to: {
                                name: "Timeline",
                                params: {
                                  userName: o.userData.userName,
                                  Timeline: "Timeline",
                                },
                              },
                              style: o.displayPosts && o.activeLink,
                            },
                            { default: Object(i["F"])(() => [ms]), _: 1 },
                            8,
                            ["to", "style"]
                          ),
                        ]
                      ),
                      Object(i["h"])(
                        "li",
                        {
                          onClick:
                            t[2] ||
                            (t[2] = (e) => n.toggleDisplay("displayProfile")),
                        },
                        [
                          Object(i["h"])(
                            c,
                            {
                              to: {
                                name: "Timeline",
                                params: {
                                  userName: o.userData.userName,
                                  Timeline: "Profile",
                                },
                              },
                              style: o.displayProfile && o.activeLink,
                            },
                            { default: Object(i["F"])(() => [hs]), _: 1 },
                            8,
                            ["to", "style"]
                          ),
                        ]
                      ),
                      Object(i["h"])(
                        "li",
                        {
                          onClick:
                            t[3] ||
                            (t[3] = (e) => n.toggleDisplay("displayPhotos")),
                        },
                        [
                          Object(i["h"])(
                            c,
                            {
                              to: {
                                name: "Timeline",
                                params: {
                                  userName: o.userData.userName,
                                  Timeline: "Photos",
                                },
                              },
                              style: o.displayPhotos && o.activeLink,
                            },
                            { default: Object(i["F"])(() => [ps]), _: 1 },
                            8,
                            ["to", "style"]
                          ),
                        ]
                      ),
                      Object(i["h"])(
                        "li",
                        {
                          onClick:
                            t[4] ||
                            (t[4] = (e) =>
                              n.handleShowFriends(o.userData.userName)),
                        },
                        [
                          Object(i["h"])(
                            "a",
                            {
                              style: o.displayFriends && o.activeLink,
                              ref: "timelineFriendsLink",
                            },
                            " Friends",
                            4
                          ),
                        ]
                      ),
                    ]),
                  ]),
                  Object(i["h"])("div", Ns, [
                    Object(i["h"])(
                      "img",
                      { src: n.handleUserProfilePic(a.userName), alt: "" },
                      null,
                      8,
                      ["src"]
                    ),
                    Object(i["h"])(
                      "span",
                      ys,
                      Object(i["z"])(o.userData.userName),
                      1
                    ),
                  ]),
                ],
                4
              ),
              Object(i["h"])("div", vs, [
                o.displayPhotosContainer
                  ? (Object(i["q"])(),
                    Object(i["d"])("div", Os, [
                      Object(i["h"])("div", js, [
                        Object(i["h"])("div", gs, [
                          this.userData.userName !==
                          this.$store.state.userData.userName
                            ? (Object(i["q"])(),
                              Object(i["d"])(
                                "h5",
                                ks,
                                Object(i["z"])(n.handleUserNames) +
                                  "'s Photos ",
                                1
                              ))
                            : (Object(i["q"])(),
                              Object(i["d"])("h5", Is, "Your Photos")),
                        ]),
                        o.photoEmpty &&
                        o.userData.userName === e.$store.state.userData.userName
                          ? (Object(i["q"])(), Object(i["d"])("div", Ds, [Ss]))
                          : Object(i["e"])("", !0),
                        o.photoEmpty &&
                        o.userData.userName !== e.$store.state.userData.userName
                          ? (Object(i["q"])(),
                            Object(i["d"])("div", Us, [
                              Object(i["h"])(
                                "span",
                                Cs,
                                Object(i["z"])(n.handleUserNames) +
                                  " has no Photos ",
                                1
                              ),
                            ]))
                          : (Object(i["q"])(),
                            Object(i["d"])("div", ws, [
                              (Object(i["q"])(!0),
                              Object(i["d"])(
                                i["a"],
                                null,
                                Object(i["w"])(
                                  o.userData.photos,
                                  (e) => (
                                    Object(i["q"])(),
                                    Object(i["d"])(
                                      "div",
                                      { key: e.imageId, class: "image-photos" },
                                      [
                                        Object(i["h"])(
                                          "img",
                                          {
                                            src: e.imageUrl,
                                            alt: "",
                                            onClick: (t) =>
                                              n.displayPhotosComp(e),
                                          },
                                          null,
                                          8,
                                          ["src", "onClick"]
                                        ),
                                      ]
                                    )
                                  )
                                ),
                                128
                              )),
                            ])),
                      ]),
                    ]))
                  : Object(i["e"])("", !0),
                Object(i["h"])(
                  "div",
                  {
                    class: "components-container",
                    style: o.componentsContainer,
                  },
                  [
                    o.displayPosts
                      ? (Object(i["q"])(),
                        Object(i["d"])(
                          d,
                          {
                            key: 0,
                            userName: n.handleUserNames,
                            loadData: n.loadData,
                          },
                          null,
                          8,
                          ["userName", "loadData"]
                        ))
                      : Object(i["e"])("", !0),
                    Object(i["G"])(
                      Object(i["h"])(
                        r,
                        { userName: n.handleUserNames },
                        null,
                        8,
                        ["userName"]
                      ),
                      [[i["D"], o.displayPhotos]]
                    ),
                    Object(i["G"])(
                      Object(i["h"])(
                        b,
                        {
                          userName: n.handleUserNames,
                          onToggleView: n.toggleDisplay,
                        },
                        null,
                        8,
                        ["userName", "onToggleView"]
                      ),
                      [[i["D"], o.displayFriends]]
                    ),
                    Object(i["G"])(
                      Object(i["h"])(
                        f,
                        {
                          userName: n.handleUserNames,
                          onToggleView: n.toggleDisplay,
                        },
                        null,
                        8,
                        ["userName", "onToggleView"]
                      ),
                      [[i["D"], o.displayProfile]]
                    ),
                  ],
                  4
                ),
                this.displayPhotos
                  ? Object(i["e"])("", !0)
                  : (Object(i["q"])(),
                    Object(i["d"])(
                      "div",
                      {
                        key: 1,
                        class: ["activities-container", o.activitiesDisplay],
                      },
                      [
                        Object(i["h"])("div", Rs, [
                          Object(i["h"])("div", Ls, [
                            this.userData.userName !==
                            this.$store.state.userData.userName
                              ? (Object(i["q"])(),
                                Object(i["d"])(
                                  "h5",
                                  Ts,
                                  Object(i["z"])(n.handleUserNames) +
                                    "'s Activities ",
                                  1
                                ))
                              : Object(i["e"])("", !0),
                            this.userData.userName ===
                            this.$store.state.userData.userName
                              ? (Object(i["q"])(),
                                Object(i["d"])("h5", As, " Your Activities "))
                              : Object(i["e"])("", !0),
                          ]),
                          (Object(i["q"])(!0),
                          Object(i["d"])(
                            i["a"],
                            null,
                            Object(i["w"])(
                              n.activities,
                              (e) => (
                                Object(i["q"])(),
                                Object(i["d"])("ul", { key: e.activityId }, [
                                  "Created account" === e.activity
                                    ? (Object(i["q"])(),
                                      Object(i["d"])("li", qs, [
                                        this.userData.userName ===
                                        this.$store.state.userData.userName
                                          ? (Object(i["q"])(),
                                            Object(i["d"])("span", xs, "You"))
                                          : Object(i["e"])("", !0),
                                        this.userData.userName !==
                                        this.$store.state.userData.userName
                                          ? (Object(i["q"])(),
                                            Object(i["d"])(
                                              "span",
                                              Fs,
                                              Object(i["z"])(n.handleUserNames),
                                              1
                                            ))
                                          : Object(i["e"])("", !0),
                                        Ms,
                                        Ps,
                                        Es,
                                        $s,
                                        Object(i["g"])(
                                          " " +
                                            Object(i["z"])(
                                              n.showDate(e.activityDate)
                                            ) +
                                            " ",
                                          1
                                        ),
                                        zs,
                                      ]))
                                    : Object(i["e"])("", !0),
                                  "followed" === e.activity
                                    ? (Object(i["q"])(),
                                      Object(i["d"])("li", Vs, [
                                        this.userData.userName ===
                                        this.$store.state.userData.userName
                                          ? (Object(i["q"])(),
                                            Object(i["d"])("span", Bs, "You"))
                                          : Object(i["e"])("", !0),
                                        this.userData.userName !==
                                        this.$store.state.userData.userName
                                          ? (Object(i["q"])(),
                                            Object(i["d"])(
                                              "span",
                                              Gs,
                                              Object(i["z"])(n.handleUserNames),
                                              1
                                            ))
                                          : Object(i["e"])("", !0),
                                        _s,
                                        Js,
                                        Object(i["g"])(
                                          " following " +
                                            Object(i["z"])(e.friendUserName) +
                                            " ",
                                          1
                                        ),
                                        Hs,
                                        Object(i["g"])(
                                          " " +
                                            Object(i["z"])(
                                              n.showDate(e.activityDate)
                                            ) +
                                            " ",
                                          1
                                        ),
                                        Ys,
                                      ]))
                                    : Object(i["e"])("", !0),
                                  "posted" === e.activity
                                    ? (Object(i["q"])(),
                                      Object(i["d"])("li", Zs, [
                                        this.userData.userName ===
                                        this.$store.state.userData.userName
                                          ? (Object(i["q"])(),
                                            Object(i["d"])("span", Ws, "You"))
                                          : Object(i["e"])("", !0),
                                        this.userData.userName !==
                                        this.$store.state.userData.userName
                                          ? (Object(i["q"])(),
                                            Object(i["d"])(
                                              "span",
                                              Ks,
                                              Object(i["z"])(n.handleUserNames),
                                              1
                                            ))
                                          : Object(i["e"])("", !0),
                                        Qs,
                                        Xs,
                                        eo,
                                        to,
                                        Object(i["g"])(
                                          Object(i["z"])(
                                            n.showDate(e.activityDate)
                                          ) + " ",
                                          1
                                        ),
                                        ao,
                                      ]))
                                    : Object(i["e"])("", !0),
                                  "commented" === e.activity &&
                                  e.posterUserName !== this.userData.userName
                                    ? (Object(i["q"])(),
                                      Object(i["d"])("li", io, [
                                        this.userData.userName ===
                                        this.$store.state.userData.userName
                                          ? (Object(i["q"])(),
                                            Object(i["d"])("span", so, "You"))
                                          : Object(i["e"])("", !0),
                                        this.userData.userName !==
                                        this.$store.state.userData.userName
                                          ? (Object(i["q"])(),
                                            Object(i["d"])(
                                              "span",
                                              oo,
                                              Object(i["z"])(n.handleUserNames),
                                              1
                                            ))
                                          : Object(i["e"])("", !0),
                                        no,
                                        co,
                                        Object(i["g"])(
                                          " post by " +
                                            Object(i["z"])(e.posterUserName) +
                                            " ",
                                          1
                                        ),
                                        ro,
                                        Object(i["g"])(
                                          " " +
                                            Object(i["z"])(
                                              n.showDate(e.activityDate)
                                            ) +
                                            " ",
                                          1
                                        ),
                                        bo,
                                      ]))
                                    : Object(i["e"])("", !0),
                                  "commented" === e.activity &&
                                  e.posterUserName === this.userData.userName
                                    ? (Object(i["q"])(),
                                      Object(i["d"])("li", fo, [
                                        this.userData.userName ===
                                        this.$store.state.userData.userName
                                          ? (Object(i["q"])(),
                                            Object(i["d"])("span", lo, "You"))
                                          : Object(i["e"])("", !0),
                                        this.userData.userName !==
                                        this.$store.state.userData.userName
                                          ? (Object(i["q"])(),
                                            Object(i["d"])(
                                              "span",
                                              uo,
                                              Object(i["z"])(n.handleUserNames),
                                              1
                                            ))
                                          : Object(i["e"])("", !0),
                                        mo,
                                        ho,
                                        po,
                                        this.userData.userName ===
                                        this.$store.state.userData.userName
                                          ? (Object(i["q"])(),
                                            Object(i["d"])("span", No, "You"))
                                          : Object(i["e"])("", !0),
                                        this.userData.userName !==
                                        this.$store.state.userData.userName
                                          ? (Object(i["q"])(),
                                            Object(i["d"])(
                                              "span",
                                              yo,
                                              Object(i["z"])(n.handleUserNames),
                                              1
                                            ))
                                          : Object(i["e"])("", !0),
                                        vo,
                                        Oo,
                                        Object(i["g"])(
                                          " " +
                                            Object(i["z"])(
                                              n.showDate(e.activityDate)
                                            ) +
                                            " ",
                                          1
                                        ),
                                        jo,
                                      ]))
                                    : Object(i["e"])("", !0),
                                  "liked" === e.activity &&
                                  e.posterUserName !== o.userData.userName
                                    ? (Object(i["q"])(),
                                      Object(i["d"])("li", go, [
                                        this.userData.userName ===
                                        this.$store.state.userData.userName
                                          ? (Object(i["q"])(),
                                            Object(i["d"])("span", ko, "You"))
                                          : Object(i["e"])("", !0),
                                        this.userData.userName !==
                                        this.$store.state.userData.userName
                                          ? (Object(i["q"])(),
                                            Object(i["d"])(
                                              "span",
                                              Io,
                                              Object(i["z"])(n.handleUserNames),
                                              1
                                            ))
                                          : Object(i["e"])("", !0),
                                        Do,
                                        So,
                                        Object(i["g"])(
                                          " post by " +
                                            Object(i["z"])(e.posterUserName) +
                                            " ",
                                          1
                                        ),
                                        Uo,
                                        Object(i["g"])(
                                          " " +
                                            Object(i["z"])(
                                              n.showDate(e.activityDate)
                                            ) +
                                            " ",
                                          1
                                        ),
                                        Co,
                                      ]))
                                    : Object(i["e"])("", !0),
                                  "likedComment" === e.activity &&
                                  e.posterUserName !== e.commenterUserName &&
                                  e.posterUserName !== this.userData.userName
                                    ? (Object(i["q"])(),
                                      Object(i["d"])("li", wo, [
                                        this.userData.userName ===
                                        this.$store.state.userData.userName
                                          ? (Object(i["q"])(),
                                            Object(i["d"])("span", Ro, "You"))
                                          : Object(i["e"])("", !0),
                                        this.userData.userName !==
                                        this.$store.state.userData.userName
                                          ? (Object(i["q"])(),
                                            Object(i["d"])(
                                              "span",
                                              Lo,
                                              Object(i["z"])(n.handleUserNames),
                                              1
                                            ))
                                          : Object(i["e"])("", !0),
                                        To,
                                        Ao,
                                        Object(i["g"])(
                                          " comment by " +
                                            Object(i["z"])(
                                              e.commenterUserName
                                            ) +
                                            " on " +
                                            Object(i["z"])(e.posterUserName) +
                                            "'s Post ",
                                          1
                                        ),
                                        qo,
                                        Object(i["g"])(
                                          " " +
                                            Object(i["z"])(
                                              n.showDate(e.activityDate)
                                            ) +
                                            " ",
                                          1
                                        ),
                                        xo,
                                      ]))
                                    : Object(i["e"])("", !0),
                                  "likedComment" === e.activity &&
                                  e.posterUserName === e.commenterUserName
                                    ? (Object(i["q"])(),
                                      Object(i["d"])("li", Fo, [
                                        this.userData.userName ===
                                        this.$store.state.userData.userName
                                          ? (Object(i["q"])(),
                                            Object(i["d"])("span", Mo, "You"))
                                          : Object(i["e"])("", !0),
                                        this.userData.userName !==
                                        this.$store.state.userData.userName
                                          ? (Object(i["q"])(),
                                            Object(i["d"])(
                                              "span",
                                              Po,
                                              Object(i["z"])(n.handleUserNames),
                                              1
                                            ))
                                          : Object(i["e"])("", !0),
                                        Eo,
                                        $o,
                                        Object(i["g"])(
                                          " comment by " +
                                            Object(i["z"])(
                                              e.commenterUserName
                                            ) +
                                            " on " +
                                            Object(i["z"])(
                                              n.handleGender(e.posterUserName)
                                            ) +
                                            " Post",
                                          1
                                        ),
                                        zo,
                                        Object(i["g"])(
                                          " " +
                                            Object(i["z"])(
                                              n.showDate(e.activityDate)
                                            ) +
                                            " ",
                                          1
                                        ),
                                        Vo,
                                      ]))
                                    : Object(i["e"])("", !0),
                                  "likedComment" === e.activity &&
                                  e.posterUserName === this.userData.userName
                                    ? (Object(i["q"])(),
                                      Object(i["d"])("li", Bo, [
                                        this.userData.userName ===
                                        this.$store.state.userData.userName
                                          ? (Object(i["q"])(),
                                            Object(i["d"])("span", Go, "You"))
                                          : Object(i["e"])("", !0),
                                        this.userData.userName !==
                                        this.$store.state.userData.userName
                                          ? (Object(i["q"])(),
                                            Object(i["d"])(
                                              "span",
                                              _o,
                                              Object(i["z"])(n.handleUserNames),
                                              1
                                            ))
                                          : Object(i["e"])("", !0),
                                        Jo,
                                        Ho,
                                        Object(i["g"])(
                                          " comment by " +
                                            Object(i["z"])(
                                              e.commenterUserName
                                            ) +
                                            " on ",
                                          1
                                        ),
                                        this.userData.userName ===
                                        this.$store.state.userData.userName
                                          ? (Object(i["q"])(),
                                            Object(i["d"])("span", Yo, "Your"))
                                          : Object(i["e"])("", !0),
                                        this.userData.userName !==
                                        this.$store.state.userData.userName
                                          ? (Object(i["q"])(),
                                            Object(i["d"])(
                                              "span",
                                              Zo,
                                              Object(i["z"])(
                                                n.handleGender(
                                                  this.userData.userName
                                                )
                                              ),
                                              1
                                            ))
                                          : Object(i["e"])("", !0),
                                        Wo,
                                        Ko,
                                        Object(i["g"])(
                                          " " +
                                            Object(i["z"])(
                                              n.showDate(e.activityDate)
                                            ) +
                                            " ",
                                          1
                                        ),
                                        Qo,
                                      ]))
                                    : Object(i["e"])("", !0),
                                  "liked" === e.activity &&
                                  e.posterUserName === o.userData.userName
                                    ? (Object(i["q"])(),
                                      Object(i["d"])("li", Xo, [
                                        this.userData.userName ===
                                        this.$store.state.userData.userName
                                          ? (Object(i["q"])(),
                                            Object(i["d"])("span", en, "You"))
                                          : Object(i["e"])("", !0),
                                        this.userData.userName !==
                                        this.$store.state.userData.userName
                                          ? (Object(i["q"])(),
                                            Object(i["d"])(
                                              "span",
                                              tn,
                                              Object(i["z"])(n.handleUserNames),
                                              1
                                            ))
                                          : Object(i["e"])("", !0),
                                        an,
                                        sn,
                                        this.userData.userName ===
                                        this.$store.state.userData.userName
                                          ? (Object(i["q"])(),
                                            Object(i["d"])("span", on, "Your"))
                                          : Object(i["e"])("", !0),
                                        this.userData.userName !==
                                        this.$store.state.userData.userName
                                          ? (Object(i["q"])(),
                                            Object(i["d"])(
                                              "span",
                                              nn,
                                              Object(i["z"])(
                                                n.handleGender(
                                                  this.userData.userName
                                                )
                                              ),
                                              1
                                            ))
                                          : Object(i["e"])("", !0),
                                        cn,
                                        dn,
                                        Object(i["g"])(
                                          " " +
                                            Object(i["z"])(
                                              n.showDate(e.activityDate)
                                            ) +
                                            " ",
                                          1
                                        ),
                                        rn,
                                      ]))
                                    : Object(i["e"])("", !0),
                                ])
                              )
                            ),
                            128
                          )),
                        ]),
                      ],
                      2
                    )),
              ]),
            ]),
            bn,
            this.displayPhotos
              ? Object(i["e"])("", !0)
              : (Object(i["q"])(), Object(i["d"])(l, { key: 0 })),
          ],
          64
        )
      );
    }
    const ln = { key: 0, class: "form-field mb-5", ref: "formField" },
      un = Object(i["g"])("  "),
      mn = { key: 0, class: "username-header" },
      hn = Object(i["h"])("br", null, null, -1),
      pn = { key: 0, class: "filepreview" },
      Nn = { key: 1, class: "post-Video stackItem" },
      yn = { width: "500", heigth: "100", controls: "" },
      vn = Object(i["g"])(" Your browser does not support HTML video. "),
      On = { class: "textarea-icons", ref: "textareaIcons" },
      jn = { class: "edit-container", ref: "editContainer" },
      gn = { class: "edit-icon-container" },
      kn = { ref: "chevronRight", style: { display: "none" } },
      In = {
        class: "text-theme-container themes-icons-container",
        ref: "themeContainer",
      },
      Dn = Object(i["h"])(
        "button",
        { type: "submit", class: "btn " },
        "Post",
        -1
      ),
      Sn = { key: 1, class: "empty-Post" },
      Un = { key: 0, class: "comment" },
      Cn = { key: 1, class: "comment" },
      wn = { class: "userName-Timeposted" },
      Rn = { class: "username-header" },
      Ln = { class: "comment" },
      Tn = Object(i["g"])(" Your browser does not support HTML video. "),
      An = { class: "post-comments" },
      qn = Object(i["h"])("span", { class: "text-success" }, "Likes", -1),
      xn = Object(i["g"])("   "),
      Fn = Object(i["h"])("span", { class: "text-danger" }, " unlikes", -1),
      Mn = Object(i["g"])("   "),
      Pn = { class: "m-2  post-views" },
      En = Object(i["g"])("Views   "),
      $n = { class: "m-2 post-comments-num" },
      zn = Object(i["h"])("hr", null, null, -1),
      Vn = Object(i["h"])(
        "h6",
        { class: "m-3 ml-5 font-weight-bold" },
        "Comments",
        -1
      ),
      Bn = { class: "userName-Timeposted" },
      Gn = { class: "username-header" },
      _n = { class: "comment" },
      Jn = { class: "ml-5 comments-text" },
      Hn = { class: "comment-like-container" },
      Yn = Object(i["h"])("span", { class: "text-success" }, "Likes", -1),
      Zn = Object(i["g"])("   "),
      Wn = Object(i["h"])("span", { class: "text-danger" }, "Unikes", -1),
      Kn = Object(i["g"])("   "),
      Qn = { class: "comment-input-field" },
      Xn = Object(i["h"])(
        "button",
        { type: "submit", class: "btn btn-info" },
        "Comment",
        -1
      ),
      ec = Object(i["h"])("hr", null, null, -1);
    function tc(e, t, a, s, o, n) {
      const c = Object(i["x"])("font-awesome-icon");
      return (
        Object(i["q"])(),
        Object(i["d"])(
          i["a"],
          null,
          [
            o.displayMakePost
              ? (Object(i["q"])(),
                Object(i["d"])(
                  "div",
                  ln,
                  [
                    Object(i["h"])("span", null, [
                      Object(i["h"])(
                        "img",
                        {
                          src: o.userData.userProfileImage,
                          class: "user-image-icon",
                          alt: "",
                        },
                        null,
                        8,
                        ["src"]
                      ),
                      un,
                      o.showUserName
                        ? (Object(i["q"])(),
                          Object(i["d"])(
                            "span",
                            mn,
                            Object(i["z"])(o.userData.userName),
                            1
                          ))
                        : Object(i["e"])("", !0),
                    ]),
                    Object(i["h"])(
                      "form",
                      {
                        onSubmit:
                          t[19] ||
                          (t[19] = Object(i["H"])(
                            (e) => n.handlePublishPost(),
                            ["prevent"]
                          )),
                        ref: "form",
                      },
                      [
                        Object(i["G"])(
                          Object(i["h"])(
                            "textarea",
                            {
                              name: "posttextarea",
                              "onUpdate:modelValue":
                                t[1] || (t[1] = (e) => (o.postTextArea = e)),
                              cols: "30",
                              rows: "3",
                              class: o.postStyle,
                              placeholder: " Make a post",
                              onClick:
                                t[2] ||
                                (t[2] = (e) => n.handleMakePost("text")),
                              style: o.textAreaStyle,
                              ref: "textArea",
                            },
                            null,
                            6
                          ),
                          [[i["C"], o.postTextArea]]
                        ),
                        hn,
                        o.previewImage || o.previewVideo
                          ? (Object(i["q"])(),
                            Object(i["d"])("div", pn, [
                              o.previewImage
                                ? (Object(i["q"])(),
                                  Object(i["d"])(
                                    "img",
                                    { key: 0, src: o.tempUrl, alt: "" },
                                    null,
                                    8,
                                    ["src"]
                                  ))
                                : Object(i["e"])("", !0),
                              o.previewVideo && o.loadFileAddress
                                ? (Object(i["q"])(),
                                  Object(i["d"])("div", Nn, [
                                    Object(i["h"])("video", yn, [
                                      Object(i["h"])(
                                        "source",
                                        { src: o.tempUrl, type: "video/mp4" },
                                        null,
                                        8,
                                        ["src"]
                                      ),
                                      Object(i["h"])(
                                        "source",
                                        { src: o.tempUrl, type: "video/ogg" },
                                        null,
                                        8,
                                        ["src"]
                                      ),
                                      vn,
                                    ]),
                                  ]))
                                : Object(i["e"])("", !0),
                            ]))
                          : Object(i["e"])("", !0),
                        Object(i["h"])(
                          "div",
                          On,
                          [
                            Object(i["h"])(
                              "span",
                              jn,
                              [
                                Object(i["h"])("span", gn, [
                                  Object(i["h"])(
                                    c,
                                    {
                                      icon: ["fas", "edit"],
                                      ref: "timelineIcon",
                                      onClick:
                                        t[3] ||
                                        (t[3] = (e) =>
                                          n.handleMakePost("text")),
                                    },
                                    null,
                                    512
                                  ),
                                  Object(i["h"])(
                                    "span",
                                    kn,
                                    [
                                      Object(i["h"])(c, {
                                        icon: ["fas", "chevron-right"],
                                        class: "chevron-right",
                                      }),
                                    ],
                                    512
                                  ),
                                ]),
                                Object(i["h"])(
                                  "span",
                                  In,
                                  [
                                    Object(i["h"])(
                                      "div",
                                      {
                                        onClick:
                                          t[4] ||
                                          (t[4] = (e) =>
                                            n.handleTheme(
                                              "text-theme-default"
                                            )),
                                        class: "text-theme text-theme-default ",
                                        style:
                                          n.handleThemeStyle(
                                            "text-theme-default"
                                          ),
                                      },
                                      null,
                                      4
                                    ),
                                    Object(i["h"])(
                                      "div",
                                      {
                                        onClick:
                                          t[5] ||
                                          (t[5] = (e) =>
                                            n.handleTheme("text-themeOne")),
                                        class: "text-theme text-themeOne",
                                        style:
                                          n.handleThemeStyle("text-themeOne"),
                                      },
                                      null,
                                      4
                                    ),
                                    Object(i["h"])(
                                      "div",
                                      {
                                        onClick:
                                          t[6] ||
                                          (t[6] = (e) =>
                                            n.handleTheme("text-themeTwo")),
                                        class: "text-theme text-themeTwo",
                                        style:
                                          n.handleThemeStyle("text-themeTwo"),
                                      },
                                      null,
                                      4
                                    ),
                                    Object(i["h"])(
                                      "div",
                                      {
                                        onClick:
                                          t[7] ||
                                          (t[7] = (e) =>
                                            n.handleTheme("text-themeThree")),
                                        class: "text-theme text-themeThree",
                                        style:
                                          n.handleThemeStyle("text-themeThree"),
                                      },
                                      null,
                                      4
                                    ),
                                    Object(i["h"])(
                                      "div",
                                      {
                                        onClick:
                                          t[8] ||
                                          (t[8] = (e) =>
                                            n.handleTheme("text-themeFour")),
                                        class: "text-theme text-themeFour",
                                        style:
                                          n.handleThemeStyle("text-themeFour"),
                                      },
                                      null,
                                      4
                                    ),
                                    Object(i["h"])(
                                      "div",
                                      {
                                        onClick:
                                          t[9] ||
                                          (t[9] = (e) =>
                                            n.handleTheme("text-themeFive")),
                                        class: "text-theme text-themeFive",
                                        style:
                                          n.handleThemeStyle("text-themeFive"),
                                      },
                                      null,
                                      4
                                    ),
                                    Object(i["h"])(
                                      "div",
                                      {
                                        onClick:
                                          t[10] ||
                                          (t[10] = (e) =>
                                            n.handleTheme("text-themeSix")),
                                        class: "text-theme text-themeSix",
                                        style:
                                          n.handleThemeStyle("text-themeSix"),
                                      },
                                      null,
                                      4
                                    ),
                                    Object(i["h"])(
                                      "div",
                                      {
                                        onClick:
                                          t[11] ||
                                          (t[11] = (e) =>
                                            n.handleTheme("text-themeSeven")),
                                        class: "text-theme text-themeSeven",
                                        style:
                                          n.handleThemeStyle("text-themeSeven"),
                                      },
                                      null,
                                      4
                                    ),
                                    Object(i["h"])(
                                      "div",
                                      {
                                        onClick:
                                          t[12] ||
                                          (t[12] = (e) =>
                                            n.handleTheme("text-themeEight")),
                                        class: "text-theme text-themeEight",
                                        style:
                                          n.handleThemeStyle("text-themeEight"),
                                      },
                                      null,
                                      4
                                    ),
                                    Object(i["h"])(
                                      "div",
                                      {
                                        onClick:
                                          t[13] ||
                                          (t[13] = (e) =>
                                            n.handleTheme("text-themeNine")),
                                        class: "text-theme text-themeNine",
                                        style:
                                          n.handleThemeStyle("text-themeNine"),
                                      },
                                      null,
                                      4
                                    ),
                                    Object(i["h"])(
                                      "div",
                                      {
                                        onClick:
                                          t[14] ||
                                          (t[14] = (e) =>
                                            n.handleTheme("text-themeTen")),
                                        class: "text-theme text-themeTen",
                                        style:
                                          n.handleThemeStyle("text-themeTen"),
                                      },
                                      null,
                                      4
                                    ),
                                  ],
                                  512
                                ),
                              ],
                              512
                            ),
                            Object(i["h"])("span", null, [
                              Object(i["h"])(c, {
                                icon: ["fas", "image"],
                                onClick:
                                  t[15] ||
                                  (t[15] = (e) => n.handleMakePost("image")),
                              }),
                            ]),
                            Object(i["h"])("span", null, [
                              Object(i["h"])(
                                c,
                                {
                                  icon: ["fas", "video"],
                                  ref: "timelineIcon",
                                  onClick:
                                    t[16] ||
                                    (t[16] = (e) => n.handleMakePost("video")),
                                },
                                null,
                                512
                              ),
                            ]),
                          ],
                          512
                        ),
                        Dn,
                        Object(i["G"])(
                          Object(i["h"])(
                            "input",
                            {
                              type: "file",
                              name: "fileUpload",
                              accept: "video/mp4",
                              ref: "filesUploadVideo",
                              onChange:
                                t[17] ||
                                (t[17] = (...e) =>
                                  n.localFiles && n.localFiles(...e)),
                            },
                            null,
                            544
                          ),
                          [[i["D"], !1]]
                        ),
                        Object(i["G"])(
                          Object(i["h"])(
                            "input",
                            {
                              type: "file",
                              name: "fileUpload",
                              accept: "image/png,image/jpeg",
                              ref: "filesUploadImages",
                              onChange:
                                t[18] ||
                                (t[18] = (...e) =>
                                  n.localFiles && n.localFiles(...e)),
                            },
                            null,
                            544
                          ),
                          [[i["D"], !1]]
                        ),
                      ],
                      544
                    ),
                  ],
                  512
                ))
              : Object(i["e"])("", !0),
            o.emptyPost
              ? (Object(i["q"])(),
                Object(i["d"])("div", Sn, [
                  n.userDatas.userName === o.userData.userName
                    ? (Object(i["q"])(),
                      Object(i["d"])("span", Un, "Make Your first Post"))
                    : (Object(i["q"])(),
                      Object(i["d"])(
                        "span",
                        Cn,
                        Object(i["z"])(n.userDatas.userName) +
                          " has not made any Post",
                        1
                      )),
                ]))
              : Object(i["e"])("", !0),
            (Object(i["q"])(!0),
            Object(i["d"])(
              i["a"],
              null,
              Object(i["w"])(
                n.posts,
                (t) => (
                  Object(i["q"])(),
                  Object(i["d"])(
                    "div",
                    { class: "post-container", key: t.postId },
                    [
                      Object(i["h"])(
                        "div",
                        {
                          class: "userImage",
                          onClick: (e) =>
                            n.showUserTimeline(t.userName, t.userId),
                          ref: t.postId,
                        },
                        [
                          Object(i["h"])(
                            "img",
                            {
                              src: n.handleUserIcon(
                                e.$store.state.users[t.userName]
                                  .userProfileImage
                              ),
                              class: "user-image-icon",
                              alt: "",
                            },
                            null,
                            8,
                            ["src"]
                          ),
                          Object(i["h"])("span", wn, [
                            Object(i["h"])(
                              "span",
                              Rn,
                              Object(i["z"])(t.userName),
                              1
                            ),
                            Object(i["h"])(
                              "span",
                              Ln,
                              " Posted " +
                                Object(i["z"])(n.showDate(t.datePosted)),
                              1
                            ),
                          ]),
                        ],
                        8,
                        ["onClick"]
                      ),
                      t.posts.length
                        ? (Object(i["q"])(),
                          Object(i["d"])(
                            "div",
                            {
                              key: 0,
                              class: ["post rounded mt-3", t.postStyle],
                              style: n.handlePostThemes(t.postStyle),
                              ref: "post",
                            },
                            [
                              Object(i["h"])(
                                "span",
                                null,
                                Object(i["z"])(t.posts),
                                1
                              ),
                            ],
                            6
                          ))
                        : Object(i["e"])("", !0),
                      t.postImages.length
                        ? (Object(i["q"])(!0),
                          Object(i["d"])(
                            i["a"],
                            { key: 1 },
                            Object(i["w"])(
                              t.postImages,
                              (e) => (
                                Object(i["q"])(),
                                Object(i["d"])(
                                  "div",
                                  { class: "post-images", key: t.postImages },
                                  [
                                    Object(i["h"])(
                                      "img",
                                      { src: e.imageUrl, alt: "" },
                                      null,
                                      8,
                                      ["src"]
                                    ),
                                  ]
                                )
                              )
                            ),
                            128
                          ))
                        : Object(i["e"])("", !0),
                      t.postVideos.videoId
                        ? (Object(i["q"])(),
                          Object(i["d"])(
                            "div",
                            {
                              key: 2,
                              class: "post-Video",
                              ref: t.postVideos.videoId,
                            },
                            [
                              Object(i["h"])(
                                "video",
                                {
                                  width: "500",
                                  "max-height": "300",
                                  controls: "",
                                  autoplay: t.postVideos.videoAutoplay,
                                  id: t.postVideos.videoId,
                                },
                                [
                                  Object(i["h"])(
                                    "source",
                                    {
                                      src: t.postVideos.videoUrl,
                                      type: "video/mp4",
                                    },
                                    null,
                                    8,
                                    ["src"]
                                  ),
                                  Object(i["h"])(
                                    "source",
                                    {
                                      src: t.postVideos.videoUrl,
                                      type: "video/ogg",
                                    },
                                    null,
                                    8,
                                    ["src"]
                                  ),
                                  Tn,
                                ],
                                8,
                                ["autoplay", "id"]
                              ),
                            ],
                            512
                          ))
                        : Object(i["e"])("", !0),
                      Object(i["h"])("div", An, [
                        Object(i["h"])(
                          "span",
                          {
                            onClick: (e) =>
                              n.handleLikes(
                                "postLikes",
                                "incrementPostLikes",
                                t.postId,
                                o.userData.userId,
                                t.userName,
                                t.postId
                              ),
                            class: [
                              "m-2  comment-like",
                              n.handleLikeStyle(t.likes, "likes"),
                            ],
                          },
                          [
                            qn,
                            xn,
                            Object(i["h"])(c, { icon: ["fas", "thumbs-up"] }),
                            Object(i["g"])(
                              " " + Object(i["z"])(t.likes.length),
                              1
                            ),
                          ],
                          10,
                          ["onClick"]
                        ),
                        Object(i["h"])(
                          "span",
                          {
                            onClick: (e) =>
                              n.handleLikes(
                                "postLikes",
                                "decrementPostLikes",
                                t.postId,
                                o.userData.userId,
                                t.userName,
                                t.postId
                              ),
                            class: [
                              "m-2  comment-unlike",
                              n.handleLikeStyle(t.unLikes, "unlikes"),
                            ],
                          },
                          [
                            Fn,
                            Mn,
                            Object(i["h"])(c, { icon: ["fas", "thumbs-down"] }),
                            Object(i["g"])(
                              " " + Object(i["z"])(t.unLikes.length),
                              1
                            ),
                          ],
                          10,
                          ["onClick"]
                        ),
                        Object(i["h"])("div", Pn, [
                          En,
                          Object(i["h"])(c, { icon: ["fas", "eye"] }),
                          Object(i["g"])(
                            "  " + Object(i["z"])(t.views.length),
                            1
                          ),
                        ]),
                        Object(i["h"])(
                          "span",
                          $n,
                          Object(i["z"])(Object.keys(t.comments).length) +
                            " comments",
                          1
                        ),
                      ]),
                      zn,
                      Vn,
                      (Object(i["q"])(!0),
                      Object(i["d"])(
                        i["a"],
                        null,
                        Object(i["w"])(
                          t.comments,
                          (a) => (
                            Object(i["q"])(),
                            Object(i["d"])(
                              "div",
                              { class: " comments", key: a.commentId },
                              [
                                Object(i["h"])(
                                  "div",
                                  {
                                    class: "userImage ml-5",
                                    onClick: (e) =>
                                      n.showUserTimeline(a.userName, a.userId),
                                  },
                                  [
                                    Object(i["h"])(
                                      "img",
                                      {
                                        src: n.handleUserIcon(
                                          e.$store.state.users[a.userName]
                                            .userProfileImage
                                        ),
                                        class: "user-image-icon",
                                        alt: "",
                                      },
                                      null,
                                      8,
                                      ["src"]
                                    ),
                                    Object(i["h"])("span", Bn, [
                                      Object(i["h"])(
                                        "span",
                                        Gn,
                                        Object(i["z"])(a.userName),
                                        1
                                      ),
                                      Object(i["h"])(
                                        "span",
                                        _n,
                                        " commented " +
                                          Object(i["z"])(
                                            n.showDate(a.dateCommented)
                                          ),
                                        1
                                      ),
                                    ]),
                                  ],
                                  8,
                                  ["onClick"]
                                ),
                                Object(i["h"])(
                                  "p",
                                  Jn,
                                  Object(i["z"])(a.comment),
                                  1
                                ),
                                Object(i["h"])("div", Hn, [
                                  Object(i["h"])(
                                    "span",
                                    {
                                      onClick: (e) =>
                                        n.handleLikes(
                                          "commentLikes",
                                          "incrementCommentLikes",
                                          t.postId,
                                          o.userData.userId,
                                          t.userName,
                                          a
                                        ),
                                      class: [
                                        "comment-mobile-view comment-like",
                                        n.handleLikeStyle(a.likes, "likes"),
                                      ],
                                    },
                                    [
                                      Yn,
                                      Zn,
                                      Object(i["h"])(c, {
                                        icon: ["fas", "thumbs-up"],
                                      }),
                                      Object(i["g"])(
                                        " " + Object(i["z"])(a.likes.length),
                                        1
                                      ),
                                    ],
                                    10,
                                    ["onClick"]
                                  ),
                                  Object(i["h"])(
                                    "span",
                                    {
                                      onClick: (e) =>
                                        n.handleLikes(
                                          "commentLikes",
                                          "decrementCommentLikes",
                                          t.postId,
                                          o.userData.userId,
                                          t.userName,
                                          a
                                        ),
                                      class: [
                                        "comment-mobile-view  comment-unlike",
                                        n.handleLikeStyle(a.unLikes, "unlikes"),
                                      ],
                                    },
                                    [
                                      Wn,
                                      Kn,
                                      Object(i["h"])(c, {
                                        icon: ["fas", "thumbs-down"],
                                      }),
                                      Object(i["g"])(
                                        " " + Object(i["z"])(a.unLikes.length),
                                        1
                                      ),
                                    ],
                                    10,
                                    ["onClick"]
                                  ),
                                ]),
                              ]
                            )
                          )
                        ),
                        128
                      )),
                      Object(i["h"])("div", Qn, [
                        Object(i["h"])("span", null, [
                          Object(i["h"])(
                            "img",
                            {
                              src: n.handleUserIcon(
                                o.userData.userProfileImage
                              ),
                              class: "user-image-icon",
                              alt: "",
                            },
                            null,
                            8,
                            ["src"]
                          ),
                        ]),
                        Object(i["h"])(
                          "form",
                          {
                            onSubmit: Object(i["H"])(
                              (e) =>
                                n.handlePosterComment(
                                  t.posterComment,
                                  t.postId,
                                  t.userName
                                ),
                              ["prevent"]
                            ),
                          },
                          [
                            Object(i["G"])(
                              Object(i["h"])(
                                "input",
                                {
                                  type: "text",
                                  class: "input",
                                  placeholder: " Post a comment",
                                  "onUpdate:modelValue": (e) =>
                                    (t.posterComment = e),
                                },
                                null,
                                8,
                                ["onUpdate:modelValue"]
                              ),
                              [[i["C"], t.posterComment]]
                            ),
                            Xn,
                          ],
                          40,
                          ["onSubmit"]
                        ),
                      ]),
                      ec,
                    ]
                  )
                )
              ),
              128
            )),
            o.PostBackDrop
              ? (Object(i["q"])(),
                Object(i["d"])(
                  "div",
                  {
                    key: 2,
                    class: "post-back-drop",
                    style: o.PostBackDropZIndex,
                    onClick:
                      t[20] ||
                      (t[20] = (...e) =>
                        n.handleCloseTextarea && n.handleCloseTextarea(...e)),
                  },
                  null,
                  4
                ))
              : Object(i["e"])("", !0),
          ],
          64
        )
      );
    }
    var ac = {
      name: "Posts",
      props: ["userName", "loadData", "displayPosts"],
      data() {
        return {
          userData: {},
          postTextArea: "",
          showUserName: !1,
          postStyle: "text-theme-default",
          tempUrl: "",
          previewVideo: !1,
          previewImage: !1,
          loadFileAddress: !1,
          emptyPost: !0,
          displayMakePost: !0,
          textAreaStyle: "",
          PostBackDrop: !1,
          PostBackDropZIndex: "z-index:600",
        };
      },
      mounted() {
        this.loadUserData(!0),
          document.addEventListener("scroll", () => this.onScroll(this.$refs));
      },
      beforeUnmount() {
        this.loadUserData(!1),
          document.addEventListener("scroll", () => this.onScroll(this.$refs));
      },
      methods: {
        loadUserData(e) {
          (this.userData = this.$store.state.userData),
            this.$store.state.userData.userName !== this.userName
              ? (this.displayMakePost = !1)
              : (this.displayMakePost = !0),
            e
              ? this.$store.dispatch("handleDisplayFunctions", {
                  componentMounted: "posts",
                  params: "componentMounted",
                })
              : this.$store.dispatch("handleDisplayFunctions", {
                  componentMounted: "",
                  params: "componentMounted",
                });
        },
        handleTheme(e) {
          (this.postStyle = e),
            (this.textAreaStyle = "height:15rem;border-radius:2px;width:100%;");
        },
        handleThemeStyle(e) {
          return e === this.postStyle
            ? "padding:0px;border:2px solid #e83e8c"
            : "padding:0px";
        },
        handlePostThemes(e) {
          return "text-theme-default" !== e
            ? "min-height:200px"
            : "heigth:auto";
        },
        handleLikeStyle(e, t) {
          switch (t) {
            case "likes":
              return e.includes(this.$store.state.userData.userName)
                ? "text-success"
                : "comment-like";
            case "unlikes":
              return e.includes(this.$store.state.userData.userName)
                ? "text-danger"
                : "comment-like";
            default:
              break;
          }
        },
        localFiles(e) {
          this.tempUrl = URL.createObjectURL(e.target.files[0]);
        },
        handleMakePost(e) {
          (this.PostBackDrop = !0),
            "text" !== e &&
              ("video" === e
                ? ((this.previewVideo = !0),
                  (this.previewImage = !1),
                  (this.loadFileAddress = !1),
                  (this.tempUrl = ""),
                  this.$refs.filesUploadVideo.click())
                : ((this.previewImage = !0),
                  (this.previewVideo = !1),
                  this.$refs.filesUploadImages.click())),
            (this.$refs.formField.style =
              "flex-flow:column;transition:all 0.4s;z-index:650"),
            this.$refs.textArea.classList.add("textarea-input"),
            (this.$refs.textareaIcons.style =
              "flex-flow:column;font-size:1.5rem;transition:all 0.4s"),
            (this.$refs.themeContainer.style =
              "display:flex;width:auto;transition:all 0.4s"),
            (this.$refs.editContainer.style = "display:flex"),
            (this.$refs.chevronRight.style = "display:inline"),
            (this.showUserName = !0);
        },
        handleCloseTextarea() {
          (this.PostBackDrop = !1),
            (this.textAreaStyleZIndex = ""),
            this.$refs.textArea.classList.remove("textarea-input"),
            (this.textAreaStyle = ""),
            (this.$refs.formField.style =
              "flex-flow:row;height:auto;transition:all 0.4s"),
            (this.$refs.textareaIcons.style = "flex-flow:row;"),
            (this.$refs.themeContainer.style = "display:none;"),
            (this.$refs.editContainer.style = "display:inline"),
            (this.$refs.chevronRight.style = "display:none"),
            (this.postStyle = "text-theme-default"),
            (this.showUserName = !1),
            (this.previewVideo = !1),
            (this.previewImage = !1),
            (this.tempUrl = "");
        },
        handleUserIcon(e) {
          return void 0 === e
            ? "https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/512x512/plain/user.png"
            : e;
        },
        handleLikes(e, t, a, i, s, o) {
          this.$store.dispatch("handleLikes", {
            condition: e,
            params: t,
            postId: a,
            userId: i,
            userName: this.userData.userName,
            commentId: o.commentId,
            dateLiked: Date.now(),
          }),
            this.$store.dispatch("handleNotifications", {
              userName: this.userData.userName,
              posterUserName: s,
              notificationId: xi["a"].v1(),
              notificationType: "likes",
              notificationStatus: "unRead",
              notificationDate: Date.now(),
            }),
            "postLikes" === e && "incrementPostLikes" === t
              ? (this.$store.dispatch("handleNotifications", {
                  userName: this.userData.userName,
                  posterUserName: s,
                  notificationId: xi["a"].v1(),
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: Date.now(),
                }),
                this.$store.dispatch("handleActivities", {
                  userName: this.userData.userName,
                  posterUserName: s,
                  activity: "liked",
                  activityDate: Date.now(),
                  activityId: xi["a"].v1(),
                }))
              : "incrementCommentLikes" === t &&
                (this.$store.dispatch("handleActivities", {
                  userName: this.userData.userName,
                  posterUserName: s,
                  commenterUserName: o.userName,
                  activity: "likedComment",
                  activityDate: Date.now(),
                  activityId: xi["a"].v1(),
                }),
                this.$store.dispatch("handleNotifications", {
                  userName: this.userData.userName,
                  posterUserName: s,
                  commenterUserName: o.userName,
                  notificationId: xi["a"].v1(),
                  notificationType: "likedComment",
                  notificationStatus: "unRead",
                  notificationDate: Date.now(),
                }));
        },
        showDate(e) {
          const t = Date.now(),
            a = t - e,
            i = Math.round(a / 6e4),
            s = Math.round(a / 36e5),
            o = Math.round(a / 864e5),
            n = Math.round(a / 6048e5),
            c = Math.round(a / 72576e5),
            d = Math.round(a / 1314e6);
          return i <= 0
            ? "Just now"
            : i < 59
            ? 1 === i
              ? "1 minute ago"
              : i + " minutes ago"
            : s < 23
            ? 1 === s
              ? "1 hour ago"
              : s + " hours ago"
            : o >= 1
            ? 1 === o
              ? "1 day ago"
              : o + " days ago"
            : n < 59
            ? 1 === n
              ? "1 week ago"
              : n + " weeks ago"
            : c < 59
            ? 1 === c
              ? "1 month ago"
              : c + " mouths ago"
            : 1 === d
            ? "1 year ago"
            : d + " years ago";
        },
        handlePosterComment(e, t, a) {
          let i = xi["a"].v1();
          e.length &&
            (this.$store.dispatch("handlePosterComment", {
              [i]: {
                userName: this.userData.userName,
                userId: this.userData.userId,
                comment: e,
                dateCommented: Date.now(),
                commentId: i,
                likes: [],
                postId: t,
                unLikes: [],
              },
            }),
            this.$store.dispatch("handleNotifications", {
              userName: this.userData.userName,
              posterUserName: a,
              notificationId: xi["a"].v1(),
              notificationType: "comment",
              notificationStatus: "unRead",
              notificationDate: Date.now(),
            }),
            this.$store.dispatch("handleActivities", {
              userName: this.userData.userName,
              posterUserName: a,
              activity: "commented",
              activityDate: Date.now(),
              activityId: xi["a"].v1(),
            }));
        },
        showUserTimeline(e) {
          this.$router.push({
            name: "Timeline",
            params: { userName: e, Timeline: "Timeline" },
          }),
            this.loadData(e),
            this.$store.dispatch("handleActivities", {
              userName: this.userData.userName,
              activity: "commented",
              activityDate: Date.now(),
              activityId: xi["a"].v1(),
            });
        },
        handlePublishPost() {
          let e = xi["a"].v1(),
            t = "",
            a = "";
          this.previewVideo && this.tempUrl
            ? (t = xi["a"].v1())
            : (a = xi["a"].v1()),
            (this.postTextArea.length || this.tempUrl.length) &&
              (this.$store.dispatch("handlePublishPost", {
                [e]: {
                  userName: this.userData.userName,
                  userId: this.userData.userId,
                  views: [],
                  postId: e,
                  datePosted: Date.now(),
                  posts: this.postTextArea,
                  likes: [],
                  unLikes: [],
                  posterComment: "",
                  comments: [],
                  postStyle: this.postStyle,
                  postImages: [{ imageUrl: this.tempUrl, imageId: a }],
                  postVideos: {
                    videoUrl: this.tempUrl,
                    videoId: t,
                    videoAutoplay: !1,
                  },
                },
              }),
              this.tempUrl.length && this.previewVideo
                ? this.$store.dispatch("handleAddImageVideo", {
                    userName: this.userData.userName,
                    videoUrl: this.tempUrl,
                    videoId: xi["a"].v1(),
                    fileType: "video",
                    videoAutoplay: !1,
                  })
                : this.tempUrl.length &&
                  this.previewImage &&
                  this.$store.dispatch("handleAddImageVideo", {
                    userName: this.userData.userName,
                    imageUrl: this.tempUrl,
                    imageId: xi["a"].v1(),
                    fileType: "image",
                  }),
              (this.postTextArea = ""),
              this.handleCloseTextarea(),
              (this.tempUrl = "")),
            this.$store.dispatch("handleNotifications", {
              userName: this.userData.userName,
              notificationId: xi["a"].v1(),
              notificationType: "post",
              notificationStatus: "unRead",
              notificationDate: Date.now(),
            }),
            this.$store.dispatch("handleActivities", {
              userName: this.userData.userName,
              activity: "posted",
              activityDate: Date.now(),
              activityId: xi["a"].v1(),
            });
        },
        handlePostViews(e) {
          this.userData.userName !== this.newsFeed[e].userName &&
            this.$store.dispatch("handlePostViews", {
              userName: this.userData.userName,
              postId: e,
            });
        },
        handlePostViews(e) {
          this.userData.userName !== this.newsFeed[e].userName &&
            this.$store.dispatch("handlePostViews", {
              userName: this.userData.userName,
              postId: e,
            });
        },
        onScroll(e) {
          let t = Object.keys(e);
          for (let a in this.posts)
            t.includes(this.posts[a].postId && null !== e[this.posts[a]]) &&
              "posts" === this.$store.state.displayFunctions.componentMounted &&
              this.isElementInViewport(e[this.posts[a].postId]) &&
              null !== e[this.posts[a].postVideos.videoId] &&
              this.handlePostViews(this.posts[a].postId),
              t.includes(this.posts[a].postVideos.videoId) &&
                null !== e[this.posts[a].postVideos.videoId] &&
                (this.isElementInViewport(e[this.posts[a].postVideos.videoId])
                  ? document
                      .getElementById(this.posts[a].postVideos.videoId)
                      .play()
                      .catch((e) => {})
                  : document
                      .getElementById(this.posts[a].postVideos.videoId)
                      .pause());
        },
        isElementInViewport(e) {
          var t = e.getBoundingClientRect();
          return (
            t.top >= 0 &&
            t.left >= 0 &&
            t.bottom <=
              (window.innerHeight || document.documentElement.clientHeight) &&
            t.right <=
              (window.innerWidth || document.documentElement.clientWidth)
          );
        },
      },
      computed: {
        userDatas() {
          ((this.previewVideo && this.tempUrl.length) ||
            (this.previewImage && this.tempUrl.length)) &&
            (this.loadFileAddress = !0);
          let e = this.$store.state.users[this.userName];
          return e;
        },
        posts() {
          let e = [];
          for (let t in this.$store.state.newsFeed)
            this.$store.state.newsFeed[t].userName === this.userName &&
              (e = [...e, this.$store.state.newsFeed[t]]);
          return (
            e.length ? (this.emptyPost = !1) : (this.emptyPost = !0),
            e.sort((e, t) => e.datePosted - t.datePosted).reverse(),
            e
          );
        },
      },
    };
    const ic = Pi()(ac, [["render", tc]]);
    var sc = ic;
    const oc = { class: "photos-container" },
      nc = { class: "displayed-Image", ref: "displayedImage" },
      cc = { class: "displayedImageContainer" },
      dc = { class: "userPhotos-main-container" },
      rc = { class: "userPhotos-container" },
      bc = { class: "user-photos-header" },
      fc = { key: 0 },
      lc = { key: 1 },
      uc = { key: 0, class: "photo-empty comment" },
      mc = { key: 1, class: "userPhotos" },
      hc = Object(i["g"])(" photos ");
    function pc(e, t, a, s, o, n) {
      const c = Object(i["x"])("font-awesome-icon");
      return (
        Object(i["q"])(),
        Object(i["d"])("div", oc, [
          Object(i["h"])(
            "div",
            {
              class: "display-Image-backdrop",
              ref: "displayBackDrop",
              onClick:
                t[1] ||
                (t[1] = (...e) =>
                  n.CloseDisplayedImage && n.CloseDisplayedImage(...e)),
            },
            null,
            512
          ),
          Object(i["h"])(
            "div",
            nc,
            [
              Object(i["h"])(
                "div",
                {
                  class: "close-displayed-image",
                  onClick:
                    t[2] ||
                    (t[2] = (...e) =>
                      n.CloseDisplayedImage && n.CloseDisplayedImage(...e)),
                },
                [Object(i["h"])(c, { icon: ["fas", "times-circle"] })]
              ),
              Object(i["h"])(
                "span",
                {
                  onClick:
                    t[3] || (t[3] = (e) => n.handleChangeImage("previous")),
                  class: "chevron-left-span",
                  style: o.chevronLeft,
                },
                [Object(i["h"])(c, { icon: ["fas", "chevron-left"] })],
                4
              ),
              Object(i["h"])("div", cc, [
                Object(i["h"])(
                  "img",
                  { src: n.handleDisplayingImage(), alt: "" },
                  null,
                  8,
                  ["src"]
                ),
              ]),
              Object(i["h"])(
                "span",
                {
                  onClick: t[4] || (t[4] = (e) => n.handleChangeImage("next")),
                  class: "chevron-right-span",
                  style: o.chevronRight,
                },
                [Object(i["h"])(c, { icon: ["fas", "chevron-right"] })],
                4
              ),
            ],
            512
          ),
          Object(i["h"])("div", dc, [
            Object(i["h"])("div", rc, [
              Object(i["h"])("div", bc, [
                this.userData.userName !== this.$store.state.userData.userName
                  ? (Object(i["q"])(),
                    Object(i["d"])(
                      "h5",
                      fc,
                      Object(i["z"])(n.handleUserNames) + "'s Photos ",
                      1
                    ))
                  : (Object(i["q"])(), Object(i["d"])("h5", lc, "Your Photos")),
              ]),
              o.userData.photos.length
                ? Object(i["e"])("", !0)
                : (Object(i["q"])(),
                  Object(i["d"])("div", uc, " Add Your Photos ")),
              o.userData.photos.length
                ? (Object(i["q"])(),
                  Object(i["d"])("div", mc, [
                    (Object(i["q"])(!0),
                    Object(i["d"])(
                      i["a"],
                      null,
                      Object(i["w"])(
                        o.userData.photos,
                        (e) => (
                          Object(i["q"])(),
                          Object(i["d"])(
                            "div",
                            {
                              key: e.imageId,
                              class: "image-photos",
                              onClick: (t) => n.displayImage(e),
                            },
                            [
                              Object(i["h"])(
                                "img",
                                { src: e.imageUrl, alt: "" },
                                null,
                                8,
                                ["src"]
                              ),
                            ],
                            8,
                            ["onClick"]
                          )
                        )
                      ),
                      128
                    )),
                  ]))
                : Object(i["e"])("", !0),
            ]),
          ]),
          hc,
        ])
      );
    }
    var Nc = {
      name: "Photos",
      props: ["userName"],
      data() {
        return {
          userData: { photos: [] },
          renderImage: "",
          displayedImageArray: { index: 0, arrayLength: 0 },
          chevronRight: "visibility:visible",
          chevronLeft: "visibility:visible",
          displayClickedImage: void 0,
          showit: !0,
        };
      },
      mounted() {
        this.loadData("on");
      },
      beforeUnmount() {
        this.loadData("off");
      },
      methods: {
        loadData(e) {
          "on" === e
            ? this.$store.dispatch("handleDisplayFunctions", {
                photosCompOnScreen: !0,
                params: "photosCompOnScreen",
              })
            : this.$store.dispatch("handleDisplayFunctions", {
                photosCompOnScreen: !1,
                params: "photosCompOnScreen",
              }),
            (this.userData = this.$store.state.users[this.userName]),
            this.userData.photos.length &&
              (this.renderImage = this.userData.photos[0]);
        },
        CloseDisplayedImage() {
          (this.$refs.displayBackDrop.style = "display:none"),
            (this.$refs.displayedImage.style = "display:none");
        },
        displayImage(e) {
          (this.$refs.displayBackDrop.style = "display:block"),
            (this.$refs.displayedImage.style = "display:flex"),
            (this.renderImage = e);
        },
        handleEmptyPhotos(e) {
          return "" === !e
            ? ((this.showit = !0), !0)
            : ((this.showit = !1), !1);
        },
        handleDisplayingImage() {
          return void 0 === this.renderImage.imageUrl
            ? ""
            : this.renderImage.imageUrl;
        },
        handleChangeImage(e) {
          if (
            ((this.chevronLeft = "visibility:visible"),
            (this.chevronRight = "visibility:visible"),
            "next" === e)
          ) {
            for (let t = 0; t < this.userData.photos.length; t++)
              if (
                this.renderImage.imageUrl === this.userData.photos[t].imageUrl
              )
                return (
                  (this.displayedImageArray.index = t),
                  (this.displayedImageArray.arrayLength =
                    this.userData.photos.length - 1),
                  t < this.userData.photos.length - 1
                    ? (this.renderImage = this.userData.photos[t + 1])
                    : ((this.chevronRight = "visibility:hidden"),
                      (this.renderImage = this.userData.photos[t]))
                );
          } else
            for (let t = 0; t < this.userData.photos.length; t++)
              if (
                this.renderImage.imageUrl === this.userData.photos[t].imageUrl
              )
                return (
                  (this.displayedImageArray.index = t),
                  (this.displayedImageArray.arrayLength =
                    this.userData.photos.length - 1),
                  t > 0
                    ? (this.renderImage = this.userData.photos[t - 1])
                    : ((this.chevronLeft = "visibility:hidden"),
                      (this.renderImage = this.userData.photos[t]))
                );
        },
      },
      computed: {
        handleUserNames() {
          const e = this.userName;
          return this.loadData(this.userName), e;
        },
      },
    };
    const yc = Pi()(Nc, [["render", pc]]);
    var vc = yc;
    const Oc = { class: "timeline-friends-container" },
      jc = { class: "timeline-friends-container-header" },
      gc = { key: 0, class: "empty-friens-list" },
      kc = { class: "names-Bold" },
      Ic = { key: 1, class: "friends-content-grid" },
      Dc = { class: "friend-main-content" },
      Sc = { class: "user-name-details" };
    function Uc(e, t, a, s, o, n) {
      const c = Object(i["x"])("font-awesome-icon");
      return (
        Object(i["q"])(),
        Object(i["d"])("div", Oc, [
          Object(i["h"])("div", jc, [
            Object(i["h"])(
              "h5",
              null,
              Object(i["z"])(a.userName) + "'s Friends",
              1
            ),
          ]),
          o.emptyFriendsList
            ? Object(i["e"])("", !0)
            : (Object(i["q"])(),
              Object(i["d"])("div", gc, [
                Object(i["h"])(
                  "span",
                  kc,
                  Object(i["z"])(a.userName) + " Does not Have Friends",
                  1
                ),
              ])),
          o.emptyFriendsList
            ? (Object(i["q"])(),
              Object(i["d"])("div", Ic, [
                (Object(i["q"])(!0),
                Object(i["d"])(
                  i["a"],
                  null,
                  Object(i["w"])(
                    n.friendsLists,
                    (e) => (
                      Object(i["q"])(),
                      Object(i["d"])(
                        "div",
                        { key: e.userName, class: "friend-content" },
                        [
                          Object(i["h"])("div", Dc, [
                            Object(i["h"])(
                              "img",
                              {
                                onClick: (t) => n.showUserProfile(e.userName),
                                src: n.handleCoverImage(e.userName),
                                alt: "",
                                class: "cover-image",
                              },
                              null,
                              8,
                              ["onClick", "src"]
                            ),
                            Object(i["h"])(
                              "img",
                              {
                                onClick: (t) => n.showUserProfile(e.userName),
                                src: n.handleUserProfilePic(e.userName),
                                alt: "",
                                class: "userIcon-image",
                              },
                              null,
                              8,
                              ["onClick", "src"]
                            ),
                            Object(i["h"])("div", Sc, [
                              Object(i["h"])("div", null, [
                                Object(i["h"])(
                                  "h5",
                                  {
                                    class: "names-Bold",
                                    onClick: (t) =>
                                      n.showUserProfile(e.userName),
                                  },
                                  Object(i["z"])(e.userName),
                                  9,
                                  ["onClick"]
                                ),
                                "friends" === e.requestStatus
                                  ? (Object(i["q"])(),
                                    Object(i["d"])(c, {
                                      key: 0,
                                      icon: ["fas", "user-friends"],
                                    }))
                                  : Object(i["e"])("", !0),
                                "friends" !== e.requestStatus &&
                                "you" !== e.requestStatus
                                  ? (Object(i["q"])(),
                                    Object(i["d"])(
                                      "button",
                                      {
                                        key: 1,
                                        class: "btn btn-info ml-2",
                                        onClick: (t) =>
                                          n.handleFriendRequest(
                                            e,
                                            e.requestStatus
                                          ),
                                        style: { "white-space": "nowrap" },
                                      },
                                      Object(i["z"])(e.requestStatus),
                                      9,
                                      ["onClick"]
                                    ))
                                  : Object(i["e"])("", !0),
                              ]),
                            ]),
                          ]),
                        ]
                      )
                    )
                  ),
                  128
                )),
              ]))
            : Object(i["e"])("", !0),
        ])
      );
    }
    var Cc = {
      name: "Friends",
      props: ["userName"],
      data() {
        return { userData: {}, friendsList: [], emptyFriendsList: !0 };
      },
      mounted() {
        this.loadData();
      },
      beforeUnmount() {
        this.loadData();
      },
      methods: {
        loadData() {
          this.userData = this.$store.state.users[this.userName];
        },
        handleUserProfilePic(e) {
          return void 0 !== this.$store.state.users[e].userProfileImage &&
            this.$store.state.users[e].userProfileImage.length
            ? this.$store.state.users[e].userProfileImage
            : "https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/512x512/plain/user.png";
        },
        handleCoverImage(e) {
          return void 0 !== this.$store.state.users[e].userCoverImage
            ? this.$store.state.users[e].userCoverImage
            : "https://themified.com/friend-finder/images/covers/1.jpg";
        },
        showUserProfile(e) {
          this.$router.push({
            name: "Timeline",
            params: { userName: e, Timeline: "Timeline" },
          }),
            this.$emit("toggleView", "displayPosts"),
            this.loadData();
        },
        handleFriendRequest(e, t) {
          switch (t) {
            case "Add Friend":
              (e.requestStatus = "Request Sent"),
                this.$store.dispatch("handleFriendRequest", {
                  friendUserName: e.userName,
                  userName: this.$store.state.userData.userName,
                  requestStatus: "Request Sent",
                });
              break;
            case "Accept Request":
              this.$store.dispatch("handleFriendRequest", {
                friendUserName: e.userName,
                userName: this.$store.state.userData.userName,
                requestStatus: "Accept Request",
              }),
                (e.requestStatus = "Friends");
              break;
            default:
              break;
          }
        },
      },
      computed: {
        friendsLists() {
          this.userData = this.$store.state.users[this.userName];
          let e = {};
          for (const i of this.userData.friends)
            e = {
              ...e,
              [i.userName]: { ...this.$store.state.allUsers[i.userName] },
            };
          (this.friendsList = e),
            Object.keys(this.friendsList).length > 0
              ? (this.emptyFriendsList = !0)
              : (this.emptyFriendsList = !1);
          let t = this.$store.state.userData.friends.map((e) => e.userName),
            a = this.$store.state.allUsers[
              this.$store.state.userData.userName
            ].requests.map((e) => e.userName);
          for (let i in e) {
            let e = this.$store.state.allUsers[i].requests.map(
              (e) => e.userName
            );
            (this.friendsList[i].requestStatus = "Add Friend"),
              t.includes(i)
                ? (this.friendsList[i].requestStatus = "friends")
                : i === this.$store.state.userData.userName
                ? (this.friendsList[i].requestStatus = "you")
                : a.length
                ? a.includes(i) &&
                  (this.friendsList[i].requestStatus = "Accept Request")
                : e.length
                ? e.includes(this.$store.state.userData.userName) &&
                  (this.friendsList[i].requestStatus = "Request sent")
                : (this.friendsList[i].requestStatus = "Add Friend");
          }
          return this.friendsList;
        },
      },
    };
    const wc = Pi()(Cc, [["render", Uc]]);
    var Rc = wc;
    const Lc = Object(i["I"])("data-v-025ad062");
    Object(i["t"])("data-v-025ad062");
    const Tc = { class: "profile-card" },
      Ac = { class: "card card-profile shadow mt-5" },
      qc = { class: "row justify-content-center" },
      xc = { class: "col-lg-3 order-lg-2" },
      Fc = { class: "card-profile-image" },
      Mc = { href: "#" },
      Pc = {
        class: "card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4",
      },
      Ec = { key: 0, class: "d-flex justify-content-between" },
      $c = {
        key: 0,
        class: "btn btn-l btn-info mr-4",
        style: { color: "white" },
      },
      zc = { class: "card-body pt-0 pt-md-4" },
      Vc = { class: "row" },
      Bc = { class: "col" },
      Gc = {
        class: "card-profile-stats d-flex justify-content-center mt-md-5",
      },
      _c = { class: "heading" },
      Jc = Object(i["g"])("Friends "),
      Hc = { class: "heading" },
      Yc = Object(i["g"])("Photos "),
      Zc = { class: "heading" },
      Wc = Object(i["g"])("Posts "),
      Kc = { class: "text-center" },
      Qc = { class: "font-weight-light" },
      Xc = { class: "h5 font-weight-300" },
      ed = Object(i["h"])("i", { class: "ni location_pin mr-2" }, null, -1),
      td = { class: "h5 mt-4" },
      ad = Object(i["h"])(
        "i",
        { class: "ni business_briefcase-24 mr-2" },
        null,
        -1
      ),
      id = Object(i["h"])("i", { class: "ni education_hat mr-2" }, null, -1),
      sd = Object(i["h"])("hr", { class: "my-4" }, null, -1);
    Object(i["r"])();
    const od = Lc((e, t, a, s, o, n) => {
      const c = Object(i["x"])("router-link");
      return (
        Object(i["q"])(),
        Object(i["d"])("div", Tc, [
          Object(i["h"])("div", Ac, [
            Object(i["h"])("div", qc, [
              Object(i["h"])("div", xc, [
                Object(i["h"])("div", Fc, [
                  Object(i["h"])("a", Mc, [
                    Object(i["h"])(
                      "img",
                      {
                        src: n.handleUserProfilePic(a.userName),
                        class: "rounded-circle",
                      },
                      null,
                      8,
                      ["src"]
                    ),
                  ]),
                ]),
              ]),
            ]),
            Object(i["h"])("div", Pc, [
              n.handleUserViewed()
                ? (Object(i["q"])(),
                  Object(i["d"])("div", Ec, [
                    o.friendsList.includes(e.$store.state.userData.userName)
                      ? (Object(i["q"])(), Object(i["d"])("a", $c, "Friends"))
                      : (Object(i["q"])(),
                        Object(i["d"])(
                          "a",
                          {
                            key: 1,
                            class: "btn btn-l btn-info mr-4",
                            style: { color: "white" },
                            onClick:
                              t[1] ||
                              (t[1] = (t) =>
                                n.handleFriendRequest(
                                  e.$store.state.allUsers[a.userName],
                                  o.friendRequestStatus
                                )),
                          },
                          Object(i["z"])(o.friendRequestStatus),
                          1
                        )),
                    Object(i["h"])(
                      "a",
                      {
                        href: "#",
                        class: "btn btn-l btn-default  float-right",
                        onClick:
                          t[2] ||
                          (t[2] = (e) => n.showMessage(a.userName, "Read")),
                      },
                      "Message"
                    ),
                  ]))
                : Object(i["e"])("", !0),
            ]),
            Object(i["h"])("div", zc, [
              Object(i["h"])("div", Vc, [
                Object(i["h"])("div", Bc, [
                  Object(i["h"])("div", Gc, [
                    Object(i["h"])("div", null, [
                      Object(i["h"])(
                        "span",
                        _c,
                        Object(i["z"])(o.userData.friends.length),
                        1
                      ),
                      Object(i["h"])(
                        "span",
                        {
                          class: "description",
                          onClick:
                            t[3] ||
                            (t[3] = (t) =>
                              e.$emit("toggleView", "displayFriends")),
                        },
                        [
                          Object(i["h"])(
                            c,
                            {
                              to: {
                                name: "Timeline",
                                params: {
                                  userName: o.userData.userName,
                                  Timeline: "Friends",
                                },
                              },
                            },
                            { default: Lc(() => [Jc]), _: 1 },
                            8,
                            ["to"]
                          ),
                        ]
                      ),
                    ]),
                    Object(i["h"])("div", null, [
                      Object(i["h"])(
                        "span",
                        Hc,
                        Object(i["z"])(
                          e.$store.state.users[a.userName].photos.length
                        ),
                        1
                      ),
                      Object(i["h"])(
                        "span",
                        {
                          class: "description",
                          onClick:
                            t[4] ||
                            (t[4] = (t) =>
                              e.$emit("toggleView", "displayPhotos")),
                        },
                        [
                          Object(i["h"])(
                            c,
                            {
                              to: {
                                name: "Timeline",
                                params: {
                                  userName: o.userData.userName,
                                  Timeline: "Friends",
                                },
                              },
                            },
                            { default: Lc(() => [Yc]), _: 1 },
                            8,
                            ["to"]
                          ),
                        ]
                      ),
                    ]),
                    Object(i["h"])("div", null, [
                      Object(i["h"])(
                        "span",
                        Zc,
                        Object(i["z"])(o.userData.posts.length),
                        1
                      ),
                      Object(i["h"])(
                        "span",
                        {
                          class: "description",
                          onClick:
                            t[5] ||
                            (t[5] = (t) =>
                              e.$emit("toggleView", "displayPosts")),
                        },
                        [
                          Object(i["h"])(
                            c,
                            {
                              to: {
                                name: "Timeline",
                                params: {
                                  userName: o.userData.userName,
                                  Timeline: "Friends",
                                },
                              },
                            },
                            { default: Lc(() => [Wc]), _: 1 },
                            8,
                            ["to"]
                          ),
                        ]
                      ),
                    ]),
                  ]),
                ]),
              ]),
              Object(i["h"])("div", Kc, [
                Object(i["h"])("h3", null, [
                  Object(i["g"])(
                    Object(i["z"])(n.userNames) +
                      " " +
                      Object(i["z"])(o.userData.lastName),
                    1
                  ),
                  Object(i["h"])(
                    "span",
                    Qc,
                    "," + Object(i["z"])(o.userData.age),
                    1
                  ),
                ]),
                Object(i["h"])("div", Xc, [
                  ed,
                  Object(i["g"])(
                    Object(i["z"])(o.userData.city) +
                      "," +
                      Object(i["z"])(o.userData.country),
                    1
                  ),
                ]),
                Object(i["h"])("div", td, [
                  ad,
                  Object(i["g"])(Object(i["z"])(o.userData.occupation), 1),
                ]),
                Object(i["h"])("div", null, [
                  id,
                  Object(i["g"])(Object(i["z"])(o.userData.education), 1),
                ]),
                sd,
                Object(i["h"])(
                  "p",
                  null,
                  Object(i["z"])(o.userData.aboutMe),
                  1
                ),
              ]),
            ]),
          ]),
        ])
      );
    });
    var nd = {
      name: "Friends",
      props: ["userName"],
      data() {
        return {
          userData: {
            userName: "Guest",
            userId: "",
            emailAddress: "",
            firstName: "Guest",
            lastName: "Guest",
            address: "Guest",
            emailAddress: "Guest@gmail.com",
            postCode: "Guest",
            country: "Guest",
            city: "Guest",
            aboutMe: "Guest",
            password: "Guest",
            occupation: "Guest",
            education: "Guest",
            age: "27",
            status: "offline",
            messages: [],
            posts: { Guest: { likes: ["Guest"], unLikes: ["Guest"] } },
            followers: ["Guest"],
            following: ["Guest"],
            friends: ["Guest"],
            posterComment: "",
            comments: {
              likes: [],
              unLikes: [],
              notifications: { friendRequest: [] },
            },
          },
          friendsList: [],
          friendRequestStatus: "Add Friend",
        };
      },
      mounted() {
        this.loadData(!0);
      },
      beforeUnmount() {
        this.loadData(!1);
      },
      methods: {
        loadData() {
          this.userData = this.$store.state.users[this.userName];
          let e = [];
          for (const t in this.$store.state.newsFeed)
            this.$store.state.newsFeed[t].userName === this.userData.userName &&
              (e = [...e, t]);
          this.userData.posts = e;
        },
        showMessage(e, t) {
          this.$store.dispatch("handleDisplayFunctions", {
            userName: e,
            params: "displayMessage",
          }),
            this.$router.push({
              name: "Messages",
              params: { userName: this.$store.state.userData.userName },
            });
        },
        handleUserViewed() {
          return this.userName !== this.$store.state.userData.userName;
        },
        handleUserProfilePic(e) {
          return void 0 !== this.$store.state.users[e].userProfileImage &&
            this.$store.state.users[e].userProfileImage.length
            ? this.$store.state.users[e].userProfileImage
            : "https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/512x512/plain/user.png";
        },
        handleFriendRequest(e, t) {
          switch ((console.log(t), t)) {
            case "Add Friend":
              (e.requestStatus = "Request Sent"),
                this.$store.dispatch("handleFriendRequest", {
                  friendUserName: e.userName,
                  userName: this.$store.state.userData.userName,
                  requestStatus: "Request Sent",
                });
              break;
            case "Accept Request":
              this.$store.dispatch("handleFriendRequest", {
                friendUserName: e.userName,
                userName: this.$store.state.userData.userName,
                requestStatus: "Accept Request",
              });
              break;
            default:
              break;
          }
        },
      },
      computed: {
        userNames() {
          this.friendsList = this.$store.state.users[this.userName].friends.map(
            (e) => e.userName
          );
          let e = this.$store.state.allUsers[this.userName].requests.map(
              (e) => e.userName
            ),
            t = this.$store.state.allUsers[
              this.$store.state.userData.userName
            ].requests.map((e) => e.userName);
          e.includes(this.$store.state.userData.userName)
            ? (this.friendRequestStatus = "Request Sent")
            : t.includes(this.userName)
            ? (this.friendRequestStatus = "Accept Request")
            : (this.friendRequestStatus = "Add Friend");
          let a = this.userName;
          return this.userData.userName !== this.userName && this.loadData(), a;
        },
      },
    };
    a("6bc9");
    const cd = Pi()(nd, [
      ["render", od],
      ["__scopeId", "data-v-025ad062"],
    ]);
    var dd = cd,
      rd = {
        name: "About",
        props: ["Timeline", "userName"],
        components: {
          Posts: sc,
          Friends: Rc,
          Photos: vc,
          Profiles: dd,
          Footer: es,
        },
        data() {
          return {
            userData: { photos: [] },
            displayPosts: !0,
            displayFriends: !1,
            displayPhotos: !1,
            displayProfile: !1,
            activePosition: !1,
            activeLink:
              "background-color: var(--pink);color: var(--navy-blue) !important;font-weight: bold;border-radius:5px;border-bottom-left-radius: 0;border-bottom-right-radius:0 ;",
            activitiesDisplay: "",
            photoEmpty: !1,
            displayPhotosContainer: !0,
            componentsContainer: "",
          };
        },
        mounted() {
          this.loadData(this.userName, "load");
        },
        beforeUnmount() {
          this.loadData(this.userName, "unLoad");
        },
        methods: {
          loadData(e, t) {
            (this.userData = this.$store.state.users[e]),
              "load" === t
                ? this.$store.dispatch("handleDisplayFunctions", {
                    activeLink: "Timeline",
                    params: "activeLink",
                  })
                : this.$store.dispatch("handleDisplayFunctions", {
                    activeLink: "",
                    params: "activeLink",
                  });
          },
          displayPhotosComp(e) {
            this.$store.dispatch("handleDisplayFunctions", {
              displayClickedImage: e,
              params: "displayClickedImage",
            }),
              this.toggleDisplay("displayPhotos");
          },
          handleShowFriends(e) {
            e === this.$store.state.userData.userName &&
              this.$router.push({ name: "Friends", params: { userName: e } }),
              e !== this.$store.state.userData.userName &&
                this.toggleDisplay("displayFriends");
          },
          handleUserProfilePic(e) {
            return void 0 !== this.$store.state.users[e].userProfileImage &&
              this.$store.state.users[e].userProfileImage.length
              ? this.$store.state.users[e].userProfileImage
              : "https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/512x512/plain/user.png";
          },
          showDate(e) {
            let t = Date.now(),
              a = t - e;
            const i = Math.round(a / 6e4),
              s = Math.round(a / 36e5),
              o = Math.round(a / 864e5),
              n = Math.round(a / 6048e5),
              c = Math.round(a / 72576e5);
            Math.round(a / 1314e6);
            return i <= 0
              ? "Just now"
              : i < 60
              ? 1 === i
                ? "1 minute ago"
                : i + "minutes ago"
              : s < 24
              ? Ai()(e).format("L, h:mm :ss a")
              : o < 7
              ? Ai()(e).format("L, h:mm:ss a")
              : n < 4
              ? Ai()(e).format("L, h:mm :ss a")
              : c < 12
              ? Ai()(e).format("L, h:mm :SS a")
              : Ai()(e).format("L, h:mm a");
          },
          toggleDisplay(e) {
            switch (
              ((this.componentsContainer =
                "displayPhotos" === e ? "width:100%" : ""),
              e)
            ) {
              case "displayPosts":
                (this.displayPosts = !0),
                  (this.displayFriends = !1),
                  (this.displayPhotos = !1),
                  (this.displayProfile = !1),
                  (this.activitiesDisplay = ""),
                  (this.displayPhotosContainer = !0);
                break;
              case "displayFriends":
                (this.displayPosts = !1),
                  (this.displayFriends = !0),
                  (this.displayPhotos = !1),
                  (this.displayProfile = !1),
                  this.$router.push({
                    name: "Timeline",
                    params: {
                      userName: this.userData.userName,
                      Timeline: "Friends",
                    },
                  }),
                  (this.activitiesDisplay = ""),
                  (this.displayPhotosContainer = !0);
                break;
              case "displayPhotos":
                (this.displayPosts = !1),
                  (this.displayFriends = !1),
                  (this.displayPhotos = !0),
                  (this.displayProfile = !1),
                  (this.activitiesDisplay = "activities-display"),
                  (this.displayPhotosContainer = !1);
                break;
              case "displayProfile":
                (this.displayPosts = !1),
                  (this.displayFriends = !1),
                  (this.displayPhotos = !1),
                  (this.displayProfile = !0),
                  (this.activitiesDisplay = "activities-display"),
                  (this.displayPhotosContainer = !0);
                break;
              default:
                break;
            }
          },
          handleEmptyPhotos() {
            this.userData.photos.length
              ? (this.photoEmpty = !1)
              : (this.photoEmpty = !0);
          },
          handleGender(e) {
            for (const t in this.$store.state.users)
              if ("male" === this.$store.state.users[e].gender) return "his";
            return "her";
          },
        },
        computed: {
          activities() {
            let e = [],
              t = 0,
              a = this.userData.activities;
            for (const i in this.userData.activities) {
              for (const e in a)
                this.userData.activities[i].activity === a[e].activity &&
                  this.userData.activities[i].posterUserName ===
                    a[e].posterUserName &&
                  this.userData.activities[i].userName === a[e].userName &&
                  this.userData.activities[i].commenterUserName ===
                    a[e].commenterUserName &&
                  this.userData.activities[i].friendUserName ===
                    a[e].friendUserName &&
                  (t++, t > 1 && delete a[e]);
              t = 0;
            }
            for (let i in a) e = [...e, a[i]];
            return e.sort((e, t) => e.activityDate - t.activityDate).reverse();
          },
          userCoverImage() {
            return (
              this.handleEmptyPhotos(),
              `background-image:url(${this.userData.userCoverImage})`
            );
          },
          handleUserNames() {
            const e = this.userName;
            return this.loadData(this.userName), e;
          },
        },
      };
    const bd = Pi()(rd, [["render", fn]]);
    var fd = bd;
    const ld = { class: "mai-container" },
      ud = { class: "welcome-message" },
      md = Object(i["h"])("span", null, "Welcome to your Profile  ", -1),
      hd = { class: "update-cover-img" },
      pd = Object(i["g"])("  "),
      Nd = Object(i["h"])(
        "span",
        { class: "update-cover-text" },
        "Update Your Cover Picture ",
        -1
      ),
      yd = { class: "body-container" },
      vd = { class: "card-set-profile" },
      Od = { class: "card-set-profile-header" },
      jd = Object(i["h"])("h5", null, "My account", -1),
      gd = { class: "info-form" },
      kd = Object(i["h"])("h6", null, "User information", -1),
      Id = { class: "your-info" },
      Dd = Object(i["h"])("label", { for: "UserName" }, "UserName", -1),
      Sd = Object(i["h"])("label", { for: "Email" }, " Email", -1),
      Ud = Object(i["h"])("label", { for: "FirstName" }, "First Name", -1),
      Cd = Object(i["h"])("label", { for: "LastName" }, "Last Name", -1),
      wd = Object(i["h"])("label", { for: "age" }, "Age", -1),
      Rd = Object(i["h"])("label", { for: "education" }, "Education", -1),
      Ld = { class: "age" },
      Td = Object(i["h"])("label", { for: "occupation" }, "Occupation", -1),
      Ad = Object(i["h"])("hr", null, null, -1),
      qd = Object(i["h"])("h6", null, "Contact information", -1),
      xd = { class: "contact-info" },
      Fd = { class: "Home-Address" },
      Md = Object(i["h"])(
        "div",
        null,
        [Object(i["h"])("label", { for: "Address" }, "Address")],
        -1
      ),
      Pd = { class: "" },
      Ed = Object(i["h"])("label", { for: "City" }, "City", -1),
      $d = { class: "" },
      zd = Object(i["h"])("label", { for: "Country" }, "Country", -1),
      Vd = { class: "" },
      Bd = Object(i["h"])("label", { for: "postCode" }, "postCode", -1),
      Gd = Object(i["h"])("hr", null, null, -1),
      _d = { class: "about-me" },
      Jd = Object(i["h"])("h6", null, "About me", -1),
      Hd = { class: "textarea-container" },
      Yd = Object(i["h"])("label", { for: "About-me" }, "About Me", -1),
      Zd = { class: "submitbtn" },
      Wd = { class: "card-view-profile" },
      Kd = { class: "user-Profile-pix" },
      Qd = { class: "setup-buttons" },
      Xd = Object(i["h"])(
        "span",
        { class: "setup-buttons-text" },
        "  Update Profile Picture",
        -1
      ),
      er = { class: "friends-follwers-container" },
      tr = Object(i["g"])("Friends "),
      ar = Object(i["g"])("Photos "),
      ir = Object(i["g"])("Posts "),
      sr = { class: "userData-userName" },
      or = Object(i["g"])(" , "),
      nr = { class: "userData-userName" },
      cr = Object(i["g"])(" , "),
      dr = { class: "text-center" },
      rr = Object(i["g"])(),
      br = Object(i["h"])("br", null, null, -1),
      fr = Object(i["h"])("hr", null, null, -1),
      lr = { class: "text-center" };
    function ur(e, t, a, s, o, n) {
      const c = Object(i["x"])("font-awesome-icon"),
        d = Object(i["x"])("router-link");
      return (
        Object(i["q"])(),
        Object(i["d"])("div", ld, [
          Object(i["h"])(
            "div",
            { class: "cover-container", style: n.HandleUserCoverImage() },
            [
              Object(i["h"])("div", ud, [
                Object(i["h"])(
                  "h1",
                  null,
                  " Hello " + Object(i["z"])(n.userData.userName),
                  1
                ),
                md,
                Object(i["h"])("span", hd, [
                  Object(i["h"])(
                    c,
                    {
                      icon: ["fas", "folder-plus"],
                      onClick: n.handleImageUpdate,
                    },
                    null,
                    8,
                    ["onClick"]
                  ),
                  pd,
                  Nd,
                  Object(i["G"])(
                    Object(i["h"])(
                      "input",
                      {
                        type: "file",
                        name: "fileUpload",
                        accept: "image/png,image/jpeg",
                        ref: "uploadCoverImage",
                        onChange:
                          t[1] ||
                          (t[1] = (...e) =>
                            n.getLocalCoverImgAddress &&
                            n.getLocalCoverImgAddress(...e)),
                      },
                      null,
                      544
                    ),
                    [[i["D"], !1]]
                  ),
                  Object(i["G"])(
                    Object(i["h"])(
                      "input",
                      {
                        type: "file",
                        name: "fileUploadprofile",
                        accept: "image/png,image/jpeg",
                        ref: "uploadProfileImage",
                        onChange:
                          t[2] ||
                          (t[2] = (...e) =>
                            n.getLocalProfileImgAddress &&
                            n.getLocalProfileImgAddress(...e)),
                      },
                      null,
                      544
                    ),
                    [[i["D"], !1]]
                  ),
                ]),
              ]),
            ],
            4
          ),
          Object(i["h"])("div", yd, [
            Object(i["h"])("div", vd, [
              Object(i["h"])(
                "form",
                {
                  onSubmit:
                    t[17] ||
                    (t[17] = Object(i["H"])(
                      (...e) =>
                        n.handleUserDetailsUpDate &&
                        n.handleUserDetailsUpDate(...e),
                      ["prevent"]
                    )),
                },
                [
                  Object(i["h"])("div", Od, [
                    jd,
                    Object(i["h"])("input", {
                      type: "button",
                      class: "btn btn-info  editBtn",
                      onClick:
                        t[3] ||
                        (t[3] = (...e) =>
                          n.handleEnableEdit && n.handleEnableEdit(...e)),
                      value: "Edit",
                    }),
                  ]),
                  Object(i["h"])("div", gd, [
                    kd,
                    Object(i["h"])("div", Id, [
                      Object(i["h"])("div", null, [
                        Dd,
                        Object(i["G"])(
                          Object(i["h"])(
                            "input",
                            {
                              type: "text",
                              "onUpdate:modelValue":
                                t[4] ||
                                (t[4] = (e) => (o.userDetails.userName = e)),
                              placeholder: "UserName",
                              disabled: o.inputState,
                            },
                            null,
                            8,
                            ["disabled"]
                          ),
                          [[i["C"], o.userDetails.userName]]
                        ),
                      ]),
                      Object(i["h"])("div", null, [
                        Sd,
                        Object(i["G"])(
                          Object(i["h"])(
                            "input",
                            {
                              type: "text",
                              "onUpdate:modelValue":
                                t[5] ||
                                (t[5] = (e) =>
                                  (o.userDetails.emailAddress = e)),
                              placeholder: "Email",
                              disabled: o.inputState,
                            },
                            null,
                            8,
                            ["disabled"]
                          ),
                          [[i["C"], o.userDetails.emailAddress]]
                        ),
                      ]),
                      Object(i["h"])("div", null, [
                        Ud,
                        Object(i["G"])(
                          Object(i["h"])(
                            "input",
                            {
                              type: "text",
                              "onUpdate:modelValue":
                                t[6] ||
                                (t[6] = (e) => (o.userDetails.firstName = e)),
                              placeholder: "First Name",
                              disabled: o.inputState,
                            },
                            null,
                            8,
                            ["disabled"]
                          ),
                          [[i["C"], o.userDetails.firstName]]
                        ),
                      ]),
                      Object(i["h"])("div", null, [
                        Cd,
                        Object(i["G"])(
                          Object(i["h"])(
                            "input",
                            {
                              type: "text",
                              "onUpdate:modelValue":
                                t[7] ||
                                (t[7] = (e) => (o.userDetails.lastName = e)),
                              placeholder: "Last Name",
                              disabled: o.inputState,
                            },
                            null,
                            8,
                            ["disabled"]
                          ),
                          [[i["C"], o.userDetails.lastName]]
                        ),
                      ]),
                      Object(i["h"])("div", null, [
                        wd,
                        Object(i["G"])(
                          Object(i["h"])(
                            "input",
                            {
                              type: "text",
                              "onUpdate:modelValue":
                                t[8] || (t[8] = (e) => (o.userDetails.age = e)),
                              placeholder: "age",
                              disabled: o.inputState,
                            },
                            null,
                            8,
                            ["disabled"]
                          ),
                          [[i["C"], o.userDetails.age]]
                        ),
                      ]),
                      Object(i["h"])("div", null, [
                        Rd,
                        Object(i["G"])(
                          Object(i["h"])(
                            "input",
                            {
                              type: "text",
                              "onUpdate:modelValue":
                                t[9] ||
                                (t[9] = (e) => (o.userDetails.education = e)),
                              placeholder: "Education",
                              disabled: o.inputState,
                            },
                            null,
                            8,
                            ["disabled"]
                          ),
                          [[i["C"], o.userDetails.education]]
                        ),
                      ]),
                      Object(i["h"])("div", Ld, [
                        Td,
                        Object(i["G"])(
                          Object(i["h"])(
                            "input",
                            {
                              type: "text",
                              "onUpdate:modelValue":
                                t[10] ||
                                (t[10] = (e) => (o.userDetails.occupation = e)),
                              placeholder: "Occupation",
                              disabled: o.inputState,
                            },
                            null,
                            8,
                            ["disabled"]
                          ),
                          [[i["C"], o.userDetails.occupation]]
                        ),
                      ]),
                    ]),
                    Ad,
                  ]),
                  qd,
                  Object(i["h"])("div", xd, [
                    Object(i["h"])("div", Fd, [
                      Md,
                      Object(i["G"])(
                        Object(i["h"])(
                          "input",
                          {
                            type: "text",
                            placeholder: "Home Address",
                            "onUpdate:modelValue":
                              t[11] ||
                              (t[11] = (e) => (o.userDetails.Address = e)),
                            disabled: o.inputState,
                          },
                          null,
                          8,
                          ["disabled"]
                        ),
                        [[i["C"], o.userDetails.Address]]
                      ),
                    ]),
                    Object(i["h"])("div", Pd, [
                      Ed,
                      Object(i["G"])(
                        Object(i["h"])(
                          "input",
                          {
                            type: "text",
                            placeholder: "City",
                            "onUpdate:modelValue":
                              t[12] ||
                              (t[12] = (e) => (o.userDetails.city = e)),
                            disabled: o.inputState,
                          },
                          null,
                          8,
                          ["disabled"]
                        ),
                        [[i["C"], o.userDetails.city]]
                      ),
                    ]),
                    Object(i["h"])("div", $d, [
                      zd,
                      Object(i["G"])(
                        Object(i["h"])(
                          "input",
                          {
                            type: "text",
                            placeholder: "Country",
                            "onUpdate:modelValue":
                              t[13] ||
                              (t[13] = (e) => (o.userDetails.country = e)),
                            disabled: o.inputState,
                          },
                          null,
                          8,
                          ["disabled"]
                        ),
                        [[i["C"], o.userDetails.country]]
                      ),
                    ]),
                    Object(i["h"])("div", Vd, [
                      Bd,
                      Object(i["G"])(
                        Object(i["h"])(
                          "input",
                          {
                            type: "text",
                            placeholder: "postCode",
                            "onUpdate:modelValue":
                              t[14] ||
                              (t[14] = (e) => (o.userDetails.postCode = e)),
                            disabled: o.inputState,
                          },
                          null,
                          8,
                          ["disabled"]
                        ),
                        [[i["C"], o.userDetails.postCode]]
                      ),
                    ]),
                  ]),
                  Gd,
                  Object(i["h"])("div", _d, [
                    Jd,
                    Object(i["h"])("div", Hd, [
                      Yd,
                      Object(i["G"])(
                        Object(i["h"])(
                          "textarea",
                          {
                            name: "About-me",
                            cols: "30",
                            rows: "5",
                            placeholder: "About me",
                            "onUpdate:modelValue":
                              t[15] ||
                              (t[15] = (e) => (o.userDetails.aboutMe = e)),
                            disabled: o.inputState,
                          },
                          null,
                          8,
                          ["disabled"]
                        ),
                        [[i["C"], o.userDetails.aboutMe]]
                      ),
                    ]),
                  ]),
                  Object(i["h"])("div", Zd, [
                    Object(i["h"])(
                      "button",
                      {
                        type: "submit",
                        class: "btn btn-success mt-5 ",
                        onClick:
                          t[16] ||
                          (t[16] = (...t) =>
                            e.handleuserDetailsUpDate &&
                            e.handleuserDetailsUpDate(...t)),
                      },
                      "Save"
                    ),
                  ]),
                ],
                32
              ),
            ]),
            Object(i["h"])("div", Wd, [
              Object(i["h"])("div", Kd, [
                Object(i["h"])(
                  "img",
                  { src: n.handleUserProfilePic(a.userName), alt: "" },
                  null,
                  8,
                  ["src"]
                ),
                Object(i["h"])("span", Qd, [
                  Object(i["h"])(c, {
                    icon: ["fas", "folder-plus"],
                    onClick:
                      t[18] ||
                      (t[18] = (e) => n.handleImageUpdate("profileImage")),
                  }),
                  Xd,
                ]),
              ]),
              Object(i["h"])("div", er, [
                Object(i["h"])("div", null, [
                  Object(i["h"])(
                    "h5",
                    null,
                    Object(i["z"])(n.userData.friends.length),
                    1
                  ),
                  Object(i["h"])(
                    "span",
                    {
                      class: "description",
                      onClick:
                        t[19] ||
                        (t[19] = (t) =>
                          e.$emit("toggleView", "displayFriends")),
                    },
                    [
                      Object(i["h"])(
                        d,
                        {
                          to: {
                            name: "Friends",
                            params: {
                              userName: n.userData.userName,
                              Timeline: "Friends",
                            },
                          },
                        },
                        { default: Object(i["F"])(() => [tr]), _: 1 },
                        8,
                        ["to"]
                      ),
                    ]
                  ),
                ]),
                Object(i["h"])("div", null, [
                  Object(i["h"])(
                    "h5",
                    null,
                    Object(i["z"])(n.userData.photos.length),
                    1
                  ),
                  Object(i["h"])(
                    "span",
                    {
                      class: "description",
                      onClick:
                        t[20] ||
                        (t[20] = (t) => e.$emit("toggleView", "displayPhotos")),
                    },
                    [
                      Object(i["h"])(
                        d,
                        {
                          to: {
                            name: "Timeline",
                            params: {
                              userName: n.userData.userName,
                              Timeline: "Friends",
                            },
                          },
                        },
                        { default: Object(i["F"])(() => [ar]), _: 1 },
                        8,
                        ["to"]
                      ),
                    ]
                  ),
                ]),
                Object(i["h"])("div", null, [
                  Object(i["h"])(
                    "h5",
                    null,
                    Object(i["z"])(n.userData.posts.length),
                    1
                  ),
                  Object(i["h"])(
                    "span",
                    {
                      class: "description",
                      onClick:
                        t[21] ||
                        (t[21] = (t) => e.$emit("toggleView", "displayPosts")),
                    },
                    [
                      Object(i["h"])(
                        d,
                        {
                          to: {
                            name: "Timeline",
                            params: {
                              userName: n.userData.userName,
                              Timeline: "Friends",
                            },
                          },
                        },
                        { default: Object(i["F"])(() => [ir]), _: 1 },
                        8,
                        ["to"]
                      ),
                    ]
                  ),
                ]),
              ]),
              Object(i["h"])("div", sr, [
                Object(i["h"])(
                  "h5",
                  null,
                  Object(i["z"])(n.userData.userName),
                  1
                ),
                or,
                Object(i["h"])("span", null, Object(i["z"])(n.userData.age), 1),
              ]),
              Object(i["h"])("div", nr, [
                Object(i["h"])("h5", null, Object(i["z"])(n.userData.city), 1),
                cr,
                Object(i["h"])(
                  "span",
                  null,
                  Object(i["z"])(n.userData.country),
                  1
                ),
              ]),
              Object(i["h"])("div", dr, [
                Object(i["h"])(
                  "h5",
                  null,
                  Object(i["z"])(n.userData.occupation),
                  1
                ),
                rr,
                br,
                Object(i["h"])(
                  "span",
                  null,
                  Object(i["z"])(n.userData.education),
                  1
                ),
              ]),
              fr,
              Object(i["h"])("div", lr, [
                Object(i["h"])(
                  "span",
                  null,
                  Object(i["z"])(n.userData.aboutMe),
                  1
                ),
              ]),
            ]),
          ]),
        ])
      );
    }
    var mr = {
      name: "userProfile",
      props: ["userName"],
      data() {
        return {
          userDetails: {
            userName: "Guest",
            userId: "",
            emailAddress: "",
            firstName: "Guest",
            lastName: "Guest",
            address: "Guest",
            emailAddress: "Guest@gmail.com",
            postCode: "Guest",
            country: "Guest",
            city: "Guest",
            aboutMe: "Guest",
            password: "Guest",
            occupation: "Guest",
            education: "Guest",
            age: "27",
            messages: [],
            posts: { Guest: { likes: ["Guest"], unLikes: ["Guest"] } },
            followers: ["Guest"],
            following: ["Guest"],
            friends: ["Guest"],
            userProfileImage: "",
            userCoverImage: "",
            posterComment: "",
            comments: { likes: [], unLikes: [] },
          },
          inputState: !0,
          userCoverImage: "",
          userProfileImage: "",
        };
      },
      mounted() {
        this.loadData("load");
      },
      beforeUnmount() {
        this.loadData("unLoad");
      },
      methods: {
        loadData(e) {
          (this.userDetails = { ...this.$store.state.users[this.userName] }),
            "load" === e
              ? this.$store.dispatch("handleDisplayFunctions", {
                  activeLink: "userProfile",
                  params: "activeLink",
                })
              : this.$store.dispatch("handleDisplayFunctions", {
                  activeLink: "",
                  params: "activeLink",
                }),
            this.$store.dispatch("handleDisplayFunctions", {
              activeLink: "userProfile",
              params: "activeLink",
            });
        },
        getLocalCoverImgAddress(e) {
          (this.userCoverImage = URL.createObjectURL(e.target.files[0])),
            this.$store.dispatch("handleAccountUpdate", {
              params: "updateCoverImage",
              userCoverImage: this.userCoverImage,
              userName: this.userName,
            }),
            this.$store.dispatch("handleAddImageVideo", {
              userName: this.userName,
              imageUrl: this.userCoverImage,
              imageId: xi["a"].v1(),
              fileType: "image",
            });
        },
        getLocalProfileImgAddress(e) {
          (this.userProfileImage = URL.createObjectURL(e.target.files[0])),
            this.$store.dispatch("handleAccountUpdate", {
              params: "updateProfileImage",
              userProfileImage: this.userProfileImage,
              userName: this.userName,
            }),
            this.$store.dispatch("handleAddImageVideo", {
              userName: this.userName,
              imageUrl: this.userProfileImage,
              imageId: xi["a"].v1(),
              fileType: "image",
            });
        },
        handleEnableEdit() {
          this.inputState = !1;
        },
        handleImageUpdate(e) {
          "profileImage" === e
            ? this.$refs.uploadProfileImage.click()
            : this.$refs.uploadCoverImage.click();
        },
        handleUserDetailsUpDate() {
          this.userDetails.userName.length &&
            (this.userDetails.userName !== this.userData.userName
              ? (this.$store.dispatch("handleAccountUpdate", {
                  params: "updateUserName",
                  userName: this.userName,
                  userDetails: this.userDetails,
                }),
                this.$router.push({
                  name: "userProfile",
                  params: { userName: this.userDetails.userName },
                }))
              : this.$store.dispatch("handleAccountUpdate", {
                  params: "otherDetails",
                  userName: this.userName,
                  userDetails: this.userDetails,
                }),
            (this.inputState = !0));
        },
        handleUserProfilePic(e) {
          return void 0 !== this.$store.state.users[e].userProfileImage &&
            this.$store.state.users[e].userProfileImage.length
            ? this.$store.state.users[e].userProfileImage
            : "https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/512x512/plain/user.png";
        },
        HandleUserCoverImage() {
          if (void 0 !== this.userData.userCoverImage)
            return `background-image:url(${this.userData.userCoverImage})`;
        },
      },
      computed: {
        userData() {
          const e = this.$store.state.users[this.userName];
          return e;
        },
      },
    };
    const hr = Pi()(mr, [["render", ur]]);
    var pr = hr;
    const Nr = [
        {
          path: "/login",
          name: "Login",
          component: () => Promise.resolve().then(a.bind(null, "fe61")),
        },
        {
          path: "/",
          name: "Login",
          component: () => Promise.resolve().then(a.bind(null, "fe61")),
        },
        { path: "/Home", name: "Home", component: fs["default"] },
        {
          path: "/Newsfeed",
          name: "Newsfeed",
          component: () => Promise.resolve().then(a.bind(null, "bb51")),
        },
        {
          path: "/:userName/Timeline",
          name: "Timeline",
          component: fd,
          props: !0,
        },
        {
          path: "/Home/:userName",
          name: "userProfile",
          component: pr,
          props: !0,
        },
        {
          path: "/:userName/messages",
          name: "Messages",
          component: () => a.e("Messages").then(a.bind(null, "eaad")),
          props: !0,
        },
        {
          path: "/:userName/friends",
          name: "Friends",
          component: () => a.e("Friends").then(a.bind(null, "6c40")),
          props: !0,
        },
        { path: "/:catchAll(.*)", name: bs, component: bs },
      ],
      yr = Object(ss["a"])({ history: Object(ss["b"])("/"), routes: Nr });
    var vr = yr,
      Or = a("5502"),
      jr = Object(Or["a"])({
        state: {
          userData: {
            userName: "Guest",
            emailAddress: "",
            password: "",
            firstName: "",
            lastName: "",
            gender: "",
            address: "",
            postCode: "",
            country: "",
            city: "",
            aboutMe: "",
            posts: [],
            followers: [],
            following: [],
            friends: [],
            age: "",
            education: "",
            videos: [],
            photos: [],
            messages: {},
            messageStatus: {},
            notifications: {},
            occupation: "",
            status: "online",
            activities: {},
            userCoverImage: a("8c34"),
            userId: "421e0e80-e3f9-11eb-9bd2-1f6ecf431b77",
            userProfileImage: a("2d52"),
          },
          displayFunctions: {
            navCollapsed: !1,
            newAccount: !1,
            loginPageUnmounted: !1,
            displayClickedImage: void 0,
            activeLink: "Home",
            displayMessage: { userName: "" },
            footerOnScreen: !1,
            photosCompOnScreen: !1,
            componentMounted: "",
            suspendMessageUpdate: !1,
            pageReLoad: !1,
            wihteBackgroundLogin: !0,
          },
          user: {
            Ruby: {
              userName: "Ruby",
              emailAddress: "Ruby@email.com",
              password: "somedia",
              firstName: "Ruby",
              lastName: "Jones",
              gender: "Female",
              address: "",
              postCode: "",
              country: "",
              city: "",
              aboutMe: "",
              posts: [],
              followers: [],
              following: [],
              friends: [],
              age: "",
              education: "",
              videos: [],
              photos: [],
              messages: {},
              messageStatus: {},
              notifications: {},
              occupation: "",
              status: "online",
              activities: {
                "964fa440-db3a-11eb-af32-47b0df65ae76": {
                  userName: "Ruby",
                  activity: "Created account",
                  activityDate: 1625233024132,
                  activityId: "964fa440-db3a-11eb-af32-47b0df65ae76",
                },
              },
              userCoverImage: "/img/defaultBg.2793204e.jpg",
              userId: "964f7d30-db3a-11eb-af32-47b0df65ae76",
              userProfileImage: "/img/User.de2ba6b9.png",
            },
          },
          users: {
            Carter: {
              userName: "Carter",
              emailAddress: "carter@email.com",
              password: "somedia",
              firstName: " Colton ",
              lastName: " Maverick ",
              gender: "Male",
              address: "",
              postCode: "",
              country: "",
              city: "",
              aboutMe: "",
              posts: [],
              followers: [],
              following: [],
              friends: [
                { userName: "Ethan" },
                { userName: "Ava" },
                { userName: "Ella" },
                { userName: "Lily" },
                { userName: "Sophie" },
              ],
              age: "",
              education: "",
              videos: [
                {
                  videoUrl: "",
                  videoId: "a55450b0-e0b9-11eb-b036-69cc37af9c61",
                  videoAutoplay: !1,
                },
              ],
              photos: [
                {
                  imageUrl: a("7037"),
                  imageId: "e595d480-e0bb-11eb-bbed-5fb8923dc3e7",
                },
              ],
              messages: {
                Mia: {
                  "34ff7430-df4b-11eb-836f-59a9e97a569e": {
                    userName: "Mia",
                    messageId: "34ff7430-df4b-11eb-836f-59a9e97a569e",
                    message: "hi",
                    messageDate: 1625679966963,
                    messageStatus: "Read",
                  },
                  "47573040-e0b9-11eb-b036-69cc37af9c61": {
                    userName: "Carter",
                    messageId: "47573040-e0b9-11eb-b036-69cc37af9c61",
                    message: "hello how are doing",
                    messageDate: 1625837193540,
                    messageStatus: "sent",
                  },
                },
                Ethan: {
                  "52ca18c0-e0b9-11eb-b036-69cc37af9c61": {
                    userName: "Carter",
                    messageId: "52ca18c0-e0b9-11eb-b036-69cc37af9c61",
                    message: "hello,boss",
                    messageDate: 1625837212748,
                    messageStatus: "sent",
                  },
                },
              },
              messageStatus: {
                Mia: {
                  friendMessaged: "Mia",
                  userName: "Carter",
                  messageOnScreen: "off",
                  messageViewStatus: "read",
                  messageDate: 1625837193541,
                  showMessage: !1,
                },
                Ethan: {
                  friendMessaged: "Ethan",
                  userName: "Carter",
                  messageOnScreen: "off",
                  messageViewStatus: "Read",
                  messageDate: 1625837229240,
                  showMessage: !0,
                },
              },
              notifications: {
                "2dc088b0-dceb-11eb-b872-29eca492d404": {
                  userName: "Lily",
                  friendUserName: "Carter",
                  notificationId: "2dc088b0-dceb-11eb-b872-29eca492d404",
                  notificationType: "friend request",
                  notificationStatus: "Read",
                  notificationDate: 1625418820795,
                },
                "f2f49bb0-df40-11eb-a210-09083f776f3d": {
                  userName: "Carter",
                  posterUserName: "Carter",
                  notificationId: "f2f49bb0-df40-11eb-a210-09083f776f3d",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625675561195,
                },
                "22770380-df43-11eb-a210-09083f776f3d": {
                  userName: "Mia",
                  posterUserName: "Carter",
                  notificationId: "22770380-df43-11eb-a210-09083f776f3d",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625676499896,
                },
                "34ffc250-df4b-11eb-836f-59a9e97a569e": {
                  userName: "Mia",
                  friendUserName: "Carter",
                  notificationId: "34ffc250-df4b-11eb-836f-59a9e97a569e",
                  notificationType: "message",
                  notificationStatus: "Read",
                  notificationDate: 1625679966965,
                },
                "86b5b9a0-e064-11eb-8d8d-bf9aae01f450": {
                  userName: "Sophie",
                  posterUserName: "Carter",
                  notificationId: "86b5b9a0-e064-11eb-8d8d-bf9aae01f450",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625800792634,
                },
                "86b5e0b1-e064-11eb-8d8d-bf9aae01f450": {
                  userName: "Sophie",
                  posterUserName: "Carter",
                  commenterUserName: "Mia",
                  notificationId: "86b5e0b1-e064-11eb-8d8d-bf9aae01f450",
                  notificationType: "likedComment",
                  notificationStatus: "unRead",
                  notificationDate: 1625800792635,
                },
                "a65f0690-e090-11eb-bcb8-25b2107d0c08": {
                  userName: "Ava",
                  friendUserName: "Carter",
                  notificationId: "a65f0690-e090-11eb-bcb8-25b2107d0c08",
                  notificationType: "friend request",
                  notificationStatus: "Read",
                  notificationDate: 1625819743609,
                },
                "0c150e90-e0ae-11eb-a170-d99d0616bfb4": {
                  userName: "Ethan",
                  friendUserName: "Carter",
                  notificationId: "0c150e90-e0ae-11eb-a170-d99d0616bfb4",
                  notificationType: "friend request",
                  notificationStatus: "Read",
                  notificationDate: 1625832369657,
                },
                "f0654780-e0af-11eb-90ca-19effd8b5a00": {
                  userName: "Ethan",
                  posterUserName: "Carter",
                  notificationId: "f0654780-e0af-11eb-90ca-19effd8b5a00",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625833182200,
                },
                "f0656e91-e0af-11eb-90ca-19effd8b5a00": {
                  userName: "Ethan",
                  posterUserName: "Carter",
                  commenterUserName: "Mia",
                  notificationId: "f0656e91-e0af-11eb-90ca-19effd8b5a00",
                  notificationType: "likedComment",
                  notificationStatus: "unRead",
                  notificationDate: 1625833182201,
                },
                "c6361e70-e0b5-11eb-b9c1-cfb72beca659": {
                  userName: "Ella",
                  friendUserName: "Carter",
                  notificationId: "c6361e70-e0b5-11eb-b9c1-cfb72beca659",
                  notificationType: "friend request",
                  notificationStatus: "Read",
                  notificationDate: 1625835688407,
                },
                "0a5b9dc0-e0b9-11eb-b036-69cc37af9c61": {
                  userName: "Carter",
                  posterUserName: "Carter",
                  commenterUserName: "Mia",
                  notificationId: "0a5b9dc0-e0b9-11eb-b036-69cc37af9c61",
                  notificationType: "likedComment",
                  notificationStatus: "unRead",
                  notificationDate: 1625837091228,
                },
                "1c518f40-e0bd-11eb-8787-59040f6b2cc8": {
                  userName: "Ruby",
                  posterUserName: "Carter",
                  notificationId: "1c518f40-e0bd-11eb-8787-59040f6b2cc8",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625838839348,
                },
                "1c51b650-e0bd-11eb-8787-59040f6b2cc8": {
                  userName: "Ruby",
                  posterUserName: "Carter",
                  notificationId: "1c51b650-e0bd-11eb-8787-59040f6b2cc8",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625838839350,
                },
                "9992ced0-e0c0-11eb-85f3-797226efa932": {
                  userName: "Sophie",
                  posterUserName: "Ruby",
                  notificationId: "9992ced0-e0c0-11eb-85f3-797226efa932",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625840337981,
                },
                "99931cf0-e0c0-11eb-85f3-797226efa932": {
                  userName: "Sophie",
                  posterUserName: "Ruby",
                  notificationId: "99931cf0-e0c0-11eb-85f3-797226efa932",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625840337983,
                },
                "bb25c750-e0c0-11eb-85f3-797226efa932": {
                  userName: "Sophie",
                  posterUserName: "Ruby",
                  notificationId: "bb25c750-e0c0-11eb-85f3-797226efa932",
                  notificationType: "comment",
                  notificationStatus: "unRead",
                  notificationDate: 1625840394309,
                },
                "bceacfe0-e0c0-11eb-85f3-797226efa932": {
                  userName: "Sophie",
                  posterUserName: "Carter",
                  notificationId: "bceacfe0-e0c0-11eb-85f3-797226efa932",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625840397278,
                },
                "bceb1e00-e0c0-11eb-85f3-797226efa932": {
                  userName: "Sophie",
                  posterUserName: "Carter",
                  notificationId: "bceb1e00-e0c0-11eb-85f3-797226efa932",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625840397280,
                },
                "cae26771-e0c0-11eb-85f3-797226efa932": {
                  userName: "Sophie",
                  posterUserName: "Carter",
                  notificationId: "cae26771-e0c0-11eb-85f3-797226efa932",
                  notificationType: "comment",
                  notificationStatus: "unRead",
                  notificationDate: 1625840420711,
                },
                "cf0a8d50-e0c0-11eb-85f3-797226efa932": {
                  userName: "Sophie",
                  posterUserName: "Ethan",
                  notificationId: "cf0a8d50-e0c0-11eb-85f3-797226efa932",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625840427685,
                },
                "cf0a8d51-e0c0-11eb-85f3-797226efa932": {
                  userName: "Sophie",
                  posterUserName: "Ethan",
                  notificationId: "cf0a8d51-e0c0-11eb-85f3-797226efa932",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625840427685,
                },
                "d0b53010-e0c0-11eb-85f3-797226efa932": {
                  userName: "Sophie",
                  posterUserName: "Ava",
                  notificationId: "d0b53010-e0c0-11eb-85f3-797226efa932",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625840430481,
                },
                "d0b57e30-e0c0-11eb-85f3-797226efa932": {
                  userName: "Sophie",
                  posterUserName: "Ava",
                  notificationId: "d0b57e30-e0c0-11eb-85f3-797226efa932",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625840430483,
                },
                "fc9c8c40-e0c1-11eb-85f3-797226efa932": {
                  userName: "Sophie",
                  notificationId: "fc9c8c40-e0c1-11eb-85f3-797226efa932",
                  notificationType: "post",
                  notificationStatus: "unRead",
                  notificationDate: 1625840933636,
                },
                "0bdf8f90-e0c2-11eb-85f3-797226efa932": {
                  userName: "Sophie",
                  posterUserName: "Sophie",
                  notificationId: "0bdf8f90-e0c2-11eb-85f3-797226efa932",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625840959241,
                },
                "0bdfb6a0-e0c2-11eb-85f3-797226efa932": {
                  userName: "Sophie",
                  posterUserName: "Sophie",
                  notificationId: "0bdfb6a0-e0c2-11eb-85f3-797226efa932",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625840959242,
                },
                "caee0bf0-e0db-11eb-907b-171d7592562f": {
                  userName: "Chloe",
                  posterUserName: "Carter",
                  notificationId: "caee0bf0-e0db-11eb-907b-171d7592562f",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625852017199,
                },
                "caee3300-e0db-11eb-907b-171d7592562f": {
                  userName: "Chloe",
                  posterUserName: "Carter",
                  notificationId: "caee3300-e0db-11eb-907b-171d7592562f",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625852017200,
                },
                "d68c9850-e0db-11eb-907b-171d7592562f": {
                  userName: "Chloe",
                  posterUserName: "Carter",
                  notificationId: "d68c9850-e0db-11eb-907b-171d7592562f",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625852036693,
                },
                "d68c9851-e0db-11eb-907b-171d7592562f": {
                  userName: "Chloe",
                  posterUserName: "Carter",
                  notificationId: "d68c9851-e0db-11eb-907b-171d7592562f",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625852036693,
                },
                "827d0e00-e0dd-11eb-907b-171d7592562f": {
                  userName: "Chloe",
                  friendUserName: "Carter",
                  notificationId: "827d0e00-e0dd-11eb-907b-171d7592562f",
                  notificationType: "friend request",
                  notificationStatus: "unRead",
                  notificationDate: 1625852754656,
                },
                "83bc7a80-e19b-11eb-871f-0f966330432a": {
                  userName: "Ada",
                  friendUserName: "Carter",
                  notificationId: "83bc7a80-e19b-11eb-871f-0f966330432a",
                  notificationType: "friend request",
                  notificationStatus: "unRead",
                  notificationDate: 1625934361128,
                },
                "ef2d2380-e19d-11eb-86e8-11fcf2392733": {
                  userName: "Olive",
                  posterUserName: "Carter",
                  notificationId: "ef2d2380-e19d-11eb-86e8-11fcf2392733",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625935400376,
                },
                "ef2d4a90-e19d-11eb-86e8-11fcf2392733": {
                  userName: "Olive",
                  posterUserName: "Carter",
                  notificationId: "ef2d4a90-e19d-11eb-86e8-11fcf2392733",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625935400377,
                },
                "faf69070-e19d-11eb-86e8-11fcf2392733": {
                  userName: "Olive",
                  posterUserName: "Carter",
                  notificationId: "faf69070-e19d-11eb-86e8-11fcf2392733",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625935420151,
                },
                "faf69071-e19d-11eb-86e8-11fcf2392733": {
                  userName: "Olive",
                  posterUserName: "Carter",
                  notificationId: "faf69071-e19d-11eb-86e8-11fcf2392733",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625935420151,
                },
                "d3d72770-e2ab-11eb-8a39-b39ebfa4685e": {
                  userName: "Smith",
                  friendUserName: "Carter",
                  notificationId: "d3d72770-e2ab-11eb-8a39-b39ebfa4685e",
                  notificationType: "friend request",
                  notificationStatus: "unRead",
                  notificationDate: 1626051318631,
                },
                "8fa29610-e32e-11eb-a03f-b542039adbaa": {
                  userName: "Lily",
                  posterUserName: "Smith",
                  notificationId: "8fa29610-e32e-11eb-a03f-b542039adbaa",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1626107468273,
                },
                "8fa2e430-e32e-11eb-a03f-b542039adbaa": {
                  userName: "Lily",
                  posterUserName: "Smith",
                  notificationId: "8fa2e430-e32e-11eb-a03f-b542039adbaa",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1626107468275,
                },
                "9656be00-e32e-11eb-a03f-b542039adbaa": {
                  userName: "Lily",
                  posterUserName: "Liam",
                  notificationId: "9656be00-e32e-11eb-a03f-b542039adbaa",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1626107479520,
                },
                "9656e510-e32e-11eb-a03f-b542039adbaa": {
                  userName: "Lily",
                  posterUserName: "Liam",
                  notificationId: "9656e510-e32e-11eb-a03f-b542039adbaa",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1626107479521,
                },
                "0ceed980-e32f-11eb-a03f-b542039adbaa": {
                  userName: "Lily",
                  notificationId: "0ceed980-e32f-11eb-a03f-b542039adbaa",
                  notificationType: "post",
                  notificationStatus: "unRead",
                  notificationDate: 1626107678488,
                },
              },
              occupation: "",
              status: "online",
              activities: {
                "1b964960-d9c9-11eb-ba8c-e9a262a433df": {
                  userName: "Carter",
                  activity: "Created account",
                  activityDate: 1625074333942,
                  activityId: "1b964960-d9c9-11eb-ba8c-e9a262a433df",
                },
                "c65c3f00-df3f-11eb-a210-09083f776f3d": {
                  userName: "Carter",
                  activity: "logged in",
                  activityDate: 1625675056880,
                  activityId: "c65c3f00-df3f-11eb-a210-09083f776f3d",
                },
                "de4687b1-df3f-11eb-a210-09083f776f3d": {
                  userName: "Carter",
                  posterUserName: "Nova",
                  activity: "liked",
                  activityDate: 1625675097003,
                  activityId: "de4687b1-df3f-11eb-a210-09083f776f3d",
                },
                "e062d800-df3f-11eb-a210-09083f776f3d": {
                  userName: "Carter",
                  posterUserName: "Lily",
                  activity: "liked",
                  activityDate: 1625675100544,
                  activityId: "e062d800-df3f-11eb-a210-09083f776f3d",
                },
                "e2753d41-df3f-11eb-a210-09083f776f3d": {
                  userName: "Carter",
                  posterUserName: "Lily",
                  commenterUserName: "Nova",
                  activity: "likedComment",
                  activityDate: 1625675104020,
                  activityId: "e2753d41-df3f-11eb-a210-09083f776f3d",
                },
                "fac96b50-df3f-11eb-a210-09083f776f3d": {
                  userName: "Carter",
                  posterUserName: "Ivy",
                  activity: "liked",
                  activityDate: 1625675144837,
                  activityId: "fac96b50-df3f-11eb-a210-09083f776f3d",
                },
                "e90d0e21-df40-11eb-a210-09083f776f3d": {
                  userName: "Carter",
                  activity: "posted",
                  activityDate: 1625675544578,
                  activityId: "e90d0e21-df40-11eb-a210-09083f776f3d",
                },
                "f2f49bb2-df40-11eb-a210-09083f776f3d": {
                  userName: "Carter",
                  posterUserName: "Carter",
                  activity: "liked",
                  activityDate: 1625675561195,
                  activityId: "f2f49bb2-df40-11eb-a210-09083f776f3d",
                },
                "44373870-df41-11eb-a210-09083f776f3d": {
                  userName: "Carter",
                  posterUserName: "Nova",
                  activity: "commented",
                  activityDate: 1625675697527,
                  activityId: "44373870-df41-11eb-a210-09083f776f3d",
                },
                "83868e91-e0b8-11eb-a091-bd97fb995f1d": {
                  userName: "Carter",
                  posterUserName: "Ella",
                  activity: "liked",
                  activityDate: 1625836865017,
                  activityId: "83868e91-e0b8-11eb-a091-bd97fb995f1d",
                },
                "aa589b31-e0b8-11eb-a091-bd97fb995f1d": {
                  userName: "Carter",
                  posterUserName: "Ella",
                  activity: "commented",
                  activityDate: 1625836930147,
                  activityId: "aa589b31-e0b8-11eb-a091-bd97fb995f1d",
                },
                "adf71eb1-e0b8-11eb-a091-bd97fb995f1d": {
                  userName: "Carter",
                  posterUserName: "Ethan",
                  activity: "liked",
                  activityDate: 1625836936219,
                  activityId: "adf71eb1-e0b8-11eb-a091-bd97fb995f1d",
                },
                "cfbd3520-e0b8-11eb-a091-bd97fb995f1d": {
                  userName: "Carter",
                  posterUserName: "Ethan",
                  activity: "commented",
                  activityDate: 1625836992882,
                  activityId: "cfbd3520-e0b8-11eb-a091-bd97fb995f1d",
                },
                "0a5b76b0-e0b9-11eb-b036-69cc37af9c61": {
                  userName: "Carter",
                  posterUserName: "Carter",
                  commenterUserName: "Mia",
                  activity: "likedComment",
                  activityDate: 1625837091227,
                  activityId: "0a5b76b0-e0b9-11eb-b036-69cc37af9c61",
                },
                "2565eb20-e0b9-11eb-b036-69cc37af9c61": {
                  friendUserName: "Ethan",
                  userName: "Carter",
                  activity: "Accepted Friend Request",
                  activityDate: 1625837136594,
                  activityId: "2565eb20-e0b9-11eb-b036-69cc37af9c61",
                },
                "27470730-e0b9-11eb-b036-69cc37af9c61": {
                  friendUserName: "Ava",
                  userName: "Carter",
                  activity: "Accepted Friend Request",
                  activityDate: 1625837139747,
                  activityId: "27470730-e0b9-11eb-b036-69cc37af9c61",
                },
                "28207740-e0b9-11eb-b036-69cc37af9c61": {
                  friendUserName: "Ella",
                  userName: "Carter",
                  activity: "Accepted Friend Request",
                  activityDate: 1625837141172,
                  activityId: "28207740-e0b9-11eb-b036-69cc37af9c61",
                },
                "292b7ea0-e0b9-11eb-b036-69cc37af9c61": {
                  friendUserName: "Lily",
                  userName: "Carter",
                  activity: "Accepted Friend Request",
                  activityDate: 1625837142922,
                  activityId: "292b7ea0-e0b9-11eb-b036-69cc37af9c61",
                },
                "2a1e9130-e0b9-11eb-b036-69cc37af9c61": {
                  friendUserName: "Sophie",
                  userName: "Carter",
                  activity: "Accepted Friend Request",
                  activityDate: 1625837144515,
                  activityId: "2a1e9130-e0b9-11eb-b036-69cc37af9c61",
                },
                "a5549ed0-e0b9-11eb-b036-69cc37af9c61": {
                  userName: "Carter",
                  activity: "posted",
                  activityDate: 1625837351229,
                  activityId: "a5549ed0-e0b9-11eb-b036-69cc37af9c61",
                },
                "f52f5c40-e0bb-11eb-bbed-5fb8923dc3e7": {
                  userName: "Carter",
                  posterUserName: "Ava",
                  activity: "liked",
                  activityDate: 1625838344196,
                  activityId: "f52f5c40-e0bb-11eb-bbed-5fb8923dc3e7",
                },
                "f69e0770-e0bb-11eb-bbed-5fb8923dc3e7": {
                  userName: "Carter",
                  posterUserName: "Mia",
                  activity: "liked",
                  activityDate: 1625838346599,
                  activityId: "f69e0770-e0bb-11eb-bbed-5fb8923dc3e7",
                },
                "ffddbc40-e0bb-11eb-bbed-5fb8923dc3e7": {
                  userName: "Carter",
                  posterUserName: "Carter",
                  activity: "commented",
                  activityDate: 1625838362116,
                  activityId: "ffddbc40-e0bb-11eb-bbed-5fb8923dc3e7",
                },
                "63142470-e0bc-11eb-acf8-97f832451a98": {
                  userName: "Carter",
                  activity: "logged in",
                  activityDate: 1625838528567,
                  activityId: "63142470-e0bc-11eb-acf8-97f832451a98",
                },
                "6bb3a1a0-e0bc-11eb-acf8-97f832451a98": {
                  userName: "Carter",
                  posterUserName: "Carter",
                  activity: "liked",
                  activityDate: 1625838543034,
                  activityId: "6bb3a1a0-e0bc-11eb-acf8-97f832451a98",
                },
              },
              userCoverImage: "/img/defaultBg.2793204e.jpg",
              userId: "1b95fb40-d9c9-11eb-ba8c-e9a262a433df",
              userProfileImage: a("7037"),
            },
            Ethan: {
              userName: "Ethan",
              emailAddress: "Ethan@email.com",
              password: "somedia",
              firstName: "Christian ",
              lastName: "Cameron",
              gender: "Male",
              address: "",
              postCode: "",
              country: "",
              city: "",
              aboutMe: "",
              posts: [],
              followers: [{ userName: "Smith" }],
              following: [],
              friends: [
                { userName: "Lily" },
                { userName: "Sophie" },
                { userName: "Carter" },
                { userName: "Olive" },
              ],
              age: "",
              education: "",
              videos: [],
              photos: [
                {
                  imageUrl: a("f80d"),
                  imageId: "c9db35d0-e0ae-11eb-90ca-19effd8b5a00",
                },
                {
                  imageUrl: a("c8d9"),
                  imageId: "7c49a840-e0b0-11eb-90ca-19effd8b5a00",
                },
              ],
              messages: {
                Carter: {
                  "52ca18c0-e0b9-11eb-b036-69cc37af9c61": {
                    userName: "Carter",
                    messageId: "52ca18c0-e0b9-11eb-b036-69cc37af9c61",
                    message: "hello,boss",
                    messageDate: 1625837212748,
                    messageStatus: "sent",
                  },
                },
              },
              messageStatus: {
                Carter: {
                  friendMessaged: "Carter",
                  userName: "Carter",
                  messageOnScreen: !1,
                  messageViewStatus: "unRead",
                  messageDate: 1625837212749,
                  showMessage: !0,
                },
              },
              notifications: {
                "2c082a50-dceb-11eb-b872-29eca492d404": {
                  userName: "Lily",
                  friendUserName: "Ethan",
                  notificationId: "2c082a50-dceb-11eb-b872-29eca492d404",
                  notificationType: "friend request",
                  notificationStatus: "Read",
                  notificationDate: 1625418817909,
                },
                "7f533ec0-e0b0-11eb-90ca-19effd8b5a00": {
                  userName: "Ethan",
                  posterUserName: "Ethan",
                  notificationId: "7f533ec0-e0b0-11eb-90ca-19effd8b5a00",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625833421996,
                },
                "6cc47990-e0b5-11eb-b9c1-cfb72beca659": {
                  userName: "Ella",
                  posterUserName: "Ethan",
                  notificationId: "6cc47990-e0b5-11eb-b9c1-cfb72beca659",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625835538345,
                },
                "6cc4a0a0-e0b5-11eb-b9c1-cfb72beca659": {
                  userName: "Ella",
                  posterUserName: "Ethan",
                  notificationId: "6cc4a0a0-e0b5-11eb-b9c1-cfb72beca659",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625835538346,
                },
                "c6e1eed0-e0b5-11eb-b9c1-cfb72beca659": {
                  userName: "Ella",
                  friendUserName: "Ethan",
                  notificationId: "c6e1eed0-e0b5-11eb-b9c1-cfb72beca659",
                  notificationType: "friend request",
                  notificationStatus: "unRead",
                  notificationDate: 1625835689534,
                },
                "adf6f7a0-e0b8-11eb-a091-bd97fb995f1d": {
                  userName: "Carter",
                  posterUserName: "Ethan",
                  notificationId: "adf6f7a0-e0b8-11eb-a091-bd97fb995f1d",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625836936218,
                },
                "adf71eb0-e0b8-11eb-a091-bd97fb995f1d": {
                  userName: "Carter",
                  posterUserName: "Ethan",
                  notificationId: "adf71eb0-e0b8-11eb-a091-bd97fb995f1d",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625836936219,
                },
                "25661230-e0b9-11eb-b036-69cc37af9c61": {
                  userName: "Carter",
                  friendUserName: "Ethan",
                  notificationId: "25661230-e0b9-11eb-b036-69cc37af9c61",
                  notificationType: "Accepted Friend Request",
                  notificationStatus: "unRead",
                  notificationDate: 1625837136595,
                },
                "52ca3fd0-e0b9-11eb-b036-69cc37af9c61": {
                  userName: "Carter",
                  friendUserName: "Ethan",
                  notificationId: "52ca3fd0-e0b9-11eb-b036-69cc37af9c61",
                  notificationType: "message",
                  notificationStatus: "unRead",
                  notificationDate: 1625837212749,
                },
                "a55477c0-e0b9-11eb-b036-69cc37af9c61": {
                  userName: "Carter",
                  notificationId: "a55477c0-e0b9-11eb-b036-69cc37af9c61",
                  notificationType: "post",
                  notificationStatus: "unRead",
                  notificationDate: 1625837351228,
                },
                "f52f0e20-e0bb-11eb-bbed-5fb8923dc3e7": {
                  userName: "Carter",
                  posterUserName: "Ava",
                  notificationId: "f52f0e20-e0bb-11eb-bbed-5fb8923dc3e7",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625838344194,
                },
                "f52f3530-e0bb-11eb-bbed-5fb8923dc3e7": {
                  userName: "Carter",
                  posterUserName: "Ava",
                  notificationId: "f52f3530-e0bb-11eb-bbed-5fb8923dc3e7",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625838344195,
                },
                "f69de060-e0bb-11eb-bbed-5fb8923dc3e7": {
                  userName: "Carter",
                  posterUserName: "Mia",
                  notificationId: "f69de060-e0bb-11eb-bbed-5fb8923dc3e7",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625838346598,
                },
                "f69de061-e0bb-11eb-bbed-5fb8923dc3e7": {
                  userName: "Carter",
                  posterUserName: "Mia",
                  notificationId: "f69de061-e0bb-11eb-bbed-5fb8923dc3e7",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625838346598,
                },
                "ffdd9531-e0bb-11eb-bbed-5fb8923dc3e7": {
                  userName: "Carter",
                  posterUserName: "Carter",
                  notificationId: "ffdd9531-e0bb-11eb-bbed-5fb8923dc3e7",
                  notificationType: "comment",
                  notificationStatus: "unRead",
                  notificationDate: 1625838362116,
                },
                "6bb30560-e0bc-11eb-acf8-97f832451a98": {
                  userName: "Carter",
                  posterUserName: "Carter",
                  notificationId: "6bb30560-e0bc-11eb-acf8-97f832451a98",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625838543030,
                },
                "6bb37a90-e0bc-11eb-acf8-97f832451a98": {
                  userName: "Carter",
                  posterUserName: "Carter",
                  notificationId: "6bb37a90-e0bc-11eb-acf8-97f832451a98",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625838543033,
                },
                "9992ced0-e0c0-11eb-85f3-797226efa932": {
                  userName: "Sophie",
                  posterUserName: "Ruby",
                  notificationId: "9992ced0-e0c0-11eb-85f3-797226efa932",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625840337981,
                },
                "99931cf0-e0c0-11eb-85f3-797226efa932": {
                  userName: "Sophie",
                  posterUserName: "Ruby",
                  notificationId: "99931cf0-e0c0-11eb-85f3-797226efa932",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625840337983,
                },
                "bb25c750-e0c0-11eb-85f3-797226efa932": {
                  userName: "Sophie",
                  posterUserName: "Ruby",
                  notificationId: "bb25c750-e0c0-11eb-85f3-797226efa932",
                  notificationType: "comment",
                  notificationStatus: "unRead",
                  notificationDate: 1625840394309,
                },
                "bceacfe0-e0c0-11eb-85f3-797226efa932": {
                  userName: "Sophie",
                  posterUserName: "Carter",
                  notificationId: "bceacfe0-e0c0-11eb-85f3-797226efa932",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625840397278,
                },
                "bceb1e00-e0c0-11eb-85f3-797226efa932": {
                  userName: "Sophie",
                  posterUserName: "Carter",
                  notificationId: "bceb1e00-e0c0-11eb-85f3-797226efa932",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625840397280,
                },
                "cae26771-e0c0-11eb-85f3-797226efa932": {
                  userName: "Sophie",
                  posterUserName: "Carter",
                  notificationId: "cae26771-e0c0-11eb-85f3-797226efa932",
                  notificationType: "comment",
                  notificationStatus: "unRead",
                  notificationDate: 1625840420711,
                },
                "cf0a8d50-e0c0-11eb-85f3-797226efa932": {
                  userName: "Sophie",
                  posterUserName: "Ethan",
                  notificationId: "cf0a8d50-e0c0-11eb-85f3-797226efa932",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625840427685,
                },
                "cf0a8d51-e0c0-11eb-85f3-797226efa932": {
                  userName: "Sophie",
                  posterUserName: "Ethan",
                  notificationId: "cf0a8d51-e0c0-11eb-85f3-797226efa932",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625840427685,
                },
                "d0b53010-e0c0-11eb-85f3-797226efa932": {
                  userName: "Sophie",
                  posterUserName: "Ava",
                  notificationId: "d0b53010-e0c0-11eb-85f3-797226efa932",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625840430481,
                },
                "d0b57e30-e0c0-11eb-85f3-797226efa932": {
                  userName: "Sophie",
                  posterUserName: "Ava",
                  notificationId: "d0b57e30-e0c0-11eb-85f3-797226efa932",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625840430483,
                },
                "fc9c8c40-e0c1-11eb-85f3-797226efa932": {
                  userName: "Sophie",
                  notificationId: "fc9c8c40-e0c1-11eb-85f3-797226efa932",
                  notificationType: "post",
                  notificationStatus: "unRead",
                  notificationDate: 1625840933636,
                },
                "0bdf8f90-e0c2-11eb-85f3-797226efa932": {
                  userName: "Sophie",
                  posterUserName: "Sophie",
                  notificationId: "0bdf8f90-e0c2-11eb-85f3-797226efa932",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625840959241,
                },
                "0bdfb6a0-e0c2-11eb-85f3-797226efa932": {
                  userName: "Sophie",
                  posterUserName: "Sophie",
                  notificationId: "0bdfb6a0-e0c2-11eb-85f3-797226efa932",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625840959242,
                },
                "d0949470-e0db-11eb-907b-171d7592562f": {
                  userName: "Chloe",
                  posterUserName: "Ethan",
                  notificationId: "d0949470-e0db-11eb-907b-171d7592562f",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625852026679,
                },
                "d0949471-e0db-11eb-907b-171d7592562f": {
                  userName: "Chloe",
                  posterUserName: "Ethan",
                  notificationId: "d0949471-e0db-11eb-907b-171d7592562f",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625852026679,
                },
                "8348e980-e0dd-11eb-907b-171d7592562f": {
                  userName: "Chloe",
                  friendUserName: "Ethan",
                  notificationId: "8348e980-e0dd-11eb-907b-171d7592562f",
                  notificationType: "friend request",
                  notificationStatus: "unRead",
                  notificationDate: 1625852755992,
                },
                "8486f670-e19b-11eb-871f-0f966330432a": {
                  userName: "Ada",
                  friendUserName: "Ethan",
                  notificationId: "8486f670-e19b-11eb-871f-0f966330432a",
                  notificationType: "friend request",
                  notificationStatus: "unRead",
                  notificationDate: 1625934362455,
                },
                "f59fd5a0-e19d-11eb-86e8-11fcf2392733": {
                  userName: "Olive",
                  posterUserName: "Ethan",
                  notificationId: "f59fd5a0-e19d-11eb-86e8-11fcf2392733",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625935411194,
                },
                "f59fd5a1-e19d-11eb-86e8-11fcf2392733": {
                  userName: "Olive",
                  posterUserName: "Ethan",
                  notificationId: "f59fd5a1-e19d-11eb-86e8-11fcf2392733",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625935411194,
                },
                "2079aee1-e19e-11eb-86e8-11fcf2392733": {
                  userName: "Olive",
                  friendUserName: "Ethan",
                  notificationId: "2079aee1-e19e-11eb-86e8-11fcf2392733",
                  notificationType: "Accepted Friend Request",
                  notificationStatus: "unRead",
                  notificationDate: 1625935483086,
                },
                "77d296c0-e26b-11eb-af05-7d0898d50a19": {
                  userName: "Olive",
                  notificationId: "77d296c0-e26b-11eb-af05-7d0898d50a19",
                  notificationType: "post",
                  notificationStatus: "unRead",
                  notificationDate: 1626023676460,
                },
                "8210cfd0-e26b-11eb-af05-7d0898d50a19": {
                  userName: "Olive",
                  posterUserName: "Olive",
                  notificationId: "8210cfd0-e26b-11eb-af05-7d0898d50a19",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1626023693645,
                },
                "8210f6e0-e26b-11eb-af05-7d0898d50a19": {
                  userName: "Olive",
                  posterUserName: "Olive",
                  notificationId: "8210f6e0-e26b-11eb-af05-7d0898d50a19",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1626023693646,
                },
                "c3d5b620-e2ab-11eb-8a39-b39ebfa4685e": {
                  userName: "Smith",
                  friendUserName: "Ethan",
                  notificationId: "c3d5b620-e2ab-11eb-8a39-b39ebfa4685e",
                  notificationType: "follow",
                  notificationStatus: "unRead",
                  notificationDate: 1626051291778,
                },
                "8fa29610-e32e-11eb-a03f-b542039adbaa": {
                  userName: "Lily",
                  posterUserName: "Smith",
                  notificationId: "8fa29610-e32e-11eb-a03f-b542039adbaa",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1626107468273,
                },
                "8fa2e430-e32e-11eb-a03f-b542039adbaa": {
                  userName: "Lily",
                  posterUserName: "Smith",
                  notificationId: "8fa2e430-e32e-11eb-a03f-b542039adbaa",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1626107468275,
                },
                "9656be00-e32e-11eb-a03f-b542039adbaa": {
                  userName: "Lily",
                  posterUserName: "Liam",
                  notificationId: "9656be00-e32e-11eb-a03f-b542039adbaa",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1626107479520,
                },
                "9656e510-e32e-11eb-a03f-b542039adbaa": {
                  userName: "Lily",
                  posterUserName: "Liam",
                  notificationId: "9656e510-e32e-11eb-a03f-b542039adbaa",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1626107479521,
                },
                "0ceed980-e32f-11eb-a03f-b542039adbaa": {
                  userName: "Lily",
                  notificationId: "0ceed980-e32f-11eb-a03f-b542039adbaa",
                  notificationType: "post",
                  notificationStatus: "unRead",
                  notificationDate: 1626107678488,
                },
              },
              occupation: "",
              status: "online",
              activities: {
                "4eb37610-d9c9-11eb-ba8c-e9a262a433df": {
                  userName: "Ethan",
                  activity: "Created account",
                  activityDate: 1625074419697,
                  activityId: "4eb37610-d9c9-11eb-ba8c-e9a262a433df",
                },
                "e994cfe0-e0ad-11eb-a170-d99d0616bfb4": {
                  userName: "Ethan",
                  activity: "logged in",
                  activityDate: 1625832311774,
                  activityId: "e994cfe0-e0ad-11eb-a170-d99d0616bfb4",
                },
                "f9941e50-e0ad-11eb-a170-d99d0616bfb4": {
                  friendUserName: "Lily",
                  userName: "Ethan",
                  activity: "Accepted Friend Request",
                  activityDate: 1625832338613,
                  activityId: "f9941e50-e0ad-11eb-a170-d99d0616bfb4",
                },
                "041f65f0-e0ae-11eb-a170-d99d0616bfb4": {
                  userName: "Ethan",
                  friendUserName: "Logan",
                  activity: "Friend request",
                  activityDate: 1625832356303,
                  activityId: "041f65f0-e0ae-11eb-a170-d99d0616bfb4",
                },
                "0b0154a1-e0ae-11eb-a170-d99d0616bfb4": {
                  userName: "Ethan",
                  friendUserName: "Liam",
                  activity: "Friend request",
                  activityDate: 1625832367850,
                  activityId: "0b0154a1-e0ae-11eb-a170-d99d0616bfb4",
                },
                "0c150e91-e0ae-11eb-a170-d99d0616bfb4": {
                  userName: "Ethan",
                  friendUserName: "Carter",
                  activity: "Friend request",
                  activityDate: 1625832369657,
                  activityId: "0c150e91-e0ae-11eb-a170-d99d0616bfb4",
                },
                "0f779a81-e0ae-11eb-a170-d99d0616bfb4": {
                  userName: "Ethan",
                  friendUserName: "Olive",
                  activity: "Friend request",
                  activityDate: 1625832375336,
                  activityId: "0f779a81-e0ae-11eb-a170-d99d0616bfb4",
                },
                "7cc29e40-e0af-11eb-90ca-19effd8b5a00": {
                  userName: "Ethan",
                  posterUserName: "Ava",
                  activity: "liked",
                  activityDate: 1625832988195,
                  activityId: "7cc29e40-e0af-11eb-90ca-19effd8b5a00",
                },
                "8f0a7d20-e0af-11eb-90ca-19effd8b5a00": {
                  userName: "Ethan",
                  posterUserName: "Ava",
                  activity: "commented",
                  activityDate: 1625833018866,
                  activityId: "8f0a7d20-e0af-11eb-90ca-19effd8b5a00",
                },
                "92948e42-e0af-11eb-90ca-19effd8b5a00": {
                  userName: "Ethan",
                  posterUserName: "Mia",
                  activity: "liked",
                  activityDate: 1625833024804,
                  activityId: "92948e42-e0af-11eb-90ca-19effd8b5a00",
                },
                "abf80971-e0af-11eb-90ca-19effd8b5a00": {
                  userName: "Ethan",
                  posterUserName: "Mia",
                  activity: "commented",
                  activityDate: 1625833067399,
                  activityId: "abf80971-e0af-11eb-90ca-19effd8b5a00",
                },
                "f0656e90-e0af-11eb-90ca-19effd8b5a00": {
                  userName: "Ethan",
                  posterUserName: "Carter",
                  commenterUserName: "Mia",
                  activity: "likedComment",
                  activityDate: 1625833182201,
                  activityId: "f0656e90-e0af-11eb-90ca-19effd8b5a00",
                },
                "f11eac71-e0af-11eb-90ca-19effd8b5a00": {
                  userName: "Ethan",
                  posterUserName: "Carter",
                  activity: "liked",
                  activityDate: 1625833183415,
                  activityId: "f11eac71-e0af-11eb-90ca-19effd8b5a00",
                },
                "f40e7960-e0af-11eb-90ca-19effd8b5a00": {
                  userName: "Ethan",
                  posterUserName: "Nova",
                  activity: "liked",
                  activityDate: 1625833188342,
                  activityId: "f40e7960-e0af-11eb-90ca-19effd8b5a00",
                },
                "fa02d3c2-e0af-11eb-90ca-19effd8b5a00": {
                  userName: "Ethan",
                  posterUserName: "Nova",
                  activity: "commented",
                  activityDate: 1625833198332,
                  activityId: "fa02d3c2-e0af-11eb-90ca-19effd8b5a00",
                },
                "00d5a740-e0b0-11eb-90ca-19effd8b5a00": {
                  userName: "Ethan",
                  activity: "posted",
                  activityDate: 1625833209780,
                  activityId: "00d5a740-e0b0-11eb-90ca-19effd8b5a00",
                },
                "7f5365d0-e0b0-11eb-90ca-19effd8b5a00": {
                  userName: "Ethan",
                  posterUserName: "Ethan",
                  activity: "liked",
                  activityDate: 1625833421997,
                  activityId: "7f5365d0-e0b0-11eb-90ca-19effd8b5a00",
                },
                "ff834130-e0b0-11eb-9f24-351dd7c3fe0f": {
                  friendUserName: "Sophie",
                  userName: "Ethan",
                  activity: "Accepted Friend Request",
                  activityDate: 1625833637059,
                  activityId: "ff834130-e0b0-11eb-9f24-351dd7c3fe0f",
                },
              },
              userCoverImage: "/img/defaultBg.2793204e.jpg",
              userId: "4eb300e0-d9c9-11eb-ba8c-e9a262a433df",
              userProfileImage: a("f80d"),
            },
            Josh: {
              userName: "Josh",
              emailAddress: "josh@email.com",
              password: "somedia",
              firstName: "Joseph",
              lastName: "Roman",
              gender: "Male",
              address: "",
              postCode: "",
              country: "",
              city: "",
              aboutMe: "",
              posts: [],
              followers: [{ userName: "Smith" }],
              following: [],
              friends: [],
              age: "",
              education: "",
              videos: [
                {
                  videoUrl:
                    "https://player.vimeo.com/external/324296539.sd.mp4?s=806775db4de3140951b439ef4b2a69c8bd91fa0f&profile_id=164&oauth2_token_id=57447761",
                  videoId: "92a3b202-e337-11eb-97fc-8d90948c2e0c",
                  videoAutoplay: !1,
                },
              ],
              photos: [
                {
                  imageUrl: a("d975"),
                  imageId: "3b557ba0-e332-11eb-97fc-8d90948c2e0c",
                },
              ],
              messages: {},
              messageStatus: {},
              notifications: {
                "2aae1890-dceb-11eb-b872-29eca492d404": {
                  userName: "Lily",
                  friendUserName: "Josh",
                  notificationId: "2aae1890-dceb-11eb-b872-29eca492d404",
                  notificationType: "friend request",
                  notificationStatus: "unRead",
                  notificationDate: 1625418815641,
                },
                "c7f66c10-e0b5-11eb-b9c1-cfb72beca659": {
                  userName: "Ella",
                  friendUserName: "Josh",
                  notificationId: "c7f66c10-e0b5-11eb-b9c1-cfb72beca659",
                  notificationType: "friend request",
                  notificationStatus: "unRead",
                  notificationDate: 1625835691345,
                },
                "84a32250-e0dd-11eb-907b-171d7592562f": {
                  userName: "Chloe",
                  friendUserName: "Josh",
                  notificationId: "84a32250-e0dd-11eb-907b-171d7592562f",
                  notificationType: "friend request",
                  notificationStatus: "unRead",
                  notificationDate: 1625852758261,
                },
                "85abee70-e19b-11eb-871f-0f966330432a": {
                  userName: "Ada",
                  friendUserName: "Josh",
                  notificationId: "85abee70-e19b-11eb-871f-0f966330432a",
                  notificationType: "friend request",
                  notificationStatus: "unRead",
                  notificationDate: 1625934364375,
                },
                "c30ff520-e2ab-11eb-8a39-b39ebfa4685e": {
                  userName: "Smith",
                  friendUserName: "Josh",
                  notificationId: "c30ff520-e2ab-11eb-8a39-b39ebfa4685e",
                  notificationType: "follow",
                  notificationStatus: "unRead",
                  notificationDate: 1626051290482,
                },
                "ed70b640-e339-11eb-97fc-8d90948c2e0c": {
                  userName: "Josh",
                  posterUserName: "Josh",
                  notificationId: "ed70b640-e339-11eb-97fc-8d90948c2e0c",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1626112350116,
                },
              },
              occupation: "",
              status: "online",
              activities: {
                "89048200-d9c9-11eb-ba8c-e9a262a433df": {
                  userName: "Josh",
                  activity: "Created account",
                  activityDate: 1625074517536,
                  activityId: "89048200-d9c9-11eb-ba8c-e9a262a433df",
                },
                "2b7267c0-e332-11eb-97fc-8d90948c2e0c": {
                  userName: "Josh",
                  activity: "logged in",
                  activityDate: 1626109018172,
                  activityId: "2b7267c0-e332-11eb-97fc-8d90948c2e0c",
                },
                "45c991c2-e332-11eb-97fc-8d90948c2e0c": {
                  userName: "Josh",
                  posterUserName: "Lily",
                  activity: "liked",
                  activityDate: 1626109062364,
                  activityId: "45c991c2-e332-11eb-97fc-8d90948c2e0c",
                },
                "482c39e0-e332-11eb-97fc-8d90948c2e0c": {
                  userName: "Josh",
                  posterUserName: "Lily",
                  commenterUserName: "Sebby",
                  activity: "likedComment",
                  activityDate: 1626109066366,
                  activityId: "482c39e0-e332-11eb-97fc-8d90948c2e0c",
                },
                "4a22d9c1-e332-11eb-97fc-8d90948c2e0c": {
                  userName: "Josh",
                  posterUserName: "Smith",
                  activity: "liked",
                  activityDate: 1626109069660,
                  activityId: "4a22d9c1-e332-11eb-97fc-8d90948c2e0c",
                },
                "4ee543d1-e332-11eb-97fc-8d90948c2e0c": {
                  userName: "Josh",
                  posterUserName: "Liam",
                  commenterUserName: "Smith",
                  activity: "likedComment",
                  activityDate: 1626109077645,
                  activityId: "4ee543d1-e332-11eb-97fc-8d90948c2e0c",
                },
                "4fb4efe1-e332-11eb-97fc-8d90948c2e0c": {
                  userName: "Josh",
                  posterUserName: "Liam",
                  commenterUserName: "Sebby",
                  activity: "likedComment",
                  activityDate: 1626109079006,
                  activityId: "4fb4efe1-e332-11eb-97fc-8d90948c2e0c",
                },
                "51b5a1e0-e332-11eb-97fc-8d90948c2e0c": {
                  userName: "Josh",
                  posterUserName: "Olive",
                  activity: "liked",
                  activityDate: 1626109082366,
                  activityId: "51b5a1e0-e332-11eb-97fc-8d90948c2e0c",
                },
                "535ca8e0-e337-11eb-97fc-8d90948c2e0c": {
                  userName: "Josh",
                  activity: "logged in",
                  activityDate: 1626111232622,
                  activityId: "535ca8e0-e337-11eb-97fc-8d90948c2e0c",
                },
                "562d5512-e337-11eb-97fc-8d90948c2e0c": {
                  userName: "Josh",
                  posterUserName: "Sebby",
                  activity: "liked",
                  activityDate: 1626111237345,
                  activityId: "562d5512-e337-11eb-97fc-8d90948c2e0c",
                },
                "92a3d911-e337-11eb-97fc-8d90948c2e0c": {
                  userName: "Josh",
                  activity: "posted",
                  activityDate: 1626111338785,
                  activityId: "92a3d911-e337-11eb-97fc-8d90948c2e0c",
                },
                "ed70dd50-e339-11eb-97fc-8d90948c2e0c": {
                  userName: "Josh",
                  posterUserName: "Josh",
                  activity: "liked",
                  activityDate: 1626112350117,
                  activityId: "ed70dd50-e339-11eb-97fc-8d90948c2e0c",
                },
              },
              userCoverImage: "/img/defaultBg.2793204e.jpg",
              userId: "89045af0-d9c9-11eb-ba8c-e9a262a433df",
              userProfileImage: a("d975"),
            },
            Liam: {
              userName: "Liam",
              emailAddress: "Liam@email.com",
              password: "somedia",
              firstName: "William",
              lastName: "  Santiago ",
              gender: "Male",
              address: "",
              postCode: "",
              country: "",
              city: "",
              aboutMe: "",
              posts: [],
              followers: [{ userName: "Chloe" }],
              following: [],
              friends: [],
              age: "",
              education: "",
              videos: [
                {
                  videoUrl:
                    "https://player.vimeo.com/external/474228517.sd.mp4?s=4664fa60734c8f6826f9dc09801cb8f001e8b06e&profile_id=139&oauth2_token_id=57447761",
                  videoId: "6ab065b0-e26d-11eb-af05-7d0898d50a19",
                  videoAutoplay: !1,
                },
              ],
              photos: [
                {
                  imageUrl: a("5338"),
                  imageId: "7eb97200-e26c-11eb-af05-7d0898d50a19",
                },
              ],
              messages: {},
              messageStatus: {},
              notifications: {
                "0b0154a0-e0ae-11eb-a170-d99d0616bfb4": {
                  userName: "Ethan",
                  friendUserName: "Liam",
                  notificationId: "0b0154a0-e0ae-11eb-a170-d99d0616bfb4",
                  notificationType: "friend request",
                  notificationStatus: "unRead",
                  notificationDate: 1625832367850,
                },
                "c8d70810-e0b5-11eb-b9c1-cfb72beca659": {
                  userName: "Ella",
                  friendUserName: "Liam",
                  notificationId: "c8d70810-e0b5-11eb-b9c1-cfb72beca659",
                  notificationType: "friend request",
                  notificationStatus: "unRead",
                  notificationDate: 1625835692817,
                },
                "58822940-e0c0-11eb-8787-59040f6b2cc8": {
                  userName: "Ruby",
                  friendUserName: "Liam",
                  notificationId: "58822940-e0c0-11eb-8787-59040f6b2cc8",
                  notificationType: "friend request",
                  notificationStatus: "unRead",
                  notificationDate: 1625840228820,
                },
                "857b0bc0-e0dd-11eb-907b-171d7592562f": {
                  userName: "Chloe",
                  friendUserName: "Liam",
                  notificationId: "857b0bc0-e0dd-11eb-907b-171d7592562f",
                  notificationType: "friend request",
                  notificationStatus: "unRead",
                  notificationDate: 1625852759676,
                },
                "937402e0-e0dd-11eb-907b-171d7592562f": {
                  userName: "Chloe",
                  friendUserName: "Liam",
                  notificationId: "937402e0-e0dd-11eb-907b-171d7592562f",
                  notificationType: "follow",
                  notificationStatus: "unRead",
                  notificationDate: 1625852783118,
                },
                "868e5f30-e19b-11eb-871f-0f966330432a": {
                  userName: "Ada",
                  friendUserName: "Liam",
                  notificationId: "868e5f30-e19b-11eb-871f-0f966330432a",
                  notificationType: "friend request",
                  notificationStatus: "unRead",
                  notificationDate: 1625934365859,
                },
                "768914e0-e26d-11eb-af05-7d0898d50a19": {
                  userName: "Liam",
                  posterUserName: "Liam",
                  notificationId: "768914e0-e26d-11eb-af05-7d0898d50a19",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1626024533294,
                },
                "0b8fe730-e2aa-11eb-af05-7d0898d50a19": {
                  userName: "Smith",
                  posterUserName: "Liam",
                  notificationId: "0b8fe730-e2aa-11eb-af05-7d0898d50a19",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1626050553123,
                },
                "35057582-e2aa-11eb-af05-7d0898d50a19": {
                  userName: "Smith",
                  posterUserName: "Liam",
                  commenterUserName: "Smith",
                  notificationId: "35057582-e2aa-11eb-af05-7d0898d50a19",
                  notificationType: "likedComment",
                  notificationStatus: "unRead",
                  notificationDate: 1626050622680,
                },
                "aa591830-e2ac-11eb-ba6f-c5a311c90f7b": {
                  userName: "Sebby",
                  posterUserName: "Liam",
                  notificationId: "aa591830-e2ac-11eb-ba6f-c5a311c90f7b",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1626051678515,
                },
                "9656be00-e32e-11eb-a03f-b542039adbaa": {
                  userName: "Lily",
                  posterUserName: "Liam",
                  notificationId: "9656be00-e32e-11eb-a03f-b542039adbaa",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1626107479520,
                },
                "4ee543d0-e332-11eb-97fc-8d90948c2e0c": {
                  userName: "Josh",
                  posterUserName: "Liam",
                  notificationId: "4ee543d0-e332-11eb-97fc-8d90948c2e0c",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1626109077645,
                },
                "4ee543d2-e332-11eb-97fc-8d90948c2e0c": {
                  userName: "Josh",
                  posterUserName: "Liam",
                  commenterUserName: "Smith",
                  notificationId: "4ee543d2-e332-11eb-97fc-8d90948c2e0c",
                  notificationType: "likedComment",
                  notificationStatus: "unRead",
                  notificationDate: 1626109077645,
                },
                "4fb4efe2-e332-11eb-97fc-8d90948c2e0c": {
                  userName: "Josh",
                  posterUserName: "Liam",
                  commenterUserName: "Sebby",
                  notificationId: "4fb4efe2-e332-11eb-97fc-8d90948c2e0c",
                  notificationType: "likedComment",
                  notificationStatus: "unRead",
                  notificationDate: 1626109079006,
                },
              },
              occupation: "",
              status: "online",
              activities: {
                "b305fca0-d9c9-11eb-ba8c-e9a262a433df": {
                  userName: "Liam",
                  activity: "Created account",
                  activityDate: 1625074588010,
                  activityId: "b305fca0-d9c9-11eb-ba8c-e9a262a433df",
                },
                "c5a5fd60-e26b-11eb-af05-7d0898d50a19": {
                  userName: "Liam",
                  activity: "logged in",
                  activityDate: 1626023807030,
                  activityId: "c5a5fd60-e26b-11eb-af05-7d0898d50a19",
                },
                "d4537771-e26b-11eb-af05-7d0898d50a19": {
                  userName: "Liam",
                  posterUserName: "Olive",
                  activity: "liked",
                  activityDate: 1626023831655,
                  activityId: "d4537771-e26b-11eb-af05-7d0898d50a19",
                },
                "d91b5fc1-e26b-11eb-af05-7d0898d50a19": {
                  userName: "Liam",
                  posterUserName: "Ada",
                  commenterUserName: "Olive",
                  activity: "likedComment",
                  activityDate: 1626023839676,
                  activityId: "d91b5fc1-e26b-11eb-af05-7d0898d50a19",
                },
                "db29a651-e26b-11eb-af05-7d0898d50a19": {
                  userName: "Liam",
                  posterUserName: "Chloe",
                  activity: "liked",
                  activityDate: 1626023843125,
                  activityId: "db29a651-e26b-11eb-af05-7d0898d50a19",
                },
                "dd495200-e26b-11eb-af05-7d0898d50a19": {
                  userName: "Liam",
                  posterUserName: "Chloe",
                  commenterUserName: "Olive",
                  activity: "likedComment",
                  activityDate: 1626023846688,
                  activityId: "dd495200-e26b-11eb-af05-7d0898d50a19",
                },
                "de8d1ca1-e26b-11eb-af05-7d0898d50a19": {
                  userName: "Liam",
                  posterUserName: "Chloe",
                  commenterUserName: "Ada",
                  activity: "likedComment",
                  activityDate: 1626023848810,
                  activityId: "de8d1ca1-e26b-11eb-af05-7d0898d50a19",
                },
                "e097e0c2-e26b-11eb-af05-7d0898d50a19": {
                  userName: "Liam",
                  posterUserName: "Sophie",
                  activity: "liked",
                  activityDate: 1626023852236,
                  activityId: "e097e0c2-e26b-11eb-af05-7d0898d50a19",
                },
                "6ab17720-e26d-11eb-af05-7d0898d50a19": {
                  userName: "Liam",
                  activity: "posted",
                  activityDate: 1626024513426,
                  activityId: "6ab17720-e26d-11eb-af05-7d0898d50a19",
                },
                "76896300-e26d-11eb-af05-7d0898d50a19": {
                  userName: "Liam",
                  posterUserName: "Liam",
                  activity: "liked",
                  activityDate: 1626024533296,
                  activityId: "76896300-e26d-11eb-af05-7d0898d50a19",
                },
                "5f65d030-e332-11eb-97fc-8d90948c2e0c": {
                  userName: "Liam",
                  activity: "logged in",
                  activityDate: 1626109105331,
                  activityId: "5f65d030-e332-11eb-97fc-8d90948c2e0c",
                },
              },
              userCoverImage: "/img/defaultBg.2793204e.jpg",
              userId: "b305d590-d9c9-11eb-ba8c-e9a262a433df",
              userProfileImage: a("16d1"),
            },
            Logan: {
              userName: "Logan",
              emailAddress: "logan@email.com",
              password: "somedia",
              firstName: "Everett ",
              lastName: "Adams",
              gender: "Male",
              address: "",
              postCode: "",
              country: "",
              city: "",
              aboutMe: "",
              posts: [],
              followers: [
                { userName: "Chloe" },
                { userName: "Ada" },
                { userName: "Olive" },
              ],
              following: [],
              friends: [],
              age: "",
              education: "",
              videos: [],
              photos: [
                {
                  imageUrl: a("506d"),
                  imageId: "82a2cf30-e332-11eb-97fc-8d90948c2e0c",
                },
                {
                  imageUrl: a("2f09"),
                  imageId: "2a34e940-e333-11eb-97fc-8d90948c2e0c",
                },
              ],
              messages: {},
              messageStatus: {},
              notifications: {
                "041f3ee0-e0ae-11eb-a170-d99d0616bfb4": {
                  userName: "Ethan",
                  friendUserName: "Logan",
                  notificationId: "041f3ee0-e0ae-11eb-a170-d99d0616bfb4",
                  notificationType: "friend request",
                  notificationStatus: "unRead",
                  notificationDate: 1625832356302,
                },
                "599ff550-e0c0-11eb-8787-59040f6b2cc8": {
                  userName: "Ruby",
                  friendUserName: "Logan",
                  notificationId: "599ff550-e0c0-11eb-8787-59040f6b2cc8",
                  notificationType: "friend request",
                  notificationStatus: "unRead",
                  notificationDate: 1625840230693,
                },
                "951333f0-e0dd-11eb-907b-171d7592562f": {
                  userName: "Chloe",
                  friendUserName: "Logan",
                  notificationId: "951333f0-e0dd-11eb-907b-171d7592562f",
                  notificationType: "follow",
                  notificationStatus: "unRead",
                  notificationDate: 1625852785839,
                },
                "88263d40-e19b-11eb-871f-0f966330432a": {
                  userName: "Ada",
                  friendUserName: "Logan",
                  notificationId: "88263d40-e19b-11eb-871f-0f966330432a",
                  notificationType: "friend request",
                  notificationStatus: "unRead",
                  notificationDate: 1625934368532,
                },
                "89d48980-e19b-11eb-871f-0f966330432a": {
                  userName: "Ada",
                  friendUserName: "Logan",
                  notificationId: "89d48980-e19b-11eb-871f-0f966330432a",
                  notificationType: "follow",
                  notificationStatus: "unRead",
                  notificationDate: 1625934371352,
                },
                "39791110-e19e-11eb-86e8-11fcf2392733": {
                  userName: "Olive",
                  friendUserName: "Logan",
                  notificationId: "39791110-e19e-11eb-86e8-11fcf2392733",
                  notificationType: "follow",
                  notificationStatus: "unRead",
                  notificationDate: 1625935525025,
                },
                "cebdead0-e2ab-11eb-8a39-b39ebfa4685e": {
                  userName: "Smith",
                  friendUserName: "Logan",
                  notificationId: "cebdead0-e2ab-11eb-8a39-b39ebfa4685e",
                  notificationType: "friend request",
                  notificationStatus: "unRead",
                  notificationDate: 1626051310078,
                },
              },
              occupation: "",
              status: "online",
              activities: {
                "e8ff9550-d9c9-11eb-ba8c-e9a262a433df": {
                  userName: "Logan",
                  activity: "Created account",
                  activityDate: 1625074678565,
                  activityId: "e8ff9550-d9c9-11eb-ba8c-e9a262a433df",
                },
                "6ef65740-e332-11eb-97fc-8d90948c2e0c": {
                  userName: "Logan",
                  activity: "logged in",
                  activityDate: 1626109131444,
                  activityId: "6ef65740-e332-11eb-97fc-8d90948c2e0c",
                },
                "737db421-e332-11eb-97fc-8d90948c2e0c": {
                  userName: "Logan",
                  posterUserName: "Lily",
                  activity: "liked",
                  activityDate: 1626109139042,
                  activityId: "737db421-e332-11eb-97fc-8d90948c2e0c",
                },
                "2a351051-e333-11eb-97fc-8d90948c2e0c": {
                  userName: "Logan",
                  activity: "posted",
                  activityDate: 1626109445589,
                  activityId: "2a351051-e333-11eb-97fc-8d90948c2e0c",
                },
              },
              userCoverImage: "/img/defaultBg.2793204e.jpg",
              userId: "e8ff6e40-d9c9-11eb-ba8c-e9a262a433df",
              userProfileImage: a("506d"),
            },
            Olive: {
              userName: "Olive",
              emailAddress: "olive@email.com",
              password: "somedia",
              firstName: "Kayden",
              lastName: "Parker ",
              gender: "Male",
              address: "",
              postCode: "",
              country: "",
              city: "",
              aboutMe: "",
              posts: [],
              followers: [{ userName: "Chloe" }, { userName: "Ada" }],
              following: [
                { userName: "Ruby" },
                { userName: "Ada" },
                { userName: "Chloe" },
                { userName: "Logan" },
                { userName: "Ivy" },
              ],
              friends: [
                { userName: "Lily" },
                { userName: "Ella" },
                { userName: "Sophie" },
                { userName: "Ethan" },
              ],
              age: "",
              education: "",
              videos: [],
              photos: [
                {
                  imageUrl: a("5338"),
                  imageId: "cc6c3150-e1a8-11eb-be6f-ff4e5c960c6e",
                },
                {
                  imageUrl: a("2213"),
                  imageId: "77d248a0-e26b-11eb-af05-7d0898d50a19",
                },
              ],
              messages: {},
              messageStatus: {},
              notifications: {
                "0f779a80-e0ae-11eb-a170-d99d0616bfb4": {
                  userName: "Ethan",
                  friendUserName: "Olive",
                  notificationId: "0f779a80-e0ae-11eb-a170-d99d0616bfb4",
                  notificationType: "friend request",
                  notificationStatus: "Read",
                  notificationDate: 1625832375336,
                },
                "96a6f350-e0dd-11eb-907b-171d7592562f": {
                  userName: "Chloe",
                  friendUserName: "Olive",
                  notificationId: "96a6f350-e0dd-11eb-907b-171d7592562f",
                  notificationType: "follow",
                  notificationStatus: "unRead",
                  notificationDate: 1625852788485,
                },
                "8ac02200-e19b-11eb-871f-0f966330432a": {
                  userName: "Ada",
                  friendUserName: "Olive",
                  notificationId: "8ac02200-e19b-11eb-871f-0f966330432a",
                  notificationType: "follow",
                  notificationStatus: "unRead",
                  notificationDate: 1625934372896,
                },
                "8210cfd0-e26b-11eb-af05-7d0898d50a19": {
                  userName: "Olive",
                  posterUserName: "Olive",
                  notificationId: "8210cfd0-e26b-11eb-af05-7d0898d50a19",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1626023693645,
                },
                "d4535060-e26b-11eb-af05-7d0898d50a19": {
                  userName: "Liam",
                  posterUserName: "Olive",
                  notificationId: "d4535060-e26b-11eb-af05-7d0898d50a19",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1626023831654,
                },
                "d4537770-e26b-11eb-af05-7d0898d50a19": {
                  userName: "Liam",
                  posterUserName: "Olive",
                  notificationId: "d4537770-e26b-11eb-af05-7d0898d50a19",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1626023831655,
                },
                "6da57c00-e32c-11eb-a03f-b542039adbaa": {
                  userName: "Sebby",
                  posterUserName: "Olive",
                  notificationId: "6da57c00-e32c-11eb-a03f-b542039adbaa",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1626106552256,
                },
                "6da5a310-e32c-11eb-a03f-b542039adbaa": {
                  userName: "Sebby",
                  posterUserName: "Olive",
                  notificationId: "6da5a310-e32c-11eb-a03f-b542039adbaa",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1626106552257,
                },
                "8fa29610-e32e-11eb-a03f-b542039adbaa": {
                  userName: "Lily",
                  posterUserName: "Smith",
                  notificationId: "8fa29610-e32e-11eb-a03f-b542039adbaa",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1626107468273,
                },
                "8fa2e430-e32e-11eb-a03f-b542039adbaa": {
                  userName: "Lily",
                  posterUserName: "Smith",
                  notificationId: "8fa2e430-e32e-11eb-a03f-b542039adbaa",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1626107468275,
                },
                "9656be00-e32e-11eb-a03f-b542039adbaa": {
                  userName: "Lily",
                  posterUserName: "Liam",
                  notificationId: "9656be00-e32e-11eb-a03f-b542039adbaa",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1626107479520,
                },
                "9656e510-e32e-11eb-a03f-b542039adbaa": {
                  userName: "Lily",
                  posterUserName: "Liam",
                  notificationId: "9656e510-e32e-11eb-a03f-b542039adbaa",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1626107479521,
                },
                "0ceed980-e32f-11eb-a03f-b542039adbaa": {
                  userName: "Lily",
                  notificationId: "0ceed980-e32f-11eb-a03f-b542039adbaa",
                  notificationType: "post",
                  notificationStatus: "unRead",
                  notificationDate: 1626107678488,
                },
                "51b57ad0-e332-11eb-97fc-8d90948c2e0c": {
                  userName: "Josh",
                  posterUserName: "Olive",
                  notificationId: "51b57ad0-e332-11eb-97fc-8d90948c2e0c",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1626109082365,
                },
                "51b57ad1-e332-11eb-97fc-8d90948c2e0c": {
                  userName: "Josh",
                  posterUserName: "Olive",
                  notificationId: "51b57ad1-e332-11eb-97fc-8d90948c2e0c",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1626109082365,
                },
              },
              occupation: "",
              status: "online",
              activities: {
                "198e7600-d9ca-11eb-ba8c-e9a262a433df": {
                  userName: "Olive",
                  activity: "Created account",
                  activityDate: 1625074760032,
                  activityId: "198e7600-d9ca-11eb-ba8c-e9a262a433df",
                },
                "0de50500-e19d-11eb-86e8-11fcf2392733": {
                  userName: "Olive",
                  activity: "logged in",
                  activityDate: 1625935022416,
                  activityId: "0de50500-e19d-11eb-86e8-11fcf2392733",
                },
                "164ad490-e19d-11eb-86e8-11fcf2392733": {
                  userName: "Olive",
                  posterUserName: "Ada",
                  activity: "liked",
                  activityDate: 1625935036505,
                  activityId: "164ad490-e19d-11eb-86e8-11fcf2392733",
                },
                "24ff0562-e19d-11eb-86e8-11fcf2392733": {
                  userName: "Olive",
                  posterUserName: "Chloe",
                  activity: "liked",
                  activityDate: 1625935061174,
                  activityId: "24ff0562-e19d-11eb-86e8-11fcf2392733",
                },
                "279e6860-e19d-11eb-86e8-11fcf2392733": {
                  userName: "Olive",
                  posterUserName: "Sophie",
                  activity: "liked",
                  activityDate: 1625935065574,
                  activityId: "279e6860-e19d-11eb-86e8-11fcf2392733",
                },
                "4f21eab1-e19d-11eb-86e8-11fcf2392733": {
                  userName: "Olive",
                  posterUserName: "Ada",
                  activity: "commented",
                  activityDate: 1625935131867,
                  activityId: "4f21eab1-e19d-11eb-86e8-11fcf2392733",
                },
                "6d6d8060-e19d-11eb-86e8-11fcf2392733": {
                  userName: "Olive",
                  posterUserName: "Chloe",
                  activity: "commented",
                  activityDate: 1625935182694,
                  activityId: "6d6d8060-e19d-11eb-86e8-11fcf2392733",
                },
                "ec755681-e19d-11eb-86e8-11fcf2392733": {
                  userName: "Olive",
                  posterUserName: "Ruby",
                  activity: "liked",
                  activityDate: 1625935395816,
                  activityId: "ec755681-e19d-11eb-86e8-11fcf2392733",
                },
                "ef2d4a91-e19d-11eb-86e8-11fcf2392733": {
                  userName: "Olive",
                  posterUserName: "Carter",
                  activity: "liked",
                  activityDate: 1625935400377,
                  activityId: "ef2d4a91-e19d-11eb-86e8-11fcf2392733",
                },
                "f3557070-e19d-11eb-86e8-11fcf2392733": {
                  userName: "Olive",
                  posterUserName: "Ella",
                  activity: "liked",
                  activityDate: 1625935407351,
                  activityId: "f3557070-e19d-11eb-86e8-11fcf2392733",
                },
                "f59fd5a2-e19d-11eb-86e8-11fcf2392733": {
                  userName: "Olive",
                  posterUserName: "Ethan",
                  activity: "liked",
                  activityDate: 1625935411194,
                  activityId: "f59fd5a2-e19d-11eb-86e8-11fcf2392733",
                },
                "f75a56e1-e19d-11eb-86e8-11fcf2392733": {
                  userName: "Olive",
                  posterUserName: "Ava",
                  activity: "liked",
                  activityDate: 1625935414094,
                  activityId: "f75a56e1-e19d-11eb-86e8-11fcf2392733",
                },
                "f8dadc62-e19d-11eb-86e8-11fcf2392733": {
                  userName: "Olive",
                  posterUserName: "Mia",
                  activity: "liked",
                  activityDate: 1625935416614,
                  activityId: "f8dadc62-e19d-11eb-86e8-11fcf2392733",
                },
                "ff89d431-e19d-11eb-86e8-11fcf2392733": {
                  userName: "Olive",
                  posterUserName: "Chloe",
                  commenterUserName: "Ada",
                  activity: "likedComment",
                  activityDate: 1625935427827,
                  activityId: "ff89d431-e19d-11eb-86e8-11fcf2392733",
                },
                "01175201-e19e-11eb-86e8-11fcf2392733": {
                  userName: "Olive",
                  posterUserName: "Sophie",
                  commenterUserName: "Chloe",
                  activity: "likedComment",
                  activityDate: 1625935430432,
                  activityId: "01175201-e19e-11eb-86e8-11fcf2392733",
                },
                "02d3cf10-e19e-11eb-86e8-11fcf2392733": {
                  userName: "Olive",
                  posterUserName: "Ruby",
                  commenterUserName: "Sophie",
                  activity: "likedComment",
                  activityDate: 1625935433345,
                  activityId: "02d3cf10-e19e-11eb-86e8-11fcf2392733",
                },
                "1cd055f0-e19e-11eb-86e8-11fcf2392733": {
                  friendUserName: "Lily",
                  userName: "Olive",
                  activity: "Accepted Friend Request",
                  activityDate: 1625935476943,
                  activityId: "1cd055f0-e19e-11eb-86e8-11fcf2392733",
                },
                "1e297d50-e19e-11eb-86e8-11fcf2392733": {
                  friendUserName: "Ella",
                  userName: "Olive",
                  activity: "Accepted Friend Request",
                  activityDate: 1625935479205,
                  activityId: "1e297d50-e19e-11eb-86e8-11fcf2392733",
                },
                "1f360b50-e19e-11eb-86e8-11fcf2392733": {
                  friendUserName: "Sophie",
                  userName: "Olive",
                  activity: "Accepted Friend Request",
                  activityDate: 1625935480965,
                  activityId: "1f360b50-e19e-11eb-86e8-11fcf2392733",
                },
                "2079aee0-e19e-11eb-86e8-11fcf2392733": {
                  friendUserName: "Ethan",
                  userName: "Olive",
                  activity: "Accepted Friend Request",
                  activityDate: 1625935483086,
                  activityId: "2079aee0-e19e-11eb-86e8-11fcf2392733",
                },
                "239c2491-e19e-11eb-86e8-11fcf2392733": {
                  friendUserName: "Ruby",
                  userName: "Olive",
                  activity: "followed",
                  activityDate: 1625935488345,
                  activityId: "239c2491-e19e-11eb-86e8-11fcf2392733",
                },
                "2bcc1711-e19e-11eb-86e8-11fcf2392733": {
                  userName: "Olive",
                  friendUserName: "Sebby",
                  activity: "Friend request",
                  activityDate: 1625935502081,
                  activityId: "2bcc1711-e19e-11eb-86e8-11fcf2392733",
                },
                "2cf024b1-e19e-11eb-86e8-11fcf2392733": {
                  userName: "Olive",
                  friendUserName: "Ada",
                  activity: "Friend request",
                  activityDate: 1625935503995,
                  activityId: "2cf024b1-e19e-11eb-86e8-11fcf2392733",
                },
                "2ea500a1-e19e-11eb-86e8-11fcf2392733": {
                  userName: "Olive",
                  friendUserName: "Nova",
                  activity: "Friend request",
                  activityDate: 1625935506858,
                  activityId: "2ea500a1-e19e-11eb-86e8-11fcf2392733",
                },
                "32965f11-e19e-11eb-86e8-11fcf2392733": {
                  userName: "Olive",
                  friendUserName: "Ivy",
                  activity: "Friend request",
                  activityDate: 1625935513473,
                  activityId: "32965f11-e19e-11eb-86e8-11fcf2392733",
                },
                "35095ae1-e19e-11eb-86e8-11fcf2392733": {
                  userName: "Olive",
                  friendUserName: "Mia",
                  activity: "Friend request",
                  activityDate: 1625935517582,
                  activityId: "35095ae1-e19e-11eb-86e8-11fcf2392733",
                },
                "370ad031-e19e-11eb-86e8-11fcf2392733": {
                  friendUserName: "Ada",
                  userName: "Olive",
                  activity: "followed",
                  activityDate: 1625935520947,
                  activityId: "370ad031-e19e-11eb-86e8-11fcf2392733",
                },
                "3832fc81-e19e-11eb-86e8-11fcf2392733": {
                  friendUserName: "Chloe",
                  userName: "Olive",
                  activity: "followed",
                  activityDate: 1625935522888,
                  activityId: "3832fc81-e19e-11eb-86e8-11fcf2392733",
                },
                "39791111-e19e-11eb-86e8-11fcf2392733": {
                  friendUserName: "Logan",
                  userName: "Olive",
                  activity: "followed",
                  activityDate: 1625935525025,
                  activityId: "39791111-e19e-11eb-86e8-11fcf2392733",
                },
                "3b5d3a60-e19e-11eb-86e8-11fcf2392733": {
                  friendUserName: "Ivy",
                  userName: "Olive",
                  activity: "followed",
                  activityDate: 1625935528198,
                  activityId: "3b5d3a60-e19e-11eb-86e8-11fcf2392733",
                },
                "77d7edf0-e26b-11eb-af05-7d0898d50a19": {
                  userName: "Olive",
                  activity: "posted",
                  activityDate: 1626023676495,
                  activityId: "77d7edf0-e26b-11eb-af05-7d0898d50a19",
                },
                "8210f6e1-e26b-11eb-af05-7d0898d50a19": {
                  userName: "Olive",
                  posterUserName: "Olive",
                  activity: "liked",
                  activityDate: 1626023693646,
                  activityId: "8210f6e1-e26b-11eb-af05-7d0898d50a19",
                },
                "ace551e0-e26b-11eb-af05-7d0898d50a19": {
                  userName: "Olive",
                  friendUserName: "Ava",
                  activity: "Friend request",
                  activityDate: 1626023765502,
                  activityId: "ace551e0-e26b-11eb-af05-7d0898d50a19",
                },
              },
              userCoverImage: "/img/defaultBg.2793204e.jpg",
              userId: "198e4ef0-d9ca-11eb-ba8c-e9a262a433df",
              userProfileImage: a("5338"),
            },
            Sebby: {
              userName: "Sebby",
              emailAddress: "Sebby@email.com",
              password: "somedia",
              firstName: "Sebastian",
              lastName: "Jackson",
              gender: "Male",
              address: "",
              postCode: "",
              country: "",
              city: "",
              aboutMe: "",
              posts: [],
              followers: [{ userName: "Ada" }],
              following: [],
              friends: [],
              age: "",
              education: "",
              videos: [
                {
                  videoUrl:
                    "https://player.vimeo.com/external/490498309.sd.mp4?s=6a1ed8c9665defd9ce2b8030352c51cafd653c88&profile_id=139&oauth2_token_id=57447761",
                  videoId: "29169610-e335-11eb-97fc-8d90948c2e0c",
                  videoAutoplay: !1,
                },
              ],
              photos: [
                {
                  imageUrl: a("b3e7"),
                  imageId: "a1aacdf0-e2ac-11eb-ba6f-c5a311c90f7b",
                },
              ],
              messages: {},
              messageStatus: {},
              notifications: {
                "5aac8350-e0c0-11eb-8787-59040f6b2cc8": {
                  userName: "Ruby",
                  friendUserName: "Sebby",
                  notificationId: "5aac8350-e0c0-11eb-8787-59040f6b2cc8",
                  notificationType: "friend request",
                  notificationStatus: "unRead",
                  notificationDate: 1625840232453,
                },
                "8b83c020-e19b-11eb-871f-0f966330432a": {
                  userName: "Ada",
                  friendUserName: "Sebby",
                  notificationId: "8b83c020-e19b-11eb-871f-0f966330432a",
                  notificationType: "follow",
                  notificationStatus: "unRead",
                  notificationDate: 1625934374178,
                },
                "2bcc1710-e19e-11eb-86e8-11fcf2392733": {
                  userName: "Olive",
                  friendUserName: "Sebby",
                  notificationId: "2bcc1710-e19e-11eb-86e8-11fcf2392733",
                  notificationType: "friend request",
                  notificationStatus: "unRead",
                  notificationDate: 1625935502081,
                },
                "42dc4390-e337-11eb-97fc-8d90948c2e0c": {
                  userName: "Sebby",
                  posterUserName: "Sebby",
                  notificationId: "42dc4390-e337-11eb-97fc-8d90948c2e0c",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1626111204937,
                },
                "562d5510-e337-11eb-97fc-8d90948c2e0c": {
                  userName: "Josh",
                  posterUserName: "Sebby",
                  notificationId: "562d5510-e337-11eb-97fc-8d90948c2e0c",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1626111237345,
                },
                "562d5511-e337-11eb-97fc-8d90948c2e0c": {
                  userName: "Josh",
                  posterUserName: "Sebby",
                  notificationId: "562d5511-e337-11eb-97fc-8d90948c2e0c",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1626111237345,
                },
              },
              occupation: "",
              status: "online",
              activities: {
                "5cba3360-d9ca-11eb-ba8c-e9a262a433df": {
                  userName: "Sebby",
                  activity: "Created account",
                  activityDate: 1625074872726,
                  activityId: "5cba3360-d9ca-11eb-ba8c-e9a262a433df",
                },
                "593c04d0-e2ac-11eb-ba6f-c5a311c90f7b": {
                  userName: "Sebby",
                  activity: "logged in",
                  activityDate: 1626051542429,
                  activityId: "593c04d0-e2ac-11eb-ba6f-c5a311c90f7b",
                },
                "a880d5c1-e2ac-11eb-ba6f-c5a311c90f7b": {
                  userName: "Sebby",
                  posterUserName: "Smith",
                  activity: "liked",
                  activityDate: 1626051675420,
                  activityId: "a880d5c1-e2ac-11eb-ba6f-c5a311c90f7b",
                },
                "aa593f41-e2ac-11eb-ba6f-c5a311c90f7b": {
                  userName: "Sebby",
                  posterUserName: "Liam",
                  activity: "liked",
                  activityDate: 1626051678516,
                  activityId: "aa593f41-e2ac-11eb-ba6f-c5a311c90f7b",
                },
                "ac682211-e2ac-11eb-ba6f-c5a311c90f7b": {
                  userName: "Sebby",
                  posterUserName: "Ada",
                  activity: "liked",
                  activityDate: 1626051681969,
                  activityId: "ac682211-e2ac-11eb-ba6f-c5a311c90f7b",
                },
                "6da5ca20-e32c-11eb-a03f-b542039adbaa": {
                  userName: "Sebby",
                  posterUserName: "Olive",
                  activity: "liked",
                  activityDate: 1626106552258,
                  activityId: "6da5ca20-e32c-11eb-a03f-b542039adbaa",
                },
                "8a283891-e32c-11eb-a03f-b542039adbaa": {
                  userName: "Sebby",
                  posterUserName: "Liam",
                  activity: "commented",
                  activityDate: 1626106600089,
                  activityId: "8a283891-e32c-11eb-a03f-b542039adbaa",
                },
                "131f5d10-e330-11eb-97fc-8d90948c2e0c": {
                  userName: "Sebby",
                  activity: "logged in",
                  activityDate: 1626108118369,
                  activityId: "131f5d10-e330-11eb-97fc-8d90948c2e0c",
                },
                "1a466b10-e330-11eb-97fc-8d90948c2e0c": {
                  userName: "Sebby",
                  posterUserName: "Lily",
                  activity: "liked",
                  activityDate: 1626108130369,
                  activityId: "1a466b10-e330-11eb-97fc-8d90948c2e0c",
                },
                "3d058780-e330-11eb-97fc-8d90948c2e0c": {
                  userName: "Sebby",
                  posterUserName: "Lily",
                  activity: "commented",
                  activityDate: 1626108188664,
                  activityId: "3d058780-e330-11eb-97fc-8d90948c2e0c",
                },
                "11ccb370-e332-11eb-97fc-8d90948c2e0c": {
                  userName: "Sebby",
                  activity: "logged in",
                  activityDate: 1626108975143,
                  activityId: "11ccb370-e332-11eb-97fc-8d90948c2e0c",
                },
                "e00f2be0-e333-11eb-97fc-8d90948c2e0c": {
                  userName: "Sebby",
                  activity: "logged in",
                  activityDate: 1626109750686,
                  activityId: "e00f2be0-e333-11eb-97fc-8d90948c2e0c",
                },
                "2916bd21-e335-11eb-97fc-8d90948c2e0c": {
                  userName: "Sebby",
                  activity: "posted",
                  activityDate: 1626110302706,
                  activityId: "2916bd21-e335-11eb-97fc-8d90948c2e0c",
                },
                "42dc4392-e337-11eb-97fc-8d90948c2e0c": {
                  userName: "Sebby",
                  posterUserName: "Sebby",
                  activity: "liked",
                  activityDate: 1626111204937,
                  activityId: "42dc4392-e337-11eb-97fc-8d90948c2e0c",
                },
              },
              userCoverImage: "/img/defaultBg.2793204e.jpg",
              userId: "5cba0c50-d9ca-11eb-ba8c-e9a262a433df",
              userProfileImage: a("b3e7"),
            },
            Smith: {
              userName: "Smith",
              emailAddress: "smith@email.com",
              password: "somedia",
              firstName: "Kevin ",
              lastName: "Cane",
              gender: "Male",
              address: "",
              postCode: "",
              country: "",
              city: "",
              aboutMe: "",
              posts: [],
              followers: [{ userName: "Ada" }],
              following: [{ userName: "Josh" }, { userName: "Ethan" }],
              friends: [
                { userName: "Lily" },
                { userName: "Sophie" },
                { userName: "Ava" },
                { userName: "Ella" },
              ],
              age: "",
              education: "",
              videos: [
                {
                  videoUrl:
                    "https://player.vimeo.com/external/371813178.sd.mp4?s=d1230dd79cc887815b725c181c4af7a4419a6514&profile_id=139&oauth2_token_id=57447761",
                  videoId: "8eb16ed0-e2ab-11eb-8a39-b39ebfa4685e",
                  videoAutoplay: !1,
                },
              ],
              photos: [
                {
                  imageUrl: a("6116"),
                  imageId: "2c426200-e26e-11eb-af05-7d0898d50a19",
                },
              ],
              messages: {},
              messageStatus: {},
              notifications: {
                "23a08600-dceb-11eb-b872-29eca492d404": {
                  userName: "Lily",
                  friendUserName: "Smith",
                  notificationId: "23a08600-dceb-11eb-b872-29eca492d404",
                  notificationType: "friend request",
                  notificationStatus: "Read",
                  notificationDate: 1625418803808,
                },
                "a0c687d0-e090-11eb-bcb8-25b2107d0c08": {
                  userName: "Ava",
                  friendUserName: "Smith",
                  notificationId: "a0c687d0-e090-11eb-bcb8-25b2107d0c08",
                  notificationType: "friend request",
                  notificationStatus: "Read",
                  notificationDate: 1625819734221,
                },
                "8cbeff40-e19b-11eb-871f-0f966330432a": {
                  userName: "Ada",
                  friendUserName: "Smith",
                  notificationId: "8cbeff40-e19b-11eb-871f-0f966330432a",
                  notificationType: "follow",
                  notificationStatus: "unRead",
                  notificationDate: 1625934376244,
                },
                "b48cbf60-e2ab-11eb-8a39-b39ebfa4685e": {
                  userName: "Smith",
                  posterUserName: "Smith",
                  notificationId: "b48cbf60-e2ab-11eb-8a39-b39ebfa4685e",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1626051266134,
                },
                "a880aeb0-e2ac-11eb-ba6f-c5a311c90f7b": {
                  userName: "Sebby",
                  posterUserName: "Smith",
                  notificationId: "a880aeb0-e2ac-11eb-ba6f-c5a311c90f7b",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1626051675420,
                },
                "a880d5c0-e2ac-11eb-ba6f-c5a311c90f7b": {
                  userName: "Sebby",
                  posterUserName: "Smith",
                  notificationId: "a880d5c0-e2ac-11eb-ba6f-c5a311c90f7b",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1626051675420,
                },
                "8fa29610-e32e-11eb-a03f-b542039adbaa": {
                  userName: "Lily",
                  posterUserName: "Smith",
                  notificationId: "8fa29610-e32e-11eb-a03f-b542039adbaa",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1626107468273,
                },
                "8fa2e430-e32e-11eb-a03f-b542039adbaa": {
                  userName: "Lily",
                  posterUserName: "Smith",
                  notificationId: "8fa2e430-e32e-11eb-a03f-b542039adbaa",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1626107468275,
                },
                "9656be00-e32e-11eb-a03f-b542039adbaa": {
                  userName: "Lily",
                  posterUserName: "Liam",
                  notificationId: "9656be00-e32e-11eb-a03f-b542039adbaa",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1626107479520,
                },
                "9656e510-e32e-11eb-a03f-b542039adbaa": {
                  userName: "Lily",
                  posterUserName: "Liam",
                  notificationId: "9656e510-e32e-11eb-a03f-b542039adbaa",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1626107479521,
                },
                "0ceed980-e32f-11eb-a03f-b542039adbaa": {
                  userName: "Lily",
                  notificationId: "0ceed980-e32f-11eb-a03f-b542039adbaa",
                  notificationType: "post",
                  notificationStatus: "unRead",
                  notificationDate: 1626107678488,
                },
                "4a22b2b0-e332-11eb-97fc-8d90948c2e0c": {
                  userName: "Josh",
                  posterUserName: "Smith",
                  notificationId: "4a22b2b0-e332-11eb-97fc-8d90948c2e0c",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1626109069659,
                },
                "4a22d9c0-e332-11eb-97fc-8d90948c2e0c": {
                  userName: "Josh",
                  posterUserName: "Smith",
                  notificationId: "4a22d9c0-e332-11eb-97fc-8d90948c2e0c",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1626109069660,
                },
              },
              occupation: "",
              status: "online",
              activities: {
                "b5061cf1-d9ca-11eb-ba8c-e9a262a433df": {
                  userName: "Smith",
                  activity: "Created account",
                  activityDate: 1625075020863,
                  activityId: "b5061cf1-d9ca-11eb-ba8c-e9a262a433df",
                },
                "0dc9c8e0-e26e-11eb-af05-7d0898d50a19": {
                  userName: "Smith",
                  activity: "logged in",
                  activityDate: 1626024787054,
                  activityId: "0dc9c8e0-e26e-11eb-af05-7d0898d50a19",
                },
                "0b900e41-e2aa-11eb-af05-7d0898d50a19": {
                  userName: "Smith",
                  posterUserName: "Liam",
                  activity: "liked",
                  activityDate: 1626050553124,
                  activityId: "0b900e41-e2aa-11eb-af05-7d0898d50a19",
                },
                "33a2b130-e2aa-11eb-af05-7d0898d50a19": {
                  userName: "Smith",
                  posterUserName: "Liam",
                  activity: "commented",
                  activityDate: 1626050620355,
                  activityId: "33a2b130-e2aa-11eb-af05-7d0898d50a19",
                },
                "35057581-e2aa-11eb-af05-7d0898d50a19": {
                  userName: "Smith",
                  posterUserName: "Liam",
                  commenterUserName: "Smith",
                  activity: "likedComment",
                  activityDate: 1626050622680,
                  activityId: "35057581-e2aa-11eb-af05-7d0898d50a19",
                },
                "39ba7210-e2aa-11eb-af05-7d0898d50a19": {
                  userName: "Smith",
                  posterUserName: "Ada",
                  activity: "liked",
                  activityDate: 1626050630577,
                  activityId: "39ba7210-e2aa-11eb-af05-7d0898d50a19",
                },
                "8eb1bcf0-e2ab-11eb-8a39-b39ebfa4685e": {
                  userName: "Smith",
                  activity: "posted",
                  activityDate: 1626051202623,
                  activityId: "8eb1bcf0-e2ab-11eb-8a39-b39ebfa4685e",
                },
                "b48ce670-e2ab-11eb-8a39-b39ebfa4685e": {
                  userName: "Smith",
                  posterUserName: "Smith",
                  activity: "liked",
                  activityDate: 1626051266135,
                  activityId: "b48ce670-e2ab-11eb-8a39-b39ebfa4685e",
                },
                "be44ff90-e2ab-11eb-8a39-b39ebfa4685e": {
                  friendUserName: "Lily",
                  userName: "Smith",
                  activity: "Accepted Friend Request",
                  activityDate: 1626051282441,
                  activityId: "be44ff90-e2ab-11eb-8a39-b39ebfa4685e",
                },
                "bfd9f770-e2ab-11eb-8a39-b39ebfa4685e": {
                  friendUserName: "Sophie",
                  userName: "Smith",
                  activity: "Accepted Friend Request",
                  activityDate: 1626051285095,
                  activityId: "bfd9f770-e2ab-11eb-8a39-b39ebfa4685e",
                },
                "c30ff521-e2ab-11eb-8a39-b39ebfa4685e": {
                  friendUserName: "Josh",
                  userName: "Smith",
                  activity: "followed",
                  activityDate: 1626051290482,
                  activityId: "c30ff521-e2ab-11eb-8a39-b39ebfa4685e",
                },
                "c3d5dd30-e2ab-11eb-8a39-b39ebfa4685e": {
                  friendUserName: "Ethan",
                  userName: "Smith",
                  activity: "followed",
                  activityDate: 1626051291779,
                  activityId: "c3d5dd30-e2ab-11eb-8a39-b39ebfa4685e",
                },
                "cebe11e0-e2ab-11eb-8a39-b39ebfa4685e": {
                  userName: "Smith",
                  friendUserName: "Logan",
                  activity: "Friend request",
                  activityDate: 1626051310078,
                  activityId: "cebe11e0-e2ab-11eb-8a39-b39ebfa4685e",
                },
                "d3d72771-e2ab-11eb-8a39-b39ebfa4685e": {
                  userName: "Smith",
                  friendUserName: "Carter",
                  activity: "Friend request",
                  activityDate: 1626051318631,
                  activityId: "d3d72771-e2ab-11eb-8a39-b39ebfa4685e",
                },
                "d4e7d421-e2ab-11eb-8a39-b39ebfa4685e": {
                  userName: "Smith",
                  friendUserName: "Ruby",
                  activity: "Friend request",
                  activityDate: 1626051320418,
                  activityId: "d4e7d421-e2ab-11eb-8a39-b39ebfa4685e",
                },
                "d7e29d90-e2ab-11eb-8a39-b39ebfa4685e": {
                  friendUserName: "Ava",
                  userName: "Smith",
                  activity: "Accepted Friend Request",
                  activityDate: 1626051325417,
                  activityId: "d7e29d90-e2ab-11eb-8a39-b39ebfa4685e",
                },
                "d9726550-e2ab-11eb-8a39-b39ebfa4685e": {
                  friendUserName: "Ella",
                  userName: "Smith",
                  activity: "Accepted Friend Request",
                  activityDate: 1626051328037,
                  activityId: "d9726550-e2ab-11eb-8a39-b39ebfa4685e",
                },
              },
              userCoverImage: "/img/defaultBg.2793204e.jpg",
              userId: "b5061cf0-d9ca-11eb-ba8c-e9a262a433df",
              userProfileImage: a("6116"),
            },
            Ada: {
              userName: "Ada",
              emailAddress: "ada@email.com",
              password: "somedia",
              firstName: "Adanna",
              lastName: "Chukwu",
              gender: "Female",
              address: "",
              postCode: "",
              country: "",
              city: "",
              aboutMe: "",
              posts: [],
              followers: [{ userName: "Olive" }],
              following: [
                { userName: "Logan" },
                { userName: "Olive" },
                { userName: "Sebby" },
                { userName: "Smith" },
                { userName: "Mia" },
                { userName: "Chloe" },
                { userName: "Nova" },
                { userName: "Ivy" },
              ],
              friends: [
                { userName: "Ava" },
                { userName: "Lily" },
                { userName: "Sophie" },
                { userName: "Ella" },
              ],
              age: "",
              education: "",
              videos: [],
              photos: [
                {
                  imageUrl: a("4e5d"),
                  imageId: "09f996d0-e199-11eb-871f-0f966330432a",
                },
                {
                  imageUrl: a("57a6"),
                  imageId: "02ee7fd0-e19a-11eb-871f-0f966330432a",
                },
              ],
              messages: {},
              messageStatus: {},
              notifications: {
                "a2ceb3e0-e090-11eb-bcb8-25b2107d0c08": {
                  userName: "Ava",
                  friendUserName: "Ada",
                  notificationId: "a2ceb3e0-e090-11eb-bcb8-25b2107d0c08",
                  notificationType: "friend request",
                  notificationStatus: "Read",
                  notificationDate: 1625819737630,
                },
                "63bccc30-e19b-11eb-871f-0f966330432a": {
                  userName: "Ada",
                  posterUserName: "Ada",
                  notificationId: "63bccc30-e19b-11eb-871f-0f966330432a",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625934307443,
                },
                "164a8670-e19d-11eb-86e8-11fcf2392733": {
                  userName: "Olive",
                  posterUserName: "Ada",
                  notificationId: "164a8670-e19d-11eb-86e8-11fcf2392733",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625935036504,
                },
                "164aad80-e19d-11eb-86e8-11fcf2392733": {
                  userName: "Olive",
                  posterUserName: "Ada",
                  notificationId: "164aad80-e19d-11eb-86e8-11fcf2392733",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625935036505,
                },
                "2cf024b0-e19e-11eb-86e8-11fcf2392733": {
                  userName: "Olive",
                  friendUserName: "Ada",
                  notificationId: "2cf024b0-e19e-11eb-86e8-11fcf2392733",
                  notificationType: "friend request",
                  notificationStatus: "unRead",
                  notificationDate: 1625935503995,
                },
                "370ad030-e19e-11eb-86e8-11fcf2392733": {
                  userName: "Olive",
                  friendUserName: "Ada",
                  notificationId: "370ad030-e19e-11eb-86e8-11fcf2392733",
                  notificationType: "follow",
                  notificationStatus: "unRead",
                  notificationDate: 1625935520947,
                },
                "d91b5fc0-e26b-11eb-af05-7d0898d50a19": {
                  userName: "Liam",
                  posterUserName: "Ada",
                  notificationId: "d91b5fc0-e26b-11eb-af05-7d0898d50a19",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1626023839676,
                },
                "d91b86d0-e26b-11eb-af05-7d0898d50a19": {
                  userName: "Liam",
                  posterUserName: "Ada",
                  commenterUserName: "Olive",
                  notificationId: "d91b86d0-e26b-11eb-af05-7d0898d50a19",
                  notificationType: "likedComment",
                  notificationStatus: "unRead",
                  notificationDate: 1626023839677,
                },
                "39ba4b00-e2aa-11eb-af05-7d0898d50a19": {
                  userName: "Smith",
                  posterUserName: "Ada",
                  notificationId: "39ba4b00-e2aa-11eb-af05-7d0898d50a19",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1626050630576,
                },
                "39ba4b01-e2aa-11eb-af05-7d0898d50a19": {
                  userName: "Smith",
                  posterUserName: "Ada",
                  notificationId: "39ba4b01-e2aa-11eb-af05-7d0898d50a19",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1626050630576,
                },
                "ac67fb00-e2ac-11eb-ba6f-c5a311c90f7b": {
                  userName: "Sebby",
                  posterUserName: "Ada",
                  notificationId: "ac67fb00-e2ac-11eb-ba6f-c5a311c90f7b",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1626051681968,
                },
                "ac682210-e2ac-11eb-ba6f-c5a311c90f7b": {
                  userName: "Sebby",
                  posterUserName: "Ada",
                  notificationId: "ac682210-e2ac-11eb-ba6f-c5a311c90f7b",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1626051681969,
                },
                "8fa29610-e32e-11eb-a03f-b542039adbaa": {
                  userName: "Lily",
                  posterUserName: "Smith",
                  notificationId: "8fa29610-e32e-11eb-a03f-b542039adbaa",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1626107468273,
                },
                "8fa2e430-e32e-11eb-a03f-b542039adbaa": {
                  userName: "Lily",
                  posterUserName: "Smith",
                  notificationId: "8fa2e430-e32e-11eb-a03f-b542039adbaa",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1626107468275,
                },
                "9656be00-e32e-11eb-a03f-b542039adbaa": {
                  userName: "Lily",
                  posterUserName: "Liam",
                  notificationId: "9656be00-e32e-11eb-a03f-b542039adbaa",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1626107479520,
                },
                "9656e510-e32e-11eb-a03f-b542039adbaa": {
                  userName: "Lily",
                  posterUserName: "Liam",
                  notificationId: "9656e510-e32e-11eb-a03f-b542039adbaa",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1626107479521,
                },
                "0ceed980-e32f-11eb-a03f-b542039adbaa": {
                  userName: "Lily",
                  notificationId: "0ceed980-e32f-11eb-a03f-b542039adbaa",
                  notificationType: "post",
                  notificationStatus: "unRead",
                  notificationDate: 1626107678488,
                },
              },
              occupation: "",
              status: "online",
              activities: {
                "a289f230-d9cb-11eb-ba8c-e9a262a433df": {
                  userName: "Ada",
                  activity: "Created account",
                  activityDate: 1625075419347,
                  activityId: "a289f230-d9cb-11eb-ba8c-e9a262a433df",
                },
                "f815aa50-d9cb-11eb-ba8c-e9a262a433df": {
                  userName: "Ada",
                  activity: "logged in",
                  activityDate: 1625075562869,
                  activityId: "f815aa50-d9cb-11eb-ba8c-e9a262a433df",
                },
                "5438a891-e198-11eb-871f-0f966330432a": {
                  userName: "Ada",
                  posterUserName: "Chloe",
                  activity: "liked",
                  activityDate: 1625932992921,
                  activityId: "5438a891-e198-11eb-871f-0f966330432a",
                },
                "6b27ef70-e198-11eb-871f-0f966330432a": {
                  userName: "Ada",
                  posterUserName: "Chloe",
                  activity: "commented",
                  activityDate: 1625933031399,
                  activityId: "6b27ef70-e198-11eb-871f-0f966330432a",
                },
                "9220bdf1-e198-11eb-871f-0f966330432a": {
                  userName: "Ada",
                  posterUserName: "Sophie",
                  activity: "commented",
                  activityDate: 1625933096783,
                  activityId: "9220bdf1-e198-11eb-871f-0f966330432a",
                },
                "02ee7fd2-e19a-11eb-871f-0f966330432a": {
                  userName: "Ada",
                  activity: "posted",
                  activityDate: 1625933715533,
                  activityId: "02ee7fd2-e19a-11eb-871f-0f966330432a",
                },
                "63bcf341-e19b-11eb-871f-0f966330432a": {
                  userName: "Ada",
                  posterUserName: "Ada",
                  activity: "liked",
                  activityDate: 1625934307444,
                  activityId: "63bcf341-e19b-11eb-871f-0f966330432a",
                },
                "6910a0d2-e19b-11eb-871f-0f966330432a": {
                  userName: "Ada",
                  posterUserName: "Sophie",
                  activity: "liked",
                  activityDate: 1625934316381,
                  activityId: "6910a0d2-e19b-11eb-871f-0f966330432a",
                },
                "6af69ee0-e19b-11eb-871f-0f966330432a": {
                  userName: "Ada",
                  posterUserName: "Sophie",
                  commenterUserName: "Chloe",
                  activity: "likedComment",
                  activityDate: 1625934319566,
                  activityId: "6af69ee0-e19b-11eb-871f-0f966330432a",
                },
                "6e2c4e72-e19b-11eb-871f-0f966330432a": {
                  userName: "Ada",
                  posterUserName: "Ruby",
                  activity: "liked",
                  activityDate: 1625934324951,
                  activityId: "6e2c4e72-e19b-11eb-871f-0f966330432a",
                },
                "755afd90-e19b-11eb-871f-0f966330432a": {
                  friendUserName: "Ava",
                  userName: "Ada",
                  activity: "Accepted Friend Request",
                  activityDate: 1625934337001,
                  activityId: "755afd90-e19b-11eb-871f-0f966330432a",
                },
                "7ce89590-e19b-11eb-871f-0f966330432a": {
                  friendUserName: "Lily",
                  userName: "Ada",
                  activity: "Accepted Friend Request",
                  activityDate: 1625934349673,
                  activityId: "7ce89590-e19b-11eb-871f-0f966330432a",
                },
                "7d642e30-e19b-11eb-871f-0f966330432a": {
                  friendUserName: "Sophie",
                  userName: "Ada",
                  activity: "Accepted Friend Request",
                  activityDate: 1625934350483,
                  activityId: "7d642e30-e19b-11eb-871f-0f966330432a",
                },
                "80065050-e19b-11eb-871f-0f966330432a": {
                  friendUserName: "Ella",
                  userName: "Ada",
                  activity: "Accepted Friend Request",
                  activityDate: 1625934354901,
                  activityId: "80065050-e19b-11eb-871f-0f966330432a",
                },
                "83bc7a81-e19b-11eb-871f-0f966330432a": {
                  userName: "Ada",
                  friendUserName: "Carter",
                  activity: "Friend request",
                  activityDate: 1625934361128,
                  activityId: "83bc7a81-e19b-11eb-871f-0f966330432a",
                },
                "8486f671-e19b-11eb-871f-0f966330432a": {
                  userName: "Ada",
                  friendUserName: "Ethan",
                  activity: "Friend request",
                  activityDate: 1625934362455,
                  activityId: "8486f671-e19b-11eb-871f-0f966330432a",
                },
                "85abee71-e19b-11eb-871f-0f966330432a": {
                  userName: "Ada",
                  friendUserName: "Josh",
                  activity: "Friend request",
                  activityDate: 1625934364375,
                  activityId: "85abee71-e19b-11eb-871f-0f966330432a",
                },
                "868e8640-e19b-11eb-871f-0f966330432a": {
                  userName: "Ada",
                  friendUserName: "Liam",
                  activity: "Friend request",
                  activityDate: 1625934365860,
                  activityId: "868e8640-e19b-11eb-871f-0f966330432a",
                },
                "88266450-e19b-11eb-871f-0f966330432a": {
                  userName: "Ada",
                  friendUserName: "Logan",
                  activity: "Friend request",
                  activityDate: 1625934368533,
                  activityId: "88266450-e19b-11eb-871f-0f966330432a",
                },
                "89d48981-e19b-11eb-871f-0f966330432a": {
                  friendUserName: "Logan",
                  userName: "Ada",
                  activity: "followed",
                  activityDate: 1625934371352,
                  activityId: "89d48981-e19b-11eb-871f-0f966330432a",
                },
                "8ac02201-e19b-11eb-871f-0f966330432a": {
                  friendUserName: "Olive",
                  userName: "Ada",
                  activity: "followed",
                  activityDate: 1625934372896,
                  activityId: "8ac02201-e19b-11eb-871f-0f966330432a",
                },
                "8b83c021-e19b-11eb-871f-0f966330432a": {
                  friendUserName: "Sebby",
                  userName: "Ada",
                  activity: "followed",
                  activityDate: 1625934374178,
                  activityId: "8b83c021-e19b-11eb-871f-0f966330432a",
                },
                "8cbeff41-e19b-11eb-871f-0f966330432a": {
                  friendUserName: "Smith",
                  userName: "Ada",
                  activity: "followed",
                  activityDate: 1625934376244,
                  activityId: "8cbeff41-e19b-11eb-871f-0f966330432a",
                },
                "8d97fa21-e19b-11eb-871f-0f966330432a": {
                  friendUserName: "Mia",
                  userName: "Ada",
                  activity: "followed",
                  activityDate: 1625934377666,
                  activityId: "8d97fa21-e19b-11eb-871f-0f966330432a",
                },
                "8ee93241-e19b-11eb-871f-0f966330432a": {
                  friendUserName: "Chloe",
                  userName: "Ada",
                  activity: "followed",
                  activityDate: 1625934379876,
                  activityId: "8ee93241-e19b-11eb-871f-0f966330432a",
                },
                "9044caa1-e19b-11eb-871f-0f966330432a": {
                  friendUserName: "Nova",
                  userName: "Ada",
                  activity: "followed",
                  activityDate: 1625934382154,
                  activityId: "9044caa1-e19b-11eb-871f-0f966330432a",
                },
                "917b4ed1-e19b-11eb-871f-0f966330432a": {
                  friendUserName: "Ivy",
                  userName: "Ada",
                  activity: "followed",
                  activityDate: 1625934384189,
                  activityId: "917b4ed1-e19b-11eb-871f-0f966330432a",
                },
              },
              userCoverImage: "",
              userId: "a289cb20-d9cb-11eb-ba8c-e9a262a433df",
              userProfileImage: a("4e5d"),
            },
            Mia: {
              userName: "Mia",
              emailAddress: "",
              password: "somedia",
              firstName: "Mary",
              lastName: "George",
              gender: "Female",
              address: "",
              postCode: "",
              country: "",
              city: "",
              aboutMe: "",
              posts: [],
              followers: [{ userName: "Ada" }],
              following: [],
              friends: [],
              age: "",
              education: "",
              videos: [],
              photos: [
                {
                  imageUrl: a("4a8f"),
                  imageId: "2212b180-df45-11eb-a210-09083f776f3d",
                },
                {
                  imageUrl: a("8919"),
                  imageId: "d9341a22-df45-11eb-a210-09083f776f3d",
                },
              ],
              messages: {
                Carter: {
                  "34ff7430-df4b-11eb-836f-59a9e97a569e": {
                    userName: "Mia",
                    messageId: "34ff7430-df4b-11eb-836f-59a9e97a569e",
                    message: "hi",
                    messageDate: 1625679966963,
                    messageStatus: "Read",
                  },
                  "47573040-e0b9-11eb-b036-69cc37af9c61": {
                    userName: "Carter",
                    messageId: "47573040-e0b9-11eb-b036-69cc37af9c61",
                    message: "hello how are doing",
                    messageDate: 1625837193540,
                    messageStatus: "sent",
                  },
                },
                Ava: {
                  "57cebd40-df4b-11eb-961c-b7b5c586ebc2": {
                    userName: "Mia",
                    messageId: "57cebd40-df4b-11eb-961c-b7b5c586ebc2",
                    message: "hello",
                    messageDate: 1625680025364,
                    messageStatus: "Read",
                  },
                  "dd38f1d0-df4b-11eb-961c-b7b5c586ebc2": {
                    userName: "Ava",
                    messageId: "dd38f1d0-df4b-11eb-961c-b7b5c586ebc2",
                    message: "hi ,how are you",
                    messageDate: 1625680249197,
                    messageStatus: "sent",
                  },
                },
              },
              messageStatus: {
                Carter: {
                  friendMessaged: "Carter",
                  userName: "Carter",
                  messageOnScreen: !1,
                  messageViewStatus: "unRead",
                  messageDate: 1625837193540,
                  showMessage: !0,
                },
                Ava: {
                  friendMessaged: "Ava",
                  userName: "Ava",
                  messageOnScreen: !1,
                  messageViewStatus: "unRead",
                  messageDate: 1625680249198,
                  showMessage: !0,
                },
              },
              notifications: {
                "dd176ed0-df45-11eb-a210-09083f776f3d": {
                  userName: "Mia",
                  posterUserName: "Mia",
                  notificationId: "dd176ed0-df45-11eb-a210-09083f776f3d",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625677671997,
                },
                "a6b0adb0-df4b-11eb-961c-b7b5c586ebc2": {
                  userName: "Ava",
                  posterUserName: "Mia",
                  notificationId: "a6b0adb0-df4b-11eb-961c-b7b5c586ebc2",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625680157707,
                },
                "a6b0d4c0-df4b-11eb-961c-b7b5c586ebc2": {
                  userName: "Ava",
                  posterUserName: "Mia",
                  notificationId: "a6b0d4c0-df4b-11eb-961c-b7b5c586ebc2",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625680157708,
                },
                "dd3918e0-df4b-11eb-961c-b7b5c586ebc2": {
                  userName: "Ava",
                  friendUserName: "Mia",
                  notificationId: "dd3918e0-df4b-11eb-961c-b7b5c586ebc2",
                  notificationType: "message",
                  notificationStatus: "unRead",
                  notificationDate: 1625680249198,
                },
                "7b59db90-e064-11eb-8d8d-bf9aae01f450": {
                  userName: "Sophie",
                  posterUserName: "Mia",
                  notificationId: "7b59db90-e064-11eb-8d8d-bf9aae01f450",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625800773577,
                },
                "7b59db91-e064-11eb-8d8d-bf9aae01f450": {
                  userName: "Sophie",
                  posterUserName: "Mia",
                  notificationId: "7b59db91-e064-11eb-8d8d-bf9aae01f450",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625800773577,
                },
                "92948e40-e0af-11eb-90ca-19effd8b5a00": {
                  userName: "Ethan",
                  posterUserName: "Mia",
                  notificationId: "92948e40-e0af-11eb-90ca-19effd8b5a00",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625833024804,
                },
                "92948e41-e0af-11eb-90ca-19effd8b5a00": {
                  userName: "Ethan",
                  posterUserName: "Mia",
                  notificationId: "92948e41-e0af-11eb-90ca-19effd8b5a00",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625833024804,
                },
                "6fcbed30-e0b5-11eb-b9c1-cfb72beca659": {
                  userName: "Ella",
                  posterUserName: "Mia",
                  notificationId: "6fcbed30-e0b5-11eb-b9c1-cfb72beca659",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625835543428,
                },
                "6fcc1440-e0b5-11eb-b9c1-cfb72beca659": {
                  userName: "Ella",
                  posterUserName: "Mia",
                  notificationId: "6fcc1440-e0b5-11eb-b9c1-cfb72beca659",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625835543428,
                },
                "47575750-e0b9-11eb-b036-69cc37af9c61": {
                  userName: "Carter",
                  friendUserName: "Mia",
                  notificationId: "47575750-e0b9-11eb-b036-69cc37af9c61",
                  notificationType: "message",
                  notificationStatus: "unRead",
                  notificationDate: 1625837193541,
                },
                "f69de060-e0bb-11eb-bbed-5fb8923dc3e7": {
                  userName: "Carter",
                  posterUserName: "Mia",
                  notificationId: "f69de060-e0bb-11eb-bbed-5fb8923dc3e7",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625838346598,
                },
                "f69de061-e0bb-11eb-bbed-5fb8923dc3e7": {
                  userName: "Carter",
                  posterUserName: "Mia",
                  notificationId: "f69de061-e0bb-11eb-bbed-5fb8923dc3e7",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625838346598,
                },
                "d4875270-e0db-11eb-907b-171d7592562f": {
                  userName: "Chloe",
                  posterUserName: "Mia",
                  notificationId: "d4875270-e0db-11eb-907b-171d7592562f",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625852033303,
                },
                "d4875271-e0db-11eb-907b-171d7592562f": {
                  userName: "Chloe",
                  posterUserName: "Mia",
                  notificationId: "d4875271-e0db-11eb-907b-171d7592562f",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625852033303,
                },
                "8d97fa20-e19b-11eb-871f-0f966330432a": {
                  userName: "Ada",
                  friendUserName: "Mia",
                  notificationId: "8d97fa20-e19b-11eb-871f-0f966330432a",
                  notificationType: "follow",
                  notificationStatus: "unRead",
                  notificationDate: 1625934377666,
                },
                "f8dadc60-e19d-11eb-86e8-11fcf2392733": {
                  userName: "Olive",
                  posterUserName: "Mia",
                  notificationId: "f8dadc60-e19d-11eb-86e8-11fcf2392733",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625935416614,
                },
                "f8dadc61-e19d-11eb-86e8-11fcf2392733": {
                  userName: "Olive",
                  posterUserName: "Mia",
                  notificationId: "f8dadc61-e19d-11eb-86e8-11fcf2392733",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625935416614,
                },
                "35095ae0-e19e-11eb-86e8-11fcf2392733": {
                  userName: "Olive",
                  friendUserName: "Mia",
                  notificationId: "35095ae0-e19e-11eb-86e8-11fcf2392733",
                  notificationType: "friend request",
                  notificationStatus: "unRead",
                  notificationDate: 1625935517582,
                },
              },
              occupation: "",
              status: "online",
              activities: {
                "5afcd530-db39-11eb-af32-47b0df65ae76": {
                  userName: "Mia",
                  activity: "Created account",
                  activityDate: 1625232495107,
                  activityId: "5afcd530-db39-11eb-af32-47b0df65ae76",
                },
                "1aaf6fc0-df43-11eb-a210-09083f776f3d": {
                  userName: "Mia",
                  activity: "logged in",
                  activityDate: 1625676486844,
                  activityId: "1aaf6fc0-df43-11eb-a210-09083f776f3d",
                },
                "22772a90-df43-11eb-a210-09083f776f3d": {
                  userName: "Mia",
                  posterUserName: "Carter",
                  activity: "liked",
                  activityDate: 1625676499897,
                  activityId: "22772a90-df43-11eb-a210-09083f776f3d",
                },
                "24f63451-df43-11eb-a210-09083f776f3d": {
                  userName: "Mia",
                  posterUserName: "Nova",
                  activity: "liked",
                  activityDate: 1625676504085,
                  activityId: "24f63451-df43-11eb-a210-09083f776f3d",
                },
                "264ee682-df43-11eb-a210-09083f776f3d": {
                  userName: "Mia",
                  posterUserName: "Lily",
                  activity: "liked",
                  activityDate: 1625676506344,
                  activityId: "264ee682-df43-11eb-a210-09083f776f3d",
                },
                "332110e2-df43-11eb-a210-09083f776f3d": {
                  userName: "Mia",
                  posterUserName: "Lily",
                  activity: "commented",
                  activityDate: 1625676527854,
                  activityId: "332110e2-df43-11eb-a210-09083f776f3d",
                },
                "58c94382-df43-11eb-a210-09083f776f3d": {
                  userName: "Mia",
                  posterUserName: "Carter",
                  activity: "commented",
                  activityDate: 1625676591032,
                  activityId: "58c94382-df43-11eb-a210-09083f776f3d",
                },
                "d9344131-df45-11eb-a210-09083f776f3d": {
                  userName: "Mia",
                  activity: "posted",
                  activityDate: 1625677665475,
                  activityId: "d9344131-df45-11eb-a210-09083f776f3d",
                },
                "dd176ed2-df45-11eb-a210-09083f776f3d": {
                  userName: "Mia",
                  posterUserName: "Mia",
                  activity: "liked",
                  activityDate: 1625677671997,
                  activityId: "dd176ed2-df45-11eb-a210-09083f776f3d",
                },
                "73f947b0-df4b-11eb-961c-b7b5c586ebc2": {
                  userName: "Mia",
                  posterUserName: "Nova",
                  commenterUserName: "Carter",
                  activity: "likedComment",
                  activityDate: 1625680072619,
                  activityId: "73f947b0-df4b-11eb-961c-b7b5c586ebc2",
                },
                "85737652-df4b-11eb-961c-b7b5c586ebc2": {
                  userName: "Mia",
                  posterUserName: "Nova",
                  activity: "commented",
                  activityDate: 1625680101941,
                  activityId: "85737652-df4b-11eb-961c-b7b5c586ebc2",
                },
              },
              userCoverImage: "/img/defaultBg.2793204e.jpg",
              userId: "5afc8710-db39-11eb-af32-47b0df65ae76",
              userProfileImage: a("4a8f"),
            },
            Ava: {
              userName: "Ava",
              emailAddress: "Ava@email.com",
              password: "somedia",
              firstName: "Charlotte",
              lastName: "Glenn",
              gender: "Female",
              address: "",
              postCode: "",
              country: "",
              city: "",
              aboutMe: "",
              posts: [],
              followers: [],
              following: [],
              friends: [
                { userName: "Lily" },
                { userName: "Carter" },
                { userName: "Ada" },
                { userName: "Smith" },
              ],
              age: "",
              education: "",
              videos: [],
              photos: [
                {
                  imageUrl: a("30c8"),
                  imageId: "802c9680-e0aa-11eb-bcb8-25b2107d0c08",
                },
                {
                  imageUrl: a("b85a"),
                  imageId: "4f386ee0-e0ab-11eb-bcb8-25b2107d0c08",
                },
              ],
              messages: {
                Mia: {
                  "57cebd40-df4b-11eb-961c-b7b5c586ebc2": {
                    userName: "Mia",
                    messageId: "57cebd40-df4b-11eb-961c-b7b5c586ebc2",
                    message: "hello",
                    messageDate: 1625680025364,
                    messageStatus: "Read",
                  },
                  "dd38f1d0-df4b-11eb-961c-b7b5c586ebc2": {
                    userName: "Ava",
                    messageId: "dd38f1d0-df4b-11eb-961c-b7b5c586ebc2",
                    message: "hi ,how are you",
                    messageDate: 1625680249197,
                    messageStatus: "sent",
                  },
                },
              },
              messageStatus: {
                Mia: {
                  friendMessaged: "Mia",
                  userName: "Ava",
                  messageOnScreen: "off",
                  messageViewStatus: "Read",
                  messageDate: 1625831254277,
                  showMessage: !0,
                },
              },
              notifications: {
                "57cee450-df4b-11eb-961c-b7b5c586ebc2": {
                  userName: "Mia",
                  friendUserName: "Ava",
                  notificationId: "57cee450-df4b-11eb-961c-b7b5c586ebc2",
                  notificationType: "message",
                  notificationStatus: "Read",
                  notificationDate: 1625680025365,
                },
                "770e7240-e090-11eb-bcb8-25b2107d0c08": {
                  userName: "Sophie",
                  friendUserName: "Ava",
                  notificationId: "770e7240-e090-11eb-bcb8-25b2107d0c08",
                  notificationType: "friend request",
                  notificationStatus: "Read",
                  notificationDate: 1625819664228,
                },
                "53730b50-e0ab-11eb-bcb8-25b2107d0c08": {
                  userName: "Ava",
                  posterUserName: "Ava",
                  notificationId: "53730b50-e0ab-11eb-bcb8-25b2107d0c08",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625831200901,
                },
                "7cc22910-e0af-11eb-90ca-19effd8b5a00": {
                  userName: "Ethan",
                  posterUserName: "Ava",
                  notificationId: "7cc22910-e0af-11eb-90ca-19effd8b5a00",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625832988194,
                },
                "7cc27730-e0af-11eb-90ca-19effd8b5a00": {
                  userName: "Ethan",
                  posterUserName: "Ava",
                  notificationId: "7cc27730-e0af-11eb-90ca-19effd8b5a00",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625832988195,
                },
                "6e069680-e0b5-11eb-b9c1-cfb72beca659": {
                  userName: "Ella",
                  posterUserName: "Ava",
                  notificationId: "6e069680-e0b5-11eb-b9c1-cfb72beca659",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625835540456,
                },
                "6e069681-e0b5-11eb-b9c1-cfb72beca659": {
                  userName: "Ella",
                  posterUserName: "Ava",
                  notificationId: "6e069681-e0b5-11eb-b9c1-cfb72beca659",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625835540456,
                },
                "27472e40-e0b9-11eb-b036-69cc37af9c61": {
                  userName: "Carter",
                  friendUserName: "Ava",
                  notificationId: "27472e40-e0b9-11eb-b036-69cc37af9c61",
                  notificationType: "Accepted Friend Request",
                  notificationStatus: "unRead",
                  notificationDate: 1625837139748,
                },
                "a55477c0-e0b9-11eb-b036-69cc37af9c61": {
                  userName: "Carter",
                  notificationId: "a55477c0-e0b9-11eb-b036-69cc37af9c61",
                  notificationType: "post",
                  notificationStatus: "unRead",
                  notificationDate: 1625837351228,
                },
                "f52f0e20-e0bb-11eb-bbed-5fb8923dc3e7": {
                  userName: "Carter",
                  posterUserName: "Ava",
                  notificationId: "f52f0e20-e0bb-11eb-bbed-5fb8923dc3e7",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625838344194,
                },
                "f52f3530-e0bb-11eb-bbed-5fb8923dc3e7": {
                  userName: "Carter",
                  posterUserName: "Ava",
                  notificationId: "f52f3530-e0bb-11eb-bbed-5fb8923dc3e7",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625838344195,
                },
                "f69de060-e0bb-11eb-bbed-5fb8923dc3e7": {
                  userName: "Carter",
                  posterUserName: "Mia",
                  notificationId: "f69de060-e0bb-11eb-bbed-5fb8923dc3e7",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625838346598,
                },
                "f69de061-e0bb-11eb-bbed-5fb8923dc3e7": {
                  userName: "Carter",
                  posterUserName: "Mia",
                  notificationId: "f69de061-e0bb-11eb-bbed-5fb8923dc3e7",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625838346598,
                },
                "ffdd9531-e0bb-11eb-bbed-5fb8923dc3e7": {
                  userName: "Carter",
                  posterUserName: "Carter",
                  notificationId: "ffdd9531-e0bb-11eb-bbed-5fb8923dc3e7",
                  notificationType: "comment",
                  notificationStatus: "unRead",
                  notificationDate: 1625838362116,
                },
                "6bb30560-e0bc-11eb-acf8-97f832451a98": {
                  userName: "Carter",
                  posterUserName: "Carter",
                  notificationId: "6bb30560-e0bc-11eb-acf8-97f832451a98",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625838543030,
                },
                "6bb37a90-e0bc-11eb-acf8-97f832451a98": {
                  userName: "Carter",
                  posterUserName: "Carter",
                  notificationId: "6bb37a90-e0bc-11eb-acf8-97f832451a98",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625838543033,
                },
                "d0b53010-e0c0-11eb-85f3-797226efa932": {
                  userName: "Sophie",
                  posterUserName: "Ava",
                  notificationId: "d0b53010-e0c0-11eb-85f3-797226efa932",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625840430481,
                },
                "d0b57e30-e0c0-11eb-85f3-797226efa932": {
                  userName: "Sophie",
                  posterUserName: "Ava",
                  notificationId: "d0b57e30-e0c0-11eb-85f3-797226efa932",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625840430483,
                },
                "d2fda530-e0db-11eb-907b-171d7592562f": {
                  userName: "Chloe",
                  posterUserName: "Ava",
                  notificationId: "d2fda530-e0db-11eb-907b-171d7592562f",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625852030723,
                },
                "d2fda531-e0db-11eb-907b-171d7592562f": {
                  userName: "Chloe",
                  posterUserName: "Ava",
                  notificationId: "d2fda531-e0db-11eb-907b-171d7592562f",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625852030723,
                },
                "755b4bb0-e19b-11eb-871f-0f966330432a": {
                  userName: "Ada",
                  friendUserName: "Ava",
                  notificationId: "755b4bb0-e19b-11eb-871f-0f966330432a",
                  notificationType: "Accepted Friend Request",
                  notificationStatus: "unRead",
                  notificationDate: 1625934337003,
                },
                "f75a2fd0-e19d-11eb-86e8-11fcf2392733": {
                  userName: "Olive",
                  posterUserName: "Ava",
                  notificationId: "f75a2fd0-e19d-11eb-86e8-11fcf2392733",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625935414093,
                },
                "f75a56e0-e19d-11eb-86e8-11fcf2392733": {
                  userName: "Olive",
                  posterUserName: "Ava",
                  notificationId: "f75a56e0-e19d-11eb-86e8-11fcf2392733",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625935414094,
                },
                "ace52ad0-e26b-11eb-af05-7d0898d50a19": {
                  userName: "Olive",
                  friendUserName: "Ava",
                  notificationId: "ace52ad0-e26b-11eb-af05-7d0898d50a19",
                  notificationType: "friend request",
                  notificationStatus: "unRead",
                  notificationDate: 1626023765501,
                },
                "d7e29d91-e2ab-11eb-8a39-b39ebfa4685e": {
                  userName: "Smith",
                  friendUserName: "Ava",
                  notificationId: "d7e29d91-e2ab-11eb-8a39-b39ebfa4685e",
                  notificationType: "Accepted Friend Request",
                  notificationStatus: "unRead",
                  notificationDate: 1626051325417,
                },
                "8fa29610-e32e-11eb-a03f-b542039adbaa": {
                  userName: "Lily",
                  posterUserName: "Smith",
                  notificationId: "8fa29610-e32e-11eb-a03f-b542039adbaa",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1626107468273,
                },
                "8fa2e430-e32e-11eb-a03f-b542039adbaa": {
                  userName: "Lily",
                  posterUserName: "Smith",
                  notificationId: "8fa2e430-e32e-11eb-a03f-b542039adbaa",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1626107468275,
                },
                "9656be00-e32e-11eb-a03f-b542039adbaa": {
                  userName: "Lily",
                  posterUserName: "Liam",
                  notificationId: "9656be00-e32e-11eb-a03f-b542039adbaa",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1626107479520,
                },
                "9656e510-e32e-11eb-a03f-b542039adbaa": {
                  userName: "Lily",
                  posterUserName: "Liam",
                  notificationId: "9656e510-e32e-11eb-a03f-b542039adbaa",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1626107479521,
                },
                "0ceed980-e32f-11eb-a03f-b542039adbaa": {
                  userName: "Lily",
                  notificationId: "0ceed980-e32f-11eb-a03f-b542039adbaa",
                  notificationType: "post",
                  notificationStatus: "unRead",
                  notificationDate: 1626107678488,
                },
              },
              occupation: "",
              status: "online",
              activities: {
                "839d3930-db39-11eb-af32-47b0df65ae76": {
                  userName: "Ava",
                  activity: "Created account",
                  activityDate: 1625232563267,
                  activityId: "839d3930-db39-11eb-af32-47b0df65ae76",
                },
                "a0e0f250-df4b-11eb-961c-b7b5c586ebc2": {
                  userName: "Ava",
                  activity: "logged in",
                  activityDate: 1625680147957,
                  activityId: "a0e0f250-df4b-11eb-961c-b7b5c586ebc2",
                },
                "a6b0d4c1-df4b-11eb-961c-b7b5c586ebc2": {
                  userName: "Ava",
                  posterUserName: "Mia",
                  activity: "liked",
                  activityDate: 1625680157708,
                  activityId: "a6b0d4c1-df4b-11eb-961c-b7b5c586ebc2",
                },
                "cbe58510-df4b-11eb-961c-b7b5c586ebc2": {
                  userName: "Ava",
                  posterUserName: "Mia",
                  activity: "commented",
                  activityDate: 1625680220129,
                  activityId: "cbe58510-df4b-11eb-961c-b7b5c586ebc2",
                },
                "9f397f30-e090-11eb-bcb8-25b2107d0c08": {
                  friendUserName: "Lily",
                  userName: "Ava",
                  activity: "Accepted Friend Request",
                  activityDate: 1625819731619,
                  activityId: "9f397f30-e090-11eb-bcb8-25b2107d0c08",
                },
                "a0c687d1-e090-11eb-bcb8-25b2107d0c08": {
                  userName: "Ava",
                  friendUserName: "Smith",
                  activity: "Friend request",
                  activityDate: 1625819734221,
                  activityId: "a0c687d1-e090-11eb-bcb8-25b2107d0c08",
                },
                "a2cedaf0-e090-11eb-bcb8-25b2107d0c08": {
                  userName: "Ava",
                  friendUserName: "Ada",
                  activity: "Friend request",
                  activityDate: 1625819737631,
                  activityId: "a2cedaf0-e090-11eb-bcb8-25b2107d0c08",
                },
                "a65f0691-e090-11eb-bcb8-25b2107d0c08": {
                  userName: "Ava",
                  friendUserName: "Carter",
                  activity: "Friend request",
                  activityDate: 1625819743609,
                  activityId: "a65f0691-e090-11eb-bcb8-25b2107d0c08",
                },
                "4f38e410-e0ab-11eb-bcb8-25b2107d0c08": {
                  userName: "Ava",
                  activity: "posted",
                  activityDate: 1625831193809,
                  activityId: "4f38e410-e0ab-11eb-bcb8-25b2107d0c08",
                },
                "53733261-e0ab-11eb-bcb8-25b2107d0c08": {
                  userName: "Ava",
                  posterUserName: "Ava",
                  activity: "liked",
                  activityDate: 1625831200902,
                  activityId: "53733261-e0ab-11eb-bcb8-25b2107d0c08",
                },
              },
              userCoverImage: "/img/defaultBg.2793204e.jpg",
              userId: "839d1220-db39-11eb-af32-47b0df65ae76",
              userProfileImage: a("30c8"),
            },
            Ella: {
              userName: "Ella",
              emailAddress: "Ella@email.com",
              password: "somedia",
              firstName: "Ella",
              lastName: "Kendrick",
              gender: "Female",
              address: "",
              postCode: "",
              country: "",
              city: "",
              aboutMe: "",
              posts: [],
              followers: [],
              following: [],
              friends: [
                { userName: "Lily" },
                { userName: "Carter" },
                { userName: "Ruby" },
                { userName: "Chloe" },
                { userName: "Ada" },
                { userName: "Olive" },
                { userName: "Smith" },
              ],
              age: "",
              education: "",
              videos: [
                {
                  videoUrl:
                    "blob:http://localhost:8080/ae0d9e7a-8f01-4ab1-92e1-06c143e2af44",
                  videoId: "0f0779f0-e0b6-11eb-bb52-d5cdf6bb26a5",
                  videoAutoplay: !1,
                },
              ],
              photos: [
                {
                  imageUrl: a("146c"),
                  imageId: "a2a72ee0-e0b5-11eb-b9c1-cfb72beca659",
                },
              ],
              messages: {},
              messageStatus: {},
              notifications: {
                "59029d80-e0b8-11eb-a091-bd97fb995f1d": {
                  userName: "Ella",
                  posterUserName: "Ella",
                  notificationId: "59029d80-e0b8-11eb-a091-bd97fb995f1d",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625836793688,
                },
                "83866780-e0b8-11eb-a091-bd97fb995f1d": {
                  userName: "Carter",
                  posterUserName: "Ella",
                  notificationId: "83866780-e0b8-11eb-a091-bd97fb995f1d",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625836865016,
                },
                "83868e90-e0b8-11eb-a091-bd97fb995f1d": {
                  userName: "Carter",
                  posterUserName: "Ella",
                  notificationId: "83868e90-e0b8-11eb-a091-bd97fb995f1d",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625836865017,
                },
                "28207741-e0b9-11eb-b036-69cc37af9c61": {
                  userName: "Carter",
                  friendUserName: "Ella",
                  notificationId: "28207741-e0b9-11eb-b036-69cc37af9c61",
                  notificationType: "Accepted Friend Request",
                  notificationStatus: "unRead",
                  notificationDate: 1625837141172,
                },
                "a55477c0-e0b9-11eb-b036-69cc37af9c61": {
                  userName: "Carter",
                  notificationId: "a55477c0-e0b9-11eb-b036-69cc37af9c61",
                  notificationType: "post",
                  notificationStatus: "unRead",
                  notificationDate: 1625837351228,
                },
                "f52f0e20-e0bb-11eb-bbed-5fb8923dc3e7": {
                  userName: "Carter",
                  posterUserName: "Ava",
                  notificationId: "f52f0e20-e0bb-11eb-bbed-5fb8923dc3e7",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625838344194,
                },
                "f52f3530-e0bb-11eb-bbed-5fb8923dc3e7": {
                  userName: "Carter",
                  posterUserName: "Ava",
                  notificationId: "f52f3530-e0bb-11eb-bbed-5fb8923dc3e7",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625838344195,
                },
                "f69de060-e0bb-11eb-bbed-5fb8923dc3e7": {
                  userName: "Carter",
                  posterUserName: "Mia",
                  notificationId: "f69de060-e0bb-11eb-bbed-5fb8923dc3e7",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625838346598,
                },
                "f69de061-e0bb-11eb-bbed-5fb8923dc3e7": {
                  userName: "Carter",
                  posterUserName: "Mia",
                  notificationId: "f69de061-e0bb-11eb-bbed-5fb8923dc3e7",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625838346598,
                },
                "ffdd9531-e0bb-11eb-bbed-5fb8923dc3e7": {
                  userName: "Carter",
                  posterUserName: "Carter",
                  notificationId: "ffdd9531-e0bb-11eb-bbed-5fb8923dc3e7",
                  notificationType: "comment",
                  notificationStatus: "unRead",
                  notificationDate: 1625838362116,
                },
                "6bb30560-e0bc-11eb-acf8-97f832451a98": {
                  userName: "Carter",
                  posterUserName: "Carter",
                  notificationId: "6bb30560-e0bc-11eb-acf8-97f832451a98",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625838543030,
                },
                "6bb37a90-e0bc-11eb-acf8-97f832451a98": {
                  userName: "Carter",
                  posterUserName: "Carter",
                  notificationId: "6bb37a90-e0bc-11eb-acf8-97f832451a98",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625838543033,
                },
                "1f7f2880-e0bd-11eb-8787-59040f6b2cc8": {
                  userName: "Ruby",
                  posterUserName: "Ella",
                  notificationId: "1f7f2880-e0bd-11eb-8787-59040f6b2cc8",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625838844680,
                },
                "1f7f2881-e0bd-11eb-8787-59040f6b2cc8": {
                  userName: "Ruby",
                  posterUserName: "Ella",
                  notificationId: "1f7f2881-e0bd-11eb-8787-59040f6b2cc8",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625838844680,
                },
                "4f2a5891-e0c0-11eb-8787-59040f6b2cc8": {
                  userName: "Ruby",
                  friendUserName: "Ella",
                  notificationId: "4f2a5891-e0c0-11eb-8787-59040f6b2cc8",
                  notificationType: "Accepted Friend Request",
                  notificationStatus: "unRead",
                  notificationDate: 1625840213145,
                },
                "ccfc0460-e0db-11eb-907b-171d7592562f": {
                  userName: "Chloe",
                  posterUserName: "Ella",
                  notificationId: "ccfc0460-e0db-11eb-907b-171d7592562f",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625852020646,
                },
                "ccfc0461-e0db-11eb-907b-171d7592562f": {
                  userName: "Chloe",
                  posterUserName: "Ella",
                  notificationId: "ccfc0461-e0db-11eb-907b-171d7592562f",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625852020646,
                },
                "7cd721c1-e0dd-11eb-907b-171d7592562f": {
                  userName: "Chloe",
                  friendUserName: "Ella",
                  notificationId: "7cd721c1-e0dd-11eb-907b-171d7592562f",
                  notificationType: "Accepted Friend Request",
                  notificationStatus: "unRead",
                  notificationDate: 1625852745180,
                },
                "f4095a60-e0dd-11eb-9684-6f71396aed14": {
                  userName: "Chloe",
                  posterUserName: "Chloe",
                  notificationId: "f4095a60-e0dd-11eb-9684-6f71396aed14",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625852945158,
                },
                "f409f6a0-e0dd-11eb-9684-6f71396aed14": {
                  userName: "Chloe",
                  posterUserName: "Chloe",
                  notificationId: "f409f6a0-e0dd-11eb-9684-6f71396aed14",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625852945162,
                },
                "06f9fc60-e0de-11eb-9684-6f71396aed14": {
                  userName: "Chloe",
                  posterUserName: "Chloe",
                  notificationId: "06f9fc60-e0de-11eb-9684-6f71396aed14",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625852976934,
                },
                "088a3950-e0de-11eb-9684-6f71396aed14": {
                  userName: "Chloe",
                  posterUserName: "Chloe",
                  notificationId: "088a3950-e0de-11eb-9684-6f71396aed14",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625852979557,
                },
                "0fb0f930-e0de-11eb-9684-6f71396aed14": {
                  userName: "Chloe",
                  posterUserName: "Chloe",
                  notificationId: "0fb0f930-e0de-11eb-9684-6f71396aed14",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625852991555,
                },
                "0fb12040-e0de-11eb-9684-6f71396aed14": {
                  userName: "Chloe",
                  posterUserName: "Chloe",
                  notificationId: "0fb12040-e0de-11eb-9684-6f71396aed14",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625852991556,
                },
                "80065051-e19b-11eb-871f-0f966330432a": {
                  userName: "Ada",
                  friendUserName: "Ella",
                  notificationId: "80065051-e19b-11eb-871f-0f966330432a",
                  notificationType: "Accepted Friend Request",
                  notificationStatus: "unRead",
                  notificationDate: 1625934354901,
                },
                "f3554960-e19d-11eb-86e8-11fcf2392733": {
                  userName: "Olive",
                  posterUserName: "Ella",
                  notificationId: "f3554960-e19d-11eb-86e8-11fcf2392733",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625935407350,
                },
                "f3554961-e19d-11eb-86e8-11fcf2392733": {
                  userName: "Olive",
                  posterUserName: "Ella",
                  notificationId: "f3554961-e19d-11eb-86e8-11fcf2392733",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625935407350,
                },
                "1e29a460-e19e-11eb-86e8-11fcf2392733": {
                  userName: "Olive",
                  friendUserName: "Ella",
                  notificationId: "1e29a460-e19e-11eb-86e8-11fcf2392733",
                  notificationType: "Accepted Friend Request",
                  notificationStatus: "unRead",
                  notificationDate: 1625935479206,
                },
                "77d296c0-e26b-11eb-af05-7d0898d50a19": {
                  userName: "Olive",
                  notificationId: "77d296c0-e26b-11eb-af05-7d0898d50a19",
                  notificationType: "post",
                  notificationStatus: "unRead",
                  notificationDate: 1626023676460,
                },
                "8210cfd0-e26b-11eb-af05-7d0898d50a19": {
                  userName: "Olive",
                  posterUserName: "Olive",
                  notificationId: "8210cfd0-e26b-11eb-af05-7d0898d50a19",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1626023693645,
                },
                "8210f6e0-e26b-11eb-af05-7d0898d50a19": {
                  userName: "Olive",
                  posterUserName: "Olive",
                  notificationId: "8210f6e0-e26b-11eb-af05-7d0898d50a19",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1626023693646,
                },
                "d9726551-e2ab-11eb-8a39-b39ebfa4685e": {
                  userName: "Smith",
                  friendUserName: "Ella",
                  notificationId: "d9726551-e2ab-11eb-8a39-b39ebfa4685e",
                  notificationType: "Accepted Friend Request",
                  notificationStatus: "unRead",
                  notificationDate: 1626051328037,
                },
                "8fa29610-e32e-11eb-a03f-b542039adbaa": {
                  userName: "Lily",
                  posterUserName: "Smith",
                  notificationId: "8fa29610-e32e-11eb-a03f-b542039adbaa",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1626107468273,
                },
                "8fa2e430-e32e-11eb-a03f-b542039adbaa": {
                  userName: "Lily",
                  posterUserName: "Smith",
                  notificationId: "8fa2e430-e32e-11eb-a03f-b542039adbaa",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1626107468275,
                },
                "9656be00-e32e-11eb-a03f-b542039adbaa": {
                  userName: "Lily",
                  posterUserName: "Liam",
                  notificationId: "9656be00-e32e-11eb-a03f-b542039adbaa",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1626107479520,
                },
                "9656e510-e32e-11eb-a03f-b542039adbaa": {
                  userName: "Lily",
                  posterUserName: "Liam",
                  notificationId: "9656e510-e32e-11eb-a03f-b542039adbaa",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1626107479521,
                },
                "0ceed980-e32f-11eb-a03f-b542039adbaa": {
                  userName: "Lily",
                  notificationId: "0ceed980-e32f-11eb-a03f-b542039adbaa",
                  notificationType: "post",
                  notificationStatus: "unRead",
                  notificationDate: 1626107678488,
                },
              },
              occupation: "",
              status: "online",
              activities: {
                "a7f60870-db39-11eb-af32-47b0df65ae76": {
                  userName: "Ella",
                  activity: "Created account",
                  activityDate: 1625232624247,
                  activityId: "a7f60870-db39-11eb-af32-47b0df65ae76",
                },
                "69766000-e0b5-11eb-b9c1-cfb72beca659": {
                  userName: "Ella",
                  activity: "logged in",
                  activityDate: 1625835532800,
                  activityId: "69766000-e0b5-11eb-b9c1-cfb72beca659",
                },
                "6cc4a0a1-e0b5-11eb-b9c1-cfb72beca659": {
                  userName: "Ella",
                  posterUserName: "Ethan",
                  activity: "liked",
                  activityDate: 1625835538346,
                  activityId: "6cc4a0a1-e0b5-11eb-b9c1-cfb72beca659",
                },
                "6e069682-e0b5-11eb-b9c1-cfb72beca659": {
                  userName: "Ella",
                  posterUserName: "Ava",
                  activity: "liked",
                  activityDate: 1625835540456,
                  activityId: "6e069682-e0b5-11eb-b9c1-cfb72beca659",
                },
                "6fcc1441-e0b5-11eb-b9c1-cfb72beca659": {
                  userName: "Ella",
                  posterUserName: "Mia",
                  activity: "liked",
                  activityDate: 1625835543428,
                  activityId: "6fcc1441-e0b5-11eb-b9c1-cfb72beca659",
                },
                "c6361e71-e0b5-11eb-b9c1-cfb72beca659": {
                  userName: "Ella",
                  friendUserName: "Carter",
                  activity: "Friend request",
                  activityDate: 1625835688407,
                  activityId: "c6361e71-e0b5-11eb-b9c1-cfb72beca659",
                },
                "c6e23cf0-e0b5-11eb-b9c1-cfb72beca659": {
                  userName: "Ella",
                  friendUserName: "Ethan",
                  activity: "Friend request",
                  activityDate: 1625835689535,
                  activityId: "c6e23cf0-e0b5-11eb-b9c1-cfb72beca659",
                },
                "c7f66c11-e0b5-11eb-b9c1-cfb72beca659": {
                  userName: "Ella",
                  friendUserName: "Josh",
                  activity: "Friend request",
                  activityDate: 1625835691345,
                  activityId: "c7f66c11-e0b5-11eb-b9c1-cfb72beca659",
                },
                "c8d72f20-e0b5-11eb-b9c1-cfb72beca659": {
                  userName: "Ella",
                  friendUserName: "Liam",
                  activity: "Friend request",
                  activityDate: 1625835692818,
                  activityId: "c8d72f20-e0b5-11eb-b9c1-cfb72beca659",
                },
                "cc328f20-e0b5-11eb-b9c1-cfb72beca659": {
                  friendUserName: "Lily",
                  userName: "Ella",
                  activity: "Accepted Friend Request",
                  activityDate: 1625835698450,
                  activityId: "cc328f20-e0b5-11eb-b9c1-cfb72beca659",
                },
                "e83d5c90-e0b5-11eb-b9c1-cfb72beca659": {
                  userName: "Ella",
                  posterUserName: "Ethan",
                  activity: "commented",
                  activityDate: 1625835745497,
                  activityId: "e83d5c90-e0b5-11eb-b9c1-cfb72beca659",
                },
                "0f07ef20-e0b6-11eb-bb52-d5cdf6bb26a5": {
                  userName: "Ella",
                  activity: "posted",
                  activityDate: 1625835810578,
                  activityId: "0f07ef20-e0b6-11eb-bb52-d5cdf6bb26a5",
                },
                "e1e96b20-e0b7-11eb-9af9-d5891ea9efef": {
                  userName: "Ella",
                  activity: "logged in",
                  activityDate: 1625836593874,
                  activityId: "e1e96b20-e0b7-11eb-9af9-d5891ea9efef",
                },
                "590360d0-e0b8-11eb-a091-bd97fb995f1d": {
                  userName: "Ella",
                  posterUserName: "Ella",
                  activity: "liked",
                  activityDate: 1625836793693,
                  activityId: "590360d0-e0b8-11eb-a091-bd97fb995f1d",
                },
              },
              userCoverImage: "/img/defaultBg.2793204e.jpg",
              userId: "a7f5e160-db39-11eb-af32-47b0df65ae76",
              userProfileImage: a("146c"),
            },
            Chloe: {
              userName: "Chloe",
              emailAddress: "Chloe@email.com",
              password: "somedia",
              firstName: "Chloe",
              lastName: "  Santiago ",
              gender: "Female",
              address: "",
              postCode: "",
              country: "",
              city: "",
              aboutMe: "",
              posts: [],
              followers: [{ userName: "Ada" }, { userName: "Olive" }],
              following: [
                { userName: "Liam" },
                { userName: "Logan" },
                { userName: "Olive" },
              ],
              friends: [
                { userName: "Ella" },
                { userName: "Lily" },
                { userName: "Sophie" },
              ],
              age: "",
              education: "",
              videos: [
                {
                  videoUrl:
                    "https://player.vimeo.com/external/327410344.sd.mp4?s=b629839dcfd1c0bf32e7972881a2330a1d014368&profile_id=164&oauth2_token_id=57447761",
                  videoId: "70a26fe0-e0dd-11eb-907b-171d7592562f",
                  videoAutoplay: !1,
                },
              ],
              photos: [
                {
                  imageUrl: a("6a32"),
                  imageId: "58d01170-e0dc-11eb-907b-171d7592562f",
                },
              ],
              messages: {},
              messageStatus: {},
              notifications: {
                "f4095a60-e0dd-11eb-9684-6f71396aed14": {
                  userName: "Chloe",
                  posterUserName: "Chloe",
                  notificationId: "f4095a60-e0dd-11eb-9684-6f71396aed14",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625852945158,
                },
                "54388180-e198-11eb-871f-0f966330432a": {
                  userName: "Ada",
                  posterUserName: "Chloe",
                  notificationId: "54388180-e198-11eb-871f-0f966330432a",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625932992920,
                },
                "5438a890-e198-11eb-871f-0f966330432a": {
                  userName: "Ada",
                  posterUserName: "Chloe",
                  notificationId: "5438a890-e198-11eb-871f-0f966330432a",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625932992921,
                },
                "8ee93240-e19b-11eb-871f-0f966330432a": {
                  userName: "Ada",
                  friendUserName: "Chloe",
                  notificationId: "8ee93240-e19b-11eb-871f-0f966330432a",
                  notificationType: "follow",
                  notificationStatus: "unRead",
                  notificationDate: 1625934379876,
                },
                "24ff0560-e19d-11eb-86e8-11fcf2392733": {
                  userName: "Olive",
                  posterUserName: "Chloe",
                  notificationId: "24ff0560-e19d-11eb-86e8-11fcf2392733",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625935061174,
                },
                "24ff0561-e19d-11eb-86e8-11fcf2392733": {
                  userName: "Olive",
                  posterUserName: "Chloe",
                  notificationId: "24ff0561-e19d-11eb-86e8-11fcf2392733",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625935061174,
                },
                "ff89d430-e19d-11eb-86e8-11fcf2392733": {
                  userName: "Olive",
                  posterUserName: "Chloe",
                  notificationId: "ff89d430-e19d-11eb-86e8-11fcf2392733",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625935427827,
                },
                "ff89d432-e19d-11eb-86e8-11fcf2392733": {
                  userName: "Olive",
                  posterUserName: "Chloe",
                  commenterUserName: "Ada",
                  notificationId: "ff89d432-e19d-11eb-86e8-11fcf2392733",
                  notificationType: "likedComment",
                  notificationStatus: "unRead",
                  notificationDate: 1625935427827,
                },
                "3832fc80-e19e-11eb-86e8-11fcf2392733": {
                  userName: "Olive",
                  friendUserName: "Chloe",
                  notificationId: "3832fc80-e19e-11eb-86e8-11fcf2392733",
                  notificationType: "follow",
                  notificationStatus: "unRead",
                  notificationDate: 1625935522888,
                },
                "db297f40-e26b-11eb-af05-7d0898d50a19": {
                  userName: "Liam",
                  posterUserName: "Chloe",
                  notificationId: "db297f40-e26b-11eb-af05-7d0898d50a19",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1626023843124,
                },
                "db29a650-e26b-11eb-af05-7d0898d50a19": {
                  userName: "Liam",
                  posterUserName: "Chloe",
                  notificationId: "db29a650-e26b-11eb-af05-7d0898d50a19",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1626023843125,
                },
                "dd492af0-e26b-11eb-af05-7d0898d50a19": {
                  userName: "Liam",
                  posterUserName: "Chloe",
                  notificationId: "dd492af0-e26b-11eb-af05-7d0898d50a19",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1626023846687,
                },
                "dd495201-e26b-11eb-af05-7d0898d50a19": {
                  userName: "Liam",
                  posterUserName: "Chloe",
                  commenterUserName: "Olive",
                  notificationId: "dd495201-e26b-11eb-af05-7d0898d50a19",
                  notificationType: "likedComment",
                  notificationStatus: "unRead",
                  notificationDate: 1626023846688,
                },
                "de8d1ca0-e26b-11eb-af05-7d0898d50a19": {
                  userName: "Liam",
                  posterUserName: "Chloe",
                  notificationId: "de8d1ca0-e26b-11eb-af05-7d0898d50a19",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1626023848810,
                },
                "de8d1ca2-e26b-11eb-af05-7d0898d50a19": {
                  userName: "Liam",
                  posterUserName: "Chloe",
                  commenterUserName: "Ada",
                  notificationId: "de8d1ca2-e26b-11eb-af05-7d0898d50a19",
                  notificationType: "likedComment",
                  notificationStatus: "unRead",
                  notificationDate: 1626023848810,
                },
                "8fa29610-e32e-11eb-a03f-b542039adbaa": {
                  userName: "Lily",
                  posterUserName: "Smith",
                  notificationId: "8fa29610-e32e-11eb-a03f-b542039adbaa",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1626107468273,
                },
                "8fa2e430-e32e-11eb-a03f-b542039adbaa": {
                  userName: "Lily",
                  posterUserName: "Smith",
                  notificationId: "8fa2e430-e32e-11eb-a03f-b542039adbaa",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1626107468275,
                },
                "9656be00-e32e-11eb-a03f-b542039adbaa": {
                  userName: "Lily",
                  posterUserName: "Liam",
                  notificationId: "9656be00-e32e-11eb-a03f-b542039adbaa",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1626107479520,
                },
                "9656e510-e32e-11eb-a03f-b542039adbaa": {
                  userName: "Lily",
                  posterUserName: "Liam",
                  notificationId: "9656e510-e32e-11eb-a03f-b542039adbaa",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1626107479521,
                },
                "0ceed980-e32f-11eb-a03f-b542039adbaa": {
                  userName: "Lily",
                  notificationId: "0ceed980-e32f-11eb-a03f-b542039adbaa",
                  notificationType: "post",
                  notificationStatus: "unRead",
                  notificationDate: 1626107678488,
                },
              },
              occupation: "",
              status: "online",
              activities: {
                "c5886040-db39-11eb-af32-47b0df65ae76": {
                  userName: "Chloe",
                  activity: "Created account",
                  activityDate: 1625232673860,
                  activityId: "c5886040-db39-11eb-af32-47b0df65ae76",
                },
                "34bc7e00-e0db-11eb-907b-171d7592562f": {
                  userName: "Chloe",
                  activity: "logged in",
                  activityDate: 1625851765215,
                  activityId: "34bc7e00-e0db-11eb-907b-171d7592562f",
                },
                "3a7afb51-e0db-11eb-907b-171d7592562f": {
                  userName: "Chloe",
                  posterUserName: "Sophie",
                  activity: "liked",
                  activityDate: 1625851774853,
                  activityId: "3a7afb51-e0db-11eb-907b-171d7592562f",
                },
                "5b3fa752-e0db-11eb-907b-171d7592562f": {
                  userName: "Chloe",
                  posterUserName: "Sophie",
                  activity: "commented",
                  activityDate: 1625851829829,
                  activityId: "5b3fa752-e0db-11eb-907b-171d7592562f",
                },
                "60a8b1a0-e0db-11eb-907b-171d7592562f": {
                  userName: "Chloe",
                  posterUserName: "Ruby",
                  activity: "liked",
                  activityDate: 1625851838906,
                  activityId: "60a8b1a0-e0db-11eb-907b-171d7592562f",
                },
                "7a6cea71-e0db-11eb-907b-171d7592562f": {
                  userName: "Chloe",
                  posterUserName: "Ruby",
                  activity: "commented",
                  activityDate: 1625851882135,
                  activityId: "7a6cea71-e0db-11eb-907b-171d7592562f",
                },
                "b9aaa4c0-e0db-11eb-907b-171d7592562f": {
                  userName: "Chloe",
                  posterUserName: "Ella",
                  activity: "commented",
                  activityDate: 1625851988236,
                  activityId: "b9aaa4c0-e0db-11eb-907b-171d7592562f",
                },
                "caee3301-e0db-11eb-907b-171d7592562f": {
                  userName: "Chloe",
                  posterUserName: "Carter",
                  activity: "liked",
                  activityDate: 1625852017200,
                  activityId: "caee3301-e0db-11eb-907b-171d7592562f",
                },
                "ccfc0462-e0db-11eb-907b-171d7592562f": {
                  userName: "Chloe",
                  posterUserName: "Ella",
                  activity: "liked",
                  activityDate: 1625852020646,
                  activityId: "ccfc0462-e0db-11eb-907b-171d7592562f",
                },
                "d0949472-e0db-11eb-907b-171d7592562f": {
                  userName: "Chloe",
                  posterUserName: "Ethan",
                  activity: "liked",
                  activityDate: 1625852026679,
                  activityId: "d0949472-e0db-11eb-907b-171d7592562f",
                },
                "d2fda532-e0db-11eb-907b-171d7592562f": {
                  userName: "Chloe",
                  posterUserName: "Ava",
                  activity: "liked",
                  activityDate: 1625852030723,
                  activityId: "d2fda532-e0db-11eb-907b-171d7592562f",
                },
                "d4875272-e0db-11eb-907b-171d7592562f": {
                  userName: "Chloe",
                  posterUserName: "Mia",
                  activity: "liked",
                  activityDate: 1625852033303,
                  activityId: "d4875272-e0db-11eb-907b-171d7592562f",
                },
                "d68c9852-e0db-11eb-907b-171d7592562f": {
                  userName: "Chloe",
                  posterUserName: "Carter",
                  activity: "liked",
                  activityDate: 1625852036693,
                  activityId: "d68c9852-e0db-11eb-907b-171d7592562f",
                },
                "d84f2fe1-e0db-11eb-907b-171d7592562f": {
                  userName: "Chloe",
                  posterUserName: "Nova",
                  activity: "liked",
                  activityDate: 1625852039646,
                  activityId: "d84f2fe1-e0db-11eb-907b-171d7592562f",
                },
                "dae78e01-e0db-11eb-907b-171d7592562f": {
                  userName: "Chloe",
                  posterUserName: "Lily",
                  activity: "liked",
                  activityDate: 1625852044e3,
                  activityId: "dae78e01-e0db-11eb-907b-171d7592562f",
                },
                "de6da782-e0db-11eb-907b-171d7592562f": {
                  userName: "Chloe",
                  posterUserName: "Ivy",
                  activity: "liked",
                  activityDate: 1625852049912,
                  activityId: "de6da782-e0db-11eb-907b-171d7592562f",
                },
                "70a296f1-e0dd-11eb-907b-171d7592562f": {
                  userName: "Chloe",
                  activity: "posted",
                  activityDate: 1625852724703,
                  activityId: "70a296f1-e0dd-11eb-907b-171d7592562f",
                },
                "7cd721c0-e0dd-11eb-907b-171d7592562f": {
                  friendUserName: "Ella",
                  userName: "Chloe",
                  activity: "Accepted Friend Request",
                  activityDate: 1625852745179,
                  activityId: "7cd721c0-e0dd-11eb-907b-171d7592562f",
                },
                "7e4509a0-e0dd-11eb-907b-171d7592562f": {
                  friendUserName: "Lily",
                  userName: "Chloe",
                  activity: "Accepted Friend Request",
                  activityDate: 1625852747578,
                  activityId: "7e4509a0-e0dd-11eb-907b-171d7592562f",
                },
                "7f525af0-e0dd-11eb-907b-171d7592562f": {
                  friendUserName: "Sophie",
                  userName: "Chloe",
                  activity: "Accepted Friend Request",
                  activityDate: 1625852749343,
                  activityId: "7f525af0-e0dd-11eb-907b-171d7592562f",
                },
                "827d3510-e0dd-11eb-907b-171d7592562f": {
                  userName: "Chloe",
                  friendUserName: "Carter",
                  activity: "Friend request",
                  activityDate: 1625852754657,
                  activityId: "827d3510-e0dd-11eb-907b-171d7592562f",
                },
                "8348e981-e0dd-11eb-907b-171d7592562f": {
                  userName: "Chloe",
                  friendUserName: "Ethan",
                  activity: "Friend request",
                  activityDate: 1625852755992,
                  activityId: "8348e981-e0dd-11eb-907b-171d7592562f",
                },
                "84a32251-e0dd-11eb-907b-171d7592562f": {
                  userName: "Chloe",
                  friendUserName: "Josh",
                  activity: "Friend request",
                  activityDate: 1625852758261,
                  activityId: "84a32251-e0dd-11eb-907b-171d7592562f",
                },
                "857b0bc1-e0dd-11eb-907b-171d7592562f": {
                  userName: "Chloe",
                  friendUserName: "Liam",
                  activity: "Friend request",
                  activityDate: 1625852759676,
                  activityId: "857b0bc1-e0dd-11eb-907b-171d7592562f",
                },
                "937402e1-e0dd-11eb-907b-171d7592562f": {
                  friendUserName: "Liam",
                  userName: "Chloe",
                  activity: "followed",
                  activityDate: 1625852783118,
                  activityId: "937402e1-e0dd-11eb-907b-171d7592562f",
                },
                "951333f1-e0dd-11eb-907b-171d7592562f": {
                  friendUserName: "Logan",
                  userName: "Chloe",
                  activity: "followed",
                  activityDate: 1625852785839,
                  activityId: "951333f1-e0dd-11eb-907b-171d7592562f",
                },
                "96a71a60-e0dd-11eb-907b-171d7592562f": {
                  friendUserName: "Olive",
                  userName: "Chloe",
                  activity: "followed",
                  activityDate: 1625852788486,
                  activityId: "96a71a60-e0dd-11eb-907b-171d7592562f",
                },
                "eed47f70-e0dd-11eb-9684-6f71396aed14": {
                  userName: "Chloe",
                  activity: "logged in",
                  activityDate: 1625852936423,
                  activityId: "eed47f70-e0dd-11eb-9684-6f71396aed14",
                },
                "f40a1db0-e0dd-11eb-9684-6f71396aed14": {
                  userName: "Chloe",
                  posterUserName: "Chloe",
                  activity: "liked",
                  activityDate: 1625852945163,
                  activityId: "f40a1db0-e0dd-11eb-9684-6f71396aed14",
                },
                "0fb14750-e0de-11eb-9684-6f71396aed14": {
                  userName: "Chloe",
                  posterUserName: "Chloe",
                  activity: "liked",
                  activityDate: 1625852991557,
                  activityId: "0fb14750-e0de-11eb-9684-6f71396aed14",
                },
              },
              userCoverImage: "/img/defaultBg.2793204e.jpg",
              userId: "c5883930-db39-11eb-af32-47b0df65ae76",
              userProfileImage: a("6a32"),
            },
            Lily: {
              userName: "Lily",
              emailAddress: "Lily@email.com",
              password: "somedia",
              firstName: "Lily",
              lastName: "Parker ",
              gender: "Female",
              address: "",
              postCode: "",
              country: "",
              city: "",
              aboutMe: "",
              posts: [],
              followers: [],
              following: [],
              friends: [
                { userName: "Sophie" },
                { userName: "Ava" },
                { userName: "Ethan" },
                { userName: "Ella" },
                { userName: "Carter" },
                { userName: "Chloe" },
                { userName: "Ada" },
                { userName: "Olive" },
                { userName: "Smith" },
              ],
              age: "",
              education: "",
              videos: [
                {
                  videoUrl: "",
                  videoId: "0ceeb270-e32f-11eb-a03f-b542039adbaa",
                  videoAutoplay: !1,
                },
              ],
              photos: [
                {
                  imageUrl: a("35b7"),
                  imageId: "e5b7ea90-dc1d-11eb-b872-29eca492d404",
                },
                {
                  imageUrl: a("a95b"),
                  imageId: "bfd93e80-dda5-11eb-8fea-e7ca4e285f55",
                },
              ],
              messages: {},
              messageStatus: {},
              notifications: {
                "eb0f68b0-dc1d-11eb-b872-29eca492d404": {
                  userName: "Lily",
                  posterUserName: "Lily",
                  notificationId: "eb0f68b0-dc1d-11eb-b872-29eca492d404",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625330662075,
                },
                "479d2e80-df3b-11eb-a210-09083f776f3d": {
                  userName: "Nova",
                  posterUserName: "Lily",
                  notificationId: "479d2e80-df3b-11eb-a210-09083f776f3d",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625673126248,
                },
                "e062b0f0-df3f-11eb-a210-09083f776f3d": {
                  userName: "Carter",
                  posterUserName: "Lily",
                  notificationId: "e062b0f0-df3f-11eb-a210-09083f776f3d",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625675100543,
                },
                "e2753d42-df3f-11eb-a210-09083f776f3d": {
                  userName: "Carter",
                  posterUserName: "Lily",
                  commenterUserName: "Nova",
                  notificationId: "e2753d42-df3f-11eb-a210-09083f776f3d",
                  notificationType: "likedComment",
                  notificationStatus: "unRead",
                  notificationDate: 1625675104020,
                },
                "264ee680-df43-11eb-a210-09083f776f3d": {
                  userName: "Mia",
                  posterUserName: "Lily",
                  notificationId: "264ee680-df43-11eb-a210-09083f776f3d",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625676506344,
                },
                "8db47f20-e064-11eb-8d8d-bf9aae01f450": {
                  userName: "Sophie",
                  posterUserName: "Lily",
                  notificationId: "8db47f20-e064-11eb-8d8d-bf9aae01f450",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625800804370,
                },
                "8f288182-e064-11eb-8d8d-bf9aae01f450": {
                  userName: "Sophie",
                  posterUserName: "Lily",
                  commenterUserName: "Nova",
                  notificationId: "8f288182-e064-11eb-8d8d-bf9aae01f450",
                  notificationType: "likedComment",
                  notificationStatus: "unRead",
                  notificationDate: 1625800806808,
                },
                "900e4da1-e064-11eb-8d8d-bf9aae01f450": {
                  userName: "Sophie",
                  posterUserName: "Lily",
                  commenterUserName: "Mia",
                  notificationId: "900e4da1-e064-11eb-8d8d-bf9aae01f450",
                  notificationType: "likedComment",
                  notificationStatus: "unRead",
                  notificationDate: 1625800808314,
                },
                "71947800-e090-11eb-bcb8-25b2107d0c08": {
                  userName: "Sophie",
                  friendUserName: "Lily",
                  notificationId: "71947800-e090-11eb-bcb8-25b2107d0c08",
                  notificationType: "Accepted Friend Request",
                  notificationStatus: "unRead",
                  notificationDate: 1625819655040,
                },
                "9f39a640-e090-11eb-bcb8-25b2107d0c08": {
                  userName: "Ava",
                  friendUserName: "Lily",
                  notificationId: "9f39a640-e090-11eb-bcb8-25b2107d0c08",
                  notificationType: "Accepted Friend Request",
                  notificationStatus: "unRead",
                  notificationDate: 1625819731620,
                },
                "4f38bd00-e0ab-11eb-bcb8-25b2107d0c08": {
                  userName: "Ava",
                  notificationId: "4f38bd00-e0ab-11eb-bcb8-25b2107d0c08",
                  notificationType: "post",
                  notificationStatus: "unRead",
                  notificationDate: 1625831193808,
                },
                "53730b50-e0ab-11eb-bcb8-25b2107d0c08": {
                  userName: "Ava",
                  posterUserName: "Ava",
                  notificationId: "53730b50-e0ab-11eb-bcb8-25b2107d0c08",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625831200901,
                },
                "f9941e51-e0ad-11eb-a170-d99d0616bfb4": {
                  userName: "Ethan",
                  friendUserName: "Lily",
                  notificationId: "f9941e51-e0ad-11eb-a170-d99d0616bfb4",
                  notificationType: "Accepted Friend Request",
                  notificationStatus: "unRead",
                  notificationDate: 1625832338613,
                },
                "7cc22910-e0af-11eb-90ca-19effd8b5a00": {
                  userName: "Ethan",
                  posterUserName: "Ava",
                  notificationId: "7cc22910-e0af-11eb-90ca-19effd8b5a00",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625832988194,
                },
                "8f0a5610-e0af-11eb-90ca-19effd8b5a00": {
                  userName: "Ethan",
                  posterUserName: "Ava",
                  notificationId: "8f0a5610-e0af-11eb-90ca-19effd8b5a00",
                  notificationType: "comment",
                  notificationStatus: "unRead",
                  notificationDate: 1625833018865,
                },
                "92948e40-e0af-11eb-90ca-19effd8b5a00": {
                  userName: "Ethan",
                  posterUserName: "Mia",
                  notificationId: "92948e40-e0af-11eb-90ca-19effd8b5a00",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625833024804,
                },
                "abf80970-e0af-11eb-90ca-19effd8b5a00": {
                  userName: "Ethan",
                  posterUserName: "Mia",
                  notificationId: "abf80970-e0af-11eb-90ca-19effd8b5a00",
                  notificationType: "comment",
                  notificationStatus: "unRead",
                  notificationDate: 1625833067399,
                },
                "f0654780-e0af-11eb-90ca-19effd8b5a00": {
                  userName: "Ethan",
                  posterUserName: "Carter",
                  notificationId: "f0654780-e0af-11eb-90ca-19effd8b5a00",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625833182200,
                },
                "f0656e91-e0af-11eb-90ca-19effd8b5a00": {
                  userName: "Ethan",
                  posterUserName: "Carter",
                  commenterUserName: "Mia",
                  notificationId: "f0656e91-e0af-11eb-90ca-19effd8b5a00",
                  notificationType: "likedComment",
                  notificationStatus: "unRead",
                  notificationDate: 1625833182201,
                },
                "f40e5250-e0af-11eb-90ca-19effd8b5a00": {
                  userName: "Ethan",
                  posterUserName: "Nova",
                  notificationId: "f40e5250-e0af-11eb-90ca-19effd8b5a00",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625833188341,
                },
                "fa02d3c1-e0af-11eb-90ca-19effd8b5a00": {
                  userName: "Ethan",
                  posterUserName: "Nova",
                  notificationId: "fa02d3c1-e0af-11eb-90ca-19effd8b5a00",
                  notificationType: "comment",
                  notificationStatus: "unRead",
                  notificationDate: 1625833198332,
                },
                "00d58032-e0b0-11eb-90ca-19effd8b5a00": {
                  userName: "Ethan",
                  notificationId: "00d58032-e0b0-11eb-90ca-19effd8b5a00",
                  notificationType: "post",
                  notificationStatus: "unRead",
                  notificationDate: 1625833209779,
                },
                "7f533ec0-e0b0-11eb-90ca-19effd8b5a00": {
                  userName: "Ethan",
                  posterUserName: "Ethan",
                  notificationId: "7f533ec0-e0b0-11eb-90ca-19effd8b5a00",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625833421996,
                },
                "cc32b630-e0b5-11eb-b9c1-cfb72beca659": {
                  userName: "Ella",
                  friendUserName: "Lily",
                  notificationId: "cc32b630-e0b5-11eb-b9c1-cfb72beca659",
                  notificationType: "Accepted Friend Request",
                  notificationStatus: "unRead",
                  notificationDate: 1625835698451,
                },
                "e83d3581-e0b5-11eb-b9c1-cfb72beca659": {
                  userName: "Ella",
                  posterUserName: "Ethan",
                  notificationId: "e83d3581-e0b5-11eb-b9c1-cfb72beca659",
                  notificationType: "comment",
                  notificationStatus: "unRead",
                  notificationDate: 1625835745496,
                },
                "0f07c810-e0b6-11eb-bb52-d5cdf6bb26a5": {
                  userName: "Ella",
                  notificationId: "0f07c810-e0b6-11eb-bb52-d5cdf6bb26a5",
                  notificationType: "post",
                  notificationStatus: "unRead",
                  notificationDate: 1625835810577,
                },
                "59029d80-e0b8-11eb-a091-bd97fb995f1d": {
                  userName: "Ella",
                  posterUserName: "Ella",
                  notificationId: "59029d80-e0b8-11eb-a091-bd97fb995f1d",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625836793688,
                },
                "292b7ea1-e0b9-11eb-b036-69cc37af9c61": {
                  userName: "Carter",
                  friendUserName: "Lily",
                  notificationId: "292b7ea1-e0b9-11eb-b036-69cc37af9c61",
                  notificationType: "Accepted Friend Request",
                  notificationStatus: "unRead",
                  notificationDate: 1625837142922,
                },
                "a55477c0-e0b9-11eb-b036-69cc37af9c61": {
                  userName: "Carter",
                  notificationId: "a55477c0-e0b9-11eb-b036-69cc37af9c61",
                  notificationType: "post",
                  notificationStatus: "unRead",
                  notificationDate: 1625837351228,
                },
                "f52f0e20-e0bb-11eb-bbed-5fb8923dc3e7": {
                  userName: "Carter",
                  posterUserName: "Ava",
                  notificationId: "f52f0e20-e0bb-11eb-bbed-5fb8923dc3e7",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625838344194,
                },
                "f69de060-e0bb-11eb-bbed-5fb8923dc3e7": {
                  userName: "Carter",
                  posterUserName: "Mia",
                  notificationId: "f69de060-e0bb-11eb-bbed-5fb8923dc3e7",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625838346598,
                },
                "ffdd9531-e0bb-11eb-bbed-5fb8923dc3e7": {
                  userName: "Carter",
                  posterUserName: "Carter",
                  notificationId: "ffdd9531-e0bb-11eb-bbed-5fb8923dc3e7",
                  notificationType: "comment",
                  notificationStatus: "unRead",
                  notificationDate: 1625838362116,
                },
                "6bb30560-e0bc-11eb-acf8-97f832451a98": {
                  userName: "Carter",
                  posterUserName: "Carter",
                  notificationId: "6bb30560-e0bc-11eb-acf8-97f832451a98",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625838543030,
                },
                "9992ced0-e0c0-11eb-85f3-797226efa932": {
                  userName: "Sophie",
                  posterUserName: "Ruby",
                  notificationId: "9992ced0-e0c0-11eb-85f3-797226efa932",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625840337981,
                },
                "bb25c750-e0c0-11eb-85f3-797226efa932": {
                  userName: "Sophie",
                  posterUserName: "Ruby",
                  notificationId: "bb25c750-e0c0-11eb-85f3-797226efa932",
                  notificationType: "comment",
                  notificationStatus: "unRead",
                  notificationDate: 1625840394309,
                },
                "bceacfe0-e0c0-11eb-85f3-797226efa932": {
                  userName: "Sophie",
                  posterUserName: "Carter",
                  notificationId: "bceacfe0-e0c0-11eb-85f3-797226efa932",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625840397278,
                },
                "cae26771-e0c0-11eb-85f3-797226efa932": {
                  userName: "Sophie",
                  posterUserName: "Carter",
                  notificationId: "cae26771-e0c0-11eb-85f3-797226efa932",
                  notificationType: "comment",
                  notificationStatus: "unRead",
                  notificationDate: 1625840420711,
                },
                "cf0a8d50-e0c0-11eb-85f3-797226efa932": {
                  userName: "Sophie",
                  posterUserName: "Ethan",
                  notificationId: "cf0a8d50-e0c0-11eb-85f3-797226efa932",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625840427685,
                },
                "d0b53010-e0c0-11eb-85f3-797226efa932": {
                  userName: "Sophie",
                  posterUserName: "Ava",
                  notificationId: "d0b53010-e0c0-11eb-85f3-797226efa932",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625840430481,
                },
                "fc9c8c40-e0c1-11eb-85f3-797226efa932": {
                  userName: "Sophie",
                  notificationId: "fc9c8c40-e0c1-11eb-85f3-797226efa932",
                  notificationType: "post",
                  notificationStatus: "unRead",
                  notificationDate: 1625840933636,
                },
                "0bdf8f90-e0c2-11eb-85f3-797226efa932": {
                  userName: "Sophie",
                  posterUserName: "Sophie",
                  notificationId: "0bdf8f90-e0c2-11eb-85f3-797226efa932",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625840959241,
                },
                "dae766f0-e0db-11eb-907b-171d7592562f": {
                  userName: "Chloe",
                  posterUserName: "Lily",
                  notificationId: "dae766f0-e0db-11eb-907b-171d7592562f",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625852043999,
                },
                "7e4530b0-e0dd-11eb-907b-171d7592562f": {
                  userName: "Chloe",
                  friendUserName: "Lily",
                  notificationId: "7e4530b0-e0dd-11eb-907b-171d7592562f",
                  notificationType: "Accepted Friend Request",
                  notificationStatus: "unRead",
                  notificationDate: 1625852747579,
                },
                "f4095a60-e0dd-11eb-9684-6f71396aed14": {
                  userName: "Chloe",
                  posterUserName: "Chloe",
                  notificationId: "f4095a60-e0dd-11eb-9684-6f71396aed14",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625852945158,
                },
                "7ce89591-e19b-11eb-871f-0f966330432a": {
                  userName: "Ada",
                  friendUserName: "Lily",
                  notificationId: "7ce89591-e19b-11eb-871f-0f966330432a",
                  notificationType: "Accepted Friend Request",
                  notificationStatus: "unRead",
                  notificationDate: 1625934349673,
                },
                "1cd055f1-e19e-11eb-86e8-11fcf2392733": {
                  userName: "Olive",
                  friendUserName: "Lily",
                  notificationId: "1cd055f1-e19e-11eb-86e8-11fcf2392733",
                  notificationType: "Accepted Friend Request",
                  notificationStatus: "unRead",
                  notificationDate: 1625935476943,
                },
                "77d296c0-e26b-11eb-af05-7d0898d50a19": {
                  userName: "Olive",
                  notificationId: "77d296c0-e26b-11eb-af05-7d0898d50a19",
                  notificationType: "post",
                  notificationStatus: "unRead",
                  notificationDate: 1626023676460,
                },
                "8210cfd0-e26b-11eb-af05-7d0898d50a19": {
                  userName: "Olive",
                  posterUserName: "Olive",
                  notificationId: "8210cfd0-e26b-11eb-af05-7d0898d50a19",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1626023693645,
                },
                "be44ff91-e2ab-11eb-8a39-b39ebfa4685e": {
                  userName: "Smith",
                  friendUserName: "Lily",
                  notificationId: "be44ff91-e2ab-11eb-8a39-b39ebfa4685e",
                  notificationType: "Accepted Friend Request",
                  notificationStatus: "unRead",
                  notificationDate: 1626051282441,
                },
                "1a45f5e0-e330-11eb-97fc-8d90948c2e0c": {
                  userName: "Sebby",
                  posterUserName: "Lily",
                  notificationId: "1a45f5e0-e330-11eb-97fc-8d90948c2e0c",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1626108130366,
                },
                "1a464400-e330-11eb-97fc-8d90948c2e0c": {
                  userName: "Sebby",
                  posterUserName: "Lily",
                  notificationId: "1a464400-e330-11eb-97fc-8d90948c2e0c",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1626108130368,
                },
                "45c991c0-e332-11eb-97fc-8d90948c2e0c": {
                  userName: "Josh",
                  posterUserName: "Lily",
                  notificationId: "45c991c0-e332-11eb-97fc-8d90948c2e0c",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1626109062364,
                },
                "45c991c1-e332-11eb-97fc-8d90948c2e0c": {
                  userName: "Josh",
                  posterUserName: "Lily",
                  notificationId: "45c991c1-e332-11eb-97fc-8d90948c2e0c",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1626109062364,
                },
                "482c12d0-e332-11eb-97fc-8d90948c2e0c": {
                  userName: "Josh",
                  posterUserName: "Lily",
                  notificationId: "482c12d0-e332-11eb-97fc-8d90948c2e0c",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1626109066365,
                },
                "482c60f0-e332-11eb-97fc-8d90948c2e0c": {
                  userName: "Josh",
                  posterUserName: "Lily",
                  commenterUserName: "Sebby",
                  notificationId: "482c60f0-e332-11eb-97fc-8d90948c2e0c",
                  notificationType: "likedComment",
                  notificationStatus: "unRead",
                  notificationDate: 1626109066367,
                },
                "737d8d10-e332-11eb-97fc-8d90948c2e0c": {
                  userName: "Logan",
                  posterUserName: "Lily",
                  notificationId: "737d8d10-e332-11eb-97fc-8d90948c2e0c",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1626109139041,
                },
                "737db420-e332-11eb-97fc-8d90948c2e0c": {
                  userName: "Logan",
                  posterUserName: "Lily",
                  notificationId: "737db420-e332-11eb-97fc-8d90948c2e0c",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1626109139042,
                },
              },
              occupation: "",
              status: "online",
              activities: {
                "df515400-db39-11eb-af32-47b0df65ae76": {
                  userName: "Lily",
                  activity: "Created account",
                  activityDate: 1625232717120,
                  activityId: "df515400-db39-11eb-af32-47b0df65ae76",
                },
                "ec5b1f60-dc19-11eb-9e4e-33ab2bd5ac9e": {
                  userName: "Lily",
                  activity: "logged in",
                  activityDate: 1625328946262,
                  activityId: "ec5b1f60-dc19-11eb-9e4e-33ab2bd5ac9e",
                },
                "f6925391-dc19-11eb-9e4e-33ab2bd5ac9e": {
                  userName: "Lily",
                  posterUserName: "Ivy",
                  activity: "liked",
                  activityDate: 1625328963401,
                  activityId: "f6925391-dc19-11eb-9e4e-33ab2bd5ac9e",
                },
                "1afbebb0-dc1a-11eb-9e4e-33ab2bd5ac9e": {
                  userName: "Lily",
                  posterUserName: "Ivy",
                  activity: "commented",
                  activityDate: 1625329024491,
                  activityId: "1afbebb0-dc1a-11eb-9e4e-33ab2bd5ac9e",
                },
                "e5b811a1-dc1d-11eb-b872-29eca492d404": {
                  userName: "Lily",
                  activity: "posted",
                  activityDate: 1625330653114,
                  activityId: "e5b811a1-dc1d-11eb-b872-29eca492d404",
                },
                "eb0f68b2-dc1d-11eb-b872-29eca492d404": {
                  userName: "Lily",
                  posterUserName: "Lily",
                  activity: "liked",
                  activityDate: 1625330662075,
                  activityId: "eb0f68b2-dc1d-11eb-b872-29eca492d404",
                },
                "20914a30-dceb-11eb-b872-29eca492d404": {
                  userName: "Lily",
                  friendUserName: "Sophie",
                  activity: "Friend request",
                  activityDate: 1625418798675,
                  activityId: "20914a30-dceb-11eb-b872-29eca492d404",
                },
                "23a08601-dceb-11eb-b872-29eca492d404": {
                  userName: "Lily",
                  friendUserName: "Smith",
                  activity: "Friend request",
                  activityDate: 1625418803808,
                  activityId: "23a08601-dceb-11eb-b872-29eca492d404",
                },
                "26150871-dceb-11eb-b872-29eca492d404": {
                  userName: "Lily",
                  friendUserName: "Ivy",
                  activity: "Friend request",
                  activityDate: 1625418807927,
                  activityId: "26150871-dceb-11eb-b872-29eca492d404",
                },
                "2aae1891-dceb-11eb-b872-29eca492d404": {
                  userName: "Lily",
                  friendUserName: "Josh",
                  activity: "Friend request",
                  activityDate: 1625418815641,
                  activityId: "2aae1891-dceb-11eb-b872-29eca492d404",
                },
                "2c082a51-dceb-11eb-b872-29eca492d404": {
                  userName: "Lily",
                  friendUserName: "Ethan",
                  activity: "Friend request",
                  activityDate: 1625418817909,
                  activityId: "2c082a51-dceb-11eb-b872-29eca492d404",
                },
                "2dc0afc0-dceb-11eb-b872-29eca492d404": {
                  userName: "Lily",
                  friendUserName: "Carter",
                  activity: "Friend request",
                  activityDate: 1625418820796,
                  activityId: "2dc0afc0-dceb-11eb-b872-29eca492d404",
                },
                "68d5e0a0-e32e-11eb-a03f-b542039adbaa": {
                  userName: "Lily",
                  activity: "logged in",
                  activityDate: 1626107403178,
                  activityId: "68d5e0a0-e32e-11eb-a03f-b542039adbaa",
                },
                "8fa2e431-e32e-11eb-a03f-b542039adbaa": {
                  userName: "Lily",
                  posterUserName: "Smith",
                  activity: "liked",
                  activityDate: 1626107468275,
                  activityId: "8fa2e431-e32e-11eb-a03f-b542039adbaa",
                },
                "96570c20-e32e-11eb-a03f-b542039adbaa": {
                  userName: "Lily",
                  posterUserName: "Liam",
                  activity: "liked",
                  activityDate: 1626107479522,
                  activityId: "96570c20-e32e-11eb-a03f-b542039adbaa",
                },
                "0cef0090-e32f-11eb-a03f-b542039adbaa": {
                  userName: "Lily",
                  activity: "posted",
                  activityDate: 1626107678489,
                  activityId: "0cef0090-e32f-11eb-a03f-b542039adbaa",
                },
              },
              userCoverImage: "/img/defaultBg.2793204e.jpg",
              userId: "df512cf0-db39-11eb-af32-47b0df65ae76",
              userProfileImage: a("a95b"),
            },
            Nova: {
              userName: "Nova",
              emailAddress: "Nova@email.com",
              password: "somedia",
              firstName: "Nova",
              lastName: "Christen",
              gender: "Female",
              address: "",
              postCode: "",
              country: "",
              city: "",
              aboutMe: "",
              posts: [],
              followers: [{ userName: "Ada" }],
              following: [],
              friends: [],
              age: "",
              education: "",
              videos: [],
              photos: [
                {
                  imageUrl: a("9418"),
                  imageId: "c1622a80-df3c-11eb-a210-09083f776f3d",
                },
                {
                  imageUrl: a("cf1d"),
                  imageId: "68b3ce40-df3f-11eb-a210-09083f776f3d",
                },
              ],
              messages: {},
              messageStatus: {},
              notifications: {
                "731b1320-df3f-11eb-a210-09083f776f3d": {
                  userName: "Nova",
                  posterUserName: "Nova",
                  notificationId: "731b1320-df3f-11eb-a210-09083f776f3d",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625674917202,
                },
                "de4660a0-df3f-11eb-a210-09083f776f3d": {
                  userName: "Carter",
                  posterUserName: "Nova",
                  notificationId: "de4660a0-df3f-11eb-a210-09083f776f3d",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625675097002,
                },
                "de4687b0-df3f-11eb-a210-09083f776f3d": {
                  userName: "Carter",
                  posterUserName: "Nova",
                  notificationId: "de4687b0-df3f-11eb-a210-09083f776f3d",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625675097003,
                },
                "24f60d40-df43-11eb-a210-09083f776f3d": {
                  userName: "Mia",
                  posterUserName: "Nova",
                  notificationId: "24f60d40-df43-11eb-a210-09083f776f3d",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625676504084,
                },
                "24f63450-df43-11eb-a210-09083f776f3d": {
                  userName: "Mia",
                  posterUserName: "Nova",
                  notificationId: "24f63450-df43-11eb-a210-09083f776f3d",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625676504085,
                },
                "73f920a0-df4b-11eb-961c-b7b5c586ebc2": {
                  userName: "Mia",
                  posterUserName: "Nova",
                  notificationId: "73f920a0-df4b-11eb-961c-b7b5c586ebc2",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625680072618,
                },
                "73f947b1-df4b-11eb-961c-b7b5c586ebc2": {
                  userName: "Mia",
                  posterUserName: "Nova",
                  commenterUserName: "Carter",
                  notificationId: "73f947b1-df4b-11eb-961c-b7b5c586ebc2",
                  notificationType: "likedComment",
                  notificationStatus: "unRead",
                  notificationDate: 1625680072619,
                },
                "89c9b060-e064-11eb-8d8d-bf9aae01f450": {
                  userName: "Sophie",
                  posterUserName: "Nova",
                  notificationId: "89c9b060-e064-11eb-8d8d-bf9aae01f450",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625800797798,
                },
                "89c9d770-e064-11eb-8d8d-bf9aae01f450": {
                  userName: "Sophie",
                  posterUserName: "Nova",
                  notificationId: "89c9d770-e064-11eb-8d8d-bf9aae01f450",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625800797799,
                },
                "8c5479f0-e064-11eb-8d8d-bf9aae01f450": {
                  userName: "Sophie",
                  posterUserName: "Nova",
                  notificationId: "8c5479f0-e064-11eb-8d8d-bf9aae01f450",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625800802063,
                },
                "8c5479f2-e064-11eb-8d8d-bf9aae01f450": {
                  userName: "Sophie",
                  posterUserName: "Nova",
                  commenterUserName: "Mia",
                  notificationId: "8c5479f2-e064-11eb-8d8d-bf9aae01f450",
                  notificationType: "likedComment",
                  notificationStatus: "unRead",
                  notificationDate: 1625800802063,
                },
                "f40e5250-e0af-11eb-90ca-19effd8b5a00": {
                  userName: "Ethan",
                  posterUserName: "Nova",
                  notificationId: "f40e5250-e0af-11eb-90ca-19effd8b5a00",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625833188341,
                },
                "f40e5251-e0af-11eb-90ca-19effd8b5a00": {
                  userName: "Ethan",
                  posterUserName: "Nova",
                  notificationId: "f40e5251-e0af-11eb-90ca-19effd8b5a00",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625833188341,
                },
                "d84f08d0-e0db-11eb-907b-171d7592562f": {
                  userName: "Chloe",
                  posterUserName: "Nova",
                  notificationId: "d84f08d0-e0db-11eb-907b-171d7592562f",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625852039645,
                },
                "d84f2fe0-e0db-11eb-907b-171d7592562f": {
                  userName: "Chloe",
                  posterUserName: "Nova",
                  notificationId: "d84f2fe0-e0db-11eb-907b-171d7592562f",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625852039646,
                },
                "9044caa0-e19b-11eb-871f-0f966330432a": {
                  userName: "Ada",
                  friendUserName: "Nova",
                  notificationId: "9044caa0-e19b-11eb-871f-0f966330432a",
                  notificationType: "follow",
                  notificationStatus: "unRead",
                  notificationDate: 1625934382154,
                },
                "2ea500a0-e19e-11eb-86e8-11fcf2392733": {
                  userName: "Olive",
                  friendUserName: "Nova",
                  notificationId: "2ea500a0-e19e-11eb-86e8-11fcf2392733",
                  notificationType: "friend request",
                  notificationStatus: "unRead",
                  notificationDate: 1625935506858,
                },
              },
              occupation: "",
              status: "online",
              activities: {
                "3e2a0760-db3a-11eb-af32-47b0df65ae76": {
                  userName: "Nova",
                  activity: "Created account",
                  activityDate: 1625232876246,
                  activityId: "3e2a0760-db3a-11eb-af32-47b0df65ae76",
                },
                "479d5591-df3b-11eb-a210-09083f776f3d": {
                  userName: "Nova",
                  posterUserName: "Lily",
                  activity: "liked",
                  activityDate: 1625673126249,
                  activityId: "479d5591-df3b-11eb-a210-09083f776f3d",
                },
                "533f8b70-df3b-11eb-a210-09083f776f3d": {
                  userName: "Nova",
                  posterUserName: "Lily",
                  activity: "commented",
                  activityDate: 1625673145767,
                  activityId: "533f8b70-df3b-11eb-a210-09083f776f3d",
                },
                "5cd6fd32-df3b-11eb-a210-09083f776f3d": {
                  userName: "Nova",
                  posterUserName: "Ivy",
                  activity: "liked",
                  activityDate: 1625673161859,
                  activityId: "5cd6fd32-df3b-11eb-a210-09083f776f3d",
                },
                "63fcf9c1-df3b-11eb-a210-09083f776f3d": {
                  userName: "Nova",
                  posterUserName: "Ivy",
                  activity: "commented",
                  activityDate: 1625673173852,
                  activityId: "63fcf9c1-df3b-11eb-a210-09083f776f3d",
                },
                "69353011-df3b-11eb-a210-09083f776f3d": {
                  userName: "Nova",
                  posterUserName: "Ivy",
                  commenterUserName: "Lily",
                  activity: "likedComment",
                  activityDate: 1625673182609,
                  activityId: "69353011-df3b-11eb-a210-09083f776f3d",
                },
                "68b3f550-df3f-11eb-a210-09083f776f3d": {
                  userName: "Nova",
                  activity: "posted",
                  activityDate: 1625674899749,
                  activityId: "68b3f550-df3f-11eb-a210-09083f776f3d",
                },
                "731b3a31-df3f-11eb-a210-09083f776f3d": {
                  userName: "Nova",
                  posterUserName: "Nova",
                  activity: "liked",
                  activityDate: 1625674917203,
                  activityId: "731b3a31-df3f-11eb-a210-09083f776f3d",
                },
              },
              userCoverImage: "/img/defaultBg.2793204e.jpg",
              userId: "3e29e050-db3a-11eb-af32-47b0df65ae76",
              userProfileImage: a("9418"),
            },
            Ivy: {
              userName: "Ivy",
              emailAddress: "Ivy@email.com",
              password: "somedia",
              firstName: "Ivy",
              lastName: " Maverick ",
              gender: "Female",
              address: "",
              postCode: "",
              country: "",
              city: "",
              aboutMe: "",
              posts: [],
              followers: [{ userName: "Ada" }, { userName: "Olive" }],
              following: [],
              friends: [],
              age: "",
              education: "",
              videos: [],
              photos: [
                {
                  imageUrl: a("7efb"),
                  imageId: "2cb821d0-dc19-11eb-9e4e-33ab2bd5ac9e",
                },
                {
                  imageUrl: a("cf1d"),
                  imageId: "9b687762-dc19-11eb-9e4e-33ab2bd5ac9e",
                },
              ],
              messages: {},
              messageStatus: {},
              notifications: {
                "f6922c80-dc19-11eb-9e4e-33ab2bd5ac9e": {
                  userName: "Lily",
                  posterUserName: "Ivy",
                  notificationId: "f6922c80-dc19-11eb-9e4e-33ab2bd5ac9e",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625328963400,
                },
                "f6925390-dc19-11eb-9e4e-33ab2bd5ac9e": {
                  userName: "Lily",
                  posterUserName: "Ivy",
                  notificationId: "f6925390-dc19-11eb-9e4e-33ab2bd5ac9e",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625328963401,
                },
                "26150870-dceb-11eb-b872-29eca492d404": {
                  userName: "Lily",
                  friendUserName: "Ivy",
                  notificationId: "26150870-dceb-11eb-b872-29eca492d404",
                  notificationType: "friend request",
                  notificationStatus: "unRead",
                  notificationDate: 1625418807927,
                },
                "5cd6fd30-df3b-11eb-a210-09083f776f3d": {
                  userName: "Nova",
                  posterUserName: "Ivy",
                  notificationId: "5cd6fd30-df3b-11eb-a210-09083f776f3d",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625673161859,
                },
                "5cd6fd31-df3b-11eb-a210-09083f776f3d": {
                  userName: "Nova",
                  posterUserName: "Ivy",
                  notificationId: "5cd6fd31-df3b-11eb-a210-09083f776f3d",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625673161859,
                },
                "69353010-df3b-11eb-a210-09083f776f3d": {
                  userName: "Nova",
                  posterUserName: "Ivy",
                  notificationId: "69353010-df3b-11eb-a210-09083f776f3d",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625673182609,
                },
                "69353012-df3b-11eb-a210-09083f776f3d": {
                  userName: "Nova",
                  posterUserName: "Ivy",
                  commenterUserName: "Lily",
                  notificationId: "69353012-df3b-11eb-a210-09083f776f3d",
                  notificationType: "likedComment",
                  notificationStatus: "unRead",
                  notificationDate: 1625673182609,
                },
                "fac94440-df3f-11eb-a210-09083f776f3d": {
                  userName: "Carter",
                  posterUserName: "Ivy",
                  notificationId: "fac94440-df3f-11eb-a210-09083f776f3d",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625675144836,
                },
                "fac94441-df3f-11eb-a210-09083f776f3d": {
                  userName: "Carter",
                  posterUserName: "Ivy",
                  notificationId: "fac94441-df3f-11eb-a210-09083f776f3d",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625675144836,
                },
                "92162b90-e064-11eb-8d8d-bf9aae01f450": {
                  userName: "Sophie",
                  posterUserName: "Ivy",
                  notificationId: "92162b90-e064-11eb-8d8d-bf9aae01f450",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625800811721,
                },
                "92162b91-e064-11eb-8d8d-bf9aae01f450": {
                  userName: "Sophie",
                  posterUserName: "Ivy",
                  notificationId: "92162b91-e064-11eb-8d8d-bf9aae01f450",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625800811722,
                },
                "de6da780-e0db-11eb-907b-171d7592562f": {
                  userName: "Chloe",
                  posterUserName: "Ivy",
                  notificationId: "de6da780-e0db-11eb-907b-171d7592562f",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625852049912,
                },
                "de6da781-e0db-11eb-907b-171d7592562f": {
                  userName: "Chloe",
                  posterUserName: "Ivy",
                  notificationId: "de6da781-e0db-11eb-907b-171d7592562f",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625852049912,
                },
                "917b4ed0-e19b-11eb-871f-0f966330432a": {
                  userName: "Ada",
                  friendUserName: "Ivy",
                  notificationId: "917b4ed0-e19b-11eb-871f-0f966330432a",
                  notificationType: "follow",
                  notificationStatus: "unRead",
                  notificationDate: 1625934384189,
                },
                "32965f10-e19e-11eb-86e8-11fcf2392733": {
                  userName: "Olive",
                  friendUserName: "Ivy",
                  notificationId: "32965f10-e19e-11eb-86e8-11fcf2392733",
                  notificationType: "friend request",
                  notificationStatus: "unRead",
                  notificationDate: 1625935513473,
                },
                "3b5d1350-e19e-11eb-86e8-11fcf2392733": {
                  userName: "Olive",
                  friendUserName: "Ivy",
                  notificationId: "3b5d1350-e19e-11eb-86e8-11fcf2392733",
                  notificationType: "follow",
                  notificationStatus: "unRead",
                  notificationDate: 1625935528198,
                },
              },
              occupation: "",
              status: "online",
              activities: {
                "5c8f1880-db3a-11eb-af32-47b0df65ae76": {
                  userName: "Ivy",
                  activity: "Created account",
                  activityDate: 1625232927240,
                  activityId: "5c8f1880-db3a-11eb-af32-47b0df65ae76",
                },
                "8243c910-db4c-11eb-abaf-9f6519f91aa1": {
                  userName: "Ivy",
                  activity: "logged in",
                  activityDate: 1625240721441,
                  activityId: "8243c910-db4c-11eb-abaf-9f6519f91aa1",
                },
                "9b689e71-dc19-11eb-9e4e-33ab2bd5ac9e": {
                  userName: "Ivy",
                  activity: "posted",
                  activityDate: 1625328810455,
                  activityId: "9b689e71-dc19-11eb-9e4e-33ab2bd5ac9e",
                },
              },
              userCoverImage: "/img/defaultBg.2793204e.jpg",
              userId: "5c8ef170-db3a-11eb-af32-47b0df65ae76",
              userProfileImage: a("7efb"),
            },
            Sophie: {
              userName: "Sophie",
              emailAddress: "Sophie@email.com",
              password: "somedia",
              firstName: "Sophie",
              lastName: "Roman",
              gender: "Female",
              address: "",
              postCode: "",
              country: "",
              city: "",
              aboutMe: "",
              posts: [],
              followers: [],
              following: [],
              friends: [
                { userName: "Lily" },
                { userName: "Ethan" },
                { userName: "Carter" },
                { userName: "Ruby" },
                { userName: "Chloe" },
                { userName: "Ada" },
                { userName: "Olive" },
                { userName: "Smith" },
              ],
              age: "",
              education: "",
              videos: [
                {
                  videoUrl:
                    "https://player.vimeo.com/external/386419950.sd.mp4?s=b1b36d5e58141a535d2fc104d284661d4b982c07&profile_id=139&oauth2_token_id=57447761",
                  videoId: "fc9c6530-e0c1-11eb-85f3-797226efa932",
                  videoAutoplay: !1,
                },
              ],
              photos: [
                {
                  imageUrl: a("e5bc"),
                  imageId: "93ae3670-e0c1-11eb-85f3-797226efa932",
                },
              ],
              messages: {},
              messageStatus: {},
              notifications: {
                "20912320-dceb-11eb-b872-29eca492d404": {
                  userName: "Lily",
                  friendUserName: "Sophie",
                  notificationId: "20912320-dceb-11eb-b872-29eca492d404",
                  notificationType: "friend request",
                  notificationStatus: "Read",
                  notificationDate: 1625418798674,
                },
                "ff836840-e0b0-11eb-9f24-351dd7c3fe0f": {
                  userName: "Ethan",
                  friendUserName: "Sophie",
                  notificationId: "ff836840-e0b0-11eb-9f24-351dd7c3fe0f",
                  notificationType: "Accepted Friend Request",
                  notificationStatus: "unRead",
                  notificationDate: 1625833637060,
                },
                "2a1e9131-e0b9-11eb-b036-69cc37af9c61": {
                  userName: "Carter",
                  friendUserName: "Sophie",
                  notificationId: "2a1e9131-e0b9-11eb-b036-69cc37af9c61",
                  notificationType: "Accepted Friend Request",
                  notificationStatus: "unRead",
                  notificationDate: 1625837144515,
                },
                "a55477c0-e0b9-11eb-b036-69cc37af9c61": {
                  userName: "Carter",
                  notificationId: "a55477c0-e0b9-11eb-b036-69cc37af9c61",
                  notificationType: "post",
                  notificationStatus: "unRead",
                  notificationDate: 1625837351228,
                },
                "f52f0e20-e0bb-11eb-bbed-5fb8923dc3e7": {
                  userName: "Carter",
                  posterUserName: "Ava",
                  notificationId: "f52f0e20-e0bb-11eb-bbed-5fb8923dc3e7",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625838344194,
                },
                "f69de060-e0bb-11eb-bbed-5fb8923dc3e7": {
                  userName: "Carter",
                  posterUserName: "Mia",
                  notificationId: "f69de060-e0bb-11eb-bbed-5fb8923dc3e7",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625838346598,
                },
                "ffdd9531-e0bb-11eb-bbed-5fb8923dc3e7": {
                  userName: "Carter",
                  posterUserName: "Carter",
                  notificationId: "ffdd9531-e0bb-11eb-bbed-5fb8923dc3e7",
                  notificationType: "comment",
                  notificationStatus: "unRead",
                  notificationDate: 1625838362116,
                },
                "6bb30560-e0bc-11eb-acf8-97f832451a98": {
                  userName: "Carter",
                  posterUserName: "Carter",
                  notificationId: "6bb30560-e0bc-11eb-acf8-97f832451a98",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625838543030,
                },
                "50554401-e0c0-11eb-8787-59040f6b2cc8": {
                  userName: "Ruby",
                  friendUserName: "Sophie",
                  notificationId: "50554401-e0c0-11eb-8787-59040f6b2cc8",
                  notificationType: "Accepted Friend Request",
                  notificationStatus: "unRead",
                  notificationDate: 1625840215104,
                },
                "0bdf8f90-e0c2-11eb-85f3-797226efa932": {
                  userName: "Sophie",
                  posterUserName: "Sophie",
                  notificationId: "0bdf8f90-e0c2-11eb-85f3-797226efa932",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625840959241,
                },
                "3a7ad440-e0db-11eb-907b-171d7592562f": {
                  userName: "Chloe",
                  posterUserName: "Sophie",
                  notificationId: "3a7ad440-e0db-11eb-907b-171d7592562f",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625851774852,
                },
                "3a7afb50-e0db-11eb-907b-171d7592562f": {
                  userName: "Chloe",
                  posterUserName: "Sophie",
                  notificationId: "3a7afb50-e0db-11eb-907b-171d7592562f",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625851774853,
                },
                "7f525af1-e0dd-11eb-907b-171d7592562f": {
                  userName: "Chloe",
                  friendUserName: "Sophie",
                  notificationId: "7f525af1-e0dd-11eb-907b-171d7592562f",
                  notificationType: "Accepted Friend Request",
                  notificationStatus: "unRead",
                  notificationDate: 1625852749343,
                },
                "f4095a60-e0dd-11eb-9684-6f71396aed14": {
                  userName: "Chloe",
                  posterUserName: "Chloe",
                  notificationId: "f4095a60-e0dd-11eb-9684-6f71396aed14",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625852945158,
                },
                "f409f6a0-e0dd-11eb-9684-6f71396aed14": {
                  userName: "Chloe",
                  posterUserName: "Chloe",
                  notificationId: "f409f6a0-e0dd-11eb-9684-6f71396aed14",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625852945162,
                },
                "06f9fc60-e0de-11eb-9684-6f71396aed14": {
                  userName: "Chloe",
                  posterUserName: "Chloe",
                  notificationId: "06f9fc60-e0de-11eb-9684-6f71396aed14",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625852976934,
                },
                "088a3950-e0de-11eb-9684-6f71396aed14": {
                  userName: "Chloe",
                  posterUserName: "Chloe",
                  notificationId: "088a3950-e0de-11eb-9684-6f71396aed14",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625852979557,
                },
                "0fb0f930-e0de-11eb-9684-6f71396aed14": {
                  userName: "Chloe",
                  posterUserName: "Chloe",
                  notificationId: "0fb0f930-e0de-11eb-9684-6f71396aed14",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625852991555,
                },
                "0fb12040-e0de-11eb-9684-6f71396aed14": {
                  userName: "Chloe",
                  posterUserName: "Chloe",
                  notificationId: "0fb12040-e0de-11eb-9684-6f71396aed14",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625852991556,
                },
                "6910a0d0-e19b-11eb-871f-0f966330432a": {
                  userName: "Ada",
                  posterUserName: "Sophie",
                  notificationId: "6910a0d0-e19b-11eb-871f-0f966330432a",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625934316381,
                },
                "6910a0d1-e19b-11eb-871f-0f966330432a": {
                  userName: "Ada",
                  posterUserName: "Sophie",
                  notificationId: "6910a0d1-e19b-11eb-871f-0f966330432a",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625934316381,
                },
                "6af602a0-e19b-11eb-871f-0f966330432a": {
                  userName: "Ada",
                  posterUserName: "Sophie",
                  notificationId: "6af602a0-e19b-11eb-871f-0f966330432a",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625934319563,
                },
                "6af69ee1-e19b-11eb-871f-0f966330432a": {
                  userName: "Ada",
                  posterUserName: "Sophie",
                  commenterUserName: "Chloe",
                  notificationId: "6af69ee1-e19b-11eb-871f-0f966330432a",
                  notificationType: "likedComment",
                  notificationStatus: "unRead",
                  notificationDate: 1625934319566,
                },
                "7d642e31-e19b-11eb-871f-0f966330432a": {
                  userName: "Ada",
                  friendUserName: "Sophie",
                  notificationId: "7d642e31-e19b-11eb-871f-0f966330432a",
                  notificationType: "Accepted Friend Request",
                  notificationStatus: "unRead",
                  notificationDate: 1625934350483,
                },
                "279e4150-e19d-11eb-86e8-11fcf2392733": {
                  userName: "Olive",
                  posterUserName: "Sophie",
                  notificationId: "279e4150-e19d-11eb-86e8-11fcf2392733",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625935065573,
                },
                "279e4151-e19d-11eb-86e8-11fcf2392733": {
                  userName: "Olive",
                  posterUserName: "Sophie",
                  notificationId: "279e4151-e19d-11eb-86e8-11fcf2392733",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625935065573,
                },
                "01175200-e19e-11eb-86e8-11fcf2392733": {
                  userName: "Olive",
                  posterUserName: "Sophie",
                  notificationId: "01175200-e19e-11eb-86e8-11fcf2392733",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625935430432,
                },
                "01175202-e19e-11eb-86e8-11fcf2392733": {
                  userName: "Olive",
                  posterUserName: "Sophie",
                  commenterUserName: "Chloe",
                  notificationId: "01175202-e19e-11eb-86e8-11fcf2392733",
                  notificationType: "likedComment",
                  notificationStatus: "unRead",
                  notificationDate: 1625935430432,
                },
                "1f360b51-e19e-11eb-86e8-11fcf2392733": {
                  userName: "Olive",
                  friendUserName: "Sophie",
                  notificationId: "1f360b51-e19e-11eb-86e8-11fcf2392733",
                  notificationType: "Accepted Friend Request",
                  notificationStatus: "unRead",
                  notificationDate: 1625935480966,
                },
                "77d296c0-e26b-11eb-af05-7d0898d50a19": {
                  userName: "Olive",
                  notificationId: "77d296c0-e26b-11eb-af05-7d0898d50a19",
                  notificationType: "post",
                  notificationStatus: "unRead",
                  notificationDate: 1626023676460,
                },
                "8210cfd0-e26b-11eb-af05-7d0898d50a19": {
                  userName: "Olive",
                  posterUserName: "Olive",
                  notificationId: "8210cfd0-e26b-11eb-af05-7d0898d50a19",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1626023693645,
                },
                "8210f6e0-e26b-11eb-af05-7d0898d50a19": {
                  userName: "Olive",
                  posterUserName: "Olive",
                  notificationId: "8210f6e0-e26b-11eb-af05-7d0898d50a19",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1626023693646,
                },
                "e097e0c0-e26b-11eb-af05-7d0898d50a19": {
                  userName: "Liam",
                  posterUserName: "Sophie",
                  notificationId: "e097e0c0-e26b-11eb-af05-7d0898d50a19",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1626023852236,
                },
                "e097e0c1-e26b-11eb-af05-7d0898d50a19": {
                  userName: "Liam",
                  posterUserName: "Sophie",
                  notificationId: "e097e0c1-e26b-11eb-af05-7d0898d50a19",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1626023852236,
                },
                "bfd9f771-e2ab-11eb-8a39-b39ebfa4685e": {
                  userName: "Smith",
                  friendUserName: "Sophie",
                  notificationId: "bfd9f771-e2ab-11eb-8a39-b39ebfa4685e",
                  notificationType: "Accepted Friend Request",
                  notificationStatus: "unRead",
                  notificationDate: 1626051285095,
                },
                "8fa29610-e32e-11eb-a03f-b542039adbaa": {
                  userName: "Lily",
                  posterUserName: "Smith",
                  notificationId: "8fa29610-e32e-11eb-a03f-b542039adbaa",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1626107468273,
                },
                "8fa2e430-e32e-11eb-a03f-b542039adbaa": {
                  userName: "Lily",
                  posterUserName: "Smith",
                  notificationId: "8fa2e430-e32e-11eb-a03f-b542039adbaa",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1626107468275,
                },
                "9656be00-e32e-11eb-a03f-b542039adbaa": {
                  userName: "Lily",
                  posterUserName: "Liam",
                  notificationId: "9656be00-e32e-11eb-a03f-b542039adbaa",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1626107479520,
                },
                "9656e510-e32e-11eb-a03f-b542039adbaa": {
                  userName: "Lily",
                  posterUserName: "Liam",
                  notificationId: "9656e510-e32e-11eb-a03f-b542039adbaa",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1626107479521,
                },
                "0ceed980-e32f-11eb-a03f-b542039adbaa": {
                  userName: "Lily",
                  notificationId: "0ceed980-e32f-11eb-a03f-b542039adbaa",
                  notificationType: "post",
                  notificationStatus: "unRead",
                  notificationDate: 1626107678488,
                },
              },
              occupation: "",
              status: "online",
              activities: {
                "7b156d40-db3a-11eb-af32-47b0df65ae76": {
                  userName: "Sophie",
                  activity: "Created account",
                  activityDate: 1625232978452,
                  activityId: "7b156d40-db3a-11eb-af32-47b0df65ae76",
                },
                "7601c130-e064-11eb-8d8d-bf9aae01f450": {
                  userName: "Sophie",
                  activity: "logged in",
                  activityDate: 1625800764611,
                  activityId: "7601c130-e064-11eb-8d8d-bf9aae01f450",
                },
                "7b59db92-e064-11eb-8d8d-bf9aae01f450": {
                  userName: "Sophie",
                  posterUserName: "Mia",
                  activity: "liked",
                  activityDate: 1625800773577,
                  activityId: "7b59db92-e064-11eb-8d8d-bf9aae01f450",
                },
                "86b5e0b0-e064-11eb-8d8d-bf9aae01f450": {
                  userName: "Sophie",
                  posterUserName: "Carter",
                  commenterUserName: "Mia",
                  activity: "likedComment",
                  activityDate: 1625800792635,
                  activityId: "86b5e0b0-e064-11eb-8d8d-bf9aae01f450",
                },
                "87e49cb1-e064-11eb-8d8d-bf9aae01f450": {
                  userName: "Sophie",
                  posterUserName: "Carter",
                  activity: "liked",
                  activityDate: 1625800794619,
                  activityId: "87e49cb1-e064-11eb-8d8d-bf9aae01f450",
                },
                "89c9d771-e064-11eb-8d8d-bf9aae01f450": {
                  userName: "Sophie",
                  posterUserName: "Nova",
                  activity: "liked",
                  activityDate: 1625800797799,
                  activityId: "89c9d771-e064-11eb-8d8d-bf9aae01f450",
                },
                "8c5479f1-e064-11eb-8d8d-bf9aae01f450": {
                  userName: "Sophie",
                  posterUserName: "Nova",
                  commenterUserName: "Mia",
                  activity: "likedComment",
                  activityDate: 1625800802063,
                  activityId: "8c5479f1-e064-11eb-8d8d-bf9aae01f450",
                },
                "8db47f22-e064-11eb-8d8d-bf9aae01f450": {
                  userName: "Sophie",
                  posterUserName: "Lily",
                  activity: "liked",
                  activityDate: 1625800804370,
                  activityId: "8db47f22-e064-11eb-8d8d-bf9aae01f450",
                },
                "8f288181-e064-11eb-8d8d-bf9aae01f450": {
                  userName: "Sophie",
                  posterUserName: "Lily",
                  commenterUserName: "Nova",
                  activity: "likedComment",
                  activityDate: 1625800806808,
                  activityId: "8f288181-e064-11eb-8d8d-bf9aae01f450",
                },
                "900e4da0-e064-11eb-8d8d-bf9aae01f450": {
                  userName: "Sophie",
                  posterUserName: "Lily",
                  commenterUserName: "Mia",
                  activity: "likedComment",
                  activityDate: 1625800808314,
                  activityId: "900e4da0-e064-11eb-8d8d-bf9aae01f450",
                },
                "921652a0-e064-11eb-8d8d-bf9aae01f450": {
                  userName: "Sophie",
                  posterUserName: "Ivy",
                  activity: "liked",
                  activityDate: 1625800811722,
                  activityId: "921652a0-e064-11eb-8d8d-bf9aae01f450",
                },
                "719450f0-e090-11eb-bcb8-25b2107d0c08": {
                  friendUserName: "Lily",
                  userName: "Sophie",
                  activity: "Accepted Friend Request",
                  activityDate: 1625819655039,
                  activityId: "719450f0-e090-11eb-bcb8-25b2107d0c08",
                },
                "770e9950-e090-11eb-bcb8-25b2107d0c08": {
                  userName: "Sophie",
                  friendUserName: "Ava",
                  activity: "Friend request",
                  activityDate: 1625819664229,
                  activityId: "770e9950-e090-11eb-bcb8-25b2107d0c08",
                },
                "99934400-e0c0-11eb-85f3-797226efa932": {
                  userName: "Sophie",
                  posterUserName: "Ruby",
                  activity: "liked",
                  activityDate: 1625840337984,
                  activityId: "99934400-e0c0-11eb-85f3-797226efa932",
                },
                "bb25ee60-e0c0-11eb-85f3-797226efa932": {
                  userName: "Sophie",
                  posterUserName: "Ruby",
                  activity: "commented",
                  activityDate: 1625840394310,
                  activityId: "bb25ee60-e0c0-11eb-85f3-797226efa932",
                },
                "bceb1e01-e0c0-11eb-85f3-797226efa932": {
                  userName: "Sophie",
                  posterUserName: "Carter",
                  activity: "liked",
                  activityDate: 1625840397280,
                  activityId: "bceb1e01-e0c0-11eb-85f3-797226efa932",
                },
                "cae28e80-e0c0-11eb-85f3-797226efa932": {
                  userName: "Sophie",
                  posterUserName: "Carter",
                  activity: "commented",
                  activityDate: 1625840420712,
                  activityId: "cae28e80-e0c0-11eb-85f3-797226efa932",
                },
                "cf0ab460-e0c0-11eb-85f3-797226efa932": {
                  userName: "Sophie",
                  posterUserName: "Ethan",
                  activity: "liked",
                  activityDate: 1625840427686,
                  activityId: "cf0ab460-e0c0-11eb-85f3-797226efa932",
                },
                "d0b5a540-e0c0-11eb-85f3-797226efa932": {
                  userName: "Sophie",
                  posterUserName: "Ava",
                  activity: "liked",
                  activityDate: 1625840430484,
                  activityId: "d0b5a540-e0c0-11eb-85f3-797226efa932",
                },
                "fc9cb350-e0c1-11eb-85f3-797226efa932": {
                  userName: "Sophie",
                  activity: "posted",
                  activityDate: 1625840933637,
                  activityId: "fc9cb350-e0c1-11eb-85f3-797226efa932",
                },
                "0bdfddb0-e0c2-11eb-85f3-797226efa932": {
                  userName: "Sophie",
                  posterUserName: "Sophie",
                  activity: "liked",
                  activityDate: 1625840959243,
                  activityId: "0bdfddb0-e0c2-11eb-85f3-797226efa932",
                },
                "ae3072a0-e0c2-11eb-b6c9-55522da2a112": {
                  userName: "Sophie",
                  activity: "logged in",
                  activityDate: 1625841231562,
                  activityId: "ae3072a0-e0c2-11eb-b6c9-55522da2a112",
                },
                "a52834a0-e0da-11eb-b6c9-55522da2a112": {
                  userName: "Sophie",
                  activity: "logged in",
                  activityDate: 1625851524330,
                  activityId: "a52834a0-e0da-11eb-b6c9-55522da2a112",
                },
              },
              userCoverImage: "/img/defaultBg.2793204e.jpg",
              userId: "7b154630-db3a-11eb-af32-47b0df65ae76",
              userProfileImage: a("e5bc"),
            },
            Ruby: {
              userName: "Ruby",
              emailAddress: "Ruby@email.com",
              password: "somedia",
              firstName: "Ruby",
              lastName: "Jones",
              gender: "Female",
              address: "",
              postCode: "",
              city: "",
              country: "",
              aboutMe: "",
              posts: [],
              followers: [{ userName: "Olive" }],
              following: [],
              friends: [{ userName: "Ella" }, { userName: "Sophie" }],
              age: "",
              education: "",
              videos: [],
              photos: [
                {
                  imageUrl: a("cdb2"),
                  imageId: "b13fdce0-e0bf-11eb-8787-59040f6b2cc8",
                },
                {
                  imageUrl: a("b954"),
                  imageId: "1c9c7390-e0c0-11eb-8787-59040f6b2cc8",
                },
              ],
              messages: {},
              messageStatus: {},
              notifications: {
                "9992ced0-e0c0-11eb-85f3-797226efa932": {
                  userName: "Sophie",
                  posterUserName: "Ruby",
                  notificationId: "9992ced0-e0c0-11eb-85f3-797226efa932",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625840337981,
                },
                "99931cf0-e0c0-11eb-85f3-797226efa932": {
                  userName: "Sophie",
                  posterUserName: "Ruby",
                  notificationId: "99931cf0-e0c0-11eb-85f3-797226efa932",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625840337983,
                },
                "bb25c750-e0c0-11eb-85f3-797226efa932": {
                  userName: "Sophie",
                  posterUserName: "Ruby",
                  notificationId: "bb25c750-e0c0-11eb-85f3-797226efa932",
                  notificationType: "comment",
                  notificationStatus: "unRead",
                  notificationDate: 1625840394309,
                },
                "bceacfe0-e0c0-11eb-85f3-797226efa932": {
                  userName: "Sophie",
                  posterUserName: "Carter",
                  notificationId: "bceacfe0-e0c0-11eb-85f3-797226efa932",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625840397278,
                },
                "bceb1e00-e0c0-11eb-85f3-797226efa932": {
                  userName: "Sophie",
                  posterUserName: "Carter",
                  notificationId: "bceb1e00-e0c0-11eb-85f3-797226efa932",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625840397280,
                },
                "cae26771-e0c0-11eb-85f3-797226efa932": {
                  userName: "Sophie",
                  posterUserName: "Carter",
                  notificationId: "cae26771-e0c0-11eb-85f3-797226efa932",
                  notificationType: "comment",
                  notificationStatus: "unRead",
                  notificationDate: 1625840420711,
                },
                "cf0a8d50-e0c0-11eb-85f3-797226efa932": {
                  userName: "Sophie",
                  posterUserName: "Ethan",
                  notificationId: "cf0a8d50-e0c0-11eb-85f3-797226efa932",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625840427685,
                },
                "cf0a8d51-e0c0-11eb-85f3-797226efa932": {
                  userName: "Sophie",
                  posterUserName: "Ethan",
                  notificationId: "cf0a8d51-e0c0-11eb-85f3-797226efa932",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625840427685,
                },
                "d0b53010-e0c0-11eb-85f3-797226efa932": {
                  userName: "Sophie",
                  posterUserName: "Ava",
                  notificationId: "d0b53010-e0c0-11eb-85f3-797226efa932",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625840430481,
                },
                "d0b57e30-e0c0-11eb-85f3-797226efa932": {
                  userName: "Sophie",
                  posterUserName: "Ava",
                  notificationId: "d0b57e30-e0c0-11eb-85f3-797226efa932",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625840430483,
                },
                "fc9c8c40-e0c1-11eb-85f3-797226efa932": {
                  userName: "Sophie",
                  notificationId: "fc9c8c40-e0c1-11eb-85f3-797226efa932",
                  notificationType: "post",
                  notificationStatus: "unRead",
                  notificationDate: 1625840933636,
                },
                "0bdf8f90-e0c2-11eb-85f3-797226efa932": {
                  userName: "Sophie",
                  posterUserName: "Sophie",
                  notificationId: "0bdf8f90-e0c2-11eb-85f3-797226efa932",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625840959241,
                },
                "0bdfb6a0-e0c2-11eb-85f3-797226efa932": {
                  userName: "Sophie",
                  posterUserName: "Sophie",
                  notificationId: "0bdfb6a0-e0c2-11eb-85f3-797226efa932",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625840959242,
                },
                "60a88a90-e0db-11eb-907b-171d7592562f": {
                  userName: "Chloe",
                  posterUserName: "Ruby",
                  notificationId: "60a88a90-e0db-11eb-907b-171d7592562f",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625851838905,
                },
                "60a88a91-e0db-11eb-907b-171d7592562f": {
                  userName: "Chloe",
                  posterUserName: "Ruby",
                  notificationId: "60a88a91-e0db-11eb-907b-171d7592562f",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625851838905,
                },
                "6e2c4e70-e19b-11eb-871f-0f966330432a": {
                  userName: "Ada",
                  posterUserName: "Ruby",
                  notificationId: "6e2c4e70-e19b-11eb-871f-0f966330432a",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625934324951,
                },
                "6e2c4e71-e19b-11eb-871f-0f966330432a": {
                  userName: "Ada",
                  posterUserName: "Ruby",
                  notificationId: "6e2c4e71-e19b-11eb-871f-0f966330432a",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625934324951,
                },
                "ec752f70-e19d-11eb-86e8-11fcf2392733": {
                  userName: "Olive",
                  posterUserName: "Ruby",
                  notificationId: "ec752f70-e19d-11eb-86e8-11fcf2392733",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625935395815,
                },
                "ec755680-e19d-11eb-86e8-11fcf2392733": {
                  userName: "Olive",
                  posterUserName: "Ruby",
                  notificationId: "ec755680-e19d-11eb-86e8-11fcf2392733",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625935395816,
                },
                "02d3a800-e19e-11eb-86e8-11fcf2392733": {
                  userName: "Olive",
                  posterUserName: "Ruby",
                  notificationId: "02d3a800-e19e-11eb-86e8-11fcf2392733",
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: 1625935433344,
                },
                "02d3cf11-e19e-11eb-86e8-11fcf2392733": {
                  userName: "Olive",
                  posterUserName: "Ruby",
                  commenterUserName: "Sophie",
                  notificationId: "02d3cf11-e19e-11eb-86e8-11fcf2392733",
                  notificationType: "likedComment",
                  notificationStatus: "unRead",
                  notificationDate: 1625935433345,
                },
                "239c2490-e19e-11eb-86e8-11fcf2392733": {
                  userName: "Olive",
                  friendUserName: "Ruby",
                  notificationId: "239c2490-e19e-11eb-86e8-11fcf2392733",
                  notificationType: "follow",
                  notificationStatus: "unRead",
                  notificationDate: 1625935488345,
                },
                "d4e7d420-e2ab-11eb-8a39-b39ebfa4685e": {
                  userName: "Smith",
                  friendUserName: "Ruby",
                  notificationId: "d4e7d420-e2ab-11eb-8a39-b39ebfa4685e",
                  notificationType: "friend request",
                  notificationStatus: "unRead",
                  notificationDate: 1626051320418,
                },
              },
              occupation: "",
              status: "online",
              activities: {
                "964fa440-db3a-11eb-af32-47b0df65ae76": {
                  userName: "Ruby",
                  activity: "Created account",
                  activityDate: 1625233024132,
                  activityId: "964fa440-db3a-11eb-af32-47b0df65ae76",
                },
                "0f06d980-e0bd-11eb-acf8-97f832451a98": {
                  userName: "Ruby",
                  activity: "logged in",
                  activityDate: 1625838817048,
                  activityId: "0f06d980-e0bd-11eb-acf8-97f832451a98",
                },
                "1c51dd60-e0bd-11eb-8787-59040f6b2cc8": {
                  userName: "Ruby",
                  posterUserName: "Carter",
                  activity: "liked",
                  activityDate: 1625838839350,
                  activityId: "1c51dd60-e0bd-11eb-8787-59040f6b2cc8",
                },
                "1f7f2882-e0bd-11eb-8787-59040f6b2cc8": {
                  userName: "Ruby",
                  posterUserName: "Ella",
                  activity: "liked",
                  activityDate: 1625838844680,
                  activityId: "1f7f2882-e0bd-11eb-8787-59040f6b2cc8",
                },
                "1c9c9aa0-e0c0-11eb-8787-59040f6b2cc8": {
                  userName: "Ruby",
                  activity: "posted",
                  activityDate: 1625840128330,
                  activityId: "1c9c9aa0-e0c0-11eb-8787-59040f6b2cc8",
                },
                "351b5b21-e0c0-11eb-8787-59040f6b2cc8": {
                  userName: "Ruby",
                  posterUserName: "Carter",
                  activity: "commented",
                  activityDate: 1625840169426,
                  activityId: "351b5b21-e0c0-11eb-8787-59040f6b2cc8",
                },
                "4f2a5890-e0c0-11eb-8787-59040f6b2cc8": {
                  friendUserName: "Ella",
                  userName: "Ruby",
                  activity: "Accepted Friend Request",
                  activityDate: 1625840213145,
                  activityId: "4f2a5890-e0c0-11eb-8787-59040f6b2cc8",
                },
                "50554400-e0c0-11eb-8787-59040f6b2cc8": {
                  friendUserName: "Sophie",
                  userName: "Ruby",
                  activity: "Accepted Friend Request",
                  activityDate: 1625840215104,
                  activityId: "50554400-e0c0-11eb-8787-59040f6b2cc8",
                },
                "58822941-e0c0-11eb-8787-59040f6b2cc8": {
                  userName: "Ruby",
                  friendUserName: "Liam",
                  activity: "Friend request",
                  activityDate: 1625840228820,
                  activityId: "58822941-e0c0-11eb-8787-59040f6b2cc8",
                },
                "599ff551-e0c0-11eb-8787-59040f6b2cc8": {
                  userName: "Ruby",
                  friendUserName: "Logan",
                  activity: "Friend request",
                  activityDate: 1625840230693,
                  activityId: "599ff551-e0c0-11eb-8787-59040f6b2cc8",
                },
                "5aac8351-e0c0-11eb-8787-59040f6b2cc8": {
                  userName: "Ruby",
                  friendUserName: "Sebby",
                  activity: "Friend request",
                  activityDate: 1625840232453,
                  activityId: "5aac8351-e0c0-11eb-8787-59040f6b2cc8",
                },
              },
              userCoverImage: "/img/defaultBg.2793204e.jpg",
              userId: "964f7d30-db3a-11eb-af32-47b0df65ae76",
              userProfileImage: a("cdb2"),
            },
          },
          allUsers: {
            Carter: {
              userName: "Carter",
              requestStatus: "Request Sent",
              requests: [
                { userName: "Carter" },
                { userName: "Chloe" },
                { userName: "Ada" },
                { userName: "Smith" },
              ],
            },
            Ethan: {
              userName: "Ethan",
              requestStatus: "Add Friend",
              requests: [
                { userName: "Ella" },
                { userName: "Chloe" },
                { userName: "Ada" },
              ],
            },
            Josh: {
              userName: "Josh",
              requestStatus: "Add Friend",
              requests: [
                { userName: "Lily" },
                { userName: "Ella" },
                { userName: "Chloe" },
                { userName: "Ada" },
              ],
            },
            Liam: {
              userName: "Liam",
              requestStatus: "Add Friend",
              requests: [
                { userName: "Ethan" },
                { userName: "Ella" },
                { userName: "Ruby" },
                { userName: "Chloe" },
                { userName: "Ada" },
              ],
            },
            Logan: {
              userName: "Logan",
              requestStatus: "Request Sent",
              requests: [
                { userName: "Ethan" },
                { userName: "Ruby" },
                { userName: "Ada" },
                { userName: "Smith" },
              ],
            },
            Olive: {
              userName: "Olive",
              requestStatus: "Add Friend",
              requests: [],
            },
            Sebby: {
              userName: "Sebby",
              requestStatus: "Add Friend",
              requests: [{ userName: "Ruby" }, { userName: "Olive" }],
            },
            Smith: {
              userName: "Smith",
              requestStatus: "Add Friend",
              requests: [],
            },
            Ada: {
              userName: "Ada",
              requestStatus: "Add Friend",
              requests: [{ userName: "Olive" }],
            },
            Mia: {
              userName: "Mia",
              requestStatus: "Add Friend",
              requests: [{ userName: "Olive" }],
            },
            Ava: {
              userName: "Ava",
              requestStatus: "Accept Request",
              requests: [{ userName: "Sophie" }, { userName: "Olive" }],
            },
            Ella: {
              userName: "Ella",
              requestStatus: "Accept Request",
              requests: [],
            },
            Chloe: {
              userName: "Chloe",
              requestStatus: "Add Friend",
              requests: [],
            },
            Lily: {
              userName: "Lily",
              requestStatus: "Accept Request",
              requests: [],
            },
            Nova: {
              userName: "Nova",
              requestStatus: "Add Friend",
              requests: [{ userName: "Nova" }, { userName: "Olive" }],
            },
            Ivy: {
              userName: "Ivy",
              requestStatus: "Add Friend",
              requests: [
                { userName: "Ivy" },
                { userName: "Lily" },
                { userName: "Olive" },
              ],
            },
            Sophie: {
              userName: "Sophie",
              requestStatus: "Accept Request",
              requests: [],
            },
            Ruby: {
              userName: "Ruby",
              requestStatus: "Request Sent",
              requests: [{ userName: "Smith" }],
            },
          },
          newsFeed: {
            "9b687760-dc19-11eb-9e4e-33ab2bd5ac9e": {
              userName: "Ivy",
              userId: "5c8ef170-db3a-11eb-af32-47b0df65ae76",
              views: [
                "Ivy",
                "Lily",
                "Nova",
                "Carter",
                "Mia",
                "Ava",
                "Sophie",
                "Ethan",
                "Ella",
                "Ruby",
                "Chloe",
                "Olive",
                "Liam",
                "Sebby",
              ],
              postId: "9b687760-dc19-11eb-9e4e-33ab2bd5ac9e",
              datePosted: 1625328810454,
              posts: "Hi Guys ,How was your day",
              likes: ["Lily", "Nova", "Carter", "Sophie", "Chloe"],
              unLikes: [],
              posterComment: "",
              comments: {
                "1afbc4a0-dc1a-11eb-9e4e-33ab2bd5ac9e": {
                  userName: "Lily",
                  userId: "df512cf0-db39-11eb-af32-47b0df65ae76",
                  comment: "It was good and you dear?",
                  dateCommented: 1625329024490,
                  commentId: "1afbc4a0-dc1a-11eb-9e4e-33ab2bd5ac9e",
                  likes: ["Nova"],
                  postId: "9b687760-dc19-11eb-9e4e-33ab2bd5ac9e",
                  unLikes: [],
                },
                "63fcd2b0-df3b-11eb-a210-09083f776f3d": {
                  userName: "Nova",
                  userId: "3e29e050-db3a-11eb-af32-47b0df65ae76",
                  comment: "nice and you",
                  dateCommented: 1625673173851,
                  commentId: "63fcd2b0-df3b-11eb-a210-09083f776f3d",
                  likes: [],
                  postId: "9b687760-dc19-11eb-9e4e-33ab2bd5ac9e",
                  unLikes: [],
                },
              },
              postStyle: "text-theme-default",
              postImages: [
                {
                  imageUrl: a("cf1d"),
                  imageId: "9b687761-dc19-11eb-9e4e-33ab2bd5ac9e",
                },
              ],
              postVideos: {
                videoUrl: a("cf1d"),
                videoId: "",
                videoAutoplay: !1,
              },
            },
            "e5b7c380-dc1d-11eb-b872-29eca492d404": {
              userName: "Lily",
              userId: "df512cf0-db39-11eb-af32-47b0df65ae76",
              views: [
                "Lily",
                "Nova",
                "Carter",
                "Mia",
                "Ava",
                "Sophie",
                "Ethan",
                "Ella",
                "Ruby",
                "Chloe",
                "Ada",
                "Olive",
                "Liam",
                "Sebby",
              ],
              postId: "e5b7c380-dc1d-11eb-b872-29eca492d404",
              datePosted: 1625330653112,
              posts: "My new Hair Style",
              likes: ["Lily", "Nova", "Carter", "Mia", "Sophie", "Chloe"],
              unLikes: [],
              posterComment: "",
              comments: {
                "533f6460-df3b-11eb-a210-09083f776f3d": {
                  userName: "Nova",
                  userId: "3e29e050-db3a-11eb-af32-47b0df65ae76",
                  comment: "I love your hair style",
                  dateCommented: 1625673145766,
                  commentId: "533f6460-df3b-11eb-a210-09083f776f3d",
                  likes: ["Carter", "Sophie"],
                  postId: "e5b7c380-dc1d-11eb-b872-29eca492d404",
                  unLikes: [],
                },
                "332110e0-df43-11eb-a210-09083f776f3d": {
                  userName: "Mia",
                  userId: "5afc8710-db39-11eb-af32-47b0df65ae76",
                  comment: " You are looking nice dear",
                  dateCommented: 1625676527854,
                  commentId: "332110e0-df43-11eb-a210-09083f776f3d",
                  likes: ["Sophie"],
                  postId: "e5b7c380-dc1d-11eb-b872-29eca492d404",
                  unLikes: [],
                },
              },
              postStyle: "text-theme-default",
              postImages: [
                {
                  imageUrl: a("35b7"),
                  imageId: "e5b7c381-dc1d-11eb-b872-29eca492d404",
                },
              ],
              postVideos: { videoUrl: "", videoId: "", videoAutoplay: !1 },
            },
            "68b3a730-df3f-11eb-a210-09083f776f3d": {
              userName: "Nova",
              userId: "3e29e050-db3a-11eb-af32-47b0df65ae76",
              views: [
                "Nova",
                "Carter",
                "Mia",
                "Ava",
                "Sophie",
                "Ethan",
                "Ella",
                "Ruby",
                "Chloe",
                "Ada",
                "Olive",
                "Liam",
                "Sebby",
              ],
              postId: "68b3a730-df3f-11eb-a210-09083f776f3d",
              datePosted: 1625674899747,
              posts: "My love for flowers    ❤❤❤❤💖💖💖💖",
              likes: ["Nova", "Carter", "Mia", "Sophie", "Ethan", "Chloe"],
              unLikes: [],
              posterComment: "",
              comments: {
                "44371160-df41-11eb-a210-09083f776f3d": {
                  userName: "Carter",
                  userId: "1b95fb40-d9c9-11eb-ba8c-e9a262a433df",
                  comment: "I also love flowers 😊😊😊",
                  dateCommented: 1625675697526,
                  commentId: "44371160-df41-11eb-a210-09083f776f3d",
                  likes: ["Mia"],
                  postId: "68b3a730-df3f-11eb-a210-09083f776f3d",
                  unLikes: [],
                },
                "85737650-df4b-11eb-961c-b7b5c586ebc2": {
                  userName: "Mia",
                  userId: "5afc8710-db39-11eb-af32-47b0df65ae76",
                  comment: "Me too🎉🎉🎉🎉",
                  dateCommented: 1625680101941,
                  commentId: "85737650-df4b-11eb-961c-b7b5c586ebc2",
                  likes: ["Sophie"],
                  postId: "68b3a730-df3f-11eb-a210-09083f776f3d",
                  unLikes: [],
                },
                "fa02d3c0-e0af-11eb-90ca-19effd8b5a00": {
                  userName: "Ethan",
                  userId: "4eb300e0-d9c9-11eb-ba8c-e9a262a433df",
                  comment: "Nice",
                  dateCommented: 1625833198332,
                  commentId: "fa02d3c0-e0af-11eb-90ca-19effd8b5a00",
                  likes: [],
                  postId: "68b3a730-df3f-11eb-a210-09083f776f3d",
                  unLikes: [],
                },
              },
              postStyle: "text-theme-default",
              postImages: [
                {
                  imageUrl: a("cf1d"),
                  imageId: "68b3a731-df3f-11eb-a210-09083f776f3d",
                },
              ],
              postVideos: {
                videoUrl: a("cf1d"),
                videoId: "",
                videoAutoplay: !1,
              },
            },
            "e90c98f0-df40-11eb-a210-09083f776f3d": {
              userName: "Carter",
              userId: "1b95fb40-d9c9-11eb-ba8c-e9a262a433df",
              views: [
                "Carter",
                "Mia",
                "Ava",
                "Sophie",
                "Ethan",
                "Ella",
                "Ruby",
                "Chloe",
                "Ada",
                "Olive",
                "Liam",
                "Sebby",
              ],
              postId: "e90c98f0-df40-11eb-a210-09083f776f3d",
              datePosted: 1625675544575,
              posts:
                '"Working similar time frames with similar time break patterns has been helpful . I can be productive ,yet give myself permission to step away from home office guilt-free."\nNATHAN ELLERING',
              likes: ["Carter", "Mia", "Sophie", "Ethan", "Chloe", "Olive"],
              unLikes: [],
              posterComment: "",
              comments: {
                "58c94380-df43-11eb-a210-09083f776f3d": {
                  userName: "Mia",
                  userId: "5afc8710-db39-11eb-af32-47b0df65ae76",
                  comment: "Hard work pays 👌👌",
                  dateCommented: 1625676591032,
                  commentId: "58c94380-df43-11eb-a210-09083f776f3d",
                  likes: ["Sophie", "Ethan", "Carter"],
                  postId: "e90c98f0-df40-11eb-a210-09083f776f3d",
                  unLikes: [],
                },
                "ffdd9530-e0bb-11eb-bbed-5fb8923dc3e7": {
                  userName: "Carter",
                  userId: "1b95fb40-d9c9-11eb-ba8c-e9a262a433df",
                  comment: "Yes it does",
                  dateCommented: 1625838362115,
                  commentId: "ffdd9530-e0bb-11eb-bbed-5fb8923dc3e7",
                  likes: [],
                  postId: "e90c98f0-df40-11eb-a210-09083f776f3d",
                  unLikes: [],
                },
              },
              postStyle: "text-themeNine",
              postImages: [
                {
                  imageUrl: "",
                  imageId: "e90c98f1-df40-11eb-a210-09083f776f3d",
                },
              ],
              postVideos: { videoUrl: "", videoId: "", videoAutoplay: !1 },
            },
            "d9341a20-df45-11eb-a210-09083f776f3d": {
              userName: "Mia",
              userId: "5afc8710-db39-11eb-af32-47b0df65ae76",
              views: [
                "Mia",
                "Ava",
                "Sophie",
                "Ethan",
                "Ella",
                "Carter",
                "Ruby",
                "Chloe",
                "Ada",
                "Olive",
                "Liam",
                "Sebby",
              ],
              postId: "d9341a20-df45-11eb-a210-09083f776f3d",
              datePosted: 1625677665474,
              posts: "I love my smile 😁😁😁😍😍 ",
              likes: [
                "Mia",
                "Ava",
                "Sophie",
                "Ethan",
                "Ella",
                "Carter",
                "Chloe",
                "Olive",
              ],
              unLikes: [],
              posterComment: "",
              comments: {
                "cbe536f0-df4b-11eb-961c-b7b5c586ebc2": {
                  userName: "Ava",
                  userId: "839d1220-db39-11eb-af32-47b0df65ae76",
                  comment: "You have a beautiful smile😊😊👍",
                  dateCommented: 1625680220128,
                  commentId: "cbe536f0-df4b-11eb-961c-b7b5c586ebc2",
                  likes: [],
                  postId: "d9341a20-df45-11eb-a210-09083f776f3d",
                  unLikes: [],
                },
                "abf7e260-e0af-11eb-90ca-19effd8b5a00": {
                  userName: "Ethan",
                  userId: "4eb300e0-d9c9-11eb-ba8c-e9a262a433df",
                  comment: "I love your smile💖💖",
                  dateCommented: 1625833067398,
                  commentId: "abf7e260-e0af-11eb-90ca-19effd8b5a00",
                  likes: [],
                  postId: "d9341a20-df45-11eb-a210-09083f776f3d",
                  unLikes: [],
                },
              },
              postStyle: "text-theme-default",
              postImages: [
                {
                  imageUrl: a("8919"),
                  imageId: "d9341a21-df45-11eb-a210-09083f776f3d",
                },
              ],
              postVideos: {
                videoUrl: a("8919"),
                videoId: "",
                videoAutoplay: !1,
              },
            },
            "4f3847d0-e0ab-11eb-bcb8-25b2107d0c08": {
              userName: "Ava",
              userId: "839d1220-db39-11eb-af32-47b0df65ae76",
              views: [
                "Ava",
                "Ethan",
                "Ella",
                "Carter",
                "Ruby",
                "Sophie",
                "Chloe",
                "Ada",
                "Olive",
                "Liam",
                "Sebby",
              ],
              postId: "4f3847d0-e0ab-11eb-bcb8-25b2107d0c08",
              datePosted: 1625831193805,
              posts: "On the Look 😎",
              likes: [
                "Ava",
                "Ethan",
                "Ella",
                "Carter",
                "Sophie",
                "Chloe",
                "Olive",
              ],
              unLikes: [],
              posterComment: "",
              comments: {
                "8f0a2f00-e0af-11eb-90ca-19effd8b5a00": {
                  userName: "Ethan",
                  userId: "4eb300e0-d9c9-11eb-ba8c-e9a262a433df",
                  comment: "you look good dear😍",
                  dateCommented: 1625833018864,
                  commentId: "8f0a2f00-e0af-11eb-90ca-19effd8b5a00",
                  likes: [],
                  postId: "4f3847d0-e0ab-11eb-bcb8-25b2107d0c08",
                  unLikes: [],
                },
              },
              postStyle: "text-theme-default",
              postImages: [
                {
                  imageUrl: a("b85a"),
                  imageId: "4f3847d1-e0ab-11eb-bcb8-25b2107d0c08",
                },
              ],
              postVideos: {
                videoUrl: a("b85a"),
                videoId: "",
                videoAutoplay: !1,
              },
            },
            "7c498130-e0b0-11eb-90ca-19effd8b5a00": {
              userName: "Ethan",
              userId: "4eb300e0-d9c9-11eb-ba8c-e9a262a433df",
              views: [
                "Ethan",
                "Ella",
                "Carter",
                "Ruby",
                "Sophie",
                "Chloe",
                "Ada",
                "Olive",
                "Liam",
                "Sebby",
              ],
              postId: "7c498130-e0b0-11eb-90ca-19effd8b5a00",
              datePosted: 1625833416899,
              posts: "Identical Me 🧑🧑",
              likes: ["Ethan", "Ella", "Carter", "Sophie", "Chloe", "Olive"],
              unLikes: [],
              posterComment: "",
              comments: {
                "e83d3580-e0b5-11eb-b9c1-cfb72beca659": {
                  userName: "Ella",
                  userId: "a7f5e160-db39-11eb-af32-47b0df65ae76",
                  comment: "Handsome Boy",
                  dateCommented: 1625835745496,
                  commentId: "e83d3580-e0b5-11eb-b9c1-cfb72beca659",
                  likes: [],
                  postId: "7c498130-e0b0-11eb-90ca-19effd8b5a00",
                  unLikes: [],
                },
                "cfbd0e10-e0b8-11eb-a091-bd97fb995f1d": {
                  userName: "Carter",
                  userId: "1b95fb40-d9c9-11eb-ba8c-e9a262a433df",
                  comment: "That's my guys 👍",
                  dateCommented: 1625836992881,
                  commentId: "cfbd0e10-e0b8-11eb-a091-bd97fb995f1d",
                  likes: [],
                  postId: "7c498130-e0b0-11eb-90ca-19effd8b5a00",
                  unLikes: [],
                },
              },
              postStyle: "text-theme-default",
              postImages: [
                {
                  imageUrl: a("c8d9"),
                  imageId: "7c498131-e0b0-11eb-90ca-19effd8b5a00",
                },
              ],
              postVideos: {
                videoUrl: a("c8d9"),
                videoId: "",
                videoAutoplay: !1,
              },
            },
            "0f06ddb0-e0b6-11eb-bb52-d5cdf6bb26a5": {
              userName: "Ella",
              userId: "a7f5e160-db39-11eb-af32-47b0df65ae76",
              views: [
                "Ella",
                "Carter",
                "Ruby",
                "Sophie",
                "Chloe",
                "Ada",
                "Olive",
                "Liam",
                "Sebby",
                "Josh",
              ],
              postId: "0f06ddb0-e0b6-11eb-bb52-d5cdf6bb26a5",
              datePosted: 1625835810572,
              posts: "",
              likes: ["Ella", "Carter", "Ruby", "Chloe", "Olive"],
              unLikes: [],
              posterComment: "",
              comments: {
                "aa587420-e0b8-11eb-a091-bd97fb995f1d": {
                  userName: "Carter",
                  userId: "1b95fb40-d9c9-11eb-ba8c-e9a262a433df",
                  comment: "Colorful fishes",
                  dateCommented: 1625836930146,
                  commentId: "aa587420-e0b8-11eb-a091-bd97fb995f1d",
                  likes: [],
                  postId: "0f06ddb0-e0b6-11eb-bb52-d5cdf6bb26a5",
                  unLikes: [],
                },
                "b9aa7db0-e0db-11eb-907b-171d7592562f": {
                  userName: "Chloe",
                  userId: "c5883930-db39-11eb-af32-47b0df65ae76",
                  comment: "What is the name of this fish?",
                  dateCommented: 1625851988235,
                  commentId: "b9aa7db0-e0db-11eb-907b-171d7592562f",
                  likes: [],
                  postId: "0f06ddb0-e0b6-11eb-bb52-d5cdf6bb26a5",
                  unLikes: [],
                },
              },
              postStyle: "text-theme-default",
              postImages: [{ imageUrl: "", imageId: "" }],
              postVideos: {
                videoUrl:
                  "https://player.vimeo.com/external/225795819.sd.mp4?s=ff3df6f01140546ad5fcf8045dfffb3d4577fa22&profile_id=164&oauth2_token_id=57447761",
                videoId: "0f0704c0-e0b6-11eb-bb52-d5cdf6bb26a5",
                videoAutoplay: !1,
              },
            },
            "a55429a0-e0b9-11eb-b036-69cc37af9c61": {
              userName: "Carter",
              userId: "1b95fb40-d9c9-11eb-ba8c-e9a262a433df",
              views: [
                "Carter",
                "Ruby",
                "Sophie",
                "Chloe",
                "Ada",
                "Olive",
                "Liam",
                "Sebby",
                "Josh",
              ],
              postId: "a55429a0-e0b9-11eb-b036-69cc37af9c61",
              datePosted: 1625837351226,
              posts: "BrainStorming",
              likes: ["Carter", "Ruby", "Sophie", "Chloe", "Olive"],
              unLikes: [],
              posterComment: "",
              comments: {
                "351b3410-e0c0-11eb-8787-59040f6b2cc8": {
                  userName: "Ruby",
                  userId: "964f7d30-db3a-11eb-af32-47b0df65ae76",
                  comment: "Good 👍",
                  dateCommented: 1625840169425,
                  commentId: "351b3410-e0c0-11eb-8787-59040f6b2cc8",
                  likes: [],
                  postId: "a55429a0-e0b9-11eb-b036-69cc37af9c61",
                  unLikes: [],
                },
                "cae26770-e0c0-11eb-85f3-797226efa932": {
                  userName: "Sophie",
                  userId: "7b154630-db3a-11eb-af32-47b0df65ae76",
                  comment: "Worky work 😁😁😁",
                  dateCommented: 1625840420711,
                  commentId: "cae26770-e0c0-11eb-85f3-797226efa932",
                  likes: [],
                  postId: "a55429a0-e0b9-11eb-b036-69cc37af9c61",
                  unLikes: [],
                },
              },
              postStyle: "text-theme-default",
              postImages: [{ imageUrl: "", imageId: "" }],
              postVideos: {
                videoUrl:
                  "https://player.vimeo.com/external/372311385.sd.mp4?s=10db1eeaefacd0080449547e02e3c13126cfebeb&profile_id=139&oauth2_token_id=57447761",
                videoId: "a55429a1-e0b9-11eb-b036-69cc37af9c61",
                videoAutoplay: !1,
              },
            },
            "1c9c4c80-e0c0-11eb-8787-59040f6b2cc8": {
              userName: "Ruby",
              userId: "964f7d30-db3a-11eb-af32-47b0df65ae76",
              views: [
                "Ruby",
                "Sophie",
                "Chloe",
                "Ada",
                "Olive",
                "Liam",
                "Sebby",
                "Josh",
              ],
              postId: "1c9c4c80-e0c0-11eb-8787-59040f6b2cc8",
              datePosted: 1625840128328,
              posts: "This is how sun sets over here❤",
              likes: ["Sophie", "Chloe", "Ada", "Olive"],
              unLikes: [],
              posterComment: "",
              comments: {
                "bb25a040-e0c0-11eb-85f3-797226efa932": {
                  userName: "Sophie",
                  userId: "7b154630-db3a-11eb-af32-47b0df65ae76",
                  comment: "It's beautiful to behold😍😍😍",
                  dateCommented: 1625840394309,
                  commentId: "bb25a040-e0c0-11eb-85f3-797226efa932",
                  likes: ["Olive"],
                  postId: "1c9c4c80-e0c0-11eb-8787-59040f6b2cc8",
                  unLikes: [],
                },
                "7a6cc360-e0db-11eb-907b-171d7592562f": {
                  userName: "Chloe",
                  userId: "c5883930-db39-11eb-af32-47b0df65ae76",
                  comment: "Yellow Sun 😎",
                  dateCommented: 1625851882134,
                  commentId: "7a6cc360-e0db-11eb-907b-171d7592562f",
                  likes: [],
                  postId: "1c9c4c80-e0c0-11eb-8787-59040f6b2cc8",
                  unLikes: [],
                },
              },
              postStyle: "text-theme-default",
              postImages: [
                {
                  imageUrl: a("b954"),
                  imageId: "1c9c4c81-e0c0-11eb-8787-59040f6b2cc8",
                },
              ],
              postVideos: {
                videoUrl: a("b954"),
                videoId: "",
                videoAutoplay: !1,
              },
            },
            "fc9c1710-e0c1-11eb-85f3-797226efa932": {
              userName: "Sophie",
              userId: "7b154630-db3a-11eb-af32-47b0df65ae76",
              views: [
                "Sophie",
                "Chloe",
                "Ada",
                "Olive",
                "Liam",
                "Sebby",
                "Josh",
              ],
              postId: "fc9c1710-e0c1-11eb-85f3-797226efa932",
              datePosted: 1625840933633,
              posts: "My girl killing it 💖💖",
              likes: ["Sophie", "Chloe", "Ada", "Olive", "Liam"],
              unLikes: [],
              posterComment: "",
              comments: {
                "5b3fa750-e0db-11eb-907b-171d7592562f": {
                  userName: "Chloe",
                  userId: "c5883930-db39-11eb-af32-47b0df65ae76",
                  comment: "She is a good dancer😘",
                  dateCommented: 1625851829829,
                  commentId: "5b3fa750-e0db-11eb-907b-171d7592562f",
                  likes: ["Ada", "Olive"],
                  postId: "fc9c1710-e0c1-11eb-85f3-797226efa932",
                  unLikes: [],
                },
                "922096e0-e198-11eb-871f-0f966330432a": {
                  userName: "Ada",
                  userId: "a289cb20-d9cb-11eb-ba8c-e9a262a433df",
                  comment: "Who can teach me how to dance? 🤦‍♀️🤦‍♀️🤦‍♂️",
                  dateCommented: 1625933096782,
                  commentId: "922096e0-e198-11eb-871f-0f966330432a",
                  likes: [],
                  postId: "fc9c1710-e0c1-11eb-85f3-797226efa932",
                  unLikes: [],
                },
              },
              postStyle: "text-theme-default",
              postImages: [
                {
                  imageUrl:
                    "https://player.vimeo.com/external/386419950.sd.mp4?s=b1b36d5e58141a535d2fc104d284661d4b982c07&profile_id=139&oauth2_token_id=57447761",
                  imageId: "",
                },
              ],
              postVideos: {
                videoUrl:
                  "https://player.vimeo.com/external/386419950.sd.mp4?s=b1b36d5e58141a535d2fc104d284661d4b982c07&profile_id=139&oauth2_token_id=57447761",
                videoId: "fc9c1711-e0c1-11eb-85f3-797226efa932",
                videoAutoplay: !1,
              },
            },
            "70a248d0-e0dd-11eb-907b-171d7592562f": {
              userName: "Chloe",
              userId: "c5883930-db39-11eb-af32-47b0df65ae76",
              views: [
                "Chloe",
                "Ada",
                "Olive",
                "Liam",
                "Smith",
                "Sebby",
                "Lily",
                "Josh",
              ],
              postId: "70a248d0-e0dd-11eb-907b-171d7592562f",
              datePosted: 1625852724701,
              posts: "",
              likes: ["Chloe", "Ada", "Olive", "Liam"],
              unLikes: [],
              posterComment: "",
              comments: {
                "6b27c860-e198-11eb-871f-0f966330432a": {
                  userName: "Ada",
                  userId: "a289cb20-d9cb-11eb-ba8c-e9a262a433df",
                  comment: "Beautiful Kids 😘😘😘",
                  dateCommented: 1625933031398,
                  commentId: "6b27c860-e198-11eb-871f-0f966330432a",
                  likes: ["Olive", "Liam"],
                  postId: "70a248d0-e0dd-11eb-907b-171d7592562f",
                  unLikes: [],
                },
                "6d6d5950-e19d-11eb-86e8-11fcf2392733": {
                  userName: "Olive",
                  userId: "198e4ef0-d9ca-11eb-ba8c-e9a262a433df",
                  comment: "Great kids 😊😊😊",
                  dateCommented: 1625935182693,
                  commentId: "6d6d5950-e19d-11eb-86e8-11fcf2392733",
                  likes: ["Liam"],
                  postId: "70a248d0-e0dd-11eb-907b-171d7592562f",
                  unLikes: [],
                },
              },
              postStyle: "text-theme-default",
              postImages: [
                {
                  imageUrl:
                    "https://player.vimeo.com/external/327410344.sd.mp4?s=b629839dcfd1c0bf32e7972881a2330a1d014368&profile_id=164&oauth2_token_id=57447761",
                  imageId: "",
                },
              ],
              postVideos: {
                videoUrl:
                  "https://player.vimeo.com/external/327410344.sd.mp4?s=b629839dcfd1c0bf32e7972881a2330a1d014368&profile_id=164&oauth2_token_id=57447761",
                videoId: "70a248d1-e0dd-11eb-907b-171d7592562f",
                videoAutoplay: !1,
              },
            },
            "02ee58c0-e19a-11eb-871f-0f966330432a": {
              userName: "Ada",
              userId: "a289cb20-d9cb-11eb-ba8c-e9a262a433df",
              views: ["Ada", "Olive", "Liam", "Smith", "Sebby", "Lily", "Josh"],
              postId: "02ee58c0-e19a-11eb-871f-0f966330432a",
              datePosted: 1625933715532,
              posts: "",
              likes: ["Ada", "Olive", "Smith", "Sebby"],
              unLikes: [],
              posterComment: "",
              comments: {
                "4f21c3a0-e19d-11eb-86e8-11fcf2392733": {
                  userName: "Olive",
                  userId: "198e4ef0-d9ca-11eb-ba8c-e9a262a433df",
                  comment: "This is Nice👍",
                  dateCommented: 1625935131866,
                  commentId: "4f21c3a0-e19d-11eb-86e8-11fcf2392733",
                  likes: ["Liam"],
                  postId: "02ee58c0-e19a-11eb-871f-0f966330432a",
                  unLikes: [],
                },
              },
              postStyle: "text-theme-default",
              postImages: [
                {
                  imageUrl: a("57a6"),
                  imageId: "02ee58c1-e19a-11eb-871f-0f966330432a",
                },
              ],
              postVideos: {
                videoUrl:
                  "blob:http://localhost:8080/2920ec54-1363-432c-b59c-b99c7eb6690b",
                videoId: "",
                videoAutoplay: !1,
              },
            },
            "77aac370-e26b-11eb-af05-7d0898d50a19": {
              userName: "Olive",
              userId: "198e4ef0-d9ca-11eb-ba8c-e9a262a433df",
              views: ["Olive", "Liam", "Smith", "Sebby", "Lily", "Josh"],
              postId: "77aac370-e26b-11eb-af05-7d0898d50a19",
              datePosted: 1626023676373,
              posts:
                "On the set in New York with TY BREEZZYY , for a music video with Gordon Cowie Films.",
              likes: ["Olive", "Liam", "Sebby", "Josh"],
              unLikes: [],
              posterComment: "",
              comments: [],
              postStyle: "text-theme-default",
              postImages: [
                {
                  imageUrl: a("2213"),
                  imageId: "77c55050-e26b-11eb-af05-7d0898d50a19",
                },
              ],
              postVideos: {
                videoUrl: a("2213"),
                videoId: "",
                videoAutoplay: !1,
              },
            },
            "6aaff080-e26d-11eb-af05-7d0898d50a19": {
              userName: "Liam",
              userId: "b305d590-d9c9-11eb-ba8c-e9a262a433df",
              views: ["Liam", "Smith", "Sebby", "Lily", "Josh"],
              postId: "6aaff080-e26d-11eb-af05-7d0898d50a19",
              datePosted: 1626024513416,
              posts: "Tonight's game is going to be Lit.😁😁😁😁",
              likes: ["Liam", "Smith", "Sebby", "Lily"],
              unLikes: [],
              posterComment: "",
              comments: {
                "33a28a20-e2aa-11eb-af05-7d0898d50a19": {
                  userName: "Smith",
                  userId: "b5061cf0-d9ca-11eb-ba8c-e9a262a433df",
                  comment: "😁😁😁",
                  dateCommented: 1626050620354,
                  commentId: "33a28a20-e2aa-11eb-af05-7d0898d50a19",
                  likes: ["Smith", "Josh"],
                  postId: "6aaff080-e26d-11eb-af05-7d0898d50a19",
                  unLikes: [],
                },
                "8a281180-e32c-11eb-a03f-b542039adbaa": {
                  userName: "Sebby",
                  userId: "5cba0c50-d9ca-11eb-ba8c-e9a262a433df",
                  comment: "Yah, you are on point 👍",
                  dateCommented: 1626106600088,
                  commentId: "8a281180-e32c-11eb-a03f-b542039adbaa",
                  likes: ["Josh"],
                  postId: "6aaff080-e26d-11eb-af05-7d0898d50a19",
                  unLikes: [],
                },
              },
              postStyle: "text-theme-default",
              postImages: [
                {
                  imageUrl:
                    "https://player.vimeo.com/external/474228517.sd.mp4?s=4664fa60734c8f6826f9dc09801cb8f001e8b06e&profile_id=139&oauth2_token_id=57447761",
                  imageId: "",
                },
              ],
              postVideos: {
                videoUrl:
                  "https://player.vimeo.com/external/474228517.sd.mp4?s=4664fa60734c8f6826f9dc09801cb8f001e8b06e&profile_id=139&oauth2_token_id=57447761",
                videoId: "6aaff081-e26d-11eb-af05-7d0898d50a19",
                videoAutoplay: !1,
              },
            },
            "8eb120b0-e2ab-11eb-8a39-b39ebfa4685e": {
              userName: "Smith",
              userId: "b5061cf0-d9ca-11eb-ba8c-e9a262a433df",
              views: ["Smith", "Sebby", "Lily", "Josh", "Logan"],
              postId: "8eb120b0-e2ab-11eb-8a39-b39ebfa4685e",
              datePosted: 1626051202620,
              posts: "",
              likes: ["Smith", "Sebby", "Lily", "Josh"],
              unLikes: [],
              posterComment: "Good, south African dancers ",
              comments: [],
              postStyle: "text-theme-default",
              postImages: [
                {
                  imageUrl:
                    "https://player.vimeo.com/external/371813178.sd.mp4?s=d1230dd79cc887815b725c181c4af7a4419a6514&profile_id=139&oauth2_token_id=57447761",
                  imageId: "",
                },
              ],
              postVideos: {
                videoUrl:
                  "https://player.vimeo.com/external/371813178.sd.mp4?s=d1230dd79cc887815b725c181c4af7a4419a6514&profile_id=139&oauth2_token_id=57447761",
                videoId: "8eb120b1-e2ab-11eb-8a39-b39ebfa4685e",
                videoAutoplay: !1,
              },
            },
            "0cee6450-e32f-11eb-a03f-b542039adbaa": {
              userName: "Lily",
              userId: "df512cf0-db39-11eb-af32-47b0df65ae76",
              views: ["Lily", "Sebby", "Josh", "Liam", "Logan"],
              postId: "0cee6450-e32f-11eb-a03f-b542039adbaa",
              datePosted: 1626107678485,
              posts:
                "Good morning Guys, who will join me for a morning stretch exercise 🦾",
              likes: ["Sebby", "Josh", "Logan"],
              unLikes: [],
              posterComment: "",
              comments: {
                "3d053960-e330-11eb-97fc-8d90948c2e0c": {
                  userName: "Sebby",
                  userId: "5cba0c50-d9ca-11eb-ba8c-e9a262a433df",
                  comment: "I am in 🖐",
                  dateCommented: 1626108188663,
                  commentId: "3d053960-e330-11eb-97fc-8d90948c2e0c",
                  likes: ["Josh"],
                  postId: "0cee6450-e32f-11eb-a03f-b542039adbaa",
                  unLikes: [],
                },
              },
              postStyle: "text-theme-default",
              postImages: [{ imageUrl: "", imageId: "" }],
              postVideos: {
                videoUrl:
                  "https://player.vimeo.com/external/403279369.sd.mp4?s=3bb6b5b9a228a15a1e3ec175c8c1ee78a8c876d2&profile_id=139&oauth2_token_id=57447761",
                videoId: "0cee6451-e32f-11eb-a03f-b542039adbaa",
                videoAutoplay: !1,
              },
            },
            "2a34c230-e333-11eb-97fc-8d90948c2e0c": {
              userName: "Logan",
              userId: "e8ff6e40-d9c9-11eb-ba8c-e9a262a433df",
              views: ["Logan", "Sebby", "Josh"],
              postId: "2a34c230-e333-11eb-97fc-8d90948c2e0c",
              datePosted: 1626109445587,
              posts: "",
              likes: [],
              unLikes: [],
              posterComment: "",
              comments: [],
              postStyle: "text-theme-default",
              postImages: [
                {
                  imageUrl: a("2f09"),
                  imageId: "2a34c231-e333-11eb-97fc-8d90948c2e0c",
                },
              ],
              postVideos: {
                videoUrl: a("2f09"),
                videoId: "",
                videoAutoplay: !1,
              },
            },
            "29166f00-e335-11eb-97fc-8d90948c2e0c": {
              userName: "Sebby",
              userId: "5cba0c50-d9ca-11eb-ba8c-e9a262a433df",
              views: ["Sebby", "Josh"],
              postId: "29166f00-e335-11eb-97fc-8d90948c2e0c",
              datePosted: 1626110302704,
              posts: "Winter Riding fun with Snowmobile 😎",
              likes: ["Sebby", "Josh"],
              unLikes: [],
              posterComment: "",
              comments: [],
              postStyle: "text-theme-default",
              postImages: [
                {
                  imageUrl:
                    "https://player.vimeo.com/external/490498309.sd.mp4?s=6a1ed8c9665defd9ce2b8030352c51cafd653c88&profile_id=139&oauth2_token_id=57447761",
                  imageId: "",
                },
              ],
              postVideos: {
                videoUrl:
                  "https://player.vimeo.com/external/490498309.sd.mp4?s=6a1ed8c9665defd9ce2b8030352c51cafd653c88&profile_id=139&oauth2_token_id=57447761",
                videoId: "29166f01-e335-11eb-97fc-8d90948c2e0c",
                videoAutoplay: !1,
              },
            },
            "92a3b200-e337-11eb-97fc-8d90948c2e0c": {
              userName: "Josh",
              userId: "89045af0-d9c9-11eb-ba8c-e9a262a433df",
              views: ["Josh"],
              postId: "92a3b200-e337-11eb-97fc-8d90948c2e0c",
              datePosted: 1626111338784,
              posts: "The party is on",
              likes: ["Josh"],
              unLikes: [],
              posterComment: "",
              comments: [],
              postStyle: "text-theme-default",
              postImages: [
                {
                  imageUrl:
                    "https://player.vimeo.com/external/324296539.sd.mp4?s=806775db4de3140951b439ef4b2a69c8bd91fa0f&profile_id=164&oauth2_token_id=57447761",
                  imageId: "",
                },
              ],
              postVideos: {
                videoUrl:
                  "https://player.vimeo.com/external/324296539.sd.mp4?s=806775db4de3140951b439ef4b2a69c8bd91fa0f&profile_id=164&oauth2_token_id=57447761",
                videoId: "92a3b201-e337-11eb-97fc-8d90948c2e0c",
                videoAutoplay: !1,
              },
            },
            "9b687760-dc19-11eb-9e4e-33a1151joshc9e": {
              userName: "Josh",
              userId: "89045af0-d9c9-11eb-ba8c-e9a262a433df",
              views: ["Nova"],
              postId: "9b687760-dc19-11eb-9e4e-33a1151joshc9e",
              datePosted: 1626365437851,
              posts: "I am obssesed with @Lavbbe dance",
              likes: [],
              unLikes: [],
              posterComment: "",
              comments: [],
              postStyle: "text-theme-default",
              postImages: [{ imageUrl: "", imageId: "" }],
              postVideos: {
                videoUrl: a("0d82"),
                videoId: "33a1151joshc9e",
                videoAutoplay: !1,
              },
            },
            "9b687760-dc19-11eb-9e4e-33a1151adac9e": {
              userName: "Ada",
              userId: "a289cb20-d9cb-11eb-ba8c-e9a262a433df",
              views: ["Nova"],
              postId: "9b687760-dc19-11eb-9e4e-33a1151adac9e",
              datePosted: 1626365437851,
              posts: "Thats my girl @a.kay_xx",
              likes: [],
              unLikes: [],
              posterComment: "",
              comments: [],
              postStyle: "text-theme-default",
              postImages: [{ imageUrl: "", imageId: "" }],
              postVideos: {
                videoUrl: a("0a8f"),
                videoId: "5a289cb20-d9cb-11eb5556",
                videoAutoplay: !1,
              },
            },
            "9b687760-dc19-11eb-9e4e-33a1151d5ac9e": {
              userName: "Ivy",
              userId: "5c8ef170-db3a-11eb-af32-47b0df65ae76",
              views: ["Nova"],
              postId: "9b687760-dc19-11eb-9e4e-33a1151d5ac9e",
              datePosted: 1626343931995,
              posts: "She is the best Man of the Occasion 💖💖  @imacelebbb",
              likes: ["Nova"],
              unLikes: [],
              posterComment: "",
              comments: [],
              postStyle: "text-theme-default",
              postImages: [{ imageUrl: "", imageId: "" }],
              postVideos: {
                videoUrl: a("de6a"),
                videoId: "554e-33a1151adac9e",
                videoAutoplay: !1,
              },
            },
          },
        },
        mutations: {
          handleLogin(e, t) {
            (e.users[t.userName].status = t.status),
              (e.userData = e.users[t.userName]);
          },
          updateUserData(e, t) {
            const a = Object.keys(t)[0];
            e.userData = "Guest" === a ? t[a] : e.users[a];
          },
          handleAddAccount(e, t) {
            const a = Object.keys(t)[0];
            (e.user = t),
              (e.users = { ...e.users, ...e.user }),
              (e.userData = t[a]),
              (e.allUsers = {
                ...e.allUsers,
                [a]: { userName: a, requestStatus: "Add Friend", requests: [] },
              });
          },
          handlePublishPost(e, t) {
            Object.keys(t)[0];
            e.newsFeed = { ...e.newsFeed, ...t };
          },
          handlePosterComment(e, t) {
            const a = Object.keys(t)[0];
            (e.newsFeed[t[a].postId].comments = {
              ...e.newsFeed[t[a].postId].comments,
              ...t,
            }),
              (e.newsFeed[t[a].postId].posterComment = "");
          },
          handleLikes(e, t) {
            switch (t.condition) {
              case "postLikes":
                const a = e.newsFeed[t.postId].likes.indexOf(t.userName),
                  i = e.newsFeed[t.postId].unLikes.indexOf(t.userName);
                "incrementPostLikes" === t.params
                  ? e.newsFeed[t.postId].likes.indexOf(t.userName) < 0
                    ? (e.newsFeed[t.postId].likes.push(t.userName),
                      e.newsFeed[t.postId].unLikes.splice(i, 1))
                    : e.newsFeed[t.postId].likes.splice(a, 1)
                  : e.newsFeed[t.postId].unLikes.indexOf(t.userName) < 0
                  ? (e.newsFeed[t.postId].unLikes.push(t.userName),
                    e.newsFeed[t.postId].likes.splice(a, 1))
                  : e.newsFeed[t.postId].unLikes.splice(i, 1);
                break;
              case "commentLikes":
                const s = e.newsFeed[t.postId].comments[
                    t.commentId
                  ].likes.indexOf(t.userName),
                  o = e.newsFeed[t.postId].comments[
                    t.commentId
                  ].unLikes.indexOf(t.userName);
                "incrementCommentLikes" === t.params
                  ? e.newsFeed[t.postId].comments[t.commentId].likes.indexOf(
                      t.userName
                    ) < 0
                    ? (e.newsFeed[t.postId].comments[t.commentId].likes.push(
                        t.userName
                      ),
                      e.newsFeed[t.postId].comments[t.commentId].unLikes.splice(
                        o,
                        1
                      ))
                    : e.newsFeed[t.postId].comments[t.commentId].likes.splice(
                        s,
                        1
                      )
                  : e.newsFeed[t.postId].comments[t.commentId].unLikes.indexOf(
                      t.userName
                    ) < 0
                  ? (e.newsFeed[t.postId].comments[t.commentId].unLikes.push(
                      t.userName
                    ),
                    e.newsFeed[t.postId].comments[t.commentId].likes.splice(
                      s,
                      1
                    ))
                  : e.newsFeed[t.postId].comments[t.commentId].unLikes.splice(
                      o,
                      1
                    );
                break;
              default:
                break;
            }
          },
          handleSubmitMessage(e, t) {
            const a = t[Object.keys(t)[0]].userName,
              i = t[Object.keys(t)[0]].friendMessaged,
              s = {
                userName: a,
                messageId: t[Object.keys(t)[0]].messageId,
                message: t[Object.keys(t)[0]].message,
                messageDate: t[Object.keys(t)[0]].messageDate,
                messageStatus: t[Object.keys(t)[0]].messageStatus,
              };
            (e.users[a].messages[i] = {
              ...e.users[a].messages[i],
              [s.messageId]: { ...s },
            }),
              (e.users[i].messages[a] = {
                ...e.users[i].messages[a],
                [s.messageId]: { ...s },
              });
          },
          handleDeleteMessage(e, t) {
            delete e.users[t.userName].messages[t.friendMessaged][t.messageId];
          },
          handleMessageStatus(e, t) {
            for (const a in e.users)
              for (const i in e.users[a].messages)
                if (i === t.userName && a !== t.userName)
                  for (const s in e.users[a].messages[i])
                    e.users[a].messages[i][s].userName !== t.userName &&
                      "sent" === e.users[a].messages[i][s].messageStatus &&
                      ((e.users[a].messages[i][s].messageStatus = "received"),
                      (e.users[t.userName].messages[a][s].messageStatus =
                        "received"));
          },
          handleMessageViewStatus(e, t) {
            for (const a in e.users[t.friendMessaged].messages[t.userName])
              e.users[t.friendMessaged].messages[t.userName][a].userName ===
                t.friendMessaged &&
                ((e.users[t.friendMessaged].messages[t.userName][
                  a
                ].messageStatus = "Read"),
                (e.users[t.userName].messages[t.friendMessaged][
                  a
                ].messageStatus = "Read"));
            for (const a in e.users[t.userName].messageStatus)
              e.users[t.userName].messageStatus[a].showMessage = !1;
            if ("Read" === t.messageViewStatus) {
              for (const a in e.users[t.userName].messageStatus)
                e.users[t.userName].messageStatus[a].messageOnScreen =
                  t.messageOnScreen;
              e.users[t.userName].messageStatus = {
                ...e.users[t.userName].messageStatus,
                [t.friendMessaged]: {
                  friendMessaged: t.friendMessaged,
                  userName: t.userName,
                  messageOnScreen: t.messageOnScreen,
                  messageViewStatus: t.messageViewStatus,
                  messageDate: Date.now(),
                  showMessage: !0,
                },
              };
            } else
              (e.users[t.friendMessaged].messageStatus = {
                ...e.users[t.friendMessaged].messageStatus,
                [t.userName]: {
                  friendMessaged: t.userName,
                  userName: t.userName,
                  messageOnScreen: !1,
                  messageViewStatus: t.messageViewStatus,
                  messageDate: Date.now(),
                  showMessage: !0,
                },
              }),
                (e.users[t.userName].messageStatus = {
                  ...e.users[t.userName].messageStatus,
                  [t.friendMessaged]: {
                    friendMessaged: t.friendMessaged,
                    userName: t.userName,
                    messageOnScreen: !0,
                    messageViewStatus: "read",
                    messageDate: Date.now(),
                    showMessage: !0,
                  },
                });
          },
          handleFriendRequest(e, t) {
            "Request Sent" === t.requestStatus
              ? (e.allUsers[t.friendUserName].requests = [
                  ...e.allUsers[t.friendUserName].requests,
                  { userName: t.userName },
                ])
              : ((e.users[t.userName].friends = [
                  ...e.users[t.userName].friends,
                  { userName: t.friendUserName },
                ]),
                (e.users[t.friendUserName].friends = [
                  ...e.users[t.friendUserName].friends,
                  { userName: t.userName },
                ]),
                (e.allUsers[t.friendUserName].requests = e.allUsers[
                  t.friendUserName
                ].requests.filter((e) => e.userName !== t.userName)),
                (e.allUsers[t.userName].requests = e.allUsers[
                  t.userName
                ].requests.filter((e) => e.userName !== t.friendUserName)));
          },
          handleFollow(e, t) {
            return "follow" === t.followState
              ? ((e.users[t.userName].following = [
                  ...e.users[t.userName].following,
                  { userName: t.friendUserName },
                ]),
                (e.users[t.friendUserName].followers = [
                  ...e.users[t.friendUserName].followers,
                  { userName: t.userName },
                ]))
              : ((e.users[t.userName].following = e.users[
                  t.userName
                ].following.filter((e) => e.userName !== t.friendUserName)),
                (e.users[t.friendUserName].followers = e.users[
                  t.friendUserName
                ].followers.filter((e) => e.userName !== t.userName)));
          },
          handleCancelFriendRequest(e, t) {
            switch (t.params) {
              case "cancelFriendRequest":
                (e.allUsers[t.userName].requests = e.allUsers[
                  t.userName
                ].requests.filter((e) => e.userName !== t.friendUserName)),
                  (e.allUsers[t.userName].requestStatus = "Add Friend");
                break;
              case "unFriend":
                (e.users[t.userName].friends = e.users[
                  t.userName
                ].friends.filter((e) => e.userName !== t.friendUserName)),
                  (e.users[t.friendUserName].friends = e.users[
                    t.friendUserName
                  ].friends.filter((e) => e.userName !== t.userName)),
                  (e.allUsers[t.friendUserName].requestStatus = "Add Friend");
                break;
              default:
                break;
            }
          },
          handleNotifications(e, t) {
            switch (t.notificationType) {
              case "post":
                e.users[t.userName].friends.length &&
                  e.users[t.userName].friends.forEach((a) => {
                    e.users[a.userName].notifications = {
                      ...e.users[a.userName].notifications,
                      [t.notificationId]: { ...t },
                    };
                  });
                break;
              case "friend request":
                e.users[t.friendUserName].notifications = {
                  ...e.users[t.friendUserName].notifications,
                  [t.notificationId]: { ...t },
                };
                break;
              case "message":
                e.users[t.friendUserName].notifications = {
                  ...e.users[t.friendUserName].notifications,
                  [t.notificationId]: { ...t },
                };
                break;
              case "likes":
                (e.users[t.posterUserName].notifications = {
                  ...e.users[t.posterUserName].notifications,
                  [t.notificationId]: { ...t },
                }),
                  e.users[t.userName].friends.forEach((a) => {
                    e.users[a.userName].notifications = {
                      ...e.users[a.userName].notifications,
                      [t.notificationId]: { ...t },
                    };
                  });
                break;
              case "likedComment":
                (e.users[t.posterUserName].notifications = {
                  ...e.users[t.posterUserName].notifications,
                  [t.notificationId]: { ...t },
                }),
                  e.users[t.userName].friends.forEach((a) => {
                    e.users[a.userName].notifications = {
                      ...e.users[a.userName].notifications,
                      [t.notificationId]: { ...t },
                    };
                  });
                break;
              case "comment":
                t.posterUserName !== t.posterUserName &&
                  (e.users[t.posterUserName].notifications = {
                    ...e.users[t.posterUserName].notifications,
                    [t.notificationId]: { ...t },
                  }),
                  e.users[t.userName].friends.forEach((a) => {
                    e.users[a.userName].notifications = {
                      ...e.users[a.userName].notifications,
                      [t.notificationId]: { ...t },
                    };
                  });
                break;
              case "follow":
                e.users[t.friendUserName].notifications = {
                  ...e.users[t.friendUserName].notifications,
                  [t.notificationId]: { ...t },
                };
                break;
              case "Accepted Friend Request":
                e.users[t.friendUserName].notifications = {
                  ...e.users[t.friendUserName].notifications,
                  [t.notificationId]: { ...t },
                };
                break;
              default:
                break;
            }
          },
          handleNotificationUpdate(e, t) {
            for (const a in e.users[t.userName].notifications)
              e.users[t.userName].notifications[a].notificationType ===
                t.notificationType &&
                (e.users[t.userName].notifications[a].notificationStatus =
                  "Read");
          },
          handleActivities(e, t) {
            e.users[t.userName].activities = {
              ...e.users[t.userName].activities,
              [t.activityId]: { ...t },
            };
          },
          handlePostViews(e, t) {
            e.newsFeed[t.postId].views.includes(t.userName) ||
              (e.newsFeed[t.postId].views = [
                ...e.newsFeed[t.postId].views,
                t.userName,
              ]);
          },
          handleDisplayFunctions(e, t) {
            switch (t.params) {
              case "collapseNav":
                e.displayFunctions.navCollapsed = t.navCollapsed;
                break;
              case "loginPageUnMount":
                e.displayFunctions.loginPageUnmounted = t.loginPageUnmounted;
                break;
              case "displayClickedImage":
                e.displayFunctions.displayClickedImage = t.displayClickedImage;
                break;
              case "activeLink":
                e.displayFunctions.activeLink = t.activeLink;
                break;
              case "displayMessage":
                (e.displayFunctions.displayMessage.userName = t.userName),
                  console.log(t.userName);
                break;
              case "footerOnScreen":
                e.displayFunctions.footerOnScreen = t.footerOnScreen;
                break;
              case "photosCompOnScreen":
                e.displayFunctions.photosCompOnScreen = t.photosCompOnScreen;
                break;
              case "componentMounted":
                e.displayFunctions.componentMounted = t.componentMounted;
                break;
              case "newAccount":
                e.displayFunctions.newAccount = t.newAccount;
                break;
              case "wihteBackgroundLogin":
                e.displayFunctions.wihteBackgroundLogin =
                  t.wihteBackgroundLogin;
                break;
              default:
                break;
            }
          },
          handleAccountUpdate(e, t) {
            switch (t.params) {
              case "updateProfileImage":
                e.users[t.userName].userProfileImage = t.userProfileImage;
                break;
              case "updateCoverImage":
                e.users[t.userName].userCoverImage = t.userCoverImage;
                break;
              case "otherDetails":
                e.users[t.userName] = {
                  ...e.users[t.userName],
                  ...t.userDetails,
                };
                break;
              case "updateUserName":
                e.users = {
                  ...e.users,
                  [t.userDetails.userName]: { ...t.userDetails },
                };
                for (let a in e.users) {
                  for (let i in e.users[a].messageStatus)
                    e.users[a].messageStatus[i].userName === t.userName &&
                      (e.users[a].messageStatus[i].userName =
                        t.userDetails.userName),
                      i === t.userName &&
                        ((e.users[a].messageStatus[i].friendMessaged =
                          t.userDetails.userName),
                        (e.users[a].messageStatus = {
                          ...e.users[a].messageStatus,
                          [t.userDetails.userName]: {
                            ...e.users[a].messageStatus[i],
                          },
                        }),
                        delete e.users[a].messageStatus[i]);
                  for (let i in e.users[a].messages)
                    if (i === t.userName) {
                      for (let s in e.users[a].messages[i])
                        e.users[a].messages[i][s].userName === t.userName &&
                          (e.users[a].messages[i][s].userName =
                            t.userDetails.userName);
                      (e.users[a].messages = {
                        ...e.users[a].messages,
                        [t.userDetails.userName]: { ...e.users[a].messages[i] },
                      }),
                        delete e.users[a].messages[i];
                    }
                  e.users[a].friends.forEach((e) => {
                    e.userName === t.userName &&
                      (e.userName = t.userDetails.userName);
                  }),
                    e.users[a].followers.forEach((e) => {
                      e.userName === t.userName &&
                        (e.userName = t.userDetails.userName);
                    }),
                    e.users[a].following.forEach((e) => {
                      e.userName === t.userName &&
                        (e.userName = t.userDetails.userName);
                    });
                }
                for (let a in e.allUsers)
                  e.allUsers[a].userName === t.userName &&
                    (e.allUsers[a].userName = t.userDetails.userName),
                    e.allUsers[a].requests.forEach((e) => {
                      e.userName === t.userName &&
                        (e.userName = t.userDetails.userName);
                    }),
                    a === t.userName &&
                      ((e.allUsers = {
                        ...e.allUsers,
                        [t.userDetails.userName]: { ...e.allUsers[a] },
                      }),
                      delete e.allUsers[a]);
                for (let a in e.newsFeed) {
                  e.newsFeed[a].userName === t.userName &&
                    (e.newsFeed[a].userName = t.userDetails.userName);
                  for (let i in e.newsFeed[a].comments)
                    e.newsFeed[a].comments[i].userName === t.userName &&
                      (e.newsFeed[a].comments[i].userName =
                        t.userDetails.userName);
                }
                (e.userData = e.users[t.userDetails.userName]),
                  setTimeout(() => {
                    delete e.users[t.userName];
                  }, 1e3);
                break;
              default:
                break;
            }
          },
          handleAddImageVideo(e, t) {
            "image" === t.fileType
              ? (e.users[t.userName].photos = [
                  ...e.users[t.userName].photos,
                  { imageUrl: t.imageUrl, imageId: t.imageId },
                ])
              : (e.users[t.userName].videos = [
                  ...e.users[t.userName].videos,
                  {
                    videoUrl: t.videoUrl,
                    videoId: t.videoId,
                    videoAutoplay: !1,
                  },
                ]);
          },
          handleUpdateLocalStorage(e, t) {
            switch (t.params) {
              case "loadData":
                localStorage.state = JSON.stringify(e);
                break;
              case "updateData":
                localStorage.state = JSON.stringify(e);
                break;
              case "retrieveData":
                let t = JSON.parse(localStorage.state);
                for (let a in e) "userData" !== a && (e[a] = t[a]);
                e.displayFunctions = {
                  navCollapsed: !1,
                  newAccount: !1,
                  loginPageUnmounted: !1,
                  displayClickedImage: void 0,
                  activeLink: "Home",
                  displayMessage: { userName: "" },
                  footerOnScreen: !1,
                  photosCompOnScreen: !1,
                  componentMounted: "",
                  suspendMessageUpdate: !1,
                  pageReLoad: !1,
                  wihteBackgroundLogin: !0,
                };
                break;
              default:
                break;
            }
          },
        },
        actions: {
          handleAddAccount(e, t) {
            e.commit("handleAddAccount", t);
          },
          handlePublishPost(e, t) {
            e.commit("handlePublishPost", t);
          },
          handleLikes(e, t) {
            e.commit("handleLikes", t);
          },
          handlePosterComment(e, t) {
            e.commit("handlePosterComment", t);
          },
          handleLogin(e, t) {
            e.commit("handleLogin", t);
          },
          updateUserData(e, t) {
            e.commit("updateUserData", t);
          },
          handleSubmitMessage(e, t) {
            e.commit("handleSubmitMessage", t);
          },
          handleDeleteMessage(e, t) {
            e.commit("handleDeleteMessage", t);
          },
          handleMessageViewStatus(e, t) {
            e.commit("handleMessageViewStatus", t);
          },
          handleMessageStatus(e, t) {
            e.commit("handleMessageStatus", t);
          },
          handleFriendRequest(e, t) {
            e.commit("handleFriendRequest", t);
          },
          handleCancelFriendRequest(e, t) {
            e.commit("handleCancelFriendRequest", t);
          },
          handleNotifications(e, t) {
            e.commit("handleNotifications", t);
          },
          handleNotificationUpdate(e, t) {
            e.commit("handleNotificationUpdate", t);
          },
          handleFollow(e, t) {
            e.commit("handleFollow", t);
          },
          handleActivities(e, t) {
            e.commit("handleActivities", t);
          },
          handlePostViews(e, t) {
            e.commit("handlePostViews", t);
          },
          handleDisplayFunctions(e, t) {
            e.commit("handleDisplayFunctions", t);
          },
          handleAccountUpdate(e, t) {
            e.commit("handleAccountUpdate", t);
          },
          handleAddImageVideo(e, t) {
            e.commit("handleAddImageVideo", t);
          },
          handleUpdateChatList(e, t) {
            e.commit("handleUpdateChatList", t);
          },
          handleUpdateLocalStorage(e, t) {
            e.commit("handleUpdateLocalStorage", t);
          },
        },
        modules: {},
      }),
      gr = (a("a347"), a("f2d1")),
      kr = a("ecee"),
      Ir = a("c074"),
      Dr = a("ad3d");
    a("f9e3"), a("2dd8");
    kr["c"].add(
      Ir["b"],
      Ir["s"],
      Ir["x"],
      Ir["y"],
      Ir["k"],
      Ir["c"],
      Ir["C"],
      Ir["D"],
      Ir["n"],
      Ir["r"],
      Ir["w"],
      Ir["v"],
      Ir["t"],
      Ir["p"],
      Ir["u"],
      Ir["j"],
      Ir["o"],
      Ir["G"],
      Ir["A"],
      Ir["z"],
      Ir["i"],
      Ir["d"],
      Ir["e"],
      Ir["g"],
      Ir["f"],
      Ir["E"],
      Ir["F"],
      Ir["q"],
      Ir["a"],
      Ir["h"],
      Ir["B"],
      Ir["m"],
      Ir["b"],
      gr["a"],
      gr["e"],
      gr["b"],
      gr["c"],
      gr["d"],
      Ir["l"]
    ),
      Object(i["c"])(is)
        .component("font-awesome-icon", Dr["a"])
        .use(jr)
        .use(vr)
        .mount("#app");
  },
  "57a6": function (e, t, a) {
    e.exports = a.p + "img/ada-post1.cc46dbc5.jpeg";
  },
  6116: function (e, t, a) {
    e.exports = a.p + "img/smith-profilePix.95deb475.jpg";
  },
  "67e5": function (e, t, a) {
    e.exports = a.p + "media/pristine-609.ea1aaabc.ogg";
  },
  "6a32": function (e, t, a) {
    e.exports = a.p + "img/chloe-profilepix.ce2b2762.jpg";
  },
  "6bc9": function (e, t, a) {
    "use strict";
    a("9736");
  },
  7037: function (e, t, a) {
    e.exports = a.p + "img/carter-profilePix.447216f2.jpg";
  },
  "7efb": function (e, t, a) {
    e.exports = a.p + "img/ivy-profilepix.22a80167.jpg";
  },
  8919: function (e, t, a) {
    e.exports = a.p + "img/mia-post1.3a60cc76.jpeg";
  },
  "8c34": function (e, t, a) {
    e.exports = a.p + "img/defaultBg.2793204e.jpg";
  },
  9418: function (e, t, a) {
    e.exports = a.p + "img/nova-profilePix.accce168.jpg";
  },
  9736: function (e, t, a) {},
  a347: function (e, t, a) {},
  a95b: function (e, t, a) {
    e.exports = a.p + "img/lily-profilePix.97db672d.jpg";
  },
  b3e7: function (e, t, a) {
    e.exports = a.p + "img/sebby-profilePix.a45ed011.jpg";
  },
  b85a: function (e, t, a) {
    e.exports = a.p + "img/ava-post1.a64b025e.jpg";
  },
  b954: function (e, t, a) {
    e.exports = a.p + "img/ruby-post.5ddd9352.jpeg";
  },
  bb51: function (e, t, a) {
    "use strict";
    a.r(t);
    var i = a("7a23");
    const s = { class: "newsfeed-container", id: "newsfeed-container" },
      o = { class: "container-sidebar-one" },
      n = Object(i["h"])("span", null, " Messages ", -1),
      c = Object(i["h"])("span", null, "Friends ", -1),
      d = Object(i["h"])("span", null, " Following ", -1),
      r = Object(i["h"])("span", null, "Followers ", -1),
      b = { class: "posts-container" },
      f = { class: "form-field mb-5", ref: "formField" },
      l = { key: 0, class: "username-header" },
      u = Object(i["h"])("br", null, null, -1),
      m = { key: 0, class: "filepreview" },
      h = { key: 1, class: "post-Video stackItem" },
      p = { width: "500", heigth: "100", controls: "" },
      N = Object(i["g"])(" Your browser does not support HTML video. "),
      y = { class: "textarea-icons", ref: "textareaIcons" },
      v = { class: "edit-container", ref: "editContainer" },
      O = { class: "edit-icon-container" },
      j = { ref: "chevronRight", style: { display: "none" } },
      g = {
        class: "text-theme-container themes-icons-container",
        ref: "themeContainer",
      },
      k = Object(i["h"])(
        "button",
        { type: "submit", class: "btn " },
        "Post",
        -1
      ),
      I = { class: "userName-Timeposted" },
      D = { class: "username-header" },
      S = { class: "comment" },
      U = Object(i["g"])(" Your browser does not support HTML video. "),
      C = { class: "post-comments" },
      w = Object(i["h"])("span", { class: "text-success " }, "Likes", -1),
      R = Object(i["g"])("   "),
      L = Object(i["h"])(
        "span",
        { class: "text-danger font-weight-bold" },
        " unlikes",
        -1
      ),
      T = Object(i["g"])("   "),
      A = { class: "m-2  post-views" },
      q = Object(i["g"])(" Views   "),
      x = { class: "m-2  post-comments-num" },
      F = Object(i["h"])("hr", null, null, -1),
      M = Object(i["h"])(
        "h6",
        { class: "m-3 ml-5 font-weight-bold " },
        "Comments",
        -1
      ),
      P = { class: "userName-Timeposted" },
      E = { class: "username-header" },
      $ = { class: "comment" },
      z = { class: "ml-5 comments-text" },
      V = { class: "comment-like-container" },
      B = Object(i["h"])("span", { class: "text-success " }, "Likes", -1),
      G = Object(i["g"])("   "),
      _ = Object(i["h"])("span", { class: "text-danger" }, "Unikes", -1),
      J = Object(i["g"])("   "),
      H = { class: "comment-input-field" },
      Y = Object(i["h"])(
        "button",
        { type: "submit", class: "btn btn-info" },
        "Comment",
        -1
      ),
      Z = Object(i["h"])("hr", null, null, -1),
      W = { class: "container-sidebar-two" },
      K = { class: "sidebar-list" },
      Q = Object(i["h"])(
        "div",
        { class: "sidebar-list-header" },
        [Object(i["h"])("h5", null, "Online")],
        -1
      ),
      X = { class: "username-header" },
      ee = Object(i["h"])("button", { class: "btn btn-success" }, "Chat", -1),
      te = { class: "restrict-Guest-contents" },
      ae = { class: "mt-3" },
      ie = Object(i["g"])("Login Or Create an Account to Have Access to this "),
      se = Object(i["h"])(
        "span",
        { style: { "white-space": "nowrap" } },
        "Link !",
        -1
      ),
      oe = Object(i["h"])("br", null, null, -1),
      ne = Object(i["h"])("br", null, null, -1),
      ce = Object(i["g"])("Sign In ");
    function de(e, t, a, de, re, be) {
      const fe = Object(i["x"])("font-awesome-icon");
      return (
        Object(i["q"])(),
        Object(i["d"])(
          i["a"],
          null,
          [
            Object(i["h"])("div", s, [
              Object(i["h"])("div", o, [
                be.handleFooterOnScreen
                  ? (Object(i["q"])(),
                    Object(i["d"])(
                      "div",
                      {
                        key: 0,
                        class: "sidebar-list",
                        style: be.handleDisplayFunctions(),
                      },
                      [
                        Object(i["h"])("ul", null, [
                          Object(i["h"])(
                            "li",
                            {
                              onClick:
                                t[1] ||
                                (t[1] = (e) =>
                                  be.handleClickedLinks("Messages")),
                            },
                            [
                              n,
                              Object(i["h"])(fe, {
                                class: "ml-2",
                                icon: ["fas", "envelope"],
                              }),
                            ]
                          ),
                          Object(i["h"])(
                            "li",
                            {
                              onClick:
                                t[2] ||
                                (t[2] = (e) =>
                                  be.handleClickedLinks("Friends")),
                            },
                            [
                              c,
                              Object(i["h"])(fe, {
                                class: "ml-2",
                                icon: ["fas", "user-friends"],
                              }),
                            ]
                          ),
                          Object(i["h"])(
                            "li",
                            {
                              onClick:
                                t[3] ||
                                (t[3] = (e) =>
                                  be.handleClickedLinks("Friends")),
                            },
                            [
                              d,
                              Object(i["h"])(fe, {
                                class: "ml-2",
                                icon: ["fas", "users"],
                              }),
                            ]
                          ),
                          Object(i["h"])(
                            "li",
                            {
                              onClick:
                                t[4] ||
                                (t[4] = (e) =>
                                  be.handleClickedLinks("Friends")),
                            },
                            [
                              r,
                              Object(i["h"])(fe, {
                                class: "ml-2",
                                icon: ["fas", "users"],
                              }),
                            ]
                          ),
                        ]),
                      ],
                      4
                    ))
                  : Object(i["e"])("", !0),
              ]),
              Object(i["h"])("div", b, [
                Object(i["h"])(
                  "div",
                  f,
                  [
                    Object(i["h"])("span", null, [
                      Object(i["h"])(
                        "img",
                        {
                          src: re.userData.userProfileImage,
                          class: "user-image-icon",
                          alt: "",
                        },
                        null,
                        8,
                        ["src"]
                      ),
                      re.showUserName
                        ? (Object(i["q"])(),
                          Object(i["d"])(
                            "span",
                            l,
                            "   " + Object(i["z"])(re.userData.userName),
                            1
                          ))
                        : Object(i["e"])("", !0),
                    ]),
                    Object(i["h"])(
                      "form",
                      {
                        onSubmit:
                          t[23] ||
                          (t[23] = Object(i["H"])(
                            (e) => be.handlePublishPost(),
                            ["prevent"]
                          )),
                        ref: "form",
                      },
                      [
                        Object(i["G"])(
                          Object(i["h"])(
                            "textarea",
                            {
                              name: "posttextarea",
                              "onUpdate:modelValue":
                                t[5] || (t[5] = (e) => (re.postTextArea = e)),
                              cols: "30",
                              rows: "3",
                              style: re.textAreaStyle,
                              class: re.postStyle,
                              placeholder: " Make a post",
                              onClick:
                                t[6] ||
                                (t[6] = (e) => be.handleMakePost("text")),
                              ref: "textArea",
                            },
                            null,
                            6
                          ),
                          [[i["C"], re.postTextArea]]
                        ),
                        u,
                        re.previewImage || re.previewVideo
                          ? (Object(i["q"])(),
                            Object(i["d"])("div", m, [
                              re.previewImage
                                ? (Object(i["q"])(),
                                  Object(i["d"])(
                                    "img",
                                    { key: 0, src: re.tempSource, alt: "" },
                                    null,
                                    8,
                                    ["src"]
                                  ))
                                : Object(i["e"])("", !0),
                              re.previewVideo && re.loadFileAddress
                                ? (Object(i["q"])(),
                                  Object(i["d"])("div", h, [
                                    Object(i["h"])("video", p, [
                                      Object(i["h"])(
                                        "source",
                                        {
                                          src: re.tempSource,
                                          type: "video/mp4",
                                        },
                                        null,
                                        8,
                                        ["src"]
                                      ),
                                      Object(i["h"])(
                                        "source",
                                        {
                                          src: re.tempSource,
                                          type: "video/ogg",
                                        },
                                        null,
                                        8,
                                        ["src"]
                                      ),
                                      N,
                                    ]),
                                  ]))
                                : Object(i["e"])("", !0),
                            ]))
                          : Object(i["e"])("", !0),
                        Object(i["G"])(
                          Object(i["h"])(
                            "input",
                            {
                              type: "file",
                              name: "fileUpload",
                              accept: "video/mp4",
                              ref: "filesUploadVideo",
                              onChange:
                                t[7] ||
                                (t[7] = (...e) =>
                                  be.localFiles && be.localFiles(...e)),
                            },
                            null,
                            544
                          ),
                          [[i["D"], !1]]
                        ),
                        Object(i["G"])(
                          Object(i["h"])(
                            "input",
                            {
                              type: "file",
                              name: "fileUpload",
                              accept: "image/png,image/jpeg",
                              ref: "filesUploadImages",
                              onChange:
                                t[8] ||
                                (t[8] = (...e) =>
                                  be.localFiles && be.localFiles(...e)),
                            },
                            null,
                            544
                          ),
                          [[i["D"], !1]]
                        ),
                        Object(i["h"])(
                          "div",
                          y,
                          [
                            Object(i["h"])(
                              "span",
                              v,
                              [
                                Object(i["h"])("span", O, [
                                  Object(i["h"])(
                                    fe,
                                    {
                                      icon: ["fas", "edit"],
                                      ref: "timelineIcon",
                                      onClick:
                                        t[9] ||
                                        (t[9] = (e) =>
                                          be.handleMakePost("text")),
                                    },
                                    null,
                                    512
                                  ),
                                  Object(i["h"])(
                                    "span",
                                    j,
                                    [
                                      Object(i["h"])(fe, {
                                        icon: ["fas", "chevron-right"],
                                        class: "chevron-right",
                                      }),
                                    ],
                                    512
                                  ),
                                ]),
                                Object(i["h"])(
                                  "span",
                                  g,
                                  [
                                    Object(i["h"])(
                                      "div",
                                      {
                                        onClick:
                                          t[10] ||
                                          (t[10] = (e) =>
                                            be.handleTheme(
                                              "text-theme-default"
                                            )),
                                        class: "text-theme text-theme-default ",
                                        style:
                                          be.handleThemeStyle(
                                            "text-theme-default"
                                          ),
                                      },
                                      null,
                                      4
                                    ),
                                    Object(i["h"])(
                                      "div",
                                      {
                                        onClick:
                                          t[11] ||
                                          (t[11] = (e) =>
                                            be.handleTheme("text-themeOne")),
                                        class: "text-theme text-themeOne",
                                        style:
                                          be.handleThemeStyle("text-themeOne"),
                                      },
                                      null,
                                      4
                                    ),
                                    Object(i["h"])(
                                      "div",
                                      {
                                        onClick:
                                          t[12] ||
                                          (t[12] = (e) =>
                                            be.handleTheme("text-themeTwo")),
                                        class: "text-theme text-themeTwo",
                                        style:
                                          be.handleThemeStyle("text-themeTwo"),
                                      },
                                      null,
                                      4
                                    ),
                                    Object(i["h"])(
                                      "div",
                                      {
                                        onClick:
                                          t[13] ||
                                          (t[13] = (e) =>
                                            be.handleTheme("text-themeThree")),
                                        class: "text-theme text-themeThree",
                                        style:
                                          be.handleThemeStyle(
                                            "text-themeThree"
                                          ),
                                      },
                                      null,
                                      4
                                    ),
                                    Object(i["h"])(
                                      "div",
                                      {
                                        onClick:
                                          t[14] ||
                                          (t[14] = (e) =>
                                            be.handleTheme("text-themeFour")),
                                        class: "text-theme text-themeFour",
                                        style:
                                          be.handleThemeStyle("text-themeFour"),
                                      },
                                      null,
                                      4
                                    ),
                                    Object(i["h"])(
                                      "div",
                                      {
                                        onClick:
                                          t[15] ||
                                          (t[15] = (e) =>
                                            be.handleTheme("text-themeFive")),
                                        class: "text-theme text-themeFive",
                                        style:
                                          be.handleThemeStyle("text-themeFive"),
                                      },
                                      null,
                                      4
                                    ),
                                    Object(i["h"])(
                                      "div",
                                      {
                                        onClick:
                                          t[16] ||
                                          (t[16] = (e) =>
                                            be.handleTheme("text-themeSix")),
                                        class: "text-theme text-themeSix",
                                        style:
                                          be.handleThemeStyle("text-themeSix"),
                                      },
                                      null,
                                      4
                                    ),
                                    Object(i["h"])(
                                      "div",
                                      {
                                        onClick:
                                          t[17] ||
                                          (t[17] = (e) =>
                                            be.handleTheme("text-themeSeven")),
                                        class: "text-theme text-themeSeven",
                                        style:
                                          be.handleThemeStyle(
                                            "text-themeSeven"
                                          ),
                                      },
                                      null,
                                      4
                                    ),
                                    Object(i["h"])(
                                      "div",
                                      {
                                        onClick:
                                          t[18] ||
                                          (t[18] = (e) =>
                                            be.handleTheme("text-themeEight")),
                                        class: "text-theme text-themeEight",
                                        style:
                                          be.handleThemeStyle(
                                            "text-themeEight"
                                          ),
                                      },
                                      null,
                                      4
                                    ),
                                    Object(i["h"])(
                                      "div",
                                      {
                                        onClick:
                                          t[19] ||
                                          (t[19] = (e) =>
                                            be.handleTheme("text-themeNine")),
                                        class: "text-theme text-themeNine",
                                        style:
                                          be.handleThemeStyle("text-themeNine"),
                                      },
                                      null,
                                      4
                                    ),
                                    Object(i["h"])(
                                      "div",
                                      {
                                        onClick:
                                          t[20] ||
                                          (t[20] = (e) =>
                                            be.handleTheme("text-themeTen")),
                                        class: "text-theme text-themeTen",
                                        style:
                                          be.handleThemeStyle("text-themeTen"),
                                      },
                                      null,
                                      4
                                    ),
                                  ],
                                  512
                                ),
                              ],
                              512
                            ),
                            Object(i["h"])("span", null, [
                              Object(i["h"])(fe, {
                                icon: ["fas", "image"],
                                onClick:
                                  t[21] ||
                                  (t[21] = (e) => be.handleMakePost("image")),
                              }),
                            ]),
                            Object(i["h"])("span", null, [
                              Object(i["h"])(
                                fe,
                                {
                                  icon: ["fas", "video"],
                                  ref: "timelineIcon",
                                  onClick:
                                    t[22] ||
                                    (t[22] = (e) => be.handleMakePost("video")),
                                },
                                null,
                                512
                              ),
                            ]),
                          ],
                          512
                        ),
                        k,
                      ],
                      544
                    ),
                  ],
                  512
                ),
                (Object(i["q"])(!0),
                Object(i["d"])(
                  i["a"],
                  null,
                  Object(i["w"])(
                    re.newsFeeds,
                    (t) => (
                      Object(i["q"])(),
                      Object(i["d"])(
                        "div",
                        { class: "post-container", key: t.postId + "key" },
                        [
                          Object(i["h"])(
                            "div",
                            {
                              class: "userImage",
                              onClick: (e) =>
                                be.showUserTimeline(t.userName, t.userId),
                              ref: t.postId,
                            },
                            [
                              Object(i["h"])(
                                "img",
                                {
                                  src: be.handleUserIcon(
                                    e.$store.state.users[t.userName]
                                      .userProfileImage
                                  ),
                                  class: "user-image-icon",
                                  alt: "",
                                },
                                null,
                                8,
                                ["src"]
                              ),
                              Object(i["h"])("span", I, [
                                Object(i["h"])(
                                  "span",
                                  D,
                                  Object(i["z"])(t.userName),
                                  1
                                ),
                                Object(i["h"])(
                                  "span",
                                  S,
                                  " Posted " +
                                    Object(i["z"])(be.showDate(t.datePosted)),
                                  1
                                ),
                              ]),
                            ],
                            8,
                            ["onClick"]
                          ),
                          t.posts.length
                            ? (Object(i["q"])(),
                              Object(i["d"])(
                                "div",
                                {
                                  key: 0,
                                  class: ["post rounded", t.postStyle],
                                  style: be.handlePostThemes(t.postStyle),
                                  ref: "post",
                                },
                                [
                                  Object(i["h"])(
                                    "span",
                                    null,
                                    Object(i["z"])(t.posts),
                                    1
                                  ),
                                ],
                                6
                              ))
                            : Object(i["e"])("", !0),
                          t.postImages.length
                            ? (Object(i["q"])(!0),
                              Object(i["d"])(
                                i["a"],
                                { key: 1 },
                                Object(i["w"])(
                                  t.postImages,
                                  (e) => (
                                    Object(i["q"])(),
                                    Object(i["d"])(
                                      "div",
                                      { class: "post-images", key: e.imageUrl },
                                      [
                                        Object(i["h"])(
                                          "img",
                                          { src: e.imageUrl, alt: "" },
                                          null,
                                          8,
                                          ["src"]
                                        ),
                                      ]
                                    )
                                  )
                                ),
                                128
                              ))
                            : Object(i["e"])("", !0),
                          t.postVideos.videoId
                            ? (Object(i["q"])(),
                              Object(i["d"])(
                                "div",
                                {
                                  key: 2,
                                  class: "post-Video",
                                  ref: t.postVideos.videoId,
                                },
                                [
                                  Object(i["h"])(
                                    "video",
                                    {
                                      width: "500",
                                      class: "video-desktopView",
                                      "max-height": "300",
                                      controls: "",
                                      autoplay: t.postVideos.videoAutoplay,
                                      id: t.postVideos.videoId,
                                    },
                                    [
                                      Object(i["h"])(
                                        "source",
                                        {
                                          src: t.postVideos.videoUrl,
                                          type: "video/mp4",
                                        },
                                        null,
                                        8,
                                        ["src"]
                                      ),
                                      Object(i["h"])(
                                        "source",
                                        {
                                          src: t.postVideos.videoUrl,
                                          type: "video/ogg",
                                        },
                                        null,
                                        8,
                                        ["src"]
                                      ),
                                      U,
                                    ],
                                    8,
                                    ["autoplay", "id"]
                                  ),
                                ],
                                512
                              ))
                            : Object(i["e"])("", !0),
                          Object(i["h"])("div", C, [
                            Object(i["h"])(
                              "span",
                              {
                                onClick: (e) =>
                                  be.handleLikes(
                                    "postLikes",
                                    "incrementPostLikes",
                                    t.postId,
                                    re.userData.userId,
                                    t.userName,
                                    t.postId
                                  ),
                                class: [
                                  "m-2  comment-like font-weight-bold",
                                  be.handleLikeStyle(t.likes, "likes"),
                                ],
                              },
                              [
                                w,
                                R,
                                Object(i["h"])(fe, {
                                  icon: ["fas", "thumbs-up"],
                                }),
                                Object(i["g"])(
                                  " " + Object(i["z"])(t.likes.length),
                                  1
                                ),
                              ],
                              10,
                              ["onClick"]
                            ),
                            Object(i["h"])(
                              "span",
                              {
                                onClick: (e) =>
                                  be.handleLikes(
                                    "postLikes",
                                    "decrementPostLikes",
                                    t.postId,
                                    re.userData.userId,
                                    t.userName,
                                    t.postId
                                  ),
                                class: [
                                  "m-2  comment-unlike  font-weight-bold",
                                  be.handleLikeStyle(t.unLikes, "unlikes"),
                                ],
                              },
                              [
                                L,
                                T,
                                Object(i["h"])(fe, {
                                  icon: ["fas", "thumbs-down"],
                                }),
                                Object(i["g"])(
                                  " " + Object(i["z"])(t.unLikes.length),
                                  1
                                ),
                              ],
                              10,
                              ["onClick"]
                            ),
                            Object(i["h"])("div", A, [
                              q,
                              Object(i["h"])(fe, { icon: ["fas", "eye"] }),
                              Object(i["g"])(
                                "   " + Object(i["z"])(t.views.length),
                                1
                              ),
                            ]),
                            Object(i["h"])(
                              "div",
                              x,
                              Object(i["z"])(Object.keys(t.comments).length) +
                                " comments ",
                              1
                            ),
                          ]),
                          F,
                          M,
                          (Object(i["q"])(!0),
                          Object(i["d"])(
                            i["a"],
                            null,
                            Object(i["w"])(
                              t.comments,
                              (a) => (
                                Object(i["q"])(),
                                Object(i["d"])(
                                  "div",
                                  { class: "comments", key: a.commentId },
                                  [
                                    Object(i["h"])(
                                      "div",
                                      {
                                        class: "userImage ml-5",
                                        onClick: (e) =>
                                          be.showUserTimeline(
                                            a.userName,
                                            a.userId
                                          ),
                                      },
                                      [
                                        Object(i["h"])(
                                          "img",
                                          {
                                            src: be.handleUserIcon(
                                              e.$store.state.users[a.userName]
                                                .userProfileImage
                                            ),
                                            class: "user-image-icon",
                                            alt: "",
                                          },
                                          null,
                                          8,
                                          ["src"]
                                        ),
                                        Object(i["h"])("span", P, [
                                          Object(i["h"])(
                                            "span",
                                            E,
                                            Object(i["z"])(a.userName),
                                            1
                                          ),
                                          Object(i["h"])(
                                            "span",
                                            $,
                                            " commented " +
                                              Object(i["z"])(
                                                be.showDate(a.dateCommented)
                                              ),
                                            1
                                          ),
                                        ]),
                                      ],
                                      8,
                                      ["onClick"]
                                    ),
                                    Object(i["h"])(
                                      "p",
                                      z,
                                      Object(i["z"])(a.comment),
                                      1
                                    ),
                                    Object(i["h"])("div", V, [
                                      Object(i["h"])(
                                        "span",
                                        {
                                          onClick: (e) =>
                                            be.handleLikes(
                                              "commentLikes",
                                              "incrementCommentLikes",
                                              t.postId,
                                              re.userData.userId,
                                              t.userName,
                                              a
                                            ),
                                          class: [
                                            "comment-mobile-view comment-like  font-weight-bold",
                                            be.handleLikeStyle(
                                              a.likes,
                                              "likes"
                                            ),
                                          ],
                                        },
                                        [
                                          B,
                                          G,
                                          Object(i["h"])(fe, {
                                            icon: ["fas", "thumbs-up"],
                                          }),
                                          Object(i["g"])(
                                            " " +
                                              Object(i["z"])(a.likes.length),
                                            1
                                          ),
                                        ],
                                        10,
                                        ["onClick"]
                                      ),
                                      Object(i["h"])(
                                        "span",
                                        {
                                          onClick: (e) =>
                                            be.handleLikes(
                                              "commentLikes",
                                              "decrementCommentLikes",
                                              t.postId,
                                              re.userData.userId,
                                              t.userName,
                                              a
                                            ),
                                          class: [
                                            "comment-mobile-view  comment-unlike font-weight-bold",
                                            be.handleLikeStyle(
                                              a.unLikes,
                                              "unlikes"
                                            ),
                                          ],
                                        },
                                        [
                                          _,
                                          J,
                                          Object(i["h"])(fe, {
                                            icon: ["fas", "thumbs-down"],
                                          }),
                                          Object(i["g"])(
                                            " " +
                                              Object(i["z"])(a.unLikes.length),
                                            1
                                          ),
                                        ],
                                        10,
                                        ["onClick"]
                                      ),
                                    ]),
                                  ]
                                )
                              )
                            ),
                            128
                          )),
                          Object(i["h"])("div", H, [
                            Object(i["h"])("span", null, [
                              Object(i["h"])(
                                "img",
                                {
                                  src: be.handleUserIcon(
                                    re.userData.userProfileImage
                                  ),
                                  class: "user-image-icon",
                                  alt: "",
                                },
                                null,
                                8,
                                ["src"]
                              ),
                            ]),
                            Object(i["h"])(
                              "form",
                              {
                                onSubmit: Object(i["H"])(
                                  (e) =>
                                    be.handlePosterComment(
                                      t.posterComment,
                                      t.postId,
                                      t.userName
                                    ),
                                  ["prevent"]
                                ),
                              },
                              [
                                Object(i["G"])(
                                  Object(i["h"])(
                                    "input",
                                    {
                                      type: "text",
                                      class: "input",
                                      placeholder: " Post a comment",
                                      "onUpdate:modelValue": (e) =>
                                        (t.posterComment = e),
                                    },
                                    null,
                                    8,
                                    ["onUpdate:modelValue"]
                                  ),
                                  [[i["C"], t.posterComment]]
                                ),
                                Y,
                              ],
                              40,
                              ["onSubmit"]
                            ),
                          ]),
                          Z,
                        ]
                      )
                    )
                  ),
                  128
                )),
              ]),
              Object(i["h"])("div", W, [
                Object(i["h"])("div", K, [
                  Q,
                  Object(i["h"])("ul", null, [
                    (Object(i["q"])(!0),
                    Object(i["d"])(
                      i["a"],
                      null,
                      Object(i["w"])(
                        be.allUsers,
                        (t) => (
                          Object(i["q"])(),
                          Object(i["d"])("div", { key: t.userName }, [
                            t.userName !== e.$store.state.userData.userName
                              ? (Object(i["q"])(),
                                Object(i["d"])(
                                  "li",
                                  {
                                    key: 0,
                                    onClick: (e) => be.showMessage(t.userName),
                                  },
                                  [
                                    Object(i["h"])(
                                      "img",
                                      {
                                        src: e.$store.state.users[t.userName]
                                          .userProfileImage,
                                        class: "user-image-icon",
                                        alt: "",
                                      },
                                      null,
                                      8,
                                      ["src"]
                                    ),
                                    Object(i["h"])(
                                      "span",
                                      X,
                                      Object(i["z"])(t.userName),
                                      1
                                    ),
                                    ee,
                                  ],
                                  8,
                                  ["onClick"]
                                ))
                              : Object(i["e"])("", !0),
                          ])
                        )
                      ),
                      128
                    )),
                  ]),
                ]),
              ]),
              re.restrictGuest
                ? (Object(i["q"])(),
                  Object(i["d"])(
                    "div",
                    {
                      key: 0,
                      class: "restrict-Guest",
                      onClick:
                        t[26] ||
                        (t[26] = (...e) =>
                          be.closeRestrictMessage &&
                          be.closeRestrictMessage(...e)),
                    },
                    [
                      Object(i["h"])("div", te, [
                        Object(i["h"])(
                          "div",
                          {
                            class: "close-restrict-message ",
                            onClick:
                              t[24] ||
                              (t[24] = (...e) =>
                                be.closeRestrictMessage &&
                                be.closeRestrictMessage(...e)),
                          },
                          [
                            Object(i["h"])(fe, {
                              icon: ["fas", "times-circle"],
                              class: "color-danger",
                            }),
                          ]
                        ),
                        Object(i["h"])("span", ae, [
                          ie,
                          se,
                          oe,
                          ne,
                          Object(i["h"])(
                            "span",
                            {
                              class: "signin-button btn btn-success h-1 mb-1",
                              onClick:
                                t[25] ||
                                (t[25] = (e) => be.handleLogin("login")),
                            },
                            [
                              ce,
                              Object(i["h"])(fe, {
                                icon: ["fas", "sign-in-alt"],
                              }),
                            ]
                          ),
                        ]),
                      ]),
                    ]
                  ))
                : Object(i["e"])("", !0),
            ]),
            re.PostBackDrop
              ? (Object(i["q"])(),
                Object(i["d"])(
                  "div",
                  {
                    key: 0,
                    class: "post-back-drop",
                    style: re.PostBackDropZIndex,
                    onClick:
                      t[27] ||
                      (t[27] = (...e) =>
                        be.handleCloseTextarea && be.handleCloseTextarea(...e)),
                  },
                  null,
                  4
                ))
              : Object(i["e"])("", !0),
          ],
          64
        )
      );
    }
    var re = a("fe61"),
      be = a("9612"),
      fe =
        (a("c1df"),
        {
          name: "Home",
          components: { LogInPage: re["default"] },
          props: ["comments"],
          data() {
            return {
              userData: {
                userName: "Guest",
                userId: "419",
                emailAddress: "419",
                firstName: "",
                lastName: "",
                address: "",
                emailAddress: "",
                postCode: "",
                country: "",
                city: "",
                aboutMe: "",
                password: "",
                messages: [],
                posts: [],
                followers: [],
                following: [],
                friends: [],
                likes: [],
                unLikes: [],
                posterComment: "",
                comments: { likes: [], unLikes: [] },
              },
              sidebarListOneMargin: "margin-top:2rem",
              newsFeed: {},
              postTextArea: "",
              displayFriends: !1,
              displayFollowers: !1,
              displayFollowing: !1,
              notifications: [],
              showUserName: !1,
              postStyle: "text-theme-default",
              tempSource: "",
              previewVideo: !1,
              previewImage: !1,
              loadFileAddress: !1,
              textAreaStyle: "",
              PostBackDrop: !1,
              PostBackDropZIndex: "z-index:600",
              restrictGuest: !1,
              videoAutoplay: !1,
              newsFeeds: [],
              controlsState: !1,
            };
          },
          mounted() {
            this.loadData(),
              window.scrollTo(0, 0),
              document.addEventListener("scroll", () =>
                this.onScroll(this.$refs)
              );
          },
          beforeUnmount() {
            this.loadData(),
              window.scrollTo(0, 0),
              document.removeEventListener("scroll", () =>
                this.onScroll(this.$refs)
              );
          },
          methods: {
            loadData() {
              (this.newsFeed = this.$store.state.newsFeed),
                (this.userData = this.$store.state.userData),
                ((this.previewVideo && this.tempSource.length) ||
                  (this.previewImage && this.tempSource.length)) &&
                  (this.loadFileAddress = !0);
              let e = [];
              for (const s in this.newsFeed) e.push(this.newsFeed[s]);
              let t = [...e].filter((e) =>
                  e.views.includes(this.userData.userName)
                ),
                a = [...e].filter(
                  (e) => !e.views.includes(this.userData.userName)
                ),
                i = a.concat(t);
              return a.length && t.length
                ? (this.newsFeeds = i)
                : (this.newsFeeds = i.reverse());
            },
            handlePostThemes(e) {
              return "text-theme-default" !== e
                ? "min-height:200px"
                : "heigth:auto";
            },
            handleLikeStyle(e, t) {
              switch (t) {
                case "likes":
                  return e.includes(this.userData.userName)
                    ? "text-success"
                    : "comment-like";
                case "unlikes":
                  return e.includes(this.userData.userName)
                    ? "text-danger"
                    : "comment-like";
                default:
                  break;
              }
            },
            localFiles(e) {
              this.tempSource = URL.createObjectURL(e.target.files[0]);
            },
            handleTheme(e) {
              (this.postStyle = e),
                (this.textAreaStyle =
                  "height:15rem;border-radius:2px;width:100%;");
            },
            handleThemeStyle(e) {
              return e === this.postStyle
                ? "padding:0px;border:2px solid #e83e8c"
                : this.previewImage || this.previewVideo
                ? "padding:0px;visibility:hidden"
                : "padding:0px";
            },
            handleMakePost(e) {
              if ("Guest" === this.userData.userName)
                return (this.restrictGuest = !0);
              (this.PostBackDrop = !0),
                "text" !== e &&
                  ("video" === e
                    ? ((this.previewVideo = !0),
                      (this.previewImage = !1),
                      (this.loadFileAddress = !1),
                      (this.tempSource = ""),
                      this.$refs.filesUploadVideo.click())
                    : ((this.previewImage = !0),
                      (this.previewVideo = !1),
                      this.$refs.filesUploadImages.click())),
                (this.$refs.formField.style =
                  "flex-flow:column;transition:all 0.4s;z-index:650"),
                this.$refs.textArea.classList.add("textarea-input"),
                (this.$refs.textareaIcons.style =
                  "flex-flow:column;font-size:1.5rem;transition:all 0.4s"),
                (this.$refs.themeContainer.style =
                  "display:flex;width:auto;transition:all 0.4s"),
                (this.$refs.editContainer.style = "display:flex"),
                (this.$refs.chevronRight.style = "display:inline"),
                (this.showUserName = !0);
            },
            handleCloseTextarea() {
              (this.PostBackDrop = !1),
                this.$refs.textArea.classList.remove("textarea-input"),
                (this.textAreaStyle = ""),
                (this.$refs.formField.style =
                  "flex-flow:row;height:auto;transition:all 0.4s"),
                (this.$refs.textareaIcons.style = "flex-flow:row;"),
                (this.$refs.themeContainer.style = "display:none;"),
                (this.$refs.editContainer.style = "display:inline"),
                (this.$refs.chevronRight.style = "display:none"),
                (this.postStyle = "text-theme-default"),
                (this.showUserName = !1),
                (this.previewVideo = !1),
                (this.previewImage = !1),
                (this.tempSource = "");
            },
            handleUserIcon(e) {
              return void 0 === e
                ? "https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/512x512/plain/user.png"
                : e;
            },
            showUserTimeline(e) {
              if ("Guest" === this.userData.userName)
                return (this.restrictGuest = !0);
              this.$router.push({
                name: "Timeline",
                params: { userName: e, Timeline: "Timeline" },
              });
            },
            handleClickedLinks(e) {
              return "Guest" === this.userData.userName
                ? (this.restrictGuest = !0)
                : "Friends" === e
                ? this.$router.push({
                    name: "Friends",
                    params: {
                      userName: this.userData.userName,
                      Timeline: "friends",
                    },
                  })
                : void this.$router.push({
                    name: "Messages",
                    params: { userName: this.userData.userName },
                  });
            },
            handlePublishPost() {
              if (
                (this.$store.dispatch("handleDisplayFunctions", {
                  suspendMessageUpdate: !0,
                  params: "suspendMessageUpdate",
                }),
                "Guest" === this.userData.userName)
              )
                return (this.restrictGuest = !0);
              let e = be["a"].v1(),
                t = "",
                a = "",
                i = this.tempSource,
                s = this.tempSource;
              this.previewVideo && this.tempSource
                ? ((t = be["a"].v1()), (s = ""))
                : ((i = ""), (a = be["a"].v1())),
                (this.postTextArea.length || this.tempSource.length) &&
                  (this.$store.dispatch("handlePublishPost", {
                    [e]: {
                      userName: this.userData.userName,
                      userId: this.userData.userId,
                      views: [],
                      postId: e,
                      datePosted: Date.now(),
                      posts: this.postTextArea,
                      likes: [],
                      unLikes: [],
                      posterComment: "",
                      comments: [],
                      postStyle: this.postStyle,
                      postImages: [{ imageUrl: s, imageId: a }],
                      postVideos: {
                        videoUrl: i,
                        videoId: t,
                        videoAutoplay: !1,
                      },
                    },
                  }),
                  this.tempSource.length && this.previewVideo
                    ? this.$store.dispatch("handleAddImageVideo", {
                        userName: this.userData.userName,
                        videoUrl: this.tempSource,
                        videoId: be["a"].v1(),
                        fileType: "video",
                      })
                    : this.tempSource.length &&
                      this.previewImage &&
                      this.$store.dispatch("handleAddImageVideo", {
                        userName: this.userData.userName,
                        imageUrl: this.tempSource,
                        imageId: be["a"].v1(),
                        fileType: "image",
                      }),
                  (this.postTextArea = ""),
                  this.handleCloseTextarea(),
                  this.loadData(),
                  (this.tempSource = "")),
                this.$store.dispatch("handleNotifications", {
                  userName: this.userData.userName,
                  notificationId: be["a"].v1(),
                  notificationType: "post",
                  notificationStatus: "unRead",
                  notificationDate: Date.now(),
                }),
                this.$store.dispatch("handleActivities", {
                  userName: this.userData.userName,
                  activity: "posted",
                  activityDate: Date.now(),
                  activityId: be["a"].v1(),
                });
            },
            handleLikes(e, t, a, i, s, o) {
              if ("Guest" === this.userData.userName)
                return (this.restrictGuest = !0);
              this.$store.dispatch("handleLikes", {
                condition: e,
                params: t,
                postId: a,
                userId: i,
                userName: this.userData.userName,
                commentId: o.commentId,
                dateLiked: Date.now(),
              }),
                this.$store.dispatch("handleNotifications", {
                  userName: this.userData.userName,
                  posterUserName: s,
                  notificationId: be["a"].v1(),
                  notificationType: "likes",
                  notificationStatus: "unRead",
                  notificationDate: Date.now(),
                }),
                "postLikes" === e && "incrementPostLikes" === t
                  ? (this.$store.dispatch("handleNotifications", {
                      userName: this.userData.userName,
                      posterUserName: s,
                      notificationId: be["a"].v1(),
                      notificationType: "likes",
                      notificationStatus: "unRead",
                      notificationDate: Date.now(),
                    }),
                    this.$store.dispatch("handleActivities", {
                      userName: this.userData.userName,
                      posterUserName: s,
                      activity: "liked",
                      activityDate: Date.now(),
                      activityId: be["a"].v1(),
                    }))
                  : "incrementCommentLikes" === t &&
                    (this.$store.dispatch("handleActivities", {
                      userName: this.userData.userName,
                      posterUserName: s,
                      commenterUserName: o.userName,
                      activity: "likedComment",
                      activityDate: Date.now(),
                      activityId: be["a"].v1(),
                    }),
                    this.$store.dispatch("handleNotifications", {
                      userName: this.userData.userName,
                      posterUserName: s,
                      commenterUserName: o.userName,
                      notificationId: be["a"].v1(),
                      notificationType: "likedComment",
                      notificationStatus: "unRead",
                      notificationDate: Date.now(),
                    }));
            },
            handleLogin(e) {
              this.$router.push({ name: "Login" });
            },
            closeRestrictMessage() {
              this.restrictGuest = !1;
            },
            showMessage(e, t) {
              if ("Guest" === this.userData.userName)
                return (this.restrictGuest = !0);
              this.$store.dispatch("handleDisplayFunctions", {
                userName: e,
                params: "displayMessage",
              }),
                this.$router.push({
                  name: "Messages",
                  params: { userName: this.userData.userName },
                });
            },
            handlePostViews(e) {
              this.userData.userName !== this.newsFeed[e].userName &&
                this.$store.dispatch("handlePostViews", {
                  userName: this.userData.userName,
                  postId: e,
                });
            },
            onScroll(e) {
              let t = Object.keys(e);
              for (let a in this.newsFeed)
                t.includes(a) &&
                  null !== e[a] &&
                  this.isElementInViewport(e[a]) &&
                  this.handlePostViews(a),
                  t.includes(this.newsFeed[a].postVideos.videoId) &&
                    null !== e[this.newsFeed[a].postVideos.videoId] &&
                    (this.isElementInViewport(
                      e[this.newsFeed[a].postVideos.videoId]
                    )
                      ? document
                          .getElementById(this.newsFeed[a].postVideos.videoId)
                          .play()
                          .catch((e) => {})
                      : document
                          .getElementById(this.newsFeed[a].postVideos.videoId)
                          .pause());
            },
            isElementInViewport(e) {
              var t = e.getBoundingClientRect();
              return (
                t.top >= 0 &&
                t.left >= 0 &&
                t.bottom <=
                  (window.innerHeight ||
                    document.documentElement.clientHeight) &&
                t.right <=
                  (window.innerWidth || document.documentElement.clientWidth)
              );
            },
            handlePosterComment(e, t, a) {
              if ("Guest" === this.userData.userName)
                return (this.restrictGuest = !0);
              let i = be["a"].v1();
              e.length &&
                (this.$store.dispatch("handlePosterComment", {
                  [i]: {
                    userName: this.userData.userName,
                    userId: this.userData.userId,
                    comment: e,
                    dateCommented: Date.now(),
                    commentId: i,
                    likes: [],
                    postId: t,
                    unLikes: [],
                  },
                }),
                this.$store.dispatch("handleNotifications", {
                  userName: this.userData.userName,
                  posterUserName: a,
                  notificationId: be["a"].v1(),
                  notificationType: "comment",
                  notificationStatus: "unRead",
                  notificationDate: Date.now(),
                }),
                this.$store.dispatch("handleActivities", {
                  userName: this.userData.userName,
                  posterUserName: a,
                  activity: "commented",
                  activityDate: Date.now(),
                  activityId: be["a"].v1(),
                }));
            },
            showDate(e) {
              const t = Date.now(),
                a = t - e,
                i = Math.round(a / 6e4),
                s = Math.round(a / 36e5),
                o = Math.round(a / 864e5),
                n = Math.round(a / 6048e5),
                c = Math.round(a / 72576e5),
                d = Math.round(a / 1314e6);
              return i <= 0
                ? "Just now"
                : i < 60
                ? 1 === i
                  ? "1 minute ago"
                  : i + " minutes ago"
                : s < 24
                ? 1 === s
                  ? "1 hour ago"
                  : s + " hours ago"
                : o < 7
                ? 1 === o
                  ? "1 day ago"
                  : o + " days ago"
                : n < 4
                ? 1 === n
                  ? "1 week ago"
                  : n + " weeks ago"
                : c < 12
                ? 1 === c
                  ? "1 month ago"
                  : c + " mouths ago"
                : 1 === d
                ? "1 year ago"
                : d + " years ago";
            },
            handleDisplayFunctions() {
              return this.$store.state.displayFunctions.navCollapsed
                ? ((this.sidebarListOneMargin = "margin-top:-3rem"),
                  this.sidebarListOneMargin)
                : ((this.sidebarListOneMargin = "margin-top:2rem"),
                  this.sidebarListOneMargin);
            },
          },
          computed: {
            handleFooterOnScreen() {
              return !this.$store.state.displayFunctions.footerOnScreen;
            },
            allUsers() {
              let e = [];
              for (const a in this.$store.state.allUsers)
                e = [...e, this.$store.state.allUsers[a]];
              const t = e
                .map((e) => ({ sort: Math.random(), value: e }))
                .sort((e, t) => e.sort - t.sort)
                .map((e) => e.value);
              return t;
            },
          },
        }),
      le = a("d959"),
      ue = a.n(le);
    const me = ue()(fe, [["render", de]]);
    t["default"] = me;
  },
  c516: function (e, t, a) {
    e.exports = a.p + "media/pristine-609.dcf24be4.mp3";
  },
  c8d9: function (e, t, a) {
    e.exports = a.p + "img/ethan-post.3a30776b.jpg";
  },
  cdb2: function (e, t, a) {
    e.exports = a.p + "img/ruby-profilepix.5a1aaee8.jpg";
  },
  cf1d: function (e, t, a) {
    e.exports = a.p + "img/nova-post1.f9d1a7be.jpeg";
  },
  d975: function (e, t, a) {
    e.exports = a.p + "img/josh-profilePix.72672410.jpg";
  },
  de6a: function (e, t, a) {
    e.exports = a.p + "media/ivy-post2.9ec3c380.mp4";
  },
  e5bc: function (e, t, a) {
    e.exports = a.p + "img/sophie-profilepix.941c9d7d.jpg";
  },
  f4a4: function (e, t, a) {
    "use strict";
    a("faf0");
  },
  f80d: function (e, t, a) {
    e.exports = a.p + "img/ethan-profilePix.5d12ef20.jpg";
  },
  faf0: function (e, t, a) {},
  fe61: function (e, t, a) {
    "use strict";
    a.r(t);
    var i = a("7a23");
    const s = { class: "login-background" },
      o = { class: "login" },
      n = Object(i["h"])(
        "div",
        { class: "logo-text" },
        [Object(i["h"])("h2", null, "SoMedia")],
        -1
      ),
      c = Object(i["h"])(
        "div",
        { class: "signin-header" },
        [Object(i["h"])("h5", null, "Create an Account")],
        -1
      ),
      d = { class: "login-userName-input" },
      r = { class: "login-userName-input" },
      b = { class: "login-userName-input" },
      f = { class: "login-dropdown" },
      l = Object(i["h"])(
        "label",
        { for: "gender" },
        [Object(i["h"])("span", null, "Gender: ")],
        -1
      ),
      u = Object(i["h"])("option", { value: "Male" }, "Male", -1),
      m = Object(i["h"])("option", { value: "Female" }, "Female", -1),
      h = { class: "signup-directives" },
      p = { key: 0, style: { color: "red" } },
      N = { key: 1, style: { color: "red" } },
      y = { key: 2, style: { color: "red" } },
      v = { key: 3, style: { color: "red", "text-align": "center" } },
      O = Object(i["h"])(
        "div",
        { class: "signup-button" },
        [
          Object(i["h"])(
            "button",
            { class: "btn btn-success", type: "submit" },
            "SignUp"
          ),
        ],
        -1
      ),
      j = Object(i["h"])(
        "div",
        { class: "signin-header" },
        [Object(i["h"])("h5", null, "Sign In")],
        -1
      ),
      g = { class: "login-userName-input" },
      k = { class: "login-user-lock" },
      I = Object(i["h"])(
        "div",
        { style: { "text-align": "right" } },
        [
          Object(i["h"])(
            "span",
            { class: "login-directives-click" },
            "Forgot Password"
          ),
        ],
        -1
      ),
      D = Object(i["h"])(
        "div",
        { class: "login-user-botton" },
        [
          Object(i["h"])(
            "button",
            { type: "submit", class: "btn btn-success" },
            "Login"
          ),
        ],
        -1
      ),
      S = { class: "login-directives" },
      U = { key: 0, style: { color: "red" } },
      C = { key: 1, style: { color: "red", "text-align": "center" } },
      w = { key: 0, class: "backdrop-login" };
    function R(e, t, a, R, L, T) {
      const A = Object(i["x"])("font-awesome-icon");
      return (
        Object(i["q"])(),
        Object(i["d"])(
          i["a"],
          null,
          [
            Object(i["h"])("div", s, [
              Object(i["h"])("div", o, [
                n,
                L.createAccount
                  ? (Object(i["q"])(),
                    Object(i["d"])(
                      "form",
                      {
                        key: 0,
                        onSubmit:
                          t[9] ||
                          (t[9] = Object(i["H"])(
                            (...e) =>
                              T.handleCreateAccount &&
                              T.handleCreateAccount(...e),
                            ["prevent"]
                          )),
                        class: "signup-form",
                      },
                      [
                        c,
                        Object(i["h"])(
                          "div",
                          {
                            class: [
                              "login-userName-input",
                              { inputEmpty: L.inputEmpty1 },
                            ],
                          },
                          [
                            Object(i["h"])("span", null, [
                              Object(i["h"])(A, { icon: ["fas", "user"] }),
                            ]),
                            Object(i["G"])(
                              Object(i["h"])(
                                "input",
                                {
                                  type: "text",
                                  id: "username",
                                  placeholder: "Username",
                                  "onUpdate:modelValue":
                                    t[1] ||
                                    (t[1] = (e) => (L.state.userName = e)),
                                },
                                null,
                                512
                              ),
                              [[i["C"], L.state.userName]]
                            ),
                          ],
                          2
                        ),
                        Object(i["h"])("div", d, [
                          Object(i["h"])("span", null, [
                            Object(i["h"])(A, { icon: ["fas", "user"] }),
                          ]),
                          Object(i["G"])(
                            Object(i["h"])(
                              "input",
                              {
                                type: "text",
                                id: "firstname",
                                placeholder: "First Name",
                                "onUpdate:modelValue":
                                  t[2] ||
                                  (t[2] = (e) => (L.state.firstName = e)),
                              },
                              null,
                              512
                            ),
                            [[i["C"], L.state.firstName]]
                          ),
                        ]),
                        Object(i["h"])("div", r, [
                          Object(i["h"])("span", null, [
                            Object(i["h"])(A, { icon: ["fas", "user"] }),
                          ]),
                          Object(i["G"])(
                            Object(i["h"])(
                              "input",
                              {
                                type: "text",
                                id: "surname",
                                placeholder: "LastName",
                                "onUpdate:modelValue":
                                  t[3] ||
                                  (t[3] = (e) => (L.state.lastName = e)),
                              },
                              null,
                              512
                            ),
                            [[i["C"], L.state.lastName]]
                          ),
                        ]),
                        Object(i["h"])("div", b, [
                          Object(i["h"])("span", null, [
                            Object(i["h"])(A, { icon: ["fas", "at"] }),
                          ]),
                          Object(i["G"])(
                            Object(i["h"])(
                              "input",
                              {
                                type: "email",
                                id: "input-email",
                                placeholder: "jesse@example.com",
                                "onUpdate:modelValue":
                                  t[4] ||
                                  (t[4] = (e) => (L.state.emailAddress = e)),
                              },
                              null,
                              512
                            ),
                            [[i["C"], L.state.emailAddress]]
                          ),
                        ]),
                        Object(i["h"])(
                          "div",
                          {
                            class: [
                              "login-user-lock",
                              { inputEmpty: L.inputEmpty2 },
                            ],
                          },
                          [
                            Object(i["h"])("span", null, [
                              Object(i["h"])(A, { icon: ["fas", "lock"] }),
                            ]),
                            Object(i["G"])(
                              Object(i["h"])(
                                "input",
                                {
                                  type: "password",
                                  id: "input-first-name",
                                  placeholder: "Password",
                                  "onUpdate:modelValue":
                                    t[5] ||
                                    (t[5] = (e) => (L.state.password = e)),
                                },
                                null,
                                512
                              ),
                              [[i["C"], L.state.password]]
                            ),
                          ],
                          2
                        ),
                        Object(i["h"])(
                          "div",
                          {
                            class: [
                              "login-user-lock",
                              { inputEmpty: L.inputEmpty3 },
                            ],
                          },
                          [
                            Object(i["h"])("span", null, [
                              Object(i["h"])(A, { icon: ["fas", "lock"] }),
                            ]),
                            Object(i["G"])(
                              Object(i["h"])(
                                "input",
                                {
                                  type: "password",
                                  id: "input-last-name",
                                  placeholder: "Password",
                                  "onUpdate:modelValue":
                                    t[6] ||
                                    (t[6] = (e) =>
                                      (L.state.passwordSecond = e)),
                                },
                                null,
                                512
                              ),
                              [[i["C"], L.state.passwordSecond]]
                            ),
                          ],
                          2
                        ),
                        Object(i["h"])("div", f, [
                          l,
                          Object(i["G"])(
                            Object(i["h"])(
                              "select",
                              {
                                id: "gender",
                                name: "gender",
                                "onUpdate:modelValue":
                                  t[7] || (t[7] = (e) => (L.state.gender = e)),
                                placeholder: "Password",
                                class: { inputEmpty: L.inputEmpty4 },
                              },
                              [u, m],
                              2
                            ),
                            [[i["B"], L.state.gender]]
                          ),
                        ]),
                        Object(i["h"])("div", h, [
                          Object(i["h"])(
                            "span",
                            {
                              onClick:
                                t[8] ||
                                (t[8] = (e) =>
                                  T.toggleDisplay("showCreateAccountOrLogin")),
                              class: "login-directives-click",
                            },
                            " I already have an account"
                          ),
                          L.userExists
                            ? (Object(i["q"])(),
                              Object(i["d"])(
                                "span",
                                p,
                                "Username already Exist"
                              ))
                            : Object(i["e"])("", !0),
                          L.inputEmpty
                            ? (Object(i["q"])(),
                              Object(i["d"])(
                                "span",
                                N,
                                "Please fill The highlighted Areas "
                              ))
                            : Object(i["e"])("", !0),
                          L.passwordMismatch
                            ? (Object(i["q"])(),
                              Object(i["d"])(
                                "span",
                                y,
                                "Passwords does not Match"
                              ))
                            : Object(i["e"])("", !0),
                          L.passwordLength
                            ? (Object(i["q"])(),
                              Object(i["d"])(
                                "span",
                                v,
                                "Your Password Should not be less than 6 Characters "
                              ))
                            : Object(i["e"])("", !0),
                        ]),
                        O,
                      ],
                      32
                    ))
                  : (Object(i["q"])(),
                    Object(i["d"])(
                      "form",
                      {
                        key: 1,
                        onSubmit:
                          t[14] ||
                          (t[14] = Object(i["H"])(
                            (...e) => T.handleLogin && T.handleLogin(...e),
                            ["prevent"]
                          )),
                      },
                      [
                        j,
                        Object(i["h"])("div", g, [
                          Object(i["h"])("span", null, [
                            Object(i["h"])(A, { icon: ["fas", "user"] }),
                          ]),
                          Object(i["G"])(
                            Object(i["h"])(
                              "input",
                              {
                                type: "text",
                                placeholder: "Enter Your Username",
                                "onUpdate:modelValue":
                                  t[10] ||
                                  (t[10] = (e) => (L.state.userName = e)),
                              },
                              null,
                              512
                            ),
                            [[i["C"], L.state.userName]]
                          ),
                        ]),
                        Object(i["h"])("div", k, [
                          Object(i["h"])("span", null, [
                            Object(i["h"])(A, { icon: ["fas", "lock"] }),
                          ]),
                          Object(i["G"])(
                            Object(i["h"])(
                              "input",
                              {
                                type: "password",
                                placeholder: "Enter Your Password",
                                "onUpdate:modelValue":
                                  t[11] ||
                                  (t[11] = (e) => (L.state.password = e)),
                              },
                              null,
                              512
                            ),
                            [[i["C"], L.state.password]]
                          ),
                        ]),
                        I,
                        D,
                        Object(i["h"])("div", S, [
                          Object(i["h"])(
                            "span",
                            {
                              onClick:
                                t[12] ||
                                (t[12] = (e) =>
                                  T.toggleDisplay("showCreateAccountOrLogin")),
                              class: "login-directives-click",
                            },
                            "Create New Account"
                          ),
                          Object(i["h"])(
                            "span",
                            {
                              onClick:
                                t[13] ||
                                (t[13] = (...e) =>
                                  T.useGuestAccount && T.useGuestAccount(...e)),
                              class: "login-directives-click",
                            },
                            "Continue As Guest"
                          ),
                          L.inputEmpty
                            ? (Object(i["q"])(),
                              Object(i["d"])(
                                "span",
                                U,
                                "Enter Your Username and Password"
                              ))
                            : Object(i["e"])("", !0),
                          L.userUnexist
                            ? (Object(i["q"])(),
                              Object(i["d"])(
                                "span",
                                C,
                                "Username or Password is incorrect or does not Exist"
                              ))
                            : Object(i["e"])("", !0),
                        ]),
                      ],
                      32
                    )),
              ]),
            ]),
            e.$store.state.dis
              ? (Object(i["q"])(), Object(i["d"])("div", w))
              : Object(i["e"])("", !0),
          ],
          64
        )
      );
    }
    var L = a("9612"),
      T = {
        name: "LogInPage",
        data() {
          return {
            state: {
              userName: "",
              emailAddress: "",
              password: "",
              passwordSecond: "",
              id: L["a"].v1(),
              firstName: "",
              lastName: "",
              gender: "",
            },
            createAccount: !1,
            userExists: !1,
            inputEmpty: !1,
            userUnexist: !1,
            passwordMismatch: !1,
            passwordLength: !1,
            inputEmpty1: !1,
            inputEmpty2: !1,
            inputEmpty3: !1,
            inputEmpty4: !1,
            userData: {
              userName: "Guest",
              emailAddress: "",
              password: "",
              emailAddress: "419",
              gender: "",
              firstName: "",
              lastName: "",
              address: "",
              emailAddress: "",
              postCode: "",
              country: "",
              city: "",
              aboutMe: "",
              messages: [],
              posts: [],
              followers: [],
              following: [],
              friends: [],
            },
          };
        },
        beforeMount() {
          this.$store.dispatch("handleDisplayFunctions", {
            loginPageUnmounted: !1,
            params: "loginPageUnMount",
          }),
            setTimeout(() => {
              this.$store.dispatch("handleDisplayFunctions", {
                wihteBackgroundLogin: !1,
                params: "wihteBackgroundLogin",
              });
            }, 2e3);
        },
        beforeUnmount() {
          this.$store.dispatch("handleDisplayFunctions", {
            loginPageUnmounted: !0,
            params: "loginPageUnMount",
          });
        },
        methods: {
          toggleDisplay(e) {
            switch (e) {
              case "showCreateAccountOrLogin":
                (this.createAccount = !this.createAccount),
                  (this.userExists = !1),
                  (this.inputEmpty = !1),
                  (this.userUnexist = !1),
                  (this.passwordMismatch = !1),
                  (this.passwordLength = !1),
                  this.handleBorderHignLight("");
                break;
              case "loginUser":
                (this.userUnexist = !1),
                  (this.inputEmpty = !1),
                  this.handleBorderHignLight("");
                break;
              case "userUnexist":
                (this.userUnexist = !0),
                  (this.inputEmpty = !1),
                  this.handleBorderHignLight("");
                break;
              case "inputEmpty":
                (this.inputEmpty = !0),
                  (this.userUnexist = !1),
                  (this.userExists = !1),
                  (this.passwordMismatch = !1),
                  (this.passwordLength = !1),
                  this.handleBorderHignLight("inputEmpty");
                break;
              case "userExists":
                (this.inputEmpty = !1),
                  (this.userExists = !0),
                  (this.passwordMismatch = !1),
                  this.handleBorderHignLight("");
                break;
              case "passwordMismatch":
                (this.passwordMismatch = !0),
                  (this.inputEmpty = !1),
                  (this.userExists = !1),
                  (this.passwordLength = !1),
                  this.handleBorderHignLight("");
                break;
              case "passwordLength":
                (this.passwordLength = !0),
                  (this.inputEmpty = !1),
                  (this.userExists = !1),
                  this.handleBorderHignLight("");
                break;
              default:
                break;
            }
          },
          handleBorderHignLight(e) {
            e.length
              ? (!this.state.userName.length && (this.inputEmpty1 = !0),
                !this.state.password.length && (this.inputEmpty2 = !0),
                !this.state.passwordSecond.length && (this.inputEmpty3 = !0),
                !this.state.gender.length && (this.inputEmpty4 = !0))
              : ((this.inputEmpty1 = !1),
                (this.inputEmpty2 = !1),
                (this.inputEmpty3 = !1),
                (this.inputEmpty4 = !1));
          },
          handleClearInputField() {
            (this.state.userName = ""),
              (this.state.emailAddress = ""),
              (this.state.password = ""),
              (this.state.passwordSecond = ""),
              (this.state.gender = "");
          },
          handleLocalStorage() {
            let e = { userName: this.state.userName, loginTime: Date.now() };
            localStorage.userData = JSON.stringify(e);
          },
        },
        computed: {
          handleCreateAccount() {
            let e = this.$store.state.users;
            return this.state.userName && this.state.password
              ? void 0 !== e[this.state.userName]
                ? this.toggleDisplay("userExists")
                : this.state.password.length < 6
                ? this.toggleDisplay("passwordLength")
                : this.state.password !== this.state.passwordSecond
                ? this.toggleDisplay("passwordMismatch")
                : this.state.gender.length
                ? (this.$store.dispatch("handleDisplayFunctions", {
                    newAccount: !0,
                    params: "newAccount",
                  }),
                  this.$store.dispatch("handleAddAccount", {
                    [this.state.userName]: {
                      userName: this.state.userName,
                      emailAddress: this.state.emailAddress,
                      password: this.state.password,
                      firstName: this.state.firstName,
                      lastName: this.state.lastName,
                      gender: this.state.gender,
                      address: "",
                      postCode: "",
                      country: "",
                      city: "",
                      aboutMe: "",
                      posts: [],
                      followers: [],
                      following: [],
                      friends: [],
                      age: "",
                      education: "",
                      videos: [],
                      photos: [],
                      messages: {},
                      messageStatus: {},
                      notifications: {},
                      occupation: "",
                      status: "online",
                      activities: {},
                      userCoverImage: a("8c34"),
                      userId: L["a"].v1(),
                      userProfileImage: a("2d52"),
                    },
                  }),
                  this.handleLocalStorage(),
                  (this.userData =
                    this.$store.state.users[this.state.userName]),
                  this.toggleDisplay("loginUser"),
                  this.$store.dispatch("handleActivities", {
                    userName: this.state.userName,
                    activity: "Created account",
                    activityDate: Date.now(),
                    activityId: L["a"].v1(),
                  }),
                  this.$router.push({ name: "Home" }),
                  this.handleClearInputField())
                : this.toggleDisplay("inputEmpty")
              : (this.$store.dispatch("handleDisplayFunctions", {
                  newAccount: !1,
                  params: "newAccount",
                }),
                this.toggleDisplay("inputEmpty"));
          },
          handleLogin() {
            let e = this.$store.state.users;
            return this.state.userName && this.state.password
              ? void 0 !== e[this.state.userName] &&
                void 0 !== e[this.state.userName]
                ? (this.toggleDisplay("loginUser"),
                  (this.userData = e[this.state.userName]),
                  this.$emit("sendUserdata", this.userData),
                  this.$router.push({ name: "Home" }),
                  this.$store.dispatch("handleLogin", {
                    userName: this.state.userName,
                    status: "online",
                  }),
                  this.handleLocalStorage(),
                  this.$store.dispatch("handleActivities", {
                    userName: this.state.userName,
                    activity: "logged in",
                    activityDate: Date.now(),
                    activityId: L["a"].v1(),
                  }),
                  this.handleClearInputField())
                : this.toggleDisplay("userUnexist")
              : this.toggleDisplay("inputEmpty");
          },
          useGuestAccount() {
            this.$router.push({ name: "Home" }),
              this.$store.dispatch("updateUserData", {
                Guest: {
                  userName: "Guest",
                  emailAddress: "",
                  password: "",
                  firstName: "",
                  lastName: "",
                  gender: "",
                  address: "",
                  postCode: "",
                  country: "",
                  city: "",
                  aboutMe: "",
                  posts: [],
                  followers: [],
                  following: [],
                  friends: [],
                  age: "",
                  education: "",
                  videos: [],
                  photos: [],
                  messages: {},
                  messageStatus: {},
                  notifications: {},
                  occupation: "",
                  status: "online",
                  activities: {},
                  userCoverImage: a("8c34"),
                  userId: L["a"].v1(),
                  userProfileImage: a("2d52"),
                },
              });
          },
        },
      },
      A = a("d959"),
      q = a.n(A);
    const x = q()(T, [["render", R]]);
    t["default"] = x;
  },
});
//# sourceMappingURL=app.dac7a090.js.map
