import React from 'react';
import { MapPin, Utensils } from 'lucide-react';
import { LOCATION, LOCATION_FEATURES } from '../constants';

const LocationIcon: React.FC<{ icon: string }> = ({ icon }) => {
  switch (icon) {
    case 'MapPin':
      return <MapPin className="w-5 h-5 text-[#8CA58C]" />;
    case 'Utensils':
      return <Utensils className="w-5 h-5 text-[#8CA58C]" />;
    default:
      return <MapPin className="w-5 h-5 text-[#8CA58C]" />;
  }
};

const Location: React.FC = () => {
  const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(LOCATION)}&output=embed`;
  
  return (
    <section id="lokasi" className="py-16 bg-[#F5F0E6]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">Lokasi Strategik</h2>
          <div className="w-20 h-1 bg-[#8CA58C] mx-auto mb-5"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Mawar Homestay terletak di kawasan strategik dengan pelbagai kemudahan berdekatan.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="rounded-lg overflow-hidden shadow-lg bg-white p-4">
            <a 
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(LOCATION)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block relative aspect-video bg-gray-100 rounded-lg overflow-hidden hover:opacity-90 transition-opacity"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-[#8CA58C] mx-auto mb-2" />
                  <p className="text-gray-600">Klik untuk lihat dalam Google Maps</p>
                </div>
              </div>
            </a>
          </div>

          <div>
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Alamat</h3>
              <p className="flex items-start gap-2 text-gray-600">
                <MapPin className="w-5 h-5 text-[#8CA58C] mt-1 flex-shrink-0" />
                <span>{LOCATION}</span>
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Berdekatan Dengan</h3>
              <ul className="space-y-3">
                {LOCATION_FEATURES.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <LocationIcon icon={feature.icon} />
                    <span className="text-gray-700">{feature.title}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;