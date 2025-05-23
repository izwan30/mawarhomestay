import React from 'react';
import { Bed, Bath, Tv, Utensils, Wifi, Hash as Washer, Car } from 'lucide-react';
import { AMENITIES } from '../constants';

const AmenityIcon: React.FC<{ icon: string }> = ({ icon }) => {
  switch (icon) {
    case 'Bed':
      return <Bed className="w-6 h-6 text-[#8CA58C]" />;
    case 'Bath':
      return <Bath className="w-6 h-6 text-[#8CA58C]" />;
    case 'Tv':
      return <Tv className="w-6 h-6 text-[#8CA58C]" />;
    case 'Utensils':
      return <Utensils className="w-6 h-6 text-[#8CA58C]" />;
    case 'Wifi':
      return <Wifi className="w-6 h-6 text-[#8CA58C]" />;
    case 'Washer':
      return <Washer className="w-6 h-6 text-[#8CA58C]" />;
    case 'Car':
      return <Car className="w-6 h-6 text-[#8CA58C]" />;
    default:
      return <Bed className="w-6 h-6 text-[#8CA58C]" />;
  }
};

const Amenities: React.FC = () => {
  return (
    <section id="kemudahan" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">Kemudahan Homestay</h2>
          <div className="w-20 h-1 bg-[#8CA58C] mx-auto mb-5"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Nikmati pelbagai kemudahan yang lengkap untuk keselesaan anda sepanjang penginapan.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {AMENITIES.map((amenity, index) => (
            <div 
              key={index} 
              className="bg-[#F5F0E6] p-6 rounded-lg shadow-md transition-transform duration-300 hover:transform hover:scale-105"
            >
              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-full">
                  <AmenityIcon icon={amenity.icon} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {amenity.title.split('(')[0]}
                  </h3>
                  {amenity.title.includes('(') && (
                    <p className="text-gray-600 text-sm">
                      ({amenity.title.split('(')[1]}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;