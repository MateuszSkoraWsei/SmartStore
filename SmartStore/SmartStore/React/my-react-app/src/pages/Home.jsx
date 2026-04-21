import './Home.css';


import Hero from '../Components/Home/Hero';
import CategorySidebar from '../Components/Home/CategorySidebar';
import ProductGrid from '../Components/Home/ProductGrid.jsx';

const Home = () => {
    return (
        <div className="home-container">
            
            <Hero />

            
            <div className="section-padding">

                
                <div className="store-layout">

                    
                    <aside className="sidebar-area">
                        <CategorySidebar />
                    </aside>

                    
                    <main className="main-area">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-2xl font-bold">Wszystkie produkty</h2>
                            
                        </div>

                        <ProductGrid />
                    </main>

                </div>
            </div>
        </div>
    );
};

export default Home;