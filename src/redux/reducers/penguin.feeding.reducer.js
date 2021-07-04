const penguinFeedingReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_FEEDING':
            return action.payload.map(penguin => {
                return {penguin_id: penguin.id,
                    name: penguin.name,
                    colony: penguin.colony_name,
                    daily_total_am: 0, 
                    calcium: false, 
                    multivitamin: false,
                    itraconazole: false,
                    nesting: false,
                    mating: false}
            });
        case 'ADD_FEEDING':
            console.log('Welcome to the reducer',action.payload)
            return [...state, action.payload];
        case 'DELETE_FEEDING':
            return state;
        case 'UPDATE_FEEDING_LIST':
            return state;
        default:
            return state;
    }
}

export default penguinFeedingReducer;