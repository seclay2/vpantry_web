import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from "@material-ui/core/Button";
import bg from '../../assets/images/family.png'

const useStyles = makeStyles((theme) => ({
    mainFeaturedPost: {
        position: 'relative',
        color: theme.palette.common.white,
        marginBottom: theme.spacing(3),
        backgroundColor: "#6FD546",
        backgroundImage: ``,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    },
    overlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: 'rgba(0,0,0,.3)',
    },
    mainFeaturedPostContent: {
        position: 'relative',
        padding: theme.spacing(3),
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(6),
            paddingRight: 0,
        },
    },
}));

export default function LandingCard(props) {
    const classes = useStyles();
    const { post } = props;

    return (
        <Paper className={classes.mainFeaturedPost} >

            <Grid container>
                <Grid item md={6}>
                    <div style={{width: '100%', overflow: 'hidden'}}>
                        <img src={bg} alt='' style={{width: '100%'}}/>
                    </div>
                </Grid>
                <Grid item md={6}>
                    <div className={classes.mainFeaturedPostContent}>
                        <Typography component="h1" variant="h3" color="primary" gutterBottom>
                            Virtualize your Kitchen!
                        </Typography>
                        <Typography variant="h5" color="inherit" paragraph>
                            Never forget if you have something in your pantry again!
                            <ul>
                                <li>Keep track of all your pantry items</li>
                                <li>Know when it's time to throw away expired items</li>
                                <li>Know who bought what item</li>
                                <li>Note what items are intended for (no more going to use an ingredient and it's gone!)</li>
                            </ul>
                        </Typography>
                        <Button href="/signup" variant="contained" color="primary" justify='center'>
                            Sign Up!
                        </Button>
                    </div>
                </Grid>
            </Grid>
        </Paper>
    );
}

/* <div className={classes.overlay} /> */