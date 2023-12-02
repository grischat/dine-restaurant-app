import "./BookingForm.scss";
import Counter from "./Counter/Counter";
import { FormHelperText, TextField } from "@mui/material";
import { useState } from "react";
import Btn from "../Buttons/Btn";
const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    day: "",
    month: "",
    year: "",
    time: "",
    hour: "",
    minute: "",
    people: "",
  });
  const handleCountChange = (fieldName, value) => {
    setFormData((prevFormData) => ({ ...prevFormData, [fieldName]: value }));
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData)
    
  };
  
  return (
    <div className="form__container">
      <form onSubmit={handleSubmit}>
        <FormHelperText id="form__text">
          <TextField
            id="text__name"
            name="name"
            value={formData.name}
            label="Name"
            variant="standard"
            onChange={handleInputChange}
          />
          <TextField
            id="text__email"
            name="email"
            value={formData.email}
            label="Email"
            variant="standard"
            onChange={handleInputChange}
          />
        </FormHelperText>
        <p className="pickDate">Pick a date</p>
        <FormHelperText className="form__date">
          <TextField
            className="date"
            id="day"
            name="day"
            value={formData.day}
            label="DD"
            variant="standard"
            inputProps={{ maxLength: 2 }}
            onChange={handleInputChange}
          />
          <TextField
            className="date"
            id="month"
            name="month"
            value={formData.month}
            label="MM"
            variant="standard"
            inputProps={{ maxLength: 2 }}
            onChange={handleInputChange}
          />
          <TextField
            className="date"
            id="year"
            name="year"
            value={formData.year}
            label="YYYY"
            variant="standard"
            inputProps={{ maxLength: 4 }}
            onChange={handleInputChange}
          />
        </FormHelperText>
        <p className="pickTime">Pick a time</p>
        <FormHelperText className="form__time">
          <TextField
            className="time"
            id="hour"
            name="hour"
            value={formData.hour}
            variant="standard"
            inputProps={{ maxLength: 2 }}
            onChange={handleInputChange}
          />
          <TextField
            className="time"
            id="minute"
            name="minute"
            value={formData.minute}
            variant="standard"
            inputProps={{ maxLength: 2 }}
            onChange={handleInputChange}
          />
          <TextField
            className="time__AmPm"
            id="ampm"
            name="time"
            value={formData.time}
            defaultValue="AM"
            variant="standard"
            select
            onChange={handleInputChange}
            SelectProps={{
              native: true,
            }}
          >
            <option className="time__options" value="AM">
              AM
            </option>
            <option className="time__options" value="PM">
              PM
            </option>
          </TextField>
        </FormHelperText>
        <Counter
          name="people"
          value={formData.people}
          onChange={handleCountChange}
        />
        <Btn className="btn__book">
          MAKE RESERVATION
        </Btn>
      </form>
    </div>
  );
};

export default BookingForm;
//error + helperText="Error"
//
