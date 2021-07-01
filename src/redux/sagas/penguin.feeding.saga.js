import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';


// function* fetchPenguins() {
//     try {
//         const response = yield axios.get('/api/penguin')
//         console.log('Fetch penguin generator fetched', response)
//         yield put({ type: "SET_PENGUIN", payload: response.data })
//     } catch (error) {
//         console.log('Failed GET request in fetch penguin', error)
//     }
// }

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
    yield takeEvery('FETCH_PENGUINS', fetchPenguins);
    yield takeEvery('POST_PENGUIN', addPenguin)
    yield takeEvery('REMOVE_PENGUINS', deletePenguin)
}

export default penguinFeedingSaga;