import { useSelector } from "react-redux";
import { CarsList } from "../components/CarsList/CarsList";
import { FavoritesPlaceholder } from "../components/FavoritesPlaceholder/FavoritesPlaceholder";
import { selectFavorites } from "../redux/selectors";

const Favorites = () => {
  const cars = useSelector(selectFavorites);

  return (
    <>
      {cars.length !== 0 ? <CarsList cars={cars} /> : <FavoritesPlaceholder />}
    </>
  );
};

export default Favorites;
