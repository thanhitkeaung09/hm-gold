import { createSlice } from "@reduxjs/toolkit";

export const tokenSlice = createSlice({
    name : "token",
    initialState : {
        value : localStorage.getItem("real-estate-encrypted-key"),
     },
    reducers : {
      
      
    }
})

// export const {  } = tokenSlice.actions;

export default tokenSlice.reducer;