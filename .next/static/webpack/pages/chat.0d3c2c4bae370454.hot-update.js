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

/***/ "./pages/chat.jsx":
/*!************************!*\
  !*** ./pages/chat.jsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ChatPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _skynexui_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @skynexui/components */ \"./node_modules/@skynexui/components/dist/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config.json */ \"./config.json\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _s = $RefreshSig$();\nfunction ChatPage() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([\n        {}\n    ]), listaMensagens = ref[0], setListaMensagens = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), mensagem = ref1[0], setMensagem = ref1[1];\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n        styleSheet: {\n            display: 'flex',\n            alignItems: 'center',\n            justifyContent: 'center',\n            backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.primary[500],\n            backgroundImage: \"url(https://virtualbackgrounds.site/wp-content/uploads/2020/08/the-matrix-digital-rain.jpg)\",\n            backgroundRepeat: 'no-repeat',\n            backgroundSize: 'cover',\n            backgroundBlendMode: 'multiply',\n            color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[\"000\"]\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n            styleSheet: {\n                display: 'flex',\n                flexDirection: 'column',\n                flex: 1,\n                boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',\n                borderRadius: '5px',\n                backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[700],\n                height: '100%',\n                maxWidth: '95%',\n                maxHeight: '95vh',\n                padding: '32px'\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Header, {}, void 0, false, {\n                    fileName: \"/home/daniel/MEGA/Meus Projetos React/Aluracord/pages/chat.jsx\",\n                    lineNumber: 34,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                    styleSheet: {\n                        position: 'relative',\n                        display: 'flex',\n                        flex: 1,\n                        height: '80%',\n                        backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[600],\n                        flexDirection: 'column',\n                        borderRadius: '5px',\n                        padding: '16px'\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                        as: \"form\",\n                        styleSheet: {\n                            display: 'flex',\n                            alignItems: 'center'\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.TextField, {\n                            value: mensagem,\n                            onChange: function(event) {\n                                setMensagem(event.target.value);\n                            },\n                            onKeyPress: function(event) {\n                                if (event.key == 'Enter') {\n                                    event.preventDefault();\n                                    setListaMensagens(_toConsumableArray(listaMensagens));\n                                    setMensagem(\"\");\n                                }\n                            },\n                            placeholder: \"Insira sua mensagem aqui...\",\n                            type: \"textarea\",\n                            styleSheet: {\n                                width: '100%',\n                                border: '0',\n                                resize: 'none',\n                                borderRadius: '5px',\n                                padding: '6px 8px',\n                                backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[800],\n                                marginRight: '12px',\n                                color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[200]\n                            }\n                        }, void 0, false, {\n                            fileName: \"/home/daniel/MEGA/Meus Projetos React/Aluracord/pages/chat.jsx\",\n                            lineNumber: 57,\n                            columnNumber: 25\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/daniel/MEGA/Meus Projetos React/Aluracord/pages/chat.jsx\",\n                        lineNumber: 50,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/daniel/MEGA/Meus Projetos React/Aluracord/pages/chat.jsx\",\n                    lineNumber: 35,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/daniel/MEGA/Meus Projetos React/Aluracord/pages/chat.jsx\",\n            lineNumber: 20,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/daniel/MEGA/Meus Projetos React/Aluracord/pages/chat.jsx\",\n        lineNumber: 11,\n        columnNumber: 9\n    }, this));\n};\n_s(ChatPage, \"GZDqx4eFgGyrBfoCJmYpa5zwBkM=\");\n_c = ChatPage;\nfunction Header() {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n            styleSheet: {\n                width: '100%',\n                marginBottom: '16px',\n                display: 'flex',\n                alignItems: 'center',\n                justifyContent: 'space-between'\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                    variant: \"heading5\",\n                    children: \"Chat\"\n                }, void 0, false, {\n                    fileName: \"/home/daniel/MEGA/Meus Projetos React/Aluracord/pages/chat.jsx\",\n                    lineNumber: 93,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                    variant: \"tertiary\",\n                    colorVariant: \"neutral\",\n                    label: \"Logout\",\n                    href: \"/\"\n                }, void 0, false, {\n                    fileName: \"/home/daniel/MEGA/Meus Projetos React/Aluracord/pages/chat.jsx\",\n                    lineNumber: 96,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/daniel/MEGA/Meus Projetos React/Aluracord/pages/chat.jsx\",\n            lineNumber: 92,\n            columnNumber: 13\n        }, this)\n    }, void 0, false));\n}\n_c1 = Header;\nfunction MessageList(props) {\n    console.log('MessageList', props);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n        tag: \"ul\",\n        styleSheet: {\n            overflow: 'scroll',\n            display: 'flex',\n            flexDirection: 'column-reverse',\n            flex: 1,\n            color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[\"000\"],\n            marginBottom: '16px'\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n            tag: \"li\",\n            styleSheet: {\n                borderRadius: '5px',\n                padding: '6px',\n                marginBottom: '12px',\n                hover: {\n                    backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[700]\n                }\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                    styleSheet: {\n                        marginBottom: '8px'\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Image, {\n                            styleSheet: {\n                                width: '20px',\n                                height: '20px',\n                                borderRadius: '50%',\n                                display: 'inline-block',\n                                marginRight: '8px'\n                            },\n                            src: \"https://github.com/vanessametonini.png\"\n                        }, void 0, false, {\n                            fileName: \"/home/daniel/MEGA/Meus Projetos React/Aluracord/pages/chat.jsx\",\n                            lineNumber: 139,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                            tag: \"strong\",\n                            children: mensagem.de\n                        }, void 0, false, {\n                            fileName: \"/home/daniel/MEGA/Meus Projetos React/Aluracord/pages/chat.jsx\",\n                            lineNumber: 149,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                            styleSheet: {\n                                fontSize: '10px',\n                                marginLeft: '8px',\n                                color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[300]\n                            },\n                            tag: \"span\",\n                            children: new Date().toLocaleDateString()\n                        }, void 0, false, {\n                            fileName: \"/home/daniel/MEGA/Meus Projetos React/Aluracord/pages/chat.jsx\",\n                            lineNumber: 152,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/daniel/MEGA/Meus Projetos React/Aluracord/pages/chat.jsx\",\n                    lineNumber: 134,\n                    columnNumber: 17\n                }, this),\n                mensagem.texto\n            ]\n        }, mensagem.id, true, {\n            fileName: \"/home/daniel/MEGA/Meus Projetos React/Aluracord/pages/chat.jsx\",\n            lineNumber: 122,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/daniel/MEGA/Meus Projetos React/Aluracord/pages/chat.jsx\",\n        lineNumber: 110,\n        columnNumber: 9\n    }, this));\n}\n_c2 = MessageList;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"ChatPage\");\n$RefreshReg$(_c1, \"Header\");\n$RefreshReg$(_c2, \"MessageList\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFPLEVBQUUsQ0FBSztnQkFDZGlCLFlBQVksRUFBRSxDQUFNO2dCQUNwQlcsS0FBSyxFQUFFLENBQUM7b0JBQ0o3QyxlQUFlLEVBQUVWLG9FQUFvQztnQkFDekQsQ0FBQztZQUNMLENBQUM7OzRGQUVBUCxxREFBRztvQkFDQWEsVUFBVSxFQUFFLENBQUM7d0JBQ1RzQyxZQUFZLEVBQUUsQ0FBSztvQkFDdkIsQ0FBQzs7b0dBRUFoRCx1REFBSzs0QkFDRlUsVUFBVSxFQUFFLENBQUM7Z0NBQ1RrQyxLQUFLLEVBQUUsQ0FBTTtnQ0FDYmhCLE1BQU0sRUFBRSxDQUFNO2dDQUNkRCxZQUFZLEVBQUUsQ0FBSztnQ0FDbkJoQixPQUFPLEVBQUUsQ0FBYztnQ0FDdkJvQyxXQUFXLEVBQUUsQ0FBSzs0QkFDdEIsQ0FBQzs0QkFDRGEsR0FBRyxFQUFHLENBQXNDOzs7Ozs7b0dBRS9DOUQsc0RBQUk7NEJBQUMyRCxHQUFHLEVBQUMsQ0FBUTtzQ0FDYmpELFFBQVEsQ0FBQ3FELEVBQUU7Ozs7OztvR0FFZi9ELHNEQUFJOzRCQUNEWSxVQUFVLEVBQUUsQ0FBQztnQ0FDVG9ELFFBQVEsRUFBRSxDQUFNO2dDQUNoQkMsVUFBVSxFQUFFLENBQUs7Z0NBQ2pCekMsS0FBSyxFQUFFbEIsb0VBQW9DOzRCQUMvQyxDQUFDOzRCQUNEcUQsR0FBRyxFQUFDLENBQU07c0NBRVIsR0FBRyxDQUFDTyxJQUFJLEdBQUdDLGtCQUFrQjs7Ozs7Ozs7Ozs7O2dCQUd0Q3pELFFBQVEsQ0FBQzBELEtBQUs7O1dBeENWMUQsUUFBUSxDQUFDMkQsRUFBRTs7Ozs7Ozs7OztBQTRDaEMsQ0FBQztNQTVEUWQsV0FBVyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jaGF0LmpzeD8yN2U5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJveCwgVGV4dCwgVGV4dEZpZWxkLCBJbWFnZSwgQnV0dG9uIH0gZnJvbSAnQHNreW5leHVpL2NvbXBvbmVudHMnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGFwcENvbmZpZyBmcm9tICcuLi9jb25maWcuanNvbic7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2hhdFBhZ2UoKSB7XG4gICAgY29uc3QgW2xpc3RhTWVuc2FnZW5zLCBzZXRMaXN0YU1lbnNhZ2Vuc10gPSB1c2VTdGF0ZShbe31dKVxuICAgIGNvbnN0IFttZW5zYWdlbSwgc2V0TWVuc2FnZW1dID0gdXNlU3RhdGUoXCJcIilcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxCb3hcbiAgICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLnByaW1hcnlbNTAwXSxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoaHR0cHM6Ly92aXJ0dWFsYmFja2dyb3VuZHMuc2l0ZS93cC1jb250ZW50L3VwbG9hZHMvMjAyMC8wOC90aGUtbWF0cml4LWRpZ2l0YWwtcmFpbi5qcGcpYCxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiAnbm8tcmVwZWF0JywgYmFja2dyb3VuZFNpemU6ICdjb3ZlcicsIGJhY2tncm91bmRCbGVuZE1vZGU6ICdtdWx0aXBseScsXG4gICAgICAgICAgICAgICAgY29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbJzAwMCddXG4gICAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgICAgc3R5bGVTaGVldD17e1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgICAgICAgICAgICAgICBmbGV4OiAxLFxuICAgICAgICAgICAgICAgICAgICBib3hTaGFkb3c6ICcwIDJweCAxMHB4IDAgcmdiKDAgMCAwIC8gMjAlKScsXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzVweCcsXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1s3MDBdLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6ICc5NSUnLFxuICAgICAgICAgICAgICAgICAgICBtYXhIZWlnaHQ6ICc5NXZoJyxcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogJzMycHgnLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVTaGVldD17e1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4OiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnODAlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1s2MDBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICc1cHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogJzE2cHgnLFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cblxuICAgICAgICAgICAgICAgICAgICB7LyogPE1lc3NhZ2VMaXN0IG1lbnNhZ2Vucz17W119IC8+ICovfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICAgICAgICAgICAgYXM9XCJmb3JtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e21lbnNhZ2VtfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0TWVuc2FnZW0oZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25LZXlQcmVzcz17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChldmVudC5rZXkgPT0gJ0VudGVyJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldExpc3RhTWVuc2FnZW5zKFsuLi5saXN0YU1lbnNhZ2VucyxdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0TWVuc2FnZW0oXCJcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJJbnNpcmEgc3VhIG1lbnNhZ2VtIGFxdWkuLi5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0YXJlYVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVTaGVldD17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6ICcwJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzaXplOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzVweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6ICc2cHggOHB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzgwMF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAnMTJweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzIwMF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvQm94PlxuICAgIClcbn1cblxuZnVuY3Rpb24gSGVhZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8Qm94IHN0eWxlU2hlZXQ9e3sgd2lkdGg6ICcxMDAlJywgbWFyZ2luQm90dG9tOiAnMTZweCcsIGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicgfX0gPlxuICAgICAgICAgICAgICAgIDxUZXh0IHZhcmlhbnQ9J2hlYWRpbmc1Jz5cbiAgICAgICAgICAgICAgICAgICAgQ2hhdFxuICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9J3RlcnRpYXJ5J1xuICAgICAgICAgICAgICAgICAgICBjb2xvclZhcmlhbnQ9J25ldXRyYWwnXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPSdMb2dvdXQnXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuZnVuY3Rpb24gTWVzc2FnZUxpc3QocHJvcHMpIHtcbiAgICBjb25zb2xlLmxvZygnTWVzc2FnZUxpc3QnLCBwcm9wcyk7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPEJveFxuICAgICAgICAgICAgdGFnPVwidWxcIlxuICAgICAgICAgICAgc3R5bGVTaGVldD17e1xuICAgICAgICAgICAgICAgIG92ZXJmbG93OiAnc2Nyb2xsJyxcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbi1yZXZlcnNlJyxcbiAgICAgICAgICAgICAgICBmbGV4OiAxLFxuICAgICAgICAgICAgICAgIGNvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzW1wiMDAwXCJdLFxuICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogJzE2cHgnLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgPlxuXG4gICAgICAgICAgICA8VGV4dFxuICAgICAgICAgICAgICAgIGtleT17bWVuc2FnZW0uaWR9XG4gICAgICAgICAgICAgICAgdGFnPVwibGlcIlxuICAgICAgICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogJzZweCcsXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogJzEycHgnLFxuICAgICAgICAgICAgICAgICAgICBob3Zlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzcwMF0sXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVTaGVldD17e1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAnOHB4JyxcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVTaGVldD17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMjBweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnMjBweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogJzhweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgaHR0cHM6Ly9naXRodWIuY29tL3ZhbmVzc2FtZXRvbmluaS5wbmdgfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8VGV4dCB0YWc9XCJzdHJvbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHttZW5zYWdlbS5kZX1cbiAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICA8VGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVTaGVldD17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMTBweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogJzhweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbMzAwXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICB0YWc9XCJzcGFuXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgeyhuZXcgRGF0ZSgpLnRvTG9jYWxlRGF0ZVN0cmluZygpKX1cbiAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgIHttZW5zYWdlbS50ZXh0b31cbiAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgPC9Cb3g+XG4gICAgKVxufVxuIl0sIm5hbWVzIjpbIkJveCIsIlRleHQiLCJUZXh0RmllbGQiLCJJbWFnZSIsIkJ1dHRvbiIsIlJlYWN0IiwidXNlU3RhdGUiLCJhcHBDb25maWciLCJDaGF0UGFnZSIsImxpc3RhTWVuc2FnZW5zIiwic2V0TGlzdGFNZW5zYWdlbnMiLCJtZW5zYWdlbSIsInNldE1lbnNhZ2VtIiwic3R5bGVTaGVldCIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ0aGVtZSIsImNvbG9ycyIsInByaW1hcnkiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJiYWNrZ3JvdW5kUmVwZWF0IiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kQmxlbmRNb2RlIiwiY29sb3IiLCJuZXV0cmFscyIsImZsZXhEaXJlY3Rpb24iLCJmbGV4IiwiYm94U2hhZG93IiwiYm9yZGVyUmFkaXVzIiwiaGVpZ2h0IiwibWF4V2lkdGgiLCJtYXhIZWlnaHQiLCJwYWRkaW5nIiwiSGVhZGVyIiwicG9zaXRpb24iLCJhcyIsInZhbHVlIiwib25DaGFuZ2UiLCJldmVudCIsInRhcmdldCIsIm9uS2V5UHJlc3MiLCJrZXkiLCJwcmV2ZW50RGVmYXVsdCIsInBsYWNlaG9sZGVyIiwidHlwZSIsIndpZHRoIiwiYm9yZGVyIiwicmVzaXplIiwibWFyZ2luUmlnaHQiLCJtYXJnaW5Cb3R0b20iLCJ2YXJpYW50IiwiY29sb3JWYXJpYW50IiwibGFiZWwiLCJocmVmIiwiTWVzc2FnZUxpc3QiLCJwcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJ0YWciLCJvdmVyZmxvdyIsImhvdmVyIiwic3JjIiwiZGUiLCJmb250U2l6ZSIsIm1hcmdpbkxlZnQiLCJEYXRlIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwidGV4dG8iLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/chat.jsx\n");

/***/ })

});