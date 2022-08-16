import { Skeleton } from "@mui/material";

import { CardImagen } from "../../ui/Imagen";
import { Price, Title, Text } from "../../ui/Text";
import {
  Root,
  ImageContainer,
  PriceTitleContainer,
  ConditionContainer,
} from "./styled";

export const SkeletonCard = () => {
  return (
    <Root>
      <ImageContainer>
        <Skeleton
          animation="wave"
          variant="rectangular"
          width="90px"
          height="90px"
        ></Skeleton>
      </ImageContainer>
      <PriceTitleContainer>
        <Skeleton
          variant="rectangular"
          width="inherith"
          height="22px"
        ></Skeleton>
        <Skeleton
          variant="rectangular"
          width="inherith"
          height="50px"
        ></Skeleton>
      </PriceTitleContainer>
      <ConditionContainer>
        <Skeleton variant="rectangular" width="40px" height="20px"></Skeleton>
      </ConditionContainer>
    </Root>
  );
};
