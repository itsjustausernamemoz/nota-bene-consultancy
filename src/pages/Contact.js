import React from 'react';

const Contact = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <h1 className="text-4xl font-bold mb-12 text-center text-black font-serif animate-fadeIn">Contact Us</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-semibold mb-6 text-black font-serif animate-fadeIn">Contact Information</h2>
            <p className="mb-4 font-sans"><strong>Email:</strong> info@nota-bene.group</p>
            <p className="mb-4 font-sans"><strong>Tel:</strong> +264 83 722 4100</p>
            <p className="mb-4 font-sans"><strong>Cell:</strong> +264 81 623 8388</p>
            <p className="mb-4 font-sans"><strong>Physical Address:</strong> Erf 2128, NRCS, Independence Avenue, Katutura, Windhoek, Namibia</p>
            <p className="mb-4 font-sans"><strong>P.O. Box:</strong> 70295, Khomasdal, Windhoek, Namibia</p>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-semibold mb-6 text-black font-serif animate-fadeIn">Send Us a Message</h2>
            <form action="#" method="POST" className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 font-semibold font-sans">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black transition"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 font-semibold font-sans">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black transition"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 font-semibold font-sans">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black transition"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-black text-white font-bold py-3 px-6 rounded hover:bg-gray-800 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Google Map */}
        <div className="mt-16">
          <h2 className="text-3xl font-semibold mb-6 text-center text-black font-serif animate-fadeIn">Our Location</h2>
          <div className="w-full h-64 md:h-96 rounded overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2274.1234567890123!2d17.083333!3d-22.566667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1c1b2c3d4e5f6789%3A0xabcdef1234567890!2sErf%202128%2C%20NRCS%2C%20Independence%20Avenue%2C%20Katutura%2C%20Windhoek%2C%20Namibia!5e0!3m2!1sen!2sna!4v1690000000000!5m2!1sen!2sna"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Nota Bene Consultancy Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
