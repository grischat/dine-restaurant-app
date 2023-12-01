import "./BookingForm.scss";
import { FormHelperText, TextField } from "@mui/material";
const BookingForm = () => {
    
  return (
    <div className="form__container">
      <FormHelperText id="form__text">
        <TextField id="standard-basic" label="Name" variant="standard" />
        <TextField id="standard-basic" label="Email" variant="standard" />
      </FormHelperText>
    </div>
  );
};

export default BookingForm;
