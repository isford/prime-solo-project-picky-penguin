import React from 'react';
import { useHistory } from 'react-router';


export default function SuccessPenguinPage() {
    const history = useHistory();

    const goHome = () =>{
        console.log('Home button clicked');
        history.push('/user')
    }

    const handleAddPenguin = () => {
        console.log('Add penguin clicked')
        history.push('/addPenguin')
    }

    return (
        <div>
            <p>You successfully added a penguin</p>
            <button onClick={goHome}>Home</button>
            <button onClick={handleAddPenguin}>Add Another Penguin</button>
        </div>
    )
}
