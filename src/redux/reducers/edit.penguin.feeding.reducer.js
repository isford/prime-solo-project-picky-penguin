const editPenguinFeedingReducer = (state = {}, action) => {
    switch (action.type) {
        case 'EDIT_DAILY_TOTAL':
            return [{
                ...state,
                [action.payload.property]: action.payload.value
            }];
        case 'UPDATE_FEED':
            console.log('UPDATE FEED payload')
            return state;
        default:
            return state;
    }
}

export default editPenguinFeedingReducer;