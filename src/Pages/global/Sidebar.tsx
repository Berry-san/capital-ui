import React, { useState } from 'react'
// import { NavLink } from 'react-router-dom'
import { Menus } from '../../constants'
import right from '../../assets/svgs/right.svg'
import { useLocation } from 'react-router-dom'

interface SidebarProps {
  sidebarOpen: boolean
  setSidebarOpen: (open: boolean) => void
}

const Sidebar: React.FC<SidebarProps> = ({ sidebarOpen, setSidebarOpen }) => {
  const location = useLocation()
  const [open, setOpen] = useState<boolean>(false)

  return (
    <div
      className={`relative overflow-y-auto ${
        open ? 'w-72' : 'w-20'
      } h-screen duration-300 bg-white shadow pt-8`}
    >
      <aside className=" flex max-h-screen flex-col overflow-y-hidden mx-5">
        <div className="flex gap-x-4 items-center mb-8">
          <span className="w-10 h-10 px-5 duration-500 rounded-full cursor-pointer bg-gray-300"></span>
          <p
            className={`text-black origin-left font-medium text-xl duration-300 ${
              !open && 'scale-0'
            }`}
          >
            Hello
          </p>
        </div>
        <ul className="space-y-6">
          {Menus.map((menu, index) => (
            <li
              key={index}
              className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-bluish-white active:bg-slate-100 rounded-md hover:text-[#1d4ed8] ${
                location.pathname === menu.path
                  ? 'bg-bluish-white active:bg-slate-100'
                  : ''
              }`}
            >
              <img src={menu.src} className="w-6 h-6" alt="" />
              <span
                className={`${!open && 'hidden'} 'origin-left duration-200`}
              >
                {menu.title}
              </span>
            </li>
          ))}
        </ul>
        <img
          src={right}
          className={`p-3 w-10 h-20 cursor-pointer ${open && 'rotate-180'}`}
          alt=""
          onClick={() => {
            setOpen(!open)
          }}
        />
      </aside>
    </div>
  )
}

export default Sidebar
