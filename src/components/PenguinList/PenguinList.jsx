import React from 'react';
import { useHistory } from 'react-router';

export default function PenguinList() {
    const history = useHistory();

    const handlePenguinDetails = () =>{
        console.log('Penguin details button clicked')
        history.push('/penguinDetails')
    }
    
    const handleAddPenguin = () => {
        console.log('Add penguin clicked')
        history.push('/addPenguin')
    }
    

    return (
        <div>
            <p>You are on the Penguin List Page</p>
            <button onClick={handlePenguinDetails}>Penguin Details</button>
            <button onClick={handleAddPenguin}>Add Penguin</button>
        </div>
    )
}
