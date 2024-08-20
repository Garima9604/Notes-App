import React, { Fragment } from 'react'
import Navbar from './components/mainNavigation/Navbar'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Home from './components/pages/Home'
import New from './components/pages/New'
import Edit from './components/pages/Edit'
// import Note from './components/pages/Note'
import Show from './components/pages/Show'

function App() {
  return (
    <BrowserRouter>
      <Fragment>
        <Navbar />
        <Routes>
          {/* <Route path="/" element={<Note />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/new" element={<New />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/note/:id" element={<Show />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  )
}

export default App