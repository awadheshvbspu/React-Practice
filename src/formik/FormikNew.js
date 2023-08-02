import React,{useState} from "react";
import "../formik/formik.css";
import { ErrorMessage, Formik, Form, Field, FieldArray,FastField } from "formik";
import * as Yup from "yup";
import TextError from "../formik/TextError";

const initialValues = {
  name: "",
  email: "",
  channel: "",
  comment: "",
  address: "",
  //nested object
  social: {
    facebook: "",
    google: "",
  },
  phoneNumber: ["", ""],
  phNumber: [""],
};

const savedValues = {
    name: 'Vishwas',
    email: 'v@example.com',
    channel: 'codevolution',
    comments: 'Welcome to Formik',
    address: '221B Baker Street',
    social: {
      facebook: '',
      twitter: ''
    },
    phoneNumbers: ['', ''],
    phNumbers: ['']
  }
  
const onSubmit = (values, submitProps) => {
    console.log('Form data', values)
    console.log('submitProps', submitProps)
    submitProps.setSubmitting(false)
    submitProps.resetForm()
  }

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email format").required("Required"),
  channel: Yup.string().required("Required"),
});
const validate = (values) => {
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

 const validateCommets = value =>{
  let error 
  if(!value){
    error ='Required'
  }
  return error
 }
export default function FormikNew() {
    const [formValues,setFormValues] =useState(null)
  return (
    <>
      <div className="formik">
        <Formik
          initialValues={formValues || initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
          enableReinitialize
        //   validateOnChange={false}
        //   validateOnBlur={false}
        //   validateOnMount
        >
        { formik =>{
            return(
                <Form>
            <div className="form-name">
              <label htmlFor="name">Name</label>
              <Field
                type="text"
                id="name"
                name="name"
                placeholder="Enter Your name"
                className="form-control"
              />
              <ErrorMessage name="name" component={TextError} />
            </div>
            <div className="form-email">
              <label htmlFor="email">Email</label>
              <Field
                type="text"
                id="email"
                name="email"
                placeholder="Enter your Name"
                className="form-control"
              />
              <ErrorMessage name="email" />
              {(errorMsg) => <div className="error">{errorMsg}</div>}
            </div>
            <div className="form-cname">
              <label htmlFor="channelName">Channel</label>
              <Field
                type="text"
                id="channelName"
                name="channel"
                placeholder="Enter your channel name"
                className="form-control"
              />
              <ErrorMessage name="channel" />
            </div>
            <div className="form-comment">
              <label htmlFor="comment">Comment</label>
              <Field
                as="textarea"
                id="comment"
                name="comment"
                className="form-control"
              /> <ErrorMessage name="channel"  component={validateCommets}/>
            </div>
            <div className="form-address">
              <label htmlFor="address">Address</label>
              <Field
                type="text"
                name="address"
                id="address"
                className="form-control w-100"
              >
                {(props) => {
                  const { field, form, meta } = props;
                  console.log("props", props);
                  return (
                    <div>
                      <input id="address" {...field} />
                      {meta.touched && meta.error ? (
                        <div>{meta.error}</div>
                      ) : null}
                    </div>
                  );
                }}
              </Field>
            </div>
            <div>
              <label htmlFor="facebook">Facebook Profile</label>
              <Field
                type="text"
                id="facebook"
                name="social.facebook"
                className="form-control"
              />
            </div>
            <div>
              <label htmlFor="google">Google Profile</label>
              <Field
                type="text"
                id="google"
                name="social.google"
                className="form-control"
              />
            </div>
            <div>
              <label htmlFor="primaryPh">Primary Phone Number</label>
              <Field
                type="text"
                id="primaryPh"
                name="phoneNumbers[0]"
                className="form-control"
              />
            </div>
            <div>
              <label htmlFor="secondaryPh">Secondary Phone Number</label>
              <Field
                type="text"
                id="secondaryPh"
                name="phoneNumbers[1]"
                className="form-control"
              />
            </div>
            <div className='form'>
              <label>List of phone numbers</label>
              <FastField name='phNumbers'>
                {fieldArrayProps => {
                  const { push, remove, form } = fieldArrayProps
                  const { values } = form
                  const { phNumbers } = values
                  // console.log('fieldArrayProps', fieldArrayProps)
                  // console.log('Form errors', form.errors)
                  return (
                    <div>
                      {phNumbers?.map((phNumber, index) => (
                        <div key={index}>
                          <Field name={`phNumbers[${index}]`} />
                          {index > 0 && (
                            <button type='button' onClick={() => remove(index)}>
                              -
                            </button>
                          )}
                        </div>
                      ))}
                      <button type='button' onClick={() => push('')}>
                        +
                      </button>
                    </div>
                  )
                }}
              </FastField>
            </div>
            {/* <button type="button" onClick={()=>formik.validateField('comments')}>Validate Commets</button>
            <button type="button" onClick={()=>formik.setFieldTouched('comments')}>Visit Commets</button>
            <button type="button" onClick={()=>formik.setTouched({
                name:true,
                email:true,
                channel:true,
                comments:true
            })}>Validate Commets</button>
            <button type="button" onClick={()=>formik.validateForm()}>validate all</button> */}
            <button type='button' onClick={() => setFormValues(savedValues)}>
              Load saved data
            </button>
            <button type="reset" >Reset</button>
            <button type="submit" 
             disabled={!formik.isValid || formik.isSubmitting}>Submit</button>
          </Form>
            )
        }}
          
        </Formik>
      </div>
    </>
  );
}
