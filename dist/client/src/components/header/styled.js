"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledLogo = exports.FormInput = exports.SearchForm = exports.Root = void 0;
var styled_1 = __importDefault(require("@emotion/styled"));
var icons_1 = require("../../ui/icons");
exports.Root = styled_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  height: 70px;\n  background-color: #ffdb15;\n  align-items: center;\n  justify-items: center;\n"], ["\n  display: flex;\n  height: 70px;\n  background-color: #ffdb15;\n  align-items: center;\n  justify-items: center;\n"])));
exports.SearchForm = styled_1.default.form(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  width: 80%;\n  max-width: 800px;\n  margin-right: 10px;\n  border: 2px solid black;\n"], ["\n  display: flex;\n  width: 80%;\n  max-width: 800px;\n  margin-right: 10px;\n  border: 2px solid black;\n"])));
exports.FormInput = styled_1.default.input(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  width: 100%;\n  font-size: 20px;\n  border: none;\n  border-right: 1px solid black;\n\n  outline: none;\n"], ["\n  width: 100%;\n  font-size: 20px;\n  border: none;\n  border-right: 1px solid black;\n\n  outline: none;\n"])));
exports.StyledLogo = (0, styled_1.default)(icons_1.MLALogo)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  min-width: 50px;\n  max-width: 50px;\n  max-height: 50px;\n  min-height: 50px;\n\n  margin-left: 40px;\n  margin-right: 30px;\n"], ["\n  min-width: 50px;\n  max-width: 50px;\n  max-height: 50px;\n  min-height: 50px;\n\n  margin-left: 40px;\n  margin-right: 30px;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
