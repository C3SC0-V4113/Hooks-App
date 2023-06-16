import { render, screen } from "@testing-library/react";
import { HomePage } from "../../09-useContext/HomePage";
import { UserContext } from "../../09-useContext/context/UserContext";

describe("pruebas en <HomePage/>", () => {
  const user = {
    id: 1,
    name: "Francisco",
    email: "fran@gmail.com",
  };

  test("debe de mostrar el componente sin el usuario", () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <HomePage />
      </UserContext.Provider>
    );

    const pretag = screen.getByLabelText("pre");
    expect(pretag.innerHTML).toBe("null");
    // screen.debug();
  });

  test("debe de mostrar el componente con el usuario", () => {
    render(
      <UserContext.Provider value={{ user }}>
        <HomePage />
      </UserContext.Provider>
    );
    screen.debug();
    const pretag = screen.getByLabelText("pre");
    expect(pretag.innerHTML).toBe(JSON.stringify(user, null, 3));
  });
});
