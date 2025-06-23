import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Team from './pages/Team';
import References from './pages/References';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white text-black font-sans">
        <header className="border-b border-gray-300 bg-white shadow-md sticky top-0 z-50">
          <div className="container mx-auto flex flex-wrap items-center justify-between p-4">
            <Link to="/" className="flex items-center space-x-3">
              <img
                src="https://i.ibb.co/3WqZq7Z/NBC-Logo.png"
                alt="Nota Bene Consultancy Logo"
                className="h-12 w-auto"
              />
              <span className="text-2xl font-extrabold text-black tracking-wide font-serif">Nota Bene Consultancy CC</span>
            </Link>
            <nav className="space-x-6 text-lg font-semibold hidden md:flex">
              <Link to="/" className="hover:underline hover:text-gray-700 transition duration-300 ease-in-out">Home</Link>
              <Link to="/about" className="hover:underline hover:text-gray-700 transition duration-300 ease-in-out">About Us</Link>
              <Link to="/services" className="hover:underline hover:text-gray-700 transition duration-300 ease-in-out">Services</Link>
              <Link to="/team" className="hover:underline hover:text-gray-700 transition duration-300 ease-in-out">Our Team</Link>
              <Link to="/references" className="hover:underline hover:text-gray-700 transition duration-300 ease-in-out">References</Link>
              <Link to="/contact" className="hover:underline hover:text-gray-700 transition duration-300 ease-in-out">Contact</Link>
            </nav>
          </div>
        </header>

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/team" element={<Team />} />
            <Route path="/references" element={<References />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <footer className="bg-black text-white py-8 mt-16">
          <div className="container mx-auto px-4 text-center font-serif">
            <p className="text-sm">&copy; 2024 Nota Bene Consultancy CC. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
