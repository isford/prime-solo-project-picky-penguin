//Temporary not sure what I need yet...

import { combineReducers } from 'redux';


const colonyReducer = (state = [], action) => {
    switch(action.type){
        case 'SET_COLONY':
            return action.payload
    }
}

export default colonyReducer;