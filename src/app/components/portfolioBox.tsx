import Image from "next/image"

const PortfolioBox = ({ titre, image, height, width }: { titre: string, image: string, height: number, width: number }) => {
    return (
        <div className=" relative rounded-[2rem]  shadow-[0_0_1rem_#4d4d4d] overflow-hidden flex group">
            <Image src={image} width={width} height={height} alt="Portfolio-image" className=" w-full transition-[cubic-bezier(0.25_0.1_0.25_1.0)] duration-[.5s] group-hover:scale-[1.1]" />
            
        </div>
    )
}
export default PortfolioBox