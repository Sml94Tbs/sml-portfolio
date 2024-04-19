import Image from "next/image"

const ProjectBox = ({icon, height, width, image}:{icon : any,height: number, width: number, image : string}) => {
    return(
        <div className=" flex flex-col   bg-[#5f3869] overflow-hidden rounded-[2rem] border border-solid border-[#da7bff] transition-[cubic-bezier(0.25_0.1_0.25_1.0)] duration-[.5s] hover:border-[#ebb7ff] hover:scale-[1.02]">
            <Image src={image} alt=" Project Image" width={width} height={height}/>
            <div className="p-[2rem]">
                <h4 className=" text-[2.5rem]">Site Bonbon</h4>
                <i>{icon}</i>
            </div>
        </div>
    )
}

export default ProjectBox;