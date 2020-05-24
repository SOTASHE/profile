import React, { Component } from 'react'
import Proptypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';

//Mui 
import {connect } from 'react-redux';
import Button from '@material-ui/core/Button'
//icons here

class Profile extends Component {
    render() {
        const{classes, user: { credentilals:{ handle, createdAt, 
            imageUrl, bio, sites, location, loading}}} 
            = this.props;
        return (
            <div>
                
            </div>
        )
    }
}
const mapStateToProps = (state) =>({
    user: state.user

});
Profile.propTypes = {
    user: Proptypes.object.isRequired,
    classes : Proptypes.object.isRequired
}

export default  connect(mapStateToProps)(withStyles(styles)(Profile));