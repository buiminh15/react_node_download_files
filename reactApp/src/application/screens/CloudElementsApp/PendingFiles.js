import React from 'react';
import Card from '../../components/Card';

export default props => {
  const { pendingFiles, cancelFile } = props;
  return (
    <div>
      {pendingFiles.map((file, i) => (
        <div style={{ float: 'left', padding: '10px' }} key={i}>
          <Card
            title={file.fileName}
            footerButton={{
              variant: 'warning',
              title: 'cancel',
              onClick: () => cancelFile(i)
            }}
          />
        </div>
      ))}
    </div>
  );
};
