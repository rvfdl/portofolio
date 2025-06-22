import About from './About'
import Project from './Project'
import Logo from './Project-Logo'
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
        <Logo />
        <Activity />
        <Footer/>
      </div>
    </div>
  )
}

export default Content
