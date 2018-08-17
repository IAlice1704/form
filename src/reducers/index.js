import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import menu from './menu';
import orders from './orders';

export default combineReducers({
	routing: routerReducer,
	menu,
	orders
}); 