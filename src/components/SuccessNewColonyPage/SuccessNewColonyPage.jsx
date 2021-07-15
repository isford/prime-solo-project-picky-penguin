import React from 'react'
import { useHistory } from 'react-router';

//Page seen upon successfully creating new colony
export default function SuccessNewColonyPage() {
    const history = useHistory();

    const goBack = () => {
        console.log('Back to the Colonies page')
        history.push('/coloniesPage')
    }


    return (
        <div>
            <p>You added a new Colony!</p>
            <button onClick={goBack}>Back To Colonies Page</button>
        </div>
    )
}
