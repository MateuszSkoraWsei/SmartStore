import {   Mail, MapPin, Phone, CreditCard } from 'lucide-react';

const MainFooter = () => {
    return (
        <footer className="main-footer">
            {/* SEKCJA 1: Newsletter */}
            <div className="footer-newsletter">
                <div className="newsletter-content">
                    <h3>Zapisz się do Newslettera</h3>
                    <p>Otrzymaj 10% rabatu na pierwsze zakupy i bądź na bieżąco z nowościami.</p>
                </div>
                <div className="newsletter-form">
                    <input type="email" placeholder="Twój adres e-mail" className="newsletter-input" />
                    <button className="btn-main newsletter-btn">Zapisz się</button>
                </div>
            </div>

            {/* SEKCJA 2: Główne linki */}
            <div className="footer-grid">

                {/* Kolumna 1: O nas */}
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

                {/* Kolumna 2: Obsługa Klienta */}
                <div className="footer-col">
                    <h4>Obsługa Klienta</h4>
                    <ul>
                        <li><a href="#">Centrum pomocy (FAQ)</a></li>
                        <li><a href="#">Śledzenie zamówienia</a></li>
                        <li><a href="#">Zwroty i reklamacje</a></li>
                        <li><a href="#">Metody dostawy</a></li>
                    </ul>
                </div>

                {/* Kolumna 3: Kontakt */}
                <div className="footer-col">
                    <h4>Kontakt</h4>
                    <ul className="contact-info">
                        <li><MapPin size={16} /> ul. Przykładowa 12, Warszawa</li>
                        <li><Phone size={16} /> +48 123 456 789</li>
                        <li><Mail size={16} /> kontakt@smartstore.pl</li>
                    </ul>
                </div>

                {/* Kolumna 4: Płatności */}
                <div className="footer-col">
                    <h4>Bezpieczne płatności</h4>
                    <p className="footer-desc mb-2">Akceptujemy większość popularnych metod płatności.</p>
                    <div className="payment-icons">
                        <CreditCard size={28} />
                        {/* Tutaj możesz później dodać logo Blika, PayU, Visa itp. jako obrazki */}
                        <span className="payment-badge">BLIK</span>
                        <span className="payment-badge">PayU</span>
                    </div>
                </div>

            </div>

            {/* SEKCJA 3: Bottom Bar */}
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

