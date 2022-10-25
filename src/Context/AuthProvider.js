import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
export {getAuth} from 'firebase/auth'

export const AuthContext = createContext();

const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const userRegister = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const userLogIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const userLogOut = () =>{
        return signOut(auth)
    }

    const googleLogIn = () =>{
        return signInWithPopup(auth, googleProvider)
    }

    const userUpdateProfile = (profile) => {
        return updateProfile(auth.currentUser, profile);
    }

    useEffect( ()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            setLoading(false)
            setUser(currentUser)
        })
        return () =>{
            unSubscribe()
        }

    }, [])

    const authInfo = {user, userRegister, userLogIn, userLogOut, googleLogIn, userUpdateProfile, loading}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;