"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/chat",{

/***/ "./src/components/ButtonSendSticker.jsx":
/*!**********************************************!*\
  !*** ./src/components/ButtonSendSticker.jsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ButtonSendSticker; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _skynexui_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @skynexui/components */ \"./node_modules/@skynexui/components/dist/esm/index.js\");\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config.json */ \"./config.json\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _s = $RefreshSig$();\nfunction ButtonSendSticker(param) {\n    var handleAddingMessages = param.handleAddingMessages;\n    var _this = this;\n    _s();\n    var ref = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_1___default().useState(''), 2), isOpen = ref[0], setOpenState = ref[1];\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Box, {\n        styleSheet: {\n            position: 'relative'\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                styleSheet: {\n                    borderRadius: '50%',\n                    padding: '0 3px 0 0',\n                    minWidth: '50px',\n                    minHeight: '50px',\n                    fontSize: '20px',\n                    marginBottom: '8px',\n                    lineHeight: '0',\n                    display: 'flex',\n                    alignItems: 'center',\n                    justifyContent: 'center',\n                    backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[300],\n                    filter: isOpen ? 'grayscale(0)' : 'grayscale(1)',\n                    hover: {\n                        filter: 'grayscale(0)'\n                    }\n                },\n                label: \"😋\",\n                onClick: function() {\n                    return setOpenState(!isOpen);\n                }\n            }, void 0, false, {\n                fileName: \"/home/daniel/MEGA/Meus Projetos React/Aluracord/src/components/ButtonSendSticker.jsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, this),\n            isOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                styleSheet: {\n                    display: 'flex',\n                    flexDirection: 'column',\n                    borderRadius: '5px',\n                    position: 'absolute',\n                    backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[800],\n                    width: {\n                        xs: '200px',\n                        sm: '290px'\n                    },\n                    height: '300px',\n                    right: '30px',\n                    bottom: '30px',\n                    padding: '16px',\n                    boxShadow: 'rgba(4, 4, 5, 0.15) 0px 0px 0px 1px, rgba(0, 0, 0, 0.24) 0px 8px 16px 0px'\n                },\n                onClick: function() {\n                    return setOpenState(false);\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                        styleSheet: {\n                            color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[\"000\"],\n                            fontWeight: 'bold'\n                        },\n                        children: \"Stickers\"\n                    }, void 0, false, {\n                        fileName: \"/home/daniel/MEGA/Meus Projetos React/Aluracord/src/components/ButtonSendSticker.jsx\",\n                        lineNumber: 56,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                        tag: \"ul\",\n                        styleSheet: {\n                            display: 'flex',\n                            flexWrap: 'wrap',\n                            justifyContent: 'space-between',\n                            flex: 1,\n                            paddingTop: '16px',\n                            overflow: 'scroll'\n                        },\n                        children: _config_json__WEBPACK_IMPORTED_MODULE_3__.stickers.map(function(sticker1) {\n                            /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                                onClick: function() {\n                                    var sticker = handleAddingMessages(sticker);\n                                },\n                                tag: \"li\",\n                                styleSheet: {\n                                    width: '50%',\n                                    borderRadius: '5px',\n                                    padding: '10px',\n                                    focus: {\n                                        backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[600]\n                                    },\n                                    hover: {\n                                        backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[600]\n                                    }\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Image, {\n                                    src: sticker1\n                                }, void 0, false, {\n                                    fileName: \"/home/daniel/MEGA/Meus Projetos React/Aluracord/src/components/ButtonSendSticker.jsx\",\n                                    lineNumber: 94,\n                                    columnNumber: 17\n                                }, _this)\n                            }, sticker1, false, {\n                                fileName: \"/home/daniel/MEGA/Meus Projetos React/Aluracord/src/components/ButtonSendSticker.jsx\",\n                                lineNumber: 76,\n                                columnNumber: 15\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/home/daniel/MEGA/Meus Projetos React/Aluracord/src/components/ButtonSendSticker.jsx\",\n                        lineNumber: 64,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/daniel/MEGA/Meus Projetos React/Aluracord/src/components/ButtonSendSticker.jsx\",\n                lineNumber: 37,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/daniel/MEGA/Meus Projetos React/Aluracord/src/components/ButtonSendSticker.jsx\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, this));\n};\n_s(ButtonSendSticker, \"M1dH4yD9ZrZglAXGglbASSKS3GM=\");\n_c = ButtonSendSticker;\nvar _c;\n$RefreshReg$(_c, \"ButtonSendSticker\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9CdXR0b25TZW5kU3RpY2tlci5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQXlCO0FBQ3NDO0FBQ3RCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHMUIsUUFBUSxDQUFDTSxpQkFBaUIsQ0FBQyxLQUF3QixFQUFFLENBQUM7UUFBekJDLG9CQUFvQixHQUF0QixLQUF3QixDQUF0QkEsb0JBQW9COzs7SUFDOUQsR0FBSyxDQUEwQlAsR0FBa0Isa0JBQWxCQSxxREFBYyxDQUFDLENBQUUsUUFBekNTLE1BQU0sR0FBa0JULEdBQWtCLEtBQWxDVSxZQUFZLEdBQUlWLEdBQWtCO0lBRWpELE1BQU0sNkVBQ0hDLHFEQUFHO1FBQ0ZVLFVBQVUsRUFBRSxDQUFDO1lBQ1hDLFFBQVEsRUFBRSxDQUFVO1FBQ3RCLENBQUM7O3dGQUVBVix3REFBTTtnQkFDTFMsVUFBVSxFQUFFLENBQUM7b0JBQ1hFLFlBQVksRUFBRSxDQUFLO29CQUNuQkMsT0FBTyxFQUFFLENBQVc7b0JBQ3BCQyxRQUFRLEVBQUUsQ0FBTTtvQkFDaEJDLFNBQVMsRUFBRSxDQUFNO29CQUNqQkMsUUFBUSxFQUFFLENBQU07b0JBQ2hCQyxZQUFZLEVBQUUsQ0FBSztvQkFDbkJDLFVBQVUsRUFBRSxDQUFHO29CQUNmQyxPQUFPLEVBQUUsQ0FBTTtvQkFDZkMsVUFBVSxFQUFFLENBQVE7b0JBQ3BCQyxjQUFjLEVBQUUsQ0FBUTtvQkFDeEJDLGVBQWUsRUFBRWxCLG9FQUFvQztvQkFDckRzQixNQUFNLEVBQUVsQixNQUFNLEdBQUcsQ0FBYyxnQkFBRyxDQUFjO29CQUNoRG1CLEtBQUssRUFBRSxDQUFDO3dCQUNORCxNQUFNLEVBQUUsQ0FBYztvQkFDeEIsQ0FBQztnQkFDSCxDQUFDO2dCQUNERSxLQUFLLEVBQUMsQ0FBRztnQkFDVEMsT0FBTyxFQUFFLFFBQVE7b0JBQUZwQixNQUFNLENBQU5BLFlBQVksRUFBRUQsTUFBTTs7Ozs7OztZQUVwQ0EsTUFBTSxnRkFDSlIscURBQUc7Z0JBQ0ZVLFVBQVUsRUFBRSxDQUFDO29CQUNYUyxPQUFPLEVBQUUsQ0FBTTtvQkFDZlcsYUFBYSxFQUFFLENBQVE7b0JBQ3ZCbEIsWUFBWSxFQUFFLENBQUs7b0JBQ25CRCxRQUFRLEVBQUUsQ0FBVTtvQkFDcEJXLGVBQWUsRUFBRWxCLG9FQUFvQztvQkFDckQyQixLQUFLLEVBQUUsQ0FBQzt3QkFDTkMsRUFBRSxFQUFFLENBQU87d0JBQ1hDLEVBQUUsRUFBRSxDQUFPO29CQUNiLENBQUM7b0JBQ0RDLE1BQU0sRUFBRSxDQUFPO29CQUNmQyxLQUFLLEVBQUUsQ0FBTTtvQkFDYkMsTUFBTSxFQUFFLENBQU07b0JBQ2R2QixPQUFPLEVBQUUsQ0FBTTtvQkFDZndCLFNBQVMsRUFBRSxDQUEyRTtnQkFDeEYsQ0FBQztnQkFDRFIsT0FBTyxFQUFFLFFBQVE7b0JBQUZwQixNQUFNLENBQU5BLFlBQVksQ0FBQyxLQUFLOzs7Z0dBRWhDUCxzREFBSTt3QkFDSFEsVUFBVSxFQUFFLENBQUM7NEJBQ1g0QixLQUFLLEVBQUVsQyxzRUFBcUM7NEJBQzVDbUMsVUFBVSxFQUFFLENBQU07d0JBQ3BCLENBQUM7a0NBQ0YsQ0FFRDs7Ozs7O2dHQUNDdkMscURBQUc7d0JBQ0Z3QyxHQUFHLEVBQUMsQ0FBSTt3QkFDUjlCLFVBQVUsRUFBRSxDQUFDOzRCQUNYUyxPQUFPLEVBQUUsQ0FBTTs0QkFDZnNCLFFBQVEsRUFBRSxDQUFNOzRCQUNoQnBCLGNBQWMsRUFBRSxDQUFlOzRCQUMvQnFCLElBQUksRUFBRSxDQUFDOzRCQUNQQyxVQUFVLEVBQUUsQ0FBTTs0QkFDbEJDLFFBQVEsRUFBRSxDQUFRO3dCQUNwQixDQUFDO2tDQUVBeEMsc0RBQXNCLENBQUMsUUFBUSxDQUFQMkMsUUFBTzswQ0FDOUIsTUFDZCxDQUFDLDhEQURjN0Msc0RBQUk7Z0NBQ0gyQixPQUFPLEVBQUUsUUFDekIsR0FEK0IsQ0FBQztvQ0FDZCxHQUFLLENBQUNrQixPQUFPLEdBQ2J6QyxvQkFBb0IsQ0FBQ3lDLE9BQU87Z0NBQzlCLENBQUM7Z0NBQ0RQLEdBQUcsRUFBQyxDQUFJO2dDQUNSOUIsVUFBVSxFQUFFLENBQUM7b0NBQ1hxQixLQUFLLEVBQUUsQ0FBSztvQ0FDWm5CLFlBQVksRUFBRSxDQUFLO29DQUNuQkMsT0FBTyxFQUFFLENBQU07b0NBQ2ZtQyxLQUFLLEVBQUUsQ0FBQzt3Q0FDTjFCLGVBQWUsRUFBRWxCLG9FQUFvQztvQ0FDdkQsQ0FBQztvQ0FDRHVCLEtBQUssRUFBRSxDQUFDO3dDQUNOTCxlQUFlLEVBQUVsQixvRUFBb0M7b0NBQ3ZELENBQUM7Z0NBQ0gsQ0FBQztzSEFFQUQsdURBQUs7b0NBQUM4QyxHQUFHLEVBQUVGLFFBQU87Ozs7OzsrQkFiTEEsUUFBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxQnJDLENBQUM7R0FoR3VCMUMsaUJBQWlCO0tBQWpCQSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQnV0dG9uU2VuZFN0aWNrZXIuanN4PzQ4NTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJveCwgQnV0dG9uLCBUZXh0LCBJbWFnZSB9IGZyb20gJ0Bza3luZXh1aS9jb21wb25lbnRzJztcbmltcG9ydCBhcHBDb25maWcgZnJvbSAnLi4vLi4vY29uZmlnLmpzb24nO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJ1dHRvblNlbmRTdGlja2VyKHsgaGFuZGxlQWRkaW5nTWVzc2FnZXMgfSkge1xuICBjb25zdCBbaXNPcGVuLCBzZXRPcGVuU3RhdGVdID0gUmVhY3QudXNlU3RhdGUoJycpO1xuXG4gIHJldHVybiAoXG4gICAgPEJveFxuICAgICAgc3R5bGVTaGVldD17e1xuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgIH19XG4gICAgPlxuICAgICAgPEJ1dHRvblxuICAgICAgICBzdHlsZVNoZWV0PXt7XG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcbiAgICAgICAgICBwYWRkaW5nOiAnMCAzcHggMCAwJyxcbiAgICAgICAgICBtaW5XaWR0aDogJzUwcHgnLFxuICAgICAgICAgIG1pbkhlaWdodDogJzUwcHgnLFxuICAgICAgICAgIGZvbnRTaXplOiAnMjBweCcsXG4gICAgICAgICAgbWFyZ2luQm90dG9tOiAnOHB4JyxcbiAgICAgICAgICBsaW5lSGVpZ2h0OiAnMCcsXG4gICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbMzAwXSxcbiAgICAgICAgICBmaWx0ZXI6IGlzT3BlbiA/ICdncmF5c2NhbGUoMCknIDogJ2dyYXlzY2FsZSgxKScsXG4gICAgICAgICAgaG92ZXI6IHtcbiAgICAgICAgICAgIGZpbHRlcjogJ2dyYXlzY2FsZSgwKScsXG4gICAgICAgICAgfVxuICAgICAgICB9fVxuICAgICAgICBsYWJlbD1cIvCfmItcIlxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuU3RhdGUoIWlzT3Blbil9XG4gICAgICAvPlxuICAgICAge2lzT3BlbiAmJiAoXG4gICAgICAgIDxCb3hcbiAgICAgICAgICBzdHlsZVNoZWV0PXt7XG4gICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzVweCcsXG4gICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1s4MDBdLFxuICAgICAgICAgICAgd2lkdGg6IHtcbiAgICAgICAgICAgICAgeHM6ICcyMDBweCcsXG4gICAgICAgICAgICAgIHNtOiAnMjkwcHgnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGhlaWdodDogJzMwMHB4JyxcbiAgICAgICAgICAgIHJpZ2h0OiAnMzBweCcsXG4gICAgICAgICAgICBib3R0b206ICczMHB4JyxcbiAgICAgICAgICAgIHBhZGRpbmc6ICcxNnB4JyxcbiAgICAgICAgICAgIGJveFNoYWRvdzogJ3JnYmEoNCwgNCwgNSwgMC4xNSkgMHB4IDBweCAwcHggMXB4LCByZ2JhKDAsIDAsIDAsIDAuMjQpIDBweCA4cHggMTZweCAwcHgnLFxuICAgICAgICAgIH19XG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0T3BlblN0YXRlKGZhbHNlKX1cbiAgICAgICAgPlxuICAgICAgICAgIDxUZXh0XG4gICAgICAgICAgICBzdHlsZVNoZWV0PXt7XG4gICAgICAgICAgICAgIGNvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzW1wiMDAwXCJdLFxuICAgICAgICAgICAgICBmb250V2VpZ2h0OiAnYm9sZCcsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIFN0aWNrZXJzXG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgIHRhZz1cInVsXCJcbiAgICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcbiAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgICBmbGV4V3JhcDogJ3dyYXAnLFxuICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICAgICAgICAgICAgICBmbGV4OiAxLFxuICAgICAgICAgICAgICBwYWRkaW5nVG9wOiAnMTZweCcsXG4gICAgICAgICAgICAgIG92ZXJmbG93OiAnc2Nyb2xsJyxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2FwcENvbmZpZy5zdGlja2Vycy5tYXAoKHN0aWNrZXIpID0+IChcbiAgICAgICAgICAgICAgPFRleHRcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zdCBzdGlja2VyID0gXG4gICAgICAgICAgICAgICAgICBoYW5kbGVBZGRpbmdNZXNzYWdlcyhzdGlja2VyKVxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgdGFnPVwibGlcIiBrZXk9e3N0aWNrZXJ9XG4gICAgICAgICAgICAgICAgc3R5bGVTaGVldD17e1xuICAgICAgICAgICAgICAgICAgd2lkdGg6ICc1MCUnLFxuICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6ICcxMHB4JyxcbiAgICAgICAgICAgICAgICAgIGZvY3VzOiB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1s2MDBdLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIGhvdmVyOiB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1s2MDBdLFxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtzdGlja2VyfSAvPlxuICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9Cb3g+XG4gICAgICApfVxuICAgIDwvQm94PlxuICApXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwiQm94IiwiQnV0dG9uIiwiVGV4dCIsIkltYWdlIiwiYXBwQ29uZmlnIiwiQnV0dG9uU2VuZFN0aWNrZXIiLCJoYW5kbGVBZGRpbmdNZXNzYWdlcyIsInVzZVN0YXRlIiwiaXNPcGVuIiwic2V0T3BlblN0YXRlIiwic3R5bGVTaGVldCIsInBvc2l0aW9uIiwiYm9yZGVyUmFkaXVzIiwicGFkZGluZyIsIm1pbldpZHRoIiwibWluSGVpZ2h0IiwiZm9udFNpemUiLCJtYXJnaW5Cb3R0b20iLCJsaW5lSGVpZ2h0IiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImJhY2tncm91bmRDb2xvciIsInRoZW1lIiwiY29sb3JzIiwibmV1dHJhbHMiLCJmaWx0ZXIiLCJob3ZlciIsImxhYmVsIiwib25DbGljayIsImZsZXhEaXJlY3Rpb24iLCJ3aWR0aCIsInhzIiwic20iLCJoZWlnaHQiLCJyaWdodCIsImJvdHRvbSIsImJveFNoYWRvdyIsImNvbG9yIiwiZm9udFdlaWdodCIsInRhZyIsImZsZXhXcmFwIiwiZmxleCIsInBhZGRpbmdUb3AiLCJvdmVyZmxvdyIsInN0aWNrZXJzIiwibWFwIiwic3RpY2tlciIsImZvY3VzIiwic3JjIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/ButtonSendSticker.jsx\n");

/***/ })

});