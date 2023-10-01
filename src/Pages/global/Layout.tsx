import React from 'react'
import Sidebar from './Sidebar'
import Topbar from './Topbar'
import { Outlet } from 'react-router-dom'
import { useState } from 'react'

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  return (
    <div className="font-poppins">
      <div className="flex h-screen overflow-hidden ">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="relative flex flex-col flex-1 px-8 overflow-x-hidden overflow-y-auto bg-bluish-white">
          <Topbar />
          <main>
            <div className="mx-auto max-w-screen-2xl shadow-2">
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

export default Layout
