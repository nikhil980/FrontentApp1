import { NavLink } from "react-router-dom"

export const SideBar=()=>{
    const getStyles =({isActive})=>{
        return isActive ?' text-slate-50 bg-indigo-800 flex align-center gap-1 px-2 py-1 rounded-br-full rounded-tr-full ':'hover:bg-indigo-800 hover:text-slate-50 flex align-center  rounded-tr-full  rounded-br-full gap-1 px-2 py-1'
    }
    return(
        <aside className="flex flex-col gap-3 border-r-2 border-neutral-400 w-[150px] h-screen p-3">
        <NavLink className ={getStyles} to='/'><span className="material-symbols-outlined"> home </span><span> Home</span></NavLink>
        <NavLink className ={getStyles} to='/archive'><span className="material-symbols-outlined">archive</span><span>Archive</span> </NavLink>
        <NavLink className ={getStyles} to='/important'><span className="material-symbols-outlined">bookmark</span><span>Important </span></NavLink>
        <NavLink className ={getStyles} to='/delete'><span className="material-symbols-outlined">delete</span><span>Bin</span></NavLink>
        </aside>
    )
}