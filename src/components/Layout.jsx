import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Loader from "./Loader";

const Layout = () => {
  return (
    <div className="flex flex-col h-screen flex-1">
      <header className="bg-gray-900 text-white p-4 text-[30px] font-[700]">
        <nav className="px-6 container mx-auto h-[90px] flex justify-between text-center items-center">
          <ul className="flex space-x-5">
            <li>
              <NavLink to="/" end className="[&.active]:text-emerald-500 mr-5">
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink to="/cart" className="[&.active]:text-emerald-500">
                Shopping Cart
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main className="flex-1 ">
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      <footer className="bg-gray-900 text-white p-4 text-center">
        <p>
          &copy; 2024, All rights reserved by{" "}
          <a
            href="https://github.com/Sheremeta-Ivan?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-emerald-500"
          >
            Sheremeta Ivan
          </a>
        </p>
      </footer>
    </div>
  );
};

export default Layout;
