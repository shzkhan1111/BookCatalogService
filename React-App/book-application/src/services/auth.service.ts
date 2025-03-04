import axios from "axios";
import { userLoginDTO } from "../models/userLoginDTO";

const API_BASE_URL = "https://localhost:7076";

class LoginService{
    static async login(credentials: userLoginDTO): Promise<string> {
        try{
            debugger;
            const response = await axios.post(`${API_BASE_URL}/api/Auth/login`)
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