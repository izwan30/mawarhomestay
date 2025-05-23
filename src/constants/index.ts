import { TestimonialType, AmenityType, FAQType, GalleryImageType, LocationFeatureType } from '../types';
import { Bed, Bath, Tv, Utensils, Wifi, Hash as Washer, Car, MapPin } from 'lucide-react';

export const SITE_TITLE = "Mawar Homestay – Selesa, Strategik & Berbaloi – Tempah Sekarang";
export const SITE_DESCRIPTION = "Penginapan lengkap dan selesa untuk seisi keluarga di lokasi strategik. 3 bilik berhawa dingin, Wi-Fi percuma, dapur lengkap. Tempah sekarang – terus ke WhatsApp!";

export const NAV_LINKS = [
  { title: "Utama", href: "#hero" },
  { title: "Lokasi", href: "#lokasi" },
  { title: "Kemudahan", href: "#kemudahan" },
  { title: "Galeri", href: "#galeri" },
  { title: "Testimoni", href: "#testimoni" },
  { title: "Harga", href: "#harga" },
  { title: "Hubungi", href: "#hubungi" },
  { title: "Soalan Lazim", href: "#faq" }
];

export const PHONE_NUMBER = "+601163938216";
export const EMAIL = "mawarhomestay@gmail.com";
export const WEBSITE = "https://webniaga.my";
export const LOCATION = "Jalan Mawar Indah, Taman Mawar, 43000 Kajang, Selangor";

export const AMENITIES: AmenityType[] = [
  { title: "3 Bilik Tidur (berhawa dingin & kipas)", icon: "Bed" },
  { title: "2 Bilik Air (dengan water heater)", icon: "Bath" },
  { title: "Ruang Tamu (TV, sofa)", icon: "Tv" },
  { title: "Dapur lengkap (peti sejuk, dapur, peralatan memasak)", icon: "Utensils" },
  { title: "Wi-Fi Percuma", icon: "Wifi" },
  { title: "Mesin Basuh", icon: "Washer" },
  { title: "Tempat Letak Kereta Percuma (2 buah kereta)", icon: "Car" }
];

export const LOCATION_FEATURES: LocationFeatureType[] = [
  { title: "Pusat bandar", icon: "MapPin" },
  { title: "Kedai makan & restoran", icon: "Utensils" },
  { title: "Masjid / surau", icon: "MapPin" },
  { title: "Stesen minyak", icon: "MapPin" },
  { title: "Tarikan pelancongan", icon: "MapPin" }
];

export const TESTIMONIALS: TestimonialType[] = [
  {
    quote: "Rumah sangat selesa dan bersih. Tuan rumah pun sangat mesra. Akan datang lagi!",
    author: "Puan Zainab",
    location: "Kedah"
  },
  {
    quote: "Lokasi dekat dengan tempat kerja saya, senang nak ulang-alik. Harga pun sangat berbaloi.",
    author: "Encik Ahmad",
    location: "Selangor"
  },
  {
    quote: "Sangat sesuai untuk family gathering. Anak-anak sangat suka dengan ruang yang luas.",
    author: "Puan Faridah",
    location: "Kuala Lumpur"
  }
];

export const FAQS: FAQType[] = [
  {
    question: "Adakah Mawar Homestay sesuai untuk keluarga besar?",
    answer: "Ya, homestay ini boleh memuatkan sehingga 8 orang tetamu selesa dengan 3 bilik tidur dan ruang tamu yang luas."
  },
  {
    question: "Boleh masak di homestay?",
    answer: "Ya, kami sediakan dapur lengkap termasuk peti sejuk, dapur gas, periuk dan peralatan memasak."
  },
  {
    question: "Ada parking?",
    answer: "Ya, terdapat ruang parking percuma untuk 2 buah kereta di dalam kawasan homestay."
  },
  {
    question: "Boleh tempah melalui WhatsApp sahaja?",
    answer: "Ya, sistem tempahan kami mudah dan pantas melalui WhatsApp. Klik butang tempahan dan isikan butiran."
  },
  {
    question: "Berapa awal perlu tempah?",
    answer: "Kami sarankan tempahan dibuat sekurang-kurangnya 3 hari lebih awal terutama untuk hujung minggu atau musim cuti."
  },
  {
    question: "Ada caj tambahan?",
    answer: "Tiada caj tersembunyi. Hanya perlu bayar deposit sebanyak RM50 yang akan di kembalikan semula."
  }
];

export const GALLERY_IMAGES: GalleryImageType[] = [
  { 
    url: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
    alt: "Ruang tamu yang selesa"
  },
  { 
    url: "https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
    alt: "Bilik tidur utama"
  },
  { 
    url: "https://images.pexels.com/photos/2062431/pexels-photo-2062431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
    alt: "Bilik tidur kedua"
  },
  { 
    url: "https://images.pexels.com/photos/2029694/pexels-photo-2029694.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
    alt: "Bilik tidur ketiga"
  },
  { 
    url: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
    alt: "Dapur lengkap"
  },
  { 
    url: "https://images.pexels.com/photos/2111768/pexels-photo-2111768.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
    alt: "Bilik air bersih"
  }
];