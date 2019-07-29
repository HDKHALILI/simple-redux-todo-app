export default (state = [], action) => {
  switch (action.type) {
    case "ADD_TASK":
      return [...state, action.payload];
    case "REMOVE_TASK":
      return state.filter(todo => todo.id !== action.payload);
    default:
      return state;
  }
};
