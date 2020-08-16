module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		14: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("../../../../" + ({}[chunkId]||chunkId) + "." + {"16":"987804c690522a8938bf"}[chunkId] + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/JeY":
/***/ (function(module, exports) {

module.exports = require("@styled-system/theme-get");

/***/ }),

/***/ "/T1H":
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

/***/ }),

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) {}

  return WithRouterWrapper;
}

/***/ }),

/***/ "0bYB":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ 11:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("8trM");


/***/ }),

/***/ "4JT2":
/***/ (function(module, exports) {

module.exports = require("styled-system");

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "4WSj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ CartProvider; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ useCart; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// CONCATENATED MODULE: ./contexts/cart/cart.reducer.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const cartItemsTotalPrice = (items, coupon = null) => {
  let total = items.reduce((price, product) => {
    if (product.salePrice) {
      return price + product.salePrice * product.quantity;
    }

    return price + product.price * product.quantity;
  }, 0);
  const discount = coupon ? total * Number(coupon.discountInPercent) / 100 : 0;
  return total - discount;
}; // cartItems, cartItemToAdd

const addItemToCart = (state, action) => {
  const existingCartItemIndex = state.items.findIndex(item => item.id === action.payload.id);

  if (existingCartItemIndex > -1) {
    const newState = [...state.items];
    newState[existingCartItemIndex].quantity += action.payload.quantity;
    return newState;
  }

  return [...state.items, action.payload];
}; // cartItems, cartItemToRemove


const removeItemFromCart = (state, action) => {
  return state.items.reduce((acc, item) => {
    if (item.id === action.payload.id) {
      const newQuantity = item.quantity - action.payload.quantity;
      return newQuantity > 0 ? [...acc, _objectSpread(_objectSpread({}, item), {}, {
        quantity: newQuantity
      })] : [...acc];
    }

    return [...acc, item];
  }, []);
};

const clearItemFromCart = (state, action) => {
  return state.items.filter(item => item.id !== action.payload.id);
};

const reducer = (state, action) => {
  // console.log(action);
  switch (action.type) {
    case 'REHYDRATE':
      return _objectSpread(_objectSpread({}, state), action.payload);

    case 'TOGGLE_CART':
      return _objectSpread(_objectSpread({}, state), {}, {
        isOpen: !state.isOpen
      });

    case 'ADD_ITEM':
      return _objectSpread(_objectSpread({}, state), {}, {
        items: addItemToCart(state, action)
      });

    case 'REMOVE_ITEM':
      return _objectSpread(_objectSpread({}, state), {}, {
        items: removeItemFromCart(state, action)
      });

    case 'CLEAR_ITEM_FROM_CART':
      return _objectSpread(_objectSpread({}, state), {}, {
        items: clearItemFromCart(state, action)
      });

    case 'CLEAR_CART':
      return _objectSpread(_objectSpread({}, state), {}, {
        items: []
      });

    case 'APPLY_COUPON':
      return _objectSpread(_objectSpread({}, state), {}, {
        coupon: action.payload
      });

    case 'REMOVE_COUPON':
      return _objectSpread(_objectSpread({}, state), {}, {
        coupon: null
      });

    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
};
// CONCATENATED MODULE: ./contexts/cart/use-cart.tsx
var __jsx = external_react_default.a.createElement;

function use_cart_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function use_cart_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { use_cart_ownKeys(Object(source), true).forEach(function (key) { use_cart_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { use_cart_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function use_cart_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


 // import { useStorage } from 'helper/use-storage';

const CartContext = Object(external_react_["createContext"])({});
const INITIAL_STATE = {
  isOpen: false,
  items: [],
  coupon: null
};

const useCartActions = (initialCart = INITIAL_STATE) => {
  var _state$items3;

  const {
    0: state,
    1: dispatch
  } = Object(external_react_["useReducer"])(reducer, initialCart);

  const addItemHandler = (item, quantity = 1) => {
    dispatch({
      type: 'ADD_ITEM',
      payload: use_cart_objectSpread(use_cart_objectSpread({}, item), {}, {
        quantity
      })
    });
  };

  const removeItemHandler = (item, quantity = 1) => {
    dispatch({
      type: 'REMOVE_ITEM',
      payload: use_cart_objectSpread(use_cart_objectSpread({}, item), {}, {
        quantity
      })
    });
  };

  const clearItemFromCartHandler = item => {
    dispatch({
      type: 'CLEAR_ITEM_FROM_CART',
      payload: item
    });
  };

  const clearCartHandler = () => {
    dispatch({
      type: 'CLEAR_CART'
    });
  };

  const toggleCartHandler = () => {
    dispatch({
      type: 'TOGGLE_CART'
    });
  };

  const couponHandler = coupon => {
    dispatch({
      type: 'APPLY_COUPON',
      payload: coupon
    });
  };

  const removeCouponHandler = () => {
    dispatch({
      type: 'REMOVE_COUPON'
    });
  };

  const rehydrateLocalState = payload => {
    dispatch({
      type: 'REHYDRATE',
      payload
    });
  };

  const isInCartHandler = id => {
    var _state$items;

    return (_state$items = state.items) === null || _state$items === void 0 ? void 0 : _state$items.some(item => item.id === id);
  };

  const getItemHandler = id => {
    var _state$items2;

    return (_state$items2 = state.items) === null || _state$items2 === void 0 ? void 0 : _state$items2.find(item => item.id === id);
  };

  const getCartItemsPrice = () => cartItemsTotalPrice(state.items).toFixed(2);

  const getCartItemsTotalPrice = () => cartItemsTotalPrice(state.items, state.coupon).toFixed(2);

  const getDiscount = () => {
    var _state$coupon;

    const total = cartItemsTotalPrice(state.items);
    const discount = state.coupon ? total * Number((_state$coupon = state.coupon) === null || _state$coupon === void 0 ? void 0 : _state$coupon.discountInPercent) / 100 : 0;
    return discount.toFixed(2);
  };

  const getItemsCount = (_state$items3 = state.items) === null || _state$items3 === void 0 ? void 0 : _state$items3.reduce((acc, item) => acc + item.quantity, 0);
  return {
    state,
    getItemsCount,
    rehydrateLocalState,
    addItemHandler,
    removeItemHandler,
    clearItemFromCartHandler,
    clearCartHandler,
    isInCartHandler,
    getItemHandler,
    toggleCartHandler,
    getCartItemsTotalPrice,
    getCartItemsPrice,
    couponHandler,
    removeCouponHandler,
    getDiscount
  };
};

const CartProvider = ({
  children
}) => {
  var _state$items4, _state$items5;

  const {
    state,
    // rehydrateLocalState,
    getItemsCount,
    addItemHandler,
    removeItemHandler,
    clearItemFromCartHandler,
    clearCartHandler,
    isInCartHandler,
    getItemHandler,
    toggleCartHandler,
    getCartItemsTotalPrice,
    couponHandler,
    removeCouponHandler,
    getCartItemsPrice,
    getDiscount
  } = useCartActions(); // const { rehydrated, error } = useStorage(state, rehydrateLocalState);

  return __jsx(CartContext.Provider, {
    value: {
      isOpen: state.isOpen,
      items: state.items,
      coupon: state.coupon,
      cartItemsCount: (_state$items4 = state.items) === null || _state$items4 === void 0 ? void 0 : _state$items4.length,
      itemsCount: getItemsCount,
      getCartItemsCount: ((_state$items5 = state.items) === null || _state$items5 === void 0 ? void 0 : _state$items5.length) ? state.items.reduce((a, b) => a + b.quantity, 0) : null,
      addItem: addItemHandler,
      removeItem: removeItemHandler,
      removeItemFromCart: clearItemFromCartHandler,
      clearCart: clearCartHandler,
      isInCart: isInCartHandler,
      getItem: getItemHandler,
      toggleCart: toggleCartHandler,
      calculatePrice: getCartItemsTotalPrice,
      calculateSubTotalPrice: getCartItemsPrice,
      applyCoupon: couponHandler,
      removeCoupon: removeCouponHandler,
      calculateDiscount: getDiscount
    }
  }, children);
};
const useCart = () => Object(external_react_["useContext"])(CartContext);

/***/ }),

/***/ "5kK8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CURRENCY; });
/************ CONSTANTS ***********/
const CURRENCY = '$';

/***/ }),

/***/ "7KCV":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("C+bE");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "7fVs":
/***/ (function(module, exports) {

module.exports = require("@apollo/react-ssr");

/***/ }),

/***/ "89Ff":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "styled-system"
var external_styled_system_ = __webpack_require__("4JT2");

// EXTERNAL MODULE: external "@styled-system/theme-get"
var theme_get_ = __webpack_require__("/JeY");

// CONCATENATED MODULE: ./components/helpers/customVariant.ts

const buttonStyle = Object(external_styled_system_["variant"])({
  key: 'buttonStyles'
});
const colorStyle = Object(external_styled_system_["variant"])({
  key: 'colorStyles',
  prop: 'colors'
});
const buttonSize = Object(external_styled_system_["variant"])({
  key: 'buttonSize',
  prop: 'size'
});

// CONCATENATED MODULE: ./components/Button/Button.style.tsx




const ButtonStyle = external_styled_components_default()('button').withConfig({
  displayName: "Buttonstyle__ButtonStyle",
  componentId: "voymor-0"
})(["cursor:pointer;position:relative;display:inline-flex;align-items:center;justify-content:center;background-color:", ";height:", "px;width:", ";color:", ";border-radius:", "px;font-family:'Lato',sans-serif;font-size:", "px;font-weight:", ";text-decoration:none;padding-top:0;padding-bottom:0;padding-left:", "px;padding-right:", "px;border:0;transition:all 0.3s ease;box-sizing:border-box;span.btn-text{padding-left:", "px;padding-right:", "px;white-space:nowrap;}span.btn-icon{display:flex;> div{display:flex !important;}}&:focus{outline:none;}&.disabled{color:", ";background-color:", ";border-color:", ";&:hover{color:", ";background-color:", ";border-color:", ";}}&.is-material{box-shadow:0px 1px 5px 0px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 3px 1px -2px rgba(0,0,0,0.12);}&.is-loading{.btn-text{padding-left:", "px;padding-right:", "px;}}&::after{content:'", "';display:", ";align-items:center;justify-content:center;position:absolute;bottom:-2px;right:-5px;width:20px;height:20px;border-radius:50%;background-color:orange;color:#FFFFFF;font-size:10px;}", " ", " ", " ", " ", ""], Object(theme_get_["themeGet"])('colors.primary', '#009E7F'), Object(theme_get_["themeGet"])('heights.3', '48'), props => props.fullwidth ? '100%' : 'auto', props => props.variant === 'textButton' || props.variant === 'outlined' || props.variant === 'outlinedDash' || props.variant === 'outlinedFab' || props.variant === 'extendedOutlinedFab' ? '#222222' : '#ffffff', props => props.radius ? props.radius : Object(theme_get_["themeGet"])('radius.3', '6'), Object(theme_get_["themeGet"])('fontSizes.2', '15'), Object(theme_get_["themeGet"])('fontWeights.6', '700'), Object(theme_get_["themeGet"])('space.7', '30'), Object(theme_get_["themeGet"])('space.7', '30'), Object(theme_get_["themeGet"])('space.1', '4'), Object(theme_get_["themeGet"])('space.1', '4'), Object(theme_get_["themeGet"])('colors.labelColor', '#767676'), Object(theme_get_["themeGet"])('colors.borderColor', '#E6E6E6'), Object(theme_get_["themeGet"])('colors.borderColor', '#E6E6E6'), Object(theme_get_["themeGet"])('colors.labelColor', '#767676'), Object(theme_get_["themeGet"])('colors.borderColor', '#E6E6E6'), Object(theme_get_["themeGet"])('colors.borderColor', '#E6E6E6'), Object(theme_get_["themeGet"])('space.2', '8'), Object(theme_get_["themeGet"])('space.2', '8'), props => props.pointer, props => props.pointer ? 'flex' : 'none', external_styled_system_["alignItems"], external_styled_system_["boxShadow"], colorStyle, buttonStyle, buttonSize);
ButtonStyle.displayName = 'ButtonStyle';
/* harmony default export */ var Button_style = (ButtonStyle);
// EXTERNAL MODULE: external "react-intl"
var external_react_intl_ = __webpack_require__("k004");

// CONCATENATED MODULE: ./components/Button/Button.tsx
var __jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const Button = (_ref) => {
  let {
    type,
    size,
    title,
    intlButtonId,
    colors,
    variant,
    icon,
    disabled,
    iconPosition,
    iconStyle,
    onClick,
    loader,
    loaderColor,
    isLoading,
    className,
    fullwidth,
    style,
    pointer
  } = _ref,
      props = _objectWithoutProperties(_ref, ["type", "size", "title", "intlButtonId", "colors", "variant", "icon", "disabled", "iconPosition", "iconStyle", "onClick", "loader", "loaderColor", "isLoading", "className", "fullwidth", "style", "pointer"]);

  // Checking button loading state
  // console.log(pointer, "Button.tsx")
  const buttonIcon = isLoading !== false ? __jsx(external_react_default.a.Fragment, null, loader ? loader : 'loading....') : icon && __jsx("span", {
    className: "btn-icon",
    style: iconStyle
  }, icon); // set icon position

  const position = iconPosition || 'right';
  return __jsx(Button_style, _extends({
    type: type,
    className: `reusecore__button ${disabled ? 'disabled' : ''} ${isLoading ? 'isLoading' : ''} ${className ? className : ''}`.trim(),
    icon: icon,
    disabled: disabled,
    "icon-position": position,
    onClick: onClick,
    colors: colors,
    variant: variant,
    fullwidth: fullwidth,
    style: style,
    size: size,
    pointer: pointer
  }, props), position === 'left' && buttonIcon, title && !isLoading && __jsx("span", {
    className: "btn-text"
  }, __jsx(external_react_intl_["FormattedMessage"], {
    id: intlButtonId ? intlButtonId : 'intlButtonId',
    defaultMessage: title
  })), position === 'right' && buttonIcon);
};

Button.defaultProps = {
  disabled: false,
  isLoading: false,
  type: 'button'
};
/* harmony default export */ var Button_Button = __webpack_exports__["a"] = (Button);

/***/ }),

/***/ "8trM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./components/seo.tsx
var seo = __webpack_require__("ddIo");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: external "@apollo/react-hooks"
var react_hooks_ = __webpack_require__("mU8t");

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: ./components/Button/Button.tsx + 2 modules
var Button = __webpack_require__("89Ff");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "@styled-system/theme-get"
var theme_get_ = __webpack_require__("/JeY");

// CONCATENATED MODULE: ./containers/ProductDetails/ProductDetails.style.tsx


const ProductDetailsWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "ProductDetailsstyle__ProductDetailsWrapper",
  componentId: "tn8bpu-0"
})(["background-color:#fff;position:relative;display:flex;flex-wrap:wrap;align-items:stretch;box-sizing:border-box;*{box-sizing:border-box;}"]);
const ProductPreview = external_styled_components_default.a.div.withConfig({
  displayName: "ProductDetailsstyle__ProductPreview",
  componentId: "tn8bpu-1"
})(["width:50%;padding:60px;display:flex;align-items:center;justify-content:center;position:relative;img{display:block;max-width:100%;max-height:450px;height:auto;}@media (max-width:990px){padding:30px 40px 60px;}@media (max-width:767px){flex:0 0 100%;max-width:100%;padding:30px 25px 60px;order:0;}"]);
const BackButton = external_styled_components_default.a.div.withConfig({
  displayName: "ProductDetailsstyle__BackButton",
  componentId: "tn8bpu-2"
})(["position:absolute;top:60px;left:60px;z-index:999;@media (max-width:990px){top:20px;left:25px;}.reusecore__button{font-family:'Lato',sans-serif;font-size:", "px;font-weight:", ";color:", ";height:30px;.btn-icon{margin-right:5px;}.btn-text{padding:0;}}"], Object(theme_get_["themeGet"])('fontSizes.1', '13'), Object(theme_get_["themeGet"])('fontWeights.6', '700'), Object(theme_get_["themeGet"])('colors.darkRegular', '#77798C'));
const ProductInfo = external_styled_components_default.a.div.withConfig({
  displayName: "ProductDetailsstyle__ProductInfo",
  componentId: "tn8bpu-3"
})(["width:50%;border-left:1px solid ", ";padding:55px 60px;@media (max-width:990px){padding:30px 40px;}@media (max-width:767px){flex:0 0 100%;max-width:100%;padding:30px 25px;border:0;order:1;}"], Object(theme_get_["themeGet"])('colors.borderColor', '#f1f1f1'));
const SaleTag = external_styled_components_default.a.span.withConfig({
  displayName: "ProductDetailsstyle__SaleTag",
  componentId: "tn8bpu-4"
})(["font-size:12px;font-weight:700;color:#ffffff;background-color:#f4c243;padding:0 10px;line-height:24px;border-radius:12px;display:inline-block;position:absolute;top:20px;right:20px;"]);
const DiscountPercent = external_styled_components_default.a.span.withConfig({
  displayName: "ProductDetailsstyle__DiscountPercent",
  componentId: "tn8bpu-5"
})(["font-size:12px;font-weight:700;color:#ffffff;line-height:24px;background-color:#fc5c63;padding-left:20px;padding-right:15px;position:relative;display:inline-block;position:absolute;bottom:180px;right:-60px;-webkit-transform:translate3d(0,0,1px);transform:translate3d(0,0,1px);&:before{content:'';position:absolute;left:-8px;top:0;width:0;height:0;border-style:solid;border-width:0 8px 12px 0;border-color:transparent #fc5c63 transparent transparent;}&:after{content:'';position:absolute;left:-8px;bottom:0;width:0;height:0;border-style:solid;border-width:0 0 12px 8px;border-color:transparent transparent #fc5c63 transparent;}"]);
const ProductTitlePriceWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "ProductDetailsstyle__ProductTitlePriceWrapper",
  componentId: "tn8bpu-6"
})(["width:100%;display:flex;align-items:flex-start;justify-content:flex-start;margin-bottom:10px;"]);
const ProductTitle = external_styled_components_default.a.h1.withConfig({
  displayName: "ProductDetailsstyle__ProductTitle",
  componentId: "tn8bpu-7"
})(["font-family:'Poppins',sans-serif;font-size:", "px;font-weight:", ";color:", ";line-height:1.5;display:flex;@media (max-width:767px){word-break:break-word;}"], Object(theme_get_["themeGet"])('fontSizes.4', '21'), Object(theme_get_["themeGet"])('fontWeights.6', '700'), Object(theme_get_["themeGet"])('colors.darkBold', '#0D1136'));
const ProductPriceWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "ProductDetailsstyle__ProductPriceWrapper",
  componentId: "tn8bpu-8"
})(["display:flex;align-items:center;flex-shrink:0;margin-left:25px;line-height:31px;@media (max-width:767px){margin-left:15px;}"]);
const ProductPrice = external_styled_components_default.a.div.withConfig({
  displayName: "ProductDetailsstyle__ProductPrice",
  componentId: "tn8bpu-9"
})(["font-family:'Lato',sans-serif;font-size:16px;font-weight:", ";color:", ";"], Object(theme_get_["themeGet"])('fontWeights.6', '700'), Object(theme_get_["themeGet"])('colors.primary', '#009E7F'));
const SalePrice = external_styled_components_default.a.span.withConfig({
  displayName: "ProductDetailsstyle__SalePrice",
  componentId: "tn8bpu-10"
})(["font-family:'Lato',sans-serif;font-size:", "px;font-weight:", ";color:", ";font-style:italic;padding:0 5px;overflow:hidden;position:relative;margin-right:10px;&:before{content:'';width:100%;height:1px;display:inline-block;background-color:", ";position:absolute;top:50%;left:0;}"], Object(theme_get_["themeGet"])('fontSizes.1', '13'), Object(theme_get_["themeGet"])('fontWeights.3', '400'), Object(theme_get_["themeGet"])('colors.yellow', '#FBB979'), Object(theme_get_["themeGet"])('colors.yellow', '#FBB979'));
const ProductWeight = external_styled_components_default.a.div.withConfig({
  displayName: "ProductDetailsstyle__ProductWeight",
  componentId: "tn8bpu-11"
})(["font-family:'Lato',sans-serif;font-size:", "px;font-weight:", ";color:", ";"], Object(theme_get_["themeGet"])('fontSizes.1', '13'), Object(theme_get_["themeGet"])('fontWeights.3', '400'), Object(theme_get_["themeGet"])('colors.darkRegular', '#77798C'));
const ProductDescription = external_styled_components_default.a.p.withConfig({
  displayName: "ProductDetailsstyle__ProductDescription",
  componentId: "tn8bpu-12"
})(["font-family:'Lato',sans-serif;font-size:", "px;font-weight:", ";color:", ";line-height:2;margin-top:30px;"], Object(theme_get_["themeGet"])('fontSizes.2', '15'), Object(theme_get_["themeGet"])('fontWeights.3', '400'), Object(theme_get_["themeGet"])('colors.darkMedium', '#424561'));
const ProductCartWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "ProductDetailsstyle__ProductCartWrapper",
  componentId: "tn8bpu-13"
})(["display:flex;flex-direction:column;margin-top:60px;@media (max-width:767px){margin-top:40px;}"]);
const ProductCartBtn = external_styled_components_default.a.div.withConfig({
  displayName: "ProductDetailsstyle__ProductCartBtn",
  componentId: "tn8bpu-14"
})([".reusecore__button{border-radius:20px;padding-left:20px;padding-right:20px;.btn-icon{margin-right:5px;svg{width:14px;height:auto;@media (max-width:990px){width:14px;}}}}.quantity{width:115px;height:38px;}"]);
const ProductMeta = external_styled_components_default.a.div.withConfig({
  displayName: "ProductDetailsstyle__ProductMeta",
  componentId: "tn8bpu-15"
})(["margin-top:60px;@media (max-width:767px){margin-top:40px;}"]);
const MetaSingle = external_styled_components_default.a.div.withConfig({
  displayName: "ProductDetailsstyle__MetaSingle",
  componentId: "tn8bpu-16"
})(["display:flex;flex-wrap:wrap;"]);
const MetaItem = external_styled_components_default.a.span.withConfig({
  displayName: "ProductDetailsstyle__MetaItem",
  componentId: "tn8bpu-17"
})(["font-family:'Lato',sans-serif;font-size:", "px;font-weight:", ";color:", ";margin-right:10px;margin-bottom:10px;background-color:", ";padding:0 15px;border-radius:6px;cursor:pointer;height:30px;display:flex;align-items:center;justify-content:center;"], Object(theme_get_["themeGet"])('fontSizes.1', '13'), Object(theme_get_["themeGet"])('fontWeights.6', '700'), Object(theme_get_["themeGet"])('colors.darkBold', '#0D1136'), Object(theme_get_["themeGet"])('colors.lightColor', '#f7f7f7'));
const RelatedItems = external_styled_components_default.a.div.withConfig({
  displayName: "ProductDetailsstyle__RelatedItems",
  componentId: "tn8bpu-18"
})(["margin-top:70px;margin-left:55px;margin-right:55px;@media (max-width:990px){margin-top:50px;margin-left:15px;margin-right:15px;}> h2{font-family:'Poppins',sans-serif;font-size:", "px;font-weight:", ";color:", ";line-height:1.2;margin-left:15px;margin-bottom:30px;@media (max-width:767px){margin-left:0;margin-bottom:25px;}}> div > div{flex:0 0 20%;max-width:20%;padding-left:15px;padding-right:15px;margin-bottom:30px;@media (max-width:1500px){flex:0 0 20%;max-width:20%;}@media (max-width:1400px){flex:0 0 25%;max-width:25%;}@media (max-width:1060px){flex:0 0 33.3333333%;max-width:33.3333333%;}@media (max-width:1199px) and (min-width:991px){padding-left:10px;padding-right:10px;}@media (max-width:768px){padding-left:7.5px;padding-right:7.5px;margin-bottom:15px;}@media (max-width:767px){flex:0 0 50%;max-width:50%;}}"], Object(theme_get_["themeGet"])('fontSizes.4', '21'), Object(theme_get_["themeGet"])('fontWeights.6', '700'), Object(theme_get_["themeGet"])('colors.darkBold', '#0D1136'));
// EXTERNAL MODULE: ./components/AllSvgIcon.tsx
var AllSvgIcon = __webpack_require__("yBv+");

// EXTERNAL MODULE: ./components/Truncate/Truncate.tsx
var Truncate = __webpack_require__("eFaF");

// EXTERNAL MODULE: ./components/MultiCarousel/MultiCarousel.tsx
var MultiCarousel = __webpack_require__("S+LZ");

// EXTERNAL MODULE: ./containers/Products/Products.tsx + 2 modules
var Products = __webpack_require__("LzHB");

// EXTERNAL MODULE: ./helper/constant.ts
var constant = __webpack_require__("5kK8");

// EXTERNAL MODULE: external "react-intl"
var external_react_intl_ = __webpack_require__("k004");

// EXTERNAL MODULE: ./contexts/language/language.provider.tsx + 2 modules
var language_provider = __webpack_require__("dq9M");

// EXTERNAL MODULE: ./contexts/cart/use-cart.tsx + 1 modules
var use_cart = __webpack_require__("4WSj");

// EXTERNAL MODULE: ./components/Counter/Counter.tsx + 2 modules
var Counter = __webpack_require__("gHRq");

// CONCATENATED MODULE: ./containers/ProductDetails/ProductDetails.tsx
var __jsx = external_react_default.a.createElement;















const ProductDetails = ({
  product,
  deviceType
}) => {
  var _product$Type;

  const {
    isRtl
  } = Object(language_provider["b" /* useLocale */])();
  const {
    addItem,
    removeItem,
    isInCart,
    getItem,
    items
  } = Object(use_cart["b" /* useCart */])();
  const data = product;

  const handleAddClick = e => {
    e.stopPropagation();
    addItem(data);
  };

  const handleRemoveClick = e => {
    e.stopPropagation();
    removeItem(data);
  };

  Object(external_react_["useEffect"])(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 500);
  }, []);
  const galleryImgs = product.images; // console.log(product.category)

  return __jsx(external_react_default.a.Fragment, null, __jsx(ProductDetailsWrapper, {
    className: "product-card",
    dir: "ltr"
  }, !isRtl && __jsx(ProductPreview, null, __jsx(BackButton, null, __jsx(Button["a" /* default */], {
    title: "Back",
    intlButtonId: "backBtn",
    iconPosition: "left",
    size: "small",
    style: {
      backgroundColor: '#ffffff',
      border: '1px solid #f1f1f1',
      color: '#77798c'
    },
    icon: __jsx(AllSvgIcon["LongArrowLeft"], null),
    onClick: router_default.a.back
  })), __jsx(MultiCarousel["a" /* default */], {
    items: galleryImgs,
    deviceType: deviceType
  })), __jsx(ProductInfo, {
    dir: isRtl ? 'rtl' : 'ltr'
  }, __jsx(ProductTitlePriceWrapper, null, __jsx(ProductTitle, null, product.title), __jsx(ProductPriceWrapper, null, product.discountPercent ? __jsx(SalePrice, null, constant["a" /* CURRENCY */], product.price) : '', __jsx(ProductPrice, null, constant["a" /* CURRENCY */], product.salePrice ? product.salePrice : product.price))), __jsx(ProductWeight, null, product.unit), __jsx(ProductDescription, null, __jsx(Truncate["a" /* default */], {
    character: 600
  }, product.description)), __jsx(ProductCartWrapper, null, __jsx(ProductCartBtn, null, !isInCart(data.id) ? __jsx(Button["a" /* default */], {
    title: "Add to Cart",
    intlButtonId: "addToCartButton",
    iconPosition: "left",
    size: "small",
    className: "cart-button",
    icon: __jsx(AllSvgIcon["CartIcon"], null),
    onClick: handleAddClick
  }) : __jsx(Counter["a" /* Counter */], {
    value: getItem(data.id).quantity,
    onDecrement: handleRemoveClick,
    onIncrement: handleAddClick
  }))), __jsx(ProductMeta, null, __jsx(MetaSingle, null, product.category && __jsx(link_default.a, {
    href: `/$?category=${product.category.slug}`,
    key: `link-${product.category.id}`
  }, __jsx("a", null, __jsx(MetaItem, null, product.category.title))), ((_product$Type = product.Type) === null || _product$Type === void 0 ? void 0 : _product$Type.slug) && __jsx(link_default.a, {
    href: `/?type=${product.Type.slug}`,
    key: `link-${product.Type.id}`
  }, __jsx("a", null, __jsx(MetaItem, null, product.Type.title)))))), isRtl && __jsx(ProductPreview, null, __jsx(BackButton, null, __jsx(Button["a" /* default */], {
    title: "Back",
    intlButtonId: "backBtn",
    iconPosition: "left",
    size: "small",
    style: {
      backgroundColor: '#ffffff',
      border: '1px solid #f1f1f1',
      color: '#77798c'
    },
    icon: __jsx(AllSvgIcon["LongArrowLeft"], null),
    onClick: router_default.a.back
  })), __jsx(MultiCarousel["a" /* default */], {
    items: galleryImgs,
    deviceType: deviceType
  }))), __jsx(RelatedItems, null, __jsx("h2", null, __jsx(external_react_intl_["FormattedMessage"], {
    id: "intlReletedItems",
    defaultMessage: "Related Items"
  })), __jsx(Products["a" /* default */], {
    type: product.Type.slug,
    deviceType: deviceType,
    loadMore: false,
    fetchLimit: 10
  })));
};

/* harmony default export */ var ProductDetails_ProductDetails = (ProductDetails);
// CONCATENATED MODULE: ./containers/ProductDetailsBook/ProductDetailsBook.style.tsx


const ProductDetailsBook_style_ProductDetailsWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "ProductDetailsBookstyle__ProductDetailsWrapper",
  componentId: "ifvhns-0"
})(["background-color:#fff;position:relative;display:flex;flex-wrap:wrap;align-items:stretch;box-sizing:border-box;*{box-sizing:border-box;}"]);
const ProductDetailsBook_style_ProductPreview = external_styled_components_default.a.div.withConfig({
  displayName: "ProductDetailsBookstyle__ProductPreview",
  componentId: "ifvhns-1"
})(["width:50%;padding:60px;display:flex;align-items:center;justify-content:center;position:relative;img{display:block;max-width:100%;height:auto;}@media (max-width:990px){padding:30px 40px 60px;}@media (max-width:767px){flex:0 0 100%;max-width:100%;padding:30px 25px 60px;}"]);
const ProductDetailsBook_style_BackButton = external_styled_components_default.a.div.withConfig({
  displayName: "ProductDetailsBookstyle__BackButton",
  componentId: "ifvhns-2"
})(["position:absolute;top:60px;left:60px;z-index:999;@media (max-width:990px){top:20px;left:25px;}.reusecore__button{font-family:'Lato',sans-serif;font-size:", "px;font-weight:", ";color:", ";height:30px;.btn-icon{margin-right:5px;}.btn-text{padding:0;}}"], Object(theme_get_["themeGet"])('fontSizes.1', '13'), Object(theme_get_["themeGet"])('fontWeights.6', '700'), Object(theme_get_["themeGet"])('colors.darkRegular', '#77798C'));
const ProductDetailsBook_style_ProductInfo = external_styled_components_default.a.div.withConfig({
  displayName: "ProductDetailsBookstyle__ProductInfo",
  componentId: "ifvhns-3"
})(["width:50%;border-left:1px solid ", ";padding:55px 60px;@media (max-width:990px){padding:30px 40px;}@media (max-width:767px){flex:0 0 100%;max-width:100%;padding:30px 25px;border:0;}"], Object(theme_get_["themeGet"])('colors.borderColor', '#f1f1f1'));
const ProductDetailsBook_style_SaleTag = external_styled_components_default.a.span.withConfig({
  displayName: "ProductDetailsBookstyle__SaleTag",
  componentId: "ifvhns-4"
})(["font-size:12px;font-weight:700;color:#ffffff;background-color:#f4c243;padding:0 10px;line-height:24px;border-radius:12px;display:inline-block;position:absolute;top:20px;right:20px;"]);
const ProductDetailsBook_style_DiscountPercent = external_styled_components_default.a.span.withConfig({
  displayName: "ProductDetailsBookstyle__DiscountPercent",
  componentId: "ifvhns-5"
})(["font-size:12px;font-weight:700;color:#ffffff;line-height:24px;background-color:#fc5c63;padding-left:20px;padding-right:15px;position:relative;display:inline-block;position:absolute;bottom:180px;right:-60px;&:before{content:'';position:absolute;left:-8px;top:0;width:0;height:0;border-style:solid;border-width:0 8px 12px 0;border-color:transparent #fc5c63 transparent transparent;}&:after{content:'';position:absolute;left:-8px;bottom:0;width:0;height:0;border-style:solid;border-width:0 0 12px 8px;border-color:transparent transparent #fc5c63 transparent;}"]);
const BookTitle = external_styled_components_default.a.h1.withConfig({
  displayName: "ProductDetailsBookstyle__BookTitle",
  componentId: "ifvhns-6"
})(["font-family:'Poppins',sans-serif;font-size:", "px;font-weight:", ";color:", ";line-height:1.2;margin-bottom:15px;"], Object(theme_get_["themeGet"])('fontSizes.4', '21'), Object(theme_get_["themeGet"])('fontWeights.6', '700'), Object(theme_get_["themeGet"])('colors.darkBold', '#0D1136'));
const AuthorName = external_styled_components_default.a.div.withConfig({
  displayName: "ProductDetailsBookstyle__AuthorName",
  componentId: "ifvhns-7"
})(["font-family:'Lato',sans-serif;font-size:", "px;font-weight:", ";color:", ";display:flex;align-items:center;svg{margin-right:10px;}"], Object(theme_get_["themeGet"])('fontSizes.2', '15'), Object(theme_get_["themeGet"])('fontWeights.6', '700'), Object(theme_get_["themeGet"])('colors.darkBold', '#0D1136'));
const BookDescriptionWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "ProductDetailsBookstyle__BookDescriptionWrapper",
  componentId: "ifvhns-8"
})(["display:flex;flex-direction:column;"]);
const BookDescription = external_styled_components_default.a.p.withConfig({
  displayName: "ProductDetailsBookstyle__BookDescription",
  componentId: "ifvhns-9"
})(["font-family:'Lato',sans-serif;font-size:", "px;font-weight:", ";color:", ";line-height:2;margin-top:30px;margin-bottom:40px;display:flex;flex-direction:column;"], Object(theme_get_["themeGet"])('fontSizes.2', '15'), Object(theme_get_["themeGet"])('fontWeights.3', '400'), Object(theme_get_["themeGet"])('colors.darkMedium', '#424561'));
const BookMetaTable = external_styled_components_default.a.div.withConfig({
  displayName: "ProductDetailsBookstyle__BookMetaTable",
  componentId: "ifvhns-10"
})(["display:flex;flex-direction:column;margin-bottom:40px;"]);
const BookMetaTableRow = external_styled_components_default.a.div.withConfig({
  displayName: "ProductDetailsBookstyle__BookMetaTableRow",
  componentId: "ifvhns-11"
})(["display:flex;align-items:center;margin-bottom:15px;&:last-child{margin-bottom:0;}"]);
const BookMetaItem = external_styled_components_default.a.span.withConfig({
  displayName: "ProductDetailsBookstyle__BookMetaItem",
  componentId: "ifvhns-12"
})(["font-family:'Lato',sans-serif;font-size:", "px;font-weight:", ";color:", ";&:first-child{width:200px;flex-shrink:0;}&:last-child{width:100%;}"], Object(theme_get_["themeGet"])('fontSizes.2', '15'), Object(theme_get_["themeGet"])('fontWeights.3', '400'), Object(theme_get_["themeGet"])('colors.darkMedium', '#424561'));
const ProductDetailsBook_style_ProductCartWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "ProductDetailsBookstyle__ProductCartWrapper",
  componentId: "ifvhns-13"
})(["display:flex;flex-direction:column;"]);
const ProductDetailsBook_style_ProductPriceWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "ProductDetailsBookstyle__ProductPriceWrapper",
  componentId: "ifvhns-14"
})(["display:flex;align-items:center;"]);
const ProductDetailsBook_style_ProductPrice = external_styled_components_default.a.div.withConfig({
  displayName: "ProductDetailsBookstyle__ProductPrice",
  componentId: "ifvhns-15"
})(["font-family:'Lato',sans-serif;font-size:", "px;font-weight:", ";color:", ";"], Object(theme_get_["themeGet"])('fontSizes.3', '19'), Object(theme_get_["themeGet"])('fontWeights.6', '700'), Object(theme_get_["themeGet"])('colors.primary', '#009E7F'));
const ProductDetailsBook_style_SalePrice = external_styled_components_default.a.span.withConfig({
  displayName: "ProductDetailsBookstyle__SalePrice",
  componentId: "ifvhns-16"
})(["font-family:'Lato',sans-serif;font-size:", "px;font-weight:", ";color:", ";font-style:italic;padding:0 5px;overflow:hidden;margin-right:15px;position:relative;display:flex;&:before{content:'';width:100%;height:1px;display:inline-block;background-color:", ";position:absolute;top:50%;left:0;}"], Object(theme_get_["themeGet"])('fontSizes.2', '15'), Object(theme_get_["themeGet"])('fontWeights.3', '400'), Object(theme_get_["themeGet"])('colors.yellow', '#FBB979'), Object(theme_get_["themeGet"])('colors.yellow', '#FBB979'));
const ProductDetailsBook_style_ProductCartBtn = external_styled_components_default.a.div.withConfig({
  displayName: "ProductDetailsBookstyle__ProductCartBtn",
  componentId: "ifvhns-17"
})(["margin-top:30px;display:flex;align-items:center;.reusecore__button{border-radius:20px;padding-left:20px;padding-right:20px;.btn-icon{margin-right:5px;svg{width:14px;height:auto;@media (max-width:990px){width:14px;}}}&.outline-button{margin-left:20px;.btn-icon{svg{width:16px;}}&:hover{color:", ";svg{color:", ";}}}}.quantity{width:115px;height:38px;}"], Object(theme_get_["themeGet"])('colors.primary', '#009E7F'), Object(theme_get_["themeGet"])('colors.primary', '#009E7F'));
const ProductDetailsBook_style_ProductMeta = external_styled_components_default.a.div.withConfig({
  displayName: "ProductDetailsBookstyle__ProductMeta",
  componentId: "ifvhns-18"
})(["margin-top:60px;"]);
const ProductDetailsBook_style_MetaSingle = external_styled_components_default.a.div.withConfig({
  displayName: "ProductDetailsBookstyle__MetaSingle",
  componentId: "ifvhns-19"
})(["display:flex;flex-wrap:wrap;"]);
const ProductDetailsBook_style_MetaItem = external_styled_components_default.a.span.withConfig({
  displayName: "ProductDetailsBookstyle__MetaItem",
  componentId: "ifvhns-20"
})(["font-family:'Lato',sans-serif;font-size:", "px;font-weight:", ";color:", ";margin-right:10px;background-color:", ";padding:0 15px;border-radius:6px;cursor:pointer;height:30px;display:flex;align-items:center;justify-content:center;"], Object(theme_get_["themeGet"])('fontSizes.1', '13'), Object(theme_get_["themeGet"])('fontWeights.6', '700'), Object(theme_get_["themeGet"])('colors.darkBold', '#0D1136'), Object(theme_get_["themeGet"])('colors.lightColor', '#f7f7f7'));
const DetailsWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "ProductDetailsBookstyle__DetailsWrapper",
  componentId: "ifvhns-21"
})(["background-color:", ";position:relative;display:flex;flex-direction:column;padding:60px 70px 0px;box-sizing:border-box;*{box-sizing:border-box;}", "{margin-bottom:20px;}@media (max-width:990px){padding:60px 30px 0px;}"], Object(theme_get_["themeGet"])('colors.lightColor', '#f7f7f7'), AuthorName);
const DetailsTitle = external_styled_components_default.a.h3.withConfig({
  displayName: "ProductDetailsBookstyle__DetailsTitle",
  componentId: "ifvhns-22"
})(["font-family:'Poppins',sans-serif;font-size:", "px;font-weight:", ";color:", ";line-height:1.2;margin-bottom:20px;"], Object(theme_get_["themeGet"])('fontSizes.4', '21'), Object(theme_get_["themeGet"])('fontWeights.6', '700'), Object(theme_get_["themeGet"])('colors.darkBold', '#0D1136'));
const Description = external_styled_components_default.a.p.withConfig({
  displayName: "ProductDetailsBookstyle__Description",
  componentId: "ifvhns-23"
})(["font-family:'Lato',sans-serif;font-size:", "px;font-weight:", ";color:", ";line-height:2;"], Object(theme_get_["themeGet"])('fontSizes.2', '15'), Object(theme_get_["themeGet"])('fontWeights.3', '400'), Object(theme_get_["themeGet"])('colors.darkMedium', '#424561'));
const Avatar = external_styled_components_default.a.div.withConfig({
  displayName: "ProductDetailsBookstyle__Avatar",
  componentId: "ifvhns-24"
})(["width:30px;height:30px;border-radius:50%;display:flex;align-items:center;justify-content:center;overflow:hidden;margin-right:20px;img{width:100%;height:auto;}"]);
const SocialNetworks = external_styled_components_default.a.div.withConfig({
  displayName: "ProductDetailsBookstyle__SocialNetworks",
  componentId: "ifvhns-25"
})(["display:flex;align-items:center;margin-top:20px;"]);
const SocialIcon = external_styled_components_default.a.span.withConfig({
  displayName: "ProductDetailsBookstyle__SocialIcon",
  componentId: "ifvhns-26"
})(["width:auto;height:16px;display:flex;align-items:center;justify-content:center;margin-right:10px;a{height:100%;}svg{width:auto;height:100%;}&:last-child{margin-right:0;}"]);
const ProductDetailsBook_style_RelatedItems = external_styled_components_default.a.div.withConfig({
  displayName: "ProductDetailsBookstyle__RelatedItems",
  componentId: "ifvhns-27"
})(["margin-top:70px;margin-left:55px;margin-right:55px;@media (max-width:990px){margin-top:50px;margin-left:15px;margin-right:15px;}> h2{font-family:'Poppins',sans-serif;font-size:", "px;font-weight:", ";color:", ";line-height:1.2;margin-left:15px;margin-bottom:30px;@media (max-width:767px){margin-left:0;margin-bottom:25px;}}> div > div{flex:0 0 20%;max-width:20%;padding-left:15px;padding-right:15px;margin-bottom:30px;@media (max-width:1500px){flex:0 0 20%;max-width:20%;}@media (max-width:1400px){flex:0 0 25%;max-width:25%;}@media (max-width:1060px){flex:0 0 33.3333333%;max-width:33.3333333%;}@media (max-width:1199px) and (min-width:991px){padding-left:10px;padding-right:10px;}@media (max-width:768px){padding-left:7.5px;padding-right:7.5px;margin-bottom:15px;}@media (max-width:767px){flex:0 0 50%;max-width:50%;}}"], Object(theme_get_["themeGet"])('fontSizes.4', '21'), Object(theme_get_["themeGet"])('fontWeights.6', '700'), Object(theme_get_["themeGet"])('colors.darkBold', '#0D1136'));
// EXTERNAL MODULE: external "graphql-tag"
var external_graphql_tag_ = __webpack_require__("txk1");
var external_graphql_tag_default = /*#__PURE__*/__webpack_require__.n(external_graphql_tag_);

// EXTERNAL MODULE: ./components/Image/Image.tsx
var Image = __webpack_require__("PDTj");

// EXTERNAL MODULE: ./components/ProductCard/ProductCard.style.tsx
var ProductCard_style = __webpack_require__("Fzwq");

// CONCATENATED MODULE: ./components/ProductCard/ProductCardBook.tsx
var ProductCardBook_jsx = external_react_default.a.createElement;

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const ProductCard = (_ref) => {
  let {
    title,
    image,
    name,
    discountInPercent,
    onChange,
    increment,
    decrement,
    data,
    deviceType,
    onClick
  } = _ref,
      props = _objectWithoutProperties(_ref, ["title", "image", "name", "discountInPercent", "onChange", "increment", "decrement", "data", "deviceType", "onClick"]);

  return ProductCardBook_jsx(ProductCard_style["b" /* BookCardWrapper */], {
    onClick: onClick,
    className: "book-card"
  }, ProductCardBook_jsx(ProductCard_style["c" /* BookImageWrapper */], null, ProductCardBook_jsx(Image["a" /* default */], {
    url: image,
    className: "product-image",
    style: {
      position: 'relative'
    },
    alt: title
  }), discountInPercent ? ProductCardBook_jsx(external_react_default.a.Fragment, null, ProductCardBook_jsx(ProductCard_style["e" /* DiscountPercent */], null, discountInPercent, "%")) : ''), ProductCardBook_jsx(ProductCard_style["d" /* BookInfo */], null, ProductCardBook_jsx(ProductCard_style["i" /* ProductName */], null, title), ProductCardBook_jsx(ProductCard_style["a" /* AuthorInfo */], null, ProductCardBook_jsx(external_react_intl_["FormattedMessage"], {
    id: "intlTextBy",
    defaultMessage: "by"
  }), " ", name)));
};

/* harmony default export */ var ProductCardBook = (ProductCard);
// EXTERNAL MODULE: ./containers/Products/Products.style.tsx
var Products_style = __webpack_require__("IF2T");

// EXTERNAL MODULE: ./components/Loader/Loader.tsx
var Loader = __webpack_require__("noiX");

// EXTERNAL MODULE: ./components/Placeholder/Placeholder.tsx
var Placeholder = __webpack_require__("cnNH");

// EXTERNAL MODULE: external "react-reveal/Fade"
var Fade_ = __webpack_require__("IrP5");
var Fade_default = /*#__PURE__*/__webpack_require__.n(Fade_);

// EXTERNAL MODULE: ./components/NoResult/NoResult.tsx + 1 modules
var NoResult = __webpack_require__("IYOs");

// CONCATENATED MODULE: ./containers/Products/ProductsBook.tsx
var ProductsBook_jsx = external_react_default.a.createElement;











const GET_PRODUCTS = external_graphql_tag_default.a`
  query getProducts(
    $type: String
    $text: String
    $category: String
    $offset: Int
    $limit: Int
  ) {
    products(
      type: $type
      text: $text
      category: $category
      offset: $offset
      limit: $limit
    ) {
      items {
        id
        title
        slug
        price
        salePrice
        discountInPercent
        type
        image
        author {
          id
          name
        }
      }
      hasMore
    }
  }
`;
const ProductsBook_Products = ({
  deviceType,
  type,
  fetchLimit = 8,
  loadMore = true
}) => {
  const router = Object(router_["useRouter"])();
  const {
    0: loadingMore,
    1: toggleLoading
  } = Object(external_react_["useState"])(false);
  const {
    data,
    error,
    loading,
    fetchMore
  } = Object(react_hooks_["useQuery"])(GET_PRODUCTS, {
    variables: {
      type: type,
      text: router.query.text,
      category: router.query.category,
      offset: 0,
      limit: fetchLimit
    }
  });

  if (loading) {
    return ProductsBook_jsx(Products_style["c" /* LoaderWrapper */], null, ProductsBook_jsx(Products_style["b" /* LoaderItem */], null, ProductsBook_jsx(Placeholder["c" /* default */], null)), ProductsBook_jsx(Products_style["b" /* LoaderItem */], null, ProductsBook_jsx(Placeholder["c" /* default */], null)), ProductsBook_jsx(Products_style["b" /* LoaderItem */], null, ProductsBook_jsx(Placeholder["c" /* default */], null)));
  }

  if (error) return ProductsBook_jsx("div", null, error.message);

  if (!data || !data.products || data.products.items.length === 0) {
    return ProductsBook_jsx(NoResult["a" /* default */], null);
  }

  const handleLoadMore = () => {
    toggleLoading(true);
    fetchMore({
      variables: {
        offset: Number(data.products.items.length),
        limit: fetchLimit
      },
      updateQuery: (prev, {
        fetchMoreResult
      }) => {
        toggleLoading(false);

        if (!fetchMoreResult) {
          return prev;
        }

        return {
          products: {
            __typename: prev.products.__typename,
            items: [...prev.products.items, ...fetchMoreResult.products.items],
            hasMore: fetchMoreResult.products.hasMore
          }
        };
      }
    });
  };

  return ProductsBook_jsx(external_react_default.a.Fragment, null, ProductsBook_jsx(Products_style["f" /* ProductsRow */], {
    style: {
      margin: 0
    }
  }, data.products.items.map((item, index) => {
    var _item$author;

    return ProductsBook_jsx(Products_style["e" /* ProductsCol */], {
      key: index,
      style: {
        paddingLeft: 0,
        paddingRight: 1
      }
    }, ProductsBook_jsx(Products_style["d" /* ProductCardWrapper */], null, ProductsBook_jsx(Fade_default.a, {
      duration: 800,
      delay: index * 10,
      style: {
        height: '100%'
      }
    }, ProductsBook_jsx(ProductCardBook, {
      title: item.title,
      image: item.image,
      name: item === null || item === void 0 ? void 0 : (_item$author = item.author) === null || _item$author === void 0 ? void 0 : _item$author.name,
      data: item,
      deviceType: deviceType,
      onClick: () => router.push('/product/[slug]', `/product/${item.slug}`)
    }))));
  })), loadMore && data.products.hasMore && ProductsBook_jsx(Products_style["a" /* ButtonWrapper */], null, ProductsBook_jsx(Button["a" /* default */], {
    onClick: handleLoadMore,
    title: "Load More",
    size: "small",
    isLoading: loadingMore,
    intlButtonId: "loadMoreBtn",
    loader: ProductsBook_jsx(Loader["b" /* default */], {
      color: "#009E7F"
    }),
    style: {
      minWidth: 135,
      backgroundColor: '#ffffff',
      border: '1px solid #f1f1f1',
      color: '#009E7F'
    }
  })));
};
/* harmony default export */ var ProductsBook = (ProductsBook_Products);
// CONCATENATED MODULE: ./containers/ProductDetailsBook/ProductDetailsBook.tsx
var ProductDetailsBook_jsx = external_react_default.a.createElement;












const ProductDetailsBook_ProductDetails = ({
  product,
  deviceType
}) => {
  const {
    addItem,
    removeItem,
    getItem,
    isInCart,
    items
  } = Object(use_cart["b" /* useCart */])();
  const data = product;
  const scrollRef = Object(external_react_["useRef"])(null);

  const scrollToDiv = e => {
    e.preventDefault(); // scrollRef.current.scrollIntoView({ behavior: 'smooth' });

    window.scrollTo({
      top: scrollRef.current.getBoundingClientRect().top + window.pageYOffset - 65,
      behavior: 'smooth'
    });
  };

  const handleAddClick = e => {
    e.stopPropagation();
    addItem(data);
  };

  const handleRemoveClick = e => {
    e.stopPropagation();
    removeItem(data);
  };

  Object(external_react_["useEffect"])(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 500);
  }, []);
  return ProductDetailsBook_jsx(external_react_default.a.Fragment, null, ProductDetailsBook_jsx(ProductDetailsBook_style_ProductDetailsWrapper, {
    className: "product-card"
  }, ProductDetailsBook_jsx(ProductDetailsBook_style_ProductPreview, null, ProductDetailsBook_jsx(ProductDetailsBook_style_BackButton, null, ProductDetailsBook_jsx(Button["a" /* default */], {
    title: "Back",
    intlButtonId: "backBtn",
    iconPosition: "left",
    size: "small",
    style: {
      backgroundColor: '#ffffff',
      border: '1px solid #f1f1f1',
      color: '#77798c'
    },
    icon: ProductDetailsBook_jsx(AllSvgIcon["LongArrowLeft"], null),
    onClick: router_default.a.back
  })), ProductDetailsBook_jsx("img", {
    src: product.gallery[0].url,
    alt: product.title,
    className: "product-image"
  })), ProductDetailsBook_jsx(ProductDetailsBook_style_ProductInfo, null, ProductDetailsBook_jsx(BookTitle, null, product.title), ProductDetailsBook_jsx(AuthorName, null, ProductDetailsBook_jsx(AllSvgIcon["InkPen"], null), " ", product.author.name), ProductDetailsBook_jsx(BookDescriptionWrapper, null, ProductDetailsBook_jsx(BookDescription, null, product.description.substring(0, 600), ProductDetailsBook_jsx("a", {
    href: "#",
    onClick: scrollToDiv,
    style: {
      color: '#009e7f',
      fontWeight: 700
    }
  }, "Read More")), ProductDetailsBook_jsx(BookMetaTable, null, product.meta ? Object.entries(product.meta).map(([item], i, arr) => i !== arr.length - 1 && i !== arr.length - 2 ? ProductDetailsBook_jsx(BookMetaTableRow, {
    key: i
  }, ProductDetailsBook_jsx(BookMetaItem, null, item.replace(/^[a-z]|[A-Z]/g, function (v, i) {
    return i === 0 ? v.toUpperCase() : ' ' + v.toLowerCase();
  })), ProductDetailsBook_jsx(BookMetaItem, null, item === 'languages' ? product.meta[item].map((lang, i, arr) => lang.charAt(0).toUpperCase() + lang.slice(1) + (i !== arr.length - 1 ? ', ' : '')) : product.meta[item])) : '') : '')), ProductDetailsBook_jsx(ProductDetailsBook_style_ProductCartWrapper, null, ProductDetailsBook_jsx(ProductDetailsBook_style_ProductPriceWrapper, null, product.discountInPercent ? ProductDetailsBook_jsx(ProductDetailsBook_style_SalePrice, null, constant["a" /* CURRENCY */], product.price) : '', ProductDetailsBook_jsx(ProductDetailsBook_style_ProductPrice, null, constant["a" /* CURRENCY */], product.salePrice ? product.salePrice : product.price)), ProductDetailsBook_jsx(ProductDetailsBook_style_ProductCartBtn, null, !isInCart(data.id) ? ProductDetailsBook_jsx(Button["a" /* default */], {
    title: "Add to Cart",
    intlButtonId: "addToCartButton",
    iconPosition: "left",
    size: "small",
    className: "cart-button",
    icon: ProductDetailsBook_jsx(AllSvgIcon["CartIcon"], null),
    onClick: handleAddClick
  }) : ProductDetailsBook_jsx(Counter["a" /* Counter */], {
    value: getItem(data.id).quantity,
    onDecrement: handleRemoveClick,
    onIncrement: handleAddClick
  }), product.meta && product.meta.samplePDF.length !== 0 ? ProductDetailsBook_jsx(Button["a" /* default */], {
    title: "Read Free Sample",
    intlButtonId: "readFreeSampleButton",
    iconPosition: "left",
    size: "small",
    variant: "outlined",
    className: "outline-button",
    icon: ProductDetailsBook_jsx(AllSvgIcon["AdobeIcon"], null)
  }) : '')), ProductDetailsBook_jsx(ProductDetailsBook_style_ProductMeta, null, ProductDetailsBook_jsx(ProductDetailsBook_style_MetaSingle, null, product.categories ? product.categories.map(item => ProductDetailsBook_jsx(link_default.a, {
    href: `/${product.type}?category=${item.slug}`,
    key: `link-${item.id}`
  }, ProductDetailsBook_jsx("a", null, ProductDetailsBook_jsx(ProductDetailsBook_style_MetaItem, null, item.title)))) : '')))), ProductDetailsBook_jsx(DetailsWrapper, {
    ref: scrollRef
  }, ProductDetailsBook_jsx(DetailsTitle, null, ProductDetailsBook_jsx(external_react_intl_["FormattedMessage"], {
    id: "bookSectionTitle",
    defaultMessage: "About The Book"
  })), ProductDetailsBook_jsx(Description, null, product.description)), ProductDetailsBook_jsx(DetailsWrapper, null, ProductDetailsBook_jsx(DetailsTitle, null, ProductDetailsBook_jsx(external_react_intl_["FormattedMessage"], {
    id: "authorSectionTitle",
    defaultMessage: "About The Author"
  })), ProductDetailsBook_jsx(AuthorName, null, product.author.avatar && product.author.avatar.length !== 0 ? ProductDetailsBook_jsx(Avatar, null, ProductDetailsBook_jsx("img", {
    src: product.author.avatar,
    alt: product.author.name
  })) : ProductDetailsBook_jsx(AllSvgIcon["InkPen"], null), product.author.name), ProductDetailsBook_jsx(Description, null, product.author.bio), ProductDetailsBook_jsx(SocialNetworks, null, product.author && product.author.socials.map(item => item.profileLink.length !== 0 ? ProductDetailsBook_jsx(SocialIcon, null, ProductDetailsBook_jsx("a", {
    key: item.id,
    href: item.profileLink,
    target: "_blank"
  }, item.media === 'facebook' ? ProductDetailsBook_jsx(AllSvgIcon["Facebook"], {
    color: "#3b5999"
  }) : item.media === 'twitter' ? ProductDetailsBook_jsx(AllSvgIcon["Twitter"], {
    color: "#55acee"
  }) : item.media === 'google' ? ProductDetailsBook_jsx(AllSvgIcon["GooglePlus"], {
    color: "#dd4b39"
  }) : item.media === 'linkedin' ? ProductDetailsBook_jsx(AllSvgIcon["Linkedin"], {
    color: "#0077B5"
  }) : '')) : ''))), ProductDetailsBook_jsx(ProductDetailsBook_style_RelatedItems, null, ProductDetailsBook_jsx("h2", null, ProductDetailsBook_jsx(external_react_intl_["FormattedMessage"], {
    id: "intlReletedItems",
    defaultMessage: "Related Items"
  })), ProductDetailsBook_jsx(ProductsBook, {
    type: product.type.toLowerCase(),
    deviceType: deviceType,
    loadMore: false,
    fetchLimit: 10
  })));
};

/* harmony default export */ var ProductDetailsBook = (ProductDetailsBook_ProductDetails);
// EXTERNAL MODULE: external "@redq/reuse-modal"
var reuse_modal_ = __webpack_require__("qbum");

// CONCATENATED MODULE: ./styled/product-single.style.tsx

const ProductSingleWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "product-singlestyle__ProductSingleWrapper",
  componentId: "mnqpjp-0"
})(["padding:100px 0 60px 0;position:relative;background-color:#f7f7f7;@media (max-width:1400px){padding-top:90px;}@media (max-width:990px){padding-top:60px;}"]);
const ProductSingleContainer = external_styled_components_default.a.div.withConfig({
  displayName: "product-singlestyle__ProductSingleContainer",
  componentId: "mnqpjp-1"
})(["width:100%;"]);
const RelatedItemContainer = external_styled_components_default.a.div.withConfig({
  displayName: "product-singlestyle__RelatedItemContainer",
  componentId: "mnqpjp-2"
})(["display:flex;flex-wrap:wrap;margin-left:-15px;margin-right:-15px;@media (max-width:1199px) and (min-width:990px){margin-left:-10px;margin-right:-10px;}@media (max-width:768px){margin-left:-7.5px;margin-right:-7.5px;}"]);
const RealatedItemCol = external_styled_components_default.a.div.withConfig({
  displayName: "product-singlestyle__RealatedItemCol",
  componentId: "mnqpjp-3"
})(["flex:0 0 20%;max-width:20%;padding-left:15px;padding-right:15px;margin-bottom:30px;@media (max-width:1500px){flex:0 0 20%;max-width:20%;}@media (max-width:1200px){flex:0 0 33.3333333%;max-width:33.3333333%;}@media (max-width:1199px) and (min-width:991px){padding-left:10px;padding-right:10px;}@media (max-width:768px){padding-left:7.5px;padding-right:7.5px;margin-bottom:15px;}@media (max-width:767px){flex:0 0 50%;max-width:50%;}"]);
const Loading = external_styled_components_default.a.div.withConfig({
  displayName: "product-singlestyle__Loading",
  componentId: "mnqpjp-4"
})(["width:100%;padding:10px;display:flex;align-items:center;justify-content:center;font-size:14px;color:#222222;"]);
/* harmony default export */ var product_single_style = (ProductSingleWrapper);
// EXTERNAL MODULE: ./containers/Cart/CartPopUp.tsx + 7 modules
var CartPopUp = __webpack_require__("NuC5");

// EXTERNAL MODULE: ./helper/apollo.js
var apollo = __webpack_require__("ZNCQ");

// EXTERNAL MODULE: ./graphql/query/product.query.ts
var product_query = __webpack_require__("QgM5");

// CONCATENATED MODULE: ./pages/product/[slug].tsx
var _slug_jsx = external_react_default.a.createElement;













const ProductPage = ({
  deviceType
}) => {
  const {
    query: {
      slug
    }
  } = Object(router_["useRouter"])();
  const {
    data,
    error,
    loading
  } = Object(react_hooks_["useQuery"])(product_query["b" /* GET_PRODUCT_DETAILS */], {
    variables: {
      slug
    }
  }); // console.log(data)

  if (loading) {
    return _slug_jsx(Loader["a" /* LoaderWrapper */], null);
  }

  if (error) return _slug_jsx("div", {
    style: {
      padding: "150px 0 0 0"
    }
  }, "Error: ", error.message);
  let content;

  switch (data.product.Type) {
    case 'BOOK':
      {
        content = _slug_jsx(ProductDetailsBook, {
          product: data.product,
          deviceType: deviceType
        });
        break;
      }

    default:
      {
        content = _slug_jsx(ProductDetails_ProductDetails, {
          product: data.product,
          deviceType: deviceType
        });
      }
  }

  return _slug_jsx(external_react_default.a.Fragment, null, _slug_jsx(seo["a" /* SEO */], {
    title: `${data.product.title} - PickBazar`,
    description: `${data.product.title} Details`
  }), _slug_jsx(reuse_modal_["Modal"], null, _slug_jsx(product_single_style, null, _slug_jsx(ProductSingleContainer, null, content, _slug_jsx(CartPopUp["a" /* default */], {
    deviceType: deviceType
  })))));
};

/* harmony default export */ var _slug_ = __webpack_exports__["default"] = (Object(apollo["a" /* withApollo */])(ProductPage));

/***/ }),

/***/ "99J/":
/***/ (function(module, exports) {

module.exports = require("react-multi-carousel");

/***/ }),

/***/ "9aLd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return InjectRTL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalStyle; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("/JeY");
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__);


const TIMEOUT = 400;
const InjectRTL = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "globalstyle__InjectRTL",
  componentId: "d2oxe7-0"
})(["", ""], ({
  lang
}) => (lang === 'ar' || lang === 'he') && `
    font-family: 'Cairo', sans-serif;
    `);
const GlobalStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__["createGlobalStyle"]`
  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body{
    margin: 0;
    font-family: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontFamily.0', 'sans-serif')};
  }

  h1,h2,h3,h4,h5,h6  {
    font-family: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontFamily.1', 'sans-serif')};
    margin: 0;
  }

  p,a,span,button,li,div  {
    font-family: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontFamily.0', 'sans-serif')};
    margin: 0;
  }
  ul{
    margin: 0;
    padding: 0;
  }
  li{
    list-style: none;
  }

  a{
    text-decoration: none;
  }

  .quick-view-overlay{
    background-color: rgba(0,0,0,.5)
  }

  .add-address-modal,
  .add-contact-modal{
    box-shadow: 0 10px 40px rgba(0,0,0,0.16);
    border-radius: 3px !important;
    .innerRndComponent{
      width: 100%;
      padding: 30px;
      height: auto;
      background-color: #f7f8f9;
      border: 0;
      box-sizing: border-box;
    }
  }

  .search-modal-mobile{
    transform: none!important;
    max-width: none!important;
    max-height: none!important;
    top: 0!important;
    left: 0!important;
    background: transparent!important;;
    border-radius: 0!important;
  }

  .reuseModalCloseBtn{
    right: 10px!important;
    background-color: #ffffff!important;
    color: #222222!important;
    border-radius: 15px!important;
    padding: 0 9px!important;
    box-shadow: 0 2px 8px rgba(0,0,0,0.4);
  }



  .page-transition-enter {
    opacity: 0;
    transform: translate3d(0, 20px, 0);
  }
  .page-transition-enter-active {
    opacity: 1;
    transform: translate3d(0, 0, 0);
    transition: opacity ${TIMEOUT}ms, transform ${TIMEOUT}ms;
  }
  .page-transition-exit {
    opacity: 1;
  }
  .page-transition-exit-active {
    opacity: 0;
    transition: opacity ${TIMEOUT}ms;
  }
  .loading-indicator-appear,
  .loading-indicator-enter {
    opacity: 0;
  }
  .loading-indicator-appear-active,
  .loading-indicator-enter-active {
    opacity: 1;
    transition: opacity ${TIMEOUT}ms;
  }

  .image-item{
    padding: 0 15px;
  }

  @media (max-width: 1199px) and (min-width: 991px) {
    .image-item{
      padding-left: 10px;
      padding-right: 10px;
    }
  }
  @media (max-width: 768px) {
    .image-item{
      padding-left: 7.5px;
      padding-right: 7.5px;
    }
  }

  .rc-table-fixed-header .rc-table-scroll .rc-table-header{
    margin-bottom: 0 !important;
    padding-bottom: 0 !important;

    th {
      padding: 8px 20px;
      }
  }

  .drawer-content-wrapper{
    *:focus {
      outline: none;
    }
  }

  .rc-table-content{
    border: 0;
  }

`;

/***/ }),

/***/ "AroE":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "C+bE":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "EGWi":
/***/ (function(module, exports) {

module.exports = require("react-content-loader");

/***/ }),

/***/ "ExBD":
/***/ (function(module, exports) {

module.exports = require("@styled-system/css");

/***/ }),

/***/ "Fzwq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return ProductCardWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return ProductPreviewWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return ProductImageWrapper; });
/* unused harmony export SaleTag */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return DiscountPercent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return ProductInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return BookImageWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return BookInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return ProductName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthorInfo; });
/* unused harmony export AddCartBox */
/* unused harmony export PriceWrapper */
/* unused harmony export Price */
/* unused harmony export DiscountedPrice */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return BookCardWrapper; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("/JeY");
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__);


const ProductCardWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ProductCardstyle__ProductCardWrapper",
  componentId: "sc-14yo7ej-0"
})(["overflow:hidden;height:100%;width:100%;background-color:#fff;position:relative;font-family:'Lato',sans-serif;border-radius:6px;cursor:pointer;"]);
const ProductPreviewWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ProductCardstyle__ProductPreviewWrapper",
  componentId: "sc-14yo7ej-1"
})(["position:absolute;top:0;left:0;right:0;bottom:0;background-color:rgba(0,0,0,.3);z-index:100;transition:1s;display:", ";align-items:center;justify-content:center;"], ({
  isOpen
}) => isOpen ? 'flex' : 'none');
const ProductImageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ProductCardstyle__ProductImageWrapper",
  componentId: "sc-14yo7ej-2"
})(["height:240px;padding:5px;position:relative;text-align:center;display:flex;align-items:center;justify-content:center;img{max-width:100%;max-height:100%;display:inline-block;}@media (max-width:767px){height:145px;}"]);
const SaleTag = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig({
  displayName: "ProductCardstyle__SaleTag",
  componentId: "sc-14yo7ej-3"
})(["font-family:'Lato',sans-serif;font-size:", "px;font-weight:", ";color:#ffffff;background-color:", ";padding:0 10px;line-height:24px;border-radius:12px;display:inline-block;position:absolute;top:10px;right:10px;"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.1', '13'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.6', '700'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.yellow', '#FBB979'));
const DiscountPercent = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig({
  displayName: "ProductCardstyle__DiscountPercent",
  componentId: "sc-14yo7ej-4"
})(["font-family:'Lato',sans-serif;font-size:", "px;font-weight:", ";color:#ffffff;line-height:24px;background-color:", ";padding-left:10px;padding-right:10px;position:relative;display:inline-block;position:absolute;top:15px;right:15px;border-radius:12px;"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.1', '13'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.6', '700'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.yellow', '#FBB979'));
const ProductInfo = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ProductCardstyle__ProductInfo",
  componentId: "sc-14yo7ej-5"
})(["padding:20px 25px 30px;@media (max-width:767px){padding:15px 20px;min-height:123px;}.product-title{font-family:'Lato',sans-serif;font-size:", "px;font-weight:", ";color:", ";margin:0 0 7px 0;width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;@media (max-width:767px){font-size:14px;margin:0 0 5px 0;}}.product-weight{font-family:'Lato',sans-serif;font-size:", "px;font-weight:", ";color:", ";@media (max-width:767px){font-size:12px;}}.product-meta{margin-top:30px;display:flex;align-items:center;justify-content:space-between;@media (max-width:767px){min-height:32px;}.productPriceWrapper{position:relative;display:flex;flex-direction:column;align-items:flex-start;.product-price{font-family:'Lato',sans-serif;font-size:", "px;font-weight:", ";color:", ";@media (max-width:767px){font-size:14px;}}.discountedPrice{font-family:'Lato',sans-serif;font-size:", "px;font-weight:", ";color:", ";font-style:italic;padding:0 5px;position:relative;overflow:hidden;position:absolute;top:-20px;left:-4px;&:before{content:'';width:100%;height:1px;display:inline-block;background-color:", ";position:absolute;top:50%;left:0;}}}.cart-button{border:2px solid #f7f7f7;border-radius:18px;height:36px;padding-left:17px;padding-right:17px;font-size:", "px;font-weight:", ";@media (max-width:767px){width:32px;height:32px;padding:0;border-radius:50%;}.btn-text{padding:0 0 0 6px;@media (max-width:767px){display:none;}}&:hover{color:#fff;background-color:#009e7f;border-color:#009e7f;}svg{fill:currentColor;}}@media (max-width:767px){.quantity{width:32px;height:90px;display:block;flex-shrink:0;position:absolute;bottom:15px;right:15px;z-index:1;box-shadow:0 10px 20px rgba(0,0,0,0.16);}button{width:100%;height:27px;}.incBtn{top:0;justify-content:center;}.decBtn{top:auto;bottom:0;justify-content:center;}input[type='number']{left:0;color:#222222;font-size:14px;height:calc(100% - 54px);position:absolute;top:27px;width:100%;color:#fff;}}}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.2', '15'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.6', '700'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.darkBold', '#0D1136'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.1', '13'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.3', '400'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.darkRegular', '#77798c'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.2', '15'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.6', '700'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary', '#009E7F'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.1', '13'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.3', '400'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.yellow', '#FBB979'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.yellow', '#FBB979'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.1', '13'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.6', '700'));
const BookImageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ProductCardstyle__BookImageWrapper",
  componentId: "sc-14yo7ej-6"
})(["height:275px;padding:0;position:relative;text-align:center;display:flex;align-items:center;justify-content:center;margin-bottom:15px;img{max-width:100%;max-height:100%;display:inline-block;}@media (max-width:767px){height:215px;}", "{top:0;right:0;}"], DiscountPercent);
const BookInfo = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ProductCardstyle__BookInfo",
  componentId: "sc-14yo7ej-7"
})(["padding:0;width:100%;display:flex;flex-direction:column;align-items:center;@media (max-width:767px){padding:15px 0px 0px;}"]);
const ProductName = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig({
  displayName: "ProductCardstyle__ProductName",
  componentId: "sc-14yo7ej-8"
})(["font-family:'Lato',sans-serif;font-size:", "px;font-weight:", ";color:", ";margin:0 0 7px 0;width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;text-align:center;display:block;&:only-child{margin:0;}@media (max-width:767px){font-size:14px;margin:0 0 5px 0;}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.2', '15'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.6', '700'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.darkBold', '#0D1136'));
const AuthorInfo = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig({
  displayName: "ProductCardstyle__AuthorInfo",
  componentId: "sc-14yo7ej-9"
})(["font-family:'Lato',sans-serif;font-size:", "px;font-weight:", ";color:", ";@media (max-width:767px){font-size:", "px;}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.1', '13'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.3', '400'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.darkRegular', '#77798c'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.1', '13'));
const AddCartBox = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ProductCardstyle__AddCartBox",
  componentId: "sc-14yo7ej-10"
})(["width:calc(100% - 40px);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:20px;border-radius:6px;background-color:#ffffff;box-shadow:0 10px 20px rgba(0,0,0,0.16);position:absolute;top:50%;left:50%;opacity:0;transition:all 0.3s;.cart-button{border-radius:18px;height:36px;padding-left:17px;padding-right:17px;font-size:", " px;font-weight:", ";@media (max-width:767px){width:32px;height:32px;padding:0;border-radius:50%;}.btn-text{padding:0 0 0 6px;@media (max-width:767px){display:none;}}&:hover{color:#fff;background-color:#009e7f;border-color:#009e7f;}svg{fill:currentColor;}}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.1', '13'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.6', '700'));
const PriceWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ProductCardstyle__PriceWrapper",
  componentId: "sc-14yo7ej-11"
})(["position:relative;display:flex;flex-direction:column;align-items:flex-start;margin-bottom:15px;"]);
const Price = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig({
  displayName: "ProductCardstyle__Price",
  componentId: "sc-14yo7ej-12"
})(["font-family:'Lato',sans-serif;font-size:", " px;font-weight:", ";color:", ";@media (max-width:767px){font-size:14px;}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.2', '15'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.6', '700'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary', '#009E7F'));
const DiscountedPrice = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig({
  displayName: "ProductCardstyle__DiscountedPrice",
  componentId: "sc-14yo7ej-13"
})(["font-family:'Lato',sans-serif;font-size:", " px;font-weight:", ";color:", ";font-style:italic;padding:0 5px;position:relative;overflow:hidden;margin-bottom:5px;margin-left:-4px;&:before{content:'';width:100%;height:1px;display:inline-block;background-color:", ";position:absolute;top:50%;left:0;}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.1', '13'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.3', '400'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.yellow', '#FBB979'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.yellow', '#FBB979'));
const BookCardWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ProductCardstyle__BookCardWrapper",
  componentId: "sc-14yo7ej-14"
})(["height:100%;width:100%;padding:30px;background-color:#fff;position:relative;font-family:'Lato',sans-serif;border-radius:6px;cursor:pointer;&:hover{", "{opacity:1;}}@media (max-width:767px){padding:15px;}"], AddCartBox);

/***/ }),

/***/ "HBHh":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/no-result-a242b3bc908f26b79710c3d30f5230ac.svg";

/***/ }),

/***/ "IF2T":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return ProductsRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ButtonWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return ProductsCol; });
/* unused harmony export MedicineCol */
/* unused harmony export NoResult */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return LoaderWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LoaderItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ProductCardWrapper; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("/JeY");
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__);


const ProductsRow = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Productsstyle__ProductsRow",
  componentId: "p6azvq-0"
})(["display:flex;flex-wrap:wrap;margin-top:25px;background-color:#f7f7f7;position:relative;z-index:1;margin:0 -15px;@media (max-width:768px){margin-left:-7.5px;margin-right:-7.5px;margin-top:15px;}"]);
const ButtonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Productsstyle__ButtonWrapper",
  componentId: "p6azvq-1"
})(["text-align:center;margin-top:30px;"]);
const ProductsCol = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Productsstyle__ProductsCol",
  componentId: "p6azvq-2"
})(["flex:0 0 20%;max-width:20%;padding-left:15px;padding-right:15px;margin-bottom:30px;.book-card{border-radius:0;}&.food-col{flex:0 0 25%;max-width:25%;}@media (min-width:1501px){&:nth-child(5n + 1){.book-card{border-radius:6px 0 0 6px;}}&:nth-child(5n){.book-card{border-radius:0 6px 6px 0;}}}@media (min-width:1301px) and (max-width:1500px){flex:0 0 25%;max-width:25%;&.food-col{flex:0 0 33.333%;max-width:33.333%;}&:nth-child(4n + 1){.book-card{border-radius:6px 0 0 6px;}}&:nth-child(4n){.book-card{border-radius:0 6px 6px 0;}}}@media (min-width:768px) and (max-width:1300px){flex:0 0 33.3333333%;max-width:33.3333333%;&.food-col{flex:0 0 33.3333333%;max-width:33.3333333%;padding-left:7.5px;padding-right:7.5px;margin-bottom:15px;}&:nth-child(3n + 1){.book-card{border-radius:6px 0 0 6px;}}&:nth-child(3n){.book-card{border-radius:0 6px 6px 0;}}}@media (max-width:1199px) and (min-width:991px){padding-left:10px;padding-right:10px;margin-bottom:20px;&.food-col{flex:0 0 50%;max-width:50%;}}@media (max-width:768px){padding-left:7.5px;padding-right:7.5px;margin-bottom:15px;}@media (max-width:767px){flex:0 0 50%;max-width:50%;&.food-col{flex:0 0 50%;max-width:50%;}&:nth-child(2n + 1){.book-card{border-radius:6px 0 0 6px;}}&:nth-child(2n){.book-card{border-radius:0 6px 6px 0;}}}@media (max-width:480px){&.food-col{flex:0 0 100%;max-width:100%;}}"]);
const MedicineCol = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Productsstyle__MedicineCol",
  componentId: "p6azvq-3"
})(["flex:0 0 20%;max-width:20%;padding-left:15px;padding-right:15px;margin-bottom:30px;@media (max-width:1300px){flex:0 0 25%;max-width:25%;padding-left:10px;padding-right:10px;}@media (max-width:1099px) and (min-width:1025px){flex:0 0 33.333%;max-width:33.333%;}@media (max-width:767px){flex:0 0 33.333%;max-width:33.333%;padding-left:10px;padding-right:10px;margin-bottom:30px;}@media (max-width:560px){flex:0 0 50%;max-width:50%;padding-left:7.5px;padding-right:7.5px;margin-bottom:20px;}"]);
const NoResult = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Productsstyle__NoResult",
  componentId: "p6azvq-4"
})(["width:100%;padding:100px 30px;display:flex;justify-content:center;align-items:center;font-family:", ";font-size:", "px;font-weight:", ";color:", ";"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontFamily.0', 'sans-serif'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.4', '21'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.6', '700'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.darkBold', '#0D1136'));
const LoaderWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Productsstyle__LoaderWrapper",
  componentId: "p6azvq-5"
})(["width:100%;height:100vh;display:flex;flex-wrap:wrap;"]);
const LoaderItem = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Productsstyle__LoaderItem",
  componentId: "p6azvq-6"
})(["width:25%;padding:0 15px;margin-bottom:30px;"]);
const ProductCardWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Productsstyle__ProductCardWrapper",
  componentId: "p6azvq-7"
})(["height:100%;> div{height:100%;}"]);

/***/ }),

/***/ "IYOs":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: ./components/NoResult/no-result.svg
var no_result = __webpack_require__("HBHh");
var no_result_default = /*#__PURE__*/__webpack_require__.n(no_result);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./components/NoResult/NoResult.style.tsx

const NoResultWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "NoResultstyle__NoResultWrapper",
  componentId: "sc-1nksycu-0"
})(["width:100%;display:flex;flex-direction:column;align-items:center;padding:50px 20px;h3{font-size:24px;font-weight:700;color:#0D1136;margin:0 0 15px;}p{font-size:16px;font-weight:400;color:#707070;margin:0;}"]);
const ImageWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "NoResultstyle__ImageWrapper",
  componentId: "sc-1nksycu-1"
})(["margin-top:50px;width:100%;max-width:600px;display:flex;align-items:center;justify-content:center;img{max-width:100%;}"]);
const ButtonWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "NoResultstyle__ButtonWrapper",
  componentId: "sc-1nksycu-2"
})(["width:100%;display:flex;justify-content:center;margin-top:70px;"]);
const Button = external_styled_components_default.a.button.withConfig({
  displayName: "NoResultstyle__Button",
  componentId: "sc-1nksycu-3"
})(["cursor:pointer;display:inline-flex;align-items:center;justify-content:center;color:#ffffff;background-color:#009e7f;height:50px;border-radius:6px;font-family:'Lato',sans-serif;font-size:16px;font-weight:700;text-decoration:none;text-transform:capitalize;padding:0 30px;border:0;transition:all 0.3s ease;"]);
// EXTERNAL MODULE: ./components/Button/Button.tsx + 2 modules
var Button_Button = __webpack_require__("89Ff");

// EXTERNAL MODULE: ./components/AllSvgIcon.tsx
var AllSvgIcon = __webpack_require__("yBv+");

// EXTERNAL MODULE: ./contexts/search/search.context.tsx
var search_context = __webpack_require__("s5Ij");

// CONCATENATED MODULE: ./components/NoResult/NoResult.tsx
var __jsx = external_react_default.a.createElement;








const NoResultFound = ({
  id
}) => {
  const router = Object(router_["useRouter"])();
  const {
    dispatch
  } = external_react_default.a.useContext(search_context["a" /* SearchContext */]);

  function onClickButton() {
    dispatch({
      type: 'RESET'
    });
    const href = router.pathname;
    router.push(href, href, {
      shallow: true
    });
  }

  return __jsx(NoResultWrapper, {
    id: id
  }, __jsx("h3", null, "Sorry, No result found :("), __jsx(ImageWrapper, null, __jsx("img", {
    src: no_result_default.a,
    alt: "No Result"
  })), __jsx(ButtonWrapper, null, __jsx("div", {
    onClick: onClickButton
  }, __jsx(Button_Button["a" /* default */], {
    title: "Go Back",
    iconPosition: "left",
    icon: __jsx(AllSvgIcon["ArrowPrev"], null)
  }))));
};

/* harmony default export */ var NoResult = __webpack_exports__["a"] = (NoResultFound);

/***/ }),

/***/ "IrP5":
/***/ (function(module, exports) {

module.exports = require("react-reveal/Fade");

/***/ }),

/***/ "LvlT":
/***/ (function(module, exports) {

module.exports = require("apollo-link-context");

/***/ }),

/***/ "LzHB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// UNUSED EXPORTS: Products

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: external "next/dynamic"
var dynamic_ = __webpack_require__("/T1H");
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic_);

// EXTERNAL MODULE: external "@redq/reuse-modal"
var reuse_modal_ = __webpack_require__("qbum");

// EXTERNAL MODULE: ./components/Image/Image.tsx
var Image = __webpack_require__("PDTj");

// EXTERNAL MODULE: ./components/Button/Button.tsx + 2 modules
var Button = __webpack_require__("89Ff");

// EXTERNAL MODULE: ./components/AllSvgIcon.tsx
var AllSvgIcon = __webpack_require__("yBv+");

// EXTERNAL MODULE: ./components/ProductCard/ProductCard.style.tsx
var ProductCard_style = __webpack_require__("Fzwq");

// EXTERNAL MODULE: ./contexts/cart/use-cart.tsx + 1 modules
var use_cart = __webpack_require__("4WSj");

// EXTERNAL MODULE: ./components/Counter/Counter.tsx + 2 modules
var Counter = __webpack_require__("gHRq");

// CONCATENATED MODULE: ./helper/cart-animation.ts
const cartAnimation = event => {
  const getClosest = function (elem, selector) {
    for (; elem && elem !== document; elem = elem.parentNode) {
      if (elem.matches(selector)) return elem;
    }

    return null;
  }; // start animation block


  let imgToDrag = getClosest(event.target, '.product-card');
  let viewCart = document.getElementsByClassName('product-cart')[0];
  let imgToDragImage = imgToDrag.querySelector('.product-image');
  let disLeft = imgToDrag.getBoundingClientRect().left;
  let disTop = imgToDrag.getBoundingClientRect().top;
  let cartLeft = viewCart.getBoundingClientRect().left;
  let cartTop = viewCart.getBoundingClientRect().top;
  let image = imgToDragImage.cloneNode(true);
  image.style = 'z-index: 11111; width: 100px;opacity:1; position:fixed; top:' + disTop + 'px;left:' + disLeft + 'px;transition: left 1s, top 1s, width 1s, opacity 1s cubic-bezier(1, 1, 1, 1);border-radius: 50px; overflow: hidden; box-shadow: 0 21px 36px rgba(0,0,0,0.1)';
  var reChange = document.body.appendChild(image);
  setTimeout(function () {
    image.style.left = cartLeft + 'px';
    image.style.top = cartTop + 'px';
    image.style.width = '40px';
    image.style.opacity = '0';
  }, 200);
  setTimeout(function () {
    reChange.parentNode.removeChild(reChange);
  }, 1000); // End Animation Block
};
// CONCATENATED MODULE: ./components/ProductCard/ProductCard.tsx
var __jsx = external_react_default.a.createElement;

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }











const ProductCard = (_ref) => {
  let {
    title,
    image,
    weight,
    price,
    salePrice,
    discountInPercent,
    cartProducts,
    addToCart,
    updateCart,
    value,
    currency,
    onChange,
    increment,
    decrement,
    data,
    deviceType,
    onClick,
    link
  } = _ref,
      props = _objectWithoutProperties(_ref, ["title", "image", "weight", "price", "salePrice", "discountInPercent", "cartProducts", "addToCart", "updateCart", "value", "currency", "onChange", "increment", "decrement", "data", "deviceType", "onClick", "link"]);

  const {
    addItem,
    removeItem,
    getItem,
    isInCart,
    items
  } = Object(use_cart["b" /* useCart */])();

  const handleAddClick = e => {
    // e.stopPropagation();
    e.preventDefault();
    addItem(data);

    if (!isInCart(data.id)) {
      cartAnimation(e);
    }
  };

  const handleRemoveClick = e => {
    // e.stopPropagation();
    e.preventDefault();
    removeItem(data);
  };

  const {
    0: isOpen,
    1: setIsOpen
  } = Object(external_react_["useState"])(false);

  const handleCLickPreview = e => {
    // e.stopPropagation()
    e.preventDefault();
    onClick(e);
  };

  const route = Object(router_["useRouter"])();
  return __jsx("a", {
    href: link,
    target: "_blank"
  }, __jsx(ProductCard_style["f" /* ProductCardWrapper */], {
    className: "product-card"
  }, __jsx(ProductCard_style["g" /* ProductImageWrapper */], {
    onClick: handleCLickPreview,
    onMouseOver: () => setIsOpen(true),
    onMouseOut: () => setIsOpen(false)
  }, __jsx(ProductCard_style["j" /* ProductPreviewWrapper */], {
    isOpen: isOpen
  }, __jsx(Button["a" /* default */], {
    size: "small",
    title: "preview"
  })), __jsx(Image["a" /* default */], {
    url: image,
    media: true,
    className: "product-image",
    style: {
      position: 'relative'
    },
    alt: title
  }), discountInPercent ? __jsx(external_react_default.a.Fragment, null, __jsx(ProductCard_style["e" /* DiscountPercent */], null, discountInPercent, "%")) : ''), __jsx(ProductCard_style["h" /* ProductInfo */], null, __jsx("h3", {
    className: "product-title"
  }, title), __jsx("span", {
    className: "product-weight"
  }, weight), __jsx("div", {
    className: "product-meta"
  }, __jsx("div", {
    className: "productPriceWrapper"
  }, discountInPercent ? __jsx("span", {
    className: "discountedPrice"
  }, currency, price) : '', __jsx("span", {
    className: "product-price"
  }, currency, salePrice ? salePrice : price)), !isInCart(data.id) ? __jsx(Button["a" /* default */], {
    title: "Cart",
    intlButtonId: "addCartButton",
    iconPosition: "left",
    colors: "primary",
    size: "small",
    variant: "outlined",
    className: "cart-button",
    icon: __jsx(AllSvgIcon["CartIcon"], null),
    onClick: handleAddClick
  }) : __jsx(Counter["a" /* Counter */], {
    value: getItem(data.id).quantity,
    onDecrement: handleRemoveClick,
    onIncrement: handleAddClick
  })))));
};

/* harmony default export */ var ProductCard_ProductCard = (ProductCard);
// EXTERNAL MODULE: ./containers/Products/Products.style.tsx
var Products_style = __webpack_require__("IF2T");

// EXTERNAL MODULE: ./helper/constant.ts
var constant = __webpack_require__("5kK8");

// EXTERNAL MODULE: external "@apollo/react-hooks"
var react_hooks_ = __webpack_require__("mU8t");

// EXTERNAL MODULE: ./components/Loader/Loader.tsx
var Loader = __webpack_require__("noiX");

// EXTERNAL MODULE: ./components/Placeholder/Placeholder.tsx
var Placeholder = __webpack_require__("cnNH");

// EXTERNAL MODULE: external "react-reveal/Fade"
var Fade_ = __webpack_require__("IrP5");
var Fade_default = /*#__PURE__*/__webpack_require__.n(Fade_);

// EXTERNAL MODULE: ./components/NoResult/NoResult.tsx + 1 modules
var NoResult = __webpack_require__("IYOs");

// EXTERNAL MODULE: ./graphql/query/product.query.ts
var product_query = __webpack_require__("QgM5");

// EXTERNAL MODULE: ./contexts/auth/auth.context.tsx
var auth_context = __webpack_require__("j5Ji");

// CONCATENATED MODULE: ./containers/Products/Products.tsx
var Products_jsx = external_react_default.a.createElement;















 // import { getLocalState } from 'helper/localStorage';
// import fakeDB from '../../helper/fakeDB';

const QuickView = dynamic_default()(() => __webpack_require__.e(/* import() */ 16).then(__webpack_require__.bind(null, "q8M2")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("q8M2")],
    modules: ['../QuickView/QuickView']
  }
});
const Products = props => {
  const {
    deviceType,
    type,
    fetchLimit = 8,
    loadMore = true
  } = props; // console.log(type, "Hello")

  const router = Object(router_["useRouter"])();
  const {
    0: loadingMore,
    1: toggleLoading
  } = Object(external_react_["useState"])(false);
  let {
    data,
    error,
    loading,
    fetchMore
  } = Object(react_hooks_["useQuery"])(product_query["a" /* GET_PRODUCTS */], {
    variables: {
      type: router.query.type,
      offset: 0,
      limit: fetchLimit,
      text: router.query.text,
      category: router.query.category
    }
  }); // console.log(data)
  // Quick View Modal

  const handleModalClose = () => {
    const as = router.asPath;
    router.push(as, as, {
      shallow: true
    });
    Object(reuse_modal_["closeModal"])();
  };

  const handleQuickViewModal = (modalProps, deviceType, onModalClose) => {
    if (router.pathname === '/product/[slug]') {
      const as = `/product/${modalProps.slug}`;
      router.push(router.pathname, as);
      return;
    }

    Object(reuse_modal_["openModal"])({
      show: true,
      overlayClassName: 'quick-view-overlay',
      closeOnClickOutside: false,
      component: QuickView,
      componentProps: {
        modalProps,
        deviceType,
        onModalClose
      },
      closeComponent: 'div',
      config: {
        enableResizing: false,
        disableDragging: true,
        className: 'quick-view-modal',
        width: 900,
        y: 30,
        height: 'auto',
        transition: {
          mass: 1,
          tension: 0,
          friction: 0
        }
      }
    });
    const href = router.asPath;
    const as = `/product/${modalProps.slug}`;
    router.push(href, as, {
      shallow: true
    });
  };

  if (loading) {
    return Products_jsx(Products_style["c" /* LoaderWrapper */], null, Products_jsx(Products_style["b" /* LoaderItem */], null, Products_jsx(Placeholder["c" /* default */], null)), Products_jsx(Products_style["b" /* LoaderItem */], null, Products_jsx(Placeholder["c" /* default */], null)), Products_jsx(Products_style["b" /* LoaderItem */], null, Products_jsx(Placeholder["c" /* default */], null)));
  }

  const {
    authDispatch
  } = Object(external_react_["useContext"])(auth_context["a" /* AuthContext */]);

  if (error) {
    if (error.message === "Network error: Failed to fetch") {
      return Products_jsx("div", null, "\"Network error!!!\"");
    }

    if (error.message === "GraphQL error: Error decoding signature") {
      router_default.a.push('/logout');
    } // console.log(error.message)


    return null; // authDispatch({type:'SIGN_OUT'});
    // return "Error"
    // alert('Error' + error)
  }

  if (!data || !data.products || data.products.items.length === 0) {
    return Products_jsx(NoResult["a" /* default */], null);
  }

  const handleLoadMore = () => {
    toggleLoading(true);
    fetchMore({
      variables: {
        offset: Number(data.products.items.length),
        limit: fetchLimit
      },
      updateQuery: (prev, {
        fetchMoreResult
      }) => {
        toggleLoading(false);

        if (!fetchMoreResult) {
          return prev;
        }

        return {
          products: {
            __typename: prev.products.__typename,
            items: [...prev.products.items, ...fetchMoreResult.products.items],
            hasMore: fetchMoreResult.products.hasMore
          }
        };
      }
    });
  };

  return Products_jsx(external_react_default.a.Fragment, null, Products_jsx(Products_style["f" /* ProductsRow */], null, data.products.items.map((item, index) => {
    var _item$images$;

    return Products_jsx(Products_style["e" /* ProductsCol */], {
      key: index
    }, (() => {
      item.discountInPercent = item.discountPercent;
    })(), Products_jsx(Products_style["d" /* ProductCardWrapper */], null, Products_jsx(Fade_default.a, {
      duration: 800,
      delay: index * 10,
      style: {
        height: '100%'
      }
    }, Products_jsx(ProductCard_ProductCard, {
      title: item.title,
      description: item.description,
      image: (_item$images$ = item.images[0]) === null || _item$images$ === void 0 ? void 0 : _item$images$.image,
      weight: item.unit,
      currency: constant["a" /* CURRENCY */],
      price: item.price,
      salePrice: item.salePrice,
      discountInPercent: item.discountPercent,
      data: item,
      deviceType: deviceType,
      link: '/product/' + item.slug,
      onClick: () => handleQuickViewModal(item, deviceType, handleModalClose)
    }))));
  })), loadMore && data.hasMore && Products_jsx(Products_style["a" /* ButtonWrapper */], null, Products_jsx(Button["a" /* default */], {
    onClick: handleLoadMore,
    title: "Load More",
    intlButtonId: "loadMoreBtn",
    size: "small",
    isLoading: loadingMore,
    loader: Products_jsx(Loader["b" /* default */], {
      color: "#009E7F"
    }),
    style: {
      minWidth: 135,
      backgroundColor: '#ffffff',
      border: '1px solid #f1f1f1',
      color: '#009E7F'
    }
  })));
};
/* harmony default export */ var Products_Products = __webpack_exports__["a"] = (Products);

/***/ }),

/***/ "NuC5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "@redq/reuse-modal"
var reuse_modal_ = __webpack_require__("qbum");

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "graphql-tag"
var external_graphql_tag_ = __webpack_require__("txk1");
var external_graphql_tag_default = /*#__PURE__*/__webpack_require__.n(external_graphql_tag_);

// EXTERNAL MODULE: external "@apollo/react-hooks"
var react_hooks_ = __webpack_require__("mU8t");

// EXTERNAL MODULE: external "@styled-system/theme-get"
var theme_get_ = __webpack_require__("/JeY");

// CONCATENATED MODULE: ./containers/Cart/CartItemCard.style.tsx


const CartPopupBack = external_styled_components_default.a.div.withConfig({
  displayName: "CartItemCardstyle__CartPopupBack",
  componentId: "xuzuaf-0"
})(["position:fixed;top:0;left:0;bottom:0;right:0;background-color:rgba(0,0,0,.3);z-index:", ""], props => props.isOpen ? '1020' : '-1020');
const CartPopupBody = external_styled_components_default.a.div.withConfig({
  displayName: "CartItemCardstyle__CartPopupBody",
  componentId: "xuzuaf-1"
})(["height:auto;width:385px;display:flex;flex-direction:column;border-radius:6px;background-color:#ffffff;box-sizing:content-box;@media (max-width:767px){width:100%;}"]);
const PopupHeader = external_styled_components_default.a.div.withConfig({
  displayName: "CartItemCardstyle__PopupHeader",
  componentId: "xuzuaf-2"
})(["padding:15px 25px;background-color:#ffffff;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid ", ";@media (max-width:766px){justify-content:center;}"], Object(theme_get_["themeGet"])('colors.borderColor', '#f1f1f1'));
const PopupItemCount = external_styled_components_default.a.div.withConfig({
  displayName: "CartItemCardstyle__PopupItemCount",
  componentId: "xuzuaf-3"
})(["display:inline-flex;align-items:center;color:", ";span{font-family:'Lato',sans-serif;font-size:", "px;font-weight:", ";color:", ";padding-left:10px;@media (max-width:767px){font-size:12px;}}"], Object(theme_get_["themeGet"])('colors.primary', '#009E7F'), Object(theme_get_["themeGet"])('fontSizes.2', '15'), Object(theme_get_["themeGet"])('fontWeights.6', '700'), Object(theme_get_["themeGet"])('colors.primary', '#009E7F'));
const CloseButton = external_styled_components_default.a.button.withConfig({
  displayName: "CartItemCardstyle__CloseButton",
  componentId: "xuzuaf-4"
})(["width:14px;height:14px;display:inline-flex;align-items:center;justify-content:center;padding:0;border:0;outline:0;flex-shrink:0;cursor:pointer;color:rgba(0,0,0,0.25);transition:all 0.4s ease;background-color:transparent;&:hover{color:#ea4d4a;}@media (max-width:767px){position:absolute;top:-45px;background-color:#fff;width:35px;height:35px;border-radius:50%;color:rgba(0,0,0,0.5);}"]);
const ItemWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "CartItemCardstyle__ItemWrapper",
  componentId: "xuzuaf-5"
})(["width:100%;height:auto;@media (max-width:767px){}"]);
const ItemCards = external_styled_components_default.a.div.withConfig({
  displayName: "CartItemCardstyle__ItemCards",
  componentId: "xuzuaf-6"
})(["width:100%;padding:15px 25px;display:inline-flex;align-items:center;background-color:#ffffff;margin-bottom:1px;box-sizing:border-box;"]);
const ItemImgWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "CartItemCardstyle__ItemImgWrapper",
  componentId: "xuzuaf-7"
})(["width:60px;height:60px;display:inline-flex;align-items:center;justify-content:center;overflow:hidden;margin-right:15px;flex-shrink:0;img{width:100%;height:100%;object-fit:cover;}"]);
const ItemDetails = external_styled_components_default.a.div.withConfig({
  displayName: "CartItemCardstyle__ItemDetails",
  componentId: "xuzuaf-8"
})(["display:inline-flex;flex-direction:column;width:100%;"]);
const ItemTitle = external_styled_components_default.a.span.withConfig({
  displayName: "CartItemCardstyle__ItemTitle",
  componentId: "xuzuaf-9"
})(["font-family:'Lato',sans-serif;font-size:", "px;font-weight:", ";color:", ";margin-bottom:10px;"], Object(theme_get_["themeGet"])('fontSizes.2', '15'), Object(theme_get_["themeGet"])('fontWeights.3', '400'), Object(theme_get_["themeGet"])('colors.darkBold', '#0D1136'));
const ItemPrice = external_styled_components_default.a.span.withConfig({
  displayName: "CartItemCardstyle__ItemPrice",
  componentId: "xuzuaf-10"
})(["font-family:'Lato',sans-serif;font-size:", "px;font-weight:", ";color:", ";margin-bottom:10px;"], Object(theme_get_["themeGet"])('fontSizes.2', '15'), Object(theme_get_["themeGet"])('fontWeights.6', '700'), Object(theme_get_["themeGet"])('colors.primary', '#009E7F'));
const ItemWeight = external_styled_components_default.a.span.withConfig({
  displayName: "CartItemCardstyle__ItemWeight",
  componentId: "xuzuaf-11"
})(["font-family:'Lato',sans-serif;font-size:", "px;font-weight:", ";color:", ";"], Object(theme_get_["themeGet"])('fontSizes.1', '13'), Object(theme_get_["themeGet"])('fontWeights.3', '400'), Object(theme_get_["themeGet"])('colors.darkRegular', '#77798C'));
const TotalPrice = external_styled_components_default.a.span.withConfig({
  displayName: "CartItemCardstyle__TotalPrice",
  componentId: "xuzuaf-12"
})(["font-family:'Lato',sans-serif;font-size:", "px;font-weight:", ";color:", ";flex-shrink:0;margin-left:auto;"], Object(theme_get_["themeGet"])('fontSizes.2', '15'), Object(theme_get_["themeGet"])('fontWeights.6', '700'), Object(theme_get_["themeGet"])('colors.darkBold', '#0D1136'));
const DeleteButton = external_styled_components_default.a.button.withConfig({
  displayName: "CartItemCardstyle__DeleteButton",
  componentId: "xuzuaf-13"
})(["width:10px;height:10px;display:inline-flex;align-items:center;justify-content:center;padding:0;border:0;outline:0;margin-left:15px;flex-shrink:0;cursor:pointer;color:rgba(0,0,0,0.25);transition:all 0.4s ease;background-color:transparent;&:hover{color:#ea4d4a;}"]);
const PromoCode = external_styled_components_default.a.span.withConfig({
  displayName: "CartItemCardstyle__PromoCode",
  componentId: "xuzuaf-14"
})(["margin:20px 0;display:flex;justify-content:center;> button{border:0;outline:0;box-shadow:none;background-color:transparent;display:inline-flex;cursor:pointer;font-family:'Lato',sans-serif;font-size:", "px;font-weight:", ";color:", ";transition:color 0.35s ease;&:hover{color:", ";}}"], Object(theme_get_["themeGet"])('fontSizes.2', '15'), Object(theme_get_["themeGet"])('fontWeights.6', '700'), Object(theme_get_["themeGet"])('colors.primary', '#009E7F'), Object(theme_get_["themeGet"])('colors.primaryHover', '#008466'));
const CheckoutButton = external_styled_components_default.a.button.withConfig({
  displayName: "CartItemCardstyle__CheckoutButton",
  componentId: "xuzuaf-15"
})(["height:48px;width:calc(100% - 30px);display:flex;align-items:center;justify-content:space-between;background-color:", ";padding:0;border-radius:48px;box-shadow:0 3px 6px rgba(0,0,0,0.16);border:0;outline:0;cursor:pointer;margin-bottom:15px;margin-left:15px;@media (max-width:767px){height:45px;}> a{width:100%;display:flex;align-items:center;justify-content:space-between;padding-left:30px;}"], Object(theme_get_["themeGet"])('colors.primary', '#009E7F'));
const CheckoutButtonWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "CartItemCardstyle__CheckoutButtonWrapper",
  componentId: "xuzuaf-16"
})(["width:100%;display:flex;flex-direction:column;margin-top:auto;"]);
const Title = external_styled_components_default.a.a.withConfig({
  displayName: "CartItemCardstyle__Title",
  componentId: "xuzuaf-17"
})(["font-family:'Lato',sans-serif;font-size:", "px;font-weight:", ";color:#ffffff;padding-left:5px;padding-right:10px;"], Object(theme_get_["themeGet"])('fontSizes.2', '15'), Object(theme_get_["themeGet"])('fontWeights.6', '700'));
const PriceBox = external_styled_components_default.a.span.withConfig({
  displayName: "CartItemCardstyle__PriceBox",
  componentId: "xuzuaf-18"
})(["width:auto;height:44px;padding:0 30px;overflow:hidden;border-radius:28px;display:inline-flex;align-items:center;justify-content:center;background-color:#ffffff;font-family:'Lato',sans-serif;font-size:", "px;font-weight:", ";color:", ";margin-right:2px;@media (max-width:767px){height:41px;}"], Object(theme_get_["themeGet"])('fontSizes.2', '15'), Object(theme_get_["themeGet"])('fontWeights.6', '700'), Object(theme_get_["themeGet"])('colors.primary', '#009E7F'));
const NoProductMsg = external_styled_components_default.a.span.withConfig({
  displayName: "CartItemCardstyle__NoProductMsg",
  componentId: "xuzuaf-19"
})(["font-family:'Lato',sans-serif;font-size:", "px;font-weight:", ";color:", ";display:block;width:100%;padding:40px 0;text-align:center;"], Object(theme_get_["themeGet"])('fontSizes.2', '14'), Object(theme_get_["themeGet"])('fontWeights.6', '700'), Object(theme_get_["themeGet"])('colors.darkRegular', '#77798C'));
const CouponBoxWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "CartItemCardstyle__CouponBoxWrapper",
  componentId: "xuzuaf-20"
})(["width:100%;padding:0 15px;flex-direction:column;padding-right:22px;"]);
const CouponCode = external_styled_components_default.a.p.withConfig({
  displayName: "CartItemCardstyle__CouponCode",
  componentId: "xuzuaf-21"
})(["font-family:'Lato',sans-serif;font-size:15px;font-weight:500;color:", ";width:100%;display:flex;justify-content:center;span{font-weight:", ";color:", ";margin-left:5px;}"], Object(theme_get_["themeGet"])('colors.darkRegular', '#77798C'), Object(theme_get_["themeGet"])('fontWeights.6', '700'), Object(theme_get_["themeGet"])('colors.primary', '#009E7F'));
const ErrorMsg = external_styled_components_default.a.span.withConfig({
  displayName: "CartItemCardstyle__ErrorMsg",
  componentId: "xuzuaf-22"
})(["font-family:'Lato',sans-serif;font-size:", "px;font-weight:400;color:", ";padding-top:10px;display:flex;justify-content:center;"], Object(theme_get_["themeGet"])('fontSizes.2', '14'), Object(theme_get_["themeGet"])('colors.secondaryHover', '#FF282F'));
const CartSlidePopup = external_styled_components_default.a.div.withConfig({
  displayName: "CartItemCardstyle__CartSlidePopup",
  componentId: "xuzuaf-23"
})(["width:420px;height:100vh;background-color:#ffffff;position:fixed;bottom:0;right:-450px;z-index:1010;box-shadow:0 21px 36px rgba(0,0,0,0.16);transition:all 0.35s ease-in-out;@media (max-width:430px){width:100%;}&.cartPopupFixed{right:0;}", "{height:100%;width:100%;}", "{max-height:calc(100vh - 245px);background-color:#ffffff;}", "{border-bottom:1px solid #f7f7f7;margin-bottom:0;}@media (max-width:767px){", "{justify-content:space-between;}", "{top:auto;position:relative;background-color:transparent;}}"], CartPopupBody, ItemWrapper, ItemCards, PopupHeader, CloseButton);

// EXTERNAL MODULE: ./components/AllSvgIcon.tsx
var AllSvgIcon = __webpack_require__("yBv+");

// EXTERNAL MODULE: ./helper/constant.ts
var constant = __webpack_require__("5kK8");

// EXTERNAL MODULE: external "react-intl"
var external_react_intl_ = __webpack_require__("k004");

// EXTERNAL MODULE: ./contexts/language/language.provider.tsx + 2 modules
var language_provider = __webpack_require__("dq9M");

// EXTERNAL MODULE: ./components/Input/Input.tsx + 1 modules
var Input = __webpack_require__("TuSW");

// EXTERNAL MODULE: ./components/Button/Button.tsx + 2 modules
var Button = __webpack_require__("89Ff");

// CONCATENATED MODULE: ./components/CouponBox/CouponBox.style.tsx




const CouponBox_style_Button = external_styled_components_default()(Button["a" /* default */]).withConfig({
  displayName: "CouponBoxstyle__Button",
  componentId: "sc-2lkpgg-0"
})(["height:calc(100% - 10px);"]);
const CouponBox_style_Input = external_styled_components_default()(Input["a" /* default */]).withConfig({
  displayName: "CouponBoxstyle__Input",
  componentId: "sc-2lkpgg-1"
})(["&&{width:100%;.inner-wrap{input{height:100%;flex-grow:1;font-size:", "px;color:", ";border:none;border-radius:0;padding:0 20px;background-color:transparent;margin-right:0;&:focus{outline:0;}&::-webkit-input-placeholder{font-size:", "px;color:", ";}&:-moz-placeholder{font-size:", "px;color:", ";}&::-moz-placeholder{font-size:", "px;color:", ";}&:-ms-input-placeholder{font-size:", "px;color:", ";}}}}"], Object(theme_get_["themeGet"])("fontSizes.2", "14"), Object(theme_get_["themeGet"])("colorsdarkRegular", "#77798C"), Object(theme_get_["themeGet"])("fontSizes.2", "14"), Object(theme_get_["themeGet"])("colors.labelColor", "#8c8c8c"), Object(theme_get_["themeGet"])("fontSizes.2", "14"), Object(theme_get_["themeGet"])("colors.labelColor", "#8c8c8c"), Object(theme_get_["themeGet"])("fontSizes.2", "14"), Object(theme_get_["themeGet"])("colors.labelColor", "#8c8c8c"), Object(theme_get_["themeGet"])("fontSizes.2", "14"), Object(theme_get_["themeGet"])("colors.labelColor", "#8c8c8c"));
const CouponBox_style_CouponBoxWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "CouponBoxstyle__CouponBoxWrapper",
  componentId: "sc-2lkpgg-2"
})(["display:flex;flex-direction:row;align-items:center;width:100%;height:50px;padding-right:5px;border-radius:6px;background-color:#ffffff;overflow:hidden;border:1px solid #ededed;"]);
const Display = external_styled_components_default.a.div.withConfig({
  displayName: "CouponBoxstyle__Display",
  componentId: "sc-2lkpgg-3"
})(["width:100%;display:flex;align-items:center;justify-content:space-between;position:relative;"]);
const CouponBox_style_CouponCode = external_styled_components_default.a.span.withConfig({
  displayName: "CouponBoxstyle__CouponCode",
  componentId: "sc-2lkpgg-4"
})(["font-size:", "px;color:", ";font-weight:700;text-transform:uppercase;"], Object(theme_get_["themeGet"])("fontSizes.2", "14"), Object(theme_get_["themeGet"])("colors.primary", "#009E7F"));
const DiscountPrice = external_styled_components_default.a.span.withConfig({
  displayName: "CouponBoxstyle__DiscountPrice",
  componentId: "sc-2lkpgg-5"
})(["font-size:", "px;color:", ";font-weight:700;margin-left:auto;"], Object(theme_get_["themeGet"])("fontSizes.2", "14"), Object(theme_get_["themeGet"])("colors.primary", "#009E7F"));
const CancelBtn = external_styled_components_default.a.button.withConfig({
  displayName: "CouponBoxstyle__CancelBtn",
  componentId: "sc-2lkpgg-6"
})(["color:", ";width:20px;height:20px;display:flex;align-items:center;justify-content:center;background-color:transparent;border:0;outline:0;padding:0;margin:0;position:absolute;top:0;right:-30px;cursor:pointer;"], Object(theme_get_["themeGet"])("colors.secondary", "#ff5b60"));
// CONCATENATED MODULE: ./components/CouponBox/CouponBox.tsx
var __jsx = external_react_default.a.createElement;




const CouponBox = ({
  onUpdate,
  value,
  onClick,
  disabled,
  buttonTitle,
  intlCouponBoxPlaceholder,
  intlCouponApplyButton,
  className,
  style,
  couponPlaceholder
}) => {
  return __jsx(CouponBox_style_CouponBoxWrapper, {
    className: className,
    style: style
  }, __jsx(CouponBox_style_Input, {
    onUpdate: onUpdate,
    value: value,
    placeholder: couponPlaceholder,
    intlPlaceholderId: intlCouponBoxPlaceholder ? intlCouponBoxPlaceholder : "intlCouponBoxPlaceholder"
  }), __jsx(CouponBox_style_Button, {
    onClick: onClick,
    disabled: disabled,
    title: buttonTitle,
    intlButtonId: intlCouponApplyButton
  }));
};

const CouponDisplay = ({
  code,
  currency,
  price,
  sign,
  onClick,
  style,
  btnStyle
}) => {
  return __jsx(Display, {
    style: style,
    className: "couponDisplayBox"
  }, __jsx(CouponBox_style_CouponCode, {
    className: "couponCodeText"
  }, code), __jsx(DiscountPrice, {
    className: "discountedPrice"
  }, sign, currency, price), __jsx(CancelBtn, {
    onClick: onClick,
    btnStyle: btnStyle
  }, __jsx(AllSvgIcon["CloseIcon"], null)));
};
/* harmony default export */ var CouponBox_CouponBox = (CouponBox);
// EXTERNAL MODULE: external "react-custom-scrollbars"
var external_react_custom_scrollbars_ = __webpack_require__("qC9r");

// EXTERNAL MODULE: ./contexts/cart/use-cart.tsx + 1 modules
var use_cart = __webpack_require__("4WSj");

// EXTERNAL MODULE: ./components/Counter/Counter.tsx + 2 modules
var Counter = __webpack_require__("gHRq");

// CONCATENATED MODULE: ./assets/icons/close.tsx
var close_jsx = external_react_default.a.createElement;

const CloseIcon = () => {
  return close_jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "10.003",
    height: "10",
    viewBox: "0 0 10.003 10"
  }, close_jsx("path", {
    "data-name": "_ionicons_svg_ios-close (5)",
    d: "M166.686,165.55l3.573-3.573a.837.837,0,0,0-1.184-1.184l-3.573,3.573-3.573-3.573a.837.837,0,1,0-1.184,1.184l3.573,3.573-3.573,3.573a.837.837,0,0,0,1.184,1.184l3.573-3.573,3.573,3.573a.837.837,0,0,0,1.184-1.184Z",
    transform: "translate(-160.5 -160.55)",
    fill: "currentColor"
  }));
};
// EXTERNAL MODULE: external "@styled-system/css"
var css_ = __webpack_require__("ExBD");
var css_default = /*#__PURE__*/__webpack_require__.n(css_);

// CONCATENATED MODULE: ./containers/Cart/CartItem/CartItem.style.tsx


const ItemBox = external_styled_components_default.a.div.withConfig({
  displayName: "CartItemstyle__ItemBox",
  componentId: "sc-1otw30s-0"
})(css_default()({
  fontSize: 2,
  fontWeight: 6,
  py: 15,
  px: 25,
  borderBottom: `1px solid`,
  borderBottomColor: 'lightColor'
}), {
  display: 'flex',
  alignItems: 'center'
});
const Information = external_styled_components_default.a.div.withConfig({
  displayName: "CartItemstyle__Information",
  componentId: "sc-1otw30s-1"
})({
  display: 'flex',
  flexDirection: 'column',
  marginLeft: '15px'
});
const Image = external_styled_components_default.a.img.withConfig({
  displayName: "CartItemstyle__Image",
  componentId: "sc-1otw30s-2"
})({
  width: 60,
  height: 60,
  objectFit: 'cover',
  margin: '0 15px'
});
const Name = external_styled_components_default.a.span.withConfig({
  displayName: "CartItemstyle__Name",
  componentId: "sc-1otw30s-3"
})(css_default()({
  fontWeight: 3,
  color: 'darkBold',
  mb: '10px',
  lineHeight: 1.5
}));
const Price = external_styled_components_default.a.span.withConfig({
  displayName: "CartItemstyle__Price",
  componentId: "sc-1otw30s-4"
})(css_default()({
  color: 'primary',
  mb: '10px'
}));
const Weight = external_styled_components_default.a.span.withConfig({
  displayName: "CartItemstyle__Weight",
  componentId: "sc-1otw30s-5"
})(css_default()({
  fontSize: 1,
  fontWeight: 3,
  color: 'darkRegular',
  mb: '5px'
}));
const Total = external_styled_components_default.a.span.withConfig({
  displayName: "CartItemstyle__Total",
  componentId: "sc-1otw30s-6"
})(css_default()({
  color: 'darkBold',
  ml: 'auto'
}));
const RemoveButton = external_styled_components_default.a.button.withConfig({
  displayName: "CartItemstyle__RemoveButton",
  componentId: "sc-1otw30s-7"
})({
  padding: '5px',
  border: 0,
  outline: 0,
  marginLeft: '15px',
  cursor: 'pointer',
  color: 'rgba(0, 0, 0, 0.25)',
  transition: 'all 0.4s ease',
  backgroundColor: 'transparent',
  '&:hover': {
    color: '#ea4d4a'
  }
});
// CONCATENATED MODULE: ./containers/Cart/CartItem/CartItem.tsx
var CartItem_jsx = external_react_default.a.createElement;





const CartItem = ({
  data,
  onDecrement,
  onIncrement,
  onRemove
}) => {
  const {
    title,
    images,
    price,
    salePrice,
    unit,
    quantity
  } = data;
  const displayPrice = salePrice ? salePrice : price;
  const totalPrice = quantity * displayPrice; // console.log(images)

  return CartItem_jsx(ItemBox, null, CartItem_jsx(Counter["a" /* Counter */], {
    value: quantity,
    onDecrement: onDecrement,
    onIncrement: onIncrement,
    variant: "lightVertical"
  }), CartItem_jsx(Image, {
    src: "http://34.67.187.223/media/" + images[0].image
  }), CartItem_jsx(Information, null, CartItem_jsx(Name, null, title), CartItem_jsx(Price, null, constant["a" /* CURRENCY */], displayPrice), CartItem_jsx(Weight, null, quantity, " X ", unit)), CartItem_jsx(Total, null, constant["a" /* CURRENCY */], (quantity * displayPrice).toFixed(2)), CartItem_jsx(RemoveButton, {
    onClick: onRemove
  }, CartItem_jsx(CloseIcon, null)));
};
// CONCATENATED MODULE: ./containers/Cart/Cart.tsx
var Cart_jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }















const APPLY_COUPON = external_graphql_tag_default.a`
  mutation applyCoupon($code: String!) {
    applyCoupon(code: $code) {
      id
      code
      discountInPercent
    }
  }
`;

const Cart = ({
  style,
  className,
  onCloseBtnClick,
  scrollbarHeight
}) => {
  const {
    items,
    coupon,
    addItem,
    removeItem,
    removeItemFromCart,
    cartItemsCount,
    calculatePrice,
    applyCoupon
  } = Object(use_cart["b" /* useCart */])();
  const {
    0: couponText,
    1: setCoupon
  } = Object(external_react_["useState"])('');
  const {
    0: displayCoupon,
    1: showCoupon
  } = Object(external_react_["useState"])(false);
  const {
    0: error,
    1: setError
  } = Object(external_react_["useState"])('');
  const [applyedCoupon] = Object(react_hooks_["useMutation"])(APPLY_COUPON);
  const {
    isRtl
  } = Object(language_provider["b" /* useLocale */])();

  const handleApplyCoupon = async () => {
    const {
      data
    } = await applyedCoupon({
      variables: {
        code: couponText
      }
    });

    if (data.applyCoupon && data.applyCoupon.discountInPercent) {
      setError('');
      applyCoupon(data.applyCoupon);
      setCoupon('');
    } else {
      setError('Invalid Coupon');
    }
  };

  const handleChange = value => {
    setCoupon(value);
  };

  const toggleCoupon = () => {
    showCoupon(true);
  };

  return Cart_jsx(CartPopupBody, {
    className: className,
    style: style
  }, Cart_jsx(PopupHeader, null, Cart_jsx(PopupItemCount, null, Cart_jsx(AllSvgIcon["ShoppingBagLarge"], {
    width: "19px",
    height: "24px"
  }), Cart_jsx("span", null, cartItemsCount, "\xA0", cartItemsCount > 1 ? Cart_jsx(external_react_intl_["FormattedMessage"], {
    id: "cartItems",
    defaultMessage: "items"
  }) : Cart_jsx(external_react_intl_["FormattedMessage"], {
    id: "cartItem",
    defaultMessage: "item"
  }))), Cart_jsx(CloseButton, {
    onClick: onCloseBtnClick
  }, Cart_jsx(AllSvgIcon["CloseIcon"], null))), Cart_jsx(external_react_custom_scrollbars_["Scrollbars"], {
    universal: true,
    autoHide: true,
    autoHeight: true,
    autoHeightMax: scrollbarHeight,
    renderView: props => Cart_jsx("div", _extends({}, props, {
      style: _objectSpread(_objectSpread({}, props.style), {}, {
        marginLeft: isRtl ? props.style.marginRight : 0,
        marginRight: isRtl ? 0 : props.style.marginRight
      })
    }))
  }, Cart_jsx(ItemWrapper, null, !!cartItemsCount ? items.map(item => Cart_jsx(CartItem, {
    key: `cartItem-${item.id}`,
    onIncrement: () => addItem(item),
    onDecrement: () => removeItem(item),
    onRemove: () => removeItemFromCart(item),
    data: item
  })) : Cart_jsx(NoProductMsg, null, Cart_jsx(external_react_intl_["FormattedMessage"], {
    id: "noProductFound",
    defaultMessage: "No products found"
  })))), Cart_jsx(CheckoutButtonWrapper, null, Cart_jsx(PromoCode, null, !(coupon === null || coupon === void 0 ? void 0 : coupon.discountInPercent) ? Cart_jsx(external_react_default.a.Fragment, null, !displayCoupon ? Cart_jsx("button", {
    onClick: toggleCoupon
  }, Cart_jsx(external_react_intl_["FormattedMessage"], {
    id: "specialCode",
    defaultMessage: "Have a special code?"
  })) : Cart_jsx(CouponBoxWrapper, null, Cart_jsx(CouponBox_CouponBox, {
    onUpdate: handleChange,
    value: couponText,
    onClick: handleApplyCoupon,
    disabled: !couponText.length || !items.length,
    buttonTitle: "Apply",
    intlCouponBoxPlaceholder: "couponPlaceholder",
    style: {
      boxShadow: '0 3px 6px rgba(0, 0, 0, 0.06)'
    }
  }), error ? Cart_jsx(ErrorMsg, null, error) : '')) : Cart_jsx(CouponCode, null, Cart_jsx(external_react_intl_["FormattedMessage"], {
    id: "couponApplied",
    defaultMessage: "Coupon Applied"
  }), Cart_jsx("span", null, coupon.code))), cartItemsCount !== 0 ? Cart_jsx(link_default.a, {
    href: "/checkout"
  }, Cart_jsx(CheckoutButton, {
    onClick: onCloseBtnClick
  }, Cart_jsx(external_react_default.a.Fragment, null, Cart_jsx(Title, null, Cart_jsx(external_react_intl_["FormattedMessage"], {
    id: "navlinkCheckout",
    defaultMessage: "Checkout"
  })), Cart_jsx(PriceBox, null, constant["a" /* CURRENCY */], calculatePrice())))) : Cart_jsx(CheckoutButton, null, Cart_jsx(external_react_default.a.Fragment, null, Cart_jsx(Title, null, Cart_jsx(external_react_intl_["FormattedMessage"], {
    id: "navlinkCheckout",
    defaultMessage: "Checkout"
  })), Cart_jsx(PriceBox, null, constant["a" /* CURRENCY */], calculatePrice())))));
};

/* harmony default export */ var Cart_Cart = (Cart);
// CONCATENATED MODULE: ./containers/Cart/CartPopUp.tsx
var CartPopUp_jsx = external_react_default.a.createElement;






const CartPopupStyle = external_styled_components_["createGlobalStyle"]`
  .cartPopup{
    top: auto !important;
    left: auto !important;
    bottom: 50px !important;
    right: 50px !important;
    box-shadow: 0 21px 36px rgba(0, 0, 0, 0.16);
    transform-origin: bottom right;

    @media (max-width: 767px) {
      max-width: none!important;
      width: 100% !important;
      bottom: 0 !important;
      left: 0!important;
      background: #fff;
      overflow: initial !important;
      transform-origin: bottom center;
    }
  }
`;

const CartPopUp = ({
  deviceType: {
    mobile,
    tablet,
    desktop
  }
}) => {
  const {
    isOpen,
    cartItemsCount,
    toggleCart,
    calculatePrice
  } = Object(use_cart["b" /* useCart */])();

  const handleModal = () => {
    Object(reuse_modal_["openModal"])({
      show: true,
      config: {
        className: 'cartPopup',
        width: 'auto',
        height: 'auto',
        enableResizing: false,
        disableDragging: true,
        transition: {
          tension: 360,
          friction: 40
        }
      },
      closeOnClickOutside: true,
      component: Cart_Cart,
      closeComponent: () => CartPopUp_jsx("div", null),
      componentProps: {
        onCloseBtnClick: reuse_modal_["closeModal"],
        scrollbarHeight: 370
      }
    });
  };

  let cartSliderClass = isOpen === true ? 'cartPopupFixed' : '';
  return CartPopUp_jsx(external_react_default.a.Fragment, null, mobile || tablet ? CartPopUp_jsx(external_react_default.a.Fragment, null, CartPopUp_jsx(CartPopupStyle, null)) : CartPopUp_jsx(external_react_default.a.Fragment, null, CartPopUp_jsx(CartPopupBack, {
    onClick: e => {
      if (e.target === e.currentTarget) {
        toggleCart();
      }
    },
    isOpen: isOpen
  }, CartPopUp_jsx(CartSlidePopup, {
    className: cartSliderClass
  }, isOpen && CartPopUp_jsx(Cart_Cart, {
    onCloseBtnClick: toggleCart,
    scrollbarHeight: "100vh"
  })))));
};

/* harmony default export */ var Cart_CartPopUp = __webpack_exports__["a"] = (CartPopUp);

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "Oyez":
/***/ (function(module, exports) {

module.exports = require("apollo-client");

/***/ }),

/***/ "PDTj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Image; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("bYH+");
/* harmony import */ var react_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _product_placeholder_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("kaUJ");
/* harmony import */ var _product_placeholder_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_product_placeholder_png__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Placeholder = () => __jsx("img", {
  src: _product_placeholder_png__WEBPACK_IMPORTED_MODULE_2___default.a,
  alt: "product img loder"
});

function Image({
  url,
  alt = 'placeholder',
  unloader,
  loader,
  media,
  className,
  style
}) {
  return __jsx(react_image__WEBPACK_IMPORTED_MODULE_1___default.a, {
    draggable: false,
    style: style,
    src: media ? "http://34.67.187.223/media/" + url : url,
    alt: alt,
    loader: __jsx(Placeholder, null),
    unloader: __jsx(Placeholder, null),
    className: className
  });
}

/***/ }),

/***/ "QgM5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export GET_PRODUCT_WITH_RELATED_PRODUCTS */
/* unused harmony export GET_RELATED_PRODUCTS */
/* unused harmony export GET_PRODUCT */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GET_PRODUCT_DETAILS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GET_PRODUCTS; });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("txk1");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);

const GET_PRODUCT_WITH_RELATED_PRODUCTS = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getProductWithRelatedProducts($slug: String!, $type: String!) {
    product(slug: $slug) {
      id
      title
      weight
      slug
      price
      Type{
        id
        title
        slug
      }
      images{
        image
      }
      categories {
        id
        slug
        title
      }
    }
    relatedProducts(slug: $slug, type: $type) {
      id
      title
      slug
      weight
      price
      Type{
        id
        title
        slug
      }
      categories{
        id
        title
        slug
      }
      images{
        image
      }
    }
  }
`;
const GET_RELATED_PRODUCTS = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getRelatedProducts($type: String!, $slug: String!) {
    relatedProducts(type: $type, slug: $slug) {
      id
      title
      slug
      weight
      price
      Type{
        id
        title
        slug
      }
      categories{
        id
        title
        slug
      }
      images{
        image
      }
    }
  }
`;
const GET_PRODUCT = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getProduct($slug: String!) {
    product(slug: $slug) {
      id
      title
      weight
      slug
      price
      discountInPercent
      Type{
        id
        title
        slug
      }
      images{
        image
      }
      categories {
        id
        slug
        title
      }
    }
  }
`;
const GET_PRODUCT_DETAILS = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getProduct($slug: String!){
    product(slug:$slug){
      id
      title
      slug
      description
      Type{
        id
        title
        slug
      }
      category{
        id
        title
        slug
        parent{
          id
          title
          slug
        }
      }
      unit
      price
      salePrice
      discountPercent
      createdAt
      images{
        image
      }
    }
  }
`;
const GET_PRODUCTS = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query(
    $offset: Int
    $limit: Int
    $type: String
    $text: String
    $category: String
  ){
    products(
      offset:$offset
      limit:$limit
      Type:$type
      text:$text
      category:$category
    ){
      hasMore
      total
      items{
        id
        slug
        title
        description
        Type{
          id
          title
          slug
        }
        category{
          id
          title
          slug
          parent{
            id
            title
            slug
          }
        }
        unit
        price
        salePrice
        discountPercent
        createdAt
        images{
          image
        }
      }
    }
  }
`;

/***/ }),

/***/ "S+LZ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("/JeY");
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("99J/");
/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_multi_carousel__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_Image_Image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("PDTj");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const SingleItem = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.li.withConfig({
  displayName: "MultiCarousel__SingleItem",
  componentId: "sc-1l8qqrp-0"
})(["border:1px solid ", ";border-radius:6px;margin-right:20px;padding:0;outline:none;width:70px;height:auto;overflow:hidden;&:last-child{margin-right:0;}&.custom-dot--active{border:2px solid ", ";}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.borderColor', '#f1f1f1'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary', '#009E7F'));
const responsive = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1024
    },
    items: 1
  },
  mobile: {
    breakpoint: {
      max: 464,
      min: 0
    },
    items: 1
  },
  tablet: {
    breakpoint: {
      max: 1024,
      min: 200
    },
    items: 1
  }
};

const CarouselWithCustomDots = (_ref) => {
  let {
    items = [],
    deviceType: {
      mobile,
      tablet
    },
    title
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["items", "deviceType", "title"]);

  const children = items.slice(0, 6).map((item, index) => __jsx(components_Image_Image__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    media: true,
    url: item.url ? item.url : item.image,
    key: index,
    alt: title,
    style: {
      minWidth: 'auto',
      height: 'auto',
      position: 'relative',
      margin: 'auto'
    },
    className: "product-image"
  }));
  const images = items.map((item, index) => __jsx(components_Image_Image__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    url: item.url ? item.url : item.image,
    key: index,
    media: true,
    alt: title,
    style: {
      width: '100%',
      height: '100%',
      position: 'relative'
    }
  }));

  const CustomDot = ({
    index,
    onClick,
    active,
    carouselState: {
      currentSlide,
      deviceType
    }
  }) => {
    return __jsx(SingleItem, {
      "data-index": index,
      key: index,
      onClick: () => onClick(),
      className: `custom-dot ${active && 'custom-dot--active'}`
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.toArray(images)[index]);
  };

  let deviceType = 'desktop';

  if (mobile) {
    deviceType = 'mobile';
  }

  if (tablet) {
    deviceType = 'tablet';
  }

  return __jsx(react_multi_carousel__WEBPACK_IMPORTED_MODULE_2___default.a, _extends({
    showDots: true,
    ssr: true,
    infinite: true,
    slidesToSlide: 1,
    containerClass: "carousel-with-custom-dots",
    responsive: responsive,
    deviceType: deviceType,
    autoPlay: false,
    arrows: false,
    customDot: __jsx(CustomDot, null)
  }, rest), children);
};

/* harmony default export */ __webpack_exports__["a"] = (CarouselWithCustomDots);

/***/ }),

/***/ "TG1l":
/***/ (function(module, exports) {

module.exports = require("apollo-link-http");

/***/ }),

/***/ "TuSW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "@styled-system/theme-get"
var theme_get_ = __webpack_require__("/JeY");

// CONCATENATED MODULE: ./components/Input/Input.style.tsx


const InputWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "Inputstyle__InputWrapper",
  componentId: "sc-1d1o7pw-0"
})(["> div{display:flex;width:100%;align-items:center;justify-content:space-between;> label{font-family:'Lato',sans-serif;font-size:", "px;font-weight:", ";color:", ";line-height:19px;}}.inner-wrap{width:100%;margin-top:15px;box-sizing:border-box;position:relative;&:only-child{margin:0;}input,textarea,input[type='text'],input[type='email'],input[type='number'],input[type='password']{width:100%;height:48px;border-radius:6px;font-family:'Lato',sans-serif;font-size:", "px;font-weight:", ";border:1px solid ", ";line-height:19px;padding:0 18px;box-sizing:border-box;transition:border-color 0.25s ease;&:hover,&:focus{outline:0;}&:focus{border-color:", ";}&::placeholder{color:", ";}}input[type='number']{&::-webkit-inner-spin-button,&::-webkit-outer-spin-button{-webkit-appearance:none;margin:0;}}textarea{height:auto;min-height:171px;padding-top:15px;resize:none;}}&.send-verification{input[type='number']{padding-right:141px;}}&.number-verified{input[type='number']{padding-right:95px;}}&.disabled{.inner-wrap{cursor:not-allowed;opacity:0.6;}}&.with-search-icon{.inner-wrap{position:relative;.search-icon{width:45px;height:100%;font-size:15px;color:", ";display:flex;align-items:center;justify-content:center;position:absolute;top:0;left:0;&.right{right:0;left:auto;}}.icon-left{padding-left:45px;}.icon-right{padding-right:45px;}}}"], Object(theme_get_["themeGet"])('fontSizes.2', '15'), Object(theme_get_["themeGet"])('fontWeights.6', '700'), Object(theme_get_["themeGet"])('colors.darkBold', '#0D1136'), Object(theme_get_["themeGet"])('fontSizes.2', '15'), Object(theme_get_["themeGet"])('fontWeights.3', '400'), Object(theme_get_["themeGet"])('colors.borderColor', '#f1f1f1'), Object(theme_get_["themeGet"])('colors.primary', '#009e7f'), Object(theme_get_["themeGet"])('colorsdarkRegular', '#77798C'), Object(theme_get_["themeGet"])('colorsdarkRegular', '#77798C'));
const VerifiedLabel = external_styled_components_default.a.span.withConfig({
  displayName: "Inputstyle__VerifiedLabel",
  componentId: "sc-1d1o7pw-1"
})(["border-radius:6px;height:23px;min-width:61px;display:inline-flex;align-items:center;justify-content:center;color:", ";font-size:12px;font-weight:400;text-transform:capitalize;background-color:rgba(0,158,127,0.15);position:absolute;top:calc(50% - 23px / 2);right:18px;"], Object(theme_get_["themeGet"])('colors.primary', '#009e7f'));
const VerificationButton = external_styled_components_default.a.button.withConfig({
  displayName: "Inputstyle__VerificationButton",
  componentId: "sc-1d1o7pw-2"
})(["display:inline-flex;align-items:center;justify-content:center;border-radius:6px;height:23px;min-width:109px;color:rgba(250,69,49,0.85);background-color:rgba(250,69,49,0.15);font-size:12px;font-weight:400;border:0;padding-left:10px;padding-right:10px;box-sizing:border-box;text-transform:capitalize;cursor:pointer;position:absolute;top:calc(50% - 23px / 2);right:18px;transition:all 0.3s ease;&:hover,&:focus{outline:0;opacity:0.8;}"]);
/* harmony default export */ var Input_style = (InputWrapper);
// EXTERNAL MODULE: external "react-intl"
var external_react_intl_ = __webpack_require__("k004");

// CONCATENATED MODULE: ./components/Input/Input.tsx
var __jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const Input = (_ref) => {
  let {
    type,
    value,
    label,
    name,
    style,
    disabled,
    className,
    onUpdate,
    placeholder,
    intlPlaceholderId,
    intlInputLabelId,
    onBlur,
    onFocus,
    verification,
    // this prop only for number field
    verified,
    // this prop only for number field
    handleVerification,
    // this prop only for number field
    secondaryComponent,
    searchIcon,
    iconPosition,
    containerStyle
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["type", "value", "label", "name", "style", "disabled", "className", "onUpdate", "placeholder", "intlPlaceholderId", "intlInputLabelId", "onBlur", "onFocus", "verification", "verified", "handleVerification", "secondaryComponent", "searchIcon", "iconPosition", "containerStyle"]);

  // Input State
  const {
    0: state,
    1: setState
  } = Object(external_react_["useState"])({
    value: value
  }); // Add all classs to an array

  const addAllClasses = ['field-wrapper']; // className prop checking

  if (className) {
    addAllClasses.push(className);
  } // Add disabled class


  if (disabled) {
    addAllClasses.push('disabled');
  } // Add with search icon class


  if (searchIcon) {
    addAllClasses.push('with-search-icon');
  }

  if (verification) {
    verified ? addAllClasses.push('number-verified') : addAllClasses.push('send-verification');
  } // Input onChange handler


  const handleOnChange = e => {
    let currentValue = e.target.value;
    setState(_objectSpread(_objectSpread({}, state), {}, {
      value: currentValue
    }));
    onUpdate(currentValue);
  }; // Init variable for Label For and Input element


  let htmlFor, inputElement; // Make Label value to htmlFor

  if (label) {
    htmlFor = label.replace(/\s+/g, '_').toLowerCase();
  } // set icon position


  const position = iconPosition || 'left';

  const SearchIcon = searchIcon && __jsx("span", {
    className: `${position === 'right' ? 'right' : 'left'} search-icon`
  }, searchIcon);

  const withSearchIconClass = searchIcon && position === 'right' ? 'icon-right' : position === 'left' ? 'icon-left' : ''; // Label Field

  const LabelField = label && __jsx("label", {
    htmlFor: htmlFor
  }, __jsx(external_react_intl_["FormattedMessage"], {
    id: intlInputLabelId ? intlInputLabelId : 'defaultIntlInputLabelId',
    defaultMessage: label
  })); // Set Input element based on type prop


  switch (type) {
    case 'textarea':
      inputElement = __jsx("div", {
        className: "inner-wrap"
      }, __jsx(external_react_intl_["FormattedMessage"], {
        id: intlPlaceholderId ? intlPlaceholderId : 'defaultIntlId',
        defaultMessage: "\xA0"
      }, placeholder => __jsx("textarea", _extends({
        id: htmlFor,
        name: name,
        disabled: disabled,
        value: value ? value : state.value,
        onChange: handleOnChange,
        placeholder: placeholder,
        onBlur: onBlur,
        onFocus: onFocus,
        style: style
      }, rest))));
      break;

    case 'number':
      inputElement = __jsx("div", {
        className: "inner-wrap"
      }, __jsx(external_react_intl_["FormattedMessage"], {
        id: intlPlaceholderId ? intlPlaceholderId : 'defaultIntlId',
        defaultMessage: "\xA0"
      }, placeholder => __jsx("input", _extends({
        type: "number",
        id: htmlFor,
        name: name,
        disabled: disabled,
        value: value ? value : state.value,
        onChange: handleOnChange,
        placeholder: placeholder,
        onBlur: onBlur,
        onFocus: onFocus,
        style: style
      }, rest))), verification && __jsx(external_react_["Fragment"], null, verified ? __jsx(VerifiedLabel, null, __jsx(external_react_intl_["FormattedMessage"], {
        id: "inputVerified",
        defaultMessage: "Verified"
      })) : __jsx(VerificationButton, {
        onClick: handleVerification
      }, __jsx(external_react_intl_["FormattedMessage"], {
        id: "inputSendVerification",
        defaultMessage: "Send Verification"
      }))));
      break;

    case 'password':
      inputElement = __jsx("div", {
        className: "inner-wrap"
      }, __jsx(external_react_intl_["FormattedMessage"], {
        id: intlPlaceholderId ? intlPlaceholderId : 'defaultIntlId',
        defaultMessage: "\xA0"
      }, placeholder => __jsx("input", {
        type: "password",
        id: htmlFor,
        name: name,
        disabled: disabled,
        value: value ? value : state.value,
        onChange: handleOnChange // placeholder={placeholder}
        ,
        onBlur: onBlur,
        onFocus: onFocus,
        style: style
      })));
      break;

    case 'email':
      inputElement = __jsx("div", {
        className: "inner-wrap"
      }, __jsx(external_react_intl_["FormattedMessage"], {
        id: intlPlaceholderId ? intlPlaceholderId : 'defaultIntlId',
        defaultMessage: "\xA0"
      }, placeholder => __jsx("input", _extends({
        type: "email",
        id: htmlFor,
        name: name,
        disabled: disabled,
        value: value ? value : state.value,
        onChange: handleOnChange,
        placeholder: placeholder,
        onBlur: onBlur,
        onFocus: onFocus,
        style: style
      }, rest))));
      break;

    default:
      inputElement = __jsx("div", {
        className: "inner-wrap"
      }, position === 'left' && SearchIcon, __jsx(external_react_intl_["FormattedMessage"], {
        id: intlPlaceholderId ? intlPlaceholderId : 'defaultIntlId',
        defaultMessage: "\xA0"
      }, placeholder => __jsx("input", _extends({
        type: "text",
        id: htmlFor,
        name: name,
        value: value ? value : state.value,
        onChange: handleOnChange,
        placeholder: placeholder,
        onBlur: onBlur,
        onFocus: onFocus,
        style: style,
        className: withSearchIconClass
      }, rest))), position === 'right' && SearchIcon);
      break;
  }

  return __jsx(Input_style, {
    className: addAllClasses.join(' '),
    style: containerStyle
  }, LabelField || secondaryComponent ? __jsx("div", null, LabelField, " ", secondaryComponent) : '', inputElement);
};

/* harmony default export */ var Input_Input = __webpack_exports__["a"] = (Input);

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = escapeRegex(normalizedRoute.replace(/\/$/, '') || '/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isOptional = /^\\\[.*\\\]$/.test($1);

    if (isOptional) {
      $1 = $1.slice(2, -2);
    }

    const isCatchAll = /^(\\\.){3}/.test($1);

    if (isCatchAll) {
      $1 = $1.slice(6);
    }

    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? isOptional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
  });
  let namedParameterizedRoute; // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    namedParameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
      const isCatchAll = /^(\\\.){3}/.test($1);
      const key = $1 // Un-escape key
      .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '');
      return isCatchAll ? `/(?<${escapeRegex(key)}>.+?)` : `/(?<${escapeRegex(key)}>[^/]+?)`;
    });
  }

  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups,
    namedRegex: namedParameterizedRoute ? `^${namedParameterizedRoute}(?:/)?$` : undefined
  };
}

/***/ }),

/***/ "ZNCQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return withApollo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("mU8t");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Oyez");
/* harmony import */ var apollo_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(apollo_client__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("oz4i");
/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var apollo_link_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("TG1l");
/* harmony import */ var apollo_link_http__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(apollo_link_http__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var apollo_link_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("LvlT");
/* harmony import */ var apollo_link_context__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(apollo_link_context__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("0bYB");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("vDU6");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }










let apolloClient = null;
/**
 * Creates and provides the apolloContext
 * to a next.js PageTree. Use it by wrapping
 * your PageComponent via HOC pattern.
 * @param {Function|Class} PageComponent
 * @param {Object} [config]
 * @param {Boolean} [config.ssr=true]
 */

function withApollo(PageComponent, {
  ssr = true
} = {}) {
  const WithApollo = (_ref) => {
    let {
      apolloClient,
      apolloState
    } = _ref,
        pageProps = _objectWithoutProperties(_ref, ["apolloClient", "apolloState"]);

    const client = apolloClient || initApolloClient(apolloState);
    return __jsx(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["ApolloProvider"], {
      client: client
    }, __jsx(PageComponent, pageProps));
  }; // Set the correct displayName in development


  if (false) {}

  if (ssr || PageComponent.getInitialProps) {
    WithApollo.getInitialProps = async ctx => {
      const {
        AppTree
      } = ctx; // Initialize ApolloClient, add it to the ctx object so
      // we can use it in `PageComponent.getInitialProp`.

      const apolloClient = ctx.apolloClient = initApolloClient(); // Run wrapped getInitialProps methods

      let pageProps = {};

      if (PageComponent.getInitialProps) {
        pageProps = await PageComponent.getInitialProps(ctx);
      } // Only on the server:


      if (true) {
        // When redirecting, the response is finished.
        // No point in continuing to render
        if (ctx.res && ctx.res.finished) {
          return pageProps;
        } // Only if ssr is enabled


        if (ssr) {
          try {
            // Run all GraphQL queries
            const {
              getDataFromTree
            } = await Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, "7fVs", 7));
            await getDataFromTree(__jsx(AppTree, {
              pageProps: _objectSpread(_objectSpread({}, pageProps), {}, {
                apolloClient
              })
            }));
          } catch (error) {
            // console.log({error})
            // Prevent Apollo Client GraphQL errors from crashing SSR.
            // Handle them in components via the data.error prop:
            // https://www.apollographql.com/docs/react/api/react-apollo.html#graphql-query-data-error
            console.error('Error while running `getDataFromTree`', error);
          } // getDataFromTree does not call componentWillUnmount
          // head side effect therefore need to be cleared manually


          next_head__WEBPACK_IMPORTED_MODULE_1___default.a.rewind();
        }
      } // Extract query data from the Apollo store


      const apolloState = apolloClient.cache.extract();
      return _objectSpread(_objectSpread({}, pageProps), {}, {
        apolloState
      });
    };
  }

  return WithApollo;
}
/**
 * Always creates a new apollo client on the server
 * Creates or reuses apollo client in the browser.
 * @param  {Object} initialState
 */

function initApolloClient(initialState) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (true) {
    return createApolloClient(initialState);
  } // Reuse client on the client-side


  if (!apolloClient) {
    apolloClient = createApolloClient(initialState);
  }

  return apolloClient;
}

const httpLink = new apollo_link_http__WEBPACK_IMPORTED_MODULE_5__["HttpLink"]({
  uri: "http://34.67.187.223/graphql",
  // Server URL (must be absolute)
  credentials: 'same-origin',
  // Additional fetch() options like `credentials` or `headers`
  fetch: (isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_7___default())
});
const authLink = Object(apollo_link_context__WEBPACK_IMPORTED_MODULE_6__["setContext"])((_, {
  headers
}) => {
  var _getLocalState;

  // get the authentication token from local storage if it exists
  const token = ((_getLocalState = Object(_localStorage__WEBPACK_IMPORTED_MODULE_8__[/* getLocalState */ "a"])('access_token')) === null || _getLocalState === void 0 ? void 0 : _getLocalState.token) || ""; // console.log(token, "token")
  // return the headers to the context so httpLink can read them

  return {
    headers: _objectSpread(_objectSpread({}, headers), {}, {
      authorization: token ? `JWT ${token}` : ""
    })
  };
});
/**
 * Creates and configures the ApolloClient
 * @param  {Object} [initialState={}]
 */

function createApolloClient(initialState = {}) {
  // Check out https://github.com/zeit/next.js/pull/4611 if you want to use the AWSAppSyncClient
  return new apollo_client__WEBPACK_IMPORTED_MODULE_3__["ApolloClient"]({
    ssrMode: true,
    // Disables forceFetch on the server (so queries are only run once)
    link: authLink.concat(httpLink),
    cache: new apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_4__["InMemoryCache"]().restore(initialState)
  });
}

/***/ }),

/***/ "bYH+":
/***/ (function(module, exports) {

module.exports = require("react-image");

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

var _interopRequireWildcard = __webpack_require__("7KCV");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _url = __webpack_require__("bzos");

var _utils = __webpack_require__("kYf9");

var _router = _interopRequireDefault(__webpack_require__("nOHt"));

var _router2 = __webpack_require__("elyg");

function isLocal(href) {
  const url = (0, _url.parse)(href, false, true);
  const origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  let lastHref = null;
  let lastAs = null;
  let lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    const result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

let observer;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: (0, _router2.addBasePath)(formatUrl(href)),
        as: asHref ? (0, _router2.addBasePath)(formatUrl(asHref)) : asHref
      };
    });

    this.linkClicked = e => {
      const {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      let {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      const {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      let {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (false) {}

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    const {
      pathname
    } = window.location;
    const {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    const resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      const isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    const paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (false) {}
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    let {
      children
    } = this.props;
    const {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = /*#__PURE__*/_react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    const child = _react.Children.only(children);

    const props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

if (false) {}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "cnNH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SidebarMobileLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarLoader; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_content_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("EGWi");
/* harmony import */ var react_content_loader__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_content_loader__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const PostLoader = props => __jsx(react_content_loader__WEBPACK_IMPORTED_MODULE_1___default.a, {
  height: 350,
  width: 245,
  speed: 2,
  backgroundColor: "#f3f3f3",
  foregroundColor: "#ecebeb"
}, __jsx("rect", {
  x: "2",
  y: "2",
  rx: "0",
  ry: "0",
  width: "240",
  height: "197"
}), __jsx("rect", {
  x: "15",
  y: "220",
  rx: "0",
  ry: "0",
  width: "140",
  height: "25"
}), __jsx("rect", {
  x: "15",
  y: "254",
  rx: "0",
  ry: "0",
  width: "65",
  height: "15"
}), __jsx("rect", {
  x: "15",
  y: "300",
  rx: "0",
  ry: "0",
  width: "67",
  height: "20"
}), __jsx("rect", {
  x: "170",
  y: "300",
  rx: "0",
  ry: "0",
  width: "60",
  height: "20"
}));

const SidebarMobileLoader = () => __jsx(react_content_loader__WEBPACK_IMPORTED_MODULE_1___default.a, {
  height: 46,
  width: 400,
  speed: 2,
  backgroundColor: "#f3f3f3",
  foregroundColor: "#ecebeb"
}, __jsx("rect", {
  x: "58",
  y: "10",
  rx: "0",
  ry: "0",
  width: "287",
  height: "26"
}), __jsx("rect", {
  x: "364",
  y: "10",
  rx: "0",
  ry: "0",
  width: "26",
  height: "26"
}), __jsx("rect", {
  x: "16",
  y: "10",
  rx: "0",
  ry: "0",
  width: "26",
  height: "26"
}));
const SidebarLoader = () => __jsx(react_content_loader__WEBPACK_IMPORTED_MODULE_1___default.a, {
  height: 400,
  width: "calc(100% - 30px)",
  speed: 2,
  backgroundColor: "#f3f3f3",
  foregroundColor: "#ecebeb"
}, __jsx("rect", {
  x: "376",
  y: "22",
  rx: "0",
  ry: "0",
  width: "0",
  height: "0"
}), __jsx("rect", {
  x: "27",
  y: "50",
  rx: "0",
  ry: "0",
  width: "24",
  height: "24"
}), __jsx("rect", {
  x: "69",
  y: "50",
  rx: "0",
  ry: "0",
  width: "260",
  height: "24"
}), __jsx("rect", {
  x: "27",
  y: "89",
  rx: "0",
  ry: "0",
  width: "24",
  height: "24"
}), __jsx("rect", {
  x: "69",
  y: "89",
  rx: "0",
  ry: "0",
  width: "260",
  height: "24"
}), __jsx("rect", {
  x: "27",
  y: "128",
  rx: "0",
  ry: "0",
  width: "24",
  height: "24"
}), __jsx("rect", {
  x: "69",
  y: "128",
  rx: "0",
  ry: "0",
  width: "260",
  height: "24"
}), __jsx("rect", {
  x: "27",
  y: "167",
  rx: "0",
  ry: "0",
  width: "24",
  height: "24"
}), __jsx("rect", {
  x: "69",
  y: "167",
  rx: "0",
  ry: "0",
  width: "260",
  height: "24"
}), __jsx("rect", {
  x: "27",
  y: "206",
  rx: "0",
  ry: "0",
  width: "24",
  height: "24"
}), __jsx("rect", {
  x: "69",
  y: "206",
  rx: "0",
  ry: "0",
  width: "260",
  height: "24"
}), __jsx("rect", {
  x: "27",
  y: "245",
  rx: "0",
  ry: "0",
  width: "24",
  height: "24"
}), __jsx("rect", {
  x: "69",
  y: "245",
  rx: "0",
  ry: "0",
  width: "260",
  height: "24"
}), __jsx("rect", {
  x: "27",
  y: "284",
  rx: "0",
  ry: "0",
  width: "24",
  height: "24"
}), __jsx("rect", {
  x: "69",
  y: "284",
  rx: "0",
  ry: "0",
  width: "260",
  height: "24"
}), __jsx("rect", {
  x: "27",
  y: "323",
  rx: "0",
  ry: "0",
  width: "24",
  height: "24"
}), __jsx("rect", {
  x: "69",
  y: "323",
  rx: "0",
  ry: "0",
  width: "260",
  height: "24"
}));
/* harmony default export */ __webpack_exports__["c"] = (PostLoader);

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "ddIo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SEO; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const SEO = ({
  title,
  description,
  canonical,
  css,
  js,
  image
}) => __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, __jsx("title", null, title), __jsx("meta", {
  name: "description",
  content: description
}), __jsx("meta", {
  name: "viewport",
  content: "width=device-width,minimum-scale=1,initial-scale=1"
}), __jsx("meta", {
  property: "og:type",
  content: "website"
}), __jsx("meta", {
  name: "og:title",
  property: "og:title",
  content: title
}), __jsx("meta", {
  name: "og:description",
  property: "og:description",
  content: description
}), __jsx("meta", {
  property: "og:site_name",
  content: "Proper Noun"
}), __jsx("meta", {
  property: "og:url",
  content: `${canonical}`
}), __jsx("meta", {
  name: "twitter:card",
  content: "summary"
}), __jsx("meta", {
  name: "twitter:title",
  content: title
}), __jsx("meta", {
  name: "twitter:description",
  content: description
}), __jsx("meta", {
  name: "twitter:site",
  content: "@propernounco"
}), __jsx("meta", {
  name: "twitter:creator",
  content: "@propernounco"
}), css && __jsx("link", {
  rel: "stylesheet",
  href: `${css}`
}), image ? __jsx("meta", {
  property: "og:image",
  content: `${image}`
}) : __jsx("meta", {
  property: "og:image",
  content: "https://www.propernoun.co/static/images/proper-noun-social.png"
}), image && __jsx("meta", {
  name: "twitter:image",
  content: `${image}`
}), canonical && __jsx("link", {
  rel: "canonical",
  href: `${canonical}`
}), js && __jsx("script", {
  type: "text/javascript",
  src: `${js}`
}));

/***/ }),

/***/ "dq9M":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ LanguageProvider; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ useLocale; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-intl"
var external_react_intl_ = __webpack_require__("k004");

// EXTERNAL MODULE: ./styled/global.style.tsx
var global_style = __webpack_require__("9aLd");

// EXTERNAL MODULE: external "js-cookie"
var external_js_cookie_ = __webpack_require__("vmXh");
var external_js_cookie_default = /*#__PURE__*/__webpack_require__.n(external_js_cookie_);

// CONCATENATED MODULE: ./contexts/language/language.config.ts
const defaultLocale = 'en';
const locales = ['en', 'ar', 'es', 'de', 'zh', 'he'];
const rtlLocales = ['ar', 'he']; // need to customize later

const languageNames = {
  en: 'English',
  fr: 'français',
  pl: 'polski'
};
// CONCATENATED MODULE: ./contexts/language/language.utils.ts


function isLocale(tested) {
  return locales.some(locale => locale === tested);
}
function isRTL(tested) {
  return rtlLocales.some(locale => locale === tested);
}
function getInitialLocale() {
  // preference from the previous session
  const localSetting = external_js_cookie_default.a.get('locale');

  if (localSetting && isLocale(localSetting)) {
    return localSetting;
  } // the language setting of the browser
  // const [browserSetting] = navigator.language.split('-');
  // if (isLocale(browserSetting)) {
  //   return browserSetting;
  // }


  return defaultLocale;
}
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");

// EXTERNAL MODULE: external "stylis-plugin-rtl"
var external_stylis_plugin_rtl_ = __webpack_require__("xoY3");
var external_stylis_plugin_rtl_default = /*#__PURE__*/__webpack_require__.n(external_stylis_plugin_rtl_);

// CONCATENATED MODULE: ./contexts/language/language.provider.tsx
var __jsx = external_react_default.a.createElement;







const LanguageContext = external_react_default.a.createContext({});
const LanguageProvider = ({
  children,
  messages,
  initLocale
}) => {
  const [locale, setLocale] = external_react_default.a.useState(initLocale !== null && initLocale !== void 0 ? initLocale : 'en');

  const changeLanguage = newLocale => {
    setLocale(newLocale);
    document.documentElement.lang = newLocale;
    external_js_cookie_default.a.set('locale', newLocale);
  };

  let isRtl = isRTL(locale);
  return __jsx(LanguageContext.Provider, {
    value: {
      locale,
      changeLanguage,
      isRtl
    }
  }, __jsx(external_react_intl_["IntlProvider"], {
    locale: locale,
    messages: messages[locale]
  }, __jsx(global_style["b" /* InjectRTL */], {
    lang: locale,
    dir: isRtl ? 'rtl' : 'ltr'
  }, __jsx(external_styled_components_["StyleSheetManager"], {
    stylisPlugins: isRtl ? [external_stylis_plugin_rtl_default.a] : []
  }, children))));
};
const useLocale = () => external_react_default.a.useContext(LanguageContext);

/***/ }),

/***/ "eFaF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const ReadMore = ({
  children,
  more,
  less,
  character
}) => {
  const {
    0: expanded,
    1: setExpanded
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const toggleLines = event => {
    event.preventDefault();
    setExpanded(!expanded);
  };

  if (!children) return null;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, children && children.length < character || expanded ? children : children.substring(0, character), children && children.length > character && !expanded && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("br", null), __jsx("span", null, __jsx("a", {
    href: "#",
    onClick: toggleLines,
    style: {
      color: '#009e7f',
      fontWeight: 700
    }
  }, more))), children && children.length > character && expanded && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("br", null), __jsx("span", null, __jsx("a", {
    href: "#",
    onClick: toggleLines,
    style: {
      color: '#009e7f',
      fontWeight: 700
    }
  }, less))));
};

ReadMore.defaultProps = {
  character: 150,
  more: 'Read more',
  less: 'less'
};
/* harmony default export */ __webpack_exports__["a"] = (ReadMore);

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.default = void 0;

var _url2 = __webpack_require__("bzos");

var _mitt = _interopRequireDefault(__webpack_require__("dZ6Y"));

var _utils = __webpack_require__("g/15");

var _isDynamic = __webpack_require__("/jkW");

var _routeMatcher = __webpack_require__("gguc");

var _routeRegex = __webpack_require__("YTqd");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function addBasePath(path) {
  return path.indexOf(basePath) !== 0 ? basePath + path : path;
}

function delBasePath(path) {
  return path.indexOf(basePath) === 0 ? path.substr(basePath.length) || '/' : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch((0, _utils.formatWithValidation)({
      pathname: addBasePath( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${delBasePath(pathname)}.json`),
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as2, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname,
          query
        }), (0, _utils.getURL)());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && (0, _url2.parse)(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (false) {}

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute((0, _url2.parse)(asPath).pathname);
      return  true && this.sdc[pathname] ? Promise.resolve(this.sdc[pathname]) : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = (0, _url2.parse)(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as2;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign({}, data, {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (_utils.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      let url = typeof _url === 'object' ? (0, _utils.formatWithValidation)(_url) : _url;
      let as = typeof _as === 'object' ? (0, _utils.formatWithValidation)(_as) : _as;
      url = addBasePath(url);
      as = addBasePath(as); // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as, options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = (0, _url2.parse)(url, true);

      if (!pathname || protocol) {
        if (false) {}

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if ((0, _isDynamic.isDynamicRoute)(route)) {
        const {
          pathname: asPathname
        } = (0, _url2.parse)(as);
        const routeRegex = (0, _routeRegex.getRouteRegex)(route);
        const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (false) {}

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/vercel/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);

        if (false) {}

        this.set(route, pathname, query, as, routeInfo).then(() => {
          if (error) {
            Router.events.emit('routeChangeError', error, as);
            throw error;
          }

          Router.events.emit('routeChangeComplete', as);
          return resolve(true);
        });
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = (0, _url2.parse)(url);

      if (!pathname || protocol) {
        if (false) {}

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (false) {}

      const route = delBasePath(toRoute(pathname));
      Promise.all([this.pageLoader.prefetchData(url, delBasePath(asPath)), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    route = delBasePath(route);
    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _url = __webpack_require__("bzos");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (false) { var _App$prototype; } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url, options) {
  if (false) {}

  return (0, _url.format)(url, options);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "gHRq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ Counter; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// CONCATENATED MODULE: ./assets/icons/plus-minus.tsx
var __jsx = external_react_default.a.createElement;
 // SVG plus icon

const Plus = ({
  color = 'currentColor',
  width = '12px',
  height = '12px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 12 12"
  }, __jsx("g", {
    id: "Group_3351",
    "data-name": "Group 3351",
    transform: "translate(-1367 -190)"
  }, __jsx("rect", {
    "data-name": "Rectangle 520",
    width: "12",
    height: "2",
    rx: "1",
    transform: "translate(1367 195)",
    fill: color
  }), __jsx("rect", {
    "data-name": "Rectangle 521",
    width: "12",
    height: "2",
    rx: "1",
    transform: "translate(1374 190) rotate(90)",
    fill: color
  })));
}; // SVG minus icon

const Minus = ({
  color = 'currentColor',
  width = '12px',
  height = '2px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 12 2"
  }, __jsx("rect", {
    "data-name": "Rectangle 522",
    width: "12",
    height: "2",
    rx: "1",
    fill: color
  }));
};
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "@styled-system/css"
var css_ = __webpack_require__("ExBD");
var css_default = /*#__PURE__*/__webpack_require__.n(css_);

// EXTERNAL MODULE: external "styled-system"
var external_styled_system_ = __webpack_require__("4JT2");

// CONCATENATED MODULE: ./components/Counter/Counter.style.tsx



const CounterBox = external_styled_components_default.a.div.withConfig({
  displayName: "Counterstyle__CounterBox",
  componentId: "sc-14ahato-0"
})(css_default()({
  display: 'flex',
  backgroundColor: 'primary',
  color: 'white',
  fontSize: 2,
  fontWeight: 6
}), {
  borderRadius: 200,
  justifyContent: 'space-between',
  alignItems: 'center',
  overflow: 'hidden',
  flexShrink: 0,
  '&:focus': {
    outline: 'none'
  }
}, Object(external_styled_system_["variant"])({
  variants: {
    horizontal: {
      width: 104,
      height: 36
    },
    vertical: {
      width: 30,
      height: 90,
      flexDirection: 'column-reverse'
    },
    lightHorizontal: {
      width: 104,
      height: 36,
      backgroundColor: 'lightColor',
      color: 'darkBold'
    },
    lightVertical: {
      width: 30,
      height: 90,
      flexDirection: 'column-reverse',
      backgroundColor: 'lightColor',
      color: 'darkBold'
    }
  }
}));
const CounterButton = external_styled_components_default.a.button.withConfig({
  displayName: "Counterstyle__CounterButton",
  componentId: "sc-14ahato-1"
})({
  border: 'none',
  backgroundColor: 'transparent',
  color: '#ffffff',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  padding: 10,
  cursor: 'pointer',
  '&:hover, &:focus': {
    outline: 'none'
  }
}, Object(external_styled_system_["variant"])({
  variants: {
    lightHorizontal: {
      color: 'darkRegular'
    },
    lightVertical: {
      color: 'darkRegular'
    }
  }
}));
const CounterValue = external_styled_components_default.a.span.withConfig({
  displayName: "Counterstyle__CounterValue",
  componentId: "sc-14ahato-2"
})({
  pointerEvents: 'none'
});
CounterValue.displayName = 'CounterValue';
CounterButton.displayName = 'CounterButton';
CounterBox.displayName = 'CounterBox';
CounterBox.defaultProps = {
  variant: 'horizontal'
};
// CONCATENATED MODULE: ./components/Counter/Counter.tsx
var Counter_jsx = external_react_default.a.createElement;



const Counter = ({
  onDecrement,
  onIncrement,
  value,
  variant,
  className
}) => {
  return Counter_jsx(CounterBox, {
    variant: variant,
    className: className
  }, Counter_jsx(CounterButton, {
    onClick: onDecrement,
    variant: variant
  }, Counter_jsx(Minus, null)), Counter_jsx(CounterValue, null, value), Counter_jsx(CounterButton, {
    onClick: onIncrement,
    variant: variant
  }, Counter_jsx(Plus, null)));
};

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "j5Ji":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const AuthContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])({});

/***/ }),

/***/ "k004":
/***/ (function(module, exports) {

module.exports = require("react-intl");

/***/ }),

/***/ "kYf9":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "kaUJ":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQ4AAADwCAAAAADUNdWkAAADYklEQVR42u3Z7ZKiMBCF4b7/mw1EUfkwrmOtuzoiEKEbE97ze2qqfPS0TSsX8hCBAA444IADDjjggAMOOOCAAw444IADDjjgIHDAAQcccMABBxxwwAEHHHDAAQcccMABBxwEDjjggAMOOOCAAw444IADDjjggAMOOOCAg8ABBxxwwAEHHHDAAQcccMABBxxwwAEHHHAQOOCAA44v5WjbNsBxSzh59xN/CHBcmsLdUxw3z3Fwj9mHbXM8a1w9Ns3RuN85bpmjfOEownY5aveaw3Y59j0c5XY5XF8CHI9pt8oRFuBo+XQ8pCuqfDiKubMjXB936mw4qh4NH/MPdusNGwWOpofjFL3iF+dctlI/ayu9b3E+ZMLRvnBETILu3+ipMuF4WdMjXlgoVn3w07l31B8/sDwVrcmE49L+f1llzIt6/lYqukw4rh+Q6vax39dzWmY+TlV/WIh9c19n8C4njsici9UPJV/EEXzfdl9nyTFhCFS9z36249SIox1/aDm6/pjeWW04Qjm6UzXuXXx2HD9PZd3E3fw1VWYc7eib3D9G7cep2FRl7BFk5wbT5sRx/42yG/2LdzE7fohRVQbrUruxWG3rYlWVgboMjVHjcSpmVXlblzBBw+r4IWZVeVsX7yalyYEjlGPvcTVNw2ZbF8Oq9NaldlNjMU7FsCp9dWnd9OxS5wjlyEg8FxEcBscPMa3K77oE76JSJ83Rjj2gVnEa+uNUbKvyXJeji4328UOMq/JYl8bFxyfL0Y28pK74gEN5W1fk8MMLd+wYNRmnehxDg6EbP3Gsc/wQ86r8rcvhUw3V44fYV+VWl9p9HsVtXVaoyu0tnsGhOE5lharMzzExDq/LoXb8kFWqMjta27okWBXFcSopVkXv+CEpVkXv+CFJVkVtW5c0q6I1TiXRqigdPyTVqugcPyTVquhs65JsVVTGqaRbFY3jhyRcFYXjh6RcleW3dUm6KouPU0m6KosfPyTtqix9/FiUY6WcvvabJfXAAQcccMABBxxwwAEHHHDAAQcccMABBxxwEDjggAMOOOCAAw444IADDjjggAMOOOCAAw4CBxxwwAEHHHDAAQcccMABBxxwwAEHHHDAQeCAAw444IADDjjggAMOOOCAAw444IADDjgIHHDAAQcci+UPkso6r/spGNEAAAAASUVORK5CYII="

/***/ }),

/***/ "mU8t":
/***/ (function(module, exports) {

module.exports = require("@apollo/react-hooks");

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("7KCV");

var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error(`Error when running the Router event: ${eventField}`); // tslint:disable-next-line:no-console

          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "noiX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoaderWrapper; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const rotate = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["keyframes"])(["from{transform:rotate(0deg);}to{transform:rotate(360deg);}"]);
const SpinnerWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Loader__SpinnerWrapper",
  componentId: "sc-11kkpdf-0"
})(["width:100%;height:100vh;display:flex;align-items:center;justify-content:center;"]);
const Spinner = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Loader__Spinner",
  componentId: "sc-11kkpdf-1"
})(["", ";border:4px solid #ffffff;border-top:4px solid #009e7f;border-radius:50%;transition-property:transform;animation-name:", ";animation-duration:1.2s;animation-iteration-count:infinite;animation-timing-function:linear;"], props => `
    width: ${props.size ? props.size : '24px'};
    height: ${props.size ? props.size : '24px'};
  `, rotate);

const Loader = color => {
  return __jsx(Spinner, color);
};

const LoaderWrapper = () => __jsx(SpinnerWrapper, null, __jsx(Spinner, {
  size: "50px"
}));
/* harmony default export */ __webpack_exports__["b"] = (Loader);

/***/ }),

/***/ "oz4i":
/***/ (function(module, exports) {

module.exports = require("apollo-cache-inmemory");

/***/ }),

/***/ "qC9r":
/***/ (function(module, exports) {

module.exports = require("react-custom-scrollbars");

/***/ }),

/***/ "qbum":
/***/ (function(module, exports) {

module.exports = require("@redq/reuse-modal");

/***/ }),

/***/ "s5Ij":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const SearchContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])({});

/***/ }),

/***/ "txk1":
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "vDU6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getLocalState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return setLocalState; });
// localStorage.js
const getLocalState = key => {
  try {
    const serializedState = localStorage.getItem(key);

    if (serializedState === null || serializedState === "null") {
      return undefined;
    }

    let result;

    try {
      result = JSON.parse(serializedState);
    } catch (e) {
      result = serializedState;
    }

    return result;
  } catch (err) {
    return undefined;
  }
};
const setLocalState = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch {// ignore write errors
  }
};

/***/ }),

/***/ "vmXh":
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "xoY3":
/***/ (function(module, exports) {

module.exports = require("stylis-plugin-rtl");

/***/ }),

/***/ "yBv+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Accessories", function() { return Accessories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BathOil", function() { return BathOil; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeautyHealth", function() { return BeautyHealth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Beverage", function() { return Beverage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Breakfast", function() { return Breakfast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cooking", function() { return Cooking; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dairy", function() { return Dairy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Deodorent", function() { return Deodorent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Eyes", function() { return Eyes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Face", function() { return Face; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacialCare", function() { return FacialCare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FruitsVegetable", function() { return FruitsVegetable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HandBags", function() { return HandBags; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeCleaning", function() { return HomeCleaning; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LaptopBags", function() { return LaptopBags; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Lips", function() { return Lips; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeatFish", function() { return MeatFish; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OralCare", function() { return OralCare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OuterWear", function() { return OuterWear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pants", function() { return Pants; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PetCare", function() { return PetCare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Purse", function() { return Purse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShavingNeeds", function() { return ShavingNeeds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Shirts", function() { return Shirts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoulderBags", function() { return ShoulderBags; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Skirts", function() { return Skirts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Snacks", function() { return Snacks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tops", function() { return Tops; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wallet", function() { return Wallet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WomenDress", function() { return WomenDress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Google", function() { return Google; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GooglePlus", function() { return GooglePlus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Facebook", function() { return Facebook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Twitter", function() { return Twitter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Linkedin", function() { return Linkedin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MinusSquareO", function() { return MinusSquareO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlusSquareO", function() { return PlusSquareO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloseSquareO", function() { return CloseSquareO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Plus", function() { return Plus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlusOutline", function() { return PlusOutline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Minus", function() { return Minus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartIcon", function() { return CartIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroceryIcon", function() { return GroceryIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MakeupIcon", function() { return MakeupIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedicineIcon", function() { return MedicineIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DressIcon", function() { return DressIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Handbag", function() { return Handbag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EllipsisIcon", function() { return EllipsisIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GiftBox", function() { return GiftBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrowNext", function() { return ArrowNext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrowPrev", function() { return ArrowPrev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LockIcon", function() { return LockIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchIcon", function() { return SearchIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchIconSmall", function() { return SearchIconSmall; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmartPhone", function() { return SmartPhone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloseIcon", function() { return CloseIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryIcon", function() { return CategoryIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrowDropDown", function() { return ArrowDropDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingBag", function() { return ShoppingBag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingBagLarge", function() { return ShoppingBagLarge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PencilIcon", function() { return PencilIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LongArrowLeft", function() { return LongArrowLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckMark", function() { return CheckMark; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationIcon", function() { return NotificationIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertDotIcon", function() { return AlertDotIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardIcon", function() { return DashboardIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductIcon", function() { return ProductIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarCategoryIcon", function() { return SidebarCategoryIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderIcon", function() { return OrderIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerIcon", function() { return CustomerIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InboxIcon", function() { return InboxIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RefundIcon", function() { return RefundIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CouponIcon", function() { return CouponIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingIcon", function() { return SettingIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutIcon", function() { return LogoutIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarretDownIcon", function() { return CarretDownIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarretUpIcon", function() { return CarretUpIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionIcon", function() { return OptionIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Revenue", function() { return Revenue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Refund", function() { return Refund; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrowUp", function() { return ArrowUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrowDown", function() { return ArrowDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadIcon", function() { return UploadIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteSettings", function() { return SiteSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Members", function() { return Members; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuIcon", function() { return MenuIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrowLeftRound", function() { return ArrowLeftRound; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoinIcon", function() { return CoinIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartIconBig", function() { return CartIconBig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserIcon", function() { return UserIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliveryIcon", function() { return DeliveryIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IosArrowUp", function() { return IosArrowUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IosArrowDown", function() { return IosArrowDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuDown", function() { return MenuDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpIcon", function() { return HelpIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SAFlag", function() { return SAFlag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFlag", function() { return DEFlag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ESFlag", function() { return ESFlag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ILFlag", function() { return ILFlag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CNFlag", function() { return CNFlag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USFlag", function() { return USFlag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InkPen", function() { return InkPen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdobeIcon", function() { return AdobeIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAvatar", function() { return UserAvatar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookIcon", function() { return BookIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FurnitureIcon", function() { return FurnitureIcon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


const Accessories = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 18 18"
  }, __jsx("g", {
    "data-name": "Group 15",
    fill: color
  }, __jsx("path", {
    "data-name": "Path 53",
    d: "M17.356 0H.643A.643.643 0 000 .643v10.925a.643.643 0 00.643.643h16.714a.643.643 0 00.643-.643V.643A.644.644 0 0017.356 0zM2.431 11.27a1.306 1.306 0 111.306-1.306 1.306 1.306 0 01-1.306 1.306zm0-3.857a1.305 1.305 0 11.924-.382 1.306 1.306 0 01-.924.382zm0-3.857a1.306 1.306 0 11.925-.384 1.306 1.306 0 01-.925.384zm3.218 7.714a1.307 1.307 0 11.922-.382 1.306 1.306 0 01-.922.382zm0-3.857a1.307 1.307 0 11.922-.381 1.306 1.306 0 01-.922.381zm0-3.857a1.307 1.307 0 11.92-.385 1.306 1.306 0 01-.92.385zm3.218 7.714a1.09 1.09 0 10-.008 0zm0-3.857a1.091 1.091 0 10-.008 0zm0-3.857a1.091 1.091 0 10-.008 0zm3.218 7.714a1.1 1.1 0 10-.012 0zm-1.306-5.166a.525.525 0 11-.012 0zm1.306-2.551a1.571 1.571 0 10-.012 0zm4.8 7c0 .355-.412.643-.921.643H15.5c-.508 0-.921-.288-.921-.643V1.768c0-.355.412-.643.921-.643h.461c.508 0 .921.288.921.643z"
  }), __jsx("path", {
    "data-name": "Path 54",
    d: "M16.348 2.78c-.318-1.052-.434-.893-.476-1.186-.013-.1-.346-.095-.351 0-.017.261-.15.378-.365.888-.236.562-.193 1 0 1.186h-.069v2.52a.274.274 0 00-.085.2v4.2h1.445v-4.2a.273.273 0 00-.085-.2V3.684c.106-.13.143-.393-.014-.904zm-.29 3.134h-.672V3.971h.67z"
  }), __jsx("path", {
    "data-name": "Path 55",
    d: "M2.43 1.246a1 1 0 101 1 1 1 0 00-1-1z"
  }), __jsx("path", {
    "data-name": "Path 56",
    d: "M12.073 1.246a1 1 0 101 1 1 1 0 00-1-1z"
  }), __jsx("path", {
    "data-name": "Path 57",
    d: "M8.859 5.103a1 1 0 101 1 1 1 0 00-1-1z"
  }), __jsx("path", {
    "data-name": "Path 58",
    d: "M5.645 8.96a1 1 0 101 1 1 1 0 00-1-1z"
  }), __jsx("path", {
    "data-name": "Path 59",
    d: "M12.073 8.96a1 1 0 101 1 1 1 0 00-1-1z"
  })));
};
const BathOil = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 18 18"
  }, __jsx("g", {
    "data-name": "Group 27",
    fill: color
  }, __jsx("path", {
    "data-name": "Path 67",
    d: "M3.866 16.077a2.481 2.481 0 001.645-1.613h-.42q-.269 0-.531-.012a1.23 1.23 0 01-.87.755.724.724 0 10.175.863z"
  }), __jsx("path", {
    "data-name": "Path 68",
    d: "M15.172 16.479a.725.725 0 10-.432-1.309 1.458 1.458 0 01-.78-.77 4.085 4.085 0 01-.686.062h-.315a2.318 2.318 0 001.543 1.579.725.725 0 00.67.438z"
  }), __jsx("path", {
    "data-name": "Path 69",
    d: "M13.988 2.638l-1.482-1.482a5.015 5.015 0 00-1.356.863l1.972 1.972a4.972 4.972 0 00.866-1.353z"
  }), __jsx("path", {
    "data-name": "Path 70",
    d: "M11.173 3.19a.148.148 0 00.108-.043l.208-.208a.147.147 0 00-.164-.237.15.15 0 00-.044.029l-.209.208a.148.148 0 00.108.252z"
  }), __jsx("path", {
    "data-name": "Path 71",
    d: "M10.547 3.819a.148.148 0 00.108-.043l.208-.208a.148.148 0 00-.208-.208l-.208.208a.148.148 0 00.108.251z"
  }), __jsx("path", {
    "data-name": "Path 72",
    d: "M9.92 4.445a.148.148 0 00.108-.043l.208-.208a.148.148 0 00-.208-.208l-.208.208a.148.148 0 00.108.251z"
  }), __jsx("path", {
    "data-name": "Path 73",
    d: "M11.932 3.313a.146.146 0 00-.193-.193.15.15 0 00-.044.029l-.208.209a.148.148 0 00.209.208l.208-.209a.144.144 0 00.028-.044z"
  }), __jsx("path", {
    "data-name": "Path 74",
    d: "M11.277 3.775a.148.148 0 00-.208 0l-.208.208a.148.148 0 00.209.208l.208-.208a.148.148 0 000-.208z"
  }), __jsx("path", {
    "data-name": "Path 75",
    d: "M10.652 4.402a.148.148 0 00-.208 0l-.208.209a.148.148 0 00.209.208l.208-.209a.148.148 0 000-.208z"
  }), __jsx("path", {
    "data-name": "Path 76",
    d: "M12.007 4.028a.148.148 0 00.108-.043l.208-.208a.143.143 0 00.029-.044.148.148 0 00-.238-.164l-.208.208a.148.148 0 000 .208.146.146 0 00.101.043z"
  }), __jsx("path", {
    "data-name": "Path 77",
    d: "M11.38 4.654a.148.148 0 00.108-.043l.208-.208a.148.148 0 00-.208-.208l-.208.208a.148.148 0 00.108.251z"
  }), __jsx("path", {
    "data-name": "Path 78",
    d: "M10.756 5.28a.148.148 0 00.108-.043l.208-.208a.148.148 0 00-.208-.208l-.208.208a.148.148 0 00.108.251z"
  }), __jsx("path", {
    "data-name": "Path 79",
    d: "M17.414 7.083h-.886V.295a.295.295 0 00-.3-.3h-1.277a.3.3 0 00-.2.078l-1.061.976a1.175 1.175 0 00-.69.096l1.013 1.014a1.187 1.187 0 00.083-.68l.966-.888h.872v6.493H.59a.59.59 0 00-.59.591v.59a.59.59 0 00.59.59h.367c.045.229.108.491.176.794l.413 1.98a2.9 2.9 0 003.138 2.53c.134 0 .27.006.408.006h8.191a3.876 3.876 0 00.565-.041 3.157 3.157 0 002.637-2.342l.671-2.929h.3A.588.588 0 0018 8.265v-.59a.59.59 0 00-.586-.592zm-4.7 6.168a.035.035 0 000 .005v-.005z"
  })));
};
const BeautyHealth = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 18 18"
  }, __jsx("g", {
    "data-name": "Group 12"
  }, __jsx("g", {
    "data-name": "Group 11",
    fill: color
  }, __jsx("path", {
    "data-name": "Path 31",
    d: "M2.662 15.865a.612.612 0 00.611.611H4.82a.612.612 0 00.611-.611v-1.368H2.662z"
  }), __jsx("path", {
    "data-name": "Path 32",
    d: "M1.435 13.195a.793.793 0 00.791.791h3.64a.793.793 0 00.791-.791l1.015-8.766-6.614 5.507z"
  }), __jsx("path", {
    "data-name": "Path 33",
    d: "M7.3 0H.791A.791.791 0 000 .79l.917 7.919 6.927-5.768L8.093.79a.791.791 0 00-.792-.791z"
  }), __jsx("path", {
    "data-name": "Path 34",
    d: "M15.238 7.065a.769.769 0 00-.769-.769h-1.9a.769.769 0 00-.769.769v1.742h3.443z"
  }), __jsx("path", {
    "data-name": "Path 35",
    d: "M16.269 9.343a2.021 2.021 0 00-.275-.02h-4.956a2.006 2.006 0 00-2 2v3.661a2 2 0 002 2h4.956a2 2 0 002.005-2v-3.66a2 2 0 00-1.731-1.985zm-2.753 5.4a1.582 1.582 0 111.582-1.582 1.582 1.582 0 01-1.582 1.582z"
  }))));
};
const Beverage = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 18 18"
  }, __jsx("g", {
    "data-name": "Group 9"
  }, __jsx("path", {
    "data-name": "Path 30",
    d: "M12.405.7a3.635 3.635 0 00-3.591 3.1H4.4L.811 0 .043.723l2.9 3.084H-.001l6.262 7.018v6.121H3.327V18h7.03v-1.054H7.32v-6.122l3.091-3.46a3.629 3.629 0 102-6.66zM9.817 6.442H3.771L2.358 4.863h8.87z",
    fill: color
  })));
};
const Breakfast = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 18 18"
  }, __jsx("g", {
    "data-name": "Group 7",
    fill: color
  }, __jsx("path", {
    "data-name": "Path 27",
    d: "M13.034 14.465c2.98-.12 4.31-1.476 4.31-3.136 0-1.442-1-2.655-3.217-3.028.01-.539.011-1.054.011-1.536H0c0 3.158 0 7.743 2.84 9.935-1.724.131-2.84.342-2.84.577 0 .4 3.163.723 7.067.723s7.066-.323 7.066-.723c0-.236-1.118-.446-2.84-.577a5.965 5.965 0 001.741-2.235zm1.035-4.79c1.243.288 1.465.9 1.451 1.687-.016.9-.276 1.508-1.973 1.712a16.339 16.339 0 00.521-3.4zM1.706 7.862h2.209c-.99 2.922.681 7.542.68 7.542-3.611-2.765-2.889-7.542-2.889-7.542z"
  }), __jsx("path", {
    "data-name": "Path 28",
    d: "M8.229 4.861c.281-2.545 5.9-1.272 4.729-4.576-.18-.5-.989-.287-.808.222.514 1.449-1.437 1.625-2.432 1.958a2.92 2.92 0 00-2.328 2.4c-.061.534.774.528.839-.004z"
  }), __jsx("path", {
    "data-name": "Path 29",
    d: "M12.207 3.082a2.924 2.924 0 00-2.439 1.879.419.419 0 00.807.222c.377-1.272 2.047-1.293 3.115-1.6a2.031 2.031 0 001.644-2.346c-.069-.528-.906-.539-.837 0 .195 1.472-1.16 1.579-2.29 1.845z"
  })));
};
const Cooking = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 18 18"
  }, __jsx("g", {
    fill: color
  }, __jsx("path", {
    "data-name": "Path 22",
    d: "M13.68 6.482H9.835a.63.63 0 100-1.259H8.268a.63.63 0 000 1.259H4.417a2.327 2.327 0 00-2.127 1.98h13.52a2.328 2.328 0 00-2.13-1.98z"
  }), __jsx("path", {
    "data-name": "Path 23",
    d: "M15.84 9.544v-.18H0v.9h2.256v5.578a2.16 2.16 0 002.16 2.16h9.264a2.16 2.16 0 002.16-2.16v-5.398H18v-.9z"
  }), __jsx("path", {
    "data-name": "Path 24",
    d: "M5.743 2.166a3.089 3.089 0 00.2.237l.175.175c.112.112.213.224.294.321a1.464 1.464 0 01.1.137.266.266 0 01.051.112.269.269 0 01-.068.178 1.08 1.08 0 01-.2.188.636.636 0 00.309.036.544.544 0 00.336-.167.655.655 0 00.165-.4 1.1 1.1 0 00-.043-.375 1.972 1.972 0 00-.279-.572 3.125 3.125 0 00-.173-.224 1.837 1.837 0 01-.135-.176 1.679 1.679 0 01-.336-.69 1.736 1.736 0 01.157-.945 1.162 1.162 0 00-.858.873 1.4 1.4 0 00.017.7 1.888 1.888 0 00.289.6z"
  }), __jsx("path", {
    "data-name": "Path 25",
    d: "M8.077 2.166c.063.083.13.162.2.237l.173.175c.112.112.213.224.3.321.039.05.073.1.1.137a.243.243 0 01.05.112.264.264 0 01-.067.178 1.041 1.041 0 01-.2.188.642.642 0 00.31.036.543.543 0 00.336-.167.653.653 0 00.165-.4 1.1 1.1 0 00-.041-.375 2 2 0 00-.28-.572c-.055-.082-.124-.165-.173-.224a1.837 1.837 0 01-.135-.176 1.679 1.679 0 01-.336-.694A1.736 1.736 0 018.63 0a1.161 1.161 0 00-.857.873 1.4 1.4 0 00.016.7 1.884 1.884 0 00.289.6z"
  }), __jsx("path", {
    "data-name": "Path 26",
    d: "M10.204 2.166a2.971 2.971 0 00.2.237l.175.175c.112.112.212.224.294.321a1.465 1.465 0 01.1.137.28.28 0 01.051.112.266.266 0 01-.068.178 1.041 1.041 0 01-.2.188.64.64 0 00.309.036.547.547 0 00.336-.167.654.654 0 00.163-.4 1.086 1.086 0 00-.041-.375 1.96 1.96 0 00-.279-.572 3.125 3.125 0 00-.173-.224 1.672 1.672 0 01-.135-.176 1.679 1.679 0 01-.33-.694 1.738 1.738 0 01.151-.941A1.16 1.16 0 009.9.874a1.4 1.4 0 00.017.7 1.857 1.857 0 00.29.6z"
  })));
};
const Dairy = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 18 18"
  }, __jsx("g", {
    fill: color
  }, __jsx("path", {
    "data-name": "Path 19",
    d: "M4.313 14.945V12.23a.34.34 0 00-.34-.34H.332a5.534 5.534 0 00-.125 3.393h3.767a.34.34 0 00.339-.338z"
  }), __jsx("path", {
    "data-name": "Path 20",
    d: "M7.652 16.402l.345-.4a3.843 3.843 0 00-.065-4.593l-.223-.278V9.176a1.876 1.876 0 01-.21-.465 1.015 1.015 0 00-.462-1.925H2.968a1.018 1.018 0 00-.391 1.958A2.656 2.656 0 011.7 9.93a4.641 4.641 0 00-1.056 1.282h3.331a1.019 1.019 0 011.014 1.017v2.714a1.019 1.019 0 01-1.018 1.018H.462A3.259 3.259 0 003.41 18h3.261a3.056 3.056 0 001.428-.36 2.313 2.313 0 01-.321-.723zM3.689 8.147h-.722a.34.34 0 010-.678h4.07a.34.34 0 110 .678H3.682z"
  }), __jsx("path", {
    "data-name": "Rectangle 1",
    d: "M13.136 7.14h3.732v7.465h-3.732z"
  }), __jsx("path", {
    "data-name": "Path 21",
    d: "M15.237 3.144l-.25-.21a.4.4 0 01-.13-.321.547.547 0 01.062-.221h-2.368a.34.34 0 010-.678h2.886a1.006 1.006 0 00.071-.353v-.343A1.019 1.019 0 0014.492 0H10.76a1.019 1.019 0 00-1.018 1.018v.34a1 1 0 00.072.353h1.38a.34.34 0 010 .678h-.838a.546.546 0 01.073.2.355.355 0 01-.081.284.68.68 0 01-.063.063c-.077.066-.158.133-.241.2a3.638 3.638 0 00-1.657 2.967v4.786l.074.092a4.507 4.507 0 01.049 5.461l-.115.133.042.171a1.619 1.619 0 001.572 1.233h5.24a1.623 1.623 0 001.622-1.622v-1.074h-4.414V6.462h4.411v-.355a3.645 3.645 0 00-1.631-2.963z"
  })));
};
const Deodorent = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 18 18"
  }, __jsx("g", {
    "data-name": "018---Roll-On",
    fill: color
  }, __jsx("ellipse", {
    cx: "1.607",
    cy: "3.535",
    rx: "1.607",
    ry: "3.535",
    transform: "translate(2.176 8.678)"
  }), __jsx("path", {
    d: "M7.244 4.821H.321a.321.321 0 00-.32.356l.027.254a71.835 71.835 0 01.311 11.215A1.282 1.282 0 001.621 18h4.325a1.282 1.282 0 001.282-1.353 71.835 71.835 0 01.3-11.214l.027-.254a.321.321 0 00-.316-.358zm-6.355.962a.321.321 0 01.321-.321h.641a.321.321 0 110 .641H1.21a.321.321 0 01-.321-.32zm2.9 10.607c-1.261 0-2.25-1.832-2.25-4.178s.988-4.178 2.25-4.178 2.25 1.832 2.25 4.178-.995 4.181-2.256 4.181zM6.354 6.104H3.14a.321.321 0 110-.641h3.214a.321.321 0 110 .641z"
  }), __jsx("path", {
    "data-name": "Shape",
    d: "M3.783 0a2.25 2.25 0 00-2.224 1.929h4.447A2.25 2.25 0 003.783 0zM6.443 2.572H1.128a5.946 5.946 0 00-.237 1.607h5.785a5.946 5.946 0 00-.233-1.607zM11.82 16.716h3.214v-1.284a2.893 2.893 0 10-5.786 0v1.284h.964a.321.321 0 010 .641h-.964v.321a.321.321 0 00.321.321h5.143a.321.321 0 00.321-.321v-.321H11.82a.321.321 0 110-.641zm-.964-1.929a.321.321 0 01-.641 0 1.55 1.55 0 011.606-1.608.321.321 0 110 .641.916.916 0 00-.966.964z"
  })));
};
const Eyes = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 18 18"
  }, __jsx("g", {
    fill: color
  }, __jsx("path", {
    "data-name": "Path 49",
    d: "M3.002 0h-1.5v.75h-1.5v1.5h1.5V3h-1.5v1.5h1.5v.75h-1.5v1.5h1.5v3.75h-.75a.75.75 0 00-.744.842l.75 6a.75.75 0 00.744.657h1.5a.75.75 0 00.744-.657l.75-6a.75.75 0 00-.744-.842h-.75V6.748h1.5v-1.5h-1.5V4.5h1.5V3h-1.5v-.75h1.5V.75h-1.5z"
  }), __jsx("path", {
    "data-name": "Path 50",
    d: "M11.995 17.187l-.746-9.69h-4.5l-.747 9.69a.75.75 0 00.748.807h4.5a.75.75 0 00.748-.807z"
  }), __jsx("path", {
    "data-name": "Path 51",
    d: "M11.251 5.249a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75v1.5h4.5z"
  })));
};
const Face = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 18 18"
  }, __jsx("g", {
    fill: color
  }, __jsx("path", {
    "data-name": "Path 41",
    d: "M6.388 9.238c-3.319 0-5.11 1.36-5.11 1.911s1.791 1.911 5.11 1.911a9.995 9.995 0 002.653-.345 5.1 5.1 0 011.387-2.612 8.865 8.865 0 00-4.04-.864z"
  }), __jsx("path", {
    "data-name": "Path 42",
    d: "M8.34 8.908a7.515 7.515 0 012.3.841 5.111 5.111 0 01.581-.391 7 7 0 00-1.969-.887 5.957 5.957 0 01-.912.438z"
  }), __jsx("path", {
    "data-name": "Path 43",
    d: "M8.958 13.383a10.774 10.774 0 01-2.571.3c-3.29 0-5.749-1.349-5.749-2.555 0-.908 1.394-1.9 3.484-2.33a6.017 6.017 0 01-.9-.433c-1.96.571-3.224 1.647-3.224 2.762 0 1.731 2.922 3.193 6.388 3.193a11.64 11.64 0 002.573-.285c-.008-.112-.018-.234-.018-.354.002-.097.011-.197.017-.298z"
  }), __jsx("path", {
    "data-name": "Path 44",
    d: "M6.388 8.952a4.833 4.833 0 005.11-4.471A4.833 4.833 0 006.388.01a4.833 4.833 0 00-5.11 4.471 4.833 4.833 0 005.11 4.471zm0-8.3a4.194 4.194 0 014.471 3.833 4.194 4.194 0 01-4.471 3.833A4.194 4.194 0 011.917 4.48 4.194 4.194 0 016.388.647z"
  }), __jsx("path", {
    "data-name": "Path 45",
    d: "M6.391 7.675a3.561 3.561 0 003.833-3.193 3.561 3.561 0 00-3.833-3.195A3.561 3.561 0 002.558 4.48a3.561 3.561 0 003.833 3.195zm0-5.749a2.969 2.969 0 013.193 2.555h-.638c0-1.039-1.17-1.911-2.555-1.911z"
  }), __jsx("path", {
    "data-name": "Path 46",
    d: "M17.39 11.304a6.91 6.91 0 01-.592.319 5.4 5.4 0 00-2.518 2.518 6.026 6.026 0 01-2.81 2.81 7.22 7.22 0 00-.486.259 4.466 4.466 0 006.407-5.9zm-3.877 6.051v-.638a3.238 3.238 0 00.581-.053l.112.628a3.847 3.847 0 01-.694.063zm1.394-.261l-.233-.595a3.176 3.176 0 002.032-2.976h.638a3.812 3.812 0 01-2.438 3.571z"
  }), __jsx("path", {
    "data-name": "Path 47",
    d: "M12.66 15.332a4.74 4.74 0 001.044-1.472 6.029 6.029 0 012.809-2.815c.173-.085.337-.17.518-.278a4.527 4.527 0 00-.4-.45 6.37 6.37 0 01-.731.407 5.386 5.386 0 00-2.512 2.521 6.03 6.03 0 01-2.81 2.81 6.962 6.962 0 00-.532.285 4.507 4.507 0 00.414.438 6.34 6.34 0 01.727-.406 4.733 4.733 0 001.474-1.042z"
  }), __jsx("path", {
    "data-name": "Path 48",
    d: "M11.769 14.439a4.74 4.74 0 001.044-1.472 6.022 6.022 0 012.81-2.81c.166-.082.328-.164.5-.265a4.462 4.462 0 00-6.435 5.922c.219-.136.419-.236.614-.337a4.747 4.747 0 001.47-1.037z"
  })));
};
const FacialCare = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 18 18"
  }, __jsx("path", {
    d: "M14.651 1.933a3.534 3.534 0 00-3.5 6.1h.1a1.285 1.285 0 011.033.527 3.549 3.549 0 002.37-.206 3.213 3.213 0 110-6.425z",
    fill: color
  }), __jsx("path", {
    "data-name": "Shape",
    d: "M12.86 0a5.147 5.147 0 00-4.247 8.037h1.555a4.176 4.176 0 014.755-6.693.643.643 0 01-.244 1.226 2.57 2.57 0 000 5.14.643.643 0 01.248 1.23 4.207 4.207 0 01-2.261.349c-.173-.021-.125-.045-.125.032v.958A5.143 5.143 0 0012.862 0zM1.284 16.715h4.5a.322.322 0 110 .643H1.915a2.362 2.362 0 001.606.643h6.457a2.19 2.19 0 001.113-.292 5.568 5.568 0 002.365-4.533H.046a6.639 6.639 0 001.238 3.534zm5.792 0a.321.321 0 11-.321.321.321.321 0 01.321-.321zM12.77 11.253H.731a.743.743 0 00-.731.75c0 .176 0 .3.007.535h13.486c.007-.244.007-.373.007-.535a.743.743 0 00-.73-.75z",
    fill: color
  }), __jsx("path", {
    "data-name": "Shape",
    d: "M1.607 9.322v1.285h10.288V9.322a.643.643 0 00-.642-.642h-9a.643.643 0 00-.646.642z",
    fill: color
  }));
};
const FruitsVegetable = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 18 18"
  }, __jsx("g", {
    "data-name": "Layer 2"
  }, __jsx("g", {
    "data-name": "Layer 3"
  }, __jsx("path", {
    "data-name": "Path 16",
    d: "M10.235 3.966a2.943 2.943 0 00-1.38-2.122c-.528-.243-.485-.618-.338-.854s.41-.231.832.164a5 5 0 011.368 2.87z",
    fill: color,
    stroke: color,
    strokeMiterlimit: "10",
    strokeWidth: ".416"
  }), __jsx("path", {
    "data-name": "Path 17",
    d: "M6.514 7.976a4.757 4.757 0 109.513 0c0-2.627-1.5-4.976-4.757-4.73-2.619.197-4.767 1.656-4.756 4.73z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.387"
  }), __jsx("path", {
    "data-name": "Path 18",
    d: "M6.514 7.976a4.757 4.757 0 109.513 0c0-2.627-1.5-4.976-4.757-4.73-2.619.197-4.767 1.656-4.756 4.73z",
    fill: color
  }), __jsx("path", {
    "data-name": "Path 19",
    d: "M14.731 5.045s1.506 1.544.714 2.993c-.287.526-1.2.192-1.234-.485s.25-1.27-.236-2.05c-.349-.566.26-.878.756-.458z",
    fill: "#fff"
  }), __jsx("path", {
    "data-name": "Path 20",
    d: "M10.834 3.413s1.161-4.315 6.469-2.048c0 0-2.459 4.074-6.469 2.048z",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.387"
  }), __jsx("path", {
    "data-name": "Path 21",
    d: "M10.834 3.413s1.161-4.315 6.469-2.048c0 0-2.459 4.074-6.469 2.048z",
    fill: "#fff"
  }), __jsx("path", {
    "data-name": "Path 22",
    d: "M10.516 4.513a10.193 10.193 0 015.63-2.863c-2.736-.521-6.018 1.748-6.018 1.748s.289.864.388 1.115z",
    fill: color,
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: ".035"
  }), __jsx("path", {
    "data-name": "Path 23",
    d: "M10.895 9.896h0c-.268-.877-1.969-1.65-4.234-1.72a5.286 5.286 0 00-4.515 1.858 2 2 0 00-.551 1.308h0a4.934 4.934 0 004.768 4.426c3.133.223 3.786-.96 4.225-1.9a6.363 6.363 0 00.307-3.972z",
    fill: "#fff",
    stroke: "#fff",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "3.19"
  }), __jsx("path", {
    "data-name": "Path 24",
    d: "M10.895 9.896h0c-.268-.877-1.969-1.65-4.234-1.72a5.286 5.286 0 00-4.515 1.858 2 2 0 00-.551 1.308h0a4.934 4.934 0 004.768 4.426c3.133.223 3.786-.96 4.225-1.9a6.363 6.363 0 00.307-3.972z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.387"
  }), __jsx("path", {
    "data-name": "Path 25",
    d: "M10.895 9.896h0c-.268-.877-1.969-1.65-4.234-1.72a5.286 5.286 0 00-4.515 1.858 2 2 0 00-.551 1.308h0a4.934 4.934 0 004.768 4.426c3.133.223 3.786-.96 4.225-1.9a6.363 6.363 0 00.307-3.972z",
    fill: "#fff",
    stroke: color,
    strokeMiterlimit: "10",
    strokeWidth: ".069"
  }), __jsx("path", {
    "data-name": "Path 26",
    d: "M10.895 9.896c-.268-.877-1.969-1.65-4.234-1.72a5.286 5.286 0 00-4.515 1.858 2 2 0 00-.551 1.308 4.934 4.934 0 004.768 4.426c3.133.223 3.786-.96 4.225-1.9a6.363 6.363 0 00.307-3.972z",
    fill: color
  }), __jsx("path", {
    "data-name": "Path 27",
    d: "M1.595 11.342a4.375 4.375 0 00.128.684 2.664 2.664 0 00.3.335c1.067 1.028 4.409 1.723 7.173 1 .883-.23 1.522-1.3.526-1.851-.139-.076-.243-.184-.208-.277s.089-.106.269-.1a1.2 1.2 0 001.232-.735 4.126 4.126 0 00-.121-.509c-.272-.876-1.974-1.644-4.239-1.715a5.286 5.286 0 00-4.515 1.858 2.024 2.024 0 00-.545 1.31z",
    fill: "#fff"
  }), __jsx("path", {
    "data-name": "Path 28",
    d: "M1.921 9.984a1.569 1.569 0 00.1 2.377c1.066 1.028 4.409 1.723 7.173 1 .883-.23 1.522-1.3.526-1.851-.139-.076-.243-.184-.208-.277s.089-.106.269-.1a1.183 1.183 0 001.259-.823 1.321 1.321 0 00-.785-1.413",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: ".416"
  }), __jsx("path", {
    "data-name": "Path 29",
    d: "M8.013 10.78c-.018.471-.87.791-1.9.752s-1.856-.423-1.837-.9.87-.963 1.9-.924 1.855.605 1.837 1.072z",
    fill: color,
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: ".555"
  }), __jsx("path", {
    "data-name": "Path 30",
    d: "M9.722 12.123a2.411 2.411 0 01.467 2.08 2.759 2.759 0 01-1.5 2.427",
    fill: "none",
    stroke: "#fff",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: ".555"
  }))));
};
const HandBags = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 18 18"
  }, __jsx("g", {
    "data-name": "Group 11"
  }, __jsx("g", {
    "data-name": "Group 10",
    fill: color,
    stroke: "#fff",
    strokeMiterlimit: "10",
    strokeWidth: ".091"
  }, __jsx("path", {
    "data-name": "Path 45",
    d: "M17.954 7.253v8.585a1.791 1.791 0 01-1.791 1.791H1.836a1.791 1.791 0 01-1.791-1.791V7.253c0-.988 17.909-.988 17.909 0z"
  }), __jsx("path", {
    "data-name": "Rectangle 36",
    d: "M.102 8.77h17.795v.913H.102z"
  }), __jsx("path", {
    "data-name": "Path 46",
    d: "M4.793 7.253C4.976 4.061 7.113.614 9 .614c2.41 0 4.049 3.84 4.207 6.639h.572C13.618 4.168 11.791.044 8.999.044c-1.131 0-2.338.922-3.312 2.529a10.463 10.463 0 00-1.466 4.68z"
  }))));
};
const HomeCleaning = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 18 18"
  }, __jsx("g", {
    transform: "translate(-1.125 -1.125)",
    fill: color
  }, __jsx("path", {
    "data-name": "Path 7",
    d: "M1.125 18.54H1.7v.58h-.58z"
  }), __jsx("path", {
    "data-name": "Path 8",
    d: "M18.54 18.54h.58v.58h-.58z"
  }), __jsx("circle", {
    "data-name": "Ellipse 1",
    cx: ".489",
    cy: ".489",
    r: ".489",
    transform: "translate(14.28 9.345)"
  }), __jsx("path", {
    "data-name": "Path 9",
    d: "M9.834 10.968V9.543H8.409a1.744 1.744 0 001.425 1.425z"
  }), __jsx("circle", {
    "data-name": "Ellipse 2",
    cx: ".489",
    cy: ".489",
    r: ".489",
    transform: "translate(4.99 12.247)"
  }), __jsx("path", {
    "data-name": "Path 10",
    d: "M9.834 7.537a1.744 1.744 0 00-1.425 1.425h1.425z"
  }), __jsx("path", {
    "data-name": "Path 11",
    d: "M2.867 15.64h3.486v.58H2.867z"
  }), __jsx("path", {
    "data-name": "Path 12",
    d: "M13.898 15.64h3.491v.58h-3.491z"
  }), __jsx("path", {
    "data-name": "Path 13",
    d: "M16.802 16.801H14.48v1.742h-.58v-1.742h-.58v-1.742h3.486v-6.66l-6.68-2.637-6.678 2.637v6.66h3.486v1.742h-.583v1.742h-.578v-1.742H3.448v1.742H2.286v.58h15.677v-.58h-1.161zm-3.486-7.257a1.163 1.163 0 001.164-1.165h.58a1.163 1.163 0 001.162 1.162v.58a1.163 1.163 0 00-1.159 1.162h-.58a1.163 1.163 0 00-1.162-1.162zm-3.191-2.613a2.322 2.322 0 11-2.328 2.322 2.322 2.322 0 012.328-2.322zm-4.352 7.258h-.584a1.163 1.163 0 00-1.162-1.162v-.58a1.163 1.163 0 001.162-1.162h.584a1.163 1.163 0 001.158 1.162v.58a1.163 1.163 0 00-1.158 1.162zm6.39 4.354v-3.77a2.032 2.032 0 10-4.064 0v3.77h-.584v-3.77a2.613 2.613 0 115.225 0v3.77zm-3.49-2.322v-.58h.59v.58z"
  }), __jsx("path", {
    "data-name": "Path 14",
    d: "M11.839 9.543h-1.425v1.425a1.744 1.744 0 001.425-1.425z"
  }), __jsx("path", {
    "data-name": "Path 15",
    d: "M18.049 6.598l-7.925-3.13-7.925 3.13a.772.772 0 00-.494.722.76.76 0 00.337.637.787.787 0 00.742.082l7.337-2.9 7.337 2.9a.787.787 0 00.742-.082.76.76 0 00.337-.637.772.772 0 00-.494-.719z"
  }), __jsx("path", {
    "data-name": "Path 16",
    d: "M10.414 7.537v1.425h1.425a1.744 1.744 0 00-1.425-1.425z"
  }), __jsx("path", {
    "data-name": "Path 17",
    d: "M17.962 2.286h-.58a1.163 1.163 0 01-1.162 1.162v.58a1.163 1.163 0 011.162 1.162h.58a1.163 1.163 0 011.162-1.162v-.58a1.163 1.163 0 01-1.162-1.162z"
  }), __jsx("path", {
    "data-name": "Path 18",
    d: "M4.028 4.027h.58a1.163 1.163 0 011.161-1.161v-.58a1.163 1.163 0 01-1.16-1.161h-.58a1.163 1.163 0 01-1.162 1.161v.58a1.163 1.163 0 011.161 1.161z"
  })));
};
const LaptopBags = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 18 18"
  }, __jsx("g", {
    "data-name": "Group 6",
    fill: color,
    stroke: "#fff",
    strokeMiterlimit: "10",
    strokeWidth: ".091"
  }, __jsx("path", {
    "data-name": "Path 22",
    d: "M6.224 1.741a.408.408 0 01-.292-.175l-.013-.018v-.022c-.08-.612.818-.747.856-.753l.4-.057-.334.222h0a.807.807 0 00-.128.338c-.105.42-.375.465-.489.465zm-.13-.263a.213.213 0 00.13.081c.106 0 .244-.056.305-.323a1.686 1.686 0 01.07-.237c-.214.064-.523.205-.505.479z"
  }), __jsx("path", {
    "data-name": "Path 23",
    d: "M9 6.496H.046v6.8a.833.833 0 00.833.833h16.243a.833.833 0 00.833-.833v-6.8z"
  }), __jsx("path", {
    "data-name": "Path 24",
    d: "M17.44 2.135H.561a.515.515 0 00-.515.515v6.285a.833.833 0 00.833.833h16.243a.833.833 0 00.833-.833V2.65a.515.515 0 00-.515-.515z"
  }), __jsx("path", {
    "data-name": "Path 25",
    d: "M11.776 1.741c-.113 0-.387-.045-.482-.464a.734.734 0 00-.134-.342l-.334-.222.4.061c.038.006.936.141.856.753v.022l-.013.018a.408.408 0 01-.293.174zM11.4.999a1.682 1.682 0 01.071.238c.061.267.2.323.305.323a.216.216 0 00.13-.081c.019-.276-.291-.416-.506-.48z"
  }), __jsx("path", {
    "data-name": "Path 26",
    d: "M11.295.752A3.333 3.333 0 009 .045a3.333 3.333 0 00-2.295.707.136.136 0 00.158.222A3.036 3.036 0 018.999.318a3.037 3.037 0 012.136.656.136.136 0 10.158-.222z"
  }), __jsx("path", {
    "data-name": "Path 27",
    d: "M9 9.419h-.958v.751h1.917v-.751z"
  }), __jsx("path", {
    "data-name": "Path 28",
    d: "M8.698 8.214h0a.9.9 0 00-.657 1.24h1.917a.9.9 0 00-.657-1.24h0a1.656 1.656 0 00-.6 0z"
  }), __jsx("path", {
    "data-name": "Path 29",
    d: "M9 10.17h-.958v1.009h1.917V10.17z"
  }), __jsx("path", {
    "data-name": "Path 30",
    d: "M9 10.473h-.807v.706h1.615v-.706z"
  }), __jsx("path", {
    "data-name": "Path 31",
    d: "M4.725 2.135h1.136a1.287 1.287 0 00.648-.83.118.118 0 00-.117-.139h0a.116.116 0 00-.095.048 1.873 1.873 0 01-1.38.721.118.118 0 00-.088.05z"
  }), __jsx("path", {
    "data-name": "Path 32",
    d: "M13.275 2.135H12.14a1.287 1.287 0 01-.648-.83.118.118 0 01.116-.139h0a.116.116 0 01.095.048 1.873 1.873 0 001.38.721.118.118 0 01.088.05z"
  })));
};
const Lips = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 18 18"
  }, __jsx("g", {
    "data-name": "Group 14"
  }, __jsx("path", {
    "data-name": "Path 52",
    d: "M6.035 17.392v-6.2a.567.567 0 00-.516-.61H5.5V5.269h-.527c0-.877.008-1.608.013-2.212.019-2.149.023-2.66-.235-2.923A.454.454 0 004.422 0a1.282 1.282 0 00-.549.193 4.29 4.29 0 01-.708.3 2.882 2.882 0 00-2.117 2.235v2.541H.541v5.306H.519a.567.567 0 00-.516.61v6.2a.567.567 0 00.516.61h5.006a.567.567 0 00.51-.603zm-1.144-6.817H1.148V5.932l3.743.043z",
    fill: color
  })));
};
const MeatFish = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 18 18"
  }, __jsx("g", {
    "data-name": "Layer 2"
  }, __jsx("g", {
    "data-name": "Layer 1"
  }, __jsx("path", {
    "data-name": "Path 31",
    d: "M9.976 12.775c-3.038-.539-8.7-1.222-9.868-4.621h.008C-.977 5.471 5.959-1.484 8.663.284a2.2 2.2 0 011.139 1.685c.058 1.832-1.961 4.468-4.123 6.1 2.183-1.393 4.262-4.117 4.643-6.1a9.461 9.461 0 011.014 9.288c1.112 1.079 2.5 2.252 3.735 2.053a1.566 1.566 0 011.868 1.437 1.49 1.49 0 01-.662 1.445 1.394 1.394 0 01-.877.2 1.34 1.34 0 01-.143.82 1.621 1.621 0 01-3-1c.117-1.248-1.117-2.45-2.279-3.435zM6.212 2.807c.983.643-2.222 3.936-3.21 3.293s2.226-3.936 3.21-3.293zM8.302.936c2.58 1.689-4.417 9.1-7 7.415s4.417-9.1 7-7.415zm3.072 11.145l-1.6-.155c1.211 1.034 3.237 2.4 3.062 4.271-.161 1.724 2.284 1.5 1.988.126a.4.4 0 01.475-.5c1.417.243 1.47-2.216-.184-1.949-1.318.21-2.647-.774-3.747-1.793z",
    fill: color,
    fillRule: "evenodd"
  }))));
};
const OralCare = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 18 18"
  }, __jsx("g", {
    fill: color
  }, __jsx("path", {
    "data-name": "Path 65",
    d: "M3.118 11.024a2.267 2.267 0 01.142 1.454l-.027.333c-.127 1.655.111 3.807 1.157 4.887a.463.463 0 00.1.046.252.252 0 00.317-.127.255.255 0 00.017-.15v-.02c-.017-.157-.385-3.87 1.27-5.887a1.035 1.035 0 011.6.009c1.623 2.025 1.257 5.719 1.241 5.875v.02a.255.255 0 00.017.15.252.252 0 00.317.127.388.388 0 00.111-.049c1.043-1.078 1.281-3.231 1.154-4.887a35.384 35.384 0 00-.027-.333 2.268 2.268 0 01.142-1.455 3.792 3.792 0 011.517-1.087 2.221 2.221 0 001-1.522 3.819 3.819 0 00-.16-2.192c-.555-1.388-1.827-1.924-3.5-1.466a4.521 4.521 0 00-1.368.622c-.2.126-.409.253-.666.384a2.761 2.761 0 001.566.237.248.248 0 11.1.486 3.837 3.837 0 01-2.355-.493 10.454 10.454 0 01-.478-.265 7.466 7.466 0 00-2.338-1.014A2.73 2.73 0 00.698 6.581a2.908 2.908 0 00.92 3.343 3.784 3.784 0 011.5 1.1z"
  }), __jsx("path", {
    "data-name": "Path 66",
    d: "M17.256.93H6.409L6.036.558A1.888 1.888 0 004.693.003H.664a.666.666 0 00-.666.666v1.889a.25.25 0 00.5 0V.667A.165.165 0 01.663.502h.1v2.087a.25.25 0 10.5 0V.497h.222v2.087a.25.25 0 10.5 0V.497h.222v2.087a.25.25 0 10.5 0V.497h.222v2.087a.25.25 0 10.5 0V.497h.222v2.087a.25.25 0 10.5 0V.497h.222v2.087a.25.25 0 10.5 0V.507a1.4 1.4 0 01.823.4l.792.789a1.888 1.888 0 001.343.555h9.441a.666.666 0 100-1.323z"
  })));
};
const OuterWear = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 18 18"
  }, __jsx("g", {
    "data-name": "Group 29",
    fill: color
  }, __jsx("path", {
    "data-name": "Path 99",
    d: "M15.643 5.659a1.993 1.993 0 00.453-.062c-.224-1.2-.4-1.9-.4-1.9a5.546 5.546 0 00-1.713-1.068 1.964 1.964 0 001.66 3.03z"
  }), __jsx("path", {
    "data-name": "Path 100",
    d: "M.896 5.596a1.962 1.962 0 002.113-2.97 5.561 5.561 0 00-1.712 1.068s-.178.697-.401 1.902z"
  }), __jsx("path", {
    "data-name": "Path 101",
    d: "M15.641 6.146a2.466 2.466 0 01-2.463-2.463 2.436 2.436 0 01.348-1.24 14.661 14.661 0 00-2.08-.61L11.422.664A5.484 5.484 0 008.947.008c-.225-.01-.677-.01-.904 0a5.5 5.5 0 00-2.478.653l-.02 1.169a14.746 14.746 0 00-2.08.612 2.446 2.446 0 01-2.658 3.64 53.686 53.686 0 00-.771 11.244H.26v.123a.512.512 0 00.532.493h1.24a.512.512 0 00.532-.493v-.123h.23s-.238-7.281 1.02-9.143v9.08a23.275 23.275 0 004.326.735V1.151a5.227 5.227 0 01-1.749-.19S6.529.498 8.043.516h.9c1.5.023 1.653.445 1.653.445a5.226 5.226 0 01-1.751.19v16.847a23.274 23.274 0 004.329-.736V8.184c1.259 1.866 1.023 9.143 1.023 9.143h.229v.123a.511.511 0 00.532.493H16.2a.512.512 0 00.532-.493v-.123h.224a53.827 53.827 0 00-.771-11.246 2.462 2.462 0 01-.544.065z"
  })));
};
const Pants = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 18 18"
  }, __jsx("g", {
    fill: color
  }, __jsx("path", {
    "data-name": "Path 102",
    d: "M7.999 1.165a10.721 10.721 0 00-.139-.71L7.797.187A.243.243 0 007.561 0H.553a.243.243 0 00-.236.187L.253.455c-.056.235-.1.472-.139.71z"
  }), __jsx("path", {
    "data-name": "Path 103",
    d: "M.018 2.048a9.93 9.93 0 00-.015.828l.379 13.479a.243.243 0 00.242.236H.86v1.155a.254.254 0 00.254.254h1.288a.254.254 0 00.254-.254v-1.155h.172a.243.243 0 00.242-.225l.833-11.228a.15.15 0 01.3 0l.825 11.228a.243.243 0 00.242.225h.233v1.155a.254.254 0 00.254.254h1.288a.254.254 0 00.254-.254v-1.155h.179a.243.243 0 00.242-.236L8.1 2.876c.008-.276 0-.553-.015-.828z"
  })));
};
const PetCare = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 18 18"
  }, __jsx("g", {
    fill: color
  }, __jsx("path", {
    "data-name": "Path 1",
    d: "M11.335 8.363h-.139a4.189 4.189 0 01-1.864-.44l-1.116-.558.011-.022-.493.493a1.283 1.283 0 01.536.457.879.879 0 00.732.392.326.326 0 01.326.326v.643a1.288 1.288 0 01-.964 1.245v.888a1.76 1.76 0 01-.3.977l-.35.515v.734l.737-.737a.326.326 0 01.548.227v2.186l.643-.426v-2.4a.326.326 0 01.128-.257l1.257-.944a2.143 2.143 0 00.5-1.274 4.447 4.447 0 00-.034-.809z"
  }), __jsx("path", {
    "data-name": "Path 2",
    d: "M9.08 7.077l.543.27a3.543 3.543 0 001.577.372h.056V5.791a.326.326 0 01.326-.326h.8a.483.483 0 00.482-.482v-.472h-.643a.326.326 0 01-.227-.094l-.651-.651a.76.76 0 00-.543-.223h-.7a.8.8 0 00-.564.233 2.932 2.932 0 00-.869 2.086v.573h.4a.242.242 0 00.241-.241V5.149h.643v1.045a.885.885 0 01-.881.887zm1.206-2.894h.643v.643h-.643z"
  }), __jsx("path", {
    "data-name": "Path 3",
    d: "M10.287 14.841l.643-.426v-1.873l-.643.482z"
  }), __jsx("path", {
    "data-name": "Path 4",
    d: "M17.794 3.684a6.04 6.04 0 00-.612-1.464 4.466 4.466 0 00-7.43-.434l-.493.651a.326.326 0 01-.515 0l-.493-.651A4.488 4.488 0 004.678 0H4.56A4.466 4.466 0 00.789 2.077 5.038 5.038 0 000 4.783v.929a7.535 7.535 0 003.244 6.206l.326-.485a8.686 8.686 0 01-1.6-1.539l-.29-.362a.326.326 0 01.5-.4l.289.362a8.042 8.042 0 001.455 1.412l.9-1.346v-.993A2.419 2.419 0 015.4 7.091l.457-.537a.326.326 0 01.557.13l.261 1.042h.258l1.1-1.1v-.76a3.57 3.57 0 011.052-2.541 1.441 1.441 0 011.018-.421h.7a1.394 1.394 0 01.992.412l.553.554h.832a.326.326 0 01.326.326v.8a1.126 1.126 0 01-1.128 1.118H11.9V7.7l.24 1.8a5.09 5.09 0 01.039.926 2.785 2.785 0 01-.6 1.593v1.975l3.04-2.016A7.541 7.541 0 0018 5.677v-.414a6.023 6.023 0 00-.208-1.573zM1.388 8.344a.326.326 0 01-.41-.2l-.05-.15A5.6 5.6 0 01.64 6.218v-.109a.326.326 0 11.643 0v.109a4.962 4.962 0 00.255 1.572l.05.149a.326.326 0 01-.2.407zm14.937 1.181l-.289.362a8.649 8.649 0 01-2.472 2.115l-.869.494a.326.326 0 01-.319-.558l.869-.494a8.009 8.009 0 002.29-1.954l.289-.362a.326.326 0 11.506.4zm1.035-3.309a5.6 5.6 0 01-.288 1.775l-.05.15a.326.326 0 01-.612-.2v.003l.05-.15a4.961 4.961 0 00.255-1.571v-.109a.326.326 0 11.643 0v.109zm0-1.392a.326.326 0 11-.643 0v-.326a.326.326 0 01.643 0z"
  }), __jsx("path", {
    "data-name": "Path 5",
    d: "M7.126 13.007l.4-.6a1.119 1.119 0 00.189-.624v-1.169a.326.326 0 01.326-.326.644.644 0 00.643-.643v-.356a1.52 1.52 0 01-.946-.644.642.642 0 00-.535-.287H6.43a.326.326 0 01-.312-.243l-.169-.679-.052.061a1.774 1.774 0 00-.434 1.078v1.072a.326.326 0 01-.054.178L3.78 12.271l.185.121.676.443 2.584 1.693-.118-.237a.326.326 0 01-.034-.143v-.964a.326.326 0 01.054-.174zM6.75 9.649v-.643h.645v.643z"
  }), __jsx("path", {
    "data-name": "Path 6",
    d: "M8.002 14.648a.325.325 0 01.034.144v.269l.326.211v-.99l-.359.359z"
  })));
};
const Purse = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 18 18"
  }, __jsx("g", {
    "data-name": "Group 2"
  }, __jsx("g", {
    "data-name": "Group 1",
    fill: color,
    stroke: "#fff",
    strokeMiterlimit: "10",
    strokeWidth: ".091",
    transform: "translate(-85.169 -7.348)"
  }, __jsx("path", {
    "data-name": "Path 1",
    d: "M98.946 11.381l.217-.061a5.124 5.124 0 00-.6-1.341 11.3 11.3 0 00-1.04-1.279 4.724 4.724 0 00-.93-.679l-.269-.143a3.735 3.735 0 00-.88-.323 5.437 5.437 0 00-1.274-.167l-.317.014a5.3 5.3 0 00-.957.152c-.1.024-.2.061-.3.092a5.009 5.009 0 00-.846.374 4.734 4.734 0 00-.93.679 5.709 5.709 0 00-1.639 2.615l.217.061.217.061a4.7 4.7 0 01.972-1.8 5.106 5.106 0 01.6-.508 4.982 4.982 0 01.874-.521 5.2 5.2 0 011.018-.35 5.315 5.315 0 011.1-.123 5.5 5.5 0 011.1.123 5.2 5.2 0 011.018.35 4.99 4.99 0 01.874.521 5.066 5.066 0 01.585.5 4.7 4.7 0 01.982 1.806z"
  }), __jsx("path", {
    "data-name": "Path 2",
    d: "M93.787 22.392a22.149 22.149 0 01-8.561-1.727l3.3-9.285h11.282l3.3 9.285a22.149 22.149 0 01-8.561 1.727z"
  }), __jsx("path", {
    "data-name": "Path 3",
    d: "M88.531 11.381l-1.353 3.8a17.645 17.645 0 006.609 1.351h.765a17.643 17.643 0 006.609-1.351l-1.353-3.8z"
  }), __jsx("path", {
    "data-name": "Path 4",
    d: "M88.531 11.23l-1.225 3.442a14.059 14.059 0 006.481 1.71h.765a14.059 14.059 0 006.481-1.71l-1.224-3.442z"
  }), __jsx("rect", {
    "data-name": "Rectangle 26",
    width: "2.01",
    height: "2.01",
    rx: ".672",
    transform: "rotate(-44.999 66.026 -103.976)"
  }), __jsx("path", {
    "data-name": "Path 5",
    d: "M101.162 15.182h0l-.173-.486a14.034 14.034 0 01-6.436 1.687h-.273v.15h.272a17.649 17.649 0 006.61-1.351z"
  }), __jsx("rect", {
    "data-name": "Rectangle 27",
    width: "2.01",
    height: "2.01",
    rx: ".672",
    transform: "rotate(-44.999 66.026 -103.976)"
  }), __jsx("rect", {
    "data-name": "Rectangle 28",
    width: "1.5",
    height: "1.5",
    rx: ".501",
    transform: "rotate(-44.999 66.206 -104.411)"
  }))));
};
const ShavingNeeds = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 18 18"
  }, __jsx("g", {
    "data-name": "Group 17"
  }, __jsx("g", {
    "data-name": "Group 16"
  }, __jsx("path", {
    "data-name": "Path 60",
    d: "M17.24.609h-5.239a.741.741 0 00-.731.731v.667a.741.741 0 00.731.731h.183a1.222 1.222 0 011.222 1.222v1.222l-.152 3.351h2.777l-.183-3.351V3.959a1.222 1.222 0 011.222-1.222h.183a.741.741 0 00.731-.731v-.667a.741.741 0 00-.744-.731zm-2.011 4.265h-1.222v-.609h1.222zm.03-1.222h-1.28a1.741 1.741 0 00-.457-.914h2.163a1.952 1.952 0 00-.425.92z",
    fill: color
  }))), __jsx("g", {
    "data-name": "Group 19"
  }, __jsx("g", {
    "data-name": "Group 18"
  }, __jsx("path", {
    "data-name": "Path 61",
    d: "M16.023 9.138h-2.8l-.061 1.222h2.924z",
    fill: color
  }))), __jsx("g", {
    "data-name": "Group 21"
  }, __jsx("g", {
    "data-name": "Group 20"
  }, __jsx("path", {
    "data-name": "Path 62",
    d: "M16.413 16.144l-.243-5.178h-3.046l-.243 5.178a1.768 1.768 0 103.533 0z",
    fill: color
  }))), __jsx("g", {
    "data-name": "Group 23"
  }, __jsx("g", {
    "data-name": "Group 22"
  }, __jsx("path", {
    "data-name": "Path 63",
    d: "M8.499 1.827V0H2.436v2.742h-.918V4.11A2.283 2.283 0 000 6.274V7.31h6.092v7.31H0v1.066a2.3 2.3 0 002.284 2.285h3.934a2.282 2.282 0 002.284-2.284V6.244a2.312 2.312 0 00-1.526-2.163V2.742h-.915v-.915zM6.092 3.351h.3v.609h-4.26v-.609z",
    fill: color
  }))), __jsx("g", {
    "data-name": "Group 25"
  }, __jsx("g", {
    "data-name": "Group 24"
  }, __jsx("path", {
    "data-name": "Path 64",
    d: "M0 7.92v1.222h2.132a.304.304 0 110 .609H0v.914h3.655a.304.304 0 110 .609H0v.914h3.655a.304.304 0 110 .609H0v1.222h5.482V7.927z",
    fill: color
  }))));
};
const Shirts = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 18 18"
  }, __jsx("g", {
    fill: color
  }, __jsx("path", {
    "data-name": "Path 109",
    d: "M6.751 2.546a.172.172 0 00.04 0l2.206-.525 2.2.543a.171.171 0 00.041 0 .142.142 0 00.111-.051.149.149 0 00.027-.128l-.21-.983a.362.362 0 010-.115l.221-1.1a.144.144 0 00-.026-.122.138.138 0 00-.168-.029l-2.192 1.05L6.813.017a.137.137 0 00-.169.028.144.144 0 00-.027.122l.21 1.1a.362.362 0 010 .115l-.217.979a.149.149 0 00.027.128.142.142 0 00.11.053z"
  }), __jsx("path", {
    "data-name": "Path 110",
    d: "M2.563 15.126l-1.806-.153a.4.4 0 00-.4.278l-.342 1.214a.285.285 0 00.039.248.285.285 0 00.224.112l1.8.058h.013a.428.428 0 00.391-.288l.334-1.1a.282.282 0 00-.252-.372z"
  }), __jsx("path", {
    "data-name": "Path 111",
    d: "M17.985 16.466l-.338-1.2a.4.4 0 00-.4-.278l-1.806.152a.282.282 0 00-.252.372l.33 1.083a.428.428 0 00.391.288l1.815-.058a.274.274 0 00.264-.359z"
  }), __jsx("path", {
    "data-name": "Path 112",
    d: "M17.024 14.342a.286.286 0 00.257-.372l-.756-2.678a5.452 5.452 0 01-.105-.451l-1.321-6.627a.61.61 0 00-.315-.4l-2.139-.945a.63.63 0 00-.248-.046.638.638 0 00-.263.051L9.176 4.248a.483.483 0 01-.346 0L5.865 2.876a.64.64 0 00-.263-.051.63.63 0 00-.248.046l-2.139.945a.61.61 0 00-.315.4l-1.318 6.626c-.025.125-.074.328-.105.451l-.759 2.662a.286.286 0 00.257.372l1.824.154a.405.405 0 00.407-.275l.874-2.857a3.587 3.587 0 00.105-.476l.278-2.1-.254 8.162a.326.326 0 00.327.337h8.99a.325.325 0 00.326-.338l-.292-8.058.265 2.006a3.582 3.582 0 00.105.476l.875 2.874a.405.405 0 00.407.275zM8.998 16.3a.558.558 0 11.558-.558.558.558 0 01-.558.558zm0-2.422a.558.558 0 11.558-.558.558.558 0 01-.558.558zm0-2.422a.558.558 0 11.558-.558.558.558 0 01-.558.558zm0-2.422a.558.558 0 11.558-.558.558.558 0 01-.558.558zm0-2.422a.558.558 0 11.558-.558.558.558 0 01-.558.562z"
  })));
};
const ShoulderBags = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 18 18"
  }, __jsx("g", {
    "data-name": "Group 3",
    transform: "translate(-100.548 -66.187)",
    fill: color,
    stroke: "#fff",
    strokeMiterlimit: "10",
    strokeWidth: ".076"
  }, __jsx("path", {
    "data-name": "Path 6",
    d: "M105.083 69.531l-.917.243-.848-3.195a.149.149 0 01.068-.166h0a1.343 1.343 0 01.708-.188h0a.149.149 0 01.141.111z"
  }), __jsx("path", {
    "data-name": "Path 7",
    d: "M104.167 69.774l-.917.243-.848-3.195a.149.149 0 01.068-.166h0a1.342 1.342 0 01.708-.188h0a.149.149 0 01.141.111z"
  }), __jsx("path", {
    "data-name": "Path 8",
    d: "M106.5 69.531l.917.243.848-3.195a.149.149 0 00-.068-.166h0a1.343 1.343 0 00-.708-.188h0a.149.149 0 00-.141.111z"
  }), __jsx("path", {
    "data-name": "Path 9",
    d: "M107.421 69.774l.917.243.848-3.195a.149.149 0 00-.068-.166h0a1.342 1.342 0 00-.708-.188h0a.149.149 0 00-.141.111z"
  }), __jsx("path", {
    "data-name": "Path 10",
    d: "M110.987 80.15l-.645-7.545a3.781 3.781 0 00-3.768-3.459h-.78v1.23h0v-1.23h-.78a3.781 3.781 0 00-3.768 3.459l-.646 7.545a3.407 3.407 0 003.395 3.7h3.598a3.407 3.407 0 003.395-3.7z"
  }), __jsx("path", {
    "data-name": "Path 11",
    d: "M108.494 69.668c-1.336-.669-1.426-1.652-2.7-1.654h0c-1.272 0-1.362.985-2.7 1.654l.294-.046c1.191-.519 1.271-1.282 2.406-1.283s1.215.764 2.406 1.283z"
  }), __jsx("path", {
    "data-name": "Path 12",
    d: "M105.795 77.868l.132-.006 4.385-.192.239 2.792h0a16.8 16.8 0 01-4.579.636h-.177"
  }), __jsx("path", {
    "data-name": "Path 13",
    d: "M105.788 77.868l-.132-.006-4.385-.192-.239 2.792h0a16.8 16.8 0 004.579.636h.177"
  }), __jsx("path", {
    "data-name": "Path 14",
    d: "M110.625 80.455l-.591-6.916a3.54 3.54 0 00-3.527-3.239h-1.427a3.54 3.54 0 00-3.527 3.238l-.591 6.916a3.2 3.2 0 001.393 2.92l.083-.123a3.056 3.056 0 01-1.328-2.785l.591-6.916a3.372 3.372 0 013.38-3.1h1.426a3.372 3.372 0 013.379 3.1l.591 6.916a3.056 3.056 0 01-1.328 2.785l.083.123a3.2 3.2 0 001.392-2.921z"
  }), __jsx("path", {
    "data-name": "Path 15",
    d: "M105.792 84.149v-3.008h0a25.049 25.049 0 01-4.756-.676l-.447-.039A3.568 3.568 0 00104 84.149z"
  }), __jsx("path", {
    "data-name": "Path 16",
    d: "M105.795 81.141v3.008h1.8A3.568 3.568 0 00111 80.426l-.447.039a25.083 25.083 0 01-4.758.676z"
  }), __jsx("path", {
    "data-name": "Path 17",
    d: "M105.792 81.083v2.767h1.647a3.123 3.123 0 003.112-3.389 27.2 27.2 0 01-4.757.622z"
  }), __jsx("path", {
    "data-name": "Path 18",
    d: "M105.795 83.85v-2.765h0a27.157 27.157 0 01-4.759-.622h0a3.123 3.123 0 003.112 3.389z"
  }), __jsx("rect", {
    "data-name": "Rectangle 34",
    width: "2.177",
    height: "1.086",
    rx: ".281",
    transform: "rotate(-3.21 1460.138 -1873.834)"
  }), __jsx("path", {
    "data-name": "Path 19",
    d: "M103.251 80.12h0a.158.158 0 01-.158-.158v-6.679a.158.158 0 01.158-.158h0a.158.158 0 01.158.158v6.679a.158.158 0 01-.158.158z"
  }), __jsx("path", {
    "data-name": "Rectangle 35",
    d: "M103.093 74.874h.316v1.036h-.316z"
  })));
};
const Skirts = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 18 18"
  }, __jsx("g", {
    fill: color
  }, __jsx("path", {
    "data-name": "Path 107",
    d: "M17.688 16.585L14.826 5.454a3.95 3.95 0 00-.26-.682l-.822-1.6a.749.749 0 00-.616-.376H4.576a.746.746 0 00-.615.377l-.841 1.65a4.017 4.017 0 00-.258.683L.017 16.585a.373.373 0 00.374.482h.64a1.52 1.52 0 01.612.158l1.246.691a.824.824 0 00.728 0l1.24-.691a.607.607 0 01.514 0l1.246.691a.824.824 0 00.728 0l1.246-.691a.607.607 0 01.514 0l1.246.691a.824.824 0 00.728 0l1.246-.691a.607.607 0 01.514 0l1.246.691a.824.824 0 00.728 0l1.246-.691a1.52 1.52 0 01.612-.158h.64a.373.373 0 00.374-.482z"
  }), __jsx("path", {
    "data-name": "Path 108",
    d: "M4.525 2.1h8.656a.333.333 0 00.333-.333V.333A.333.333 0 0013.181 0H4.525a.333.333 0 00-.331.333v1.438a.333.333 0 00.331.331zM7.833.652a.267.267 0 01.262-.266h1.508a.267.267 0 01.266.266v.8a.267.267 0 01-.266.266H8.095a.267.267 0 01-.266-.266z"
  }), __jsx("path", {
    "data-name": "Rectangle 2",
    d: "M8.275.83h1.153v.444H8.275z"
  })));
};
const Snacks = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 18 18"
  }, __jsx("g", {
    fill: color
  }, __jsx("path", {
    "data-name": "Path 36",
    d: "M2.109 5.274H12.66a1.055 1.055 0 000-2.11h-.1a1.67 1.67 0 00-1.5-1.054 2.626 2.626 0 00-1.854-1.044 2.1 2.1 0 00-3.653 0 2.626 2.626 0 00-1.85 1.045h-.011a1.577 1.577 0 00-1.481 1.055h-.1a1.055 1.055 0 100 2.11z"
  }), __jsx("path", {
    "data-name": "Path 37",
    d: "M7.956 15.891l.863-9.562H5.946l.862 9.562z"
  }), __jsx("path", {
    "data-name": "Path 38",
    d: "M2.884 12.881a2.118 2.118 0 011.253 1.378 2.626 2.626 0 011.07 1.633h.542L4.887 6.33H2.164z"
  }), __jsx("path", {
    "data-name": "Path 39",
    d: "M12.601 6.329H9.877l-.862 9.562h2.059a.527.527 0 00.524-.469z"
  }), __jsx("path", {
    "data-name": "Path 40",
    d: "M1.054 16.946a.876.876 0 00.091-.019 1.577 1.577 0 102-2c0-.031.019-.058.019-.091a1.055 1.055 0 00-2.11 0 1.055 1.055 0 100 2.109z"
  })));
};
const Tops = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 18 18"
  }, __jsx("g", {
    fill: color
  }, __jsx("path", {
    "data-name": "Path 104",
    d: "M6.994 2.83L5.928 5.991a.315.315 0 01-.6 0L4.273 2.83a2.4 2.4 0 00-2.909-.026L0 3.822l.087.329a32.647 32.647 0 01.909 11.921L.79 18h9.7l-.215-1.909a32.667 32.667 0 01.912-11.96l.083-.31-1.366-1.013a2.4 2.4 0 00-2.909.026zm0 0"
  }), __jsx("path", {
    "data-name": "Path 105",
    d: "M.549 2.843l.62-.114L.714.261a.315.315 0 00-.62.114zm0 0"
  }), __jsx("path", {
    "data-name": "Path 106",
    d: "M10.978.369a.316.316 0 00-.622-.108L9.966 2.6l.622.108zm0 0"
  })));
};
const Wallet = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 18 18"
  }, __jsx("g", {
    "data-name": "Group 9"
  }, __jsx("g", {
    "data-name": "Group 8"
  }, __jsx("path", {
    "data-name": "Path 42",
    d: "M12.362 1.129a1.415 1.415 0 00-1.672-1.1L1.428 1.942h11.1z",
    fill: color
  })), __jsx("path", {
    "data-name": "Path 43",
    d: "M11.579 11.242v-2.2a1.822 1.822 0 011.82-1.82h2.784v-2.78a1.415 1.415 0 00-1.415-1.415H1.415A1.415 1.415 0 000 4.442v11.4a1.415 1.415 0 001.415 1.415h13.354a1.415 1.415 0 001.415-1.415v-2.776h-2.785a1.822 1.822 0 01-1.82-1.82z",
    fill: color
  }), __jsx("path", {
    "data-name": "Path 44",
    d: "M16.989 8.03h-3.59a1.011 1.011 0 00-1.01 1.01v2.2a1.012 1.012 0 001.01 1.01h3.59a1.012 1.012 0 001.01-1.01v-2.2a1.012 1.012 0 00-1.01-1.01zm-2.8 3.128a1.006 1.006 0 111.006-1.006 1.006 1.006 0 01-1.006 1.006z",
    fill: color
  })));
};
const WomenDress = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 18 18"
  }, __jsx("defs", null, __jsx("clipPath", {
    id: "a"
  }, __jsx("path", {
    "data-name": "Rectangle 20",
    transform: "translate(226 1073)",
    fill: "#ebe7e7",
    d: "M0 0h18v18H0z"
  }))), __jsx("g", {
    "data-name": "Women Dress",
    transform: "translate(-226 -1073)",
    clipPath: "url(#a)"
  }, __jsx("g", {
    "data-name": "Group 28",
    transform: "translate(230.461 1073)",
    fill: color
  }, __jsx("path", {
    "data-name": "Path 80",
    d: "M8.236 12.619c-.12-.6-.384-3.422-1.008-4.358a1.446 1.446 0 01-.19-.8.039.039 0 000-.007c.02-.29.052-.6.073-.762a.493.493 0 01.01-.076c.016-.1.036-.192.057-.289a16.065 16.065 0 00.515-2.746c0-1.429-.733-1.849-.733-1.849.251-1.069.434-1.647.434-1.647L7.179 0A10.558 10.558 0 006.7 1.717a2.911 2.911 0 01-2.161.694 2.913 2.913 0 01-2.161-.694A10.578 10.578 0 001.897 0l-.216.087s.18.577.434 1.647c0 0-.733.421-.733 1.849a14.672 14.672 0 00.491 2.631.1.1 0 000 .039.2.2 0 00.01.035l.007.028c.03.123.074.347.081.347.014.087.029.243.043.4.006.055.01.109.014.163l.016.207h-.007a1.462 1.462 0 01-.191.826c-.624.936-.889 3.758-1.008 4.358s-.408 2.81-.552 3.459-.288 1.537-.288 1.537a3.7 3.7 0 001.2.144s-.087.252.649.18a14.433 14.433 0 011.969-.06c.5.024.153.12.72.12s.216-.1.72-.12a14.388 14.388 0 011.969.06c.733.072.649-.18.649-.18a3.708 3.708 0 001.2-.144s-.144-.889-.289-1.537-.428-2.857-.549-3.457zM6.955 6.468c-.056.077-.106.2-.041.251-.017.115-.027.231-.039.347-.065-.075-.274-.006-.274-.006-.155-.068.137.335.254.181-.005.065-.007.13-.01.2-.142-.01-.284-.02-.427-.028a.66.66 0 00-.068-.149c.016-.108-.108.016-.15.137a25.847 25.847 0 00-.925-.02C5.211 7.304 5 7.373 5 7.373c-.031-.014-.044-.008-.044.009h-.032a.147.147 0 00.016-.067.152.152 0 00-.3 0 .149.149 0 00.017.067c-.406 0-.812.013-1.214.023a.791.791 0 00-.042-.077c.014-.092-.074-.017-.126.081l-.207.005a.491.491 0 00.112-.2c.154-.1-.434-.074-.271.151a.2.2 0 00.051.051h-.173a.087.087 0 000-.122c-.136-.2-.238.094-.25.127l-.3.006a.43.43 0 00-.005-.081c.073-.011.315-.308.087-.354a.173.173 0 00-.109.005 4.818 4.818 0 00-.048-.385.674.674 0 00.059-.135c.067-.042-.005-.062-.1-.051a2.26 2.26 0 00-.039-.147h.224a.152.152 0 10.292.057.148.148 0 00-.014-.062l1.04-.019a.1.1 0 000 .132c.143.2.244-.072.266-.137l.479-.005c.075.095.22.2.277.043a.207.207 0 00.009-.046h.7a.15.15 0 00-.034.092.152.152 0 10.3 0 .149.149 0 00-.033-.087c.384.007.766.024 1.148.048-.116.015-.254.077-.166.2.161.225.271-.151.271-.151.029-.018.032-.032.018-.042l.1.007a.042.042 0 00.009.008c-.007.052-.016.1-.026.153z"
  }), __jsx("path", {
    "data-name": "Path 81",
    d: "M4.951 7.161c-.144.087.4.076.252-.134s-.252.134-.252.134z"
  }), __jsx("path", {
    "data-name": "Path 82",
    d: "M4.286 7.052c-.1.235.249.14.249.14.15.075-.149-.375-.249-.14z"
  }), __jsx("path", {
    "data-name": "Path 83",
    d: "M4.768 6.721c-.284-.057-.1.31-.1.31-.049.19.384-.249.1-.31z"
  }), __jsx("path", {
    "data-name": "Path 84",
    d: "M5.973 6.533c.095-.26-.277-.138-.277-.138-.167-.073.183.398.277.138z"
  }), __jsx("path", {
    "data-name": "Path 85",
    d: "M5.382 6.898c.276.023.061-.3.061-.3.027-.184-.34.279-.061.3z"
  }), __jsx("path", {
    "data-name": "Path 86",
    d: "M4.985 6.632c.161.225.271-.151.271-.151.154-.097-.433-.076-.271.151z"
  }), __jsx("circle", {
    "data-name": "Ellipse 3",
    cx: ".152",
    cy: ".152",
    r: ".152",
    transform: "translate(3.253 6.916)"
  }), __jsx("path", {
    "data-name": "Path 87",
    d: "M3.851 6.782c-.144-.21-.252.134-.252.134-.144.086.396.076.252-.134z"
  }), __jsx("path", {
    "data-name": "Path 88",
    d: "M3.649 7.126c-.167-.073.183.4.277.138s-.277-.138-.277-.138z"
  }), __jsx("path", {
    "data-name": "Path 89",
    d: "M2.903 6.808c-.1.235.249.14.249.14.151.075-.149-.374-.249-.14z"
  }), __jsx("path", {
    "data-name": "Path 90",
    d: "M3.384 6.48c-.284-.057-.1.31-.1.31-.046.185.385-.256.1-.31z"
  }), __jsx("path", {
    "data-name": "Path 91",
    d: "M6.359 6.852a.152.152 0 11-.152.152.152.152 0 01.152-.152z"
  }), __jsx("path", {
    "data-name": "Path 92",
    d: "M6.553 6.853c-.144.087.4.076.252-.134s-.252.134-.252.134z"
  }), __jsx("path", {
    "data-name": "Path 93",
    d: "M5.861 7.3c.161.225.271-.151.271-.151.152-.1-.435-.074-.271.151z"
  }), __jsx("path", {
    "data-name": "Path 94",
    d: "M5.856 6.744c-.1.235.249.14.249.14.15.075-.15-.375-.249-.14z"
  }), __jsx("path", {
    "data-name": "Path 95",
    d: "M6.338 6.413c-.284-.057-.1.31-.1.31-.049.187.385-.25.1-.31z"
  }), __jsx("path", {
    "data-name": "Path 96",
    d: "M4.064 6.654c.276.023.061-.3.061-.3.027-.184-.339.276-.061.3z"
  }), __jsx("path", {
    "data-name": "Path 97",
    d: "M2.972 6.533c.094-.26-.277-.138-.277-.138-.168-.073.182.398.277.138z"
  }), __jsx("path", {
    "data-name": "Path 98",
    d: "M2.381 6.898c.276.023.061-.3.061-.3.026-.184-.336.279-.061.3z"
  }))));
};
const Google = ({
  color = 'currentColor',
  width = '17px',
  height = '17px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 16.677 17"
  }, __jsx("path", {
    d: "M68.579,55.29l-.086-.364H60.584v3.348h4.725a4.73,4.73,0,0,1-4.627,3.556,5.533,5.533,0,0,1-3.724-1.484,5.316,5.316,0,0,1-1.586-3.752,5.483,5.483,0,0,1,1.557-3.748,5.3,5.3,0,0,1,3.7-1.447,4.825,4.825,0,0,1,3.147,1.226l2.379-2.367a8.417,8.417,0,0,0-5.6-2.158A8.391,8.391,0,0,0,52,56.6,8.541,8.541,0,0,0,54.326,62.5a8.873,8.873,0,0,0,6.4,2.6,7.891,7.891,0,0,0,5.747-2.416,8.486,8.486,0,0,0,2.207-5.878,9.788,9.788,0,0,0-.1-1.516Z",
    transform: "translate(-52 -48.1)",
    fill: color
  }));
};
const GooglePlus = ({
  color = 'currentColor',
  width = '17px',
  height = '11px'
}) => {
  return __jsx("svg", {
    id: "google-hangouts",
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 17.239 11.111"
  }, __jsx("path", {
    id: "Path_1",
    "data-name": "Path 1",
    d: "M5.589,2.02A3.559,3.559,0,0,1,8.417,3.444L9.852,2a5.552,5.552,0,1,0,1.081,5.071,5.385,5.385,0,0,0,.212-1.515V5.05H6.094V7.07H8.771A3.514,3.514,0,0,1,5.589,9.091,3.568,3.568,0,0,1,2.02,5.555,3.568,3.568,0,0,1,5.589,2.02Zm0,0",
    fill: color
  }), __jsx("path", {
    id: "Path_2",
    "data-name": "Path 2",
    d: "M364.535,90h-2.02v1.515H361v2.02h1.515V95.05h2.02V93.535h1.549v-2.02h-1.549Zm0,0",
    transform: "translate(-348.845 -86.97)",
    fill: color
  }));
};
const Facebook = ({
  color = 'currentColor',
  width = '17px',
  height = '17px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 17 17"
  }, __jsx("path", {
    "data-name": "_ionicons_svg_logo-facebook (1)",
    d: "M80.061,64H64.939a.939.939,0,0,0-.939.939V80.061a.939.939,0,0,0,.939.939H72.5V74.271H70.468V71.792H72.5V69.959a3.23,3.23,0,0,1,3.484-3.391c.939,0,1.948.071,2.183.1v2.293H76.6c-1.067,0-1.271.5-1.271,1.248v1.58h2.541l-.332,2.479H75.333V81h4.728A.939.939,0,0,0,81,80.061V64.939A.939.939,0,0,0,80.061,64Z",
    transform: "translate(-64 -64)",
    fill: color
  }));
};
const Twitter = ({
  color = 'currentColor',
  width = '30px',
  height = '24px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 29.915 24.313"
  }, __jsx("path", {
    id: "twitter_2_",
    "data-name": "twitter (2)",
    d: "M9.408,24.812c11.289,0,17.463-9.353,17.463-17.463q0-.4-.017-.793a12.488,12.488,0,0,0,3.062-3.178,12.243,12.243,0,0,1-3.525.966,6.159,6.159,0,0,0,2.7-3.395,12.313,12.313,0,0,1-3.9,1.49,6.143,6.143,0,0,0-10.459,5.6A17.426,17.426,0,0,1,2.082,1.624a6.143,6.143,0,0,0,1.9,8.194A6.091,6.091,0,0,1,1.2,9.05c0,.026,0,.051,0,.078a6.139,6.139,0,0,0,4.924,6.017,6.129,6.129,0,0,1-2.772.105,6.144,6.144,0,0,0,5.734,4.263A12.313,12.313,0,0,1,1.464,22.14,12.514,12.514,0,0,1,0,22.055a17.375,17.375,0,0,0,9.408,2.757",
    transform: "translate(0 -0.5)",
    fill: color
  }));
};
const Linkedin = ({
  width = '60px',
  height = '60px',
  color = 'currentColor'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 60.046 60.046"
  }, __jsx("g", {
    id: "Group_3542",
    "data-name": "Group 3542",
    transform: "translate(-167 -582)"
  }, __jsx("g", {
    id: "linkedin",
    transform: "translate(167 582)"
  }, __jsx("circle", {
    id: "Ellipse_46",
    "data-name": "Ellipse 46",
    cx: "30.023",
    cy: "30.023",
    r: "30.023",
    transform: "translate(0 0)",
    fill: color
  }), __jsx("g", {
    id: "Group_3541",
    "data-name": "Group 3541",
    transform: "translate(14.486 12.828)"
  }, __jsx("path", {
    id: "Path_6184",
    "data-name": "Path 6184",
    d: "M60.543,43.579V55.957H53.366V44.409c0-2.9-1.036-4.88-3.634-4.88a3.925,3.925,0,0,0-3.681,2.624,4.912,4.912,0,0,0-.238,1.749V55.956H38.637s.1-19.559,0-21.583h7.177v3.059c-.014.024-.035.048-.048.071h.048v-.071a7.125,7.125,0,0,1,6.468-3.565c4.721,0,8.261,3.085,8.261,9.713ZM31.129,23.969a3.74,3.74,0,1,0-.094,7.459h.047a3.741,3.741,0,1,0,.048-7.459ZM27.495,55.957h7.174V34.373H27.495Z",
    transform: "translate(-27.068 -23.969)",
    fill: "#f1f2f2"
  })))));
};
const MinusSquareO = props => __jsx("svg", _extends({}, props, {
  viewBox: "64 -65 897 897"
}), __jsx("g", null, __jsx("path", {
  d: "M888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0zM732 347h-442q-14 0 -25 10.5t-11 25.5v0q0 15 11 25.5t25 10.5h442q14 0 25 -10.5t11 -25.5v0 q0 -15 -11 -25.5t-25 -10.5z",
  fill: "currentColor"
})));
const PlusSquareO = props => __jsx("svg", _extends({}, props, {
  viewBox: "64 -65 897 897"
}), __jsx("g", null, __jsx("path", {
  d: "M888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0zM732 420h-184v183q0 15 -10.5 25.5t-25.5 10.5v0q-14 0 -25 -10.5t-11 -25.5v-183h-184 q-15 0 -25.5 -11t-10.5 -25v0q0 -15 10.5 -25.5t25.5 -10.5h184v-183q0 -15 11 -25.5t25 -10.5v0q15 0 25.5 10.5t10.5 25.5v183h184q15 0 25.5 10.5t10.5 25.5v0q0 14 -10.5 25t-25.5 11z",
  fill: "currentColor"
})));
const CloseSquareO = props => __jsx("svg", _extends({}, props, {
  viewBox: "64 -65 897 897"
}), __jsx("g", null, __jsx("path", {
  d: "M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z",
  fill: "currentColor"
}))); // SVG plus icon

const Plus = ({
  color = 'currentColor',
  width = '12px',
  height = '12px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 12 12"
  }, __jsx("g", {
    id: "Group_3351",
    "data-name": "Group 3351",
    transform: "translate(-1367 -190)"
  }, __jsx("rect", {
    "data-name": "Rectangle 520",
    width: "12",
    height: "2",
    rx: "1",
    transform: "translate(1367 195)",
    fill: color
  }), __jsx("rect", {
    "data-name": "Rectangle 521",
    width: "12",
    height: "2",
    rx: "1",
    transform: "translate(1374 190) rotate(90)",
    fill: color
  })));
}; // SVG plus icon

const PlusOutline = ({
  color = 'currentColor',
  width = '16px',
  height = '16px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 16 16"
  }, __jsx("g", {
    id: "Group_3371",
    "data-name": "Group 3371",
    transform: "translate(-1539 -2317.5)"
  }, __jsx("rect", {
    id: "Rectangle_680",
    "data-name": "Rectangle 680",
    width: "16",
    height: "1.5",
    transform: "translate(1539 2325)",
    fill: color
  }), __jsx("rect", {
    id: "Rectangle_681",
    "data-name": "Rectangle 681",
    width: "16",
    height: "1.5",
    transform: "translate(1547.5 2317.5) rotate(90)",
    fill: color
  })));
}; // SVG minus icon

const Minus = ({
  color = 'currentColor',
  width = '12px',
  height = '2px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 12 2"
  }, __jsx("rect", {
    "data-name": "Rectangle 522",
    width: "12",
    height: "2",
    rx: "1",
    fill: color
  }));
}; // SVG Cart icon

const CartIcon = () => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "14.4",
    height: "12",
    viewBox: "0 0 14.4 12"
  }, __jsx("g", {
    "data-name": "Group 120",
    transform: "translate(-288 -413.89)"
  }, __jsx("path", {
    "data-name": "Path 154",
    fill: "currentColor",
    d: "M298.7,418.289l-2.906-4.148a.835.835,0,0,0-.528-.251.607.607,0,0,0-.529.251l-2.905,4.148h-3.17a.609.609,0,0,0-.661.625v.191l1.651,5.84a1.336,1.336,0,0,0,1.255.945h8.588a1.261,1.261,0,0,0,1.254-.945l1.651-5.84v-.191a.609.609,0,0,0-.661-.625Zm-5.419,0,1.984-2.767,1.98,2.767Zm1.984,5.024a1.258,1.258,0,1,1,1.319-1.258,1.3,1.3,0,0,1-1.319,1.258Zm0,0"
  })));
}; // SVG Grocery icon

const GroceryIcon = () => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "14",
    height: "16",
    viewBox: "0 0 14 16"
  }, __jsx("g", {
    "data-name": "Group 69",
    transform: "translate(0 0)"
  }, __jsx("path", {
    "data-name": "Path 112",
    d: "M302.952,415.83a.326.326,0,0,0,.1.016.3.3,0,0,0,.287-.207.533.533,0,0,1,.675-.332,1.139,1.139,0,0,0,1.443-.71.3.3,0,1,0-.573-.2.533.533,0,0,1-.675.332,1.142,1.142,0,0,0-1.443.712.3.3,0,0,0,.189.384Zm0,0",
    transform: "translate(-293.38 -408.637)",
    fill: "currentColor"
  }), __jsx("path", {
    "data-name": "Path 113",
    d: "M304.847,410.255a.31.31,0,0,0,.1.015.3.3,0,0,0,.287-.2.532.532,0,0,1,.675-.332,1.138,1.138,0,0,0,1.442-.712.3.3,0,1,0-.572-.194.533.533,0,0,1-.675.332,1.139,1.139,0,0,0-1.443.712.3.3,0,0,0,.189.384Zm0,0",
    transform: "translate(-294.558 -405.009)",
    fill: "currentColor"
  }), __jsx("g", {
    "data-name": "Group 68"
  }, __jsx("path", {
    "data-name": "Path 114",
    d: "M306.737,404.967a.312.312,0,0,0,.1.015.3.3,0,0,0,.287-.205.4.4,0,0,1,.5-.245,1,1,0,0,0,1.266-.625.3.3,0,1,0-.573-.194.387.387,0,0,1-.2.226.393.393,0,0,1-.3.019,1,1,0,0,0-1.266.623.3.3,0,0,0,.189.385Zm0,0",
    transform: "translate(-295.734 -401.531)",
    fill: "currentColor"
  }), __jsx("path", {
    "data-name": "Path 115",
    d: "M292,405.326a18.15,18.15,0,0,0,1.006-5.3,1.918,1.918,0,0,0-.582-1.376,1.4,1.4,0,0,0-1.6-.212c-.93.433-1.6,1.711-2.128,2.736q-.046.089-.091.173a1.664,1.664,0,0,0-.986-1.129,1.42,1.42,0,0,0-1.153-1.038.631.631,0,0,0-.024-.088,1.048,1.048,0,0,0-.889-.686,1.133,1.133,0,0,0-.662.122,1.209,1.209,0,0,0-.55-.129,1.127,1.127,0,0,0-1.114.8,1.3,1.3,0,0,0-1.03,1.207,1.443,1.443,0,0,0-1.167,1.367,1.3,1.3,0,0,0,.106.509,1.036,1.036,0,0,0-.273.7,1.025,1.025,0,0,0,.1.441,1.716,1.716,0,0,0-1.239-.542.282.282,0,1,0,.009.563.288.288,0,0,0,.03,0,1.114,1.114,0,0,1,.759.377,2.148,2.148,0,0,0-1.365.813,1.315,1.315,0,0,0-.076,1.034.442.442,0,0,0-.076.281l.529,6.812a1.705,1.705,0,0,0,1.771,1.523h8.733a1.7,1.7,0,0,0,1.77-1.518l.542-7.053a.347.347,0,0,0-.111-.274.416.416,0,0,0-.242-.109Zm-3.14-3.173c.123-.208.257-.466.4-.74.468-.9,1.108-2.129,1.849-2.476a.722.722,0,0,1,.869.1,1.386,1.386,0,0,1,.407.968,17.688,17.688,0,0,1-1,5.209c-.02.059-.065.177-.129.341l-.53.213-.033.015a1.054,1.054,0,0,1-.992,0l-.222-.119a1.736,1.736,0,0,0-.828-.208,1.87,1.87,0,0,0-.234.017,1.693,1.693,0,0,0-.614.191l-.222.121a1.055,1.055,0,0,1-.4.112c.006-.022.015-.043.021-.063q.13-.4.277-.788c.035-.1.073-.19.109-.285.082-.206.167-.411.254-.613.038-.087.075-.173.113-.26a17.883,17.883,0,0,1,.9-1.74Zm-3.6,3.332c-.033.006-.068.011-.1.019a1.722,1.722,0,0,0-.3.087l-.061-.247c.09.007.179.014.263.014a2.56,2.56,0,0,0,1.481-.47,4.033,4.033,0,0,1,.431-.242c-.029.073-.056.146-.084.22-.02.054-.042.1-.061.158q-.139.376-.26.759l-.208-.113a1.742,1.742,0,0,0-.826-.208,1.694,1.694,0,0,0-.223.017c-.017,0-.034.005-.052.007Zm-.494-3.806a.131.131,0,0,1-.153-.089.118.118,0,0,1,.1-.138l1.745-.344a.13.13,0,0,1,.126.092.109.109,0,0,1-.018.088.134.134,0,0,1-.08.051Zm.123,1.143c.036-.043.071-.084.1-.125a.523.523,0,0,0,.065-.091.551.551,0,0,0,.058-.419l1.3-.257a.622.622,0,0,0,.033.1.661.661,0,0,0,.307.312l.147.071.126.062.062.03c.036.018.071.038.108.059l.091.053c.035.022.068.047.1.07s.058.045.085.069.058.053.085.082a.977.977,0,0,1,.132.171c-.132.263-.257.532-.377.8-.018.043-.038.082-.056.125a3.293,3.293,0,0,0-1.077.487,1.975,1.975,0,0,1-1.524.336l-.19-.784a1.213,1.213,0,0,1,.42-1.159Zm-1.843,7a.283.283,0,1,1,0,.564h-2.178a.283.283,0,1,1,0-.564Zm-2.178,1.126h2.8a.283.283,0,1,1,0,.564h-2.8a.283.283,0,1,1,0-.564Zm.837-8.4.2-.153-.132-.206a.778.778,0,0,1-.128-.424.888.888,0,0,1,.9-.847l.378-.015-.088-.333a.615.615,0,0,1-.023-.162.733.733,0,0,1,.713-.7l.287-.02v-.279a.5.5,0,0,1,.523-.458.537.537,0,0,1,.346.124l.219.179.21-.187a.454.454,0,0,1,.363-.111.437.437,0,0,1,.365.286.339.339,0,0,1,.015.15l-.037.315h.351a.825.825,0,0,1,.851.719l.015.186.193.061a1.085,1.085,0,0,1,.795,1.038.946.946,0,0,1-.2.558,3.375,3.375,0,0,0-.621-.358c-.049-.023-.1-.045-.143-.07a.064.064,0,0,1-.037-.048.16.16,0,0,1,.044-.125.562.562,0,0,0,.146-.52l-.038-.155a.678.678,0,0,0-.789-.458l-.083.017h0l-.913.181-.89.176a.6.6,0,0,0-.506.714l.018.077h0l.018.076a.622.622,0,0,0,.386.422.18.18,0,0,1,.1.091c.007.021,0,.032-.015.058s-.064.076-.1.115-.07.081-.107.124l-.032.041c-.027.033-.053.066-.08.1l-.039.054c-.024.034-.047.069-.07.1-.014.019-.026.039-.038.059a1.2,1.2,0,0,0-.065.125l-.028.052a1.551,1.551,0,0,0-.071.194.26.26,0,0,1-.006.032,1.375,1.375,0,0,0-.035.18c0,.025,0,.051-.006.077s-.008.065-.008.1l-.026-.03-.063-.069c-.046-.052-.092-.1-.138-.147l-.068-.066c-.049-.044-.1-.085-.147-.125l-.054-.044a2.1,2.1,0,0,0-.2-.128c-.02-.011-.041-.02-.061-.03-.049-.025-.1-.047-.146-.066-.028-.011-.055-.019-.081-.027a1.3,1.3,0,0,0-.134-.036c-.027-.006-.055-.012-.082-.017a1.217,1.217,0,0,0-.17-.015l-.039,0a1.736,1.736,0,0,0-.88.268.52.52,0,0,1-.042-.2.528.528,0,0,1,.222-.424Zm-2,2.338a1.582,1.582,0,0,1,1.006-.539,1.735,1.735,0,0,0,.7-.362c.086-.074.168-.14.247-.2s.14-.1.205-.136l.007-.006a1.33,1.33,0,0,1,.363-.153l.014,0a.745.745,0,0,1,.161-.019c.392,0,.811.353,1.247,1.051a1.958,1.958,0,0,1,.206,1.375l-.07-.008a1.04,1.04,0,0,1-.316-.1l-.222-.121a1.752,1.752,0,0,0-.828-.208,1.954,1.954,0,0,0-.848.208l-.108.059a1.3,1.3,0,0,1-1.22,0l-.419-.228a.566.566,0,0,0-.175-.059.735.735,0,0,1,.051-.548Zm4.585,7.747h-3.423a.282.282,0,1,1,0-.562h3.423a.283.283,0,1,1,0,.562Zm1.867,0h-.623a.282.282,0,1,1,0-.562h.623a.283.283,0,1,1,0,.562Zm0,0",
    transform: "translate(-279.002 -398.28)",
    fill: "currentColor"
  }))));
};
const MakeupIcon = () => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "11.401",
    height: "16",
    viewBox: "0 0 11.401 16"
  }, __jsx("g", {
    transform: "translate(-0.004)"
  }, __jsx("path", {
    "data-name": "Path 2031",
    d: "M20.758,112.77v2.76h3.383v-2.352a2.422,2.422,0,0,1-1.367.409A3.01,3.01,0,0,1,20.758,112.77Zm0,0",
    transform: "translate(-20.105 -109.246)",
    fill: "currentColor"
  }), __jsx("path", {
    "data-name": "Path 2032",
    d: "M4.228,233.031H.408a.4.4,0,0,0-.4.4v7.909a.4.4,0,0,0,.4.4h3.82a.4.4,0,0,0,.4-.4v-7.909A.4.4,0,0,0,4.228,233.031Zm0,0",
    transform: "translate(0 -225.749)",
    fill: "currentColor"
  }), __jsx("path", {
    "data-name": "Path 2033",
    d: "M216.715,453.338a.4.4,0,0,0,.4.4h3.82a.4.4,0,0,0,.4-.4v-1.475h-4.629Zm0,0",
    transform: "translate(-209.939 -437.743)",
    fill: "currentColor"
  }), __jsx("path", {
    "data-name": "Path 2034",
    d: "M220.939,233.031h-3.82a.4.4,0,0,0-.4.4v5.494h4.629v-5.494A.4.4,0,0,0,220.939,233.031Zm0,0",
    transform: "translate(-209.939 -225.749)",
    fill: "currentColor"
  }), __jsx("path", {
    "data-name": "Path 2035",
    d: "M22.7.482a1.7,1.7,0,0,0-2.381.006,1.7,1.7,0,0,0,.431,2.342,1.7,1.7,0,0,0,2.381-.006A1.7,1.7,0,0,0,22.7.482Zm0,0",
    transform: "translate(-19.381)",
    fill: "currentColor"
  })));
};
const MedicineIcon = ({
  width = '16px',
  height = '16px',
  color = 'currentColor'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 16 16.001"
  }, __jsx("g", {
    "data-name": "Group 175",
    transform: "translate(553.392 -314.288)"
  }, __jsx("path", {
    "data-name": "Path 178",
    d: "M-541.294,317.863a3.621,3.621,0,0,1-1.017,2.627c-1.62,1.639-3.24,3.28-4.891,4.888a3.655,3.655,0,0,1-6.033-1.643,3.5,3.5,0,0,1,.907-3.579q2.366-2.417,4.782-4.784a3.491,3.491,0,0,1,3.662-.9,3.536,3.536,0,0,1,2.514,2.77A4.929,4.929,0,0,1-541.294,317.863Zm-4.4,3.7c.791-.786,1.6-1.527,2.329-2.336a1.853,1.853,0,0,0,.293-2.017,2.042,2.042,0,0,0-3.36-.669q-2.632,2.617-5.252,5.247a1.289,1.289,0,0,0-.09.1.594.594,0,0,0,.321.955.622.622,0,0,0,.625-.21q1.47-1.474,2.944-2.945c.048-.048.1-.094.166-.158Z",
    fill: color
  }), __jsx("path", {
    "data-name": "Path 179",
    d: "M-408.46,467.03l1.364-.817a3.95,3.95,0,0,0,4.856,2.139,3.856,3.856,0,0,0,2.756-3.015h-6.746c.067-.075.1-.12.145-.162.444-.445.884-.893,1.336-1.329a.464.464,0,0,1,.292-.12c1.533-.007,3.066-.005,4.6-.005h.367a4.05,4.05,0,0,0-2.268-2.837l.83-1.383a5.562,5.562,0,0,1,3.106,5.582,5.621,5.621,0,0,1-4.764,5.019A5.6,5.6,0,0,1-408.46,467.03Z",
    transform: "translate(-139.595 -139.873)",
    fill: color
  })));
};
const DressIcon = () => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "8.069",
    height: "16",
    viewBox: "0 0 8.069 16"
  }, __jsx("g", {
    "data-name": "Group 2483",
    transform: "translate(0)"
  }, __jsx("path", {
    "data-name": "Path 2037",
    d: "M128.461,11.218c-.107-.534-.341-3.042-.9-3.875a1.286,1.286,0,0,1-.169-.714.035.035,0,0,0,0-.006c.018-.257.046-.531.065-.677,0-.026.007-.051.01-.067.014-.086.033-.171.051-.257h0a14.282,14.282,0,0,0,.458-2.441c0-1.27-.651-1.644-.651-1.644.224-.95.384-1.462.384-1.462L127.522,0a9.387,9.387,0,0,0-.427,1.526,2.588,2.588,0,0,1-1.921.619,2.59,2.59,0,0,1-1.921-.619A9.4,9.4,0,0,0,122.825,0l-.192.075s.16.512.384,1.462c0,0-.651.374-.651,1.644a13.042,13.042,0,0,0,.437,2.339.086.086,0,0,0,0,.035c0,.008.006.019.009.031l.006.024c.027.109.066.3.072.311.013.077.027.216.039.358.005.049.009.1.012.145.005.068.01.132.014.184h-.006a1.3,1.3,0,0,1-.17.735c-.555.833-.79,3.341-.9,3.874s-.363,2.5-.491,3.074-.256,1.367-.256,1.367a3.288,3.288,0,0,0,1.068.128s-.075.224.576.16a12.831,12.831,0,0,1,1.75-.054c.448.021.135.107.64.107s.192-.085.64-.107a12.79,12.79,0,0,1,1.751.054c.651.064.576-.16.576-.16a3.3,3.3,0,0,0,1.067-.128s-.128-.79-.256-1.367S128.568,11.752,128.461,11.218Zm-1.139-5.467c-.05.069-.094.177-.036.224-.015.1-.024.206-.034.309-.058-.066-.243-.006-.243-.006-.138-.06.121.3.226.161,0,.058-.006.115-.009.173-.126-.009-.253-.018-.38-.025a.586.586,0,0,0-.061-.133c.014-.1-.1.014-.134.122-.273-.011-.547-.016-.822-.018-.057-.068-.244-.007-.244-.007-.028-.012-.04-.007-.039.008h-.028a.13.13,0,0,0,.015-.059.135.135,0,0,0-.27,0,.133.133,0,0,0,.015.06c-.361,0-.721.012-1.081.021a.7.7,0,0,0-.037-.069c.012-.082-.065-.015-.112.073l-.184,0a.436.436,0,0,0,.1-.178c.137-.086-.384-.065-.241.134a.182.182,0,0,0,.045.046l-.151,0a.078.078,0,0,0,0-.109c-.121-.176-.212.084-.222.114l-.263.006c0-.024,0-.048,0-.072.065-.01.28-.273.075-.315a.151.151,0,0,0-.1,0c-.01-.115-.024-.229-.043-.342a.6.6,0,0,0,.052-.12c.06-.037,0-.054-.085-.046-.01-.044-.022-.087-.035-.13l.2,0a.135.135,0,1,0,.26.051.132.132,0,0,0-.012-.055l.926-.017a.085.085,0,0,0,0,.117c.127.177.217-.064.236-.122l.426,0c.066.084.2.175.246.038a.184.184,0,0,0,.008-.041c.208,0,.417,0,.624,0a.133.133,0,0,0-.03.082.135.135,0,1,0,.27,0,.132.132,0,0,0-.029-.08c.342.006.681.022,1.021.042-.1.013-.226.069-.147.179.143.2.241-.134.241-.134.026-.016.028-.029.016-.037l.091.006s0,.005.007.007C127.34,5.661,127.331,5.706,127.322,5.751Z",
    transform: "translate(-121.139)",
    fill: "currentColor"
  }), __jsx("path", {
    "data-name": "Path 2038",
    d: "M254.937,189.152c-.128.076.352.067.224-.119S254.937,189.152,254.937,189.152Z",
    transform: "translate(-250.536 -182.787)",
    fill: "currentColor"
  }), __jsx("path", {
    "data-name": "Path 2039",
    d: "M237.086,189.725c-.088.209.221.124.221.124C237.441,189.916,237.175,189.516,237.086,189.725Z",
    transform: "translate(-233.276 -183.455)",
    fill: "currentColor"
  }), __jsx("path", {
    "data-name": "Path 2040",
    d: "M246.479,182.469c-.253-.051-.088.275-.088.275C246.346,182.908,246.731,182.52,246.479,182.469Z",
    transform: "translate(-242.24 -176.491)",
    fill: "currentColor"
  }), __jsx("path", {
    "data-name": "Path 2041",
    d: "M274.916,173.035c.084-.231-.247-.122-.247-.122C274.521,172.847,274.832,173.266,274.916,173.035Z",
    transform: "translate(-269.605 -167.228)",
    fill: "currentColor"
  }), __jsx("path", {
    "data-name": "Path 2042",
    d: "M264.6,178.247c.245.021.054-.27.054-.27C264.673,177.816,264.35,178.226,264.6,178.247Z",
    transform: "translate(-259.81 -172.115)",
    fill: "currentColor"
  }), __jsx("path", {
    "data-name": "Path 2043",
    d: "M255.758,174.715c.143.2.241-.134.241-.134C256.136,174.495,255.615,174.515,255.758,174.715Z",
    transform: "translate(-251.328 -168.82)",
    fill: "currentColor"
  }), __jsx("circle", {
    "data-name": "Ellipse 71",
    cx: "0.135",
    cy: "0.135",
    r: "0.135",
    transform: "translate(2.892 6.148)",
    fill: "currentColor"
  }), __jsx("path", {
    "data-name": "Path 2044",
    d: "M218.467,182.406c-.128-.187-.224.119-.224.119C218.114,182.6,218.595,182.592,218.467,182.406Z",
    transform: "translate(-215.043 -176.377)",
    fill: "currentColor"
  }), __jsx("path", {
    "data-name": "Path 2045",
    d: "M219.072,192.782c-.148-.065.163.354.247.123S219.072,192.782,219.072,192.782Z",
    transform: "translate(-215.828 -186.447)",
    fill: "currentColor"
  }), __jsx("path", {
    "data-name": "Path 2046",
    d: "M199.506,183.093c-.088.209.221.124.221.124C199.86,183.284,199.594,182.885,199.506,183.093Z",
    transform: "translate(-196.925 -177.041)",
    fill: "currentColor"
  }), __jsx("path", {
    "data-name": "Path 2047",
    d: "M208.891,175.836c-.253-.051-.088.275-.088.275C208.758,176.276,209.143,175.887,208.891,175.836Z",
    transform: "translate(-205.882 -170.076)",
    fill: "currentColor"
  }), __jsx("path", {
    "data-name": "Path 2048",
    d: "M289.843,186.1a.135.135,0,1,1-.135.135A.135.135,0,0,1,289.843,186.1Z",
    transform: "translate(-284.19 -180.009)",
    fill: "currentColor"
  }), __jsx("path", {
    "data-name": "Path 2049",
    d: "M298.459,180.79c-.128.077.352.067.224-.119S298.459,180.79,298.459,180.79Z",
    transform: "translate(-292.633 -174.698)",
    fill: "currentColor"
  }), __jsx("path", {
    "data-name": "Path 2050",
    d: "M279.489,192.851c.143.2.241-.134.241-.134C279.867,192.631,279.346,192.651,279.489,192.851Z",
    transform: "translate(-274.281 -186.362)",
    fill: "currentColor"
  }), __jsx("path", {
    "data-name": "Path 2051",
    d: "M279.72,181.364c-.088.209.221.124.221.124C280.075,181.555,279.808,181.155,279.72,181.364Z",
    transform: "translate(-274.514 -175.368)",
    fill: "currentColor"
  }), __jsx("path", {
    "data-name": "Path 2052",
    d: "M289.113,174.1c-.253-.051-.089.275-.089.275C288.98,174.541,289.366,174.153,289.113,174.1Z",
    transform: "translate(-283.478 -168.398)",
    fill: "currentColor"
  }), __jsx("path", {
    "data-name": "Path 2053",
    d: "M228.78,171.616c.245.021.054-.27.054-.27C228.858,171.185,228.535,171.6,228.78,171.616Z",
    transform: "translate(-225.167 -165.701)",
    fill: "currentColor"
  }), __jsx("path", {
    "data-name": "Path 2054",
    d: "M193.371,173.035c.084-.231-.247-.122-.247-.122C192.976,172.847,193.287,173.266,193.371,173.035Z",
    transform: "translate(-190.73 -167.228)",
    fill: "currentColor"
  }), __jsx("path", {
    "data-name": "Path 2055",
    d: "M183.052,178.247c.245.021.054-.27.054-.27C183.13,177.816,182.807,178.226,183.052,178.247Z",
    transform: "translate(-180.936 -172.115)",
    fill: "currentColor"
  })));
};
const Handbag = () => {
  return __jsx("svg", {
    version: "1.1",
    x: "0px",
    y: "0px",
    viewBox: "0 0 511.999 511.999",
    width: "15",
    fill: "currentColor"
  }, __jsx("g", null, __jsx("g", null, __jsx("path", {
    d: "M496.619,428.582l-51.45-221.82h-62.616v48.827H393.1v30.001h-51.096v-30.001h10.547v-48.827H159.448v48.827h10.547 v30.001H118.9v-30.001h10.547v-48.827H66.83l-51.45,221.82c-4.715,20.332,0.026,41.364,13.011,57.705 c12.985,16.341,32.401,25.712,53.272,25.712h348.672c20.871,0,40.289-9.372,53.273-25.712 C496.593,469.946,501.335,448.914,496.619,428.582z M298.917,285.591H271v23.18h-30.001v-23.18h-27.917V255.59h85.836V285.591z"
  }))), __jsx("g", null, __jsx("g", null, __jsx("path", {
    d: "M255.999,0c-69.781,0-126.553,56.772-126.553,126.552v80.21h30.001v-80.21c0-53.239,43.313-96.551,96.552-96.551 c53.238,0,96.552,43.313,96.552,96.551v80.21h30.001v-80.21C382.552,56.772,325.781,0,255.999,0z"
  }))), __jsx("g", null), __jsx("g", null), __jsx("g", null), __jsx("g", null), __jsx("g", null), __jsx("g", null), __jsx("g", null), __jsx("g", null), __jsx("g", null), __jsx("g", null), __jsx("g", null), __jsx("g", null), __jsx("g", null), __jsx("g", null), __jsx("g", null));
}; // SVG EllipsisIcon icon

const EllipsisIcon = () => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "26",
    height: "6",
    viewBox: "0 0 26 6"
  }, __jsx("g", {
    "data-name": "Group 152",
    transform: "translate(589 479)"
  }, __jsx("ellipse", {
    "data-name": "Ellipse 20",
    cx: "3.136",
    cy: "3",
    rx: "3.136",
    ry: "3",
    transform: "translate(-589 -479)",
    fill: "currentColor"
  }), __jsx("ellipse", {
    "data-name": "Ellipse 22",
    cx: "3.136",
    cy: "3",
    rx: "3.136",
    ry: "3",
    transform: "translate(-569.271 -479)",
    fill: "currentColor"
  }), __jsx("ellipse", {
    "data-name": "Ellipse 21",
    cx: "3.136",
    cy: "3",
    rx: "3.136",
    ry: "3",
    transform: "translate(-579.136 -479)",
    fill: "currentColor"
  })));
}; // SVG ArrowNext icon

const GiftBox = () => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "14.857",
    height: "16",
    viewBox: "0 0 14.857 16"
  }, __jsx("g", {
    "data-name": "Group 2485",
    transform: "translate(-81.5 40)"
  }, __jsx("g", {
    "data-name": "Group 2484"
  }, __jsx("g", {
    "data-name": "Group 2483",
    transform: "translate(-5.5 21)"
  }, __jsx("path", {
    "data-name": "_ionicons_svg_ios-gift (1)",
    d: "M61.714,35.714H58.7a2.1,2.1,0,0,0,.725-1.571A2.2,2.2,0,0,0,57.175,32a1.993,1.993,0,0,0-1.746.979A1.993,1.993,0,0,0,53.682,32a2.2,2.2,0,0,0-2.254,2.143,2.086,2.086,0,0,0,.725,1.571H49.143A1.142,1.142,0,0,0,48,36.857v.714a.143.143,0,0,0,.143.143H62.714a.143.143,0,0,0,.143-.143v-.714A1.142,1.142,0,0,0,61.714,35.714ZM57.175,33a1.144,1.144,0,1,1,0,2.286h-1.2C55.971,33.571,56.511,33,57.175,33Zm-3.493,0c.664,0,1.2.571,1.2,2.286h-1.2a1.144,1.144,0,1,1,0-2.286Zm-5.111,5.929v7.929A1.146,1.146,0,0,0,49.714,48h5.214V38.643H48.857A.287.287,0,0,0,48.571,38.929ZM62,38.643H55.929V48h5.214a1.146,1.146,0,0,0,1.143-1.143V38.929A.287.287,0,0,0,62,38.643Z",
    transform: "translate(39 -93)",
    fill: "currentColor"
  })))));
}; // SVG ArrowNext icon

const ArrowNext = () => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512",
    width: "20"
  }, __jsx("path", {
    d: "M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z",
    fill: "currentColor",
    stroke: "currentColor"
  }));
}; // SVG ArrowPrev icon

const ArrowPrev = () => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512",
    width: "20"
  }, __jsx("path", {
    d: "M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z",
    fill: "currentColor",
    stroke: "currentColor"
  }));
}; // SVG Lock icon

const LockIcon = () => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512",
    width: "15"
  }, __jsx("path", {
    d: "M376 192h-24v-46.7c0-52.7-42-96.5-94.7-97.3-53.4-.7-97.3 42.8-97.3 96v48h-24c-22 0-40 18-40 40v192c0 22 18 40 40 40h240c22 0 40-18 40-40V232c0-22-18-40-40-40zM270 316.8v68.8c0 7.5-5.8 14-13.3 14.4-8 .4-14.7-6-14.7-14v-69.2c-11.5-5.6-19.1-17.8-17.9-31.7 1.4-15.5 14.1-27.9 29.6-29 18.7-1.3 34.3 13.5 34.3 31.9 0 12.7-7.3 23.6-18 28.8zM324 192H188v-48c0-18.1 7.1-35.1 20-48s29.9-20 48-20 35.1 7.1 48 20 20 29.9 20 48v48z"
  }));
}; // SVG SearchIcon icon

const SearchIcon = ({
  color = 'currentColor',
  width = '14px',
  height = '14px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 14 14"
  }, __jsx("path", {
    d: "M14.771,12.752,11.32,9.286a5.519,5.519,0,0,0,1.374-3.634A5.763,5.763,0,0,0,6.839,0,5.763,5.763,0,0,0,.984,5.652,5.763,5.763,0,0,0,6.839,11.3a5.936,5.936,0,0,0,3.354-1.023l3.477,3.492a.783.783,0,0,0,1.08.02A.72.72,0,0,0,14.771,12.752ZM6.839,1.475a4.259,4.259,0,0,1,4.327,4.178A4.259,4.259,0,0,1,6.839,9.83,4.259,4.259,0,0,1,2.511,5.652,4.259,4.259,0,0,1,6.839,1.475Z",
    transform: "translate(-0.984)",
    fill: color
  }));
}; // SVG SearchIcon icon

const SearchIconSmall = () => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "14.01",
    height: "14.01",
    viewBox: "0 0 14.01 14.01"
  }, __jsx("path", {
    "data-name": "_ionicons_svg_ios-search (5)",
    d: "M77.845,76.9l-3.9-3.932a5.553,5.553,0,1,0-.843.854l3.871,3.906a.6.6,0,0,0,.846.022A.6.6,0,0,0,77.845,76.9Zm-8.26-3.031a4.384,4.384,0,1,1,3.1-1.284A4.358,4.358,0,0,1,69.586,73.865Z",
    transform: "translate(-64 -63.9)",
    fill: "currentColor"
  }));
}; // SVG SmartPhone icon

const SmartPhone = () => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "15.602",
    height: "24",
    viewBox: "0 0 15.602 24"
  }, __jsx("g", {
    transform: "translate(0)"
  }, __jsx("path", {
    "data-name": "Path 111",
    d: "M67.566,18.7V.808A.808.808,0,0,0,66.757,0H52.772a.808.808,0,0,0-.808.808V18.7h15.6Zm-7.8-4.449a.848.848,0,1,1,.848-.848A.848.848,0,0,1,59.765,14.247Zm2.844-2.267a.647.647,0,0,1-.914,0,2.728,2.728,0,0,0-3.859,0,.647.647,0,0,1-.915-.914,4.021,4.021,0,0,1,5.688,0A.646.646,0,0,1,62.609,11.98ZM54.991,9.134a6.75,6.75,0,0,1,9.548,0,.647.647,0,1,1-.915.914,5.457,5.457,0,0,0-7.719,0,.647.647,0,0,1-.915-.914Z",
    transform: "translate(-51.964)",
    fill: "currentColor"
  }), __jsx("path", {
    "data-name": "Path 112",
    d: "M51.964,247.371v3.2a.808.808,0,0,0,.808.808H66.757a.808.808,0,0,0,.808-.808v-3.2Zm8.5,2.289h-1.4a.647.647,0,1,1,0-1.293h1.4a.647.647,0,1,1,0,1.293Z",
    transform: "translate(-51.964 -227.381)",
    fill: "currentColor"
  })));
}; // SVG CloseIcon icon

const CloseIcon = () => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "10.003",
    height: "10",
    viewBox: "0 0 10.003 10"
  }, __jsx("path", {
    "data-name": "_ionicons_svg_ios-close (5)",
    d: "M166.686,165.55l3.573-3.573a.837.837,0,0,0-1.184-1.184l-3.573,3.573-3.573-3.573a.837.837,0,1,0-1.184,1.184l3.573,3.573-3.573,3.573a.837.837,0,0,0,1.184,1.184l3.573-3.573,3.573,3.573a.837.837,0,0,0,1.184-1.184Z",
    transform: "translate(-160.5 -160.55)",
    fill: "currentColor"
  }));
}; // SVG CategoryIcon icon

const CategoryIcon = () => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "14",
    height: "14",
    viewBox: "0 0 14 14"
  }, __jsx("path", {
    "data-name": "Path 2029",
    d: "M13.563,7.876H8.313a.437.437,0,0,0-.437.437v5.25A.437.437,0,0,0,8.313,14h5.25A.437.437,0,0,0,14,13.564V8.314A.437.437,0,0,0,13.563,7.876Zm0-7.875H8.313a.437.437,0,0,0-.437.437v5.25a.437.437,0,0,0,.437.437h5.25A.437.437,0,0,0,14,5.688V.438A.437.437,0,0,0,13.563,0ZM5.687,0H.437A.438.438,0,0,0,0,.438v5.25a.437.437,0,0,0,.437.437h5.25a.437.437,0,0,0,.437-.437V.438A.438.438,0,0,0,5.687,0Zm0,7.875H.437A.437.437,0,0,0,0,8.314v5.25A.437.437,0,0,0,.437,14h5.25a.437.437,0,0,0,.437-.437V8.314A.437.437,0,0,0,5.687,7.876Z",
    transform: "translate(0 -0.001)",
    fill: "currentColor"
  }));
};
const ArrowDropDown = () => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "10",
    height: "5",
    viewBox: "0 0 10 5"
  }, __jsx("path", {
    "data-name": "Path 2030",
    d: "M0,63.75l5,5,5-5Z",
    transform: "translate(0 -63.75)",
    fill: "currentColor"
  }));
};
const ShoppingBag = () => {
  return __jsx("span", null, __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "12.686",
    height: "16",
    viewBox: "0 0 12.686 16"
  }, __jsx("g", {
    "data-name": "Group 2704",
    transform: "translate(-27.023 -2)"
  }, __jsx("g", {
    "data-name": "Group 17",
    transform: "translate(27.023 5.156)"
  }, __jsx("g", {
    "data-name": "Group 16"
  }, __jsx("path", {
    "data-name": "Path 3",
    d: "M65.7,111.043l-.714-9A1.125,1.125,0,0,0,63.871,101H62.459V103.1a.469.469,0,1,1-.937,0V101H57.211V103.1a.469.469,0,1,1-.937,0V101H54.862a1.125,1.125,0,0,0-1.117,1.033l-.715,9.006a2.605,2.605,0,0,0,2.6,2.8H63.1a2.605,2.605,0,0,0,2.6-2.806Zm-4.224-4.585-2.424,2.424a.468.468,0,0,1-.663,0l-1.136-1.136a.469.469,0,0,1,.663-.663l.8.8,2.092-2.092a.469.469,0,1,1,.663.663Z",
    transform: "translate(-53.023 -101.005)",
    fill: "currentColor"
  }))), __jsx("g", {
    "data-name": "Group 19",
    transform: "translate(30.274 2)"
  }, __jsx("g", {
    "data-name": "Group 18"
  }, __jsx("path", {
    "data-name": "Path 4",
    d: "M160.132,0a3.1,3.1,0,0,0-3.093,3.093v.063h.937V3.093a2.155,2.155,0,1,1,4.311,0v.063h.937V3.093A3.1,3.1,0,0,0,160.132,0Z",
    transform: "translate(-157.039)",
    fill: "currentColor"
  }))))));
};
const ShoppingBagLarge = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 23.786 30"
  }, __jsx("g", {
    "data-name": "shopping-bag (3)",
    transform: "translate(-53.023)"
  }, __jsx("g", {
    "data-name": "Group 2704"
  }, __jsx("g", {
    "data-name": "Group 17",
    transform: "translate(53.023 5.918)"
  }, __jsx("g", {
    "data-name": "Group 16"
  }, __jsx("path", {
    "data-name": "Path 3",
    d: "M76.8,119.826l-1.34-16.881A2.109,2.109,0,0,0,73.362,101H70.716v3.921a.879.879,0,1,1-1.757,0V101H60.875v3.921a.879.879,0,1,1-1.757,0V101H56.472a2.109,2.109,0,0,0-2.094,1.937l-1.34,16.886a4.885,4.885,0,0,0,4.87,5.259H71.926a4.884,4.884,0,0,0,4.87-5.261Zm-7.92-8.6-4.544,4.544a.878.878,0,0,1-1.243,0l-2.13-2.13A.878.878,0,0,1,62.2,112.4l1.509,1.508,3.923-3.923a.879.879,0,1,1,1.242,1.243Z",
    transform: "translate(-53.023 -101.005)",
    fill: color
  }))), __jsx("g", {
    "data-name": "Group 19",
    transform: "translate(59.118)"
  }, __jsx("g", {
    "data-name": "Group 18"
  }, __jsx("path", {
    "data-name": "Path 4",
    d: "M162.838,0a5.806,5.806,0,0,0-5.8,5.8v.119H158.8V5.8a4.042,4.042,0,1,1,8.083,0v.119h1.757V5.8A5.806,5.806,0,0,0,162.838,0Z",
    transform: "translate(-157.039)",
    fill: color
  }))))));
};
const PencilIcon = () => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "7.2",
    height: "7.2",
    viewBox: "0 0 7.2 7.2"
  }, __jsx("path", {
    d: "M64,69.7v1.5h1.5l4.42-4.42-1.5-1.5Zm7.08-4.08a.387.387,0,0,0,0-.56l-.94-.94a.387.387,0,0,0-.56,0l-.74.74,1.5,1.5Z",
    transform: "translate(-64 -63.999)",
    fill: "currentColor"
  }));
};
const LongArrowLeft = () => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "8.003",
    viewBox: "0 0 12 8.003"
  }, __jsx("path", {
    "data-name": "_ionicons_svg_ios-arrow-round-back (2)",
    d: "M116.447,160.177a.545.545,0,0,1,0,.767l-2.53,2.538h9.641a.542.542,0,0,1,0,1.084h-9.641l2.534,2.538a.549.549,0,0,1,0,.767.54.54,0,0,1-.763,0l-3.435-3.46a.608.608,0,0,1-.113-.171.517.517,0,0,1-.042-.208.543.543,0,0,1,.154-.379l3.435-3.46A.531.531,0,0,1,116.447,160.177Z",
    transform: "translate(-112.1 -160.023)",
    fill: "currentColor"
  }));
};
const CheckMark = () => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "20.894",
    height: "16",
    viewBox: "0 0 20.894 16"
  }, __jsx("path", {
    "data-name": "_ionicons_svg_ios-checkmark (3)",
    d: "M169.184,175.473l-1.708-1.756a.367.367,0,0,0-.272-.116.352.352,0,0,0-.272.116l-11.837,11.925-4.308-4.308a.375.375,0,0,0-.543,0l-1.727,1.727a.387.387,0,0,0,0,.553l5.434,5.434a1.718,1.718,0,0,0,1.135.553,1.8,1.8,0,0,0,1.126-.534h.01l12.973-13.041A.415.415,0,0,0,169.184,175.473Z",
    transform: "translate(-148.4 -173.6)",
    fill: "currentColor"
  }));
}; // SVG notification icon

const NotificationIcon = () => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "15.898",
    height: "18",
    viewBox: "0 0 15.898 18"
  }, __jsx("path", {
    "data-name": "Path 2062",
    d: "M3756.814,4042.745c-.321,1.887-1.279,2.844-2.816,2.832-1.495-.011-2.448-.987-2.74-2.8-.834-.14-1.684-.218-2.494-.44a7.131,7.131,0,0,1-1.956-.838,1.354,1.354,0,0,1-.333-2.139,7.716,7.716,0,0,0,1.7-4.647,16.446,16.446,0,0,1,.793-3.939,4.785,4.785,0,0,1,4.625-3.188,8.258,8.258,0,0,1,2.4.256,4.649,4.649,0,0,1,3.432,3.795c.3,1.292.441,2.62.646,3.934a7.247,7.247,0,0,0,.836,2.789,6.2,6.2,0,0,0,.573.74,1.577,1.577,0,0,1-.41,2.6,7.794,7.794,0,0,1-2.977.89C3757.661,4042.654,3757.234,4042.695,3756.814,4042.745Zm3.407-2.482a8.64,8.64,0,0,1-1.888-5.015c-.139-1.1-.309-2.195-.547-3.274a3.019,3.019,0,0,0-2.075-2.482,5.458,5.458,0,0,0-1.612-.264c-2.086.031-3.318.688-3.815,2.928-.259,1.167-.388,2.365-.561,3.55a7.6,7.6,0,0,1-1.781,4.458c-.022.023-.019.071-.026.1C3749.689,4041.453,3758.313,4041.456,3760.221,4040.263Zm-4.717,2.583h-2.94a1.47,1.47,0,1,0,2.94,0Z",
    transform: "translate(-3746.087 -4027.577)",
    fill: "currentColor"
  }));
}; // SVG Notification dot icon

const AlertDotIcon = () => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "10",
    height: "10",
    viewBox: "0 0 10 10"
  }, __jsx("g", {
    "data-name": "Group 2830",
    transform: "translate(-1598 -32)"
  }, __jsx("g", {
    "data-name": "Ellipse 73",
    transform: "translate(1598 32)",
    fill: "#ffffff",
    stroke: "currentColor",
    strokeWidth: "0.3"
  }, __jsx("circle", {
    cx: "5",
    cy: "5",
    r: "5",
    stroke: "none"
  }), __jsx("circle", {
    cx: "5",
    cy: "5",
    r: "4.85",
    fill: "none"
  })), __jsx("path", {
    "data-name": "Path 2700",
    d: "M2,0A2,2,0,1,1,0,2,2,2,0,0,1,2,0Z",
    transform: "translate(1601 35)",
    fill: "currentColor"
  })));
}; // Dashboard

const DashboardIcon = () => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "15",
    height: "15",
    viewBox: "0 0 15 15"
  }, __jsx("g", {
    "data-name": "Group 2583",
    transform: "translate(0 0)"
  }, __jsx("path", {
    "data-name": "Path 2129",
    d: "M1667.731,877.683a3.066,3.066,0,1,1-3.067-3.068A3.061,3.061,0,0,1,1667.731,877.683Z",
    transform: "translate(-1652.731 -865.747)",
    fill: "currentColor"
  }), __jsx("path", {
    "data-name": "Path 2130",
    d: "M1471.213,874.615a3.066,3.066,0,1,1-3.072,3.064A3.06,3.06,0,0,1,1471.213,874.615Z",
    transform: "translate(-1468.141 -865.747)",
    fill: "currentColor"
  }), __jsx("path", {
    "data-name": "Path 2131",
    d: "M1474.272,684.227a3.066,3.066,0,1,1-3.044-3.075A3.063,3.063,0,0,1,1474.272,684.227Z",
    transform: "translate(-1468.14 -681.152)",
    fill: "currentColor"
  }), __jsx("path", {
    "data-name": "Path 2132",
    d: "M1674.436,691.284q0,1.143,0,2.286c0,.335-.107.441-.443.441h-4.572c-.326,0-.438-.108-.438-.43q0-2.295,0-4.589c0-.323.111-.433.435-.433h4.572c.344,0,.445.105.446.455Q1674.436,690.149,1674.436,691.284Z",
    transform: "translate(-1659.775 -688.219)",
    fill: "currentColor"
  })));
}; // Product

const ProductIcon = () => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "15.6",
    height: "13",
    viewBox: "0 0 15.6 13"
  }, __jsx("path", {
    "data-name": "Path 154",
    d: "M299.593,418.656l-3.148-4.494a.9.9,0,0,0-.572-.272.658.658,0,0,0-.573.272l-3.148,4.494h-3.435a.66.66,0,0,0-.716.677v.207l1.789,6.327a1.448,1.448,0,0,0,1.36,1.023h9.3a1.366,1.366,0,0,0,1.359-1.023l1.789-6.327v-.207a.659.659,0,0,0-.716-.677Zm-5.87,0,2.149-3,2.145,3Zm2.149,5.443a1.362,1.362,0,1,1,1.428-1.363,1.4,1.4,0,0,1-1.428,1.363Zm0,0",
    transform: "translate(-288 -413.89)",
    fill: "currentColor"
  }));
}; // Category

const SidebarCategoryIcon = () => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "12.958",
    height: "13",
    viewBox: "0 0 12.958 13"
  }, __jsx("path", {
    "data-name": "Path 321",
    d: "M1.015,10.3,1,4.388a.4.4,0,0,1,.564-.373l5.379,2.3a.4.4,0,0,1,.246.371L7.2,12.594a.4.4,0,0,1-.564.373l-5.379-2.3A.4.4,0,0,1,1.015,10.3Zm12.323-5.63L8.375,6.816l.013,5.468,4.963-2.15-.013-5.468m.2-.713a.405.405,0,0,1,.405.4l.014,5.908a.4.4,0,0,1-.244.372L8.347,12.963a.4.4,0,0,1-.565-.37L7.768,6.684a.4.4,0,0,1,.244-.372l5.368-2.325a.4.4,0,0,1,.16-.034ZM7.44.626l-5.149,2.3L7.451,5.2,12.6,2.9,7.44.626m0-.626A.4.4,0,0,1,7.6.034l5.659,2.495a.4.4,0,0,1,0,.74L7.617,5.79a.4.4,0,0,1-.328,0L1.63,3.3a.4.4,0,0,1,0-.74L7.275.035A.4.4,0,0,1,7.439,0Z",
    transform: "translate(-1.001)",
    fill: "currentColor"
  }));
}; // Orders

const OrderIcon = () => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "11.321",
    height: "13",
    viewBox: "0 0 11.321 13"
  }, __jsx("g", {
    "data-name": "Group 1087",
    transform: "translate(0)"
  }, __jsx("g", {
    "data-name": "Group 1086"
  }, __jsx("path", {
    "data-name": "Path 322",
    d: "M274.867.365A.733.733,0,0,0,274.234,0h-2.718V3.215h5Z",
    transform: "translate(-265.461)",
    fill: "currentColor"
  }), __jsx("path", {
    "data-name": "Path 323",
    d: "M48.821,0H46.077a.733.733,0,0,0-.633.366L43.8,3.215h5.02V0Z",
    transform: "translate(-43.528)",
    fill: "currentColor"
  }), __jsx("path", {
    "data-name": "Path 324",
    d: "M33.057,156.648v8.127a.9.9,0,0,0,.9.9h9.529a.9.9,0,0,0,.9-.9v-8.127Zm7.39,3.418-1.971,1.971a.38.38,0,0,1-.539,0l-.924-.924a.381.381,0,1,1,.539-.539l.654.654,1.7-1.7a.381.381,0,1,1,.539.539Z",
    transform: "translate(-33.057 -152.671)",
    fill: "currentColor"
  }))));
}; // Customers

const CustomerIcon = () => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "12.489",
    height: "13",
    viewBox: "0 0 12.489 13"
  }, __jsx("g", {
    "data-name": "group (1)",
    transform: "translate(0)"
  }, __jsx("path", {
    "data-name": "Path 327",
    d: "M43.356,2.708a.328.328,0,0,0,.459-.062,5.053,5.053,0,0,1,8.04,0,.328.328,0,1,0,.521-.4,5.708,5.708,0,0,0-9.081,0A.328.328,0,0,0,43.356,2.708Z",
    transform: "translate(-41.591)",
    fill: "currentColor"
  }), __jsx("path", {
    "data-name": "Path 328",
    d: "M228.037,79.44a1.023,1.023,0,1,0,1.023-1.023A1.024,1.024,0,0,0,228.037,79.44Z",
    transform: "translate(-218.311 -74.985)",
    fill: "currentColor"
  }), __jsx("path", {
    "data-name": "Path 329",
    d: "M214.438,130.872l-.26-.08a.306.306,0,0,0-.273.048l-.514.385-.514-.385a.306.306,0,0,0-.273-.048l-.26.08a1.013,1.013,0,0,0-.693.962v1.546a.3.3,0,0,0,.05.168l.519.789v2.073a.306.306,0,0,0,.306.306h1.731a.306.306,0,0,0,.306-.306v-2.073l.519-.789a.305.305,0,0,0,.05-.168v-1.546A1.013,1.013,0,0,0,214.438,130.872Z",
    transform: "translate(-202.642 -125.054)",
    fill: "currentColor"
  }), __jsx("path", {
    "data-name": "Path 330",
    d: "M23.247,80.463a1.023,1.023,0,1,0-1.023-1.023A1.024,1.024,0,0,0,23.247,80.463Z",
    transform: "translate(-21.507 -74.985)",
    fill: "currentColor"
  }), __jsx("path", {
    "data-name": "Path 331",
    d: "M8.626,130.872l-.26-.08a.306.306,0,0,0-.273.048l-.514.385-.514-.385a.306.306,0,0,0-.273-.048l-.26.08a1.013,1.013,0,0,0-.693.962v1.546a.3.3,0,0,0,.05.168l.519.789v2.073a.306.306,0,0,0,.306.306H8.445a.306.306,0,0,0,.306-.306v-2.073l.519-.789a.305.305,0,0,0,.05-.168v-1.546A1.013,1.013,0,0,0,8.626,130.872Z",
    transform: "translate(-5.839 -125.054)",
    fill: "currentColor"
  }), __jsx("path", {
    "data-name": "Path 332",
    d: "M121,40.028a1.319,1.319,0,1,0-1.319,1.319A1.321,1.321,0,0,0,121,40.028Z",
    transform: "translate(-113.433 -37.015)",
    fill: "currentColor"
  }), __jsx("path", {
    "data-name": "Path 333",
    d: "M100.82,110.947h0l-.377-.116a.117.117,0,0,0-.144.072l-.792,2.173a.143.143,0,0,1-.269,0l-.792-2.173a.117.117,0,0,0-.11-.077c-.011,0-.411.121-.411.121a1.169,1.169,0,0,0-.8,1.11v2.3a.117.117,0,0,0,.019.064l.826,1.257v3.181a.117.117,0,0,0,.117.117h2.573a.117.117,0,0,0,.117-.117v-3.181l.826-1.257a.117.117,0,0,0,.019-.064v-2.3A1.161,1.161,0,0,0,100.82,110.947Z",
    transform: "translate(-93.126 -105.975)",
    fill: "currentColor"
  }), __jsx("path", {
    "data-name": "Path 334",
    d: "M141.079,111.386a.174.174,0,0,0-.129-.054h-.361a.174.174,0,0,0-.129.054.167.167,0,0,0-.022.2l.193.291-.09.762.178.473a.054.054,0,0,0,.1,0l.178-.473-.09-.762.193-.291A.167.167,0,0,0,141.079,111.386Z",
    transform: "translate(-134.525 -106.459)",
    fill: "currentColor"
  })));
}; // Inbox

const InboxIcon = () => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "13.867",
    height: "12.133",
    viewBox: "0 0 13.867 12.133"
  }, __jsx("g", {
    "data-name": "Group 2932",
    transform: "translate(0 0)"
  }, __jsx("path", {
    "data-name": "Path 325",
    d: "M7,3V0H5V3H4L6,5.5,8,3Z",
    transform: "translate(1 4)",
    fill: "currentColor"
  }), __jsx("path", {
    "data-name": "Path 326",
    d: "M11.267,1H9.533v.867H10.66L12.913,8.8H9.533v1.733h-5.2V8.8H.953L3.207,1.867H4.333V1H2.6L0,8.8v4.333H13.867V8.8Z",
    transform: "translate(0 -1)",
    fill: "currentColor"
  })));
}; // Refund

const RefundIcon = () => {
  return __jsx("svg", {
    "data-name": "Group 2392",
    xmlns: "http://www.w3.org/2000/svg",
    width: "15",
    height: "13",
    viewBox: "0 0 15 13"
  }, __jsx("g", {
    "data-name": "Group 2391"
  }, __jsx("path", {
    "data-name": "Path 335",
    d: "M301.479,70.5a3.284,3.284,0,1,0-2.812-3.25A3.058,3.058,0,0,0,301.479,70.5Zm-.765-4.656.625-.361a.275.275,0,0,1,.3.016.377.377,0,0,1,.148.307v2.889a.316.316,0,1,1-.625,0v-2.3l-.173.1a.3.3,0,0,1-.419-.162A.389.389,0,0,1,300.715,65.844Z",
    transform: "translate(-289.917 -64)",
    fill: "currentColor"
  }), __jsx("path", {
    "data-name": "Path 336",
    d: "M2.919,213.931l-2.545-.588a.284.284,0,0,0-.259.075A.387.387,0,0,0,0,213.7v5.778a.339.339,0,0,0,.313.361H2.271a1,1,0,0,0,.928-.93l.464-3.759A1.08,1.08,0,0,0,2.919,213.931Z",
    transform: "translate(0 -208.28)",
    fill: "currentColor"
  }), __jsx("path", {
    "data-name": "Path 337",
    d: "M138.085,247.5a7.23,7.23,0,0,0-1.64.332.362.362,0,0,0-.235.368c0,.007,0,.014,0,.022a1.747,1.747,0,0,1-.585,1.351,2.141,2.141,0,0,1-1.477.462,11.623,11.623,0,0,1-3.5-.769.38.38,0,0,1-.236-.418.315.315,0,0,1,.4-.281,11.347,11.347,0,0,0,3.339.745,1.552,1.552,0,0,0,1.1-.319.984.984,0,0,0,.334-.772,1.416,1.416,0,0,0-.016-.172c-.118-1-1.254-1.353-2.422-1.627a4.926,4.926,0,0,1-1.335-.569,3.055,3.055,0,0,0-1.539-.521,5.015,5.015,0,0,0-.752.06.353.353,0,0,0-.27.386,1.994,1.994,0,0,1-.009.384l-.464,3.76a.985.985,0,0,1-.02.1l-.017.072a.38.38,0,0,0,.176.416,13.78,13.78,0,0,0,4.481,1.685c1.212,0,3.708-1.418,5.359-2.356.426-.242.779-.443,1.01-.56a.364.364,0,0,0,.193-.321C139.968,248.1,139.195,247.5,138.085,247.5Z",
    transform: "translate(-124.96 -239.191)",
    fill: "currentColor"
  })));
}; // Coupons

const CouponIcon = () => {
  return __jsx("svg", {
    "data-name": "Group 2930",
    xmlns: "http://www.w3.org/2000/svg",
    width: "11.426",
    height: "13",
    viewBox: "0 0 11.426 13"
  }, __jsx("g", null, __jsx("path", {
    "data-name": "Path 3616",
    d: "M116.344,226.9a1.513,1.513,0,0,0-.27.027l-.982-1.113,1.958-2.219a1.526,1.526,0,0,0-.135-2.15l-2.839,3.218,0,0-.632.716h-.769l.386.439-.984,1.115a1.523,1.523,0,1,0,1.222,1.493,1.5,1.5,0,0,0-.085-.478l.862-.977.839.952a1.5,1.5,0,0,0-.093.5,1.523,1.523,0,1,0,1.523-1.523Zm-4.57,2.285a.762.762,0,1,1,.762-.762A.764.764,0,0,1,111.774,229.182Zm4.57,0a.762.762,0,1,1,.762-.762A.764.764,0,0,1,116.344,229.182Zm0,0",
    transform: "translate(-107.965 -216.944)",
    fill: "currentColor"
  }), __jsx("path", {
    "data-name": "Path 3617",
    d: "M4.605,0V1.574H3.844V0H-2.25V7.668H2.884l.96-1.089v-1.2h.762v.335L6.632,3.425l.571.5A2.287,2.287,0,0,1,7.409,7.15l-.457.518H9.176V0ZM1.178,3.479A1.141,1.141,0,0,1,1.559,5.7v.8H.8V5.7A1.139,1.139,0,0,1,.035,4.621H.8a.381.381,0,1,0,.381-.381A1.141,1.141,0,0,1,.8,2.024v-.83h.762v.83A1.139,1.139,0,0,1,2.32,3.1H1.559a.381.381,0,1,0-.381.381ZM4.605,4.621H3.844V3.859h.762Zm0-1.523H3.844V2.336h.762Zm0,0",
    transform: "translate(2.25)",
    fill: "currentColor"
  })));
}; // Settings

const SettingIcon = () => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "13",
    height: "13",
    viewBox: "0 0 13 13"
  }, __jsx("path", {
    "data-name": "005-repairing-service",
    d: "M12.961,5.778a.423.423,0,0,0-.418-.32,1.435,1.435,0,0,1-.982-2.5.361.361,0,0,0,.04-.49,6.435,6.435,0,0,0-1.03-1.04.362.362,0,0,0-.494.04,1.5,1.5,0,0,1-1.621.364A1.444,1.444,0,0,1,7.577.422a.361.361,0,0,0-.319-.38A6.487,6.487,0,0,0,5.8.039a.362.362,0,0,0-.322.372A1.446,1.446,0,0,1,4.584,1.8a1.5,1.5,0,0,1-1.609-.367.362.362,0,0,0-.491-.041,6.462,6.462,0,0,0-1.051,1.04.362.362,0,0,0,.039.494,1.44,1.44,0,0,1,.363,1.622,1.5,1.5,0,0,1-1.414.879.354.354,0,0,0-.376.319,6.516,6.516,0,0,0,0,1.478.43.43,0,0,0,.426.32,1.426,1.426,0,0,1,1.338.891,1.446,1.446,0,0,1-.364,1.607.361.361,0,0,0-.039.49,6.458,6.458,0,0,0,1.028,1.04.361.361,0,0,0,.495-.039,1.5,1.5,0,0,1,1.62-.364,1.442,1.442,0,0,1,.88,1.411.361.361,0,0,0,.319.38,6.472,6.472,0,0,0,1.462,0,.362.362,0,0,0,.322-.372,1.445,1.445,0,0,1,.89-1.386,1.5,1.5,0,0,1,1.61.366.363.363,0,0,0,.491.041,6.47,6.47,0,0,0,1.051-1.04.361.361,0,0,0-.039-.494,1.44,1.44,0,0,1-.364-1.621,1.455,1.455,0,0,1,1.33-.881l.08,0a.362.362,0,0,0,.38-.319A6.487,6.487,0,0,0,12.961,5.778ZM6.5,10.247A3.747,3.747,0,1,1,9.719,8.421L8.078,6.78A2.3,2.3,0,0,0,5.356,3.666a.26.26,0,0,0-.18.181.254.254,0,0,0,.072.248s.81.816,1.081,1.087a.168.168,0,0,1,.024.121l0,.018a5.181,5.181,0,0,1-.123.793l-.017.017-.018.018a5.107,5.107,0,0,1-.805.125v0l-.014,0H5.361a.173.173,0,0,1-.125-.053c-.282-.282-1.06-1.055-1.06-1.055a.265.265,0,0,0-.189-.084.257.257,0,0,0-.242.2A2.3,2.3,0,0,0,6.859,8L8.518,9.657A3.728,3.728,0,0,1,6.5,10.247Z",
    transform: "translate(-0.002 0.001)",
    fill: "currentColor"
  }));
}; // Logout

const LogoutIcon = () => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "15.999",
    height: "13",
    viewBox: "0 0 15.999 13"
  }, __jsx("defs", null, __jsx("filter", {
    x: "4.583",
    y: "1.792",
    width: "11.416",
    height: "10.333",
    filterUnits: "userSpaceOnUse"
  }, __jsx("feGaussianBlur", {
    stdDeviation: "1",
    result: "blur"
  }), __jsx("feFlood", {
    floodOpacity: "0.161"
  }), __jsx("feComposite", {
    operator: "in",
    in2: "blur"
  }), __jsx("feComposite", {
    in: "SourceGraphic"
  }))), __jsx("g", {
    "data-name": "007-logout",
    transform: "translate(0)"
  }, __jsx("g", {
    "data-name": "Group 1075"
  }, __jsx("g", {
    "data-name": "Group 1074",
    transform: "translate(0)"
  }, __jsx("g", {
    transform: "matrix(1, 0, 0, 1, 0, 0)",
    filter: "url(#Path_319)"
  }, __jsx("path", {
    "data-name": "Path 319",
    d: "M304.055,151.3a.547.547,0,0,0-.118-.177l-1.624-1.624a.542.542,0,0,0-.766.766l.7.7h-3.026a.542.542,0,1,0,0,1.083h3.026l-.7.7a.542.542,0,1,0,.766.766l1.624-1.624a.536.536,0,0,0,.118-.177A.542.542,0,0,0,304.055,151.3Z",
    transform: "translate(-291.1 -145.55)",
    fill: "currentColor"
  })), __jsx("path", {
    "data-name": "Path 320",
    d: "M9.222,7.583a.542.542,0,0,0-.542.542v2.708H6.514V2.167a.542.542,0,0,0-.386-.519L4.247,1.083H8.681V3.792a.542.542,0,0,0,1.083,0V.542A.542.542,0,0,0,9.222,0H.556A.483.483,0,0,0,.5.01.535.535,0,0,0,.27.09C.258.1.244.1.232.107S.226.116.222.12A.537.537,0,0,0,.078.291.442.442,0,0,0,.063.336.514.514,0,0,0,.02.463a.337.337,0,0,0,0,.047C.021.521.014.531.014.542V11.375a.541.541,0,0,0,.435.531l5.417,1.083A.5.5,0,0,0,5.972,13a.542.542,0,0,0,.542-.542v-.542H9.222a.542.542,0,0,0,.542-.542V8.125A.542.542,0,0,0,9.222,7.583Z",
    transform: "translate(-0.014)",
    fill: "currentColor"
  })))));
};
const CarretDownIcon = () => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "10",
    height: "5",
    viewBox: "0 0 10 5"
  }, __jsx("path", {
    "data-name": "_ionicons_svg_md-arrow-dropdown (2)",
    d: "M128,192l5,5,5-5Z",
    transform: "translate(-128 -192)",
    fill: "currentColor"
  }));
};
const CarretUpIcon = () => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "10",
    height: "5",
    viewBox: "0 0 10 5"
  }, __jsx("path", {
    "data-name": "_ionicons_svg_md-arrow-dropdown (2)",
    d: "M128,192l5,5,5-5Z",
    transform: "translate(138 197) rotate(180)",
    fill: "currentColor"
  }));
};
const OptionIcon = () => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "3.5",
    height: "14",
    viewBox: "0 0 3.5 14"
  }, __jsx("path", {
    "data-name": "_ionicons_svg_md-more (1)",
    d: "M219.5,97.75a1.75,1.75,0,1,0-1.75,1.75A1.755,1.755,0,0,0,219.5,97.75Zm0,10.5a1.75,1.75,0,1,0-1.75,1.75A1.755,1.755,0,0,0,219.5,108.25Zm0-5.25a1.75,1.75,0,1,0-1.75,1.75A1.755,1.755,0,0,0,219.5,103Z",
    transform: "translate(-216 -96)",
    fill: "currentColor"
  }));
};
const Revenue = ({
  color = 'currentColor',
  width = '56px',
  height = '56px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 56 56"
  }, __jsx("g", {
    "data-name": "Group 2541",
    transform: "translate(-1719 -150)"
  }, __jsx("path", {
    "data-name": "Path 2087",
    d: "M28,0A28,28,0,1,1,0,28,28,28,0,0,1,28,0Z",
    transform: "translate(1719 150)",
    fill: "#00c58d",
    opacity: "0.2"
  }), __jsx("g", {
    "data-name": "Group 2542",
    transform: "translate(1734.867 165.867)"
  }, __jsx("path", {
    "data-name": "Path 2088",
    d: "M3854.718,4669.131a.507.507,0,0,0-.359-.15l-.048,0-8.585.831a.511.511,0,0,0-.31.864l1.58,1.58-12.093,12.093a.507.507,0,0,0,0,.718l3.877,3.877a.511.511,0,0,0,.718,0l2.112-2.111a.508.508,0,0,0,.148-.359.507.507,0,0,0-.867-.358l-1.753,1.752-3.159-3.159,12.093-12.094a.506.506,0,0,0,0-.717l-1.177-1.178,6.9-.668-.667,6.9-1.178-1.177a.506.506,0,0,0-.718,0l-9.166,9.165a.508.508,0,1,0,.719.718l8.806-8.806,1.579,1.579a.5.5,0,0,0,.353.146h0a.507.507,0,0,0,.512-.455l.831-8.585A.5.5,0,0,0,3854.718,4669.131Z",
    transform: "translate(-3830.598 -4668.98)",
    fill: "#00c58d"
  }), __jsx("path", {
    "data-name": "Path 2089",
    d: "M3806.064,5023.59a.51.51,0,0,0-.718,0,.509.509,0,0,0,0,.72l3.877,3.876a.5.5,0,0,0,.359.147h0a.5.5,0,0,0,.386-.177.509.509,0,0,0-.026-.688Z",
    transform: "translate(-3802.428 -5006.836)",
    fill: "#00c58d"
  }), __jsx("path", {
    "data-name": "Path 2090",
    d: "M3776.51,5053.146a.508.508,0,0,0-.867.36.5.5,0,0,0,.149.358l3.877,3.877a.5.5,0,0,0,.358.147h0a.506.506,0,0,0,.359-.865Z",
    transform: "translate(-3774.258 -5035.007)",
    fill: "#00c58d"
  }), __jsx("path", {
    "data-name": "Path 2091",
    d: "M3746.954,5082.7a.508.508,0,1,0-.718.718l3.876,3.876a.5.5,0,0,0,.358.147h0a.506.506,0,0,0,.36-.865Z",
    transform: "translate(-3746.086 -5063.178)",
    fill: "#00c58d"
  }), __jsx("path", {
    "data-name": "Path 2092",
    d: "M4054.57,4973.039a4.424,4.424,0,1,0,4.424,4.424A4.43,4.43,0,0,0,4054.57,4973.039Zm0,7.833a3.409,3.409,0,1,1,3.408-3.409A3.413,3.413,0,0,1,4054.57,4980.873Z",
    transform: "translate(-4035.901 -4958.794)",
    fill: "#00c58d"
  }), __jsx("path", {
    "data-name": "Path 2093",
    d: "M4114.442,5005.083a.522.522,0,0,0,.108.011.508.508,0,0,0,.507-.507v-.255a1.265,1.265,0,0,0-1.017-1.246v-.282a.508.508,0,0,0-1.016,0v.309a1.4,1.4,0,0,0,.38,2.745h.255a.383.383,0,0,1,0,.767h-.382a.257.257,0,0,1-.256-.256.508.508,0,0,0-1.015,0,1.267,1.267,0,0,0,1.018,1.246v.281a.508.508,0,1,0,1.016,0v-.308a1.4,1.4,0,0,0,.4-2.5Zm-.251-.137,0,0a1.388,1.388,0,0,0-.535-.106h-.255a.383.383,0,0,1,0-.767h.381a.256.256,0,0,1,.256.256v.255A.5.5,0,0,0,4114.19,5004.945Z",
    transform: "translate(-4094.863 -4986.681)",
    fill: "#00c58d"
  }), __jsx("path", {
    "data-name": "Path 2094",
    d: "M3770.35,4697.666a4.424,4.424,0,1,0-4.424-4.424A4.428,4.428,0,0,0,3770.35,4697.666Zm0-7.832a3.409,3.409,0,1,1-3.408,3.408A3.412,3.412,0,0,1,3770.35,4689.834Z",
    transform: "translate(-3764.996 -4687.888)",
    fill: "#00c58d"
  }), __jsx("path", {
    "data-name": "Path 2095",
    d: "M3829.184,4721.638h.255a.383.383,0,0,1,0,.767h-.382a.256.256,0,0,1-.256-.256.508.508,0,0,0-1.015,0,1.267,1.267,0,0,0,1.018,1.246v.282a.508.508,0,0,0,1.015,0v-.309a1.4,1.4,0,0,0,.4-2.5.474.474,0,0,0,.108.011.508.508,0,0,0,.508-.508v-.254a1.266,1.266,0,0,0-1.018-1.246v-.282a.508.508,0,0,0-1.016,0v.309a1.4,1.4,0,0,0,.381,2.745Zm.791-.909a1.391,1.391,0,0,0-.536-.107h-.255a.383.383,0,1,1,0-.766h.382a.256.256,0,0,1,.256.256v.254A.5.5,0,0,0,3829.975,4720.729Z",
    transform: "translate(-3823.958 -4715.777)",
    fill: "#00c58d"
  }))));
};
const Refund = ({
  color = 'currentColor',
  width = '56px',
  height = '56px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 56 56"
  }, __jsx("g", {
    "data-name": "Group 2541",
    transform: "translate(-1719 -150)"
  }, __jsx("path", {
    "data-name": "Path 2087",
    d: "M28,0A28,28,0,1,1,0,28,28,28,0,0,1,28,0Z",
    transform: "translate(1719 150)",
    fill: "#2170ff",
    opacity: "0.2"
  }), __jsx("g", {
    "data-name": "Group 2543",
    transform: "translate(1733 164)"
  }, __jsx("g", {
    "data-name": "Group 2544",
    transform: "translate(4.304 4.304)"
  }, __jsx("g", {
    "data-name": "Group 2543",
    transform: "translate(0 0)"
  }, __jsx("path", {
    "data-name": "Path 2096",
    d: "M5368.315,4398.011a9.7,9.7,0,1,1,9.7-9.7A9.708,9.708,0,0,1,5368.315,4398.011Zm0-18.171a8.475,8.475,0,1,0,8.476,8.475A8.484,8.484,0,0,0,5368.315,4379.84Z",
    transform: "translate(-5358.62 -4378.62)",
    fill: "#2170ff"
  }), __jsx("path", {
    "data-name": "Path 2097",
    d: "M5371.153,4381.62a9.534,9.534,0,1,0,9.533,9.533A9.545,9.545,0,0,0,5371.153,4381.62Zm0,18.171a8.638,8.638,0,1,1,8.638-8.638A8.647,8.647,0,0,1,5371.153,4399.791Z",
    transform: "translate(-5361.456 -4381.458)",
    fill: "#2170ff"
  }))), __jsx("g", {
    "data-name": "Group 2546",
    transform: "translate(10.041 8.13)"
  }, __jsx("g", {
    "data-name": "Group 2545",
    transform: "translate(0)"
  }, __jsx("path", {
    "data-name": "Path 2098",
    d: "M5468.736,4461.133a.611.611,0,0,1-.61-.61v-.375c-1.949-.181-3.348-1.2-3.348-2.465a.611.611,0,0,1,1.222,0c0,.5.847,1.09,2.126,1.239v-3.194c-1.642-.465-3.348-1.128-3.348-2.886,0-1.263,1.4-2.284,3.348-2.465V4450a.61.61,0,1,1,1.22,0v.374c1.949.181,3.348,1.2,3.348,2.465a.61.61,0,0,1-1.22,0c0-.495-.848-1.091-2.127-1.238v3.194c1.643.466,3.348,1.126,3.348,2.886,0,1.263-1.4,2.284-3.348,2.465v.375A.61.61,0,0,1,5468.736,4461.133Zm.61-2.21c1.28-.148,2.127-.744,2.127-1.239,0-.7-.562-1.128-2.127-1.611Zm-1.22-7.318c-1.279.147-2.126.743-2.126,1.238,0,.7.562,1.128,2.126,1.611Z",
    transform: "translate(-5464.777 -4449.392)",
    fill: "#2170ff"
  }), __jsx("path", {
    "data-name": "Path 2099",
    d: "M5472.021,4457.758v-3.5c1.465.118,2.452.8,2.452,1.417a.448.448,0,1,0,.9,0c0-1.214-1.438-2.183-3.348-2.314v-.525a.448.448,0,1,0-.9,0v.525c-1.911.131-3.348,1.1-3.348,2.314,0,1.626,1.545,2.26,3.348,2.763v3.495c-1.465-.118-2.452-.8-2.452-1.416a.448.448,0,1,0-.9,0c0,1.213,1.437,2.183,3.348,2.316v.523a.448.448,0,1,0,.9,0v-.523c1.91-.133,3.348-1.1,3.348-2.316C5475.369,4458.895,5473.824,4458.26,5472.021,4457.758Zm-.9-.249c-1.819-.537-2.452-1.026-2.452-1.83,0-.618.987-1.3,2.452-1.417Zm.9,4.428v-3.246c1.818.538,2.452,1.025,2.452,1.83C5474.474,4461.139,5473.486,4461.82,5472.021,4461.937Z",
    transform: "translate(-5467.616 -4452.229)",
    fill: "#2170ff"
  }))), __jsx("g", {
    "data-name": "Group 2548",
    transform: "translate(2.391 0)"
  }, __jsx("g", {
    "data-name": "Group 2547",
    transform: "translate(0)"
  }, __jsx("path", {
    "data-name": "Path 2100",
    d: "M5334.839,4327a.61.61,0,1,1,0-1.221,12.786,12.786,0,1,0-9.167-21.685l.844-.281a.6.6,0,0,1,.194-.031.61.61,0,0,1,.192,1.19l-2.869.956a.626.626,0,0,1-.193.031.61.61,0,0,1-.6-.7l.478-3.348a.613.613,0,0,1,.6-.522.667.667,0,0,1,.087,0,.611.611,0,0,1,.518.691l-.173,1.2A14,14,0,1,1,5334.839,4327Z",
    transform: "translate(-5323.23 -4299)",
    fill: "#2170ff"
  }), __jsx("path", {
    "data-name": "Path 2101",
    d: "M5347.463,4306.052a13.838,13.838,0,0,0-20.106.568l.246-1.718a.449.449,0,0,0-.888-.128l-.478,3.348a.451.451,0,0,0,.443.513.449.449,0,0,0,.144-.025l2.869-.956a.448.448,0,0,0-.284-.851l-1.442.48a12.941,12.941,0,1,1,9.712,21.493.449.449,0,0,0,0,.9,13.838,13.838,0,0,0,9.785-23.623Z",
    transform: "translate(-5326.069 -4301.836)",
    fill: "#2170ff"
  }))), __jsx("g", {
    "data-name": "Group 2550",
    transform: "translate(11.005 26.567)"
  }, __jsx("g", {
    "data-name": "Group 2549",
    transform: "translate(0 0)"
  }, __jsx("path", {
    "data-name": "Path 2102",
    d: "M5483.667,4791.79a.585.585,0,0,1-.087-.006c-.165-.024-.333-.05-.493-.08a.61.61,0,0,1,.106-1.21.563.563,0,0,1,.108.009c.147.025.3.051.451.072a.61.61,0,0,1-.085,1.215Z",
    transform: "translate(-5482.584 -4790.493)",
    fill: "#2170ff"
  }), __jsx("path", {
    "data-name": "Path 2103",
    d: "M5486.569,4793.572c-.153-.021-.307-.045-.457-.073a.448.448,0,1,0-.159.882c.161.03.325.055.487.078a.373.373,0,0,0,.065.006.449.449,0,0,0,.063-.894Z",
    transform: "translate(-5485.422 -4793.329)",
    fill: "#2170ff"
  }))), __jsx("g", {
    "data-name": "Group 2552",
    transform: "translate(8.34 25.795)"
  }, __jsx("g", {
    "data-name": "Group 2551",
    transform: "translate(0 0)"
  }, __jsx("path", {
    "data-name": "Path 2104",
    d: "M5434.763,4777.729a.579.579,0,0,1-.19-.032c-.305-.1-.611-.212-.909-.333a.611.611,0,1,1,.459-1.131c.272.11.552.213.83.305a.611.611,0,0,1-.19,1.191Z",
    transform: "translate(-5433.283 -4776.188)",
    fill: "#2170ff"
  }), __jsx("path", {
    "data-name": "Path 2105",
    d: "M5437.738,4779.53c-.281-.092-.565-.2-.84-.308a.448.448,0,1,0-.339.83c.3.12.6.231.9.331a.449.449,0,0,0,.279-.853Z",
    transform: "translate(-5436.119 -4779.026)",
    fill: "#2170ff"
  }))), __jsx("g", {
    "data-name": "Group 2554",
    transform: "translate(0.141 15.345)"
  }, __jsx("g", {
    "data-name": "Group 2553",
    transform: "translate(0 0)"
  }, __jsx("path", {
    "data-name": "Path 2106",
    d: "M5282.4,4585.042a.614.614,0,0,1-.6-.481c-.069-.312-.126-.634-.174-.952a.613.613,0,0,1,.516-.693.771.771,0,0,1,.089,0,.614.614,0,0,1,.6.521c.042.29.1.583.158.87a.607.607,0,0,1-.082.459.614.614,0,0,1-.384.267A.653.653,0,0,1,5282.4,4585.042Z",
    transform: "translate(-5281.624 -4582.911)",
    fill: "#2170ff"
  }), __jsx("path", {
    "data-name": "Path 2107",
    d: "M5285.676,4587.172c-.062-.29-.116-.586-.16-.88a.448.448,0,0,0-.887.13c.046.314.1.631.17.942a.45.45,0,0,0,.438.354.389.389,0,0,0,.1-.012A.446.446,0,0,0,5285.676,4587.172Z",
    transform: "translate(-5284.462 -4585.747)",
    fill: "#2170ff"
  }))), __jsx("g", {
    "data-name": "Group 2556",
    transform: "translate(0.262 9.839)"
  }, __jsx("g", {
    "data-name": "Group 2555",
    transform: "translate(0 0)"
  }, __jsx("path", {
    "data-name": "Path 2108",
    d: "M5284.464,4483.11a.72.72,0,0,1-.121-.011.611.611,0,0,1-.478-.719c.063-.316.138-.632.223-.943a.614.614,0,0,1,.589-.45.635.635,0,0,1,.161.023.611.611,0,0,1,.428.751c-.077.282-.146.572-.2.86A.611.611,0,0,1,5284.464,4483.11Z",
    transform: "translate(-5283.853 -4480.987)",
    fill: "#2170ff"
  }), __jsx("path", {
    "data-name": "Path 2109",
    d: "M5287.632,4484a.449.449,0,0,0-.552.314c-.083.306-.156.619-.22.931a.448.448,0,0,0,.352.528.461.461,0,0,0,.087.009.452.452,0,0,0,.441-.36c.059-.292.127-.585.206-.87A.45.45,0,0,0,5287.632,4484Z",
    transform: "translate(-5286.689 -4483.826)",
    fill: "#2170ff"
  }))), __jsx("g", {
    "data-name": "Group 2558",
    transform: "translate(0.829 18.034)"
  }, __jsx("g", {
    "data-name": "Group 2557",
    transform: "translate(0 0)"
  }, __jsx("path", {
    "data-name": "Path 2110",
    d: "M5295.269,4634.7a.61.61,0,0,1-.557-.358c-.132-.293-.257-.594-.368-.9a.612.612,0,0,1,.36-.785.6.6,0,0,1,.211-.039.613.613,0,0,1,.573.4c.1.275.215.55.335.818a.611.611,0,0,1-.306.807A.592.592,0,0,1,5295.269,4634.7Z",
    transform: "translate(-5294.306 -4632.626)",
    fill: "#2170ff"
  }), __jsx("path", {
    "data-name": "Path 2111",
    d: "M5298.513,4636.747c-.122-.271-.236-.549-.34-.829a.448.448,0,0,0-.84.311c.11.3.233.6.363.886a.45.45,0,0,0,.409.264.469.469,0,0,0,.185-.04A.447.447,0,0,0,5298.513,4636.747Z",
    transform: "translate(-5297.143 -4635.463)",
    fill: "#2170ff"
  }))), __jsx("g", {
    "data-name": "Group 2560",
    transform: "translate(0 12.575)"
  }, __jsx("g", {
    "data-name": "Group 2559",
    transform: "translate(0)"
  }, __jsx("path", {
    "data-name": "Path 2112",
    d: "M5279.609,4533.781a.612.612,0,0,1-.611-.606c0-.039,0-.077,0-.116,0-.282.01-.569.027-.85a.608.608,0,0,1,.607-.574h.038a.612.612,0,0,1,.573.646c-.015.258-.023.52-.023.778,0,.035,0,.07,0,.107a.612.612,0,0,1-.606.615h0Z",
    transform: "translate(-5278.998 -4531.634)",
    fill: "#2170ff"
  }), __jsx("path", {
    "data-name": "Path 2113",
    d: "M5282.5,4534.634a.449.449,0,0,0-.475.421c-.016.277-.025.561-.025.84v.117a.448.448,0,0,0,.449.443h0a.45.45,0,0,0,.446-.451v-.108c0-.262.006-.526.022-.787A.447.447,0,0,0,5282.5,4534.634Z",
    transform: "translate(-5281.836 -4534.47)",
    fill: "#2170ff"
  }))), __jsx("g", {
    "data-name": "Group 2562",
    transform: "translate(5.893 24.485)"
  }, __jsx("g", {
    "data-name": "Group 2561",
    transform: "translate(0 0)"
  }, __jsx("path", {
    "data-name": "Path 2114",
    d: "M5389.413,4753.693a.618.618,0,0,1-.306-.083c-.28-.161-.556-.335-.82-.515a.61.61,0,1,1,.685-1.011c.243.165.5.323.748.47a.612.612,0,0,1,.223.834A.615.615,0,0,1,5389.413,4753.693Z",
    transform: "translate(-5388.019 -4751.979)",
    fill: "#2170ff"
  }), __jsx("path", {
    "data-name": "Path 2115",
    d: "M5392.479,4755.533c-.257-.149-.512-.309-.759-.476a.449.449,0,0,0-.5.743c.264.178.537.348.811.509a.454.454,0,0,0,.225.061.449.449,0,0,0,.226-.836Z",
    transform: "translate(-5390.858 -4754.817)",
    fill: "#2170ff"
  }))), __jsx("g", {
    "data-name": "Group 2564",
    transform: "translate(2.054 20.521)"
  }, __jsx("g", {
    "data-name": "Group 2563",
    transform: "translate(0 0)"
  }, __jsx("path", {
    "data-name": "Path 2116",
    d: "M5318.141,4680.616a.613.613,0,0,1-.493-.25c-.19-.26-.375-.529-.544-.8a.61.61,0,1,1,1.032-.65c.158.248.324.494.5.731a.611.611,0,0,1-.493.971Z",
    transform: "translate(-5317.009 -4678.629)",
    fill: "#2170ff"
  }), __jsx("path", {
    "data-name": "Path 2117",
    d: "M5321.343,4682.579c-.175-.239-.344-.489-.5-.74a.448.448,0,1,0-.758.479c.169.27.35.535.537.792a.449.449,0,0,0,.724-.53Z",
    transform: "translate(-5319.85 -4681.467)",
    fill: "#2170ff"
  }))), __jsx("g", {
    "data-name": "Group 2566",
    transform: "translate(3.769 22.7)"
  }, __jsx("g", {
    "data-name": "Group 2565",
    transform: "translate(0 0)"
  }, __jsx("path", {
    "data-name": "Path 2118",
    d: "M5350,4720.845a.609.609,0,0,1-.408-.156c-.238-.216-.473-.442-.7-.673a.61.61,0,0,1,.877-.849c.205.211.419.417.637.614a.61.61,0,0,1-.408,1.064Z",
    transform: "translate(-5348.718 -4718.981)",
    fill: "#2170ff"
  }), __jsx("path", {
    "data-name": "Path 2119",
    d: "M5353.132,4722.74c-.221-.2-.437-.408-.644-.623a.448.448,0,1,0-.644.625c.221.228.453.452.688.664a.443.443,0,0,0,.3.116.449.449,0,0,0,.3-.782Z",
    transform: "translate(-5351.555 -4721.819)",
    fill: "#2170ff"
  }))), __jsx("g", {
    "data-name": "Group 2568",
    transform: "translate(1.091 7.652)"
  }, __jsx("g", {
    "data-name": "Group 2567",
    transform: "translate(0)"
  }, __jsx("path", {
    "data-name": "Path 2120",
    d: "M5299.792,4442.2a.61.61,0,0,1-.566-.385.609.609,0,0,1,.005-.466c.067-.153.136-.308.208-.457a.616.616,0,0,1,.552-.348.607.607,0,0,1,.261.058.614.614,0,0,1,.29.814c-.066.136-.128.276-.19.415A.608.608,0,0,1,5299.792,4442.2Z",
    transform: "translate(-5299.182 -4440.542)",
    fill: "#2170ff"
  }), __jsx("path", {
    "data-name": "Path 2121",
    d: "M5303.023,4443.585a.449.449,0,0,0-.6.212c-.07.148-.139.3-.2.45a.449.449,0,0,0,.824.356c.061-.141.125-.282.191-.421A.45.45,0,0,0,5303.023,4443.585Z",
    transform: "translate(-5302.022 -4443.379)",
    fill: "#2170ff"
  }))))));
};
const ArrowUp = ({
  color = 'currentColor',
  width = '12px',
  height = '12px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 11.996 12"
  }, __jsx("path", {
    "data-name": "Path 2462",
    d: "M18.276,12.1,12.7,6.524a.424.424,0,0,0-.6,0L6.524,12.1a.424.424,0,0,0,0,.6.424.424,0,0,0,.6,0l4.854-4.854V17.977a.423.423,0,1,0,.847,0V7.846L17.677,12.7a.424.424,0,0,0,.6,0A.434.434,0,0,0,18.276,12.1Z",
    transform: "translate(-6.4 -6.4)",
    fill: color
  }));
};
const ArrowDown = ({
  color = 'currentColor',
  width = '12px',
  height = '12px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 11.996 12"
  }, __jsx("path", {
    "data-name": "Path 2462",
    d: "M18.276,12.1,12.7,6.524a.424.424,0,0,0-.6,0L6.524,12.1a.424.424,0,0,0,0,.6.424.424,0,0,0,.6,0l4.854-4.854V17.977a.423.423,0,1,0,.847,0V7.846L17.677,12.7a.424.424,0,0,0,.6,0A.434.434,0,0,0,18.276,12.1Z",
    transform: "translate(18.396 18.4) rotate(180)",
    fill: color
  }));
};
const UploadIcon = ({
  color = 'currentColor',
  width = '41px',
  height = '30px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 40.909 30"
  }, __jsx("g", {
    transform: "translate(0 -73.091)"
  }, __jsx("path", {
    "data-name": "Path 2125",
    d: "M39.129,89.827A8.064,8.064,0,0,0,34.58,86.94,5.446,5.446,0,0,0,30,78.546a5.207,5.207,0,0,0-3.537,1.321,10.921,10.921,0,0,0-10.1-6.776,10.511,10.511,0,0,0-7.713,3.2A10.508,10.508,0,0,0,5.454,84q0,.277.043.916A9.528,9.528,0,0,0,0,93.546a9.193,9.193,0,0,0,2.8,6.743,9.191,9.191,0,0,0,6.744,2.8H32.728a8.172,8.172,0,0,0,6.4-13.264Zm-12.06-.575a.656.656,0,0,1-.479.2H21.818v7.5a.691.691,0,0,1-.681.681H17.045a.691.691,0,0,1-.682-.681v-7.5H11.59a.655.655,0,0,1-.681-.681.8.8,0,0,1,.213-.512L18.6,80.783a.722.722,0,0,1,.98,0l7.5,7.5a.663.663,0,0,1,.191.49A.656.656,0,0,1,27.07,89.252Z",
    transform: "translate(0)",
    fill: "#e6e6e6"
  })));
};
const SiteSettings = ({
  color = 'currentColor',
  width = '56px',
  height = '56px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 56 56"
  }, __jsx("g", {
    transform: "translate(-0.001)"
  }, __jsx("g", {
    "data-name": "Group 2845",
    transform: "translate(0.001)"
  }, __jsx("g", {
    "data-name": "Group 2844"
  }, __jsx("path", {
    "data-name": "Path 2442",
    d: "M20.211,11.444l-1.1-.95v-.456l1.1-.95a.935.935,0,0,0,.3-.9,10.074,10.074,0,0,0-.727-2.166.933.933,0,0,0-.762-.537l-1.438-.131q-.146-.211-.3-.41l.31-1.355a.935.935,0,0,0-.287-.9,10.539,10.539,0,0,0-1.877-1.344.934.934,0,0,0-.924.007l-1.237.718c-.167-.057-.338-.111-.516-.16L12.183.567A.934.934,0,0,0,11.324,0H9.212a.933.933,0,0,0-.859.567L7.782,1.909c-.178.049-.349.1-.516.16L6.029,1.351A.938.938,0,0,0,5.1,1.343,10.575,10.575,0,0,0,3.228,2.687a.933.933,0,0,0-.287.9l.31,1.354c-.1.133-.206.271-.3.411L1.51,5.488a.933.933,0,0,0-.762.537A10.066,10.066,0,0,0,.021,8.191a.934.934,0,0,0,.3.9l1.1.95v.456l-1.1.95a.935.935,0,0,0-.3.9,10.074,10.074,0,0,0,.727,2.166.933.933,0,0,0,.762.537l1.438.131q.146.211.3.41l-.31,1.355a.933.933,0,0,0,.287.9A10.455,10.455,0,0,0,5.1,19.189a.931.931,0,0,0,.923-.007l1.238-.717c.167.057.338.111.516.16l.571,1.342a.934.934,0,0,0,.859.567h2.113a.933.933,0,0,0,.859-.567l.571-1.342c.178-.049.349-.1.516-.16l1.237.718a.936.936,0,0,0,1.012-.048l1.71-1.224a.934.934,0,0,0,.366-.968l-.31-1.354c.1-.133.206-.271.3-.411l1.438-.131a.933.933,0,0,0,.762-.537,10.072,10.072,0,0,0,.727-2.166A.935.935,0,0,0,20.211,11.444Zm-2.646.185.994.855q-.107.376-.256.753l-1.333.121a.935.935,0,0,0-.709.439,6.84,6.84,0,0,1-.688.931.933.933,0,0,0-.21.827l.274,1.2-.714.511-1.1-.638A.939.939,0,0,0,13,16.572a6.962,6.962,0,0,1-1.127.352.933.933,0,0,0-.651.544l-.511,1.2h-.88l-.511-1.2a.929.929,0,0,0-.651-.544,6.989,6.989,0,0,1-1.127-.352.932.932,0,0,0-.826.055l-1.146.664q-.349-.224-.68-.486l.286-1.25a.934.934,0,0,0-.209-.826,6.863,6.863,0,0,1-.689-.931.935.935,0,0,0-.709-.439l-1.333-.121q-.148-.377-.256-.753l.994-.855a.935.935,0,0,0,.324-.707V9.611A.935.935,0,0,0,2.971,8.9l-.994-.856q.107-.375.256-.752l1.332-.121a.935.935,0,0,0,.709-.439A6.839,6.839,0,0,1,4.963,5.8a.933.933,0,0,0,.21-.827l-.286-1.25q.33-.261.681-.487l1.145.664a.942.942,0,0,0,.826.055,6.962,6.962,0,0,1,1.127-.352.933.933,0,0,0,.651-.544l.511-1.2h.88l.511,1.2a.929.929,0,0,0,.651.544A6.977,6.977,0,0,1,13,3.961a.936.936,0,0,0,.826-.055l1.145-.664q.35.226.681.487l-.286,1.25a.934.934,0,0,0,.209.826,6.864,6.864,0,0,1,.689.931.935.935,0,0,0,.709.439L18.3,7.3q.148.377.256.753l-.994.855a.935.935,0,0,0-.324.707v1.311A.935.935,0,0,0,17.565,11.629Z",
    transform: "translate(-0.001)",
    fill: color
  }))), __jsx("g", {
    "data-name": "Group 2847",
    transform: "translate(5.601 5.6)"
  }, __jsx("g", {
    "data-name": "Group 2846"
  }, __jsx("path", {
    "data-name": "Path 2443",
    d: "M52.669,48a4.667,4.667,0,1,0,4.667,4.667A4.667,4.667,0,0,0,52.669,48Zm0,7.467a2.8,2.8,0,1,1,2.8-2.8A2.8,2.8,0,0,1,52.669,55.467Z",
    transform: "translate(-48.002 -48)",
    fill: color
  }))), __jsx("g", {
    "data-name": "Group 2849",
    transform: "translate(1.868 46.667)"
  }, __jsx("g", {
    "data-name": "Group 2848"
  }, __jsx("path", {
    "data-name": "Path 2444",
    d: "M24.4,400H16.935a.933.933,0,0,0-.933.933h0V408.4a.933.933,0,0,0,.933.933H24.4a.933.933,0,0,0,.933-.933h0v-7.467A.933.933,0,0,0,24.4,400Zm-.934,7.467h-5.6v-5.6h5.6Z",
    transform: "translate(-16.002 -400)",
    fill: color
  }))), __jsx("g", {
    "data-name": "Group 2851",
    transform: "translate(15.868 43.867)"
  }, __jsx("g", {
    "data-name": "Group 2850"
  }, __jsx("path", {
    "data-name": "Path 2445",
    d: "M144.4,376h-7.467a.933.933,0,0,0-.933.933h0V387.2a.933.933,0,0,0,.933.933H144.4a.933.933,0,0,0,.933-.933h0V376.933A.933.933,0,0,0,144.4,376Zm-.934,10.267h-5.6v-8.4h5.6Z",
    transform: "translate(-136.002 -376)",
    fill: color
  }))), __jsx("g", {
    "data-name": "Group 2853",
    transform: "translate(29.868 40.133)"
  }, __jsx("g", {
    "data-name": "Group 2852"
  }, __jsx("path", {
    "data-name": "Path 2446",
    d: "M264.4,344h-7.467a.933.933,0,0,0-.933.933h0v14a.933.933,0,0,0,.933.933H264.4a.933.933,0,0,0,.933-.933h0v-14A.933.933,0,0,0,264.4,344Zm-.934,14h-5.6V345.867h5.6Z",
    transform: "translate(-256.002 -344)",
    fill: color
  }))), __jsx("g", {
    "data-name": "Group 2855",
    transform: "translate(43.868 31.733)"
  }, __jsx("g", {
    "data-name": "Group 2854"
  }, __jsx("path", {
    "data-name": "Path 2447",
    d: "M384.4,272h-7.467a.933.933,0,0,0-.933.933h0v22.4a.933.933,0,0,0,.933.933H384.4a.933.933,0,0,0,.933-.933h0v-22.4A.933.933,0,0,0,384.4,272Zm-.934,22.4h-5.6V273.867h5.6Z",
    transform: "translate(-376.002 -272)",
    fill: color
  }))), __jsx("g", {
    "data-name": "Group 2857",
    transform: "translate(1.356 18.702)"
  }, __jsx("g", {
    "data-name": "Group 2856"
  }, __jsx("path", {
    "data-name": "Path 2448",
    d: "M42.263,162.177l-.017-.005-6.533-1.867-.513,1.8,4.574,1.307L11.611,181.889l1.024,1.56,27.7-18.179L38.8,170.262l1.784.549,2.3-7.467A.934.934,0,0,0,42.263,162.177Z",
    transform: "translate(-11.611 -160.305)",
    fill: color
  }))), __jsx("g", {
    "data-name": "Group 2859",
    transform: "translate(36.401 3.733)"
  }, __jsx("g", {
    "data-name": "Group 2858"
  }, __jsx("path", {
    "data-name": "Path 2449",
    d: "M326.654,37.255a.933.933,0,0,0-.511-.255l-4.022-.615-1.807-3.85a.933.933,0,0,0-1.69,0l-1.807,3.85L312.794,37a.933.933,0,0,0-.527,1.574l2.938,3.011-.695,4.263a.933.933,0,0,0,1.373.967l3.586-1.982,3.586,1.982a.933.933,0,0,0,1.373-.967l-.695-4.263,2.938-3.011A.933.933,0,0,0,326.654,37.255Zm-4.587,3.364a.932.932,0,0,0-.253.8l.462,2.831-2.356-1.3a.933.933,0,0,0-.9,0l-2.356,1.3.462-2.831a.932.932,0,0,0-.253-.8l-2-2.048,2.719-.416a.931.931,0,0,0,.7-.526l1.174-2.5,1.174,2.5a.932.932,0,0,0,.7.526l2.719.416Z",
    transform: "translate(-312.002 -31.998)",
    fill: color
  }))), __jsx("g", {
    "data-name": "Group 2861",
    transform: "translate(41.774 22.245)"
  }, __jsx("g", {
    "data-name": "Group 2860"
  }, __jsx("path", {
    "data-name": "Path 2450",
    d: "M361.942,190.672a10.25,10.25,0,0,1-1.778.155h-.014a10.286,10.286,0,0,1-1.773-.153l-.321,1.839a18.6,18.6,0,0,0,2.109.18,12.1,12.1,0,0,0,2.1-.184Z",
    transform: "translate(-358.057 -190.672)",
    fill: color
  }))), __jsx("g", {
    "data-name": "Group 2863",
    transform: "translate(45.621 0.176)"
  }, __jsx("g", {
    "data-name": "Group 2862"
  }, __jsx("path", {
    "data-name": "Path 2451",
    d: "M391.342,1.508l-.316,1.839a10.177,10.177,0,0,1,3.351,1.208l.929-1.619A12.016,12.016,0,0,0,391.342,1.508Z",
    transform: "translate(-391.026 -1.508)",
    fill: color
  }))), __jsx("g", {
    "data-name": "Group 2865",
    transform: "translate(37.772 0.187)"
  }, __jsx("g", {
    "data-name": "Group 2864"
  }, __jsx("path", {
    "data-name": "Path 2452",
    d: "M327.708,1.6a12.054,12.054,0,0,0-3.955,1.453l.94,1.613a10.191,10.191,0,0,1,3.344-1.229Z",
    transform: "translate(-323.753 -1.602)",
    fill: color
  }))), __jsx("g", {
    "data-name": "Group 2867",
    transform: "translate(49.006 18.729)"
  }, __jsx("g", {
    "data-name": "Group 2866"
  }, __jsx("path", {
    "data-name": "Path 2453",
    d: "M422.772,160.531a10.3,10.3,0,0,1-2.73,2.294l.936,1.615a12.15,12.15,0,0,0,3.223-2.708Z",
    transform: "translate(-420.042 -160.531)",
    fill: color
  }))), __jsx("g", {
    "data-name": "Group 2869",
    transform: "translate(53.519 12.099)"
  }, __jsx("g", {
    "data-name": "Group 2868"
  }, __jsx("path", {
    "data-name": "Path 2454",
    d: "M460.795,103.7l-1.454.035a10.241,10.241,0,0,1-.616,3.512l1.755.638a12.138,12.138,0,0,0,.727-4.177Z",
    transform: "translate(-458.725 -103.703)",
    fill: color
  }))), __jsx("g", {
    "data-name": "Group 2871",
    transform: "translate(51.711 4.302)"
  }, __jsx("g", {
    "data-name": "Group 2870"
  }, __jsx("path", {
    "data-name": "Path 2455",
    d: "M444.65,36.875l-1.425,1.2a10.223,10.223,0,0,1,1.794,3.078l1.752-.645A12.071,12.071,0,0,0,444.65,36.875Z",
    transform: "translate(-443.225 -36.875)",
    fill: color
  }))), __jsx("g", {
    "data-name": "Group 2873",
    transform: "translate(32.455 4.355)"
  }, __jsx("g", {
    "data-name": "Group 2872"
  }, __jsx("path", {
    "data-name": "Path 2456",
    d: "M280.274,37.328a12.093,12.093,0,0,0-2.1,3.652l1.755.634a10.223,10.223,0,0,1,1.777-3.089Z",
    transform: "translate(-278.174 -37.328)",
    fill: color
  }))), __jsx("g", {
    "data-name": "Group 2875",
    transform: "translate(34.585 18.743)"
  }, __jsx("g", {
    "data-name": "Group 2874"
  }, __jsx("path", {
    "data-name": "Path 2457",
    d: "M297.859,160.656l-1.427,1.2a12.154,12.154,0,0,0,3.228,2.7l.933-1.617A10.286,10.286,0,0,1,297.859,160.656Z",
    transform: "translate(-296.432 -160.656)",
    fill: color
  }))), __jsx("g", {
    "data-name": "Group 2877",
    transform: "translate(31.735 12.154)"
  }, __jsx("g", {
    "data-name": "Group 2876"
  }, __jsx("path", {
    "data-name": "Path 2458",
    d: "M273.873,104.18l-1.867,0a12.084,12.084,0,0,0,.736,4.147l1.753-.642A10.227,10.227,0,0,1,273.873,104.18Z",
    transform: "translate(-272.006 -104.18)",
    fill: color
  })))));
};
const Members = ({
  color = 'currentColor',
  width = '56px',
  height = '56px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 56 56"
  }, __jsx("path", {
    "data-name": "Path 2434",
    d: "M56,21.656a4.49,4.49,0,0,0-3.218-4.326l-5.814-1.743V14.215a6.344,6.344,0,0,0,2.71-5.183V6.323a6.323,6.323,0,1,0-12.645,0v2.71a6.343,6.343,0,0,0,2.71,5.183v1.371l-4.065,1.219-4.065-1.219V14.215a6.344,6.344,0,0,0,2.71-5.183V6.323a6.323,6.323,0,1,0-12.645,0v2.71a6.343,6.343,0,0,0,2.71,5.183v1.371l-4.065,1.219-4.065-1.219V14.215a6.344,6.344,0,0,0,2.71-5.183V6.323a6.323,6.323,0,0,0-12.645,0v2.71a6.343,6.343,0,0,0,2.71,5.183v1.371L3.218,17.331A4.488,4.488,0,0,0,0,21.656v8.151H4.516V40.646H15.355v8.129H9.032V56H23.484V48.775H17.161V40.646h2.71V41.3l1.169.39a7.079,7.079,0,0,0,.665,1.6l-.552,1.1,2.2,2.2,1.1-.552a7.117,7.117,0,0,0,1.6.664l.39,1.169h3.109l.389-1.17a7.126,7.126,0,0,0,1.6-.664l1.1.552,2.2-2.2-.552-1.1a7.187,7.187,0,0,0,.665-1.6l1.17-.389v-.651h2.71v8.129H32.516V56H46.968V48.775H40.645V40.646H51.484V29.807H56ZM21.677,54.194H10.839V50.581H21.677Zm23.484,0H34.323V50.581H45.161ZM43.355,1.807A4.525,4.525,0,0,1,47.78,5.42H45.374a7.688,7.688,0,0,1-3.422-.808l-.583-.291-.46.46a2.192,2.192,0,0,1-1.541.639H38.93a4.525,4.525,0,0,1,4.425-3.613ZM38.839,9.033V7.226h.529a3.955,3.955,0,0,0,2.324-.747,9.5,9.5,0,0,0,3.682.747h2.5V9.033a4.534,4.534,0,0,1-2.259,3.908l-.451.261v2.574l-1.806,1.2-1.806-1.2V13.2L41.1,12.94a4.533,4.533,0,0,1-2.259-3.908ZM28,1.807A4.525,4.525,0,0,1,32.425,5.42H30.019A7.688,7.688,0,0,1,26.6,4.611l-.583-.291-.46.46a2.192,2.192,0,0,1-1.541.639h-.438A4.525,4.525,0,0,1,28,1.807ZM23.484,9.033V7.226h.529a3.955,3.955,0,0,0,2.324-.747,9.5,9.5,0,0,0,3.682.747h2.5V9.033a4.534,4.534,0,0,1-2.259,3.908l-.451.261v2.574L28,16.979l-1.806-1.2V13.2l-.451-.261a4.533,4.533,0,0,1-2.259-3.908Zm1.659,8.213L28,19.151l2.857-1.905,6.05,1.815a2.693,2.693,0,0,1,1.931,2.6V28H17.161V21.656a2.693,2.693,0,0,1,1.931-2.6ZM12.645,1.807A4.525,4.525,0,0,1,17.07,5.42h-.438a2.2,2.2,0,0,1-1.542-.639l-.461-.46-.583.291a7.679,7.679,0,0,1-3.421.808H8.22a4.525,4.525,0,0,1,4.425-3.613ZM8.129,9.033V7.226h2.5a9.5,9.5,0,0,0,3.682-.747,3.957,3.957,0,0,0,2.324.747h.529V9.033A4.533,4.533,0,0,1,14.9,12.94l-.451.261v2.574l-1.806,1.2-1.806-1.2V13.2l-.451-.261A4.533,4.533,0,0,1,8.129,9.033ZM1.806,21.656a2.693,2.693,0,0,1,1.931-2.6l6.05-1.816,2.857,1.906L15.5,17.246l1.975.593a4.474,4.474,0,0,0-2.123,3.818V28H1.806ZM34.323,39.994l-.907.3-.1.514a5.365,5.365,0,0,1-.8,1.932l-.291.436.428.856-.357.358-.855-.429L31,44.253a5.359,5.359,0,0,1-1.932.8l-.514.1-.3.909h-.5l-.3-.908-.514-.1a5.349,5.349,0,0,1-1.932-.8l-.437-.291-.855.429-.357-.358.428-.856-.291-.436a5.343,5.343,0,0,1-.8-1.932l-.1-.514-.907-.3v-.5l.907-.3.1-.514a5.352,5.352,0,0,1,.8-1.932l.291-.436-.428-.857.357-.357.855.429L25,35.231a5.359,5.359,0,0,1,1.932-.8l.514-.1.3-.908h.5l.3.908.514.1a5.349,5.349,0,0,1,1.932.8l.437.291.855-.429.357.357-.428.857.291.436a5.33,5.33,0,0,1,.8,1.932l.1.514.907.3Zm15.355-1.155H36.129v-.651L34.96,37.8a7.063,7.063,0,0,0-.665-1.6l.552-1.1-2.2-2.2-1.1.552a7.117,7.117,0,0,0-1.6-.664l-.39-1.169H26.445l-.389,1.17a7.125,7.125,0,0,0-1.6.664l-1.1-.552-2.2,2.2.552,1.1a7.169,7.169,0,0,0-.665,1.6l-1.17.389v.651H6.323V29.807H49.677ZM54.194,28H40.645V21.656a4.474,4.474,0,0,0-2.123-3.818l1.975-.593,2.857,1.905,2.857-1.905,6.05,1.815a2.693,2.693,0,0,1,1.931,2.6Zm0,0",
    transform: "translate(0 0)",
    fill: color
  }));
};
const MenuIcon = ({
  color = 'currentColor',
  width = '26px',
  height = '18px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 25.5 18"
  }, __jsx("g", {
    transform: "translate(-2 -6)"
  }, __jsx("path", {
    "data-name": "Path 216",
    d: "M26.589,6H2.911A.842.842,0,0,0,2,6.75a.842.842,0,0,0,.911.75H26.589a.842.842,0,0,0,.911-.75A.842.842,0,0,0,26.589,6Z",
    fill: color
  }), __jsx("path", {
    "data-name": "Path 217",
    d: "M2.75,16.5H12.5a.75.75,0,0,0,0-1.5H2.75a.75.75,0,0,0,0,1.5Z",
    transform: "translate(0 -0.75)",
    fill: color
  }), __jsx("path", {
    "data-name": "Path 218",
    d: "M23.562,24H2.938a.769.769,0,1,0,0,1.5H23.562a.769.769,0,1,0,0-1.5Z",
    transform: "translate(0 -1.5)",
    fill: color
  })));
};
const ArrowLeftRound = ({
  color = 'currentColor',
  width = '18px',
  height = '14px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 18 14.4"
  }, __jsx("path", {
    "data-name": "_ionicons_svg_ios-arrow-round-back (2)",
    d: "M119.925,160.3a.98.98,0,0,1,.007,1.38l-4.554,4.567h13.754a.975.975,0,0,1,0,1.95H115.379l4.562,4.567a.987.987,0,0,1-.008,1.38.972.972,0,0,1-1.373-.008l-6.182-6.225a1.1,1.1,0,0,1-.2-.307.93.93,0,0,1-.075-.375.977.977,0,0,1,.278-.682l6.182-6.225A.956.956,0,0,1,119.925,160.3Z",
    transform: "translate(-112.1 -160.024)",
    fill: color
  }));
};
const CoinIcon = ({
  width = '48px',
  height = '48px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 48 48"
  }, __jsx("g", {
    "data-name": "Group 2993",
    transform: "translate(-608 -807)"
  }, __jsx("path", {
    "data-name": "Path 3646",
    d: "M20,0h8A20,20,0,0,1,48,20v8A20,20,0,0,1,28,48H20A20,20,0,0,1,0,28V20A20,20,0,0,1,20,0Z",
    transform: "translate(608 807)",
    fill: "#ffe8b2"
  }), __jsx("g", {
    transform: "translate(620 819)"
  }, __jsx("g", {
    "data-name": "Group 2982",
    transform: "translate(0)"
  }, __jsx("g", {
    "data-name": "Group 2981"
  }, __jsx("path", {
    "data-name": "Path 3639",
    d: "M20.485,3.515A12,12,0,0,0,3.515,20.485,12,12,0,0,0,20.485,3.515ZM12,22.594A10.594,10.594,0,1,1,22.594,12,10.606,10.606,0,0,1,12,22.594Z",
    transform: "translate(0 0)",
    fill: "#ffb300"
  }))), __jsx("g", {
    "data-name": "Group 2984",
    transform: "translate(8.284 4.519)"
  }, __jsx("g", {
    "data-name": "Group 2983"
  }, __jsx("path", {
    "data-name": "Path 3640",
    d: "M181.2,103.179H179.7a1.556,1.556,0,1,1,0-3.112h3.013a.7.7,0,1,0,0-1.406h-1.556V97.1a.7.7,0,0,0-1.406,0V98.66h-.05a2.962,2.962,0,1,0,0,5.925H181.2a1.556,1.556,0,0,1,0,3.113H178.19a.7.7,0,0,0,0,1.406h1.556v1.556a.7.7,0,0,0,1.406,0V109.1h.05a2.963,2.963,0,0,0,0-5.925Z",
    transform: "translate(-176.734 -96.401)",
    fill: "#ffb300"
  }))))));
};
const CartIconBig = ({
  width = '48px',
  height = '48px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 48 48"
  }, __jsx("g", {
    "data-name": "Group 2994",
    transform: "translate(-601 -757)"
  }, __jsx("rect", {
    "data-name": "Rectangle 541",
    width: "48",
    height: "48",
    rx: "20",
    transform: "translate(601 757)",
    fill: "#facaca"
  }), __jsx("g", {
    transform: "translate(610.988 768.246)"
  }, __jsx("g", {
    "data-name": "Group 2985",
    transform: "translate(3.013 0.754)"
  }, __jsx("path", {
    "data-name": "Path 3641",
    d: "M6.071,15.424H23.177a.726.726,0,0,0,.724-.674l.778-10.885a.726.726,0,0,0-.724-.778h-8.6V1.48a.726.726,0,1,0-1.452,0V3.087H5.832c-.051-.618-2.058-.416-.7-.077-.113-.517-.571-.277-.71,0L5.29,14.073a3.058,3.058,0,0,0,.78,6.016h.121a3.058,3.058,0,1,0,5.2,0h6.849a3.059,3.059,0,1,0,5.175-.042.726.726,0,0,0-.241-1.41H6.071a1.607,1.607,0,0,1,0-3.213ZM13.9,4.539V9.058L12.8,7.964a.726.726,0,0,0-1.027,1.027l2.333,2.333a.726.726,0,0,0,1.027,0L17.47,8.991a.726.726,0,0,0-1.027-1.027L15.35,9.058V4.539h7.825L22.5,13.972H6.739L5.953,4.539Zm6.946,15.55A1.607,1.607,0,1,1,19.237,21.7,1.608,1.608,0,0,1,20.844,20.089Zm-12.051,0A1.607,1.607,0,1,1,7.186,21.7,1.608,1.608,0,0,1,8.792,20.089Z",
    transform: "translate(-3.013 -0.754)",
    fill: "#ff6e6e"
  })))));
};
const UserIcon = ({
  width = '48px',
  height = '48px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 48 48"
  }, __jsx("g", {
    "data-name": "Group 2995",
    transform: "translate(-612 -752)"
  }, __jsx("path", {
    "data-name": "Path 3647",
    d: "M20,0h8A20,20,0,0,1,48,20v8A20,20,0,0,1,28,48H20A20,20,0,0,1,0,28V20A20,20,0,0,1,20,0Z",
    transform: "translate(612 752)",
    fill: "#d1f9f5"
  }), __jsx("path", {
    "data-name": "Path 3642",
    d: "M-707.226-726.091a.506.506,0,0,1-.23.677.506.506,0,0,1-.677-.23,11.921,11.921,0,0,1-.919-2.574,12.016,12.016,0,0,1-.311-2.719,11.963,11.963,0,0,1,3.515-8.485,11.962,11.962,0,0,1,8.485-3.515,11.962,11.962,0,0,1,8.485,3.515,11.963,11.963,0,0,1,3.515,8.485,12.016,12.016,0,0,1-.311,2.719,11.929,11.929,0,0,1-.919,2.574.506.506,0,0,1-.677.23.506.506,0,0,1-.23-.677,10.888,10.888,0,0,0,.84-2.352,11.01,11.01,0,0,0,.283-2.493A10.952,10.952,0,0,0-689.6-738.7a10.952,10.952,0,0,0-7.768-3.218,10.952,10.952,0,0,0-7.768,3.218,10.952,10.952,0,0,0-3.218,7.768,11.017,11.017,0,0,0,.283,2.493,10.9,10.9,0,0,0,.84,2.352Zm19.154,2.746a12.05,12.05,0,0,1-4.152,3.254,11.947,11.947,0,0,1-5.139,1.155,11.947,11.947,0,0,1-5.139-1.155,12.051,12.051,0,0,1-4.16-3.264.5.5,0,0,1-.109-.386h0a3.522,3.522,0,0,1,1.1-2.245,6.632,6.632,0,0,1,2.253-1.223c.4-.146.832-.281,1.256-.412a11.4,11.4,0,0,0,1.621-.582l.064-.035a.85.85,0,0,0,.408-.456.62.62,0,0,0-.045-.475l-.01-.021-.009-.016-.014-.026c-.067-.114-.163-.254-.267-.406a6.317,6.317,0,0,1-.928-1.8,1.354,1.354,0,0,1-.656-.588,3.944,3.944,0,0,1-.424-1.009,3.77,3.77,0,0,1-.116-.57c0-.005,0-.01,0-.016a1.387,1.387,0,0,1,0-.268.947.947,0,0,1,.3-.627.989.989,0,0,1,.43-.23l-.015-.432a4.265,4.265,0,0,1,2.5-4.277,4.8,4.8,0,0,1,1.967-.414,4.8,4.8,0,0,1,1.967.415,4.264,4.264,0,0,1,2.5,4.277v0h0l-.015.43a.987.987,0,0,1,.431.231.947.947,0,0,1,.295.625,1.409,1.409,0,0,1,0,.285l0,.016a3.824,3.824,0,0,1-.114.558,3.921,3.921,0,0,1-.423,1.007,1.353,1.353,0,0,1-.656.587,6.321,6.321,0,0,1-.929,1.8c-.11.162-.212.312-.279.428l-.018.035a.626.626,0,0,0-.045.479.85.85,0,0,0,.409.457l.064.033a11.415,11.415,0,0,0,1.625.584c.423.131.857.265,1.252.41a6.631,6.631,0,0,1,2.253,1.223,3.521,3.521,0,0,1,1.1,2.245.5.5,0,0,1-.117.4Zm-4.583,2.339a11.025,11.025,0,0,0,3.664-2.814,2.462,2.462,0,0,0-.747-1.422,5.756,5.756,0,0,0-1.916-1.017c-.4-.146-.8-.271-1.2-.394a12.03,12.03,0,0,1-1.783-.647c-.028-.014-.065-.035-.111-.061a1.843,1.843,0,0,1-.868-1.023,1.62,1.62,0,0,1,.1-1.243c.009-.018.024-.045.046-.082.1-.176.206-.33.319-.495a5.142,5.142,0,0,0,.874-1.816h0l.005-.022a.505.505,0,0,1,.6-.357c.012-.008.026-.076.082-.164a2.907,2.907,0,0,0,.3-.737,2.755,2.755,0,0,0,.083-.4v-.013a.49.49,0,0,0,0-.062h-.021a.853.853,0,0,0-.164,0,.5.5,0,0,1-.075,0,.505.505,0,0,1-.487-.523l.032-.917h0a3.3,3.3,0,0,0-1.905-3.321,3.788,3.788,0,0,0-1.551-.327,3.79,3.79,0,0,0-1.551.327,3.3,3.3,0,0,0-1.907,3.323l.031.91a.532.532,0,0,1,0,.071.505.505,0,0,1-.55.456.864.864,0,0,0-.173,0h-.022a.5.5,0,0,0,0,.053v.009a2.721,2.721,0,0,0,.084.408,2.922,2.922,0,0,0,.3.74c.056.088.068.157.08.164h0a.506.506,0,0,1,.606.38,5.138,5.138,0,0,0,.873,1.813c.107.158.207.3.3.469l.017.027.03.053.017.031a1.619,1.619,0,0,1,.1,1.243,1.842,1.842,0,0,1-.863,1.022c-.036.021-.075.042-.116.062a11.985,11.985,0,0,1-1.779.646c-.4.123-.808.25-1.2.4a5.758,5.758,0,0,0-1.917,1.017,2.462,2.462,0,0,0-.747,1.422,11.027,11.027,0,0,0,3.664,2.814,10.94,10.94,0,0,0,4.708,1.056,10.94,10.94,0,0,0,4.708-1.056Z",
    transform: "translate(1333.363 1506.936)",
    fill: "#27c7b7"
  })));
};
const DeliveryIcon = ({
  width = '48px',
  height = '48px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 48 48"
  }, __jsx("g", {
    "data-name": "Group 2996",
    transform: "translate(-1787 -804)"
  }, __jsx("rect", {
    "data-name": "Rectangle 541",
    width: "48",
    height: "48",
    rx: "20",
    transform: "translate(1787 804)",
    fill: "#f8dac2"
  }), __jsx("path", {
    "data-name": "delivery-truck (1)",
    d: "M19.621,630.473a2.216,2.216,0,0,0-1.564.645,2.171,2.171,0,0,0,0,3.108,2.225,2.225,0,0,0,1.564.645,2.2,2.2,0,0,0,0-4.4Zm0,3.421a1.222,1.222,0,1,1,0-2.443,1.222,1.222,0,0,1,0,2.443Zm.567-10.747a.475.475,0,0,0-.327-.127H17.354a.49.49,0,0,0-.489.489v4.007a.49.49,0,0,0,.489.489h3.978a.49.49,0,0,0,.489-.489v-2.683a.489.489,0,0,0-.161-.362Zm.655,3.88h-3v-3.035H19.67l1.173,1.056ZM7.687,630.473a2.216,2.216,0,0,0-1.564.645,2.171,2.171,0,0,0,0,3.108,2.225,2.225,0,0,0,1.564.645,2.2,2.2,0,0,0,0-4.4Zm0,3.421a1.222,1.222,0,1,1,0-2.443,1.222,1.222,0,0,1,0,2.443Zm-3.26-2.82H3.445v-1.3a.489.489,0,0,0-.977,0v1.789a.49.49,0,0,0,.489.489H4.428a.489.489,0,0,0,0-.977Zm2.478-2.663a.49.49,0,0,0-.489-.489H.489a.489.489,0,0,0,0,.977H6.417A.487.487,0,0,0,6.905,628.411Zm-5.425-1.764,5.928.034A.493.493,0,0,0,7.9,626.2a.484.484,0,0,0-.484-.494l-5.928-.034h0a.489.489,0,0,0,0,.977Zm1-2.219H8.406a.489.489,0,1,0,0-.977H2.478a.489.489,0,1,0,0,.977Zm21.341-.66h0l-3.5-2.9a.481.481,0,0,0-.313-.112H15.892V619a.49.49,0,0,0-.489-.489H2.957a.49.49,0,0,0-.489.489v3.577a.489.489,0,0,0,.977,0v-3.089H14.92v11.587H10.913a.489.489,0,0,0,0,.977H16.88a.489.489,0,0,0,0-.977H15.9v-9.339h3.939l3.186,2.639-.034,6.69H22.48a.489.489,0,0,0,0,.977h.992a.486.486,0,0,0,.489-.484L24,624.15A.516.516,0,0,0,23.819,623.768Z",
    transform: "translate(1799 201.49)",
    fill: "#ff811d"
  })));
};
const IosArrowUp = ({
  color = 'currentColor',
  width = '7px',
  height = '10px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 7 10"
  }, __jsx("path", {
    d: "M166.5,115.723a.454.454,0,0,1-.639,0l-2.115-2.108v8.034a.452.452,0,0,1-.9,0v-8.034l-2.115,2.112a.457.457,0,0,1-.639,0,.45.45,0,0,1,0-.636l2.883-2.862a.507.507,0,0,1,.142-.094.431.431,0,0,1,.174-.035.453.453,0,0,1,.316.129l2.883,2.862A.442.442,0,0,1,166.5,115.723Z",
    transform: "translate(-159.962 -112.1)",
    fill: color
  }));
};
const IosArrowDown = ({
  color = 'currentColor',
  width = '7px',
  height = '10px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 7 10"
  }, __jsx("path", {
    d: "M166.5,118.477a.454.454,0,0,0-.639,0l-2.115,2.108v-8.034a.452.452,0,0,0-.9,0v8.034l-2.115-2.112a.457.457,0,0,0-.639,0,.45.45,0,0,0,0,.636l2.883,2.862a.507.507,0,0,0,.142.094.431.431,0,0,0,.174.035.453.453,0,0,0,.316-.129l2.883-2.862A.442.442,0,0,0,166.5,118.477Z",
    transform: "translate(-159.962 -112.1)",
    fill: color
  }));
};
const MenuDown = ({
  color = 'currentColor',
  width = '12px',
  height = '6px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 12 6"
  }, __jsx("path", {
    id: "Path_2897",
    "data-name": "Path 2897",
    d: "M0,63.75l6,6,6-6Z",
    transform: "translate(0 -63.75)",
    fill: color
  }));
};
const HelpIcon = ({
  color = 'currentColor',
  width = '14px',
  height = '14px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 14 14"
  }, __jsx("path", {
    id: "Path_111",
    "data-name": "Path 111",
    d: "M269.443,404.312a7,7,0,1,0,7,7,6.98,6.98,0,0,0-7-7Zm.635,10.818a.3.3,0,0,1-.319.319h-.635a.3.3,0,0,1-.319-.319v-.635a.3.3,0,0,1,.319-.319h.635a.3.3,0,0,1,.319.319Zm.859-2.832c-.446.382-.763.637-.859.987a.308.308,0,0,1-.319.255h-.635a.309.309,0,0,1-.319-.35,2.988,2.988,0,0,1,1.336-1.876c.574-.446.892-.732.892-1.274a1.591,1.591,0,1,0-3.182,0v.191a.3.3,0,0,1-.224.351l-.6.189a.318.318,0,0,1-.414-.253,2.363,2.363,0,0,1-.033-.479,2.864,2.864,0,0,1,5.729,0,2.792,2.792,0,0,1-1.369,2.259Zm0,0",
    transform: "translate(-262.442 -404.312)",
    fill: color
  }));
};
const SAFlag = ({
  width = '640px',
  height = '480px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    id: "flag-icon-css-sa",
    viewBox: "0 0 640 480",
    width: width,
    height: height
  }, __jsx("defs", null, __jsx("clipPath", {
    id: "sa-a"
  }, __jsx("path", {
    fillOpacity: ".7",
    d: "M-85.3 0h682.6v512H-85.3z"
  }))), __jsx("g", {
    fillRule: "evenodd",
    clipPath: "url(#sa-a)",
    transform: "translate(80) scale(.9375)"
  }, __jsx("path", {
    fill: "#199d00",
    d: "M-128 0h768v512h-768z"
  }), __jsx("path", {
    fill: "#fff",
    d: "M65.5 145.1c-.8 12-2 33 8.3 35.2 12.3 1.2 5.5-20.8 10-24.8.8-2 2.3-2 2.4.5v18.7c0 6 4 7.8 7 9 3.2-.2 5.4 0 6.6 3l1.6 32.3s7.4 2.2 7.8-18.1c.3-12-2.4-21.9-.8-24.2 0-2.3 3-2.4 5-1.3 3.2 2.2 4.6 5 9.6 4 7.6-2.2 12.2-5.9 12.3-11.7a47 47 0 00-3.5-16.6c.4-1-1.4-3.7-1-4.7 1.3 2.2 3.4 2 3.8 0-1.3-4.2-3.3-8.3-6.5-10-2.7-2.4-6.7-2-8 3-.8 5.7 2 12.4 6.1 18 .9 2.1 2.1 5.7 1.6 8.9-2.2 1.3-4.4.7-6.3-1.2 0 0-6-4.5-6-5.6 1.6-10.2.3-11.4-.6-14.3-.6-3.9-2.5-5.2-4-7.8-1.5-1.6-3.5-1.6-4.5 0-2.7 4.6-1.4 14.5.5 19 1.4 4.1 3.5 6.7 2.5 6.7-.8 2.3-2.5 1.7-3.8-1a66.6 66.6 0 01-2.1-17.4c-.5-4.6-1.1-14.4-4.2-17-1.8-2.4-4.5-1.2-5.5 1a82.4 82.4 0 00.3 13.4c2 7.4 2.7 14 3.7 21.5.3 10.1-5.8 4.4-5.5-.7a45 45 0 00-.3-19.4c-1-2.6-2.1-3.2-4.6-2.8-1.9 0-6.8 5.3-8.2 14.3 0 0-1.2 4.6-1.7 8.7-.7 4.6-3.7 8-5.9-.6-1.8-6.3-3-21.6-6-18z"
  }), __jsx("path", {
    fill: "#fff",
    d: "M99 194.2l-32 15.4c.3-7.3 15.1-20.4 25.3-20.5 6.5.1 4.9 2.5 6.6 5.1z"
  }), __jsx("path", {
    fill: "#fff",
    d: "M93.3 204.2c-16.8 43.5 39.5 49.6 45.8 1.8.6-2 3-3.9 3.4-.7-1.3 43.3-43.6 46.2-50.8 32.6a41.9 41.9 0 01-2.5-14.6c-1-8.5-5.5-5.2-6.2 3.2-.7 4.7-.5 6-.5 10.5 2.2 34.2 56.7 19.5 65.6-8.7 4.7-15.6-.8-27.1 1.7-27.1 5.4 5.8 13 .8 14.7-1.2.7-1 2.5-1.7 3.7-.4 4.2 3 11.6 1.6 13.2-3.7.9-5.3 1.6-10.7 1.8-16.2-3.5 1-6 1.7-6.3 3.2l-.7 4.6c-.3 1.5-3.2 1.5-3.4-.4-1.3-6-6.7-6.7-10 2.5-2.1 1.8-6.1 2.2-6.5-.5.5-6.2-2-7-7-4.1l-4.8-36.2c2 0 4 1.5 5.9-.9-2-6.5-6.5-19.7-9-20.7-1.1-1.4-2.1-.5-3.7-.1-2.6.8-5 3-4.2 7.4 3 18.8 5 33.1 8.1 52 .5 2.1-1.3 5-3.7 4.7-4-2.7-5-8.2-12-8-5 0-10.6 5.5-11.3 10.7-.9 4.2-1.2 8.7 0 12.3 3.5 4.2 7.7 3.8 11.4 2.9 3-1.3 5.5-4.3 6.6-3.6.7.9.1 10.9-14.3 18.5-8.7 4-15.7 4.8-19.4-2.3-2.3-4.5.2-21.4-5.6-17.5z"
  }), __jsx("path", {
    fill: "#fff",
    d: "M165 160c3.3-1.2 19.3-19.6 19.3-19.6l-2.4-2c-.9-.7-.8-1.5 0-2.2 4-2.4 2.7-7.4.7-9.8a9.7 9.7 0 00-8.7.1c-2.8 2.7-3.4 7-1.2 9.6 2.1 1 4.2 3.2 2.8 4.4-6.6 7-24.5 19.1-22.4 19.5.4.6 11.5.6 11.8 0zm-97 65c-6 9.6-6.5 23.9-3.2 28.2 1.8 2 4.7 2.9 6.8 2.2 3.8-1.6 5.5-9.3 4.6-12-1.3-2-2.3-2.3-3.6-.7-2.6 5.4-3.7 1.7-4-1.3a70 70 0 01.8-15.2c.7-4.2 0-3-1.4-1.2zm257.1-15.3c-5.8-12.6-13.9-25-16.4-29.7a557.6 557.6 0 00-24.8-36c-6.2-7.4 10.2 3.1-2-11.7l-8.9-7.5c-2-1.4-6.8-4-7.6.2-.4 3.8-.2 5.8.4 8.9.5 2 3.5 5.5 5 7.5a565 565 0 0153.8 86.5c2.6-1.3 2-16.1.5-18.2z"
  }), __jsx("path", {
    fill: "#fff",
    d: "M299.6 251.5c-1.2 1.3 2.8 6.8 8 6.8 8.6-1 16.2-5.8 23.2-18.6a33 33 0 005.3-14.2 317 317 0 00-5.8-72.4c-.3-2 0-4.4.2-5 .6-.7 2.5 0 3.5-1.7 1.5-1.5-4-14-7-18.7-1-2.2-1.5-3.6-3.3.2a27 27 0 00-3 13.6c4.1 28.5 5.4 53.4 8 81.9.3 2.8-.1 6.8-2 8.4a80.2 80.2 0 01-27.1 19.7zm116.5-.1c-6.2 3.6-6.2 7.7-1.2 7.8 8.6-1 18.8-1.7 25.8-12.3a41 41 0 004.2-16 303 303 0 00-4.7-71.4c-.2-2-1.1-6.7-.8-7.3.6-1.4 3.4.1 4.4-1.5 1.4-1.5-7.3-12.7-10.4-17.5-1-2.2-1.4-3.6-3.3.2a22.3 22.3 0 00-1.8 13.6c4.6 31 8 54.2 8.7 81.6-.4 2.6-.5 4-1.7 7.3-2.7 3.4-5.7 7.8-8.5 9.9-2.8 2-8.8 4-10.7 5.6z"
  }), __jsx("path", {
    fill: "#fff",
    d: "M420.7 223.7c0-7.3.1-13.5-.1-19a34 34 0 00-3-13.5c-1.8-4.1-.7-7.4-1.6-11.8-.8-4.4-.6-11-1.8-16.1-.4-2-1.4-8.5-1.1-9.2.5-1.4 2.4 0 3.4-1.6 1.4-1.5-5-18-8.2-22.7-1.1-2.1-3.3-1.4-5.8 2-2.5 2.3-1.6 7.4-.6 12.3 6.1 32.3 10.8 61.6 9.8 92.3-.4 2.6 9-7.8 9-12.7zm-45.7-40c-3.9-.2-12-7.7-14.4-12a8 8 0 01.4-6.5c1.5-1 3.7-2 5.4-1 0 0 1.7 2.4 1.4 2.7 2 1 3 .5 3.2-.4.1-1.5-.6-2.4-.6-4 .9-4.6 6-5.3 8-2.4 1.4 1.8 2 5.5 2.1 8 0 1.3-2-.2-3.3 0-1.1.4-1.4 1.8-1.5 3-.2 3.3-.6 8.6-.7 12.5zm-71.8 48c1-9.8-.4-27.3-.5-33.1A477 477 0 00299 154c-1.2-8.4 3.4.9 2.8-4-1.5-8.3-6.1-14-11.6-21.5-1.7-2.5-1.7-3-4.4.6-3 6.7-.4 11.4.4 16.7 3.9 17.2 6.2 33 7.3 48.7a393.4 393.4 0 01.4 49c3 .1 7.6-4.7 9.3-11.8z"
  }), __jsx("path", {
    fill: "#fff",
    d: "M434 216c-6.9-11.6-17.2-24-20-28.7a658 658 0 00-29.2-37.8c-8.5-9 4-1.5-1.6-8.5-4.7-5.1-6-6.8-10.1-9.9-2-1.3-3.2-3.8-4 .5a83 83 0 00-.2 11.2c0 1.7 1.8 5 3.4 7 20.7 25.5 43.4 51.5 61.6 84.2 2.6-1.3 1.7-16 0-18z"
  }), __jsx("path", {
    fill: "#1ba400",
    d: "M122.6 194.7c-.5.9-1.6 2-1.2 3.1.7 1 1.4 1.3 2.6 1.3 1.1 0 2.7.3 3-.3.6-.7 1-2 .6-3.3-1.2-3-4.4-1.8-5-.8z"
  }), __jsx("path", {
    fill: "#fff",
    d: "M354.2 362.5c9.2.4 15.2.5 23.3 1.4l9.6-1c10.6-1 11 15.1 11 15.1 0 9.5-3.7 10-8.4 11-2.7.4-4-1.6-5.5-3.6a14 14 0 01-7 .4c-3.9-.2-7.7-.2-11.5-.5-4-.3-6.2.5-10.3.1-.8 1.3-2 3.1-4.4 2.6-2-.3-4.5-6-3.8-10.5 1.5-3.2 1-2.1 1-3.5-37.6-1-75.5-2.7-112.3-2.2-28.8.1-57.2 1.3-85.7 2.5-15.2-.2-26.8-2.6-34.8-14.3.8 0 38.8 2.1 49.9 1.4 20.5-.2 39.3-1.9 60.2-2.5 41.2.7 82.1.7 123.3 3.6-4-2.7-4-9 2-10.6.5-.4.8 3.1 1.7 3 4.9-.3 2.7 6.3 1.7 7.6zM188.6 135.3c-6.2 17.8 3.6 37.4 10.4 35.5 5 2 8-7.4 10-17.6 1.5-2.9 2.5-3.2 3.2-1.7-.2 13.6 1 16.7 4.5 20.8 7.8 6 14.3.8 14.8.3l6-6.1c1.4-1.5 3.2-1.5 5.1-.3 1.9 1.7 1.6 4.6 5.6 6.6 3.4 1.4 10.5.4 12.2-2.5 2.2-3.9 2.8-5.2 3.8-6.6 1.6-2.1 4.3-1.2 4.3-.5-.3 1.2-1.9 2.3-.8 4.5 2 1.4 2.4.5 3.5.2 4-2 7-10.6 7-10.6.1-3.2-1.7-3-2.9-2.2l-3.1 2.1c-2 .3-5.7 1.6-7.6-1.3-1.9-3.4-1.9-8.3-3.3-11.8 0-.2-2.6-5.5-.2-5.8 1.2.2 3.7.9 4.1-1.2 1.2-2.1-2.6-8-5.3-11-2.3-2.5-5.5-2.8-8.6-.2-2.2 2-1.9 4.2-2.3 6.3a9.8 9.8 0 002 8.7c2.2 4.2 6.1 9.7 4.8 17.5 0 0-2.3 3.6-6.3 3.1-1.7-.3-4.4-1-5.8-11.8-1.1-8 .2-19.4-3.2-24.7-1.3-3.3-2.2-6.4-5.2-.9-.8 2.2-4.3 5.5-1.8 12.2a36 36 0 012 19c-1.5 2.2-1.8 2.9-3.7 5-2.6 3-5.5 2.2-7.7 1.1-2-1.3-3.6-2-4.6-6.5.2-7 .6-18.5-.7-20.9-1.9-3.8-5-2.4-6.3-1.2a47.7 47.7 0 00-11.5 23.5c-1.8 5.8-3.7 4.1-5 1.8-3.2-3-3.5-26.7-7.4-22.8z"
  }), __jsx("path", {
    fill: "#fff",
    d: "M207.4 174.1c2.9-2 1.6-3.4 5.8.8a72 72 0 019.2 31.3c-.2 2.6 1.6 4.2 2.5 3.6.4-6 15.1-14.4 28.6-15.6 2-.5 1-4.4 1.3-6.4-.8-7.5 4.2-14.3 11.2-14.8 9.6 1.4 12.8 6.5 13 14.2-1.1 15-16.7 17.5-25.4 18.7-1.3.5-1.9 1.1 0 1.8l36.6.2 1.9 1c.2 1-.6.2-2 2.6a29.5 29.5 0 00-3.7 11.5c-10.9 3.6-22.2 5-33.6 6.5-4 2-6 4.7-5.2 7.7 1.4 3.3 10.2 6.7 10.2 6.8 1.7 1 3.6 3.5-.5 8.6-17.8-.8-31.7-8.4-36.5-19.1-1.4-1.1-3 0-4 1.4-7 9-13.8 17-25.7 21.4-7 1.8-14.3-1.1-17.7-5.7-2.3-2.7-2.2-5.6-3-6.2-3.9 1.7-36.9 15.7-32.7 9.1 8-8.5 22-14.9 34.2-23.3.9-2.9 2.5-12.5 7.3-15.6.3 0-.7 5.6-.6 8 0 2-.2 2.7.2 2.2.9-.5 15.7-12.2 17-15.8 1.4-2 .3-7.2.3-7.4-2.8-7.2-6.7-7.8-8.1-11.4-1.3-4.7-.7-10.1 2-11.7 2.4-2.1 5.2-1.9 7.9.5 3 2.7 5.6 8 6.4 11.9-.5 1.5-4-1-5-.3a16 16 0 013.7 7.8c2 8.2 1.4 11.4-.6 16.7-6.6 13.9-15 18-22.4 23.2-.2 0-.3 3.5 2.4 5.4 1 1 4.9 1.5 9.4 0a54.5 54.5 0 0022.3-23.3 51 51 0 00-2.4-22.2c-2.9-6.7-6.3-16.2-6.3-16.4-.1-4.2.2-5.6 2-7.7zm-95.8-38.6c4.2 2 12.2 1.1 11.8-5.7l-.2-3.1c-.8-2-3.2-1.5-3.7.5-.2.7.3 1.8-.3 2.1-.4.4-1.7.2-1.7-1.7 0-.6-.4-1.2-.7-1.6-.2-.2-.4-.2-.9-.2-.6 0-.6.1-.9.6-.1.5-.3 1-.3 1.6 0 .7-.4.9-.8 1-.6 0-.5 0-1-.2-.2-.3-.5-.4-.5-1l-.3-1.6c-.2-.3-.6-.5-1-.6-2.3 0-2.5 2.7-2.3 3.7-.2.2-.3 4.9 2.8 6.2z"
  }), __jsx("path", {
    fill: "#fff",
    d: "M235.1 187.7c4.2 2 14.3.9 11.8-5.6l-.2-3.2c-.9-2-3.2-1.5-3.7.6-.2.6.3 1.7-.4 2-.3.4-1.7.2-1.6-1.6 0-.6-.4-1.3-.7-1.7-.3-.1-.4-.2-1-.2-.5 0-.5.2-.8.7-.2.5-.3 1-.3 1.6-.1.6-.4.8-.9 1-.5 0-.4 0-.8-.3-.3-.3-.6-.4-.6-.9l-.3-1.6c-.2-.3-.6-.5-1-.6-2.3 0-2.5 2.6-2.4 3.6-.1.2-.2 5 3 6.2zm72-21.6c4.2 2 12.1 1.1 11.8-5.6l-.2-3.2c-.9-2-3.2-1.5-3.7.5-.2.7.3 1.8-.4 2.2-.3.3-1.7.1-1.6-1.8 0-.6-.4-1.2-.7-1.6-.3-.2-.4-.2-1-.2-.5 0-.5.2-.8.7l-.3 1.5c-.1.7-.4 1-.9 1s-.4 0-.8-.2c-.3-.3-.6-.4-.6-.9s-.1-1.3-.3-1.7c-.2-.3-.6-.4-1-.5-2.3 0-2.5 2.6-2.4 3.6-.1.2-.2 4.9 3 6.2zm37.3 54.3c-7.3 8.3-4.1 22-2.4 25 2.4 4.8 4.3 7.9 9 10.3 4.3 3.1 7.7 1.2 9.5-1 4.3-4.5 4.4-16 6.4-18.2 1.4-4.2 5-3.5 6.7-1.6a16.5 16.5 0 006.2 5.3c4 3.5 8.8 4.2 13.6 1 3.2-1.9 5.3-4.2 7.2-8.9 2-5.6 1-31.6.5-47l-4.2-21.5c0-.2-.5-10.2-1-12.5 0-1-.3-1.3.7-1.2 1.1 1 1.2 1 2 1.3 1 .2 2-1.7 1.3-3.3l-10-18.6c-.8-.8-1.9-1.6-3.2.2a7.3 7.3 0 00-2.4 5.5c.3 4.4 1 8.9 1.3 13.3l4 22.6c1.3 16 1.6 29.2 2.9 45.3-.2 6.8-2.3 12.7-4.3 13.6 0 0-3 1.7-5-.2-1.5-.6-7.4-9.9-7.4-9.9-3-2.7-5-2-7.1 0-6 5.8-8.6 16.4-12.7 23.8-1 1.7-4 3-7.2-.1-8.2-11.3-3.4-27.3-4.4-23.2zM309 126.7c3.8 1.5 6.4 9.2 5.6 13-.8 4.5-2.8 9.5-4.2 8.9-1.6-.6 1-4.6-.5-8.8-.8-2.8-6-7.8-5.4-9.2-1-3.1 2.2-4.5 4.5-4z"
  }), __jsx("path", {
    fill: "#fff",
    d: "M356.6 225c.7-9.2-.6-14.8-.8-20.2s-6.1-46.6-7.3-50.6c-1.5-7.8 5.7-1 4.9-5.6-2.5-5.6-8.6-13.9-10.5-18.8-1.2-2-.7-4-3.3-.5a42.3 42.3 0 00-2.3 19.2c6.2 32.3 12.5 59.1 11.5 89.8 3 0 6.3-6.7 7.8-13.3zm64.4-85.3c3.5 1.7 5.5 11.3 5.1 14-.7 5-2.5 10.4-3.8 9.7-1.5-.6.3-7.4-.4-9.5-.8-3-5.5-8.4-5-10-1-3.4 2-4.8 4.1-4.2zm-255.7 67.9c3.3 1.3 5.3 8.3 5 10.3-.8 3.7-2.5 7.7-3.8 7.1-1.3-.4.3-5.4-.3-7-.3-3.7-4.9-5.7-4.8-7.3-.8-3 2-3.5 4-3.1z"
  }), __jsx("path", {
    fill: "#1b9d00",
    d: "M244.9 218.2c4.2.2 6.3 3.6 2.4 5-4 1.3-7.7 2.4-7.8 8 1.5 8-2 5.2-4 4.2-2.4-1.8-9.2-6-10.2-15-.1-2.1 1.6-4 4.3-4 4 1.1 10 1.2 15.3 1.8z"
  }), __jsx("path", {
    fill: "#fff",
    d: "M77.4 124.4c4.8 1.4 5.1 8.6 4.8 10.7-.7 3.8-2.4 7.9-3.6 7.4-1.4-.5 0-5.7-.7-7.3-.7-2.2-4.8-6.4-4.4-7.6-.9-2.5 2-3.7 3.9-3.2zm95.9 33.6c-3.8 2-5.2 8-2.9 11.6 2.2 3 5.6 1.9 6 1.9 3.7.4 5.9-6.9 5.9-6.9s.1-2-4.2 1.9c-1.9.3-2-.4-2.5-1.4a9 9 0 01.5-5.7c.7-1.8-.7-2.6-2.8-1.4zm28-36.4c-2 1.3-5.7 5.2-5.8 9.6-.1 2.5-.6 2.5 1 4 1.3 1.8 2.4 1.7 4.8.4a5.1 5.1 0 002.3-3.4c.6-2.8-3 1.4-3.4-1.8-.8-3 1.5-4.2 3.7-7 0-2 0-3.3-2.7-1.8zm22.4 4a59.5 59.5 0 00-1.6 11.1c-.6 2.8 3 4 4.5.4 2.4-6.5 2.4-9.3 2.6-12-.7-4.3-3.6-4.2-5.5.5zm142 72.3c.4-.5 20-14.4 20-14.4 2-.7 1.5 7.2.6 7.1a77.8 77.8 0 01-20.7 14.3c-1 .7-1.9-5.3 0-7zm17.7-.2c3.5 1.7 4.9 11.8 4.5 14.5 0 5.4-3.3 9.6-4.7 9-1.4-.7.2-6.7-.5-8.8-.8-3-3.7-8.5-3.2-10.1-1-3.4 1.8-5.2 4-4.6zm-116 43.4a26 26 0 015.6-4.9c2-1 3.8.8 3.7.7.3 2-1.2 3.7-.7 6.3.4 1 .7 2.2 2.6 1.8 3.1-2.5 6-2.7 9-2.8 2.5.1 2.6 4.2 1 4.2-5.7 1.2-8.2 2.8-12.3 4.3-2 1.2-3.6-.3-3.6-.4s-1.1-1.1-.4-3.7c.2-2-.6-3.2-2.4-3-1.2.8-2.4 1.2-3-.3-.3-1-.4-1.6.5-2.2zm136.6 5.4c.8 1 1.4 2-.1 3.8l-3.7 3.2c-.6 1-1 2.8 1 3.3 3.6 1 12-4.5 12-4.6 1.4-1 1-3 .8-3-.8-.9-2.6-.3-3.8-.5-.6 0-2.5-.2-1.6-2a11.4 11.4 0 001.6-2.9c.5-1.2 0-2-2-2.7-2.1-.4-3-.2-5.3 0-1.2.2-1.6.8-1.9 2.3.1 2.3 1.5 2.2 3 3z"
  }), __jsx("path", {
    fill: "#259f00",
    d: "M268.1 189.7c-.5 1-2.3 1-4 0s-2.7-2.6-2.1-3.5 2.3-.9 4 0 2.6 2.6 2.1 3.5zm-89-53.6c-1 .3-2.4-.6-3-2s-.3-2.6.7-2.9 2.3.7 3 2 .3 2.7-.8 3z"
  }), __jsx("path", {
    fill: "#209000",
    d: "M355.2 375c9.4.4 18.2 0 27.5.5 1.7 1.5.5 5-.6 4.8l-7.8-.3c-.1-3-7.7-2.5-7.5.1-4.1.5-7.8-.1-12-.3-1.2-1.5-1-4.2.4-4.8z"
  })));
};
const DEFlag = ({
  width = '640px',
  height = '480px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 640 480",
    width: width,
    height: height
  }, __jsx("path", {
    fill: "#ffce00",
    d: "M0 320h640v160H0z"
  }), __jsx("path", {
    d: "M0 0h640v160H0z"
  }), __jsx("path", {
    fill: "#d00",
    d: "M0 160h640v160H0z"
  }));
};
const ESFlag = ({
  width = '640px',
  height = '480px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    id: "flag-icon-css-es",
    viewBox: "0 0 640 480",
    width: width,
    height: height
  }, __jsx("path", {
    fill: "#AA151B",
    d: "M0 0h640v480H0z"
  }), __jsx("path", {
    fill: "#F1BF00",
    d: "M0 120h640v240H0z"
  }), __jsx("path", {
    fill: "#ad1519",
    d: "M127.3 213.3l-.8-.1-1-1-.7-.4-.6-.8s-.7-1.1-.4-2c.3-.9.9-1.2 1.4-1.5a12 12 0 011.5-.5l1-.4 1.3-.3.5-.3c.2 0 .7 0 1-.2l1-.2 1.6.1h4.8c.4 0 1.2.3 1.4.4a35 35 0 002 .7c.5.1 1.6.3 2.2.6.5.3.9.7 1.1 1l.5 1v1.1l-.5.8-.6 1-.8.6s-.5.5-1 .4c-.4 0-4.8-.8-7.6-.8s-7.3.9-7.3.9"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "round",
    strokeWidth: ".3",
    d: "M127.3 213.3l-.8-.1-1-1-.7-.4-.6-.8s-.7-1.1-.4-2c.3-.9.9-1.2 1.4-1.5a12 12 0 011.5-.5l1-.4 1.3-.3.5-.3c.2 0 .7 0 1-.2l1-.2 1.6.1h4.8c.4 0 1.2.3 1.4.4a35 35 0 002 .7c.5.1 1.6.3 2.2.6.5.3.9.7 1.1 1l.5 1v1.1l-.5.8-.6 1-.8.6s-.5.5-1 .4c-.4 0-4.8-.8-7.6-.8s-7.3.9-7.3.9z"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M133.3 207c0-1.3.6-2.3 1.3-2.3.8 0 1.4 1 1.4 2.4 0 1.3-.6 2.4-1.4 2.4s-1.3-1.1-1.3-2.5"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M133.3 207c0-1.3.6-2.3 1.3-2.3.8 0 1.4 1 1.4 2.4 0 1.3-.6 2.4-1.4 2.4s-1.3-1.1-1.3-2.5z"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M134 207c0-1.2.3-2.1.7-2.1.3 0 .6 1 .6 2.1 0 1.3-.3 2.2-.6 2.2-.4 0-.6-1-.6-2.2"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M134 207c0-1.2.3-2.1.7-2.1.3 0 .6 1 .6 2.1 0 1.3-.3 2.2-.6 2.2-.4 0-.6-1-.6-2.2z"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M133.8 204.5c0-.4.4-.8.8-.8s1 .4 1 .8c0 .5-.5.9-1 .9s-.8-.4-.8-.9"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M135.3 204.2v.6h-1.4v-.6h.5V203h-.7v-.6h.7v-.5h.5v.5h.6v.6h-.6v1.2h.4"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M135.3 204.2v.6h-1.4v-.6h.5V203h-.7v-.6h.7v-.5h.5v.5h.6v.6h-.6v1.2h.4"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M135.9 204.2v.6h-2.5v-.6h1V203h-.7v-.6h.7v-.5h.5v.5h.6v.6h-.6v1.2h1"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M135.9 204.2v.6h-2.5v-.6h1V203h-.7v-.6h.7v-.5h.5v.5h.6v.6h-.6v1.2h1"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M134.9 203.7c.4.1.6.4.6.8 0 .5-.4.9-.8.9s-1-.4-1-.9c0-.4.3-.7.7-.8"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M134.7 213.2H130v-1.1l-.3-1.2-.2-1.5c-1.3-1.7-2.5-2.8-2.9-2.5.1-.3.2-.6.5-.7 1.1-.7 3.5 1 5.2 3.6l.5.7h3.8l.4-.7c1.8-2.7 4.1-4.3 5.2-3.6.3.1.4.4.5.7-.4-.3-1.6.8-2.9 2.5l-.2 1.5-.2 1.2-.1 1.1h-4.7"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M134.7 213.2H130v-1.1l-.3-1.2-.2-1.5c-1.3-1.7-2.5-2.8-2.9-2.5.1-.3.2-.6.5-.7 1.1-.7 3.5 1 5.2 3.6l.5.7h3.8l.4-.7c1.8-2.7 4.1-4.3 5.2-3.6.3.1.4.4.5.7-.4-.3-1.6.8-2.9 2.5l-.2 1.5-.2 1.2-.1 1.1h-4.7z"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M126.8 206.8c1-.5 3 1.1 4.6 3.6m11-3.6c-.8-.5-2.8 1.1-4.5 3.6"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M127.8 215.3l-.5-1a27.3 27.3 0 0114.7 0l-.5.8a5.7 5.7 0 00-.3.8 22.9 22.9 0 00-6.6-.8c-2.6 0-5.2.3-6.5.8l-.3-.6"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M127.8 215.3l-.5-1a27.3 27.3 0 0114.7 0l-.5.8a5.7 5.7 0 00-.3.8 22.9 22.9 0 00-6.6-.8c-2.6 0-5.2.3-6.5.8l-.3-.6"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M134.6 217.7c2.4 0 5-.4 5.9-.6.6-.2 1-.5 1-.8 0-.2-.2-.3-.4-.4-1.4-.5-4-.8-6.5-.8s-5 .3-6.4.8c-.2 0-.3.2-.4.3 0 .4.3.7 1 .9 1 .2 3.5.6 5.8.6"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M134.6 217.7c2.4 0 5-.4 5.9-.6.6-.2 1-.5 1-.8 0-.2-.2-.3-.4-.4-1.4-.5-4-.8-6.5-.8s-5 .3-6.4.8c-.2 0-.3.2-.4.3 0 .4.3.7 1 .9 1 .2 3.5.6 5.8.6z"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M142.1 213.2l-.5-.5s-.6.3-1.3.2c-.6 0-.9-1-.9-1s-.7.7-1.3.7c-.7 0-1-.6-1-.6s-.7.5-1.3.4c-.6 0-1.2-.8-1.2-.8s-.6.8-1.2.8c-.6.1-1-.5-1-.5s-.4.6-1.1.7-1.4-.6-1.4-.6-.5.7-1 1c-.5 0-1.2-.4-1.2-.4l-.2.5-.3.1.2.5a27 27 0 017.2-.9c3 0 5.5.4 7.4 1l.2-.6"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M142.1 213.2l-.5-.5s-.6.3-1.3.2c-.6 0-.9-1-.9-1s-.7.7-1.3.7c-.7 0-1-.6-1-.6s-.7.5-1.3.4c-.6 0-1.2-.8-1.2-.8s-.6.8-1.2.8c-.6.1-1-.5-1-.5s-.4.6-1.1.7-1.4-.6-1.4-.6-.5.7-1 1c-.5 0-1.2-.4-1.2-.4l-.2.5-.3.1.2.5a27 27 0 017.2-.9c3 0 5.5.4 7.4 1l.2-.6z"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M134.7 210.7h.2a1 1 0 000 .4c0 .6.4 1 1 1a1 1 0 001-.7l.2-.3v.4c.1.5.6.8 1.1.8.6 0 1-.4 1-1v-.1l.4-.4.2.5a.9.9 0 00-.1.4 1 1 0 001 1c.4 0 .7-.2.9-.5l.2-.2v.3c0 .3.1.6.4.7 0 0 .4 0 1-.4l.7-.7v.4s-.5.8-1 1c-.2.2-.5.4-.8.3-.3 0-.6-.3-.7-.6-.2.2-.4.2-.7.2-.6 0-1.2-.3-1.4-.8-.3.3-.7.5-1.1.5a1.6 1.6 0 01-1.2-.6 1.6 1.6 0 01-1 .4 1.6 1.6 0 01-1.3-.6 1.6 1.6 0 01-2.4.2 1.6 1.6 0 01-1.2.6 1.5 1.5 0 01-1.1-.5c-.2.5-.8.8-1.4.8-.2 0-.5 0-.7-.2-.1.3-.4.6-.7.6-.3 0-.6 0-.9-.2l-1-1 .1-.5.8.7c.5.4.9.4.9.4.3 0 .4-.4.4-.7v-.3l.2.2c.2.3.5.5.9.5a1 1 0 001-1 .9.9 0 000-.4v-.5l.4.4a.7.7 0 000 .1c0 .6.5 1 1 1 .6 0 1-.3 1.1-.9v-.3l.2.3c.2.4.6.7 1 .7.7 0 1.1-.4 1.1-1a1 1 0 000-.3h.3"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M134.7 210.7h.2a1 1 0 000 .4c0 .6.4 1 1 1a1 1 0 001-.7l.2-.3v.4c.1.5.6.8 1.1.8.6 0 1-.4 1-1v-.1l.4-.4.2.5a.9.9 0 00-.1.4 1 1 0 001 1c.4 0 .7-.2.9-.5l.2-.2v.3c0 .3.1.6.4.7 0 0 .4 0 1-.4l.7-.7v.4s-.5.8-1 1c-.2.2-.5.4-.8.3-.3 0-.6-.3-.7-.6-.2.2-.4.2-.7.2-.6 0-1.2-.3-1.4-.8-.3.3-.7.5-1.1.5a1.6 1.6 0 01-1.2-.6 1.6 1.6 0 01-1 .4 1.6 1.6 0 01-1.3-.6 1.6 1.6 0 01-2.4.2 1.6 1.6 0 01-1.2.6 1.5 1.5 0 01-1.1-.5c-.2.5-.8.8-1.4.8-.2 0-.5 0-.7-.2-.1.3-.4.6-.7.6-.3 0-.6 0-.9-.2l-1-1 .1-.5.8.7c.5.4.9.4.9.4.3 0 .4-.4.4-.7v-.3l.2.2c.2.3.5.5.9.5a1 1 0 001-1 .9.9 0 000-.4v-.5l.4.4a.7.7 0 000 .1c0 .6.5 1 1 1 .6 0 1-.3 1.1-.9v-.3l.2.3c.2.4.6.7 1 .7.7 0 1.1-.4 1.1-1a1 1 0 000-.3h.3z"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M134.6 213.3c-2.9 0-5.5.4-7.3 1l-.3-.2.1-.3a27 27 0 017.5-1c3 0 5.7.4 7.6 1 0 0 .2.2.1.3l-.3.2a27.3 27.3 0 00-7.4-1"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "round",
    strokeWidth: ".3",
    d: "M134.6 213.3c-2.9 0-5.5.4-7.3 1l-.3-.2.1-.3a27 27 0 017.5-1c3 0 5.7.4 7.6 1 0 0 .2.2.1.3l-.3.2a27.3 27.3 0 00-7.4-1z"
  }), __jsx("path", {
    fill: "#fff",
    d: "M131.8 214.4c0-.3.2-.4.5-.4a.4.4 0 01.4.4c0 .2-.2.4-.4.4a.4.4 0 01-.5-.4"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M131.8 214.4c0-.3.2-.4.5-.4a.4.4 0 01.4.4c0 .2-.2.4-.4.4a.4.4 0 01-.5-.4z"
  }), __jsx("path", {
    fill: "#ad1519",
    d: "M134.7 214.5h-1c-.1 0-.3 0-.3-.3l.3-.3h2a.3.3 0 01.2.3.3.3 0 01-.3.3h-1"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M134.7 214.5h-1c-.1 0-.3 0-.3-.3l.3-.3h2a.3.3 0 01.2.3.3.3 0 01-.3.3h-1"
  }), __jsx("path", {
    fill: "#058e6e",
    d: "M130 214.9h-.7c-.1 0-.3 0-.3-.2a.3.3 0 01.2-.3l.7-.1.7-.1c.2 0 .3 0 .4.2a.3.3 0 01-.3.4h-.7"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M130 214.9h-.7c-.1 0-.3 0-.3-.2a.3.3 0 01.2-.3l.7-.1.7-.1c.2 0 .3 0 .4.2a.3.3 0 01-.3.4h-.7"
  }), __jsx("path", {
    fill: "#ad1519",
    d: "M127.3 215.3l.3-.4h.7l-.4.6-.6-.2"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M127.3 215.3l.3-.4h.7l-.4.6-.6-.2"
  }), __jsx("path", {
    fill: "#fff",
    d: "M136.6 214.4c0-.3.2-.4.4-.4a.4.4 0 01.5.4.4.4 0 01-.5.4.4.4 0 01-.4-.4"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M136.6 214.4c0-.3.2-.4.4-.4a.4.4 0 01.5.4.4.4 0 01-.5.4.4.4 0 01-.4-.4z"
  }), __jsx("path", {
    fill: "#058e6e",
    d: "M139.3 214.9h.6a.3.3 0 00.4-.2.3.3 0 00-.3-.3l-.6-.1-.7-.1c-.2 0-.3 0-.4.2 0 .2.1.3.3.4h.7"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M139.3 214.9h.6a.3.3 0 00.4-.2.3.3 0 00-.3-.3l-.6-.1-.7-.1c-.2 0-.3 0-.4.2 0 .2.1.3.3.4h.7"
  }), __jsx("path", {
    fill: "#ad1519",
    d: "M142 215.4l-.3-.5h-.7l.3.6.6-.1"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M142 215.4l-.3-.5h-.7l.3.6.6-.1"
  }), __jsx("path", {
    fill: "#ad1519",
    d: "M134.6 217.1a25 25 0 01-6-.6 25.5 25.5 0 0112.1 0c-1.6.4-3.7.6-6 .6"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "round",
    strokeWidth: ".3",
    d: "M134.6 217.1a25 25 0 01-6-.6 25.5 25.5 0 0112.1 0c-1.6.4-3.7.6-6 .6z"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M142 212l-.1-.3c-.2 0-.3 0-.4.2 0 .2 0 .4.2.4 0 0 .2 0 .3-.3"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M142 212l-.1-.3c-.2 0-.3 0-.4.2 0 .2 0 .4.2.4 0 0 .2 0 .3-.3z"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M137.3 211.2c0-.2 0-.4-.2-.4 0 0-.2.1-.2.3 0 .2 0 .4.2.4l.3-.3"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M137.3 211.2c0-.2 0-.4-.2-.4 0 0-.2.1-.2.3 0 .2 0 .4.2.4l.3-.3z"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M132 211.2l.1-.4c.2 0 .3.1.3.3 0 .2 0 .4-.2.4l-.2-.3"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M132 211.2l.1-.4c.2 0 .3.1.3.3 0 .2 0 .4-.2.4l-.2-.3z"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M127.3 212l.1-.3c.2 0 .3 0 .4.2 0 .2 0 .4-.2.4 0 0-.2 0-.3-.3"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M127.3 212l.1-.3c.2 0 .3 0 .4.2 0 .2 0 .4-.2.4 0 0-.2 0-.3-.3z"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M134.6 208.5l-.8.5.6 1.3.2.1.2-.1.7-1.3-.9-.5"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M134.6 208.5l-.8.5.6 1.3.2.1.2-.1.7-1.3-.9-.5"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M132.8 210.5l.4.5 1.3-.4.1-.2-.1-.2-1.3-.3-.4.6"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M132.8 210.5l.4.5 1.3-.4.1-.2-.1-.2-1.3-.3-.4.6"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M136.4 210.5l-.3.5-1.3-.4-.2-.2.2-.2 1.3-.3.3.6"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M136.4 210.5l-.3.5-1.3-.4-.2-.2.2-.2 1.3-.3.3.6"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M129.3 209l-.7.7.9 1 .2.1.1-.1.3-1.3-.8-.3"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M129.3 209l-.7.7.9 1 .2.1.1-.1.3-1.3-.8-.3"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M128 211.2l.4.5 1.2-.6v-.2l-.1-.2-1.3-.1-.3.6"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M128 211.2l.4.5 1.2-.6v-.2l-.1-.2-1.3-.1-.3.6"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M131.5 210.5l-.3.6H130l-.2-.2.1-.3 1.2-.6.5.5"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M131.5 210.5l-.3.6H130l-.2-.2.1-.3 1.2-.6.5.5"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M126.6 211.4v.6l-1.4.2-.2-.1v-.2l1-.9.6.4"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M126.6 211.4v.6l-1.4.2-.2-.1v-.2l1-.9.6.4"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M129.2 210.9c0-.3.2-.5.5-.5s.5.2.5.5a.5.5 0 01-.5.4.5.5 0 01-.5-.4"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M129.2 210.9c0-.3.2-.5.5-.5s.5.2.5.5a.5.5 0 01-.5.4.5.5 0 01-.5-.4z"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M140 209l.7.7-.9 1-.2.1-.1-.1-.3-1.3.8-.3"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M140 209l.7.7-.9 1-.2.1-.1-.1-.3-1.3.8-.3"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M141.4 211.2l-.5.5-1.2-.6v-.2l.1-.2 1.3-.1.3.6"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M141.4 211.2l-.5.5-1.2-.6v-.2l.1-.2 1.3-.1.3.6"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M137.8 210.5l.3.6h1.3l.2-.2-.1-.3-1.2-.6-.5.5"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M137.8 210.5l.3.6h1.3l.2-.2-.1-.3-1.2-.6-.5.5"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M142.5 211.4l.1.6 1.3.2.2-.1v-.2l-1-.9-.6.4"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M142.5 211.4l.1.6 1.3.2.2-.1v-.2l-1-.9-.6.4"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M134.2 210.4a.5.5 0 01.4-.4c.3 0 .5.2.5.4a.5.5 0 01-.5.5.5.5 0 01-.4-.5"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M134.2 210.4a.5.5 0 01.4-.4c.3 0 .5.2.5.4a.5.5 0 01-.5.5.5.5 0 01-.4-.5z"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M139.1 210.9c0-.3.3-.5.5-.5a.5.5 0 01.5.5.5.5 0 01-.5.4.5.5 0 01-.5-.4"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M139.1 210.9c0-.3.3-.5.5-.5a.5.5 0 01.5.5.5.5 0 01-.5.4.5.5 0 01-.5-.4z"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M124.8 212.2l-.6-.7c-.2-.2-.7-.3-.7-.3 0-.1.3-.3.6-.3a.5.5 0 01.4.2v-.2s.3 0 .4.3v1"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M124.8 212.2l-.6-.7c-.2-.2-.7-.3-.7-.3 0-.1.3-.3.6-.3a.5.5 0 01.4.2v-.2s.3 0 .4.3v1z"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M124.8 212c.1-.2.4-.2.5 0 .2.1.3.3.2.5l-.5-.1c-.2-.1-.3-.4-.2-.5"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M124.8 212c.1-.2.4-.2.5 0 .2.1.3.3.2.5l-.5-.1c-.2-.1-.3-.4-.2-.5z"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M144.3 212.2l.6-.7c.2-.2.7-.3.7-.3 0-.1-.3-.3-.6-.3a.6.6 0 00-.4.2v-.2s-.3 0-.4.3v.7l.1.3"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M144.3 212.2l.6-.7c.2-.2.7-.3.7-.3 0-.1-.3-.3-.6-.3a.6.6 0 00-.4.2v-.2s-.3 0-.4.3v.7l.1.3z"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M144.3 212c0-.2-.3-.2-.5 0-.2.1-.2.3-.1.5l.5-.1c.2-.1.2-.4.1-.5"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M144.3 212c0-.2-.3-.2-.5 0-.2.1-.2.3-.1.5l.5-.1c.2-.1.2-.4.1-.5z"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M124 223h21.4v-5.5H124v5.6z"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M124 223h21.4v-5.5H124v5.6z"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M126.2 226.8a1 1 0 01.4 0h16.5a1.4 1.4 0 01-1-1.2c0-.6.5-1.1 1-1.3a1.7 1.7 0 01-.4 0h-16a1.4 1.4 0 01-.5 0c.6.2 1 .7 1 1.3a1.3 1.3 0 01-1 1.2"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "round",
    strokeWidth: ".4",
    d: "M126.2 226.8a1 1 0 01.4 0h16.5a1.4 1.4 0 01-1-1.2c0-.6.5-1.1 1-1.3a1.7 1.7 0 01-.4 0h-16a1.4 1.4 0 01-.5 0c.6.2 1 .7 1 1.3a1.3 1.3 0 01-1 1.2z"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M126.6 226.8h16c.6 0 1 .3 1 .7 0 .4-.4.8-1 .8h-16c-.5 0-1-.4-1-.8s.5-.8 1-.8"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M126.6 226.8h16c.6 0 1 .3 1 .7 0 .4-.4.8-1 .8h-16c-.5 0-1-.4-1-.8s.5-.8 1-.8z"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M126.6 223h16c.6 0 1 .4 1 .7 0 .4-.4.6-1 .6h-16c-.5 0-1-.2-1-.6 0-.3.5-.6 1-.6"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M126.6 223h16c.6 0 1 .4 1 .7 0 .4-.4.6-1 .6h-16c-.5 0-1-.2-1-.6 0-.3.5-.6 1-.6z"
  }), __jsx("path", {
    fill: "#005bbf",
    d: "M149.6 317.4c-1.4 0-2.8-.3-3.7-.8a8.4 8.4 0 00-3.8-.8c-1.4 0-2.7.3-3.7.8a8.3 8.3 0 01-3.8.8c-1.5 0-2.8-.3-3.7-.8a8.4 8.4 0 00-3.7-.8 8 8 0 00-3.7.8 8.3 8.3 0 01-3.8.8v2.4c1.5 0 2.8-.4 3.8-.9a8.2 8.2 0 013.7-.8c1.4 0 2.7.3 3.7.8s2.2.9 3.7.9a8.4 8.4 0 003.8-.9c1-.5 2.3-.8 3.7-.8 1.5 0 2.8.3 3.8.8s2.2.9 3.7.9v-2.4"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M149.6 317.4c-1.4 0-2.8-.3-3.7-.8a8.4 8.4 0 00-3.8-.8c-1.4 0-2.7.3-3.7.8a8.3 8.3 0 01-3.8.8c-1.5 0-2.8-.3-3.7-.8a8.4 8.4 0 00-3.7-.8 8 8 0 00-3.7.8 8.3 8.3 0 01-3.8.8v2.4c1.5 0 2.8-.4 3.8-.9a8.2 8.2 0 013.7-.8c1.4 0 2.7.3 3.7.8s2.2.9 3.7.9a8.4 8.4 0 003.8-.9c1-.5 2.3-.8 3.7-.8 1.5 0 2.8.3 3.8.8s2.2.9 3.7.9v-2.4z"
  }), __jsx("path", {
    fill: "#ccc",
    d: "M149.6 319.8a8 8 0 01-3.7-.9 8.3 8.3 0 00-3.8-.8c-1.4 0-2.7.3-3.7.8s-2.3.9-3.8.9-2.8-.4-3.7-.9a8.4 8.4 0 00-3.7-.8 8.2 8.2 0 00-3.7.8c-1 .5-2.3.9-3.8.9v2.3c1.5 0 2.8-.4 3.8-.9a8.1 8.1 0 013.7-.7c1.4 0 2.7.2 3.7.7a8.3 8.3 0 007.5 0 8.5 8.5 0 017.5.1 8.1 8.1 0 003.7.8v-2.3"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M149.6 319.8a8 8 0 01-3.7-.9 8.3 8.3 0 00-3.8-.8c-1.4 0-2.7.3-3.7.8s-2.3.9-3.8.9-2.8-.4-3.7-.9a8.4 8.4 0 00-3.7-.8 8.2 8.2 0 00-3.7.8c-1 .5-2.3.9-3.8.9v2.3c1.5 0 2.8-.4 3.8-.9a8.1 8.1 0 013.7-.7c1.4 0 2.7.2 3.7.7a8.3 8.3 0 007.5 0 8.5 8.5 0 017.5.1 8.1 8.1 0 003.7.8v-2.3"
  }), __jsx("path", {
    fill: "#005bbf",
    d: "M149.6 322a7 7 0 01-3.7-.8 8.3 8.3 0 00-3.8-.7c-1.4 0-2.7.2-3.7.7-1 .6-2.3.9-3.8.9s-2.8-.4-3.7-.9a8.4 8.4 0 00-3.7-.8 8 8 0 00-3.7.8c-1 .5-2.3.9-3.8.9v2.3c1.5 0 2.8-.3 3.8-.9a10.2 10.2 0 017.4 0 7 7 0 003.7.9 8.4 8.4 0 003.8-.8c1-.5 2.3-.8 3.7-.8 1.5 0 2.8.3 3.8.8s2.2.8 3.7.8V322"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M149.6 322a7 7 0 01-3.7-.8 8.3 8.3 0 00-3.8-.7c-1.4 0-2.7.2-3.7.7-1 .6-2.3.9-3.8.9s-2.8-.4-3.7-.9a8.4 8.4 0 00-3.7-.8 8 8 0 00-3.7.8c-1 .5-2.3.9-3.8.9v2.3c1.5 0 2.8-.3 3.8-.9a10.2 10.2 0 017.4 0 7 7 0 003.7.9 8.4 8.4 0 003.8-.8c1-.5 2.3-.8 3.7-.8 1.5 0 2.8.3 3.8.8s2.2.8 3.7.8V322"
  }), __jsx("path", {
    fill: "#ccc",
    d: "M149.6 326.7a8 8 0 01-3.7-.8c-1-.5-2.3-.8-3.7-.8a8.4 8.4 0 00-3.8.8c-1 .5-2.3.8-3.8.8a7 7 0 01-3.7-.9 8.4 8.4 0 00-3.7-.7c-1.4 0-2.7.3-3.7.8s-2.3.8-3.8.8v-2.3a8.3 8.3 0 003.8-.9 10.2 10.2 0 017.4 0 8 8 0 003.7.9 8.4 8.4 0 003.8-.8c1-.5 2.3-.8 3.8-.8 1.4 0 2.7.3 3.7.8s2.3.8 3.7.8v2.3"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M149.6 326.7a8 8 0 01-3.7-.8c-1-.5-2.3-.8-3.7-.8a8.4 8.4 0 00-3.8.8c-1 .5-2.3.8-3.8.8a7 7 0 01-3.7-.9 8.4 8.4 0 00-3.7-.7c-1.4 0-2.7.3-3.7.8s-2.3.8-3.8.8v-2.3a8.3 8.3 0 003.8-.9 10.2 10.2 0 017.4 0 8 8 0 003.7.9 8.4 8.4 0 003.8-.8c1-.5 2.3-.8 3.8-.8 1.4 0 2.7.3 3.7.8s2.3.8 3.7.8v2.3"
  }), __jsx("path", {
    fill: "#005bbf",
    d: "M149.6 329a8.1 8.1 0 01-3.7-.8c-1-.5-2.3-.8-3.7-.8a8.4 8.4 0 00-3.8.8c-1 .5-2.3.8-3.8.8a7 7 0 01-3.7-.9 8.4 8.4 0 00-3.7-.7c-1.4 0-2.7.3-3.7.8s-2.3.8-3.8.8v-2.3a8.3 8.3 0 003.8-.8c1-.5 2.3-.8 3.7-.8 1.4 0 2.7.3 3.7.7a8.4 8.4 0 007.5 0c1-.4 2.3-.7 3.8-.7 1.4 0 2.7.3 3.7.8s2.2.8 3.7.8v2.3"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M149.6 329a8.1 8.1 0 01-3.7-.8c-1-.5-2.3-.8-3.7-.8a8.4 8.4 0 00-3.8.8c-1 .5-2.3.8-3.8.8a7 7 0 01-3.7-.9 8.4 8.4 0 00-3.7-.7c-1.4 0-2.7.3-3.7.8s-2.3.8-3.8.8v-2.3a8.3 8.3 0 003.8-.8c1-.5 2.3-.8 3.7-.8 1.4 0 2.7.3 3.7.7a8.4 8.4 0 007.5 0c1-.4 2.3-.7 3.8-.7 1.4 0 2.7.3 3.7.8s2.2.8 3.7.8v2.3z"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M126.2 308l.2.5c0 1.5-1.3 2.6-2.7 2.6h22a2.7 2.7 0 01-2.7-2.6v-.5a1.3 1.3 0 01-.3 0h-16a1.4 1.4 0 01-.5 0"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "round",
    strokeWidth: ".4",
    d: "M126.2 308l.2.5c0 1.5-1.3 2.6-2.7 2.6h22a2.7 2.7 0 01-2.7-2.6v-.5a1.3 1.3 0 01-.3 0h-16a1.4 1.4 0 01-.5 0z"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M126.6 306.5h16c.6 0 1 .3 1 .8 0 .4-.4.7-1 .7h-16c-.5 0-1-.3-1-.8 0-.4.5-.7 1-.7"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M126.6 306.5h16c.6 0 1 .3 1 .8 0 .4-.4.7-1 .7h-16c-.5 0-1-.3-1-.8 0-.4.5-.7 1-.7z"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M123.7 316.7h22V311h-22v5.6z"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M123.7 316.7h22V311h-22v5.6z"
  }), __jsx("path", {
    fill: "#ad1519",
    d: "M122 286.7c-2.2 1.2-3.7 2.5-3.4 3.2 0 .6.8 1 1.8 1.6 1.5 1.1 2.5 3 1.7 4a5.5 5.5 0 00-.1-8.8"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M122 286.7c-2.2 1.2-3.7 2.5-3.4 3.2 0 .6.8 1 1.8 1.6 1.5 1.1 2.5 3 1.7 4a5.5 5.5 0 00-.1-8.8z"
  }), __jsx("path", {
    fill: "#ccc",
    d: "M126.8 305.6h15.6V229h-15.6v76.5z"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M138 229.2v76.3m1.7-76.3v76.3m-12.9 0h15.6v-76.4h-15.6v76.5z"
  }), __jsx("path", {
    fill: "#ad1519",
    d: "M158.4 257.7a49.6 49.6 0 00-23.3-2c-9.4 1.6-16.5 5.3-15.9 8.4v.2l-3.5-8.2c-.6-3.3 7.2-7.5 17.6-9.2a43 43 0 019.2-.7c6.6 0 12.4.8 15.8 2.1v9.4"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "round",
    strokeWidth: ".4",
    d: "M158.4 257.7a49.6 49.6 0 00-23.3-2c-9.4 1.6-16.5 5.3-15.9 8.4v.2l-3.5-8.2c-.6-3.3 7.2-7.5 17.6-9.2a43 43 0 019.2-.7c6.6 0 12.4.8 15.8 2.1v9.4"
  }), __jsx("path", {
    fill: "#ad1519",
    d: "M126.8 267.3c-4.3-.3-7.3-1.4-7.6-3.2-.3-1.5 1.2-3 3.8-4.5 1.2.1 2.5.3 3.8.3v7.4"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M126.8 267.3c-4.3-.3-7.3-1.4-7.6-3.2-.3-1.5 1.2-3 3.8-4.5 1.2.1 2.5.3 3.8.3v7.4"
  }), __jsx("path", {
    fill: "#ad1519",
    d: "M142.5 261.5c2.7.4 4.7 1 5.7 1.9l.1.2c.5 1-1.9 3-5.9 5.4v-7.5"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M142.5 261.5c2.7.4 4.7 1 5.7 1.9l.1.2c.5 1-1.9 3-5.9 5.4v-7.5"
  }), __jsx("path", {
    fill: "#ad1519",
    d: "M117.1 282c-.4-1.2 3.8-3.6 9.8-5.8l7.8-3.2c8.3-3.7 14.4-7.9 13.6-9.4v-.2c.4.4 1 8 1 8 .8 1.3-4.8 5.5-12.4 9.1-2.5 1.2-7.6 3-10 4-4.4 1.4-8.7 4.3-8.3 5.3l-1.5-7.7"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "round",
    strokeWidth: ".4",
    d: "M117.1 282c-.4-1.2 3.8-3.6 9.8-5.8l7.8-3.2c8.3-3.7 14.4-7.9 13.6-9.4v-.2c.4.4 1 8 1 8 .8 1.3-4.8 5.5-12.4 9.1-2.5 1.2-7.6 3-10 4-4.4 1.4-8.7 4.3-8.3 5.3l-1.5-7.7z"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M125.8 254c1.9-.6 3.1-1.5 2.5-3-.4-1-1.4-1-2.8-.6l-2.6 1 2.3 5.8.8-.3.8-.3-1-2.5zm-1.2-2.7l.7-.3c.5-.2 1.2.1 1.4.8.2.5.2 1-.5 1.5a4.4 4.4 0 01-.6.3l-1-2.3m7.3-2.5l-.9.3h-.8l1.3 6.1 4.3-.8-.2-.4v-.4l-2.5.6-1.2-5.3m8.4 5.2c.8-2.2 1.7-4.3 2.7-6.4a5.3 5.3 0 01-1 0 54.8 54.8 0 01-1.8 4.6l-2.4-4.3-1 .1h-1a131.4 131.4 0 013.5 6h1m8.8-4.7l.4-.9a3.4 3.4 0 00-1.7-.6c-1.7-.1-2.7.6-2.8 1.7-.2 2.1 3.2 2 3 3.4 0 .6-.7.9-1.4.8-.8 0-1.4-.5-1.4-1.2h-.3a7.3 7.3 0 01-.4 1.1 4 4 0 001.8.6c1.7.2 3-.5 3.2-1.7.2-2-3.3-2.1-3.1-3.4 0-.5.4-.8 1.3-.7.7 0 1 .4 1.2.9h.2"
  }), __jsx("path", {
    fill: "#ad1519",
    d: "M277.9 211.6s-.7.8-1.3.9c-.5 0-1.1-.5-1.1-.5s-.5.5-1 .6c-.6.1-1.4-.6-1.4-.6l-1 1c-.6 0-1.1-.3-1.1-.3s-.3.4-.7.6h-.4l-.6-.4-.7-.7-.5-.3-.4-1v-.5c-.1-.6.8-1.4 2.2-1.7a3.9 3.9 0 012 0c.5-.5 1.7-.8 3-.8s2.4.3 3 .7a5.5 5.5 0 012.9-.7c1.3 0 2.5.3 3 .8.5-.2 1.2-.2 2 0 1.4.3 2.3 1 2.2 1.7v.5l-.4 1-.6.3-.6.7-.6.3s-.3.2-.4 0c-.4-.1-.7-.5-.7-.5s-.6.4-1 .2c-.5-.2-1-1-1-1s-.9.8-1.4.7c-.6-.1-1-.6-1-.6s-.7.6-1.2.5c-.5-.1-1.2-.9-1.2-.9"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M277.9 211.6s-.7.8-1.3.9c-.5 0-1.1-.5-1.1-.5s-.5.5-1 .6c-.6.1-1.4-.6-1.4-.6l-1 1c-.6 0-1.1-.3-1.1-.3s-.3.4-.7.6h-.4l-.6-.4-.7-.7-.5-.3-.4-1v-.5c-.1-.6.8-1.4 2.2-1.7a3.9 3.9 0 012 0c.5-.5 1.7-.8 3-.8s2.4.3 3 .7a5.5 5.5 0 012.9-.7c1.3 0 2.5.3 3 .8.5-.2 1.2-.2 2 0 1.4.3 2.3 1 2.2 1.7v.5l-.4 1-.6.3-.6.7-.6.3s-.3.2-.4 0c-.4-.1-.7-.5-.7-.5s-.6.4-1 .2c-.5-.2-1-1-1-1s-.9.8-1.4.7c-.6-.1-1-.6-1-.6s-.7.6-1.2.5c-.5-.1-1.2-.9-1.2-.9z"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M276.5 207.6c0-1 .6-2 1.3-2 .8 0 1.3 1 1.3 2s-.5 1.8-1.3 1.8c-.7 0-1.3-.8-1.3-1.9"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M276.5 207.6c0-1 .6-2 1.3-2 .8 0 1.3 1 1.3 2s-.5 1.8-1.3 1.8c-.7 0-1.3-.8-1.3-1.9z"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M277.3 207.6c0-1 .2-1.8.5-1.8.4 0 .7.8.7 1.8s-.3 1.7-.6 1.7c-.4 0-.6-.8-.6-1.8"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M277.3 207.6c0-1 .2-1.8.5-1.8.4 0 .7.8.7 1.8s-.3 1.7-.6 1.7c-.4 0-.6-.8-.6-1.8z"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M271 215.3a4.5 4.5 0 00-.5-1 27.4 27.4 0 0114.8 0l-.6.8a5.2 5.2 0 00-.3.8 22.9 22.9 0 00-6.6-.8c-2.6 0-5.2.3-6.6.8l-.2-.6"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M271 215.3a4.5 4.5 0 00-.5-1 27.4 27.4 0 0114.8 0l-.6.8a5.2 5.2 0 00-.3.8 22.9 22.9 0 00-6.6-.8c-2.6 0-5.2.3-6.6.8l-.2-.6"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M277.8 217.7c2.4 0 5-.4 5.9-.6.6-.2 1-.5 1-.8 0-.2-.2-.3-.4-.4a24.1 24.1 0 00-6.5-.8c-2.5 0-5 .3-6.4.8-.2 0-.3.2-.4.3 0 .4.3.7 1 .9 1 .2 3.5.6 5.8.6"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M277.8 217.7c2.4 0 5-.4 5.9-.6.6-.2 1-.5 1-.8 0-.2-.2-.3-.4-.4a24.1 24.1 0 00-6.5-.8c-2.5 0-5 .3-6.4.8-.2 0-.3.2-.4.3 0 .4.3.7 1 .9 1 .2 3.5.6 5.8.6z"
  }), __jsx("path", {
    fill: "#fff",
    d: "M283.5 208.4c0-.2.2-.4.4-.4s.5.2.5.4-.2.4-.5.4a.4.4 0 01-.4-.4"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".2",
    d: "M283.5 208.4c0-.2.2-.4.4-.4s.5.2.5.4-.2.4-.5.4a.4.4 0 01-.4-.4zm-.2-1.4a.4.4 0 01.4-.4c.2 0 .4.1.4.4s-.2.4-.4.4a.4.4 0 01-.4-.4zm-1.1-1c0-.2.2-.3.4-.3s.4.1.4.4c0 .2-.2.4-.4.4a.4.4 0 01-.4-.5zm-1.4-.4c0-.2.2-.4.4-.4.3 0 .5.2.5.4s-.2.4-.4.4-.5-.2-.5-.4zm-1.4 0c0-.2.2-.3.5-.3s.4.1.4.4c0 .2-.2.4-.4.4a.4.4 0 01-.5-.4z"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeLinecap: "round",
    strokeWidth: ".3",
    d: "M287.8 211.2l.2-1a2.7 2.7 0 00-2.7-2.8c-.5 0-1 .1-1.3.3"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M283 209.2l.2-.8c0-1.1-1.1-2-2.5-2-.6 0-1.2.2-1.6.4"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".2",
    d: "M288.2 210c0-.3.2-.5.4-.5s.4.2.4.4c0 .3-.2.4-.4.4s-.4-.1-.4-.4zm-.2-1.6c0-.2.2-.4.4-.4a.4.4 0 01.5.4c0 .2-.2.4-.4.4-.3 0-.5-.2-.5-.4zm-1-1.1a.4.4 0 01.5-.4c.2 0 .4.1.4.4a.4.4 0 01-.4.4.4.4 0 01-.5-.4zm-1.3-.7c0-.2.2-.4.5-.4s.4.2.4.4c0 .3-.2.5-.4.5a.4.4 0 01-.5-.5zm-1.4.1c0-.2.2-.4.5-.4s.4.2.4.4-.2.4-.4.4-.5-.2-.5-.4z"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M285.3 213.2l-.5-.5s-.6.3-1.3.2c-.6 0-.9-1-.9-1s-.7.7-1.3.7c-.7 0-1-.6-1-.6s-.7.5-1.3.4c-.6 0-1.2-.8-1.2-.8s-.6.8-1.2.8c-.6.1-1-.5-1-.5s-.3.6-1.1.7-1.4-.6-1.4-.6-.4.7-1 1c-.5 0-1.2-.4-1.2-.4l-.1.5-.3.1.1.5a27 27 0 017.3-.9c2.8 0 5.4.4 7.3 1l.2-.6"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M285.3 213.2l-.5-.5s-.6.3-1.3.2c-.6 0-.9-1-.9-1s-.7.7-1.3.7c-.7 0-1-.6-1-.6s-.7.5-1.3.4c-.6 0-1.2-.8-1.2-.8s-.6.8-1.2.8c-.6.1-1-.5-1-.5s-.3.6-1.1.7-1.4-.6-1.4-.6-.4.7-1 1c-.5 0-1.2-.4-1.2-.4l-.1.5-.3.1.1.5a27 27 0 017.3-.9c2.8 0 5.4.4 7.3 1l.2-.6z"
  }), __jsx("path", {
    fill: "#fff",
    d: "M271.3 208.4c0-.2.2-.4.4-.4s.4.2.4.4a.4.4 0 01-.4.4.4.4 0 01-.4-.4"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".2",
    d: "M271.3 208.4c0-.2.2-.4.4-.4s.4.2.4.4a.4.4 0 01-.4.4.4.4 0 01-.4-.4zm.2-1.4c0-.3.2-.4.4-.4s.5.1.5.4-.2.4-.5.4a.4.4 0 01-.4-.4zm1-1c0-.2.3-.3.5-.3s.5.1.5.4c0 .2-.2.4-.5.4a.4.4 0 01-.4-.5zm1.4-.4c0-.2.2-.4.5-.4s.4.2.4.4-.2.4-.4.4-.5-.2-.5-.4zm1.4 0c0-.2.2-.3.5-.3.2 0 .4.1.4.4 0 .2-.2.4-.4.4a.4.4 0 01-.5-.4z"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeLinecap: "round",
    strokeWidth: ".3",
    d: "M267.8 211.2a2.8 2.8 0 01-.2-1 2.7 2.7 0 012.7-2.8c.5 0 1 .1 1.4.3"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M272.7 209.2a1.7 1.7 0 01-.3-.8c0-1 1.2-2 2.6-2a3 3 0 011.5.4"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".2",
    d: "M266.6 210c0-.3.2-.5.4-.5.3 0 .4.2.4.4a.4.4 0 01-.4.4c-.2 0-.4-.1-.4-.4zm.1-1.6c0-.2.3-.4.5-.4s.4.2.4.4-.2.4-.4.4-.4-.2-.4-.4zm1-1.1c0-.3.2-.4.5-.4a.4.4 0 01.4.4.4.4 0 01-.4.4.4.4 0 01-.5-.4zm1.3-.7c0-.2.2-.4.5-.4.2 0 .4.2.4.4 0 .3-.2.5-.4.5a.4.4 0 01-.5-.5zm1.4.1c0-.2.2-.4.5-.4a.4.4 0 01.4.4.4.4 0 01-.4.4c-.3 0-.5-.2-.5-.4z"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M277.9 210.7h.2a1 1 0 000 .4c0 .6.5 1 1 1a1 1 0 001-.7l.2-.3v.4c.1.5.6.8 1.1.8.6 0 1-.4 1-1a.7.7 0 000-.1l.4-.4.2.5a1 1 0 00-.1.4 1 1 0 001 1c.4 0 .7-.2.9-.5l.2-.2v.3c0 .3.1.6.4.7 0 0 .4 0 1-.4s.7-.7.7-.7v.4s-.5.8-1 1c-.2.2-.5.4-.8.3-.3 0-.6-.3-.7-.6a1.5 1.5 0 01-.7.2c-.6 0-1.2-.3-1.4-.8a1.5 1.5 0 01-1.1.5c-.5 0-1-.2-1.2-.6a1.5 1.5 0 01-1 .4c-.6 0-1-.2-1.4-.6-.2.4-.7.6-1.2.6-.4 0-.8-.1-1-.4a1.6 1.6 0 01-1.3.6c-.4 0-.8-.2-1.1-.5-.2.5-.8.8-1.4.8-.2 0-.5 0-.7-.2-.1.3-.4.6-.7.6-.3 0-.6 0-.9-.2a4.2 4.2 0 01-1-1l.1-.5.8.7c.5.4.9.4.9.4.3 0 .4-.4.4-.7v-.3l.2.2c.2.3.5.5.9.5a1 1 0 001-1 1 1 0 000-.4v-.5l.4.4v.1c0 .6.5 1 1 1 .6 0 1-.3 1.1-.9v-.3l.2.3c.2.4.6.7 1 .7.6 0 1.1-.4 1.1-1a1 1 0 000-.3h.2"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M277.9 210.7h.2a1 1 0 000 .4c0 .6.5 1 1 1a1 1 0 001-.7l.2-.3v.4c.1.5.6.8 1.1.8.6 0 1-.4 1-1a.7.7 0 000-.1l.4-.4.2.5a1 1 0 00-.1.4 1 1 0 001 1c.4 0 .7-.2.9-.5l.2-.2v.3c0 .3.1.6.4.7 0 0 .4 0 1-.4s.7-.7.7-.7v.4s-.5.8-1 1c-.2.2-.5.4-.8.3-.3 0-.6-.3-.7-.6a1.5 1.5 0 01-.7.2c-.6 0-1.2-.3-1.4-.8a1.5 1.5 0 01-1.1.5c-.5 0-1-.2-1.2-.6a1.5 1.5 0 01-1 .4c-.6 0-1-.2-1.4-.6-.2.4-.7.6-1.2.6-.4 0-.8-.1-1-.4a1.6 1.6 0 01-1.3.6c-.4 0-.8-.2-1.1-.5-.2.5-.8.8-1.4.8-.2 0-.5 0-.7-.2-.1.3-.4.6-.7.6-.3 0-.6 0-.9-.2a4.2 4.2 0 01-1-1l.1-.5.8.7c.5.4.9.4.9.4.3 0 .4-.4.4-.7v-.3l.2.2c.2.3.5.5.9.5a1 1 0 001-1 1 1 0 000-.4v-.5l.4.4v.1c0 .6.5 1 1 1 .6 0 1-.3 1.1-.9v-.3l.2.3c.2.4.6.7 1 .7.6 0 1.1-.4 1.1-1a1 1 0 000-.3h.2z"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M277.8 213.3c-2.9 0-5.5.4-7.3 1l-.3-.2.1-.3c2-.6 4.6-1 7.5-1 3 0 5.7.4 7.6 1 0 0 .2.2.1.3l-.3.2a27 27 0 00-7.4-1"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M277.8 213.3c-2.9 0-5.5.4-7.3 1l-.3-.2.1-.3c2-.6 4.6-1 7.5-1 3 0 5.7.4 7.6 1 0 0 .2.2.1.3l-.3.2a27 27 0 00-7.4-1z"
  }), __jsx("path", {
    fill: "#fff",
    d: "M275 214.4c0-.3.2-.4.5-.4a.4.4 0 01.4.4.4.4 0 01-.4.4c-.3 0-.5-.2-.5-.4"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M275 214.4c0-.3.2-.4.5-.4a.4.4 0 01.4.4.4.4 0 01-.4.4c-.3 0-.5-.2-.5-.4z"
  }), __jsx("path", {
    fill: "#ad1519",
    d: "M277.9 214.5h-1c-.1 0-.3 0-.3-.3l.3-.3h2a.3.3 0 01.2.3.3.3 0 01-.3.3h-1"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M277.9 214.5h-1c-.1 0-.3 0-.3-.3l.3-.3h2a.3.3 0 01.2.3.3.3 0 01-.3.3h-1"
  }), __jsx("path", {
    fill: "#058e6e",
    d: "M273.2 214.9h-.6a.3.3 0 01-.4-.2.3.3 0 01.3-.3l.6-.1.7-.1c.2 0 .3 0 .4.2a.3.3 0 01-.3.4h-.7"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M273.2 214.9h-.6a.3.3 0 01-.4-.2.3.3 0 01.3-.3l.6-.1.7-.1c.2 0 .3 0 .4.2a.3.3 0 01-.3.4h-.7"
  }), __jsx("path", {
    fill: "#ad1519",
    d: "M270.5 215.3l.3-.4h.7l-.4.6-.6-.2"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M270.5 215.3l.3-.4h.7l-.4.6-.6-.2"
  }), __jsx("path", {
    fill: "#fff",
    d: "M279.8 214.4c0-.3.2-.4.4-.4.3 0 .5.1.5.4 0 .2-.2.4-.5.4a.4.4 0 01-.4-.4"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M279.8 214.4c0-.3.2-.4.4-.4.3 0 .5.1.5.4 0 .2-.2.4-.5.4a.4.4 0 01-.4-.4z"
  }), __jsx("path", {
    fill: "#058e6e",
    d: "M282.5 214.9h.7a.3.3 0 00.3-.2.3.3 0 00-.2-.3l-.7-.1-.7-.1c-.2 0-.3 0-.4.2 0 .2.1.3.3.4h.7"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M282.5 214.9h.7a.3.3 0 00.3-.2.3.3 0 00-.2-.3l-.7-.1-.7-.1c-.2 0-.3 0-.4.2 0 .2.1.3.3.4h.7"
  }), __jsx("path", {
    fill: "#ad1519",
    d: "M285.1 215.4l-.2-.5h-.7l.3.6.6-.1"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M285.1 215.4l-.2-.5h-.7l.3.6.6-.1"
  }), __jsx("path", {
    fill: "#ad1519",
    d: "M277.8 217.1a25 25 0 01-6-.6 25.4 25.4 0 016-.7c2.4 0 4.5.3 6.1.7-1.6.4-3.7.6-6 .6"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "round",
    strokeWidth: ".3",
    d: "M277.8 217.1a25 25 0 01-6-.6 25.4 25.4 0 016-.7c2.4 0 4.5.3 6.1.7-1.6.4-3.7.6-6 .6z"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M285.2 212l-.1-.3c-.2 0-.3 0-.4.2l.1.4c.2 0 .3 0 .4-.3"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M285.2 212l-.1-.3c-.2 0-.3 0-.4.2l.1.4c.2 0 .3 0 .4-.3z"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M280.6 211.2c0-.2-.1-.4-.3-.4 0 0-.2.1-.2.3 0 .2 0 .4.2.4l.3-.3"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M280.6 211.2c0-.2-.1-.4-.3-.4 0 0-.2.1-.2.3 0 .2 0 .4.2.4l.3-.3z"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M275.2 211.2c0-.2 0-.4.2-.4l.3.3-.2.4c-.2 0-.3-.2-.3-.3"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M275.2 211.2c0-.2 0-.4.2-.4l.3.3-.2.4c-.2 0-.3-.2-.3-.3z"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M270.5 212l.1-.3c.2 0 .3 0 .4.2l-.1.4c-.2 0-.3 0-.4-.3"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M270.5 212l.1-.3c.2 0 .3 0 .4.2l-.1.4c-.2 0-.3 0-.4-.3z"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M277.8 208.5l-.8.5.6 1.3.2.1.3-.1.6-1.3-.9-.5"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M277.8 208.5l-.8.5.6 1.3.2.1.3-.1.6-1.3-.9-.5"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M276 210.5l.4.5 1.3-.4.1-.2-.1-.2-1.3-.3-.4.6"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M276 210.5l.4.5 1.3-.4.1-.2-.1-.2-1.3-.3-.4.6"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M279.6 210.5l-.3.5-1.3-.4-.1-.2v-.2l1.4-.3.4.6"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M279.6 210.5l-.3.5-1.3-.4-.1-.2v-.2l1.4-.3.4.6"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M272.5 209l-.7.7.9 1 .2.1.2-.1.2-1.3-.8-.3"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M272.5 209l-.7.7.9 1 .2.1.2-.1.2-1.3-.8-.3"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M271.1 211.2l.5.5 1.2-.6v-.2l-.1-.2-1.3-.1-.3.6"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M271.1 211.2l.5.5 1.2-.6v-.2l-.1-.2-1.3-.1-.3.6"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M274.7 210.5l-.3.6h-1.3l-.2-.2.1-.3 1.2-.6.5.5"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M274.7 210.5l-.3.6h-1.3l-.2-.2.1-.3 1.2-.6.5.5"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M269.8 211.4v.6l-1.4.2-.2-.1v-.2l1-.9.6.4"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M269.8 211.4v.6l-1.4.2-.2-.1v-.2l1-.9.6.4"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M272.4 210.9c0-.3.2-.5.5-.5a.5.5 0 01.5.5.5.5 0 01-.5.4.5.5 0 01-.5-.4"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M272.4 210.9c0-.3.2-.5.5-.5a.5.5 0 01.5.5.5.5 0 01-.5.4.5.5 0 01-.5-.4z"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M283.2 209l.7.7-.9 1-.2.1-.1-.1-.3-1.3.8-.3"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M283.2 209l.7.7-.9 1-.2.1-.1-.1-.3-1.3.8-.3"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M284.6 211.2l-.5.5-1.2-.6v-.2l.1-.2 1.3-.1.3.6"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M284.6 211.2l-.5.5-1.2-.6v-.2l.1-.2 1.3-.1.3.6"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M281 210.5l.3.6h1.3l.2-.2-.1-.3-1.2-.6-.5.5"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M281 210.5l.3.6h1.3l.2-.2-.1-.3-1.2-.6-.5.5"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M285.7 211.4v.6l1.4.2.2-.1v-.2l-1-.9-.6.4"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M285.7 211.4v.6l1.4.2.2-.1v-.2l-1-.9-.6.4"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M277.4 210.4c0-.2.2-.4.5-.4.2 0 .4.2.4.4 0 .3-.2.5-.4.5a.5.5 0 01-.5-.5"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M277.4 210.4c0-.2.2-.4.5-.4.2 0 .4.2.4.4 0 .3-.2.5-.4.5a.5.5 0 01-.5-.5z"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M282.3 210.9c0-.3.3-.5.5-.5.3 0 .5.2.5.5s-.2.4-.5.4a.5.5 0 01-.5-.4"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M282.3 210.9c0-.3.3-.5.5-.5.3 0 .5.2.5.5s-.2.4-.5.4a.5.5 0 01-.5-.4z"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M277 205.4c0-.5.4-.8.8-.8s1 .3 1 .8-.5.8-1 .8a.9.9 0 01-.8-.8"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M278.5 205.1v.6H277v-.6h.4v-1.3h-.5v-.5h.5v-.6h.6v.6h.6v.6h-.6v1.2h.4"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M278.5 205.1v.6H277v-.6h.4v-1.3h-.5v-.5h.5v-.6h.6v.6h.6v.6h-.6v1.2h.4z"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M279 205.1v.6h-2.4v-.6h1v-1.3h-.7v-.5h.6v-.6h.6v.6h.6v.6h-.6v1.2h1"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M278.1 204.6c.4 0 .6.4.6.8 0 .5-.4.8-.9.8a.9.9 0 01-.8-.8c0-.4.2-.7.6-.8"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M268 212.2l-.6-.7a2.3 2.3 0 00-.7-.3c0-.1.3-.3.6-.3.2 0 .3 0 .4.2v-.2s.3 0 .4.3v1"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M268 212.2l-.6-.7a2.3 2.3 0 00-.7-.3c0-.1.3-.3.6-.3.2 0 .3 0 .4.2v-.2s.3 0 .4.3v1z"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M268 212c.1-.2.4-.2.5 0 .2.1.3.3.1.5l-.5-.1c-.1-.1-.2-.4 0-.5"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M268 212c.1-.2.4-.2.5 0 .2.1.3.3.1.5l-.5-.1c-.1-.1-.2-.4 0-.5z"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M287.5 212.2l.6-.7c.2-.2.7-.3.7-.3 0-.1-.3-.3-.6-.3a.6.6 0 00-.4.2v-.2s-.3 0-.4.3v.7l.1.3"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M287.5 212.2l.6-.7c.2-.2.7-.3.7-.3 0-.1-.3-.3-.6-.3a.6.6 0 00-.4.2v-.2s-.3 0-.4.3v.7l.1.3z"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M287.5 212c-.1-.2-.3-.2-.5 0-.2.1-.2.3-.1.5l.5-.1c.2-.1.2-.4.1-.5"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M287.5 212c-.1-.2-.3-.2-.5 0-.2.1-.2.3-.1.5l.5-.1c.2-.1.2-.4.1-.5z"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M267.2 223h21.4v-5.5h-21.4v5.6z"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M267.2 223h21.4v-5.5h-21.4v5.6z"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M286.3 226.8a1 1 0 00-.4 0h-16.5c.6-.2 1-.7 1-1.2 0-.6-.4-1.1-1-1.3h17-.1c-.6.2-1 .7-1 1.3 0 .5.4 1 1 1.2"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "round",
    strokeWidth: ".4",
    d: "M286.3 226.8a1 1 0 00-.4 0h-16.5c.6-.2 1-.7 1-1.2 0-.6-.4-1.1-1-1.3h17-.1c-.6.2-1 .7-1 1.3 0 .5.4 1 1 1.2z"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M269.9 226.8h16c.6 0 1 .3 1 .7 0 .4-.4.8-1 .8h-16c-.6 0-1-.4-1-.8s.5-.8 1-.8"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M269.9 226.8h16c.6 0 1 .3 1 .7 0 .4-.4.8-1 .8h-16c-.6 0-1-.4-1-.8s.5-.8 1-.8z"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M269.9 223h16c.6 0 1 .4 1 .7 0 .4-.4.6-1 .6h-16c-.6 0-1-.2-1-.6 0-.3.4-.6 1-.6"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M269.9 223h16c.6 0 1 .4 1 .7 0 .4-.4.6-1 .6h-16c-.6 0-1-.2-1-.6 0-.3.4-.6 1-.6z"
  }), __jsx("path", {
    fill: "#005bbf",
    d: "M263 317.4c1.4 0 2.7-.3 3.7-.8a8.4 8.4 0 013.7-.8c1.4 0 2.8.3 3.8.8s2.3.8 3.7.8c1.5 0 2.8-.3 3.8-.8a8.4 8.4 0 013.6-.8 8 8 0 013.7.8c1 .5 2.4.8 3.8.8v2.4a8.3 8.3 0 01-3.8-.9 8.2 8.2 0 00-3.7-.8c-1.4 0-2.7.3-3.6.8-1 .5-2.3.9-3.8.9a8 8 0 01-3.7-.9 8.4 8.4 0 00-3.8-.8 8.3 8.3 0 00-3.7.8c-1 .5-2.3.9-3.8.9v-2.4"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M263 317.4c1.4 0 2.7-.3 3.7-.8a8.4 8.4 0 013.7-.8c1.4 0 2.8.3 3.8.8s2.3.8 3.7.8c1.5 0 2.8-.3 3.8-.8a8.4 8.4 0 013.6-.8 8 8 0 013.7.8c1 .5 2.4.8 3.8.8v2.4a8.3 8.3 0 01-3.8-.9 8.2 8.2 0 00-3.7-.8c-1.4 0-2.7.3-3.6.8-1 .5-2.3.9-3.8.9a8 8 0 01-3.7-.9 8.4 8.4 0 00-3.8-.8 8.3 8.3 0 00-3.7.8c-1 .5-2.3.9-3.8.9v-2.4z"
  }), __jsx("path", {
    fill: "#ccc",
    d: "M263 319.8c1.4 0 2.7-.4 3.7-.9s2.3-.8 3.7-.8c1.4 0 2.8.3 3.8.8s2.3.9 3.7.9a8.2 8.2 0 003.8-.9 8.4 8.4 0 013.6-.8c1.5 0 2.8.3 3.7.8 1 .5 2.4.9 3.8.9v2.3a8.3 8.3 0 01-3.8-.9 8.1 8.1 0 00-3.7-.7c-1.4 0-2.7.2-3.6.7-1 .5-2.3.9-3.8.9a7 7 0 01-3.7-.9c-1-.4-2.3-.7-3.8-.7a8.3 8.3 0 00-3.7.7 8.1 8.1 0 01-3.8.9v-2.3"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M263 319.8c1.4 0 2.7-.4 3.7-.9s2.3-.8 3.7-.8c1.4 0 2.8.3 3.8.8s2.3.9 3.7.9a8.2 8.2 0 003.8-.9 8.4 8.4 0 013.6-.8c1.5 0 2.8.3 3.7.8 1 .5 2.4.9 3.8.9v2.3a8.3 8.3 0 01-3.8-.9 8.1 8.1 0 00-3.7-.7c-1.4 0-2.7.2-3.6.7-1 .5-2.3.9-3.8.9a7 7 0 01-3.7-.9c-1-.4-2.3-.7-3.8-.7a8.3 8.3 0 00-3.7.7 8.1 8.1 0 01-3.8.9v-2.3"
  }), __jsx("path", {
    fill: "#005bbf",
    d: "M263 322c1.4 0 2.7-.2 3.7-.8 1-.4 2.3-.7 3.7-.7 1.4 0 2.8.2 3.8.7s2.3.9 3.7.9a8.2 8.2 0 003.8-.9 8.4 8.4 0 013.6-.8 8 8 0 013.7.8c1 .5 2.4.9 3.8.9v2.3a8.3 8.3 0 01-3.8-.9 8.2 8.2 0 00-3.7-.7c-1.4 0-2.7.3-3.6.7-1 .6-2.3.9-3.8.9-1.4 0-2.8-.3-3.7-.8a8.4 8.4 0 00-3.8-.8 8.3 8.3 0 00-3.7.8c-1 .5-2.3.8-3.8.8V322"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M263 322c1.4 0 2.7-.2 3.7-.8 1-.4 2.3-.7 3.7-.7 1.4 0 2.8.2 3.8.7s2.3.9 3.7.9a8.2 8.2 0 003.8-.9 8.4 8.4 0 013.6-.8 8 8 0 013.7.8c1 .5 2.4.9 3.8.9v2.3a8.3 8.3 0 01-3.8-.9 8.2 8.2 0 00-3.7-.7c-1.4 0-2.7.3-3.6.7-1 .6-2.3.9-3.8.9-1.4 0-2.8-.3-3.7-.8a8.4 8.4 0 00-3.8-.8 8.3 8.3 0 00-3.7.8c-1 .5-2.3.8-3.8.8V322"
  }), __jsx("path", {
    fill: "#ccc",
    d: "M263 326.7a8 8 0 003.7-.8c1-.5 2.3-.8 3.7-.8 1.4 0 2.8.3 3.8.8s2.3.8 3.7.8c1.5 0 2.8-.3 3.8-.9a8.4 8.4 0 013.6-.7c1.5 0 2.8.3 3.7.8a8.3 8.3 0 003.8.8v-2.3a8.3 8.3 0 01-3.8-.9 8.2 8.2 0 00-3.7-.7c-1.4 0-2.7.3-3.6.7-1 .5-2.3.9-3.8.9-1.4 0-2.8-.3-3.7-.8a8.4 8.4 0 00-3.8-.8 8.3 8.3 0 00-3.7.8c-1 .5-2.3.8-3.8.8v2.3"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M263 326.7a8 8 0 003.7-.8c1-.5 2.3-.8 3.7-.8 1.4 0 2.8.3 3.8.8s2.3.8 3.7.8c1.5 0 2.8-.3 3.8-.9a8.4 8.4 0 013.6-.7c1.5 0 2.8.3 3.7.8a8.3 8.3 0 003.8.8v-2.3a8.3 8.3 0 01-3.8-.9 8.2 8.2 0 00-3.7-.7c-1.4 0-2.7.3-3.6.7-1 .5-2.3.9-3.8.9-1.4 0-2.8-.3-3.7-.8a8.4 8.4 0 00-3.8-.8 8.3 8.3 0 00-3.7.8c-1 .5-2.3.8-3.8.8v2.3"
  }), __jsx("path", {
    fill: "#005bbf",
    d: "M263 329a8.1 8.1 0 003.7-.8c1-.5 2.3-.8 3.7-.8 1.4 0 2.8.3 3.8.8s2.3.8 3.7.8a8.2 8.2 0 003.8-.9 8.4 8.4 0 013.6-.7c1.5 0 2.8.3 3.7.8 1 .5 2.4.8 3.8.8v-2.3a8.3 8.3 0 01-3.8-.8 8.2 8.2 0 00-3.7-.8 8.4 8.4 0 00-3.6.7 8.2 8.2 0 01-3.8.9c-1.4 0-2.8-.3-3.7-.8-1-.5-2.3-.8-3.8-.8-1.4 0-2.7.3-3.7.8s-2.3.8-3.8.8v2.3"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M263 329a8.1 8.1 0 003.7-.8c1-.5 2.3-.8 3.7-.8 1.4 0 2.8.3 3.8.8s2.3.8 3.7.8a8.2 8.2 0 003.8-.9 8.4 8.4 0 013.6-.7c1.5 0 2.8.3 3.7.8 1 .5 2.4.8 3.8.8v-2.3a8.3 8.3 0 01-3.8-.8 8.2 8.2 0 00-3.7-.8 8.4 8.4 0 00-3.6.7 8.2 8.2 0 01-3.8.9c-1.4 0-2.8-.3-3.7-.8-1-.5-2.3-.8-3.8-.8-1.4 0-2.7.3-3.7.8s-2.3.8-3.8.8v2.3z"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M286.3 308l-.1.5c0 1.5 1.2 2.6 2.7 2.6h-22c1.5 0 2.7-1.2 2.7-2.6l-.1-.5h16.8"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "round",
    strokeWidth: ".4",
    d: "M286.3 308l-.1.5c0 1.5 1.2 2.6 2.7 2.6h-22c1.5 0 2.7-1.2 2.7-2.6l-.1-.5h16.8z"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M269.9 306.5h16c.6 0 1 .3 1 .8 0 .4-.4.7-1 .7h-16c-.6 0-1-.3-1-.8 0-.4.5-.7 1-.7"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M269.9 306.5h16c.6 0 1 .3 1 .8 0 .4-.4.7-1 .7h-16c-.6 0-1-.3-1-.8 0-.4.5-.7 1-.7z"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M266.9 316.7h22V311h-22v5.6z"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M266.9 316.7h22V311h-22v5.6z"
  }), __jsx("path", {
    fill: "#ad1519",
    d: "M290.6 286.7c2.1 1.2 3.6 2.5 3.4 3.2-.1.6-.8 1-1.8 1.6-1.6 1.1-2.5 3-1.8 4a5.5 5.5 0 01.2-8.8"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M290.6 286.7c2.1 1.2 3.6 2.5 3.4 3.2-.1.6-.8 1-1.8 1.6-1.6 1.1-2.5 3-1.8 4a5.5 5.5 0 01.2-8.8z"
  }), __jsx("path", {
    fill: "#ccc",
    d: "M270.1 305.6h15.6V229h-15.6v76.5z"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M281.4 229.1v76.3m1.8-76.3v76.3m-13 .2h15.5V229h-15.6v76.5z"
  }), __jsx("path", {
    fill: "#ad1519",
    d: "M254.2 257.7a49.6 49.6 0 0123.3-2c9.3 1.6 16.4 5.3 15.9 8.4v.2l3.5-8.2c.6-3.3-7.3-7.5-17.6-9.2a53.5 53.5 0 00-9.2-.7c-6.7 0-12.4.8-15.9 2.1v9.4"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "round",
    strokeWidth: ".4",
    d: "M254.2 257.7a49.6 49.6 0 0123.3-2c9.3 1.6 16.4 5.3 15.9 8.4v.2l3.5-8.2c.6-3.3-7.3-7.5-17.6-9.2a53.5 53.5 0 00-9.2-.7c-6.7 0-12.4.8-15.9 2.1v9.4"
  }), __jsx("path", {
    fill: "#ad1519",
    d: "M285.7 267.3c4.4-.3 7.3-1.4 7.7-3.2.2-1.5-1.2-3-3.8-4.5-1.2.1-2.5.3-3.9.3v7.4"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M285.7 267.3c4.4-.3 7.3-1.4 7.7-3.2.2-1.5-1.2-3-3.8-4.5-1.2.1-2.5.3-3.9.3v7.4"
  }), __jsx("path", {
    fill: "#ad1519",
    d: "M270 261.5a13 13 0 00-5.7 1.9v.2c-.5 1 1.8 3 5.8 5.4v-7.5"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M270 261.5a13 13 0 00-5.7 1.9v.2c-.5 1 1.8 3 5.8 5.4v-7.5"
  }), __jsx("path", {
    fill: "#ad1519",
    d: "M295.4 282c.4-1.2-3.8-3.6-9.7-5.8-2.8-1-5-2-7.8-3.2-8.3-3.7-14.4-7.9-13.6-9.4v-.2c-.4.4-1 8-1 8-.8 1.3 4.8 5.5 12.4 9.1 2.4 1.2 7.6 3 10 4 4.3 1.4 8.7 4.3 8.3 5.3l1.4-7.7"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "round",
    strokeWidth: ".4",
    d: "M295.4 282c.4-1.2-3.8-3.6-9.7-5.8-2.8-1-5-2-7.8-3.2-8.3-3.7-14.4-7.9-13.6-9.4v-.2c-.4.4-1 8-1 8-.8 1.3 4.8 5.5 12.4 9.1 2.4 1.2 7.6 3 10 4 4.3 1.4 8.7 4.3 8.3 5.3l1.4-7.7z"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M263.9 254.4c.6-2.3 1.4-4.4 2.1-6.6h-.5a5.2 5.2 0 01-.5.1 52.8 52.8 0 01-1.4 4.8c-1-1.4-2-2.7-2.7-4.1l-1 .2h-1a131.3 131.3 0 014 5.7h.5l.5-.1m6-6.6h-1a8 8 0 01-.8 0v6.2h4.2v-.7h-2.6l.1-5.5m6.8 1l2 .3v-.7l-5.8-.5v.8a19.3 19.3 0 012 0l-.4 5.6h1.6l.5-5.4m2.4 6c.3 0 .5 0 .8.2l.8.2.7-2.9.6 1.2.8 2.1 1 .2c.4 0 .7.2 1 .3l-.3-.7c-.4-1-1-1.9-1.3-2.9 1 0 1.9-.3 2.1-1.2.1-.6 0-1-.7-1.5-.4-.3-1.2-.4-1.7-.5l-2.4-.5-1.4 6m3-5.2c.7.2 1.5.3 1.5 1v.5c-.3.9-1 1.2-2 .9l.5-2.4m8 7l-.2 2 .8.5.9.5.5-7a3.4 3.4 0 01-.7-.3l-6.1 3.8.5.3.4.2 1.7-1.2 2.3 1.3zm-1.7-1.5l2-1.4-.2 2.3-1.8-1"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M182.2 192.4c0-1 1-2 2-2s2.2 1 2.2 2c0 1.1-1 2-2.1 2a2 2 0 01-2.1-2z"
  }), __jsx("path", {
    fill: "#ad1519",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M205.7 175.4c6.3 0 12 1 15.7 2.4a31.7 31.7 0 0014.6 2.3c2.7 0 6.5.8 10.3 2.4a27.3 27.3 0 017.4 4.7l-1.5 1.4-.4 3.8-4.1 4.7-2 1.8-5 3.9-2.5.2-.7 2.1-31.6-3.7-31.7 3.7-.8-2.1-2.5-.2-4.9-4-2-1.7-4.1-4.7-.5-3.8-1.5-1.4a27.6 27.6 0 017.5-4.7 26 26 0 0110.2-2.4c2 .2 4.2.1 6.6-.2a30 30 0 008-2c3.7-1.5 9-2.5 15.5-2.5z"
  }), __jsx("path", {
    fill: "#c8b100",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M206.2 217.1c-11.8 0-22.4-1.4-29.9-3.6a1.1 1.1 0 01-.8-1.2c0-.5.3-1 .8-1.2a109 109 0 0129.9-3.6c11.7 0 22.3 1.4 29.8 3.6a1.3 1.3 0 010 2.4c-7.5 2.2-18 3.6-29.8 3.6"
  }), __jsx("path", {
    fill: "#ad1519",
    d: "M206.1 215.6c-10.6 0-20.2-1.2-27.5-3.1 7.3-2 16.9-3 27.5-3.1a115 115 0 0127.6 3c-7.3 2-17 3.2-27.6 3.2"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M206.9 215.7v-6.3m-1.7 6.3v-6.3"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".2",
    d: "M203.6 215.7v-6.3m-1.6 6.3v-6.3"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M200.6 215.7v-6.3m-2.8 5.9v-5.7m1.3 5.8v-6m-3.8 5.6v-5.2m1.3 5.4v-5.6"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M192 214.8V210m1 4.7V210m1.2 5v-5m-3.4 4.7v-4.5"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".5",
    d: "M189.7 214.5v-4.2m-1.2 4.1v-4"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".6",
    d: "M186 214v-3m1.3 3.2v-3.5m-2.5 3.1V211"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".7",
    d: "M183.7 213.6v-2.3m-1.3 2v-1.8m-1.2 1.6v-1.3"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".9",
    d: "M179.8 212.8v-.7"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M213.7 215.3v-5.8m-2.9 6v-6.1m-2.1 6.2v-6.3"
  }), __jsx("path", {
    fill: "#c8b100",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M206 207.4a108 108 0 00-30 3.9c.6-.3.5-1-.3-3-1-2.5-2.4-2.4-2.4-2.4 8.3-2.5 20-4 32.8-4a123 123 0 0133 4s-1.5-.1-2.5 2.3c-.8 2-.8 2.8-.2 3-7.5-2.2-18.4-3.7-30.3-3.7"
  }), __jsx("path", {
    fill: "#c8b100",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M206.1 201.9c-12.9 0-24.5 1.5-32.8 4a1 1 0 01-1.3-.6 1 1 0 01.7-1.3 121 121 0 0133.4-4.2c13.2 0 25.2 1.7 33.5 4.2.6.2.9.8.7 1.3-.2.5-.8.8-1.3.6-8.4-2.5-20-4-32.9-4"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "round",
    strokeWidth: ".4",
    d: "M206.1 215.6c-10.6 0-20.2-1.2-27.5-3.1 7.3-2 16.9-3 27.5-3.1a115 115 0 0127.6 3c-7.3 2-17 3.2-27.6 3.2z"
  }), __jsx("path", {
    fill: "#fff",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M197 204.8c0-.5.4-1 1-1 .5 0 1 .5 1 1s-.4 1-1 1a1 1 0 01-1-1"
  }), __jsx("path", {
    fill: "#ad1519",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M206.1 205.6H203a1 1 0 010-2h6.4c.5 0 1 .5 1 1s-.5 1-1 1h-3.2"
  }), __jsx("path", {
    fill: "#058e6e",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M190.3 206.5l-2.3.2c-.6.1-1-.3-1.2-.8a1 1 0 011-1.1l2.2-.3 2.4-.3c.5 0 1 .3 1.1.9.1.5-.3 1-.9 1l-2.3.4"
  }), __jsx("path", {
    fill: "#fff",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M181 206.7c0-.6.5-1 1.1-1 .6 0 1 .4 1 1 0 .5-.4 1-1 1a1 1 0 01-1-1"
  }), __jsx("path", {
    fill: "#ad1519",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M174 208.5l1.2-1.6 3.3.4-2.6 2-1.8-.8"
  }), __jsx("path", {
    fill: "#058e6e",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M222 206.5l2.3.2c.5.1 1-.3 1.1-.8a1 1 0 00-.9-1.1l-2.2-.3-2.4-.3a1 1 0 00-1.1.9c-.1.5.3 1 .9 1l2.3.4"
  }), __jsx("path", {
    fill: "#fff",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M213.3 204.8c0-.5.4-1 1-1s1 .5 1 1-.4 1-1 1a1 1 0 01-1-1m15.8 1.9c0-.6.5-1 1-1 .6 0 1.1.4 1.1 1 0 .5-.4 1-1 1a1 1 0 01-1-1"
  }), __jsx("path", {
    fill: "#ad1519",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M238.2 208.5l-1.1-1.6-3.3.4 2.6 2 1.8-.8"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M177.3 212.8c7.4-2.1 17.6-3.4 28.8-3.4 11.3 0 21.4 1.3 28.9 3.4"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M182.3 183.8l1.4 1 2-3.2a7.4 7.4 0 01-3.6-7.2c.2-4.1 5.2-7.6 11.7-7.6 3.3 0 6.3 1 8.5 2.4 0-.6 0-1.2.2-1.8a17.4 17.4 0 00-8.7-2.1c-7.4 0-13.2 4.1-13.5 9.1a8.9 8.9 0 003 7.6l-1 1.8"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M182.3 183.8l1.4 1 2-3.2a7.4 7.4 0 01-3.6-7.2c.2-4.1 5.2-7.6 11.7-7.6 3.3 0 6.3 1 8.5 2.4 0-.6 0-1.2.2-1.8a17.4 17.4 0 00-8.7-2.1c-7.4 0-13.2 4.1-13.5 9.1a8.9 8.9 0 003 7.6l-1 1.8"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M182.4 183.8a9.3 9.3 0 01-4-7.3c0-3.2 2-6.1 5.3-8a8.5 8.5 0 00-3.4 6.8 8.9 8.9 0 003 6.7l-.9 1.8"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M182.4 183.8a9.3 9.3 0 01-4-7.3c0-3.2 2-6.1 5.3-8a8.5 8.5 0 00-3.4 6.8 8.9 8.9 0 003 6.7l-.9 1.8"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M160.1 187.1a8.8 8.8 0 01-2.3-5.9c0-1.3.3-2.6 1-3.8 2-4.2 8.4-7.2 16-7.2 2 0 4 .2 5.9.6l-1 1.4a25.5 25.5 0 00-4.9-.4c-7 0-12.8 2.7-14.5 6.3a7 7 0 00-.7 3.1 7.3 7.3 0 002.7 5.6l-2.6 4.1-1.3-1 1.7-2.8"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M160.1 187.1a8.8 8.8 0 01-2.3-5.9c0-1.3.3-2.6 1-3.8 2-4.2 8.4-7.2 16-7.2 2 0 4 .2 5.9.6l-1 1.4a25.5 25.5 0 00-4.9-.4c-7 0-12.8 2.7-14.5 6.3a7 7 0 00-.7 3.1 7.3 7.3 0 002.7 5.6l-2.6 4.1-1.3-1 1.7-2.8z"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M162.7 173.3a10.5 10.5 0 00-4 4.1 8.6 8.6 0 00-.9 3.8c0 2.3.9 4.3 2.3 5.9l-1.5 2.5a10.4 10.4 0 01-2.3-6.5c0-4 2.5-7.5 6.4-9.8"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M162.7 173.3a10.5 10.5 0 00-4 4.1 8.6 8.6 0 00-.9 3.8c0 2.3.9 4.3 2.3 5.9l-1.5 2.5a10.4 10.4 0 01-2.3-6.5c0-4 2.5-7.5 6.4-9.8z"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M206 164.4c1.7 0 3.2 1.1 3.5 2.6.3 1.4.4 2.9.4 4.5v1.1c.1 3.3.6 6.3 1.3 8.1l-5.2 5-5.2-5c.7-1.8 1.2-4.8 1.3-8.1v-1.1c0-1.6.2-3.1.4-4.5.3-1.5 1.8-2.6 3.5-2.6"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M206 164.4c1.7 0 3.2 1.1 3.5 2.6.3 1.4.4 2.9.4 4.5v1.1c.1 3.3.6 6.3 1.3 8.1l-5.2 5-5.2-5c.7-1.8 1.2-4.8 1.3-8.1v-1.1c0-1.6.2-3.1.4-4.5.3-1.5 1.8-2.6 3.5-2.6z"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M206 166c1 0 1.7.6 1.8 1.4.2 1.2.4 2.6.4 4.2v1c.1 3.2.6 6 1.2 7.7l-3.4 3.2-3.4-3.2c.7-1.7 1.1-4.5 1.2-7.7v-1a28.1 28.1 0 01.4-4.2 2 2 0 011.8-1.4"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M206 166c1 0 1.7.6 1.8 1.4.2 1.2.4 2.6.4 4.2v1c.1 3.2.6 6 1.2 7.7l-3.4 3.2-3.4-3.2c.7-1.7 1.1-4.5 1.2-7.7v-1a28.1 28.1 0 01.4-4.2 2 2 0 011.8-1.4z"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M229.7 183.8l-1.3 1-2-3.2a7.4 7.4 0 003.6-6.3 7 7 0 000-.9c-.2-4.1-5.3-7.6-11.7-7.6a15 15 0 00-8.5 2.4 23 23 0 00-.2-1.8 17.4 17.4 0 018.7-2.1c7.4 0 13.2 4.1 13.4 9.1a8.9 8.9 0 01-3 7.6l1 1.8"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M229.7 183.8l-1.3 1-2-3.2a7.4 7.4 0 003.6-6.3 7 7 0 000-.9c-.2-4.1-5.3-7.6-11.7-7.6a15 15 0 00-8.5 2.4 23 23 0 00-.2-1.8 17.4 17.4 0 018.7-2.1c7.4 0 13.2 4.1 13.4 9.1a8.9 8.9 0 01-3 7.6l1 1.8"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M229.6 183.8a9.1 9.1 0 004.1-7.3c0-3.2-2.1-6.1-5.3-8a8.5 8.5 0 013.4 6.8 8.9 8.9 0 01-3.2 6.7l1 1.8"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M229.6 183.8a9.1 9.1 0 004.1-7.3c0-3.2-2.1-6.1-5.3-8a8.5 8.5 0 013.4 6.8 8.9 8.9 0 01-3.2 6.7l1 1.8"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M252 187.1a8.8 8.8 0 002.2-5.9 8.7 8.7 0 00-.9-3.8c-2-4.2-8.4-7.2-16-7.2a29 29 0 00-6 .6l1 1.4a25.4 25.4 0 015-.4c7 0 12.8 2.7 14.4 6.3.5 1 .7 2 .7 3.1a7.3 7.3 0 01-2.6 5.6l2.5 4.1 1.3-1-1.7-2.8"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M252 187.1a8.8 8.8 0 002.2-5.9 8.7 8.7 0 00-.9-3.8c-2-4.2-8.4-7.2-16-7.2a29 29 0 00-6 .6l1 1.4a25.4 25.4 0 015-.4c7 0 12.8 2.7 14.4 6.3.5 1 .7 2 .7 3.1a7.3 7.3 0 01-2.6 5.6l2.5 4.1 1.3-1-1.7-2.8z"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M249.3 173.3a10.6 10.6 0 014 4.1 8.7 8.7 0 01.9 3.8 8.8 8.8 0 01-2.3 5.9l1.6 2.5a10.4 10.4 0 002.3-6.5c0-4-2.6-7.5-6.5-9.8"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M249.3 173.3a10.6 10.6 0 014 4.1 8.7 8.7 0 01.9 3.8 8.8 8.8 0 01-2.3 5.9l1.6 2.5a10.4 10.4 0 002.3-6.5c0-4-2.6-7.5-6.5-9.8z"
  }), __jsx("path", {
    fill: "#fff",
    d: "M204.2 181.4c0-1 .8-1.8 1.8-1.8s1.9.8 1.9 1.8-.9 1.7-1.9 1.7a1.8 1.8 0 01-1.8-1.7"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M204.2 181.4c0-1 .8-1.8 1.8-1.8s1.9.8 1.9 1.8-.9 1.7-1.9 1.7a1.8 1.8 0 01-1.8-1.7z"
  }), __jsx("path", {
    fill: "#fff",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M204.2 178c0-1 .8-1.8 1.8-1.8s1.9.8 1.9 1.8-.9 1.7-1.9 1.7a1.8 1.8 0 01-1.8-1.7m.4-3.7c0-.7.6-1.3 1.4-1.3.8 0 1.5.6 1.5 1.3 0 .8-.7 1.4-1.5 1.4s-1.4-.6-1.4-1.4m.4-3.3c0-.5.4-1 1-1s1 .5 1 1-.4 1-1 1a1 1 0 01-1-1m.2-2.8c0-.5.4-.8.8-.8.5 0 .9.3.9.8 0 .4-.4.8-.9.8a.8.8 0 01-.8-.8"
  }), __jsx("path", {
    fill: "#c8b100",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M206.2 191.8l1.2.2a4.6 4.6 0 004.5 6 4.7 4.7 0 004.4-3c.1 0 .5-1.7.7-1.7.2 0 .1 1.8.2 1.7.3 2.3 2.4 3.8 4.7 3.8a4.6 4.6 0 004.7-5l1.5-1.5.7 2a4 4 0 00-.4 1.9 4.4 4.4 0 004.5 4.2c1.6 0 3-.7 3.8-1.9l.9-1.2v1.5c0 1.5.6 2.8 2 3 0 0 1.7.1 4-1.6 2.1-1.7 3.3-3.1 3.3-3.1l.2 1.7s-1.8 2.8-3.8 4c-1 .6-2.7 1.3-4 1-1.4-.2-2.4-1.3-3-2.6a6.7 6.7 0 01-3.3 1 6.5 6.5 0 01-6.1-3.7 7 7 0 01-10.4-.3 7 7 0 01-4.6 1.8 6.9 6.9 0 01-5.7-3 6.9 6.9 0 01-5.7 3 7 7 0 01-4.7-1.8 7 7 0 01-10.4.3 6.5 6.5 0 01-6 3.7 6.7 6.7 0 01-3.4-1c-.6 1.3-1.5 2.4-3 2.7-1.2.2-2.9-.5-4-1.1-2-1.2-3.8-4-3.8-4l.2-1.7s1.2 1.4 3.4 3.1c2.2 1.8 3.9 1.6 3.9 1.6 1.4-.2 2-1.5 2-3v-1.5l1 1.2a4.6 4.6 0 003.7 2c2.5 0 4.5-2 4.5-4.3a4 4 0 00-.4-2l.8-1.9 1.5 1.5a4.4 4.4 0 000 .6c0 2.4 2 4.4 4.6 4.4 2.4 0 4.4-1.5 4.7-3.8 0 0 0-1.6.2-1.7.2 0 .6 1.7.7 1.6a4.7 4.7 0 004.5 3.1 4.6 4.6 0 004.5-6l1.2-.2"
  }), __jsx("path", {
    fill: "#fff",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M238.6 197.7c.3-.8 0-1.6-.6-1.8-.5-.2-1.2.3-1.5 1.1-.3.8 0 1.6.6 1.8.5.2 1.2-.3 1.5-1.1m-20.5-4c0-.8-.3-1.6-1-1.6-.5-.1-1 .5-1.2 1.4-.1.8.3 1.5.9 1.6.6 0 1.2-.6 1.3-1.4m-23.9 0c0-.8.4-1.6 1-1.6.6-.1 1.1.5 1.2 1.4.1.8-.3 1.5-.9 1.6-.6 0-1.1-.6-1.2-1.4m-20.6 4c-.2-.8 0-1.6.6-1.8.6-.2 1.2.3 1.5 1.1.3.8 0 1.6-.5 1.8-.6.2-1.3-.3-1.6-1.1"
  }), __jsx("path", {
    fill: "#c8b100",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M182.7 184a5.1 5.1 0 012.2 2.9s0-.3.6-.6 1-.3 1-.3l-.1 1.3-.3 2.2a7.4 7.4 0 01-.7 1.6 1.9 1.9 0 00-1.5-.4 1.8 1.8 0 00-1.2.9s-.7-.6-1.2-1.3l-1.1-2-.7-1.1s.5-.2 1.1 0c.6 0 .8.2.8.2a4.9 4.9 0 011-3.4m.4 9.8a1.8 1.8 0 01-.6-1c0-.5 0-.9.3-1.2 0 0-.9-.5-1.8-.7-.7-.2-2-.2-2.3-.2h-1l.2.5c.2.5.5.7.5.7a5 5 0 00-3 2 5.3 5.3 0 003.5 1l-.2.8v.6l1-.4c.3-.1 1.5-.5 2-1 .8-.4 1.5-1.1 1.5-1.1m2.7-.5a1.6 1.6 0 00.2-1.1 1.7 1.7 0 00-.6-1l1.4-1.3a10 10 0 012-.9l1.1-.4v.6a5.7 5.7 0 01-.2.8 5 5 0 013.4 1 5 5 0 01-2.9 2 6.4 6.4 0 00.7 1.2h-1c-.4 0-1.6 0-2.3-.2a11 11 0 01-1.8-.7"
  }), __jsx("path", {
    fill: "#ad1519",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M182.2 192.4c0-1 1-2 2-2s2.2 1 2.2 2c0 1.1-1 2-2.1 2a2 2 0 01-2.1-2"
  }), __jsx("path", {
    fill: "#c8b100",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M206.1 180.8a5.7 5.7 0 011.9 3.7s.2-.3.9-.5c.7-.3 1.2-.2 1.2-.2l-.5 1.4-.8 2.4a8.2 8.2 0 01-1 1.7 2.1 2.1 0 00-1.7-.7c-.6 0-1.2.3-1.6.7 0 0-.6-.7-1-1.7l-.8-2.4-.5-1.4 1.2.2c.7.2.9.5.9.5 0-1.4.8-2.8 1.8-3.7"
  }), __jsx("path", {
    fill: "#c8b100",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M204.6 191.8a2 2 0 01-.5-1.2c0-.5.1-1 .4-1.3 0 0-.8-.7-1.8-1-.7-.4-2-.7-2.5-.7l-1.2-.2.2.6.4.9a5.9 5.9 0 00-3.7 1.7c1 .9 2.3 1.6 3.7 1.6l-.4 1-.2.6 1.2-.2c.4-.1 1.8-.4 2.5-.7 1-.4 1.9-1 1.9-1m3 0a1.9 1.9 0 00.1-2.6s.9-.7 1.8-1a8 8 0 012.5-.7l1.2-.3-.1.7-.4.9c1.4 0 2.7.8 3.6 1.7a5.9 5.9 0 01-3.6 1.6 6.9 6.9 0 00.5 1.6l-1.2-.2-2.5-.7c-1-.4-1.8-1-1.8-1m22-8a5.2 5.2 0 00-2.2 3l-.7-.6c-.6-.3-1-.3-1-.3l.2 1.3c0 .3 0 1.3.3 2.2.2 1 .6 1.6.6 1.6a2 2 0 011.5-.4c.6.1 1 .5 1.3.9l1.1-1.3c.6-.8 1-1.7 1.1-2l.7-1.1s-.4-.2-1 0c-.7 0-1 .2-1 .2a4.9 4.9 0 00-1-3.4m-.3 9.8c.3-.3.5-.6.6-1a1.6 1.6 0 00-.2-1.2s.8-.5 1.7-.7c.7-.2 2-.2 2.3-.2h1.1l-.3.5a6.2 6.2 0 01-.4.7 5 5 0 012.9 2 5.3 5.3 0 01-3.5 1l.2.8v.6l-1-.4c-.3-.1-1.4-.5-2-1-.8-.4-1.4-1.1-1.4-1.1m-2.8-.5a1.7 1.7 0 01-.2-1.1c0-.5.3-.8.6-1 0 0-.6-.8-1.4-1.3-.6-.4-1.7-.8-2-.9a171.4 171.4 0 01-1-.4v.6c0 .5.2.8.2.8a5.2 5.2 0 00-3.5 1c.7.9 1.7 1.7 3 2 0 0-.3.2-.5.7l-.3.5h1c.4 0 1.7 0 2.3-.2a11.1 11.1 0 001.8-.7"
  }), __jsx("path", {
    fill: "#ad1519",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M226 192.4c0-1 1-2 2-2s2.1 1 2.1 2a2 2 0 01-2 2 2 2 0 01-2.1-2m23.2 4.4c-.4-.5-1.4-.4-2.2.2-.8.7-1 1.6-.5 2.2.5.5 1.5.4 2.3-.3.7-.6 1-1.6.5-2"
  }), __jsx("path", {
    fill: "#c8b100",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M246.3 198l.7-1c.7-.6 1.8-.7 2.3-.2l.1.2s1-2 2.3-2.6c1.3-.7 3.4-.5 3.4-.5a2.8 2.8 0 00-2.9-2.8 3 3 0 00-2.4 1l-.2-1s-1.3.3-1.9 1.8c-.6 1.5 0 3.6 0 3.6s-.3-.9-.7-1.5a8 8 0 00-2.4-1.6l-1.3-.7-.1.5a5 5 0 000 .8 7.9 7.9 0 00-3.7.5 4.7 4.7 0 002.5 2.2l-.8.7a4 4 0 00-.4.5l1.3.2 2.5.2a14.5 14.5 0 001.7-.2m-80.3 0c0-.4-.3-.7-.7-1-.7-.7-1.7-.8-2.2-.3l-.2.3s-1-2-2.3-2.7c-1.2-.7-3.3-.5-3.3-.5a2.8 2.8 0 012.8-2.8c1 0 1.9.4 2.4 1l.2-1s1.3.3 2 1.8c.5 1.5-.1 3.6-.1 3.6s.3-.9.8-1.5a8 8 0 012.4-1.6l1.3-.7v1.3a7.9 7.9 0 013.7.5 4.7 4.7 0 01-2.5 2.2l.8.7.4.5-1.2.2-2.6.2a14.7 14.7 0 01-1.7-.2"
  }), __jsx("path", {
    fill: "#ad1519",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M163 196.8c.6-.5 1.6-.4 2.4.3.7.6 1 1.5.4 2-.5.6-1.5.5-2.2-.2-.8-.6-1-1.6-.5-2m41-6.3c0-1.1.9-2 2-2s2.1.9 2.1 2c0 1-1 2-2 2a2 2 0 01-2.1-2"
  }), __jsx("path", {
    fill: "#005bbf",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M201.8 160.6c0-2.2 1.9-4 4.3-4s4.2 1.8 4.2 4-1.9 4-4.3 4a4.1 4.1 0 01-4.2-4"
  }), __jsx("path", {
    fill: "#c8b100",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M205 149.3v2.2h-2.4v2.2h2.3v6.3H202l-.2.6c0 .6.1 1.1.3 1.6h7.9c.2-.5.3-1 .3-1.6l-.2-.6h-2.8v-6.3h2.3v-2.2h-2.3v-2.2h-2.4z"
  }), __jsx("path", {
    fill: "#ccc",
    d: "M206.5 330.6a82 82 0 01-35.5-8.2 22.7 22.7 0 01-12.8-20.4v-32h96.4v32a22.7 22.7 0 01-12.8 20.4 81 81 0 01-35.3 8.2"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".5",
    d: "M206.5 330.6a82 82 0 01-35.5-8.2 22.7 22.7 0 01-12.8-20.4v-32h96.4v32a22.7 22.7 0 01-12.8 20.4 81 81 0 01-35.3 8.2z"
  }), __jsx("path", {
    fill: "#ccc",
    d: "M206.3 270h48.3v-53.5h-48.3V270z"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".5",
    d: "M206.3 270h48.3v-53.5h-48.3V270z"
  }), __jsx("path", {
    fill: "#ad1519",
    d: "M206.3 302c0 12.6-10.7 22.9-24 22.9s-24.2-10.3-24.2-23v-32h48.2v32"
  }), __jsx("path", {
    fill: "#c8b100",
    stroke: "#000",
    strokeWidth: ".5",
    d: "M168.6 320.9c1.5.8 3.6 2 5.8 2.6l-.1-54.7h-5.7v52z"
  }), __jsx("path", {
    fill: "#c8b100",
    stroke: "#000",
    strokeLinejoin: "round",
    strokeWidth: ".5",
    d: "M158 301.6a24.4 24.4 0 005.5 15v-47.5h-5.4v32.5z"
  }), __jsx("path", {
    fill: "#c7b500",
    stroke: "#000",
    strokeWidth: ".5",
    d: "M179.4 324.7a26.6 26.6 0 005.6 0v-55.9h-5.6v56z"
  }), __jsx("path", {
    fill: "#c8b100",
    stroke: "#000",
    strokeWidth: ".5",
    d: "M190 323.5a19 19 0 005.8-2.5v-52.2H190l-.1 54.7z"
  }), __jsx("path", {
    fill: "#ad1519",
    d: "M158.1 270h48.2v-53.5H158V270z"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".5",
    d: "M158.1 270h48.2v-53.5H158V270z"
  }), __jsx("path", {
    fill: "#c8b100",
    stroke: "#000",
    strokeWidth: ".5",
    d: "M201 316c2.4-2 4.6-6.8 5.4-12.2l.1-35H201l.1 47.3z"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".5",
    d: "M206.3 302c0 12.6-10.7 22.9-24 22.9s-24.2-10.3-24.2-23v-32h48.2v32"
  }), __jsx("path", {
    fill: "#ad1519",
    d: "M254.6 270v32c0 12.6-10.8 22.9-24.1 22.9s-24.2-10.3-24.2-23v-32h48.3"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".5",
    d: "M254.6 270v32c0 12.6-10.8 22.9-24.1 22.9s-24.2-10.3-24.2-23v-32h48.3"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M215.1 294.1l.1.5c0 .6-.5 1-1.1 1a1 1 0 01-1.1-1v-.5h-1.5a2.5 2.5 0 001.8 2.9v3.9h1.6V297a2.6 2.6 0 001.7-1.6h4.4v-1.2h-6m21.8 0v1.2h-4a2.5 2.5 0 01-.3.6l4.6 5.2-1.2 1-4.6-5.3-.2.1v8.7h-1.6V297h-.2l-4.8 5.2-1.2-1 4.7-5.3a2.1 2.1 0 01-.2-.4h-4V294h13zm2.6 0v1.2h4.4c.3.8.9 1.4 1.7 1.6v3.9h1.6V297a2.5 2.5 0 001.8-2.4 2 2 0 000-.5h-1.6l.1.5c0 .6-.5 1-1 1-.7 0-1.2-.4-1.2-1a1 1 0 01.1-.5h-5.9m-6.7 22.1a15.6 15.6 0 003.7-1l.8 1.4a17.6 17.6 0 01-4.3 1.2 2.6 2.6 0 01-2.6 2 2.6 2.6 0 01-2.5-2 17.5 17.5 0 01-4.6-1.2l.8-1.4c1.3.5 2.6.9 4 1a2.5 2.5 0 011.5-1.3v-6.7h1.6v6.7c.7.2 1.3.7 1.6 1.4zm-11-2.2l-.8 1.4a16.6 16.6 0 01-3.6-3.1c-.9.2-1.8 0-2.5-.5a2.4 2.4 0 01-.3-3.5l.1-.1a15.3 15.3 0 01-1.3-4.8h1.7a13.1 13.1 0 001 4c.5 0 1 0 1.4.2l4.1-4.5 1.3 1-4.1 4.5c.5.9.5 2-.1 2.8a15.2 15.2 0 003.1 2.6zm-6-4.8c.3-.4 1-.5 1.5 0s.5 1 .1 1.4a1.2 1.2 0 01-1.6.1 1 1 0 010-1.5zm-2.2-4.5l-1.6-.3-.3-4.3 1.7-.6v2.5c0 1 0 1.8.2 2.7zm1.4-5.3l1.7.4v2.2c0-.8.3 2.1.3 2.1l-1.7.6a14 14 0 01-.3-2.7v-2.6zm5.6 13.7a15.7 15.7 0 004.8 2.6l.4-1.6a13.7 13.7 0 01-4-2l-1.2 1m-.8 1.4a17.4 17.4 0 004.8 2.6l-1.2 1.1a18.7 18.7 0 01-4-2l.4-1.7m2.2-9.4l1.6.7 3-3.3-1-1.4-3.6 4m-1.3-1l-1-1.4 3-3.3 1.6.7-3.6 4m18.1 9.9l.8 1.4a16.7 16.7 0 003.6-3.1c.9.2 1.8 0 2.5-.5a2.4 2.4 0 00.3-3.5l-.1-.1a15 15 0 001.3-4.8h-1.7a13.3 13.3 0 01-1 4 3 3 0 00-1.4.2l-4.1-4.5-1.3 1 4.1 4.5a2.4 2.4 0 00.1 2.8 15 15 0 01-3.1 2.6zm6-4.8a1.2 1.2 0 00-1.5 0 1 1 0 00-.1 1.4 1.2 1.2 0 001.6.1 1 1 0 000-1.5zm2.2-4.5l1.6-.3.3-4.3-1.7-.6v2.5c0 1 0 1.9-.2 2.8zm-1.4-5.3l-1.7.4v2.2c0-.8-.3 2.1-.3 2.1l1.7.6.3-2.7v-2.6m-5.6 13.7a15.7 15.7 0 01-4.8 2.6l-.4-1.6a13.7 13.7 0 004-2l1.2 1m.8 1.4a17.4 17.4 0 01-4.8 2.6l1.2 1.1a18.6 18.6 0 004-2l-.4-1.7m-2.2-9.4l-1.6.7-2.9-3.3 1-1.4 3.5 4m1.3-1l1-1.4-3-3.3-1.6.7 3.6 4m-20.1-8.7l.5 1.6h4.5l.5-1.6h-5.5m21.1 0l-.5 1.6h-4.5l-.5-1.6h5.5m-11.6 21.9c0-.6.5-1 1.1-1a1 1 0 011.1 1c0 .6-.5 1-1 1a1.1 1.1 0 01-1.2-1zm1.9-7.8l1.7-.4v-4.3l-1.7-.5v5.2m-1.6 0l-1.7-.4v-4.3l1.7-.5v5.2"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M211.5 294.2c.2-1 1-1.6 1.8-2V287h1.6v5.3c.8.3 1.5.9 1.7 1.6h4.4v.3h-6a1.2 1.2 0 00-1-.6c-.4 0-.7.3-1 .6h-1.5m12.2 0v-.3h4.1a2.4 2.4 0 01.2-.3l-5-5.7 1.2-1 5 5.6.2-.1V285h1.6v7.3h.3l4.9-5.5 1.2 1-4.9 5.5.3.6h4v.3h-13zm21.6 0a1.1 1.1 0 011-.6c.5 0 .8.3 1 .6h1.6c-.2-1-.9-1.6-1.8-2V287h-1.6v5.3c-.8.3-1.4.8-1.7 1.6h-4.4v.3h6m-30.2-15l6 6.8 1.3-1-6.1-6.7.3-.6h4.4V276h-4.4a2.6 2.6 0 00-2.5-1.7 2.6 2.6 0 00-2.7 2.5 2.5 2.5 0 001.8 2.4v5.2h1.6v-5.2h.3zm32 0v5.3h-1.7v-5.2a2.5 2.5 0 01-.4-.2l-6 6.8-1.3-1 6.2-6.9-.1-.3h-4.5V276h4.5a2.6 2.6 0 012.4-1.7 2.6 2.6 0 012.7 2.5 2.5 2.5 0 01-1.9 2.4zm-16.1 0v3.3h-1.7v-3.2a2.6 2.6 0 01-1.7-1.6h-4V276h4a2.6 2.6 0 012.5-1.7c1.2 0 2.2.7 2.5 1.7h4v1.6h-4a2.5 2.5 0 01-1.6 1.6zm-17.8 4l-1.7.4v4.3l1.7.5v-5.2m1.6 0l1.7.4v4.3l-1.7.5v-5.2m30.6 0l-1.7.4v4.3l1.7.5v-5.2m1.6 0l1.7.4v4.3l-1.7.5v-5.2m-25.5.8l1.6-.7 2.9 3.3-1 1.4-3.5-4m-1.3 1l-1 1.4 3 3.3 1.6-.7-3.6-4m18.5-1.1l-1.6-.7-3 3.3 1 1.4 3.6-4m1.2 1l1 1.4-3 3.3-1.5-.7 3.5-4m-20.3 9l.5-1.6h4.5l.5 1.6h-5.5m-6.7-17c0-.6.5-1 1.2-1a1 1 0 011 1c0 .6-.4 1-1 1a1.1 1.1 0 01-1.2-1zm12.1.8l-.5 1.6h-4.5l-.5-1.6h5.5m0-1.6l-.5-1.6h-4.5l-.5 1.6h5.5m15.7 17.8l-.5-1.6h-4.5l-.5 1.6h5.5m4.4-17c0-.6.5-1 1.1-1a1 1 0 011.1 1c0 .6-.5 1-1 1a1.1 1.1 0 01-1.2-1zm-16.1 0c0-.6.5-1 1.1-1a1 1 0 011.1 1c0 .6-.5 1-1.1 1a1.1 1.1 0 01-1.1-1zm6.2.8l.5 1.6h4.6l.5-1.6h-5.6m0-1.6l.5-1.6h4.6l.5 1.6h-5.6m-5.9 5l-1.7.5v4.3l1.7.5V281m1.7 0l1.6.5v4.3l-1.6.5V281"
  }), __jsx("path", {
    fill: "none",
    stroke: "#c8b100",
    strokeWidth: ".3",
    d: "M232.7 316.3a15.6 15.6 0 003.7-1.1l.8 1.4a17.6 17.6 0 01-4.3 1.2 2.6 2.6 0 01-2.6 2 2.6 2.6 0 01-2.5-2 17.5 17.5 0 01-4.6-1.2l.8-1.4c1.3.5 2.6.9 4 1a2.5 2.5 0 011.5-1.3v-6.7h1.6v6.7c.7.2 1.3.7 1.6 1.4zm-4.7-20.4a2.3 2.3 0 01-.2-.5h-4V294h4a2.6 2.6 0 01.2-.4l-5-5.6 1.2-1 5 5.5a2.2 2.2 0 01.2 0V285h1.7v7.3h.2l4.9-5.5 1.2 1-4.9 5.5.3.6h4v1.5h-4c0 .2-.2.4-.3.5l4.7 5.3-1.3 1-4.6-5.3-.2.1v8.7h-1.6V297l-.2-.1-4.8 5.3-1.2-1 4.7-5.3m-12.8-16.7l6 6.8 1.3-1-6.1-6.7.3-.6h4.4V276h-4.4a2.6 2.6 0 00-2.5-1.7 2.6 2.6 0 00-2.6 2.5 2.5 2.5 0 001.7 2.4v5.2h1.6v-5.2h.3zm6.5 34.8l-.8 1.4a16.6 16.6 0 01-3.6-3.1c-.9.2-1.8 0-2.5-.5a2.4 2.4 0 01-.3-3.5l.1-.1a15.3 15.3 0 01-1.2-4.8h1.6a13.1 13.1 0 001 4c.5 0 1 0 1.4.2l4.1-4.5 1.3 1-4.1 4.5c.6.9.5 2-.1 2.8a15.2 15.2 0 003.1 2.6zm-8.4-13.1V297a2.5 2.5 0 01-1.8-2.4c0-1 .8-2 1.8-2.4V287h1.6v5.3c.8.2 1.5.8 1.7 1.6h4.4v1.5h-4.4a2.6 2.6 0 01-1.6 1.6v3.9h-1.7m2.3 8.3c.4-.4 1.1-.5 1.6 0s.5 1 .1 1.4a1.2 1.2 0 01-1.6.1 1 1 0 010-1.5zm-2-4.5l-1.7-.3-.3-4.3 1.7-.6v2.5c0 1 0 1.8.3 2.7zm1.4-5.3l1.6.4v2.2c0-.8.3 2.1.3 2.1l-1.7.6-.3-2.7v-2.6zm5.5 13.7a15.7 15.7 0 004.8 2.6l.4-1.6a13.7 13.7 0 01-4-2l-1.2 1m-.8 1.4a17.4 17.4 0 004.8 2.6l-1.2 1.1a18.7 18.7 0 01-4-2l.4-1.7"
  }), __jsx("path", {
    fill: "none",
    stroke: "#c8b100",
    strokeWidth: ".3",
    d: "M221.9 305.1l1.6.7 3-3.3-1-1.4-3.6 4m-1.3-1l-1-1.4 3-3.3 1.6.7-3.6 4m-7.6-9.5c0-.6.5-1 1-1 .7 0 1.2.5 1.2 1 0 .6-.5 1.1-1.1 1.1a1 1 0 01-1.1-1zm25.7 19.4l.8 1.4a16.7 16.7 0 003.6-3.1c.9.2 1.8 0 2.6-.5a2.4 2.4 0 00.2-3.5l-.1-.1a15 15 0 001.3-4.8h-1.7a13.3 13.3 0 01-1 4 3 3 0 00-1.4.2l-4.1-4.5-1.3 1 4.1 4.5a2.4 2.4 0 00.1 2.8 15 15 0 01-3 2.6zm8.4-13.1V297a2.5 2.5 0 001.8-2.4c0-1-.7-2-1.8-2.4V287h-1.6v5.3c-.8.2-1.4.8-1.7 1.6h-4.4v1.5h4.4c.3.8.9 1.3 1.7 1.6v3.9h1.6zm-2.3 8.3a1.2 1.2 0 00-1.6 0 1 1 0 00-.1 1.4 1.2 1.2 0 001.6.1 1 1 0 000-1.5zm2-4.5l1.7-.3.3-4.3-1.7-.6v2.5c0 1 0 1.8-.2 2.7zm-1.3-5.3l-1.7.4v2.2c0-.8-.3 2.1-.3 2.1l1.7.6.3-2.7v-2.6m1.6-20.1v5.2h-1.6v-5.2a2.3 2.3 0 01-.4-.2l-6 6.8-1.2-1 6-7v-.2h-4.5V276h4.4a2.6 2.6 0 012.5-1.7 2.6 2.6 0 012.6 2.5 2.5 2.5 0 01-1.8 2.4zm-16 0v3.2h-1.7v-3.2a2.6 2.6 0 01-1.7-1.6h-4V276h4c.4-1 1.3-1.7 2.5-1.7s2.2.7 2.5 1.7h4v1.6h-4a2.5 2.5 0 01-1.6 1.6zm8.8 33.8a15.7 15.7 0 01-4.8 2.6l-.4-1.6a13.7 13.7 0 004-2l1.2 1m.8 1.4a17.4 17.4 0 01-4.8 2.6l1.2 1.1a18.7 18.7 0 004-2l-.4-1.7m-27.4-31.4l-1.7.5v4.3l1.7.5v-5.2m1.7 0l1.6.4v4.3l-1.6.5V283m30.5 0l-1.7.5v4.3l1.7.5V283"
  }), __jsx("path", {
    fill: "none",
    stroke: "#c8b100",
    strokeWidth: ".3",
    d: "M247.1 283.1l1.7.5v4.3l-1.7.5V283m-8.6 22l-1.6.7-2.9-3.3 1-1.4 3.5 4m1.3-1l1-1.4-3-3.3-1.6.7 3.6 4m-18.2-20l1.6-.7 3 3.3-1 1.4-3.6-4m-1.3 1l-1 1.4 3 3.3 1.6-.7-3.6-4m18.5-1.1l-1.6-.7-3 3.3 1 1.4 3.6-4m1.2 1l1 1.4-3 3.2-1.5-.6 3.5-4m-20.3 9l.5-1.6h4.5l.5 1.6h-5.5m0 1.5l.5 1.6h4.5l.5-1.6h-5.5M213 277c0-.6.5-1 1.2-1 .6 0 1 .4 1 1s-.4 1-1 1a1 1 0 01-1.2-1zm12.1.8l-.5 1.6h-4.5l-.5-1.6h5.5m0-1.6l-.5-1.6h-4.5l-.5 1.6h5.5m20.1 18.5c0-.5.5-1 1.1-1 .6 0 1.1.5 1.1 1 0 .6-.5 1.1-1 1.1a1 1 0 01-1.2-1zm-4.4-.7l-.5-1.6h-4.5l-.5 1.6h5.5m0 1.5l-.5 1.6h-4.5l-.5-1.6h5.5m-11.6 21.9c0-.6.5-1 1.1-1 .6 0 1.1.4 1.1 1s-.5 1-1 1a1.1 1.1 0 01-1.2-1zm1.9-7.8l1.7-.4v-4.3l-1.7-.5v5.2m-1.6 0l-1.7-.4v-4.3l1.7-.5v5.2m15.7-32.6c0-.6.5-1 1.1-1a1 1 0 011.1 1c0 .6-.5 1-1 1a1.1 1.1 0 01-1.2-1zm-16.1 0c0-.6.5-1 1.1-1a1 1 0 011.1 1c0 .6-.5 1-1 1a1.1 1.1 0 01-1.2-1zm6.2.8l.5 1.6h4.6l.5-1.6h-5.5m0-1.6l.4-1.6h4.6l.5 1.6h-5.5m-6 5l-1.6.5v4.3l1.6.5V281m1.7 0l1.6.5v4.3l-1.6.5V281"
  }), __jsx("path", {
    fill: "#058e6e",
    d: "M227.7 294.7a2.6 2.6 0 012.6-2.5 2.6 2.6 0 012.6 2.5 2.6 2.6 0 01-2.6 2.4c-1.4 0-2.6-1-2.6-2.4"
  }), __jsx("path", {
    fill: "#db4446",
    d: "M230.9 229.7v-.6l.1-.3-2.3-.1a5.9 5.9 0 01-2.3-1.2c-.8-.7-1.1-1-1.6-1.2-1.3-.2-2.3.4-2.3.4s1 .4 1.7 1.3 1.5 1.3 1.8 1.4c.6.2 2.6 0 3.1.1l1.8.2"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M230.9 229.7v-.6l.1-.3-2.3-.1a5.9 5.9 0 01-2.3-1.2c-.8-.7-1.1-1-1.6-1.2-1.3-.2-2.3.4-2.3.4s1 .4 1.7 1.3 1.5 1.3 1.8 1.4c.6.2 2.6 0 3.1.1l1.8.2z"
  }), __jsx("path", {
    fill: "#ed72aa",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M238.1 227.5v1.4c.2.6-.1 1.2 0 1.5 0 .4.1.6.3.9l.2.9-.7-.5-.6-.4v1c.1.2.3.8.6 1.1l1 1.3c.2.5.1 1.4.1 1.4s-.4-.7-.8-.8l-1.2-.7s.7.8.7 1.5c0 .8-.3 1.6-.3 1.6s-.3-.7-.8-1.1l-1-.9s.4 1.2.4 2v2.3l-.9-1-1-.7c0-.2.5.6.6 1.1 0 .5.3 2.3 1.8 4.5 1 1.3 2.3 3.6 5.3 2.9 3-.8 1.9-4.8 1.3-6.7a16.8 16.8 0 01-1-4.6c0-.8.6-2.9.5-3.3a8 8 0 01.2-3.1c.4-1.3.7-1.8.9-2.3.2-.6.4-.9.4-1.3l.1-1.3.7 1.3.1 1.5s.1-1 1-1.6c.8-.6 1.8-1.1 2-1.4.3-.3.3-.5.3-.5s0 1.8-.6 2.6l-1.7 2s.7-.3 1.2-.3h.9s-.6.4-1.4 1.6c-.8 1-.5 1.2-1 2.1-.6 1-1 1-1.7 1.5-1 .8-.5 4.2-.4 4.7.2.5 2 4.5 2 5.5s.2 3.2-1.5 4.6c-1.1 1-3 1-3.4 1.2-.4.3-1.2 1.1-1.2 2.8 0 1.7.6 2 1 2.4.6.5 1.2.2 1.3.6.2.3.2.5.5.7.2.2.3.4.2.8 0 .3-.8 1.1-1.1 1.7l-.8 2.4c0 .2-.1 1 .1 1.3 0 0 .9 1 .3 1.2-.4.2-.8-.2-1-.2l-.9.5c-.3-.1-.3-.3-.4-.8l-.1-.7c-.2 0-.3.2-.4.5 0 .2 0 .8-.3.8-.2 0-.5-.4-.8-.5-.2 0-.8-.2-.8-.4 0-.3.4-.9.7-1 .4 0 .8-.3.5-.5s-.5-.2-.7 0-.8 0-.7-.2v-.8c0-.2-.4-.5.1-.8.6-.3.8.2 1.4.1.6 0 .8-.3 1-.6.2-.3.2-1-.2-1.4-.4-.5-.7-.5-.9-.8l-.3-.9v2.2l-.7-.8c-.3-.3-.6-1.3-.6-1.3v1.3c0 .4.3.7.2.8-.1.1-.8-.7-1-.8a3.7 3.7 0 01-1-1l-.4-1.4a4.2 4.2 0 010-1.5l.4-1h-1.4c-.7 0-1.2-.3-1.5.2-.3.5-.2 1.5.2 2.8.3 1.2.5 1.9.4 2.1a3 3 0 01-.7.8h-.9a2.5 2.5 0 00-1.2-.3h-1.3l-1.1-.3c-.3.1-.8.3-.6.7.2.6-.2.7-.5.7l-.9-.2c-.4-.1-.9 0-.8-.4 0-.4.2-.4.4-.7.2-.3.2-.5 0-.5h-.6c-.2.2-.5.5-.8.4-.2-.1-.4-.4-.4-1s-.7-1.2 0-1.1c.5 0 1.3.4 1.4 0 .2-.3 0-.4-.2-.7s-.8-.4-.3-.7l.7-.5c.1-.2.4-.8.7-.6.6.2 0 .7.6 1.3.6.7 1 1 2 .8 1 0 1.3-.2 1.3-.5l-.1-1v-1s-.4.3-.5.6l-.4.8v-2a8 8 0 00-.2-.8l-.3.9-.1 1s-.7-.5-.5-1.5c.1-.7-.1-1.6.1-2 .2-.3.7-1.5 2-1.6h2.6l2-.3s-2.8-1.4-3.5-1.9a9.5 9.5 0 01-2-2l-.6-1.6s-.5 0-1 .3a5 5 0 00-1.2 1l-.7 1 .1-1.2v-.8s-.4 1.2-1 1.7l-1.4 1v-.8l.2-1s-.4.8-1.1 1c-.7 0-1.8 0-1.9.4 0 .5.2 1 0 1.4 0 .3-.4.5-.4.5l-.8-.4c-.4 0-.7.2-.7.2s-.3-.4-.2-.7c.1-.2.7-.6.5-.8l-.8.2c-.3.1-.8.3-.8-.2 0-.4.2-.7 0-1 0-.3 0-.5.2-.6l1.2-.1c0-.2-.2-.5-.8-.6-.6-.1-.8-.5-.5-.8.3-.2.3-.3.5-.6.1-.2.2-.7.7-.5.5.3.4.8 1 1a4 4 0 002-.2l1.5-1 1.5-1-1-.8c-.3-.3-.7-.9-1-1a8.3 8.3 0 00-1.8-.6 9 9 0 01-1.7-.5l.8-.3c.2-.2.6-.6.8-.6h.3-1.4c-.3-.1-1-.6-1.3-.6l-.8.1s.8-.4 1.4-.5l1-.1s-.9-.3-1.1-.6l-.6-1c-.2-.1-.3-.5-.6-.5l-1 .3c-.4 0-.6-.2-.6-.6l-.1-.5c-.2-.3-.6-.8-.2-1h1.4c0-.2-.5-.6-.8-.8-.4-.2-1-.5-.7-.8l.8-.5c.2-.3.3-1 .7-.7.4.2.8 1.2 1.1 1.1.3 0 .3-.8.3-1 0-.4 0-1 .2-.9.3 0 .5.4 1 .5.4 0 1-.1 1 .2 0 .3-.3.7-.6 1-.3.3-.4 1-.3 1.4.2.5.7 1.2 1.2 1.4.4.3 1.2.5 1.7.9.5.3 1.7 1.2 2.1 1.3l.8.4s.5-.2 1.1-.2c.7 0 2.1 0 2.6-.2.6-.2 1.3-.6 1-1-.1-.6-1.3-1-1.2-1.4 0-.4.5-.4 1.2-.4.8 0 1.8.1 2-1 .2-1 .2-1.5-.8-1.8-1-.2-1.8-.2-2-1-.2-.7-.4-.9-.2-1.1.3-.2.6-.3 1.4-.4.8 0 1.6 0 1.9-.2.2-.2.3-.7.6-.9.3-.2 1.4-.4 1.4-.4s1.4.7 2.7 1.7a15 15 0 012.2 2.1"
  }), __jsx("path", {
    d: "M228.1 226.8l-.2-.6v-.3s.8 0 .7.3c0 .2-.2.2-.3.3l-.2.3"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M228.1 226.8l-.2-.6v-.3s.8 0 .7.3c0 .2-.2.2-.3.3l-.2.3z"
  }), __jsx("path", {
    d: "M232 225.4v-.4s.7 0 1 .3c.5.4.9 1 .9 1l-.8-.4h-.5l-.3-.1v-.3h-.3"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M232 225.4v-.4s.7 0 1 .3c.5.4.9 1 .9 1l-.8-.4h-.5l-.3-.1v-.3h-.3z"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M237.3 231.3l-.4-.7a8 8 0 01-.3-.4"
  }), __jsx("path", {
    fill: "#db4446",
    d: "M217.4 226.6s.5.4.8.4h.8s.2-.5.1-.8c-.2-1.2-1.2-1.4-1.2-1.4s.3.7.1 1a2 2 0 01-.6.8"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M217.4 226.6s.5.4.8.4h.8s.2-.5.1-.8c-.2-1.2-1.2-1.4-1.2-1.4s.3.7.1 1a2 2 0 01-.6.8z"
  }), __jsx("path", {
    fill: "#db4446",
    d: "M215.2 227.6s-.4-.7-1.3-.6c-.8 0-1.4.8-1.4.8h1.2c.3.3.4 1 .4 1l.7-.6a7.2 7.2 0 00.4-.6"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M215.2 227.6s-.4-.7-1.3-.6c-.8 0-1.4.8-1.4.8h1.2c.3.3.4 1 .4 1l.7-.6a7.2 7.2 0 00.4-.6z"
  }), __jsx("path", {
    fill: "#db4446",
    d: "M214.2 230.6s-.8.1-1.2.6c-.4.5-.3 1.3-.3 1.3s.4-.5.9-.5l1 .2-.1-.8-.3-.8"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M214.2 230.6s-.8.1-1.2.6c-.4.5-.3 1.3-.3 1.3s.4-.5.9-.5l1 .2-.1-.8-.3-.8z"
  }), __jsx("path", {
    d: "M228.2 230.5l.3-.5.3.5h-.7"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M228.2 230.5l.3-.5.3.5h-.7"
  }), __jsx("path", {
    d: "M229 230.5l.3-.5.4.5h-.8"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M229 230.5l.3-.5.4.5h-.8"
  }), __jsx("path", {
    d: "M228.6 227.3l.8.3-.7.4-.1-.6"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M228.6 227.3l.8.3-.7.4-.1-.6"
  }), __jsx("path", {
    d: "M229.5 227.6l.7.2-.5.4-.2-.6"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M229.5 227.6l.7.2-.5.4-.2-.6"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M224.2 233.7s-.7.2-1 .6c-.4.5-.3 1-.3 1s.6-.5 1.5-.3l1.2.3 1.3-.3s-.7.8-.7 1.3l.2 1.1c0 .7-.6 1.6-.6 1.6l1-.3a4.6 4.6 0 001.7-.8l.9-1s-.2 1 0 1.4l.2 1.6.8-.6c.2-.1.7-.4.9-.7l.3-1s0 .8.4 1.3l.6 1.6s.3-.8.6-1.1c.3-.4.7-.8.7-1a4.3 4.3 0 00-.1-.9l.4.8m-11 .6s.5-.8 1-1l1.1-.8.9-.4m1 5l1.3-.8a4 4 0 001-1"
  }), __jsx("path", {
    fill: "#db4446",
    d: "M216.6 240.4s-.4-.5-1.1-.3c-.7 0-1.2.9-1.2.9s.6-.2 1-.1.6.4.6.4l.4-.4.3-.6"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M216.6 240.4s-.4-.5-1.1-.3c-.7 0-1.2.9-1.2.9s.6-.2 1-.1.6.4.6.4l.4-.4.3-.6z"
  }), __jsx("path", {
    fill: "#db4446",
    d: "M215.8 243.2s-.6 0-1.1.3c-.5.4-.5 1.2-.5 1.2s.4-.4.8-.3l.9.2v-.6c.2-.4-.1-.8-.1-.8"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M215.8 243.2s-.6 0-1.1.3c-.5.4-.5 1.2-.5 1.2s.4-.4.8-.3l.9.2v-.6c.2-.4-.1-.8-.1-.8z"
  }), __jsx("path", {
    fill: "#db4446",
    d: "M217.2 245.8s0 .8.3 1.3c.4.5 1.1.5 1.1.5l-.3-.7c0-.4.3-.8.3-.8s-.3-.3-.7-.3h-.7"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M217.2 245.8s0 .8.3 1.3c.4.5 1.1.5 1.1.5l-.3-.7c0-.4.3-.8.3-.8s-.3-.3-.7-.3h-.7zm16 1.3s2 1.2 1.9 2.2c0 1-1 2.3-1 2.3"
  }), __jsx("path", {
    fill: "#db4446",
    d: "M224.2 252.6s-.4-.6-1.1-.6c-.7 0-1.4.7-1.4.7s.8-.1 1 .2l.5.6.5-.3.5-.6"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M224.2 252.6s-.4-.6-1.1-.6c-.7 0-1.4.7-1.4.7s.8-.1 1 .2l.5.6.5-.3.5-.6z"
  }), __jsx("path", {
    fill: "#db4446",
    d: "M222.2 255.3s-1-.1-1.4.3c-.4.5-.4 1.3-.4 1.3s.6-.6 1-.5c.5 0 1 .3 1 .3v-.7l-.3-.7"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M222.2 255.3s-1-.1-1.4.3c-.4.5-.4 1.3-.4 1.3s.6-.6 1-.5c.5 0 1 .3 1 .3v-.7l-.3-.7z"
  }), __jsx("path", {
    fill: "#db4446",
    d: "M224 258.1s-.3.7 0 1.1c.3.5 1 .8 1 .8s-.3-.4-.2-.8c.1-.3.7-.8.7-.8l-1.4-.2"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M224 258.1s-.3.7 0 1.1c.3.5 1 .8 1 .8s-.3-.4-.2-.8c.1-.3.7-.8.7-.8l-1.4-.2z"
  }), __jsx("path", {
    fill: "#db4446",
    d: "M236 259.3s-.8-.2-1.2 0c-.5.3-.8 1.4-.8 1.4s.7-.6 1.2-.5c.5 0 1 .3 1 .3v-.8l-.2-.4"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M236 259.3s-.8-.2-1.2 0c-.5.3-.8 1.4-.8 1.4s.7-.6 1.2-.5c.5 0 1 .3 1 .3v-.8l-.2-.4z"
  }), __jsx("path", {
    fill: "#db4446",
    d: "M236.4 262.2s-.6.6-.4 1.1l.6 1s0-.7.2-1l1-.3-.7-.5a15.8 15.8 0 01-.7-.3"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M236.4 262.2s-.6.6-.4 1.1l.6 1s0-.7.2-1l1-.3-.7-.5a15.8 15.8 0 01-.7-.3z"
  }), __jsx("path", {
    fill: "#db4446",
    d: "M239.4 263s-.3.8.2 1.3c.6.5 1 .5 1 .5s-.3-.7-.2-1.1c.1-.5.5-.7.5-.7l-.8-.2-.7.3"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M239.4 263s-.3.8.2 1.3c.6.5 1 .5 1 .5s-.3-.7-.2-1.1c.1-.5.5-.7.5-.7l-.8-.2-.7.3z"
  }), __jsx("path", {
    fill: "#ffd691",
    stroke: "#000",
    strokeWidth: ".5",
    d: "M208.8 316.4c2 .6 3 2 3 3.8 0 2.3-2.2 4-5 4-3 0-5.3-1.7-5.3-4 0-1.7 1-3.6 3-3.8l-.2-.4-.7-.7h1.2l.8.5.5-.7c.3-.4.6-.5.6-.5l.6.6.3.5.7-.4.8-.3s0 .4-.2.7l-.1.7"
  }), __jsx("path", {
    fill: "#058e6e",
    stroke: "#000",
    strokeWidth: ".5",
    d: "M206.3 326.7s-3.8-2.6-5.5-3c-2-.4-4.5 0-5.5 0 0 0 1.2.8 1.8 1.4.5.5 2.3 1.5 3.3 1.8 3 .8 6-.2 6-.2m1 .2s2.4-2.5 5-2.9c3-.4 5 .3 6.2.6l-1.5.8c-.5.3-2 1.5-4 1.6-2 0-4.4-.3-4.8-.2l-.9.1"
  }), __jsx("path", {
    fill: "#ad1519",
    stroke: "#000",
    strokeWidth: ".5",
    d: "M206.7 323.8a4.8 4.8 0 010-7.1 4.8 4.8 0 011.5 3.5 4.9 4.9 0 01-1.5 3.6"
  }), __jsx("path", {
    fill: "#058e6e",
    stroke: "#000",
    strokeWidth: ".5",
    d: "M205.7 329s.6-1.5.6-2.7l-.1-2.1h.8s.3 1.1.3 2l-.1 2.4-.7.1-.8.3"
  }), __jsx("path", {
    fill: "#fff",
    d: "M254 190.7c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1 0 .6-.5 1-1 1a1 1 0 01-1-1"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M254 190.7c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1 0 .6-.5 1-1 1a1 1 0 01-1-1z"
  }), __jsx("path", {
    fill: "#fff",
    d: "M255.4 188.2c0-.6.5-1 1.1-1 .6 0 1 .4 1 1s-.4 1-1 1a1 1 0 01-1-1"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M255.4 188.2c0-.6.5-1 1.1-1 .6 0 1 .4 1 1s-.4 1-1 1a1 1 0 01-1-1z"
  }), __jsx("path", {
    fill: "#fff",
    d: "M256.4 185.2c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1s-.5 1-1 1a1 1 0 01-1.1-1"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M256.4 185.2c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1s-.5 1-1 1a1 1 0 01-1.1-1z"
  }), __jsx("path", {
    fill: "#fff",
    d: "M256.5 182c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1 0 .6-.5 1-1 1a1 1 0 01-1-1"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M256.5 182c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1 0 .6-.5 1-1 1a1 1 0 01-1-1z"
  }), __jsx("path", {
    fill: "#fff",
    d: "M255.7 179c0-.6.5-1 1-1 .7 0 1.2.4 1.2 1s-.5 1-1.1 1a1 1 0 01-1-1"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M255.7 179c0-.6.5-1 1-1 .7 0 1.2.4 1.2 1s-.5 1-1.1 1a1 1 0 01-1-1z"
  }), __jsx("path", {
    fill: "#fff",
    d: "M254.1 176.1c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 01-1-1"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M254.1 176.1c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 01-1-1z"
  }), __jsx("path", {
    fill: "#fff",
    d: "M252 173.8c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1a1 1 0 01-1-1"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M252 173.8c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1a1 1 0 01-1-1z"
  }), __jsx("path", {
    fill: "#fff",
    d: "M249.4 171.8c0-.5.5-1 1.1-1a1 1 0 010 2c-.6 0-1-.4-1-1"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M249.4 171.8c0-.5.5-1 1.1-1a1 1 0 010 2c-.6 0-1-.4-1-1z"
  }), __jsx("path", {
    fill: "#fff",
    d: "M246.5 170.3c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1a1 1 0 01-1-1"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M246.5 170.3c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1a1 1 0 01-1-1z"
  }), __jsx("path", {
    fill: "#fff",
    d: "M243.3 169.1c0-.5.5-1 1.1-1a1 1 0 010 2 1 1 0 01-1-1"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M243.3 169.1c0-.5.5-1 1.1-1a1 1 0 010 2 1 1 0 01-1-1z"
  }), __jsx("path", {
    fill: "#fff",
    d: "M239.9 168.5c0-.5.4-1 1-1s1 .5 1 1-.4 1-1 1a1 1 0 01-1-1"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M239.9 168.5c0-.5.4-1 1-1s1 .5 1 1-.4 1-1 1a1 1 0 01-1-1z"
  }), __jsx("path", {
    fill: "#fff",
    d: "M236.6 168.3c0-.5.4-1 1-1s1 .5 1 1-.4 1-1 1a1 1 0 01-1-1"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M236.6 168.3c0-.5.4-1 1-1s1 .5 1 1-.4 1-1 1a1 1 0 01-1-1z"
  }), __jsx("path", {
    fill: "#fff",
    d: "M233.3 168.5c0-.6.5-1 1-1 .7 0 1.1.4 1.1 1s-.4 1-1 1a1 1 0 01-1-1"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M233.3 168.5c0-.6.5-1 1-1 .7 0 1.1.4 1.1 1s-.4 1-1 1a1 1 0 01-1-1z"
  }), __jsx("path", {
    fill: "#fff",
    d: "M230.1 168.5c0-.6.5-1 1-1 .6 0 1.1.4 1.1 1s-.5 1-1 1a1 1 0 01-1.1-1"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M230.1 168.5c0-.6.5-1 1-1 .6 0 1.1.4 1.1 1s-.5 1-1 1a1 1 0 01-1.1-1z"
  }), __jsx("path", {
    fill: "#fff",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M231.7 171.2c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 01-1-1m.6 3.1c0-.6.4-1 1-1s1 .4 1 1c0 .5-.4 1-1 1a1 1 0 01-1-1m0 3c0-.5.6-1 1.1-1a1 1 0 010 2 1 1 0 01-1-1m-1 2.8c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1 0 .6-.4 1-1 1a1 1 0 01-1-1m-1.9 2.6c0-.5.5-1 1-1 .7 0 1.2.5 1.2 1s-.5 1-1.1 1c-.6 0-1-.4-1-1"
  }), __jsx("path", {
    fill: "#fff",
    d: "M227.6 166.5c0-.5.5-1 1.1-1a1 1 0 010 2 1 1 0 01-1-1"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M227.6 166.5c0-.5.5-1 1.1-1a1 1 0 010 2 1 1 0 01-1-1z"
  }), __jsx("path", {
    fill: "#fff",
    d: "M224.8 165c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1a1 1 0 01-1-1"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M224.8 165c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1a1 1 0 01-1-1z"
  }), __jsx("path", {
    fill: "#fff",
    d: "M221.6 164c0-.6.5-1 1-1 .6 0 1.1.4 1.1 1 0 .5-.5 1-1 1-.6 0-1.1-.5-1.1-1"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M221.6 164c0-.6.5-1 1-1 .6 0 1.1.4 1.1 1 0 .5-.5 1-1 1-.6 0-1.1-.5-1.1-1z"
  }), __jsx("path", {
    fill: "#fff",
    d: "M218.3 163.4c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1s-.5 1-1 1a1 1 0 01-1.1-1"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M218.3 163.4c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1s-.5 1-1 1a1 1 0 01-1.1-1z"
  }), __jsx("path", {
    fill: "#fff",
    d: "M215 163.5c0-.6.5-1 1.1-1 .6 0 1 .4 1 1 0 .5-.4 1-1 1a1 1 0 01-1-1"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M215 163.5c0-.6.5-1 1.1-1 .6 0 1 .4 1 1 0 .5-.4 1-1 1a1 1 0 01-1-1z"
  }), __jsx("path", {
    fill: "#fff",
    d: "M211.7 164c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 01-1-1"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M211.7 164c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 01-1-1z"
  }), __jsx("path", {
    fill: "#fff",
    d: "M208.6 165.1c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1s-.5 1-1 1a1 1 0 01-1.1-1"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M208.6 165.1c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1s-.5 1-1 1a1 1 0 01-1.1-1z"
  }), __jsx("path", {
    fill: "#fff",
    d: "M156 190.7c0-.5.4-1 1-1s1 .5 1 1c0 .6-.4 1-1 1a1 1 0 01-1-1"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M156 190.7c0-.5.4-1 1-1s1 .5 1 1c0 .6-.4 1-1 1a1 1 0 01-1-1z"
  }), __jsx("path", {
    fill: "#fff",
    d: "M154.5 188.2c0-.6.5-1 1-1 .6 0 1 .4 1 1s-.4 1-1 1a1 1 0 01-1-1"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M154.5 188.2c0-.6.5-1 1-1 .6 0 1 .4 1 1s-.4 1-1 1a1 1 0 01-1-1z"
  }), __jsx("path", {
    fill: "#fff",
    d: "M153.5 185.2c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 01-1-1"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M153.5 185.2c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 01-1-1z"
  }), __jsx("path", {
    fill: "#fff",
    d: "M153.4 182c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1 0 .6-.5 1-1 1a1 1 0 01-1-1"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M153.4 182c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1 0 .6-.5 1-1 1a1 1 0 01-1-1z"
  }), __jsx("path", {
    fill: "#fff",
    d: "M154.2 179c0-.6.5-1 1-1 .6 0 1 .4 1 1s-.4 1-1 1a1 1 0 01-1-1"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M154.2 179c0-.6.5-1 1-1 .6 0 1 .4 1 1s-.4 1-1 1a1 1 0 01-1-1z"
  }), __jsx("path", {
    fill: "#fff",
    d: "M155.8 176.1c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1s-.5 1-1 1a1 1 0 01-1-1"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M155.8 176.1c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1s-.5 1-1 1a1 1 0 01-1-1z"
  }), __jsx("path", {
    fill: "#fff",
    d: "M158 173.8c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1a1 1 0 01-1-1"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M158 173.8c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1a1 1 0 01-1-1z"
  }), __jsx("path", {
    fill: "#fff",
    d: "M160.5 171.8c0-.5.4-1 1-1s1 .5 1 1-.4 1-1 1a1 1 0 01-1-1"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M160.5 171.8c0-.5.4-1 1-1s1 .5 1 1-.4 1-1 1a1 1 0 01-1-1z"
  }), __jsx("path", {
    fill: "#fff",
    d: "M163.5 170.3c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1a1 1 0 01-1-1"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M163.5 170.3c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1a1 1 0 01-1-1z"
  }), __jsx("path", {
    fill: "#fff",
    d: "M166.6 169.1c0-.5.5-1 1-1a1 1 0 010 2 1 1 0 01-1-1"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M166.6 169.1c0-.5.5-1 1-1a1 1 0 010 2 1 1 0 01-1-1z"
  }), __jsx("path", {
    fill: "#fff",
    d: "M170 168.5c0-.5.5-1 1.1-1a1 1 0 010 2c-.6 0-1-.4-1-1"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M170 168.5c0-.5.5-1 1.1-1a1 1 0 010 2c-.6 0-1-.4-1-1z"
  }), __jsx("path", {
    fill: "#fff",
    d: "M173.4 168.3c0-.5.4-1 1-1s1 .5 1 1-.4 1-1 1a1 1 0 01-1-1"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M173.4 168.3c0-.5.4-1 1-1s1 .5 1 1-.4 1-1 1a1 1 0 01-1-1z"
  }), __jsx("path", {
    fill: "#fff",
    d: "M176.6 168.5c0-.6.5-1 1-1 .6 0 1.1.4 1.1 1s-.5 1-1 1a1 1 0 01-1.1-1"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M176.6 168.5c0-.6.5-1 1-1 .6 0 1.1.4 1.1 1s-.5 1-1 1a1 1 0 01-1.1-1z"
  }), __jsx("path", {
    fill: "#fff",
    d: "M179.8 168.5c0-.6.5-1 1-1 .7 0 1.2.4 1.2 1s-.5 1-1.1 1a1 1 0 01-1-1"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M179.8 168.5c0-.6.5-1 1-1 .7 0 1.2.4 1.2 1s-.5 1-1.1 1a1 1 0 01-1-1z"
  }), __jsx("path", {
    fill: "#fff",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M178.2 171.2c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 01-1-1m-.7 3.1c0-.6.4-1 1-1s1 .4 1 1c0 .5-.4 1-1 1a1 1 0 01-1-1m-.2 3c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 01-1-1m.9 2.8c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1 0 .6-.5 1-1 1a1 1 0 01-1.1-1m1.8 2.6c0-.5.5-1 1-1a1 1 0 010 2 1 1 0 01-1-1"
  }), __jsx("path", {
    fill: "#fff",
    d: "M182.3 166.5c0-.5.5-1 1-1a1 1 0 010 2 1 1 0 01-1-1"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M182.3 166.5c0-.5.5-1 1-1a1 1 0 010 2 1 1 0 01-1-1z"
  }), __jsx("path", {
    fill: "#fff",
    d: "M185.2 165c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1a1 1 0 01-1-1"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M185.2 165c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1a1 1 0 01-1-1z"
  }), __jsx("path", {
    fill: "#fff",
    d: "M188.3 164c0-.6.5-1 1-1 .7 0 1.1.4 1.1 1 0 .5-.4 1-1 1s-1-.5-1-1"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M188.3 164c0-.6.5-1 1-1 .7 0 1.1.4 1.1 1 0 .5-.4 1-1 1s-1-.5-1-1z"
  }), __jsx("path", {
    fill: "#fff",
    d: "M191.6 163.4c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 01-1-1"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M191.6 163.4c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 01-1-1z"
  }), __jsx("path", {
    fill: "#fff",
    d: "M194.9 163.5c0-.6.4-1 1-1s1 .4 1 1c0 .5-.4 1-1 1a1 1 0 01-1-1"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M194.9 163.5c0-.6.4-1 1-1s1 .4 1 1c0 .5-.4 1-1 1a1 1 0 01-1-1z"
  }), __jsx("path", {
    fill: "#fff",
    d: "M198.2 164c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 01-1-1"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M198.2 164c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 01-1-1z"
  }), __jsx("path", {
    fill: "#fff",
    d: "M201.3 165.1c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 01-1-1"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M201.3 165.1c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 01-1-1z"
  }), __jsx("path", {
    fill: "#c8b100",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M174.7 228.9h-1v-1h-1.5v3.6h1.6v2.5h-3.4v7h1.8v14.3h-3.5v7.3h27.2v-7.3h-3.5V241h1.8v-7h-3.4v-2.5h1.6V228h-1.6v.9h-.8v-1h-1.6v1h-1.1v-1h-1.6v3.6h1.6v2.5H184v-7.8h1.7v-3.5H184v.9h-1v-1h-1.5v1h-.9v-1H179v3.6h1.7v7.8h-3.3v-2.5h1.6V228h-1.6v.9h-.9v-1h-1.8v1zm-6 33.7H196m-27.3-1.8H196m-27.3-1.8H196m-27.3-1.7H196m-27.3-2H196m-23.8-1.6h20.2m-20.2-1.8h20.2m-20.2-2h20.2m-20.2-1.7h20.2m-20.2-1.8h20.2m-20.2-1.8h20.2m-20.2-1.7h20.2m-22-1.8h23.8m-23.8-1.8h23.8m-23.8-1.8h23.8m-23.8-1.8h23.8m-20.4-1.7h17m-10.2-1.8h3.4m-3.4-1.8h3.4m-3.4-1.8h3.4m-3.4-1.7h3.4m-5.1-2.2h6.8m-12 7.5h3.6m-5-2.2h6.6m-6.7 32.6v-1.8m0-1.8v-1.7m-1.8 1.7v1.8m3.4 0V259m1.7 3.6v-1.8m0-1.8v-1.7m0-2v-1.6m0-1.8v-2m-1.7 7.4v-2m-3.4 2v-2m7 0v2m1.5-2v-1.6m-5.1-1.8v1.8m3.5-1.8v1.8m3.3-1.8v1.8M179 252v-2m1.7-1.7v1.7m0-5.3v1.8m-1.7-3.6v1.8m1.7-3.5v1.7m-3.3-1.7v1.7m-3.5-1.7v1.7m-1.6-3.5v1.8m3.3-1.8v1.8m3.4-1.8v1.8m1.7-3.6v1.8m-3.3-1.8v1.8m-3.5-1.8v1.8m-1.6-3.6v1.8m6.7-1.8v1.8m-3.4-5.3v1.8m15.3-1.8h-3.5m5-2.2h-6.6m6.7 32.6v-1.8m0-1.8v-1.7m1.8 1.7v1.8m-3.4 0V259m-1.7 3.6v-1.8m0-1.8v-1.7m0-2v-1.6m0-1.8v-2m1.7 7.4v-2m3.4 2v-2m-7 0v2m-1.5-2v-1.6m5.1-1.8v1.8m-3.5-1.8v1.8m-3.3-1.8v1.8m1.7-1.8v-2m-1.7-1.7v1.7m0-5.3v1.8m1.7-3.6v1.8m-1.7-3.5v1.7m3.3-1.7v1.7m3.5-1.7v1.7m1.6-3.5v1.8m-3.3-1.8v1.8m-3.4-1.8v1.8m-1.7-3.6v1.8m3.3-1.8v1.8m3.5-1.8v1.8m1.6-3.6v1.8m-6.7-1.8v1.8m3.4-5.3v1.8m-7 18v-2m0-5.4v-1.8m0 5.4v-1.8m0-5.3v-1.8m0-1.8v-1.7m0-3.6v-1.8m0-1.7v-1.8m-8.3 4.6h3.5m3.3-5.3h3.4m3.3 5.3h3.5"
  }), __jsx("path", {
    fill: "#c8b100",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M186.8 262.6v-4.7c0-.8-.4-3.5-4.6-3.5-4 0-4.4 2.7-4.4 3.5v4.7h9z"
  }), __jsx("path", {
    fill: "#c8b100",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M179.3 258.2l-2.2-.3c0-.9.2-2.2.9-2.6l2 1.5c-.3.2-.7 1-.7 1.4zm6 0l2.2-.3c0-.9-.2-2.2-.9-2.6l-2 1.5c.3.2.7 1 .7 1.4zm-2.2-2.3l1-2a5.3 5.3 0 00-2-.4l-1.7.4 1.1 2h1.6zm-4.2-5.5v-4.9c0-1.3-1-2.4-2.5-2.4s-2.4 1-2.4 2.4v4.9h4.9zm6.8 0v-4.9c0-1.3 1-2.4 2.5-2.4s2.4 1 2.4 2.4v4.9h-4.9zm-1.7-12l.4-4.4h-4.2l.2 4.4h3.6zm3.3 0l-.4-4.4h4.4l-.5 4.4h-3.5zm-10 0l.2-4.4h-4.2l.5 4.4h3.5z"
  }), __jsx("path", {
    fill: "#0039f0",
    d: "M185.3 262.6v-4c0-.7-.5-2.7-3.1-2.7-2.4 0-2.9 2-2.9 2.7v4h6zm-6.9-12.7v-4.2c0-1-.6-2.2-2-2.2s-2 1.1-2 2.2v4.3h4zm7.8 0v-4.2c0-1 .7-2.2 2-2.2s2 1.1 2 2.2v4.3h-4z"
  }), __jsx("path", {
    fill: "#ad1519",
    d: "M190.8 269.8c0-9.7 7-17.6 15.6-17.6s15.6 7.9 15.6 17.6-7 17.5-15.6 17.5-15.6-7.8-15.6-17.5"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".6",
    d: "M190.8 269.8c0-9.7 7-17.6 15.6-17.6s15.6 7.9 15.6 17.6-7 17.5-15.6 17.5-15.6-7.8-15.6-17.5z"
  }), __jsx("path", {
    fill: "#005bbf",
    d: "M195.4 269.7c0-7 5-12.8 11-12.8s11 5.7 11 12.8c0 7.2-5 13-11 13s-11-5.8-11-13"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".6",
    d: "M195.4 269.7c0-7 5-12.8 11-12.8s11 5.7 11 12.8c0 7.2-5 13-11 13s-11-5.8-11-13z"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M201.2 260.9s-1.3 1.4-1.3 2.7a6 6 0 00.6 2.4c-.2-.5-.8-.8-1.4-.8-.8 0-1.4.6-1.4 1.3l.2.8.5.9c.1-.3.5-.5 1-.5s1 .4 1 1a.9.9 0 010 .2h-1.2v1h1l-.8 1.5 1-.4.8.9.8-.9 1 .4-.7-1.5h1v-1h-1.1a.9.9 0 010-.3 1 1 0 011-1c.4 0 .7.3 1 .6l.4-1 .2-.7a1.4 1.4 0 00-1.4-1.3c-.7 0-1.2.3-1.4.9 0 0 .6-1.2.6-2.5s-1.4-2.7-1.4-2.7"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "round",
    strokeWidth: ".3",
    d: "M201.2 260.9s-1.3 1.4-1.3 2.7a6 6 0 00.6 2.4c-.2-.5-.8-.8-1.4-.8-.8 0-1.4.6-1.4 1.3l.2.8.5.9c.1-.3.5-.5 1-.5s1 .4 1 1a.9.9 0 010 .2h-1.2v1h1l-.8 1.5 1-.4.8.9.8-.9 1 .4-.7-1.5h1v-1h-1.1a.9.9 0 010-.3 1 1 0 011-1c.4 0 .7.3 1 .6l.4-1 .2-.7a1.4 1.4 0 00-1.4-1.3c-.7 0-1.2.3-1.4.9 0 0 .6-1.2.6-2.5s-1.4-2.7-1.4-2.7z"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M199.2 269.9h4.1v-1h-4.1v1z"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M199.2 269.9h4.1v-1h-4.1v1z"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M211.4 260.9s-1.3 1.4-1.3 2.7c0 1.3.6 2.4.6 2.4-.2-.5-.7-.8-1.4-.8-.8 0-1.4.6-1.4 1.3l.2.8.5.9c.2-.3.5-.5 1-.5a1 1 0 011 1 .9.9 0 010 .2h-1.2v1h1l-.8 1.5 1-.4.8.9.8-.9 1 .4-.7-1.5h1v-1h-1.1a.8.8 0 010-.3 1 1 0 011-1c.4 0 .8.3 1 .6l.4-1 .2-.7a1.4 1.4 0 00-1.4-1.3c-.6 0-1.2.3-1.4.9 0 0 .6-1.2.6-2.5s-1.4-2.7-1.4-2.7"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "round",
    strokeWidth: ".3",
    d: "M211.4 260.9s-1.3 1.4-1.3 2.7c0 1.3.6 2.4.6 2.4-.2-.5-.7-.8-1.4-.8-.8 0-1.4.6-1.4 1.3l.2.8.5.9c.2-.3.5-.5 1-.5a1 1 0 011 1 .9.9 0 010 .2h-1.2v1h1l-.8 1.5 1-.4.8.9.8-.9 1 .4-.7-1.5h1v-1h-1.1a.8.8 0 010-.3 1 1 0 011-1c.4 0 .8.3 1 .6l.4-1 .2-.7a1.4 1.4 0 00-1.4-1.3c-.6 0-1.2.3-1.4.9 0 0 .6-1.2.6-2.5s-1.4-2.7-1.4-2.7z"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M209.4 269.9h4.1v-1h-4.1v1z"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M209.4 269.9h4.1v-1h-4.1v1z"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M206.3 269.6s-1.3 1.5-1.3 2.8.6 2.4.6 2.4c-.2-.5-.7-.9-1.4-.9-.8 0-1.4.6-1.4 1.4l.2.7.5 1c.1-.4.5-.6 1-.6a1 1 0 011 1 .9.9 0 010 .3h-1.2v1h1l-.8 1.5 1-.4.8.9.8-1 1 .5-.7-1.5h1v-1h-1.1a.9.9 0 010-.3 1 1 0 011-1c.4 0 .7.2.9.6l.5-1 .2-.7a1.4 1.4 0 00-1.4-1.4c-.7 0-1.2.4-1.4 1 0 0 .6-1.2.6-2.5s-1.4-2.7-1.4-2.7"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "round",
    strokeWidth: ".3",
    d: "M206.3 269.6s-1.3 1.5-1.3 2.8.6 2.4.6 2.4c-.2-.5-.7-.9-1.4-.9-.8 0-1.4.6-1.4 1.4l.2.7.5 1c.1-.4.5-.6 1-.6a1 1 0 011 1 .9.9 0 010 .3h-1.2v1h1l-.8 1.5 1-.4.8.9.8-1 1 .5-.7-1.5h1v-1h-1.1a.9.9 0 010-.3 1 1 0 011-1c.4 0 .7.2.9.6l.5-1 .2-.7a1.4 1.4 0 00-1.4-1.4c-.7 0-1.2.4-1.4 1 0 0 .6-1.2.6-2.5s-1.4-2.7-1.4-2.7z"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M204.3 278.6h4.1v-1h-4.1v1z"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M204.3 278.6h4.1v-1h-4.1v1z"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M237.6 223.4h-.3a1.5 1.5 0 01-.3.4c-.2.2-.6.2-.8 0a.5.5 0 01-.1-.4.5.5 0 01-.5 0c-.3-.1-.3-.5-.1-.7v-.5h-.3l-.1.2c-.2.3-.5.3-.7.2a.6.6 0 010-.2h-.3c-.5.2-.7-1-.7-1.2l-.2.2s.2.7.1 1.2c0 .6-.3 1.2-.3 1.2a9 9 0 012.9 1.6 9 9 0 012.2 2.3l1.2-.5c.6-.2 1.3-.2 1.3-.2l.2-.2c-.3 0-1.5.1-1.5-.4v-.2a.7.7 0 01-.2 0c-.2-.2-.2-.4 0-.7l.2-.1v-.3h-.3l-.2.1c-.2.3-.6.3-.8 0a.4.4 0 01-.1-.4.6.6 0 01-.5 0c-.2-.2-.3-.5 0-.8l.2-.3v-.3"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M237.6 223.4h-.3a1.5 1.5 0 01-.3.4c-.2.2-.6.2-.8 0a.5.5 0 01-.1-.4.5.5 0 01-.5 0c-.3-.1-.3-.5-.1-.7v-.5h-.3l-.1.2c-.2.3-.5.3-.7.2a.6.6 0 010-.2h-.3c-.5.2-.7-1-.7-1.2l-.2.2s.2.7.1 1.2c0 .6-.3 1.2-.3 1.2a9 9 0 012.9 1.6 9 9 0 012.2 2.3l1.2-.5c.6-.2 1.3-.2 1.3-.2l.2-.2c-.3 0-1.5.1-1.5-.4v-.2a.7.7 0 01-.2 0c-.2-.2-.2-.4 0-.7l.2-.1v-.3h-.3l-.2.1c-.2.3-.6.3-.8 0a.4.4 0 01-.1-.4.6.6 0 01-.5 0c-.2-.2-.3-.5 0-.8l.2-.3v-.3z"
  }), __jsx("path", {
    d: "M235.4 224h.2v.3h-.1c-.1 0-.1-.2 0-.2"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M235.4 224h.2v.3h-.1c-.1 0-.1-.2 0-.2z"
  }), __jsx("path", {
    d: "M236.3 224.8l-.3-.2v-.2h.1l.4.3.3.2v.2h-.2l-.3-.3"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M236.3 224.8l-.3-.2v-.2h.1l.4.3.3.2v.2h-.2l-.3-.3"
  }), __jsx("path", {
    d: "M234.6 223.7l-.2-.2s-.1 0 0-.1l.3.1.3.1v.2h-.1l-.3-.1"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M234.6 223.7l-.2-.2s-.1 0 0-.1l.3.1.3.1v.2h-.1l-.3-.1"
  }), __jsx("path", {
    d: "M233.7 223h.2v.2h-.2s-.1-.1 0-.2"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M233.7 223h.2v.2h-.2s-.1-.1 0-.2z"
  }), __jsx("path", {
    d: "M237.3 225.5v-.2h-.3l.1.2h.2"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M237.3 225.5v-.2h-.3l.1.2h.2z"
  }), __jsx("path", {
    d: "M237.9 226.2l.2.2h.1c.1 0 0-.1 0-.2l-.2-.2-.2-.2h-.1v.2l.2.2"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M237.9 226.2l.2.2h.1c.1 0 0-.1 0-.2l-.2-.2-.2-.2h-.1v.2l.2.2"
  }), __jsx("path", {
    d: "M238.8 227v-.3h-.3v.2h.3"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M238.8 227v-.3h-.3v.2h.3z"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M236.2 221.1h-.6l-.1.9v.1h.2l.7-.5-.3-.5"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M236.2 221.1h-.6l-.1.9v.1h.2l.7-.5-.3-.5"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M234.6 221.6v.5l.9.1h.1v-.2l-.5-.7-.5.3"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M234.6 221.6v.5l.9.1h.1v-.2l-.5-.7-.5.3"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M236.4 222.6l-.4.3-.6-.7v-.1h1.1v.5"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M236.4 222.6l-.4.3-.6-.7v-.1h1.1v.5"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M235.3 222a.3.3 0 01.4 0 .3.3 0 010 .3.3.3 0 01-.3 0 .3.3 0 01-.1-.3"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M235.3 222a.3.3 0 01.4 0 .3.3 0 010 .3.3.3 0 01-.3 0 .3.3 0 01-.1-.3z"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M233.2 221.1l-.2-.7-.4-.4s.4-.2.8.1c.4.3 0 .9 0 .9l-.2.1"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M233.2 221.1l-.2-.7-.4-.4s.4-.2.8.1c.4.3 0 .9 0 .9l-.2.1z"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M234.2 221.4l-.4.4-.6-.6v-.2h1v.4"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M234.2 221.4l-.4.4-.6-.6v-.2h1v.4"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M233.1 221l.3-.1v.3c0 .2-.1.2-.2.2l-.1-.3"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M233.1 221l.3-.1v.3c0 .2-.1.2-.2.2l-.1-.3z"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M238.3 222.5h-.5l-.3.7v.2h.2l.8-.4-.2-.5"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M238.3 222.5h-.5l-.3.7v.2h.2l.8-.4-.2-.5"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M236.7 222.8v.5l.8.2h.1v-.2l-.4-.7-.5.2"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M236.7 222.8v.5l.8.2h.1v-.2l-.4-.7-.5.2"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M238.4 224l-.5.2-.4-.7v-.2h.1l.9.2-.1.5"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M238.4 224l-.5.2-.4-.7v-.2h.1l.9.2-.1.5"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M237.3 223.2h.4a.3.3 0 010 .4.3.3 0 01-.3 0 .3.3 0 010-.4"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M237.3 223.2h.4a.3.3 0 010 .4.3.3 0 01-.3 0 .3.3 0 010-.4z"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M240.2 224.3l.1.5-.8.3h-.2v-.2l.4-.8.5.2"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M240.2 224.3l.1.5-.8.3h-.2v-.2l.4-.8.5.2"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M240 225.8l-.5.1-.3-.8v-.1h.2l.8.3-.1.5"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M240 225.8l-.5.1-.3-.8v-.1h.2l.8.3-.1.5"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M238.6 224.3l-.2.5.9.3h.1v-.1l-.3-.8-.5.1"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M238.6 224.3l-.2.5.9.3h.1v-.1l-.3-.8-.5.1"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M239.5 225.2a.3.3 0 000-.3.3.3 0 00-.4 0 .3.3 0 000 .3.3.3 0 00.4 0"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M239.5 225.2a.3.3 0 000-.3.3.3 0 00-.4 0 .3.3 0 000 .3.3.3 0 00.4 0z"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M240.8 227h.8l.5.3s.1-.4-.3-.7c-.3-.3-.8.2-.8.2l-.2.2"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M240.8 227h.8l.5.3s.1-.4-.3-.7c-.3-.3-.8.2-.8.2l-.2.2z"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M240.3 226.1l-.3.5.8.5v-.1h.2l-.1-1-.6.1"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M240.3 226.1l-.3.5.8.5v-.1h.2l-.1-1-.6.1"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M241 227s.1-.1 0-.2h-.3c-.2 0-.2.1-.1.2h.3"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M241 227s.1-.1 0-.2h-.3c-.2 0-.2.1-.1.2h.3zm38-21.9v.6h-2.4v-.6h1v-1.3h-.7v-.5h.6v-.6h.6v.6h.6v.6h-.6v1.2h1"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "0",
    d: "M134.4 217.1v-1.2m-.4 1.2v-1.2m-.2 1.2v-1.2m-.3 1.2v-1.2"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M133.2 217.1v-1.2m-.5 1.1v-1m.2 1v-1m-.7 1v-1m.2 1v-1m-.9 1v-1m.2 1v-1m.3 1v-1m-.7 1v-1m-.3.9v-.8m-.1.8v-.8m-.5.7v-.6m.2.6v-.6m-.4.5v-.5m-.2.5v-.4m-.3.3v-.3m-.3.3v-.2"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".2",
    d: "M129.2 216.6v-.2"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "0",
    d: "M135.7 217v-1m-.5 1v-1m-.4 1.2V216m143 1.1V216m-.4 1.1V216m-.3 1.1V216m-.3 1.2V216"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M276.6 217.1V216m-.6 1v-1m.3 1v-1m-.8 1v-1m.3 1v-1m-.9 1v-1m.2 1v-1m.2 1v-1m-.6 1v-1m-.3.9v-.8m-.2.8v-.8m-.4.7v-.6m.2.6v-.6m-.5.6v-.6m-.2.5v-.4m-.3.4v-.4m-.2.3v-.2"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".2",
    d: "M272.6 216.6v-.2"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "0",
    d: "M279.1 217v-1m-.6 1v-1m-.4 1.1V216"
  }));
};
const ILFlag = ({
  width = '640px',
  height = '480px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 640 480",
    width: width,
    height: height
  }, __jsx("defs", null, __jsx("clipPath", {
    id: "il-a"
  }, __jsx("path", {
    fillOpacity: ".7",
    d: "M-87.6 0H595v512H-87.6z"
  }))), __jsx("g", {
    fillRule: "evenodd",
    clipPath: "url(#il-a)",
    transform: "translate(82.1) scale(.94)"
  }, __jsx("path", {
    fill: "#fff",
    d: "M619.4 512H-112V0h731.4z"
  }), __jsx("path", {
    fill: "#00c",
    d: "M619.4 115.2H-112V48h731.4zm0 350.5H-112v-67.2h731.4zm-483-275l110.1 191.6L359 191.6l-222.6-.8z"
  }), __jsx("path", {
    fill: "#fff",
    d: "M225.8 317.8l20.9 35.5 21.4-35.3-42.4-.2z"
  }), __jsx("path", {
    fill: "#00c",
    d: "M136 320.6L246.2 129l112.4 190.8-222.6.8z"
  }), __jsx("path", {
    fill: "#fff",
    d: "M225.8 191.6l20.9-35.5 21.4 35.4-42.4.1zM182 271.1l-21.7 36 41-.1-19.3-36zm-21.3-66.5l41.2.3-19.8 36.3-21.4-36.6zm151.2 67l20.9 35.5-41.7-.5 20.8-35zm20.5-67l-41.2.3 19.8 36.3 21.4-36.6zm-114.3 0L189.7 256l28.8 50.3 52.8 1.2 32-51.5-29.6-52-55.6.5z"
  })));
};
const CNFlag = ({
  width = '640px',
  height = '480px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 640 480",
    width: width,
    height: height
  }, __jsx("defs", null, __jsx("path", {
    id: "a",
    fill: "#ffde00",
    d: "M-.6.8L0-1 .6.8-1-.3h2z"
  })), __jsx("path", {
    fill: "#de2910",
    d: "M0 0h640v480H0z"
  }), __jsx("use", {
    width: "30",
    height: "20",
    transform: "matrix(71.9991 0 0 72 120 120)",
    xlinkHref: "#a"
  }), __jsx("use", {
    width: "30",
    height: "20",
    transform: "matrix(-12.33562 -20.5871 20.58684 -12.33577 240.3 48)",
    xlinkHref: "#a"
  }), __jsx("use", {
    width: "30",
    height: "20",
    transform: "matrix(-3.38573 -23.75998 23.75968 -3.38578 288 95.8)",
    xlinkHref: "#a"
  }), __jsx("use", {
    width: "30",
    height: "20",
    transform: "matrix(6.5991 -23.0749 23.0746 6.59919 288 168)",
    xlinkHref: "#a"
  }), __jsx("use", {
    width: "30",
    height: "20",
    transform: "matrix(14.9991 -18.73557 18.73533 14.99929 240 216)",
    xlinkHref: "#a"
  }));
};
const USFlag = ({
  width = '640px',
  height = '480px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    id: "flag-icon-css-us",
    viewBox: "0 0 640 480",
    width: width,
    height: height
  }, __jsx("g", {
    fillRule: "evenodd"
  }, __jsx("g", {
    strokeWidth: "1pt"
  }, __jsx("path", {
    fill: "#bd3d44",
    d: "M0 0h972.8v39.4H0zm0 78.8h972.8v39.4H0zm0 78.7h972.8V197H0zm0 78.8h972.8v39.4H0zm0 78.8h972.8v39.4H0zm0 78.7h972.8v39.4H0zm0 78.8h972.8V512H0z",
    transform: "scale(.9375)"
  }), __jsx("path", {
    fill: "#fff",
    d: "M0 39.4h972.8v39.4H0zm0 78.8h972.8v39.3H0zm0 78.7h972.8v39.4H0zm0 78.8h972.8v39.4H0zm0 78.8h972.8v39.4H0zm0 78.7h972.8v39.4H0z",
    transform: "scale(.9375)"
  })), __jsx("path", {
    fill: "#192f5d",
    d: "M0 0h389.1v275.7H0z",
    transform: "scale(.9375)"
  }), __jsx("path", {
    fill: "#fff",
    d: "M32.4 11.8L36 22.7h11.4l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.3-6.7H29zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.5 11-9.2-6.8-9.3 6.7 3.5-10.9-9.2-6.7h11.4zm64.8 0l3.6 10.9H177l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.3-6.7h11.5zm64.9 0l3.5 10.9H242l-9.3 6.7 3.6 11-9.3-6.8-9.3 6.7 3.6-10.9-9.3-6.7h11.4zm64.8 0l3.6 10.9h11.4l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.2-6.7h11.4zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.6 11-9.3-6.8-9.3 6.7 3.6-10.9-9.3-6.7h11.5zM64.9 39.4l3.5 10.9h11.5L70.6 57 74 67.9l-9-6.7-9.3 6.7L59 57l-9-6.7h11.4zm64.8 0l3.6 10.9h11.4l-9.3 6.7 3.6 10.9-9.3-6.7-9.3 6.7L124 57l-9.3-6.7h11.5zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.5 10.9-9.2-6.7-9.3 6.7 3.5-10.9-9.2-6.7H191zm64.8 0l3.6 10.9h11.4l-9.3 6.7 3.6 10.9-9.3-6.7-9.2 6.7 3.5-10.9-9.3-6.7H256zm64.9 0l3.5 10.9h11.5L330 57l3.5 10.9-9.2-6.7-9.3 6.7 3.5-10.9-9.2-6.7h11.4zM32.4 66.9L36 78h11.4l-9.2 6.7 3.5 10.9-9.3-6.8-9.2 6.8 3.5-11-9.3-6.7H29zm64.9 0l3.5 11h11.5l-9.3 6.7 3.5 10.9-9.2-6.8-9.3 6.8 3.5-11-9.2-6.7h11.4zm64.8 0l3.6 11H177l-9.2 6.7 3.5 10.9-9.3-6.8-9.2 6.8 3.5-11-9.3-6.7h11.5zm64.9 0l3.5 11H242l-9.3 6.7 3.6 10.9-9.3-6.8-9.3 6.8 3.6-11-9.3-6.7h11.4zm64.8 0l3.6 11h11.4l-9.2 6.7 3.5 10.9-9.3-6.8-9.2 6.8 3.5-11-9.2-6.7h11.4zm64.9 0l3.5 11h11.5l-9.3 6.7 3.6 10.9-9.3-6.8-9.3 6.8 3.6-11-9.3-6.7h11.5zM64.9 94.5l3.5 10.9h11.5l-9.3 6.7 3.5 11-9.2-6.8-9.3 6.7 3.5-10.9-9.2-6.7h11.4zm64.8 0l3.6 10.9h11.4l-9.3 6.7 3.6 11-9.3-6.8-9.3 6.7 3.6-10.9-9.3-6.7h11.5zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.5 11-9.2-6.8-9.3 6.7 3.5-10.9-9.2-6.7H191zm64.8 0l3.6 10.9h11.4l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.3-6.7H256zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.5 11-9.2-6.8-9.3 6.7 3.5-10.9-9.2-6.7h11.4zM32.4 122.1L36 133h11.4l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.3-6.7H29zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.5 10.9-9.2-6.7-9.3 6.7 3.5-10.9-9.2-6.7h11.4zm64.8 0l3.6 10.9H177l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.3-6.7h11.5zm64.9 0l3.5 10.9H242l-9.3 6.7 3.6 11-9.3-6.8-9.3 6.7 3.6-10.9-9.3-6.7h11.4zm64.8 0l3.6 10.9h11.4l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.2-6.7h11.4zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.6 11-9.3-6.8-9.3 6.7 3.6-10.9-9.3-6.7h11.5zM64.9 149.7l3.5 10.9h11.5l-9.3 6.7 3.5 10.9-9.2-6.8-9.3 6.8 3.5-11-9.2-6.7h11.4zm64.8 0l3.6 10.9h11.4l-9.3 6.7 3.6 10.9-9.3-6.8-9.3 6.8 3.6-11-9.3-6.7h11.5zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.5 10.9-9.2-6.8-9.3 6.8 3.5-11-9.2-6.7H191zm64.8 0l3.6 10.9h11.4l-9.2 6.7 3.5 10.9-9.3-6.8-9.2 6.8 3.5-11-9.3-6.7H256zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.5 10.9-9.2-6.8-9.3 6.8 3.5-11-9.2-6.7h11.4zM32.4 177.2l3.6 11h11.4l-9.2 6.7 3.5 10.8-9.3-6.7-9.2 6.7 3.5-10.9-9.3-6.7H29zm64.9 0l3.5 11h11.5l-9.3 6.7 3.6 10.8-9.3-6.7-9.3 6.7 3.6-10.9-9.3-6.7h11.4zm64.8 0l3.6 11H177l-9.2 6.7 3.5 10.8-9.3-6.7-9.2 6.7 3.5-10.9-9.3-6.7h11.5zm64.9 0l3.5 11H242l-9.3 6.7 3.6 10.8-9.3-6.7-9.3 6.7 3.6-10.9-9.3-6.7h11.4zm64.8 0l3.6 11h11.4l-9.2 6.7 3.5 10.8-9.3-6.7-9.2 6.7 3.5-10.9-9.2-6.7h11.4zm64.9 0l3.5 11h11.5l-9.3 6.7 3.6 10.8-9.3-6.7-9.3 6.7 3.6-10.9-9.3-6.7h11.5zM64.9 204.8l3.5 10.9h11.5l-9.3 6.7 3.5 11-9.2-6.8-9.3 6.7 3.5-10.9-9.2-6.7h11.4zm64.8 0l3.6 10.9h11.4l-9.3 6.7 3.6 11-9.3-6.8-9.3 6.7 3.6-10.9-9.3-6.7h11.5zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.5 11-9.2-6.8-9.3 6.7 3.5-10.9-9.2-6.7H191zm64.8 0l3.6 10.9h11.4l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.3-6.7H256zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.5 11-9.2-6.8-9.3 6.7 3.5-10.9-9.2-6.7h11.4zM32.4 232.4l3.6 10.9h11.4l-9.2 6.7 3.5 10.9-9.3-6.7-9.2 6.7 3.5-11-9.3-6.7H29zm64.9 0l3.5 10.9h11.5L103 250l3.6 10.9-9.3-6.7-9.3 6.7 3.6-11-9.3-6.7h11.4zm64.8 0l3.6 10.9H177l-9 6.7 3.5 10.9-9.3-6.7-9.2 6.7 3.5-11-9.3-6.7h11.5zm64.9 0l3.5 10.9H242l-9.3 6.7 3.6 10.9-9.3-6.7-9.3 6.7 3.6-11-9.3-6.7h11.4zm64.8 0l3.6 10.9h11.4l-9.2 6.7 3.5 10.9-9.3-6.7-9.2 6.7 3.5-11-9.2-6.7h11.4zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.6 10.9-9.3-6.7-9.3 6.7 3.6-11-9.3-6.7h11.5z",
    transform: "scale(.9375)"
  })));
};
const InkPen = ({
  width = '13px',
  height = '20px',
  color = 'currentColor'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 12.768 20.005"
  }, __jsx("defs", null, __jsx("clipPath", {
    id: "clip-path"
  }, __jsx("path", {
    id: "Path_2913",
    "data-name": "Path 2913",
    d: "M10.761-507.144a1.069,1.069,0,0,0,.831-.6,13.713,13.713,0,0,1,1.545-3.142.7.7,0,0,0-.013-.832.7.7,0,0,0-.791-.25,10.984,10.984,0,0,0-5.81,4.315,12.482,12.482,0,0,0-1.877,4.63A3.873,3.873,0,0,0,5-500.563l.872,1.724a12.331,12.331,0,0,0-.137,1.327H4.3a1,1,0,0,0-1,1,1,1,0,0,0,.886.993,2.5,2.5,0,0,1-.858.266,1.557,1.557,0,0,0-1.323,1.513s0,.005,0,.008v.006c0,.005,0,.011,0,.016v.935H.891a.391.391,0,0,0-.391.391A.391.391,0,0,0,.891-492H12.1a.391.391,0,0,0,.391-.391.391.391,0,0,0-.391-.391H10.659v-.935c0-.005,0-.011,0-.016v-.006s0-.006,0-.009a1.557,1.557,0,0,0-1.323-1.513,2.5,2.5,0,0,1-.858-.266,1,1,0,0,0,.886-.993,1,1,0,0,0-1-1H6.512A10.775,10.775,0,0,1,6.62-498.6l2-1.412a2.721,2.721,0,0,0,1.011-1.37c.317-.97.813-2.545,1.378-4.539a.913.913,0,0,0-.352-.945,1.03,1.03,0,0,1-.164-.187v0a1.636,1.636,0,0,1,.267-.091ZM2.79-492.777v-.7H9.878v.7Zm6.864-1.483H3.014a.788.788,0,0,1,.439-.223,2.453,2.453,0,0,0,1.6-.755,1.206,1.206,0,0,0,.165-.276H7.452a1.209,1.209,0,0,0,.165.276,2.453,2.453,0,0,0,1.6.755A.788.788,0,0,1,9.653-494.26Zm-1.071-2.254a.218.218,0,0,1-.218.218H4.3a.218.218,0,0,1-.218-.218.218.218,0,0,1,.218-.218H8.365A.218.218,0,0,1,8.582-496.513Zm1.523-9.794a1.212,1.212,0,0,1,.153.17v0c-.563,1.985-1.056,3.551-1.371,4.516a1.935,1.935,0,0,1-.719.974l-1.36.96a22.335,22.335,0,0,1,1.081-3.756.391.391,0,0,0-.218-.508.391.391,0,0,0-.508.218A22.616,22.616,0,0,0,6.1-500.114l-.406-.8a3.09,3.09,0,0,1-.279-1.956,11.7,11.7,0,0,1,1.757-4.337,10.181,10.181,0,0,1,5.2-3.942,14.966,14.966,0,0,0-1.517,3.142,1.258,1.258,0,0,1-.31.114c-.282.08-.667.189-.788.573A.933.933,0,0,0,10.106-506.307Z",
    transform: "translate(-0.5 512)",
    fill: color
  }))), __jsx("g", {
    id: "Group_3369",
    "data-name": "Group 3369",
    clipPath: "url(#clip-path)"
  }, __jsx("path", {
    id: "Path_2912",
    "data-name": "Path 2912",
    d: "M-4.5-496.6H8.659V-517H-4.5Z",
    transform: "translate(4.305 516.804)",
    fill: color
  })));
};
const AdobeIcon = ({
  width = '20px',
  height = '18px',
  color = 'currentColor'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 20.309 18.116"
  }, __jsx("g", {
    id: "adobe-reader-symbol",
    transform: "translate(0 -2.031)"
  }, __jsx("path", {
    id: "Path_3",
    "data-name": "Path 3",
    d: "M20.138,15.811c-.723-1.305-3.888-2.137-6.683-2.294q-.379-.406-.772-.854c-2.4-2.747-3.375-6.738-3.738-8.852-.043-.448-.091-.821-.131-1.1-.032-.221-.1-.681-.579-.681a.547.547,0,0,0-.406.183.736.736,0,0,0-.115.646c.034.277.085.649.158,1.073.2,2.147.3,6.234-1.351,9.481q-.258.508-.514.973c-3.092.9-5.587,2.5-5.953,3.833a1.314,1.314,0,0,0,.324,1.3,1.883,1.883,0,0,0,1.4.626c1.463,0,3.13-1.629,4.956-4.84a15.678,15.678,0,0,1,2.4-.442c.3-.031.8-.1,1.1-.141a15.048,15.048,0,0,1,2.744-.148c2.241,2.33,4.074,3.511,5.447,3.511a1.913,1.913,0,0,0,1.718-1.012A1.253,1.253,0,0,0,20.138,15.811ZM1.773,19.067a.822.822,0,0,1-.616-.293.239.239,0,0,1-.063-.267c.188-.685,1.771-1.859,4.084-2.711C3.872,17.858,2.621,19.067,1.773,19.067Zm8.289-5.409c-.287.044-.754.1-1.042.135a15.8,15.8,0,0,0-1.606.246l.068-.134a15.362,15.362,0,0,0,1.5-5.689,15.89,15.89,0,0,0,2.89,5.157c.035.04.071.08.105.121A14.952,14.952,0,0,0,10.062,13.658ZM19.2,16.544a.844.844,0,0,1-.8.465h0c-.858,0-2.178-.812-3.758-2.3,2.445.307,4.236,1.047,4.557,1.628A.177.177,0,0,1,19.2,16.544Z",
    fill: color
  })));
};
const UserAvatar = ({
  width = '25px',
  height = '30px',
  color = 'currentColor'
}) => {
  return __jsx("svg", {
    id: "user",
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 25.057 30.034"
  }, __jsx("path", {
    "data-name": "Path 1",
    d: "M94.265,14.467a7,7,0,0,0,5.115-2.119A7,7,0,0,0,101.5,7.233,7,7,0,0,0,99.38,2.119a7.232,7.232,0,0,0-10.229,0,7,7,0,0,0-2.119,5.114,7,7,0,0,0,2.12,5.115A7,7,0,0,0,94.265,14.467Zm0,0",
    transform: "translate(-81.926)",
    fill: color
  }), __jsx("path", {
    "data-name": "Path 2",
    d: "M25,255.9a17.868,17.868,0,0,0-.243-1.9,14.951,14.951,0,0,0-.467-1.908,9.425,9.425,0,0,0-.784-1.779,6.715,6.715,0,0,0-1.183-1.541,5.215,5.215,0,0,0-1.7-1.068,5.872,5.872,0,0,0-2.169-.393,2.2,2.2,0,0,0-1.176.5c-.352.23-.765.5-1.225.79a7.018,7.018,0,0,1-1.585.7,6.154,6.154,0,0,1-3.877,0,7,7,0,0,1-1.584-.7c-.456-.291-.868-.557-1.226-.79a2.2,2.2,0,0,0-1.175-.5,5.864,5.864,0,0,0-2.169.393,5.211,5.211,0,0,0-1.7,1.068,6.716,6.716,0,0,0-1.182,1.541A9.443,9.443,0,0,0,.77,252.1,14.987,14.987,0,0,0,.3,254.006a17.8,17.8,0,0,0-.243,1.9c-.04.575-.06,1.171-.06,1.774a4.987,4.987,0,0,0,1.481,3.773A5.332,5.332,0,0,0,5.3,262.843H19.759a5.331,5.331,0,0,0,3.816-1.392,4.985,4.985,0,0,0,1.481-3.773C25.057,257.072,25.036,256.475,25,255.9Zm0,0",
    transform: "translate(0 -232.809)",
    fill: color
  }));
};
const BookIcon = ({
  width = '30px',
  height = '25px',
  color = 'currentColor'
}) => {
  return __jsx("svg", {
    id: "book",
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 30.011 24.606"
  }, __jsx("path", {
    "data-name": "Path 1",
    d: "M243.79,21.432V0l-.818.069a31.449,31.449,0,0,0-9.533,2.324L232,2.99V24.337l1.048-.436a32.716,32.716,0,0,1,9.861-2.4Zm0,0",
    transform: "translate(-216.459)",
    fill: color
  }), __jsx("path", {
    "data-name": "Path 2",
    d: "M276.924,47.3h-1.608V66.054a.536.536,0,0,1-.492.536l-1.372.113q-.594.049-1.185.122c-.128.015-.255.036-.382.054-.265.035-.53.071-.794.113-.154.025-.307.053-.46.08-.236.041-.473.082-.709.129-.161.032-.322.068-.486.1-.225.048-.449.1-.672.149-.167.04-.334.082-.5.124-.217.054-.433.111-.648.172-.168.046-.335.095-.5.144-.214.063-.426.128-.637.2l-.5.161q-.318.107-.633.221c-.161.058-.322.117-.486.178l-.22.086h12.283Zm0,0",
    transform: "translate(-246.913 -44.129)",
    fill: color
  }), __jsx("path", {
    "data-name": "Path 3",
    d: "M40.818.069,40,0V21.433l.951.081a32.5,32.5,0,0,1,9.85,2.412l.988.411V2.99l-1.438-.6A31.448,31.448,0,0,0,40.818.069Zm0,0",
    transform: "translate(-37.32)",
    fill: color
  }), __jsx("path", {
    "data-name": "Path 4",
    d: "M0,47.3V68.733H12.292c-.066-.026-.132-.054-.2-.078-.153-.058-.308-.114-.462-.17-.218-.079-.435-.156-.654-.229q-.238-.08-.477-.156-.326-.107-.654-.2c-.161-.047-.322-.094-.482-.139-.22-.061-.441-.119-.663-.176-.161-.041-.322-.083-.486-.121-.225-.054-.45-.1-.676-.151-.161-.035-.322-.07-.482-.1-.234-.046-.468-.087-.7-.128L5.891,67c-.259-.041-.519-.076-.779-.111-.131-.018-.262-.038-.393-.053q-.59-.071-1.179-.122L2.1,66.59a.536.536,0,0,1-.49-.536V47.3Zm0,0",
    transform: "translate(0 -44.129)",
    fill: color
  }));
};
const FurnitureIcon = ({
  width = '30px',
  height = '26px',
  color = 'currentColor'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 30.402 26.348"
  }, __jsx("g", {
    id: "bed",
    transform: "translate(0 -32)"
  }, __jsx("g", {
    id: "Group_2",
    "data-name": "Group 2",
    transform: "translate(0 32)"
  }, __jsx("g", {
    id: "Group_1",
    "data-name": "Group 1",
    transform: "translate(0 0)"
  }, __jsx("path", {
    "data-name": "Path 5",
    d: "M29.9,47.2h-.507v-1.52a2.533,2.533,0,0,0-1.52-2.319V35.547a.507.507,0,0,0-.3-.464,2.006,2.006,0,0,0,.3-1.056,2.027,2.027,0,1,0-4.054,0A2.006,2.006,0,0,0,24.1,35.04H6.305a2.006,2.006,0,0,0,.282-1.013,2.027,2.027,0,0,0-4.054,0,2.006,2.006,0,0,0,.3,1.056.507.507,0,0,0-.3.464v7.815a2.533,2.533,0,0,0-1.52,2.319V47.2H.507A.507.507,0,0,0,0,47.708V54.8a.507.507,0,0,0,.507.507h.507v2.533a.507.507,0,0,0,.507.507H3.547a.507.507,0,0,0,.507-.507V55.308H26.348v2.533a.507.507,0,0,0,.507.507h2.027a.507.507,0,0,0,.507-.507V55.308H29.9A.507.507,0,0,0,30.4,54.8V47.708A.507.507,0,0,0,29.9,47.2ZM25.842,33.013a1.013,1.013,0,1,1-1.013,1.013A1.013,1.013,0,0,1,25.842,33.013Zm-21.281,0a1.013,1.013,0,1,1-1.013,1.013A1.013,1.013,0,0,1,4.56,33.013Zm-1.013,3.04H26.855v7.094h-2.04a2.507,2.507,0,0,0,.52-1.52V40.614A2.537,2.537,0,0,0,22.8,38.08H18.748a2.537,2.537,0,0,0-2.533,2.534v1.013a2.507,2.507,0,0,0,.52,1.52H13.668a2.507,2.507,0,0,0,.52-1.52V40.614a2.537,2.537,0,0,0-2.533-2.534H7.6a2.537,2.537,0,0,0-2.533,2.534v1.013a2.507,2.507,0,0,0,.52,1.52H3.547Zm20.775,4.56v1.013a1.52,1.52,0,0,1-1.52,1.52H18.748a1.52,1.52,0,0,1-1.52-1.52V40.614a1.52,1.52,0,0,1,1.52-1.52H22.8A1.52,1.52,0,0,1,24.322,40.614Zm-11.147,0v1.013a1.52,1.52,0,0,1-1.52,1.52H7.6a1.52,1.52,0,0,1-1.52-1.52V40.614a1.52,1.52,0,0,1,1.52-1.52h4.054A1.52,1.52,0,0,1,13.174,40.614ZM2.027,45.681a1.52,1.52,0,0,1,1.52-1.52H26.855a1.52,1.52,0,0,1,1.52,1.52V47.2H2.027ZM3.04,57.335H2.027V55.308H3.04Zm25.335,0H27.362V55.308h1.013Zm1.013-3.04H1.013v-6.08H29.389Z",
    transform: "translate(0 -32)",
    fill: color
  }))), __jsx("g", {
    id: "Group_4",
    "data-name": "Group 4",
    transform: "translate(2.027 52.268)"
  }, __jsx("g", {
    id: "Group_3",
    "data-name": "Group 3"
  }, __jsx("path", {
    "data-name": "Path 6",
    d: "M34.533,352H32.507a.507.507,0,0,0,0,1.013h2.027a.507.507,0,0,0,0-1.013Z",
    transform: "translate(-32 -352)",
    fill: color
  }))), __jsx("g", {
    id: "Group_6",
    "data-name": "Group 6",
    transform: "translate(6.08 52.268)"
  }, __jsx("g", {
    id: "Group_5",
    "data-name": "Group 5"
  }, __jsx("path", {
    "data-name": "Path 7",
    d: "M117.788,352H96.507a.507.507,0,0,0,0,1.013h21.281a.507.507,0,0,0,0-1.013Z",
    transform: "translate(-96 -352)",
    fill: color
  })))));
};

/***/ })

/******/ });