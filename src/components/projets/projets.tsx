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
    <div>
        <div>
            {image ? (
            <img src={image} alt="Projet" className="w-full h-auto" />
            ) : (
            <div className="bg-gray-200 w-full h-64 flex items-center justify-center">
                <span>Aucune image disponible</span>
            </div>
            )}
        </div>
        <div>
            <h1>{titre}</h1>
            <p>{description}</p>

            <h3>PROJET INFO</h3>
            <hr />
            <div>
                <p>Year</p>
                <p>{annee}</p>
            </div>
            <hr className="stroke-grayColor"/>
            <div>
                <p>Role</p>
                <p>{role}</p>
            </div>
            <hr />
            <div>
                <p><a href={lienDuSite} target="_blank" rel="noopener noreferrer">Lien du site</a></p>            
                <p><a href={demoUrl} target="_blank" rel="noopener noreferrer">Voir sur Github</a></p>            
            </div>
        </div>
    </div>
  )
}

export default Projets