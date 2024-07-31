import './App.css';
import Advertisment from './layout/home/advertise/advertise';
import Catalog from './layout/home/catalog/catalog';
import Footer from './layout/home/footer/footer';
import Hero from './layout/home/hero/hero';
import LastInfo from './layout/home/lastInfo/lastInfo';
import Navbar from './layout/home/navbar/navbar';
import Product from './layout/home/product/product';
import TopMenu from './layout/home/topMenu/topMenu';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero/>
      <TopMenu/> 
      <Catalog/>
      <Advertisment/>
      <Product/>
      <LastInfo/>
      <Footer/>
    </div>
  );
}

export default App;
