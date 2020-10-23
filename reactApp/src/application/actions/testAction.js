import { API_GET } from './APIMethods';
import { ActionType } from './actionType';
import { setLoading, resetLoading } from './LoadingActions';
import { ActionUrl } from './actionURL';

export const checkRedux = bool => dispatch =>
  dispatch({ type: ActionType.TEST_ACTIONTYPE, payload: bool });

export const sampleAPICall = () => {
  // url is given
  const url = `${ActionUrl.DUMMY_URL}`;
  return async dispatch => {
    try {
      // a spinner will be initialised in the component
      dispatch(setLoading());
      // axios call will run based on the url
      const result = await API_GET(url);
      // a spinner will be stopped in the component as we have received data from API
      dispatch(resetLoading());
      if (!result.error) {
        // dispatch runs on a reducer with the data coming from API & the reducer will be updated
        dispatch({
          type: ActionType.TEST_ACTIONTYPE,
          payload: result.result
        });
      }
    } catch (error) {
      // dispatch({ type: ErrorType.ERROR_LOG, message: error.message });
    }
  };
};
