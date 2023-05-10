
import { IoLogoYoutube } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";

function Footer() {
  return (
    <footer className='flex flex-col items-center mt-20 bg-[#9390FF] p-10'>
        <h1 className='font-semibold text-xl text-white/70'>Our Socials</h1>
        <div className='flex items-center gap-4'>
            <a href='#'><IoLogoYoutube color='#ddd' size='2rem' /></a>
            <a href='#'><AiFillInstagram color='#ddd' size='2rem' /></a>
        </div>
    </footer>
  )
}

export default Footer;