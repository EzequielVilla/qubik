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
exports.processItem = exports.processProducts = void 0;
var helpers_1 = require("./helpers");
var processProducts = function (products) {
    var author = (0, helpers_1.getAuthor)();
    var categories = [];
    var infoPerItem = products.map(function (item) {
        categories.push(item.category_id);
        var info = (0, helpers_1.getDataPerItem)(item);
        return info;
    });
    var data = {
        author: author,
        categories: categories,
        productsData: infoPerItem,
    };
    return data;
};
exports.processProducts = processProducts;
var processItem = function (item) {
    var author = (0, helpers_1.getAuthor)();
    var data = (0, helpers_1.getDataPerItem)(item);
    var soldQuantity = item.sold_quantity;
    var info = __assign(__assign({}, data), { sold_quantity: soldQuantity });
    return { author: author, item: info };
};
exports.processItem = processItem;
