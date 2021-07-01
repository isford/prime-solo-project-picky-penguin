import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';


function* fetchFeedings() {
    try {
        const response = yield axios.get('/api/feeding')
        console.log('Fetch penguin generator fetched', response)
        yield put({ type: "SET_FEEDING", payload: response.data })
    } catch (error) {
        console.log('Failed GET request in fetch feeding', error)
    }
}

// function* addPenguin(action) {
//     try {
//         yield axios.post('/api/penguin', action.payload);
//         yield put({ type: 'FETCH_PENGUINS' })
//     } catch (error) {
//         console.log('Error in addPenguin generator', error)
//     };
// }

// function* deletePenguin(action) {
//     console.log('Penguin to be deleted is', action.payload)
//     let data = action.payload
//     try {
//         yield axios.delete(`/api/penguin/${data.id}`)
//         yield put({ type: 'FETCH_PENGUINS' });
//     } catch (error) {
//         console.log('Error in delete colony generator', error)
//     }
// }

function* penguinFeedingSaga() {
    yield takeEvery('FETCH_FEEDINGS', fetchFeedings);
   //yield takeEvery('POST_PENGUIN', addPenguin)
    //yield takeEvery('REMOVE_PENGUINS', deletePenguin)
}

export default penguinFeedingSaga;