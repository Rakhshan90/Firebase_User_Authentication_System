import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import GoogleButton from "react-google-button";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useUserAuth } from "../context/UserAuthContext";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const { logIn, signInWithGoogle } = useUserAuth();
    let navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("")
        try {
            await logIn(email, password)
            navigate('/home');
        }
        catch (err) {
            setError(err.message)
        }
    }
    const handleGoogleSignIn = async (e) => {
        e.preventDefault();
        setError("")
        try {
            await signInWithGoogle()
            navigate('/home');
        }
        catch(err){
            setError(err.message)
        }   
    }
    return (
        <>
            <div className="p-4 box">
                <h2 className="mb-3">Firebase Authentication Login</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control onChange={(e) => { setEmail(e.target.value) }} type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control onChange={(e) => { setPassword(e.target.value) }} type="password" placeholder="Password" />
                    </Form.Group>

                    <div className="d-grid gap-2">
                        {/* <Button variant="primary" type="submit">
                            Log In
                        </Button> */}
                        <Button variant="primary" type="submit">Log In</Button>{' '}
                    </div>
                </Form>
                <hr />
                <div>
                    <GoogleButton
                        className="g-btn"
                        type="dark" onClick={handleGoogleSignIn}
                    />
                </div>
            </div>

            <div className="p-4 box mt-3 text-center box-f-s">
                <Link className="link" to="/forgot">Forgot Password</Link>
                <Link className="link" to="/signup">Sign up</Link>
            </div>
        </>
    );
}

export default Login;