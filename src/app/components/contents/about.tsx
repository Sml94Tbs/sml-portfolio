import Timeline from "@/app/components/timeline"

const About = () => {
    return (
        <section className=" flex flex-col justify-center items-center gap-[2rem] bg-transparent backdrop-blur-[15px]">
            <div className=" justify-between ml-[1.6rem]">
                <h2 className=" text-left text-[4.5rem] font-[700] text-white leading-1.2">A propos de Moi</h2>
                <h3 className=" text-[2.6rem] text-white font-[700]">Samuel Mayamba</h3>
                <p className=" text-white text-[1.6rem] m-[2rem_0_3rem]">Je suis âgé de 19 ans, actuellement étudiant en 2e année de BTS SIO option SLAM au Lycée polyvalent de Cachan. </p>
            </div>
            <div className=" flex justify-center items-center">
                <div className=" flex gap-x-[8rem] max-md:flex-col">
                    <div className=" relative ">
                        <h2 className=" text-[2.5rem] font-[700] text-white mb-[2rem] ">Parcours scolaire</h2>
                        <div className="border-l-[0.2px] border-solid">
                            <div className=" pl-[2.7rem] relative">
                                <Timeline
                                    titre={"Bac Professionel Commerce"}
                                    date={"2019-2022"}
                                    lieu={"Lycée Frédéric Mistral"}
                                />
                            </div>
                        </div>
                        <div className="border-l-[0.2px] border-solid">
                            <div className=" pl-[2.7rem] relative">
                                <Timeline
                                    titre={"BTS SIO Option SLAM"}
                                    date={"2022-2024"}
                                    lieu={"Lycée Polyvalent de Cachan"}
                                />
                            </div>
                        </div>
                    </div>
                    <div className=" relative ">
                        <h2 className=" text-[2.5rem] font-[700] text-white mb-[2rem] ">Parcours Professionel</h2>
                        <div className="border-l-[0.2px] border-solid">
                            <div className=" pl-[2.7rem] relative">
                                <Timeline
                                    titre={"ECEFRAM"}
                                    date={"2023"}
                                    lieu={""}
                                />
                            </div>
                        </div>
                        <div className="border-l-[0.2px] border-solid">
                            <div className=" pl-[2.7rem] relative">
                                <Timeline
                                    titre={"Sarl Digiplace France"}
                                    date={"2024"}
                                    lieu={"35 Av. Joffre, 94160 Saint-Mandé"}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About