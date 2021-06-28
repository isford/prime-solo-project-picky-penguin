import React from 'react';
import { useHistory } from 'react-router';

export default function AddColonyForm() {
    const history = useHistory();

    const handleCancel = ()=>{
        console.log('Cancel button clicked')
        history.push('/coloniesPage')
    }

    return (
        <div>
            <p>This is the add colony form</p>
            <button onClick={handleCancel}>Cancel</button>
        </div>
    )
}
