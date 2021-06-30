const penguinEditReducer = (state = {}, action) => {
    switch (action.type) {
        case 'EDIT_PENGUIN':
            return action.payload;
        case 'EDIT_PENGUIN_ON_CHANGE':
            return { ...state, [action.payload.property]: action.payload.value }
        case 'CLEAR_PENGUIN_EDIT':
            return {};
        default:
            return state;
    }
}

export default penguinEditReducer;