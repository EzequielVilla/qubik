import styled from "@emotion/styled";
import { useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { Breadcrumb } from "../components/Breadcrumb";
import { ProductsList } from "../components/ProductsList";
import { useGetProductsWithQuery } from "../hooks/searchs";

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

export const Search = () => {
  const Root = styled.div`
    height: 90vh;
    padding: 10vw 10vh;
    background-color: #f0f0f0;
  `;
  const [param, setParam] = useSearchParams();
  const query = param.get("query");
  const { data, setQ } = useGetProductsWithQuery();
  const itemsData: Item[] = data?.items;
  const categories = data?.categories;
  useEffect(() => {
    query ? setQ(query) : "loading";
  });
  return (
    <Root>
      <Breadcrumb categories={categories} />
      <ProductsList items={itemsData} categories={categories}></ProductsList>
    </Root>
  );
};
