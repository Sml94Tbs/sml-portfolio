const CardBox = ({ icon, nom, level }: { icon: any, nom: string, level: string }) => {
    return (
        <div className=" flex flex-col items-center flex-[1_1_30rem] bg-[#5f3869] p-[3rem_2rem_4rem] rounded-[2rem] text-center border border-solid border-[#da7bff] transition-[cubic-bezier(0.25_0.1_0.25_1.0)] duration-[.5s] hover:border-[#ebb7ff] hover:scale-[1.02]">
            <i className=" text-[7rem] text-[#fdbaff]">{icon}</i>
            <h3 className=" text-[2.6rem] text-white font-[700]">{nom}</h3>
            <p className=" text-[1.6rem] text-white font-[500]">{level}</p>
        </div>
    )
}

export default CardBox;