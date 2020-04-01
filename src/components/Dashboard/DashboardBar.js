import React from 'react';

//material-ui
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import {makeStyles} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from '@material-ui/core/Tab';
import logo from '../../assets/images/green-logo.png';

// material-ui styling
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    appBar: {
        position: 'static',
        backgroundColor: "#6FD546",
    },
    paper: {
        width: '30%',
    }
}));

export default function PlainBar() {
    const classes = useStyles();

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root} >
            <CssBaseline />
            <AppBar className={classes.appBar}>
                <Toolbar>
                    <img src={logo} width='10%' alt="vPantry Logo"/>
                    <Paper className={classes.paper}>
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            indicatorColor="primary"
                            textColor="primary"
                        >
                            <Tab label="My Pantry" />
                            <Tab label="My Profile" />
                        </Tabs>
                    </Paper>
                </Toolbar>
            </AppBar>
        </div>
    );
}

