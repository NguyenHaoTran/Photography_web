import React from 'react';
//import images
import HomeImg from '../img/home/Home_final.png';
//import link
import { Link } from 'react-router-dom';
//import motion
import {motion} from 'framer-motion';
//import transiton
import {transition1} from '../transitions';




const Home = () => {
  return (
  <motion.section initial={{opacity: 0, y: ''}} 
           animate={{opacity: 1, y: 0}} 
           exit={{opacity: 0, y: ''}}
           transition={transition1} className='section'>
    <div className='container mx-auto h-full relative'> 
      {/**text and img wrapper */}
      <div className='flex flex-col justify-center'>
      {/**text */}
          <div initial={{opacity: 0, y: '-50%'}} 
               animate={{opacity: 1, y: 0}} 
               exit={{opacity: 0, y: '-50%'}}
               transition={transition1} 
          className='w-full pt-36 pb-14 lg:pt-0 lg:pb-0
          lg:w-auto z-10 lg:absolute flex flex-col
          justify-center items-center lg:items-start'>
            <h1 className='h1 text-[#9e8565]'>
              Hello <br/>
              & Welcome
            </h1>
            <p className='text-[22px] lg:text-[36]
            font-medium mb-4 lg:mb-12 pl-1'>
              Liên hệ với chúng mình nào!
            </p>
            <Link to={'/contact'} className='btn mb-[30] bg-[#eed0a8] text-black font-medium rounded-2xl'>Cốc cốc!</Link>

          </div>
          <div className='flex justify-end max-h-96
            lg:max-h-max'>
            <div className='relative lg:-right-40 
            overflow-hidden'> 
              <img src={HomeImg} alt=''/>
            </div>
          </div>
      </div>  
    </div>    
  </motion.section>
  )
};

export default Home;
