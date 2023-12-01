import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Modes from './components/Modes';
import Motor from './components/Motor';
import ProductInfo from './components/ProductInfo';

function App() {
  return (
    <div className="app">
      <Header/>
      <Hero/>
      <ProductInfo/>
      <Motor/>
      <Modes/>
    </div>
  );
}

export default App;
