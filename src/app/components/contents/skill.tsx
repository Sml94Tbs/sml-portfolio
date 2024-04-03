'use client'
import CardBox from "@/app/components/cardBox";
import { FaBootstrap, FaCss3, FaHtml5, FaLaravel, FaPhp, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

const Skill = () => {
    return (
        <section className="bg-[#b474bd21]">
            <h2 className=" text-[4.5rem] font-[700] leading-[1.2] mb-[5rem] text-center text-white">Mes compétences</h2>
            <p className=" text-[2.4rem] text-center mb-[2.5rem] font-[500] text-white">Vous pourrez vous faire une idée de mon niveau actuel.</p>
            <div className=" flex justify-center items-center flex-wrap gap-[2rem]">
                <CardBox
                    icon={<FaLaravel />}
                    nom={"Laravel"}
                    level="30%"
                /><CardBox
                    icon={<SiTailwindcss />}
                    nom={"TailwindCSS"}
                    level="60%"
                />
                <CardBox
                    icon={<TbBrandNextjs />}
                    nom={"Next.js"}
                    level="40%"
                />
            </div>
        </section>
    )
}

export default Skill;