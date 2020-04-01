import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchUserData } from '../../actions/userActions';

// Components
import DashboardBar from "./DashboardBar";
import ItemTable from "./ItemTable";
import Paper from '@material-ui/core/Paper';
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

class Dashboard extends Component {
    componentWillMount() {
        this.props.fetchUserData();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

    }

    useStyles = makeStyles((theme) => ({
        root: {
            width: '90%',
        },
        paper: {
            display: 'flex',
            flexWrap: 'wrap',
            '& > *': {
                margin: theme.spacing(1),
                width: theme.spacing(16),
                height: theme.spacing(16),
            },
        },
    }));

    render() {
        const user = this.props.user;
        const classes = this.useStyles;

        return (
            <div className={classes.root}>
                <DashboardBar />
                <Container fixed>
                    <h3>Hello, {user.given_name}</h3>
                    <hr />
                    <ItemTable />
                </Container>
            </div>
        );
    }
}

Dashboard.propTypes = {
    fetchUserData: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    user: state.user
});

export default connect(mapStateToProps, { fetchUserData })(Dashboard);