'use client'
import Link from "next/link";
import { useState } from "react";
import { IoMdMenu } from "react-icons/io";

const Header = () => {
    const [isClick, setIsClick] = useState(false);
    const handleClick = () => {
        setIsClick(!isClick);
    }
    return (
        <header className='top-0 left-0 w-full p-[20px_120px] fixed bg-transparent flex items-center justify-between z-100 backdrop-blur-[16px] border-solid border-b-[1px] border-[#ffffff5b] max-lg:p-[1rem_3%]'>
            <Link href={"/"} className='text-[25px] text-white font-[600] cursor-default'>SML PORTFOLIO</Link>
            <IoMdMenu className=" text-[3.2rem] text-white hidden max-lg:block " onClick={handleClick} />
            <nav className='inline-block max-lg:hidden max-lg:top-full max-lg:absolute max-lg:p-[1rem_3%] max-lg:border-t-[.1rem]'>
                <Link href={"/#accueil"} className='ml-[3.5rem] text-white no-underline text-[1.8rem] font-[500] transition-[cubic-bezier(0.25_0.1_0.25_1.0)] duration-[.3s] hover:text-[#8a2be2]'>accueil</Link>
                <Link href={"/#about"} className='ml-[3.5rem] text-white no-underline text-[1.8rem]	font-[500] transition-[cubic-bezier(0.25_0.1_0.25_1.0)] duration-[.3s] hover:text-[#8a2be2]'>A propos</Link>
                <Link href={"/#skill"} className='ml-[3.5rem] text-white no-underline text-[1.8rem]	font-[500] transition-[cubic-bezier(0.25_0.1_0.25_1.0)] duration-[.3s] hover:text-[#8a2be2]'>Compétence</Link>
                <Link href={"/#portfolio"} className='ml-[3.5rem] text-white no-underline text-[1.8rem]	font-[500] transition-[cubic-bezier(0.25_0.1_0.25_1.0)] duration-[.3s] hover:text-[#8a2be2]'>Portfolio</Link>
                <Link href={"/#contact"} className='ml-[3.5rem] text-white no-underline text-[1.8rem] font-[500] transition-[cubic-bezier(0.25_0.1_0.25_1.0)] duration-[.3s] hover:text-[#8a2be2]'>Contact</Link>
            </nav>
        </header>
    );
}

export default Header;