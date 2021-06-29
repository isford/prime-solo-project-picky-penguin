import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { useHistory } from 'react-router';

export default function EditColonyForm() {
    const dispatch = useDispatch();
    const history = useHistory();

    const name = useSelector(store => store.editReducer);
    console.log(name);

    const handleEdit = (event) => {
        dispatch({type: 'EDIT_ON_CHANGE',
                        payload: {property: 'name', value: event.target.value}})
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.put(`/api/colony/${name.id}`, name)
        .then(response => {
            dispatch({type: 'CLEAR_EDIT'});
            history.push('/coloniesPage')
        }).catch(error=>{
            console.log(error)
        })
    }
    return (
        <div>
            <p>Edit Colony Form</p>
            <p>{name.name}</p>
            <form>
                <input onChange = {(event)=> handleEdit(event)} value={name.name} type="text" placeholder="New Colony Name Here"></input>
                <button onClick = {handleSubmit}>Submit</button>
            </form>
        </div>
    )
}
