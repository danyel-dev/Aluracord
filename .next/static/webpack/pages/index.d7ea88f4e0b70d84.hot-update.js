"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PaginaInicial; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _skynexui_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @skynexui/components */ \"./node_modules/@skynexui/components/dist/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config.json */ \"./config.json\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Title(props) {\n    var Tag = props.tag || 'h1';\n    var text = props.children;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Tag, {\n                className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([\n                    [\n                        \"76626aace5b39505\",\n                        [\n                            Tag,\n                            _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.neutrals[\"000\"]\n                        ]\n                    ]\n                ]),\n                /*#__PURE__*/ children: text\n            }, void 0, false, {\n                fileName: \"/home/daniel/MEGA/Meus Projetos React/Aluracord/pages/index.jsx\",\n                lineNumber: 13,\n                columnNumber: 13\n            }, this),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"76626aace5b39505\",\n                dynamic: [\n                    Tag,\n                    _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.neutrals[\"000\"]\n                ],\n                children: \"\".concat(Tag, \".__jsx-style-dynamic-selector{color:\").concat(_config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.neutrals[\"000\"], \"}\")\n            }, void 0, false, void 0, this)\n        ]\n    }, void 0, true));\n}\n_c = Title;\nfunction PaginaInicial() {\n    var handleUsername = function handleUsername(event) {\n        setUsername(event.target.value);\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)('peas'), username = ref[0], setUsername = ref[1];\n    var roteamento = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Box, {\n        styleSheet: {\n            display: 'flex',\n            alignItems: 'center',\n            justifyContent: 'center',\n            backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.primary[500],\n            backgroundImage: 'url(https://virtualbackgrounds.site/wp-content/uploads/2020/08/the-matrix-digital-rain.jpg)',\n            backgroundRepeat: 'no-repeat',\n            backgroundSize: 'cover',\n            backgroundBlendMode: 'multiply'\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Box, {\n            styleSheet: {\n                display: 'flex',\n                alignItems: 'center',\n                justifyContent: 'space-between',\n                flexDirection: {\n                    xs: 'column',\n                    sm: 'row'\n                },\n                width: '100%',\n                maxWidth: '700px',\n                borderRadius: '5px',\n                padding: '32px',\n                margin: '16px',\n                boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',\n                backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.neutrals[700]\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                    as: \"form\",\n                    onSubmit: function onSubmit(event) {\n                        event.preventDefault();\n                        roteamento.push('/chat');\n                    },\n                    styleSheet: {\n                        display: 'flex',\n                        flexDirection: 'column',\n                        alignItems: 'center',\n                        justifyContent: 'center',\n                        width: {\n                            xs: '100%',\n                            sm: '50%'\n                        },\n                        textAlign: 'center',\n                        marginBottom: '32px'\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Title, {\n                            tag: \"h2\",\n                            children: \"Boas vindas de volta!\"\n                        }, void 0, false, {\n                            fileName: \"/home/daniel/MEGA/Meus Projetos React/Aluracord/pages/index.jsx\",\n                            lineNumber: 70,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                            variant: \"body3\",\n                            styleSheet: {\n                                marginBottom: '32px',\n                                color: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.neutrals[300]\n                            },\n                            children: _config_json__WEBPACK_IMPORTED_MODULE_5__.name\n                        }, void 0, false, {\n                            fileName: \"/home/daniel/MEGA/Meus Projetos React/Aluracord/pages/index.jsx\",\n                            lineNumber: 71,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.TextField, {\n                            value: username,\n                            onChange: handleUsername,\n                            fullWidth: true,\n                            textFieldColors: {\n                                neutral: {\n                                    textColor: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.neutrals[200],\n                                    mainColor: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.neutrals[900],\n                                    mainColorHighlight: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.primary[500],\n                                    backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.neutrals[800]\n                                }\n                            }\n                        }, void 0, false, {\n                            fileName: \"/home/daniel/MEGA/Meus Projetos React/Aluracord/pages/index.jsx\",\n                            lineNumber: 75,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                            type: \"submit\",\n                            label: \"Entrar\",\n                            fullWidth: true,\n                            buttonColors: {\n                                contrastColor: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.neutrals[\"000\"],\n                                mainColor: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.primary[500],\n                                mainColorLight: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.primary[400],\n                                mainColorStrong: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.primary[600]\n                            }\n                        }, void 0, false, {\n                            fileName: \"/home/daniel/MEGA/Meus Projetos React/Aluracord/pages/index.jsx\",\n                            lineNumber: 88,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/daniel/MEGA/Meus Projetos React/Aluracord/pages/index.jsx\",\n                    lineNumber: 59,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                    styleSheet: {\n                        display: 'flex',\n                        flexDirection: 'column',\n                        alignItems: 'center',\n                        maxWidth: '200px',\n                        padding: '16px',\n                        backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.neutrals[800],\n                        border: '1px solid',\n                        borderColor: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.neutrals[999],\n                        borderRadius: '10px',\n                        flex: 1,\n                        minHeight: '240px'\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Image, {\n                            styleSheet: {\n                                borderRadius: '50%',\n                                marginBottom: '16px'\n                            },\n                            src: \"https://github.com/\".concat(username, \".png\")\n                        }, void 0, false, {\n                            fileName: \"/home/daniel/MEGA/Meus Projetos React/Aluracord/pages/index.jsx\",\n                            lineNumber: 119,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                            variant: \"body4\",\n                            styleSheet: {\n                                color: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.neutrals[200],\n                                backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.neutrals[900],\n                                padding: '3px 10px',\n                                borderRadius: '1000px'\n                            },\n                            children: username\n                        }, void 0, false, {\n                            fileName: \"/home/daniel/MEGA/Meus Projetos React/Aluracord/pages/index.jsx\",\n                            lineNumber: 126,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/daniel/MEGA/Meus Projetos React/Aluracord/pages/index.jsx\",\n                    lineNumber: 104,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/daniel/MEGA/Meus Projetos React/Aluracord/pages/index.jsx\",\n            lineNumber: 43,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/daniel/MEGA/Meus Projetos React/Aluracord/pages/index.jsx\",\n        lineNumber: 35,\n        columnNumber: 9\n    }, this));\n};\n_s(PaginaInicial, \"whNZu0rPcA88kvh69LKle4lovww=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c1 = PaginaInicial;\nvar _c, _c1;\n$RefreshReg$(_c, \"Title\");\n$RefreshReg$(_c1, \"PaginaInicial\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUM7Z0NBQ1RlLFlBQVksRUFBRSxDQUFLO2dDQUNuQlMsWUFBWSxFQUFFLENBQU07NEJBQ3hCLENBQUM7NEJBQ0RxQixHQUFHLEVBQUcsQ0FBbUIscUJBQVcsTUFBSSxDQUFiL0MsUUFBUSxFQUFDLENBQUk7Ozs7OztvR0FFM0NyQixzREFBSTs0QkFDRGdELE9BQU8sRUFBQyxDQUFPOzRCQUNmekIsVUFBVSxFQUFFLENBQUM7Z0NBQ1QwQixLQUFLLEVBQUU1QyxvRUFBb0M7Z0NBQzNDc0IsZUFBZSxFQUFFdEIsb0VBQW9DO2dDQUNyRGtDLE9BQU8sRUFBRSxDQUFVO2dDQUNuQkQsWUFBWSxFQUFFLENBQVE7NEJBQzFCLENBQUM7c0NBRUFqQixRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9qQyxDQUFDO0dBcEh1Qk4sYUFBYTs7UUFFZFgsa0RBQVM7OztNQUZSVyxhQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzeD83ZmZkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJveCwgQnV0dG9uLCBUZXh0LCBUZXh0RmllbGQsIEltYWdlIH0gZnJvbSAnQHNreW5leHVpL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgYXBwQ29uZmlnIGZyb20gJy4uL2NvbmZpZy5qc29uJ1xuXG5cbmZ1bmN0aW9uIFRpdGxlKHByb3BzKSB7XG4gICAgY29uc3QgVGFnID0gcHJvcHMudGFnIHx8ICdoMSdcbiAgICBjb25zdCB0ZXh0ID0gcHJvcHMuY2hpbGRyZW5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8VGFnPnt0ZXh0fTwvVGFnPlxuXG4gICAgICAgICAgICA8c3R5bGUganN4PiB7YFxuICAgICAgICAgICAgICAgICR7VGFnfSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAke2FwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbJzAwMCddfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfVxuICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPC8+XG4gICAgKTtcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYWdpbmFJbmljaWFsKCkge1xuICAgIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gdXNlU3RhdGUoJ3BlYXMnKSBcbiAgICBjb25zdCByb3RlYW1lbnRvID0gdXNlUm91dGVyKCk7XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVVc2VybmFtZShldmVudCkge1xuICAgICAgICBzZXRVc2VybmFtZShldmVudC50YXJnZXQudmFsdWUpXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEJveFxuICAgICAgICAgICAgc3R5bGVTaGVldD17e1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMucHJpbWFyeVs1MDBdLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogJ3VybChodHRwczovL3ZpcnR1YWxiYWNrZ3JvdW5kcy5zaXRlL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIwLzA4L3RoZS1tYXRyaXgtZGlnaXRhbC1yYWluLmpwZyknLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRSZXBlYXQ6ICduby1yZXBlYXQnLCBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJywgYmFja2dyb3VuZEJsZW5kTW9kZTogJ211bHRpcGx5JyxcbiAgICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgICBzdHlsZVNoZWV0PXt7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gICAgICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHhzOiAnY29sdW1uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNtOiAncm93JyxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJywgbWF4V2lkdGg6ICc3MDBweCcsXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzVweCcsIHBhZGRpbmc6ICczMnB4JywgbWFyZ2luOiAnMTZweCcsXG4gICAgICAgICAgICAgICAgICAgIGJveFNoYWRvdzogJzAgMnB4IDEwcHggMCByZ2IoMCAwIDAgLyAyMCUpJyxcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzcwMF0sXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7LyogRm9ybXVsw6FyaW8gKi99XG4gICAgICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICAgICAgICBhcz1cImZvcm1cIlxuICAgICAgICAgICAgICAgICAgICBvblN1Ym1pdD17ZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3RlYW1lbnRvLnB1c2goJy9jaGF0Jyk7XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogeyB4czogJzEwMCUnLCBzbTogJzUwJScgfSwgdGV4dEFsaWduOiAnY2VudGVyJywgbWFyZ2luQm90dG9tOiAnMzJweCcsXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8VGl0bGUgdGFnPVwiaDJcIj5Cb2FzIHZpbmRhcyBkZSB2b2x0YSE8L1RpdGxlPlxuICAgICAgICAgICAgICAgICAgICA8VGV4dCB2YXJpYW50PVwiYm9keTNcIiBzdHlsZVNoZWV0PXt7IG1hcmdpbkJvdHRvbTogJzMycHgnLCBjb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1szMDBdIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAge2FwcENvbmZpZy5uYW1lfVxuICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XG5cbiAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyB1c2VybmFtZSB9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17IGhhbmRsZVVzZXJuYW1lIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEZpZWxkQ29sb3JzPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV1dHJhbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0Q29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbMjAwXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFpbkNvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzkwMF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1haW5Db2xvckhpZ2hsaWdodDogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5wcmltYXJ5WzUwMF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1s4MDBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSdzdWJtaXQnXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nRW50cmFyJ1xuICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICAgICAgICBidXR0b25Db2xvcnM9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250cmFzdENvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzW1wiMDAwXCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1haW5Db2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5wcmltYXJ5Wyc1MDAnXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYWluQ29sb3JMaWdodDogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5wcmltYXJ5Wyc0MDAnXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYWluQ29sb3JTdHJvbmc6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMucHJpbWFyeVsnNjAwJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgIHsvKiBGb3JtdWzDoXJpbyAqL31cblxuXG4gICAgICAgICAgICAgICAgey8qIFBob3RvIEFyZWEgKi99XG4gICAgICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICAgICAgICBzdHlsZVNoZWV0PXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6ICcyMDBweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAnMTZweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbODAwXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1s5OTldLFxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMTBweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4OiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWluSGVpZ2h0OiAnMjQwcHgnLFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZVNoZWV0PXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206ICcxNnB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2BodHRwczovL2dpdGh1Yi5jb20vJHt1c2VybmFtZX0ucG5nYH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPFRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJib2R5NFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZVNoZWV0PXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbMjAwXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbOTAwXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAnM3B4IDEwcHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzEwMDBweCdcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt1c2VybmFtZX1cbiAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgIHsvKiBQaG90byBBcmVhICovfVxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvQm94PlxuICAgICk7XG59XG4iXSwibmFtZXMiOlsiQm94IiwiQnV0dG9uIiwiVGV4dCIsIlRleHRGaWVsZCIsIkltYWdlIiwidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJhcHBDb25maWciLCJUaXRsZSIsInByb3BzIiwiVGFnIiwidGFnIiwidGV4dCIsImNoaWxkcmVuIiwidGhlbWUiLCJjb2xvcnMiLCJuZXV0cmFscyIsIlBhZ2luYUluaWNpYWwiLCJoYW5kbGVVc2VybmFtZSIsImV2ZW50Iiwic2V0VXNlcm5hbWUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInVzZXJuYW1lIiwicm90ZWFtZW50byIsInN0eWxlU2hlZXQiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiYmFja2dyb3VuZENvbG9yIiwicHJpbWFyeSIsImJhY2tncm91bmRJbWFnZSIsImJhY2tncm91bmRSZXBlYXQiLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRCbGVuZE1vZGUiLCJmbGV4RGlyZWN0aW9uIiwieHMiLCJzbSIsIndpZHRoIiwibWF4V2lkdGgiLCJib3JkZXJSYWRpdXMiLCJwYWRkaW5nIiwibWFyZ2luIiwiYm94U2hhZG93IiwiYXMiLCJvblN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwicHVzaCIsInRleHRBbGlnbiIsIm1hcmdpbkJvdHRvbSIsInZhcmlhbnQiLCJjb2xvciIsIm5hbWUiLCJvbkNoYW5nZSIsImZ1bGxXaWR0aCIsInRleHRGaWVsZENvbG9ycyIsIm5ldXRyYWwiLCJ0ZXh0Q29sb3IiLCJtYWluQ29sb3IiLCJtYWluQ29sb3JIaWdobGlnaHQiLCJ0eXBlIiwibGFiZWwiLCJidXR0b25Db2xvcnMiLCJjb250cmFzdENvbG9yIiwibWFpbkNvbG9yTGlnaHQiLCJtYWluQ29sb3JTdHJvbmciLCJib3JkZXIiLCJib3JkZXJDb2xvciIsImZsZXgiLCJtaW5IZWlnaHQiLCJzcmMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.jsx\n");

/***/ })

});