import { createSlice } from "@reduxjs/toolkit";

export const commentSlice = createSlice({
    name : "comment",
    initialState : {
        isComment : false
     },
    reducers : {
       

        tooggleIsComment : (state , action) =>{
            state.isComment = action.payload;
        }
      
    }
})

export const {tooggleIsComment   } = commentSlice.actions;

export default commentSlice.reducer;