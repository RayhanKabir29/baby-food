import initializeAutentication from "../Pages/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged,signInWithEmailAndPassword,signInWithPopup, GoogleAuthProvider} from "firebase/auth";
import { useEffect, useState } from "react";
initializeAutentication();
const useFirebase = () => {
    const [user, setuser] = useState({});
    const[isLoading, setisLoading] = useState(true);
    const[authError, setAuthError] = useState('');

    const auth = getAuth();
    const googleProvider = new  GoogleAuthProvider();

    const addUser = (email, password,history) =>{
        setisLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then(result =>{
           setAuthError('');
           history.push('/');
        })
        .catch(error=>{
            setAuthError(error.message);
        })
        .finally(()=> setisLoading(false));
    }

    const loginWithEmail =(email, password,location, history)=>{
        setisLoading(true);
         return signInWithEmailAndPassword(auth, email,password)
        .catch(error=>{
            setAuthError(error.message);
        })
        .finally(()=> setisLoading(false));
    }

    const loginWithGoogle = () =>{
        setisLoading(true);
       return signInWithPopup(auth, googleProvider)
        
        .catch(error =>{
            setAuthError(error.message);
        })
        .finally(()=> setisLoading(false));
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, user=>{
            if(user){
                setuser(user);
            }
            else{
                setuser({});
            }
            setisLoading(false);
        });
        return () => unsubscribe;
    },[])
    const logOut =() =>{
        signOut(auth)
        .then(() => {
            // Sign-out successful.
          }).catch((error) => {
            setAuthError(error.message);
          })
          .finally(()=>setisLoading(false));
    }
    return{
        user,
        isLoading,
        authError,
        setAuthError,
        addUser,
        loginWithEmail,
        loginWithGoogle,
        logOut
    }
};

export default useFirebase;