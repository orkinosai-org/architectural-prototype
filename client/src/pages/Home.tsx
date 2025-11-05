import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Languages, CreditCard, Bot, Cloud, BarChart3 } from "lucide-react";
import heroImage from "@assets/generated_images/Tech_infrastructure_hero_banner_57474d15.png";

export default function Home() {
  const features = [
    {
      icon: Shield,
      title: "Secure Authentication",
      description: "Email verification with reCAPTCHA protection for secure user registration and login",
    },
    {
      icon: Languages,
      title: "Real-time Translation",
      description: "Cross-language text translation powered by LibreTranslate API",
    },
    {
      icon: CreditCard,
      title: "Payment Integration",
      description: "Ready for Stripe and PayPal integration with placeholder infrastructure",
    },
    {
      icon: Bot,
      title: "AI Customer Support",
      description: "Reserved interface for future AI chatbot integration",
    },
    {
      icon: Cloud,
      title: "Cloud Storage",
      description: "S3-compatible object storage placeholder for file management",
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description: "Comprehensive metrics visualization for user growth and activity tracking",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="relative h-[60vh] max-h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40 z-10" />
        <img
          src={heroImage}
          alt="Cloud Infrastructure"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="text-center px-4 max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
              Cloud-Native Platform Prototype
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
              A modular, scalable platform architecture demonstrating cloud service integration,
              modern authentication, and extensible microservices design
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/register">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90" data-testid="button-get-started">
                  Get Started
                </Button>
              </Link>
              <Link href="/architecture">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20"
                  data-testid="button-view-architecture"
                >
                  View Architecture
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Platform Features</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive prototype demonstrating architectural quality and future scalability
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="hover-elevate" data-testid={`card-feature-${index}`}>
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <Card className="max-w-3xl mx-auto p-8">
            <h3 className="text-2xl font-semibold mb-4">Ready to Explore?</h3>
            <p className="text-muted-foreground mb-6 text-lg">
              Experience the platform's capabilities with our interactive demo. Register for an account
              to access all features and explore the architecture.
            </p>
            <Link href="/register">
              <Button size="lg" data-testid="button-create-account">
                Create Account
              </Button>
            </Link>
          </Card>
        </div>
      </div>
    </div>
  );
}
