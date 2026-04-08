const ProductGrid = () => {
    
    const placeholders = Array(8).fill(null);

    return (
        <div className="product-grid">
            {placeholders.map((_, i) => (
                <div key={i} className="product-card">
                    <div className="product-card-img">
                        <div className="img-placeholder"></div>
                    </div>
                    <div className="product-card-info">
                        <span className="card-brand">Marka Premium</span>
                        <h4>Przykładowy Produkt #{i + 1}</h4>
                        <p className="card-price">299.00 PLN</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductGrid;