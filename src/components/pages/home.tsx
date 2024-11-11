import { FaGithub, FaLinkedinIn } from "react-icons/fa"
import Button from "../button/button"
import { Link, Outlet } from "react-router-dom"

function Home() {
  return (
    <div className="w-full flex justify-center items-center flex-col">
    <div className="p-4 flex gap-10 items-center">
        <div className="w-[34rem]">
            <div>
                <p className="font-sans font-bold text-3xl">Bonjour, Je suis</p>
                <p className="font-sans font-bold text-3xl pt-2">Antoinette Belebele.</p>
                <p className="font-paragraph font-extralight text-xs leading-loose pt-2">
                Développeuse web fullstack et web designer passionnée par la création de solutions 
                innovantes et adaptées aux besoins des utilisateurs. Avec un œil attentif 
                aux détails et un souci constant de la performance, je conçois des applications 
                qui allient esthétisme et fonctionnalité pour offrir une expérience utilisateur optimale.</p>
            </div>
            <div className="flex gap-4 pt-6">
                <Button /> 
                <div className="w-10 h-10 rounded-full bg-grayColor flex items-center justify-center">
                    <FaLinkedinIn className="text-greenColor"/>
                </div>
                <div className="w-10 h-10 rounded-full bg-grayColor flex items-center justify-center">
                    <FaGithub className="text-greenColor"/>
                </div>
            </div>
        </div>
        <img src="https://img.freepik.com/photos-gratuite/portrait-femme-affaires-confiant-debout-ses-bras-croises_1098-20791.jpg?ga=GA1.1.46618866.1723015588&semt=ais_hybrid" alt="" className="w-[37rem] h-[38rem] rounded-lg"/>
    </div>
    <hr className="border-grayColor w-full"/> 
    <div className="p-4">
        <h1 className="font-sans font-bold text-3xl">Projets Réalisés</h1>
        <div className="flex gap-3 items-center">
        <Link to="/projets-developpement">
            <p className="font-paragraph font-extralight text-xs">Projets de Développement Web</p>
        </Link>
            |
        <Link to="/projets-design">
            <p className="font-paragraph font-extralight text-xs">Projets de Web Design</p>
        </Link>
        </div>
        <div>
            <Outlet />
        </div>
    </div>
    <hr className="border-grayColor w-full"/> 
    </div>
  )
}

export default Home