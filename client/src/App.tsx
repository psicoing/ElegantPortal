import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Privacy from "@/pages/Privacy";
import Projects from "@/pages/Projects";
import AiApps from "@/pages/AiApps";
import Sinapsy from "@/pages/Sinapsy";
import { CookieBanner } from "@/components/CookieBanner";
import { LanguageProvider } from "./lib/language-context";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home}/>
      <Route path="/privacy" component={Privacy} />
      <Route path="/projects" component={Projects} />
      <Route path="/ai-apps" component={AiApps} />
      <Route path="/sinapsy" component={Sinapsy} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <LanguageProvider>
      <QueryClientProvider client={queryClient}>
        <Router />
        <CookieBanner />
        <Toaster />
      </QueryClientProvider>
    </LanguageProvider>
  );
}

export default App;
