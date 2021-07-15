import React from 'react'
import { useHistory } from 'react-router';
import Button from '@material-ui/core/Button'

//Page seen upon successful feeding
export default function SuccessFeedingPage() {
    const history = useHistory();

    const goHome = () => {
        console.log('Home button clicked');
        history.push('/user')
    }
    return (
        <div>
            <h1>Success! Feeding Data Saved</h1>
            <Button variant="contained" color="primary" onClick={goHome}>Home</Button>
        </div>
    )
}
