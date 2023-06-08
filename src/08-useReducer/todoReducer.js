export const todoReducer = (initialState = [], action) => {
  switch (action.type) {
    case "ABC":
      throw new Error("Action.type is not supported");

    default:
      return initialState;
  }
};
