import logo from './logo.svg';
import './App.css';
import Navbar from './Container/Navbar/Navbar';
import HeroSection from './Component/LandingPage/HeroSection/HeroSection';
import About from './Component/LandingPage/About/About';
import ProductSection from './Component/LandingPage/Product/ProductSection';
import UpComing from './Component/LandingPage/UpComing/UpComing';
import Footer from './Container/Footer/Footer';
function App() {
  return (
    <div className="App">
{/* <Navbar /> */}
<HeroSection />
<About />
<ProductSection />
<UpComing />
<Footer />
    </div>
  );
}

export default App;
