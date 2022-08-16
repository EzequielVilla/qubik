import { getAuthor, getDataPerItem } from "./helpers";
import { Author } from "./helpers/getAuthor";
import { Item } from "./helpers/getDataPerItem";

export interface ProcessedData {
  author: Author;
  categories: string[];
  items: Item[];
}

export interface IdData {
  author: Author;
  item: ItemWithMoreData;
}

interface ItemWithMoreData extends Item {
  description: string;
  sold_quantity: number;
  category: string;
}
export const processProducts = (products: any[]): ProcessedData => {
  const author = getAuthor();
  const categories = <string[]>[];
  const infoPerItem = products.map((item) => {
    categories.push(item.category_id);
    const info = getDataPerItem(item);
    return info;
  });

  const data = {
    author,
    categories,
    items: infoPerItem,
  };
  return data;
};

export const processItem = (item: any, description: string): IdData => {
  const author = getAuthor();
  const data = getDataPerItem(item);
  const soldQuantity = item.sold_quantity;
  const category = item.category_id;

  const info = {
    ...data,
    sold_quantity: soldQuantity,
    description,
    category,
  };
  return { author, item: info };
};
