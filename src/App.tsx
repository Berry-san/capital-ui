import React from 'react'
import Layout from './Pages/global/Layout'
import Home from './Pages/Home'
import { Route, Routes } from 'react-router'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
      </Route>
    </Routes>
  )
}

export default App
