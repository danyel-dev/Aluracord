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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ChatPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _skynexui_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @skynexui/components */ \"./node_modules/@skynexui/components/dist/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config.json */ \"./config.json\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nfunction ChatPage() {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n        styleSheet: {\n            display: 'flex',\n            alignItems: 'center',\n            justifyContent: 'center',\n            backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.primary[500],\n            backgroundImage: \"url(https://virtualbackgrounds.site/wp-content/uploads/2020/08/the-matrix-digital-rain.jpg)\",\n            backgroundRepeat: 'no-repeat',\n            backgroundSize: 'cover',\n            backgroundBlendMode: 'multiply',\n            color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[\"000\"]\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n            styleSheet: {\n                display: 'flex',\n                flexDirection: 'column',\n                flex: 1,\n                boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',\n                borderRadius: '5px',\n                backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[700],\n                height: '100%',\n                maxWidth: '95%',\n                maxHeight: '95vh',\n                padding: '32px'\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Header, {}, void 0, false, {\n                    fileName: \"/home/daniel/MEGA/Meus Projetos React/Aluracord/pages/chat.jsx\",\n                    lineNumber: 31,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                    styleSheet: {\n                        position: 'relative',\n                        display: 'flex',\n                        flex: 1,\n                        height: '80%',\n                        backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[600],\n                        flexDirection: 'column',\n                        borderRadius: '5px',\n                        padding: '16px'\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MessageList, {\n                            mensagens: []\n                        }, void 0, false, {\n                            fileName: \"/home/daniel/MEGA/Meus Projetos React/Aluracord/pages/chat.jsx\",\n                            lineNumber: 45,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                            as: \"form\",\n                            styleSheet: {\n                                display: 'flex',\n                                alignItems: 'center'\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.TextField, {\n                                placeholder: \"Insira sua mensagem aqui...\",\n                                type: \"textarea\",\n                                styleSheet: {\n                                    width: '100%',\n                                    border: '0',\n                                    resize: 'none',\n                                    borderRadius: '5px',\n                                    padding: '6px 8px',\n                                    backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[800],\n                                    marginRight: '12px',\n                                    color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[200]\n                                }\n                            }, void 0, false, {\n                                fileName: \"/home/daniel/MEGA/Meus Projetos React/Aluracord/pages/chat.jsx\",\n                                lineNumber: 54,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/daniel/MEGA/Meus Projetos React/Aluracord/pages/chat.jsx\",\n                            lineNumber: 47,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/daniel/MEGA/Meus Projetos React/Aluracord/pages/chat.jsx\",\n                    lineNumber: 32,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/daniel/MEGA/Meus Projetos React/Aluracord/pages/chat.jsx\",\n            lineNumber: 17,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/daniel/MEGA/Meus Projetos React/Aluracord/pages/chat.jsx\",\n        lineNumber: 8,\n        columnNumber: 9\n    }, this));\n};\n_c = ChatPage;\nfunction Header() {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n            styleSheet: {\n                width: '100%',\n                marginBottom: '16px',\n                display: 'flex',\n                alignItems: 'center',\n                justifyContent: 'space-between'\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                    variant: \"heading5\",\n                    children: \"Chat\"\n                }, void 0, false, {\n                    fileName: \"/home/daniel/MEGA/Meus Projetos React/Aluracord/pages/chat.jsx\",\n                    lineNumber: 79,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                    variant: \"tertiary\",\n                    colorVariant: \"neutral\",\n                    label: \"Logout\",\n                    href: \"/\"\n                }, void 0, false, {\n                    fileName: \"/home/daniel/MEGA/Meus Projetos React/Aluracord/pages/chat.jsx\",\n                    lineNumber: 82,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/daniel/MEGA/Meus Projetos React/Aluracord/pages/chat.jsx\",\n            lineNumber: 78,\n            columnNumber: 13\n        }, this)\n    }, void 0, false));\n}\n_c1 = Header;\nfunction MessageList(props) {\n    console.log('MessageList', props);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n        tag: \"ul\",\n        styleSheet: {\n            overflow: 'scroll',\n            display: 'flex',\n            flexDirection: 'column-reverse',\n            flex: 1,\n            color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[\"000\"],\n            marginBottom: '16px'\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n            tag: \"li\",\n            styleSheet: {\n                borderRadius: '5px',\n                padding: '6px',\n                marginBottom: '12px',\n                hover: {\n                    backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[700]\n                }\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                    styleSheet: {\n                        marginBottom: '8px'\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Image, {\n                            styleSheet: {\n                                width: '20px',\n                                height: '20px',\n                                borderRadius: '50%',\n                                display: 'inline-block',\n                                marginRight: '8px'\n                            },\n                            src: \"https://github.com/vanessametonini.png\"\n                        }, void 0, false, {\n                            fileName: \"/home/daniel/MEGA/Meus Projetos React/Aluracord/pages/chat.jsx\",\n                            lineNumber: 125,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                            tag: \"strong\",\n                            children: mensagem.de\n                        }, void 0, false, {\n                            fileName: \"/home/daniel/MEGA/Meus Projetos React/Aluracord/pages/chat.jsx\",\n                            lineNumber: 135,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                            styleSheet: {\n                                fontSize: '10px',\n                                marginLeft: '8px',\n                                color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[300]\n                            },\n                            tag: \"span\",\n                            children: new Date().toLocaleDateString()\n                        }, void 0, false, {\n                            fileName: \"/home/daniel/MEGA/Meus Projetos React/Aluracord/pages/chat.jsx\",\n                            lineNumber: 138,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/daniel/MEGA/Meus Projetos React/Aluracord/pages/chat.jsx\",\n                    lineNumber: 120,\n                    columnNumber: 17\n                }, this),\n                mensagem.texto\n            ]\n        }, mensagem.id, true, {\n            fileName: \"/home/daniel/MEGA/Meus Projetos React/Aluracord/pages/chat.jsx\",\n            lineNumber: 108,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/daniel/MEGA/Meus Projetos React/Aluracord/pages/chat.jsx\",\n        lineNumber: 96,\n        columnNumber: 9\n    }, this));\n}\n_c2 = MessageList;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"ChatPage\");\n$RefreshReg$(_c1, \"Header\");\n$RefreshReg$(_c2, \"MessageList\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBRWQsb0VBQW9DOzRCQUMvQyxDQUFDOzRCQUNEMkMsR0FBRyxFQUFDLENBQU07c0NBRVIsR0FBRyxDQUFDUSxJQUFJLEdBQUdDLGtCQUFrQjs7Ozs7Ozs7Ozs7O2dCQUd0Q0wsUUFBUSxDQUFDTSxLQUFLOztXQXhDVk4sUUFBUSxDQUFDTyxFQUFFOzs7Ozs7Ozs7O0FBNENoQyxDQUFDO01BNURRNUIsV0FBVyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jaGF0LmpzeD8yN2U5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJveCwgVGV4dCwgVGV4dEZpZWxkLCBJbWFnZSwgQnV0dG9uIH0gZnJvbSAnQHNreW5leHVpL2NvbXBvbmVudHMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBhcHBDb25maWcgZnJvbSAnLi4vY29uZmlnLmpzb24nO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENoYXRQYWdlKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxCb3hcbiAgICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLnByaW1hcnlbNTAwXSxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoaHR0cHM6Ly92aXJ0dWFsYmFja2dyb3VuZHMuc2l0ZS93cC1jb250ZW50L3VwbG9hZHMvMjAyMC8wOC90aGUtbWF0cml4LWRpZ2l0YWwtcmFpbi5qcGcpYCxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiAnbm8tcmVwZWF0JywgYmFja2dyb3VuZFNpemU6ICdjb3ZlcicsIGJhY2tncm91bmRCbGVuZE1vZGU6ICdtdWx0aXBseScsXG4gICAgICAgICAgICAgICAgY29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbJzAwMCddXG4gICAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgICAgc3R5bGVTaGVldD17e1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgICAgICAgICAgICAgICBmbGV4OiAxLFxuICAgICAgICAgICAgICAgICAgICBib3hTaGFkb3c6ICcwIDJweCAxMHB4IDAgcmdiKDAgMCAwIC8gMjAlKScsXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzVweCcsXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1s3MDBdLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6ICc5NSUnLFxuICAgICAgICAgICAgICAgICAgICBtYXhIZWlnaHQ6ICc5NXZoJyxcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogJzMycHgnLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVTaGVldD17e1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4OiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnODAlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1s2MDBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICc1cHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogJzE2cHgnLFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cblxuICAgICAgICAgICAgICAgICAgICA8TWVzc2FnZUxpc3QgbWVuc2FnZW5zPXtbXX0gLz5cblxuICAgICAgICAgICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgICAgICAgICAgICBhcz1cImZvcm1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVTaGVldD17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkluc2lyYSBzdWEgbWVuc2FnZW0gYXF1aS4uLlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRhcmVhXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZVNoZWV0PXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogJzAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNpemU6ICdub25lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogJzZweCA4cHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbODAwXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6ICcxMnB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbMjAwXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9Cb3g+XG4gICAgKVxufVxuXG5mdW5jdGlvbiBIZWFkZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxCb3ggc3R5bGVTaGVldD17eyB3aWR0aDogJzEwMCUnLCBtYXJnaW5Cb3R0b206ICcxNnB4JywgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyB9fSA+XG4gICAgICAgICAgICAgICAgPFRleHQgdmFyaWFudD0naGVhZGluZzUnPlxuICAgICAgICAgICAgICAgICAgICBDaGF0XG4gICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD0ndGVydGlhcnknXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yVmFyaWFudD0nbmV1dHJhbCdcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9J0xvZ291dCdcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi9cIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuXG5mdW5jdGlvbiBNZXNzYWdlTGlzdChwcm9wcykge1xuICAgIGNvbnNvbGUubG9nKCdNZXNzYWdlTGlzdCcsIHByb3BzKTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8Qm94XG4gICAgICAgICAgICB0YWc9XCJ1bFwiXG4gICAgICAgICAgICBzdHlsZVNoZWV0PXt7XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6ICdzY3JvbGwnLFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uLXJldmVyc2UnLFxuICAgICAgICAgICAgICAgIGZsZXg6IDEsXG4gICAgICAgICAgICAgICAgY29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbXCIwMDBcIl0sXG4gICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAnMTZweCcsXG4gICAgICAgICAgICB9fVxuICAgICAgICA+XG5cbiAgICAgICAgICAgIDxUZXh0XG4gICAgICAgICAgICAgICAga2V5PXttZW5zYWdlbS5pZH1cbiAgICAgICAgICAgICAgICB0YWc9XCJsaVwiXG4gICAgICAgICAgICAgICAgc3R5bGVTaGVldD17e1xuICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICc1cHgnLFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAnNnB4JyxcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAnMTJweCcsXG4gICAgICAgICAgICAgICAgICAgIGhvdmVyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbNzAwXSxcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICAgICAgICBzdHlsZVNoZWV0PXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206ICc4cHgnLFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZVNoZWV0PXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcyMHB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICcyMHB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAnOHB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2BodHRwczovL2dpdGh1Yi5jb20vdmFuZXNzYW1ldG9uaW5pLnBuZ2B9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0IHRhZz1cInN0cm9uZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAge21lbnNhZ2VtLmRlfVxuICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZVNoZWV0PXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcxMHB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiAnOHB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1szMDBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRhZz1cInNwYW5cIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7KG5ldyBEYXRlKCkudG9Mb2NhbGVEYXRlU3RyaW5nKCkpfVxuICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAge21lbnNhZ2VtLnRleHRvfVxuICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICA8L0JveD5cbiAgICApXG59XG4iXSwibmFtZXMiOlsiQm94IiwiVGV4dCIsIlRleHRGaWVsZCIsIkltYWdlIiwiQnV0dG9uIiwiUmVhY3QiLCJhcHBDb25maWciLCJDaGF0UGFnZSIsInN0eWxlU2hlZXQiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiYmFja2dyb3VuZENvbG9yIiwidGhlbWUiLCJjb2xvcnMiLCJwcmltYXJ5IiwiYmFja2dyb3VuZEltYWdlIiwiYmFja2dyb3VuZFJlcGVhdCIsImJhY2tncm91bmRTaXplIiwiYmFja2dyb3VuZEJsZW5kTW9kZSIsImNvbG9yIiwibmV1dHJhbHMiLCJmbGV4RGlyZWN0aW9uIiwiZmxleCIsImJveFNoYWRvdyIsImJvcmRlclJhZGl1cyIsImhlaWdodCIsIm1heFdpZHRoIiwibWF4SGVpZ2h0IiwicGFkZGluZyIsIkhlYWRlciIsInBvc2l0aW9uIiwiTWVzc2FnZUxpc3QiLCJtZW5zYWdlbnMiLCJhcyIsInBsYWNlaG9sZGVyIiwidHlwZSIsIndpZHRoIiwiYm9yZGVyIiwicmVzaXplIiwibWFyZ2luUmlnaHQiLCJtYXJnaW5Cb3R0b20iLCJ2YXJpYW50IiwiY29sb3JWYXJpYW50IiwibGFiZWwiLCJocmVmIiwicHJvcHMiLCJjb25zb2xlIiwibG9nIiwidGFnIiwib3ZlcmZsb3ciLCJob3ZlciIsInNyYyIsIm1lbnNhZ2VtIiwiZGUiLCJmb250U2l6ZSIsIm1hcmdpbkxlZnQiLCJEYXRlIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwidGV4dG8iLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/chat.jsx\n");

/***/ })

});