import VeilleBox from "@/app/components/veilleBox";
import { FaLongArrowAltLeft, FaPython } from "react-icons/fa";
import Link from "next/link";
import { SiRenpy } from "react-icons/si";
const Veille = () => {
    return (
        <>
        <div className=" grid grid-cols-[repeat(4,_1fr)] gap-[1.6rem] max-lg:grid-cols-[repeat(1,_1fr)]">
            <VeilleBox
                lien={"https://www.google.com/url?rct=j&sa=t&url=https://github.com/renpy/renpy/issues/5470&ct=ga&cd=CAAYEjIbOGQyZWNhOGZjYTViNzU4ZDpmcjpmcjpGUjpM&usg=AOvVaw0JoQxaAeYCW2cSCKnWFlja&_gl=1*13qyxbp*_ga*NzU3MTUyNTc1LjE3MDUyMzIzMjM.*_ga_B6XPBQ150N*MTcxMzg3NzI5Mi4xMy4xLjE3MTM4NzgxNTQuMC4wLjA."}
                titre={"text tag `axis` is not working and causes exception in history screen."}
                auteur={"GitHub"}
                text={"renpy / renpy Public. Notifications · Fork 651 · Star 4.5k · Code · Issues 217 ... Windows-10-10.0.19041 AMD64 Ren'Py 8.3.0.24041902+nightly ...x"} 
                logo={<><SiRenpy/></>}/>
            <VeilleBox
                lien={"https://www.google.com/url?rct=j&sa=t&url=https://itch.io/c/3254803/assets&ct=ga&cd=CAAYETIbOGQyZWNhOGZjYTViNzU4ZDpmcjpmcjpGUjpM&usg=AOvVaw2g2dKJ0CyNGiBVUM0mNSMY&_gl=1*1x67vsq*_ga*NzU3MTUyNTc1LjE3MDUyMzIzMjM.*_ga_B6XPBQ150N*MTcxMzg3NzI5Mi4xMy4xLjE3MTM4NzgxNTQuMC4wLjA."}
                titre={"Assets - Collection by Sparky"}
                auteur={"itch.io"}
                text={"A rounded GUI kit for your RenPy projects. NovelKit · Easy Ren'Py GUI. A simplified Ren'Py template for easy GUI coding. Feniks · Anekh. $7. Aeynit."} 
                logo={<><SiRenpy/></>}/>
            <VeilleBox
                lien={"https://www.google.com/url?rct=j&sa=t&url=https://itch.io/tools/newest/free/tag-renpy/tag-user-interface&ct=ga&cd=CAAYCzIbOGQyZWNhOGZjYTViNzU4ZDpmcjpmcjpGUjpM&usg=AOvVaw3d2AmUXIUIaqA4-9H4VpwJ&_gl=1*1pwtaxi*_ga*NzU3MTUyNTc1LjE3MDUyMzIzMjM.*_ga_B6XPBQ150N*MTcxMzg4OTg2OS4xNS4xLjE3MTM4OTAyNDkuMC4wLjA."}
                titre={"Latest free tools tagged Ren'Py and User Interface (UI) - itch.io"}
                auteur={"itch.io"}
                text={"Find tools tagged Ren'Py and User Interface (UI) like Mythos Forge Prototype, Image Tint Tool for Ren'Py [Addon] on itch.io, the indie game ..."} 
                logo={<><SiRenpy/></>}/>
            <VeilleBox
                lien={"https://www.google.com/url?rct=j&sa=t&url=https://itch.io/event/21515371&ct=ga&cd=CAAYBTIbOGQyZWNhOGZjYTViNzU4ZDpmcjpmcjpGUjpM&usg=AOvVaw2gZupY3nwRxxAx55SdgxVM&_gl=1*n3uo21*_ga*NzU3MTUyNTc1LjE3MDUyMzIzMjM.*_ga_B6XPBQ150N*MTcxMzg4OTg2OS4xNS4xLjE3MTM4OTAyNDkuMC4wLjA."}
                titre={"Kuraishimi Studio added Shooting Game Plugin for Ren'Py (FPS), Simple Quest System to ..."}
                auteur={"Itch.io"}
                text={"A Ren'Py phone framework. Elckarow · Apocalypse Asset Pack. Apocalyptic world characters, props and tilesets. cuddle bug."}
                logo={<><SiRenpy/></>}
            />
            <VeilleBox
            lien={"https://www.google.com/url?rct=j&sa=t&url=https://www.lemondeinformatique.fr/actualites/lire-l-esilv-ouvre-un-msc-en-programmation-et-traitement-des-donnees-93547.html&ct=ga&cd=CAAYAzIZODEzMjY2NWMwNTY4NmQ1OTpmcjpmcjpGUg&usg=AOvVaw0VPwVynj2AbUtdApuxvJtz&_gl=1*1qfb733*_ga*NzU3MTUyNTc1LjE3MDUyMzIzMjM.*_ga_B6XPBQ150N*MTcxMzg4OTg2OS4xNS4xLjE3MTM4OTE1MzMuMC4wLjA."}
            titre={"L'Esilv ouvre un Msc en programmation et traitement des données - Le Monde Informatique"}
            auteur={"Le Monde Informatique"}
            text={"Pour cela, les cours de 1ere année proposés en français enseignent la programmation orientée objet, le développement en Python, DevOps et l'ingénierie ..."}
            logo={<><FaPython /></>}
            />
            <VeilleBox
            lien={"https://www.google.com/url?rct=j&sa=t&url=https://www.lesnumeriques.com/intelligence-artificielle/grok-l-ia-generative-d-elon-musk-peut-desormais-comprendre-et-analyser-les-images-n220813.html&ct=ga&cd=CAAYADIZODEzMjY2NWMwNTY4NmQ1OTpmcjpmcjpGUg&usg=AOvVaw2KKp4qBAIf2oN8LyqhBtIk&_gl=1*1591bhi*_ga*NzU3MTUyNTc1LjE3MDUyMzIzMjM.*_ga_B6XPBQ150N*MTcxMzg4OTg2OS4xNS4xLjE3MTM4OTE1MzMuMC4wLjA."}
            titre={"Grok : l'IA générative d'Elon Musk peut désormais comprendre et analyser les images"}
            auteur={"Les Numériques"}
            text={"xAI dévoile aussi divers exemples montrant que la version 1.5V de Grok arrive à : Transformer un diagramme en code Python ;; Calculer les calories ..."}
            logo={<><FaPython /></>}
            />
            
        </div>
        <div className=" flex items-center justify-center mt-[2rem]">
        <Link className=" flex items-center gap-[1rem] p-[2rem] text-white bg-[#c184db] rounded-[1rem] text-[2rem] font-[600] hover:shadow-[0_0_20px_#ff91f6] transition-[cubic-bezier(0.25_0.1_0.25_1.0)] duration-[.5s]" href={"/#portfolio"}><FaLongArrowAltLeft />Retour</Link>
    </div>
        </>
    )
}

export default Veille;
