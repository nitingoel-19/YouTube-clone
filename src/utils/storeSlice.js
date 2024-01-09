import { createSlice } from "@reduxjs/toolkit";

const storeSlice = createSlice({
    name: "sidebar",
    initialState:{
        isOpenSideBar : true,
    },
    reducers: {
        toggleMenu : (state) => {
            state.isOpenSideBar = !state.isOpenSideBar;
        },
        closeMenu : (state) => {
            state.isOpenSideBar = false;
        }
    },
});

export const {toggleMenu,closeMenu} = storeSlice.actions;
export default storeSlice.reducer;