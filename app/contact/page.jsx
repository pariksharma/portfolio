"use client";

import React from 'react'
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

const Contact = () => {
  return (
    <motion.section>page</motion.section>
  )
}

export default Contact