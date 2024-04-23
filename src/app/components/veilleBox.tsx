import Link from "next/link";
import { FaPython } from "react-icons/fa";
import axios from "axios";


const VeilleBox = ({ logo, lien, titre, auteur, text}: {logo: any,lien: string, titre: string, auteur: string, text: string}) => {
    return (
        <Link href={lien} >
            <div className=" p-[1rem_3rem] border-[2px] text-center border-solid items-center justify-center border-[#ffffff5f] rounded-[1rem] bg-[#5f3869ab] transition-[cubic-bezier(0.25_0.1_0.25_1.0)] duration-[.5s] hover:border-[#ebb7ff] hover:scale-[1.02]">
                <div className=" w-[7rem] h-[7rem] m-[3rem] border-[0.3rem] text-white text-[4rem] border-solid rounded-[50%] inline-flex items-center justify-center border-[#fff]">
                    {logo}
                </div>
                <h1 className=" text-center text-white text-[2.5rem] mb-[1rem] font-[600]">
                    {titre}
                </h1>
                <h4 className=" text-white text-[1.1rem] mb-[1.5rem]">
                    {auteur}
                </h4>
                <p className=" text-[1.6rem] text-white">
                    {text}
                </p>
            </div>
        </Link>
    )
}

export default VeilleBox;