import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchUserData } from '../../actions/userActions';
import { setActivePantry, fetchPantries } from "../../actions/pantryActions";

// material io
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Backdrop from "@material-ui/core/Backdrop";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";

// Components
import DashboardBar from "./DashboardBar";
import ItemTable from "./pantriesPage/ItemTable";
import PantriesDrawer from "./pantriesPage/pantriesDrawer";
import GroupsTable from "./groupsPage/GroupsTable";
import Divider from "@material-ui/core/Divider";

class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dataReady: false,
            activeView: 'MY_PANTRIES',
            itemsExist: false
        }
    }

    componentWillMount() {
        this.props.fetchUserData();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.user !== prevProps.user) {
            this.props.fetchPantries();
        }
        if (this.props.pantry.pantries !== prevProps.pantry.pantries) {
            if (this.props.pantry.pantries.length) {
                this.props.setActivePantry(this.props.pantry.pantries[0]);
                this.setState({itemsExist: true});
            }
            else {
                this.props.setActivePantry('null');
            }
        }
        if (this.props.pantry.activePantry !== prevProps.pantry.activePantry) {
            this.setState({dataReady: true});
        }
    }

    changeView = (activeView) => {
        this.setState({activeView: activeView});
    };

    useStyles = makeStyles((theme) => ({
        root: {
            width: '90%'
        },
        backdrop: {
            zIndex: 4800,
            color: '#fff'
        }
    }));

    render() {
        const user = this.props.user;
        const classes = this.useStyles;

        return (
            <div className={classes.root}>
                <DashboardBar changeView={this.changeView}/>
                <Backdrop className={classes.backdrop} open={!this.state.dataReady} >
                    <CircularProgress color="inherit" />
                </Backdrop>
                {this.state.dataReady &&
                    <Container fixed style={{paddingTop: 24}}>
                        <Typography variant="h6" noWrap>
                            Hello, {user.given_name}
                        </Typography>
                        <hr/>
                        {this.state.activeView === 'MY_PANTRIES' &&
                        <div>
                            <PantriesDrawer/>
                            {this.state.itemsExist ? <ItemTable/> : <h2>No items</h2>}
                        </div>
                        }
                        {this.state.activeView === 'MY_GROUPS' &&
                        <div>
                            <GroupsTable />
                        </div>
                        }
                        {this.state.activeView === 'MY_PROFILE' &&
                        <h2>MY PROFILE PAGE</h2>
                        }
                    </Container>
                }
            </div>
        );
    }
}

Dashboard.propTypes = {
    fetchUserData: PropTypes.func.isRequired,
    setActivePantry: PropTypes.func.isRequired,
    fetchPantries: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    pantry: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    user: state.user,
    pantry: state.pantry
});

export default connect(mapStateToProps, { fetchUserData, setActivePantry, fetchPantries })(Dashboard);