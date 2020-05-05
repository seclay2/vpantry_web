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
import Button from "@material-ui/core/Button";
import {Link} from 'react-router-dom'

// Components
import DashboardBar from "./DashboardBar";
import ItemTable from "./pantriesPage/ItemTable";
import PantriesDrawer from "./pantriesPage/pantriesDrawer";
import GroupsTable from "./groupsPage/GroupsTable";
import ProfilePage from "./ProfilePage";

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.setPantry = this.setPantry.bind(this);

        this.state = {
            dataReady: false,
            activeView: 'MY_PANTRIES',
            itemsExist: false
        }
    }

    componentWillMount() {
        this.props.fetchUserData();
    }

    componentDidMount() {
        this.props.fetchPantries();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        //if (this.props.user !== prevProps.user) {
        //    this.props.fetchPantries();
        //}
        if (this.props.pantry.pantries !== prevProps.pantry.pantries) {
            if (prevProps.pantry.pantries === 'initial') {
                if (this.props.pantry.pantries.length) {
                    this.props.setActivePantry(this.props.pantry.pantries[0]);
                    this.setState({itemsExist: true});
                }
                else {
                    this.props.setActivePantry('null');
                }
            }
            else {
                this.setState({dataReady: true});
                this.setState({itemsExist: true});
            }
        }
        if (this.props.pantry.activePantry !== prevProps.pantry.activePantry) {
            this.setState({dataReady: true});
        }
    }

    setPantry(event, pantry) {
        this.props.setActivePantry(pantry);
    }

    changeView = (activeView) => {
        this.setState({activeView: activeView});
    };

    useStyles = makeStyles((theme) => ({
        root: {
            width: '90%',
            display: 'flex'
        },
        backdrop: {
            zIndex: 4800,
            color: '#fff'
        },
        content: {
            flexGrow: 1,
            backgroundColor: theme.palette.background.default,
            padding: theme.spacing(3),
            marginLeft: '240px'
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
                    <div>
                        <Container fixed style={{paddingTop: 24}} >
                            <Typography variant="h6" noWrap>
                                Hello, {user.given_name}
                            </Typography>
                            <hr/>
                            {this.state.activeView === 'MY_PANTRIES' &&
                                <main className={classes.content}>
                                    <PantriesDrawer setPantry={this.setPantry}/>
                                    <Button component={Link}
                                            to={'/additem'}
                                            variant="contained"
                                            color="primary" >
                                        Add Item
                                    </Button>
                                    {this.state.itemsExist ? <ItemTable history={this.props.history}/> : <h2>No items</h2>}
                                </main>
                            }
                            {this.state.activeView === 'MY_GROUPS' &&
                            <div>
                                <GroupsTable history={this.props.history}/>
                            </div>
                            }
                            {this.state.activeView === 'MY_PROFILE' &&
                            <ProfilePage />
                            }
                        </Container>
                    </div>
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
    pantry: PropTypes.object.isRequired,
    items: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
    user: state.user,
    pantry: state.pantry,
    items: state.items.itemList
});

export default connect(mapStateToProps, { fetchUserData, setActivePantry, fetchPantries })(Dashboard);