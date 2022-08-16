import styled from "@emotion/styled";
import { MLALogo } from "../../ui/icons";

export const Root = styled.div`
  display: flex;
  height: 70px;
  background-color: #ffdb15;
  align-items: center;
  justify-items: center;
`;
export const SearchForm = styled.form`
  display: flex;
  width: 80%;
  max-width: 800px;
  margin-right: 10px;
  border: 2px solid black;
`;

export const FormInput = styled.input`
  width: 100%;
  font-size: 20px;
  border: none;
  border-right: 1px solid black;

  outline: none;
`;

export const StyledLogo = styled(MLALogo)`
  min-width: 50px;
  max-width: 50px;
  max-height: 50px;
  min-height: 50px;

  margin-left: 40px;
  margin-right: 30px;
`;
