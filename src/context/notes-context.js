import {  createContext,useContext,useReducer } from "react";
import { notesReducers } from "../reducers/notesReducers"; 

const NotesContext=createContext();

const NotesProvider =({children})=>{
     
    const initialstate=
    {
        title:"",
        text:"",
        notes:[],
        archive:[],
        deletes:[],
        important:[]
    }
    const [{title,text,notes,archive,deletes,important},notesDispatch]=useReducer(notesReducers,initialstate);

    return(
        <NotesContext.Provider value={{title,text,notes,archive,important,deletes,notesDispatch}}>
            {children}
        </NotesContext.Provider>
    )
}
const  useNotes=()=>useContext(NotesContext);
export {NotesProvider,useNotes}