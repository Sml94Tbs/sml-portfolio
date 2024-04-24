import Link from "next/link";
import { FaCloudUploadAlt } from "react-icons/fa";

const StageLink = () => {
    return (
        <div className=" flex justify-center items-center">
            <Link target="_blank" className=" flex gap-[1rem] rounded-[1rem] bg-[#c57d9bc3] backdrop-blur-[16px] justify-center items-center p-[1rem_2rem]  border border-solid border-[#da7bff] transition-[cubic-bezier(0.25_0.1_0.25_1.0)] duration-[.5s] hover:border-[#ebb7ff] hover:scale-[1.02]" href={"https://drive.google.com/drive/folders/1E-qEONhze1NXxn28OzfJNf96jKCmPGvR?usp=sharing"}>
                <FaCloudUploadAlt className=" text-[2.5rem] text-white" />
                <h3 className=" text-white text-[2.5rem] font-[600]">Lien</h3>
            </Link>
        </div>
    )
}

export default StageLink;