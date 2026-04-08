import './Home.css';


import Hero from '../Components/Home/Hero';
import CategorySidebar from '../Components/Home/CategorySidebar';
import ProductGrid from '../Components/Home/ProductGrid.jsx';

const Home = () => {
    return (
        <div className="home-container">
            {/* 1. Baner zostaje na całą szerokość */}
            <Hero />

            {/* Kontener ograniczający szerokość strony */}
            <div className="section-padding">

                {/* 2. Nowy grid dla Sidebaru i Produktów */}
                <div className="store-layout">

                    {/* Lewa kolumna - KATEGORIE */}
                    <aside className="sidebar-area">
                        <CategorySidebar />
                    </aside>

                    {/* Prawa kolumna - PRODUKTY */}
                    <main className="main-area">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-2xl font-bold">Wszystkie produkty</h2>
                            {/* Tu w przyszłości można dodać sortowanie, np. rosnąco/malejąco */}
                        </div>

                        <ProductGrid />
                    </main>

                </div>
            </div>
        </div>
    );
};

export default Home;