import fetch from "cross-fetch";

export const mlaItemFetcher = async (id: string): Promise<any> => {
  const data = await fetch(`https://api.mercadolibre.com/items/${id}`);
  const product = await data.json();
  return product;
};

export const mlaProductsFetcher = async (query: string): Promise<any[]> => {
  const data = await fetch(
    `https://api.mercadolibre.com/sites/MLA/search?q=${query} `
  );
  const products: any[] = (await data.json()).results;
  return products;
};
