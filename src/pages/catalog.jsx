import { useDispatch, useSelector } from "react-redux";
import { CarsList } from "../components/CarsList/CarsList";
import { Filters } from "../components/Filters/Filters";
import { fetchCars, filterCarsByMake, loadMoreCars } from "../redux/operations";
import { useEffect, useState } from "react";

import {
  selectCars,
  selectIsLoading,
  selectMake,
  selectPrice,
} from "../redux/selectors";
import { Circles } from "react-loader-spinner";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 12;
  const [hasMoreCars, setHasMoreCars] = useState(true);

  useEffect(() => {
    dispatch(fetchCars({ page: 1, pageSize: pageSize })).then((data) => {
      data.payload.length < 12 ? setHasMoreCars(false) : setHasMoreCars(true);
    });
  }, [dispatch]);

  const price = useSelector(selectPrice);
  const make = useSelector(selectMake);
  const isLoading = useSelector(selectIsLoading);

  let cars = useSelector(selectCars);

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
      {isLoading ? (
        <Circles
          height="80"
          width="80"
          color="blue"
          ariaLabel="circles-loading"
          wrapperStyle={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
          }}
        />
      ) : (
        <CarsList
          cars={cars}
          hasMoreCars={hasMoreCars}
          onClick={handleLoadMore}
        />
      )}
    </>
  );
};

export default CatalogPage;
