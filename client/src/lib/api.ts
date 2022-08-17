interface RequestOptions {
  method: string;
  body?: any;
  headers: any;
}

const fetchApi = async (direction: string, config: RequestOptions) => {
  const API_URL = "https://qubik.vercel.app/api/";
  const url = API_URL + direction;

  const fullConfig = {
    ...config,
  };
  try {
    const res = await fetch(url, fullConfig);
    const status = res.status;

    if (status >= 200 && status < 300) return await res.json();
    if (status >= 400) throw { error: res.status };
  } catch (error) {
    throw error;
  }
};

export const getConfig = async (direction: string) => {
  return await fetchApi(direction, {
    method: "get",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export async function fetchMLACategoryForData(category: string): Promise<any> {
  const mlaResponse = await fetch(
    `https://api.mercadolibre.com/categories/${category}`
  );
  const data = await mlaResponse.json();
  const pathFromRoot = data.path_from_root;
  return pathFromRoot;
}
