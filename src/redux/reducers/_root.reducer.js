import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import colonyReducer from './colony.reducer';
import editReducer from './edit.reducer';
import penguinReducer from './penguin.reducer';
import penguinEditReducer from './penguin.edit.reducer';
import penguinFeedingReducer from './penguin.feeding.reducer';
import editPenguinFeedingReducer from './edit.penguin.feeding.reducer';
import penguinOldFeedingReducer from './edit.old.feeding.reducer'
import graphReducer from './graph.reducer';

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  colonyReducer,//Stores colonies[]
  editReducer,//stores colonies to be edited{}
  penguinReducer,//stores all penguins []
  penguinEditReducer,//Stores penguin to be edited {}
  penguinFeedingReducer,//stores feedings []
  editPenguinFeedingReducer,//can be removed
  penguinOldFeedingReducer,//Stores feeding to be edited
  graphReducer,//stores data to used on details page for chart.js
});

export default rootReducer;
