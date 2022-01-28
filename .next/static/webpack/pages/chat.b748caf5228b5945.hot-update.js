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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ButtonSendSticker; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _skynexui_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @skynexui/components */ \"./node_modules/@skynexui/components/dist/esm/index.js\");\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config.json */ \"./config.json\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _s = $RefreshSig$();\nfunction ButtonSendSticker(param) {\n    var handleAddingMessages = param.handleAddingMessages;\n    var _this = this;\n    _s();\n    var ref = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_1___default().useState(''), 2), isOpen = ref[0], setOpenState = ref[1];\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Box, {\n        styleSheet: {\n            position: 'relative'\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                styleSheet: {\n                    borderRadius: '50%',\n                    padding: '0 3px 0 0',\n                    minWidth: '50px',\n                    minHeight: '50px',\n                    fontSize: '20px',\n                    marginBottom: '8px',\n                    lineHeight: '0',\n                    display: 'flex',\n                    alignItems: 'center',\n                    justifyContent: 'center',\n                    backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[300],\n                    filter: isOpen ? 'grayscale(0)' : 'grayscale(1)',\n                    hover: {\n                        filter: 'grayscale(0)'\n                    }\n                },\n                label: \"😋\",\n                onClick: function() {\n                    return setOpenState(!isOpen);\n                }\n            }, void 0, false, {\n                fileName: \"/home/daniel/MEGA/Meus Projetos React/Aluracord/src/components/ButtonSendSticker.jsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, this),\n            isOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                styleSheet: {\n                    display: 'flex',\n                    flexDirection: 'column',\n                    borderRadius: '5px',\n                    position: 'absolute',\n                    backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[800],\n                    width: {\n                        xs: '200px',\n                        sm: '290px'\n                    },\n                    height: '300px',\n                    right: '30px',\n                    bottom: '30px',\n                    padding: '16px',\n                    boxShadow: 'rgba(4, 4, 5, 0.15) 0px 0px 0px 1px, rgba(0, 0, 0, 0.24) 0px 8px 16px 0px'\n                },\n                onClick: function() {\n                    return setOpenState(false);\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                        styleSheet: {\n                            color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[\"000\"],\n                            fontWeight: 'bold'\n                        },\n                        children: \"Stickers\"\n                    }, void 0, false, {\n                        fileName: \"/home/daniel/MEGA/Meus Projetos React/Aluracord/src/components/ButtonSendSticker.jsx\",\n                        lineNumber: 56,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                        tag: \"ul\",\n                        styleSheet: {\n                            display: 'flex',\n                            flexWrap: 'wrap',\n                            justifyContent: 'space-between',\n                            flex: 1,\n                            paddingTop: '16px',\n                            overflow: 'scroll'\n                        },\n                        children: _config_json__WEBPACK_IMPORTED_MODULE_3__.stickers.map(function(sticker1) {\n                            /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                                onClick: function() {\n                                    var sticker = \":sticker\" + sticker;\n                                    handleAddingMessages(sticker);\n                                },\n                                tag: \"li\",\n                                styleSheet: {\n                                    width: '50%',\n                                    borderRadius: '5px',\n                                    padding: '10px',\n                                    focus: {\n                                        backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[600]\n                                    },\n                                    hover: {\n                                        backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[600]\n                                    }\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Image, {\n                                    src: sticker1\n                                }, void 0, false, {\n                                    fileName: \"/home/daniel/MEGA/Meus Projetos React/Aluracord/src/components/ButtonSendSticker.jsx\",\n                                    lineNumber: 94,\n                                    columnNumber: 17\n                                }, _this)\n                            }, sticker1, false, {\n                                fileName: \"/home/daniel/MEGA/Meus Projetos React/Aluracord/src/components/ButtonSendSticker.jsx\",\n                                lineNumber: 76,\n                                columnNumber: 15\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/home/daniel/MEGA/Meus Projetos React/Aluracord/src/components/ButtonSendSticker.jsx\",\n                        lineNumber: 64,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/daniel/MEGA/Meus Projetos React/Aluracord/src/components/ButtonSendSticker.jsx\",\n                lineNumber: 37,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/daniel/MEGA/Meus Projetos React/Aluracord/src/components/ButtonSendSticker.jsx\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, this));\n};\n_s(ButtonSendSticker, \"M1dH4yD9ZrZglAXGglbASSKS3GM=\");\n_c = ButtonSendSticker;\nvar _c;\n$RefreshReg$(_c, \"ButtonSendSticker\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9CdXR0b25TZW5kU3RpY2tlci5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQXlCO0FBQ3NDO0FBQ3RCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHMUIsUUFBUSxDQUFDTSxpQkFBaUIsQ0FBQyxLQUF3QixFQUFFLENBQUM7UUFBekJDLG9CQUFvQixHQUF0QixLQUF3QixDQUF0QkEsb0JBQW9COzs7SUFDOUQsR0FBSyxDQUEwQlAsR0FBa0Isa0JBQWxCQSxxREFBYyxDQUFDLENBQUUsUUFBekNTLE1BQU0sR0FBa0JULEdBQWtCLEtBQWxDVSxZQUFZLEdBQUlWLEdBQWtCO0lBRWpELE1BQU0sNkVBQ0hDLHFEQUFHO1FBQ0ZVLFVBQVUsRUFBRSxDQUFDO1lBQ1hDLFFBQVEsRUFBRSxDQUFVO1FBQ3RCLENBQUM7O3dGQUVBVix3REFBTTtnQkFDTFMsVUFBVSxFQUFFLENBQUM7b0JBQ1hFLFlBQVksRUFBRSxDQUFLO29CQUNuQkMsT0FBTyxFQUFFLENBQVc7b0JBQ3BCQyxRQUFRLEVBQUUsQ0FBTTtvQkFDaEJDLFNBQVMsRUFBRSxDQUFNO29CQUNqQkMsUUFBUSxFQUFFLENBQU07b0JBQ2hCQyxZQUFZLEVBQUUsQ0FBSztvQkFDbkJDLFVBQVUsRUFBRSxDQUFHO29CQUNmQyxPQUFPLEVBQUUsQ0FBTTtvQkFDZkMsVUFBVSxFQUFFLENBQVE7b0JBQ3BCQyxjQUFjLEVBQUUsQ0FBUTtvQkFDeEJDLGVBQWUsRUFBRWxCLG9FQUFvQztvQkFDckRzQixNQUFNLEVBQUVsQixNQUFNLEdBQUcsQ0FBYyxnQkFBRyxDQUFjO29CQUNoRG1CLEtBQUssRUFBRSxDQUFDO3dCQUNORCxNQUFNLEVBQUUsQ0FBYztvQkFDeEIsQ0FBQztnQkFDSCxDQUFDO2dCQUNERSxLQUFLLEVBQUMsQ0FBRztnQkFDVEMsT0FBTyxFQUFFLFFBQVE7b0JBQUZwQixNQUFNLENBQU5BLFlBQVksRUFBRUQsTUFBTTs7Ozs7OztZQUVwQ0EsTUFBTSxnRkFDSlIscURBQUc7Z0JBQ0ZVLFVBQVUsRUFBRSxDQUFDO29CQUNYUyxPQUFPLEVBQUUsQ0FBTTtvQkFDZlcsYUFBYSxFQUFFLENBQVE7b0JBQ3ZCbEIsWUFBWSxFQUFFLENBQUs7b0JBQ25CRCxRQUFRLEVBQUUsQ0FBVTtvQkFDcEJXLGVBQWUsRUFBRWxCLG9FQUFvQztvQkFDckQyQixLQUFLLEVBQUUsQ0FBQzt3QkFDTkMsRUFBRSxFQUFFLENBQU87d0JBQ1hDLEVBQUUsRUFBRSxDQUFPO29CQUNiLENBQUM7b0JBQ0RDLE1BQU0sRUFBRSxDQUFPO29CQUNmQyxLQUFLLEVBQUUsQ0FBTTtvQkFDYkMsTUFBTSxFQUFFLENBQU07b0JBQ2R2QixPQUFPLEVBQUUsQ0FBTTtvQkFDZndCLFNBQVMsRUFBRSxDQUEyRTtnQkFDeEYsQ0FBQztnQkFDRFIsT0FBTyxFQUFFLFFBQVE7b0JBQUZwQixNQUFNLENBQU5BLFlBQVksQ0FBQyxLQUFLOzs7Z0dBRWhDUCxzREFBSTt3QkFDSFEsVUFBVSxFQUFFLENBQUM7NEJBQ1g0QixLQUFLLEVBQUVsQyxzRUFBcUM7NEJBQzVDbUMsVUFBVSxFQUFFLENBQU07d0JBQ3BCLENBQUM7a0NBQ0YsQ0FFRDs7Ozs7O2dHQUNDdkMscURBQUc7d0JBQ0Z3QyxHQUFHLEVBQUMsQ0FBSTt3QkFDUjlCLFVBQVUsRUFBRSxDQUFDOzRCQUNYUyxPQUFPLEVBQUUsQ0FBTTs0QkFDZnNCLFFBQVEsRUFBRSxDQUFNOzRCQUNoQnBCLGNBQWMsRUFBRSxDQUFlOzRCQUMvQnFCLElBQUksRUFBRSxDQUFDOzRCQUNQQyxVQUFVLEVBQUUsQ0FBTTs0QkFDbEJDLFFBQVEsRUFBRSxDQUFRO3dCQUNwQixDQUFDO2tDQUVBeEMsc0RBQXNCLENBQUMsUUFBUSxDQUFQMkMsUUFBTzswQ0FDOUIsTUFDZCxDQUFDLDhEQURjN0Msc0RBQUk7Z0NBQ0gyQixPQUFPLEVBQUUsUUFDekIsR0FEK0IsQ0FBQztvQ0FDZCxHQUFLLENBQUNrQixPQUFPLEdBQUcsQ0FBVSxZQUFHQSxPQUFPO29DQUNwQ3pDLG9CQUFvQixDQUFDeUMsT0FBTztnQ0FDOUIsQ0FBQztnQ0FDRFAsR0FBRyxFQUFDLENBQUk7Z0NBQ1I5QixVQUFVLEVBQUUsQ0FBQztvQ0FDWHFCLEtBQUssRUFBRSxDQUFLO29DQUNabkIsWUFBWSxFQUFFLENBQUs7b0NBQ25CQyxPQUFPLEVBQUUsQ0FBTTtvQ0FDZm1DLEtBQUssRUFBRSxDQUFDO3dDQUNOMUIsZUFBZSxFQUFFbEIsb0VBQW9DO29DQUN2RCxDQUFDO29DQUNEdUIsS0FBSyxFQUFFLENBQUM7d0NBQ05MLGVBQWUsRUFBRWxCLG9FQUFvQztvQ0FDdkQsQ0FBQztnQ0FDSCxDQUFDO3NIQUVBRCx1REFBSztvQ0FBQzhDLEdBQUcsRUFBRUYsUUFBTzs7Ozs7OytCQWJMQSxRQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFCckMsQ0FBQztHQWhHdUIxQyxpQkFBaUI7S0FBakJBLGlCQUFpQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9CdXR0b25TZW5kU3RpY2tlci5qc3g/NDg1NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQm94LCBCdXR0b24sIFRleHQsIEltYWdlIH0gZnJvbSAnQHNreW5leHVpL2NvbXBvbmVudHMnO1xuaW1wb3J0IGFwcENvbmZpZyBmcm9tICcuLi8uLi9jb25maWcuanNvbic7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQnV0dG9uU2VuZFN0aWNrZXIoeyBoYW5kbGVBZGRpbmdNZXNzYWdlcyB9KSB7XG4gIGNvbnN0IFtpc09wZW4sIHNldE9wZW5TdGF0ZV0gPSBSZWFjdC51c2VTdGF0ZSgnJyk7XG5cbiAgcmV0dXJuIChcbiAgICA8Qm94XG4gICAgICBzdHlsZVNoZWV0PXt7XG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8QnV0dG9uXG4gICAgICAgIHN0eWxlU2hlZXQ9e3tcbiAgICAgICAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxuICAgICAgICAgIHBhZGRpbmc6ICcwIDNweCAwIDAnLFxuICAgICAgICAgIG1pbldpZHRoOiAnNTBweCcsXG4gICAgICAgICAgbWluSGVpZ2h0OiAnNTBweCcsXG4gICAgICAgICAgZm9udFNpemU6ICcyMHB4JyxcbiAgICAgICAgICBtYXJnaW5Cb3R0b206ICc4cHgnLFxuICAgICAgICAgIGxpbmVIZWlnaHQ6ICcwJyxcbiAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1szMDBdLFxuICAgICAgICAgIGZpbHRlcjogaXNPcGVuID8gJ2dyYXlzY2FsZSgwKScgOiAnZ3JheXNjYWxlKDEpJyxcbiAgICAgICAgICBob3Zlcjoge1xuICAgICAgICAgICAgZmlsdGVyOiAnZ3JheXNjYWxlKDApJyxcbiAgICAgICAgICB9XG4gICAgICAgIH19XG4gICAgICAgIGxhYmVsPVwi8J+Yi1wiXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE9wZW5TdGF0ZSghaXNPcGVuKX1cbiAgICAgIC8+XG4gICAgICB7aXNPcGVuICYmIChcbiAgICAgICAgPEJveFxuICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcbiAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzgwMF0sXG4gICAgICAgICAgICB3aWR0aDoge1xuICAgICAgICAgICAgICB4czogJzIwMHB4JyxcbiAgICAgICAgICAgICAgc206ICcyOTBweCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaGVpZ2h0OiAnMzAwcHgnLFxuICAgICAgICAgICAgcmlnaHQ6ICczMHB4JyxcbiAgICAgICAgICAgIGJvdHRvbTogJzMwcHgnLFxuICAgICAgICAgICAgcGFkZGluZzogJzE2cHgnLFxuICAgICAgICAgICAgYm94U2hhZG93OiAncmdiYSg0LCA0LCA1LCAwLjE1KSAwcHggMHB4IDBweCAxcHgsIHJnYmEoMCwgMCwgMCwgMC4yNCkgMHB4IDhweCAxNnB4IDBweCcsXG4gICAgICAgICAgfX1cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuU3RhdGUoZmFsc2UpfVxuICAgICAgICA+XG4gICAgICAgICAgPFRleHRcbiAgICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcbiAgICAgICAgICAgICAgY29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbXCIwMDBcIl0sXG4gICAgICAgICAgICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgU3RpY2tlcnNcbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgPEJveFxuICAgICAgICAgICAgdGFnPVwidWxcIlxuICAgICAgICAgICAgc3R5bGVTaGVldD17e1xuICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICAgIGZsZXhXcmFwOiAnd3JhcCcsXG4gICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gICAgICAgICAgICAgIGZsZXg6IDEsXG4gICAgICAgICAgICAgIHBhZGRpbmdUb3A6ICcxNnB4JyxcbiAgICAgICAgICAgICAgb3ZlcmZsb3c6ICdzY3JvbGwnLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7YXBwQ29uZmlnLnN0aWNrZXJzLm1hcCgoc3RpY2tlcikgPT4gKFxuICAgICAgICAgICAgICA8VGV4dFxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHN0aWNrZXIgPSBcIjpzdGlja2VyXCIgKyBzdGlja2VyXG4gICAgICAgICAgICAgICAgICBoYW5kbGVBZGRpbmdNZXNzYWdlcyhzdGlja2VyKVxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgdGFnPVwibGlcIiBrZXk9e3N0aWNrZXJ9XG4gICAgICAgICAgICAgICAgc3R5bGVTaGVldD17e1xuICAgICAgICAgICAgICAgICAgd2lkdGg6ICc1MCUnLFxuICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6ICcxMHB4JyxcbiAgICAgICAgICAgICAgICAgIGZvY3VzOiB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1s2MDBdLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIGhvdmVyOiB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1s2MDBdLFxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtzdGlja2VyfSAvPlxuICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9Cb3g+XG4gICAgICApfVxuICAgIDwvQm94PlxuICApXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwiQm94IiwiQnV0dG9uIiwiVGV4dCIsIkltYWdlIiwiYXBwQ29uZmlnIiwiQnV0dG9uU2VuZFN0aWNrZXIiLCJoYW5kbGVBZGRpbmdNZXNzYWdlcyIsInVzZVN0YXRlIiwiaXNPcGVuIiwic2V0T3BlblN0YXRlIiwic3R5bGVTaGVldCIsInBvc2l0aW9uIiwiYm9yZGVyUmFkaXVzIiwicGFkZGluZyIsIm1pbldpZHRoIiwibWluSGVpZ2h0IiwiZm9udFNpemUiLCJtYXJnaW5Cb3R0b20iLCJsaW5lSGVpZ2h0IiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImJhY2tncm91bmRDb2xvciIsInRoZW1lIiwiY29sb3JzIiwibmV1dHJhbHMiLCJmaWx0ZXIiLCJob3ZlciIsImxhYmVsIiwib25DbGljayIsImZsZXhEaXJlY3Rpb24iLCJ3aWR0aCIsInhzIiwic20iLCJoZWlnaHQiLCJyaWdodCIsImJvdHRvbSIsImJveFNoYWRvdyIsImNvbG9yIiwiZm9udFdlaWdodCIsInRhZyIsImZsZXhXcmFwIiwiZmxleCIsInBhZGRpbmdUb3AiLCJvdmVyZmxvdyIsInN0aWNrZXJzIiwibWFwIiwic3RpY2tlciIsImZvY3VzIiwic3JjIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/ButtonSendSticker.jsx\n");

/***/ })

});