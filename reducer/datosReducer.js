import { GET_DATOS, GET_USUARIOS } from "./types";

export const datosReducer = (state = {}, action) => {
    const { type, payload } = action;

    switch (type) {
        case 'GET_DATOS':
            return {
                //sin los ...state, no se actualiza el estado con los datos viejos
                ...state,
               datos: payload
            }
        default:
            return state;
    }
}