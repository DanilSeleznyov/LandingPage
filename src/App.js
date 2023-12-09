import './App.css';
import Colors from './components/Colors';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Header from './components/Header';
import Hero from './components/Hero';
import Modes from './components/Modes';
import Motor from './components/Motor';
import ProductInfo from './components/ProductInfo';
import Subscribe from './components/Subscribe';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div className="app">
      <Header/>
      <Hero/>
      <ProductInfo/>
      <Motor/>
      <Modes/>
      <Gallery/>
      <Colors/>
      <Testimonials/>
      <Subscribe/>
      <Footer/>
    </div>
  );
}

export default App;
