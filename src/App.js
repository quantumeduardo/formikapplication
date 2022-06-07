import React from 'react';
import { Formik, FormikContext, useFormik } from 'formik';
import './App.css';

function App() {
  const formik = useFormik({
    initialValues: {
      emailField: '',
      password: '',
    },
    onSubmit: values =>{
      alert('Login Successful!');
    },
    validate: values =>{
      let errors = {};
      const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      if(!values.emailField) errors.emailField = 'Field Required';
      if(!regex.test(values.emailField)) errors.emailError = 'Username should be an email'
      if(!values.password) errors.password = 'Field Required';
     
      return errors;
    }
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>Username</div>
        <input id="emailField" type="text" onChange={formik.handleChange} value={formik.values.emailField}/>
        {formik.errors.emailField ? <div style={{color:'red'}}>{formik.errors.emailField}</div> : null}
        {formik.errors.emailError ? <div style={{color:'red'}}>{formik.errors.emailError}</div> : null}
        <div>Password</div>
        <input id="password" type="text" onChange={formik.handleChange} value={formik.values.password}/>
        {formik.errors.password ? <div style={{color:'red'}}>{formik.errors.password}</div> : null}
       <div><button type="submit">Login</button></div> 
      
      </form>
    </div>
  );
}

export default App;
