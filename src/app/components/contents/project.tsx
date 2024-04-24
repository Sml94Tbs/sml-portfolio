import ProjectBox from "@/app/components/projectBox";
import Link from "next/link";
import { FaHtml5, FaLaravel, FaLongArrowAltLeft, FaPhp,FaCss3, FaBootstrap, FaAndroid } from "react-icons/fa";
import { SiCsharp } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";

const Project = () => {
    return (
        <section>
            <h1 className=" text-center text-[4.5rem] font-[700] text-white mb-[2rem]">Mes projets</h1>
            <h5 className=" text-white text-center text-[1.6rem] mb-[3rem]">Vous pouvez retrouver tout mes project que j&apos;ai pu réaliser</h5>
            <div className=" grid grid-cols-[repeat(3,_1fr)] items-center gap-[2.5rem] max-lg:grid-cols-[repeat(2,_1fr)] max-sm:grid-cols-[1fr]">
                <ProjectBox
                    project={"Boostrap Website"}
                    image={"/images/Capture d'écran 2024-04-22 193402.png"}
                    icon={<><FaHtml5 /><FaCss3 /> <FaBootstrap /></>}
                    height={1919}
                    width={1079}
                    link={"https://github.com/Sml94Tbs/Bootstrap-Website"}
                />
                <ProjectBox
                    project={"Site Bonbon"}
                    image={"/images/Capture d'écran 2024-04-19 182620.png"}
                    icon={<><FaHtml5 /><FaCss3 /> <FaPhp /></>}
                    height={1919}
                    width={1079}
                    link={"#"}
                />
                <ProjectBox
                    project={"Portfolio V1 HTML Static"}
                    image={"/images/Capture d'écran 2024-04-22 193914.png"}
                    icon={<><FaHtml5 /><FaCss3 /> <IoLogoJavascript /></>}
                    height={1919}
                    width={1079}
                    link={"#"}
                />
                <ProjectBox
                    project={"TP-Banque"}
                    image={"/images/nbc8i22ia3091.png"}
                    icon={<><SiCsharp /></>}
                    height={1919}
                    width={1079}
                    link={"https://github.com/Sml94Tbs/TP-BANQUE"}
                />
                <ProjectBox
                    project={"Projet Gestion École"}
                    image={"/images/Capture d'écran 2023-11-20 222514.png"}
                    icon={<><FaHtml5 /><FaCss3 /> <FaPhp />  <FaLaravel /></>}
                    height={1919}
                    width={1079}
                    link={"https://github.com/Sml94Tbs/Laravel-Project---Gestion-Ecole"}
                />
                <ProjectBox
                    project={"Projet SicilyLines"}
                    image={"/images/sicily-C.png"}
                    icon={<><SiCsharp /></>}
                    height={1919}
                    width={1079}
                    link={"https://github.com/namluan/SicilyLines-C"}
                />
                <ProjectBox
                    project={"Projet SicilyLines"}
                    image={"/images/Capture d'écran 2024-04-15 231535.png"}
                    icon={<><FaHtml5 /><FaPhp />  <FaLaravel /></>}
                    height={1919}
                    width={1079}
                    link={"https://github.com/Sml94Tbs/sicily"}
                />
                <ProjectBox
                    project={"Projet Android Login"}
                    image={"/images/android-digital-art-8k-wallpaper-uhdpaper.com-910@0@f.jpg"}
                    icon={<><FaAndroid /></>}
                    height={1919}
                    width={1079}
                    link={"https://github.com/Sml94Tbs/sicily"}
                />
            </div>
            <div className=" flex items-center justify-center mt-[2rem]">
                <Link className=" flex items-center gap-[1rem] p-[2rem] text-white bg-[#c184db] rounded-[1rem] text-[2rem] font-[600] hover:shadow-[0_0_20px_#ff91f6] transition-[cubic-bezier(0.25_0.1_0.25_1.0)] duration-[.5s]" href={"/#portfolio"}><FaLongArrowAltLeft />Retour</Link>
            </div>
        </section>
    );
}

export default Project;

