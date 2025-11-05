import { useState } from "react";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navigation from "@/components/Navigation";
import AISupportButton from "@/components/AISupportButton";
import Home from "@/pages/Home";
import Register from "@/pages/Register";
import Login from "@/pages/Login";
import EmailVerification from "@/pages/EmailVerification";
import Profile from "@/pages/Profile";
import Translation from "@/pages/Translation";
import Dashboard from "@/pages/Dashboard";
import Payment from "@/pages/Payment";
import PaymentPending from "@/pages/PaymentPending";
import CloudStorage from "@/pages/CloudStorage";
import Architecture from "@/pages/Architecture";
import NotFound from "@/pages/not-found";

function Router() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const userEmail = isAuthenticated ? "demo@example.com" : undefined;

  const handleLogout = () => {
    console.log("User logged out");
    setIsAuthenticated(false);
  };

  return (
    <>
      <Navigation
        isAuthenticated={isAuthenticated}
        userEmail={userEmail}
        onLogout={handleLogout}
      />
      <div className="pt-16">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/verify-email" component={EmailVerification} />
          <Route path="/profile" component={Profile} />
          <Route path="/translate" component={Translation} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/payment" component={Payment} />
          <Route path="/payment/pending" component={PaymentPending} />
          <Route path="/storage" component={CloudStorage} />
          <Route path="/architecture" component={Architecture} />
          <Route component={NotFound} />
        </Switch>
      </div>
      <AISupportButton />
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
