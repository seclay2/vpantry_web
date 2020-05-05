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
import Link from "@material-ui/core/Link";

class ProfilePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            given_name: this.props.user.given_name,
            family_name: this.props.user.family_name,
            nickname: this.props.user.nickname,
            email: this.props.user.email
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();

        // this.props.registerNewUser(newUser);
        //this.updateUser(newUser);
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
                <Container component="main" maxWidth="xs">
                    <div className={classes.paper}>
                        <form className={classes.form} noValidate onSubmit={this.onSubmit}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        name="given_name"
                                        variant="standard"
                                        fullWidth
                                        id="given_name"
                                        label="First Name"
                                        onChange={this.onChange}
                                        value={this.state.given_name}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        variant="standard"
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
                                        variant="standard"
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
                                        variant="standard"
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
                                    <Link >Change password</Link>
                                </Grid>
                            </Grid>
                            <br />
                            <br />
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                            >
                                Submit Changes
                            </Button>
                        </form>
                    </div>
                    <br />
                    <br />
                    <Box mt={5}>
                        <Copyright />
                    </Box>
                </Container>
            </div>
        );
    }
}

ProfilePage.propTypes = {
    user: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    user: state.user
});

export default connect(mapStateToProps)(ProfilePage);
