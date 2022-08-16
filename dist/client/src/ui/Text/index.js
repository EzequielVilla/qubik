"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Text = exports.BoldSubtitle = exports.Subtitle = exports.BoldPrice = exports.Price = exports.BoldTitle = exports.Title = void 0;
var styled_1 = __importDefault(require("@emotion/styled"));
exports.Title = styled_1.default.h1(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin: 0px;\n  font-size: 20px;\n"], ["\n  margin: 0px;\n  font-size: 20px;\n"])));
exports.BoldTitle = (0, styled_1.default)(exports.Title)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  font-size: 22px;\n  font-weight: bold;\n"], ["\n  font-size: 22px;\n  font-weight: bold;\n"])));
exports.Price = styled_1.default.p(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  margin: 0px;\n\n  font-size: 22px;\n  font-weight: 500;\n"], ["\n  margin: 0px;\n\n  font-size: 22px;\n  font-weight: 500;\n"])));
exports.BoldPrice = (0, styled_1.default)(exports.Price)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  font-size: 36px;\n"], ["\n  font-size: 36px;\n"])));
exports.Subtitle = styled_1.default.h2(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  margin: 0px;\n"], ["\n  margin: 0px;\n"])));
exports.BoldSubtitle = (0, styled_1.default)(exports.Subtitle)(templateObject_6 || (templateObject_6 = __makeTemplateObject([""], [""])));
exports.Text = styled_1.default.p(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  margin: 0px;\n"], ["\n  margin: 0px;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
