import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Privacy from "@/pages/Privacy";
import Projects from "@/pages/Projects";
import AiApps from "@/pages/AiApps";
import CommissionsCalculator from "@/pages/CommissionsCalculator";
import { InvestorsPage } from "@/pages/Investors";
import { CookieBanner } from "@/components/CookieBanner";
import { WhatsAppBanner } from "@/components/WhatsAppBanner";
import { PWABanner } from "@/components/PWABanner";
import { LanguageProvider } from "./lib/language-context";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home}/>
      <Route path="/privacy" component={Privacy} />
      <Route path="/projects" component={Projects} />
      <Route path="/ai-apps" component={AiApps} />
      <Route path="/investors" component={InvestorsPage} />
      <Route path="/trabajo-comisiones-calculadora" component={CommissionsCalculator} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <LanguageProvider>
      <QueryClientProvider client={queryClient}>
        <PWABanner />
        <Router />
        <CookieBanner />
        <WhatsAppBanner />
        <Toaster />
      </QueryClientProvider>
    </LanguageProvider>
  );
}

export default App;
