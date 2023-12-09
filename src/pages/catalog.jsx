import { useDispatch, useSelector } from "react-redux";
import { CarsList } from "../components/CarsList/CarsList";
import { Filters } from "../components/Filters/Filters";
import { fetchCars, filterCarsByMake, loadMoreCars } from "../redux/operations";
import { useEffect, useState } from "react";
import { BtnLoadMore } from "../components/CarsList/CarsList.styled";

export const CatalogPage = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 12;
  const [hasMoreCars, setHasMoreCars] = useState(true);

  useEffect(() => {
    dispatch(fetchCars({ page: 1, pageSize: pageSize })).then((data) => {
      data.payload.length < 12 ? setHasMoreCars(false) : setHasMoreCars(true);
    });
  }, [dispatch]);

  const valueSelector = (state) => state.cars.items;
  const valueMakeSelector = (state) => state.filter.make;
  const valueSelectorPrice = (state) => state.filter.price;
  const price = useSelector(valueSelectorPrice);
  const make = useSelector(valueMakeSelector);

  let cars = useSelector(valueSelector);

  if (price !== "") {
    cars = cars.filter((car) => Number(car.rentalPrice) <= price);
  }

  const handleSearchFilters = () => {
    dispatch(filterCarsByMake({ make })).then((data) => {
      data.payload.length < 12 ? setHasMoreCars(false) : setHasMoreCars(true);
    });
  };

  const handleLoadMore = () => {
    const nextPage = currentPage + 1;
    setCurrentPage(nextPage);
    dispatch(loadMoreCars({ page: nextPage, pageSize: pageSize })).then(
      (data) => {
        data.payload.length < 12 ? setHasMoreCars(false) : setHasMoreCars(true);
      }
    );
  };

  return (
    <>
      <Filters onClick={handleSearchFilters} />
      <CarsList cars={cars} />
      {hasMoreCars && (
        <BtnLoadMore onClick={handleLoadMore}>Load more</BtnLoadMore>
      )}
    </>
  );
};
