import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '80%',
    paddingBottom: '2%'
  },
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: 'none'
  }
}));

// TODO error handling for text fields
// error={values.name.length === 0 ? true : false}

export default function ContactForm() {
  // state for forms
  const [values, setValues] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // changes the state for forms on change
  const handleChange = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  // submit logic
  function onSubmit() {
    console.log('Submitted');
  }

  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div>
        <TextField
          label="Name"
          name="name"
          defaultValue=""
          className={classes.textField}
          margin="dense"
          variant="outlined"
          onChange={handleChange}
        />
        <TextField
          label="Email"
          name="email"
          defaultValue=""
          className={classes.textField}
          margin="dense"
          variant="outlined"
          onChange={handleChange}
        />
        <TextField
          label="Subject"
          name="subject"
          defaultValue=""
          className={classes.textField}
          margin="dense"
          variant="outlined"
          onChange={handleChange}
        />
        <TextField
          label="Message"
          name="message"
          multiline
          rows="4"
          defaultValue=""
          className={classes.textField}
          margin="normal"
          variant="outlined"
          onChange={handleChange}
        />
        <br />
        <Button
          size="small"
          variant="outlined"
          className={classes.button}
          type="submit"
          onClick={onSubmit}
        >
          Submit
        </Button>
      </div>
    </div>
  );
}
