
import './App.css';
import Navbar from './components/eCart/navbar/Navbar';
import ProductList from './components/eCart/productList/ProductList';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from './components/eCart/cart/Cart';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<ProductList />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
