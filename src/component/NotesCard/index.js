import { useNotes } from "../../context/notes-context"
import { findNotesInArchive } from "../../Utils/findNotesInArchive";
import { findNotesInDelete} from "../../Utils/findNotesInDelete";
import { findNotesInImportant} from "../../Utils/findNotesInImportant";
export const NotesCard=({id,title,text,isPinned})=>{
    const {notesDispatch,archive,deletes,important}=useNotes();
    const onPinCLick=(id)=>
    {
        !isPinned?
      notesDispatch({
        type:'PIN',
        payload:{id}

      }):notesDispatch({
        type:'UNPIN',
        payload:{id}

      })
    }
    const onArchiveClick=(id)=>{
     ! isNotesInArchive?
   notesDispatch({
    type:'ADD_TO_ARCHIVE',
    payload:{id}
   }):notesDispatch({
    type:'REMOVE_ARCHIVE',
    payload:{id}
   })
    }
    const onDeleteClick=(id)=>{
      ! isNotesInDelete?
    notesDispatch({
     type:'ADD_TO_DELETE',
     payload:{id}
    }):notesDispatch({
     type:'REMOVE_DELETE',
     payload:{id}
    })
     }
     const onImportantClick=(id)=>{
      ! isNotesInImportant?
    notesDispatch({
     type:'ADD_TO_IMPORTANT',
     payload:{id}
    }):notesDispatch({
     type:'REMOVE_IMPORTANT',
     payload:{id}
    })
     }
   
const isNotesInArchive=findNotesInArchive(archive,id)
const isNotesInDelete=findNotesInDelete(deletes,id)
const isNotesInImportant=findNotesInImportant(important,id)
    return (
        <div className="border border-neutral-800 rounded-md p-3 w-[250px]  hover:shadow-xl  " key={id}>
        <div className="flex justify-between  font-bold  border-b-2  ">
          <p>{title}</p>
          {
               
            (isNotesInArchive===true||isNotesInDelete===true||isNotesInImportant===true) ?<></>:<button onClick={()=>onPinCLick(id)}><span className='material-symbols-outlined'> {isPinned?"keep_off":"keep"} </span></button>
         
          }
            </div>
         <div className="flex p-4 flex-col">
          <p>{text}</p>
          </div>
          <div className="ml-auto">
        { 
         (isNotesInDelete===true||isNotesInImportant===true)?<></>:<button onClick={()=>onArchiveClick(id)}><span className="material-symbols-outlined"> { isNotesInArchive?"unarchive":"archive"} </span></button>
         }      
          {
               (isNotesInArchive===true ||isNotesInImportant===true)?<></>:<button onClick={()=>onDeleteClick(id)}><span className="material-symbols-outlined">{ isNotesInDelete?"restore_from_trash":"delete"}  </span></button>
          }
           {
             (isNotesInDelete===true||isNotesInArchive===true )?<></>:<button onClick={()=>onImportantClick(id)}><span class="material-symbols-outlined">{ isNotesInImportant?"bookmark_star":"bookmark"}</span></button>
           }
 </div>
      </div>
    )
}