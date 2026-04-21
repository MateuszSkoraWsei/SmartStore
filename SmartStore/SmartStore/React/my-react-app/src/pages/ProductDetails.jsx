import Home from "./Home.jsx";

import axios from "axios"; 
import './ProductDetails.css';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(false);
    const { id } = useParams();
    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await axios.get(`http://localhost:5144/api/products/${id}`);
                setProduct(response.data.data);

            }
            catch(err){
                setLoading(true);
                console.log(err);
            }
            finally {
                setLoading(false);
            }
        }
        fetchData();
        
    },[])
    
    if(loading){
        return <div>Loading...</div>;
    }
    else{
        
        return (
            
            <div className="product-page-container">
                <div className="product-split">


                    <div className="product-gallery">
                        <img src={product.images} className="main-img" alt="product.title" />
                        <div className="thumbnails">
                            <img src="thumb1.jpg" /> <img src="thumb2.jpg" />
                        </div>
                    </div>


                    <div className="product-info">
                        <span className="brand-tag">{product.category}</span>
                        <h1>{product.title}</h1>
                        <p className="price">{product.price} zł</p>

                        <div className="description">
                            <h3>Opis produktu</h3>
                            <p>{product.description}</p>
                        </div>

                        <div className="purchase-zone">
                            <input type="number" defaultValue={1} className="qty-input" />
                            <button className="btn-add-to-cart">Dodaj do koszyka</button>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
    
    
};

export default ProductDetails;