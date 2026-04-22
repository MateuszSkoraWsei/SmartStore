import {   Mail, MapPin, Phone, CreditCard } from 'lucide-react';

const MainFooter = () => {
    return (
        <footer className="main-footer">
            
           

            
            <div className="footer-grid">

                
                <div className="footer-col">
                    <div className="footer-logo">
                        Smart<span>Store</span>
                    </div>
                    <p className="footer-desc">
                        Tworzymy przestrzeń dla ludzi ceniących jakość i nowoczesny design. Twój styl, Twoje zasady.
                    </p>
                    <div className="social-links">
                        
                        
                    </div>
                </div>

                
                <div className="footer-col">
                    <h4>Obsługa Klienta</h4>
                    <ul>
                        <li><a href="#">Centrum pomocy (FAQ)</a></li>
                        <li><a href="#">Śledzenie zamówienia</a></li>
                        <li><a href="#">Zwroty i reklamacje</a></li>
                        <li><a href="#">Metody dostawy</a></li>
                    </ul>
                </div>

                
                <div className="footer-col">
                    <h4>Kontakt</h4>
                    <ul className="contact-info">
                        <li><MapPin size={16} /> ul. Przykładowa 12, Warszawa</li>
                        <li><Phone size={16} /> +48 123 456 789</li>
                        <li><Mail size={16} /> kontakt@smartstore.pl</li>
                    </ul>
                </div>

                
                

            </div>

            
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} SmartStore. Wszelkie prawa zastrzeżone.</p>
                <div className="footer-bottom-links">
                    <a href="#">Regulamin</a>
                    <a href="#">Polityka Prywatności</a>
                    <a href="#">Cookies</a>
                </div>
            </div>
        </footer>
    );
};

export default MainFooter;

