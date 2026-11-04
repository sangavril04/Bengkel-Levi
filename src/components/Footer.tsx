import { Wrench, Facebook, Instagram, Twitter } from "lucide-react";
import { bengkelInfo } from "../data/bengkelData";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 py-12 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <Wrench className="h-8 w-8 text-cyan-400 mr-2" />
              <span className="text-xl font-bold text-slate-100">{bengkelInfo.name}</span>
            </div>
            <p className="text-slate-400 mb-4">
              Bengkel mobil profesional dengan teknologi pemindaian komputer ECU modern dan montir berpengalaman.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-cyan-400">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-cyan-400">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-cyan-400">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-100 mb-4">Layanan</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="hover:text-cyan-400">Tune-Up & Diagnostic</a></li>
              <li><a href="#services" className="hover:text-cyan-400">Ganti Oli</a></li>
              <li><a href="#services" className="hover:text-cyan-400">Servis AC</a></li>
              <li><a href="#services" className="hover:text-cyan-400">Spooring</a></li>
              <li><a href="#services" className="hover:text-cyan-400">Overhaul</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-100 mb-4">Tautan Cepat</h3>
            <ul className="space-y-2">
              <li><a href="#why-us" className="hover:text-cyan-400">Keunggulan</a></li>
              <li><a href="#booking" className="hover:text-cyan-400">Booking</a></li>
              <li><a href="#location" className="hover:text-cyan-400">Lokasi</a></li>
              <li><a href="#" className="hover:text-cyan-400">FAQ</a></li>
              <li><a href="#" className="hover:text-cyan-400">Kebijakan Privasi</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 mb-4 md:mb-0">
            &copy; {currentYear} {bengkelInfo.name}. Hak Cipta Dilindungi.
          </p>
          <div className="flex space-x-6">
            <a href={`https://wa.me/${bengkelInfo.whatsapp}`} className="text-slate-400 hover:text-cyan-400">WhatsApp</a>
            <a href="#" className="text-slate-400 hover:text-cyan-400">Email</a>
            <a href="#" className="text-slate-400 hover:text-cyan-400">Telepon</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;