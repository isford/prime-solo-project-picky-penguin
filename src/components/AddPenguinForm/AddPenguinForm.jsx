import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router';
import { useDispatch,useSelector } from 'react-redux';

import Button from '@material-ui/core/Button'



export default function AddPenguinForm() {
    const history = useHistory();
    const dispatch = useDispatch();

    const [penguinName, setPenguinName] = useState('');
    const [colony, setColony] = useState ('');
    const [sex, setSex] = useState(0);
    const [bandColor, setBandColor] = useState ('');
    //const [nesting, setNesting] = useState (false);
    //const [mating, setMating] = useState (false);
    //const [notes, setNotes] = useState ('');

    useEffect(() => {
        dispatch({ type: 'FETCH_COLONIES' });
    }, []);

    const colonyReducer = useSelector(store => store.colonyReducer);

    const handleCancel = () => {
        console.log('Cancel button clicked')
        history.push('/penguinList')
    }

    const penguinToAdd = {
        name: penguinName,
        colony_id: colony,
        sex: sex,
        band_color: bandColor
    }

    const handleAdd = () =>{
        console.log('Submit button clicked', penguinToAdd)
        history.push('/addPenguinSuccess')
        dispatch({type: 'POST_PENGUIN',
                payload: penguinToAdd})
        setPenguinName('');
        setColony('');
        setSex(0);
        setBandColor('');
    }

    return (
        <div>
            <p>Add Penguin Form</p>
            <input type="text" placeholder = "Name" value = {penguinName}
                onChange={(event) => setPenguinName(event.target.value)}></input>

            <select name="colony_name" id="colony_name"
                onChange={(event) => setColony(event.target.value)}>
                {colonyReducer.map(colony => {
                    return(
                    <option value={colony.id} key={colony.id}>{colony.name}</option>
                    )
                })}
            </select>

            

            <select onChange={(event) => setSex(event.target.value)} name="sex" id="sex" value={sex}>
                <option value='0'>Sex</option>
                <option value='female'>Female</option>
                <option value='male'>Male</option>
            </select>


            <input type="text" placeholder="Band Color" value = {bandColor}
                onChange={(event) => setBandColor(event.target.value)}></input>


            <Button variant="contained" color="primary" onClick={handleCancel}>Cancel</Button>
            <Button variant="contained" color="secondary" onClick={handleAdd}>Submit</Button>
        </div>
    )
}
