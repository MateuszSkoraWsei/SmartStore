import { ShoppingCart } from 'lucide-react';


const CartSideBar = () =>{

    return(
<div className="relative">
        <button>
            <ShoppingCart></ShoppingCart>
            <span className='badge'>3</span>
        </button>

    </div>
    )
    
}

export default CartSideBar;