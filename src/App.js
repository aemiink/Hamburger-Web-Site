import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from "./componenets/Home";
import Contact from "./componenets/Contact.jsx";
import About from "./componenets/About.jsx";
import Navbar from "./componenets/Navbar";
import Footer from "./componenets/Footer";
import Menu from "./componenets/Menu";

function App() {
  return (
    <div className="App">
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/menu" element={<Menu/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
