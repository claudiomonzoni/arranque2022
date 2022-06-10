const datosReducer = (state, action) => {
  switch (action.type) {
    case "SET_DATOS":
      return { ...state, ...action.payload };
    default:
      return state;
  }
}