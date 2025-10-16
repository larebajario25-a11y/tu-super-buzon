import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, ArrowLeft, Phone, Mail, Clock, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Help = () => {
  const navigate = useNavigate();

  const faqs = [
    {
      question: "¿Cuál es el horario de atención?",
      answer: "Nuestros horarios son: Lunes a Viernes de 8:00 AM a 7:00 PM, Sábados de 7:00 AM a 7:00 PM y Domingos de 8:00 AM a 2:00 PM."
    },
    {
      question: "¿Aceptan devoluciones?",
      answer: "Sí, aceptamos devoluciones de productos, siempre que estén en su empaque original y con el recibo de compra."
    },
    {
      question: "¿Tienen servicio a domicilio?",
      answer: "Sí, ofrecemos servicio de entrega a domicilio. Puedes hacer tu pedido por teléfono, WhatsApp o a través de nuestra app. El tiempo de entrega es de 1-2 horas."
    },
    {
      question: "¿Aceptan todas las tarjetas?",
      answer: "Aceptamos tarjetas de crédito y débito Visa, MasterCard, American Express y tarjetas locales. También aceptamos pagos en efectivo, vales de despensa y transferencias."
    },
    {
      question: "¿Tienen productos orgánicos?",
      answer: "Sí, contamos con una sección especial de productos orgánicos que incluye frutas, verduras, lácteos y productos de despensa. Está ubicada en el pasillo 5."
    },
    {
      question: "¿Cómo reporto un producto en mal estado?",
      answer: "Si encuentras un producto en mal estado, acércate inmediatamente a cualquier empleado o al área de atención al cliente. Te haremos el cambio de inmediato y tomaremos las medidas necesarias."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary to-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Volver
        </Button>

        <Card className="p-8 shadow-[var(--shadow-elevated)] mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-primary/10 rounded-lg">
              <HelpCircle className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">Centro de Ayuda</h1>
              <p className="text-muted-foreground">Encuentra respuestas a tus preguntas</p>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-foreground">Preguntas Frecuentes</h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </Card>

        <Card className="p-8 shadow-[var(--shadow-elevated)]">
          <h2 className="text-2xl font-bold mb-6 text-foreground">Información de Contacto</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Phone className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Teléfono</h3>
                <p className="text-muted-foreground">+52 (55) 1234-5678</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Email</h3>
                <p className="text-muted-foreground">atencion@supermercado.com</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Clock className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Horario</h3>
                <p className="text-muted-foreground">Lun-Vie: 8:00 AM - 7:00 PM</p>
                <p className="text-muted-foreground">Sáb: 7:00 AM - 7:00 PM</p>
                <p className="text-muted-foreground">Dom: 8:00 AM - 2:00 PM</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Dirección</h3>
                <p className="text-muted-foreground">Av. Principal #123, Col. Centro</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Help;
