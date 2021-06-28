import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';
import { StayPrimaryPortraitTwoTone } from '@material-ui/icons';
import { useHistory } from 'react-router';


function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  const history = useHistory();

const handleTally = () => {
  console.log('Start Tally button clicked')
  history.push('/feedingPage')

}

  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      <p>Your ID is: {user.id}</p>
      <LogOutButton className="btn" />

      <p>Start your next feed</p>
      <select name="date" id="date">
        <option value="6/28">6/28</option>
        <option value="6/29">6/29</option>
        <option value="6/30">6/30</option>
        <option value="7/1">7/1</option>
      </select>

      <select name="time" id="time">
        <option value="am">AM</option>
        <option value="pm">PM</option>
      </select>

      <button onClick = {handleTally}>Let's Start Tally</button>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
