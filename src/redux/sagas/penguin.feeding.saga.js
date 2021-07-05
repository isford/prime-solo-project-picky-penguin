import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';


// function* fetchUpdatedFeedings(action) {
//     try {
//         //const response = yield axios.get('/api/feeding')
//         yield put({ type: "EDIT_DAILY_TOTAL", payload: action })
//         yield put ({type: 'UPDATE_FEED'})
//     } catch (error) {
//         console.log('Failed GET request in fetch feeding', error)
//     }
// }

function* addFeeding(action) {
    try {
        yield axios.post('/api/feeding', action.payload);
        //yield put({ type: 'FETCH_PENGUINS' })
    } catch (error) {
        console.log('Error in addPenguin generator', error)
    };
}

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

function* postAverage(action){
    try{
        yield axios.post('/api/feeding/average', action.payload)
        yield put ({type: 'SET_AVERAGES'})
    }catch (error){
        console.log('Failed GET request in FETCH AVERAGE', error)
    }
}

function* penguinFeedingSaga() {
    //yield takeEvery('UPDATE_FEEDINGS', fetchUpdatedFeedings);
   yield takeEvery('POST_FEEDING', addFeeding)
    //yield takeEvery('REMOVE_PENGUINS', deletePenguin)
    yield takeEvery('POST_AVERAGES', postAverage)
}

export default penguinFeedingSaga;