import { useSelector } from "react-redux";
import { CarsList } from "../components/CarsList/CarsList";
import { FavoritesPlaceholder } from "../components/FavoritesPlaceholder/FavoritesPlaceholder";

export const Favorites = () => {
  const valueSelector = (state) => state.favorites.list;
  const cars = useSelector(valueSelector);

  return (
    <>
      {cars.length !== 0 ? <CarsList cars={cars} /> : <FavoritesPlaceholder />}
    </>
  );
};
