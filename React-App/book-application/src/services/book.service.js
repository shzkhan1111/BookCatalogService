import axios from "axios";

const API_BASE_URL = "https://localhost:7088";

class BookApiService {
    static async getAllBooks() {
        try {
            const response = await axios.get(`${API_BASE_URL}/api/books`);
            debugger;
            console.log(response.data);
            return response.data;
        }
        catch (error) {
            console.error(error);
        }
       

    }
}

export default BookApiService;