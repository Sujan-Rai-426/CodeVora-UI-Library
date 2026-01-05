'use strict';

var React = require('react');

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$d = ":root{--bg-color:#050505;--neon-cyan:#00f3ff;--neon-magenta:#f0f;--neon-yellow:#fdf200;--grid-color:rgba(0,243,255,.05)}.CyberpunkBackground-module_container__LV00L{background-color:var(--bg-color);color:#fff;font-family:Segoe UI,Roboto,Helvetica,Arial,sans-serif;min-height:100%;overflow:hidden;position:relative;width:100%}.CyberpunkBackground-module_grid__Kn5FR{animation:CyberpunkBackground-module_moveGrid__gob1l 20s linear infinite;background-image:linear-gradient(var(--grid-color) 1px,transparent 1px),linear-gradient(90deg,var(--grid-color) 1px,transparent 1px);background-size:50px 50px;height:200%;left:0;position:absolute;top:0;transform:perspective(500px) rotateX(60deg);transform-origin:center top;width:200%;z-index:1}.CyberpunkBackground-module_scanlines__DwsKX{background:linear-gradient(hsla(0,6%,7%,0) 50%,rgba(0,0,0,.1) 0),linear-gradient(90deg,rgba(255,0,0,.03),rgba(0,255,0,.01),rgba(0,0,255,.03));background-size:100% 4px,3px 100%;height:100%;left:0;pointer-events:none;position:fixed;top:0;width:100%;z-index:10}.CyberpunkBackground-module_shape__jtEkX{border-radius:50%;filter:blur(80px);opacity:.4;position:absolute;z-index:2}.CyberpunkBackground-module_shape1__jWtX2{background:var(--neon-magenta);height:clamp(80px,200px,400px);right:-100px;top:-100px;width:clamp(80px,200px,400px)}.CyberpunkBackground-module_shape2__-QxuF{background:var(--neon-cyan);bottom:10%;height:clamp(60px,150px,300px);left:-50px;width:clamp(60px,150px,300px)}.CyberpunkBackground-module_content__rhBR7{padding:0;position:relative;z-index:5}@keyframes CyberpunkBackground-module_moveGrid__gob1l{0%{transform:perspective(500px) rotateX(60deg) translateY(0)}to{transform:perspective(500px) rotateX(60deg) translateY(50px)}}";
var styles$c = {"container":"CyberpunkBackground-module_container__LV00L","grid":"CyberpunkBackground-module_grid__Kn5FR","moveGrid":"CyberpunkBackground-module_moveGrid__gob1l","scanlines":"CyberpunkBackground-module_scanlines__DwsKX","shape":"CyberpunkBackground-module_shape__jtEkX","shape1":"CyberpunkBackground-module_shape1__jWtX2","shape2":"CyberpunkBackground-module_shape2__-QxuF","content":"CyberpunkBackground-module_content__rhBR7"};
styleInject(css_248z$d);

// src/components/core/Background/presets/Cyberpunk/CyberpunkBackground.jsx

var CyberpunkBackground = function CyberpunkBackground(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React.createElement("div", {
    className: styles$c.container
  }, /*#__PURE__*/React.createElement("div", {
    className: styles$c.grid
  }), /*#__PURE__*/React.createElement("div", {
    className: styles$c.scanlines
  }), /*#__PURE__*/React.createElement("div", {
    className: "".concat(styles$c.shape, " ").concat(styles$c.shape1)
  }), /*#__PURE__*/React.createElement("div", {
    className: "".concat(styles$c.shape, " ").concat(styles$c.shape2)
  }), /*#__PURE__*/React.createElement("div", {
    className: styles$c.content
  }, children));
};

var css_248z$c = ".MessyBackground-module_wrapper__LZk-h{background:linear-gradient(40deg,#08001f,#001932);margin:0;min-height:100%;overflow:hidden;padding:0;position:relative;width:100%}.MessyBackground-module_svgFilters__0uaA3{height:0;pointer-events:none;position:absolute;user-select:none;width:0}.MessyBackground-module_gradientsContainer__B8bIX{filter:url(#goo) blur(70px);height:100%;left:0;position:absolute;top:0;width:100%}.MessyBackground-module_g1__O3-OK,.MessyBackground-module_g2__dldE0,.MessyBackground-module_g3__EqhFt,.MessyBackground-module_g4__3ICs1,.MessyBackground-module_g5__UN1Cz{border-radius:50%;height:80%;left:10%;mix-blend-mode:hard-light;opacity:.8;position:absolute;top:10%;width:80%}.MessyBackground-module_g1__O3-OK{animation:MessyBackground-module_moveVertical__uDc9- 30s ease infinite;background:radial-gradient(circle at center,rgba(18,113,255,.8) 0,rgba(18,113,255,0) 50%) no-repeat}.MessyBackground-module_g2__dldE0{animation:MessyBackground-module_moveInCircle__N-XZr 20s infinite reverse;background:radial-gradient(circle at center,rgba(221,74,255,.8) 0,rgba(221,74,255,0) 50%) no-repeat}.MessyBackground-module_g3__EqhFt{animation:MessyBackground-module_moveInCircle__N-XZr 40s linear infinite;background:radial-gradient(circle at center,rgba(100,220,255,.8) 0,rgba(100,220,255,0) 50%) no-repeat}.MessyBackground-module_g4__3ICs1{animation:MessyBackground-module_moveHorizontal__lcOai 25s ease infinite;background:radial-gradient(circle at center,rgba(200,50,50,.8) 0,rgba(200,50,50,0) 50%) no-repeat}.MessyBackground-module_g5__UN1Cz{animation:MessyBackground-module_moveInCircle__N-XZr 20s ease infinite;background:radial-gradient(circle at center,rgba(180,180,50,.8) 0,rgba(180,180,50,0) 50%) no-repeat}.MessyBackground-module_content__wnMmJ{min-height:100%;position:relative;width:100%;z-index:10}@keyframes MessyBackground-module_moveInCircle__N-XZr{0%{transform:rotate(0deg)}50%{transform:rotate(180deg)}to{transform:rotate(1turn)}}@keyframes MessyBackground-module_moveVertical__uDc9-{0%{transform:translateY(-50%)}50%{transform:translateY(50%)}to{transform:translateY(-50%)}}@keyframes MessyBackground-module_moveHorizontal__lcOai{0%{transform:translateX(-50%) translateY(-10%)}50%{transform:translateX(50%) translateY(10%)}to{transform:translateX(-50%) translateY(-10%)}}";
var styles$b = {"wrapper":"MessyBackground-module_wrapper__LZk-h","svgFilters":"MessyBackground-module_svgFilters__0uaA3","gradientsContainer":"MessyBackground-module_gradientsContainer__B8bIX","g1":"MessyBackground-module_g1__O3-OK","g2":"MessyBackground-module_g2__dldE0","g3":"MessyBackground-module_g3__EqhFt","g4":"MessyBackground-module_g4__3ICs1","g5":"MessyBackground-module_g5__UN1Cz","moveVertical":"MessyBackground-module_moveVertical__uDc9-","moveInCircle":"MessyBackground-module_moveInCircle__N-XZr","moveHorizontal":"MessyBackground-module_moveHorizontal__lcOai","content":"MessyBackground-module_content__wnMmJ"};
styleInject(css_248z$c);

// src/components/core/Background/presets/Messy/MessyBackground.jsx

var MessyBackground = function MessyBackground(_ref) {
  var children = _ref.children,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className;
  return /*#__PURE__*/React.createElement("div", {
    className: "".concat(styles$b.wrapper, " ").concat(className)
  }, /*#__PURE__*/React.createElement("svg", {
    style: {
      position: 'absolute',
      width: 0,
      height: 0
    }
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("filter", {
    id: "goo"
  }, /*#__PURE__*/React.createElement("feGaussianBlur", {
    "in": "SourceGraphic",
    stdDeviation: "10",
    result: "blur"
  }), /*#__PURE__*/React.createElement("feColorMatrix", {
    "in": "blur",
    mode: "matrix",
    values: "1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8",
    result: "goo"
  }), /*#__PURE__*/React.createElement("feBlend", {
    "in": "SourceGraphic",
    in2: "goo"
  })))), /*#__PURE__*/React.createElement("div", {
    className: styles$b.gradientsContainer
  }, /*#__PURE__*/React.createElement("div", {
    className: styles$b.g1
  }), /*#__PURE__*/React.createElement("div", {
    className: styles$b.g2
  }), /*#__PURE__*/React.createElement("div", {
    className: styles$b.g3
  }), /*#__PURE__*/React.createElement("div", {
    className: styles$b.g4
  }), /*#__PURE__*/React.createElement("div", {
    className: styles$b.g5
  })), /*#__PURE__*/React.createElement("div", {
    className: styles$b.content
  }, children));
};

var css_248z$b = ".GlassmorphismBackground-module_wrapper__1-i0Q{background:#0f172a;margin:0;min-height:100%;overflow:hidden;padding:0;position:relative;width:100%}.GlassmorphismBackground-module_blobContainer__GOSMt{height:100%;width:100%;z-index:1}.GlassmorphismBackground-module_blob__OZC-2{animation:GlassmorphismBackground-module_move__a20Io 20s infinite alternate;border-radius:50%;filter:blur(80px);height:50%;opacity:.6;position:absolute;width:50%}@media (max-width:768px){.GlassmorphismBackground-module_blob__OZC-2{height:80%;width:80%}}.GlassmorphismBackground-module_blob1__k91qU{animation-delay:0s;background:#3b82f6;left:-10%;top:-10%}.GlassmorphismBackground-module_blob2__4DD-m{animation-delay:-5s;background:#a855f7;bottom:-10%;right:-10%}.GlassmorphismBackground-module_blob3__fSa6N{animation-delay:-10s;background:#ec4899;left:30%;top:40%}.GlassmorphismBackground-module_glassLayer__cdtmK{backdrop-filter:blur(40px) saturate(150%);background:rgba(15,23,42,.3);min-height:100%;position:relative;width:100%;z-index:2}.GlassmorphismBackground-module_content__Apl3o{width:100%}@keyframes GlassmorphismBackground-module_move__a20Io{0%{transform:translate(0) scale(1)}to{transform:translate(15%,15%) scale(1.1)}}";
var styles$a = {"wrapper":"GlassmorphismBackground-module_wrapper__1-i0Q","blobContainer":"GlassmorphismBackground-module_blobContainer__GOSMt","blob":"GlassmorphismBackground-module_blob__OZC-2","move":"GlassmorphismBackground-module_move__a20Io","blob1":"GlassmorphismBackground-module_blob1__k91qU","blob2":"GlassmorphismBackground-module_blob2__4DD-m","blob3":"GlassmorphismBackground-module_blob3__fSa6N","glassLayer":"GlassmorphismBackground-module_glassLayer__cdtmK","content":"GlassmorphismBackground-module_content__Apl3o"};
styleInject(css_248z$b);

var GlassmorphismBackground = function GlassmorphismBackground(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React.createElement("div", {
    className: styles$a.wrapper
  }, /*#__PURE__*/React.createElement("div", {
    className: styles$a.blobContainer
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(styles$a.blob, " ").concat(styles$a.blob1)
  }), /*#__PURE__*/React.createElement("div", {
    className: "".concat(styles$a.blob, " ").concat(styles$a.blob2)
  }), /*#__PURE__*/React.createElement("div", {
    className: "".concat(styles$a.blob, " ").concat(styles$a.blob3)
  })), /*#__PURE__*/React.createElement("div", {
    className: styles$a.glassLayer
  }, /*#__PURE__*/React.createElement("div", {
    className: styles$a.content
  }, children)));
};

var css_248z$a = ".StarfieldBackground-module_wrapper__k7Ain{background:radial-gradient(ellipse at bottom,#1b2735 0,#090a0f 100%);margin:0;min-height:100%;overflow:hidden;padding:0;position:relative;width:100%}.StarfieldBackground-module_stars__pRanV{animation:StarfieldBackground-module_animStar__Kg5LN 50s linear infinite}.StarfieldBackground-module_stars__pRanV,.StarfieldBackground-module_stars__pRanV:after{background:transparent;box-shadow:1744px 122px #fff,134px 1321px #fff,86px 859px #fff;height:1px;width:1px}.StarfieldBackground-module_stars__pRanV:after{content:\" \";position:absolute;top:2000px}.StarfieldBackground-module_content__WXlBl{position:relative;width:100%;z-index:10}@keyframes StarfieldBackground-module_animStar__Kg5LN{0%{transform:translateY(0)}to{transform:translateY(-2000px)}}";
var styles$9 = {"wrapper":"StarfieldBackground-module_wrapper__k7Ain","stars":"StarfieldBackground-module_stars__pRanV","animStar":"StarfieldBackground-module_animStar__Kg5LN","content":"StarfieldBackground-module_content__WXlBl"};
styleInject(css_248z$a);

var StarfieldBackground = function StarfieldBackground(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React.createElement("div", {
    className: styles$9.wrapper
  }, /*#__PURE__*/React.createElement("div", {
    className: styles$9.stars
  }), /*#__PURE__*/React.createElement("div", {
    className: styles$9.stars2
  }), /*#__PURE__*/React.createElement("div", {
    className: styles$9.stars3
  }), /*#__PURE__*/React.createElement("div", {
    className: styles$9.content
  }, children));
};

function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return _arrayLikeToArray(r);
}
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _objectWithoutProperties(e, t) {
  if (null == e) return {};
  var o,
    r,
    i = _objectWithoutPropertiesLoose(e, t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
  }
  return i;
}
function _objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (-1 !== e.indexOf(n)) continue;
    t[n] = r[n];
  }
  return t;
}
function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}
function _toConsumableArray(r) {
  return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}

var css_248z$9 = ".MatrixBackground-module_wrapper__7jRv3{background-color:#020502;color:#00ff41;font-family:Courier New,Courier,monospace;min-height:100%;overflow:hidden;position:relative;width:100%}.MatrixBackground-module_canvas__4lMPk{filter:blur(1px);height:100%;left:0;opacity:.35;position:absolute;top:0;width:100%;z-index:0}.MatrixBackground-module_gridOverlay__qvn7d{background-image:linear-gradient(rgba(0,255,65,.05) 1px,transparent 0),linear-gradient(90deg,rgba(0,255,65,.05) 1px,transparent 0);background-size:60px 60px;height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%;z-index:1}.MatrixBackground-module_gridGlow__2uxNL{background:radial-gradient(400px circle at var(--mouse-x) var(--mouse-y),rgba(0,255,65,.08),transparent 60%);height:100%;position:absolute;width:100%}.MatrixBackground-module_vignette__UcrT-{background:radial-gradient(circle,transparent 30%,#020502 150%);height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%;z-index:2}.MatrixBackground-module_content__dwZzm{position:relative;width:100%;z-index:10}.MatrixBackground-module_scanline__UvlZw{animation:MatrixBackground-module_scan__s3JU- 8s linear infinite;background:linear-gradient(180deg,transparent,rgba(0,255,65,.05),transparent);height:4px;pointer-events:none;position:absolute;top:0;width:100%;z-index:11}@keyframes MatrixBackground-module_scan__s3JU-{0%{transform:translateY(-100%)}to{transform:translateY(100vh)}}";
var styles$8 = {"wrapper":"MatrixBackground-module_wrapper__7jRv3","canvas":"MatrixBackground-module_canvas__4lMPk","gridOverlay":"MatrixBackground-module_gridOverlay__qvn7d","gridGlow":"MatrixBackground-module_gridGlow__2uxNL","vignette":"MatrixBackground-module_vignette__UcrT-","content":"MatrixBackground-module_content__dwZzm","scanline":"MatrixBackground-module_scanline__UvlZw","scan":"MatrixBackground-module_scan__s3JU-"};
styleInject(css_248z$9);

var MatrixBackground$1 = function MatrixBackground(_ref) {
  var children = _ref.children;
  var _useState = React.useState({
      x: 0,
      y: 0
    }),
    _useState2 = _slicedToArray(_useState, 2),
    mousePos = _useState2[0],
    setMousePos = _useState2[1];
  var containerRef = React.useRef(null);
  var canvasRef = React.useRef(null);
  React.useEffect(function () {
    var canvas = canvasRef.current;
    var ctx = canvas.getContext("2d");
    var resizeCanvas = function resizeCanvas() {
      // Use parent element size to ensure it fills correctly
      canvas.width = containerRef.current.offsetWidth;
      canvas.height = containerRef.current.offsetHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    var charStr = "01ｱ1ｳｴ0ｶｷｹｺｻ11ｽｾ0ﾀﾁﾂ1ﾄﾅﾆ01ﾈﾉﾊﾋﾌﾍ1ﾏﾐ00ﾒﾓﾔﾕ10ﾗﾘﾙ1ﾛﾜﾝ";
    var characters = charStr.split("");
    var fontSize = 14;
    var columns = canvas.width / fontSize;
    var drops = Array(Math.floor(columns)).fill(1);
    var draw = function draw() {
      ctx.fillStyle = "rgba(2, 5, 2, 0.15)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      for (var i = 0; i < drops.length; i++) {
        var text = characters[Math.floor(Math.random() * characters.length)];
        var opacity = Math.random();
        if (opacity > 0.9) {
          ctx.fillStyle = "#fff";
        } else if (opacity > 0.5) {
          ctx.fillStyle = "#00ff41";
        } else {
          ctx.fillStyle = "#003b11";
        }
        ctx.font = "".concat(fontSize, "px monospace");
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };
    var interval = setInterval(draw, 33);
    return function () {
      clearInterval(interval);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);
  var handleMouseMove = function handleMouseMove(e) {
    if (containerRef.current) {
      var rect = containerRef.current.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    className: styles$8.wrapper,
    ref: containerRef,
    onMouseMove: handleMouseMove
  }, /*#__PURE__*/React.createElement("canvas", {
    ref: canvasRef,
    className: styles$8.canvas
  }), /*#__PURE__*/React.createElement("div", {
    className: styles$8.vignette
  }), /*#__PURE__*/React.createElement("div", {
    className: styles$8.gridOverlay,
    style: {
      "--mouse-x": "".concat(mousePos.x, "px"),
      "--mouse-y": "".concat(mousePos.y, "px")
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: styles$8.gridGlow
  })), /*#__PURE__*/React.createElement("div", {
    className: styles$8.content
  }, children), /*#__PURE__*/React.createElement("div", {
    className: styles$8.scanline
  }));
};

var css_248z$8 = ".WavesBackground-module_wrapper__TY9mV{background:#001220;display:flex;flex-direction:column;min-height:100%;overflow:hidden;position:relative;width:100%}.WavesBackground-module_waveContainer__FWWgb{bottom:0;left:0;line-height:0;position:absolute;width:100%}.WavesBackground-module_waves__vgFum{height:15%;margin-bottom:-7px;max-height:150px;min-height:100px;overflow:hidden;position:relative;width:150%}.WavesBackground-module_content__wLKxS{position:relative;width:100%;z-index:10}.WavesBackground-module_parallax__9m3XM>use{animation:WavesBackground-module_moveForever__IkmSJ 25s cubic-bezier(.55,.5,.45,.5) infinite}.WavesBackground-module_parallax__9m3XM>use:first-child{animation-delay:-2s;animation-duration:7s;opacity:.7}.WavesBackground-module_parallax__9m3XM>use:nth-child(2){animation-delay:-3s;animation-duration:10s;opacity:.5}.WavesBackground-module_parallax__9m3XM>use:nth-child(3){animation-delay:-4s;animation-duration:13s;opacity:.3}.WavesBackground-module_parallax__9m3XM>use:nth-child(4){animation-delay:-5s;animation-duration:20s}@keyframes WavesBackground-module_moveForever__IkmSJ{0%{transform:translate3d(-90px,0,0)}to{transform:translate3d(85px,0,0)}}";
var styles$7 = {"wrapper":"WavesBackground-module_wrapper__TY9mV","waveContainer":"WavesBackground-module_waveContainer__FWWgb","waves":"WavesBackground-module_waves__vgFum","content":"WavesBackground-module_content__wLKxS","parallax":"WavesBackground-module_parallax__9m3XM","moveForever":"WavesBackground-module_moveForever__IkmSJ"};
styleInject(css_248z$8);

// src/components/core/Background/preset/Waves/WavesBackground.jsx

var WavesBackground = function WavesBackground(_ref) {
  var children = _ref.children,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className;
  return /*#__PURE__*/React.createElement("div", {
    className: "".concat(styles$7.wrapper, " ").concat(className)
  }, /*#__PURE__*/React.createElement("div", {
    className: styles$7.content
  }, children), /*#__PURE__*/React.createElement("div", {
    className: styles$7.waveContainer
  }, /*#__PURE__*/React.createElement("svg", {
    className: styles$7.waves,
    viewBox: "0 24 150 28",
    preserveAspectRatio: "none",
    shapeRendering: "auto"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("path", {
    id: "gentle-wave",
    d: "M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
  })), /*#__PURE__*/React.createElement("g", {
    className: styles$7.parallax
  }, /*#__PURE__*/React.createElement("use", {
    href: "#gentle-wave",
    x: "48",
    y: "0",
    fill: "rgba(79, 70, 229, 0.7)"
  }), /*#__PURE__*/React.createElement("use", {
    href: "#gentle-wave",
    x: "48",
    y: "3",
    fill: "rgba(79, 70, 229, 0.5)"
  }), /*#__PURE__*/React.createElement("use", {
    href: "#gentle-wave",
    x: "48",
    y: "5",
    fill: "rgba(79, 70, 229, 0.3)"
  }), /*#__PURE__*/React.createElement("use", {
    href: "#gentle-wave",
    x: "48",
    y: "7",
    fill: "#4f46e5"
  })))));
};

// src/components/core/Background/Background.jsx

var Background = function Background(_ref) {
  var preset = _ref.preset,
    children = _ref.children,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className;
  // Map preset names to their respective components
  var Presets = {
    Cyberpunk: CyberpunkBackground,
    Messy: MessyBackground,
    Glassmorphism: GlassmorphismBackground,
    Starfield: StarfieldBackground,
    Matrix: MatrixBackground$1,
    Waves: WavesBackground
  };

  // Fallback to Cyberpunk if preset doesn't exist
  var SelectedPreset = Presets[preset] || Presets.Cyberpunk;
  return /*#__PURE__*/React.createElement(SelectedPreset, {
    className: className
  }, children);
};

var css_248z$7 = ".ShineButton-module_shineBtn__BbxBG{-webkit-tap-highlight-color:transparent;align-items:center;border:none;border-radius:8px;color:#fff;cursor:pointer;display:inline-flex;font-weight:600;justify-content:center;overflow:hidden;position:relative;touch-action:manipulation;transition:transform .2s cubic-bezier(.4,0,.2,1),box-shadow .2s ease}.ShineButton-module_label__KUif2{pointer-events:none;position:relative;z-index:2}.ShineButton-module_shineEffect__NhaD7{background:linear-gradient(90deg,hsla(0,0%,100%,0) 0,hsla(0,0%,100%,.4) 50%,hsla(0,0%,100%,0));height:100%;left:-150%;pointer-events:none;position:absolute;top:0;transform:skewX(-25deg);width:60%;z-index:1}@media (hover:hover){.ShineButton-module_shineBtn__BbxBG:hover{box-shadow:0 4px 15px rgba(0,0,0,.2);filter:brightness(1.1)}.ShineButton-module_shineBtn__BbxBG:hover .ShineButton-module_shineEffect__NhaD7{animation:ShineButton-module_shineSweep__Wylxr .8s ease-in-out forwards}}.ShineButton-module_forceShine__invUz .ShineButton-module_shineEffect__NhaD7{animation:ShineButton-module_shineSweep__Wylxr .8s ease-in-out forwards}.ShineButton-module_forceShine__invUz{box-shadow:0 0 20px hsla(0,0%,100%,.3)}.ShineButton-module_shineBtn__BbxBG:active{transform:scale(.95)}@keyframes ShineButton-module_shineSweep__Wylxr{0%{left:-150%}to{left:250%}}";
var styles$6 = {"shineBtn":"ShineButton-module_shineBtn__BbxBG","label":"ShineButton-module_label__KUif2","shineEffect":"ShineButton-module_shineEffect__NhaD7","shineSweep":"ShineButton-module_shineSweep__Wylxr","forceShine":"ShineButton-module_forceShine__invUz"};
styleInject(css_248z$7);

var _excluded$7 = ["padding", "color", "children", "className"];
var ShineButton = function ShineButton(_ref) {
  var _ref$padding = _ref.padding,
    padding = _ref$padding === void 0 ? "12px 24px" : _ref$padding,
    _ref$color = _ref.color,
    color = _ref$color === void 0 ? "#3b82f6" : _ref$color,
    children = _ref.children,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className,
    props = _objectWithoutProperties(_ref, _excluded$7);
  var _useState = React.useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    isShining = _useState2[0],
    setIsShining = _useState2[1];

  // Triggers the light sweep for one full cycle on click/tap
  var handleTrigger = function handleTrigger() {
    setIsShining(true);
    // Matches the 800ms animation duration in CSS
    setTimeout(function () {
      return setIsShining(false);
    }, 800);
  };
  var customStyle = {
    padding: padding,
    backgroundColor: color,
    '--btn-color': color // Used for shadow tinting
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    style: customStyle,
    className: "".concat(styles$6.shineBtn, " ").concat(isShining ? styles$6.forceShine : "", " ").concat(className),
    onPointerDown: handleTrigger
  }, props), /*#__PURE__*/React.createElement("div", {
    className: styles$6.shineEffect
  }), /*#__PURE__*/React.createElement("span", {
    className: styles$6.label
  }, children));
};

var css_248z$6 = ".PlasmaButton-module_plasmaBtn__aXP-2{align-items:center;background:transparent;border:2px solid var(--plasma-color);border-radius:8px;box-shadow:inset 0 0 7px var(--plasma-color),0 0 7px var(--plasma-color);color:var(--plasma-color);cursor:pointer;display:flex;font-weight:700;justify-content:center;letter-spacing:2px;overflow:hidden;position:relative;text-shadow:0 0 5px var(--plasma-color);text-transform:uppercase;transition:all .4s cubic-bezier(.23,1,.32,1)}.PlasmaButton-module_plasmaBtn__aXP-2:before{background:radial-gradient(circle,var(--plasma-color) 0,transparent 70%);background-color:var(--plasma-color);border-radius:50%;content:\"\";height:0;left:-50%;position:absolute;top:-50%;transition:width .6s ease-out,height .6s ease-out;width:0;z-index:1}.PlasmaButton-module_plasmaBtn__aXP-2:hover:before{height:250%;width:250%}.PlasmaButton-module_plasmaBtn__aXP-2:hover{box-shadow:0 0 10px var(--plasma-color),0 0 15px var(--plasma-color);color:#fff!important;text-shadow:0 0 10px #fff}.PlasmaButton-module_label__DvXGX{position:relative;z-index:2}.PlasmaButton-module_plasmaBtn__aXP-2:active{filter:brightness(1.2);transform:scale(.95)}";
var styles$5 = {"plasmaBtn":"PlasmaButton-module_plasmaBtn__aXP-2","label":"PlasmaButton-module_label__DvXGX"};
styleInject(css_248z$6);

var _excluded$6 = ["padding", "color", "children", "className"];
var PlasmaButton = function PlasmaButton(_ref) {
  var padding = _ref.padding,
    color = _ref.color,
    children = _ref.children,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className,
    props = _objectWithoutProperties(_ref, _excluded$6);
  // We use the color prop to generate the glow variables
  var customStyle = {
    padding: padding,
    borderColor: color,
    color: color,
    '--plasma-color': color // Passing the color to CSS as a variable
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    style: customStyle,
    className: "".concat(styles$5.plasmaBtn, " ").concat(className)
  }, props), /*#__PURE__*/React.createElement("span", {
    className: styles$5.label
  }, children), /*#__PURE__*/React.createElement("div", {
    className: styles$5.glowOverlay
  }));
};

var css_248z$5 = ".GhostButton-module_ghostBtn__4IQGn{-webkit-tap-highlight-color:transparent;align-items:center;background:transparent;border:2px solid hsla(0,0%,100%,.1);border-radius:4px;cursor:pointer;display:inline-flex;font-weight:500;justify-content:center;overflow:hidden;position:relative;touch-action:manipulation;transition:all .4s cubic-bezier(.23,1,.32,1)}.GhostButton-module_label__FkxsT{color:#fff;letter-spacing:1px;pointer-events:none;position:relative;transition:all .4s ease;z-index:5}.GhostButton-module_line__cerAr{background:var(--ghost-color);position:absolute;transition:all .4s cubic-bezier(.23,1,.32,1);z-index:1}.GhostButton-module_top__iV1j6{height:2px;left:-100%;top:0;width:100%}.GhostButton-module_right__5UJnn{height:100%;right:0;top:-100%;width:2px}.GhostButton-module_bottom__3cwLi{bottom:0;height:2px;right:-100%;width:100%}.GhostButton-module_left__zcEhg{bottom:-100%;height:100%;left:0;width:2px}@media (hover:hover){.GhostButton-module_ghostBtn__4IQGn:hover{background:hsla(0,0%,100%,.05);border-color:transparent;box-shadow:0 0 15px var(--ghost-color)}.GhostButton-module_ghostBtn__4IQGn:hover .GhostButton-module_top__iV1j6{left:0}.GhostButton-module_ghostBtn__4IQGn:hover .GhostButton-module_right__5UJnn{top:0}.GhostButton-module_ghostBtn__4IQGn:hover .GhostButton-module_bottom__3cwLi{right:0}.GhostButton-module_ghostBtn__4IQGn:hover .GhostButton-module_left__zcEhg{bottom:0}}.GhostButton-module_forceDraw__NVGSc{background:hsla(0,0%,100%,.1);border-color:transparent}.GhostButton-module_forceDraw__NVGSc .GhostButton-module_top__iV1j6{left:0}.GhostButton-module_forceDraw__NVGSc .GhostButton-module_right__5UJnn{top:0}.GhostButton-module_forceDraw__NVGSc .GhostButton-module_bottom__3cwLi{right:0}.GhostButton-module_forceDraw__NVGSc .GhostButton-module_left__zcEhg{bottom:0}.GhostButton-module_ghostBtn__4IQGn:active{transform:scale(.96);transition:all .1s ease}";
var styles$4 = {"ghostBtn":"GhostButton-module_ghostBtn__4IQGn","label":"GhostButton-module_label__FkxsT","line":"GhostButton-module_line__cerAr","top":"GhostButton-module_top__iV1j6","right":"GhostButton-module_right__5UJnn","bottom":"GhostButton-module_bottom__3cwLi","left":"GhostButton-module_left__zcEhg","forceDraw":"GhostButton-module_forceDraw__NVGSc"};
styleInject(css_248z$5);

var _excluded$5 = ["padding", "color", "children", "className"];
var GhostButton = function GhostButton(_ref) {
  var _ref$padding = _ref.padding,
    padding = _ref$padding === void 0 ? "12px 24px" : _ref$padding,
    _ref$color = _ref.color,
    color = _ref$color === void 0 ? "#3b82f6" : _ref$color,
    children = _ref.children,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className,
    props = _objectWithoutProperties(_ref, _excluded$5);
  var _useState = React.useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    isDrawing = _useState2[0],
    setIsDrawing = _useState2[1];

  // Triggers the "drawing" effect for a fixed duration on tap
  var handleTrigger = function handleTrigger() {
    setIsDrawing(true);
    setTimeout(function () {
      return setIsDrawing(false);
    }, 600); // Effect duration
  };
  var customStyle = {
    padding: padding,
    color: color,
    '--ghost-color': color
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    style: customStyle,
    className: "".concat(styles$4.ghostBtn, " ").concat(isDrawing ? styles$4.forceDraw : "", " ").concat(className),
    onPointerDown: handleTrigger
  }, props), /*#__PURE__*/React.createElement("span", {
    className: "".concat(styles$4.line, " ").concat(styles$4.top)
  }), /*#__PURE__*/React.createElement("span", {
    className: "".concat(styles$4.line, " ").concat(styles$4.right)
  }), /*#__PURE__*/React.createElement("span", {
    className: "".concat(styles$4.line, " ").concat(styles$4.bottom)
  }), /*#__PURE__*/React.createElement("span", {
    className: "".concat(styles$4.line, " ").concat(styles$4.left)
  }), /*#__PURE__*/React.createElement("span", {
    className: styles$4.label
  }, children));
};

var css_248z$4 = ".GlassButton-module_glassBtn__oMqew{align-items:center;backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);background:hsla(0,0%,100%,.05);border:1px solid hsla(0,0%,100%,.2);border-radius:12px;box-shadow:0 8px 32px 0 rgba(0,0,0,.37);color:#fff;cursor:pointer;display:flex;font-weight:500;justify-content:center;overflow:hidden;position:relative;transition:all .4s cubic-bezier(.4,0,.2,1)}.GlassButton-module_label__Ohzli{position:relative;text-shadow:0 2px 4px rgba(0,0,0,.2);z-index:2}.GlassButton-module_reflection__-R-AM{background:linear-gradient(90deg,transparent,hsla(0,0%,100%,.1),transparent);height:100%;left:-100%;position:absolute;top:0;transform:skewX(-20deg);transition:.7s;width:100%}.GlassButton-module_glassBtn__oMqew:hover{background:hsla(0,0%,100%,.15);border:1px solid hsla(0,0%,100%,.4);box-shadow:0 12px 40px 0 rgba(0,0,0,.45);transform:translateY(-2px)}.GlassButton-module_glassBtn__oMqew:hover .GlassButton-module_reflection__-R-AM{left:200%}.GlassButton-module_glassBtn__oMqew:active{transform:translateY(0) scale(.98)}";
var styles$3 = {"glassBtn":"GlassButton-module_glassBtn__oMqew","label":"GlassButton-module_label__Ohzli","reflection":"GlassButton-module_reflection__-R-AM"};
styleInject(css_248z$4);

var _excluded$4 = ["padding", "color", "children", "className"];
var GlassButton = function GlassButton(_ref) {
  var padding = _ref.padding,
    color = _ref.color,
    children = _ref.children,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className,
    props = _objectWithoutProperties(_ref, _excluded$4);
  var customStyle = {
    padding: padding,
    // We use the color prop to tint the glass slightly
    '--glass-tint': color
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    style: customStyle,
    className: "".concat(styles$3.glassBtn, " ").concat(className)
  }, props), /*#__PURE__*/React.createElement("div", {
    className: styles$3.reflection
  }), /*#__PURE__*/React.createElement("span", {
    className: styles$3.label
  }, children));
};

var css_248z$3 = ".GlitchButton-module_glitchBtn__f-5nw{-webkit-tap-highlight-color:transparent;align-items:center;background:transparent;border:2px solid var(--glitch-color);border-radius:4px;color:#fff;cursor:pointer;display:inline-flex;font-weight:800;justify-content:center;letter-spacing:3px;overflow:hidden;position:relative;text-transform:uppercase;touch-action:manipulation;transition:all .2s ease}.GlitchButton-module_contentWrapper__3J-s1{align-items:center;display:flex;justify-content:center;position:relative}.GlitchButton-module_label__tW-VI{pointer-events:none;position:relative;z-index:5}.GlitchButton-module_glitchLayer__tzwIz{align-items:center;display:flex;height:100%;justify-content:center;left:50%;opacity:0;pointer-events:none;position:absolute;top:50%;transition:opacity .1s;white-space:nowrap;width:100%;z-index:2}.GlitchButton-module_scanline__voz17{background:var(--glitch-color);height:2px;left:0;opacity:0;pointer-events:none;position:absolute;top:-10%;width:100%;z-index:6}@media (hover:hover){.GlitchButton-module_glitchBtn__f-5nw:hover{background:hsla(0,0%,100%,.05);box-shadow:0 0 15px var(--glitch-color)}.GlitchButton-module_glitchBtn__f-5nw:hover .GlitchButton-module_glitchLayer__tzwIz{opacity:1}.GlitchButton-module_glitchBtn__f-5nw:hover .GlitchButton-module_scanline__voz17{animation:GlitchButton-module_scanlineMove__SCR-e .8s linear infinite;opacity:.3}}.GlitchButton-module_forceGlitch__XGPp7{background:var(--glitch-color)!important;box-shadow:0 0 25px var(--glitch-color);transform:scale(.95) skewX(-5deg)}.GlitchButton-module_forceGlitch__XGPp7 .GlitchButton-module_glitchLayer__tzwIz{opacity:1!important}.GlitchButton-module_forceGlitch__XGPp7 .GlitchButton-module_scanline__voz17{animation:GlitchButton-module_scanlineMove__SCR-e .4s linear infinite!important;opacity:.7!important}.GlitchButton-module_glitchBtn__f-5nw:active{transform:scale(.92) skewX(-10deg)}.GlitchButton-module_glitchLayer__tzwIz:nth-child(2){animation:GlitchButton-module_glitchMove__l9n04 .3s infinite;color:#ff00c1;text-shadow:2px 0 #ff00c1;transform:translate(calc(-50% - 3px),calc(-50% - 2px))}.GlitchButton-module_glitchLayer__tzwIz:nth-child(3){animation:GlitchButton-module_glitchMove__l9n04 .3s infinite reverse;color:#00fff9;text-shadow:-2px 0 #00fff9;transform:translate(calc(-50% + 3px),calc(-50% + 2px))}@keyframes GlitchButton-module_glitchMove__l9n04{0%{clip-path:inset(10% 0 80% 0)}20%{clip-path:inset(50% 0 30% 0)}40%{clip-path:inset(20% 0 60% 0)}60%{clip-path:inset(80% 0 5% 0)}80%{clip-path:inset(40% 0 45% 0)}to{clip-path:inset(10% 0 80% 0)}}@keyframes GlitchButton-module_scanlineMove__SCR-e{0%{top:-10%}to{top:110%}}";
var styles$2 = {"glitchBtn":"GlitchButton-module_glitchBtn__f-5nw","contentWrapper":"GlitchButton-module_contentWrapper__3J-s1","label":"GlitchButton-module_label__tW-VI","glitchLayer":"GlitchButton-module_glitchLayer__tzwIz","scanline":"GlitchButton-module_scanline__voz17","scanlineMove":"GlitchButton-module_scanlineMove__SCR-e","forceGlitch":"GlitchButton-module_forceGlitch__XGPp7","glitchMove":"GlitchButton-module_glitchMove__l9n04"};
styleInject(css_248z$3);

var _excluded$3 = ["padding", "color", "children", "className"];
var GlitchButton = function GlitchButton(_ref) {
  var _ref$padding = _ref.padding,
    padding = _ref$padding === void 0 ? "12px 24px" : _ref$padding,
    _ref$color = _ref.color,
    color = _ref$color === void 0 ? "#3b82f6" : _ref$color,
    children = _ref.children,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className,
    props = _objectWithoutProperties(_ref, _excluded$3);
  var _useState = React.useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    isGlitching = _useState2[0],
    setIsGlitching = _useState2[1];

  // This ensures that even a tiny tap on a phone triggers 
  // a visible 800ms glitch cycle.
  var handleTrigger = function handleTrigger() {
    setIsGlitching(true);
    setTimeout(function () {
      return setIsGlitching(false);
    }, 800);
  };
  var customStyle = {
    padding: padding,
    '--glitch-color': color,
    borderColor: color
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    style: customStyle,
    className: "".concat(styles$2.glitchBtn, " ").concat(isGlitching ? styles$2.forceGlitch : "", " ").concat(className),
    onPointerDown: handleTrigger
  }, props), /*#__PURE__*/React.createElement("span", {
    className: styles$2.contentWrapper
  }, /*#__PURE__*/React.createElement("span", {
    className: styles$2.label
  }, children), /*#__PURE__*/React.createElement("span", {
    className: styles$2.glitchLayer,
    "aria-hidden": "true"
  }, children), /*#__PURE__*/React.createElement("span", {
    className: styles$2.glitchLayer,
    "aria-hidden": "true"
  }, children)), /*#__PURE__*/React.createElement("div", {
    className: styles$2.scanline
  }));
};

var css_248z$2 = ".LiquidButton-module_liquidBtn__c-MyW{-webkit-tap-highlight-color:transparent;align-items:center;background:transparent;border:2px solid var(--liquid-color);border-radius:8px;color:var(--liquid-color);cursor:pointer;display:inline-flex;font-weight:700;justify-content:center;letter-spacing:2px;overflow:hidden;position:relative;text-transform:uppercase;touch-action:manipulation;transition:all .3s ease}.LiquidButton-module_label__2O7uj{color:#fff;pointer-events:none;position:relative;transition:color .4s ease;z-index:5}.LiquidButton-module_liquidLayer__uSru2{background:var(--liquid-color);border-radius:42%;height:350%;left:-150%;opacity:.8;pointer-events:none;position:absolute;top:-200%;transform:rotate(0deg);transition:all .8s cubic-bezier(.23,1,.32,1);width:350%;z-index:1}.LiquidButton-module_liquidLayerSecondary__rrUAh{border-radius:38%;opacity:.5;transition-duration:1.2s}@media (hover:hover){.LiquidButton-module_liquidBtn__c-MyW:hover{box-shadow:0 0 20px rgba(var(--liquid-color),.4);color:#fff}.LiquidButton-module_liquidBtn__c-MyW:hover .LiquidButton-module_liquidLayer__uSru2{left:-50%;top:-70%;transform:rotate(140deg)}.LiquidButton-module_liquidBtn__c-MyW:hover .LiquidButton-module_liquidLayerSecondary__rrUAh{transform:rotate(180deg)}}.LiquidButton-module_forceLiquid__kaRrz{color:#fff!important;transform:scale(.96)}.LiquidButton-module_forceLiquid__kaRrz .LiquidButton-module_liquidLayer__uSru2{left:-50%;opacity:1;top:-70%;transform:rotate(140deg)}.LiquidButton-module_forceLiquid__kaRrz .LiquidButton-module_liquidLayerSecondary__rrUAh{left:-55%;opacity:.6;top:-75%;transform:rotate(180deg)}.LiquidButton-module_liquidBtn__c-MyW:active{transform:scale(.94)}";
var styles$1 = {"liquidBtn":"LiquidButton-module_liquidBtn__c-MyW","label":"LiquidButton-module_label__2O7uj","liquidLayer":"LiquidButton-module_liquidLayer__uSru2","liquidLayerSecondary":"LiquidButton-module_liquidLayerSecondary__rrUAh","forceLiquid":"LiquidButton-module_forceLiquid__kaRrz"};
styleInject(css_248z$2);

var _excluded$2 = ["padding", "color", "children", "className"];
var LiquidButton = function LiquidButton(_ref) {
  var _ref$padding = _ref.padding,
    padding = _ref$padding === void 0 ? "12px 24px" : _ref$padding,
    _ref$color = _ref.color,
    color = _ref$color === void 0 ? "#3b82f6" : _ref$color,
    children = _ref.children,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className,
    props = _objectWithoutProperties(_ref, _excluded$2);
  var _useState = React.useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    isActive = _useState2[0],
    setIsActive = _useState2[1];
  var handleTrigger = function handleTrigger() {
    setIsActive(true);
    // The liquid "fills" and stays for a short duration
    setTimeout(function () {
      return setIsActive(false);
    }, 800);
  };
  var customStyle = {
    padding: padding,
    '--liquid-color': color,
    borderColor: color
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    style: customStyle,
    className: "".concat(styles$1.liquidBtn, " ").concat(isActive ? styles$1.forceLiquid : "", " ").concat(className),
    onPointerDown: handleTrigger
  }, props), /*#__PURE__*/React.createElement("span", {
    className: styles$1.label
  }, children), /*#__PURE__*/React.createElement("div", {
    className: styles$1.liquidLayer
  }), /*#__PURE__*/React.createElement("div", {
    className: "".concat(styles$1.liquidLayer, " ").concat(styles$1.liquidLayerSecondary)
  }));
};

var css_248z$1 = ".RippleButton-module_rippleBtn__L-YiO{-webkit-tap-highlight-color:transparent;align-items:center;background:transparent;border:2px solid var(--ripple-color);border-radius:8px;color:var(--ripple-color);cursor:pointer;display:flex;font-weight:700;justify-content:center;letter-spacing:2px;overflow:hidden;position:relative;text-transform:uppercase;transition:all .3s ease}.RippleButton-module_label__dSMww{pointer-events:none;position:relative;z-index:5}.RippleButton-module_rippleContainer__Snola{bottom:0;left:0;pointer-events:none;position:absolute;right:0;top:0;z-index:1}.RippleButton-module_ripple__suDrQ{animation:RippleButton-module_rippleEffect__41kIT .6s linear;background:var(--ripple-color);border-radius:50%;opacity:.6;pointer-events:none;position:absolute;transform:scale(0)}@keyframes RippleButton-module_rippleEffect__41kIT{to{opacity:0;transform:scale(4)}}@media (hover:hover){.RippleButton-module_rippleBtn__L-YiO:hover{background:hsla(0,0%,100%,.03);box-shadow:0 0 10px var(--ripple-color)}}.RippleButton-module_rippleBtn__L-YiO:active{transform:scale(.97)}";
var styles = {"rippleBtn":"RippleButton-module_rippleBtn__L-YiO","label":"RippleButton-module_label__dSMww","rippleContainer":"RippleButton-module_rippleContainer__Snola","ripple":"RippleButton-module_ripple__suDrQ","rippleEffect":"RippleButton-module_rippleEffect__41kIT"};
styleInject(css_248z$1);

var _excluded$1 = ["padding", "color", "children", "className"];
var RippleButton = function RippleButton(_ref) {
  var padding = _ref.padding,
    color = _ref.color,
    children = _ref.children,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className,
    props = _objectWithoutProperties(_ref, _excluded$1);
  var _useState = React.useState([]),
    _useState2 = _slicedToArray(_useState, 2),
    ripples = _useState2[0],
    setRipples = _useState2[1];
  var createRipple = function createRipple(event) {
    var button = event.currentTarget;
    var rect = button.getBoundingClientRect();

    // Calculate position relative to button
    var size = Math.max(button.clientWidth, button.clientHeight);
    var x = event.clientX - rect.left - size / 2;
    var y = event.clientY - rect.top - size / 2;
    var newRipple = {
      x: x,
      y: y,
      size: size,
      id: Date.now()
    };
    setRipples(function (prev) {
      return [].concat(_toConsumableArray(prev), [newRipple]);
    });
  };

  // Clean up ripples after animation ends to prevent memory leaks
  React.useLayoutEffect(function () {
    if (ripples.length > 0) {
      var timer = setTimeout(function () {
        return setRipples([]);
      }, 600);
      return function () {
        return clearTimeout(timer);
      };
    }
  }, [ripples]);
  return /*#__PURE__*/React.createElement("button", _extends({
    className: "".concat(styles.rippleBtn, " ").concat(className),
    style: {
      padding: padding,
      '--ripple-color': color,
      borderColor: color
    },
    onMouseDown: createRipple
  }, props), /*#__PURE__*/React.createElement("span", {
    className: styles.label
  }, children), /*#__PURE__*/React.createElement("span", {
    className: styles.rippleContainer
  }, ripples.map(function (ripple) {
    return /*#__PURE__*/React.createElement("span", {
      key: ripple.id,
      className: styles.ripple,
      style: {
        top: ripple.y,
        left: ripple.x,
        width: ripple.size,
        height: ripple.size
      }
    });
  })));
};

var _excluded = ["preset", "children", "padding", "color", "className"];
var Button = function Button(_ref) {
  var preset = _ref.preset,
    children = _ref.children,
    _ref$padding = _ref.padding,
    padding = _ref$padding === void 0 ? '10px 24px' : _ref$padding,
    _ref$color = _ref.color,
    color = _ref$color === void 0 ? '#f63b3bff' : _ref$color,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className,
    props = _objectWithoutProperties(_ref, _excluded);
  // Map preset names to their respective components
  var Presets = {
    Shine: ShineButton,
    Plasma: PlasmaButton,
    Ghost: GhostButton,
    Glass: GlassButton,
    Glitch: GlitchButton,
    Liquid: LiquidButton,
    Ripple: RippleButton
  };

  // Fallback to Shine if preset doesn't exist
  var SelectedPreset = Presets[preset] || Presets.Shine;
  return /*#__PURE__*/React.createElement(SelectedPreset, _extends({
    padding: padding,
    color: color,
    className: className
  }, props), children);
};

var css_248z = ".cv-hacker-grid-container{background-color:#050a05}.cv-matrix-canvas{opacity:.6}.cv-grid-overlay{background-image:linear-gradient(rgba(0,255,65,.08) 1px,transparent 0),linear-gradient(90deg,rgba(0,255,65,.08) 1px,transparent 0);background-size:50px 50px}.cv-grid-glow{background:radial-gradient(600px circle at var(--mouse-x) var(--mouse-y),rgba(0,255,65,.12),transparent 40%)}.cv-vignette{background:radial-gradient(circle,transparent 40%,#030803 140%)}.cv-main-content-wrapper{z-index:5}.cv-scanline{animation:scan 6s linear infinite;background:rgba(0,255,65,.15);height:2px;z-index:10}.cv-hacker-grid-container{background-color:#020502;color:#00ff41;font-family:Courier New,Courier,monospace;height:100%;overflow:hidden;position:relative;width:100%}.cv-matrix-canvas{filter:blur(1px);opacity:.35;z-index:0}.cv-grid-overlay,.cv-matrix-canvas{height:100%;left:0;position:absolute;top:0;width:100%}.cv-grid-overlay{background-image:linear-gradient(rgba(0,255,65,.05) 1px,transparent 0),linear-gradient(90deg,rgba(0,255,65,.05) 1px,transparent 0);background-size:60px 60px;pointer-events:none;z-index:1}.cv-grid-glow{background:radial-gradient(400px circle at var(--mouse-x) var(--mouse-y),rgba(0,255,65,.08),transparent 60%)}.cv-grid-glow,.cv-vignette{height:100%;position:absolute;width:100%}.cv-vignette{background:radial-gradient(circle,transparent 30%,#020502 150%);left:0;pointer-events:none;top:0;z-index:2}.cv-main-content-wrapper{position:relative;width:100%;z-index:10}.cv-scanline{animation:scan 8s linear infinite;background:linear-gradient(180deg,transparent,rgba(0,255,65,.05),transparent);height:4px;pointer-events:none;position:absolute;top:0;width:100%;z-index:11}@keyframes scan{0%{transform:translateY(-100%)}to{transform:translateY(100vh)}}";
styleInject(css_248z);

var MatrixBackground = function MatrixBackground(_ref) {
  var children = _ref.children;
  var _useState = React.useState({
      x: 0,
      y: 0
    }),
    _useState2 = _slicedToArray(_useState, 2),
    mousePos = _useState2[0],
    setMousePos = _useState2[1];
  var containerRef = React.useRef(null);
  var canvasRef = React.useRef(null);
  React.useEffect(function () {
    var canvas = canvasRef.current;
    var ctx = canvas.getContext("2d");
    var resizeCanvas = function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Katakana + Binary for more "Hacker" feel
    var charStr = "01ｱ1ｳｴ0ｶｷｹｺｻ11ｽｾ0ﾀﾁﾂ1ﾄﾅﾆ01ﾈﾉﾊﾋﾌﾍ1ﾏﾐ00ﾒﾓﾔﾕ10ﾗﾘﾙ1ﾛﾜﾝ";
    var characters = charStr.split("");
    var fontSize = 14;
    var columns = canvas.width / fontSize;
    var drops = Array(Math.floor(columns)).fill(1);
    var draw = function draw() {
      // Darker trails
      ctx.fillStyle = "rgba(2, 5, 2, 0.15)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      for (var i = 0; i < drops.length; i++) {
        var text = characters[Math.floor(Math.random() * characters.length)];

        // Randomize brightness for each character
        var opacity = Math.random();
        if (opacity > 0.9) {
          ctx.fillStyle = "#fff"; // Occasional white flash
        } else if (opacity > 0.5) {
          ctx.fillStyle = "#00ff41"; // Standard green
        } else {
          ctx.fillStyle = "#003b11"; // Dim green for background depth
        }
        ctx.font = fontSize + "px monospace";
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };
    var interval = setInterval(draw, 33);
    return function () {
      clearInterval(interval);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);
  var handleMouseMove = function handleMouseMove(e) {
    if (containerRef.current) {
      var rect = containerRef.current.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "cv-hacker-grid-container",
    ref: containerRef,
    onMouseMove: handleMouseMove
  }, /*#__PURE__*/React.createElement("canvas", {
    ref: canvasRef,
    className: "cv-matrix-canvas"
  }), /*#__PURE__*/React.createElement("div", {
    className: "cv-vignette"
  }), /*#__PURE__*/React.createElement("div", {
    className: "cv-grid-overlay",
    style: {
      "--mouse-x": "".concat(mousePos.x, "px"),
      "--mouse-y": "".concat(mousePos.y, "px")
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "cv-grid-glow"
  })), /*#__PURE__*/React.createElement("div", {
    className: "cv-main-content-wrapper"
  }, children), /*#__PURE__*/React.createElement("div", {
    className: "cv-scanline"
  }));
};

exports.Background = Background;
exports.Button = Button;
exports.MatrixBackground = MatrixBackground;
//# sourceMappingURL=index.js.map
