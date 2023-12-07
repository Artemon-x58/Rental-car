import { CarsList } from "./CarsList/CarsList";
import { Filters } from "./Filters/Filters";
import { Modal } from "./Modal/Modal";

function App() {
  return (
    <>
      <Filters />
      <CarsList />
      <Modal />
    </>
  );
}

export default App;
