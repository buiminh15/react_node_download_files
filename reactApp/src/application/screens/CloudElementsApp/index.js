import React, { Component } from 'react';
import { connect } from 'react-redux';
import Dropzone from 'react-dropzone';
import { Button } from 'react-bootstrap';
import {
  uploadFileToFolder,
  fetchFolderContent
} from '../../actions/CloudElementsActions';
import ReactLoader from '../../components/ReactLoader';
import ViewFiles from './ViewFiles';
import './uploadBar.css';
import PendingFiles from './PendingFiles';

const convertFileToBase64 = file => {
  const reader = new FileReader();
  const base64Promise = new Promise(resolve => {
    reader.readAsDataURL(file);
    reader.onload = () => {
      resolve(reader.result);
    };
  });
  return base64Promise.then(base64String => base64String);
};

class CloudElementsApp extends Component {
  state = {
    // fileName: '',
    // base64: ''
    files: []
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchFolderContent());
  }

  catchFile = async acceptedFiles => {
    const files = acceptedFiles.map(async file => ({
      fileName: file.name,
      base64: await convertFileToBase64(file)
    }));
    Promise.all(files).then(fileObj => {
      this.setState({ files: fileObj });
    });
    // const fileName = files[0].name;
    // const base64 = await convertFileToBase64(files[0]);
    // this.setState({ fileName, base64 });
  };

  uploadFileToAPI = () => {
    // const { fileName, base64 } = this.state;
    const { files } = this.state;
    const { dispatch } = this.props;
    dispatch(uploadFileToFolder(files)).then(APIResponse => {
      console.log('APIResponse', APIResponse);
      // alert(APIResponse.message);
      dispatch(fetchFolderContent());
      this.setState({ files: [] });
    });
  };

  removeUploadedFile = fileIndex => {
    const { files } = this.state;
    const updatedFiles = files.filter((file, i) => fileIndex !== i);
    this.setState({ files: updatedFiles });
  };

  render() {
    console.log('this.state', this.state);
    const { files } = this.state;
    const { isLoading } = this.props;
    return (
      <div>
        {isLoading ? (
          <ReactLoader />
        ) : (
          <div
            style={{ width: '85%', textAlign: 'center', margin: '1em auto' }}
          >
            <ul className="uploadExcelul margin-bottom">
              <li className="dropzoneli">
                <Dropzone
                  onDrop={acceptedFiles => this.catchFile(acceptedFiles)}
                >
                  {({ getRootProps, getInputProps }) => (
                    <section>
                      <div {...getRootProps()} style={{ height: '37px' }}>
                        <input {...getInputProps()} />
                        <p>
                          <span>Drag or click to select files</span>
                        </p>
                      </div>
                    </section>
                  )}
                </Dropzone>
              </li>
              <li className="uploadExcelli margin-left">
                <Button
                  className="btn btn-success full-width no-margin"
                  onClick={this.uploadFileToAPI}
                >
                  <span>Upload Files</span>
                </Button>
              </li>
            </ul>
            {/* <form>
              <label htmlFor="firstName">
                <span>Upload File to Folder</span>
                <input type="file" onChange={this.catchFile} />
              </label>
              <input
                type="button"
                value="Upload File"
                onClick={this.uploadFileToAPI}
              />
            </form> */}
            <div style={files.length > 0 ? { height: '200px' } : {}}>
              <PendingFiles
                pendingFiles={files}
                cancelFile={this.removeUploadedFile}
              />
            </div>
            <div>
              <ViewFiles />
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.loadingReducer.isLoading
});

export default connect(mapStateToProps)(CloudElementsApp);
