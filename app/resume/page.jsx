"use client";

import React, { useEffect, useState } from 'react'
import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs } from 'react-icons/fa';
import {SiTailwindcss, SiNextdotjs} from 'react-icons/si';
import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { ScrollArea } from '@/components/ui/scroll-area';
import { motion } from 'framer-motion';

const data = {
  title: 'About me',
  description: "Over the past 3+ years, I've worked on a variety of frontend projects, ranging from dynamic dashboards to scalable web platforms. I’ve collaborated closely with cross-functional teams, turning complex requirements into intuitive, responsive user interfaces using React.js and supporting libraries. My experience spans building production-grade apps, optimizing performance, and delivering clean, maintainable code.",
  info: [
    {
      fieldName: 'Name',
      fieldValue: 'Parikshit Sharma'
    },
    {
      fieldName: 'Phone',
      fieldValue: '(+91) 9897242404'
    },
    {
      fieldName: 'Experience',
      fieldValue: '3+ years'
    },
    {
      fieldName: 'Email',
      fieldValue: 'parikshitsharma975@gmail.com'
    },
    {
      fieldName: 'Nationality',
      fieldValue: 'Indian'
    },
    // {
    //   fieldName: 'Freelance',
    //   fieldValue: 'Available'
    // },
    {
      fieldName: 'Languages',
      fieldValue: 'English, Hindi'
    },
  ]
}

const experience = {
  icon: '/assets/resume/badge.svg',
  title: 'My experience',
  description: '3+ years of experience building dynamic, responsive web applications using React.js, with a focus on performance, scalability, and clean UI. Experienced in collaborating with teams to deliver production-ready features using Redux, Zustand, and Next.js.',
  items: [
    {
      company: 'AppSquadz Software Pvt Ltd',
      position: 'Software Developer - React Js',
      duration: '2024 - present'
    },
    {
      company: 'Techesperto Solutions',
      position: 'Software Developer',
      duration: '2022 - 2024'
    },
    {
      company: 'Techesperto Solutions',
      position: 'Intern',
      duration: '2021 - 2022'
    }
  ]
}

const education = {
  icon: '/assets/resume/cap.svg',
  title: 'My education',
  description: 'Completed B.Tech in Information Technology with a strong foundation in software development and problem-solving.',
  items: [
    {
      institute: 'Internshala',
      position: 'Web Development Training',
      duration: '2021'
    },
    {
      institute: 'SuvenConsultants and TechnologyPvt. Ltd',
      position: 'Internship',
      duration: '2021'
    },
    {
      institute: 'R.D.Engineering College',
      position: 'B.Tech',
      duration: '2018-2022'
    }
  ]
}

const skills = {
  title: 'My skills',
  description: 'Skilled in frontend development with a strong grasp of Data Structures & Algorithms, and expertise in React.js, Next.js, and modern JavaScript.',
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5"
    },
    {
      icon: <FaCss3 />,
      name: "css 3"
    },
    {
      icon: <FaJs />,
      name: "javascript"
    },
    {
      icon: <FaReact />,
      name: "react.js"
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js"
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind css"
    },
    // {
    //   icon: <FaNodeJs />,
    //   name: "node js"
    // },
    // {
    //   icon: <FaFigma />,
    //   name: "figma"
    // },
  ]
}

const Resume = () => {

  const [timeElapsed, setTimeElapsed] = useState("");

  useEffect(() => {
    const startDate = new Date(2021, 10); // November 2021 (Months are 0-based)
    const currentDate = new Date();
    
    let years = currentDate.getFullYear() - startDate.getFullYear();
    let months = currentDate.getMonth() - startDate.getMonth();

    if (months < 0) {
      years -= 1;
      months += 12;
    }

    setTimeElapsed(`${years}+ years`);
  }, []);


  return (
    <motion.div 
      initial={{opacity: 0}} 
      animate={{opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: 'easeIn'}}}
      className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'
    >
      <div className='w-full md:mx-[110px] mx-auto'>
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
        <div className='min-h-[70vh] w-full'>
          <TabsContent value="experience" className="w-full">
            <div className='flex flex-col gap-[30px] text-center xl:text-left'>
              <h3 className='text-4xl font-bold'>{experience?.title}</h3>
              <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{experience?.description}</p>
              <div className="h-[400px] display_scroll_bar">
                <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                  {experience?.items?.map((item, index) => {
                    return <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                      <span className='text-accent'>{item?.duration}</span>
                      <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item?.position}</h3>
                      <div className='flex items-center gap-3'>
                        <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                        <p className='text-white/60'>{item?.company}</p>
                      </div>
                    </li>
                  })}
                </ul>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="education" className="w-full">
          <div className='flex flex-col gap-[30px] text-center xl:text-left'>
              <h3 className='text-4xl font-bold'>{education?.title}</h3>
              <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{education?.description}</p>
              <div className="h-[400px] display_scroll_bar">
                <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                  {education?.items?.map((item, index) => {
                    return <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                      <span className='text-accent'>{item?.duration}</span>
                      <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item?.position}</h3>
                      <div className='flex items-center gap-3'>
                        <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                        <p className='text-white/60'>{item?.institute}</p>
                      </div>
                    </li>
                  })}
                </ul>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="skills" className="w-full h-full">
            <div className='flex flex-col gap-[30px]'>
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold'>{skills.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{skills.description}</p>
              </div>
              <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4'>
                {skills?.skillList?.map((skill, index) => {
                  return <li key={index} className='shadow-2xs bg-[#1c2846] rounded'>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                          <div className='text-6xl group-hover:text-accent transition-all duration-300'>{skill.icon}</div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className='capitalize'>{skill.name}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </li>
                })}
              </ul>
            </div>
          </TabsContent>
          <TabsContent value="about" className="w-full text-center xl:text-left">
            <div className='flex flex-col gap-[30px]'>
              <h3 className='text-4xl font-bold'>{data.title}</h3>
              <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{data.description}</p>
              <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0'>
                {data.info.map((item, index) =>{
                  return <li key={index} className='flex items-center justify-center xl:justify-start gap-4'>
                    <span className='text-white/60'>
                      {item?.fieldName}
                    </span>
                    <span className='text-xl'>{item?.fieldValue}</span>
                  </li>
                })}
              </ul>
            </div>
          </TabsContent>
        </div>
        </Tabs>

      </div>
    </motion.div>
  )
}

export default Resume