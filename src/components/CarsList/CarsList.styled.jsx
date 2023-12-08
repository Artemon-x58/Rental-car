import styled from "styled-components";

export const List = styled.ul`
  /* display: grid;
  grid-template-columns: repeat(4, calc(25% - 29px));
  gap: 50px 29px; */
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  row-gap: 50px;
  column-gap: 29px;
  padding-top: 50px;
  padding-left: 128px;
  padding-right: 128px;
  max-width: 1440px;
  margin: 0 auto 100px;
`;

export const BtnLoadMore = styled.button`
  display: block;
  margin-left: auto;
  margin-right: auto;
  transition: color 0.3s;

  border: none;
  background-color: inherit;
  color: #3470ff;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  text-decoration-line: underline;

  &:hover,
  &:focus {
    color: #0b44cd;
  }
`;
