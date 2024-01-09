import { createSlice } from "@reduxjs/toolkit";


const searchSlice = createSlice({
    name:"search",
    initialState:{

    },
    reducers:{
        memoizationText : (state,action) => {
            state = Object.assign(state,action.payload);
        },
    }
});

export const {memoizationText} = searchSlice.actions;

export default searchSlice.reducer;