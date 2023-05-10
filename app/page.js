"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import bg from '../public/3dbg.png';
import chart from '../public/chart.png';
import graph from '../public/graph.png';
import { CgMenuRightAlt } from 'react-icons/cg';
import { IoLogoYoutube } from 'react-icons/io';
import { AiFillInstagram } from 'react-icons/ai';

export default function Home() {
  const [navToggle, setNavToggle] = useState(false);

  return (
    <main className="flex min-h-screen flex-col justify-between pt-5 max-md:pt-3">
      <div className='flex justify-around max-sm:flex-col my-20 px-20 max-md:px-10 max-md:my-10 max-sm:items-center'>
        <div className='max-w-sm font-rubik max-sm:mt-10 max-sm:text-center'>
          <h1 className='font-semibold text-3xl text-[#393939]'>Revolutionize Market Research with us.</h1>
          <h3 className='font-semibold text-2xl text-[#9390FF]'>Get Rewarded for Sharing Your Insights.</h3>
          <p className='text-[#565656] mb-4 mt-2'>Welcome to our revolutionary platform that connects consumers and manufacturers through real-time feedback data</p>
          <h3 className='font-semibold text-xl mb-2 text-[#565656]'>Get Started as</h3>
          <div>
            <button className='shadow-black/10 shadow-lg bg-[#9390FF] text-white font-semibold px-4 py-2 rounded-md mr-6'>Consumer</button>
            <button className='shadow-black/10 shadow-lg border-[#9390FF] border-2 text-[#9390FF] font-semibold px-4 py-2 rounded-md'>Company</button>
          </div>
        </div>
        <div className='image-section flex items-center max-sm:mt-20'>
          <Image className='chart' src={chart} width={100} height={100} alt="3d chart"/>
          <Image className='graph' src={graph} width={100} height={100} alt="3d graph"/>
          <Image className='illustration' src={bg} width={350} height={350} alt="3d illustration"/>
        </div>
      </div>

      <div className='mt-10 px-20 max-md:px-10'>
        <div>
          <h1 className='font-semibold text-2xl text-[#393939] font-rubik text-center'>What We Offer</h1>
        </div>
        <div className='flex justify-evenly mt-5 gap-4 max-md:flex-col max-md:items-center'>
          <div className='bg-[#94C98B] py-4 px-8 rounded-md max-w-md text-white shadow-black/20 shadow-lg'>
            <h3 className='font-semibold text-xl mb-1'>For Consumers</h3>
            <p className='font-light leading-5'>
              Our platform provides a unique opportunity to have your voice heard and make an impact on the products and services you use every day. By sharing your feedback, you can influence the direction of product development and help shape the future of consumer goods.
            </p>
            <button className='bg-white font-semibold rounded-md mt-2 text-[#9390FF] px-4 py-2'>Explore!</button>
          </div>
          <div className='bg-[#E79191] py-4 px-8 rounded-md max-w-md text-white shadow-black/20 shadow-lg'>
            <h3 className='font-semibold text-xl mb-1'>For Companies</h3>
            <p className='font-light leading-5'>
              Our platform offers a powerful tool for gaining valuable insights into your target audience. By leveraging real-time feedback data, you can identify areas for improvement, optimize your product offerings, and enhance your competitive edge.
            </p>
            <button className='bg-white font-semibold rounded-md mt-2 text-[#9390FF] px-4 py-2'>Explore!</button>
          </div>
        </div>
      </div>
    </main>
  )
}
