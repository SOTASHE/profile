import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Profile from './components/Profile';


 class home extends Component {
    render() {
       
        return (
        
          <Grid container spacing={17}>
            <Grid item sm = {8} xs = {12}>
            <p>content</p> 
             </Grid>
            
            <Grid item sm = {4} xs = {12}>
            <Profile/>
        </Grid>
        </Grid>
            
        );
    }
}

export default home;
