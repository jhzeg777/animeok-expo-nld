import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Inicio", href: "#inicio" },
    { name: "Invitados", href: "#invitados" },
    { name: "Actividades", href: "#actividades" },
    { name: "Ubicación", href: "#ubicacion" },
    { name: "Boletos", href: "#boletos" },
  ];

  return (
    <header className="fixed top-0 w-full bg-anime-white/95 backdrop-blur-md z-50 border-b border-anime-gray shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-anime-red to-anime-red-dark bg-clip-text text-transparent">
              AnimeOK Expo
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-anime-black hover:text-anime-red transition-colors duration-300 font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm">
              Registro
            </Button>
            <Button variant="anime" size="sm">
              Comprar Boletos
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-anime-white border-t border-anime-gray">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-anime-black hover:text-anime-red transition-colors duration-300 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="flex flex-col space-y-2 px-3 pt-4">
                <Button variant="outline" size="sm">
                  Registro
                </Button>
                <Button variant="anime" size="sm">
                  Comprar Boletos
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;