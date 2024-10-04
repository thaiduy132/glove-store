import logo from './logo.svg';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import './App.css';
import HomePage from './Components/HomePage';
import Header from './Components/Header';
import Breadcrumbs from './Components/Breadscrumb';
import Footer from './Components/Footer';
import ProductDetail from './Components/ProductDetail';
import { Routes, Route } from "react-router-dom"

import ProductList from './Components/ProductList';
function App() {
  return (
    <div className="App">
      <Header />
      <Breadcrumbs />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="products" element={<ProductDetail />} />
      </Routes>
      <Footer />
    </div>

  );
}

export default App;
