import React from 'react';
import { useHistory } from 'react-router';
import { Line } from 'react-chartjs-2';

export default function PenguinDetails() {
    const history = useHistory();

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
            <p>You are on penguin details page</p>
            <ul>
                <li>Name: Nadine</li>
                <li>Sex: F</li>
                <li>Mate: Sphen</li>
                <li>Band Color: Blue/Pink</li>
                <li>Itraconazole: Not Needed</li>
                <li>Nesting: None</li>
                <li>Breeding: None</li>
                <li>Notes: A good water chicken</li>
            </ul>

            <div>
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
                    height={400}
                    width={600}
                    options={{
                        maintainAspectRatio: true
                    }}
                />
            </div>
            
            <button onClick={handleGoBack}>Go Back To List</button>
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}
