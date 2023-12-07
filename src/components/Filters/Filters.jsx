import Select from "react-select";
import {
  FilterBrendLabel,
  FilterButton,
  FilterMileageFrom,
  FilterMileageLabel,
  FilterMileageTo,
  FilterPriceLabel,
  FiltersContainer,
} from "./Filters.styled";
import makesData from "../../makes/makes.json";

export const Filters = () => {
  const optionsBrend = makesData.map((make) => ({
    value: make,
    label: make,
  }));

  const optionsPrice = [];
  for (let i = 30; i <= 200; i += 10) {
    optionsPrice.push({ value: i, label: i });
  }

  return (
    <FiltersContainer>
      <FilterBrendLabel htmlFor="brend">Car brand</FilterBrendLabel>
      <Select options={optionsBrend} />
      <FilterPriceLabel htmlFor="price">Price/ 1 hour</FilterPriceLabel>
      <Select options={optionsPrice} name="price" />
      <FilterMileageLabel htmlFor="mileage">
        Сar mileage / km
      </FilterMileageLabel>
      <FilterMileageFrom name="mileage"></FilterMileageFrom>
      <FilterMileageTo></FilterMileageTo>
      <FilterButton>Search</FilterButton>
    </FiltersContainer>
  );
};
