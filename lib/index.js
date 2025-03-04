"use strict";

exports.__esModule = true;
exports.default = exports.Lightbox = undefined;

var _Lightbox = require("./Lightbox");

Object.defineProperty(exports, "Lightbox", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Lightbox).default;
  }
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Lightbox2 = _interopRequireDefault(_Lightbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _default = function (_Component) {
  _inherits(_default, _Component);

  function _default() {
    var _temp, _this, _ret;

    _classCallCheck(this, _default);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = { modalOpen: false }, _this.toggleModal = function () {
      _this.setState(function (prev) {
        return {
          modalOpen: !prev.modalOpen
        };
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _default.prototype.render = function render() {
    var _props = this.props,
        className = _props.className,
        small = _props.small,
        smallSrcSet = _props.smallSrcSet,
        medium = _props.medium,
        large = _props.large,
        alt = _props.alt,
        hideDownload = _props.hideDownload,
        hideZoom = _props.hideZoom,
        hideRotate = _props.hideRotate;
    var modalOpen = this.state.modalOpen;


    return _react2.default.createElement(
      "div",
      null,
      _react2.default.createElement("img", {
        className: className,
        style: {
          cursor: "pointer",
          maxWidth: "100%",
          maxHeight: "100%"
        },
        onClick: this.toggleModal,
        src: small,
        srcSet: smallSrcSet,
        alt: alt
      }),
      modalOpen && _react2.default.createElement(_Lightbox2.default, {
        medium: medium,
        large: large,
        alt: alt,
        onClose: this.toggleModal,
        hideDownload: hideDownload,
        hideZoom: hideZoom,
        hideRotate: hideRotate
      })
    );
  };

  return _default;
}(_react.Component);

exports.default = _default;