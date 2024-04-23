import Veille from "@/app/components/contents/veille"

export default function veille(){
    return(
        <section>
            <h1 className=" text-center font-[700] mb-[4rem] text-[4.5rem] text-white">Ma veille technoligique</h1>
            <p className=" text-center text-[500] mb-[2rem] text-white">Sur Ren&apos;py (Python)</p>
            <Veille/>
        </section>
    )
}