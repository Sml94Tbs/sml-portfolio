import Image from "next/image";
import Link from "next/link";

const StageCard = ({link, image, width, height, titre }: { link:string, image: string, width: number, height: number, titre: string }) => {
    return (
        <Link href={link}>
            <div className=" overflow-hidden flex flex-col rounded-[2rem] border border-solid border-[#da7bff] transition-[cubic-bezier(0.25_0.1_0.25_1.0)] duration-[.5s] hover:border-[#ebb7ff] hover:scale-[1.02]">
            <Image alt="Stage Image" src={image} width={width} height={height} />
            <div className=" p-[2rem_3rem] bg-[#5f3869]">
                <h4 className=" text-white text-[2.5rem] font-[600]">{titre}</h4>
            </div>
        </div>
        </Link>
    )
}

export default StageCard;