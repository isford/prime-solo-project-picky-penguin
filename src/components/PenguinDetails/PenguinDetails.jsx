import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { Line } from 'react-chartjs-2';

import Button from '@material-ui/core/Button'




export default function PenguinDetails() {
    const history = useHistory();
    const dispatch = useDispatch();


    const penguinEditReducer = useSelector(store => store.penguinEditReducer)
    const graphData = useSelector(store => store.graphReducer)

    console.log('Data to be graphed is',graphData)
    const handleGoBack = () => {
        console.log('Go back to list button clicked')
        history.push('/penguinList')
    }

    const handleEdit = (penguinEditReducer) => {
        console.log('Edit penguin clicked', penguinEditReducer)
        dispatch({ type: 'EDIT_PENGUIN', payload: penguinEditReducer })
        history.push('/editPenguinForm')
    }

    const handleDelete = () => {
        console.log('Delete clicked');
        history.push('/deletePenguin');
    }

    useEffect(() => {
        dispatch({ type: 'FETCH_GRAPHS', payload: penguinEditReducer },
            { type: 'FETCH_AVERAGES' });
    }, []);

    console.log('Penguin edit reducer has', penguinEditReducer)


    return (
        <div>
            <h1>{penguinEditReducer.name}</h1>
                    <ul>
                        <li>Colony: {penguinEditReducer.colony_name}</li>
                        <li>Sex: {penguinEditReducer.sex}</li>
                        <li>Band Colors: {penguinEditReducer.band_color}</li>
                        <li>5 Day Average: {penguinEditReducer.average}</li>
                    </ul>

            <div>
                <div className = "chart">
                    <Line
                        data={{
                            labels: ['Time'],
                            datasets: [
                                {
                                    label: '# of Fish',
                                    data: graphData,
                                    backgroundColor: '#ffa726',
                                    borderColor: '#ffa726',
                                    tension: 0.3,
                                }
                            ]
                        }}
                        options={{
                            responsive: true,
                            maintainAspectRatio: false,
                            plugins: {
                                title: {
                                    display: true,
                                    text: 'Fish Consumed Over Time',
                                    color: 'black',
                                    font: {
                                        size: 20,
                                        family: 'tahoma',
                                        weight: 'bold',
                                    },
                                    padding: {
                                        bottom: 10
                                    }
                                
                                },
                                subtitle: {
                                    display: true,
                                    text: `5 Day Average: ${penguinEditReducer.average} `,
                                    color: 'black',
                                    font: {
                                        size: 14,
                                        family: 'tahoma',
                                        weight: 'bold',
                                    },
                                    padding: {
                                        bottom: 10
                                    }
                                }
                            },
                            parsing: {
                                xAxisKey: 'date',
                                yAxisKey: 'daily_total_am'
                            },
                            scales: {
                                yAxis: {
                                    min: 0,
                                    //max: 10,
                                    display: true,
                                    title: {
                                        display: true,
                                        text: 'Number of Fish Consumed'
                                    },
                                    ticks: {
                                        beginAtZero: true,
                                        stepSize: 1,
                                    },
                                },
                                xAxis: {
                                    min: 0,
                                    display: true,
                                    title: {
                                        display: true,
                                        text: 'Date'
                                    },
                                    ticks: {
                                        beginAtZero: true,
                                        stepSize: 1,
                                    },
                                },
                                
                            },
                        }}
                    />
                </div>
            </div>
            
            <Button variant="contained" className = "penguin-details" color="primary" onClick={handleGoBack}>Back to Penguin List</Button>
            {/* <Button variant="contained" color="primary" onClick={handleEdit}>Edit</Button>
            <Button variant="contained" color="secondary" onClick={handleDelete}>Delete</Button> */}
        </div>
    )
}
