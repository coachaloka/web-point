import React, { createContext, useState, useEffect } from 'react';
import app from '../Firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser]=useState(null);
    const [loading, setLoading]= useState(true);

    //1 create user starts
    const createUser = (email, password)=>{
        setLoading(true)
        
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // create user finished

    // 1- log in started
    const login = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    //3- log in finished
    const logOut = ()=>{
        return signOut(auth);
    }
    // 4 - 
    const providerLogIn = (provider)=>{
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    // 2-set user changes auth and unsubscribe observer
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            console.log(currentUser);
            setUser(currentUser);
            setLoading(false)
        })
        return ()=>{
            return unsubscribe();
        }
    },[]);
    // 2-fininshed

//  step 4 pass data ot auth infor 
    const authInfo = {
        user,
        loading,
        createUser,
        login,
        logOut,
        providerLogIn
    }

    return (
        // step 5 receive data to use anywhere in app
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;