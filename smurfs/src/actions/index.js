import axios from "axios";

export const GETTING_SMURFS = "GETTING_SMURFS";
export const GET_SMURFS_SUCCESS = "GET_SMURFS_SUCCESS";
export const GET_SMURFS_FAILURE = "GET_SMURFS_FAILURE";

export const ADDING_SMURF = "ADDING_SMURF";
export const ADD_SMURF_SUCCESS = "ADD_SMURF_SUCCESS";
export const ADD_SMURF_FAILURE = "ADD_SMURF_FAILURE";

const URL = "http://localhost:3333/smurfs";

export const getSmurfs = () => {
	const promise = axios.get(URL);
	return dispatch => {
		dispatch({ type: GETTING_SMURFS });
		promise
			.then(response => {
				dispatch({
					type: GET_SMURFS_SUCCESS,
					payload: response.data,
				});
			})
			.catch(err => {
				dispatch({
					type: GET_SMURFS_FAILURE,
					payload: err,
				});
			});
	};
};

export const addSmurf = data => {
	const promise = axios.post(URL, data);
	return dispatch => {
		dispatch({ type: ADDING_SMURF });
		promise
			.then(response => {
				dispatch({
					type: ADD_SMURF_SUCCESS,
					payload: response.data,
				});
			})
			.catch(err => {
				dispatch({
					type: ADD_SMURF_FAILURE,
					payload: err,
				});
			});
	};
};
