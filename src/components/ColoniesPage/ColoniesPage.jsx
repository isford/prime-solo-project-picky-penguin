import React, {useEffect} from 'react';
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
import Button from '@material-ui/core/Button'

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

//END MATERIAL UI STUFF

export default function ColoniesPage() {
    const history = useHistory();
    const dispatch = useDispatch();
    //GETs colonies stored locally
    const colonyReducer = useSelector(store => store.colonyReducer);
    //GETS user info stored locally
    const userReducer = useSelector(store => store.userReducer);

    //material UI
    const classes = useStyles();
    //end material ui

    //Loads colonies from reducer to display on DOM
    useEffect(() => {
        dispatch({ type: 'FETCH_COLONIES' });
    }, []);

    //Pushes user to add colony form
    const handleAddColony = () =>{
        console.log('Add colony button clicked')
        history.push('/addColony')
    }

    //Deletes colony via dispatch via colony saga
    const handleDelete = (colony) =>{
        console.log('Colony to be deleted', colony)
        dispatch({type: 'REMOVE_COLONIES',
                payload: colony})
    }
    //Allows user to edit colony name by saving as object in
    //edit.reducer.js
    const handleEdit = (colony) => {
        console.log('Colony to be updated is', colony);
        dispatch({type:'EDIT_COLONY', payload: colony})
        history.push('/editColonyForm');

    }
    return (
        <div>
            <h1>Colonies Page</h1>

            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                            <TableCell>Colony Name</TableCell>
                            <TableCell>Number of Birds </TableCell>
                            <TableCell>Edit Colony Name</TableCell>
                            {/* <TableCell>Delete Colony</TableCell> */}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {colonyReducer.map(colony => {
                        return (
                            <TableRow key = {colony.id}>
                                <TableCell>{colony.name}</TableCell>
                                <TableCell>{colony.count}</TableCell>
                                <TableCell><Button variant="contained" color="secondary" onClick={() => handleEdit(colony)}>Edit</Button></TableCell>
                                {/* <TableCell><Button variant="contained" color="secondary" onClick={() => handleDelete(colony)}>Delete</Button></TableCell> */}
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
            </TableContainer>

            {/* <Button variant="contained" color="primary" onClick={handleAddColony}>Add Colony</Button> */}
        </div>
    )
}
