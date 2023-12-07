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
  ModalWrapper,
  ParamsModal,
} from "./Modal.styled";

export const Modal = () => {
  return (
    <ModalWrapper>
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
    </ModalWrapper>
  );
};
