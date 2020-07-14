webpackHotUpdate(0,{

/***/ "./containers/LayoutContainer/Header/MobileHeader.tsx":
/*!************************************************************!*\
  !*** ./containers/LayoutContainer/Header/MobileHeader.tsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _redq_reuse_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @redq/reuse-modal */ \"./node_modules/@redq/reuse-modal/es/index.js\");\n/* harmony import */ var contexts_drawer_drawer_provider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! contexts/drawer/drawer.provider */ \"./contexts/drawer/drawer.provider.tsx\");\n/* harmony import */ var _Header_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Header.style */ \"./containers/LayoutContainer/Header/Header.style.tsx\");\n/* harmony import */ var components_SearchBox_SearchBox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/SearchBox/SearchBox */ \"./components/SearchBox/SearchBox.tsx\");\n/* harmony import */ var contexts_search_search_context__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! contexts/search/search.context */ \"./contexts/search/search.context.tsx\");\n/* harmony import */ var contexts_header_header_context__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! contexts/header/header.context */ \"./contexts/header/header.context.tsx\");\n/* harmony import */ var image_logo_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! image/logo.svg */ \"./image/logo.svg\");\n/* harmony import */ var image_logo_svg__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(image_logo_svg__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var components_AllSvgIcon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! components/AllSvgIcon */ \"./components/AllSvgIcon.tsx\");\n/* harmony import */ var components_Logo_Logo__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! components/Logo/Logo */ \"./components/Logo/Logo.tsx\");\n/* harmony import */ var _Menu_LanguageSwitcher_LanguageSwitcher__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Menu/LanguageSwitcher/LanguageSwitcher */ \"./containers/LayoutContainer/Header/Menu/LanguageSwitcher/LanguageSwitcher.tsx\");\n/* harmony import */ var _is_home_page__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../is-home-page */ \"./containers/LayoutContainer/is-home-page.ts\");\n/* harmony import */ var helper_useComponentSize__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! helper/useComponentSize */ \"./helper/useComponentSize.js\");\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/pipi/Documents/pr/bazar-shop/containers/LayoutContainer/Header/MobileHeader.tsx\",\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar SearchModal = function SearchModal(_ref) {\n  _s();\n\n  var state = _ref.state,\n      pathname = _ref.pathname,\n      handleSearch = _ref.handleSearch;\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__[\"useRouter\"])();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(state.text || ''),\n      text = _useState[0],\n      setText = _useState[1];\n\n  var handleSearchInput = function handleSearchInput(text) {\n    setText(text);\n  };\n\n  var page = state.page,\n      urlState = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(state, [\"page\"]);\n\n  var handleClickSearchButton = function handleClickSearchButton() {\n    handleSearch(text);\n    router.push({\n      pathname: pathname,\n      query: _objectSpread(_objectSpread({}, urlState), {}, {\n        text: text\n      })\n    });\n    Object(_redq_reuse_modal__WEBPACK_IMPORTED_MODULE_5__[\"closeModal\"])();\n  };\n\n  return __jsx(_Header_style__WEBPACK_IMPORTED_MODULE_7__[\"SearchModalWrapper\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 5\n    }\n  }, __jsx(_Header_style__WEBPACK_IMPORTED_MODULE_7__[\"SearchModalClose\"], {\n    type: \"submit\",\n    onClick: function onClick() {\n      return Object(_redq_reuse_modal__WEBPACK_IMPORTED_MODULE_5__[\"closeModal\"])();\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 7\n    }\n  }, __jsx(components_AllSvgIcon__WEBPACK_IMPORTED_MODULE_12__[\"LongArrowLeft\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 9\n    }\n  })), __jsx(components_SearchBox_SearchBox__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    className: \"header-modal-search\",\n    bordered: false,\n    inputStyle: {\n      height: 35\n    },\n    buttonText: \"\",\n    placeholder: \"Search\",\n    handleSearch: handleSearchInput,\n    value: text,\n    onClick: handleClickSearchButton,\n    pathname: pathname,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 7\n    }\n  }));\n};\n\n_s(SearchModal, \"x0oXDIXIF8clxjZIEh6xzbsc7Yw=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_4__[\"useRouter\"]];\n});\n\n_c = SearchModal;\n\nvar MobileHeader = function MobileHeader(_ref2) {\n  _s2();\n\n  var className = _ref2.className,\n      pathname = _ref2.pathname;\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useContext\"])(contexts_search_search_context__WEBPACK_IMPORTED_MODULE_9__[\"SearchContext\"]),\n      state = _useContext.state,\n      dispatch = _useContext.dispatch;\n\n  var _useDimensions = Object(helper_useComponentSize__WEBPACK_IMPORTED_MODULE_16__[\"default\"])(),\n      _useDimensions2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useDimensions, 2),\n      mobileHeaderRef = _useDimensions2[0],\n      dimensions = _useDimensions2[1];\n\n  var _useContext2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useContext\"])(contexts_header_header_context__WEBPACK_IMPORTED_MODULE_10__[\"HeaderContext\"]),\n      headerDispatch = _useContext2.headerDispatch;\n\n  var headerHeight = dimensions.height;\n  react__WEBPACK_IMPORTED_MODULE_3___default.a.useEffect(function () {\n    headerDispatch({\n      type: 'GET_MOBILE_HEIGHT',\n      payload: _objectSpread(_objectSpread({}, state), {}, {\n        mobileHeight: headerHeight\n      })\n    });\n  }, [headerHeight]);\n\n  var handleSearch = function handleSearch(text) {\n    dispatch({\n      type: 'UPDATE',\n      payload: _objectSpread(_objectSpread({}, state), {}, {\n        text: text\n      })\n    });\n  };\n\n  var handleSearchModal = function handleSearchModal() {\n    Object(_redq_reuse_modal__WEBPACK_IMPORTED_MODULE_5__[\"openModal\"])({\n      show: true,\n      config: {\n        enableResizing: false,\n        disableDragging: true,\n        className: 'search-modal-mobile',\n        width: '100%',\n        height: '100%'\n      },\n      closeOnClickOutside: false,\n      component: SearchModal,\n      componentProps: {\n        state: state,\n        pathname: pathname,\n        handleSearch: handleSearch\n      },\n      closeComponent: function closeComponent() {\n        return __jsx(\"div\", {\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 120,\n            columnNumber: 29\n          }\n        });\n      }\n    });\n  };\n\n  var isHomePage = Object(_is_home_page__WEBPACK_IMPORTED_MODULE_15__[\"isCategoryPage\"])(pathname);\n  return __jsx(contexts_drawer_drawer_provider__WEBPACK_IMPORTED_MODULE_6__[\"DrawerProvider\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 127,\n      columnNumber: 5\n    }\n  }, __jsx(_Header_style__WEBPACK_IMPORTED_MODULE_7__[\"MobileHeaderWrapper\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 128,\n      columnNumber: 7\n    }\n  }, __jsx(_Header_style__WEBPACK_IMPORTED_MODULE_7__[\"MobileHeaderInnerWrapper\"], {\n    className: className,\n    ref: mobileHeaderRef,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 129,\n      columnNumber: 9\n    }\n  }, __jsx(_Header_style__WEBPACK_IMPORTED_MODULE_7__[\"DrawerWrapper\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 130,\n      columnNumber: 11\n    }\n  }), __jsx(_Header_style__WEBPACK_IMPORTED_MODULE_7__[\"LogoWrapper\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 134,\n      columnNumber: 11\n    }\n  }, __jsx(components_Logo_Logo__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n    imageUrl: image_logo_svg__WEBPACK_IMPORTED_MODULE_11___default.a,\n    alt: \"shop logo\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 135,\n      columnNumber: 13\n    }\n  })), __jsx(_Menu_LanguageSwitcher_LanguageSwitcher__WEBPACK_IMPORTED_MODULE_14__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 138,\n      columnNumber: 11\n    }\n  }), isHomePage ? __jsx(_Header_style__WEBPACK_IMPORTED_MODULE_7__[\"SearchWrapper\"], {\n    onClick: handleSearchModal,\n    className: \"searchIconWrapper\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 141,\n      columnNumber: 13\n    }\n  }, __jsx(components_AllSvgIcon__WEBPACK_IMPORTED_MODULE_12__[\"SearchIcon\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 145,\n      columnNumber: 15\n    }\n  })) : null)));\n};\n\n_s2(MobileHeader, \"p7ypzxPhyByuuDtvsDfqTMhvRt0=\", false, function () {\n  return [helper_useComponentSize__WEBPACK_IMPORTED_MODULE_16__[\"default\"]];\n});\n\n_c2 = MobileHeader;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MobileHeader);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"SearchModal\");\n$RefreshReg$(_c2, \"MobileHeader\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb250YWluZXJzL0xheW91dENvbnRhaW5lci9IZWFkZXIvTW9iaWxlSGVhZGVyLnRzeD8wYzQzIl0sIm5hbWVzIjpbIlNlYXJjaE1vZGFsIiwic3RhdGUiLCJwYXRobmFtZSIsImhhbmRsZVNlYXJjaCIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwidGV4dCIsInNldFRleHQiLCJoYW5kbGVTZWFyY2hJbnB1dCIsInBhZ2UiLCJ1cmxTdGF0ZSIsImhhbmRsZUNsaWNrU2VhcmNoQnV0dG9uIiwicHVzaCIsInF1ZXJ5IiwiY2xvc2VNb2RhbCIsImhlaWdodCIsIk1vYmlsZUhlYWRlciIsImNsYXNzTmFtZSIsInVzZUNvbnRleHQiLCJTZWFyY2hDb250ZXh0IiwiZGlzcGF0Y2giLCJ1c2VEaW1lbnNpb25zIiwibW9iaWxlSGVhZGVyUmVmIiwiZGltZW5zaW9ucyIsIkhlYWRlckNvbnRleHQiLCJoZWFkZXJEaXNwYXRjaCIsImhlYWRlckhlaWdodCIsIlJlYWN0IiwidXNlRWZmZWN0IiwidHlwZSIsInBheWxvYWQiLCJtb2JpbGVIZWlnaHQiLCJoYW5kbGVTZWFyY2hNb2RhbCIsIm9wZW5Nb2RhbCIsInNob3ciLCJjb25maWciLCJlbmFibGVSZXNpemluZyIsImRpc2FibGVEcmFnZ2luZyIsIndpZHRoIiwiY2xvc2VPbkNsaWNrT3V0c2lkZSIsImNvbXBvbmVudCIsImNvbXBvbmVudFByb3BzIiwiY2xvc2VDb21wb25lbnQiLCJpc0hvbWVQYWdlIiwiaXNDYXRlZ29yeVBhZ2UiLCJMb2dvSW1hZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBYUEsSUFBTUEsV0FBdUMsR0FBRyxTQUExQ0EsV0FBMEMsT0FJMUM7QUFBQTs7QUFBQSxNQUhKQyxLQUdJ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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FMRixFQVNFLE1BQUMsZ0ZBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVRGLEVBV0dGLFVBQVUsR0FDVCxNQUFDLDJEQUFEO0FBQ0UsV0FBTyxFQUFFWCxpQkFEWDtBQUVFLGFBQVMsRUFBQyxtQkFGWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSUUsTUFBQyxpRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkYsQ0FEUyxHQU9QLElBbEJOLENBREYsQ0FERixDQURGO0FBMEJELENBeEVEOztJQUFNaEIsWTtVQUdrQ0ssZ0U7OztNQUhsQ0wsWTtBQTBFU0EsMkVBQWYiLCJmaWxlIjoiLi9jb250YWluZXJzL0xheW91dENvbnRhaW5lci9IZWFkZXIvTW9iaWxlSGVhZGVyLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IG9wZW5Nb2RhbCwgY2xvc2VNb2RhbCB9IGZyb20gJ0ByZWRxL3JldXNlLW1vZGFsJztcbmltcG9ydCB7IERyYXdlclByb3ZpZGVyIH0gZnJvbSAnY29udGV4dHMvZHJhd2VyL2RyYXdlci5wcm92aWRlcic7XG5pbXBvcnQgTW9iaWxlRHJhd2VyIGZyb20gJy4vTW9iaWxlRHJhd2VyJztcbmltcG9ydCB7XG4gIE1vYmlsZUhlYWRlcldyYXBwZXIsXG4gIE1vYmlsZUhlYWRlcklubmVyV3JhcHBlcixcbiAgRHJhd2VyV3JhcHBlcixcbiAgTG9nb1dyYXBwZXIsXG4gIFNlYXJjaFdyYXBwZXIsXG4gIFNlYXJjaE1vZGFsV3JhcHBlcixcbiAgU2VhcmNoTW9kYWxDbG9zZSxcbn0gZnJvbSAnLi9IZWFkZXIuc3R5bGUnO1xuaW1wb3J0IFNlYXJjaEJveCBmcm9tICdjb21wb25lbnRzL1NlYXJjaEJveC9TZWFyY2hCb3gnO1xuaW1wb3J0IHsgU2VhcmNoQ29udGV4dCB9IGZyb20gJ2NvbnRleHRzL3NlYXJjaC9zZWFyY2guY29udGV4dCc7XG5pbXBvcnQgeyBIZWFkZXJDb250ZXh0IH0gZnJvbSAnY29udGV4dHMvaGVhZGVyL2hlYWRlci5jb250ZXh0JztcbmltcG9ydCBMb2dvSW1hZ2UgZnJvbSAnaW1hZ2UvbG9nby5zdmcnO1xuXG5pbXBvcnQgeyBTZWFyY2hJY29uLCBMb25nQXJyb3dMZWZ0IH0gZnJvbSAnY29tcG9uZW50cy9BbGxTdmdJY29uJztcbmltcG9ydCBMb2dvIGZyb20gJ2NvbXBvbmVudHMvTG9nby9Mb2dvJztcbmltcG9ydCBMYW5ndWFnZVN3aXRjaGVyIGZyb20gJy4vTWVudS9MYW5ndWFnZVN3aXRjaGVyL0xhbmd1YWdlU3dpdGNoZXInO1xuaW1wb3J0IHsgaXNDYXRlZ29yeVBhZ2UgfSBmcm9tICcuLi9pcy1ob21lLXBhZ2UnO1xuaW1wb3J0IHVzZURpbWVuc2lvbnMgZnJvbSAnaGVscGVyL3VzZUNvbXBvbmVudFNpemUnO1xuXG50eXBlIE1vYmlsZUhlYWRlclByb3BzID0ge1xuICBjbGFzc05hbWU/OiBzdHJpbmc7XG4gIHBhdGhuYW1lPzogc3RyaW5nO1xuICBjbG9zZVNlYXJjaD86IGFueTtcbn07XG50eXBlIFNlYXJjaE1vZGFsUHJvcHMgPSB7XG4gIHN0YXRlPzogYW55O1xuICBoYW5kbGVTZWFyY2g/OiBhbnk7XG4gIHBhdGhuYW1lPzogc3RyaW5nO1xufTtcblxuY29uc3QgU2VhcmNoTW9kYWw6IFJlYWN0LkZDPFNlYXJjaE1vZGFsUHJvcHM+ID0gKHtcbiAgc3RhdGUsXG4gIHBhdGhuYW1lLFxuICBoYW5kbGVTZWFyY2gsXG59KSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBbdGV4dCwgc2V0VGV4dF0gPSB1c2VTdGF0ZShzdGF0ZS50ZXh0IHx8ICcnKTtcbiAgY29uc3QgaGFuZGxlU2VhcmNoSW5wdXQgPSAodGV4dDogc3RyaW5nKSA9PiB7XG4gICAgc2V0VGV4dCh0ZXh0KTtcbiAgfTtcbiAgY29uc3QgeyBwYWdlLCAuLi51cmxTdGF0ZSB9ID0gc3RhdGU7XG5cbiAgY29uc3QgaGFuZGxlQ2xpY2tTZWFyY2hCdXR0b24gPSAoKSA9PiB7XG4gICAgaGFuZGxlU2VhcmNoKHRleHQpO1xuICAgIHJvdXRlci5wdXNoKHtcbiAgICAgIHBhdGhuYW1lOiBwYXRobmFtZSxcbiAgICAgIHF1ZXJ5OiB7XG4gICAgICAgIC4uLnVybFN0YXRlLFxuICAgICAgICB0ZXh0LFxuICAgICAgfSxcbiAgICB9KTtcbiAgICBjbG9zZU1vZGFsKCk7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPFNlYXJjaE1vZGFsV3JhcHBlcj5cbiAgICAgIDxTZWFyY2hNb2RhbENsb3NlIHR5cGU9J3N1Ym1pdCcgb25DbGljaz17KCkgPT4gY2xvc2VNb2RhbCgpfT5cbiAgICAgICAgPExvbmdBcnJvd0xlZnQgLz5cbiAgICAgIDwvU2VhcmNoTW9kYWxDbG9zZT5cbiAgICAgIDxTZWFyY2hCb3hcbiAgICAgICAgY2xhc3NOYW1lPSdoZWFkZXItbW9kYWwtc2VhcmNoJ1xuICAgICAgICBib3JkZXJlZD17ZmFsc2V9XG4gICAgICAgIGlucHV0U3R5bGU9e3sgaGVpZ2h0OiAzNSB9fVxuICAgICAgICBidXR0b25UZXh0PScnXG4gICAgICAgIHBsYWNlaG9sZGVyPSdTZWFyY2gnXG4gICAgICAgIGhhbmRsZVNlYXJjaD17aGFuZGxlU2VhcmNoSW5wdXR9XG4gICAgICAgIHZhbHVlPXt0ZXh0fVxuICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja1NlYXJjaEJ1dHRvbn1cbiAgICAgICAgcGF0aG5hbWU9e3BhdGhuYW1lfVxuICAgICAgLz5cbiAgICA8L1NlYXJjaE1vZGFsV3JhcHBlcj5cbiAgKTtcbn07XG5cbmNvbnN0IE1vYmlsZUhlYWRlcjogUmVhY3QuRkM8TW9iaWxlSGVhZGVyUHJvcHM+ID0gKHsgY2xhc3NOYW1lLCBwYXRobmFtZSB9KSA9PiB7XG4gIGNvbnN0IHsgc3RhdGUsIGRpc3BhdGNoIH0gPSB1c2VDb250ZXh0KFNlYXJjaENvbnRleHQpO1xuXG4gIGNvbnN0IFttb2JpbGVIZWFkZXJSZWYsIGRpbWVuc2lvbnNdID0gdXNlRGltZW5zaW9ucygpO1xuICBjb25zdCB7IGhlYWRlckRpc3BhdGNoIH0gPSB1c2VDb250ZXh0PGFueT4oSGVhZGVyQ29udGV4dCk7XG5cbiAgY29uc3QgaGVhZGVySGVpZ2h0ID0gZGltZW5zaW9ucy5oZWlnaHQ7XG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBoZWFkZXJEaXNwYXRjaCh7XG4gICAgICB0eXBlOiAnR0VUX01PQklMRV9IRUlHSFQnLFxuICAgICAgcGF5bG9hZDoge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgbW9iaWxlSGVpZ2h0OiBoZWFkZXJIZWlnaHQsXG4gICAgICB9LFxuICAgIH0pO1xuICB9LCBbaGVhZGVySGVpZ2h0XSk7XG5cbiAgY29uc3QgaGFuZGxlU2VhcmNoID0gKHRleHQ6IHN0cmluZykgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6ICdVUERBVEUnLFxuICAgICAgcGF5bG9hZDoge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgdGV4dCxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH07XG4gIGNvbnN0IGhhbmRsZVNlYXJjaE1vZGFsID0gKCkgPT4ge1xuICAgIG9wZW5Nb2RhbCh7XG4gICAgICBzaG93OiB0cnVlLFxuICAgICAgY29uZmlnOiB7XG4gICAgICAgIGVuYWJsZVJlc2l6aW5nOiBmYWxzZSxcbiAgICAgICAgZGlzYWJsZURyYWdnaW5nOiB0cnVlLFxuICAgICAgICBjbGFzc05hbWU6ICdzZWFyY2gtbW9kYWwtbW9iaWxlJyxcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICB9LFxuICAgICAgY2xvc2VPbkNsaWNrT3V0c2lkZTogZmFsc2UsXG4gICAgICBjb21wb25lbnQ6IFNlYXJjaE1vZGFsLFxuICAgICAgY29tcG9uZW50UHJvcHM6IHsgc3RhdGUsIHBhdGhuYW1lLCBoYW5kbGVTZWFyY2ggfSxcbiAgICAgIGNsb3NlQ29tcG9uZW50OiAoKSA9PiA8ZGl2IC8+LFxuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGlzSG9tZVBhZ2UgPSBpc0NhdGVnb3J5UGFnZShwYXRobmFtZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8RHJhd2VyUHJvdmlkZXI+XG4gICAgICA8TW9iaWxlSGVhZGVyV3JhcHBlcj5cbiAgICAgICAgPE1vYmlsZUhlYWRlcklubmVyV3JhcHBlciBjbGFzc05hbWU9e2NsYXNzTmFtZX0gcmVmPXttb2JpbGVIZWFkZXJSZWZ9PlxuICAgICAgICAgIDxEcmF3ZXJXcmFwcGVyPlxuICAgICAgICAgICAgey8qIDxNb2JpbGVEcmF3ZXIgLz4gKi99XG4gICAgICAgICAgPC9EcmF3ZXJXcmFwcGVyPlxuXG4gICAgICAgICAgPExvZ29XcmFwcGVyPlxuICAgICAgICAgICAgPExvZ28gaW1hZ2VVcmw9e0xvZ29JbWFnZX0gYWx0PSdzaG9wIGxvZ28nIC8+XG4gICAgICAgICAgPC9Mb2dvV3JhcHBlcj5cblxuICAgICAgICAgIDxMYW5ndWFnZVN3aXRjaGVyIC8+XG5cbiAgICAgICAgICB7aXNIb21lUGFnZSA/IChcbiAgICAgICAgICAgIDxTZWFyY2hXcmFwcGVyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVNlYXJjaE1vZGFsfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9J3NlYXJjaEljb25XcmFwcGVyJ1xuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8U2VhcmNoSWNvbiAvPlxuICAgICAgICAgICAgPC9TZWFyY2hXcmFwcGVyPlxuICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICA8L01vYmlsZUhlYWRlcklubmVyV3JhcHBlcj5cbiAgICAgIDwvTW9iaWxlSGVhZGVyV3JhcHBlcj5cbiAgICA8L0RyYXdlclByb3ZpZGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTW9iaWxlSGVhZGVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./containers/LayoutContainer/Header/MobileHeader.tsx\n");

/***/ })

})