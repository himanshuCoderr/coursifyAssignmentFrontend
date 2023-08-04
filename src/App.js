// import logo from "./logo.svg";
import "./App.css";
import Navigation from "./components/Navigation";
import FindJob from "./components/FindJob";
import LeadingCompony from "./components/LeadingCompony";
import HowItWorks from "./components/HowItWorks";
import TopHire from "./components/TopHire";
import BuiltByTechies from "./components/BuiltByTechies";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      <Navigation />
      <FindJob></FindJob>
      <LeadingCompony></LeadingCompony>
      <HowItWorks></HowItWorks>
      <TopHire></TopHire>
      <BuiltByTechies />
      <Footer></Footer>
    
    </div>
  );
}

export default App;
