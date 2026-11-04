import { Car, Oil, Snowflake, Tire, Engine, CarFront, Wifi, ShieldCheck, FileText, UserCheck, Cpu, Phone } from "lucide-react";
import { services, whyUs, testimonials, bengkelInfo } from "../data/bengkelData";

const Hero = () => {
  return (
    <section className="bg-slate-950 text-slate-100 py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Perawatan & Perbaikan Mobil
              <span className="text-cyan-400">Spesialis Modern</span>
            </h1>
            <p className="text-xl mb-8">
              Solusi komprehensif untuk semua kebutuhan perawatan mobil Anda dengan teknologi pemindaian komputer ECU terbaru dan montir berpengalaman.
            </p>
            <div className="flex space-x-4">
              <a href="#booking" className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg font-medium">
                Booking Servis Sekarang
              </a>
              <a href={`https://wa.me/${bengkelInfo.whatsapp}`} className="border border-cyan-400 hover:bg-cyan-900 text-cyan-400 px-6 py-3 rounded-lg font-medium flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                Konsultasi WA
              </a>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="bg-slate-900 p-6 rounded-lg border border-slate-800">
              <div className="flex justify-around mb-6">
                <div className="text-center">
                  <ShieldCheck className="h-10 w-10 text-green-400 mx-auto mb-2" />
                  <span className="text-sm">Garansi Pengerjaan</span>
                </div>
                <div className="text-center">
                  <Cpu className="h-10 w-10 text-cyan-400 mx-auto mb-2" />
                  <span className="text-sm">Computer Diagnostic</span>
                </div>
                <div className="text-center">
                  <Wifi className="h-10 w-10 text-purple-400 mx-auto mb-2" />
                  <span className="text-sm">Ruang Tunggu AC</span>
                </div>
              </div>
              <div className="bg-slate-800 p-4 rounded-lg">
                <h3 className="font-medium mb-2">Testimoni Pelanggan</h3>
                <div className="space-y-2">
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="bg-slate-700 p-3 rounded">
                      <p className="text-sm italic mb-1">"{testimonial.text}"</p>
                      <p className="text-xs text-slate-400">- {testimonial.name}, {testimonial.car}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;