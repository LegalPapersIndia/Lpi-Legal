import './App.css';
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layout Components
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import ScrollToTop from './Components/ScrollToTop';
import ServicesPage from './Pages/Services';

// Lazy Loading Pages for Performance
const Home = lazy(() => import('./Pages/Home'));
const AboutPage = lazy(() => import('./Pages/About'));
const Services = lazy(() => import('./Components/Sevices'));
const Testimonials = lazy(() => import('./Pages/Testimonials'));
const ContactPage = lazy(() => import('./Pages/Contact'));

// A sleek loading fallback
const PageLoader = () => (
  <div className="h-screen w-full flex items-center justify-center bg-white">
    <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

function App() {
  return (
    <Router>
      <ScrollToTop /> 
      <Navbar />
      
      {/* Remove global padding here */}
      <main> 
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </Suspense>
      </main>

      <Footer />
    </Router>
  );
}

export default App;