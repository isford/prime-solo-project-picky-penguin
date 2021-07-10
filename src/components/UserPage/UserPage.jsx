import React,{ useState, useEffect } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';
import { useHistory } from 'react-router';
import DatePicker from 'react-date-picker'
import axios from 'axios';
//import { useDispatch, useSelector } from 'react-redux';
//import { useEffect } from 'react';
import {useDispatch} from 'react-redux';
//MATERIAL UI STUFF
import  Button  from '@material-ui/core/Button';
import 'date-fns';
//import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
//END MATERIAL UI

import '../UserPage/UserPage.css'



function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  //const penguin = useSelector((store => store.penguin.reducer))
  const penguinReducer = useSelector(store => store.penguinReducer);
  const dispatch = useDispatch();
  const history = useHistory();
  // const [value, onChange] = useState(new Date());
  // const [time, setTime] = useState('AM');
  //MATERIAL UI STUFF
  // The first commit of Material-UI
  const [selectedDate, setSelectedDate] = useState(new Date('2021-08-18T21:11:54'));

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  //END MATERIAL UI

const handleTally = () => {
  console.log('Start Tally button clicked')
  history.push('/feedingPage')
  dispatch({type: 'SET_FEEDING',
            payload: penguinReducer })

}

  useEffect(() => {
    dispatch({ type: 'FETCH_PENGUINS' });
  }, []);

// console.log('The selected date is',value);


  return (
    <div>

      <h2>Welcome, {user.username}!</h2>
      <p>Your ID is: {user.id}</p>
      <LogOutButton className="btn" />

      <p>Start your next feed</p>
          
          

      <Button variant="contained" color="primary" onClick = {handleTally}>Let's Start Tally</Button>

    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
