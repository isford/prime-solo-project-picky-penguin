import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router';
import { useDispatch,useSelector } from 'react-redux';


export default function AddPenguinForm() {
    const history = useHistory();
    const dispatch = useDispatch();

    const [penguinName, setPenguinName] = useState('');
    const [colony, setColony] = useState ('');
    const [sex, setSex] = useState('');
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
        console.log('Submit button clicked')
        history.push('/addPenguinSuccess')
    }

    return (
        <div>
            <p>Add Penguin Form</p>
            <input type="text" placeholder = "Name"></input>

            <select name="colony_name" id="colony_name">
                {colonyReducer.map(colony => {
                    return(
                    <option key={colony.id}>{colony.name}</option>
                    )
                })}
            </select>

            

            <select name="sex" id="sex">
                <option value="female">Female</option>
                <option value="male">Male</option>
            </select>

            {/* <select name="nesting" id="nesting">
                <option value="true">Yes they are nesting</option>
                <option value="false">No they are not nesting</option>
            </select>

            <select name="mating" id="mating">
                <option value="true">Yes they are breeding</option>
                <option value="false">No they are not breeding</option>
            </select> */}

            <input type="text" placeholder="Notes"></input>

            <button onClick={handleCancel}>Cancel</button>
            <button onClick={handleAdd}>Submit</button>
        </div>
    )
}
