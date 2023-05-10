"use client";
import Link from 'next/link';
import { CgMenuRightAlt } from 'react-icons/cg';
import { useState } from 'react';


function Navbar() {
    const [navToggle, setNavToggle] = useState(false);
  return (
    <nav className='flex justify-between items-end px-20 max-md:px-10'>
        <div className="text-2xl text-[#393939] font-semibold font-rubik p-0 max-sm:text-lg">DesiTech Solutions<span className='text-4xl text-[#9390FF]'>.</span></div>
        <ul className='flex text-[#808080] font-semibold gap-8 max-md:hidden'>
          <li className='text-[#9390FF]'><Link href='/'>Home</Link></li>
          <li className='hover:text-[#9390FF]'><Link href='/about'>About Us</Link></li>
          <li className='hover:text-[#9390FF]'><Link href='#'>Contact</Link></li>
        </ul>
        <div className='hidden max-md:block'>
          <CgMenuRightAlt size='2rem' color='#808080' onClick={() => setNavToggle(!navToggle)}/>
          {
            navToggle && (
              <div className='absolute bg-white px-4 py-2 right-10 rounded-md'>
                <ul className='flex flex-col text-[#808080] font-semibold gap-2'>
                  <li className='text-[#9390FF]'><Link href='/'>Home</Link></li>
                  <li className='hover:text-[#9390FF]'><Link href='/about'>About Us</Link></li>
                  <li className='hover:text-[#9390FF]'><Link href='#'>Contact</Link></li>
                </ul>
              </div>
            )
          }   
        </div>
      </nav>
  )
}

export default Navbar;