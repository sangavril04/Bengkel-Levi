import { Car, Oil, Snowflake, Tire, Engine, CarFront } from "lucide-react";
import { services } from "../data/bengkelData";

const Services = () => {
  const iconComponents = {
    Car,
    Oil,
    Snowflake,
    Tire,
    Engine,
    CarFront
  };

  return (
    <section id="services" className="bg-slate-900 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-slate-100">Layanan Utama Kami</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const IconComponent = iconComponents[service.icon];
            return (
              <div key={index} className="bg-slate-800 rounded-lg p-6 border border-slate-700 hover:border-cyan-500 transition-all">
                <div className="flex items-center mb-4">
                  <div className="bg-cyan-900 p-3 rounded-full mr-4">
                    <IconComponent className="h-6 w-6 text-cyan-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-100">{service.title}</h3>
                </div>
                <p className="text-slate-300 mb-4">{service.description}</p>
                <div className="flex justify-between text-sm">
                  <span className="text-cyan-400">Waktu: {service.time}</span>
                  <span className="text-cyan-400">Harga: {service.price}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;