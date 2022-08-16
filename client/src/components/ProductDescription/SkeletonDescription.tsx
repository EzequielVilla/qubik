import { Skeleton } from "@mui/material";
import { BuyButton } from "../../ui/Buttons";
import { ProductImagen } from "../../ui/Imagen";
import { BoldSubtitle, BoldPrice } from "../../ui/Text";
import { Root } from "./SkeletonDescription.styled";

export const SkeletonDescription = () => {
  return (
    <Root>
      <Skeleton variant="rectangular" width="80wh" height="80vh"></Skeleton>
    </Root>
  );
};
