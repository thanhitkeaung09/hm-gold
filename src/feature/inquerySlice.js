import { createSlice } from "@reduxjs/toolkit";

export const inquerySlice = createSlice({
    name : "booking",
    initialState : {
        openInqueryFormDialog : false,
     },
    reducers : {
        toogleInqueryFormDialog : (state, action) => {
            state.openInqueryFormDialog = action.payload;
        } ,
      
    }
})

export const {toogleInqueryFormDialog  } = inquerySlice.actions;

export default inquerySlice.reducer;