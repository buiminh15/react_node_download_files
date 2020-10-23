import React from 'react';
import Loader from 'react-loader-spinner';

const styleObj = {
  div: {
    backgroundColor: '#e8e8e9',
    position: 'fixed',
    height: '100%',
    width: '100%',
    top: '0',
    left: '0',
    opacity: '0.4'
  },
  center: {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    position: 'absolute'
  }
};

export default () => (
  <div style={styleObj.div}>
    <center style={styleObj.center}>
      <Loader type="ThreeDots" color="#216ab7" height="70" width="70" />
    </center>
  </div>
);
