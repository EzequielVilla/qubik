"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConditionContainer = exports.PriceTitleContainer = exports.ImageContainer = exports.Root = void 0;
var styled_1 = __importDefault(require("@emotion/styled"));
exports.Root = styled_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: grid;\n  grid-template-columns: 0.5fr 1fr 0.5fr;\n  padding: 20px;\n  border-bottom: solid 1px black;\n  height: 100px;\n  cursor: pointer;\n"], ["\n  display: grid;\n  grid-template-columns: 0.5fr 1fr 0.5fr;\n  padding: 20px;\n  border-bottom: solid 1px black;\n  height: 100px;\n  cursor: pointer;\n"])));
exports.ImageContainer = styled_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject([""], [""])));
exports.PriceTitleContainer = styled_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n"], ["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n"])));
exports.ConditionContainer = styled_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  align-self: center;\n  justify-self: center;\n"], ["\n  align-self: center;\n  justify-self: center;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
