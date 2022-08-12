import React, { createContext ,useContext, useEffect, useState } from "react"
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup,
    sendPasswordResetEmail
} from 'firebase/auth';
import { auth } from "../firebase";


const userAuthContext = createContext();


export function UserAuthContextProvider({ children }) {
    const [user, setUser] = useState("");
    function signUp(email, password){
        return createUserWithEmailAndPassword(auth, email, password)
    }
    function logIn(email, password){
        return signInWithEmailAndPassword(auth, email, password)
    }
    function logOut(){
        return signOut(auth)
    }
    function signInWithGoogle(){
        const googleAuthProvider = new GoogleAuthProvider()
        return signInWithPopup(auth, googleAuthProvider)
    }
    function forgotPassword(email){
        return sendPasswordResetEmail(auth, email, {url: 'http://localhost:3000/'})
    }
    useEffect(()=>{
        const Unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
        })
        return Unsubscribe;
    },[])
    return <userAuthContext.Provider value={{user, signUp, logIn, logOut, signInWithGoogle, forgotPassword}}>{children}</userAuthContext.Provider>
}

export function useUserAuth(){
    return useContext(userAuthContext);
}