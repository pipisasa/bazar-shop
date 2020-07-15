webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./containers/LayoutContainer/Header/Menu/LeftMenu/LeftMenu.tsx":
/*!**********************************************************************!*\
  !*** ./containers/LayoutContainer/Header/Menu/LeftMenu/LeftMenu.tsx ***!
  \**********************************************************************/
/*! exports provided: LeftMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LeftMenu\", function() { return LeftMenu; });\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _LeftMenu_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LeftMenu.style */ \"./containers/LayoutContainer/Header/Menu/LeftMenu/LeftMenu.style.tsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var components_Logo_Logo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/Logo/Logo */ \"./components/Logo/Logo.tsx\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/pipi/Documents/pr/bazar-shop/containers/LayoutContainer/Header/Menu/LeftMenu/LeftMenu.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n // import NavLink from 'components/NavLink/NavLink';\n// import {\n//   MEN,\n//   WOMEN,\n//   KIDS\n// } from 'constants/navigation';\n\n\n // import styled from 'styled-components';\n// import { themeGet } from '@styled-system/theme-get';\n// const MENU_ITEMS = [\n//   {\n//     link: MEN,\n//     label: 'Men',\n//     // icon: <DressIcon />,\n//     intlId: 'navMenMenu',\n//   },\n//   {\n//     link: WOMEN,\n//     label: 'Women',\n//     // icon: <DressIcon />,\n//     intlId: 'navWomenMenu',\n//   },\n//   {\n//     link: KIDS,\n//     label: 'Kids',\n//     // icon: <DressIcon />,\n//     intlId: 'navKidsMenu',\n//   },\n// ];\n// const CategoryMenuWrapper = styled.div`\n//   display: flex;\n//   .menu-item{\n//     color: black;\n//     background: #FFF;\n//     a {\n//       font-size: 15px;\n//       font-weight: 700;\n//       color: ${themeGet('colors.darkBold', '#0D1136')};\n//       line-height: 1.2em;\n//       display: block;\n//       padding: 15px 30px;\n//       border-radius: 6px;\n//       transition: 0.15s ease-in-out;\n//       display: flex;\n//       align-items: center;\n//       @media (max-width: 1400px) {\n//         margin-right: 10px;\n//         font-size: 15px;\n//       }\n//       @media only screen and (min-width: 991px) and (max-width: 1200px) {\n//         padding: 15px 30px;\n//       }\n//       &:hover {\n//         color: ${themeGet('colors.primary', '#009E7F')};\n//       }\n//       &.current-page {\n//         color: ${themeGet('colors.primary', '#009E7F')};\n//         background-color: #fff;\n//       }\n//     }\n//   }\n// `\n// const CategoryMenu = ({ onClick }) => {\n//   return (\n//     <CategoryMenuWrapper>\n//       {MENU_ITEMS.map((item) => (\n//         <NavLink\n//           key={item.link}\n//           onClick={() => onClick(item)}\n//           className='menu-item'\n//           href={item.link}\n//           label={item.label}\n//           // icon={item.icon}\n//           iconClass='menu-item-icon'\n//           intlId={item.intlId}\n//         />\n//       ))}\n//     </CategoryMenuWrapper>\n//   );\n// };\n\nvar LeftMenu = function LeftMenu(_ref) {\n  _s();\n\n  var logo = _ref.logo;\n\n  var _useRouter = Object(next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"])(),\n      pathname = _useRouter.pathname; // const initialMenu = MENU_ITEMS.find((item) => item.link === pathname);\n\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(),\n      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState, 2),\n      activeMenu = _React$useState2[0],\n      setActiveMenu = _React$useState2[1];\n\n  return __jsx(_LeftMenu_style__WEBPACK_IMPORTED_MODULE_2__[\"LeftMenuBox\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 104,\n      columnNumber: 5\n    }\n  }, __jsx(components_Logo_Logo__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    imageUrl: logo,\n    alt: 'Shop Logo' // onClick={() => setActiveMenu(MENU_ITEMS[0])}\n    ,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 105,\n      columnNumber: 7\n    }\n  }), __jsx(_LeftMenu_style__WEBPACK_IMPORTED_MODULE_2__[\"MainMenu\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 111,\n      columnNumber: 7\n    }\n  }));\n};\n\n_s(LeftMenu, \"NzyZvcZqxpMI4KQ1xC637DNq8AQ=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"]];\n});\n\n_c = LeftMenu;\n\nvar _c;\n\n$RefreshReg$(_c, \"LeftMenu\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb250YWluZXJzL0xheW91dENvbnRhaW5lci9IZWFkZXIvTWVudS9MZWZ0TWVudS9MZWZ0TWVudS50c3g/ZjIxNSJdLCJuYW1lcyI6WyJMZWZ0TWVudSIsImxvZ28iLCJ1c2VSb3V0ZXIiLCJwYXRobmFtZSIsIlJlYWN0IiwidXNlU3RhdGUiLCJhY3RpdmVNZW51Iiwic2V0QWN0aXZlTWVudSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0NBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBTU8sSUFBTUEsUUFBeUIsR0FBRyxTQUE1QkEsUUFBNEIsT0FBYztBQUFBOztBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVzs7QUFBQSxtQkFDaENDLDZEQUFTLEVBRHVCO0FBQUEsTUFDN0NDLFFBRDZDLGNBQzdDQSxRQUQ2QyxFQUVyRDs7O0FBRnFELHdCQUdqQkMsNENBQUssQ0FBQ0MsUUFBTixFQUhpQjtBQUFBO0FBQUEsTUFHOUNDLFVBSDhDO0FBQUEsTUFHbENDLGFBSGtDOztBQU9yRCxTQUNFLE1BQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsNERBQUQ7QUFDRSxZQUFRLEVBQUVOLElBRFo7QUFFRSxPQUFHLEVBQUUsV0FGUCxDQUdFO0FBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBT0UsTUFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUEYsQ0FERjtBQWlDRCxDQXhDTTs7R0FBTUQsUTtVQUNVRSxxRDs7O0tBRFZGLFEiLCJmaWxlIjoiLi9jb250YWluZXJzL0xheW91dENvbnRhaW5lci9IZWFkZXIvTWVudS9MZWZ0TWVudS9MZWZ0TWVudS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtcbiAgTWFpbk1lbnUsXG4gIExlZnRNZW51Qm94LFxufSBmcm9tICcuL0xlZnRNZW51LnN0eWxlJztcbi8vIGltcG9ydCBOYXZMaW5rIGZyb20gJ2NvbXBvbmVudHMvTmF2TGluay9OYXZMaW5rJztcbi8vIGltcG9ydCB7XG4vLyAgIE1FTixcbi8vICAgV09NRU4sXG4vLyAgIEtJRFNcbi8vIH0gZnJvbSAnY29uc3RhbnRzL25hdmlnYXRpb24nO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IExvZ28gZnJvbSAnY29tcG9uZW50cy9Mb2dvL0xvZ28nO1xuLy8gaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG4vLyBpbXBvcnQgeyB0aGVtZUdldCB9IGZyb20gJ0BzdHlsZWQtc3lzdGVtL3RoZW1lLWdldCc7XG4vLyBjb25zdCBNRU5VX0lURU1TID0gW1xuLy8gICB7XG4vLyAgICAgbGluazogTUVOLFxuLy8gICAgIGxhYmVsOiAnTWVuJyxcbi8vICAgICAvLyBpY29uOiA8RHJlc3NJY29uIC8+LFxuLy8gICAgIGludGxJZDogJ25hdk1lbk1lbnUnLFxuLy8gICB9LFxuLy8gICB7XG4vLyAgICAgbGluazogV09NRU4sXG4vLyAgICAgbGFiZWw6ICdXb21lbicsXG4vLyAgICAgLy8gaWNvbjogPERyZXNzSWNvbiAvPixcbi8vICAgICBpbnRsSWQ6ICduYXZXb21lbk1lbnUnLFxuLy8gICB9LFxuLy8gICB7XG4vLyAgICAgbGluazogS0lEUyxcbi8vICAgICBsYWJlbDogJ0tpZHMnLFxuLy8gICAgIC8vIGljb246IDxEcmVzc0ljb24gLz4sXG4vLyAgICAgaW50bElkOiAnbmF2S2lkc01lbnUnLFxuLy8gICB9LFxuLy8gXTtcblxuLy8gY29uc3QgQ2F0ZWdvcnlNZW51V3JhcHBlciA9IHN0eWxlZC5kaXZgXG4vLyAgIGRpc3BsYXk6IGZsZXg7XG4vLyAgIC5tZW51LWl0ZW17XG4vLyAgICAgY29sb3I6IGJsYWNrO1xuLy8gICAgIGJhY2tncm91bmQ6ICNGRkY7XG4gICAgXG4vLyAgICAgYSB7XG4vLyAgICAgICBmb250LXNpemU6IDE1cHg7XG4vLyAgICAgICBmb250LXdlaWdodDogNzAwO1xuLy8gICAgICAgY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy5kYXJrQm9sZCcsICcjMEQxMTM2Jyl9O1xuLy8gICAgICAgbGluZS1oZWlnaHQ6IDEuMmVtO1xuLy8gICAgICAgZGlzcGxheTogYmxvY2s7XG4vLyAgICAgICBwYWRkaW5nOiAxNXB4IDMwcHg7XG4vLyAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4vLyAgICAgICB0cmFuc2l0aW9uOiAwLjE1cyBlYXNlLWluLW91dDtcbi8vICAgICAgIGRpc3BsYXk6IGZsZXg7XG4vLyAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuLy8gICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDE0MDBweCkge1xuLy8gICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4vLyAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbi8vICAgICAgIH1cblxuLy8gICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTFweCkgYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xuLy8gICAgICAgICBwYWRkaW5nOiAxNXB4IDMwcHg7XG4vLyAgICAgICB9XG5cbi8vICAgICAgICY6aG92ZXIge1xuLy8gICAgICAgICBjb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLnByaW1hcnknLCAnIzAwOUU3RicpfTtcbi8vICAgICAgIH1cbi8vICAgICAgICYuY3VycmVudC1wYWdlIHtcbi8vICAgICAgICAgY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycy5wcmltYXJ5JywgJyMwMDlFN0YnKX07XG4vLyAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4vLyAgICAgICB9XG4vLyAgICAgfVxuLy8gICB9XG4vLyBgXG4vLyBjb25zdCBDYXRlZ29yeU1lbnUgPSAoeyBvbkNsaWNrIH0pID0+IHtcbi8vICAgcmV0dXJuIChcbi8vICAgICA8Q2F0ZWdvcnlNZW51V3JhcHBlcj5cbi8vICAgICAgIHtNRU5VX0lURU1TLm1hcCgoaXRlbSkgPT4gKFxuLy8gICAgICAgICA8TmF2TGlua1xuLy8gICAgICAgICAgIGtleT17aXRlbS5saW5rfVxuLy8gICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uQ2xpY2soaXRlbSl9XG4vLyAgICAgICAgICAgY2xhc3NOYW1lPSdtZW51LWl0ZW0nXG4vLyAgICAgICAgICAgaHJlZj17aXRlbS5saW5rfVxuLy8gICAgICAgICAgIGxhYmVsPXtpdGVtLmxhYmVsfVxuLy8gICAgICAgICAgIC8vIGljb249e2l0ZW0uaWNvbn1cbi8vICAgICAgICAgICBpY29uQ2xhc3M9J21lbnUtaXRlbS1pY29uJ1xuLy8gICAgICAgICAgIGludGxJZD17aXRlbS5pbnRsSWR9XG4vLyAgICAgICAgIC8+XG4vLyAgICAgICApKX1cbi8vICAgICA8L0NhdGVnb3J5TWVudVdyYXBwZXI+XG4vLyAgICk7XG4vLyB9O1xuXG50eXBlIFByb3BzID0ge1xuICBsb2dvOiBzdHJpbmc7XG59O1xuXG5leHBvcnQgY29uc3QgTGVmdE1lbnU6IFJlYWN0LkZDPFByb3BzPiA9ICh7IGxvZ28gfSkgPT4ge1xuICBjb25zdCB7IHBhdGhuYW1lIH0gPSB1c2VSb3V0ZXIoKTtcbiAgLy8gY29uc3QgaW5pdGlhbE1lbnUgPSBNRU5VX0lURU1TLmZpbmQoKGl0ZW0pID0+IGl0ZW0ubGluayA9PT0gcGF0aG5hbWUpO1xuICBjb25zdCBbYWN0aXZlTWVudSwgc2V0QWN0aXZlTWVudV0gPSBSZWFjdC51c2VTdGF0ZShcbiAgICAvLyBpbml0aWFsTWVudSA/PyBNRU5VX0lURU1TWzBdXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8TGVmdE1lbnVCb3g+XG4gICAgICA8TG9nb1xuICAgICAgICBpbWFnZVVybD17bG9nb31cbiAgICAgICAgYWx0PXsnU2hvcCBMb2dvJ31cbiAgICAgICAgLy8gb25DbGljaz17KCkgPT4gc2V0QWN0aXZlTWVudShNRU5VX0lURU1TWzBdKX1cbiAgICAgIC8+XG5cbiAgICAgIDxNYWluTWVudT5cbiAgICAgICAgey8qIDxQb3BvdmVyXG4gICAgICAgICAgY2xhc3NOYW1lPSdyaWdodCdcbiAgICAgICAgICBoYW5kbGVyPXtcbiAgICAgICAgICAgIDxTZWxlY3RlZEl0ZW0+XG4gICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgIDxJY29uPnthY3RpdmVNZW51Py5pY29ufTwvSWNvbj5cbiAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlXG4gICAgICAgICAgICAgICAgICAgIGlkPXthY3RpdmVNZW51Py5pbnRsSWR9XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRNZXNzYWdlPXthY3RpdmVNZW51Py5sYWJlbH1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDxBcnJvdz5cbiAgICAgICAgICAgICAgICA8TWVudURvd24gLz5cbiAgICAgICAgICAgICAgPC9BcnJvdz5cbiAgICAgICAgICAgIDwvU2VsZWN0ZWRJdGVtPlxuICAgICAgICAgIH1cbiAgICAgICAgICBjb250ZW50PXs8Q2F0ZWdvcnlNZW51IG9uQ2xpY2s9e3NldEFjdGl2ZU1lbnV9IC8+fVxuICAgICAgICAvPiAqL31cbiAgICAgICAgey8qIDxDYXRlZ29yeU1lbnUgb25DbGljaz17KCk9Pnt9fS8+ICovfVxuICAgICAgPC9NYWluTWVudT5cbiAgICA8L0xlZnRNZW51Qm94PlxuICApO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./containers/LayoutContainer/Header/Menu/LeftMenu/LeftMenu.tsx\n");

/***/ })

})