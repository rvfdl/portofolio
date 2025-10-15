import profil from "../assets/profilgw2.jpg"

const About = () => {
  return (
    <div className='nunito-sans font-semibold pb-20'>
      <div className='pb-15 flex justify-start'>
        <img src={profil} alt="Profile" className='rounded-full ml-0 w-48 h-48 md:w-48 md:h-48 lg:w-64 lg:h-64 object-cover mx-auto grayscale-25 border-2 border-slate-100'/>
      </div>
      <div id='about' className=''>
        <h2 className='nunito-sans font-bold uppercase tracking-widest pb-5 text-slate-100'>About Me</h2>
      </div>
      <p className='nunito-sans font-medium text-slate-300'>Currently attending SMK Negeri 2 Yogyakarta as a 13th grade student majoring in Network Information Systems and Applications (SIJA), which focuses on building, managing, and securing computer networks, as well as developing software applications. Mastering tools in Figma for web design and Adobe Illustrator tools for making posters and designing logos, as well as frontend technologies such as HTML, CSS, React and Tailwind CSS to create responsive websites.</p>
    </div>
  )
}

export default About
