import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import './FeedingPage.css';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

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

export default function FeedingPage() {
    const history = useHistory();
    const dispatch = useDispatch();
    //const penguinReducer = useSelector(store => store.penguinReducer);
    const penguinFeedingReducer = useSelector(store => store.penguinFeedingReducer);

    //material UI
    const classes = useStyles();
    //end material ui


    const [fishCount, setFishCount] = useState(0);
    const [editCalcium, setEditCalcium] = useState(false);
    const [editMultivitamin, setEditMultivitamin] = useState(false);
    const [editItraconazole, setEditItraconazole] = useState(false);


    

    const handleFishIncrease = (penguin) => {
        penguin.daily_total_am += 1;
        setFishCount(penguin.daily_total_am);
        dispatch({
            type: 'EDIT_DAILY_TOTAL',
            payload: penguin})
        console.log('The penguin who is eating is at', penguin)
        return;
    }

    const handleFishDecrease = (penguin) => {
        penguin.daily_total_am -= 1;
        setFishCount(penguin.daily_total_am);
        dispatch({
            type: 'EDIT_DAILY_TOTAL',
            payload: penguin
        })
        console.log('The penguin who is eating is at', penguin)
        return;
}

    const handleFeed = () => {
        console.log('Feed data submitted');
        history.push('/addFeedingSuccess');
        dispatch({type: 'POST_FEEDING',
                payload: penguinFeedingReducer})
    }

    useEffect(() => {
        dispatch({ type: 'FETCH_PENGUINS' });
    }, []);

    const handlePenguinCalcium = (penguin) => {
        penguin.calcium = !penguin.calcium;
        setEditCalcium(penguin.calcium);
        dispatch({
            type: 'EDIT_DAILY_TOTAL',
            payload: penguin
        })
        console.log(penguin.calcium)
        return;
    }

    const handlePenguinMultivitamin = (penguin) => {
        penguin.multivitamin = !penguin.multivitamin;
        setEditMultivitamin(penguin.multivitamin);
        dispatch({
            type: 'EDIT_DAILY_TOTAL',
            payload: penguin
        })
        console.log(penguin.multivitamin)
    }

    const handlePenguinItra = (penguin) => {
        penguin.itraconazole = !penguin.itraconazole;
        setEditItraconazole(penguin.itraconazole);
        dispatch({
            type: 'EDIT_DAILY_TOTAL',
            payload: penguin
        })
        console.log(penguin.itraconazole)
    }



    return (
        <div>
            <h1>Feeding Page</h1>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell className = "table-head-titles">Name</TableCell>
                            <TableCell className="table-head-titles">Colony</TableCell>
                            <TableCell className="table-head-titles">Fish Count</TableCell>
                            <TableCell className="table-head-titles">Calcium</TableCell>
                            <TableCell className="table-head-titles">Multivitamin</TableCell>
                            <TableCell className="table-head-titles">Itraconazole</TableCell>
                            <TableCell className="table-head-titles">Increase Fish</TableCell>
                            <TableCell className="table-head-titles">Decrease Fish</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {penguinFeedingReducer.map(penguin => {

                            return (
                                <TableRow key={penguin.id}>
                                    <TableCell>{penguin.name}</TableCell>
                                    <TableCell>{penguin.colony}</TableCell>
                                    <TableCell>{penguin.daily_total_am}</TableCell>

                                    <TableCell><Button variant="contained"
                                    color={penguin.calcium == true ? 'secondary' : 'default'}
                                    onClick={() => handlePenguinCalcium(penguin)}>Calcium</Button></TableCell>

                                    <TableCell><Button variant="contained" 
                                        color={penguin.multivitamin == true ? 'secondary' : 'default'}
                                    onClick={() => handlePenguinMultivitamin(penguin)}>Multivitamin</Button></TableCell>

                                    <TableCell><Button variant="contained" 
                                        color={penguin.itraconazole == true ? 'secondary' : 'default'}
                                    onClick={() => handlePenguinItra(penguin)}>Tuna Meds</Button></TableCell>
                                    <TableCell><Button variant="contained" color="primary" onClick={() => handleFishIncrease(penguin)}>Increase</Button></TableCell>
                                    <TableCell><Button variant="contained" color="secondary" onClick={() => handleFishDecrease(penguin)}>Decrease</Button></TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>

            <Button variant="contained" color="primary" onClick = {handleFeed}>Submit Feed</Button>
            {/* <select name="time" id="time">
        <option value="am">AM</option>
        <option value="pm">PM</option>
      </select> */}
        </div>
    )
}
