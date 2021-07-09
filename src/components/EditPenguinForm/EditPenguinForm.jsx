import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { useHistory } from 'react-router';

export default function EditPenguinForm() {
    const dispatch = useDispatch();
    const history = useHistory();

    const [penguinName, setPenguinName] = useState('');
    const [colony, setColony] = useState('');
    const [sex, setSex] = useState(0);
    const [bandColor, setBandColor] = useState('');

    useEffect(() => {
        dispatch({ type: 'FETCH_COLONIES' });
    }, []);

    const penguin = useSelector(store => store.penguinEditReducer);
    const colonyReducer = useSelector(store => store.colonyReducer);

    console.log('The penguin to be edited is',penguin);

    const updatedPenguin = {
        name: penguinName,
        colony_id: colony,
        sex: sex,
        band_color: bandColor
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.put(`/api/penguin/${penguin.id}`, updatedPenguin)
        .then(response => {
            dispatch({type: 'CLEAR_PENGUIN_EDIT'});
            history.push('/penguinList')
        }).catch(error => {
            console.log(error)
        })
    }

    console.log('The colony is...', colony)



    return (
        <div>
           <h1>Edit Penguin Form</h1>
           {/* NAME */}
            <input onChange={(event) => setPenguinName(event.target.value)}
             value={penguinName} type="text" 
             placeholder={penguin.name}></input>

            {/* COLONY */}
            <select name="colony_name" id="colony_name"
                onChange={(event) => setColony(event.target.value)}>
                {colonyReducer.map(colony => {
                    console.log(colony)
                    return (
                        
                        <option value={colony.id} key={colony.id}>{colony.name}</option>
                    )
                })}
            </select>

            {/* SEX */}
            <select onChange={(event) => setSex(event.target.value)} name="sex" id="sex" value={sex}>
                <option value='0'>Sex</option>
                <option value='female'>Female</option>
                <option value='male'>Male</option>
            </select>

            {/* BAND COLOR */}
            <input onChange={(event) => setBandColor(event.target.value)}
                value={bandColor} type="text"
                placeholder="New Band Color Here"></input>
            {/* SUBMIT BUTTON */}
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}
