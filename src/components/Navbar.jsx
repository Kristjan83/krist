import logo from '../assets/kplogo3.png'
import { FaLinkedin } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="mb-20 flex item-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
        <img className="mx-4 w-20" src={logo} alt="logo" />
    </div>
    <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <FaLinkedin onClick={() => window.open('https://www.linkedin.com/in/kristjan-prenga-59aa121a0/', '_blank')} />
        <FaInstagram onClick={() => window.open('https://www.instagram.com/cristiano.prenga/profilecard/?igsh=MTlqNnR3OHd1dW82ZQ==', '_blank')}/>
        
    </div>
    </nav>
  )
}

export default Navbar
