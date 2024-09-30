import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Footer from './components/footer'
import Home from './pages/Home'
import About from './pages/About'
import Booking from './pages/Booking'
import Contact from './pages/Contact'
import Offer from './pages/Offer'

function App() {
  return (

    <><><div>
      <Navbar />
    </div>

      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="offer" element={<Offer />} />
            <Route path="booking" element={<Booking />} />
          </Routes>
        </Router>
      </div></>
      
      
      <div>
        <Footer />
      </div></>
     
  )
}

export default App
