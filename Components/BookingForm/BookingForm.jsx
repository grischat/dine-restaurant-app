import Btn from "../Buttons/Btn";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import Counter from "./Counter/Counter";
import "./BookingForm.scss";
const BookingForm = () => {
  const [peopleCount, setPeopleCount] = useState(4);

  const validateForm = (values) => {
    const errors = {};

    // Validate name
    if (!values.name) {
      errors.name = "Name is required";
    }

    // Validate email
    if (!values.email) {
      errors.email = "Email is required";
    }
    // Validate dates
    if (
      !values.day ||
      values.day < 1 ||
      values.day > 31 ||
      values.month < 1 ||
      values.month > 12
    ) {
      errors.day = "Only 1 - 31";
      errors.month = "Only 1 - 12";
    }
    if (!values.year || values.year < 2023) {
      errors.year = "Only 2023+ year";
    }
    // Validate hour
    if (!values.hour || values.hour < 1 || values.hour > 12) {
      errors.hour = "Only 1 - 12";
    }

    // Validate minute
    if (!values.minute || values.minute < 0 || values.minute > 59) {
      errors.minute = "Only 0 - 59";
    }

    return errors;
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      hour: "",
      minute: "",
      ampm: "AM",
      time: "",
      day: "",
      month: "",
      year: "",
      date: "",
      people: "",
    },
    onSubmit: (values, { setSubmitting }) => {
      const errors = validateForm(values);
      if (Object.keys(errors).length === 0) {
        alert(JSON.stringify(values, null, 2));
      }
      setSubmitting(false);
    },
    validate: validateForm,
  });
  const handleCountChange = (newCount) => {
    setPeopleCount(newCount);
    formik.setFieldValue("people", newCount);
  };
  //Use useEffect to handle form submission after values are updated
  useEffect(() => {
    const time = `${formik.values.hour}:${formik.values.minute} ${formik.values.ampm}`;
    const date = `${formik.values.day}/${formik.values.month}/${formik.values.year}`;
    formik.setFieldValue("time", time);
    formik.setFieldValue("date", date);
  }, [
    formik.values.hour,
    formik.values.minute,
    formik.values.ampm,
    formik.values.day,
    formik.values.month,
    formik.values.year,
  ]);
  return (
    <div className="form__container">
      <form id="form" onSubmit={formik.handleSubmit}>
        <input
          id="name"
          name="name"
          placeholder="Name"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name && (
          <div className="error-name">{formik.errors.name}</div>
        )}

        <input
          id="email"
          name="email"
          placeholder="Email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email && (
          <div className="error-email">{formik.errors.email}</div>
        )}
        <label id="date__label" htmlFor="date">
          Pick a date
        </label>
        <div className="date__container">
          <input
            className="date"
            id="month"
            name="month"
            placeholder="DD"
            type="number"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.month}
          ></input>
          {formik.touched.month && formik.errors.month && (
            <div className="error-month">{formik.errors.month}</div>
          )}
          <input
            className="date"
            id="day"
            name="day"
            placeholder="MM"
            type="number"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.day}
          ></input>
          {formik.touched.day && formik.errors.day && (
            <div className="error-day">{formik.errors.day}</div>
          )}
          <input
            className="date"
            id="year"
            name="year"
            placeholder="YYYY"
            type="number"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.year}
          ></input>
          {formik.touched.year && formik.errors.year && (
            <div className="error-year">{formik.errors.year}</div>
          )}
        </div>
        <label id="time__label" htmlFor="hour">
          Pick a time
        </label>
        <div className="time__container">
          <input
            id="hour"
            name="hour"
            placeholder="09"
            type="number"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.hour}
          />
          {formik.touched.hour && formik.errors.hour && (
            <div className="error-hour">{formik.errors.hour}</div>
          )}

          <input
            id="minute"
            name="minute"
            placeholder="45"
            type="number"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.minute}
          />
          {formik.touched.minute && formik.errors.minute && (
            <div className="error-minute">{formik.errors.minute}</div>
          )}

          <select
            id="ampm"
            name="ampm"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.ampm}
          >
            <option value="AM">AM</option>
            <option value="PM">PM</option>
          </select>
        </div>
        <Counter
          onChange={handleCountChange}
          onBlur={formik.handleBlur}
          value={peopleCount}
        />
        <Btn className="btn__submit" type="submit">
          MAKE A RESERVATION
        </Btn>
      </form>
    </div>
  );
};

export default BookingForm;
