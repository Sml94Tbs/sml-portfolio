import Link from "next/link";
import { IoMdMenu } from "react-icons/io";

const Header = () => {
    return (
        <header className='top-0 left-0 w-full p-[20px_120px] fixed bg-transparent flex items-center justify-between z-100 backdrop-blur-[16px] border-b-[1px] border-[#ffffff5b]'>
            <Link href={"/"} className='text-[25px] text-white font-[600] cursor-default'>SML PORTFOLIO</Link>
            <IoMdMenu className=" text-[3.2rem] text-white hidden max-lg:block" />
            <nav className='inline-block max-lg:hidden'>
                <Link href={"/#accueil"} className=' ml-35px no-underline	text-3xl font-[500] transition duration-[.3s] hover:text-[#8a2be2]'>Accueil</Link>
                <Link href={"/#about"} className='ml-35px no-underline text-3xl	font-[500] transition duration-[.3s] hover:text-[#8a2be2]'>A propos</Link>
                <Link href={"/#skill"} className='ml-35px no-underline text-3xl	font-[500] transition duration-[.3s] hover:text-[#8a2be2]'>Compétence</Link>
                <Link href={"/#portfolio"} className='ml-35px no-underline text-3xl	font-[500] transition duration-[.3s] hover:text-[#8a2be2]'>Portfolio</Link>
                <Link href={"/#contact"} className='ml-35px no-underline text-3xl	font-[500] transition duration-[.3s] hover:text-[#8a2be2]'>Contact</Link>
            </nav>
        </header>
    );
}

export default Header;