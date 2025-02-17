import axios from "axios";
import { Book } from "../models/books";
import { orderPlaced } from "../models/order";


const API_BASE_URL = "https://localhost:7088";

class OrderApiService  {
    static async placeOrder(order : Book , creditcardNo : string) : Promise<orderPlaced[] | null>{
        debugger;
        try {
            debugger;
            const OrderDTO = {
                order: [order],
                creditCardNo : creditcardNo
            };
            console.log("Order DTO is : called");
            console.log(OrderDTO)
            const response = await axios.post(`${API_BASE_URL}/api/CallOrderService/CreateOrder`, OrderDTO);
            console.log(response.data);
            debugger;
            return response.data;
        }
        catch (error) {
            console.error(error);
            throw error;
            
        }
    }
}


export default OrderApiService; 