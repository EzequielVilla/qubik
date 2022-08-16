
import { mlaProductsFetcher } from "../lib/mlaFetchers";
import { ProcessedData, processProducts } from "../lib/processData";

export const getQueryData = async (query: string): Promise<ProcessedData> => {
  try {
    const products = await mlaProductsFetcher(query);
    // return result[0];
    const processedData = processProducts(products);
    return processedData;
  } catch (error) {
    throw error;
  }
};
