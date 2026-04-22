import ProductGrid  from '../Components/Home/ProductGrid.jsx';
import CategorySidebar from "../Components/Home/CategorySidebar.jsx";


const CategoryProducts = ({category}) => {
    return(
         <div>
             <aside className="sidebar-area">
                 <CategorySidebar />
             </aside>


             <main className="main-area">


                 <ProductGrid />
             </main>
         </div>
        )
        
    
}
export default CategoryProducts;