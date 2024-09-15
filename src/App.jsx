import React from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from "./Header"

function App() {

  return (
    <>  
      <Router basename="/md-portfolio-2">
        <Header/>
          <div className="main">
            <Routes>
              <Route path="/home" element={
                <h1>Home</h1>
              }/>
              <Route path='/about' element={
                  <h1>About</h1>
                }/>
              <Route path="/contact" element={
                <h1>Contact</h1>
              } />
            </Routes>
          </div>
      </Router>
    </>
  )
}
 
export default App
