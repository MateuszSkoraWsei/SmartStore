import './CategorySidebar.css';

import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import  axios  from "axios";


const CategorySidebar = () => {
    const navigate = useNavigate();
    const [categories, setCategories] = useState(true);
    const [loading, setLoading] = useState(true);
    
    const handleRedirect = (category) => {
        navigate(`${category}`);
    }
    
    useEffect( () => async () =>{
        try{
            const response = await axios.get("http://localhost:5144/api/Categories/getAll");
            
            setCategories(response.data.data);
            
        }
        catch(err){
            setLoading(true);
            console.log(err);
        }
        finally{
            setLoading(false);
        }
    },[])

    
    if(loading){
        <div>Ładowanie kategorii</div>
    }
    else{
        return (
            <div className="category-navbar">
                <h3 className="sidebar-heading">Kategorie</h3>
                <nav className="sidebar-nav ">
                    {categories.map((cat, index) => (
                        <div key={index} className="sidebar-link" onClick={() => handleRedirect(cat)}>
                            {cat}
                        </div>
                    ))}
                </nav>
            </div>
        );
    }
    
};

export default CategorySidebar;