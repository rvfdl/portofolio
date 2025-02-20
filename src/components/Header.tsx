import React from 'react'
import Navbar from './Navbar'
import { InteractiveHoverButton } from './ui/interactive-hover-button'

const Header = () => {
  return (
    <div className='z-50 px-4 md:px-6 w-full sticky top-0 py-20 md:min-h-screen flex flex-col justify-between'>
        <div>
            <h1 className="nunito-sans font-extrabold text-5xl">
                <a href="">Dani Pratama</a>
            </h1>
            <h2 className='nunito-sans font-bold text-xl py-2 text-slate-100'>UI/UX Designer | Front End Engineer</h2>
            <p className='nunito-sans font-semibold text-sm mr-30 text-slate-300'>Student want to be UI/UX Designer. Currently i am learning about UX Writing and Resposive Design.</p>
            <div className='py-4'>
                <InteractiveHoverButton/>
            </div>
            <Navbar/>
        </div>
        <ul className='ml-1 mt-6 flex items-center'>
                <li className='mr-5 shrink-0'>
                    <a className='block hover:text-slate-400 transition duration-300' href="https://github.com/rvfdl" target='_blank'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"/></svg>
                    </a>
                </li>
                <li className='mr-5 shrink-0'>
                    <a className='block hover:text-slate-400 transition duration-300' href="https://www.linkedin.com/in/dani-pratama-ui/" target='_blank'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"/></svg>
                    </a>
                </li>
                <li className='mr-5 shrink-0'>
                    <a className='block hover:text-slate-400 transition duration-300' href="https://dribbble.com/dannprtma" target='_blank'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2m6.605 4.61a8.5 8.5 0 0 1 1.93 5.314c-.281-.054-3.101-.629-5.943-.271c-.065-.141-.12-.293-.184-.445a25 25 0 0 0-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362M12 3.475c2.17 0 4.154.814 5.662 2.148c-.152.216-1.443 1.941-4.48 3.08c-1.399-2.57-2.95-4.675-3.189-5A8.7 8.7 0 0 1 12 3.475m-3.633.803a54 54 0 0 1 3.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.58 8.58 0 0 1 4.729-5.975M3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215c.25.477.477.965.694 1.453c-.109.033-.228.065-.336.098c-4.404 1.42-6.747 5.303-6.942 5.629a8.52 8.52 0 0 1-2.19-5.705M12 20.547a8.48 8.48 0 0 1-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337c.022-.01.033-.01.054-.022a35.3 35.3 0 0 1 1.823 6.475a8.4 8.4 0 0 1-3.341.684m4.761-1.465c-.086-.52-.542-3.015-1.66-6.084c2.68-.423 5.023.271 5.315.369a8.47 8.47 0 0 1-3.655 5.715"/></svg>
                    </a>
                </li>
                <li className='mr-5 shrink-0'>
                    <a className='block hover:text-slate-400 transition duration-300' href="https://www.instagram.com/dannprtma_/" target='_blank'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"/></svg>
                    </a>
                </li>
                <li className='mr-5 shrink-0'>
                    <a className='block hover:text-slate-400 transition duration-300' href="https://wa.me/6285747485067" target='_blank'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.23 8.23 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23c-1.48 0-2.93-.39-4.19-1.15l-.3-.17l-3.12.82l.83-3.04l-.2-.32a8.2 8.2 0 0 1-1.26-4.38c.01-4.54 3.7-8.24 8.25-8.24M8.53 7.33c-.16 0-.43.06-.66.31c-.22.25-.87.86-.87 2.07c0 1.22.89 2.39 1 2.56c.14.17 1.76 2.67 4.25 3.73c.59.27 1.05.42 1.41.53c.59.19 1.13.16 1.56.1c.48-.07 1.46-.6 1.67-1.18s.21-1.07.15-1.18c-.07-.1-.23-.16-.48-.27c-.25-.14-1.47-.74-1.69-.82c-.23-.08-.37-.12-.56.12c-.16.25-.64.81-.78.97c-.15.17-.29.19-.53.07c-.26-.13-1.06-.39-2-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.12-.24-.01-.39.11-.5c.11-.11.27-.29.37-.44c.13-.14.17-.25.25-.41c.08-.17.04-.31-.02-.43c-.06-.11-.56-1.35-.77-1.84c-.2-.48-.4-.42-.56-.43c-.14 0-.3-.01-.47-.01"/></svg>
                    </a>
                </li>
                <li className='mr-5 shrink-0'>
                    <a className='block hover:text-slate-400 transition duration-300' href="mailto:pratamadani563@gmail.com" target='_blank'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m20 8l-8 5l-8-5V6l8 5l8-5m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2"/></svg>
                    </a>
                </li>
        </ul>
    </div>
  )
}

export default Header