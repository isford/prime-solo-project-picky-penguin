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
//END MATERIAL UI



function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  //const penguin = useSelector((store => store.penguin.reducer))
  const penguinReducer = useSelector(store => store.penguinReducer);
  const dispatch = useDispatch();
  const history = useHistory();
  const [value, onChange] = useState(new Date());
  const [time, setTime] = useState('AM');
  //MATERIAL UI STUFF
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

console.log('The selected date is',value);


  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      <p>Your ID is: {user.id}</p>
      <LogOutButton className="btn" />


      {/* MATERIAL UI START */}
      {/* MATERIAL UI END */}

      <p>Start your next feed</p>

      {/* <DatePicker
        onChange={onChange}
        value={value} /> */}

      {/* <select name="date" id="date">
        <option value="6/28">6/28</option>
        <option value="6/29">6/29</option>
        <option value="6/30">6/30</option>
        <option value="7/1">7/1</option>
      </select> */}

      {/* <select name="time" id="time">
        <option value="am">AM</option>
        <option value="pm">PM</option>
      </select> */}

      <button onClick = {handleTally}>Let's Start Tally</button>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
