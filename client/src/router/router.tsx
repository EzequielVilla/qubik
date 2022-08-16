import { Routes, Route } from "react-router-dom";

import { Layout } from "../components/Layout";
import App from "../pages/App";
import { Product } from "../pages/Product";
import { Search } from "../pages/Search";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<App />} />
        <Route path="items" element={<Search />} />
        <Route path="items/:id" element={<Product />} />
      </Route>
    </Routes>
  );
};
