import './App.css';
import Navbar from './components/sections/Navbar/Navbar.jsx';
import Section1 from './components/sections/top-section/Section1';
import Section2 from './components/sections/top-section/Section2';
import Section3 from './components/sections/top-section/Section3';
import Band from './components/sections/mid-sectiom/band';
import ExplainSection from './components/sections/mid-sectiom/ExplainSection';
import HiwBand from './components/sections/mid-sectiom/hiw-band';
import VideoSection from './components/sections/bottom-section/VideoSection';
import Industries from './components/sections/mid-sectiom/industries';
import Blog from './components/sections/bottom-section/Blog';
import Footer from './components/sections/footer-section/Footer';
import Product from './components/sections/top-section/Product';
import GetStarted from './components/sections/mid-sectiom/getStarted';
function App() {
  return (
    <div className="App">
    <Navbar />
    <Section1 />
    <Section2 />
    <Section3 />
    <Product />
    <Band />
    <HiwBand />
    <ExplainSection />
    <Industries />
    <GetStarted />
    <VideoSection />
    <Blog />
    <Footer />
    </div>
  );
}
export default App;
