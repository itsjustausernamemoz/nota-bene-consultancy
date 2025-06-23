import React from 'react';

const Services = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-4xl font-bold mb-12 text-center text-black font-serif animate-fadeIn">Our Services</h1>

        {/* Accounting and Financial Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold mb-6 text-black font-serif animate-fadeIn">Accounting and Financial Services</h2>
          <ul className="list-disc list-inside text-lg space-y-2 font-sans">
            <li className="hover:text-gray-700 transition duration-300 ease-in-out cursor-pointer">Bookkeeping and Financial Reporting</li>
            <li className="hover:text-gray-700 transition duration-300 ease-in-out cursor-pointer">Tax Preparation and Planning</li>
            <li className="hover:text-gray-700 transition duration-300 ease-in-out cursor-pointer">Auditing and Assurance</li>
            <li className="hover:text-gray-700 transition duration-300 ease-in-out cursor-pointer">Payroll Services</li>
            <li className="hover:text-gray-700 transition duration-300 ease-in-out cursor-pointer">Financial Statements</li>
            <li className="hover:text-gray-700 transition duration-300 ease-in-out cursor-pointer">VAT Returns</li>
            <li className="hover:text-gray-700 transition duration-300 ease-in-out cursor-pointer">PAYE Returns</li>
          </ul>
        </div>

        {/* Business Consulting and Advisory */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold mb-6 text-black font-serif animate-fadeIn">Business Consulting and Advisory</h2>
          <ul className="list-disc list-inside text-lg space-y-2 font-sans">
            <li className="hover:text-gray-700 transition duration-300 ease-in-out cursor-pointer">Business Registrations</li>
            <li className="hover:text-gray-700 transition duration-300 ease-in-out cursor-pointer">Business Plans</li>
            <li className="hover:text-gray-700 transition duration-300 ease-in-out cursor-pointer">Business Proposals</li>
            <li className="hover:text-gray-700 transition duration-300 ease-in-out cursor-pointer">Tender Documents Preparation</li>
          </ul>
        </div>

        {/* Printing, Stamps & Graphic Design */}
        <div>
          <h2 className="text-3xl font-semibold mb-6 text-black font-serif animate-fadeIn">Printing, Stamps & Graphic Design</h2>
          <ul className="list-disc list-inside text-lg space-y-2 font-sans">
            <li className="hover:text-gray-700 transition duration-300 ease-in-out cursor-pointer">Copies (A0-A4)</li>
            <li className="hover:text-gray-700 transition duration-300 ease-in-out cursor-pointer">Printing and Binding of Reports</li>
            <li className="hover:text-gray-700 transition duration-300 ease-in-out cursor-pointer">Design and Layout of Annual Reports</li>
            <li className="hover:text-gray-700 transition duration-300 ease-in-out cursor-pointer">Company Stamps</li>
            <li className="hover:text-gray-700 transition duration-300 ease-in-out cursor-pointer">IT Services</li>
            <li className="hover:text-gray-700 transition duration-300 ease-in-out cursor-pointer">Internet Services</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Services;
