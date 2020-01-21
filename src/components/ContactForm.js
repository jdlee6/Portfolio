import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import * as emailjs from 'emailjs-com';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '80%',
    paddingBottom: '1.5%'
  },
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: 'none'
  }
}));

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

  // reset form function
  function reset() {
    setValues({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  }

  // submit logic/send email
  function handleSubmit(e) {
    e.preventDefault();
    const { email, subject, message } = values;

    let templateParams = {
      from_name: email,
      to_name: 'jdlee6@buffalo.edu',
      subject: subject,
      message_html: message
    };

    emailjs
      .send(
        'my_mail',
        'template_I1Mqok9f',
        templateParams,
        'user_oxnZeP7DmKFhOMsuX4OFZ'
      )
      .then(
        result => {
          console.log(result.text);
        },
        error => {
          console.log(error.text);
        }
      );

    reset();
  }

  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div>
        <TextField
          label="Name"
          name="name"
          value={values.name}
          className={classes.textField}
          margin="dense"
          variant="outlined"
          onChange={handleChange}
        />
        <TextField
          label="Email"
          name="email"
          value={values.email}
          className={classes.textField}
          margin="dense"
          variant="outlined"
          onChange={handleChange}
        />
        <TextField
          label="Subject"
          name="subject"
          value={values.subject}
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
          value={values.message}
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
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </div>
    </div>
  );
}

// TODO error handling for text fields
// error={values.name.length === 0 ? true : false}
