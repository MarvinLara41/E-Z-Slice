import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import Cookie from 'js-cookie';
import thunk from 'redux-thunk';

import { cartReducer } from './reducers/cartReducer';

import {
	productListReducer,
	productDetailsReducer,
} from './reducers/productReducers';

const cartItems = Cookie.getJSON('cartItems') || [];

const initialState = {
	cart: { cartItems, shipping: {}, payment: {} },
};

const reducer = combineReducers({
	cart: cartReducer,
	productList: productListReducer,
	productDetails: productDetailsReducer,
});

const composeEnchancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	reducer,
	initialState,
	composeEnchancer(applyMiddleware(thunk))
);

export default store;
