const penguinFeedingReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_FEEDING':
            return action.payload;
        case 'ADD_FEEDING':
            return [...state, action.payload];
        case 'DELETE_FEEDING':
            return state;
        default:
            return state;
    }
}

export default penguinFeedingReducer;