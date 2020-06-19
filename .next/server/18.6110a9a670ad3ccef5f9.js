exports.ids = [18];
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

// CONCATENATED MODULE: ./contexts/drawer/drawer.context.tsx

const DrawerContext = Object(external_react_["createContext"])({});
// CONCATENATED MODULE: ./contexts/drawer/drawer.provider.tsx
var __jsx = external_react_default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const initialState = {
  isOpen: false
};

function reducer(state, action) {
  switch (action.type) {
    case 'TOGGLE':
      return _objectSpread(_objectSpread({}, state), {}, {
        isOpen: !state.isOpen
      });

    default:
      return state;
  }
}

const DrawerProvider = ({
  children
}) => {
  const {
    0: state,
    1: dispatch
  } = Object(external_react_["useReducer"])(reducer, initialState);
  return __jsx(DrawerContext.Provider, {
    value: {
      state,
      dispatch
    }
  }, children);
};
// EXTERNAL MODULE: external "react-custom-scrollbars"
var external_react_custom_scrollbars_ = __webpack_require__("qC9r");

// EXTERNAL MODULE: external "rc-drawer"
var external_rc_drawer_ = __webpack_require__("ik7d");
var external_rc_drawer_default = /*#__PURE__*/__webpack_require__.n(external_rc_drawer_);

// CONCATENATED MODULE: ./components/Drawer/Drawer.tsx
var Drawer_jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const Drawer = (_ref) => {
  let {
    className,
    children,
    closeButton,
    closeButtonStyle,
    drawerHandler,
    toggleHandler,
    open,
    width,
    placement
  } = _ref,
      props = _objectWithoutProperties(_ref, ["className", "children", "closeButton", "closeButtonStyle", "drawerHandler", "toggleHandler", "open", "width", "placement"]);

  return Drawer_jsx(external_react_["Fragment"], null, Drawer_jsx(external_rc_drawer_default.a, _extends({
    open: open,
    onClose: toggleHandler,
    className: `drawer ${className ? className : ''}`.trim(),
    width: width,
    placement: placement,
    handler: false,
    level: null,
    duration: ".4s"
  }, props), closeButton && Drawer_jsx("div", {
    className: "drawer__close",
    onClick: toggleHandler,
    style: closeButtonStyle
  }, closeButton), children), Drawer_jsx("div", {
    className: "drawer__handler",
    style: {
      display: 'inline-block'
    },
    onClick: toggleHandler
  }, drawerHandler));
};

Drawer.defaultProps = {
  width: '300px',
  placement: 'left'
};
/* harmony default export */ var Drawer_Drawer = (Drawer);
// EXTERNAL MODULE: ./components/Button/Button.tsx + 2 modules
var Button = __webpack_require__("89Ff");

// EXTERNAL MODULE: ./components/NavLink/NavLink.tsx
var NavLink = __webpack_require__("zoLa");

// EXTERNAL MODULE: ./components/AllSvgIcon.tsx
var AllSvgIcon = __webpack_require__("yBv+");

// EXTERNAL MODULE: ./contexts/auth/auth.context.tsx
var auth_context = __webpack_require__("j5Ji");

// EXTERNAL MODULE: ./containers/SignInOutForm/Form.tsx + 8 modules
var Form = __webpack_require__("8F88");

// EXTERNAL MODULE: external "react-intl"
var external_react_intl_ = __webpack_require__("k004");

// EXTERNAL MODULE: ./containers/LayoutContainer/Header/Header.style.tsx
var Header_style = __webpack_require__("epBr");

// EXTERNAL MODULE: ./image/user.jpg
var user = __webpack_require__("jmV6");
var user_default = /*#__PURE__*/__webpack_require__.n(user);

// EXTERNAL MODULE: ./constants/navigation.ts
var navigation = __webpack_require__("kwfN");

// CONCATENATED MODULE: ./containers/LayoutContainer/Header/MobileDrawer.tsx
var MobileDrawer_jsx = external_react_default.a.createElement;















const DrawerMenuItems = [{
  id: 1,
  intlLabelId: 'navLinkHome',
  label: 'Home',
  href: '/'
}, {
  id: 2,
  intlLabelId: 'navlinkCheckout',
  label: 'Checkout',
  href: navigation["h" /* PROCEED_TO_CHECKOUT_PAGE */]
}, {
  id: 3,
  label: 'Checkout Second',
  intlLabelId: 'alternativeCheckout',
  href: navigation["a" /* ALTERNATIVE_CHECKOUT_PAGE */]
}, {
  id: 4,
  intlLabelId: 'navlinkProfile',
  label: 'Profile',
  href: navigation["i" /* PROFILE_PAGE */]
}, {
  id: 5,
  intlLabelId: 'sidebarYourOrder',
  label: 'Order',
  href: navigation["k" /* YOUR_ORDER */]
}, {
  id: 6,
  intlLabelId: 'navlinkOrderReceived',
  label: 'Received',
  href: navigation["g" /* ORDER_RECEIVED */]
}, {
  id: 7,
  intlLabelId: 'navlinkHelp',
  label: 'Help',
  href: navigation["b" /* HELP_PAGE */]
}, {
  id: 8,
  intlLabelId: 'navlinkOffer',
  label: 'Offer',
  href: navigation["f" /* OFFER_PAGE */]
}];

const MobileDrawer = () => {
  const {
    state,
    dispatch
  } = Object(external_react_["useContext"])(DrawerContext);
  const {
    authState: {
      isAuthenticated
    },
    authDispatch
  } = Object(external_react_["useContext"])(auth_context["a" /* AuthContext */]); // Toggle drawer

  const toggleHandler = external_react_default.a.useCallback(() => {
    dispatch({
      type: 'TOGGLE'
    });
  }, [dispatch]);

  const handleLogout = () => {
    if (false) {}
  };

  const resetSearch = () => {
    dispatch({
      type: 'RESET'
    });
  };

  const signInOutForm = () => {
    dispatch({
      type: 'TOGGLE'
    });
    authDispatch({
      type: 'SIGNIN'
    });
    Object(reuse_modal_["openModal"])({
      show: true,
      overlayClassName: 'quick-view-overlay',
      closeOnClickOutside: true,
      component: Form["a" /* default */],
      closeComponent: '',
      config: {
        enableResizing: false,
        disableDragging: true,
        className: 'quick-view-modal',
        width: 458,
        height: 'auto'
      }
    });
  };

  return MobileDrawer_jsx(Drawer_Drawer, {
    width: "316px",
    drawerHandler: MobileDrawer_jsx(Header_style["g" /* HamburgerIcon */], null, MobileDrawer_jsx("span", null), MobileDrawer_jsx("span", null), MobileDrawer_jsx("span", null)),
    open: state.isOpen,
    toggleHandler: toggleHandler,
    closeButton: MobileDrawer_jsx(Header_style["a" /* DrawerClose */], null, MobileDrawer_jsx(AllSvgIcon["CloseIcon"], null))
  }, MobileDrawer_jsx(external_react_custom_scrollbars_["Scrollbars"], {
    autoHide: true
  }, MobileDrawer_jsx(Header_style["b" /* DrawerContentWrapper */], null, MobileDrawer_jsx(Header_style["e" /* DrawerProfile */], null, isAuthenticated ? MobileDrawer_jsx(Header_style["h" /* LoginView */], null, MobileDrawer_jsx(Header_style["q" /* UserAvatar */], null, MobileDrawer_jsx("img", {
    src: user_default.a,
    alt: "user_avatar"
  })), MobileDrawer_jsx(Header_style["r" /* UserDetails */], null, MobileDrawer_jsx("h3", null, "David Kinderson"), MobileDrawer_jsx("span", null, "+990 374 987"))) : MobileDrawer_jsx(Header_style["j" /* LogoutView */], null, MobileDrawer_jsx(Button["a" /* default */], {
    intlButtonId: "mobileSignInButtonText",
    title: "Join In",
    size: "small",
    className: "sign_in" // variant="primary"
    ,
    onClick: signInOutForm
  }))), MobileDrawer_jsx(Header_style["c" /* DrawerMenu */], null, DrawerMenuItems.map(item => MobileDrawer_jsx(Header_style["d" /* DrawerMenuItem */], {
    key: item.id
  }, MobileDrawer_jsx(NavLink["a" /* default */], {
    onClick: toggleHandler,
    href: item.href,
    label: item.label,
    intlId: item.intlLabelId,
    className: "drawer_menu_item"
  })))), isAuthenticated && MobileDrawer_jsx(Header_style["p" /* UesrOptionMenu */], null, MobileDrawer_jsx(Header_style["d" /* DrawerMenuItem */], null, MobileDrawer_jsx(NavLink["a" /* default */], {
    href: "/profile",
    label: "Your Account Settings",
    className: "drawer_menu_item",
    intlId: "navlinkAccountSettings"
  })), MobileDrawer_jsx(Header_style["d" /* DrawerMenuItem */], null, MobileDrawer_jsx("div", {
    onClick: handleLogout,
    className: "drawer_menu_item"
  }, MobileDrawer_jsx("span", {
    className: "logoutBtn"
  }, MobileDrawer_jsx(external_react_intl_["FormattedMessage"], {
    id: "navlinkLogout",
    defaultMessage: "Logout"
  }))))))));
};

/* harmony default export */ var Header_MobileDrawer = (MobileDrawer);
// EXTERNAL MODULE: ./components/SearchBox/SearchBox.tsx + 3 modules
var SearchBox = __webpack_require__("sQCo");

// EXTERNAL MODULE: ./contexts/search/search.context.tsx
var search_context = __webpack_require__("s5Ij");

// EXTERNAL MODULE: ./contexts/header/header.context.tsx
var header_context = __webpack_require__("hkOL");

// EXTERNAL MODULE: ./image/logo.svg
var logo = __webpack_require__("FaRf");
var logo_default = /*#__PURE__*/__webpack_require__.n(logo);

// EXTERNAL MODULE: ./components/Logo/Logo.tsx + 1 modules
var Logo = __webpack_require__("FKpK");

// EXTERNAL MODULE: ./containers/LayoutContainer/Header/Menu/LanguageSwitcher/LanguageSwitcher.tsx + 1 modules
var LanguageSwitcher = __webpack_require__("E00L");

// EXTERNAL MODULE: ./containers/LayoutContainer/is-home-page.ts
var is_home_page = __webpack_require__("DFvO");

// EXTERNAL MODULE: ./helper/useComponentSize.js + 1 modules
var useComponentSize = __webpack_require__("869v");

// CONCATENATED MODULE: ./containers/LayoutContainer/Header/MobileHeader.tsx
var MobileHeader_jsx = external_react_default.a.createElement;

function MobileHeader_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function MobileHeader_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { MobileHeader_ownKeys(Object(source), true).forEach(function (key) { MobileHeader_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { MobileHeader_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function MobileHeader_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function MobileHeader_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = MobileHeader_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function MobileHeader_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

















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
        urlState = MobileHeader_objectWithoutProperties(state, ["page"]);

  const handleClickSearchButton = () => {
    handleSearch(text);
    router.push({
      pathname: pathname,
      query: MobileHeader_objectSpread(MobileHeader_objectSpread({}, urlState), {}, {
        text
      })
    });
    Object(reuse_modal_["closeModal"])();
  };

  return MobileHeader_jsx(Header_style["n" /* SearchModalWrapper */], null, MobileHeader_jsx(Header_style["m" /* SearchModalClose */], {
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
      payload: MobileHeader_objectSpread(MobileHeader_objectSpread({}, state), {}, {
        mobileHeight: headerHeight
      })
    });
  }, [headerHeight]);

  const handleSearch = text => {
    dispatch({
      type: 'UPDATE',
      payload: MobileHeader_objectSpread(MobileHeader_objectSpread({}, state), {}, {
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
  return MobileHeader_jsx(DrawerProvider, null, MobileHeader_jsx(Header_style["l" /* MobileHeaderWrapper */], null, MobileHeader_jsx(Header_style["k" /* MobileHeaderInnerWrapper */], {
    className: className,
    ref: mobileHeaderRef
  }, MobileHeader_jsx(Header_style["f" /* DrawerWrapper */], null, MobileHeader_jsx(Header_MobileDrawer, null)), MobileHeader_jsx(Header_style["i" /* LogoWrapper */], null, MobileHeader_jsx(Logo["a" /* default */], {
    imageUrl: logo_default.a,
    alt: "shop logo"
  })), MobileHeader_jsx(LanguageSwitcher["a" /* default */], null), isHomePage ? MobileHeader_jsx(Header_style["o" /* SearchWrapper */], {
    onClick: handleSearchModal,
    className: "searchIconWrapper"
  }, MobileHeader_jsx(AllSvgIcon["SearchIcon"], null)) : null)));
};

/* harmony default export */ var Header_MobileHeader = __webpack_exports__["default"] = (MobileHeader);

/***/ })

};;