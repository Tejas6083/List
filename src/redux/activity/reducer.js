import {
    FETCH_EVENTS_REQUEST,
    FETCH_EVENTS_SUCCESS,
    FETCH_EVENTS_FAILURE,
    DELETE_EVENTS
  } from "./type";
  
  const initialState = {
    loading: true,
    eventsList: [],
    error: '',
    message: '',
    delete: false
  };
  
  const userActivity = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_EVENTS_REQUEST:
        return {
          ...state,
          loading: true,
          eventsList: [],
          error: '',
          message: action.payload,
          delete: false
        };
  
      case FETCH_EVENTS_SUCCESS:
        return {
          ...state,
          loading: false,
          eventsList: action.payload,
          error: '',
          message: '',
          delete: false
        };
  
      case FETCH_EVENTS_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload.errorMsg,
          eventsList: [],
          message: action.payload.Message,
          delete: false

        };

      case DELETE_EVENTS:
        return {
          ...state,
          loading: false,
          error: action.payload.errorMsg ? action.payload.errorMsg : '',
          message: action.payload.Message? action.payload.Message : '',
          delete: true
        };
  
      default:
        return state;
    }
  };
  
  export default userActivity;
  