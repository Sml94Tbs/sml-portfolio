'use client'
import Link from "next/link";
import { useState } from "react";
import { IoIosClose, IoIosMenu } from "react-icons/io";

const Header = () => {
    const [isClick, setIsClick] = useState(false);
    const toogleNavbar = () => {
        console.log('Ca marche')
        setIsClick(!isClick);
    }
    return (
        <header className='top-0 left-0 w-full p-[20px_120px] fixed bg-transparent flex items-center justify-between z-100 backdrop-blur-[16px] border-solid border-b-[1px] border-b-[#ffffff5b] max-lg:p-[2rem_3%]'>
            <Link href={"/"} className='text-[25px] text-white font-[600] cursor-default'>SML PORTFOLIO</Link>
            <button className=" hidden max-lg:block text-[3.2rem] text-white" onClick={toogleNavbar}>
                {isClick ? (
                    <IoIosClose />
                ) : (
                    <IoIosMenu />
                )}
            </button>
            {isClick && (
                <nav className=' hidden max-lg:block absolute top-full left-0 w-full p-[1rem_3%] bg-transparent backdrop-blur-[16px] border-t-[.1rem] border-t-solid border-t-[#0000001a]'>
                    <Link href={"/#accueil"} className='m-[3rem_0] block text-white no-underline text-[2rem] font-[500] transition-[cubic-bezier(0.25_0.1_0.25_1.0)] duration-[.3s] hover:text-[#8a2be2]'>Accueil</Link>
                    <Link href={"/#about"} className='m-[3rem_0] block text-white no-underline text-[2rem] font-[500] transition-[cubic-bezier(0.25_0.1_0.25_1.0)] duration-[.3s] hover:text-[#8a2be2]'>A propos</Link>
                    <Link href={"/#skill"} className='m-[3rem_0] block text-white no-underline text-[2rem] font-[500] transition-[cubic-bezier(0.25_0.1_0.25_1.0)] duration-[.3s] hover:text-[#8a2be2]'>Compétence</Link>
                    <Link href={"/#portfolio"} className='m-[3rem_0] block text-white no-underline text-[2rem] font-[500] transition-[cubic-bezier(0.25_0.1_0.25_1.0)] duration-[.3s] hover:text-[#8a2be2]'>Portfolio</Link>
                    <Link href={"/#contact"} className='m-[3rem_0] block text-white no-underline text-[2rem] font-[500] transition-[cubic-bezier(0.25_0.1_0.25_1.0)] duration-[.3s] hover:text-[#8a2be2]'>Contact</Link>
                </nav>
            )}
            <nav className='inline-block max-lg:hidden '>
                <Link href={"/#accueil"} className='ml-[3.5rem] text-white no-underline text-[1.8rem] font-[500] transition-[cubic-bezier(0.25_0.1_0.25_1.0)] duration-[.3s] hover:text-[#8a2be2]'>Accueil</Link>
                <Link href={"/#about"} className='ml-[3.5rem] text-white no-underline text-[1.8rem]	font-[500] transition-[cubic-bezier(0.25_0.1_0.25_1.0)] duration-[.3s] hover:text-[#8a2be2]'>A propos</Link>
                <Link href={"/#skill"} className='ml-[3.5rem] text-white no-underline text-[1.8rem]	font-[500] transition-[cubic-bezier(0.25_0.1_0.25_1.0)] duration-[.3s] hover:text-[#8a2be2]'>Compétence</Link>
                <Link href={"/#portfolio"} className='ml-[3.5rem] text-white no-underline text-[1.8rem]	font-[500] transition-[cubic-bezier(0.25_0.1_0.25_1.0)] duration-[.3s] hover:text-[#8a2be2]'>Portfolio</Link>
                <Link href={"/#contact"} className='ml-[3.5rem] text-white no-underline text-[1.8rem] font-[500] transition-[cubic-bezier(0.25_0.1_0.25_1.0)] duration-[.3s] hover:text-[#8a2be2]'>Contact</Link>
            </nav>
        </header>
    );
}

export default Header;