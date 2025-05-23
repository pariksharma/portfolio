"use client";

import React from 'react'

import {BsArrowDownRight} from 'react-icons/bs'
import { motion } from 'framer-motion';
import Link from 'next/link';

const service = [
  {
    num: '01',
    title: 'Web Development',
    description: 'Build fast, scalable, and secure web applications using modern frameworks like React.js.',
    href: 'https://nexttoppers.com/'
  },
  {
    num: '02',
    title: 'UI/UX Design',
    description: 'Craft intuitive user interfaces and seamless experiences focused on user needs and behavior',
    href: 'https://online.physicsgalaxy.com/'
  },
  {
    num: '03',
    title: 'Web Design',
    description: 'Design clean, responsive websites that align with your brand and engage your audience.',
    href: 'https://lab.videocrypt.in/'
  },
  {
    num: '04',
    title: 'SEO',
    description: 'Optimize websites for higher search engine rankings and improved online visibility',
    href: 'https://app.exampur.com/'
  }
]


const Services = () => {
  return (
    <section className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-0'>
      <div className='max-w-7xl mx-auto'>
        <motion.div 
          initial={{opacity: 0}} 
          animate={{opacity: 1, transition: {delay: 2, duration: 0.4, ease: 'easeIn'}}}
          className='grid grid-cols-1 md:grid-cols-2 gap-[60px]'
        >
          {service.map((item, index) => {
            return <div key={index} className='flex-1 flex flex-col justify-center gap-6 group'>
              <div className='w-full flex justify-between items-center'>
                <div className='text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duraction-500'>{item.num}</div>
                <Link href={item.href} title={'Live Link'} target='_blank' className='w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45'>
                  <BsArrowDownRight className='text-primary text-3xl' />
                </Link>
              </div>
              <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500'>{item.title}</h2>
              <p className='text-white/60'>{item.description}</p>
              <div className='border-b border-white/20 w-full'></div>
            </div>
          } )}
        </motion.div>
      </div>
    </section>
  )
}

export default Services