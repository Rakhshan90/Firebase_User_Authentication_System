import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext";

function useQuery(){
    return new URLSearchParams(useLocation().search);
}

const Reset = () => {
    const [newPassword, setPassword] = useState("");
    const [error, setError] = useState("");
    const [submitted, setSubmitted] = useState(false)
    const { resetPassword } = useUserAuth()
    let navigate = useNavigate();
    const query = useQuery()
    console.log(query.get('mode'))
    console.log(query.get('oobCode'))
    console.log(query.get('continueUrl'))
    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitted(true)
        setError("")
        try {
            await resetPassword(query.get('oobCode'), newPassword)
            navigate('/');
        }
        catch (err) {
            setError(err.message)
        }
    }
    return (
        <>
            <div className="p-4 box">
                <h2 className="mb-3">Reset Your Password</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>New Password</Form.Label>
                        <Form.Control onChange={(e) => { setPassword(e.target.value) }} type="text" />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>

                    <div className="d-grid gap-2">
                        <Button variant="primary" type="submit">
                            Reset Password
                        </Button>
                    </div>
                </Form>
            </div>
        </>
    );
}
export default Reset;
