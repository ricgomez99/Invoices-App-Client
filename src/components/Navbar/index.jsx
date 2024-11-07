import { Link } from 'react-router-dom'
import logo from './aimedge_logo.jpg'

export default function Navbar() {
  const navLinks = [
    { path: '/', name: 'Home' },
    { path: '/login', name: 'Login' },
    { path: '/register', name: 'Register' },
  ]
  return (
    <nav className=" bg-white w-[100%] justify-center absolute items-center max-w-[100%] flex flex-col h-20 shadow-md">
      <div className="flex flex-row w-[100%] max-w-[800px] justify-between items-center">
        <div className="w-11 h-11">
          <img
            alt="AIMED EDGE LOGO"
            src={logo}
            className="w-[100%] h-[100%] object-contain"
          />
        </div>
        <div className="flex flex-col">
          <ul className="flex flex-row justify-between gap-2">
            {navLinks.map((link) => (
              <li
                className="list-none text-blue-gray-300 font-semibold text-[16px] cursor-pointer hover:text-blue-gray-100"
                key={link.name}
              >
                <Link to={link.path}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}
