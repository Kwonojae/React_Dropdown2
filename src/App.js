import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Consulting from "./pages/Consulting";
import Contactus from "./pages/Contactus";
import Design from "./pages/Design";
import Development from "./pages/Development";
import Home from "./pages/Home";
import Marketing from "./pages/Marketing";
import Products from "./pages/Products";
import Services from "./pages/Services";
import Signup from "./pages/Signup";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/products" element={<Products />} />
          <Route path="/services" element={<Services />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/marketing" element={<Marketing />} />
          <Route path="/development" element={<Development />} />
          <Route path="/design" element={<Design />} />
          <Route path="/consulting" element={<Consulting />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
