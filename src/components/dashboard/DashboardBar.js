import React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { logout} from "../../actions/authActions";

//material-ui
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar/AppBar";
import {makeStyles} from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from '@material-ui/core/Tab';
import logo from '../../assets/images/green-logo.png';
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";

// material-ui styling
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    appBar: {
        position: 'relative',
        backgroundColor: "#6FD546",
        zIndex: 2400
    },
    grid: {
        alignItems: "flex-end",
        spacing: theme.spacing(2),
        marginLeft: theme.spacing(2)
    }
}));

function DashboardBar(props) {
    const classes = useStyles();

    const [value, setValue] = React.useState("MY_PANTRIES");

    const handleChange = (event, newValue) => {
        setValue(newValue);
        props.changeView(newValue);
    };

    const logout = () => {
        props.logout();
    };

    return (
        <div className={classes.root} >
            <CssBaseline />
            <AppBar className={classes.appBar}>
                <Grid container className={classes.grid} >
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
                                <Tab label="My Pantries" value="MY_PANTRIES"/>
                                <Tab label="My Groups" value="MY_GROUPS"/>
                                <Tab label="My Profile" value="MY_PROFILE"/>
                                <Tab label="Sign Out" onClick={logout}/>
                            </Tabs>
                        </Grid>
                    </Grid>
                </Grid>
            </AppBar>

        </div>
    );
}

DashboardBar.propTypes = {
    logout: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    user: state.user
});

export default connect(mapStateToProps, { logout })(DashboardBar);
