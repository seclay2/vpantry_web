import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {Link} from 'react-router-dom';
import Typography from "@material-ui/core/Typography";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar
}));

function PantriesDrawer(props) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const onClick = (e) => {
        e.preventDefault();

        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    return (
        <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
                paper: classes.drawerPaper,
            }}
            anchor="left"
        >
            <div className={classes.toolbar} />
            <div className={classes.toolbar} />
            <Typography variant='button' noWrap align="center" >My Pantries</Typography>
            <Divider />
            { props.pantry.activePantry !== {} ?
                <List>
                    {props.pantry.pantries !== [] ?
                        props.pantry.pantries.map((pantry, index) => (
                        <ListItem button key={pantry.name} >
                            <ListItemText primary={pantry.name} />
                        </ListItem>
                    )) : <ListItem>You have no pantries</ListItem>}
                    <ListItem>
                        <Divider />
                    </ListItem>
                    <ListItem>
                        <Link to='/additem'>+ Create New Pantry</Link>
                    </ListItem>
                </List>
                :
                <List>
                    <ListItem>
                        No Pantries
                    </ListItem>
                    <ListItem>
                        <Divider />
                    </ListItem>
                    <ListItem>
                        <Link to='/additem'>+ Create New Pantry</Link>
                    </ListItem>
                </List>
            }
        </Drawer>
    );
}

PantriesDrawer.propTypes = {
    pantry: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    pantry: state.pantry
});

export default connect(mapStateToProps, {})(PantriesDrawer);