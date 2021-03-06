import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { useHistory } from 'react-router';

import Button from '@material-ui/core/Button'


export default function EditColonyForm() {
    const dispatch = useDispatch();
    const history = useHistory();
    //Retrieves colony from edit.reducer.js
    const name = useSelector(store => store.editReducer);
    //console.log(name);

    //Dispatches each change to reducer
    const handleEdit = (event) => {
        dispatch({type: 'EDIT_ON_CHANGE',
                        payload: {property: 'name', value: event.target.value}})
    }
    //Handles submission of the new colonies name
    const handleSubmit = (event) => {
        event.preventDefault();
        //Put request made on client side
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
                <Button variant="contained" color="primary" onClick = {handleSubmit}>Submit</Button>
            </form>
        </div>
    )
}
