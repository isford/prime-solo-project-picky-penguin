import React from 'react';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import { Line } from 'react-chartjs-2';

import Button from '@material-ui/core/Button'




export default function PenguinDetails() {
    const history = useHistory();

    const penguinEditReducer = useSelector(store => store.penguinEditReducer)


    const handleGoBack = () => {
        console.log('Go back to list button clicked')
        history.push('/penguinList')
    }

    const handleEdit = () => {
        console.log('Edit button clicked');
    }

    const handleDelete = () => {
        console.log('Delete clicked');
        history.push('/deletePenguin');
    }


    return (
        <div>
            <h1>{penguinEditReducer.name}</h1>
                    <ul>
                        <li>Colony: {penguinEditReducer.colony_name}</li>
                        <li>Sex: {penguinEditReducer.sex}</li>
                        <li>Band Colors: {penguinEditReducer.band_color}</li>
                    </ul>

            {/* <div> */}
                {/* <div>
                    <Line
                        data={{
                            labels: ['Time'],
                            datasets: [
                                {
                                    label: '# of Fish',
                                    data: [1, 2],
                                    backgroundColor: 'white',
                                    borderColor: 'blue',
                                    tension: 0.2,
                                }
                            ]
                        }}
                        height={200}
                        width={300}
                        options={{
                            //maintainAspectRatio: true
                        }}
                    />
                </div>
            </div> */}
            
            <Button variant="contained" color="primary" onClick={handleGoBack}>Go Back To List</Button>
            <Button variant="contained" color="primary" onClick={handleEdit}>Edit</Button>
            <Button variant="contained" color="secondary" onClick={handleDelete}>Delete</Button>
        </div>
    )
}
