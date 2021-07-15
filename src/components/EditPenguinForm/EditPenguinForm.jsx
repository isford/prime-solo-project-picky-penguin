import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { useHistory } from 'react-router';

//Mui Start
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'


const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        }},
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    
}));
//Mui End

export default function EditPenguinForm() {
    const dispatch = useDispatch();
    const history = useHistory();

    //State variables to store data locally before making 
    //Put request
    const [penguinName, setPenguinName] = useState('');
    const [colony, setColony] = useState('');
    const [sex, setSex] = useState(0);
    const [bandColor, setBandColor] = useState('');

    //Fetches colonies from reducer
    useEffect(() => {
        dispatch({ type: 'FETCH_COLONIES' });
    }, []);

    //MUI START
    const classes = useStyles();
    const [state, setState] = React.useState({
        age: '',
        name: 'hai',
    });

    const handleChange = (event) => {
        const name = event.target.name;
        setState({
            ...state,
            [name]: event.target.value,
        });
    };

    const handleCancel = () => {
        console.log('Cancel button clicked')
        history.push('/penguinList')
    }
    //MUI END
    
    //Selects penguin to be edited in penguinEditReducer.js
    const penguin = useSelector(store => store.penguinEditReducer);
    //Selects colonies user can select from
    const colonyReducer = useSelector(store => store.colonyReducer);

    console.log('The penguin to be edited is',penguin);
    //Penguin object to be sent to DB in put request
    const updatedPenguin = {
        name: penguinName,
        colony_id: colony,
        sex: sex,
        band_color: bandColor
    }
    //
    const handleSubmit = (event) => {
        event.preventDefault();
        //Updates penguin info in DB
        axios.put(`/api/penguin/${penguin.id}`, updatedPenguin)
        .then(response => {
            //Clears edit penguin reducer
            dispatch({type: 'CLEAR_PENGUIN_EDIT'});
            //Sends user to penguin list
            history.push('/penguinList')
        }).catch(error => {
            console.log(error)
        })
    }

    console.log('The colony is...', colony)



    return (
        <div>
           <h1>Edit Penguin Form</h1>
           {/* NAME */}
        <div className="form-inputs">

            <div>
            <TextField
                onChange={(event) => setPenguinName(event.target.value)}
                id="penguin-nameField"
                label={penguin.name}
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

            {/* SEX */}
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

            {/* BAND COLOR */}
            </div>
            <div>
            <TextField
                onChange={(event) => setBandColor(event.target.value)}
                id="penguin-bandColorField"
                label={penguin.band_color}
                value={bandColor}
                helperText="Set the New Band Color(s)"
            />
            </div>
            {/* SUBMIT BUTTON */}
            <Button variant="contained" color="primary" onClick={handleSubmit}>Submit</Button>
            {/* CANCEL BUTTON */}
            <Button variant="contained" color="secondary" onClick={handleCancel}>Cancel</Button>
            
            </div>
        </div>
    )
}
