import useSWRImmutable from "swr/immutable";
import { useState } from "react";
import { getConfig } from "../lib/api";

export const useGetProductsWithQuery = () => {
  const [q, setQ] = useState<string>();

  const { data, error } = useSWRImmutable(
    q ? [`items?q=${q}`] : null,
    getConfig
  );
  return { data: data, setQ };
};

export const useGetProduct = () => {
  const [id, setId] = useState<string>();

  const { data, error } = useSWRImmutable(
    id ? [`items/${id}`] : null,
    getConfig
  );
  return { data: data, setId };
};
