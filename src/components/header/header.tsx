import { Link } from "react-router-dom"

function Header() {
  return (
    <div className="flex justify-between p-4">
        <h1 className="font-sans text-[16px] font-bold">ANTOINETT BELEBELE</h1>
        <div className="flex gap-10">
          <Link to='/'>
            <p className="font-menu font-light">Accueil</p>
          </Link>
          <Link to='/about'>
            <p className="font-menu font-light">A propos</p>
          </Link>
          <p className="font-menu font-light">Contact</p>
        </div>
    </div>
  )
}

export default Header