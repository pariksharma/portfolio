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
import emailjs from 'emailjs-com';

const Contact = () => {

  const [formData, setFormData] = useState({
    firstname: '',
    lastname : '',
    email: '',
    phone: '',
    type: '',
    message: '',
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if(validateForm(formData) == 'success') {
      setIsLoading(true)
      emailjs.send(
        'service_191om95',      // Replace with your EmailJS service ID
        'template_zck98tl',     // Replace with your EmailJS template ID
        {
          firstname: formData.firstname,
          lastname : formData.lastname,
          email: formData.email,
          phone: formData.phone,
          type: formData.type,
          message: formData.message,

        },               // Form data to send
        'RUFad9pja0NEmFG21'       // Replace with your EmailJS public key
      ).then(() => {
        toast.success('Message sent successfully!', {
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
          },
        });
        setIsLoading(false)
        setFormData({
          firstname: '',
          lastname : '',
          email: '',
          phone: '',
          type: '',
          message: '',
        });
      }).catch((error) => {
        toast.error('Failed to send message.', {
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
          },
        });
        setIsLoading(false)
        console.error('EmailJS error:', error);
      });
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
              <Button 
                disabled = {isLoading} 
                onClick = {handleSubmit} 
                size="md" 
                className={`max-w-40 cursor-pointer ${!isLoading && 'hover:bg-primary hover:text-accent hover:border-1 hover:border-accent'}`}
              >{isLoading 
                ? 
                  <div role="status">
                    <svg aria-hidden="true" className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-green-500" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                    </svg>
                    <span className="sr-only">Loading...</span>
                  </div>
                :
                  'Send message'
                }
              </Button>
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