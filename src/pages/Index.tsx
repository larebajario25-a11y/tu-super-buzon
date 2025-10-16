import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageSquare, Star, HelpCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-supermarket.jpg";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-[40vh] md:h-[50vh] overflow-hidden">
        <img
          src={heroImage}
          alt="Supermercado"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-primary/60 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              ¡Bienvenido!
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Tu opinión es importante para nosotros
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-3 text-foreground">
            ¿Cómo podemos ayudarte?
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Selecciona una opción para compartir tu experiencia o encontrar respuestas
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Buzón de Sugerencias */}
            <Card 
              className="p-8 hover:shadow-[var(--shadow-elevated)] transition-all cursor-pointer group"
              onClick={() => navigate("/suggestions")}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                  <MessageSquare className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  Buzón de Sugerencias
                </h3>
                <p className="text-muted-foreground">
                  Comparte tus ideas para mejorar nuestro servicio
                </p>
                <Button variant="outline" className="mt-4 group-hover:bg-primary group-hover:text-primary-foreground">
                  Enviar Sugerencia
                </Button>
              </div>
            </Card>

            {/* Encuesta de Satisfacción */}
            <Card 
              className="p-8 hover:shadow-[var(--shadow-elevated)] transition-all cursor-pointer group"
              onClick={() => navigate("/survey")}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 bg-accent/10 rounded-full group-hover:bg-accent/20 transition-colors">
                  <Star className="h-12 w-12 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  Encuesta de Satisfacción
                </h3>
                <p className="text-muted-foreground">
                  Califica tu experiencia y ayúdanos a mejorar
                </p>
                <Button variant="outline" className="mt-4 group-hover:bg-accent group-hover:text-accent-foreground">
                  Calificar Servicio
                </Button>
              </div>
            </Card>

            {/* Centro de Ayuda */}
            <Card 
              className="p-8 hover:shadow-[var(--shadow-elevated)] transition-all cursor-pointer group"
              onClick={() => navigate("/help")}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                  <HelpCircle className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  Centro de Ayuda
                </h3>
                <p className="text-muted-foreground">
                  Encuentra respuestas a tus preguntas frecuentes
                </p>
                <Button variant="outline" className="mt-4 group-hover:bg-primary group-hover:text-primary-foreground">
                  Ver Preguntas
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-secondary py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            SUPERMERCADO LA REBAJA RIO. Gracias por tu confianza.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
