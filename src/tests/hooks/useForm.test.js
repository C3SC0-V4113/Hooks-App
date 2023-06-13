import { act, renderHook } from "@testing-library/react";
import { useForm } from "../../hooks";

describe("Pruebas en useForm", () => {
  const initialForm = {
    name: "Francisco",
    email: "frank00@gmail.com",
  };
  test("debe regresar la informacion por defecto", () => {
    const { result } = renderHook(() => useForm(initialForm));

    expect(result.current).toEqual({
      name: initialForm.name,
      email: initialForm.email,
      formState: initialForm,
      onInputChange: expect.any(Function),
      onResetForm: expect.any(Function),
    });
  });

  test("debe de cambiar el nombre del formulario", () => {
    const newName = "Cecy";
    const { result } = renderHook(() => useForm(initialForm));
    const { onInputChange } = result.current;

    act(() => onInputChange({ target: { name: "name", value: newName } }));

    expect(result.current.name).toEqual(newName);
    expect(result.current.formState.name).toEqual(newName);
  });

  test("debe de realizar el reset del formulario", () => {
    const newName = "Cecy";
    const { result } = renderHook(() => useForm(initialForm));
    const { onInputChange, onResetForm } = result.current;

    act(() => {
      onInputChange({ target: { name: "name", value: newName } });
      onResetForm();
    });

    expect(result.current.name).toEqual(initialForm.name);
    expect(result.current.formState.name).toEqual(initialForm.name);
  });
});
