import React from 'react';
import { useHistory } from 'react-router';



export default function AddColonyForm() {
    const history = useHistory();

    const handleCancel = ()=>{
        console.log('Cancel button clicked')
        history.push('/coloniesPage')
    }

    const handleCreateNewColony = () => {
        console.log('Create New Colony button clicked')
        history.push('/addColonySuccess')
    }

    return (
        <div>
            <p>This is the add colony form</p>
            <input type = "text" placeholder = "Colony Name"></input>
            <button onClick = {handleCreateNewColony}>Create New Colony</button>
            <button onClick={handleCancel}>Cancel</button>
        </div>
    )
}
