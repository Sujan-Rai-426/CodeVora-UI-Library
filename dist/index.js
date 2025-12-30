'use strict';

var React = require('react');

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

exports.MatrixBackground = MatrixBackground;
//# sourceMappingURL=index.js.map
