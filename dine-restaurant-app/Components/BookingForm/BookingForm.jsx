import "./BookingForm.scss";
import { FormHelperText, TextField } from "@mui/material";
const BookingForm = () => {
  return (
    <div className="form__container">
      <FormHelperText id="form__text">
        <TextField id="text__name" label="Name" variant="standard" />
        <TextField id="text__email" label="Email" variant="standard" />
      </FormHelperText>
      <p className="pickDate">Pick a date</p>
      <FormHelperText className="form__date">
        <TextField
          className="date"
          id="day"
          label="DD"
          variant="standard"
          inputProps={{ maxLength: 2 }}
        />
        <TextField
          className="date"
          id="month"
          label="MM"
          variant="standard"
          inputProps={{ maxLength: 2 }}
        />
        <TextField
          className="date"
          id="year"
          label="YYYY"
          variant="standard"
          inputProps={{ maxLength: 4 }}
        />
      </FormHelperText>
      <p className="pickTime">Pick a time</p>
      <FormHelperText className="form__time">
      <TextField
          className="time"
          id="hour"
          label="Hour"
          variant="standard"
          inputProps={{ maxLength: 2 }}
        />
        <TextField
          className="time"
          id="minute"
          label="Minute"
          variant="standard"
          inputProps={{ maxLength: 2 }}
        />
      </FormHelperText>
    </div>
  );
};

export default BookingForm;
//error + helperText="Error"
//
