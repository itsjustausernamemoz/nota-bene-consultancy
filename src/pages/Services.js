import React from 'react';

const Services = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-4xl font-bold mb-12 text-center text-red-700">Our Services</h1>

        {/* Accounting and Financial Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold mb-6 text-black">Accounting and Financial Services</h2>
          <ul className="list-disc list-inside text-lg space-y-2">
            <li>Bookkeeping and Financial Reporting</li>
            <li>Tax Preparation and Planning</li>
            <li>Auditing and Assurance</li>
            <li>Payroll Services</li>
            <li>Financial Statements</li>
            <li>VAT Returns</li>
            <li>PAYE Returns</li>
          </ul>
        </div>

        {/* Business Consulting and Advisory */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold mb-6 text-black">Business Consulting and Advisory</h2>
          <ul className="list-disc list-inside text-lg space-y-2">
            <li>Business Registrations</li>
            <li>Business Plans</li>
            <li>Business Proposals</li>
            <li>Tender Documents Preparation</li>
          </ul>
        </div>

        {/* Printing, Stamps & Graphic Design */}
        <div>
          <h2 className="text-3xl font-semibold mb-6 text-black">Printing, Stamps & Graphic Design</h2>
          <ul className="list-disc list-inside text-lg space-y-2">
            <li>Copies (A0-A4)</li>
            <li>Printing and Binding of Reports</li>
            <li>Design and Layout of Annual Reports</li>
            <li>Company Stamps</li>
            <li>IT Services</li>
            <li>Internet Services</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Services;
