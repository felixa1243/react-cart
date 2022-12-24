import {configureStore} from "@reduxjs/toolkit";
import {cartSlice} from '../feat/cart.slice'

export const store = configureStore({
    reducer: {
        products: cartSlice.reducer
    }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch