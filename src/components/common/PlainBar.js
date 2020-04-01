import React from 'react';

//material-ui
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import {makeStyles} from "@material-ui/core/styles";

import logo from '../../assets/images/green-logo.png';

// material-ui styling
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    appBar: {
        position: 'static',
        backgroundColor: "#6FD546",
    }
}));

export default function PlainBar() {
    const classes = useStyles();

    return (
        <div className={classes.root} >
            <CssBaseline />
            <AppBar className={classes.appBar}>
                <Toolbar>
                    <img src={logo} width='10%' alt="vPantry Logo"/>
                </Toolbar>
            </AppBar>
        </div>
    );
}

