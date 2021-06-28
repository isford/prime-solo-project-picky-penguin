import React from 'react'
import { useHistory } from 'react-router';

export default function AddPenguinForm() {
    const history = useHistory();

    const handleCancel = () => {
        console.log('Cancel button clicked')
        history.push('/penguinList')
    }

    return (
        <div>
            <p>Add Penguin Form</p>
            <button onClick={handleCancel}>Cancel</button>
        </div>
    )
}
