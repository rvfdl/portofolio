import { Button } from './ui/neon-button'

const Footer = () => {
  return (
    <div>
      <div className='pb-10'>
        <h2 className='nunito-sans font-extrabold text-2xl text-slate-100'>Let's Make Something Project Together</h2>
        <div className='pt-5'>
          <Button className='text-slate-100 nunito-sans font-medium' onClick={() => window.open('https://wa.me/6285747485067', '_blank')}>Lets's Go</Button>
        </div>
        <div className='pt-5'>
          <Button className='text-slate-100 nunito-sans font-medium' onClick={() => window.open('#', '_blank')}>Event Daget</Button>
        </div>
      </div>
      <div>
        <p className='nunito-sans font-light py-5'>© 2025 Dani Pratama. All rights reversed.</p>
      </div>
    </div>
  )
}

export default Footer
