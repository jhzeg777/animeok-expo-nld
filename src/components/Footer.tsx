import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Youtube, href: "#", label: "YouTube" }
  ];

  const quickLinks = [
    { name: "Inicio", href: "#inicio" },
    { name: "Invitados", href: "#invitados" },
    { name: "Actividades", href: "#actividades" },
    { name: "Ubicación", href: "#ubicacion" },
    { name: "Boletos", href: "#boletos" }
  ];

  return (
    <footer className="bg-anime-black text-anime-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-anime-red to-anime-red-light bg-clip-text text-transparent mb-4">
              AnimeOK Expo
            </h3>
            <p className="text-anime-white/70 text-sm leading-relaxed">
              La convención de anime más grande de Nuevo Laredo, Tamaulipas. 
              Tres días de diversión, cultura japonesa y comunidad otaku.
            </p>
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-anime-white/10 hover:bg-anime-red rounded-full flex items-center justify-center transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-bold text-anime-red mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-anime-white/70 hover:text-anime-red transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-bold text-anime-red mb-6">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-anime-red flex-shrink-0" />
                <span className="text-anime-white/70 text-sm">
                  Centro de Convenciones<br />
                  Nuevo Laredo, Tam.
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-anime-red flex-shrink-0" />
                <span className="text-anime-white/70 text-sm">(867) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-anime-red flex-shrink-0" />
                <span className="text-anime-white/70 text-sm">info@animeokexpo.com</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-bold text-anime-red mb-6">Newsletter</h4>
            <p className="text-anime-white/70 text-sm mb-4">
              Suscríbete para recibir las últimas noticias y actualizaciones del evento.
            </p>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Tu email"
                className="w-full px-4 py-2 bg-anime-white/10 border border-anime-white/20 rounded-lg text-anime-white placeholder-anime-white/50 focus:outline-none focus:border-anime-red"
              />
              <button className="w-full bg-anime-red hover:bg-anime-red-dark text-anime-white px-4 py-2 rounded-lg font-semibold transition-colors duration-300">
                Suscribirse
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-anime-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-anime-white/70 text-sm">
              © 2024 AnimeOK Expo. Todos los derechos reservados.
            </div>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-anime-white/70 hover:text-anime-red transition-colors duration-300">
                Términos y Condiciones
              </a>
              <a href="#" className="text-anime-white/70 hover:text-anime-red transition-colors duration-300">
                Política de Privacidad
              </a>
              <a href="#" className="text-anime-white/70 hover:text-anime-red transition-colors duration-300">
                Aviso Legal
              </a>
            </div>
          </div>
          <div className="text-center mt-4 text-anime-white/50 text-xs">
            Hecho con ❤️ para la comunidad otaku de Nuevo Laredo
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;