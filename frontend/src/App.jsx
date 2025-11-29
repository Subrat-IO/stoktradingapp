import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./landing-page/home/HomePage.jsx";
import SignUp from "./landing-page/signUp/signup.jsx";
import Pricing from "./landing-page/pricing/Pricing.jsx";
import SupportPage from "./landing-page/support/supportPage.jsx";
import Products from "./landing-page/product/ProductPage.jsx";
import AboutPage from "./landing-page/About/AboutPage.jsx";
import Navbar from "./landing-page/Navbar/navbar.jsx";
import Footer from "./landing-page/Footer/footer.jsx";
import NotFound from "./landing-page/NotFound.jsx";
import Login from "./landing-page/Login.jsx";
import Signup from "./landing-page/signUp/signup.jsx";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div style={{ marginTop: "100px" }}></div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Signup />} />

        <Route path="/pricing" element={<Pricing />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
