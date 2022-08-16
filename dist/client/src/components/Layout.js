"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Layout = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_router_1 = require("react-router");
var Header_1 = require("./Header");
function Layout() {
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(Header_1.Header, {}), (0, jsx_runtime_1.jsx)(react_router_1.Outlet, {})] }));
}
exports.Layout = Layout;
