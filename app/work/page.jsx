"use client";

import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { BsArrowUpRight, BsGithub } from 'react-icons/bs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@radix-ui/react-tooltip';
import Link from 'next/link';
import Image from 'next/image';
import WorkSliderBtns from '@/components/ui/workSliderBtns';

const Projects = [
  {
    num: '01',
    category: 'frontend',
    title: 'project 1',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit modi nostrum vitae magni, debitis in',
    stack: [
      {name: 'HTML 5'}, {name: 'CSS 3'}, {name: 'JavaScript'}, {name: 'React JS'},
    ],
    image: '/assets/work/thumb1.png',
    live: '',
    github: '',
  },
  {
    num: '02',
    category: 'frontend',
    title: 'project 2',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit modi nostrum vitae magni, debitis in',
    stack: [
      {name: 'HTML 5'}, {name: 'CSS 3'}, {name: 'Bootstrap'}, {name: 'React JS'}, {name: 'Redux'},
    ],
    image: '/assets/work/thumb2.png',
    live: '',
    github: '',
  },
  {
    num: '03',
    category: 'frontend',
    title: 'project 3',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit modi nostrum vitae magni, debitis in',
    stack: [
      {name: 'Bootstrap'}, {name: 'JavaScript'}, {name: 'React JS'}, {name: 'Redux'},
    ],
    image: '/assets/work/thumb3.png',
    live: '',
    github: '',
  },
  {
    num: '04',
    category: 'frontend',
    title: 'project 4',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit modi nostrum vitae magni, debitis in',
    stack: [
      {name: 'HTML 5'}, {name: 'CSS 3'}, {name: 'JavaScript'}, {name: 'React JS'}, {name: 'Zustand'},
    ],
    image: '/assets/work/thumb1.png',
    live: '',
    github: '',
  },
  {
    num: '05',
    category: 'frontend',
    title: 'project 5',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit modi nostrum vitae magni, debitis in',
    stack: [
      {name: 'HTML 5'}, {name: 'CSS 3'}, {name: 'Bootstrap'}, {name: 'Javascript'}, {name: 'Next Js JS'},
    ],
    image: '/assets/work/thumb2.png',
    live: '',
    github: '',
  },
  {
    num: '06',
    category: 'frontend',
    title: 'project 6',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit modi nostrum vitae magni, debitis in',
    stack: [
      {name: 'HTML 5'}, {name: 'Tailwind CSS'}, {name: 'Next JS'},
    ],
    image: '/assets/work/thumb3.png',
    live: '',
    github: '',
  },
]


const Work = () => {

  const [project, setProject] = useState(Projects[0])

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(Projects[currentIndex])
  }
  return (
    <motion.div 
      initial={{opacity: 0}}
      animate={{opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: 'easeIn'}}}
      className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-0'
    >
      <div className='w-full md:mx-[110px] mx-auto'>
        <div className='flex flex-col xl:flex-row xl:gap-[50px] xl:ml-[100px]'>
          <div className='w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none'>
            <div className='flex flex-col gap-[30px] h-[50%]'>
              <div className='text-8xl leading-none font-extrabold text-transparent text-outline'>{project.num}</div>
              <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize'>{project.category} project</h2>
              <p className='text-white/60'>{project.description}</p>
              <ul className='flex gap-4'>
                {project.stack.map((item, index) => {
                  return <li key={index} className='text-xl text-accent'>
                    {item?.name}
                    {index !== project.stack.length - 1 && ',' }
                  </li>
                })}
              </ul>
              <div className='border border-white/20'></div>
              <div className='flex items-center gap-4'>
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
                        <BsArrowUpRight className='text-white text-3xl group-hover:text-accent' />
                      </TooltipTrigger>
                      <TooltipContent className='bg-[#eee] py-2 px-3 text-sm text-black rounded'>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
                        <BsGithub className='text-white text-3xl group-hover:text-accent' />
                      </TooltipTrigger>
                      <TooltipContent className='bg-[#eee] py-2 px-3 text-sm text-black rounded'>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className='w-full xl:w-[50%]'>
            <Swiper 
              spaceBetween={30} 
              slidesPerView={1} 
              className=' mb-12'
              onSlideChange={handleSlideChange}
            >
              {Projects.map((project, index) => {
                return <SwiperSlide key={index} className='w-full h-full'>
                  <div className=' relative group flex justify-center items-center'>
                    <div className='relative w-full '>
                      <img src={project.image} fill="true" className='object-cover w-[70%]' alt='' />
                    </div>
                  </div>
                </SwiperSlide>
              })}
              <WorkSliderBtns
                containerStyles="flex gap-2 relative right-0 bottom-[0] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Work