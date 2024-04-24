import Link from "next/link";
import { FaLongArrowAltLeft } from "react-icons/fa";

export default function page() {
    return (
        <section>
            <h1 className=" text-[4.5rem] font-[700] text-white text-center mb-[3rem] max-lg:text-[3.5rem]">Mon stage en première année</h1>
            <h4 className=" text-[2.5rem] font-[500] text-white text-center">Pour l&apos;association ECEFRAM</h4>
            <div className=" m-[5rem_0]">
                <h5 className=" text-white underline text-[3rem] font-[600] max-lg:text-[2.5rem]">Objectif : </h5>
                <p className=" text-white text-[1.6rem] italic">Refaire le site de l&apos;association</p>
            </div>
            <div className=" m-[5rem_0]">
                <h5 className=" text-white underline text-[3rem] max-lg:text-[2.5rem] font-[600]">Collaborateur(trice) : </h5>
                <p className=" text-white text-[1.6rem] italic">- Datiné</p>
            </div>
            <div className=" flex m-[0_0_4rem] max-lg:flex-col">
                <div className=" w-[50%]">
                    <h2 className=" text-white text-[2.6rem] font-[600]">Mission 1:</h2>
                    <h3 className=" text-white text-[1.8rem]">Réalisation d&apos;une maquette</h3>
                    <p className=" text-white text-[1.2rem] mb-[5rem]">(Figma)</p>
                </div>
                <div className="">
                    <embed src="/Stage2023.pdf" type="" className=" rounded-[1.6rem] shadow-[0_0_20px_#ff91f6] h-[50rem] w-[80rem] max-lg:h-[30rem] max-lg:w-[40rem]" />
                </div>
            </div>
            <div className=" border border-solid border-[#ffffff6a] m-[5rem]"></div>
            <div className=" flex flex-col-reverse m-[0_0_4rem]">
                <div className=" grid grid-cols-[repeat(2,_1fr)] gap-[2rem] max-lg:grid-cols-[repeat(1,_1fr)]">
                    <iframe src="https://ecefram.fr/" className="rounded-[1.6rem] shadow-[0_0_20px_#ff91f6] w-full h-[50rem] " frameBorder="0"></iframe>
                    <iframe src="/site/index.html" frameBorder="0" className="shadow-[0_0_20px_#ff91f6] w-full rounded-[1.6rem] h-[50rem]"></iframe>
                </div>
                <div className="">
                    <h2 className=" text-white text-[2.6rem] font-[600] text-center">Mission 2:</h2>
                    <h3 className=" text-white text-[1.8rem] text-center mb-[5rem]">Réalisation du site internet</h3>
                </div>

            </div>
            <div className=" flex items-center justify-center mt-[2rem]">
                <Link className=" flex items-center gap-[1rem] p-[2rem] text-white bg-[#c184db] rounded-[1rem] text-[2rem] font-[600] hover:shadow-[0_0_20px_#ff91f6] transition-[cubic-bezier(0.25_0.1_0.25_1.0)] duration-[.5s]" href={"/stage"}><FaLongArrowAltLeft />Retour</Link>
            </div>
        </section>
    )
}