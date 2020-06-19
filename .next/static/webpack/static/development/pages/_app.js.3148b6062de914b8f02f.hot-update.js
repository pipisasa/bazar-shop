webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./containers/LayoutContainer/Header/Menu/LeftMenu/LeftMenu.tsx":
/*!**********************************************************************!*\
  !*** ./containers/LayoutContainer/Header/Menu/LeftMenu/LeftMenu.tsx ***!
  \**********************************************************************/
/*! exports provided: LeftMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LeftMenu\", function() { return LeftMenu; });\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _LeftMenu_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LeftMenu.style */ \"./containers/LayoutContainer/Header/Menu/LeftMenu/LeftMenu.style.tsx\");\n/* harmony import */ var components_NavLink_NavLink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/NavLink/NavLink */ \"./components/NavLink/NavLink.tsx\");\n/* harmony import */ var constants_navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! constants/navigation */ \"./constants/navigation.ts\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var components_Logo_Logo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/Logo/Logo */ \"./components/Logo/Logo.tsx\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/home/roma/Documents/shop/containers/LayoutContainer/Header/Menu/LeftMenu/LeftMenu.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\"\\n  .menu-item{\\n    color: black;\\n    background: #FFF;\\n    \\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n // import Popover from 'components/Popover/Popover';\n// import {\n//   MenuDown,\n//   DressIcon,\n// } from 'components/AllSvgIcon';\n\n\n\n // import { FormattedMessage } from 'react-intl';\n\n\n\nvar MENU_ITEMS = [{\n  link: constants_navigation__WEBPACK_IMPORTED_MODULE_5__[\"MEN\"],\n  label: 'Men',\n  // icon: <DressIcon />,\n  intlId: 'navMenMenu'\n}, {\n  link: constants_navigation__WEBPACK_IMPORTED_MODULE_5__[\"WOMEN\"],\n  label: 'Women',\n  // icon: <DressIcon />,\n  intlId: 'navWomenMenu'\n}, {\n  link: constants_navigation__WEBPACK_IMPORTED_MODULE_5__[\"KIDS\"],\n  label: 'Kids',\n  // icon: <DressIcon />,\n  intlId: 'navKidsMenu'\n}];\nvar CategoryMenuWrapper = styled_components__WEBPACK_IMPORTED_MODULE_8__[\"default\"].div(_templateObject());\n\nvar CategoryMenu = function CategoryMenu(_ref) {\n  var _onClick = _ref.onClick;\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, MENU_ITEMS.map(function (item) {\n    return __jsx(components_NavLink_NavLink__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      key: item.link,\n      onClick: function onClick() {\n        return _onClick(item);\n      },\n      className: \"menu-item\",\n      href: item.link,\n      label: item.label // icon={item.icon}\n      ,\n      iconClass: \"menu-item-icon\",\n      intlId: item.intlId,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 9\n      }\n    });\n  }));\n};\n\n_c = CategoryMenu;\nvar LeftMenu = function LeftMenu(_ref2) {\n  _s();\n\n  var logo = _ref2.logo;\n\n  var _useRouter = Object(next_router__WEBPACK_IMPORTED_MODULE_6__[\"useRouter\"])(),\n      pathname = _useRouter.pathname;\n\n  var initialMenu = MENU_ITEMS.find(function (item) {\n    return item.link === pathname;\n  });\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(initialMenu !== null && initialMenu !== void 0 ? initialMenu : MENU_ITEMS[0]),\n      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState, 2),\n      activeMenu = _React$useState2[0],\n      setActiveMenu = _React$useState2[1];\n\n  return __jsx(_LeftMenu_style__WEBPACK_IMPORTED_MODULE_3__[\"LeftMenuBox\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 5\n    }\n  }, __jsx(components_Logo_Logo__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    imageUrl: logo,\n    alt: 'Shop Logo',\n    onClick: function onClick() {\n      return setActiveMenu(MENU_ITEMS[0]);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 7\n    }\n  }), __jsx(_LeftMenu_style__WEBPACK_IMPORTED_MODULE_3__[\"MainMenu\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 7\n    }\n  }, __jsx(CategoryMenu, {\n    onClick: function onClick() {},\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 111,\n      columnNumber: 9\n    }\n  })));\n};\n\n_s(LeftMenu, \"Fn7RBI7pLHsb74pdHsKP88ausss=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_6__[\"useRouter\"]];\n});\n\n_c2 = LeftMenu;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"CategoryMenu\");\n$RefreshReg$(_c2, \"LeftMenu\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb250YWluZXJzL0xheW91dENvbnRhaW5lci9IZWFkZXIvTWVudS9MZWZ0TWVudS9MZWZ0TWVudS50c3g/ZjIxNSJdLCJuYW1lcyI6WyJNRU5VX0lURU1TIiwibGluayIsIk1FTiIsImxhYmVsIiwiaW50bElkIiwiV09NRU4iLCJLSURTIiwiQ2F0ZWdvcnlNZW51V3JhcHBlciIsInN0eWxlZCIsImRpdiIsIkNhdGVnb3J5TWVudSIsIm9uQ2xpY2siLCJtYXAiLCJpdGVtIiwiTGVmdE1lbnUiLCJsb2dvIiwidXNlUm91dGVyIiwicGF0aG5hbWUiLCJpbml0aWFsTWVudSIsImZpbmQiLCJSZWFjdCIsInVzZVN0YXRlIiwiYWN0aXZlTWVudSIsInNldEFjdGl2ZU1lbnUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7Q0FNQTs7QUFDQTtBQUNBO0FBQ0EsSUFBTUEsVUFBVSxHQUFHLENBQ2pCO0FBQ0VDLE1BQUksRUFBRUMsd0RBRFI7QUFFRUMsT0FBSyxFQUFFLEtBRlQ7QUFHRTtBQUNBQyxRQUFNLEVBQUU7QUFKVixDQURpQixFQU9qQjtBQUNFSCxNQUFJLEVBQUVJLDBEQURSO0FBRUVGLE9BQUssRUFBRSxPQUZUO0FBR0U7QUFDQUMsUUFBTSxFQUFFO0FBSlYsQ0FQaUIsRUFhakI7QUFDRUgsTUFBSSxFQUFFSyx5REFEUjtBQUVFSCxPQUFLLEVBQUUsTUFGVDtBQUdFO0FBQ0FDLFFBQU0sRUFBRTtBQUpWLENBYmlCLENBQW5CO0FBcUJBLElBQU1HLG1CQUFtQixHQUFHQyx5REFBTSxDQUFDQyxHQUFWLG1CQUF6Qjs7QUFPQSxJQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxPQUFpQjtBQUFBLE1BQWRDLFFBQWMsUUFBZEEsT0FBYztBQUNwQyxTQUNFLG1FQUNHWCxVQUFVLENBQUNZLEdBQVgsQ0FBZSxVQUFDQyxJQUFEO0FBQUEsV0FDZCxNQUFDLGtFQUFEO0FBQ0UsU0FBRyxFQUFFQSxJQUFJLENBQUNaLElBRFo7QUFFRSxhQUFPLEVBQUU7QUFBQSxlQUFNVSxRQUFPLENBQUNFLElBQUQsQ0FBYjtBQUFBLE9BRlg7QUFHRSxlQUFTLEVBQUMsV0FIWjtBQUlFLFVBQUksRUFBRUEsSUFBSSxDQUFDWixJQUpiO0FBS0UsV0FBSyxFQUFFWSxJQUFJLENBQUNWLEtBTGQsQ0FNRTtBQU5GO0FBT0UsZUFBUyxFQUFDLGdCQVBaO0FBUUUsWUFBTSxFQUFFVSxJQUFJLENBQUNULE1BUmY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURjO0FBQUEsR0FBZixDQURILENBREY7QUFnQkQsQ0FqQkQ7O0tBQU1NLFk7QUF1QkMsSUFBTUksUUFBeUIsR0FBRyxTQUE1QkEsUUFBNEIsUUFBYztBQUFBOztBQUFBLE1BQVhDLElBQVcsU0FBWEEsSUFBVzs7QUFBQSxtQkFDaENDLDZEQUFTLEVBRHVCO0FBQUEsTUFDN0NDLFFBRDZDLGNBQzdDQSxRQUQ2Qzs7QUFFckQsTUFBTUMsV0FBVyxHQUFHbEIsVUFBVSxDQUFDbUIsSUFBWCxDQUFnQixVQUFDTixJQUFEO0FBQUEsV0FBVUEsSUFBSSxDQUFDWixJQUFMLEtBQWNnQixRQUF4QjtBQUFBLEdBQWhCLENBQXBCOztBQUZxRCx3QkFHakJHLDRDQUFLLENBQUNDLFFBQU4sQ0FDbENILFdBRGtDLGFBQ2xDQSxXQURrQyxjQUNsQ0EsV0FEa0MsR0FDbkJsQixVQUFVLENBQUMsQ0FBRCxDQURTLENBSGlCO0FBQUE7QUFBQSxNQUc5Q3NCLFVBSDhDO0FBQUEsTUFHbENDLGFBSGtDOztBQU9yRCxTQUNFLE1BQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsNERBQUQ7QUFDRSxZQUFRLEVBQUVSLElBRFo7QUFFRSxPQUFHLEVBQUUsV0FGUDtBQUdFLFdBQU8sRUFBRTtBQUFBLGFBQU1RLGFBQWEsQ0FBQ3ZCLFVBQVUsQ0FBQyxDQUFELENBQVgsQ0FBbkI7QUFBQSxLQUhYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQU9FLE1BQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQXFCRSxNQUFDLFlBQUQ7QUFBYyxXQUFPLEVBQUUsbUJBQUksQ0FBRSxDQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBckJGLENBUEYsQ0FERjtBQWlDRCxDQXhDTTs7R0FBTWMsUTtVQUNVRSxxRDs7O01BRFZGLFEiLCJmaWxlIjoiLi9jb250YWluZXJzL0xheW91dENvbnRhaW5lci9IZWFkZXIvTWVudS9MZWZ0TWVudS9MZWZ0TWVudS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtcbiAgTWFpbk1lbnUsXG4gIC8vIFNlbGVjdGVkSXRlbSxcbiAgLy8gSWNvbixcbiAgLy8gQXJyb3csXG4gIExlZnRNZW51Qm94LFxufSBmcm9tICcuL0xlZnRNZW51LnN0eWxlJztcbi8vIGltcG9ydCBQb3BvdmVyIGZyb20gJ2NvbXBvbmVudHMvUG9wb3Zlci9Qb3BvdmVyJztcbi8vIGltcG9ydCB7XG4vLyAgIE1lbnVEb3duLFxuLy8gICBEcmVzc0ljb24sXG4vLyB9IGZyb20gJ2NvbXBvbmVudHMvQWxsU3ZnSWNvbic7XG5pbXBvcnQgTmF2TGluayBmcm9tICdjb21wb25lbnRzL05hdkxpbmsvTmF2TGluayc7XG5pbXBvcnQge1xuICBNRU4sXG4gIFdPTUVOLFxuICBLSURTXG59IGZyb20gJ2NvbnN0YW50cy9uYXZpZ2F0aW9uJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbi8vIGltcG9ydCB7IEZvcm1hdHRlZE1lc3NhZ2UgfSBmcm9tICdyZWFjdC1pbnRsJztcbmltcG9ydCBMb2dvIGZyb20gJ2NvbXBvbmVudHMvTG9nby9Mb2dvJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuY29uc3QgTUVOVV9JVEVNUyA9IFtcbiAge1xuICAgIGxpbms6IE1FTixcbiAgICBsYWJlbDogJ01lbicsXG4gICAgLy8gaWNvbjogPERyZXNzSWNvbiAvPixcbiAgICBpbnRsSWQ6ICduYXZNZW5NZW51JyxcbiAgfSxcbiAge1xuICAgIGxpbms6IFdPTUVOLFxuICAgIGxhYmVsOiAnV29tZW4nLFxuICAgIC8vIGljb246IDxEcmVzc0ljb24gLz4sXG4gICAgaW50bElkOiAnbmF2V29tZW5NZW51JyxcbiAgfSxcbiAge1xuICAgIGxpbms6IEtJRFMsXG4gICAgbGFiZWw6ICdLaWRzJyxcbiAgICAvLyBpY29uOiA8RHJlc3NJY29uIC8+LFxuICAgIGludGxJZDogJ25hdktpZHNNZW51JyxcbiAgfSxcbl07XG5cbmNvbnN0IENhdGVnb3J5TWVudVdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICAubWVudS1pdGVte1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBiYWNrZ3JvdW5kOiAjRkZGO1xuICAgIFxuICB9XG5gXG5jb25zdCBDYXRlZ29yeU1lbnUgPSAoeyBvbkNsaWNrIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge01FTlVfSVRFTVMubWFwKChpdGVtKSA9PiAoXG4gICAgICAgIDxOYXZMaW5rXG4gICAgICAgICAga2V5PXtpdGVtLmxpbmt9XG4gICAgICAgICAgb25DbGljaz17KCkgPT4gb25DbGljayhpdGVtKX1cbiAgICAgICAgICBjbGFzc05hbWU9J21lbnUtaXRlbSdcbiAgICAgICAgICBocmVmPXtpdGVtLmxpbmt9XG4gICAgICAgICAgbGFiZWw9e2l0ZW0ubGFiZWx9XG4gICAgICAgICAgLy8gaWNvbj17aXRlbS5pY29ufVxuICAgICAgICAgIGljb25DbGFzcz0nbWVudS1pdGVtLWljb24nXG4gICAgICAgICAgaW50bElkPXtpdGVtLmludGxJZH1cbiAgICAgICAgLz5cbiAgICAgICkpfVxuICAgIDwvPlxuICApO1xufTtcblxudHlwZSBQcm9wcyA9IHtcbiAgbG9nbzogc3RyaW5nO1xufTtcblxuZXhwb3J0IGNvbnN0IExlZnRNZW51OiBSZWFjdC5GQzxQcm9wcz4gPSAoeyBsb2dvIH0pID0+IHtcbiAgY29uc3QgeyBwYXRobmFtZSB9ID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IGluaXRpYWxNZW51ID0gTUVOVV9JVEVNUy5maW5kKChpdGVtKSA9PiBpdGVtLmxpbmsgPT09IHBhdGhuYW1lKTtcbiAgY29uc3QgW2FjdGl2ZU1lbnUsIHNldEFjdGl2ZU1lbnVdID0gUmVhY3QudXNlU3RhdGUoXG4gICAgaW5pdGlhbE1lbnUgPz8gTUVOVV9JVEVNU1swXVxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPExlZnRNZW51Qm94PlxuICAgICAgPExvZ29cbiAgICAgICAgaW1hZ2VVcmw9e2xvZ299XG4gICAgICAgIGFsdD17J1Nob3AgTG9nbyd9XG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZU1lbnUoTUVOVV9JVEVNU1swXSl9XG4gICAgICAvPlxuXG4gICAgICA8TWFpbk1lbnU+XG4gICAgICAgIHsvKiA8UG9wb3ZlclxuICAgICAgICAgIGNsYXNzTmFtZT0ncmlnaHQnXG4gICAgICAgICAgaGFuZGxlcj17XG4gICAgICAgICAgICA8U2VsZWN0ZWRJdGVtPlxuICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICA8SWNvbj57YWN0aXZlTWVudT8uaWNvbn08L0ljb24+XG4gICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZVxuICAgICAgICAgICAgICAgICAgICBpZD17YWN0aXZlTWVudT8uaW50bElkfVxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0TWVzc2FnZT17YWN0aXZlTWVudT8ubGFiZWx9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8QXJyb3c+XG4gICAgICAgICAgICAgICAgPE1lbnVEb3duIC8+XG4gICAgICAgICAgICAgIDwvQXJyb3c+XG4gICAgICAgICAgICA8L1NlbGVjdGVkSXRlbT5cbiAgICAgICAgICB9XG4gICAgICAgICAgY29udGVudD17PENhdGVnb3J5TWVudSBvbkNsaWNrPXtzZXRBY3RpdmVNZW51fSAvPn1cbiAgICAgICAgLz4gKi99XG4gICAgICAgIDxDYXRlZ29yeU1lbnUgb25DbGljaz17KCk9Pnt9fS8+XG4gICAgICA8L01haW5NZW51PlxuICAgIDwvTGVmdE1lbnVCb3g+XG4gICk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./containers/LayoutContainer/Header/Menu/LeftMenu/LeftMenu.tsx\n");

/***/ })

})