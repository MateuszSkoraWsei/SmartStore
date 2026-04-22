import './Home.css';



import CategorySidebar from '../Components/Home/CategorySidebar';
import ProductGrid from '../Components/Home/ProductGrid.jsx';

const Home = () => {
    return (
        <div className="home-container">
            
            

            
            <div className="section-padding">

                
                <div className="store-layout">

                    
                    <aside className="sidebar-area">
                        <CategorySidebar />
                    </aside>

                    
                    <main className="main-area">
                        

                        <ProductGrid />
                    </main>

                </div>
            </div>
        </div>
    );
};

export default Home;