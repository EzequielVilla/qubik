import { Author } from "../lib/helpers/getAuthor";
import { Item } from "../lib/helpers/getDataPerItem";
import { mlaItemFetcher } from "../lib/mlaFetchers";
import { IdData, processItem } from "../lib/processData";
import fetch from "cross-fetch";

export const getIdData = async (id: string): Promise<IdData> => {
  try {
    const description = await getDescription(id);
    const product = await mlaItemFetcher(id);
    // return result;
    const processedData = processItem(product, description);
    return processedData;
  } catch (error) {
    throw error;
  }
};

async function getDescription(id: string): Promise<string> {
  try {
    const data = await fetch(
      `https://api.mercadolibre.com/items/${id}/description`
    );
    const result = (await data.json()).plain_text;
    return result;
  } catch (error) {
    throw error;
  }
}
