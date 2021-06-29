import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

//temp not sure everything I need yet
function* fetchColony(){
    try{
        const response = yield axios.get('/api/colony')
        console.log('Fetch colony generator fetched', response)
        yield put({type: "SET_COLONY", payload: response.data})
    }catch(error){
        console.log('Failed GET request in fetch colony', error)
    }
}

function* colonySaga() {
    yield takeEvery('FETCH_COLONIES', fetchColony);
}

export default colonySaga;