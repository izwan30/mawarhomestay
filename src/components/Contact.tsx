import React, { useState } from 'react';
import { Phone, Mail, Send } from 'lucide-react';
import { PHONE_NUMBER, EMAIL } from '../constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    checkIn: '',
    checkOut: '',
    guests: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format message for WhatsApp
    const message = `Tempahan Mawar Homestay:%0A%0ANama: ${formData.name}%0ATarikh Check-in: ${formData.checkIn}%0ATarikh Check-out: ${formData.checkOut}%0ABilangan Tetamu: ${formData.guests}%0ANombor Telefon: ${formData.phone}%0AMesej: ${formData.message}`;
    
    // Create WhatsApp URL
    const whatsappURL = `https://wa.me/${PHONE_NUMBER.replace(/\+/g, '')}?text=${message}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappURL, '_blank');
  };

  return (
    <section id="hubungi" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">Tempahan & Hubungi Kami</h2>
          <div className="w-20 h-1 bg-[#8CA58C] mx-auto mb-5"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hubungi kami untuk semakan tarikh & tempahan.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <div className="bg-[#F5F0E6] p-6 rounded-lg shadow-md mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Maklumat Hubungan</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-[#8CA58C] p-2 rounded-full">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-600">WhatsApp</p>
                    <a href={`https://wa.me/${PHONE_NUMBER.replace(/\+/g, '')}`} className="text-gray-800 font-medium hover:text-[#8CA58C]">
                      {PHONE_NUMBER}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="bg-[#8CA58C] p-2 rounded-full">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-600">Emel</p>
                    <a href={`mailto:${EMAIL}`} className="text-gray-800 font-medium hover:text-[#8CA58C]">
                      {EMAIL}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-[#F5F0E6] p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Tempahan Mudah</h3>
              <p className="text-gray-600 mb-4">
                Isi borang di sebelah atau hubungi kami terus melalui WhatsApp untuk tempahan pantas.
              </p>
              <a 
                href={`https://wa.me/${PHONE_NUMBER.replace(/\+/g, '')}`}
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Tempah di WhatsApp
              </a>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Borang Tempahan</h3>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-1">Nama Penuh</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8CA58C]"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-gray-700 mb-1">Nombor Telefon</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8CA58C]"
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="checkIn" className="block text-gray-700 mb-1">Tarikh Check-in</label>
                  <input
                    type="date"
                    id="checkIn"
                    name="checkIn"
                    value={formData.checkIn}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8CA58C]"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="checkOut" className="block text-gray-700 mb-1">Tarikh Check-out</label>
                  <input
                    type="date"
                    id="checkOut"
                    name="checkOut"
                    value={formData.checkOut}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8CA58C]"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-4">
                <label htmlFor="guests" className="block text-gray-700 mb-1">Bilangan Tetamu</label>
                <select
                  id="guests"
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8CA58C]"
                  required
                >
                  <option value="">Pilih bilangan tetamu</option>
                  <option value="1">1 orang</option>
                  <option value="2">2 orang</option>
                  <option value="3">3 orang</option>
                  <option value="4">4 orang</option>
                  <option value="5">5 orang</option>
                  <option value="6">6 orang</option>
                  <option value="7">7 orang</option>
                  <option value="8">8 orang</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 mb-1">Mesej</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8CA58C]"
                  placeholder="Sebarang permintaan khas atau pertanyaan..."
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#8CA58C] hover:bg-[#718C71] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
              >
                <Send className="w-5 h-5" />
                Hantar ke WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;