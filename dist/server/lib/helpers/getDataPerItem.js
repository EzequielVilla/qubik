"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDataPerItem = void 0;
var getDataPerItem = function (item) {
    var price = item.price;
    var decimals = getDecimal(price);
    var data = {
        id: item.id,
        title: item.title,
        price: {
            currency: item.currency_id,
            amount: price,
            decimals: decimals,
        },
        picture: item.thumbnail,
        condition: item.condition,
        free_shipping: item.shipping.free_shipping,
    };
    return data;
};
exports.getDataPerItem = getDataPerItem;
function getDecimal(price) {
    if (Number.isInteger(price))
        return 0;
    var decimalStr = price.toString().split(".")[1];
    return decimalStr.length;
}
3;
