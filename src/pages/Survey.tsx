import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Star, Send, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Survey = () => {
  const navigate = useNavigate();
  const [overallRating, setOverallRating] = useState(0);
  const [productsRating, setProductsRating] = useState(0);
  const [serviceRating, setServiceRating] = useState(0);
  const [cleanlinessRating, setCleanlinessRating] = useState(0);
  const [comments, setComments] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (overallRating === 0) {
      toast.error("Por favor califica tu experiencia general");
      return;
    }

    // Aquí se enviaría a un backend cuando esté disponible
    toast.success("¡Gracias por tu opinión! Nos ayuda a mejorar cada día.");
    setOverallRating(0);
    setProductsRating(0);
    setServiceRating(0);
    setCleanlinessRating(0);
    setComments("");
  };

  const RatingStars = ({ 
    rating, 
    onRating, 
    label 
  }: { 
    rating: number; 
    onRating: (rating: number) => void; 
    label: string;
  }) => (
    <div className="space-y-2">
      <Label>{label}</Label>
      <div className="flex gap-2">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => onRating(star)}
            className="transition-transform hover:scale-110"
          >
            <Star
              className={`h-8 w-8 ${
                star <= rating
                  ? "fill-accent text-accent"
                  : "fill-muted text-muted-foreground"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary to-background">
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Volver
        </Button>

        <Card className="p-8 shadow-[var(--shadow-elevated)]">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-accent/10 rounded-lg">
              <Star className="h-6 w-6 text-accent" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">Encuesta de Satisfacción</h1>
              <p className="text-muted-foreground">Tu opinión es muy importante para nosotros</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <RatingStars
              rating={overallRating}
              onRating={setOverallRating}
              label="Experiencia general *"
            />

            <RatingStars
              rating={productsRating}
              onRating={setProductsRating}
              label="Calidad de productos"
            />

            <RatingStars
              rating={serviceRating}
              onRating={setServiceRating}
              label="Atención al cliente"
            />

            <RatingStars
              rating={cleanlinessRating}
              onRating={setCleanlinessRating}
              label="Limpieza del establecimiento"
            />

            <div className="space-y-2">
              <Label htmlFor="comments">Comentarios adicionales (opcional)</Label>
              <Textarea
                id="comments"
                placeholder="¿Algo más que quieras compartir?"
                value={comments}
                onChange={(e) => setComments(e.target.value)}
                rows={4}
              />
            </div>

            <Button type="submit" variant="hero" size="lg" className="w-full">
              <Send className="mr-2 h-5 w-5" />
              Enviar Encuesta
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default Survey;
