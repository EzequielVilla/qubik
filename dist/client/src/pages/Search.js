"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Search = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var styled_1 = __importDefault(require("@emotion/styled"));
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var Breadcrumb_1 = require("../components/Breadcrumb");
var ProductsList_1 = require("../components/ProductsList");
var searchs_1 = require("../hooks/searchs");
var Search = function () {
    var Root = styled_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    height: 90vh;\n    padding: 10vw 10vh;\n    background-color: #f0f0f0;\n  "], ["\n    height: 90vh;\n    padding: 10vw 10vh;\n    background-color: #f0f0f0;\n  "])));
    var _a = (0, react_router_dom_1.useSearchParams)(), param = _a[0], setParam = _a[1];
    var query = param.get("query");
    var _b = (0, searchs_1.useGetProductsWithQuery)(), data = _b.data, setQ = _b.setQ;
    var itemsData = data === null || data === void 0 ? void 0 : data.items;
    var categories = data === null || data === void 0 ? void 0 : data.categories;
    (0, react_1.useEffect)(function () {
        query ? setQ(query) : "loading";
    });
    return ((0, jsx_runtime_1.jsxs)(Root, { children: [(0, jsx_runtime_1.jsx)(Breadcrumb_1.Breadcrumb, { categories: categories }), (0, jsx_runtime_1.jsx)(ProductsList_1.ProductsList, { items: itemsData, categories: categories })] }));
};
exports.Search = Search;
var templateObject_1;
