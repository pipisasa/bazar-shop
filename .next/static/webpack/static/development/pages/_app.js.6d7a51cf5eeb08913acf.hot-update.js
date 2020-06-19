webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./containers/LayoutContainer/Header/Menu/LeftMenu/LeftMenu.tsx":
/*!**********************************************************************!*\
  !*** ./containers/LayoutContainer/Header/Menu/LeftMenu/LeftMenu.tsx ***!
  \**********************************************************************/
/*! exports provided: LeftMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LeftMenu\", function() { return LeftMenu; });\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _LeftMenu_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LeftMenu.style */ \"./containers/LayoutContainer/Header/Menu/LeftMenu/LeftMenu.style.tsx\");\n/* harmony import */ var components_NavLink_NavLink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/NavLink/NavLink */ \"./components/NavLink/NavLink.tsx\");\n/* harmony import */ var constants_navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! constants/navigation */ \"./constants/navigation.ts\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var components_Logo_Logo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/Logo/Logo */ \"./components/Logo/Logo.tsx\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @styled-system/theme-get */ \"./node_modules/@styled-system/theme-get/dist/index.esm.js\");\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/home/roma/Documents/shop/containers/LayoutContainer/Header/Menu/LeftMenu/LeftMenu.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\"\\n  display: flex;\\n  .menu-item{\\n    color: black;\\n    background: #FFF;\\n    \\n    a {\\n      font-size: 15px;\\n      font-weight: 700;\\n      color: \", \";\\n      line-height: 1.2em;\\n      display: block;\\n      padding: 15px 30px;\\n      border-radius: 6px;\\n      transition: 0.15s ease-in-out;\\n      display: flex;\\n      align-items: center;\\n      @media (max-width: 1400px) {\\n        margin-right: 10px;\\n        font-size: 15px;\\n      }\\n\\n      @media only screen and (min-width: 991px) and (max-width: 1200px) {\\n        padding: 15px 30px;\\n      }\\n\\n      &:hover {\\n        color: \", \";\\n      }\\n      &.current-page {\\n        color: \", \";\\n        background-color: #fff;\\n      }\\n    }\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n // import Popover from 'components/Popover/Popover';\n// import {\n//   MenuDown,\n//   DressIcon,\n// } from 'components/AllSvgIcon';\n\n\n\n // import { FormattedMessage } from 'react-intl';\n\n\n\n\nvar MENU_ITEMS = [{\n  link: constants_navigation__WEBPACK_IMPORTED_MODULE_5__[\"MEN\"],\n  label: 'Men',\n  // icon: <DressIcon />,\n  intlId: 'navMenMenu'\n}, {\n  link: constants_navigation__WEBPACK_IMPORTED_MODULE_5__[\"WOMEN\"],\n  label: 'Women',\n  // icon: <DressIcon />,\n  intlId: 'navWomenMenu'\n}, {\n  link: constants_navigation__WEBPACK_IMPORTED_MODULE_5__[\"KIDS\"],\n  label: 'Kids',\n  // icon: <DressIcon />,\n  intlId: 'navKidsMenu'\n}];\nvar CategoryMenuWrapper = styled_components__WEBPACK_IMPORTED_MODULE_8__[\"default\"].div(_templateObject(), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_9__[\"themeGet\"])('colors.darkBold', '#0D1136'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_9__[\"themeGet\"])('colors.primary', '#009E7F'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_9__[\"themeGet\"])('colors.primary', '#009E7F'));\n_c = CategoryMenuWrapper;\n\nvar CategoryMenu = function CategoryMenu(_ref) {\n  var _onClick = _ref.onClick;\n  return __jsx(CategoryMenuWrapper, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 5\n    }\n  }, MENU_ITEMS.map(function (item) {\n    return __jsx(components_NavLink_NavLink__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      key: item.link,\n      onClick: function onClick() {\n        return _onClick(item);\n      },\n      className: \"menu-item\",\n      href: item.link,\n      label: item.label // icon={item.icon}\n      ,\n      iconClass: \"menu-item-icon\",\n      intlId: item.intlId,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 86,\n        columnNumber: 9\n      }\n    });\n  }));\n};\n\n_c2 = CategoryMenu;\nvar LeftMenu = function LeftMenu(_ref2) {\n  _s();\n\n  var logo = _ref2.logo;\n\n  var _useRouter = Object(next_router__WEBPACK_IMPORTED_MODULE_6__[\"useRouter\"])(),\n      pathname = _useRouter.pathname;\n\n  var initialMenu = MENU_ITEMS.find(function (item) {\n    return item.link === pathname;\n  });\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(initialMenu !== null && initialMenu !== void 0 ? initialMenu : MENU_ITEMS[0]),\n      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState, 2),\n      activeMenu = _React$useState2[0],\n      setActiveMenu = _React$useState2[1];\n\n  return __jsx(_LeftMenu_style__WEBPACK_IMPORTED_MODULE_3__[\"LeftMenuBox\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 113,\n      columnNumber: 5\n    }\n  }, __jsx(components_Logo_Logo__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    imageUrl: logo,\n    alt: 'Shop Logo',\n    onClick: function onClick() {\n      return setActiveMenu(MENU_ITEMS[0]);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 114,\n      columnNumber: 7\n    }\n  }), __jsx(_LeftMenu_style__WEBPACK_IMPORTED_MODULE_3__[\"MainMenu\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 120,\n      columnNumber: 7\n    }\n  }, __jsx(CategoryMenu, {\n    onClick: function onClick() {},\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 141,\n      columnNumber: 9\n    }\n  })));\n};\n\n_s(LeftMenu, \"Fn7RBI7pLHsb74pdHsKP88ausss=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_6__[\"useRouter\"]];\n});\n\n_c3 = LeftMenu;\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"CategoryMenuWrapper\");\n$RefreshReg$(_c2, \"CategoryMenu\");\n$RefreshReg$(_c3, \"LeftMenu\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb250YWluZXJzL0xheW91dENvbnRhaW5lci9IZWFkZXIvTWVudS9MZWZ0TWVudS9MZWZ0TWVudS50c3g/ZjIxNSJdLCJuYW1lcyI6WyJNRU5VX0lURU1TIiwibGluayIsIk1FTiIsImxhYmVsIiwiaW50bElkIiwiV09NRU4iLCJLSURTIiwiQ2F0ZWdvcnlNZW51V3JhcHBlciIsInN0eWxlZCIsImRpdiIsInRoZW1lR2V0IiwiQ2F0ZWdvcnlNZW51Iiwib25DbGljayIsIm1hcCIsIml0ZW0iLCJMZWZ0TWVudSIsImxvZ28iLCJ1c2VSb3V0ZXIiLCJwYXRobmFtZSIsImluaXRpYWxNZW51IiwiZmluZCIsIlJlYWN0IiwidXNlU3RhdGUiLCJhY3RpdmVNZW51Iiwic2V0QWN0aXZlTWVudSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7Q0FNQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFNQSxVQUFVLEdBQUcsQ0FDakI7QUFDRUMsTUFBSSxFQUFFQyx3REFEUjtBQUVFQyxPQUFLLEVBQUUsS0FGVDtBQUdFO0FBQ0FDLFFBQU0sRUFBRTtBQUpWLENBRGlCLEVBT2pCO0FBQ0VILE1BQUksRUFBRUksMERBRFI7QUFFRUYsT0FBSyxFQUFFLE9BRlQ7QUFHRTtBQUNBQyxRQUFNLEVBQUU7QUFKVixDQVBpQixFQWFqQjtBQUNFSCxNQUFJLEVBQUVLLHlEQURSO0FBRUVILE9BQUssRUFBRSxNQUZUO0FBR0U7QUFDQUMsUUFBTSxFQUFFO0FBSlYsQ0FiaUIsQ0FBbkI7QUFxQkEsSUFBTUcsbUJBQW1CLEdBQUdDLHlEQUFNLENBQUNDLEdBQVYsb0JBU1ZDLHlFQUFRLENBQUMsaUJBQUQsRUFBb0IsU0FBcEIsQ0FURSxFQTJCUkEseUVBQVEsQ0FBQyxnQkFBRCxFQUFtQixTQUFuQixDQTNCQSxFQThCUkEseUVBQVEsQ0FBQyxnQkFBRCxFQUFtQixTQUFuQixDQTlCQSxDQUF6QjtLQUFNSCxtQjs7QUFvQ04sSUFBTUksWUFBWSxHQUFHLFNBQWZBLFlBQWUsT0FBaUI7QUFBQSxNQUFkQyxRQUFjLFFBQWRBLE9BQWM7QUFDcEMsU0FDRSxNQUFDLG1CQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR1osVUFBVSxDQUFDYSxHQUFYLENBQWUsVUFBQ0MsSUFBRDtBQUFBLFdBQ2QsTUFBQyxrRUFBRDtBQUNFLFNBQUcsRUFBRUEsSUFBSSxDQUFDYixJQURaO0FBRUUsYUFBTyxFQUFFO0FBQUEsZUFBTVcsUUFBTyxDQUFDRSxJQUFELENBQWI7QUFBQSxPQUZYO0FBR0UsZUFBUyxFQUFDLFdBSFo7QUFJRSxVQUFJLEVBQUVBLElBQUksQ0FBQ2IsSUFKYjtBQUtFLFdBQUssRUFBRWEsSUFBSSxDQUFDWCxLQUxkLENBTUU7QUFORjtBQU9FLGVBQVMsRUFBQyxnQkFQWjtBQVFFLFlBQU0sRUFBRVcsSUFBSSxDQUFDVixNQVJmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFEYztBQUFBLEdBQWYsQ0FESCxDQURGO0FBZ0JELENBakJEOztNQUFNTyxZO0FBdUJDLElBQU1JLFFBQXlCLEdBQUcsU0FBNUJBLFFBQTRCLFFBQWM7QUFBQTs7QUFBQSxNQUFYQyxJQUFXLFNBQVhBLElBQVc7O0FBQUEsbUJBQ2hDQyw2REFBUyxFQUR1QjtBQUFBLE1BQzdDQyxRQUQ2QyxjQUM3Q0EsUUFENkM7O0FBRXJELE1BQU1DLFdBQVcsR0FBR25CLFVBQVUsQ0FBQ29CLElBQVgsQ0FBZ0IsVUFBQ04sSUFBRDtBQUFBLFdBQVVBLElBQUksQ0FBQ2IsSUFBTCxLQUFjaUIsUUFBeEI7QUFBQSxHQUFoQixDQUFwQjs7QUFGcUQsd0JBR2pCRyw0Q0FBSyxDQUFDQyxRQUFOLENBQ2xDSCxXQURrQyxhQUNsQ0EsV0FEa0MsY0FDbENBLFdBRGtDLEdBQ25CbkIsVUFBVSxDQUFDLENBQUQsQ0FEUyxDQUhpQjtBQUFBO0FBQUEsTUFHOUN1QixVQUg4QztBQUFBLE1BR2xDQyxhQUhrQzs7QUFPckQsU0FDRSxNQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDREQUFEO0FBQ0UsWUFBUSxFQUFFUixJQURaO0FBRUUsT0FBRyxFQUFFLFdBRlA7QUFHRSxXQUFPLEVBQUU7QUFBQSxhQUFNUSxhQUFhLENBQUN4QixVQUFVLENBQUMsQ0FBRCxDQUFYLENBQW5CO0FBQUEsS0FIWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFPRSxNQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FxQkUsTUFBQyxZQUFEO0FBQWMsV0FBTyxFQUFFLG1CQUFJLENBQUUsQ0FBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXJCRixDQVBGLENBREY7QUFpQ0QsQ0F4Q007O0dBQU1lLFE7VUFDVUUscUQ7OztNQURWRixRIiwiZmlsZSI6Ii4vY29udGFpbmVycy9MYXlvdXRDb250YWluZXIvSGVhZGVyL01lbnUvTGVmdE1lbnUvTGVmdE1lbnUudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7XG4gIE1haW5NZW51LFxuICAvLyBTZWxlY3RlZEl0ZW0sXG4gIC8vIEljb24sXG4gIC8vIEFycm93LFxuICBMZWZ0TWVudUJveCxcbn0gZnJvbSAnLi9MZWZ0TWVudS5zdHlsZSc7XG4vLyBpbXBvcnQgUG9wb3ZlciBmcm9tICdjb21wb25lbnRzL1BvcG92ZXIvUG9wb3Zlcic7XG4vLyBpbXBvcnQge1xuLy8gICBNZW51RG93bixcbi8vICAgRHJlc3NJY29uLFxuLy8gfSBmcm9tICdjb21wb25lbnRzL0FsbFN2Z0ljb24nO1xuaW1wb3J0IE5hdkxpbmsgZnJvbSAnY29tcG9uZW50cy9OYXZMaW5rL05hdkxpbmsnO1xuaW1wb3J0IHtcbiAgTUVOLFxuICBXT01FTixcbiAgS0lEU1xufSBmcm9tICdjb25zdGFudHMvbmF2aWdhdGlvbic7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG4vLyBpbXBvcnQgeyBGb3JtYXR0ZWRNZXNzYWdlIH0gZnJvbSAncmVhY3QtaW50bCc7XG5pbXBvcnQgTG9nbyBmcm9tICdjb21wb25lbnRzL0xvZ28vTG9nbyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IHRoZW1lR2V0IH0gZnJvbSAnQHN0eWxlZC1zeXN0ZW0vdGhlbWUtZ2V0JztcbmNvbnN0IE1FTlVfSVRFTVMgPSBbXG4gIHtcbiAgICBsaW5rOiBNRU4sXG4gICAgbGFiZWw6ICdNZW4nLFxuICAgIC8vIGljb246IDxEcmVzc0ljb24gLz4sXG4gICAgaW50bElkOiAnbmF2TWVuTWVudScsXG4gIH0sXG4gIHtcbiAgICBsaW5rOiBXT01FTixcbiAgICBsYWJlbDogJ1dvbWVuJyxcbiAgICAvLyBpY29uOiA8RHJlc3NJY29uIC8+LFxuICAgIGludGxJZDogJ25hdldvbWVuTWVudScsXG4gIH0sXG4gIHtcbiAgICBsaW5rOiBLSURTLFxuICAgIGxhYmVsOiAnS2lkcycsXG4gICAgLy8gaWNvbjogPERyZXNzSWNvbiAvPixcbiAgICBpbnRsSWQ6ICduYXZLaWRzTWVudScsXG4gIH0sXG5dO1xuXG5jb25zdCBDYXRlZ29yeU1lbnVXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgLm1lbnUtaXRlbXtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgYmFja2dyb3VuZDogI0ZGRjtcbiAgICBcbiAgICBhIHtcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICBjb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLmRhcmtCb2xkJywgJyMwRDExMzYnKX07XG4gICAgICBsaW5lLWhlaWdodDogMS4yZW07XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHBhZGRpbmc6IDE1cHggMzBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgIHRyYW5zaXRpb246IDAuMTVzIGVhc2UtaW4tb3V0O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogMTQwMHB4KSB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MXB4KSBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gICAgICAgIHBhZGRpbmc6IDE1cHggMzBweDtcbiAgICAgIH1cblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMucHJpbWFyeScsICcjMDA5RTdGJyl9O1xuICAgICAgfVxuICAgICAgJi5jdXJyZW50LXBhZ2Uge1xuICAgICAgICBjb2xvcjogJHt0aGVtZUdldCgnY29sb3JzLnByaW1hcnknLCAnIzAwOUU3RicpfTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbmBcbmNvbnN0IENhdGVnb3J5TWVudSA9ICh7IG9uQ2xpY2sgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxDYXRlZ29yeU1lbnVXcmFwcGVyPlxuICAgICAge01FTlVfSVRFTVMubWFwKChpdGVtKSA9PiAoXG4gICAgICAgIDxOYXZMaW5rXG4gICAgICAgICAga2V5PXtpdGVtLmxpbmt9XG4gICAgICAgICAgb25DbGljaz17KCkgPT4gb25DbGljayhpdGVtKX1cbiAgICAgICAgICBjbGFzc05hbWU9J21lbnUtaXRlbSdcbiAgICAgICAgICBocmVmPXtpdGVtLmxpbmt9XG4gICAgICAgICAgbGFiZWw9e2l0ZW0ubGFiZWx9XG4gICAgICAgICAgLy8gaWNvbj17aXRlbS5pY29ufVxuICAgICAgICAgIGljb25DbGFzcz0nbWVudS1pdGVtLWljb24nXG4gICAgICAgICAgaW50bElkPXtpdGVtLmludGxJZH1cbiAgICAgICAgLz5cbiAgICAgICkpfVxuICAgIDwvQ2F0ZWdvcnlNZW51V3JhcHBlcj5cbiAgKTtcbn07XG5cbnR5cGUgUHJvcHMgPSB7XG4gIGxvZ286IHN0cmluZztcbn07XG5cbmV4cG9ydCBjb25zdCBMZWZ0TWVudTogUmVhY3QuRkM8UHJvcHM+ID0gKHsgbG9nbyB9KSA9PiB7XG4gIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBpbml0aWFsTWVudSA9IE1FTlVfSVRFTVMuZmluZCgoaXRlbSkgPT4gaXRlbS5saW5rID09PSBwYXRobmFtZSk7XG4gIGNvbnN0IFthY3RpdmVNZW51LCBzZXRBY3RpdmVNZW51XSA9IFJlYWN0LnVzZVN0YXRlKFxuICAgIGluaXRpYWxNZW51ID8/IE1FTlVfSVRFTVNbMF1cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxMZWZ0TWVudUJveD5cbiAgICAgIDxMb2dvXG4gICAgICAgIGltYWdlVXJsPXtsb2dvfVxuICAgICAgICBhbHQ9eydTaG9wIExvZ28nfVxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmVNZW51KE1FTlVfSVRFTVNbMF0pfVxuICAgICAgLz5cblxuICAgICAgPE1haW5NZW51PlxuICAgICAgICB7LyogPFBvcG92ZXJcbiAgICAgICAgICBjbGFzc05hbWU9J3JpZ2h0J1xuICAgICAgICAgIGhhbmRsZXI9e1xuICAgICAgICAgICAgPFNlbGVjdGVkSXRlbT5cbiAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgPEljb24+e2FjdGl2ZU1lbnU/Lmljb259PC9JY29uPlxuICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2VcbiAgICAgICAgICAgICAgICAgICAgaWQ9e2FjdGl2ZU1lbnU/LmludGxJZH1cbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdE1lc3NhZ2U9e2FjdGl2ZU1lbnU/LmxhYmVsfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPEFycm93PlxuICAgICAgICAgICAgICAgIDxNZW51RG93biAvPlxuICAgICAgICAgICAgICA8L0Fycm93PlxuICAgICAgICAgICAgPC9TZWxlY3RlZEl0ZW0+XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnRlbnQ9ezxDYXRlZ29yeU1lbnUgb25DbGljaz17c2V0QWN0aXZlTWVudX0gLz59XG4gICAgICAgIC8+ICovfVxuICAgICAgICA8Q2F0ZWdvcnlNZW51IG9uQ2xpY2s9eygpPT57fX0vPlxuICAgICAgPC9NYWluTWVudT5cbiAgICA8L0xlZnRNZW51Qm94PlxuICApO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./containers/LayoutContainer/Header/Menu/LeftMenu/LeftMenu.tsx\n");

/***/ })

})