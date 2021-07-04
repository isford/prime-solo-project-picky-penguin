const editPenguinFeedingReducer = (state = {}, action) => {
    switch (action.type) {
        case 'EDIT_DAILY_TOTAL':
            return [{
                ...state,
                [action.payload.property]: action.payload.value
            }];
        default:
            return state;
    }
}

export default editPenguinFeedingReducer;