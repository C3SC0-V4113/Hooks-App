import propTypes from "prop-types";

import { UserContext } from "./UserContext";

const user = {
  id: 123,
  name: "Francisco Valle",
  email: "frankjose00@gmail.copm",
};

export const UserProvider = ({ children }) => {
  return (
    <UserContext.Provider value={{ hola: "mundo", user }}>
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: propTypes.node.isRequired,
};
