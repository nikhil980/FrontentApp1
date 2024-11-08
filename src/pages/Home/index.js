import { NavBar } from "../../component/NavBar";
import { Fragment, useReducer } from "react";
import { SideBar } from "../../sidebar";
import { NotesCard } from "../../component/NotesCard";
import { useNotes } from "../../context/notes-context";

export const Home=()=>
{ 
 const {title ,text,notes,archive,notesDispatch}=useNotes();
   const onTitleChange=(e)=>{
    notesDispatch({
       type:"TITLE",
       payload:e.target.value
    })
   }
   const onTextChange=(e)=>{
    notesDispatch({
       type:"TEXT",
       payload:e.target.value
    })
   }
 const onAddClick=()=>
 {
    notesDispatch({
        type:'ADD_NOTE',

    })
    notesDispatch({
        type:'CLEAR_INPUT',

    })
 }
 const pinnedNotes=notes?.length>0&&notes.filter(({isPinned})=>isPinned);
 const OtherNotes=notes?.length>0&&notes.filter(({isPinned})=>!isPinned);
 
 return (
        <Fragment>
            <NavBar/>
            <main class="flex gap-5">
                <SideBar/>
                <div className="">
                <div className=" w-[1300px]  size-24 text-2xl  text-center mt-5 text-zinc-950 font-bold tracking-wider">
                     NoteNest-HOME
                </div>
                    <div className="ml-[450px] mt-9 md-6 ">
                    <div className="flex flex-col justify-end w-[450px] border-red-400 relative self-center">
                        <input  value={title} onChange={ onTitleChange} className="border border-neutral-800 rounded-t-md focus:outline-none border-b-0 p-1" placeholder="Enter title"/>
                        <textarea  value={text} onChange={ onTextChange} className="h-[100px] border  border-neutral-800 rounded-b-md focus:outline-none border-b-1 p-1" placeholder="Enter text"/>
                        <button disabled={title.length===0&&text.length>0} onClick={onAddClick} className="w-7 h-7 absolute buttom-0 right-0 bg-indigo-800 text-slice-50 rounded-full" >
                        <span className="material-symbols-outlined "> add </span>
                        </button>
                        </div>
                    </div>
                 
                    <div className=" flex felx-col  item-left mt-14 ml-10  gap-5">
                    {
                         pinnedNotes?.length>0&&(
                          <div>
                          <h3>Pinned Notes</h3>
                            <div className="flex flex-wrap gap-6  ">
                             {
                                 pinnedNotes?.length>0&&pinnedNotes.map(({id,title,text,isPinned})=>(
                                   <NotesCard key={id} id={id} title={title} text={text} isPinned={isPinned} />
                                 ))
                             }
                         </div>
                         </div>  
                         )
                    }
                    <div  className=" flex felx-col  item-left mt-14 ml-10  gap-5">
                    <div >
                        {
                            pinnedNotes?.length>0&& <h3>Other Notes</h3>
                        }
                    <div className="flex flex-wrap gap-6  ">
                        {
                            OtherNotes?.length>0&&OtherNotes.map(({id,title,text,isPinned})=>(
                              <NotesCard key={id} id={id} title={title} text={text} isPinned={isPinned} />
                            ))
                        }
                    </div>
                    </div>
                    </div>
                    </div>
                </div>
            </main>
        </Fragment>
    )
}