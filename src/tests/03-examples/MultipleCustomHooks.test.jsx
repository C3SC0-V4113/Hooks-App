import { fireEvent, render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../03-examples";
import { useFetch } from "../../hooks/useFetch";
import { useCounter } from "../../hooks/useCounter";

jest.mock("../../hooks/useFetch");
jest.mock("../../hooks/useCounter");

describe("pruebas en <MultipleCustomHooks/>", () => {
  const mockIncrement = jest.fn();

  useCounter.mockReturnValue({
    counter: 1,
    increment: mockIncrement,
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("debe mostrar el componente por defecto", () => {
    useFetch.mockReturnValue({ data: null, isLoading: true, hasError: null });

    render(<MultipleCustomHooks />);

    expect(screen.getByText("Loading..."));

    expect(screen.getByText("Breaking Bad Quotes"));

    const nextButton = screen.getByRole("button", { name: "More Quotes" });

    expect(nextButton.disabled).toBeTruthy();
    // screen.debug();
  });

  test("debe de mostrar un quote", () => {
    useFetch.mockReturnValue({
      data: [{ author: "Francisco", quote: "Hola Mundo" }],
      isLoading: false,
      hasError: null,
    });

    render(<MultipleCustomHooks />);

    expect(screen.getByText("Hola Mundo")).toBeTruthy();
    expect(screen.getByText("Francisco")).toBeTruthy();

    const nextButton = screen.getByRole("button", { name: "More Quotes" });

    expect(nextButton.disabled).toBeFalsy();
  });

  test("debe llamar la función de incrementar", () => {
    useFetch.mockReturnValue({
      data: [{ author: "Francisco", quote: "Hola Mundo" }],
      isLoading: false,
      hasError: null,
    });

    render(<MultipleCustomHooks />);

    const nextButton = screen.getByRole("button", { name: "More Quotes" });

    fireEvent.click(nextButton);

    expect(mockIncrement).toHaveBeenCalled();
  });
});
