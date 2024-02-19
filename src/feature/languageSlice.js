import { createSlice } from "@reduxjs/toolkit";

export const languageSlice = createSlice({
    name : "language",
    initialState : {
        defaultLanguage : "en",
        
     },
    reducers : {
        toogleLanguage : (state, action) => {
            state.defaultLanguage = action.payload;
            // state.openFormDialog = action.payload;
            // alert(`${action.payload}`);
        } ,
        
    }
})

export const {toogleLanguage  , toogleLanguageEnglish} = languageSlice.actions;

export default languageSlice.reducer;