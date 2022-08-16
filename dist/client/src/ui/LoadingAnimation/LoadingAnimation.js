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
exports.LoadingAnimation = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var LoadingAnimation_css_1 = __importDefault(require("./LoadingAnimation.css"));
function LoadingAnimation() {
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: LoadingAnimation_css_1.default["lds-spinner"] }, { children: [(0, jsx_runtime_1.jsx)("div", {}), (0, jsx_runtime_1.jsx)("div", {}), (0, jsx_runtime_1.jsx)("div", {}), (0, jsx_runtime_1.jsx)("div", {}), (0, jsx_runtime_1.jsx)("div", {}), (0, jsx_runtime_1.jsx)("div", {}), (0, jsx_runtime_1.jsx)("div", {}), (0, jsx_runtime_1.jsx)("div", {}), (0, jsx_runtime_1.jsx)("div", {}), (0, jsx_runtime_1.jsx)("div", {}), (0, jsx_runtime_1.jsx)("div", {}), (0, jsx_runtime_1.jsx)("div", {})] })));
}
exports.LoadingAnimation = LoadingAnimation;
