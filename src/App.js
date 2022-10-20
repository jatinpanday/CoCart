import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Asian from "./components/MainContent/Asian";
import Cart from "./components/MainContent/Cart";
import MainContent from "./components/MainContent/MainContent";
import ShopDetails from "./components/MainContent/shopDetails";
import { CartContext } from "./context/CartContext";
import { ContextProvider } from "./context/ContextProvider";

function App() {
  return (
    <>
      <div className="App">
        <CartContext>
          <ContextProvider>
            <Header />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<MainContent />} />
                <Route path="/shopDetails" element={<ShopDetails />} />
                <Route path="/asian" element={<ShopDetails />} />
                <Route path="/beer" element={<ShopDetails />} />
                <Route path="/beverage" element={<ShopDetails />} />
                <Route path="/bread" element={<ShopDetails />} />
                <Route path="/dairy" element={<ShopDetails />} />
                <Route path="/frozen" element={<ShopDetails />} />
                <Route path="/cart" element={<Cart />} />
              </Routes>
            </BrowserRouter>
            <Footer />
          </ContextProvider>
        </CartContext>
      </div>
    </>
  );
}

export default App;
