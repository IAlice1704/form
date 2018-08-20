import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { store } from './helpers';
import { App } from './App';
import { BrowserRouter } from 'react-router-dom';

// setup fake backend
import { configureFakeBackend } from './helpers';
configureFakeBackend();



render(
	<Provider store={store}>
	<BrowserRouter>
	<App />
	</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);

