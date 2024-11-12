import { Link, Outlet } from "react-router-dom"

function Projects() {
  return (
    <div>
         <div className="flex gap-3 items-center">
        <Link to="projects-development">
            <p className="font-paragraph font-extralight text-xs">Projets de Développement Web</p>
        </Link>
            |
        <Link to="projects-design">
            <p className="font-paragraph font-extralight text-xs">Projets de Web Design</p>
        </Link>
        </div>
        <div>
            <Outlet />
        </div>
    </div>
  )
}

export default Projects