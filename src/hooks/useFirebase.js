import initializeAutentication from "../Pages/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged,signInWithEmailAndPassword,signInWithPopup, GoogleAuthProvider,updateProfile} from "firebase/auth";
import { useEffect, useState } from "react";
initializeAutentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const[isLoading, setisLoading] = useState(true);
    const[authError, setAuthError] = useState('');

    const auth = getAuth();
    const googleProvider = new  GoogleAuthProvider();

    const addUser = (email, password,name,history) =>{
        setisLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then(result =>{
           setAuthError('');
           const newUser = {email, displayName:name};
           setUser(newUser);
           //Save User to Database
           saveUser(email, name,'POST')
           //Update Profile
           updateProfile(auth.currentUser, {
            displayName: name
            }).then(() => { 
            }).catch((error) => {
            });
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

    const loginWithGoogle = (location,history) =>{
        setisLoading(true);
       signInWithPopup(auth, googleProvider)
       .then(result=>{
           const user = result.user;
       saveUser(user.email, user.displayName, 'PUT')
       history.replace(location.state?.from || '/');
       setAuthError('');
    })
        
        .catch(error =>{
            setAuthError(error.message);
        })
        .finally(()=> setisLoading(false));
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, user=>{
            if(user){
                setUser(user);
            }
            else{
                setUser({});
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

   const saveUser = (email, displayName, method) =>{
        const user ={email, displayName};
        fetch('http://localhost:5000/users',{
            method:method,
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(user)
        })
        .then()
    }
    return{
        user,
        isLoading,
        authError,
        setAuthError,
        addUser,
        loginWithEmail,
        loginWithGoogle,
        saveUser,
        logOut
    }
};

export default useFirebase;