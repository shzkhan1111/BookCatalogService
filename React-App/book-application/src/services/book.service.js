import axios from "axios";
import book from "../models/books.js";

const API_BASE_URL = "https://localhost:7088";

class BookApiService {
    static async getAllBooks() {
        try {
            const response = await axios.get(`${API_BASE_URL}/api/books`);
            console.log(response.data);
            return response.data;
        }
        catch (error) {
            console.error(error);
            return [];
        }
    }

    static async createBook(book) {
        try {
            const response = await axios.post(`${API_BASE_URL}/api/books`, book);
            console.log(response.data);
            return response.data;
        }
        catch (error) {
            console.error(error);
            return null;
        }
    }

    static async updateBook(book) {
        try {
             
            const response = await axios.put(`${API_BASE_URL}/api/books/${book.id}`, book);
            console.log(response.data);
            return response.data;
        }
        catch (error) {
            console.error(error);
            return null;
        }
    }

    static async deleteBook(bookId) {
        try {
            const response = await axios.delete(`${API_BASE_URL}/api/books/${bookId}`);
            console.log(response.data);
            return response.data;
        }
        catch (error) {
            console.error(error);
            return null;
        }
    }
}

export default BookApiService;