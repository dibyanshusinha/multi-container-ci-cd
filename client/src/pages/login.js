/* eslint-disable */ 
import React from 'react';
import { withFormik, Form } from 'formik';
import { object } from 'yup';


const Login = () => (
  <div className="container">
  <div className="row justify-content-center">
    <div className="col-md-5">
      <div className="card">
        <br />
        <h2 className="card-title text-center">Sign In</h2>
        <div className="card-body py-md-4">
          <Form>
            <div className="form-group">
              <input type="email" className="form-control" id="email" placeholder="Email" />
            </div>
                          
            <div className="form-group">
              <input type="password" className="form-control" id="password" placeholder="Password" />
            </div>

            
            <div className="d-flex flex-row align-items-center justify-content-between">
              <button className="btn btn-primary">Sign In</button><a href="/signup"> Sign Up</a>
            </div>
          </Form>
        </div>
      </div>
    </div>
  </div>
</div>
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
