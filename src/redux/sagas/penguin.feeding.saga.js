import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* addFeeding(action) {
    try {
        yield axios.post('/api/feeding', action.payload);
        //yield put({ type: 'FETCH_PENGUINS' })
    } catch (error) {
        console.log('Error in addPenguin generator', error)
    };
}

function* deleteFeeding(action) {
    console.log('Feeding to be deleted is', action.payload)
    let data = action.payload
    try {
        yield axios.delete(`/api/feeding/${data.feed_id}`)
        yield put({ type: 'FETCH_FEEDINGS' });
    } catch (error) {
        console.log('Error in delete feeding generator', error)
    }
}

function* fetchFeedings(){
    try{
       const response = yield axios.get('/api/feeding/')
        yield put ({type: 'SET_ALL_FEEDINGS', payload: response.data})
    }catch (error){
        console.log('Failed GET request in FETCH Feeding', error)
    }
}

function* fetchGraphs(action) {
    let penguinId = action.payload.id
    try {
        const response = yield axios.get(`/api/feeding/graph/?id=${penguinId}`)
        yield put({ type: 'SET_GRAPH', payload: response.data })
    } catch (error) {
        console.log('Failed GET request in FETCH Feeding', error)
    }
}

function* penguinFeedingSaga() {
    //yield takeEvery('UPDATE_FEEDINGS', fetchUpdatedFeedings);
   yield takeEvery('POST_FEEDING', addFeeding)
    yield takeEvery('REMOVE_FEEDINGS', deleteFeeding)
    yield takeEvery('FETCH_FEEDINGS', fetchFeedings)
    yield takeEvery('FETCH_GRAPHS', fetchGraphs)
}

export default penguinFeedingSaga;