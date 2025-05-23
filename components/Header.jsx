import React from 'react'
import Link from 'next/link'
import Nav from './Nav'
import { Button } from './ui/button'
import MobileNav from './MobileNav'

const Header = () => {
  return (
    <header className='p-8 xl:px-12 text-white'>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href={"/"}>
          <h1 className='text-4xl font-semibold'>
            Parikshit <span className='text-accent'>.</span>
          </h1>
        </Link>


        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          {/* <Link href={"/contact"}>
            <Button>Hire me</Button>
          </Link> */}
        </div>

        <div className='xl:hidden'><MobileNav /></div>
      </div>
    </header>
  )
}

export default Header