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
exports.ProductDescription = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var Buttons_1 = require("../../ui/Buttons");
var Imagen_1 = require("../../ui/Imagen");
var Text_1 = require("../../ui/Text");
var styled_1 = require("./styled");
var ProductDescription = function (props) {
    var _a = props.item, condition = _a.condition, picture = _a.picture, price = _a.price, title = _a.title, sold_quantity = _a.sold_quantity, description = _a.description;
    var condicion = condition === "new" ? "nuevo" : "usado";
    return ((0, jsx_runtime_1.jsxs)(styled_1.Root, { children: [(0, jsx_runtime_1.jsx)(styled_1.ImageContainer, { children: (0, jsx_runtime_1.jsx)(Imagen_1.ProductImagen, { src: picture, height: "150px" }) }), (0, jsx_runtime_1.jsxs)(styled_1.DescriptionContainer, { children: [(0, jsx_runtime_1.jsx)(Text_1.BoldSubtitle, __assign({ style: { marginBottom: "10px" } }, { children: "Descripci\u00F3n del producto" })), (0, jsx_runtime_1.jsx)(Text_1.Text, { children: description })] }), (0, jsx_runtime_1.jsxs)(styled_1.InfoContainer, { children: [(0, jsx_runtime_1.jsxs)(Text_1.Text, { children: [condicion, "-", sold_quantity, " vendidos"] }), (0, jsx_runtime_1.jsx)(Text_1.BoldSubtitle, { children: title }), (0, jsx_runtime_1.jsxs)(Text_1.BoldPrice, { children: [price.currency, " ", price.amount] }), (0, jsx_runtime_1.jsx)(Buttons_1.BuyButton, { children: "Comprar" })] })] }));
};
exports.ProductDescription = ProductDescription;
