import styled from "styled-components";

export const MyModalStyled = styled.div`
  width: 100%;
`;

export const IconModal = styled.svg`
  position: absolute;
  right: 16px;
  top: 16px;
  width: 24px;
  height: 24px;
  stroke: #000;
  cursor: pointer;
`;

export const IconUseModal = styled.use``;

export const ImageModal = styled.img`
  width: 100%;
  border-radius: 14px;
  margin-bottom: 14px;
`;

export const MakeModelYear = styled.h2`
  margin-bottom: 8px;

  color: #121417;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
`;

export const ModelSpanModal = styled.span`
  color: #3470ff;
`;

export const ParamsModal = styled.p`
  max-width: 277px;
  margin-bottom: 14px;

  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  line-height: 1.5;
`;

export const Descriptions = styled.p`
  margin-bottom: 24px;

  color: #121417;
  font-size: 14px;
  line-height: 1.42;
`;

export const FunctionalitiesModal = styled.p`
  margin-bottom: 24px;

  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  line-height: 1.5;
`;
export const FunctionalitiesModalSpan = styled.span`
  margin-bottom: 8px;

  color: #121417;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.42;
`;

export const ConditionsListTitleModal = styled.p`
  margin-bottom: 8px;

  color: #121417;
  font-size: 14px;
  font-weight: 500;
  line-height: 1, 42;
`;

export const ConditionsListModal = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
`;

export const ConditionsItemModal = styled.li`
  display: flex;
  padding: 7px 14px;
  justify-content: center;
  align-items: center;
  border-radius: 35px;
  background: #f9f9f9;
`;

export const ConditionsItemTextModal = styled.p`
  color: #363535;
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: -0.24px;
`;

export const ConditionsSpan = styled.span`
  color: #3470ff;
  font-weight: 600;
`;

export const ButtonModal = styled.a`
  display: inline-flex;
  padding: 12px 50px;
  justify-content: center;
  align-items: center;
  transition: linear background-color 0.3s;

  border-radius: 12px;
  background: #3470ff;
  border-color: transparent;

  color: var(--White, #fff);
  font-size: 14px;
  font-weight: 600;
  line-height: 1.42;

  &:hover,
  &:focus {
    background-color: #0b44cd;
  }
`;
