import { GET_DATOS, GET_CONTENTFUL } from "./types";

export const datosReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case "GET_DATOS":
      return {
        //sin los ...state, no se actualiza el estado con los datos viejos
        datos: payload,
        ...state
      };
    case "GET_CONTENTFUL":
      return {
        res: payload,
        }
    default:
      return state;
  }
};
