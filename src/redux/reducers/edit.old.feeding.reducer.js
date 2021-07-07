const penguinOldFeedingReducer = (state = {}, action) => {
    switch (action.type) {
        case 'EDIT_FEEDING':
            return action.payload;
        case 'EDIT_FEEDING_ON_CHANGE':
            return { ...state, [action.payload.property]: action.payload.value }
        case 'CLEAR_FEEDING_EDIT':
            return {};
        case 'SET_FEEDING_PENGUIN':
            return action.payload;
        default:
            return state;
    }
}

export default penguinOldFeedingReducer;