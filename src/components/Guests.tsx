import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Users2 } from "lucide-react";
import guestsImage from "@/assets/guests.jpg";

const Guests = () => {
  const guests = [
    {
      name: "Yuki Tanaka",
      role: "Seiyuu (Voz de protagonistas anime)",
      description: "Reconocida actriz de voz japonesa con más de 15 años de experiencia",
      highlight: "Voz principal en 'Attack on Titan' y 'My Hero Academia'"
    },
    {
      name: "Carlos Hernández",
      role: "Mangaka Mexicano",
      description: "Creador de mangas originales con temática latinoamericana",
      highlight: "Autor de 'Leyendas del Norte' y 'Samurai Azteca'"
    },
    {
      name: "Sakura Matsumoto",
      role: "Directora de Animación",
      description: "Directora de varios animes populares de Studio Pierrot",
      highlight: "Directora de 'Naruto Shippuden' episodios especiales"
    }
  ];

  return (
    <section id="invitados" className="py-20 bg-anime-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-anime-black mb-4">
            Invitados
            <span className="block text-anime-red">Especiales</span>
          </h2>
          <p className="text-xl text-anime-black/70 max-w-3xl mx-auto">
            Conoce a los talentosos creadores, seiyuus y artistas que estarán presentes en AnimeOK Expo 2024
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img 
              src={guestsImage} 
              alt="Invitados especiales" 
              className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
            />
          </div>
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-anime-black mb-4">
                Experiencias únicas con tus ídolos
              </h3>
              <p className="text-anime-black/70 text-lg leading-relaxed">
                Participa en sesiones de autógrafos, paneles exclusivos, talleres de dibujo y fotografías con los invitados especiales. Una oportunidad única de conocer a los creadores detrás de tus animes favoritos.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-anime-red">
                <Users2 className="w-5 h-5" />
                <span className="font-semibold">Meet & Greet</span>
              </div>
              <div className="flex items-center gap-2 text-anime-red">
                <Star className="w-5 h-5" />
                <span className="font-semibold">Autógrafos</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {guests.map((guest, index) => (
            <Card key={index} className="bg-anime-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <CardHeader className="text-center pb-4">
                <div className="w-20 h-20 bg-gradient-to-br from-anime-red to-anime-red-dark rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Star className="w-10 h-10 text-anime-white" />
                </div>
                <CardTitle className="text-xl font-bold text-anime-black">{guest.name}</CardTitle>
                <p className="text-anime-red font-semibold">{guest.role}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-anime-black/70 text-center">
                  {guest.description}
                </p>
                <div className="bg-anime-gray p-3 rounded-lg">
                  <p className="text-sm font-semibold text-anime-black text-center">
                    "{guest.highlight}"
                  </p>
                </div>
                <Button variant="outline" className="w-full hover:bg-anime-red hover:text-anime-white border-anime-red text-anime-red">
                  Ver Horarios
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Guests;