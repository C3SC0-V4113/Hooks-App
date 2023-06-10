import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

// import { HooksApp } from "./HooksApp";
// import { CounterApp } from "./01-useState/CounterApp";
// import { CounterWithCustomHook } from "./01-useState/CounterWithCustomHook";
// import { SimpleForm } from "./02-useEffect/SimpleForm";
// import { FormWithCustomHooks } from "./02-useEffect/FormWithCustomHooks";
// import { MultipleCustomHooks } from "./03-examples/MultipleCustomHooks";
// import { FocusScreen } from "./04-useRef/FocusScreen";
// import { Layout } from "./05-useLayoutEffect/Layout";
// import { Memorize } from "./06-memos/Memorize";
// import { MemoHook } from "./06-memos/MemoHook";
// import { CallbackHooks } from "./06-memos/CallbackHooks";
// import { Padre } from "./07-tarea-memo/Padre";
// import "./08-useReducer/intro-reducer";
// import { TodoApp } from "./08-useReducer/TodoApp";
import { AboutPage, HomePage, LoginPage, MainApp } from "./09-useContext";

import "./index.css";
import { ErrorPage } from "./09-useContext/ErrorPage";

const router = createBrowserRouter([
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

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <HooksApp /> */}
    {/* <CounterApp /> */}
    {/* <CounterWithCustomHook /> */}
    {/* <SimpleForm /> */}
    {/* <FormWithCustomHooks /> */}
    {/* <MultipleCustomHooks /> */}
    {/* <FocusScreen /> */}
    {/* <Layout /> */}
    {/* <Memorize /> */}
    {/* <MemoHook /> */}
    {/* <CallbackHooks /> */}
    {/* <Padre /> */}
    {/* <TodoApp /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
