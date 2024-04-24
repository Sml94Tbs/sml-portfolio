import Link from "next/link";
import { FaLongArrowAltLeft } from "react-icons/fa";

export default function page() {
    return (
        <section>
            <h1 className=" text-white text-[4.5rem] font-[700] text-center">Mon stage en 2e année</h1>
            <div className=" flex items-center justify-center mt-[2rem]">
                <Link className=" flex items-center gap-[1rem] p-[2rem] text-white bg-[#c184db] rounded-[1rem] text-[2rem] font-[600] hover:shadow-[0_0_20px_#ff91f6] transition-[cubic-bezier(0.25_0.1_0.25_1.0)] duration-[.5s]" href={"/stage"}><FaLongArrowAltLeft />Retour</Link>
            </div>
        </section>
    )
}