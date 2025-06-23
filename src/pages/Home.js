import React from 'react';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-black text-white py-20">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 font-serif animate-fadeIn">
            Foster the emergence of national champions on sustainability.
          </h1>
          <p className="text-lg md:text-xl mb-8 font-sans">
            Nota Bene Consultancy CC is committed to empowering businesses with expert consulting, accounting, and advisory services.
          </p>
          <a
            href="/services"
            className="inline-block bg-white text-black font-bold py-3 px-8 rounded shadow hover:shadow-lg transform hover:scale-105 transition duration-300"
          >
            Explore Our Services
          </a>
        </div>
      </section>

      {/* About Our Company Intro */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold mb-6 text-center text-black font-serif animate-fadeIn">
            About Our Company
          </h2>
          <p className="text-lg leading-relaxed text-center max-w-3xl mx-auto font-sans">
            Nota Bene Consultancy CC is a 100% Namibian-owned registered business dedicated to providing professional consulting, accounting, and advisory services to SMEs. Our team of experts is committed to delivering excellence and fostering sustainable growth for our clients.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-center text-black font-serif animate-fadeIn">
            Our Main Service Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            <div className="p-6 border rounded shadow hover:shadow-lg transition transform hover:scale-105 duration-300">
              <h3 className="text-xl font-semibold mb-4 text-black font-sans">Accounting & Bookkeeping</h3>
              <p className="text-gray-700 font-sans">
                Comprehensive financial management including bookkeeping, tax preparation, auditing, payroll, and financial reporting.
              </p>
            </div>
            <div className="p-6 border rounded shadow hover:shadow-lg transition transform hover:scale-105 duration-300">
              <h3 className="text-xl font-semibold mb-4 text-black font-sans">Business Consulting & Advisory</h3>
              <p className="text-gray-700 font-sans">
                Expert advice on business registrations, planning, proposals, tender documents, and strategic growth.
              </p>
            </div>
            <div className="p-6 border rounded shadow hover:shadow-lg transition transform hover:scale-105 duration-300">
              <h3 className="text-xl font-semibold mb-4 text-black font-sans">Printing & Graphic Design</h3>
              <p className="text-gray-700 font-sans">
                Professional printing services, company stamps, report binding, and graphic design solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6 text-black font-serif animate-fadeIn">Our Mission</h2>
          <p className="text-lg leading-relaxed text-gray-800 font-sans">
            To foster the emergence of national champions on sustainability by providing expert consulting and accounting services that empower businesses to thrive responsibly.
          </p>
        </div>
      </section>
    </>
  );
};

export default Home;
