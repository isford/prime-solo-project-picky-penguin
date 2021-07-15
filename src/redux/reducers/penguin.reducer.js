const penguinReducer = (state = [], action) => {
    //Sets all penguins into an array so it can be mapped in
    //multiple places throughout the app
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

export default penguinReducer;