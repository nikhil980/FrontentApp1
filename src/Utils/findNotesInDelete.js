export const findNotesInDelete=(deletes,id)=>{
    return deletes.some(note=>note.id===id);
  }