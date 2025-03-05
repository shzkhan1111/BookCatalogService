import React , {useState} from "react";
import { useDispatch } from "react-redux";
import { RegisterForm } from "../../models/registerDTO";
import { login, logout } from "../../store/authSlice";
import { setError } from "../../store/bookSlice";
import LoginService from "../../services/auth.service";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
 const dispatch = useDispatch();
 const navigate = useNavigate();
 const [registerForm, setRegisterForm] = useState<RegisterForm>({
    name : '',    
    email: '',
    password: '',
    userType: 'Student'
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try{
            const token = await LoginService.Register(registerForm);
            localStorage.setItem('token' , token)
            dispatch(login(token));
            navigate('/books')


        }
        catch(err){
            dispatch(setError(JSON.stringify(err)));
        }
    }


    return (
        <div>   
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type="text" value={registerForm.name} 
                    onChange={(e) => setRegisterForm({...registerForm, name: e.target.value})} />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" value={registerForm.email}
                    required
                    onChange={(e) => setRegisterForm({...registerForm, email: e.target.value})} />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" value={registerForm.password} 
                    required
                    onChange={(e) => setRegisterForm({...registerForm , password: e.target.value})} />
                </div>

                <div>
                    <label>User Type:</label>
                    <input type="radio" value="Student" checked={registerForm.userType === 'Student'}
                    onChange={(e) => setRegisterForm({...registerForm , userType: 'Student'})} />

                    <input type="radio" value="Librarian" checked={registerForm.userType === 'Librarian'}
                    onChange={(e) => setRegisterForm({...registerForm , userType: 'Librarian'})} />
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    )
 
 
}

export default RegisterForm;