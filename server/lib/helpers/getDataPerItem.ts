export interface Item {
  id: string;
  title: string;
  price: {
    currency: string;
    amount: number;
    decimals: number;
  };
  picture: string;
  condition: string;
  free_shipping: boolean;
}

export const getDataPerItem = (item: any): Item => {
  const price = item.price;
  const decimals = getDecimal(price);
  const data: Item = {
    id: item.id,
    title: item.title,
    price: {
      currency: item.currency_id,
      amount: price,
      decimals,
    },
    picture: item.thumbnail,
    condition: item.condition,
    free_shipping: item.shipping.free_shipping,
  };
  return data;
};

function getDecimal(price: number): number {
  if (Number.isInteger(price)) return 0;
  const decimalStr = price.toString().split(".")[1];
  return decimalStr.length;
}
3;
