import { NavLink } from "react-router";
import construcesarLogo from '../../../public/Construcesar-Logo.svg'
import { Button } from "../button/button";

export function Header() {
  return (
    <header className="flex w-full px-5 mt-2 h-16">
      <nav className="bg-gray-800 justify-between opacity-90 w-full px-10 py-3 flex items-center rounded-3xl">
        <div className="flex gap-10 items-center">
          <img src={construcesarLogo} alt="Construcesar Logo" className="w-[2.25rem] h-[2.25rem]" />
          <NavLink
          className='text-gray-100 font-extrabold text-sm p-2 rounded-lg'
          to="/"
          style={({ isActive }) => ({
            backgroundColor: isActive ? "#171717" : "transparent",
          })}
        >
          Início
        </NavLink>
          <NavLink
          className='text-gray-100 font-extrabold text-sm p-2 rounded-lg'
          to="/sobre"
          style={({ isActive }) => ({
            backgroundColor: isActive ? "#171717" : "transparent",
          })}
        >
          Sobre nós
        </NavLink>
          <NavLink
          className='text-gray-100 font-extrabold text-sm p-2 rounded-lg'
          to="/obras"
          style={({ isActive }) => ({
            backgroundColor: isActive ? "#171717" : "transparent",
          })}
        >
          Nossas Obras
        </NavLink>
        </div>
        <Button type="button" className="text-gray-800 rounded-full px-2 py-3 bg-[#EEF1EF] font-extrabold text-sm p-2">
          Faça seu orçamento
        </Button>
      </nav>
    </header>
  )
}