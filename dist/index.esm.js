import React, { useState, useRef, useEffect } from 'react';

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

var css_248z$6 = ":root{--bg-color:#050505;--neon-cyan:#00f3ff;--neon-magenta:#f0f;--neon-yellow:#fdf200;--grid-color:rgba(0,243,255,.05)}.CyberpunkBackground-module_container__LV00L{background-color:var(--bg-color);color:#fff;font-family:Segoe UI,Roboto,Helvetica,Arial,sans-serif;min-height:100%;overflow:hidden;position:relative;width:100%}.CyberpunkBackground-module_grid__Kn5FR{animation:CyberpunkBackground-module_moveGrid__gob1l 20s linear infinite;background-image:linear-gradient(var(--grid-color) 1px,transparent 1px),linear-gradient(90deg,var(--grid-color) 1px,transparent 1px);background-size:50px 50px;height:200%;left:0;position:absolute;top:0;transform:perspective(500px) rotateX(60deg);transform-origin:center top;width:200%;z-index:1}.CyberpunkBackground-module_scanlines__DwsKX{background:linear-gradient(hsla(0,6%,7%,0) 50%,rgba(0,0,0,.1) 0),linear-gradient(90deg,rgba(255,0,0,.03),rgba(0,255,0,.01),rgba(0,0,255,.03));background-size:100% 4px,3px 100%;height:100%;left:0;pointer-events:none;position:fixed;top:0;width:100%;z-index:10}.CyberpunkBackground-module_shape__jtEkX{border-radius:50%;filter:blur(80px);opacity:.4;position:absolute;z-index:2}.CyberpunkBackground-module_shape1__jWtX2{background:var(--neon-magenta);height:400px;right:-100px;top:-100px;width:400px}.CyberpunkBackground-module_shape2__-QxuF{background:var(--neon-cyan);bottom:10%;height:300px;left:-50px;width:300px}.CyberpunkBackground-module_content__rhBR7{padding:0;position:relative;z-index:5}@keyframes CyberpunkBackground-module_moveGrid__gob1l{0%{transform:perspective(500px) rotateX(60deg) translateY(0)}to{transform:perspective(500px) rotateX(60deg) translateY(50px)}}";
var styles$5 = {"container":"CyberpunkBackground-module_container__LV00L","grid":"CyberpunkBackground-module_grid__Kn5FR","moveGrid":"CyberpunkBackground-module_moveGrid__gob1l","scanlines":"CyberpunkBackground-module_scanlines__DwsKX","shape":"CyberpunkBackground-module_shape__jtEkX","shape1":"CyberpunkBackground-module_shape1__jWtX2","shape2":"CyberpunkBackground-module_shape2__-QxuF","content":"CyberpunkBackground-module_content__rhBR7"};
styleInject(css_248z$6);

// src/components/core/Background/presets/Cyberpunk/CyberpunkBackground.jsx

var CyberpunkBackground = function CyberpunkBackground(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React.createElement("div", {
    className: styles$5.container
  }, /*#__PURE__*/React.createElement("div", {
    className: styles$5.grid
  }), /*#__PURE__*/React.createElement("div", {
    className: styles$5.scanlines
  }), /*#__PURE__*/React.createElement("div", {
    className: "".concat(styles$5.shape, " ").concat(styles$5.shape1)
  }), /*#__PURE__*/React.createElement("div", {
    className: "".concat(styles$5.shape, " ").concat(styles$5.shape2)
  }), /*#__PURE__*/React.createElement("div", {
    className: styles$5.content
  }, children));
};

var css_248z$5 = ".MessyBackground-module_wrapper__LZk-h{background:linear-gradient(40deg,#08001f,#001932);margin:0;min-height:100%;overflow:hidden;padding:0;position:relative;width:100%}.MessyBackground-module_svgFilters__0uaA3{height:0;pointer-events:none;position:absolute;user-select:none;width:0}.MessyBackground-module_gradientsContainer__B8bIX{filter:url(#goo) blur(70px);height:100%;left:0;position:absolute;top:0;width:100%}.MessyBackground-module_g1__O3-OK,.MessyBackground-module_g2__dldE0,.MessyBackground-module_g3__EqhFt,.MessyBackground-module_g4__3ICs1,.MessyBackground-module_g5__UN1Cz{border-radius:50%;height:80%;left:10%;mix-blend-mode:hard-light;opacity:.8;position:absolute;top:10%;width:80%}.MessyBackground-module_g1__O3-OK{animation:MessyBackground-module_moveVertical__uDc9- 30s ease infinite;background:radial-gradient(circle at center,rgba(18,113,255,.8) 0,rgba(18,113,255,0) 50%) no-repeat}.MessyBackground-module_g2__dldE0{animation:MessyBackground-module_moveInCircle__N-XZr 20s infinite reverse;background:radial-gradient(circle at center,rgba(221,74,255,.8) 0,rgba(221,74,255,0) 50%) no-repeat}.MessyBackground-module_g3__EqhFt{animation:MessyBackground-module_moveInCircle__N-XZr 40s linear infinite;background:radial-gradient(circle at center,rgba(100,220,255,.8) 0,rgba(100,220,255,0) 50%) no-repeat}.MessyBackground-module_g4__3ICs1{animation:MessyBackground-module_moveHorizontal__lcOai 25s ease infinite;background:radial-gradient(circle at center,rgba(200,50,50,.8) 0,rgba(200,50,50,0) 50%) no-repeat}.MessyBackground-module_g5__UN1Cz{animation:MessyBackground-module_moveInCircle__N-XZr 20s ease infinite;background:radial-gradient(circle at center,rgba(180,180,50,.8) 0,rgba(180,180,50,0) 50%) no-repeat}.MessyBackground-module_content__wnMmJ{min-height:100vh;position:relative;width:100%;z-index:10}@keyframes MessyBackground-module_moveInCircle__N-XZr{0%{transform:rotate(0deg)}50%{transform:rotate(180deg)}to{transform:rotate(1turn)}}@keyframes MessyBackground-module_moveVertical__uDc9-{0%{transform:translateY(-50%)}50%{transform:translateY(50%)}to{transform:translateY(-50%)}}@keyframes MessyBackground-module_moveHorizontal__lcOai{0%{transform:translateX(-50%) translateY(-10%)}50%{transform:translateX(50%) translateY(10%)}to{transform:translateX(-50%) translateY(-10%)}}";
var styles$4 = {"wrapper":"MessyBackground-module_wrapper__LZk-h","svgFilters":"MessyBackground-module_svgFilters__0uaA3","gradientsContainer":"MessyBackground-module_gradientsContainer__B8bIX","g1":"MessyBackground-module_g1__O3-OK","g2":"MessyBackground-module_g2__dldE0","g3":"MessyBackground-module_g3__EqhFt","g4":"MessyBackground-module_g4__3ICs1","g5":"MessyBackground-module_g5__UN1Cz","moveVertical":"MessyBackground-module_moveVertical__uDc9-","moveInCircle":"MessyBackground-module_moveInCircle__N-XZr","moveHorizontal":"MessyBackground-module_moveHorizontal__lcOai","content":"MessyBackground-module_content__wnMmJ"};
styleInject(css_248z$5);

// src/components/core/Background/presets/Messy/MessyBackground.jsx

var MessyBackground = function MessyBackground(_ref) {
  var children = _ref.children,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className;
  return /*#__PURE__*/React.createElement("div", {
    className: "".concat(styles$4.wrapper, " ").concat(className)
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
    className: styles$4.gradientsContainer
  }, /*#__PURE__*/React.createElement("div", {
    className: styles$4.g1
  }), /*#__PURE__*/React.createElement("div", {
    className: styles$4.g2
  }), /*#__PURE__*/React.createElement("div", {
    className: styles$4.g3
  }), /*#__PURE__*/React.createElement("div", {
    className: styles$4.g4
  }), /*#__PURE__*/React.createElement("div", {
    className: styles$4.g5
  })), /*#__PURE__*/React.createElement("div", {
    className: styles$4.content
  }, children));
};

var css_248z$4 = ".GlassmorphismBackground-module_wrapper__1-i0Q{background:#0f172a;margin:0;min-height:100%;overflow:hidden;padding:0;position:relative;width:100%}.GlassmorphismBackground-module_blobContainer__GOSMt{height:100%;position:fixed;width:100%;z-index:1}.GlassmorphismBackground-module_blob__OZC-2{animation:GlassmorphismBackground-module_move__a20Io 20s infinite alternate;border-radius:50%;filter:blur(80px);height:50vw;opacity:.6;position:absolute;width:50vw}@media (max-width:768px){.GlassmorphismBackground-module_blob__OZC-2{height:80vw;width:80vw}}.GlassmorphismBackground-module_blob1__k91qU{animation-delay:0s;background:#3b82f6;left:-10%;top:-10%}.GlassmorphismBackground-module_blob2__4DD-m{animation-delay:-5s;background:#a855f7;bottom:-10%;right:-10%}.GlassmorphismBackground-module_blob3__fSa6N{animation-delay:-10s;background:#ec4899;left:30%;top:40%}.GlassmorphismBackground-module_glassLayer__cdtmK{backdrop-filter:blur(40px) saturate(150%);background:rgba(15,23,42,.3);min-height:100%;position:relative;width:100%;z-index:2}.GlassmorphismBackground-module_content__Apl3o{width:100%}@keyframes GlassmorphismBackground-module_move__a20Io{0%{transform:translate(0) scale(1)}to{transform:translate(15%,15%) scale(1.1)}}";
var styles$3 = {"wrapper":"GlassmorphismBackground-module_wrapper__1-i0Q","blobContainer":"GlassmorphismBackground-module_blobContainer__GOSMt","blob":"GlassmorphismBackground-module_blob__OZC-2","move":"GlassmorphismBackground-module_move__a20Io","blob1":"GlassmorphismBackground-module_blob1__k91qU","blob2":"GlassmorphismBackground-module_blob2__4DD-m","blob3":"GlassmorphismBackground-module_blob3__fSa6N","glassLayer":"GlassmorphismBackground-module_glassLayer__cdtmK","content":"GlassmorphismBackground-module_content__Apl3o"};
styleInject(css_248z$4);

var GlassmorphismBackground = function GlassmorphismBackground(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React.createElement("div", {
    className: styles$3.wrapper
  }, /*#__PURE__*/React.createElement("div", {
    className: styles$3.blobContainer
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(styles$3.blob, " ").concat(styles$3.blob1)
  }), /*#__PURE__*/React.createElement("div", {
    className: "".concat(styles$3.blob, " ").concat(styles$3.blob2)
  }), /*#__PURE__*/React.createElement("div", {
    className: "".concat(styles$3.blob, " ").concat(styles$3.blob3)
  })), /*#__PURE__*/React.createElement("div", {
    className: styles$3.glassLayer
  }, /*#__PURE__*/React.createElement("div", {
    className: styles$3.content
  }, children)));
};

var css_248z$3 = ".StarfieldBackground-module_wrapper__k7Ain{background:radial-gradient(ellipse at bottom,#1b2735 0,#090a0f 100%);margin:0;min-height:100%;overflow:hidden;padding:0;position:relative;width:100%}.StarfieldBackground-module_stars__pRanV{animation:StarfieldBackground-module_animStar__Kg5LN 50s linear infinite}.StarfieldBackground-module_stars__pRanV,.StarfieldBackground-module_stars__pRanV:after{background:transparent;box-shadow:1744px 122px #fff,134px 1321px #fff,86px 859px #fff;height:1px;width:1px}.StarfieldBackground-module_stars__pRanV:after{content:\" \";position:absolute;top:2000px}.StarfieldBackground-module_content__WXlBl{position:relative;width:100%;z-index:10}@keyframes StarfieldBackground-module_animStar__Kg5LN{0%{transform:translateY(0)}to{transform:translateY(-2000px)}}";
var styles$2 = {"wrapper":"StarfieldBackground-module_wrapper__k7Ain","stars":"StarfieldBackground-module_stars__pRanV","animStar":"StarfieldBackground-module_animStar__Kg5LN","content":"StarfieldBackground-module_content__WXlBl"};
styleInject(css_248z$3);

var StarfieldBackground = function StarfieldBackground(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React.createElement("div", {
    className: styles$2.wrapper
  }, /*#__PURE__*/React.createElement("div", {
    className: styles$2.stars
  }), /*#__PURE__*/React.createElement("div", {
    className: styles$2.stars2
  }), /*#__PURE__*/React.createElement("div", {
    className: styles$2.stars3
  }), /*#__PURE__*/React.createElement("div", {
    className: styles$2.content
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
function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}

var css_248z$2 = ".MatrixBackground-module_wrapper__7jRv3{background-color:#020502;color:#00ff41;font-family:Courier New,Courier,monospace;min-height:100%;overflow:hidden;position:relative;width:100%}.MatrixBackground-module_canvas__4lMPk{filter:blur(1px);height:100%;left:0;opacity:.35;position:absolute;top:0;width:100%;z-index:0}.MatrixBackground-module_gridOverlay__qvn7d{background-image:linear-gradient(rgba(0,255,65,.05) 1px,transparent 0),linear-gradient(90deg,rgba(0,255,65,.05) 1px,transparent 0);background-size:60px 60px;height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%;z-index:1}.MatrixBackground-module_gridGlow__2uxNL{background:radial-gradient(400px circle at var(--mouse-x) var(--mouse-y),rgba(0,255,65,.08),transparent 60%);height:100%;position:absolute;width:100%}.MatrixBackground-module_vignette__UcrT-{background:radial-gradient(circle,transparent 30%,#020502 150%);height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%;z-index:2}.MatrixBackground-module_content__dwZzm{position:relative;width:100%;z-index:10}.MatrixBackground-module_scanline__UvlZw{animation:MatrixBackground-module_scan__s3JU- 8s linear infinite;background:linear-gradient(180deg,transparent,rgba(0,255,65,.05),transparent);height:4px;pointer-events:none;position:absolute;top:0;width:100%;z-index:11}@keyframes MatrixBackground-module_scan__s3JU-{0%{transform:translateY(-100%)}to{transform:translateY(100vh)}}";
var styles$1 = {"wrapper":"MatrixBackground-module_wrapper__7jRv3","canvas":"MatrixBackground-module_canvas__4lMPk","gridOverlay":"MatrixBackground-module_gridOverlay__qvn7d","gridGlow":"MatrixBackground-module_gridGlow__2uxNL","vignette":"MatrixBackground-module_vignette__UcrT-","content":"MatrixBackground-module_content__dwZzm","scanline":"MatrixBackground-module_scanline__UvlZw","scan":"MatrixBackground-module_scan__s3JU-"};
styleInject(css_248z$2);

var MatrixBackground$1 = function MatrixBackground(_ref) {
  var children = _ref.children;
  var _useState = useState({
      x: 0,
      y: 0
    }),
    _useState2 = _slicedToArray(_useState, 2),
    mousePos = _useState2[0],
    setMousePos = _useState2[1];
  var containerRef = useRef(null);
  var canvasRef = useRef(null);
  useEffect(function () {
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
    className: styles$1.wrapper,
    ref: containerRef,
    onMouseMove: handleMouseMove
  }, /*#__PURE__*/React.createElement("canvas", {
    ref: canvasRef,
    className: styles$1.canvas
  }), /*#__PURE__*/React.createElement("div", {
    className: styles$1.vignette
  }), /*#__PURE__*/React.createElement("div", {
    className: styles$1.gridOverlay,
    style: {
      "--mouse-x": "".concat(mousePos.x, "px"),
      "--mouse-y": "".concat(mousePos.y, "px")
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: styles$1.gridGlow
  })), /*#__PURE__*/React.createElement("div", {
    className: styles$1.content
  }, children), /*#__PURE__*/React.createElement("div", {
    className: styles$1.scanline
  }));
};

var css_248z$1 = ".WavesBackground-module_wrapper__TY9mV{background:#001220;display:flex;flex-direction:column;min-height:100vh;overflow:hidden;position:relative;width:100%}.WavesBackground-module_waveContainer__FWWgb{bottom:0;left:0;line-height:0;position:absolute;width:100%}.WavesBackground-module_waves__vgFum{height:15vh;margin-bottom:-7px;max-height:150px;min-height:100px;position:relative;width:100%}.WavesBackground-module_content__wLKxS{position:relative;width:100%;z-index:10}.WavesBackground-module_parallax__9m3XM>use{animation:WavesBackground-module_moveForever__IkmSJ 25s cubic-bezier(.55,.5,.45,.5) infinite}.WavesBackground-module_parallax__9m3XM>use:first-child{animation-delay:-2s;animation-duration:7s;opacity:.7}.WavesBackground-module_parallax__9m3XM>use:nth-child(2){animation-delay:-3s;animation-duration:10s;opacity:.5}.WavesBackground-module_parallax__9m3XM>use:nth-child(3){animation-delay:-4s;animation-duration:13s;opacity:.3}.WavesBackground-module_parallax__9m3XM>use:nth-child(4){animation-delay:-5s;animation-duration:20s}@keyframes WavesBackground-module_moveForever__IkmSJ{0%{transform:translate3d(-90px,0,0)}to{transform:translate3d(85px,0,0)}}";
var styles = {"wrapper":"WavesBackground-module_wrapper__TY9mV","waveContainer":"WavesBackground-module_waveContainer__FWWgb","waves":"WavesBackground-module_waves__vgFum","content":"WavesBackground-module_content__wLKxS","parallax":"WavesBackground-module_parallax__9m3XM","moveForever":"WavesBackground-module_moveForever__IkmSJ"};
styleInject(css_248z$1);

// src/components/core/Background/preset/Waves/WavesBackground.jsx

var WavesBackground = function WavesBackground(_ref) {
  var children = _ref.children,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className;
  return /*#__PURE__*/React.createElement("div", {
    className: "".concat(styles.wrapper, " ").concat(className)
  }, /*#__PURE__*/React.createElement("div", {
    className: styles.content
  }, children), /*#__PURE__*/React.createElement("div", {
    className: styles.waveContainer
  }, /*#__PURE__*/React.createElement("svg", {
    className: styles.waves,
    viewBox: "0 24 150 28",
    preserveAspectRatio: "none",
    shapeRendering: "auto"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("path", {
    id: "gentle-wave",
    d: "M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
  })), /*#__PURE__*/React.createElement("g", {
    className: styles.parallax
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

var css_248z = ".cv-hacker-grid-container{background-color:#050a05}.cv-matrix-canvas{opacity:.6}.cv-grid-overlay{background-image:linear-gradient(rgba(0,255,65,.08) 1px,transparent 0),linear-gradient(90deg,rgba(0,255,65,.08) 1px,transparent 0);background-size:50px 50px}.cv-grid-glow{background:radial-gradient(600px circle at var(--mouse-x) var(--mouse-y),rgba(0,255,65,.12),transparent 40%)}.cv-vignette{background:radial-gradient(circle,transparent 40%,#030803 140%)}.cv-main-content-wrapper{z-index:5}.cv-scanline{animation:scan 6s linear infinite;background:rgba(0,255,65,.15);height:2px;z-index:10}.cv-hacker-grid-container{background-color:#020502;color:#00ff41;font-family:Courier New,Courier,monospace;height:100%;overflow:hidden;position:relative;width:100%}.cv-matrix-canvas{filter:blur(1px);opacity:.35;z-index:0}.cv-grid-overlay,.cv-matrix-canvas{height:100%;left:0;position:absolute;top:0;width:100%}.cv-grid-overlay{background-image:linear-gradient(rgba(0,255,65,.05) 1px,transparent 0),linear-gradient(90deg,rgba(0,255,65,.05) 1px,transparent 0);background-size:60px 60px;pointer-events:none;z-index:1}.cv-grid-glow{background:radial-gradient(400px circle at var(--mouse-x) var(--mouse-y),rgba(0,255,65,.08),transparent 60%)}.cv-grid-glow,.cv-vignette{height:100%;position:absolute;width:100%}.cv-vignette{background:radial-gradient(circle,transparent 30%,#020502 150%);left:0;pointer-events:none;top:0;z-index:2}.cv-main-content-wrapper{position:relative;width:100%;z-index:10}.cv-scanline{animation:scan 8s linear infinite;background:linear-gradient(180deg,transparent,rgba(0,255,65,.05),transparent);height:4px;pointer-events:none;position:absolute;top:0;width:100%;z-index:11}@keyframes scan{0%{transform:translateY(-100%)}to{transform:translateY(100vh)}}";
styleInject(css_248z);

var MatrixBackground = function MatrixBackground(_ref) {
  var children = _ref.children;
  var _useState = useState({
      x: 0,
      y: 0
    }),
    _useState2 = _slicedToArray(_useState, 2),
    mousePos = _useState2[0],
    setMousePos = _useState2[1];
  var containerRef = useRef(null);
  var canvasRef = useRef(null);
  useEffect(function () {
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

export { Background, MatrixBackground };
//# sourceMappingURL=index.esm.js.map
