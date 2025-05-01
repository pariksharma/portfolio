import Link from 'next/link'
import React from 'react'
import { FaGithub, FaLinkedin, FaYoutube, FaTwitter, FaWhatsapp } from 'react-icons/fa'

const socials = [
    {icon: <FaGithub />, path: 'https://github.com/pariksharma?tab=repositories'},
    {icon: <FaLinkedin />, path: 'https://linkedin.com/in/parikshit-sharma-4b681020a'},
    // {icon: <FaYoutube />, path: ''},
    // {icon: <FaTwitter />, path: ''},
    {icon: <FaWhatsapp />, path: 'https://wa.me/919897242404'}
]

const Social = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
        {socials.map((item, index) => {
            return <Link key={index} href={item.path} className={iconStyles} target='_blank'>{item.icon}</Link>
        })}
    </div>
  )
}

export default Social