import ItemCount from '../../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../../CartContext';
import { useState } from 'react';

const Items = ({id, name, price, img, category, stock, discount, description}) => {

    const qtyCart = 0;
    const [quantityInCart, setQuantityInCart] = useState(qtyCart);
    const {addToCart} = useContext(CartContext);

    const handleAdd = (quantity) => {
        setQuantityInCart(quantity);
        let itemToCart = {id, name, price, img, category, stock, discount, description};
        addToCart(itemToCart, quantity);
    }

    return (
            <div className="bg-white text-gray-700 items-center w-full h-full overflow-hidden sm:grid sm:grid-cols-2 xl:grid-cols-3">
                <div className='mx-10 mt-10'>
                <img
                    src={img}
                    className="w-80 h-full object-cover md:w-96 2xl:w-full"
                    alt=""/>
                </div>
                <div className="p-5 flex flex-col gap-3 lg:mt-10 xl:order-3">
                    <h4 className='font-medium text-xl overflow-ellipsis overflow-hidden whitespace-nowrap sm:mt-4 md:mt-10 lg:text-2xl 2xl:pb-3'>{name}</h4>
                    <div>
                        <span className='text-2xl font-light'>
                            {discount}
                        </span>
                        <div className='flex items-center gap-2 mt-1'>
                            <span className='text-sm line-through opacity-50'>
                                {price}
                            </span>
                            <span className='bg-green-600 px-1.5 py-0.5 rounded-md text-xs text-white'>
                                20% OFF
                            </span>
                        </div>
                        <div className='flex items-center gap-2 my-5 lg:my-7'>
                            <span><img className='w-4 h-4' src='/img/truck-solid.png' alt="" /></span>
                            <span className='text-green-600 text-sm sm:text-xs md:text-sm'>Llega gratis <strong className='font-medium'>entre el miercoles y el jueves</strong></span>
                        </div>
                        <div className='text-sm font-medium lg:my-7 2xl:my-10'>
                            Stock disponible
                            <span className='pl-3 font-light text-gray-300'>({stock} disponibles)</span>
                        </div>
                            <ItemCount stock={stock} initial={1} onAdd={handleAdd}/>
                        <div className='mt-2 flex gap-2'>
                            <Link to={`/cart`} className='w-full'>
                            <button className='bg-blue-600/90 hover:bg-blue-600/100 px-4 py-2 w-full rounded-md text-white font-medium tracking-wider transition'>
                                Comprar ahora
                            </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='px-5 py-3 flex flex-col gap-3 sm:mt-5 xl:pt-14 xl:order-2'>
                    <h3 className='font-medium text-xl overflow-ellipsis overflow-hidden whitespace-nowrap'>Descripcion del producto</h3>
                    <div className='hidden py-3 xl:flex'><p className=''>{description}</p></div>
                    
                </div>
                <div className='py-3 px-5 sm:col-span-2 xl:hidden'><p className=''>{description}</p></div>
            </div>
    )
} 

export default Items;