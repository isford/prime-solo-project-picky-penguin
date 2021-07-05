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

export default function PenguinList() {
    const history = useHistory();
    const dispatch = useDispatch();

    //material UI
    const classes = useStyles();
    //end material ui

    const penguinReducer = useSelector(store => store.penguinReducer);
    const userReducer = useSelector(store => store.userReducer);
    const penguinFeedingReducer = useSelector (store => store.penguinFeedingReducer);

    useEffect(() => {
        dispatch({ type: 'FETCH_PENGUINS' },
                {type: 'FETCH_AVERAGES', payload: penguinReducer});
    }, []);

    console.log('THE AVERAGES ARE?', penguinFeedingReducer)

    const handlePenguinDetails = (penguin) =>{
        console.log('Penguin details button clicked', penguin)
        //history.push('/penguinDetails')
    }
    
    const handleAddPenguin = () => {
        console.log('Add penguin clicked')
        history.push('/addPenguin')
    }

    const handlePenguinEdit = (penguin) => {
        console.log('Edit penguin clicked', penguin)
        dispatch({ type: 'EDIT_PENGUIN', payload: penguin })
        history.push('/editPenguinForm')
    }

    const handlePenguinDelete = (penguin) => {
        console.log('Delete button clicked', penguin)
        dispatch({
            type: 'REMOVE_PENGUINS',
            payload: penguin
        })
    }
    

    return (
        <div>
            <p>You are on the Penguin List Page</p>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                            <TableCell>Colony</TableCell>
                            <TableCell>5 Day Average</TableCell>
                            <TableCell>View Penguin</TableCell>
                            <TableCell>Edit Penguin</TableCell>
                            <TableCell>Delete Penguin</TableCell>
                    </TableRow>
                </TableHead>
                    <TableBody>
                    {penguinReducer.map(penguin => {
                        return(
                            <TableRow key = {penguin.id}>
                                <TableCell>{penguin.name}</TableCell>
                                <TableCell>{penguin.colony_name}</TableCell>
                                <TableCell>FISH AVERAGE</TableCell>
                                <TableCell><button onClick={() => handlePenguinDetails(penguin)}>Penguin Details</button></TableCell>
                                <TableCell><button onClick={() => handlePenguinEdit(penguin)}>Edit</button></TableCell>
                                <TableCell><button onClick={() => handlePenguinDelete(penguin)}>Delete</button></TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
            </TableContainer>

            <button onClick={handleAddPenguin}>Add Penguin</button>
        </div>
    )
}
