"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Number = _styledComponents["default"].span.withConfig({
  displayName: "Slider__Number",
  componentId: "sc-19eorbi-0"
})(["left:", "px !important;top:", "px !important;position:relative;transform-origin:center center;display:block;width:49px;height:49px;background:transparent;border-radius:50%;line-height:30px;text-align:center;font-weight:bold;padding-top:9px;box-sizing:border-box;border:4px solid ", ";margin-top:20px;margin-left:-38px;color:black;font-style:normal;font-weight:normal;line-height:normal;font-size:19px;&::after{content:\"\";width:15px;height:14px;background:", ";display:block;clip-path:polygon(50% 100%,0 0,100% 0);position:absolute;left:13px;top:43px;}"], function (props) {
  return props.left;
}, function (props) {
  return props.top;
}, function (props) {
  return props.color;
}, function (props) {
  return props.color;
});

var RangeWrapper = _styledComponents["default"].div.withConfig({
  displayName: "Slider__RangeWrapper",
  componentId: "sc-19eorbi-1"
})(["input{position:absolute !important;left:0;bottom:0;}.container{padding-top:25px;}.box-minmax{width:304px;display:flex;justify-content:space-between;font-size:20px;color:", ";span:first-child{margin-left:10px;}}.range-slider{margin-top:30px;width:300px;margin:auto;text-align:center;position:relative;height:6em;}.range{margin-top:29px;width:300px;-webkit-appearance:none;&:focus{outline:none;}&::-webkit-slider-runnable-track{width:100%;height:1px;cursor:pointer;box-shadow:none;background:", ";border-radius:0px;border:0px solid #010101;}&::-moz-range-track{width:100%;height:1px;cursor:pointer;box-shadow:none;background:", ";border-radius:0px;border:0px solid #010101;}&::-webkit-slider-thumb{box-shadow:none;border:0px solid ", ";box-shadow:0px 10px 10px rgba(0,0,0,0.25);height:42px;width:22px;border-radius:22px;background:", ";cursor:pointer;-webkit-appearance:none;margin-top:-20px;}&::-moz-range-thumb{box-shadow:none;border:0px solid #ffffff;box-shadow:0px 10px 10px rgba(0,0,0,0.25);height:42px;width:22px;border-radius:22px;background:rgba(255,255,255,1);cursor:pointer;-webkit-appearance:none;margin-top:-20px;}&::-moz-focus-outer{border:0;}}"], function (props) {
  return props.color;
}, function (props) {
  return props.color;
}, function (props) {
  return props.color;
}, function (props) {
  return props.color;
}, function (props) {
  return props.color;
});

var Slider = function Slider(_ref) {
  var nameAnimal = _ref.nameAnimal;
  var color;

  if (nameAnimal === "bear") {
    color = "rgba(112, 171, 193, 0.8)";
  } else if (nameAnimal === "fox") {
    color = "rgba(209, 115, 51, 0.8)";
  } else if (nameAnimal === "tiger") {
    color = "rgba(50, 127, 118, 0.8)";
  } else {
    color = "rgba(209, 159, 221, 0.8)";
  }

  var _useState = (0, _react.useState)(1),
      _useState2 = _slicedToArray(_useState, 2),
      rangeValueMin = _useState2[0],
      setRangeValueMin = _useState2[1];

  function handleRangeValueMin(value) {
    if (value > 51) {
      setRangeValueMin(51);
      return;
    }

    setRangeValueMin(value);
  }

  function getLeftValue() {
    return rangeValueMin / 107 * 300;
  }

  function handleRangeValueMax(value) {
    if (value < 50) {
      setRangeValueMin(1);
      return;
    }

    setRangeValueMin(value - 49);
  }

  return /*#__PURE__*/_react["default"].createElement(RangeWrapper, {
    color: color
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "range-slider"
  }, /*#__PURE__*/_react["default"].createElement(Number, {
    color: color,
    left: getLeftValue() + 25,
    top: -13
  }, rangeValueMin), /*#__PURE__*/_react["default"].createElement(Number, {
    color: color,
    left: getLeftValue() + 162,
    top: -82
  }, " ", (rangeValueMin + 49).toString()), /*#__PURE__*/_react["default"].createElement("input", {
    value: rangeValueMin,
    id: "range-line",
    className: "range",
    type: "range",
    min: "1",
    max: "100",
    step: "1",
    onChange: function onChange(e) {
      return handleRangeValueMin(parseInt(e.target.value));
    }
  }), /*#__PURE__*/_react["default"].createElement("input", {
    value: (rangeValueMin + 49).toString(),
    id: "range-line2",
    className: "range",
    type: "range",
    onChange: function onChange(e) {
      return handleRangeValueMax(parseInt(e.target.value));
    }
  }))));
};

var _default = Slider;
exports["default"] = _default;