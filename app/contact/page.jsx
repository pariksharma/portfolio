"use client";

import React, { useState } from 'react'
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const info = [
  {
    icon: <FaPhoneAlt />,
    title: 'Phone',
    description: '(+91) 9897242404'
  },
  {
    icon: <FaEnvelope />,
    title: 'Email',
    description: 'parikshitsharma975@gmail.com'
  },
  {
    icon: <FaMapMarkerAlt />,
    title: 'Address',
    description: 'Noida, Uttar Pradesh'
  }
]

import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { validateForm } from '@/components/utils/helpers';

const Contact = () => {

  const [formData, setFormData] = useState({
    firstname: '',
    lastname : '',
    email: '',
    phone: '',
    type: '',
    message: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    if(validateForm(formData) == 'success') {
      toast.success('Thank you!', {
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      })
      setFormData({
        firstname: '',
        lastname : '',
        email: '',
        phone: '',
        type: '',
        message: '',
      })
    }
    else toast.error(validateForm(formData), {
      style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
      },
    })
    // toast.success('submit')
  }

  const handlePhone = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, ''); // allow only numbers
    if ((value === '' || /^[6-9]/.test(value)) && value.length <= 10) {
      setFormData({ ...formData, 'phone': e.target.value })
    }
  }

  return (
    <motion.section 
      initial={{opacity: 0}}
      animate={{opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: 'easeIn'}}}
      className='py-6'
    >
      <div className='max-w-7xl mx-auto'>
        <div className='flex flex-col xl:flex-row gap-[30px]'>
          <div className='xl:w-[54%] order-2 xl:order-none'>
            <form className='flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl'>
              <h3 className='text-4xl text-accent'>Let's work together</h3>
              <p className='text-white/60'>Let’s collaborate on your next project! I’m ready to turn your ideas into reality with quality code and seamless design.</p>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <Input 
                  type="firstname" 
                  placeholder="Firstname*" 
                  name= "firstname"
                  value={formData.firstname}
                  onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
                  autoComplete="off"
                />
                <Input 
                  type="lastname" 
                  placeholder="Lastname*" 
                  name="lastname"
                  value={formData.lastname}
                  onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
                  autoComplete="off"
                />
                <Input 
                  type="email" 
                  placeholder="Email address*"
                  name="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
                  autoComplete="off" 
                />
                <Input 
                  type="phone" 
                  placeholder="Phone Number*" 
                  name= "phone"
                  value={formData.phone}
                  onChange={(e) => handlePhone(e)}
                  autoComplete="off"
                />
              </div>
              <Select
                value={formData.type}
                onValueChange={(value) => setFormData({ ...formData, type: value })}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service*"></SelectValue>
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="Web Development">Web Development</SelectItem>
                    <SelectItem value="UI/UX Design">UI/UX Design</SelectItem>
                    <SelectItem value="Figma Design">Figma Design</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea 
                className="h-[200px]" 
                placeholder="Type your message here.*"
                value={formData.message}
                onChange = {(e) => setFormData({...formData, 'message':e.target.value})}
              />
              <Button onClick = {handleSubmit} size="md" className="max-w-40 cursor-pointer hover:bg-primary hover:text-accent hover:border-1 hover:border-accent">Send message</Button>
            </form>
          </div>
          <div className='flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0'>
            <ul className='flex flex-col gap-10'>
              {info.map((item, index) => {
                return <li key={index} className='flex items-center gap-6'>
                  <div className='w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center'>
                    <div className='text-[28px]'>{item.icon}</div>
                  </div>
                  <div className='flex-1'>
                    <p className='text-white/60'>{item.title}</p>
                    <h3 className='text-xl'>{item.description}</h3>
                  </div>
                </li>
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Contact