import { Outlet } from "react-router-dom";
import { Navbar } from "./";

export const MainApp = () => {
  return (
    <>
      <h1>MainApp</h1>
      <Navbar />
      <hr />
      <Outlet />
    </>
  );
};
