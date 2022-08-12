import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext";


const Forgot = () => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [submitted, setSubmitted] = useState(false)
    const { forgotPassword } = useUserAuth()
    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitted(true)
        setError("")
        try {
            await forgotPassword(email)
        }
        catch (err) {
            setError(err.message)
        }
    }
    return (
        <>
            <div className="p-4 box">
                <h2 className="mb-3">Forgot Your Password</h2>
                <Form onSubmit={handleSubmit}>
                    {error ? <div>
                        <Alert variant="danger">{error}</Alert>
                    </div> : null
                    }
                    {!error && submitted ? <div>
                        <>
                            {[
                                'success'
                            ].map((variant) => (
                                <Alert key={variant} variant={variant}>
                                    {variant}! Email has been sent. Please check your email box
                                </Alert>
                            ))}
                        </>
                    </div> : null}
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Enter registered email address</Form.Label>
                        <Form.Control onChange={(e) => { setEmail(e.target.value) }} type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>

                    <div className="d-grid gap-2">
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </div>
                </Form>
                <hr />
            </div>
            <div className="p-4 box mt-3 text-center">
                Already have an account? <Link className="link" to="/">Log In</Link>
            </div>
        </>
    );
}
export default Forgot;
