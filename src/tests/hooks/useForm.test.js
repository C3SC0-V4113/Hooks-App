import { renderHook } from "@testing-library/react";
import { useForm } from "../../hooks";

describe("Pruebas en useForm", () => {
  const initialForm = {
    name: "Francisco",
    email: "frank00@gmail.com",
  };
  test("debe regresar la informacion por defecto", () => {
    const { result } = renderHook(() => useForm(initialForm));

    console.log(result.current);
    expect(result.current).toEqual({
      name: initialForm.name,
      email: initialForm.email,
      formState: initialForm,
      onInputChange: expect.any(Function),
      onResetForm: expect.any(Function),
    });
  });
});
