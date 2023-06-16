import { render, screen } from "@testing-library/react";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { getRoutes } from "../../routes/root";

describe("Pruebas en <MainApp/>", () => {
  test("debe de mostrar el HomePage", () => {
    const router = createMemoryRouter(getRoutes().routes, {
      initialEntries: ["/"],
    });

    render(<RouterProvider router={router} />);

    expect(screen.getByText("HomePage")).toBeTruthy();
  });

  test("debe de mostrar el LoginPage", () => {
    const router = createMemoryRouter(getRoutes().routes, {
      initialEntries: ["/login"],
    });

    render(<RouterProvider router={router} />);

    expect(screen.getByText("LoginPage")).toBeTruthy();
  });
});
