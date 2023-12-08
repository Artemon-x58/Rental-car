import { useSelector } from "react-redux";
import { CarsList } from "../components/CarsList/CarsList";

export const Favorites = () => {
  const valueSelector = (state) => state.favorites.list;
  const cars = useSelector(valueSelector);

  return (
    <>
      <CarsList cars={cars} />
    </>
  );
};
