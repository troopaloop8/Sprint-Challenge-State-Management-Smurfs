import React, { useEffect } from "react";
import Smurf from './Smurf';
import { connect } from "react-redux";
import axios from 'axios';
import { getSmurfs } from '../actions';
import { deleteSmurf } from '../actions';

const SmurfsList = props => {

    
    useEffect(() => {
        props.getSmurfs();
    }, [])
    
    

    return(
        props.smurfs.map((smurf, index) => {
            return <Smurf smurf={smurf} key={index} />
        })
    )
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs
    }
}

export default connect(mapStateToProps, {getSmurfs})(SmurfsList)