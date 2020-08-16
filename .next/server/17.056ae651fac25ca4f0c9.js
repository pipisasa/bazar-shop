exports.ids = [17];
exports.modules = {

/***/ "869v":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// CONCATENATED MODULE: ./helper/debounce.ts
function debounce(func, wait, immediate) {
  let timeout;
  return function executedFunction(...args) {
    const context = this;

    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

/* harmony default export */ var helper_debounce = (debounce);
// CONCATENATED MODULE: ./helper/useComponentSize.js

 // maybe use a hook instead?

function useDimensions(liveMeasure = true, delay = 250, initialDimensions = {}) {
  const {
    0: dimensions,
    1: setDimensions
  } = Object(external_react_["useState"])(initialDimensions);
  const {
    0: node,
    1: setNode
  } = Object(external_react_["useState"])(null);
  const ref = Object(external_react_["useCallback"])(newNode => {
    setNode(newNode);
  }, []);
  Object(external_react_["useEffect"])(() => {
    // need ref to continue
    if (!node) {
      return;
    }

    const measure = () => {
      window.requestAnimationFrame(() => {
        const newDimensions = node.getBoundingClientRect();
        setDimensions(newDimensions);
      });
    }; // invoke measure right away


    measure();

    if (liveMeasure) {
      const debounceMeasure = helper_debounce(measure, delay);

      if ('ResizeObserver' in window) {
        const resizeObserver = new ResizeObserver(debounceMeasure);
        resizeObserver.observe(node);
        window.addEventListener('scroll', debounceMeasure);
        return () => {
          resizeObserver.disconnect();
          window.removeEventListener('scroll', debounceMeasure);
        };
      }

      window.addEventListener('resize', debounceMeasure);
      window.addEventListener('scroll', debounceMeasure);
      return () => {
        window.removeEventListener('resize', debounceMeasure);
        window.removeEventListener('scroll', debounceMeasure);
      };
    }
  }, [node, liveMeasure, delay]);
  return [ref, dimensions, node];
}

/* harmony default export */ var useComponentSize = __webpack_exports__["a"] = (useDimensions); // Usage
// function App() {
//   const [wrapperRef, dimensions] = useDimensions();
//   return (
//     <div ref={wrapperRef}>
//       height: {dimensions.height}
//       width: {dimensions.width}
//     </div>
//   );
// }

/***/ }),

/***/ "DEOu":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _redq_reuse_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("qbum");
/* harmony import */ var _redq_reuse_modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_redq_reuse_modal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var contexts_drawer_drawer_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("NVBV");
/* harmony import */ var _MobileDrawer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("XGHh");
/* harmony import */ var _Header_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("epBr");
/* harmony import */ var components_SearchBox_SearchBox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("sQCo");
/* harmony import */ var contexts_search_search_context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("s5Ij");
/* harmony import */ var contexts_header_header_context__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("hkOL");
/* harmony import */ var image_logo_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("FaRf");
/* harmony import */ var image_logo_svg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(image_logo_svg__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var components_AllSvgIcon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("yBv+");
/* harmony import */ var components_Logo_Logo__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("FKpK");
/* harmony import */ var _Menu_LanguageSwitcher_LanguageSwitcher__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("E00L");
/* harmony import */ var _is_home_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("DFvO");
/* harmony import */ var helper_useComponentSize__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("869v");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

















const SearchModal = ({
  state,
  pathname,
  handleSearch
}) => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  const {
    0: text,
    1: setText
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(state.text || '');

  const handleSearchInput = text => {
    setText(text);
  };

  const {
    page
  } = state,
        urlState = _objectWithoutProperties(state, ["page"]);

  const handleClickSearchButton = () => {
    handleSearch(text);
    router.push({
      pathname: pathname,
      query: _objectSpread(_objectSpread({}, urlState), {}, {
        text
      })
    });
    Object(_redq_reuse_modal__WEBPACK_IMPORTED_MODULE_2__["closeModal"])();
  };

  return __jsx(_Header_style__WEBPACK_IMPORTED_MODULE_5__[/* SearchModalWrapper */ "p"], null, __jsx(_Header_style__WEBPACK_IMPORTED_MODULE_5__[/* SearchModalClose */ "o"], {
    type: "submit",
    onClick: () => Object(_redq_reuse_modal__WEBPACK_IMPORTED_MODULE_2__["closeModal"])()
  }, __jsx(components_AllSvgIcon__WEBPACK_IMPORTED_MODULE_10__["LongArrowLeft"], null)), __jsx(components_SearchBox_SearchBox__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
    className: "header-modal-search",
    bordered: false,
    inputStyle: {
      height: 35
    },
    buttonText: "",
    placeholder: "Search",
    handleSearch: handleSearchInput,
    value: text,
    onClick: handleClickSearchButton,
    pathname: pathname
  }));
};

const MobileHeader = ({
  className,
  pathname
}) => {
  const {
    state,
    dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(contexts_search_search_context__WEBPACK_IMPORTED_MODULE_7__[/* SearchContext */ "a"]);
  const [mobileHeaderRef, dimensions] = Object(helper_useComponentSize__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"])();
  const {
    headerDispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(contexts_header_header_context__WEBPACK_IMPORTED_MODULE_8__[/* HeaderContext */ "a"]);
  const headerHeight = dimensions.height;
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    headerDispatch({
      type: 'GET_MOBILE_HEIGHT',
      payload: _objectSpread(_objectSpread({}, state), {}, {
        mobileHeight: headerHeight
      })
    });
  }, [headerHeight]);

  const handleSearch = text => {
    dispatch({
      type: 'UPDATE',
      payload: _objectSpread(_objectSpread({}, state), {}, {
        text
      })
    });
  };

  const handleSearchModal = () => {
    Object(_redq_reuse_modal__WEBPACK_IMPORTED_MODULE_2__["openModal"])({
      show: true,
      config: {
        enableResizing: false,
        disableDragging: true,
        className: 'search-modal-mobile',
        width: '100%',
        height: '100%'
      },
      closeOnClickOutside: false,
      component: SearchModal,
      componentProps: {
        state,
        pathname,
        handleSearch
      },
      closeComponent: () => __jsx("div", null)
    });
  };

  const isHomePage = Object(_is_home_page__WEBPACK_IMPORTED_MODULE_13__[/* isCategoryPage */ "a"])(pathname);
  return __jsx(contexts_drawer_drawer_provider__WEBPACK_IMPORTED_MODULE_3__[/* DrawerProvider */ "a"], null, __jsx(_Header_style__WEBPACK_IMPORTED_MODULE_5__[/* MobileHeaderWrapper */ "n"], null, __jsx(_Header_style__WEBPACK_IMPORTED_MODULE_5__[/* MobileHeaderInnerWrapper */ "m"], {
    className: className,
    ref: mobileHeaderRef
  }, __jsx(_Header_style__WEBPACK_IMPORTED_MODULE_5__[/* DrawerWrapper */ "h"], null, __jsx(_MobileDrawer__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], null)), __jsx(_Header_style__WEBPACK_IMPORTED_MODULE_5__[/* LogoWrapper */ "k"], null, __jsx(components_Logo_Logo__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], {
    imageUrl: image_logo_svg__WEBPACK_IMPORTED_MODULE_9___default.a,
    alt: "shop logo"
  })), __jsx(_Menu_LanguageSwitcher_LanguageSwitcher__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"], null), isHomePage ? __jsx(_Header_style__WEBPACK_IMPORTED_MODULE_5__[/* SearchWrapper */ "q"], {
    onClick: handleSearchModal,
    className: "searchIconWrapper"
  }, __jsx(components_AllSvgIcon__WEBPACK_IMPORTED_MODULE_10__["SearchIcon"], null)) : null)));
};

/* harmony default export */ __webpack_exports__["default"] = (MobileHeader);

/***/ })

};;