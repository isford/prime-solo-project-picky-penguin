import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

//End Mui
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button'


const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

//END Mui

export default function FeedingList() {
    const history = useHistory();
    const dispatch = useDispatch();

    //material UI
    const classes = useStyles();
    //end material ui

    const penguinFeedingReducer = useSelector(store => store.penguinFeedingReducer);
    //Fetches all feedings to be displayed on DOM
    useEffect(() => {
        dispatch({ type: 'FETCH_FEEDINGS' });
    }, []);

    //console.log('The feedings are', penguinFeedingReducer)
    //Sends user to penguin details page and
    //store penguin details in penguin.edit.reducer.js
    const handlePenguinDetails = (penguin) => {
        console.log('Penguin details button clicked', penguin)
        history.push('/penguinDetails');
        dispatch({ type: 'SET_ONE_PENGUIN', payload: penguin })

    }
    //Sends feeding data to edit.old.feeding.reducer.js
    const handleFeedingEdit = (penguin) => {
        console.log('Edit Feeding clicked', penguin)
        dispatch({ type: 'EDIT_FEEDING', payload: penguin })
        history.push('/editFeedingForm')
    }
    //Deletes penguin
    const handleFeedingDelete = (penguin) => {
        console.log('Delete button clicked', penguin)
        dispatch({
            type: 'REMOVE_FEEDINGS',
            payload: penguin
        })
    }


    return (
        <div>
            <h1>You are on the Penguin Feeding List Page</h1>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Colony</TableCell>
                            <TableCell>Daily Total</TableCell>
                            <TableCell>View Penguin</TableCell>
                            <TableCell>Edit Feeding</TableCell>
                            <TableCell>Delete Feeding</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {penguinFeedingReducer.map(penguin => {
                            return (
                                <TableRow key={penguin.feed_id}>
                                    <TableCell>{penguin.name}</TableCell>
                                    <TableCell>{penguin.colony_name}</TableCell>
                                    <TableCell>{penguin.daily_total_am}</TableCell>
                                    <TableCell><Button variant="contained" color="primary" onClick={() => handlePenguinDetails(penguin)}>Penguin Details</Button></TableCell>
                                    <TableCell><Button variant="contained" color="primary" onClick={() => handleFeedingEdit(penguin)}>Edit</Button></TableCell>
                                    <TableCell><Button variant="contained" color="secondary" onClick={() => handleFeedingDelete(penguin)}>Delete</Button></TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}
