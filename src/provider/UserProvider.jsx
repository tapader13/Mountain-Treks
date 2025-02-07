import { createContext, useEffect, useState } from 'react';
import { auth } from './../firebase/firebase.init';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
  updateProfile,
} from 'firebase/auth';

export const userContext = createContext(null);
const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const signUpUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logoutUser = () => {
    return signOut(auth);
  };
  const googleLogin = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };
  const forgetPass = (email) => {
    return sendPasswordResetEmail(auth, email);
  };
  const updateProfileUser = (data) => {
    return updateProfile(auth.currentUser, data);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      // console.log(user, 3);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <userContext.Provider
      value={{
        user,
        signUpUser,
        loginUser,
        loading,
        logoutUser,
        googleLogin,
        forgetPass,
        updateProfileUser,
        setUser,
      }}
    >
      {children}
    </userContext.Provider>
  );
};

export default UserProvider;
