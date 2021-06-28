import React from 'react';
import { useHistory } from 'react-router';

export default function PenguinDetails() {
    const history = useHistory();

    const handleGoBack = () => {
        console.log('Go back to list button clicked')
        history.push('/penguinList')
    }

    return (
        <div>
            <p>You are on penguin details page</p>
            <button onClick={handleGoBack}>Go Back To List</button>
        </div>
    )
}
