import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { registerNewUser} from "../../actions/userActions";

// material-ui
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from "@material-ui/core/Typography";
import PlainBar from "../common/PlainBar";
import Copyright from "../common/Copyright";

import logo from '../../assets/images/white-logo.png';

class RegisterForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            response: {},
            given_name: '',
            family_name: '',
            nickname: '',
            email: '',
            password: '',
            password2: ''
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    async registerNewUser(newUser) {
        const res = await fetch('https://vpantryapi.herokuapp.com/signup', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(newUser)
        });
        const json = await res.json();
        this.setState({response: json});

            // .then(res => res.json())
            // .then(res => {
            //
            //     this.setState({response: res});
            //
            // })
            // .catch(error => console.log('error', error));
    };

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();

        let newUser = this.state;
        delete newUser['response'];
        // this.props.registerNewUser(newUser);
        this.registerNewUser(newUser);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.response !== this.state.response) {
            if (this.state.response.success) {
                this.props.history.replace('/');
            }
            else {
                alert(JSON.stringify(this.state.response));
            }
        }
    }

    useStyles = makeStyles((theme) => ({
        paper: {
            marginTop: theme.spacing(8),
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        form: {
            width: '100%', // Fix IE 11 issue.
            marginTop: theme.spacing(3),
        },
        submit: {
            margin: theme.spacing(3, 0, 2),
        },
    }));

    render() {
        const classes = this.useStyles;

        return (
            <div >
                <CssBaseline />
                <PlainBar />
                <br />
                <Container component="main" maxWidth="xs">
                    <div className={classes.paper}>
                        <form className={classes.form} noValidate onSubmit={this.onSubmit}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Typography variant='h2'>Sign Up!</Typography>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        autoComplete="fname"
                                        name="given_name"
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="given_name"
                                        label="First Name"
                                        autoFocus
                                        onChange={this.onChange}
                                        value={this.state.given_name}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        variant="outlined"
                                        fullWidth
                                        id="family_name"
                                        label="Last Name"
                                        name="family_name"
                                        autoComplete="lname"
                                        onChange={this.onChange}
                                        value={this.state.family_name}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        variant="outlined"
                                        fullWidth
                                        id="nickname"
                                        label="Nickname"
                                        name="nickname"
                                        autoComplete="nname"
                                        onChange={this.onChange}
                                        value={this.state.nickname}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email Address"
                                        name="email"
                                        autoComplete="email"
                                        onChange={this.onChange}
                                        value={this.state.email}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        name="password"
                                        label="Password"
                                        type="password"
                                        id="password"
                                        autoComplete="current-password"
                                        onChange={this.onChange}
                                        value={this.state.password}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        name="password2"
                                        label="Confirm Password"
                                        type="password"
                                        id="password2"
                                        autoComplete="current-password"
                                        onChange={this.onChange}
                                        value={this.state.password2}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControlLabel
                                        control={<Checkbox value="allowExtraEmails" color="primary" />}
                                        label="I would like to receive vPantry news and offers"
                                    />
                                </Grid>
                            </Grid>
                            <br />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                            >
                                Sign Up
                            </Button>
                        </form>
                    </div>
                    <Box mt={5}>
                        <Copyright />
                    </Box>
                </Container>
            </div>
        );
    }
}

RegisterForm.propTypes = {
    user: PropTypes.object
};

export default connect(null, { registerNewUser })(RegisterForm);


/*
<Grid item xs={12}>
    <img src={logo} width="100%" alt='vPantry logo'/>
</Grid>
 */
