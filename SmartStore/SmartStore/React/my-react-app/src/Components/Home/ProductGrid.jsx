import api from '../../api';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import {useState, useEffect} from 'react'

const  ProductGrid =   () => {
    const navigate = useNavigate();
    
    const placeholders = Array(8).fill(null);
    
    const [products , setProducts] = useState([]);
    const [loading, setLoading] = useState(true);  
    
    const RedirectToProducts = (id) => {
        navigate(`/products/${id}`);
    }
    
    useEffect(()=>{
        const fetchData = async () => {
            try{
                const response =  await axios.get('http://localhost:5144/api/Home');
                
               
                setProducts(response.data.products || response.data.data);
                
            }
            catch(err){
                console.error("Błąd pobierania:",err);
            }
            finally{
                setLoading(false);
            }
            
        }


        fetchData();

    },[]);
    
    

    if (loading) {
        return <div className="p-8 text-center text-gray-500">Ładowanie produktów z serwera...</div>;
    }
   
    else{
       
        return (

            <div className="product-grid">
                {products.map((product) => (
                    <div key={product.id} className="product-card" onClick={() => RedirectToProducts(product.id)}>
                        <div className="product-card-img">
                            <div className="img-placeholder">
                                
                                <img src={product.images[0]} alt={product.title} />
                            </div>
                        </div>
                        <div className="product-card-info">
                            <span className="card-brand">{product.category}</span>
                            <h4>{product.title}</h4>
                            <p className="card-price">{product.price} PLN</p>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
    
};

export default ProductGrid;