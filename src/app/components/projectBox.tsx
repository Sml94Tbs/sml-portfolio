import Image from "next/image"
import Link from "next/link";

const ProjectBox = ({project,icon, height, width, image, link}:{project: string,icon : any,height: number, width: number, image : string, link: any}) => {
    return(
        <Link target="_blank" href={link}>
        <div className=" flex flex-col bg-[#5f3869] overflow-hidden rounded-[2rem] border border-solid border-[#da7bff] transition-[cubic-bezier(0.25_0.1_0.25_1.0)] duration-[.5s] hover:border-[#ebb7ff] hover:scale-[1.02]">
            <Image src={image} alt=" Project Image" width={width} height={height} className=" w-full"/>
            <div className="p-[2rem]">
                <h4 className=" text-[2.5rem] font-[600] text-[#fdbaff]">{project}</h4>
                <i className=" flex text-[3rem] text-[#fdbaff] gap-[1.6rem]">{icon}</i>
            </div>
        </div>
        </Link>
    )
}

export default ProjectBox;