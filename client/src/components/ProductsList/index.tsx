import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Item } from "../../pages/Search";
import { Card } from "../Card";
import { SkeletonCard } from "../Card/SkeletonCard";
import { Root } from "./styled";

interface Props {
  items: Item[];
  categories: string[];
}

export const ProductsList = (props: Props) => {
  const items = props.items;
  const navigate = useNavigate();

  function clickHandler(id: string) {
    navigate(`/items/${id}`);
  }
  return (
    <Root>
      {!items ? (
        <>
          {[...Array(4)].map((x, i) => (
            <SkeletonCard key={i} />
          ))}
        </>
      ) : (
        <>
          {items.map((product, index) => {
            if (index < 4) {
              return (
                <Card
                  key={product.id}
                  product={product}
                  onClick={() => clickHandler(product.id)}
                />
              );
            }
          })}
        </>
      )}
    </Root>
  );
};
