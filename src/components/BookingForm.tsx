import { useState } from "react";
import { Phone } from "lucide-react";
import { services, bengkelInfo } from "../data/bengkelData";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    carBrand: "",
    carYear: "",
    service: "",
    date: "",
    time: "",
    notes: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `Halo Bengkel Levi! Saya ingin booking servis:\n\nNama: ${formData.name}\nNo HP: ${formData.phone}\nMobil: ${formData.carBrand} (${formData.carYear})\nLayanan: ${formData.service}\nTanggal: ${formData.date}\nJam: ${formData.time}\nCatatan: ${formData.notes}`;
    const whatsappUrl = `https://wa.me/${bengkelInfo.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="booking" className="bg-slate-900 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-slate-100">Booking Servis Online</h2>
        <div className="max-w-2xl mx-auto bg-slate-800 rounded-lg p-8 border border-slate-700">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1">Nama Lengkap</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-md text-slate-100 focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-1">Nomor HP</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-md text-slate-100 focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="carBrand" className="block text-sm font-medium text-slate-300 mb-1">Merk/Tipe Mobil</label>
                <input
                  type="text"
                  id="carBrand"
                  name="carBrand"
                  value={formData.carBrand}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-md text-slate-100 focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="carYear" className="block text-sm font-medium text-slate-300 mb-1">Tahun</label>
                <input
                  type="number"
                  id="carYear"
                  name="carYear"
                  value={formData.carYear}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-md text-slate-100 focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="service" className="block text-sm font-medium text-slate-300 mb-1">Pilih Layanan</label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-md text-slate-100 focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                required
              >
                <option value="">Pilih Layanan</option>
                {services.map((service, index) => (
                  <option key={index} value={service.title}>{service.title}</option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="date" className="block text-sm font-medium text-slate-300 mb-1">Tanggal Kedatangan</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-md text-slate-100 focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="time" className="block text-sm font-medium text-slate-300 mb-1">Jam Kedatangan</label>
                <input
                  type="time"
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-md text-slate-100 focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="notes" className="block text-sm font-medium text-slate-300 mb-1">Catatan Keluhan</label>
              <textarea
                id="notes"
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-md text-slate-100 focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-medium py-3 px-4 rounded-md flex items-center justify-center space-x-2 transition-colors"
            >
              <Phone className="h-5 w-5" />
              <span>Kirim Booking via WhatsApp</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;