"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SkeletonCard = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var material_1 = require("@mui/material");
var styled_1 = require("./styled");
var SkeletonCard = function () {
    return ((0, jsx_runtime_1.jsxs)(styled_1.Root, { children: [(0, jsx_runtime_1.jsx)(styled_1.ImageContainer, { children: (0, jsx_runtime_1.jsx)(material_1.Skeleton, { animation: "wave", variant: "rectangular", width: "90px", height: "90px" }) }), (0, jsx_runtime_1.jsxs)(styled_1.PriceTitleContainer, { children: [(0, jsx_runtime_1.jsx)(material_1.Skeleton, { variant: "rectangular", width: "inherith", height: "22px" }), (0, jsx_runtime_1.jsx)(material_1.Skeleton, { variant: "rectangular", width: "inherith", height: "50px" })] }), (0, jsx_runtime_1.jsx)(styled_1.ConditionContainer, { children: (0, jsx_runtime_1.jsx)(material_1.Skeleton, { variant: "rectangular", width: "40px", height: "20px" }) })] }));
};
exports.SkeletonCard = SkeletonCard;
