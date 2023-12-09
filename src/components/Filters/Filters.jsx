import PropTypes from "prop-types";
import {
  BrendLabel,
  FilterButton,
  FilterMileageFrom,
  FilterMileageLabel,
  FilterMileageTo,
  PriceLabel,
  FiltersContainer,
  WrapperFromAndTo,
  BrendWrapper,
  PriceWrapper,
} from "./Filters.styled";
import makesData from "../../makes/makes.json";
import { useDispatch } from "react-redux";
import {
  setMake,
  setMileageFrom,
  setPrice,
  setMileageTo,
} from "../../redux/filterSlice";
import Select from "react-select";

export const Filters = ({ onClick }) => {
  const dispatch = useDispatch();

  const handleChangeMake = (selectedOption) => {
    if (selectedOption) {
      const makeValue = selectedOption.value;
      dispatch(setMake(makeValue));
    }
  };

  const handleChangePrice = (selectedOption) => {
    if (selectedOption) {
      const priceValue = selectedOption.value;
      dispatch(setPrice(priceValue));
    }
  };

  const handleMileageFrom = (e) => {
    const value = e.target.value;
    dispatch(setMileageFrom(value));
  };

  const handleMileageTo = (e) => {
    const value = e.target.value;
    dispatch(setMileageTo(value));
  };

  const optionsBrend = makesData.map((make) => ({
    value: make,
    label: make,
  }));

  const optionsPrice = [];
  for (let i = 30; i <= 400; i += 10) {
    optionsPrice.push({ value: i, label: i });
  }

  return (
    <FiltersContainer>
      <BrendWrapper>
        <BrendLabel htmlFor="brend">Car brand</BrendLabel>
        <Select
          options={optionsBrend}
          name="brend"
          onChange={handleChangeMake}
          placeholder={"Enter the text"}
          styles={{
            control: (baseStyles) => ({
              ...baseStyles,

              height: "48px",
              width: "224px",
              borderRadius: "14px",
              backgroundColor: "#F7F7FB",
              borderColor: "transparent",
            }),
          }}
        />
      </BrendWrapper>
      <PriceWrapper>
        <PriceLabel htmlFor="price">Price/ 1 hour</PriceLabel>
        <Select
          options={optionsPrice}
          name="price"
          onChange={handleChangePrice}
          placeholder={"To $"}
          styles={{
            control: (baseStyles) => ({
              ...baseStyles,

              height: "48px",
              width: "125px",
              borderRadius: "14px",
              backgroundColor: "#F7F7FB",
              borderColor: "transparent",
            }),
          }}
        />
      </PriceWrapper>

      <WrapperFromAndTo>
        <FilterMileageLabel htmlFor="mileage">
          Сar mileage / km
        </FilterMileageLabel>
        <FilterMileageFrom
          placeholder={"From"}
          name="mileage"
          onChange={handleMileageFrom}
        />
        <FilterMileageTo placeholder={"To"} onChange={handleMileageTo} />
      </WrapperFromAndTo>

      <FilterButton onClick={onClick}>Search</FilterButton>
    </FiltersContainer>
  );
};
Filters.propTypes = {
  onClick: PropTypes.func.isRequired,
};
