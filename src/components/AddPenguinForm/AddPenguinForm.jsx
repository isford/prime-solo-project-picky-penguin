import React from 'react'
import { useHistory } from 'react-router';

export default function AddPenguinForm() {
    const history = useHistory();

    const handleCancel = () => {
        console.log('Cancel button clicked')
        history.push('/penguinList')
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
                <option value="breeding_adults">Breeding Adults</option>
                <option value="juveniles">Juveniles</option>
                <option value="chicks">Chicks</option>
            </select>

            <select name="nesting" id="nesting">
                <option value="true">Yes they are nesting</option>
                <option value="false">No they are not nesting</option>
            </select>

            <select name="mating" id="mating">
                <option value="true">Yes they are breeding</option>
                <option value="false">No they are not breeding</option>
            </select>

            <input type="text" placeholder="Notes"></input>

            <button onClick={handleCancel}>Cancel</button>
            <button onClick={handleAdd}>Submit</button>
        </div>
    )
}
