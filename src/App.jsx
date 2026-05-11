import Header from './components/Header';
import Hero from './components/Hero';
import Offers from './components/Offers';
import Categories from './components/Categories';
import About from './components/About';
import Services from './components/Services';
import Rooms from './components/Rooms';
import Packages from './components/Packages';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app-shell" id="home">
      <Header />
      <main>
        <Hero />
        <Offers />
        <Categories />
        <About />
        <Services />
        <Rooms />
        <Packages />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
