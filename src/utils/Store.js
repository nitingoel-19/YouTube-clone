import { configureStore } from "@reduxjs/toolkit";
import storeSlice from "./storeSlice";
import searchSlice from "./searchSlice";

const Store = configureStore({
    reducer:{
        sidebar : storeSlice,
        search : searchSlice,
    }
});

export default Store;