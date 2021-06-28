[ SET UP - React/Redux ]
    [x] npm install
    [x] npm install redux 
    [x] npm install react-redux
    [x] npm install redux-logger
    [x] npm install react-router-dom
    [ ] Make Components
    [x] Material UI ?
        [x] npm install @material-ui/core
        [x] npm install @material-ui/icons
        [x] npm install @fontsource/roboto
            [x] import '@fontsource/roboto';(put in app.js)
    [x] SweetAlert?
        [x] npm install sweetalert --save
        [x] import swal from 'sweetalert';
    [ ] IN DATABASE
        [ ] Make database and table, ect from data.sql
        [ ] Make sure to input at least one data point so you can test your GET route
    [ ] IN APP
        [x] import {Route, HashRouter as Router} from 'react-router-dom';
        [x] Wrap the app in a <Router>
        [ ] Admin or Client?
            [ ] Client
                [ ] Make Routes through the different pages
            [ ] Admin
                [ ] Make Routes through the different pages
    [x] IN INDEX.JS 
        [x] import {createStore, combineReducers, applyMiddleware} from 'redux';
        [x] import {Provider} from 'react-redux';
        [x] import logger from 'redux-logger';
        [x] Create Store
            [x] Wrap with combineReducers
                [x] Pass in reducers
            [x] applyMiddleware
                [x] logger
        [x] React.DOM.render
            [  ] React.StrictMode?
            [x] Wrap the app in a <Provider> and give the provider a store -> <Provider store={store}>
            [  ] Service Worker?
    [x] SERVER.JS
        [  ] Will need to make an express route to './routes/feedback.router.js
    [x] FEEDBACK.ROUTER.JS
        [  ] const import express = require('express)
        [  ] const router = express.Router();
        [  ] const pool = require('../modules/pool');
        [  ] Post request to database
 
[x]REDUX SAGA
   [] import {takeEvery, put} from 'redux-saga/effects'
   [] import createSagaMiddleware from 'redux-saga'
      [] in the store - applyMiddleware(sagaMiddleware, logger)
   [] const sagaMiddleware = createSagaMiddleware()
   [] sagaMiddleware.run(watcherSaga)


  [] Components/ Home Page built (w/o Calendar)
    [x]Home page  built with little functionality
        []Need to get data for tally onChange to pass to a reducer
    [x]Start tally button clicked and navigates to Feeding page
    [x]Colonies button in navbar
        [x]Correctly navigating
        [x]Need a button to go to AddColonyForm
    [x]Penguins to go to PenguinList button in navbar
        [x]Button to view penguin details in Penguin List Page
        [x]Button to add a new penguin AddPenguinForm

    []Success upon submitting feeding data page
        []Home Button to go back home

    []Delete and Edit buttons on Penguin details page

    []Penguin deleted page 
        []Home button

    []Penguin created page
        []Home button
        []Add another penguin button


