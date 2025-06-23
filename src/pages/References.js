import React from 'react';

const References = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-4xl font-bold mb-12 text-center text-black font-serif animate-fadeIn">Our References</h1>

        {/* Project Showcase */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold mb-6 text-black font-serif animate-fadeIn">Project Showcase</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border rounded p-6 shadow hover:shadow-lg transition transform hover:scale-105 duration-300">
              <h3 className="text-xl font-bold mb-2 font-serif">Project A</h3>
              <p className="mb-1 font-sans"><strong>Client:</strong> Client Name 1</p>
              <p className="mb-1 font-sans">
                <strong>Description:</strong> Provided comprehensive accounting and consulting services to support business growth.
              </p>
              <p className="font-sans"><strong>Year:</strong> 2022</p>
            </div>
            <div className="border rounded p-6 shadow hover:shadow-lg transition transform hover:scale-105 duration-300">
              <h3 className="text-xl font-bold mb-2 font-serif">Project B</h3>
              <p className="mb-1 font-sans"><strong>Client:</strong> Client Name 2</p>
              <p className="mb-1 font-sans">
                <strong>Description:</strong> Assisted with business registration and tender document preparation.
              </p>
              <p className="font-sans"><strong>Year:</strong> 2023</p>
            </div>
          </div>
        </div>

        {/* Other Clients */}
        <div>
          <h2 className="text-3xl font-semibold mb-6 text-black font-serif animate-fadeIn">Other Clients Served</h2>
          <ul className="list-disc list-inside text-lg space-y-2 font-sans">
            <li className="hover:text-gray-700 transition duration-300 ease-in-out cursor-pointer">Client A</li>
            <li className="hover:text-gray-700 transition duration-300 ease-in-out cursor-pointer">Client B</li>
            <li className="hover:text-gray-700 transition duration-300 ease-in-out cursor-pointer">Client C</li>
            <li className="hover:text-gray-700 transition duration-300 ease-in-out cursor-pointer">Client D</li>
            <li className="hover:text-gray-700 transition duration-300 ease-in-out cursor-pointer">Client E</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default References;
