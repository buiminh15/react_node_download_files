import { AppConfig } from '../AppConfig';

export const ActionUrl = {
  // TEST_URL: `${AppConfig.API_BASE_URL}test/testController`,
  DUMMY_URL: 'http://dummy.restapiexample.com/api/v1/employees'
};

export const CloudElementsAppUrl = {
  UPLOAD_FILE_TO_FOLDER: `${
    AppConfig.API_BASE_URL
  }cloudElements/uploadFilesToFolder`,
  FETCH_FOLDER_CONTENT: `${
    AppConfig.API_BASE_URL
  }cloudElements/getFolderContent`,
  DOWNLOAD_CONTENT: `${
    AppConfig.API_BASE_URL
  }cloudElements/downloadFileFromFolder`
};
