import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ProductsPage from './components/ProductsPage';
import ProductDetail from './components/ProductDetail';
import HomePage from './components/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="productDetail" element={<ProductDetail />} >
            <Route path=":productID" element={<ProductDetail />} />
          </Route>
          <Route path="*" element={<h1> Route Not Found</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);