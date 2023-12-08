import { CarsList } from "../components/CarsList/CarsList";
import { Filters } from "../components/Filters/Filters";
import { MyModal } from "../components/Modal/Modal";

export const CatalogPage = () => {
  return (
    <>
      <Filters />
      <CarsList />
      <MyModal />
    </>
  );
};
