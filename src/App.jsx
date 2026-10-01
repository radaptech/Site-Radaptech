import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Hero from './pages/home/Hero';
import About from './pages/home/About';
import Services from './pages/home/Services';
import EpiSystem from './components/EpiSystem';
import Process from './pages/home/Process';
import Contact from './pages/home/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import SystemPage from './pages/sistema-epi/SystemPage';

function App() {
  return (
    <BrowserRouter>
      <main className="relative min-h-screen overflow-x-hidden bg-white font-sans text-slate-900 antialiased">

        <div className="relative z-10">
          <Header />

          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <About />
                  <Services />
                  <EpiSystem />
                  <Process />
                  <Contact />
                </>
              }
            />

            <Route path="/sistema-epi" element={<SystemPage />} />
          </Routes>

          <Footer />
          <BackToTop />
        </div>
      </main>
    </BrowserRouter>
  );
}

export default App;