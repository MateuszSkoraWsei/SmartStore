import { useState, useEffect } from 'react'
import  axios  from "axios";


const CategorySidebar = () => {
    
    const [categories, setCategories] = useState(true);
    const [loading, setLoading] = useState(true);
    
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
            <div className="category-sidebar">
                <h3 className="sidebar-heading">Kategorie</h3>
                <nav className="sidebar-nav category-flex">
                    {categories.map((cat, index) => (
                        <button key={index} className="sidebar-link">
                            {cat}
                        </button>
                    ))}
                </nav>
            </div>
        );
    }
    
};

export default CategorySidebar;