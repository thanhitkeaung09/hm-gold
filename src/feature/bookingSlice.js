import { createSlice } from "@reduxjs/toolkit";

export const bookingSlice = createSlice({
    name : "booking",
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

export const {toogleFormDialog  } = bookingSlice.actions;

export default bookingSlice.reducer;