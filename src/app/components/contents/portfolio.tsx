import PortfolioBox from "@/app/components/portfolioBox";

const Portfolio = () => {
    return (
        <section className=" bg-[#be6b6b15]">
            <h2 className=" text-center text-[4.5rem] font-[700] text-white mb-[4rem] max-lg:mb-[3rem]">Mon Portfolio</h2>
            <h4 className=" text-[2.4rem] text-center font-[700] text-white mb-[2rem]">Sur cette section vous pourrez retrouver mes travaux</h4>
            <div className=" grid grid-cols-[repeat(3,_1fr)] items-center gap-[2.5rem] max-lg:grid-cols-[repeat(2,_1fr)] max-sm:grid-cols-[1fr]">
                <PortfolioBox
                    titre={"Ma veille technologique"}
                    image={"/images/veille-renpy.jpg"}
                    height={1890}
                    width={1417}
                    link={"/"}
                />
                <PortfolioBox
                    titre={"Mes projets"}
                    image={"/images/93715-Tsukihime.jpg"}
                    height={1890}
                    width={1417}
                    link={"/"}
                />
                <PortfolioBox
                    titre={"Mes stages"}
                    image={"/images/stage-image.jpg"}
                    height={1890}
                    width={1417}
                    link={"/"}
                />
            </div>
        </section>
    );
}

export default Portfolio