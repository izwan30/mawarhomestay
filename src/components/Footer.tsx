import React from 'react';
import { Home, Phone, Mail, Instagram, Facebook } from 'lucide-react';
import { PHONE_NUMBER, EMAIL, NAV_LINKS } from '../constants';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Home className="w-6 h-6 text-[#8CA58C]" />
              <span className="font-bold text-xl">Mawar Homestay</span>
            </div>
            <p className="text-gray-400 mb-6">
              Penginapan selesa & bersih di lokasi strategik. Sesuai untuk keluarga & pelancong.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-[#8CA58C] p-2 rounded-full transition-transform hover:transform hover:scale-110">
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="bg-[#8CA58C] p-2 rounded-full transition-transform hover:transform hover:scale-110">
                <Instagram className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 border-b border-gray-700 pb-2">Pautan Pantas</h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-400 hover:text-[#8CA58C] transition-colors duration-300"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 border-b border-gray-700 pb-2">Hubungi Kami</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#8CA58C]" />
                <a 
                  href={`https://wa.me/${PHONE_NUMBER.replace(/\+/g, '')}`}
                  className="text-gray-400 hover:text-[#8CA58C] transition-colors duration-300"
                >
                  {PHONE_NUMBER}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#8CA58C]" />
                <a 
                  href={`mailto:${EMAIL}`}
                  className="text-gray-400 hover:text-[#8CA58C] transition-colors duration-300"
                >
                  {EMAIL}
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-10 pt-6 text-center">
          <p className="text-gray-500 mb-2">&copy; {currentYear} Mawar Homestay. Hak Cipta Terpelihara.</p>
          <p className="text-gray-500">
            Design & Powered by{' '}
            <a 
              href="https://webniaga.my" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#8CA58C] hover:text-[#718C71] transition-colors duration-300"
            >
              webniaga.my
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;