import React from "react"
import { Routes, Route } from 'react-router-dom'
import Header from "./Header"
import Home from "./Home"
import Footer from "./Footer"
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/main.css'

function App() {
// mobile menu button toggle
const [menu_active, set_menu_active] = React.useState(false)

function toggle_mobile_menu_toggle() {
  console.log(menu_active)
  set_menu_active(!menu_active)
}


  return (
    <>  
        <Header
          handle_mobile_menu = {()=> toggle_mobile_menu_toggle}
          show_mobile_menu = {menu_active}
        />

          <div className="main container-fluid px-0">
            <Routes>
              <Route path="/" element={
                <Home/>
              }/>
              <Route path='/about' element={
                  <h1>About</h1>
                }/>
              <Route path="/contact" element={
                <h1>Contact</h1>
              } />
            </Routes>
          </div>

          <Footer />
    </>
  )
}
 
export default App
