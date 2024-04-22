import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
    return (
        <section className="bg-[#d69cca57]">
            <h2 className="text-[4.5rem] font-[700] leading-[1.2] mb-[5rem] text-center text-white">Contact</h2>
            <div className=" flex flex-col flex-wrap gap-[2rem]">
                <div className="">
                    <Link href={"https://github.com/Sml94Tbs"}>
                        <div className=" flex flex-wrap p-[2rem] border border-solid border-[#da7bff] transition-[cubic-bezier(0.25_0.1_0.25_1.0)] duration-[.5s] hover:border-[#ebb7ff] hover:scale-[1.02] items-center rounded-[2rem] bg-[#5f3869]">
                            <h4 className=" text-[3rem] text-white mr-[2rem]">Github</h4>
                            <i className=" text-[3rem] text-white"><FaGithub/></i>
                        </div>
                    </Link>
                </div>
                <div className="">
                    <Link href={"https://www.linkedin.com/in/samuel-mayamba-85202a271/"}>
                        <div className=" flex flex-wrap p-[2rem] border border-solid border-[#da7bff] transition-[cubic-bezier(0.25_0.1_0.25_1.0)] duration-[.5s] hover:border-[#ebb7ff] hover:scale-[1.02] items-center rounded-[2rem] bg-[#5f3869]">
                            <h4 className=" text-[3rem] text-white mr-[2rem]">Linkedin</h4>
                            <i className=" text-[3rem] text-white"><FaLinkedin/></i>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default Contact;