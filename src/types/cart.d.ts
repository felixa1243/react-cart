import {Product} from "./product";

export type Cart = Product & {
    qty: number
}