import Layout from "./components/ui/Layout";
import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

const HomePage = lazy(() => import("./pages/Home/HomePage"));
const CatalogPage = lazy(() => import("./pages/Catalog/CatalogPage"));
const CamperDetailsPage = lazy(() =>
  import("./pages/DetailsPage/CamperDetailsPage")
);
//const FavoritesPage = lazy(() => import("../../pages/FavoritesPage"));

const App = () => {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/:id" element={<CamperDetailsPage />} />
          {/* <Route path="/favorites" element={<FavoritesPage />} /> */}
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
