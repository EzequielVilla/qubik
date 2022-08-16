"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useGetProduct = exports.useGetProductsWithQuery = void 0;
var immutable_1 = __importDefault(require("swr/immutable"));
var react_1 = require("react");
var api_1 = require("../lib/api");
var useGetProductsWithQuery = function () {
    var _a = (0, react_1.useState)(), q = _a[0], setQ = _a[1];
    var _b = (0, immutable_1.default)(q ? ["items?q=".concat(q)] : null, api_1.getConfig), data = _b.data, error = _b.error;
    return { data: data, setQ: setQ };
};
exports.useGetProductsWithQuery = useGetProductsWithQuery;
var useGetProduct = function () {
    var _a = (0, react_1.useState)(), id = _a[0], setId = _a[1];
    var _b = (0, immutable_1.default)(id ? ["items/".concat(id)] : null, api_1.getConfig), data = _b.data, error = _b.error;
    return { data: data, setId: setId };
};
exports.useGetProduct = useGetProduct;
