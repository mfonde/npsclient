import React, {useState} from 'react';
import {Button} from 'reactstrap';
import SignUp from './SignUp';
import LogIn from './LogIn';

const AuthBar = (props) => {
    const [signUpActive, setSignUpActive] = useState(false);
    const [logInActive, setLogInActive] = useState(false);

    const signUpOn = () => {
        setSignUpActive(true);
    }

    const signUpOff = () => {
        // e.preventDefault();
        setSignUpActive(false);
    }

    const logInOn = () => {
        setLogInActive(true);
    }

    const logInOff = () => {
        setLogInActive(false);
    }

// {sessionToken ? <NavBar logOut={clearToken} /> : <AuthBar updateToken={updateToken} />}
    return(
        <div>
            {!props.sessionToken ? <div> <Button onClick={signUpOn}>Create an Account</Button>
            {signUpActive ? <SignUp signUpOff={signUpOff} updateToken={props.updateToken} /> : <></>}
            {/* <SignUp updateToken={props.updateToken} /> */}
            <Button onClick={logInOn}>Log In</Button>
            {logInActive ? <LogIn logInOff={logInOff} updateToken={props.updateToken} /> : <></>} </div> : <></>}
        </div>
    )
}

export default AuthBar;