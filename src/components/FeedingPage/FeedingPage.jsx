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
        history.push('/addFeedingSuccess')
    }

    useEffect(() => {
        dispatch({ type: 'FETCH_PENGUINS' });
    }, []);

    console.log('IN PFR IS',penguinFeedingReducer);
    //console.log('IN PR IS', penguinReducer);



    return (
        <div>
            <h1>Feeding Page</h1>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Colony</TableCell>
                            <TableCell>Fish Count</TableCell>
                            {/* <TableCell>Fish Count</TableCell> */}
                            <TableCell>Calcium</TableCell>
                            <TableCell>Multivitamin</TableCell>
                            <TableCell>Itraconazole</TableCell>
                            <TableCell>Increase Fish</TableCell>
                            <TableCell>Decrease Fish</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {penguinFeedingReducer.map(penguin => {
                            return (
                                <TableRow key={penguin.id}>
                                    <TableCell>{penguin.name}</TableCell>
                                    <TableCell>{penguin.colony}</TableCell>
                                    <TableCell>{penguin.daily_total_am}</TableCell>
                                    {/* <TableCell>{fishCount}</TableCell> */}
                                    <TableCell><button onClick={() => handlePenguinCalcium(penguin)}>Calcium</button></TableCell>
                                    <TableCell><button onClick={() => handlePenguinMultivitamin(penguin)}>Multivitamin</button></TableCell>
                                    <TableCell><button onClick={() => handlePenguinItra(penguin)}>Itra</button></TableCell>
                                    <TableCell><button onClick={() => handleFishIncrease(penguin)}>Increase</button></TableCell>
                                    <TableCell><button onClick={() => handleFishDecrease(penguin)}>Decrease</button></TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>

            <button onClick = {handleFeed}>Submit Feed</button>
            <select name="time" id="time">
        <option value="am">AM</option>
        <option value="pm">PM</option>
      </select>
        </div>
    )
}
