import React from 'react';
import {Component} from "react";
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

import './App.css';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';

//pages here
import home from './pages/home';
import login from './pages/login';
import signup from './pages/signup';
//components
import Navbar from './components/Navbar';



const theme = createMuiTheme({


    palette: {
      primary: {
        main: '#e1bee7',
      },
      secondary: {
        main: '#e53935',
      },
    },

})

class App extends Component{
    render(){
  return (
    <MuiThemeProvider theme={theme}>
     <div className="App">
       <Router>
       <Navbar/>
       <div className="container">
         
       
             <Switch>
                 <Route exact path="/" component = {home}/>
                 <Route exact path="/login" component = {login}/>
                 <Route exact path="/signup" component = {signup}/>
             </Switch>
       </div>
            </Router>
</div>
   

    </MuiThemeProvider>
   
  );
}
}

export default App;
