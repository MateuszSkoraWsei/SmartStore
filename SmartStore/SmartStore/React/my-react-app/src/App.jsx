import api from './api';
import  './index.css';

import StoreHeader from './Components/Header/StoreHeader';
import MainFooter from './Components/Footer/MainFooter';
import Home from './pages/Home';

export default function App() {
    
    return (
       <div className="app-container">
        <StoreHeader/>
           <main>
               <Home/>
           </main>
           <MainFooter/>

       </div>
    )
}
