import axios from "axios";


const API_BASE_URL = "https://localhost:7088";

class OrderApiService {
    static async placeOrder(order , creditcardNo) {
        debugger;
        try {
            const OrderDTO = {
                order: [order],
                creditCardNo : creditcardNo
            };
            const response = await axios.post(`${API_BASE_URL}/api/CallOrderService/CreateOrder`, OrderDTO);
            console.log(response.data);
            return response.data;
        }
        catch (error) {
            console.error(error);
            return null;
        }
    }
}


export default OrderApiService; 