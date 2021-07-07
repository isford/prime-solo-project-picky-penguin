import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

//material UI STUFF
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

//END MATERIAL UI STUFF

export default function FeedingList() {
    const history = useHistory();
    const dispatch = useDispatch();

    //material UI
    const classes = useStyles();
    //end material ui

    //const penguinReducer = useSelector(store => store.penguinReducer);
    //const userReducer = useSelector(store => store.userReducer);
    const penguinFeedingReducer = useSelector(store => store.penguinFeedingReducer);

    useEffect(() => {
        dispatch({ type: 'FETCH_FEEDINGS' });
    }, []);

    console.log('The feedings are', penguinFeedingReducer)

    const handlePenguinDetails = (penguin) => {
        console.log('Penguin details button clicked', penguin)
        history.push('/penguinDetails');
        dispatch({ type: 'SET_ONE_PENGUIN', payload: penguin })

    }

    const handleAddPenguin = () => {
        console.log('Add penguin clicked')
        history.push('/addPenguin')
    }

    const handleFeedingEdit = (penguin) => {
        console.log('Edit penguin clicked', penguin)
        dispatch({ type: 'EDIT_PENGUIN', payload: penguin })
        history.push('/editPenguinForm')
    }

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
                                    <TableCell><button onClick={() => handlePenguinDetails(penguin)}>Penguin Details</button></TableCell>
                                    <TableCell><button onClick={() => handleFeedingEdit(penguin)}>Edit</button></TableCell>
                                    <TableCell><button onClick={() => handleFeedingDelete(penguin)}>Delete</button></TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}
