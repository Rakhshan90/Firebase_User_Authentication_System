import React, { useState } from "react";
import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useUserAuth } from "../context/UserAuthContext";
import { Navigate } from "react-router-dom";

const Home = () => {
    const { user, logOut } = useUserAuth();
    const [error, setError] = useState("");
    // console.log(user)
    const handleLogOut = async () => {
        setError("")
        try {
            await logOut()
            Navigate("/")
        }
        catch (err) {
            // console.log(err.message)
            setError(err.message)
        }
    }
    return (
        <>
            <div className="p-4 box mt-3 text-center">
                Hello Welcome <br /> {user && user.email}

            </div>
            <div className="d-grid gap-2">
                <Button variant="primary" onClick={handleLogOut}>
                    Log out
                </Button>
            </div>
        </>
    );
};

export default Home;