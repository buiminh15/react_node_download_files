import { API_POST, API_GET } from './APIMethods';
// import { ActionType } from './actionType';
import { setLoading, resetLoading } from './LoadingActions';
import { CloudElementsAppUrl } from './actionURL';
import { CloudElementsType } from './actionType';

// export const checkRedux = bool => dispatch =>
//   dispatch({ type: ActionType.TEST_ACTIONTYPE, payload: bool });

export const uploadFileToFolder = data => {
  const url = `${CloudElementsAppUrl.UPLOAD_FILE_TO_FOLDER}`;
  return async dispatch => {
    try {
      dispatch(setLoading());
      const result = await API_POST(url, data);
      dispatch(resetLoading());
      if (!result.error) {
        // dispatch({
        //   type: ActionType.TEST_ACTIONTYPE,
        //   payload: result.result
        // });
      }
      return { error: false, message: result.data.message };
    } catch (error) {
      // dispatch({ type: ErrorType.ERROR_LOG, message: error.message });
      return { error: true, message: error.message };
    }
  };
};

export const fetchFolderContent = () => {
  const url = `${CloudElementsAppUrl.FETCH_FOLDER_CONTENT}`;
  return async dispatch => {
    try {
      dispatch(setLoading());
      const result = await API_GET(url);
      dispatch(resetLoading());
      if (!result.error) {
        dispatch({
          type: CloudElementsType.FETCH_FOLDER_CONTENT,
          payload: result.data
        });
      }
      return { error: false, message: result.data.message };
    } catch (error) {
      // dispatch({ type: ErrorType.ERROR_LOG, message: error.message });
      return { error: true, message: error.message };
    }
  };
};

export const downloadFileFromFolder = fileName => {
  const url = `${CloudElementsAppUrl.DOWNLOAD_CONTENT}/${fileName}`;
  return async dispatch => {
    try {
      dispatch(setLoading());
      window.open(url);
      dispatch(resetLoading());
    } catch (error) {
      // dispatch({ type: ErrorType.ERROR_LOG, message: error.message });
    }
  };
};
