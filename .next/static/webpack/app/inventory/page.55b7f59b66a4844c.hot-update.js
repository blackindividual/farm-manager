"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/inventory/page",{

/***/ "(app-pages-browser)/./app/inventory/components/client.tsx":
/*!*********************************************!*\
  !*** ./app/inventory/components/client.tsx ***!
  \*********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   InventoryClient: () => (/* binding */ InventoryClient)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _barrel_optimize_names_Plus_lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=Plus!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/plus.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./components/ui/button.tsx\");\n/* harmony import */ var _components_heading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/heading */ \"(app-pages-browser)/./components/heading.tsx\");\n/* harmony import */ var _columns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./columns */ \"(app-pages-browser)/./app/inventory/components/columns.tsx\");\n/* harmony import */ var _components_ui_data_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/ui/data-table */ \"(app-pages-browser)/./components/ui/data-table.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* __next_internal_client_entry_do_not_use__ InventoryClient auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst InventoryClient = ()=>{\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(true);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)({\n        \"InventoryClient.useEffect\": ()=>{\n            const fetchData = {\n                \"InventoryClient.useEffect.fetchData\": async ()=>{\n                    try {\n                        console.log('Fetching from:', '/api/your-endpoint');\n                        const response = await fetch('/api/your-endpoint');\n                        console.log('Response status:', response.status);\n                        if (!response.ok) {\n                            throw new Error(\"HTTP error! status: \".concat(response.status));\n                        }\n                        const data = await response.json();\n                        console.log('Received data:', data);\n                        setData(data);\n                    } catch (error) {\n                        console.error('Detailed fetch error:', error);\n                        setError('Failed to load inventory data');\n                    } finally{\n                        setLoading(false);\n                    }\n                }\n            }[\"InventoryClient.useEffect.fetchData\"];\n            fetchData();\n        }\n    }[\"InventoryClient.useEffect\"], []);\n    if (error) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"error-message\",\n            children: error\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\INDIVIDUAL\\\\farm-manager\\\\app\\\\inventory\\\\components\\\\client.tsx\",\n            lineNumber: 44,\n            columnNumber: 12\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-between\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_heading__WEBPACK_IMPORTED_MODULE_3__.Heading, {\n                        title: \"Inventory (\".concat(data.length, \")\"),\n                        description: \"Manage your farm inventory\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\INDIVIDUAL\\\\farm-manager\\\\app\\\\inventory\\\\components\\\\client.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                        onClick: ()=>router.push(\"/inventory/new\"),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Plus_lucide_react__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                className: \"mr-2 h-4 w-4\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\INDIVIDUAL\\\\farm-manager\\\\app\\\\inventory\\\\components\\\\client.tsx\",\n                                lineNumber: 55,\n                                columnNumber: 11\n                            }, undefined),\n                            \"Add New\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\INDIVIDUAL\\\\farm-manager\\\\app\\\\inventory\\\\components\\\\client.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\INDIVIDUAL\\\\farm-manager\\\\app\\\\inventory\\\\components\\\\client.tsx\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-8\",\n                children: loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: \"Loading...\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\INDIVIDUAL\\\\farm-manager\\\\app\\\\inventory\\\\components\\\\client.tsx\",\n                    lineNumber: 61,\n                    columnNumber: 11\n                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_data_table__WEBPACK_IMPORTED_MODULE_5__.DataTable, {\n                    columns: _columns__WEBPACK_IMPORTED_MODULE_4__.columns,\n                    data: data,\n                    searchKey: \"name\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\INDIVIDUAL\\\\farm-manager\\\\app\\\\inventory\\\\components\\\\client.tsx\",\n                    lineNumber: 63,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\INDIVIDUAL\\\\farm-manager\\\\app\\\\inventory\\\\components\\\\client.tsx\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(InventoryClient, \"VH0hPEeQgGqzb8TOiA1PpPyoSiQ=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = InventoryClient;\nvar _c;\n$RefreshReg$(_c, \"InventoryClient\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports signature on update so we can compare the boundary\r\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\r\n                module.hot.dispose(function (data) {\r\n                    data.prevSignature =\r\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevSignature !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevSignature !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9pbnZlbnRvcnkvY29tcG9uZW50cy9jbGllbnQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUVvQztBQUNRO0FBQ0k7QUFDRDtBQUNNO0FBQ0U7QUFDWDtBQUNsQjtBQUVuQixNQUFNUyxrQkFBa0I7O0lBQzdCLE1BQU1DLFNBQVNULDBEQUFTQTtJQUN4QixNQUFNLENBQUNVLE1BQU1DLFFBQVEsR0FBR04sK0NBQVFBLENBQW9CLEVBQUU7SUFDdEQsTUFBTSxDQUFDTyxTQUFTQyxXQUFXLEdBQUdSLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU0sQ0FBQ1MsT0FBT0MsU0FBUyxHQUFHViwrQ0FBUUEsQ0FBZ0I7SUFFbERDLGdEQUFTQTtxQ0FBQztZQUNSLE1BQU1VO3VEQUFZO29CQUNoQixJQUFJO3dCQUNGQyxRQUFRQyxHQUFHLENBQUMsa0JBQWtCO3dCQUM5QixNQUFNQyxXQUFXLE1BQU1DLE1BQU07d0JBQzdCSCxRQUFRQyxHQUFHLENBQUMsb0JBQW9CQyxTQUFTRSxNQUFNO3dCQUUvQyxJQUFJLENBQUNGLFNBQVNHLEVBQUUsRUFBRTs0QkFDaEIsTUFBTSxJQUFJQyxNQUFNLHVCQUF1QyxPQUFoQkosU0FBU0UsTUFBTTt3QkFDeEQ7d0JBRUEsTUFBTVgsT0FBTyxNQUFNUyxTQUFTSyxJQUFJO3dCQUNoQ1AsUUFBUUMsR0FBRyxDQUFDLGtCQUFrQlI7d0JBQzlCQyxRQUFRRDtvQkFDVixFQUFFLE9BQU9JLE9BQU87d0JBQ2RHLFFBQVFILEtBQUssQ0FBQyx5QkFBeUJBO3dCQUN2Q0MsU0FBUztvQkFDWCxTQUFVO3dCQUNSRixXQUFXO29CQUNiO2dCQUNGOztZQUVBRztRQUNGO29DQUFHLEVBQUU7SUFFTCxJQUFJRixPQUFPO1FBQ1QscUJBQU8sOERBQUNXO1lBQUlDLFdBQVU7c0JBQWlCWjs7Ozs7O0lBQ3pDO0lBRUEscUJBQ0U7OzBCQUNFLDhEQUFDVztnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUN4Qix3REFBT0E7d0JBQ055QixPQUFPLGNBQTBCLE9BQVpqQixLQUFLa0IsTUFBTSxFQUFDO3dCQUNqQ0MsYUFBWTs7Ozs7O2tDQUVkLDhEQUFDNUIseURBQU1BO3dCQUFDNkIsU0FBUyxJQUFNckIsT0FBT3NCLElBQUksQ0FBRTs7MENBQ2xDLDhEQUFDaEMsZ0ZBQUlBO2dDQUFDMkIsV0FBVTs7Ozs7OzRCQUFpQjs7Ozs7Ozs7Ozs7OzswQkFJckMsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNaZCx3QkFDQyw4REFBQ2E7OEJBQUk7Ozs7OzhDQUVMLDhEQUFDckIsZ0VBQVNBO29CQUFDRCxTQUFTQSw2Q0FBT0E7b0JBQUVPLE1BQU1BO29CQUFNc0IsV0FBVTs7Ozs7Ozs7Ozs7OztBQUs3RCxFQUFFO0dBeERXeEI7O1FBQ0lSLHNEQUFTQTs7O0tBRGJRIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXElORElWSURVQUxcXGZhcm0tbWFuYWdlclxcYXBwXFxpbnZlbnRvcnlcXGNvbXBvbmVudHNcXGNsaWVudC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgeyBQbHVzIH0gZnJvbSBcImx1Y2lkZS1yZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvYnV0dG9uXCI7XHJcbmltcG9ydCB7IEhlYWRpbmcgfSBmcm9tIFwiQC9jb21wb25lbnRzL2hlYWRpbmdcIjtcclxuaW1wb3J0IHsgSW52ZW50b3J5Q29sdW1uLCBjb2x1bW5zIH0gZnJvbSBcIi4vY29sdW1uc1wiO1xyXG5pbXBvcnQgeyBEYXRhVGFibGUgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2RhdGEtdGFibGVcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgY29uc3QgSW52ZW50b3J5Q2xpZW50ID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlPEludmVudG9yeUNvbHVtbltdPihbXSk7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnRmV0Y2hpbmcgZnJvbTonLCAnL2FwaS95b3VyLWVuZHBvaW50Jyk7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS95b3VyLWVuZHBvaW50Jyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1Jlc3BvbnNlIHN0YXR1czonLCByZXNwb25zZS5zdGF0dXMpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSFRUUCBlcnJvciEgc3RhdHVzOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnUmVjZWl2ZWQgZGF0YTonLCBkYXRhKTtcclxuICAgICAgICBzZXREYXRhKGRhdGEpO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0RldGFpbGVkIGZldGNoIGVycm9yOicsIGVycm9yKTtcclxuICAgICAgICBzZXRFcnJvcignRmFpbGVkIHRvIGxvYWQgaW52ZW50b3J5IGRhdGEnKTtcclxuICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBmZXRjaERhdGEoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGlmIChlcnJvcikge1xyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiZXJyb3ItbWVzc2FnZVwiPntlcnJvcn08L2Rpdj47XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cclxuICAgICAgICA8SGVhZGluZ1xyXG4gICAgICAgICAgdGl0bGU9e2BJbnZlbnRvcnkgKCR7ZGF0YS5sZW5ndGh9KWB9XHJcbiAgICAgICAgICBkZXNjcmlwdGlvbj1cIk1hbmFnZSB5b3VyIGZhcm0gaW52ZW50b3J5XCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goYC9pbnZlbnRvcnkvbmV3YCl9PlxyXG4gICAgICAgICAgPFBsdXMgY2xhc3NOYW1lPVwibXItMiBoLTQgdy00XCIgLz5cclxuICAgICAgICAgIEFkZCBOZXdcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtOFwiPlxyXG4gICAgICAgIHtsb2FkaW5nID8gKFxyXG4gICAgICAgICAgPGRpdj5Mb2FkaW5nLi4uPC9kaXY+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxEYXRhVGFibGUgY29sdW1ucz17Y29sdW1uc30gZGF0YT17ZGF0YX0gc2VhcmNoS2V5PVwibmFtZVwiIC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59OyJdLCJuYW1lcyI6WyJQbHVzIiwidXNlUm91dGVyIiwiQnV0dG9uIiwiSGVhZGluZyIsImNvbHVtbnMiLCJEYXRhVGFibGUiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlJlYWN0IiwiSW52ZW50b3J5Q2xpZW50Iiwicm91dGVyIiwiZGF0YSIsInNldERhdGEiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImVycm9yIiwic2V0RXJyb3IiLCJmZXRjaERhdGEiLCJjb25zb2xlIiwibG9nIiwicmVzcG9uc2UiLCJmZXRjaCIsInN0YXR1cyIsIm9rIiwiRXJyb3IiLCJqc29uIiwiZGl2IiwiY2xhc3NOYW1lIiwidGl0bGUiLCJsZW5ndGgiLCJkZXNjcmlwdGlvbiIsIm9uQ2xpY2siLCJwdXNoIiwic2VhcmNoS2V5Il0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/inventory/components/client.tsx\n"));

/***/ })

});