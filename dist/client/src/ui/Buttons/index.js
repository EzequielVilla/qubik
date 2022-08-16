"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchButtonBox = exports.BuyButton = void 0;
var styled_1 = __importDefault(require("@emotion/styled"));
exports.BuyButton = styled_1.default.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background-color: #3483fa;\n  border-color: transparent;\n  color: #fff;\n  cursor: pointer;\n  border-radius: 6px;\n  padding: 0 24px;\n  text-align: center;\n  width: 230px;\n  height: 50px;\n"], ["\n  background-color: #3483fa;\n  border-color: transparent;\n  color: #fff;\n  cursor: pointer;\n  border-radius: 6px;\n  padding: 0 24px;\n  text-align: center;\n  width: 230px;\n  height: 50px;\n"])));
exports.SearchButtonBox = styled_1.default.button(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 45px;\n  height: 40px;\n  cursor: pointer;\n  border: none;\n  background-color: #f0f0f0;\n"], ["\n  width: 45px;\n  height: 40px;\n  cursor: pointer;\n  border: none;\n  background-color: #f0f0f0;\n"])));
var templateObject_1, templateObject_2;
