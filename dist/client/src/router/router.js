"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRoutes = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_router_dom_1 = require("react-router-dom");
var Layout_1 = require("../components/Layout");
var App_1 = __importDefault(require("../pages/App"));
var Product_1 = require("../pages/Product");
var Search_1 = require("../pages/Search");
var AppRoutes = function () {
    return ((0, jsx_runtime_1.jsx)(react_router_dom_1.Routes, { children: (0, jsx_runtime_1.jsxs)(react_router_dom_1.Route, __assign({ path: "/", element: (0, jsx_runtime_1.jsx)(Layout_1.Layout, {}) }, { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { index: true, element: (0, jsx_runtime_1.jsx)(App_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "items", element: (0, jsx_runtime_1.jsx)(Search_1.Search, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "items/:id", element: (0, jsx_runtime_1.jsx)(Product_1.Product, {}) })] })) }));
};
exports.AppRoutes = AppRoutes;
