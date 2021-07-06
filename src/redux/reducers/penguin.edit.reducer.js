const penguinEditReducer = (state = {}, action) => {
    switch (action.type) {
        case 'EDIT_PENGUIN':
            return action.payload;
        case 'EDIT_PENGUIN_ON_CHANGE':
            return { ...state, [action.payload.property]: action.payload.value }
        case 'CLEAR_PENGUIN_EDIT':
            return {};
        case 'SET_ONE_PENGUIN':
            return action.payload;
        default:
            return state;
    }
}

export default penguinEditReducer;