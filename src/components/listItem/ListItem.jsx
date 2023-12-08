import PropTypes from "prop-types";
import {
  ButtonItem,
  DescriptionsItem,
  ImageItem,
  Item,
  MakeModelAndYearItem,
  ModelSpan,
  PriceAndYearWrapper,
  PriceItem,
  SvgIcon,
  UseIcon,
} from "./ListItem.styled";

import linkIconHeart from "../../icons/symbol-defs.svg";
import { useDispatch } from "react-redux";
import { addOrRemoveToFavorites } from "../../redux/favoritesSlice";

export const ListItem = ({ car }) => {
  const dispatch = useDispatch();

  const handleFavoritesClick = () => {
    dispatch(addOrRemoveToFavorites(car));
  };
  const {
    img,
    make,
    model,
    year,
    rentalPrice,
    address,
    rentalCompany,
    type,
    id,
  } = car;
  const [, city, country] = address.match(/,\s*([^,]+),\s*([^,]+)$/);
  return (
    <Item id={id}>
      <ImageItem
        style={{
          background: `linear-gradient(180deg, rgba(18, 20, 23, 0.50) 2.5%, rgba(18, 20, 23, 0.00) 41.07%), url(${img})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      />
      <SvgIcon onClick={handleFavoritesClick}>
        <UseIcon href={`${linkIconHeart}#icon-heart`} />
      </SvgIcon>
      <PriceAndYearWrapper>
        <MakeModelAndYearItem>
          {make}{" "}
          {model === "XC90" || model === "XC60" || model === "Enclave" ? (
            <ModelSpan>{model}</ModelSpan>
          ) : null}
          , {year}
        </MakeModelAndYearItem>
        <PriceItem>{rentalPrice}</PriceItem>
      </PriceAndYearWrapper>

      <DescriptionsItem>
        {city} | {country} | {rentalCompany} | {type} | {make} | {id}
        {/* {functionalities[0]} */}
      </DescriptionsItem>
      <ButtonItem>Learn more</ButtonItem>
    </Item>
  );
};

ListItem.propTypes = {
  car: PropTypes.shape({
    id: PropTypes.string.isRequired,
    make: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    rentalPrice: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    rentalCompany: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    functionalities: PropTypes.array.isRequired,
  }).isRequired,
};
