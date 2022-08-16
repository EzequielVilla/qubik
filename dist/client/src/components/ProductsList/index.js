"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsList = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_router_dom_1 = require("react-router-dom");
var Card_1 = require("../Card");
var SkeletonCard_1 = require("../Card/SkeletonCard");
var styled_1 = require("./styled");
var ProductsList = function (props) {
    var items = props.items;
    var navigate = (0, react_router_dom_1.useNavigate)();
    function clickHandler(id) {
        navigate("/items/".concat(id));
    }
    return ((0, jsx_runtime_1.jsx)(styled_1.Root, { children: !items ? ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: __spreadArray([], Array(4), true).map(function (x, i) { return ((0, jsx_runtime_1.jsx)(SkeletonCard_1.SkeletonCard, {}, i)); }) })) : ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: items.map(function (product, index) {
                if (index < 4) {
                    return ((0, jsx_runtime_1.jsx)(Card_1.Card, { product: product, onClick: function () { return clickHandler(product.id); } }, product.id));
                }
            }) })) }));
};
exports.ProductsList = ProductsList;
