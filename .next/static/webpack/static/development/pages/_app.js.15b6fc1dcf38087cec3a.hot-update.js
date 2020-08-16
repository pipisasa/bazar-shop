webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./containers/LayoutContainer/Header/Header.tsx":
/*!******************************************************!*\
  !*** ./containers/LayoutContainer/Header/Header.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _redq_reuse_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @redq/reuse-modal */ \"./node_modules/@redq/reuse-modal/es/index.js\");\n/* harmony import */ var components_SearchBox_SearchBox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/SearchBox/SearchBox */ \"./components/SearchBox/SearchBox.tsx\");\n/* harmony import */ var contexts_search_search_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! contexts/search/search.context */ \"./contexts/search/search.context.tsx\");\n/* harmony import */ var contexts_auth_auth_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! contexts/auth/auth.context */ \"./contexts/auth/auth.context.tsx\");\n/* harmony import */ var _SignInOutForm_Form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../SignInOutForm/Form */ \"./containers/SignInOutForm/Form.tsx\");\n/* harmony import */ var _Menu_RightMenu_RightMenu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Menu/RightMenu/RightMenu */ \"./containers/LayoutContainer/Header/Menu/RightMenu/RightMenu.tsx\");\n/* harmony import */ var _Menu_LeftMenu_LeftMenu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Menu/LeftMenu/LeftMenu */ \"./containers/LayoutContainer/Header/Menu/LeftMenu/LeftMenu.tsx\");\n/* harmony import */ var _Header_style__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Header.style */ \"./containers/LayoutContainer/Header/Header.style.tsx\");\n/* harmony import */ var image_logo_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! image/logo.svg */ \"./image/logo.svg\");\n/* harmony import */ var image_logo_svg__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(image_logo_svg__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var image_user_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! image/user.png */ \"./image/user.png\");\n/* harmony import */ var image_user_png__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(image_user_png__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _MobileDrawer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./MobileDrawer */ \"./containers/LayoutContainer/Header/MobileDrawer.tsx\");\n/* harmony import */ var contexts_drawer_drawer_provider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! contexts/drawer/drawer.provider */ \"./contexts/drawer/drawer.provider.tsx\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/pipi/Documents/pr/react_apps/shop/containers/LayoutContainer/Header/Header.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\n\n\n\n\n // import { isCategoryPage } from '../is-home-page';\n\n\n\n\nvar Header = function Header(_ref) {\n  _s();\n\n  var className = _ref.className;\n\n  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_1___default.a.useContext(contexts_auth_auth_context__WEBPACK_IMPORTED_MODULE_6__[\"AuthContext\"]),\n      isAuthenticated = _React$useContext.authState.isAuthenticated,\n      authDispatch = _React$useContext.authDispatch;\n\n  var _React$useContext2 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useContext(contexts_search_search_context__WEBPACK_IMPORTED_MODULE_5__[\"SearchContext\"]),\n      state = _React$useContext2.state,\n      dispatch = _React$useContext2.dispatch;\n\n  var _useRouter = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])(),\n      pathname = _useRouter.pathname,\n      query = _useRouter.query;\n\n  var handleLogout = function handleLogout() {\n    if (true) {\n      localStorage.removeItem('access_token');\n      authDispatch({\n        type: 'SIGN_OUT'\n      });\n      next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push('/');\n    }\n  };\n\n  var handleJoin = function handleJoin() {\n    authDispatch({\n      type: 'SIGNIN'\n    });\n    Object(_redq_reuse_modal__WEBPACK_IMPORTED_MODULE_3__[\"openModal\"])({\n      show: true,\n      overlayClassName: 'quick-view-overlay',\n      closeOnClickOutside: true,\n      component: _SignInOutForm_Form__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n      closeComponent: '',\n      config: {\n        enableResizing: false,\n        disableDragging: true,\n        className: 'quick-view-modal',\n        width: 458,\n        height: 'auto'\n      }\n    });\n  };\n\n  var onSearch = function onSearch(text) {\n    dispatch({\n      type: 'UPDATE',\n      payload: _objectSpread(_objectSpread({}, state), {}, {\n        text: text\n      })\n    });\n  };\n\n  var text = state.text;\n\n  var onClickHandler = function onClickHandler() {\n    var updatedQuery = query.category ? {\n      text: text,\n      category: query.category\n    } : {\n      text: text\n    };\n    next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push({\n      pathname: pathname,\n      query: updatedQuery\n    });\n  }; // const showSearch = isCategoryPage(pathname);\n\n\n  return __jsx(_Header_style__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n    className: className,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 5\n    }\n  }, __jsx(contexts_drawer_drawer_provider__WEBPACK_IMPORTED_MODULE_14__[\"DrawerProvider\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 7\n    }\n  }, __jsx(_Header_style__WEBPACK_IMPORTED_MODULE_10__[\"DrawerWrapper\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 9\n    }\n  }, __jsx(_MobileDrawer__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 11\n    }\n  }))), __jsx(_Menu_LeftMenu_LeftMenu__WEBPACK_IMPORTED_MODULE_9__[\"LeftMenu\"], {\n    logo: image_logo_svg__WEBPACK_IMPORTED_MODULE_11___default.a,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 7\n    }\n  }), __jsx(components_SearchBox_SearchBox__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    className: \"headerSearch\",\n    handleSearch: function handleSearch(value) {\n      return onSearch(value);\n    },\n    onClick: onClickHandler,\n    placeholder: \"Search anything...\",\n    hideType: true,\n    minimal: true,\n    showSvg: true,\n    style: {\n      width: '100%'\n    },\n    value: text || '',\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 7\n    }\n  }), __jsx(_Menu_RightMenu_RightMenu__WEBPACK_IMPORTED_MODULE_8__[\"RightMenu\"], {\n    isAuthenticated: isAuthenticated,\n    onJoin: handleJoin,\n    onLogout: handleLogout,\n    avatar: image_user_png__WEBPACK_IMPORTED_MODULE_12___default.a,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 7\n    }\n  }));\n};\n\n_s(Header, \"G2IR/XacXLNzgmaq3spLKBioYVA=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"]];\n});\n\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\n\nvar _c;\n\n$RefreshReg$(_c, \"Header\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb250YWluZXJzL0xheW91dENvbnRhaW5lci9IZWFkZXIvSGVhZGVyLnRzeD83YjdiIl0sIm5hbWVzIjpbIkhlYWRlciIsImNsYXNzTmFtZSIsIlJlYWN0IiwidXNlQ29udGV4dCIsIkF1dGhDb250ZXh0IiwiaXNBdXRoZW50aWNhdGVkIiwiYXV0aFN0YXRlIiwiYXV0aERpc3BhdGNoIiwiU2VhcmNoQ29udGV4dCIsInN0YXRlIiwiZGlzcGF0Y2giLCJ1c2VSb3V0ZXIiLCJwYXRobmFtZSIsInF1ZXJ5IiwiaGFuZGxlTG9nb3V0IiwibG9jYWxTdG9yYWdlIiwicmVtb3ZlSXRlbSIsInR5cGUiLCJSb3V0ZXIiLCJwdXNoIiwiaGFuZGxlSm9pbiIsIm9wZW5Nb2RhbCIsInNob3ciLCJvdmVybGF5Q2xhc3NOYW1lIiwiY2xvc2VPbkNsaWNrT3V0c2lkZSIsImNvbXBvbmVudCIsIkF1dGhlbnRpY2F0aW9uRm9ybSIsImNsb3NlQ29tcG9uZW50IiwiY29uZmlnIiwiZW5hYmxlUmVzaXppbmciLCJkaXNhYmxlRHJhZ2dpbmciLCJ3aWR0aCIsImhlaWdodCIsIm9uU2VhcmNoIiwidGV4dCIsInBheWxvYWQiLCJvbkNsaWNrSGFuZGxlciIsInVwZGF0ZWRRdWVyeSIsImNhdGVnb3J5IiwiTG9nb0ltYWdlIiwidmFsdWUiLCJVc2VySW1hZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUVBOztBQUNBO0FBQ0E7O0FBUUEsSUFBTUEsTUFBdUIsR0FBRyxTQUExQkEsTUFBMEIsT0FBbUI7QUFBQTs7QUFBQSxNQUFoQkMsU0FBZ0IsUUFBaEJBLFNBQWdCOztBQUFBLDBCQUk3Q0MsNENBQUssQ0FBQ0MsVUFBTixDQUFzQkMsc0VBQXRCLENBSjZDO0FBQUEsTUFFbENDLGVBRmtDLHFCQUUvQ0MsU0FGK0MsQ0FF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TFo7QUFNRSxXQUFPLEVBQUUsSUFOWDtBQU9FLFdBQU8sRUFBRSxJQVBYO0FBUUUsU0FBSyxFQUFFO0FBQUVMLFdBQUssRUFBRTtBQUFULEtBUlQ7QUFTRSxTQUFLLEVBQUVHLElBQUksSUFBSSxFQVRqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVEYsRUFvQkUsTUFBQyxtRUFBRDtBQUNFLG1CQUFlLEVBQUU3QixlQURuQjtBQUVFLFVBQU0sRUFBRWUsVUFGVjtBQUdFLFlBQVEsRUFBRU4sWUFIWjtBQUlFLFVBQU0sRUFBRTJCLHNEQUpWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFwQkYsQ0FERjtBQTZCRCxDQXJGRDs7R0FBTXpDLE07VUFNd0JXLHFEOzs7S0FOeEJYLE07QUF1RlNBLHFFQUFmIiwiZmlsZSI6Ii4vY29udGFpbmVycy9MYXlvdXRDb250YWluZXIvSGVhZGVyL0hlYWRlci50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJvdXRlciwgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgeyBvcGVuTW9kYWwgfSBmcm9tICdAcmVkcS9yZXVzZS1tb2RhbCc7XG5pbXBvcnQgU2VhcmNoQm94IGZyb20gJ2NvbXBvbmVudHMvU2VhcmNoQm94L1NlYXJjaEJveCc7XG5pbXBvcnQgeyBTZWFyY2hDb250ZXh0IH0gZnJvbSAnY29udGV4dHMvc2VhcmNoL3NlYXJjaC5jb250ZXh0JztcbmltcG9ydCB7IEF1dGhDb250ZXh0IH0gZnJvbSAnY29udGV4dHMvYXV0aC9hdXRoLmNvbnRleHQnO1xuaW1wb3J0IEF1dGhlbnRpY2F0aW9uRm9ybSBmcm9tICcuLi8uLi9TaWduSW5PdXRGb3JtL0Zvcm0nO1xuaW1wb3J0IHsgUmlnaHRNZW51IH0gZnJvbSAnLi9NZW51L1JpZ2h0TWVudS9SaWdodE1lbnUnO1xuaW1wb3J0IHsgTGVmdE1lbnUgfSBmcm9tICcuL01lbnUvTGVmdE1lbnUvTGVmdE1lbnUnO1xuaW1wb3J0IEhlYWRlcldyYXBwZXIsIHsgRHJhd2VyV3JhcHBlciB9IGZyb20gJy4vSGVhZGVyLnN0eWxlJztcbmltcG9ydCBMb2dvSW1hZ2UgZnJvbSAnaW1hZ2UvbG9nby5zdmcnO1xuaW1wb3J0IFVzZXJJbWFnZSBmcm9tICdpbWFnZS91c2VyLnBuZyc7XG4vLyBpbXBvcnQgeyBpc0NhdGVnb3J5UGFnZSB9IGZyb20gJy4uL2lzLWhvbWUtcGFnZSc7XG5pbXBvcnQgTW9iaWxlRHJhd2VyIGZyb20gJy4vTW9iaWxlRHJhd2VyJztcbmltcG9ydCB7IERyYXdlclByb3ZpZGVyIH0gZnJvbSAnY29udGV4dHMvZHJhd2VyL2RyYXdlci5wcm92aWRlcic7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIGNsYXNzTmFtZT86IHN0cmluZztcbiAgdG9rZW4/OiBzdHJpbmc7XG4gIHBhdGhuYW1lPzogc3RyaW5nO1xufTtcblxuY29uc3QgSGVhZGVyOiBSZWFjdC5GQzxQcm9wcz4gPSAoeyBjbGFzc05hbWUgfSkgPT4ge1xuICBjb25zdCB7XG4gICAgYXV0aFN0YXRlOiB7IGlzQXV0aGVudGljYXRlZCB9LFxuICAgIGF1dGhEaXNwYXRjaCxcbiAgfSA9IFJlYWN0LnVzZUNvbnRleHQ8YW55PihBdXRoQ29udGV4dCk7XG4gIGNvbnN0IHsgc3RhdGUsIGRpc3BhdGNoIH0gPSBSZWFjdC51c2VDb250ZXh0KFNlYXJjaENvbnRleHQpO1xuICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IGhhbmRsZUxvZ291dCA9ICgpID0+IHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdhY2Nlc3NfdG9rZW4nKTtcbiAgICAgIGF1dGhEaXNwYXRjaCh7IHR5cGU6ICdTSUdOX09VVCcgfSk7XG4gICAgICBSb3V0ZXIucHVzaCgnLycpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVKb2luID0gKCkgPT4ge1xuICAgIGF1dGhEaXNwYXRjaCh7XG4gICAgICB0eXBlOiAnU0lHTklOJyxcbiAgICB9KTtcblxuICAgIG9wZW5Nb2RhbCh7XG4gICAgICBzaG93OiB0cnVlLFxuICAgICAgb3ZlcmxheUNsYXNzTmFtZTogJ3F1aWNrLXZpZXctb3ZlcmxheScsXG4gICAgICBjbG9zZU9uQ2xpY2tPdXRzaWRlOiB0cnVlLFxuICAgICAgY29tcG9uZW50OiBBdXRoZW50aWNhdGlvbkZvcm0sXG4gICAgICBjbG9zZUNvbXBvbmVudDogJycsXG4gICAgICBjb25maWc6IHtcbiAgICAgICAgZW5hYmxlUmVzaXppbmc6IGZhbHNlLFxuICAgICAgICBkaXNhYmxlRHJhZ2dpbmc6IHRydWUsXG4gICAgICAgIGNsYXNzTmFtZTogJ3F1aWNrLXZpZXctbW9kYWwnLFxuICAgICAgICB3aWR0aDogNDU4LFxuICAgICAgICBoZWlnaHQ6ICdhdXRvJyxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH07XG4gIGNvbnN0IG9uU2VhcmNoID0gKHRleHQ6IGFueSkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6ICdVUERBVEUnLFxuICAgICAgcGF5bG9hZDoge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgdGV4dCxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgeyB0ZXh0IH0gPSBzdGF0ZTtcbiAgY29uc3Qgb25DbGlja0hhbmRsZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgdXBkYXRlZFF1ZXJ5ID0gcXVlcnkuY2F0ZWdvcnlcbiAgICAgID8geyB0ZXh0OiB0ZXh0LCBjYXRlZ29yeTogcXVlcnkuY2F0ZWdvcnkgfVxuICAgICAgOiB7IHRleHQgfTtcbiAgICBSb3V0ZXIucHVzaCh7XG4gICAgICBwYXRobmFtZTogcGF0aG5hbWUsXG4gICAgICBxdWVyeTogdXBkYXRlZFF1ZXJ5LFxuICAgIH0pO1xuICB9O1xuICAvLyBjb25zdCBzaG93U2VhcmNoID0gaXNDYXRlZ29yeVBhZ2UocGF0aG5hbWUpO1xuICByZXR1cm4gKFxuICAgIDxIZWFkZXJXcmFwcGVyIGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgIDxEcmF3ZXJQcm92aWRlcj5cbiAgICAgICAgPERyYXdlcldyYXBwZXI+XG4gICAgICAgICAgPE1vYmlsZURyYXdlciAvPlxuICAgICAgICA8L0RyYXdlcldyYXBwZXI+XG4gICAgICA8L0RyYXdlclByb3ZpZGVyPlxuICAgICAgPExlZnRNZW51IGxvZ289e0xvZ29JbWFnZX0gLz5cbiAgICAgIHsvKiB7c2hvd1NlYXJjaCAmJiAoXG4gICAgICApfSAqL31cbiAgICAgIDxTZWFyY2hCb3hcbiAgICAgICAgY2xhc3NOYW1lPVwiaGVhZGVyU2VhcmNoXCJcbiAgICAgICAgaGFuZGxlU2VhcmNoPXsodmFsdWU6IGFueSkgPT4gb25TZWFyY2godmFsdWUpfVxuICAgICAgICBvbkNsaWNrPXtvbkNsaWNrSGFuZGxlcn1cbiAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggYW55dGhpbmcuLi5cIlxuICAgICAgICBoaWRlVHlwZT17dHJ1ZX1cbiAgICAgICAgbWluaW1hbD17dHJ1ZX1cbiAgICAgICAgc2hvd1N2Zz17dHJ1ZX1cbiAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fVxuICAgICAgICB2YWx1ZT17dGV4dCB8fCAnJ31cbiAgICAgIC8+XG4gICAgICA8UmlnaHRNZW51XG4gICAgICAgIGlzQXV0aGVudGljYXRlZD17aXNBdXRoZW50aWNhdGVkfVxuICAgICAgICBvbkpvaW49e2hhbmRsZUpvaW59XG4gICAgICAgIG9uTG9nb3V0PXtoYW5kbGVMb2dvdXR9XG4gICAgICAgIGF2YXRhcj17VXNlckltYWdlfVxuICAgICAgLz5cbiAgICA8L0hlYWRlcldyYXBwZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./containers/LayoutContainer/Header/Header.tsx\n");

/***/ })

})