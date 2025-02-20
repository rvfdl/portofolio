import Content from './components/Content'
import Header from './components/Header'
import './index.css'

const App = () => {
  return (
    <div className="relative min-h-screen w-full bg-slate-950 text-slate-100">
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-6xl mx-auto'>
          <div className='col-span-1 md:col-span-1'>
            <Header />
          </div>
          <Content />
        </div>
    </div>
  )
}

export default App