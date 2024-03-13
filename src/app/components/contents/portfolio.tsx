import PortfolioBox from "@/app/components/portfolioBox";

const Portfolio = () => {
    return (
        <section className=" bg-[#be6b6b15]">
            <h2 className=" text-center text-[4.5rem] font-[700] text-white mb-[4rem]">Mon Portfolio</h2>
            <h4 className=" text-[2.4rem] text-center font-[700] text-white mb-[2rem]">Sur cette section vous pourrez retrouver mes travaux</h4>
            <div className=" grid grid-cols-[repeat(3,_1fr)]">
                <PortfolioBox
                titre={"portfolio"}
                image={"#"}
                height={1800}
                width={1200}
                />
            </div>
        </section>
    );
}

export default Portfolio