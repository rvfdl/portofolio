import About from './About'
import Project from './Project'
import Skill from './Skill'
import Footer from './Footer'
import Activity from './Activity'

const Content = () => {
  return (
    <div className='z-10 md:pt-20 mx-5'>
      <div>
        <About/>
        <Skill/>
        <Project />
        <Activity />
        <Footer/>
      </div>
    </div>
  )
}

export default Content
