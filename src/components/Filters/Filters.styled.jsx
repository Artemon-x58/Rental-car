import styled from "styled-components";
import Select from "react-select";

export const FiltersContainer = styled.div`
  display: flex;
  align-items: center;
  padding-top: 50px;
  padding-left: 128px;
  padding-right: 128px;
  max-width: 1440px;
  margin: 0 auto;
  gap: 18px;
  justify-content: center;
`;

export const BrendWrapper = styled.div`
  position: relative;
`;

export const BrendLabel = styled.label`
  position: absolute;
  top: -26px;

  color: #8a8a89;
  font-size: 14px;
  font-weight: 500;
  line-height: 1, 28;
`;

export const BrendSelect = styled(Select)`
  width: 224px;
  height: 48px;

  .css-w9q2zk-Input2 {
    height: 48px;
    border-color: red;
  }
`;

export const PriceWrapper = styled.div`
  position: relative;
`;

export const PriceLabel = styled.label`
  position: absolute;
  top: -26px;

  color: #8a8a89;
  font-size: 14px;
  font-weight: 500;
  line-height: 1, 28;
`;

export const PriceSelect = styled(Select)`
  width: 125px;
  height: 48px;
`;

export const WrapperFromAndTo = styled.div`
  position: relative;
`;

export const FilterMileageLabel = styled.label`
  position: absolute;
  top: -26px;

  color: #8a8a89;
  font-size: 14px;
  font-weight: 500;
  line-height: 1, 28;
`;

export const FilterMileageFrom = styled.input`
  width: 160px;
  height: 20px;
  padding: 14px 24px;

  border-radius: 14px 0px 0px 14px;
  border-color: transparent;
  border-right: 1px solid rgba(138, 138, 137, 0.2);
  background: #f7f7fb;
  color: #121417;
`;

export const FilterMileageTo = styled.input`
  width: 160px;
  height: 48px;

  border-radius: 0px 14px 14px 0px;
  background: #f7f7fb;
  color: #121417;
  border-color: transparent;
`;

export const FilterButton = styled.button`
  display: flex;
  padding: 14px 44px;
  justify-content: center;
  align-items: center;

  border-radius: 12px;
  background-color: #3470ff;
  border-color: transparent;
  color: #fff;
  transition: background-color 0.3s;

  &:hover,
  &:focus {
    background-color: #0b44cd;
  }
`;
