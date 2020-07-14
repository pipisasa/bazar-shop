webpackHotUpdate("static/development/pages/kids.js",{

/***/ "./containers/Products/Products.tsx":
/*!******************************************!*\
  !*** ./containers/Products/Products.tsx ***!
  \******************************************/
/*! exports provided: Products, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Products\", function() { return Products; });\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dist/next-server/lib/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _redq_reuse_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @redq/reuse-modal */ \"./node_modules/@redq/reuse-modal/es/index.js\");\n/* harmony import */ var components_ProductCard_ProductCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/ProductCard/ProductCard */ \"./components/ProductCard/ProductCard.tsx\");\n/* harmony import */ var _Products_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Products.style */ \"./containers/Products/Products.style.tsx\");\n/* harmony import */ var helper_constant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! helper/constant */ \"./helper/constant.ts\");\n/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @apollo/react-hooks */ \"./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js\");\n/* harmony import */ var components_Button_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/Button/Button */ \"./components/Button/Button.tsx\");\n/* harmony import */ var components_Loader_Loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/Loader/Loader */ \"./components/Loader/Loader.tsx\");\n/* harmony import */ var components_Placeholder_Placeholder__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! components/Placeholder/Placeholder */ \"./components/Placeholder/Placeholder.tsx\");\n/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-reveal/Fade */ \"./node_modules/react-reveal/Fade.js\");\n/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var components_NoResult_NoResult__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! components/NoResult/NoResult */ \"./components/NoResult/NoResult.tsx\");\n/* harmony import */ var graphql_query_product_query__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! graphql/query/product.query */ \"./graphql/query/product.query.ts\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/pipi/Documents/pr/bazar-shop/containers/Products/Products.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\n\n\n\n\n\n\n\n // import fakeDB from '../../helper/fakeDB';\n\nvar QuickView = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(_c = function _c() {\n  return __webpack_require__.e(/*! import() */ 3).then(__webpack_require__.bind(null, /*! ../QuickView/QuickView */ \"./containers/QuickView/QuickView.tsx\"));\n}, {\n  loadableGenerated: {\n    webpack: function webpack() {\n      return [/*require.resolve*/(/*! ../QuickView/QuickView */ \"./containers/QuickView/QuickView.tsx\")];\n    },\n    modules: ['../QuickView/QuickView']\n  }\n});\n_c2 = QuickView;\nvar Products = function Products(_ref) {\n  _s();\n\n  var deviceType = _ref.deviceType,\n      type = _ref.type,\n      _ref$fetchLimit = _ref.fetchLimit,\n      fetchLimit = _ref$fetchLimit === void 0 ? 8 : _ref$fetchLimit,\n      _ref$loadMore = _ref.loadMore,\n      loadMore = _ref$loadMore === void 0 ? true : _ref$loadMore;\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      loadingMore = _useState[0],\n      toggleLoading = _useState[1];\n\n  var variables = {\n    // Type: type,\n    offset: 0,\n    limit: fetchLimit\n  };\n  if (router.query.text) variables.text = router.query.text;\n  if (router.query.type) variables.Type = router.query.type;\n  if (router.query.category) variables.category = router.query.category;\n\n  var _useQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_8__[\"useQuery\"])(graphql_query_product_query__WEBPACK_IMPORTED_MODULE_14__[\"GET_PRODUCTS\"], {\n    variables: variables\n  }),\n      data = _useQuery.data,\n      error = _useQuery.error,\n      loading = _useQuery.loading,\n      fetchMore = _useQuery.fetchMore; // ------------------------------------------------------------------------------------------\n  // const data = {\n  //   products:{\n  //     hasMore:false,\n  //     items: fakeDB\n  //   },\n  // };\n  // const error = false;\n  // const loading = false;\n  // const fetchMore = (obj)=>{};\n  // ------------------------------------------------------------------------------------------\n  // Quick View Modal\n\n\n  var handleModalClose = function handleModalClose() {\n    var as = router.asPath;\n    router.push(as, as, {\n      shallow: true\n    });\n    Object(_redq_reuse_modal__WEBPACK_IMPORTED_MODULE_4__[\"closeModal\"])();\n  };\n\n  var handleQuickViewModal = function handleQuickViewModal(modalProps, deviceType, onModalClose) {\n    if (router.pathname === '/product/[slug]') {\n      var _as = \"/product/\".concat(modalProps.slug);\n\n      router.push(router.pathname, _as);\n      return;\n    }\n\n    Object(_redq_reuse_modal__WEBPACK_IMPORTED_MODULE_4__[\"openModal\"])({\n      show: true,\n      overlayClassName: 'quick-view-overlay',\n      closeOnClickOutside: false,\n      component: QuickView,\n      componentProps: {\n        modalProps: modalProps,\n        deviceType: deviceType,\n        onModalClose: onModalClose\n      },\n      closeComponent: 'div',\n      config: {\n        enableResizing: false,\n        disableDragging: true,\n        className: 'quick-view-modal',\n        width: 900,\n        y: 30,\n        height: 'auto',\n        transition: {\n          mass: 1,\n          tension: 0,\n          friction: 0\n        }\n      }\n    });\n    var href = router.asPath;\n    var as = \"/product/\".concat(modalProps.slug);\n    router.push(href, as, {\n      shallow: true\n    });\n  };\n\n  if (loading) {\n    return __jsx(_Products_style__WEBPACK_IMPORTED_MODULE_6__[\"LoaderWrapper\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 111,\n        columnNumber: 7\n      }\n    }, __jsx(_Products_style__WEBPACK_IMPORTED_MODULE_6__[\"LoaderItem\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 112,\n        columnNumber: 9\n      }\n    }, __jsx(components_Placeholder_Placeholder__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 113,\n        columnNumber: 11\n      }\n    })), __jsx(_Products_style__WEBPACK_IMPORTED_MODULE_6__[\"LoaderItem\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 115,\n        columnNumber: 9\n      }\n    }, __jsx(components_Placeholder_Placeholder__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 116,\n        columnNumber: 11\n      }\n    })), __jsx(_Products_style__WEBPACK_IMPORTED_MODULE_6__[\"LoaderItem\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 118,\n        columnNumber: 9\n      }\n    }, __jsx(components_Placeholder_Placeholder__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 119,\n        columnNumber: 11\n      }\n    })));\n  }\n\n  if (error) {\n    return __jsx(\"div\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 125,\n        columnNumber: 21\n      }\n    }, error.message);\n  }\n\n  ;\n\n  if (!data || !data.products || data.products.items || data.products.items.length === 0) {\n    return __jsx(components_NoResult_NoResult__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 127,\n        columnNumber: 12\n      }\n    });\n  }\n\n  var handleLoadMore = function handleLoadMore() {\n    toggleLoading(true);\n    fetchMore({\n      variables: {\n        offset: Number(data.products.items.length),\n        limit: fetchLimit\n      },\n      updateQuery: function updateQuery(prev, _ref2) {\n        var fetchMoreResult = _ref2.fetchMoreResult;\n        toggleLoading(false);\n\n        if (!fetchMoreResult) {\n          return prev;\n        }\n\n        return {\n          products: {\n            __typename: prev.products.__typename,\n            items: [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(prev.products.items), Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(fetchMoreResult.products.items)),\n            hasMore: fetchMoreResult.products.hasMore\n          }\n        };\n      }\n    });\n  };\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_Products_style__WEBPACK_IMPORTED_MODULE_6__[\"ProductsRow\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 154,\n      columnNumber: 7\n    }\n  }, data.products.map(function (item, index) {\n    return __jsx(_Products_style__WEBPACK_IMPORTED_MODULE_6__[\"ProductsCol\"], {\n      key: index,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 156,\n        columnNumber: 11\n      }\n    }, function () {\n      item.discountInPercent = item.discountPercent;\n    }(), __jsx(_Products_style__WEBPACK_IMPORTED_MODULE_6__[\"ProductCardWrapper\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 158,\n        columnNumber: 13\n      }\n    }, __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_12___default.a, {\n      duration: 800,\n      delay: index * 10,\n      style: {\n        height: '100%'\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 159,\n        columnNumber: 15\n      }\n    }, __jsx(components_ProductCard_ProductCard__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      title: item.title,\n      description: item.description,\n      image: item.image,\n      weight: item.unit,\n      currency: helper_constant__WEBPACK_IMPORTED_MODULE_7__[\"CURRENCY\"],\n      price: item.price,\n      salePrice: item.salePrice,\n      discountInPercent: item.discountPercent,\n      data: item,\n      deviceType: deviceType,\n      onClick: function onClick() {\n        return handleQuickViewModal(item, deviceType, handleModalClose);\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 164,\n        columnNumber: 17\n      }\n    }))));\n  })), loadMore && data.hasMore && __jsx(_Products_style__WEBPACK_IMPORTED_MODULE_6__[\"ButtonWrapper\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 185,\n      columnNumber: 9\n    }\n  }, __jsx(components_Button_Button__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    onClick: handleLoadMore,\n    title: \"Load More\",\n    intlButtonId: \"loadMoreBtn\",\n    size: \"small\",\n    isLoading: loadingMore,\n    loader: __jsx(components_Loader_Loader__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n      color: \"#009E7F\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 192,\n        columnNumber: 21\n      }\n    }),\n    style: {\n      minWidth: 135,\n      backgroundColor: '#ffffff',\n      border: '1px solid #f1f1f1',\n      color: '#009E7F'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 186,\n      columnNumber: 11\n    }\n  })));\n};\n\n_s(Products, \"ueba3JWNO7pCfJpEXFd18E8kiNE=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"], _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_8__[\"useQuery\"]];\n});\n\n_c3 = Products;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Products);\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"QuickView$dynamic\");\n$RefreshReg$(_c2, \"QuickView\");\n$RefreshReg$(_c3, \"Products\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb250YWluZXJzL1Byb2R1Y3RzL1Byb2R1Y3RzLnRzeD8yZjMxIl0sIm5hbWVzIjpbIlF1aWNrVmlldyIsImR5bmFtaWMiLCJQcm9kdWN0cyIsImRldmljZVR5cGUiLCJ0eXBlIiwiZmV0Y2hMaW1pdCIsImxvYWRNb3JlIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJsb2FkaW5nTW9yZSIsInRvZ2dsZUxvYWRpbmciLCJ2YXJpYWJsZXMiLCJvZmZzZXQiLCJsaW1pdCIsInF1ZXJ5IiwidGV4dCIsIlR5cGUiLCJjYXRlZ29yeSIsInVzZVF1ZXJ5IiwiR0VUX1BST0RVQ1RTIiwiZGF0YSIsImVycm9yIiwibG9hZGluZyIsImZldGNoTW9yZSIsImhhbmRsZU1vZGFsQ2xvc2UiLCJhcyIsImFzUGF0aCIsInB1c2giLCJzaGFsbG93IiwiY2xvc2VNb2RhbCIsImhhbmRsZVF1aWNrVmlld01vZGFsIiwibW9kYWxQcm9wcyIsIm9uTW9kYWxDbG9zZSIsInBhdGhuYW1lIiwic2x1ZyIsIm9wZW5Nb2RhbCIsInNob3ciLCJvdmVybGF5Q2xhc3NOYW1lIiwiY2xvc2VPbkNsaWNrT3V0c2lkZSIsImNvbXBvbmVudCIsImNvbXBvbmVudFByb3BzIiwiY2xvc2VDb21wb25lbnQiLCJjb25maWciLCJlbmFibGVSZXNpemluZyIsImRpc2FibGVEcmFnZ2luZyIsImNsYXNzTmFtZSIsIndpZHRoIiwieSIsImhlaWdodCIsInRyYW5zaXRpb24iLCJtYXNzIiwidGVuc2lvbiIsImZyaWN0aW9uIiwiaHJlZiIsIm1lc3NhZ2UiLCJwcm9kdWN0cyIsIml0ZW1zIiwibGVuZ3RoIiwiaGFuZGxlTG9hZE1vcmUiLCJOdW1iZXIiLCJ1cGRhdGVRdWVyeSIsInByZXYiLCJmZXRjaE1vcmVSZXN1bHQiLCJfX3R5cGVuYW1lIiwiaGFzTW9yZSIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImRpc2NvdW50SW5QZXJjZW50IiwiZGlzY291bnRQZXJjZW50IiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImltYWdlIiwidW5pdCIsIkNVUlJFTkNZIiwicHJpY2UiLCJzYWxlUHJpY2UiLCJtaW5XaWR0aCIsImJhY2tncm91bmRDb2xvciIsImJvcmRlciIsImNvbG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FFQTs7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLG1EQUFPLE1BQUM7QUFBQSxTQUFNLG1KQUFOO0FBQUEsQ0FBRDtBQUFBO0FBQUE7QUFBQSxrQ0FBYyxvRUFBZDtBQUFBO0FBQUEsY0FBYyx3QkFBZDtBQUFBO0FBQUEsRUFBekI7TUFBTUQsUztBQVlDLElBQU1FLFFBQWlDLEdBQUcsU0FBcENBLFFBQW9DLE9BSzNDO0FBQUE7O0FBQUEsTUFKSkMsVUFJSSxRQUpKQSxVQUlJO0FBQUEsTUFISkMsSUFHSSxRQUhKQSxJQUdJO0FBQUEsNkJBRkpDLFVBRUk7QUFBQSxNQUZKQSxVQUVJLGdDQUZTLENBRVQ7QUFBQSwyQkFESkMsUUFDSTtBQUFBLE1BREpBLFFBQ0ksOEJBRE8sSUFDUDtBQUNKLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBREksa0JBRWlDQyxzREFBUSxDQUFDLEtBQUQsQ0FGekM7QUFBQSxNQUVHQyxXQUZIO0FBQUEsTUFFZ0JDLGFBRmhCOztBQUdKLE1BQU1DLFNBQWEsR0FBRztBQUNwQjtBQUNBQyxVQUFNLEVBQUUsQ0FGWTtBQUdwQkMsU0FBSyxFQUFFVDtBQUhhLEdBQXRCO0FBS0EsTUFBR0UsTUFBTSxDQUFDUSxLQUFQLENBQWFDLElBQWhCLEVBQXFCSixTQUFTLENBQUNJLElBQVYsR0FBaUJULE1BQU0sQ0FBQ1EsS0FBUCxDQUFhQyxJQUE5QjtBQUNyQixNQUFHVCxNQUFNLENBQUNRLEtBQVAsQ0FBYVgsSUFBaEIsRUFBcUJRLFNBQVMsQ0FBQ0ssSUFBVixHQUFpQlYsTUFBTSxDQUFDUSxLQUFQLENBQWFYLElBQTlCO0FBQ3JCLE1BQUdHLE1BQU0sQ0FBQ1EsS0FBUCxDQUFhRyxRQUFoQixFQUF5Qk4sU0FBUyxDQUFDTSxRQUFWLEdBQXFCWCxNQUFNLENBQUNRLEtBQVAsQ0FBYUcsUUFBbEM7O0FBVnJCLGtCQVdzQ0Msb0VBQVEsQ0FBQ0MseUVBQUQsRUFBZTtBQUMvRFIsYUFBUyxFQUFUQTtBQUQrRCxHQUFmLENBWDlDO0FBQUEsTUFXRVMsSUFYRixhQVdFQSxJQVhGO0FBQUEsTUFXUUMsS0FYUixhQVdRQSxLQVhSO0FBQUEsTUFXZUMsT0FYZixhQVdlQSxPQVhmO0FBQUEsTUFXd0JDLFNBWHhCLGFBV3dCQSxTQVh4QixFQWNOO0FBQ0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Y7QUFDRTs7O0FBQ0EsTUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixHQUFNO0FBQzdCLFFBQU1DLEVBQUUsR0FBR25CLE1BQU0sQ0FBQ29CLE1BQWxCO0FBQ0FwQixVQUFNLENBQUNxQixJQUFQLENBQVlGLEVBQVosRUFBZ0JBLEVBQWhCLEVBQW9CO0FBQUVHLGFBQU8sRUFBRTtBQUFYLEtBQXBCO0FBQ0FDLHdFQUFVO0FBQ1gsR0FKRDs7QUFNQSxNQUFNQyxvQkFBb0IsR0FBRyxTQUF2QkEsb0JBQXVCLENBQzNCQyxVQUQyQixFQUUzQjdCLFVBRjJCLEVBRzNCOEIsWUFIMkIsRUFJeEI7QUFDSCxRQUFJMUIsTUFBTSxDQUFDMkIsUUFBUCxLQUFvQixpQkFBeEIsRUFBMkM7QUFDekMsVUFBTVIsR0FBRSxzQkFBZU0sVUFBVSxDQUFDRyxJQUExQixDQUFSOztBQUNBNUIsWUFBTSxDQUFDcUIsSUFBUCxDQUFZckIsTUFBTSxDQUFDMkIsUUFBbkIsRUFBNkJSLEdBQTdCO0FBQ0E7QUFDRDs7QUFDRFUsdUVBQVMsQ0FBQztBQUNSQyxVQUFJLEVBQUUsSUFERTtBQUVSQyxzQkFBZ0IsRUFBRSxvQkFGVjtBQUdSQyx5QkFBbUIsRUFBRSxLQUhiO0FBSVJDLGVBQVMsRUFBRXhDLFNBSkg7QUFLUnlDLG9CQUFjLEVBQUU7QUFBRVQsa0JBQVUsRUFBVkEsVUFBRjtBQUFjN0Isa0JBQVUsRUFBVkEsVUFBZDtBQUEwQjhCLG9CQUFZLEVBQVpBO0FBQTFCLE9BTFI7QUFNUlMsb0JBQWMsRUFBRSxLQU5SO0FBT1JDLFlBQU0sRUFBRTtBQUNOQyxzQkFBYyxFQUFFLEtBRFY7QUFFTkMsdUJBQWUsRUFBRSxJQUZYO0FBR05DLGlCQUFTLEVBQUUsa0JBSEw7QUFJTkMsYUFBSyxFQUFFLEdBSkQ7QUFLTkMsU0FBQyxFQUFFLEVBTEc7QUFNTkMsY0FBTSxFQUFFLE1BTkY7QUFPTkMsa0JBQVUsRUFBRTtBQUNWQyxjQUFJLEVBQUUsQ0FESTtBQUVWQyxpQkFBTyxFQUFFLENBRkM7QUFHVkMsa0JBQVEsRUFBRTtBQUhBO0FBUE47QUFQQSxLQUFELENBQVQ7QUFxQkEsUUFBTUMsSUFBSSxHQUFHL0MsTUFBTSxDQUFDb0IsTUFBcEI7QUFDQSxRQUFNRCxFQUFFLHNCQUFlTSxVQUFVLENBQUNHLElBQTFCLENBQVI7QUFDQTVCLFVBQU0sQ0FBQ3FCLElBQVAsQ0FBWTBCLElBQVosRUFBa0I1QixFQUFsQixFQUFzQjtBQUFFRyxhQUFPLEVBQUU7QUFBWCxLQUF0QjtBQUNELEdBbENEOztBQW9DQSxNQUFJTixPQUFKLEVBQWE7QUFDWCxXQUNFLE1BQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsMkVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLENBREYsRUFJRSxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLDJFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixDQUpGLEVBT0UsTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQywyRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsQ0FQRixDQURGO0FBYUQ7O0FBRUQsTUFBSUQsS0FBSixFQUFVO0FBQUMsV0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQU1BLEtBQUssQ0FBQ2lDLE9BQVosQ0FBUDtBQUFrQzs7QUFBQTs7QUFDN0MsTUFBSSxDQUFDbEMsSUFBRCxJQUFTLENBQUNBLElBQUksQ0FBQ21DLFFBQWYsSUFBMkJuQyxJQUFJLENBQUNtQyxRQUFMLENBQWNDLEtBQXpDLElBQWtEcEMsSUFBSSxDQUFDbUMsUUFBTCxDQUFjQyxLQUFkLENBQW9CQyxNQUFwQixLQUErQixDQUFyRixFQUF3RjtBQUN0RixXQUFPLE1BQUMscUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUFQO0FBQ0Q7O0FBQ0QsTUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixHQUFNO0FBQzNCaEQsaUJBQWEsQ0FBQyxJQUFELENBQWI7QUFDQWEsYUFBUyxDQUFDO0FBQ1JaLGVBQVMsRUFBRTtBQUNUQyxjQUFNLEVBQUUrQyxNQUFNLENBQUN2QyxJQUFJLENBQUNtQyxRQUFMLENBQWNDLEtBQWQsQ0FBb0JDLE1BQXJCLENBREw7QUFFVDVDLGFBQUssRUFBRVQ7QUFGRSxPQURIO0FBS1J3RCxpQkFBVyxFQUFFLHFCQUFDQyxJQUFELFNBQStCO0FBQUEsWUFBdEJDLGVBQXNCLFNBQXRCQSxlQUFzQjtBQUMxQ3BELHFCQUFhLENBQUMsS0FBRCxDQUFiOztBQUNBLFlBQUksQ0FBQ29ELGVBQUwsRUFBc0I7QUFDcEIsaUJBQU9ELElBQVA7QUFDRDs7QUFDRCxlQUFPO0FBQ0xOLGtCQUFRLEVBQUU7QUFDUlEsc0JBQVUsRUFBRUYsSUFBSSxDQUFDTixRQUFMLENBQWNRLFVBRGxCO0FBRVJQLGlCQUFLLHlHQUFNSyxJQUFJLENBQUNOLFFBQUwsQ0FBY0MsS0FBcEIsZ0dBQThCTSxlQUFlLENBQUNQLFFBQWhCLENBQXlCQyxLQUF2RCxFQUZHO0FBR1JRLG1CQUFPLEVBQUVGLGVBQWUsQ0FBQ1AsUUFBaEIsQ0FBeUJTO0FBSDFCO0FBREwsU0FBUDtBQU9EO0FBakJPLEtBQUQsQ0FBVDtBQW1CRCxHQXJCRDs7QUF1QkEsU0FDRSxtRUFDRSxNQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRzVDLElBQUksQ0FBQ21DLFFBQUwsQ0FBY1UsR0FBZCxDQUFrQixVQUFDQyxJQUFELEVBQVlDLEtBQVo7QUFBQSxXQUNqQixNQUFDLDJEQUFEO0FBQWEsU0FBRyxFQUFFQSxLQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0ksWUFBSTtBQUFDRCxVQUFJLENBQUNFLGlCQUFMLEdBQXlCRixJQUFJLENBQUNHLGVBQTlCO0FBQThDLEtBQXBELEVBREgsRUFFRSxNQUFDLGtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLHlEQUFEO0FBQ0UsY0FBUSxFQUFFLEdBRFo7QUFFRSxXQUFLLEVBQUVGLEtBQUssR0FBRyxFQUZqQjtBQUdFLFdBQUssRUFBRTtBQUFFbkIsY0FBTSxFQUFFO0FBQVYsT0FIVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BS0UsTUFBQywwRUFBRDtBQUNFLFdBQUssRUFBRWtCLElBQUksQ0FBQ0ksS0FEZDtBQUVFLGlCQUFXLEVBQUVKLElBQUksQ0FBQ0ssV0FGcEI7QUFHRSxXQUFLLEVBQUVMLElBQUksQ0FBQ00sS0FIZDtBQUlFLFlBQU0sRUFBRU4sSUFBSSxDQUFDTyxJQUpmO0FBS0UsY0FBUSxFQUFFQyx3REFMWjtBQU1FLFdBQUssRUFBRVIsSUFBSSxDQUFDUyxLQU5kO0FBT0UsZUFBUyxFQUFFVCxJQUFJLENBQUNVLFNBUGxCO0FBUUUsdUJBQWlCLEVBQUVWLElBQUksQ0FBQ0csZUFSMUI7QUFTRSxVQUFJLEVBQUVILElBVFI7QUFVRSxnQkFBVSxFQUFFaEUsVUFWZDtBQVdFLGFBQU8sRUFBRTtBQUFBLGVBQ1A0QixvQkFBb0IsQ0FBQ29DLElBQUQsRUFBT2hFLFVBQVAsRUFBbUJzQixnQkFBbkIsQ0FEYjtBQUFBLE9BWFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUxGLENBREYsQ0FGRixDQURpQjtBQUFBLEdBQWxCLENBREgsQ0FERixFQStCR25CLFFBQVEsSUFBSWUsSUFBSSxDQUFDNEMsT0FBakIsSUFDQyxNQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdFQUFEO0FBQ0UsV0FBTyxFQUFFTixjQURYO0FBRUUsU0FBSyxFQUFDLFdBRlI7QUFHRSxnQkFBWSxFQUFDLGFBSGY7QUFJRSxRQUFJLEVBQUMsT0FKUDtBQUtFLGFBQVMsRUFBRWpELFdBTGI7QUFNRSxVQUFNLEVBQUUsTUFBQyxpRUFBRDtBQUFRLFdBQUssRUFBQyxTQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFOVjtBQU9FLFNBQUssRUFBRTtBQUNMb0UsY0FBUSxFQUFFLEdBREw7QUFFTEMscUJBQWUsRUFBRSxTQUZaO0FBR0xDLFlBQU0sRUFBRSxtQkFISDtBQUlMQyxXQUFLLEVBQUU7QUFKRixLQVBUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQWhDSixDQURGO0FBb0RELENBeEtNOztHQUFNL0UsUTtVQU1JTSxxRCxFQVUyQlcsNEQ7OztNQWhCL0JqQixRO0FBeUtFQSx1RUFBZiIsImZpbGUiOiIuL2NvbnRhaW5lcnMvUHJvZHVjdHMvUHJvZHVjdHMudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJztcbmltcG9ydCB7IG9wZW5Nb2RhbCwgY2xvc2VNb2RhbCB9IGZyb20gJ0ByZWRxL3JldXNlLW1vZGFsJztcbmltcG9ydCBQcm9kdWN0Q2FyZCBmcm9tICdjb21wb25lbnRzL1Byb2R1Y3RDYXJkL1Byb2R1Y3RDYXJkJztcbmltcG9ydCB7XG4gIFByb2R1Y3RzUm93LFxuICBQcm9kdWN0c0NvbCxcbiAgQnV0dG9uV3JhcHBlcixcbiAgTG9hZGVyV3JhcHBlcixcbiAgTG9hZGVySXRlbSxcbiAgUHJvZHVjdENhcmRXcmFwcGVyLFxufSBmcm9tICcuL1Byb2R1Y3RzLnN0eWxlJztcbmltcG9ydCB7IENVUlJFTkNZIH0gZnJvbSAnaGVscGVyL2NvbnN0YW50JztcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAnQGFwb2xsby9yZWFjdC1ob29rcyc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ2NvbXBvbmVudHMvQnV0dG9uL0J1dHRvbic7XG5pbXBvcnQgTG9hZGVyIGZyb20gJ2NvbXBvbmVudHMvTG9hZGVyL0xvYWRlcic7XG5pbXBvcnQgUGxhY2Vob2xkZXIgZnJvbSAnY29tcG9uZW50cy9QbGFjZWhvbGRlci9QbGFjZWhvbGRlcic7XG5pbXBvcnQgRmFkZSBmcm9tICdyZWFjdC1yZXZlYWwvRmFkZSc7XG5pbXBvcnQgTm9SZXN1bHRGb3VuZCBmcm9tICdjb21wb25lbnRzL05vUmVzdWx0L05vUmVzdWx0JztcbmltcG9ydCB7IEdFVF9QUk9EVUNUUyB9IGZyb20gJ2dyYXBocWwvcXVlcnkvcHJvZHVjdC5xdWVyeSc7XG4vLyBpbXBvcnQgZmFrZURCIGZyb20gJy4uLy4uL2hlbHBlci9mYWtlREInO1xuXG5jb25zdCBRdWlja1ZpZXcgPSBkeW5hbWljKCgpID0+IGltcG9ydCgnLi4vUXVpY2tWaWV3L1F1aWNrVmlldycpKTtcblxudHlwZSBQcm9kdWN0c1Byb3BzID0ge1xuICBkZXZpY2VUeXBlPzoge1xuICAgIG1vYmlsZTogYm9vbGVhbjtcbiAgICB0YWJsZXQ6IGJvb2xlYW47XG4gICAgZGVza3RvcDogYm9vbGVhbjtcbiAgfTtcbiAgdHlwZTogc3RyaW5nO1xuICBmZXRjaExpbWl0PzogbnVtYmVyO1xuICBsb2FkTW9yZT86IGJvb2xlYW47XG59O1xuZXhwb3J0IGNvbnN0IFByb2R1Y3RzOiBSZWFjdC5GQzxQcm9kdWN0c1Byb3BzPiA9ICh7XG4gIGRldmljZVR5cGUsXG4gIHR5cGUsXG4gIGZldGNoTGltaXQgPSA4LFxuICBsb2FkTW9yZSA9IHRydWUsXG59KSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBbbG9hZGluZ01vcmUsIHRvZ2dsZUxvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCB2YXJpYWJsZXM6YW55ID0ge1xuICAgIC8vIFR5cGU6IHR5cGUsXG4gICAgb2Zmc2V0OiAwLFxuICAgIGxpbWl0OiBmZXRjaExpbWl0LFxuICB9XG4gIGlmKHJvdXRlci5xdWVyeS50ZXh0KXZhcmlhYmxlcy50ZXh0ID0gcm91dGVyLnF1ZXJ5LnRleHRcbiAgaWYocm91dGVyLnF1ZXJ5LnR5cGUpdmFyaWFibGVzLlR5cGUgPSByb3V0ZXIucXVlcnkudHlwZVxuICBpZihyb3V0ZXIucXVlcnkuY2F0ZWdvcnkpdmFyaWFibGVzLmNhdGVnb3J5ID0gcm91dGVyLnF1ZXJ5LmNhdGVnb3J5XG4gIGxldCB7IGRhdGEsIGVycm9yLCBsb2FkaW5nLCBmZXRjaE1vcmUgfSA9IHVzZVF1ZXJ5KEdFVF9QUk9EVUNUUywge1xuICAgIHZhcmlhYmxlcyxcbiAgfSk7XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gY29uc3QgZGF0YSA9IHtcbiAgLy8gICBwcm9kdWN0czp7XG4gIC8vICAgICBoYXNNb3JlOmZhbHNlLFxuICAvLyAgICAgaXRlbXM6IGZha2VEQlxuICAvLyAgIH0sXG4gIC8vIH07XG4gIC8vIGNvbnN0IGVycm9yID0gZmFsc2U7XG4gIC8vIGNvbnN0IGxvYWRpbmcgPSBmYWxzZTtcbiAgLy8gY29uc3QgZmV0Y2hNb3JlID0gKG9iaik9Pnt9O1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIFF1aWNrIFZpZXcgTW9kYWxcbiAgY29uc3QgaGFuZGxlTW9kYWxDbG9zZSA9ICgpID0+IHtcbiAgICBjb25zdCBhcyA9IHJvdXRlci5hc1BhdGg7XG4gICAgcm91dGVyLnB1c2goYXMsIGFzLCB7IHNoYWxsb3c6IHRydWUgfSk7XG4gICAgY2xvc2VNb2RhbCgpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVF1aWNrVmlld01vZGFsID0gKFxuICAgIG1vZGFsUHJvcHM6IGFueSxcbiAgICBkZXZpY2VUeXBlOiBhbnksXG4gICAgb25Nb2RhbENsb3NlOiBhbnlcbiAgKSA9PiB7XG4gICAgaWYgKHJvdXRlci5wYXRobmFtZSA9PT0gJy9wcm9kdWN0L1tzbHVnXScpIHtcbiAgICAgIGNvbnN0IGFzID0gYC9wcm9kdWN0LyR7bW9kYWxQcm9wcy5zbHVnfWA7XG4gICAgICByb3V0ZXIucHVzaChyb3V0ZXIucGF0aG5hbWUsIGFzKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgb3Blbk1vZGFsKHtcbiAgICAgIHNob3c6IHRydWUsXG4gICAgICBvdmVybGF5Q2xhc3NOYW1lOiAncXVpY2stdmlldy1vdmVybGF5JyxcbiAgICAgIGNsb3NlT25DbGlja091dHNpZGU6IGZhbHNlLFxuICAgICAgY29tcG9uZW50OiBRdWlja1ZpZXcsXG4gICAgICBjb21wb25lbnRQcm9wczogeyBtb2RhbFByb3BzLCBkZXZpY2VUeXBlLCBvbk1vZGFsQ2xvc2UgfSxcbiAgICAgIGNsb3NlQ29tcG9uZW50OiAnZGl2JyxcbiAgICAgIGNvbmZpZzoge1xuICAgICAgICBlbmFibGVSZXNpemluZzogZmFsc2UsXG4gICAgICAgIGRpc2FibGVEcmFnZ2luZzogdHJ1ZSxcbiAgICAgICAgY2xhc3NOYW1lOiAncXVpY2stdmlldy1tb2RhbCcsXG4gICAgICAgIHdpZHRoOiA5MDAsXG4gICAgICAgIHk6IDMwLFxuICAgICAgICBoZWlnaHQ6ICdhdXRvJyxcbiAgICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICAgIG1hc3M6IDEsXG4gICAgICAgICAgdGVuc2lvbjogMCxcbiAgICAgICAgICBmcmljdGlvbjogMCxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgY29uc3QgaHJlZiA9IHJvdXRlci5hc1BhdGg7XG4gICAgY29uc3QgYXMgPSBgL3Byb2R1Y3QvJHttb2RhbFByb3BzLnNsdWd9YDtcbiAgICByb3V0ZXIucHVzaChocmVmLCBhcywgeyBzaGFsbG93OiB0cnVlIH0pO1xuICB9O1xuXG4gIGlmIChsb2FkaW5nKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxMb2FkZXJXcmFwcGVyPlxuICAgICAgICA8TG9hZGVySXRlbT5cbiAgICAgICAgICA8UGxhY2Vob2xkZXIgLz5cbiAgICAgICAgPC9Mb2FkZXJJdGVtPlxuICAgICAgICA8TG9hZGVySXRlbT5cbiAgICAgICAgICA8UGxhY2Vob2xkZXIgLz5cbiAgICAgICAgPC9Mb2FkZXJJdGVtPlxuICAgICAgICA8TG9hZGVySXRlbT5cbiAgICAgICAgICA8UGxhY2Vob2xkZXIgLz5cbiAgICAgICAgPC9Mb2FkZXJJdGVtPlxuICAgICAgPC9Mb2FkZXJXcmFwcGVyPlxuICAgICk7XG4gIH1cblxuICBpZiAoZXJyb3Ipe3JldHVybiA8ZGl2PntlcnJvci5tZXNzYWdlfTwvZGl2Pn07XG4gIGlmICghZGF0YSB8fCAhZGF0YS5wcm9kdWN0cyB8fCBkYXRhLnByb2R1Y3RzLml0ZW1zIHx8IGRhdGEucHJvZHVjdHMuaXRlbXMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIDxOb1Jlc3VsdEZvdW5kIC8+O1xuICB9XG4gIGNvbnN0IGhhbmRsZUxvYWRNb3JlID0gKCkgPT4ge1xuICAgIHRvZ2dsZUxvYWRpbmcodHJ1ZSk7XG4gICAgZmV0Y2hNb3JlKHtcbiAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICBvZmZzZXQ6IE51bWJlcihkYXRhLnByb2R1Y3RzLml0ZW1zLmxlbmd0aCksXG4gICAgICAgIGxpbWl0OiBmZXRjaExpbWl0LFxuICAgICAgfSxcbiAgICAgIHVwZGF0ZVF1ZXJ5OiAocHJldiwgeyBmZXRjaE1vcmVSZXN1bHQgfSkgPT4ge1xuICAgICAgICB0b2dnbGVMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgaWYgKCFmZXRjaE1vcmVSZXN1bHQpIHtcbiAgICAgICAgICByZXR1cm4gcHJldjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHByb2R1Y3RzOiB7XG4gICAgICAgICAgICBfX3R5cGVuYW1lOiBwcmV2LnByb2R1Y3RzLl9fdHlwZW5hbWUsXG4gICAgICAgICAgICBpdGVtczogWy4uLnByZXYucHJvZHVjdHMuaXRlbXMsIC4uLmZldGNoTW9yZVJlc3VsdC5wcm9kdWN0cy5pdGVtc10sXG4gICAgICAgICAgICBoYXNNb3JlOiBmZXRjaE1vcmVSZXN1bHQucHJvZHVjdHMuaGFzTW9yZSxcbiAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgfSxcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8UHJvZHVjdHNSb3c+XG4gICAgICAgIHtkYXRhLnByb2R1Y3RzLm1hcCgoaXRlbTogYW55LCBpbmRleDogbnVtYmVyKSA9PiAoXG4gICAgICAgICAgPFByb2R1Y3RzQ29sIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgeygoKT0+e2l0ZW0uZGlzY291bnRJblBlcmNlbnQgPSBpdGVtLmRpc2NvdW50UGVyY2VudH0pKCl9XG4gICAgICAgICAgICA8UHJvZHVjdENhcmRXcmFwcGVyPlxuICAgICAgICAgICAgICA8RmFkZVxuICAgICAgICAgICAgICAgIGR1cmF0aW9uPXs4MDB9XG4gICAgICAgICAgICAgICAgZGVsYXk9e2luZGV4ICogMTB9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiAnMTAwJScgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxQcm9kdWN0Q2FyZFxuICAgICAgICAgICAgICAgICAgdGl0bGU9e2l0ZW0udGl0bGV9XG4gICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17aXRlbS5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgIGltYWdlPXtpdGVtLmltYWdlfVxuICAgICAgICAgICAgICAgICAgd2VpZ2h0PXtpdGVtLnVuaXR9XG4gICAgICAgICAgICAgICAgICBjdXJyZW5jeT17Q1VSUkVOQ1l9XG4gICAgICAgICAgICAgICAgICBwcmljZT17aXRlbS5wcmljZX1cbiAgICAgICAgICAgICAgICAgIHNhbGVQcmljZT17aXRlbS5zYWxlUHJpY2V9XG4gICAgICAgICAgICAgICAgICBkaXNjb3VudEluUGVyY2VudD17aXRlbS5kaXNjb3VudFBlcmNlbnR9XG4gICAgICAgICAgICAgICAgICBkYXRhPXtpdGVtfVxuICAgICAgICAgICAgICAgICAgZGV2aWNlVHlwZT17ZGV2aWNlVHlwZX1cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZVF1aWNrVmlld01vZGFsKGl0ZW0sIGRldmljZVR5cGUsIGhhbmRsZU1vZGFsQ2xvc2UpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9GYWRlPlxuICAgICAgICAgICAgPC9Qcm9kdWN0Q2FyZFdyYXBwZXI+XG4gICAgICAgICAgPC9Qcm9kdWN0c0NvbD5cbiAgICAgICAgKSl9XG4gICAgICA8L1Byb2R1Y3RzUm93PlxuICAgICAge2xvYWRNb3JlICYmIGRhdGEuaGFzTW9yZSAmJiAoXG4gICAgICAgIDxCdXR0b25XcmFwcGVyPlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUxvYWRNb3JlfVxuICAgICAgICAgICAgdGl0bGU9XCJMb2FkIE1vcmVcIlxuICAgICAgICAgICAgaW50bEJ1dHRvbklkPVwibG9hZE1vcmVCdG5cIlxuICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgICAgIGlzTG9hZGluZz17bG9hZGluZ01vcmV9XG4gICAgICAgICAgICBsb2FkZXI9ezxMb2FkZXIgY29sb3I9XCIjMDA5RTdGXCIgLz59XG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBtaW5XaWR0aDogMTM1LFxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmZmZmJyxcbiAgICAgICAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkICNmMWYxZjEnLFxuICAgICAgICAgICAgICBjb2xvcjogJyMwMDlFN0YnLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0J1dHRvbldyYXBwZXI+XG4gICAgICApfVxuICAgIDwvPlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./containers/Products/Products.tsx\n");

/***/ })

})