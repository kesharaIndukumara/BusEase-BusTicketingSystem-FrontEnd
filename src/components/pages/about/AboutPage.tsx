import React from 'react';
import Header from '../../common/Header';
import Footer from '../../common/Footer';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-grow pt-24 pb-16">
        <section className="bg-gradient-to-br from-indigo-900 via-indigo-800 to-indigo-700 text-white py-16">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h1 className="text-4xl font-bold mb-4">About BusEase</h1>
            <p className="text-lg text-indigo-100 max-w-3xl mx-auto">We simplify intercity & charter bus booking with intuitive tools for passengers, operators and partners.</p>
          </div>
        </section>
        <section className="max-w-6xl mx-auto px-6 mt-12 grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
            <h2 className="font-semibold text-xl mb-2">Our Mission</h2>
            <p className="text-gray-600 text-sm leading-relaxed">Deliver a seamless digital transit experience that increases fleet utilization and rider satisfaction.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
            <h2 className="font-semibold text-xl mb-2">Our Vision</h2>
            <p className="text-gray-600 text-sm leading-relaxed">Become the most trusted platform for regional mobility across South Asia.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
            <h2 className="font-semibold text-xl mb-2">Values</h2>
            <p className="text-gray-600 text-sm leading-relaxed">Reliability, transparency, accessibility & sustainability guide everything we build.</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
