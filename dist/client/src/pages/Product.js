"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var styled_1 = __importDefault(require("@emotion/styled"));
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var Breadcrumb_1 = require("../components/Breadcrumb");
var ProductDescription_1 = require("../components/ProductDescription");
var SkeletonDescription_1 = require("../components/ProductDescription/SkeletonDescription");
var searchs_1 = require("../hooks/searchs");
var Product = function () {
    var Root = styled_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    height: 90vh 100%;\n    padding: 10vw 10vh;\n    background-color: #f0f0f0;\n  "], ["\n    height: 90vh 100%;\n    padding: 10vw 10vh;\n    background-color: #f0f0f0;\n  "])));
    var id = (0, react_router_dom_1.useParams)().id;
    var _a = (0, searchs_1.useGetProduct)(), data = _a.data, setId = _a.setId;
    var category = data === null || data === void 0 ? void 0 : data.item.category;
    (0, react_1.useEffect)(function () {
        id ? setId(id) : "loading";
    });
    return ((0, jsx_runtime_1.jsxs)(Root, { children: [(0, jsx_runtime_1.jsx)(Breadcrumb_1.Breadcrumb, { category: category }), !data ? ((0, jsx_runtime_1.jsx)(SkeletonDescription_1.SkeletonDescription, {})) : ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)(ProductDescription_1.ProductDescription, { item: data === null || data === void 0 ? void 0 : data.item }) }))] }));
};
exports.Product = Product;
var templateObject_1;
