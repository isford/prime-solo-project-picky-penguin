//Temporary not sure what I need yet...

const colonyReducer = (state = [], action) => {
    switch(action.type){
        //Sets colonies to an array to be mapped over
        case 'SET_COLONY':
            return action.payload;
        case 'ADD_COLONY':
            return [...state, action.payload];
        case 'DELETE_COLONY':
            return state;
        default:
            return state;
    }
}

export default colonyReducer;