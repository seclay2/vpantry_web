import React, {Component} from 'react';
import {createPantry} from "../../../actions/pantryActions";
import PlainBar from "../../common/PlainBar";
import Button from '@material-ui/core/Button';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import Copyright from "../../common/Copyright";
import {makeStyles} from "@material-ui/core/styles";

class AddPantryForm extends Component {
    constructor(props) {
        super(props);
        this.onChangeItemName = this.onChangeItemName.bind(this);
        this.onChangeItemLocation = this.onChangeItemLocation.bind(this);
        this.onChangeItemType = this.onChangeItemType.bind(this);
        this.onChangeItemQuantity = this.onChangeItemQuantity.bind(this);
        this.onChangeItemExp = this.onChangeItemExp.bind(this);
        this.onChangeItemDescription = this.onChangeItemDescription.bind(this);
        this.submitItem = this.submitItem.bind(this);
        this.state = {
            name: '',
            location: '',
            type: '',
            quantity: '',
            expirationDate: '',
            viewDate: '',
            note: '',
            item: {}
        }
    }

    onChangeItemName(e){
        this.setState({
            name: e.target.value
        });
    }

    onChangeItemLocation(e){
        this.setState({
            location: e.target.value
        });
    }

    onChangeItemType(e){
        this.setState({
            type: e.target.value
        });
    }

    onChangeItemQuantity(e){
        this.setState({
            quantity: e.target.value
        });
    }

    onChangeItemExp(e){
        let date = e.target.value.split('-');
        date = new Date(parseInt(date[0]), parseInt(date[1])-1, parseInt(date[2]));
        this.setState({
            expirationDate: date.getTime(),
            viewDate: e.target.value
        });
    }

    onChangeItemDescription(e){
        this.setState({
            note: e.target.value
        });
    }

    submitItem(e){
        e.preventDefault();
        const newGroup = {
            name: this.state.name
        };
        if (newGroup.name === '')
            alert('Name required');
        else {
            this.props.createPantry(newGroup);
            this.props.history.push('/');
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

    render()
    {
        const classes = this.useStyles;

        return (
            <div >
                <CssBaseline />
                <PlainBar />
                <br />
                <Container component="main" maxWidth="xs">
                    <div className={classes.paper}>
                        <form className={classes.form} noValidate onSubmit={this.submitItem}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Typography variant='h3'>Create New Pantry</Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        autoComplete=""
                                        name="name"
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="name"
                                        label="Name"
                                        autoFocus
                                        onChange={this.onChangeItemName}
                                        value={this.state.name}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography >
                                        <br />
                                        If you would like to add users to your group, you can enter their
                                        email address that is registered with vPantry below.
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        variant="outlined"
                                        fullWidth
                                        multiline={true}
                                        rows={4}
                                        id="addusers"
                                        name="addusers"
                                        disabled={true}
                                        placeholder={"i.e.  steve@email.com,jessi@email.com"}
                                        autoComplete=""
                                        onChange={this.onChangeItemLocation}
                                        value={this.state.location}
                                    />
                                    <Typography color={"error"}>Add Users Coming Soon!</Typography>
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
                                Create Pantry
                            </Button>
                        </form>
                    </div>
                    <Box mt={5}>
                        <Copyright />
                    </Box>
                </Container>
            </div>
        )
    }
}


AddPantryForm.propTypes = {
    createPantry: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
});

export default connect(mapStateToProps, { createPantry })(AddPantryForm);
