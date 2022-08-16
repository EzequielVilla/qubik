"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SkeletonDescription = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var material_1 = require("@mui/material");
var SkeletonDescription_styled_1 = require("./SkeletonDescription.styled");
var SkeletonDescription = function () {
    return ((0, jsx_runtime_1.jsx)(SkeletonDescription_styled_1.Root, { children: (0, jsx_runtime_1.jsx)(material_1.Skeleton, { variant: "rectangular", width: "80wh", height: "80vh" }) }));
};
exports.SkeletonDescription = SkeletonDescription;
