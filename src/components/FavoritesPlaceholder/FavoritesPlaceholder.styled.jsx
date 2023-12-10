import styled from "styled-components";
import { Link } from "react-router-dom";

export const NoFavoritesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 16px;
`;

export const Message = styled.p`
  font-size: 18px;
  margin-bottom: 24px;
`;

export const GoToCatalogLink = styled(Link)`
  font-size: 18px;
  text-decoration: underline;
  color: #007bff;

  &:hover {
    color: #0056b3;
  }
`;
