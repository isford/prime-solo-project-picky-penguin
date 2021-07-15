import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';


function* fetchPenguins() {
    try {
        //Get request to server for penguins
        const response = yield axios.get('/api/penguin')
        //Sets penguins in an array penguin.reducer.js
        yield put({ type: "SET_PENGUIN", payload: response.data })
    } catch (error) {
        console.log('Failed GET request in fetch penguin', error)
    }
}

function* addPenguin(action) {
    try {
        //Sends new penguin data to server
        yield axios.post('/api/penguin', action.payload);
        //After penguin has been created it
        yield put({ type: 'FETCH_PENGUINS' })
    } catch (error) {
        console.log('Error in addPenguin generator', error)
    };
}

function* deletePenguin(action) {
    console.log('Penguin to be deleted is', action.payload)
    let data = action.payload
    try {
        yield axios.delete(`/api/penguin/${data.id}`)
        yield put({ type: 'FETCH_PENGUINS' });
    } catch (error) {
        console.log('Error in delete colony generator', error)
    }
}

function* penguinSaga() {
    //Gets all penguins from DB
    yield takeEvery('FETCH_PENGUINS', fetchPenguins);
    //Receives new data from Add Penguin Form
    yield takeEvery('POST_PENGUIN', addPenguin)
    //Delete penguin from DB
    yield takeEvery('REMOVE_PENGUINS', deletePenguin)
}

export default penguinSaga;