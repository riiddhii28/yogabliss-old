import React, { createContext, useState } from 'react'
import { app } from "../../config/firebase.init";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";



export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);
    const [error, setError] = useState('');

    const auth= getAuth(app);

    //Sign up new user
    const signUp = async(email, password) =>{
        try{
            setLoader(true);
            return await createUserWithEmailAndPassword(auth, email, password)
        }catch(error){
            setError(error.code);
            throw error;
        }
    }

    //login user
    const login = async(email, password) =>{
        try{
            setLoader(true);
            return await signInWithEmailAndPassword(auth, email, password)
        }catch(error){
            setError(error.code);
            throw error;
        }
    }

    //logout user
    const logout = async(email, password) =>{
        try{
            return await signOut(auth);
        }catch(error){
            setError(error.code);
            throw error;
        }
    }

    //update user profile
    const updateUser = async(name, photo) =>{
        try{
            await updateProfile(auth.currentUser, {
                displayName: name, photoURL: photo
            });
            setUser(auth.currentUser)
        }catch(error){
            setError(error.code);
            throw error;
        }
    }


   
        

    const contextValue ={user, signUp, login, logout, updateUser}
  return (
    <AuthContext.Provider value={contextValue}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider