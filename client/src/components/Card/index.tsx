import { Item } from "../../pages/Search";
import { GreenDot } from "../../ui/dot";
import { CardImagen } from "../../ui/Imagen";
import { Price, Text, Title } from "../../ui/Text";
import {
  ConditionContainer,
  PriceTitleContainer,
  Root,
  ImageContainer,
} from "./styled";

interface Props {
  product: Item;
  onClick: any;
}

export const Card = (props: Props) => {
  const { condition, free_shipping, picture, price, title } = props.product;
  const clickHandler = () => {
    props.onClick();
  };
  return (
    <Root onClick={clickHandler}>
      <ImageContainer>
        <CardImagen src={picture}></CardImagen>
      </ImageContainer>
      <PriceTitleContainer>
        <Price>
          {price.currency} {price.amount} {free_shipping ? <GreenDot /> : null}
        </Price>
        <Title>{title}</Title>
      </PriceTitleContainer>
      <ConditionContainer>
        <Text>{condition}</Text>
      </ConditionContainer>
    </Root>
  );
};
