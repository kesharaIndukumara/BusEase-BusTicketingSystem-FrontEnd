import React from 'react';
import Header from '../../common/Header';
import Footer from '../../common/Footer';

const sampleImages = Array.from({ length: 9 }).map((_, i) => `https://picsum.photos/seed/busease-${i}/600/400`);

const GalleryPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-grow pt-24 pb-16">
        <section className="py-14 bg-white border-b border-gray-100">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Gallery</h1>
            <p className="text-gray-600 max-w-3xl mx-auto">A glimpse into the BusEase platform, fleet operations & passenger experiences. (Replace with real assets later.)</p>
          </div>
        </section>
        <section className="max-w-6xl mx-auto px-6 mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sampleImages.map(src => (
            <figure key={src} className="group relative overflow-hidden rounded-xl shadow-sm border border-gray-100 bg-white">
              <img src={src} alt="Gallery item" className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300" />
              <figcaption className="absolute inset-0 bg-gray-900/50 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-sm font-medium transition">Preview</figcaption>
            </figure>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default GalleryPage;
