import React from "react";
import "../formik/formik.css";
import { ErrorMessage, useFormik } from "formik";
import * as Yup from "yup";

const initialValues = {
  name: "",
  email: "",
  channel: "",
};

const onSubmit = (values) => {
  console.log("Form data", values);
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email format").required("Required"),
  channel: Yup.string().required("Required"),
});
const validate = (values) => {
  //values.name values.email values.channel
  //errors.name errors.email errors.channel
  //errors.name ="This field is required"
  let errors = {};
  if (!values.name) {
    errors.name = "Required";
  }
  if (!values.email) {
    errors.name = "Required";
  } else if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+/.test("email.values")) {
    errors.email = "Invalid email";
  }

  if (!values.channel) {
    errors.channel = "Required";
  }
  return errors;
};

export default function Formink() {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
    validationSchema,
  });
  console.log("Form values", formik.values);
  console.log("Form errors", formik.errors);

  console.log("formik.touched", formik.touched);
  return (
    <>
      <div className="formik">
        <form onSubmit={formik.handleSubmit}>
          <div className="form-control">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
            //   onChange={formik.handleChange}
            //   value={formik.values.name}
            //   onBlur={formik.handleBlur}
              {...formik.getFieldProps('email')}
            />
            {formik.touched.name && formik.errors.name ? (
              <div className="error">{formik.errors.name}</div>
            ) : null}
          </div>
          <div className="form-control">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              name="email"
            //   onChange={formik.handleChange}
            //   value={formik.values.email}
            //   onBlur={formik.handleBlur}
              {...formik.getFieldProps('email')}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="error">{formik.errors.email}</div>
            ) : null}
          </div>
          <div className="form-control">
            <label htmlFor="channelName">Channel</label>
            <input
              type="text"
              id="channelName"
              name="channel"
            //   onChange={formik.handleChange}
            //   value={formik.values.channel}
            //   onBlur={formik.handleBlur}
              {...formik.getFieldProps('email')}
            />
            {formik.touched.channel && formik.errors.channel ? (
              <div className="error">{formik.errors.channel}</div>
            ) : null}
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}
