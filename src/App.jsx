
import React from 'react';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import HeroSection from './components/HeroSection/HeroSection';
import Navbar from './components/Navbar/Navbar';
import Products from './components/Products/Products';
import Services from './components/Services/Services';
function App() {
  return (
    <div className="w-full min-h-screen px-20 bg-zinc-800">
      <Navbar/>
      <HeroSection />
      <About />
      <Services/>
      <Products/>
      <Contact/>
      <Footer/>

    </div>
  );
}

export default App;
