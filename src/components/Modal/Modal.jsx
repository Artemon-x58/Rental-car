import {
  ButtonModal,
  ConditionsItemModal,
  ConditionsItemTextModal,
  ConditionsListModal,
  DescriptionsFunctionalitiesModal,
  FunctionalitiesModal,
  IconModal,
  IconUseModal,
  ImageModal,
  MakeModelYearModal,
  MyModalStyled,
  ParamsModal,
} from "./Modal.styled";

export const MyModal = () => {
  return (
    <MyModalStyled>
      <IconModal>
        <IconUseModal />
      </IconModal>
      <ImageModal />
      <MakeModelYearModal></MakeModelYearModal>
      <ParamsModal></ParamsModal>
      <FunctionalitiesModal></FunctionalitiesModal>
      <DescriptionsFunctionalitiesModal></DescriptionsFunctionalitiesModal>
      <ConditionsListModal>
        Rental Conditions:
        <ConditionsItemModal>
          <ConditionsItemTextModal></ConditionsItemTextModal>
        </ConditionsItemModal>
      </ConditionsListModal>
      <ButtonModal>Rental car</ButtonModal>
    </MyModalStyled>
  );
};
