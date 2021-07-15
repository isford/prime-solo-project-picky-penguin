import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

//Material UI
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'



export default function AddPenguinForm() {
    const history = useHistory();
    const dispatch = useDispatch();

    const [penguinName, setPenguinName] = useState('');
    const [colony, setColony] = useState('');
    const [sex, setSex] = useState(0);
    const [bandColor, setBandColor] = useState('');
    //const [nesting, setNesting] = useState (false);
    //const [mating, setMating] = useState (false);
    //const [notes, setNotes] = useState ('');

    //Mui Start
    const useStyles = makeStyles((theme) => ({
        root: {
            '& .MuiTextField-root': {
                margin: theme.spacing(1),
                width: '25ch',
            }
        },
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
        },
        selectEmpty: {
            marginTop: theme.spacing(2),
        },

    }));
    //Mui End

    //Loads all colonies on page load to map through
    //reducer on Form
    useEffect(() => {
        dispatch({ type: 'FETCH_COLONIES' });
    }, []);
    //Selector to have access to colony data in DB
    const colonyReducer = useSelector(store => store.colonyReducer);
    //Mui Start
    const classes = useStyles();
    //Mui End

    //Cancel Start
    const handleCancel = () => {
        console.log('Cancel button clicked')
        history.push('/penguinList')
        //sends user back to Penguin List Page
    }//Cancel End

    //Stores all new penguin data in an object to send
    const penguinToAdd = {
        name: penguinName,
        colony_id: colony,
        sex: sex,
        band_color: bandColor
    }

    //Adds penguin to DB
    const handleAdd = () => {
        console.log('Submit button clicked', penguinToAdd)
        //Sends user to success page
        history.push('/addPenguinSuccess')
        //Dispatches to penguin.saga.js
        dispatch({
            type: 'POST_PENGUIN',
            payload: penguinToAdd
        })
        //Sets all values back to null
        setPenguinName('');
        setColony('');
        setSex(0);
        setBandColor('');
    }//End handle add

    return (
        <div>
            <h1>Add Penguin Form</h1>

            <div className="form-inputs">

                <div>
                    <TextField
                        onChange={(event) => setPenguinName(event.target.value)}
                        id="penguin-nameField"
                        value={penguinName}
                        helperText="Set the New Name"
                    />
                </div>

                <div>
                    {/* COLONY */}

                    <FormControl className={classes.formControl}>
                        <InputLabel shrink htmlFor="age-native-label-placeholder">
                            Colony
                        </InputLabel>
                        <NativeSelect
                            value={colony.id}
                            onChange={(event) => setColony(event.target.value)}
                            inputProps={{
                                name: 'colony',
                                id: 'colony-native-label-placeholder',
                            }}
                        >
                            {colonyReducer.map(colony => {
                                console.log(colony)
                                return (

                                    <option value={colony.id} key={colony.id}>{colony.name}</option>
                                )
                            })}

                        </NativeSelect>
                        <FormHelperText>Select the Colony</FormHelperText>
                    </FormControl>

                    <FormControl className={classes.formControl}>
                        <InputLabel shrink htmlFor="age-native-label-placeholder">
                            Sex
                        </InputLabel>
                        <NativeSelect
                            value={sex}
                            onChange={(event) => setSex(event.target.value)}
                            inputProps={{
                                name: 'sex',
                                id: 'sex-native-label-placeholder',
                            }}
                        >
                            <option value=''>Sex</option>
                            <option value='female'>Female</option>
                            <option value='male'>Male</option>
                        </NativeSelect>
                        <FormHelperText>Select the Sex</FormHelperText>
                    </FormControl>

                </div>
                <div>
                    <TextField
                        onChange={(event) => setBandColor(event.target.value)}
                        id="penguin-bandColorField"
                        //label={penguin.band_color}
                        value={bandColor}
                        helperText="Set the New Band Color(s)"
                    />
                </div>

                <Button variant="contained" color="secondary" onClick={handleCancel}>Cancel</Button>
                <Button variant="contained" color="primary" onClick={handleAdd}>Submit</Button>
            </div>
        </div>
    )
}
