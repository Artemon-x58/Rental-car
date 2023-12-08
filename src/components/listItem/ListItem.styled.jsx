import styled from "styled-components";
// import { FaRegHeart } from "react-icons/fa";

export const Item = styled.li`
  position: relative;

  width: calc((100% - 87px) / 4);
`;

export const SvgIcon = styled.svg`
  position: absolute;
  top: 14px;
  right: 14px;

  width: 18px;
  height: 18px;
  fill: transparent;
  stroke: #fff;
  cursor: pointer;
`;

export const UseIcon = styled.use``;

export const ImageItem = styled.div`
  margin-bottom: 14px;
  width: 100%;
  height: 268px;
  border-radius: 14px;
`;

export const PriceAndYearWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const MakeModelAndYearItem = styled.p`
  color: #121417;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
`;

export const ModelSpan = styled.span`
  color: #3470ff;
`;

export const PriceItem = styled.p``;

export const DescriptionsItem = styled.p`
  margin-bottom: 28px;

  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  line-height: 1.5;
`;

export const ButtonItem = styled.button`
  width: 100%;
  padding: 12px 99.5px;
  transition: background-color 0.3s;

  border-radius: 12px;
  border-color: transparent;
  background-color: #3470ff;
  color: #fff;
  font-weight: 600;
  line-height: 1.42;

  &:hover,
  &:focus {
    background-color: #0b44cd;
  }
`;
