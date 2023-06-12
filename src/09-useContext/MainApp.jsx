import { Outlet } from "react-router-dom";
import { Navbar } from "./";

export const MainApp = () => {
  return (
    <>
      <Navbar />
      <hr />
      <Outlet />
    </>
  );
};
