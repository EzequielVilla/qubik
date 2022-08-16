import styled from "@emotion/styled";

export const Root = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 1fr 0.5fr;
  padding: 20px;
  border-bottom: solid 1px black;
  height: 100px;
  cursor: pointer;
`;

export const ImageContainer = styled.div``;

export const PriceTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const ConditionContainer = styled.div`
  align-self: center;
  justify-self: center;
`;
