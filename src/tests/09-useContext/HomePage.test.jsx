import { render, screen } from "@testing-library/react";
import { HomePage } from "../../09-useContext/HomePage";
import { UserContext } from "../../09-useContext/context/UserContext";

describe("pruebas en <HomePage/>", () => {
  test("debe de mostrar el componente sin el usuario", () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <HomePage />
      </UserContext.Provider>
    );

    const pretag = screen.getByLabelText("pre");
    expect(pretag.innerHTML).toBe("null"); // screen.debug();
  });
});
