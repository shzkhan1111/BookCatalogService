import axios from "axios";
import { Book } from "../models/books";


const API_BASE_URL = "https://localhost:7088";

class BookApiService {
    static async getAllBooks() : Promise<Book[]> {
        try {
            const response = await axios.get(`${API_BASE_URL}/api/books`);
            console.log('Getting All Books');
            console.log(response.data);
            return response.data;
        }
        catch (error) {
            console.error('Error fetching books:', error);
            throw error;
        }
    }

    static async createBook(book : Book) : Promise<Book> {
        try {
            console.log("create book is called");
            console.log(book);
            const response = await axios.post(`${API_BASE_URL}/api/books`, book);
            console.log(response.data);
            return response.data;
        }
        catch (error) {
            console.error('Error fetching books:', error);
            throw error;
        }
    }

    static async updateBook(book : Book) : Promise<Book | null> {
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

    static async deleteBook(bookId : number) : Promise<Book | null> {
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