import {
  GET_SMURFS_START,
  GET_SMURFS_SUCCESS,
  GET_SMURFS_ERROR,
  NEW_SMURFS_START,
  NEW_SMURFS_SUCCESS,
  NEW_SMURFS_ERROR,
  DELETE_SMURF_START,
  DELETE_SMURF_SUCCESS,
  DELETE_SMURF_ERROR
} from "../actions";

const initialState = {
  smurfs: [],
  isLoading: false,
  error: ""
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SMURFS_START:
      return {
        ...state,
        isLoading: true,
        error: ""
      };
    case GET_SMURFS_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        isLoading: false,
        error: ""
      };
    case GET_SMURFS_ERROR:
      return {
        ...state,
        error: action.payload
      };
    case NEW_SMURFS_START:
      return {
        ...state,
        isFetching: true,
        error: ""
      };
    case NEW_SMURFS_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        isFetching: false,
        error: ""
      };
    case NEW_SMURFS_ERROR:
      return {
        ...state,
        error: action.payload
      };
    case DELETE_SMURF_START:
      return {
        ...state,
        isFetching: true,
        error: ""
      };
    case DELETE_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        isFetching: false,
        error: ""
      };
    case DELETE_SMURF_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
