"use client";

import React from 'react'
import CountUp from 'react-countup';

const stats = [
    {
        num: 3,
        text: 'Years of experience'
    },
    {
        num: 8,
        text: 'Project completed'
    },
    {
        num: 5,
        text: 'Tecnology covered'
    },
    {
        num: 100,
        text: 'code commits'
    }
]

const Stats = () => {
  return (
    <section className='pt-4 pb-12 xl:pt-0 xl:pb-0'>
        <div className='max-w-7xl mx-auto'>
            <div className='flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none'>
                {stats.map((stat, index) => {
                    return <div key={index} className='flex-1 flex gap-4 items-center justify-center xl:justify-start'>
                        <CountUp end={stat.num} duration={5} delay={2} className='text-4xl xl:text-6xl font-extrabold' />
                        <p className={`${stat.text.length > 5 ? "max-w-[100px]" : "max-w-[150px]"} leading-snug text-white/80`}>{stat.text}</p>
                    </div>
                } )}
            </div>
        </div>
    </section>
  )
}

export default Stats