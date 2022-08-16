"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InfoContainer = exports.DescriptionContainer = exports.ImageContainer = exports.Root = void 0;
var styled_1 = __importDefault(require("@emotion/styled"));
exports.Root = styled_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: grid;\n  width: auto;\n  grid-template-columns: 1fr 0.05fr 1fr;\n  grid-template-rows: repeat(2, 1fr);\n  grid-column-gap: 0px;\n  grid-row-gap: 0px;\n  background-color: white;\n  height: 70vh 100%;\n"], ["\n  display: grid;\n  width: auto;\n  grid-template-columns: 1fr 0.05fr 1fr;\n  grid-template-rows: repeat(2, 1fr);\n  grid-column-gap: 0px;\n  grid-row-gap: 0px;\n  background-color: white;\n  height: 70vh 100%;\n"])));
exports.ImageContainer = styled_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  grid-area: 1 / 1 / 2 / 2;\n  display: grid;\n  grid-template-columns: 1fr;\n  justify-items: center;\n  align-items: center;\n"], ["\n  grid-area: 1 / 1 / 2 / 2;\n  display: grid;\n  grid-template-columns: 1fr;\n  justify-items: center;\n  align-items: center;\n"])));
exports.DescriptionContainer = styled_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  grid-area: 2 / 1 / 3 / 2;\n"], ["\n  grid-area: 2 / 1 / 3 / 2;\n"])));
exports.InfoContainer = styled_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  grid-area: 1 / 3 / 2 / 4;\n  display: grid;\n  justify-items: center;\n  align-items: center;\n  grid-template-rows: 1fr 1fr 1fr 1fr;\n"], ["\n  grid-area: 1 / 3 / 2 / 4;\n  display: grid;\n  justify-items: center;\n  align-items: center;\n  grid-template-rows: 1fr 1fr 1fr 1fr;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
