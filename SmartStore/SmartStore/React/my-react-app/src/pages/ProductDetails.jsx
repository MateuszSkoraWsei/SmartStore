import Home from "./Home.jsx";
import './ProductDetails.css';

const ProductDetails = () => {
    return (
        <div className="product-page-container">
            <div className="product-split">

                {/* LEWO: Galeria zdjęć */}
                <div className="product-gallery">
                    <img src="placeholder.jpg" className="main-img" alt="Produkt" />
                    <div className="thumbnails">
                        <img src="thumb1.jpg" /> <img src="thumb2.jpg" />
                    </div>
                </div>

                {/* PRAWO: Info i Zakup */}
                <div className="product-info">
                    <span className="brand-tag">Premium Brand</span>
                    <h1>Nazwa Twojego Produktu</h1>
                    <p className="price">499.00 PLN</p>

                    <div className="description">
                        <h3>Opis produktu</h3>
                        <p>Tutaj znajdzie się szczegółowy opis pobrany z Twojego API...</p>
                    </div>

                    <div className="purchase-zone">
                        <input type="number" defaultValue={1} className="qty-input" />
                        <button className="btn-add-to-cart">Dodaj do koszyka</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ProductDetails;