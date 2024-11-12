import { FaGithub, FaLinkedinIn } from "react-icons/fa"
import Button from "../button/button"
import { Link } from "react-router-dom"
import Projets from "../projets/projets"

function Home() {
  return (
    <div className="w-full flex justify-center items-center flex-col">
    <div className="p-4 flex gap-10 items-center">
        <div className="md:w-[30rem] xl:w-[34rem]">
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
        <img src="https://img.freepik.com/photos-gratuite/portrait-femme-affaires-confiant-debout-ses-bras-croises_1098-20791.jpg?ga=GA1.1.46618866.1723015588&semt=ais_hybrid" alt="" className="md:w-[28rem] xl:w-[37rem] h-[30rem] rounded-lg"/>
    </div>
    <hr className="border-grayColor w-full"/> 
    <div className="p-4">
        <h1 className="font-sans font-bold text-3xl">Projets Réalisés</h1>
        <div>
            <Projets
                image="https://st3.depositphotos.com/14862852/17648/i/450/depositphotos_176480284-stock-photo-desktop-computer-blank-screen-digital.jpg"
                titre="DR Norman"
                description="Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                annee="2024"
                role="Developpeuse web"
                lienDuSite=""
                demoUrl=""
            />
        </div>
        <div className="flex justify-end">
            <Link to="/projects">
                <p className="py-8 font-bold border-b-2 border-white pb-1">Voir plus</p>
            </Link>
        </div>
    </div>
    <hr className="border-grayColor w-full"/> 
    <div className="flex gap-32">
        <h1 className="font-sans font-bold text-3xl">A propos de Moi</h1>
        <div className="w-[40rem]">
            <h2>Développeuse full-stack et web designer, j'ai un diplôme en pedagogie generale.</h2>
            <p className="font-paragraph font-extralight text-xs leading-loose pt-2"> Je suis développeuse full-stack et web designer, 
                à la recherche d'opportunités enrichissantes. Je me 
                concentre sur la création de solutions web accessibles 
                et intuitives. Passionnée par la résolution de problèmes, 
                j'explore actuellement ReactJS, Node.js et Figma. 
                En dehors du code, j’aime explorer la musique, 
                le design et découvrir de nouvelles technologies pour 
                enrichir mes compétences.</p>
                <p className="pb-8">
                    <a href="/about" className="text-greenColor">En savoir plus sur moi</a>
                    <hr className="border-greenColor w-40"/>
                </p>
        </div>
    </div>
    <hr className="border-grayColor w-full"/> 
    <div>

    </div>
    </div>
  )
}

export default Home