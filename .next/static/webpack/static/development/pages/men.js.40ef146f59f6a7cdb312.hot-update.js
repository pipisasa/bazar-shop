webpackHotUpdate("static/development/pages/men.js",{

/***/ "./graphql/query/product.query.ts":
/*!****************************************!*\
  !*** ./graphql/query/product.query.ts ***!
  \****************************************/
/*! exports provided: GET_PRODUCT_WITH_RELATED_PRODUCTS, GET_RELATED_PRODUCTS, GET_PRODUCT, GET_PRODUCT_DETAILS, GET_PRODUCTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GET_PRODUCT_WITH_RELATED_PRODUCTS\", function() { return GET_PRODUCT_WITH_RELATED_PRODUCTS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GET_RELATED_PRODUCTS\", function() { return GET_RELATED_PRODUCTS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GET_PRODUCT\", function() { return GET_PRODUCT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GET_PRODUCT_DETAILS\", function() { return GET_PRODUCT_DETAILS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GET_PRODUCTS\", function() { return GET_PRODUCTS; });\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-tag */ \"./node_modules/graphql-tag/src/index.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction _templateObject5() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  query {\\n    products{\\n      hasMore\\n      total\\n      items{\\n        id\\n        slug\\n        title\\n        description\\n        Type{\\n          id\\n          title\\n          slug\\n        }\\n        category{\\n          id\\n          title\\n          slug\\n          parent{\\n            id\\n            title\\n            slug\\n          }\\n        }\\n        unit\\n        image\\n        price\\n        salePrice\\n        discountPercent\\n        createdAt\\n        images{\\n          image\\n        }\\n      }\\n    }\\n  }\\n\"]);\n\n  _templateObject5 = function _templateObject5() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject4() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  query getProduct($slug: String!){\\n    productSolo(slug:$slug){\\n      id\\n      title\\n      slug\\n      description\\n      Type\\n      category{\\n        id\\n        title\\n        slug\\n        parent{\\n          id\\n          title\\n          slug\\n        }\\n      }\\n      unit\\n      image\\n      price\\n      salePrice\\n      discountPercent\\n      createdAt\\n      images{\\n        image\\n      }\\n    }\\n  }\\n\"]);\n\n  _templateObject4 = function _templateObject4() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject3() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  query getProduct($slug: String!) {\\n    product(slug: $slug) {\\n      id\\n      title\\n      weight\\n      slug\\n      price\\n      discountInPercent\\n      type\\n      gallery {\\n        url\\n      }\\n      image\\n      categories {\\n        id\\n        slug\\n        title\\n      }\\n    }\\n  }\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  query getRelatedProducts($type: String!, $slug: String!) {\\n    relatedProducts(type: $type, slug: $slug) {\\n      id\\n      title\\n      slug\\n      weight\\n      price\\n      type\\n      image\\n    }\\n  }\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  query getProductWithRelatedProducts($slug: String!, $type: String!) {\\n    product(slug: $slug) {\\n      id\\n      title\\n      weight\\n      slug\\n      price\\n      type\\n      image\\n      categories {\\n        id\\n        slug\\n        title\\n      }\\n    }\\n    relatedProducts(slug: $slug, type: $type) {\\n      id\\n      title\\n      slug\\n      weight\\n      price\\n      type\\n      image\\n    }\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\nvar GET_PRODUCT_WITH_RELATED_PRODUCTS = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject());\nvar GET_RELATED_PRODUCTS = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject2());\nvar GET_PRODUCT = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject3());\nvar GET_PRODUCT_DETAILS = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject4());\nvar GET_PRODUCTS = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject5());\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ncmFwaHFsL3F1ZXJ5L3Byb2R1Y3QucXVlcnkudHM/NDIwMyJdLCJuYW1lcyI6WyJHRVRfUFJPRFVDVF9XSVRIX1JFTEFURURfUFJPRFVDVFMiLCJncWwiLCJHRVRfUkVMQVRFRF9QUk9EVUNUUyIsIkdFVF9QUk9EVUNUIiwiR0VUX1BST0RVQ1RfREVUQUlMUyIsIkdFVF9QUk9EVUNUUyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRU8sSUFBTUEsaUNBQWlDLEdBQUdDLGtEQUFILG1CQUF2QztBQTRCQSxJQUFNQyxvQkFBb0IsR0FBR0Qsa0RBQUgsb0JBQTFCO0FBY0EsSUFBTUUsV0FBVyxHQUFHRixrREFBSCxvQkFBakI7QUFzQkEsSUFBTUcsbUJBQW1CLEdBQUdILGtEQUFILG9CQUF6QjtBQThCQSxJQUFNSSxZQUFZLEdBQUdKLGtEQUFILG9CQUFsQiIsImZpbGUiOiIuL2dyYXBocWwvcXVlcnkvcHJvZHVjdC5xdWVyeS50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xuXG5leHBvcnQgY29uc3QgR0VUX1BST0RVQ1RfV0lUSF9SRUxBVEVEX1BST0RVQ1RTID0gZ3FsYFxuICBxdWVyeSBnZXRQcm9kdWN0V2l0aFJlbGF0ZWRQcm9kdWN0cygkc2x1ZzogU3RyaW5nISwgJHR5cGU6IFN0cmluZyEpIHtcbiAgICBwcm9kdWN0KHNsdWc6ICRzbHVnKSB7XG4gICAgICBpZFxuICAgICAgdGl0bGVcbiAgICAgIHdlaWdodFxuICAgICAgc2x1Z1xuICAgICAgcHJpY2VcbiAgICAgIHR5cGVcbiAgICAgIGltYWdlXG4gICAgICBjYXRlZ29yaWVzIHtcbiAgICAgICAgaWRcbiAgICAgICAgc2x1Z1xuICAgICAgICB0aXRsZVxuICAgICAgfVxuICAgIH1cbiAgICByZWxhdGVkUHJvZHVjdHMoc2x1ZzogJHNsdWcsIHR5cGU6ICR0eXBlKSB7XG4gICAgICBpZFxuICAgICAgdGl0bGVcbiAgICAgIHNsdWdcbiAgICAgIHdlaWdodFxuICAgICAgcHJpY2VcbiAgICAgIHR5cGVcbiAgICAgIGltYWdlXG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgR0VUX1JFTEFURURfUFJPRFVDVFMgPSBncWxgXG4gIHF1ZXJ5IGdldFJlbGF0ZWRQcm9kdWN0cygkdHlwZTogU3RyaW5nISwgJHNsdWc6IFN0cmluZyEpIHtcbiAgICByZWxhdGVkUHJvZHVjdHModHlwZTogJHR5cGUsIHNsdWc6ICRzbHVnKSB7XG4gICAgICBpZFxuICAgICAgdGl0bGVcbiAgICAgIHNsdWdcbiAgICAgIHdlaWdodFxuICAgICAgcHJpY2VcbiAgICAgIHR5cGVcbiAgICAgIGltYWdlXG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgR0VUX1BST0RVQ1QgPSBncWxgXG4gIHF1ZXJ5IGdldFByb2R1Y3QoJHNsdWc6IFN0cmluZyEpIHtcbiAgICBwcm9kdWN0KHNsdWc6ICRzbHVnKSB7XG4gICAgICBpZFxuICAgICAgdGl0bGVcbiAgICAgIHdlaWdodFxuICAgICAgc2x1Z1xuICAgICAgcHJpY2VcbiAgICAgIGRpc2NvdW50SW5QZXJjZW50XG4gICAgICB0eXBlXG4gICAgICBnYWxsZXJ5IHtcbiAgICAgICAgdXJsXG4gICAgICB9XG4gICAgICBpbWFnZVxuICAgICAgY2F0ZWdvcmllcyB7XG4gICAgICAgIGlkXG4gICAgICAgIHNsdWdcbiAgICAgICAgdGl0bGVcbiAgICAgIH1cbiAgICB9XG4gIH1cbmA7XG5leHBvcnQgY29uc3QgR0VUX1BST0RVQ1RfREVUQUlMUyA9IGdxbGBcbiAgcXVlcnkgZ2V0UHJvZHVjdCgkc2x1ZzogU3RyaW5nISl7XG4gICAgcHJvZHVjdFNvbG8oc2x1Zzokc2x1Zyl7XG4gICAgICBpZFxuICAgICAgdGl0bGVcbiAgICAgIHNsdWdcbiAgICAgIGRlc2NyaXB0aW9uXG4gICAgICBUeXBlXG4gICAgICBjYXRlZ29yeXtcbiAgICAgICAgaWRcbiAgICAgICAgdGl0bGVcbiAgICAgICAgc2x1Z1xuICAgICAgICBwYXJlbnR7XG4gICAgICAgICAgaWRcbiAgICAgICAgICB0aXRsZVxuICAgICAgICAgIHNsdWdcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdW5pdFxuICAgICAgaW1hZ2VcbiAgICAgIHByaWNlXG4gICAgICBzYWxlUHJpY2VcbiAgICAgIGRpc2NvdW50UGVyY2VudFxuICAgICAgY3JlYXRlZEF0XG4gICAgICBpbWFnZXN7XG4gICAgICAgIGltYWdlXG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuZXhwb3J0IGNvbnN0IEdFVF9QUk9EVUNUUyA9IGdxbGBcbiAgcXVlcnkge1xuICAgIHByb2R1Y3Rze1xuICAgICAgaGFzTW9yZVxuICAgICAgdG90YWxcbiAgICAgIGl0ZW1ze1xuICAgICAgICBpZFxuICAgICAgICBzbHVnXG4gICAgICAgIHRpdGxlXG4gICAgICAgIGRlc2NyaXB0aW9uXG4gICAgICAgIFR5cGV7XG4gICAgICAgICAgaWRcbiAgICAgICAgICB0aXRsZVxuICAgICAgICAgIHNsdWdcbiAgICAgICAgfVxuICAgICAgICBjYXRlZ29yeXtcbiAgICAgICAgICBpZFxuICAgICAgICAgIHRpdGxlXG4gICAgICAgICAgc2x1Z1xuICAgICAgICAgIHBhcmVudHtcbiAgICAgICAgICAgIGlkXG4gICAgICAgICAgICB0aXRsZVxuICAgICAgICAgICAgc2x1Z1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB1bml0XG4gICAgICAgIGltYWdlXG4gICAgICAgIHByaWNlXG4gICAgICAgIHNhbGVQcmljZVxuICAgICAgICBkaXNjb3VudFBlcmNlbnRcbiAgICAgICAgY3JlYXRlZEF0XG4gICAgICAgIGltYWdlc3tcbiAgICAgICAgICBpbWFnZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5gOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./graphql/query/product.query.ts\n");

/***/ })

})