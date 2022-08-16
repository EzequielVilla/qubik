import { Item } from "../../pages/Product";
import { BuyButton } from "../../ui/Buttons";
import { ProductImagen } from "../../ui/Imagen";
import { BoldPrice, BoldSubtitle, Text } from "../../ui/Text";
import {
  DescriptionContainer,
  ImageContainer,
  InfoContainer,
  Root,
} from "./styled";

interface Props {
  item: Item;
}

export const ProductDescription = (props: Props) => {
  const { condition, picture, price, title, sold_quantity, description } =
    props.item;

  return (
    <Root>
      <ImageContainer>
        <ProductImagen src={picture} height="150px" />
      </ImageContainer>
      <DescriptionContainer>
        <BoldSubtitle style={{ marginBottom: "10px" }}>
          Descripción del producto
        </BoldSubtitle>
        <Text>{description}</Text>
      </DescriptionContainer>
      <InfoContainer>
        <Text>
          {condition}-{sold_quantity} vendidos
        </Text>
        <BoldSubtitle>{title}</BoldSubtitle>
        <BoldPrice>
          {price.currency} {price.amount}
        </BoldPrice>
        <BuyButton>Comprar</BuyButton>
      </InfoContainer>
    </Root>
  );
};
