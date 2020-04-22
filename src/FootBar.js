import React from 'react';
import {Container} from 'reactstrap';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        position:"absolute",
        left:20,
        bottom:20,
        right:0,
        backgroundColor: "#282c34",
        color: "#c7c7c7",
        fontFamily: "Open Sans"
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      backgroundColor: "#282c34",
      color: "white",
    },
    
  }));

export default function FootBar() {

    const classes = useStyles();
    return (
        <div className={classes.root}>
        <Grid container spacing={3} style={{width: "100%"}}>
            <Grid item xs={12} sm={6} style={{textAlign: "left"}}>
                #EUvsVirus
            </Grid>
            <Grid item xs={12} sm={6} style={{textAlign: "right"}}>
                @U4U_Milan Team
            </Grid>
        </Grid>
        </div>
    )
}