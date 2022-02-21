"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactPdfJs = require("react-pdf-js");

var _reactI18next = require("react-i18next");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var PdfViewer = function PdfViewer(props) {
  var _useState = (0, _react.useState)(1),
      _useState2 = _slicedToArray(_useState, 2),
      page = _useState2[0],
      setPage = _useState2[1];

  var _useState3 = (0, _react.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      pages = _useState4[0],
      setPages = _useState4[1];

  var _useTranslation = (0, _reactI18next.useTranslation)(),
      t = _useTranslation.t;

  var renderPagination = function renderPagination(page, pages) {
    if (!pages) {
      return null;
    }

    var previousButton = /*#__PURE__*/_react.default.createElement("li", {
      className: "previous",
      onClick: function onClick() {
        return setPage(page - 1);
      }
    }, /*#__PURE__*/_react.default.createElement("a", {
      href: "#previous"
    }, /*#__PURE__*/_react.default.createElement("i", {
      className: "arrow-left"
    }), " Previous"));

    if (page === 1) {
      previousButton = /*#__PURE__*/_react.default.createElement("li", {
        className: "previous disabled"
      }, /*#__PURE__*/_react.default.createElement("a", {
        href: "#previous"
      }, /*#__PURE__*/_react.default.createElement("i", {
        className: "arrow-left"
      }), " Previous"));
    }

    var nextButton = /*#__PURE__*/_react.default.createElement("li", {
      className: "next",
      onClick: function onClick() {
        return setPage(page + 1);
      }
    }, /*#__PURE__*/_react.default.createElement("a", {
      href: "#next"
    }, "Next ", /*#__PURE__*/_react.default.createElement("i", {
      className: "arrow-right"
    })));

    if (page === pages) {
      nextButton = /*#__PURE__*/_react.default.createElement("li", {
        className: "next disabled"
      }, /*#__PURE__*/_react.default.createElement("a", {
        href: "#next"
      }, "Next ", /*#__PURE__*/_react.default.createElement("i", {
        className: "arrow-right"
      })));
    }

    return /*#__PURE__*/_react.default.createElement("nav", null, /*#__PURE__*/_react.default.createElement("ul", {
      className: "pager"
    }, previousButton, nextButton));
  };

  var canvasEl = (0, _react.useRef)(null);

  var _usePdf = (0, _reactPdfJs.usePdf)({
    file: props.file,
    page: page,
    canvasEl: canvasEl
  }),
      _usePdf2 = _slicedToArray(_usePdf, 2),
      loading = _usePdf2[0],
      numPages = _usePdf2[1];

  (0, _react.useEffect)(function () {
    setPages(numPages);
  }, [numPages]);
  return /*#__PURE__*/_react.default.createElement("div", null, loading && /*#__PURE__*/_react.default.createElement("span", null, t('Loading...')), /*#__PURE__*/_react.default.createElement("canvas", {
    ref: canvasEl
  }), renderPagination(page, pages));
};

var _default = PdfViewer;
exports.default = _default;