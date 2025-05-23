import React from 'react';

const Pricing: React.FC = () => {
  return (
    <section id="harga" className="py-16 bg-[#F5F0E6]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">Kadar Harga</h2>
          <div className="w-20 h-1 bg-[#8CA58C] mx-auto mb-5"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Harga berpatutan untuk penginapan selesa dan lengkap.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:transform hover:scale-105">
            <div className="bg-[#8CA58C] p-6 text-white text-center">
              <h3 className="text-xl font-bold">Hari Biasa</h3>
            </div>
            <div className="p-6 text-center">
              <div className="text-4xl font-bold text-gray-800 mb-4">
                RM150
                <span className="text-base font-normal text-gray-600">/malam</span>
              </div>
              <ul className="text-gray-600 space-y-3 mb-6">
                <li className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5 text-[#8CA58C]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>3 Bilik Tidur</span>
                </li>
                <li className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5 text-[#8CA58C]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>2 Bilik Air</span>
                </li>
                <li className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5 text-[#8CA58C]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Semua Kemudahan</span>
                </li>
              </ul>
              <a
                href="#hubungi"
                className="inline-block bg-[#8CA58C] hover:bg-[#718C71] text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300"
              >
                Tempah Sekarang
              </a>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:transform hover:scale-105">
            <div className="bg-[#E6D2B5] p-6 text-gray-800 text-center">
              <h3 className="text-xl font-bold">Hujung Minggu / Cuti Umum</h3>
            </div>
            <div className="p-6 text-center">
              <div className="text-4xl font-bold text-gray-800 mb-4">
                RM180
                <span className="text-base font-normal text-gray-600">/malam</span>
              </div>
              <ul className="text-gray-600 space-y-3 mb-6">
                <li className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5 text-[#8CA58C]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>3 Bilik Tidur</span>
                </li>
                <li className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5 text-[#8CA58C]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>2 Bilik Air</span>
                </li>
                <li className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5 text-[#8CA58C]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Semua Kemudahan</span>
                </li>
              </ul>
              <a
                href="#hubungi"
                className="inline-block bg-[#E6D2B5] hover:bg-[#D4C0A3] text-gray-800 font-semibold py-2 px-6 rounded-lg transition-all duration-300"
              >
                Tempah Sekarang
              </a>
            </div>
          </div>
        </div>

        <div className="text-center mt-8 p-4 bg-white rounded-lg shadow-md max-w-2xl mx-auto">
          <p className="text-gray-700 font-medium">
            Diskaun khas untuk penginapan 3 malam ke atas.
            Hubungi kami untuk maklumat lanjut.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;