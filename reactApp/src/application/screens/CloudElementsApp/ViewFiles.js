import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../../components/Card';
import { downloadFileFromFolder } from '../../actions/CloudElementsActions';

class ViewFiles extends Component {
  download = fileName => {
    const { dispatch } = this.props;
    dispatch(downloadFileFromFolder(fileName));
  };

  displayCards = folderContent =>
    folderContent.map((content, i) => (
      <div style={{ float: 'left', padding: '10px' }} key={i}>
        <Card
          title={content}
          footerButton={{
            variant: 'primary',
            title: 'download',
            onClick: () => this.download(content)
          }}
        />
      </div>
    ));

  render() {
    const { folderContent } = this.props;
    return <React.Fragment>{this.displayCards(folderContent)}</React.Fragment>;
  }
}

const mapStateToProps = state => ({
  folderContent: state.CloudElementsReducer.folderContent
});

export default connect(mapStateToProps)(ViewFiles);
