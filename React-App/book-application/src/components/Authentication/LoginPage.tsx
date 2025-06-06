import React, { useState } from 'react';
import { useSelector ,useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import LoginService from '../../services/auth.service';
import { userLoginDTO } from '../../models/userLoginDTO';
import { login } from '../../store/authSlice';
import { RootState } from '../../store/store';



import {setError} from "../../store/bookSlice.js";

const LoginPage = () => {

    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

    const handleLogin = async () => {
        //call login api and get token 
        try{
            const credentials: userLoginDTO = { email, password };
            const token = await LoginService.login(credentials)
            localStorage.setItem('token' , token)
            dispatch(login(token));
            navigate('/books')
        }
        catch (err){
            dispatch(setError('failed to Authenticate'));
        }
        
    }
    const navigateToRegister = () => {
        navigate('/register');
    }
    return (
        <>
        {isAuthenticated ? (<p>You are loggedin</p>)
     : (
        <div>
            <input type="text" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleLogin}>Login</button>
            <button onClick={navigateToRegister}>Register</button>

        </div>
     )   
    }
        </>
    );
};

export default LoginPage;