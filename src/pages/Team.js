import React from 'react';

const Team = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-4xl font-bold mb-12 text-center text-red-700">Our Team</h1>

        {/* Managing Director */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold mb-6 text-black">Managing Director</h2>
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
            <img
              src="https://i.ibb.co/3vJqZqv/matias-ndhiludile.jpg"
              alt="Matias N.B Nghiludile"
              className="w-48 h-48 rounded-full object-cover"
            />
            <div>
              <h3 className="text-2xl font-bold mb-2 text-black">Matias N.B Nghiludile</h3>
              <p className="mb-2 font-semibold">Managing Director</p>
              <p className="mb-2">Experience: +10 years in consulting and finance.</p>
              <p className="mb-2">
                Qualifications: MSc in Development Finance & Business Strategy, Bachelor of Accounting Honours.
              </p>
              <p>
                Expertise: Investment Strategies, SME Leadership, Business Development, Financial Management.
              </p>
            </div>
          </div>
        </div>

        {/* Office Staff */}
        <div>
          <h2 className="text-3xl font-semibold mb-6 text-black">Office Staff Complement</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            <div className="border rounded p-4 text-center">
              <img
                src="https://i.ibb.co/2dQ7Q7Z/pius.jpg"
                alt="Pius"
                className="w-32 h-32 rounded-full mx-auto object-cover mb-4"
              />
              <h3 className="text-xl font-bold mb-1">Pius</h3>
              <p>Position: Accountant</p>
              <p>Experience: 5 years</p>
            </div>
            <div className="border rounded p-4 text-center">
              <img
                src="https://i.ibb.co/3vJqZqv/petra.jpg"
                alt="Petra"
                className="w-32 h-32 rounded-full mx-auto object-cover mb-4"
              />
              <h3 className="text-xl font-bold mb-1">Petra</h3>
              <p>Position: Financial Analyst</p>
              <p>Experience: 4 years</p>
            </div>
            <div className="border rounded p-4 text-center">
              <img
                src="https://i.ibb.co/7vV7Q7Z/katrina.jpg"
                alt="Katrina"
                className="w-32 h-32 rounded-full mx-auto object-cover mb-4"
              />
              <h3 className="text-xl font-bold mb-1">Katrina</h3>
              <p>Position: Business Consultant</p>
              <p>Experience: 6 years</p>
            </div>
            <div className="border rounded p-4 text-center">
              <img
                src="https://i.ibb.co/4dQ7Q7Z/loide.jpg"
                alt="Loide"
                className="w-32 h-32 rounded-full mx-auto object-cover mb-4"
              />
              <h3 className="text-xl font-bold mb-1">Loide</h3>
              <p>Position: Office Administrator</p>
              <p>Experience: 3 years</p>
            </div>
            <div className="border rounded p-4 text-center">
              <img
                src="https://i.ibb.co/5dQ7Q7Z/iiyambo.jpg"
                alt="Iiyambo"
                className="w-32 h-32 rounded-full mx-auto object-cover mb-4"
              />
              <h3 className="text-xl font-bold mb-1">Iiyambo</h3>
              <p>Position: Junior Accountant</p>
              <p>Experience: 2 years</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
