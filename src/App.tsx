import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import SchoolUniforms from "./pages/SchoolUniforms";
import WomensUniforms from "./pages/WomensUniforms";
import MensUniforms from "./pages/MensUniforms";
import CompanyUniforms from "./pages/CompanyUniforms";
import NotFound from "./pages/NotFound";
import AuthForm from "./components/auth/AuthForm";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/school-uniforms" element={<SchoolUniforms />} />
          <Route path="/womens-uniforms" element={<WomensUniforms />} />
          <Route path="/mens-uniforms" element={<MensUniforms />} />
          <Route path="/company-uniforms" element={<CompanyUniforms />} />
          <Route path="/hospital-uniforms" element={<CompanyUniforms />} />
          <Route path="/hotel-uniforms" element={<CompanyUniforms />} />
          <Route path="/other-uniforms" element={<CompanyUniforms />} />
          <Route path="/auth" element={<AuthForm />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
