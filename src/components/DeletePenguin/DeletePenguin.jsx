import React from 'react';
import { useHistory } from 'react-router';

export default function DeletePenguin() {
    const history = useHistory();

    //Lets user navigate back home
    const goHome = () => {
        console.log('Home button clicked');
        history.push('/user')
    }
    //Page displayed upon successful deletion of penguin
    return (
        <div>
            <p>Penguin was deleted</p>
            <button onClick={goHome}>Home</button>
        </div>
    )
}
