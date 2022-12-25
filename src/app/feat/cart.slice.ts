import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {productlist} from "../../data/productlist";
import {RootState} from "../store/store";
import {Cart} from "../../types/cart";

const initialProducts: Cart[] = productlist;

export const cartSlice = createSlice({
    name: 'products',
    initialState: initialProducts,
    reducers: {
        addProduct: (state, action: PayloadAction<Cart>) => {
            return [action.payload, ...state]
        },
        addQty: (state, action) => {
            state.flat().forEach(item => {
                if (item.productName === action.payload.productName) {
                    item.qty += 1
                }
            })
        },
        decQty: (state, action) => {
            state.flat().forEach(item => {
                if (item.productName === action.payload.productName) {
                    if (item.qty <= 0) {
                        item.qty = 0
                    } else {
                        item.qty -= 1
                    }
                }
            })
        },
        removeItem: (state, action) => {
            const product = state.flat().find(item => item.productName === action.payload.productName)
            if (product) {
                const index = state.indexOf(product)
                return [...state.slice(0, index), ...state.slice(index + 1)]
            }
        }
    }
})
export const {addProduct, addQty, decQty,removeItem} = cartSlice.actions
export const getProducts = (state: RootState) => state.products