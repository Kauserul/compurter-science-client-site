import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import React, { createContext } from 'react';
import app from '../firebase/firebase.config';
export {getAuth} from 'firebase/auth'

export const AuthContext = createContext();

const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const user = {displayName : 'Kauser'}

    const userRegister = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const authInfo = {user, userRegister}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;