const datosReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_DATOS':
            return action.datos;
        default:
            return state;
    }
}