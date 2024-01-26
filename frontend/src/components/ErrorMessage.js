import React from 'react'
import { Alert } from 'react-bootstrap'

function ErrorMessage({vant,child}) {
  return (
    <Alert variant={vant}>
      {child}
    </Alert>
  )
}

export default ErrorMessage
