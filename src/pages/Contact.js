import React from 'react';
//import imgs
import ContactImg from '../img/contact/Contact.png'
//
//import motion
import {motion} from 'framer-motion';
//import transiton
import {transition1} from '../transitions';



const Contact = () => {
  return <motion.section  initial={{opacity: 0, y: ''}} 
                   animate={{opacity: 1, y: 0}} 
                   exit={{opacity: 0, y: ''}}
                  transition={transition1}  className='section bg-white overflow-auto'>
    <div className='container mx-auto h-full'>
      <div className='flex flex-col lg:flex-row h-full
      items-center justify-start pt-36 gap-x-8 text-center
      lg:text-left'>
        {/*gb */}
        <div className='hidden lg:flex bg-[#e2d7becb]
        absolute bottom-0 left-0 right-0 top-72 -z-10'>
        </div>
        {/*text and form*/}
        <div className='lg:flex-1 lg:pt-32 px-4'>
          <h1 className='h1 text-[#9e8565]'>Contact me</h1><br/><br/>
          <form className='flex flex-col gap-y-4'>
            <div className='flex gap-x-10'>
              <input className='outline-none border-b border-b-primary
              h-[60px] bg-transparent font-secondary w-full pl-3 
              placeholder:text-[#757879]' type='text' placeholder='Tên bạn là?'/>
              <input className='outline-none border-b border-b-primary
              h-[60px] bg-transparent font-secondary w-full pl-3 
              placeholder:text-[#757879]' type='text' placeholder='Email của bạn'/>
            </div>
            <input className='outline-none border-b border-b-primary
              h-[60px] bg-transparent font-secondary w-full pl-3 
              placeholder:text-[#757879]' type='text' placeholder='Bạn có gì muốn nhắn gửi?'/>
              <button className='btn mb-[30px] mx-auto lg:mx-0  bg-[#eed0a8] text-black font-medium rounded-2xl'>Gửi ngay</button>
          </form>
        </div>
        {/*imgs*/}
        <div className='lg:flex-1'>
          <img src={ContactImg} alt=''/>
        </div>
      </div>
    </div>
  </motion.section>;
};

export default Contact;
