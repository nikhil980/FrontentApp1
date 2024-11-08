import logo from '../assest/notes.jpg'

export const NavBar=()=>{
    return (
        <header className="flex p-3 gap-3 border-b-2 border-neutral-400 ">
            <div className='w-12 h-12'>
                <img src={logo}/>
            </div>
            <h1 className="text-emerald-600 font-bold text-4xl"> NoteNest</h1>
        </header>
    )
}