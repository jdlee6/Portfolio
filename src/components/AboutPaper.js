import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  }
}));

const theme = createMuiTheme({
  typography: {
    fontFamily: ['Spectral', 'serif'].join(','),
    fontSize: '1rem'
  }
});

export default function AboutPaper() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <ThemeProvider theme={theme}>
        <Typography variant="h3">
          Hi, my name is <em>Joe</em>.
          <br />
          <br />I am a <em>Full Stack Web Developer</em> with experience in Typescript & Python. I was born and raised in New York City but I currently reside in San Diego, CA. I <em>love</em> manifesting
          ideas and transforming them into features and products. I am a fast
          learner who <em>enjoys</em> exploring new technologies and frameworks.
          <br />
        </Typography>
      </ThemeProvider>
    </Paper>
  );
}
