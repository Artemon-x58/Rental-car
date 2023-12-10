import { Navigate, Route, Routes } from "react-router-dom";
import { GlobalStyles } from "./GlobalStyles/GlobalStyles";
import { CatalogPage } from "../pages/catalog";
import { Favorites } from "../pages/favorites";
import { Layout } from "./Layout/Layout";
import { HomePage } from "../pages/home";

function App() {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/favorites" element={<Favorites />} />
        </Route>
        <Route path="*" element={<Navigate to={"/"} />}></Route>
      </Routes>
    </>
  );
}

export default App;
