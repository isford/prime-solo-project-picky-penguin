import React from 'react'
import { useHistory } from 'react-router';

export default function SuccessFeedingPage() {
    const history = useHistory();

    const goHome = () => {
        console.log('Home button clicked');
        history.push('/user')
    }
    return (
        <div>
            <p>Success Feeding Data Submitted</p>
            <button onClick={goHome}>Home</button>
        </div>
    )
}
