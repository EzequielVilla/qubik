import { useNavigate } from "react-router-dom";
import { SearchButtonBox } from "../../ui/Buttons";
import { SearchIcon } from "../../ui/icons";
import { Root, SearchForm, FormInput, StyledLogo } from "./styled";

export const Header = () => {
  const navigate = useNavigate();
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    const query = e.currentTarget.value;
    navigate(`/items?search=${query}`);
  };
  return (
    <Root>
      <StyledLogo />
      <SearchForm onSubmit={(e) => submitHandler(e)}>
        <FormInput name="query" type="text" placeholder="Celular"></FormInput>
        <SearchButtonBox type="submit">
          <SearchIcon />
        </SearchButtonBox>
      </SearchForm>
    </Root>
  );
};
