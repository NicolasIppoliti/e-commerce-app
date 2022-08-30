import { Link } from "react-router-dom"
import { CartContext } from '../../CartContext';
import { useContext } from "react";

const CartWidget = () => {

    const {totalProducts} = useContext(CartContext);

return (
    <div>
        <Link to='/cart'>
            <img className='w-6 h-6' src='/img/cartWidget.svg' alt="" />
            <span className='text-xs text-gray-500 align-top'>{totalProducts() || ''}</span>
        </Link>
    </div>
)}

export default CartWidget