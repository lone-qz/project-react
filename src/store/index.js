import { configureStore } from "@reduxjs/toolkit";
import cartslice from "./cartslice";
let store=configureStore({
    reducer:{
        cart:cartslice
    }
})
export default store;//store.js