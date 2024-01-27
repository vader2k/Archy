import { navlinks } from "../constants/data"
import logo from '../assets/logo.png'
import { Link } from "react-router-dom"


const Navbar = () => {
  return (
    <div className="w-full">
      <nav className="flex items-center justify-between max-w-7xl m-auto py-5 border-b border-gray-200">
        <div>
          <img src={logo} className="w-[130px] object-contain"/>
        </div>

        <div className="flex items-center gap-6 font-bold">
        {
          navlinks.map((item) => (
            <Link key={item.id} to={item.path}>
              <div>
                {item.title}
              </div>
            </Link>
          ))
        }
        </div>
      </nav>
    </div>
  )
}

export default Navbar