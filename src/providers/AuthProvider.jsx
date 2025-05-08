import React, { useEffect, useState } from 'react';
import { ProviderContext } from './ProviderContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';

const AuthProvider = ({ children }) => {

    const [profile, setProfile] = useState(null);
    const [resetEmail, setResetEmail] = useState(null);
    const [loading, setLoading] = useState(true)
    const provider = new GoogleAuthProvider();

    const registerUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }
    
    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }
    
    const updateUser = (name, image) => {
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: image
        })
    }
    const updateUserName = (name) => {
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name,
        })
    }
    const updateUserImage = (image) => {
        setLoading(true)
        return updateProfile(auth.currentUser, {
            photoURL: image
        })
    }

    const forgetPassword = (email) => {
        return sendPasswordResetEmail(auth, email)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setProfile(currentUser);
            setLoading(false);
        });

        return () => unsubscribe;
    }, []);

    const signOutUser = () => {
        setLoading(true)
        return signOut(auth)
    }

    const user = {
        registerUser,
        signInUser,
        updateUser,
        updateUserName,
        updateUserImage,
        signOutUser,
        googleSignIn,
        setResetEmail,
        forgetPassword,
        profile,
        resetEmail,
        loading
    }
    
    return (
        <div>
            <ProviderContext value={user}>
                {children}
            </ProviderContext>
        </div>
    );
};

export default AuthProvider;