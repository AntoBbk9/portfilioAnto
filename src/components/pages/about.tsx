import { FaGithub, FaLinkedinIn } from "react-icons/fa"
import Button from "../button/button"

function About() {
  return (
    <div>
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
              enrichir mes compétences.
          </p>
          <div className="flex gap-4 pt-6">
            <Button text="Télécharger le CV"/> 
            <div className="w-10 h-10 rounded-full bg-grayColor flex items-center justify-center">
              <a href="https://www.linkedin.com/in/antoinette-belebele-443943260/"><FaLinkedinIn className="text-greenColor"/></a>
            </div>
            <div className="w-10 h-10 rounded-full bg-grayColor flex items-center justify-center">
                <a href="https://github.com/AntoBbk9"><FaGithub className="text-greenColor"/></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About