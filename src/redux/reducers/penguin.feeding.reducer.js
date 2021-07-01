const penguinFeedingReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_PENGUIN':
            return action.payload;
        case 'ADD_PENGUIN':
            return [...state, action.payload];
        case 'DELETE_PENGUIN':
            return state;
        default:
            return state;
    }
}

export default penguinFeedingReducer;