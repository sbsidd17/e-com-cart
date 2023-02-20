import { createSlice } from "@reduxjs/toolkit";


const noteSlice = createSlice({
    name : 'noteSlice',
    initialState : {
        notes : []
    },
    reducers : {
        createNote : (state, action)=>{
            state.notes.push(action.payload)
        }, 
        deleteNote : (state, action)=>{
            state.notes = state.notes.filter((note)=>{return note.id !== action.payload})
        }
    }
})


export default noteSlice.reducer;
export const { createNote, deleteNote } = noteSlice.actions