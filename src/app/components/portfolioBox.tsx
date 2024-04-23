import Image from "next/image"
import Link from "next/link"
import { BiLinkExternal } from "react-icons/bi";

const PortfolioBox = ({ titre, image, height, width, link }: { titre: string, image: string, height: number, width: number, link: string }) => {

    return (
        <div className=" relative rounded-[2rem]  shadow-[0_0_1rem_#4d4d4d] overflow-hidden flex group">
            <Image src={image} width={width} height={height} alt="Portfolio-image" className=" w-full transition-[cubic-bezier(0.25_0.1_0.25_1.0)] duration-[.5s] group-hover:scale-[1.1]" />
            <div className=" absolute bottom-0 left-0 w-full h-full bg-gradient-to-b from-[#0000001a] to-[#b78edb] flex justify-center items-center flex-col text-center p-[0_4rem] transition-[cubic-bezier(0.25_0.1_0.25_1.0)] duration-[.5s] translate-y-full group-hover:translate-y-0">
                <h4 className=" font-[600] text-[3rem] text-white">{titre}</h4>
                <p className=" text-[1.6rem] m-[.3rem_0_1rem] text-white">En savoir plus</p>
                <Link href={link} className=" inline-flex justify-center items-center w-[5rem] h-[5rem] bg-[#c57d9b] no-underline rounded-[50%] transition-[cubic-bezier(0.25_0.1_0.25_1.0)] duration-[.5s] hover:shadow-[0_0_20px_#ffbaf9]"><BiLinkExternal className=" text-[2rem] text-white" /></Link>
            </div>
        </div>
    )
}
export default PortfolioBox