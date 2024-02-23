import Link from "next/link"
import { AiFillInstagram } from "react-icons/ai"
import { FaGithub, FaLinkedin } from "react-icons/fa"


const Accueil = () => {
    return (
        <section className=" relative w-full h-screen flex justify-center items-center p-[70px_10%_0] bg-transparent">
            <div className="">
                <h3 className=" text-white text-[3.2rem] font-[700] drop-shadow-[0_0_1rem_#773271]">Bonjour ici</h3>
                <h1 className=" text-white text-[5.6rem] font-[700] drop-shadow-[0_0_1rem_#773271]">Samuel</h1>
                <h3 className=' text-white text-[3.2rem] font-bold mb-12 drop-shadow-[0_0_1rem_#773271] transition-[cubic-bezier(0.25_0.1_0.25_1.0)]'>Je suis développeur</h3>
                <p className=' text-white text-[1.6rem] drop-shadow-[0_0_1rem_#773271] '>Mon site pourra vous indiqué qui je suis</p>
                <div>
                    <Link href={""} className=' text-white w-[4rem] h-[4rem] border-2 border-solid	 border-[#fff] rounded-[50%] text-[2rem] no-underline inline-flex items-center m-[3rem_1.5rem_3rem_0] justify-center hover:bg-[#2f1c5279] hover:text-[#d48aff] hover:shadow-[0_0_20px_#ff91f6] hover:border-[#ffc3fa]  transition-[cubic-bezier(0.25_0.1_0.25_1.0)] duration-[.5s]'><AiFillInstagram /></Link>
                    <Link href={"https://github.com/Sml94Tbs"} className='text-white w-[4rem] h-[4rem] border-[#fff] border-2 border-solid	 rounded-[50%] text-[2rem] no-underline inline-flex items-center m-[3rem_1.5rem_3rem_0] justify-center hover:bg-[#2f1c5279] hover:text-[#d48aff] hover:shadow-[0_0_20px_#ff91f6] hover:border-[#ffc3fa]  transition-[cubic-bezier(0.25_0.1_0.25_1.0)] duration-[.5s]'><FaGithub /></Link>
                    <Link href={"https://www.linkedin.com/in/samuel-mayamba-85202a271/"} className='text-white w-[4rem] h-[4rem] border-[#fff] border-2 border-solid rounded-[50%] text-[2rem] no-underline inline-flex items-center m-[3rem_1.5rem_3rem_0] justify-center hover:bg-[#2f1c5279] hover:text-[#d48aff] hover:shadow-[0_0_20px_#ff91f6] hover:border-[#ffc3fa]  transition-[cubic-bezier(0.25_0.1_0.25_1.0)] duration-[.5s]'><FaLinkedin /></Link>

                </div>
                <Link href={"#"} download={"Samuel-Mayamba-CV"} className=' text-white inline-block p-[1.2rem_2.8rem] bg-[#c57d9b] rounded-[4rem] shadow-[0_0_10px_#f8b6ea] text-[1.6rem] no-underline tracking-widest font-[600]'>Télécharger mon cv</Link>
            </div>
        </section>
    )
}

export default Accueil