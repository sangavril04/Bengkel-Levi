import { MapPin, Clock, Phone } from "lucide-react";
import { bengkelInfo } from "../data/bengkelData";

const Location = () => {
  return (
    <section id="location" className="bg-slate-950 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-slate-100">Lokasi & Jam Operasional</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
            <h3 className="text-xl font-semibold mb-4 text-slate-100">Alamat Bengkel</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-cyan-400 mr-3 mt-1" />
                <div>
                  <p className="text-slate-300">{bengkelInfo.address}</p>
                  <a href={bengkelInfo.googleMapsLink} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline text-sm">Buka di Google Maps</a>
                </div>
              </div>
              <div className="flex items-start">
                <Clock className="h-5 w-5 text-cyan-400 mr-3 mt-1" />
                <div>
                  <p className="text-slate-300">Senin-Jumat: {bengkelInfo.operatingHours.weekdays}</p>
                  <p className="text-slate-300">Sabtu: {bengkelInfo.operatingHours.saturday}</p>
                  <p className="text-slate-300">Minggu: {bengkelInfo.operatingHours.sunday}</p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-cyan-400 mr-3" />
                <a href={`https://wa.me/${bengkelInfo.whatsapp}`} className="text-slate-300 hover:text-cyan-400">+{bengkelInfo.whatsapp}</a>
              </div>
            </div>
          </div>
          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
            <h3 className="text-xl font-semibold mb-4 text-slate-100">Peta Lokasi</h3>
            <div className="aspect-w-16 aspect-h-9 bg-slate-700 rounded-lg flex items-center justify-center">
              <p className="text-slate-400">[Embed Google Maps akan ditempatkan di sini]</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;