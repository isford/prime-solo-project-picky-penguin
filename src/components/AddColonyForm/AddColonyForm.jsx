import React, {useState} from 'react';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';

import Button from '@material-ui/core/Button'




export default function AddColonyForm() {
    const history = useHistory();
    const dispatch = useDispatch();

    const [colony, setColony] = useState('');

    const handleCancel = ()=>{
        console.log('Cancel button clicked')
        history.push('/coloniesPage')
    }

    const colonyToAdd = {
        name: colony
    }

    const handleCreateNewColony = () => {
        console.log('Create New Colony button clicked');       
        dispatch({type: 'POST_COLONY',
                payload: colonyToAdd })
        setColony('');
        history.push('/addColonySuccess')
    }

    return (
        <div>
            <p>This is the add colony form</p>

            <input type = "text" placeholder = "Colony Name"
                onChange={(event) => setColony(event.target.value)}
                value={colony}></input>

            <Button variant="contained" color="primary" onClick = {handleCreateNewColony}>Create New Colony</Button>
            <Button variant="contained" color="secondary" onClick={handleCancel}>Cancel</Button>
        </div>
    )
}
