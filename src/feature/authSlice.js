import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name : "auth",
    initialState : {
        value : JSON.parse(localStorage.getItem("real-estate-auth-info")),
     },
    reducers : {
      
      
    }
})

// export const {  } = tokenSlice.actions;

export default authSlice.reducer;