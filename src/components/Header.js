
//import components
import Socials from './Socials';
import Logo from '../img/header/logo_Xuongfilm.svg';
import MobileNav from './MobileNav';
//import link
import { Link } from 'react-router-dom';  


const Header = () => {
  return (
      <header className='fixed w-full px-[30px] 
      lg:px-[100px] z-30 h-[100px] lg:h-[140px] flex items-center bg-white'>
          <div className='flex flex-col lg:flex-row
          lg:items-center w-full justify-between'> 
              {/* logo */}
              <Link to={'/'} className='max-w-[200px]'> 
                <img src={Logo} alt=''/> 
              </Link>
              {/*Nav - inittailly hidden - show on desktop mode*/}
              
              <nav className='hidden xl:flex gap-x-12
              font-semibold'>
                <Link to={'/'} className='text-[#696c6d]
                hover:text-primary'>
                  Trang chủ
                </Link>
                <Link to={'/about'} className='text-[#696c6d]
                hover:text-primary'>
                  Giới thiệu
                </Link>
                <Link to={'/portfolio'} className='text-[#696c6d]
                hover:text-primary'>
                  Portfolio
                </Link>
                <Link to={'/contact'} className='text-[#696c6d]
                hover:text-primary'>
                  Liên hệ
                </Link>
              </nav>                
            </div>
              {/** socials */}   
              <Socials/>
              {/**mobile nav */}
              <MobileNav/>  
      </header>
  )
};

export default Header;
