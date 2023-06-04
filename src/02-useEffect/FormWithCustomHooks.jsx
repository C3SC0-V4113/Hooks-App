import { useForm } from "../hooks/useForm";

export const FormWithCustomHooks = () => {
  const { username, email, password, onInputChange } = useForm({
    username: "John Doe",
    email: "panquesito@gmail.com",
    password: "",
  });

  // const { username, email, password } = formState;

  return (
    <>
      <h1>Formulario con Custom Hook</h1>
      <hr />
      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />
      <input
        type="email"
        className="form-control mt-2"
        placeholder="cesco@example.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />

      <input
        type="password"
        className="form-control mt-2"
        placeholder="Contraseña"
        name="password"
        value={password}
        onChange={onInputChange}
      />
    </>
  );
};
