import { Fragment } from "react"
import { NavBar } from "../../../component/NavBar"
import { SideBar } from "../../../sidebar"
import { NotesCard } from "../../../component/NotesCard"
import { useNotes } from "../../../context/notes-context"
export const Archive =()=>{
    const{archive}=useNotes()
    return( <>
    <Fragment>
        <NavBar/>
        <main  class="flex gap-3">
        <SideBar/>
        <div>
        <div className=" w-[1300px]  size-24 text-2xl  text-center mt-5 text-zinc-950 font-bold tracking-wider">
        NoteNest-ARCHIVE
        </div>
        <div className="flex flex-wrap gap-4  ">
                        {
                            archive?.length>0&&archive.map(({id,title,text,isPinned})=>(
                              <NotesCard key={id} id={id} title={title} text={text} isPinned={isPinned} />
                            ))
                        }
                    </div>
        </div>
        
       
       
    
        </main>
    </Fragment>
    </>
    )
}