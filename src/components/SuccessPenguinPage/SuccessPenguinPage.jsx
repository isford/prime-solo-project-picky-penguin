import React from 'react';
import { useHistory } from 'react-router';
import Button from '@material-ui/core/Button'


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
            <h1>You successfully added a penguin</h1>
            <Button variant="contained" color="primary" onClick={goHome}>Home</Button>
            <Button variant="contained" color="secondary" onClick={handleAddPenguin}>Add Another Penguin</Button>
        </div>
    )
}
