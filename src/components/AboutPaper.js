import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2)
  }
}));

export default function AboutPaper() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Typography variant="h5" component="h3">
        This is a sheet of paper.
      </Typography>
      <Typography component="bpdy2">
        Paper can be used to build surface or other elements for your
        application. Paper can be used to build surface or other elements for
        your application. Paper can be used to build surface or other elements
        for your application. Paper can be used to build surface or other
        elements for your application. Paper can be used to build surface or
        other elements for your application. Paper can be used to build
      </Typography>
    </Paper>
  );
}
