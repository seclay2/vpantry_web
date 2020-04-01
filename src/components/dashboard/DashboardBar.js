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
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

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
                <Grid container alignItems="flex-end" spacing={2}>
                    <Grid item xs={6}>
                        <img src={logo} width='20%' alt="vPantry Logo"/>
                    </Grid>
                    <Grid item xs={6}>
                        <Grid container justify="flex-end" alignItems="flex-end" >
                            <Tabs
                                variant="fullWidth"
                                value={value}
                                onChange={handleChange}
                                indicatorColor="primary"
                                textColor="primary"
                            >
                                <Tab label="Home" />
                                <Tab label="My Pantries" />
                                <Tab label="My Groups" />
                                <Tab label="My Profile" />
                            </Tabs>
                        </Grid>
                    </Grid>
                </Grid>
            </AppBar>

        </div>
    );
}

