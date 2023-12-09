import PropTypes from "prop-types";
import { MyModal } from "../Modal/Modal";
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
import { useDispatch, useSelector } from "react-redux";
import { addOrRemoveToFavorites } from "../../redux/favoritesSlice";
import { useEffect, useState } from "react";

export const ListItem = ({ car }) => {
  const [isFavorite, setIsFavorite] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const valueSelector = (state) => state.favorites.list;
  const favoritesIcon = useSelector(valueSelector);
  useEffect(() => {
    setIsFavorite(favoritesIcon.some((favorite) => favorite.id === car.id));
  }, [favoritesIcon, car.id]);

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
    <>
      <Item id={id}>
        <ImageItem
          style={{
            background: `linear-gradient(180deg, rgba(18, 20, 23, 0.50) 2.5%, rgba(18, 20, 23, 0.00) 41.07%), url(${img})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        />
        <SvgIcon
          onClick={handleFavoritesClick}
          style={{
            fill: isFavorite ? "#3470FF" : "transparent",
            stroke: isFavorite ? "#3470FF" : "#fff",
          }}
        >
          <UseIcon href={`${linkIconHeart}#icon-heart`} />
        </SvgIcon>
        <PriceAndYearWrapper>
          <MakeModelAndYearItem>
            {make}{" "}
            {model === "XC90" || model === "XC60" || model === "Enclave" ? (
              <ModelSpan>{model}</ModelSpan>
            ) : (
              model
            )}
            , {year}
          </MakeModelAndYearItem>
          <PriceItem>${rentalPrice}</PriceItem>
        </PriceAndYearWrapper>

        <DescriptionsItem>
          {city} | {country} | {rentalCompany} | {type} | {make} | {id}
          {/* {functionalities[0]} */}
        </DescriptionsItem>
        <ButtonItem onClick={openModal}>Learn more</ButtonItem>
      </Item>
      {isModalOpen && (
        <MyModal isOpen={isModalOpen} closeModal={closeModal} car={car} />
      )}
    </>
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
