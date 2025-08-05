import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Car, Clock, Phone } from "lucide-react";

const Location = () => {
  return (
    <section id="ubicacion" className="py-20 bg-anime-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-anime-black mb-4">
            Ubicación y
            <span className="block text-anime-red">Cómo Llegar</span>
          </h2>
          <p className="text-xl text-anime-black/70 max-w-3xl mx-auto">
            Fácil acceso y estacionamiento disponible en el corazón de Nuevo Laredo
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Map Placeholder */}
          <div className="bg-anime-white p-8 rounded-2xl shadow-lg">
            <div className="bg-anime-gray h-80 rounded-xl flex items-center justify-center mb-6">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-anime-red mx-auto mb-4" />
                <p className="text-anime-black font-semibold text-lg">
                  Centro de Convenciones de Nuevo Laredo
                </p>
                <p className="text-anime-black/70">
                  Av. Reforma 3000, Centro, Nuevo Laredo, Tam.
                </p>
              </div>
            </div>
            <Button variant="anime" className="w-full">
              Ver en Google Maps
            </Button>
          </div>

          {/* Location Details */}
          <div className="space-y-6">
            <Card className="bg-anime-white border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-anime-red rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-anime-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-anime-black mb-2">Dirección</h3>
                    <p className="text-anime-black/70">
                      Centro de Convenciones de Nuevo Laredo<br />
                      Av. Reforma 3000, Centro<br />
                      Nuevo Laredo, Tamaulipas, México
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-anime-white border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-anime-red rounded-full flex items-center justify-center flex-shrink-0">
                    <Car className="w-6 h-6 text-anime-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-anime-black mb-2">Estacionamiento</h3>
                    <p className="text-anime-black/70">
                      Estacionamiento gratuito disponible<br />
                      Capacidad para 500 vehículos<br />
                      Servicio de valet parking VIP
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-anime-white border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-anime-red rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-anime-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-anime-black mb-2">Horarios</h3>
                    <div className="text-anime-black/70 space-y-1">
                      <p><strong>Viernes:</strong> 4:00 PM - 10:00 PM</p>
                      <p><strong>Sábado:</strong> 10:00 AM - 10:00 PM</p>
                      <p><strong>Domingo:</strong> 10:00 AM - 8:00 PM</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-anime-white border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-anime-red rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-anime-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-anime-black mb-2">Contacto</h3>
                    <div className="text-anime-black/70 space-y-1">
                      <p><strong>Teléfono:</strong> (867) 123-4567</p>
                      <p><strong>Email:</strong> info@animeokexpo.com</p>
                      <p><strong>WhatsApp:</strong> +52 867 123 4567</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Transport Options */}
        <div className="mt-16 bg-anime-white p-8 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-bold text-anime-black text-center mb-8">
            Opciones de Transporte
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-anime-red rounded-full mx-auto mb-4 flex items-center justify-center">
                <Car className="w-8 h-8 text-anime-white" />
              </div>
              <h4 className="font-bold text-anime-black mb-2">Auto Particular</h4>
              <p className="text-anime-black/70 text-sm">
                Estacionamiento gratuito disponible. Fácil acceso desde las principales avenidas.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-anime-red rounded-full mx-auto mb-4 flex items-center justify-center">
                <MapPin className="w-8 h-8 text-anime-white" />
              </div>
              <h4 className="font-bold text-anime-black mb-2">Transporte Público</h4>
              <p className="text-anime-black/70 text-sm">
                Rutas de autobús 12, 15 y 23. Parada a 200 metros del centro de convenciones.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-anime-red rounded-full mx-auto mb-4 flex items-center justify-center">
                <Phone className="w-8 h-8 text-anime-white" />
              </div>
              <h4 className="font-bold text-anime-black mb-2">Taxi/Uber</h4>
              <p className="text-anime-black/70 text-sm">
                Servicio disponible 24/7. Zona de espera designada para apps de transporte.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;