import { CarsList } from "./CarsList/CarsList";
import { Filters } from "./Filters/Filters";
import { GlobalStyles } from "./GlobalStyles/GlobalStyles";
import { Modal } from "./Modal/Modal";

function App() {
  return (
    <>
      <GlobalStyles />
      <Filters />
      <CarsList />
      <Modal />
    </>
  );
}

export default App;
