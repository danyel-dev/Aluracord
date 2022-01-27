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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ChatPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _skynexui_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @skynexui/components */ \"./node_modules/@skynexui/components/dist/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config.json */ \"./config.json\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _s = $RefreshSig$();\nfunction ChatPage() {\n    var handleAddingMessages = function handleAddingMessages(event) {\n        if (event.key === 'Enter') {\n            event.preventDefault();\n            var MessageObject = {\n                id: listaMensagens.length,\n                de: 'Carlos Daniel',\n                texto: mensagem\n            };\n            setListaMensagens(_toConsumableArray(listaMensagens).concat([\n                MessageObject\n            ]));\n            setMensagem(\"\");\n        }\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), listaMensagens = ref[0], setListaMensagens = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), mensagem = ref1[0], setMensagem = ref1[1];\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n        styleSheet: {\n            display: 'flex',\n            alignItems: 'center',\n            justifyContent: 'center',\n            backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.primary[500],\n            backgroundImage: \"url(https://virtualbackgrounds.site/wp-content/uploads/2020/08/the-matrix-digital-rain.jpg)\",\n            backgroundRepeat: 'no-repeat',\n            backgroundSize: 'cover',\n            backgroundBlendMode: 'multiply',\n            color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[\"000\"]\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n            styleSheet: {\n                display: 'flex',\n                flexDirection: 'column',\n                flex: 1,\n                boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',\n                borderRadius: '5px',\n                backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[700],\n                height: '100%',\n                maxWidth: '95%',\n                maxHeight: '95vh',\n                padding: '32px'\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Header, {}, void 0, false, {\n                    fileName: \"/home/daniel/MEGA/Meus Projetos React/Aluracord/pages/chat.jsx\",\n                    lineNumber: 47,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                    styleSheet: {\n                        position: 'relative',\n                        display: 'flex',\n                        flex: 1,\n                        height: '80%',\n                        backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[600],\n                        flexDirection: 'column',\n                        borderRadius: '5px',\n                        padding: '16px'\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MessageList, {\n                            mensagens: listaMensagens\n                        }, void 0, false, {\n                            fileName: \"/home/daniel/MEGA/Meus Projetos React/Aluracord/pages/chat.jsx\",\n                            lineNumber: 61,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                            as: \"form\",\n                            styleSheet: {\n                                display: 'flex',\n                                alignItems: 'center'\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.TextField, {\n                                value: mensagem,\n                                onChange: function(event) {\n                                    setMensagem(event.target.value);\n                                },\n                                onKeyPress: handleAddingMessages,\n                                placeholder: \"Insira sua mensagem aqui...\",\n                                type: \"textarea\",\n                                styleSheet: {\n                                    width: '100%',\n                                    border: '0',\n                                    resize: 'none',\n                                    borderRadius: '5px',\n                                    padding: '6px 8px',\n                                    backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[800],\n                                    marginRight: '12px',\n                                    color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[200]\n                                }\n                            }, void 0, false, {\n                                fileName: \"/home/daniel/MEGA/Meus Projetos React/Aluracord/pages/chat.jsx\",\n                                lineNumber: 70,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/daniel/MEGA/Meus Projetos React/Aluracord/pages/chat.jsx\",\n                            lineNumber: 63,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/daniel/MEGA/Meus Projetos React/Aluracord/pages/chat.jsx\",\n                    lineNumber: 48,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/daniel/MEGA/Meus Projetos React/Aluracord/pages/chat.jsx\",\n            lineNumber: 33,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/daniel/MEGA/Meus Projetos React/Aluracord/pages/chat.jsx\",\n        lineNumber: 24,\n        columnNumber: 9\n    }, this));\n};\n_s(ChatPage, \"d6DCpl8v2icKRWcFBRUxJ3YlooI=\");\n_c = ChatPage;\nfunction Header() {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n            styleSheet: {\n                width: '100%',\n                marginBottom: '16px',\n                display: 'flex',\n                alignItems: 'center',\n                justifyContent: 'space-between'\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                    variant: \"heading5\",\n                    children: \"Chat\"\n                }, void 0, false, {\n                    fileName: \"/home/daniel/MEGA/Meus Projetos React/Aluracord/pages/chat.jsx\",\n                    lineNumber: 100,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                    variant: \"tertiary\",\n                    colorVariant: \"neutral\",\n                    label: \"Logout\",\n                    href: \"/\"\n                }, void 0, false, {\n                    fileName: \"/home/daniel/MEGA/Meus Projetos React/Aluracord/pages/chat.jsx\",\n                    lineNumber: 103,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/daniel/MEGA/Meus Projetos React/Aluracord/pages/chat.jsx\",\n            lineNumber: 99,\n            columnNumber: 13\n        }, this)\n    }, void 0, false));\n}\n_c1 = Header;\nfunction MessageList(props) {\n    var _this = this;\n    console.log(props);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n        tag: \"ul\",\n        styleSheet: {\n            overflow: 'scroll',\n            display: 'flex',\n            flexDirection: 'column-reverse',\n            flex: 1,\n            color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[\"000\"],\n            marginBottom: '16px'\n        },\n        children: props.mensagens.map(function(mensagem) {\n            return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                tag: \"li\",\n                styleSheet: {\n                    borderRadius: '5px',\n                    padding: '6px',\n                    marginBottom: '12px',\n                    hover: {\n                        backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[700]\n                    }\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                        styleSheet: {\n                            marginBottom: '8px'\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Image, {\n                                styleSheet: {\n                                    width: '20px',\n                                    height: '20px',\n                                    borderRadius: '50%',\n                                    display: 'inline-block',\n                                    marginRight: '8px'\n                                },\n                                src: \"https://github.com/vanessametonini.png\"\n                            }, void 0, false, {\n                                fileName: \"/home/daniel/MEGA/Meus Projetos React/Aluracord/pages/chat.jsx\",\n                                lineNumber: 148,\n                                columnNumber: 25\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                                tag: \"strong\",\n                                children: mensagem.de\n                            }, void 0, false, {\n                                fileName: \"/home/daniel/MEGA/Meus Projetos React/Aluracord/pages/chat.jsx\",\n                                lineNumber: 158,\n                                columnNumber: 25\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                                styleSheet: {\n                                    fontSize: '10px',\n                                    marginLeft: '8px',\n                                    color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[300]\n                                },\n                                tag: \"span\",\n                                children: new Date().toLocaleDateString()\n                            }, void 0, false, {\n                                fileName: \"/home/daniel/MEGA/Meus Projetos React/Aluracord/pages/chat.jsx\",\n                                lineNumber: 161,\n                                columnNumber: 25\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/daniel/MEGA/Meus Projetos React/Aluracord/pages/chat.jsx\",\n                        lineNumber: 143,\n                        columnNumber: 21\n                    }, _this),\n                    mensagem.texto\n                ]\n            }, mensagem.id, true, {\n                fileName: \"/home/daniel/MEGA/Meus Projetos React/Aluracord/pages/chat.jsx\",\n                lineNumber: 131,\n                columnNumber: 17\n            }, _this));\n        })\n    }, void 0, false, {\n        fileName: \"/home/daniel/MEGA/Meus Projetos React/Aluracord/pages/chat.jsx\",\n        lineNumber: 117,\n        columnNumber: 9\n    }, this));\n}\n_c2 = MessageList;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"ChatPage\");\n$RefreshReg$(_c1, \"Header\");\n$RefreshReg$(_c2, \"MessageList\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNPLElBQUksR0FBR0Msa0JBQWtCOzs7Ozs7Ozs7Ozs7b0JBR3RDeEQsUUFBUSxDQUFDRCxLQUFLOztlQXhDVkMsUUFBUSxDQUFDTCxFQUFFOzs7OztRQTJDeEIsQ0FBQzs7Ozs7O0FBR2IsQ0FBQztNQWhFUWdDLFdBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2hhdC5qc3g/MjdlOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3gsIFRleHQsIFRleHRGaWVsZCwgSW1hZ2UsIEJ1dHRvbiB9IGZyb20gJ0Bza3luZXh1aS9jb21wb25lbnRzJztcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBhcHBDb25maWcgZnJvbSAnLi4vY29uZmlnLmpzb24nO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENoYXRQYWdlKCkge1xuICAgIGNvbnN0IFtsaXN0YU1lbnNhZ2Vucywgc2V0TGlzdGFNZW5zYWdlbnNdID0gdXNlU3RhdGUoW10pXG4gICAgY29uc3QgW21lbnNhZ2VtLCBzZXRNZW5zYWdlbV0gPSB1c2VTdGF0ZShcIlwiKVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlQWRkaW5nTWVzc2FnZXMoZXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGNvbnN0IE1lc3NhZ2VPYmplY3QgPSB7XG4gICAgICAgICAgICAgICAgaWQ6IGxpc3RhTWVuc2FnZW5zLmxlbmd0aCxcbiAgICAgICAgICAgICAgICBkZTogJ0NhcmxvcyBEYW5pZWwnLFxuICAgICAgICAgICAgICAgIHRleHRvOiBtZW5zYWdlbVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2V0TGlzdGFNZW5zYWdlbnMoWy4uLmxpc3RhTWVuc2FnZW5zLCBNZXNzYWdlT2JqZWN0XSlcbiAgICAgICAgICAgIHNldE1lbnNhZ2VtKFwiXCIpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Qm94XG4gICAgICAgICAgICBzdHlsZVNoZWV0PXt7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5wcmltYXJ5WzUwMF0sXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKGh0dHBzOi8vdmlydHVhbGJhY2tncm91bmRzLnNpdGUvd3AtY29udGVudC91cGxvYWRzLzIwMjAvMDgvdGhlLW1hdHJpeC1kaWdpdGFsLXJhaW4uanBnKWAsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogJ25vLXJlcGVhdCcsIGJhY2tncm91bmRTaXplOiAnY292ZXInLCBiYWNrZ3JvdW5kQmxlbmRNb2RlOiAnbXVsdGlwbHknLFxuICAgICAgICAgICAgICAgIGNvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWycwMDAnXVxuICAgICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgICAgICAgICAgICAgICAgZmxleDogMSxcbiAgICAgICAgICAgICAgICAgICAgYm94U2hhZG93OiAnMCAycHggMTBweCAwIHJnYigwIDAgMCAvIDIwJSknLFxuICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICc1cHgnLFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbNzAwXSxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICAgICAgICAgICAgICAgIG1heFdpZHRoOiAnOTUlJyxcbiAgICAgICAgICAgICAgICAgICAgbWF4SGVpZ2h0OiAnOTV2aCcsXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6ICczMnB4JyxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleDogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzgwJScsXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbNjAwXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6ICcxNnB4JyxcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG5cbiAgICAgICAgICAgICAgICAgICAgPE1lc3NhZ2VMaXN0IG1lbnNhZ2Vucz17bGlzdGFNZW5zYWdlbnN9IC8+XG5cbiAgICAgICAgICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICAgICAgICAgICAgYXM9XCJmb3JtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e21lbnNhZ2VtfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0TWVuc2FnZW0oZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25LZXlQcmVzcz17aGFuZGxlQWRkaW5nTWVzc2FnZXN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJJbnNpcmEgc3VhIG1lbnNhZ2VtIGFxdWkuLi5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0YXJlYVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVTaGVldD17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6ICcwJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzaXplOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzVweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6ICc2cHggOHB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzgwMF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAnMTJweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzIwMF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvQm94PlxuICAgIClcbn1cblxuZnVuY3Rpb24gSGVhZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8Qm94IHN0eWxlU2hlZXQ9e3sgd2lkdGg6ICcxMDAlJywgbWFyZ2luQm90dG9tOiAnMTZweCcsIGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicgfX0gPlxuICAgICAgICAgICAgICAgIDxUZXh0IHZhcmlhbnQ9J2hlYWRpbmc1Jz5cbiAgICAgICAgICAgICAgICAgICAgQ2hhdFxuICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9J3RlcnRpYXJ5J1xuICAgICAgICAgICAgICAgICAgICBjb2xvclZhcmlhbnQ9J25ldXRyYWwnXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPSdMb2dvdXQnXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuZnVuY3Rpb24gTWVzc2FnZUxpc3QocHJvcHMpIHtcbiAgICBjb25zb2xlLmxvZyhwcm9wcylcbiAgICByZXR1cm4gKFxuICAgICAgICA8Qm94XG4gICAgICAgICAgICB0YWc9XCJ1bFwiXG4gICAgICAgICAgICBzdHlsZVNoZWV0PXt7XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6ICdzY3JvbGwnLFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uLXJldmVyc2UnLFxuICAgICAgICAgICAgICAgIGZsZXg6IDEsXG4gICAgICAgICAgICAgICAgY29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbXCIwMDBcIl0sXG4gICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAnMTZweCcsXG4gICAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgICB7cHJvcHMubWVuc2FnZW5zLm1hcCgobWVuc2FnZW0pID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuXG4gICAgICAgICAgICAgICAgPFRleHRcbiAgICAgICAgICAgICAgICAgICAga2V5PXttZW5zYWdlbS5pZH1cbiAgICAgICAgICAgICAgICAgICAgdGFnPVwibGlcIlxuICAgICAgICAgICAgICAgICAgICBzdHlsZVNoZWV0PXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICc1cHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogJzZweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206ICcxMnB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhvdmVyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzcwMF0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZVNoZWV0PXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAnOHB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcyMHB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnMjBweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzUwJScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogJzhweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2BodHRwczovL2dpdGh1Yi5jb20vdmFuZXNzYW1ldG9uaW5pLnBuZ2B9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgdGFnPVwic3Ryb25nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge21lbnNhZ2VtLmRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZVNoZWV0PXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMTBweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6ICc4cHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1szMDBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFnPVwic3BhblwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyhuZXcgRGF0ZSgpLnRvTG9jYWxlRGF0ZVN0cmluZygpKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgICAgIHttZW5zYWdlbS50ZXh0b31cbiAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICA8L0JveD5cbiAgICApXG59XG4iXSwibmFtZXMiOlsiQm94IiwiVGV4dCIsIlRleHRGaWVsZCIsIkltYWdlIiwiQnV0dG9uIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImFwcENvbmZpZyIsIkNoYXRQYWdlIiwiaGFuZGxlQWRkaW5nTWVzc2FnZXMiLCJldmVudCIsImtleSIsInByZXZlbnREZWZhdWx0IiwiTWVzc2FnZU9iamVjdCIsImlkIiwibGlzdGFNZW5zYWdlbnMiLCJsZW5ndGgiLCJkZSIsInRleHRvIiwibWVuc2FnZW0iLCJzZXRMaXN0YU1lbnNhZ2VucyIsInNldE1lbnNhZ2VtIiwic3R5bGVTaGVldCIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ0aGVtZSIsImNvbG9ycyIsInByaW1hcnkiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJiYWNrZ3JvdW5kUmVwZWF0IiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kQmxlbmRNb2RlIiwiY29sb3IiLCJuZXV0cmFscyIsImZsZXhEaXJlY3Rpb24iLCJmbGV4IiwiYm94U2hhZG93IiwiYm9yZGVyUmFkaXVzIiwiaGVpZ2h0IiwibWF4V2lkdGgiLCJtYXhIZWlnaHQiLCJwYWRkaW5nIiwiSGVhZGVyIiwicG9zaXRpb24iLCJNZXNzYWdlTGlzdCIsIm1lbnNhZ2VucyIsImFzIiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsIm9uS2V5UHJlc3MiLCJwbGFjZWhvbGRlciIsInR5cGUiLCJ3aWR0aCIsImJvcmRlciIsInJlc2l6ZSIsIm1hcmdpblJpZ2h0IiwibWFyZ2luQm90dG9tIiwidmFyaWFudCIsImNvbG9yVmFyaWFudCIsImxhYmVsIiwiaHJlZiIsInByb3BzIiwiY29uc29sZSIsImxvZyIsInRhZyIsIm92ZXJmbG93IiwibWFwIiwiaG92ZXIiLCJzcmMiLCJmb250U2l6ZSIsIm1hcmdpbkxlZnQiLCJEYXRlIiwidG9Mb2NhbGVEYXRlU3RyaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/chat.jsx\n");

/***/ })

});