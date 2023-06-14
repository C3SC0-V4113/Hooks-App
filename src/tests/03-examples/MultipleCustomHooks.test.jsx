import { render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../03-examples";

describe("pruebas en <MultipleCustomHooks/>", () => {
  test("debe mostrar el componente por defecto", () => {
    render(<MultipleCustomHooks />);

    expect(screen.getByText("Loading..."));

    expect(screen.getByText("Breaking Bad Quotes"));

    const nextButton = screen.getByRole("button", { name: "More Quotes" });

    expect(nextButton.disabled).toBeTruthy();
    // screen.debug();
  });
});
