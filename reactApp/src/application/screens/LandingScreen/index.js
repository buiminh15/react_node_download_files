import React, { Component } from 'react';
import Card from '../../components/Card';

class LandingScreen extends Component {
  render() {
    const { router } = this.props;
    return (
      <div style={{ width: '85%', textAlign: 'center', margin: '1em auto' }}>
        <Card
          title="Cloud Elements Application"
          footerButton={{
            variant: 'info',
            title: 'open',
            onClick: () => router.push('cloudElementsApp')
          }}
        >
          <span>This screen will have file upload and download feature</span>
        </Card>
      </div>
    );
  }
}

export default LandingScreen;
