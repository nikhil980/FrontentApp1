import { Fragment } from "react"
import { SideBar } from "../../sidebar"
import { NotesCard } from "../../component/NotesCard"
import { useNotes } from "../../context/notes-context"
import { NavBar } from "../../component/NavBar"
export const Delete =()=>{
    const{deletes}=useNotes()
    return( <>
    <Fragment>
        <NavBar/>
        <main  class="flex gap-3">
        <SideBar/>
       
        <div>
        <div className=" w-[1300px]  size-24 text-2xl  text-center mt-5 text-zinc-950 font-bold tracking-wider">
        DELETED-NOTES
        </div>
        <div className="flex flex-wrap gap-4">
         
                        {
                            deletes?.length>0&&deletes.map(({id,title,text,isPinned})=>(
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