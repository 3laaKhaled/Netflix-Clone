import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyDcAxTY5KQvO-G8RXwOlFNH-0avdWkdNLY",
  authDomain: "netflix-clone-13d4d.firebaseapp.com",
  projectId: "netflix-clone-13d4d",
  storageBucket: "netflix-clone-13d4d.firebasestorage.app",
  messagingSenderId: "280703325864",
  appId: "1:280703325864:web:1d3ddfab5818a3f109949d",
  measurementId: "G-Z3G2X8MWWJ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)

const signup = async (name , email , password) => {
    
    try {
        const res = await createUserWithEmailAndPassword(auth , email , password)
        const user = res.user
        await addDoc(collection(db , 'user') , {
            uid: user.uid,
            name,
            authProvider: 'local',
            email,
        })
    } catch (error) {
        console.log(error)
        toast.error(error.code.split('/')[1].split('-').join(' '))
    }

}

const login = async (email , password) => {
    
    try {
        await signInWithEmailAndPassword(auth , email , password)
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(' '))
    }

}

const logout = () => {
    signOut(auth)
}

export {auth , db , login , signup , logout}