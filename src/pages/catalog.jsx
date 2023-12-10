import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Circles } from "react-loader-spinner";
import { CarsList } from "../components/CarsList/CarsList";
import { Filters } from "../components/Filters/Filters";
import { fetchCars, filterCarsByMake, loadMoreCars } from "../redux/operations";
import { selectCars, selectIsLoading, selectMake } from "../redux/selectors";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMoreCars, setHasMoreCars] = useState(true);

  const pageSize = 12;
  const make = useSelector(selectMake);
  const isLoading = useSelector(selectIsLoading);
  const cars = useSelector(selectCars);

  useEffect(() => {
    loadInitialData();
  }, []);

  const loadInitialData = () => {
    dispatch(fetchCars({ page: 1, pageSize }))
      .then(({ payload }) => setHasMoreCars(payload.length === pageSize))
      .catch((error) => console.error("Error loading initial data:", error));
  };

  const filterCars = () => {
    dispatch(filterCarsByMake({ make }))
      .then(({ payload }) => setHasMoreCars(payload.length === pageSize))
      .catch((error) => console.error("Error filtering cars:", error));
  };

  const loadMore = () => {
    const nextPage = currentPage + 1;
    setCurrentPage(nextPage);
    dispatch(loadMoreCars({ page: nextPage, pageSize }))
      .then(({ payload }) => setHasMoreCars(payload.length === pageSize))
      .catch((error) => console.error("Error loading more cars:", error));
  };

  return (
    <>
      <Filters onClick={filterCars} />
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
        <CarsList cars={cars} hasMoreCars={hasMoreCars} onClick={loadMore} />
      )}
    </>
  );
};

export default CatalogPage;
