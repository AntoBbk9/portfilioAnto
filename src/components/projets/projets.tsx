import { FaGithub } from "react-icons/fa";
import { MdOutlineArrowOutward } from "react-icons/md";

interface ProjetProps {
    image: string;
    titre: string;
    description: string;
    annee: string;
    role: string;
    lienDuSite: string;
    demoUrl: string;
}
function Projets({ image, titre, description, annee, role, lienDuSite, demoUrl } : ProjetProps) {
  return (
    <div className="flex gap-10 items-center">
        <div className="bg-grayColor md:w-[28rem] xl:w-[37rem] md:h-[28rem] xl:h-[37rem] flex justify-center items-center rounded-xl">
            {image ? (
            <img src={image} alt="Projet" className="md:w-[24rem] xl:w-[30rem] md:h-[18rem] xl:h-[21rem] rounded-xl" />
            ) : (
            <div className="bg-gray-200 w-full h-64 flex items-center justify-center">
                <span className="text-black">Aucune image disponible</span>
            </div>
            )}
        </div>
        <div className="md:w-[30rem] xl:w-[36rem]">
            <h1 className="font-paragraph text-xl">{titre}</h1>
            <p className="font-paragraph font-extralight text-xs leading-loose pt-6">{description}</p>

            <h3 className="pt-6 pb-4 font-light text-xs">PROJET INFO</h3>
            <hr className="border-grayColor" />
            <div className="flex justify-between py-4">
                <p className="font-paragraph font-extralight text-xs">Year</p>
                <p className="font-paragraph font-extralight text-xs">{annee}</p>
            </div>
            <hr className="border-grayColor"/>
            <div className="flex justify-between py-4">
                <p className="font-paragraph font-extralight text-xs">Role</p>
                <p className="font-paragraph font-extralight text-xs">{role}</p>
            </div>
            <hr className="border-grayColor"/>
            <div className="flex gap-6 pt-6">
            <p className=" text-greenColor">
                <a href={lienDuSite} className="flex gap gap-1 items-center">
                    <span>Lien du site</span>
                    <MdOutlineArrowOutward className="inline"/>
                </a>
                <hr className="border-greenColor"/>
            </p>                
            <p className=" text-greenColor">
                <a href={demoUrl} className="flex gap gap-1 items-center">
                    <span>Voir sur Github</span>
                    <FaGithub className="inline"/>
                </a>
                <hr className="border-greenColor"/>
            </p>            
            </div>
        </div>
    </div>
  )
}

export default Projets