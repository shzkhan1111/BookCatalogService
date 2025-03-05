import axios from "axios";
import { userLoginDTO } from "../models/userLoginDTO";
import { RegisterForm } from "../models/registerDTO";

const API_BASE_URL = "https://localhost:7076";

class LoginService{
    static async login(credentials: userLoginDTO): Promise<string> {
        try{
            
            const response = await axios.post(`${API_BASE_URL}/api/Auth/login` , credentials
                ,
                {
                    headers:{
                        'Content-Type': 'application/json'
                    }
                }
            )
            
            console.log(response.data);
            return response.data;
        }
        catch(error){
            console.log(error)
            throw error
        }
    } 
    static async Register(formData: RegisterForm): Promise<string> {
        try{
            const response = await axios.post(`${API_BASE_URL}/api/Auth/register` , formData
                ,
                {
                    headers:{
                        'Content-Type': 'application/json'
                    }
                }
            )
            
            console.log(response.data);
            return response.data;
        }
        catch(error){
            console.log(error)
            throw error
        }
    }
}

export default LoginService;