import {
  fetchEventsFailure,
  fetchEventsSuccess,
  fetchEventsRequest,
  deleteEvents
} from "./action";
import axios from 'axios';

const fetchActivity = () => {
  
  // For Fetching
  return (dispatch) => {
    dispatch(fetchEventsRequest("Fetching..."));
    return axios.get("http://dummy.restapiexample.com/api/v1/employees")
      .then((response) => {
        const activity = response.data && response.data.data ? response.data.data : dispatch(fetchEventsFailure({errorMsg: `Data not present`, Message:`No data available for fetch API`}));
        dispatch(fetchEventsSuccess(activity));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchEventsFailure({errorMsg, Message:`Fetch API Failed, Please reload.`}));
      });
  };
};

const searchActivity = (id) => {
  
  // For Searching
  return (dispatch) => {
    dispatch(fetchEventsRequest("Searching..."));
    return axios.get(`http://dummy.restapiexample.com/api/v1/employee/${id}`)
      .then((response) => {
        console.log(response)
        const activity = response.data && response.data.data ? response.data.data : undefined; //dispatch(fetchEventsFailure({errorMsg: `Data not present`, Message:`No data available for Search API`}));

        if (activity && activity.length) {
          dispatch(fetchEventsSuccess(activity));

        } else if(activity && !activity.length) {
          const list = [activity]
          dispatch(fetchEventsSuccess(list));

        } else {
          dispatch(fetchEventsFailure({errorMsg: `Data not present`, Message: `Data Not Present` }));

        }
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchEventsFailure({errorMsg, Message:`Search API Failed, Please try again.`}));
      });
  };

}

const deleteActivity = (id) => {
  
  // For Deleting
  return (dispatch) => {
    dispatch(fetchEventsRequest("Deleting..."));
    return axios.delete(`http://dummy.restapiexample.com/api/v1/delete/${id}`)
      .then((response) => {
        console.log(response)
        const activity = response.data && response.data.message ? response.data.message : dispatch(fetchEventsFailure({errorMsg: `Data not present`, Message:`No data available for Delete API`}));

        dispatch(deleteEvents({Message: activity}));

      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchEventsFailure({errorMsg, Message:`Delete API Failed, Please reload.`}));
      });
  };

}

export {fetchActivity, searchActivity, deleteActivity};
