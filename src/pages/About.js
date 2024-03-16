import React from 'react'; 
// import images
import AboutImg from '../img/about/about_fix.png'
//import link
import {Link} from 'react-router-dom'
import Logo from '../img/header/logo_Xuongfilm.svg';
//
//import motion
import {motion} from 'framer-motion';
//import transiton
import {transition1} from '../transitions';

const About = () => {
  return <motion.section initial={{opacity: 0, y: ''}} 
                  animate={{opacity: 1, y: 0}} 
                  exit={{opacity: 0, y: ''}}
                  transition={transition1}  className='section'>
    <div className='container mx-auto h-full relative'>
      {/**text and imgwrapper */}
      <div className=' flex flex-col lg:flex-row
      h-full items-center justify-center gap-x-24 text-center
      lg:text-left lg:pt-16'>
        {/**img */}
        <div className='flex-1 max-h-96 lg:max-h-max
        order-2 lg:order-none overflow-hidden'>
          <img src={AboutImg} alt=''/>
        </div>
        {/*text */}
        <div className='flex-1 pt-36 pb-14 lg:pt-0 
        lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start'>
          {/* logo */}
          <Link to={'/'} className='max-w-[400px] pb-10 pl-11'> 
            <img src={Logo} alt='' className=''/> 
          </Link>
          <p className='mb-12 max-w-sm'>
              "Xưởng-Film" được thành lập từ năm 2015, là một công ty đa ngành trong lĩnh vực sản xuất hình ảnh, quảng cáo
          </p>
          <Link to={'/portfolio'} className='btn bg-[#eed0a8] text-black font-medium rounded-2xl'>Portfolio</Link>
        </div>
      </div>

    </div>
  </motion.section>;
};

export default About;
