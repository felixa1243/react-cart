import blueshirt from '../assets/images/blueshirt.webp'
import redjersey from '../assets/images/redjersey.webp'
import {Cart} from "../types/cart";

export const productlist: Array<Cart> = [
    {
        price: 4.5,
        productColor: "Blue",
        productName: "Blue jersey",
        productType: "Jersey",
        size: "M",
        imagePath: blueshirt,
        qty: 0
    }, {
        price: 10.5,
        productColor: "Red",
        productName: "Red jersey",
        productType: "Jersey",
        size: "M",
        imagePath: redjersey,
        qty: 0
    }
]