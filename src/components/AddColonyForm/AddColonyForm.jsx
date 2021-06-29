import React, {useState} from 'react';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';



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

            <button onClick = {handleCreateNewColony}>Create New Colony</button>
            <button onClick={handleCancel}>Cancel</button>
        </div>
    )
}
