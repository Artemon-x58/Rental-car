import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  background-color: #f2f5f8;
  padding: 20px 0;
`;

export const LinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 128px;
  padding-right: 128px;
  max-width: 1440px;
  margin: 0 auto;
`;

export const Logo = styled(NavLink)`
  font-size: 24px;
  color: #18425e;
  text-decoration: none;
  display: flex;
  align-items: center;

  svg {
    margin-right: 10px;
  }
`;

export const LinkList = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;
`;

export const LinkItem = styled.li``;

export const LinkStyled = styled(NavLink)`
  text-decoration: none;
  color: #18425e;
  transition: linear 0.3s;

  &:hover,
  &:focus {
    color: #0b44cd;
  }
`;
