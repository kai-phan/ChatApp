import React from 'react';
import "./Login.css";
import { Button } from '@material-ui/core';
import { auth, Provider } from './firebase';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';

const Login = () => {
    const [{}, dispatch] = useStateValue(); 
    const signIn = () => {
        auth.signInWithPopup(Provider).then(res => dispatch({
            type: actionTypes.SET_USER,
            user: res.user
        }))
    }
    return (
        <div className="login">
            <div className="login__container">
                <img src="https://png.pngtree.com/png-vector/20191003/ourmid/pngtree-user-login-or-authenticate-icon-on-gray-background-flat-icon-ve-png-image_1786166.jpg" alt="" />
            </div>
            {/* <div className="login__text">
                <h1>Sign in to whatsApp</h1>
            </div> */}
            <Button variant="contained" color="primary" onClick={signIn}>
                Sign in with Google
            </Button>
        </div>
    )
}

export default Login
