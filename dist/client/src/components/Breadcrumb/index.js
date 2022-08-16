"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Breadcrumb = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var material_1 = require("@mui/material");
var react_1 = require("react");
var breadcrumb_1 = require("../../lib/breadcrumb");
var Text_1 = require("../../ui/Text");
var styled_1 = require("./styled");
var Breadcrumb = function (props) {
    var _a = (0, react_1.useState)(), path = _a[0], setPath = _a[1];
    (0, react_1.useEffect)(function () {
        if (props.categories) {
            var categories = props.categories;
            (0, breadcrumb_1.getInfoForProductsBreadcrumb)(categories).then(function (pathFromRoot) {
                setPath(pathFromRoot);
            });
            return;
        }
        if (props.category) {
            var category = props.category;
            (0, breadcrumb_1.getInfoForItemBreadcrumb)(category).then(function (pathFromRoot) {
                setPath(pathFromRoot);
            });
            return;
        }
    }, []);
    return ((0, jsx_runtime_1.jsx)(styled_1.Root, { children: !path ? ((0, jsx_runtime_1.jsx)(material_1.Skeleton, { animation: "wave", variant: "rectangular", width: "inherit", height: "inherit" })) : ((0, jsx_runtime_1.jsx)(material_1.Breadcrumbs, { children: path.map(function (item, i) {
                return (0, jsx_runtime_1.jsx)(Text_1.Text, { children: item.name }, i);
            }) })) }));
};
exports.Breadcrumb = Breadcrumb;
