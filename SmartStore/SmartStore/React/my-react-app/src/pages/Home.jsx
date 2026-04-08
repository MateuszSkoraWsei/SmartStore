import './Home.css';
import ProductDetails from './ProductDetails';


const Home = () => {
    return (
        <div className="home-container">
           
            <section className="hero-section">
                <div className="hero-text">
                    <h1>Nowa Kolekcja 2026</h1>
                    <p>Odkryj produkty, które zmieniają codzienność.</p>
                    <button className="btn-main">Sprawdź teraz</button>
                </div>
            </section>

           
            <section className="section-padding">
                <h2 className="section-title">Kategorie</h2>
                <div className="category-flex">
                    {['Elektronika', 'Moda', 'Dom', 'Sport'].map(cat => (
                        <div key={cat} className="category-pill">{cat}</div>
                    ))}
                </div>
            </section>

            
            <section className="section-padding">
                <h2 className="section-title">Polecane dla Ciebie</h2>
                <div className="product-grid">
                    
                    <ProductDetails />
                </div>
            </section>
        </div>
    );
};

export default Home; 