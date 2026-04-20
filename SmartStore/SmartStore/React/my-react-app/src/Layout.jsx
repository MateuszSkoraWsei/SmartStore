import { Outlet } from 'react-router-dom';
import StoreHeader from './Components/Header/StoreHeader.jsx';
import MainFooter from './Components/Footer/MainFooter.jsx';

const Layout = () =>{
    return (
        <div className="app-container">
            <StoreHeader />
            
            <main className="content">
                <Outlet />
                
            </main>
            
            <MainFooter />
            
        </div>
    )
}

export default Layout;