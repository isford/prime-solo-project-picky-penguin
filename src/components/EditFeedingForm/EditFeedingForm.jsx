import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { useHistory } from 'react-router';

export default function EditFeedingForm() {
    const dispatch = useDispatch();
    const history = useHistory();

    const [penguinFish, setPenguinFish] = useState(0);
    const [itraconazole, setItraconazole] = useState('');
    const [calcium, setCalcium] = useState('');
    const [multivitamin, setMultivitamin] = useState('');

    // useEffect(() => {
    //     dispatch({ type: 'FETCH_COLONIES' });
    // }, []);

    const feeding = useSelector(store => store.penguinOldFeedingReducer);
    //const colonyReducer = useSelector(store => store.colonyReducer);

    console.log('The feeding to be edited is', feeding);

    const updatedFeeding = {
        fish: penguinFish,
        calcium: calcium,
        multivitamin: multivitamin,
        itraconazole: itraconazole
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.put(`/api/feeding/${feeding.feed_id}`, updatedFeeding)
            .then(response => {
                dispatch({ type: 'CLEAR_FEEDING_EDIT' });
                history.push('/feedingList')
            }).catch(error => {
                console.log(error)
            })
    }

    return (
        <div>
            <h1>Edit Feeding Form</h1>
            {/* NUMBER OF FISH */}
            <input onChange={(event) => setPenguinFish(event.target.value)}
                value={penguinFish} type="number"
                placeholder={feeding.daily_data_am}></input>

            {/* CALCIUM */}
            <select onChange={(event) => setCalcium(event.target.value)} name="sex" id="sex" value={calcium}>
                <option value='0'>Calcium</option>
                <option value='true'>Eaten</option>
                <option value='false'>Not Eaten</option>
            </select>
           

            {/* MULTIVITAMIN */}
            <select onChange={(event) => setMultivitamin(event.target.value)} name="sex" id="sex" value={multivitamin}>
                <option value='0'>Multivitamin</option>
                <option value='true'>Eaten</option>
                <option value='false'>Not Eaten</option>
            </select>

            {/* ITRACONAZOLE */}
            <select onChange={(event) => setItraconazole(event.target.value)} name="sex" id="sex" value={itraconazole}>
                <option value='0'>Itraconazole</option>
                <option value='true'>Eaten</option>
                <option value='false'>Not Eaten</option>
            </select>
            {/* SUBMIT BUTTON */}
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}
