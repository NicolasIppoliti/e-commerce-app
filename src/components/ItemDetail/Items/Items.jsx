import React from 'react'
import ItemCount from '../../ItemCount/ItemCount'
import favorites from '../../../img/love.svg'
import freeShipping from '../../../img/truck-solid.png'

const Items = (props) => {
    return (
            <div className="bg-white text-gray-700 w-full h-full overflow-hidden sm:grid sm:grid-cols-2 xl:grid-cols-3">
                <div className='mx-10 mt-10'>
                <img
                    src={props.img}
                    className="w-80 h-full object-cover md:w-96 2xl:w-full"
                    alt=""/>
                </div>
                <div className="p-5 flex flex-col gap-3 lg:mt-10 xl:order-3">
                    <h4 className='font-medium text-xl overflow-ellipsis overflow-hidden whitespace-nowrap sm:mt-4 md:mt-10 lg:text-2xl 2xl:pb-3'>{props.name}</h4>
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
                        <div className='flex items-center gap-2 my-5 lg:my-7'>
                            <span><img className='w-4 h-4' src={freeShipping} alt="" /></span>
                            <span className='text-green-600 text-sm sm:text-xs md:text-sm'>Llega gratis <strong className='font-medium'>entre el miercoles y el jueves</strong></span>
                        </div>
                        <div className='text-sm font-medium lg:my-7 2xl:my-10'>
                            Stock disponible
                            <span className='pl-3 font-light text-gray-300'>({props.stock} disponibles)</span>
                        </div>
                        <div className='mt-5 flex gap-2'>
                            <ItemCount stock={props.stock} initial={1}/>
                            <button className='flex px-4 py-2 opacity-50 hover:opacity-100 sm:px-0 sm:py-0'>
                                <img className='mr-5 sm:mr-0 sm:mt-2 sm:ml-2 md:ml-3' src={favorites} alt="add to favorites" />
                                <span className='text-xs text-gray-400 mt-1 sm:ml-3 sm:mt-3'>Agregar a favoritos</span>
                            </button>
                        </div>
                        <div className='mt-5 flex gap-2 sm:mt-7 lg:mt-10 2xl:mt-14'>
                            <button className='bg-blue-600/90 hover:bg-blue-600/100 px-4 py-2 w-full rounded-md text-white font-medium tracking-wider transition'>
                                Comprar ahora
                            </button>
                        </div>
                        <div className='mt-2 flex gap-2'>
                            <button className='bg-blue-200/90 hover:bg-blue-200/100 px-4 py-2 w-full rounded-md text-blue-500 font-medium tracking-wider transition'>
                                Agregar al carrito
                            </button>
                        </div>
                    </div>
                </div>
                <div className='px-5 py-3 flex flex-col gap-3 sm:mt-5 xl:pt-14 xl:order-2'>
                    <h3 className='font-medium text-xl overflow-ellipsis overflow-hidden whitespace-nowrap'>Descripcion del producto</h3>
                    <div className='hidden py-3 xl:flex'><p className=''>{props.description}</p></div>
                    
                </div>
                <div className='py-3 px-5 sm:col-span-2 xl:hidden'><p className=''>{props.description}</p></div>
            </div>
    )
} 

export default Items;