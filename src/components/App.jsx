import { lazy } from "react";
import { Route, Navigate, Routes } from "react-router-dom";
import Layout from "./Layout";

const Shop = lazy(() => import("../pages/Shop"));
const ShoppingCart = lazy(() => import("../pages/ShoppingCart"));

function App() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col ">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Shop />} />
          <Route path="cart" element={<ShoppingCart />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
