import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";
import ChatBot from "@/components/ChatBot";
import { lazy, Suspense, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Index = lazy(() => import("./pages/Index"));
const Periodontics = lazy(() => import("./pages/Periodontics"));
const Implants = lazy(() => import("./pages/Implants"));
const LANAP = lazy(() => import("./pages/LANAP"));
const Exams = lazy(() => import("./pages/Exams"));
const Doctors = lazy(() => import("./pages/Doctors"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return null;
};

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin" />
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <main className="min-h-screen pb-16 lg:pb-0">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/periodontics" element={<Periodontics />} />
              <Route path="/implants" element={<Implants />} />
              <Route path="/lanap" element={<LANAP />} />
              <Route path="/exams" element={<Exams />} />
              <Route path="/doctors" element={<Doctors />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <StickyCTA />
        <ChatBot />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
