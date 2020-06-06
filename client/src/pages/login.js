import React from 'react';
import { withFormik, Form } from 'formik';
import { object } from 'yup';


const Login = () => (
  <Form>
    <div className="container">
      <h1>Sign In</h1>
      <hr />
    </div>
  </Form>
);

const initialValues = {
  
};

const validationSchema = object().shape({
  
});

const mapPropsToValues = () => initialValues;

const handleSubmit = (values, { setSubmitting }) => {
  console.log(values);
  setSubmitting = false;
};

export default withFormik({
  mapPropsToValues,
  validationSchema,
  handleSubmit,
  displayName: 'LoginForm',
})(Login);
