import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Star, Crown } from "lucide-react";

const Tickets = () => {
  const ticketTypes = [
    {
      name: "Pase de 1 Día",
      price: "$200",
      originalPrice: null,
      icon: Check,
      popular: false,
      features: [
        "Acceso a todas las actividades",
        "Artist Alley y Dealers Room",
        "Paneles y conferencias",
        "Concursos públicos",
        "Área de gaming básica"
      ]
    },
    {
      name: "Pase de 3 Días",
      price: "$450",
      originalPrice: "$600",
      icon: Star,
      popular: true,
      features: [
        "Acceso completo 3 días",
        "Meet & Greet con invitados",
        "Autógrafos incluidos",
        "Prioridad en actividades",
        "Área VIP de gaming",
        "Bolsa de regalos oficial"
      ]
    },
    {
      name: "Pase VIP",
      price: "$800",
      originalPrice: null,
      icon: Crown,
      popular: false,
      features: [
        "Acceso VIP 3 días",
        "Meet & Greet privado",
        "Autógrafos ilimitados",
        "Acceso anticipado",
        "Área VIP exclusiva",
        "Comida y bebidas incluidas",
        "Mercancía exclusiva",
        "Estacionamiento VIP"
      ]
    }
  ];

  return (
    <section id="boletos" className="py-20 bg-anime-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-anime-black mb-4">
            Precios de
            <span className="block text-anime-red">Entrada</span>
          </h2>
          <p className="text-xl text-anime-black/70 max-w-3xl mx-auto">
            Información de precios para el acceso a AnimeOK Expo 2024
          </p>
          <div className="mt-6 inline-block bg-anime-red text-anime-white px-6 py-2 rounded-full text-sm font-semibold">
            Precios sujetos a cambio
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {ticketTypes.map((ticket, index) => (
            <Card 
              key={index} 
              className={`relative bg-anime-white border-2 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${
                ticket.popular 
                  ? 'border-anime-red shadow-[0_0_30px_rgba(220,38,38,0.3)]' 
                  : 'border-anime-gray hover:border-anime-red'
              }`}
            >
              {ticket.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-anime-red text-anime-white px-6 py-2 rounded-full text-sm font-bold">
                    MÁS POPULAR
                  </div>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                  ticket.popular 
                    ? 'bg-gradient-to-br from-anime-red to-anime-red-dark' 
                    : 'bg-anime-gray'
                }`}>
                  <ticket.icon className={`w-8 h-8 ${ticket.popular ? 'text-anime-white' : 'text-anime-red'}`} />
                </div>
                <CardTitle className="text-2xl font-bold text-anime-black">{ticket.name}</CardTitle>
                <div className="space-y-2">
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-4xl font-bold text-anime-red">{ticket.price}</span>
                    <span className="text-anime-black/70">MXN</span>
                  </div>
                  {ticket.originalPrice && (
                    <div className="text-anime-black/50 line-through text-lg">
                      {ticket.originalPrice} MXN
                    </div>
                  )}
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {ticket.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-anime-red flex-shrink-0 mt-0.5" />
                      <span className="text-anime-black/70">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant={ticket.popular ? "anime" : "outline"} 
                  className={`w-full py-3 text-lg font-semibold ${
                    !ticket.popular ? 'border-anime-red text-anime-red hover:bg-anime-red hover:text-anime-white' : ''
                  }`}
                  disabled
                >
                  Próximamente
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="bg-anime-gray p-8 rounded-2xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-anime-black mb-4">
                Información de Acceso
              </h3>
              <ul className="space-y-2 text-anime-black/70">
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-anime-red" />
                  Los precios son válidos únicamente para las fechas del evento
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-anime-red" />
                  Los menores de 12 años entran gratis acompañados de un adulto
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-anime-red" />
                  Las entradas estarán disponibles próximamente
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-anime-red" />
                  Se requiere identificación oficial para el acceso
                </li>
              </ul>
            </div>
            <div className="text-center">
              <h4 className="text-xl font-bold text-anime-black mb-4">
                ¿Tienes dudas sobre el evento?
              </h4>
              <p className="text-anime-black/70 mb-6">
                Nuestro equipo está listo para ayudarte con cualquier pregunta
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline" className="border-anime-red text-anime-red hover:bg-anime-red hover:text-anime-white">
                  Contacto
                </Button>
                <Button variant="outline" className="border-anime-red text-anime-red hover:bg-anime-red hover:text-anime-white">
                  WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tickets;