const graphReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_GRAPH':
            return action.payload;
        case 'ADD_GRAPH':
            return [...state, action.payload];
        case 'DELETE_GRAPH':
            return state;
        default:
            return state;
    }
}

export default graphReducer;