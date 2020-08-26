import axios from 'axios';
import {
	ORDER_CREATE_SUCCESS,
	ORDER_CREATE_FAIL,
	ORDER_CREATE_REQUEST,
	ORDER_DETAILS_REQUEST,
	ORDER_DETAILS_SUCCESS,
	ORDER_DETAILS_FAIL,
	ORDER_PAY_REQUEST,
	ORDER_PAY_SUCCESS,
	ORDER_PAY_FAIL,
	MY_ORDER_LIST_REQUEST,
	MY_ORDER_LIST_SUCCESS,
	MY_ORDER_LIST_FAIL,
	ORDER_LIST_REQUEST,
	ORDER_LIST_SUCCESS,
	ORDER_LIST_FAIL,
	ORDER_DELETE_REQUEST,
	ORDER_DELETE_SUCCESS,
	ORDER_DELETE_FAIL,
} from '../constants/orderConstants';

const createOrder = (order) => async (dispatch) => {
	try {
		dispatch({ type: ORDER_CREATE_REQUEST, payload: order });

		const {
			data: { data: newOrder },
		} = await axios.post('/api/', order);

		dispatch({ type: ORDER_CREATE_SUCCESS, payload: newOrder });
	} catch (error) {
		dispatch({ type: ORDER_CREATE_FAIL, payload: error.message });
	}
};

const detailsOrder = (orderId) => async (dispatch) => {
	try {
		dispatch({ type: ORDER_DETAILS_REQUEST, payload: orderId });

		const { data } = await axios.get('/api/' + orderId);

		dispatch({ type: ORDER_DETAILS_SUCCESS, payload: data });
	} catch (error) {
		dispatch({ type: ORDER_DETAILS_FAIL, payload: error.message });
	}
};

const payOrder = (order, paymentResult) => async (dispatch) => {
	try {
		dispatch({ type: ORDER_PAY_REQUEST, payload: paymentResult });

		const { data } = await axios.put(
			'/api/' + order._id + '/pay',
			paymentResult
		);
		dispatch({ type: ORDER_PAY_SUCCESS, payload: data });
	} catch (error) {
		dispatch({ type: ORDER_PAY_FAIL, payload: error.message });
	}
};

export { createOrder, payOrder, detailsOrder };
