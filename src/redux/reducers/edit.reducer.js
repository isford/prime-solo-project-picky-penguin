const editReducer = (state = {}, action) => {
    switch (action.type) {
        //Sets colony as object to be edited
        case 'EDIT_COLONY':
            return action.payload;
        case 'EDIT_ON_CHANGE':
            return {...state,[action.payload.property]:action.payload.value}
        case 'CLEAR_EDIT':
            return {};
        default:
            return state;
    }
}

export default editReducer;