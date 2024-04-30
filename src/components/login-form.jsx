"use client"
import React from 'react'
import { Button, Card, CardBody, CardTitle, Col, FloatingLabel, Form, Row } from 'react-bootstrap'

const LoginForm = () => {
  return (
    <Row>
      <Col sm={9} md={7} lg={5} className='mx-auto'></Col>
      <Card>
        <CardBody>
            <CardTitle>Login</CardTitle>

            <Form>
            <FloatingLabel
        controlId="username"
        label="Username"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Username" />
      </FloatingLabel>
            <FloatingLabel
        controlId="password"
        label="Password"
        className="mb-3"
      >
        <Form.Control type="password" placeholder="Password" />
      </FloatingLabel>

      <Button className='text-uppercase w-100' type='submit' variant='warning'>Sign in</Button>
            </Form>
        </CardBody>
      </Card>
    </Row>
  )
}

export default LoginForm
