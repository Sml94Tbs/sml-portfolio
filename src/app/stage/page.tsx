import StageCard from "@/app/components/stageCard"
import Link from "next/link"
import { FaLongArrowAltLeft } from "react-icons/fa"

export default function stage(){
    return(
        <section>
            <h1 className=" text-white text-center text-[3.2rem] font-[700] mb-[2rem]"> Mes Stages</h1>
            <p className=" text-[1.6rem] text-white font-[600] text-center mb-[5rem]">Voici les stages que j&apos;ai pu effecter</p>
            <div className=" grid grid-cols-[repeat(2,_1fr)] justify-center gap-[2.5rem] max-sm:grid-cols-[1fr]">
            <StageCard
            titre={"Stage 1e année"}
            image={"/images/image (1) ff.png"}
            width={1079}
            height={1919}
            />
            <StageCard
            titre={"Stage 2e année"}
            image={"/images/image (1) ff.png"}
            width={1079}
            height={1919}
            />
            </div>
            <div className=" flex items-center justify-center mt-[2rem]">
                <Link className=" flex items-center gap-[1rem] p-[2rem] text-white bg-[#c184db] rounded-[1rem] text-[2rem] font-[600] hover:shadow-[0_0_20px_#ff91f6] transition-[cubic-bezier(0.25_0.1_0.25_1.0)] duration-[.5s]" href={"/#portfolio"}><FaLongArrowAltLeft />Retour</Link>
            </div>
        </section>
    )
}