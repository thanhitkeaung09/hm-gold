import { createSlice } from "@reduxjs/toolkit";

export const askSlice = createSlice({
    name : "ask",
    initialState : {
        openFormDialog : false,
     },
    reducers : {
        toogleFormDialog : (state, action) => {
            state.openFormDialog = action.payload;
            // alert(`${action.payload}`);
        } ,
      
    }
})

export const {toogleFormDialog  } = askSlice.actions;

export default askSlice.reducer;