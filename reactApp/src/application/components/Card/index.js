import React from 'react';
import { Card, Button } from 'react-bootstrap';

export default props => {
  const { title, children, footerButton } = props;
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{children}</Card.Text>
        <Button variant={footerButton.variant} onClick={footerButton.onClick}>
          {footerButton.title}
        </Button>
      </Card.Body>
    </Card>
  );
};
