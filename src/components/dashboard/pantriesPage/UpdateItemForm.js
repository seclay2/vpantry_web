import React, {Component} from 'react';
import {updateItem} from "../../../actions/itemsActions";
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

class UpdateItemForm extends Component {
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

    componentDidMount() {
        const newState = {
            name: this.props.items.item.name,
            location: this.props.items.item.location,
            type: this.props.items.item.type,
            quantity: this.props.items.item.quantity,
            expirationDate: this.props.items.item.expirationDate,
            viewDate: '',
            note: this.props.items.item.note,
            item: {}
        };
        this.setState(newState);
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
        const newItem = {
            _id: this.props.items.item._id,
            name: this.state.name,
            location: this.state.location,
            type: this.state.type,
            quantity: this.state.quantity,
            expirationDate: this.state.expirationDate,
            note: this.state.note,
        };
        if (newItem.name === '')
            alert('Name required');
        else if (newItem.type === '')
            alert('Type required');
        else {
            this.props.updateItem(newItem);
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
                                    <Typography variant='h3'>Update Item</Typography>
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
                                    <TextField
                                        variant="outlined"
                                        fullWidth
                                        id="location"
                                        label="Location"
                                        name="Location"
                                        autoComplete=""
                                        onChange={this.onChangeItemLocation}
                                        value={this.state.location}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="type"
                                        label="Type"
                                        name="type"
                                        autoComplete=""
                                        onChange={this.onChangeItemType}
                                        value={this.state.type}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        variant="outlined"
                                        fullWidth
                                        id="quantity"
                                        label="Quantity"
                                        name="quantity"
                                        autoComplete=""
                                        onChange={this.onChangeItemQuantity}
                                        value={this.state.quantity}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        variation="outlined"
                                        id="expirationDate"
                                        label="Expiration Date"
                                        type="date"
                                        defaultValue=""
                                        onChange={this.onChangeItemExp}
                                        value={this.state.viewDate}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        variant="outlined"
                                        multiline='true'
                                        rows="4"
                                        fullWidth
                                        id="note"
                                        label="Notes"
                                        name="note"
                                        autoComplete=""
                                        onChange={this.onChangeItemDescription}
                                        value={this.state.note}
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
                                Update Item
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


UpdateItemForm.propTypes = {
    updateItem: PropTypes.func.isRequired,
    pantry: PropTypes.string.isRequired,
    items: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    pantry: state.pantry,
    items: state.items
});

export default connect(mapStateToProps, { updateItem })(UpdateItemForm);
