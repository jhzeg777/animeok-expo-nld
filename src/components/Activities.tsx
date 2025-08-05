import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Gamepad2, Palette, Trophy, Music, Camera, ShoppingBag } from "lucide-react";
import activitiesImage from "@/assets/activities.jpg";

const Activities = () => {
  const activities = [
    {
      icon: Trophy,
      title: "Concurso de Cosplay",
      description: "Compite en diferentes categorías y gana increíbles premios",
      time: "Sábado 4:00 PM"
    },
    {
      icon: Palette,
      title: "Artist Alley",
      description: "Descubre arte original de artistas locales e internacionales",
      time: "Todo el evento"
    },
    {
      icon: Gamepad2,
      title: "Torneo de Gaming",
      description: "Competencias de videojuegos retro y actuales",
      time: "Viernes 2:00 PM"
    },
    {
      icon: Music,
      title: "Concierto J-Pop",
      description: "Presentaciones en vivo de música japonesa",
      time: "Sábado 8:00 PM"
    },
    {
      icon: Camera,
      title: "Sesiones de Fotos",
      description: "Sets temáticos para fotografías profesionales",
      time: "Todo el evento"
    },
    {
      icon: ShoppingBag,
      title: "Dealers Room",
      description: "Merchandise oficial y exclusivo de anime",
      time: "Todo el evento"
    }
  ];

  return (
    <section id="actividades" className="py-20 bg-anime-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-anime-black mb-4">
            Actividades y
            <span className="block text-anime-red">Entretenimiento</span>
          </h2>
          <p className="text-xl text-anime-black/70 max-w-3xl mx-auto">
            Tres días llenos de diversión, competencias, arte y música para toda la comunidad otaku
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-anime-black">
              Una experiencia completa para todos los gustos
            </h3>
            <p className="text-anime-black/70 text-lg leading-relaxed">
              Desde competencias de cosplay hasta talleres de dibujo manga, AnimeOK Expo ofrece actividades para todos los niveles de fans del anime. Participa, aprende y diviértete en un ambiente lleno de pasión por la cultura japonesa.
            </p>
            <div className="bg-gradient-to-r from-anime-red to-anime-red-dark p-6 rounded-2xl text-anime-white">
              <h4 className="text-xl font-bold mb-2">¡Nuevo este año!</h4>
              <p>Área de realidad virtual con experiencias inmersivas de anime populares</p>
            </div>
          </div>
          <div>
            <img 
              src={activitiesImage} 
              alt="Actividades del evento" 
              className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <Card key={index} className="bg-anime-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-anime-red to-anime-red-dark rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <activity.icon className="w-8 h-8 text-anime-white" />
                </div>
                <CardTitle className="text-xl font-bold text-anime-black">{activity.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-anime-black/70 text-center">
                  {activity.description}
                </p>
                <div className="bg-anime-gray p-3 rounded-lg text-center">
                  <span className="text-anime-red font-semibold">{activity.time}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-anime-gray p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-anime-black mb-4">
              ¿Quieres participar como expositor?
            </h3>
            <p className="text-anime-black/70 mb-6">
              Únete a nuestra comunidad de artistas y comerciantes. Espacios limitados disponibles.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-anime-red text-anime-white px-6 py-3 rounded-lg font-semibold hover:bg-anime-red-dark transition-colors duration-300">
                Solicitar Stand
              </button>
              <button className="border-2 border-anime-red text-anime-red px-6 py-3 rounded-lg font-semibold hover:bg-anime-red hover:text-anime-white transition-colors duration-300">
                Ver Precios
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Activities;