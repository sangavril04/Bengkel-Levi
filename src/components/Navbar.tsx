import { Wrench, Phone } from "lucide-react";
import { bengkelInfo } from "../data/bengkelData";

const Navbar = () => {
  return (
    <nav className="bg-slate-950 text-slate-100 border-b border-slate-800">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Wrench className="h-8 w-8 text-cyan-400" />
          <span className="font-bold text-xl">{bengkelInfo.name}</span>
        </div>
        <div className="flex items-center space-x-6">
          <span className="text-sm bg-green-500 px-2 py-1 rounded-full animate-pulse">Buka Hari Ini</span>
          <a href="#services" className="hover:text-cyan-400">Layanan</a>
          <a href="#why-us" className="hover:text-cyan-400">Keunggulan</a>
          <a href="#booking" className="hover:text-cyan-400">Booking</a>
          <a href="#location" className="hover:text-cyan-400">Lokasi</a>
          <a href={`https://wa.me/${bengkelInfo.whatsapp}`} className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded flex items-center space-x-2">
            <Phone className="h-4 w-4" />
            <span>Darurat</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;