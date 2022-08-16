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
exports.Card = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var Imagen_1 = require("../../ui/Imagen");
var Text_1 = require("../../ui/Text");
var styled_1 = require("./styled");
var Card = function (props) {
    var _a = props.product, condition = _a.condition, free_shipping = _a.free_shipping, picture = _a.picture, price = _a.price, title = _a.title;
    var clickHandler = function () {
        props.onClick();
    };
    return ((0, jsx_runtime_1.jsxs)(styled_1.Root, __assign({ onClick: clickHandler }, { children: [(0, jsx_runtime_1.jsx)(styled_1.ImageContainer, { children: (0, jsx_runtime_1.jsx)(Imagen_1.CardImagen, { src: picture }) }), (0, jsx_runtime_1.jsxs)(styled_1.PriceTitleContainer, { children: [(0, jsx_runtime_1.jsxs)(Text_1.Price, { children: [price.currency, " ", price.amount] }), (0, jsx_runtime_1.jsx)(Text_1.Title, { children: title })] }), (0, jsx_runtime_1.jsx)(styled_1.ConditionContainer, { children: (0, jsx_runtime_1.jsx)(Text_1.Text, { children: condition }) })] })));
};
exports.Card = Card;
