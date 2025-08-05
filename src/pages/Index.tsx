import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Guests from "@/components/Guests";
import Activities from "@/components/Activities";
import Location from "@/components/Location";
import Tickets from "@/components/Tickets";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-anime-white">
      <Header />
      <Hero />
      <Guests />
      <Activities />
      <Location />
      <Tickets />
      <Footer />
    </div>
  );
};

export default Index;
