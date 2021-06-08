import {
    FETCH_EVENTS_REQUEST,
    FETCH_EVENTS_SUCCESS,
    FETCH_EVENTS_FAILURE,
    DELETE_EVENTS
  } from "./type";
  
  export const fetchEventsRequest = (message) => {
    return {
      type: FETCH_EVENTS_REQUEST,
      payload: message
    };
  };
  
  export const fetchEventsSuccess = (activity) => {
    return {
      type: FETCH_EVENTS_SUCCESS,
      payload: activity,
    };
  };
  
  export const fetchEventsFailure = (error) => {
    return {
      type: FETCH_EVENTS_FAILURE,
      payload: error,
    };
  }

  export const deleteEvents = (data) => {
    return {
      type: DELETE_EVENTS,
      payload: data,
    };
  };  