import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';


const Login = () => {
    const [loging, setLoging] = useContext(UserContext);
    if(firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const  provider = new firebase.auth.GoogleAuthProvider();

    const hendleGoogleLogin = () =>{
        firebase.auth().signInWithPopup(provider)
        .then(function(result) {
            var user = result.user;
            const newUser = {...loging};
            newUser.name = user.displayName;
            newUser.email = user.email;
            setLoging(newUser);
            history.replace(from)
          }).catch(function(error) {
            var errorCode = error.code;
            console.log(errorCode)
            var errorMessage = error.message;
            const userError = {...loging};
            userError.error = errorMessage
          });
    }
    
    return (
        <div>
            <h2>email: {loging.email}</h2>
            <button onClick={hendleGoogleLogin}>login with google</button>
            
        </div>
    );
};

export default Login;