import PropTypes from "prop-types";
import {
  ButtonModal,
  ConditionsItemModal,
  ConditionsItemTextModal,
  ConditionsListModal,
  FunctionalitiesModal,
  Descriptions,
  IconModal,
  IconUseModal,
  ImageModal,
  MakeModelYear,
  ModelSpanModal,
  MyModalStyled,
  ParamsModal,
  FunctionalitiesModalSpan,
  ConditionsSpan,
  ConditionsListTitleModal,
} from "./Modal.styled";
import Modal from "react-modal";
import { useEffect } from "react";
import linkCrossIcon from "../../icons/symbol-defs.svg";
Modal.setAppElement("#root");
export const MyModal = ({ isOpen, closeModal, car }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);
  const {
    img,
    make,
    model,
    year,
    rentalPrice,
    address,
    description,
    type,
    id,
    mileage,
    engineSize,
    fuelConsumption,
    accessories,
    functionalities,
    rentalConditions,
  } = car;
  const [, city, country] = address.match(/,\s*([^,]+),\s*([^,]+)$/);
  const rentalConditionsArray = rentalConditions.split("\n");
  const minimumAgePart = rentalConditionsArray[0].split(": ");
  const minimumAgeTitle = minimumAgePart[0];
  const minimumAgeValue = minimumAgePart[1];
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={{
        overlay: {
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(150, 146, 146, 0.75)",
        },
        content: {
          width: "541px",
          minHeight: "600px",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          border: "1px solid #ccc",
          background: "#fff",
          overflow: "auto",
          WebkitOverflowScrolling: "touch",
          borderRadius: "24px",
          outline: "none",
          padding: "40px",
        },
      }}
    >
      <MyModalStyled>
        <IconModal onClick={closeModal}>
          <IconUseModal href={`${linkCrossIcon}#icon-x`} />
        </IconModal>
        <ImageModal src={img} />
        <MakeModelYear>
          {make}{" "}
          {model === "XC90" || model === "XC60" || model === "Enclave" ? (
            <ModelSpanModal>{model}</ModelSpanModal>
          ) : null}
          , {year}
        </MakeModelYear>
        <ParamsModal>
          {city} | {country} | Id: {id} | Year: {year} | Type: {type} | Fuel
          Consumption: {fuelConsumption} | Engine Size: {engineSize}
        </ParamsModal>
        <Descriptions>{description}</Descriptions>
        <FunctionalitiesModal>
          <FunctionalitiesModalSpan>
            Accessories and functionalities:
            <br />
          </FunctionalitiesModalSpan>
          {accessories.join(" | ")} {functionalities.join(" | ")}
        </FunctionalitiesModal>
        <ConditionsListTitleModal> Rental Conditions:</ConditionsListTitleModal>
        <ConditionsListModal>
          <ConditionsItemModal>
            <ConditionsItemTextModal>
              {minimumAgeTitle}:{" "}
              <ConditionsSpan>{minimumAgeValue}</ConditionsSpan>
            </ConditionsItemTextModal>
          </ConditionsItemModal>
          <ConditionsItemModal>
            <ConditionsItemTextModal>
              {rentalConditionsArray[1]}
            </ConditionsItemTextModal>
          </ConditionsItemModal>
          <ConditionsItemModal>
            <ConditionsItemTextModal>
              {rentalConditionsArray[2]}
            </ConditionsItemTextModal>
          </ConditionsItemModal>
          <ConditionsItemModal>
            <ConditionsItemTextModal>
              Mileage: <ConditionsSpan>{mileage}</ConditionsSpan>
            </ConditionsItemTextModal>
          </ConditionsItemModal>
          <ConditionsItemModal>
            <ConditionsItemTextModal>
              Price: <ConditionsSpan>{rentalPrice}$</ConditionsSpan>
            </ConditionsItemTextModal>
          </ConditionsItemModal>
        </ConditionsListModal>
        <ButtonModal href="tel:+380730000000">Rental car</ButtonModal>
      </MyModalStyled>
    </Modal>
  );
};
MyModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  car: PropTypes.object.isRequired,
};
