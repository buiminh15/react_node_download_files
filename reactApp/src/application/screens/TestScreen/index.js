import React, { Component } from 'react';
import { connect } from 'react-redux';
import { checkRedux, sampleAPICall } from '../../actions/testAction';
import ReactLoader from '../../components/ReactLoader';

class TestScreen extends Component {
  check = () => {
    const { dispatch, reduxWorking } = this.props;
    dispatch(checkRedux(!reduxWorking));
  };

  checkAPILoader = () => {
    const { dispatch } = this.props;
    dispatch(sampleAPICall());
  };

  render() {
    const { reduxWorking, isLoading } = this.props;
    console.log('isLoading', isLoading);
    return (
      <div>
        {isLoading ? (
          <ReactLoader />
        ) : (
          <div>
            <span>this is test screen</span>
            <input type="button" value="check redux" onClick={this.check} />
            <div>
              <span>Redux Working Status:</span>
              <span>
                {reduxWorking ? 'Changed to TRUE' : 'Changed to FALSE'}
              </span>
            </div>

            <input
              type="button"
              value="check API Loader"
              onClick={this.checkAPILoader}
            />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  reduxWorking: state.testReducer.reduxWorking,
  isLoading: state.loadingReducer.isLoading
});

export default connect(mapStateToProps)(TestScreen);
