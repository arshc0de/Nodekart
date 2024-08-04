import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Topnav from "./components/Home_components/topnav";
import Navbar from "./components/Home_components/navbar";
import Footer from "./components/Home_components/footer";
import Home from "./Pages/Home/Home";
import Shop from "./Pages/Shop/shop";
function App() {
  return (
      <BrowserRouter>
      <Topnav />
      <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}></Route>
        </Routes>
        <Routes>
          <Route path="/shop" element={<Shop/>}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
  );
}

export default App;
