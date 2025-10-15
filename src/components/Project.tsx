import lookraflogo from '../assets/lookraf.jpg'
import webku from '../assets/webku.jpg'
import paviliun from '../assets/OGpaviliun.jpg'

const Project = () => {
  return (
    <div className='nunito-sans font-semibold pb-30'>
      <div id='project' className=''>
        <h2 className='nunito-sans font-bold uppercase tracking-widest pb-10'>Web Project</h2>
      </div>
      <div className='flex flex-col items-center justify-start'>
        <ul className='space-y-12 w-full group'>
          <li className='flex flex-row items-center space-x-8 group-hover:opacity-50 hover:opacity-100 transition-opacity duration-300'>
            <div className='w-1/3 relative rounded-2xl overflow-hidden border-1'>
              <div className='absolute inset-0 bg-gray-700 rounded-2xl blur-lg'></div>
              <img
                src={lookraflogo}
                alt='Project Cover'
                className='relative w-full h-auto aspect-video object-cover rounded-lg transition-transform duration-300 hover:scale-105'
              />
            </div>
            <div className='w-2/3 text-slate-100'>
              <h3 className='text-md nunito-sans font-bold'>Website LooKraf</h3>
              <p className='text-gray-400 mt-2 max-w-lg text-sm nunito-sans font-medium'>
              Logo Design service website that I manage myself. 
              </p>
              <a 
                href='https://lookraf.vercel.app/' target='_blank'
                className='mt-4 inline-flex items-center text-gray-200 hover:text-gray-500 text-sm transition nunito-sans font-medium'
              >
                Visit Website
                <span className='ml-2 text-xl'>→</span>
              </a>
            </div>
          </li>

          <li className='flex flex-row items-center space-x-8 group-hover:opacity-50 hover:opacity-100 transition-opacity duration-300'>
            <div className='w-1/3 relative rounded-2xl overflow-hidden border-1'>
              <div className='absolute inset-0 bg-gray-700 rounded-2xl blur-lg'></div>
              <img src={webku} alt="" className='relative w-full h-auto aspect-video object-cover rounded-lg transition-transform duration-300 hover:scale-105'/>
            </div>
            <div className='w-2/3 text-slate-100'>
              <h3 className='text-md nunito-sans font-bold'>My Portofolio</h3>
              <p className='text-gray-400 mt-2 max-w-lg text-sm nunito-sans font-medium'>
                This is a personal portfolio website that contains skills and projects that have been done.
              </p>
              <a 
                href='https://danipratama.my.id/' target='_blank' 
                className='mt-4 inline-flex items-center text-gray-200 hover:text-gray-500 text-sm transition nunito-sans font-medium'
              >
                Visit Website
                <span className='ml-2 text-xl'>→</span>
              </a>
            </div>
          </li>

          <li className='flex flex-row items-center space-x-8 group-hover:opacity-50 hover:opacity-100 transition-opacity duration-300'>
            <div className='w-1/3 relative rounded-2xl overflow-hidden border-1'>
              <div className='absolute inset-0 bg-gray-700 rounded-2xl blur-lg'></div>
              <img src={paviliun} alt="" className='relative w-full h-auto aspect-video object-cover rounded-lg transition-transform duration-300 hover:scale-105'/>
            </div>
            <div className='w-2/3 text-slate-100'>
              <h3 className='text-md nunito-sans font-bold'>Aditya Paviliun</h3>
              <p className='text-gray-400 mt-2 max-w-lg text-sm nunito-sans font-medium'>
                Cooperation project to create a simple Boarding House Website landingpage.
              </p>
              <a 
                href='https://aditya-paviliun.vercel.app/' target='_blank'
                className='mt-4 inline-flex items-center text-gray-200 hover:text-gray-500 text-sm transition nunito-sans font-medium'
              >
                Visit Website
                <span className='ml-2 text-xl'>→</span>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Project
