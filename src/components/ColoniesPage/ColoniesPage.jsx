import React from 'react'
import { useHistory } from 'react-router';

export default function ColoniesPage() {
    const history = useHistory();

    function handleAddColony(){
        console.log('Add colony button clicked')
        history.push('/addColony')
    }
    return (
        <div>
            <p>You are on the colonies page</p>
            <button onClick={handleAddColony}>Add Colony</button>
        </div>
    )
}
