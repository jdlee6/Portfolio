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
    fontSize: 5
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
          <br />I am a <em>Full Stack Web Developer</em> with experience in Typescript & Python.
          I am someone who <em>loves</em> manifesting
          ideas and transforming them into features and products.
          <br />
          If you're interested in having any type of website work done, from something simple as a portfolio website to a complex web application like Twitter, feel free to reach me at <a href="mailto:joeleedev123@gmail.com">joeleedev123@gmail.com.</a>
          <br />
          I can provide additional examples of projects that I've been apart of if needed.
        </Typography>
      </ThemeProvider>
    </Paper>
  );
}
