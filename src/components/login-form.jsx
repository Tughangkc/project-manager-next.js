"use client";
import React from "react";
import {
    Alert,
    Button,
    Card,
    Col,
    FloatingLabel,
    Form,
    Row,
} from "react-bootstrap";
import { TfiGoogle, TfiGithub } from "react-icons/tfi";
import { useFormState } from "react-dom";
import {
    signInWithCredentials,
    signInWithSocial,
} from "@/actions/auth-actions";
const LoginForm = () => {
    const initialState = { ok: false, message: "", errors: null };
    const [state, dispatch] = useFormState(signInWithCredentials, initialState);
    return (
        <Row>
            <Col sm={9} md={7} lg={5} className="mx-auto">
                <Card>
                    <Card.Body>
                        <Card.Title>Login</Card.Title>
                        {state.message ? (
                            <Alert variant="danger" className="mb-3">
                                {state.message}
                            </Alert>
                        ) : null}
                        <Form action={dispatch}>
                            <FloatingLabel
                                controlId="username"
                                label="Username"
                                className="mb-3"
                            >
                                <Form.Control
                                    name="username"
                                    type="text"
                                    placeholder="Username"
                                    isInvalid={!!state.errors?.username}
                                    defaultValue="atuny0"
                                />
                                <Form.Control.Feedback type="invalid">
                                    {state.errors?.username}
                                </Form.Control.Feedback>
                            </FloatingLabel>
                            <FloatingLabel
                                controlId="password"
                                label="Password"
                                className="mb-3"
                            >
                                <Form.Control
                                    name="password"
                                    type="password"
                                    placeholder="Password"
                                    isInvalid={!!state.errors?.password}
                                    defaultValue="9uQFF1Lh"
                                />
                                <Form.Control.Feedback type="invalid">
                                    {state.errors?.password}
                                </Form.Control.Feedback>
                            </FloatingLabel>
                            <Button
                                className="text-uppercase w-100"
                                type="submit"
                                variant="warning"
                            >
                                Sign in
                            </Button>
                        </Form>
                        <hr />
                        <Form action={signInWithSocial}>
                            <input
                                type="hidden"
                                name="provider"
                                defaultValue="google"
                            />
                            <Button variant="secondary w-100 mb-3" type="submit">
                                <TfiGoogle /> Signin with Google
                            </Button>
                        </Form>
                        <Form action={signInWithSocial}>
                            <input
                                type="hidden"
                                name="provider"
                                defaultValue="github"
                            />
                            <Button variant="secondary w-100" type="submit">
                                <TfiGithub /> Signin with Github
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
};
export default LoginForm;