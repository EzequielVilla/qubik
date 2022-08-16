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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Header = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_router_dom_1 = require("react-router-dom");
var Buttons_1 = require("../../ui/Buttons");
var icons_1 = require("../../ui/icons");
var styled_1 = require("./styled");
var Header = function () {
    var navigate = (0, react_router_dom_1.useNavigate)();
    var submitHandler = function (e) {
        var query = e.currentTarget.value;
        navigate("/items?search=".concat(query));
    };
    return ((0, jsx_runtime_1.jsxs)(styled_1.Root, { children: [(0, jsx_runtime_1.jsx)(styled_1.StyledLogo, {}), (0, jsx_runtime_1.jsxs)(styled_1.SearchForm, __assign({ onSubmit: function (e) { return submitHandler(e); } }, { children: [(0, jsx_runtime_1.jsx)(styled_1.FormInput, { name: "query", type: "text", placeholder: "Celular" }), (0, jsx_runtime_1.jsx)(Buttons_1.SearchButtonBox, __assign({ type: "submit" }, { children: (0, jsx_runtime_1.jsx)(icons_1.SearchIcon, {}) }))] }))] }));
};
exports.Header = Header;
