const Navbar = () => {
  return (
    <div className='pt-10 w-max hidden md:block'>
        <ul>
            <li>
                <a className='group flex items-center py-3 active' href="#about">
                    <span className='nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-salte-200 group-focus-visible:w-16 group-focus-visible-bg-slate-200 motion-reduce:transition-none'></span>
                    <span className='nav-text text-xs nunito-sans font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200'>About</span>
                </a>
            </li>
            <li>
                <a className='group flex items-center py-3 active' href="#skill">
                    <span className='nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-salte-200 group-focus-visible:w-16 group-focus-visible-bg-slate-200 motion-reduce:transition-none'></span>
                    <span className='nav-text text-xs nunito-sans font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200'>Skill</span>
                </a>
            </li>
            <li>
                <a className='group flex items-center py-3 active' href="#project">
                    <span className='nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-salte-200 group-focus-visible:w-16 group-focus-visible-bg-slate-200 motion-reduce:transition-none'></span>
                    <span className='nav-text text-xs nunito-sans font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200'>Project</span>
                </a>
            </li>
        </ul>
    </div>
  )
}

export default Navbar
