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
      <div className="min-h-screen flex flex-col">
        <header className="border-b border-gray-300">
          <div className="container mx-auto flex flex-wrap items-center justify-between p-4">
            <Link to="/" className="flex items-center space-x-3">
              <img src="https://i.ibb.co/7vV7Q7Z/nota-bene-logo.png" alt="Nota Bene Consultancy Logo" className="h-12 w-auto" />
              <span className="text-2xl font-bold text-red-700">Nota Bene Consultancy CC</span>
            </Link>
            <nav className="space-x-6 text-lg font-semibold hidden md:flex">
              <Link to="/" className="hover:underline text-red-700">Home</Link>
              <Link to="/about" className="hover:underline text-black">About Us</Link>
              <Link to="/services" className="hover:underline text-black">Services</Link>
              <Link to="/team" className="hover:underline text-black">Our Team</Link>
              <Link to="/references" className="hover:underline text-black">References</Link>
              <Link to="/contact" className="hover:underline text-black">Contact</Link>
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
          <div className="container mx-auto px-4 text-center">
            <p>&copy; 2024 Nota Bene Consultancy CC. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
