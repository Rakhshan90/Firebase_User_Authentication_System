import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import GoogleButton from "react-google-button";
import { useUserAuth } from "../context/UserAuthContext";


const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const { signUp } = useUserAuth();
    let navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("")
        try {
            await signUp(email, password)
            navigate('/');
        }
        catch (err) {
            setError(err.message)
        }
    }
    return (
        <>
            <div className="p-4 box">
                <h2 className="mb-3">Firebase Authentication Signup</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onChange={(e) => { setEmail(e.target.value) }} type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onChange={(e) => { setPassword(e.target.value) }} type="password" placeholder="Password" />
                    </Form.Group>

                    <div className="d-grid gap-2">
                        <Button variant="primary" type="submit">
                            Sign up
                        </Button>
                    </div>
                </Form>
                <hr />
                <div>
                    <GoogleButton
                        className="g-btn"
                        type="dark"
                    />
                </div>
            </div>
            <div className="p-4 box mt-3 text-center">
                Already have an account? <Link className="link" to="/">Log In</Link>
            </div>
        </>
    );
}

export default Signup;