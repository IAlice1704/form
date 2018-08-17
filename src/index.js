import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
//import thunk from 'redux-thunk';
import { BrowserRouter, Router, Route, Link } from 'react-router-dom';
import App from './containers/App';
import './index.css';
import reducer from './reducers'
//import { reduxForm } from 'redux-form';
import { reducer as formReducer } from 'redux-form';
//import Greeting from './components/Greeting';
import SignupPage from './components/signup/SignupPage';
import LoginPage from './components/login/LoginPage';

const rootReducer = combineReducers({
	form: formReducer
});



const store = createStore(rootReducer);



ReactDOM.render(
	<Provider store={store}>
	<App />
	</Provider>,
	document.getElementById('root')
);


