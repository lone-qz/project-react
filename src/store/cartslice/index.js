import { createSlice } from "@reduxjs/toolkit"

let CartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: [],
    },
    reducers: {
        addToCart(state, action) {
            // state.cart.push(action.payload)
            return state
        },
        
    }
})

export const { addToCart } = CartSlice.actions
export default CartSlice.reducer
