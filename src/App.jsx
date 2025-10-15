import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import NavBar from './components/NavBar';
import CategoriesListContainer from './components/CategoriesListContainer';
import ProductListContainer from './components/ProductsListContainer';

function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/categories" element={<CategoriesListContainer mensaje="¡Bienvenido! ¿Qué te gustaría probar hoy?" />} />
        <Route path="/products/:categoryId" element={<ProductListContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
