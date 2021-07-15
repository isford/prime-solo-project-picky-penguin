import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

//Gets all colonies from DB
function* fetchColony(){
    try{
        //Get request to get colonies
        const response = yield axios.get('/api/colony')
        //console.log('Fetch colony generator fetched', response)
        //Sets colonies into an array in colony reducer
        yield put({type: "SET_COLONY", payload: response.data})
    }catch(error){
        console.log('Failed GET request in fetch colony', error)
    }
}
//Adds new colony to DB
function* addColony(action){
    try{
        //Sends the colony name to colony router
        yield axios.post('/api/colony', action.payload);
        //Upon completing the post it fetches the new colonies
        yield put({type: 'FETCH_COLONIES'})
    }catch(error){
        console.log('Error in addColony generator', error)
    };
}

function* deleteColony(action){
    console.log('Item to be deleted is', action.payload)
    let data = action.payload
    try{
        yield axios.delete(`/api/colony/${data.id}`)
        yield put({type: 'FETCH_COLONIES'});
    }catch(error){
        console.log('Error in delete colony generator', error)
    }
}

function* colonySaga() {
    //Gets all colonies from DB
    yield takeEvery('FETCH_COLONIES', fetchColony);
    //Receives new colony from Add colony Form
    yield takeEvery('POST_COLONY', addColony);
    yield takeEvery('REMOVE_COLONIES', deleteColony);
}

export default colonySaga;