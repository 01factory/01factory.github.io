webpackHotUpdate_N_E("pages/codes/2021/05/28/0911",{

/***/ "./src/pages/codes/2021/05/28/0911.md":
/*!********************************************!*\
  !*** ./src/pages/codes/2021/05/28/0911.md ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MDXContent; });\n/* harmony import */ var _home_taoqf_work_github_01factory_01factory_github_io_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _home_taoqf_work_github_01factory_01factory_github_io_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mdx-js/react */ \"./node_modules/@mdx-js/react/dist/esm.js\");\n/* harmony import */ var _components_coder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../components/coder */ \"./src/components/coder.tsx\");\n/* harmony import */ var _components_playground__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../components/playground */ \"./src/components/playground.tsx\");\n\n\nvar _jsxFileName = \"/home/taoqf/work/github/01factory/01factory.github.io/src/pages/codes/2021/05/28/0911.md\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_home_taoqf_work_github_01factory_01factory_github_io_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n/* @jsxRuntime classic */\n\n/* @jsx mdx */\n\n\n\n\nvar layoutProps = {};\nvar MDXLayout = \"wrapper\";\nfunction MDXContent(_ref) {\n  var components = _ref.components,\n      props = Object(_home_taoqf_work_github_01factory_01factory_github_io_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref, [\"components\"]);\n\n  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(MDXLayout, _objectSpread(_objectSpread(_objectSpread({}, layoutProps), props), {}, {\n    components: components,\n    mdxType: \"MDXLayout\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 10\n    }\n  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(\"h1\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 5\n    }\n  }, \"\\u6570\\u5B57\\u8F6C2\\u4F4D\\u6570\\u5B57\\u6587\\u672C\"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(_components_coder__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    lan: \"ts\",\n    code: \"\\nexport default function num2str(n: number) {\\n\\tconst f = Math.round(n * 100) / 100;\\n\\tlet s = f.toString();\\n\\tconst rs = s.indexOf('.');\\n\\tif (rs < 0) {\\n\\t\\treturn `${s}.00`;\\n\\t}\\n\\twhile (s.length <= rs + 2) {\\n\\t\\ts += '0';\\n\\t}\\n\\treturn s;\\n}\\n\",\n    mdxType: \"CodeEditor\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 5\n    }\n  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__[\"mdx\"])(_components_playground__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    scope: {\n      useState: react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"]\n    },\n    code: \"\\n()=>{\\nconst [str, setstr] = useState('0.0');\\nfunction num2str(n) {\\n\\tconst f = Math.round(n * 100) / 100;\\n\\tlet s = f.toString();\\n\\tconst rs = s.indexOf('.');\\n\\tif (rs < 0) {\\n\\t\\treturn `${s}.00`;\\n\\t}\\n\\twhile (s.length <= rs + 2) {\\n\\t\\ts += '0';\\n\\t}\\n\\treturn s;\\n}\\nreturn <>\\n\\t<div>\\n\\t\\t<span>type number:</span> <input type='number' max='100.00' min={-2.99} onChange={(e)=>{\\n\\tconst val = Number(e.target.value);\\n\\tsetstr(num2str(val));\\n}} />\\n\\t</div>\\n\\t<div>\\n\\t\\t<h3>${str}</h3>\\n\\t</div>\\n</>;\\n}\\n\",\n    mdxType: \"PlayGround\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 5\n    }\n  }));\n}\n_c = MDXContent;\n;\nMDXContent.isMDXComponent = true;\n\nvar _c;\n\n$RefreshReg$(_c, \"MDXContent\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2NvZGVzLzIwMjEvMDUvMjgvMDkxMS5tZD9iZjlmIl0sIm5hbWVzIjpbImxheW91dFByb3BzIiwiTURYTGF5b3V0IiwiTURYQ29udGVudCIsImNvbXBvbmVudHMiLCJwcm9wcyIsInVzZVN0YXRlIiwiaXNNRFhDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUVBOztBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUdBLElBQU1BLFdBQVcsR0FBRyxFQUFwQjtBQUdBLElBQU1DLFNBQVMsR0FBRyxTQUFsQjtBQUNlLFNBQVNDLFVBQVQsT0FHWjtBQUFBLE1BRkRDLFVBRUMsUUFGREEsVUFFQztBQUFBLE1BREVDLEtBQ0Y7O0FBQ0QsU0FBTywwREFBQyxTQUFELGdEQUFlSixXQUFmLEdBQWdDSSxLQUFoQztBQUF1QyxjQUFVLEVBQUVELFVBQW5EO0FBQStELFdBQU8sRUFBQyxXQUF2RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRUw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5REFGSyxFQUdMLDBEQUFDLHlEQUFEO0FBQVksT0FBRyxFQUFDLElBQWhCO0FBQXFCLFFBQUksb1FBQXpCO0FBYUQsV0FBTyxFQUFDLFlBYlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhLLEVBaUJMLDBEQUFDLDhEQUFEO0FBQVksU0FBSyxFQUFFO0FBQ2pCRSxjQUFRLEVBQVJBLDhDQUFRQTtBQURTLEtBQW5CO0FBRUcsUUFBSSxnaEJBRlA7QUE2QkQsV0FBTyxFQUFDLFlBN0JQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFqQkssQ0FBUDtBQWdERDtLQXBEdUJILFU7QUFzRHhCO0FBQ0FBLFVBQVUsQ0FBQ0ksY0FBWCxHQUE0QixJQUE1QiIsImZpbGUiOiIuL3NyYy9wYWdlcy9jb2Rlcy8yMDIxLzA1LzI4LzA5MTEubWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IG1keCB9IGZyb20gJ0BtZHgtanMvcmVhY3QnXG5cbi8qIEBqc3hSdW50aW1lIGNsYXNzaWMgKi9cbi8qIEBqc3ggbWR4ICovXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDb2RlRWRpdG9yIGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvY29kZXInO1xuaW1wb3J0IFBsYXlHcm91bmQgZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tcG9uZW50cy9wbGF5Z3JvdW5kJztcblxuXG5jb25zdCBsYXlvdXRQcm9wcyA9IHtcbiAgXG59O1xuY29uc3QgTURYTGF5b3V0ID0gXCJ3cmFwcGVyXCJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1EWENvbnRlbnQoe1xuICBjb21wb25lbnRzLFxuICAuLi5wcm9wc1xufSkge1xuICByZXR1cm4gPE1EWExheW91dCB7Li4ubGF5b3V0UHJvcHN9IHsuLi5wcm9wc30gY29tcG9uZW50cz17Y29tcG9uZW50c30gbWR4VHlwZT1cIk1EWExheW91dFwiPlxuXG4gICAgPGgxPntg5pWw5a2X6L2sMuS9jeaVsOWtl+aWh+acrGB9PC9oMT5cbiAgICA8Q29kZUVkaXRvciBsYW49J3RzJyBjb2RlPXtgXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBudW0yc3RyKG46IG51bWJlcikge1xuXHRjb25zdCBmID0gTWF0aC5yb3VuZChuICogMTAwKSAvIDEwMDtcblx0bGV0IHMgPSBmLnRvU3RyaW5nKCk7XG5cdGNvbnN0IHJzID0gcy5pbmRleE9mKCcuJyk7XG5cdGlmIChycyA8IDApIHtcblx0XHRyZXR1cm4gXFxgXFwke3N9LjAwXFxgO1xuXHR9XG5cdHdoaWxlIChzLmxlbmd0aCA8PSBycyArIDIpIHtcblx0XHRzICs9ICcwJztcblx0fVxuXHRyZXR1cm4gcztcbn1cbmB9IG1keFR5cGU9XCJDb2RlRWRpdG9yXCIgLz5cbiAgICA8UGxheUdyb3VuZCBzY29wZT17e1xuICAgICAgdXNlU3RhdGVcbiAgICB9fSBjb2RlPXtgXG4oKT0+e1xuY29uc3QgW3N0ciwgc2V0c3RyXSA9IHVzZVN0YXRlKCcwLjAnKTtcbmZ1bmN0aW9uIG51bTJzdHIobikge1xuXHRjb25zdCBmID0gTWF0aC5yb3VuZChuICogMTAwKSAvIDEwMDtcblx0bGV0IHMgPSBmLnRvU3RyaW5nKCk7XG5cdGNvbnN0IHJzID0gcy5pbmRleE9mKCcuJyk7XG5cdGlmIChycyA8IDApIHtcblx0XHRyZXR1cm4gXFxgXFwke3N9LjAwXFxgO1xuXHR9XG5cdHdoaWxlIChzLmxlbmd0aCA8PSBycyArIDIpIHtcblx0XHRzICs9ICcwJztcblx0fVxuXHRyZXR1cm4gcztcbn1cbnJldHVybiA8PlxuXHQ8ZGl2PlxuXHRcdDxzcGFuPnR5cGUgbnVtYmVyOjwvc3Bhbj4gPGlucHV0IHR5cGU9J251bWJlcicgbWF4PScxMDAuMDAnIG1pbj17LTIuOTl9IG9uQ2hhbmdlPXsoZSk9Pntcblx0Y29uc3QgdmFsID0gTnVtYmVyKGUudGFyZ2V0LnZhbHVlKTtcblx0c2V0c3RyKG51bTJzdHIodmFsKSk7XG59fSAvPlxuXHQ8L2Rpdj5cblx0PGRpdj5cblx0XHQ8aDM+XFwke3N0cn08L2gzPlxuXHQ8L2Rpdj5cbjwvPjtcbn1cbmB9IG1keFR5cGU9XCJQbGF5R3JvdW5kXCIgLz5cbiAgICA8L01EWExheW91dD47XG59XG5cbjtcbk1EWENvbnRlbnQuaXNNRFhDb21wb25lbnQgPSB0cnVlOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/codes/2021/05/28/0911.md\n");

/***/ })

})