import ProjectBox from "@/app/components/projectBox";
import { FaHtml5 } from "react-icons/fa";

const Project = () => {
    return(
        <section>
            <h1 className=" text-center text-[4.5rem] font-[700] text-white mb-[2rem]">Mes projets</h1>
            <h5 className=" text-white text-center text-[1.6rem]">Vous pouvez retrouver tout mes project que j&apos;ai pu réaliser</h5>
            <div className=" flex flex-wrap">
                <ProjectBox
                image={"images/Capture d'écran 2024-04-19 182620.png"}
                icon={<FaHtml5/>}
                height={100}
                width={100}
                />
            </div>
        </section>
    );
}

export default Project;

