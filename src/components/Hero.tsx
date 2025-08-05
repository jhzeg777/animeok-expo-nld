import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBanner})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-anime-black/70 to-anime-red/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-anime-white leading-tight">
              AnimeOK
              <span className="block bg-gradient-to-r from-anime-red to-anime-red-light bg-clip-text text-transparent">
                Expo 2024
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-anime-white/90 max-w-3xl mx-auto">
              La convención de anime más grande de Nuevo Laredo, Tamaulipas
            </p>
          </div>

          {/* Event Details */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 text-anime-white">
            <div className="flex items-center gap-2">
              <Calendar className="w-6 h-6 text-anime-red" />
              <span className="text-lg font-medium">15-17 Marzo 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-6 h-6 text-anime-red" />
              <span className="text-lg font-medium">Centro de Convenciones</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-6 h-6 text-anime-red" />
              <span className="text-lg font-medium">3 días de diversión</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              Ver Información
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 bg-anime-white/10 border-anime-white text-anime-white hover:bg-anime-white hover:text-anime-black">
              Ver Programación
            </Button>
          </div>

          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-anime-red/20 rounded-full animate-float hidden lg:block"></div>
          <div className="absolute bottom-20 right-10 w-16 h-16 bg-anime-red-light/20 rounded-full animate-bounce-slow hidden lg:block"></div>
          <div className="absolute top-1/2 right-20 w-12 h-12 bg-anime-white/20 rounded-full animate-pulse-slow hidden lg:block"></div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-anime-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-anime-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;