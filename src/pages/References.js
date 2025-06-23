import React from 'react';

const References = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-4xl font-bold mb-12 text-center text-red-700">Our References</h1>

        {/* Project Showcase */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold mb-6 text-black">Project Showcase</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border rounded p-6 shadow hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-2">Project A</h3>
              <p className="mb-1"><strong>Client:</strong> Client Name 1</p>
              <p className="mb-1">
                <strong>Description:</strong> Provided comprehensive accounting and consulting services to support business growth.
              </p>
              <p><strong>Year:</strong> 2022</p>
            </div>
            <div className="border rounded p-6 shadow hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-2">Project B</h3>
              <p className="mb-1"><strong>Client:</strong> Client Name 2</p>
              <p className="mb-1">
                <strong>Description:</strong> Assisted with business registration and tender document preparation.
              </p>
              <p><strong>Year:</strong> 2023</p>
            </div>
          </div>
        </div>

        {/* Other Clients */}
        <div>
          <h2 className="text-3xl font-semibold mb-6 text-black">Other Clients Served</h2>
          <ul className="list-disc list-inside text-lg space-y-2">
            <li>Client A</li>
            <li>Client B</li>
            <li>Client C</li>
            <li>Client D</li>
            <li>Client E</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default References;
