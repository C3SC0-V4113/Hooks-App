import { Navigate, createBrowserRouter } from "react-router-dom";
import {
  AboutPage,
  ErrorPage,
  HomePage,
  LoginPage,
  MainApp,
} from "../09-useContext";

export const getRoutes = () =>
  createBrowserRouter([
    {
      path: "/",
      element: <MainApp />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        { path: "/about", element: <AboutPage /> },
        { path: "/login", element: <LoginPage /> },
        { path: "*", element: <Navigate to={"/"} replace /> },
      ],
    },
  ]);
