import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './header.jsx'
import Footer from './footer.jsx'
import Product from './Producto.jsx'
import Main2 from './Main2.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Main2/>
    <Footer/>
  </React.StrictMode>,
)
