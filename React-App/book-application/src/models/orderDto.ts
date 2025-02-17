import { orderItem } from "./order";

export interface OrderDTO {
    order: orderItem[];
    creditCardNo: string;
}