import React, { useState, useEffect } from "react";

import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'

import {
  makeStyles,
  withStyles,
} from "@material-ui/core";
// import { postMessagesAPIMethod } from "../api/adminClient";

const styles = makeStyles((theme) => ({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: 'block'
  },
}));

const StyledButton = withStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.secondary.main,
    color: "white",
    width: "300px",
  },
  label: {
    textTransform: "capitalize",
    fontSize: "24px",
  },
}))(Button);

export default function MessageCenter() {

  useEffect(async () => {
    try {

    } catch (err) {
      alert(err.response);
    }
  }, []);
  const classes = styles();

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [titleError, setTitleError] = useState(false)
  const [detailsError, setDetailsError] = useState(false)
  const [category, setCategory] = useState('money')

  return (
    <form noValidate>
      <TextField className={classes.field}
        onChange={(e) => setTitle(e.target.value)}
        label="Notification Title"
        variant="outlined"
        color="secondary"
        fullWidth
        required
        error={titleError}
      />
      <TextField className={classes.field}
        onChange={(e) => setDetails(e.target.value)}
        label="Details"
        variant="outlined"
        color="secondary"
        multiline
        rows={4}
        fullWidth
        required
        error={detailsError}
      />
      <FormControl className={classes.field}>
        {/* <FormLabel>Notification Category</FormLabel> */}
        <RadioGroup value={category} onChange={(e) => setCategory(e.target.value)}>
          <FormControlLabel value="URGENT*" control={<Radio />} label="URGENT*" />
          <FormControlLabel value="Daily reminders" control={<Radio />} label="Daily reminders" />
          <FormControlLabel value="Monthly notice" control={<Radio />} label="Monthly notice" />
        </RadioGroup>
      </FormControl>
      <StyledButton>Send</StyledButton>
    </form>

  );
}
