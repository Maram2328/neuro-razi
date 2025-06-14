import React from 'react';
import { Clock, MapPin, Phone } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Info Cards */}
      <section className="relative h-[90vh] flex flex-col">
        <div className="absolute inset-0">
          <img
            src="https://www.espacemanager.com/sites/default/files/field/image/hopital_razi_manouba.jpg"
            alt="Hospital background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-900/75"></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative flex-grow flex items-center justify-center">
          <div className="text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
              Service de Neurologie
              <span className="block text-blue-200">Hôpital Razi</span>
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-200">
              Une équipe d'experts dédiée à votre santé neurologique avec des soins de qualité et une approche personnalisée.
            </p>
          </div>
        </div>

        {/* Info Cards */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/90 backdrop-blur-sm p-5 rounded-lg shadow-md">
              <Clock className="h-6 w-6 text-blue-600 mb-3" />
              <h3 className="text-base font-semibold mb-2">Horaires de consultation</h3>
              <p className="text-sm text-gray-600">Lundi - Vendredi: 8h00 - 17h00</p>
              <p className="text-sm text-gray-600">Samedi: 8h00 - 12h00</p>
            </div>
            <div className="bg-white/90 backdrop-blur-sm p-5 rounded-lg shadow-md">
              <Phone className="h-6 w-6 text-blue-600 mb-3" />
              <h3 className="text-base font-semibold mb-2">Contact</h3>
              <p className="text-sm text-gray-600">Tél: +216 71 234 567</p>
              <p className="text-sm text-gray-600">Urgences: +216 71 234 568</p>
            </div>
            <div className="bg-white/90 backdrop-blur-sm p-5 rounded-lg shadow-md">
              <MapPin className="h-6 w-6 text-blue-600 mb-3" />
              <h3 className="text-base font-semibold mb-2">Localisation</h3>
              <p className="text-sm text-gray-600">Hôpital Razi</p>
              <p className="text-sm text-gray-600">La Manouba, Tunisie</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;