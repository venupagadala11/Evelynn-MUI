
import './App.css';
import AppFeatures from './AppFeatures/AppFeatures';
import featureData from './data';
import Header from './Header/Header.jsx';
import MusicApp from './MusicApp/MusicApp';
import ProductAnalysis from './Components/Product-Analysis/ProductAnalysis.jsx';
import FeaturesAnalysis from './Components/Features-Anlaysis/FeaturesAnalysis';
import ServiceCard from './common-components/ServiceCard.jsx/ServiceCard';
import Service from './Components/Services/Service';
import Customers from './Components/Customers/Customers';
import Download from './Components/Download/Download';

function App() {
  const fun =()=>
  {
    console.log("hii",featureData)
  }
  return (
    <div className="App">
      <Header/>
      <MusicApp/>
      <AppFeatures/>
      <ProductAnalysis/>
      <FeaturesAnalysis/>
      <Service/>
      <Customers/>
      <Download/>
    </div>
  );
}

export default App;
