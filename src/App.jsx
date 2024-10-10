import React from "react"
import { Routes, Route } from 'react-router-dom'
import data from './data'
import Experience from "./Experience"
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


const Image_src = "https://raw.githubusercontent.com/mdAlamin1964/md-portfolio-2/refs/heads/main/src/assets/"
const work_experience_items = data.map((n,i) => {
  if (i <= 3) {
    return (
      <div className="image-box-blurb">
          <a href={n.url} target="_blank">
              <img src={Image_src+n.image} alt={n.image} />
              <div className="info">
                  <h3 className="h3-title">{n.name}</h3>
                  <p className="paragraph-1">
                    {n.paragraph}
                  </p>
                  <p className="paragraph-1-gray">{n.lang}</p>
              </div>

              <div className="icon-bottom">
                  ↗
              </div>
          </a>
      </div>
    )
  }
});


const work_experience_all_items_react = data.map((n) => {
    return (
      <div className="image-box-blurb">
          <a href={n.url} target="_blank">
              <img src={Image_src+n.image} alt={n.image} />
              <div className="info">
                  <h3 className="h3-title">{n.name}</h3>
                  <p className="paragraph-1">
                    {n.paragraph}
                  </p>
                  <p className="paragraph-1-gray">{n.lang}</p>
              </div>

              <div className="icon-bottom">
                  ↗
              </div>
          </a>
      </div>
    )
  }
);





  return (
    <>  
        <Header
          handle_mobile_menu = {()=> toggle_mobile_menu_toggle}
          show_mobile_menu = {menu_active}
        />

          <div className="main container-fluid px-0">
            <Routes>
              <Route path="/" element={
                <Home
                  work_experience_items = {work_experience_items}
                />
              }/>
              <Route path='/experience' element={
                  <Experience 
                    item_react = {work_experience_all_items_react}
                  />
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
