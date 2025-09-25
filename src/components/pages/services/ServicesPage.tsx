import React from 'react';
import Header from '../../common/Header';
import Footer from '../../common/Footer';

const services = [
  { title: 'Online Ticketing', desc: 'Real-time seat availability, dynamic pricing & instant confirmations.' },
  { title: 'Fleet Management', desc: 'Trip scheduling, driver assignment & performance dashboards.' },
  { title: 'Passenger Experience', desc: 'Mobile-friendly booking, itinerary updates & loyalty-ready design.' },
  { title: 'Operator Portal', desc: 'Revenue analytics, route optimization & configurable access roles.' },
  { title: 'Payments & Reconciliation', desc: 'Secure multi-gateway integration with automated settlements.' },
  { title: 'API Integrations', desc: 'Easily connect to mapping, notification & CRM services.' }
];

const ServicesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-grow pt-24 pb-16">
        <section className="bg-gray-900 text-white py-16">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h1 className="text-4xl font-bold mb-4">Platform Services</h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">A unified stack that empowers bus operators & elevates passenger journeys.</p>
          </div>
        </section>
        <section className="max-w-6xl mx-auto px-6 -mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(s => (
            <div key={s.title} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition">
              <h3 className="font-semibold text-lg mb-2 text-gray-800">{s.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
