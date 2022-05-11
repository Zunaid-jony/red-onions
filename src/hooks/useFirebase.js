
import { getAuth, signInWithPopup, GoogleAuthProvider,signOut, onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from 'react';
import initializationAuthanticaion from './../componets/Login/Fifebase/firebase.init';
initializationAuthanticaion()
const useFirebase = ()=>{
    const [user, setUser] = useState({})
    const auth = getAuth();
    const signInuSingGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
        .then(result => {
            setUser(result.user);
        });
    }

    useEffect(() =>{
      const unsubscribed = onAuthStateChanged(auth, user =>{
            if(user){
                setUser(user);
            }
            else{
                setUser({})
            }
        });
        return () => unsubscribed;
        
    },[])
    const logOut = ()=>{
        signOut(auth)
        .then(() => {});
    }

    return {
        user,
        signInuSingGoogle,
        logOut
    }
}
export default useFirebase;