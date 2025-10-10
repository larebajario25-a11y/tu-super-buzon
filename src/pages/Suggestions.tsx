import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { MessageSquare, Send, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Suggestions = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [suggestion, setSuggestion] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!suggestion.trim()) {
      toast.error("Por favor escribe tu sugerencia");
      return;
    }

    // Aquí se enviaría a un backend cuando esté disponible
    toast.success("¡Gracias por tu sugerencia! La hemos recibido correctamente.");
    setName("");
    setEmail("");
    setSuggestion("");
  };

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
            <div className="p-3 bg-primary/10 rounded-lg">
              <MessageSquare className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">Buzón de Sugerencias</h1>
              <p className="text-muted-foreground">Tu opinión nos ayuda a mejorar</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Nombre (opcional)</Label>
              <Input
                id="name"
                placeholder="Tu nombre"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email (opcional)</Label>
              <Input
                id="email"
                type="email"
                placeholder="tu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="suggestion">Tu sugerencia *</Label>
              <Textarea
                id="suggestion"
                placeholder="Cuéntanos cómo podemos mejorar..."
                value={suggestion}
                onChange={(e) => setSuggestion(e.target.value)}
                rows={6}
                required
              />
            </div>

            <Button type="submit" variant="hero" size="lg" className="w-full">
              <Send className="mr-2 h-5 w-5" />
              Enviar Sugerencia
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default Suggestions;
