import api from '../../api';

const  ProductGrid =  () => {
    
    const placeholders = Array(8).fill(null);
    
    const  response =  api.get('/Home');
    const products = response.data;
    

    return (
        <div className="product-grid">
            {products.map((product) => (
                <div key={product.id} className="product-card">
                    <div className="product-card-img">
                        <div className="img-placeholder">
                            <img src={product.images} alt={product.title} />
                        </div>
                    </div>
                    <div className="product-card-info">
                        <span className="card-brand">{product.category}</span>
                        <h4>{product.title}</h4>
                        <p className="card-price">{product.price}PLN</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductGrid;