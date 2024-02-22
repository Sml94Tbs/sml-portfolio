import Link from "next/link";
import { FaArrowUp } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className=" flex justify-between items-center flex-wrap p-[2rem_9%] bg-[#272627]">
            <p className=" text-[1.6rem]">
                @COPYRIGHT SML | All Right Reserved.
            </p>
            <div>
                <Link href={"#accueil"} className=" inline-flex justify-center items-center p-[.8rem] rounded-[.8rem] bg-white hover:shadow-[0_0_1rem_#fff] transition-[cubic-bezier(0.25_0.1_0.25_1.0)] duration-[.5s]"><FaArrowUp className=" text-[#3f90ec] text-[2.4rem]" /></Link>
            </div>
        </footer>
    );
}

export default Footer;