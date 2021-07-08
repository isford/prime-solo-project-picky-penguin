import React from 'react'
import { Line } from 'react-chartjs-2';
import { useSelector } from 'react-redux';

export default function Graph() {

    
    return (
        <div>
            <div>
                <Line
                    data={{
                        labels: ['6/26', '6/27', '6/28', '6/29', '6/30', '7/1'],
                        datasets: [
                            {
                                label: '# of Fish',
                                data: [12, 22, 4, 15, 11, 16],
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
        </div>
    )
}
