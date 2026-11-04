import { Wifi, ShieldCheck, FileText, UserCheck, Cpu } from "lucide-react";
import { whyUs } from "../data/bengkelData";

const WhyUs = () => {
  const iconComponents = {
    Wifi,
    ShieldCheck,
    FileText,
    UserCheck,
    Cpu
  };

  return (
    <section id="why-us" className="bg-slate-950 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-slate-100">Kenapa Memilih Kami?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {whyUs.map((item, index) => {
            const IconComponent = iconComponents[item.icon];
            return (
              <div key={index} className="bg-slate-800 rounded-lg p-6 border border-slate-700 hover:border-cyan-500 transition-all">
                <div className="bg-cyan-900 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                  <IconComponent className="h-8 w-8 text-cyan-300" />
                </div>
                <h3 className="text-xl font-semibold text-center mb-2 text-slate-100">{item.title}</h3>
                <p className="text-slate-300 text-center">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;