import { X } from 'lucide-react';


const CartSideBar = ({isOpen,onClose}) =>{

    return(
        <>
            <div
                className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                onClick={onClose}
            />


            <div className={`fixed right-0 top-0 h-full w-80 bg-white z-50 shadow-2xl transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="p-4 flex justify-between items-center border-bottom">
                    <h2 className="text-xl font-semibold">Twój koszyk</h2>
                    <button onClick={onClose}><X size={24} /></button>
                </div>

                <div className="p-4">
                    <p className="text-gray-500">Koszyk jest pusty...</p>
                </div>
            </div>
        </>
        
    )
    
}

export default CartSideBar;