import React from 'react';
//import imgs
import Image1 from '../img/portfolio/1.jpg'
import Image2 from '../img/portfolio/2.jpg'
import Image3 from '../img/portfolio/3.jpg'
import Image4 from '../img/portfolio/4.jpg'
//import link
import { Link } from 'react-router-dom'
//import imgs gallery
import ImgGallery1 from '../img/portfolio/port1.jpg'
import ImgGallery2 from '../img/portfolio/port2.jpg'
import ImgGallery3 from '../img/portfolio/port3.jpg'
import ImgGallery4 from '../img/portfolio/port4.jpg'
import ImgGallery5 from '../img/portfolio/port5.jpg'
import ImgGallery6 from '../img/portfolio/port6.jpg'
import ImgGallery7 from '../img/portfolio/port7.jpg'
import ImgGallery8 from '../img/portfolio/port8.jpg'
import ImgGallery9 from '../img/portfolio/port9.jpg'
import ImgGallery10 from '../img/portfolio/port10.jpg'
//import motion
import {motion} from 'framer-motion';
//import transiton
import {transition1} from '../transitions';

const Portfolio = () => {
  return (
    <motion.section initial={{opacity: 0, y: ''}} 
             animate={{opacity: 1, y: 0}} 
             exit={{opacity: 0, y: ''}}
             transition={transition1} className=' section snap-y h-screen w-sreen overflow-auto'>
        <div className='snap-start h-screen w-screen 
        container mx-auto realtive'>
        <div className='flex flex-col lg:flex-row h-full
        items-center justify-start gap-x-24 text-center
        lg:text-left pt-24 lg:pt-36 pb-8 '>
          {/*text */}
            <div className='flex flex-col lg:items-start'>
                <h1 className='h1 text-[#9e8565]'>
                Portfolio
                </h1>
                <p className='mb-12 max-w-sm'>
                Nghệ thuật là một loạt những hoạt động khác nhau, mang tính đặc biệt của 
                con người và những sản phẩm do những hoạt động đó tạo ra.
                </p>
                <br/>
                <br/>
                <Link to={'/contact'} className='btn mb-[30px] mx-auto lg:mx-0  bg-[#eed0a8] text-black font-medium rounded-2xl'>
                Liên hệ
                </Link>
            </div>
            {/*imgs grid*/}
            <div className='grid grid-cols-2 lg:gap-2'>
                {/*imgs */}
                <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px]
                 overflow-hidden '>
                <img className='object-cover h-full lg:h[220px] hover:scale-110 transition-all
                duration-500' src={Image1} alt=''/>
                </div>
                <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px]
                 overflow-hidden '>
                <img className='object-cover h-full lg:h[220px] hover:scale-110 transition-all
                duration-500' src={Image2} alt=''/>
                </div>
                <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px]
                 overflow-hidden '>
                <img className='object-cover h-full lg:h[220px] hover:scale-110 transition-all
                duration-500' src={Image3} alt=''/>
                </div>
                <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px]
                 overflow-hidden '>
                <img className='object-cover h-full lg:h[220px] hover:scale-110 transition-all
                duration-500' src={Image4} alt=''/>
                </div>
            </div>   
            </div>
            <h1 className='h2 text-[#9e8565] text-2xl flex justify-center items-center'>Từ 2015 đến nay và ... hơn thế nữa!</h1>
        </div>
        {/**screen2 */}
        <div className='snap-start h-screen w-full '>
            <div class="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
                <div class="-m-1 flex flex-wrap md:-m-2">
                    <div class="flex w-1/2 flex-wrap">
                        <div class="w-1/2 p-1 md:p-2">
                        <img 
                            alt="gallery"
                            class="block h-full w-full object-scale-down object-center hover:scale-110 transition-all
                            duration-500"
                            src={ImgGallery1} />
                        </div>
                        <div class="w-1/2 p-1 md:p-2">
                        <img 
                            alt="gallery"
                            class="block h-full w-full object-scale-down object-center hover:scale-110 transition-all
                            duration-500"
                            src={ImgGallery2}/>
                        </div>
                        <div class="w-full p-1 md:p-2">
                        <img 
                            alt="gallery"
                            class="block h-full w-full object-scale-down object-center hover:scale-110 transition-all
                            duration-500"
                            src={ImgGallery3} />
                        </div>
                    </div>
                    <div class="flex w-1/2 flex-wrap">
                        <div class="w-full p-1 md:p-2">
                        <img 
                            alt="gallery"
                            class="block h-full w-full object-center object-scale-down hover:scale-110 transition-all
                            duration-500"
                            src={ImgGallery4} />
                        </div>
                        <div class="w-1/2 p-1 md:p-2">
                        <img 
                            alt="gallery"
                            class="block h-full w-full object-scale-down object-center hover:scale-110 transition-all
                            duration-500"
                            src={ImgGallery5} />
                        </div>
                        <div class="w-1/2 p-1 md:p-2">
                        <img 
                            alt="gallery"
                            class="block h-full w-full object-scale-down object-center hover:scale-110 transition-all
                            duration-500"
                            src={ImgGallery6}/>
                        </div>
                    </div>
                </div>
                <div class="-m-1 flex flex-wrap md:-m-2">
                    <div class="flex w-1/2 flex-wrap">
                        <div class="w-1/2 p-1 md:p-2">
                        <img 
                            alt="gallery"
                            class="block h-full w-full object-cover object-center hover:scale-110 transition-all
                            duration-500"
                            src={ImgGallery7} />
                        </div>
                        <div class="w-1/2 p-1 md:p-2">
                        <img 
                            alt="gallery"
                            class="block h-full w-full object-cover object-center hover:scale-110 transition-all
                            duration-500"
                            src={ImgGallery8} />
                        </div>
                        <div class="w-full p-1 md:p-2">
                        <img 
                            alt="gallery"
                            class="block h-full w-full object-cover object-center hover:scale-110 transition-all
                            duration-500"
                            src={ImgGallery9} />
                        </div>
                    </div>
                    <div class="flex w-1/2 flex-wrap">
                        <div class="w-full p-1 md:p-2">
                        <img 
                            alt="gallery"
                            class="block h-full w-full object-cover object-center hover:scale-110 transition-all
                            duration-500"
                            src={ImgGallery10}/>
                        </div>
                    </div>
                </div>
            </div>        
        </div>     
    </motion.section>
  );
  
};

export default Portfolio;
