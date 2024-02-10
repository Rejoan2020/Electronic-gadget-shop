import React from 'react'
import { Alert } from 'react-bootstrap'

const ErrorMessage = ({ variant, children }) => {
  return <Alert variant={variant}>{children}</Alert>;
};

export default ErrorMessage
