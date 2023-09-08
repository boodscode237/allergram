import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Allergies from "./Allergies/Allergies";
import Profile from "./Profile/Profile";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));


function CheckData() {
    const classes = useStyles();
  return (
    <div className={classes.root}>
        <Grid container spacing={6}>
            <Grid item xs>
                <Allergies />
            </Grid>
            <Grid item xs>
                <Profile/>
            </Grid>
        </Grid>


    </div>
  );
}

export default CheckData;
