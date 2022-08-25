import React, { useState } from 'react'

const ItemCount = (props) => {

    const [quantity, setQuantity] = useState(props.initial);

    const handleDecrement=()=>{
        quantity > props.initial ? setQuantity(quantity-1) : setQuantity(quantity)
    }

    const handleIncrement=()=>{
        quantity < props.stock ? setQuantity(quantity+1) : setQuantity(quantity)
    }

    return (
    <>
        <div className='mt-5 flex gap-2'>
            <div className='flex bg-slate-50'>
                <button className='bg-blue-500 px-4 py-1 rounded-md text-white font-medium tracking-wider transition' onClick={handleDecrement}>-</button>
                <h3 className='px-8 py-2 rounded-md'>{quantity}</h3>
                <button className='bg-blue-500 px-4 py-1 rounded-md text-white font-medium tracking-wider transition' onClick={handleIncrement}>+</button>
            </div>
            <button className='flex px-4 py-2 opacity-50 hover:opacity-100 sm:px-0 sm:py-0'>
                <img className='mr-5 sm:mr-0 sm:mt-2 sm:ml-2 md:ml-3' src='/img/love.svg' alt="add to favorites" />
                <span className='text-xs text-gray-400 mt-1 sm:ml-3 sm:mt-3'>Agregar a favoritos</span>
            </button>
        </div>
        <div className='mt-5 flex gap-2 sm:mt-7 lg:mt-10 2xl:mt-14'>
            <button onClick={()=>props.onAdd(quantity)} className='bg-blue-200/90 hover:bg-blue-200/100 px-4 py-2 w-full rounded-md text-blue-500 font-medium tracking-wider transition'>
                Agregar al carrito
            </button>
        </div>
    </>
    )
}

export default ItemCount