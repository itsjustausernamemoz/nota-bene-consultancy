import React from 'react';

const About = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 max-w-5xl">
        <h1 className="text-4xl font-bold mb-8 text-center text-red-700">About Our Company</h1>
        <p className="text-lg leading-relaxed mb-8">
          Nota Bene Consultancy CC is a 100% Namibian-owned registered business dedicated to providing professional consulting, accounting, and advisory services to SMEs. Our team of experts is committed to delivering excellence and fostering sustainable growth for our clients.
        </p>

        <h2 className="text-3xl font-semibold mb-4 text-black">Our Vision</h2>
        <p className="mb-8">
          To be the leading consultancy firm in Namibia, recognized for empowering businesses to achieve sustainable success and national prominence.
        </p>

        <h2 className="text-3xl font-semibold mb-4 text-black">Our Mission</h2>
        <p className="mb-8">
          To foster the emergence of national champions on sustainability by providing expert consulting and accounting services that empower businesses to thrive responsibly.
        </p>

        <h2 className="text-3xl font-semibold mb-4 text-black">Our Values</h2>
        <ul className="list-disc list-inside mb-8 text-lg">
          <li>Agility</li>
          <li>Integrity</li>
          <li>Excellence</li>
          <li>Confidentiality</li>
          <li>Professionalism</li>
          <li>Client Focus</li>
        </ul>

        <h2 className="text-3xl font-semibold mb-4 text-black">Company Details</h2>
        <p>
          Nota Bene Consultancy CC is a 100% Namibian-owned registered business committed to delivering high-quality consulting and accounting services to SMEs across Namibia.
        </p>
      </div>
    </section>
  );
};

export default About;
