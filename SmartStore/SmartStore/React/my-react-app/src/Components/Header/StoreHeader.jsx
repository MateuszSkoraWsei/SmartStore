import { ShoppingCart, User, Search, Heart } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './StoreHeader.css';

const StoreHeader = () => {
    const [cartCount] = useState(3); // Przykładowa liczba produktów
    const navigate = useNavigate();
    
    const handleRedirect = () => {
        navigate('/');
    }
    return (
        <header className="main-header">
            <div className="header-container">

                
                
                    <div className="logo" onClick={handleRedirect}>
                        Smart<span>Store</span>
                    </div>
                
                

                
                <div className="search-wrapper">
                    <input type="text" placeholder="Szukaj produktów..." className="search-input" />
                    <button className="search-btn">
                        <Search size={18} />
                    </button>
                </div>

                
                <div className="actions">
                    <button className="action-btn hide-mobile">
                        <Heart size={22} />
                    </button>

                    <button className="action-btn user-btn">
                        <User size={22} />
                        <span className="btn-text">Zaloguj</span>
                    </button>

                    <button className="action-btn cart-btn">
                        <div className="icon-wrapper">
                            <ShoppingCart size={22} />
                            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
                        </div>
                    </button>
                </div>

            </div>
        </header>
    );
};

export default StoreHeader;