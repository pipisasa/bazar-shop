webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./containers/LayoutContainer/Header/MobileDrawer.tsx":
/*!************************************************************!*\
  !*** ./containers/LayoutContainer/Header/MobileDrawer.tsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _redq_reuse_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @redq/reuse-modal */ \"./node_modules/@redq/reuse-modal/es/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-custom-scrollbars */ \"./node_modules/react-custom-scrollbars/lib/index.js\");\n/* harmony import */ var react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var components_Drawer_Drawer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/Drawer/Drawer */ \"./components/Drawer/Drawer.tsx\");\n/* harmony import */ var components_Button_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/Button/Button */ \"./components/Button/Button.tsx\");\n/* harmony import */ var components_NavLink_NavLink__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/NavLink/NavLink */ \"./components/NavLink/NavLink.tsx\");\n/* harmony import */ var components_AllSvgIcon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/AllSvgIcon */ \"./components/AllSvgIcon.tsx\");\n/* harmony import */ var contexts_drawer_drawer_context__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! contexts/drawer/drawer.context */ \"./contexts/drawer/drawer.context.tsx\");\n/* harmony import */ var contexts_auth_auth_context__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! contexts/auth/auth.context */ \"./contexts/auth/auth.context.tsx\");\n/* harmony import */ var _SignInOutForm_Form__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../SignInOutForm/Form */ \"./containers/SignInOutForm/Form.tsx\");\n/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-intl */ \"./node_modules/react-intl/lib/index.js\");\n/* harmony import */ var _Header_style__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Header.style */ \"./containers/LayoutContainer/Header/Header.style.tsx\");\n/* harmony import */ var image_user_jpg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! image/user.jpg */ \"./image/user.jpg\");\n/* harmony import */ var image_user_jpg__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(image_user_jpg__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var constants_navigation__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! constants/navigation */ \"./constants/navigation.ts\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/pipi/Documents/pr/bazar-shop/containers/LayoutContainer/Header/MobileDrawer.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar DrawerMenuItems = [{\n  id: -3,\n  label: 'Men',\n  href: '/?type=men'\n}, {\n  id: -2,\n  label: 'Women',\n  href: '/?type=women'\n}, {\n  id: -1,\n  label: 'Kids',\n  href: '/?type=kids'\n}, {\n  id: 1,\n  intlLabelId: 'navLinkHome',\n  label: 'Home',\n  href: '/'\n}, {\n  id: 2,\n  intlLabelId: 'navlinkCheckout',\n  label: 'Checkout',\n  href: constants_navigation__WEBPACK_IMPORTED_MODULE_14__[\"PROCEED_TO_CHECKOUT_PAGE\"]\n}, {\n  id: 3,\n  label: 'Checkout Second',\n  intlLabelId: 'alternativeCheckout',\n  href: constants_navigation__WEBPACK_IMPORTED_MODULE_14__[\"ALTERNATIVE_CHECKOUT_PAGE\"]\n}, {\n  id: 4,\n  intlLabelId: 'navlinkProfile',\n  label: 'Profile',\n  href: constants_navigation__WEBPACK_IMPORTED_MODULE_14__[\"PROFILE_PAGE\"]\n}, {\n  id: 5,\n  intlLabelId: 'sidebarYourOrder',\n  label: 'Order',\n  href: constants_navigation__WEBPACK_IMPORTED_MODULE_14__[\"YOUR_ORDER\"]\n}, {\n  id: 6,\n  intlLabelId: 'navlinkOrderReceived',\n  label: 'Received',\n  href: constants_navigation__WEBPACK_IMPORTED_MODULE_14__[\"ORDER_RECEIVED\"]\n}, {\n  id: 7,\n  intlLabelId: 'navlinkHelp',\n  label: 'Help',\n  href: constants_navigation__WEBPACK_IMPORTED_MODULE_14__[\"HELP_PAGE\"]\n}, {\n  id: 8,\n  intlLabelId: 'navlinkOffer',\n  label: 'Offer',\n  href: constants_navigation__WEBPACK_IMPORTED_MODULE_14__[\"OFFER_PAGE\"]\n}];\n\nvar MobileDrawer = function MobileDrawer() {\n  _s();\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(contexts_drawer_drawer_context__WEBPACK_IMPORTED_MODULE_8__[\"DrawerContext\"]),\n      state = _useContext.state,\n      dispatch = _useContext.dispatch;\n\n  var _useContext2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(contexts_auth_auth_context__WEBPACK_IMPORTED_MODULE_9__[\"AuthContext\"]),\n      isAuthenticated = _useContext2.authState.isAuthenticated,\n      authDispatch = _useContext2.authDispatch; // Toggle drawer\n\n\n  var toggleHandler = react__WEBPACK_IMPORTED_MODULE_0___default.a.useCallback(function () {\n    dispatch({\n      type: 'TOGGLE'\n    });\n  }, [dispatch]);\n\n  var handleLogout = function handleLogout() {\n    if (true) {\n      localStorage.removeItem('access_token');\n      authDispatch({\n        type: 'SIGN_OUT'\n      });\n      next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push('/');\n    }\n  }; // const resetSearch = () => {\n  //   dispatch({\n  //     type: 'RESET',\n  //   });\n  // };\n\n\n  var signInOutForm = function signInOutForm() {\n    dispatch({\n      type: 'TOGGLE'\n    });\n    authDispatch({\n      type: 'SIGNIN'\n    });\n    Object(_redq_reuse_modal__WEBPACK_IMPORTED_MODULE_1__[\"openModal\"])({\n      show: true,\n      overlayClassName: 'quick-view-overlay',\n      closeOnClickOutside: true,\n      component: _SignInOutForm_Form__WEBPACK_IMPORTED_MODULE_10__[\"default\"],\n      closeComponent: '',\n      config: {\n        enableResizing: false,\n        disableDragging: true,\n        className: 'quick-view-modal',\n        width: 458,\n        height: 'auto'\n      }\n    });\n  };\n\n  return __jsx(components_Drawer_Drawer__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    width: \"316px\",\n    drawerHandler: __jsx(_Header_style__WEBPACK_IMPORTED_MODULE_12__[\"HamburgerIcon\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 157,\n        columnNumber: 9\n      }\n    }, __jsx(\"span\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 158,\n        columnNumber: 11\n      }\n    }), __jsx(\"span\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 159,\n        columnNumber: 11\n      }\n    }), __jsx(\"span\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 160,\n        columnNumber: 11\n      }\n    })),\n    open: state.isOpen,\n    toggleHandler: toggleHandler,\n    closeButton: __jsx(_Header_style__WEBPACK_IMPORTED_MODULE_12__[\"DrawerClose\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 166,\n        columnNumber: 9\n      }\n    }, __jsx(components_AllSvgIcon__WEBPACK_IMPORTED_MODULE_7__[\"CloseIcon\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 167,\n        columnNumber: 11\n      }\n    })),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 154,\n      columnNumber: 5\n    }\n  }, __jsx(react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_3__[\"Scrollbars\"], {\n    autoHide: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 171,\n      columnNumber: 7\n    }\n  }, __jsx(_Header_style__WEBPACK_IMPORTED_MODULE_12__[\"DrawerContentWrapper\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 172,\n      columnNumber: 9\n    }\n  }, __jsx(_Header_style__WEBPACK_IMPORTED_MODULE_12__[\"DrawerProfile\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 173,\n      columnNumber: 11\n    }\n  }, isAuthenticated ? __jsx(_Header_style__WEBPACK_IMPORTED_MODULE_12__[\"LoginView\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 175,\n      columnNumber: 15\n    }\n  }, __jsx(_Header_style__WEBPACK_IMPORTED_MODULE_12__[\"UserAvatar\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 176,\n      columnNumber: 17\n    }\n  }, __jsx(\"img\", {\n    src: image_user_jpg__WEBPACK_IMPORTED_MODULE_13___default.a,\n    alt: \"user_avatar\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 177,\n      columnNumber: 19\n    }\n  })), __jsx(_Header_style__WEBPACK_IMPORTED_MODULE_12__[\"UserDetails\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 179,\n      columnNumber: 17\n    }\n  }, __jsx(\"h3\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 180,\n      columnNumber: 19\n    }\n  }, \"David Kinderson\"), __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 181,\n      columnNumber: 19\n    }\n  }, \"+990 374 987\"))) : __jsx(_Header_style__WEBPACK_IMPORTED_MODULE_12__[\"LogoutView\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 185,\n      columnNumber: 15\n    }\n  }, __jsx(components_Button_Button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    intlButtonId: \"mobileSignInButtonText\",\n    title: \"Join In\",\n    size: \"small\",\n    className: \"sign_in\" // variant=\"primary\"\n    ,\n    onClick: signInOutForm,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 186,\n      columnNumber: 17\n    }\n  }))), __jsx(_Header_style__WEBPACK_IMPORTED_MODULE_12__[\"DrawerMenu\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 198,\n      columnNumber: 11\n    }\n  }, DrawerMenuItems.map(function (item) {\n    return __jsx(_Header_style__WEBPACK_IMPORTED_MODULE_12__[\"DrawerMenuItem\"], {\n      key: item.id,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 200,\n        columnNumber: 15\n      }\n    }, item.hr ? \"hello\" : __jsx(components_NavLink_NavLink__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      onClick: toggleHandler,\n      href: item.href,\n      label: item.label,\n      intlId: item.intlLabelId,\n      className: \"drawer_menu_item\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 204,\n        columnNumber: 19\n      }\n    }));\n  })), isAuthenticated && __jsx(_Header_style__WEBPACK_IMPORTED_MODULE_12__[\"UesrOptionMenu\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 217,\n      columnNumber: 13\n    }\n  }, __jsx(_Header_style__WEBPACK_IMPORTED_MODULE_12__[\"DrawerMenuItem\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 218,\n      columnNumber: 15\n    }\n  }, __jsx(components_NavLink_NavLink__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    href: \"/profile\",\n    label: \"Your Account Settings\",\n    className: \"drawer_menu_item\",\n    intlId: \"navlinkAccountSettings\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 219,\n      columnNumber: 17\n    }\n  })), __jsx(_Header_style__WEBPACK_IMPORTED_MODULE_12__[\"DrawerMenuItem\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 226,\n      columnNumber: 15\n    }\n  }, __jsx(\"div\", {\n    onClick: handleLogout,\n    className: \"drawer_menu_item\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 227,\n      columnNumber: 17\n    }\n  }, __jsx(\"span\", {\n    className: \"logoutBtn\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 228,\n      columnNumber: 19\n    }\n  }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_11__[\"FormattedMessage\"], {\n    id: \"navlinkLogout\",\n    defaultMessage: \"Logout\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 229,\n      columnNumber: 21\n    }\n  }))))))));\n};\n\n_s(MobileDrawer, \"caxFACAD2HzbhTJfLubWJxlnac0=\");\n\n_c = MobileDrawer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MobileDrawer);\n\nvar _c;\n\n$RefreshReg$(_c, \"MobileDrawer\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb250YWluZXJzL0xheW91dENvbnRhaW5lci9IZWFkZXIvTW9iaWxlRHJhd2VyLnRzeD81YzYxIl0sIm5hbWVzIjpbIkRyYXdlck1lbnVJdGVtcyIsImlkIiwibGFiZWwiLCJocmVmIiwiaW50bExhYmVsSWQiLCJQUk9DRUVEX1RPX0NIRUNLT1VUX1BBR0UiLCJBTFRFUk5BVElWRV9DSEVDS09VVF9QQUdFIiwiUFJPRklMRV9QQUdFIiwiWU9VUl9PUkRFUiIsIk9SREVSX1JFQ0VJVkVEIiwiSEVMUF9QQUdFIiwiT0ZGRVJfUEFHRSIsIk1vYmlsZURyYXdlciIsInVzZUNvbnRleHQiLCJEcmF3ZXJDb250ZXh0Iiwic3RhdGUiLCJkaXNwYXRjaCIsIkF1dGhDb250ZXh0IiwiaXNBdXRoZW50aWNhdGVkIiwiYXV0aFN0YXRlIiwiYXV0aERpc3BhdGNoIiwidG9nZ2xlSGFuZGxlciIsIlJlYWN0IiwidXNlQ2FsbGJhY2siLCJ0eXBlIiwiaGFuZGxlTG9nb3V0IiwibG9jYWxTdG9yYWdlIiwicmVtb3ZlSXRlbSIsIlJvdXRlciIsInB1c2giLCJzaWduSW5PdXRGb3JtIiwib3Blbk1vZGFsIiwic2hvdyIsIm92ZXJsYXlDbGFzc05hbWUiLCJjbG9zZU9uQ2xpY2tPdXRzaWRlIiwiY29tcG9uZW50IiwiQXV0aGVudGljYXRpb25Gb3JtIiwiY2xvc2VDb21wb25lbnQiLCJjb25maWciLCJlbmFibGVSZXNpemluZyIsImRpc2FibGVEcmFnZ2luZyIsImNsYXNzTmFtZSIsIndpZHRoIiwiaGVpZ2h0IiwiaXNPcGVuIiwiVXNlckltYWdlIiwibWFwIiwiaXRlbSIsImhyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFhQTtBQUVBO0FBVUEsSUFBTUEsZUFBZSxHQUFHLENBQ3RCO0FBQ0VDLElBQUUsRUFB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RSxVQUFJLEVBQUUwQixJQUFJLENBQUM1QyxJQUZiO0FBR0UsV0FBSyxFQUFFNEMsSUFBSSxDQUFDN0MsS0FIZDtBQUlFLFlBQU0sRUFBRTZDLElBQUksQ0FBQzNDLFdBSmY7QUFLRSxlQUFTLEVBQUMsa0JBTFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUpKLENBRG1CO0FBQUEsR0FBcEIsQ0FESCxDQTFCRixFQTRDR2MsZUFBZSxJQUNkLE1BQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsa0VBQUQ7QUFDRSxRQUFJLEVBQUMsVUFEUDtBQUVFLFNBQUssRUFBQyx1QkFGUjtBQUdFLGFBQVMsRUFBQyxrQkFIWjtBQUlFLFVBQU0sRUFBQyx3QkFKVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixFQVNFLE1BQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssV0FBTyxFQUFFTyxZQUFkO0FBQTRCLGFBQVMsRUFBQyxrQkFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQU0sYUFBUyxFQUFDLFdBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDREQUFEO0FBQ0UsTUFBRSxFQUFDLGVBREw7QUFFRSxrQkFBYyxFQUFDLFFBRmpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLENBREYsQ0FURixDQTdDSixDQURGLENBakJGLENBREY7QUF5RkQsQ0E1SUQ7O0dBQU1iLFk7O0tBQUFBLFk7QUE4SVNBLDJFQUFmIiwiZmlsZSI6Ii4vY29udGFpbmVycy9MYXlvdXRDb250YWluZXIvSGVhZGVyL01vYmlsZURyYXdlci50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG9wZW5Nb2RhbCB9IGZyb20gJ0ByZWRxL3JldXNlLW1vZGFsJztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHsgU2Nyb2xsYmFycyB9IGZyb20gJ3JlYWN0LWN1c3RvbS1zY3JvbGxiYXJzJztcbmltcG9ydCBEcmF3ZXIgZnJvbSAnY29tcG9uZW50cy9EcmF3ZXIvRHJhd2VyJztcbmltcG9ydCBCdXR0b24gZnJvbSAnY29tcG9uZW50cy9CdXR0b24vQnV0dG9uJztcbmltcG9ydCBOYXZMaW5rIGZyb20gJ2NvbXBvbmVudHMvTmF2TGluay9OYXZMaW5rJztcbmltcG9ydCB7IENsb3NlSWNvbiB9IGZyb20gJ2NvbXBvbmVudHMvQWxsU3ZnSWNvbic7XG5pbXBvcnQgeyBEcmF3ZXJDb250ZXh0IH0gZnJvbSAnY29udGV4dHMvZHJhd2VyL2RyYXdlci5jb250ZXh0JztcbmltcG9ydCB7IEF1dGhDb250ZXh0IH0gZnJvbSAnY29udGV4dHMvYXV0aC9hdXRoLmNvbnRleHQnO1xuaW1wb3J0IEF1dGhlbnRpY2F0aW9uRm9ybSBmcm9tICcuLi8uLi9TaWduSW5PdXRGb3JtL0Zvcm0nO1xuaW1wb3J0IHsgRm9ybWF0dGVkTWVzc2FnZSB9IGZyb20gJ3JlYWN0LWludGwnO1xuaW1wb3J0IHtcbiAgSGFtYnVyZ2VySWNvbixcbiAgRHJhd2VyQ29udGVudFdyYXBwZXIsXG4gIERyYXdlckNsb3NlLFxuICBEcmF3ZXJQcm9maWxlLFxuICBMb2dvdXRWaWV3LFxuICBMb2dpblZpZXcsXG4gIFVzZXJBdmF0YXIsXG4gIFVzZXJEZXRhaWxzLFxuICBEcmF3ZXJNZW51LFxuICBEcmF3ZXJNZW51SXRlbSxcbiAgVWVzck9wdGlvbk1lbnUsXG59IGZyb20gJy4vSGVhZGVyLnN0eWxlJztcbmltcG9ydCBVc2VySW1hZ2UgZnJvbSAnaW1hZ2UvdXNlci5qcGcnO1xuXG5pbXBvcnQge1xuICBQUk9DRUVEX1RPX0NIRUNLT1VUX1BBR0UsXG4gIEFMVEVSTkFUSVZFX0NIRUNLT1VUX1BBR0UsXG4gIFBST0ZJTEVfUEFHRSxcbiAgWU9VUl9PUkRFUixcbiAgT1JERVJfUkVDRUlWRUQsXG4gIEhFTFBfUEFHRSxcbiAgT0ZGRVJfUEFHRSxcbn0gZnJvbSAnY29uc3RhbnRzL25hdmlnYXRpb24nO1xuXG5jb25zdCBEcmF3ZXJNZW51SXRlbXMgPSBbXG4gIHtcbiAgICBpZDogLTMsXG4gICAgbGFiZWw6ICdNZW4nLFxuICAgIGhyZWY6ICcvP3R5cGU9bWVuJyxcbiAgfSx7XG4gICAgaWQ6IC0yLFxuICAgIGxhYmVsOiAnV29tZW4nLFxuICAgIGhyZWY6ICcvP3R5cGU9d29tZW4nLFxuICB9LHtcbiAgICBpZDogLTEsXG4gICAgbGFiZWw6ICdLaWRzJyxcbiAgICBocmVmOiAnLz90eXBlPWtpZHMnLFxuICB9LFxuICB7XG4gICAgaWQ6IDEsXG4gICAgaW50bExhYmVsSWQ6ICduYXZMaW5rSG9tZScsXG4gICAgbGFiZWw6ICdIb21lJyxcbiAgICBocmVmOiAnLycsXG4gIH0sXG4gIHtcbiAgICBpZDogMixcbiAgICBpbnRsTGFiZWxJZDogJ25hdmxpbmtDaGVja291dCcsXG4gICAgbGFiZWw6ICdDaGVja291dCcsXG4gICAgaHJlZjogUFJPQ0VFRF9UT19DSEVDS09VVF9QQUdFLFxuICB9LFxuICB7XG4gICAgaWQ6IDMsXG4gICAgbGFiZWw6ICdDaGVja291dCBTZWNvbmQnLFxuICAgIGludGxMYWJlbElkOiAnYWx0ZXJuYXRpdmVDaGVja291dCcsXG4gICAgaHJlZjogQUxURVJOQVRJVkVfQ0hFQ0tPVVRfUEFHRSxcbiAgfSxcbiAge1xuICAgIGlkOiA0LFxuICAgIGludGxMYWJlbElkOiAnbmF2bGlua1Byb2ZpbGUnLFxuICAgIGxhYmVsOiAnUHJvZmlsZScsXG4gICAgaHJlZjogUFJPRklMRV9QQUdFLFxuICB9LFxuICB7XG4gICAgaWQ6IDUsXG4gICAgaW50bExhYmVsSWQ6ICdzaWRlYmFyWW91ck9yZGVyJyxcbiAgICBsYWJlbDogJ09yZGVyJyxcbiAgICBocmVmOiBZT1VSX09SREVSLFxuICB9LFxuICB7XG4gICAgaWQ6IDYsXG4gICAgaW50bExhYmVsSWQ6ICduYXZsaW5rT3JkZXJSZWNlaXZlZCcsXG4gICAgbGFiZWw6ICdSZWNlaXZlZCcsXG4gICAgaHJlZjogT1JERVJfUkVDRUlWRUQsXG4gIH0sXG4gIHtcbiAgICBpZDogNyxcbiAgICBpbnRsTGFiZWxJZDogJ25hdmxpbmtIZWxwJyxcbiAgICBsYWJlbDogJ0hlbHAnLFxuICAgIGhyZWY6IEhFTFBfUEFHRSxcbiAgfSxcbiAge1xuICAgIGlkOiA4LFxuICAgIGludGxMYWJlbElkOiAnbmF2bGlua09mZmVyJyxcbiAgICBsYWJlbDogJ09mZmVyJyxcbiAgICBocmVmOiBPRkZFUl9QQUdFLFxuICB9LFxuXTtcblxuY29uc3QgTW9iaWxlRHJhd2VyOiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudCA9ICgpID0+IHtcbiAgY29uc3QgeyBzdGF0ZSwgZGlzcGF0Y2ggfSA9IHVzZUNvbnRleHQ8YW55PihEcmF3ZXJDb250ZXh0KTtcbiAgY29uc3Qge1xuICAgIGF1dGhTdGF0ZTogeyBpc0F1dGhlbnRpY2F0ZWQgfSxcbiAgICBhdXRoRGlzcGF0Y2gsXG4gIH0gPSB1c2VDb250ZXh0PGFueT4oQXV0aENvbnRleHQpO1xuICAvLyBUb2dnbGUgZHJhd2VyXG4gIGNvbnN0IHRvZ2dsZUhhbmRsZXIgPSBSZWFjdC51c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogJ1RPR0dMRScsXG4gICAgfSk7XG4gIH0sIFtkaXNwYXRjaF0pO1xuXG4gIGNvbnN0IGhhbmRsZUxvZ291dCA9ICgpID0+IHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdhY2Nlc3NfdG9rZW4nKTtcbiAgICAgIGF1dGhEaXNwYXRjaCh7IHR5cGU6ICdTSUdOX09VVCcgfSk7XG4gICAgICBSb3V0ZXIucHVzaCgnLycpO1xuICAgIH1cbiAgfTtcbiAgLy8gY29uc3QgcmVzZXRTZWFyY2ggPSAoKSA9PiB7XG4gIC8vICAgZGlzcGF0Y2goe1xuICAvLyAgICAgdHlwZTogJ1JFU0VUJyxcbiAgLy8gICB9KTtcbiAgLy8gfTtcblxuICBjb25zdCBzaWduSW5PdXRGb3JtID0gKCkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6ICdUT0dHTEUnLFxuICAgIH0pO1xuXG4gICAgYXV0aERpc3BhdGNoKHtcbiAgICAgIHR5cGU6ICdTSUdOSU4nLFxuICAgIH0pO1xuXG4gICAgb3Blbk1vZGFsKHtcbiAgICAgIHNob3c6IHRydWUsXG4gICAgICBvdmVybGF5Q2xhc3NOYW1lOiAncXVpY2stdmlldy1vdmVybGF5JyxcbiAgICAgIGNsb3NlT25DbGlja091dHNpZGU6IHRydWUsXG4gICAgICBjb21wb25lbnQ6IEF1dGhlbnRpY2F0aW9uRm9ybSxcbiAgICAgIGNsb3NlQ29tcG9uZW50OiAnJyxcbiAgICAgIGNvbmZpZzoge1xuICAgICAgICBlbmFibGVSZXNpemluZzogZmFsc2UsXG4gICAgICAgIGRpc2FibGVEcmFnZ2luZzogdHJ1ZSxcbiAgICAgICAgY2xhc3NOYW1lOiAncXVpY2stdmlldy1tb2RhbCcsXG4gICAgICAgIHdpZHRoOiA0NTgsXG4gICAgICAgIGhlaWdodDogJ2F1dG8nLFxuICAgICAgfSxcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxEcmF3ZXJcbiAgICAgIHdpZHRoPSczMTZweCdcbiAgICAgIGRyYXdlckhhbmRsZXI9e1xuICAgICAgICA8SGFtYnVyZ2VySWNvbj5cbiAgICAgICAgICA8c3BhbiAvPlxuICAgICAgICAgIDxzcGFuIC8+XG4gICAgICAgICAgPHNwYW4gLz5cbiAgICAgICAgPC9IYW1idXJnZXJJY29uPlxuICAgICAgfVxuICAgICAgb3Blbj17c3RhdGUuaXNPcGVufVxuICAgICAgdG9nZ2xlSGFuZGxlcj17dG9nZ2xlSGFuZGxlcn1cbiAgICAgIGNsb3NlQnV0dG9uPXtcbiAgICAgICAgPERyYXdlckNsb3NlPlxuICAgICAgICAgIDxDbG9zZUljb24gLz5cbiAgICAgICAgPC9EcmF3ZXJDbG9zZT5cbiAgICAgIH1cbiAgICA+XG4gICAgICA8U2Nyb2xsYmFycyBhdXRvSGlkZT5cbiAgICAgICAgPERyYXdlckNvbnRlbnRXcmFwcGVyPlxuICAgICAgICAgIDxEcmF3ZXJQcm9maWxlPlxuICAgICAgICAgICAge2lzQXV0aGVudGljYXRlZCA/IChcbiAgICAgICAgICAgICAgPExvZ2luVmlldz5cbiAgICAgICAgICAgICAgICA8VXNlckF2YXRhcj5cbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtVc2VySW1hZ2V9IGFsdD0ndXNlcl9hdmF0YXInIC8+XG4gICAgICAgICAgICAgICAgPC9Vc2VyQXZhdGFyPlxuICAgICAgICAgICAgICAgIDxVc2VyRGV0YWlscz5cbiAgICAgICAgICAgICAgICAgIDxoMz5EYXZpZCBLaW5kZXJzb248L2gzPlxuICAgICAgICAgICAgICAgICAgPHNwYW4+Kzk5MCAzNzQgOTg3PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvVXNlckRldGFpbHM+XG4gICAgICAgICAgICAgIDwvTG9naW5WaWV3PlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPExvZ291dFZpZXc+XG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgaW50bEJ1dHRvbklkPSdtb2JpbGVTaWduSW5CdXR0b25UZXh0J1xuICAgICAgICAgICAgICAgICAgdGl0bGU9J0pvaW4gSW4nXG4gICAgICAgICAgICAgICAgICBzaXplPSdzbWFsbCdcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nc2lnbl9pbidcbiAgICAgICAgICAgICAgICAgIC8vIHZhcmlhbnQ9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3NpZ25Jbk91dEZvcm19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9Mb2dvdXRWaWV3PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L0RyYXdlclByb2ZpbGU+XG5cbiAgICAgICAgICA8RHJhd2VyTWVudT5cbiAgICAgICAgICAgIHtEcmF3ZXJNZW51SXRlbXMubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICAgIDxEcmF3ZXJNZW51SXRlbSBrZXk9e2l0ZW0uaWR9PlxuICAgICAgICAgICAgICAgIHtpdGVtLmhyID8gKFxuICAgICAgICAgICAgICAgICAgXCJoZWxsb1wiXG4gICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgIDxOYXZMaW5rXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZUhhbmRsZXJ9XG4gICAgICAgICAgICAgICAgICAgIGhyZWY9e2l0ZW0uaHJlZn1cbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9e2l0ZW0ubGFiZWx9XG4gICAgICAgICAgICAgICAgICAgIGludGxJZD17aXRlbS5pbnRsTGFiZWxJZH1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdkcmF3ZXJfbWVudV9pdGVtJ1xuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L0RyYXdlck1lbnVJdGVtPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9EcmF3ZXJNZW51PlxuXG4gICAgICAgICAge2lzQXV0aGVudGljYXRlZCAmJiAoXG4gICAgICAgICAgICA8VWVzck9wdGlvbk1lbnU+XG4gICAgICAgICAgICAgIDxEcmF3ZXJNZW51SXRlbT5cbiAgICAgICAgICAgICAgICA8TmF2TGlua1xuICAgICAgICAgICAgICAgICAgaHJlZj0nL3Byb2ZpbGUnXG4gICAgICAgICAgICAgICAgICBsYWJlbD0nWW91ciBBY2NvdW50IFNldHRpbmdzJ1xuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdkcmF3ZXJfbWVudV9pdGVtJ1xuICAgICAgICAgICAgICAgICAgaW50bElkPSduYXZsaW5rQWNjb3VudFNldHRpbmdzJ1xuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvRHJhd2VyTWVudUl0ZW0+XG4gICAgICAgICAgICAgIDxEcmF3ZXJNZW51SXRlbT5cbiAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e2hhbmRsZUxvZ291dH0gY2xhc3NOYW1lPSdkcmF3ZXJfbWVudV9pdGVtJz5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nbG9nb3V0QnRuJz5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2VcbiAgICAgICAgICAgICAgICAgICAgICBpZD0nbmF2bGlua0xvZ291dCdcbiAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0TWVzc2FnZT0nTG9nb3V0J1xuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L0RyYXdlck1lbnVJdGVtPlxuICAgICAgICAgICAgPC9VZXNyT3B0aW9uTWVudT5cbiAgICAgICAgICApfVxuICAgICAgICA8L0RyYXdlckNvbnRlbnRXcmFwcGVyPlxuICAgICAgPC9TY3JvbGxiYXJzPlxuICAgIDwvRHJhd2VyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTW9iaWxlRHJhd2VyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./containers/LayoutContainer/Header/MobileDrawer.tsx\n");

/***/ })

})