import styled from "@emotion/styled";

export const Root = styled.div`
  display: grid;
  width: auto;
  grid-template-columns: 1fr 0.05fr 1fr;
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  background-color: white;
  height: 70vh 100%;
`;
export const ImageContainer = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  align-items: center;
`;

export const DescriptionContainer = styled.div`
  grid-area: 2 / 1 / 3 / 2;
  padding: 10px;
`;
export const InfoContainer = styled.div`
  grid-area: 1 / 3 / 2 / 4;
  display: grid;
  padding: 10px;

  justify-items: center;
  align-items: center;
  grid-template-rows: 1fr 1fr 1fr 1fr;
`;
