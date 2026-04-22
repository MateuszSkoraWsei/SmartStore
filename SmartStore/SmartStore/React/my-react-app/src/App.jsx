import api from './api';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import CategoryProducts from './pages/CategoryProducts.jsx';
import  './index.css';



export default function App() {
    
    return (
       <BrowserRouter>
           <Routes>
               <Route path="/" element={<Layout/>} >
               <Route index element={<Home/>} />
               
               <Route path="products/:id" element={<ProductDetails/>} />
                   <Route path="/:category" element={<CategoryProducts/>} />
                   </Route >
               
           </Routes>
       </BrowserRouter>
    )
}
