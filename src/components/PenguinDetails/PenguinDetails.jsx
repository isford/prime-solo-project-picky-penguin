import React from 'react';
import { useHistory } from 'react-router';
import { Line } from 'react-chartjs-2';
import { useSelector } from 'react-redux';

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
            {/* <div>
                <Line
                    data={{
                        labels: ['6/26', '6/27', '6/28', '6/29', '6/30', '7/1'],
                        datasets: [
                            {
                                label: '# of Fish',
                                data: [12, 22, 4, 15, 11, 16],
                                backgroundColor: 'blue',
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
            </div> */}

            <div>
                    <ul>
                        <li>Colony: {penguinEditReducer.colony_name}</li>
                        <li>Sex: {penguinEditReducer.sex}</li>
                        <li>Band Colors: {penguinEditReducer.band_color}</li>
                    </ul>
                    
                
            </div>
            
            <button onClick={handleGoBack}>Go Back To List</button>
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}
