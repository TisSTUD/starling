import { Grid, makeStyles } from '@material-ui/core';
import React from 'react'
import Leftbar from './components/Leftbar';
import Navbar from './components/Navbar';

import Rightbar from './components/Rightbar';

import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch
} from 'react-router-dom'

import Home from './Pages/Home/Home';
import Profil from './Pages/Profil/Profil';
import Messages from './Pages/Messages/Messages';
import Notifications from './Pages/Notifications/Notifications'



const useStyles = makeStyles((theme)=> ({
    right:{
        [theme.breakpoints.down("sm")]:{
            display:"none"
        },
    },
}));


export default function App() {
    const classes = useStyles();
    return (
        <div>
            <Navbar/>
            
               
            <Router>
                <Leftbar/>
                <main>
                    <Switch>
                        <Route path="/" exact>
                            <Home/>
                        </Route>
                        <Route path="/Profil" exact>
                            <Profil/>
                        </Route>
                        <Route path="/Messages" exact>
                            <Messages/>
                        </Route>
                        <Route path="/Notifications" exact>
                            <Notifications/>
                        </Route>
                        <Redirect to="/" />
                    </Switch>
                </main>
            </Router>
            
            
            
            
           
               
            
            
        </div>
    )
}
