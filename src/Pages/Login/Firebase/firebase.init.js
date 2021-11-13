import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializeAutentication = () =>{
    initializeApp(firebaseConfig)
}
export default initializeAutentication;