import React, { Component } from 'react';
import '../App.css';
//import { Tab, Row, Col, Nav, NavItem, Grid, Image } from 'react-bootstrap';
import Menu from '../components/Menu';
//import Header from '../components/Header';
import RegistrationForm from '../containers/RegistrationForm';
import Dropdown  from '../components/Dropdown'
import { reduxForm, Field } from 'redux-form';
import SignupPage from '../components/signup/SignupPage';
import LoginPage from '../components/login/LoginPage';

const validate = values => {
  const errors = {};

  if (!values.email) {
    console.log('email is required');
    errors.email = 'Required';
  } else if (!/^.+@.+$/i.test(values.email)) {
    console.log('email is invalid');
    errors.email = 'Invalid email address';
  }

  if (!values.password) {
    console.log('password is required');
    errors.password = 'Required';
  }

  return errors;
};

const InputField = ({
  input,
  label,
  type,
  meta: { touched, error, warning },
}) =>
  <div>
    <label>
      {label}
    </label>
    <div>
      <input {...input} type={type} />
    </div>
    {touched &&
      error &&
      <div>
        {error}
      </div>}    
  </div>;


let SignInForm = props => {
  const { handleSubmit } = props;
  return ( 
    <form onSubmit={handleSubmit}>
      <Field type="text" name="email" component={InputField} label="Email"  />
      <Field
        type="password"
        name="password"
        component={InputField}
        label="Password"
      />             
      <button type="submit">Sign in</button>
    </form>      
  );
};

SignInForm = reduxForm({
  form: 'signIn',
  validate
})(SignInForm);

let handleSignIn = values => {
    console.log('Submitting the following values:');
    console.log(`Email: ${values.email}`);
    console.log(`Password: ${values.password}`);
};




class App extends Component {
  render() {
    return (
      //<SignupPage />
      <Menu />
    );
  }
}

export default App;

