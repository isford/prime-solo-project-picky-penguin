import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router';
import { useDispatch,useSelector } from 'react-redux';

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
    const [colony, setColony] = useState ('');
    const [sex, setSex] = useState(0);
    const [bandColor, setBandColor] = useState ('');
    //const [nesting, setNesting] = useState (false);
    //const [mating, setMating] = useState (false);
    //const [notes, setNotes] = useState ('');

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

    useEffect(() => {
        dispatch({ type: 'FETCH_COLONIES' });
    }, []);

    const colonyReducer = useSelector(store => store.colonyReducer);
    const classes = useStyles();

    const handleCancel = () => {
        console.log('Cancel button clicked')
        history.push('/penguinList')
    }

    const penguinToAdd = {
        name: penguinName,
        colony_id: colony,
        sex: sex,
        band_color: bandColor
    }

    const handleAdd = () =>{
        console.log('Submit button clicked', penguinToAdd)
        history.push('/addPenguinSuccess')
        dispatch({type: 'POST_PENGUIN',
                payload: penguinToAdd})
        setPenguinName('');
        setColony('');
        setSex(0);
        setBandColor('');
    }

    return (
        <div>
            <p>Add Penguin Form</p>

            <div className="form-inputs">

            {/* <input type="text" placeholder = "Name" value = {penguinName}
                onChange={(event) => setPenguinName(event.target.value)}></input> */}

                <div>
                    <TextField
                        onChange={(event) => setPenguinName(event.target.value)}
                        id="penguin-nameField"
                        //label={penguin.name}
                        value={penguinName}
                        helperText="Set the New Name"
                    />
                </div>

            {/* <select name="colony_name" id="colony_name"
                onChange={(event) => setColony(event.target.value)}>
                {colonyReducer.map(colony => {
                    return(
                    <option value={colony.id} key={colony.id}>{colony.name}</option>
                    )
                })}
            </select> */}

                <div>
                    {/* COLONY */}
                    {/* <select name="colony_name" id="colony_name"
                onChange={(event) => setColony(event.target.value)}>
                {colonyReducer.map(colony => {
                    console.log(colony)
                    return (
                        
                        <option value={colony.id} key={colony.id}>{colony.name}</option>
                    )
                })}
            </select> */}

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

            

            {/* <select onChange={(event) => setSex(event.target.value)} name="sex" id="sex" value={sex}>
                <option value='0'>Sex</option>
                <option value='female'>Female</option>
                <option value='male'>Male</option>
            </select> */}

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
            {/* <input type="text" placeholder="Band Color" value = {bandColor}
                onChange={(event) => setBandColor(event.target.value)}></input> */}
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
