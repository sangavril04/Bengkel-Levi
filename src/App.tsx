import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import BookingForm from "./components/BookingForm";
import Location from "./components/Location";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Services />
        <WhyUs />
        <BookingForm />
        <Location />
      </main>
      <Footer />
    </div>
  );
}

export default App;