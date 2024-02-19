import { createSlice } from "@reduxjs/toolkit";

export const reviewSlice = createSlice({
    name : "review",
    initialState : {
        openFormDialog : false,
        isReview : false
     },
    reducers : {
        toogleFormDialog : (state, action) => {
            state.openFormDialog = action.payload;
            // alert(`${action.payload}`);
        } ,

        tooggleIsReview : (state , action) =>{
            state.isReview = action.payload;
        }
      
    }
})

export const {toogleFormDialog , tooggleIsReview  } = reviewSlice.actions;

export default reviewSlice.reducer;