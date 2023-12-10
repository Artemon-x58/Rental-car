import { Navigate, Route, Routes } from "react-router-dom";
import { GlobalStyles } from "./GlobalStyles/GlobalStyles";
import { Layout } from "./Layout/Layout";
import { lazy } from "react";

const HomePage = lazy(() => import("../pages/home"));
const CatalogPage = lazy(() => import("../pages/catalog"));
const Favorites = lazy(() => import("../pages/favorites"));

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
