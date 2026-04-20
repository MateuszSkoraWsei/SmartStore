import { Outlet } from 'react-router-dom';
import StoreHeader from './Components/Header/StoreHeader';
import MainFooter from './Components/Footer/MainFooter';

const Layout = () =>{
   
    return (
        <div className="app-container">
            <header className="App-header">
                <StoreHeader />
                
            </header>
            
            <main className="content">
                <Outlet />
                
            </main>
            
            <MainFooter />
            
        </div>
    )
}

export default Layout;