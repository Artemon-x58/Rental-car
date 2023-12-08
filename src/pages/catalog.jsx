import { useDispatch, useSelector } from "react-redux";
import { CarsList } from "../components/CarsList/CarsList";
import { Filters } from "../components/Filters/Filters";
import { MyModal } from "../components/Modal/Modal";
import { fetchCars } from "../redux/operations";
import { useEffect } from "react";

export const CatalogPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  const valueSelector = (state) => state.cars.items;
  const cars = useSelector(valueSelector);
  return (
    <>
      <Filters />
      <CarsList cars={cars} />
      <MyModal />
    </>
  );
};
