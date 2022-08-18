import React from 'react'
import ItemCount from '../../ItemCount/ItemCount'
import favorites from '../../../img/love.svg'
import {Link} from 'react-router-dom'

const Items = (props) => {
    return (
        <Link to={`/products/${props.id}`}>
            <div className="bg-white text-gray-700 w-72 min-h-[10rem] shadow-lg rounded-md overflow-hidden mx-auto mb-5 sm:grid">
                <img
                    src={props.img}
                    className="w-full h-full object-cover"
                    alt={props.id}
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
                    </div>
                </div>
            </div>
        </Link>
    )
} 

export default Items;