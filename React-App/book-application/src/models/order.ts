import { Book } from "./books";

export interface orderItem {
    items : Book[]
}

export interface orderPlaced{
    id: number;
    bookId : number;
    quantity : number;
    totalPrice : number;
}