import api from '../../api';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import {useState, useEffect} from 'react'
import { useParams } from  'react-router-dom'

const  ProductGrid =   () => {
    const navigate = useNavigate();
    
    const placeholders = Array(8).fill(null);
    
    const [products , setProducts] = useState([]);
    const [loading, setLoading] = useState(true);  
    const {category = 'none'} = useParams();
    const RedirectToProducts = (id) => {
        navigate(`/products/${id}`);
    }
    
    useEffect(()=>{
        const fetchData = async () => {
            try{
                
                const response = category === 'none' ? await axios.get('http://localhost:5144/api/Home') : await axios.get(`http://localhost:5144/api/Products/category/${category}`);
                
                console.log(response.data);
                console.log(category);
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
                                
                                <img src={product.thumbnail} alt={product.title} />
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