import React from 'react'
import ItemCount from '../../ItemCount/ItemCount'
import favorites from '../../../img/love.svg'

const Items = (props) => {
    return (
            <div className="bg-white text-gray-700 w-72 min-h-[10rem] shadow-lg rounded-md overflow-hidden mx-auto mb-5">
                <img
                    src={props.img}
                    className="w-full h-full object-cover"
                    alt=""
                />
                <div className="p-5 flex flex-col gap-3">
                    <div className='flex items-center gap-2'>
                        <span className='badge'>Envio gratis</span>
                        <span className='badge'>Stock disponible</span>
                    </div>
                    <h4 className='font-medium text-xl overflow-ellipsis overflow-hidden whitespace-nowrap'>{props.name}</h4>
                    <div>
                        <span className='text-2xl font-light'>
                            {props.discount}
                        </span>
                        <div className='flex items-center gap-2 mt-1'>
                            <span className='text-sm line-through opacity-50'>
                                {props.price}
                            </span>
                            <span className='bg-green-600 px-1.5 py-0.5 rounded-md text-xs text-white'>
                                20% OFF
                            </span>
                        </div>
                        <div className='mt-5 flex gap-2'>
                            <ItemCount stock={props.stock} initial={1}/>
                        </div>
                        <div className='mt-5 flex gap-2'>
                            <button className='bg-blue-500/90 hover:bg-blue-500/100 px-4 py-2 rounded-md text-white font-medium tracking-wider transition'>
                                Agregar al carrito
                            </button>
                            <button className='px-4 py-2 opacity-50 hover:opacity-100'>
                                <img className='' src={favorites} alt="add to favorites" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
    )
} 

export default Items;