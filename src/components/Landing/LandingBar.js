import React, {Component, useState, useEffect} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/authActions';

//material-ui
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Container from '@material-ui/core/Container';
import logo from '../../assets/images/green-logo.png';
import CircularProgress from "@material-ui/core/CircularProgress";
import Backdrop from "@material-ui/core/Backdrop/Backdrop";

// material-ui styling
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    appBar: {
        position: 'static',
        backgroundColor: "#6FD546",
    },
    title: {
        flexGrow: 1,
    },
    grid: {
        direction: 'row',
        justify: 'flex-end',
        alignItems: 'center',
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginRight: theme.spacing(2),
        marginTop: theme.spacing(1),
    },
    logo: {
        height: '5vmin',
    },
}));


function LandingBar(props) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function onChange(e) {
        //this.setState({ [e.target.name]: e.target.value });
        switch (e.target.name) {
            case 'email': {
                setEmail(e.target.value);
                return;
            }
            case 'password': {
                setPassword(e.target.value);
                return;
            }
        }
    }

    function onSubmit(e) {
        e.preventDefault();

        const credentials = {
            email: email,
            password: password
        };

        props.login(credentials);
    }

    const classes = useStyles();

    return (
        <div className={classes.root} >
            <AppBar className={classes.appBar}>
                <Toolbar>
                    <img src={logo} width="10%" alt="vPantry Logo" />
                    <div className={classes.title} />
                    <Container maxWidth='sm'>
                        <form className={classes.form} onSubmit={onSubmit}>
                        <Grid container className={classes.grid} >
                            <Grid item xs>
                                <TextField
                                    variant="outlined"
                                    id="email"
                                    name="email"
                                    label="Email Address"
                                    autoComplete="email"
                                    autoFocus
                                    onChange={onChange}
                                    value={email}
                                />
                            </Grid>
                            <Grid item xs>
                                <TextField
                                    variant="outlined"
                                    id="password"
                                    name="password"
                                    label="Password"
                                    type="password"
                                    autoComplete="current-password"
                                    onChange={onChange}
                                />
                            </Grid>
                            <Grid item>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                >
                                    Sign In
                                </Button>
                            </Grid>
                        </Grid>
                        <Grid container justify="flex-end" >
                            <Grid item >
                                <Link href="/signup" variant="body2">
                                    Don't have a virtual pantry? Sign Up!
                                </Link>
                            </Grid>
                        </Grid>
                        </form>
                    </Container>
                </Toolbar>
            </AppBar>
        </div>
    );
}

LandingBar.propTypes = {
    login: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
   auth: state.auth
});

export default connect(mapStateToProps, {login})(LandingBar);


/*

 */