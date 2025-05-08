import React, { useEffect, useState } from 'react';
import { ProviderContext } from './ProviderContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';

const AuthProvider = ({ children }) => {

    const [profile, setProfile] = useState(null);
    const provider = new GoogleAuthProvider();

    const registerUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    
    const googleSignIn = () => {
        return signInWithPopup(auth, provider)
    }
    
    const updateUser = (name, image) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: image
        })
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setProfile(currentUser)
        });

        return () => unsubscribe;
    }, []);

    const signOutUser = () => {
        return signOut(auth)
    }

    const user = {
        registerUser,
        signInUser,
        updateUser,
        signOutUser,
        googleSignIn,
        profile
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