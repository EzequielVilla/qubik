import { fetchMLACategoryForData } from "./api";
export interface PathFromRoot {
  id: string;
  name: string;
}

export async function getInfoForProductsBreadcrumb(
  categories: string[]
): Promise<PathFromRoot[]> {
  const category = getMostRepeatedCategory(categories);
  const mlaResponse: PathFromRoot[] = await fetchMLACategoryForData(category);
  return mlaResponse;
}
export async function getInfoForItemBreadcrumb(
  category: string
): Promise<PathFromRoot[]> {
  const mlaResponse: PathFromRoot[] = await fetchMLACategoryForData(category);
  return mlaResponse;
}

function getMostRepeatedCategory(categories: string[]): string {
  const mapOfCategories = createMapOfCategories(categories);
  const category = getMostFrecuent(mapOfCategories);
  return category;
}
function createMapOfCategories(categories: string[]) {
  const mapCategories = <any>{};
  for (let i = 0; i < categories.length; i++) {
    if (mapCategories[categories[i]]) {
      mapCategories[categories[i]]++;
    } else {
      mapCategories[categories[i]] = 1;
    }
  }
  return mapCategories;
}

function getMostFrecuent(mapCategories: any): string {
  const keys = [];
  for (let i in mapCategories) {
    keys.push(i);
  }
  keys.sort((a, b) => {
    if (mapCategories[a] === mapCategories[b]) {
      return a > b ? 1 : -1;
    } else {
      return mapCategories[b] - mapCategories[a];
    }
  });
  return keys[0];
}
