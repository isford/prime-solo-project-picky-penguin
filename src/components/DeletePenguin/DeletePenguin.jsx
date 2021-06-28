import React from 'react';
import { useHistory } from 'react-router';

export default function DeletePenguin() {
    const history = useHistory();

    const goHome = () => {
        console.log('Home button clicked');
        history.push('/user')
    }

    return (
        <div>
            <p>Penguin was deleted</p>
            <button onClick={goHome}>Home</button>
        </div>
    )
}
