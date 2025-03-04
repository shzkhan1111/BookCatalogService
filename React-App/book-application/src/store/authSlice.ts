import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import AuthState  from "../models/authstate";

const initialState : AuthState = {
    isAuthenticated : !!localStorage.getItem('token'),
    token: localStorage.getItem('token')
}

const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers: {
        login(state , action : PayloadAction<string>){
            state.isAuthenticated = true;
            state.token = action.payload
            localStorage.setItem('token' , action.payload)
        },
        logout(state)
        {
            state.isAuthenticated = false;
            state.token = null;
            localStorage.removeItem('token')
        }
    }
});


export const {login, logout} = authSlice.actions;
export default authSlice.reducer; 