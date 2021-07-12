import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import swal from 'sweetalert';

import ReactDOM from 'react-dom';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import '@fontsource/roboto';
import purple from '@material-ui/core/colors/purple';


import { useDispatch } from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import AboutPage from '../AboutPage/AboutPage';
import UserPage from '../UserPage/UserPage';
import InfoPage from '../InfoPage/InfoPage';
import LandingPage from '../LandingPage/LandingPage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import FeedingPage from '../FeedingPage/FeedingPage';
import ColoniesPage from '../ColoniesPage/ColoniesPage';
import PenguinList from '../PenguinList/PenguinList';
import PenguinDetails from '../PenguinDetails/PenguinDetails';
import AddColonyForm from '../AddColonyForm/AddColonyForm';
import AddPenguinForm from '../AddPenguinForm/AddPenguinForm';
import SuccessPenguinPage from '../SuccessPenguinPage/SuccessPenguinPage';
import SuccessFeedingPage from '../SuccessFeedingPage/SuccessFeedingPage';
import DeletePenguin from '../DeletePenguin/DeletePenguin';
import SuccessNewColonyPage from '../SuccessNewColonyPage/SuccessNewColonyPage';
import EditColonyForm from '../EditColonyForm/EditColonyForm';
import EditPenguinForm from '../EditPenguinForm/EditPenguinForm';
import FeedingList from '../FeedingList/FeedingList';
import EditFeedingForm from '../EditFeedingForm/EditFeedingForm'
import PenguinListCopy from '../PenguinList copy/PenguinListCOPY';

import './App.css';
import { dark } from '@material-ui/core/styles/createPalette';

const theme = createTheme({
  palette: {
    primary: {
      main: '#29b6f6',
    },
    secondary: {
      main: '#ffa726',
    },
  },
  typography: {
    fontFamily: [
      'Palatino',
      'Georgia',
      'Times New Roman',
      'Times',
      'serif',
    ].join(','),
  },
});

function App() {
  const dispatch = useDispatch();

  console.log('The theme is', theme)

  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
  }, [dispatch]);

  return (



    <Router>
      <ThemeProvider theme={theme}>
        <div>
          <Nav />
          <Switch>
            {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
            <Redirect exact from="/" to="/home" />

            {/* Visiting localhost:3000/about will show the about page. */}
            <Route
              // shows AboutPage at all times (logged in or not)
              exact
              path="/about"
            >
              <AboutPage />
            </Route>

            {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}
            <ProtectedRoute
              // logged in shows UserPage else shows LoginPage
              exact
              path="/user"
            >
              <UserPage />
            </ProtectedRoute>

            <ProtectedRoute
              // logged in shows InfoPage else shows LoginPage
              exact
              path="/info"
            >
              <InfoPage />
            </ProtectedRoute>

            {/* When a value is supplied for the authRedirect prop the user will
            be redirected to the path supplied when logged in, otherwise they will
            be taken to the component and path supplied. */}
            <ProtectedRoute
              // with authRedirect:
              // - if logged in, redirects to "/user"
              // - else shows LoginPage at /login
              exact
              path="/login"
              authRedirect="/user"
            >
              <LoginPage />
            </ProtectedRoute>

            <ProtectedRoute
              // with authRedirect:
              // - if logged in, redirects to "/user"
              // - else shows RegisterPage at "/registration"
              exact
              path="/registration"
              authRedirect="/user"
            >
              <RegisterPage />
            </ProtectedRoute>

            <ProtectedRoute
              // with authRedirect:
              // - if logged in, redirects to "/user"
              // - else shows LandingPage at "/home"
              exact
              path="/home"
              authRedirect="/user"
            >
              <LandingPage />
            </ProtectedRoute>

            {/* MY NEW ROUTES */}
            <ProtectedRoute
              exact
              path="/feedingPage"
            >
              <FeedingPage />
            </ProtectedRoute>

            <ProtectedRoute
              exact
              path="/coloniesPage"
            >
              <ColoniesPage />
            </ProtectedRoute>

            {/* <ProtectedRoute
            exact
            path="/penguinList"
          >
            <PenguinList />
          </ProtectedRoute> */}

            <ProtectedRoute
              exact
              path="/penguinDetails"
            >
              <PenguinDetails />
            </ProtectedRoute>

            <ProtectedRoute
              exact
              path="/addColony"
            >
              <AddColonyForm />
            </ProtectedRoute>

            <ProtectedRoute
              exact
              path="/addPenguin"
            >
              <AddPenguinForm />
            </ProtectedRoute>

            <ProtectedRoute
              exact
              path="/addPenguinSuccess"
            >
              <SuccessPenguinPage />
            </ProtectedRoute>

            <ProtectedRoute
              exact
              path="/addFeedingSuccess"
            >
              <SuccessFeedingPage />
            </ProtectedRoute>

            <ProtectedRoute
              exact
              path="/deletePenguin"
            >
              <DeletePenguin />
            </ProtectedRoute>

            <ProtectedRoute
              exact
              path="/addColonySuccess"
            >
              <SuccessNewColonyPage />
            </ProtectedRoute>

            <ProtectedRoute
              exact
              path="/editColonyForm"
            >
              <EditColonyForm />
            </ProtectedRoute>

            <ProtectedRoute
              exact
              path="/editPenguinForm"
            >
              <EditPenguinForm />
            </ProtectedRoute>

            <ProtectedRoute
              exact
              path="/feedingList"
            >
              <FeedingList />
            </ProtectedRoute>

            <ProtectedRoute
              exact
              path="/editFeedingForm"
            >
              <EditFeedingForm />
            </ProtectedRoute>

            <ProtectedRoute
              exact
              path="/PenguinList"
            >
              <PenguinListCopy />
            </ProtectedRoute>

            {/* END MY NEW ROUTES */}

            {/* If none of the other routes matched, we will show a 404. */}
            <Route>
              <h1>404</h1>
            </Route>
          </Switch>
          <Footer />
        </div>
      </ThemeProvider>
    </Router>


  );
}

export default App;
