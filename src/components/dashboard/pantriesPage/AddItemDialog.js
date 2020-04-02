import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";
import Dialog from "@material-ui/core/Dialog/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import {makeStyles} from "@material-ui/core/styles";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import AddIcon from "@material-ui/icons/Add";


function onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
}

function onSubmit(e) {
    e.preventDefault();

    const newUser = this.state;
    this.props.registerNewUser(newUser, this.props.history);
}

const useStyles = makeStyles((theme) => ({
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

function AddItemDialog(props) {
    const classes = useStyles;
    const { onClose, open } = props;

    const handleClose = () => {
        onClose(selectedValue);
    };

    return (
        <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
            <DialogTitle id="simple-dialog-title">Add Item</DialogTitle>
            <form>
                <form className={classes.form} noValidate onSubmit={onSubmit}>
                    <Grid container spacing={2}>
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
            </form>
        </Dialog>
    );
}

AddItemDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
};

export default AddItemDialog;