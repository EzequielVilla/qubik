import styled from "@emotion/styled";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Breadcrumb } from "../components/Breadcrumb";

import { ProductDescription } from "../components/ProductDescription";
import { SkeletonDescription } from "../components/ProductDescription/SkeletonDescription";
import { ProductsList } from "../components/ProductsList";
import { useGetProduct } from "../hooks/searchs";

export interface Item {
  id: string;
  title: string;
  price: {
    currency: string;
    amount: number;
    decimals: number;
  };
  picture: string;
  sold_quantity?: number;
  description?: string;
  condition: string;
  free_shipping: boolean;
}

export const Product = () => {
  const Root = styled.div`
    height: 90vh 100%;
    padding: 10vw 10vh;
    background-color: #f0f0f0;
  `;
  const { id } = useParams();
  const { data, setId } = useGetProduct();

  const category = data?.item.category;

  useEffect(() => {
    id ? setId(id) : "loading";
  });
  return (
    <Root>
      <Breadcrumb category={category} />
      {!data ? (
        <SkeletonDescription />
      ) : (
        <>
          <ProductDescription item={data?.item}></ProductDescription>
        </>
      )}
    </Root>
  );
};
