import { initializeApp } from "firebase/app";
import firebaseConfig from './firebaseConfig';

const initializationAuthanticaion =() =>{
    initializeApp(firebaseConfig);
}
export default initializationAuthanticaion;



