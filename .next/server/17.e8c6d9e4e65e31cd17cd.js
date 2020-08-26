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
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: external "@redq/reuse-modal"
var reuse_modal_ = __webpack_require__("qbum");

// EXTERNAL MODULE: ./contexts/drawer/drawer.provider.tsx
var drawer_provider = __webpack_require__("NVBV");

// EXTERNAL MODULE: ./containers/LayoutContainer/Header/MobileDrawer.tsx + 2 modules
var MobileDrawer = __webpack_require__("XGHh");

// EXTERNAL MODULE: ./containers/LayoutContainer/Header/Header.style.tsx
var Header_style = __webpack_require__("epBr");

// EXTERNAL MODULE: ./components/SearchBox/SearchBox.tsx + 3 modules
var SearchBox = __webpack_require__("sQCo");

// EXTERNAL MODULE: ./contexts/search/search.context.tsx
var search_context = __webpack_require__("s5Ij");

// EXTERNAL MODULE: ./contexts/header/header.context.tsx
var header_context = __webpack_require__("hkOL");

// EXTERNAL MODULE: ./image/logo.svg
var logo = __webpack_require__("FaRf");
var logo_default = /*#__PURE__*/__webpack_require__.n(logo);

// EXTERNAL MODULE: ./components/AllSvgIcon.tsx
var AllSvgIcon = __webpack_require__("yBv+");

// EXTERNAL MODULE: ./components/Logo/Logo.tsx + 1 modules
var Logo = __webpack_require__("FKpK");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "@styled-system/theme-get"
var theme_get_ = __webpack_require__("/JeY");

// CONCATENATED MODULE: ./containers/LayoutContainer/Header/Menu/LanguageSwitcher/LanguageSwitcher.style.tsx


const Box = external_styled_components_default.a.div.withConfig({
  displayName: "LanguageSwitcherstyle__Box",
  componentId: "sc-2keas9-0"
})(["margin-right:20px;.popover-wrapper.right{.popover-content{padding:15px 0;}}@media (max-width:767px){margin-right:10px;}"]);
const SelectedItem = external_styled_components_default.a.button.withConfig({
  displayName: "LanguageSwitcherstyle__SelectedItem",
  componentId: "sc-2keas9-1"
})(["width:auto;height:38px;display:flex;align-items:center;background-color:", ";border:1px solid ", ";padding-top:0;padding-bottom:0;padding-left:10px;padding-right:10px;border-radius:", "px;outline:0;cursor:pointer;span{display:flex;align-items:center;font-family:'Lato',sans-serif;font-size:", "px;font-weight:", ";color:", ";text-decoration:none;&:first-child{margin-right:auto;}}"], Object(theme_get_["themeGet"])('colors.white', '#ffffff'), Object(theme_get_["themeGet"])('colors.borderColor', '#f1f1f1'), Object(theme_get_["themeGet"])('radius.3', '6'), Object(theme_get_["themeGet"])('fontSizes.2', '15'), Object(theme_get_["themeGet"])('fontWeights.6', '700'), Object(theme_get_["themeGet"])('colors.primary', '#3da2ff'));
const Flag = external_styled_components_default.a.div.withConfig({
  displayName: "LanguageSwitcherstyle__Flag",
  componentId: "sc-2keas9-2"
})(["box-shadow:0 0 3px rgba(0,0,0,0.2);display:flex;align-items:center;justify-content:center;border-radius:2px;overflow:hidden;svg{width:20px;height:auto;}"]);
const MenuItem = external_styled_components_default.a.button.withConfig({
  displayName: "LanguageSwitcherstyle__MenuItem",
  componentId: "sc-2keas9-3"
})(["width:100%;font-size:15px;font-weight:700;color:", ";line-height:1.2em;display:block;padding:15px 30px;border-radius:6px;transition:0.15s ease-in-out;display:flex;align-items:center;border:0;border-bottom:1px solid ", ";border-radius:0;background-color:transparent;outline:0;cursor:pointer;&:last-child{border-bottom:0;}@media (max-width:1400px){margin-right:10px;font-size:15px;}@media only screen and (min-width:991px) and (max-width:1200px){padding:15px 30px;}span{box-shadow:0 0 3px rgba(0,0,0,0.2);display:flex;align-items:center;justify-content:center;border-radius:2px;overflow:hidden;margin-right:15px;svg{display:block;width:20px;height:auto;}}"], Object(theme_get_["themeGet"])('colors.darkBold', '#0D1136'), Object(theme_get_["themeGet"])('colors.borderColor', '#f1f1f1'));
// EXTERNAL MODULE: ./components/Popover/Popover.tsx + 2 modules
var Popover = __webpack_require__("9Yrk");

// EXTERNAL MODULE: external "react-intl"
var external_react_intl_ = __webpack_require__("k004");

// EXTERNAL MODULE: ./contexts/language/language.provider.tsx + 2 modules
var language_provider = __webpack_require__("dq9M");

// CONCATENATED MODULE: ./containers/LayoutContainer/Header/Menu/LanguageSwitcher/LanguageSwitcher.tsx
var __jsx = external_react_default.a.createElement;






const LANGUAGES = [{
  id: 'ar',
  label: 'Arabic',
  intlLangName: 'intlArabic',
  icon: __jsx(AllSvgIcon["SAFlag"], null)
}, {
  id: 'zh',
  label: 'Chinese',
  intlLangName: 'intlChinese',
  icon: __jsx(AllSvgIcon["CNFlag"], null)
}, {
  id: 'en',
  label: 'English',
  intlLangName: 'intlEnglish',
  icon: __jsx(AllSvgIcon["USFlag"], null)
}, {
  id: 'de',
  label: 'German',
  intlLangName: 'intlGerman',
  icon: __jsx(AllSvgIcon["DEFlag"], null)
}, {
  id: 'he',
  label: 'Hebrew',
  intlLangName: 'intlHebrew',
  icon: __jsx(AllSvgIcon["ILFlag"], null)
}, {
  id: 'es',
  label: 'Spanish',
  intlLangName: 'intlSpanish',
  icon: __jsx(AllSvgIcon["ESFlag"], null)
}];

const LanguageMenu = ({
  onClick
}) => {
  return __jsx(external_react_default.a.Fragment, null, LANGUAGES.map(item => __jsx(MenuItem, {
    onClick: onClick,
    key: item.id,
    value: item.id
  }, __jsx("span", null, item.icon), __jsx(external_react_intl_["FormattedMessage"], {
    id: item.intlLangName,
    defaultMessage: item.label
  }))));
};

const LanguageSwitcher = () => {
  const {
    locale,
    changeLanguage
  } = Object(language_provider["b" /* useLocale */])();
  const selectedLanguage = LANGUAGES.find(x => x.id === locale);

  const languageChangeHandler = e => {
    changeLanguage(e.target.value);
  };

  return __jsx(Box, null, __jsx(Popover["a" /* default */], {
    className: "right",
    handler: __jsx(SelectedItem, null, __jsx(Flag, null, selectedLanguage === null || selectedLanguage === void 0 ? void 0 : selectedLanguage.icon)),
    content: __jsx(LanguageMenu, {
      onClick: languageChangeHandler
    })
  }));
};

/* harmony default export */ var LanguageSwitcher_LanguageSwitcher = (LanguageSwitcher);
// EXTERNAL MODULE: ./containers/LayoutContainer/is-home-page.ts
var is_home_page = __webpack_require__("DFvO");

// EXTERNAL MODULE: ./helper/useComponentSize.js + 1 modules
var useComponentSize = __webpack_require__("869v");

// CONCATENATED MODULE: ./containers/LayoutContainer/Header/MobileHeader.tsx
var MobileHeader_jsx = external_react_default.a.createElement;

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
  const router = Object(router_["useRouter"])();
  const {
    0: text,
    1: setText
  } = Object(external_react_["useState"])(state.text || '');

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
    Object(reuse_modal_["closeModal"])();
  };

  return MobileHeader_jsx(Header_style["p" /* SearchModalWrapper */], null, MobileHeader_jsx(Header_style["o" /* SearchModalClose */], {
    type: "submit",
    onClick: () => Object(reuse_modal_["closeModal"])()
  }, MobileHeader_jsx(AllSvgIcon["LongArrowLeft"], null)), MobileHeader_jsx(SearchBox["a" /* default */], {
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
  } = Object(external_react_["useContext"])(search_context["a" /* SearchContext */]);
  const [mobileHeaderRef, dimensions] = Object(useComponentSize["a" /* default */])();
  const {
    headerDispatch
  } = Object(external_react_["useContext"])(header_context["a" /* HeaderContext */]);
  const headerHeight = dimensions.height;
  external_react_default.a.useEffect(() => {
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
    Object(reuse_modal_["openModal"])({
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
      closeComponent: () => MobileHeader_jsx("div", null)
    });
  };

  const isHomePage = Object(is_home_page["a" /* isCategoryPage */])(pathname);
  return MobileHeader_jsx(drawer_provider["a" /* DrawerProvider */], null, MobileHeader_jsx(Header_style["n" /* MobileHeaderWrapper */], null, MobileHeader_jsx(Header_style["m" /* MobileHeaderInnerWrapper */], {
    className: className,
    ref: mobileHeaderRef
  }, MobileHeader_jsx(Header_style["h" /* DrawerWrapper */], null, MobileHeader_jsx(MobileDrawer["a" /* default */], null)), MobileHeader_jsx(Header_style["k" /* LogoWrapper */], null, MobileHeader_jsx(Logo["a" /* default */], {
    imageUrl: logo_default.a,
    alt: "shop logo"
  })), MobileHeader_jsx(LanguageSwitcher_LanguageSwitcher, null), isHomePage ? MobileHeader_jsx(Header_style["q" /* SearchWrapper */], {
    onClick: handleSearchModal,
    className: "searchIconWrapper"
  }, MobileHeader_jsx(AllSvgIcon["SearchIcon"], null)) : null)));
};

/* harmony default export */ var Header_MobileHeader = __webpack_exports__["default"] = (MobileHeader);

/***/ })

};;