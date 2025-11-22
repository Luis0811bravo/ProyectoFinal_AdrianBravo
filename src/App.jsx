import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import CategoriesListContainer from './components/CategoriesListContainer';
import ProductListContainer from './components/ProductsListContainer';
import ProductDetailContainer from './components/ProductDetailContainer';
import Contact from './components/Contact';
import Home from './components/Home';
import CartContainer from './components/CartContainer';
import Checkout from './components/Checkout';

import { CartProvider } from './context/CartContext';
function App() {

  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/categories" element={<CategoriesListContainer mensaje="¡Bienvenido! ¿Qué te gustaría probar hoy?" />} />
          <Route path="/products/:categoryId" element={<ProductListContainer />} />
          <Route path="/product/:productId" element={<ProductDetailContainer />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<CartContainer />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
