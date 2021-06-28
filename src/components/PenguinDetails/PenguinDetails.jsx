import React from 'react';
import { useHistory } from 'react-router';

export default function PenguinDetails() {
    const history = useHistory();

    const handleGoBack = () => {
        console.log('Go back to list button clicked')
        history.push('/penguinList')
    }

    const handleEdit = () => {
        console.log('Edit button clicked');
    }

    const handleDelete = () => {
        console.log('Delete clicked');
        history.push('/deletePenguin');
    }


    return (
        <div>
            <p>You are on penguin details page</p>
            <button onClick={handleGoBack}>Go Back To List</button>
            <button onClick = {handleEdit}>Edit</button>
            <button onClick = {handleDelete}>Delete</button>
        </div>
    )
}
