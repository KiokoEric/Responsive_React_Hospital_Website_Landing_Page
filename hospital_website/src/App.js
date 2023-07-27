import './App.css';
import About from './Components/About/About';
import Blog from './Components/Blog/Blog';
import Contact from './Components/Contact/Contact';
import Doctors_Listing from './Components/Doctors_Listing/Doctors_Listing';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Medical_Services from './Components/Medical_Services/Medical_Services';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Medical_Services />
      <About />
      <Doctors_Listing />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
