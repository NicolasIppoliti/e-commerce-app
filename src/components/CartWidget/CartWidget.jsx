import { Link } from "react-router-dom"

const CartWidget = () => {
return (
    <div>
        <span>0</span>
        <Link to='/cart'>
            <img className='w-6 h-6' src='/img/cartWidget.svg' alt="" />
        </Link>
    </div>
)}

export default CartWidget