import React from 'react';
import LandingPage from './landingPage';
import {Route,Switch} from 'react-router-dom';
import Resume from './resume';
import AboutMe from './aboutme';
import Projects from './project';
import Contact from './contact';






 
const Main = () => (
    <Switch>
        
       <Route exact path= "/landingPage"component ={LandingPage}/>
       <Route path= "/aboutme"component ={AboutMe}/>
       <Route path= "/contact"component={Contact}/>
       <Route path= "/resume"component ={Resume}/>
       <Route path= "/projects"component ={Projects}/>
    
       
    </Switch>
)
export default Main;