import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { useHistory } from 'react-router';

//Material UI
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
//END MUI


export default function EditFeedingForm() {
    const dispatch = useDispatch();
    const history = useHistory();

    const [penguinFish, setPenguinFish] = useState(0);
    const [itraconazole, setItraconazole] = useState('');
    const [calcium, setCalcium] = useState('');
    const [multivitamin, setMultivitamin] = useState('');

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

    //MUI END

    // useEffect(() => {
    //     dispatch({ type: 'FETCH_COLONIES' });
    // }, []);

    const feeding = useSelector(store => store.penguinOldFeedingReducer);
    //const colonyReducer = useSelector(store => store.colonyReducer);

    console.log('The feeding to be edited is', feeding);

    const updatedFeeding = {
        fish: penguinFish,
        calcium: calcium,
        multivitamin: multivitamin,
        itraconazole: itraconazole
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.put(`/api/feeding/${feeding.feed_id}`, updatedFeeding)
            .then(response => {
                dispatch({ type: 'CLEAR_FEEDING_EDIT' });
                history.push('/feedingList')
            }).catch(error => {
                console.log(error)
            })
    }

    const handleCancel = () => {
        console.log('Cancel button clicked')
        history.push('/penguinList')
    }

    return (
        <div>
            <h1>Edit Feeding Form</h1>
            {/* NUMBER OF FISH */}
            {/* <input onChange={(event) => setPenguinFish(event.target.value)}
                value={penguinFish} type="number"
                placeholder={feeding.daily_data_am}></input> */}
            <div className="form-inputs">
                <TextField
                    onChange={(event) => setPenguinFish(event.target.value)}
                    type="number"
                    id="penguin-fishField"
                    label={feeding.daily_data_am}
                    value={penguinFish}
                    helperText="Set the New Fish Count"
                />

                {/* CALCIUM */}
                {/* <select onChange={(event) => setCalcium(event.target.value)} value={calcium}>
                <option value='0'>Calcium</option>
                <option value='true'>Eaten</option>
                <option value='false'>Not Eaten</option>
            </select> */}
                <div>
                    <FormControl className={classes.formControl}>
                        <InputLabel shrink htmlFor="calcium-native-label-placeholder">
                            Calcium
                        </InputLabel>
                        <NativeSelect
                            value={calcium}
                            onChange={(event) => setCalcium(event.target.value)} value={calcium}
                            inputProps={{
                                name: 'calcium',
                                id: 'calcium-native-label-placeholder',
                            }}
                        >
                            <option value=''>Calcium</option>
                            <option value='true'>Eaten</option>
                            <option value='false'>Not Eaten</option>
                        </NativeSelect>
                        <FormHelperText>Set Calcium Consumption</FormHelperText>
                    </FormControl>


                    {/* MULTIVITAMIN */}
                    {/* <select onChange={(event) => setMultivitamin(event.target.value)} name="sex" id="sex" value={multivitamin}>
                <option value='0'>Multivitamin</option>
                <option value='true'>Eaten</option>
                <option value='false'>Not Eaten</option>
            </select> */}

                    <FormControl className={classes.formControl}>
                        <InputLabel shrink htmlFor="multivitamin-native-label-placeholder">
                            Multivitamin
                        </InputLabel>
                        <NativeSelect
                            value={multivitamin}
                            onChange={(event) => setMultivitamin(event.target.value)} value={multivitamin}
                            inputProps={{
                                name: 'multivitamin',
                                id: 'multivitamin-native-label-placeholder',
                            }}
                        >
                            <option value=''>Multivitamin</option>
                            <option value='true'>Eaten</option>
                            <option value='false'>Not Eaten</option>
                        </NativeSelect>
                        <FormHelperText>Set Multivitamin Consumption</FormHelperText>
                    </FormControl>
                </div>
                {/* ITRACONAZOLE */}
                {/* <select onChange={(event) => setItraconazole(event.target.value)} name="sex" id="sex" value={itraconazole}>
                <option value='0'>Itraconazole</option>
                <option value='true'>Eaten</option>
                <option value='false'>Not Eaten</option>
            </select> */}

                <FormControl className={classes.formControl}>
                    <InputLabel shrink htmlFor="itraconazole-native-label-placeholder">
                        Itraconazole
                    </InputLabel>
                    <NativeSelect
                        value={itraconazole}
                        onChange={(event) => setItraconazole(event.target.value)} value={itraconazole}
                        inputProps={{
                            name: 'itraconazole',
                            id: 'itraconazole-native-label-placeholder',
                        }}
                    >
                        <option value=''>Itraconazole</option>
                        <option value='true'>Eaten</option>
                        <option value='false'>Not Eaten</option>
                    </NativeSelect>
                    <FormHelperText>Set Itraconazole Consumption</FormHelperText>
                </FormControl>

                <div>
                    {/* SUBMIT BUTTON */}
                    <Button variant="contained" color="primary" onClick={handleSubmit}>Submit</Button>
                    <Button variant="contained" color="secondary" onClick={handleCancel}>Cancel</Button>
                </div>
            </div>
        </div>
    )
}
