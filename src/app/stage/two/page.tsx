import StageLink from "@/app/components/stageLink";
import Image from "next/image";
import Link from "next/link";
import { FaLongArrowAltLeft } from "react-icons/fa";

export default function page() {
    return (
        <section>
            <h1 className=" text-white text-[4.5rem] font-[700] text-center">Mon stage en 2e année</h1>
            <h4 className=" text-[2.5rem] font-[500] text-white text-center">Pour Digiplace</h4>
            <p className=" text-center text-white text-[1.9rem] mb-[2rem]">Vous pouvez regarder mes compte rendus ici :</p>
            <StageLink />
            <div className=" m-[5rem_0]">
                <h5 className=" text-white underline text-[3rem] font-[600] max-lg:text-[2.5rem]">Objectif : </h5>
                <p className=" text-white text-[1.6rem] italic">Réaliser la refonte du site SolutionEscalier</p>
            </div>
            <div>
                <iframe className=" w-full h-[70rem] shadow-[0_0_20px_#ff91f6] rounded-[1.6rem]" src="https://www.solutionmonteescalier.com/" frameBorder="0"></iframe>
                <div className=" m-[5rem_0]">
                    <h5 className=" text-white italic text-[3rem] max-lg:text-[2.5rem] m-[5rem_0] font-[600]">Maquette du site : </h5>
                    <Image className=" shadow-[0_0_20px_#ff91f6] rounded-[1.6rem]" src={"/images/image (1) ff.png"} alt="Trello" width={1079} height={1919} />

                </div>
            </div>
            <div className=" m-[5rem_0]">
                <h5 className=" text-white underline text-[3rem] max-lg:text-[2.5rem] font-[600]">Collaborateur(trice) : </h5>
                <p className=" text-white text-[1.6rem] italic">- Ewan</p>
            </div>
            <div className=" m-[5rem_0]">
                <h5 className=" text-white underline text-[3rem] max-lg:text-[2.5rem] mb-[5rem] font-[600]">Outils fourni :</h5>
                <div className=" grid grid-cols-[repeat(4,_1fr)] gap-[2rem] max-lg:grid-cols-[repeat(1,_1fr)] mb-[3rem]">
                    <div className=" backdrop-blur-[16px] border border-solid border-[#fff] rounded-[1rem] p-[2rem] flex flex-col items-center">
                        <i><Image alt="Slack Logo" src={"/images/Slack_icon_2019.svg.png"} width={100} height={100} /></i>
                        <p className=" text-[2.5rem] text-white">Slack</p>
                    </div>
                    <div className=" backdrop-blur-[16px] border border-solid border-[#fff]  rounded-[1rem] p-[2rem] flex flex-col items-center">
                        <i><Image alt="Slack Logo" src={"/images/trello.svg"} width={100} height={100} /></i>
                        <p className=" text-[2.5rem] text-white">Trello</p>
                    </div>
                    <div className=" backdrop-blur-[16px] border border-solid border-[#fff]  rounded-[1rem] p-[2rem] flex flex-col items-center">
                        <i><Image alt="Slack Logo" src={"/images/144_Gitlab_logo_logos-512.webp"} width={100} height={100} /></i>
                        <p className=" text-[2.5rem] text-white">GitLab</p>
                    </div>
                </div>
                <h5 className=" text-white italic text-[2.5rem] max-lg:text-[2rem] m-[5rem_0] font-[600]">Trello :</h5>

                <Image className=" shadow-[0_0_20px_#ff91f6] rounded-[1.6rem]" src={"/images/plan de travaillle.png"} alt="Trello" width={1079} height={1919} />
                <h5 className=" text-white italic text-[2.5rem] max-lg:text-[2rem] m-[5rem_0] font-[600]">GitLab :</h5>

                <Image className=" shadow-[0_0_20px_#ff91f6] rounded-[1.6rem]" src={"/images/image (3).png"} alt="Trello" width={1079} height={1919} />



            </div>
            <div className=" border border-solid border-[#ffffff6a] m-[5rem]"></div>
            <div className=" m-[5rem_0]">
                <h5 className=" text-white underline text-[3rem] max-lg:text-[2.5rem] font-[600]">Mission 1 : </h5>
                <p className=" text-white text-[1.6rem] italic mb-[5rem]">System Login</p>
                <div className=" grid grid-cols-[repeat(2,_1fr)] gap-[2rem] max-lg:grid-cols-[repeat(1,_1fr)]">
                    <Image className=" shadow-[0_0_20px_#ff91f6] rounded-[1.6rem]" src={"/images/image.png"} alt="Trello" width={1079} height={1919} />
                    <Image className=" shadow-[0_0_20px_#ff91f6] rounded-[1.6rem]" src={"/images/image (4).png"} alt="Trello" width={1079} height={1919} />
                </div>
            </div>
            <div className=" border border-solid border-[#ffffff6a] m-[5rem]"></div>
            <div className=" m-[5rem_0]">
                <h5 className=" text-white underline text-[3rem] max-lg:text-[2.5rem] font-[600]">Mission 2 : </h5>
                <p className=" text-white text-[1.6rem] italic mb-[5rem]">La Homepage</p>
                <div className="grid grid-cols-[repeat(2,_1fr)] gap-[2rem] max-lg:grid-cols-[repeat(1,_1fr)]">
                    <Image className=" shadow-[0_0_20px_#ff91f6] rounded-[1.6rem]" src={"/images/image (2) ff.png"} alt="Trello" width={1079} height={1919} />
                    <Image className=" shadow-[0_0_20px_#ff91f6] rounded-[1.6rem]" src={"/images/Capture d'écran 2024-04-24 193024.png"} alt="Trello" width={1079} height={1919} />
                    <Image className=" shadow-[0_0_20px_#ff91f6] rounded-[1.6rem]" src={"/images/Capture d'écran 2024-04-24 193033.png"} alt="Code" width={1079} height={1919} />
                    <Image className=" shadow-[0_0_20px_#ff91f6] rounded-[1.6rem]" src={"/images/Capture d'écran 2024-04-24 193044.png"} alt="Code" width={1079} height={1919} />
                </div>
            </div>
            <div className=" border border-solid border-[#ffffff6a] m-[5rem]"></div>
            <div className=" m-[5rem_0]">
                <h5 className=" text-white underline text-[3rem] max-lg:text-[2.5rem] font-[600]">Mission 3 : </h5>
                <p className=" text-white text-[1.6rem] italic mb-[5rem]">Lier le Back-end et le Front-end</p>
                <div className="grid grid-cols-[repeat(2,_1fr)] gap-[2rem] max-lg:grid-cols-[repeat(1,_1fr)]">
                    <Image className=" shadow-[0_0_20px_#ff91f6] rounded-[1.6rem]" src={"/images/Capture d'écran 2024-04-24 193940.png"} alt="Trello" width={1079} height={1919} />
                    <Image className=" shadow-[0_0_20px_#ff91f6] rounded-[1.6rem]" src={"/images/Capture d'écran 2024-04-24 194027.png"} alt="Trello" width={1079} height={1919} />
                </div>
            </div>
            <div className=" border border-solid border-[#ffffff6a] m-[5rem]"></div>
            <div className=" m-[5rem_0]">
                <h5 className=" text-white underline text-[3rem] max-lg:text-[2.5rem] font-[600]">Mission 4 : </h5>
                <p className=" text-white text-[1.6rem] italic mb-[5rem]">Ajout des departements et villes de France</p>
                <div className="grid grid-cols-[repeat(2,_1fr)] gap-[2rem] max-lg:grid-cols-[repeat(1,_1fr)]">
                    <Image className=" shadow-[0_0_20px_#ff91f6] rounded-[1.6rem]" src={"/images/Capture d'écran 2024-04-24 194702.png"} alt="Trello" width={1079} height={1919} />
                    <Image className=" shadow-[0_0_20px_#ff91f6] rounded-[1.6rem]" src={"/images/Capture d'écran 2024-04-24 194714.png"} alt="Trello" width={1079} height={1919} />
                </div>
            </div>
            <div className=" border border-solid border-[#ffffff6a] m-[5rem]"></div>
            <div className=" m-[5rem_0]">
                <h5 className=" text-white underline text-[3rem] max-lg:text-[2.5rem] font-[600]">Mission 5 : </h5>
                <p className=" text-white text-[1.6rem] italic mb-[5rem]">La refactorisation du code</p>
                <div className="grid grid-cols-[repeat(2,_1fr)] gap-[2rem] max-lg:grid-cols-[repeat(1,_1fr)]">
                    <Image className=" shadow-[0_0_20px_#ff91f6] rounded-[1.6rem]" src={"/images/Capture d'écran 2024-04-24 195427.png"} alt="Trello" width={1079} height={1919} />
                    <Image className=" shadow-[0_0_20px_#ff91f6] rounded-[1.6rem]" src={"/images/Capture d'écran 2024-04-24 195500.png"} alt="Trello" width={1079} height={1919} />
                </div>
            </div>
            <div className=" border border-solid border-[#ffffff6a] m-[5rem]"></div>
            <div className=" m-[5rem_0]">
                <h5 className=" text-white underline text-[3rem] max-lg:text-[2.5rem] font-[600]">Mission 6 : </h5>
                <p className=" text-white text-[1.6rem] italic mb-[5rem]">CRUD en Front-End</p>
                <div className="grid grid-cols-[repeat(2,_1fr)] gap-[2rem] max-lg:grid-cols-[repeat(1,_1fr)]">
                    <Image className=" shadow-[0_0_20px_#ff91f6] rounded-[1.6rem]" src={"/images/Capture d'écran 2024-04-24 195642.png"} alt="Trello" width={1079} height={1919} />
                    <Image className=" shadow-[0_0_20px_#ff91f6] rounded-[1.6rem]" src={"/images/Capture d'écran 2024-04-24 195730.png"} alt="Trello" width={1079} height={1919} />
                </div>
            </div>
            <div className=" flex items-center justify-center mt-[2rem]">
                <Link className=" flex items-center gap-[1rem] p-[2rem] text-white bg-[#c184db] rounded-[1rem] text-[2rem] font-[600] hover:shadow-[0_0_20px_#ff91f6] transition-[cubic-bezier(0.25_0.1_0.25_1.0)] duration-[.5s]" href={"/stage"}><FaLongArrowAltLeft />Retour</Link>
            </div>
        </section>
    )
}