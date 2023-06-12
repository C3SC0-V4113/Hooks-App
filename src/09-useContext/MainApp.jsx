import { Outlet } from "react-router-dom";

import { Navbar } from "./";

import { UserProvider } from "./context/UserProvider";

export const MainApp = () => {
  return (
    <UserProvider>
      <Navbar />
      <hr />
      <Outlet />
    </UserProvider>
  );
};
