import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Database, Cloud, Lock, Zap, ArrowRight } from "lucide-react";

export default function Architecture() {
  const sections = [
    {
      title: "Technology Stack",
      icon: Code,
      content: [
        {
          label: "Frontend",
          items: ["React with TypeScript", "Tailwind CSS & Shadcn UI", "Wouter for routing", "TanStack Query for state management"],
        },
        {
          label: "Backend",
          items: ["Node.js with Express", "PostgreSQL database", "Drizzle ORM", "RESTful API architecture"],
        },
        {
          label: "Infrastructure",
          items: ["S3-compatible object storage", "Email service (SMTP/SendGrid)", "reCAPTCHA integration", "LibreTranslate API"],
        },
      ],
    },
    {
      title: "Architectural Patterns",
      icon: Database,
      content: [
        {
          label: "Backend Design",
          items: [
            "Modular service layer architecture",
            "Separation of concerns (routes, storage, services)",
            "Interface-based storage abstraction",
            "Idempotency key support for critical operations",
          ],
        },
        {
          label: "Frontend Design",
          items: [
            "Component-based UI architecture",
            "Reusable shadcn component library",
            "Client-side routing with code splitting",
            "Centralized API request handling",
          ],
        },
      ],
    },
    {
      title: "Security & Authentication",
      icon: Lock,
      content: [
        {
          label: "User Authentication",
          items: [
            "Email verification flow with 6-digit codes",
            "Password hashing with bcrypt/argon2",
            "Session management with secure tokens",
            "reCAPTCHA protection on registration",
          ],
        },
        {
          label: "API Security",
          items: [
            "Input validation with Zod schemas",
            "CORS configuration",
            "Rate limiting on sensitive endpoints",
            "SQL injection prevention via ORM",
          ],
        },
      ],
    },
    {
      title: "Scalability & Future Expansion",
      icon: Zap,
      content: [
        {
          label: "Horizontal Scaling",
          items: [
            "Stateless API design for load balancing",
            "Database connection pooling",
            "CDN integration for static assets",
            "Microservices-ready architecture",
          ],
        },
        {
          label: "Planned Integrations",
          items: [
            "Stripe/PayPal payment processing",
            "AI chatbot (GPT/Claude API)",
            "Real-time analytics with time-series database",
            "Multi-region deployment support",
          ],
        },
      ],
    },
  ];

  const futureModules = [
    "Real-time notification system (WebSockets)",
    "Advanced analytics with data warehousing",
    "Mobile app development (React Native)",
    "GraphQL API layer for flexible querying",
    "Kubernetes orchestration for container management",
  ];

  return (
    <div className="min-h-screen bg-background px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Architecture Overview</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            This prototype demonstrates a modern, cloud-native platform architecture designed for
            scalability, maintainability, and future expansion. The system follows industry best
            practices and is built with modular, reusable components.
          </p>
        </div>

        <div className="space-y-8 mb-12">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <Card key={index} data-testid={`card-section-${index}`}>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">{section.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  {section.content.map((subsection, subIndex) => (
                    <div key={subIndex}>
                      <h4 className="font-semibold text-base mb-3">{subsection.label}</h4>
                      <ul className="space-y-2">
                        {subsection.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start text-sm text-muted-foreground">
                            <ArrowRight className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Cloud className="h-5 w-5 text-primary" />
              </div>
              <CardTitle className="text-2xl">Cloud Assembly Model</CardTitle>
            </div>
            <CardDescription>
              Integration of mature third-party services and cloud components
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Rather than building everything from scratch, this platform leverages proven cloud
              services and APIs. This approach reduces development time, improves reliability, and
              allows the team to focus on core business logic rather than infrastructure management.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-muted rounded-lg">
                <h5 className="font-semibold text-sm mb-2">Current Integrations</h5>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• LibreTranslate API (translation)</li>
                  <li>• PostgreSQL (managed database)</li>
                  <li>• SMTP email service</li>
                  <li>• reCAPTCHA (security)</li>
                </ul>
              </div>
              <div className="p-4 bg-muted rounded-lg">
                <h5 className="font-semibold text-sm mb-2">Reserved Integrations</h5>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Stripe/PayPal (payments)</li>
                  <li>• S3-compatible storage</li>
                  <li>• GPT/Claude (AI support)</li>
                  <li>• Analytics platform</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Future Expansion Paths</CardTitle>
            <CardDescription>
              Planned features and infrastructure improvements
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {futureModules.map((module, index) => (
                <li key={index} className="flex items-start text-sm">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <span className="text-xs font-semibold text-primary">{index + 1}</span>
                  </div>
                  <span className="text-muted-foreground">{module}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 p-4 bg-primary/5 border border-primary/20 rounded-lg">
              <p className="text-sm text-foreground">
                <strong>Extensibility Note:</strong> The modular architecture allows for incremental
                feature additions without major refactoring. Each new module can be developed and
                deployed independently, following the same cloud assembly principles.
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 p-6 bg-card border border-card-border rounded-lg">
          <h3 className="text-lg font-semibold mb-2">File Structure</h3>
          <pre className="text-xs font-mono text-muted-foreground overflow-x-auto">
{`project/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Page-level components
│   │   ├── lib/            # Utilities & helpers
│   │   └── App.tsx         # Application entry
│   └── index.html
├── server/                 # Express backend
│   ├── routes.ts           # API route definitions
│   ├── storage.ts          # Data persistence layer
│   └── index.ts            # Server entry point
├── shared/                 # Shared types & schemas
│   └── schema.ts           # Database models & validation
└── database/               # PostgreSQL migrations`}
          </pre>
        </div>
      </div>
    </div>
  );
}
