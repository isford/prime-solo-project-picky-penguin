import React, {useState} from 'react';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';

import Button from '@material-ui/core/Button'




export default function AddColonyForm() {
    const history = useHistory();
    const dispatch = useDispatch();
    
    //Used to store a new colony in local state
    const [colony, setColony] = useState('');
    //Sends user back to Colonies Page
    const handleCancel = ()=>{
        console.log('Cancel button clicked')
        history.push('/coloniesPage')
    }
    //Sets the user input of a colony name to an object
    const colonyToAdd = {
        name: colony
    }
    //Dispatches new colony to colony.saga.js
    const handleCreateNewColony = () => {
        console.log('Create New Colony button clicked');       
        dispatch({type: 'POST_COLONY',
                payload: colonyToAdd })
        setColony('');
        history.push('/addColonySuccess')
    }

    return (
        <div>
            <h1>This is the add colony form</h1>
            {/* Text input field to add new colony name */}
            <input type = "text" placeholder = "Colony Name"
                onChange={(event) => setColony(event.target.value)}
                value={colony}></input>

            <Button variant="contained" color="primary" onClick = {handleCreateNewColony}>Create New Colony</Button>
            <Button variant="contained" color="secondary" onClick={handleCancel}>Cancel</Button>
        </div>
    )
}
