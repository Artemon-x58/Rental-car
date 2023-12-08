import {
  LinkItem,
  LinkList,
  LinkStyled,
  LinksContainer,
  Logo,
  Nav,
} from "./Navigation.styled";
import { FaCarRear } from "react-icons/fa6";

export const Navigation = () => {
  return (
    <Nav>
      <LinksContainer>
        <Logo to="/">
          <FaCarRear />
        </Logo>
        <LinkList>
          <LinkItem>
            <LinkStyled to="/">Home</LinkStyled>
          </LinkItem>
          <LinkItem>
            <LinkStyled to="/catalog">Catalog</LinkStyled>
          </LinkItem>
          <LinkItem>
            <LinkStyled to="/favorites">Favorites</LinkStyled>
          </LinkItem>
        </LinkList>
      </LinksContainer>
    </Nav>
  );
};
