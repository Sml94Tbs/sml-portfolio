'use client'
import CardBox from "@/app/components/cardBox";
import { FaHtml5 } from "react-icons/fa";

const Skill = () => {
    return (
        <section className="bg-[#b474bd21]">
            <h2 className=" text-[4.5rem] font-[700] leading-[1.2] mb-[5rem] text-center text-white">Mes compétences</h2>
            <p className=" text-[2.4rem] text-center mb-[2.5rem] font-[500] text-white">Vous pourrez vous faire une idée de mon niveau actuel.</p>
            <div className=" flex justify-center items-center flex-wrap gap-[2rem]">
                <CardBox
                    icon={<FaHtml5 />}
                    nom={"Html"}
                    level="70%"
                />


            </div>
        </section>
    )
}

export default Skill;