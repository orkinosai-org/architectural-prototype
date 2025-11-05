import { useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CreditCard, Check } from "lucide-react";
import { SiStripe, SiPaypal } from "react-icons/si";

export default function Payment() {
  const [, setLocation] = useLocation();
  const [selectedProvider, setSelectedProvider] = useState<string | null>(null);

  const handlePayment = (provider: string) => {
    setSelectedProvider(provider);
    console.log(`Initiating ${provider} payment`);
    setTimeout(() => {
      setLocation("/payment/pending");
    }, 500);
  };

  const providers = [
    {
      id: "stripe",
      name: "Stripe",
      icon: SiStripe,
      description: "Industry-leading payment processing with global coverage",
      features: ["Credit & Debit Cards", "Apple Pay & Google Pay", "SEPA & ACH"],
    },
    {
      id: "paypal",
      name: "PayPal",
      icon: SiPaypal,
      description: "Trusted payment platform with buyer protection",
      features: ["PayPal Account", "Credit & Debit Cards", "Pay Later Options"],
    },
  ];

  return (
    <div className="min-h-screen bg-background px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 text-center">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
            <CreditCard className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Payment Integration</h1>
          <p className="text-muted-foreground">
            Choose your preferred payment provider
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {providers.map((provider) => {
            const Icon = provider.icon;
            return (
              <Card
                key={provider.id}
                className="hover-elevate cursor-pointer"
                onClick={() => handlePayment(provider.id)}
                data-testid={`card-payment-${provider.id}`}
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Icon className="h-8 w-8" />
                    {selectedProvider === provider.id && (
                      <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                        <Check className="h-4 w-4 text-primary-foreground" />
                      </div>
                    )}
                  </div>
                  <CardTitle>{provider.name}</CardTitle>
                  <CardDescription>{provider.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {provider.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-primary mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-4" data-testid={`button-select-${provider.id}`}>
                    Select {provider.name}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Card className="p-6">
          <p className="text-sm text-muted-foreground text-center">
            <strong>Integration Status:</strong> Payment provider integration is reserved for
            production deployment. API credentials and webhook handlers will be configured
            based on business requirements.
          </p>
        </Card>
      </div>
    </div>
  );
}
